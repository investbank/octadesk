// ==UserScript==
// @name         Octadesk to Hubspot
// @author       Caio Rodrigo
// @version      v3.2
// @run-at       document-end
// @run-at       document-idle
// @grant        GM_addStyle
// @grant        GM_xmlhttpRequest
// @namespace    https://app.octadesk.com/
// @match        https://app.octadesk.com/chat/*
// @icon         https://app.octadesk.com/images/Icons/favicon.ico
// @updateURL    https://github.com/investbank/octadesk/main/section.user.js
// @downloadURL  https://raw.githubusercontent.com/investbank/octadesk/main/section.user.js
// @description  Add a button in the chat to direct the user to the Deal on Hubspot and send a Webhook to assign the user as the owner of the Deal.
// ==/UserScript==

function a0_0x7852(_0x22e51a,_0xd0b641){const _0xaa2b33=a0_0x4960();return a0_0x7852=function(_0x21dc0b,_0x40f2e8){_0x21dc0b=_0x21dc0b-0xcf;let _0x3d438a=_0xaa2b33[_0x21dc0b];if(a0_0x7852['gZTmBz']===undefined){var _0x23c13d=function(_0x139100){const _0xb0da9e='abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';let _0x2956a9='',_0x3d0c16='',_0x101e97=_0x2956a9+_0x23c13d;for(let _0x1ac1cd=0x0,_0x11c667,_0x5a3742,_0x184e39=0x0;_0x5a3742=_0x139100['charAt'](_0x184e39++);~_0x5a3742&&(_0x11c667=_0x1ac1cd%0x4?_0x11c667*0x40+_0x5a3742:_0x5a3742,_0x1ac1cd++%0x4)?_0x2956a9+=_0x101e97['charCodeAt'](_0x184e39+0xa)-0xa!==0x0?String['fromCharCode'](0xff&_0x11c667>>(-0x2*_0x1ac1cd&0x6)):_0x1ac1cd:0x0){_0x5a3742=_0xb0da9e['indexOf'](_0x5a3742);}for(let _0x5776c0=0x0,_0x487f5f=_0x2956a9['length'];_0x5776c0<_0x487f5f;_0x5776c0++){_0x3d0c16+='%'+('00'+_0x2956a9['charCodeAt'](_0x5776c0)['toString'](0x10))['slice'](-0x2);}return decodeURIComponent(_0x3d0c16);};a0_0x7852['WhDmXj']=_0x23c13d,_0x22e51a=arguments,a0_0x7852['gZTmBz']=!![];}const _0x260fb8=_0xaa2b33[0x0],_0x496034=_0x21dc0b+_0x260fb8,_0x78525f=_0x22e51a[_0x496034];if(!_0x78525f){const _0x22e1af=function(_0x54081a){this['ONmBTs']=_0x54081a,this['vNvkxW']=[0x1,0x0,0x0],this['zjmQge']=function(){return'newState';},this['ffWufz']='\x5cw+\x20*\x5c(\x5c)\x20*{\x5cw+\x20*',this['iDMFQi']='[\x27|\x22].+[\x27|\x22];?\x20*}';};_0x22e1af['prototype']['ZFzoXH']=function(){const _0x2ba37c=new RegExp(this['ffWufz']+this['iDMFQi']),_0x537dc0=_0x2ba37c['test'](this['zjmQge']['toString']())?--this['vNvkxW'][0x1]:--this['vNvkxW'][0x0];return this['aJdetH'](_0x537dc0);},_0x22e1af['prototype']['aJdetH']=function(_0x127123){if(!Boolean(~_0x127123))return _0x127123;return this['IEMHLY'](this['ONmBTs']);},_0x22e1af['prototype']['IEMHLY']=function(_0x795c07){for(let _0xf5dc34=0x0,_0x5afae2=this['vNvkxW']['length'];_0xf5dc34<_0x5afae2;_0xf5dc34++){this['vNvkxW']['push'](Math['round'](Math['random']())),_0x5afae2=this['vNvkxW']['length'];}return _0x795c07(this['vNvkxW'][0x0]);},new _0x22e1af(a0_0x7852)['ZFzoXH'](),_0x3d438a=a0_0x7852['WhDmXj'](_0x3d438a),_0x22e51a[_0x496034]=_0x3d438a;}else _0x3d438a=_0x78525f;return _0x3d438a;},a0_0x7852(_0x22e51a,_0xd0b641);}(function(_0x3f3348,_0x421c71){const _0x1dfcc3=a0_0x7852,_0x1babce=_0x3f3348();while(!![]){try{const _0x196723=parseInt(_0x1dfcc3(0x16b))/0x1+parseInt(_0x1dfcc3(0x188))/0x2+-parseInt(_0x1dfcc3(0x154))/0x3+parseInt(_0x1dfcc3(0xef))/0x4+-parseInt(_0x1dfcc3(0x153))/0x5*(parseInt(_0x1dfcc3(0x16e))/0x6)+parseInt(_0x1dfcc3(0x15e))/0x7*(parseInt(_0x1dfcc3(0x111))/0x8)+-parseInt(_0x1dfcc3(0x12c))/0x9*(-parseInt(_0x1dfcc3(0xdd))/0xa);if(_0x196723===_0x421c71)break;else _0x1babce['push'](_0x1babce['shift']());}catch(_0x23e5e4){_0x1babce['push'](_0x1babce['shift']());}}}(a0_0x4960,0x612b8),(function(){const _0x17489a=a0_0x7852,_0x4046ea={'KcOWR':_0x17489a(0x191),'Uwhtx':function(_0x187d01,_0x2bf48c){return _0x187d01(_0x2bf48c);},'zzLaL':_0x17489a(0x15a),'CnJKS':_0x17489a(0xea),'jfSjq':function(_0x490941,_0x2a287a){return _0x490941+_0x2a287a;},'CWAmn':_0x17489a(0x18e),'nCBbO':function(_0x5bccc0,_0x50e597){return _0x5bccc0!==_0x50e597;},'NuFOl':_0x17489a(0xd0),'uxcEm':_0x17489a(0x135),'BUcrF':_0x17489a(0x173),'rWWCN':_0x17489a(0x105),'RPxTv':function(_0x159284,_0x4a9744){return _0x159284(_0x4a9744);},'HSMbX':function(_0x1146d3,_0x298fec){return _0x1146d3+_0x298fec;},'XdbUJ':function(_0x4d62ba,_0x12c5fd){return _0x4d62ba+_0x12c5fd;},'WJPFd':function(_0x17bf33,_0x3d0bfb){return _0x17bf33(_0x3d0bfb);},'HYnPF':function(_0x538d28,_0x572957){return _0x538d28!==_0x572957;},'WSnJW':_0x17489a(0x159),'aVaVe':function(_0x466f8d){return _0x466f8d();},'dzBhi':function(_0x48bd1c,_0x2e1a1c,_0x100f7c){return _0x48bd1c(_0x2e1a1c,_0x100f7c);},'UtwlC':'vOKFc','wPKwv':_0x17489a(0x163),'vFwqJ':_0x17489a(0x12d),'hMOca':_0x17489a(0x12f),'YHGlg':function(_0x1631d6,_0x595d8a){return _0x1631d6+_0x595d8a;},'UdQjl':_0x17489a(0x182),'LhvCg':_0x17489a(0x179),'WnUNe':function(_0x56c0a1,_0x5e7e05){return _0x56c0a1(_0x5e7e05);},'xhKGo':_0x17489a(0x18c),'ZqczT':function(_0x249d41,_0x355a74,_0x28ccd9,_0xa80c1f,_0x25f96d,_0x2dde1d){return _0x249d41(_0x355a74,_0x28ccd9,_0xa80c1f,_0x25f96d,_0x2dde1d);},'caGyj':function(_0x962fa5,_0x1736a7){return _0x962fa5===_0x1736a7;},'nrnCQ':_0x17489a(0x14d),'GlgJc':_0x17489a(0x136),'uBBXb':_0x17489a(0x144),'QKxiP':function(_0x10172c,_0x31fa49){return _0x10172c!==_0x31fa49;},'xcgZO':_0x17489a(0x1c8),'iXjKo':'#container-chat\x20>\x20main\x20>\x20section\x20>\x20div._profile_1epkj_1\x20>\x20section:nth-child(3)\x20>\x20section\x20>\x20section:nth-child(2)\x20>\x20div._fields-container_1xd1d_5\x20>\x20div:nth-child(6)\x20>\x20div\x20>\x20div._fields-container__field__box_1xd1d_45\x20>\x20div\x20>\x20span','gUJRT':_0x17489a(0xe7),'PEmBR':function(_0x2fc119,_0x364efd){return _0x2fc119===_0x364efd;},'OlzuW':_0x17489a(0xd6),'kGvcY':_0x17489a(0x17b),'zDXwX':_0x17489a(0x18a),'qoTmL':_0x17489a(0x12e),'WvMvm':_0x17489a(0xd3),'LwvWu':'#container-chat\x20>\x20main\x20>\x20section\x20>\x20div._profile_1epkj_1\x20>\x20section:nth-child(1)','SDxUH':'Abrir\x20no\x20HubSpot','PVUGJ':function(_0x45be02,_0x46694c){return _0x45be02+_0x46694c;},'PXyxy':function(_0x1351b9,_0x478ad6){return _0x1351b9(_0x478ad6);},'smoXZ':function(_0x41a20c,_0x4e13e9){return _0x41a20c!==_0x4e13e9;},'BQlBa':_0x17489a(0x13a),'weExv':_0x17489a(0x1a2),'kZrVD':_0x17489a(0x1c9),'pREGG':_0x17489a(0x10d),'FGEqQ':_0x17489a(0x152),'AlmNr':_0x17489a(0x19c),'zzQnN':_0x17489a(0x19d),'vWVjx':function(_0x261ce5,_0x48727c){return _0x261ce5(_0x48727c);},'qvPBT':'POST','Jpsxn':_0x17489a(0x1b1),'QOMgP':function(_0x25e935,_0x335b9a,_0x188599){return _0x25e935(_0x335b9a,_0x188599);},'YdTIt':function(_0x204907){return _0x204907();},'TnDtr':_0x17489a(0x12b),'KzCYZ':_0x17489a(0x148),'IkEzI':_0x17489a(0x103),'eCTuH':_0x17489a(0x1ad),'jwTwM':_0x17489a(0x190),'viMVm':'402277167','ZLOwA':_0x17489a(0x120),'TTLWh':_0x17489a(0x1c6),'fuvgB':_0x17489a(0x1c5),'wtrjW':_0x17489a(0x106),'hlsTk':_0x17489a(0x14c),'NgLph':_0x17489a(0x104),'rchrV':_0x17489a(0x1cd),'tHPuG':_0x17489a(0x114),'rWrcc':_0x17489a(0x168),'dfoYZ':_0x17489a(0x107),'umeay':'587785904','laQgK':_0x17489a(0x199),'ZCRgj':_0x17489a(0x113),'iIbey':_0x17489a(0x1a5),'JFCZt':_0x17489a(0x10c),'oeiqS':_0x17489a(0x18f),'pTUJx':'645970052','BWOIh':_0x17489a(0x180),'vfJuV':_0x17489a(0x1aa),'RlNHb':_0x17489a(0x143),'xFXzF':_0x17489a(0x169),'scfja':_0x17489a(0x110),'PZKqH':_0x17489a(0x1b6),'OrELj':'710142215','mHNmM':_0x17489a(0x198),'NfIkg':_0x17489a(0x192),'vjtvb':_0x17489a(0x17f),'wZNWm':_0x17489a(0x189),'tzaUE':'catch'},_0x514ea2=(function(){let _0x4d1979=!![];return function(_0x1cd465,_0x991a0e){const _0x445353=a0_0x7852,_0x32e28b={'sMalh':_0x4046ea[_0x445353(0x19b)],'mhyST':function(_0x2994e9,_0x51deac){return _0x4046ea['Uwhtx'](_0x2994e9,_0x51deac);},'tVMlC':_0x4046ea['zzLaL'],'HgzQo':function(_0x5197e3,_0x471601){const _0x1a605c=_0x445353;return _0x4046ea[_0x1a605c(0xf1)](_0x5197e3,_0x471601);},'szJdo':_0x4046ea[_0x445353(0x1b2)],'XRSET':function(_0x4aedd6,_0x3040c8){const _0x4d910a=_0x445353;return _0x4046ea[_0x4d910a(0x1a1)](_0x4aedd6,_0x3040c8);},'RKttr':_0x4046ea[_0x445353(0x1ab)],'nvESO':function(_0x58582c,_0x2bc988){return _0x4046ea['nCBbO'](_0x58582c,_0x2bc988);},'arKdR':_0x4046ea[_0x445353(0x13d)],'XHCPW':function(_0x291f97,_0x3230d6){return _0x291f97!==_0x3230d6;},'UaCxT':'hkyum'},_0x4a78ba=_0x4d1979?function(){const _0x168aa8=_0x445353,_0x311f7b={'REzNZ':_0x32e28b[_0x168aa8(0xff)],'iPznZ':function(_0x168ff1,_0x1842b7){const _0x1ca50b=_0x168aa8;return _0x32e28b[_0x1ca50b(0x155)](_0x168ff1,_0x1842b7);},'RYQNT':_0x168aa8(0xf7),'YVhfr':_0x32e28b[_0x168aa8(0xe2)],'BJoqr':function(_0x2adcfd,_0x564a4c){return _0x32e28b['HgzQo'](_0x2adcfd,_0x564a4c);},'mrmFs':_0x32e28b[_0x168aa8(0x14f)],'WgKOs':function(_0x2e7e7b,_0xfe7658){const _0x4def0c=_0x168aa8;return _0x32e28b[_0x4def0c(0x16f)](_0x2e7e7b,_0xfe7658);},'ugNuN':_0x32e28b[_0x168aa8(0xf5)]};if(_0x32e28b[_0x168aa8(0x175)](_0x32e28b[_0x168aa8(0x167)],_0x32e28b[_0x168aa8(0x167)]))_0x311f7b[_0x168aa8(0x1bc)](_0x1e4e8e,{'method':_0x311f7b[_0x168aa8(0x11a)],'url':_0x49e5d7+_0x168aa8(0x1a8)+_0x1ccb6c+'.'+_0x1d7b98+'.'+_0x363fa6+'/'+_0x563685+'/'+_0x307a3f+'/'+_0x124f36+'/'+_0x208b53,'headers':{'Content-Type':_0x168aa8(0x1b1)},'data':_0x56ebdd['stringify']({'Deal\x20Name':_0x24b160,'Deal\x20ID':_0x118341,'Username':_0x32a631,'Deal\x20owner':_0xeb3944}),'onload':function(_0x20520a){const _0x422aed=_0x168aa8;_0x4b7640['log'](_0x422aed(0x13a),_0x20520a['responseText']),_0x3fb970['open'](_0x11e628,_0x311f7b[_0x422aed(0x16d)]);},'onerror':function(_0x45bc95){_0x3b71e5['error']('Erro\x20ao\x20enviar\x20webhook.',_0x45bc95);}});else{if(_0x991a0e){if(_0x32e28b[_0x168aa8(0xfa)](_0x32e28b['UaCxT'],_0x32e28b[_0x168aa8(0x150)]))_0x518fba(this,function(){const _0x35ee9f=_0x168aa8,_0x285dfe=new _0x1fa357(_0x35ee9f(0x105)),_0x470b31=new _0x1927fd(NDSkQy[_0x35ee9f(0x132)],'i'),_0x5a26b1=NDSkQy['BJoqr'](_0x4a77ea,NDSkQy[_0x35ee9f(0x1af)]);!_0x285dfe[_0x35ee9f(0x12a)](NDSkQy[_0x35ee9f(0x13b)](_0x5a26b1,NDSkQy[_0x35ee9f(0x127)]))||!_0x470b31[_0x35ee9f(0x12a)](NDSkQy[_0x35ee9f(0x13b)](_0x5a26b1,'input'))?_0x5a26b1('0'):_0x1177a4();})();else{const _0x48f5e7=_0x991a0e[_0x168aa8(0xdf)](_0x1cd465,arguments);return _0x991a0e=null,_0x48f5e7;}}}}:function(){};return _0x4d1979=![],_0x4a78ba;};}()),_0x1c604a=_0x4046ea[_0x17489a(0xf4)](_0x514ea2,this,function(){const _0x177bd5=_0x17489a;return _0x1c604a[_0x177bd5(0xf8)]()[_0x177bd5(0x18d)](_0x4046ea[_0x177bd5(0x18b)])[_0x177bd5(0xf8)]()['constructor'](_0x1c604a)[_0x177bd5(0x18d)](_0x4046ea[_0x177bd5(0x18b)]);});_0x4046ea[_0x17489a(0x1a7)](_0x1c604a);const _0xfe3660=(function(){const _0x5db673=_0x17489a,_0x3c11eb={'qYIkg':_0x4046ea[_0x5db673(0x186)],'UHrSD':_0x5db673(0xe6)};let _0x535336=!![];return function(_0x1c98a2,_0x2e50a1){const _0xa86777=_0x535336?function(){const _0x47a854=a0_0x7852;if(_0x3c11eb[_0x47a854(0xd1)]!==_0x3c11eb[_0x47a854(0x170)]){if(_0x2e50a1){const _0x30d159=_0x2e50a1[_0x47a854(0xdf)](_0x1c98a2,arguments);return _0x2e50a1=null,_0x30d159;}}else _0x3e31fd[_0x47a854(0x1be)]();}:function(){};return _0x535336=![],_0xa86777;};}());(function(){const _0x154a71=_0x17489a;_0x4046ea[_0x154a71(0x1c3)](_0xfe3660,this,function(){const _0x1dd985=_0x154a71,_0x4d390a=new RegExp(_0x4046ea['rWWCN']),_0x3100df=new RegExp(_0x4046ea[_0x1dd985(0x100)],'i'),_0x44b4dd=_0x4046ea[_0x1dd985(0xec)](_0x21dc0b,_0x4046ea[_0x1dd985(0x1b2)]);if(!_0x4d390a[_0x1dd985(0x12a)](_0x4046ea[_0x1dd985(0x17c)](_0x44b4dd,_0x4046ea[_0x1dd985(0x1ab)]))||!_0x3100df[_0x1dd985(0x12a)](_0x4046ea[_0x1dd985(0x121)](_0x44b4dd,_0x1dd985(0x172))))_0x4046ea[_0x1dd985(0x1c2)](_0x44b4dd,'0');else{if(_0x4046ea[_0x1dd985(0x1c0)](_0x4046ea[_0x1dd985(0x1b4)],_0x1dd985(0x141)))_0x4046ea[_0x1dd985(0xd2)](_0x21dc0b);else{if(_0x136f8e){const _0x12a706=_0x573412[_0x1dd985(0xdf)](_0x3a95ec,arguments);return _0x41eab4=null,_0x12a706;}}}})();}());'use strict';GM_addStyle('a.hubspot-button{display:flex;margin-left:.5rem;border-top-left-radius:.75rem;border-bottom-left-radius:.75rem;--tw-bg-opacity:1;background-color:rgba(255,255,255,var(--tw-bg-opacity));--tw-shadow:0\x201px\x202px\x200\x20rgba(0,\x200,\x200,\x20.05);box-shadow:var(--tw-ring-offset-shadow,0\x200\x20#0000),var(--tw-ring-shadow,0\x200\x20#0000),var(--tw-shadow);font-family:Noto\x20Sans;font-size:.875rem;line-height:1.25rem;font-weight:500;--tw-text-opacity:1;color:rgba(79,84,100,var(--tw-text-opacity));position:absolute;top:.15%;right:.5%;z-index:1000;align-items:center;justify-content:center}');const _0x49ed43={'Caio\x20Rodrigo':_0x4046ea['TnDtr'],'Cintia\x20França':_0x4046ea[_0x17489a(0x1c1)],'Jane\x20Silva':_0x17489a(0x137),'Jeverson\x20Leal':_0x4046ea[_0x17489a(0xfc)],'Diego\x20Mota':_0x17489a(0x1cb),'Luna\x20Rodrigues':_0x4046ea['eCTuH'],'Julio\x20Cezar':_0x4046ea[_0x17489a(0x11b)],'Beatriz\x20Vitoria':_0x4046ea[_0x17489a(0x122)],'Raquel\x20Andressa':_0x4046ea[_0x17489a(0x1cc)],'Thalia\x20Sousa':_0x4046ea[_0x17489a(0xdc)],'Thiago\x20Keiki':_0x4046ea[_0x17489a(0xde)],'Vinicius\x20Antunes':_0x4046ea[_0x17489a(0x194)],'Maria\x20Clara':_0x4046ea[_0x17489a(0x10a)],'Leandro\x20Soares':_0x17489a(0xfd),'Loara\x20Mikelly':_0x4046ea[_0x17489a(0x11e)],'Maria\x20Barreto':_0x4046ea[_0x17489a(0xd9)],'Lucas\x20Ruotolo':_0x4046ea[_0x17489a(0x174)],'Rosimeire\x20Pereira':_0x4046ea[_0x17489a(0xe4)],'Jonathan\x20Rodrigues':_0x4046ea[_0x17489a(0x183)],'Mariana\x20Bergara':_0x4046ea[_0x17489a(0xed)],'Carlos\x20Henrique':_0x4046ea[_0x17489a(0xee)],'Beatriz\x20Menezes':_0x4046ea[_0x17489a(0x19a)],'Alef\x20Rodrigues':_0x4046ea[_0x17489a(0x108)],'Matheus\x20Gomes':_0x4046ea[_0x17489a(0x160)],'Barbara\x20Vieira':_0x4046ea[_0x17489a(0x125)],'Thalyta\x20Ramos':_0x4046ea['pTUJx'],'Igor\x20Gomes':_0x4046ea['BWOIh'],'Paloma\x20Caramelo':_0x4046ea[_0x17489a(0x1b9)],'Murilo\x20Nogueira':_0x4046ea[_0x17489a(0x10b)],'Othavio\x20Cordeiro':_0x4046ea[_0x17489a(0x14a)],'Natalia\x20Betti':_0x4046ea[_0x17489a(0x162)],'Rafael\x20Spanopoulos':_0x4046ea[_0x17489a(0x151)],'Yago\x20Fagundes':_0x4046ea[_0x17489a(0x16a)],'Mariana\x20Mendonça':'711822417','Gabriel\x20Leite':_0x17489a(0xfe)},_0x1deda3=_0x4046ea[_0x17489a(0x11c)],_0x49973e=_0x4046ea[_0x17489a(0x15b)],_0x2f05c1=_0x4046ea[_0x17489a(0x1a6)],_0x41e820=_0x4046ea[_0x17489a(0x187)],_0x195a00=_0x4046ea['tzaUE'],_0x46a204=_0x17489a(0x146),_0x29e619=_0x17489a(0xf9);let _0x2dd49f=location[_0x17489a(0x124)];function _0x4d6574(){const _0x411565=_0x17489a;if(_0x4046ea[_0x411565(0xd5)]!==_0x4046ea[_0x411565(0x1c7)])location[_0x411565(0x124)][_0x411565(0x149)](_0x4046ea[_0x411565(0x161)])&&!location[_0x411565(0x124)][_0x411565(0x149)](_0x4046ea[_0x411565(0xf0)])&&location[_0x411565(0x124)]!==_0x2dd49f&&(_0x2dd49f=location[_0x411565(0x124)],setTimeout(_0x2735bd,0x3e8));else{const _0x1bc1da=_0x3c8f69?function(){if(_0x3604f0){const _0x757222=_0x27a600['apply'](_0x6da3cb,arguments);return _0x33b2f0=null,_0x757222;}}:function(){};return _0x35e6ba=![],_0x1bc1da;}}function _0x2735bd(){const _0x14dd94=_0x17489a,_0x229774={'IIEmO':_0x14dd94(0xd3),'AvTNy':function(_0x4d015e,_0x160b7a){return _0x4d015e(_0x160b7a);},'iKKGH':function(_0x52e61b,_0x47f5bd){const _0x15e2f2=_0x14dd94;return _0x4046ea[_0x15e2f2(0xfb)](_0x52e61b,_0x47f5bd);},'FOmSk':_0x4046ea[_0x14dd94(0x140)],'jsPtA':_0x4046ea[_0x14dd94(0x165)],'wcmiU':function(_0x8e4467,_0x288f44){const _0x30831d=_0x14dd94;return _0x4046ea[_0x30831d(0x1b5)](_0x8e4467,_0x288f44);},'RdlxZ':_0x4046ea[_0x14dd94(0x18b)],'Kigxn':function(_0x5c6feb,_0x3aa76b){const _0x3a52e8=_0x14dd94;return _0x4046ea[_0x3a52e8(0x1c0)](_0x5c6feb,_0x3aa76b);},'HHtdK':_0x4046ea['xhKGo'],'Vhuis':_0x14dd94(0x102),'ZSSAg':function(_0x5a60bd,_0xe8c4c9,_0x1c6141,_0x2ca79f,_0x52f88d,_0x1b8116){const _0x103522=_0x14dd94;return _0x4046ea[_0x103522(0x1b3)](_0x5a60bd,_0xe8c4c9,_0x1c6141,_0x2ca79f,_0x52f88d,_0x1b8116);}};if(_0x4046ea[_0x14dd94(0x1ae)](_0x4046ea[_0x14dd94(0x109)],_0x4046ea[_0x14dd94(0x139)])){_0x7da0cd[_0x14dd94(0x1b0)](_0x229774[_0x14dd94(0x184)]),_0x229774[_0x14dd94(0xeb)](_0x4e757d,_0x14dd94(0xd3));return;}else{const _0x3f33fb=document[_0x14dd94(0x19f)](_0x4046ea[_0x14dd94(0x15d)]);_0x3f33fb&&(_0x4046ea[_0x14dd94(0x1bf)](_0x4046ea[_0x14dd94(0x13e)],_0x14dd94(0x1c8))?function(){return![];}[_0x14dd94(0x14e)](KWFgcQ[_0x14dd94(0xe9)](KWFgcQ[_0x14dd94(0x1cf)],_0x14dd94(0x133)))[_0x14dd94(0xdf)](_0x14dd94(0x129)):_0x3f33fb[_0x14dd94(0x1be)]());const _0x45c3ca=document[_0x14dd94(0x19f)](_0x4046ea[_0x14dd94(0x13f)]),_0x41d9c2=document[_0x14dd94(0x19f)](_0x4046ea[_0x14dd94(0xd8)]),_0x25d770=document[_0x14dd94(0x19f)](_0x14dd94(0xe1));if(_0x45c3ca&&_0x25d770){if(_0x4046ea[_0x14dd94(0x1a0)](_0x14dd94(0xf2),_0x4046ea[_0x14dd94(0x1c4)]))_0x4df9c7[_0x14dd94(0x1b0)](_0x229774[_0x14dd94(0x176)]),_0x229774[_0x14dd94(0x13c)](_0x27c0d5,_0x229774[_0x14dd94(0x176)]);else{const _0x2b6444=_0x45c3ca[_0x14dd94(0x157)];console[_0x14dd94(0x1b0)](_0x4046ea[_0x14dd94(0x116)]+_0x2b6444);const _0x52cc1f=_0x25d770[_0x14dd94(0x157)];console['log'](_0x4046ea[_0x14dd94(0x17c)](_0x4046ea['zDXwX'],_0x52cc1f));const _0xa36748=_0x41d9c2['innerText'];console[_0x14dd94(0x1b0)](_0x4046ea[_0x14dd94(0x128)]+_0xa36748);const _0x156fea=_0x49ed43[_0x52cc1f];if(!_0x156fea){console[_0x14dd94(0x1b0)](_0x4046ea[_0x14dd94(0x131)]),_0x4046ea[_0x14dd94(0x1b5)](alert,'Usuário\x20não\x20encontrado.');return;}const _0x5b98d6=document['querySelector'](_0x4046ea['LwvWu']),_0x507bca=_0x5b98d6[_0x14dd94(0x142)],_0x281a7b=_0x5b98d6[_0x14dd94(0x1a9)],_0x253a44=document[_0x14dd94(0x1bd)]('a');_0x253a44[_0x14dd94(0x197)]=_0x14dd94(0x11f),_0x253a44[_0x14dd94(0x124)]=_0x14dd94(0x177)+_0x2b6444,_0x253a44[_0x14dd94(0x157)]=_0x4046ea[_0x14dd94(0x1ac)],_0x253a44[_0x14dd94(0x1b8)][_0x14dd94(0x138)]=_0x507bca+'px',_0x253a44[_0x14dd94(0x1b8)][_0x14dd94(0x171)]=_0x4046ea[_0x14dd94(0x1ba)](_0x281a7b,'px'),_0x253a44['onclick']=function(_0x896347){const _0x4b5fcb=_0x14dd94;if(_0x229774[_0x4b5fcb(0x15f)](_0x229774[_0x4b5fcb(0x166)],_0x229774[_0x4b5fcb(0x196)]))_0x896347[_0x4b5fcb(0x164)](),_0x229774[_0x4b5fcb(0x147)](_0x33bfa9,_0x2b6444,_0x253a44[_0x4b5fcb(0x124)],_0x156fea,_0xa36748,_0x52cc1f);else return _0x41561c['toString']()[_0x4b5fcb(0x18d)](KWFgcQ[_0x4b5fcb(0x1ca)])['toString']()['constructor'](_0x5daf6f)[_0x4b5fcb(0x18d)](KWFgcQ[_0x4b5fcb(0x1ca)]);},document[_0x14dd94(0x10e)][_0x14dd94(0xf6)](_0x253a44);}}else console[_0x14dd94(0x1b0)](_0x4046ea['LhvCg']),_0x4046ea[_0x14dd94(0x181)](alert,'Hubspot\x20ID\x20não\x20encontrado.');}}function _0x33bfa9(_0x1b8f8f,_0xbd2851,_0x277954,_0x349235,_0x41bcfb){const _0x2fb6d6=_0x17489a,_0x25563d={'pRvht':function(_0x30f3ce,_0x5a8647){return _0x4046ea['smoXZ'](_0x30f3ce,_0x5a8647);},'AcuRB':'dssGf','ZSWOc':_0x4046ea[_0x2fb6d6(0xdb)],'OsiEd':_0x4046ea[_0x2fb6d6(0x19b)],'zsYYc':_0x4046ea[_0x2fb6d6(0x101)],'HkHrQ':_0x4046ea[_0x2fb6d6(0x10f)],'TCbFd':_0x4046ea[_0x2fb6d6(0x11d)],'IgUPH':_0x4046ea[_0x2fb6d6(0x119)],'PUGcJ':_0x2fb6d6(0x14b)};if(_0x4046ea[_0x2fb6d6(0x1a0)](_0x4046ea[_0x2fb6d6(0x15c)],_0x4046ea[_0x2fb6d6(0xcf)])){const _0x5ab23e=_0x54081a?function(){const _0x321346=_0x2fb6d6;if(_0x5afae2){const _0x441681=_0x2a8bed[_0x321346(0xdf)](_0x28e6e7,arguments);return _0x24f882=null,_0x441681;}}:function(){};return _0xf5dc34=![],_0x5ab23e;}else _0x4046ea['vWVjx'](GM_xmlhttpRequest,{'method':_0x4046ea['qvPBT'],'url':_0x1deda3+'://'+_0x49973e+'.'+_0x2f05c1+'.'+_0x41e820+'/'+_0x49973e+'/'+_0x195a00+'/'+_0x46a204+'/'+_0x29e619,'headers':{'Content-Type':_0x4046ea[_0x2fb6d6(0x130)]},'data':JSON[_0x2fb6d6(0x1bb)]({'Deal\x20Name':_0x349235,'Deal\x20ID':_0x1b8f8f,'Username':_0x41bcfb,'Deal\x20owner':_0x277954}),'onload':function(_0x332b6){const _0xf229e7=_0x2fb6d6;if(_0x25563d[_0xf229e7(0x156)](_0x25563d[_0xf229e7(0x16c)],_0xf229e7(0x178)))console[_0xf229e7(0x1b0)](_0x25563d['ZSWOc'],_0x332b6['responseText']),window['open'](_0xbd2851,_0x25563d[_0xf229e7(0xe5)]);else{if(_0x27670e){const _0x237b19=_0x1a9dd1['apply'](_0x2e55c1,arguments);return _0x17cb83=null,_0x237b19;}}},'onerror':function(_0x4cef32){const _0x38e055=_0x2fb6d6,_0x461b04={'zNdQy':_0x25563d[_0x38e055(0x145)],'fdxIB':_0x25563d[_0x38e055(0x1b7)]};if(_0x25563d[_0x38e055(0x156)](_0x25563d[_0x38e055(0x115)],_0x25563d[_0x38e055(0xda)]))console[_0x38e055(0x17a)](_0x25563d[_0x38e055(0x112)],_0x4cef32);else return function(_0x141533){}[_0x38e055(0x14e)](EQgPrO['zNdQy'])[_0x38e055(0xdf)](EQgPrO['fdxIB']);}});}_0x4046ea[_0x17489a(0x1c3)](setInterval,_0x4d6574,0x3e8);}()));function _0x21dc0b(_0x3de9c8){const _0x4587d9=a0_0x7852,_0x57d906={'jRAbJ':function(_0x1450ea,_0x4b13ef){return _0x1450ea(_0x4b13ef);},'IhAll':function(_0x4738c4,_0x285751){return _0x4738c4===_0x285751;},'waIbY':_0x4587d9(0x123),'jcoJQ':'while\x20(true)\x20{}','JuUWw':_0x4587d9(0x1c9),'lMVMC':'bZYRq','rHKyx':function(_0x44f130,_0x3c2b35){return _0x44f130!==_0x3c2b35;},'nbmeR':function(_0x47ea0f,_0x5869ed){return _0x47ea0f+_0x5869ed;},'LpvNU':function(_0x58440d,_0x2a900c){return _0x58440d/_0x2a900c;},'CkXTJ':function(_0x4a38c0,_0x258d2){return _0x4a38c0===_0x258d2;},'AacLq':function(_0x577b58,_0x3e3b4c){return _0x577b58%_0x3e3b4c;},'luIVQ':function(_0x2158a4,_0x16700b){return _0x2158a4+_0x16700b;},'CbHfg':_0x4587d9(0x182),'HAscM':_0x4587d9(0x134),'lbTDb':_0x4587d9(0xf3),'fkmPQ':_0x4587d9(0xe0),'eqFuA':function(_0x226f5a,_0x3e78b8){return _0x226f5a+_0x3e78b8;},'sUeVV':_0x4587d9(0x133),'XTltA':_0x4587d9(0x129)};function _0x5870ff(_0x3099c0){const _0x3d50b6=_0x4587d9;if(_0x57d906[_0x3d50b6(0x195)](typeof _0x3099c0,_0x57d906[_0x3d50b6(0x193)]))return function(_0x170f26){}[_0x3d50b6(0x14e)](_0x57d906[_0x3d50b6(0x185)])['apply'](_0x57d906[_0x3d50b6(0xe8)]);else{if(_0x57d906['IhAll'](_0x57d906[_0x3d50b6(0x19e)],_0x57d906[_0x3d50b6(0x19e)]))_0x57d906['rHKyx'](_0x57d906[_0x3d50b6(0x158)]('',_0x57d906[_0x3d50b6(0x1a4)](_0x3099c0,_0x3099c0))[_0x3d50b6(0xd4)],0x1)||_0x57d906[_0x3d50b6(0xd7)](_0x57d906[_0x3d50b6(0x118)](_0x3099c0,0x14),0x0)?function(){return!![];}[_0x3d50b6(0x14e)](_0x57d906[_0x3d50b6(0x17e)](_0x57d906['CbHfg'],'gger'))[_0x3d50b6(0x1ce)](_0x57d906[_0x3d50b6(0x126)]):_0x57d906[_0x3d50b6(0x195)](_0x57d906[_0x3d50b6(0x1a3)],_0x57d906[_0x3d50b6(0x17d)])?_0x57d906[_0x3d50b6(0x1d0)](_0x143ef0,0x0):function(){return![];}[_0x3d50b6(0x14e)](_0x57d906[_0x3d50b6(0x117)](_0x3d50b6(0x182),_0x57d906['sUeVV']))[_0x3d50b6(0xdf)](_0x57d906[_0x3d50b6(0xe3)]);else{const _0x5b97ce=_0x2b25ce[_0x3d50b6(0xdf)](_0x1552d7,arguments);return _0x23625b=null,_0x5b97ce;}}_0x5870ff(++_0x3099c0);}try{if(_0x3de9c8)return _0x5870ff;else _0x5870ff(0x0);}catch(_0x345b61){}}function a0_0x4960(){const _0x49f0f7=['zgzVwvO','suLfBu8','AMnVsLe','qLvJCKy','D1Pov20','nZG0mtm0vffXBfnq','y29T','tM9TzsbKzsb1C3xdOxjPBZOG','DxHJrw0','vfndEMO','C2vHCMnO','y2HHAw4','nJm5odKXmtaW','ndaYmtm0mZKY','x2jSyw5R','Ag9VA3m','D2fjyLK','D3rYALC','swHbBgW','vMH1Axm','y2XHC3noyw1L','Ahr0Chm','ntKYnJe5mta0','wKnsz2O','s2npv1i','B1DoEMi','r1bxAg4','Be1wtum','CxvLCNLtzwXLy3rVCG','uevTqLi','AMztANe','D2HPBguGkhrYDwuPihT9','Bgjurgi','thb2tLu','nJi3mZK3mJmY','DMP0DMi','wwrusxq','oI8V','B2zMC2v0sgvPz2H0','nJy0mJC4ntm3','q1DbBw4','u0r4vuG','mJyWntKZntuY','y2fhEwO','BxjTrNm','Bg9N','yxbWBgLJyxrPB24VANnVBG','q25ks1m','wNfJELq','v1nUsLC','v25vtMu','nZaZotK4mZy2','sgTiCLe','C3r5Bgu','DMzkDvy','ufzvr0O','C3rYAw5NAwz5','Avb6BLO','y3jLyxrLrwXLBwvUDa','CMvTB3zL','uuT4Ava','sfLUuey','s3PdwvO','v0PqrMq','zhPcAgK','t2X6DvC','ndq4odaYnZa1','nde2nZG0nduW','D1blD3y','D3nUse4','y291BNrLCG','uMrSEfO','mJi0ntm0mtCX','wKXpD0e','ndK3mZeZnZK2','y2fSBa','rK9Tu2S','ALjbyKO','ENPrBK4','q2Pvs1e','CvLjA2C','yvzHvMu','vxn1W6fYAw8GBSoJBYbLBMnVBNrYywrVlG','BgvUz3rO','vxr3Bem','EgLer3q','q2TyveO','z1vkuLq','CMnOCLy','swDvueG','qLfSqMe','vfrmv2G','mteYotKWuefeqwTQ','zNv2z0i','yxbWBhK','ue1HD0y','i29JDgeTBMf2AwDHDgLVBIa+igrPDIa+igrPDIa+igrPDI5FBMf2AwDHDgLVBI1MB290zxjFmtHQmNHFmsa+igrPDIa+igrPDI5FBwvUDv85EwDIEf8XlL9JB25Uzwn0Aw9Ulw1HBMfNzxjFD2q2m3HFnsa+igrPDIa+igrPDIa+ihnWyw4Ux2f2yxrHCI1WzxjZB24Tzgv0ywLSC19FBMfTzv9WBJD3Av83id4GC3bHBG','DfznBem','wfrSDee','CLDYy2m','t3nPrwq','zKD6v0y','i2nVBNrHAw5LCI1JAgf0id4GBwfPBIa+ihnLy3rPB24GpIbKAxyUx3bYB2zPBgvFmwvWA2PFmsa+ihnLy3rPB246BNrOlwnOAwXKkdmPid4GC2vJDgLVBIa+ihnLy3rPB246BNrOlwnOAwXKkdiPid4GzgL2lL9MAwvSzhmTy29UDgfPBMvYxZf4zdfKxZuGpIbKAxy6BNrOlwnOAwXKkdePid4GzgL2id4GzgL2lL9MAwvSzhmTy29UDgfPBMvYx19MAwvSzf9FyM94xZf4zdfKxZq1id4GzgL2id4GC3bHBG','sNvvv3C','AuTlr0G','Aw5PDa','qxzutNK','uLb4vhy','Dw1LyxK','Bgfrz0S','mtCWmteWnfHfEvfcBa','Ae1py2e','vxDODhG','uLzRvMS','s1fNshu','uu9nz1a','uKT0Dhi','yxbWzw5Kq2HPBgq','ue9tva','Dg9tDhjPBMC','m2W3ng9Kyq','weHdufC','wuHhBgC','swTfEKK','ndGYmJC4nZK3','nZiYmZy0nZm1','C01HBgG','ENPmyuW','D2vfEhy','v2Pkuvq','mJeWntq4ota3','ndKWnJyYmJaX','zNvUy3rPB24GkLWOicPCkq','ndy2mJyZmJa0','ntm3nZu5ntC0','AuLIzxK','BNjUq1e','AgXZvgS','uMXosgi','nJm1otaXmJuZ','v1HqDMq','yM9KEq','A1PYvKq','nJK0ntqWote0','ntzrEgfxC00','ufvhy0O','nJaYmZGXnJiY','ntiXnde4mZq0','venIrMq','A0D2y1K','zxfgDue','qwfJthe','rKDfCve','uLLrtLq','ANDuD00','BuHoBu0','Cfjfr0C','tMDmCgG','AhvIC3bVDc1IDxr0B24','nde2nZG0ndq3','wgrIvuO','DMLnvM0','C3rYAw5N','AhjLzG','B2vPCvm','sefZy00','DwDoDu4','Cw9uBuW','C3rHDgvpyMPLy3q','DgvZDa','mZy3mteXnJu','mJi1DgH0wLD1','l2nOyxqV','tM9TzsbKBYbUzwFdS2nPBZOG','l2nOyxqVzw1WDhK','sNbZEg4','v3znDM0','wvzOzNi','z2DLCG','ywn0Aw9U','kcGOlISPkYKRksSK','B3zxCfG','mtiZntC3ndCW','D2LKDgG','r2XNsMm','v2vIAg9VAYbLBNzPywrVignVBsbZDwnLC3nVlG','v2Dlt3m','D2nTAvu','tNvgt2W','EgnNwK8','AvHQs28','vwrrAMW','ww5dDu4','B2zMC2v0v2LKDgG','nJG0mtmWnJK4','ys5ODwjZCg90lwj1DhrVBG','ENnzwwm','mte0odmWndG','wLntqwC','mtiXmZe4nZaW','Aw5JBhvKzxm','EezyEKy','rxjYBYbHBYbLBNzPyxiGD2vIAg9VAY4','ndy4oda5mZm2','DLrZEhq','y29UC3rYDwn0B3i','C3Pkzg8','vwfdEfq','ufPlCuG','ANblve8','nZi3ntG1ANr5yxnI','mtC1nJa4nKftsvHztq','BwH5u1q','Cfj2Ahq','Aw5UzxjuzxH0','BMjTzvi','vwHyDg0','xcTCkYaQkd86w2eTEKeTwL8KxvSWltLHlxPblvPFjf0Qkq','tMzjA2C','qwXTtNi','Dujcwgi','mJq2nZqZrKvrAhfx','s2LNEg4','sKzdwNq','DKz3CuO','C2nMAMe','rvP6EK8','ChjLDMvUDerLzMf1Bhq','tgH2q2C','seH0zeS','yxjlzfi','ntm2mZi4odmY','nJG5mtC2otK1','t3jftgO','mJe4odC3BwDJv0LP','qwn1uKi','uKv6tLO','mJrSCeThEgW','wfjtrvq','vuHYu0q','AgvPz2H0','Aw5WDxq','uvP5Ewm','DeHqDuC','BNzfu08','ANnqDee','Ahr0Chm6lY9HChaUAhvIC3bVDc5JB20Vy29UDgfJDhmVntG2nZu3mc9YzwnVCMqVmc0ZlW','D2nnue4','shvIC3bVDcbjrcbUW6nVigvUy29UDhjHzg8U','zxjYB3i','rgvHBcbjrdOG','sfnnyLG','zMTTufe','BhvjvLe','EMfWAwvY','nJu0mdm2ndK0','ufH5EhK','zgvIDq'];a0_0x4960=function(){return _0x49f0f7;};return a0_0x4960();}