// sdk/index.js

// import * as faceapi from "face-api.js";
class Proctoring {
  constructor() {
    this.proctoring = false;
    this.stream = null;
    this.handleVisibilityChange = this.handleVisibilityChange.bind(this);
    this.handleFullScreenChange = this.handleFullScreenChange.bind(this);
    this.monitorCheckInterval = null;
    this.options = {};
    this.proctorId = null;
    this.camera = null;
    this.csvData = [];
    this.violationCounts = {};
    this.violations = {
      tabSwitchOrMinimized: [],
      fullScreenExited: [],
      ctrlPressed: [],
      shiftPressed: [],
      rightClicked: [],
      functionKeyPressed: [],
      noiseDetected: [],
    };
    this.exitingFullscreen = false;
    this.specificAnomalyCount = 0;
    this.screenshotInProgress = false;
    this.faceDetectionInterval = null;
    this.audioContext = null;
    this.mediaStreamSource = null;
    this.analyser = null;
    this.screenStream = null;
    this.audioStream = null;
    this.audioContext = null;
    this.noiseCheckInterval = null;
    this.mediaRecorder = null;
    this.recording = false;
    this.noiseThreshold = 50;
    this.videoElement = null;

    if (typeof window !== "undefined") {
      window.addEventListener("load", this.logPageLoad.bind(this));
      document.addEventListener(
        "fullscreenchange",
        this.handleFullScreenChange
      );
      document.addEventListener(
        "visibilitychange",
        this.handleVisibilityChange
      );

      this.loadModels().then(() => {
        this.startCameraFaceDetection();
      });
    }
  }

  async loadModels() {
    const modelPath = `${window.location.origin}/models`;
    const faceapi = await import("face-api.js");
    // const modelPath = `sdk/models`;
    console.log(`Loading models from: ${modelPath}`);
    await Promise.all([
      faceapi.nets.tinyFaceDetector.loadFromUri(modelPath),
      faceapi.nets.faceLandmark68Net.loadFromUri(modelPath),
      faceapi.nets.faceRecognitionNet.loadFromUri(modelPath),
    ]);
    console.log("Models loaded successfully");
  }

  async promptScreenShare() {
    try {
      this.screenStream = await navigator.mediaDevices.getDisplayMedia({
        video: {
          displaySurface: "monitor",
          cursor: "always",
          logicalSurface: true,
        },
        audio: false,
      });

      const track = this.screenStream.getVideoTracks()[0];
      if (track && track.kind === "video") {
        track.onended = async () => {
          const event = "Screen Sharing Stopped";
          const timestamp = new Date().toISOString();
          this.logViolation(event);
          alert("Please share your entire screen.");
          await this.promptScreenShare();
        };
        return true;
      } else {
        alert("Please share your entire screen.");
        this.stopProctoring();
      }
    } catch (error) {
      console.error("Screen sharing was canceled or failed: ", error);
      if (error.name === "NotAllowedError") {
        alert(
          "Screen sharing was denied. Please allow screen sharing and try again."
        );
        await this.promptScreenShare();
      } else {
        alert("Please share your entire screen.");
      }
      // const event = "Screen Sharing Canceled";
      // const timestamp = new Date().toISOString();
      // this.logViolation(event);
      await new Promise((resolve) => setTimeout(resolve, 3000)); // wait before retrying
    }
    return false;
  }

