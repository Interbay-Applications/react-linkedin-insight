!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.LinkedInTag=t():e.LinkedInTag=t()}(window,function(){return function(e){var t={};function n(i){if(t[i])return t[i].exports;var r=t[i]={i:i,l:!1,exports:{}};return e[i].call(r.exports,r,r.exports,n),r.l=!0,r.exports}return n.m=e,n.c=t,n.d=function(e,t,i){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:i})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var i=Object.create(null);if(n.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(i,r,function(t){return e[t]}.bind(null,r));return i},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=1)}([function(e,t,n){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0});var n="undefined"!=typeof window&&void 0!==window.document,i=void 0!==e&&null!=e.versions&&null!=e.versions.node;t.isBrowser=n,t.isNode=i}).call(this,n(3))},function(e,t,n){e.exports=n(2)},function(e,t,n){"use strict";n.r(t);var i=n(0);function r(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}var o=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.initialized=!1,this.disabled=!1}return function(e,t,n){t&&r(e.prototype,t),n&&r(e,n)}(e,[{key:"verifyInit",value:function(){return this.initialized||console.warn("LinkedIn Insight Tag not initialized before using call LinkedInTag.init with required params"),this.initialized}},{key:"init",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:!i.isBrowser;if(this.disabled=t,!this.disabled){window._linkedin_data_partner_ids=window._linkedin_data_partner_ids||[],window._linkedin_data_partner_ids.push(e);var n=document.getElementsByTagName("script")[0],r=document.createElement("script");r.type="text/javascript",r.async=!0,r.src="https://snap.licdn.com/li.lms-analytics/insight.min.js",n.parentNode.insertBefore(r,n),this.initialized=!0}}},{key:"track",value:function(e,t){if(this.verifyInit()&&!this.disabled){t=t||window._linkedin_data_partner_ids[0];var n="https://dc.ads.linkedin.com/collect/?pid=".concat(t,"&conversionId=").concat(e,"&fmt=gif"),i=document.createElement("img");i.alt="",i.height=1,i.width=1,i.src=n}}}]),e}();t.default=new o},function(e,t){var n,i,r=e.exports={};function o(){throw new Error("setTimeout has not been defined")}function u(){throw new Error("clearTimeout has not been defined")}function c(e){if(n===setTimeout)return setTimeout(e,0);if((n===o||!n)&&setTimeout)return n=setTimeout,setTimeout(e,0);try{return n(e,0)}catch(t){try{return n.call(null,e,0)}catch(t){return n.call(this,e,0)}}}!function(){try{n="function"==typeof setTimeout?setTimeout:o}catch(e){n=o}try{i="function"==typeof clearTimeout?clearTimeout:u}catch(e){i=u}}();var a,s=[],l=!1,f=-1;function d(){l&&a&&(l=!1,a.length?s=a.concat(s):f=-1,s.length&&p())}function p(){if(!l){var e=c(d);l=!0;for(var t=s.length;t;){for(a=s,s=[];++f<t;)a&&a[f].run();f=-1,t=s.length}a=null,l=!1,function(e){if(i===clearTimeout)return clearTimeout(e);if((i===u||!i)&&clearTimeout)return i=clearTimeout,clearTimeout(e);try{i(e)}catch(t){try{return i.call(null,e)}catch(t){return i.call(this,e)}}}(e)}}function h(e,t){this.fun=e,this.array=t}function m(){}r.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)t[n-1]=arguments[n];s.push(new h(e,t)),1!==s.length||l||c(p)},h.prototype.run=function(){this.fun.apply(null,this.array)},r.title="browser",r.browser=!0,r.env={},r.argv=[],r.version="",r.versions={},r.on=m,r.addListener=m,r.once=m,r.off=m,r.removeListener=m,r.removeAllListeners=m,r.emit=m,r.prependListener=m,r.prependOnceListener=m,r.listeners=function(e){return[]},r.binding=function(e){throw new Error("process.binding is not supported")},r.cwd=function(){return"/"},r.chdir=function(e){throw new Error("process.chdir is not supported")},r.umask=function(){return 0}}])});
//# sourceMappingURL=linkedin-insight.js.map