const _0x3e4c0a=_0x11df;(function(_0x486ed8,_0x2f5c3c){const _0x680bb2=_0x11df,_0x1437a7=_0x486ed8();while(!![]){try{const _0x5c3697=-parseInt(_0x680bb2(0x13d))/0x1*(-parseInt(_0x680bb2(0xc9))/0x2)+parseInt(_0x680bb2(0xf6))/0x3+-parseInt(_0x680bb2(0xfa))/0x4+-parseInt(_0x680bb2(0xa6))/0x5*(parseInt(_0x680bb2(0xaa))/0x6)+parseInt(_0x680bb2(0xae))/0x7*(parseInt(_0x680bb2(0xba))/0x8)+-parseInt(_0x680bb2(0x11c))/0x9*(-parseInt(_0x680bb2(0xc6))/0xa)+parseInt(_0x680bb2(0x89))/0xb*(-parseInt(_0x680bb2(0xe7))/0xc);if(_0x5c3697===_0x2f5c3c)break;else _0x1437a7['push'](_0x1437a7['shift']());}catch(_0x595594){_0x1437a7['push'](_0x1437a7['shift']());}}}(_0x2c4e,0xb814c));import*as _0x45d89a from'face-api.js';class Proctoring{constructor(){const _0x10fd84=_0x11df;this[_0x10fd84(0x98)]=![],this[_0x10fd84(0xd4)]=null,this[_0x10fd84(0x10a)]=this[_0x10fd84(0x10a)][_0x10fd84(0x142)](this),this[_0x10fd84(0xa2)]=this[_0x10fd84(0xa2)][_0x10fd84(0x142)](this),this[_0x10fd84(0xbf)]=null,this[_0x10fd84(0xbd)]={},this[_0x10fd84(0x103)]=null,this['camera']=null,this['csvData']=[],this[_0x10fd84(0xb0)]={},this['violations']={'tabSwitchOrMinimized':[],'fullScreenExited':[],'ctrlPressed':[],'shiftPressed':[],'rightClicked':[],'functionKeyPressed':[],'noiseDetected':[]},this['exitingFullscreen']=![],this['specificAnomalyCount']=0x0,this[_0x10fd84(0xaf)]=![],this['faceDetectionInterval']=null,this[_0x10fd84(0x127)]=null,this[_0x10fd84(0xce)]=null,this[_0x10fd84(0xbe)]=null,this[_0x10fd84(0x125)]=null,this['audioStream']=null,this['audioContext']=null,this[_0x10fd84(0xda)]=null,this[_0x10fd84(0x13b)]=null,this[_0x10fd84(0xc0)]=![],this[_0x10fd84(0x145)]=0x32,this[_0x10fd84(0x12b)]=null,typeof window!=='undefined'&&(window['addEventListener'](_0x10fd84(0x121),this[_0x10fd84(0xe6)][_0x10fd84(0x142)](this)),document[_0x10fd84(0xec)](_0x10fd84(0x8b),this[_0x10fd84(0xa2)]),document[_0x10fd84(0xec)]('visibilitychange',this[_0x10fd84(0x10a)]),this[_0x10fd84(0xbb)]()[_0x10fd84(0xff)](()=>{const _0x4c62b3=_0x10fd84;this[_0x4c62b3(0x99)]();}));}async[_0x3e4c0a(0xbb)](){const _0x2a0690=_0x3e4c0a,_0x5920d3=window['location'][_0x2a0690(0xd7)]+_0x2a0690(0x11f);console['log']('Loading\x20models\x20from:\x20'+_0x5920d3),await Promise['all']([_0x45d89a[_0x2a0690(0x108)][_0x2a0690(0x85)][_0x2a0690(0x124)](_0x5920d3),_0x45d89a['nets'][_0x2a0690(0x11a)][_0x2a0690(0x124)](_0x5920d3),_0x45d89a[_0x2a0690(0x108)][_0x2a0690(0x107)]['loadFromUri'](_0x5920d3)]),console[_0x2a0690(0xe1)](_0x2a0690(0x10f));}async[_0x3e4c0a(0xcc)](){const _0x57d6cc=_0x3e4c0a;try{this[_0x57d6cc(0x125)]=await navigator[_0x57d6cc(0x105)]['getDisplayMedia']({'video':{'displaySurface':'monitor','cursor':_0x57d6cc(0x91),'logicalSurface':!![]},'audio':![]});const _0x36c5f4=this[_0x57d6cc(0x125)][_0x57d6cc(0xdc)]()[0x0];if(_0x36c5f4&&_0x36c5f4['kind']===_0x57d6cc(0xb1))return _0x36c5f4[_0x57d6cc(0x9a)]=async()=>{const _0xc38d5f=_0x57d6cc,_0x303e85='Screen\x20Sharing\x20Stopped',_0x114edd=new Date()[_0xc38d5f(0xb8)]();this[_0xc38d5f(0xea)](_0x303e85),alert(_0xc38d5f(0x148)),await this[_0xc38d5f(0xcc)]();},!![];else alert('Please\x20share\x20your\x20entire\x20screen.'),this[_0x57d6cc(0xab)]();}catch(_0x4d470d){console['error']('Screen\x20sharing\x20was\x20canceled\x20or\x20failed:\x20',_0x4d470d),_0x4d470d['name']===_0x57d6cc(0xf1)?(alert(_0x57d6cc(0x111)),await this[_0x57d6cc(0xcc)]()):alert(_0x57d6cc(0x148)),await new Promise(_0x5e6e2c=>setTimeout(_0x5e6e2c,0xbb8));}return![];}async[_0x3e4c0a(0xa7)](_0x405325,_0x2621bc,_0x180e97=![]){const _0x31c8ac=_0x3e4c0a;document['pictureInPictureElement']&&document['exitPictureInPicture']();_0x180e97&&(_0x405325={'tabSwitchOrMinimize':!![],'capturePageReloads':!![],'enforceFullScreen':!![],'captureScreenshots':!![],'disableKeys':!![],'disableMultipleScreens':!![],'detectNoise':!![],'faceDetection':!![]});this[_0x31c8ac(0xbd)]=_0x405325,this[_0x31c8ac(0x103)]=_0x2621bc;let _0x5cf4f9=!![];if(this[_0x31c8ac(0xbd)][_0x31c8ac(0xa9)]){_0x5cf4f9=await this[_0x31c8ac(0xcc)]();if(!_0x5cf4f9)return![];}return this[_0x31c8ac(0x98)]=!![],this['options'][_0x31c8ac(0xa3)]&&this[_0x31c8ac(0x116)](),this[_0x31c8ac(0xbd)]['tabSwitchOrMinimize']&&document[_0x31c8ac(0xec)](_0x31c8ac(0x110),this[_0x31c8ac(0x10a)][_0x31c8ac(0x142)](this)),this['options']['disableKeys']&&(window['addEventListener']('keydown',this[_0x31c8ac(0x102)]['bind'](this)),window[_0x31c8ac(0xec)](_0x31c8ac(0x87),this[_0x31c8ac(0xb3)][_0x31c8ac(0x142)](this))),this['options'][_0x31c8ac(0x122)]&&window['addEventListener']('beforeunload',this[_0x31c8ac(0xbc)][_0x31c8ac(0x142)](this)),this[_0x31c8ac(0xbd)]['enforceFullScreen']&&this[_0x31c8ac(0x141)](),this[_0x31c8ac(0xbd)][_0x31c8ac(0x92)]&&this[_0x31c8ac(0x147)](),this[_0x31c8ac(0xbd)][_0x31c8ac(0x88)]&&this[_0x31c8ac(0xd5)](),!![];}async[_0x3e4c0a(0xab)](){const _0x4fb5c6=_0x3e4c0a;return this[_0x4fb5c6(0x98)]=![],this[_0x4fb5c6(0x125)]&&(this[_0x4fb5c6(0x125)][_0x4fb5c6(0xa0)]()[_0x4fb5c6(0xa1)](_0x20fb90=>{const _0x38fd6e=_0x4fb5c6;_0x20fb90[_0x38fd6e(0x129)]!==_0x38fd6e(0x117)&&_0x20fb90['stop']();}),this[_0x4fb5c6(0x125)]=null),this[_0x4fb5c6(0xf2)]&&(this[_0x4fb5c6(0xf2)][_0x4fb5c6(0xa0)]()['forEach'](_0x514c5d=>{const _0xcad64b=_0x4fb5c6;_0x514c5d[_0xcad64b(0x129)]!==_0xcad64b(0x117)&&_0x514c5d[_0xcad64b(0xf8)]();}),this[_0x4fb5c6(0xf2)]=null),this[_0x4fb5c6(0xd4)]&&(this[_0x4fb5c6(0xd4)]['getTracks']()[_0x4fb5c6(0xa1)](_0xd46a30=>{const _0x5bd93a=_0x4fb5c6;_0xd46a30[_0x5bd93a(0x129)]!=='ended'&&_0xd46a30[_0x5bd93a(0xf8)]();}),this[_0x4fb5c6(0xd4)]=null),document['removeEventListener'](_0x4fb5c6(0x110),this[_0x4fb5c6(0x10a)][_0x4fb5c6(0x142)](this)),window[_0x4fb5c6(0x86)](_0x4fb5c6(0x13e),this[_0x4fb5c6(0x102)][_0x4fb5c6(0x142)](this)),window[_0x4fb5c6(0x86)](_0x4fb5c6(0x87),this[_0x4fb5c6(0xb3)][_0x4fb5c6(0x142)](this)),window[_0x4fb5c6(0x86)](_0x4fb5c6(0xe3),this[_0x4fb5c6(0xbc)]['bind'](this)),this[_0x4fb5c6(0xdd)](),this[_0x4fb5c6(0x97)](),this[_0x4fb5c6(0xf4)](),this['stopFaceDetection'](),{'violations':this[_0x4fb5c6(0xfd)]};}async['startCameraFaceDetection'](){const _0x1c79ff=_0x3e4c0a;try{this[_0x1c79ff(0xd4)]=await navigator[_0x1c79ff(0x105)][_0x1c79ff(0x13a)]({'video':!![]});const _0x391163=this[_0x1c79ff(0xd4)][_0x1c79ff(0xdc)]()[0x0];if(!_0x391163||_0x391163[_0x1c79ff(0x94)]!==_0x1c79ff(0xb1))throw new Error(_0x1c79ff(0x13f));this[_0x1c79ff(0x12b)]=document[_0x1c79ff(0x136)](_0x1c79ff(0xb1)),this[_0x1c79ff(0x12b)]['srcObject']=this[_0x1c79ff(0xd4)],this[_0x1c79ff(0x12b)][_0x1c79ff(0x119)]=()=>{const _0x35279a=_0x1c79ff;this['videoElement']['play'](),this[_0x35279a(0x12b)][_0x35279a(0xfb)]=this[_0x35279a(0x12b)][_0x35279a(0xa5)],this[_0x35279a(0x12b)][_0x35279a(0x8d)]=this[_0x35279a(0x12b)][_0x35279a(0x8c)],this[_0x35279a(0xbd)][_0x35279a(0xa3)]&&this[_0x35279a(0x116)]();};}catch(_0x2685b6){console[_0x1c79ff(0x115)](_0x1c79ff(0x12c),_0x2685b6);}}async['stopCameraFaceDetection'](){const _0x11342e=_0x3e4c0a;this[_0x11342e(0xd4)]&&(this[_0x11342e(0xd4)][_0x11342e(0xa0)]()[_0x11342e(0xa1)](_0x12eba8=>_0x12eba8[_0x11342e(0xf8)]()),this[_0x11342e(0xd4)]=null),this[_0x11342e(0x12b)]&&(this[_0x11342e(0x12b)][_0x11342e(0x109)](),this[_0x11342e(0x12b)]['srcObject']=null,this[_0x11342e(0x12b)]=null),this[_0x11342e(0xe8)]();}async[_0x3e4c0a(0x116)](){await this['loadModels'](),this['faceDetectionInterval']=setInterval(async()=>{const _0x449ec6=_0x11df;try{const _0xe80c94=await _0x45d89a['detectAllFaces'](this['videoElement'],new _0x45d89a[(_0x449ec6(0xb2))]());if(_0xe80c94[_0x449ec6(0x118)]===0x0)this[_0x449ec6(0xea)](_0x449ec6(0xb6));else _0xe80c94['length']>0x1&&this[_0x449ec6(0xea)](_0x449ec6(0xca));}catch(_0x5aaf45){console[_0x449ec6(0x115)](_0x449ec6(0xe4),_0x5aaf45);}},0x3e8);}[_0x3e4c0a(0xe8)](){const _0x12f971=_0x3e4c0a;this[_0x12f971(0xd0)]&&(clearInterval(this['faceDetectionInterval']),this[_0x12f971(0xd0)]=null);}async['startNoiseDetection'](){const _0x14eee5=_0x3e4c0a;console[_0x14eee5(0xe1)]('Starting\x20noise\x20detection\x20called');!this[_0x14eee5(0x127)]&&(this['audioContext']=new(window[(_0x14eee5(0x93))]||window[(_0x14eee5(0x100))])());this[_0x14eee5(0xf2)]=await navigator[_0x14eee5(0x105)][_0x14eee5(0x13a)]({'audio':!![]}),this['mediaStreamSource']=this[_0x14eee5(0x127)][_0x14eee5(0xf0)](this[_0x14eee5(0xf2)]),this['analyser']=this[_0x14eee5(0x127)][_0x14eee5(0xeb)](),this[_0x14eee5(0xce)][_0x14eee5(0x143)](this[_0x14eee5(0xbe)]),this['analyser'][_0x14eee5(0xc8)]=0x100;const _0x49870a=this[_0x14eee5(0xbe)][_0x14eee5(0x13c)],_0x113d22=new Uint8Array(_0x49870a);this['mediaRecorder']=new MediaRecorder(this[_0x14eee5(0xf2)]);const _0xfb5eb8=[];this[_0x14eee5(0x13b)][_0x14eee5(0x135)]=_0x19fc2d=>{_0xfb5eb8['push'](_0x19fc2d['data']);},this[_0x14eee5(0x13b)][_0x14eee5(0x10b)]=async()=>{const _0x2efe39=_0x14eee5,_0x40c9da=new Blob(_0xfb5eb8,{'type':_0x2efe39(0x134)}),_0x404132=new FileReader();_0x404132['readAsDataURL'](_0x40c9da),_0x404132['onloadend']=()=>{const _0xdc4544=_0x2efe39,_0x1ca0b1=_0x404132[_0xdc4544(0x9b)]['split'](',')[0x1],_0x2c57ed='Noise\x20Detected',_0x1f4d25=new Date()[_0xdc4544(0xb8)]();this['logViolation'](_0x2c57ed,_0x1ca0b1);};},this[_0x14eee5(0xda)]=setInterval(()=>{const _0x1f6d85=_0x14eee5;this[_0x1f6d85(0xbe)][_0x1f6d85(0xf5)](_0x113d22);const _0x188717=_0x113d22[_0x1f6d85(0xd3)]((_0x354323,_0x19287d)=>_0x354323+_0x19287d,0x0)/_0x49870a;console[_0x1f6d85(0xe1)](_0x1f6d85(0x112),_0x188717);_0x188717>this[_0x1f6d85(0x145)]&&this[_0x1f6d85(0xea)](_0x1f6d85(0xc5));if(_0x188717>=this[_0x1f6d85(0x145)]&&!this[_0x1f6d85(0xc0)])this['recording']=!![],this[_0x1f6d85(0x13b)][_0x1f6d85(0xfe)]();else _0x188717<this[_0x1f6d85(0x145)]&&this[_0x1f6d85(0xc0)]&&(this[_0x1f6d85(0xc0)]=![],this['mediaRecorder'][_0x1f6d85(0xf8)]());},0x3e8);}async['stopNoiseDetection'](){const _0x57fdd3=_0x3e4c0a;this['noiseCheckInterval']&&(clearInterval(this[_0x57fdd3(0xda)]),this[_0x57fdd3(0xda)]=null),this[_0x57fdd3(0xf2)]&&(this[_0x57fdd3(0xf2)][_0x57fdd3(0xa0)]()[_0x57fdd3(0xa1)](_0x3f2fe6=>_0x3f2fe6[_0x57fdd3(0xf8)]()),this[_0x57fdd3(0xf2)]=null),this[_0x57fdd3(0x127)]&&(this['audioContext']['close'](),this['audioContext']=null),this[_0x57fdd3(0x13b)]&&this[_0x57fdd3(0xc0)]&&(this[_0x57fdd3(0x13b)][_0x57fdd3(0xf8)](),this[_0x57fdd3(0xc0)]=![]);}async[_0x3e4c0a(0xb9)](){const _0x3bb71f=_0x3e4c0a,_0x225f19=new MediaRecorder(this['stream']),_0x1f44a8=[];return _0x225f19[_0x3bb71f(0x135)]=_0x1c428a=>{const _0x289bc3=_0x3bb71f;_0x1f44a8[_0x289bc3(0x90)](_0x1c428a['data']);},_0x225f19[_0x3bb71f(0xfe)](),await new Promise(_0x51c58d=>setTimeout(_0x51c58d,0x3e8)),_0x225f19[_0x3bb71f(0xf8)](),new Promise(_0x32debf=>{const _0x5ba3e8=_0x3bb71f;_0x225f19[_0x5ba3e8(0x10b)]=async()=>{const _0x1f1a55=_0x5ba3e8,_0x470381=new Blob(_0x1f44a8,{'type':'audio/mp3'}),_0x61347d=this[_0x1f1a55(0x103)]+'_'+new Date()[_0x1f1a55(0xb8)]()+_0x1f1a55(0xb7);this[_0x1f1a55(0x104)](_0x470381,_0x61347d),_0x32debf(_0x61347d);};});}async[_0x3e4c0a(0xea)](_0x2663ef,_0x144c11=null){const _0x76a709=_0x3e4c0a;console[_0x76a709(0xe1)]('Logging\x20violation:\x20'+_0x2663ef+'\x20with\x20evidence:\x20'+!!_0x144c11);if(!this[_0x76a709(0x98)])return;const _0x45e3cc=new Date()[_0x76a709(0xb8)](),_0x49908d={'Right\x20Click':_0x76a709(0xe9),'No\x20Face\x20Detected':_0x76a709(0xcd),'Multiple\x20Faces\x20Detected':_0x76a709(0xee),'alt-key-pressed':'press-alt','control-key-pressed':_0x76a709(0x11d),'Tab\x20Switch\x20or\x20Minimized':_0x76a709(0x95),'Noise\x20Detected':_0x76a709(0x106),'page-reload-or-exit-attempt':_0x76a709(0x144),'Screen\x20Sharing\x20Stopped':_0x76a709(0x130),'Full\x20Screen\x20Exited':_0x76a709(0x140)},_0x1cbec2=_0x49908d[_0x2663ef]||_0x2663ef,_0x1cffe0={'violationType':_0x2663ef,'timestamp':_0x45e3cc,'evidence':_0x144c11,'folderName':_0x1cbec2};!this[_0x76a709(0xfd)][_0x2663ef]&&(this[_0x76a709(0xfd)][_0x2663ef]=[]);this['violations'][_0x2663ef][_0x76a709(0x90)](_0x1cffe0),console[_0x76a709(0xe1)](_0x76a709(0x133)+_0x2663ef+'\x20at\x20'+_0x45e3cc),console['log'](_0x76a709(0xa8),_0x144c11);if(_0x144c11)try{const _0x44791b=await this[_0x76a709(0xf7)](_0x2663ef,_0x144c11,_0x45e3cc,_0x1cbec2);console[_0x76a709(0xe1)](_0x76a709(0xc7),_0x44791b);}catch(_0x9cfd8c){console[_0x76a709(0x115)]('Error\x20uploading\x20evidence:',_0x9cfd8c);}else{if(this[_0x76a709(0xbd)][_0x76a709(0xa9)])try{let _0x555738=null;[_0x76a709(0xb6),_0x76a709(0xca)][_0x76a709(0x10e)](_0x2663ef)?_0x555738=await this[_0x76a709(0x96)](_0x2663ef,_0x45e3cc,![]):_0x555738=await this[_0x76a709(0x96)](_0x2663ef,_0x45e3cc,!![]);if(_0x555738){const _0x1b2dd5=await this[_0x76a709(0xf7)](_0x2663ef,_0x555738,_0x45e3cc,_0x1cbec2);console[_0x76a709(0xe1)](_0x76a709(0xb5),_0x1b2dd5);}}catch(_0x3c61bb){console['error'](_0x76a709(0x12d)+_0x2663ef+':',_0x3c61bb);}}}async[_0x3e4c0a(0xf7)](_0x1f1a0b,_0x549162,_0x2fb939){const _0x350aea=_0x3e4c0a;try{const _0x89a690=await fetch(process['env'][_0x350aea(0xa4)]+_0x350aea(0x9d),{'method':'POST','headers':{'Content-Type':'application/json'},'body':JSON['stringify']({'proctorId':this[_0x350aea(0x103)],'violationType':_0x1f1a0b,'evidence':_0x549162,'timestamp':_0x2fb939}),'mode':_0x350aea(0xd8)});if(!_0x89a690['ok'])throw new Error(_0x350aea(0x8e)+_0x89a690[_0x350aea(0x138)]);const _0x364da3=await _0x89a690['json']();return console[_0x350aea(0xe1)]('Evidence\x20uploaded\x20successfully:',_0x364da3),_0x364da3;}catch(_0x43a264){console['error']('Error\x20uploading\x20evidence:',_0x43a264);throw _0x43a264;}}async[_0x3e4c0a(0x96)](_0x26035f,_0x1bd27f,_0x2815d6=![]){const _0x43740e=_0x3e4c0a;console[_0x43740e(0xe1)](_0x43740e(0x8f)+_0x26035f+_0x43740e(0xf9)+_0x1bd27f);if(!this[_0x43740e(0x98)]||this['screenshotInProgress']||!this[_0x43740e(0xbd)][_0x43740e(0xa9)])return null;this['screenshotInProgress']=!![];try{await new Promise(_0x433752=>setTimeout(_0x433752,0x3e8));const _0x3c3862=_0x2815d6?this[_0x43740e(0x125)]:this[_0x43740e(0xd4)],_0x2e55c5=_0x3c3862?.[_0x43740e(0xdc)]()[0x0];if(!_0x2e55c5||_0x2e55c5[_0x43740e(0x129)]!==_0x43740e(0x101)||_0x2e55c5[_0x43740e(0x94)]!==_0x43740e(0xb1))return console[_0x43740e(0x115)](_0x43740e(0xd9)),null;const _0x3c5b87=document[_0x43740e(0x136)](_0x43740e(0x11e)),_0xe5feee=document['createElement']('video');_0xe5feee[_0x43740e(0xcb)]=_0x3c3862,_0xe5feee[_0x43740e(0xac)](),await new Promise(_0x2bc682=>{_0xe5feee['onloadedmetadata']=()=>{const _0x179883=_0x11df;_0xe5feee[_0x179883(0xfb)]=_0xe5feee[_0x179883(0xa5)],_0xe5feee[_0x179883(0x8d)]=_0xe5feee[_0x179883(0x8c)],_0x2bc682();};}),_0x3c5b87[_0x43740e(0xfb)]=_0xe5feee[_0x43740e(0xa5)],_0x3c5b87['height']=_0xe5feee[_0x43740e(0x8c)];const _0x53f56d=_0x3c5b87['getContext']('2d');_0x53f56d[_0x43740e(0xc2)](_0xe5feee,0x0,0x0,_0x3c5b87[_0x43740e(0xfb)],_0x3c5b87[_0x43740e(0x8d)]);const _0x254259=_0x3c5b87['toDataURL'](_0x43740e(0xd2),0.5)['split'](',')[0x1];_0xe5feee[_0x43740e(0x109)](),_0xe5feee[_0x43740e(0xcb)]=null;if(_0x254259){const _0x28a635={'timestamp':new Date()['toISOString'](),'event':_0x26035f,'base64Data':_0x254259};this[_0x43740e(0x113)][_0x43740e(0x90)](_0x28a635),await this[_0x43740e(0xea)](_0x26035f,_0x254259);}else console[_0x43740e(0x115)](_0x43740e(0xdb));return _0x254259;}catch(_0x5d38cf){return console['error'](_0x43740e(0x149),_0x5d38cf),null;}finally{this[_0x43740e(0xaf)]=![];}}[_0x3e4c0a(0x12a)](_0x2c5ede){const _0x263d73=_0x3e4c0a,_0x2cd469=atob(_0x2c5ede[_0x263d73(0x9f)](',')[0x1]),_0x384600=_0x2c5ede[_0x263d73(0x9f)](',')[0x0]['split'](':')[0x1][_0x263d73(0x9f)](';')[0x0],_0x186744=new ArrayBuffer(_0x2cd469[_0x263d73(0x118)]),_0x325395=new Uint8Array(_0x186744);for(let _0xa68e66=0x0;_0xa68e66<_0x2cd469['length'];_0xa68e66++){_0x325395[_0xa68e66]=_0x2cd469[_0x263d73(0x11b)](_0xa68e66);}return new Blob([_0x186744],{'type':_0x384600});}['downloadFile'](_0x279e73,_0x4ab7ca){const _0x476a0b=_0x3e4c0a,_0x33d50a=window[_0x476a0b(0xe0)][_0x476a0b(0xcf)](_0x279e73),_0x5d074e=document['createElement']('a');_0x5d074e[_0x476a0b(0xdf)]['display']=_0x476a0b(0x126),_0x5d074e['href']=_0x33d50a,_0x5d074e['download']=_0x4ab7ca,document[_0x476a0b(0x10d)][_0x476a0b(0xc4)](_0x5d074e),_0x5d074e[_0x476a0b(0x139)](),window[_0x476a0b(0xe0)][_0x476a0b(0xde)](_0x33d50a),document[_0x476a0b(0x10d)][_0x476a0b(0xfc)](_0x5d074e);}['handleFullScreenChange'](){const _0x52f785=_0x3e4c0a;if(this[_0x52f785(0x98)]&&this[_0x52f785(0xbd)][_0x52f785(0x8a)]&&!document['fullscreenElement']){const _0x50681a=_0x52f785(0x132),_0x1dc7dc=new Date()[_0x52f785(0xb8)]();this['logViolation'](_0x50681a),this['captureScreenshot'](_0x50681a,_0x1dc7dc,!![]);}}[_0x3e4c0a(0x10a)](){const _0xff9489=_0x3e4c0a;if(this[_0xff9489(0x98)]&&document['visibilityState']!=='visible'){const _0x16a8f7=_0xff9489(0x128),_0x31e7f1=new Date()[_0xff9489(0xb8)]();this[_0xff9489(0xea)](_0x16a8f7),this[_0xff9489(0x96)](_0x16a8f7,_0x31e7f1,!![]);}}[_0x3e4c0a(0xbc)](_0x545855){const _0x220dd4=_0x3e4c0a;_0x545855[_0x220dd4(0x12e)](),_0x545855[_0x220dd4(0xe5)]='';const _0x5d6475=_0x220dd4(0x9c),_0x42f0e8=new Date()[_0x220dd4(0xb8)]();this[_0x220dd4(0xea)](_0x5d6475),this[_0x220dd4(0x96)](_0x5d6475,_0x42f0e8,!![]);}async[_0x3e4c0a(0x102)](_0x49127c){const _0x3e79fc=_0x3e4c0a,_0x148f5c=['control','shift',_0x3e79fc(0xe2)];if(_0x148f5c[_0x3e79fc(0x10e)](_0x49127c[_0x3e79fc(0x146)])){_0x49127c[_0x3e79fc(0x12e)]();const _0x3fffa0=_0x49127c['key']+_0x3e79fc(0xed),_0x24fff5=new Date()[_0x3e79fc(0xb8)]();this[_0x3e79fc(0xea)](_0x3fffa0);if(this[_0x3e79fc(0xbd)][_0x3e79fc(0xa9)])try{await this[_0x3e79fc(0x96)](_0x3fffa0,_0x24fff5,!![]);}catch(_0x36176c){console[_0x3e79fc(0x115)](_0x3e79fc(0x12d)+_0x3fffa0+':',_0x36176c);}}}[_0x3e4c0a(0xb3)](_0x38a6a7){const _0x265b82=_0x3e4c0a;_0x38a6a7[_0x265b82(0x12e)]();const _0x1187c0=_0x265b82(0x12f),_0x382ad2=new Date()['toISOString']();this[_0x265b82(0xea)](_0x1187c0),this[_0x265b82(0x96)](_0x1187c0,_0x382ad2,!![]);}[_0x3e4c0a(0x141)](){const _0x2ac9c1=_0x3e4c0a;if(document[_0x2ac9c1(0x120)]['requestFullscreen'])document['documentElement'][_0x2ac9c1(0xd1)]();else{if(document[_0x2ac9c1(0x120)][_0x2ac9c1(0xb4)])document['documentElement']['webkitRequestFullscreen']();else document[_0x2ac9c1(0x120)][_0x2ac9c1(0xef)]&&document[_0x2ac9c1(0x120)][_0x2ac9c1(0xef)]();}}[_0x3e4c0a(0xdd)](){const _0x5b8584=_0x3e4c0a;if(document[_0x5b8584(0x131)]&&!this[_0x5b8584(0x114)])this['exitingFullscreen']=!![],document[_0x5b8584(0x10c)]()['then'](()=>{const _0x345cae=_0x5b8584;this[_0x345cae(0x114)]=![],console['log'](_0x345cae(0xad));})[_0x5b8584(0x137)](_0x8356f1=>{const _0x6b2c4c=_0x5b8584;this[_0x6b2c4c(0x114)]=![],console[_0x6b2c4c(0x115)](_0x6b2c4c(0xd6),_0x8356f1);});else!document[_0x5b8584(0x131)]&&console[_0x5b8584(0x14a)](_0x5b8584(0xf3));}[_0x3e4c0a(0x147)](){const _0x566318=_0x3e4c0a;this[_0x566318(0xbf)]=setInterval(()=>{const _0x4bad63=_0x566318;if(this[_0x4bad63(0x98)]){const _0x34cdc1=window[_0x4bad63(0xc3)]['width']/window[_0x4bad63(0xc3)][_0x4bad63(0x123)]>0x1;if(_0x34cdc1){const _0x2b4105=_0x4bad63(0xc1),_0x1139b5=new Date()[_0x4bad63(0xb8)]();this[_0x4bad63(0xea)](_0x2b4105),this['captureScreenshot'](_0x2b4105,_0x1139b5,!![]);}}},0xbb8);}[_0x3e4c0a(0x97)](){const _0x56a6c7=_0x3e4c0a;this[_0x56a6c7(0xbf)]&&(clearInterval(this['monitorCheckInterval']),this[_0x56a6c7(0xbf)]=null);}[_0x3e4c0a(0xe6)](){const _0x1e51c0=_0x3e4c0a,_0x576546=_0x1e51c0(0x9e),_0x1d08f3=new Date()['toISOString']();this['logViolation'](_0x576546),this[_0x1e51c0(0x96)](_0x576546,_0x1d08f3);}}function _0x11df(_0x118538,_0x55c6c4){const _0x2c4eff=_0x2c4e();return _0x11df=function(_0x11df89,_0x439055){_0x11df89=_0x11df89-0x85;let _0x17e370=_0x2c4eff[_0x11df89];return _0x17e370;},_0x11df(_0x118538,_0x55c6c4);}export default Proctoring;function _0x2c4e(){const _0x2b9b2a=['toISOString','captureAudio','24wfAgHQ','loadModels','handleBeforeUnload','options','analyser','monitorCheckInterval','recording','multiple-screens-detected','drawImage','screen','appendChild','Noise\x20Detected','70qLGuTr','Evidence\x20uploaded\x20response:','fftSize','936022fxZeKH','Multiple\x20Faces\x20Detected','srcObject','promptScreenShare','no-face','mediaStreamSource','createObjectURL','faceDetectionInterval','requestFullscreen','image/jpeg','reduce','stream','startNoiseDetection','Error\x20trying\x20to\x20exit\x20fullscreen:','origin','cors','Failed\x20to\x20capture\x20screenshot:\x20No\x20video\x20track\x20found\x20or\x20track\x20is\x20not\x20of\x20kind\x20\x27video\x27.','noiseCheckInterval','Failed\x20to\x20capture\x20screenshot.','getVideoTracks','exitFullScreen','revokeObjectURL','style','URL','log','alt','beforeunload','Error\x20detecting\x20faces:','returnValue','logPageLoad','12RzArQS','stopFaceDetection','right-click','logViolation','createAnalyser','addEventListener','-key-pressed','multiple-face','msRequestFullscreen','createMediaStreamSource','NotAllowedError','audioStream','Document\x20is\x20not\x20in\x20fullscreen\x20mode','stopNoiseDetection','getByteFrequencyData','4376889BnZfEa','uploadEvidence','stop','\x20at\x20','5398760XsCCYq','width','removeChild','violations','start','then','webkitAudioContext','live','disableKeys','proctorId','downloadFile','mediaDevices','noise','faceRecognitionNet','nets','pause','handleVisibilityChange','onstop','exitFullscreen','body','includes','Models\x20loaded\x20successfully','visibilitychange','Screen\x20sharing\x20was\x20denied.\x20Please\x20allow\x20screen\x20sharing\x20and\x20try\x20again.','Average\x20noise\x20level:\x20','csvData','exitingFullscreen','error','startFaceDetection','ended','length','onloadedmetadata','faceLandmark68Net','charCodeAt','1511883cuDAnC','press-ctrl','canvas','/models','documentElement','load','capturePageReloads','availWidth','loadFromUri','screenStream','none','audioContext','Tab\x20Switch\x20or\x20Minimized','readyState','dataURLtoBlob','videoElement','Error\x20starting\x20camera\x20face\x20detection:','Error\x20capturing\x20screenshot\x20for\x20','preventDefault','Right\x20Click','stop-screenshare','fullscreenElement','Full\x20Screen\x20Exited','Violation\x20logged:\x20','audio/mp3','ondataavailable','createElement','catch','statusText','click','getUserMedia','mediaRecorder','frequencyBinCount','1bIuqqB','keydown','No\x20valid\x20video\x20track\x20found.','exit-fullscreen','enterFullScreen','bind','connect','reload','noiseThreshold','key','startMonitorCheck','Please\x20share\x20your\x20entire\x20screen.','Error\x20capturing\x20screenshot:','warn','tinyFaceDetector','removeEventListener','contextmenu','detectNoise','25225079UkErzy','enforceFullScreen','fullscreenchange','videoHeight','height','Failed\x20to\x20upload\x20evidence:\x20','Capturing\x20screenshot\x20for\x20event:\x20','push','always','disableMultipleScreens','AudioContext','kind','tab-switch','captureScreenshot','stopMonitorCheck','proctoring','startCameraFaceDetection','onended','result','page-reload-or-exit-attempt','/api/upload','page-reloaded','split','getTracks','forEach','handleFullScreenChange','faceDetection','NEXT_PUBLIC_BACKEND_URL','videoWidth','379915hUntaV','startProctoring','Evidence\x20data:','captureScreenshots','12SecMQC','stopProctoring','play','Exited\x20fullscreen\x20successfully','3373902prstNm','screenshotInProgress','violationCounts','video','TinyFaceDetectorOptions','disableRightClick','webkitRequestFullscreen','Screenshot\x20evidence\x20uploaded\x20response:','No\x20Face\x20Detected','_noise.mp3'];_0x2c4e=function(){return _0x2b9b2a;};return _0x2c4e();}