  async startProctoring(options, proctorId, all = false) {
    if (document.pictureInPictureElement) {
      document.exitPictureInPicture();
    }

    if (all) {
      options = {
        tabSwitchOrMinimize: true,
        capturePageReloads: true,
        enforceFullScreen: true,
        captureScreenshots: true,
        disableKeys: true,
        disableMultipleScreens: true,
        detectNoise: true,
        faceDetection: true,
      };
    }

    this.options = options;
    this.proctorId = proctorId;

    let started = true;
    if (this.options.captureScreenshots) {
      started = await this.promptScreenShare();
      if (!started) return false;
    }

    this.proctoring = true;

    if (this.options.faceDetection) {
      this.startFaceDetection();
    }

    if (this.options.tabSwitchOrMinimize) {
      document.addEventListener(
        "visibilitychange",
        this.handleVisibilityChange.bind(this)
      );
    }

    if (this.options.disableKeys) {
      window.addEventListener("keydown", this.disableKeys.bind(this));
      window.addEventListener("contextmenu", this.disableRightClick.bind(this));
    }

    if (this.options.capturePageReloads) {
      window.addEventListener(
        "beforeunload",
        this.handleBeforeUnload.bind(this)
      );
    }

    if (this.options.enforceFullScreen) {
      this.enterFullScreen();
    }

    if (this.options.disableMultipleScreens) {
      this.startMonitorCheck();
    }

    if (this.options.detectNoise) {
      this.startNoiseDetection();
    }

    return true;
  }

  async stopProctoring() {
    this.proctoring = false;

    // Stop screen sharing stream if it's active
    if (this.screenStream) {
      this.screenStream.getTracks().forEach((track) => {
        if (track.readyState !== "ended") {
          track.stop();
        }
      });
      this.screenStream = null;
    }

    // Stop audio stream if it's active
    if (this.audioStream) {
      this.audioStream.getTracks().forEach((track) => {
        if (track.readyState !== "ended") {
          track.stop();
        }
      });
      this.audioStream = null;
    }

    // Stop general media stream if it's active
    if (this.stream) {
      this.stream.getTracks().forEach((track) => {
        if (track.readyState !== "ended") {
          track.stop();
        }
      });
      this.stream = null;
    }

    // Remove event listeners
    document.removeEventListener(
      "visibilitychange",
      this.handleVisibilityChange.bind(this)
    );
    window.removeEventListener("keydown", this.disableKeys.bind(this));
    window.removeEventListener(
      "contextmenu",
      this.disableRightClick.bind(this)
    );
    window.removeEventListener(
      "beforeunload",
      this.handleBeforeUnload.bind(this)
    );

    // Exit full screen if enforced
    this.exitFullScreen();
    // Stop monitor check if it's active
    this.stopMonitorCheck();
    // Stop noise detection if it's active
    this.stopNoiseDetection();
    // Stop face detection if it's active
    this.stopFaceDetection();

    return { violations: this.violations };
  }

  async startCameraFaceDetection() {
    try {
      this.stream = await navigator.mediaDevices.getUserMedia({
        video: true,
      });
      const videoTrack = this.stream.getVideoTracks()[0];
      if (!videoTrack || videoTrack.kind !== "video") {
        throw new Error("No valid video track found.");
      }

      this.videoElement = document.createElement("video");
      this.videoElement.srcObject = this.stream;
      this.videoElement.onloadedmetadata = () => {
        this.videoElement.play();

        // Ensure the video dimensions are set
        this.videoElement.width = this.videoElement.videoWidth;
        this.videoElement.height = this.videoElement.videoHeight;

        // Start face detection after video is playing
        if (this.options.faceDetection) {
          this.startFaceDetection();
        }
      };
    } catch (error) {
      console.error("Error starting camera face detection:", error);
    }
  }

  async stopCameraFaceDetection() {
    if (this.stream) {
      this.stream.getTracks().forEach((track) => track.stop());
      this.stream = null;
    }
    if (this.videoElement) {
      this.videoElement.pause();
      this.videoElement.srcObject = null;
      this.videoElement = null;
    }

    this.stopFaceDetection();
  }

  async startFaceDetection() {
    await this.loadModels();

    this.faceDetectionInterval = setInterval(async () => {
      try {
        const detections = await faceapi.detectAllFaces(
          this.videoElement,
          new faceapi.TinyFaceDetectorOptions()
        );

        // Process detections as needed
        if (detections.length === 0) {
          this.logViolation("No Face Detected");
        } else if (detections.length > 1) {
          this.logViolation("Multiple Faces Detected");
        }
      } catch (error) {
        console.error("Error detecting faces:", error);
      }
    }, 1000);
  }

