CKEDITOR.plugins.add("uicolor",{requires:["dialog"],lang:["en"],init:function(b){if(CKEDITOR.env.ie6Compat){return}b.addCommand("uicolor",new CKEDITOR.dialogCommand("uicolor"));b.ui.addButton("UIColor",{label:b.lang.uicolor.title,command:"uicolor",icon:this.path+"uicolor.gif"});CKEDITOR.dialog.add("uicolor",this.path+"dialogs/uicolor.js");CKEDITOR.scriptLoader.load(CKEDITOR.getUrl("plugins/uicolor/yui/yui.js"));b.element.getDocument().appendStyleSheet(CKEDITOR.getUrl("plugins/uicolor/yui/assets/yui.css"))}});