!function(){function t(t,r){return function(t){if(Array.isArray(t))return t}(t)||function(t,n){var r=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=r){var e,o,a,u,i=[],c=!0,l=!1;try{if(a=(r=r.call(t)).next,0===n){if(Object(r)!==r)return;c=!1}else for(;!(c=(e=a.call(r)).done)&&(i.push(e.value),i.length!==n);c=!0);}catch(t){l=!0,o=t}finally{try{if(!c&&null!=r.return&&(u=r.return(),Object(u)!==u))return}finally{if(l)throw o}}return i}}(t,r)||function(t,r){if(!t)return;if("string"==typeof t)return n(t,r);var e=Object.prototype.toString.call(t).slice(8,-1);"Object"===e&&t.constructor&&(e=t.constructor.name);if("Map"===e||"Set"===e)return Array.from(t);if("Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e))return n(t,r)}(t,r)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function n(t,n){(null==n||n>t.length)&&(n=t.length);for(var r=0,e=new Array(n);r<n;r++)e[r]=t[r];return e}System.register(["./vue-legacy-d921966d.js","./index-legacy-deae98ad.js"],(function(n,r){"use strict";var e,o,a,u,i,c,l,f,s,d,p,v,g,y;return{setters:[function(t){e=t.s,o=t.d,a=t.c,u=t.x,i=t.p,c=t.N},function(t){l=t.c,f=t.G,s=t.a,d=t.m,p=t.t,v=t.f,g=t.P,y=t.w}],execute:function(){n({c:function(){var t=e().proxy;return function(){return m(t)}},r:m,u:function(){var t=e(),n=((null==t?void 0:t.type)||{}).name,r=void 0===n?"unknown":n;return"".concat(r,"-").concat(++Z)}});var r="van-hairline";n("d","".concat(r,"--surround")),n("B","".concat(r,"--top-bottom")),n("H","van-haptics-feedback"),n("T",5),n("b",{to:[String,Object],url:String,replace:Boolean});function m(t){var n=t.to,r=t.url,e=t.replace,o=t.$router;n&&o?o[e?"replace":"push"](n):r&&(e?location.replace(r):location.href=r)}var b=t(l("badge"),2),h=b[0],S=b[1],x={dot:Boolean,max:s,tag:d("div"),color:String,offset:Array,content:s,showZero:p,position:d("top-right")},j=o({name:h,props:x,setup:function(n,r){var e=r.slots,o=function(){if(e.content)return!0;var t=n.content,r=n.showZero;return v(t)&&""!==t&&(r||0!==t&&"0"!==t)},i=function(){var t=n.dot,r=n.max,a=n.content;if(!t&&o())return e.content?e.content():v(r)&&g(a)&&+a>+r?"".concat(r,"+"):a},c=function(t){return t.startsWith("-")?t.replace("-",""):"-".concat(t)},l=a((function(){var r={background:n.color};if(n.offset){var o=t(n.offset,2),a=o[0],u=o[1],i=t(n.position.split("-"),2),l=i[0],s=i[1];e.default?(r[l]="number"==typeof u?f("top"===l?u:-u):"top"===l?f(u):c(u),r[s]="number"==typeof a?f("left"===s?a:-a):"left"===s?f(a):c(a)):(r.marginTop=f(u),r.marginLeft=f(a))}return r})),s=function(){if(o()||n.dot)return u("div",{class:S([n.position,{dot:n.dot,fixed:!!e.default}]),style:l.value},[i()])};return function(){if(e.default){var t=n.tag;return u(t,{class:S("wrapper")},{default:function(){return[e.default(),s()]}})}return s()}}}),w=n("a",y(j)),A=t(l("config-provider"),2),O=A[0],P=(A[1],Symbol(O)),B=t(l("icon"),2),I=B[0],k=B[1],z={dot:Boolean,tag:d("i"),name:String,size:s,badge:s,color:String,badgeProps:Object,classPrefix:String},T=o({name:I,props:z,setup:function(t,n){var r=n.slots,e=i(P,null),o=a((function(){return t.classPrefix||(null==e?void 0:e.iconPrefix)||k()}));return function(){var n=t.tag,e=t.dot,a=t.name,i=t.size,l=t.badge,s=t.color,d=function(t){return null==t?void 0:t.includes("/")}(a);return u(w,c({dot:e,tag:n,class:[o.value,d?"":"".concat(o.value,"-").concat(a)],style:{color:s,fontSize:f(i)},content:l},t.badgeProps),{default:function(){var t;return[null==(t=r.default)?void 0:t.call(r),d&&u("img",{class:k("image"),src:a},null)]}})}}}),Z=(n("I",y(T)),0)}}}))}();