  stopFaceDetection() {
    if (this.faceDetectionInterval) {
      clearInterval(this.faceDetectionInterval);
      this.faceDetectionInterval = null;
    }
  }

  async startNoiseDetection() {
    console.log("Starting noise detection called");
    if (!this.audioContext) {
      this.audioContext = new (window.AudioContext ||
        window.webkitAudioContext)();
    }
    this.audioStream = await navigator.mediaDevices.getUserMedia({
      audio: true,
    });
    this.mediaStreamSource = this.audioContext.createMediaStreamSource(
      this.audioStream
    );
    this.analyser = this.audioContext.createAnalyser();
    this.mediaStreamSource.connect(this.analyser);
    this.analyser.fftSize = 256;
    const bufferLength = this.analyser.frequencyBinCount;
    const dataArray = new Uint8Array(bufferLength);

    this.mediaRecorder = new MediaRecorder(this.audioStream);
    const chunks = [];

    this.mediaRecorder.ondataavailable = (event) => {
      chunks.push(event.data);
    };

    this.mediaRecorder.onstop = async () => {
      const blob = new Blob(chunks, { type: "audio/mp3" });
      const reader = new FileReader();
      reader.readAsDataURL(blob);
      reader.onloadend = () => {
        const base64data = reader.result.split(",")[1];
        const event = "Noise Detected";
        const timestamp = new Date().toISOString();
        this.logViolation(event, base64data);
      };
    };

    this.noiseCheckInterval = setInterval(() => {
      this.analyser.getByteFrequencyData(dataArray);
      const average = dataArray.reduce((a, b) => a + b, 0) / bufferLength;
      console.log("Average noise level: ", average);
      if (average > this.noiseThreshold) {
        this.logViolation("Noise Detected");
      }

      if (average >= this.noiseThreshold && !this.recording) {
        this.recording = true;
        this.mediaRecorder.start();
      } else if (average < this.noiseThreshold && this.recording) {
        this.recording = false;
        this.mediaRecorder.stop();
      }
    }, 1000);
  }

  async stopNoiseDetection() {
    if (this.noiseCheckInterval) {
      clearInterval(this.noiseCheckInterval);
      this.noiseCheckInterval = null;
    }
    if (this.audioStream) {
      this.audioStream.getTracks().forEach((track) => track.stop());
      this.audioStream = null;
    }
    if (this.audioContext) {
      this.audioContext.close();
      this.audioContext = null;
    }
    if (this.mediaRecorder && this.recording) {
      this.mediaRecorder.stop();
      this.recording = false;
    }
  }

  async captureAudio() {
    const mediaRecorder = new MediaRecorder(this.stream);
    const chunks = [];
    mediaRecorder.ondataavailable = (event) => {
      chunks.push(event.data);
    };
    mediaRecorder.start();
    await new Promise((resolve) => setTimeout(resolve, 1000));
    mediaRecorder.stop();

    return new Promise((resolve) => {
      mediaRecorder.onstop = async () => {
        const blob = new Blob(chunks, { type: "audio/mp3" });
        const audioFileName = `${
          this.proctorId
        }_${new Date().toISOString()}_noise.mp3`;
        this.downloadFile(blob, audioFileName);
        resolve(audioFileName);
      };
    });
  }

