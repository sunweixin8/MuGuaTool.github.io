"use strict";(self["webpackChunktool"]=self["webpackChunktool"]||[]).push([[583],{3275:function(e,t,i){i.d(t,{A:function(){return f}});var l=function(){var e=this,t=e._self._c;return t("header",{class:"flex-xb "+(e.navShowFlag?"open":"")},[t("a",{staticClass:"logo pic",attrs:{href:"/home"}},[t("img",{attrs:{src:e.getLogo,alt:"logo"}})]),t("div",{staticClass:"center"},[e._t("title")],2),t("div",{staticClass:"navbar-toggle",attrs:{title:"导航：点击打开"},on:{click:e.switchNav}},[t("span",{staticClass:"line-top"}),t("span",{staticClass:"line-middle"}),t("span",{staticClass:"line-bottom"})]),t("div",{staticClass:"navGroup flex-yc"},e._l(e.List,(function(i,l){return t("router-link",{key:l,attrs:{to:i.path},on:{click:function(t){return e.itemTo(i)}}},[e._v(" "+e._s(i.meta.title)+" ")])})),1)])},a=[],s=i(3723),o={props:{logoType:{default:"tool",type:String}},computed:{getLogo(){let e="";switch(this.logoType){case"blog":e=i(7503);break;default:e=i(5950);break}return e}},data(){return{navShowFlag:!1,List:[]}},created(){this.List=s.J.filter((e=>!1!==e.meta.homeShow))},methods:{switchNav(){this.navShowFlag=!this.navShowFlag}}},n=o,r=i(1656),c=(0,r.A)(n,l,a,!1,null,null,null),f=c.exports},9583:function(e,t,i){i.r(t),i.d(t,{default:function(){return f}});var l=function(){var e=this,t=e._self._c;return t("div",{staticClass:"mediaTool _page",attrs:{theme:e.form.theme}},[t("Header",[t("div",{staticClass:"flex-yc",attrs:{slot:"title"},slot:"title"},[t("h1",[e._v("自适应计算器")]),t("div",{staticClass:"openSetting el-icon-setting",on:{click:function(t){e.dialogVisible=!0}}})])]),t("div",{staticClass:"configUrl flex-xb"},[t("el-dialog",{attrs:{title:"设置",visible:e.dialogVisible,width:"50%","before-close":e.handleClose},on:{"update:visible":function(t){e.dialogVisible=t}}},[t("el-form",{ref:"form",attrs:{model:e.form,"label-width":"4em"}},[t("el-form-item",{attrs:{label:"网址"}},[t("el-input",{model:{value:e.form.url,callback:function(t){e.$set(e.form,"url",t)},expression:"form.url"}})],1),t("el-form-item",{attrs:{label:"主题"}},[t("el-switch",{model:{value:e.form.theme,callback:function(t){e.$set(e.form,"theme",t)},expression:"form.theme"}}),t("span",{staticStyle:{"margin-left":"20px"}},[e.form.theme?t("el-tag",{attrs:{type:"info"}},[e._v("黑夜")]):t("el-tag",[e._v("白天")])],1)],1),t("el-form-item",{attrs:{label:"高度"}},[t("el-switch",{model:{value:e.form.allHeight,callback:function(t){e.$set(e.form,"allHeight",t)},expression:"form.allHeight"}}),t("span",{staticStyle:{"margin-left":"20px"}},[e.form.allHeight?t("el-tag",{attrs:{type:"info"}},[e._v("自由")]):t("el-tag",[e._v("限制")])],1)],1)],1),t("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[t("el-button",{on:{click:function(t){return e.SaveConfig()}}},[e._v("已自动保存点击关闭")]),t("el-button",{attrs:{type:"primary"},on:{click:function(t){return e.SaveConfig(!0)}}},[e._v("记住配置 ")])],1)],1)],1),t("div",{staticClass:"view-box"},[t("ul",{staticClass:"flex"},e._l(e.userOption,(function(i,l){return t("li",{key:l,style:{width:i.size[0]+"px",height:e.form.allHeight?i.size[1]+"px":"667px"}},[t("div",{staticClass:"info"},[t("h2",[e._v(e._s(i.name))]),t("p",[e._v(" "+e._s(i.size[0])+" * "+e._s(e.form.allHeight?i.size[1]:667)+" ")])]),t("div",{staticClass:"iframe-box"},[e.form.url?t("iframe",{attrs:{src:e.form.url,frameborder:"0"}}):e._e()])])})),0)])],1)},a=[],s=i(3275),o={name:"mediaTest",components:{Header:s.A},data(){return{dialogVisible:!1,form:{theme:!1,allHeight:!0},defaultOption:{phone:[{name:"iphone SE",size:[375,667]},{name:"XiaoMi 11",size:[360,800]},{name:"iphone 12Pro",size:[390,844]},{name:"iphone XR",size:[414,896]}],pad:[{name:"iPad Air",size:[820,1180]},{name:"iPad Mini",size:[768,1024]}]},userOption:[{name:"iphone SE",size:[375,667]},{name:"XiaoMi 11",size:[360,800]},{name:"iphone 12Pro",size:[390,844]},{name:"iphone XR",size:[414,896]}]}},created(){let e=localStorage.getItem("userConfig");e&&(this.$message("已从缓存中恢复配置"),console.log(JSON.parse(e)),this.form=JSON.parse(e))},methods:{SaveConfig(e){this.dialogVisible=!1,this.$forceUpdate(),e&&localStorage.setItem("userConfig",JSON.stringify(this.form))},handleClose(e){this.dialogVisible=!1}}},n=o,r=i(1656),c=(0,r.A)(n,l,a,!1,null,null,null),f=c.exports},5950:function(e,t,i){e.exports=i.p+"img/logo-tool.a224c8a4.svg"},7503:function(e,t,i){e.exports=i.p+"img/logo.694eb3e1.svg"}}]);
//# sourceMappingURL=583.4f809d64.js.map