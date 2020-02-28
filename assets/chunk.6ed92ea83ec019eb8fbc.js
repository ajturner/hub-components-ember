(window.webpackJsonp_ember_auto_import_=window.webpackJsonp_ember_auto_import_||[]).push([[1],{46:function(e,t,n){"use strict"
function r(e){return Array.isArray(e)?e:Array.prototype.slice.call(e)}function o(e){return a(e,"dir","ltr")}function i(e){return a(e,"theme","light")}function a(e,t,n){var r=e.closest("["+t+"]")
return r?r.getAttribute(t):n}function s(e,t){var n=e.querySelector("slot")
return r(n?n.assignedElements():e.children).filter(function(e){return e.matches(t)})}n.d(t,"a",function(){return a}),n.d(t,"b",function(){return i}),n.d(t,"c",function(){return s}),n.d(t,"d",function(){return o}),n.d(t,"e",function(){return r})},47:function(e,t,n){"use strict"
n.d(t,"a",function(){return r})
var r=function(){return[2,1,1,1,3].map(function(e){for(var t="",n=0;n<e;n++)t+=(65536*(1+Math.random())|0).toString(16).substring(1)
return t}).join("-")}},54:function(e,t,n){"use strict"
n.d(t,"a",function(){return $}),n.d(t,"b",function(){return o})
var r=n(46)
function o(e,t){var n=["left","right"]
return"rtl"===Object(r.d)(e)&&n.reverse(),t.replace(/leading/gi,n[0]).replace(/trailing/gi,n[1])}var i="undefined"!=typeof window&&"undefined"!=typeof document&&"undefined"!=typeof navigator,a=function(){for(var e=["Edge","Trident","Firefox"],t=0;t<e.length;t+=1)if(i&&navigator.userAgent.indexOf(e[t])>=0)return 1
return 0}(),s=i&&window.Promise?function(e){var t=!1
return function(){t||(t=!0,window.Promise.resolve().then(function(){t=!1,e()}))}}:function(e){var t=!1
return function(){t||(t=!0,setTimeout(function(){t=!1,e()},a))}}
function f(e){return e&&"[object Function]"==={}.toString.call(e)}function p(e,t){if(1!==e.nodeType)return[]
var n=e.ownerDocument.defaultView.getComputedStyle(e,null)
return t?n[t]:n}function u(e){return"HTML"===e.nodeName?e:e.parentNode||e.host}function l(e){if(!e)return document.body
switch(e.nodeName){case"HTML":case"BODY":return e.ownerDocument.body
case"#document":return e.body}var t=p(e),n=t.overflow,r=t.overflowX,o=t.overflowY
return/(auto|scroll|overlay)/.test(n+o+r)?e:l(u(e))}function c(e){return e&&e.referenceNode?e.referenceNode:e}var d=i&&!(!window.MSInputMethodContext||!document.documentMode),h=i&&/MSIE 10/.test(navigator.userAgent)
function m(e){return 11===e?d:10===e?h:d||h}function g(e){if(!e)return document.documentElement
for(var t=m(10)?document.body:null,n=e.offsetParent||null;n===t&&e.nextElementSibling;)n=(e=e.nextElementSibling).offsetParent
var r=n&&n.nodeName
return r&&"BODY"!==r&&"HTML"!==r?-1!==["TH","TD","TABLE"].indexOf(n.nodeName)&&"static"===p(n,"position")?g(n):n:e?e.ownerDocument.documentElement:document.documentElement}function v(e){return null!==e.parentNode?v(e.parentNode):e}function b(e,t){if(!(e&&e.nodeType&&t&&t.nodeType))return document.documentElement
var n=e.compareDocumentPosition(t)&Node.DOCUMENT_POSITION_FOLLOWING,r=n?e:t,o=n?t:e,i=document.createRange()
i.setStart(r,0),i.setEnd(o,0)
var a,s,f=i.commonAncestorContainer
if(e!==f&&t!==f||r.contains(o))return"BODY"===(s=(a=f).nodeName)||"HTML"!==s&&g(a.firstElementChild)!==a?g(f):f
var p=v(e)
return p.host?b(p.host,t):b(e,v(t).host)}function w(e){var t="top"===(arguments.length>1&&void 0!==arguments[1]?arguments[1]:"top")?"scrollTop":"scrollLeft",n=e.nodeName
if("BODY"===n||"HTML"===n){var r=e.ownerDocument.documentElement
return(e.ownerDocument.scrollingElement||r)[t]}return e[t]}function y(e,t){var n="x"===t?"Left":"Top",r="Left"===n?"Right":"Bottom"
return parseFloat(e["border"+n+"Width"],10)+parseFloat(e["border"+r+"Width"],10)}function x(e,t,n,r){return Math.max(t["offset"+e],t["scroll"+e],n["client"+e],n["offset"+e],n["scroll"+e],m(10)?parseInt(n["offset"+e])+parseInt(r["margin"+("Height"===e?"Top":"Left")])+parseInt(r["margin"+("Height"===e?"Bottom":"Right")]):0)}function E(e){var t=e.body,n=e.documentElement,r=m(10)&&getComputedStyle(n)
return{height:x("Height",t,n,r),width:x("Width",t,n,r)}}var O=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")},L=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n]
r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),T=function(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e},M=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]
for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}
function D(e){return M({},e,{right:e.left+e.width,bottom:e.top+e.height})}function N(e){var t={}
try{if(m(10)){t=e.getBoundingClientRect()
var n=w(e,"top"),r=w(e,"left")
t.top+=n,t.left+=r,t.bottom+=n,t.right+=r}else t=e.getBoundingClientRect()}catch(e){}var o={left:t.left,top:t.top,width:t.right-t.left,height:t.bottom-t.top},i="HTML"===e.nodeName?E(e.ownerDocument):{},a=i.width||e.clientWidth||o.width,s=i.height||e.clientHeight||o.height,f=e.offsetWidth-a,u=e.offsetHeight-s
if(f||u){var l=p(e)
f-=y(l,"x"),u-=y(l,"y"),o.width-=f,o.height-=u}return D(o)}function F(e,t){var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2],r=m(10),o="HTML"===t.nodeName,i=N(e),a=N(t),s=l(e),f=p(t),u=parseFloat(f.borderTopWidth,10),c=parseFloat(f.borderLeftWidth,10)
n&&o&&(a.top=Math.max(a.top,0),a.left=Math.max(a.left,0))
var d=D({top:i.top-a.top-u,left:i.left-a.left-c,width:i.width,height:i.height})
if(d.marginTop=0,d.marginLeft=0,!r&&o){var h=parseFloat(f.marginTop,10),g=parseFloat(f.marginLeft,10)
d.top-=u-h,d.bottom-=u-h,d.left-=c-g,d.right-=c-g,d.marginTop=h,d.marginLeft=g}return(r&&!n?t.contains(s):t===s&&"BODY"!==s.nodeName)&&(d=function(e,t){var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2],r=w(t,"top"),o=w(t,"left"),i=n?-1:1
return e.top+=r*i,e.bottom+=r*i,e.left+=o*i,e.right+=o*i,e}(d,t)),d}function k(e){var t=e.nodeName
if("BODY"===t||"HTML"===t)return!1
if("fixed"===p(e,"position"))return!0
var n=u(e)
return!!n&&k(n)}function A(e){if(!e||!e.parentElement||m())return document.documentElement
for(var t=e.parentElement;t&&"none"===p(t,"transform");)t=t.parentElement
return t||document.documentElement}function H(e,t,n,r){var o=arguments.length>4&&void 0!==arguments[4]&&arguments[4],i={top:0,left:0},a=o?A(e):b(e,c(t))
if("viewport"===r)i=function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=e.ownerDocument.documentElement,r=F(e,n),o=Math.max(n.clientWidth,window.innerWidth||0),i=Math.max(n.clientHeight,window.innerHeight||0),a=t?0:w(n),s=t?0:w(n,"left")
return D({top:a-r.top+r.marginTop,left:s-r.left+r.marginLeft,width:o,height:i})}(a,o)
else{var s=void 0
"scrollParent"===r?"BODY"===(s=l(u(t))).nodeName&&(s=e.ownerDocument.documentElement):s="window"===r?e.ownerDocument.documentElement:r
var f=F(s,a,o)
if("HTML"!==s.nodeName||k(a))i=f
else{var p=E(e.ownerDocument),d=p.height,h=p.width
i.top+=f.top-f.marginTop,i.bottom=d+f.top,i.left+=f.left-f.marginLeft,i.right=h+f.left}}var m="number"==typeof(n=n||0)
return i.left+=m?n:n.left||0,i.top+=m?n:n.top||0,i.right-=m?n:n.right||0,i.bottom-=m?n:n.bottom||0,i}function C(e){return e.width*e.height}function S(e,t,n,r,o){var i=arguments.length>5&&void 0!==arguments[5]?arguments[5]:0
if(-1===e.indexOf("auto"))return e
var a=H(n,r,i,o),s={top:{width:a.width,height:t.top-a.top},right:{width:a.right-t.right,height:a.height},bottom:{width:a.width,height:a.bottom-t.bottom},left:{width:t.left-a.left,height:a.height}},f=Object.keys(s).map(function(e){return M({key:e},s[e],{area:C(s[e])})}).sort(function(e,t){return t.area-e.area}),p=f.filter(function(e){var t=e.width,r=e.height
return t>=n.clientWidth&&r>=n.clientHeight}),u=p.length>0?p[0].key:f[0].key,l=e.split("-")[1]
return u+(l?"-"+l:"")}function B(e,t,n){var r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:null
return F(n,r?A(t):b(t,c(n)),r)}function W(e){var t=e.ownerDocument.defaultView.getComputedStyle(e),n=parseFloat(t.marginTop||0)+parseFloat(t.marginBottom||0),r=parseFloat(t.marginLeft||0)+parseFloat(t.marginRight||0)
return{width:e.offsetWidth+r,height:e.offsetHeight+n}}function P(e){var t={left:"right",right:"left",bottom:"top",top:"bottom"}
return e.replace(/left|right|bottom|top/g,function(e){return t[e]})}function j(e,t,n){n=n.split("-")[0]
var r=W(e),o={width:r.width,height:r.height},i=-1!==["right","left"].indexOf(n),a=i?"top":"left",s=i?"left":"top",f=i?"height":"width",p=i?"width":"height"
return o[a]=t[a]+t[f]/2-r[f]/2,o[s]=n===s?t[s]-r[p]:t[P(s)],o}function I(e,t){return Array.prototype.find?e.find(t):e.filter(t)[0]}function R(e,t,n){return(void 0===n?e:e.slice(0,function(e,t,n){if(Array.prototype.findIndex)return e.findIndex(function(e){return e[t]===n})
var r=I(e,function(e){return e[t]===n})
return e.indexOf(r)}(e,"name",n))).forEach(function(e){e.function&&console.warn("`modifier.function` is deprecated, use `modifier.fn`!")
var n=e.function||e.fn
e.enabled&&f(n)&&(t.offsets.popper=D(t.offsets.popper),t.offsets.reference=D(t.offsets.reference),t=n(t,e))}),t}function _(e,t){return e.some(function(e){var n=e.name
return e.enabled&&n===t})}function U(e){for(var t=[!1,"ms","Webkit","Moz","O"],n=e.charAt(0).toUpperCase()+e.slice(1),r=0;r<t.length;r++){var o=t[r],i=o?""+o+n:e
if(void 0!==document.body.style[i])return i}return null}function Y(e){var t=e.ownerDocument
return t?t.defaultView:window}function V(){this.state.eventsEnabled||(this.state=function(e,t,n,r){n.updateBound=r,Y(e).addEventListener("resize",n.updateBound,{passive:!0})
var o=l(e)
return function e(t,n,r,o){var i="BODY"===t.nodeName,a=i?t.ownerDocument.defaultView:t
a.addEventListener(n,r,{passive:!0}),i||e(l(a.parentNode),n,r,o),o.push(a)}(o,"scroll",n.updateBound,n.scrollParents),n.scrollElement=o,n.eventsEnabled=!0,n}(this.reference,this.options,this.state,this.scheduleUpdate))}function q(e){return""!==e&&!isNaN(parseFloat(e))&&isFinite(e)}function z(e,t){Object.keys(t).forEach(function(n){var r="";-1!==["width","height","top","right","bottom","left"].indexOf(n)&&q(t[n])&&(r="px"),e.style[n]=t[n]+r})}var G=i&&/Firefox/i.test(navigator.userAgent)
function J(e,t,n){var r=I(e,function(e){return e.name===t}),o=!!r&&e.some(function(e){return e.name===n&&e.enabled&&e.order<r.order})
if(!o){var i="`"+t+"`",a="`"+n+"`"
console.warn(a+" modifier is required by "+i+" modifier in order to work, be sure to include it before "+i+"!")}return o}var X=["auto-start","auto","auto-end","top-start","top","top-end","right-start","right","right-end","bottom-end","bottom","bottom-start","left-end","left","left-start"],K=X.slice(3)
function Q(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=K.indexOf(e),r=K.slice(n+1).concat(K.slice(0,n))
return t?r.reverse():r}var Z={placement:"bottom",positionFixed:!1,eventsEnabled:!0,removeOnDestroy:!1,onCreate:function(){},onUpdate:function(){},modifiers:{shift:{order:100,enabled:!0,fn:function(e){var t=e.placement,n=t.split("-")[0],r=t.split("-")[1]
if(r){var o=e.offsets,i=o.reference,a=o.popper,s=-1!==["bottom","top"].indexOf(n),f=s?"left":"top",p=s?"width":"height",u={start:T({},f,i[f]),end:T({},f,i[f]+i[p]-a[p])}
e.offsets.popper=M({},a,u[r])}return e}},offset:{order:200,enabled:!0,fn:function(e,t){var n,r=t.offset,o=e.placement,i=e.offsets,a=i.popper,s=i.reference,f=o.split("-")[0]
return n=q(+r)?[+r,0]:function(e,t,n,r){var o=[0,0],i=-1!==["right","left"].indexOf(r),a=e.split(/(\+|\-)/).map(function(e){return e.trim()}),s=a.indexOf(I(a,function(e){return-1!==e.search(/,|\s/)}))
a[s]&&-1===a[s].indexOf(",")&&console.warn("Offsets separated by white space(s) are deprecated, use a comma (,) instead.")
var f=/\s*,\s*|\s+/,p=-1!==s?[a.slice(0,s).concat([a[s].split(f)[0]]),[a[s].split(f)[1]].concat(a.slice(s+1))]:[a]
return(p=p.map(function(e,r){var o=(1===r?!i:i)?"height":"width",a=!1
return e.reduce(function(e,t){return""===e[e.length-1]&&-1!==["+","-"].indexOf(t)?(e[e.length-1]=t,a=!0,e):a?(e[e.length-1]+=t,a=!1,e):e.concat(t)},[]).map(function(e){return function(e,t,n,r){var o=e.match(/((?:\-|\+)?\d*\.?\d*)(.*)/),i=+o[1],a=o[2]
if(!i)return e
if(0===a.indexOf("%")){var s=void 0
switch(a){case"%p":s=n
break
case"%":case"%r":default:s=r}return D(s)[t]/100*i}return"vh"===a||"vw"===a?("vh"===a?Math.max(document.documentElement.clientHeight,window.innerHeight||0):Math.max(document.documentElement.clientWidth,window.innerWidth||0))/100*i:i}(e,o,t,n)})})).forEach(function(e,t){e.forEach(function(n,r){q(n)&&(o[t]+=n*("-"===e[r-1]?-1:1))})}),o}(r,a,s,f),"left"===f?(a.top+=n[0],a.left-=n[1]):"right"===f?(a.top+=n[0],a.left+=n[1]):"top"===f?(a.left+=n[0],a.top-=n[1]):"bottom"===f&&(a.left+=n[0],a.top+=n[1]),e.popper=a,e},offset:0},preventOverflow:{order:300,enabled:!0,fn:function(e,t){var n=t.boundariesElement||g(e.instance.popper)
e.instance.reference===n&&(n=g(n))
var r=U("transform"),o=e.instance.popper.style,i=o.top,a=o.left,s=o[r]
o.top="",o.left="",o[r]=""
var f=H(e.instance.popper,e.instance.reference,t.padding,n,e.positionFixed)
o.top=i,o.left=a,o[r]=s,t.boundaries=f
var p=t.priority,u=e.offsets.popper,l={primary:function(e){var n=u[e]
return u[e]<f[e]&&!t.escapeWithReference&&(n=Math.max(u[e],f[e])),T({},e,n)},secondary:function(e){var n="right"===e?"left":"top",r=u[n]
return u[e]>f[e]&&!t.escapeWithReference&&(r=Math.min(u[n],f[e]-("right"===e?u.width:u.height))),T({},n,r)}}
return p.forEach(function(e){var t=-1!==["left","top"].indexOf(e)?"primary":"secondary"
u=M({},u,l[t](e))}),e.offsets.popper=u,e},priority:["left","right","top","bottom"],padding:5,boundariesElement:"scrollParent"},keepTogether:{order:400,enabled:!0,fn:function(e){var t=e.offsets,n=t.popper,r=t.reference,o=e.placement.split("-")[0],i=Math.floor,a=-1!==["top","bottom"].indexOf(o),s=a?"right":"bottom",f=a?"left":"top",p=a?"width":"height"
return n[s]<i(r[f])&&(e.offsets.popper[f]=i(r[f])-n[p]),n[f]>i(r[s])&&(e.offsets.popper[f]=i(r[s])),e}},arrow:{order:500,enabled:!0,fn:function(e,t){var n
if(!J(e.instance.modifiers,"arrow","keepTogether"))return e
var r=t.element
if("string"==typeof r){if(!(r=e.instance.popper.querySelector(r)))return e}else if(!e.instance.popper.contains(r))return console.warn("WARNING: `arrow.element` must be child of its popper element!"),e
var o=e.placement.split("-")[0],i=e.offsets,a=i.popper,s=i.reference,f=-1!==["left","right"].indexOf(o),u=f?"height":"width",l=f?"Top":"Left",c=l.toLowerCase(),d=f?"left":"top",h=f?"bottom":"right",m=W(r)[u]
s[h]-m<a[c]&&(e.offsets.popper[c]-=a[c]-(s[h]-m)),s[c]+m>a[h]&&(e.offsets.popper[c]+=s[c]+m-a[h]),e.offsets.popper=D(e.offsets.popper)
var g=s[c]+s[u]/2-m/2,v=p(e.instance.popper),b=parseFloat(v["margin"+l],10),w=parseFloat(v["border"+l+"Width"],10),y=g-e.offsets.popper[c]-b-w
return y=Math.max(Math.min(a[u]-m,y),0),e.arrowElement=r,e.offsets.arrow=(T(n={},c,Math.round(y)),T(n,d,""),n),e},element:"[x-arrow]"},flip:{order:600,enabled:!0,fn:function(e,t){if(_(e.instance.modifiers,"inner"))return e
if(e.flipped&&e.placement===e.originalPlacement)return e
var n=H(e.instance.popper,e.instance.reference,t.padding,t.boundariesElement,e.positionFixed),r=e.placement.split("-")[0],o=P(r),i=e.placement.split("-")[1]||"",a=[]
switch(t.behavior){case"flip":a=[r,o]
break
case"clockwise":a=Q(r)
break
case"counterclockwise":a=Q(r,!0)
break
default:a=t.behavior}return a.forEach(function(s,f){if(r!==s||a.length===f+1)return e
r=e.placement.split("-")[0],o=P(r)
var p=e.offsets.popper,u=e.offsets.reference,l=Math.floor,c="left"===r&&l(p.right)>l(u.left)||"right"===r&&l(p.left)<l(u.right)||"top"===r&&l(p.bottom)>l(u.top)||"bottom"===r&&l(p.top)<l(u.bottom),d=l(p.left)<l(n.left),h=l(p.right)>l(n.right),m=l(p.top)<l(n.top),g=l(p.bottom)>l(n.bottom),v="left"===r&&d||"right"===r&&h||"top"===r&&m||"bottom"===r&&g,b=-1!==["top","bottom"].indexOf(r),w=!!t.flipVariations&&(b&&"start"===i&&d||b&&"end"===i&&h||!b&&"start"===i&&m||!b&&"end"===i&&g),y=!!t.flipVariationsByContent&&(b&&"start"===i&&h||b&&"end"===i&&d||!b&&"start"===i&&g||!b&&"end"===i&&m),x=w||y;(c||v||x)&&(e.flipped=!0,(c||v)&&(r=a[f+1]),x&&(i="end"===i?"start":"start"===i?"end":i),e.placement=r+(i?"-"+i:""),e.offsets.popper=M({},e.offsets.popper,j(e.instance.popper,e.offsets.reference,e.placement)),e=R(e.instance.modifiers,e,"flip"))}),e},behavior:"flip",padding:5,boundariesElement:"viewport",flipVariations:!1,flipVariationsByContent:!1},inner:{order:700,enabled:!1,fn:function(e){var t=e.placement,n=t.split("-")[0],r=e.offsets,o=r.popper,i=r.reference,a=-1!==["left","right"].indexOf(n),s=-1===["top","left"].indexOf(n)
return o[a?"left":"top"]=i[n]-(s?o[a?"width":"height"]:0),e.placement=P(t),e.offsets.popper=D(o),e}},hide:{order:800,enabled:!0,fn:function(e){if(!J(e.instance.modifiers,"hide","preventOverflow"))return e
var t=e.offsets.reference,n=I(e.instance.modifiers,function(e){return"preventOverflow"===e.name}).boundaries
if(t.bottom<n.top||t.left>n.right||t.top>n.bottom||t.right<n.left){if(!0===e.hide)return e
e.hide=!0,e.attributes["x-out-of-boundaries"]=""}else{if(!1===e.hide)return e
e.hide=!1,e.attributes["x-out-of-boundaries"]=!1}return e}},computeStyle:{order:850,enabled:!0,fn:function(e,t){var n=t.x,r=t.y,o=e.offsets.popper,i=I(e.instance.modifiers,function(e){return"applyStyle"===e.name}).gpuAcceleration
void 0!==i&&console.warn("WARNING: `gpuAcceleration` option moved to `computeStyle` modifier and will not be supported in future versions of Popper.js!")
var a,s,f=void 0!==i?i:t.gpuAcceleration,p=g(e.instance.popper),u=N(p),l={position:o.position},c=function(e,t){var n=e.offsets,r=n.popper,o=n.reference,i=Math.round,a=Math.floor,s=function(e){return e},f=i(o.width),p=i(r.width),u=-1!==["left","right"].indexOf(e.placement),l=-1!==e.placement.indexOf("-"),c=t?u||l||f%2==p%2?i:a:s,d=t?i:s
return{left:c(f%2==1&&p%2==1&&!l&&t?r.left-1:r.left),top:d(r.top),bottom:d(r.bottom),right:c(r.right)}}(e,window.devicePixelRatio<2||!G),d="bottom"===n?"top":"bottom",h="right"===r?"left":"right",m=U("transform")
if(s="bottom"===d?"HTML"===p.nodeName?-p.clientHeight+c.bottom:-u.height+c.bottom:c.top,a="right"===h?"HTML"===p.nodeName?-p.clientWidth+c.right:-u.width+c.right:c.left,f&&m)l[m]="translate3d("+a+"px, "+s+"px, 0)",l[d]=0,l[h]=0,l.willChange="transform"
else{var v="bottom"===d?-1:1,b="right"===h?-1:1
l[d]=s*v,l[h]=a*b,l.willChange=d+", "+h}var w={"x-placement":e.placement}
return e.attributes=M({},w,e.attributes),e.styles=M({},l,e.styles),e.arrowStyles=M({},e.offsets.arrow,e.arrowStyles),e},gpuAcceleration:!0,x:"bottom",y:"right"},applyStyle:{order:900,enabled:!0,fn:function(e){var t,n
return z(e.instance.popper,e.styles),t=e.instance.popper,n=e.attributes,Object.keys(n).forEach(function(e){!1!==n[e]?t.setAttribute(e,n[e]):t.removeAttribute(e)}),e.arrowElement&&Object.keys(e.arrowStyles).length&&z(e.arrowElement,e.arrowStyles),e},onLoad:function(e,t,n,r,o){var i=B(o,t,e,n.positionFixed),a=S(n.placement,i,t,e,n.modifiers.flip.boundariesElement,n.modifiers.flip.padding)
return t.setAttribute("x-placement",a),z(t,{position:n.positionFixed?"fixed":"absolute"}),n},gpuAcceleration:void 0}}},$=function(){function e(t,n){var r=this,o=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{}
O(this,e),this.scheduleUpdate=function(){return requestAnimationFrame(r.update)},this.update=s(this.update.bind(this)),this.options=M({},e.Defaults,o),this.state={isDestroyed:!1,isCreated:!1,scrollParents:[]},this.reference=t&&t.jquery?t[0]:t,this.popper=n&&n.jquery?n[0]:n,this.options.modifiers={},Object.keys(M({},e.Defaults.modifiers,o.modifiers)).forEach(function(t){r.options.modifiers[t]=M({},e.Defaults.modifiers[t]||{},o.modifiers?o.modifiers[t]:{})}),this.modifiers=Object.keys(this.options.modifiers).map(function(e){return M({name:e},r.options.modifiers[e])}).sort(function(e,t){return e.order-t.order}),this.modifiers.forEach(function(e){e.enabled&&f(e.onLoad)&&e.onLoad(r.reference,r.popper,r.options,e,r.state)}),this.update()
var i=this.options.eventsEnabled
i&&this.enableEventListeners(),this.state.eventsEnabled=i}return L(e,[{key:"update",value:function(){return function(){if(!this.state.isDestroyed){var e={instance:this,styles:{},arrowStyles:{},attributes:{},flipped:!1,offsets:{}}
e.offsets.reference=B(this.state,this.popper,this.reference,this.options.positionFixed),e.placement=S(this.options.placement,e.offsets.reference,this.popper,this.reference,this.options.modifiers.flip.boundariesElement,this.options.modifiers.flip.padding),e.originalPlacement=e.placement,e.positionFixed=this.options.positionFixed,e.offsets.popper=j(this.popper,e.offsets.reference,e.placement),e.offsets.popper.position=this.options.positionFixed?"fixed":"absolute",e=R(this.modifiers,e),this.state.isCreated?this.options.onUpdate(e):(this.state.isCreated=!0,this.options.onCreate(e))}}.call(this)}},{key:"destroy",value:function(){return function(){return this.state.isDestroyed=!0,_(this.modifiers,"applyStyle")&&(this.popper.removeAttribute("x-placement"),this.popper.style.position="",this.popper.style.top="",this.popper.style.left="",this.popper.style.right="",this.popper.style.bottom="",this.popper.style.willChange="",this.popper.style[U("transform")]=""),this.disableEventListeners(),this.options.removeOnDestroy&&this.popper.parentNode.removeChild(this.popper),this}.call(this)}},{key:"enableEventListeners",value:function(){return V.call(this)}},{key:"disableEventListeners",value:function(){return function(){var e,t
this.state.eventsEnabled&&(cancelAnimationFrame(this.scheduleUpdate),this.state=(e=this.reference,t=this.state,Y(e).removeEventListener("resize",t.updateBound),t.scrollParents.forEach(function(e){e.removeEventListener("scroll",t.updateBound)}),t.updateBound=null,t.scrollParents=[],t.scrollElement=null,t.eventsEnabled=!1,t))}.call(this)}}]),e}()
$.Utils=("undefined"!=typeof window?window:global).PopperUtils,$.placements=X,$.Defaults=Z}}])
