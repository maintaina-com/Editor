(function(){function e(h,c){var b;try{b=h.getSelection().getRanges()[0]}catch(a){return null}b.shrink(CKEDITOR.SHRINK_TEXT);return b.getCommonAncestor().getAscendant(c,1)}var d={a:"lower-alpha",A:"upper-alpha",i:"lower-roman",I:"upper-roman",1:"decimal",disc:"disc",circle:"circle",square:"square"};function f(h,c){var b=h.lang.list;if(c=="bulletedListStyle"){return{title:b.bulletedTitle,minWidth:300,minHeight:50,contents:[{id:"info",accessKey:"I",elements:[{type:"select",label:b.type,id:"type",style:"width: 150px; margin: auto;",items:[[b.notset,""],[b.circle,"circle"],[b.disc,"disc"],[b.square,"square"]],setup:function(j){var g=j.getStyle("list-style-type")||d[j.getAttribute("type")]||j.getAttribute("type")||"";this.setValue(g)},commit:function(j){var g=this.getValue();if(g){j.setStyle("list-style-type",g)}else{j.removeStyle("list-style-type")}}}]}],onShow:function(){var j=this.getParentEditor(),g=e(j,"ul");g&&this.setupContent(g)},onOk:function(){var j=this.getParentEditor(),g=e(j,"ul");g&&this.commitContent(g)}}}else{if(c=="numberedListStyle"){var a=[[b.notset,""],[b.lowerRoman,"lower-roman"],[b.upperRoman,"upper-roman"],[b.lowerAlpha,"lower-alpha"],[b.upperAlpha,"upper-alpha"],[b.decimal,"decimal"]];if(!CKEDITOR.env.ie||CKEDITOR.env.version>7){a.concat([[b.armenian,"armenian"],[b.decimalLeadingZero,"decimal-leading-zero"],[b.georgian,"georgian"],[b.lowerGreek,"lower-greek"]])}return{title:b.numberedTitle,minWidth:300,minHeight:50,contents:[{id:"info",accessKey:"I",elements:[{type:"hbox",widths:["25%","75%"],children:[{label:b.start,type:"text",id:"start",validate:CKEDITOR.dialog.validate.integer(b.validateStartNumber),setup:function(j){var g=j.getAttribute("start")||1;g&&this.setValue(g)},commit:function(g){g.setAttribute("start",this.getValue())}},{type:"select",label:b.type,id:"type",style:"width: 100%;",items:a,setup:function(j){var g=j.getStyle("list-style-type")||d[j.getAttribute("type")]||j.getAttribute("type")||"";this.setValue(g)},commit:function(j){var g=this.getValue();if(g){j.setStyle("list-style-type",g)}else{j.removeStyle("list-style-type")}}}]}]}],onShow:function(){var j=this.getParentEditor(),g=e(j,"ol");g&&this.setupContent(g)},onOk:function(){var j=this.getParentEditor(),g=e(j,"ol");g&&this.commitContent(g)}}}}}CKEDITOR.dialog.add("numberedListStyle",function(a){return f(a,"numberedListStyle")});CKEDITOR.dialog.add("bulletedListStyle",function(a){return f(a,"bulletedListStyle")})})();