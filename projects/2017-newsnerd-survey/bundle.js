!function(t){function e(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,e),o.l=!0,o.exports}var n={};e.m=t,e.c=n,e.d=function(t,n,r){e.o(t,n)||Object.defineProperty(t,n,{configurable:!1,enumerable:!0,get:r})},e.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,"a",n),n},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="",e(e.s=0)}([function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{default:t}}function o(){var t=f.node().offsetWidth;h!==t&&(h=t,l.default.resize())}var i=n(1),s=r(i),c=n(3),u=r(c),a=n(4),l=r(a),f=d3.select("body"),h=0;!function(){f.classed("is-mobile",u.default.any()),window.addEventListener("resize",(0,s.default)(o,150)),l.default.init()}()},function(t,e,n){(function(e){function n(t,e,n){function o(e){var n=v,r=g;return v=g=void 0,I=e,b=t.apply(r,n)}function i(t){return I=t,y=setTimeout(l,e),R?o(t):b}function u(t){var n=t-E,r=t-I,o=e-n;return O?w(o,m-r):o}function a(t){var n=t-E,r=t-I;return void 0===E||n>=e||n<0||O&&r>=m}function l(){var t=x();if(a(t))return f(t);y=setTimeout(l,u(t))}function f(t){return y=void 0,M&&v?o(t):(v=g=void 0,b)}function h(){void 0!==y&&clearTimeout(y),I=0,v=E=g=y=void 0}function d(){return void 0===y?b:f(x())}function p(){var t=x(),n=a(t);if(v=arguments,g=this,E=t,n){if(void 0===y)return i(E);if(O)return y=setTimeout(l,e),o(E)}return void 0===y&&(y=setTimeout(l,e)),b}var v,g,m,b,y,E,I=0,R=!1,O=!1,M=!0;if("function"!=typeof t)throw new TypeError(c);return e=s(e)||0,r(n)&&(R=!!n.leading,O="maxWait"in n,m=O?_(s(n.maxWait)||0,e):m,M="trailing"in n?!!n.trailing:M),p.cancel=h,p.flush=d,p}function r(t){var e=typeof t;return!!t&&("object"==e||"function"==e)}function o(t){return!!t&&"object"==typeof t}function i(t){return"symbol"==typeof t||o(t)&&y.call(t)==a}function s(t){if("number"==typeof t)return t;if(i(t))return u;if(r(t)){var e="function"==typeof t.valueOf?t.valueOf():t;t=r(e)?e+"":e}if("string"!=typeof t)return 0===t?t:+t;t=t.replace(l,"");var n=h.test(t);return n||d.test(t)?p(t.slice(2),n?2:8):f.test(t)?u:+t}var c="Expected a function",u=NaN,a="[object Symbol]",l=/^\s+|\s+$/g,f=/^[-+]0x[0-9a-f]+$/i,h=/^0b[01]+$/i,d=/^0o[0-7]+$/i,p=parseInt,v="object"==typeof e&&e&&e.Object===Object&&e,g="object"==typeof self&&self&&self.Object===Object&&self,m=v||g||Function("return this")(),b=Object.prototype,y=b.toString,_=Math.max,w=Math.min,x=function(){return m.Date.now()};t.exports=n}).call(e,n(2))},function(t,e){var n;n=function(){return this}();try{n=n||Function("return this")()||(0,eval)("this")}catch(t){"object"==typeof window&&(n=window)}t.exports=n},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r={android:function(){return navigator.userAgent.match(/Android/i)},blackberry:function(){return navigator.userAgent.match(/BlackBerry/i)},ios:function(){return navigator.userAgent.match(/iPhone|iPad|iPod/i)},opera:function(){return navigator.userAgent.match(/Opera Mini/i)},windows:function(){return navigator.userAgent.match(/IEMobile/i)},any:function(){return r.android()||r.blackberry()||r.ios()||r.opera()||r.windows()}};e.default=r},function(t,e,n){"use strict";function r(t){return d3.format(".0%")(t)}function o(t,e){var n=t.initialize;return t.initialize=function(){n.call(t,H.filter(e))},t}function i(t){P.beginPath(),P.moveTo(t.x+F,t.y),P.arc(t.x,t.y,F,0,2*Math.PI),P.fillStyle=t.fill,P.fill()}function s(){P.clearRect(0,0,N,W),P.save(),H.forEach(i),P.restore()}function c(t){var e={},n=t?d3.nest().key(function(e){return e[t]}).entries(H):[{key:"default"}],r=n.filter(function(t){return"undefined"!==t.key}),o=r.length;return r.map(function(t,e){return{key:t.key,percent:(e+1)/(o+1)}}).forEach(function(t){return e[t.key]=t.percent}),e}function u(t){var e=t.positions,n=t.centerX,r=t.centerY;if(!U)return Promise.resolve();var i=Math.sqrt(H.length)*F/2,s=function(t){var r=V?t[V]:"default";if(!r)return X?-n/2:n;var o=X?n:e[r]*N;return X?o:o+(t[$]===U?1:-1)*i},c=function(t){var n=V?t[V]:"default";if(!n)return X?r:-r/2;var o=X?e[n]*N:r;return X?o+(t[$]===U?1:-1)*i:o};return new Promise(function(t){B.alphaDecay(.04).alphaMin(.2).velocityDecay(.7).force("collide",null).force("x",d3.forceX(s).strength(1)).force("y",d3.forceY(c).strength(1)).on("end",t),Object.keys(e).forEach(function(t,e){B.force("p"+e,o(d3.forceManyBody().strength(-30),function(e){return!e[V]||e[V]===t}))}),B.alpha(1).restart()})}function a(t){var e=t.positions,n=t.centerX,r=t.centerY,i=function(t){var r=V?t[V]:"default";return r?X?n:e[r]*N:X?-n/2:n},s=function(t){var n=V?t[V]:"default";return n?X?e[n]*N:r:X?r:-r/2};B.alphaDecay(.03).alphaMin(0).velocityDecay(.8).force("x",d3.forceX(i).strength(1)).force("y",d3.forceY(s).strength(1)),Object.keys(e).forEach(function(t,e){B.force("p"+e,o(d3.forceManyBody().strength(-30),function(e){return!e[V]||e[V]===t}))}),B.alpha(1).restart()}function l(t){var e=t.positions,n=t.centerX,o=t.centerY,i=H.filter(function(t){return t[V]}).length,s=Object.keys(e).map(function(t){var n=H.filter(function(e){return e[V]===t}),o=r(n.length/i),s=n.filter(function(t){return t[$]===U}),c=r(Math.max(0,s.length/n.length));return{key:t,value:e[t],percent:o,percentF:c}}).filter(function(t){return"default"!==t.key});!s.length&&J&&s.push({key:H.length+" survey responses",percent:"",value:.5});var c=k.selectAll(".label").data(s,function(t){return t.key}),u=c.enter().append("div.label"),a=u.append("p");a.append("span.percent").text(function(t){return t.percent}),a.append("span.key").text(function(t){return t.key}),U&&a.append("span.filter").text(function(t){return t.percentF+" "+G}),u.merge(c).st("left",function(t){return X?n:t.value*N}).st("top",function(t){return X?t.value*W:o}),c.exit().remove()}function f(){var t=c(V),e=.5*N,n=.5*W;H.forEach(function(t){var e=t[$],n=t[V];$&&e===U?t.fill=q:n||!V?t.fill=S:(t.fill=D,t.offscreen=!0)}),B.force("p1",null),B.force("p2",null),B.force("p3",null),l({positions:t,centerX:e,centerY:n}),u({positions:t,centerX:e,centerY:n}).then(function(){a({positions:t,centerX:e,centerY:n})})}function h(){Y=R.node().offsetWidth,z=window.innerHeight,X=Y<L}function d(){h(),O.st({width:Y,height:z}),N=M.node().offsetWidth,W=X?z:Math.min(N,z),M.st({height:W}),T.at({width:N*j,height:W*j}).st({width:N,height:W}),P.scale(j,j);var t=Math.floor(.8*z),e=Math.floor(.1*z);C.st({paddingBottom:t,paddingTop:e}),f(),I.resize()}function p(t){var e=t.index,n=t.element;t.direction;C.classed("is-active",function(t,n){return n===e});var r=d3.select(n).at("data-column").trim(),o=d3.select(n).at("data-filter-column"),i=d3.select(n).at("data-filter-value"),s=d3.select(n).at("data-special");J="true"===s,V="default"===r?null:r,$=o.length?o:null,U=i.length?i:null;var c=null;c=U?d3.select('[data-value="'+U+'"'):d3.select(".graphic__filter__row__item"),y.call(c.node(),!0)}function v(t){var e=t.direction;O.classed("is-fixed",!0),O.classed("is-bottom","up"===e)}function g(t){var e=t.direction;O.classed("is-fixed",!1),O.classed("is-bottom","down"===e)}function m(){B.nodes(H).on("tick",s),I.setup({step:".step",offset:.8,debug:!1,container:".scroll",graphic:".scroll__graphic"}).onStepEnter(p).onContainerEnter(v).onContainerExit(g)}function b(t){var e=t.data,n=t.dict,r=t.dictDisplay,o=e.columns,i=.5*N,s=.5*W;H=e.map(function(t,e){var c={id:e,x:i,y:s};return o.filter(function(t){return t}).forEach(function(e){var o=t[e];if(e&&n[e]){var i=r[e]?r[e][o]:n[e][o];c[e]=i}else n[e]&&(c[e]=o,c[e+"_display"]=o)}),c})}function y(){var t=d3.select(this),e=t.at("data-value"),n=t.text(),r=t.parent();d3.selectAll(".graphic__filter__row__items").selectAll(".graphic__filter__row__item").classed("is-selected",function(t,e){return 0===e}),r.selectAll(".graphic__filter__row__item").classed("is-selected",!1),t.classed("is-selected",!0);var o=r.at("data-column");$=o.length?o:null,U=e.length?e:null,G=e.length?n:null,f()}function _(){d3.selectAll(".graphic__filter__row__item").on("click",y)}function w(){h(),d3.loadData("assets/data.csv","assets/dictionary.json","assets/dictionary-display.json",function(t,e){b({data:e[0],dict:e[1],dictDisplay:e[2]}),m(),_(),d()})}Object.defineProperty(e,"__esModule",{value:!0});var x=n(5),E=function(t){return t&&t.__esModule?t:{default:t}}(x),I=(0,E.default)(),R=d3.select("#survey"),O=R.select(".scroll__graphic"),M=O.select(".graphic__chart"),T=M.select(".chart__canvas"),k=M.select(".chart__labels"),A=R.select(".scroll__text"),C=A.selectAll(".step"),P=T.node().getContext("2d"),B=d3.forceSimulation(),j=window.devicePixelRatio?window.devicePixelRatio:1,F=3,L=600,S="#af9274",q="#fe5c34",D="#ede6de",Y=0,z=0,N=0,W=0,H=null,X=!1,V=null,$=null,U=null,G=null,J=null;e.default={init:w,resize:d}},function(t,e,n){!function(e,n){t.exports=n()}(0,function(){"use strict";function t(t){for(var e=t.length,n=[],r=0;r<e;r+=1)n.push(t[r]);return n}function e(t){return document.querySelector(t)}function n(e,n){return void 0===n&&(n=document),t(n.querySelectorAll(e))}function r(){function t(t){return+t.getAttribute("data-scrollama-index")}function r(){window.pageYOffset>U?G="down":window.pageYOffset<U&&(G="up"),U=window.pageYOffset}function o(e){var n=t(e),r={element:e,index:n,direction:G};$[n].direction=G,$[n].state="enter",P.stepEnter&&"function"==typeof P.stepEnter&&P.stepEnter(r),V&&("down"===G?s(e,0):s(e,1))}function i(e){var n=t(e),r={element:e,index:n,direction:G};$[n].direction=G,$[n].state="exit",P.stepExit&&"function"==typeof P.stepExit&&P.stepExit(r),V&&("down"===G?s(e,1):s(e,0))}function s(e,n){var r=t(e),o={element:e,index:r,progress:n};P.stepProgress&&"function"==typeof P.stepProgress&&P.stepProgress(o)}function c(){var t={direction:G};P.containerEnter&&"function"==typeof P.containerEnter&&P.containerEnter(t)}function u(){var t={direction:G};P.containerExit&&"function"==typeof P.containerExit&&P.containerExit(t)}function a(e){r(),e.forEach(function(e){var n=e.isIntersecting,r=(e.intersectionRatio,e.boundingClientRect),s=e.target,c=r.bottom,u=c-q,a=t(s);u>=-C&&(n&&"down"===G?o(s,G):"up"===G&&("exit"===$[a].state&&o(s,G),i(s,G)))})}function l(e){r(),e.forEach(function(e){var n=e.isIntersecting,r=(e.intersectionRatio,e.boundingClientRect),s=e.target,c=r.bottom,u=r.height,a=c-q,l=t(s);a>=-C&&a<u&&n&&"up"===G?o(s,G):a<=C&&!n&&"down"===G&&("exit"===$[l].state&&o(s,G),i(s,G))})}function f(e){r(),e.forEach(function(e){var n=e.isIntersecting,r=(e.intersectionRatio,e.boundingClientRect,e.target),s=t(r);n&&"down"===G&&"exit"===$[s].state&&"up"===$[s].direction&&(o(r,"down"),i(r,"down"))})}function h(e){r(),e.forEach(function(e){var n=e.isIntersecting,r=(e.intersectionRatio,e.boundingClientRect,e.target),s=t(r);n&&"up"===G&&"exit"===$[s].state&&"down"===$[s].direction&&(o(r,"up"),i(r,"up"))})}function d(t){r(),t.forEach(function(t){var e=t.isIntersecting,n=t.intersectionRatio,r=t.boundingClientRect,o=t.target,i=r.bottom,c=i-q;e&&c>=-C&&s(o,+n.toFixed(3))})}function p(t){r();var e=t[0],n=e.isIntersecting,o=e.boundingClientRect;o.top;o.bottom>-C&&(n?c(G):u(G))}function v(t){r();var e=t[0],n=e.isIntersecting;e.boundingClientRect.top<C&&(n?c(G):u(G))}function g(){B.top&&B.top.unobserve(j);var t={root:null,rootMargin:D+"px 0px -"+D+"px 0px",threshold:0};B.top=new IntersectionObserver(p,t),B.top.observe(j)}function m(){B.bottom&&B.bottom.unobserve(j);var t={root:null,rootMargin:"-"+z.height+"px 0px "+z.height+"px 0px",threshold:0};B.bottom=new IntersectionObserver(v,t),B.bottom.observe(j)}function b(){B.stepAbove&&B.stepAbove.forEach(function(t){return t.disconnect()}),B.stepAbove=L.map(function(t,e){var n=Y[e]-q,r=-D+q,o=n+"px 0px "+r+"px 0px",i={root:null,rootMargin:o,threshold:0},s=new IntersectionObserver(a,i);return s.observe(t),s})}function y(){B.stepBelow&&B.stepBelow.forEach(function(t){return t.disconnect()}),B.stepBelow=L.map(function(t,e){var n=-q,r=-D+Y[e]+q,o=n+"px 0px "+r+"px 0px",i={root:null,rootMargin:o,threshold:0},s=new IntersectionObserver(l,i);return s.observe(t),s})}function _(){B.viewportAbove&&B.viewportAbove.forEach(function(t){return t.disconnect()}),B.viewportAbove=L.map(function(t,e){var n=-(D-q+Y[e]),r="0px 0px "+n+"px 0px",o={root:null,rootMargin:r,threshold:0},i=new IntersectionObserver(f,o);return i.observe(t),i})}function w(){B.viewportBelow&&B.viewportBelow.forEach(function(t){return t.disconnect()}),B.viewportBelow=L.map(function(t,e){var n=-(q+Y[e]),r=n+"px 0px 0px 0px",o={root:null,rootMargin:r,threshold:0},i=new IntersectionObserver(h,o);return i.observe(t),i})}function x(){B.stepProgress&&B.stepProgress.forEach(function(t){return t.disconnect()}),B.stepProgress=L.map(function(t,e){var n=Y[e]-q,r=-D+q,o=n+"px 0px "+r+"px 0px",i={root:null,rootMargin:o,threshold:N},s=new IntersectionObserver(d,i);return s.observe(t),s})}function E(){b(),y(),_(),w(),V&&x(),j&&F&&(g(),m())}function I(){if(D=window.innerHeight,z=F?F.getBoundingClientRect():null,q=S*D,Y=L?L.map(function(t){return t.getBoundingClientRect().height}):[],H&&W&&E(),X){document.querySelector("#scrollama__debug--offset-"+A).style.top=q+"px"}}function R(t){t&&!H?(W&&E(),H=!0):t||(B.top&&B.top.disconnect(),B.bottom&&B.bottom.disconnect(),B.stepAbove&&B.stepAbove.forEach(function(t){return t.disconnect()}),B.stepBelow&&B.stepBelow.forEach(function(t){return t.disconnect()}),B.stepProgress&&B.stepProgress.forEach(function(t){return t.disconnect()}),B.viewportAbove&&B.viewportAbove.forEach(function(t){return t.disconnect()}),B.viewportBelow&&B.viewportBelow.forEach(function(t){return t.disconnect()}),H=!1)}function O(){L.forEach(function(t,e){return t.setAttribute("data-scrollama-index",e)})}function M(){$=L.map(function(){return{direction:null,state:null,bottom:-1}})}function T(){if(X){var t=document.createElement("div");t.setAttribute("id","scrollama__debug--offset-"+A),t.setAttribute("class","scrollama__debug--offset"),t.style.position="fixed",t.style.top="0",t.style.left="0",t.style.width="100%",t.style.height="1px",t.style.borderBottom="1px dashed red";var e=document.createElement("p"),n=L[0].getAttribute("class");e.innerText='".'+n+'" trigger: '+S,e.style.fontSize="12px",e.style.fontFamily="monospace",e.style.color="red",e.style.margin="0",e.style.padding="6px",t.appendChild(e),document.body.appendChild(t)}}function k(){N=[];for(var t=0;t<100;t++)N.push(.01*t)}var A=Math.floor(1e5*Math.random()),C=1,P={},B={},j=null,F=null,L=null,S=0,q=0,D=0,Y=null,z=null,N=0,W=!1,H=!1,X=!1,V=!1,$=null,U=0,G="up",J={};return J.setup=function(t){var r=t.container,o=t.graphic,i=t.step,s=t.offset;void 0===s&&(s=.5);var c=t.progress;void 0===c&&(c=!1);var u=t.debug;return void 0===u&&(u=!1),i?(L=n(i),j=r?e(r):null,F=o?e(o):null,J.offsetTrigger(s),X=u,V=c,W=!0,T(),O(),M(),V&&k(),I(),R(!0)):console.error("scrollama error: missing step element"),J},J.resize=function(){return I(),J},J.enable=function(){return R(!0),J},J.disable=function(){return R(!1),J},J.offsetTrigger=function(t){return t&&(isNaN(t),!0)?(S=Math.min(Math.max(0,t),1),J):S},J.onStepEnter=function(t){return P.stepEnter=t,J},J.onStepExit=function(t){return P.stepExit=t,J},J.onStepProgress=function(t){return P.stepProgress=t,J},J.onContainerEnter=function(t){return P.containerEnter=t,J},J.onContainerExit=function(t){return P.containerExit=t,J},J}return function(t,e){function n(t){this.time=t.time,this.target=t.target,this.rootBounds=t.rootBounds,this.boundingClientRect=t.boundingClientRect,this.intersectionRect=t.intersectionRect||l(),this.isIntersecting=!!t.intersectionRect;var e=this.boundingClientRect,n=e.width*e.height,r=this.intersectionRect,o=r.width*r.height;this.intersectionRatio=n?o/n:this.isIntersecting?1:0}function r(t,e){var n=e||{};if("function"!=typeof t)throw new Error("callback must be a function");if(n.root&&1!=n.root.nodeType)throw new Error("root must be an Element");this._checkForIntersections=i(this._checkForIntersections.bind(this),this.THROTTLE_TIMEOUT),this._callback=t,this._observationTargets=[],this._queuedEntries=[],this._rootMarginValues=this._parseRootMargin(n.rootMargin),this.thresholds=this._initThresholds(n.threshold),this.root=n.root||null,this.rootMargin=this._rootMarginValues.map(function(t){return t.value+t.unit}).join(" ")}function o(){return t.performance&&performance.now&&performance.now()}function i(t,e){var n=null;return function(){n||(n=setTimeout(function(){t(),n=null},e))}}function s(t,e,n,r){"function"==typeof t.addEventListener?t.addEventListener(e,n,r||!1):"function"==typeof t.attachEvent&&t.attachEvent("on"+e,n)}function c(t,e,n,r){"function"==typeof t.removeEventListener?t.removeEventListener(e,n,r||!1):"function"==typeof t.detatchEvent&&t.detatchEvent("on"+e,n)}function u(t,e){var n=Math.max(t.top,e.top),r=Math.min(t.bottom,e.bottom),o=Math.max(t.left,e.left),i=Math.min(t.right,e.right),s=i-o,c=r-n;return s>=0&&c>=0&&{top:n,bottom:r,left:o,right:i,width:s,height:c}}function a(t){var e;try{e=t.getBoundingClientRect()}catch(t){}return e?(e.width&&e.height||(e={top:e.top,right:e.right,bottom:e.bottom,left:e.left,width:e.right-e.left,height:e.bottom-e.top}),e):l()}function l(){return{top:0,bottom:0,left:0,right:0,width:0,height:0}}function f(t,e){for(var n=e;n;){if(n==t)return!0;n=h(n)}return!1}function h(t){var e=t.parentNode;return e&&11==e.nodeType&&e.host?e.host:e}if("IntersectionObserver"in t&&"IntersectionObserverEntry"in t&&"intersectionRatio"in t.IntersectionObserverEntry.prototype)return void("isIntersecting"in t.IntersectionObserverEntry.prototype||Object.defineProperty(t.IntersectionObserverEntry.prototype,"isIntersecting",{get:function(){return this.intersectionRatio>0}}));var d=[];r.prototype.THROTTLE_TIMEOUT=100,r.prototype.POLL_INTERVAL=null,r.prototype.observe=function(t){if(!this._observationTargets.some(function(e){return e.element==t})){if(!t||1!=t.nodeType)throw new Error("target must be an Element");this._registerInstance(),this._observationTargets.push({element:t,entry:null}),this._monitorIntersections(),this._checkForIntersections()}},r.prototype.unobserve=function(t){this._observationTargets=this._observationTargets.filter(function(e){return e.element!=t}),this._observationTargets.length||(this._unmonitorIntersections(),this._unregisterInstance())},r.prototype.disconnect=function(){this._observationTargets=[],this._unmonitorIntersections(),this._unregisterInstance()},r.prototype.takeRecords=function(){var t=this._queuedEntries.slice();return this._queuedEntries=[],t},r.prototype._initThresholds=function(t){var e=t||[0];return Array.isArray(e)||(e=[e]),e.sort().filter(function(t,e,n){if("number"!=typeof t||isNaN(t)||t<0||t>1)throw new Error("threshold must be a number between 0 and 1 inclusively");return t!==n[e-1]})},r.prototype._parseRootMargin=function(t){var e=t||"0px",n=e.split(/\s+/).map(function(t){var e=/^(-?\d*\.?\d+)(px|%)$/.exec(t);if(!e)throw new Error("rootMargin must be specified in pixels or percent");return{value:parseFloat(e[1]),unit:e[2]}});return n[1]=n[1]||n[0],n[2]=n[2]||n[0],n[3]=n[3]||n[1],n},r.prototype._monitorIntersections=function(){this._monitoringIntersections||(this._monitoringIntersections=!0,this.POLL_INTERVAL?this._monitoringInterval=setInterval(this._checkForIntersections,this.POLL_INTERVAL):(s(t,"resize",this._checkForIntersections,!0),s(e,"scroll",this._checkForIntersections,!0),"MutationObserver"in t&&(this._domObserver=new MutationObserver(this._checkForIntersections),this._domObserver.observe(e,{attributes:!0,childList:!0,characterData:!0,subtree:!0}))))},r.prototype._unmonitorIntersections=function(){this._monitoringIntersections&&(this._monitoringIntersections=!1,clearInterval(this._monitoringInterval),this._monitoringInterval=null,c(t,"resize",this._checkForIntersections,!0),c(e,"scroll",this._checkForIntersections,!0),this._domObserver&&(this._domObserver.disconnect(),this._domObserver=null))},r.prototype._checkForIntersections=function(){var t=this._rootIsInDom(),e=t?this._getRootRect():l();this._observationTargets.forEach(function(r){var i=r.element,s=a(i),c=this._rootContainsTarget(i),u=r.entry,l=t&&c&&this._computeTargetAndRootIntersection(i,e),f=r.entry=new n({time:o(),target:i,boundingClientRect:s,rootBounds:e,intersectionRect:l});u?t&&c?this._hasCrossedThreshold(u,f)&&this._queuedEntries.push(f):u&&u.isIntersecting&&this._queuedEntries.push(f):this._queuedEntries.push(f)},this),this._queuedEntries.length&&this._callback(this.takeRecords(),this)},r.prototype._computeTargetAndRootIntersection=function(n,r){var o=this;if("none"!=t.getComputedStyle(n).display){for(var i=a(n),s=i,c=h(n),l=!1;!l;){var f=null,d=1==c.nodeType?t.getComputedStyle(c):{};if("none"==d.display)return;if(c==o.root||c==e?(l=!0,f=r):c!=e.body&&c!=e.documentElement&&"visible"!=d.overflow&&(f=a(c)),f&&!(s=u(f,s)))break;c=h(c)}return s}},r.prototype._getRootRect=function(){var t;if(this.root)t=a(this.root);else{var n=e.documentElement,r=e.body;t={top:0,left:0,right:n.clientWidth||r.clientWidth,width:n.clientWidth||r.clientWidth,bottom:n.clientHeight||r.clientHeight,height:n.clientHeight||r.clientHeight}}return this._expandRectByRootMargin(t)},r.prototype._expandRectByRootMargin=function(t){var e=this._rootMarginValues.map(function(e,n){return"px"==e.unit?e.value:e.value*(n%2?t.width:t.height)/100}),n={top:t.top-e[0],right:t.right+e[1],bottom:t.bottom+e[2],left:t.left-e[3]};return n.width=n.right-n.left,n.height=n.bottom-n.top,n},r.prototype._hasCrossedThreshold=function(t,e){var n=this,r=t&&t.isIntersecting?t.intersectionRatio||0:-1,o=e.isIntersecting?e.intersectionRatio||0:-1;if(r!==o)for(var i=0;i<this.thresholds.length;i++){var s=n.thresholds[i];if(s==r||s==o||s<r!=s<o)return!0}},r.prototype._rootIsInDom=function(){return!this.root||f(e,this.root)},r.prototype._rootContainsTarget=function(t){return f(this.root||e,t)},r.prototype._registerInstance=function(){d.indexOf(this)<0&&d.push(this)},r.prototype._unregisterInstance=function(){var t=d.indexOf(this);-1!=t&&d.splice(t,1)},t.IntersectionObserver=r,t.IntersectionObserverEntry=n}(window,document),r})}]);