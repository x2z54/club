/*
 Copyright (c) 2003-2013, CKSource - Frederico Knabben. All rights reserved.
 For licensing, see LICENSE.html or http://ckeditor.com/license
*/
(function(){function e(e){for(var t,n=0,a=0,i=0,o=e.$.rows.length;o>i;i++){t=e.$.rows[i];for(var r,l=n=0,s=t.cells.length;s>l;l++)r=t.cells[l],n+=r.colSpan;n>a&&(a=n)}return a}function t(e){return function(){var t=this.getValue(),t=!!(CKEDITOR.dialog.validate.integer()(t)&&t>0);return t||(alert(e),this.select()),t}}function n(n,o){var r=function(e){return new CKEDITOR.dom.element(e,n.document)},l=n.editable(),s=n.plugins.dialogadvtab;return{title:n.lang.table.title,minWidth:310,minHeight:CKEDITOR.env.ie?310:280,onLoad:function(){var e=this,t=e.getContentElement("advanced","advStyles");t&&t.on("change",function(){var t=this.getStyle("width",""),n=e.getContentElement("info","txtWidth");n&&n.setValue(t,!0),t=this.getStyle("height",""),(n=e.getContentElement("info","txtHeight"))&&n.setValue(t,!0)})},onShow:function(){var e,t=n.getSelection(),a=t.getRanges(),i=this.getContentElement("info","txtRows"),r=this.getContentElement("info","txtCols"),l=this.getContentElement("info","txtWidth"),s=this.getContentElement("info","txtHeight");"tableProperties"==o&&((t=t.getSelectedElement())&&t.is("table")?e=t:a.length>0&&(CKEDITOR.env.webkit&&a[0].shrink(CKEDITOR.NODE_ELEMENT),e=n.elementPath(a[0].getCommonAncestor(!0)).contains("table",1)),this._.selectedElement=e),e?(this.setupContent(e),i&&i.disable(),r&&r.disable()):(i&&i.enable(),r&&r.enable()),l&&l.onChange(),s&&s.onChange()},onOk:function(){var e=n.getSelection(),t=this._.selectedElement&&e.createBookmarks(),a=this._.selectedElement||r("table"),i={};if(this.commitContent(i,a),i.info){if(i=i.info,!this._.selectedElement)for(var o=a.append(r("tbody")),l=parseInt(i.txtRows,10)||0,s=parseInt(i.txtCols,10)||0,d=0;l>d;d++)for(var c=o.append(r("tr")),u=0;s>u;u++){var m=c.append(r("td"));CKEDITOR.env.ie||m.append(r("br"))}if(l=i.selHeaders,!a.$.tHead&&("row"==l||"both"==l)){for(c=new CKEDITOR.dom.element(a.$.createTHead()),o=a.getElementsByTag("tbody").getItem(0),o=o.getElementsByTag("tr").getItem(0),d=0;o.getChildCount()>d;d++)s=o.getChild(d),s.type==CKEDITOR.NODE_ELEMENT&&!s.data("cke-bookmark")&&(s.renameNode("th"),s.setAttribute("scope","col"));c.append(o.remove())}if(null!==a.$.tHead&&"row"!=l&&"both"!=l){for(c=new CKEDITOR.dom.element(a.$.tHead),o=a.getElementsByTag("tbody").getItem(0),u=o.getFirst();c.getChildCount()>0;){for(o=c.getFirst(),d=0;o.getChildCount()>d;d++)s=o.getChild(d),s.type==CKEDITOR.NODE_ELEMENT&&(s.renameNode("td"),s.removeAttribute("scope"));o.insertBefore(u)}c.remove()}if(!this.hasColumnHeaders&&("col"==l||"both"==l))for(c=0;a.$.rows.length>c;c++)s=new CKEDITOR.dom.element(a.$.rows[c].cells[0]),s.renameNode("th"),s.setAttribute("scope","row");if(this.hasColumnHeaders&&"col"!=l&&"both"!=l)for(d=0;a.$.rows.length>d;d++)c=new CKEDITOR.dom.element(a.$.rows[d]),"tbody"==c.getParent().getName()&&(s=new CKEDITOR.dom.element(c.$.cells[0]),s.renameNode("td"),s.removeAttribute("scope"));i.txtHeight?a.setStyle("height",i.txtHeight):a.removeStyle("height"),i.txtWidth?a.setStyle("width",i.txtWidth):a.removeStyle("width"),a.getAttribute("style")||a.removeAttribute("style")}if(this._.selectedElement)try{e.selectBookmarks(t)}catch(p){}else n.insertElement(a),setTimeout(function(){var e=new CKEDITOR.dom.element(a.$.rows[0].cells[0]),t=n.createRange();t.moveToPosition(e,CKEDITOR.POSITION_AFTER_START),t.select()},0)},contents:[{id:"info",label:n.lang.table.title,elements:[{type:"hbox",widths:[null,null],styles:["vertical-align:top"],children:[{type:"vbox",padding:0,children:[{type:"text",id:"txtRows","default":3,label:n.lang.table.rows,required:!0,controlStyle:"width:5em",validate:t(n.lang.table.invalidRows),setup:function(e){this.setValue(e.$.rows.length)},commit:i},{type:"text",id:"txtCols","default":2,label:n.lang.table.columns,required:!0,controlStyle:"width:5em",validate:t(n.lang.table.invalidCols),setup:function(t){this.setValue(e(t))},commit:i},{type:"html",html:"&nbsp;"},{type:"select",id:"selHeaders",requiredContent:"th","default":"",label:n.lang.table.headers,items:[[n.lang.table.headersNone,""],[n.lang.table.headersRow,"row"],[n.lang.table.headersColumn,"col"],[n.lang.table.headersBoth,"both"]],setup:function(e){var t=this.getDialog();t.hasColumnHeaders=!0;for(var n=0;e.$.rows.length>n;n++){var a=e.$.rows[n].cells[0];if(a&&"th"!=a.nodeName.toLowerCase()){t.hasColumnHeaders=!1;break}}null!==e.$.tHead?this.setValue(t.hasColumnHeaders?"both":"row"):this.setValue(t.hasColumnHeaders?"col":"")},commit:i},{type:"text",id:"txtBorder",requiredContent:"table[border]","default":n.filter.check("table[border]")?1:0,label:n.lang.table.border,controlStyle:"width:3em",validate:CKEDITOR.dialog.validate.number(n.lang.table.invalidBorder),setup:function(e){this.setValue(e.getAttribute("border")||"")},commit:function(e,t){this.getValue()?t.setAttribute("border",this.getValue()):t.removeAttribute("border")}},{id:"cmbAlign",type:"select",requiredContent:"table[align]","default":"",label:n.lang.common.align,items:[[n.lang.common.notSet,""],[n.lang.common.alignLeft,"left"],[n.lang.common.alignCenter,"center"],[n.lang.common.alignRight,"right"]],setup:function(e){this.setValue(e.getAttribute("align")||"")},commit:function(e,t){this.getValue()?t.setAttribute("align",this.getValue()):t.removeAttribute("align")}}]},{type:"vbox",padding:0,children:[{type:"hbox",widths:["5em"],children:[{type:"text",id:"txtWidth",requiredContent:"table{width}",controlStyle:"width:5em",label:n.lang.common.width,title:n.lang.common.cssLengthTooltip,"default":n.filter.check("table{width}")?500>l.getSize("width")?"100%":500:0,getValue:a,validate:CKEDITOR.dialog.validate.cssLength(n.lang.common.invalidCssLength.replace("%1",n.lang.common.width)),onChange:function(){var e=this.getDialog().getContentElement("advanced","advStyles");e&&e.updateStyle("width",this.getValue())},setup:function(e){this.setValue(e.getStyle("width"))},commit:i}]},{type:"hbox",widths:["5em"],children:[{type:"text",id:"txtHeight",requiredContent:"table{height}",controlStyle:"width:5em",label:n.lang.common.height,title:n.lang.common.cssLengthTooltip,"default":"",getValue:a,validate:CKEDITOR.dialog.validate.cssLength(n.lang.common.invalidCssLength.replace("%1",n.lang.common.height)),onChange:function(){var e=this.getDialog().getContentElement("advanced","advStyles");e&&e.updateStyle("height",this.getValue())},setup:function(e){(e=e.getStyle("height"))&&this.setValue(e)},commit:i}]},{type:"html",html:"&nbsp;"},{type:"text",id:"txtCellSpace",requiredContent:"table[cellspacing]",controlStyle:"width:3em",label:n.lang.table.cellSpace,"default":n.filter.check("table[cellspacing]")?1:0,validate:CKEDITOR.dialog.validate.number(n.lang.table.invalidCellSpacing),setup:function(e){this.setValue(e.getAttribute("cellSpacing")||"")},commit:function(e,t){this.getValue()?t.setAttribute("cellSpacing",this.getValue()):t.removeAttribute("cellSpacing")}},{type:"text",id:"txtCellPad",requiredContent:"table[cellpadding]",controlStyle:"width:3em",label:n.lang.table.cellPad,"default":n.filter.check("table[cellpadding]")?1:0,validate:CKEDITOR.dialog.validate.number(n.lang.table.invalidCellPadding),setup:function(e){this.setValue(e.getAttribute("cellPadding")||"")},commit:function(e,t){this.getValue()?t.setAttribute("cellPadding",this.getValue()):t.removeAttribute("cellPadding")}}]}]},{type:"html",align:"right",html:""},{type:"vbox",padding:0,children:[{type:"text",id:"txtCaption",requiredContent:"caption",label:n.lang.table.caption,setup:function(e){if(this.enable(),e=e.getElementsByTag("caption"),e.count()>0){var e=e.getItem(0),t=e.getFirst(CKEDITOR.dom.walker.nodeType(CKEDITOR.NODE_ELEMENT));t&&!t.equals(e.getBogus())?(this.disable(),this.setValue(e.getText())):(e=CKEDITOR.tools.trim(e.getText()),this.setValue(e))}},commit:function(e,t){if(this.isEnabled()){var a=this.getValue(),i=t.getElementsByTag("caption");if(a)i.count()>0?(i=i.getItem(0),i.setHtml("")):(i=new CKEDITOR.dom.element("caption",n.document),t.getChildCount()?i.insertBefore(t.getFirst()):i.appendTo(t)),i.append(new CKEDITOR.dom.text(a,n.document));else if(i.count()>0)for(a=i.count()-1;a>=0;a--)i.getItem(a).remove()}}},{type:"text",id:"txtSummary",requiredContent:"table[summary]",label:n.lang.table.summary,setup:function(e){this.setValue(e.getAttribute("summary")||"")},commit:function(e,t){this.getValue()?t.setAttribute("summary",this.getValue()):t.removeAttribute("summary")}}]}]},s&&s.createAdvancedTab(n,null,"table")]}}var a=CKEDITOR.tools.cssLength,i=function(e){var t=this.id;e.info||(e.info={}),e.info[t]=this.getValue()};CKEDITOR.dialog.add("table",function(e){return n(e,"table")}),CKEDITOR.dialog.add("tableProperties",function(e){return n(e,"tableProperties")})})();