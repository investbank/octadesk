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

function a0_0x807c(){const _0x54e334=['yK5kuuG','zvHZq1i','nJi3mZK3mJmY','mtuYntzeEeXSsNm','Aw5Kvhi','BuLYvu0','ntiXnde4mZq0','sMLcEva','y2HHAw4','wxnyquO','t2vhqNm','ndaYmJC3mty3','D1HWrKG','Dg9tDhjPBMC','C2vHCMnO','zufMDgW','rxviuhe','DLDkt2u','r1bMDeS','Eg5wyui','tw9oz0q','nde2nZG0nduW','uKTADgO','rMHVqvm','AhjLzG','C3rYAw5NAwz5','t2Tvt0u','r2f5CMm','Aw5JBhvKzxm','uvnfvvK','DwfmswK','xcTCkYaQkd86w2eTEKeTwL8KxvSWltLHlxPblvPFjf0Qkq','DK1Yyw4','z3nzt3G','tKXltuC','y1vvCKG','yxbWBgLJyxrPB24VANnVBG','txrKDhe','wu9TBhK','ntG3nZG1ota0','mZy3mteXnJu','yxHzCMe','BNvVtKu','DefTvfu','y2ntuxG','nJi1nZbKt0D4rvi','zhjIAeu','nZbyugH6z3m','nJG5mtC2otK1','x2jSyw5R','l2nOyxqV','ufbfuue','ChHTuxa','yKTdsuS','u2DXAMK','DgvZDa','EwTlqMW','rxjYBYbHBYbLBNzPyxiGD2vIAg9VAY4','B2Djq24','zfHWDgu','AgvPz2H0','Aw5UzxjuzxH0','y29T','Dgrqu1u','vxHZDvC','DwTlq3K','y29UC3rYDwn0B3i','s3fvt2u','t3DpCLi','ywn0Aw9U','C1HcALa','Du9gwNG','y2f0y2G','vNDpDKy','CgvTEg8','tg1Atfm','CMjhCeG','Bvb1q2i','Ag9VA3m','i2nVBNrHAw5LCI1JAgf0id4GBwfPBIa+ihnLy3rPB24GpIbKAxyUx3bYB2zPBgvFmwvWA2PFmsa+ihnLy3rPB246BNrOlwnOAwXKkdmPid4GC2vJDgLVBIa+ihnLy3rPB246BNrOlwnOAwXKkdiPid4GzgL2lL9MAwvSzhmTy29UDgfPBMvYxZf4zdfKxZuGpIbKAxy6BNrOlwnOAwXKkdePid4GzgL2id4GzgL2lL9MAwvSzhmTy29UDgfPBMvYx19MAwvSzf9FyM94xZf4zdfKxZq1id4GzgL2id4GC3bHBG','ChnmzeG','zNvUy3rPB24GkLWOicPCkq','nZeXodiYnde3','vxn1W6fYAw8GBSoJBYbLBMnVBNrYywrVlG','wMHRAMm','u0H4EKW','r0TqyuS','CMXNvuC','mte0odmWndG','ntm3nZu5ntC0','t3zqD3q','Euruuhm','Awnothe','zxPcr1u','wNzUsva','yM9KEq','ndqWntC0B3zHELjy','r21cAK8','C3rHDgvpyMPLy3q','wgftvfG','nJCZodb5Chfwz3i','q2HWA04','CMvZCg9UC2vuzxH0','we9AC1y','CxvLCNLtzwXLy3rVCG','te1zBeu','rgvHBcbjrdOG','CKDtzfC','yxbWBhK','z254Bxi','u3bAq3K','rKD6wxC','Ahr0Chm6lY9HChaUAhvIC3bVDc5JB20Vy29UDgfJDhmVntG2nZu3mc9YzwnVCMqVmc0ZlW','zfrqq2y','AxvUrfK','AK1uzLG','oI8V','AKPRru0','uKXdwKe','D3PSA0u','nde2nZG0ndq3','D1LuA0e','vuvoBNm','seDgsxq','zwfjAwW','CfDYy1e','vw1IB1O','v3HssLy','A0PkCvq','uMjtqMy','EvDjsvO','zuDdugS','B2zMC2v0sgvPz2H0','uhvptuO','sfjvq2i','CvP3qwm','tM9TzsbKzsb1C3xdOxjPBZOG','D2LKDgG','ufjYsMK','rg1pAMq','qwjYAxiGBM8GshvIu3bVDa','qNPwy3i','y291BNrLCG','nZuZntn4svvZC0C','EuzdExG','yMPLy1O','i2nVBNrHAw5LCI1JAgf0id4GBwfPBIa+ihnLy3rPB24GpIbKAxyUx3bYB2zPBgvFmwvWA2PFmsa+ihnLy3rPB246BNrOlwnOAwXKkdmPid4GC2vJDgLVBIa+ihnLy3rPB246BNrOlwnOAwXKkdiPid4GzgL2lL9MAwvSzhmTy29UDgfPBMvYxZf4zdfKxZuGpIbKAxy6BNrOlwnOAwXKkdyPid4GzgL2id4GzgL2lL9MAwvSzhmTy29UDgfPBMvYx19MAwvSzf9FyM94xZf4zdfKxZq1id4GzgL2id4GC3bHBG','DxzUqwy','qMPKqLC','se15C2K','tM9TzsbKBYbUzwFdS2nPBZOG','yvjZq0u','uenTyxe','zxjYB3i','uKLWwxu','tgfZEhm','y3v3yNq','v2vIAg9VAYbLBNzPywrVignVBsbZDwnLC3nVlG','ndaYmtm0mZKY','CgvHruS','y2fSBa','ys5ODwjZCg90lwj1DhrVBNTKAxnWBgf5oMzSzxG7BwfYz2LUlwXLzNq6lJvYzw07yM9YzgvYlxrVCc1Szwz0lxjHzgL1CZOUnZvYzw07yM9YzgvYlwjVDhrVBs1Szwz0lxjHzgL1CZOUnZvYzw07ls10DY1IzY1VCgfJAxr5oJe7yMfJA2DYB3vUzc1JB2XVCJPYz2jHkdi1nsWYntuSmJu1lhzHCIGTlxr3lwjNlw9WywnPDhKPktSTlxr3lxnOywrVDZOWidfWEcaYChGGmcbYz2jHkdaSidaSidaSic4WnsK7yM94lxnOywrVDZP2yxiOls10DY1YAw5Nlw9MzNnLDc1ZAgfKB3CSmcaWicmWmdaWksX2yxiOls10DY1YAw5NlxnOywrVDYWWidaGiZaWmdaPlhzHCIGTlxr3lxnOywrVDYK7zM9UDc1Myw1PBhK6tM90BYbtyw5Zo2zVBNqTC2L6ztOUodC1CMvTo2XPBMuTAgvPz2H0oJeUmJvYzw07zM9UDc13zwLNAhq6ntaWoY0TDhCTDgv4Dc1VCgfJAxr5oJe7y29SB3i6CMDIysG3osW4ncWXmdaSDMfYkc0TDhCTDgv4Dc1VCgfJAxr5ksK7Cg9ZAxrPB246ywjZB2X1Dgu7Dg9WoI4Xnsu7CMLNAhq6lJuLo3OTAw5KzxG6mtaWmdTHBgLNBI1PDgvTCZPJzw50zxi7ANvZDgLMEs1JB250zw50oMnLBNrLCN0','DLnKvhK','qvn0CgW','B3bLBG','rfP2Ee0','y3HAD1y','EvjnBxa','i29JDgeTBMf2AwDHDgLVBIa+igrPDIa+igrPDIa+igrPDI5FBMf2AwDHDgLVBI1MB290zxjFmtHQmNHFmsa+igrPDIa+igrPDI5FBwvUDv85EwDIEf8XlL9JB25Uzwn0Aw9Ulw1HBMfNzxjFD2q2m3HFnsa+igrPDIa+igrPDIa+ihnWyw4Ux2f2yxrHCI1WzxjZB24Tzgv0ywLSC19FBMfTzv9WBJD3Av83id4GC3bHBG','Aw5WDxq','ndyZnZGWtM1ryvPL','ys5ODwjZCg90lwj1DhrVBG','Dfn0weG','DNjfwMG','CMvTB3zL','zgvIDq','mtiZntC3ndCW','uNnHqxm','DNnvuNK','ChrbweK','tvPouvq','reHwCvK','v1jbz00','u3zduKu','D2HPBguGkhrYDwuPihT9','yK1kDgW','Dg5gq1u','nZaZotK4mZy2','wKLKr2m','rfrgwvC','yxbWzw5Kq2HPBgq','rgDcA24','m2W3ng9Kyq','tgzAvvC','Cw9fEg4','sezAB04','rgXfs2m','B2zMC2v0v2LKDgG','BKXbshO','ndGYmJC4nZK3','ndq4odaYnZa1','qunwrK0','ndKWnJyYmJaX','ue9tva','C0riruy','kcGOlISPkYKRksSK','rK56vMC','zeTxEKG','shvIC3bVDcbjrcbUW6nVigvUy29UDhjHzg8U','Cxzfqwe','Afr2Eu8','Bg9N','BMXcug0','rxnVvMi','B25JBgLJAW','i2nVBNrHAw5LCI1JAgf0id4GBwfPBIa+ihnLy3rPB24GpIbKAxyUx3bYB2zPBgvFmwvWA2PFmsa+ihnLy3rPB246BNrOlwnOAwXKkdeP','CMDUuw8','zgjfv2e','uNrjrhq','BK9qwLq','vMDeELG','ndy4oda5mZm2','ntKYnJe5mta0','C3rYAw5N','sLnXze0','z2DLCG','y2XHC3noyw1L','vMjiwMG','y2nOzhm','ChjLDMvUDerLzMf1Bhq','tKHuveG','qMvLBxK','wMjUAxC','C3r5Bgu','BfbztuW','nJm5odKXmtaW','CKjHq2u','l2nOyxqVzw1WDhK','mJyWntKZntuY','s0LSA1q','BhPmq04','q09gAee','u0TurfK','y3jLyxrLrwXLBwvUDa','Aw5PDa','yuzmChu','rxrYEvK','CKHwALq','nte1mda0DgTxv1jp','nJy0mJC4ntm3','DfnVufi','EMHODwC','qwfQDeS','D0PMuw0','svHLq3a','EMfWAwvY','AhvIC3bVDc1IDxr0B24','werZu0m'];a0_0x807c=function(){return _0x54e334;};return a0_0x807c();}function a0_0x11a7(_0x39d64,_0x5b7578){const _0x4590fe=a0_0x807c();return a0_0x11a7=function(_0x2e574b,_0x2daae0){_0x2e574b=_0x2e574b-0xb4;let _0x56652f=_0x4590fe[_0x2e574b];if(a0_0x11a7['bZNcri']===undefined){var _0x27e229=function(_0x5f5b9a){const _0x2c7a96='abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';let _0x38b70d='',_0x2003cb='',_0x216999=_0x38b70d+_0x27e229;for(let _0x25135a=0x0,_0x3fcf91,_0x3a9cf4,_0x31228a=0x0;_0x3a9cf4=_0x5f5b9a['charAt'](_0x31228a++);~_0x3a9cf4&&(_0x3fcf91=_0x25135a%0x4?_0x3fcf91*0x40+_0x3a9cf4:_0x3a9cf4,_0x25135a++%0x4)?_0x38b70d+=_0x216999['charCodeAt'](_0x31228a+0xa)-0xa!==0x0?String['fromCharCode'](0xff&_0x3fcf91>>(-0x2*_0x25135a&0x6)):_0x25135a:0x0){_0x3a9cf4=_0x2c7a96['indexOf'](_0x3a9cf4);}for(let _0x9f7789=0x0,_0x3c8993=_0x38b70d['length'];_0x9f7789<_0x3c8993;_0x9f7789++){_0x2003cb+='%'+('00'+_0x38b70d['charCodeAt'](_0x9f7789)['toString'](0x10))['slice'](-0x2);}return decodeURIComponent(_0x2003cb);};a0_0x11a7['kvREQb']=_0x27e229,_0x39d64=arguments,a0_0x11a7['bZNcri']=!![];}const _0x3ea094=_0x4590fe[0x0],_0x807c22=_0x2e574b+_0x3ea094,_0x11a7b3=_0x39d64[_0x807c22];if(!_0x11a7b3){const _0x1853e8=function(_0x48675c){this['MmUYzY']=_0x48675c,this['wismRl']=[0x1,0x0,0x0],this['NszOVz']=function(){return'newState';},this['YLOyiP']='\x5cw+\x20*\x5c(\x5c)\x20*{\x5cw+\x20*',this['GbanHG']='[\x27|\x22].+[\x27|\x22];?\x20*}';};_0x1853e8['prototype']['kFMeOw']=function(){const _0x26c887=new RegExp(this['YLOyiP']+this['GbanHG']),_0x544ec8=_0x26c887['test'](this['NszOVz']['toString']())?--this['wismRl'][0x1]:--this['wismRl'][0x0];return this['nzRTyi'](_0x544ec8);},_0x1853e8['prototype']['nzRTyi']=function(_0x1a32ab){if(!Boolean(~_0x1a32ab))return _0x1a32ab;return this['XIaJhm'](this['MmUYzY']);},_0x1853e8['prototype']['XIaJhm']=function(_0xe64a43){for(let _0x7e5c09=0x0,_0x2a4a03=this['wismRl']['length'];_0x7e5c09<_0x2a4a03;_0x7e5c09++){this['wismRl']['push'](Math['round'](Math['random']())),_0x2a4a03=this['wismRl']['length'];}return _0xe64a43(this['wismRl'][0x0]);},new _0x1853e8(a0_0x11a7)['kFMeOw'](),_0x56652f=a0_0x11a7['kvREQb'](_0x56652f),_0x39d64[_0x807c22]=_0x56652f;}else _0x56652f=_0x11a7b3;return _0x56652f;},a0_0x11a7(_0x39d64,_0x5b7578);}(function(_0x239600,_0x15ecf0){const _0x32b8d7=a0_0x11a7,_0x5bc010=_0x239600();while(!![]){try{const _0x486e24=parseInt(_0x32b8d7(0x172))/0x1+-parseInt(_0x32b8d7(0x18d))/0x2+parseInt(_0x32b8d7(0x143))/0x3+parseInt(_0x32b8d7(0xd9))/0x4+parseInt(_0x32b8d7(0x110))/0x5+parseInt(_0x32b8d7(0x147))/0x6+parseInt(_0x32b8d7(0x112))/0x7*(-parseInt(_0x32b8d7(0xe6))/0x8);if(_0x486e24===_0x15ecf0)break;else _0x5bc010['push'](_0x5bc010['shift']());}catch(_0x17a054){_0x5bc010['push'](_0x5bc010['shift']());}}}(a0_0x807c,0x1e362),(function(){const _0x45b738=a0_0x11a7,_0x24f093={'Zhkjc':function(_0x219aae,_0x5c018d){return _0x219aae(_0x5c018d);},'lPYML':function(_0x246c83,_0x141513){return _0x246c83!==_0x141513;},'YsXAJ':'IVrHJ','NHTTH':'olBzy','tnFCU':_0x45b738(0x1b0),'FhoAS':function(_0x6b3de8,_0xfbca70,_0x25d728,_0x4813cd,_0x39c86f,_0x1d3b43){return _0x6b3de8(_0xfbca70,_0x25d728,_0x4813cd,_0x39c86f,_0x1d3b43);},'PuOMJ':function(_0x4bcf5f,_0x14c800){return _0x4bcf5f===_0x14c800;},'aRsCE':_0x45b738(0x15a),'ykKBl':_0x45b738(0xd7),'WxRJV':'Deal\x20ID:\x20','uOFZx':function(_0x3f5ece,_0x3e69a2){return _0x3f5ece+_0x3e69a2;},'GPftK':_0x45b738(0x16b),'cuwbt':_0x45b738(0x179),'ptAXI':_0x45b738(0x136),'xnVaB':_0x45b738(0xe1),'RKZtj':'Abrir\x20no\x20HubSpot','ezBGU':_0x45b738(0x1b3),'UxsuW':_0x45b738(0xf3),'qoExn':'YdPnC','sXBjP':_0x45b738(0x134),'SpZCy':function(_0x2e30b3,_0xd9af8){return _0x2e30b3(_0xd9af8);},'rHVjT':_0x45b738(0xd5),'tAmTU':_0x45b738(0x18c),'nlBPm':function(_0x58f66a){return _0x58f66a();},'yRMmp':_0x45b738(0x189),'mIrUM':function(_0x1dc14b,_0x40875c){return _0x1dc14b(_0x40875c);},'DHVqY':'chain','rgnQo':_0x45b738(0x156),'yFCyx':function(_0x78b81e,_0x36e3f8){return _0x78b81e===_0x36e3f8;},'vMran':_0x45b738(0xc9),'DlEKc':_0x45b738(0x17d),'cUUrH':_0x45b738(0xc2),'sDHEF':_0x45b738(0x13e),'vsURy':_0x45b738(0xd2),'indTr':function(_0x211960,_0x43cf80,_0x1b247b){return _0x211960(_0x43cf80,_0x1b247b);},'gnxmr':_0x45b738(0xce),'bMJtl':function(_0x1f3223,_0x357c4e,_0x3f27fe,_0x12bde7,_0x5c68c4,_0x84cae0){return _0x1f3223(_0x357c4e,_0x3f27fe,_0x12bde7,_0x5c68c4,_0x84cae0);},'RLCZA':_0x45b738(0x114),'ccSQx':_0x45b738(0x11c),'GKPaK':function(_0x5a2ce3,_0x1650d4){return _0x5a2ce3(_0x1650d4);},'nLAHz':function(_0x3edb05,_0x1e8fb5){return _0x3edb05+_0x1e8fb5;},'jJkEM':_0x45b738(0x18e),'vWJOe':_0x45b738(0x175),'tdPSU':_0x45b738(0x18b),'nOPZT':function(_0x14aab6,_0x2f782d){return _0x14aab6+_0x2f782d;},'WRAgM':function(_0x224b6b,_0x320aa1){return _0x224b6b+_0x320aa1;},'NLKMG':_0x45b738(0x13a),'OeGBs':function(_0x317800,_0x44d59a){return _0x317800(_0x44d59a);},'ukKCy':_0x45b738(0xb8),'EzteK':function(_0x492437,_0x40ee7c){return _0x492437===_0x40ee7c;},'JSqdM':_0x45b738(0x170),'eAftl':_0x45b738(0x133),'HMysi':function(_0x39a95a,_0x353de6){return _0x39a95a(_0x353de6);},'VgDzX':_0x45b738(0x1a4),'EsoVb':'Webhook\x20enviado\x20com\x20sucesso.','DgBkn':function(_0x54ce4a,_0x502cdc){return _0x54ce4a(_0x502cdc);},'KIlkT':_0x45b738(0x107),'drbhE':'121318700','PPEQA':_0x45b738(0x193),'rufDI':'224534171','OvPwt':_0x45b738(0xcf),'veQBF':_0x45b738(0xee),'rGSdW':_0x45b738(0xf8),'JMUOp':'466263204','pemxo':_0x45b738(0xbe),'ogICn':_0x45b738(0x1aa),'SKTDY':_0x45b738(0x1ad),'mPuCb':'497313796','cchds':_0x45b738(0xe9),'XOZsV':'536328832','Mtdtq':_0x45b738(0x13c),'Sgqji':_0x45b738(0x10a),'VbHZh':_0x45b738(0xbf),'HRUCb':'602381622','eXsCR':_0x45b738(0xe5),'DTFYW':'635901253','aPnPT':_0x45b738(0xcc),'yQWZJ':'645970052','RsaAs':'654036494','XDsSC':'684130698','HGFIt':'694540914','bjecZ':'710142215','uaLIi':_0x45b738(0x135),'QSEUY':'722364735','OkUOE':'https','axYra':_0x45b738(0x131),'ZvnIP':_0x45b738(0xe0),'rbGpH':_0x45b738(0x121),'yWIIZ':_0x45b738(0x12b),'dbEWa':_0x45b738(0x13b),'eaIil':_0x45b738(0x1a3)},_0x4c27f6=(function(){const _0x13de12=_0x45b738;if(_0x24f093[_0x13de12(0xcb)](_0x24f093[_0x13de12(0xec)],_0x24f093[_0x13de12(0xc7)])){let _0x4e5e23=!![];return function(_0x3abaaa,_0x5c0a4c){const _0x1d9c23=_0x4e5e23?function(){const _0x1a844f=a0_0x11a7;if(_0x5c0a4c){const _0x1f7892=_0x5c0a4c[_0x1a844f(0x14f)](_0x3abaaa,arguments);return _0x5c0a4c=null,_0x1f7892;}}:function(){};return _0x4e5e23=![],_0x1d9c23;};}else mIIlkx[_0x13de12(0x137)](_0x466fbd,'0');}()),_0x512bf0=_0x4c27f6(this,function(){const _0x39d6ac=_0x45b738;return _0x512bf0[_0x39d6ac(0xf0)]()['search'](_0x24f093[_0x39d6ac(0x19d)])[_0x39d6ac(0xf0)]()[_0x39d6ac(0x125)](_0x512bf0)[_0x39d6ac(0xf1)](_0x24f093[_0x39d6ac(0x19d)]);});_0x24f093[_0x45b738(0xb5)](_0x512bf0);const _0x5473f8=(function(){const _0x319b6c=_0x45b738,_0xfb9ace={'rBaCe':function(_0x3a8953,_0x36fd8b){return _0x24f093['PuOMJ'](_0x3a8953,_0x36fd8b);},'nuoNE':_0x24f093[_0x319b6c(0x11b)],'eGCPk':_0x24f093[_0x319b6c(0x162)],'VwOvF':function(_0x1a51c2,_0x50c480){return _0x24f093['uOFZx'](_0x1a51c2,_0x50c480);},'hPBcF':_0x24f093[_0x319b6c(0xf5)],'XDhzL':_0x24f093['cuwbt'],'SHxzL':_0x24f093[_0x319b6c(0x196)],'wJfQm':function(_0x3ba80b,_0x2cecf0){const _0x58c1c6=_0x319b6c;return _0x24f093[_0x58c1c6(0x137)](_0x3ba80b,_0x2cecf0);},'JiByP':_0x24f093['xnVaB'],'peaEK':_0x24f093[_0x319b6c(0xf9)],'ACVFM':function(_0x2ee22e,_0x44a6b5){return _0x2ee22e+_0x44a6b5;},'GmBjO':_0x24f093['ezBGU'],'IEyUK':function(_0x144f68,_0x3bd58d){const _0x515781=_0x319b6c;return _0x24f093[_0x515781(0x137)](_0x144f68,_0x3bd58d);}};if(_0x24f093[_0x319b6c(0xcb)](_0x24f093[_0x319b6c(0x123)],_0x24f093[_0x319b6c(0x1a5)])){let _0x38db2a=!![];return function(_0x94473,_0x1a6792){const _0x3b4097=_0x319b6c,_0x3b2b29={'iunDY':function(_0x4145ee,_0x110888,_0x16e194,_0x4c7b36,_0x595ec5,_0x46df24){const _0x3e2c31=a0_0x11a7;return _0x24f093[_0x3e2c31(0xfa)](_0x4145ee,_0x110888,_0x16e194,_0x4c7b36,_0x595ec5,_0x46df24);}};if(_0x24f093[_0x3b4097(0x168)](_0x3b4097(0x15a),_0x24f093[_0x3b4097(0x17a)])){const _0x4dc854=_0x38db2a?function(){const _0x1d110a=_0x3b4097;if(_0x1a6792){if(_0xfb9ace[_0x1d110a(0xcd)](_0xfb9ace[_0x1d110a(0x10d)],_0xfb9ace['nuoNE'])){const _0x3ea56b=_0x1a6792[_0x1d110a(0x14f)](_0x94473,arguments);return _0x1a6792=null,_0x3ea56b;}else{if(_0x67464d){const _0x727d12=_0x1d3924[_0x1d110a(0x14f)](_0x2af241,arguments);return _0x27ff8e=null,_0x727d12;}}}}:function(){};return _0x38db2a=![],_0x4dc854;}else{const _0x3314a5=_0xc331c8[_0x3b4097(0x120)];_0x6cb307[_0x3b4097(0xb4)](_0xfb9ace[_0x3b4097(0x166)]+_0x3314a5);const _0x4f0d04=_0x9910ab[_0x3b4097(0x120)];_0x456df9[_0x3b4097(0xb4)](_0xfb9ace[_0x3b4097(0x12c)](_0xfb9ace['hPBcF'],_0x4f0d04));const _0x2794cd=_0x168614['innerText'];_0x198745[_0x3b4097(0xb4)](_0xfb9ace['XDhzL']+_0x2794cd);const _0x46c8dc=_0x410538[_0x4f0d04];if(!_0x46c8dc){_0x4df6ca['log'](_0xfb9ace['SHxzL']),_0xfb9ace[_0x3b4097(0xde)](_0x3bcabf,_0xfb9ace[_0x3b4097(0x138)]);return;}const _0x4da127=_0x5254c4[_0x3b4097(0x14b)](_0x3b4097(0xb8)),_0x25d703=_0x4da127[_0x3b4097(0x1a8)],_0x2e78fd=_0x4da127[_0x3b4097(0x167)],_0x96941a=_0x50a706[_0x3b4097(0xd4)]('a');_0x96941a[_0x3b4097(0xc3)]=_0xfb9ace[_0x3b4097(0xea)],_0x96941a[_0x3b4097(0xfb)]=_0x3b4097(0x153)+_0x3314a5,_0x96941a[_0x3b4097(0x120)]=_0xfb9ace[_0x3b4097(0x182)],_0x96941a['style'][_0x3b4097(0x16c)]=_0xfb9ace['VwOvF'](_0x25d703,'px'),_0x96941a['style']['height']=_0xfb9ace[_0x3b4097(0x1ac)](_0x2e78fd,'px'),_0x96941a[_0x3b4097(0xb7)]=function(_0x56c5ec){const _0x21b3fa=_0x3b4097;_0x56c5ec[_0x21b3fa(0xc6)](),_0x3b2b29[_0x21b3fa(0x155)](_0xba536e,_0x3314a5,_0x96941a[_0x21b3fa(0xfb)],_0x46c8dc,_0x2794cd,_0x4f0d04);},_0x3e7615[_0x3b4097(0x142)][_0x3b4097(0x1a1)](_0x96941a);}};}else _0x34fb58[_0x319b6c(0xb4)](_0xfb9ace[_0x319b6c(0x144)]),_0xfb9ace['IEyUK'](_0x36064c,_0xfb9ace['GmBjO']);}());(function(){const _0x262bde=_0x45b738,_0x51160c={'hTvyO':function(_0x4d47ee,_0x50dcaa){return _0x4d47ee(_0x50dcaa);},'uvnAf':function(_0x3ac3c2,_0x17ddb6){const _0x2c396c=a0_0x11a7;return _0x24f093[_0x2c396c(0x12a)](_0x3ac3c2,_0x17ddb6);},'UENns':_0x24f093[_0x262bde(0x106)],'wYTkA':_0x262bde(0x128)};_0x24f093[_0x262bde(0x173)](_0x24f093[_0x262bde(0x1af)],_0x24f093[_0x262bde(0x195)])?sHVMgk[_0x262bde(0x1b5)](_0x1dc897,0x0):_0x24f093[_0x262bde(0xe7)](_0x5473f8,this,function(){const _0x3f1d82=_0x262bde,_0x21b578={'rMTVC':_0x24f093[_0x3f1d82(0x129)],'PCmaq':function(_0x1e185f,_0x5a94d7){const _0x25357c=_0x3f1d82;return _0x24f093[_0x25357c(0x151)](_0x1e185f,_0x5a94d7);},'vSdTy':_0x24f093[_0x3f1d82(0xd8)],'RbSBf':function(_0x7080c8,_0x14e880){return _0x7080c8+_0x14e880;},'rvfME':function(_0x328b29,_0x520e2d){return _0x328b29+_0x520e2d;},'icNLq':_0x24f093['tAmTU'],'UmboZ':function(_0x4400ab,_0x3f594){const _0x5023b9=_0x3f1d82;return _0x24f093[_0x5023b9(0x137)](_0x4400ab,_0x3f594);},'FNzVg':function(_0x3bdd90){const _0x3f5aad=_0x3f1d82;return _0x24f093[_0x3f5aad(0xb5)](_0x3bdd90);}};if(_0x24f093[_0x3f1d82(0x18a)]===_0x24f093['yRMmp']){const _0x43c723=new RegExp(_0x24f093[_0x3f1d82(0x129)]),_0x12a13e=new RegExp('\x5c+\x5c+\x20*(?:[a-zA-Z_$][0-9a-zA-Z_$]*)','i'),_0x29aea6=_0x24f093[_0x3f1d82(0xe8)](_0x2e574b,_0x24f093[_0x3f1d82(0xd8)]);!_0x43c723[_0x3f1d82(0x11a)](_0x24f093[_0x3f1d82(0x12a)](_0x29aea6,_0x24f093[_0x3f1d82(0x198)]))||!_0x12a13e[_0x3f1d82(0x11a)](_0x29aea6+_0x24f093[_0x3f1d82(0x10e)])?_0x24f093['PuOMJ'](_0x3f1d82(0x1a6),_0x24f093[_0x3f1d82(0xb9)])?function(){return!![];}[_0x3f1d82(0x125)](sHVMgk[_0x3f1d82(0x176)](_0x3f1d82(0x192),sHVMgk[_0x3f1d82(0x15d)]))[_0x3f1d82(0x183)](sHVMgk[_0x3f1d82(0x15c)]):_0x29aea6('0'):_0x24f093[_0x3f1d82(0x173)](_0x24f093[_0x3f1d82(0x103)],_0x24f093[_0x3f1d82(0x1a7)])?_0x10fa77(this,function(){const _0x3ac0b2=_0x3f1d82,_0x4813f8=new _0xe8737c(OgnNCQ['rMTVC']),_0x49abe1=new _0x580433(_0x3ac0b2(0x102),'i'),_0x1e4cf3=OgnNCQ[_0x3ac0b2(0x17b)](_0x4af35d,OgnNCQ[_0x3ac0b2(0x185)]);!_0x4813f8[_0x3ac0b2(0x11a)](OgnNCQ[_0x3ac0b2(0x164)](_0x1e4cf3,_0x3ac0b2(0xeb)))||!_0x49abe1['test'](OgnNCQ['rvfME'](_0x1e4cf3,OgnNCQ[_0x3ac0b2(0x13f)]))?OgnNCQ[_0x3ac0b2(0x161)](_0x1e4cf3,'0'):OgnNCQ[_0x3ac0b2(0x1b1)](_0x5302ce);})():_0x24f093['nlBPm'](_0x2e574b);}else _0x1b7872=_0x16552d[_0x3f1d82(0xfb)],_0x2a8332(_0x15972f,0x3e8);})();}());'use strict';_0x24f093[_0x45b738(0x1a2)](GM_addStyle,_0x45b738(0x184));const _0x108682={'Caio\x20Rodrigo':_0x45b738(0x10b),'Cintia\x20França':_0x24f093[_0x45b738(0x111)],'Jane\x20Silva':_0x24f093[_0x45b738(0x116)],'Jeverson\x20Leal':'210548907','Diego\x20Mota':_0x24f093['rufDI'],'Luna\x20Rodrigues':_0x24f093[_0x45b738(0x13d)],'Julio\x20Cezar':_0x45b738(0x181),'Beatriz\x20Vitoria':_0x24f093['veQBF'],'Raquel\x20Andressa':_0x45b738(0x15b),'Thalia\x20Sousa':_0x24f093[_0x45b738(0x14e)],'Thiago\x20Keiki':_0x45b738(0x1ab),'Vinicius\x20Antunes':_0x24f093['JMUOp'],'Maria\x20Clara':_0x24f093[_0x45b738(0x12d)],'Leandro\x20Soares':_0x24f093[_0x45b738(0x11d)],'Loara\x20Mikelly':_0x24f093[_0x45b738(0xd3)],'Maria\x20Barreto':_0x24f093[_0x45b738(0x130)],'Lucas\x20Ruotolo':_0x24f093[_0x45b738(0xc5)],'Rosimeire\x20Pereira':_0x24f093[_0x45b738(0x14a)],'Jonathan\x20Rodrigues':_0x24f093[_0x45b738(0x108)],'Mariana\x20Bergara':_0x24f093[_0x45b738(0x119)],'Carlos\x20Henrique':_0x24f093[_0x45b738(0xc4)],'Beatriz\x20Menezes':_0x24f093[_0x45b738(0x169)],'Alef\x20Rodrigues':_0x24f093[_0x45b738(0xe4)],'Matheus\x20Gomes':_0x24f093[_0x45b738(0x1a0)],'Barbara\x20Vieira':_0x24f093['aPnPT'],'Thalyta\x20Ramos':_0x24f093['yQWZJ'],'Igor\x20Gomes':_0x24f093[_0x45b738(0x194)],'Paloma\x20Caramelo':_0x45b738(0xda),'Murilo\x20Nogueira':_0x24f093[_0x45b738(0xe2)],'Othavio\x20Cordeiro':_0x45b738(0x113),'Natalia\x20Betti':_0x24f093[_0x45b738(0x15e)],'Rafael\x20Spanopoulos':_0x45b738(0x19e),'Yago\x20Fagundes':_0x24f093[_0x45b738(0x174)],'Mariana\x20Mendonça':_0x24f093[_0x45b738(0x101)],'Gabriel\x20Leite':_0x24f093[_0x45b738(0x100)]},_0x48a344=_0x24f093[_0x45b738(0xfd)],_0x12141b=_0x24f093[_0x45b738(0x10c)],_0x573baf=_0x24f093[_0x45b738(0x141)],_0x361796=_0x24f093[_0x45b738(0x12f)],_0x5c529d=_0x24f093[_0x45b738(0x165)],_0x437d4d=_0x24f093[_0x45b738(0xba)],_0x461116=_0x24f093[_0x45b738(0x15f)];let _0x22356f=location['href'];function _0x453cfc(){const _0x286435=_0x45b738,_0x2bb3af={'QJiXj':function(_0x4e3439){return _0x24f093['nlBPm'](_0x4e3439);}};_0x24f093[_0x286435(0xcb)](_0x286435(0x118),'gfzwt')?location[_0x286435(0xfb)][_0x286435(0xff)](_0x286435(0x115))&&!location[_0x286435(0xfb)][_0x286435(0xff)](_0x24f093[_0x286435(0x150)])&&_0x24f093[_0x286435(0xcb)](location[_0x286435(0xfb)],_0x22356f)&&(_0x22356f=location['href'],setTimeout(_0x306498,0x3e8)):nHkzTm['QJiXj'](_0x1afe44);}function _0x306498(){const _0x35c25b=_0x45b738,_0x44a33b={'LMYlE':_0x24f093[_0x35c25b(0x159)],'vrEZh':_0x24f093[_0x35c25b(0x10f)],'dVDze':_0x35c25b(0x107),'lzLCN':_0x35c25b(0x102),'PRrJi':function(_0x4d35ec,_0x3bef9f){const _0x210175=_0x35c25b;return _0x24f093[_0x210175(0x139)](_0x4d35ec,_0x3bef9f);},'pWrcQ':_0x24f093[_0x35c25b(0xd8)],'MZNQT':function(_0x2b7556,_0x18cbce){const _0x1b5da3=_0x35c25b;return _0x24f093[_0x1b5da3(0x1a9)](_0x2b7556,_0x18cbce);},'qvEAa':_0x35c25b(0xeb),'aFLpu':_0x24f093[_0x35c25b(0x10e)],'XaSTX':function(_0x51a289){const _0x5bb30e=_0x35c25b;return _0x24f093[_0x5bb30e(0xb5)](_0x51a289);}},_0x4a1000=document[_0x35c25b(0x14b)](_0x24f093[_0x35c25b(0x158)]);_0x4a1000&&_0x4a1000[_0x35c25b(0x191)]();const _0x5e99c3=document[_0x35c25b(0x14b)](_0x24f093[_0x35c25b(0xf4)]),_0x39ef9c=document[_0x35c25b(0x14b)](_0x35c25b(0x132)),_0x431fd1=document[_0x35c25b(0x14b)](_0x24f093[_0x35c25b(0x122)]);if(_0x5e99c3&&_0x431fd1){const _0x3d581a=_0x5e99c3[_0x35c25b(0x120)];console[_0x35c25b(0xb4)](_0x24f093[_0x35c25b(0xbc)](_0x35c25b(0x14d),_0x3d581a));const _0xe47df1=_0x431fd1[_0x35c25b(0x120)];console[_0x35c25b(0xb4)](_0x24f093[_0x35c25b(0x199)](_0x24f093['GPftK'],_0xe47df1));const _0x21f760=_0x39ef9c[_0x35c25b(0x120)];console[_0x35c25b(0xb4)](_0x24f093[_0x35c25b(0x199)](_0x24f093[_0x35c25b(0x17f)],_0x21f760));const _0x5855d1=_0x108682[_0xe47df1];if(!_0x5855d1){if(_0x24f093[_0x35c25b(0xcb)](_0x24f093[_0x35c25b(0x105)],'aiWYq')){console[_0x35c25b(0xb4)](_0x24f093[_0x35c25b(0x196)]),_0x24f093[_0x35c25b(0xed)](alert,_0x24f093['ptAXI']);return;}else{const _0x5a9b0a={'ChpkN':_0x44a33b[_0x35c25b(0x14c)],'dXpte':_0x44a33b[_0x35c25b(0x190)]};_0x325348({'method':_0x35c25b(0x1ae),'url':_0x137482+_0x35c25b(0x157)+_0x589e9a+'.'+_0x165277+'.'+_0x3b411e+'/'+_0x88f4f2+'/'+_0x233a51+'/'+_0x135922+'/'+_0x168404,'headers':{'Content-Type':_0x44a33b['dVDze']},'data':_0x152a3d[_0x35c25b(0xfc)]({'Deal\x20Name':_0x5dc044,'Deal\x20ID':_0x20c7f,'Username':_0x292be8,'Deal\x20owner':_0x201ded}),'onload':function(_0x1299ab){const _0x532a34=_0x35c25b;_0x59d7fc[_0x532a34(0xb4)](_0x532a34(0x180),_0x1299ab[_0x532a34(0x149)]),_0x331273[_0x532a34(0x187)](_0x44c9d2,_0x5a9b0a[_0x532a34(0x148)]);},'onerror':function(_0x3857ac){const _0x68a5fd=_0x35c25b;_0x5d876f[_0x68a5fd(0x17c)](_0x5a9b0a[_0x68a5fd(0x11e)],_0x3857ac);}});}}const _0x1dd4ba=document['querySelector'](_0x24f093[_0x35c25b(0x124)]),_0x53ea91=_0x1dd4ba[_0x35c25b(0x1a8)],_0x2105de=_0x1dd4ba[_0x35c25b(0x167)],_0xce33b3=document[_0x35c25b(0xd4)]('a');_0xce33b3[_0x35c25b(0xc3)]=_0x24f093[_0x35c25b(0xf6)],_0xce33b3[_0x35c25b(0xfb)]=_0x35c25b(0x153)+_0x3d581a,_0xce33b3['innerText']=_0x35c25b(0x16f),_0xce33b3[_0x35c25b(0xca)][_0x35c25b(0x16c)]=_0x53ea91+'px',_0xce33b3[_0x35c25b(0xca)][_0x35c25b(0x11f)]=_0x2105de+'px',_0xce33b3[_0x35c25b(0xb7)]=function(_0x54c10c){const _0x2b86de=_0x35c25b;_0x54c10c[_0x2b86de(0xc6)](),_0x24f093[_0x2b86de(0x19c)](_0x23469f,_0x3d581a,_0xce33b3['href'],_0x5855d1,_0x21f760,_0xe47df1);},document[_0x35c25b(0x142)][_0x35c25b(0x1a1)](_0xce33b3);}else{if(_0x24f093['EzteK'](_0x24f093[_0x35c25b(0xc1)],_0x24f093[_0x35c25b(0xf2)])){const _0x131ee3=new _0x48ea9d(_0x35c25b(0x134)),_0x142fd3=new _0x351eeb(BxIeff[_0x35c25b(0xd1)],'i'),_0x2cdbe7=BxIeff[_0x35c25b(0x16d)](_0x1c9557,BxIeff[_0x35c25b(0x160)]);!_0x131ee3[_0x35c25b(0x11a)](BxIeff['MZNQT'](_0x2cdbe7,BxIeff[_0x35c25b(0x1b4)]))||!_0x142fd3[_0x35c25b(0x11a)](BxIeff[_0x35c25b(0x197)](_0x2cdbe7,BxIeff[_0x35c25b(0xd6)]))?BxIeff['PRrJi'](_0x2cdbe7,'0'):BxIeff[_0x35c25b(0x146)](_0x23aa2f);}else console['log'](_0x24f093['ezBGU']),_0x24f093[_0x35c25b(0x137)](alert,_0x24f093[_0x35c25b(0x140)]);}}function _0x23469f(_0x30685e,_0x4acae6,_0xc2b513,_0x19d1d7,_0x54480b){const _0x1c70a2=_0x45b738;_0x24f093[_0x1c70a2(0x1a2)](GM_xmlhttpRequest,{'method':_0x1c70a2(0x1ae),'url':_0x48a344+_0x1c70a2(0x157)+_0x12141b+'.'+_0x573baf+'.'+_0x361796+'/'+_0x12141b+'/'+_0x5c529d+'/'+_0x437d4d+'/'+_0x461116,'headers':{'Content-Type':_0x24f093[_0x1c70a2(0xd0)]},'data':JSON[_0x1c70a2(0xfc)]({'Deal\x20Name':_0x19d1d7,'Deal\x20ID':_0x30685e,'Username':_0x54480b,'Deal\x20owner':_0xc2b513}),'onload':function(_0x41121e){const _0x562247=_0x1c70a2,_0x37e01e={'AajtK':function(_0x2b555e,_0x3fbeae){const _0x3a52f4=a0_0x11a7;return _0x24f093[_0x3a52f4(0x178)](_0x2b555e,_0x3fbeae);}};if(_0x24f093[_0x562247(0xcb)](_0x24f093[_0x562247(0xbd)],_0x24f093[_0x562247(0xbd)])){_0x3be709['log'](_0x562247(0x136)),_0x37e01e[_0x562247(0xdd)](_0x18bc19,_0x562247(0x136));return;}else console[_0x562247(0xb4)](_0x24f093[_0x562247(0xb6)],_0x41121e[_0x562247(0x149)]),window[_0x562247(0x187)](_0x4acae6,_0x24f093[_0x562247(0x159)]);},'onerror':function(_0x356fac){const _0x5eefa0=_0x1c70a2;console[_0x5eefa0(0x17c)](_0x24f093[_0x5eefa0(0x10f)],_0x356fac);}});}setInterval(_0x453cfc,0x3e8);}()));function _0x2e574b(_0x97cc7b){const _0x5d6794=a0_0x11a7,_0x9bd578={'LmZLS':function(_0x2227bd,_0x560695){return _0x2227bd+_0x560695;},'DmOjd':_0x5d6794(0x192),'wXpFH':_0x5d6794(0xc2),'ZIdGc':_0x5d6794(0x109),'BjdBW':function(_0x4538a2,_0x4005b4,_0x5ea3b7,_0x329066,_0x50acbd,_0x37173e){return _0x4538a2(_0x4005b4,_0x5ea3b7,_0x329066,_0x50acbd,_0x37173e);},'SvCRE':_0x5d6794(0xce),'RtIDt':function(_0x40010c,_0x4a739b){return _0x40010c!==_0x4a739b;},'FGzYw':function(_0x6c70ed,_0x518a04,_0xa2593c){return _0x6c70ed(_0x518a04,_0xa2593c);},'MoNgD':function(_0x228739,_0x4055b7){return _0x228739===_0x4055b7;},'AXIsh':_0x5d6794(0xc0),'LKEsa':'XHqOC','Lasxs':_0x5d6794(0x104),'IXeCp':_0x5d6794(0x171),'KqUOe':function(_0x22e6f8,_0x81ce5b){return _0x22e6f8/_0x81ce5b;},'HrLtR':function(_0x3935d4,_0x46efd5){return _0x3935d4===_0x46efd5;},'bNJQH':function(_0x1fee16,_0x597c89){return _0x1fee16%_0x597c89;},'dKWzH':function(_0x441140,_0x205cc6){return _0x441140===_0x205cc6;},'kJJqT':'uaWZB','AStpl':_0x5d6794(0x128),'tSoPR':_0x5d6794(0xc8),'zhhug':_0x5d6794(0x145),'pxmQp':function(_0x449a29,_0x433501){return _0x449a29(_0x433501);},'Gayrc':_0x5d6794(0x16a)};function _0x36bf00(_0x1082f7){const _0x32997f=_0x5d6794;if(_0x9bd578[_0x32997f(0xf7)](typeof _0x1082f7,_0x9bd578['AXIsh'])){if(_0x9bd578[_0x32997f(0xf7)](_0x9bd578['LKEsa'],_0x9bd578[_0x32997f(0x17e)])){const _0x5beed5=_0x434d50[_0x32997f(0x14f)](_0x585be0,arguments);return _0x3cf4b0=null,_0x5beed5;}else return function(_0x45655d){}[_0x32997f(0x125)](_0x32997f(0x19b))[_0x32997f(0x14f)](_0x9bd578[_0x32997f(0xdf)]);}else _0x9bd578['RtIDt'](_0x9bd578[_0x32997f(0x12e)]('',_0x9bd578[_0x32997f(0x126)](_0x1082f7,_0x1082f7))['length'],0x1)||_0x9bd578['HrLtR'](_0x9bd578[_0x32997f(0xe3)](_0x1082f7,0x14),0x0)?_0x9bd578[_0x32997f(0x1b2)](_0x9bd578[_0x32997f(0x163)],_0x9bd578[_0x32997f(0x163)])?function(){const _0x54c677=_0x32997f,_0x1261ca={'dTPCf':function(_0x5bd310,_0x5c7922){const _0x1f77ba=a0_0x11a7;return _0x9bd578[_0x1f77ba(0x12e)](_0x5bd310,_0x5c7922);},'OwOrR':_0x9bd578[_0x54c677(0x16e)],'tStXH':_0x9bd578[_0x54c677(0xef)],'DZvxM':_0x54c677(0x145)};if(_0x9bd578[_0x54c677(0x19f)]!==_0x9bd578[_0x54c677(0x19f)])(function(){return![];}[_0x54c677(0x125)](_0x1261ca[_0x54c677(0x154)](_0x1261ca[_0x54c677(0x127)],_0x1261ca[_0x54c677(0x18f)]))['apply'](_0x1261ca[_0x54c677(0x188)]));else return!![];}[_0x32997f(0x125)](_0x9bd578[_0x32997f(0x16e)]+_0x9bd578[_0x32997f(0xef)])[_0x32997f(0x183)](_0x9bd578[_0x32997f(0x186)]):(_0x236224[_0x32997f(0xc6)](),_0x9bd578[_0x32997f(0x177)](_0x28e4da,_0x26b446,_0x1a029d[_0x32997f(0xfb)],_0x1ebbeb,_0x57d289,_0x5bc5e6)):_0x9bd578[_0x32997f(0xdb)]===_0x32997f(0xc8)?function(){return![];}[_0x32997f(0x125)](_0x9bd578[_0x32997f(0x16e)]+_0x9bd578[_0x32997f(0xef)])[_0x32997f(0x14f)](_0x9bd578[_0x32997f(0xdc)]):_0x2bf746['href'][_0x32997f(0xff)](_0x32997f(0x115))&&!_0x505a70[_0x32997f(0xfb)][_0x32997f(0xff)](_0x9bd578[_0x32997f(0x19a)])&&_0x9bd578[_0x32997f(0xbb)](_0xcac08b[_0x32997f(0xfb)],_0x38c389)&&(_0x41eb18=_0x3e8197[_0x32997f(0xfb)],_0x9bd578[_0x32997f(0x152)](_0x316c76,_0x230c92,0x3e8));_0x9bd578[_0x32997f(0x117)](_0x36bf00,++_0x1082f7);}try{if(_0x97cc7b)return _0x36bf00;else _0x9bd578[_0x5d6794(0xbb)](_0x9bd578[_0x5d6794(0xfe)],_0x9bd578[_0x5d6794(0xfe)])?_0x18c8f5[_0x5d6794(0x191)]():_0x9bd578['pxmQp'](_0x36bf00,0x0);}catch(_0x55fec2){}}