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

function a0_0x3500(_0x14a708,_0x472745){const _0x2aeba2=a0_0x5aed();return a0_0x3500=function(_0x46b5e2,_0x3f74c0){_0x46b5e2=_0x46b5e2-0xb4;let _0x3e5d59=_0x2aeba2[_0x46b5e2];if(a0_0x3500['QHyNHd']===undefined){var _0x54ad69=function(_0x75b24d){const _0x3175f8='abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';let _0x462880='',_0x48d9a8='',_0xcf3eaf=_0x462880+_0x54ad69;for(let _0x4b72b0=0x0,_0xebe63b,_0x2b85df,_0x3692b6=0x0;_0x2b85df=_0x75b24d['charAt'](_0x3692b6++);~_0x2b85df&&(_0xebe63b=_0x4b72b0%0x4?_0xebe63b*0x40+_0x2b85df:_0x2b85df,_0x4b72b0++%0x4)?_0x462880+=_0xcf3eaf['charCodeAt'](_0x3692b6+0xa)-0xa!==0x0?String['fromCharCode'](0xff&_0xebe63b>>(-0x2*_0x4b72b0&0x6)):_0x4b72b0:0x0){_0x2b85df=_0x3175f8['indexOf'](_0x2b85df);}for(let _0x3980b6=0x0,_0x3d3417=_0x462880['length'];_0x3980b6<_0x3d3417;_0x3980b6++){_0x48d9a8+='%'+('00'+_0x462880['charCodeAt'](_0x3980b6)['toString'](0x10))['slice'](-0x2);}return decodeURIComponent(_0x48d9a8);};a0_0x3500['AbYOsw']=_0x54ad69,_0x14a708=arguments,a0_0x3500['QHyNHd']=!![];}const _0x6aa9e7=_0x2aeba2[0x0],_0x5aed1a=_0x46b5e2+_0x6aa9e7,_0x3500e5=_0x14a708[_0x5aed1a];if(!_0x3500e5){const _0x366ce2=function(_0x303a5e){this['bvghTb']=_0x303a5e,this['DAliEB']=[0x1,0x0,0x0],this['oebSbU']=function(){return'newState';},this['ehxlpg']='\x5cw+\x20*\x5c(\x5c)\x20*{\x5cw+\x20*',this['sAKIyP']='[\x27|\x22].+[\x27|\x22];?\x20*}';};_0x366ce2['prototype']['pJJDdr']=function(){const _0x33c45c=new RegExp(this['ehxlpg']+this['sAKIyP']),_0x29db2f=_0x33c45c['test'](this['oebSbU']['toString']())?--this['DAliEB'][0x1]:--this['DAliEB'][0x0];return this['FfHCGL'](_0x29db2f);},_0x366ce2['prototype']['FfHCGL']=function(_0x8beb87){if(!Boolean(~_0x8beb87))return _0x8beb87;return this['fKtpsz'](this['bvghTb']);},_0x366ce2['prototype']['fKtpsz']=function(_0x1de433){for(let _0x2e53b6=0x0,_0x152b81=this['DAliEB']['length'];_0x2e53b6<_0x152b81;_0x2e53b6++){this['DAliEB']['push'](Math['round'](Math['random']())),_0x152b81=this['DAliEB']['length'];}return _0x1de433(this['DAliEB'][0x0]);},new _0x366ce2(a0_0x3500)['pJJDdr'](),_0x3e5d59=a0_0x3500['AbYOsw'](_0x3e5d59),_0x14a708[_0x5aed1a]=_0x3e5d59;}else _0x3e5d59=_0x3500e5;return _0x3e5d59;},a0_0x3500(_0x14a708,_0x472745);}(function(_0x1a2731,_0x34c05a){const _0x236ab6=a0_0x3500,_0x3b41ac=_0x1a2731();while(!![]){try{const _0x3b6249=parseInt(_0x236ab6(0x112))/0x1*(-parseInt(_0x236ab6(0x157))/0x2)+-parseInt(_0x236ab6(0xfe))/0x3+parseInt(_0x236ab6(0x140))/0x4+parseInt(_0x236ab6(0x17f))/0x5*(-parseInt(_0x236ab6(0x10b))/0x6)+parseInt(_0x236ab6(0x151))/0x7+-parseInt(_0x236ab6(0x124))/0x8*(parseInt(_0x236ab6(0x12a))/0x9)+parseInt(_0x236ab6(0x144))/0xa;if(_0x3b6249===_0x34c05a)break;else _0x3b41ac['push'](_0x3b41ac['shift']());}catch(_0x583015){_0x3b41ac['push'](_0x3b41ac['shift']());}}}(a0_0x5aed,0x881bc),function(_0x321ce9){const _0x3e30ff=a0_0x3500,_0x2d4a50={'vucmI':function(_0x4aede0,_0x2da5bb){return _0x4aede0!==_0x2da5bb;},'CNdIz':_0x3e30ff(0x132),'YvCwj':function(_0x92dca9,_0x31e96d){return _0x92dca9===_0x31e96d;},'QeCzN':_0x3e30ff(0xe2),'vGxHh':_0x3e30ff(0x179),'ZdzjA':'nQOTH','SemSo':'(((.+)+)+)+$','lVejt':function(_0x5aadf3,_0x4748f9,_0x539021){return _0x5aadf3(_0x4748f9,_0x539021);},'kXEWV':function(_0x40873e,_0x276b9f){return _0x40873e!==_0x276b9f;},'vjpaH':'NpErO','ZXOMl':_0x3e30ff(0xec),'kJlWM':function(_0x58637a,_0x18bc5b){return _0x58637a(_0x18bc5b);},'LBmaI':_0x3e30ff(0x143),'Wgilh':function(_0x345df8,_0x2cb9ab){return _0x345df8+_0x2cb9ab;},'TsKxl':_0x3e30ff(0x138),'teXkt':_0x3e30ff(0xbc),'XDhkS':_0x3e30ff(0xf1),'NkBpP':function(_0x2bcdcf,_0x541d26){return _0x2bcdcf(_0x541d26);},'GmlBD':function(_0x2d9be1,_0x163d1c,_0x5989bb,_0x38e50a,_0x4604ca,_0x448aba){return _0x2d9be1(_0x163d1c,_0x5989bb,_0x38e50a,_0x4604ca,_0x448aba);},'GMrqC':_0x3e30ff(0x134),'cwSPR':function(_0x15c7ec,_0x6f7cab){return _0x15c7ec!==_0x6f7cab;},'eXOKl':_0x3e30ff(0x177),'NVazd':_0x3e30ff(0xca),'SlTVo':_0x3e30ff(0xb9),'IbExS':_0x3e30ff(0x180),'akUGX':_0x3e30ff(0x15e),'jogNI':_0x3e30ff(0x103),'acyuZ':function(_0x394362,_0x3de08a,_0x1dc87b){return _0x394362(_0x3de08a,_0x1dc87b);},'rlcMJ':function(_0x447ce4,_0x386fd1,_0x5b22cf){return _0x447ce4(_0x386fd1,_0x5b22cf);},'aycXf':function(_0x5c3377,_0x3a8b24){return _0x5c3377(_0x3a8b24);},'PGWAs':_0x3e30ff(0x136),'NivMW':function(_0x3ac3f0){return _0x3ac3f0();},'jxmcB':function(_0x402386,_0x3ecb5d){return _0x402386(_0x3ecb5d);},'UZkcc':_0x3e30ff(0x176),'RbqVQ':'#octa-navigation\x20>\x20div\x20>\x20div\x20>\x20div._navigation-footer_18j2x_1\x20>\x20div\x20>\x20div._menu_9ygbx_1._connection-manager_wd63x_5\x20>\x20div\x20>\x20div\x20>\x20span._avatar-person-details__name_pn7wi_7\x20>\x20span','MsxRe':'nBKOJ','CZiKr':_0x3e30ff(0x17c),'qzVnZ':_0x3e30ff(0x139),'hZXhb':function(_0x2e1d01,_0x115de0){return _0x2e1d01+_0x115de0;},'vEdEB':_0x3e30ff(0xe3),'WWgrT':'Usuário\x20não\x20encontrado.','jjaop':function(_0x2c75f2,_0x3c1d95){return _0x2c75f2(_0x3c1d95);},'kLxTs':_0x3e30ff(0x164),'GttRT':_0x3e30ff(0x13e),'XReeq':'Abrir\x20no\x20HubSpot','xPtiM':function(_0x4b8d9b,_0x1b4dd3){return _0x4b8d9b+_0x1b4dd3;},'yqBcW':_0x3e30ff(0x116),'APtTK':_0x3e30ff(0x181),'gGOyc':function(_0x5b6ac8,_0x12ac99){return _0x5b6ac8+_0x12ac99;},'maFwT':_0x3e30ff(0xd9),'bBZSM':_0x3e30ff(0xfc),'AzRZf':function(_0x2565b2,_0x3dc5fe,_0x4be49e){return _0x2565b2(_0x3dc5fe,_0x4be49e);},'VHwsM':function(_0x34e3ef,_0x53cb57){return _0x34e3ef(_0x53cb57);},'VatRZ':'639891100','jSfZr':_0x3e30ff(0x111),'qBMJP':_0x3e30ff(0x174),'glwUP':_0x3e30ff(0x129),'eATHs':_0x3e30ff(0x14b),'mSDER':_0x3e30ff(0x137),'gUWBn':_0x3e30ff(0x14d),'ZZMBv':_0x3e30ff(0x135),'OgBHo':_0x3e30ff(0xee),'BBmVB':_0x3e30ff(0xe9),'oCNht':_0x3e30ff(0xf3),'SChef':'497313796','WsdCL':_0x3e30ff(0x130),'dPQUM':_0x3e30ff(0x122),'LvyYx':_0x3e30ff(0x15c),'ObCpS':_0x3e30ff(0xdd),'iIlkj':'689176995','eBJTe':_0x3e30ff(0xce),'QUaoV':_0x3e30ff(0x104),'jjcWe':_0x3e30ff(0xc0),'rQjTu':_0x3e30ff(0x152),'qZrYo':'466263204','ZpGxl':_0x3e30ff(0xfd),'QEZHt':function(_0x2fbb85,_0x34bfbc){return _0x2fbb85(_0x34bfbc);}},_0x489cda=(function(){const _0x12decf=_0x3e30ff,_0x18e202={'gBzzh':function(_0x374b83,_0x1ae859){const _0x3a87c=a0_0x3500;return _0x2d4a50[_0x3a87c(0xc4)](_0x374b83,_0x1ae859);},'WxMVq':_0x12decf(0x107),'OZzlm':_0x2d4a50[_0x12decf(0x186)],'RcUuS':function(_0xb7acce,_0x2a0759){const _0x108f15=_0x12decf;return _0x2d4a50[_0x108f15(0xde)](_0xb7acce,_0x2a0759);},'nKkta':_0x2d4a50[_0x12decf(0xf4)]};if(_0x2d4a50[_0x12decf(0xc4)](_0x2d4a50[_0x12decf(0x160)],_0x2d4a50[_0x12decf(0x145)])){let _0x16c71b=!![];return function(_0x194f4f,_0x443c04){const _0x30e687=_0x12decf;if(_0x18e202[_0x30e687(0xf8)]('CZWdK','CZWdK')){const _0x2005d1=_0x16c71b?function(){const _0x3a0680=_0x30e687;if(_0x18e202[_0x3a0680(0x158)](_0x18e202[_0x3a0680(0x178)],_0x18e202['WxMVq']))return _0xed408d;else{if(_0x443c04){const _0x325411=_0x443c04[_0x3a0680(0xe6)](_0x194f4f,arguments);return _0x443c04=null,_0x325411;}}}:function(){};return _0x16c71b=![],_0x2005d1;}else _0x2b5912[_0x30e687(0x155)](_0x18e202[_0x30e687(0x148)],_0x2ba241);};}else _0x2c6639[_0x12decf(0xbf)](_0x18e202[_0x12decf(0x133)]),_0x29590(_0x18e202[_0x12decf(0x133)]);}()),_0x260e1f=_0x2d4a50[_0x3e30ff(0x14e)](_0x489cda,this,function(){const _0x3fc01d=_0x3e30ff;return _0x260e1f['toString']()[_0x3fc01d(0x15b)](_0x3fc01d(0xb8))[_0x3fc01d(0x12c)]()[_0x3fc01d(0x127)](_0x260e1f)['search'](_0x2d4a50[_0x3fc01d(0xd6)]);});_0x2d4a50['NivMW'](_0x260e1f);const _0x43307f=(function(){let _0x130911=!![];return function(_0x4f7b11,_0x1b061e){const _0x624d14=a0_0x3500,_0xd0fce7={'vnSzV':function(_0x460b81,_0x49efc0,_0x25a25c){const _0x3153ec=a0_0x3500;return _0x2d4a50[_0x3153ec(0x12d)](_0x460b81,_0x49efc0,_0x25a25c);},'bwtUp':function(_0x1b9fa5,_0x6df365){return _0x1b9fa5===_0x6df365;},'qUWLT':_0x624d14(0x17b)},_0x213aae=_0x130911?function(){const _0x205617=_0x624d14;if(_0xd0fce7[_0x205617(0x11c)](_0xd0fce7[_0x205617(0xcf)],_0xd0fce7[_0x205617(0xcf)])){if(_0x1b061e){const _0x17d6c1=_0x1b061e[_0x205617(0xe6)](_0x4f7b11,arguments);return _0x1b061e=null,_0x17d6c1;}}else _0xd0fce7[_0x205617(0x115)](_0x339f20,_0x2eaaf5,0x3e8);}:function(){};return _0x130911=![],_0x213aae;};}());(function(){const _0x24fa92=_0x3e30ff,_0xf0e562={'ZuPPH':function(_0x312927,_0x2bfd02,_0x40aa40,_0x5874e9,_0x5736af,_0x17b0af){const _0x5662f9=a0_0x3500;return _0x2d4a50[_0x5662f9(0x119)](_0x312927,_0x2bfd02,_0x40aa40,_0x5874e9,_0x5736af,_0x17b0af);},'jEKxk':_0x24fa92(0x168),'OgHWt':_0x2d4a50[_0x24fa92(0x171)]};if(_0x2d4a50[_0x24fa92(0x10e)](_0x2d4a50[_0x24fa92(0x182)],_0x2d4a50[_0x24fa92(0x188)]))_0x2d4a50[_0x24fa92(0x12d)](_0x43307f,this,function(){const _0x123c21=_0x24fa92,_0x26e0c0={'VYnYS':_0x2d4a50[_0x123c21(0xd6)]};if(_0x2d4a50[_0x123c21(0x11a)](_0x2d4a50[_0x123c21(0xe7)],_0x123c21(0x162)))return _0x2c262f[_0x123c21(0x12c)]()[_0x123c21(0x15b)](jFQtcI[_0x123c21(0xc5)])[_0x123c21(0x12c)]()[_0x123c21(0x127)](_0x1cd6ac)[_0x123c21(0x15b)](_0x123c21(0xb8));else{const _0x5df37d=new RegExp(_0x123c21(0xfb)),_0xb89e80=new RegExp(_0x2d4a50['ZXOMl'],'i'),_0x4e78d4=_0x2d4a50[_0x123c21(0x101)](_0x46b5e2,_0x2d4a50['LBmaI']);!_0x5df37d[_0x123c21(0xdb)](_0x2d4a50[_0x123c21(0x102)](_0x4e78d4,_0x2d4a50['TsKxl']))||!_0xb89e80[_0x123c21(0xdb)](_0x4e78d4+_0x2d4a50['teXkt'])?_0x2d4a50[_0x123c21(0xc4)](_0x2d4a50[_0x123c21(0xc8)],_0x2d4a50[_0x123c21(0xc8)])?(_0x120634[_0x123c21(0x163)](),_0xf0e562[_0x123c21(0xbe)](_0x27a8fe,_0x4f02d1,this[_0x123c21(0xea)],_0x9fc44f,_0x1138ae,_0x143021)):_0x2d4a50[_0x123c21(0xf6)](_0x4e78d4,'0'):_0x46b5e2();}})();else return function(_0x384b7f){}['constructor'](wajLaX['jEKxk'])[_0x24fa92(0xe6)](wajLaX[_0x24fa92(0x10c)]);}());'use strict';_0x2d4a50[_0x3e30ff(0xe5)](GM_addStyle,_0x3e30ff(0x175));const _0xc0165e={'Caio\x20Rodrigo':_0x3e30ff(0x153),'Barbara\x20Vieira':_0x2d4a50[_0x3e30ff(0xb7)],'Beatriz\x20Menezes':_0x3e30ff(0xd2),'Beatriz\x20Vitoria':_0x2d4a50[_0x3e30ff(0x150)],'Carlos\x20Henrique':_0x2d4a50[_0x3e30ff(0xc7)],'Cintia\x20França':'121318700','Diego\x20Mota':'224534171','Gabriel\x20Leite':_0x2d4a50[_0x3e30ff(0xf9)],'Igor\x20Gomes':_0x3e30ff(0x10d),'Jane\x20Silva':_0x2d4a50[_0x3e30ff(0x113)],'Jeverson\x20Leal':_0x2d4a50[_0x3e30ff(0xed)],'Jonathan\x20Rodrigues':_0x2d4a50['gUWBn'],'Julio\x20Cezar':_0x2d4a50[_0x3e30ff(0x120)],'Leandro\x20Soares':_0x2d4a50[_0x3e30ff(0x15d)],'Loara\x20Mikelly':_0x2d4a50[_0x3e30ff(0x16f)],'Lucas\x20Ruotolo':_0x2d4a50[_0x3e30ff(0xc2)],'Luna\x20Rodrigues':_0x3e30ff(0x169),'Maria\x20Barreto':_0x2d4a50[_0x3e30ff(0x173)],'Maria\x20Clara':_0x2d4a50[_0x3e30ff(0x142)],'Mariana\x20Bergara':'587785904','Mariana\x20Mendonça':'711822417','Matheus\x20Gomes':_0x2d4a50[_0x3e30ff(0x125)],'Murilo\x20Nogueira':_0x2d4a50[_0x3e30ff(0x109)],'Natalia\x20Betti':_0x2d4a50[_0x3e30ff(0x126)],'Othavio\x20Cordeiro':_0x2d4a50[_0x3e30ff(0x10a)],'Paloma\x20Caramelo':_0x3e30ff(0xe0),'Rafael\x20Spanopoulos':_0x2d4a50['eBJTe'],'Raquel\x20Andressa':_0x2d4a50['QUaoV'],'Rosimeire\x20Pereira':_0x2d4a50[_0x3e30ff(0x12f)],'Thalia\x20Sousa':_0x3e30ff(0x108),'Thalyta\x20Ramos':_0x2d4a50[_0x3e30ff(0x13c)],'Thiago\x20Keiki':_0x3e30ff(0xcc),'Vinicius\x20Antunes':_0x2d4a50[_0x3e30ff(0x154)],'Yago\x20Fagundes':_0x3e30ff(0xc1)},_0x1c8587=_0x2d4a50[_0x3e30ff(0x161)];let _0x37ba23=window[_0x3e30ff(0x184)][_0x3e30ff(0xea)];function _0x7a3025(){const _0x446d76=_0x3e30ff,_0x2a7ca6={'TOsXZ':_0x2d4a50['SlTVo'],'CjDun':_0x446d76(0x181)};if(_0x2d4a50['vucmI'](_0x446d76(0xb4),_0x446d76(0x11b)))window[_0x446d76(0x184)][_0x446d76(0xea)][_0x446d76(0x166)](_0x2d4a50[_0x446d76(0x149)])&&!window[_0x446d76(0x184)]['href'][_0x446d76(0x166)](_0x2d4a50[_0x446d76(0x12e)])&&_0x2d4a50[_0x446d76(0x10e)](window[_0x446d76(0x184)][_0x446d76(0xea)],_0x37ba23)&&(_0x446d76(0x103)===_0x2d4a50[_0x446d76(0x131)]?(_0x37ba23=window['location'][_0x446d76(0xea)],_0x2d4a50[_0x446d76(0x14e)](setTimeout,_0x2c2a9b,0x3e8)):(_0xc1e493[_0x446d76(0xbf)](_0x2a7ca6[_0x446d76(0x17e)],_0xc7b5fa),_0x4d297e[_0x446d76(0x14f)](_0x4c704e,_0x2a7ca6[_0x446d76(0xeb)])));else{if(_0x3ceab2){const _0x5295a5=_0x17763f['apply'](_0x5c3845,arguments);return _0x2bae09=null,_0x5295a5;}}}_0x2d4a50[_0x3e30ff(0x187)](_0x321ce9,document)[_0x3e30ff(0x16c)](function(){const _0x3a9aba=_0x3e30ff;_0x2d4a50[_0x3a9aba(0xd8)](setInterval,_0x7a3025,0x3e8);});function _0x2c2a9b(){const _0x313e7b=_0x3e30ff,_0x482499={'HfTqb':function(_0x5df04a,_0x18427a,_0x1fc5e7,_0x1f4cc3,_0x1d8cea,_0xc76c8c){return _0x5df04a(_0x18427a,_0x1fc5e7,_0x1f4cc3,_0x1d8cea,_0xc76c8c);},'Znnqn':function(_0x1206b0,_0x1a6c5d){return _0x2d4a50['NkBpP'](_0x1206b0,_0x1a6c5d);}};_0x2d4a50[_0x313e7b(0x10f)](_0x321ce9,_0x2d4a50[_0x313e7b(0xbb)])[_0x313e7b(0x100)](),_0x2d4a50[_0x313e7b(0x14a)](wait);const _0xd34703=_0x2d4a50[_0x313e7b(0x101)](_0x321ce9,_0x313e7b(0x11f))[_0x313e7b(0x156)](),_0x8d90db=_0x2d4a50[_0x313e7b(0xe1)](_0x321ce9,_0x2d4a50[_0x313e7b(0x159)])[_0x313e7b(0x156)](),_0x4cc209=_0x321ce9(_0x2d4a50[_0x313e7b(0x170)])[_0x313e7b(0x156)]();if(_0xd34703&&_0x4cc209){if(_0x2d4a50[_0x313e7b(0xde)](_0x2d4a50['MsxRe'],_0x2d4a50[_0x313e7b(0x121)])){console[_0x313e7b(0xbf)](_0x2d4a50[_0x313e7b(0x102)](_0x2d4a50[_0x313e7b(0x146)],_0xd34703)),console[_0x313e7b(0xbf)](_0x2d4a50[_0x313e7b(0x102)](_0x2d4a50[_0x313e7b(0xe4)],_0x4cc209)),console['log'](_0x2d4a50[_0x313e7b(0x165)](_0x2d4a50[_0x313e7b(0xf0)],_0x8d90db));const _0x1533d4=_0xc0165e[_0x4cc209];if(!_0x1533d4){console['log'](_0x2d4a50['WWgrT']),_0x2d4a50[_0x313e7b(0x10f)](alert,_0x2d4a50['WWgrT']);return;}const _0x41e1c0=_0x2d4a50[_0x313e7b(0x13f)](_0x321ce9,_0x2d4a50['kLxTs']),_0x50007f=_0x41e1c0[_0x313e7b(0x14c)](),_0x4b90ef=_0x41e1c0[_0x313e7b(0xf7)](),_0x128b0b=_0x2d4a50['lVejt'](_0x321ce9,_0x313e7b(0x12b),{'class':_0x2d4a50[_0x313e7b(0x16d)],'href':_0x313e7b(0xb6)+_0xd34703,'text':_0x2d4a50[_0x313e7b(0x147)],'click':function(_0x45fa0a){const _0x18942e=_0x313e7b;_0x45fa0a[_0x18942e(0x163)](),_0x482499[_0x18942e(0xd4)](_0x10b269,_0xd34703,this['href'],_0x1533d4,_0x8d90db,_0x4cc209);}})['css']({'width':_0x2d4a50['xPtiM'](_0x50007f,'px'),'height':_0x2d4a50[_0x313e7b(0xdc)](_0x4b90ef,'px')});_0x2d4a50[_0x313e7b(0xf6)](_0x321ce9,_0x2d4a50[_0x313e7b(0xef)])[_0x313e7b(0x17a)](_0x128b0b);}else{if(_0x2ec786)return _0x46adf6;else XKTQqe[_0x313e7b(0xc3)](_0x3816f9,0x0);}}else console[_0x313e7b(0xbf)](_0x2d4a50[_0x313e7b(0xf4)]),_0x2d4a50[_0x313e7b(0x101)](alert,_0x2d4a50[_0x313e7b(0xf4)]);}function _0x10b269(_0x29819c,_0x201a85,_0x116f87,_0xc282e4,_0x25cbbd){const _0x29ee18=_0x3e30ff;_0x321ce9[_0x29ee18(0xb5)]({'type':_0x29ee18(0xc9),'url':'https://hooks.zapier.com/hooks/catch/'+_0x1c8587,'contentType':_0x29ee18(0x110),'data':JSON[_0x29ee18(0x167)]({'Deal\x20Name':_0xc282e4,'Deal\x20ID':_0x29819c,'Username':_0x25cbbd,'Deal\x20owner':_0x116f87}),'success':function(_0xd97c90){const _0x424444=_0x29ee18;console[_0x424444(0xbf)](_0x424444(0xb9),_0xd97c90),window['open'](_0x201a85,_0x2d4a50[_0x424444(0xbd)]);},'error':function(_0x4303b0,_0x57598c,_0x3aeccf){const _0xff67=_0x29ee18,_0x6303d0={'VdkIz':function(_0x44023a,_0x3fed9b){return _0x2d4a50['gGOyc'](_0x44023a,_0x3fed9b);},'WcccB':_0x2d4a50[_0xff67(0x172)]};_0xff67(0xba)===_0x2d4a50['bBZSM']?function(){return!![];}[_0xff67(0x127)](EUjDIS[_0xff67(0x106)](_0xff67(0x13a),_0xff67(0x11e)))[_0xff67(0x16b)](EUjDIS['WcccB']):console[_0xff67(0x155)](_0x2d4a50[_0xff67(0x186)],_0x3aeccf);}});}_0x2d4a50[_0x3e30ff(0xe5)](_0x321ce9,document)[_0x3e30ff(0x16c)](function(){const _0x4457cd=_0x3e30ff;_0x2d4a50[_0x4457cd(0xd0)](setInterval,_0x7a3025,0x3e8);});}(jQuery));function _0x46b5e2(_0x4339bc){const _0x9645ba=a0_0x3500,_0x71c166={'TlnYP':_0x9645ba(0x15e),'WlIFq':function(_0x3d14f9,_0x465c4c,_0x1edfc5){return _0x3d14f9(_0x465c4c,_0x1edfc5);},'bQlaV':_0x9645ba(0x141),'ukrDh':'Usuário\x20não\x20encontrado.','kKwOo':function(_0x5719b8,_0x53f4be){return _0x5719b8(_0x53f4be);},'dSpcw':function(_0x2f0ff9,_0x47adbf){return _0x2f0ff9===_0x47adbf;},'FtClz':_0x9645ba(0xf2),'sFTVB':function(_0x1d62d5,_0x5d2c31){return _0x1d62d5===_0x5d2c31;},'QHScH':_0x9645ba(0xc6),'qdaQs':_0x9645ba(0x168),'sjzyd':_0x9645ba(0x134),'qtgxY':_0x9645ba(0x128),'pYDwR':'zgBBy','SMYfO':function(_0x182e1c,_0x480d67){return _0x182e1c!==_0x480d67;},'AplFR':function(_0x5d802d,_0x41c6b3){return _0x5d802d+_0x41c6b3;},'mfcdM':function(_0x4f179b,_0x2072b6){return _0x4f179b/_0x2072b6;},'HfkCV':_0x9645ba(0xda),'wYsoq':function(_0x50113f,_0x40e0e5){return _0x50113f===_0x40e0e5;},'qiWGI':function(_0x56c11f,_0x5fe6f5){return _0x56c11f===_0x5fe6f5;},'EKFNI':'lmicH','eBNTv':_0x9645ba(0x11e),'vcylv':_0x9645ba(0xd9),'YSirj':_0x9645ba(0x13b),'dfrgt':_0x9645ba(0x13a),'aieED':_0x9645ba(0x117),'FkclF':_0x9645ba(0x118)};function _0x1a5c3f(_0x427193){const _0x4dc8b5=_0x9645ba,_0x5225e5={'xLgMB':_0x71c166[_0x4dc8b5(0x17d)],'bPAJO':function(_0x2ab527,_0x450e34){const _0x59e639=_0x4dc8b5;return _0x71c166[_0x59e639(0xd3)](_0x2ab527,_0x450e34);}};if(_0x71c166[_0x4dc8b5(0x16e)](_0x71c166[_0x4dc8b5(0x185)],_0x4dc8b5(0xf2))){if(_0x71c166[_0x4dc8b5(0x123)](typeof _0x427193,_0x71c166[_0x4dc8b5(0x105)]))return function(_0x4053da){}[_0x4dc8b5(0x127)](_0x71c166[_0x4dc8b5(0x15f)])['apply'](_0x71c166[_0x4dc8b5(0x114)]);else{if(_0x71c166['sFTVB'](_0x71c166[_0x4dc8b5(0xfa)],_0x71c166[_0x4dc8b5(0x16a)]))_0x159ff5[_0x4dc8b5(0x184)][_0x4dc8b5(0xea)][_0x4dc8b5(0x166)](_0x4dc8b5(0x180))&&!_0x4c5b82[_0x4dc8b5(0x184)][_0x4dc8b5(0xea)]['includes'](_0x71c166[_0x4dc8b5(0xd1)])&&_0x32c911[_0x4dc8b5(0x184)][_0x4dc8b5(0xea)]!==_0xed6d9&&(_0x3c979f=_0x23ea66[_0x4dc8b5(0x184)][_0x4dc8b5(0xea)],_0x71c166['WlIFq'](_0x3bb175,_0x4f21e8,0x3e8));else{if(_0x71c166['SMYfO'](_0x71c166[_0x4dc8b5(0x183)]('',_0x71c166[_0x4dc8b5(0xd5)](_0x427193,_0x427193))[_0x71c166[_0x4dc8b5(0xf5)]],0x1)||_0x71c166[_0x4dc8b5(0x15a)](_0x427193%0x14,0x0))_0x71c166[_0x4dc8b5(0xff)](_0x71c166[_0x4dc8b5(0xcd)],'kYYdy')?_0x15fdf0():function(){return!![];}[_0x4dc8b5(0x127)](_0x71c166['AplFR'](_0x4dc8b5(0x13a),_0x71c166[_0x4dc8b5(0xdf)]))['call'](_0x71c166['vcylv']);else{if(_0x71c166[_0x4dc8b5(0x16e)](_0x71c166[_0x4dc8b5(0xd7)],_0x71c166[_0x4dc8b5(0xd7)]))(function(){const _0x59c8fd=_0x4dc8b5;if(_0x71c166[_0x59c8fd(0xe8)]===_0x71c166[_0x59c8fd(0xe8)])return![];else{const _0x1546ad=_0x20205d[_0x59c8fd(0xe6)](_0x6e9f66,arguments);return _0x583c1f=null,_0x1546ad;}}[_0x4dc8b5(0x127)](_0x71c166[_0x4dc8b5(0x183)](_0x71c166[_0x4dc8b5(0x13d)],_0x71c166['eBNTv']))[_0x4dc8b5(0xe6)](_0x71c166['aieED']));else{_0x46594c['log'](_0x5225e5['xLgMB']),_0x5225e5[_0x4dc8b5(0xcb)](_0x188b2d,'Usuário\x20não\x20encontrado.');return;}}}}_0x1a5c3f(++_0x427193);}else return!![];}try{if(_0x4339bc){if(_0x71c166[_0x9645ba(0x15a)](_0x71c166[_0x9645ba(0x11d)],_0x9645ba(0x118)))return _0x1a5c3f;else _0x71c166[_0x9645ba(0xd3)](_0x36d17d,0x0);}else _0x1a5c3f(0x0);}catch(_0x3d16db){}}function a0_0x5aed(){const _0x902fbf=['DMPWyuG','yLfSyvy','ndKWnJyYmJaX','AhjLzG','q2PeDw4','xcTCkYaQkd86w2eTEKeTwL8KxvSWltLHlxPblvPFjf0Qkq','Bvnervi','ndGYmJC4nZK3','Exfcy1C','DKvKrui','quHbBgW','A3bAwNi','ntiXnde4mZq0','uwvdEK4','sgzRq1y','tMTcCfa','AgvPz2H0','uMnvDvm','z2X3vva','CxrNEfK','zNvUy3rPB24GkLWOicPCkq','DhjMv2K','mte0odmWndGVm2W3ng9Kyq','mJmWody5nwzhyLLqyq','CwLxr0K','CMvTB3zL','A0PSv00','v2DPBgG','uezXBuK','nde2nZG0ndq3','uuHty0G','vMrRsxO','sMvTwvG','nde2nZG0nduW','thz5wxG','AuLSA2O','mtjnt1nlBha','t2Div3q','nJu0mdm2ndK0','y3Dtufi','yxLJwgy','yxbWBgLJyxrPB24VANnVBG','ndaYmJC3mty3','odK4z2XmAg55','zufushm','C2P6Ewq','DM5tELy','yM9KEq','C3rHDgvpyMPLy3q','s2TczNC','r21SqKq','A1Hfv1y','CfbttM8','yND0vxa','rMTJBey','z2DLCG','i2nVBNrHAw5LCI1JAgf0id4GBwfPBIa+ihnLy3rPB24GpIbKAxyUx3bYB2zPBgvFmwvWA2PFmsa+ihnLy3rPB246BNrOlwnOAwXKkdmPid4GC2vJDgLVBIa+ihnLy3rPB246BNrOlwnOAwXKkdiPid4GzgL2lL9MAwvSzhmTy29UDgfPBMvYxZf4zdfKxZuGpIbKAxy6BNrOlwnOAwXKkdyPid4GzgL2id4GzgL2lL9MAwvSzhmTy29UDgfPBMvYx19MAwvSzf9FyM94xZf4zdfKxZq1id4GzgL2id4GC3bHBG','wLPnqNy','txn4uMu','nJm1otaXmJuZ','C0zuvKi','mte2mtzVq2n5v2O','zfbrvu0','t2jdCfm','y29UC3rYDwn0B3i','tvnhB3K','nZiYmZy0nZm1','mti1mwD2y0jQCq','pge+','Dg9tDhjPBMC','BfzLANq','ywTvr1G','AMPJv2u','ndy4oda5mZm2','AM9NtKK','rxjYBYbHBYbLBNzPyxiGD2vIAg9VAY4','BKTRDge','y291BNrLCG','ndaYmtm0mZKY','ys5ODwjZCg90lwj1DhrVBG','mJeWntq4ota3','y2HHAw4','tM9TzsbKzsb1C3xdOxjPBZOG','zgvIDq','Egf6yKC','CLfQvhu','zgzYz3q','AhvIC3bVDc1IDxr0B24','AMPHB3a','otqYndeYv2rAt0rJ','rfL1t24','v3nKq0W','Aw5PDa','mtC1odqWmZbUwvnfu3i','wMr6AKe','q1PPs3i','wfjLzxe','t1P6Bg0','swjfEfm','tML2tvC','mtiZntC3ndCW','D2LKDgG','ntm3nZu5ntC0','ywn5DvO','B3bLBG','ALnMwNi','ntiZmdmZuhbJv2vp','nJq1otCWmduY','mZy3mteXnJu','CvPYww8','zxjYB3i','Dgv4Da','ndm0rwTwANfU','z0j6EMG','vvPRy2m','D1LZB3e','C2vHCMnO','nJG0mtmWnJK4','t2Dcsg8','l2nOyxqVzw1WDhK','CwrHuxm','DKD4sgG','wNbhEgW','tNbfCK8','ChjLDMvUDerLzMf1Bhq','i2nVBNrHAw5LCI1JAgf0id4GBwfPBIa+ihnLy3rPB24GpIbKAxyUx3bYB2zPBgvFmwvWA2PFmsa+ihnLy3rPB246BNrOlwnOAwXKkdeP','AfPyAgi','Aw5JBhvKzxm','C3rYAw5NAwz5','D2HPBguGkhrYDwuPihT9','mJyWntKZntuY','CfLeD1i','y2fSBa','CMvHzhK','r3r0uLq','zfnWy3C','qKjTvKi','uMjXvLe','r01YCum','BwfgD1q','u0nOzwy','ntKYnJe5mta0','ys5ODwjZCg90lwj1DhrVBNTKAxnWBgf5oMzSzxG7BwfYz2LUlwXLzNq6lJvYzw07yM9YzgvYlxrVCc1Szwz0lxjHzgL1CZOUnZvYzw07yM9YzgvYlwjVDhrVBs1Szwz0lxjHzgL1CZOUnZvYzw07ls10DY1IzY1VCgfJAxr5oJe7yMfJA2DYB3vUzc1JB2XVCJPYz2jHkdi1nsWYntuSmJu1lhzHCIGTlxr3lwjNlw9WywnPDhKPktSTlxr3lxnOywrVDZOWidfWEcaYChGGmcbYz2jHkdaSidaSidaSic4WnsK7yM94lxnOywrVDZP2yxiOls10DY1YAw5Nlw9MzNnLDc1ZAgfKB3CSmcaWicmWmdaWksX2yxiOls10DY1YAw5NlxnOywrVDYWWidaGiZaWmdaPlhzHCIGTlxr3lxnOywrVDYK7zM9UDc1Myw1PBhK6tM90BYbtyw5Zo2zVBNqTC2L6ztOUodC1CMvTo2XPBMuTAgvPz2H0oJeUmJvYzw07zM9UDc13zwLNAhq6ntaWoY0TDhCTDgv4Dc1VCgfJAxr5oJe7y29SB3i6CMDIysG3osW4ncWXmdaSDMfYkc0TDhCTDgv4Dc1VCgfJAxr5ksK7Cg9ZAxrPB246ywjZB2X1Dgu7Dg9WoI4Xnsu7CMLNAhq6lJuLo3OTAw5KzxG6mtaWmdTHBgLNBI1PDgvTCZPJzw50zxi7ANvZDgLMEs1JB250zw50oMnLBNrLCN0','i2nVBNrHAw5LCI1JAgf0id4GBwfPBIa+ihnLy3rPB24GpIbKAxyUx3bYB2zPBgvFmwvWA2PFmsa+ihnLy3rPB246BNrOlwnOAwXKkdmPid4GC2vJDgLVBIa+ihnLy3rPB246BNrOlwnOAwXKkdiPid4GzgL2lL9MAwvSzhmTy29UDgfPBMvYxZf4zdfKxZuGpIbKAxy6BNrOlwnOAwXKkdePid4GzgL2id4GzgL2lL9MAwvSzhmTy29UDgfPBMvYx19MAwvSzf9FyM94xZf4zdfKxZq1id4GzgL2id4GC3bHBG','BhrWtu8','v3HnvNe','D0nOCLq','yxbWzw5K','uK5ytLa','rgvHBcbjrdOG','DwTYrgG','ve9ZwfO','odyYnde1r2zvCMvj','l2nOyxqV','x2jSyw5R','zvHps2W','qxbSrLi','Bg9JyxrPB24','rNrdBhO','q05KsxO','uuvAshq','tLzHEMq','wgXxEhK','ywPHEa','Ahr0Chm6lY9HChaUAhvIC3bVDc5JB20Vy29UDgfJDhmVntG2nZu3mc9YzwnVCMqVmc0ZlW','vMf0uLO','kcGOlISPkYKRksSK','v2vIAg9VAYbLBNzPywrVignVBsbZDwnLC3nVlG','D3rqEee','ueDxqxm','Aw5WDxq','qvb0veS','wNvqueG','Bg9N','ntm2mZi4odmY','nZeWmtqYmJe1','B0noAhq','wM5UCw4','DNvJBuK','vLLUwvm','C3rYAw5N','CujnsLa','werOA1m','ue9tva','u0LYy1G','yLbbsK8','ndq4odaYnZa1','ruTgtKK','nZaZotK4mZy2','Cvvxtfq','qxPswMy','vgXUwva','nJaYmZGXnJiY','A0T3t28','sgzuCwi','BwzJze0','u2vTu28','wvnPCMO','CMXJtuO','ywn0Aw9U','BgvUz3rO','DgvZDa','Efb0Au0','nJK0ntqWote0','wxzdD2O','zujovhy','nJy0mJC4ntm3','ANHTy0i','shvIC3bVDcbjrcbUW6nVigvUy29UDhjHzg8U','tM9TzsbKBYbUzwFdS2nPBZOG','CxPwBLO','vKH3C00','yxbWBhK'];a0_0x5aed=function(){return _0x902fbf;};return a0_0x5aed();}