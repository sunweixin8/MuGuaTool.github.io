(self["webpackChunktool"]=self["webpackChunktool"]||[]).push([[102],{2102:function(t,e,i){"use strict";i.r(e),i.d(e,{default:function(){return u}});var s=function(){var t=this,e=t._self._c;return e("div",{staticClass:"_page"},[e("div",{staticClass:"home1 flex"},t._l(t.List,(function(s,g){return e("div",{key:g,staticClass:"ev"},[e("div",{staticClass:"bg",style:"background-image: url("+i(4879)(`./homebg-${t.bgList[g]||3}.jpg`)+")"}),e("div",{staticClass:"intr"},[e("h2",{on:{click:function(e){return t.itemTo(s)}}},[t._v(t._s(s.meta.title))])])])})),0)])},g=[],o=(i(7658),i(3562)),n={name:"home",data(){return{List:[],bgList:[]}},created(){this.List=o._;let t=localStorage.getItem("bgList");if(t){if(t=JSON.parse(t),this.List.length!=t.length)return this.getBgList(),void localStorage.setItem("bgList",JSON.stringify(this.bgList));this.bgList=t}this.getBgList(),localStorage.setItem("bgList",JSON.stringify(this.bgList))},methods:{itemTo(t){console.log(t),this.$router.push(t.path)},getBgList(){if(!(this.bgList.length>=this.List.length)){var t=Math.floor(10*Math.random())+1;this.bgList.includes(t)||this.bgList.push(t),this.getBgList()}}}},r=n,p=i(1001),c=(0,p.Z)(r,s,g,!1,null,null,null),u=c.exports},4879:function(t,e,i){var s={"./homebg-1.jpg":1569,"./homebg-10.jpg":1309,"./homebg-11.jpg":9428,"./homebg-12.jpg":2220,"./homebg-13.jpg":3709,"./homebg-14.jpg":3208,"./homebg-15.jpg":6918,"./homebg-2.jpg":4122,"./homebg-3.jpg":3935,"./homebg-4.jpg":6641,"./homebg-5.jpg":9756,"./homebg-6.jpg":2097,"./homebg-7.jpg":5159,"./homebg-8.jpg":6203,"./homebg-9.jpg":8786};function g(t){var e=o(t);return i(e)}function o(t){if(!i.o(s,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return s[t]}g.keys=function(){return Object.keys(s)},g.resolve=o,t.exports=g,g.id=4879},1569:function(t,e,i){"use strict";t.exports=i.p+"img/homebg-1.1e2e2d99.jpg"},1309:function(t,e,i){"use strict";t.exports=i.p+"img/homebg-10.7452ae01.jpg"},9428:function(t,e,i){"use strict";t.exports=i.p+"img/homebg-11.ca62a1ee.jpg"},2220:function(t,e,i){"use strict";t.exports=i.p+"img/homebg-12.8a857c62.jpg"},3709:function(t,e,i){"use strict";t.exports=i.p+"img/homebg-13.569c368f.jpg"},3208:function(t,e,i){"use strict";t.exports=i.p+"img/homebg-14.6bb9971e.jpg"},6918:function(t,e,i){"use strict";t.exports=i.p+"img/homebg-15.96a4700c.jpg"},4122:function(t,e,i){"use strict";t.exports=i.p+"img/homebg-2.2bcc486f.jpg"},3935:function(t,e,i){"use strict";t.exports=i.p+"img/homebg-3.b217a970.jpg"},6641:function(t,e,i){"use strict";t.exports=i.p+"img/homebg-4.18259606.jpg"},9756:function(t,e,i){"use strict";t.exports=i.p+"img/homebg-5.6f278298.jpg"},2097:function(t,e,i){"use strict";t.exports=i.p+"img/homebg-6.c2325f6f.jpg"},5159:function(t,e,i){"use strict";t.exports=i.p+"img/homebg-7.0444c1c0.jpg"},6203:function(t,e,i){"use strict";t.exports=i.p+"img/homebg-8.1a1c6d09.jpg"},8786:function(t,e,i){"use strict";t.exports=i.p+"img/homebg-9.215d2e24.jpg"}}]);
//# sourceMappingURL=102.e7afb3af.js.map