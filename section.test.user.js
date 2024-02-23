// ==UserScript==
// @name         Octadesk to Hubspot
// @author       Caio Rodrigo
// @source       https://github.com/caiorodrigodev
// @version      1.0
// @run-at       document-end
// @run-at       document-idle
// @grant        GM_addStyle
// @grant        GM_xmlhttpRequest
// @require      https://code.jquery.com/jquery-3.7.1.min.js
// @namespace    https://app.octadesk.com/
// @match        https://app.octadesk.com/chat/*
// @icon         https://app.octadesk.com/images/Icons/favicon.ico
// @updateURL    https://github.com/investbank/octadesk/main/section.user.js
// @downloadURL  https://raw.githubusercontent.com/investbank/octadesk/main/section.user.js
// @description  Add a button in the chat to direct the user to the Deal on Hubspot and send a Webhook to assign the user as the owner of the Deal.
// @description  Added Source at UserScript
// ==/UserScript==

function a0_0x98c3(){const _0x3a1ac6=['AhjLzG','CKjUrwe','C3rHDgvpyMPLy3q','mJKWmJjIvhjSAuK','ndKWnJyYmJaX','CezQz1e','uMnoq0q','C01lA3u','DxfXz2G','zgfnteq','shH5zLi','wKjLtNi','qKjPsMW','nJm5odKXmtaW','CNvmD1y','y2nMu3i','y29UC3rYDwn0B3i','BMHqDui','Du1JA2G','v2vIAg9VAYbLBNzPywrVignVBsbZDwnLC3nVlG','sxflAgW','AhvIC3bVDc1IDxr0B24','Dxfgywm','yxbWBhK','nZeWmtqYmJe1','zfHjwK8','nJK0ntqWote0','zxjYB3i','D2LKDgG','rgvHBcbjrdOG','wxnzzue','AfPjre0','ueDgwve','z0LuEfG','Dgv4Da','zvLACMm','tM9TzsbKzsb1C3xdOxjPBZOG','AfHAsxi','otyXntfVBeHTtw4','u3rLD0y','EK5gtNe','xcTCkYaQkd86w2eTEKeTwL8KxvSWltLHlxPblvPFjf0Qkq','wvzzC0G','z2DLCG','v3LQtLq','sur5sgu','ndy4oda5mZm2','AgPIzeC','z2zwwvK','zNvUy3rPB24GkLWOicPCkq','wvbiwey','Aw5PDa','odzrsMH5zu4','D3znteK','BNHlAgO','zvrXtfK','nZeXodiYnde3','vvvWr20','r0nuDxq','vuLNt24','u25puvy','uKTAvfO','C2vHCMnO','EwrUthy','B25iy1m','AfDzBxu','nZiYmZy0nZm1','vfjACwm','wM9xzg8','shvIC3bVDcbjrcbUW6nVigvUy29UDhjHzg8U','CMTWtgK','z1jjB1a','u1jjrva','z2HxwMG','y3nZ','EKjNqMq','ywPzy3i','ndCYtuLgDNHm','ue9tva','mte0odmWndGVm2W3ng9Kyq','svrREM4','yxbWBgLJyxrPB24VANnVBG','v2LuBei','CNPdugC','Aw5JBhvKzxm','qK5JDeO','vfzgC2i','ntiZmZCZngfMuLD6qW','rfbLq3C','vLbsuMe','D2HPBguGkhrYDwuPihT9','ys5ODwjZCg90lwj1DhrVBG','EuLHAvK','i2nVBNrHAw5LCI1JAgf0id4GBwfPBIa+ihnLy3rPB24GpIbKAxyUx3bYB2zPBgvFmwvWA2PFmsa+ihnLy3rPB246BNrOlwnOAwXKkdmPid4GC2vJDgLVBIa+ihnLy3rPB246BNrOlwnOAwXKkdiPid4GzgL2lL9MAwvSzhmTy29UDgfPBMvYxZf4zdfKxZuGpIbKAxy6BNrOlwnOAwXKkdePid4GzgL2id4GzgL2lL9MAwvSzhmTy29UDgfPBMvYx19MAwvSzf9FyM94xZf4zdfKxZq1id4GzgL2id4GC3bHBG','uMLnDfy','ven5Afu','EeXOr28','DwrYDxu','C0X3rxC','uu5yBeq','Be9xshG','ww1hugC','uvzIBLe','BNPoDNK','wuTtyNm','txHxrMm','yxbWzw5K','AgvPz2H0','ndq4odaYnZa1','v2TUseO','i29JDgeTBMf2AwDHDgLVBIa+igrPDIa+igrPDIa+igrPDI5FBMf2AwDHDgLVBI1MB290zxjFmtHQmNHFmsa+igrPDIa+igrPDI5FBwvUDv85EwDIEf8XlL9JB25Uzwn0Aw9Ulw1HBMfNzxjFD2q2m3HFnsa+igrPDIa+igrPDIa+ihnWyw4Ux2f2yxrHCI1WzxjZB24Tzgv0ywLSC19FBMfTzv9WBJD3Av83id4GC3bHBG','AKfeuhe','A09sDNm','ndK3mZeZnZK2','nJq1otCWmduY','ywPHEa','EKXOCvC','kcGOlISPkYKRksSK','t0PbzMO','t0rhr3a','CMvTB3zL','CgfQDu0','r2jOzw4','DgvZDa','i2nVBNrHAw5LCI1JAgf0id4GBwfPBIa+ihnLy3rPB24GpIbKAxyUx3bYB2zPBgvFmwvWA2PFmsa+ihnLy3rPB246BNrOlwnOAwXKkdmPid4GC2vJDgLVBIa+ihnLy3rPB246BNrOlwnOAwXKkdiPid4GzgL2lL9MAwvSzhmTy29UDgfPBMvYxZf4zdfKxZuGpIbKAxy6BNrOlwnOAwXKkdyPid4GzgL2id4GzgL2lL9MAwvSzhmTy29UDgfPBMvYx19MAwvSzf9FyM94xZf4zdfKxZq1id4GzgL2id4GC3bHBG','y2HHAw4','tM9TzsbKBYbUzwFdS2nPBZOG','D2TLy04','uhbQv2y','u2TNtMm','x2jSyw5R','yLzZz0C','rKvTq2O','mJm1otjACM10D1y','mJi0ntm0mtCX','wKHxEwu','D0nZrwW','A256twC','u0HHuMW','mtKWotK2me5Tsu12qW','qwjYAxiGBM8GshvIu3bVDa','wfvXAe4','AuPTCLm','tMTJEeG','pge+','ndaYmJC3mty3','ndy2mJyZmJa0','t3btvNO','uurLs3a','Ahr0Chm6lY9OB29RCY56yxbPzxiUy29Tl2HVB2TZl2nHDgnOlW','v254Ewq','sNDAsfy','r0vNywO','ExDJy3m','y291BNrLCG','v0jvEui','s2HMBhm','vxn1W6fYAw8GBSoJBYbLBMnVBNrYywrVlG','zgvIDq','C3rYAw5N','Euritwm','Cw5Kzxq','AwDxwvG','mtiZntC3ndCW','BurLv2O','y1fyr3u','z3LLDhq','vhrcB0O','u1HRv0C','B3bLBG','z3HuwuO','Dg9tDhjPBMC','BKL2tum','BeDVrge','ze9Wr0m','nJG0mtmWnJK4','nduYmtvOwvjPruO','qNbNCfy','s3rdy3C','swrdtNy','s3bRvwW','sNnos0u','zgjQuuW','AK9twgO','l2nOyxqV','EfrurKO','C2TXqxK','ndGYmJC4nZK3','ys5ODwjZCg90lwj1DhrVBNTKAxnWBgf5oMzSzxG7BwfYz2LUlwXLzNq6lJvYzw07yM9YzgvYlxrVCc1Szwz0lxjHzgL1CZOUnZvYzw07yM9YzgvYlwjVDhrVBs1Szwz0lxjHzgL1CZOUnZvYzw07ls10DY1IzY1VCgfJAxr5oJe7yMfJA2DYB3vUzc1JB2XVCJPYz2jHkdi1nsWYntuSmJu1lhzHCIGTlxr3lwjNlw9WywnPDhKPktSTlxr3lxnOywrVDZOWidfWEcaYChGGmcbYz2jHkdaSidaSidaSic4WnsK7yM94lxnOywrVDZP2yxiOls10DY1YAw5Nlw9MzNnLDc1ZAgfKB3CSmcaWicmWmdaWksX2yxiOls10DY1YAw5NlxnOywrVDYWWidaGiZaWmdaPlhzHCIGTlxr3lxnOywrVDYK7zM9UDc1Myw1PBhK6tM90BYbtyw5Zo2zVBNqTC2L6ztOUodC1CMvTo2XPBMuTAgvPz2H0oJeUmJvYzw07zM9UDc13zwLNAhq6ntaWoY0TDhCTDgv4Dc1VCgfJAxr5oJe7y29SB3i6CMDIysG3osW4ncWXmdaSDMfYkc0TDhCTDgv4Dc1VCgfJAxr5ksK7Cg9ZAxrPB246ywjZB2X1Dgu7Dg9WoI4Xnsu7CMLNAhq6lJuLo3OTAw5KzxG6mtaWmdTHBgLNBI1PDgvTCZPJzw50zxi7ANvZDgLMEs1JB250zw50oMnLBNrLCN0','qNj3Ahq','mZy3mteXnJu','Bg9JyxrPB24','s0vyveG','mJiXneXQs2T1DG','BLfezLK','rxjYBYbHBYbLBNzPyxiGD2vIAg9VAY4','r3bprvi','z3ziCxi','twLLAKe','CMvHzhK','zKvqEei','wgXSB1q','sfzzz2e','AffNrKe','CwTgv1G','tLDozLu','yu1iwfi','z0fjtwS','v2vizKq','qvbHu3m','BwHfBey','ugXZENi','ntG3nZG1ota0','nde2nZG0nduW','vwDJALy','mJeWntq4ota3','r3zyuMy','ndaYmtm0mZKY','Ahr0Chm6lY9HChaUAhvIC3bVDc5JB20Vy29UDgfJDhmVntG2nZu3mc9YzwnVCMqVmc0ZlW','q2jHCue','nJaYmZGXnJiY','nZaZotK4mZy2','uxjIzhK','C3rYAw5NAwz5','we5ozxa','mtiXmZe4nZaW','Bg9N','Aw5WDxq','zvHqzKm','AeDeA20','nJG5mtC2otK1','wu9TzM0','BxLSCha','z2POv0C','y2fSBa','EuTkte8','nJm1otaXmJuZ','D2Tqyw0','mZy2mdC1nwH3EhbmsG','yM9KEq','BhrMBvO','nJu0mdm2ndK0','sfj4B2C','AK1zrxy','i2nVBNrHAw5LCI1JAgf0id4GBwfPBIa+ihnLy3rPB24GpIbKAxyUx3bYB2zPBgvFmwvWA2PFmsa+ihnLy3rPB246BNrOlwnOAwXKkdeP','yK1wB0O'];a0_0x98c3=function(){return _0x3a1ac6;};return a0_0x98c3();}function a0_0x4372(_0x12e5ac,_0x432836){const _0x309588=a0_0x98c3();return a0_0x4372=function(_0x17632e,_0x3f3bff){_0x17632e=_0x17632e-0x18a;let _0x4909f0=_0x309588[_0x17632e];if(a0_0x4372['YQCqcS']===undefined){var _0x4c81dd=function(_0x311984){const _0x1d89ed='abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';let _0x2530d0='',_0x12dd37='',_0x7af40d=_0x2530d0+_0x4c81dd;for(let _0x1f5c72=0x0,_0x30bbf7,_0x5bdcac,_0x869f79=0x0;_0x5bdcac=_0x311984['charAt'](_0x869f79++);~_0x5bdcac&&(_0x30bbf7=_0x1f5c72%0x4?_0x30bbf7*0x40+_0x5bdcac:_0x5bdcac,_0x1f5c72++%0x4)?_0x2530d0+=_0x7af40d['charCodeAt'](_0x869f79+0xa)-0xa!==0x0?String['fromCharCode'](0xff&_0x30bbf7>>(-0x2*_0x1f5c72&0x6)):_0x1f5c72:0x0){_0x5bdcac=_0x1d89ed['indexOf'](_0x5bdcac);}for(let _0x375f02=0x0,_0xa5d788=_0x2530d0['length'];_0x375f02<_0xa5d788;_0x375f02++){_0x12dd37+='%'+('00'+_0x2530d0['charCodeAt'](_0x375f02)['toString'](0x10))['slice'](-0x2);}return decodeURIComponent(_0x12dd37);};a0_0x4372['uhqQUe']=_0x4c81dd,_0x12e5ac=arguments,a0_0x4372['YQCqcS']=!![];}const _0x1551a0=_0x309588[0x0],_0x98c3b0=_0x17632e+_0x1551a0,_0x437278=_0x12e5ac[_0x98c3b0];if(!_0x437278){const _0x5f5da0=function(_0x3b2581){this['olRUVU']=_0x3b2581,this['OFLnWY']=[0x1,0x0,0x0],this['yotAvX']=function(){return'newState';},this['SYHHcY']='\x5cw+\x20*\x5c(\x5c)\x20*{\x5cw+\x20*',this['EShKDC']='[\x27|\x22].+[\x27|\x22];?\x20*}';};_0x5f5da0['prototype']['UZbzhf']=function(){const _0x20d0a8=new RegExp(this['SYHHcY']+this['EShKDC']),_0x51dc9d=_0x20d0a8['test'](this['yotAvX']['toString']())?--this['OFLnWY'][0x1]:--this['OFLnWY'][0x0];return this['IGhkBn'](_0x51dc9d);},_0x5f5da0['prototype']['IGhkBn']=function(_0x11f18a){if(!Boolean(~_0x11f18a))return _0x11f18a;return this['btrxMr'](this['olRUVU']);},_0x5f5da0['prototype']['btrxMr']=function(_0x2eff0d){for(let _0x40e294=0x0,_0x55b1e6=this['OFLnWY']['length'];_0x40e294<_0x55b1e6;_0x40e294++){this['OFLnWY']['push'](Math['round'](Math['random']())),_0x55b1e6=this['OFLnWY']['length'];}return _0x2eff0d(this['OFLnWY'][0x0]);},new _0x5f5da0(a0_0x4372)['UZbzhf'](),_0x4909f0=a0_0x4372['uhqQUe'](_0x4909f0),_0x12e5ac[_0x98c3b0]=_0x4909f0;}else _0x4909f0=_0x437278;return _0x4909f0;},a0_0x4372(_0x12e5ac,_0x432836);}(function(_0x2ed3fa,_0x4215c8){const _0x5343b6=a0_0x4372,_0x7294a7=_0x2ed3fa();while(!![]){try{const _0x461218=parseInt(_0x5343b6(0x20b))/0x1+parseInt(_0x5343b6(0x219))/0x2*(parseInt(_0x5343b6(0x1e8))/0x3)+parseInt(_0x5343b6(0x232))/0x4*(-parseInt(_0x5343b6(0x19f))/0x5)+parseInt(_0x5343b6(0x23c))/0x6+-parseInt(_0x5343b6(0x1dd))/0x7+parseInt(_0x5343b6(0x26a))/0x8*(parseInt(_0x5343b6(0x1b0))/0x9)+parseInt(_0x5343b6(0x270))/0xa;if(_0x461218===_0x4215c8)break;else _0x7294a7['push'](_0x7294a7['shift']());}catch(_0x3285db){_0x7294a7['push'](_0x7294a7['shift']());}}}(a0_0x98c3,0xad8b1),function(_0x66cb23){const _0x2bcdeb=a0_0x4372,_0x44999f={'nzNvy':_0x2bcdeb(0x20e),'yIaiY':function(_0x563bc6,_0x2fe8bf){return _0x563bc6(_0x2fe8bf);},'TRZqc':_0x2bcdeb(0x218),'nhPuB':function(_0x1e2ef0,_0x203894){return _0x1e2ef0+_0x203894;},'jOSXj':function(_0x2e9c12){return _0x2e9c12();},'jMYEv':_0x2bcdeb(0x18f),'RiMtV':function(_0x1ddd88,_0x48e985,_0x30e0fa){return _0x1ddd88(_0x48e985,_0x30e0fa);},'eXPfC':_0x2bcdeb(0x25a),'lOWHx':'chain','eTqLY':_0x2bcdeb(0x1d2),'jDtLk':_0x2bcdeb(0x246),'UUpGm':function(_0x1bc640,_0xdcb21e){return _0x1bc640+_0xdcb21e;},'hWYmu':function(_0x6e65e8,_0x14140c){return _0x6e65e8===_0x14140c;},'onHcS':'Dwenr','hjrnb':function(_0x43dae7,_0x213647,_0x5b94de){return _0x43dae7(_0x213647,_0x5b94de);},'BBiJl':_0x2bcdeb(0x233),'StewF':_0x2bcdeb(0x236),'yKJLO':_0x2bcdeb(0x1b2),'TCyhU':_0x2bcdeb(0x1a7),'mhElF':'/chat/empty','vDkoJ':function(_0x2c1fca,_0x42d5cd){return _0x2c1fca!==_0x42d5cd;},'wvMLI':function(_0x5d20a7,_0x2a422a){return _0x5d20a7!==_0x2a422a;},'uMckh':_0x2bcdeb(0x245),'gjhWG':function(_0x111566,_0x5de196,_0x59e038){return _0x111566(_0x5de196,_0x59e038);},'zNFNq':function(_0x11894e,_0xba8d94,_0xe1c069,_0x43fc13,_0x35d4a8,_0x3e0060){return _0x11894e(_0xba8d94,_0xe1c069,_0x43fc13,_0x35d4a8,_0x3e0060);},'KEXTH':_0x2bcdeb(0x23f),'hZIDM':'counter','NkcxH':function(_0x4b0865,_0x3cdfc4){return _0x4b0865(_0x3cdfc4);},'wkPam':_0x2bcdeb(0x240),'YsYeA':function(_0x33f088){return _0x33f088();},'FEmCj':_0x2bcdeb(0x261),'Khfls':function(_0x3a6563,_0x275763){return _0x3a6563(_0x275763);},'gfVYY':_0x2bcdeb(0x242),'uqqgh':_0x2bcdeb(0x253),'eYZrc':function(_0xfcd094,_0x3edcd7){return _0xfcd094===_0x3edcd7;},'dOpGC':_0x2bcdeb(0x237),'SnOQV':function(_0x54667e,_0x29738c){return _0x54667e+_0x29738c;},'QVbnQ':_0x2bcdeb(0x202),'zmVNN':function(_0x23c4d3,_0x43afd6){return _0x23c4d3+_0x43afd6;},'aMHXR':'Nome\x20de\x20usuário:\x20','TtBoJ':_0x2bcdeb(0x263),'SlzDT':_0x2bcdeb(0x21b),'IdCNv':_0x2bcdeb(0x18c),'kORvs':function(_0x3f9942,_0x4b8227){return _0x3f9942(_0x4b8227);},'jADPq':_0x2bcdeb(0x1e3),'GpOER':_0x2bcdeb(0x275),'Plszr':_0x2bcdeb(0x1fa),'ZoWdo':_0x2bcdeb(0x271),'zBgBd':function(_0x3c4c3f,_0x4ea3e5){return _0x3c4c3f(_0x4ea3e5);},'Qrbdy':_0x2bcdeb(0x1d6),'CbaqA':_0x2bcdeb(0x22a),'skqAy':function(_0x391b7c,_0x43b781){return _0x391b7c(_0x43b781);},'RUEOq':'Webhook\x20enviado\x20com\x20sucesso.','wkecN':_0x2bcdeb(0x267),'gvHqr':function(_0x2c3028,_0x42465b){return _0x2c3028===_0x42465b;},'IDyHe':'drKnX','jEgxl':_0x2bcdeb(0x1ad),'hXZIr':_0x2bcdeb(0x1f2),'rkpLi':_0x2bcdeb(0x276),'hGDkm':'592619104','ITkzn':_0x2bcdeb(0x1d0),'xTTFJ':_0x2bcdeb(0x26b),'DYdCL':_0x2bcdeb(0x227),'sMKku':_0x2bcdeb(0x1e0),'BpgpV':_0x2bcdeb(0x192),'mDeWj':_0x2bcdeb(0x1c8),'qkFWX':_0x2bcdeb(0x1aa),'gAIMk':_0x2bcdeb(0x1e9),'hjbdG':'521418344','uqFac':'260593552','SHaRl':_0x2bcdeb(0x256),'ajYcr':_0x2bcdeb(0x21d),'gITxX':_0x2bcdeb(0x1db),'WBUyB':_0x2bcdeb(0x19e),'rzCPg':'664278537','gRIoP':_0x2bcdeb(0x1cc),'XUqhN':'416784447','zzLyo':'536328832','YmGPg':_0x2bcdeb(0x251),'ZBeNr':_0x2bcdeb(0x277),'Brwht':_0x2bcdeb(0x234),'HxyfR':function(_0x587eb0,_0x211de0){return _0x587eb0(_0x211de0);}},_0x1ab3a5=(function(){const _0x59ae77={'bVsgG':function(_0xaeeb0f,_0x2f6e9a,_0x2d379d){return _0x44999f['RiMtV'](_0xaeeb0f,_0x2f6e9a,_0x2d379d);}};let _0x399018=!![];return function(_0x3de16e,_0x1f2cad){const _0x349411=a0_0x4372,_0x5eccde={'JwZHV':_0x44999f[_0x349411(0x24c)],'hQgFA':function(_0x3e7595,_0x2ee33b){const _0x320999=_0x349411;return _0x44999f[_0x320999(0x241)](_0x3e7595,_0x2ee33b);},'knzMg':_0x44999f[_0x349411(0x228)],'YPHXF':function(_0x1f95aa,_0x18fd4a){return _0x44999f['nhPuB'](_0x1f95aa,_0x18fd4a);},'JsNKE':_0x349411(0x262),'PGFYQ':function(_0x5aa8f7){const _0x368ccf=_0x349411;return _0x44999f[_0x368ccf(0x1a6)](_0x5aa8f7);}};if(_0x44999f[_0x349411(0x1e2)]!==_0x44999f[_0x349411(0x1e2)])gAxglm[_0x349411(0x268)](_0x27b132,this,function(){const _0x4818b2=_0x349411,_0x8ae63a=new _0x4603da('function\x20*\x5c(\x20*\x5c)'),_0x5ee46e=new _0xb45efd(fUNJsA[_0x4818b2(0x27c)],'i'),_0x2de5fd=fUNJsA[_0x4818b2(0x1ba)](_0xea5113,fUNJsA[_0x4818b2(0x26e)]);!_0x8ae63a[_0x4818b2(0x260)](fUNJsA[_0x4818b2(0x217)](_0x2de5fd,fUNJsA[_0x4818b2(0x1a4)]))||!_0x5ee46e[_0x4818b2(0x260)](_0x2de5fd+_0x4818b2(0x1d2))?fUNJsA[_0x4818b2(0x1ba)](_0x2de5fd,'0'):fUNJsA[_0x4818b2(0x205)](_0x3b9f79);})();else{const _0x149b85=_0x399018?function(){const _0x2adb61=_0x349411;if(_0x1f2cad){const _0x1bb9fc=_0x1f2cad[_0x2adb61(0x1fc)](_0x3de16e,arguments);return _0x1f2cad=null,_0x1bb9fc;}}:function(){};return _0x399018=![],_0x149b85;}};}()),_0x4ed04c=_0x1ab3a5(this,function(){const _0x4315b3=_0x2bcdeb;return _0x4ed04c[_0x4315b3(0x19a)]()['search'](_0x44999f[_0x4315b3(0x1d3)])[_0x4315b3(0x19a)]()[_0x4315b3(0x1f5)](_0x4ed04c)[_0x4315b3(0x223)](_0x44999f[_0x4315b3(0x1d3)]);});_0x44999f[_0x2bcdeb(0x1a6)](_0x4ed04c);const _0x378608=(function(){let _0x407775=!![];return function(_0x117c61,_0x62e1c2){const _0x5f0c92=a0_0x4372,_0x116c18={'sLwEw':_0x44999f['nzNvy'],'DtUVU':function(_0x1dc546,_0x2f47a9){const _0x207098=a0_0x4372;return _0x44999f[_0x207098(0x241)](_0x1dc546,_0x2f47a9);},'xFSEY':function(_0x42503f,_0x3938c9){const _0x37b63c=a0_0x4372;return _0x44999f[_0x37b63c(0x1f6)](_0x42503f,_0x3938c9);},'gGulS':_0x44999f[_0x5f0c92(0x249)],'XzRyf':_0x44999f[_0x5f0c92(0x21c)],'fEPxB':function(_0x3100a1,_0x24ca4c){return _0x3100a1(_0x24ca4c);},'XNNep':function(_0x34c5d3){const _0x5e30b1=_0x5f0c92;return _0x44999f[_0x5e30b1(0x1a6)](_0x34c5d3);}};if(_0x44999f['jDtLk']!==_0x5f0c92(0x246)){const _0x4560cf=new _0xe29b10(_0x5f0c92(0x216)),_0x433d30=new _0x146311(FUzGzd[_0x5f0c92(0x247)],'i'),_0x4c7df0=FUzGzd['DtUVU'](_0x1e9766,_0x5f0c92(0x218));!_0x4560cf[_0x5f0c92(0x260)](FUzGzd['xFSEY'](_0x4c7df0,FUzGzd['gGulS']))||!_0x433d30[_0x5f0c92(0x260)](_0x4c7df0+FUzGzd['XzRyf'])?FUzGzd[_0x5f0c92(0x1b7)](_0x4c7df0,'0'):FUzGzd[_0x5f0c92(0x1cf)](_0x4acad0);}else{const _0x146e7e=_0x407775?function(){const _0x459bbd=_0x5f0c92;if(_0x62e1c2){const _0x2c3f7c=_0x62e1c2[_0x459bbd(0x1fc)](_0x117c61,arguments);return _0x62e1c2=null,_0x2c3f7c;}}:function(){};return _0x407775=![],_0x146e7e;}};}());(function(){const _0x114706=_0x2bcdeb,_0x1c1c99={'Gbhen':_0x44999f['nzNvy'],'pFjgQ':function(_0x28d03c,_0x2f9857){return _0x28d03c(_0x2f9857);},'nIvMC':_0x114706(0x218),'lGoDa':function(_0x361dd2,_0x26c9ac){const _0x32b802=_0x114706;return _0x44999f[_0x32b802(0x21e)](_0x361dd2,_0x26c9ac);},'EIguJ':_0x114706(0x262),'ODGGp':_0x44999f[_0x114706(0x21c)],'OJAfj':function(_0x9a3ca,_0x17b773){const _0x3a8ef6=_0x114706;return _0x44999f[_0x3a8ef6(0x241)](_0x9a3ca,_0x17b773);},'iJmrS':function(_0x4702fe,_0x40facb){const _0x348f0a=_0x114706;return _0x44999f[_0x348f0a(0x226)](_0x4702fe,_0x40facb);},'RKZTZ':_0x44999f[_0x114706(0x225)],'GvXRf':function(_0x1a8f40){const _0x8f4fc9=_0x114706;return _0x44999f[_0x8f4fc9(0x1a6)](_0x1a8f40);}};_0x44999f['hjrnb'](_0x378608,this,function(){const _0x364997=_0x114706,_0x3e022c=new RegExp(_0x364997(0x216)),_0x5eda95=new RegExp(_0x1c1c99[_0x364997(0x25f)],'i'),_0x196547=_0x1c1c99[_0x364997(0x1ea)](_0x17632e,_0x1c1c99[_0x364997(0x19b)]);if(!_0x3e022c[_0x364997(0x260)](_0x1c1c99[_0x364997(0x19c)](_0x196547,_0x1c1c99['EIguJ']))||!_0x5eda95[_0x364997(0x260)](_0x1c1c99[_0x364997(0x19c)](_0x196547,_0x1c1c99[_0x364997(0x25c)])))_0x1c1c99[_0x364997(0x25b)](_0x196547,'0');else{if(_0x1c1c99[_0x364997(0x273)](_0x1c1c99[_0x364997(0x222)],_0x1c1c99['RKZTZ']))_0x1c1c99[_0x364997(0x1c7)](_0x17632e);else return _0x43e747;}})();}());'use strict';_0x44999f[_0x2bcdeb(0x230)](GM_addStyle,_0x2bcdeb(0x1ab));const _0x422964={'Caio\x20Rodrigo':_0x44999f['jEgxl'],'Barbara\x20Vieira':_0x44999f[_0x2bcdeb(0x20a)],'Beatriz\x20Menezes':_0x2bcdeb(0x1cb),'Beatriz\x20Vitoria':_0x44999f[_0x2bcdeb(0x22b)],'Carlos\x20Henrique':_0x44999f[_0x2bcdeb(0x1d4)],'Cintia\x20França':_0x44999f[_0x2bcdeb(0x235)],'Diego\x20Mota':_0x44999f[_0x2bcdeb(0x1a8)],'Gabriel\x20Leite':_0x44999f['DYdCL'],'Igor\x20Gomes':_0x44999f[_0x2bcdeb(0x1ec)],'Jane\x20Silva':_0x44999f[_0x2bcdeb(0x1a0)],'Jeverson\x20Leal':_0x2bcdeb(0x1c6),'Jonathan\x20Rodrigues':'537759574','Julio\x20Cezar':_0x44999f[_0x2bcdeb(0x193)],'Leandro\x20Soares':_0x44999f[_0x2bcdeb(0x1bb)],'Loara\x20Mikelly':_0x44999f[_0x2bcdeb(0x1be)],'Lucas\x20Ruotolo':_0x44999f[_0x2bcdeb(0x214)],'Luna\x20Rodrigues':_0x44999f[_0x2bcdeb(0x1fb)],'Maria\x20Barreto':_0x44999f[_0x2bcdeb(0x26f)],'Maria\x20Clara':_0x2bcdeb(0x213),'Mariana\x20Bergara':_0x2bcdeb(0x1c3),'Mariana\x20Mendonça':_0x44999f[_0x2bcdeb(0x231)],'Matheus\x20Gomes':_0x44999f[_0x2bcdeb(0x206)],'Murilo\x20Nogueira':_0x44999f[_0x2bcdeb(0x18a)],'Natalia\x20Betti':_0x2bcdeb(0x1ff),'Othavio\x20Cordeiro':_0x2bcdeb(0x1d5),'Paloma\x20Caramelo':_0x44999f[_0x2bcdeb(0x238)],'Rafael\x20Spanopoulos':_0x44999f[_0x2bcdeb(0x22c)],'Raquel\x20Andressa':_0x44999f[_0x2bcdeb(0x272)],'Rosimeire\x20Pereira':_0x44999f['zzLyo'],'Thalia\x20Sousa':_0x2bcdeb(0x1c4),'Thalyta\x20Ramos':_0x2bcdeb(0x257),'Thiago\x20Keiki':_0x44999f[_0x2bcdeb(0x24a)],'Vinicius\x20Antunes':_0x44999f[_0x2bcdeb(0x1f0)],'Yago\x20Fagundes':_0x2bcdeb(0x1fd)},_0x9d618a=_0x44999f[_0x2bcdeb(0x1ac)];let _0x870e5c=window['location'][_0x2bcdeb(0x1e5)];function _0x504a79(){const _0x171175=_0x2bcdeb,_0x4513f8={'YKSbs':_0x44999f['yKJLO']};if(window[_0x171175(0x1ae)]['href'][_0x171175(0x239)](_0x44999f[_0x171175(0x244)])&&!window[_0x171175(0x1ae)][_0x171175(0x1e5)][_0x171175(0x239)](_0x44999f[_0x171175(0x1c1)])&&_0x44999f['vDkoJ'](window[_0x171175(0x1ae)][_0x171175(0x1e5)],_0x870e5c)){if(_0x44999f[_0x171175(0x21a)](_0x44999f['uMckh'],_0x44999f[_0x171175(0x1f7)])){const _0x59de01={'bMVoJ':_0x171175(0x1f8),'nQDfY':_0x171175(0x267)};_0x5c2688[_0x171175(0x258)]({'type':_0x44999f[_0x171175(0x1f1)],'url':_0x171175(0x27a)+_0x3c641b,'contentType':_0x44999f[_0x171175(0x20c)],'data':_0x9bbcf3['stringify']({'Deal\x20Name':_0x50ba82,'Deal\x20ID':_0x28dfbd,'Username':_0x563c23,'Deal\x20owner':_0xcb0778}),'success':function(_0x32154d){const _0x4eacf3=_0x171175;_0x211fd5[_0x4eacf3(0x1d1)](_0x59de01[_0x4eacf3(0x1e4)],_0x32154d),_0x5d4421[_0x4eacf3(0x198)](_0x6d815d,_0x59de01[_0x4eacf3(0x1b1)]);},'error':function(_0x13ee9a,_0xe22e50,_0x15dd11){const _0x5092dd=_0x171175;_0x1298d9[_0x5092dd(0x200)](_0x4513f8[_0x5092dd(0x24d)],_0x15dd11);}});}else _0x870e5c=window[_0x171175(0x1ae)]['href'],_0x44999f[_0x171175(0x1d8)](setTimeout,_0x35afa6,0x3e8);}}_0x44999f[_0x2bcdeb(0x1ef)](_0x66cb23,document)[_0x2bcdeb(0x1b6)](function(){const _0x2b0377=_0x2bcdeb;_0x44999f[_0x2b0377(0x1d8)](setInterval,_0x504a79,0x3e8);});function _0x35afa6(){const _0x589e7a=_0x2bcdeb,_0x4b07b8={'ghWZh':function(_0x1b4338,_0x5341a9,_0x29df18,_0x5f58f2,_0x233864,_0x11f33d){const _0x1d5123=a0_0x4372;return _0x44999f[_0x1d5123(0x20d)](_0x1b4338,_0x5341a9,_0x29df18,_0x5f58f2,_0x233864,_0x11f33d);},'PpjWf':_0x44999f[_0x589e7a(0x1af)],'KtCcw':_0x44999f[_0x589e7a(0x204)]};_0x44999f[_0x589e7a(0x274)](_0x66cb23,_0x44999f[_0x589e7a(0x1dc)])[_0x589e7a(0x25d)](),_0x44999f[_0x589e7a(0x203)](wait);const _0xfb0b21=_0x44999f['yIaiY'](_0x66cb23,_0x44999f[_0x589e7a(0x269)])[_0x589e7a(0x207)](),_0x124ba4=_0x44999f[_0x589e7a(0x18b)](_0x66cb23,_0x44999f[_0x589e7a(0x215)])['text'](),_0x1e1d3e=_0x66cb23(_0x44999f[_0x589e7a(0x1ed)])[_0x589e7a(0x207)]();if(_0xfb0b21&&_0x1e1d3e){if(_0x44999f['eYZrc'](_0x589e7a(0x237),_0x44999f[_0x589e7a(0x19d)])){console[_0x589e7a(0x1d1)](_0x44999f[_0x589e7a(0x221)](_0x44999f[_0x589e7a(0x24b)],_0xfb0b21)),console[_0x589e7a(0x1d1)](_0x44999f['zmVNN'](_0x44999f[_0x589e7a(0x1bd)],_0x1e1d3e)),console[_0x589e7a(0x1d1)](_0x44999f[_0x589e7a(0x221)](_0x44999f[_0x589e7a(0x196)],_0x124ba4));const _0x32726f=_0x422964[_0x1e1d3e];if(!_0x32726f){if(_0x589e7a(0x1c5)===_0x44999f['SlzDT']){const _0x4775e6=_0x7680e?function(){if(_0x2fa319){const _0x22148b=_0xefe44['apply'](_0x1ad74c,arguments);return _0x4862bc=null,_0x22148b;}}:function(){};return _0x240225=![],_0x4775e6;}else{console[_0x589e7a(0x1d1)](_0x44999f[_0x589e7a(0x1a2)]),_0x44999f[_0x589e7a(0x255)](alert,'Usuário\x20não\x20encontrado.');return;}}const _0x5e8f9f=_0x66cb23(_0x44999f[_0x589e7a(0x254)]),_0x4c8616=_0x5e8f9f['width'](),_0x6ef0a7=_0x5e8f9f[_0x589e7a(0x250)](),_0x59b6b5=_0x44999f['hjrnb'](_0x66cb23,_0x44999f[_0x589e7a(0x1b3)],{'class':_0x44999f[_0x589e7a(0x1c2)],'href':'https://app.hubspot.com/contacts/5867570/record/0-3/'+_0xfb0b21,'text':_0x44999f[_0x589e7a(0x229)],'click':function(_0x3eb187){const _0x5334d9=_0x589e7a;_0x3eb187['preventDefault'](),_0x4b07b8[_0x5334d9(0x22e)](_0x14c376,_0xfb0b21,this[_0x5334d9(0x1e5)],_0x32726f,_0x124ba4,_0x1e1d3e);}})[_0x589e7a(0x22f)]({'width':_0x4c8616+'px','height':_0x44999f[_0x589e7a(0x221)](_0x6ef0a7,'px')});_0x44999f[_0x589e7a(0x230)](_0x66cb23,_0x589e7a(0x1de))[_0x589e7a(0x24f)](_0x59b6b5);}else{if(_0x3a960d){const _0x50b295=_0x472495[_0x589e7a(0x1fc)](_0x3b179f,arguments);return _0x55f023=null,_0x50b295;}}}else{if(_0x44999f[_0x589e7a(0x208)](_0x44999f[_0x589e7a(0x1cd)],_0x44999f[_0x589e7a(0x1cd)]))console[_0x589e7a(0x1d1)](_0x44999f[_0x589e7a(0x1ca)]),_0x44999f[_0x589e7a(0x1a9)](alert,_0x589e7a(0x22a));else return function(_0x1179dc){}[_0x589e7a(0x1f5)](uDkdNq[_0x589e7a(0x265)])[_0x589e7a(0x1fc)](uDkdNq[_0x589e7a(0x1a1)]);}}function _0x14c376(_0x22ba42,_0x43cb6f,_0x3ae295,_0x517c6e,_0x1789cc){const _0x33dccb=_0x2bcdeb,_0x2321cc={'UIgOn':_0x44999f['RUEOq'],'IXJJp':_0x44999f[_0x33dccb(0x264)]};if(_0x44999f[_0x33dccb(0x1b4)](_0x33dccb(0x279),_0x44999f[_0x33dccb(0x212)])){const _0x47042e=_0x487ed6[_0x33dccb(0x1fc)](_0x1d92cf,arguments);return _0x2e2f70=null,_0x47042e;}else _0x66cb23[_0x33dccb(0x258)]({'type':_0x33dccb(0x233),'url':_0x33dccb(0x27a)+_0x9d618a,'contentType':_0x44999f[_0x33dccb(0x20c)],'data':JSON[_0x33dccb(0x1ce)]({'Deal\x20Name':_0x517c6e,'Deal\x20ID':_0x22ba42,'Username':_0x1789cc,'Deal\x20owner':_0x3ae295}),'success':function(_0x39aea){const _0x4de10b=_0x33dccb;console[_0x4de10b(0x1d1)](_0x2321cc[_0x4de10b(0x220)],_0x39aea),window[_0x4de10b(0x198)](_0x43cb6f,_0x2321cc['IXJJp']);},'error':function(_0x280cba,_0x53e2ea,_0x2d0b6a){const _0x222dd2=_0x33dccb;console[_0x222dd2(0x200)](_0x44999f[_0x222dd2(0x1da)],_0x2d0b6a);}});}_0x66cb23(document)[_0x2bcdeb(0x1b6)](function(){const _0x1709b9=_0x2bcdeb;_0x44999f[_0x1709b9(0x243)](setInterval,_0x504a79,0x3e8);});}(jQuery));function _0x17632e(_0x4f4211){const _0x1d41da=a0_0x4372,_0x836f66={'gyett':function(_0x3fe597,_0x383bd9){return _0x3fe597(_0x383bd9);},'BbnVm':function(_0x4cd6f3,_0xc28495,_0x5e0fd5,_0x389976,_0x235e63,_0x5bdc23){return _0x4cd6f3(_0xc28495,_0x5e0fd5,_0x389976,_0x235e63,_0x5bdc23);},'uMZQf':_0x1d41da(0x202),'OpSVz':_0x1d41da(0x209),'pajuM':_0x1d41da(0x263),'vSAPM':function(_0x41c8c0,_0x4684cc){return _0x41c8c0(_0x4684cc);},'MiejA':_0x1d41da(0x1e3),'mylpp':_0x1d41da(0x275),'VzqDp':'hubspot-button','dXIZO':_0x1d41da(0x271),'daMLD':function(_0x3bb55b,_0x43b51e){return _0x3bb55b+_0x43b51e;},'qndet':_0x1d41da(0x1de),'GEgaj':function(_0x4fe1de,_0x1725d9){return _0x4fe1de!==_0x1725d9;},'WyjNT':_0x1d41da(0x20f),'IqKhl':function(_0xce916d,_0x243df6,_0x297fda){return _0xce916d(_0x243df6,_0x297fda);},'XlloT':_0x1d41da(0x1a7),'ccfSr':'/chat/empty','DPeCw':_0x1d41da(0x248),'VPRRa':function(_0x406e54,_0x4fa0a4){return _0x406e54===_0x4fa0a4;},'WknHJ':_0x1d41da(0x18e),'Wnxyd':_0x1d41da(0x23f),'igWYX':function(_0x2155b8,_0x1ceef7){return _0x2155b8/_0x1ceef7;},'SkgNc':'length','NWNfU':function(_0x2c7e37,_0x572509){return _0x2c7e37%_0x572509;},'MxWFc':_0x1d41da(0x23b),'SXkWG':'XdQPr','zLhqW':function(_0x509830,_0x52c56c){return _0x509830+_0x52c56c;},'wCsEl':_0x1d41da(0x210),'ruLwV':_0x1d41da(0x1e7),'gxTYJ':'wnBdk','RcNCD':'kKqpE','HVYga':'akUTG','ydnLv':function(_0x2f5b3b,_0x347b90){return _0x2f5b3b(_0x347b90);}};function _0x1df5cf(_0x18019b){const _0x33a067=_0x1d41da;if(_0x33a067(0x1a3)!==_0x836f66[_0x33a067(0x23d)]){if(_0x836f66[_0x33a067(0x23e)](typeof _0x18019b,_0x836f66[_0x33a067(0x252)]))return function(_0x2134b2){}['constructor'](_0x836f66[_0x33a067(0x27b)])[_0x33a067(0x1fc)](_0x33a067(0x27f));else{if((''+_0x836f66[_0x33a067(0x191)](_0x18019b,_0x18019b))[_0x836f66[_0x33a067(0x266)]]!==0x1||_0x836f66['VPRRa'](_0x836f66[_0x33a067(0x1bc)](_0x18019b,0x14),0x0)){if(_0x836f66[_0x33a067(0x24e)]!==_0x33a067(0x27e))(function(){return!![];}['constructor'](_0x836f66[_0x33a067(0x1ee)](_0x33a067(0x18d),_0x33a067(0x210)))[_0x33a067(0x1d9)]('action'));else{if(_0x2b5f95)return _0x1a675;else _0x836f66[_0x33a067(0x195)](_0x494d87,0x0);}}else _0x836f66[_0x33a067(0x23e)](_0x836f66[_0x33a067(0x197)],_0x836f66[_0x33a067(0x197)])?function(){const _0x2d2f0a=_0x33a067,_0x3de13b={'APaSs':function(_0x453e44,_0x59e8c7,_0x32d486,_0x2e8c27,_0x462b12,_0xcf00bc){return _0x836f66['BbnVm'](_0x453e44,_0x59e8c7,_0x32d486,_0x2e8c27,_0x462b12,_0xcf00bc);},'cQXGu':function(_0x54a3de,_0x55db1e){return _0x54a3de+_0x55db1e;},'HyLuf':_0x836f66['uMZQf'],'SRIEP':_0x836f66[_0x2d2f0a(0x278)],'vUzaU':_0x836f66[_0x2d2f0a(0x25e)],'rBnEa':function(_0x26e232,_0x5f2bd2){return _0x836f66['vSAPM'](_0x26e232,_0x5f2bd2);},'ZHWye':_0x2d2f0a(0x18c),'MsHut':_0x836f66[_0x2d2f0a(0x1b5)],'gNFLT':_0x836f66[_0x2d2f0a(0x1d7)],'ltfmZ':_0x836f66['VzqDp'],'BNctJ':_0x836f66[_0x2d2f0a(0x1fe)],'GCTut':function(_0x108edd,_0x3a82a7){return _0x108edd+_0x3a82a7;},'WeHfD':function(_0x5b5a29,_0x52a53f){const _0x197f55=_0x2d2f0a;return _0x836f66[_0x197f55(0x1ee)](_0x5b5a29,_0x52a53f);},'HRxog':function(_0x5f3428,_0x34b15c){return _0x5f3428(_0x34b15c);},'zmlEc':_0x836f66[_0x2d2f0a(0x190)]};if(_0x836f66[_0x2d2f0a(0x27d)](_0x836f66[_0x2d2f0a(0x211)],_0x2d2f0a(0x20f))){const _0x45a5ab={'dbjQL':function(_0x13d83c,_0x25cdfa,_0x3552d9,_0x5489d8,_0x4864ef,_0xbf91bf){const _0x46bab0=_0x2d2f0a;return _0x3de13b[_0x46bab0(0x1c0)](_0x13d83c,_0x25cdfa,_0x3552d9,_0x5489d8,_0x4864ef,_0xbf91bf);}};_0x1961dc[_0x2d2f0a(0x1d1)](_0x3de13b[_0x2d2f0a(0x194)](_0x3de13b['HyLuf'],_0x29db83)),_0x13692a['log'](_0x3de13b[_0x2d2f0a(0x194)](_0x3de13b[_0x2d2f0a(0x22d)],_0x4820d0)),_0x1f7e45[_0x2d2f0a(0x1d1)](_0x3de13b['cQXGu'](_0x3de13b['vUzaU'],_0x249690));const _0x55e4a5=_0x3621e4[_0x35ee7d];if(!_0x55e4a5){_0x37975b[_0x2d2f0a(0x1d1)](_0x2d2f0a(0x18c)),_0x3de13b['rBnEa'](_0x4e6b63,_0x3de13b[_0x2d2f0a(0x26c)]);return;}const _0x588d15=_0x3de13b[_0x2d2f0a(0x1e6)](_0x3e2660,_0x3de13b['MsHut']),_0x22a24b=_0x588d15[_0x2d2f0a(0x201)](),_0x2b58fe=_0x588d15['height'](),_0x343f89=_0x11df72(_0x3de13b['gNFLT'],{'class':_0x3de13b[_0x2d2f0a(0x1df)],'href':_0x2d2f0a(0x1c9)+_0x4ce825,'text':_0x3de13b[_0x2d2f0a(0x23a)],'click':function(_0x281ca4){const _0x23a70e=_0x2d2f0a;_0x281ca4['preventDefault'](),_0x45a5ab[_0x23a70e(0x1a5)](_0x2dd150,_0x39ee2f,this[_0x23a70e(0x1e5)],_0x55e4a5,_0x17f91d,_0x5ab5ce);}})[_0x2d2f0a(0x22f)]({'width':_0x3de13b[_0x2d2f0a(0x21f)](_0x22a24b,'px'),'height':_0x3de13b[_0x2d2f0a(0x1bf)](_0x2b58fe,'px')});_0x3de13b[_0x2d2f0a(0x1e1)](_0x848985,_0x3de13b['zmlEc'])[_0x2d2f0a(0x24f)](_0x343f89);}else return![];}[_0x33a067(0x1f5)](_0x836f66[_0x33a067(0x259)](_0x33a067(0x18d),_0x836f66[_0x33a067(0x26d)]))[_0x33a067(0x1fc)](_0x836f66[_0x33a067(0x1f3)]):_0x836f66[_0x33a067(0x1f9)](_0x358c1c,_0x26048c,0x3e8);}_0x1df5cf(++_0x18019b);}else _0x4363a6[_0x33a067(0x1ae)]['href']['includes'](_0x836f66[_0x33a067(0x1b8)])&&!_0x172e4e['location'][_0x33a067(0x1e5)]['includes'](_0x836f66[_0x33a067(0x1f4)])&&_0x836f66[_0x33a067(0x27d)](_0x4d3d31[_0x33a067(0x1ae)][_0x33a067(0x1e5)],_0x283651)&&(_0x4d8690=_0x3195b7['location']['href'],_0x14500d(_0x4ecb7a,0x3e8));}try{if(_0x836f66[_0x1d41da(0x27d)](_0x836f66[_0x1d41da(0x199)],_0x836f66[_0x1d41da(0x1eb)])){if(_0x4f4211){if(_0x836f66['GEgaj'](_0x836f66['HVYga'],_0x836f66[_0x1d41da(0x1b9)])){if(_0xb90d93){const _0x273570=_0x35cdb6[_0x1d41da(0x1fc)](_0x2a3eb4,arguments);return _0x593eaf=null,_0x273570;}}else return _0x1df5cf;}else _0x836f66[_0x1d41da(0x224)](_0x1df5cf,0x0);}else _0x130711();}catch(_0x19cccb){}}