  async logViolation(violationType, evidence = null) {
    console.log(
      `Logging violation: ${violationType} with evidence: ${!!evidence}`
    );
    if (!this.proctoring) return;

    const timestamp = new Date().toISOString();
    const folderNameMapping = {
      "Right Click": "right-click",
      "No Face Detected": "no-face",
      "Multiple Faces Detected": "multiple-face",
      "alt-key-pressed": "press-alt",
      "control-key-pressed": "press-ctrl",
      "Tab Switch or Minimized": "tab-switch",
      "Noise Detected": "noise",
      "page-reload-or-exit-attempt": "reload",
      "Screen Sharing Stopped": "stop-screenshare",
      "Full Screen Exited": "exit-fullscreen",
    };

    const folderName = folderNameMapping[violationType] || violationType;

    const violation = {
      violationType,
      timestamp,
      evidence,
      folderName,
    };

    if (!this.violations[violationType]) {
      this.violations[violationType] = [];
    }
    this.violations[violationType].push(violation);

    console.log(`Violation logged: ${violationType} at ${timestamp}`);
    console.log("Evidence data:", evidence);

    if (evidence) {
      try {
        const response = await this.uploadEvidence(
          violationType,
          evidence,
          timestamp,
          folderName
        );
        console.log("Evidence uploaded response:", response);
      } catch (error) {
        console.error("Error uploading evidence:", error);
      }
    } else if (this.options.captureScreenshots) {
      try {
        let screenshotData = null;
        if (
          ["No Face Detected", "Multiple Faces Detected"].includes(
            violationType
          )
        ) {
          screenshotData = await this.captureScreenshot(
            violationType,
            timestamp,
            false
          );
        } else {
          screenshotData = await this.captureScreenshot(
            violationType,
            timestamp,
            true
          );
        }
        if (screenshotData) {
          const response = await this.uploadEvidence(
            violationType,
            screenshotData,
            timestamp,
            folderName
          );
          console.log("Screenshot evidence uploaded response:", response);
        }
      } catch (error) {
        console.error(
          `Error capturing screenshot for ${violationType}:`,
          error
        );
      }
    }
  }

