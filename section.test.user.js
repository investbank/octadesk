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

(function(_0x226ebc,_0x547133){const _0x2a83cb=a0_0x207c,_0x4ea3b3=_0x226ebc();while(!![]){try{const _0x50674c=-parseInt(_0x2a83cb(0x1f8))/0x1*(parseInt(_0x2a83cb(0x1ba))/0x2)+parseInt(_0x2a83cb(0x183))/0x3*(parseInt(_0x2a83cb(0x23f))/0x4)+parseInt(_0x2a83cb(0x1d4))/0x5*(parseInt(_0x2a83cb(0x181))/0x6)+parseInt(_0x2a83cb(0x218))/0x7*(-parseInt(_0x2a83cb(0x1bd))/0x8)+parseInt(_0x2a83cb(0x1f6))/0x9+parseInt(_0x2a83cb(0x1db))/0xa+-parseInt(_0x2a83cb(0x24c))/0xb;if(_0x50674c===_0x547133)break;else _0x4ea3b3['push'](_0x4ea3b3['shift']());}catch(_0xb97308){_0x4ea3b3['push'](_0x4ea3b3['shift']());}}}(a0_0x38cd,0x1c936),function(_0x141df9){const _0x127993=a0_0x207c,_0x195f18={'lpHhT':function(_0x2a0ae0,_0x5374d3){return _0x2a0ae0(_0x5374d3);},'UUsMk':'yEpKO','DBNVj':function(_0x5c71ec,_0x18e3f9){return _0x5c71ec!==_0x18e3f9;},'yyyRB':_0x127993(0x17e),'HXaGp':_0x127993(0x1fd),'CljIs':_0x127993(0x248),'vEKmm':'\x5c+\x5c+\x20*(?:[a-zA-Z_$][0-9a-zA-Z_$]*)','BpOxP':function(_0x294cb8,_0x41f748){return _0x294cb8(_0x41f748);},'sNSOo':function(_0x2d8572,_0x1c5dec){return _0x2d8572+_0x1c5dec;},'cPSVz':function(_0x1bbef4,_0x4c495f,_0x118dc9){return _0x1bbef4(_0x4c495f,_0x118dc9);},'WIwGe':function(_0x2cc4bf,_0x1eede5){return _0x2cc4bf!==_0x1eede5;},'GqHFf':_0x127993(0x1dc),'SJiGd':_0x127993(0x1d8),'ncdKs':function(_0x9aeb64,_0x25584e){return _0x9aeb64===_0x25584e;},'mmord':_0x127993(0x1ed),'edDUj':_0x127993(0x219),'xLAVS':function(_0x35b1a3,_0xc5e0b3){return _0x35b1a3+_0xc5e0b3;},'fTAza':_0x127993(0x23e),'CfyJV':function(_0x18d2a1){return _0x18d2a1();},'Wxloo':function(_0x5bf3f0,_0x471b3a,_0x225b9){return _0x5bf3f0(_0x471b3a,_0x225b9);},'zLcJf':function(_0xc9f7d0,_0x352e32,_0x4c8f1f){return _0xc9f7d0(_0x352e32,_0x4c8f1f);},'QdHNc':function(_0x219fe0,_0x5739ca){return _0x219fe0(_0x5739ca);},'VHKrH':_0x127993(0x1c5),'NhYsg':'/chat/empty','oMAJV':function(_0x36cce1,_0x1b3219){return _0x36cce1!==_0x1b3219;},'LWFRD':function(_0x3b6ee2,_0x3c75fa){return _0x3b6ee2!==_0x3c75fa;},'SNMFL':_0x127993(0x252),'idanS':function(_0x5d77b4,_0x54782a,_0x493a77){return _0x5d77b4(_0x54782a,_0x493a77);},'oumre':function(_0x19d30,_0x44a705,_0x6f3898){return _0x19d30(_0x44a705,_0x6f3898);},'kQjuS':_0x127993(0x232),'GXVHL':_0x127993(0x246),'tIhnb':function(_0x34a78a){return _0x34a78a();},'wbeuB':function(_0x40bf90,_0x5176eb){return _0x40bf90(_0x5176eb);},'JuVpA':_0x127993(0x1d1),'nulQU':_0x127993(0x20c),'ouLrH':function(_0x834b9a,_0x54270c){return _0x834b9a(_0x54270c);},'gyPZi':_0x127993(0x1ef),'lBntX':function(_0x48274b,_0x5d1cd5){return _0x48274b&&_0x5d1cd5;},'kITjE':_0x127993(0x1e1),'qguTv':'Nome\x20do\x20negócio:\x20','PaQjB':_0x127993(0x1fe),'mkUug':_0x127993(0x231),'haavV':'<a>','ZwYXq':_0x127993(0x18c),'eZiMD':'Abrir\x20no\x20HubSpot','YhUCt':_0x127993(0x19f),'Oktes':_0x127993(0x230),'aYCMU':_0x127993(0x1c2),'VyWtz':'_blank','fEQES':_0x127993(0x184),'VTlVc':function(_0x51ca0f,_0x39eae8){return _0x51ca0f!==_0x39eae8;},'Giukl':_0x127993(0x189),'beYbR':_0x127993(0x22b),'XubNo':_0x127993(0x1b5),'jsRIU':function(_0x109a89,_0x153faf,_0x3c759b){return _0x109a89(_0x153faf,_0x3c759b);},'owWaU':function(_0x45c7bb){return _0x45c7bb();},'fJJcs':_0x127993(0x235),'lVySk':'639891100','SvcsC':_0x127993(0x1b1),'iiQNX':_0x127993(0x1e2),'NMOre':_0x127993(0x229),'XDZPZ':_0x127993(0x1ce),'ZuYDU':_0x127993(0x1d7),'mOJHq':_0x127993(0x1d6),'GelbO':_0x127993(0x194),'LNZis':'490662201','BYSvo':_0x127993(0x1c7),'wQypb':'260593552','yuwzc':_0x127993(0x22e),'XabMi':_0x127993(0x1cd),'uoTdG':_0x127993(0x18d),'nzHeR':_0x127993(0x1f5),'qkWyo':_0x127993(0x1a2),'xefue':_0x127993(0x1d9),'oRkWL':_0x127993(0x217),'HtGKr':_0x127993(0x1bf),'vNCwA':_0x127993(0x220),'IuIPB':'416784450','wkauP':'448802705','VBsuG':_0x127993(0x196),'tamvZ':_0x127993(0x241),'zhXUp':_0x127993(0x1b4),'XffET':function(_0x12e088,_0x5f489e){return _0x12e088(_0x5f489e);}},_0x285b43=(function(){const _0x546c7b=_0x127993,_0x31581e={'srZdo':function(_0x9b1af6,_0x2f29e0){const _0x48f651=a0_0x207c;return _0x195f18[_0x48f651(0x1fc)](_0x9b1af6,_0x2f29e0);},'xfeOK':function(_0x4930a6,_0x5d77fa){return _0x4930a6!==_0x5d77fa;},'cULvf':_0x195f18[_0x546c7b(0x182)]};if(_0x195f18['DBNVj']('BuwrB',_0x195f18['yyyRB'])){if(_0x4c018c)return _0x121229;else cuhOhs[_0x546c7b(0x203)](_0x15d7c8,0x0);}else{let _0x717b6c=!![];return function(_0x3896c8,_0x2b8024){const _0x1ef6fa=_0x546c7b,_0xcab89={'APzaJ':function(_0x36138b,_0x3d654d,_0x51ed7d){return _0x36138b(_0x3d654d,_0x51ed7d);}};if(_0x31581e['cULvf']===_0x31581e['cULvf']){const _0x37f319=_0x717b6c?function(){const _0x369660=a0_0x207c;if(_0x2b8024){if(_0x31581e[_0x369660(0x244)](_0x369660(0x1c0),_0x369660(0x1c0)))return!![];else{const _0x3443f8=_0x2b8024[_0x369660(0x1dd)](_0x3896c8,arguments);return _0x2b8024=null,_0x3443f8;}}}:function(){};return _0x717b6c=![],_0x37f319;}else _0x29111b=_0x5671e0[_0x1ef6fa(0x207)][_0x1ef6fa(0x21a)],_0xcab89['APzaJ'](_0x3267da,_0x1974ed,0x3e8);};}}()),_0x4a928f=_0x195f18[_0x127993(0x1cb)](_0x285b43,this,function(){const _0x555205=_0x127993;return _0x4a928f[_0x555205(0x202)]()[_0x555205(0x1d2)](_0x195f18[_0x555205(0x1e9)])['toString']()[_0x555205(0x1e4)](_0x4a928f)[_0x555205(0x1d2)](_0x555205(0x1fd));});_0x195f18[_0x127993(0x20a)](_0x4a928f);const _0x22fa53=(function(){const _0x1160be=_0x127993,_0x1338f3={'XXqJE':_0x195f18[_0x1160be(0x212)],'mjnHA':_0x195f18[_0x1160be(0x1c1)],'otKEK':function(_0xc8dbf1,_0x452424){const _0x2093ae=_0x1160be;return _0x195f18[_0x2093ae(0x234)](_0xc8dbf1,_0x452424);},'XcnUL':function(_0x4be072,_0x532f09){const _0x1c34f4=_0x1160be;return _0x195f18[_0x1c34f4(0x1a8)](_0x4be072,_0x532f09);},'rjFIt':function(_0x639377,_0x3d9d47){return _0x639377(_0x3d9d47);},'XxJBn':function(_0x1b17bd,_0x49c39d,_0x2867fc){const _0x2894a3=_0x1160be;return _0x195f18[_0x2894a3(0x1f3)](_0x1b17bd,_0x49c39d,_0x2867fc);}};if(_0x195f18[_0x1160be(0x1f2)](_0x195f18[_0x1160be(0x1de)],_0x195f18[_0x1160be(0x19e)])){let _0x347608=!![];return function(_0x5934fb,_0x2457c7){const _0x3d704b=_0x347608?function(){const _0x125424=a0_0x207c;if(_0x2457c7){const _0x114a00=_0x2457c7[_0x125424(0x1dd)](_0x5934fb,arguments);return _0x2457c7=null,_0x114a00;}}:function(){};return _0x347608=![],_0x3d704b;};}else gXetym[_0x1160be(0x1e3)](_0x2cfe3f,this,function(){const _0x419477=_0x1160be,_0x19b2c5=new _0x10a6ba(gXetym[_0x419477(0x236)]),_0x1f8db9=new _0x13e237(gXetym[_0x419477(0x253)],'i'),_0xa4eb80=gXetym['otKEK'](_0x2c51c3,'init');!_0x19b2c5['test'](gXetym['XcnUL'](_0xa4eb80,'chain'))||!_0x1f8db9['test'](_0xa4eb80+_0x419477(0x23e))?gXetym[_0x419477(0x1b0)](_0xa4eb80,'0'):_0x40067c();})();}());(function(){const _0x2bd50f=_0x127993,_0x189cb1={'Gfywy':function(_0x5de8ed,_0x2e7a30,_0x5b5853){const _0x1faf3d=a0_0x207c;return _0x195f18[_0x1faf3d(0x221)](_0x5de8ed,_0x2e7a30,_0x5b5853);}};_0x195f18[_0x2bd50f(0x1f9)](_0x22fa53,this,function(){const _0x4c1ab4=_0x2bd50f;if(_0x195f18[_0x4c1ab4(0x1e7)](_0x195f18[_0x4c1ab4(0x228)],_0x195f18[_0x4c1ab4(0x228)])){const _0x1d4c1e=new RegExp(_0x4c1ab4(0x248)),_0x4890dd=new RegExp(_0x195f18[_0x4c1ab4(0x1c1)],'i'),_0x59c01b=_0x195f18[_0x4c1ab4(0x234)](_0x41b0e3,_0x4c1ab4(0x1a0));!_0x1d4c1e[_0x4c1ab4(0x20f)](_0x195f18[_0x4c1ab4(0x1a8)](_0x59c01b,_0x195f18['edDUj']))||!_0x4890dd[_0x4c1ab4(0x20f)](_0x195f18[_0x4c1ab4(0x188)](_0x59c01b,_0x195f18[_0x4c1ab4(0x1e8)]))?_0x195f18[_0x4c1ab4(0x234)](_0x59c01b,'0'):_0x195f18['CfyJV'](_0x41b0e3);}else _0x189cb1[_0x4c1ab4(0x24a)](_0x1fff41,_0x38f9b0,0x3e8);})();}());'use strict';_0x195f18[_0x127993(0x191)](GM_addStyle,_0x127993(0x185));const _0x4268ad={'Caio\x20Rodrigo':_0x195f18[_0x127993(0x192)],'Barbara\x20Vieira':_0x195f18[_0x127993(0x24f)],'Beatriz\x20Menezes':_0x127993(0x1aa),'Beatriz\x20Vitoria':_0x195f18['SvcsC'],'Carlos\x20Henrique':_0x127993(0x18b),'Cintia\x20França':_0x195f18[_0x127993(0x1bb)],'Diego\x20Mota':_0x127993(0x1cc),'Gabriel\x20Leite':_0x195f18[_0x127993(0x210)],'Igor\x20Gomes':_0x195f18[_0x127993(0x249)],'Jane\x20Silva':_0x195f18[_0x127993(0x20e)],'Jeverson\x20Leal':_0x127993(0x18a),'Jonathan\x20Rodrigues':_0x195f18[_0x127993(0x245)],'Julio\x20Cezar':_0x127993(0x239),'Leandro\x20Soares':_0x195f18[_0x127993(0x1a3)],'Loara\x20Mikelly':_0x195f18[_0x127993(0x251)],'Lucas\x20Ruotolo':_0x195f18[_0x127993(0x18e)],'Luna\x20Rodrigues':_0x195f18['wQypb'],'Maria\x20Barreto':_0x195f18[_0x127993(0x19c)],'Maria\x20Clara':_0x195f18[_0x127993(0x20d)],'Mariana\x20Bergara':_0x195f18[_0x127993(0x240)],'Mariana\x20Mendonça':_0x127993(0x1eb),'Matheus\x20Gomes':_0x195f18[_0x127993(0x21c)],'Murilo\x20Nogueira':'684130698','Natalia\x20Betti':_0x195f18[_0x127993(0x211)],'Othavio\x20Cordeiro':_0x195f18[_0x127993(0x214)],'Paloma\x20Caramelo':_0x127993(0x180),'Rafael\x20Spanopoulos':_0x195f18[_0x127993(0x1a1)],'Raquel\x20Andressa':_0x195f18[_0x127993(0x1ee)],'Rosimeire\x20Pereira':_0x195f18[_0x127993(0x23d)],'Thalia\x20Sousa':_0x195f18[_0x127993(0x21f)],'Thalyta\x20Ramos':_0x127993(0x209),'Thiago\x20Keiki':_0x195f18[_0x127993(0x1f1)],'Vinicius\x20Antunes':_0x195f18[_0x127993(0x22c)],'Yago\x20Fagundes':_0x195f18[_0x127993(0x193)]},_0x4469dd=_0x195f18[_0x127993(0x223)];let _0x3948a7=window['location'][_0x127993(0x21a)];function _0xd1e104(){const _0x6b46f7=_0x127993,_0x1683cf={'Odocb':function(_0x356ba6,_0x4b56d5){const _0x254d89=a0_0x207c;return _0x195f18[_0x254d89(0x1c4)](_0x356ba6,_0x4b56d5);}};window[_0x6b46f7(0x207)][_0x6b46f7(0x21a)][_0x6b46f7(0x1b2)](_0x195f18[_0x6b46f7(0x17c)])&&!window[_0x6b46f7(0x207)][_0x6b46f7(0x21a)][_0x6b46f7(0x1b2)](_0x195f18[_0x6b46f7(0x1d5)])&&_0x195f18[_0x6b46f7(0x22f)](window['location'][_0x6b46f7(0x21a)],_0x3948a7)&&(_0x195f18[_0x6b46f7(0x208)](_0x195f18['SNMFL'],_0x6b46f7(0x252))?jUCTrD[_0x6b46f7(0x238)](_0xb94a7d,0x0):(_0x3948a7=window['location'][_0x6b46f7(0x21a)],_0x195f18[_0x6b46f7(0x1b8)](setTimeout,_0x5caab3,0x3e8)));}_0x141df9(document)['ready'](function(){const _0x3f2c76=_0x127993;_0x195f18[_0x3f2c76(0x21d)](setInterval,_0xd1e104,0x3e8);});function _0x5caab3(){const _0x2a58e7=_0x127993,_0x455580={'yfAMY':_0x195f18[_0x2a58e7(0x1e9)]};_0x141df9(_0x195f18[_0x2a58e7(0x224)])[_0x2a58e7(0x215)](),_0x195f18[_0x2a58e7(0x190)](wait);const _0x322759=_0x195f18[_0x2a58e7(0x191)](_0x141df9,_0x195f18[_0x2a58e7(0x227)])[_0x2a58e7(0x1c8)](),_0x4305a1=_0x195f18[_0x2a58e7(0x234)](_0x141df9,_0x195f18[_0x2a58e7(0x1b7)])[_0x2a58e7(0x1c8)](),_0x27a50b=_0x195f18[_0x2a58e7(0x216)](_0x141df9,_0x195f18[_0x2a58e7(0x23b)])[_0x2a58e7(0x1c8)]();if(_0x195f18[_0x2a58e7(0x1d3)](_0x322759,_0x27a50b)){console[_0x2a58e7(0x195)](_0x2a58e7(0x21e)+_0x322759),console[_0x2a58e7(0x195)](_0x195f18[_0x2a58e7(0x1a8)](_0x195f18['kITjE'],_0x27a50b)),console[_0x2a58e7(0x195)](_0x195f18[_0x2a58e7(0x188)](_0x195f18[_0x2a58e7(0x1ac)],_0x4305a1));const _0x5f26df=_0x4268ad[_0x27a50b];if(!_0x5f26df){console['log'](_0x195f18[_0x2a58e7(0x1b6)]),alert(_0x2a58e7(0x1fe));return;}const _0xa7e3e4=_0x195f18[_0x2a58e7(0x1fc)](_0x141df9,_0x195f18['mkUug']),_0x1d2221=_0xa7e3e4[_0x2a58e7(0x1a4)](),_0xb31967=_0xa7e3e4[_0x2a58e7(0x201)](),_0x4a7056=_0x141df9(_0x195f18['haavV'],{'class':_0x195f18[_0x2a58e7(0x1f0)],'href':_0x2a58e7(0x1e6)+_0x322759,'text':_0x195f18[_0x2a58e7(0x225)],'click':function(_0xb79c84){const _0x5da93e=_0x2a58e7;if(_0x195f18[_0x5da93e(0x1e7)](_0x195f18[_0x5da93e(0x1cf)],_0x195f18['kQjuS']))_0xb79c84['preventDefault'](),_0x3186e3(_0x322759,this[_0x5da93e(0x21a)],_0x5f26df,_0x4305a1,_0x27a50b);else return _0x458dce['toString']()['search'](OGTLci[_0x5da93e(0x1af)])[_0x5da93e(0x202)]()[_0x5da93e(0x1e4)](_0x301450)[_0x5da93e(0x1d2)](OGTLci[_0x5da93e(0x1af)]);}})[_0x2a58e7(0x222)]({'width':_0x1d2221+'px','height':_0x195f18[_0x2a58e7(0x1a8)](_0xb31967,'px')});_0x141df9(_0x195f18[_0x2a58e7(0x1a5)])[_0x2a58e7(0x1df)](_0x4a7056);}else console[_0x2a58e7(0x195)](_0x195f18[_0x2a58e7(0x1fa)]),_0x195f18['BpOxP'](alert,_0x195f18['Oktes']);}function _0x3186e3(_0x8e9da8,_0x4b717b,_0x2b9090,_0x35c48d,_0x36d707){const _0x30e28b=_0x127993,_0x254d59={'ufIcF':_0x195f18[_0x30e28b(0x1ad)]};_0x195f18[_0x30e28b(0x1ea)](_0x30e28b(0x1ae),_0x195f18['Giukl'])?_0x141df9[_0x30e28b(0x17d)]({'type':_0x195f18['beYbR'],'url':_0x30e28b(0x200)+_0x4469dd,'contentType':_0x195f18[_0x30e28b(0x1ab)],'data':JSON[_0x30e28b(0x1fb)]({'Deal\x20Name':_0x35c48d,'Deal\x20ID':_0x8e9da8,'Username':_0x36d707,'Deal\x20owner':_0x2b9090}),'success':function(_0x1fee4c){const _0x292651=_0x30e28b;if(_0x195f18['aYCMU']!==_0x292651(0x1c2)){const _0x17abf7=_0x297c90[_0x292651(0x1dd)](_0x367ac7,arguments);return _0x50ab26=null,_0x17abf7;}else console[_0x292651(0x195)]('Webhook\x20enviado\x20com\x20sucesso.',_0x1fee4c),window[_0x292651(0x1c9)](_0x4b717b,'_blank');},'error':function(_0x1d78f1,_0x3ac25a,_0x4e3fda){const _0x28b9c2=_0x30e28b;console[_0x28b9c2(0x1e5)](_0x254d59[_0x28b9c2(0x1ff)],_0x4e3fda);}}):(_0x4fe415[_0x30e28b(0x195)](_0x30e28b(0x233),_0x170d31),_0x1a7e8d[_0x30e28b(0x1c9)](_0x3d2cf0,_0x195f18[_0x30e28b(0x24d)]));}_0x195f18[_0x127993(0x23a)](_0x141df9,document)['ready'](function(){const _0x402148=_0x127993;_0x195f18[_0x402148(0x1f3)](setInterval,_0xd1e104,0x3e8);});}(jQuery));function a0_0x207c(_0xe6a35c,_0x3544f0){const _0x24d546=a0_0x38cd();return a0_0x207c=function(_0x41b0e3,_0x513002){_0x41b0e3=_0x41b0e3-0x17c;let _0x1c2552=_0x24d546[_0x41b0e3];if(a0_0x207c['EzgEcQ']===undefined){var _0x1450be=function(_0x1faacd){const _0x277ffd='abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';let _0x589960='',_0x34e943='',_0x48db60=_0x589960+_0x1450be;for(let _0x5c7ac8=0x0,_0x1e70a7,_0x30d3d5,_0x4b35b2=0x0;_0x30d3d5=_0x1faacd['charAt'](_0x4b35b2++);~_0x30d3d5&&(_0x1e70a7=_0x5c7ac8%0x4?_0x1e70a7*0x40+_0x30d3d5:_0x30d3d5,_0x5c7ac8++%0x4)?_0x589960+=_0x48db60['charCodeAt'](_0x4b35b2+0xa)-0xa!==0x0?String['fromCharCode'](0xff&_0x1e70a7>>(-0x2*_0x5c7ac8&0x6)):_0x5c7ac8:0x0){_0x30d3d5=_0x277ffd['indexOf'](_0x30d3d5);}for(let _0x53c747=0x0,_0x4c71af=_0x589960['length'];_0x53c747<_0x4c71af;_0x53c747++){_0x34e943+='%'+('00'+_0x589960['charCodeAt'](_0x53c747)['toString'](0x10))['slice'](-0x2);}return decodeURIComponent(_0x34e943);};a0_0x207c['POtWwh']=_0x1450be,_0xe6a35c=arguments,a0_0x207c['EzgEcQ']=!![];}const _0x31d4ce=_0x24d546[0x0],_0x38cd06=_0x41b0e3+_0x31d4ce,_0x207cca=_0xe6a35c[_0x38cd06];if(!_0x207cca){const _0x337afe=function(_0x34074d){this['ESbCVg']=_0x34074d,this['bnHnwg']=[0x1,0x0,0x0],this['pdqKpA']=function(){return'newState';},this['DunLmJ']='\x5cw+\x20*\x5c(\x5c)\x20*{\x5cw+\x20*',this['UeHfvb']='[\x27|\x22].+[\x27|\x22];?\x20*}';};_0x337afe['prototype']['Vrvzoq']=function(){const _0x5bc1dc=new RegExp(this['DunLmJ']+this['UeHfvb']),_0xe8ed1b=_0x5bc1dc['test'](this['pdqKpA']['toString']())?--this['bnHnwg'][0x1]:--this['bnHnwg'][0x0];return this['hcQWHo'](_0xe8ed1b);},_0x337afe['prototype']['hcQWHo']=function(_0x1a3a27){if(!Boolean(~_0x1a3a27))return _0x1a3a27;return this['GADSIA'](this['ESbCVg']);},_0x337afe['prototype']['GADSIA']=function(_0x15a932){for(let _0x501df1=0x0,_0x5176e4=this['bnHnwg']['length'];_0x501df1<_0x5176e4;_0x501df1++){this['bnHnwg']['push'](Math['round'](Math['random']())),_0x5176e4=this['bnHnwg']['length'];}return _0x15a932(this['bnHnwg'][0x0]);},new _0x337afe(a0_0x207c)['Vrvzoq'](),_0x1c2552=a0_0x207c['POtWwh'](_0x1c2552),_0xe6a35c[_0x38cd06]=_0x1c2552;}else _0x1c2552=_0x207cca;return _0x1c2552;},a0_0x207c(_0xe6a35c,_0x3544f0);}function _0x41b0e3(_0x266c54){const _0x399052=a0_0x207c,_0x2ac279={'IOsSX':function(_0x40f87a,_0xa9c825,_0x6678c7,_0x276525,_0xbd7fdb,_0x4e8280){return _0x40f87a(_0xa9c825,_0x6678c7,_0x276525,_0xbd7fdb,_0x4e8280);},'MBpVR':function(_0x3c6cf3,_0x1baf7d){return _0x3c6cf3+_0x1baf7d;},'SyjYF':_0x399052(0x21e),'cXkhe':function(_0x67a0b9,_0x15bd3b){return _0x67a0b9+_0x15bd3b;},'lyGdh':_0x399052(0x1e1),'kqpFe':function(_0x559a68,_0x5a5aec){return _0x559a68+_0x5a5aec;},'dZbVy':_0x399052(0x1fe),'mlXMD':function(_0x53aab8,_0x3930c2){return _0x53aab8(_0x3930c2);},'LKWOJ':_0x399052(0x231),'kHvun':function(_0x735a9,_0x2c3be5,_0x154da8){return _0x735a9(_0x2c3be5,_0x154da8);},'qphPe':_0x399052(0x19d),'qMPYq':'hubspot-button','FRQEY':_0x399052(0x19f),'vtvQP':_0x399052(0x1a6),'nPyUJ':_0x399052(0x230),'MAdnq':_0x399052(0x1f4),'IXaab':function(_0x364548,_0x158248){return _0x364548===_0x158248;},'oacOs':_0x399052(0x17f),'ooVKb':function(_0x6dd9f8,_0x515cc9){return _0x6dd9f8!==_0x515cc9;},'TygCi':_0x399052(0x1f7),'UfdJv':_0x399052(0x247),'PpEOB':_0x399052(0x250),'AnsQF':_0x399052(0x237),'TaPaI':function(_0x1d0bb6,_0xe25bf){return _0x1d0bb6!==_0xe25bf;},'Nmrza':_0x399052(0x226),'KcCJj':_0x399052(0x19a),'Tsitp':_0x399052(0x1a9),'DhnwH':_0x399052(0x19b),'eIQQZ':function(_0x8a0564,_0x4f19eb){return _0x8a0564(_0x4f19eb);}};function _0x5d091c(_0x149c56){const _0x13a66c=_0x399052,_0x182725={'apric':_0x2ac279[_0x13a66c(0x21b)],'ONTRg':function(_0x2ce118,_0x4018d3){const _0x1bbb03=_0x13a66c;return _0x2ac279[_0x1bbb03(0x197)](_0x2ce118,_0x4018d3);},'Tssrg':function(_0x29f133,_0x40f6f4){return _0x29f133!==_0x40f6f4;},'npSSe':_0x2ac279[_0x13a66c(0x206)]};if(_0x2ac279['IXaab'](typeof _0x149c56,_0x2ac279[_0x13a66c(0x24e)])){if(_0x2ac279[_0x13a66c(0x24b)](_0x2ac279[_0x13a66c(0x1a7)],_0x2ac279[_0x13a66c(0x198)]))return function(_0x4cd852){}[_0x13a66c(0x1e4)](_0x2ac279[_0x13a66c(0x1b9)])[_0x13a66c(0x1dd)](_0x2ac279['AnsQF']);else{const _0x37a2b0={'LBAMh':function(_0x3819e5,_0x4e359f,_0x4be8ed,_0x4f269d,_0x22790e,_0x4e0ef8){const _0x4c2a3f=_0x13a66c;return _0x2ac279[_0x4c2a3f(0x1e0)](_0x3819e5,_0x4e359f,_0x4be8ed,_0x4f269d,_0x22790e,_0x4e0ef8);}};_0x56d659[_0x13a66c(0x195)](_0x2ac279[_0x13a66c(0x242)](_0x2ac279['SyjYF'],_0x4e2a55)),_0x22ff8a[_0x13a66c(0x195)](_0x2ac279[_0x13a66c(0x199)](_0x2ac279['lyGdh'],_0x489ce4)),_0x19998d[_0x13a66c(0x195)](_0x2ac279[_0x13a66c(0x1bc)](_0x13a66c(0x1d0),_0x1e8634));const _0xfae57f=_0x4a4d5c[_0x12b35b];if(!_0xfae57f){_0x4fe0d4[_0x13a66c(0x195)](_0x2ac279[_0x13a66c(0x204)]),_0x2ac279[_0x13a66c(0x197)](_0x342180,_0x2ac279[_0x13a66c(0x204)]);return;}const _0x2afed3=_0x4c2030(_0x2ac279['LKWOJ']),_0x75ec68=_0x2afed3[_0x13a66c(0x1a4)](),_0xe356c3=_0x2afed3['height'](),_0x3553e5=_0x2ac279[_0x13a66c(0x213)](_0x3936a6,_0x2ac279[_0x13a66c(0x1b3)],{'class':_0x2ac279[_0x13a66c(0x187)],'href':_0x13a66c(0x1e6)+_0x4f49a4,'text':'Abrir\x20no\x20HubSpot','click':function(_0x55a310){const _0x497c24=_0x13a66c;_0x55a310[_0x497c24(0x22d)](),_0x37a2b0['LBAMh'](_0x2959c5,_0x114f3a,this[_0x497c24(0x21a)],_0xfae57f,_0x1527aa,_0x9b7da0);}})['css']({'width':_0x75ec68+'px','height':_0x2ac279['cXkhe'](_0xe356c3,'px')});_0x2ac279[_0x13a66c(0x197)](_0x5763d4,_0x2ac279['FRQEY'])['append'](_0x3553e5);}}else{if(_0x2ac279['TaPaI'](_0x13a66c(0x1ca),_0x2ac279[_0x13a66c(0x205)]))_0x2ac279['MBpVR']('',_0x149c56/_0x149c56)[_0x2ac279['KcCJj']]!==0x1||_0x2ac279[_0x13a66c(0x20b)](_0x149c56%0x14,0x0)?function(){const _0x49dd1e=_0x13a66c;if(_0x2ac279[_0x49dd1e(0x18f)]===_0x2ac279[_0x49dd1e(0x18f)])return!![];else{const _0x3aee9c=_0x5b189f[_0x49dd1e(0x1dd)](_0x5cdfa3,arguments);return _0x11f899=null,_0x3aee9c;}}[_0x13a66c(0x1e4)](_0x13a66c(0x19b)+_0x2ac279[_0x13a66c(0x243)])[_0x13a66c(0x1c3)](_0x13a66c(0x1da)):function(){const _0x16ce7c=_0x13a66c;if(_0x182725[_0x16ce7c(0x1c6)](_0x182725[_0x16ce7c(0x1be)],_0x16ce7c(0x1f4)))_0x5e5fff[_0x16ce7c(0x195)](_0x182725[_0x16ce7c(0x186)]),_0x182725['ONTRg'](_0x1afe56,_0x182725[_0x16ce7c(0x186)]);else return![];}[_0x13a66c(0x1e4)](_0x2ac279['kqpFe'](_0x2ac279[_0x13a66c(0x23c)],_0x2ac279[_0x13a66c(0x243)]))[_0x13a66c(0x1dd)](_0x13a66c(0x22a));else{const _0x1db72d=_0x34074d?function(){if(_0x5176e4){const _0x1a83ec=_0x17d95b['apply'](_0x724b33,arguments);return _0x124be9=null,_0x1a83ec;}}:function(){};return _0x501df1=![],_0x1db72d;}}_0x2ac279[_0x13a66c(0x1ec)](_0x5d091c,++_0x149c56);}try{if(_0x266c54)return _0x5d091c;else _0x5d091c(0x0);}catch(_0x4ad937){}}function a0_0x38cd(){const _0x271907=['vLrSvMm','nZeXodiYnde3','zuLruvO','thrJzgu','shrhs3i','i29JDgeTBMf2AwDHDgLVBIa+igrPDIa+igrPDIa+igrPDI5FBMf2AwDHDgLVBI1MB290zxjFmtHQmNHFmsa+igrPDIa+igrPDI5FBwvUDv85EwDIEf8XlL9JB25Uzwn0Aw9Ulw1HBMfNzxjFD2q2m3HFnsa+igrPDIa+igrPDIa+ihnWyw4Ux2f2yxrHCI1WzxjZB24Tzgv0ywLSC19FBMfTzv9WBJD3Av83id4GC3bHBG','wNDzwhe','D2THDva','v0L3r2u','y1btvNO','zfftwKW','nJm1otaXmJuZ','mtK0ndK4mufzC1vrzG','ALLvu3u','ndK4mxz1qKfMBa','EKXJsMy','t2T0zxm','C3rYAw5NAwz5','BhbiAfq','kcGOlISPkYKRksSK','vxn1W6fYAw8GBSoJBYbLBMnVBNrYywrVlG','Dwzjy0y','Ahr0Chm6lY9OB29RCY56yxbPzxiUy29Tl2HVB2TZl2nHDgnOlW','AgvPz2H0','Dg9tDhjPBMC','C3jAzg8','zfPIvNK','tM1YEMe','tufKBNe','Bg9JyxrPB24','tfDguKq','nJq1otCWmduY','B3Dxyvu','svHHywi','i2nVBNrHAw5LCI1JAgf0id4GBwfPBIa+ihnLy3rPB24GpIbKAxyUx3bYB2zPBgvFmwvWA2PFmsa+ihnLy3rPB246BNrOlwnOAwXKkdmPid4GC2vJDgLVBIa+ihnLy3rPB246BNrOlwnOAwXKkdiPid4GzgL2lL9MAwvSzhmTy29UDgfPBMvYxZf4zdfKxZuGpIbKAxy6BNrOlwnOAwXKkdePid4GzgL2id4GzgL2lL9MAwvSzhmTy29UDgfPBMvYx19MAwvSzf9FyM94xZf4zdfKxZq1id4GzgL2id4GC3bHBG','wgfItwK','wNvzrfu','DgvZDa','tK1pCMu','CwTxEw8','q2XQsxm','A0H2Dw4','EgvMDwu','CMvTB3zL','B3vmCKG','nZaZotK4mZy2','mtrNtxvYv0G','y2HHAw4','AhjLzG','BLb5vuO','BNPizvi','B3vTCMu','rgvHBcbjrdOG','sxvjuei','ntm2mZi4odmY','v3HSB28','y3nZ','EMHyvxa','r1HwseW','zvPPtuq','sM1QB08','sNvwCee','Bw1VCMq','nZiYmZy0nZm1','C3rHDgvpyMPLy3q','ue9tva','vKjZDuC','ChjLDMvUDerLzMf1Bhq','ndK3mZeZnZK2','B01bsLy','shvIC3bVDcbjrcbUW6nVigvUy29UDhjHzg8U','i2nVBNrHAw5LCI1JAgf0id4GBwfPBIa+ihnLy3rPB24GpIbKAxyUx3bYB2zPBgvFmwvWA2PFmsa+ihnLy3rPB246BNrOlwnOAwXKkdeP','zxzervy','v2vIAg9VAYbLBNzPywrVignVBsbZDwnLC3nVlG','qNbpEfa','mZy3mteXnJu','wfHXsKu','y291BNrLCG','t2rVy2i','ndaYmtm0mZKY','wgzMrvq','z3LqwMK','rgHUD0G','DK5dD0e','Aw5WDxq','ntG1otKYsgvtu09q','Dw9uzeC','nZeWmtqYmJe1','tujWvLi','vhnPDha','EgzLt0S','Bu9kshe','ys5ODwjZCg90lwj1DhrVBG','rMTvz08','zNvUy3rPB24GkLWOicPCkq','werAufO','r2z5D3K','B29ws2i','mZiZnJyXogjzreH1wq','vNLxDhO','B2fJt3m','Bfz5u2S','D2HPBguGkhrYDwuPihT9','te5AAxm','uxzQz2i','BwPUsee','vKHlCKG','ywPHEa','qNv3CKi','C3rYAw5N','nJy0mJC4ntm3','ndm4uuDpq3HX','vvvZtwS','m01Pr0LkDW','rxjYBYbHBYbLBNzPyxiGD2vIAg9VAY4','ys5ODwjZCg90lwj1DhrVBNTKAxnWBgf5oMzSzxG7BwfYz2LUlwXLzNq6lJvYzw07yM9YzgvYlxrVCc1Szwz0lxjHzgL1CZOUnZvYzw07yM9YzgvYlwjVDhrVBs1Szwz0lxjHzgL1CZOUnZvYzw07ls10DY1IzY1VCgfJAxr5oJe7yMfJA2DYB3vUzc1JB2XVCJPYz2jHkdi1nsWYntuSmJu1lhzHCIGTlxr3lwjNlw9WywnPDhKPktSTlxr3lxnOywrVDZOWidfWEcaYChGGmcbYz2jHkdaSidaSidaSic4WnsK7yM94lxnOywrVDZP2yxiOls10DY1YAw5Nlw9MzNnLDc1ZAgfKB3CSmcaWicmWmdaWksX2yxiOls10DY1YAw5NlxnOywrVDYWWidaGiZaWmdaPlhzHCIGTlxr3lxnOywrVDYK7zM9UDc1Myw1PBhK6tM90BYbtyw5Zo2zVBNqTC2L6ztOUodC1CMvTo2XPBMuTAgvPz2H0oJeUmJvYzw07zM9UDc13zwLNAhq6ntaWoY0TDhCTDgv4Dc1VCgfJAxr5oJe7y29SB3i6CMDIysG3osW4ncWXmdaSDMfYkc0TDhCTDgv4Dc1VCgfJAxr5ksK7Cg9ZAxrPB246ywjZB2X1Dgu7Dg9WoI4Xnsu7CMLNAhq6lJuLo3OTAw5KzxG6mtaWmdTHBgLNBI1PDgvTCZPJzw50zxi7ANvZDgLMEs1JB250zw50oMnLBNrLCN0','yxbYAwm','Cu1qwxe','EeXbvLm','Ew5XEuy','mJeWntq4ota3','ntKYnJe5mta0','AhvIC3bVDc1IDxr0B24','ntG3nZG1ota0','qLLtDM8','DNr2uva','DeLOBMi','D2jLDui','zKPky3m','DgfTDLO','ndGYmJC4nZK3','Bg9N','ndy2mJyZmJa0','BwXytuq','vwzKsNy','y1HRAgu','BgvUz3rO','zgvIDq','Exv3EMm','pge+','u0PPr2q','yM9KEq','Aw5PDa','B1jRv0W','nJK0ntqWote0','r2vSyK8','D2LKDgG','wwHvq3q','weD5A1u','vhLNq2K','C05tt28','z2DLCG','nJaYmZGXnJiY','whvItM8','CwD1vhy','zKvrrvm','BhDqvKy','EwzbtvK','CMPgsxq','ndaYmJC3mty3','Aw5JBhvKzxm','CxbOugu','mte0odmWndGVm2W3ng9Kyq','yxbWBgLJyxrPB24VANnVBG','ugfrAKi','BNvSuvu','AwrHBLm','uhbft0i','mJzjqvfiu08','AwLrtLG','A3fWrMu','ndq0oteYwK5qD3fr','BNbtu2u','nde2nZG0ndq3','BfzgsKy','DKvlBw0','A0Xjt0i','y2fSBa','uwritMm','l2nOyxqV','vhnZCMC','ntiXnde4mZq0','Dgv4Da','B3bLBG','B1DrzLu','ANnssvu','mJi0ntm0mtCX','ndy4oda5mZm2','nJu0mdm2ndK0','A1fQDvm','tM9TzsbKBYbUzwFdS2nPBZOG','i2nVBNrHAw5LCI1JAgf0id4GBwfPBIa+ihnLy3rPB24GpIbKAxyUx3bYB2zPBgvFmwvWA2PFmsa+ihnLy3rPB246BNrOlwnOAwXKkdmPid4GC2vJDgLVBIa+ihnLy3rPB246BNrOlwnOAwXKkdiPid4GzgL2lL9MAwvSzhmTy29UDgfPBMvYxZf4zdfKxZuGpIbKAxy6BNrOlwnOAwXKkdyPid4GzgL2id4GzgL2lL9MAwvSzhmTy29UDgfPBMvYx19MAwvSzf9FyM94xZf4zdfKxZq1id4GzgL2id4GC3bHBG','C2vHCMnO','BejUDfG','mta5mtbiuwnNwMu','tMHzC2C','ntm3nZu5ntC0','mtiZntC3ndCW','wMvVwxC','nJG5mtC2otK1','ywn0Aw9U','nJuZnZiWCKHzDgXk','zhDWDeC','yxbWBhK','r3firMy','yxbWzw5K','su9Zu1G','tM9TzsbKzsb1C3xdOxjPBZOG','mtiXmZe4nZaW','whHkqM4','y29UC3rYDwn0B3i','zxjYB3i','Ahr0Chm6lY9HChaUAhvIC3bVDc5JB20Vy29UDgfJDhmVntG2nZu3mc9YzwnVCMqVmc0ZlW','BMnKs3m','zLrbEMe','sfHHr3a'];a0_0x38cd=function(){return _0x271907;};return a0_0x38cd();}