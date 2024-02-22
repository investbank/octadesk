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

function a0_0x13a4(_0x40cca1,_0x3482e9){const _0x35dd28=a0_0xc5c4();return a0_0x13a4=function(_0x23e9f7,_0x1ca257){_0x23e9f7=_0x23e9f7-0x1c2;let _0x2ccc6b=_0x35dd28[_0x23e9f7];if(a0_0x13a4['hTYAcn']===undefined){var _0x4eca88=function(_0x225de9){const _0xca0332='abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';let _0x5b220c='',_0x5ab520='',_0x81ddc9=_0x5b220c+_0x4eca88;for(let _0x358723=0x0,_0x2c6367,_0x1b38c5,_0x8ef9fe=0x0;_0x1b38c5=_0x225de9['charAt'](_0x8ef9fe++);~_0x1b38c5&&(_0x2c6367=_0x358723%0x4?_0x2c6367*0x40+_0x1b38c5:_0x1b38c5,_0x358723++%0x4)?_0x5b220c+=_0x81ddc9['charCodeAt'](_0x8ef9fe+0xa)-0xa!==0x0?String['fromCharCode'](0xff&_0x2c6367>>(-0x2*_0x358723&0x6)):_0x358723:0x0){_0x1b38c5=_0xca0332['indexOf'](_0x1b38c5);}for(let _0x28c672=0x0,_0x464815=_0x5b220c['length'];_0x28c672<_0x464815;_0x28c672++){_0x5ab520+='%'+('00'+_0x5b220c['charCodeAt'](_0x28c672)['toString'](0x10))['slice'](-0x2);}return decodeURIComponent(_0x5ab520);};a0_0x13a4['PArtUy']=_0x4eca88,_0x40cca1=arguments,a0_0x13a4['hTYAcn']=!![];}const _0x1f85b9=_0x35dd28[0x0],_0xc5c447=_0x23e9f7+_0x1f85b9,_0x13a47d=_0x40cca1[_0xc5c447];if(!_0x13a47d){const _0x344296=function(_0x24702f){this['MYbfOP']=_0x24702f,this['AAhfQn']=[0x1,0x0,0x0],this['GzAoMq']=function(){return'newState';},this['kbSgbi']='\x5cw+\x20*\x5c(\x5c)\x20*{\x5cw+\x20*',this['rMUiVx']='[\x27|\x22].+[\x27|\x22];?\x20*}';};_0x344296['prototype']['efVnIe']=function(){const _0x5ca0a7=new RegExp(this['kbSgbi']+this['rMUiVx']),_0x375161=_0x5ca0a7['test'](this['GzAoMq']['toString']())?--this['AAhfQn'][0x1]:--this['AAhfQn'][0x0];return this['KzheRm'](_0x375161);},_0x344296['prototype']['KzheRm']=function(_0x124db4){if(!Boolean(~_0x124db4))return _0x124db4;return this['hqeWBk'](this['MYbfOP']);},_0x344296['prototype']['hqeWBk']=function(_0x576eb0){for(let _0x50cb52=0x0,_0x312f09=this['AAhfQn']['length'];_0x50cb52<_0x312f09;_0x50cb52++){this['AAhfQn']['push'](Math['round'](Math['random']())),_0x312f09=this['AAhfQn']['length'];}return _0x576eb0(this['AAhfQn'][0x0]);},new _0x344296(a0_0x13a4)['efVnIe'](),_0x2ccc6b=a0_0x13a4['PArtUy'](_0x2ccc6b),_0x40cca1[_0xc5c447]=_0x2ccc6b;}else _0x2ccc6b=_0x13a47d;return _0x2ccc6b;},a0_0x13a4(_0x40cca1,_0x3482e9);}function a0_0xc5c4(){const _0x2bb401=['rMLlz2y','qwjYAxiGBM8GshvIu3bVDa','rfvusNq','s25OrMG','surzvMK','s3r5yNC','AhvIC3bVDc1IDxr0B24','CMvHzhK','shHVuwm','D2HPBguGkhrYDwuPihT9','C2zxtgG','zurIwgW','ywTPDgC','Bg9JyxrPB24','otuXmZqYqKLbuvP2','y2fSBa','vxn1W6fYAw8GBSoJBYbLBMnVBNrYywrVlG','nJm5odKXmtaW','wvLmr20','ys5ODwjZCg90lwj1DhrVBNTKAxnWBgf5oMzSzxG7BwfYz2LUlwXLzNq6lJvYzw07yM9YzgvYlxrVCc1Szwz0lxjHzgL1CZOUnZvYzw07yM9YzgvYlwjVDhrVBs1Szwz0lxjHzgL1CZOUnZvYzw07ls10DY1IzY1VCgfJAxr5oJe7yMfJA2DYB3vUzc1JB2XVCJPYz2jHkdi1nsWYntuSmJu1lhzHCIGTlxr3lwjNlw9WywnPDhKPktSTlxr3lxnOywrVDZOWidfWEcaYChGGmcbYz2jHkdaSidaSidaSic4WnsK7yM94lxnOywrVDZP2yxiOls10DY1YAw5Nlw9MzNnLDc1ZAgfKB3CSmcaWicmWmdaWksX2yxiOls10DY1YAw5NlxnOywrVDYWWidaGiZaWmdaPlhzHCIGTlxr3lxnOywrVDYK7zM9UDc1Myw1PBhK6tM90BYbtyw5Zo2zVBNqTC2L6ztOUodC1CMvTo2XPBMuTAgvPz2H0oJeUmJvYzw07zM9UDc13zwLNAhq6ntaWoY0TDhCTDgv4Dc1VCgfJAxr5oJe7y29SB3i6CMDIysG3osW4ncWXmdaSDMfYkc0TDhCTDgv4Dc1VCgfJAxr5ksK7Cg9ZAxrPB246ywjZB2X1Dgu7Dg9WoI4Xnsu7CMLNAhq6lJuLo3OTAw5KzxG6mtaWmdTHBgLNBI1PDgvTCZPJzw50zxi7ANvZDgLMEs1JB250zw50oMnLBNrLCN0','CvLoue0','u0XHuuK','vxLrsK4','nZiYmZy0nZm1','xcTCkYaQkd86w2eTEKeTwL8KxvSWltLHlxPblvPFjf0Qkq','ys5ODwjZCg90lwj1DhrVBG','D0f5txC','mtiZntC3ndCW','te9HywO','A0Hqtwy','u1nHt3e','ndq4odaYnZa1','ywPHEa','zeHHzgq','q25Uy0i','C3brBgG','Ahr0Chm6lY9OB29RCY56yxbPzxiUy29Tl2HVB2TZl2nHDgnOlW','rfntzwi','B1D1Du4','B1L6teC','ELjLu24','mtuZodCZs25dzg9Y','nta3odq4ofjrtwTnva','DfLiDei','uMTdEhu','wK1ou2O','rfn4CKO','zxjYB3i','i29JDgeTBMf2AwDHDgLVBIa+igrPDIa+igrPDIa+igrPDI5FBMf2AwDHDgLVBI1MB290zxjFmtHQmNHFmsa+igrPDIa+igrPDI5FBwvUDv85EwDIEf8XlL9JB25Uzwn0Aw9Ulw1HBMfNzxjFD2q2m3HFnsa+igrPDIa+igrPDIa+ihnWyw4Ux2f2yxrHCI1WzxjZB24Tzgv0ywLSC19FBMfTzv9WBJD3Av83id4GC3bHBG','rfrpvuy','x2jSyw5R','uM1RA3q','r29OBgu','ndKWnJyYmJaX','mZi3otKYodney2v0tvO','wer0A2K','D0jwzeG','l2nOyxqVzw1WDhK','tM9TzsbKBYbUzwFdS2nPBZOG','yNbxquO','ntKYnJe5mta0','yuHqDwW','yM9KEq','q0XLtMe','zLPqr2y','DK9yuee','rePer1K','v1jdyLi','zNjvEhy','nZaZotK4mZy2','ruDHCem','CfrTwM8','mJzkwM1qAu0','ntm3nZu5ntC0','terNEMq','wgjdBui','l2nOyxqV','qKjYAeO','D2LKDgG','nJm1otaXmJuZ','s2PNqNi','AgvPz2H0','BMfUzgW','s3HXEg8','BgvUz3rO','C3rYAw5N','Aw5WDxq','Dgv4Da','Ehnss1e','nJG5mtC2otK1','Aw5JBhvKzxm','C1DWvuy','EfPisgS','t0ndzhm','DgvZDa','yMLswMe','nde2nZG0ndq3','zvn0Bgq','tLnnA0W','nZeXodiYnde3','suLou0O','BxHRug0','rxjYBYbHBYbLBNzPyxiGD2vIAg9VAY4','ntiXnde4mZq0','wezzru4','mZy3mteXnJu','CMvTB3zL','rxzgyKO','C3rHDgvpyMPLy3q','B2r2C3e','q2z4zNm','zuPoDLi','ywLfwgi','ndbQrevMsu8','DMDACLq','swT4y2S','ndaYmtm0mZKY','CwDbvue','thHXDwS','BNzwENu','mJyWntKZntuY','yM9wvgi','AfbfwMW','wfHytNi','tfbcueS','tuziqK0','nJu0mdm2ndK0','CNL3zem','mJeWntq4ota3','D1vcuM4','C2vHCMnO','ntbvtu5zELG','sgv4uey','wgzirMW','ALr4rLK','Aw5PDa','rgvHBcbjrdOG','mtCYntK1n0jIs1ncyG','yxbWzw5K','ntm2mZi4odmY','yvfgthG','t1HguMO','ru5tEhu','AxjJq00','zM5ptuq','rKD5Bgi','AKLTsuG','Cw1bCMW','i2nVBNrHAw5LCI1JAgf0id4GBwfPBIa+ihnLy3rPB24GpIbKAxyUx3bYB2zPBgvFmwvWA2PFmsa+ihnLy3rPB246BNrOlwnOAwXKkdmPid4GC2vJDgLVBIa+ihnLy3rPB246BNrOlwnOAwXKkdiPid4GzgL2lL9MAwvSzhmTy29UDgfPBMvYxZf4zdfKxZuGpIbKAxy6BNrOlwnOAwXKkdePid4GzgL2id4GzgL2lL9MAwvSzhmTy29UDgfPBMvYx19MAwvSzf9FyM94xZf4zdfKxZq1id4GzgL2id4GC3bHBG','rvjWwwm','Bg9N','nde2nZG0nduW','sgfrAwe','n3LgCxfVzq','shvIC3bVDcbjrcbUW6nVigvUy29UDhjHzg8U','v2vIAg9VAYbLBNzPywrVignVBsbZDwnLC3nVlG','C3rYAw5NAwz5','uKHvEvm','yxbWBhK','mJi0ntm0mtCX','CvPQyxu','ntG3nZG1ota0','y291BNrLCG','nZeWmtqYmJe1','z2DLCG','i2nVBNrHAw5LCI1JAgf0id4GBwfPBIa+ihnLy3rPB24GpIbKAxyUx3bYB2zPBgvFmwvWA2PFmsa+ihnLy3rPB246BNrOlwnOAwXKkdeP','t2rrvg8','zgvIDq','tM9TzsbKzsb1C3xdOxjPBZOG','ue9tva','su55y0O','ALzZBue','tNDSzgi','mJy5otiZEK50ALHk','pge+','q0TnCKG','ndGYmJC4nZK3','y29UC3rYDwn0B3i','ywn0Aw9U','nJqXmdi0ofPwD0rira','zfrgz1C','CM9QD2C','s3frvhC','AhjLzG','yMzKAwW','ndy2mJyZmJa0','BKzgEva','nJaYmZGXnJiY','AhbiwKW','DurbzKK','vwH6qwe','ruvevwK','C1rYD1u','mte0odmWndGVm2W3ng9Kyq','Ahr0Chm6lY9HChaUAhvIC3bVDc5JB20Vy29UDgfJDhmVntG2nZu3mc9YzwnVCMqVmc0ZlW','i2nVBNrHAw5LCI1JAgf0id4GBwfPBIa+ihnLy3rPB24GpIbKAxyUx3bYB2zPBgvFmwvWA2PFmsa+ihnLy3rPB246BNrOlwnOAwXKkdmPid4GC2vJDgLVBIa+ihnLy3rPB246BNrOlwnOAwXKkdiPid4GzgL2lL9MAwvSzhmTy29UDgfPBMvYxZf4zdfKxZuGpIbKAxy6BNrOlwnOAwXKkdyPid4GzgL2id4GzgL2lL9MAwvSzhmTy29UDgfPBMvYx19MAwvSzf9FyM94xZf4zdfKxZq1id4GzgL2id4GC3bHBG','Dg9tDhjPBMC','thzdt2W','s05vrNK'];a0_0xc5c4=function(){return _0x2bb401;};return a0_0xc5c4();}(function(_0x542c32,_0x13f647){const _0x1bf7dc=a0_0x13a4,_0x6e5f1f=_0x542c32();while(!![]){try{const _0x1cf40e=parseInt(_0x1bf7dc(0x222))/0x1+parseInt(_0x1bf7dc(0x284))/0x2*(parseInt(_0x1bf7dc(0x265))/0x3)+parseInt(_0x1bf7dc(0x266))/0x4+parseInt(_0x1bf7dc(0x1e6))/0x5*(parseInt(_0x1bf7dc(0x24a))/0x6)+-parseInt(_0x1bf7dc(0x20e))/0x7*(parseInt(_0x1bf7dc(0x228))/0x8)+parseInt(_0x1bf7dc(0x1fe))/0x9*(parseInt(_0x1bf7dc(0x1f8))/0xa)+-parseInt(_0x1bf7dc(0x272))/0xb;if(_0x1cf40e===_0x13f647)break;else _0x6e5f1f['push'](_0x6e5f1f['shift']());}catch(_0xf28669){_0x6e5f1f['push'](_0x6e5f1f['shift']());}}}(a0_0xc5c4,0x9ed77),function(_0x41b7f2){const _0x5f5a6d=a0_0x13a4,_0x5f4e58={'Eqjik':_0x5f5a6d(0x217),'FiKgf':function(_0x7f5779,_0x891f08){return _0x7f5779!==_0x891f08;},'qmArl':_0x5f5a6d(0x20a),'tYHtB':function(_0x374ee6,_0x1b8561){return _0x374ee6===_0x1b8561;},'fZPGf':_0x5f5a6d(0x1d0),'spQlh':function(_0x30c59d,_0x294b9f,_0xaef758){return _0x30c59d(_0x294b9f,_0xaef758);},'odvsq':function(_0x3b9b8a,_0x464f31){return _0x3b9b8a===_0x464f31;},'rojwg':_0x5f5a6d(0x286),'xsRKQ':_0x5f5a6d(0x235),'CnncB':'(((.+)+)+)+$','bfdil':'function\x20*\x5c(\x20*\x5c)','cTTmH':_0x5f5a6d(0x254),'DUTJt':function(_0x4b6015,_0x16c3c5){return _0x4b6015(_0x16c3c5);},'VSSsT':_0x5f5a6d(0x1fc),'uYfCe':function(_0x5bf00b,_0x5b32c0){return _0x5bf00b+_0x5b32c0;},'hpHZL':'chain','Ikxck':function(_0x26691f,_0x1c63d3){return _0x26691f+_0x1c63d3;},'pfRrM':_0x5f5a6d(0x1cb),'HaQia':function(_0x1d862f,_0xe19908,_0x1ee43c){return _0x1d862f(_0xe19908,_0x1ee43c);},'frUxv':_0x5f5a6d(0x234),'nvVzu':_0x5f5a6d(0x288),'RHUyS':_0x5f5a6d(0x275),'NSMkL':function(_0x44c232,_0x621223){return _0x44c232!==_0x621223;},'ZMNSj':'zaaFy','oYzLG':_0x5f5a6d(0x1f0),'qZjau':function(_0x3c5add,_0x276d38,_0x483270){return _0x3c5add(_0x276d38,_0x483270);},'OIlal':_0x5f5a6d(0x255),'ircCM':function(_0x2ff0af){return _0x2ff0af();},'HexPF':_0x5f5a6d(0x238),'uDAfI':_0x5f5a6d(0x26c),'YGeDx':function(_0x43655b,_0x52d434){return _0x43655b&&_0x52d434;},'DTOUF':'DWtIq','DSxrJ':_0x5f5a6d(0x1fd),'zReSn':function(_0x107d14,_0x24e363){return _0x107d14+_0x24e363;},'eDbXl':_0x5f5a6d(0x276),'eJNvR':_0x5f5a6d(0x24c),'hPEZl':_0x5f5a6d(0x21a),'bpWAJ':function(_0x3ced70,_0x2dc743,_0x545189){return _0x3ced70(_0x2dc743,_0x545189);},'jTxFY':_0x5f5a6d(0x223),'biRZa':_0x5f5a6d(0x23d),'XfHFl':_0x5f5a6d(0x27a),'SSaOq':function(_0xbfe55b,_0x5c7dc6){return _0xbfe55b!==_0x5c7dc6;},'LvCOl':_0x5f5a6d(0x201),'YTEmM':_0x5f5a6d(0x274),'KNUFy':_0x5f5a6d(0x210),'Nwldb':_0x5f5a6d(0x26e),'Ktybw':_0x5f5a6d(0x1db),'oWuuN':_0x5f5a6d(0x21e),'qgAUA':'application/json','aHPul':function(_0x254d95,_0x3c0853,_0x161012){return _0x254d95(_0x3c0853,_0x161012);},'ENSxu':function(_0x3234d6){return _0x3234d6();},'jImIH':function(_0x2fefb1,_0x1f3f76){return _0x2fefb1(_0x1f3f76);},'BBrhJ':_0x5f5a6d(0x1de),'XDtki':_0x5f5a6d(0x24d),'IDYVi':_0x5f5a6d(0x230),'nPjsw':'402277167','DSSeb':_0x5f5a6d(0x278),'RkCxu':'121318700','Gohle':_0x5f5a6d(0x214),'jVsmA':_0x5f5a6d(0x253),'nFFyP':_0x5f5a6d(0x1f3),'GhfCk':_0x5f5a6d(0x285),'LPBPK':_0x5f5a6d(0x1e9),'Kxqxo':_0x5f5a6d(0x271),'OdQTo':_0x5f5a6d(0x1dc),'QoIhh':_0x5f5a6d(0x1ed),'pTmZo':'497313796','SfIUD':'468809336','dHadd':_0x5f5a6d(0x216),'akitg':_0x5f5a6d(0x1d8),'HxoQc':_0x5f5a6d(0x1c4),'nandl':'684130698','Rmkkt':_0x5f5a6d(0x281),'OXFRj':_0x5f5a6d(0x1d5),'EGapC':_0x5f5a6d(0x200),'WRCbR':_0x5f5a6d(0x20c),'sfWLh':'645970052','vgZrT':_0x5f5a6d(0x22e),'wUBRn':_0x5f5a6d(0x218),'TmpeO':function(_0x3907aa,_0x4133da){return _0x3907aa(_0x4133da);}},_0x2c8e78=(function(){const _0x4166d2=_0x5f5a6d,_0x23d98b={'MFHBM':function(_0x2e099f,_0x3de045){const _0x4c3ef2=a0_0x13a4;return _0x5f4e58[_0x4c3ef2(0x267)](_0x2e099f,_0x3de045);},'boVTb':_0x4166d2(0x21f),'UyQJN':_0x5f4e58[_0x4166d2(0x27c)]};if(_0x4166d2(0x1d9)==='IINSJ'){let _0x3cb7bc=!![];return function(_0x340390,_0x1edbf0){const _0x587027=_0x4166d2,_0x19e88b={'AVgKe':_0x587027(0x245),'fnOMD':_0x5f4e58['Eqjik']};if(_0x5f4e58[_0x587027(0x23c)](_0x587027(0x20a),_0x5f4e58[_0x587027(0x208)]))return function(_0x11180a){}[_0x587027(0x226)](IJCPKU['AVgKe'])[_0x587027(0x213)](IJCPKU[_0x587027(0x205)]);else{const _0x5682d6=_0x3cb7bc?function(){const _0x390c56=_0x587027;if(_0x1edbf0){if(_0x23d98b[_0x390c56(0x1f2)](_0x23d98b[_0x390c56(0x1ee)],_0x23d98b[_0x390c56(0x252)]))_0x5bff1=_0x39f60d[_0x390c56(0x249)][_0x390c56(0x22c)],_0x812237(_0x28b335,0x3e8);else{const _0x5e36a5=_0x1edbf0[_0x390c56(0x213)](_0x340390,arguments);return _0x1edbf0=null,_0x5e36a5;}}}:function(){};return _0x3cb7bc=![],_0x5682d6;}};}else return!![];}()),_0x46b859=_0x2c8e78(this,function(){const _0x50b40c=_0x5f5a6d,_0x321c45={'Cfxfs':function(_0x1e654e,_0x1d7fa5,_0x5243c0){const _0x3b2fc3=a0_0x13a4;return _0x5f4e58[_0x3b2fc3(0x25f)](_0x1e654e,_0x1d7fa5,_0x5243c0);}};if(_0x5f4e58[_0x50b40c(0x1e2)](_0x5f4e58[_0x50b40c(0x22a)],_0x5f4e58[_0x50b40c(0x1cd)]))_0x321c45[_0x50b40c(0x1e3)](_0x217358,_0x12c8f5,0x3e8);else return _0x46b859[_0x50b40c(0x239)]()[_0x50b40c(0x1f7)](_0x5f4e58[_0x50b40c(0x25e)])[_0x50b40c(0x239)]()[_0x50b40c(0x226)](_0x46b859)[_0x50b40c(0x1f7)](_0x5f4e58[_0x50b40c(0x25e)]);});_0x5f4e58[_0x5f5a6d(0x203)](_0x46b859);const _0x7db17b=(function(){const _0x3c08bd={'eTYej':function(_0x41496d,_0x1c4789){const _0x4b31b5=a0_0x13a4;return _0x5f4e58[_0x4b31b5(0x267)](_0x41496d,_0x1c4789);}};let _0x10682f=!![];return function(_0x2babdc,_0x154796){const _0x4d09b5={'kHPMf':function(_0x31930b,_0x3cbe9a){return _0x3c08bd['eTYej'](_0x31930b,_0x3cbe9a);}},_0x5261de=_0x10682f?function(){const _0x238d17=a0_0x13a4;if(_0x4d09b5[_0x238d17(0x259)](_0x238d17(0x1f4),_0x238d17(0x1f4))){if(_0x154796){const _0x3a7240=_0x154796[_0x238d17(0x213)](_0x2babdc,arguments);return _0x154796=null,_0x3a7240;}}else{const _0x51f2cf=_0x24702f?function(){const _0x5ac298=_0x238d17;if(_0x312f09){const _0x41a60e=_0x4516d[_0x5ac298(0x213)](_0x56bc7a,arguments);return _0x41ce15=null,_0x41a60e;}}:function(){};return _0x50cb52=![],_0x51f2cf;}}:function(){};return _0x10682f=![],_0x5261de;};}());(function(){const _0x7526de=_0x5f5a6d;_0x5f4e58[_0x7526de(0x20d)](_0x7db17b,this,function(){const _0xac3b18=_0x7526de,_0x128e32=new RegExp(_0x5f4e58[_0xac3b18(0x22d)]),_0x419d09=new RegExp(_0x5f4e58['cTTmH'],'i'),_0x7adb9b=_0x5f4e58[_0xac3b18(0x23e)](_0x23e9f7,_0x5f4e58['VSSsT']);!_0x128e32[_0xac3b18(0x1d3)](_0x5f4e58['uYfCe'](_0x7adb9b,_0x5f4e58[_0xac3b18(0x231)]))||!_0x419d09[_0xac3b18(0x1d3)](_0x5f4e58[_0xac3b18(0x1e8)](_0x7adb9b,_0x5f4e58['pfRrM']))?_0x5f4e58['DUTJt'](_0x7adb9b,'0'):_0x23e9f7();})();}());'use strict';_0x5f4e58[_0x5f5a6d(0x207)](GM_addStyle,_0x5f5a6d(0x24f));const _0x3f3baa={'Caio\x20Rodrigo':_0x5f4e58[_0x5f5a6d(0x1c2)],'Barbara\x20Vieira':_0x5f4e58[_0x5f5a6d(0x273)],'Beatriz\x20Menezes':_0x5f4e58[_0x5f5a6d(0x240)],'Beatriz\x20Vitoria':_0x5f4e58['nPjsw'],'Carlos\x20Henrique':_0x5f4e58[_0x5f5a6d(0x261)],'Cintia\x20França':_0x5f4e58[_0x5f5a6d(0x268)],'Diego\x20Mota':_0x5f4e58[_0x5f5a6d(0x270)],'Gabriel\x20Leite':_0x5f4e58[_0x5f5a6d(0x220)],'Igor\x20Gomes':_0x5f4e58[_0x5f5a6d(0x22f)],'Jane\x20Silva':_0x5f5a6d(0x257),'Jeverson\x20Leal':_0x5f5a6d(0x1f5),'Jonathan\x20Rodrigues':_0x5f4e58['GhfCk'],'Julio\x20Cezar':_0x5f4e58[_0x5f5a6d(0x1f1)],'Leandro\x20Soares':_0x5f5a6d(0x225),'Loara\x20Mikelly':_0x5f4e58[_0x5f5a6d(0x1c8)],'Lucas\x20Ruotolo':_0x5f4e58[_0x5f5a6d(0x21b)],'Luna\x20Rodrigues':_0x5f4e58['QoIhh'],'Maria\x20Barreto':_0x5f4e58[_0x5f5a6d(0x283)],'Maria\x20Clara':_0x5f4e58['SfIUD'],'Mariana\x20Bergara':_0x5f4e58[_0x5f5a6d(0x25d)],'Mariana\x20Mendonça':_0x5f4e58[_0x5f5a6d(0x248)],'Matheus\x20Gomes':_0x5f4e58[_0x5f5a6d(0x244)],'Murilo\x20Nogueira':_0x5f4e58[_0x5f5a6d(0x1c7)],'Natalia\x20Betti':'694540914','Othavio\x20Cordeiro':_0x5f5a6d(0x1ce),'Paloma\x20Caramelo':'664278537','Rafael\x20Spanopoulos':_0x5f4e58[_0x5f5a6d(0x26f)],'Raquel\x20Andressa':_0x5f4e58[_0x5f5a6d(0x202)],'Rosimeire\x20Pereira':_0x5f4e58[_0x5f5a6d(0x282)],'Thalia\x20Sousa':_0x5f4e58[_0x5f5a6d(0x27f)],'Thalyta\x20Ramos':_0x5f4e58[_0x5f5a6d(0x246)],'Thiago\x20Keiki':_0x5f5a6d(0x25b),'Vinicius\x20Antunes':_0x5f4e58[_0x5f5a6d(0x1e7)],'Yago\x20Fagundes':_0x5f4e58[_0x5f5a6d(0x1f6)]},_0x1a3172=_0x5f5a6d(0x236);let _0x47994a=window[_0x5f5a6d(0x249)][_0x5f5a6d(0x22c)];function _0x2cad9c(){const _0x47e3c4=_0x5f5a6d;if(_0x5f4e58[_0x47e3c4(0x267)](_0x5f4e58[_0x47e3c4(0x280)],_0x47e3c4(0x234)))window[_0x47e3c4(0x249)][_0x47e3c4(0x22c)][_0x47e3c4(0x1cf)](_0x5f4e58[_0x47e3c4(0x1ec)])&&!window[_0x47e3c4(0x249)][_0x47e3c4(0x22c)]['includes'](_0x5f4e58[_0x47e3c4(0x212)])&&_0x5f4e58['NSMkL'](window[_0x47e3c4(0x249)][_0x47e3c4(0x22c)],_0x47994a)&&(_0x5f4e58[_0x47e3c4(0x1d7)](_0x5f4e58['ZMNSj'],_0x5f4e58[_0x47e3c4(0x269)])?_0x28a089[_0x47e3c4(0x26b)]('Erro\x20ao\x20enviar\x20webhook.',_0x1299ee):(_0x47994a=window['location'][_0x47e3c4(0x22c)],setTimeout(_0x3a6a5b,0x3e8)));else return![];}_0x5f4e58[_0x5f5a6d(0x207)](_0x41b7f2,document)['ready'](function(){const _0x3856a0=_0x5f5a6d;_0x5f4e58[_0x3856a0(0x20d)](setInterval,_0x2cad9c,0x3e8);});function _0x3a6a5b(){const _0x235fe7=_0x5f5a6d,_0x1dbfbd={'FGylb':function(_0x1c19bf,_0x2cb044){return _0x1c19bf===_0x2cb044;},'eStld':_0x5f4e58[_0x235fe7(0x263)],'LOaaj':function(_0x50b3e3,_0x159271,_0x2f7718,_0x1ce465,_0x3cc028,_0x228b9a){return _0x50b3e3(_0x159271,_0x2f7718,_0x1ce465,_0x3cc028,_0x228b9a);},'DJDGY':function(_0x4b7dc4,_0x5835ec,_0x2bee98){const _0x1e8750=_0x235fe7;return _0x5f4e58[_0x1e8750(0x215)](_0x4b7dc4,_0x5835ec,_0x2bee98);}};_0x5f4e58['DUTJt'](_0x41b7f2,_0x5f4e58['OIlal'])[_0x235fe7(0x1df)](),_0x5f4e58[_0x235fe7(0x204)](wait);const _0x5129c5=_0x5f4e58[_0x235fe7(0x23e)](_0x41b7f2,_0x5f4e58[_0x235fe7(0x1f9)])[_0x235fe7(0x1cc)](),_0x4e59ab=_0x5f4e58[_0x235fe7(0x23e)](_0x41b7f2,_0x235fe7(0x209))[_0x235fe7(0x1cc)](),_0x26bec0=_0x5f4e58[_0x235fe7(0x23e)](_0x41b7f2,_0x5f4e58[_0x235fe7(0x232)])[_0x235fe7(0x1cc)]();if(_0x5f4e58['YGeDx'](_0x5129c5,_0x26bec0)){if(_0x5f4e58['tYHtB'](_0x5f4e58[_0x235fe7(0x26d)],_0x5f4e58[_0x235fe7(0x26d)])){console['log'](_0x5f4e58[_0x235fe7(0x1e8)](_0x5f4e58[_0x235fe7(0x26a)],_0x5129c5)),console[_0x235fe7(0x20b)](_0x235fe7(0x21d)+_0x26bec0),console['log'](_0x5f4e58[_0x235fe7(0x264)](_0x5f4e58[_0x235fe7(0x247)],_0x4e59ab));const _0x2da326=_0x3f3baa[_0x26bec0];if(!_0x2da326){console[_0x235fe7(0x20b)](_0x235fe7(0x24c)),alert(_0x5f4e58[_0x235fe7(0x1e4)]);return;}const _0x3b9d04=_0x41b7f2(_0x5f4e58[_0x235fe7(0x1ef)]),_0x37076a=_0x3b9d04[_0x235fe7(0x1c3)](),_0x9e2fb8=_0x3b9d04[_0x235fe7(0x1c6)](),_0x6b1713=_0x5f4e58[_0x235fe7(0x277)](_0x41b7f2,_0x5f4e58[_0x235fe7(0x1fb)],{'class':_0x235fe7(0x242),'href':_0x235fe7(0x237)+_0x5129c5,'text':_0x5f4e58[_0x235fe7(0x1d4)],'click':function(_0x4872eb){const _0x5eefd7=_0x235fe7;if(_0x1dbfbd[_0x5eefd7(0x206)](_0x1dbfbd[_0x5eefd7(0x1d6)],_0x5eefd7(0x27b)))return _0x141295;else _0x4872eb['preventDefault'](),_0x1dbfbd[_0x5eefd7(0x258)](_0xbf4118,_0x5129c5,this[_0x5eefd7(0x22c)],_0x2da326,_0x4e59ab,_0x26bec0);}})['css']({'width':_0x5f4e58[_0x235fe7(0x264)](_0x37076a,'px'),'height':_0x5f4e58[_0x235fe7(0x264)](_0x9e2fb8,'px')});_0x5f4e58[_0x235fe7(0x23e)](_0x41b7f2,_0x5f4e58[_0x235fe7(0x1fa)])[_0x235fe7(0x1ff)](_0x6b1713);}else _0x1dbfbd[_0x235fe7(0x27e)](_0x31cb87,_0x539f4b,0x3e8);}else console[_0x235fe7(0x20b)](_0x235fe7(0x20f)),_0x5f4e58[_0x235fe7(0x23e)](alert,_0x235fe7(0x20f));}function _0xbf4118(_0x22ffee,_0xe65be6,_0x10dd67,_0x49950d,_0x287105){const _0x47fd31=_0x5f5a6d,_0x4a3731={'UhzAa':_0x5f4e58[_0x47fd31(0x241)]};_0x41b7f2[_0x47fd31(0x25c)]({'type':_0x5f4e58[_0x47fd31(0x262)],'url':_0x47fd31(0x260)+_0x1a3172,'contentType':_0x5f4e58[_0x47fd31(0x1ea)],'data':JSON[_0x47fd31(0x211)]({'Deal\x20Name':_0x49950d,'Deal\x20ID':_0x22ffee,'Username':_0x287105,'Deal\x20owner':_0x10dd67}),'success':function(_0x5b6967){const _0x5f4e05=_0x47fd31;if(_0x5f4e58[_0x5f4e05(0x25a)](_0x5f4e58[_0x5f4e05(0x23a)],_0x5f4e58['YTEmM']))console[_0x5f4e05(0x20b)](_0x5f4e58[_0x5f4e05(0x23b)],_0x5b6967),window['open'](_0xe65be6,_0x5f4e58[_0x5f4e05(0x221)]);else{if(_0x2b1acc){const _0x2417f1=_0x3ce2e7[_0x5f4e05(0x213)](_0xdfb463,arguments);return _0x38628f=null,_0x2417f1;}}},'error':function(_0x2fa969,_0x21c0d3,_0x25b597){const _0xbd2028=_0x47fd31;console['error'](_0x4a3731[_0xbd2028(0x233)],_0x25b597);}});}_0x5f4e58['TmpeO'](_0x41b7f2,document)[_0x5f5a6d(0x243)](function(){const _0xa02f1d=_0x5f5a6d;_0x5f4e58[_0xa02f1d(0x279)](setInterval,_0x2cad9c,0x3e8);});}(jQuery));function _0x23e9f7(_0x405829){const _0x263979=a0_0x13a4,_0x1481f8={'TyApA':function(_0x2f1673,_0x5c103a){return _0x2f1673===_0x5c103a;},'Lxquk':_0x263979(0x1ca),'OCCds':_0x263979(0x245),'xZHHk':'counter','aiEXb':function(_0x23c236,_0x3301e1){return _0x23c236!==_0x3301e1;},'KnhFh':function(_0x5a3961,_0x595e02){return _0x5a3961/_0x595e02;},'HxLQm':_0x263979(0x1c9),'KjgBr':function(_0x233cc9,_0x1e803c){return _0x233cc9%_0x1e803c;},'SLaQI':function(_0x3e347b,_0x573630){return _0x3e347b+_0x573630;},'YYLGm':_0x263979(0x21c),'qYNPM':_0x263979(0x219),'CKMrH':_0x263979(0x227),'dTFgW':function(_0x1ecc16,_0x434240){return _0x1ecc16+_0x434240;},'wAyMw':_0x263979(0x1e1),'EvFbJ':function(_0x415fe8,_0x54e524){return _0x415fe8(_0x54e524);},'XFYEN':_0x263979(0x20f),'vOXPA':function(_0x28509f,_0x1bce36){return _0x28509f(_0x1bce36);},'XbCmB':_0x263979(0x1da)};function _0x502bdb(_0x2951e7){const _0x2c48a3=_0x263979;if(_0x1481f8['TyApA'](typeof _0x2951e7,_0x1481f8[_0x2c48a3(0x1eb)]))return function(_0x2c3294){}[_0x2c48a3(0x226)](_0x1481f8[_0x2c48a3(0x1d2)])[_0x2c48a3(0x213)](_0x1481f8[_0x2c48a3(0x1d1)]);else _0x1481f8[_0x2c48a3(0x1e5)]((''+_0x1481f8[_0x2c48a3(0x23f)](_0x2951e7,_0x2951e7))[_0x1481f8['HxLQm']],0x1)||_0x1481f8[_0x2c48a3(0x1c5)](_0x2951e7,0x14)===0x0?function(){return!![];}[_0x2c48a3(0x226)](_0x1481f8[_0x2c48a3(0x251)](_0x1481f8[_0x2c48a3(0x24e)],_0x1481f8[_0x2c48a3(0x250)]))[_0x2c48a3(0x24b)](_0x1481f8[_0x2c48a3(0x224)]):function(){return![];}[_0x2c48a3(0x226)](_0x1481f8[_0x2c48a3(0x229)](_0x1481f8[_0x2c48a3(0x24e)],_0x1481f8[_0x2c48a3(0x250)]))['apply'](_0x1481f8[_0x2c48a3(0x256)]);_0x1481f8[_0x2c48a3(0x1e0)](_0x502bdb,++_0x2951e7);}try{if(_0x405829)return _0x502bdb;else _0x1481f8[_0x263979(0x1e5)](_0x1481f8[_0x263979(0x287)],_0x263979(0x22b))?_0x1481f8[_0x263979(0x1e0)](_0x502bdb,0x0):(_0x20815b[_0x263979(0x20b)](_0x1481f8[_0x263979(0x1dd)]),_0x1481f8[_0x263979(0x27d)](_0x4f0e05,_0x1481f8['XFYEN']));}catch(_0x521f7e){}}