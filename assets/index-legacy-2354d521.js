!function(){function n(t){return n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(n){return typeof n}:function(n){return n&&"function"==typeof Symbol&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},n(t)}function t(t,e,r){return(e=function(t){var e=function(t,e){if("object"!==n(t)||null===t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var o=r.call(t,e||"default");if("object"!==n(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===e?String:Number)(t)}(t,"string");return"symbol"===n(e)?e:String(e)}(e))in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function e(n,t){return function(n){if(Array.isArray(n))return n}(n)||function(n,t){var e=null==n?null:"undefined"!=typeof Symbol&&n[Symbol.iterator]||n["@@iterator"];if(null!=e){var r,o,i,a,l=[],u=!0,c=!1;try{if(i=(e=e.call(n)).next,0===t){if(Object(e)!==e)return;u=!1}else for(;!(u=(r=i.call(e)).done)&&(l.push(r.value),l.length!==t);u=!0);}catch(s){c=!0,o=s}finally{try{if(!u&&null!=e.return&&(a=e.return(),Object(a)!==a))return}finally{if(c)throw o}}return l}}(n,t)||function(n,t){if(!n)return;if("string"==typeof n)return r(n,t);var e=Object.prototype.toString.call(n).slice(8,-1);"Object"===e&&n.constructor&&(e=n.constructor.name);if("Map"===e||"Set"===e)return Array.from(n);if("Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e))return r(n,t)}(n,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function r(n,t){(null==t||t>n.length)&&(t=n.length);for(var e=0,r=new Array(t);e<t;e++)r[e]=n[e];return r}System.register(["./index-legacy-f925c676.js","./vue-legacy-39bcae04.js","./index-legacy-ec7a8536.js"],(function(n,r){"use strict";var o,i,a,l,u,c,s,f,d,p,y,g,b,m,v,h,S,w,x;return{setters:[null,function(n){o=n.d,i=n.k,a=n.b,l=n.e,u=n.f,c=n.w,s=n.l,f=n.j},function(n){d=n.c,p=n.e,y=n.r,g=n.m,b=n.n,m=n.u,v=n.B,h=n.I,S=n.p,w=n.L,x=n.w}],execute:function(){var n=document.createElement("style");n.textContent=".container{padding-top:15vh;text-align:center}.container img{width:21.33333vw}.container .nav{margin:8vw auto}.container .van-button+.van-button{margin-left:2.66667vw}\n",document.head.appendChild(n);var j=e(d("button"),2),P=j[0],k=j[1],A=p({},y,{tag:g("button"),text:String,icon:String,type:g("default"),size:g("normal"),color:String,block:Boolean,plain:Boolean,round:Boolean,square:Boolean,loading:Boolean,hairline:Boolean,disabled:Boolean,iconPrefix:String,nativeType:g("button"),loadingSize:b,loadingText:String,loadingType:String,iconPosition:g("left")}),B=o({name:P,props:A,emits:["click"],setup:function(n,e){var r=e.emit,o=e.slots,a=m(),l=function(){return n.loading?o.loading?o.loading():i(w,{size:n.loadingSize,type:n.loadingType,class:k("loading")},null):o.icon?i("div",{class:k("icon")},[o.icon()]):n.icon?i(h,{name:n.icon,class:k("icon"),classPrefix:n.iconPrefix},null):void 0},u=function(){var t;if(t=n.loading?n.loadingText:o.default?o.default():n.text)return i("span",{class:k("text")},[t])},c=function(){var t=n.color,e=n.plain;if(t){var r={color:e?t:"white"};return e||(r.background=t),t.includes("gradient")?r.border=0:r.borderColor=t,r}},s=function(t){n.loading?S(t):n.disabled||(r("click",t),a())};return function(){var e=n.tag,r=n.type,o=n.size,a=n.block,f=n.round,d=n.plain,p=n.square,y=n.loading,g=n.disabled,b=n.hairline,m=n.nativeType,h=n.iconPosition,S=[k([r,o,{plain:d,block:a,round:f,square:p,loading:y,disabled:g,hairline:b}]),t({},v,b)];return i(e,{type:m,class:S,style:c(),disabled:g,onClick:s},{default:function(){return[i("div",{class:k("content")},["left"===h&&l(),u(),"right"===h&&l()])]}})}}}),T=x(B),_=""+new URL("logo-58e71734.png",r.meta.url).href,z={class:"container"},C=u("img",{src:_},null,-1),O=u("h2",null,"Ares Mobile",-1),I=u("p",null,"基于 Vant4 和 Vue3 的 H5 多页面前端模板",-1),q={class:"nav"},E=u("p",{style:{color:"#aaa"}},[s(" PC端建议打开 "),u("strong",{style:{color:"#a0a0a0"}},"F12"),s(" 在移动端模式下访问 ")],-1);f(o({__name:"App",setup:function(n){return function(n,t){var e=T;return a(),l("div",z,[C,O,I,u("div",q,[i(e,{type:"primary",url:"https://github.com/zhangsanplus/ares-mobile"},{default:c((function(){return[s(" github ")]})),_:1}),i(e,{type:"primary",url:"./__nav__.html"},{default:c((function(){return[s(" 页面导航 ")]})),_:1})]),E])}}})).mount("#app")}}}))}();