  async uploadEvidence(violationType, evidence, timestamp) {
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/upload`,
        // `${process.env.NEXT_PUBLIC_BACKEND_URL}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            proctorId: this.proctorId,
            violationType,
            evidence,
            timestamp,
          }),
          mode: "cors",
        }
      );

      if (!response.ok) {
        throw new Error(`Failed to upload evidence: ${response.statusText}`);
      }

      const data = await response.json();
      console.log("Evidence uploaded successfully:", data);
      return data;
    } catch (error) {
      console.error("Error uploading evidence:", error);
      throw error;
    }
  }

  async captureScreenshot(event, timestamp, useScreenStream = false) {
    console.log(`Capturing screenshot for event: ${event} at ${timestamp}`);
    if (
      !this.proctoring ||
      this.screenshotInProgress ||
      !this.options.captureScreenshots
    )
      return null;
    this.screenshotInProgress = true;

    try {
      await new Promise((resolve) => setTimeout(resolve, 1000)); // ensure the video is ready

      const stream = useScreenStream ? this.screenStream : this.stream;
      const track = stream?.getVideoTracks()[0];
      if (!track || track.readyState !== "live" || track.kind !== "video") {
        console.error(
          "Failed to capture screenshot: No video track found or track is not of kind 'video'."
        );
        return null;
      }

      const canvas = document.createElement("canvas");
      const videoElement = document.createElement("video");

      videoElement.srcObject = stream;
      videoElement.play();

      await new Promise((resolve) => {
        videoElement.onloadedmetadata = () => {
          videoElement.width = videoElement.videoWidth;
          videoElement.height = videoElement.videoHeight;
          resolve();
        };
      });

      canvas.width = videoElement.videoWidth;
      canvas.height = videoElement.videoHeight;
      const ctx = canvas.getContext("2d");
      ctx.drawImage(videoElement, 0, 0, canvas.width, canvas.height);
      const base64Data = canvas.toDataURL("image/jpeg", 0.5).split(",")[1]; // Split to get only the base64 string

      videoElement.pause();
      videoElement.srcObject = null;

      if (base64Data) {
        const screenshot = {
          timestamp: new Date().toISOString(),
          event,
          base64Data,
        };

        this.csvData.push(screenshot);
        await this.logViolation(event, base64Data);
      } else {
        console.error("Failed to capture screenshot.");
      }

      return base64Data;
    } catch (error) {
      console.error("Error capturing screenshot:", error);
      return null;
    } finally {
      this.screenshotInProgress = false;
    }
  }

  dataURLtoBlob(dataURL) {
    const byteString = atob(dataURL.split(",")[1]);
    const mimeString = dataURL.split(",")[0].split(":")[1].split(";")[0];
    const arrayBuffer = new ArrayBuffer(byteString.length);
    const uint8Array = new Uint8Array(arrayBuffer);

    for (let i = 0; i < byteString.length; i++) {
      uint8Array[i] = byteString.charCodeAt(i);
    }

    return new Blob([arrayBuffer], { type: mimeString });
  }

  downloadFile(blob, fileName) {
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.style.display = "none";
    a.href = url;
    a.download = fileName;
    document.body.appendChild(a);
    a.click();
    window.URL.revokeObjectURL(url);
    document.body.removeChild(a);
  }

  handleFullScreenChange() {
    if (
      this.proctoring &&
      this.options.enforceFullScreen &&
      !document.fullscreenElement
    ) {
      const event = "Full Screen Exited";
      const timestamp = new Date().toISOString();
      this.logViolation(event);
      this.captureScreenshot(event, timestamp, true);
    }
  }

  handleVisibilityChange() {
    if (this.proctoring && document.visibilityState !== "visible") {
      const event = "Tab Switch or Minimized";
      const timestamp = new Date().toISOString();
      this.logViolation(event);
      this.captureScreenshot(event, timestamp, true);
    }
  }

  handleBeforeUnload(event) {
    event.preventDefault();
    event.returnValue = "";
    const logEvent = "page-reload-or-exit-attempt";
    const timestamp = new Date().toISOString();
    this.logViolation(logEvent);
    this.captureScreenshot(logEvent, timestamp, true);
  }

  async disableKeys(event) {
    const keys = ["control", "shift", "alt"];
    if (keys.includes(event.key)) {
      event.preventDefault();
      const logEvent = `${event.key}-key-pressed`;
      const timestamp = new Date().toISOString();

      // Log the violation
      this.logViolation(logEvent);

      // Capture the screenshot asynchronously
      if (this.options.captureScreenshots) {
        try {
          await this.captureScreenshot(logEvent, timestamp, true);
        } catch (error) {
          console.error(`Error capturing screenshot for ${logEvent}:`, error);
        }
      }
    }
  }

  disableRightClick(event) {
    event.preventDefault();
    const logEvent = "Right Click";
    const timestamp = new Date().toISOString();
    this.logViolation(logEvent);
    this.captureScreenshot(logEvent, timestamp, true);
  }

  enterFullScreen() {
    if (document.documentElement.requestFullscreen) {
      document.documentElement.requestFullscreen();
    } else if (document.documentElement.webkitRequestFullscreen) {
      document.documentElement.webkitRequestFullscreen();
    } else if (document.documentElement.msRequestFullscreen) {
      document.documentElement.msRequestFullscreen();
    }
  }

  exitFullScreen() {
    if (document.fullscreenElement && !this.exitingFullscreen) {
      this.exitingFullscreen = true;
      document
        .exitFullscreen()
        .then(() => {
          this.exitingFullscreen = false;
          console.log("Exited fullscreen successfully");
        })
        .catch((err) => {
          this.exitingFullscreen = false;
          console.error("Error trying to exit fullscreen:", err);
        });
    } else if (!document.fullscreenElement) {
      console.warn("Document is not in fullscreen mode");
    }
  }

  startMonitorCheck() {
    this.monitorCheckInterval = setInterval(() => {
      if (this.proctoring) {
        const dualScreenCheck =
          window.screen.width / window.screen.availWidth > 1;
        if (dualScreenCheck) {
          const logEvent = "multiple-screens-detected";
          const timestamp = new Date().toISOString();
          this.logViolation(logEvent);
          this.captureScreenshot(logEvent, timestamp, true);
        }
      }
    }, 3000);
  }

  stopMonitorCheck() {
    if (this.monitorCheckInterval) {
      clearInterval(this.monitorCheckInterval);
      this.monitorCheckInterval = null;
    }
  }

  logPageLoad() {
    const logEvent = "page-reloaded";
    const timestamp = new Date().toISOString();
    this.logViolation(logEvent);
    this.captureScreenshot(logEvent, timestamp);
  }
}

export default Proctoring;
