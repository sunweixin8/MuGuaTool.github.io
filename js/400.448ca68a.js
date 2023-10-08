"use strict";(self["webpackChunktool"]=self["webpackChunktool"]||[]).push([[400],{8089:function(e,t,i){i.r(t),i.d(t,{default:function(){return f}});var o=function(){var e=this,t=e._self._c;return t("div",{staticClass:"_page"},[t("Header",[t("h1",{attrs:{slot:"title"},slot:"title"},[e._v("自适应计算器")])]),t("div",{staticClass:"computed flex-xb"},[t("div",{staticClass:"ev source"},[t("div",{staticClass:"head flex-yc flex-xb"},[t("p",[e._v("需要计算的内容")]),t("el-button",{attrs:{size:"small",type:"primary",icon:"el-icon-setting"},on:{click:e.switchConfig}},[e._v(" "+e._s(e.hidenConfig?"OK":"设置计算规则")+" ")])],1),t("textarea",{directives:[{name:"show",rawName:"v-show",value:!e.hidenConfig,expression:"!hidenConfig"},{name:"model",rawName:"v-model",value:e.oldStyle,expression:"oldStyle"}],domProps:{value:e.oldStyle},on:{input:function(t){t.target.composing||(e.oldStyle=t.target.value)}}}),t("div",{directives:[{name:"show",rawName:"v-show",value:e.hidenConfig,expression:"hidenConfig"}],staticClass:"config"},[t("el-form",{ref:"form",attrs:{model:e.config,"label-width":"10em"}},[t("el-form-item",{attrs:{label:"是否计算边框"}},[t("el-switch",{model:{value:e.config.isComputedBorder,callback:function(t){e.$set(e.config,"isComputedBorder",t)},expression:"config.isComputedBorder"}}),t("span",{staticStyle:{"margin-left":"20px"}},[e.config.isComputedBorder?t("el-tag",{attrs:{type:"info"}},[e._v("计算")]):t("el-tag",[e._v("不计算")])],1)],1),t("el-form-item",{attrs:{label:"网站模式"}},[t("el-switch",{model:{value:e.config.isSiteMode,callback:function(t){e.$set(e.config,"isSiteMode",t)},expression:"config.isSiteMode"}}),t("span",{staticStyle:{"margin-left":"20px"}},[e.config.isSiteMode?t("el-tag",{attrs:{type:"info"}},[e._v("会自动加media查询")]):t("el-tag",[e._v("不会自动加media查询")])],1)],1),t("el-form-item",{directives:[{name:"show",rawName:"v-show",value:e.config.isSiteMode,expression:"config.isSiteMode"}],attrs:{label:"便捷网站模式"}},[t("div",{staticClass:"input-tip"},[e._v("网站模式时手机端自动删除多余css")]),t("el-switch",{model:{value:e.config.removeMobCss,callback:function(t){e.$set(e.config,"removeMobCss",t)},expression:"config.removeMobCss"}}),t("span",{staticStyle:{"margin-left":"20px"}},[e.config.removeMobCss?t("el-tag",{attrs:{type:"info"}},[e._v("会自动加media查询")]):t("el-tag",[e._v("不会自动加media查询")])],1)],1),t("el-form-item",{attrs:{label:"文字最小值"}},[t("div",{staticClass:"input-tip"},[e._v("小于等于这个值的文字不参与计算")]),t("el-input",{model:{value:e.config.sizeMin,callback:function(t){e.$set(e.config,"sizeMin",t)},expression:"config.sizeMin"}})],1),t("el-form-item",{attrs:{label:"计算方法=Value ÷"}},[t("div",{staticClass:"input-tip"},[e._v("1920/375")]),t("el-input",{model:{value:e.config.sizeComputed,callback:function(t){e.$set(e.config,"sizeComputed","string"===typeof t?t.trim():t)},expression:"config.sizeComputed"}})],1)],1)],1)]),t("div",{staticClass:"ev result"},[t("div",{staticClass:"head flex-yc flex-xb"},[t("p",[e._v("计算结果:")]),t("el-button",{attrs:{size:"small",type:"primary",icon:"el-icon-document-copy"},on:{click:function(t){return e.copyTextToClipboard(t)}}},[e._v(" 点击复制 ")])],1),t("pre",[e._v("          "),t("code",{staticClass:"language-css",attrs:{id:"Code"},domProps:{innerHTML:e._s(e.newStyle)}}),e._v("\n        ")])])]),t("div",{class:"tips "+(e.tipShow?"show":"")},[e._v("✅ Copy successfully !!! 🌈")])],1)},s=[],n=i(7351),l=i(6798),a=i.n(l),c={name:"computedMedia",components:{Header:n.Z},data(){return{oldStyle:".home1 {\n    border-bottom: 1px solid #ECEEF2;\n    padding-bottom: 7px;\n}\n.home1 .top,\n.home1 .top .asdf{\n    margin: 12px 0 9px;\n    font-size: 14px;\n}",hidenConfig:!1,tipShow:!1,newStyle:"",config:{sizeComputed:1920,sizeMin:1,isComputedBorder:!1,isSiteMode:!0,removeMobCss:!0}}},watch:{oldStyle:{handler:function(e,t){this.createdNewStyle()},immediate:!0}},methods:{switchConfig(){this.hidenConfig=!this.hidenConfig,this.createdNewStyle()},createdNewStyle(){let e=this.oldStyle;e=e.replace(/}/g,"}@@@"),e=e.split("@@@");let t=this.computedStyle(e);if(this.config.isSiteMode){var i="";this.config.removeMobCss&&(i=this.computedMobStyle(e)),t=`/* pc */\n@media screen {\n${t}\n}\n/* mob */\n@media screen and (max-width:991px) {\n${i}\n}\n/* 自动计算前 */\n@media screen and (max-width:1px) {\n${this.oldStyle}\n}`}this.newStyle=t,this.$nextTick((()=>{let e=document.getElementById("Code");a().highlightElement(e)}))},computedStyle(e){let t="";return e.forEach((e=>{e=e.replace(/(?<={)(.*\s*(?!}))*/g,(e=>{let t=e.replace(/;/g,";@@@").split("@@@"),o="";return t.forEach(((e,t)=>{if(-1!=e.indexOf("font-size"))o+=i(e,this.config.sizeComputed,this.config.sizeMin);else if(-1!=e.indexOf("border")){if(!this.config.isComputedBorder)return void(o+=e);o+=i(e,this.config.sizeComputed)}else o+=i(e,this.config.sizeComputed)})),o})),t+=e})),t;function i(e,t,i){return i?e.replace(/(\d+px)/g,(e=>parseFloat(e)<i?i+"px":Math.round((parseFloat(e)/t*1e5).toFixed(4))/1e3+"vw")):e.replace(/(\d+px)/g,(e=>Math.round((parseFloat(e)/t*1e5).toFixed(4))/1e3+"vw"))}},computedMobStyle(e){let t="";return e.forEach((e=>{e=e.replace(/(?<={)(.*\s*(?!}))*/g,(e=>{let t=e.replace(/;/g,";@@@").split("@@@"),i="";return t.forEach(((e,t)=>{-1==e.indexOf("px")&&-1==e.indexOf("%")&&-1==e.indexOf("{")&&-1==e.indexOf("}")&&-1==e.indexOf("flex")||(i+=e)})),i})),t+=e})),t},copyTextToClipboard(e){let t=this;this.tipShow=!1;let i=this.newStyle;if(navigator.clipboard)navigator.clipboard.writeText(i).then((function(){t.tipShow=!0}),(function(e){console.error("Async: Could not copy text: ",e)}));else{function o(e){let i=document.createElement("textarea");i.value=e,i.style.top="0",i.style.left="0",i.style.position="fixed",document.body.appendChild(i),i.focus(),i.select();try{document.execCommand("copy");t.tipShow=!0;var o=setTimeout((()=>{t.tipShow=!1,clearTimeout(o)}),1e3)}catch(s){console.error("Fallback: Oops, unable to copy",s)}document.body.removeChild(i)}o(i)}}}},r=c,d=i(1001),p=(0,d.Z)(r,o,s,!1,null,null,null),f=p.exports}}]);
//# sourceMappingURL=400.448ca68a.js.map