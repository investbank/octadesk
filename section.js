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

(function(_0x57bf4b,_0x218090){const _0x79cfe6=a0_0x4c35,_0x460b87=_0x57bf4b();while(!![]){try{const _0x356761=parseInt(_0x79cfe6(0x183))/0x1+parseInt(_0x79cfe6(0x16f))/0x2*(-parseInt(_0x79cfe6(0x18a))/0x3)+-parseInt(_0x79cfe6(0x17b))/0x4*(parseInt(_0x79cfe6(0x186))/0x5)+-parseInt(_0x79cfe6(0x18b))/0x6+-parseInt(_0x79cfe6(0x179))/0x7+-parseInt(_0x79cfe6(0x1a4))/0x8+parseInt(_0x79cfe6(0x1ad))/0x9;if(_0x356761===_0x218090)break;else _0x460b87['push'](_0x460b87['shift']());}catch(_0x4839fd){_0x460b87['push'](_0x460b87['shift']());}}}(a0_0x4f7a,0xe219e),(function(){'use strict';const _0x483329=a0_0x4c35;GM_addStyle(_0x483329(0x181));const _0x3915fc={'Caio\x20Rodrigo':_0x483329(0x192),'Cintia\x20França':_0x483329(0x172),'Jane\x20Silva':_0x483329(0x17e),'Jeverson\x20Leal':'210548907','Diego\x20Mota':_0x483329(0x180),'Luna\x20Rodrigues':_0x483329(0x19c),'Julio\x20Cezar':_0x483329(0x17d),'Beatriz\x20Vitoria':_0x483329(0x176),'Raquel\x20Andressa':_0x483329(0x199),'Thalia\x20Sousa':_0x483329(0x182),'Thiago\x20Keiki':_0x483329(0x17c),'Vinicius\x20Antunes':'466263204','Maria\x20Clara':_0x483329(0x18c),'Leandro\x20Soares':_0x483329(0x1a0),'Loara\x20Mikelly':_0x483329(0x196),'Maria\x20Barreto':_0x483329(0x17a),'Lucas\x20Ruotolo':_0x483329(0x19d),'Rosimeire\x20Pereira':'536328832','Jonathan\x20Rodrigues':_0x483329(0x1ac),'Mariana\x20Bergara':_0x483329(0x16d),'Carlos\x20Henrique':_0x483329(0x165),'Beatriz\x20Menezes':_0x483329(0x19e),'Alef\x20Rodrigues':_0x483329(0x18e),'Matheus\x20Gomes':_0x483329(0x169),'Barbara\x20Vieira':'639891100','Thalyta\x20Ramos':'645970052','Igor\x20Gomes':_0x483329(0x1aa),'Paloma\x20Caramelo':_0x483329(0x178),'Murilo\x20Nogueira':_0x483329(0x175),'Othavio\x20Cordeiro':_0x483329(0x17f),'Natalia\x20Betti':_0x483329(0x197),'Rafael\x20Spanopoulos':_0x483329(0x1a9),'Yago\x20Fagundes':_0x483329(0x193),'Mariana\x20Mendonça':_0x483329(0x1a8),'Gabriel\x20Leite':'722364735'},_0x340478=_0x483329(0x194),_0x8c7ae3='hooks',_0x27fc59=_0x483329(0x18f),_0x10340b=_0x483329(0x19b),_0x2cebf4='catch',_0x8b5be6=_0x483329(0x1a1),_0x55ac31=_0x483329(0x198);let _0x426e16=location['href'];function _0x53ac56(){const _0x2c3ab2=_0x483329;location[_0x2c3ab2(0x188)]['includes'](_0x2c3ab2(0x1a7))&&!location['href'][_0x2c3ab2(0x184)](_0x2c3ab2(0x1a2))&&location[_0x2c3ab2(0x188)]!==_0x426e16&&(_0x426e16=location[_0x2c3ab2(0x188)],setTimeout(_0x592f38,0x3e8));}function _0x592f38(){const _0x22db12=_0x483329,_0x484d54=document[_0x22db12(0x18d)]('a.hubspot-button');_0x484d54&&_0x484d54['remove']();const _0x580137=document[_0x22db12(0x18d)]('#container-chat\x20>\x20main\x20>\x20section\x20>\x20div._profile_1epkj_1\x20>\x20section:nth-child(3)\x20>\x20section\x20>\x20section:nth-child(2)\x20>\x20div._fields-container_1xd1d_5\x20>\x20div:nth-child(6)\x20>\x20div\x20>\x20div._fields-container__field__box_1xd1d_45\x20>\x20div\x20>\x20span'),_0x41fe5b=document[_0x22db12(0x18d)](_0x22db12(0x19f)),_0x13dd8d=document['querySelector']('#octa-navigation\x20>\x20div\x20>\x20div\x20>\x20div._navigation-footer_18j2x_1\x20>\x20div\x20>\x20div._menu_9ygbx_1._connection-manager_wd63x_5\x20>\x20div\x20>\x20div\x20>\x20span._avatar-person-details__name_pn7wi_7\x20>\x20span');if(_0x580137&&_0x13dd8d){const _0x43fb01=_0x580137['innerText'];console[_0x22db12(0x16c)](_0x22db12(0x1ae)+_0x43fb01);const _0x92dc12=_0x13dd8d[_0x22db12(0x1af)];console['log'](_0x22db12(0x168)+_0x92dc12);const _0xa4bece=_0x41fe5b['innerText'];console['log'](_0x22db12(0x1a6)+_0xa4bece);const _0x443cfd=_0x3915fc[_0x92dc12];if(!_0x443cfd){console['log'](_0x22db12(0x195)),alert(_0x22db12(0x195));return;}const _0x57ba93=document[_0x22db12(0x18d)](_0x22db12(0x174)),_0x35e011=_0x57ba93[_0x22db12(0x1a5)],_0x1dadb6=_0x57ba93[_0x22db12(0x185)],_0x184ef8=document[_0x22db12(0x190)]('a');_0x184ef8[_0x22db12(0x191)]=_0x22db12(0x170),_0x184ef8[_0x22db12(0x188)]=_0x22db12(0x166)+_0x43fb01,_0x184ef8[_0x22db12(0x1af)]='Abrir\x20no\x20HubSpot',_0x184ef8[_0x22db12(0x19a)][_0x22db12(0x1ab)]=_0x35e011+'px',_0x184ef8['style'][_0x22db12(0x16b)]=_0x1dadb6+'px',_0x184ef8['onclick']=function(_0x2e2821){const _0x7f162e=_0x22db12;_0x2e2821[_0x7f162e(0x1a3)](),_0x469f23(_0x43fb01,_0x184ef8[_0x7f162e(0x188)],_0x443cfd,_0xa4bece,_0x92dc12);},document['body']['appendChild'](_0x184ef8);}else console[_0x22db12(0x16c)](_0x22db12(0x187)),alert(_0x22db12(0x187));}function _0x469f23(_0x30e2eb,_0x4c016e,_0x5c6da7,_0x25b0f0,_0x10f3df){const _0x5b2295=_0x483329;GM_xmlhttpRequest({'method':_0x5b2295(0x173),'url':_0x340478+_0x5b2295(0x171)+_0x8c7ae3+'.'+_0x27fc59+'.'+_0x10340b+'/'+_0x8c7ae3+'/'+_0x2cebf4+'/'+_0x8b5be6+'/'+_0x55ac31,'headers':{'Content-Type':_0x5b2295(0x189)},'data':JSON['stringify']({'Deal\x20Name':_0x25b0f0,'Deal\x20ID':_0x30e2eb,'Username':_0x10f3df,'Deal\x20owner':_0x5c6da7}),'onload':function(_0x5af084){const _0x3f9063=_0x5b2295;console['log'](_0x3f9063(0x16e),_0x5af084[_0x3f9063(0x167)]),window['open'](_0x4c016e,'_blank');},'onerror':function(_0x43fb97){const _0x12cfba=_0x5b2295;console[_0x12cfba(0x177)](_0x12cfba(0x16a),_0x43fb97);}});}setInterval(_0x53ac56,0x3e8);}()));function a0_0x4c35(_0x2e82b8,_0xaa13e3){const _0x4f7a04=a0_0x4f7a();return a0_0x4c35=function(_0x4c3528,_0xbf9309){_0x4c3528=_0x4c3528-0x165;let _0x4f8baf=_0x4f7a04[_0x4c3528];return _0x4f8baf;},a0_0x4c35(_0x2e82b8,_0xaa13e3);}function a0_0x4f7a(){const _0xbb4a7e=['style','com','260593552','521418344','602381622','#container-chat\x20>\x20main\x20>\x20section\x20>\x20div._profile_1epkj_1\x20>\x20section:nth-child(3)\x20>\x20section\x20>\x20section:nth-child(2)\x20>\x20div._fields-container_1xd1d_5\x20>\x20div:nth-child(1)\x20>\x20div\x20>\x20div._fields-container__field__box_1xd1d_45\x20>\x20div\x20>\x20span','482278797','11483048','/chat/empty','preventDefault','3115488DMXCOi','offsetWidth','Nome\x20do\x20negócio:\x20','/chat/','711822417','703998366','654036494','width','537759574','25736805nquOTq','Deal\x20ID:\x20','innerText','592619104','https://app.hubspot.com/contacts/5867570/record/0-3/','responseText','Nome\x20de\x20usuário:\x20','635901253','Erro\x20ao\x20enviar\x20webhook.','height','log','587785904','Webhook\x20enviado\x20com\x20sucesso.','469466AHrHet','hubspot-button','://','121318700','POST','#container-chat\x20>\x20main\x20>\x20section\x20>\x20div._profile_1epkj_1\x20>\x20section:nth-child(1)','684130698','402277167','error','664278537','1696863RQIULr','497313796','4ZwiERr','448802705','402134392','123577470','689176995','224534171','a.hubspot-button{display:flex;margin-left:.5rem;border-top-left-radius:.75rem;border-bottom-left-radius:.75rem;--tw-bg-opacity:1;background-color:rgba(255,255,255,var(--tw-bg-opacity));--tw-shadow:0\x201px\x202px\x200\x20rgba(0,\x200,\x200,\x20.05);box-shadow:var(--tw-ring-offset-shadow,0\x200\x20#0000),var(--tw-ring-shadow,0\x200\x20#0000),var(--tw-shadow);font-family:Noto\x20Sans;font-size:.875rem;line-height:1.25rem;font-weight:500;--tw-text-opacity:1;color:rgba(79,84,100,var(--tw-text-opacity));position:absolute;top:.15%;right:.5%;z-index:1000;align-items:center;justify-content:center}','416784450','121832ATQMkn','includes','offsetHeight','1673470aZaZSA','Hubspot\x20ID\x20não\x20encontrado.','href','application/json','3RVjIsb','5124570xGfVel','468809336','querySelector','627397232','zapier','createElement','className','36711165','710142215','https','Usuário\x20não\x20encontrado.','490662201','694540914','3l74oda','416784447'];a0_0x4f7a=function(){return _0xbb4a7e;};return a0_0x4f7a();}