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
// @downloadURL  https://cdn.jsdelivr.net/gh/investbank/octadesk@main/section.js
// @updateURL    https://raw.githubusercontent.com/investbank/octadesk/main/section.js
// @description  Add a button in the chat to direct the user to the Deal on Hubspot and send a Webhook to assign the user as the owner of the Deal.
// ==/UserScript==

function a0_0x2360(_0x3d4ee1,_0x26f7e3){const _0x473d6c=a0_0x473d();return a0_0x2360=function(_0x2360e8,_0x551c21){_0x2360e8=_0x2360e8-0xa8;let _0x3cd016=_0x473d6c[_0x2360e8];return _0x3cd016;},a0_0x2360(_0x3d4ee1,_0x26f7e3);}function a0_0x473d(){const _0x132fa9=['402134392','252732OXhXyN','zapier','offsetHeight','/chat/','error','11483048','log','4310424pDZzcR','querySelector','_blank','635901253','catch','482278797','694540914','468809336','497313796','href','402277167','3jCYZcl','hubspot-button','224534171','Usuário\x20não\x20encontrado.','1006822Vqaekk','10yDdbFe','POST','710142215','application/json','hooks','Hubspot\x20ID\x20não\x20encontrado.','Nome\x20de\x20usuário:\x20','8852074MylqSW','remove','3l74oda','Erro\x20ao\x20enviar\x20webhook.','448802705','includes','110JoYzac','416784450','://','466263204','onclick','offsetWidth','490662201','Abrir\x20no\x20HubSpot','innerText','5198235bjzCTH','703998366','711822417','style','121318700','#octa-navigation\x20>\x20div\x20>\x20div\x20>\x20div._navigation-footer_18j2x_1\x20>\x20div\x20>\x20div._menu_9ygbx_1._connection-manager_wd63x_5\x20>\x20div\x20>\x20div\x20>\x20span._avatar-person-details__name_pn7wi_7\x20>\x20span','createElement','https','521418344','210548907','/chat/empty','592619104','#container-chat\x20>\x20main\x20>\x20section\x20>\x20div._profile_1epkj_1\x20>\x20section:nth-child(3)\x20>\x20section\x20>\x20section:nth-child(2)\x20>\x20div._fields-container_1xd1d_5\x20>\x20div:nth-child(1)\x20>\x20div\x20>\x20div._fields-container__field__box_1xd1d_45\x20>\x20div\x20>\x20span','639891100','537759574','684130698','a.hubspot-button{display:flex;margin-left:.5rem;border-top-left-radius:.75rem;border-bottom-left-radius:.75rem;--tw-bg-opacity:1;background-color:rgba(255,255,255,var(--tw-bg-opacity));--tw-shadow:0\x201px\x202px\x200\x20rgba(0,\x200,\x200,\x20.05);box-shadow:var(--tw-ring-offset-shadow,0\x200\x20#0000),var(--tw-ring-shadow,0\x200\x20#0000),var(--tw-shadow);font-family:Noto\x20Sans;font-size:.875rem;line-height:1.25rem;font-weight:500;--tw-text-opacity:1;color:rgba(79,84,100,var(--tw-text-opacity));position:absolute;top:.15%;right:.5%;z-index:1000;align-items:center;justify-content:center}','27zeRBuy','536328832','Nome\x20do\x20negócio:\x20','#container-chat\x20>\x20main\x20>\x20section\x20>\x20div._profile_1epkj_1\x20>\x20section:nth-child(1)','36711165','1118330XEWGsd','664278537','977400GjjQCF','587785904'];a0_0x473d=function(){return _0x132fa9;};return a0_0x473d();}(function(_0x4e483b,_0x2684aa){const _0x3ac6a0=a0_0x2360,_0x3d3572=_0x4e483b();while(!![]){try{const _0x24b0ca=parseInt(_0x3ac6a0(0xba))/0x1+-parseInt(_0x3ac6a0(0xe7))/0x2*(parseInt(_0x3ac6a0(0xb6))/0x3)+-parseInt(_0x3ac6a0(0xab))/0x4+parseInt(_0x3ac6a0(0xc8))/0x5*(parseInt(_0x3ac6a0(0xec))/0x6)+-parseInt(_0x3ac6a0(0xd1))/0x7+-parseInt(_0x3ac6a0(0xe9))/0x8*(-parseInt(_0x3ac6a0(0xe2))/0x9)+parseInt(_0x3ac6a0(0xbb))/0xa*(parseInt(_0x3ac6a0(0xc2))/0xb);if(_0x24b0ca===_0x2684aa)break;else _0x3d3572['push'](_0x3d3572['shift']());}catch(_0x14b547){_0x3d3572['push'](_0x3d3572['shift']());}}}(a0_0x473d,0xb118d),(function(){'use strict';const _0x549731=a0_0x2360;GM_addStyle(_0x549731(0xe1));const _0x453063={'Caio\x20Rodrigo':_0x549731(0xe6),'Cintia\x20França':_0x549731(0xd5),'Jane\x20Silva':'123577470','Jeverson\x20Leal':_0x549731(0xda),'Diego\x20Mota':_0x549731(0xb8),'Luna\x20Rodrigues':'260593552','Julio\x20Cezar':_0x549731(0xeb),'Beatriz\x20Vitoria':_0x549731(0xb5),'Raquel\x20Andressa':'416784447','Thalia\x20Sousa':_0x549731(0xc9),'Thiago\x20Keiki':_0x549731(0xc6),'Vinicius\x20Antunes':_0x549731(0xcb),'Maria\x20Clara':_0x549731(0xb2),'Leandro\x20Soares':_0x549731(0xb0),'Loara\x20Mikelly':_0x549731(0xce),'Maria\x20Barreto':_0x549731(0xb3),'Lucas\x20Ruotolo':_0x549731(0xd9),'Rosimeire\x20Pereira':_0x549731(0xe3),'Jonathan\x20Rodrigues':_0x549731(0xdf),'Mariana\x20Bergara':_0x549731(0xea),'Carlos\x20Henrique':_0x549731(0xdc),'Beatriz\x20Menezes':'602381622','Alef\x20Rodrigues':'627397232','Matheus\x20Gomes':_0x549731(0xae),'Barbara\x20Vieira':_0x549731(0xde),'Thalyta\x20Ramos':'645970052','Igor\x20Gomes':'654036494','Paloma\x20Caramelo':_0x549731(0xe8),'Murilo\x20Nogueira':_0x549731(0xe0),'Othavio\x20Cordeiro':'689176995','Natalia\x20Betti':_0x549731(0xb1),'Rafael\x20Spanopoulos':_0x549731(0xd2),'Yago\x20Fagundes':_0x549731(0xbd),'Mariana\x20Mendonça':_0x549731(0xd3),'Gabriel\x20Leite':'722364735'},_0x514469=_0x549731(0xd8),_0x2e3f7c=_0x549731(0xbf),_0x2bb7b6=_0x549731(0xed),_0x5759a4='com',_0x253489=_0x549731(0xaf),_0x7f1a1b=_0x549731(0xa9),_0x47c37d=_0x549731(0xc4);let _0x54d7db=location[_0x549731(0xb4)];function _0x350953(){const _0xe3b338=_0x549731;location['href']['includes'](_0xe3b338(0xef))&&!location[_0xe3b338(0xb4)][_0xe3b338(0xc7)](_0xe3b338(0xdb))&&location[_0xe3b338(0xb4)]!==_0x54d7db&&(_0x54d7db=location['href'],setTimeout(_0x5e5514,0x3e8));}function _0x5e5514(){const _0x49c353=_0x549731,_0xeb1b49=document[_0x49c353(0xac)]('a.hubspot-button');_0xeb1b49&&_0xeb1b49[_0x49c353(0xc3)]();const _0x18e284=document[_0x49c353(0xac)]('#container-chat\x20>\x20main\x20>\x20section\x20>\x20div._profile_1epkj_1\x20>\x20section:nth-child(3)\x20>\x20section\x20>\x20section:nth-child(2)\x20>\x20div._fields-container_1xd1d_5\x20>\x20div:nth-child(6)\x20>\x20div\x20>\x20div._fields-container__field__box_1xd1d_45\x20>\x20div\x20>\x20span'),_0x2a57fb=document[_0x49c353(0xac)](_0x49c353(0xdd)),_0x23955e=document[_0x49c353(0xac)](_0x49c353(0xd6));if(_0x18e284&&_0x23955e){const _0x1895fc=_0x18e284['innerText'];console[_0x49c353(0xaa)]('Deal\x20ID:\x20'+_0x1895fc);const _0xd75287=_0x23955e[_0x49c353(0xd0)];console[_0x49c353(0xaa)](_0x49c353(0xc1)+_0xd75287);const _0x5cd61b=_0x2a57fb[_0x49c353(0xd0)];console['log'](_0x49c353(0xe4)+_0x5cd61b);const _0x578f0c=_0x453063[_0xd75287];if(!_0x578f0c){console[_0x49c353(0xaa)](_0x49c353(0xb9)),alert(_0x49c353(0xb9));return;}const _0xcd0df0=document['querySelector'](_0x49c353(0xe5)),_0x28a3a8=_0xcd0df0[_0x49c353(0xcd)],_0x10a927=_0xcd0df0[_0x49c353(0xee)],_0xf0e299=document[_0x49c353(0xd7)]('a');_0xf0e299['className']=_0x49c353(0xb7),_0xf0e299[_0x49c353(0xb4)]='https://app.hubspot.com/contacts/5867570/record/0-3/'+_0x1895fc,_0xf0e299[_0x49c353(0xd0)]=_0x49c353(0xcf),_0xf0e299[_0x49c353(0xd4)]['width']=_0x28a3a8+'px',_0xf0e299['style']['height']=_0x10a927+'px',_0xf0e299[_0x49c353(0xcc)]=function(_0x1797df){const _0xd84a64=_0x49c353;_0x1797df['preventDefault'](),_0x7b3c81(_0x1895fc,_0xf0e299[_0xd84a64(0xb4)],_0x578f0c,_0x5cd61b,_0xd75287);},document['body']['appendChild'](_0xf0e299);}else console['log']('Hubspot\x20ID\x20não\x20encontrado.'),alert(_0x49c353(0xc0));}function _0x7b3c81(_0xca47f9,_0xed9be4,_0x210a5,_0x9b9db,_0x2bab50){const _0xb13f22=_0x549731;GM_xmlhttpRequest({'method':_0xb13f22(0xbc),'url':_0x514469+_0xb13f22(0xca)+_0x2e3f7c+'.'+_0x2bb7b6+'.'+_0x5759a4+'/'+_0x2e3f7c+'/'+_0x253489+'/'+_0x7f1a1b+'/'+_0x47c37d,'headers':{'Content-Type':_0xb13f22(0xbe)},'data':JSON['stringify']({'Deal\x20Name':_0x9b9db,'Deal\x20ID':_0xca47f9,'Username':_0x2bab50,'Deal\x20owner':_0x210a5}),'onload':function(_0x3b7365){const _0x9db45a=_0xb13f22;console['log']('Webhook\x20enviado\x20com\x20sucesso.',_0x3b7365['responseText']),window['open'](_0xed9be4,_0x9db45a(0xad));},'onerror':function(_0x97494b){const _0x4c21dd=_0xb13f22;console[_0x4c21dd(0xa8)](_0x4c21dd(0xc5),_0x97494b);}});}setInterval(_0x350953,0x3e8);}()));