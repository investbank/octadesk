// ==UserScript==
// @name         Octadesk to Hubspot
// @author       Caio Rodrigo
// @source       https://github.com/caiorodrigodev
// @version      1.3.3
// @run-at       document-end
// @run-at       document-idle
// @grant        GM_addStyle
// @grant        GM_xmlhttpRequest
// @namespace    https://app.octadesk.com/
// @match        https://app.octadesk.com/*
// @match        https://app.octadesk.com/chat/*
// @icon         https://app.octadesk.com/images/Icons/favicon.ico
// @updateURL    https://github.com/investbank/octadesk/main/section.user.js
// @downloadURL  https://raw.githubusercontent.com/investbank/octadesk/main/section.user.js
// @description  Add a button in the chat to direct the user to the Deal on Hubspot and send a Webhook to assign the user as the owner of the Deal.
// @commit       Correção e renomear constantes.
// ==/UserScript==

(function(_0x5ae0f4,_0x1f8854){const _0x3ec682=a0_0x5bb6,_0x316c96=_0x5ae0f4();while(!![]){try{const _0xf76796=parseInt(_0x3ec682(0x19b))/0x1*(-parseInt(_0x3ec682(0x132))/0x2)+parseInt(_0x3ec682(0x135))/0x3*(-parseInt(_0x3ec682(0x215))/0x4)+parseInt(_0x3ec682(0x12d))/0x5+-parseInt(_0x3ec682(0x140))/0x6+-parseInt(_0x3ec682(0x1cf))/0x7+-parseInt(_0x3ec682(0x147))/0x8*(parseInt(_0x3ec682(0x1ac))/0x9)+parseInt(_0x3ec682(0x207))/0xa;if(_0xf76796===_0x1f8854)break;else _0x316c96['push'](_0x316c96['shift']());}catch(_0x4b3817){_0x316c96['push'](_0x316c96['shift']());}}}(a0_0x292f,0x5e147),(function(){const _0xa587ff=a0_0x5bb6,_0x29a087={'MpnQN':function(_0x2bb2a4,_0x4bdb3a){return _0x2bb2a4(_0x4bdb3a);},'UgiPK':_0xa587ff(0x1f6),'oNYUf':_0xa587ff(0x126),'csCqT':function(_0x5b4814,_0x22f052){return _0x5b4814+_0x22f052;},'qhGqO':_0xa587ff(0x19f),'AGjda':_0xa587ff(0x1a9),'kvpgu':_0xa587ff(0x15b),'zfRCB':function(_0x36143a,_0x59b16f){return _0x36143a===_0x59b16f;},'vngJj':'IcWuy','lVONC':_0xa587ff(0x163),'YpCDa':'/chat/empty','zDtHo':function(_0x59d576,_0x5f92){return _0x59d576!==_0x5f92;},'uEVtd':function(_0x24e243,_0x3a8f1b,_0x22e9c9){return _0x24e243(_0x3a8f1b,_0x22e9c9);},'JaSWn':function(_0xb5d353,_0x92d1d8){return _0xb5d353!==_0x92d1d8;},'VnNal':_0xa587ff(0x211),'MJYGI':function(_0x46abff,_0x179a72,_0x1a73c2,_0xc96323,_0x3aff9a,_0xd46bea){return _0x46abff(_0x179a72,_0x1a73c2,_0xc96323,_0x3aff9a,_0xd46bea);},'vvmaK':function(_0x745248){return _0x745248();},'MFEbZ':_0xa587ff(0x171),'ZfIRS':function(_0x303c01,_0x480b6f){return _0x303c01&&_0x480b6f;},'tfNCX':_0xa587ff(0x18d),'ZVFME':'Nome\x20de\x20usuário:\x20','cOKUS':function(_0x9a6a8f,_0x14c47d){return _0x9a6a8f===_0x14c47d;},'CMieR':_0xa587ff(0x1c4),'QMSJQ':'zFWyO','qcxVO':_0xa587ff(0x177),'dODql':_0xa587ff(0x1ee),'oNBSw':function(_0x52f1ce,_0x58d93f){return _0x52f1ce+_0x58d93f;},'TWmIa':'Hubspot\x20ID\x20não\x20encontrado.','FHaIp':_0xa587ff(0x1da),'WmRiA':'init','mpnwj':function(_0x33c9be,_0x5be5f5){return _0x33c9be!==_0x5be5f5;},'QskvD':'hfWSE','SGVDG':'(((.+)+)+)+$','LWhvz':function(_0x4bee95,_0x4e5369){return _0x4bee95(_0x4e5369);},'ICEOn':_0xa587ff(0x1b2),'UzwJF':function(_0x1b24e0,_0x10154c){return _0x1b24e0(_0x10154c);},'BjRYW':function(_0x4d67f5,_0x44d67a){return _0x4d67f5===_0x44d67a;},'EoLAB':'IKTup','RnopR':_0xa587ff(0x1f9),'eMcpc':function(_0xda9f08,_0x23d717,_0x123b8f){return _0xda9f08(_0x23d717,_0x123b8f);},'ltqAL':_0xa587ff(0x15d),'CuRFi':function(_0x2f89da,_0x3d18b0){return _0x2f89da<=_0x3d18b0;},'KauOt':_0xa587ff(0x128),'ADgnX':_0xa587ff(0x1d8),'kAXkb':_0xa587ff(0x17f),'IkaIO':function(_0x41d67c,_0x5b66a4){return _0x41d67c+_0x5b66a4;},'wNTSj':function(_0xb1a5da){return _0xb1a5da();},'oTXXi':function(_0x112d7a,_0x56cffc){return _0x112d7a!==_0x56cffc;},'GWCLW':_0xa587ff(0x1bf),'FiKMl':'application/json','BmoNd':_0xa587ff(0x13d),'QHsTa':_0xa587ff(0x187),'MpNKD':_0xa587ff(0x1ff),'wYlkr':'224534171','YLgnB':_0xa587ff(0x20b),'xDeMH':_0xa587ff(0x160),'wretB':_0xa587ff(0x17e),'ffyIW':_0xa587ff(0x172),'nUyXl':_0xa587ff(0x1e8),'WUyvu':_0xa587ff(0x1e0),'IDOru':_0xa587ff(0x1d9),'nupPr':_0xa587ff(0x152),'apNNs':_0xa587ff(0x15c),'REKMe':_0xa587ff(0x1d4),'jwgIn':_0xa587ff(0x202),'yBUet':_0xa587ff(0x1a5),'efVzc':'689176995','IVwWQ':'664278537','mAHoJ':_0xa587ff(0x14e),'ogMHp':_0xa587ff(0x1b4),'gBmbf':_0xa587ff(0x13c),'KXjTg':_0xa587ff(0x1dc),'Qeimt':_0xa587ff(0x1d7),'cdUMP':'11483048/3l74oda'},_0x5d86de=(function(){const _0x240400=_0xa587ff,_0x30ff8a={'iHcWo':function(_0x1e32c1,_0x357413){const _0x4d8ad3=a0_0x5bb6;return _0x29a087[_0x4d8ad3(0x1db)](_0x1e32c1,_0x357413);},'ZMCHw':_0x240400(0x14c),'lQZYI':_0x29a087[_0x240400(0x162)],'vLsyD':_0x29a087[_0x240400(0x20f)]};let _0x2b363b=!![];return function(_0x582f4a,_0x5a403a){const _0x123ab2=_0x240400,_0x17a1c1={'PhTWu':_0x30ff8a[_0x123ab2(0x1c7)]};if(_0x30ff8a['vLsyD']===_0x30ff8a[_0x123ab2(0x1de)]){const _0x4962fe=_0x2b363b?function(){const _0x3798e8=_0x123ab2;if(_0x17a1c1[_0x3798e8(0x1e3)]!==_0x17a1c1[_0x3798e8(0x1e3)]){if(_0x5d1e66){const _0x74cdeb=_0x235e5e[_0x3798e8(0x200)](_0x306f79,arguments);return _0x379ac0=null,_0x74cdeb;}}else{if(_0x5a403a){const _0x13e8ce=_0x5a403a['apply'](_0x582f4a,arguments);return _0x5a403a=null,_0x13e8ce;}}}:function(){};return _0x2b363b=![],_0x4962fe;}else _0x16d4c5[_0x123ab2(0x145)](_0x123ab2(0x14c)),_0x30ff8a[_0x123ab2(0x138)](_0x2724d4,_0x30ff8a[_0x123ab2(0x12b)]);};}()),_0x26c98a=(function(){let _0x1483fe=!![];return function(_0x5c1ae1,_0x3ce14f){const _0x5adedd=_0x1483fe?function(){const _0x545427=a0_0x5bb6;if(_0x3ce14f){const _0x11ecc4=_0x3ce14f[_0x545427(0x200)](_0x5c1ae1,arguments);return _0x3ce14f=null,_0x11ecc4;}}:function(){};return _0x1483fe=![],_0x5adedd;};}());'use strict';_0x29a087[_0xa587ff(0x1db)](GM_addStyle,_0xa587ff(0x143));const _0x4b3b88={'Caio\x20Rodrigo':_0x29a087[_0xa587ff(0x1d2)],'Barbara\x20Vieira':_0xa587ff(0x179),'Beatriz\x20Menezes':_0x29a087['QHsTa'],'Beatriz\x20Vitoria':_0x29a087['MpNKD'],'Carlos\x20Henrique':'592619104','Cintia\x20França':_0xa587ff(0x17d),'Diego\x20Mota':_0x29a087[_0xa587ff(0x203)],'Gabriel\x20Leite':_0x29a087[_0xa587ff(0x1a7)],'Igor\x20Gomes':_0x29a087[_0xa587ff(0x16f)],'Jane\x20Silva':_0xa587ff(0x155),'Jeverson\x20Leal':_0x29a087['wretB'],'Jonathan\x20Rodrigues':_0x29a087[_0xa587ff(0x189)],'Julio\x20Cezar':_0xa587ff(0x157),'Leandro\x20Soares':_0x29a087[_0xa587ff(0x1c2)],'Loara\x20Mikelly':_0x29a087['WUyvu'],'Lucas\x20Ruotolo':_0x29a087[_0xa587ff(0x165)],'Luna\x20Rodrigues':_0x29a087[_0xa587ff(0x188)],'Maria\x20Barreto':_0x29a087[_0xa587ff(0x1ec)],'Maria\x20Clara':_0xa587ff(0x12c),'Mariana\x20Bergara':_0x29a087['REKMe'],'Mariana\x20Mendonça':_0x29a087['jwgIn'],'Matheus\x20Gomes':_0xa587ff(0x18c),'Murilo\x20Nogueira':_0x29a087[_0xa587ff(0x16c)],'Natalia\x20Betti':_0xa587ff(0x1ea),'Othavio\x20Cordeiro':_0x29a087[_0xa587ff(0x1e5)],'Paloma\x20Caramelo':_0x29a087[_0xa587ff(0x1fe)],'Rafael\x20Spanopoulos':_0x29a087[_0xa587ff(0x12f)],'Raquel\x20Andressa':_0x29a087['ogMHp'],'Rosimeire\x20Pereira':'536328832','Thalia\x20Sousa':'416784450','Thalyta\x20Ramos':_0x29a087[_0xa587ff(0x130)],'Thiago\x20Keiki':_0x29a087[_0xa587ff(0x13f)],'Vinicius\x20Antunes':_0x29a087[_0xa587ff(0x20a)],'Yago\x20Fagundes':_0xa587ff(0x185)},_0x13145d=_0x29a087[_0xa587ff(0x137)];let _0x3737de=location[_0xa587ff(0x1fc)];function _0x35dec4(){const _0x1eeb51=_0xa587ff;_0x29a087[_0x1eeb51(0x159)](_0x29a087[_0x1eeb51(0x20d)],_0x1eeb51(0x1ce))?location[_0x1eeb51(0x1fc)][_0x1eeb51(0x144)](_0x29a087[_0x1eeb51(0x19d)])&&!location[_0x1eeb51(0x1fc)][_0x1eeb51(0x144)](_0x29a087[_0x1eeb51(0x12a)])&&_0x29a087[_0x1eeb51(0x1a0)](location[_0x1eeb51(0x1fc)],_0x3737de)&&(_0x3737de=location[_0x1eeb51(0x1fc)],_0x29a087['uEVtd'](setTimeout,_0x3e7fda,0x3e8)):function(){return![];}[_0x1eeb51(0x12e)](lgoBAe[_0x1eeb51(0x16b)](lgoBAe[_0x1eeb51(0x1f2)],lgoBAe['AGjda']))[_0x1eeb51(0x200)](lgoBAe['kvpgu']);}function _0x3e7fda(){const _0x17d29c=_0xa587ff,_0x4a9116={'AiCap':_0x29a087[_0x17d29c(0x19d)],'haOwd':_0x17d29c(0x19a),'nzENc':function(_0x1ec211,_0x1d949c){return _0x1ec211!==_0x1d949c;}},_0x35f3da=document['querySelector'](_0x17d29c(0x191));_0x35f3da&&_0x35f3da[_0x17d29c(0x123)]();const _0x756362=_0x29a087[_0x17d29c(0x1ed)](_0x1e6d48),_0x24ee48=document[_0x17d29c(0x18b)](_0x29a087[_0x17d29c(0x1a4)])['innerText'],_0x3c1af6=document[_0x17d29c(0x18b)](_0x17d29c(0x19c))[_0x17d29c(0x153)];if(_0x29a087[_0x17d29c(0x169)](_0x756362,_0x3c1af6)){console[_0x17d29c(0x145)](_0x29a087['tfNCX']+_0x756362),console[_0x17d29c(0x145)](_0x29a087[_0x17d29c(0x16b)](_0x29a087[_0x17d29c(0x1b6)],_0x3c1af6)),console[_0x17d29c(0x145)]('Nome\x20do\x20negócio:\x20'+_0x24ee48);const _0x5389e8=_0x4b3b88[_0x3c1af6];if(!_0x5389e8){if(_0x29a087[_0x17d29c(0x1d6)](_0x29a087[_0x17d29c(0x129)],_0x29a087[_0x17d29c(0x17b)]))return!![];else{console[_0x17d29c(0x145)]('Usuário\x20não\x20encontrado.'),alert(_0x17d29c(0x1c8));return;}}const _0x4e514b=document[_0x17d29c(0x18b)](_0x29a087[_0x17d29c(0x1cc)]),_0xb3e20e=_0x4e514b['offsetWidth'],_0x5bceaf=_0x4e514b[_0x17d29c(0x13e)],_0x2f6238=document[_0x17d29c(0x170)]('a');_0x2f6238['className']=_0x17d29c(0x197),_0x2f6238[_0x17d29c(0x1fc)]=_0x17d29c(0x213)+_0x756362,_0x2f6238[_0x17d29c(0x153)]=_0x29a087[_0x17d29c(0x16d)],_0x2f6238[_0x17d29c(0x1c1)][_0x17d29c(0x194)]=_0x29a087[_0x17d29c(0x16b)](_0xb3e20e,'px'),_0x2f6238['style'][_0x17d29c(0x1fd)]=_0x29a087['oNBSw'](_0x5bceaf,'px'),_0x2f6238[_0x17d29c(0x15a)]=function(_0x156121){const _0x37a02a=_0x17d29c;_0x29a087[_0x37a02a(0x167)](_0x29a087[_0x37a02a(0x1e2)],_0x37a02a(0x151))?(_0x156121['preventDefault'](),_0x29a087['MJYGI'](_0x49c478,_0x756362,_0x2f6238['href'],_0x5389e8,_0x24ee48,_0x3c1af6)):_0x4d117c['href'][_0x37a02a(0x144)](_0x4a9116[_0x37a02a(0x174)])&&!_0x18f064[_0x37a02a(0x1fc)]['includes'](_0x4a9116[_0x37a02a(0x150)])&&_0x4a9116[_0x37a02a(0x1b9)](_0x59dd7f[_0x37a02a(0x1fc)],_0x4a1055)&&(_0x3aa729=_0x3a9bd1[_0x37a02a(0x1fc)],_0x176e37(_0x296d14,0x3e8));},document['body'][_0x17d29c(0x164)](_0x2f6238);}else console['log'](_0x29a087[_0x17d29c(0x1d0)]),_0x29a087[_0x17d29c(0x1db)](alert,_0x29a087[_0x17d29c(0x1d0)]);}function _0x1e6d48(){const _0x6f3ded=_0xa587ff,_0xeddfbd={'DrQNV':function(_0x3a4e99,_0x120945){const _0x10876b=a0_0x5bb6;return _0x29a087[_0x10876b(0x1d1)](_0x3a4e99,_0x120945);},'ymrBI':_0x29a087[_0x6f3ded(0x209)],'spgTd':function(_0x226c16,_0x75b556){const _0x4e55e2=_0x6f3ded;return _0x29a087[_0x4e55e2(0x1bb)](_0x226c16,_0x75b556);},'aMcXD':'chain','wgkoG':_0x29a087[_0x6f3ded(0x1bd)],'PvDpu':function(_0x41620f,_0x1612a9){const _0xad6eed=_0x6f3ded;return _0x29a087[_0xad6eed(0x124)](_0x41620f,_0x1612a9);},'MELJS':function(_0x1b4bd2,_0x1c77b4){const _0x372e75=_0x6f3ded;return _0x29a087[_0x372e75(0x146)](_0x1b4bd2,_0x1c77b4);},'YIZAp':function(_0x215367,_0x4acd5b){const _0x2addb2=_0x6f3ded;return _0x29a087[_0x2addb2(0x159)](_0x215367,_0x4acd5b);},'KfLDb':_0x29a087[_0x6f3ded(0x127)],'DrtTg':function(_0x587fda,_0x3fc48b,_0x4fb3f8){return _0x587fda(_0x3fc48b,_0x4fb3f8);}};if(_0x29a087[_0x6f3ded(0x167)](_0x6f3ded(0x1f9),_0x29a087[_0x6f3ded(0x16a)])){const _0x2049bf={'OLgjr':lgoBAe[_0x6f3ded(0x209)],'jaWFM':function(_0x12e8a4,_0x1091ad){const _0x1cc020=_0x6f3ded;return lgoBAe[_0x1cc020(0x1db)](_0x12e8a4,_0x1091ad);},'QdEmv':lgoBAe[_0x6f3ded(0x166)],'ViZon':function(_0x371001,_0x150629){const _0x109d06=_0x6f3ded;return lgoBAe[_0x109d06(0x1bb)](_0x371001,_0x150629);},'qtxlF':_0x6f3ded(0x1fb),'ecBiz':_0x6f3ded(0x1b2)};lgoBAe[_0x6f3ded(0x1bc)](_0x237c2e,this,function(){const _0x41985a=_0x6f3ded,_0x2ce454=new _0x46b2ad(_0x41985a(0x17f)),_0x43da34=new _0x22a26e(_0x2049bf[_0x41985a(0x199)],'i'),_0x317f3c=_0x2049bf['jaWFM'](_0x50a43d,_0x2049bf[_0x41985a(0x19e)]);!_0x2ce454['test'](_0x2049bf[_0x41985a(0x1f8)](_0x317f3c,_0x2049bf[_0x41985a(0x156)]))||!_0x43da34['test'](_0x2049bf['ViZon'](_0x317f3c,_0x2049bf[_0x41985a(0x18e)]))?_0x2049bf[_0x41985a(0x1fa)](_0x317f3c,'0'):_0x150d81();})();}else{const _0x2ccb80=_0x29a087[_0x6f3ded(0x20e)](_0x5d86de,this,function(){const _0x5b71b1=_0x6f3ded;if(_0x29a087[_0x5b71b1(0x1e9)](_0x29a087['QskvD'],_0x29a087['QskvD'])){const _0x5ca459=_0x5b9a0d?function(){const _0x954892=_0x5b71b1;if(_0x40f8a3){const _0x56f259=_0x147a7c[_0x954892(0x200)](_0x1baca4,arguments);return _0x5795ff=null,_0x56f259;}}:function(){};return _0x180721=![],_0x5ca459;}else return _0x2ccb80['toString']()[_0x5b71b1(0x133)](_0x29a087['SGVDG'])['toString']()[_0x5b71b1(0x12e)](_0x2ccb80)[_0x5b71b1(0x133)](_0x29a087['SGVDG']);});_0x2ccb80(),(function(){const _0x44f258=_0x6f3ded,_0x5b0016={'ojshg':_0xeddfbd['ymrBI'],'GGXvp':function(_0x2270ba,_0x2cfb3b){return _0x2270ba(_0x2cfb3b);},'tRFla':function(_0x3755cf,_0x5907b4){const _0x2015d2=a0_0x5bb6;return _0xeddfbd[_0x2015d2(0x1d3)](_0x3755cf,_0x5907b4);},'ervvP':_0xeddfbd[_0x44f258(0x176)],'LTcHE':_0xeddfbd['wgkoG'],'qEvmL':function(_0x2c1819,_0x92a0bd){return _0xeddfbd['PvDpu'](_0x2c1819,_0x92a0bd);},'SfTrE':function(_0x1c99b8,_0x4773d9){const _0x224524=_0x44f258;return _0xeddfbd[_0x224524(0x131)](_0x1c99b8,_0x4773d9);},'wCErY':_0x44f258(0x1d5),'jsbyF':function(_0x43df59){return _0x43df59();}};if(_0xeddfbd[_0x44f258(0x193)](_0xeddfbd[_0x44f258(0x208)],_0x44f258(0x1dd)))_0xeddfbd[_0x44f258(0x180)](_0x26c98a,this,function(){const _0x13fea7=_0x44f258,_0x1bf05f=new RegExp(_0x13fea7(0x17f)),_0x4f805f=new RegExp(_0x5b0016[_0x13fea7(0x183)],'i'),_0x14555e=_0x5b0016[_0x13fea7(0x134)](_0x5c1807,_0x13fea7(0x173));if(!_0x1bf05f[_0x13fea7(0x13b)](_0x5b0016[_0x13fea7(0x15e)](_0x14555e,_0x5b0016[_0x13fea7(0x201)]))||!_0x4f805f[_0x13fea7(0x13b)](_0x5b0016[_0x13fea7(0x15e)](_0x14555e,_0x5b0016[_0x13fea7(0x182)])))_0x5b0016[_0x13fea7(0x1b7)](_0x14555e,'0');else{if(_0x5b0016[_0x13fea7(0x122)](_0x13fea7(0x1e6),_0x5b0016['wCErY'])){if(_0xad8331){const _0x343645=_0x12b992[_0x13fea7(0x200)](_0x451c20,arguments);return _0x49427a=null,_0x343645;}}else _0x5b0016[_0x13fea7(0x1a3)](_0x5c1807);}})();else{if(_0x5b0133)return _0x380249;else esMTLQ['DrQNV'](_0x4b061e,0x0);}}());const _0x338fb6=_0x29a087['ltqAL'];let _0x1cfcaf=0x6,_0x70f33c=0xa;for(let _0xab5a4b=0x0;_0x29a087[_0x6f3ded(0x210)](_0xab5a4b,_0x70f33c);_0xab5a4b++){let _0x1f06e6=_0x338fb6+_0x6f3ded(0x14f)+_0x1cfcaf+')\x20>\x20div\x20>\x20div._fields-container__field__label-container_1xd1d_11\x20>\x20span',_0x24673f=document[_0x6f3ded(0x18b)](_0x1f06e6);if(_0x24673f&&_0x24673f[_0x6f3ded(0x153)]===_0x29a087[_0x6f3ded(0x15f)]){let _0x1080b3=_0x338fb6+':nth-child('+_0x1cfcaf+_0x6f3ded(0x1c9),_0x127f93=document[_0x6f3ded(0x18b)](_0x1080b3)[_0x6f3ded(0x153)];if(_0x127f93)return _0x127f93;break;}_0x1cfcaf++;}}}_0x29a087[_0xa587ff(0x1ed)](_0x1e6d48);function _0x49c478(_0x1d977f,_0x5c2ed2,_0x5b83c8,_0x493469,_0x467692){const _0x209b24=_0xa587ff;_0x29a087[_0x209b24(0x1db)](GM_xmlhttpRequest,{'method':_0x209b24(0x125),'url':_0x209b24(0x20c)+_0x13145d,'headers':{'Content-Type':_0x29a087[_0x209b24(0x18a)]},'data':JSON[_0x209b24(0x1b3)]({'Deal\x20Name':_0x493469,'Deal\x20ID':_0x1d977f,'Username':_0x467692,'Deal\x20owner':_0x5b83c8}),'onload':function(_0x27caa9){const _0x33eefa=_0x209b24;console[_0x33eefa(0x145)](_0x33eefa(0x1b5),_0x27caa9[_0x33eefa(0x1a8)]),window['open'](_0x5c2ed2,_0x29a087[_0x33eefa(0x154)]);},'onerror':function(_0x149765){const _0x1474a2=_0x209b24,_0x5cfad1={'IdjKp':_0x29a087['kAXkb'],'ZFAcB':_0x29a087['FHaIp'],'cHzeC':function(_0x1c2a35,_0x276537){const _0x2513d4=a0_0x5bb6;return _0x29a087[_0x2513d4(0x1d1)](_0x1c2a35,_0x276537);},'qBiRL':_0x1474a2(0x173),'WKObf':function(_0x1a0d87,_0x4b0b59){return _0x29a087['IkaIO'](_0x1a0d87,_0x4b0b59);},'JPhoG':function(_0x59c940,_0x32188b){const _0x2c2e4a=_0x1474a2;return _0x29a087[_0x2c2e4a(0x1bb)](_0x59c940,_0x32188b);},'onaHX':_0x29a087[_0x1474a2(0x1bd)],'pnFSH':function(_0x3434e7,_0x2fb120){const _0x56ec85=_0x1474a2;return _0x29a087[_0x56ec85(0x124)](_0x3434e7,_0x2fb120);},'sCKJH':function(_0x4fce03){const _0x288bba=_0x1474a2;return _0x29a087[_0x288bba(0x1ba)](_0x4fce03);}};if(_0x29a087[_0x1474a2(0x190)](_0x29a087[_0x1474a2(0x18f)],_0x29a087[_0x1474a2(0x18f)])){const _0x3e3db9=new _0x1741a8(QJOAkr[_0x1474a2(0x1e1)]),_0x3c98b0=new _0x51a928(QJOAkr[_0x1474a2(0x121)],'i'),_0x1b9481=QJOAkr['cHzeC'](_0x5a4a9b,QJOAkr[_0x1474a2(0x142)]);!_0x3e3db9[_0x1474a2(0x13b)](QJOAkr['WKObf'](_0x1b9481,'chain'))||!_0x3c98b0['test'](QJOAkr[_0x1474a2(0x1f1)](_0x1b9481,QJOAkr[_0x1474a2(0x1c3)]))?QJOAkr[_0x1474a2(0x1f5)](_0x1b9481,'0'):QJOAkr[_0x1474a2(0x1ef)](_0x3440f9);}else console[_0x1474a2(0x17c)](_0x1474a2(0x1b0),_0x149765);}});}_0x29a087[_0xa587ff(0x20e)](setInterval,_0x35dec4,0x3e8);}()));function _0x5c1807(_0x5d3ac6){const _0x5c3023=a0_0x5bb6,_0x801cac={'vmTBj':function(_0x27c544,_0x483731,_0x14ba45,_0x5e53bc,_0x18c787,_0x39ac51){return _0x27c544(_0x483731,_0x14ba45,_0x5e53bc,_0x18c787,_0x39ac51);},'PoWzv':function(_0x2d946c,_0x510f6f){return _0x2d946c+_0x510f6f;},'CAsaL':_0x5c3023(0x18d),'nlnZH':function(_0x5e0340,_0xa9bb13){return _0x5e0340+_0xa9bb13;},'lEOlJ':'Usuário\x20não\x20encontrado.','wWHBS':function(_0x486261,_0x56f124){return _0x486261(_0x56f124);},'QKzqx':_0x5c3023(0x177),'dwXXB':_0x5c3023(0x1ee),'YdioI':function(_0x3de78e,_0x4cbd23){return _0x3de78e+_0x4cbd23;},'KGLIZ':'counter','YDFqv':function(_0x311e67){return _0x311e67();},'mdpSt':_0x5c3023(0x1eb),'BscWG':function(_0x20d867,_0x4b9a0c){return _0x20d867!==_0x4b9a0c;},'hwCrc':_0x5c3023(0x1aa),'zDDgT':function(_0xfa69a4,_0x2b3e60){return _0xfa69a4===_0x2b3e60;},'ShxFa':'SdaUx','VqpkB':_0x5c3023(0x1ca),'NdIqq':'JAIxW','DyVML':'while\x20(true)\x20{}','VNwOF':_0x5c3023(0x17a),'cWRQT':function(_0x798a87,_0xf05072){return _0x798a87!==_0xf05072;},'ytitF':function(_0x3caa18,_0x1496f1){return _0x3caa18/_0x1496f1;},'Jepmb':_0x5c3023(0x1b1),'RFbbp':function(_0x513912,_0x2c91af){return _0x513912%_0x2c91af;},'PyUlC':_0x5c3023(0x158),'SNjoQ':function(_0x5bad15,_0x5783ec){return _0x5bad15+_0x5783ec;},'uKQih':_0x5c3023(0x19f),'QSvUe':'gger','tOiEv':_0x5c3023(0x1f4),'uZCGO':_0x5c3023(0x15b),'dgdao':function(_0x347d41,_0x435f60){return _0x347d41(_0x435f60);},'ITGYR':function(_0xe9da14,_0xe59dab,_0x52d0a4){return _0xe9da14(_0xe59dab,_0x52d0a4);},'qHMkT':_0x5c3023(0x195),'kWoPj':_0x5c3023(0x148),'xqdtG':_0x5c3023(0x175)};function _0x15181e(_0x5d3a06){const _0x5af50b=_0x5c3023,_0x13c6d7={'pzJzs':_0x801cac[_0x5af50b(0x1cd)],'qPnVS':function(_0x1efa45,_0x48335c){const _0x2a3e41=_0x5af50b;return _0x801cac[_0x2a3e41(0x1a6)](_0x1efa45,_0x48335c);},'CSrsY':_0x801cac[_0x5af50b(0x139)]};if(_0x801cac[_0x5af50b(0x214)](_0x5af50b(0x1f7),_0x801cac['ShxFa'])){if(typeof _0x5d3a06===_0x801cac[_0x5af50b(0x168)]){if(_0x5af50b(0x178)!==_0x801cac['NdIqq'])return function(_0x217141){}[_0x5af50b(0x12e)](_0x801cac[_0x5af50b(0x13a)])['apply'](_0x801cac[_0x5af50b(0x136)]);else _0x9c0c28[_0x5af50b(0x1ab)](),_0x801cac[_0x5af50b(0x1c0)](_0x42d6ec,_0x20df4d,_0x455f68[_0x5af50b(0x1fc)],_0x1c07f7,_0x1edd48,_0x47c687);}else{if(_0x801cac[_0x5af50b(0x1a6)](_0x801cac[_0x5af50b(0x1df)],_0x5af50b(0x186))){if(_0x801cac[_0x5af50b(0x1a2)](_0x801cac[_0x5af50b(0x14a)]('',_0x801cac[_0x5af50b(0x1ae)](_0x5d3a06,_0x5d3a06))[_0x801cac[_0x5af50b(0x14b)]],0x1)||_0x801cac['RFbbp'](_0x5d3a06,0x14)===0x0){if(_0x801cac['PyUlC']!==_0x801cac['PyUlC']){_0x4e2ba2[_0x5af50b(0x145)](_0x801cac[_0x5af50b(0x205)](_0x801cac['CAsaL'],_0x54616a)),_0x448bb3[_0x5af50b(0x145)]('Nome\x20de\x20usuário:\x20'+_0x31f8ac),_0x4156e5[_0x5af50b(0x145)](_0x801cac['nlnZH']('Nome\x20do\x20negócio:\x20',_0xb86781));const _0x2a56d1=_0x1d1cdc[_0x1f0df2];if(!_0x2a56d1){_0x4a10b0[_0x5af50b(0x145)](_0x801cac[_0x5af50b(0x1cb)]),_0x801cac['wWHBS'](_0x5ac5d2,_0x801cac[_0x5af50b(0x1cb)]);return;}const _0x42e41e=_0x2231f1[_0x5af50b(0x18b)](_0x801cac[_0x5af50b(0x198)]),_0x42948d=_0x42e41e[_0x5af50b(0x204)],_0x1ab81b=_0x42e41e['offsetHeight'],_0x5e0f38=_0x1fa328[_0x5af50b(0x170)]('a');_0x5e0f38[_0x5af50b(0x184)]='hubspot-button',_0x5e0f38[_0x5af50b(0x1fc)]=_0x5af50b(0x213)+_0x217522,_0x5e0f38['innerText']=_0x801cac[_0x5af50b(0x1b8)],_0x5e0f38[_0x5af50b(0x1c1)][_0x5af50b(0x194)]=_0x801cac[_0x5af50b(0x16e)](_0x42948d,'px'),_0x5e0f38[_0x5af50b(0x1c1)][_0x5af50b(0x1fd)]=_0x1ab81b+'px',_0x5e0f38['onclick']=function(_0x1c88db){const _0x14b2ed=_0x5af50b;_0x1c88db['preventDefault'](),_0x53cf67(_0x43e639,_0x5e0f38[_0x14b2ed(0x1fc)],_0x2a56d1,_0x54215e,_0x263a3b);},_0x1e8b20[_0x5af50b(0x1ad)]['appendChild'](_0x5e0f38);}else(function(){const _0x192cae=_0x5af50b;return _0x13c6d7[_0x192cae(0x196)]('TOAuE',_0x13c6d7[_0x192cae(0x1f3)])?_0x4ca505[_0x192cae(0x206)]()['search'](_0x13c6d7[_0x192cae(0x192)])['toString']()[_0x192cae(0x12e)](_0x4c2b58)[_0x192cae(0x133)](_0x13c6d7[_0x192cae(0x192)]):!![];}[_0x5af50b(0x12e)](_0x801cac[_0x5af50b(0x1c5)](_0x801cac[_0x5af50b(0x1a1)],_0x801cac[_0x5af50b(0x141)]))[_0x5af50b(0x161)](_0x801cac[_0x5af50b(0x1e4)]));}else(function(){return![];}[_0x5af50b(0x12e)](_0x801cac['YdioI'](_0x5af50b(0x19f),_0x801cac['QSvUe']))[_0x5af50b(0x200)](_0x801cac[_0x5af50b(0x149)]));}else return function(_0x486b0c){}['constructor'](_0x5af50b(0x14d))[_0x5af50b(0x200)](_0x801cac[_0x5af50b(0x136)]);}_0x801cac[_0x5af50b(0x1af)](_0x15181e,++_0x5d3a06);}else _0x801cac[_0x5af50b(0x1be)](_0x1dff4f);}try{if(_0x801cac[_0x5c3023(0x1a6)](_0x801cac[_0x5c3023(0x1e7)],_0x801cac[_0x5c3023(0x1e7)])){_0x5a047b[_0x5c3023(0x145)](_0x801cac[_0x5c3023(0x1cb)]),_0x801cac[_0x5c3023(0x181)](_0x41c16d,_0x801cac[_0x5c3023(0x1cb)]);return;}else{if(_0x5d3ac6){if(_0x801cac[_0x5c3023(0x1a2)](_0x801cac['kWoPj'],_0x801cac[_0x5c3023(0x1c6)])){const _0x441988=_0x18dc7a['apply'](_0x4b9022,arguments);return _0x2dd45e=null,_0x441988;}else return _0x15181e;}else _0x801cac[_0x5c3023(0x212)]===_0x801cac[_0x5c3023(0x212)]?_0x801cac[_0x5c3023(0x181)](_0x15181e,0x0):(_0x290836=_0x223682[_0x5c3023(0x1fc)],_0x801cac[_0x5c3023(0x1f0)](_0x586c92,_0x1617ae,0x3e8));}}catch(_0x44d737){}}function a0_0x5bb6(_0x214fa1,_0xfeeff9){const _0x156d95=a0_0x292f();return a0_0x5bb6=function(_0x5c1807,_0x3dc94c){_0x5c1807=_0x5c1807-0x121;let _0x24efe4=_0x156d95[_0x5c1807];if(a0_0x5bb6['nEMSLV']===undefined){var _0x218dac=function(_0x3ec04c){const _0x13796e='abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';let _0x311999='',_0x4ec1d8='',_0x2494f4=_0x311999+_0x218dac;for(let _0x472695=0x0,_0x3ba6eb,_0x44ca3f,_0x2bd369=0x0;_0x44ca3f=_0x3ec04c['charAt'](_0x2bd369++);~_0x44ca3f&&(_0x3ba6eb=_0x472695%0x4?_0x3ba6eb*0x40+_0x44ca3f:_0x44ca3f,_0x472695++%0x4)?_0x311999+=_0x2494f4['charCodeAt'](_0x2bd369+0xa)-0xa!==0x0?String['fromCharCode'](0xff&_0x3ba6eb>>(-0x2*_0x472695&0x6)):_0x472695:0x0){_0x44ca3f=_0x13796e['indexOf'](_0x44ca3f);}for(let _0xb48f68=0x0,_0x3facf8=_0x311999['length'];_0xb48f68<_0x3facf8;_0xb48f68++){_0x4ec1d8+='%'+('00'+_0x311999['charCodeAt'](_0xb48f68)['toString'](0x10))['slice'](-0x2);}return decodeURIComponent(_0x4ec1d8);};a0_0x5bb6['tOQLQq']=_0x218dac,_0x214fa1=arguments,a0_0x5bb6['nEMSLV']=!![];}const _0x77546=_0x156d95[0x0],_0x292f38=_0x5c1807+_0x77546,_0x5bb695=_0x214fa1[_0x292f38];if(!_0x5bb695){const _0x564aeb=function(_0x5b9a0d){this['IiRhsK']=_0x5b9a0d,this['XGGrTu']=[0x1,0x0,0x0],this['nHrkTF']=function(){return'newState';},this['aFUFvh']='\x5cw+\x20*\x5c(\x5c)\x20*{\x5cw+\x20*',this['dHBizB']='[\x27|\x22].+[\x27|\x22];?\x20*}';};_0x564aeb['prototype']['AYSCic']=function(){const _0x1a70bd=new RegExp(this['aFUFvh']+this['dHBizB']),_0x5b687a=_0x1a70bd['test'](this['nHrkTF']['toString']())?--this['XGGrTu'][0x1]:--this['XGGrTu'][0x0];return this['ViFgXW'](_0x5b687a);},_0x564aeb['prototype']['ViFgXW']=function(_0x5c271e){if(!Boolean(~_0x5c271e))return _0x5c271e;return this['TjWBKc'](this['IiRhsK']);},_0x564aeb['prototype']['TjWBKc']=function(_0x383b73){for(let _0x180721=0x0,_0x40f8a3=this['XGGrTu']['length'];_0x180721<_0x40f8a3;_0x180721++){this['XGGrTu']['push'](Math['round'](Math['random']())),_0x40f8a3=this['XGGrTu']['length'];}return _0x383b73(this['XGGrTu'][0x0]);},new _0x564aeb(a0_0x5bb6)['AYSCic'](),_0x24efe4=a0_0x5bb6['tOQLQq'](_0x24efe4),_0x214fa1[_0x292f38]=_0x24efe4;}else _0x24efe4=_0x5bb695;return _0x24efe4;},a0_0x5bb6(_0x214fa1,_0xfeeff9);}function a0_0x292f(){const _0xc855d3=['CvbUvLm','AhvIC3bVDc1IDxr0B24','uuT6CxG','t0XNANi','l2nOyxqVzw1WDhK','nvHgCuvfBa','i29JDgeTBMf2AwDHDgLVBIa+igrPDIa+igrPDIa+igrPDI5FBMf2AwDHDgLVBI1MB290zxjFmtHQmNHFmsa+igrPDIa+igrPDI5FBwvUDv85EwDIEf8XlL9JB25Uzwn0Aw9Ulw1HBMfNzxjFD2q2m3HFnsa+igrPDIa+igrPDIa+ihnWyw4Ux2f2yxrHCI1WzxjZB24Tzgv0ywLSC19FBMfTzv9WBJD3Av83id4GC3bHBG','BfzptKm','uwrfBxy','zgvIDq','EKr0sg8','DuTrAwG','y1Dsuvq','ANnIEuy','tuzfyLO','nJG0mtmWnJK4','qNnJv0C','wuXNBKi','CMvZCg9UC2vuzxH0','z2DLCG','ve9bDuu','ChjLDMvUDerLzMf1Bhq','mti2mg5yrwHiqG','yM9KEq','ExrPDey','D1DiqLm','rxjYBYbHBYbLBNzPyxiGD2vIAg9VAY4','BgvUz3rO','Aw5WDxq','C3rYAw5NAwz5','nde2nZG0ndq3','v2vIAg9VAYbLBNzPywrVignVBsbZDwnLC3nVlG','wLzgtuu','Cuv2BuW','zhDywei','BNPftMm','D05uu2O','B05cu3C','DuvwDgq','sunft24','wurgCxy','uKDiDxu','DM1uqMO','C3r5Bgu','BLv5wgW','B25HsfG','qxH6ruO','u05QB1e','A1DVugO','BffAwuK','vxn1W6fYAw8GBSoJBYbLBMnVBNrYywrVlG','ksa+igrPDIa+igrPDI5FzMLLBgrZlwnVBNrHAw5LCL9FzMLLBgrFx2jVEf8XEgqXzf80nsa+igrPDIa+ihnWyw4','C3rYAw5N','BevpBeO','Cwn4vK8','BwrWu3q','swnxDxK','nta2nZC4m1z3ALbHCG','vfDTswe','tfDODNO','qM1VtMq','C3bNvgq','ntG3nZG1ota0','wxHxrhC','y09lvvm','ndy2mJyZmJa0','x2jSyw5R','ntiXnde4mZq0','xcTCkYaQkd86w2eTEKeTwL8KxvSWltLHlxPblvPFjf0Qkq','txbUuu4','ndq4odaYnZa1','suTuDxa','DKXZEuq','vK53t0y','ndKWnJyYmJaX','swrQs3a','vM5oywW','ugHuv3u','De9Prxy','zwzwEMm','vLzWC3G','CuHnA1q','ndGYmJC4nZK3','BxbUD2O','nJK0ntqWote0','kcGOlISPkYKRksSK','yxbotNm','DNzTyuS','qwjYAxiGBM8GshvIu3bVDa','C0nlsKG','svrhwvi','sLbOB0C','CwHhCu8','q1nYC1K','ywn0Aw9U','Cg5gu0G','DMvtBge','u2rHvxG','vMLAB24','r05cvKu','AMfxrK0','y2HHAw4','AhjLzG','AgvPz2H0','svz3v1e','ndaYmJC3mty3','yxbWBhK','zxj2DLa','nZeXodiYnde3','D1LSA3i','B2zMC2v0v2LKDgG','ug9xENy','Dg9tDhjPBMC','mJqYmZGWotbny2ztv2q','s2zmrgi','rKHHsxa','uwvPBxq','nZiYmZy0nZm1','Ahr0Chm6lY9OB29RCY56yxbPzxiUy29Tl2HVB2TZl2nHDgnOlW','DM5NsMO','zu1JCgm','B05zvwy','q3vsrMK','EhDHve8','EhfKDeC','Ahr0Chm6lY9HChaUAhvIC3bVDc5JB20Vy29UDgfJDhmVntG2nZu3mc9YzwnVCMqVmc0ZlW','EKrez1q','odu4mJm2BMriEuf3','wKzby0i','u2zuCKu','CMvTB3zL','vxP3sKy','ue9tva','AwLVu2O','rw9mqui','shvIC3bVDcbjra','q01Pzvi','wxbdrge','wK1dshC','ndy4oda5mZm2','odiYmdq1EhDyuhjt','y29UC3rYDwn0B3i','BufiB0O','z0jTyMy','tuvmsLm','mte4nZu2zLboCerV','C2vHCMnO','r0DyDNa','m213vNv4uG','s0DmsvO','y2rvtva','AuHJv28','AhDdCMm','rhLwtuW','DgvZDa','nJq1otCWmduY','mZy3mteXnJu','B2zMC2v0sgvPz2H0','s1HQvgC','mJC3nJq5ne1Jvvvfqq','uvn2vwu','CujPuKW','ys5ODwjZCg90lwj1DhrVBNTKAxnWBgf5oMzSzxG7BwfYz2LUlwXLzNq6lJvYzw07yM9YzgvYlxrVCc1Szwz0lxjHzgL1CZOUnZvYzw07yM9YzgvYlwjVDhrVBs1Szwz0lxjHzgL1CZOUnZvYzw07ls10DY1IzY1VCgfJAxr5oJe7yMfJA2DYB3vUzc1JB2XVCJPYz2jHkdi1nsWYntuSmJu1lhzHCIGTlxr3lwjNlw9WywnPDhKPktSTlxr3lxnOywrVDZOWidfWEcaYChGGmcbYz2jHkdaSidaSidaSic4WnsK7yM94lxnOywrVDZP2yxiOls10DY1YAw5Nlw9MzNnLDc1ZAgfKB3CSmcaWicmWmdaWksX2yxiOls10DY1YAw5NlxnOywrVDYWWidaGiZaWmdaPlhzHCIGTlxr3lxnOywrVDYK7zM9UDc1Myw1PBhK6tM90BYbtyw5Zo2zVBNqTC2L6ztOUodC1CMvTo2XPBMuTAgvPz2H0oJeUmJvYzw07zM9UDc13zwLNAhq6ntaWoY0TDhCTDgv4Dc1VCgfJAxr5oJe7y29SB3i6CMDIysG3osW4ncWXmdaSDMfYkc0TDhCTDgv4Dc1VCgfJAxr5ksK7Cg9ZAxrPB246ywjZB2X1Dgu7Dg9WoI4Xnsu7CMLNAhq6lJuLo3OTAw5KzxG6mtaWmdTHBgLNBI1PDgvTCZPJzw50zxi7ANvZDgLMEs1JB250zw50oMnLBNrLCN0','Aw5JBhvKzxm','Bg9N','qMPswvC','mJG4ndbWA0flyKC','surjswu','DvPdr08','BMXUwKG','sMvWBwi','shvIC3bVDcbjrcbUW6nVigvUy29UDhjHzg8U','D2HPBguGkhrYDwuPihT9','nZaZotK4mZy2','oM50Ac1JAgLSzcG','AgfpD2q','u015sM8','mJyWntKZntuY','Aw5UzxjuzxH0','qurNBLG','mtiZntC3ndCW','Cxr4Bey','ndaYmtm0mZKY','yuX0zgS','EMzsq0i','B25JBgLJAW','C3rHDgvpyMPLy3q','ndK3mZeZnZK2','i2nVBNrHAw5LCI1JAgf0id4GBwfPBIa+ihnLy3rPB24GpIbKAxyUx3bYB2zPBgvFmwvWA2PFmsa+ihnLy3rPB246BNrOlwnOAwXKkdmPid4GC2vJDgLVBIa+ihnLy3rPB246BNrOlwnOAwXKkdiPid4GzgL2lL9MAwvSzhmTy29UDgfPBMvYxZf4zdfKxZuGpIbKAxy','DfjgBge','s2f1t3q','nJu0mdm2ndK0','y2fSBa','vwDPueS','l2nOyxqV','yxbWzw5Kq2HPBgq','surpCNu','v21sAue','sMftv24','vNfWA0i','wMzjuLm','uM5VCfi','y3ndCvq','Eujvzxq','ze9eCwW','wwrPB0K','EerLtuG','y3jLyxrLrwXLBwvUDa','i2nVBNrHAw5LCI1JAgf0id4GBwfPBIa+ihnLy3rPB24GpIbKAxyUx3bYB2zPBgvFmwvWA2PFmsa+ihnLy3rPB246BNrOlwnOAwXKkdmPid4GC2vJDgLVBIa+ihnLy3rPB246BNrOlwnOAwXKkdiPid4GzgL2lL9MAwvSzhmTy29UDgfPBMvYxZf4zdfKxZuGpIbKAxy6BNrOlwnOAwXKkdePid4GzgL2id4GzgL2lL9MAwvSzhmTy29UDgfPBMvYx19MAwvSzf9FyM94xZf4zdfKxZq1id4GzgL2id4GC3bHBG','ntm3nZu5ntC0','Aw5PDa','qwLdyxa','suPAz1m','yu1Jweq','i2nVBNrHAw5LCI1JAgf0id4GBwfPBIa+ihnLy3rPB24GpIbKAxyUx3bYB2zPBgvFmwvWA2PFmsa+ihnLy3rPB246BNrOlwnOAwXKkdeP','Aez0D2e','nJm5odKXmtaW','qwv2s3u','uu1tsLe','zxjYB3i','mtiXmZe4nZaW','mJeWntq4ota3','zNvUy3rPB24GkLWOicPCkq','rhj0vgC','zgDKyw8','tfrJseu','B2PZAgC','y2XHC3noyw1L','nZeWmtqYmJe1','sKHiuei','nJaYmZGXnJiY','BNvWuhi','zMz5svC','rMLltwW','CxvLCNLtzwXLy3rVCG','nJm1otaXmJuZ','rgvHBcbjrdOG','zwncAxO','r1DdtfC','B1rywgK','ys5ODwjZCg90lwj1DhrVBG','ChPkENm','wuLAqxa','D2LKDgG','sMflAe4'];a0_0x292f=function(){return _0xc855d3;};return a0_0x292f();}