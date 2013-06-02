/*
 Copyright (c) 2003-2012, CKSource - Frederico Knabben. All rights reserved.
 For licensing, see LICENSE.html or http://ckeditor.com/license
*/
CKEDITOR.dialog.add("scaytcheck",function(e){function t(){return"undefined"!=typeof document.forms["optionsbar_"+m]?document.forms["optionsbar_"+m].options:[]}function n(e,t){if(e){var n=e.length;if(void 0==n)e.checked=e.value==t.toString();else for(var i=0;n>i;i++)e[i].checked=!1,e[i].value==t.toString()&&(e[i].checked=!0)}}function i(e){u.getById("dic_message_"+m).setHtml('<span style="color:red;">'+e+"</span>")}function a(e){u.getById("dic_message_"+m).setHtml('<span style="color:blue;">'+e+"</span>")}function o(e){for(var e=(""+e).split(","),t=0,n=e.length;n>t;t+=1)u.getById(e[t]).$.style.display="inline"}function r(e){for(var e=(""+e).split(","),t=0,n=e.length;n>t;t+=1)u.getById(e[t]).$.style.display="none"}function l(e){u.getById("dic_name_"+m).$.value=e}var s,d,c=!0,u=CKEDITOR.document,m=e.name,p=CKEDITOR.plugins.scayt.getUiTabs(e),h=[],g=0,f=["dic_create_"+m+",dic_restore_"+m,"dic_rename_"+m+",dic_delete_"+m],b=["mixedCase","mixedWithDigits","allCaps","ignoreDomainNames"];d=e.lang.scayt;var T=[{id:"options",label:d.optionsTab,elements:[{type:"html",id:"options",html:'<form name="optionsbar_'+m+'"><div class="inner_options">	<div class="messagebox"></div>	<div style="display:none;">		<input type="checkbox" name="options"  id="allCaps_'+m+'" />		<label style = "display: inline" for="allCaps" id="label_allCaps_'+m+'"></label>	</div>	<div style="display:none;">		<input name="options" type="checkbox"  id="ignoreDomainNames_'+m+'" />		<label style = "display: inline" for="ignoreDomainNames" id="label_ignoreDomainNames_'+m+'"></label>	</div>	<div style="display:none;">	<input name="options" type="checkbox"  id="mixedCase_'+m+'" />		<label style = "display: inline" for="mixedCase" id="label_mixedCase_'+m+'"></label>	</div>	<div style="display:none;">		<input name="options" type="checkbox"  id="mixedWithDigits_'+m+'" />		<label style = "display: inline" for="mixedWithDigits" id="label_mixedWithDigits_'+m+'"></label>	</div></div></form>'}]},{id:"langs",label:d.languagesTab,elements:[{type:"html",id:"langs",html:'<form name="languagesbar_'+m+'"><div class="inner_langs">	<div class="messagebox"></div>	   <div style="float:left;width:45%;margin-left:5px;" id="scayt_lcol_'+m+'" ></div>   <div style="float:left;width:45%;margin-left:15px;" id="scayt_rcol_'+m+'"></div></div></form>'}]},{id:"dictionaries",label:d.dictionariesTab,elements:[{type:"html",style:"",id:"dictionaries",html:'<form name="dictionarybar_'+m+'"><div class="inner_dictionary" style="text-align:left; white-space:normal; width:320px; overflow: hidden;">	<div style="margin:5px auto; width:95%;white-space:normal; overflow:hidden;" id="dic_message_'+m+'"> </div>	<div style="margin:5px auto; width:95%;white-space:normal;">        <span class="cke_dialog_ui_labeled_label" >Dictionary name</span><br>		<span class="cke_dialog_ui_labeled_content" >			<div class="cke_dialog_ui_input_text">				<input id="dic_name_'+m+'" type="text" class="cke_dialog_ui_input_text" style = "height: 25px; background: none; padding: 0;"/>		</div></span></div>		<div style="margin:5px auto; width:95%;white-space:normal;">			<a style="display:none;" class="cke_dialog_ui_button" href="javascript:void(0)" id="dic_create_'+m+'">				</a>			<a  style="display:none;" class="cke_dialog_ui_button" href="javascript:void(0)" id="dic_delete_'+m+'">				</a>			<a  style="display:none;" class="cke_dialog_ui_button" href="javascript:void(0)" id="dic_rename_'+m+'">				</a>			<a  style="display:none;" class="cke_dialog_ui_button" href="javascript:void(0)" id="dic_restore_'+m+'">				</a>		</div>	<div style="margin:5px auto; width:95%;white-space:normal;" id="dic_info_'+m+'"></div></div></form>'}]},{id:"about",label:d.aboutTab,elements:[{type:"html",id:"about",style:"margin: 5px 5px;",html:'<div id="scayt_about_'+m+'"></div>'}]}],E={title:d.title,minWidth:360,minHeight:220,onShow:function(){var t=this;if(t.data=e.fire("scaytDialog",{}),t.options=t.data.scayt_control.option(),t.chosed_lang=t.sLang=t.data.scayt_control.sLang,t.data&&t.data.scayt&&t.data.scayt_control){var n=0;c?t.data.scayt.getCaption(e.langCode||"en",function(e){n++>0||(s=e,v.apply(t),C.apply(t),c=!1)}):C.apply(t),t.selectPage(t.data.tab)}else alert("Error loading application service"),t.hide()},onOk:function(){var e=this.data.scayt_control;e.option(this.options),e.setLang(this.chosed_lang),e.refresh()},onCancel:function(){var e,i=t();for(e in i)i[e].checked=!1;i="undefined"!=typeof document.forms["languagesbar_"+m]?document.forms["languagesbar_"+m].scayt_lang:[],n(i,"")},contents:h};for(CKEDITOR.plugins.scayt.getScayt(e),d=0;p.length>d;d++)1==p[d]&&(h[h.length]=T[d]);1==p[2]&&(g=1);var v=function(){function e(e){var t=u.getById("dic_name_"+m).getValue();if(!t)return i(" Dictionary name should not be empty. "),!1;try{var n=e.data.getTarget().getParent(),a=/(dic_\w+)_[\w\d]+/.exec(n.getId())[1];E[a].apply(null,[n,t,f])}catch(o){i(" Dictionary error. ")}return!0}var t,n=this,d=n.data.scayt.getLangList(),c=["dic_create","dic_delete","dic_rename","dic_restore"],h=[],T=[];if(g){for(t=0;c.length>t;t++)h[t]=c[t]+"_"+m,u.getById(h[t]).setHtml('<span class="cke_dialog_ui_button">'+s["button_"+c[t]]+"</span>");u.getById("dic_info_"+m).setHtml(s.dic_info)}if(1==p[0])for(t in b)c="label_"+b[t],h=u.getById(c+"_"+m),"undefined"!=typeof h&&"undefined"!=typeof s[c]&&"undefined"!=typeof n.options[b[t]]&&(h.setHtml(s[c]),h.getParent().$.style.display="block");if(c='<p><img src="'+window.scayt.getAboutInfo().logoURL+'" /></p><p>'+s.version+window.scayt.getAboutInfo().version.toString()+"</p><p>"+s.about_throwt_copy+"</p>",u.getById("scayt_about_"+m).setHtml(c),c=function(e,t){var i=u.createElement("label");i.setAttribute("for","cke_option"+e),i.setStyle("display","inline"),i.setHtml(t[e]),n.sLang==e&&(n.chosed_lang=e);var a=u.createElement("div"),o=CKEDITOR.dom.element.createFromHtml('<input class = "cke_dialog_ui_radio_input" id="cke_option'+e+'" type="radio" '+(n.sLang==e?'checked="checked"':"")+' value="'+e+'" name="scayt_lang" />');return o.on("click",function(){this.$.checked=!0,n.chosed_lang=e}),a.append(o),a.append(i),{lang:t[e],code:e,radio:a}},1==p[1]){for(t in d.rtl)T[T.length]=c(t,d.ltr);for(t in d.ltr)T[T.length]=c(t,d.ltr);for(T.sort(function(e,t){return t.lang>e.lang?-1:1}),d=u.getById("scayt_lcol_"+m),c=u.getById("scayt_rcol_"+m),t=0;T.length>t;t++)(T.length/2>t?d:c).append(T[t].radio)}var E={dic_create:function(e,t,n){var l=n[0]+","+n[1],d=s.err_dic_create,c=s.succ_dic_create;window.scayt.createUserDictionary(t,function(e){r(l),o(n[1]),c=c.replace("%s",e.dname),a(c)},function(e){d=d.replace("%s",e.dname),i(d+"( "+(e.message||"")+")")})},dic_rename:function(e,t){var n=s.err_dic_rename||"",o=s.succ_dic_rename||"";window.scayt.renameUserDictionary(t,function(e){o=o.replace("%s",e.dname),l(t),a(o)},function(e){n=n.replace("%s",e.dname),l(t),i(n+"( "+(e.message||"")+" )")})},dic_delete:function(e,t,n){var d=n[0]+","+n[1],c=s.err_dic_delete,u=s.succ_dic_delete;window.scayt.deleteUserDictionary(function(e){u=u.replace("%s",e.dname),r(d),o(n[0]),l(""),a(u)},function(e){c=c.replace("%s",e.dname),i(c)})}};for(E.dic_restore=n.dic_restore||function(e,t,n){var l=n[0]+","+n[1],d=s.err_dic_restore,c=s.succ_dic_restore;window.scayt.restoreUserDictionary(t,function(e){c=c.replace("%s",e.dname),r(l),o(n[1]),a(c)},function(e){d=d.replace("%s",e.dname),i(d)})},T=(f[0]+","+f[1]).split(","),t=0,d=T.length;d>t;t+=1)(c=u.getById(T[t]))&&c.on("click",e,this)},C=function(){var e=this;if(1==p[0])for(var i=t(),l=0,s=i.length;s>l;l++){var d=i[l].id,h=u.getById(d);h&&(i[l].checked=!1,1==e.options[d.split("_")[0]]&&(i[l].checked=!0),c)&&h.on("click",function(){e.options[this.getId().split("_")[0]]=this.$.checked?1:0})}1==p[1]&&(i=u.getById("cke_option"+e.sLang),n(i.$,e.sLang)),g&&(window.scayt.getNameUserDictionary(function(e){e=e.dname,r(f[0]+","+f[1]),e?(u.getById("dic_name_"+m).setValue(e),o(f[1])):o(f[0])},function(){u.getById("dic_name_"+m).setValue("")}),a(""))};return E});