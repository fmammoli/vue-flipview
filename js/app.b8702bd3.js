(function(t){function n(n){for(var o,s,r=n[0],l=n[1],c=n[2],f=0,u=[];f<r.length;f++)s=r[f],Object.prototype.hasOwnProperty.call(i,s)&&i[s]&&u.push(i[s][0]),i[s]=0;for(o in l)Object.prototype.hasOwnProperty.call(l,o)&&(t[o]=l[o]);p&&p(n);while(u.length)u.shift()();return a.push.apply(a,c||[]),e()}function e(){for(var t,n=0;n<a.length;n++){for(var e=a[n],o=!0,r=1;r<e.length;r++){var l=e[r];0!==i[l]&&(o=!1)}o&&(a.splice(n--,1),t=s(s.s=e[0]))}return t}var o={},i={app:0},a=[];function s(n){if(o[n])return o[n].exports;var e=o[n]={i:n,l:!1,exports:{}};return t[n].call(e.exports,e,e.exports,s),e.l=!0,e.exports}s.m=t,s.c=o,s.d=function(t,n,e){s.o(t,n)||Object.defineProperty(t,n,{enumerable:!0,get:e})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,n){if(1&n&&(t=s(t)),8&n)return t;if(4&n&&"object"===typeof t&&t&&t.__esModule)return t;var e=Object.create(null);if(s.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:t}),2&n&&"string"!=typeof t)for(var o in t)s.d(e,o,function(n){return t[n]}.bind(null,o));return e},s.n=function(t){var n=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(n,"a",n),n},s.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)},s.p="";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],l=r.push.bind(r);r.push=n,r=r.slice();for(var c=0;c<r.length;c++)n(r[c]);var p=l;a.push([0,"chunk-vendors"]),e()})({0:function(t,n,e){t.exports=e("56d7")},"034f":function(t,n,e){"use strict";e("85ec")},"06d4":function(t,n,e){t.exports=e.p+"img/6.19a29a10.jpg"},"11d9":function(t,n,e){t.exports=e.p+"img/3.3f8eeaec.jpg"},"405a":function(t,n,e){t.exports=e.p+"img/2.c7cc15f1.jpg"},"4d0f":function(t,n,e){t.exports=e.p+"img/5.c04b6210.jpg"},"56d7":function(t,n,e){"use strict";e.r(n);e("e260"),e("e6cf"),e("cca6"),e("a79d");var o=e("2b0e"),i=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{class:{"has-mouse":t.hasMouse},attrs:{id:"app"},on:{touchstart:function(n){t.hasMouse=!1}}},[e("Flipbook",{ref:"flipbook",staticClass:"flipbook",attrs:{pages:t.pages,pagesHiRes:t.pagesHiRes,startPage:t.pageNum},on:{"flip-left-start":t.onFlipLeftStart,"flip-left-end":t.onFlipLeftEnd,"flip-right-start":t.onFlipRightStart,"flip-right-end":t.onFlipRightEnd,"zoom-start":t.onZoomStart,"zoom-end":t.onZoomEnd},scopedSlots:t._u([{key:"default",fn:function(n){return[e("div",{staticClass:"action-bar"},[e("left-icon",{staticClass:"btn left",class:{disabled:!n.canFlipLeft},on:{click:n.flipLeft}}),e("plus-icon",{staticClass:"btn plus",class:{disabled:!n.canZoomIn},on:{click:n.zoomIn}}),e("span",{staticClass:"page-num"},[t._v(" Page "+t._s(n.page)+" of "+t._s(n.numPages)+" ")]),e("minus-icon",{staticClass:"btn minus",class:{disabled:!n.canZoomOut},on:{click:n.zoomOut}}),e("right-icon",{staticClass:"btn right",class:{disabled:!n.canFlipRight},on:{click:n.flipRight}})],1)]}}])})],1)},a=[],s=(e("fb6a"),e("d48d"),e("71f6")),r=e("ef7a"),l=e("cd27"),c=e("55fe"),p=e("8330"),f=e("8554"),u=e.n(f),d=e("405a"),g=e.n(d),h=e("11d9"),m=e.n(h),b=e("bafb"),v=e.n(b),w=e("4d0f"),y=e.n(w),F=e("06d4"),j=e.n(F),k={name:"app",components:{Flipbook:p["a"],LeftIcon:s["a"],RightIcon:r["a"],PlusIcon:l["a"],MinusIcon:c["a"]},data:function(){return{pages:[],pagesHiRes:[],hasMouse:!0,pageNum:null}},methods:{onFlipLeftStart:function(t){return console.log("flip-left-start",t)},onFlipLeftEnd:function(t){console.log("flip-left-end",t),window.location.hash="#"+t},onFlipRightStart:function(t){return console.log("flip-right-start",t)},onFlipRightEnd:function(t){console.log("flip-right-end",t),window.location.hash="#"+t},onZoomStart:function(t){return console.log("zoom-start",t)},onZoomEnd:function(t){return console.log("zoom-end",t)},setPageFromHash:function(){var t=parseInt(window.location.hash.slice(1),10);if(isFinite(t))return this.pageNum=t}},mounted:function(){var t=this;console.log("aaa"),window.addEventListener("keydown",(function(n){var e=t.$refs.flipbook;if(e)return 37===n.keyCode&&e.canFlipLeft&&e.flipLeft(),39===n.keyCode&&e.canFlipRight?e.flipRight():void 0})),console.log(this.pages),setTimeout((function(){}),1),this.pages=[null,u.a,g.a,m.a,v.a,y.a,j.a],window.addEventListener("hashchange",this.setPageFromHash),this.setPageFromHash()}},O=k,P=(e("034f"),e("2877")),x=Object(P["a"])(O,i,a,!1,null,null,null),R=x.exports;o["a"].config.productionTip=!1,new o["a"]({render:function(t){return t(R)}}).$mount("#app")},8554:function(t,n,e){t.exports=e.p+"img/1.6a96d8b0.jpg"},"85ec":function(t,n,e){},bafb:function(t,n,e){t.exports=e.p+"img/4.5410ae42.jpg"}});
//# sourceMappingURL=app.b8702bd3.js.map