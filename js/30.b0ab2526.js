"use strict";(self["webpackChunktool"]=self["webpackChunktool"]||[]).push([[30],{7351:function(t,e,i){i.d(e,{Z:function(){return f}});var l=function(){var t=this,e=t._self._c;return e("header",{class:"flex-xb "+(t.navShowFlag?"open":"")},[e("a",{staticClass:"logo pic",attrs:{href:"/"}},[e("img",{attrs:{src:t.getLogo,alt:"logo"}})]),e("div",{staticClass:"center"},[t._t("title")],2),e("div",{staticClass:"navbar-toggle",attrs:{title:"导航：点击打开"},on:{click:t.switchNav}},[e("span",{staticClass:"line-top"}),e("span",{staticClass:"line-middle"}),e("span",{staticClass:"line-bottom"})]),e("div",{staticClass:"navGroup flex-yc"},t._l(t.List,(function(i,l){return e("router-link",{key:l,attrs:{to:i.path},on:{click:function(e){return t.itemTo(i)}}},[t._v(" "+t._s(i.meta.title)+" ")])})),1)])},a=[],s=i(3562),o={props:{logoType:{default:"tool",type:String}},computed:{getLogo(){let t="";switch(this.logoType){case"blog":t=i(5522);break;default:t=i(1447);break}return t}},data(){return{navShowFlag:!0,List:[]}},created(){this.List=s._},methods:{switchNav(){this.navShowFlag=!this.navShowFlag}}},n=o,r=i(1001),c=(0,r.Z)(n,l,a,!1,null,null,null),f=c.exports},1030:function(t,e,i){i.r(e),i.d(e,{default:function(){return f}});var l=function(){var t=this,e=t._self._c;return e("div",{staticClass:"mediaTool _page",attrs:{theme:t.form.theme}},[e("Header",[e("div",{staticClass:"flex-yc",attrs:{slot:"title"},slot:"title"},[e("h1",[t._v("自适应计算器")]),e("div",{staticClass:"openSetting el-icon-setting",on:{click:function(e){t.dialogVisible=!0}}})])]),e("div",{staticClass:"configUrl flex-xb"},[e("el-dialog",{attrs:{title:"设置",visible:t.dialogVisible,width:"50%","before-close":t.handleClose},on:{"update:visible":function(e){t.dialogVisible=e}}},[e("el-form",{ref:"form",attrs:{model:t.form,"label-width":"4em"}},[e("el-form-item",{attrs:{label:"网址"}},[e("el-input",{model:{value:t.form.url,callback:function(e){t.$set(t.form,"url",e)},expression:"form.url"}})],1),e("el-form-item",{attrs:{label:"主题"}},[e("el-switch",{model:{value:t.form.theme,callback:function(e){t.$set(t.form,"theme",e)},expression:"form.theme"}}),e("span",{staticStyle:{"margin-left":"20px"}},[t.form.theme?e("el-tag",{attrs:{type:"info"}},[t._v("黑夜")]):e("el-tag",[t._v("白天")])],1)],1),e("el-form-item",{attrs:{label:"高度"}},[e("el-switch",{model:{value:t.form.allHeight,callback:function(e){t.$set(t.form,"allHeight",e)},expression:"form.allHeight"}}),e("span",{staticStyle:{"margin-left":"20px"}},[t.form.allHeight?e("el-tag",{attrs:{type:"info"}},[t._v("自由")]):e("el-tag",[t._v("限制")])],1)],1)],1),e("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[e("el-button",{on:{click:function(e){return t.SaveConfig()}}},[t._v("已自动保存点击关闭")]),e("el-button",{attrs:{type:"primary"},on:{click:function(e){return t.SaveConfig(!0)}}},[t._v("记住配置 ")])],1)],1)],1),e("div",{staticClass:"view-box"},[e("ul",{staticClass:"flex"},t._l(t.userOption,(function(i,l){return e("li",{key:l,style:{width:i.size[0]+"px",height:t.form.allHeight?i.size[1]+"px":"667px"}},[e("div",{staticClass:"info"},[e("h2",[t._v(t._s(i.name))]),e("p",[t._v(" "+t._s(i.size[0])+" * "+t._s(t.form.allHeight?i.size[1]:667)+" ")])]),e("div",{staticClass:"iframe-box"},[t.form.url?e("iframe",{attrs:{src:t.form.url,frameborder:"0"}}):t._e()])])})),0)])],1)},a=[],s=i(7351),o={name:"mediaTest",components:{Header:s.Z},data(){return{dialogVisible:!1,form:{theme:!1,allHeight:!0},defaultOption:{phone:[{name:"iphone SE",size:[375,667]},{name:"XiaoMi 11",size:[360,800]},{name:"iphone 12Pro",size:[390,844]},{name:"iphone XR",size:[414,896]}],pad:[{name:"iPad Air",size:[820,1180]},{name:"iPad Mini",size:[768,1024]}]},userOption:[{name:"iphone SE",size:[375,667]},{name:"XiaoMi 11",size:[360,800]},{name:"iphone 12Pro",size:[390,844]},{name:"iphone XR",size:[414,896]}]}},created(){let t=localStorage.getItem("userConfig");t&&(this.$message("已从缓存中恢复配置"),console.log(JSON.parse(t)),this.form=JSON.parse(t))},methods:{SaveConfig(t){this.dialogVisible=!1,this.$forceUpdate(),t&&localStorage.setItem("userConfig",JSON.stringify(this.form))},handleClose(t){this.dialogVisible=!1}}},n=o,r=i(1001),c=(0,r.Z)(n,l,a,!1,null,null,null),f=c.exports},1447:function(t,e,i){t.exports=i.p+"img/logo-tool.a224c8a4.svg"},5522:function(t,e,i){t.exports=i.p+"img/logo.694eb3e1.svg"}}]);
//# sourceMappingURL=30.b0ab2526.js.map