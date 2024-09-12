"use strict";(self["webpackChunktool"]=self["webpackChunktool"]||[]).push([[887],{4167:function(e,t,i){i.r(t),i.d(t,{default:function(){return c}});var o=function(){var e=this,t=e._self._c;return t("div",{staticClass:"_page"},[t("Header",[t("h1",{attrs:{slot:"title"},slot:"title"},[e._v("适老化生成器")])]),t("div",{staticClass:"computed flex-xb"},[t("div",{staticClass:"ev source"},[t("div",{staticClass:"head flex-xb"},[t("p",[e._v("需要计算的内容")]),t("el-button",{attrs:{size:"small",type:"primary",icon:"el-icon-setting"},on:{click:e.switchConfig}},[e._v(" "+e._s(e.hidenConfig?"保存并重进计算":"设置计算规则")+" ")])],1),t("textarea",{directives:[{name:"show",rawName:"v-show",value:!e.hidenConfig,expression:"!hidenConfig"},{name:"model",rawName:"v-model",value:e.oldStyle,expression:"oldStyle"}],domProps:{value:e.oldStyle},on:{input:function(t){t.target.composing||(e.oldStyle=t.target.value)}}}),t("div",{directives:[{name:"show",rawName:"v-show",value:e.hidenConfig,expression:"hidenConfig"}],staticClass:"config"},[t("div",{staticClass:"content"},[t("label",[t("span",[e._v("自定义前缀")]),t("input",{directives:[{name:"model",rawName:"v-model.trim",value:e.qianzhui,expression:"qianzhui",modifiers:{trim:!0}}],domProps:{value:e.qianzhui},on:{input:function(t){t.target.composing||(e.qianzhui=t.target.value.trim())},blur:function(t){return e.$forceUpdate()}}})]),t("label",[t("span",[e._v("文字最小值")]),t("input",{directives:[{name:"model",rawName:"v-model.trim",value:e.sizeMin,expression:"sizeMin",modifiers:{trim:!0}}],attrs:{type:"number"},domProps:{value:e.sizeMin},on:{input:function(t){t.target.composing||(e.sizeMin=t.target.value.trim())},blur:function(t){return e.$forceUpdate()}}})]),t("label",[t("span",[e._v("文字计算方法")]),e._v(" Value*"),t("input",{directives:[{name:"model",rawName:"v-model.trim",value:e.sizeComputed,expression:"sizeComputed",modifiers:{trim:!0}}],attrs:{type:"number"},domProps:{value:e.sizeComputed},on:{input:function(t){t.target.composing||(e.sizeComputed=t.target.value.trim())},blur:function(t){return e.$forceUpdate()}}})]),t("label",[t("span",[e._v("其他属性计算方法")]),e._v(" Value*"),t("input",{directives:[{name:"model",rawName:"v-model.trim",value:e.outerComputed,expression:"outerComputed",modifiers:{trim:!0}}],attrs:{type:"number"},domProps:{value:e.outerComputed},on:{input:function(t){t.target.composing||(e.outerComputed=t.target.value.trim())},blur:function(t){return e.$forceUpdate()}}})])])])]),t("div",{staticClass:"ev result"},[t("div",{staticClass:"head flex-xb"},[t("p",[e._v("计算结果:")]),t("el-button",{attrs:{size:"small",type:"primary",icon:"el-icon-document-copy"},on:{click:function(t){return e.copyTextToClipboard(t)}}},[e._v(" 点击复制 ")])],1),t("pre",[t("code",{staticClass:"language-css",attrs:{id:"Code"},domProps:{innerHTML:e._s(e.newStyle)}})])])]),t("div",{class:"tips "+(e.tipShow?"show":"")},[e._v("✅ Copy successfully !!! 🌈")])],1)},n=[],r=i(821),a=i(3656),s=i.n(a),l={components:{Header:r.A},data(){return{oldStyle:"\n.home1 {\n    border-bottom: 1px solid #ECEEF2;padding-bottom: 7px;\n}\n.home1 .top,\n.home1 .top .asdf{\n    margin: 12px 0 9px;\n    font-size: 14px;\n}",sizeMin:18,qianzhui:".elder",sizeComputed:1.5,outerComputed:1.5,hidenConfig:!1,tipShow:!1,newStyle:""}},watch:{oldStyle:{handler:function(e,t){this.createdNewStyle()},immediate:!0}},methods:{switchConfig(){this.hidenConfig=!this.hidenConfig,this.createdNewStyle()},createdNewStyle(){let e=this.oldStyle;e=e.replace(/}/g,"}@@@"),e=e.split("@@@");let t="";function i(e,t,i){return i?e.replace(/(\d+px)/g,(e=>parseFloat(e)<i?i+"px":Math.ceil(parseFloat(e)*t)+"px")):e.replace(/(\d+px)/g,(e=>Math.ceil(parseFloat(e)*t)+"px"))}e.forEach((e=>{e=e.replace(/.*(-,|{)/g,(e=>{if(-1!=e.indexOf("@media"))return e;if(-1!=e.indexOf("@keyframes"))return e;if(/^[from|to|\d]/g.test(e.trim()))return e;console.log(e);let t=e.trim(),i=e.length-t.length,o="";for(var n=0;n<i;n++)o+=" ";return o+this.qianzhui+" "+t})),e=e.replace(/(?<={)(.*\s*(?!}))*/g,(e=>{let t=e.replace(/;/g,";@@@").split("@@@"),o="";return t.forEach(((e,t)=>{-1!=e.indexOf("font-size")?o+=i(e,this.sizeComputed,this.sizeMin):o+=i(e,this.outerComputed)})),o})),t+=e})),this.newStyle=t,this.$nextTick((()=>{let e=document.getElementById("Code");s().highlightElement(e)}))},copyTextToClipboard(e){let t=this;this.tipShow=!1;let i=this.newStyle;if(navigator.clipboard)navigator.clipboard.writeText(i).then((function(){t.tipShow=!0}),(function(e){console.error("Async: Could not copy text: ",e)}));else{function o(e){let i=document.createElement("textarea");i.value=e,i.style.top="0",i.style.left="0",i.style.position="fixed",document.body.appendChild(i),i.focus(),i.select();try{document.execCommand("copy");t.tipShow=!0;var o=setTimeout((()=>{t.tipShow=!1,clearTimeout(o)}),1e3)}catch(n){console.error("Fallback: Oops, unable to copy",n)}document.body.removeChild(i)}o(i)}}}},u=l,d=i(1656),p=(0,d.A)(u,o,n,!1,null,null,null),c=p.exports}}]);
//# sourceMappingURL=887.616730e0.js.map