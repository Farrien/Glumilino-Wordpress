/*!
 * @author Alex Evgrafov <dev@alex-evgrafov.ru>
 * @author Handy Lab Development <dev@handy-lab.ru>
 * @link http://www.handy-lab.ru/
 * @copyright 2015-2016 Handy Lab Development LLC
 */
/* jQuery v1.8.3 jquery.com | jquery.org/license */
(function(e,t){function _(e){var t=M[e]={};return v.each(e.split(y),function(e,n){t[n]=!0}),t}function H(e,n,r){if(r===t&&e.nodeType===1){var i="data-"+n.replace(P,"-$1").toLowerCase();r=e.getAttribute(i);if(typeof r=="string"){try{r=r==="true"?!0:r==="false"?!1:r==="null"?null:+r+""===r?+r:D.test(r)?v.parseJSON(r):r}catch(s){}v.data(e,n,r)}else r=t}return r}function B(e){var t;for(t in e){if(t==="data"&&v.isEmptyObject(e[t]))continue;if(t!=="toJSON")return!1}return!0}function et(){return!1}function tt(){return!0}function ut(e){return!e||!e.parentNode||e.parentNode.nodeType===11}function at(e,t){do e=e[t];while(e&&e.nodeType!==1);return e}function ft(e,t,n){t=t||0;if(v.isFunction(t))return v.grep(e,function(e,r){var i=!!t.call(e,r,e);return i===n});if(t.nodeType)return v.grep(e,function(e,r){return e===t===n});if(typeof t=="string"){var r=v.grep(e,function(e){return e.nodeType===1});if(it.test(t))return v.filter(t,r,!n);t=v.filter(t,r)}return v.grep(e,function(e,r){return v.inArray(e,t)>=0===n})}function lt(e){var t=ct.split("|"),n=e.createDocumentFragment();if(n.createElement)while(t.length)n.createElement(t.pop());return n}function Lt(e,t){return e.getElementsByTagName(t)[0]||e.appendChild(e.ownerDocument.createElement(t))}function At(e,t){if(t.nodeType!==1||!v.hasData(e))return;var n,r,i,s=v._data(e),o=v._data(t,s),u=s.events;if(u){delete o.handle,o.events={};for(n in u)for(r=0,i=u[n].length;r<i;r++)v.event.add(t,n,u[n][r])}o.data&&(o.data=v.extend({},o.data))}function Ot(e,t){var n;if(t.nodeType!==1)return;t.clearAttributes&&t.clearAttributes(),t.mergeAttributes&&t.mergeAttributes(e),n=t.nodeName.toLowerCase(),n==="object"?(t.parentNode&&(t.outerHTML=e.outerHTML),v.support.html5Clone&&e.innerHTML&&!v.trim(t.innerHTML)&&(t.innerHTML=e.innerHTML)):n==="input"&&Et.test(e.type)?(t.defaultChecked=t.checked=e.checked,t.value!==e.value&&(t.value=e.value)):n==="option"?t.selected=e.defaultSelected:n==="input"||n==="textarea"?t.defaultValue=e.defaultValue:n==="script"&&t.text!==e.text&&(t.text=e.text),t.removeAttribute(v.expando)}function Mt(e){return typeof e.getElementsByTagName!="undefined"?e.getElementsByTagName("*"):typeof e.querySelectorAll!="undefined"?e.querySelectorAll("*"):[]}function _t(e){Et.test(e.type)&&(e.defaultChecked=e.checked)}function Qt(e,t){if(t in e)return t;var n=t.charAt(0).toUpperCase()+t.slice(1),r=t,i=Jt.length;while(i--){t=Jt[i]+n;if(t in e)return t}return r}function Gt(e,t){return e=t||e,v.css(e,"display")==="none"||!v.contains(e.ownerDocument,e)}function Yt(e,t){var n,r,i=[],s=0,o=e.length;for(;s<o;s++){n=e[s];if(!n.style)continue;i[s]=v._data(n,"olddisplay"),t?(!i[s]&&n.style.display==="none"&&(n.style.display=""),n.style.display===""&&Gt(n)&&(i[s]=v._data(n,"olddisplay",nn(n.nodeName)))):(r=Dt(n,"display"),!i[s]&&r!=="none"&&v._data(n,"olddisplay",r))}for(s=0;s<o;s++){n=e[s];if(!n.style)continue;if(!t||n.style.display==="none"||n.style.display==="")n.style.display=t?i[s]||"":"none"}return e}function Zt(e,t,n){var r=Rt.exec(t);return r?Math.max(0,r[1]-(n||0))+(r[2]||"px"):t}function en(e,t,n,r){var i=n===(r?"border":"content")?4:t==="width"?1:0,s=0;for(;i<4;i+=2)n==="margin"&&(s+=v.css(e,n+$t[i],!0)),r?(n==="content"&&(s-=parseFloat(Dt(e,"padding"+$t[i]))||0),n!=="margin"&&(s-=parseFloat(Dt(e,"border"+$t[i]+"Width"))||0)):(s+=parseFloat(Dt(e,"padding"+$t[i]))||0,n!=="padding"&&(s+=parseFloat(Dt(e,"border"+$t[i]+"Width"))||0));return s}function tn(e,t,n){var r=t==="width"?e.offsetWidth:e.offsetHeight,i=!0,s=v.support.boxSizing&&v.css(e,"boxSizing")==="border-box";if(r<=0||r==null){r=Dt(e,t);if(r<0||r==null)r=e.style[t];if(Ut.test(r))return r;i=s&&(v.support.boxSizingReliable||r===e.style[t]),r=parseFloat(r)||0}return r+en(e,t,n||(s?"border":"content"),i)+"px"}function nn(e){if(Wt[e])return Wt[e];var t=v("<"+e+">").appendTo(i.body),n=t.css("display");t.remove();if(n==="none"||n===""){Pt=i.body.appendChild(Pt||v.extend(i.createElement("iframe"),{frameBorder:0,width:0,height:0}));if(!Ht||!Pt.createElement)Ht=(Pt.contentWindow||Pt.contentDocument).document,Ht.write("<!doctype html><html><body>"),Ht.close();t=Ht.body.appendChild(Ht.createElement(e)),n=Dt(t,"display"),i.body.removeChild(Pt)}return Wt[e]=n,n}function fn(e,t,n,r){var i;if(v.isArray(t))v.each(t,function(t,i){n||sn.test(e)?r(e,i):fn(e+"["+(typeof i=="object"?t:"")+"]",i,n,r)});else if(!n&&v.type(t)==="object")for(i in t)fn(e+"["+i+"]",t[i],n,r);else r(e,t)}function Cn(e){return function(t,n){typeof t!="string"&&(n=t,t="*");var r,i,s,o=t.toLowerCase().split(y),u=0,a=o.length;if(v.isFunction(n))for(;u<a;u++)r=o[u],s=/^\+/.test(r),s&&(r=r.substr(1)||"*"),i=e[r]=e[r]||[],i[s?"unshift":"push"](n)}}function kn(e,n,r,i,s,o){s=s||n.dataTypes[0],o=o||{},o[s]=!0;var u,a=e[s],f=0,l=a?a.length:0,c=e===Sn;for(;f<l&&(c||!u);f++)u=a[f](n,r,i),typeof u=="string"&&(!c||o[u]?u=t:(n.dataTypes.unshift(u),u=kn(e,n,r,i,u,o)));return(c||!u)&&!o["*"]&&(u=kn(e,n,r,i,"*",o)),u}function Ln(e,n){var r,i,s=v.ajaxSettings.flatOptions||{};for(r in n)n[r]!==t&&((s[r]?e:i||(i={}))[r]=n[r]);i&&v.extend(!0,e,i)}function An(e,n,r){var i,s,o,u,a=e.contents,f=e.dataTypes,l=e.responseFields;for(s in l)s in r&&(n[l[s]]=r[s]);while(f[0]==="*")f.shift(),i===t&&(i=e.mimeType||n.getResponseHeader("content-type"));if(i)for(s in a)if(a[s]&&a[s].test(i)){f.unshift(s);break}if(f[0]in r)o=f[0];else{for(s in r){if(!f[0]||e.converters[s+" "+f[0]]){o=s;break}u||(u=s)}o=o||u}if(o)return o!==f[0]&&f.unshift(o),r[o]}function On(e,t){var n,r,i,s,o=e.dataTypes.slice(),u=o[0],a={},f=0;e.dataFilter&&(t=e.dataFilter(t,e.dataType));if(o[1])for(n in e.converters)a[n.toLowerCase()]=e.converters[n];for(;i=o[++f];)if(i!=="*"){if(u!=="*"&&u!==i){n=a[u+" "+i]||a["* "+i];if(!n)for(r in a){s=r.split(" ");if(s[1]===i){n=a[u+" "+s[0]]||a["* "+s[0]];if(n){n===!0?n=a[r]:a[r]!==!0&&(i=s[0],o.splice(f--,0,i));break}}}if(n!==!0)if(n&&e["throws"])t=n(t);else try{t=n(t)}catch(l){return{state:"parsererror",error:n?l:"No conversion from "+u+" to "+i}}}u=i}return{state:"success",data:t}}function Fn(){try{return new e.XMLHttpRequest}catch(t){}}function In(){try{return new e.ActiveXObject("Microsoft.XMLHTTP")}catch(t){}}function $n(){return setTimeout(function(){qn=t},0),qn=v.now()}function Jn(e,t){v.each(t,function(t,n){var r=(Vn[t]||[]).concat(Vn["*"]),i=0,s=r.length;for(;i<s;i++)if(r[i].call(e,t,n))return})}function Kn(e,t,n){var r,i=0,s=0,o=Xn.length,u=v.Deferred().always(function(){delete a.elem}),a=function(){var t=qn||$n(),n=Math.max(0,f.startTime+f.duration-t),r=n/f.duration||0,i=1-r,s=0,o=f.tweens.length;for(;s<o;s++)f.tweens[s].run(i);return u.notifyWith(e,[f,i,n]),i<1&&o?n:(u.resolveWith(e,[f]),!1)},f=u.promise({elem:e,props:v.extend({},t),opts:v.extend(!0,{specialEasing:{}},n),originalProperties:t,originalOptions:n,startTime:qn||$n(),duration:n.duration,tweens:[],createTween:function(t,n,r){var i=v.Tween(e,f.opts,t,n,f.opts.specialEasing[t]||f.opts.easing);return f.tweens.push(i),i},stop:function(t){var n=0,r=t?f.tweens.length:0;for(;n<r;n++)f.tweens[n].run(1);return t?u.resolveWith(e,[f,t]):u.rejectWith(e,[f,t]),this}}),l=f.props;Qn(l,f.opts.specialEasing);for(;i<o;i++){r=Xn[i].call(f,e,l,f.opts);if(r)return r}return Jn(f,l),v.isFunction(f.opts.start)&&f.opts.start.call(e,f),v.fx.timer(v.extend(a,{anim:f,queue:f.opts.queue,elem:e})),f.progress(f.opts.progress).done(f.opts.done,f.opts.complete).fail(f.opts.fail).always(f.opts.always)}function Qn(e,t){var n,r,i,s,o;for(n in e){r=v.camelCase(n),i=t[r],s=e[n],v.isArray(s)&&(i=s[1],s=e[n]=s[0]),n!==r&&(e[r]=s,delete e[n]),o=v.cssHooks[r];if(o&&"expand"in o){s=o.expand(s),delete e[r];for(n in s)n in e||(e[n]=s[n],t[n]=i)}else t[r]=i}}function Gn(e,t,n){var r,i,s,o,u,a,f,l,c,h=this,p=e.style,d={},m=[],g=e.nodeType&&Gt(e);n.queue||(l=v._queueHooks(e,"fx"),l.unqueued==null&&(l.unqueued=0,c=l.empty.fire,l.empty.fire=function(){l.unqueued||c()}),l.unqueued++,h.always(function(){h.always(function(){l.unqueued--,v.queue(e,"fx").length||l.empty.fire()})})),e.nodeType===1&&("height"in t||"width"in t)&&(n.overflow=[p.overflow,p.overflowX,p.overflowY],v.css(e,"display")==="inline"&&v.css(e,"float")==="none"&&(!v.support.inlineBlockNeedsLayout||nn(e.nodeName)==="inline"?p.display="inline-block":p.zoom=1)),n.overflow&&(p.overflow="hidden",v.support.shrinkWrapBlocks||h.done(function(){p.overflow=n.overflow[0],p.overflowX=n.overflow[1],p.overflowY=n.overflow[2]}));for(r in t){s=t[r];if(Un.exec(s)){delete t[r],a=a||s==="toggle";if(s===(g?"hide":"show"))continue;m.push(r)}}o=m.length;if(o){u=v._data(e,"fxshow")||v._data(e,"fxshow",{}),"hidden"in u&&(g=u.hidden),a&&(u.hidden=!g),g?v(e).show():h.done(function(){v(e).hide()}),h.done(function(){var t;v.removeData(e,"fxshow",!0);for(t in d)v.style(e,t,d[t])});for(r=0;r<o;r++)i=m[r],f=h.createTween(i,g?u[i]:0),d[i]=u[i]||v.style(e,i),i in u||(u[i]=f.start,g&&(f.end=f.start,f.start=i==="width"||i==="height"?1:0))}}function Yn(e,t,n,r,i){return new Yn.prototype.init(e,t,n,r,i)}function Zn(e,t){var n,r={height:e},i=0;t=t?1:0;for(;i<4;i+=2-t)n=$t[i],r["margin"+n]=r["padding"+n]=e;return t&&(r.opacity=r.width=e),r}function tr(e){return v.isWindow(e)?e:e.nodeType===9?e.defaultView||e.parentWindow:!1}var n,r,i=e.document,s=e.location,o=e.navigator,u=e.jQuery,a=e.$,f=Array.prototype.push,l=Array.prototype.slice,c=Array.prototype.indexOf,h=Object.prototype.toString,p=Object.prototype.hasOwnProperty,d=String.prototype.trim,v=function(e,t){return new v.fn.init(e,t,n)},m=/[\-+]?(?:\d*\.|)\d+(?:[eE][\-+]?\d+|)/.source,g=/\S/,y=/\s+/,b=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,w=/^(?:[^#<]*(<[\w\W]+>)[^>]*$|#([\w\-]*)$)/,E=/^<(\w+)\s*\/?>(?:<\/\1>|)$/,S=/^[\],:{}\s]*$/,x=/(?:^|:|,)(?:\s*\[)+/g,T=/\\(?:["\\\/bfnrt]|u[\da-fA-F]{4})/g,N=/"[^"\\\r\n]*"|true|false|null|-?(?:\d\d*\.|)\d+(?:[eE][\-+]?\d+|)/g,C=/^-ms-/,k=/-([\da-z])/gi,L=function(e,t){return(t+"").toUpperCase()},A=function(){i.addEventListener?(i.removeEventListener("DOMContentLoaded",A,!1),v.ready()):i.readyState==="complete"&&(i.detachEvent("onreadystatechange",A),v.ready())},O={};v.fn=v.prototype={constructor:v,init:function(e,n,r){var s,o,u,a;if(!e)return this;if(e.nodeType)return this.context=this[0]=e,this.length=1,this;if(typeof e=="string"){e.charAt(0)==="<"&&e.charAt(e.length-1)===">"&&e.length>=3?s=[null,e,null]:s=w.exec(e);if(s&&(s[1]||!n)){if(s[1])return n=n instanceof v?n[0]:n,a=n&&n.nodeType?n.ownerDocument||n:i,e=v.parseHTML(s[1],a,!0),E.test(s[1])&&v.isPlainObject(n)&&this.attr.call(e,n,!0),v.merge(this,e);o=i.getElementById(s[2]);if(o&&o.parentNode){if(o.id!==s[2])return r.find(e);this.length=1,this[0]=o}return this.context=i,this.selector=e,this}return!n||n.jquery?(n||r).find(e):this.constructor(n).find(e)}return v.isFunction(e)?r.ready(e):(e.selector!==t&&(this.selector=e.selector,this.context=e.context),v.makeArray(e,this))},selector:"",jquery:"1.8.3",length:0,size:function(){return this.length},toArray:function(){return l.call(this)},get:function(e){return e==null?this.toArray():e<0?this[this.length+e]:this[e]},pushStack:function(e,t,n){var r=v.merge(this.constructor(),e);return r.prevObject=this,r.context=this.context,t==="find"?r.selector=this.selector+(this.selector?" ":"")+n:t&&(r.selector=this.selector+"."+t+"("+n+")"),r},each:function(e,t){return v.each(this,e,t)},ready:function(e){return v.ready.promise().done(e),this},eq:function(e){return e=+e,e===-1?this.slice(e):this.slice(e,e+1)},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},slice:function(){return this.pushStack(l.apply(this,arguments),"slice",l.call(arguments).join(","))},map:function(e){return this.pushStack(v.map(this,function(t,n){return e.call(t,n,t)}))},end:function(){return this.prevObject||this.constructor(null)},push:f,sort:[].sort,splice:[].splice},v.fn.init.prototype=v.fn,v.extend=v.fn.extend=function(){var e,n,r,i,s,o,u=arguments[0]||{},a=1,f=arguments.length,l=!1;typeof u=="boolean"&&(l=u,u=arguments[1]||{},a=2),typeof u!="object"&&!v.isFunction(u)&&(u={}),f===a&&(u=this,--a);for(;a<f;a++)if((e=arguments[a])!=null)for(n in e){r=u[n],i=e[n];if(u===i)continue;l&&i&&(v.isPlainObject(i)||(s=v.isArray(i)))?(s?(s=!1,o=r&&v.isArray(r)?r:[]):o=r&&v.isPlainObject(r)?r:{},u[n]=v.extend(l,o,i)):i!==t&&(u[n]=i)}return u},v.extend({noConflict:function(t){return e.$===v&&(e.$=a),t&&e.jQuery===v&&(e.jQuery=u),v},isReady:!1,readyWait:1,holdReady:function(e){e?v.readyWait++:v.ready(!0)},ready:function(e){if(e===!0?--v.readyWait:v.isReady)return;if(!i.body)return setTimeout(v.ready,1);v.isReady=!0;if(e!==!0&&--v.readyWait>0)return;r.resolveWith(i,[v]),v.fn.trigger&&v(i).trigger("ready").off("ready")},isFunction:function(e){return v.type(e)==="function"},isArray:Array.isArray||function(e){return v.type(e)==="array"},isWindow:function(e){return e!=null&&e==e.window},isNumeric:function(e){return!isNaN(parseFloat(e))&&isFinite(e)},type:function(e){return e==null?String(e):O[h.call(e)]||"object"},isPlainObject:function(e){if(!e||v.type(e)!=="object"||e.nodeType||v.isWindow(e))return!1;try{if(e.constructor&&!p.call(e,"constructor")&&!p.call(e.constructor.prototype,"isPrototypeOf"))return!1}catch(n){return!1}var r;for(r in e);return r===t||p.call(e,r)},isEmptyObject:function(e){var t;for(t in e)return!1;return!0},error:function(e){throw new Error(e)},parseHTML:function(e,t,n){var r;return!e||typeof e!="string"?null:(typeof t=="boolean"&&(n=t,t=0),t=t||i,(r=E.exec(e))?[t.createElement(r[1])]:(r=v.buildFragment([e],t,n?null:[]),v.merge([],(r.cacheable?v.clone(r.fragment):r.fragment).childNodes)))},parseJSON:function(t){if(!t||typeof t!="string")return null;t=v.trim(t);if(e.JSON&&e.JSON.parse)return e.JSON.parse(t);if(S.test(t.replace(T,"@").replace(N,"]").replace(x,"")))return(new Function("return "+t))();v.error("Invalid JSON: "+t)},parseXML:function(n){var r,i;if(!n||typeof n!="string")return null;try{e.DOMParser?(i=new DOMParser,r=i.parseFromString(n,"text/xml")):(r=new ActiveXObject("Microsoft.XMLDOM"),r.async="false",r.loadXML(n))}catch(s){r=t}return(!r||!r.documentElement||r.getElementsByTagName("parsererror").length)&&v.error("Invalid XML: "+n),r},noop:function(){},globalEval:function(t){t&&g.test(t)&&(e.execScript||function(t){e.eval.call(e,t)})(t)},camelCase:function(e){return e.replace(C,"ms-").replace(k,L)},nodeName:function(e,t){return e.nodeName&&e.nodeName.toLowerCase()===t.toLowerCase()},each:function(e,n,r){var i,s=0,o=e.length,u=o===t||v.isFunction(e);if(r){if(u){for(i in e)if(n.apply(e[i],r)===!1)break}else for(;s<o;)if(n.apply(e[s++],r)===!1)break}else if(u){for(i in e)if(n.call(e[i],i,e[i])===!1)break}else for(;s<o;)if(n.call(e[s],s,e[s++])===!1)break;return e},trim:d&&!d.call("\ufeff\u00a0")?function(e){return e==null?"":d.call(e)}:function(e){return e==null?"":(e+"").replace(b,"")},makeArray:function(e,t){var n,r=t||[];return e!=null&&(n=v.type(e),e.length==null||n==="string"||n==="function"||n==="regexp"||v.isWindow(e)?f.call(r,e):v.merge(r,e)),r},inArray:function(e,t,n){var r;if(t){if(c)return c.call(t,e,n);r=t.length,n=n?n<0?Math.max(0,r+n):n:0;for(;n<r;n++)if(n in t&&t[n]===e)return n}return-1},merge:function(e,n){var r=n.length,i=e.length,s=0;if(typeof r=="number")for(;s<r;s++)e[i++]=n[s];else while(n[s]!==t)e[i++]=n[s++];return e.length=i,e},grep:function(e,t,n){var r,i=[],s=0,o=e.length;n=!!n;for(;s<o;s++)r=!!t(e[s],s),n!==r&&i.push(e[s]);return i},map:function(e,n,r){var i,s,o=[],u=0,a=e.length,f=e instanceof v||a!==t&&typeof a=="number"&&(a>0&&e[0]&&e[a-1]||a===0||v.isArray(e));if(f)for(;u<a;u++)i=n(e[u],u,r),i!=null&&(o[o.length]=i);else for(s in e)i=n(e[s],s,r),i!=null&&(o[o.length]=i);return o.concat.apply([],o)},guid:1,proxy:function(e,n){var r,i,s;return typeof n=="string"&&(r=e[n],n=e,e=r),v.isFunction(e)?(i=l.call(arguments,2),s=function(){return e.apply(n,i.concat(l.call(arguments)))},s.guid=e.guid=e.guid||v.guid++,s):t},access:function(e,n,r,i,s,o,u){var a,f=r==null,l=0,c=e.length;if(r&&typeof r=="object"){for(l in r)v.access(e,n,l,r[l],1,o,i);s=1}else if(i!==t){a=u===t&&v.isFunction(i),f&&(a?(a=n,n=function(e,t,n){return a.call(v(e),n)}):(n.call(e,i),n=null));if(n)for(;l<c;l++)n(e[l],r,a?i.call(e[l],l,n(e[l],r)):i,u);s=1}return s?e:f?n.call(e):c?n(e[0],r):o},now:function(){return(new Date).getTime()}}),v.ready.promise=function(t){if(!r){r=v.Deferred();if(i.readyState==="complete")setTimeout(v.ready,1);else if(i.addEventListener)i.addEventListener("DOMContentLoaded",A,!1),e.addEventListener("load",v.ready,!1);else{i.attachEvent("onreadystatechange",A),e.attachEvent("onload",v.ready);var n=!1;try{n=e.frameElement==null&&i.documentElement}catch(s){}n&&n.doScroll&&function o(){if(!v.isReady){try{n.doScroll("left")}catch(e){return setTimeout(o,50)}v.ready()}}()}}return r.promise(t)},v.each("Boolean Number String Function Array Date RegExp Object".split(" "),function(e,t){O["[object "+t+"]"]=t.toLowerCase()}),n=v(i);var M={};v.Callbacks=function(e){e=typeof e=="string"?M[e]||_(e):v.extend({},e);var n,r,i,s,o,u,a=[],f=!e.once&&[],l=function(t){n=e.memory&&t,r=!0,u=s||0,s=0,o=a.length,i=!0;for(;a&&u<o;u++)if(a[u].apply(t[0],t[1])===!1&&e.stopOnFalse){n=!1;break}i=!1,a&&(f?f.length&&l(f.shift()):n?a=[]:c.disable())},c={add:function(){if(a){var t=a.length;(function r(t){v.each(t,function(t,n){var i=v.type(n);i==="function"?(!e.unique||!c.has(n))&&a.push(n):n&&n.length&&i!=="string"&&r(n)})})(arguments),i?o=a.length:n&&(s=t,l(n))}return this},remove:function(){return a&&v.each(arguments,function(e,t){var n;while((n=v.inArray(t,a,n))>-1)a.splice(n,1),i&&(n<=o&&o--,n<=u&&u--)}),this},has:function(e){return v.inArray(e,a)>-1},empty:function(){return a=[],this},disable:function(){return a=f=n=t,this},disabled:function(){return!a},lock:function(){return f=t,n||c.disable(),this},locked:function(){return!f},fireWith:function(e,t){return t=t||[],t=[e,t.slice?t.slice():t],a&&(!r||f)&&(i?f.push(t):l(t)),this},fire:function(){return c.fireWith(this,arguments),this},fired:function(){return!!r}};return c},v.extend({Deferred:function(e){var t=[["resolve","done",v.Callbacks("once memory"),"resolved"],["reject","fail",v.Callbacks("once memory"),"rejected"],["notify","progress",v.Callbacks("memory")]],n="pending",r={state:function(){return n},always:function(){return i.done(arguments).fail(arguments),this},then:function(){var e=arguments;return v.Deferred(function(n){v.each(t,function(t,r){var s=r[0],o=e[t];i[r[1]](v.isFunction(o)?function(){var e=o.apply(this,arguments);e&&v.isFunction(e.promise)?e.promise().done(n.resolve).fail(n.reject).progress(n.notify):n[s+"With"](this===i?n:this,[e])}:n[s])}),e=null}).promise()},promise:function(e){return e!=null?v.extend(e,r):r}},i={};return r.pipe=r.then,v.each(t,function(e,s){var o=s[2],u=s[3];r[s[1]]=o.add,u&&o.add(function(){n=u},t[e^1][2].disable,t[2][2].lock),i[s[0]]=o.fire,i[s[0]+"With"]=o.fireWith}),r.promise(i),e&&e.call(i,i),i},when:function(e){var t=0,n=l.call(arguments),r=n.length,i=r!==1||e&&v.isFunction(e.promise)?r:0,s=i===1?e:v.Deferred(),o=function(e,t,n){return function(r){t[e]=this,n[e]=arguments.length>1?l.call(arguments):r,n===u?s.notifyWith(t,n):--i||s.resolveWith(t,n)}},u,a,f;if(r>1){u=new Array(r),a=new Array(r),f=new Array(r);for(;t<r;t++)n[t]&&v.isFunction(n[t].promise)?n[t].promise().done(o(t,f,n)).fail(s.reject).progress(o(t,a,u)):--i}return i||s.resolveWith(f,n),s.promise()}}),v.support=function(){var t,n,r,s,o,u,a,f,l,c,h,p=i.createElement("div");p.setAttribute("className","t"),p.innerHTML="  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",n=p.getElementsByTagName("*"),r=p.getElementsByTagName("a")[0];if(!n||!r||!n.length)return{};s=i.createElement("select"),o=s.appendChild(i.createElement("option")),u=p.getElementsByTagName("input")[0],r.style.cssText="top:1px;float:left;opacity:.5",t={leadingWhitespace:p.firstChild.nodeType===3,tbody:!p.getElementsByTagName("tbody").length,htmlSerialize:!!p.getElementsByTagName("link").length,style:/top/.test(r.getAttribute("style")),hrefNormalized:r.getAttribute("href")==="/a",opacity:/^0.5/.test(r.style.opacity),cssFloat:!!r.style.cssFloat,checkOn:u.value==="on",optSelected:o.selected,getSetAttribute:p.className!=="t",enctype:!!i.createElement("form").enctype,html5Clone:i.createElement("nav").cloneNode(!0).outerHTML!=="<:nav></:nav>",boxModel:i.compatMode==="CSS1Compat",submitBubbles:!0,changeBubbles:!0,focusinBubbles:!1,deleteExpando:!0,noCloneEvent:!0,inlineBlockNeedsLayout:!1,shrinkWrapBlocks:!1,reliableMarginRight:!0,boxSizingReliable:!0,pixelPosition:!1},u.checked=!0,t.noCloneChecked=u.cloneNode(!0).checked,s.disabled=!0,t.optDisabled=!o.disabled;try{delete p.test}catch(d){t.deleteExpando=!1}!p.addEventListener&&p.attachEvent&&p.fireEvent&&(p.attachEvent("onclick",h=function(){t.noCloneEvent=!1}),p.cloneNode(!0).fireEvent("onclick"),p.detachEvent("onclick",h)),u=i.createElement("input"),u.value="t",u.setAttribute("type","radio"),t.radioValue=u.value==="t",u.setAttribute("checked","checked"),u.setAttribute("name","t"),p.appendChild(u),a=i.createDocumentFragment(),a.appendChild(p.lastChild),t.checkClone=a.cloneNode(!0).cloneNode(!0).lastChild.checked,t.appendChecked=u.checked,a.removeChild(u),a.appendChild(p);if(p.attachEvent)for(l in{submit:!0,change:!0,focusin:!0})f="on"+l,c=f in p,c||(p.setAttribute(f,"return;"),c=typeof p[f]=="function"),t[l+"Bubbles"]=c;return v(function(){var n,r,s,o,u="padding:0;margin:0;border:0;display:block;overflow:hidden;",a=i.getElementsByTagName("body")[0];if(!a)return;n=i.createElement("div"),n.style.cssText="visibility:hidden;border:0;width:0;height:0;position:static;top:0;margin-top:1px",a.insertBefore(n,a.firstChild),r=i.createElement("div"),n.appendChild(r),r.innerHTML="<table><tr><td></td><td>t</td></tr></table>",s=r.getElementsByTagName("td"),s[0].style.cssText="padding:0;margin:0;border:0;display:none",c=s[0].offsetHeight===0,s[0].style.display="",s[1].style.display="none",t.reliableHiddenOffsets=c&&s[0].offsetHeight===0,r.innerHTML="",r.style.cssText="box-sizing:border-box;-moz-box-sizing:border-box;-webkit-box-sizing:border-box;padding:1px;border:1px;display:block;width:4px;margin-top:1%;position:absolute;top:1%;",t.boxSizing=r.offsetWidth===4,t.doesNotIncludeMarginInBodyOffset=a.offsetTop!==1,e.getComputedStyle&&(t.pixelPosition=(e.getComputedStyle(r,null)||{}).top!=="1%",t.boxSizingReliable=(e.getComputedStyle(r,null)||{width:"4px"}).width==="4px",o=i.createElement("div"),o.style.cssText=r.style.cssText=u,o.style.marginRight=o.style.width="0",r.style.width="1px",r.appendChild(o),t.reliableMarginRight=!parseFloat((e.getComputedStyle(o,null)||{}).marginRight)),typeof r.style.zoom!="undefined"&&(r.innerHTML="",r.style.cssText=u+"width:1px;padding:1px;display:inline;zoom:1",t.inlineBlockNeedsLayout=r.offsetWidth===3,r.style.display="block",r.style.overflow="visible",r.innerHTML="<div></div>",r.firstChild.style.width="5px",t.shrinkWrapBlocks=r.offsetWidth!==3,n.style.zoom=1),a.removeChild(n),n=r=s=o=null}),a.removeChild(p),n=r=s=o=u=a=p=null,t}();var D=/(?:\{[\s\S]*\}|\[[\s\S]*\])$/,P=/([A-Z])/g;v.extend({cache:{},deletedIds:[],uuid:0,expando:"jQuery"+(v.fn.jquery+Math.random()).replace(/\D/g,""),noData:{embed:!0,object:"clsid:D27CDB6E-AE6D-11cf-96B8-444553540000",applet:!0},hasData:function(e){return e=e.nodeType?v.cache[e[v.expando]]:e[v.expando],!!e&&!B(e)},data:function(e,n,r,i){if(!v.acceptData(e))return;var s,o,u=v.expando,a=typeof n=="string",f=e.nodeType,l=f?v.cache:e,c=f?e[u]:e[u]&&u;if((!c||!l[c]||!i&&!l[c].data)&&a&&r===t)return;c||(f?e[u]=c=v.deletedIds.pop()||v.guid++:c=u),l[c]||(l[c]={},f||(l[c].toJSON=v.noop));if(typeof n=="object"||typeof n=="function")i?l[c]=v.extend(l[c],n):l[c].data=v.extend(l[c].data,n);return s=l[c],i||(s.data||(s.data={}),s=s.data),r!==t&&(s[v.camelCase(n)]=r),a?(o=s[n],o==null&&(o=s[v.camelCase(n)])):o=s,o},removeData:function(e,t,n){if(!v.acceptData(e))return;var r,i,s,o=e.nodeType,u=o?v.cache:e,a=o?e[v.expando]:v.expando;if(!u[a])return;if(t){r=n?u[a]:u[a].data;if(r){v.isArray(t)||(t in r?t=[t]:(t=v.camelCase(t),t in r?t=[t]:t=t.split(" ")));for(i=0,s=t.length;i<s;i++)delete r[t[i]];if(!(n?B:v.isEmptyObject)(r))return}}if(!n){delete u[a].data;if(!B(u[a]))return}o?v.cleanData([e],!0):v.support.deleteExpando||u!=u.window?delete u[a]:u[a]=null},_data:function(e,t,n){return v.data(e,t,n,!0)},acceptData:function(e){var t=e.nodeName&&v.noData[e.nodeName.toLowerCase()];return!t||t!==!0&&e.getAttribute("classid")===t}}),v.fn.extend({data:function(e,n){var r,i,s,o,u,a=this[0],f=0,l=null;if(e===t){if(this.length){l=v.data(a);if(a.nodeType===1&&!v._data(a,"parsedAttrs")){s=a.attributes;for(u=s.length;f<u;f++)o=s[f].name,o.indexOf("data-")||(o=v.camelCase(o.substring(5)),H(a,o,l[o]));v._data(a,"parsedAttrs",!0)}}return l}return typeof e=="object"?this.each(function(){v.data(this,e)}):(r=e.split(".",2),r[1]=r[1]?"."+r[1]:"",i=r[1]+"!",v.access(this,function(n){if(n===t)return l=this.triggerHandler("getData"+i,[r[0]]),l===t&&a&&(l=v.data(a,e),l=H(a,e,l)),l===t&&r[1]?this.data(r[0]):l;r[1]=n,this.each(function(){var t=v(this);t.triggerHandler("setData"+i,r),v.data(this,e,n),t.triggerHandler("changeData"+i,r)})},null,n,arguments.length>1,null,!1))},removeData:function(e){return this.each(function(){v.removeData(this,e)})}}),v.extend({queue:function(e,t,n){var r;if(e)return t=(t||"fx")+"queue",r=v._data(e,t),n&&(!r||v.isArray(n)?r=v._data(e,t,v.makeArray(n)):r.push(n)),r||[]},dequeue:function(e,t){t=t||"fx";var n=v.queue(e,t),r=n.length,i=n.shift(),s=v._queueHooks(e,t),o=function(){v.dequeue(e,t)};i==="inprogress"&&(i=n.shift(),r--),i&&(t==="fx"&&n.unshift("inprogress"),delete s.stop,i.call(e,o,s)),!r&&s&&s.empty.fire()},_queueHooks:function(e,t){var n=t+"queueHooks";return v._data(e,n)||v._data(e,n,{empty:v.Callbacks("once memory").add(function(){v.removeData(e,t+"queue",!0),v.removeData(e,n,!0)})})}}),v.fn.extend({queue:function(e,n){var r=2;return typeof e!="string"&&(n=e,e="fx",r--),arguments.length<r?v.queue(this[0],e):n===t?this:this.each(function(){var t=v.queue(this,e,n);v._queueHooks(this,e),e==="fx"&&t[0]!=="inprogress"&&v.dequeue(this,e)})},dequeue:function(e){return this.each(function(){v.dequeue(this,e)})},delay:function(e,t){return e=v.fx?v.fx.speeds[e]||e:e,t=t||"fx",this.queue(t,function(t,n){var r=setTimeout(t,e);n.stop=function(){clearTimeout(r)}})},clearQueue:function(e){return this.queue(e||"fx",[])},promise:function(e,n){var r,i=1,s=v.Deferred(),o=this,u=this.length,a=function(){--i||s.resolveWith(o,[o])};typeof e!="string"&&(n=e,e=t),e=e||"fx";while(u--)r=v._data(o[u],e+"queueHooks"),r&&r.empty&&(i++,r.empty.add(a));return a(),s.promise(n)}});var j,F,I,q=/[\t\r\n]/g,R=/\r/g,U=/^(?:button|input)$/i,z=/^(?:button|input|object|select|textarea)$/i,W=/^a(?:rea|)$/i,X=/^(?:autofocus|autoplay|async|checked|controls|defer|disabled|hidden|loop|multiple|open|readonly|required|scoped|selected)$/i,V=v.support.getSetAttribute;v.fn.extend({attr:function(e,t){return v.access(this,v.attr,e,t,arguments.length>1)},removeAttr:function(e){return this.each(function(){v.removeAttr(this,e)})},prop:function(e,t){return v.access(this,v.prop,e,t,arguments.length>1)},removeProp:function(e){return e=v.propFix[e]||e,this.each(function(){try{this[e]=t,delete this[e]}catch(n){}})},addClass:function(e){var t,n,r,i,s,o,u;if(v.isFunction(e))return this.each(function(t){v(this).addClass(e.call(this,t,this.className))});if(e&&typeof e=="string"){t=e.split(y);for(n=0,r=this.length;n<r;n++){i=this[n];if(i.nodeType===1)if(!i.className&&t.length===1)i.className=e;else{s=" "+i.className+" ";for(o=0,u=t.length;o<u;o++)s.indexOf(" "+t[o]+" ")<0&&(s+=t[o]+" ");i.className=v.trim(s)}}}return this},removeClass:function(e){var n,r,i,s,o,u,a;if(v.isFunction(e))return this.each(function(t){v(this).removeClass(e.call(this,t,this.className))});if(e&&typeof e=="string"||e===t){n=(e||"").split(y);for(u=0,a=this.length;u<a;u++){i=this[u];if(i.nodeType===1&&i.className){r=(" "+i.className+" ").replace(q," ");for(s=0,o=n.length;s<o;s++)while(r.indexOf(" "+n[s]+" ")>=0)r=r.replace(" "+n[s]+" "," ");i.className=e?v.trim(r):""}}}return this},toggleClass:function(e,t){var n=typeof e,r=typeof t=="boolean";return v.isFunction(e)?this.each(function(n){v(this).toggleClass(e.call(this,n,this.className,t),t)}):this.each(function(){if(n==="string"){var i,s=0,o=v(this),u=t,a=e.split(y);while(i=a[s++])u=r?u:!o.hasClass(i),o[u?"addClass":"removeClass"](i)}else if(n==="undefined"||n==="boolean")this.className&&v._data(this,"__className__",this.className),this.className=this.className||e===!1?"":v._data(this,"__className__")||""})},hasClass:function(e){var t=" "+e+" ",n=0,r=this.length;for(;n<r;n++)if(this[n].nodeType===1&&(" "+this[n].className+" ").replace(q," ").indexOf(t)>=0)return!0;return!1},val:function(e){var n,r,i,s=this[0];if(!arguments.length){if(s)return n=v.valHooks[s.type]||v.valHooks[s.nodeName.toLowerCase()],n&&"get"in n&&(r=n.get(s,"value"))!==t?r:(r=s.value,typeof r=="string"?r.replace(R,""):r==null?"":r);return}return i=v.isFunction(e),this.each(function(r){var s,o=v(this);if(this.nodeType!==1)return;i?s=e.call(this,r,o.val()):s=e,s==null?s="":typeof s=="number"?s+="":v.isArray(s)&&(s=v.map(s,function(e){return e==null?"":e+""})),n=v.valHooks[this.type]||v.valHooks[this.nodeName.toLowerCase()];if(!n||!("set"in n)||n.set(this,s,"value")===t)this.value=s})}}),v.extend({valHooks:{option:{get:function(e){var t=e.attributes.value;return!t||t.specified?e.value:e.text}},select:{get:function(e){var t,n,r=e.options,i=e.selectedIndex,s=e.type==="select-one"||i<0,o=s?null:[],u=s?i+1:r.length,a=i<0?u:s?i:0;for(;a<u;a++){n=r[a];if((n.selected||a===i)&&(v.support.optDisabled?!n.disabled:n.getAttribute("disabled")===null)&&(!n.parentNode.disabled||!v.nodeName(n.parentNode,"optgroup"))){t=v(n).val();if(s)return t;o.push(t)}}return o},set:function(e,t){var n=v.makeArray(t);return v(e).find("option").each(function(){this.selected=v.inArray(v(this).val(),n)>=0}),n.length||(e.selectedIndex=-1),n}}},attrFn:{},attr:function(e,n,r,i){var s,o,u,a=e.nodeType;if(!e||a===3||a===8||a===2)return;if(i&&v.isFunction(v.fn[n]))return v(e)[n](r);if(typeof e.getAttribute=="undefined")return v.prop(e,n,r);u=a!==1||!v.isXMLDoc(e),u&&(n=n.toLowerCase(),o=v.attrHooks[n]||(X.test(n)?F:j));if(r!==t){if(r===null){v.removeAttr(e,n);return}return o&&"set"in o&&u&&(s=o.set(e,r,n))!==t?s:(e.setAttribute(n,r+""),r)}return o&&"get"in o&&u&&(s=o.get(e,n))!==null?s:(s=e.getAttribute(n),s===null?t:s)},removeAttr:function(e,t){var n,r,i,s,o=0;if(t&&e.nodeType===1){r=t.split(y);for(;o<r.length;o++)i=r[o],i&&(n=v.propFix[i]||i,s=X.test(i),s||v.attr(e,i,""),e.removeAttribute(V?i:n),s&&n in e&&(e[n]=!1))}},attrHooks:{type:{set:function(e,t){if(U.test(e.nodeName)&&e.parentNode)v.error("type property can't be changed");else if(!v.support.radioValue&&t==="radio"&&v.nodeName(e,"input")){var n=e.value;return e.setAttribute("type",t),n&&(e.value=n),t}}},value:{get:function(e,t){return j&&v.nodeName(e,"button")?j.get(e,t):t in e?e.value:null},set:function(e,t,n){if(j&&v.nodeName(e,"button"))return j.set(e,t,n);e.value=t}}},propFix:{tabindex:"tabIndex",readonly:"readOnly","for":"htmlFor","class":"className",maxlength:"maxLength",cellspacing:"cellSpacing",cellpadding:"cellPadding",rowspan:"rowSpan",colspan:"colSpan",usemap:"useMap",frameborder:"frameBorder",contenteditable:"contentEditable"},prop:function(e,n,r){var i,s,o,u=e.nodeType;if(!e||u===3||u===8||u===2)return;return o=u!==1||!v.isXMLDoc(e),o&&(n=v.propFix[n]||n,s=v.propHooks[n]),r!==t?s&&"set"in s&&(i=s.set(e,r,n))!==t?i:e[n]=r:s&&"get"in s&&(i=s.get(e,n))!==null?i:e[n]},propHooks:{tabIndex:{get:function(e){var n=e.getAttributeNode("tabindex");return n&&n.specified?parseInt(n.value,10):z.test(e.nodeName)||W.test(e.nodeName)&&e.href?0:t}}}}),F={get:function(e,n){var r,i=v.prop(e,n);return i===!0||typeof i!="boolean"&&(r=e.getAttributeNode(n))&&r.nodeValue!==!1?n.toLowerCase():t},set:function(e,t,n){var r;return t===!1?v.removeAttr(e,n):(r=v.propFix[n]||n,r in e&&(e[r]=!0),e.setAttribute(n,n.toLowerCase())),n}},V||(I={name:!0,id:!0,coords:!0},j=v.valHooks.button={get:function(e,n){var r;return r=e.getAttributeNode(n),r&&(I[n]?r.value!=="":r.specified)?r.value:t},set:function(e,t,n){var r=e.getAttributeNode(n);return r||(r=i.createAttribute(n),e.setAttributeNode(r)),r.value=t+""}},v.each(["width","height"],function(e,t){v.attrHooks[t]=v.extend(v.attrHooks[t],{set:function(e,n){if(n==="")return e.setAttribute(t,"auto"),n}})}),v.attrHooks.contenteditable={get:j.get,set:function(e,t,n){t===""&&(t="false"),j.set(e,t,n)}}),v.support.hrefNormalized||v.each(["href","src","width","height"],function(e,n){v.attrHooks[n]=v.extend(v.attrHooks[n],{get:function(e){var r=e.getAttribute(n,2);return r===null?t:r}})}),v.support.style||(v.attrHooks.style={get:function(e){return e.style.cssText.toLowerCase()||t},set:function(e,t){return e.style.cssText=t+""}}),v.support.optSelected||(v.propHooks.selected=v.extend(v.propHooks.selected,{get:function(e){var t=e.parentNode;return t&&(t.selectedIndex,t.parentNode&&t.parentNode.selectedIndex),null}})),v.support.enctype||(v.propFix.enctype="encoding"),v.support.checkOn||v.each(["radio","checkbox"],function(){v.valHooks[this]={get:function(e){return e.getAttribute("value")===null?"on":e.value}}}),v.each(["radio","checkbox"],function(){v.valHooks[this]=v.extend(v.valHooks[this],{set:function(e,t){if(v.isArray(t))return e.checked=v.inArray(v(e).val(),t)>=0}})});var $=/^(?:textarea|input|select)$/i,J=/^([^\.]*|)(?:\.(.+)|)$/,K=/(?:^|\s)hover(\.\S+|)\b/,Q=/^key/,G=/^(?:mouse|contextmenu)|click/,Y=/^(?:focusinfocus|focusoutblur)$/,Z=function(e){return v.event.special.hover?e:e.replace(K,"mouseenter$1 mouseleave$1")};v.event={add:function(e,n,r,i,s){var o,u,a,f,l,c,h,p,d,m,g;if(e.nodeType===3||e.nodeType===8||!n||!r||!(o=v._data(e)))return;r.handler&&(d=r,r=d.handler,s=d.selector),r.guid||(r.guid=v.guid++),a=o.events,a||(o.events=a={}),u=o.handle,u||(o.handle=u=function(e){return typeof v=="undefined"||!!e&&v.event.triggered===e.type?t:v.event.dispatch.apply(u.elem,arguments)},u.elem=e),n=v.trim(Z(n)).split(" ");for(f=0;f<n.length;f++){l=J.exec(n[f])||[],c=l[1],h=(l[2]||"").split(".").sort(),g=v.event.special[c]||{},c=(s?g.delegateType:g.bindType)||c,g=v.event.special[c]||{},p=v.extend({type:c,origType:l[1],data:i,handler:r,guid:r.guid,selector:s,needsContext:s&&v.expr.match.needsContext.test(s),namespace:h.join(".")},d),m=a[c];if(!m){m=a[c]=[],m.delegateCount=0;if(!g.setup||g.setup.call(e,i,h,u)===!1)e.addEventListener?e.addEventListener(c,u,!1):e.attachEvent&&e.attachEvent("on"+c,u)}g.add&&(g.add.call(e,p),p.handler.guid||(p.handler.guid=r.guid)),s?m.splice(m.delegateCount++,0,p):m.push(p),v.event.global[c]=!0}e=null},global:{},remove:function(e,t,n,r,i){var s,o,u,a,f,l,c,h,p,d,m,g=v.hasData(e)&&v._data(e);if(!g||!(h=g.events))return;t=v.trim(Z(t||"")).split(" ");for(s=0;s<t.length;s++){o=J.exec(t[s])||[],u=a=o[1],f=o[2];if(!u){for(u in h)v.event.remove(e,u+t[s],n,r,!0);continue}p=v.event.special[u]||{},u=(r?p.delegateType:p.bindType)||u,d=h[u]||[],l=d.length,f=f?new RegExp("(^|\\.)"+f.split(".").sort().join("\\.(?:.*\\.|)")+"(\\.|$)"):null;for(c=0;c<d.length;c++)m=d[c],(i||a===m.origType)&&(!n||n.guid===m.guid)&&(!f||f.test(m.namespace))&&(!r||r===m.selector||r==="**"&&m.selector)&&(d.splice(c--,1),m.selector&&d.delegateCount--,p.remove&&p.remove.call(e,m));d.length===0&&l!==d.length&&((!p.teardown||p.teardown.call(e,f,g.handle)===!1)&&v.removeEvent(e,u,g.handle),delete h[u])}v.isEmptyObject(h)&&(delete g.handle,v.removeData(e,"events",!0))},customEvent:{getData:!0,setData:!0,changeData:!0},trigger:function(n,r,s,o){if(!s||s.nodeType!==3&&s.nodeType!==8){var u,a,f,l,c,h,p,d,m,g,y=n.type||n,b=[];if(Y.test(y+v.event.triggered))return;y.indexOf("!")>=0&&(y=y.slice(0,-1),a=!0),y.indexOf(".")>=0&&(b=y.split("."),y=b.shift(),b.sort());if((!s||v.event.customEvent[y])&&!v.event.global[y])return;n=typeof n=="object"?n[v.expando]?n:new v.Event(y,n):new v.Event(y),n.type=y,n.isTrigger=!0,n.exclusive=a,n.namespace=b.join("."),n.namespace_re=n.namespace?new RegExp("(^|\\.)"+b.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,h=y.indexOf(":")<0?"on"+y:"";if(!s){u=v.cache;for(f in u)u[f].events&&u[f].events[y]&&v.event.trigger(n,r,u[f].handle.elem,!0);return}n.result=t,n.target||(n.target=s),r=r!=null?v.makeArray(r):[],r.unshift(n),p=v.event.special[y]||{};if(p.trigger&&p.trigger.apply(s,r)===!1)return;m=[[s,p.bindType||y]];if(!o&&!p.noBubble&&!v.isWindow(s)){g=p.delegateType||y,l=Y.test(g+y)?s:s.parentNode;for(c=s;l;l=l.parentNode)m.push([l,g]),c=l;c===(s.ownerDocument||i)&&m.push([c.defaultView||c.parentWindow||e,g])}for(f=0;f<m.length&&!n.isPropagationStopped();f++)l=m[f][0],n.type=m[f][1],d=(v._data(l,"events")||{})[n.type]&&v._data(l,"handle"),d&&d.apply(l,r),d=h&&l[h],d&&v.acceptData(l)&&d.apply&&d.apply(l,r)===!1&&n.preventDefault();return n.type=y,!o&&!n.isDefaultPrevented()&&(!p._default||p._default.apply(s.ownerDocument,r)===!1)&&(y!=="click"||!v.nodeName(s,"a"))&&v.acceptData(s)&&h&&s[y]&&(y!=="focus"&&y!=="blur"||n.target.offsetWidth!==0)&&!v.isWindow(s)&&(c=s[h],c&&(s[h]=null),v.event.triggered=y,s[y](),v.event.triggered=t,c&&(s[h]=c)),n.result}return},dispatch:function(n){n=v.event.fix(n||e.event);var r,i,s,o,u,a,f,c,h,p,d=(v._data(this,"events")||{})[n.type]||[],m=d.delegateCount,g=l.call(arguments),y=!n.exclusive&&!n.namespace,b=v.event.special[n.type]||{},w=[];g[0]=n,n.delegateTarget=this;if(b.preDispatch&&b.preDispatch.call(this,n)===!1)return;if(m&&(!n.button||n.type!=="click"))for(s=n.target;s!=this;s=s.parentNode||this)if(s.disabled!==!0||n.type!=="click"){u={},f=[];for(r=0;r<m;r++)c=d[r],h=c.selector,u[h]===t&&(u[h]=c.needsContext?v(h,this).index(s)>=0:v.find(h,this,null,[s]).length),u[h]&&f.push(c);f.length&&w.push({elem:s,matches:f})}d.length>m&&w.push({elem:this,matches:d.slice(m)});for(r=0;r<w.length&&!n.isPropagationStopped();r++){a=w[r],n.currentTarget=a.elem;for(i=0;i<a.matches.length&&!n.isImmediatePropagationStopped();i++){c=a.matches[i];if(y||!n.namespace&&!c.namespace||n.namespace_re&&n.namespace_re.test(c.namespace))n.data=c.data,n.handleObj=c,o=((v.event.special[c.origType]||{}).handle||c.handler).apply(a.elem,g),o!==t&&(n.result=o,o===!1&&(n.preventDefault(),n.stopPropagation()))}}return b.postDispatch&&b.postDispatch.call(this,n),n.result},props:"attrChange attrName relatedNode srcElement altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),fixHooks:{},keyHooks:{props:"char charCode key keyCode".split(" "),filter:function(e,t){return e.which==null&&(e.which=t.charCode!=null?t.charCode:t.keyCode),e}},mouseHooks:{props:"button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),filter:function(e,n){var r,s,o,u=n.button,a=n.fromElement;return e.pageX==null&&n.clientX!=null&&(r=e.target.ownerDocument||i,s=r.documentElement,o=r.body,e.pageX=n.clientX+(s&&s.scrollLeft||o&&o.scrollLeft||0)-(s&&s.clientLeft||o&&o.clientLeft||0),e.pageY=n.clientY+(s&&s.scrollTop||o&&o.scrollTop||0)-(s&&s.clientTop||o&&o.clientTop||0)),!e.relatedTarget&&a&&(e.relatedTarget=a===e.target?n.toElement:a),!e.which&&u!==t&&(e.which=u&1?1:u&2?3:u&4?2:0),e}},fix:function(e){if(e[v.expando])return e;var t,n,r=e,s=v.event.fixHooks[e.type]||{},o=s.props?this.props.concat(s.props):this.props;e=v.Event(r);for(t=o.length;t;)n=o[--t],e[n]=r[n];return e.target||(e.target=r.srcElement||i),e.target.nodeType===3&&(e.target=e.target.parentNode),e.metaKey=!!e.metaKey,s.filter?s.filter(e,r):e},special:{load:{noBubble:!0},focus:{delegateType:"focusin"},blur:{delegateType:"focusout"},beforeunload:{setup:function(e,t,n){v.isWindow(this)&&(this.onbeforeunload=n)},teardown:function(e,t){this.onbeforeunload===t&&(this.onbeforeunload=null)}}},simulate:function(e,t,n,r){var i=v.extend(new v.Event,n,{type:e,isSimulated:!0,originalEvent:{}});r?v.event.trigger(i,null,t):v.event.dispatch.call(t,i),i.isDefaultPrevented()&&n.preventDefault()}},v.event.handle=v.event.dispatch,v.removeEvent=i.removeEventListener?function(e,t,n){e.removeEventListener&&e.removeEventListener(t,n,!1)}:function(e,t,n){var r="on"+t;e.detachEvent&&(typeof e[r]=="undefined"&&(e[r]=null),e.detachEvent(r,n))},v.Event=function(e,t){if(!(this instanceof v.Event))return new v.Event(e,t);e&&e.type?(this.originalEvent=e,this.type=e.type,this.isDefaultPrevented=e.defaultPrevented||e.returnValue===!1||e.getPreventDefault&&e.getPreventDefault()?tt:et):this.type=e,t&&v.extend(this,t),this.timeStamp=e&&e.timeStamp||v.now(),this[v.expando]=!0},v.Event.prototype={preventDefault:function(){this.isDefaultPrevented=tt;var e=this.originalEvent;if(!e)return;e.preventDefault?e.preventDefault():e.returnValue=!1},stopPropagation:function(){this.isPropagationStopped=tt;var e=this.originalEvent;if(!e)return;e.stopPropagation&&e.stopPropagation(),e.cancelBubble=!0},stopImmediatePropagation:function(){this.isImmediatePropagationStopped=tt,this.stopPropagation()},isDefaultPrevented:et,isPropagationStopped:et,isImmediatePropagationStopped:et},v.each({mouseenter:"mouseover",mouseleave:"mouseout"},function(e,t){v.event.special[e]={delegateType:t,bindType:t,handle:function(e){var n,r=this,i=e.relatedTarget,s=e.handleObj,o=s.selector;if(!i||i!==r&&!v.contains(r,i))e.type=s.origType,n=s.handler.apply(this,arguments),e.type=t;return n}}}),v.support.submitBubbles||(v.event.special.submit={setup:function(){if(v.nodeName(this,"form"))return!1;v.event.add(this,"click._submit keypress._submit",function(e){var n=e.target,r=v.nodeName(n,"input")||v.nodeName(n,"button")?n.form:t;r&&!v._data(r,"_submit_attached")&&(v.event.add(r,"submit._submit",function(e){e._submit_bubble=!0}),v._data(r,"_submit_attached",!0))})},postDispatch:function(e){e._submit_bubble&&(delete e._submit_bubble,this.parentNode&&!e.isTrigger&&v.event.simulate("submit",this.parentNode,e,!0))},teardown:function(){if(v.nodeName(this,"form"))return!1;v.event.remove(this,"._submit")}}),v.support.changeBubbles||(v.event.special.change={setup:function(){if($.test(this.nodeName)){if(this.type==="checkbox"||this.type==="radio")v.event.add(this,"propertychange._change",function(e){e.originalEvent.propertyName==="checked"&&(this._just_changed=!0)}),v.event.add(this,"click._change",function(e){this._just_changed&&!e.isTrigger&&(this._just_changed=!1),v.event.simulate("change",this,e,!0)});return!1}v.event.add(this,"beforeactivate._change",function(e){var t=e.target;$.test(t.nodeName)&&!v._data(t,"_change_attached")&&(v.event.add(t,"change._change",function(e){this.parentNode&&!e.isSimulated&&!e.isTrigger&&v.event.simulate("change",this.parentNode,e,!0)}),v._data(t,"_change_attached",!0))})},handle:function(e){var t=e.target;if(this!==t||e.isSimulated||e.isTrigger||t.type!=="radio"&&t.type!=="checkbox")return e.handleObj.handler.apply(this,arguments)},teardown:function(){return v.event.remove(this,"._change"),!$.test(this.nodeName)}}),v.support.focusinBubbles||v.each({focus:"focusin",blur:"focusout"},function(e,t){var n=0,r=function(e){v.event.simulate(t,e.target,v.event.fix(e),!0)};v.event.special[t]={setup:function(){n++===0&&i.addEventListener(e,r,!0)},teardown:function(){--n===0&&i.removeEventListener(e,r,!0)}}}),v.fn.extend({on:function(e,n,r,i,s){var o,u;if(typeof e=="object"){typeof n!="string"&&(r=r||n,n=t);for(u in e)this.on(u,n,r,e[u],s);return this}r==null&&i==null?(i=n,r=n=t):i==null&&(typeof n=="string"?(i=r,r=t):(i=r,r=n,n=t));if(i===!1)i=et;else if(!i)return this;return s===1&&(o=i,i=function(e){return v().off(e),o.apply(this,arguments)},i.guid=o.guid||(o.guid=v.guid++)),this.each(function(){v.event.add(this,e,i,r,n)})},one:function(e,t,n,r){return this.on(e,t,n,r,1)},off:function(e,n,r){var i,s;if(e&&e.preventDefault&&e.handleObj)return i=e.handleObj,v(e.delegateTarget).off(i.namespace?i.origType+"."+i.namespace:i.origType,i.selector,i.handler),this;if(typeof e=="object"){for(s in e)this.off(s,n,e[s]);return this}if(n===!1||typeof n=="function")r=n,n=t;return r===!1&&(r=et),this.each(function(){v.event.remove(this,e,r,n)})},bind:function(e,t,n){return this.on(e,null,t,n)},unbind:function(e,t){return this.off(e,null,t)},live:function(e,t,n){return v(this.context).on(e,this.selector,t,n),this},die:function(e,t){return v(this.context).off(e,this.selector||"**",t),this},delegate:function(e,t,n,r){return this.on(t,e,n,r)},undelegate:function(e,t,n){return arguments.length===1?this.off(e,"**"):this.off(t,e||"**",n)},trigger:function(e,t){return this.each(function(){v.event.trigger(e,t,this)})},triggerHandler:function(e,t){if(this[0])return v.event.trigger(e,t,this[0],!0)},toggle:function(e){var t=arguments,n=e.guid||v.guid++,r=0,i=function(n){var i=(v._data(this,"lastToggle"+e.guid)||0)%r;return v._data(this,"lastToggle"+e.guid,i+1),n.preventDefault(),t[i].apply(this,arguments)||!1};i.guid=n;while(r<t.length)t[r++].guid=n;return this.click(i)},hover:function(e,t){return this.mouseenter(e).mouseleave(t||e)}}),v.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "),function(e,t){v.fn[t]=function(e,n){return n==null&&(n=e,e=null),arguments.length>0?this.on(t,null,e,n):this.trigger(t)},Q.test(t)&&(v.event.fixHooks[t]=v.event.keyHooks),G.test(t)&&(v.event.fixHooks[t]=v.event.mouseHooks)}),function(e,t){function nt(e,t,n,r){n=n||[],t=t||g;var i,s,a,f,l=t.nodeType;if(!e||typeof e!="string")return n;if(l!==1&&l!==9)return[];a=o(t);if(!a&&!r)if(i=R.exec(e))if(f=i[1]){if(l===9){s=t.getElementById(f);if(!s||!s.parentNode)return n;if(s.id===f)return n.push(s),n}else if(t.ownerDocument&&(s=t.ownerDocument.getElementById(f))&&u(t,s)&&s.id===f)return n.push(s),n}else{if(i[2])return S.apply(n,x.call(t.getElementsByTagName(e),0)),n;if((f=i[3])&&Z&&t.getElementsByClassName)return S.apply(n,x.call(t.getElementsByClassName(f),0)),n}return vt(e.replace(j,"$1"),t,n,r,a)}function rt(e){return function(t){var n=t.nodeName.toLowerCase();return n==="input"&&t.type===e}}function it(e){return function(t){var n=t.nodeName.toLowerCase();return(n==="input"||n==="button")&&t.type===e}}function st(e){return N(function(t){return t=+t,N(function(n,r){var i,s=e([],n.length,t),o=s.length;while(o--)n[i=s[o]]&&(n[i]=!(r[i]=n[i]))})})}function ot(e,t,n){if(e===t)return n;var r=e.nextSibling;while(r){if(r===t)return-1;r=r.nextSibling}return 1}function ut(e,t){var n,r,s,o,u,a,f,l=L[d][e+" "];if(l)return t?0:l.slice(0);u=e,a=[],f=i.preFilter;while(u){if(!n||(r=F.exec(u)))r&&(u=u.slice(r[0].length)||u),a.push(s=[]);n=!1;if(r=I.exec(u))s.push(n=new m(r.shift())),u=u.slice(n.length),n.type=r[0].replace(j," ");for(o in i.filter)(r=J[o].exec(u))&&(!f[o]||(r=f[o](r)))&&(s.push(n=new m(r.shift())),u=u.slice(n.length),n.type=o,n.matches=r);if(!n)break}return t?u.length:u?nt.error(e):L(e,a).slice(0)}function at(e,t,r){var i=t.dir,s=r&&t.dir==="parentNode",o=w++;return t.first?function(t,n,r){while(t=t[i])if(s||t.nodeType===1)return e(t,n,r)}:function(t,r,u){if(!u){var a,f=b+" "+o+" ",l=f+n;while(t=t[i])if(s||t.nodeType===1){if((a=t[d])===l)return t.sizset;if(typeof a=="string"&&a.indexOf(f)===0){if(t.sizset)return t}else{t[d]=l;if(e(t,r,u))return t.sizset=!0,t;t.sizset=!1}}}else while(t=t[i])if(s||t.nodeType===1)if(e(t,r,u))return t}}function ft(e){return e.length>1?function(t,n,r){var i=e.length;while(i--)if(!e[i](t,n,r))return!1;return!0}:e[0]}function lt(e,t,n,r,i){var s,o=[],u=0,a=e.length,f=t!=null;for(;u<a;u++)if(s=e[u])if(!n||n(s,r,i))o.push(s),f&&t.push(u);return o}function ct(e,t,n,r,i,s){return r&&!r[d]&&(r=ct(r)),i&&!i[d]&&(i=ct(i,s)),N(function(s,o,u,a){var f,l,c,h=[],p=[],d=o.length,v=s||dt(t||"*",u.nodeType?[u]:u,[]),m=e&&(s||!t)?lt(v,h,e,u,a):v,g=n?i||(s?e:d||r)?[]:o:m;n&&n(m,g,u,a);if(r){f=lt(g,p),r(f,[],u,a),l=f.length;while(l--)if(c=f[l])g[p[l]]=!(m[p[l]]=c)}if(s){if(i||e){if(i){f=[],l=g.length;while(l--)(c=g[l])&&f.push(m[l]=c);i(null,g=[],f,a)}l=g.length;while(l--)(c=g[l])&&(f=i?T.call(s,c):h[l])>-1&&(s[f]=!(o[f]=c))}}else g=lt(g===o?g.splice(d,g.length):g),i?i(null,o,g,a):S.apply(o,g)})}function ht(e){var t,n,r,s=e.length,o=i.relative[e[0].type],u=o||i.relative[" "],a=o?1:0,f=at(function(e){return e===t},u,!0),l=at(function(e){return T.call(t,e)>-1},u,!0),h=[function(e,n,r){return!o&&(r||n!==c)||((t=n).nodeType?f(e,n,r):l(e,n,r))}];for(;a<s;a++)if(n=i.relative[e[a].type])h=[at(ft(h),n)];else{n=i.filter[e[a].type].apply(null,e[a].matches);if(n[d]){r=++a;for(;r<s;r++)if(i.relative[e[r].type])break;return ct(a>1&&ft(h),a>1&&e.slice(0,a-1).join("").replace(j,"$1"),n,a<r&&ht(e.slice(a,r)),r<s&&ht(e=e.slice(r)),r<s&&e.join(""))}h.push(n)}return ft(h)}function pt(e,t){var r=t.length>0,s=e.length>0,o=function(u,a,f,l,h){var p,d,v,m=[],y=0,w="0",x=u&&[],T=h!=null,N=c,C=u||s&&i.find.TAG("*",h&&a.parentNode||a),k=b+=N==null?1:Math.E;T&&(c=a!==g&&a,n=o.el);for(;(p=C[w])!=null;w++){if(s&&p){for(d=0;v=e[d];d++)if(v(p,a,f)){l.push(p);break}T&&(b=k,n=++o.el)}r&&((p=!v&&p)&&y--,u&&x.push(p))}y+=w;if(r&&w!==y){for(d=0;v=t[d];d++)v(x,m,a,f);if(u){if(y>0)while(w--)!x[w]&&!m[w]&&(m[w]=E.call(l));m=lt(m)}S.apply(l,m),T&&!u&&m.length>0&&y+t.length>1&&nt.uniqueSort(l)}return T&&(b=k,c=N),x};return o.el=0,r?N(o):o}function dt(e,t,n){var r=0,i=t.length;for(;r<i;r++)nt(e,t[r],n);return n}function vt(e,t,n,r,s){var o,u,f,l,c,h=ut(e),p=h.length;if(!r&&h.length===1){u=h[0]=h[0].slice(0);if(u.length>2&&(f=u[0]).type==="ID"&&t.nodeType===9&&!s&&i.relative[u[1].type]){t=i.find.ID(f.matches[0].replace($,""),t,s)[0];if(!t)return n;e=e.slice(u.shift().length)}for(o=J.POS.test(e)?-1:u.length-1;o>=0;o--){f=u[o];if(i.relative[l=f.type])break;if(c=i.find[l])if(r=c(f.matches[0].replace($,""),z.test(u[0].type)&&t.parentNode||t,s)){u.splice(o,1),e=r.length&&u.join("");if(!e)return S.apply(n,x.call(r,0)),n;break}}}return a(e,h)(r,t,s,n,z.test(e)),n}function mt(){}var n,r,i,s,o,u,a,f,l,c,h=!0,p="undefined",d=("sizcache"+Math.random()).replace(".",""),m=String,g=e.document,y=g.documentElement,b=0,w=0,E=[].pop,S=[].push,x=[].slice,T=[].indexOf||function(e){var t=0,n=this.length;for(;t<n;t++)if(this[t]===e)return t;return-1},N=function(e,t){return e[d]=t==null||t,e},C=function(){var e={},t=[];return N(function(n,r){return t.push(n)>i.cacheLength&&delete e[t.shift()],e[n+" "]=r},e)},k=C(),L=C(),A=C(),O="[\\x20\\t\\r\\n\\f]",M="(?:\\\\.|[-\\w]|[^\\x00-\\xa0])+",_=M.replace("w","w#"),D="([*^$|!~]?=)",P="\\["+O+"*("+M+")"+O+"*(?:"+D+O+"*(?:(['\"])((?:\\\\.|[^\\\\])*?)\\3|("+_+")|)|)"+O+"*\\]",H=":("+M+")(?:\\((?:(['\"])((?:\\\\.|[^\\\\])*?)\\2|([^()[\\]]*|(?:(?:"+P+")|[^:]|\\\\.)*|.*))\\)|)",B=":(even|odd|eq|gt|lt|nth|first|last)(?:\\("+O+"*((?:-\\d)?\\d*)"+O+"*\\)|)(?=[^-]|$)",j=new RegExp("^"+O+"+|((?:^|[^\\\\])(?:\\\\.)*)"+O+"+$","g"),F=new RegExp("^"+O+"*,"+O+"*"),I=new RegExp("^"+O+"*([\\x20\\t\\r\\n\\f>+~])"+O+"*"),q=new RegExp(H),R=/^(?:#([\w\-]+)|(\w+)|\.([\w\-]+))$/,U=/^:not/,z=/[\x20\t\r\n\f]*[+~]/,W=/:not\($/,X=/h\d/i,V=/input|select|textarea|button/i,$=/\\(?!\\)/g,J={ID:new RegExp("^#("+M+")"),CLASS:new RegExp("^\\.("+M+")"),NAME:new RegExp("^\\[name=['\"]?("+M+")['\"]?\\]"),TAG:new RegExp("^("+M.replace("w","w*")+")"),ATTR:new RegExp("^"+P),PSEUDO:new RegExp("^"+H),POS:new RegExp(B,"i"),CHILD:new RegExp("^:(only|nth|first|last)-child(?:\\("+O+"*(even|odd|(([+-]|)(\\d*)n|)"+O+"*(?:([+-]|)"+O+"*(\\d+)|))"+O+"*\\)|)","i"),needsContext:new RegExp("^"+O+"*[>+~]|"+B,"i")},K=function(e){var t=g.createElement("div");try{return e(t)}catch(n){return!1}finally{t=null}},Q=K(function(e){return e.appendChild(g.createComment("")),!e.getElementsByTagName("*").length}),G=K(function(e){return e.innerHTML="<a href='#'></a>",e.firstChild&&typeof e.firstChild.getAttribute!==p&&e.firstChild.getAttribute("href")==="#"}),Y=K(function(e){e.innerHTML="<select></select>";var t=typeof e.lastChild.getAttribute("multiple");return t!=="boolean"&&t!=="string"}),Z=K(function(e){return e.innerHTML="<div class='hidden e'></div><div class='hidden'></div>",!e.getElementsByClassName||!e.getElementsByClassName("e").length?!1:(e.lastChild.className="e",e.getElementsByClassName("e").length===2)}),et=K(function(e){e.id=d+0,e.innerHTML="<a name='"+d+"'></a><div name='"+d+"'></div>",y.insertBefore(e,y.firstChild);var t=g.getElementsByName&&g.getElementsByName(d).length===2+g.getElementsByName(d+0).length;return r=!g.getElementById(d),y.removeChild(e),t});try{x.call(y.childNodes,0)[0].nodeType}catch(tt){x=function(e){var t,n=[];for(;t=this[e];e++)n.push(t);return n}}nt.matches=function(e,t){return nt(e,null,null,t)},nt.matchesSelector=function(e,t){return nt(t,null,null,[e]).length>0},s=nt.getText=function(e){var t,n="",r=0,i=e.nodeType;if(i){if(i===1||i===9||i===11){if(typeof e.textContent=="string")return e.textContent;for(e=e.firstChild;e;e=e.nextSibling)n+=s(e)}else if(i===3||i===4)return e.nodeValue}else for(;t=e[r];r++)n+=s(t);return n},o=nt.isXML=function(e){var t=e&&(e.ownerDocument||e).documentElement;return t?t.nodeName!=="HTML":!1},u=nt.contains=y.contains?function(e,t){var n=e.nodeType===9?e.documentElement:e,r=t&&t.parentNode;return e===r||!!(r&&r.nodeType===1&&n.contains&&n.contains(r))}:y.compareDocumentPosition?function(e,t){return t&&!!(e.compareDocumentPosition(t)&16)}:function(e,t){while(t=t.parentNode)if(t===e)return!0;return!1},nt.attr=function(e,t){var n,r=o(e);return r||(t=t.toLowerCase()),(n=i.attrHandle[t])?n(e):r||Y?e.getAttribute(t):(n=e.getAttributeNode(t),n?typeof e[t]=="boolean"?e[t]?t:null:n.specified?n.value:null:null)},i=nt.selectors={cacheLength:50,createPseudo:N,match:J,attrHandle:G?{}:{href:function(e){return e.getAttribute("href",2)},type:function(e){return e.getAttribute("type")}},find:{ID:r?function(e,t,n){if(typeof t.getElementById!==p&&!n){var r=t.getElementById(e);return r&&r.parentNode?[r]:[]}}:function(e,n,r){if(typeof n.getElementById!==p&&!r){var i=n.getElementById(e);return i?i.id===e||typeof i.getAttributeNode!==p&&i.getAttributeNode("id").value===e?[i]:t:[]}},TAG:Q?function(e,t){if(typeof t.getElementsByTagName!==p)return t.getElementsByTagName(e)}:function(e,t){var n=t.getElementsByTagName(e);if(e==="*"){var r,i=[],s=0;for(;r=n[s];s++)r.nodeType===1&&i.push(r);return i}return n},NAME:et&&function(e,t){if(typeof t.getElementsByName!==p)return t.getElementsByName(name)},CLASS:Z&&function(e,t,n){if(typeof t.getElementsByClassName!==p&&!n)return t.getElementsByClassName(e)}},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(e){return e[1]=e[1].replace($,""),e[3]=(e[4]||e[5]||"").replace($,""),e[2]==="~="&&(e[3]=" "+e[3]+" "),e.slice(0,4)},CHILD:function(e){return e[1]=e[1].toLowerCase(),e[1]==="nth"?(e[2]||nt.error(e[0]),e[3]=+(e[3]?e[4]+(e[5]||1):2*(e[2]==="even"||e[2]==="odd")),e[4]=+(e[6]+e[7]||e[2]==="odd")):e[2]&&nt.error(e[0]),e},PSEUDO:function(e){var t,n;if(J.CHILD.test(e[0]))return null;if(e[3])e[2]=e[3];else if(t=e[4])q.test(t)&&(n=ut(t,!0))&&(n=t.indexOf(")",t.length-n)-t.length)&&(t=t.slice(0,n),e[0]=e[0].slice(0,n)),e[2]=t;return e.slice(0,3)}},filter:{ID:r?function(e){return e=e.replace($,""),function(t){return t.getAttribute("id")===e}}:function(e){return e=e.replace($,""),function(t){var n=typeof t.getAttributeNode!==p&&t.getAttributeNode("id");return n&&n.value===e}},TAG:function(e){return e==="*"?function(){return!0}:(e=e.replace($,"").toLowerCase(),function(t){return t.nodeName&&t.nodeName.toLowerCase()===e})},CLASS:function(e){var t=k[d][e+" "];return t||(t=new RegExp("(^|"+O+")"+e+"("+O+"|$)"))&&k(e,function(e){return t.test(e.className||typeof e.getAttribute!==p&&e.getAttribute("class")||"")})},ATTR:function(e,t,n){return function(r,i){var s=nt.attr(r,e);return s==null?t==="!=":t?(s+="",t==="="?s===n:t==="!="?s!==n:t==="^="?n&&s.indexOf(n)===0:t==="*="?n&&s.indexOf(n)>-1:t==="$="?n&&s.substr(s.length-n.length)===n:t==="~="?(" "+s+" ").indexOf(n)>-1:t==="|="?s===n||s.substr(0,n.length+1)===n+"-":!1):!0}},CHILD:function(e,t,n,r){return e==="nth"?function(e){var t,i,s=e.parentNode;if(n===1&&r===0)return!0;if(s){i=0;for(t=s.firstChild;t;t=t.nextSibling)if(t.nodeType===1){i++;if(e===t)break}}return i-=r,i===n||i%n===0&&i/n>=0}:function(t){var n=t;switch(e){case"only":case"first":while(n=n.previousSibling)if(n.nodeType===1)return!1;if(e==="first")return!0;n=t;case"last":while(n=n.nextSibling)if(n.nodeType===1)return!1;return!0}}},PSEUDO:function(e,t){var n,r=i.pseudos[e]||i.setFilters[e.toLowerCase()]||nt.error("unsupported pseudo: "+e);return r[d]?r(t):r.length>1?(n=[e,e,"",t],i.setFilters.hasOwnProperty(e.toLowerCase())?N(function(e,n){var i,s=r(e,t),o=s.length;while(o--)i=T.call(e,s[o]),e[i]=!(n[i]=s[o])}):function(e){return r(e,0,n)}):r}},pseudos:{not:N(function(e){var t=[],n=[],r=a(e.replace(j,"$1"));return r[d]?N(function(e,t,n,i){var s,o=r(e,null,i,[]),u=e.length;while(u--)if(s=o[u])e[u]=!(t[u]=s)}):function(e,i,s){return t[0]=e,r(t,null,s,n),!n.pop()}}),has:N(function(e){return function(t){return nt(e,t).length>0}}),contains:N(function(e){return function(t){return(t.textContent||t.innerText||s(t)).indexOf(e)>-1}}),enabled:function(e){return e.disabled===!1},disabled:function(e){return e.disabled===!0},checked:function(e){var t=e.nodeName.toLowerCase();return t==="input"&&!!e.checked||t==="option"&&!!e.selected},selected:function(e){return e.parentNode&&e.parentNode.selectedIndex,e.selected===!0},parent:function(e){return!i.pseudos.empty(e)},empty:function(e){var t;e=e.firstChild;while(e){if(e.nodeName>"@"||(t=e.nodeType)===3||t===4)return!1;e=e.nextSibling}return!0},header:function(e){return X.test(e.nodeName)},text:function(e){var t,n;return e.nodeName.toLowerCase()==="input"&&(t=e.type)==="text"&&((n=e.getAttribute("type"))==null||n.toLowerCase()===t)},radio:rt("radio"),checkbox:rt("checkbox"),file:rt("file"),password:rt("password"),image:rt("image"),submit:it("submit"),reset:it("reset"),button:function(e){var t=e.nodeName.toLowerCase();return t==="input"&&e.type==="button"||t==="button"},input:function(e){return V.test(e.nodeName)},focus:function(e){var t=e.ownerDocument;return e===t.activeElement&&(!t.hasFocus||t.hasFocus())&&!!(e.type||e.href||~e.tabIndex)},active:function(e){return e===e.ownerDocument.activeElement},first:st(function(){return[0]}),last:st(function(e,t){return[t-1]}),eq:st(function(e,t,n){return[n<0?n+t:n]}),even:st(function(e,t){for(var n=0;n<t;n+=2)e.push(n);return e}),odd:st(function(e,t){for(var n=1;n<t;n+=2)e.push(n);return e}),lt:st(function(e,t,n){for(var r=n<0?n+t:n;--r>=0;)e.push(r);return e}),gt:st(function(e,t,n){for(var r=n<0?n+t:n;++r<t;)e.push(r);return e})}},f=y.compareDocumentPosition?function(e,t){return e===t?(l=!0,0):(!e.compareDocumentPosition||!t.compareDocumentPosition?e.compareDocumentPosition:e.compareDocumentPosition(t)&4)?-1:1}:function(e,t){if(e===t)return l=!0,0;if(e.sourceIndex&&t.sourceIndex)return e.sourceIndex-t.sourceIndex;var n,r,i=[],s=[],o=e.parentNode,u=t.parentNode,a=o;if(o===u)return ot(e,t);if(!o)return-1;if(!u)return 1;while(a)i.unshift(a),a=a.parentNode;a=u;while(a)s.unshift(a),a=a.parentNode;n=i.length,r=s.length;for(var f=0;f<n&&f<r;f++)if(i[f]!==s[f])return ot(i[f],s[f]);return f===n?ot(e,s[f],-1):ot(i[f],t,1)},[0,0].sort(f),h=!l,nt.uniqueSort=function(e){var t,n=[],r=1,i=0;l=h,e.sort(f);if(l){for(;t=e[r];r++)t===e[r-1]&&(i=n.push(r));while(i--)e.splice(n[i],1)}return e},nt.error=function(e){throw new Error("Syntax error, unrecognized expression: "+e)},a=nt.compile=function(e,t){var n,r=[],i=[],s=A[d][e+" "];if(!s){t||(t=ut(e)),n=t.length;while(n--)s=ht(t[n]),s[d]?r.push(s):i.push(s);s=A(e,pt(i,r))}return s},g.querySelectorAll&&function(){var e,t=vt,n=/'|\\/g,r=/\=[\x20\t\r\n\f]*([^'"\]]*)[\x20\t\r\n\f]*\]/g,i=[":focus"],s=[":active"],u=y.matchesSelector||y.mozMatchesSelector||y.webkitMatchesSelector||y.oMatchesSelector||y.msMatchesSelector;K(function(e){e.innerHTML="<select><option selected=''></option></select>",e.querySelectorAll("[selected]").length||i.push("\\["+O+"*(?:checked|disabled|ismap|multiple|readonly|selected|value)"),e.querySelectorAll(":checked").length||i.push(":checked")}),K(function(e){e.innerHTML="<p test=''></p>",e.querySelectorAll("[test^='']").length&&i.push("[*^$]="+O+"*(?:\"\"|'')"),e.innerHTML="<input type='hidden'/>",e.querySelectorAll(":enabled").length||i.push(":enabled",":disabled")}),i=new RegExp(i.join("|")),vt=function(e,r,s,o,u){if(!o&&!u&&!i.test(e)){var a,f,l=!0,c=d,h=r,p=r.nodeType===9&&e;if(r.nodeType===1&&r.nodeName.toLowerCase()!=="object"){a=ut(e),(l=r.getAttribute("id"))?c=l.replace(n,"\\$&"):r.setAttribute("id",c),c="[id='"+c+"'] ",f=a.length;while(f--)a[f]=c+a[f].join("");h=z.test(e)&&r.parentNode||r,p=a.join(",")}if(p)try{return S.apply(s,x.call(h.querySelectorAll(p),0)),s}catch(v){}finally{l||r.removeAttribute("id")}}return t(e,r,s,o,u)},u&&(K(function(t){e=u.call(t,"div");try{u.call(t,"[test!='']:sizzle"),s.push("!=",H)}catch(n){}}),s=new RegExp(s.join("|")),nt.matchesSelector=function(t,n){n=n.replace(r,"='$1']");if(!o(t)&&!s.test(n)&&!i.test(n))try{var a=u.call(t,n);if(a||e||t.document&&t.document.nodeType!==11)return a}catch(f){}return nt(n,null,null,[t]).length>0})}(),i.pseudos.nth=i.pseudos.eq,i.filters=mt.prototype=i.pseudos,i.setFilters=new mt,nt.attr=v.attr,v.find=nt,v.expr=nt.selectors,v.expr[":"]=v.expr.pseudos,v.unique=nt.uniqueSort,v.text=nt.getText,v.isXMLDoc=nt.isXML,v.contains=nt.contains}(e);var nt=/Until$/,rt=/^(?:parents|prev(?:Until|All))/,it=/^.[^:#\[\.,]*$/,st=v.expr.match.needsContext,ot={children:!0,contents:!0,next:!0,prev:!0};v.fn.extend({find:function(e){var t,n,r,i,s,o,u=this;if(typeof e!="string")return v(e).filter(function(){for(t=0,n=u.length;t<n;t++)if(v.contains(u[t],this))return!0});o=this.pushStack("","find",e);for(t=0,n=this.length;t<n;t++){r=o.length,v.find(e,this[t],o);if(t>0)for(i=r;i<o.length;i++)for(s=0;s<r;s++)if(o[s]===o[i]){o.splice(i--,1);break}}return o},has:function(e){var t,n=v(e,this),r=n.length;return this.filter(function(){for(t=0;t<r;t++)if(v.contains(this,n[t]))return!0})},not:function(e){return this.pushStack(ft(this,e,!1),"not",e)},filter:function(e){return this.pushStack(ft(this,e,!0),"filter",e)},is:function(e){return!!e&&(typeof e=="string"?st.test(e)?v(e,this.context).index(this[0])>=0:v.filter(e,this).length>0:this.filter(e).length>0)},closest:function(e,t){var n,r=0,i=this.length,s=[],o=st.test(e)||typeof e!="string"?v(e,t||this.context):0;for(;r<i;r++){n=this[r];while(n&&n.ownerDocument&&n!==t&&n.nodeType!==11){if(o?o.index(n)>-1:v.find.matchesSelector(n,e)){s.push(n);break}n=n.parentNode}}return s=s.length>1?v.unique(s):s,this.pushStack(s,"closest",e)},index:function(e){return e?typeof e=="string"?v.inArray(this[0],v(e)):v.inArray(e.jquery?e[0]:e,this):this[0]&&this[0].parentNode?this.prevAll().length:-1},add:function(e,t){var n=typeof e=="string"?v(e,t):v.makeArray(e&&e.nodeType?[e]:e),r=v.merge(this.get(),n);return this.pushStack(ut(n[0])||ut(r[0])?r:v.unique(r))},addBack:function(e){return this.add(e==null?this.prevObject:this.prevObject.filter(e))}}),v.fn.andSelf=v.fn.addBack,v.each({parent:function(e){var t=e.parentNode;return t&&t.nodeType!==11?t:null},parents:function(e){return v.dir(e,"parentNode")},parentsUntil:function(e,t,n){return v.dir(e,"parentNode",n)},next:function(e){return at(e,"nextSibling")},prev:function(e){return at(e,"previousSibling")},nextAll:function(e){return v.dir(e,"nextSibling")},prevAll:function(e){return v.dir(e,"previousSibling")},nextUntil:function(e,t,n){return v.dir(e,"nextSibling",n)},prevUntil:function(e,t,n){return v.dir(e,"previousSibling",n)},siblings:function(e){return v.sibling((e.parentNode||{}).firstChild,e)},children:function(e){return v.sibling(e.firstChild)},contents:function(e){return v.nodeName(e,"iframe")?e.contentDocument||e.contentWindow.document:v.merge([],e.childNodes)}},function(e,t){v.fn[e]=function(n,r){var i=v.map(this,t,n);return nt.test(e)||(r=n),r&&typeof r=="string"&&(i=v.filter(r,i)),i=this.length>1&&!ot[e]?v.unique(i):i,this.length>1&&rt.test(e)&&(i=i.reverse()),this.pushStack(i,e,l.call(arguments).join(","))}}),v.extend({filter:function(e,t,n){return n&&(e=":not("+e+")"),t.length===1?v.find.matchesSelector(t[0],e)?[t[0]]:[]:v.find.matches(e,t)},dir:function(e,n,r){var i=[],s=e[n];while(s&&s.nodeType!==9&&(r===t||s.nodeType!==1||!v(s).is(r)))s.nodeType===1&&i.push(s),s=s[n];return i},sibling:function(e,t){var n=[];for(;e;e=e.nextSibling)e.nodeType===1&&e!==t&&n.push(e);return n}});var ct="abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",ht=/ jQuery\d+="(?:null|\d+)"/g,pt=/^\s+/,dt=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,vt=/<([\w:]+)/,mt=/<tbody/i,gt=/<|&#?\w+;/,yt=/<(?:script|style|link)/i,bt=/<(?:script|object|embed|option|style)/i,wt=new RegExp("<(?:"+ct+")[\\s/>]","i"),Et=/^(?:checkbox|radio)$/,St=/checked\s*(?:[^=]|=\s*.checked.)/i,xt=/\/(java|ecma)script/i,Tt=/^\s*<!(?:\[CDATA\[|\-\-)|[\]\-]{2}>\s*$/g,Nt={option:[1,"<select multiple='multiple'>","</select>"],legend:[1,"<fieldset>","</fieldset>"],thead:[1,"<table>","</table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],col:[2,"<table><tbody></tbody><colgroup>","</colgroup></table>"],area:[1,"<map>","</map>"],_default:[0,"",""]},Ct=lt(i),kt=Ct.appendChild(i.createElement("div"));Nt.optgroup=Nt.option,Nt.tbody=Nt.tfoot=Nt.colgroup=Nt.caption=Nt.thead,Nt.th=Nt.td,v.support.htmlSerialize||(Nt._default=[1,"X<div>","</div>"]),v.fn.extend({text:function(e){return v.access(this,function(e){return e===t?v.text(this):this.empty().append((this[0]&&this[0].ownerDocument||i).createTextNode(e))},null,e,arguments.length)},wrapAll:function(e){if(v.isFunction(e))return this.each(function(t){v(this).wrapAll(e.call(this,t))});if(this[0]){var t=v(e,this[0].ownerDocument).eq(0).clone(!0);this[0].parentNode&&t.insertBefore(this[0]),t.map(function(){var e=this;while(e.firstChild&&e.firstChild.nodeType===1)e=e.firstChild;return e}).append(this)}return this},wrapInner:function(e){return v.isFunction(e)?this.each(function(t){v(this).wrapInner(e.call(this,t))}):this.each(function(){var t=v(this),n=t.contents();n.length?n.wrapAll(e):t.append(e)})},wrap:function(e){var t=v.isFunction(e);return this.each(function(n){v(this).wrapAll(t?e.call(this,n):e)})},unwrap:function(){return this.parent().each(function(){v.nodeName(this,"body")||v(this).replaceWith(this.childNodes)}).end()},append:function(){return this.domManip(arguments,!0,function(e){(this.nodeType===1||this.nodeType===11)&&this.appendChild(e)})},prepend:function(){return this.domManip(arguments,!0,function(e){(this.nodeType===1||this.nodeType===11)&&this.insertBefore(e,this.firstChild)})},before:function(){if(!ut(this[0]))return this.domManip(arguments,!1,function(e){this.parentNode.insertBefore(e,this)});if(arguments.length){var e=v.clean(arguments);return this.pushStack(v.merge(e,this),"before",this.selector)}},after:function(){if(!ut(this[0]))return this.domManip(arguments,!1,function(e){this.parentNode.insertBefore(e,this.nextSibling)});if(arguments.length){var e=v.clean(arguments);return this.pushStack(v.merge(this,e),"after",this.selector)}},remove:function(e,t){var n,r=0;for(;(n=this[r])!=null;r++)if(!e||v.filter(e,[n]).length)!t&&n.nodeType===1&&(v.cleanData(n.getElementsByTagName("*")),v.cleanData([n])),n.parentNode&&n.parentNode.removeChild(n);return this},empty:function(){var e,t=0;for(;(e=this[t])!=null;t++){e.nodeType===1&&v.cleanData(e.getElementsByTagName("*"));while(e.firstChild)e.removeChild(e.firstChild)}return this},clone:function(e,t){return e=e==null?!1:e,t=t==null?e:t,this.map(function(){return v.clone(this,e,t)})},html:function(e){return v.access(this,function(e){var n=this[0]||{},r=0,i=this.length;if(e===t)return n.nodeType===1?n.innerHTML.replace(ht,""):t;if(typeof e=="string"&&!yt.test(e)&&(v.support.htmlSerialize||!wt.test(e))&&(v.support.leadingWhitespace||!pt.test(e))&&!Nt[(vt.exec(e)||["",""])[1].toLowerCase()]){e=e.replace(dt,"<$1></$2>");try{for(;r<i;r++)n=this[r]||{},n.nodeType===1&&(v.cleanData(n.getElementsByTagName("*")),n.innerHTML=e);n=0}catch(s){}}n&&this.empty().append(e)},null,e,arguments.length)},replaceWith:function(e){return ut(this[0])?this.length?this.pushStack(v(v.isFunction(e)?e():e),"replaceWith",e):this:v.isFunction(e)?this.each(function(t){var n=v(this),r=n.html();n.replaceWith(e.call(this,t,r))}):(typeof e!="string"&&(e=v(e).detach()),this.each(function(){var t=this.nextSibling,n=this.parentNode;v(this).remove(),t?v(t).before(e):v(n).append(e)}))},detach:function(e){return this.remove(e,!0)},domManip:function(e,n,r){e=[].concat.apply([],e);var i,s,o,u,a=0,f=e[0],l=[],c=this.length;if(!v.support.checkClone&&c>1&&typeof f=="string"&&St.test(f))return this.each(function(){v(this).domManip(e,n,r)});if(v.isFunction(f))return this.each(function(i){var s=v(this);e[0]=f.call(this,i,n?s.html():t),s.domManip(e,n,r)});if(this[0]){i=v.buildFragment(e,this,l),o=i.fragment,s=o.firstChild,o.childNodes.length===1&&(o=s);if(s){n=n&&v.nodeName(s,"tr");for(u=i.cacheable||c-1;a<c;a++)r.call(n&&v.nodeName(this[a],"table")?Lt(this[a],"tbody"):this[a],a===u?o:v.clone(o,!0,!0))}o=s=null,l.length&&v.each(l,function(e,t){t.src?v.ajax?v.ajax({url:t.src,type:"GET",dataType:"script",async:!1,global:!1,"throws":!0}):v.error("no ajax"):v.globalEval((t.text||t.textContent||t.innerHTML||"").replace(Tt,"")),t.parentNode&&t.parentNode.removeChild(t)})}return this}}),v.buildFragment=function(e,n,r){var s,o,u,a=e[0];return n=n||i,n=!n.nodeType&&n[0]||n,n=n.ownerDocument||n,e.length===1&&typeof a=="string"&&a.length<512&&n===i&&a.charAt(0)==="<"&&!bt.test(a)&&(v.support.checkClone||!St.test(a))&&(v.support.html5Clone||!wt.test(a))&&(o=!0,s=v.fragments[a],u=s!==t),s||(s=n.createDocumentFragment(),v.clean(e,n,s,r),o&&(v.fragments[a]=u&&s)),{fragment:s,cacheable:o}},v.fragments={},v.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(e,t){v.fn[e]=function(n){var r,i=0,s=[],o=v(n),u=o.length,a=this.length===1&&this[0].parentNode;if((a==null||a&&a.nodeType===11&&a.childNodes.length===1)&&u===1)return o[t](this[0]),this;for(;i<u;i++)r=(i>0?this.clone(!0):this).get(),v(o[i])[t](r),s=s.concat(r);return this.pushStack(s,e,o.selector)}}),v.extend({clone:function(e,t,n){var r,i,s,o;v.support.html5Clone||v.isXMLDoc(e)||!wt.test("<"+e.nodeName+">")?o=e.cloneNode(!0):(kt.innerHTML=e.outerHTML,kt.removeChild(o=kt.firstChild));if((!v.support.noCloneEvent||!v.support.noCloneChecked)&&(e.nodeType===1||e.nodeType===11)&&!v.isXMLDoc(e)){Ot(e,o),r=Mt(e),i=Mt(o);for(s=0;r[s];++s)i[s]&&Ot(r[s],i[s])}if(t){At(e,o);if(n){r=Mt(e),i=Mt(o);for(s=0;r[s];++s)At(r[s],i[s])}}return r=i=null,o},clean:function(e,t,n,r){var s,o,u,a,f,l,c,h,p,d,m,g,y=t===i&&Ct,b=[];if(!t||typeof t.createDocumentFragment=="undefined")t=i;for(s=0;(u=e[s])!=null;s++){typeof u=="number"&&(u+="");if(!u)continue;if(typeof u=="string")if(!gt.test(u))u=t.createTextNode(u);else{y=y||lt(t),c=t.createElement("div"),y.appendChild(c),u=u.replace(dt,"<$1></$2>"),a=(vt.exec(u)||["",""])[1].toLowerCase(),f=Nt[a]||Nt._default,l=f[0],c.innerHTML=f[1]+u+f[2];while(l--)c=c.lastChild;if(!v.support.tbody){h=mt.test(u),p=a==="table"&&!h?c.firstChild&&c.firstChild.childNodes:f[1]==="<table>"&&!h?c.childNodes:[];for(o=p.length-1;o>=0;--o)v.nodeName(p[o],"tbody")&&!p[o].childNodes.length&&p[o].parentNode.removeChild(p[o])}!v.support.leadingWhitespace&&pt.test(u)&&c.insertBefore(t.createTextNode(pt.exec(u)[0]),c.firstChild),u=c.childNodes,c.parentNode.removeChild(c)}u.nodeType?b.push(u):v.merge(b,u)}c&&(u=c=y=null);if(!v.support.appendChecked)for(s=0;(u=b[s])!=null;s++)v.nodeName(u,"input")?_t(u):typeof u.getElementsByTagName!="undefined"&&v.grep(u.getElementsByTagName("input"),_t);if(n){m=function(e){if(!e.type||xt.test(e.type))return r?r.push(e.parentNode?e.parentNode.removeChild(e):e):n.appendChild(e)};for(s=0;(u=b[s])!=null;s++)if(!v.nodeName(u,"script")||!m(u))n.appendChild(u),typeof u.getElementsByTagName!="undefined"&&(g=v.grep(v.merge([],u.getElementsByTagName("script")),m),b.splice.apply(b,[s+1,0].concat(g)),s+=g.length)}return b},cleanData:function(e,t){var n,r,i,s,o=0,u=v.expando,a=v.cache,f=v.support.deleteExpando,l=v.event.special;for(;(i=e[o])!=null;o++)if(t||v.acceptData(i)){r=i[u],n=r&&a[r];if(n){if(n.events)for(s in n.events)l[s]?v.event.remove(i,s):v.removeEvent(i,s,n.handle);a[r]&&(delete a[r],f?delete i[u]:i.removeAttribute?i.removeAttribute(u):i[u]=null,v.deletedIds.push(r))}}}}),function(){var e,t;v.uaMatch=function(e){e=e.toLowerCase();var t=/(chrome)[ \/]([\w.]+)/.exec(e)||/(webkit)[ \/]([\w.]+)/.exec(e)||/(opera)(?:.*version|)[ \/]([\w.]+)/.exec(e)||/(msie) ([\w.]+)/.exec(e)||e.indexOf("compatible")<0&&/(mozilla)(?:.*? rv:([\w.]+)|)/.exec(e)||[];return{browser:t[1]||"",version:t[2]||"0"}},e=v.uaMatch(o.userAgent),t={},e.browser&&(t[e.browser]=!0,t.version=e.version),t.chrome?t.webkit=!0:t.webkit&&(t.safari=!0),v.browser=t,v.sub=function(){function e(t,n){return new e.fn.init(t,n)}v.extend(!0,e,this),e.superclass=this,e.fn=e.prototype=this(),e.fn.constructor=e,e.sub=this.sub,e.fn.init=function(r,i){return i&&i instanceof v&&!(i instanceof e)&&(i=e(i)),v.fn.init.call(this,r,i,t)},e.fn.init.prototype=e.fn;var t=e(i);return e}}();var Dt,Pt,Ht,Bt=/alpha\([^)]*\)/i,jt=/opacity=([^)]*)/,Ft=/^(top|right|bottom|left)$/,It=/^(none|table(?!-c[ea]).+)/,qt=/^margin/,Rt=new RegExp("^("+m+")(.*)$","i"),Ut=new RegExp("^("+m+")(?!px)[a-z%]+$","i"),zt=new RegExp("^([-+])=("+m+")","i"),Wt={BODY:"block"},Xt={position:"absolute",visibility:"hidden",display:"block"},Vt={letterSpacing:0,fontWeight:400},$t=["Top","Right","Bottom","Left"],Jt=["Webkit","O","Moz","ms"],Kt=v.fn.toggle;v.fn.extend({css:function(e,n){return v.access(this,function(e,n,r){return r!==t?v.style(e,n,r):v.css(e,n)},e,n,arguments.length>1)},show:function(){return Yt(this,!0)},hide:function(){return Yt(this)},toggle:function(e,t){var n=typeof e=="boolean";return v.isFunction(e)&&v.isFunction(t)?Kt.apply(this,arguments):this.each(function(){(n?e:Gt(this))?v(this).show():v(this).hide()})}}),v.extend({cssHooks:{opacity:{get:function(e,t){if(t){var n=Dt(e,"opacity");return n===""?"1":n}}}},cssNumber:{fillOpacity:!0,fontWeight:!0,lineHeight:!0,opacity:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{"float":v.support.cssFloat?"cssFloat":"styleFloat"},style:function(e,n,r,i){if(!e||e.nodeType===3||e.nodeType===8||!e.style)return;var s,o,u,a=v.camelCase(n),f=e.style;n=v.cssProps[a]||(v.cssProps[a]=Qt(f,a)),u=v.cssHooks[n]||v.cssHooks[a];if(r===t)return u&&"get"in u&&(s=u.get(e,!1,i))!==t?s:f[n];o=typeof r,o==="string"&&(s=zt.exec(r))&&(r=(s[1]+1)*s[2]+parseFloat(v.css(e,n)),o="number");if(r==null||o==="number"&&isNaN(r))return;o==="number"&&!v.cssNumber[a]&&(r+="px");if(!u||!("set"in u)||(r=u.set(e,r,i))!==t)try{f[n]=r}catch(l){}},css:function(e,n,r,i){var s,o,u,a=v.camelCase(n);return n=v.cssProps[a]||(v.cssProps[a]=Qt(e.style,a)),u=v.cssHooks[n]||v.cssHooks[a],u&&"get"in u&&(s=u.get(e,!0,i)),s===t&&(s=Dt(e,n)),s==="normal"&&n in Vt&&(s=Vt[n]),r||i!==t?(o=parseFloat(s),r||v.isNumeric(o)?o||0:s):s},swap:function(e,t,n){var r,i,s={};for(i in t)s[i]=e.style[i],e.style[i]=t[i];r=n.call(e);for(i in t)e.style[i]=s[i];return r}}),e.getComputedStyle?Dt=function(t,n){var r,i,s,o,u=e.getComputedStyle(t,null),a=t.style;return u&&(r=u.getPropertyValue(n)||u[n],r===""&&!v.contains(t.ownerDocument,t)&&(r=v.style(t,n)),Ut.test(r)&&qt.test(n)&&(i=a.width,s=a.minWidth,o=a.maxWidth,a.minWidth=a.maxWidth=a.width=r,r=u.width,a.width=i,a.minWidth=s,a.maxWidth=o)),r}:i.documentElement.currentStyle&&(Dt=function(e,t){var n,r,i=e.currentStyle&&e.currentStyle[t],s=e.style;return i==null&&s&&s[t]&&(i=s[t]),Ut.test(i)&&!Ft.test(t)&&(n=s.left,r=e.runtimeStyle&&e.runtimeStyle.left,r&&(e.runtimeStyle.left=e.currentStyle.left),s.left=t==="fontSize"?"1em":i,i=s.pixelLeft+"px",s.left=n,r&&(e.runtimeStyle.left=r)),i===""?"auto":i}),v.each(["height","width"],function(e,t){v.cssHooks[t]={get:function(e,n,r){if(n)return e.offsetWidth===0&&It.test(Dt(e,"display"))?v.swap(e,Xt,function(){return tn(e,t,r)}):tn(e,t,r)},set:function(e,n,r){return Zt(e,n,r?en(e,t,r,v.support.boxSizing&&v.css(e,"boxSizing")==="border-box"):0)}}}),v.support.opacity||(v.cssHooks.opacity={get:function(e,t){return jt.test((t&&e.currentStyle?e.currentStyle.filter:e.style.filter)||"")?.01*parseFloat(RegExp.$1)+"":t?"1":""},set:function(e,t){var n=e.style,r=e.currentStyle,i=v.isNumeric(t)?"alpha(opacity="+t*100+")":"",s=r&&r.filter||n.filter||"";n.zoom=1;if(t>=1&&v.trim(s.replace(Bt,""))===""&&n.removeAttribute){n.removeAttribute("filter");if(r&&!r.filter)return}n.filter=Bt.test(s)?s.replace(Bt,i):s+" "+i}}),v(function(){v.support.reliableMarginRight||(v.cssHooks.marginRight={get:function(e,t){return v.swap(e,{display:"inline-block"},function(){if(t)return Dt(e,"marginRight")})}}),!v.support.pixelPosition&&v.fn.position&&v.each(["top","left"],function(e,t){v.cssHooks[t]={get:function(e,n){if(n){var r=Dt(e,t);return Ut.test(r)?v(e).position()[t]+"px":r}}}})}),v.expr&&v.expr.filters&&(v.expr.filters.hidden=function(e){return e.offsetWidth===0&&e.offsetHeight===0||!v.support.reliableHiddenOffsets&&(e.style&&e.style.display||Dt(e,"display"))==="none"},v.expr.filters.visible=function(e){return!v.expr.filters.hidden(e)}),v.each({margin:"",padding:"",border:"Width"},function(e,t){v.cssHooks[e+t]={expand:function(n){var r,i=typeof n=="string"?n.split(" "):[n],s={};for(r=0;r<4;r++)s[e+$t[r]+t]=i[r]||i[r-2]||i[0];return s}},qt.test(e)||(v.cssHooks[e+t].set=Zt)});var rn=/%20/g,sn=/\[\]$/,on=/\r?\n/g,un=/^(?:color|date|datetime|datetime-local|email|hidden|month|number|password|range|search|tel|text|time|url|week)$/i,an=/^(?:select|textarea)/i;v.fn.extend({serialize:function(){return v.param(this.serializeArray())},serializeArray:function(){return this.map(function(){return this.elements?v.makeArray(this.elements):this}).filter(function(){return this.name&&!this.disabled&&(this.checked||an.test(this.nodeName)||un.test(this.type))}).map(function(e,t){var n=v(this).val();return n==null?null:v.isArray(n)?v.map(n,function(e,n){return{name:t.name,value:e.replace(on,"\r\n")}}):{name:t.name,value:n.replace(on,"\r\n")}}).get()}}),v.param=function(e,n){var r,i=[],s=function(e,t){t=v.isFunction(t)?t():t==null?"":t,i[i.length]=encodeURIComponent(e)+"="+encodeURIComponent(t)};n===t&&(n=v.ajaxSettings&&v.ajaxSettings.traditional);if(v.isArray(e)||e.jquery&&!v.isPlainObject(e))v.each(e,function(){s(this.name,this.value)});else for(r in e)fn(r,e[r],n,s);return i.join("&").replace(rn,"+")};var ln,cn,hn=/#.*$/,pn=/^(.*?):[ \t]*([^\r\n]*)\r?$/mg,dn=/^(?:about|app|app\-storage|.+\-extension|file|res|widget):$/,vn=/^(?:GET|HEAD)$/,mn=/^\/\//,gn=/\?/,yn=/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi,bn=/([?&])_=[^&]*/,wn=/^([\w\+\.\-]+:)(?:\/\/([^\/?#:]*)(?::(\d+)|)|)/,En=v.fn.load,Sn={},xn={},Tn=["*/"]+["*"];try{cn=s.href}catch(Nn){cn=i.createElement("a"),cn.href="",cn=cn.href}ln=wn.exec(cn.toLowerCase())||[],v.fn.load=function(e,n,r){if(typeof e!="string"&&En)return En.apply(this,arguments);if(!this.length)return this;var i,s,o,u=this,a=e.indexOf(" ");return a>=0&&(i=e.slice(a,e.length),e=e.slice(0,a)),v.isFunction(n)?(r=n,n=t):n&&typeof n=="object"&&(s="POST"),v.ajax({url:e,type:s,dataType:"html",data:n,complete:function(e,t){r&&u.each(r,o||[e.responseText,t,e])}}).done(function(e){o=arguments,u.html(i?v("<div>").append(e.replace(yn,"")).find(i):e)}),this},v.each("ajaxStart ajaxStop ajaxComplete ajaxError ajaxSuccess ajaxSend".split(" "),function(e,t){v.fn[t]=function(e){return this.on(t,e)}}),v.each(["get","post"],function(e,n){v[n]=function(e,r,i,s){return v.isFunction(r)&&(s=s||i,i=r,r=t),v.ajax({type:n,url:e,data:r,success:i,dataType:s})}}),v.extend({getScript:function(e,n){return v.get(e,t,n,"script")},getJSON:function(e,t,n){return v.get(e,t,n,"json")},ajaxSetup:function(e,t){return t?Ln(e,v.ajaxSettings):(t=e,e=v.ajaxSettings),Ln(e,t),e},ajaxSettings:{url:cn,isLocal:dn.test(ln[1]),global:!0,type:"GET",contentType:"application/x-www-form-urlencoded; charset=UTF-8",processData:!0,async:!0,accepts:{xml:"application/xml, text/xml",html:"text/html",text:"text/plain",json:"application/json, text/javascript","*":Tn},contents:{xml:/xml/,html:/html/,json:/json/},responseFields:{xml:"responseXML",text:"responseText"},converters:{"* text":e.String,"text html":!0,"text json":v.parseJSON,"text xml":v.parseXML},flatOptions:{context:!0,url:!0}},ajaxPrefilter:Cn(Sn),ajaxTransport:Cn(xn),ajax:function(e,n){function T(e,n,s,a){var l,y,b,w,S,T=n;if(E===2)return;E=2,u&&clearTimeout(u),o=t,i=a||"",x.readyState=e>0?4:0,s&&(w=An(c,x,s));if(e>=200&&e<300||e===304)c.ifModified&&(S=x.getResponseHeader("Last-Modified"),S&&(v.lastModified[r]=S),S=x.getResponseHeader("Etag"),S&&(v.etag[r]=S)),e===304?(T="notmodified",l=!0):(l=On(c,w),T=l.state,y=l.data,b=l.error,l=!b);else{b=T;if(!T||e)T="error",e<0&&(e=0)}x.status=e,x.statusText=(n||T)+"",l?d.resolveWith(h,[y,T,x]):d.rejectWith(h,[x,T,b]),x.statusCode(g),g=t,f&&p.trigger("ajax"+(l?"Success":"Error"),[x,c,l?y:b]),m.fireWith(h,[x,T]),f&&(p.trigger("ajaxComplete",[x,c]),--v.active||v.event.trigger("ajaxStop"))}typeof e=="object"&&(n=e,e=t),n=n||{};var r,i,s,o,u,a,f,l,c=v.ajaxSetup({},n),h=c.context||c,p=h!==c&&(h.nodeType||h instanceof v)?v(h):v.event,d=v.Deferred(),m=v.Callbacks("once memory"),g=c.statusCode||{},b={},w={},E=0,S="canceled",x={readyState:0,setRequestHeader:function(e,t){if(!E){var n=e.toLowerCase();e=w[n]=w[n]||e,b[e]=t}return this},getAllResponseHeaders:function(){return E===2?i:null},getResponseHeader:function(e){var n;if(E===2){if(!s){s={};while(n=pn.exec(i))s[n[1].toLowerCase()]=n[2]}n=s[e.toLowerCase()]}return n===t?null:n},overrideMimeType:function(e){return E||(c.mimeType=e),this},abort:function(e){return e=e||S,o&&o.abort(e),T(0,e),this}};d.promise(x),x.success=x.done,x.error=x.fail,x.complete=m.add,x.statusCode=function(e){if(e){var t;if(E<2)for(t in e)g[t]=[g[t],e[t]];else t=e[x.status],x.always(t)}return this},c.url=((e||c.url)+"").replace(hn,"").replace(mn,ln[1]+"//"),c.dataTypes=v.trim(c.dataType||"*").toLowerCase().split(y),c.crossDomain==null&&(a=wn.exec(c.url.toLowerCase()),c.crossDomain=!(!a||a[1]===ln[1]&&a[2]===ln[2]&&(a[3]||(a[1]==="http:"?80:443))==(ln[3]||(ln[1]==="http:"?80:443)))),c.data&&c.processData&&typeof c.data!="string"&&(c.data=v.param(c.data,c.traditional)),kn(Sn,c,n,x);if(E===2)return x;f=c.global,c.type=c.type.toUpperCase(),c.hasContent=!vn.test(c.type),f&&v.active++===0&&v.event.trigger("ajaxStart");if(!c.hasContent){c.data&&(c.url+=(gn.test(c.url)?"&":"?")+c.data,delete c.data),r=c.url;if(c.cache===!1){var N=v.now(),C=c.url.replace(bn,"$1_="+N);c.url=C+(C===c.url?(gn.test(c.url)?"&":"?")+"_="+N:"")}}(c.data&&c.hasContent&&c.contentType!==!1||n.contentType)&&x.setRequestHeader("Content-Type",c.contentType),c.ifModified&&(r=r||c.url,v.lastModified[r]&&x.setRequestHeader("If-Modified-Since",v.lastModified[r]),v.etag[r]&&x.setRequestHeader("If-None-Match",v.etag[r])),x.setRequestHeader("Accept",c.dataTypes[0]&&c.accepts[c.dataTypes[0]]?c.accepts[c.dataTypes[0]]+(c.dataTypes[0]!=="*"?", "+Tn+"; q=0.01":""):c.accepts["*"]);for(l in c.headers)x.setRequestHeader(l,c.headers[l]);if(!c.beforeSend||c.beforeSend.call(h,x,c)!==!1&&E!==2){S="abort";for(l in{success:1,error:1,complete:1})x[l](c[l]);o=kn(xn,c,n,x);if(!o)T(-1,"No Transport");else{x.readyState=1,f&&p.trigger("ajaxSend",[x,c]),c.async&&c.timeout>0&&(u=setTimeout(function(){x.abort("timeout")},c.timeout));try{E=1,o.send(b,T)}catch(k){if(!(E<2))throw k;T(-1,k)}}return x}return x.abort()},active:0,lastModified:{},etag:{}});var Mn=[],_n=/\?/,Dn=/(=)\?(?=&|$)|\?\?/,Pn=v.now();v.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var e=Mn.pop()||v.expando+"_"+Pn++;return this[e]=!0,e}}),v.ajaxPrefilter("json jsonp",function(n,r,i){var s,o,u,a=n.data,f=n.url,l=n.jsonp!==!1,c=l&&Dn.test(f),h=l&&!c&&typeof a=="string"&&!(n.contentType||"").indexOf("application/x-www-form-urlencoded")&&Dn.test(a);if(n.dataTypes[0]==="jsonp"||c||h)return s=n.jsonpCallback=v.isFunction(n.jsonpCallback)?n.jsonpCallback():n.jsonpCallback,o=e[s],c?n.url=f.replace(Dn,"$1"+s):h?n.data=a.replace(Dn,"$1"+s):l&&(n.url+=(_n.test(f)?"&":"?")+n.jsonp+"="+s),n.converters["script json"]=function(){return u||v.error(s+" was not called"),u[0]},n.dataTypes[0]="json",e[s]=function(){u=arguments},i.always(function(){e[s]=o,n[s]&&(n.jsonpCallback=r.jsonpCallback,Mn.push(s)),u&&v.isFunction(o)&&o(u[0]),u=o=t}),"script"}),v.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/javascript|ecmascript/},converters:{"text script":function(e){return v.globalEval(e),e}}}),v.ajaxPrefilter("script",function(e){e.cache===t&&(e.cache=!1),e.crossDomain&&(e.type="GET",e.global=!1)}),v.ajaxTransport("script",function(e){if(e.crossDomain){var n,r=i.head||i.getElementsByTagName("head")[0]||i.documentElement;return{send:function(s,o){n=i.createElement("script"),n.async="async",e.scriptCharset&&(n.charset=e.scriptCharset),n.src=e.url,n.onload=n.onreadystatechange=function(e,i){if(i||!n.readyState||/loaded|complete/.test(n.readyState))n.onload=n.onreadystatechange=null,r&&n.parentNode&&r.removeChild(n),n=t,i||o(200,"success")},r.insertBefore(n,r.firstChild)},abort:function(){n&&n.onload(0,1)}}}});var Hn,Bn=e.ActiveXObject?function(){for(var e in Hn)Hn[e](0,1)}:!1,jn=0;v.ajaxSettings.xhr=e.ActiveXObject?function(){return!this.isLocal&&Fn()||In()}:Fn,function(e){v.extend(v.support,{ajax:!!e,cors:!!e&&"withCredentials"in e})}(v.ajaxSettings.xhr()),v.support.ajax&&v.ajaxTransport(function(n){if(!n.crossDomain||v.support.cors){var r;return{send:function(i,s){var o,u,a=n.xhr();n.username?a.open(n.type,n.url,n.async,n.username,n.password):a.open(n.type,n.url,n.async);if(n.xhrFields)for(u in n.xhrFields)a[u]=n.xhrFields[u];n.mimeType&&a.overrideMimeType&&a.overrideMimeType(n.mimeType),!n.crossDomain&&!i["X-Requested-With"]&&(i["X-Requested-With"]="XMLHttpRequest");try{for(u in i)a.setRequestHeader(u,i[u])}catch(f){}a.send(n.hasContent&&n.data||null),r=function(e,i){var u,f,l,c,h;try{if(r&&(i||a.readyState===4)){r=t,o&&(a.onreadystatechange=v.noop,Bn&&delete Hn[o]);if(i)a.readyState!==4&&a.abort();else{u=a.status,l=a.getAllResponseHeaders(),c={},h=a.responseXML,h&&h.documentElement&&(c.xml=h);try{c.text=a.responseText}catch(p){}try{f=a.statusText}catch(p){f=""}!u&&n.isLocal&&!n.crossDomain?u=c.text?200:404:u===1223&&(u=204)}}}catch(d){i||s(-1,d)}c&&s(u,f,c,l)},n.async?a.readyState===4?setTimeout(r,0):(o=++jn,Bn&&(Hn||(Hn={},v(e).unload(Bn)),Hn[o]=r),a.onreadystatechange=r):r()},abort:function(){r&&r(0,1)}}}});var qn,Rn,Un=/^(?:toggle|show|hide)$/,zn=new RegExp("^(?:([-+])=|)("+m+")([a-z%]*)$","i"),Wn=/queueHooks$/,Xn=[Gn],Vn={"*":[function(e,t){var n,r,i=this.createTween(e,t),s=zn.exec(t),o=i.cur(),u=+o||0,a=1,f=20;if(s){n=+s[2],r=s[3]||(v.cssNumber[e]?"":"px");if(r!=="px"&&u){u=v.css(i.elem,e,!0)||n||1;do a=a||".5",u/=a,v.style(i.elem,e,u+r);while(a!==(a=i.cur()/o)&&a!==1&&--f)}i.unit=r,i.start=u,i.end=s[1]?u+(s[1]+1)*n:n}return i}]};v.Animation=v.extend(Kn,{tweener:function(e,t){v.isFunction(e)?(t=e,e=["*"]):e=e.split(" ");var n,r=0,i=e.length;for(;r<i;r++)n=e[r],Vn[n]=Vn[n]||[],Vn[n].unshift(t)},prefilter:function(e,t){t?Xn.unshift(e):Xn.push(e)}}),v.Tween=Yn,Yn.prototype={constructor:Yn,init:function(e,t,n,r,i,s){this.elem=e,this.prop=n,this.easing=i||"swing",this.options=t,this.start=this.now=this.cur(),this.end=r,this.unit=s||(v.cssNumber[n]?"":"px")},cur:function(){var e=Yn.propHooks[this.prop];return e&&e.get?e.get(this):Yn.propHooks._default.get(this)},run:function(e){var t,n=Yn.propHooks[this.prop];return this.options.duration?this.pos=t=v.easing[this.easing](e,this.options.duration*e,0,1,this.options.duration):this.pos=t=e,this.now=(this.end-this.start)*t+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),n&&n.set?n.set(this):Yn.propHooks._default.set(this),this}},Yn.prototype.init.prototype=Yn.prototype,Yn.propHooks={_default:{get:function(e){var t;return e.elem[e.prop]==null||!!e.elem.style&&e.elem.style[e.prop]!=null?(t=v.css(e.elem,e.prop,!1,""),!t||t==="auto"?0:t):e.elem[e.prop]},set:function(e){v.fx.step[e.prop]?v.fx.step[e.prop](e):e.elem.style&&(e.elem.style[v.cssProps[e.prop]]!=null||v.cssHooks[e.prop])?v.style(e.elem,e.prop,e.now+e.unit):e.elem[e.prop]=e.now}}},Yn.propHooks.scrollTop=Yn.propHooks.scrollLeft={set:function(e){e.elem.nodeType&&e.elem.parentNode&&(e.elem[e.prop]=e.now)}},v.each(["toggle","show","hide"],function(e,t){var n=v.fn[t];v.fn[t]=function(r,i,s){return r==null||typeof r=="boolean"||!e&&v.isFunction(r)&&v.isFunction(i)?n.apply(this,arguments):this.animate(Zn(t,!0),r,i,s)}}),v.fn.extend({fadeTo:function(e,t,n,r){return this.filter(Gt).css("opacity",0).show().end().animate({opacity:t},e,n,r)},animate:function(e,t,n,r){var i=v.isEmptyObject(e),s=v.speed(t,n,r),o=function(){var t=Kn(this,v.extend({},e),s);i&&t.stop(!0)};return i||s.queue===!1?this.each(o):this.queue(s.queue,o)},stop:function(e,n,r){var i=function(e){var t=e.stop;delete e.stop,t(r)};return typeof e!="string"&&(r=n,n=e,e=t),n&&e!==!1&&this.queue(e||"fx",[]),this.each(function(){var t=!0,n=e!=null&&e+"queueHooks",s=v.timers,o=v._data(this);if(n)o[n]&&o[n].stop&&i(o[n]);else for(n in o)o[n]&&o[n].stop&&Wn.test(n)&&i(o[n]);for(n=s.length;n--;)s[n].elem===this&&(e==null||s[n].queue===e)&&(s[n].anim.stop(r),t=!1,s.splice(n,1));(t||!r)&&v.dequeue(this,e)})}}),v.each({slideDown:Zn("show"),slideUp:Zn("hide"),slideToggle:Zn("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(e,t){v.fn[e]=function(e,n,r){return this.animate(t,e,n,r)}}),v.speed=function(e,t,n){var r=e&&typeof e=="object"?v.extend({},e):{complete:n||!n&&t||v.isFunction(e)&&e,duration:e,easing:n&&t||t&&!v.isFunction(t)&&t};r.duration=v.fx.off?0:typeof r.duration=="number"?r.duration:r.duration in v.fx.speeds?v.fx.speeds[r.duration]:v.fx.speeds._default;if(r.queue==null||r.queue===!0)r.queue="fx";return r.old=r.complete,r.complete=function(){v.isFunction(r.old)&&r.old.call(this),r.queue&&v.dequeue(this,r.queue)},r},v.easing={linear:function(e){return e},swing:function(e){return.5-Math.cos(e*Math.PI)/2}},v.timers=[],v.fx=Yn.prototype.init,v.fx.tick=function(){var e,n=v.timers,r=0;qn=v.now();for(;r<n.length;r++)e=n[r],!e()&&n[r]===e&&n.splice(r--,1);n.length||v.fx.stop(),qn=t},v.fx.timer=function(e){e()&&v.timers.push(e)&&!Rn&&(Rn=setInterval(v.fx.tick,v.fx.interval))},v.fx.interval=13,v.fx.stop=function(){clearInterval(Rn),Rn=null},v.fx.speeds={slow:600,fast:200,_default:400},v.fx.step={},v.expr&&v.expr.filters&&(v.expr.filters.animated=function(e){return v.grep(v.timers,function(t){return e===t.elem}).length});var er=/^(?:body|html)$/i;v.fn.offset=function(e){if(arguments.length)return e===t?this:this.each(function(t){v.offset.setOffset(this,e,t)});var n,r,i,s,o,u,a,f={top:0,left:0},l=this[0],c=l&&l.ownerDocument;if(!c)return;return(r=c.body)===l?v.offset.bodyOffset(l):(n=c.documentElement,v.contains(n,l)?(typeof l.getBoundingClientRect!="undefined"&&(f=l.getBoundingClientRect()),i=tr(c),s=n.clientTop||r.clientTop||0,o=n.clientLeft||r.clientLeft||0,u=i.pageYOffset||n.scrollTop,a=i.pageXOffset||n.scrollLeft,{top:f.top+u-s,left:f.left+a-o}):f)},v.offset={bodyOffset:function(e){var t=e.offsetTop,n=e.offsetLeft;return v.support.doesNotIncludeMarginInBodyOffset&&(t+=parseFloat(v.css(e,"marginTop"))||0,n+=parseFloat(v.css(e,"marginLeft"))||0),{top:t,left:n}},setOffset:function(e,t,n){var r=v.css(e,"position");r==="static"&&(e.style.position="relative");var i=v(e),s=i.offset(),o=v.css(e,"top"),u=v.css(e,"left"),a=(r==="absolute"||r==="fixed")&&v.inArray("auto",[o,u])>-1,f={},l={},c,h;a?(l=i.position(),c=l.top,h=l.left):(c=parseFloat(o)||0,h=parseFloat(u)||0),v.isFunction(t)&&(t=t.call(e,n,s)),t.top!=null&&(f.top=t.top-s.top+c),t.left!=null&&(f.left=t.left-s.left+h),"using"in t?t.using.call(e,f):i.css(f)}},v.fn.extend({position:function(){if(!this[0])return;var e=this[0],t=this.offsetParent(),n=this.offset(),r=er.test(t[0].nodeName)?{top:0,left:0}:t.offset();return n.top-=parseFloat(v.css(e,"marginTop"))||0,n.left-=parseFloat(v.css(e,"marginLeft"))||0,r.top+=parseFloat(v.css(t[0],"borderTopWidth"))||0,r.left+=parseFloat(v.css(t[0],"borderLeftWidth"))||0,{top:n.top-r.top,left:n.left-r.left}},offsetParent:function(){return this.map(function(){var e=this.offsetParent||i.body;while(e&&!er.test(e.nodeName)&&v.css(e,"position")==="static")e=e.offsetParent;return e||i.body})}}),v.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(e,n){var r=/Y/.test(n);v.fn[e]=function(i){return v.access(this,function(e,i,s){var o=tr(e);if(s===t)return o?n in o?o[n]:o.document.documentElement[i]:e[i];o?o.scrollTo(r?v(o).scrollLeft():s,r?s:v(o).scrollTop()):e[i]=s},e,i,arguments.length,null)}}),v.each({Height:"height",Width:"width"},function(e,n){v.each({padding:"inner"+e,content:n,"":"outer"+e},function(r,i){v.fn[i]=function(i,s){var o=arguments.length&&(r||typeof i!="boolean"),u=r||(i===!0||s===!0?"margin":"border");return v.access(this,function(n,r,i){var s;return v.isWindow(n)?n.document.documentElement["client"+e]:n.nodeType===9?(s=n.documentElement,Math.max(n.body["scroll"+e],s["scroll"+e],n.body["offset"+e],s["offset"+e],s["client"+e])):i===t?v.css(n,r,i,u):v.style(n,r,i,u)},n,o?i:t,o,null)}})}),e.jQuery=e.$=v,typeof define=="function"&&define.amd&&define.amd.jQuery&&define("jquery",[],function(){return v})})(window);
// addnbsp v0.1

(function($){
    jQuery.fn.addnbsp=function(){
        $(this).html($(this).html().replace(/(\s[А-Яа-яA-Za-z]{1,2})\s+/g,'$1&nbsp;'));
    };
})(jQuery);

// addspace v0.1
function addspace(num){
    return (''+num).replace(/(\d)(?=(\d{3})+$)/g, "$1 ");
};
/* ie console fix v0.1 */
if("undefined"==typeof console)var console={log:function(){},info:function(){},warn:function(){},error:function(a){alert(a)}};

/* jQuery Cookie Plugin v1.4.0 */
(function(c){"function"===typeof define&&define.amd?define(["jquery"],c):c(jQuery)})(function(c){function n(b){b=f.json?JSON.stringify(b):String(b);return f.raw?b:encodeURIComponent(b)}function m(b,e){var a;if(f.raw)a=b;else a:{var d=b;0===d.indexOf('"')&&(d=d.slice(1,-1).replace(/\\"/g,'"').replace(/\\\\/g,"\\"));try{d=decodeURIComponent(d.replace(l," "));a=f.json?JSON.parse(d):d;break a}catch(g){}a=void 0}return c.isFunction(e)?e(a):a}var l=/\+/g,f=c.cookie=function(b,e,a){if(void 0!==e&&!c.isFunction(e)){a=
    c.extend({},f.defaults,a);if("number"===typeof a.expires){var d=a.expires,g=a.expires=new Date;g.setTime(+g+864E5*d)}return document.cookie=[f.raw?b:encodeURIComponent(b),"=",n(e),a.expires?"; expires="+a.expires.toUTCString():"",a.path?"; path="+a.path:"",a.domain?"; domain="+a.domain:"",a.secure?"; secure":""].join("")}a=b?void 0:{};for(var d=document.cookie?document.cookie.split("; "):[],g=0,l=d.length;g<l;g++){var h=d[g].split("="),k;k=h.shift();k=f.raw?k:decodeURIComponent(k);h=h.join("=");if(b&&
    b===k){a=m(h,e);break}b||void 0===(h=m(h))||(a[k]=h)}return a};f.defaults={};c.removeCookie=function(b,e){if(void 0===c.cookie(b))return!1;c.cookie(b,"",c.extend({},e,{expires:-1}));return!c.cookie(b)}});


/* jQuery Easing v1.3 - http://gsgd.co.uk/sandbox/jquery/easing/ */
jQuery.easing.jswing=jQuery.easing.swing;
jQuery.extend(jQuery.easing,{def:"easeOutQuad",swing:function(e,a,c,b,d){return jQuery.easing[jQuery.easing.def](e,a,c,b,d)},easeInQuad:function(e,a,c,b,d){return b*(a/=d)*a+c},easeOutQuad:function(e,a,c,b,d){return-b*(a/=d)*(a-2)+c},easeInOutQuad:function(e,a,c,b,d){return 1>(a/=d/2)?b/2*a*a+c:-b/2*(--a*(a-2)-1)+c},easeInCubic:function(e,a,c,b,d){return b*(a/=d)*a*a+c},easeOutCubic:function(e,a,c,b,d){return b*((a=a/d-1)*a*a+1)+c},easeInOutCubic:function(e,a,c,b,d){return 1>(a/=d/2)?b/2*a*a*a+c:
b/2*((a-=2)*a*a+2)+c},easeInQuart:function(e,a,c,b,d){return b*(a/=d)*a*a*a+c},easeOutQuart:function(e,a,c,b,d){return-b*((a=a/d-1)*a*a*a-1)+c},easeInOutQuart:function(e,a,c,b,d){return 1>(a/=d/2)?b/2*a*a*a*a+c:-b/2*((a-=2)*a*a*a-2)+c},easeInQuint:function(e,a,c,b,d){return b*(a/=d)*a*a*a*a+c},easeOutQuint:function(e,a,c,b,d){return b*((a=a/d-1)*a*a*a*a+1)+c},easeInOutQuint:function(e,a,c,b,d){return 1>(a/=d/2)?b/2*a*a*a*a*a+c:b/2*((a-=2)*a*a*a*a+2)+c},easeInSine:function(e,a,c,b,d){return-b*Math.cos(a/
d*(Math.PI/2))+b+c},easeOutSine:function(e,a,c,b,d){return b*Math.sin(a/d*(Math.PI/2))+c},easeInOutSine:function(e,a,c,b,d){return-b/2*(Math.cos(Math.PI*a/d)-1)+c},easeInExpo:function(e,a,c,b,d){return 0==a?c:b*Math.pow(2,10*(a/d-1))+c},easeOutExpo:function(e,a,c,b,d){return a==d?c+b:b*(-Math.pow(2,-10*a/d)+1)+c},easeInOutExpo:function(e,a,c,b,d){return 0==a?c:a==d?c+b:1>(a/=d/2)?b/2*Math.pow(2,10*(a-1))+c:b/2*(-Math.pow(2,-10*--a)+2)+c},easeInCirc:function(e,a,c,b,d){return-b*(Math.sqrt(1-(a/=d)*
a)-1)+c},easeOutCirc:function(e,a,c,b,d){return b*Math.sqrt(1-(a=a/d-1)*a)+c},easeInOutCirc:function(e,a,c,b,d){return 1>(a/=d/2)?-b/2*(Math.sqrt(1-a*a)-1)+c:b/2*(Math.sqrt(1-(a-=2)*a)+1)+c},easeInElastic:function(e,a,c,b,d){e=1.70158;var f=0,g=b;if(0==a)return c;if(1==(a/=d))return c+b;f||(f=0.3*d);g<Math.abs(b)?(g=b,e=f/4):e=f/(2*Math.PI)*Math.asin(b/g);return-(g*Math.pow(2,10*(a-=1))*Math.sin((a*d-e)*2*Math.PI/f))+c},easeOutElastic:function(e,a,c,b,d){e=1.70158;var f=0,g=b;if(0==a)return c;if(1==
    (a/=d))return c+b;f||(f=0.3*d);g<Math.abs(b)?(g=b,e=f/4):e=f/(2*Math.PI)*Math.asin(b/g);return g*Math.pow(2,-10*a)*Math.sin((a*d-e)*2*Math.PI/f)+b+c},easeInOutElastic:function(e,a,c,b,d){e=1.70158;var f=0,g=b;if(0==a)return c;if(2==(a/=d/2))return c+b;f||(f=d*0.3*1.5);g<Math.abs(b)?(g=b,e=f/4):e=f/(2*Math.PI)*Math.asin(b/g);return 1>a?-0.5*g*Math.pow(2,10*(a-=1))*Math.sin((a*d-e)*2*Math.PI/f)+c:0.5*g*Math.pow(2,-10*(a-=1))*Math.sin((a*d-e)*2*Math.PI/f)+b+c},easeInBack:function(e,a,c,b,d,f){void 0==
f&&(f=1.70158);return b*(a/=d)*a*((f+1)*a-f)+c},easeOutBack:function(e,a,c,b,d,f){void 0==f&&(f=1.70158);return b*((a=a/d-1)*a*((f+1)*a+f)+1)+c},easeInOutBack:function(e,a,c,b,d,f){void 0==f&&(f=1.70158);return 1>(a/=d/2)?b/2*a*a*(((f*=1.525)+1)*a-f)+c:b/2*((a-=2)*a*(((f*=1.525)+1)*a+f)+2)+c},easeInBounce:function(e,a,c,b,d){return b-jQuery.easing.easeOutBounce(e,d-a,0,b,d)+c},easeOutBounce:function(e,a,c,b,d){return(a/=d)<1/2.75?b*7.5625*a*a+c:a<2/2.75?b*(7.5625*(a-=1.5/2.75)*a+0.75)+c:a<2.5/2.75?
b*(7.5625*(a-=2.25/2.75)*a+0.9375)+c:b*(7.5625*(a-=2.625/2.75)*a+0.984375)+c},easeInOutBounce:function(e,a,c,b,d){return a<d/2?0.5*jQuery.easing.easeInBounce(e,2*a,0,b,d)+c:0.5*jQuery.easing.easeOutBounce(e,2*a-d,0,b,d)+0.5*b+c}});
/*! jQuery.event.drag v0.1  http://addictivity.de/jquery-drag-event-plugin-multi-touch/ */
(function(f){f.fn.drag=function(b,a,d){var c="string"==typeof b?b:"",g=f.isFunction(b)?b:f.isFunction(a)?a:null;0!==c.indexOf("drag")&&(c="drag"+c);d=(b==g?a:d)||{};return g?this.bind(c,d,g):this.trigger(c)};var i=f.event,j="ontouchstart"in document.documentElement,l=j?"touchstart":"mousedown",q=j?"touchmove touchend":"mousemove mouseup",g=i.special,c=g.drag={defaults:{which:1,distance:0,not:":input",handle:null,relative:!1,drop:!1,click:!1,touchXY:!0},datakey:"dragdata",livekey:"livedrag",add:function(b){var a=
    f.data(this,c.datakey),d=b.data||{};a.related+=1;!a.live&&b.selector&&(a.live=!0,i.add(this,"draginit."+c.livekey,c.delegate));f.each(c.defaults,function(b){void 0!==d[b]&&(a[b]=d[b])})},remove:function(){f.data(this,c.datakey).related-=1},setup:function(){if(!f.data(this,c.datakey)){var b=f.extend({related:0},c.defaults);f.data(this,c.datakey,b);i.add(this,l,c.init,b);this.attachEvent&&this.attachEvent("ondragstart",c.dontstart)}},teardown:function(){f.data(this,c.datakey).related||(f.removeData(this,
    c.datakey),i.remove(this,l,c.init),i.remove(this,"draginit",c.delegate),c.textselect(!0),this.detachEvent&&this.detachEvent("ondragstart",c.dontstart))},init:function(b){var a=b.data,d;if((d=b.originalEvent?b.originalEvent.changedTouches||b.originalEvent.touches:[])&&d.length){if(1<d.length)return;d=b.originalEvent.touches[0].pageX;var e=b.originalEvent.touches[0].pageY}else{if(0<a.which&&b.which!=a.which)return;d=b.pageX;e=b.pageY}if(!f(b.target).is(a.not)&&(!a.handle||f(b.target).closest(a.handle,
        b.currentTarget).length))if(a.propagates=1,a.interactions=[c.interaction(this,a)],a.target=b.target,a.pageX=d,a.pageY=e,a.dragging=null,d=c.hijack(b,"draginit",a),a.propagates){if((d=c.flatten(d))&&d.length)a.interactions=[],f.each(d,function(){a.interactions.push(c.interaction(this,a))});a.propagates=a.interactions.length;!1!==a.drop&&g.drop&&g.drop.handler(b,a);c.textselect(!1);i.add(document,q,c.handler,a);if(!j)return!1}},interaction:function(b,a){return{drag:b,callback:new c.callback,droppable:[],
    offset:f(b)[a.relative?"position":"offset"]()||{top:0,left:0}}},handler:function(b){var a=b.data;if(!a.dragging&&("mousemove"===b.type||"touchmove"===b.type)){if(Math.pow(b.pageX-a.pageX,2)+Math.pow(b.pageY-a.pageY,2)<Math.pow(a.distance,2))return;b.target=a.target;c.hijack(b,"dragstart",a);a.propagates&&(a.dragging=!0)}switch(b.type){case "touchmove":if(a.dragging&&(b.preventDefault(),a.touchXY&&b.originalEvent)){var d=b.originalEvent.changedTouches||b.originalEvent.touches;d&&d.length&&f.extend(b,
    d[0])}case "mousemove":if(a.dragging){c.hijack(b,"drag",a);if(a.propagates){!1!==a.drop&&g.drop&&g.drop.handler(b,a);break}b.type="mouseup"}case "mouseup":case "touchend":i.remove(document,q,c.handler),a.dragging&&(!1!==a.drop&&g.drop&&g.drop.handler(b,a),c.hijack(b,"dragend",a)),c.textselect(!0),!1===a.click&&a.dragging&&(jQuery.event.triggered=!0,setTimeout(function(){jQuery.event.triggered=!1},20),a.dragging=!1)}},delegate:function(b){var a=[],d,e=f.data(this,"events")||{};f.each(e.live||[],function(e,
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                g){if(0===g.preType.indexOf("drag")&&(d=f(b.target).closest(g.selector,b.currentTarget)[0]))i.add(d,g.origType+"."+c.livekey,g.origHandler,g.data),0>f.inArray(d,a)&&a.push(d)});return!a.length?!1:f(a).bind("dragend."+c.livekey,function(){i.remove(this,"."+c.livekey)})},hijack:function(b,a,d,e,g){if(d){var j=b.originalEvent,l=b.type,n=a.indexOf("drop")?"drag":"drop",k,p=e||0,h,m,e=!isNaN(e)?e:d.interactions.length;b.type=a;b.sourceEvent=j;b.originalEvent=null;d.results=[];do if((h=d.interactions[p])&&
    !("dragend"!==a&&h.cancelled))m=c.properties(b,d,h),h.results=[],f(g||h[n]||d.droppable).each(function(e,g){k=(m.target=g)?i.handle.call(g,b,m):null;!1===k?("drag"==n&&(h.cancelled=!0,d.propagates-=1),"drop"==a&&(h[n][e]=null)):"dropinit"==a&&h.droppable.push(c.element(k)||g);"dragstart"==a&&(h.proxy=f(c.element(k)||h.drag)[0]);h.results.push(k);delete b.result;if("dropinit"!==a)return k}),d.results[p]=c.flatten(h.results),"dropinit"==a&&(h.droppable=c.flatten(h.droppable)),"dragstart"==a&&!h.cancelled&&
m.update();while(++p<e);b.type=l;b.originalEvent=j;return c.flatten(d.results)}},properties:function(b,a,d){var e=d.callback;e.drag=d.drag;e.proxy=d.proxy||d.drag;e.startX=a.pageX;e.startY=a.pageY;e.deltaX=b.pageX-a.pageX;e.deltaY=b.pageY-a.pageY;e.originalX=d.offset.left;e.originalY=d.offset.top;e.offsetX=b.pageX-(a.pageX-e.originalX);e.offsetY=b.pageY-(a.pageY-e.originalY);e.drop=c.flatten((d.drop||[]).slice());e.available=c.flatten((d.droppable||[]).slice());return e},element:function(b){if(b&&
    (b.jquery||1==b.nodeType))return b},flatten:function(b){return f.map(b,function(a){return a&&a.jquery?f.makeArray(a):a&&a.length?c.flatten(a):a})},textselect:function(b){f(document)[b?"unbind":"bind"]("selectstart",c.dontstart).attr("unselectable",b?"off":"on").css("MozUserSelect",b?"":"none")},dontstart:function(){return!1},callback:function(){}};c.callback.prototype={update:function(){g.drop&&this.available.length&&f.each(this.available,function(b){g.drop.locate(this,b)})}};g.draginit=g.dragstart=
    g.dragend=c})(jQuery);




/* MarkerWithLabel v1.1.9 */
eval(function(p,a,c,k,e,r){e=function(c){return(c<a?'':e(parseInt(c/a)))+((c=c%a)>35?String.fromCharCode(c+29):c.toString(36))};if(!''.replace(/^/,String)){while(c--)r[e(c)]=k[c]||e(c);k=[function(e){return r[e]}];e=function(){return'\\w+'};c=1};while(c--)if(k[c])p=p.replace(new RegExp('\\b'+e(c)+'\\b','g'),k[c]);return p}('7 1G(b,a){7 1u(){};1u.v=a.v;b.2B=a.v;b.v=1b 1u();b.v.3h=b}7 u(c,b,a){2.3=c;2.1L=c.2y;2.6=K.1A("2k");2.6.4.S="Z: 1p; 15: 1P;";2.q=K.1A("2k");2.q.4.S=2.6.4.S;2.q.1M("2A","1d A;");2.q.1M("2w","1d A;");2.U=u.P(b)}1G(u,8.5.3g);u.P=7(b){t a;9(C u.P.1j==="B"){a=K.1A("30");a.4.S="Z: 1p; z-2Y: 2W; M: 13;";a.4.1l="-2P";a.4.1x="-2M";a.2I=b;u.P.1j=a}1d u.P.1j};u.v.2D=7(){t g=2;t m=A;t c=A;t f;t j,1e;t p;t d;t h;t o;t n=20;t i="3p("+2.1L+")";t k=7(e){9(e.2q){e.2q()}e.3l=G;9(e.2n){e.2n()}};t l=7(){g.3.2m(3c)};2.1E().1J.X(2.6);2.1E().36.X(2.q);9(C u.P.2e==="B"){2.1E().1J.X(2.U);u.P.2e=G}2.1t=[8.5.r.O(2.q,"2c",7(e){9(g.3.R()||g.3.W()){2.4.19="25";8.5.r.D(g.3,"2c",e)}}),8.5.r.O(2.q,"21",7(e){9((g.3.R()||g.3.W())&&!c){2.4.19=g.3.2V();8.5.r.D(g.3,"21",e)}}),8.5.r.O(2.q,"1X",7(e){c=A;9(g.3.R()){m=G;2.4.19=i}9(g.3.R()||g.3.W()){8.5.r.D(g.3,"1X",e);k(e)}}),8.5.r.O(K,"1s",7(a){t b;9(m){m=A;g.q.4.19="25";8.5.r.D(g.3,"1s",a)}9(c){9(d){b=g.Y().1v(g.3.Q());b.y+=n;g.3.J(g.Y().1S(b));2O{g.3.2m(8.5.2N.2L);2J(l,2H)}2E(e){}}g.U.4.M="13";g.3.11(f);p=G;c=A;a.L=g.3.Q();8.5.r.D(g.3,"1N",a)}}),8.5.r.w(g.3.1g(),"2C",7(a){t b;9(m){9(c){a.L=1b 8.5.2z(a.L.1f()-j,a.L.1i()-1e);b=g.Y().1v(a.L);9(d){g.U.4.14=b.x+"H";g.U.4.T=b.y+"H";g.U.4.M="";b.y-=n}g.3.J(g.Y().1S(b));9(d){g.q.4.T=(b.y+n)+"H"}8.5.r.D(g.3,"1K",a)}V{j=a.L.1f()-g.3.Q().1f();1e=a.L.1i()-g.3.Q().1i();f=g.3.1c();h=g.3.Q();o=g.3.1g().2x();d=g.3.F("16");c=G;g.3.11(1I);a.L=g.3.Q();8.5.r.D(g.3,"1H",a)}}}),8.5.r.O(K,"2v",7(e){9(c){9(e.3r===27){d=A;g.3.J(h);g.3.1g().3q(o);8.5.r.D(K,"1s",e)}}}),8.5.r.O(2.q,"2u",7(e){9(g.3.R()||g.3.W()){9(p){p=A}V{8.5.r.D(g.3,"2u",e);k(e)}}}),8.5.r.O(2.q,"2s",7(e){9(g.3.R()||g.3.W()){8.5.r.D(g.3,"2s",e);k(e)}}),8.5.r.w(2.3,"1H",7(a){9(!c){d=2.F("16")}}),8.5.r.w(2.3,"1K",7(a){9(!c){9(d){g.J(n);g.6.4.N=1I+(2.F("17")?-1:+1)}}}),8.5.r.w(2.3,"1N",7(a){9(!c){9(d){g.J(0)}}}),8.5.r.w(2.3,"3o",7(){g.J()}),8.5.r.w(2.3,"3n",7(){g.11()}),8.5.r.w(2.3,"3m",7(){g.18()}),8.5.r.w(2.3,"3j",7(){g.18()}),8.5.r.w(2.3,"3i",7(){g.1C()}),8.5.r.w(2.3,"3f",7(){g.1y()}),8.5.r.w(2.3,"3e",7(){g.1z()}),8.5.r.w(2.3,"3d",7(){g.1a()}),8.5.r.w(2.3,"3b",7(){g.1a()})]};u.v.3a=7(){t i;2.6.2j.2i(2.6);2.q.2j.2i(2.q);2h(i=0;i<2.1t.39;i++){8.5.r.38(2.1t[i])}};u.v.37=7(){2.1y();2.1C();2.1a()};u.v.1y=7(){t a=2.3.F("1w");9(C a.35==="B"){2.6.12=a;2.q.12=2.6.12}V{2.6.12="";2.6.X(a);a=a.34(G);2.q.X(a)}};u.v.1C=7(){2.q.33=2.3.32()||""};u.v.1a=7(){t i,E;2.6.1r=2.3.F("1q");2.q.1r=2.6.1r;2.6.4.S="";2.q.4.S="";E=2.3.F("E");2h(i 31 E){9(E.2Z(i)){2.6.4[i]=E[i];2.q.4[i]=E[i]}}2.2b()};u.v.2b=7(){2.6.4.Z="1p";2.6.4.15="1P";9(C 2.6.4.I!=="B"&&2.6.4.I!==""){2.6.4.2a="\\"29:28.26.2f(I="+(2.6.4.I*24)+")\\"";2.6.4.23="22(I="+(2.6.4.I*24)+")"}2.q.4.Z=2.6.4.Z;2.q.4.15=2.6.4.15;2.q.4.I=0.2X;2.q.4.2a="\\"29:28.26.2f(I=1)\\"";2.q.4.23="22(I=1)";2.1z();2.J();2.18()};u.v.1z=7(){t a=2.3.F("1o");2.6.4.1l=-a.x+"H";2.6.4.1x=-a.y+"H";2.q.4.1l=-a.x+"H";2.q.4.1x=-a.y+"H"};u.v.J=7(a){t b=2.Y().1v(2.3.Q());9(C a==="B"){a=0}2.6.4.14=1Z.1Y(b.x)+"H";2.6.4.T=1Z.1Y(b.y-a)+"H";2.q.4.14=2.6.4.14;2.q.4.T=2.6.4.T;2.11()};u.v.11=7(){t a=(2.3.F("17")?-1:+1);9(C 2.3.1c()==="B"){2.6.4.N=2U(2.6.4.T,10)+a;2.q.4.N=2.6.4.N}V{2.6.4.N=2.3.1c()+a;2.q.4.N=2.6.4.N}};u.v.18=7(){9(2.3.F("1n")){2.6.4.M=2.3.2T()?"2S":"13"}V{2.6.4.M="13"}2.q.4.M=2.6.4.M};7 1m(a){a=a||{};a.1w=a.1w||"";a.1o=a.1o||1b 8.5.2R(0,0);a.1q=a.1q||"2Q";a.E=a.E||{};a.17=a.17||A;9(C a.1n==="B"){a.1n=G}9(C a.16==="B"){a.16=G}9(C a.2d==="B"){a.2d=G}9(C a.1W==="B"){a.1W=A}9(C a.1B==="B"){a.1B=A}a.1k=a.1k||"1V"+(K.1U.1T==="2g:"?"s":"")+"://5.1R.1Q/2t/2l/2o/2K.3k";a.1F=a.1F||"1V"+(K.1U.1T==="2g:"?"s":"")+"://5.1R.1Q/2t/2l/2o/2G.2F";a.1B=A;2.2p=1b u(2,a.1k,a.1F);8.5.1D.1O(2,2r)}1G(1m,8.5.1D);1m.v.1h=7(a){8.5.1D.v.1h.1O(2,2r);2.2p.1h(a)};',62,214,'||this|marker_|style|maps|labelDiv_|function|google|if|||||||||||||||||eventDiv_|event||var|MarkerLabel_|prototype|addListener||||false|undefined|typeof|trigger|labelStyle|get|true|px|opacity|setPosition|document|latLng|display|zIndex|addDomListener|getSharedCross|getPosition|getDraggable|cssText|top|crossDiv_|else|getClickable|appendChild|getProjection|position||setZIndex|innerHTML|none|left|overflow|raiseOnDrag|labelInBackground|setVisible|cursor|setStyles|new|getZIndex|return|cLngOffset|lat|getMap|setMap|lng|crossDiv|crossImage|marginLeft|MarkerWithLabel|labelVisible|labelAnchor|absolute|labelClass|className|mouseup|listeners_|tempCtor|fromLatLngToDivPixel|labelContent|marginTop|setContent|setAnchor|createElement|optimized|setTitle|Marker|getPanes|handCursor|inherits|dragstart|1000000|overlayImage|drag|handCursorURL_|setAttribute|dragend|apply|hidden|com|gstatic|fromDivPixelToLatLng|protocol|location|http|draggable|mousedown|round|Math||mouseout|alpha|filter|100|pointer|Microsoft||DXImageTransform|progid|MsFilter|setMandatoryStyles|mouseover|clickable|processed|Alpha|https|for|removeChild|parentNode|div|en_us|setAnimation|stopPropagation|mapfiles|label|preventDefault|arguments|dblclick|intl|click|keydown|ondragstart|getCenter|handCursorURL|LatLng|onselectstart|superClass_|mousemove|onAdd|catch|cur|closedhand_8_8|1406|src|setTimeout|drag_cross_67_16|BOUNCE|9px|Animation|try|8px|markerLabels|Point|block|getVisible|parseInt|getCursor|1000002|01|index|hasOwnProperty|img|in|getTitle|title|cloneNode|nodeType|overlayMouseTarget|draw|removeListener|length|onRemove|labelstyle_changed|null|labelclass_changed|labelanchor_changed|labelcontent_changed|OverlayView|constructor|title_changed|labelvisible_changed|png|cancelBubble|visible_changed|zindex_changed|position_changed|url|setCenter|keyCode'.split('|'),0,{}));




/* Hammer.JS - v2.0.4 */
!function(a,b,c,d){"use strict";function e(a,b,c){return setTimeout(k(a,c),b)}function f(a,b,c){return Array.isArray(a)?(g(a,c[b],c),!0):!1}function g(a,b,c){var e;if(a)if(a.forEach)a.forEach(b,c);else if(a.length!==d)for(e=0;e<a.length;)b.call(c,a[e],e,a),e++;else for(e in a)a.hasOwnProperty(e)&&b.call(c,a[e],e,a)}function h(a,b,c){for(var e=Object.keys(b),f=0;f<e.length;)(!c||c&&a[e[f]]===d)&&(a[e[f]]=b[e[f]]),f++;return a}function i(a,b){return h(a,b,!0)}function j(a,b,c){var d,e=b.prototype;d=a.prototype=Object.create(e),d.constructor=a,d._super=e,c&&h(d,c)}function k(a,b){return function(){return a.apply(b,arguments)}}function l(a,b){return typeof a==kb?a.apply(b?b[0]||d:d,b):a}function m(a,b){return a===d?b:a}function n(a,b,c){g(r(b),function(b){a.addEventListener(b,c,!1)})}function o(a,b,c){g(r(b),function(b){a.removeEventListener(b,c,!1)})}function p(a,b){for(;a;){if(a==b)return!0;a=a.parentNode}return!1}function q(a,b){return a.indexOf(b)>-1}function r(a){return a.trim().split(/\s+/g)}function s(a,b,c){if(a.indexOf&&!c)return a.indexOf(b);for(var d=0;d<a.length;){if(c&&a[d][c]==b||!c&&a[d]===b)return d;d++}return-1}function t(a){return Array.prototype.slice.call(a,0)}function u(a,b,c){for(var d=[],e=[],f=0;f<a.length;){var g=b?a[f][b]:a[f];s(e,g)<0&&d.push(a[f]),e[f]=g,f++}return c&&(d=b?d.sort(function(a,c){return a[b]>c[b]}):d.sort()),d}function v(a,b){for(var c,e,f=b[0].toUpperCase()+b.slice(1),g=0;g<ib.length;){if(c=ib[g],e=c?c+f:b,e in a)return e;g++}return d}function w(){return ob++}function x(a){var b=a.ownerDocument;return b.defaultView||b.parentWindow}function y(a,b){var c=this;this.manager=a,this.callback=b,this.element=a.element,this.target=a.options.inputTarget,this.domHandler=function(b){l(a.options.enable,[a])&&c.handler(b)},this.init()}function z(a){var b,c=a.options.inputClass;return new(b=c?c:rb?N:sb?Q:qb?S:M)(a,A)}function A(a,b,c){var d=c.pointers.length,e=c.changedPointers.length,f=b&yb&&d-e===0,g=b&(Ab|Bb)&&d-e===0;c.isFirst=!!f,c.isFinal=!!g,f&&(a.session={}),c.eventType=b,B(a,c),a.emit("hammer.input",c),a.recognize(c),a.session.prevInput=c}function B(a,b){var c=a.session,d=b.pointers,e=d.length;c.firstInput||(c.firstInput=E(b)),e>1&&!c.firstMultiple?c.firstMultiple=E(b):1===e&&(c.firstMultiple=!1);var f=c.firstInput,g=c.firstMultiple,h=g?g.center:f.center,i=b.center=F(d);b.timeStamp=nb(),b.deltaTime=b.timeStamp-f.timeStamp,b.angle=J(h,i),b.distance=I(h,i),C(c,b),b.offsetDirection=H(b.deltaX,b.deltaY),b.scale=g?L(g.pointers,d):1,b.rotation=g?K(g.pointers,d):0,D(c,b);var j=a.element;p(b.srcEvent.target,j)&&(j=b.srcEvent.target),b.target=j}function C(a,b){var c=b.center,d=a.offsetDelta||{},e=a.prevDelta||{},f=a.prevInput||{};(b.eventType===yb||f.eventType===Ab)&&(e=a.prevDelta={x:f.deltaX||0,y:f.deltaY||0},d=a.offsetDelta={x:c.x,y:c.y}),b.deltaX=e.x+(c.x-d.x),b.deltaY=e.y+(c.y-d.y)}function D(a,b){var c,e,f,g,h=a.lastInterval||b,i=b.timeStamp-h.timeStamp;if(b.eventType!=Bb&&(i>xb||h.velocity===d)){var j=h.deltaX-b.deltaX,k=h.deltaY-b.deltaY,l=G(i,j,k);e=l.x,f=l.y,c=mb(l.x)>mb(l.y)?l.x:l.y,g=H(j,k),a.lastInterval=b}else c=h.velocity,e=h.velocityX,f=h.velocityY,g=h.direction;b.velocity=c,b.velocityX=e,b.velocityY=f,b.direction=g}function E(a){for(var b=[],c=0;c<a.pointers.length;)b[c]={clientX:lb(a.pointers[c].clientX),clientY:lb(a.pointers[c].clientY)},c++;return{timeStamp:nb(),pointers:b,center:F(b),deltaX:a.deltaX,deltaY:a.deltaY}}function F(a){var b=a.length;if(1===b)return{x:lb(a[0].clientX),y:lb(a[0].clientY)};for(var c=0,d=0,e=0;b>e;)c+=a[e].clientX,d+=a[e].clientY,e++;return{x:lb(c/b),y:lb(d/b)}}function G(a,b,c){return{x:b/a||0,y:c/a||0}}function H(a,b){return a===b?Cb:mb(a)>=mb(b)?a>0?Db:Eb:b>0?Fb:Gb}function I(a,b,c){c||(c=Kb);var d=b[c[0]]-a[c[0]],e=b[c[1]]-a[c[1]];return Math.sqrt(d*d+e*e)}function J(a,b,c){c||(c=Kb);var d=b[c[0]]-a[c[0]],e=b[c[1]]-a[c[1]];return 180*Math.atan2(e,d)/Math.PI}function K(a,b){return J(b[1],b[0],Lb)-J(a[1],a[0],Lb)}function L(a,b){return I(b[0],b[1],Lb)/I(a[0],a[1],Lb)}function M(){this.evEl=Nb,this.evWin=Ob,this.allow=!0,this.pressed=!1,y.apply(this,arguments)}function N(){this.evEl=Rb,this.evWin=Sb,y.apply(this,arguments),this.store=this.manager.session.pointerEvents=[]}function O(){this.evTarget=Ub,this.evWin=Vb,this.started=!1,y.apply(this,arguments)}function P(a,b){var c=t(a.touches),d=t(a.changedTouches);return b&(Ab|Bb)&&(c=u(c.concat(d),"identifier",!0)),[c,d]}function Q(){this.evTarget=Xb,this.targetIds={},y.apply(this,arguments)}function R(a,b){var c=t(a.touches),d=this.targetIds;if(b&(yb|zb)&&1===c.length)return d[c[0].identifier]=!0,[c,c];var e,f,g=t(a.changedTouches),h=[],i=this.target;if(f=c.filter(function(a){return p(a.target,i)}),b===yb)for(e=0;e<f.length;)d[f[e].identifier]=!0,e++;for(e=0;e<g.length;)d[g[e].identifier]&&h.push(g[e]),b&(Ab|Bb)&&delete d[g[e].identifier],e++;return h.length?[u(f.concat(h),"identifier",!0),h]:void 0}function S(){y.apply(this,arguments);var a=k(this.handler,this);this.touch=new Q(this.manager,a),this.mouse=new M(this.manager,a)}function T(a,b){this.manager=a,this.set(b)}function U(a){if(q(a,bc))return bc;var b=q(a,cc),c=q(a,dc);return b&&c?cc+" "+dc:b||c?b?cc:dc:q(a,ac)?ac:_b}function V(a){this.id=w(),this.manager=null,this.options=i(a||{},this.defaults),this.options.enable=m(this.options.enable,!0),this.state=ec,this.simultaneous={},this.requireFail=[]}function W(a){return a&jc?"cancel":a&hc?"end":a&gc?"move":a&fc?"start":""}function X(a){return a==Gb?"down":a==Fb?"up":a==Db?"left":a==Eb?"right":""}function Y(a,b){var c=b.manager;return c?c.get(a):a}function Z(){V.apply(this,arguments)}function $(){Z.apply(this,arguments),this.pX=null,this.pY=null}function _(){Z.apply(this,arguments)}function ab(){V.apply(this,arguments),this._timer=null,this._input=null}function bb(){Z.apply(this,arguments)}function cb(){Z.apply(this,arguments)}function db(){V.apply(this,arguments),this.pTime=!1,this.pCenter=!1,this._timer=null,this._input=null,this.count=0}function eb(a,b){return b=b||{},b.recognizers=m(b.recognizers,eb.defaults.preset),new fb(a,b)}function fb(a,b){b=b||{},this.options=i(b,eb.defaults),this.options.inputTarget=this.options.inputTarget||a,this.handlers={},this.session={},this.recognizers=[],this.element=a,this.input=z(this),this.touchAction=new T(this,this.options.touchAction),gb(this,!0),g(b.recognizers,function(a){var b=this.add(new a[0](a[1]));a[2]&&b.recognizeWith(a[2]),a[3]&&b.requireFailure(a[3])},this)}function gb(a,b){var c=a.element;g(a.options.cssProps,function(a,d){c.style[v(c.style,d)]=b?a:""})}function hb(a,c){var d=b.createEvent("Event");d.initEvent(a,!0,!0),d.gesture=c,c.target.dispatchEvent(d)}var ib=["","webkit","moz","MS","ms","o"],jb=b.createElement("div"),kb="function",lb=Math.round,mb=Math.abs,nb=Date.now,ob=1,pb=/mobile|tablet|ip(ad|hone|od)|android/i,qb="ontouchstart"in a,rb=v(a,"PointerEvent")!==d,sb=qb&&pb.test(navigator.userAgent),tb="touch",ub="pen",vb="mouse",wb="kinect",xb=25,yb=1,zb=2,Ab=4,Bb=8,Cb=1,Db=2,Eb=4,Fb=8,Gb=16,Hb=Db|Eb,Ib=Fb|Gb,Jb=Hb|Ib,Kb=["x","y"],Lb=["clientX","clientY"];y.prototype={handler:function(){},init:function(){this.evEl&&n(this.element,this.evEl,this.domHandler),this.evTarget&&n(this.target,this.evTarget,this.domHandler),this.evWin&&n(x(this.element),this.evWin,this.domHandler)},destroy:function(){this.evEl&&o(this.element,this.evEl,this.domHandler),this.evTarget&&o(this.target,this.evTarget,this.domHandler),this.evWin&&o(x(this.element),this.evWin,this.domHandler)}};var Mb={mousedown:yb,mousemove:zb,mouseup:Ab},Nb="mousedown",Ob="mousemove mouseup";j(M,y,{handler:function(a){var b=Mb[a.type];b&yb&&0===a.button&&(this.pressed=!0),b&zb&&1!==a.which&&(b=Ab),this.pressed&&this.allow&&(b&Ab&&(this.pressed=!1),this.callback(this.manager,b,{pointers:[a],changedPointers:[a],pointerType:vb,srcEvent:a}))}});var Pb={pointerdown:yb,pointermove:zb,pointerup:Ab,pointercancel:Bb,pointerout:Bb},Qb={2:tb,3:ub,4:vb,5:wb},Rb="pointerdown",Sb="pointermove pointerup pointercancel";a.MSPointerEvent&&(Rb="MSPointerDown",Sb="MSPointerMove MSPointerUp MSPointerCancel"),j(N,y,{handler:function(a){var b=this.store,c=!1,d=a.type.toLowerCase().replace("ms",""),e=Pb[d],f=Qb[a.pointerType]||a.pointerType,g=f==tb,h=s(b,a.pointerId,"pointerId");e&yb&&(0===a.button||g)?0>h&&(b.push(a),h=b.length-1):e&(Ab|Bb)&&(c=!0),0>h||(b[h]=a,this.callback(this.manager,e,{pointers:b,changedPointers:[a],pointerType:f,srcEvent:a}),c&&b.splice(h,1))}});var Tb={touchstart:yb,touchmove:zb,touchend:Ab,touchcancel:Bb},Ub="touchstart",Vb="touchstart touchmove touchend touchcancel";j(O,y,{handler:function(a){var b=Tb[a.type];if(b===yb&&(this.started=!0),this.started){var c=P.call(this,a,b);b&(Ab|Bb)&&c[0].length-c[1].length===0&&(this.started=!1),this.callback(this.manager,b,{pointers:c[0],changedPointers:c[1],pointerType:tb,srcEvent:a})}}});var Wb={touchstart:yb,touchmove:zb,touchend:Ab,touchcancel:Bb},Xb="touchstart touchmove touchend touchcancel";j(Q,y,{handler:function(a){var b=Wb[a.type],c=R.call(this,a,b);c&&this.callback(this.manager,b,{pointers:c[0],changedPointers:c[1],pointerType:tb,srcEvent:a})}}),j(S,y,{handler:function(a,b,c){var d=c.pointerType==tb,e=c.pointerType==vb;if(d)this.mouse.allow=!1;else if(e&&!this.mouse.allow)return;b&(Ab|Bb)&&(this.mouse.allow=!0),this.callback(a,b,c)},destroy:function(){this.touch.destroy(),this.mouse.destroy()}});var Yb=v(jb.style,"touchAction"),Zb=Yb!==d,$b="compute",_b="auto",ac="manipulation",bc="none",cc="pan-x",dc="pan-y";T.prototype={set:function(a){a==$b&&(a=this.compute()),Zb&&(this.manager.element.style[Yb]=a),this.actions=a.toLowerCase().trim()},update:function(){this.set(this.manager.options.touchAction)},compute:function(){var a=[];return g(this.manager.recognizers,function(b){l(b.options.enable,[b])&&(a=a.concat(b.getTouchAction()))}),U(a.join(" "))},preventDefaults:function(a){if(!Zb){var b=a.srcEvent,c=a.offsetDirection;if(this.manager.session.prevented)return void b.preventDefault();var d=this.actions,e=q(d,bc),f=q(d,dc),g=q(d,cc);return e||f&&c&Hb||g&&c&Ib?this.preventSrc(b):void 0}},preventSrc:function(a){this.manager.session.prevented=!0,a.preventDefault()}};var ec=1,fc=2,gc=4,hc=8,ic=hc,jc=16,kc=32;V.prototype={defaults:{},set:function(a){return h(this.options,a),this.manager&&this.manager.touchAction.update(),this},recognizeWith:function(a){if(f(a,"recognizeWith",this))return this;var b=this.simultaneous;return a=Y(a,this),b[a.id]||(b[a.id]=a,a.recognizeWith(this)),this},dropRecognizeWith:function(a){return f(a,"dropRecognizeWith",this)?this:(a=Y(a,this),delete this.simultaneous[a.id],this)},requireFailure:function(a){if(f(a,"requireFailure",this))return this;var b=this.requireFail;return a=Y(a,this),-1===s(b,a)&&(b.push(a),a.requireFailure(this)),this},dropRequireFailure:function(a){if(f(a,"dropRequireFailure",this))return this;a=Y(a,this);var b=s(this.requireFail,a);return b>-1&&this.requireFail.splice(b,1),this},hasRequireFailures:function(){return this.requireFail.length>0},canRecognizeWith:function(a){return!!this.simultaneous[a.id]},emit:function(a){function b(b){c.manager.emit(c.options.event+(b?W(d):""),a)}var c=this,d=this.state;hc>d&&b(!0),b(),d>=hc&&b(!0)},tryEmit:function(a){return this.canEmit()?this.emit(a):void(this.state=kc)},canEmit:function(){for(var a=0;a<this.requireFail.length;){if(!(this.requireFail[a].state&(kc|ec)))return!1;a++}return!0},recognize:function(a){var b=h({},a);return l(this.options.enable,[this,b])?(this.state&(ic|jc|kc)&&(this.state=ec),this.state=this.process(b),void(this.state&(fc|gc|hc|jc)&&this.tryEmit(b))):(this.reset(),void(this.state=kc))},process:function(){},getTouchAction:function(){},reset:function(){}},j(Z,V,{defaults:{pointers:1},attrTest:function(a){var b=this.options.pointers;return 0===b||a.pointers.length===b},process:function(a){var b=this.state,c=a.eventType,d=b&(fc|gc),e=this.attrTest(a);return d&&(c&Bb||!e)?b|jc:d||e?c&Ab?b|hc:b&fc?b|gc:fc:kc}}),j($,Z,{defaults:{event:"pan",threshold:10,pointers:1,direction:Jb},getTouchAction:function(){var a=this.options.direction,b=[];return a&Hb&&b.push(dc),a&Ib&&b.push(cc),b},directionTest:function(a){var b=this.options,c=!0,d=a.distance,e=a.direction,f=a.deltaX,g=a.deltaY;return e&b.direction||(b.direction&Hb?(e=0===f?Cb:0>f?Db:Eb,c=f!=this.pX,d=Math.abs(a.deltaX)):(e=0===g?Cb:0>g?Fb:Gb,c=g!=this.pY,d=Math.abs(a.deltaY))),a.direction=e,c&&d>b.threshold&&e&b.direction},attrTest:function(a){return Z.prototype.attrTest.call(this,a)&&(this.state&fc||!(this.state&fc)&&this.directionTest(a))},emit:function(a){this.pX=a.deltaX,this.pY=a.deltaY;var b=X(a.direction);b&&this.manager.emit(this.options.event+b,a),this._super.emit.call(this,a)}}),j(_,Z,{defaults:{event:"pinch",threshold:0,pointers:2},getTouchAction:function(){return[bc]},attrTest:function(a){return this._super.attrTest.call(this,a)&&(Math.abs(a.scale-1)>this.options.threshold||this.state&fc)},emit:function(a){if(this._super.emit.call(this,a),1!==a.scale){var b=a.scale<1?"in":"out";this.manager.emit(this.options.event+b,a)}}}),j(ab,V,{defaults:{event:"press",pointers:1,time:500,threshold:5},getTouchAction:function(){return[_b]},process:function(a){var b=this.options,c=a.pointers.length===b.pointers,d=a.distance<b.threshold,f=a.deltaTime>b.time;if(this._input=a,!d||!c||a.eventType&(Ab|Bb)&&!f)this.reset();else if(a.eventType&yb)this.reset(),this._timer=e(function(){this.state=ic,this.tryEmit()},b.time,this);else if(a.eventType&Ab)return ic;return kc},reset:function(){clearTimeout(this._timer)},emit:function(a){this.state===ic&&(a&&a.eventType&Ab?this.manager.emit(this.options.event+"up",a):(this._input.timeStamp=nb(),this.manager.emit(this.options.event,this._input)))}}),j(bb,Z,{defaults:{event:"rotate",threshold:0,pointers:2},getTouchAction:function(){return[bc]},attrTest:function(a){return this._super.attrTest.call(this,a)&&(Math.abs(a.rotation)>this.options.threshold||this.state&fc)}}),j(cb,Z,{defaults:{event:"swipe",threshold:10,velocity:.65,direction:Hb|Ib,pointers:1},getTouchAction:function(){return $.prototype.getTouchAction.call(this)},attrTest:function(a){var b,c=this.options.direction;return c&(Hb|Ib)?b=a.velocity:c&Hb?b=a.velocityX:c&Ib&&(b=a.velocityY),this._super.attrTest.call(this,a)&&c&a.direction&&a.distance>this.options.threshold&&mb(b)>this.options.velocity&&a.eventType&Ab},emit:function(a){var b=X(a.direction);b&&this.manager.emit(this.options.event+b,a),this.manager.emit(this.options.event,a)}}),j(db,V,{defaults:{event:"tap",pointers:1,taps:1,interval:300,time:250,threshold:2,posThreshold:10},getTouchAction:function(){return[ac]},process:function(a){var b=this.options,c=a.pointers.length===b.pointers,d=a.distance<b.threshold,f=a.deltaTime<b.time;if(this.reset(),a.eventType&yb&&0===this.count)return this.failTimeout();if(d&&f&&c){if(a.eventType!=Ab)return this.failTimeout();var g=this.pTime?a.timeStamp-this.pTime<b.interval:!0,h=!this.pCenter||I(this.pCenter,a.center)<b.posThreshold;this.pTime=a.timeStamp,this.pCenter=a.center,h&&g?this.count+=1:this.count=1,this._input=a;var i=this.count%b.taps;if(0===i)return this.hasRequireFailures()?(this._timer=e(function(){this.state=ic,this.tryEmit()},b.interval,this),fc):ic}return kc},failTimeout:function(){return this._timer=e(function(){this.state=kc},this.options.interval,this),kc},reset:function(){clearTimeout(this._timer)},emit:function(){this.state==ic&&(this._input.tapCount=this.count,this.manager.emit(this.options.event,this._input))}}),eb.VERSION="2.0.4",eb.defaults={domEvents:!1,touchAction:$b,enable:!0,inputTarget:null,inputClass:null,preset:[[bb,{enable:!1}],[_,{enable:!1},["rotate"]],[cb,{direction:Hb}],[$,{direction:Hb},["swipe"]],[db],[db,{event:"doubletap",taps:2},["tap"]],[ab]],cssProps:{userSelect:"none",touchSelect:"none",touchCallout:"none",contentZooming:"none",userDrag:"none",tapHighlightColor:"rgba(0,0,0,0)"}};var lc=1,mc=2;fb.prototype={set:function(a){return h(this.options,a),a.touchAction&&this.touchAction.update(),a.inputTarget&&(this.input.destroy(),this.input.target=a.inputTarget,this.input.init()),this},stop:function(a){this.session.stopped=a?mc:lc},recognize:function(a){var b=this.session;if(!b.stopped){this.touchAction.preventDefaults(a);var c,d=this.recognizers,e=b.curRecognizer;(!e||e&&e.state&ic)&&(e=b.curRecognizer=null);for(var f=0;f<d.length;)c=d[f],b.stopped===mc||e&&c!=e&&!c.canRecognizeWith(e)?c.reset():c.recognize(a),!e&&c.state&(fc|gc|hc)&&(e=b.curRecognizer=c),f++}},get:function(a){if(a instanceof V)return a;for(var b=this.recognizers,c=0;c<b.length;c++)if(b[c].options.event==a)return b[c];return null},add:function(a){if(f(a,"add",this))return this;var b=this.get(a.options.event);return b&&this.remove(b),this.recognizers.push(a),a.manager=this,this.touchAction.update(),a},remove:function(a){if(f(a,"remove",this))return this;var b=this.recognizers;return a=this.get(a),b.splice(s(b,a),1),this.touchAction.update(),this},on:function(a,b){var c=this.handlers;return g(r(a),function(a){c[a]=c[a]||[],c[a].push(b)}),this},off:function(a,b){var c=this.handlers;return g(r(a),function(a){b?c[a].splice(s(c[a],b),1):delete c[a]}),this},emit:function(a,b){this.options.domEvents&&hb(a,b);var c=this.handlers[a]&&this.handlers[a].slice();if(c&&c.length){b.type=a,b.preventDefault=function(){b.srcEvent.preventDefault()};for(var d=0;d<c.length;)c[d](b),d++}},destroy:function(){this.element&&gb(this,!1),this.handlers={},this.session={},this.input.destroy(),this.element=null}},h(eb,{INPUT_START:yb,INPUT_MOVE:zb,INPUT_END:Ab,INPUT_CANCEL:Bb,STATE_POSSIBLE:ec,STATE_BEGAN:fc,STATE_CHANGED:gc,STATE_ENDED:hc,STATE_RECOGNIZED:ic,STATE_CANCELLED:jc,STATE_FAILED:kc,DIRECTION_NONE:Cb,DIRECTION_LEFT:Db,DIRECTION_RIGHT:Eb,DIRECTION_UP:Fb,DIRECTION_DOWN:Gb,DIRECTION_HORIZONTAL:Hb,DIRECTION_VERTICAL:Ib,DIRECTION_ALL:Jb,Manager:fb,Input:y,TouchAction:T,TouchInput:Q,MouseInput:M,PointerEventInput:N,TouchMouseInput:S,SingleTouchInput:O,Recognizer:V,AttrRecognizer:Z,Tap:db,Pan:$,Swipe:cb,Pinch:_,Rotate:bb,Press:ab,on:n,off:o,each:g,merge:i,extend:h,inherit:j,bindFn:k,prefixed:v}),typeof define==kb&&define.amd?define(function(){return eb}):"undefined"!=typeof module&&module.exports?module.exports=eb:a[c]=eb}(window,document,"Hammer");
(function(a){"function"===typeof define&&define.amd?define(["jquery","hammerjs"],a):"object"===typeof exports?a(require("jquery"),require("hammerjs")):a(jQuery,Hammer)})(function(a,c){a.fn.hammer=function(e){return this.each(function(){var b=a(this);b.data("hammer")||b.data("hammer",new c(b[0],e))})};c.Manager.prototype.emit=function(c){return function(b,d){c.call(this,b,d);a(this.element).trigger({type:b,gesture:d})}}(c.Manager.prototype.emit)});

var mobile_scale = 1;

/*! * jScrollPane - v2.0.19mod */
(function(b,Y){var s=function(s){return b(s,Y)};"function"===typeof define&&define.amd?define(["jquery"],s):"object"===typeof exports?module.exports=s:s(jQuery)})(function(b,Y,s){b.fn.jScrollPane=function(C){function ga(c,C){function ha(a){var d,k,r,q,y,t=!1,m=!1;e=a;if(f===s)q=c.scrollTop(),y=c.scrollLeft(),c.css({padding:0}),l=c.innerWidth()+G,h=c.innerHeight(),c.width(l),f=b('<div class="jspPane" />').css("padding",ia).append(c.children()),g=b('<div class="jspContainer" />').css({width:l+"px",
    height:h+"px"}).append(f).appendTo(c),f.wrap('<div style="overflow:hidden;height:100%;width:100%;position:relative;"></div>').wrapInner("<div></div>");else{c.css("width","");t=e.stickToBottom&&va();m=e.stickToRight&&wa();if(r=c.innerWidth()+G!=l||c.outerHeight()!=h)l=c.innerWidth()+G,h=c.innerHeight(),g.css({width:l+"px",height:h+"px"});if(!r&&oa==v&&f.outerHeight()==u){c.width(l);return}oa=v;f.css("width","");c.width(l);g.find(">.jspVerticalBar,>.jspHorizontalBar").remove().end()}f.css("overflow",
    "auto");v=a.contentWidth?a.contentWidth:f[0].scrollWidth;u=f[0].scrollHeight;f.css("overflow","");ja=v/l;Z=u/h;z=1<Z;if((A=1<ja)||z){c.addClass("jspScrollable");if(a=e.maintainPosition&&(n||p))d=H(),k=I();ga();xa();ya();a&&(Q(m?v-l:d,!1),J(t?u-h:k,!1));za();Aa();Ba();e.enableKeyboardNavigation&&Ca();e.clickOnTrack&&Da();Ea();e.hijackInternalLinks&&Fa()}else c.removeClass("jspScrollable"),f.css({top:0,left:0,width:g.width()-G}),g.unbind(ka),f.find(":input,a").unbind("focus.jsp"),c.attr("tabindex",
    "-1").removeAttr("tabindex").unbind("keydown.jsp keypress.jsp"),pa();e.autoReinitialise&&!R?R=setInterval(function(){ha(e)},e.autoReinitialiseDelay):!e.autoReinitialise&&R&&clearInterval(R);q&&c.scrollTop(0)&&J(q,!1);y&&c.scrollLeft(0)&&Q(y,!1);c.trigger("jsp-initialised",[A||z])}function ga(){z&&(g.append(b('<div class="jspVerticalBar" />').append(b('<div class="jspCap jspCapTop" />'),b('<div class="jspTrack" />').append(b('<div class="jspDrag" />').append(b('<div class="jspDragTop" />'),b('<div class="jspDragBottom" />'))),
    b('<div class="jspCap jspCapBottom" />'))),$=g.find(">.jspVerticalBar"),D=$.find(">.jspTrack"),w=D.find(">.jspDrag"),e.showArrows&&(U=b('<a class="jspArrow jspArrowUp" />').bind("mousedown.jsp",K(0,-1)).bind("click.jsp",S),V=b('<a class="jspArrow jspArrowDown" />').bind("mousedown.jsp",K(0,1)).bind("click.jsp",S),e.arrowScrollOnHover&&(U.bind("mouseover.jsp",K(0,-1,U)),V.bind("mouseover.jsp",K(0,1,V))),qa(D,e.verticalArrowPositions,U,V)),L=h,g.find(">.jspVerticalBar>.jspCap:visible,>.jspVerticalBar>.jspArrow").each(function(){L-=
    b(this).outerHeight()}),w.hover(function(){w.addClass("jspHover")},function(){w.removeClass("jspHover")}).bind("mousedown.jsp",function(a){b("html").bind("dragstart.jsp selectstart.jsp",S);w.addClass("jspActive");var d=a.pageY-w.position().top;b("html").bind("mousemove.jsp",function(a){P(a.pageY-d,!1)}).bind("mouseup.jsp mouseleave.jsp",ra);return!1}),sa())}function sa(){D.height(L+"px");n=0;ta=e.verticalGutter+D.outerWidth();f.width(l-G);try{0===$.position().left&&f.css("margin-left",ta+"px")}catch(a){}}
    function xa(){A&&(g.append(b('<div class="jspHorizontalBar" />').append(b('<div class="jspCap jspCapLeft" />'),b('<div class="jspTrack" />').append(b('<div class="jspDrag" />').append(b('<div class="jspDragLeft" />'),b('<div class="jspDragRight" />'))),b('<div class="jspCap jspCapRight" />'))),aa=g.find(">.jspHorizontalBar"),E=aa.find(">.jspTrack"),x=E.find(">.jspDrag"),e.showArrows&&(W=b('<a class="jspArrow jspArrowLeft" />').bind("mousedown.jsp",K(-1,0)).bind("click.jsp",S),X=b('<a class="jspArrow jspArrowRight" />').bind("mousedown.jsp",
        K(1,0)).bind("click.jsp",S),e.arrowScrollOnHover&&(W.bind("mouseover.jsp",K(-1,0,W)),X.bind("mouseover.jsp",K(1,0,X))),qa(E,e.horizontalArrowPositions,W,X)),x.hover(function(){x.addClass("jspHover")},function(){x.removeClass("jspHover")}).bind("mousedown.jsp",function(a){b("html").bind("dragstart.jsp selectstart.jsp",S);x.addClass("jspActive");var d=a.pageX-x.position().left;b("html").bind("mousemove.jsp",function(a){T(a.pageX-d,!1)}).bind("mouseup.jsp mouseleave.jsp",ra);return!1}),B=g.innerWidth(),
        ua())}function ua(){g.find(">.jspHorizontalBar>.jspCap:visible,>.jspHorizontalBar>.jspArrow").each(function(){B-=b(this).outerWidth()});E.width(B+"px");p=0}function ya(){if(A&&z){var a=E.outerHeight(),d=D.outerWidth();L-=a;b(aa).find(">.jspCap:visible,>.jspArrow").each(function(){B+=b(this).outerWidth()});B-=d;h-=d;l-=a;E.parent().append(b('<div class="jspCorner" />').css("width",a+"px"));sa();ua()}A&&f.width(g.outerWidth()-G+"px");u=f.outerHeight();Z=u/h;A&&(M=Math.ceil(1/ja*B),M>e.horizontalDragMaxWidth?
        M=e.horizontalDragMaxWidth:M<e.horizontalDragMinWidth&&(M=e.horizontalDragMinWidth),x.width(M+"px"),N=B-M,la(p));z&&(O=Math.ceil(1/Z*L),O>e.verticalDragMaxHeight?O=e.verticalDragMaxHeight:O<e.verticalDragMinHeight&&(O=e.verticalDragMinHeight),w.height(O+"px"),F=L-O,ma(n))}function qa(a,d,k,b){var e="before",c="after";"os"==d&&(d=/Mac/.test(navigator.platform)?"after":"split");d==e?c=d:d==c&&(e=d,d=k,k=b,b=d);a[e](k)[c](b)}function K(a,d,b){return function(){Ga(a,d,this,b);this.blur();return!1}}function Ga(a,
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       d,k,c){k=b(k).addClass("jspActive");var q,y,t=!0,f=function(){0!==a&&m.scrollByX(a*e.arrowButtonSpeed);0!==d&&m.scrollByY(d*e.arrowButtonSpeed);y=setTimeout(f,t?e.initialDelay:e.arrowRepeatFreq);t=!1};f();q=c?"mouseout.jsp":"mouseup.jsp";c=c||b("html");c.bind(q,function(){k.removeClass("jspActive");y&&clearTimeout(y);y=null;c.unbind(q)})}function Da(){pa();z&&D.bind("mousedown.jsp",function(a){if(a.originalTarget===s||a.originalTarget==a.currentTarget){var d=b(this),k=d.offset(),c=a.pageY-k.top-n,
        q,y=!0,t=function(){var b=d.offset(),b=a.pageY-b.top-O/2,k=h*e.scrollPagePercent,g=F*k/(u-h);if(0>c)n-g>b?m.scrollByY(-k):P(b);else if(0<c)n+g<b?m.scrollByY(k):P(b);else{f();return}q=setTimeout(t,y?e.initialDelay:e.trackClickRepeatFreq);y=!1},f=function(){q&&clearTimeout(q);q=null;b(document).unbind("mouseup.jsp",f)};t();b(document).bind("mouseup.jsp",f);return!1}});A&&E.bind("mousedown.jsp",function(a){if(a.originalTarget===s||a.originalTarget==a.currentTarget){var d=b(this),k=d.offset(),c=a.pageX-
        k.left-p,q,f=!0,t=function(){var b=d.offset(),b=a.pageX-b.left-M/2,k=l*e.scrollPagePercent,h=N*k/(v-l);if(0>c)p-h>b?m.scrollByX(-k):T(b);else if(0<c)p+h<b?m.scrollByX(k):T(b);else{g();return}q=setTimeout(t,f?e.initialDelay:e.trackClickRepeatFreq);f=!1},g=function(){q&&clearTimeout(q);q=null;b(document).unbind("mouseup.jsp",g)};t();b(document).bind("mouseup.jsp",g);return!1}})}function pa(){E&&E.unbind("mousedown.jsp");D&&D.unbind("mousedown.jsp")}function ra(){b("html").unbind("dragstart.jsp selectstart.jsp mousemove.jsp mouseup.jsp mouseleave.jsp");
        w&&w.removeClass("jspActive");x&&x.removeClass("jspActive")}function P(a,d){z&&(0>a?a=0:a>F&&(a=F),d===s&&(d=e.animateScroll),d?m.animate(w,"top",a,ma):(w.css("top",a),ma(a)))}function ma(a){a===s&&(a=w.position().top);g.scrollTop(0);n=a;var d=0===n,b=n==F;a=-(a/F)*(u-h);if(ba!=d||ca!=b)ba=d,ca=b,c.trigger("jsp-arrow-change",[ba,ca,da,ea]);e.showArrows&&(U[d?"addClass":"removeClass"]("jspDisabled"),V[b?"addClass":"removeClass"]("jspDisabled"));f.css("top",a);c.trigger("jsp-scroll-y",[-a,d,b]).trigger("scroll")}
    function T(a,d){A&&(0>a?a=0:a>N&&(a=N),d===s&&(d=e.animateScroll),d?m.animate(x,"left",a,la):(x.css("left",a),la(a)))}function la(a){a===s&&(a=x.position().left);g.scrollTop(0);p=a;var d=0===p,b=p==N;a=-(a/N)*(v-l);if(da!=d||ea!=b)da=d,ea=b,c.trigger("jsp-arrow-change",[ba,ca,da,ea]);e.showArrows&&(W[d?"addClass":"removeClass"]("jspDisabled"),X[b?"addClass":"removeClass"]("jspDisabled"));f.css("left",a);c.trigger("jsp-scroll-x",[-a,d,b]).trigger("scroll")}function J(a,d){P(a/(u-h)*F,d)}function Q(a,
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          d){T(a/(v-l)*N,d)}function fa(a,d,c){var r,q,f=0,t=0,m,n,p;try{r=b(a)}catch(u){return}q=r.outerHeight();a=r.outerWidth();g.scrollTop(0);for(g.scrollLeft(0);!r.is(".jspPane");)if(f+=r.position().top,t+=r.position().left,r=r.offsetParent(),/^body|html$/i.test(r[0].nodeName))return;r=I();m=r+h;f<r||d?n=f-e.horizontalGutter:f+q>m&&(n=f-h+q+e.horizontalGutter);isNaN(n)||J(n,c);f=H();n=f+l;t<f||d?p=t-e.horizontalGutter:t+a>n&&(p=t-l+a+e.horizontalGutter);isNaN(p)||Q(p,c)}function H(){return-f.position().left}
    function I(){return-f.position().top}function va(){var a=u-h;return 20<a&&10>a-I()}function wa(){var a=v-l;return 20<a&&10>a-H()}function Aa(){g.unbind(ka).bind(ka,function(a,d,b,c){a=p;d=n;var f=e.mouseWheelSpeed;m.scrollBy(b*f,-c*f,!1);return a==p&&d==n})}function S(){return!1}function za(){f.find(":input,a").unbind("focus.jsp").bind("focus.jsp",function(a){fa(a.target,!1)})}function Ca(){function a(){var a=p,b=n;switch(d){case 40:m.scrollByY(e.keyboardSpeed,!1);break;case 38:m.scrollByY(-e.keyboardSpeed,
        !1);break;case 34:case 32:m.scrollByY(h*e.scrollPagePercent,!1);break;case 33:m.scrollByY(-h*e.scrollPagePercent,!1);break;case 39:m.scrollByX(e.keyboardSpeed,!1);break;case 37:m.scrollByX(-e.keyboardSpeed,!1)}return k=a!=p||b!=n}var d,k,r=[];A&&r.push(aa[0]);z&&r.push($[0]);f.focus(function(){c.focus()});c.attr("tabindex",0).unbind("keydown.jsp keypress.jsp").bind("keydown.jsp",function(c){if(c.target===this||r.length&&b(c.target).closest(r).length){var e=p,f=n;switch(c.keyCode){case 40:case 38:case 34:case 32:case 33:case 39:case 37:d=
        c.keyCode;a();break;case 35:J(u-h);d=null;break;case 36:J(0),d=null}k=c.keyCode==d&&e!=p||f!=n;return!k}}).bind("keypress.jsp",function(b){b.keyCode==d&&a();return!k});e.hideFocus?(c.css("outline","none"),"hideFocus"in g[0]&&c.attr("hideFocus",!0)):(c.css("outline",""),"hideFocus"in g[0]&&c.attr("hideFocus",!1))}function Ea(){if(location.hash&&1<location.hash.length){var a,d,c=escape(location.hash.substr(1));try{a=b("#"+c+', a[name="'+c+'"]')}catch(e){return}a.length&&f.find(c)&&(0===g.scrollTop()?
        d=setInterval(function(){0<g.scrollTop()&&(fa(a,!0),b(document).scrollTop(g.position().top),clearInterval(d))},50):(fa(a,!0),b(document).scrollTop(g.position().top)))}}function Fa(){b(document.body).data("jspHijack")||(b(document.body).data("jspHijack",!0),b(document.body).delegate("a[href*=#]","click",function(a){var d=this.href.substr(0,this.href.indexOf("#")),c=location.href,e;-1!==location.href.indexOf("#")&&(c=location.href.substr(0,location.href.indexOf("#")));if(d===c){d=escape(this.href.substr(this.href.indexOf("#")+
    1));try{e=b("#"+d+', a[name="'+d+'"]')}catch(f){return}e.length&&(d=e.closest(".jspScrollable"),c=d.data("jsp"),c.scrollToElement(e,!0),d[0].scrollIntoView&&(c=b(Y).scrollTop(),e=e.offset().top,(e<c||e>c+b(Y).height())&&d[0].scrollIntoView()),a.preventDefault())}}))}function Ba(){var a,d,b,c,e,f=!1;g.unbind("touchstart.jsp touchmove.jsp touchend.jsp click.jsp-touchclick").bind("touchstart.jsp",function(g){g=g.originalEvent.touches[0];a=H()/mobile_scale;d=I()/mobile_scale;b=g.pageX/mobile_scale;c=
        g.pageY/mobile_scale;e=!1;f=!0}).bind("touchmove.jsp",function(g){if(f){g=g.originalEvent.touches[0];var h=p,l=n;m.scrollTo(a+b-g.pageX/mobile_scale,d+c-g.pageY/mobile_scale);e=e||5<Math.abs(b-g.pageX/mobile_scale)||5<Math.abs(c-g.pageY/mobile_scale);return h==p&&l==n}}).bind("touchend.jsp",function(a){f=!1}).bind("click.jsp-touchclick",function(a){if(e)return e=!1})}var e,m=this,f,l,h,g,v,u,ja,Z,z,A,w,F,n,x,N,p,$,D,ta,L,O,U,V,aa,E,B,M,W,X,R,ia,G,oa,ba=!0,da=!0,ca=!1,ea=!1,na=c.clone(!1,!1).empty(),
        ka=b.fn.mwheelIntent?"mwheelIntent.jsp":"mousewheel.jsp";mobile_scale||(mobile_scale=1);"border-box"===c.css("box-sizing")?G=ia=0:(ia=c.css("paddingTop")+" "+c.css("paddingRight")+" "+c.css("paddingBottom")+" "+c.css("paddingLeft"),G=(parseInt(c.css("paddingLeft"),10)||0)+(parseInt(c.css("paddingRight"),10)||0));b.extend(m,{reinitialise:function(a){a=b.extend({},e,a);ha(a)},scrollToElement:function(a,d,b){fa(a,d,b)},scrollTo:function(a,d,b){Q(a,b);J(d,b)},scrollToX:function(a,b){Q(a,b)},scrollToY:function(a,
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       b){J(a,b)},scrollToPercentX:function(a,b){Q(a*(v-l),b)},scrollToPercentY:function(a,b){J(a*(u-h),b)},scrollBy:function(a,b,c){m.scrollByX(a,c);m.scrollByY(b,c)},scrollByX:function(a,b){var c=(H()+Math[0>a?"floor":"ceil"](a))/(v-l);T(c*N,b)},scrollByY:function(a,b){var c=(I()+Math[0>a?"floor":"ceil"](a))/(u-h);P(c*F,b)},positionDragX:function(a,b){T(a,b)},positionDragY:function(a,b){P(a,b)},animate:function(a,b,c,f){var g={};g[b]=c;a.animate(g,{duration:e.animateDuration,easing:e.animateEase,queue:!1,
        step:f})},getContentPositionX:function(){return H()},getContentPositionY:function(){return I()},getContentWidth:function(){return v},getContentHeight:function(){return u},getPercentScrolledX:function(){return H()/(v-l)},getPercentScrolledY:function(){return I()/(u-h)},getIsScrollableH:function(){return A},getIsScrollableV:function(){return z},getContentPane:function(){return f},scrollToBottom:function(a){P(F,a)},hijackInternalLinks:b.noop,destroy:function(){var a=I(),b=H();c.removeClass("jspScrollable").unbind(".jsp");
        c.replaceWith(na.append(f.children()));na.scrollTop(a);na.scrollLeft(b);R&&clearInterval(R)}});ha(C)}C=b.extend({},b.fn.jScrollPane.defaults,C);b.each(["arrowButtonSpeed","trackClickSpeed","keyboardSpeed"],function(){C[this]=C[this]||C.speed});return this.each(function(){var c=b(this),s=c.data("jsp");s?s.reinitialise(C):(b("script",c).filter('[type="text/javascript"],:not([type])').remove(),s=new ga(c,C),c.data("jsp",s))})};b.fn.jScrollPane.defaults={showArrows:!1,maintainPosition:!0,stickToBottom:!1,
    stickToRight:!1,clickOnTrack:!0,autoReinitialise:!1,autoReinitialiseDelay:500,verticalDragMinHeight:0,verticalDragMaxHeight:99999,horizontalDragMinWidth:0,horizontalDragMaxWidth:99999,contentWidth:s,animateScroll:!1,animateDuration:300,animateEase:"linear",hijackInternalLinks:!1,verticalGutter:4,horizontalGutter:4,mouseWheelSpeed:30,arrowButtonSpeed:0,arrowRepeatFreq:50,arrowScrollOnHover:!1,trackClickSpeed:0,trackClickRepeatFreq:70,verticalArrowPositions:"split",horizontalArrowPositions:"split",
    enableKeyboardNavigation:!0,hideFocus:!1,keyboardSpeed:0,initialDelay:300,speed:30,scrollPagePercent:.8}},this);


/* jQuery MD5 Plugin v1.2.1 */
(function(x){function n(b,g){var a=(b&65535)+(g&65535);return(b>>16)+(g>>16)+(a>>16)<<16|a&65535}function j(b,g,a,m,j,h){b=n(n(g,b),n(m,h));return n(b<<j|b>>>32-j,a)}function h(b,g,a,m,h,k,l){return j(g&a|~g&m,b,g,h,k,l)}function k(b,g,a,m,h,k,l){return j(g&m|a&~m,b,g,h,k,l)}function l(b,g,a,m,h,k,l){return j(a^(g|~m),b,g,h,k,l)}function p(b,g){b[g>>5]|=128<<g%32;b[(g+64>>>9<<4)+14]=g;var a,m,r,s,p,c=1732584193,d=-271733879,e=-1732584194,f=271733878;for(a=0;a<b.length;a+=16)m=c,r=d,s=e,p=f,c=h(c,
    d,e,f,b[a],7,-680876936),f=h(f,c,d,e,b[a+1],12,-389564586),e=h(e,f,c,d,b[a+2],17,606105819),d=h(d,e,f,c,b[a+3],22,-1044525330),c=h(c,d,e,f,b[a+4],7,-176418897),f=h(f,c,d,e,b[a+5],12,1200080426),e=h(e,f,c,d,b[a+6],17,-1473231341),d=h(d,e,f,c,b[a+7],22,-45705983),c=h(c,d,e,f,b[a+8],7,1770035416),f=h(f,c,d,e,b[a+9],12,-1958414417),e=h(e,f,c,d,b[a+10],17,-42063),d=h(d,e,f,c,b[a+11],22,-1990404162),c=h(c,d,e,f,b[a+12],7,1804603682),f=h(f,c,d,e,b[a+13],12,-40341101),e=h(e,f,c,d,b[a+14],17,-1502002290),
    d=h(d,e,f,c,b[a+15],22,1236535329),c=k(c,d,e,f,b[a+1],5,-165796510),f=k(f,c,d,e,b[a+6],9,-1069501632),e=k(e,f,c,d,b[a+11],14,643717713),d=k(d,e,f,c,b[a],20,-373897302),c=k(c,d,e,f,b[a+5],5,-701558691),f=k(f,c,d,e,b[a+10],9,38016083),e=k(e,f,c,d,b[a+15],14,-660478335),d=k(d,e,f,c,b[a+4],20,-405537848),c=k(c,d,e,f,b[a+9],5,568446438),f=k(f,c,d,e,b[a+14],9,-1019803690),e=k(e,f,c,d,b[a+3],14,-187363961),d=k(d,e,f,c,b[a+8],20,1163531501),c=k(c,d,e,f,b[a+13],5,-1444681467),f=k(f,c,d,e,b[a+2],9,-51403784),
    e=k(e,f,c,d,b[a+7],14,1735328473),d=k(d,e,f,c,b[a+12],20,-1926607734),c=j(d^e^f,c,d,b[a+5],4,-378558),f=j(c^d^e,f,c,b[a+8],11,-2022574463),e=j(f^c^d,e,f,b[a+11],16,1839030562),d=j(e^f^c,d,e,b[a+14],23,-35309556),c=j(d^e^f,c,d,b[a+1],4,-1530992060),f=j(c^d^e,f,c,b[a+4],11,1272893353),e=j(f^c^d,e,f,b[a+7],16,-155497632),d=j(e^f^c,d,e,b[a+10],23,-1094730640),c=j(d^e^f,c,d,b[a+13],4,681279174),f=j(c^d^e,f,c,b[a],11,-358537222),e=j(f^c^d,e,f,b[a+3],16,-722521979),d=j(e^f^c,d,e,b[a+6],23,76029189),c=j(d^
e^f,c,d,b[a+9],4,-640364487),f=j(c^d^e,f,c,b[a+12],11,-421815835),e=j(f^c^d,e,f,b[a+15],16,530742520),d=j(e^f^c,d,e,b[a+2],23,-995338651),c=l(c,d,e,f,b[a],6,-198630844),f=l(f,c,d,e,b[a+7],10,1126891415),e=l(e,f,c,d,b[a+14],15,-1416354905),d=l(d,e,f,c,b[a+5],21,-57434055),c=l(c,d,e,f,b[a+12],6,1700485571),f=l(f,c,d,e,b[a+3],10,-1894986606),e=l(e,f,c,d,b[a+10],15,-1051523),d=l(d,e,f,c,b[a+1],21,-2054922799),c=l(c,d,e,f,b[a+8],6,1873313359),f=l(f,c,d,e,b[a+15],10,-30611744),e=l(e,f,c,d,b[a+6],15,-1560198380),
    d=l(d,e,f,c,b[a+13],21,1309151649),c=l(c,d,e,f,b[a+4],6,-145523070),f=l(f,c,d,e,b[a+11],10,-1120210379),e=l(e,f,c,d,b[a+2],15,718787259),d=l(d,e,f,c,b[a+9],21,-343485551),c=n(c,m),d=n(d,r),e=n(e,s),f=n(f,p);return[c,d,e,f]}function t(b){var g,a="";for(g=0;g<32*b.length;g+=8)a+=String.fromCharCode(b[g>>5]>>>g%32&255);return a}function q(b){var g,a=[];a[(b.length>>2)-1]=void 0;for(g=0;g<a.length;g+=1)a[g]=0;for(g=0;g<8*b.length;g+=8)a[g>>5]|=(b.charCodeAt(g/8)&255)<<g%32;return a}function u(b,g){var a,
    h=q(b),j=[],k=[];j[15]=k[15]=void 0;16<h.length&&(h=p(h,8*b.length));for(a=0;16>a;a+=1)j[a]=h[a]^909522486,k[a]=h[a]^1549556828;a=p(j.concat(q(g)),512+8*g.length);return t(p(k.concat(a),640))}function v(b){var g="",a,h;for(h=0;h<b.length;h+=1)a=b.charCodeAt(h),g+="0123456789abcdef".charAt(a>>>4&15)+"0123456789abcdef".charAt(a&15);return g}function w(b){b=unescape(encodeURIComponent(b));return t(p(q(b),8*b.length))}x.md5=function(b,g,a){return!g?a?w(b):v(w(b)):a?u(unescape(encodeURIComponent(g)),unescape(encodeURIComponent(b))):
    v(u(unescape(encodeURIComponent(g)),unescape(encodeURIComponent(b))))}})("function"===typeof jQuery?jQuery:this);



/**
 * Phone Mask.
 */
!function(e){function t(){var e=document.createElement("input"),t="onpaste";return e.setAttribute(t,""),"function"==typeof e[t]?"paste":"input"}var n,a=t()+".mask",r=navigator.userAgent,i=/iphone/i.test(r),o=/android/i.test(r);e.mask={definitions:{9:"[0-9]",a:"[A-Za-z]","*":"[A-Za-z0-9]"},dataName:"rawMaskFn",placeholder:"_"},e.fn.extend({caret:function(e,t){var n;if(0!==this.length&&!this.is(":hidden"))return"number"==typeof e?(t="number"==typeof t?t:e,this.each(function(){this.setSelectionRange?this.setSelectionRange(e,t):this.createTextRange&&(n=this.createTextRange(),n.collapse(!0),n.moveEnd("character",t),n.moveStart("character",e),n.select())})):(this[0].setSelectionRange?(e=this[0].selectionStart,t=this[0].selectionEnd):document.selection&&document.selection.createRange&&(n=document.selection.createRange(),e=0-n.duplicate().moveStart("character",-1e5),t=e+n.text.length),{begin:e,end:t})},unmask:function(){return this.trigger("unmask")},mask:function(t,r){var c,l,s,u,f,h;return!t&&this.length>0?(c=e(this[0]),c.data(e.mask.dataName)()):(r=e.extend({placeholder:e.mask.placeholder,completed:null},r),l=e.mask.definitions,s=[],u=h=t.length,f=null,e.each(t.split(""),function(e,t){"?"==t?(h--,u=e):l[t]?(s.push(new RegExp(l[t])),null===f&&(f=s.length-1)):s.push(null)}),this.trigger("unmask").each(function(){function c(e){for(;++e<h&&!s[e];);return e}function d(e){for(;--e>=0&&!s[e];);return e}function m(e,t){var n,a;if(!(0>e)){for(n=e,a=c(t);h>n;n++)if(s[n]){if(!(h>a&&s[n].test(R[a])))break;R[n]=R[a],R[a]=r.placeholder,a=c(a)}b(),x.caret(Math.max(f,e))}}function p(e){var t,n,a,i;for(t=e,n=r.placeholder;h>t;t++)if(s[t]){if(a=c(t),i=R[t],R[t]=n,!(h>a&&s[a].test(i)))break;n=i}}function g(e){var t,n,a,r=e.which;8===r||46===r||i&&127===r?(t=x.caret(),n=t.begin,a=t.end,a-n===0&&(n=46!==r?d(n):a=c(n-1),a=46===r?c(a):a),k(n,a),m(n,a-1),e.preventDefault()):27==r&&(x.val(S),x.caret(0,y()),e.preventDefault())}function v(t){var n,a,i,l=t.which,u=x.caret();t.ctrlKey||t.altKey||t.metaKey||32>l||l&&(u.end-u.begin!==0&&(k(u.begin,u.end),m(u.begin,u.end-1)),n=c(u.begin-1),h>n&&(a=String.fromCharCode(l),s[n].test(a)&&(p(n),R[n]=a,b(),i=c(n),o?setTimeout(e.proxy(e.fn.caret,x,i),0):x.caret(i),r.completed&&i>=h&&r.completed.call(x))),t.preventDefault())}function k(e,t){var n;for(n=e;t>n&&h>n;n++)s[n]&&(R[n]=r.placeholder)}function b(){x.val(R.join(""))}function y(e){var t,n,a=x.val(),i=-1;for(t=0,pos=0;h>t;t++)if(s[t]){for(R[t]=r.placeholder;pos++<a.length;)if(n=a.charAt(pos-1),s[t].test(n)){R[t]=n,i=t;break}if(pos>a.length)break}else R[t]===a.charAt(pos)&&t!==u&&(pos++,i=t);return e?b():u>i+1?(x.val(""),k(0,h)):(b(),x.val(x.val().substring(0,i+1))),u?t:f}var x=e(this),R=e.map(t.split(""),function(e,t){return"?"!=e?l[e]?r.placeholder:e:void 0}),S=x.val();x.data(e.mask.dataName,function(){return e.map(R,function(e,t){return s[t]&&e!=r.placeholder?e:null}).join("")}),x.attr("readonly")||x.one("unmask",function(){x.unbind(".mask").removeData(e.mask.dataName)}).bind("focus.mask",function(){clearTimeout(n);var e;S=x.val(),e=y(),n=setTimeout(function(){b(),e==t.length?x.caret(0,e):x.caret(e)},10)}).bind("blur.mask",function(){y(),x.val()!=S&&x.change()}).bind("keydown.mask",g).bind("keypress.mask",v).bind(a,function(){setTimeout(function(){var e=y(!0);x.caret(e),r.completed&&e==x.val().length&&r.completed.call(x)},0)}),y()}))}})}(jQuery);


/**
 * JQuery Transit.
 */
!function(t,e){"function"==typeof define&&define.amd?define(["jquery"],e):"object"==typeof exports?module.exports=e(require("jquery")):e(t.jQuery)}(this,function(t){function e(t){if(t in p.style)return t;for(var e=["Moz","Webkit","O","ms"],n=t.charAt(0).toUpperCase()+t.substr(1),i=0;i<e.length;++i){var r=e[i]+n;if(r in p.style)return r}}function n(){return p.style[d.transform]="",p.style[d.transform]="rotateY(90deg)",""!==p.style[d.transform]}function i(t){return"string"==typeof t&&this.parse(t),this}function r(t,e,n){e===!0?t.queue(n):e?t.queue(e,n):t.each(function(){n.call(this)})}function s(e){var n=[];return t.each(e,function(e){e=t.camelCase(e),e=t.transit.propertyMap[e]||t.cssProps[e]||e,e=u(e),d[e]&&(e=u(d[e])),-1===t.inArray(e,n)&&n.push(e)}),n}function a(e,n,i,r){var a=s(e);t.cssEase[i]&&(i=t.cssEase[i]);var o=""+f(n)+" "+i;parseInt(r,10)>0&&(o+=" "+f(r));var u=[];return t.each(a,function(t,e){u.push(e+" "+o)}),u.join(", ")}function o(e,n){n||(t.cssNumber[e]=!0),t.transit.propertyMap[e]=d.transform,t.cssHooks[e]={get:function(n){var i=t(n).css("transit:transform");return i.get(e)},set:function(n,i){var r=t(n).css("transit:transform");r.setFromString(e,i),t(n).css({"transit:transform":r})}}}function u(t){return t.replace(/([A-Z])/g,function(t){return"-"+t.toLowerCase()})}function c(t,e){return"string"!=typeof t||t.match(/^[\-0-9\.]+$/)?""+t+e:t}function f(e){var n=e;return"string"!=typeof n||n.match(/^[\-0-9\.]+/)||(n=t.fx.speeds[n]||t.fx.speeds._default),c(n,"ms")}t.transit={version:"0.9.12",propertyMap:{marginLeft:"margin",marginRight:"margin",marginBottom:"margin",marginTop:"margin",paddingLeft:"padding",paddingRight:"padding",paddingBottom:"padding",paddingTop:"padding"},enabled:!0,useTransitionEnd:!1};var p=document.createElement("div"),d={},l=navigator.userAgent.toLowerCase().indexOf("chrome")>-1;d.transition=e("transition"),d.transitionDelay=e("transitionDelay"),d.transform=e("transform"),d.transformOrigin=e("transformOrigin"),d.filter=e("Filter"),d.transform3d=n();var h={transition:"transitionend",MozTransition:"transitionend",OTransition:"oTransitionEnd",WebkitTransition:"webkitTransitionEnd",msTransition:"MSTransitionEnd"},b=d.transitionEnd=h[d.transition]||null;for(var y in d)d.hasOwnProperty(y)&&"undefined"==typeof t.support[y]&&(t.support[y]=d[y]);return p=null,t.cssEase={_default:"ease","in":"ease-in",out:"ease-out","in-out":"ease-in-out",snap:"cubic-bezier(0,1,.5,1)",easeInCubic:"cubic-bezier(.550,.055,.675,.190)",easeOutCubic:"cubic-bezier(.215,.61,.355,1)",easeInOutCubic:"cubic-bezier(.645,.045,.355,1)",easeInCirc:"cubic-bezier(.6,.04,.98,.335)",easeOutCirc:"cubic-bezier(.075,.82,.165,1)",easeInOutCirc:"cubic-bezier(.785,.135,.15,.86)",easeInExpo:"cubic-bezier(.95,.05,.795,.035)",easeOutExpo:"cubic-bezier(.19,1,.22,1)",easeInOutExpo:"cubic-bezier(1,0,0,1)",easeInQuad:"cubic-bezier(.55,.085,.68,.53)",easeOutQuad:"cubic-bezier(.25,.46,.45,.94)",easeInOutQuad:"cubic-bezier(.455,.03,.515,.955)",easeInQuart:"cubic-bezier(.895,.03,.685,.22)",easeOutQuart:"cubic-bezier(.165,.84,.44,1)",easeInOutQuart:"cubic-bezier(.77,0,.175,1)",easeInQuint:"cubic-bezier(.755,.05,.855,.06)",easeOutQuint:"cubic-bezier(.23,1,.32,1)",easeInOutQuint:"cubic-bezier(.86,0,.07,1)",easeInSine:"cubic-bezier(.47,0,.745,.715)",easeOutSine:"cubic-bezier(.39,.575,.565,1)",easeInOutSine:"cubic-bezier(.445,.05,.55,.95)",easeInBack:"cubic-bezier(.6,-.28,.735,.045)",easeOutBack:"cubic-bezier(.175, .885,.32,1.275)",easeInOutBack:"cubic-bezier(.68,-.55,.265,1.55)"},t.cssHooks["transit:transform"]={get:function(e){return t(e).data("transform")||new i},set:function(e,n){var r=n;r instanceof i||(r=new i(r)),"WebkitTransform"!==d.transform||l?e.style[d.transform]=r.toString():e.style[d.transform]=r.toString(!0),t(e).data("transform",r)}},t.cssHooks.transform={set:t.cssHooks["transit:transform"].set},t.cssHooks.filter={get:function(t){return t.style[d.filter]},set:function(t,e){t.style[d.filter]=e}},t.fn.jquery<"1.8"&&(t.cssHooks.transformOrigin={get:function(t){return t.style[d.transformOrigin]},set:function(t,e){t.style[d.transformOrigin]=e}},t.cssHooks.transition={get:function(t){return t.style[d.transition]},set:function(t,e){t.style[d.transition]=e}}),o("scale"),o("scaleX"),o("scaleY"),o("translate"),o("rotate"),o("rotateX"),o("rotateY"),o("rotate3d"),o("perspective"),o("skewX"),o("skewY"),o("x",!0),o("y",!0),i.prototype={setFromString:function(t,e){var n="string"==typeof e?e.split(","):e.constructor===Array?e:[e];n.unshift(t),i.prototype.set.apply(this,n)},set:function(t){var e=Array.prototype.slice.apply(arguments,[1]);this.setter[t]?this.setter[t].apply(this,e):this[t]=e.join(",")},get:function(t){return this.getter[t]?this.getter[t].apply(this):this[t]||0},setter:{rotate:function(t){this.rotate=c(t,"deg")},rotateX:function(t){this.rotateX=c(t,"deg")},rotateY:function(t){this.rotateY=c(t,"deg")},scale:function(t,e){void 0===e&&(e=t),this.scale=t+","+e},skewX:function(t){this.skewX=c(t,"deg")},skewY:function(t){this.skewY=c(t,"deg")},perspective:function(t){this.perspective=c(t,"px")},x:function(t){this.set("translate",t,null)},y:function(t){this.set("translate",null,t)},translate:function(t,e){void 0===this._translateX&&(this._translateX=0),void 0===this._translateY&&(this._translateY=0),null!==t&&void 0!==t&&(this._translateX=c(t,"px")),null!==e&&void 0!==e&&(this._translateY=c(e,"px")),this.translate=this._translateX+","+this._translateY}},getter:{x:function(){return this._translateX||0},y:function(){return this._translateY||0},scale:function(){var t=(this.scale||"1,1").split(",");return t[0]&&(t[0]=parseFloat(t[0])),t[1]&&(t[1]=parseFloat(t[1])),t[0]===t[1]?t[0]:t},rotate3d:function(){for(var t=(this.rotate3d||"0,0,0,0deg").split(","),e=0;3>=e;++e)t[e]&&(t[e]=parseFloat(t[e]));return t[3]&&(t[3]=c(t[3],"deg")),t}},parse:function(t){var e=this;t.replace(/([a-zA-Z0-9]+)\((.*?)\)/g,function(t,n,i){e.setFromString(n,i)})},toString:function(t){var e=[];for(var n in this)if(this.hasOwnProperty(n)){if(!d.transform3d&&("rotateX"===n||"rotateY"===n||"perspective"===n||"transformOrigin"===n))continue;"_"!==n[0]&&(t&&"scale"===n?e.push(n+"3d("+this[n]+",1)"):t&&"translate"===n?e.push(n+"3d("+this[n]+",0)"):e.push(n+"("+this[n]+")"))}return e.join(" ")}},t.fn.transition=t.fn.transit=function(e,n,i,s){var o=this,u=0,c=!0,p=t.extend(!0,{},e);"function"==typeof n&&(s=n,n=void 0),"object"==typeof n&&(i=n.easing,u=n.delay||0,c="undefined"==typeof n.queue?!0:n.queue,s=n.complete,n=n.duration),"function"==typeof i&&(s=i,i=void 0),"undefined"!=typeof p.easing&&(i=p.easing,delete p.easing),"undefined"!=typeof p.duration&&(n=p.duration,delete p.duration),"undefined"!=typeof p.complete&&(s=p.complete,delete p.complete),"undefined"!=typeof p.queue&&(c=p.queue,delete p.queue),"undefined"!=typeof p.delay&&(u=p.delay,delete p.delay),"undefined"==typeof n&&(n=t.fx.speeds._default),"undefined"==typeof i&&(i=t.cssEase._default),n=f(n);var l=a(p,n,i,u),h=t.transit.enabled&&d.transition,y=h?parseInt(n,10)+parseInt(u,10):0;if(0===y){var g=function(t){o.css(p),s&&s.apply(o),t&&t()};return r(o,c,g),o}var m={},v=function(e){var n=!1,i=function(){n&&o.unbind(b,i),y>0&&o.each(function(){this.style[d.transition]=m[this]||null}),"function"==typeof s&&s.apply(o),"function"==typeof e&&e()};y>0&&b&&t.transit.useTransitionEnd?(n=!0,o.bind(b,i)):window.setTimeout(i,y),o.each(function(){y>0&&(this.style[d.transition]=l),t(this).css(p)})},z=function(t){this.offsetWidth,v(t)};return r(o,c,z),this},t.transit.getTransitionValue=a,t});







/*
 * imagesLoaded PACKAGED v4.1.1
 * JavaScript is all like "You images are done yet or what?"
 * MIT License
 */

!function(t,e){"function"==typeof define&&define.amd?define("ev-emitter/ev-emitter",e):"object"==typeof module&&module.exports?module.exports=e():t.EvEmitter=e()}("undefined"!=typeof window?window:this,function(){function t(){}var e=t.prototype;return e.on=function(t,e){if(t&&e){var i=this._events=this._events||{},n=i[t]=i[t]||[];return-1==n.indexOf(e)&&n.push(e),this}},e.once=function(t,e){if(t&&e){this.on(t,e);var i=this._onceEvents=this._onceEvents||{},n=i[t]=i[t]||{};return n[e]=!0,this}},e.off=function(t,e){var i=this._events&&this._events[t];if(i&&i.length){var n=i.indexOf(e);return-1!=n&&i.splice(n,1),this}},e.emitEvent=function(t,e){var i=this._events&&this._events[t];if(i&&i.length){var n=0,o=i[n];e=e||[];for(var r=this._onceEvents&&this._onceEvents[t];o;){var s=r&&r[o];s&&(this.off(t,o),delete r[o]),o.apply(this,e),n+=s?0:1,o=i[n]}return this}},t}),function(t,e){"use strict";"function"==typeof define&&define.amd?define(["ev-emitter/ev-emitter"],function(i){return e(t,i)}):"object"==typeof module&&module.exports?module.exports=e(t,require("ev-emitter")):t.imagesLoaded=e(t,t.EvEmitter)}(window,function(t,e){function i(t,e){for(var i in e)t[i]=e[i];return t}function n(t){var e=[];if(Array.isArray(t))e=t;else if("number"==typeof t.length)for(var i=0;i<t.length;i++)e.push(t[i]);else e.push(t);return e}function o(t,e,r){return this instanceof o?("string"==typeof t&&(t=document.querySelectorAll(t)),this.elements=n(t),this.options=i({},this.options),"function"==typeof e?r=e:i(this.options,e),r&&this.on("always",r),this.getImages(),h&&(this.jqDeferred=new h.Deferred),void setTimeout(function(){this.check()}.bind(this))):new o(t,e,r)}function r(t){this.img=t}function s(t,e){this.url=t,this.element=e,this.img=new Image}var h=t.jQuery,a=t.console;o.prototype=Object.create(e.prototype),o.prototype.options={},o.prototype.getImages=function(){this.images=[],this.elements.forEach(this.addElementImages,this)},o.prototype.addElementImages=function(t){"IMG"==t.nodeName&&this.addImage(t),this.options.background===!0&&this.addElementBackgroundImages(t);var e=t.nodeType;if(e&&d[e]){for(var i=t.querySelectorAll("img"),n=0;n<i.length;n++){var o=i[n];this.addImage(o)}if("string"==typeof this.options.background){var r=t.querySelectorAll(this.options.background);for(n=0;n<r.length;n++){var s=r[n];this.addElementBackgroundImages(s)}}}};var d={1:!0,9:!0,11:!0};return o.prototype.addElementBackgroundImages=function(t){var e=getComputedStyle(t);if(e)for(var i=/url\((['"])?(.*?)\1\)/gi,n=i.exec(e.backgroundImage);null!==n;){var o=n&&n[2];o&&this.addBackground(o,t),n=i.exec(e.backgroundImage)}},o.prototype.addImage=function(t){var e=new r(t);this.images.push(e)},o.prototype.addBackground=function(t,e){var i=new s(t,e);this.images.push(i)},o.prototype.check=function(){function t(t,i,n){setTimeout(function(){e.progress(t,i,n)})}var e=this;return this.progressedCount=0,this.hasAnyBroken=!1,this.images.length?void this.images.forEach(function(e){e.once("progress",t),e.check()}):void this.complete()},o.prototype.progress=function(t,e,i){this.progressedCount++,this.hasAnyBroken=this.hasAnyBroken||!t.isLoaded,this.emitEvent("progress",[this,t,e]),this.jqDeferred&&this.jqDeferred.notify&&this.jqDeferred.notify(this,t),this.progressedCount==this.images.length&&this.complete(),this.options.debug&&a&&a.log("progress: "+i,t,e)},o.prototype.complete=function(){var t=this.hasAnyBroken?"fail":"done";if(this.isComplete=!0,this.emitEvent(t,[this]),this.emitEvent("always",[this]),this.jqDeferred){var e=this.hasAnyBroken?"reject":"resolve";this.jqDeferred[e](this)}},r.prototype=Object.create(e.prototype),r.prototype.check=function(){var t=this.getIsImageComplete();return t?void this.confirm(0!==this.img.naturalWidth,"naturalWidth"):(this.proxyImage=new Image,this.proxyImage.addEventListener("load",this),this.proxyImage.addEventListener("error",this),this.img.addEventListener("load",this),this.img.addEventListener("error",this),void(this.proxyImage.src=this.img.src))},r.prototype.getIsImageComplete=function(){return this.img.complete&&void 0!==this.img.naturalWidth},r.prototype.confirm=function(t,e){this.isLoaded=t,this.emitEvent("progress",[this,this.img,e])},r.prototype.handleEvent=function(t){var e="on"+t.type;this[e]&&this[e](t)},r.prototype.onload=function(){this.confirm(!0,"onload"),this.unbindEvents()},r.prototype.onerror=function(){this.confirm(!1,"onerror"),this.unbindEvents()},r.prototype.unbindEvents=function(){this.proxyImage.removeEventListener("load",this),this.proxyImage.removeEventListener("error",this),this.img.removeEventListener("load",this),this.img.removeEventListener("error",this)},s.prototype=Object.create(r.prototype),s.prototype.check=function(){this.img.addEventListener("load",this),this.img.addEventListener("error",this),this.img.src=this.url;var t=this.getIsImageComplete();t&&(this.confirm(0!==this.img.naturalWidth,"naturalWidth"),this.unbindEvents())},s.prototype.unbindEvents=function(){this.img.removeEventListener("load",this),this.img.removeEventListener("error",this)},s.prototype.confirm=function(t,e){this.isLoaded=t,this.emitEvent("progress",[this,this.element,e])},o.makeJQueryPlugin=function(e){e=e||t.jQuery,e&&(h=e,h.fn.imagesLoaded=function(t,e){var i=new o(this,t,e);return i.jqDeferred.promise(h(this))})},o.makeJQueryPlugin(),o});


/**
 * MarkerCluster.
 */
function MarkerClusterer(t,e,r){this.extend(MarkerClusterer,google.maps.OverlayView),this.map_=t,this.markers_=[],this.clusters_=[],this.sizes=[53,56,66,78,90],this.styles_=[],this.ready_=!1;var s=r||{};this.gridSize_=s.gridSize||60,this.minClusterSize_=s.minimumClusterSize||2,this.maxZoom_=s.maxZoom||null,this.styles_=s.styles||[],this.imagePath_=s.imagePath||this.MARKER_CLUSTER_IMAGE_PATH_,this.imageExtension_=s.imageExtension||this.MARKER_CLUSTER_IMAGE_EXTENSION_,this.zoomOnClick_=!0,void 0!=s.zoomOnClick&&(this.zoomOnClick_=s.zoomOnClick),this.averageCenter_=!1,void 0!=s.averageCenter&&(this.averageCenter_=s.averageCenter),this.setupStyles_(),this.setMap(t),this.prevZoom_=this.map_.getZoom();var i=this;google.maps.event.addListener(this.map_,"zoom_changed",function(){var t=i.map_.getZoom();i.prevZoom_!=t&&(i.prevZoom_=t,i.resetViewport())}),google.maps.event.addListener(this.map_,"idle",function(){i.redraw()}),e&&e.length&&this.addMarkers(e,!1)}function Cluster(t){this.markerClusterer_=t,this.map_=t.getMap(),this.gridSize_=t.getGridSize(),this.minClusterSize_=t.getMinClusterSize(),this.averageCenter_=t.isAverageCenter(),this.center_=null,this.markers_=[],this.bounds_=null,this.clusterIcon_=new ClusterIcon(this,t.getStyles(),t.getGridSize())}function ClusterIcon(t,e,r){t.getMarkerClusterer().extend(ClusterIcon,google.maps.OverlayView),this.styles_=e,this.padding_=r||0,this.cluster_=t,this.center_=null,this.map_=t.getMap(),this.div_=null,this.sums_=null,this.visible_=!1,this.setMap(this.map_)}MarkerClusterer.prototype.MARKER_CLUSTER_IMAGE_PATH_="../images/m",MarkerClusterer.prototype.MARKER_CLUSTER_IMAGE_EXTENSION_="png",MarkerClusterer.prototype.extend=function(t,e){return function(t){for(var e in t.prototype)this.prototype[e]=t.prototype[e];return this}.apply(t,[e])},MarkerClusterer.prototype.onAdd=function(){this.setReady_(!0)},MarkerClusterer.prototype.draw=function(){},MarkerClusterer.prototype.setupStyles_=function(){if(!this.styles_.length)for(var t,e=0;t=this.sizes[e];e++)this.styles_.push({url:this.imagePath_+(e+1)+"."+this.imageExtension_,height:t,width:t})},MarkerClusterer.prototype.fitMapToMarkers=function(){for(var t,e=this.getMarkers(),r=new google.maps.LatLngBounds,s=0;t=e[s];s++)r.extend(t.getPosition());this.map_.fitBounds(r)},MarkerClusterer.prototype.setStyles=function(t){this.styles_=t},MarkerClusterer.prototype.getStyles=function(){return this.styles_},MarkerClusterer.prototype.isZoomOnClick=function(){return this.zoomOnClick_},MarkerClusterer.prototype.isAverageCenter=function(){return this.averageCenter_},MarkerClusterer.prototype.getMarkers=function(){return this.markers_},MarkerClusterer.prototype.getTotalMarkers=function(){return this.markers_.length},MarkerClusterer.prototype.setMaxZoom=function(t){this.maxZoom_=t},MarkerClusterer.prototype.getMaxZoom=function(){return this.maxZoom_},MarkerClusterer.prototype.calculator_=function(t,e){for(var r=0,s=t.length,i=s;0!==i;)i=parseInt(i/10,10),r++;return r=Math.min(r,e),{text:s,index:r}},MarkerClusterer.prototype.setCalculator=function(t){this.calculator_=t},MarkerClusterer.prototype.getCalculator=function(){return this.calculator_},MarkerClusterer.prototype.addMarkers=function(t,e){for(var r,s=0;r=t[s];s++)this.pushMarkerTo_(r);e||this.redraw()},MarkerClusterer.prototype.pushMarkerTo_=function(t){if(t.isAdded=!1,t.draggable){var e=this;google.maps.event.addListener(t,"dragend",function(){t.isAdded=!1,e.repaint()})}this.markers_.push(t)},MarkerClusterer.prototype.addMarker=function(t,e){this.pushMarkerTo_(t),e||this.redraw()},MarkerClusterer.prototype.removeMarker_=function(t){var e=-1;if(this.markers_.indexOf)e=this.markers_.indexOf(t);else for(var r,s=0;r=this.markers_[s];s++)if(r==t){e=s;break}return-1==e?!1:(t.setMap(null),this.markers_.splice(e,1),!0)},MarkerClusterer.prototype.removeMarker=function(t,e){var r=this.removeMarker_(t);return!e&&r?(this.resetViewport(),this.redraw(),!0):!1},MarkerClusterer.prototype.removeMarkers=function(t,e){for(var r,s=!1,i=0;r=t[i];i++){var o=this.removeMarker_(r);s=s||o}return!e&&s?(this.resetViewport(),this.redraw(),!0):void 0},MarkerClusterer.prototype.setReady_=function(t){this.ready_||(this.ready_=t,this.createClusters_())},MarkerClusterer.prototype.getTotalClusters=function(){return this.clusters_.length},MarkerClusterer.prototype.getMap=function(){return this.map_},MarkerClusterer.prototype.setMap=function(t){this.map_=t},MarkerClusterer.prototype.getGridSize=function(){return this.gridSize_},MarkerClusterer.prototype.setGridSize=function(t){this.gridSize_=t},MarkerClusterer.prototype.getMinClusterSize=function(){return this.minClusterSize_},MarkerClusterer.prototype.setMinClusterSize=function(t){this.minClusterSize_=t},MarkerClusterer.prototype.getExtendedBounds=function(t){var e=this.getProjection(),r=new google.maps.LatLng(t.getNorthEast().lat(),t.getNorthEast().lng()),s=new google.maps.LatLng(t.getSouthWest().lat(),t.getSouthWest().lng()),i=e.fromLatLngToDivPixel(r);i.x+=this.gridSize_,i.y-=this.gridSize_;var o=e.fromLatLngToDivPixel(s);o.x-=this.gridSize_,o.y+=this.gridSize_;var n=e.fromDivPixelToLatLng(i),h=e.fromDivPixelToLatLng(o);return t.extend(n),t.extend(h),t},MarkerClusterer.prototype.isMarkerInBounds_=function(t,e){return e.contains(t.getPosition())},MarkerClusterer.prototype.clearMarkers=function(){this.resetViewport(!0),this.markers_=[]},MarkerClusterer.prototype.resetViewport=function(t){for(var e,r=0;e=this.clusters_[r];r++)e.remove();for(var s,r=0;s=this.markers_[r];r++)s.isAdded=!1,t&&s.setMap(null);this.clusters_=[]},MarkerClusterer.prototype.repaint=function(){var t=this.clusters_.slice();this.clusters_.length=0,this.resetViewport(),this.redraw(),window.setTimeout(function(){for(var e,r=0;e=t[r];r++)e.remove()},0)},MarkerClusterer.prototype.redraw=function(){this.createClusters_()},MarkerClusterer.prototype.distanceBetweenPoints_=function(t,e){if(!t||!e)return 0;var r=6371,s=(e.lat()-t.lat())*Math.PI/180,i=(e.lng()-t.lng())*Math.PI/180,o=Math.sin(s/2)*Math.sin(s/2)+Math.cos(t.lat()*Math.PI/180)*Math.cos(e.lat()*Math.PI/180)*Math.sin(i/2)*Math.sin(i/2),n=2*Math.atan2(Math.sqrt(o),Math.sqrt(1-o)),h=r*n;return h},MarkerClusterer.prototype.addToClosestCluster_=function(t){for(var e,r=4e4,s=null,i=(t.getPosition(),0);e=this.clusters_[i];i++){var o=e.getCenter();if(o){var n=this.distanceBetweenPoints_(o,t.getPosition());r>n&&(r=n,s=e)}}if(s&&s.isMarkerInClusterBounds(t))s.addMarker(t);else{var e=new Cluster(this);e.addMarker(t),this.clusters_.push(e)}},MarkerClusterer.prototype.createClusters_=function(){if(this.ready_)for(var t,e=new google.maps.LatLngBounds(this.map_.getBounds().getSouthWest(),this.map_.getBounds().getNorthEast()),r=this.getExtendedBounds(e),s=0;t=this.markers_[s];s++)!t.isAdded&&this.isMarkerInBounds_(t,r)&&this.addToClosestCluster_(t)},Cluster.prototype.isMarkerAlreadyAdded=function(t){if(this.markers_.indexOf)return-1!=this.markers_.indexOf(t);for(var e,r=0;e=this.markers_[r];r++)if(e==t)return!0;return!1},Cluster.prototype.addMarker=function(t){if(this.isMarkerAlreadyAdded(t))return!1;if(this.center_){if(this.averageCenter_){var e=this.markers_.length+1,r=(this.center_.lat()*(e-1)+t.getPosition().lat())/e,s=(this.center_.lng()*(e-1)+t.getPosition().lng())/e;this.center_=new google.maps.LatLng(r,s),this.calculateBounds_()}}else this.center_=t.getPosition(),this.calculateBounds_();t.isAdded=!0,this.markers_.push(t);var i=this.markers_.length;if(i<this.minClusterSize_&&t.getMap()!=this.map_&&t.setMap(this.map_),i==this.minClusterSize_)for(var o=0;i>o;o++)this.markers_[o].setMap(null);return i>=this.minClusterSize_&&t.setMap(null),this.updateIcon(),!0},Cluster.prototype.getMarkerClusterer=function(){return this.markerClusterer_},Cluster.prototype.getBounds=function(){for(var t,e=new google.maps.LatLngBounds(this.center_,this.center_),r=this.getMarkers(),s=0;t=r[s];s++)e.extend(t.getPosition());return e},Cluster.prototype.remove=function(){this.clusterIcon_.remove(),this.markers_.length=0,delete this.markers_},Cluster.prototype.getSize=function(){return this.markers_.length},Cluster.prototype.getMarkers=function(){return this.markers_},Cluster.prototype.getCenter=function(){return this.center_},Cluster.prototype.calculateBounds_=function(){var t=new google.maps.LatLngBounds(this.center_,this.center_);this.bounds_=this.markerClusterer_.getExtendedBounds(t)},Cluster.prototype.isMarkerInClusterBounds=function(t){return this.bounds_.contains(t.getPosition())},Cluster.prototype.getMap=function(){return this.map_},Cluster.prototype.updateIcon=function(){var t=this.map_.getZoom(),e=this.markerClusterer_.getMaxZoom();if(e&&t>e)for(var r,s=0;r=this.markers_[s];s++)r.setMap(this.map_);else{if(this.markers_.length<this.minClusterSize_)return void this.clusterIcon_.hide();var i=this.markerClusterer_.getStyles().length,o=this.markerClusterer_.getCalculator()(this.markers_,i);this.clusterIcon_.setCenter(this.center_),this.clusterIcon_.setSums(o),this.clusterIcon_.show()}},ClusterIcon.prototype.triggerClusterClick=function(t){var e=this.cluster_.getMarkerClusterer();google.maps.event.trigger(e,"clusterclick",this.cluster_,t),e.isZoomOnClick()&&this.map_.fitBounds(this.cluster_.getBounds())},ClusterIcon.prototype.onAdd=function(){if(this.div_=document.createElement("DIV"),this.visible_){var t=this.getPosFromLatLng_(this.center_);this.div_.style.cssText=this.createCss(t),this.div_.innerHTML=this.sums_.text}var e=this.getPanes();e.overlayMouseTarget.appendChild(this.div_);var r=this,s=!1;google.maps.event.addDomListener(this.div_,"click",function(t){s||r.triggerClusterClick(t)}),google.maps.event.addDomListener(this.div_,"mousedown",function(){s=!1}),google.maps.event.addDomListener(this.div_,"mousemove",function(){s=!0})},ClusterIcon.prototype.getPosFromLatLng_=function(t){var e=this.getProjection().fromLatLngToDivPixel(t);return"object"==typeof this.iconAnchor_&&2===this.iconAnchor_.length?(e.x-=this.iconAnchor_[0],e.y-=this.iconAnchor_[1]):(e.x-=parseInt(this.width_/2,10),e.y-=parseInt(this.height_/2,10)),e},ClusterIcon.prototype.draw=function(){if(this.visible_){var t=this.getPosFromLatLng_(this.center_);this.div_.style.top=t.y+"px",this.div_.style.left=t.x+"px"}},ClusterIcon.prototype.hide=function(){this.div_&&(this.div_.style.display="none"),this.visible_=!1},ClusterIcon.prototype.show=function(){if(this.div_){var t=this.getPosFromLatLng_(this.center_);this.div_.style.cssText=this.createCss(t),this.div_.style.display=""}this.visible_=!0},ClusterIcon.prototype.remove=function(){this.setMap(null)},ClusterIcon.prototype.onRemove=function(){this.div_&&this.div_.parentNode&&(this.hide(),this.div_.parentNode.removeChild(this.div_),this.div_=null)},ClusterIcon.prototype.setSums=function(t){this.sums_=t,this.text_=t.text,this.index_=t.index,this.div_&&(this.div_.innerHTML=t.text),this.useStyle()},ClusterIcon.prototype.useStyle=function(){var t=Math.max(0,this.sums_.index-1);t=Math.min(this.styles_.length-1,t);var e=this.styles_[t];this.url_=e.url,this.height_=e.height,this.width_=e.width,this.textColor_=e.textColor,this.anchor_=e.anchor,this.textSize_=e.textSize,this.backgroundPosition_=e.backgroundPosition,this.iconAnchor_=e.iconAnchor},ClusterIcon.prototype.setCenter=function(t){this.center_=t},ClusterIcon.prototype.createCss=function(t){var e=[];e.push("background-image:url("+this.url_+");");var r=this.backgroundPosition_?this.backgroundPosition_:"0 0";e.push("background-position:"+r+";"),"object"==typeof this.anchor_?("number"==typeof this.anchor_[0]&&this.anchor_[0]>0&&this.anchor_[0]<this.height_?e.push("height:"+(this.height_-this.anchor_[0])+"px; padding-top:"+this.anchor_[0]+"px;"):"number"==typeof this.anchor_[0]&&this.anchor_[0]<0&&-this.anchor_[0]<this.height_?e.push("height:"+this.height_+"px; line-height:"+(this.height_+this.anchor_[0])+"px;"):e.push("height:"+this.height_+"px; line-height:"+this.height_+"px;"),"number"==typeof this.anchor_[1]&&this.anchor_[1]>0&&this.anchor_[1]<this.width_?e.push("width:"+(this.width_-this.anchor_[1])+"px; padding-left:"+this.anchor_[1]+"px;"):e.push("width:"+this.width_+"px; text-align:center;")):e.push("height:"+this.height_+"px; line-height:"+this.height_+"px; width:"+this.width_+"px; text-align:center;");var s=this.textColor_?this.textColor_:"black",i=this.textSize_?this.textSize_:11;return e.push("cursor:pointer; top:"+t.y+"px; left:"+t.x+"px; color:"+s+"; position:absolute; font-size:"+i+"px; font-family:Arial,sans-serif; font-weight:bold"),e.join("")};




/**
 * Modernizr and Raphael.
 */
window.Modernizr=function(t,e,r){function n(t){x.cssText=t}function i(t,e){return n(k.join(t+";")+(e||""))}function a(t,e){return typeof t===e}function o(t,e){return!!~(""+t).indexOf(e)}function s(t,e){for(var n in t){var i=t[n];if(!o(i,"-")&&x[i]!==r)return"pfx"==e?i:!0}return!1}function l(t,e,n){for(var i in t){var o=e[t[i]];if(o!==r)return n===!1?t[i]:a(o,"function")?o.bind(n||e):o}return!1}function u(t,e,r){var n=t.charAt(0).toUpperCase()+t.slice(1),i=(t+" "+S.join(n+" ")+n).split(" ");return a(e,"string")||a(e,"undefined")?s(i,e):(i=(t+" "+B.join(n+" ")+n).split(" "),l(i,e,r))}function h(){d.input=function(r){for(var n=0,i=r.length;i>n;n++)N[r[n]]=r[n]in b;return N.list&&(N.list=!!e.createElement("datalist")&&!!t.HTMLDataListElement),N}("autocomplete autofocus list placeholder max min multiple pattern required step".split(" ")),d.inputtypes=function(t){for(var n,i,a,o=0,s=t.length;s>o;o++)b.setAttribute("type",i=t[o]),n="text"!==b.type,n&&(b.value=w,b.style.cssText="position:absolute;visibility:hidden;",/^range$/.test(i)&&b.style.WebkitAppearance!==r?(v.appendChild(b),a=e.defaultView,n=a.getComputedStyle&&"textfield"!==a.getComputedStyle(b,null).WebkitAppearance&&0!==b.offsetHeight,v.removeChild(b)):/^(search|tel)$/.test(i)||(n=/^(url|email)$/.test(i)?b.checkValidity&&b.checkValidity()===!1:b.value!=w)),A[t[o]]=!!n;return A}("search tel url email datetime date month week time datetime-local number range color".split(" "))}var c,f,p="2.7.0",d={},g=!0,v=e.documentElement,m="modernizr",y=e.createElement(m),x=y.style,b=e.createElement("input"),w=":)",_={}.toString,k=" -webkit- -moz- -o- -ms- ".split(" "),C="Webkit Moz O ms",S=C.split(" "),B=C.toLowerCase().split(" "),E={svg:"http://www.w3.org/2000/svg"},T={},A={},N={},L=[],M=L.slice,P=function(t,r,n,i){var a,o,s,l,u=e.createElement("div"),h=e.body,c=h||e.createElement("body");if(parseInt(n,10))for(;n--;)s=e.createElement("div"),s.id=i?i[n]:m+(n+1),u.appendChild(s);return a=["&#173;",'<style id="s',m,'">',t,"</style>"].join(""),u.id=m,(h?u:c).innerHTML+=a,c.appendChild(u),h||(c.style.background="",c.style.overflow="hidden",l=v.style.overflow,v.style.overflow="hidden",v.appendChild(c)),o=r(u,t),h?u.parentNode.removeChild(u):(c.parentNode.removeChild(c),v.style.overflow=l),!!o},z=function(){function t(t,i){i=i||e.createElement(n[t]||"div"),t="on"+t;var o=t in i;return o||(i.setAttribute||(i=e.createElement("div")),i.setAttribute&&i.removeAttribute&&(i.setAttribute(t,""),o=a(i[t],"function"),a(i[t],"undefined")||(i[t]=r),i.removeAttribute(t))),i=null,o}var n={select:"input",change:"input",submit:"form",reset:"form",error:"img",load:"img",abort:"img"};return t}(),F={}.hasOwnProperty;f=a(F,"undefined")||a(F.call,"undefined")?function(t,e){return e in t&&a(t.constructor.prototype[e],"undefined")}:function(t,e){return F.call(t,e)},Function.prototype.bind||(Function.prototype.bind=function(t){var e=this;if("function"!=typeof e)throw new TypeError;var r=M.call(arguments,1),n=function(){if(this instanceof n){var i=function(){};i.prototype=e.prototype;var a=new i,o=e.apply(a,r.concat(M.call(arguments)));return Object(o)===o?o:a}return e.apply(t,r.concat(M.call(arguments)))};return n}),T.flexbox=function(){return u("flexWrap")},T.canvas=function(){var t=e.createElement("canvas");return!!t.getContext&&!!t.getContext("2d")},T.canvastext=function(){return!!d.canvas&&!!a(e.createElement("canvas").getContext("2d").fillText,"function")},T.webgl=function(){return!!t.WebGLRenderingContext},T.touch=function(){var r;return"ontouchstart"in t||t.DocumentTouch&&e instanceof DocumentTouch?r=!0:P(["@media (",k.join("touch-enabled),("),m,")","{#modernizr{top:9px;position:absolute}}"].join(""),function(t){r=9===t.offsetTop}),r},T.geolocation=function(){return"geolocation"in navigator},T.postmessage=function(){return!!t.postMessage},T.websqldatabase=function(){return!!t.openDatabase},T.indexedDB=function(){return!!u("indexedDB",t)},T.hashchange=function(){return z("hashchange",t)&&(e.documentMode===r||e.documentMode>7)},T.history=function(){return!!t.history&&!!history.pushState},T.draganddrop=function(){var t=e.createElement("div");return"draggable"in t||"ondragstart"in t&&"ondrop"in t},T.websockets=function(){return"WebSocket"in t||"MozWebSocket"in t},T.rgba=function(){return n("background-color:rgba(150,255,150,.5)"),o(x.backgroundColor,"rgba")},T.hsla=function(){return n("background-color:hsla(120,40%,100%,.5)"),o(x.backgroundColor,"rgba")||o(x.backgroundColor,"hsla")},T.multiplebgs=function(){return n("background:url(https://),url(https://),red url(https://)"),/(url\s*\(.*?){3}/.test(x.background)},T.backgroundsize=function(){return u("backgroundSize")},T.borderimage=function(){return u("borderImage")},T.borderradius=function(){return u("borderRadius")},T.boxshadow=function(){return u("boxShadow")},T.textshadow=function(){return""===e.createElement("div").style.textShadow},T.opacity=function(){return i("opacity:.55"),/^0.55$/.test(x.opacity)},T.cssanimations=function(){return u("animationName")},T.csscolumns=function(){return u("columnCount")},T.cssgradients=function(){var t="background-image:",e="gradient(linear,left top,right bottom,from(#9f9),to(white));",r="linear-gradient(left top,#9f9, white);";return n((t+"-webkit- ".split(" ").join(e+t)+k.join(r+t)).slice(0,-t.length)),o(x.backgroundImage,"gradient")},T.cssreflections=function(){return u("boxReflect")},T.csstransforms=function(){return!!u("transform")},T.csstransforms3d=function(){var t=!!u("perspective");return t&&"webkitPerspective"in v.style&&P("@media (transform-3d),(-webkit-transform-3d){#modernizr{left:9px;position:absolute;height:3px;}}",function(e){t=9===e.offsetLeft&&3===e.offsetHeight}),t},T.csstransitions=function(){return u("transition")},T.fontface=function(){var t;return P('@font-face {font-family:"font";src:url("https://")}',function(r,n){var i=e.getElementById("smodernizr"),a=i.sheet||i.styleSheet,o=a?a.cssRules&&a.cssRules[0]?a.cssRules[0].cssText:a.cssText||"":"";t=/src/i.test(o)&&0===o.indexOf(n.split(" ")[0])}),t},T.generatedcontent=function(){var t;return P(["#",m,"{font:0/0 a}#",m,':after{content:"',w,'";visibility:hidden;font:3px/1 a}'].join(""),function(e){t=e.offsetHeight>=3}),t},T.video=function(){var t=e.createElement("video"),r=!1;try{(r=!!t.canPlayType)&&(r=new Boolean(r),r.ogg=t.canPlayType('video/ogg; codecs="theora"').replace(/^no$/,""),r.h264=t.canPlayType('video/mp4; codecs="avc1.42E01E"').replace(/^no$/,""),r.webm=t.canPlayType('video/webm; codecs="vp8, vorbis"').replace(/^no$/,""))}catch(n){}return r},T.audio=function(){var t=e.createElement("audio"),r=!1;try{(r=!!t.canPlayType)&&(r=new Boolean(r),r.ogg=t.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/,""),r.mp3=t.canPlayType("audio/mpeg;").replace(/^no$/,""),r.wav=t.canPlayType('audio/wav; codecs="1"').replace(/^no$/,""),r.m4a=(t.canPlayType("audio/x-m4a;")||t.canPlayType("audio/aac;")).replace(/^no$/,""))}catch(n){}return r},T.localstorage=function(){try{return localStorage.setItem(m,m),localStorage.removeItem(m),!0}catch(t){return!1}},T.sessionstorage=function(){try{return sessionStorage.setItem(m,m),sessionStorage.removeItem(m),!0}catch(t){return!1}},T.webworkers=function(){return!!t.Worker},T.applicationcache=function(){return!!t.applicationCache},T.svg=function(){return!!e.createElementNS&&!!e.createElementNS(E.svg,"svg").createSVGRect},T.inlinesvg=function(){var t=e.createElement("div");return t.innerHTML="<svg/>",(t.firstChild&&t.firstChild.namespaceURI)==E.svg},T.smil=function(){return!!e.createElementNS&&/SVGAnimate/.test(_.call(e.createElementNS(E.svg,"animate")))},T.svgclippaths=function(){return!!e.createElementNS&&/SVGClipPath/.test(_.call(e.createElementNS(E.svg,"clipPath")))};for(var I in T)f(T,I)&&(c=I.toLowerCase(),d[c]=T[I](),L.push((d[c]?"":"no-")+c));return d.input||h(),d.addTest=function(t,e){if("object"==typeof t)for(var n in t)f(t,n)&&d.addTest(n,t[n]);else{if(t=t.toLowerCase(),d[t]!==r)return d;e="function"==typeof e?e():e,"undefined"!=typeof g&&g&&(v.className+=" "+(e?"":"no-")+t),d[t]=e}return d},n(""),y=b=null,function(t,e){function r(t,e){var r=t.createElement("p"),n=t.getElementsByTagName("head")[0]||t.documentElement;return r.innerHTML="x<style>"+e+"</style>",n.insertBefore(r.lastChild,n.firstChild)}function n(){var t=y.elements;return"string"==typeof t?t.split(" "):t}function i(t){var e=m[t[g]];return e||(e={},v++,t[g]=v,m[v]=e),e}function a(t,r,n){if(r||(r=e),h)return r.createElement(t);n||(n=i(r));var a;return a=n.cache[t]?n.cache[t].cloneNode():d.test(t)?(n.cache[t]=n.createElem(t)).cloneNode():n.createElem(t),!a.canHaveChildren||p.test(t)||a.tagUrn?a:n.frag.appendChild(a)}function o(t,r){if(t||(t=e),h)return t.createDocumentFragment();r=r||i(t);for(var a=r.frag.cloneNode(),o=0,s=n(),l=s.length;l>o;o++)a.createElement(s[o]);return a}function s(t,e){e.cache||(e.cache={},e.createElem=t.createElement,e.createFrag=t.createDocumentFragment,e.frag=e.createFrag()),t.createElement=function(r){return y.shivMethods?a(r,t,e):e.createElem(r)},t.createDocumentFragment=Function("h,f","return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&("+n().join().replace(/[\w\-]+/g,function(t){return e.createElem(t),e.frag.createElement(t),'c("'+t+'")'})+");return n}")(y,e.frag)}function l(t){t||(t=e);var n=i(t);return y.shivCSS&&!u&&!n.hasCSS&&(n.hasCSS=!!r(t,"article,aside,dialog,figcaption,figure,footer,header,hgroup,main,nav,section{display:block}mark{background:#FF0;color:#000}template{display:none}")),h||s(t,n),t}var u,h,c="3.7.0",f=t.html5||{},p=/^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i,d=/^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i,g="_html5shiv",v=0,m={};!function(){try{var t=e.createElement("a");t.innerHTML="<xyz></xyz>",u="hidden"in t,h=1==t.childNodes.length||function(){e.createElement("a");var t=e.createDocumentFragment();return"undefined"==typeof t.cloneNode||"undefined"==typeof t.createDocumentFragment||"undefined"==typeof t.createElement}()}catch(r){u=!0,h=!0}}();var y={elements:f.elements||"abbr article aside audio bdi canvas data datalist details dialog figcaption figure footer header hgroup main mark meter nav output progress section summary template time video",version:c,shivCSS:f.shivCSS!==!1,supportsUnknownElements:h,shivMethods:f.shivMethods!==!1,type:"default",shivDocument:l,createElement:a,createDocumentFragment:o};t.html5=y,l(e)}(this,e),d._version=p,d._prefixes=k,d._domPrefixes=B,d._cssomPrefixes=S,d.hasEvent=z,d.testProp=function(t){return s([t])},d.testAllProps=u,d.testStyles=P,d.prefixed=function(t,e,r){return e?u(t,e,r):u(t,"pfx")},v.className=v.className.replace(/(^|\s)no-js(\s|$)/,"$1$2")+(g?" js "+L.join(" "):""),d}(this,this.document),function(t,e,r){function n(t){return"[object Function]"==v.call(t)}function i(t){return"string"==typeof t}function a(){}function o(t){return!t||"loaded"==t||"complete"==t||"uninitialized"==t}function s(){var t=m.shift();y=1,t?t.t?d(function(){("c"==t.t?f.injectCss:f.injectJs)(t.s,0,t.a,t.x,t.e,1)},0):(t(),s()):y=0}function l(t,r,n,i,a,l,u){function h(e){if(!p&&o(c.readyState)&&(x.r=p=1,!y&&s(),c.onload=c.onreadystatechange=null,e)){"img"!=t&&d(function(){w.removeChild(c)},50);for(var n in B[r])B[r].hasOwnProperty(n)&&B[r][n].onload()}}var u=u||f.errorTimeout,c=e.createElement(t),p=0,v=0,x={t:n,s:r,e:a,a:l,x:u};1===B[r]&&(v=1,B[r]=[]),"object"==t?c.data=r:(c.src=r,c.type=t),c.width=c.height="0",c.onerror=c.onload=c.onreadystatechange=function(){h.call(this,v)},m.splice(i,0,x),"img"!=t&&(v||2===B[r]?(w.insertBefore(c,b?null:g),d(h,u)):B[r].push(c))}function u(t,e,r,n,a){return y=0,e=e||"j",i(t)?l("c"==e?k:_,t,e,this.i++,r,n,a):(m.splice(this.i++,0,t),1==m.length&&s()),this}function h(){var t=f;return t.loader={load:u,i:0},t}var c,f,p=e.documentElement,d=t.setTimeout,g=e.getElementsByTagName("script")[0],v={}.toString,m=[],y=0,x="MozAppearance"in p.style,b=x&&!!e.createRange().compareNode,w=b?p:g.parentNode,p=t.opera&&"[object Opera]"==v.call(t.opera),p=!!e.attachEvent&&!p,_=x?"object":p?"script":"img",k=p?"script":_,C=Array.isArray||function(t){return"[object Array]"==v.call(t)},S=[],B={},E={timeout:function(t,e){return e.length&&(t.timeout=e[0]),t}};f=function(t){function e(t){var e,r,n,t=t.split("!"),i=S.length,a=t.pop(),o=t.length,a={url:a,origUrl:a,prefixes:t};for(r=0;o>r;r++)n=t[r].split("="),(e=E[n.shift()])&&(a=e(a,n));for(r=0;i>r;r++)a=S[r](a);return a}function o(t,i,a,o,s){var l=e(t),u=l.autoCallback;l.url.split(".").pop().split("?").shift(),l.bypass||(i&&(i=n(i)?i:i[t]||i[o]||i[t.split("/").pop().split("?")[0]]),l.instead?l.instead(t,i,a,o,s):(B[l.url]?l.noexec=!0:B[l.url]=1,a.load(l.url,l.forceCSS||!l.forceJS&&"css"==l.url.split(".").pop().split("?").shift()?"c":r,l.noexec,l.attrs,l.timeout),(n(i)||n(u))&&a.load(function(){h(),i&&i(l.origUrl,s,o),u&&u(l.origUrl,s,o),B[l.url]=2})))}function s(t,e){function r(t,r){if(t){if(i(t))r||(c=function(){var t=[].slice.call(arguments);f.apply(this,t),p()}),o(t,c,e,0,u);else if(Object(t)===t)for(l in s=function(){var e,r=0;for(e in t)t.hasOwnProperty(e)&&r++;return r}(),t)t.hasOwnProperty(l)&&(!r&&!--s&&(n(c)?c=function(){var t=[].slice.call(arguments);f.apply(this,t),p()}:c[l]=function(t){return function(){var e=[].slice.call(arguments);t&&t.apply(this,e),p()}}(f[l])),o(t[l],c,e,l,u))}else!r&&p()}var s,l,u=!!t.test,h=t.load||t.both,c=t.callback||a,f=c,p=t.complete||a;r(u?t.yep:t.nope,!!h),h&&r(h)}var l,u,c=this.yepnope.loader;if(i(t))o(t,0,c,0);else if(C(t))for(l=0;l<t.length;l++)u=t[l],i(u)?o(u,0,c,0):C(u)?f(u):Object(u)===u&&s(u,c);else Object(t)===t&&s(t,c)},f.addPrefix=function(t,e){E[t]=e},f.addFilter=function(t){S.push(t)},f.errorTimeout=1e4,null==e.readyState&&e.addEventListener&&(e.readyState="loading",e.addEventListener("DOMContentLoaded",c=function(){e.removeEventListener("DOMContentLoaded",c,0),e.readyState="complete"},0)),t.yepnope=h(),t.yepnope.executeStack=s,t.yepnope.injectJs=function(t,r,n,i,l,u){var h,c,p=e.createElement("script"),i=i||f.errorTimeout;p.src=t;for(c in n)p.setAttribute(c,n[c]);r=u?s:r||a,p.onreadystatechange=p.onload=function(){!h&&o(p.readyState)&&(h=1,r(),p.onload=p.onreadystatechange=null)},d(function(){h||(h=1,r(1))},i),l?p.onload():g.parentNode.insertBefore(p,g)},t.yepnope.injectCss=function(t,r,n,i,o,l){var u,i=e.createElement("link"),r=l?s:r||a;i.href=t,i.rel="stylesheet",i.type="text/css";for(u in n)i.setAttribute(u,n[u]);o||(g.parentNode.insertBefore(i,g),d(r,0))}}(this,document),Modernizr.load=function(){yepnope.apply(window,[].slice.call(arguments,0))},function(t){function e(e){var r=e||window.event,n=[].slice.call(arguments,1),i=0,a=0,o=0,e=t.event.fix(r);return e.type="mousewheel",r.wheelDelta&&(i=r.wheelDelta/120),r.detail&&(i=-r.detail/3),o=i,void 0!==r.axis&&r.axis===r.HORIZONTAL_AXIS&&(o=0,a=-1*i),void 0!==r.wheelDeltaY&&(o=r.wheelDeltaY/120),void 0!==r.wheelDeltaX&&(a=-1*r.wheelDeltaX/120),n.unshift(e,i,a,o),(t.event.dispatch||t.event.handle).apply(this,n)}var r=["DOMMouseScroll","mousewheel"];if(t.event.fixHooks)for(var n=r.length;n;)t.event.fixHooks[r[--n]]=t.event.mouseHooks;t.event.special.mousewheel={setup:function(){if(this.addEventListener)for(var t=r.length;t;)this.addEventListener(r[--t],e,!1);else this.onmousewheel=e},teardown:function(){if(this.removeEventListener)for(var t=r.length;t;)this.removeEventListener(r[--t],e,!1);else this.onmousewheel=null}},t.fn.extend({mousewheel:function(t){return t?this.bind("mousewheel",t):this.trigger("mousewheel")},unmousewheel:function(t){return this.unbind("mousewheel",t)}})}(jQuery),!function(t){var e,r,n="0.4.2",i="hasOwnProperty",a=/[\.\/]/,o="*",s=function(){},l=function(t,e){return t-e},u={n:{}},h=function(t,n){t=String(t);var i,a=r,o=Array.prototype.slice.call(arguments,2),s=h.listeners(t),u=0,c=[],f={},p=[],d=e;e=t,r=0;for(var g=0,v=s.length;v>g;g++)"zIndex"in s[g]&&(c.push(s[g].zIndex),s[g].zIndex<0&&(f[s[g].zIndex]=s[g]));for(c.sort(l);c[u]<0;)if(i=f[c[u++]],p.push(i.apply(n,o)),r)return r=a,p;for(g=0;v>g;g++)if(i=s[g],"zIndex"in i)if(i.zIndex==c[u]){if(p.push(i.apply(n,o)),r)break;do if(u++,i=f[c[u]],i&&p.push(i.apply(n,o)),r)break;while(i)}else f[i.zIndex]=i;else if(p.push(i.apply(n,o)),r)break;return r=a,e=d,p.length?p:null};h._events=u,h.listeners=function(t){var e,r,n,i,s,l,h,c,f=t.split(a),p=u,d=[p],g=[];for(i=0,s=f.length;s>i;i++){for(c=[],l=0,h=d.length;h>l;l++)for(p=d[l].n,r=[p[f[i]],p[o]],n=2;n--;)e=r[n],e&&(c.push(e),g=g.concat(e.f||[]));d=c}return g},h.on=function(t,e){if(t=String(t),"function"!=typeof e)return function(){};for(var r=t.split(a),n=u,i=0,o=r.length;o>i;i++)n=n.n,n=n.hasOwnProperty(r[i])&&n[r[i]]||(n[r[i]]={n:{}});for(n.f=n.f||[],i=0,o=n.f.length;o>i;i++)if(n.f[i]==e)return s;return n.f.push(e),function(t){+t==+t&&(e.zIndex=+t)}},h.f=function(t){var e=[].slice.call(arguments,1);return function(){h.apply(null,[t,null].concat(e).concat([].slice.call(arguments,0)))}},h.stop=function(){r=1},h.nt=function(t){return t?new RegExp("(?:\\.|\\/|^)"+t+"(?:\\.|\\/|$)").test(e):e},h.nts=function(){return e.split(a)},h.off=h.unbind=function(t,e){if(!t)return void(h._events=u={n:{}});var r,n,s,l,c,f,p,d=t.split(a),g=[u];for(l=0,c=d.length;c>l;l++)for(f=0;f<g.length;f+=s.length-2){if(s=[f,1],r=g[f].n,d[l]!=o)r[d[l]]&&s.push(r[d[l]]);else for(n in r)r[i](n)&&s.push(r[n]);g.splice.apply(g,s)}for(l=0,c=g.length;c>l;l++)for(r=g[l];r.n;){if(e){if(r.f){for(f=0,p=r.f.length;p>f;f++)if(r.f[f]==e){r.f.splice(f,1);break}!r.f.length&&delete r.f}for(n in r.n)if(r.n[i](n)&&r.n[n].f){var v=r.n[n].f;for(f=0,p=v.length;p>f;f++)if(v[f]==e){v.splice(f,1);break}!v.length&&delete r.n[n].f}}else{delete r.f;for(n in r.n)r.n[i](n)&&r.n[n].f&&delete r.n[n].f}r=r.n}},h.once=function(t,e){var r=function(){return h.unbind(t,r),e.apply(this,arguments)};return h.on(t,r)},h.version=n,h.toString=function(){return"You are running Eve "+n},"undefined"!=typeof module&&module.exports?module.exports=h:"undefined"!=typeof define?define("eve",[],function(){return h}):t.eve=h}(this),function(t,e){"function"==typeof define&&define.amd?define(["eve"],function(r){return e(t,r)}):e(t,t.eve)}(this,function(t,e){function r(t){if(r.is(t,"function"))return b?t():e.on("raphael.DOMload",t);if(r.is(t,$))return r._engine.create[A](r,t.splice(0,3+r.is(t[0],G))).add(t);var n=Array.prototype.slice.call(arguments,0);if(r.is(n[n.length-1],"function")){var i=n.pop();return b?i.call(r._engine.create[A](r,n)):e.on("raphael.DOMload",function(){i.call(r._engine.create[A](r,n))})}return r._engine.create[A](r,arguments)}function n(t){if("function"==typeof t||Object(t)!==t)return t;var e=new t.constructor;for(var r in t)t[S](r)&&(e[r]=n(t[r]));return e}function i(t,e){for(var r=0,n=t.length;n>r;r++)if(t[r]===e)return t.push(t.splice(r,1)[0])}function a(t,e,r){function n(){var a=Array.prototype.slice.call(arguments,0),o=a.join("вђЂ"),s=n.cache=n.cache||{},l=n.count=n.count||[];return s[S](o)?(i(l,o),r?r(s[o]):s[o]):(l.length>=1e3&&delete s[l.shift()],l.push(o),s[o]=t[A](e,a),r?r(s[o]):s[o])}return n}function o(){return this.hex}function s(t,e){for(var r=[],n=0,i=t.length;i-2*!e>n;n+=2){var a=[{x:+t[n-2],y:+t[n-1]},{x:+t[n],y:+t[n+1]},{x:+t[n+2],y:+t[n+3]},{x:+t[n+4],y:+t[n+5]}];e?n?i-4==n?a[3]={x:+t[0],y:+t[1]}:i-2==n&&(a[2]={x:+t[0],y:+t[1]},a[3]={x:+t[2],y:+t[3]}):a[0]={x:+t[i-2],y:+t[i-1]}:i-4==n?a[3]=a[2]:n||(a[0]={x:+t[n],y:+t[n+1]}),r.push(["C",(-a[0].x+6*a[1].x+a[2].x)/6,(-a[0].y+6*a[1].y+a[2].y)/6,(a[1].x+6*a[2].x-a[3].x)/6,(a[1].y+6*a[2].y-a[3].y)/6,a[2].x,a[2].y])}return r}function l(t,e,r,n,i){var a=-3*e+9*r-9*n+3*i,o=t*a+6*e-12*r+6*n;return t*o-3*e+3*r}function u(t,e,r,n,i,a,o,s,u){null==u&&(u=1),u=u>1?1:0>u?0:u;for(var h=u/2,c=12,f=[-.1252,.1252,-.3678,.3678,-.5873,.5873,-.7699,.7699,-.9041,.9041,-.9816,.9816],p=[.2491,.2491,.2335,.2335,.2032,.2032,.1601,.1601,.1069,.1069,.0472,.0472],d=0,g=0;c>g;g++){var v=h*f[g]+h,m=l(v,t,r,i,o),y=l(v,e,n,a,s),x=m*m+y*y;d+=p[g]*D.sqrt(x)}return h*d}function h(t,e,r,n,i,a,o,s,l){if(!(0>l||u(t,e,r,n,i,a,o,s)<l)){var h,c=1,f=c/2,p=c-f,d=.01;for(h=u(t,e,r,n,i,a,o,s,p);V(h-l)>d;)f/=2,p+=(l>h?1:-1)*f,h=u(t,e,r,n,i,a,o,s,p);return p}}function c(t,e,r,n,i,a,o,s){if(!(O(t,r)<q(i,o)||q(t,r)>O(i,o)||O(e,n)<q(a,s)||q(e,n)>O(a,s))){var l=(t*n-e*r)*(i-o)-(t-r)*(i*s-a*o),u=(t*n-e*r)*(a-s)-(e-n)*(i*s-a*o),h=(t-r)*(a-s)-(e-n)*(i-o);if(h){var c=l/h,f=u/h,p=+c.toFixed(2),d=+f.toFixed(2);if(!(p<+q(t,r).toFixed(2)||p>+O(t,r).toFixed(2)||p<+q(i,o).toFixed(2)||p>+O(i,o).toFixed(2)||d<+q(e,n).toFixed(2)||d>+O(e,n).toFixed(2)||d<+q(a,s).toFixed(2)||d>+O(a,s).toFixed(2)))return{x:c,y:f}}}}function f(t,e,n){var i=r.bezierBBox(t),a=r.bezierBBox(e);if(!r.isBBoxIntersect(i,a))return n?0:[];for(var o=u.apply(0,t),s=u.apply(0,e),l=O(~~(o/5),1),h=O(~~(s/5),1),f=[],p=[],d={},g=n?0:[],v=0;l+1>v;v++){var m=r.findDotsAtSegment.apply(r,t.concat(v/l));f.push({x:m.x,y:m.y,t:v/l})}for(v=0;h+1>v;v++)m=r.findDotsAtSegment.apply(r,e.concat(v/h)),p.push({x:m.x,y:m.y,t:v/h});for(v=0;l>v;v++)for(var y=0;h>y;y++){var x=f[v],b=f[v+1],w=p[y],_=p[y+1],k=V(b.x-x.x)<.001?"y":"x",C=V(_.x-w.x)<.001?"y":"x",S=c(x.x,x.y,b.x,b.y,w.x,w.y,_.x,_.y);if(S){if(d[S.x.toFixed(4)]==S.y.toFixed(4))continue;d[S.x.toFixed(4)]=S.y.toFixed(4);var B=x.t+V((S[k]-x[k])/(b[k]-x[k]))*(b.t-x.t),E=w.t+V((S[C]-w[C])/(_[C]-w[C]))*(_.t-w.t);B>=0&&1.001>=B&&E>=0&&1.001>=E&&(n?g++:g.push({x:S.x,y:S.y,t1:q(B,1),t2:q(E,1)}))}}return g}function p(t,e,n){t=r._path2curve(t),e=r._path2curve(e);for(var i,a,o,s,l,u,h,c,p,d,g=n?0:[],v=0,m=t.length;m>v;v++){var y=t[v];if("M"==y[0])i=l=y[1],a=u=y[2];else{"C"==y[0]?(p=[i,a].concat(y.slice(1)),i=p[6],a=p[7]):(p=[i,a,i,a,l,u,l,u],i=l,a=u);for(var x=0,b=e.length;b>x;x++){var w=e[x];if("M"==w[0])o=h=w[1],s=c=w[2];else{"C"==w[0]?(d=[o,s].concat(w.slice(1)),o=d[6],s=d[7]):(d=[o,s,o,s,h,c,h,c],o=h,s=c);var _=f(p,d,n);if(n)g+=_;else{for(var k=0,C=_.length;C>k;k++)_[k].segment1=v,_[k].segment2=x,_[k].bez1=p,_[k].bez2=d;g=g.concat(_)}}}}}return g}function d(t,e,r,n,i,a){null!=t?(this.a=+t,this.b=+e,this.c=+r,this.d=+n,this.e=+i,this.f=+a):(this.a=1,this.b=0,this.c=0,this.d=1,this.e=0,this.f=0)}function g(){return this.x+P+this.y+P+this.width+" Г— "+this.height}function v(t,e,r,n,i,a){function o(t){return((c*t+h)*t+u)*t}function s(t,e){var r=l(t,e);return((d*r+p)*r+f)*r}function l(t,e){var r,n,i,a,s,l;for(i=t,l=0;8>l;l++){if(a=o(i)-t,V(a)<e)return i;if(s=(3*c*i+2*h)*i+u,V(s)<1e-6)break;i-=a/s}if(r=0,n=1,i=t,r>i)return r;if(i>n)return n;for(;n>r;){if(a=o(i),V(a-t)<e)return i;t>a?r=i:n=i,i=(n-r)/2+r}return i}var u=3*e,h=3*(n-e)-u,c=1-u-h,f=3*r,p=3*(i-r)-f,d=1-f-p;return s(t,1/(200*a))}function m(t,e){var r=[],n={};if(this.ms=e,this.times=1,t){for(var i in t)t[S](i)&&(n[K(i)]=t[i],r.push(K(i)));r.sort(ct)}this.anim=n,this.top=r[r.length-1],this.percents=r}function y(t,n,i,a,o,s){i=K(i);var l,u,h,c,f,p,g=t.ms,m={},y={},x={};if(a)for(w=0,k=le.length;k>w;w++){var b=le[w];if(b.el.id==n.id&&b.anim==t){b.percent!=i?(le.splice(w,1),h=1):u=b,n.attr(b.totalOrigin);break}}else a=+y;for(var w=0,k=t.percents.length;k>w;w++){if(t.percents[w]==i||t.percents[w]>a*t.top){i=t.percents[w],f=t.percents[w-1]||0,g=g/t.top*(i-f),c=t.percents[w+1],l=t.anim[i];break}a&&n.attr(t.anim[t.percents[w]])}if(l){if(u)u.initstatus=a,u.start=new Date-u.ms*a;else{for(var C in l)if(l[S](C)&&(nt[S](C)||n.paper.customAttributes[S](C)))switch(m[C]=n.attr(C),null==m[C]&&(m[C]=rt[C]),y[C]=l[C],nt[C]){case G:x[C]=(y[C]-m[C])/g;break;case"colour":m[C]=r.getRGB(m[C]);var B=r.getRGB(y[C]);x[C]={r:(B.r-m[C].r)/g,g:(B.g-m[C].g)/g,b:(B.b-m[C].b)/g};break;case"path":var E=It(m[C],y[C]),T=E[1];for(m[C]=E[0],x[C]=[],w=0,k=m[C].length;k>w;w++){x[C][w]=[0];for(var A=1,L=m[C][w].length;L>A;A++)x[C][w][A]=(T[w][A]-m[C][w][A])/g}break;case"transform":var M=n._,P=qt(M[C],y[C]);if(P)for(m[C]=P.from,y[C]=P.to,x[C]=[],x[C].real=!0,w=0,k=m[C].length;k>w;w++)for(x[C][w]=[m[C][w][0]],A=1,L=m[C][w].length;L>A;A++)x[C][w][A]=(y[C][w][A]-m[C][w][A])/g;else{var I=n.matrix||new d,j={_:{transform:M.transform},getBBox:function(){return n.getBBox(1)}};m[C]=[I.a,I.b,I.c,I.d,I.e,I.f],Dt(j,y[C]),y[C]=j._.transform,x[C]=[(j.matrix.a-I.a)/g,(j.matrix.b-I.b)/g,(j.matrix.c-I.c)/g,(j.matrix.d-I.d)/g,(j.matrix.e-I.e)/g,(j.matrix.f-I.f)/g]}break;case"csv":var R=z(l[C])[F](_),D=z(m[C])[F](_);if("clip-rect"==C)for(m[C]=D,x[C]=[],w=D.length;w--;)x[C][w]=(R[w]-m[C][w])/g;y[C]=R;break;default:for(R=[][N](l[C]),D=[][N](m[C]),x[C]=[],w=n.paper.customAttributes[C].length;w--;)x[C][w]=((R[w]||0)-(D[w]||0))/g}var O=l.easing,q=r.easing_formulas[O];if(!q)if(q=z(O).match(Q),q&&5==q.length){var V=q;q=function(t){return v(t,+V[1],+V[2],+V[3],+V[4],g)}}else q=pt;if(p=l.start||t.start||+new Date,b={anim:t,percent:i,timestamp:p,start:p+(t.del||0),status:0,initstatus:a||0,stop:!1,ms:g,easing:q,from:m,diff:x,to:y,el:n,callback:l.callback,prev:f,next:c,repeat:s||t.times,origin:n.attr(),totalOrigin:o},le.push(b),a&&!u&&!h&&(b.stop=!0,b.start=new Date-g*a,1==le.length))return he();h&&(b.start=new Date-b.ms*a),1==le.length&&ue(he)}e("raphael.anim.start."+n.id,n,t)}}function x(t){for(var e=0;e<le.length;e++)le[e].el.paper==t&&le.splice(e--,1)}r.version="2.1.2",r.eve=e;var b,w,_=/[, ]+/,k={circle:1,rect:1,path:1,ellipse:1,text:1,image:1},C=/\{(\d+)\}/g,S="hasOwnProperty",B={doc:document,win:t},E={was:Object.prototype[S].call(B.win,"Raphael"),is:B.win.Raphael},T=function(){this.ca=this.customAttributes={}},A="apply",N="concat",L="ontouchstart"in B.win||B.win.DocumentTouch&&B.doc instanceof DocumentTouch,M="",P=" ",z=String,F="split",I="click dblclick mousedown mousemove mouseout mouseover mouseup touchstart touchmove touchend touchcancel"[F](P),j={mousedown:"touchstart",mousemove:"touchmove",mouseup:"touchend"},R=z.prototype.toLowerCase,D=Math,O=D.max,q=D.min,V=D.abs,H=D.pow,W=D.PI,G="number",Y="string",$="array",X=Object.prototype.toString,U=(r._ISURL=/^url\(['"]?([^\)]+?)['"]?\)$/i,/^\s*((#[a-f\d]{6})|(#[a-f\d]{3})|rgba?\(\s*([\d\.]+%?\s*,\s*[\d\.]+%?\s*,\s*[\d\.]+%?(?:\s*,\s*[\d\.]+%?)?)\s*\)|hsba?\(\s*([\d\.]+(?:deg|\xb0|%)?\s*,\s*[\d\.]+%?\s*,\s*[\d\.]+(?:%?\s*,\s*[\d\.]+)?)%?\s*\)|hsla?\(\s*([\d\.]+(?:deg|\xb0|%)?\s*,\s*[\d\.]+%?\s*,\s*[\d\.]+(?:%?\s*,\s*[\d\.]+)?)%?\s*\))\s*$/i),Z={NaN:1,Infinity:1,"-Infinity":1},Q=/^(?:cubic-)?bezier\(([^,]+),([^,]+),([^,]+),([^\)]+)\)/,J=D.round,K=parseFloat,tt=parseInt,et=z.prototype.toUpperCase,rt=r._availableAttrs={"arrow-end":"none","arrow-start":"none",blur:0,"clip-rect":"0 0 1e9 1e9",cursor:"default",cx:0,cy:0,fill:"#fff","fill-opacity":1,font:'10px "Arial"',"font-family":'"Arial"',"font-size":"10","font-style":"normal","font-weight":400,gradient:0,height:0,href:"http://raphaeljs.com/","letter-spacing":0,opacity:1,path:"M0,0",r:0,rx:0,ry:0,src:"",stroke:"#000","stroke-dasharray":"","stroke-linecap":"butt","stroke-linejoin":"butt","stroke-miterlimit":0,"stroke-opacity":1,"stroke-width":1,target:"_blank","text-anchor":"middle",title:"Raphael",transform:"",width:0,x:0,y:0},nt=r._availableAnimAttrs={blur:G,"clip-rect":"csv",cx:G,cy:G,fill:"colour","fill-opacity":G,"font-size":G,height:G,opacity:G,path:"path",r:G,rx:G,ry:G,stroke:"colour","stroke-opacity":G,"stroke-width":G,transform:"transform",width:G,x:G,y:G},it=/[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*,[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*/,at={hs:1,rg:1},ot=/,?([achlmqrstvxz]),?/gi,st=/([achlmrqstvz])[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029,]*((-?\d*\.?\d*(?:e[\-+]?\d+)?[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*,?[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*)+)/gi,lt=/([rstm])[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029,]*((-?\d*\.?\d*(?:e[\-+]?\d+)?[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*,?[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*)+)/gi,ut=/(-?\d*\.?\d*(?:e[\-+]?\d+)?)[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*,?[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*/gi,ht=(r._radial_gradient=/^r(?:\(([^,]+?)[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*,[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*([^\)]+?)\))?/,{}),ct=function(t,e){return K(t)-K(e)},ft=function(){},pt=function(t){return t},dt=r._rectPath=function(t,e,r,n,i){return i?[["M",t+i,e],["l",r-2*i,0],["a",i,i,0,0,1,i,i],["l",0,n-2*i],["a",i,i,0,0,1,-i,i],["l",2*i-r,0],["a",i,i,0,0,1,-i,-i],["l",0,2*i-n],["a",i,i,0,0,1,i,-i],["z"]]:[["M",t,e],["l",r,0],["l",0,n],["l",-r,0],["z"]]},gt=function(t,e,r,n){return null==n&&(n=r),[["M",t,e],["m",0,-n],["a",r,n,0,1,1,0,2*n],["a",r,n,0,1,1,0,-2*n],["z"]]},vt=r._getPath={path:function(t){return t.attr("path")},circle:function(t){var e=t.attrs;return gt(e.cx,e.cy,e.r)},ellipse:function(t){var e=t.attrs;return gt(e.cx,e.cy,e.rx,e.ry)},rect:function(t){var e=t.attrs;return dt(e.x,e.y,e.width,e.height,e.r)},image:function(t){var e=t.attrs;return dt(e.x,e.y,e.width,e.height)},text:function(t){var e=t._getBBox();return dt(e.x,e.y,e.width,e.height)},set:function(t){var e=t._getBBox();return dt(e.x,e.y,e.width,e.height)}},mt=r.mapPath=function(t,e){if(!e)return t;var r,n,i,a,o,s,l;for(t=It(t),i=0,o=t.length;o>i;i++)for(l=t[i],a=1,s=l.length;s>a;a+=2)r=e.x(l[a],l[a+1]),n=e.y(l[a],l[a+1]),l[a]=r,l[a+1]=n;return t};if(r._g=B,r.type=B.win.SVGAngle||B.doc.implementation.hasFeature("http://www.w3.org/TR/SVG11/feature#BasicStructure","1.1")?"SVG":"VML","VML"==r.type){var yt,xt=B.doc.createElement("div");if(xt.innerHTML='<v:shape adj="1"/>',yt=xt.firstChild,yt.style.behavior="url(#default#VML)",!yt||"object"!=typeof yt.adj)return r.type=M;xt=null}r.svg=!(r.vml="VML"==r.type),r._Paper=T,r.fn=w=T.prototype=r.prototype,r._id=0,r._oid=0,r.is=function(t,e){return e=R.call(e),"finite"==e?!Z[S](+t):"array"==e?t instanceof Array:"null"==e&&null===t||e==typeof t&&null!==t||"object"==e&&t===Object(t)||"array"==e&&Array.isArray&&Array.isArray(t)||X.call(t).slice(8,-1).toLowerCase()==e},r.angle=function(t,e,n,i,a,o){if(null==a){var s=t-n,l=e-i;return s||l?(180+180*D.atan2(-l,-s)/W+360)%360:0}return r.angle(t,e,a,o)-r.angle(n,i,a,o)},r.rad=function(t){return t%360*W/180},r.deg=function(t){return 180*t/W%360},r.snapTo=function(t,e,n){if(n=r.is(n,"finite")?n:10,r.is(t,$)){for(var i=t.length;i--;)if(V(t[i]-e)<=n)return t[i]}else{t=+t;var a=e%t;if(n>a)return e-a;if(a>t-n)return e-a+t}return e},r.createUUID=function(t,e){return function(){return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(t,e).toUpperCase()}}(/[xy]/g,function(t){var e=0|16*D.random(),r="x"==t?e:8|3&e;return r.toString(16)}),r.setWindow=function(t){e("raphael.setWindow",r,B.win,t),B.win=t,B.doc=B.win.document,r._engine.initWin&&r._engine.initWin(B.win)};var bt=function(t){if(r.vml){var e,n=/^\s+|\s+$/g;try{var i=new ActiveXObject("htmlfile");i.write("<body>"),i.close(),e=i.body}catch(o){e=createPopup().document.body}var s=e.createTextRange();bt=a(function(t){try{e.style.color=z(t).replace(n,M);var r=s.queryCommandValue("ForeColor");return r=(255&r)<<16|65280&r|(16711680&r)>>>16,"#"+("000000"+r.toString(16)).slice(-6)}catch(i){return"none"}})}else{var l=B.doc.createElement("i");l.title="RaphaГ«l Colour Picker",
    l.style.display="none",B.doc.body.appendChild(l),bt=a(function(t){return l.style.color=t,B.doc.defaultView.getComputedStyle(l,M).getPropertyValue("color")})}return bt(t)},wt=function(){return"hsb("+[this.h,this.s,this.b]+")"},_t=function(){return"hsl("+[this.h,this.s,this.l]+")"},kt=function(){return this.hex},Ct=function(t,e,n){if(null==e&&r.is(t,"object")&&"r"in t&&"g"in t&&"b"in t&&(n=t.b,e=t.g,t=t.r),null==e&&r.is(t,Y)){var i=r.getRGB(t);t=i.r,e=i.g,n=i.b}return(t>1||e>1||n>1)&&(t/=255,e/=255,n/=255),[t,e,n]},St=function(t,e,n,i){t*=255,e*=255,n*=255;var a={r:t,g:e,b:n,hex:r.rgb(t,e,n),toString:kt};return r.is(i,"finite")&&(a.opacity=i),a};r.color=function(t){var e;return r.is(t,"object")&&"h"in t&&"s"in t&&"b"in t?(e=r.hsb2rgb(t),t.r=e.r,t.g=e.g,t.b=e.b,t.hex=e.hex):r.is(t,"object")&&"h"in t&&"s"in t&&"l"in t?(e=r.hsl2rgb(t),t.r=e.r,t.g=e.g,t.b=e.b,t.hex=e.hex):(r.is(t,"string")&&(t=r.getRGB(t)),r.is(t,"object")&&"r"in t&&"g"in t&&"b"in t?(e=r.rgb2hsl(t),t.h=e.h,t.s=e.s,t.l=e.l,e=r.rgb2hsb(t),t.v=e.b):(t={hex:"none"},t.r=t.g=t.b=t.h=t.s=t.v=t.l=-1)),t.toString=kt,t},r.hsb2rgb=function(t,e,r,n){this.is(t,"object")&&"h"in t&&"s"in t&&"b"in t&&(r=t.b,e=t.s,t=t.h,n=t.o),t*=360;var i,a,o,s,l;return t=t%360/60,l=r*e,s=l*(1-V(t%2-1)),i=a=o=r-l,t=~~t,i+=[l,s,0,0,s,l][t],a+=[s,l,l,s,0,0][t],o+=[0,0,s,l,l,s][t],St(i,a,o,n)},r.hsl2rgb=function(t,e,r,n){this.is(t,"object")&&"h"in t&&"s"in t&&"l"in t&&(r=t.l,e=t.s,t=t.h),(t>1||e>1||r>1)&&(t/=360,e/=100,r/=100),t*=360;var i,a,o,s,l;return t=t%360/60,l=2*e*(.5>r?r:1-r),s=l*(1-V(t%2-1)),i=a=o=r-l/2,t=~~t,i+=[l,s,0,0,s,l][t],a+=[s,l,l,s,0,0][t],o+=[0,0,s,l,l,s][t],St(i,a,o,n)},r.rgb2hsb=function(t,e,r){r=Ct(t,e,r),t=r[0],e=r[1],r=r[2];var n,i,a,o;return a=O(t,e,r),o=a-q(t,e,r),n=0==o?null:a==t?(e-r)/o:a==e?(r-t)/o+2:(t-e)/o+4,n=60*((n+360)%6)/360,i=0==o?0:o/a,{h:n,s:i,b:a,toString:wt}},r.rgb2hsl=function(t,e,r){r=Ct(t,e,r),t=r[0],e=r[1],r=r[2];var n,i,a,o,s,l;return o=O(t,e,r),s=q(t,e,r),l=o-s,n=0==l?null:o==t?(e-r)/l:o==e?(r-t)/l+2:(t-e)/l+4,n=60*((n+360)%6)/360,a=(o+s)/2,i=0==l?0:.5>a?l/(2*a):l/(2-2*a),{h:n,s:i,l:a,toString:_t}},r._path2string=function(){return this.join(",").replace(ot,"$1")},r._preload=function(t,e){var r=B.doc.createElement("img");r.style.cssText="position:absolute;left:-9999em;top:-9999em",r.onload=function(){e.call(this),this.onload=null,B.doc.body.removeChild(this)},r.onerror=function(){B.doc.body.removeChild(this)},B.doc.body.appendChild(r),r.src=t},r.getRGB=a(function(t){if(!t||(t=z(t)).indexOf("-")+1)return{r:-1,g:-1,b:-1,hex:"none",error:1,toString:o};if("none"==t)return{r:-1,g:-1,b:-1,hex:"none",toString:o};!(at[S](t.toLowerCase().substring(0,2))||"#"==t.charAt())&&(t=bt(t));var e,n,i,a,s,l,u=t.match(U);return u?(u[2]&&(i=tt(u[2].substring(5),16),n=tt(u[2].substring(3,5),16),e=tt(u[2].substring(1,3),16)),u[3]&&(i=tt((s=u[3].charAt(3))+s,16),n=tt((s=u[3].charAt(2))+s,16),e=tt((s=u[3].charAt(1))+s,16)),u[4]&&(l=u[4][F](it),e=K(l[0]),"%"==l[0].slice(-1)&&(e*=2.55),n=K(l[1]),"%"==l[1].slice(-1)&&(n*=2.55),i=K(l[2]),"%"==l[2].slice(-1)&&(i*=2.55),"rgba"==u[1].toLowerCase().slice(0,4)&&(a=K(l[3])),l[3]&&"%"==l[3].slice(-1)&&(a/=100)),u[5]?(l=u[5][F](it),e=K(l[0]),"%"==l[0].slice(-1)&&(e*=2.55),n=K(l[1]),"%"==l[1].slice(-1)&&(n*=2.55),i=K(l[2]),"%"==l[2].slice(-1)&&(i*=2.55),("deg"==l[0].slice(-3)||"В°"==l[0].slice(-1))&&(e/=360),"hsba"==u[1].toLowerCase().slice(0,4)&&(a=K(l[3])),l[3]&&"%"==l[3].slice(-1)&&(a/=100),r.hsb2rgb(e,n,i,a)):u[6]?(l=u[6][F](it),e=K(l[0]),"%"==l[0].slice(-1)&&(e*=2.55),n=K(l[1]),"%"==l[1].slice(-1)&&(n*=2.55),i=K(l[2]),"%"==l[2].slice(-1)&&(i*=2.55),("deg"==l[0].slice(-3)||"В°"==l[0].slice(-1))&&(e/=360),"hsla"==u[1].toLowerCase().slice(0,4)&&(a=K(l[3])),l[3]&&"%"==l[3].slice(-1)&&(a/=100),r.hsl2rgb(e,n,i,a)):(u={r:e,g:n,b:i,toString:o},u.hex="#"+(16777216|i|n<<8|e<<16).toString(16).slice(1),r.is(a,"finite")&&(u.opacity=a),u)):{r:-1,g:-1,b:-1,hex:"none",error:1,toString:o}},r),r.hsb=a(function(t,e,n){return r.hsb2rgb(t,e,n).hex}),r.hsl=a(function(t,e,n){return r.hsl2rgb(t,e,n).hex}),r.rgb=a(function(t,e,r){return"#"+(16777216|r|e<<8|t<<16).toString(16).slice(1)}),r.getColor=function(t){var e=this.getColor.start=this.getColor.start||{h:0,s:1,b:t||.75},r=this.hsb2rgb(e.h,e.s,e.b);return e.h+=.075,e.h>1&&(e.h=0,e.s-=.2,e.s<=0&&(this.getColor.start={h:0,s:1,b:e.b})),r.hex},r.getColor.reset=function(){delete this.start},r.parsePathString=function(t){if(!t)return null;var e=Bt(t);if(e.arr)return Tt(e.arr);var n={a:7,c:6,h:1,l:2,m:2,r:4,q:4,s:4,t:2,v:1,z:0},i=[];return r.is(t,$)&&r.is(t[0],$)&&(i=Tt(t)),i.length||z(t).replace(st,function(t,e,r){var a=[],o=e.toLowerCase();if(r.replace(ut,function(t,e){e&&a.push(+e)}),"m"==o&&a.length>2&&(i.push([e][N](a.splice(0,2))),o="l",e="m"==e?"l":"L"),"r"==o)i.push([e][N](a));else for(;a.length>=n[o]&&(i.push([e][N](a.splice(0,n[o]))),n[o]););}),i.toString=r._path2string,e.arr=Tt(i),i},r.parseTransformString=a(function(t){if(!t)return null;var e=[];return r.is(t,$)&&r.is(t[0],$)&&(e=Tt(t)),e.length||z(t).replace(lt,function(t,r,n){var i=[];R.call(r),n.replace(ut,function(t,e){e&&i.push(+e)}),e.push([r][N](i))}),e.toString=r._path2string,e});var Bt=function(t){var e=Bt.ps=Bt.ps||{};return e[t]?e[t].sleep=100:e[t]={sleep:100},setTimeout(function(){for(var r in e)e[S](r)&&r!=t&&(e[r].sleep--,!e[r].sleep&&delete e[r])}),e[t]};r.findDotsAtSegment=function(t,e,r,n,i,a,o,s,l){var u=1-l,h=H(u,3),c=H(u,2),f=l*l,p=f*l,d=h*t+3*c*l*r+3*u*l*l*i+p*o,g=h*e+3*c*l*n+3*u*l*l*a+p*s,v=t+2*l*(r-t)+f*(i-2*r+t),m=e+2*l*(n-e)+f*(a-2*n+e),y=r+2*l*(i-r)+f*(o-2*i+r),x=n+2*l*(a-n)+f*(s-2*a+n),b=u*t+l*r,w=u*e+l*n,_=u*i+l*o,k=u*a+l*s,C=90-180*D.atan2(v-y,m-x)/W;return(v>y||x>m)&&(C+=180),{x:d,y:g,m:{x:v,y:m},n:{x:y,y:x},start:{x:b,y:w},end:{x:_,y:k},alpha:C}},r.bezierBBox=function(t,e,n,i,a,o,s,l){r.is(t,"array")||(t=[t,e,n,i,a,o,s,l]);var u=Ft.apply(null,t);return{x:u.min.x,y:u.min.y,x2:u.max.x,y2:u.max.y,width:u.max.x-u.min.x,height:u.max.y-u.min.y}},r.isPointInsideBBox=function(t,e,r){return e>=t.x&&e<=t.x2&&r>=t.y&&r<=t.y2},r.isBBoxIntersect=function(t,e){var n=r.isPointInsideBBox;return n(e,t.x,t.y)||n(e,t.x2,t.y)||n(e,t.x,t.y2)||n(e,t.x2,t.y2)||n(t,e.x,e.y)||n(t,e.x2,e.y)||n(t,e.x,e.y2)||n(t,e.x2,e.y2)||(t.x<e.x2&&t.x>e.x||e.x<t.x2&&e.x>t.x)&&(t.y<e.y2&&t.y>e.y||e.y<t.y2&&e.y>t.y)},r.pathIntersection=function(t,e){return p(t,e)},r.pathIntersectionNumber=function(t,e){return p(t,e,1)},r.isPointInsidePath=function(t,e,n){var i=r.pathBBox(t);return r.isPointInsideBBox(i,e,n)&&1==p(t,[["M",e,n],["H",i.x2+10]],1)%2},r._removedFactory=function(t){return function(){e("raphael.log",null,"RaphaГ«l: you are calling to method вЂњ"+t+"вЂќ of removed object",t)}};var Et=r.pathBBox=function(t){var e=Bt(t);if(e.bbox)return n(e.bbox);if(!t)return{x:0,y:0,width:0,height:0,x2:0,y2:0};t=It(t);for(var r,i=0,a=0,o=[],s=[],l=0,u=t.length;u>l;l++)if(r=t[l],"M"==r[0])i=r[1],a=r[2],o.push(i),s.push(a);else{var h=Ft(i,a,r[1],r[2],r[3],r[4],r[5],r[6]);o=o[N](h.min.x,h.max.x),s=s[N](h.min.y,h.max.y),i=r[5],a=r[6]}var c=q[A](0,o),f=q[A](0,s),p=O[A](0,o),d=O[A](0,s),g=p-c,v=d-f,m={x:c,y:f,x2:p,y2:d,width:g,height:v,cx:c+g/2,cy:f+v/2};return e.bbox=n(m),m},Tt=function(t){var e=n(t);return e.toString=r._path2string,e},At=r._pathToRelative=function(t){var e=Bt(t);if(e.rel)return Tt(e.rel);r.is(t,$)&&r.is(t&&t[0],$)||(t=r.parsePathString(t));var n=[],i=0,a=0,o=0,s=0,l=0;"M"==t[0][0]&&(i=t[0][1],a=t[0][2],o=i,s=a,l++,n.push(["M",i,a]));for(var u=l,h=t.length;h>u;u++){var c=n[u]=[],f=t[u];if(f[0]!=R.call(f[0]))switch(c[0]=R.call(f[0]),c[0]){case"a":c[1]=f[1],c[2]=f[2],c[3]=f[3],c[4]=f[4],c[5]=f[5],c[6]=+(f[6]-i).toFixed(3),c[7]=+(f[7]-a).toFixed(3);break;case"v":c[1]=+(f[1]-a).toFixed(3);break;case"m":o=f[1],s=f[2];default:for(var p=1,d=f.length;d>p;p++)c[p]=+(f[p]-(p%2?i:a)).toFixed(3)}else{c=n[u]=[],"m"==f[0]&&(o=f[1]+i,s=f[2]+a);for(var g=0,v=f.length;v>g;g++)n[u][g]=f[g]}var m=n[u].length;switch(n[u][0]){case"z":i=o,a=s;break;case"h":i+=+n[u][m-1];break;case"v":a+=+n[u][m-1];break;default:i+=+n[u][m-2],a+=+n[u][m-1]}}return n.toString=r._path2string,e.rel=Tt(n),n},Nt=r._pathToAbsolute=function(t){var e=Bt(t);if(e.abs)return Tt(e.abs);if(r.is(t,$)&&r.is(t&&t[0],$)||(t=r.parsePathString(t)),!t||!t.length)return[["M",0,0]];var n=[],i=0,a=0,o=0,l=0,u=0;"M"==t[0][0]&&(i=+t[0][1],a=+t[0][2],o=i,l=a,u++,n[0]=["M",i,a]);for(var h,c,f=3==t.length&&"M"==t[0][0]&&"R"==t[1][0].toUpperCase()&&"Z"==t[2][0].toUpperCase(),p=u,d=t.length;d>p;p++){if(n.push(h=[]),c=t[p],c[0]!=et.call(c[0]))switch(h[0]=et.call(c[0]),h[0]){case"A":h[1]=c[1],h[2]=c[2],h[3]=c[3],h[4]=c[4],h[5]=c[5],h[6]=+(c[6]+i),h[7]=+(c[7]+a);break;case"V":h[1]=+c[1]+a;break;case"H":h[1]=+c[1]+i;break;case"R":for(var g=[i,a][N](c.slice(1)),v=2,m=g.length;m>v;v++)g[v]=+g[v]+i,g[++v]=+g[v]+a;n.pop(),n=n[N](s(g,f));break;case"M":o=+c[1]+i,l=+c[2]+a;default:for(v=1,m=c.length;m>v;v++)h[v]=+c[v]+(v%2?i:a)}else if("R"==c[0])g=[i,a][N](c.slice(1)),n.pop(),n=n[N](s(g,f)),h=["R"][N](c.slice(-2));else for(var y=0,x=c.length;x>y;y++)h[y]=c[y];switch(h[0]){case"Z":i=o,a=l;break;case"H":i=h[1];break;case"V":a=h[1];break;case"M":o=h[h.length-2],l=h[h.length-1];default:i=h[h.length-2],a=h[h.length-1]}}return n.toString=r._path2string,e.abs=Tt(n),n},Lt=function(t,e,r,n){return[t,e,r,n,r,n]},Mt=function(t,e,r,n,i,a){var o=1/3,s=2/3;return[o*t+s*r,o*e+s*n,o*i+s*r,o*a+s*n,i,a]},Pt=function(t,e,r,n,i,o,s,l,u,h){var c,f=120*W/180,p=W/180*(+i||0),d=[],g=a(function(t,e,r){var n=t*D.cos(r)-e*D.sin(r),i=t*D.sin(r)+e*D.cos(r);return{x:n,y:i}});if(h)C=h[0],S=h[1],_=h[2],k=h[3];else{c=g(t,e,-p),t=c.x,e=c.y,c=g(l,u,-p),l=c.x,u=c.y;var v=(D.cos(W/180*i),D.sin(W/180*i),(t-l)/2),m=(e-u)/2,y=v*v/(r*r)+m*m/(n*n);y>1&&(y=D.sqrt(y),r=y*r,n=y*n);var x=r*r,b=n*n,w=(o==s?-1:1)*D.sqrt(V((x*b-x*m*m-b*v*v)/(x*m*m+b*v*v))),_=w*r*m/n+(t+l)/2,k=w*-n*v/r+(e+u)/2,C=D.asin(((e-k)/n).toFixed(9)),S=D.asin(((u-k)/n).toFixed(9));C=_>t?W-C:C,S=_>l?W-S:S,0>C&&(C=2*W+C),0>S&&(S=2*W+S),s&&C>S&&(C-=2*W),!s&&S>C&&(S-=2*W)}var B=S-C;if(V(B)>f){var E=S,T=l,A=u;S=C+f*(s&&S>C?1:-1),l=_+r*D.cos(S),u=k+n*D.sin(S),d=Pt(l,u,r,n,i,0,s,T,A,[S,E,_,k])}B=S-C;var L=D.cos(C),M=D.sin(C),P=D.cos(S),z=D.sin(S),I=D.tan(B/4),j=4/3*r*I,R=4/3*n*I,O=[t,e],q=[t+j*M,e-R*L],H=[l+j*z,u-R*P],G=[l,u];if(q[0]=2*O[0]-q[0],q[1]=2*O[1]-q[1],h)return[q,H,G][N](d);d=[q,H,G][N](d).join()[F](",");for(var Y=[],$=0,X=d.length;X>$;$++)Y[$]=$%2?g(d[$-1],d[$],p).y:g(d[$],d[$+1],p).x;return Y},zt=function(t,e,r,n,i,a,o,s,l){var u=1-l;return{x:H(u,3)*t+3*H(u,2)*l*r+3*u*l*l*i+H(l,3)*o,y:H(u,3)*e+3*H(u,2)*l*n+3*u*l*l*a+H(l,3)*s}},Ft=a(function(t,e,r,n,i,a,o,s){var l,u=i-2*r+t-(o-2*i+r),h=2*(r-t)-2*(i-r),c=t-r,f=(-h+D.sqrt(h*h-4*u*c))/2/u,p=(-h-D.sqrt(h*h-4*u*c))/2/u,d=[e,s],g=[t,o];return V(f)>"1e12"&&(f=.5),V(p)>"1e12"&&(p=.5),f>0&&1>f&&(l=zt(t,e,r,n,i,a,o,s,f),g.push(l.x),d.push(l.y)),p>0&&1>p&&(l=zt(t,e,r,n,i,a,o,s,p),g.push(l.x),d.push(l.y)),u=a-2*n+e-(s-2*a+n),h=2*(n-e)-2*(a-n),c=e-n,f=(-h+D.sqrt(h*h-4*u*c))/2/u,p=(-h-D.sqrt(h*h-4*u*c))/2/u,V(f)>"1e12"&&(f=.5),V(p)>"1e12"&&(p=.5),f>0&&1>f&&(l=zt(t,e,r,n,i,a,o,s,f),g.push(l.x),d.push(l.y)),p>0&&1>p&&(l=zt(t,e,r,n,i,a,o,s,p),g.push(l.x),d.push(l.y)),{min:{x:q[A](0,g),y:q[A](0,d)},max:{x:O[A](0,g),y:O[A](0,d)}}}),It=r._path2curve=a(function(t,e){var r=!e&&Bt(t);if(!e&&r.curve)return Tt(r.curve);for(var n=Nt(t),i=e&&Nt(e),a={x:0,y:0,bx:0,by:0,X:0,Y:0,qx:null,qy:null},o={x:0,y:0,bx:0,by:0,X:0,Y:0,qx:null,qy:null},s=(function(t,e,r){var n,i;if(!t)return["C",e.x,e.y,e.x,e.y,e.x,e.y];switch(!(t[0]in{T:1,Q:1})&&(e.qx=e.qy=null),t[0]){case"M":e.X=t[1],e.Y=t[2];break;case"A":t=["C"][N](Pt[A](0,[e.x,e.y][N](t.slice(1))));break;case"S":"C"==r||"S"==r?(n=2*e.x-e.bx,i=2*e.y-e.by):(n=e.x,i=e.y),t=["C",n,i][N](t.slice(1));break;case"T":"Q"==r||"T"==r?(e.qx=2*e.x-e.qx,e.qy=2*e.y-e.qy):(e.qx=e.x,e.qy=e.y),t=["C"][N](Mt(e.x,e.y,e.qx,e.qy,t[1],t[2]));break;case"Q":e.qx=t[1],e.qy=t[2],t=["C"][N](Mt(e.x,e.y,t[1],t[2],t[3],t[4]));break;case"L":t=["C"][N](Lt(e.x,e.y,t[1],t[2]));break;case"H":t=["C"][N](Lt(e.x,e.y,t[1],e.y));break;case"V":t=["C"][N](Lt(e.x,e.y,e.x,t[1]));break;case"Z":t=["C"][N](Lt(e.x,e.y,e.X,e.Y))}return t}),l=function(t,e){if(t[e].length>7){t[e].shift();for(var r=t[e];r.length;)t.splice(e++,0,["C"][N](r.splice(0,6)));t.splice(e,1),c=O(n.length,i&&i.length||0)}},u=function(t,e,r,a,o){t&&e&&"M"==t[o][0]&&"M"!=e[o][0]&&(e.splice(o,0,["M",a.x,a.y]),r.bx=0,r.by=0,r.x=t[o][1],r.y=t[o][2],c=O(n.length,i&&i.length||0))},h=0,c=O(n.length,i&&i.length||0);c>h;h++){n[h]=s(n[h],a),l(n,h),i&&(i[h]=s(i[h],o)),i&&l(i,h),u(n,i,a,o,h),u(i,n,o,a,h);var f=n[h],p=i&&i[h],d=f.length,g=i&&p.length;a.x=f[d-2],a.y=f[d-1],a.bx=K(f[d-4])||a.x,a.by=K(f[d-3])||a.y,o.bx=i&&(K(p[g-4])||o.x),o.by=i&&(K(p[g-3])||o.y),o.x=i&&p[g-2],o.y=i&&p[g-1]}return i||(r.curve=Tt(n)),i?[n,i]:n},null,Tt),jt=(r._parseDots=a(function(t){for(var e=[],n=0,i=t.length;i>n;n++){var a={},o=t[n].match(/^([^:]*):?([\d\.]*)/);if(a.color=r.getRGB(o[1]),a.color.error)return null;a.color=a.color.hex,o[2]&&(a.offset=o[2]+"%"),e.push(a)}for(n=1,i=e.length-1;i>n;n++)if(!e[n].offset){for(var s=K(e[n-1].offset||0),l=0,u=n+1;i>u;u++)if(e[u].offset){l=e[u].offset;break}l||(l=100,u=i),l=K(l);for(var h=(l-s)/(u-n+1);u>n;n++)s+=h,e[n].offset=s+"%"}return e}),r._tear=function(t,e){t==e.top&&(e.top=t.prev),t==e.bottom&&(e.bottom=t.next),t.next&&(t.next.prev=t.prev),t.prev&&(t.prev.next=t.next)}),Rt=(r._tofront=function(t,e){e.top!==t&&(jt(t,e),t.next=null,t.prev=e.top,e.top.next=t,e.top=t)},r._toback=function(t,e){e.bottom!==t&&(jt(t,e),t.next=e.bottom,t.prev=null,e.bottom.prev=t,e.bottom=t)},r._insertafter=function(t,e,r){jt(t,r),e==r.top&&(r.top=t),e.next&&(e.next.prev=t),t.next=e.next,t.prev=e,e.next=t},r._insertbefore=function(t,e,r){jt(t,r),e==r.bottom&&(r.bottom=t),e.prev&&(e.prev.next=t),t.prev=e.prev,e.prev=t,t.next=e},r.toMatrix=function(t,e){var r=Et(t),n={_:{transform:M},getBBox:function(){return r}};return Dt(n,e),n.matrix}),Dt=(r.transformPath=function(t,e){return mt(t,Rt(t,e))},r._extractTransform=function(t,e){if(null==e)return t._.transform;e=z(e).replace(/\.{3}|\u2026/g,t._.transform||M);var n=r.parseTransformString(e),i=0,a=0,o=0,s=1,l=1,u=t._,h=new d;if(u.transform=n||[],n)for(var c=0,f=n.length;f>c;c++){var p,g,v,m,y,x=n[c],b=x.length,w=z(x[0]).toLowerCase(),_=x[0]!=w,k=_?h.invert():0;"t"==w&&3==b?_?(p=k.x(0,0),g=k.y(0,0),v=k.x(x[1],x[2]),m=k.y(x[1],x[2]),h.translate(v-p,m-g)):h.translate(x[1],x[2]):"r"==w?2==b?(y=y||t.getBBox(1),h.rotate(x[1],y.x+y.width/2,y.y+y.height/2),i+=x[1]):4==b&&(_?(v=k.x(x[2],x[3]),m=k.y(x[2],x[3]),h.rotate(x[1],v,m)):h.rotate(x[1],x[2],x[3]),i+=x[1]):"s"==w?2==b||3==b?(y=y||t.getBBox(1),h.scale(x[1],x[b-1],y.x+y.width/2,y.y+y.height/2),s*=x[1],l*=x[b-1]):5==b&&(_?(v=k.x(x[3],x[4]),m=k.y(x[3],x[4]),h.scale(x[1],x[2],v,m)):h.scale(x[1],x[2],x[3],x[4]),s*=x[1],l*=x[2]):"m"==w&&7==b&&h.add(x[1],x[2],x[3],x[4],x[5],x[6]),u.dirtyT=1,t.matrix=h}t.matrix=h,u.sx=s,u.sy=l,u.deg=i,u.dx=a=h.e,u.dy=o=h.f,1==s&&1==l&&!i&&u.bbox?(u.bbox.x+=+a,u.bbox.y+=+o):u.dirtyT=1}),Ot=function(t){var e=t[0];switch(e.toLowerCase()){case"t":return[e,0,0];case"m":return[e,1,0,0,1,0,0];case"r":return 4==t.length?[e,0,t[2],t[3]]:[e,0];case"s":return 5==t.length?[e,1,1,t[3],t[4]]:3==t.length?[e,1,1]:[e,1]}},qt=r._equaliseTransform=function(t,e){e=z(e).replace(/\.{3}|\u2026/g,t),t=r.parseTransformString(t)||[],e=r.parseTransformString(e)||[];for(var n,i,a,o,s=O(t.length,e.length),l=[],u=[],h=0;s>h;h++){if(a=t[h]||Ot(e[h]),o=e[h]||Ot(a),a[0]!=o[0]||"r"==a[0].toLowerCase()&&(a[2]!=o[2]||a[3]!=o[3])||"s"==a[0].toLowerCase()&&(a[3]!=o[3]||a[4]!=o[4]))return;for(l[h]=[],u[h]=[],n=0,i=O(a.length,o.length);i>n;n++)n in a&&(l[h][n]=a[n]),n in o&&(u[h][n]=o[n])}return{from:l,to:u}};r._getContainer=function(t,e,n,i){var a;return a=null!=i||r.is(t,"object")?t:B.doc.getElementById(t),null!=a?a.tagName?null==e?{container:a,width:a.style.pixelWidth||a.offsetWidth,height:a.style.pixelHeight||a.offsetHeight}:{container:a,width:e,height:n}:{container:1,x:t,y:e,width:n,height:i}:void 0},r.pathToRelative=At,r._engine={},r.path2curve=It,r.matrix=function(t,e,r,n,i,a){return new d(t,e,r,n,i,a)},function(t){function e(t){return t[0]*t[0]+t[1]*t[1]}function n(t){var r=D.sqrt(e(t));t[0]&&(t[0]/=r),t[1]&&(t[1]/=r)}t.add=function(t,e,r,n,i,a){var o,s,l,u,h=[[],[],[]],c=[[this.a,this.c,this.e],[this.b,this.d,this.f],[0,0,1]],f=[[t,r,i],[e,n,a],[0,0,1]];for(t&&t instanceof d&&(f=[[t.a,t.c,t.e],[t.b,t.d,t.f],[0,0,1]]),o=0;3>o;o++)for(s=0;3>s;s++){for(u=0,l=0;3>l;l++)u+=c[o][l]*f[l][s];h[o][s]=u}this.a=h[0][0],this.b=h[1][0],this.c=h[0][1],this.d=h[1][1],this.e=h[0][2],this.f=h[1][2]},t.invert=function(){var t=this,e=t.a*t.d-t.b*t.c;return new d(t.d/e,-t.b/e,-t.c/e,t.a/e,(t.c*t.f-t.d*t.e)/e,(t.b*t.e-t.a*t.f)/e)},t.clone=function(){return new d(this.a,this.b,this.c,this.d,this.e,this.f)},t.translate=function(t,e){this.add(1,0,0,1,t,e)},t.scale=function(t,e,r,n){null==e&&(e=t),(r||n)&&this.add(1,0,0,1,r,n),this.add(t,0,0,e,0,0),(r||n)&&this.add(1,0,0,1,-r,-n)},t.rotate=function(t,e,n){t=r.rad(t),e=e||0,n=n||0;var i=+D.cos(t).toFixed(9),a=+D.sin(t).toFixed(9);this.add(i,a,-a,i,e,n),this.add(1,0,0,1,-e,-n)},t.x=function(t,e){return t*this.a+e*this.c+this.e},t.y=function(t,e){return t*this.b+e*this.d+this.f},t.get=function(t){return+this[z.fromCharCode(97+t)].toFixed(4)},t.toString=function(){return r.svg?"matrix("+[this.get(0),this.get(1),this.get(2),this.get(3),this.get(4),this.get(5)].join()+")":[this.get(0),this.get(2),this.get(1),this.get(3),0,0].join()},t.toFilter=function(){return"progid:DXImageTransform.Microsoft.Matrix(M11="+this.get(0)+", M12="+this.get(2)+", M21="+this.get(1)+", M22="+this.get(3)+", Dx="+this.get(4)+", Dy="+this.get(5)+", sizingmethod='auto expand')"},t.offset=function(){return[this.e.toFixed(4),this.f.toFixed(4)]},t.split=function(){var t={};t.dx=this.e,t.dy=this.f;var i=[[this.a,this.c],[this.b,this.d]];t.scalex=D.sqrt(e(i[0])),n(i[0]),t.shear=i[0][0]*i[1][0]+i[0][1]*i[1][1],i[1]=[i[1][0]-i[0][0]*t.shear,i[1][1]-i[0][1]*t.shear],t.scaley=D.sqrt(e(i[1])),n(i[1]),t.shear/=t.scaley;var a=-i[0][1],o=i[1][1];return 0>o?(t.rotate=r.deg(D.acos(o)),0>a&&(t.rotate=360-t.rotate)):t.rotate=r.deg(D.asin(a)),t.isSimple=!(+t.shear.toFixed(9)||t.scalex.toFixed(9)!=t.scaley.toFixed(9)&&t.rotate),t.isSuperSimple=!+t.shear.toFixed(9)&&t.scalex.toFixed(9)==t.scaley.toFixed(9)&&!t.rotate,t.noRotation=!+t.shear.toFixed(9)&&!t.rotate,t},t.toTransformString=function(t){var e=t||this[F]();return e.isSimple?(e.scalex=+e.scalex.toFixed(4),e.scaley=+e.scaley.toFixed(4),e.rotate=+e.rotate.toFixed(4),(e.dx||e.dy?"t"+[e.dx,e.dy]:M)+(1!=e.scalex||1!=e.scaley?"s"+[e.scalex,e.scaley,0,0]:M)+(e.rotate?"r"+[e.rotate,0,0]:M)):"m"+[this.get(0),this.get(1),this.get(2),this.get(3),this.get(4),this.get(5)]}}(d.prototype);var Vt=navigator.userAgent.match(/Version\/(.*?)\s/)||navigator.userAgent.match(/Chrome\/(\d+)/);w.safari="Apple Computer, Inc."==navigator.vendor&&(Vt&&Vt[1]<4||"iP"==navigator.platform.slice(0,2))||"Google Inc."==navigator.vendor&&Vt&&Vt[1]<8?function(){var t=this.rect(-99,-99,this.width+99,this.height+99).attr({stroke:"none"});setTimeout(function(){t.remove()})}:ft;for(var Ht=function(){this.returnValue=!1},Wt=function(){return this.originalEvent.preventDefault()},Gt=function(){this.cancelBubble=!0},Yt=function(){return this.originalEvent.stopPropagation()},$t=function(t){var e=B.doc.documentElement.scrollTop||B.doc.body.scrollTop,r=B.doc.documentElement.scrollLeft||B.doc.body.scrollLeft;return{x:t.clientX+r,y:t.clientY+e}},Xt=function(){return B.doc.addEventListener?function(t,e,r,n){var i=function(t){var e=$t(t);return r.call(n,t,e.x,e.y)};if(t.addEventListener(e,i,!1),L&&j[e]){var a=function(e){for(var i=$t(e),a=e,o=0,s=e.targetTouches&&e.targetTouches.length;s>o;o++)if(e.targetTouches[o].target==t){e=e.targetTouches[o],e.originalEvent=a,e.preventDefault=Wt,e.stopPropagation=Yt;break}return r.call(n,e,i.x,i.y)};t.addEventListener(j[e],a,!1)}return function(){return t.removeEventListener(e,i,!1),L&&j[e]&&t.removeEventListener(j[e],i,!1),!0}}:B.doc.attachEvent?function(t,e,r,n){var i=function(t){t=t||B.win.event;var e=B.doc.documentElement.scrollTop||B.doc.body.scrollTop,i=B.doc.documentElement.scrollLeft||B.doc.body.scrollLeft,a=t.clientX+i,o=t.clientY+e;return t.preventDefault=t.preventDefault||Ht,t.stopPropagation=t.stopPropagation||Gt,r.call(n,t,a,o)};t.attachEvent("on"+e,i);var a=function(){return t.detachEvent("on"+e,i),!0};return a}:void 0}(),Ut=[],Zt=function(t){for(var r,n=t.clientX,i=t.clientY,a=B.doc.documentElement.scrollTop||B.doc.body.scrollTop,o=B.doc.documentElement.scrollLeft||B.doc.body.scrollLeft,s=Ut.length;s--;){if(r=Ut[s],L&&t.touches){for(var l,u=t.touches.length;u--;)if(l=t.touches[u],l.identifier==r.el._drag.id){n=l.clientX,i=l.clientY,(t.originalEvent?t.originalEvent:t).preventDefault();break}}else t.preventDefault();var h,c=r.el.node,f=c.nextSibling,p=c.parentNode,d=c.style.display;B.win.opera&&p.removeChild(c),c.style.display="none",h=r.el.paper.getElementByPoint(n,i),c.style.display=d,B.win.opera&&(f?p.insertBefore(c,f):p.appendChild(c)),h&&e("raphael.drag.over."+r.el.id,r.el,h),n+=o,i+=a,e("raphael.drag.move."+r.el.id,r.move_scope||r.el,n-r.el._drag.x,i-r.el._drag.y,n,i,t)}},Qt=function(t){r.unmousemove(Zt).unmouseup(Qt);for(var n,i=Ut.length;i--;)n=Ut[i],n.el._drag={},e("raphael.drag.end."+n.el.id,n.end_scope||n.start_scope||n.move_scope||n.el,t);Ut=[]},Jt=r.el={},Kt=I.length;Kt--;)!function(t){r[t]=Jt[t]=function(e,n){return r.is(e,"function")&&(this.events=this.events||[],this.events.push({name:t,f:e,unbind:Xt(this.shape||this.node||B.doc,t,e,n||this)})),this},r["un"+t]=Jt["un"+t]=function(e){for(var n=this.events||[],i=n.length;i--;)n[i].name!=t||!r.is(e,"undefined")&&n[i].f!=e||(n[i].unbind(),n.splice(i,1),!n.length&&delete this.events);return this}}(I[Kt]);Jt.data=function(t,n){var i=ht[this.id]=ht[this.id]||{};if(0==arguments.length)return i;if(1==arguments.length){if(r.is(t,"object")){for(var a in t)t[S](a)&&this.data(a,t[a]);return this}return e("raphael.data.get."+this.id,this,i[t],t),i[t]}return i[t]=n,e("raphael.data.set."+this.id,this,n,t),this},Jt.removeData=function(t){return null==t?ht[this.id]={}:ht[this.id]&&delete ht[this.id][t],this},Jt.getData=function(){return n(ht[this.id]||{})},Jt.hover=function(t,e,r,n){return this.mouseover(t,r).mouseout(e,n||r)},Jt.unhover=function(t,e){return this.unmouseover(t).unmouseout(e)};var te=[];Jt.drag=function(t,n,i,a,o,s){function l(l){(l.originalEvent||l).preventDefault();var u=l.clientX,h=l.clientY,c=B.doc.documentElement.scrollTop||B.doc.body.scrollTop,f=B.doc.documentElement.scrollLeft||B.doc.body.scrollLeft;if(this._drag.id=l.identifier,L&&l.touches)for(var p,d=l.touches.length;d--;)if(p=l.touches[d],this._drag.id=p.identifier,p.identifier==this._drag.id){u=p.clientX,h=p.clientY;break}this._drag.x=u+f,this._drag.y=h+c,!Ut.length&&r.mousemove(Zt).mouseup(Qt),Ut.push({el:this,move_scope:a,start_scope:o,end_scope:s}),n&&e.on("raphael.drag.start."+this.id,n),t&&e.on("raphael.drag.move."+this.id,t),i&&e.on("raphael.drag.end."+this.id,i),e("raphael.drag.start."+this.id,o||a||this,l.clientX+f,l.clientY+c,l)}return this._drag={},te.push({el:this,start:l}),this.mousedown(l),this},Jt.onDragOver=function(t){t?e.on("raphael.drag.over."+this.id,t):e.unbind("raphael.drag.over."+this.id)},Jt.undrag=function(){for(var t=te.length;t--;)te[t].el==this&&(this.unmousedown(te[t].start),te.splice(t,1),e.unbind("raphael.drag.*."+this.id));!te.length&&r.unmousemove(Zt).unmouseup(Qt),Ut=[]},w.circle=function(t,e,n){var i=r._engine.circle(this,t||0,e||0,n||0);return this.__set__&&this.__set__.push(i),i},w.rect=function(t,e,n,i,a){var o=r._engine.rect(this,t||0,e||0,n||0,i||0,a||0);return this.__set__&&this.__set__.push(o),o},w.ellipse=function(t,e,n,i){var a=r._engine.ellipse(this,t||0,e||0,n||0,i||0);return this.__set__&&this.__set__.push(a),a},w.path=function(t){t&&!r.is(t,Y)&&!r.is(t[0],$)&&(t+=M);var e=r._engine.path(r.format[A](r,arguments),this);return this.__set__&&this.__set__.push(e),e},w.image=function(t,e,n,i,a){var o=r._engine.image(this,t||"about:blank",e||0,n||0,i||0,a||0);return this.__set__&&this.__set__.push(o),o},w.text=function(t,e,n){var i=r._engine.text(this,t||0,e||0,z(n));return this.__set__&&this.__set__.push(i),i},w.set=function(t){!r.is(t,"array")&&(t=Array.prototype.splice.call(arguments,0,arguments.length));var e=new fe(t);return this.__set__&&this.__set__.push(e),e.paper=this,e.type="set",e},w.setStart=function(t){this.__set__=t||this.set()},w.setFinish=function(){var t=this.__set__;return delete this.__set__,t},w.setSize=function(t,e){return r._engine.setSize.call(this,t,e)},w.setViewBox=function(t,e,n,i,a){return r._engine.setViewBox.call(this,t,e,n,i,a)},w.top=w.bottom=null,w.raphael=r;var ee=function(t){var e=t.getBoundingClientRect(),r=t.ownerDocument,n=r.body,i=r.documentElement,a=i.clientTop||n.clientTop||0,o=i.clientLeft||n.clientLeft||0,s=e.top+(B.win.pageYOffset||i.scrollTop||n.scrollTop)-a,l=e.left+(B.win.pageXOffset||i.scrollLeft||n.scrollLeft)-o;return{y:s,x:l}};w.getElementByPoint=function(t,e){var r=this,n=r.canvas,i=B.doc.elementFromPoint(t,e);if(B.win.opera&&"svg"==i.tagName){var a=ee(n),o=n.createSVGRect();o.x=t-a.x,o.y=e-a.y,o.width=o.height=1;var s=n.getIntersectionList(o,null);s.length&&(i=s[s.length-1])}if(!i)return null;for(;i.parentNode&&i!=n.parentNode&&!i.raphael;)i=i.parentNode;return i==r.canvas.parentNode&&(i=n),i=i&&i.raphael?r.getById(i.raphaelid):null},w.getElementsByBBox=function(t){var e=this.set();return this.forEach(function(n){r.isBBoxIntersect(n.getBBox(),t)&&e.push(n)}),e},w.getById=function(t){for(var e=this.bottom;e;){if(e.id==t)return e;e=e.next}return null},w.forEach=function(t,e){for(var r=this.bottom;r;){if(t.call(e,r)===!1)return this;r=r.next}return this},w.getElementsByPoint=function(t,e){var r=this.set();return this.forEach(function(n){n.isPointInside(t,e)&&r.push(n)}),r},Jt.isPointInside=function(t,e){var n=this.realPath=vt[this.type](this);return this.attr("transform")&&this.attr("transform").length&&(n=r.transformPath(n,this.attr("transform"))),r.isPointInsidePath(n,t,e)},Jt.getBBox=function(t){if(this.removed)return{};var e=this._;return t?((e.dirty||!e.bboxwt)&&(this.realPath=vt[this.type](this),e.bboxwt=Et(this.realPath),e.bboxwt.toString=g,e.dirty=0),e.bboxwt):((e.dirty||e.dirtyT||!e.bbox)&&((e.dirty||!this.realPath)&&(e.bboxwt=0,this.realPath=vt[this.type](this)),e.bbox=Et(mt(this.realPath,this.matrix)),e.bbox.toString=g,e.dirty=e.dirtyT=0),e.bbox)},Jt.clone=function(){if(this.removed)return null;var t=this.paper[this.type]().attr(this.attr());return this.__set__&&this.__set__.push(t),t},Jt.glow=function(t){if("text"==this.type)return null;t=t||{};var e={width:(t.width||10)+(+this.attr("stroke-width")||1),fill:t.fill||!1,opacity:t.opacity||.5,offsetx:t.offsetx||0,offsety:t.offsety||0,color:t.color||"#000"},r=e.width/2,n=this.paper,i=n.set(),a=this.realPath||vt[this.type](this);a=this.matrix?mt(a,this.matrix):a;for(var o=1;r+1>o;o++)i.push(n.path(a).attr({stroke:e.color,fill:e.fill?e.color:"none","stroke-linejoin":"round","stroke-linecap":"round","stroke-width":+(e.width/r*o).toFixed(3),opacity:+(e.opacity/r).toFixed(3)}));return i.insertBefore(this).translate(e.offsetx,e.offsety)};var re=function(t,e,n,i,a,o,s,l,c){return null==c?u(t,e,n,i,a,o,s,l):r.findDotsAtSegment(t,e,n,i,a,o,s,l,h(t,e,n,i,a,o,s,l,c))},ne=function(t,e){return function(n,i,a){n=It(n);for(var o,s,l,u,h,c="",f={},p=0,d=0,g=n.length;g>d;d++){if(l=n[d],"M"==l[0])o=+l[1],s=+l[2];else{if(u=re(o,s,l[1],l[2],l[3],l[4],l[5],l[6]),p+u>i){if(e&&!f.start){if(h=re(o,s,l[1],l[2],l[3],l[4],l[5],l[6],i-p),c+=["C"+h.start.x,h.start.y,h.m.x,h.m.y,h.x,h.y],a)return c;f.start=c,c=["M"+h.x,h.y+"C"+h.n.x,h.n.y,h.end.x,h.end.y,l[5],l[6]].join(),p+=u,o=+l[5],s=+l[6];continue}if(!t&&!e)return h=re(o,s,l[1],l[2],l[3],l[4],l[5],l[6],i-p),{x:h.x,y:h.y,alpha:h.alpha}}p+=u,o=+l[5],s=+l[6]}c+=l.shift()+l}return f.end=c,h=t?p:e?f:r.findDotsAtSegment(o,s,l[0],l[1],l[2],l[3],l[4],l[5],1),h.alpha&&(h={x:h.x,y:h.y,alpha:h.alpha}),h}},ie=ne(1),ae=ne(),oe=ne(0,1);r.getTotalLength=ie,r.getPointAtLength=ae,r.getSubpath=function(t,e,r){if(this.getTotalLength(t)-r<1e-6)return oe(t,e).end;var n=oe(t,r,1);return e?oe(n,e).end:n},Jt.getTotalLength=function(){var t=this.getPath();return t?this.node.getTotalLength?this.node.getTotalLength():ie(t):void 0},Jt.getPointAtLength=function(t){var e=this.getPath();return e?ae(e,t):void 0},Jt.getPath=function(){var t,e=r._getPath[this.type];return"text"!=this.type&&"set"!=this.type?(e&&(t=e(this)),t):void 0},Jt.getSubpath=function(t,e){var n=this.getPath();return n?r.getSubpath(n,t,e):void 0};var se=r.easing_formulas={linear:function(t){return t},"<":function(t){return H(t,1.7)},">":function(t){return H(t,.48)},"<>":function(t){var e=.48-t/1.04,r=D.sqrt(.1734+e*e),n=r-e,i=H(V(n),1/3)*(0>n?-1:1),a=-r-e,o=H(V(a),1/3)*(0>a?-1:1),s=i+o+.5;return 3*(1-s)*s*s+s*s*s},backIn:function(t){var e=1.70158;return t*t*((e+1)*t-e)},backOut:function(t){t-=1;var e=1.70158;return t*t*((e+1)*t+e)+1},elastic:function(t){return t==!!t?t:H(2,-10*t)*D.sin(2*(t-.075)*W/.3)+1},bounce:function(t){var e,r=7.5625,n=2.75;return 1/n>t?e=r*t*t:2/n>t?(t-=1.5/n,e=r*t*t+.75):2.5/n>t?(t-=2.25/n,e=r*t*t+.9375):(t-=2.625/n,e=r*t*t+.984375),e}};se.easeIn=se["ease-in"]=se["<"],se.easeOut=se["ease-out"]=se[">"],se.easeInOut=se["ease-in-out"]=se["<>"],se["back-in"]=se.backIn,se["back-out"]=se.backOut;var le=[],ue=t.requestAnimationFrame||t.webkitRequestAnimationFrame||t.mozRequestAnimationFrame||t.oRequestAnimationFrame||t.msRequestAnimationFrame||function(t){setTimeout(t,16)},he=function(){for(var t=+new Date,n=0;n<le.length;n++){var i=le[n];if(!i.el.removed&&!i.paused){var a,o,s=t-i.start,l=i.ms,u=i.easing,h=i.from,c=i.diff,f=i.to,p=(i.t,i.el),d={},g={};if(i.initstatus?(s=(i.initstatus*i.anim.top-i.prev)/(i.percent-i.prev)*l,i.status=i.initstatus,delete i.initstatus,i.stop&&le.splice(n--,1)):i.status=(i.prev+(i.percent-i.prev)*(s/l))/i.anim.top,!(0>s))if(l>s){var v=u(s/l);for(var m in h)if(h[S](m)){switch(nt[m]){case G:a=+h[m]+v*l*c[m];break;case"colour":a="rgb("+[ce(J(h[m].r+v*l*c[m].r)),ce(J(h[m].g+v*l*c[m].g)),ce(J(h[m].b+v*l*c[m].b))].join(",")+")";break;case"path":a=[];for(var x=0,b=h[m].length;b>x;x++){a[x]=[h[m][x][0]];for(var w=1,_=h[m][x].length;_>w;w++)a[x][w]=+h[m][x][w]+v*l*c[m][x][w];a[x]=a[x].join(P)}a=a.join(P);break;case"transform":if(c[m].real)for(a=[],x=0,b=h[m].length;b>x;x++)for(a[x]=[h[m][x][0]],w=1,_=h[m][x].length;_>w;w++)a[x][w]=h[m][x][w]+v*l*c[m][x][w];else{var k=function(t){return+h[m][t]+v*l*c[m][t]};a=[["m",k(0),k(1),k(2),k(3),k(4),k(5)]]}break;case"csv":if("clip-rect"==m)for(a=[],x=4;x--;)a[x]=+h[m][x]+v*l*c[m][x];break;default:var C=[][N](h[m]);for(a=[],x=p.paper.customAttributes[m].length;x--;)a[x]=+C[x]+v*l*c[m][x]}d[m]=a}p.attr(d),function(t,r,n){setTimeout(function(){e("raphael.anim.frame."+t,r,n)})}(p.id,p,i.anim)}else{if(function(t,n,i){setTimeout(function(){e("raphael.anim.frame."+n.id,n,i),e("raphael.anim.finish."+n.id,n,i),r.is(t,"function")&&t.call(n)})}(i.callback,p,i.anim),p.attr(f),le.splice(n--,1),i.repeat>1&&!i.next){for(o in f)f[S](o)&&(g[o]=i.totalOrigin[o]);i.el.attr(g),y(i.anim,i.el,i.anim.percents[0],null,i.totalOrigin,i.repeat-1)}i.next&&!i.stop&&y(i.anim,i.el,i.next,null,i.totalOrigin,i.repeat)}}}r.svg&&p&&p.paper&&p.paper.safari(),le.length&&ue(he)},ce=function(t){return t>255?255:0>t?0:t};Jt.animateWith=function(t,e,n,i,a,o){var s=this;if(s.removed)return o&&o.call(s),s;var l=n instanceof m?n:r.animation(n,i,a,o);y(l,s,l.percents[0],null,s.attr());for(var u=0,h=le.length;h>u;u++)if(le[u].anim==e&&le[u].el==t){le[h-1].start=le[u].start;break}return s},Jt.onAnimation=function(t){return t?e.on("raphael.anim.frame."+this.id,t):e.unbind("raphael.anim.frame."+this.id),this},m.prototype.delay=function(t){var e=new m(this.anim,this.ms);return e.times=this.times,e.del=+t||0,e},m.prototype.repeat=function(t){var e=new m(this.anim,this.ms);return e.del=this.del,e.times=D.floor(O(t,0))||1,e},r.animation=function(t,e,n,i){
    if(t instanceof m)return t;(r.is(n,"function")||!n)&&(i=i||n||null,n=null),t=Object(t),e=+e||0;var a,o,s={};for(o in t)t[S](o)&&K(o)!=o&&K(o)+"%"!=o&&(a=!0,s[o]=t[o]);return a?(n&&(s.easing=n),i&&(s.callback=i),new m({100:s},e)):new m(t,e)},Jt.animate=function(t,e,n,i){var a=this;if(a.removed)return i&&i.call(a),a;var o=t instanceof m?t:r.animation(t,e,n,i);return y(o,a,o.percents[0],null,a.attr()),a},Jt.setTime=function(t,e){return t&&null!=e&&this.status(t,q(e,t.ms)/t.ms),this},Jt.status=function(t,e){var r,n,i=[],a=0;if(null!=e)return y(t,this,-1,q(e,1)),this;for(r=le.length;r>a;a++)if(n=le[a],n.el.id==this.id&&(!t||n.anim==t)){if(t)return n.status;i.push({anim:n.anim,status:n.status})}return t?0:i},Jt.pause=function(t){for(var r=0;r<le.length;r++)le[r].el.id!=this.id||t&&le[r].anim!=t||e("raphael.anim.pause."+this.id,this,le[r].anim)!==!1&&(le[r].paused=!0);return this},Jt.resume=function(t){for(var r=0;r<le.length;r++)if(le[r].el.id==this.id&&(!t||le[r].anim==t)){var n=le[r];e("raphael.anim.resume."+this.id,this,n.anim)!==!1&&(delete n.paused,this.status(n.anim,n.status))}return this},Jt.stop=function(t){for(var r=0;r<le.length;r++)le[r].el.id!=this.id||t&&le[r].anim!=t||e("raphael.anim.stop."+this.id,this,le[r].anim)!==!1&&le.splice(r--,1);return this},e.on("raphael.remove",x),e.on("raphael.clear",x),Jt.toString=function(){return"RaphaГ«lвЂ™s object"};var fe=function(t){if(this.items=[],this.length=0,this.type="set",t)for(var e=0,r=t.length;r>e;e++)!t[e]||t[e].constructor!=Jt.constructor&&t[e].constructor!=fe||(this[this.items.length]=this.items[this.items.length]=t[e],this.length++)},pe=fe.prototype;pe.push=function(){for(var t,e,r=0,n=arguments.length;n>r;r++)t=arguments[r],!t||t.constructor!=Jt.constructor&&t.constructor!=fe||(e=this.items.length,this[e]=this.items[e]=t,this.length++);return this},pe.pop=function(){return this.length&&delete this[this.length--],this.items.pop()},pe.forEach=function(t,e){for(var r=0,n=this.items.length;n>r;r++)if(t.call(e,this.items[r],r)===!1)return this;return this};for(var de in Jt)Jt[S](de)&&(pe[de]=function(t){return function(){var e=arguments;return this.forEach(function(r){r[t][A](r,e)})}}(de));return pe.attr=function(t,e){if(t&&r.is(t,$)&&r.is(t[0],"object"))for(var n=0,i=t.length;i>n;n++)this.items[n].attr(t[n]);else for(var a=0,o=this.items.length;o>a;a++)this.items[a].attr(t,e);return this},pe.clear=function(){for(;this.length;)this.pop()},pe.splice=function(t,e){t=0>t?O(this.length+t,0):t,e=O(0,q(this.length-t,e));var r,n=[],i=[],a=[];for(r=2;r<arguments.length;r++)a.push(arguments[r]);for(r=0;e>r;r++)i.push(this[t+r]);for(;r<this.length-t;r++)n.push(this[t+r]);var o=a.length;for(r=0;r<o+n.length;r++)this.items[t+r]=this[t+r]=o>r?a[r]:n[r-o];for(r=this.items.length=this.length-=e-o;this[r];)delete this[r++];return new fe(i)},pe.exclude=function(t){for(var e=0,r=this.length;r>e;e++)if(this[e]==t)return this.splice(e,1),!0},pe.animate=function(t,e,n,i){(r.is(n,"function")||!n)&&(i=n||null);var a,o,s=this.items.length,l=s,u=this;if(!s)return this;i&&(o=function(){!--s&&i.call(u)}),n=r.is(n,Y)?n:o;var h=r.animation(t,e,n,o);for(a=this.items[--l].animate(h);l--;)this.items[l]&&!this.items[l].removed&&this.items[l].animateWith(a,h,h),this.items[l]&&!this.items[l].removed||s--;return this},pe.insertAfter=function(t){for(var e=this.items.length;e--;)this.items[e].insertAfter(t);return this},pe.getBBox=function(){for(var t=[],e=[],r=[],n=[],i=this.items.length;i--;)if(!this.items[i].removed){var a=this.items[i].getBBox();t.push(a.x),e.push(a.y),r.push(a.x+a.width),n.push(a.y+a.height)}return t=q[A](0,t),e=q[A](0,e),r=O[A](0,r),n=O[A](0,n),{x:t,y:e,x2:r,y2:n,width:r-t,height:n-e}},pe.clone=function(t){t=this.paper.set();for(var e=0,r=this.items.length;r>e;e++)t.push(this.items[e].clone());return t},pe.toString=function(){return"RaphaГ«lвЂs set"},pe.glow=function(t){var e=this.paper.set();return this.forEach(function(r){var n=r.glow(t);null!=n&&n.forEach(function(t){e.push(t)})}),e},pe.isPointInside=function(t,e){var r=!1;return this.forEach(function(n){return n.isPointInside(t,e)?(console.log("runned"),r=!0,!1):void 0}),r},r.registerFont=function(t){if(!t.face)return t;this.fonts=this.fonts||{};var e={w:t.w,face:{},glyphs:{}},r=t.face["font-family"];for(var n in t.face)t.face[S](n)&&(e.face[n]=t.face[n]);if(this.fonts[r]?this.fonts[r].push(e):this.fonts[r]=[e],!t.svg){e.face["units-per-em"]=tt(t.face["units-per-em"],10);for(var i in t.glyphs)if(t.glyphs[S](i)){var a=t.glyphs[i];if(e.glyphs[i]={w:a.w,k:{},d:a.d&&"M"+a.d.replace(/[mlcxtrv]/g,function(t){return{l:"L",c:"C",x:"z",t:"m",r:"l",v:"c"}[t]||"M"})+"z"},a.k)for(var o in a.k)a[S](o)&&(e.glyphs[i].k[o]=a.k[o])}}return t},w.getFont=function(t,e,n,i){if(i=i||"normal",n=n||"normal",e=+e||{normal:400,bold:700,lighter:300,bolder:800}[e]||400,r.fonts){var a=r.fonts[t];if(!a){var o=new RegExp("(^|\\s)"+t.replace(/[^\w\d\s+!~.:_-]/g,M)+"(\\s|$)","i");for(var s in r.fonts)if(r.fonts[S](s)&&o.test(s)){a=r.fonts[s];break}}var l;if(a)for(var u=0,h=a.length;h>u&&(l=a[u],l.face["font-weight"]!=e||l.face["font-style"]!=n&&l.face["font-style"]||l.face["font-stretch"]!=i);u++);return l}},w.print=function(t,e,n,i,a,o,s,l){o=o||"middle",s=O(q(s||0,1),-1),l=O(q(l||1,3),1);var u,h=z(n)[F](M),c=0,f=0,p=M;if(r.is(i,"string")&&(i=this.getFont(i)),i){u=(a||16)/i.face["units-per-em"];for(var d=i.face.bbox[F](_),g=+d[0],v=d[3]-d[1],m=0,y=+d[1]+("baseline"==o?v+ +i.face.descent:v/2),x=0,b=h.length;b>x;x++){if("\n"==h[x])c=0,k=0,f=0,m+=v*l;else{var w=f&&i.glyphs[h[x-1]]||{},k=i.glyphs[h[x]];c+=f?(w.w||i.w)+(w.k&&w.k[h[x]]||0)+i.w*s:0,f=1}k&&k.d&&(p+=r.transformPath(k.d,["t",c*u,m*u,"s",u,u,g,y,"t",(t-g)/u,(e-y)/u]))}}return this.path(p).attr({fill:"#000",stroke:"none"})},w.add=function(t){if(r.is(t,"array"))for(var e,n=this.set(),i=0,a=t.length;a>i;i++)e=t[i]||{},k[S](e.type)&&n.push(this[e.type]().attr(e));return n},r.format=function(t,e){var n=r.is(e,$)?[0][N](e):arguments;return t&&r.is(t,Y)&&n.length-1&&(t=t.replace(C,function(t,e){return null==n[++e]?M:n[e]})),t||M},r.fullfill=function(){var t=/\{([^\}]+)\}/g,e=/(?:(?:^|\.)(.+?)(?=\[|\.|$|\()|\[('|")(.+?)\2\])(\(\))?/g,r=function(t,r,n){var i=n;return r.replace(e,function(t,e,r,n,a){e=e||n,i&&(e in i&&(i=i[e]),"function"==typeof i&&a&&(i=i()))}),i=(null==i||i==n?t:i)+""};return function(e,n){return String(e).replace(t,function(t,e){return r(t,e,n)})}}(),r.ninja=function(){return E.was?B.win.Raphael=E.is:delete Raphael,r},r.st=pe,function(t,e,n){function i(){/in/.test(t.readyState)?setTimeout(i,9):r.eve("raphael.DOMload")}null==t.readyState&&t.addEventListener&&(t.addEventListener(e,n=function(){t.removeEventListener(e,n,!1),t.readyState="complete"},!1),t.readyState="loading"),i()}(document,"DOMContentLoaded"),e.on("raphael.DOMload",function(){b=!0}),function(){if(r.svg){var t="hasOwnProperty",e=String,n=parseFloat,i=parseInt,a=Math,o=a.max,s=a.abs,l=a.pow,u=/[, ]+/,h=r.eve,c="",f=" ",p="http://www.w3.org/1999/xlink",d={block:"M5,0 0,2.5 5,5z",classic:"M5,0 0,2.5 5,5 3.5,3 3.5,2z",diamond:"M2.5,0 5,2.5 2.5,5 0,2.5z",open:"M6,1 1,3.5 6,6",oval:"M2.5,0A2.5,2.5,0,0,1,2.5,5 2.5,2.5,0,0,1,2.5,0z"},g={};r.toString=function(){return"Your browser supports SVG.\nYou are running RaphaГ«l "+this.version};var v=function(n,i){if(i){"string"==typeof n&&(n=v(n));for(var a in i)i[t](a)&&("xlink:"==a.substring(0,6)?n.setAttributeNS(p,a.substring(6),e(i[a])):n.setAttribute(a,e(i[a])))}else n=r._g.doc.createElementNS("http://www.w3.org/2000/svg",n),n.style&&(n.style.webkitTapHighlightColor="rgba(0,0,0,0)");return n},m=function(t,i){var u="linear",h=t.id+i,f=.5,p=.5,d=t.node,g=t.paper,m=d.style,y=r._g.doc.getElementById(h);if(!y){if(i=e(i).replace(r._radial_gradient,function(t,e,r){if(u="radial",e&&r){f=n(e),p=n(r);var i=2*(p>.5)-1;l(f-.5,2)+l(p-.5,2)>.25&&(p=a.sqrt(.25-l(f-.5,2))*i+.5)&&.5!=p&&(p=p.toFixed(5)-1e-5*i)}return c}),i=i.split(/\s*\-\s*/),"linear"==u){var x=i.shift();if(x=-n(x),isNaN(x))return null;var b=[0,0,a.cos(r.rad(x)),a.sin(r.rad(x))],w=1/(o(s(b[2]),s(b[3]))||1);b[2]*=w,b[3]*=w,b[2]<0&&(b[0]=-b[2],b[2]=0),b[3]<0&&(b[1]=-b[3],b[3]=0)}var _=r._parseDots(i);if(!_)return null;if(h=h.replace(/[\(\)\s,\xb0#]/g,"_"),t.gradient&&h!=t.gradient.id&&(g.defs.removeChild(t.gradient),delete t.gradient),!t.gradient){y=v(u+"Gradient",{id:h}),t.gradient=y,v(y,"radial"==u?{fx:f,fy:p}:{x1:b[0],y1:b[1],x2:b[2],y2:b[3],gradientTransform:t.matrix.invert()}),g.defs.appendChild(y);for(var k=0,C=_.length;C>k;k++)y.appendChild(v("stop",{offset:_[k].offset?_[k].offset:k?"100%":"0%","stop-color":_[k].color||"#fff"}))}}return v(d,{fill:"url(#"+h+")",opacity:1,"fill-opacity":1}),m.fill=c,m.opacity=1,m.fillOpacity=1,1},y=function(t){var e=t.getBBox(1);v(t.pattern,{patternTransform:t.matrix.invert()+" translate("+e.x+","+e.y+")"})},x=function(n,i,a){if("path"==n.type){for(var o,s,l,u,h,f=e(i).toLowerCase().split("-"),p=n.paper,m=a?"end":"start",y=n.node,x=n.attrs,b=x["stroke-width"],w=f.length,_="classic",k=3,C=3,S=5;w--;)switch(f[w]){case"block":case"classic":case"oval":case"diamond":case"open":case"none":_=f[w];break;case"wide":C=5;break;case"narrow":C=2;break;case"long":k=5;break;case"short":k=2}if("open"==_?(k+=2,C+=2,S+=2,l=1,u=a?4:1,h={fill:"none",stroke:x.stroke}):(u=l=k/2,h={fill:x.stroke,stroke:"none"}),n._.arrows?a?(n._.arrows.endPath&&g[n._.arrows.endPath]--,n._.arrows.endMarker&&g[n._.arrows.endMarker]--):(n._.arrows.startPath&&g[n._.arrows.startPath]--,n._.arrows.startMarker&&g[n._.arrows.startMarker]--):n._.arrows={},"none"!=_){var B="raphael-marker-"+_,E="raphael-marker-"+m+_+k+C;r._g.doc.getElementById(B)?g[B]++:(p.defs.appendChild(v(v("path"),{"stroke-linecap":"round",d:d[_],id:B})),g[B]=1);var T,A=r._g.doc.getElementById(E);A?(g[E]++,T=A.getElementsByTagName("use")[0]):(A=v(v("marker"),{id:E,markerHeight:C,markerWidth:k,orient:"auto",refX:u,refY:C/2}),T=v(v("use"),{"xlink:href":"#"+B,transform:(a?"rotate(180 "+k/2+" "+C/2+") ":c)+"scale("+k/S+","+C/S+")","stroke-width":(1/((k/S+C/S)/2)).toFixed(4)}),A.appendChild(T),p.defs.appendChild(A),g[E]=1),v(T,h);var N=l*("diamond"!=_&&"oval"!=_);a?(o=n._.arrows.startdx*b||0,s=r.getTotalLength(x.path)-N*b):(o=N*b,s=r.getTotalLength(x.path)-(n._.arrows.enddx*b||0)),h={},h["marker-"+m]="url(#"+E+")",(s||o)&&(h.d=r.getSubpath(x.path,o,s)),v(y,h),n._.arrows[m+"Path"]=B,n._.arrows[m+"Marker"]=E,n._.arrows[m+"dx"]=N,n._.arrows[m+"Type"]=_,n._.arrows[m+"String"]=i}else a?(o=n._.arrows.startdx*b||0,s=r.getTotalLength(x.path)-o):(o=0,s=r.getTotalLength(x.path)-(n._.arrows.enddx*b||0)),n._.arrows[m+"Path"]&&v(y,{d:r.getSubpath(x.path,o,s)}),delete n._.arrows[m+"Path"],delete n._.arrows[m+"Marker"],delete n._.arrows[m+"dx"],delete n._.arrows[m+"Type"],delete n._.arrows[m+"String"];for(h in g)if(g[t](h)&&!g[h]){var L=r._g.doc.getElementById(h);L&&L.parentNode.removeChild(L)}}},b={"":[0],none:[0],"-":[3,1],".":[1,1],"-.":[3,1,1,1],"-..":[3,1,1,1,1,1],". ":[1,3],"- ":[4,3],"--":[8,3],"- .":[4,3,1,3],"--.":[8,3,1,3],"--..":[8,3,1,3,1,3]},w=function(t,r,n){if(r=b[e(r).toLowerCase()]){for(var i=t.attrs["stroke-width"]||"1",a={round:i,square:i,butt:0}[t.attrs["stroke-linecap"]||n["stroke-linecap"]]||0,o=[],s=r.length;s--;)o[s]=r[s]*i+(s%2?1:-1)*a;v(t.node,{"stroke-dasharray":o.join(",")})}},_=function(n,a){var l=n.node,h=n.attrs,f=l.style.visibility;l.style.visibility="hidden";for(var d in a)if(a[t](d)){if(!r._availableAttrs[t](d))continue;var g=a[d];switch(h[d]=g,d){case"blur":n.blur(g);break;case"href":case"title":var b=v("title"),_=r._g.doc.createTextNode(g);b.appendChild(_),l.appendChild(b);break;case"target":var k=l.parentNode;if("a"!=k.tagName.toLowerCase()){var b=v("a");k.insertBefore(b,l),b.appendChild(l),k=b}"target"==d?k.setAttributeNS(p,"show","blank"==g?"new":g):k.setAttributeNS(p,d,g);break;case"cursor":l.style.cursor=g;break;case"transform":n.transform(g);break;case"arrow-start":x(n,g);break;case"arrow-end":x(n,g,1);break;case"clip-rect":var S=e(g).split(u);if(4==S.length){n.clip&&n.clip.parentNode.parentNode.removeChild(n.clip.parentNode);var B=v("clipPath"),E=v("rect");B.id=r.createUUID(),v(E,{x:S[0],y:S[1],width:S[2],height:S[3]}),B.appendChild(E),n.paper.defs.appendChild(B),v(l,{"clip-path":"url(#"+B.id+")"}),n.clip=E}if(!g){var T=l.getAttribute("clip-path");if(T){var A=r._g.doc.getElementById(T.replace(/(^url\(#|\)$)/g,c));A&&A.parentNode.removeChild(A),v(l,{"clip-path":c}),delete n.clip}}break;case"path":"path"==n.type&&(v(l,{d:g?h.path=r._pathToAbsolute(g):"M0,0"}),n._.dirty=1,n._.arrows&&("startString"in n._.arrows&&x(n,n._.arrows.startString),"endString"in n._.arrows&&x(n,n._.arrows.endString,1)));break;case"width":if(l.setAttribute(d,g),n._.dirty=1,!h.fx)break;d="x",g=h.x;case"x":h.fx&&(g=-h.x-(h.width||0));case"rx":if("rx"==d&&"rect"==n.type)break;case"cx":l.setAttribute(d,g),n.pattern&&y(n),n._.dirty=1;break;case"height":if(l.setAttribute(d,g),n._.dirty=1,!h.fy)break;d="y",g=h.y;case"y":h.fy&&(g=-h.y-(h.height||0));case"ry":if("ry"==d&&"rect"==n.type)break;case"cy":l.setAttribute(d,g),n.pattern&&y(n),n._.dirty=1;break;case"r":"rect"==n.type?v(l,{rx:g,ry:g}):l.setAttribute(d,g),n._.dirty=1;break;case"src":"image"==n.type&&l.setAttributeNS(p,"href",g);break;case"stroke-width":(1!=n._.sx||1!=n._.sy)&&(g/=o(s(n._.sx),s(n._.sy))||1),n.paper._vbSize&&(g*=n.paper._vbSize),l.setAttribute(d,g),h["stroke-dasharray"]&&w(n,h["stroke-dasharray"],a),n._.arrows&&("startString"in n._.arrows&&x(n,n._.arrows.startString),"endString"in n._.arrows&&x(n,n._.arrows.endString,1));break;case"stroke-dasharray":w(n,g,a);break;case"fill":var N=e(g).match(r._ISURL);if(N){B=v("pattern");var L=v("image");B.id=r.createUUID(),v(B,{x:0,y:0,patternUnits:"userSpaceOnUse",height:1,width:1}),v(L,{x:0,y:0,"xlink:href":N[1]}),B.appendChild(L),function(t){r._preload(N[1],function(){var e=this.offsetWidth,r=this.offsetHeight;v(t,{width:e,height:r}),v(L,{width:e,height:r}),n.paper.safari()})}(B),n.paper.defs.appendChild(B),v(l,{fill:"url(#"+B.id+")"}),n.pattern=B,n.pattern&&y(n);break}var M=r.getRGB(g);if(M.error){if(("circle"==n.type||"ellipse"==n.type||"r"!=e(g).charAt())&&m(n,g)){if("opacity"in h||"fill-opacity"in h){var P=r._g.doc.getElementById(l.getAttribute("fill").replace(/^url\(#|\)$/g,c));if(P){var z=P.getElementsByTagName("stop");v(z[z.length-1],{"stop-opacity":("opacity"in h?h.opacity:1)*("fill-opacity"in h?h["fill-opacity"]:1)})}}h.gradient=g,h.fill="none";break}}else delete a.gradient,delete h.gradient,!r.is(h.opacity,"undefined")&&r.is(a.opacity,"undefined")&&v(l,{opacity:h.opacity}),!r.is(h["fill-opacity"],"undefined")&&r.is(a["fill-opacity"],"undefined")&&v(l,{"fill-opacity":h["fill-opacity"]});M[t]("opacity")&&v(l,{"fill-opacity":M.opacity>1?M.opacity/100:M.opacity});case"stroke":M=r.getRGB(g),l.setAttribute(d,M.hex),"stroke"==d&&M[t]("opacity")&&v(l,{"stroke-opacity":M.opacity>1?M.opacity/100:M.opacity}),"stroke"==d&&n._.arrows&&("startString"in n._.arrows&&x(n,n._.arrows.startString),"endString"in n._.arrows&&x(n,n._.arrows.endString,1));break;case"gradient":("circle"==n.type||"ellipse"==n.type||"r"!=e(g).charAt())&&m(n,g);break;case"opacity":h.gradient&&!h[t]("stroke-opacity")&&v(l,{"stroke-opacity":g>1?g/100:g});case"fill-opacity":if(h.gradient){P=r._g.doc.getElementById(l.getAttribute("fill").replace(/^url\(#|\)$/g,c)),P&&(z=P.getElementsByTagName("stop"),v(z[z.length-1],{"stop-opacity":g}));break}default:"font-size"==d&&(g=i(g,10)+"px");var F=d.replace(/(\-.)/g,function(t){return t.substring(1).toUpperCase()});l.style[F]=g,n._.dirty=1,l.setAttribute(d,g)}}C(n,a),l.style.visibility=f},k=1.2,C=function(n,a){if("text"==n.type&&(a[t]("text")||a[t]("font")||a[t]("font-size")||a[t]("x")||a[t]("y"))){var o=n.attrs,s=n.node,l=s.firstChild?i(r._g.doc.defaultView.getComputedStyle(s.firstChild,c).getPropertyValue("font-size"),10):10;if(a[t]("text")){for(o.text=a.text;s.firstChild;)s.removeChild(s.firstChild);for(var u,h=e(a.text).split("\n"),f=[],p=0,d=h.length;d>p;p++)u=v("tspan"),p&&v(u,{dy:l*k,x:o.x}),u.appendChild(r._g.doc.createTextNode(h[p])),s.appendChild(u),f[p]=u}else for(f=s.getElementsByTagName("tspan"),p=0,d=f.length;d>p;p++)p?v(f[p],{dy:l*k,x:o.x}):v(f[0],{dy:0});v(s,{x:o.x,y:o.y}),n._.dirty=1;var g=n._getBBox(),m=o.y-(g.y+g.height/2);m&&r.is(m,"finite")&&v(f[0],{dy:m})}},S=function(t,e){this[0]=this.node=t,t.raphael=!0,this.id=r._oid++,t.raphaelid=this.id,this.matrix=r.matrix(),this.realPath=null,this.paper=e,this.attrs=this.attrs||{},this._={transform:[],sx:1,sy:1,deg:0,dx:0,dy:0,dirty:1},!e.bottom&&(e.bottom=this),this.prev=e.top,e.top&&(e.top.next=this),e.top=this,this.next=null},B=r.el;S.prototype=B,B.constructor=S,r._engine.path=function(t,e){var r=v("path");e.canvas&&e.canvas.appendChild(r);var n=new S(r,e);return n.type="path",_(n,{fill:"none",stroke:"#000",path:t}),n},B.rotate=function(t,r,i){if(this.removed)return this;if(t=e(t).split(u),t.length-1&&(r=n(t[1]),i=n(t[2])),t=n(t[0]),null==i&&(r=i),null==r||null==i){var a=this.getBBox(1);r=a.x+a.width/2,i=a.y+a.height/2}return this.transform(this._.transform.concat([["r",t,r,i]])),this},B.scale=function(t,r,i,a){if(this.removed)return this;if(t=e(t).split(u),t.length-1&&(r=n(t[1]),i=n(t[2]),a=n(t[3])),t=n(t[0]),null==r&&(r=t),null==a&&(i=a),null==i||null==a)var o=this.getBBox(1);return i=null==i?o.x+o.width/2:i,a=null==a?o.y+o.height/2:a,this.transform(this._.transform.concat([["s",t,r,i,a]])),this},B.translate=function(t,r){return this.removed?this:(t=e(t).split(u),t.length-1&&(r=n(t[1])),t=n(t[0])||0,r=+r||0,this.transform(this._.transform.concat([["t",t,r]])),this)},B.transform=function(e){var n=this._;if(null==e)return n.transform;if(r._extractTransform(this,e),this.clip&&v(this.clip,{transform:this.matrix.invert()}),this.pattern&&y(this),this.node&&v(this.node,{transform:this.matrix}),1!=n.sx||1!=n.sy){var i=this.attrs[t]("stroke-width")?this.attrs["stroke-width"]:1;this.attr({"stroke-width":i})}return this},B.hide=function(){return!this.removed&&this.paper.safari(this.node.style.display="none"),this},B.show=function(){return!this.removed&&this.paper.safari(this.node.style.display=""),this},B.remove=function(){if(!this.removed&&this.node.parentNode){var t=this.paper;t.__set__&&t.__set__.exclude(this),h.unbind("raphael.*.*."+this.id),this.gradient&&t.defs.removeChild(this.gradient),r._tear(this,t),"a"==this.node.parentNode.tagName.toLowerCase()?this.node.parentNode.parentNode.removeChild(this.node.parentNode):this.node.parentNode.removeChild(this.node);for(var e in this)this[e]="function"==typeof this[e]?r._removedFactory(e):null;this.removed=!0}},B._getBBox=function(){if("none"==this.node.style.display){this.show();var t=!0}var e={};try{e=this.node.getBBox()}catch(r){}finally{e=e||{}}return t&&this.hide(),e},B.attr=function(e,n){if(this.removed)return this;if(null==e){var i={};for(var a in this.attrs)this.attrs[t](a)&&(i[a]=this.attrs[a]);return i.gradient&&"none"==i.fill&&(i.fill=i.gradient)&&delete i.gradient,i.transform=this._.transform,i}if(null==n&&r.is(e,"string")){if("fill"==e&&"none"==this.attrs.fill&&this.attrs.gradient)return this.attrs.gradient;if("transform"==e)return this._.transform;for(var o=e.split(u),s={},l=0,c=o.length;c>l;l++)e=o[l],s[e]=e in this.attrs?this.attrs[e]:r.is(this.paper.customAttributes[e],"function")?this.paper.customAttributes[e].def:r._availableAttrs[e];return c-1?s:s[o[0]]}if(null==n&&r.is(e,"array")){for(s={},l=0,c=e.length;c>l;l++)s[e[l]]=this.attr(e[l]);return s}if(null!=n){var f={};f[e]=n}else null!=e&&r.is(e,"object")&&(f=e);for(var p in f)h("raphael.attr."+p+"."+this.id,this,f[p]);for(p in this.paper.customAttributes)if(this.paper.customAttributes[t](p)&&f[t](p)&&r.is(this.paper.customAttributes[p],"function")){var d=this.paper.customAttributes[p].apply(this,[].concat(f[p]));this.attrs[p]=f[p];for(var g in d)d[t](g)&&(f[g]=d[g])}return _(this,f),this},B.toFront=function(){if(this.removed)return this;"a"==this.node.parentNode.tagName.toLowerCase()?this.node.parentNode.parentNode.appendChild(this.node.parentNode):this.node.parentNode.appendChild(this.node);var t=this.paper;return t.top!=this&&r._tofront(this,t),this},B.toBack=function(){if(this.removed)return this;var t=this.node.parentNode;return"a"==t.tagName.toLowerCase()?t.parentNode.insertBefore(this.node.parentNode,this.node.parentNode.parentNode.firstChild):t.firstChild!=this.node&&t.insertBefore(this.node,this.node.parentNode.firstChild),r._toback(this,this.paper),this.paper,this},B.insertAfter=function(t){if(this.removed)return this;var e=t.node||t[t.length-1].node;return e.nextSibling?e.parentNode.insertBefore(this.node,e.nextSibling):e.parentNode.appendChild(this.node),r._insertafter(this,t,this.paper),this},B.insertBefore=function(t){if(this.removed)return this;var e=t.node||t[0].node;return e.parentNode.insertBefore(this.node,e),r._insertbefore(this,t,this.paper),this},B.blur=function(t){var e=this;if(0!==+t){var n=v("filter"),i=v("feGaussianBlur");e.attrs.blur=t,n.id=r.createUUID(),v(i,{stdDeviation:+t||1.5}),n.appendChild(i),e.paper.defs.appendChild(n),e._blur=n,v(e.node,{filter:"url(#"+n.id+")"})}else e._blur&&(e._blur.parentNode.removeChild(e._blur),delete e._blur,delete e.attrs.blur),e.node.removeAttribute("filter");return e},r._engine.circle=function(t,e,r,n){var i=v("circle");t.canvas&&t.canvas.appendChild(i);var a=new S(i,t);return a.attrs={cx:e,cy:r,r:n,fill:"none",stroke:"#000"},a.type="circle",v(i,a.attrs),a},r._engine.rect=function(t,e,r,n,i,a){var o=v("rect");t.canvas&&t.canvas.appendChild(o);var s=new S(o,t);return s.attrs={x:e,y:r,width:n,height:i,r:a||0,rx:a||0,ry:a||0,fill:"none",stroke:"#000"},s.type="rect",v(o,s.attrs),s},r._engine.ellipse=function(t,e,r,n,i){var a=v("ellipse");t.canvas&&t.canvas.appendChild(a);var o=new S(a,t);return o.attrs={cx:e,cy:r,rx:n,ry:i,fill:"none",stroke:"#000"},o.type="ellipse",v(a,o.attrs),o},r._engine.image=function(t,e,r,n,i,a){var o=v("image");v(o,{x:r,y:n,width:i,height:a,preserveAspectRatio:"none"}),o.setAttributeNS(p,"href",e),t.canvas&&t.canvas.appendChild(o);var s=new S(o,t);return s.attrs={x:r,y:n,width:i,height:a,src:e},s.type="image",s},r._engine.text=function(t,e,n,i){var a=v("text");t.canvas&&t.canvas.appendChild(a);var o=new S(a,t);return o.attrs={x:e,y:n,"text-anchor":"middle",text:i,font:r._availableAttrs.font,stroke:"none",fill:"#000"},o.type="text",_(o,o.attrs),o},r._engine.setSize=function(t,e){return this.width=t||this.width,this.height=e||this.height,this.canvas.setAttribute("width",this.width),this.canvas.setAttribute("height",this.height),this._viewBox&&this.setViewBox.apply(this,this._viewBox),this},r._engine.create=function(){var t=r._getContainer.apply(0,arguments),e=t&&t.container,n=t.x,i=t.y,a=t.width,o=t.height;if(!e)throw new Error("SVG container not found.");var s,l=v("svg"),u="overflow:hidden;";return n=n||0,i=i||0,a=a||512,o=o||342,v(l,{height:o,version:1.1,width:a,xmlns:"http://www.w3.org/2000/svg"}),1==e?(l.style.cssText=u+"position:absolute;left:"+n+"px;top:"+i+"px",r._g.doc.body.appendChild(l),s=1):(l.style.cssText=u+"position:relative",e.firstChild?e.insertBefore(l,e.firstChild):e.appendChild(l)),e=new r._Paper,e.width=a,e.height=o,e.canvas=l,e.clear(),e._left=e._top=0,s&&(e.renderfix=function(){}),e.renderfix(),e},r._engine.setViewBox=function(t,e,r,n,i){h("raphael.setViewBox",this,this._viewBox,[t,e,r,n,i]);var a,s,l=o(r/this.width,n/this.height),u=this.top,c=i?"meet":"xMinYMin";for(null==t?(this._vbSize&&(l=1),delete this._vbSize,a="0 0 "+this.width+f+this.height):(this._vbSize=l,a=t+f+e+f+r+f+n),v(this.canvas,{viewBox:a,preserveAspectRatio:c});l&&u;)s="stroke-width"in u.attrs?u.attrs["stroke-width"]:1,u.attr({"stroke-width":s}),u._.dirty=1,u._.dirtyT=1,u=u.prev;return this._viewBox=[t,e,r,n,!!i],this},r.prototype.renderfix=function(){var t,e=this.canvas,r=e.style;try{t=e.getScreenCTM()||e.createSVGMatrix()}catch(n){t=e.createSVGMatrix()}var i=-t.e%1,a=-t.f%1;(i||a)&&(i&&(this._left=(this._left+i)%1,r.left=this._left+"px"),a&&(this._top=(this._top+a)%1,r.top=this._top+"px"))},r.prototype.clear=function(){r.eve("raphael.clear",this);for(var t=this.canvas;t.firstChild;)t.removeChild(t.firstChild);this.bottom=this.top=null,(this.desc=v("desc")).appendChild(r._g.doc.createTextNode("Created with RaphaГ«l "+r.version)),t.appendChild(this.desc),t.appendChild(this.defs=v("defs"))},r.prototype.remove=function(){h("raphael.remove",this),this.canvas.parentNode&&this.canvas.parentNode.removeChild(this.canvas);for(var t in this)this[t]="function"==typeof this[t]?r._removedFactory(t):null};var E=r.st;for(var T in B)B[t](T)&&!E[t](T)&&(E[T]=function(t){return function(){var e=arguments;return this.forEach(function(r){r[t].apply(r,e)})}}(T))}}(),function(){if(r.vml){var t="hasOwnProperty",e=String,n=parseFloat,i=Math,a=i.round,o=i.max,s=i.min,l=i.abs,u="fill",h=/[, ]+/,c=r.eve,f=" progid:DXImageTransform.Microsoft",p=" ",d="",g={M:"m",L:"l",C:"c",Z:"x",m:"t",l:"r",c:"v",z:"x"},v=/([clmz]),?([^clmz]*)/gi,m=/ progid:\S+Blur\([^\)]+\)/g,y=/-?[^,\s-]+/g,x="position:absolute;left:0;top:0;width:1px;height:1px",b=21600,w={path:1,rect:1,image:1},_={circle:1,ellipse:1},k=function(t){var n=/[ahqstv]/gi,i=r._pathToAbsolute;if(e(t).match(n)&&(i=r._path2curve),n=/[clmz]/g,i==r._pathToAbsolute&&!e(t).match(n)){var o=e(t).replace(v,function(t,e,r){var n=[],i="m"==e.toLowerCase(),o=g[e];return r.replace(y,function(t){i&&2==n.length&&(o+=n+g["m"==e?"l":"L"],n=[]),n.push(a(t*b))}),o+n});return o}var s,l,u=i(t);o=[];for(var h=0,c=u.length;c>h;h++){s=u[h],l=u[h][0].toLowerCase(),"z"==l&&(l="x");for(var f=1,m=s.length;m>f;f++)l+=a(s[f]*b)+(f!=m-1?",":d);o.push(l)}return o.join(p)},C=function(t,e,n){var i=r.matrix();return i.rotate(-t,.5,.5),{dx:i.x(e,n),dy:i.y(e,n)}},S=function(t,e,r,n,i,a){var o=t._,s=t.matrix,h=o.fillpos,c=t.node,f=c.style,d=1,g="",v=b/e,m=b/r;if(f.visibility="hidden",e&&r){if(c.coordsize=l(v)+p+l(m),f.rotation=a*(0>e*r?-1:1),a){var y=C(a,n,i);n=y.dx,i=y.dy}if(0>e&&(g+="x"),0>r&&(g+=" y")&&(d=-1),f.flip=g,c.coordorigin=n*-v+p+i*-m,h||o.fillsize){var x=c.getElementsByTagName(u);x=x&&x[0],c.removeChild(x),h&&(y=C(a,s.x(h[0],h[1]),s.y(h[0],h[1])),x.position=y.dx*d+p+y.dy*d),o.fillsize&&(x.size=o.fillsize[0]*l(e)+p+o.fillsize[1]*l(r)),c.appendChild(x)}f.visibility="visible"}};r.toString=function(){return"Your browser doesnвЂ™t support SVG. Falling down to VML.\nYou are running RaphaГ«l "+this.version};var B=function(t,r,n){for(var i=e(r).toLowerCase().split("-"),a=n?"end":"start",o=i.length,s="classic",l="medium",u="medium";o--;)switch(i[o]){case"block":case"classic":case"oval":case"diamond":case"open":case"none":s=i[o];break;case"wide":case"narrow":u=i[o];break;case"long":case"short":l=i[o]}var h=t.node.getElementsByTagName("stroke")[0];h[a+"arrow"]=s,h[a+"arrowlength"]=l,h[a+"arrowwidth"]=u},E=function(i,l){i.attrs=i.attrs||{};var c=i.node,f=i.attrs,g=c.style,v=w[i.type]&&(l.x!=f.x||l.y!=f.y||l.width!=f.width||l.height!=f.height||l.cx!=f.cx||l.cy!=f.cy||l.rx!=f.rx||l.ry!=f.ry||l.r!=f.r),m=_[i.type]&&(f.cx!=l.cx||f.cy!=l.cy||f.r!=l.r||f.rx!=l.rx||f.ry!=l.ry),y=i;for(var x in l)l[t](x)&&(f[x]=l[x]);if(v&&(f.path=r._getPath[i.type](i),i._.dirty=1),l.href&&(c.href=l.href),l.title&&(c.title=l.title),l.target&&(c.target=l.target),l.cursor&&(g.cursor=l.cursor),"blur"in l&&i.blur(l.blur),(l.path&&"path"==i.type||v)&&(c.path=k(~e(f.path).toLowerCase().indexOf("r")?r._pathToAbsolute(f.path):f.path),"image"==i.type&&(i._.fillpos=[f.x,f.y],i._.fillsize=[f.width,f.height],S(i,1,1,0,0,0))),"transform"in l&&i.transform(l.transform),m){var C=+f.cx,E=+f.cy,A=+f.rx||+f.r||0,N=+f.ry||+f.r||0;c.path=r.format("ar{0},{1},{2},{3},{4},{1},{4},{1}x",a((C-A)*b),a((E-N)*b),a((C+A)*b),a((E+N)*b),a(C*b)),i._.dirty=1}if("clip-rect"in l){var M=e(l["clip-rect"]).split(h);if(4==M.length){M[2]=+M[2]+ +M[0],M[3]=+M[3]+ +M[1];var P=c.clipRect||r._g.doc.createElement("div"),z=P.style;z.clip=r.format("rect({1}px {2}px {3}px {0}px)",M),c.clipRect||(z.position="absolute",z.top=0,z.left=0,z.width=i.paper.width+"px",z.height=i.paper.height+"px",c.parentNode.insertBefore(P,c),P.appendChild(c),c.clipRect=P)}l["clip-rect"]||c.clipRect&&(c.clipRect.style.clip="auto")}if(i.textpath){var F=i.textpath.style;l.font&&(F.font=l.font),l["font-family"]&&(F.fontFamily='"'+l["font-family"].split(",")[0].replace(/^['"]+|['"]+$/g,d)+'"'),l["font-size"]&&(F.fontSize=l["font-size"]),l["font-weight"]&&(F.fontWeight=l["font-weight"]),l["font-style"]&&(F.fontStyle=l["font-style"])}if("arrow-start"in l&&B(y,l["arrow-start"]),"arrow-end"in l&&B(y,l["arrow-end"],1),null!=l.opacity||null!=l["stroke-width"]||null!=l.fill||null!=l.src||null!=l.stroke||null!=l["stroke-width"]||null!=l["stroke-opacity"]||null!=l["fill-opacity"]||null!=l["stroke-dasharray"]||null!=l["stroke-miterlimit"]||null!=l["stroke-linejoin"]||null!=l["stroke-linecap"]){var I=c.getElementsByTagName(u),j=!1;if(I=I&&I[0],!I&&(j=I=L(u)),"image"==i.type&&l.src&&(I.src=l.src),l.fill&&(I.on=!0),(null==I.on||"none"==l.fill||null===l.fill)&&(I.on=!1),I.on&&l.fill){var R=e(l.fill).match(r._ISURL);if(R){I.parentNode==c&&c.removeChild(I),I.rotate=!0,I.src=R[1],I.type="tile";var D=i.getBBox(1);I.position=D.x+p+D.y,i._.fillpos=[D.x,D.y],r._preload(R[1],function(){i._.fillsize=[this.offsetWidth,this.offsetHeight]})}else I.color=r.getRGB(l.fill).hex,I.src=d,I.type="solid",r.getRGB(l.fill).error&&(y.type in{circle:1,ellipse:1}||"r"!=e(l.fill).charAt())&&T(y,l.fill,I)&&(f.fill="none",f.gradient=l.fill,I.rotate=!1)}if("fill-opacity"in l||"opacity"in l){var O=((+f["fill-opacity"]+1||2)-1)*((+f.opacity+1||2)-1)*((+r.getRGB(l.fill).o+1||2)-1);O=s(o(O,0),1),I.opacity=O,I.src&&(I.color="none")}c.appendChild(I);var q=c.getElementsByTagName("stroke")&&c.getElementsByTagName("stroke")[0],V=!1;!q&&(V=q=L("stroke")),(l.stroke&&"none"!=l.stroke||l["stroke-width"]||null!=l["stroke-opacity"]||l["stroke-dasharray"]||l["stroke-miterlimit"]||l["stroke-linejoin"]||l["stroke-linecap"])&&(q.on=!0),("none"==l.stroke||null===l.stroke||null==q.on||0==l.stroke||0==l["stroke-width"])&&(q.on=!1);var H=r.getRGB(l.stroke);q.on&&l.stroke&&(q.color=H.hex),O=((+f["stroke-opacity"]+1||2)-1)*((+f.opacity+1||2)-1)*((+H.o+1||2)-1);var W=.75*(n(l["stroke-width"])||1);if(O=s(o(O,0),1),null==l["stroke-width"]&&(W=f["stroke-width"]),l["stroke-width"]&&(q.weight=W),W&&1>W&&(O*=W)&&(q.weight=1),q.opacity=O,l["stroke-linejoin"]&&(q.joinstyle=l["stroke-linejoin"]||"miter"),q.miterlimit=l["stroke-miterlimit"]||8,l["stroke-linecap"]&&(q.endcap="butt"==l["stroke-linecap"]?"flat":"square"==l["stroke-linecap"]?"square":"round"),l["stroke-dasharray"]){var G={"-":"shortdash",".":"shortdot","-.":"shortdashdot","-..":"shortdashdotdot",". ":"dot","- ":"dash","--":"longdash","- .":"dashdot","--.":"longdashdot","--..":"longdashdotdot"};q.dashstyle=G[t](l["stroke-dasharray"])?G[l["stroke-dasharray"]]:d}V&&c.appendChild(q)}if("text"==y.type){y.paper.canvas.style.display=d;var Y=y.paper.span,$=100,X=f.font&&f.font.match(/\d+(?:\.\d*)?(?=px)/);g=Y.style,f.font&&(g.font=f.font),f["font-family"]&&(g.fontFamily=f["font-family"]),f["font-weight"]&&(g.fontWeight=f["font-weight"]),f["font-style"]&&(g.fontStyle=f["font-style"]),X=n(f["font-size"]||X&&X[0])||10,g.fontSize=X*$+"px",y.textpath.string&&(Y.innerHTML=e(y.textpath.string).replace(/</g,"&#60;").replace(/&/g,"&#38;").replace(/\n/g,"<br>"));var U=Y.getBoundingClientRect();y.W=f.w=(U.right-U.left)/$,y.H=f.h=(U.bottom-U.top)/$,y.X=f.x,y.Y=f.y+y.H/2,("x"in l||"y"in l)&&(y.path.v=r.format("m{0},{1}l{2},{1}",a(f.x*b),a(f.y*b),a(f.x*b)+1));for(var Z=["x","y","text","font","font-family","font-weight","font-style","font-size"],Q=0,J=Z.length;J>Q;Q++)if(Z[Q]in l){y._.dirty=1;break}switch(f["text-anchor"]){case"start":y.textpath.style["v-text-align"]="left",y.bbx=y.W/2;break;case"end":y.textpath.style["v-text-align"]="right",y.bbx=-y.W/2;break;default:y.textpath.style["v-text-align"]="center",y.bbx=0}y.textpath.style["v-text-kern"]=!0}},T=function(t,a,o){t.attrs=t.attrs||{};var s=(t.attrs,Math.pow),l="linear",u=".5 .5";if(t.attrs.gradient=a,a=e(a).replace(r._radial_gradient,function(t,e,r){return l="radial",e&&r&&(e=n(e),r=n(r),s(e-.5,2)+s(r-.5,2)>.25&&(r=i.sqrt(.25-s(e-.5,2))*(2*(r>.5)-1)+.5),
        u=e+p+r),d}),a=a.split(/\s*\-\s*/),"linear"==l){var h=a.shift();if(h=-n(h),isNaN(h))return null}var c=r._parseDots(a);if(!c)return null;if(t=t.shape||t.node,c.length){t.removeChild(o),o.on=!0,o.method="none",o.color=c[0].color,o.color2=c[c.length-1].color;for(var f=[],g=0,v=c.length;v>g;g++)c[g].offset&&f.push(c[g].offset+p+c[g].color);o.colors=f.length?f.join():"0% "+o.color,"radial"==l?(o.type="gradientTitle",o.focus="100%",o.focussize="0 0",o.focusposition=u,o.angle=0):(o.type="gradient",o.angle=(270-h)%360),t.appendChild(o)}return 1},A=function(t,e){this[0]=this.node=t,t.raphael=!0,this.id=r._oid++,t.raphaelid=this.id,this.X=0,this.Y=0,this.attrs={},this.paper=e,this.matrix=r.matrix(),this._={transform:[],sx:1,sy:1,dx:0,dy:0,deg:0,dirty:1,dirtyT:1},!e.bottom&&(e.bottom=this),this.prev=e.top,e.top&&(e.top.next=this),e.top=this,this.next=null},N=r.el;A.prototype=N,N.constructor=A,N.transform=function(t){if(null==t)return this._.transform;var n,i=this.paper._viewBoxShift,a=i?"s"+[i.scale,i.scale]+"-1-1t"+[i.dx,i.dy]:d;i&&(n=t=e(t).replace(/\.{3}|\u2026/g,this._.transform||d)),r._extractTransform(this,a+t);var o,s=this.matrix.clone(),l=this.skew,u=this.node,h=~e(this.attrs.fill).indexOf("-"),c=!e(this.attrs.fill).indexOf("url(");if(s.translate(1,1),c||h||"image"==this.type)if(l.matrix="1 0 0 1",l.offset="0 0",o=s.split(),h&&o.noRotation||!o.isSimple){u.style.filter=s.toFilter();var f=this.getBBox(),g=this.getBBox(1),v=f.x-g.x,m=f.y-g.y;u.coordorigin=v*-b+p+m*-b,S(this,1,1,v,m,0)}else u.style.filter=d,S(this,o.scalex,o.scaley,o.dx,o.dy,o.rotate);else u.style.filter=d,l.matrix=e(s),l.offset=s.offset();return n&&(this._.transform=n),this},N.rotate=function(t,r,i){if(this.removed)return this;if(null!=t){if(t=e(t).split(h),t.length-1&&(r=n(t[1]),i=n(t[2])),t=n(t[0]),null==i&&(r=i),null==r||null==i){var a=this.getBBox(1);r=a.x+a.width/2,i=a.y+a.height/2}return this._.dirtyT=1,this.transform(this._.transform.concat([["r",t,r,i]])),this}},N.translate=function(t,r){return this.removed?this:(t=e(t).split(h),t.length-1&&(r=n(t[1])),t=n(t[0])||0,r=+r||0,this._.bbox&&(this._.bbox.x+=t,this._.bbox.y+=r),this.transform(this._.transform.concat([["t",t,r]])),this)},N.scale=function(t,r,i,a){if(this.removed)return this;if(t=e(t).split(h),t.length-1&&(r=n(t[1]),i=n(t[2]),a=n(t[3]),isNaN(i)&&(i=null),isNaN(a)&&(a=null)),t=n(t[0]),null==r&&(r=t),null==a&&(i=a),null==i||null==a)var o=this.getBBox(1);return i=null==i?o.x+o.width/2:i,a=null==a?o.y+o.height/2:a,this.transform(this._.transform.concat([["s",t,r,i,a]])),this._.dirtyT=1,this},N.hide=function(){return!this.removed&&(this.node.style.display="none"),this},N.show=function(){return!this.removed&&(this.node.style.display=d),this},N._getBBox=function(){return this.removed?{}:{x:this.X+(this.bbx||0)-this.W/2,y:this.Y-this.H,width:this.W,height:this.H}},N.remove=function(){if(!this.removed&&this.node.parentNode){this.paper.__set__&&this.paper.__set__.exclude(this),r.eve.unbind("raphael.*.*."+this.id),r._tear(this,this.paper),this.node.parentNode.removeChild(this.node),this.shape&&this.shape.parentNode.removeChild(this.shape);for(var t in this)this[t]="function"==typeof this[t]?r._removedFactory(t):null;this.removed=!0}},N.attr=function(e,n){if(this.removed)return this;if(null==e){var i={};for(var a in this.attrs)this.attrs[t](a)&&(i[a]=this.attrs[a]);return i.gradient&&"none"==i.fill&&(i.fill=i.gradient)&&delete i.gradient,i.transform=this._.transform,i}if(null==n&&r.is(e,"string")){if(e==u&&"none"==this.attrs.fill&&this.attrs.gradient)return this.attrs.gradient;for(var o=e.split(h),s={},l=0,f=o.length;f>l;l++)e=o[l],s[e]=e in this.attrs?this.attrs[e]:r.is(this.paper.customAttributes[e],"function")?this.paper.customAttributes[e].def:r._availableAttrs[e];return f-1?s:s[o[0]]}if(this.attrs&&null==n&&r.is(e,"array")){for(s={},l=0,f=e.length;f>l;l++)s[e[l]]=this.attr(e[l]);return s}var p;null!=n&&(p={},p[e]=n),null==n&&r.is(e,"object")&&(p=e);for(var d in p)c("raphael.attr."+d+"."+this.id,this,p[d]);if(p){for(d in this.paper.customAttributes)if(this.paper.customAttributes[t](d)&&p[t](d)&&r.is(this.paper.customAttributes[d],"function")){var g=this.paper.customAttributes[d].apply(this,[].concat(p[d]));this.attrs[d]=p[d];for(var v in g)g[t](v)&&(p[v]=g[v])}p.text&&"text"==this.type&&(this.textpath.string=p.text),E(this,p)}return this},N.toFront=function(){return!this.removed&&this.node.parentNode.appendChild(this.node),this.paper&&this.paper.top!=this&&r._tofront(this,this.paper),this},N.toBack=function(){return this.removed?this:(this.node.parentNode.firstChild!=this.node&&(this.node.parentNode.insertBefore(this.node,this.node.parentNode.firstChild),r._toback(this,this.paper)),this)},N.insertAfter=function(t){return this.removed?this:(t.constructor==r.st.constructor&&(t=t[t.length-1]),t.node.nextSibling?t.node.parentNode.insertBefore(this.node,t.node.nextSibling):t.node.parentNode.appendChild(this.node),r._insertafter(this,t,this.paper),this)},N.insertBefore=function(t){return this.removed?this:(t.constructor==r.st.constructor&&(t=t[0]),t.node.parentNode.insertBefore(this.node,t.node),r._insertbefore(this,t,this.paper),this)},N.blur=function(t){var e=this.node.runtimeStyle,n=e.filter;return n=n.replace(m,d),0!==+t?(this.attrs.blur=t,e.filter=n+p+f+".Blur(pixelradius="+(+t||1.5)+")",e.margin=r.format("-{0}px 0 0 -{0}px",a(+t||1.5))):(e.filter=n,e.margin=0,delete this.attrs.blur),this},r._engine.path=function(t,e){var r=L("shape");r.style.cssText=x,r.coordsize=b+p+b,r.coordorigin=e.coordorigin;var n=new A(r,e),i={fill:"none",stroke:"#000"};t&&(i.path=t),n.type="path",n.path=[],n.Path=d,E(n,i),e.canvas.appendChild(r);var a=L("skew");return a.on=!0,r.appendChild(a),n.skew=a,n.transform(d),n},r._engine.rect=function(t,e,n,i,a,o){var s=r._rectPath(e,n,i,a,o),l=t.path(s),u=l.attrs;return l.X=u.x=e,l.Y=u.y=n,l.W=u.width=i,l.H=u.height=a,u.r=o,u.path=s,l.type="rect",l},r._engine.ellipse=function(t,e,r,n,i){var a=t.path();return a.attrs,a.X=e-n,a.Y=r-i,a.W=2*n,a.H=2*i,a.type="ellipse",E(a,{cx:e,cy:r,rx:n,ry:i}),a},r._engine.circle=function(t,e,r,n){var i=t.path();return i.attrs,i.X=e-n,i.Y=r-n,i.W=i.H=2*n,i.type="circle",E(i,{cx:e,cy:r,r:n}),i},r._engine.image=function(t,e,n,i,a,o){var s=r._rectPath(n,i,a,o),l=t.path(s).attr({stroke:"none"}),h=l.attrs,c=l.node,f=c.getElementsByTagName(u)[0];return h.src=e,l.X=h.x=n,l.Y=h.y=i,l.W=h.width=a,l.H=h.height=o,h.path=s,l.type="image",f.parentNode==c&&c.removeChild(f),f.rotate=!0,f.src=e,f.type="tile",l._.fillpos=[n,i],l._.fillsize=[a,o],c.appendChild(f),S(l,1,1,0,0,0),l},r._engine.text=function(t,n,i,o){var s=L("shape"),l=L("path"),u=L("textpath");n=n||0,i=i||0,o=o||"",l.v=r.format("m{0},{1}l{2},{1}",a(n*b),a(i*b),a(n*b)+1),l.textpathok=!0,u.string=e(o),u.on=!0,s.style.cssText=x,s.coordsize=b+p+b,s.coordorigin="0 0";var h=new A(s,t),c={fill:"#000",stroke:"none",font:r._availableAttrs.font,text:o};h.shape=s,h.path=l,h.textpath=u,h.type="text",h.attrs.text=e(o),h.attrs.x=n,h.attrs.y=i,h.attrs.w=1,h.attrs.h=1,E(h,c),s.appendChild(u),s.appendChild(l),t.canvas.appendChild(s);var f=L("skew");return f.on=!0,s.appendChild(f),h.skew=f,h.transform(d),h},r._engine.setSize=function(t,e){var n=this.canvas.style;return this.width=t,this.height=e,t==+t&&(t+="px"),e==+e&&(e+="px"),n.width=t,n.height=e,n.clip="rect(0 "+t+" "+e+" 0)",this._viewBox&&r._engine.setViewBox.apply(this,this._viewBox),this},r._engine.setViewBox=function(t,e,n,i,a){r.eve("raphael.setViewBox",this,this._viewBox,[t,e,n,i,a]);var s,l,u=this.width,h=this.height,c=1/o(n/u,i/h);return a&&(s=h/i,l=u/n,u>n*s&&(t-=(u-n*s)/2/s),h>i*l&&(e-=(h-i*l)/2/l)),this._viewBox=[t,e,n,i,!!a],this._viewBoxShift={dx:-t,dy:-e,scale:c},this.forEach(function(t){t.transform("...")}),this};var L;r._engine.initWin=function(t){var e=t.document;e.createStyleSheet().addRule(".rvml","behavior:url(#default#VML)");try{!e.namespaces.rvml&&e.namespaces.add("rvml","urn:schemas-microsoft-com:vml"),L=function(t){return e.createElement("<rvml:"+t+' class="rvml">')}}catch(r){L=function(t){return e.createElement("<"+t+' xmlns="urn:schemas-microsoft.com:vml" class="rvml">')}}},r._engine.initWin(r._g.win),r._engine.create=function(){var t=r._getContainer.apply(0,arguments),e=t.container,n=t.height,i=t.width,a=t.x,o=t.y;if(!e)throw new Error("VML container not found.");var s=new r._Paper,l=s.canvas=r._g.doc.createElement("div"),u=l.style;return a=a||0,o=o||0,i=i||512,n=n||342,s.width=i,s.height=n,i==+i&&(i+="px"),n==+n&&(n+="px"),s.coordsize=1e3*b+p+1e3*b,s.coordorigin="0 0",s.span=r._g.doc.createElement("span"),s.span.style.cssText="position:absolute;left:-9999em;top:-9999em;padding:0;margin:0;line-height:1;",l.appendChild(s.span),u.cssText=r.format("top:0;left:0;width:{0};height:{1};display:inline-block;position:relative;clip:rect(0 {0} {1} 0);overflow:hidden",i,n),1==e?(r._g.doc.body.appendChild(l),u.left=a+"px",u.top=o+"px",u.position="absolute"):e.firstChild?e.insertBefore(l,e.firstChild):e.appendChild(l),s.renderfix=function(){},s},r.prototype.clear=function(){r.eve("raphael.clear",this),this.canvas.innerHTML=d,this.span=r._g.doc.createElement("span"),this.span.style.cssText="position:absolute;left:-9999em;top:-9999em;padding:0;margin:0;line-height:1;display:inline;",this.canvas.appendChild(this.span),this.bottom=this.top=null},r.prototype.remove=function(){r.eve("raphael.remove",this),this.canvas.parentNode.removeChild(this.canvas);for(var t in this)this[t]="function"==typeof this[t]?r._removedFactory(t):null;return!0};var M=r.st;for(var P in N)N[t](P)&&!M[t](P)&&(M[P]=function(t){return function(){var e=arguments;return this.forEach(function(r){r[t].apply(r,e)})}}(P))}}(),E.was?B.win.Raphael=r:Raphael=r,r}),function(){window.ScaleRaphael=function(t,e,r){var n=document.getElementById(t);n.style.position||(n.style.position="relative"),n.style.width=e+"px",n.style.height=r+"px",n.style.overflow="hidden";var i;"VML"==Raphael.type?(n.innerHTML="<rvml:group style='position : absolute; width: 1000px; height: 1000px; top: 0px; left: 0px' coordsize='1000,1000' class='rvml' id='"+n.id+"_vmlgroup'></rvml:group>",i=document.getElementById(n.id+"_vmlgroup")):(n.innerHTML="<div id='"+n.id+"_svggroup' class='svggroup'>",i=document.getElementById(n.id+"_svggroup"));var a,o=new Raphael(i,e,r);return"SVG"==Raphael.type?o.canvas.setAttribute("viewBox","0 0 "+e+" "+r):a=n.getElementsByTagName("div")[0],o.changeSize=function(t,s,l,u){u=!u;var h=t/e,c=s/r,f=c>h?h:c,h=parseInt(r*f),c=parseInt(e*f);if("VML"==Raphael.type){var p,d=document.getElementsByTagName("textpath");for(p in d){var g=d[p];if(g.style){if(!g._fontSize){var v=g.style.font.split("px");g._fontSize=parseInt(v[0]),g._font=v[1]}g.style.font=g._fontSize*f+"px"+g._font}}p=h>c?1e3*c/e:1e3*h/r,p=parseInt(p),i.style.width=p+"px",i.style.height=p+"px",u&&(i.style.left=parseInt((t-c)/2)+"px",i.style.top=parseInt((s-h)/2)+"px"),a.style.overflow="visible"}u&&(c=t,h=s),n.style.width=c+"px",n.style.height=h+"px",o.setSize(c,h),l&&(n.style.position="absolute",n.style.left=parseInt((t-c)/2)+"px",n.style.top=parseInt((s-h)/2)+"px"),"VML"!=Raphael.type&&(t=n.getElementsByTagName("svg")[0],t.style.width=c+"px",t.style.height=h+"px")},o.scaleAll=function(t){o.changeSize(e*t,r*t)},o.changeSize(e,r),o.w=e,o.h=r,o}}();







/* ScaleRaphael v0.8mod */
(function(){window.ScaleRaphael=function(n,d,e){var a=document.getElementById(n);a.style.position||(a.style.position="relative");a.style.width=d+"px";a.style.height=e+"px";a.style.overflow="hidden";var h;"VML"==Raphael.type?(a.innerHTML="<rvml:group style='position : absolute; width: 1000px; height: 1000px; top: 0px; left: 0px' coordsize='1000,1000' class='rvml' id='"+a.id+"_vmlgroup'></rvml:group>",h=document.getElementById(a.id+"_vmlgroup")):(a.innerHTML="<div id='"+a.id+"_svggroup' class='svggroup'>",
    h=document.getElementById(a.id+"_svggroup"));var f=new Raphael(h,d,e),q;"SVG"==Raphael.type?f.canvas.setAttribute("viewBox","0 0 "+d+" "+e):q=a.getElementsByTagName("div")[0];f.changeSize=function(j,l,n,m){m=!m;var b=j/d,c=l/e,p=b<c?b:c,b=parseInt(e*p),c=parseInt(d*p);if("VML"==Raphael.type){var r=document.getElementsByTagName("textpath"),k;for(k in r){var g=r[k];if(g.style){if(!g._fontSize){var s=g.style.font.split("px");g._fontSize=parseInt(s[0]);g._font=s[1]}g.style.font=g._fontSize*p+"px"+g._font}}k=
    c<b?1E3*c/d:1E3*b/e;k=parseInt(k);h.style.width=k+"px";h.style.height=k+"px";m&&(h.style.left=parseInt((j-c)/2)+"px",h.style.top=parseInt((l-b)/2)+"px");q.style.overflow="visible"}m&&(c=j,b=l);a.style.width=c+"px";a.style.height=b+"px";f.setSize(c,b);n&&(a.style.position="absolute",a.style.left=parseInt((j-c)/2)+"px",a.style.top=parseInt((l-b)/2)+"px");"VML"!=Raphael.type&&(j=a.getElementsByTagName("svg")[0],j.style.width=c+"px",j.style.height=b+"px")};f.scaleAll=function(a){f.changeSize(d*a,e*a)};
    f.changeSize(d,e);f.w=d;f.h=e;return f}})();






/* Backstretch - v2.0.4 - 2013-06-19
 * http://srobbin.com/jquery-plugins/backstretch/
 * Copyright (c) 2013 Scott Robbin; Licensed MIT */
(function(a,d,p){a.fn.backstretch=function(c,b){(c===p||0===c.length)&&a.error("No images were supplied for Backstretch");0===a(d).scrollTop()&&d.scrollTo(0,0);return this.each(function(){var d=a(this),g=d.data("backstretch");if(g){if("string"==typeof c&&"function"==typeof g[c]){g[c](b);return}b=a.extend(g.options,b);g.destroy(!0)}g=new q(this,c,b);d.data("backstretch",g)})};a.backstretch=function(c,b){return a("body").backstretch(c,b).data("backstretch")};a.expr[":"].backstretch=function(c){return a(c).data("backstretch")!==p};a.fn.backstretch.defaults={centeredX:!0,centeredY:!0,duration:5E3,fade:0};var r={left:0,top:0,overflow:"hidden",margin:0,padding:0,height:"100%",width:"100%",zIndex:-999999},s={position:"absolute",display:"none",margin:0,padding:0,border:"none",width:"auto",height:"auto",maxHeight:"none",maxWidth:"none",zIndex:-999999},q=function(c,b,e){this.options=a.extend({},a.fn.backstretch.defaults,e||{});this.images=a.isArray(b)?b:[b];a.each(this.images,function(){a("<img />")[0].src=this});this.isBody=c===document.body;this.$container=a(c);this.$root=this.isBody?l?a(d):a(document):this.$container;c=this.$container.children(".backstretch").first();this.$wrap=c.length?c:a('<div class="backstretch"></div>').css(r).appendTo(this.$container);this.isBody||(c=this.$container.css("position"),b=this.$container.css("zIndex"),this.$container.css({position:"static"===c?"relative":c,zIndex:"auto"===b?0:b,background:"none"}),this.$wrap.css({zIndex:-999998}));this.$wrap.css({position:this.isBody&&l?"fixed":"absolute"});this.index=0;this.show(this.index);a(d).on("resize.backstretch",a.proxy(this.resize,this)).on("orientationchange.backstretch",a.proxy(function(){this.isBody&&0===d.pageYOffset&&(d.scrollTo(0,1),this.resize())},this))};q.prototype={resize:function(){try{var a={left:0,top:0},b=this.isBody?this.$root.width():this.$root.innerWidth(),e=b,g=this.isBody?d.innerHeight?d.innerHeight:this.$root.height():this.$root.innerHeight(),j=e/this.$img.data("ratio"),f;j>=g?(f=(j-g)/2,this.options.centeredY&&(a.top="-"+f+"px")):(j=g,e=j*this.$img.data("ratio"),f=(e-b)/2,this.options.centeredX&&(a.left="-"+f+"px"));this.$wrap.css({width:b,height:g}).find("img:not(.deleteable)").css({width:e,height:j}).css(a)}catch(h){}return this},show:function(c){if(!(Math.abs(c)>this.images.length-1)){var b=this,e=b.$wrap.find("img").addClass("deleteable"),d={relatedTarget:b.$container[0]};b.$container.trigger(a.Event("backstretch.before",d),[b,c]);this.index=c;clearInterval(b.interval);b.$img=a("<img />").css(s).bind("load",function(f){var h=this.width||a(f.target).width();f=this.height||a(f.target).height();a(this).data("ratio",h/f);a(this).fadeIn(b.options.speed||b.options.fade,function(){e.remove();b.paused||b.cycle();a(["after","show"]).each(function(){b.$container.trigger(a.Event("backstretch."+this,d),[b,c])})});b.resize()}).appendTo(b.$wrap);b.$img.attr("src",b.images[c]);return b}},next:function(){return this.show(this.index<this.images.length-1?this.index+1:0)},prev:function(){return this.show(0===this.index?this.images.length-1:this.index-1)},pause:function(){this.paused=!0;return this},resume:function(){this.paused=!1;this.next();return this},cycle:function(){1<this.images.length&&(clearInterval(this.interval),this.interval=setInterval(a.proxy(function(){this.paused||this.next()},this),this.options.duration));return this},destroy:function(c){a(d).off("resize.backstretch orientationchange.backstretch");clearInterval(this.interval);c||this.$wrap.remove();this.$container.removeData("backstretch")}};var l,f=navigator.userAgent,m=navigator.platform,e=f.match(/AppleWebKit\/([0-9]+)/),e=!!e&&e[1],h=f.match(/Fennec\/([0-9]+)/),h=!!h&&h[1],n=f.match(/Opera Mobi\/([0-9]+)/),t=!!n&&n[1],k=f.match(/MSIE ([0-9]+)/),k=!!k&&k[1];l=!((-1<m.indexOf("iPhone")||-1<m.indexOf("iPad")||-1<m.indexOf("iPod"))&&e&&534>e||d.operamini&&"[object OperaMini]"==={}.toString.call(d.operamini)||n&&7458>t||-1<f.indexOf("Android")&&e&&533>e||h&&6>h||"palmGetResource"in d&&e&&534>e||-1<f.indexOf("MeeGo")&&-1<f.indexOf("NokiaBrowser/8.5.0")||k&&6>=k)})(jQuery,window);



/* jQuery UI - v1.12.0 - 2016-09-08
 * http://jqueryui.com
 * Includes: widget.js, keycode.js, widgets/mouse.js, widgets/slider.js
 * Copyright jQuery Foundation and other contributors; Licensed MIT */

(function(t){"function"==typeof define&&define.amd?define(["jquery"],t):t(jQuery)})(function(t){t.ui=t.ui||{},t.ui.version="1.12.0";var e=0,i=Array.prototype.slice;t.cleanData=function(e){return function(i){var s,n,o;for(o=0;null!=(n=i[o]);o++)try{s=t._data(n,"events"),s&&s.remove&&t(n).triggerHandler("remove")}catch(a){}e(i)}}(t.cleanData),t.widget=function(e,i,s){var n,o,a,r={},l=e.split(".")[0];e=e.split(".")[1];var h=l+"-"+e;return s||(s=i,i=t.Widget),t.isArray(s)&&(s=t.extend.apply(null,[{}].concat(s))),t.expr[":"][h.toLowerCase()]=function(e){return!!t.data(e,h)},t[l]=t[l]||{},n=t[l][e],o=t[l][e]=function(t,e){return this._createWidget?(arguments.length&&this._createWidget(t,e),void 0):new o(t,e)},t.extend(o,n,{version:s.version,_proto:t.extend({},s),_childConstructors:[]}),a=new i,a.options=t.widget.extend({},a.options),t.each(s,function(e,s){return t.isFunction(s)?(r[e]=function(){function t(){return i.prototype[e].apply(this,arguments)}function n(t){return i.prototype[e].apply(this,t)}return function(){var e,i=this._super,o=this._superApply;return this._super=t,this._superApply=n,e=s.apply(this,arguments),this._super=i,this._superApply=o,e}}(),void 0):(r[e]=s,void 0)}),o.prototype=t.widget.extend(a,{widgetEventPrefix:n?a.widgetEventPrefix||e:e},r,{constructor:o,namespace:l,widgetName:e,widgetFullName:h}),n?(t.each(n._childConstructors,function(e,i){var s=i.prototype;t.widget(s.namespace+"."+s.widgetName,o,i._proto)}),delete n._childConstructors):i._childConstructors.push(o),t.widget.bridge(e,o),o},t.widget.extend=function(e){for(var s,n,o=i.call(arguments,1),a=0,r=o.length;r>a;a++)for(s in o[a])n=o[a][s],o[a].hasOwnProperty(s)&&void 0!==n&&(e[s]=t.isPlainObject(n)?t.isPlainObject(e[s])?t.widget.extend({},e[s],n):t.widget.extend({},n):n);return e},t.widget.bridge=function(e,s){var n=s.prototype.widgetFullName||e;t.fn[e]=function(o){var a="string"==typeof o,r=i.call(arguments,1),l=this;return a?this.each(function(){var i,s=t.data(this,n);return"instance"===o?(l=s,!1):s?t.isFunction(s[o])&&"_"!==o.charAt(0)?(i=s[o].apply(s,r),i!==s&&void 0!==i?(l=i&&i.jquery?l.pushStack(i.get()):i,!1):void 0):t.error("no such method '"+o+"' for "+e+" widget instance"):t.error("cannot call methods on "+e+" prior to initialization; "+"attempted to call method '"+o+"'")}):(r.length&&(o=t.widget.extend.apply(null,[o].concat(r))),this.each(function(){var e=t.data(this,n);e?(e.option(o||{}),e._init&&e._init()):t.data(this,n,new s(o,this))})),l}},t.Widget=function(){},t.Widget._childConstructors=[],t.Widget.prototype={widgetName:"widget",widgetEventPrefix:"",defaultElement:"<div>",options:{classes:{},disabled:!1,create:null},_createWidget:function(i,s){s=t(s||this.defaultElement||this)[0],this.element=t(s),this.uuid=e++,this.eventNamespace="."+this.widgetName+this.uuid,this.bindings=t(),this.hoverable=t(),this.focusable=t(),this.classesElementLookup={},s!==this&&(t.data(s,this.widgetFullName,this),this._on(!0,this.element,{remove:function(t){t.target===s&&this.destroy()}}),this.document=t(s.style?s.ownerDocument:s.document||s),this.window=t(this.document[0].defaultView||this.document[0].parentWindow)),this.options=t.widget.extend({},this.options,this._getCreateOptions(),i),this._create(),this.options.disabled&&this._setOptionDisabled(this.options.disabled),this._trigger("create",null,this._getCreateEventData()),this._init()},_getCreateOptions:function(){return{}},_getCreateEventData:t.noop,_create:t.noop,_init:t.noop,destroy:function(){var e=this;this._destroy(),t.each(this.classesElementLookup,function(t,i){e._removeClass(i,t)}),this.element.off(this.eventNamespace).removeData(this.widgetFullName),this.widget().off(this.eventNamespace).removeAttr("aria-disabled"),this.bindings.off(this.eventNamespace)},_destroy:t.noop,widget:function(){return this.element},option:function(e,i){var s,n,o,a=e;if(0===arguments.length)return t.widget.extend({},this.options);if("string"==typeof e)if(a={},s=e.split("."),e=s.shift(),s.length){for(n=a[e]=t.widget.extend({},this.options[e]),o=0;s.length-1>o;o++)n[s[o]]=n[s[o]]||{},n=n[s[o]];if(e=s.pop(),1===arguments.length)return void 0===n[e]?null:n[e];n[e]=i}else{if(1===arguments.length)return void 0===this.options[e]?null:this.options[e];a[e]=i}return this._setOptions(a),this},_setOptions:function(t){var e;for(e in t)this._setOption(e,t[e]);return this},_setOption:function(t,e){return"classes"===t&&this._setOptionClasses(e),this.options[t]=e,"disabled"===t&&this._setOptionDisabled(e),this},_setOptionClasses:function(e){var i,s,n;for(i in e)n=this.classesElementLookup[i],e[i]!==this.options.classes[i]&&n&&n.length&&(s=t(n.get()),this._removeClass(n,i),s.addClass(this._classes({element:s,keys:i,classes:e,add:!0})))},_setOptionDisabled:function(t){this._toggleClass(this.widget(),this.widgetFullName+"-disabled",null,!!t),t&&(this._removeClass(this.hoverable,null,"ui-state-hover"),this._removeClass(this.focusable,null,"ui-state-focus"))},enable:function(){return this._setOptions({disabled:!1})},disable:function(){return this._setOptions({disabled:!0})},_classes:function(e){function i(i,o){var a,r;for(r=0;i.length>r;r++)a=n.classesElementLookup[i[r]]||t(),a=e.add?t(t.unique(a.get().concat(e.element.get()))):t(a.not(e.element).get()),n.classesElementLookup[i[r]]=a,s.push(i[r]),o&&e.classes[i[r]]&&s.push(e.classes[i[r]])}var s=[],n=this;return e=t.extend({element:this.element,classes:this.options.classes||{}},e),e.keys&&i(e.keys.match(/\S+/g)||[],!0),e.extra&&i(e.extra.match(/\S+/g)||[]),s.join(" ")},_removeClass:function(t,e,i){return this._toggleClass(t,e,i,!1)},_addClass:function(t,e,i){return this._toggleClass(t,e,i,!0)},_toggleClass:function(t,e,i,s){s="boolean"==typeof s?s:i;var n="string"==typeof t||null===t,o={extra:n?e:i,keys:n?t:e,element:n?this.element:t,add:s};return o.element.toggleClass(this._classes(o),s),this},_on:function(e,i,s){var n,o=this;"boolean"!=typeof e&&(s=i,i=e,e=!1),s?(i=n=t(i),this.bindings=this.bindings.add(i)):(s=i,i=this.element,n=this.widget()),t.each(s,function(s,a){function r(){return e||o.options.disabled!==!0&&!t(this).hasClass("ui-state-disabled")?("string"==typeof a?o[a]:a).apply(o,arguments):void 0}"string"!=typeof a&&(r.guid=a.guid=a.guid||r.guid||t.guid++);var l=s.match(/^([\w:-]*)\s*(.*)$/),h=l[1]+o.eventNamespace,c=l[2];c?n.on(h,c,r):i.on(h,r)})},_off:function(e,i){i=(i||"").split(" ").join(this.eventNamespace+" ")+this.eventNamespace,e.off(i).off(i),this.bindings=t(this.bindings.not(e).get()),this.focusable=t(this.focusable.not(e).get()),this.hoverable=t(this.hoverable.not(e).get())},_delay:function(t,e){function i(){return("string"==typeof t?s[t]:t).apply(s,arguments)}var s=this;return setTimeout(i,e||0)},_hoverable:function(e){this.hoverable=this.hoverable.add(e),this._on(e,{mouseenter:function(e){this._addClass(t(e.currentTarget),null,"ui-state-hover")},mouseleave:function(e){this._removeClass(t(e.currentTarget),null,"ui-state-hover")}})},_focusable:function(e){this.focusable=this.focusable.add(e),this._on(e,{focusin:function(e){this._addClass(t(e.currentTarget),null,"ui-state-focus")},focusout:function(e){this._removeClass(t(e.currentTarget),null,"ui-state-focus")}})},_trigger:function(e,i,s){var n,o,a=this.options[e];if(s=s||{},i=t.Event(i),i.type=(e===this.widgetEventPrefix?e:this.widgetEventPrefix+e).toLowerCase(),i.target=this.element[0],o=i.originalEvent)for(n in o)n in i||(i[n]=o[n]);return this.element.trigger(i,s),!(t.isFunction(a)&&a.apply(this.element[0],[i].concat(s))===!1||i.isDefaultPrevented())}},t.each({show:"fadeIn",hide:"fadeOut"},function(e,i){t.Widget.prototype["_"+e]=function(s,n,o){"string"==typeof n&&(n={effect:n});var a,r=n?n===!0||"number"==typeof n?i:n.effect||i:e;n=n||{},"number"==typeof n&&(n={duration:n}),a=!t.isEmptyObject(n),n.complete=o,n.delay&&s.delay(n.delay),a&&t.effects&&t.effects.effect[r]?s[e](n):r!==e&&s[r]?s[r](n.duration,n.easing,o):s.queue(function(i){t(this)[e](),o&&o.call(s[0]),i()})}}),t.widget,t.ui.keyCode={BACKSPACE:8,COMMA:188,DELETE:46,DOWN:40,END:35,ENTER:13,ESCAPE:27,HOME:36,LEFT:37,PAGE_DOWN:34,PAGE_UP:33,PERIOD:190,RIGHT:39,SPACE:32,TAB:9,UP:38},t.ui.ie=!!/msie [\w.]+/.exec(navigator.userAgent.toLowerCase());var s=!1;t(document).on("mouseup",function(){s=!1}),t.widget("ui.mouse",{version:"1.12.0",options:{cancel:"input, textarea, button, select, option",distance:1,delay:0},_mouseInit:function(){var e=this;this.element.on("mousedown."+this.widgetName,function(t){return e._mouseDown(t)}).on("click."+this.widgetName,function(i){return!0===t.data(i.target,e.widgetName+".preventClickEvent")?(t.removeData(i.target,e.widgetName+".preventClickEvent"),i.stopImmediatePropagation(),!1):void 0}),this.started=!1},_mouseDestroy:function(){this.element.off("."+this.widgetName),this._mouseMoveDelegate&&this.document.off("mousemove."+this.widgetName,this._mouseMoveDelegate).off("mouseup."+this.widgetName,this._mouseUpDelegate)},_mouseDown:function(e){if(!s){this._mouseMoved=!1,this._mouseStarted&&this._mouseUp(e),this._mouseDownEvent=e;var i=this,n=1===e.which,o="string"==typeof this.options.cancel&&e.target.nodeName?t(e.target).closest(this.options.cancel).length:!1;return n&&!o&&this._mouseCapture(e)?(this.mouseDelayMet=!this.options.delay,this.mouseDelayMet||(this._mouseDelayTimer=setTimeout(function(){i.mouseDelayMet=!0},this.options.delay)),this._mouseDistanceMet(e)&&this._mouseDelayMet(e)&&(this._mouseStarted=this._mouseStart(e)!==!1,!this._mouseStarted)?(e.preventDefault(),!0):(!0===t.data(e.target,this.widgetName+".preventClickEvent")&&t.removeData(e.target,this.widgetName+".preventClickEvent"),this._mouseMoveDelegate=function(t){return i._mouseMove(t)},this._mouseUpDelegate=function(t){return i._mouseUp(t)},this.document.on("mousemove."+this.widgetName,this._mouseMoveDelegate).on("mouseup."+this.widgetName,this._mouseUpDelegate),e.preventDefault(),s=!0,!0)):!0}},_mouseMove:function(e){if(this._mouseMoved){if(t.ui.ie&&(!document.documentMode||9>document.documentMode)&&!e.button)return this._mouseUp(e);if(!e.which)if(e.originalEvent.altKey||e.originalEvent.ctrlKey||e.originalEvent.metaKey||e.originalEvent.shiftKey)this.ignoreMissingWhich=!0;else if(!this.ignoreMissingWhich)return this._mouseUp(e)}return(e.which||e.button)&&(this._mouseMoved=!0),this._mouseStarted?(this._mouseDrag(e),e.preventDefault()):(this._mouseDistanceMet(e)&&this._mouseDelayMet(e)&&(this._mouseStarted=this._mouseStart(this._mouseDownEvent,e)!==!1,this._mouseStarted?this._mouseDrag(e):this._mouseUp(e)),!this._mouseStarted)},_mouseUp:function(e){this.document.off("mousemove."+this.widgetName,this._mouseMoveDelegate).off("mouseup."+this.widgetName,this._mouseUpDelegate),this._mouseStarted&&(this._mouseStarted=!1,e.target===this._mouseDownEvent.target&&t.data(e.target,this.widgetName+".preventClickEvent",!0),this._mouseStop(e)),this._mouseDelayTimer&&(clearTimeout(this._mouseDelayTimer),delete this._mouseDelayTimer),this.ignoreMissingWhich=!1,s=!1,e.preventDefault()},_mouseDistanceMet:function(t){return Math.max(Math.abs(this._mouseDownEvent.pageX-t.pageX),Math.abs(this._mouseDownEvent.pageY-t.pageY))>=this.options.distance},_mouseDelayMet:function(){return this.mouseDelayMet},_mouseStart:function(){},_mouseDrag:function(){},_mouseStop:function(){},_mouseCapture:function(){return!0}}),t.widget("ui.slider",t.ui.mouse,{version:"1.12.0",widgetEventPrefix:"slide",options:{animate:!1,classes:{"ui-slider":"ui-corner-all","ui-slider-handle":"ui-corner-all","ui-slider-range":"ui-corner-all ui-widget-header"},distance:0,max:100,min:0,orientation:"horizontal",range:!1,step:1,value:0,values:null,change:null,slide:null,start:null,stop:null},numPages:5,_create:function(){this._keySliding=!1,this._mouseSliding=!1,this._animateOff=!0,this._handleIndex=null,this._detectOrientation(),this._mouseInit(),this._calculateNewMax(),this._addClass("ui-slider ui-slider-"+this.orientation,"ui-widget ui-widget-content"),this._refresh(),this._animateOff=!1},_refresh:function(){this._createRange(),this._createHandles(),this._setupEvents(),this._refreshValue()},_createHandles:function(){var e,i,s=this.options,n=this.element.find(".ui-slider-handle"),o="<span tabindex='0'></span>",a=[];for(i=s.values&&s.values.length||1,n.length>i&&(n.slice(i).remove(),n=n.slice(0,i)),e=n.length;i>e;e++)a.push(o);this.handles=n.add(t(a.join("")).appendTo(this.element)),this._addClass(this.handles,"ui-slider-handle","ui-state-default"),this.handle=this.handles.eq(0),this.handles.each(function(e){t(this).data("ui-slider-handle-index",e)})},_createRange:function(){var e=this.options;e.range?(e.range===!0&&(e.values?e.values.length&&2!==e.values.length?e.values=[e.values[0],e.values[0]]:t.isArray(e.values)&&(e.values=e.values.slice(0)):e.values=[this._valueMin(),this._valueMin()]),this.range&&this.range.length?(this._removeClass(this.range,"ui-slider-range-min ui-slider-range-max"),this.range.css({left:"",bottom:""})):(this.range=t("<div>").appendTo(this.element),this._addClass(this.range,"ui-slider-range")),("min"===e.range||"max"===e.range)&&this._addClass(this.range,"ui-slider-range-"+e.range)):(this.range&&this.range.remove(),this.range=null)},_setupEvents:function(){this._off(this.handles),this._on(this.handles,this._handleEvents),this._hoverable(this.handles),this._focusable(this.handles)},_destroy:function(){this.handles.remove(),this.range&&this.range.remove(),this._mouseDestroy()},_mouseCapture:function(e){var i,s,n,o,a,r,l,h,c=this,u=this.options;return u.disabled?!1:(this.elementSize={width:this.element.outerWidth(),height:this.element.outerHeight()},this.elementOffset=this.element.offset(),i={x:e.pageX,y:e.pageY},s=this._normValueFromMouse(i),n=this._valueMax()-this._valueMin()+1,this.handles.each(function(e){var i=Math.abs(s-c.values(e));(n>i||n===i&&(e===c._lastChangedValue||c.values(e)===u.min))&&(n=i,o=t(this),a=e)}),r=this._start(e,a),r===!1?!1:(this._mouseSliding=!0,this._handleIndex=a,this._addClass(o,null,"ui-state-active"),o.trigger("focus"),l=o.offset(),h=!t(e.target).parents().addBack().is(".ui-slider-handle"),this._clickOffset=h?{left:0,top:0}:{left:e.pageX-l.left-o.width()/2,top:e.pageY-l.top-o.height()/2-(parseInt(o.css("borderTopWidth"),10)||0)-(parseInt(o.css("borderBottomWidth"),10)||0)+(parseInt(o.css("marginTop"),10)||0)},this.handles.hasClass("ui-state-hover")||this._slide(e,a,s),this._animateOff=!0,!0))},_mouseStart:function(){return!0},_mouseDrag:function(t){var e={x:t.pageX,y:t.pageY},i=this._normValueFromMouse(e);return this._slide(t,this._handleIndex,i),!1},_mouseStop:function(t){return this._removeClass(this.handles,null,"ui-state-active"),this._mouseSliding=!1,this._stop(t,this._handleIndex),this._change(t,this._handleIndex),this._handleIndex=null,this._clickOffset=null,this._animateOff=!1,!1},_detectOrientation:function(){this.orientation="vertical"===this.options.orientation?"vertical":"horizontal"},_normValueFromMouse:function(t){var e,i,s,n,o;return"horizontal"===this.orientation?(e=this.elementSize.width,i=t.x-this.elementOffset.left-(this._clickOffset?this._clickOffset.left:0)):(e=this.elementSize.height,i=t.y-this.elementOffset.top-(this._clickOffset?this._clickOffset.top:0)),s=i/e,s>1&&(s=1),0>s&&(s=0),"vertical"===this.orientation&&(s=1-s),n=this._valueMax()-this._valueMin(),o=this._valueMin()+s*n,this._trimAlignValue(o)},_uiHash:function(t,e,i){var s={handle:this.handles[t],handleIndex:t,value:void 0!==e?e:this.value()};return this._hasMultipleValues()&&(s.value=void 0!==e?e:this.values(t),s.values=i||this.values()),s},_hasMultipleValues:function(){return this.options.values&&this.options.values.length},_start:function(t,e){return this._trigger("start",t,this._uiHash(e))},_slide:function(t,e,i){var s,n,o=this.value(),a=this.values();this._hasMultipleValues()&&(n=this.values(e?0:1),o=this.values(e),2===this.options.values.length&&this.options.range===!0&&(i=0===e?Math.min(n,i):Math.max(n,i)),a[e]=i),i!==o&&(s=this._trigger("slide",t,this._uiHash(e,i,a)),s!==!1&&(this._hasMultipleValues()?this.values(e,i):this.value(i)))},_stop:function(t,e){this._trigger("stop",t,this._uiHash(e))},_change:function(t,e){this._keySliding||this._mouseSliding||(this._lastChangedValue=e,this._trigger("change",t,this._uiHash(e)))},value:function(t){return arguments.length?(this.options.value=this._trimAlignValue(t),this._refreshValue(),this._change(null,0),void 0):this._value()},values:function(e,i){var s,n,o;if(arguments.length>1)return this.options.values[e]=this._trimAlignValue(i),this._refreshValue(),this._change(null,e),void 0;if(!arguments.length)return this._values();if(!t.isArray(arguments[0]))return this._hasMultipleValues()?this._values(e):this.value();for(s=this.options.values,n=arguments[0],o=0;s.length>o;o+=1)s[o]=this._trimAlignValue(n[o]),this._change(null,o);this._refreshValue()},_setOption:function(e,i){var s,n=0;switch("range"===e&&this.options.range===!0&&("min"===i?(this.options.value=this._values(0),this.options.values=null):"max"===i&&(this.options.value=this._values(this.options.values.length-1),this.options.values=null)),t.isArray(this.options.values)&&(n=this.options.values.length),this._super(e,i),e){case"orientation":this._detectOrientation(),this._removeClass("ui-slider-horizontal ui-slider-vertical")._addClass("ui-slider-"+this.orientation),this._refreshValue(),this.options.range&&this._refreshRange(i),this.handles.css("horizontal"===i?"bottom":"left","");break;case"value":this._animateOff=!0,this._refreshValue(),this._change(null,0),this._animateOff=!1;break;case"values":for(this._animateOff=!0,this._refreshValue(),s=n-1;s>=0;s--)this._change(null,s);this._animateOff=!1;break;case"step":case"min":case"max":this._animateOff=!0,this._calculateNewMax(),this._refreshValue(),this._animateOff=!1;break;case"range":this._animateOff=!0,this._refresh(),this._animateOff=!1}},_setOptionDisabled:function(t){this._super(t),this._toggleClass(null,"ui-state-disabled",!!t)},_value:function(){var t=this.options.value;return t=this._trimAlignValue(t)},_values:function(t){var e,i,s;if(arguments.length)return e=this.options.values[t],e=this._trimAlignValue(e);if(this._hasMultipleValues()){for(i=this.options.values.slice(),s=0;i.length>s;s+=1)i[s]=this._trimAlignValue(i[s]);return i}return[]},_trimAlignValue:function(t){if(this._valueMin()>=t)return this._valueMin();if(t>=this._valueMax())return this._valueMax();var e=this.options.step>0?this.options.step:1,i=(t-this._valueMin())%e,s=t-i;return 2*Math.abs(i)>=e&&(s+=i>0?e:-e),parseFloat(s.toFixed(5))},_calculateNewMax:function(){var t=this.options.max,e=this._valueMin(),i=this.options.step,s=Math.round((t-e)/i)*i;t=s+e,t>this.options.max&&(t-=i),this.max=parseFloat(t.toFixed(this._precision()))},_precision:function(){var t=this._precisionOf(this.options.step);return null!==this.options.min&&(t=Math.max(t,this._precisionOf(this.options.min))),t},_precisionOf:function(t){var e=""+t,i=e.indexOf(".");return-1===i?0:e.length-i-1},_valueMin:function(){return this.options.min},_valueMax:function(){return this.max},_refreshRange:function(t){"vertical"===t&&this.range.css({width:"",left:""}),"horizontal"===t&&this.range.css({height:"",bottom:""})},_refreshValue:function(){var e,i,s,n,o,a=this.options.range,r=this.options,l=this,h=this._animateOff?!1:r.animate,c={};this._hasMultipleValues()?this.handles.each(function(s){i=100*((l.values(s)-l._valueMin())/(l._valueMax()-l._valueMin())),c["horizontal"===l.orientation?"left":"bottom"]=i+"%",t(this).stop(1,1)[h?"animate":"css"](c,r.animate),l.options.range===!0&&("horizontal"===l.orientation?(0===s&&l.range.stop(1,1)[h?"animate":"css"]({left:i+"%"},r.animate),1===s&&l.range[h?"animate":"css"]({width:i-e+"%"},{queue:!1,duration:r.animate})):(0===s&&l.range.stop(1,1)[h?"animate":"css"]({bottom:i+"%"},r.animate),1===s&&l.range[h?"animate":"css"]({height:i-e+"%"},{queue:!1,duration:r.animate}))),e=i}):(s=this.value(),n=this._valueMin(),o=this._valueMax(),i=o!==n?100*((s-n)/(o-n)):0,c["horizontal"===this.orientation?"left":"bottom"]=i+"%",this.handle.stop(1,1)[h?"animate":"css"](c,r.animate),"min"===a&&"horizontal"===this.orientation&&this.range.stop(1,1)[h?"animate":"css"]({width:i+"%"},r.animate),"max"===a&&"horizontal"===this.orientation&&this.range.stop(1,1)[h?"animate":"css"]({width:100-i+"%"},r.animate),"min"===a&&"vertical"===this.orientation&&this.range.stop(1,1)[h?"animate":"css"]({height:i+"%"},r.animate),"max"===a&&"vertical"===this.orientation&&this.range.stop(1,1)[h?"animate":"css"]({height:100-i+"%"},r.animate))},_handleEvents:{keydown:function(e){var i,s,n,o,a=t(e.target).data("ui-slider-handle-index");switch(e.keyCode){case t.ui.keyCode.HOME:case t.ui.keyCode.END:case t.ui.keyCode.PAGE_UP:case t.ui.keyCode.PAGE_DOWN:case t.ui.keyCode.UP:case t.ui.keyCode.RIGHT:case t.ui.keyCode.DOWN:case t.ui.keyCode.LEFT:if(e.preventDefault(),!this._keySliding&&(this._keySliding=!0,this._addClass(t(e.target),null,"ui-state-active"),i=this._start(e,a),i===!1))return}switch(o=this.options.step,s=n=this._hasMultipleValues()?this.values(a):this.value(),e.keyCode){case t.ui.keyCode.HOME:n=this._valueMin();break;case t.ui.keyCode.END:n=this._valueMax();break;case t.ui.keyCode.PAGE_UP:n=this._trimAlignValue(s+(this._valueMax()-this._valueMin())/this.numPages);break;case t.ui.keyCode.PAGE_DOWN:n=this._trimAlignValue(s-(this._valueMax()-this._valueMin())/this.numPages);break;case t.ui.keyCode.UP:case t.ui.keyCode.RIGHT:if(s===this._valueMax())return;n=this._trimAlignValue(s+o);break;case t.ui.keyCode.DOWN:case t.ui.keyCode.LEFT:if(s===this._valueMin())return;n=this._trimAlignValue(s-o)}this._slide(e,a,n)},keyup:function(e){var i=t(e.target).data("ui-slider-handle-index");this._keySliding&&(this._keySliding=!1,this._stop(e,i),this._change(e,i),this._removeClass(t(e.target),null,"ui-state-active"))}}})});



/*
 * fullPage 2.8.9
 * https://github.com/alvarotrigo/fullPage.js
 * @license MIT licensed
 *
 * Copyright (C) 2015 alvarotrigo.com - A project by Alvaro Trigo
 */
!function(e,n){"use strict";"function"==typeof define&&define.amd?define(["jquery"],function(t){return n(t,e,e.document,e.Math)}):"object"==typeof exports&&exports?module.exports=n(require("jquery"),e,e.document,e.Math):n(jQuery,e,e.document,e.Math)}("undefined"!=typeof window?window:this,function(e,n,t,o,i){"use strict";var a="fullpage-wrapper",r="."+a,l="fp-scrollable",s="."+l,c="fp-responsive",d="fp-notransition",f="fp-destroyed",u="fp-enabled",h="fp-viewing",p="active",v="."+p,g="fp-completely",m="."+g,w=".section",S="fp-section",y="."+S,b=y+v,x=y+":first",C=y+":last",T="fp-tableCell",k="."+T,I="fp-auto-height",L="fp-normal-scroll",E="fp-nav",A="#"+E,M="fp-tooltip",O="."+M,H="fp-show-active",B=".slide",R="fp-slide",z="."+R,D=z+v,P="fp-slides",q="."+P,F="fp-slidesContainer",V="."+F,W="fp-table",Y="fp-slidesNav",j="."+Y,N=j+" a",U="fp-controlArrow",X="."+U,K="fp-prev",Q="."+K,G=U+" "+K,J=X+Q,Z="fp-next",$="."+Z,_=U+" "+Z,ee=X+$,ne=e(n),te=e(t),oe={scrollbars:!0,mouseWheel:!0,hideScrollbars:!1,fadeScrollbars:!1,disableMouse:!0,interactiveScrollbars:!0};e.fn.fullpage=function(l){function s(n,t){ot("autoScrolling",n,t);var o=e(b);l.autoScrolling&&!l.scrollBar?(rt.css({overflow:"hidden",height:"100%"}),U(Et.recordHistory,"internal"),vt.css({"-ms-touch-action":"none","touch-action":"none"}),o.length&&$n(o.position().top)):(rt.css({overflow:"visible",height:"initial"}),U(!1,"internal"),vt.css({"-ms-touch-action":"","touch-action":""}),$n(0),o.length&&rt.scrollTop(o.position().top))}function U(e,n){ot("recordHistory",e,n)}function Q(e,n){ot("scrollingSpeed",e,n)}function Z(e,n){ot("fitToSection",e,n)}function $(e){l.lockAnchors=e}function ae(e){e?(Nn(),Un()):(jn(),Xn())}function re(n,t){"undefined"!=typeof t?(t=t.replace(/ /g,"").split(","),e.each(t,function(e,t){et(n,t,"m")})):n?(ae(!0),Kn()):(ae(!1),Qn())}function le(n,t){"undefined"!=typeof t?(t=t.replace(/ /g,"").split(","),e.each(t,function(e,t){et(n,t,"k")})):l.keyboardScrolling=n}function se(){var n=e(b).prev(y);n.length||!l.loopTop&&!l.continuousVertical||(n=e(y).last()),n.length&&Ue(n,null,!0)}function ce(){var n=e(b).next(y);n.length||!l.loopBottom&&!l.continuousVertical||(n=e(y).first()),n.length&&Ue(n,null,!1)}function de(e,n){Q(0,"internal"),fe(e,n),Q(Et.scrollingSpeed,"internal")}function fe(e,n){var t=Bn(e);"undefined"!=typeof n?zn(e,n):t.length>0&&Ue(t)}function ue(e){Ye("right",e)}function he(e){Ye("left",e)}function pe(n){if(!vt.hasClass(f)){mt=!0,gt=ne.height(),e(y).each(function(){var n=e(this).find(q),t=e(this).find(z);l.verticalCentered&&e(this).find(k).css("height",On(e(this))+"px"),e(this).css("height",gt+"px"),l.scrollOverflow&&(t.length?t.each(function(){An(e(this))}):An(e(this))),t.length>1&&gn(n,n.find(D))});var t=e(b),o=t.index(y);o&&de(o+1),mt=!1,e.isFunction(l.afterResize)&&n&&l.afterResize.call(vt),e.isFunction(l.afterReBuild)&&!n&&l.afterReBuild.call(vt)}}function ve(n){var t=lt.hasClass(c);n?t||(s(!1,"internal"),Z(!1,"internal"),e(A).hide(),lt.addClass(c),e.isFunction(l.afterResponsive)&&l.afterResponsive.call(vt,n)):t&&(s(Et.autoScrolling,"internal"),Z(Et.autoScrolling,"internal"),e(A).show(),lt.removeClass(c),e.isFunction(l.afterResponsive)&&l.afterResponsive.call(vt,n))}function ge(){l.css3&&(l.css3=Yn()),l.scrollBar=l.scrollBar||l.hybrid,we(),Se(),re(!0),s(l.autoScrolling,"internal");var n=e(b).find(D);n.length&&(0!==e(b).index(y)||0===e(b).index(y)&&0!==n.index())&&Zn(n),bn(),Wn(),"complete"===t.readyState&&tn(),ne.on("load",tn)}function me(){ne.on("scroll",Oe).on("hashchange",on).blur(fn).resize(yn),te.keydown(an).keyup(ln).on("click touchstart",A+" a",un).on("click touchstart",N,hn).on("click",O,rn),e(y).on("click touchstart",X,dn),l.normalScrollElements&&(te.on("mouseenter",l.normalScrollElements,function(){ae(!1)}),te.on("mouseleave",l.normalScrollElements,function(){ae(!0)}))}function we(){var n=vt.find(l.sectionSelector);l.anchors.length||(l.anchors=n.filter("[data-anchor]").map(function(){return e(this).data("anchor").toString()}).get()),l.navigationTooltips.length||(l.navigationTooltips=n.filter("[data-tooltip]").map(function(){return e(this).data("tooltip").toString()}).get())}function Se(){vt.css({height:"100%",position:"relative"}),vt.addClass(a),e("html").addClass(u),gt=ne.height(),vt.removeClass(f),Ce(),e(y).each(function(n){var t=e(this),o=t.find(z),i=o.length;be(t,n),xe(t,n),i>0?ye(t,o,i):l.verticalCentered&&Mn(t)}),l.fixedElements&&l.css3&&e(l.fixedElements).appendTo(lt),l.navigation&&ke(),Le(),l.scrollOverflow?("complete"===t.readyState&&Ie(),ne.on("load",Ie)):Me()}function ye(n,t,o){var i=100*o,a=100/o;t.wrapAll('<div class="'+F+'" />'),t.parent().wrap('<div class="'+P+'" />'),n.find(V).css("width",i+"%"),o>1&&(l.controlArrows&&Te(n),l.slidesNavigation&&Pn(n,o)),t.each(function(n){e(this).css("width",a+"%"),l.verticalCentered&&Mn(e(this))});var r=n.find(D);r.length&&(0!==e(b).index(y)||0===e(b).index(y)&&0!==r.index())?Zn(r):t.eq(0).addClass(p)}function be(n,t){t||0!==e(b).length||n.addClass(p),n.css("height",gt+"px"),l.paddingTop&&n.css("padding-top",l.paddingTop),l.paddingBottom&&n.css("padding-bottom",l.paddingBottom),"undefined"!=typeof l.sectionsColor[t]&&n.css("background-color",l.sectionsColor[t]),"undefined"!=typeof l.anchors[t]&&n.attr("data-anchor",l.anchors[t])}function xe(n,t){"undefined"!=typeof l.anchors[t]&&n.hasClass(p)&&In(l.anchors[t],t),l.menu&&l.css3&&e(l.menu).closest(r).length&&e(l.menu).appendTo(lt)}function Ce(){vt.find(l.sectionSelector).addClass(S),vt.find(l.slideSelector).addClass(R)}function Te(e){e.find(q).after('<div class="'+G+'"></div><div class="'+_+'"></div>'),"#fff"!=l.controlArrowColor&&(e.find(ee).css("border-color","transparent transparent transparent "+l.controlArrowColor),e.find(J).css("border-color","transparent "+l.controlArrowColor+" transparent transparent")),l.loopHorizontal||e.find(J).hide()}function ke(){lt.append('<div id="'+E+'"><ul></ul></div>');var n=e(A);n.addClass(function(){return l.showActiveTooltip?H+" "+l.navigationPosition:l.navigationPosition});for(var t=0;t<e(y).length;t++){var o="";l.anchors.length&&(o=l.anchors[t]);var i='<li><a href="#'+o+'"><span></span></a>',a=l.navigationTooltips[t];"undefined"!=typeof a&&""!==a&&(i+='<div class="'+M+" "+l.navigationPosition+'">'+a+"</div>"),i+="</li>",n.find("ul").append(i)}e(A).css("margin-top","-"+e(A).height()/2+"px"),e(A).find("li").eq(e(b).index(y)).find("a").addClass(p)}function Ie(){e(y).each(function(){var n=e(this).find(z);n.length?n.each(function(){An(e(this))}):An(e(this))}),Me()}function Le(){vt.find('iframe[src*="youtube.com/embed/"]').each(function(){Ee(e(this),"enablejsapi=1")})}function Ee(e,n){var t=e.attr("src");e.attr("src",t+Ae(t)+n)}function Ae(e){return/\?/.test(e)?"&":"?"}function Me(){var n=e(b);n.addClass(g),l.scrollOverflowHandler.afterRender&&l.scrollOverflowHandler.afterRender(n),Ze(n),$e(n),l.scrollOverflowHandler.afterLoad(),e.isFunction(l.afterLoad)&&l.afterLoad.call(n,n.data("anchor"),n.index(y)+1),e.isFunction(l.afterRender)&&l.afterRender.call(vt)}function Oe(){var n;if(!l.autoScrolling||l.scrollBar){var o=ne.scrollTop(),i=Be(o),a=0,r=o+ne.height()/2,s=lt.height()-ne.height()===o,c=t.querySelectorAll(y);if(s)a=c.length-1;else if(o)for(var d=0;d<c.length;++d){var f=c[d];f.offsetTop<=r&&(a=d)}else a=0;if(He(i)&&(e(b).hasClass(g)||e(b).addClass(g).siblings().removeClass(g)),n=e(c).eq(a),!n.hasClass(p)){At=!0;var u,h,v=e(b),m=v.index(y)+1,w=Ln(n),S=n.data("anchor"),x=n.index(y)+1,C=n.find(D);C.length&&(h=C.data("anchor"),u=C.index()),St&&(n.addClass(p).siblings().removeClass(p),e.isFunction(l.onLeave)&&l.onLeave.call(v,m,x,w),e.isFunction(l.afterLoad)&&l.afterLoad.call(n,S,x),en(v),Ze(n),$e(n),In(S,x-1),l.anchors.length&&(ct=S),qn(u,h,S,x)),clearTimeout(kt),kt=setTimeout(function(){At=!1},100)}l.fitToSection&&(clearTimeout(It),It=setTimeout(function(){St&&l.fitToSection&&(e(b).is(n)&&(mt=!0),Ue(e(b)),mt=!1)},l.fitToSectionDelay))}}function He(n){var t=e(b).position().top,o=t+ne.height();return"up"==n?o>=ne.scrollTop()+ne.height():t<=ne.scrollTop()}function Be(e){var n=e>Mt?"down":"up";return Mt=e,Dt=e,n}function Re(e,n){if(bt.m[e]){var t="down"===e?"bottom":"top",o="down"===e?ce:se;if(n.length>0){if(!l.scrollOverflowHandler.isScrolled(t,n))return!0;o()}else o()}}function ze(e){var n=e.originalEvent;!Pe(e.target)&&l.autoScrolling&&qe(n)&&e.preventDefault()}function De(n){var t=n.originalEvent,i=e(t.target).closest(y);if(!Pe(n.target)&&qe(t)){l.autoScrolling&&n.preventDefault();var a=l.scrollOverflowHandler.scrollable(i),r=Jn(t);Bt=r.y,Rt=r.x,i.find(q).length&&o.abs(Ht-Rt)>o.abs(Ot-Bt)?!ut&&o.abs(Ht-Rt)>ne.outerWidth()/100*l.touchSensitivity&&(Ht>Rt?bt.m.right&&ue(i):bt.m.left&&he(i)):l.autoScrolling&&St&&o.abs(Ot-Bt)>ne.height()/100*l.touchSensitivity&&(Ot>Bt?Re("down",a):Bt>Ot&&Re("up",a))}}function Pe(n,t){t=t||0;var o=e(n).parent();return t<l.normalScrollElementTouchThreshold&&o.is(l.normalScrollElements)?!0:t==l.normalScrollElementTouchThreshold?!1:Pe(o,++t)}function qe(e){return"undefined"==typeof e.pointerType||"mouse"!=e.pointerType}function Fe(e){var n=e.originalEvent;if(l.fitToSection&&rt.stop(),qe(n)){var t=Jn(n);Ot=t.y,Ht=t.x}}function Ve(e,n){for(var t=0,i=e.slice(o.max(e.length-n,1)),a=0;a<i.length;a++)t+=i[a];return o.ceil(t/n)}function We(t){var i=(new Date).getTime(),a=e(m).hasClass(L);if(l.autoScrolling&&!ft&&!a){t=t||n.event;var r=t.wheelDelta||-t.deltaY||-t.detail,s=o.max(-1,o.min(1,r)),c="undefined"!=typeof t.wheelDeltaX||"undefined"!=typeof t.deltaX,d=o.abs(t.wheelDeltaX)<o.abs(t.wheelDelta)||o.abs(t.deltaX)<o.abs(t.deltaY)||!c;yt.length>149&&yt.shift(),yt.push(o.abs(r)),l.scrollBar&&(t.preventDefault?t.preventDefault():t.returnValue=!1);var f=e(b),u=l.scrollOverflowHandler.scrollable(f),h=i-zt;if(zt=i,h>200&&(yt=[]),St){var p=Ve(yt,10),v=Ve(yt,70),g=p>=v;g&&d&&(0>s?Re("down",u):Re("up",u))}return!1}l.fitToSection&&rt.stop()}function Ye(n,t){var o="undefined"==typeof t?e(b):t,i=o.find(q),a=i.find(z).length;if(!(!i.length||ut||2>a)){var r=i.find(D),s=null;if(s="left"===n?r.prev(z):r.next(z),!s.length){if(!l.loopHorizontal)return;s="left"===n?r.siblings(":last"):r.siblings(":first")}ut=!0,gn(i,s,n)}}function je(){e(D).each(function(){Zn(e(this),"internal")})}function Ne(e){var n=e.position(),t=n.top,o=n.top>Dt,i=t-gt+e.outerHeight(),a=l.bigSectionsDestination;return e.outerHeight()>gt?(!o&&!a||"bottom"===a)&&(t=i):(o||mt&&e.is(":last-child"))&&(t=i),Dt=t,t}function Ue(n,t,o){if("undefined"!=typeof n){var i,a,r=Ne(n),s={element:n,callback:t,isMovementUp:o,dtop:r,yMovement:Ln(n),anchorLink:n.data("anchor"),sectionIndex:n.index(y),activeSlide:n.find(D),activeSection:e(b),leavingSection:e(b).index(y)+1,localIsResizing:mt};s.activeSection.is(n)&&!mt||l.scrollBar&&ne.scrollTop()===s.dtop&&!n.hasClass(I)||(s.activeSlide.length&&(i=s.activeSlide.data("anchor"),a=s.activeSlide.index()),l.autoScrolling&&l.continuousVertical&&"undefined"!=typeof s.isMovementUp&&(!s.isMovementUp&&"up"==s.yMovement||s.isMovementUp&&"down"==s.yMovement)&&(s=Qe(s)),(!e.isFunction(l.onLeave)||s.localIsResizing||l.onLeave.call(s.activeSection,s.leavingSection,s.sectionIndex+1,s.yMovement)!==!1)&&(en(s.activeSection),l.scrollOverflowHandler.beforeLeave(),n.addClass(p).siblings().removeClass(p),Ze(n),l.scrollOverflowHandler.onLeave(),St=!1,qn(a,i,s.anchorLink,s.sectionIndex),Xe(s),ct=s.anchorLink,In(s.anchorLink,s.sectionIndex)))}}function Xe(n){if(l.css3&&l.autoScrolling&&!l.scrollBar){var t="translate3d(0px, -"+o.round(n.dtop)+"px, 0px)";Hn(t,!0),l.scrollingSpeed?(clearTimeout(Ct),Ct=setTimeout(function(){Je(n)},l.scrollingSpeed)):Je(n)}else{var i=Ke(n);e(i.element).animate(i.options,l.scrollingSpeed,l.easing).promise().done(function(){l.scrollBar?setTimeout(function(){Je(n)},30):Je(n)})}}function Ke(e){var n={};return l.autoScrolling&&!l.scrollBar?(n.options={top:-e.dtop},n.element=r):(n.options={scrollTop:e.dtop},n.element="html, body"),n}function Qe(n){return n.isMovementUp?e(b).before(n.activeSection.nextAll(y)):e(b).after(n.activeSection.prevAll(y).get().reverse()),$n(e(b).position().top),je(),n.wrapAroundElements=n.activeSection,n.dtop=n.element.position().top,n.yMovement=Ln(n.element),n}function Ge(n){n.wrapAroundElements&&n.wrapAroundElements.length&&(n.isMovementUp?e(x).before(n.wrapAroundElements):e(C).after(n.wrapAroundElements),$n(e(b).position().top),je())}function Je(n){Ge(n),e.isFunction(l.afterLoad)&&!n.localIsResizing&&l.afterLoad.call(n.element,n.anchorLink,n.sectionIndex+1),l.scrollOverflowHandler.afterLoad(),n.localIsResizing||$e(n.element),n.element.addClass(g).siblings().removeClass(g),St=!0,e.isFunction(n.callback)&&n.callback.call(this)}function Ze(n){if(l.lazyLoading){var t,o=nn(n);o.find("img[data-src], source[data-src], audio[data-src], iframe[data-src]").each(function(){t=e(this),t.attr("src",t.data("src")),t.removeAttr("data-src"),t.is("source")&&t.closest("video").get(0).load()})}}function $e(n){var t=nn(n);t.find("video, audio").each(function(){var n=e(this).get(0);n.hasAttribute("data-autoplay")&&"function"==typeof n.play&&n.play()}),t.find('iframe[src*="youtube.com/embed/"]').each(function(){var n=e(this).get(0);n.hasAttribute("data-autoplay")&&_e(n),n.onload=function(){n.hasAttribute("data-autoplay")&&_e(n)}})}function _e(e){e.contentWindow.postMessage('{"event":"command","func":"playVideo","args":""}',"*")}function en(n){var t=nn(n);t.find("video, audio").each(function(){var n=e(this).get(0);n.hasAttribute("data-keepplaying")||"function"!=typeof n.pause||n.pause()}),t.find('iframe[src*="youtube.com/embed/"]').each(function(){var n=e(this).get(0);/youtube\.com\/embed\//.test(e(this).attr("src"))&&!n.hasAttribute("data-keepplaying")&&e(this).get(0).contentWindow.postMessage('{"event":"command","func":"pauseVideo","args":""}',"*")})}function nn(n){var t=n.find(D);return t.length&&(n=e(t)),n}function tn(){var e=n.location.hash.replace("#","").split("/"),t=decodeURIComponent(e[0]),o=decodeURIComponent(e[1]);t&&(l.animateAnchor?zn(t,o):de(t,o))}function on(){if(!At&&!l.lockAnchors){var e=n.location.hash.replace("#","").split("/"),t=decodeURIComponent(e[0]),o=decodeURIComponent(e[1]),i="undefined"==typeof ct,a="undefined"==typeof ct&&"undefined"==typeof o&&!ut;t.length&&(t&&t!==ct&&!i||a||!ut&&dt!=o)&&zn(t,o)}}function an(n){clearTimeout(Lt);var t=e(":focus");if(!t.is("textarea")&&!t.is("input")&&!t.is("select")&&"true"!==t.attr("contentEditable")&&""!==t.attr("contentEditable")&&l.keyboardScrolling&&l.autoScrolling){var o=n.which,i=[40,38,32,33,34];e.inArray(o,i)>-1&&n.preventDefault(),ft=n.ctrlKey,Lt=setTimeout(function(){pn(n)},150)}}function rn(){e(this).prev().trigger("click")}function ln(e){wt&&(ft=e.ctrlKey)}function sn(e){2==e.which&&(Pt=e.pageY,vt.on("mousemove",vn))}function cn(e){2==e.which&&vt.off("mousemove")}function dn(){var n=e(this).closest(y);e(this).hasClass(K)?bt.m.left&&he(n):bt.m.right&&ue(n)}function fn(){wt=!1,ft=!1}function un(n){n.preventDefault();var t=e(this).parent().index();Ue(e(y).eq(t))}function hn(n){n.preventDefault();var t=e(this).closest(y).find(q),o=t.find(z).eq(e(this).closest("li").index());gn(t,o)}function pn(n){var t=n.shiftKey;switch(n.which){case 38:case 33:bt.k.up&&se();break;case 32:if(t&&bt.k.up){se();break}case 40:case 34:bt.k.down&&ce();break;case 36:bt.k.up&&fe(1);break;case 35:bt.k.down&&fe(e(y).length);break;case 37:bt.k.left&&he();break;case 39:bt.k.right&&ue();break;default:return}}function vn(e){St&&(e.pageY<Pt&&bt.m.up?se():e.pageY>Pt&&bt.m.down&&ce()),Pt=e.pageY}function gn(n,t,o){var i=n.closest(y),a={slides:n,destiny:t,direction:o,destinyPos:t.position(),slideIndex:t.index(),section:i,sectionIndex:i.index(y),anchorLink:i.data("anchor"),slidesNav:i.find(j),slideAnchor:Vn(t),prevSlide:i.find(D),prevSlideIndex:i.find(D).index(),localIsResizing:mt};return a.xMovement=En(a.prevSlideIndex,a.slideIndex),a.localIsResizing||(St=!1),l.onSlideLeave&&!a.localIsResizing&&"none"!==a.xMovement&&e.isFunction(l.onSlideLeave)&&l.onSlideLeave.call(a.prevSlide,a.anchorLink,a.sectionIndex+1,a.prevSlideIndex,a.xMovement,a.slideIndex)===!1?void(ut=!1):(t.addClass(p).siblings().removeClass(p),a.localIsResizing||(en(a.prevSlide),Ze(t)),!l.loopHorizontal&&l.controlArrows&&(i.find(J).toggle(0!==a.slideIndex),i.find(ee).toggle(!t.is(":last-child"))),i.hasClass(p)&&qn(a.slideIndex,a.slideAnchor,a.anchorLink,a.sectionIndex),void wn(n,a,!0))}function mn(n){Sn(n.slidesNav,n.slideIndex),n.localIsResizing||(e.isFunction(l.afterSlideLoad)&&l.afterSlideLoad.call(n.destiny,n.anchorLink,n.sectionIndex+1,n.slideAnchor,n.slideIndex),St=!0,$e(n.destiny)),ut=!1}function wn(e,n,t){var i=n.destinyPos;if(l.css3){var a="translate3d(-"+o.round(i.left)+"px, 0px, 0px)";xn(e.find(V)).css(_n(a)),Tt=setTimeout(function(){t&&mn(n)},l.scrollingSpeed,l.easing)}else e.animate({scrollLeft:o.round(i.left)},l.scrollingSpeed,l.easing,function(){t&&mn(n)})}function Sn(e,n){e.find(v).removeClass(p),e.find("li").eq(n).find("a").addClass(p)}function yn(){if(bn(),ht){var n=e(t.activeElement);if(!n.is("textarea")&&!n.is("input")&&!n.is("select")){var i=ne.height();o.abs(i-qt)>20*o.max(qt,i)/100&&(pe(!0),qt=i)}}else clearTimeout(xt),xt=setTimeout(function(){pe(!0)},350)}function bn(){var e=l.responsive||l.responsiveWidth,n=l.responsiveHeight,t=e&&ne.outerWidth()<e,o=n&&ne.height()<n;e&&n?ve(t||o):e?ve(t):n&&ve(o)}function xn(e){var n="all "+l.scrollingSpeed+"ms "+l.easingcss3;return e.removeClass(d),e.css({"-webkit-transition":n,transition:n})}function Cn(e){return e.addClass(d)}function Tn(n,t){l.navigation&&(e(A).find(v).removeClass(p),n?e(A).find('a[href="#'+n+'"]').addClass(p):e(A).find("li").eq(t).find("a").addClass(p))}function kn(n){l.menu&&(e(l.menu).find(v).removeClass(p),e(l.menu).find('[data-menuanchor="'+n+'"]').addClass(p))}function In(e,n){kn(e),Tn(e,n)}function Ln(n){var t=e(b).index(y),o=n.index(y);return t==o?"none":t>o?"up":"down"}function En(e,n){return e==n?"none":e>n?"left":"right"}function An(e){if(!e.hasClass("fp-noscroll")){e.css("overflow","hidden");var n,t=l.scrollOverflowHandler,o=t.wrapContent(),i=e.closest(y),a=t.scrollable(e);a.length?n=t.scrollHeight(e):(n=e.get(0).scrollHeight,l.verticalCentered&&(n=e.find(k).get(0).scrollHeight));var r=gt-parseInt(i.css("padding-bottom"))-parseInt(i.css("padding-top"));n>r?a.length?t.update(e,r):(l.verticalCentered?e.find(k).wrapInner(o):e.wrapInner(o),t.create(e,r)):t.remove(e),e.css("overflow","")}}function Mn(e){e.hasClass(W)||e.addClass(W).wrapInner('<div class="'+T+'" style="height:'+On(e)+'px;" />')}function On(e){var n=gt;if(l.paddingTop||l.paddingBottom){var t=e;t.hasClass(S)||(t=e.closest(y));var o=parseInt(t.css("padding-top"))+parseInt(t.css("padding-bottom"));n=gt-o}return n}function Hn(e,n){n?xn(vt):Cn(vt),vt.css(_n(e)),setTimeout(function(){vt.removeClass(d)},10)}function Bn(n){var t=vt.find(y+'[data-anchor="'+n+'"]');return t.length||(t=e(y).eq(n-1)),t}function Rn(e,n){var t=n.find(q),o=t.find(z+'[data-anchor="'+e+'"]');return o.length||(o=t.find(z).eq(e)),o}function zn(e,n){var t=Bn(e);t.length&&("undefined"==typeof n&&(n=0),e===ct||t.hasClass(p)?Dn(t,n):Ue(t,function(){Dn(t,n)}))}function Dn(e,n){if("undefined"!=typeof n){var t=e.find(q),o=Rn(n,e);o.length&&gn(t,o)}}function Pn(e,n){e.append('<div class="'+Y+'"><ul></ul></div>');var t=e.find(j);t.addClass(l.slidesNavPosition);for(var o=0;n>o;o++)t.find("ul").append('<li><a href="#"><span></span></a></li>');t.css("margin-left","-"+t.width()/2+"px"),t.find("li").first().find("a").addClass(p)}function qn(e,n,t,o){var i="";l.anchors.length&&!l.lockAnchors&&(e?("undefined"!=typeof t&&(i=t),"undefined"==typeof n&&(n=e),dt=n,Fn(i+"/"+n)):"undefined"!=typeof e?(dt=n,Fn(t)):Fn(t)),Wn()}function Fn(e){if(l.recordHistory)location.hash=e;else if(ht||pt)n.history.replaceState(i,i,"#"+e);else{var t=n.location.href.split("#")[0];n.location.replace(t+"#"+e)}}function Vn(e){var n=e.data("anchor"),t=e.index();return"undefined"==typeof n&&(n=t),n}function Wn(){var n=e(b),t=n.find(D),o=Vn(n),i=Vn(t),a=String(o);t.length&&(a=a+"-"+i),a=a.replace("/","-").replace("#","");var r=new RegExp("\\b\\s?"+h+"-[^\\s]+\\b","g");lt[0].className=lt[0].className.replace(r,""),lt.addClass(h+"-"+a)}function Yn(){var e,o=t.createElement("p"),a={webkitTransform:"-webkit-transform",OTransform:"-o-transform",msTransform:"-ms-transform",MozTransform:"-moz-transform",transform:"transform"};t.body.insertBefore(o,null);for(var r in a)o.style[r]!==i&&(o.style[r]="translate3d(1px,1px,1px)",e=n.getComputedStyle(o).getPropertyValue(a[r]));return t.body.removeChild(o),e!==i&&e.length>0&&"none"!==e}function jn(){t.addEventListener?(t.removeEventListener("mousewheel",We,!1),t.removeEventListener("wheel",We,!1),t.removeEventListener("MozMousePixelScroll",We,!1)):t.detachEvent("onmousewheel",We)}function Nn(){var e,o="";n.addEventListener?e="addEventListener":(e="attachEvent",o="on");var a="onwheel"in t.createElement("div")?"wheel":t.onmousewheel!==i?"mousewheel":"DOMMouseScroll";"DOMMouseScroll"==a?t[e](o+"MozMousePixelScroll",We,!1):t[e](o+a,We,!1)}function Un(){vt.on("mousedown",sn).on("mouseup",cn)}function Xn(){vt.off("mousedown",sn).off("mouseup",cn)}function Kn(){if(l.autoScrolling&&(ht||pt)){var n=Gn();lt.off("touchmove "+n.move).on("touchmove "+n.move,ze),e(r).off("touchstart "+n.down).on("touchstart "+n.down,Fe).off("touchmove "+n.move).on("touchmove "+n.move,De)}}function Qn(){if(ht||pt){var n=Gn();e(r).off("touchstart "+n.down).off("touchmove "+n.move)}}function Gn(){var e;return e=n.PointerEvent?{down:"pointerdown",move:"pointermove"}:{down:"MSPointerDown",move:"MSPointerMove"}}function Jn(e){var n=[];return n.y="undefined"!=typeof e.pageY&&(e.pageY||e.pageX)?e.pageY:e.touches[0].pageY,n.x="undefined"!=typeof e.pageX&&(e.pageY||e.pageX)?e.pageX:e.touches[0].pageX,pt&&qe(e)&&l.scrollBar&&(n.y=e.touches[0].pageY,n.x=e.touches[0].pageX),n}function Zn(e,n){Q(0,"internal"),"undefined"!=typeof n&&(mt=!0),gn(e.closest(q),e),"undefined"!=typeof n&&(mt=!1),Q(Et.scrollingSpeed,"internal")}function $n(e){var n=o.round(e);if(l.scrollBar||!l.autoScrolling)vt.scrollTop(n);else if(l.css3){var t="translate3d(0px, -"+n+"px, 0px)";Hn(t,!1)}else vt.css("top",-n)}function _n(e){return{"-webkit-transform":e,"-moz-transform":e,"-ms-transform":e,transform:e}}function et(e,n,t){switch(n){case"up":bt[t].up=e;break;case"down":bt[t].down=e;break;case"left":bt[t].left=e;break;case"right":bt[t].right=e;break;case"all":"m"==t?re(e):le(e)}}function nt(n){s(!1,"internal"),re(!1),le(!1),vt.addClass(f),clearTimeout(Tt),clearTimeout(Ct),clearTimeout(xt),clearTimeout(kt),clearTimeout(It),ne.off("scroll",Oe).off("hashchange",on).off("resize",yn),te.off("click touchstart",A+" a").off("mouseenter",A+" li").off("mouseleave",A+" li").off("click touchstart",N).off("mouseover",l.normalScrollElements).off("mouseout",l.normalScrollElements),e(y).off("click touchstart",X),clearTimeout(Tt),clearTimeout(Ct),n&&tt()}function tt(){$n(0),vt.find("img[data-src], source[data-src], audio[data-src], iframe[data-src]").each(function(){e(this).attr("src",e(this).data("src")),e(this).removeAttr("data-src")}),e(A+", "+j+", "+X).remove(),e(y).css({height:"","background-color":"",padding:""}),e(z).css({width:""}),vt.css({height:"",position:"","-ms-touch-action":"","touch-action":""}),rt.css({overflow:"",height:""}),e("html").removeClass(u),lt.removeClass(c),e.each(lt.get(0).className.split(/\s+/),function(e,n){0===n.indexOf(h)&&lt.removeClass(n)}),e(y+", "+z).each(function(){l.scrollOverflowHandler.remove(e(this)),e(this).removeClass(W+" "+p)}),Cn(vt),vt.find(k+", "+V+", "+q).each(function(){e(this).replaceWith(this.childNodes)}),rt.scrollTop(0);var n=[S,R,F];e.each(n,function(n,t){e("."+t).removeClass(t)})}function ot(e,n,t){l[e]=n,"internal"!==t&&(Et[e]=n)}function it(){var n=["fadingEffect","continuousHorizontal","scrollHorizontally","interlockedSlides","resetSliders","responsiveSlides","offsetSections","dragAndMove"];return e("html").hasClass(u)?void at("error","Fullpage.js can only be initialized once and you are doing it multiple times!"):(l.continuousVertical&&(l.loopTop||l.loopBottom)&&(l.continuousVertical=!1,at("warn","Option `loopTop/loopBottom` is mutually exclusive with `continuousVertical`; `continuousVertical` disabled")),l.scrollBar&&l.scrollOverflow&&at("warn","Option `scrollBar` is mutually exclusive with `scrollOverflow`. Sections with scrollOverflow might not work well in Firefox"),!l.continuousVertical||!l.scrollBar&&l.autoScrolling||(l.continuousVertical=!1,at("warn","Scroll bars (`scrollBar:true` or `autoScrolling:false`) are mutually exclusive with `continuousVertical`; `continuousVertical` disabled")),e.each(n,function(e,n){l[n]&&at("warn","fullpage.js extensions require jquery.fullpage.extensions.min.js file instead of the usual jquery.fullpage.js. Requested: "+n)}),void e.each(l.anchors,function(n,t){var o=te.find("[name]").filter(function(){return e(this).attr("name")&&e(this).attr("name").toLowerCase()==t.toLowerCase()}),i=te.find("[id]").filter(function(){return e(this).attr("id")&&e(this).attr("id").toLowerCase()==t.toLowerCase()});(i.length||o.length)&&(at("error","data-anchor tags can not have the same value as any `id` element on the site (or `name` element for IE)."),i.length&&at("error",'"'+t+'" is is being used by another element `id` property'),o.length&&at("error",'"'+t+'" is is being used by another element `name` property'))}))}function at(e,n){console&&console[e]&&console[e]("fullPage: "+n)}if(e("html").hasClass(u))return void it();var rt=e("html, body"),lt=e("body"),st=e.fn.fullpage;l=e.extend({menu:!1,anchors:[],lockAnchors:!1,navigation:!1,navigationPosition:"right",navigationTooltips:[],showActiveTooltip:!1,slidesNavigation:!1,slidesNavPosition:"bottom",scrollBar:!1,hybrid:!1,css3:!0,scrollingSpeed:700,autoScrolling:!0,fitToSection:!0,fitToSectionDelay:1e3,easing:"easeInOutCubic",easingcss3:"ease",loopBottom:!1,loopTop:!1,loopHorizontal:!0,continuousVertical:!1,continuousHorizontal:!1,scrollHorizontally:!1,interlockedSlides:!1,dragAndMove:!1,offsetSections:!1,resetSliders:!1,fadingEffect:!1,normalScrollElements:null,scrollOverflow:!1,scrollOverflowHandler:ie,scrollOverflowOptions:null,touchSensitivity:5,normalScrollElementTouchThreshold:5,bigSectionsDestination:null,keyboardScrolling:!0,animateAnchor:!0,recordHistory:!0,controlArrows:!0,controlArrowColor:"#fff",verticalCentered:!0,sectionsColor:[],paddingTop:0,paddingBottom:0,fixedElements:null,responsive:0,responsiveWidth:0,responsiveHeight:0,responsiveSlides:!1,sectionSelector:w,slideSelector:B,afterLoad:null,onLeave:null,afterRender:null,afterResize:null,afterReBuild:null,afterSlideLoad:null,onSlideLeave:null,afterResponsive:null,lazyLoading:!0},l);var ct,dt,ft,ut=!1,ht=navigator.userAgent.match(/(iPhone|iPod|iPad|Android|playbook|silk|BlackBerry|BB10|Windows Phone|Tizen|Bada|webOS|IEMobile|Opera Mini)/),pt="ontouchstart"in n||navigator.msMaxTouchPoints>0||navigator.maxTouchPoints,vt=e(this),gt=ne.height(),mt=!1,wt=!0,St=!0,yt=[],bt={};bt.m={up:!0,down:!0,left:!0,right:!0},bt.k=e.extend(!0,{},bt.m);var xt,Ct,Tt,kt,It,Lt,Et=e.extend(!0,{},l);it(),oe.click=pt,oe=e.extend(oe,l.scrollOverflowOptions),e.extend(e.easing,{easeInOutCubic:function(e,n,t,o,i){return(n/=i/2)<1?o/2*n*n*n+t:o/2*((n-=2)*n*n+2)+t}}),e(this).length&&(st.setAutoScrolling=s,st.setRecordHistory=U,st.setScrollingSpeed=Q,st.setFitToSection=Z,st.setLockAnchors=$,st.setMouseWheelScrolling=ae,st.setAllowScrolling=re,st.setKeyboardScrolling=le,st.moveSectionUp=se,st.moveSectionDown=ce,st.silentMoveTo=de,st.moveTo=fe,st.moveSlideRight=ue,st.moveSlideLeft=he,st.reBuild=pe,st.setResponsive=ve,st.destroy=nt,ge(),me());var At=!1,Mt=0,Ot=0,Ht=0,Bt=0,Rt=0,zt=(new Date).getTime(),Dt=0,Pt=0,qt=gt},"undefined"!=typeof IScroll&&(IScroll.prototype.wheelOn=function(){this.wrapper.addEventListener("wheel",this),this.wrapper.addEventListener("mousewheel",this),this.wrapper.addEventListener("DOMMouseScroll",this)},IScroll.prototype.wheelOff=function(){this.wrapper.removeEventListener("wheel",this),this.wrapper.removeEventListener("mousewheel",this),this.wrapper.removeEventListener("DOMMouseScroll",this)});var ie={refreshId:null,iScrollInstances:[],toggleWheel:function(n){var t=e(b).find(s);t.each(function(){var t=e(this).data("iscrollInstance");"undefined"!=typeof t&&t&&(n?t.wheelOn():t.wheelOff())})},onLeave:function(){ie.toggleWheel(!1)},beforeLeave:function(){ie.onLeave()},afterLoad:function(){ie.toggleWheel(!0)},create:function(n,t){var o=n.find(s);o.height(t),o.each(function(){var n=e(this),t=n.data("iscrollInstance");t&&e.each(ie.iScrollInstances,function(){e(this).destroy()}),t=new IScroll(n.get(0),oe),ie.iScrollInstances.push(t),t.wheelOff(),n.data("iscrollInstance",t)})},isScrolled:function(e,n){var t=n.data("iscrollInstance");return t?"top"===e?t.y>=0&&!n.scrollTop():"bottom"===e?0-t.y+n.scrollTop()+1+n.innerHeight()>=n[0].scrollHeight:void 0:!0},scrollable:function(e){return e.find(q).length?e.find(D).find(s):e.find(s)},scrollHeight:function(e){return e.find(s).children().first().get(0).scrollHeight},remove:function(e){var n=e.find(s);if(n.length){var t=n.data("iscrollInstance");t.destroy(),n.data("iscrollInstance",null)}e.find(s).children().first().children().first().unwrap().unwrap()},update:function(n,t){clearTimeout(ie.refreshId),ie.refreshId=setTimeout(function(){e.each(ie.iScrollInstances,function(){e(this).get(0).refresh()})},150),n.find(s).css("height",t+"px").parent().css("height",t+"px")},wrapContent:function(){return'<div class="'+l+'"><div class="fp-scroller"></div></div>'}}});




/**
 * Div scroll xSwitch.
 */
(function (b) {
    b.fn.XSwitch = function (d) {
        return this.each(function () {
            var f = b(this), e = f.data("XSwitch");
            if (!e) {
                e = new c(f, d);
                f.data("XSwitch", e)
            }
            if (b.type(d) === "string") {
                return e[d]()
            }
        })
    };
    b.fn.XSwitch.defaults = {
        selectors: {sections: ".sections", section: ".section", page: ".pages", active: ".active"},
        index: 0,
        easing: "ease",
        duration: 500,
        loop: false,
        pagination: true,
        keyboard: true,
        direction: "vertical",
        callback: ""
    };
    var a = (function (e) {
        var h = ["webkit", "moz", "o", "ms"], g = "";
        for (var f = 0, d = h.length; f < d; f++) {
            g = h[f] + "Transition";
            if (e.style[g] !== undefined) {
                return "-" + h[f].toLowerCase() + "-"
            }
            return false
        }
    })(document.createElement("div"));
    var c = (function () {
        function g(j, i) {
            this.settings = b.extend(true, b.fn.XSwitch.defaults, i);
            this.element = j;
            this.init()
        }

        g.prototype = {
            init: function () {
                var i = this;
                this.selectors = this.settings.selectors;
                this.sections = this.element.find(this.selectors.sections);
                this.section = this.sections.find(this.selectors.section);
                this.direction = this.settings.direction === "vertical" ? true : false;
                this.pagesCount = this.pagesCount();
                this.index = (this.settings.index >= 0 && this.settings.index < this.pagesCount) ? this.settings.index : 0;
                this.canScroll = true;
                if (!this.direction) {
                    d(i)
                }
                if (this.settings.pagination) {
                    h(i)
                }
                f(i)
            }, pagesCount: function () {
                return this.section.size()
            }, switchLength: function () {
                return this.duration ? this.element.height() : this.element.width()
            }, prve: function () {
                var i = this;
                if (this.index > 0) {
                    this.index--
                } else {
                    if (this.settings.loop) {
                        this.index = this.pagesCount - 1
                    }
                }
                e(i)
            }, next: function () {
                var i = this;
                if (this.index < this.pagesCount) {
                    this.index++
                } else {
                    if (this.settings.loop) {
                        this.index = 0
                    }
                }
                e(i)
            }
        };
        function d(k) {
            var j = (k.pagesCount * 100) + "%", i = (100 / k.pagesCount).toFixed(2) + "%";
            k.sections.width(j);
            k.section.width(i).css("float", "left")
        }

        function h(o) {
            var n = o.selectors.page.substring(1), l = '<ul class="' + n + '">';
            o.activeClass = o.selectors.active.substring(1);
            for (var m = 0, k = o.pagesCount; m < k; m++) {
                l += "<li></li>"
            }
            l += "</ul>";
            o.element.append(l);
            var j = o.element.find(o.selectors.page);
            o.pageItem = j.find("li");
            o.pageItem.eq(o.index).addClass(o.activeClass);
            if (o.direction) {
                j.addClass("vertical")
            } else {
                j.addClass("horizontal")
            }
        }

        function f(i) {
            i.element.on("click touchstart", i.selectors.page + " li", function () {
                i.index = b(this).index();
                e(i)
            });
            i.element.on("mousewheel DOMMouseScroll", function (j) {
                if (!i.canScroll) {
                    return
                }
                var k = -j.originalEvent.detail || -j.originalEvent.deltaY || j.originalEvent.wheelDelta;
                if (k > 0 && (i.index && !i.settings.loop || i.settings.loop)) {
                    i.prve()
                } else {
                    if (k < 0 && (i.index < (i.pagesCount - 1) && !i.settings.loop || i.settings.loop)) {
                        i.next()
                    }
                }
            });
            i.element.on("touchstart", function (l) {
                var k = l.originalEvent.changedTouches[0].pageX, j = l.originalEvent.changedTouches[0].pageY;
                i.element.one("touchend", function (o) {
                    if (!i.canScroll) {
                        return
                    }
                    var n = o.originalEvent.changedTouches[0].pageX, m = o.originalEvent.changedTouches[0].pageY, p = m - j;
                    if (p > 50) {
                        i.prve()
                    } else {
                        if (p < -50) {
                            i.next()
                        }
                    }
                });
                l.preventDefault()
            });
            if (i.settings.keyboard) {
                b(window).on("keydown", function (k) {
                    var j = k.keyCode;
                    if (j === 37 || j === 38) {
                        i.prve()
                    } else {
                        if (j === 39 || j === 40) {
                            i.next()
                        }
                    }
                })
            }
            b(window).resize(function () {
                var j = i.switchLength(), k = i.settings.direction ? i.section.eq(i.index).offset().top : i.section.eq(i.index).offset().left;
                if (Math.abs(k) > j / 2 && i.index < (i.pagesCount - 1)) {
                    i.index++
                }
                if (i.index) {
                    e(i)
                }
            });
            i.sections.on("transitionend webkitTransitionEnd oTransitionEnd otransitionend", function () {
                i.canScroll = true;
                if (i.settings.callback && type(i.settings.callback) === "function") {
                    i.settings.callback()
                }
            })
        }

        function e(l) {
            var data_page_resize = $('[data-page-resize]');
            var dpr_min_width = data_page_resize.attr('dpr-min-width');
            var dpr_min_height = data_page_resize.attr('dpr-min-height');
            dpr_min_width = (dpr_min_width != undefined && dpr_min_width != false) ? parseInt(dpr_min_width, 10) : 1650;
            dpr_min_height = (dpr_min_height != undefined && dpr_min_height != false) ? parseInt(dpr_min_height, 10) : 860;
            var min_window_w = dpr_min_width;
            var min_window_h = dpr_min_height;
            var min_window_d = min_window_h / min_window_w;
            var window_w = $(window).width();
            var window_h = $(window).height();
            var window_d = window_h/window_w;
            var mobile_scale = 1;
            if(window_d < min_window_d) {
                mobile_scale = Math.min(1, window_h / min_window_h);
            }
            else
            {
                mobile_scale = Math.min(1, window_w / min_window_w);
            }

            console.log(mobile_scale);

            var i = l.section.eq(l.index).position();
            if (!i) {
                return
            }
            l.canScroll = false;
            if (a) {
                l.sections.css(a + "transition", "all " + l.settings.duration + "ms " + l.settings.easing);
                var j = l.direction ? "translateY(-" + i.top / mobile_scale + "px)" : "translateX(-" + i.left + "px)";
                l.sections.css(a + "transform", j)
            } else {
                var k = l.direction ? {top: -i.top} : {left: -i.left};
                l.sections.animate(k, l.settings.duration, function () {
                    l.canScroll = true;
                    if (l.settings.callback && type(l.settings.callback) === "function") {
                        l.settings.callback()
                    }
                })
            }
            if (l.settings.pagination) {
                l.pageItem.eq(l.index).addClass(l.activeClass).siblings("li").removeClass(l.activeClass)
            }
        }

        return g
    })()
})(jQuery);






/**
 * Copyright (c) 2009 Anders Ekdahl (http://coffeescripter.com/)
 * Dual licensed under the MIT (http://www.opensource.org/licenses/mit-license.php)
 * and GPL (http://www.opensource.org/licenses/gpl-license.php) licenses.
 *
 * Version: 1.1.1
 *
 * Demo and documentation: http://coffeescripter.com/code/ad-gallery/
 */
(function($) {
    $.fn.adGallery = function(options) {
        var defaults = { loader_image: 'loader.gif',
            start_at_index: 0,
            thumb_opacity: 0.7,
            animate_first_image: false,
            animation_speed: 400,
            width: false,
            height: false,
            display_next_and_prev: true,
            display_back_and_forward: true,
            scroll_jump: 0, // If 0, it jumps the width of the container
            animated_scroll: true,
            slideshow: {
                enable: true,
                autostart: false,
                speed: 5000,
                start_label: 'Start',
                stop_label: 'Stop',
                stop_on_scroll: true,
                countdown_prefix: '(',
                countdown_sufix: ')'
            },
            effect: 'slide-vert', // or 'slide-vert', 'fade', or 'resize', 'none', false
            enable_keyboard_move: true,
            cycle: true,
            callbacks: {
                init: false,
                afterImageVisible: false,
                beforeImageVisible: false,
                slideShowStart: false,
                slideShowStop: false
            }
        };
        var settings = $.extend(defaults, options);
        if(!settings.slideshow.enable) {
            settings.slideshow.autostart = false;
        };
        var galleries = [];
        $(this).each(function() {
            var gallery = new AdGallery(this, settings);
            galleries[galleries.length] = gallery;
        });
        // Sorry, breaking the jQuery chain because the gallery instances
        // are returned so you can fiddle with them
        return galleries;
    };

    function AdGallery(wrapper, settings) {
        this.init(wrapper, settings);
    };
    AdGallery.prototype = {
        // Elements
        wrapper: false,
        image_wrapper: false,
        gallery_info: false,
        nav: false,
        loader: false,
        preloads: false,
        thumbs_wrapper: false,
        scroll_back: false,
        scroll_forward: false,
        next_link: false,
        prev_link: false,
        start_slideshow_link: false,
        stop_slideshow_link: false,
        slideshow_countdown: false,
        slideshow_controls: false,

        slideshow_enabled: false,
        slideshow_running: false,
        slideshow_timeout: false,
        slideshow_countdown_interval: false,
        thumbs_scroll_interval: false,
        image_wrapper_width: 0,
        image_wrapper_height: 0,
        current_index: 0,
        current_image: false,
        nav_display_width: 0,
        settings: false,
        images: false,
        in_transition: false,
        init: function(wrapper, settings) {
            var context = this;
            this.wrapper = $(wrapper);
            this.settings = settings;
            this.setupElements();
            if(this.settings.width) {
                this.image_wrapper_width = this.settings.width;
                this.image_wrapper.width(this.settings.width);
                this.wrapper.width(this.settings.width);
            } else {
                this.image_wrapper_width = this.image_wrapper.width();
            };
            if(this.settings.height) {
                this.image_wrapper_height = this.settings.height;
                this.image_wrapper.height(this.settings.height);
            } else {
                this.image_wrapper_height = this.image_wrapper.height();
            };
            this.nav_display_width = this.nav.width();
            this.images = [];
            this.current_index = 0;
            this.current_image = false;
            this.in_transition = false;
            this.slideshow_enabled = false;
            this.findImages();

            if(this.settings.display_next_and_prev) {
                this.initNextAndPrev();
            };
            this.initSlideshow();
            if(!this.settings.slideshow.enable) {
                this.disableSlideshow();
            } else {
                this.enableSlideshow();
            };
            if(this.settings.display_back_and_forward) {
                this.initBackAndForward();
            };
            if(this.settings.enable_keyboard_move) {
                this.initKeyEvents();
            };
            var start_at = this.settings.start_at_index;
            if(window.location.hash && window.location.hash.indexOf('#ad-image') === 0) {
                start_at = window.location.hash.replace(/[^0-9]+/g, '');
                // Check if it's a number
                if((start_at * 1) != start_at) {
                    start_at = this.settings.start_at_index;
                };
            };

            this.loading(true);
            this.showImage(start_at,
                function() {
                    // This function gets fired when the image is visible, that is,
                    // after it has been loaded, and after some effect has made it visible
                    // We don't want to start the slideshow before the image has been
                    // displayed
                    if(context.settings.slideshow.autostart) {
                        context.preloadImage(start_at + 1);
                        context.startSlideshow();
                    };
                }
            );
            if(typeof this.settings.callbacks.init == 'function') {
                this.settings.callbacks.init.call(this);
            };
        },
        setupElements: function() {
            this.controls = this.wrapper.find('.ad-controls');
            this.gallery_info = $('<p class="ad-info"></p>');
            this.controls.append(this.gallery_info);
            this.image_wrapper = this.wrapper.find('.ad-image-wrapper');
            this.image_wrapper.empty();
            this.nav = this.wrapper.find('.ad-nav');
            this.thumbs_wrapper = this.nav.find('.ad-thumbs');
            this.preloads = $('<div class="ad-preloads"></div>');
            this.loader = $('<img class="ad-loader" src="'+ this.settings.loader_image +'">');
            this.image_wrapper.append(this.loader);
            this.loader.hide();
            $(document.body).append(this.preloads);
        },
        loading: function(bool) {
            if(bool) {
                this.loader.show();
            } else {
                this.loader.hide();
            };
        },
        findImages: function() {
            var context = this;
            var thumb_wrapper_width = 0;
            var thumbs_loaded = 0;
            var thumbs = this.thumbs_wrapper.find('a');
            var thumb_count = thumbs.length;
            if(this.settings.thumb_opacity < 1) {
                thumbs.find('img').css('opacity', this.settings.thumb_opacity);
            };
            thumbs.each(
                function(i) {
                    var link = $(this);
                    var image = link.attr('href');
                    var thumb = link.find('img');
                    // Check if the thumb has already loaded
                    if(!context.isImageLoaded(thumb[0])) {
                        thumb.load(
                            function() {
                                var width = this.parentNode.parentNode.offsetWidth;
                                thumb_wrapper_width += width;
                                thumbs_loaded++;
                            }
                        );
                    } else{
                        var width = thumb[0].parentNode.parentNode.offsetWidth;
                        thumb_wrapper_width += width;
                        thumbs_loaded++;
                    };
                    link.addClass('ad-thumb'+ i);
                    link.click(
                        function() {
                            context.showImage(i);
                            context.stopSlideshow();
                            return false;
                        }
                    ).hover(
                        function() {
                            if(!$(this).is('.ad-active') && context.settings.thumb_opacity < 1) {
                                $(this).find('img').fadeTo(300, 1);
                            };
                            context.preloadImage(i);
                        },
                        function() {
                            if(!$(this).is('.ad-active') && context.settings.thumb_opacity < 1) {
                                $(this).find('img').fadeTo(300, context.settings.thumb_opacity);
                            };
                        }
                    );
                    var desc = false;
                    if(thumb.data('ad-desc')) {
                        desc = thumb.data('ad-desc');
                    } else if(thumb.attr('longdesc').length) {
                        desc = thumb.attr('longdesc');
                    };
                    var title = false;
                    if(thumb.data('ad-title')) {
                        title = thumb.data('ad-title');
                    } else if(thumb.attr('title').length) {
                        title = thumb.attr('title');
                    };
                    context.images[i] = { thumb: thumb.attr('src'), image: image, error: false,
                        preloaded: false, desc: desc, title: title, size: false };
                }
            );
            // Wait until all thumbs are loaded, and then set the width of the ul
            var inter = setInterval(
                function() {
                    if(thumb_count == thumbs_loaded) {
                        context.nav.find('ul').css('width', thumb_wrapper_width +'px');
                        clearInterval(inter);
                    };
                },
                100
            );
        },
        initKeyEvents: function() {
            var context = this;
            $(document).keydown(
                function(e) {
                    if(e.keyCode == 39) {
                        // right arrow
                        context.nextImage();
                        context.stopSlideshow();
                    } else if(e.keyCode == 37) {
                        // left arrow
                        context.prevImage();
                        context.stopSlideshow();
                    } else if(e.keyCode == 83) {
                        // 's'
                        if(context.slideshow_running) {
                            context.stopSlideshow();
                        } else {
                            context.startSlideshow();
                        };
                    };
                }
            );
        },
        initNextAndPrev: function() {
            this.next_link = $('<div class="ad-next"><div class="ad-next-image"></div></div>');
            this.prev_link = $('<div class="ad-prev"><div class="ad-prev-image"></div></div>');
            this.image_wrapper.append(this.next_link);
            this.image_wrapper.append(this.prev_link);
            var context = this;
            this.prev_link.add(this.next_link).mouseover(
                function(e) {
                    // IE 6 hides the wrapper div, so we have to set it's width
                    $(this).css('height', context.image_wrapper_height);
                    $(this).find('div').show();
                }
            ).mouseout(
                function(e) {
                    $(this).find('div').hide();
                }
            ).click(
                function() {
                    if($(this).is('.ad-next')) {
                        context.nextImage();
                        context.stopSlideshow();
                    } else {
                        context.prevImage();
                        context.stopSlideshow();
                    };
                }
            ).find('div').css('opacity', 0.7);
        },
        initBackAndForward: function() {
            var context = this;
            this.scroll_forward = $('<div class="ad-forward"></div>');
            this.scroll_back = $('<div class="ad-back"></div>');
            this.nav.append(this.scroll_forward);
            this.nav.prepend(this.scroll_back);
            var has_scrolled = 0;
            $(this.scroll_back).add(this.scroll_forward).click(
                function() {
                    // We don't want to jump the whole width, since an image
                    // might be cut at the edge
                    var width = context.nav_display_width - 50;
                    if(context.settings.scroll_jump > 0) {
                        var width = context.settings.scroll_jump;
                    };
                    if($(this).is('.ad-forward')) {
                        var left = context.thumbs_wrapper.scrollLeft() + width;
                    } else {
                        var left = context.thumbs_wrapper.scrollLeft() - width;
                    };
                    if(context.settings.slideshow.stop_on_scroll) {
                        context.stopSlideshow();
                    };
                    if(context.settings.animated_scroll) {
                        context.thumbs_wrapper.animate({scrollLeft: left +'px'});
                    } else {
                        context.thumbs_wrapper.scrollLeft(left);
                    };
                    return false;
                }
            ).css('opacity', 0.6).hover(
                function() {
                    var direction = 'left';
                    if($(this).is('.ad-forward')) {
                        direction = 'right';
                    };
                    context.thumbs_scroll_interval = setInterval(
                        function() {
                            has_scrolled++;
                            if(has_scrolled > 30 && context.settings.slideshow.stop_on_scroll) {
                                context.stopSlideshow();
                            };
                            var left = context.thumbs_wrapper.scrollLeft() + 1;
                            if(direction == 'left') {
                                left = context.thumbs_wrapper.scrollLeft() - 1;
                            };
                            context.thumbs_wrapper.scrollLeft(left);
                        },
                        10
                    );
                    $(this).css('opacity', 1);
                },
                function() {
                    has_scrolled = 0;
                    clearInterval(context.thumbs_scroll_interval);
                    $(this).css('opacity', 0.6);
                }
            );
        },
        initSlideshow: function() {
            var context = this;
            this.start_slideshow_link = $('<span class="ad-slideshow-start">'+ this.settings.slideshow.start_label +'</span>');
            this.stop_slideshow_link = $('<span class="ad-slideshow-stop">'+ this.settings.slideshow.stop_label +'</span>');
            this.slideshow_countdown = $('<span class="ad-slideshow-countdown"></span>');
            this.slideshow_controls = $('<div class="ad-slideshow-controls"></div>');
            this.slideshow_controls.append(this.start_slideshow_link).append(this.stop_slideshow_link).append(this.slideshow_countdown);
            this.controls.append(this.slideshow_controls);
            this.slideshow_countdown.hide();

            this.start_slideshow_link.click(
                function() {
                    context.startSlideshow();
                }
            );
            this.stop_slideshow_link.click(
                function() {
                    context.stopSlideshow();
                }
            );
        },
        disableSlideshow: function() {
            this.slideshow_enabled = false;
            this.stopSlideshow();
            this.slideshow_controls.hide();
        },
        enableSlideshow: function() {
            this.slideshow_enabled = true;
            this.slideshow_controls.show();
        },
        toggleSlideshow: function() {
            if(this.slideshow_enabled) {
                this.disableSlideshow();
            } else {
                this.enableSlideshow();
            };
        },
        startSlideshow: function() {
            if(this.slideshow_running || !this.slideshow_enabled) return false;
            var context = this;
            this.slideshow_running = true;
            this.slideshow_controls.addClass('ad-slideshow-running');
            this._slideshowNext();
            if(typeof this.settings.callbacks.slideShowStart == 'function') {
                this.settings.callbacks.slideShowStart.call(this);
            };
            return true;
        },
        _slideshowNext: function() {
            var context = this;
            var pre = this.settings.slideshow.countdown_prefix;
            var su = this.settings.slideshow.countdown_sufix;
            clearInterval(context.slideshow_countdown_interval);
            this.slideshow_countdown.show().html(pre + (this.settings.slideshow.speed / 1000) + su);
            var slide_timer = 0;
            this.preloadImage(this.nextIndex(),
                function() {
                    context.slideshow_countdown_interval = setInterval(
                        function() {
                            slide_timer += 1000;
                            if(slide_timer >= context.settings.slideshow.speed) {
                                if(!context.nextImage()) {
                                    context.stopSlideshow();
                                } else {
                                    context._slideshowNext();
                                    return;
                                };
                                slide_timer = 0;
                            };
                            context.slideshow_countdown.show();
                            var sec = parseInt(context.slideshow_countdown.text().replace(/[^0-9]/g, ''), 10);
                            sec--;
                            if(sec > 0) {
                                context.slideshow_countdown.html(pre + sec + su);
                            };
                        },
                        1000
                    );
                }
            );
        },
        stopSlideshow: function() {
            if(!this.slideshow_running) return false;
            this.slideshow_running = false;
            this.slideshow_countdown.hide();
            this.slideshow_controls.removeClass('ad-slideshow-running');
            clearTimeout(this.slideshow_timeout);
            clearInterval(this.slideshow_countdown_interval);
            if(typeof this.settings.callbacks.slideShowStop == 'function') {
                this.settings.callbacks.slideShowStop.call(this);
            };
            return true;
        },
        /**
         * @param function callback Gets fired when the image has loaded and is displaying
         */
        showImage: function(index, callback) {
            if(this.images[index] && !this.in_transition) {
                var context = this;
                var image = this.images[index];
                this.in_transition = true;
                if(!image.preloaded) {
                    this.loading(true);
                    this.preloadImage(index, function() {
                        context.loading(false);
                        context._showWhenLoaded(index, callback);
                    });
                } else {
                    this._showWhenLoaded(index, callback);
                };
            };
        },
        _afterShow: function() {
            this.gallery_info.html((this.current_index + 1) +' / '+ this.images.length);
            if(!this.settings.cycle) {
                this.prev_link.show().css('height', this.image_wrapper_height);
                this.next_link.show().css('height', this.image_wrapper_height);
                if(this.current_index == (this.images.length - 1)) {
                    this.next_link.hide();
                };
                if(this.current_index == 0) {
                    this.prev_link.hide();
                };
            };
            if(typeof this.settings.callbacks.afterImageVisible == 'function') {
                this.settings.callbacks.afterImageVisible.call(this);
            };
        },
        /**
         * Checks if the image is small enough to fit inside the container
         * If it's not, shrink it proportionally
         */
        _getContainedImageSize: function(image_width, image_height) {
            if(image_height > this.image_wrapper_height) {
                var ratio = image_width / image_height;
                image_height = this.image_wrapper_height;
                image_width = this.image_wrapper_height * ratio;
            };
            if(image_width > this.image_wrapper_width) {
                var ratio = image_height / image_width;
                image_width = this.image_wrapper_width;
                image_height = this.image_wrapper_width * ratio;
            };
            return {width: image_width, height: image_height};
        },
        /**
         * If the image dimensions are smaller than the wrapper, we position
         * it in the middle anyway
         */
        _centerImage: function(img_container, image_width, image_height) {
            img_container.css('top', '0px');
            if(image_height < this.image_wrapper_height) {
                var dif = this.image_wrapper_height - image_height;
                img_container.css('top', (dif / 2) +'px');
            };
            img_container.css('left', '0px');
            if(image_width < this.image_wrapper_width) {
                var dif = this.image_wrapper_width - image_width;
                img_container.css('left', (dif / 2) +'px');
            };
        },
        _showDescription: function(image, img_container) {
            var desc = false;
            if(image.desc.length || image.title.length) {
                var title = '';
                if(image.title.length) {
                    title = '<strong class="ad-description-title">'+ image.title +'</strong>';
                };
                var desc = '';
                if(image.desc.length) {
                    desc = '<span>'+ image.desc +'</span>';
                };
                var desc = $('<p class="ad-image-description">'+ desc +'</p>');
                $('.bottom__description').html(desc);
                //img_container.append(desc);
                img_container.append('<p class="ad-image-header-title">'+ title +'</p>');
            };
            return desc;
        },
        /**
         * @param function callback Gets fired when the image has loaded and is displaying
         */
        _showWhenLoaded: function(index, callback) {
            if(this.images[index]) {
                var context = this;
                var image = this.images[index];
                var img_container = $(document.createElement('div'));
                var img = $(new Image());
                img_container.addClass('ad-image');
                img_container.append(img);
                img.attr('src', image.image);
                this.image_wrapper.prepend(img_container);
                var size = this._getContainedImageSize(image.size.width, image.size.height);
                var image_width = size.width;
                var image_height = size.height;
                img.attr('width', image_width);
                img.attr('height', image_height);
                img_container.css({width: image_width +'px', height: image_height +'px'});
                this._centerImage(img_container, image_width, image_height);
                var desc = this._showDescription(image, img_container);

                var thumb = this.nav.find('.ad-thumb'+ index);
                this.highLightThumb(thumb);

                var direction = 'right';
                if(this.current_index < index) {
                    direction = 'left';
                };
                if(typeof this.settings.callbacks.beforeImageVisible == 'function') {
                    this.settings.callbacks.beforeImageVisible.call(this, img_container, this.current_image);
                };
                var animation_speed = this.settings.animation_speed;
                if(this.current_image || this.settings.animate_first_image) {
                    var new_image_animation = {};
                    var old_image_animation = {};
                    if(this.settings.effect == 'fade') {
                        img_container.css('opacity', 0);
                        old_image_animation = {opacity: 0};
                        new_image_animation = {opacity: 1};
                    } else if(this.settings.effect == 'resize') {
                        var current_left = parseInt(img_container.css('left'), 10);
                        var current_top = parseInt(img_container.css('top'), 10);
                        img_container.css({width: 0, height: 0, top: this.image_wrapper_height / 2, left: this.image_wrapper_width / 2});
                        old_image_animation = {width: 0,
                            height: 0,
                            top: this.image_wrapper_height / 2,
                            left: this.image_wrapper_width / 2};
                        new_image_animation = {width: image_width,
                            height: image_height,
                            top: current_top,
                            left: current_left};
                    } else if(this.settings.effect == 'slide-hori') {
                        if(direction == 'left') {
                            var old_image_left = '-'+ this.image_wrapper_width +'px';
                            var new_image_left = this.image_wrapper_width +'px';
                        } else {
                            var old_image_left = this.image_wrapper_width +'px';
                            var new_image_left = '-'+ this.image_wrapper_width +'px';
                        };
                        var current_left = parseInt(img_container.css('left'), 10);
                        img_container.css('left', new_image_left);
                        old_image_animation = {left: old_image_left};
                        new_image_animation = {left: current_left};
                        if(desc) {
                            desc.css('bottom', '-'+ desc[0].offsetHeight +'px');
                            desc.animate({bottom: 0}, this.settings.animation_speed * 2);
                        };
                    } else if(this.settings.effect == 'slide-vert') {
                        if(direction == 'left') {
                            var old_image_top = '-'+ this.image_wrapper_height +'px';
                            var new_image_top = this.image_wrapper_height +'px';
                        } else {
                            var old_image_top = this.image_wrapper_height +'px';
                            var new_image_top = '-'+ this.image_wrapper_height +'px';
                        };
                        var current_top = parseInt(img_container.css('top'), 10);
                        img_container.css('top', new_image_top);
                        old_image_animation = {top: old_image_top};
                        new_image_animation = {top: current_top};
                        if(desc) {
                            desc.css('bottom', '-'+ desc[0].offsetHeight +'px');
                            desc.animate({bottom: 0}, this.settings.animation_speed * 2);
                        };
                    } else if(!this.settings.effect || this.settings.effect == 'none') {
                        old_image_animation = {opacity: 1};
                        new_image_animation = {opacity: 1};
                        animation_speed = 0;
                    };
                    if(this.current_image) {
                        var old_image = this.current_image;
                        old_image.animate(old_image_animation, animation_speed,
                            function() {
                                old_image.remove();
                            }
                        );
                    };
                    img_container.animate(new_image_animation, animation_speed,
                        function() {
                            context.current_index = index;
                            context.current_image = img_container;
                            context.in_transition = false;
                            context._afterShow();
                        }
                    );
                } else {
                    this.current_index = index;
                    this.current_image = img_container;
                    this.in_transition = false;
                    context._afterShow();
                };
                if(typeof callback == 'function') {
                    callback.call(this);
                };
            };
        },
        nextIndex: function() {
            if(this.current_index == (this.images.length - 1)) {
                if(!this.settings.cycle) {
                    return false;
                };
                var next = 0;
            } else {
                var next = this.current_index + 1;
            };
            return next;
        },
        nextImage: function(callback) {
            var next = this.nextIndex();
            if(next === false) return false;
            this.preloadImage(next + 1);
            this.showImage(next, callback);
            return true;
        },
        prevIndex: function() {
            if(this.current_index == 0) {
                if(!this.settings.cycle) {
                    return false;
                };
                var prev = this.images.length - 1;
            } else {
                var prev = this.current_index - 1;
            };
            return prev;
        },
        prevImage: function(callback) {
            var prev = this.prevIndex();
            if(prev === false) return false;
            this.preloadImage(prev - 1);
            this.showImage(prev, callback);
            return true;
        },
        preloadAll: function() {
            var context = this;
            var i = 0;
            function preloadNext() {
                if(i < context.images.length) {
                    i++;
                    context.preloadImage(i, preloadNext);
                };
            };
            context.preloadImage(i, preloadNext);
        },
        preloadImage: function(index, callback) {
            if(this.images[index]) {
                var image = this.images[index];
                if(!this.images[index].preloaded) {
                    var img = $(new Image());
                    img.attr('src', image.image);
                    if(!this.isImageLoaded(img[0])) {
                        this.preloads.append(img);
                        var context = this;
                        image.is_preloading = true;
                        img.load(
                            function() {
                                image.preloaded = true;
                                image.is_preloading = false;
                                image.size = { width: this.width, height: this.height };
                                if(typeof callback == 'function') {
                                    callback.call(this);
                                };
                            }
                        ).error(
                            function() {
                                image.error = true;
                                image.preloaded = false;
                                image.is_preloading = false;
                                image.size = false;
                            }
                        );
                    } else {
                        image.preloaded = true;
                        image.is_preloading = false;
                        image.size = { width: img[0].width, height: img[0].height };
                        if(typeof callback == 'function') {
                            callback.call(this);
                        };
                    };
                } else {
                    if(typeof callback == 'function') {
                        callback.call(this);
                    };
                };
            };
        },
        isImageLoaded: function(img) {
            if(typeof img.complete != 'undefined' && !img.complete) {
                return false;
            };
            if(typeof img.naturalWidth != 'undefined' && img.naturalWidth == 0) {
                return false;
            };
            return true;
        },
        highLightThumb: function(thumb) {
            this.thumbs_wrapper.find('.ad-active').removeClass('ad-active');
            thumb.addClass('ad-active');
            if(this.settings.thumb_opacity < 1) {
                this.thumbs_wrapper.find('a:not(.ad-active) img').fadeTo(300, this.settings.thumb_opacity);
                thumb.find('img').fadeTo(300, 1);
            };
            var left = thumb[0].parentNode.offsetLeft;
            left -= (this.nav_display_width / 2) - (thumb[0].offsetWidth / 2);
            if(this.settings.animated_scroll) {
                this.thumbs_wrapper.animate({scrollLeft: left +'px'});
            } else {
                this.thumbs_wrapper.scrollLeft(left);
            };
        }
    };
})(jQuery);



/*! seethru 3.0.1 24-09-2016 see https://github.com/m90/seeThru for details */
!function(a,b){"function"==typeof define&&define.amd?define(b):"object"==typeof exports?module.exports=b():a.seeThru=b()}(this,function(){function a(a,b){var c,d=document.createElement("canvas"),e=d.getContext("2d");d.width=b.width,d.height=b.height,e.drawImage(a,0,0,b.width,b.height),c=e.getImageData(0,0,b.width,b.height);for(var f=3,g=c.data.length;g>f;f+=4)c.data[f-1]=c.data[f-2]=c.data[f-3]=c.data[f],c.data[f]=255;return c}function b(a,b){for(var c=3,d=a.data.length;d>c;c+=4)a.data[c]=b[c-1],a.data[c-3]=a.data[c-3]/(b[c-1]?b[c-1]/255:1),a.data[c-2]=a.data[c-2]/(b[c-1]?b[c-1]/255:1),a.data[c-1]=a.data[c-1]/(b[c-1]?b[c-1]/255:1);return a}function c(){for(var a=0,b=["ms","moz","webkit","o"],c=0;c<b.length;c++)if(window[b[c]+"RequestAnimationFrame"])return window[b[c]+"RequestAnimationFrame"];return function(b){var c=(new Date).getTime(),d=Math.max(0,16-(c-a)),e=window.setTimeout(function(){b(c+d)},d);return a=c+d,e}}function d(){for(var a=["ms","moz","webkit","o"],b=0;b<a.length;b++){if(window[a[b]+"CancelAnimationFrame"])return window[a[b]+"CancelAnimationFrame"];if(window[a[b]+"CancelRequestAnimationFrame"])return window[a[b]+"CancelRequestAnimationFrame"]}return function(a){clearTimeout(a)}}function e(a){return[].slice.call(a)}function f(a){return Object.prototype.toString.call(a)}function g(a,b){b.nextSibling?b.parentNode.insertBefore(a,b.nextSibling):b.parentNode.appendChild(a)}function h(a){return a.tagName?a:"[object String]"===f(a)?document.querySelector(a):a.length?a[0]:null}function i(a){var b=[];for(var c in a)a.hasOwnProperty(c)&&b.push(c+": "+a[c]+";");return b.join("")}function j(a){a.fn&&!a.fn.seeThru&&(a.fn.seeThru=function(){var b=e(arguments);return this.each(function(){var c=a(this);if(!b.length||1===b.length&&"[object Object]"===f(b[0])){if(c.data("seeThru"))return;c.data("seeThru",new m(this,b[0])._init())}else if(b.length&&"[object String]"===f(b[0])){if(!c.data("seeThru"))return;c.data("seeThru").ready(function(){c.data("seeThru")[b[0]](b[1]),"revert"===b[0]&&c.data("seeThru",null)})}})})}function k(){var a=[];this.push=function(b){return b?(a.push(b),b):null},this.has=function(b){return a.some(function(a){return a===b})},this.remove=function(b){a=a.filter(function(a){return a!==b})}}function l(e,f){var j,k,l,m=f.mask?1:2,n={width:parseInt(f.width,10),height:parseInt(f.height,10)},o=document.createElement("canvas"),p=o.getContext("2d"),q=document.createElement("canvas"),r=q.getContext("2d"),s=window.requestAnimationFrame||c(),t=window.cancelAnimationFrame||d(),u=function(a){var c,d,g,h;for(p.drawImage(e,0,0,n.width,n.height*m),c=p.getImageData(0,0,n.width,n.height),d=p.getImageData(0,n.height,n.width,n.height).data,f.unmult&&b(c,d),g=3,h=c.data.length;h>g;g+=4)c.data[g]=f.alphaMask?d[g-1]:Math.max(d[g-1],d[g-2],d[g-3]);r.putImageData(c,0,0,0,0,n.width,n.height),a&&(l=s(function(){u(!0)}))},v=function(b){if("IMG"!==b.tagName)throw new Error("Cannot use non-image element as mask!");b.width=n.width,b.height=n.height,f.alphaMask?p.putImageData(a(b,n),0,n.height):p.drawImage(b,0,n.height,n.width,n.height),b.style.display="none"};this.startRendering=function(){return u(!0),this},this.stopRendering=function(){return t(l),this},this.teardown=function(){return t(l),e.parentNode.removeChild(e.nextSibling),e.parentNode.removeChild(e.nextSibling),e.style.display=j,this},this.updateMask=function(a){return v(a),this},this.getCanvas=function(){return q},this.getPoster=function(){return k};var w=e.getBoundingClientRect();n.height&&n.width||(e.width||e.height?e.height?e.width?(n.width=n.width||w.width,n.height=n.height||w.height/m):(n.width=n.width||w.height*(e.videoWidth/Math.floor(e.videoHeight/m)),n.height=n.height||w.height):(n.width=n.width||w.width,n.height=n.height||w.width/(e.videoWidth/Math.floor(e.videoHeight/m))):(n.width=n.width||e.videoWidth,n.height=n.height||e.videoHeight/m)),o.width=n.width,o.height=2*n.height,o.style.display="none",o.className="seeThru-buffer",q.width=n.width,q.height=n.height,q.className="seeThru-display",g(o,e),g(q,e),f.mask&&v(h(f.mask)),f.poster&&e.poster&&(k=document.createElement("div"),k.className="seeThru-poster",k.style.cssText=i({width:n.width+"px",height:n.height+"px",position:"absolute",top:0,left:0,backgroundSize:"cover",backgroundPosition:"center",backgroundImage:'url("'+e.poster+'")'}),g(k,e)),j=window.getComputedStyle(e).display,e.style.display="none","autoplay"===f.start&&e.play()}function m(a,b){var c=this,d=!1,e=[],f={start:"autoplay",end:"loop",mask:!1,alphaMask:!1,width:null,height:null,poster:!1,unmult:!1},g=function(){try{return new Event("submit",{bubbles:!1}).bubbles!==!1?!1:new Event("submit",{bubbles:!0}).bubbles!==!0?!1:!0}catch(a){return!1}}(),i=["mouseenter","mouseleave","click","mousedown","mouseup","mousemove","mouseover","hover","dblclick","contextmenu","focus","blur"];if(b=b||{},this._video=h(a),!this._video||"VIDEO"!==this._video.tagName)throw new Error("Could not use specified source");this._options=function(a){for(var b in f)f.hasOwnProperty(b)&&(b in a||(a[b]=f[b]));return a}(b),this._init=function(){var a=function(){function a(){c._video.play(),c._options.poster?c._seeThru.getPoster().removeEventListener("click",a):c._seeThru.getCanvas().removeEventListener("click",a)}if(n.has(this._video))throw new Error("seeThru already initialized on passed video element!");this._seeThru=new l(this._video,this._options),"clicktoplay"===this._options.start?this._options.poster?this._seeThru.getPoster().addEventListener("click",a):this._seeThru.getCanvas().addEventListener("click",a):"autoplay"===this._options.start&&b.poster&&(this._seeThru.getPoster().style.display="none"),"rewind"===this._options.end?this._video.addEventListener("ended",function(){c._video.currentTime=0,c._seeThru.getCanvas().addEventListener("click",a)}):"stop"!==this._options.end&&this._video.addEventListener("ended",function(){c._video.currentTime=0,c._video.play()}),this._options.poster&&this._video.poster&&(this._video.addEventListener("play",function(){c._seeThru.getPoster().style.display="none"}),this._video.addEventListener("pause",function(){c._seeThru.getPoster().style.display="block"})),i.forEach(function(a){c._seeThru.getCanvas().addEventListener(a,function(){var b;g?b=new Event(a):(b=document.createEvent("Event"),b.initEvent(a,!0,!0)),c._video.dispatchEvent(b)})}),this._seeThru.startRendering(),d=!0,n.push(this._video),e.forEach(function(a){a(c,c._video,c.getCanvas())})}.bind(this);return this._video.readyState>0?a():this._video.addEventListener("loadedmetadata",function(){a()}),this},this.getCanvas=function(){return this._seeThru.getCanvas()},this.play=function(){return this._video.play(),this},this.pause=function(){return this._video.pause(),this},this.revert=function(){this._seeThru.teardown(),n.remove(this._video)},this.updateMask=function(a){return this._seeThru.updateMask(h(a)),this},this.ready=function(a){return d?setTimeout(function(){a(c,c._video,c.getCanvas())},0):e.push(a),this}}window.jQuery&&j(window.jQuery);var n=new k;return{create:function(a,b){return new m(a,b)._init()},attach:j}});



/*!
 * Copyright 2012, Chris Wanstrath
 * Released under the MIT License
 * https://github.com/defunkt/jquery-pjax
 */

(function($){

// When called on a container with a selector, fetches the href with
// ajax into the container or with the data-pjax attribute on the link
// itself.
//
// Tries to make sure the back button and ctrl+click work the way
// you'd expect.
//
// Exported as $.fn.pjax
//
// Accepts a jQuery ajax options object that may include these
// pjax specific options:
//
//
// container - Where to stick the response body. Usually a String selector.
//             $(container).html(xhr.responseBody)
//             (default: current jquery context)
//      push - Whether to pushState the URL. Defaults to true (of course).
//   replace - Want to use replaceState instead? That's cool.
//
// For convenience the second parameter can be either the container or
// the options object.
//
// Returns the jQuery object
    function fnPjax(selector, container, options) {
        var context = this
        return this.on('click.pjax', selector, function(event) {
            var opts = $.extend({}, optionsFor(container, options))
            if (!opts.container)
                opts.container = $(this).attr('data-pjax') || context
            handleClick(event, opts)
        })
    }

// Public: pjax on click handler
//
// Exported as $.pjax.click.
//
// event   - "click" jQuery.Event
// options - pjax options
//
// Examples
//
//   $(document).on('click', 'a', $.pjax.click)
//   // is the same as
//   $(document).pjax('a')
//
//  $(document).on('click', 'a', function(event) {
//    var container = $(this).closest('[data-pjax-container]')
//    $.pjax.click(event, container)
//  })
//
// Returns nothing.
    function handleClick(event, container, options) {
        options = optionsFor(container, options)

        var link = event.currentTarget

        if (link.tagName.toUpperCase() !== 'A')
            throw "$.fn.pjax or $.pjax.click requires an anchor element"

        // Middle click, cmd click, and ctrl click should open
        // links in a new tab as normal.
        if ( event.which > 1 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey )
            return

        // Ignore cross origin links
        if ( location.protocol !== link.protocol || location.hostname !== link.hostname )
            return

        // Ignore case when a hash is being tacked on the current URL
        if ( link.href.indexOf('#') > -1 && stripHash(link) == stripHash(location) )
            return

        // Ignore event with default prevented
        if (event.isDefaultPrevented())
            return

        var defaults = {
            url: link.href,
            container: $(link).attr('data-pjax'),
            target: link
        }

        var opts = $.extend({}, defaults, options)
        var clickEvent = $.Event('pjax:click')
        $(link).trigger(clickEvent, [opts])

        if (!clickEvent.isDefaultPrevented()) {
            pjax(opts)
            event.preventDefault()
            $(link).trigger('pjax:clicked', [opts])
        }
    }

// Public: pjax on form submit handler
//
// Exported as $.pjax.submit
//
// event   - "click" jQuery.Event
// options - pjax options
//
// Examples
//
//  $(document).on('submit', 'form', function(event) {
//    var container = $(this).closest('[data-pjax-container]')
//    $.pjax.submit(event, container)
//  })
//
// Returns nothing.
    function handleSubmit(event, container, options) {
        options = optionsFor(container, options)

        var form = event.currentTarget
        var $form = $(form)

        if (form.tagName.toUpperCase() !== 'FORM')
            throw "$.pjax.submit requires a form element"

        var defaults = {
            type: ($form.attr('method') || 'GET').toUpperCase(),
            url: $form.attr('action'),
            container: $form.attr('data-pjax'),
            target: form
        }

        if (defaults.type !== 'GET' && window.FormData !== undefined) {
            defaults.data = new FormData(form);
            defaults.processData = false;
            defaults.contentType = false;
        } else {
            // Can't handle file uploads, exit
            if ($(form).find(':file').length) {
                return;
            }

            // Fallback to manually serializing the fields
            defaults.data = $(form).serializeArray();
        }

        pjax($.extend({}, defaults, options))

        event.preventDefault()
    }

// Loads a URL with ajax, puts the response body inside a container,
// then pushState()'s the loaded URL.
//
// Works just like $.ajax in that it accepts a jQuery ajax
// settings object (with keys like url, type, data, etc).
//
// Accepts these extra keys:
//
// container - Where to stick the response body.
//             $(container).html(xhr.responseBody)
//      push - Whether to pushState the URL. Defaults to true (of course).
//   replace - Want to use replaceState instead? That's cool.
//
// Use it just like $.ajax:
//
//   var xhr = $.pjax({ url: this.href, container: '#main' })
//   console.log( xhr.readyState )
//
// Returns whatever $.ajax returns.
    function pjax(options) {
        options = $.extend(true, {}, $.ajaxSettings, pjax.defaults, options)

        if ($.isFunction(options.url)) {
            options.url = options.url()
        }

        var target = options.target

        var hash = parseURL(options.url).hash

        var context = options.context = findContainerFor(options.container)

        // We want the browser to maintain two separate internal caches: one
        // for pjax'd partial page loads and one for normal page loads.
        // Without adding this secret parameter, some browsers will often
        // confuse the two.
        if (!options.data) options.data = {}
        if ($.isArray(options.data)) {
            options.data.push({name: '_pjax', value: context.selector})
        } else {
            options.data._pjax = context.selector
        }

        function fire(type, args, props) {
            if (!props) props = {}
            props.relatedTarget = target
            var event = $.Event(type, props)
            context.trigger(event, args)
            return !event.isDefaultPrevented()
        }

        var timeoutTimer

        options.beforeSend = function(xhr, settings) {
            // No timeout for non-GET requests
            // Its not safe to request the resource again with a fallback method.
            if (settings.type !== 'GET') {
                settings.timeout = 0
            }

            xhr.setRequestHeader('X-PJAX', 'true')
            xhr.setRequestHeader('X-PJAX-Container', context.selector)

            if (!fire('pjax:beforeSend', [xhr, settings]))
                return false

            if (settings.timeout > 0) {
                timeoutTimer = setTimeout(function() {
                    if (fire('pjax:timeout', [xhr, options]))
                        xhr.abort('timeout')
                }, settings.timeout)

                // Clear timeout setting so jquerys internal timeout isn't invoked
                settings.timeout = 0
            }

            var url = parseURL(settings.url)
            if (hash) url.hash = hash
            options.requestUrl = stripInternalParams(url)
        }

        options.complete = function(xhr, textStatus) {
            if (timeoutTimer)
                clearTimeout(timeoutTimer)

            fire('pjax:complete', [xhr, textStatus, options])

            fire('pjax:end', [xhr, options])
        }

        options.error = function(xhr, textStatus, errorThrown) {
            var container = extractContainer("", xhr, options)

            var allowed = fire('pjax:error', [xhr, textStatus, errorThrown, options])
            if (options.type == 'GET' && textStatus !== 'abort' && allowed) {
                locationReplace(container.url)
            }
        }

        options.success = function(data, status, xhr) {
            var previousState = pjax.state;

            // If $.pjax.defaults.version is a function, invoke it first.
            // Otherwise it can be a static string.
            var currentVersion = (typeof $.pjax.defaults.version === 'function') ?
                $.pjax.defaults.version() :
                $.pjax.defaults.version

            var latestVersion = xhr.getResponseHeader('X-PJAX-Version')

            var container = extractContainer(data, xhr, options)

            var url = parseURL(container.url)
            if (hash) {
                url.hash = hash
                container.url = url.href
            }

            // If there is a layout version mismatch, hard load the new url
            if (currentVersion && latestVersion && currentVersion !== latestVersion) {
                locationReplace(container.url)
                return
            }

            // If the new response is missing a body, hard load the page
            if (!container.contents) {
                locationReplace(container.url)
                return
            }

            pjax.state = {
                id: options.id || uniqueId(),
                url: container.url,
                title: container.title,
                container: context.selector,
                fragment: options.fragment,
                timeout: options.timeout
            }

            if (options.push || options.replace) {
                window.history.replaceState(pjax.state, container.title, container.url)
            }

            // Only blur the focus if the focused element is within the container.
            var blurFocus = $.contains(options.container, document.activeElement)

            // Clear out any focused controls before inserting new page contents.
            if (blurFocus) {
                try {
                    document.activeElement.blur()
                } catch (e) { }
            }

            if (container.title) document.title = container.title

            fire('pjax:beforeReplace', [container.contents, options], {
                state: pjax.state,
                previousState: previousState
            })
            context.html(container.contents)

            // FF bug: Won't autofocus fields that are inserted via JS.
            // This behavior is incorrect. So if theres no current focus, autofocus
            // the last field.
            //
            // http://www.w3.org/html/wg/drafts/html/master/forms.html
            var autofocusEl = context.find('input[autofocus], textarea[autofocus]').last()[0]
            if (autofocusEl && document.activeElement !== autofocusEl) {
                autofocusEl.focus();
            }

            executeScriptTags(container.scripts)

            var scrollTo = options.scrollTo

            // Ensure browser scrolls to the element referenced by the URL anchor
            if (hash) {
                var name = decodeURIComponent(hash.slice(1))
                var target = document.getElementById(name) || document.getElementsByName(name)[0]
                if (target) scrollTo = $(target).offset().top
            }

            if (typeof scrollTo == 'number') $(window).scrollTop(scrollTo)

            fire('pjax:success', [data, status, xhr, options])
        }


        // Initialize pjax.state for the initial page load. Assume we're
        // using the container and options of the link we're loading for the
        // back button to the initial page. This ensures good back button
        // behavior.
        if (!pjax.state) {
            pjax.state = {
                id: uniqueId(),
                url: window.location.href,
                title: document.title,
                container: context.selector,
                fragment: options.fragment,
                timeout: options.timeout
            }
            window.history.replaceState(pjax.state, document.title)
        }

        // Cancel the current request if we're already pjaxing
        abortXHR(pjax.xhr)

        pjax.options = options
        var xhr = pjax.xhr = $.ajax(options)

        if (xhr.readyState > 0) {
            if (options.push && !options.replace) {
                // Cache current container element before replacing it
                cachePush(pjax.state.id, cloneContents(context))

                window.history.pushState(null, "", options.requestUrl)
            }

            fire('pjax:start', [xhr, options])
            fire('pjax:send', [xhr, options])
        }

        return pjax.xhr
    }

// Public: Reload current page with pjax.
//
// Returns whatever $.pjax returns.
    function pjaxReload(container, options) {
        var defaults = {
            url: window.location.href,
            push: false,
            replace: true,
            scrollTo: false
        }

        return pjax($.extend(defaults, optionsFor(container, options)))
    }

// Internal: Hard replace current state with url.
//
// Work for around WebKit
//   https://bugs.webkit.org/show_bug.cgi?id=93506
//
// Returns nothing.
    function locationReplace(url) {
        window.history.replaceState(null, "", pjax.state.url)
        window.location.replace(url)
    }


    var initialPop = true
    var initialURL = window.location.href
    var initialState = window.history.state

// Initialize $.pjax.state if possible
// Happens when reloading a page and coming forward from a different
// session history.
    if (initialState && initialState.container) {
        pjax.state = initialState
    }

// Non-webkit browsers don't fire an initial popstate event
    if ('state' in window.history) {
        initialPop = false
    }

// popstate handler takes care of the back and forward buttons
//
// You probably shouldn't use pjax on pages with other pushState
// stuff yet.
    function onPjaxPopstate(event) {

        // Hitting back or forward should override any pending PJAX request.
        if (!initialPop) {
            abortXHR(pjax.xhr)
        }

        var previousState = pjax.state
        var state = event.state
        var direction

        if (state && state.container) {
            // When coming forward from a separate history session, will get an
            // initial pop with a state we are already at. Skip reloading the current
            // page.
            if (initialPop && initialURL == state.url) return

            if (previousState) {
                // If popping back to the same state, just skip.
                // Could be clicking back from hashchange rather than a pushState.
                if (previousState.id === state.id) return

                // Since state IDs always increase, we can deduce the navigation direction
                direction = previousState.id < state.id ? 'forward' : 'back'
            }

            var cache = cacheMapping[state.id] || []
            var container = $(cache[0] || state.container), contents = cache[1]

            if (container.length) {
                if (previousState) {
                    // Cache current container before replacement and inform the
                    // cache which direction the history shifted.
                    cachePop(direction, previousState.id, cloneContents(container))
                }

                var popstateEvent = $.Event('pjax:popstate', {
                    state: state,
                    direction: direction
                })
                container.trigger(popstateEvent)

                var options = {
                    id: state.id,
                    url: state.url,
                    container: container,
                    push: false,
                    fragment: state.fragment,
                    timeout: state.timeout,
                    scrollTo: false
                }

                if (contents) {
                    container.trigger('pjax:start', [null, options])

                    pjax.state = state
                    if (state.title) document.title = state.title
                    var beforeReplaceEvent = $.Event('pjax:beforeReplace', {
                        state: state,
                        previousState: previousState
                    })
                    container.trigger(beforeReplaceEvent, [contents, options])
                    container.html(contents)

                    container.trigger('pjax:end', [null, options])
                } else {
                    pjax(options)
                }

                // Force reflow/relayout before the browser tries to restore the
                // scroll position.
                container[0].offsetHeight
            } else {
                locationReplace(location.href)
            }
        }
        initialPop = false
    }

// Fallback version of main pjax function for browsers that don't
// support pushState.
//
// Returns nothing since it retriggers a hard form submission.
    function fallbackPjax(options) {
        var url = $.isFunction(options.url) ? options.url() : options.url,
            method = options.type ? options.type.toUpperCase() : 'GET'

        var form = $('<form>', {
            method: method === 'GET' ? 'GET' : 'POST',
            action: url,
            style: 'display:none'
        })

        if (method !== 'GET' && method !== 'POST') {
            form.append($('<input>', {
                type: 'hidden',
                name: '_method',
                value: method.toLowerCase()
            }))
        }

        var data = options.data
        if (typeof data === 'string') {
            $.each(data.split('&'), function(index, value) {
                var pair = value.split('=')
                form.append($('<input>', {type: 'hidden', name: pair[0], value: pair[1]}))
            })
        } else if ($.isArray(data)) {
            $.each(data, function(index, value) {
                form.append($('<input>', {type: 'hidden', name: value.name, value: value.value}))
            })
        } else if (typeof data === 'object') {
            var key
            for (key in data)
                form.append($('<input>', {type: 'hidden', name: key, value: data[key]}))
        }

        $(document.body).append(form)
        form.submit()
    }

// Internal: Abort an XmlHttpRequest if it hasn't been completed,
// also removing its event handlers.
    function abortXHR(xhr) {
        if ( xhr && xhr.readyState < 4) {
            xhr.onreadystatechange = $.noop
            xhr.abort()
        }
    }

// Internal: Generate unique id for state object.
//
// Use a timestamp instead of a counter since ids should still be
// unique across page loads.
//
// Returns Number.
    function uniqueId() {
        return (new Date).getTime()
    }

    function cloneContents(container) {
        var cloned = container.clone()
        // Unmark script tags as already being eval'd so they can get executed again
        // when restored from cache. HAXX: Uses jQuery internal method.
        cloned.find('script').each(function(){
            if (!this.src) jQuery._data(this, 'globalEval', false)
        })
        return [container.selector, cloned.contents()]
    }

// Internal: Strip internal query params from parsed URL.
//
// Returns sanitized url.href String.
    function stripInternalParams(url) {
        url.search = url.search.replace(/([?&])(_pjax|_)=[^&]*/g, '')
        return url.href.replace(/\?($|#)/, '$1')
    }

// Internal: Parse URL components and returns a Locationish object.
//
// url - String URL
//
// Returns HTMLAnchorElement that acts like Location.
    function parseURL(url) {
        var a = document.createElement('a')
        a.href = url
        return a
    }

// Internal: Return the `href` component of given URL object with the hash
// portion removed.
//
// location - Location or HTMLAnchorElement
//
// Returns String
    function stripHash(location) {
        return location.href.replace(/#.*/, '')
    }

// Internal: Build options Object for arguments.
//
// For convenience the first parameter can be either the container or
// the options object.
//
// Examples
//
//   optionsFor('#container')
//   // => {container: '#container'}
//
//   optionsFor('#container', {push: true})
//   // => {container: '#container', push: true}
//
//   optionsFor({container: '#container', push: true})
//   // => {container: '#container', push: true}
//
// Returns options Object.
    function optionsFor(container, options) {
        // Both container and options
        if ( container && options )
            options.container = container

        // First argument is options Object
        else if ( $.isPlainObject(container) )
            options = container

        // Only container
        else
            options = {container: container}

        // Find and validate container
        if (options.container)
            options.container = findContainerFor(options.container)

        return options
    }

// Internal: Find container element for a variety of inputs.
//
// Because we can't persist elements using the history API, we must be
// able to find a String selector that will consistently find the Element.
//
// container - A selector String, jQuery object, or DOM Element.
//
// Returns a jQuery object whose context is `document` and has a selector.
    function findContainerFor(container) {
        container = $(container)

        if ( !container.length ) {
            throw "no pjax container for " + container.selector
        } else if ( container.selector !== '' && container.context === document ) {
            return container
        } else if ( container.attr('id') ) {
            return $('#' + container.attr('id'))
        } else {
            throw "cant get selector for pjax container!"
        }
    }

// Internal: Filter and find all elements matching the selector.
//
// Where $.fn.find only matches descendants, findAll will test all the
// top level elements in the jQuery object as well.
//
// elems    - jQuery object of Elements
// selector - String selector to match
//
// Returns a jQuery object.
    function findAll(elems, selector) {
        return elems.filter(selector).add(elems.find(selector));
    }

    function parseHTML(html) {
        return $.parseHTML(html, document, true)
    }

// Internal: Extracts container and metadata from response.
//
// 1. Extracts X-PJAX-URL header if set
// 2. Extracts inline <title> tags
// 3. Builds response Element and extracts fragment if set
//
// data    - String response data
// xhr     - XHR response
// options - pjax options Object
//
// Returns an Object with url, title, and contents keys.
    function extractContainer(data, xhr, options) {
        var obj = {}, fullDocument = /<html/i.test(data)

        // Prefer X-PJAX-URL header if it was set, otherwise fallback to
        // using the original requested url.
        var serverUrl = xhr.getResponseHeader('X-PJAX-URL')
        obj.url = serverUrl ? stripInternalParams(parseURL(serverUrl)) : options.requestUrl

        // Attempt to parse response html into elements
        if (fullDocument) {
            var $head = $(parseHTML(data.match(/<head[^>]*>([\s\S.]*)<\/head>/i)[0]))
            var $body = $(parseHTML(data.match(/<body[^>]*>([\s\S.]*)<\/body>/i)[0]))
        } else {
            var $head = $body = $(parseHTML(data))
        }

        // If response data is empty, return fast
        if ($body.length === 0)
            return obj

        // If there's a <title> tag in the header, use it as
        // the page's title.
        obj.title = findAll($head, 'title').last().text()

        if (options.fragment) {
            // If they specified a fragment, look for it in the response
            // and pull it out.
            if (options.fragment === 'body') {
                var $fragment = $body
            } else {
                var $fragment = findAll($body, options.fragment).first()
            }

            if ($fragment.length) {
                obj.contents = options.fragment === 'body' ? $fragment : $fragment.contents()

                // If there's no title, look for data-title and title attributes
                // on the fragment
                if (!obj.title)
                    obj.title = $fragment.attr('title') || $fragment.data('title')
            }

        } else if (!fullDocument) {
            obj.contents = $body
        }

        // Clean up any <title> tags
        if (obj.contents) {
            // Remove any parent title elements
            obj.contents = obj.contents.not(function() { return $(this).is('title') })

            // Then scrub any titles from their descendants
            obj.contents.find('title').remove()

            // Gather all script[src] elements
            obj.scripts = findAll(obj.contents, 'script[src]').remove()
            obj.contents = obj.contents.not(obj.scripts)
        }

        // Trim any whitespace off the title
        if (obj.title) obj.title = $.trim(obj.title)

        return obj
    }

// Load an execute scripts using standard script request.
//
// Avoids jQuery's traditional $.getScript which does a XHR request and
// globalEval.
//
// scripts - jQuery object of script Elements
//
// Returns nothing.
    function executeScriptTags(scripts) {
        if (!scripts) return

        var existingScripts = $('script[src]')

        scripts.each(function() {
            var src = this.src
            var matchedScripts = existingScripts.filter(function() {
                return this.src === src
            })
            if (matchedScripts.length) return

            var script = document.createElement('script')
            var type = $(this).attr('type')
            if (type) script.type = type
            script.src = $(this).attr('src')
            document.head.appendChild(script)
        })
    }

// Internal: History DOM caching class.
    var cacheMapping      = {}
    var cacheForwardStack = []
    var cacheBackStack    = []

// Push previous state id and container contents into the history
// cache. Should be called in conjunction with `pushState` to save the
// previous container contents.
//
// id    - State ID Number
// value - DOM Element to cache
//
// Returns nothing.
    function cachePush(id, value) {
        cacheMapping[id] = value
        cacheBackStack.push(id)

        // Remove all entries in forward history stack after pushing a new page.
        trimCacheStack(cacheForwardStack, 0)

        // Trim back history stack to max cache length.
        trimCacheStack(cacheBackStack, pjax.defaults.maxCacheLength)
    }

// Shifts cache from directional history cache. Should be
// called on `popstate` with the previous state id and container
// contents.
//
// direction - "forward" or "back" String
// id        - State ID Number
// value     - DOM Element to cache
//
// Returns nothing.
    function cachePop(direction, id, value) {
        var pushStack, popStack
        cacheMapping[id] = value

        if (direction === 'forward') {
            pushStack = cacheBackStack
            popStack  = cacheForwardStack
        } else {
            pushStack = cacheForwardStack
            popStack  = cacheBackStack
        }

        pushStack.push(id)
        if (id = popStack.pop())
            delete cacheMapping[id]

        // Trim whichever stack we just pushed to to max cache length.
        trimCacheStack(pushStack, pjax.defaults.maxCacheLength)
    }

// Trim a cache stack (either cacheBackStack or cacheForwardStack) to be no
// longer than the specified length, deleting cached DOM elements as necessary.
//
// stack  - Array of state IDs
// length - Maximum length to trim to
//
// Returns nothing.
    function trimCacheStack(stack, length) {
        while (stack.length > length)
            delete cacheMapping[stack.shift()]
    }

// Public: Find version identifier for the initial page load.
//
// Returns String version or undefined.
    function findVersion() {
        return $('meta').filter(function() {
            var name = $(this).attr('http-equiv')
            return name && name.toUpperCase() === 'X-PJAX-VERSION'
        }).attr('content')
    }

// Install pjax functions on $.pjax to enable pushState behavior.
//
// Does nothing if already enabled.
//
// Examples
//
//     $.pjax.enable()
//
// Returns nothing.
    function enable() {
        $.fn.pjax = fnPjax
        $.pjax = pjax
        $.pjax.enable = $.noop
        $.pjax.disable = disable
        $.pjax.click = handleClick
        $.pjax.submit = handleSubmit
        $.pjax.reload = pjaxReload
        $.pjax.defaults = {
            timeout: 650,
            push: true,
            replace: false,
            type: 'GET',
            dataType: 'html',
            scrollTo: 0,
            maxCacheLength: 20,
            version: findVersion
        }
        $(window).on('popstate.pjax', onPjaxPopstate)
    }

// Disable pushState behavior.
//
// This is the case when a browser doesn't support pushState. It is
// sometimes useful to disable pushState for debugging on a modern
// browser.
//
// Examples
//
//     $.pjax.disable()
//
// Returns nothing.
    function disable() {
        $.fn.pjax = function() { return this }
        $.pjax = fallbackPjax
        $.pjax.enable = enable
        $.pjax.disable = $.noop
        $.pjax.click = $.noop
        $.pjax.submit = $.noop
        $.pjax.reload = function() { window.location.reload() }

        $(window).off('popstate.pjax', onPjaxPopstate)
    }


// Add the state property to jQuery's event object so we can use it in
// $(window).bind('popstate')
    if ( $.inArray('state', $.event.props) < 0 )
        $.event.props.push('state')

// Is pjax supported by this browser?
    $.support.pjax =
        window.history && window.history.pushState && window.history.replaceState &&
            // pushState isn't reliable on iOS until 5.
        !navigator.userAgent.match(/((iPod|iPhone|iPad).+\bOS\s+[1-4]\D|WebApps\/.+CFNetwork)/)

    $.support.pjax ? enable() : disable()

})(jQuery);



/**
 * Slides.
 */
(function($)
{
    $.fn.checkForm = function(options)
    {
        var settings = $.extend( {
            'input-error-border-class' : 'input-error-border'
        }, options);

        return this.each(function()
        {
            var $this = $(this);
            if($this.attr('check-form') == 'true'){
                $this.addClass('check-form-styling');
                $this.on('submit', function()
                {
                    var returning = true;
                    var input_text = $('input[type="text"], input[type="password"]', $this);
                    input_text.each(function()
                    {
                        var $this = $(this);
                        var check_type = $this.attr('check');
                        if(check_type !== undefined){
                            $this.addClass('input-styling');

                            if(check_type == 'no-empty'){
                                if($this.val() == false){
                                    $this.addClass(settings['input-error-border-class']);
                                    $this.transition({ scale: 1.1 }, function(){
                                        $this.transition({ scale: 1 }, function(){
                                            $this.removeClass(settings['input-error-border-class']);
                                        });
                                    });

                                    returning = false;
                                }
                            }

                            if(check_type == 'phone'){
                                if($this.val() == false){
                                    $this.addClass(settings['input-error-border-class']);
                                    $this.transition({ scale: 1.1 }, function(){
                                        $this.transition({ scale: 1 }, function(){
                                            $this.removeClass(settings['input-error-border-class']);
                                        });
                                    });
                                    returning = false;
                                }
                            }
                        }
                    });

                    if(returning == true){ return true; }else{ return false; }
                });
                return false;
            }
        });
    };

    /**
     *
     */
    jQuery.fn.swap = function(b) {
        b = jQuery(b)[0];
        var a = this[0],
            a2 = a.cloneNode(true),
            b2 = b.cloneNode(true),
            stack = this;

        a.parentNode.replaceChild(b2, a);
        b.parentNode.replaceChild(a2, b);

        stack[0] = a2;
        return this.pushStack( stack );
    };

    jQuery.fn.asyncPageLoading = function(options)
    {
        options = $.extend({
            async__frame__first: '.async__frame__first',
            async__frame__last: '.async__frame__last',
            p__ajaxClass: '.p-ajax',
            beforeSend: function() {
            },
            success: function() {
            },
            error: function() {
                //load_content('/page404');
            }
        }, options);

        function get_pathname() {
            return (window.location.pathname+window.location.hash).replace(/#!?/,'/').replace(/(.)\/$/,'$1').replace(/\/{2,}/g,'/');
        }

        $.support.pjax=window.history && window.history.pushState && window.history.replaceState && 1==1;
        if($.support.pjax && window.location.hash!='') {
            window.location.replace(get_pathname());
        }
        else
        {
            var __this = this;
            var p__ajaxClass = options.p__ajaxClass;
            var pathname=get_pathname();
            var prev_page = get_pathname();
            var pages_cache = {};
            var ajax_first_load = false;
            if(!$.support.pjax) ajax_first_load = true;


            function change__url(url) {
                if(url!=prev_page) {
                    if($.support.pjax) {
                        load__content(url);
                        history.pushState(url, null, url);
                    } else {
                        window.location.hash='#!'+url.replace(/^\/en($|\/)/,'/').slice(1);
                    }
                }
            }

            var load__content = function(url, page__title)
            {
                if(url != decodeURI(document.location.pathname))
                {
                    var page=/\/([\w-]*)$/.exec(url)[1];
                    if(pages_cache[url]) {
                        var data = pages_cache[url];
                        options.beforeSend(page);
                        $(document).trigger('async-page-before-loading');

                        options.success(data, url);
                        $(document).trigger('async-page-loading');
                    }
                    else
                    {
                        $.ajax({
                            type: "GET",
                            cache: false,
                            url: url,
                            beforeSend: function(request){
                                request.setRequestHeader('X-AsyncPageLoading', true);
                                options.beforeSend(request);
                                $(document).trigger('async-page-before-loading');
                            },
                            success: function(data){
                                options.success(data, url, page__title);
                                $(document).trigger('async-page-loading');
                                pages_cache[url] = data;
                            },
                            error: options.error
                        });
                    }
                }
            };

            __this.load__content=function(url){
                change__url(url);
            };

            if($.support.pjax) {
                history.replaceState(pathname, null);
                window.addEventListener('popstate', function(e){
                    load__content(e.state);
                }, false);
            }
            else
            {
                prev_page = null;
                var real_pathname = window.location.pathname;
                if(real_pathname!='/' && real_pathname!='/en') {
                    pathname=pathname.replace(/^\/((en)\/)?/,'/$2#!');
                    window.location.replace(pathname);
                }
                setTimeout(function(){
                    jQuery.router(function() {
                        load__content(get_pathname());
                    })
                },0)
            }

            $('a.'+p__ajaxClass+'').on('click', function(){
                var link = $(this).attr('href');
                var page__title = $(this).attr('page-title');
                page__title = (page__title == undefined) ? $(this).text() : page__title;
                change__url(link, page__title);
                return false;
            });
        }
    };

    /**
     *
     */
    jQuery.fn.p__ajax = function(options)
    {
        options = $.extend
        ({
            container: '.container-name',
            p__ajaxClass: '.p-ajax',
            beforeSend: function()
            {

            },
            success: function()
            {

            },
            error: function()
            {

            }
        }, options);

        var AJAX_CONTAINER = options.container;
        var AJAX_CLASS = options.p__ajaxClass;

        var init = function()
        {
            $(document).pjax(AJAX_CLASS, AJAX_CONTAINER);
            $(document).on('pjax:send', function() {
                options.beforeSend();
                $(document).trigger('async-page-before-loading');
            });

            $(document).on('pjax:complete', function(xhr, textStatus)
            {
                options.success(textStatus.responseText);
                $(document).on('ready pjax:end pjax:success', function()
                {
                    $(document).trigger('async-page-loading');
                });
            });
        };

        init();
    };

    /**
     * Slide plugin.
     * @param options
     */
    jQuery.fn.infineBackgroundSlider = function(options)
    {
        options = $.extend({
            process__bar_container: '#process__bar',
            view__process__bar: true,
            slideFrame: '#home__page-slider',
            slideDescriptionFrame: '#infine__slider',
            slides: [],
            path: '/assets/images/gallery/',
            interval: 3000,
            time: 1200,
            startingString: 'home-page'
        }, options);

        var process__bar_container = $(options.process__bar_container);
        var frame = $(options.slideFrame);
        var slideDescriptionFrame = $(options.slideDescriptionFrame).find('.slide__section');
        var slideDescriptionSize = slideDescriptionFrame.size();
        var path = options.path;
        //var slides = options.slides;
        var slides = $(options.slideDescriptionFrame).find('#slides__array').text().split(',');
        var slidesSize = slides.length - 1;
        var time = options.time;
        var interval = options.interval;
        var slideIndexInc = 0;
        var countFunction = 0;

        var getProcessTime = function()
        {
            var start = new Date();
            var maxTime = interval;
            var timeoutVal = Math.floor(maxTime / 100);
            animateUpdate();

            function updateProgress(percentage) {
                process__bar_container.css("width", percentage + "%");
            }

            function animateUpdate() {
                var now = new Date();
                var timeDiff = now.getTime() - start.getTime();
                var perc = Math.round((timeDiff/maxTime)*100);
                if (perc <= 100) {
                    updateProgress(perc);
                    setTimeout(animateUpdate, timeoutVal);
                }
                else
                {
                    process__bar_container.css("width", "0%");
                }
            }
        };

        /**
         * Функция обработки слайдов.
         */
        var getSlide = function()
        {
            var frame = $(options.slideFrame);
            var slideDescriptionFrame = $(options.slideDescriptionFrame).find('.slide__section');

            frame.find('.background__image:last').after('<img class="background__image slide__opacity-image" src="'+slides[slideIndexInc]+'" />');
            var img = frame.find('.background__image:last'); img.load(function(){
                $(this).unbind('load').stop().transition({ opacity: 1/*, '-webkit-filter': 'blur(2px)'*/ }, time, function(){
                    $(this).prevAll('.background__image').remove();
                });
                //$(this).transition({ '-webkit-filter': 'saturate(100%)'/*, '-webkit-filter': 'blur(0px)'*/ }, 1600);
            });

            //slideDescriptionFrame.eq(slideIndexInc).prev().stop().transition({ opacity: 0, visibility: 'hidden', top:150 }, time);
            //slideDescriptionFrame.eq(slideIndexInc).stop().transition({ opacity: 1, visibility: 'visible', top:250, skewX: '0deg' }, time);
            slideDescriptionFrame.eq(slideIndexInc).prev().stop().transition({ opacity: 0, visibility: 'hidden', top:500 }, time);
            slideDescriptionFrame.eq(slideIndexInc).stop().transition({ opacity: 1, visibility: 'visible', top:300 }, time);

            if(slideIndexInc == 0) slideDescriptionFrame.last().stop().transition({ opacity: 0, visibility: 'hidden', top:500 }, time);
            if(slidesSize == slideIndexInc) slideIndexInc = 0; else slideIndexInc++;

            //if(options.view__process__bar == true) getProcessTime();
        };

        getSlide();
        var intervalImageSlide = setInterval(function(){
            getSlide();
        }, interval);

        $(document).on('async-page-before-loading', function() {
            if(typeof(intervalImageSlide) != undefined) clearInterval(intervalImageSlide);
        });
    };

    jQuery.fn.area2svgStoreSection=function(options)
    {
        //Формируем начальные опции.
        options = $.extend
        ({
            'opacity':0,
            'fill':'#8dba21',
            'fill-opacity':1,
            'stroke':'#333',
            'stroke-opacity':1,
            'stroke-width':1,
            'cursor':'pointer',
            'stroke-linejoin':'round',
            onload:function(el,e){},
            onclick:function(el,e){},
            onmouseover:function(el,e){ el.attr({'opacity':0.5}); },
            onmousemove:function(el,e){  },
            onmouseout:function(el,e){ el.attr({'opacity':0}); },
            each:function(el) {}
        },options);

        //Формируем переменные фонового изображения.
        var img = this;
        var name = img.attr('class')+'_raphael';
        var random_n = '_'+Math.floor(Math.random()*100000000000); img.after('<div id="'+name+random_n+'" class="'+name+'"></div>');
        var paper = new ScaleRaphael(name+random_n,img.attr('width'),img.attr('height'));
        var areas = img.siblings('map').find('polygon');

        //Формируем цикл прогона по координатной линии.
        areas.each(function()
        {
            //Получаем координаты и цвет координируемого объекта.
            var points = $(this).attr('points').replace(/\s/ig, ',').split(',');
            var fills = $(this).attr('fill');

            //Обрабатываем координаты для Raphael.
            var newpoints = ''; newpoints += 'M'+points[0]+' '+points[1];
            for(j=0; j<points.length; j+=2){ newpoints += 'L'+points[j]+' '+points[j+1]; }
            newpoints +=' z';

            //Формируем функцию генерации Raphael.
            paper.path(newpoints).attr
            ({
                //Устанавливаем атрибуты.
                'opacity':$(this).attr('opacity'),
                //'alt':$(this).attr('alt'),
                'fill':$(this).attr('fill'),
                'fill-opacity': ($(this).attr('price-all') == '0' || $(this).attr('price-all') == false) ? 0 : options['fill-opacity'],
                'stroke':options['stroke'],
                'stroke-opacity':options['stroke-opacity'],
                'stroke-width':options['stroke-width'],
                'cursor':($(this).attr('price-all') == '0' || $(this).attr('price-all') == false) ? 0 : options['cursor'],
                'stroke-linejoin':options['stroke-linejoin']}).data({
                'alt': $(this).attr('alt'),
                'quarter': $(this).attr('quarter'),
                'section': $(this).attr('section'),
                'storey': $(this).attr('storey'),
                'apartment-id': $(this).attr('apartment-id'),
                'plan-id': $(this).attr('plan-id'),

                'id': $(this).attr('id'),
                'img-id': $(this).attr('img-id'),
                'position-number': $(this).attr('position-number'),
                'apartment-number': $(this).attr('apartment-number'),
                'rooms': $(this).attr('rooms'),
                'area': $(this).attr('area'),
                'price-basic': $(this).attr('price-basic'),
                'price-red': $(this).attr('price-red'),
                'price-action': $(this).attr('price-action'),
                'opacity': $(this).attr('opacity')
            });

        });

        //Уничтожаем начальный SVG массив.
        img.siblings('map').remove();

        //Формируем пользовательские функции.
        var arr={};
        paper.forEach(function(el)
        {
            el.node.onclick = function(e){ options.onclick(el,e); };
            el.node.onmousemove = function (e){ options.onmousemove(el,e); };
            el.node.onmouseover = function (e){ options.onmouseover(el,e); };
            el.node.onmouseout = function (e){ options.onmouseout(el,e); };
            options.each(el);
            options.onload = function(e){ options.onload(el, e); };
        });


        return paper;
    };
})(jQuery);



(function($){
    jQuery.fn.area2svg=function(options){
        options=$.extend({
            'opacity':0,
            'fill':'#0000ff',
            'fill-opacity':1,
            'stroke':'#00ff00',
            'stroke-opacity':1,
            'stroke-width':3,
            'cursor':'pointer',
            'stroke-linejoin':'round',
            onclick:function(el,e) {
            },
            onmouseover:function(el,e) {
                el.attr({'opacity':0.5});
            },
            onmouseout:function(el,e) {
                el.attr({'opacity':0});
            },
            each:function(el) {
            }
        },options);
        var img=this;
        var name=img.attr('class')+'_raphael';
        var random_n='_'+Math.floor(Math.random()*100000000000);
        img.after('<div id="'+name+random_n+'" class="'+name+'"></div>');
        var paper = new ScaleRaphael(name+random_n,img.attr('width'),img.attr('height'));
        var areas = img.siblings('map').find('area');
        for (i=0; i<areas.length; i++) {
            var area=areas[i];
            var points = area.coords.split(',');
            var newpoints = '';
            newpoints += 'M'+points[0]+' '+points[1];
            for (j=0; j<points.length; j+=2){
                newpoints += 'L'+points[j]+' '+points[j+1];
            }
            newpoints +=' z';
            var alt=area.alt;
            if(alt=='') {
                alert('null alt at line '+i);
            }
            if(area.shape!='poly') {
                alert('no poly shape at line '+i);
            }
            paper.path(newpoints).attr({'opacity':options['opacity'],'fill':options['fill'],'fill-opacity':options['fill-opacity'],
                'stroke':options['stroke'],'stroke-opacity':options['stroke-opacity'],'stroke-width':options['stroke-width'],'cursor':options['cursor'],
                'stroke-linejoin':options['stroke-linejoin']}).data({'alt':alt});
        };
        img.siblings('map').remove();
        var arr={};
        paper.forEach(function(el) {
            el.node.onclick = function (e) {
                options.onclick(el,e);
            };
            el.node.onmouseover = function (e) {
                options.onmouseover(el,e);
            };
            el.node.onmouseout = function (e) {
                options.onmouseout(el,e);
            };
            options.each(el);
            arr[el.data('alt')]=el.id;
        });
        paper.getByAlt=function(alt){
            return paper.getById(arr[alt]);
        }
        return paper;
    };
})(jQuery);






/*

 StackBlur - a fast almost Gaussian Blur For Canvas

 Version: 	0.5
 Author:		Mario Klingemann
 Contact: 	mario@quasimondo.com
 Website:	http://www.quasimondo.com/StackBlurForCanvas
 Twitter:	@quasimondo

 In case you find this class useful - especially in commercial projects -
 I am not totally unhappy for a small donation to my PayPal account
 mario@quasimondo.de

 Or support me on flattr:
 https://flattr.com/thing/72791/StackBlur-a-fast-almost-Gaussian-Blur-Effect-for-CanvasJavascript

 Copyright (c) 2010 Mario Klingemann

 Permission is hereby granted, free of charge, to any person
 obtaining a copy of this software and associated documentation
 files (the "Software"), to deal in the Software without
 restriction, including without limitation the rights to use,
 copy, modify, merge, publish, distribute, sublicense, and/or sell
 copies of the Software, and to permit persons to whom the
 Software is furnished to do so, subject to the following
 conditions:

 The above copyright notice and this permission notice shall be
 included in all copies or substantial portions of the Software.

 THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
 EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES
 OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
 NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT
 HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
 WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
 FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
 OTHER DEALINGS IN THE SOFTWARE.
 */

var mul_table = [
    512,512,456,512,328,456,335,512,405,328,271,456,388,335,292,512,
    454,405,364,328,298,271,496,456,420,388,360,335,312,292,273,512,
    482,454,428,405,383,364,345,328,312,298,284,271,259,496,475,456,
    437,420,404,388,374,360,347,335,323,312,302,292,282,273,265,512,
    497,482,468,454,441,428,417,405,394,383,373,364,354,345,337,328,
    320,312,305,298,291,284,278,271,265,259,507,496,485,475,465,456,
    446,437,428,420,412,404,396,388,381,374,367,360,354,347,341,335,
    329,323,318,312,307,302,297,292,287,282,278,273,269,265,261,512,
    505,497,489,482,475,468,461,454,447,441,435,428,422,417,411,405,
    399,394,389,383,378,373,368,364,359,354,350,345,341,337,332,328,
    324,320,316,312,309,305,301,298,294,291,287,284,281,278,274,271,
    268,265,262,259,257,507,501,496,491,485,480,475,470,465,460,456,
    451,446,442,437,433,428,424,420,416,412,408,404,400,396,392,388,
    385,381,377,374,370,367,363,360,357,354,350,347,344,341,338,335,
    332,329,326,323,320,318,315,312,310,307,304,302,299,297,294,292,
    289,287,285,282,280,278,275,273,271,269,267,265,263,261,259];


var shg_table = [
    9, 11, 12, 13, 13, 14, 14, 15, 15, 15, 15, 16, 16, 16, 16, 17,
    17, 17, 17, 17, 17, 17, 18, 18, 18, 18, 18, 18, 18, 18, 18, 19,
    19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 20, 20, 20,
    20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 21,
    21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 21,
    21, 21, 21, 21, 21, 21, 21, 21, 21, 21, 22, 22, 22, 22, 22, 22,
    22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22,
    22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 23,
    23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23,
    23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23,
    23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23, 23,
    23, 23, 23, 23, 23, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24,
    24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24,
    24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24,
    24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24,
    24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24, 24 ];

function stackBlurImage( image, imageDim, canvas, radius, blurAlphaChannel, callback )
{

    //var img = document.getElementById( imageID );
    var img = image;

    var w = imageDim.width;
    var h = imageDim.height;

    //var canvas = document.getElementById( canvasID );
    var canvas = canvas;
    /*
     canvas.style.width  = w + "px";
     canvas.style.height = h + "px";
     canvas.width = w;
     canvas.height = h;
     */
    var context = canvas.getContext("2d");
    context.clearRect( 0, 0, w, h );
    context.drawImage( img, 0, 0, w, h );

    if ( isNaN(radius) || radius < 1 ) return;

    if ( blurAlphaChannel )
        stackBlurCanvasRGBA( canvas, 0, 0, w, h, radius, callback );
    else
        stackBlurCanvasRGB( canvas, 0, 0, w, h, radius, callback );
}


function stackBlurCanvasRGBA( el, top_x, top_y, width, height, radius, callback )
{
    if ( isNaN(radius) || radius < 1 ) return;
    radius |= 0;

    //var canvas  = document.getElementById( el );
    var canvas  = el;
    var context = canvas.getContext("2d");
    var imageData;

    try {
        try {
            imageData = context.getImageData( top_x, top_y, width, height );
        } catch(e) {

            // NOTE: this part is supposedly only needed if you want to work with local files
            // so it might be okay to remove the whole try/catch block and just use
            // imageData = context.getImageData( top_x, top_y, width, height );
            try {
                netscape.security.PrivilegeManager.enablePrivilege("UniversalBrowserRead");
                imageData = context.getImageData( top_x, top_y, width, height );
            } catch(e) {
                alert("Cannot access local image");
                throw new Error("unable to access local image data: " + e);
                return;
            }
        }
    } catch(e) {
        alert("Cannot access image");
        throw new Error("unable to access image data: " + e);
    }

    var pixels = imageData.data;

    var x, y, i, p, yp, yi, yw, r_sum, g_sum, b_sum, a_sum,
        r_out_sum, g_out_sum, b_out_sum, a_out_sum,
        r_in_sum, g_in_sum, b_in_sum, a_in_sum,
        pr, pg, pb, pa, rbs;

    var div = radius + radius + 1;
    var w4 = width << 2;
    var widthMinus1  = width - 1;
    var heightMinus1 = height - 1;
    var radiusPlus1  = radius + 1;
    var sumFactor = radiusPlus1 * ( radiusPlus1 + 1 ) / 2;

    var stackStart = new BlurStack();
    var stack = stackStart;
    for ( i = 1; i < div; i++ )
    {
        stack = stack.next = new BlurStack();
        if ( i == radiusPlus1 ) var stackEnd = stack;
    }
    stack.next = stackStart;
    var stackIn = null;
    var stackOut = null;

    yw = yi = 0;

    var mul_sum = mul_table[radius];
    var shg_sum = shg_table[radius];

    for ( y = 0; y < height; y++ )
    {
        r_in_sum = g_in_sum = b_in_sum = a_in_sum = r_sum = g_sum = b_sum = a_sum = 0;

        r_out_sum = radiusPlus1 * ( pr = pixels[yi] );
        g_out_sum = radiusPlus1 * ( pg = pixels[yi+1] );
        b_out_sum = radiusPlus1 * ( pb = pixels[yi+2] );
        a_out_sum = radiusPlus1 * ( pa = pixels[yi+3] );

        r_sum += sumFactor * pr;
        g_sum += sumFactor * pg;
        b_sum += sumFactor * pb;
        a_sum += sumFactor * pa;

        stack = stackStart;

        for( i = 0; i < radiusPlus1; i++ )
        {
            stack.r = pr;
            stack.g = pg;
            stack.b = pb;
            stack.a = pa;
            stack = stack.next;
        }

        for( i = 1; i < radiusPlus1; i++ )
        {
            p = yi + (( widthMinus1 < i ? widthMinus1 : i ) << 2 );
            r_sum += ( stack.r = ( pr = pixels[p])) * ( rbs = radiusPlus1 - i );
            g_sum += ( stack.g = ( pg = pixels[p+1])) * rbs;
            b_sum += ( stack.b = ( pb = pixels[p+2])) * rbs;
            a_sum += ( stack.a = ( pa = pixels[p+3])) * rbs;

            r_in_sum += pr;
            g_in_sum += pg;
            b_in_sum += pb;
            a_in_sum += pa;

            stack = stack.next;
        }


        stackIn = stackStart;
        stackOut = stackEnd;
        for ( x = 0; x < width; x++ )
        {
            pixels[yi+3] = pa = (a_sum * mul_sum) >> shg_sum;
            if ( pa != 0 )
            {
                pa = 255 / pa;
                pixels[yi]   = ((r_sum * mul_sum) >> shg_sum) * pa;
                pixels[yi+1] = ((g_sum * mul_sum) >> shg_sum) * pa;
                pixels[yi+2] = ((b_sum * mul_sum) >> shg_sum) * pa;
            } else {
                pixels[yi] = pixels[yi+1] = pixels[yi+2] = 0;
            }

            r_sum -= r_out_sum;
            g_sum -= g_out_sum;
            b_sum -= b_out_sum;
            a_sum -= a_out_sum;

            r_out_sum -= stackIn.r;
            g_out_sum -= stackIn.g;
            b_out_sum -= stackIn.b;
            a_out_sum -= stackIn.a;

            p =  ( yw + ( ( p = x + radius + 1 ) < widthMinus1 ? p : widthMinus1 ) ) << 2;

            r_in_sum += ( stackIn.r = pixels[p]);
            g_in_sum += ( stackIn.g = pixels[p+1]);
            b_in_sum += ( stackIn.b = pixels[p+2]);
            a_in_sum += ( stackIn.a = pixels[p+3]);

            r_sum += r_in_sum;
            g_sum += g_in_sum;
            b_sum += b_in_sum;
            a_sum += a_in_sum;

            stackIn = stackIn.next;

            r_out_sum += ( pr = stackOut.r );
            g_out_sum += ( pg = stackOut.g );
            b_out_sum += ( pb = stackOut.b );
            a_out_sum += ( pa = stackOut.a );

            r_in_sum -= pr;
            g_in_sum -= pg;
            b_in_sum -= pb;
            a_in_sum -= pa;

            stackOut = stackOut.next;

            yi += 4;
        }
        yw += width;
    }


    for ( x = 0; x < width; x++ )
    {
        g_in_sum = b_in_sum = a_in_sum = r_in_sum = g_sum = b_sum = a_sum = r_sum = 0;

        yi = x << 2;
        r_out_sum = radiusPlus1 * ( pr = pixels[yi]);
        g_out_sum = radiusPlus1 * ( pg = pixels[yi+1]);
        b_out_sum = radiusPlus1 * ( pb = pixels[yi+2]);
        a_out_sum = radiusPlus1 * ( pa = pixels[yi+3]);

        r_sum += sumFactor * pr;
        g_sum += sumFactor * pg;
        b_sum += sumFactor * pb;
        a_sum += sumFactor * pa;

        stack = stackStart;

        for( i = 0; i < radiusPlus1; i++ )
        {
            stack.r = pr;
            stack.g = pg;
            stack.b = pb;
            stack.a = pa;
            stack = stack.next;
        }

        yp = width;

        for( i = 1; i <= radius; i++ )
        {
            yi = ( yp + x ) << 2;

            r_sum += ( stack.r = ( pr = pixels[yi])) * ( rbs = radiusPlus1 - i );
            g_sum += ( stack.g = ( pg = pixels[yi+1])) * rbs;
            b_sum += ( stack.b = ( pb = pixels[yi+2])) * rbs;
            a_sum += ( stack.a = ( pa = pixels[yi+3])) * rbs;

            r_in_sum += pr;
            g_in_sum += pg;
            b_in_sum += pb;
            a_in_sum += pa;

            stack = stack.next;

            if( i < heightMinus1 )
            {
                yp += width;
            }
        }

        yi = x;
        stackIn = stackStart;
        stackOut = stackEnd;
        for ( y = 0; y < height; y++ )
        {
            p = yi << 2;
            pixels[p+3] = pa = (a_sum * mul_sum) >> shg_sum;
            if ( pa > 0 )
            {
                pa = 255 / pa;
                pixels[p]   = ((r_sum * mul_sum) >> shg_sum ) * pa;
                pixels[p+1] = ((g_sum * mul_sum) >> shg_sum ) * pa;
                pixels[p+2] = ((b_sum * mul_sum) >> shg_sum ) * pa;
            } else {
                pixels[p] = pixels[p+1] = pixels[p+2] = 0;
            }

            r_sum -= r_out_sum;
            g_sum -= g_out_sum;
            b_sum -= b_out_sum;
            a_sum -= a_out_sum;

            r_out_sum -= stackIn.r;
            g_out_sum -= stackIn.g;
            b_out_sum -= stackIn.b;
            a_out_sum -= stackIn.a;

            p = ( x + (( ( p = y + radiusPlus1) < heightMinus1 ? p : heightMinus1 ) * width )) << 2;

            r_sum += ( r_in_sum += ( stackIn.r = pixels[p]));
            g_sum += ( g_in_sum += ( stackIn.g = pixels[p+1]));
            b_sum += ( b_in_sum += ( stackIn.b = pixels[p+2]));
            a_sum += ( a_in_sum += ( stackIn.a = pixels[p+3]));

            stackIn = stackIn.next;

            r_out_sum += ( pr = stackOut.r );
            g_out_sum += ( pg = stackOut.g );
            b_out_sum += ( pb = stackOut.b );
            a_out_sum += ( pa = stackOut.a );

            r_in_sum -= pr;
            g_in_sum -= pg;
            b_in_sum -= pb;
            a_in_sum -= pa;

            stackOut = stackOut.next;

            yi += width;
        }
    }

    context.putImageData( imageData, top_x, top_y );

    callback.call();

}


function stackBlurCanvasRGB( el, top_x, top_y, width, height, radius, callback )
{
    if ( isNaN(radius) || radius < 1 ) return;
    radius |= 0;

    //var canvas  = document.getElementById( el );
    var canvas  = el;
    var context = canvas.getContext("2d");
    var imageData;

    try {
        try {
            imageData = context.getImageData( top_x, top_y, width, height );
        } catch(e) {

            // NOTE: this part is supposedly only needed if you want to work with local files
            // so it might be okay to remove the whole try/catch block and just use
            // imageData = context.getImageData( top_x, top_y, width, height );
            try {
                netscape.security.PrivilegeManager.enablePrivilege("UniversalBrowserRead");
                imageData = context.getImageData( top_x, top_y, width, height );
            } catch(e) {
                alert("Cannot access local image");
                throw new Error("unable to access local image data: " + e);
                return;
            }
        }
    } catch(e) {
        alert("Cannot access image");
        throw new Error("unable to access image data: " + e);
    }

    var pixels = imageData.data;

    var x, y, i, p, yp, yi, yw, r_sum, g_sum, b_sum,
        r_out_sum, g_out_sum, b_out_sum,
        r_in_sum, g_in_sum, b_in_sum,
        pr, pg, pb, rbs;

    var div = radius + radius + 1;
    var w4 = width << 2;
    var widthMinus1  = width - 1;
    var heightMinus1 = height - 1;
    var radiusPlus1  = radius + 1;
    var sumFactor = radiusPlus1 * ( radiusPlus1 + 1 ) / 2;

    var stackStart = new BlurStack();
    var stack = stackStart;
    for ( i = 1; i < div; i++ )
    {
        stack = stack.next = new BlurStack();
        if ( i == radiusPlus1 ) var stackEnd = stack;
    }
    stack.next = stackStart;
    var stackIn = null;
    var stackOut = null;

    yw = yi = 0;

    var mul_sum = mul_table[radius];
    var shg_sum = shg_table[radius];

    for ( y = 0; y < height; y++ )
    {
        r_in_sum = g_in_sum = b_in_sum = r_sum = g_sum = b_sum = 0;

        r_out_sum = radiusPlus1 * ( pr = pixels[yi] );
        g_out_sum = radiusPlus1 * ( pg = pixels[yi+1] );
        b_out_sum = radiusPlus1 * ( pb = pixels[yi+2] );

        r_sum += sumFactor * pr;
        g_sum += sumFactor * pg;
        b_sum += sumFactor * pb;

        stack = stackStart;

        for( i = 0; i < radiusPlus1; i++ )
        {
            stack.r = pr;
            stack.g = pg;
            stack.b = pb;
            stack = stack.next;
        }

        for( i = 1; i < radiusPlus1; i++ )
        {
            p = yi + (( widthMinus1 < i ? widthMinus1 : i ) << 2 );
            r_sum += ( stack.r = ( pr = pixels[p])) * ( rbs = radiusPlus1 - i );
            g_sum += ( stack.g = ( pg = pixels[p+1])) * rbs;
            b_sum += ( stack.b = ( pb = pixels[p+2])) * rbs;

            r_in_sum += pr;
            g_in_sum += pg;
            b_in_sum += pb;

            stack = stack.next;
        }


        stackIn = stackStart;
        stackOut = stackEnd;
        for ( x = 0; x < width; x++ )
        {
            pixels[yi]   = (r_sum * mul_sum) >> shg_sum;
            pixels[yi+1] = (g_sum * mul_sum) >> shg_sum;
            pixels[yi+2] = (b_sum * mul_sum) >> shg_sum;

            r_sum -= r_out_sum;
            g_sum -= g_out_sum;
            b_sum -= b_out_sum;

            r_out_sum -= stackIn.r;
            g_out_sum -= stackIn.g;
            b_out_sum -= stackIn.b;

            p =  ( yw + ( ( p = x + radius + 1 ) < widthMinus1 ? p : widthMinus1 ) ) << 2;

            r_in_sum += ( stackIn.r = pixels[p]);
            g_in_sum += ( stackIn.g = pixels[p+1]);
            b_in_sum += ( stackIn.b = pixels[p+2]);

            r_sum += r_in_sum;
            g_sum += g_in_sum;
            b_sum += b_in_sum;

            stackIn = stackIn.next;

            r_out_sum += ( pr = stackOut.r );
            g_out_sum += ( pg = stackOut.g );
            b_out_sum += ( pb = stackOut.b );

            r_in_sum -= pr;
            g_in_sum -= pg;
            b_in_sum -= pb;

            stackOut = stackOut.next;

            yi += 4;
        }
        yw += width;
    }


    for ( x = 0; x < width; x++ )
    {
        g_in_sum = b_in_sum = r_in_sum = g_sum = b_sum = r_sum = 0;

        yi = x << 2;
        r_out_sum = radiusPlus1 * ( pr = pixels[yi]);
        g_out_sum = radiusPlus1 * ( pg = pixels[yi+1]);
        b_out_sum = radiusPlus1 * ( pb = pixels[yi+2]);

        r_sum += sumFactor * pr;
        g_sum += sumFactor * pg;
        b_sum += sumFactor * pb;

        stack = stackStart;

        for( i = 0; i < radiusPlus1; i++ )
        {
            stack.r = pr;
            stack.g = pg;
            stack.b = pb;
            stack = stack.next;
        }

        yp = width;

        for( i = 1; i <= radius; i++ )
        {
            yi = ( yp + x ) << 2;

            r_sum += ( stack.r = ( pr = pixels[yi])) * ( rbs = radiusPlus1 - i );
            g_sum += ( stack.g = ( pg = pixels[yi+1])) * rbs;
            b_sum += ( stack.b = ( pb = pixels[yi+2])) * rbs;

            r_in_sum += pr;
            g_in_sum += pg;
            b_in_sum += pb;

            stack = stack.next;

            if( i < heightMinus1 )
            {
                yp += width;
            }
        }

        yi = x;
        stackIn = stackStart;
        stackOut = stackEnd;
        for ( y = 0; y < height; y++ )
        {
            p = yi << 2;
            pixels[p]   = (r_sum * mul_sum) >> shg_sum;
            pixels[p+1] = (g_sum * mul_sum) >> shg_sum;
            pixels[p+2] = (b_sum * mul_sum) >> shg_sum;

            r_sum -= r_out_sum;
            g_sum -= g_out_sum;
            b_sum -= b_out_sum;

            r_out_sum -= stackIn.r;
            g_out_sum -= stackIn.g;
            b_out_sum -= stackIn.b;

            p = ( x + (( ( p = y + radiusPlus1) < heightMinus1 ? p : heightMinus1 ) * width )) << 2;

            r_sum += ( r_in_sum += ( stackIn.r = pixels[p]));
            g_sum += ( g_in_sum += ( stackIn.g = pixels[p+1]));
            b_sum += ( b_in_sum += ( stackIn.b = pixels[p+2]));

            stackIn = stackIn.next;

            r_out_sum += ( pr = stackOut.r );
            g_out_sum += ( pg = stackOut.g );
            b_out_sum += ( pb = stackOut.b );

            r_in_sum -= pr;
            g_in_sum -= pg;
            b_in_sum -= pb;

            stackOut = stackOut.next;

            yi += width;
        }
    }

    context.putImageData( imageData, top_x, top_y );

    callback.call();

}

function BlurStack()
{
    this.r = 0;
    this.g = 0;
    this.b = 0;
    this.a = 0;
    this.next = null;
}


(function($){
    jQuery.fn.setActive=function(){
        return this.each(function(){
            $(this).addClass('active').siblings().removeClass('active');
        })
    };
})(jQuery);

(function($){
    jQuery.fn.transitionShow=function(time,callback){
        return this.each(function(){
            var type_style='block';
            if($(this).context.nodeName=='SPAN') {
                type_style='inline-block';
            }
            $(this).transitionStop(true).css({'opacity':0,'display':type_style}).transition({'opacity':1},time==null?300:time,function(){
                if(callback) {
                    callback($(this));
                }
            });
        });
    };
})(jQuery);

(function($){
    jQuery.fn.transitionHide=function(time,callback){
        return this.each(function(){
            $(this).transitionStop(true).transition({'opacity':0},time==null?300:time,function(){
                $(this).css({'display':'none'});
                if(callback) {
                    callback($(this));
                }
            });
        });
    };
})(jQuery);


function get_transition_css(top,left,opacity){
    var transitions_av = false;
    var css;
    top=top||0;
    left=left||0;
    if(transitions_av) {
        css={'translate3d':[left,top,0]};
    } else {
        css={'top':top,'left':left};
    }
    if(opacity!==null || opacity!==undefined) {
        css.opacity=opacity;
    }
    return css;
}



(function($){
    jQuery.fn.galleryInit=function(options){
        var frame=this;
        options=$.extend({
            images:[],
            start_num:0,
            vertical:false,
            time:600,
            previews:false,
            preview_time:600,
            preview_easing:'',
            previews_num:1,
            //preview_btns:false,
            mobile_images:true,
            bg_style:'cover',
            dots:false,
            zoom:false,
            loadComplete:function(){},
            beforeMove:function(num){},
            afterMove:function(num){}
        },options);

        var slider, slider_move_av, min_num, max_num, cur_num, g_p_scroll, gallery_width, gallery_height, zoom;
        var image_frame={};
        if(options.bg_style=='auto') {
            options.zoom=false;
        }


        function check_image_load(src,callback) {
            var hiddenImg= new Image();
            hiddenImg.onload=function(){
                callback(hiddenImg);
                hiddenImg=null;
            }
            hiddenImg.src=src;
        }
        function init_gal() {
            slider_move_av=true;
            min_num=0;
            max_num=options.images.length-1;
            cur_num=get_av_num(options.start_num);
            var gallery_html='';
            if(max_num==0) {
                frame.addClass('no-move');
            } else {
                gallery_html='<div class="g_s div_100" id="g_s_l" style="'+get_img_bgstyle(-1)+'">'+get_title_html(-1)+'</div><div class="g_s div_100" id="g_s_r" style="'+get_img_bgstyle(1)+'">'+get_title_html(1)+'</div>';
            }
            check_image_load(get_img_src(0),function(img){
                options.loadComplete();
            })

            frame.prepend('<div class="g_s_over div_100"><div class="g_s_frame div_100 '+options.bg_style+'"><div class="g_s div_100" id="g_s_c" style="'+get_img_bgstyle(0)+'">'+get_title_html(0)+'</div>'+gallery_html+'</div></div>');
            slider=frame.find('.g_s_frame:last');
            generate_dots();
            g_btn_test();
            if(options.previews) {
                var preview_text='<div class="g_p_frame css_ani"><div class="g_p_scroll_size"><div class="g_p_scroll" data-pos="0">';
                if(!options.vertical) {
                    for(var i=min_num; i<=max_num; i++){
                        if(options.images[i].preview) {
                            preview_text+='<div class="g_p" data-targ="'+i+'"><div class="g_p_bg"><img class="g_p_img" src="'+options.images[i].preview+'"></div></div>';
                        }
                    }
                } else {
                    for(var i=max_num; i>=min_num; i--){
                        if(options.images[i].preview) {
                            preview_text+='<div class="g_p" data-targ="'+i+'"><div class="g_p_bg"><img class="g_p_img" src="'+options.images[i].preview+'"></div></div>';
                        }
                    }
                }
                preview_text+='</div></div></div>';
                slider_area.append(preview_text);
                preview_text=null;
                g_p_scroll=frame.find('.g_p_scroll:last');
                if(options.vertical) {
                    frame.addClass('vertical_previews');
                }
                preview_move(cur_num,0);
                make_preview_position();
            }
        }
        function get_title_html(delta) {
            var title=options.images[get_img_num(delta)].title||'';
            if(title!='') {
                title='<div class="gallery_title_frame"><div class="gallery_title">'+title+'</div></div>';
            }
            return title;
        }
        function get_av_num(num) {
            return Math.min(max_num,Math.max(min_num,num));
        }
        function get_img_num(delta) {
            var r=cur_num+delta;
            if(r>max_num) r=min_num-1+(r-max_num); else
            if(r<min_num) r=max_num+1+(r-min_num);
            return r;
        }
        function get_img_src(delta,full) {
            var src=options.images[get_img_num(delta)].src;
            /*if((!high_speed || mobile) && !full && options.mobile_images) {
                src=get_mobile_images(src);
            }*/
            return src;
        }
        function get_img_bgstyle(delta) {
            return "background-image:url('"+get_img_src(delta)+"');";
        }
        function generate_dots() {
            if(options.dots) {
                var gallery_dots_html='';
                for(var i=min_num; i<=max_num; i++) {
                    console.log(i);
                    gallery_dots_html+='<div class="gallery_dot css_ani'+(i==cur_num?' active':'')+'" data-targ="'+i+'" style="background-image: url(\''+options.images[i].src+'\');"></div>';
                }
                frame.find('.gallery_dots_frame').html(gallery_dots_html);
                gallery_dots_html=null;
            }
        }
        function g_btn_test() {
            if(cur_num==min_num) {
                g_btn.filter('.left').addClass('no-active');
            } else {
                g_btn.filter('.left').removeClass('no-active');
            }
            if(cur_num==max_num) {
                g_btn.filter('.right').addClass('no-active');
            } else {
                g_btn.filter('.right').removeClass('no-active');
            }
        }
        function preview_move(num,time) {
            var targ_num=Math.max(options.previews_num*0.5-0.5, Math.min(max_num-options.previews_num*0.5+0.5, num));
            g_p_scroll.transitionStop(true).data('pos',targ_num);
            if(!options.vertical) {
                g_p_scroll.transition(get_transition_css(0,-targ_num*100+'%'),time,options.preview_easing);
            } else {
                g_p_scroll.transition(get_transition_css(-(max_num-targ_num)*100+'%',0),time,options.preview_easing);
            }
        }
        function make_preview_position() {
            g_p_scroll.find('.g_p[data-targ="'+cur_num+'"]').setActive();
        }
        function moveToNumber(num) {
            num=get_av_num(num);
            var targ_slide='#g_s_l';
            var dir='right';
            var delta=1;
            if(num>cur_num) {
                targ_slide='#g_s_r';
                dir='left';
                delta=-1;
            }
            var next_frame=slider.find(targ_slide);
            var next_img_src=get_img_bgstyle(num-cur_num);
            var cur_next_img_src=next_frame.attr('style');
            if(next_img_src!=cur_next_img_src) {
                next_frame.attr({'style':next_img_src}).html(get_title_html(num-cur_num));
            }
            slider_move(dir,null,num+delta);
        }
        function check_zoom_img_values() {
            gallery_width=frame.width();
            gallery_height=frame.height();
            var gallery_ratio=gallery_width/gallery_height;
            var css_end={};
            if(image_frame.ratio>gallery_ratio && options.bg_style=='cover' || image_frame.ratio<gallery_ratio && options.bg_style=='contain') {
                image_frame.image.addClass('reversed');
                image_frame.x_min=100*(1-(options.zoom*gallery_height)/(gallery_width/image_frame.ratio));
                image_frame.y_min=100*(1-options.zoom);
                image_frame.x_start=0.5*100*(1-(gallery_height)/(gallery_width/image_frame.ratio));
                image_frame.y_start=0;
                css_end.width='auto';
                css_end.height=options.zoom*100+'%';
            } else {
                image_frame.image.removeClass('reversed');
                image_frame.x_min=100*(1-options.zoom);
                image_frame.y_min=100*(1-(options.zoom*gallery_width)/(gallery_height*image_frame.ratio));
                image_frame.x_start=0;
                image_frame.y_start=0.5*100*(1-(gallery_width)/(gallery_height*image_frame.ratio));
                css_end.height='auto';
                css_end.width=options.zoom*100+'%';
            }
            image_frame.image.css(css_end);
        }
        function set_zoom_on() {
            slider_move_av=false;
            preloader.show();
            //console.log('zoom enabled');
            frame.find('.g_s_over').after('<div class="zoomed_image_frame div_100"><img class="zoomed_image" src="'+get_mobile_images(get_img_src(0,true),'big')+'"></div>')
            frame.find('.zoomed_image').css({'opacity':0,'translate3d':0}).on('load',function(){
                preloader.hide();
                image_frame.image=$(this);
                image_frame.el=$(this).parent();
                image_frame.image.off('load').css({'opacity':1});
                image_frame.ratio=this.naturalWidth/this.naturalHeight;

                check_zoom_img_values();
                image_frame.x=0.5*image_frame.x_min;
                image_frame.y=0.5*image_frame.y_min;
                var start_zoom=-50*(1-(1/options.zoom));
                var start_css=get_transition_css(start_zoom+image_frame.y_start+'%',start_zoom+image_frame.x_start+'%');
                start_css.scale=1/options.zoom;
                var end_css=get_transition_css(image_frame.y+'%',image_frame.x+'%');
                end_css.scale=1;
                image_frame.el.css(start_css).delay(500).transition(end_css,1500,function(){
                    zoom=true;
                });
            })
        }
        function set_zoom_off() {
            zoom=false;
            //console.log('zoom disabled');
            var start_zoom=-50*(1-(1/options.zoom));
            var start_css=get_transition_css(start_zoom+image_frame.y_start+'%',start_zoom+image_frame.x_start+'%');
            start_css.scale=1/options.zoom;
            image_frame.el.transitionStop(true).transition(start_css,1000,function(){
                slider_move_av=true;
                $(this).remove();
            })
        }




        function slider_move(pos_x,pos_y,new_num) {
            if(zoom) {
                //console.log(pos_x,pos_y)
                pos_x=Math.min(0, Math.max(image_frame.x_min, image_frame.x+pos_x));
                pos_y=Math.min(0, Math.max(image_frame.y_min, image_frame.y+pos_y));
                image_frame.el.css(get_transition_css(pos_y+'%',pos_x+'%'));
                if(new_num=='end') {
                    image_frame.x=pos_x;
                    image_frame.y=pos_y;
                    slider_area.removeClass('moving');
                }
            } else
            if(slider_move_av) {
                if(pos_x!='left' && pos_x!='right' && pos_x!='self') {
                    slider.css(get_transition_css(0,Math.min(100,Math.max(-100,pos_x))+'%'));
                } else {
                    slider_move_av=false;
                    if(pos_x!='self') {
                        options.beforeMove(cur_num);
                    }
                    if(new_num) {
                        cur_num=new_num;
                    }
                    var targ_pos='0%';
                    if(pos_x=='left') {
                        targ_pos='-100%';
                    } else
                    if(pos_x=='right') {
                        targ_pos='100%';
                    }
                    slider.transition(get_transition_css(0,targ_pos),options.time,function(){
                        load_slider_img(pos_x);
                    })
                    slider_area.removeClass('moving');
                }
            }
        }
        function load_slider_img(dir) {
            slider_move_av=true;
            if(dir!='self') {
                slider.css(get_transition_css(0,0));
                if(dir=='left') {
                    cur_num=get_img_num(1);
                    slider
                        .find('#g_s_l').attr('id','g_s_tmp').end()
                        .find('#g_s_c').attr('id','g_s_l').end()
                        .find('#g_s_r').attr('id','g_s_c').end()
                        .find('#g_s_tmp').attr('id','g_s_r');
                } else {
                    cur_num=get_img_num(-1);
                    slider
                        .find('#g_s_r').attr('id','g_s_tmp').end()
                        .find('#g_s_c').attr('id','g_s_r').end()
                        .find('#g_s_l').attr('id','g_s_c').end()
                        .find('#g_s_tmp').attr('id','g_s_l');
                }
                var prev_img_src=get_img_bgstyle(-1);
                var next_img_src=get_img_bgstyle(1);
                var prev_frame=slider.find('#g_s_l');
                var next_frame=slider.find('#g_s_r');
                var cur_prev_img_src=prev_frame.attr('style');
                var cur_next_img_src=next_frame.attr('style');
                if(prev_img_src!=cur_prev_img_src) {
                    prev_frame.attr({'style':prev_img_src}).html(get_title_html(-1));
                }
                if(next_img_src!=cur_next_img_src) {
                    next_frame.attr({'style':next_img_src}).html(get_title_html(1));
                }
                if(options.previews) {
                    preview_move(cur_num,options.preview_time);
                    make_preview_position();
                }
                if(options.dots) {
                    frame.find('.gallery_dots_frame .gallery_dot[data-targ="'+cur_num+'"]').setActive();
                }
                if(options.images[cur_num].url) {
                    pjax.loadPage(options.images[cur_num].url, {'suppress_load': true});
                    g_btn
                        .filter('.left').attr('href',options.images[get_img_num(-1)].url).end()
                        .filter('.right').attr('href',options.images[get_img_num(1)].url);
                }
                g_btn_test();
                options.afterMove(cur_num);
            }
        }
        function handleHammer(ev) {
            var pos_x=100*ev.gesture.deltaX/gallery_width;
            var pos_y=100*ev.gesture.deltaY/gallery_height;
            switch(ev.type) {
                case 'panstart':
                    gallery_width=frame.width();
                    gallery_height=frame.height();
                    slider_area.addClass('moving');
                    break;
                case 'pan':
                    slider_move(pos_x,pos_y);
                    break;
                case 'swipeleft':
                    slider_move('left');
                    break;
                case 'swiperight':
                    slider_move('right');
                    break;
                case 'panend':
                    if(!zoom) {
                        if(pos_x<-40) {
                            slider_move('left');
                        } else
                        if(pos_x>40) {
                            slider_move('right');
                        } else {
                            slider_move('self');
                        }
                    } else {
                        slider_move(pos_x,pos_y,'end');
                    }
                    break;
            }
        }




        var slider_area=frame.find('.g_s_area');
        var g_btn=frame.find('.g_btn');

        slider_area.prepend('<div class="g_btn_area css_ani left" data-dir="right"></div><div class="g_btn_area css_ani right" data-dir="left"></div>'+(options.dots?'<div class="gallery_dots_frame css_ani"></div>':'')+(options.zoom?'<div class="gallery_zoom_btn css_ani"></div>':''));
        slider_area
            .on('pan panstart panend swipeleft swiperight',handleHammer)
            .hammer()
            .data('hammer').get('pan').set({direction:Hammer.DIRECTION_ALL, threshold:0});

        frame
            .on('click','.g_btn_area, .g_btn',function(e){
                slider_move($(this).data('dir'));
                e.preventDefault();
                return false;
            })
            .on('click','.gallery_dot:not(.active), .g_p:not(.active)',function(e){
                if(slider_move_av) {
                    moveToNumber($(this).data('targ'));
                }
            })
            .on('click','.gallery_zoom_btn',function(){
                slider_area.toggleClass('zoom');
                $(this).toggleClass('active');
                if($(this).hasClass('active')) {
                    set_zoom_on();
                } else {
                    set_zoom_off();
                }
            })
        $('body').on('keydown.gallery',function(e){
            if(e.which==39) {
                slider_move('left');
            } else
            if(e.which==37) {
                slider_move('right');
            }
        })
        if(options.zoom) {
            $(window).on('resize.gallery', function() {
                if(zoom) {
                    check_zoom_img_values(0);
                    slider_move(0,0);
                }
            });
        }


        this.moveToNumber=function(num) {
            moveToNumber(num);
        }
        this.getCurrent=function() {
            return cur_num;
        }
        this.move=function(dir) {
            slider_move(dir);
        }
        this.removeEvents=function() {
            slider.transitionStop(true);
            slider_area.off();
            frame.off();
            $('body').off('.gallery');
            $(window).off('.gallery')
        }

        init_gal();
        return this;
    };
})(jQuery);





// bgSlideshow v0.23
(function($){
    jQuery.fn.slideshowInit=function(options){
        options=$.extend({
            slides: [],
            path: '/assets/images/gallery/',
            interval: 1000,
            time: 500,
            random: false,
            prefix: '.jpg',
            beforeChange:function(img){
                img.css({'opacity':0,'scale':1.1,'translate3d':0})
            },
            finishCSS: {},
            afterChange:function(){},
            changeStart:function(){},
            off: false,
            video: false
        },options);
        var frame=this;
        var slides=options.slides;
        var path=options.path;
        var interval=options.interval;
        var time=options.time;
        var random=options.random;
        var load_timeout;
        var beforeChange=options.beforeChange;
        var afterChange=options.afterChange;
        var finishCSS=options.finishCSS;
        var off=options.off;
        var cur_number=options.start || 0;
        var old_number=options.start || 0;
        var load_av;
        function start_bg_slide() {
            load_av=true;
            clearTimeout(load_timeout);
            load_timeout=setTimeout(function(){
                load_bg_slide(get_bg_slide_num());
            },interval);
        }
        function stop_bg_slide() {
            load_av=false;
            clearTimeout(load_timeout);
        }
        function load_bg_slide(num) {
            clearTimeout(load_timeout);
            cur_number=num;
            load_bg_img();
        }
        function random_num() {
            var r=Math.floor(Math.random()*slides.length);
            if(r!=cur_number) {
                return r;
            } else {
                return random_num();
            }
        }
        function get_bg_slide_num(delta) {
            var num;
            if(!random || delta) {
                num=cur_number+(delta||1);
                if(num>slides.length-1) {
                    num=0;
                } else
                if(num<0) {
                    num=slides.length-1;
                }
            } else {
                num=random_num();
            }
            return num;
        }
        function load_bg_img() {
            var src=path+slides[cur_number]+options.prefix;
            /*if(mobile || !high_speed) {
                src=get_mobile_images(src);
            }*/
            frame.find('.background__image:last').after('<img class="div_100 bg_img video-bg background__image" src="'+src+'" />');
            var img=frame.find('.background__image:last');
            var real_img_number=cur_number;
            var real_old_number=old_number;
            var direction=cur_number>old_number?1:-1;
            beforeChange(img,cur_number,old_number,direction);
            var video_name=slides[real_old_number]+':'+slides[real_img_number];
            img.on('load',function(){
                img.off('load');
                var prev_img=$(this).prevAll('.background__image');
                options.changeStart(img,real_img_number,real_old_number,direction,prev_img);
                img.transition(finishCSS,time,function(){
                    //img.transition({ scale: 1.1 }, 5000);
                    prev_img.remove();
                    afterChange(img,real_img_number);
                    if(load_av) {
                        start_bg_slide();
                    }
                });

            });
            old_number=cur_number;
        }
        if(!off) {
            start_bg_slide();
        }

        this.setOn=function() {
            start_bg_slide();
        }
        this.setOff=function() {
            stop_bg_slide();
        }
        this.removeEvents=function() {
            stop_bg_slide();
        }
        this.loadImgNumber=function(num) {
            load_bg_slide(num);
        }
        this.loadImg=function(num) {
            load_bg_slide(get_bg_slide_num(num));
        }
        this.getCurrent=function() {
            return cur_number;
        }
        return this;
    };
})(jQuery);





















/*!
 Wheelzoom 3.0.4
 license: MIT
 http://www.jacklmoore.com/wheelzoom
 */
window.wheelzoom = (function(){
    var defaults = {
        zoom: 0.10
    };

    var canvas = document.createElement('canvas');

    var main = function(img, options){
        if (!img || !img.nodeName || img.nodeName !== 'IMG') { return; }

        var data_page_resize = $('[data-page-resize]');
        var dpr_min_width = data_page_resize.attr('dpr-min-width');
        var dpr_min_height = data_page_resize.attr('dpr-min-height');
        dpr_min_width = (dpr_min_width != undefined && dpr_min_width != false) ? parseInt(dpr_min_width, 10) : 1650;
        dpr_min_height = (dpr_min_height != undefined && dpr_min_height != false) ? parseInt(dpr_min_height, 10) : 860;
        var min_window_w = dpr_min_width;
        var min_window_h = dpr_min_height;
        var min_window_d = min_window_h / min_window_w;
        var window_w = $(window).width();
        var window_h = $(window).height();
        var window_d = window_h/window_w;
        var mobile_scale = 1;
        if(window_d < min_window_d) {
            mobile_scale = Math.min(1, window_h / min_window_h);
        }
        else
        {
            mobile_scale = Math.min(1, window_w / min_window_w);
        }

        var settings = {};
        var width;
        var height;
        var bgWidth;
        var bgHeight;
        var bgPosX;
        var bgPosY;
        var previousEvent;
        var cachedDataUrl;

        function setSrcToBackground(img) {
            img.style.backgroundImage = 'url("'+img.src+'")';
            img.style.backgroundRepeat = 'no-repeat';
            canvas.width = img.naturalWidth;
            canvas.height = img.naturalHeight;
            cachedDataUrl = canvas.toDataURL();
            img.src = cachedDataUrl;
        }

        function updateBgStyle() {
            if (bgPosX > 0) {
                bgPosX = 0;
            } else if (bgPosX < width - bgWidth) {
                bgPosX = width - bgWidth;
            }

            if (bgPosY > 0) {
                bgPosY = 0;
            } else if (bgPosY < height - bgHeight) {
                bgPosY = height - bgHeight;
            }

            img.style.backgroundSize = bgWidth+'px '+bgHeight +'px';
            img.style.backgroundPosition = bgPosX +'px '+bgPosY +'px';
        }

        function reset() {
            bgWidth = width;
            bgHeight = height;
            bgPosX = bgPosY = 0;
            updateBgStyle();
        }

        function onwheel(e) {
            var deltaY = 0;

            e.preventDefault();

            if (e.deltaY) { // FireFox 17+ (IE9+, Chrome 31+?)
                deltaY = e.deltaY;
            } else if (e.wheelDelta) {
                deltaY = -e.wheelDelta;
            }

            // As far as I know, there is no good cross-browser way to get the cursor position relative to the event target.
            // We have to calculate the target element's position relative to the document, and subtrack that from the
            // cursor's position relative to the document.
            var rect = img.getBoundingClientRect();
            var offsetX = e.pageX - rect.left - window.pageXOffset;
            var offsetY = e.pageY - rect.top - window.pageYOffset;

            // Record the offset between the bg edge and cursor:
            var bgCursorX = offsetX - bgPosX;
            var bgCursorY = offsetY - bgPosY;

            // Use the previous offset to get the percent offset between the bg edge and cursor:
            var bgRatioX = bgCursorX/bgWidth;
            var bgRatioY = bgCursorY/bgHeight;

            // Update the bg size:
            if (deltaY < 0) {
                bgWidth += bgWidth*settings.zoom;
                bgHeight += bgHeight*settings.zoom;
            } else {
                bgWidth -= bgWidth*settings.zoom;
                bgHeight -= bgHeight*settings.zoom;
            }

            // Take the percent offset and apply it to the new size:
            bgPosX = offsetX - (bgWidth * bgRatioX);
            bgPosY = offsetY - (bgHeight * bgRatioY);

            // Prevent zooming out beyond the starting size
            if (bgWidth <= width || bgHeight <= height) {
                reset();
            } else {
                updateBgStyle();
            }
        }

        function drag(e) {
            e.preventDefault();
            bgPosX += (e.pageX - previousEvent.pageX);
            bgPosY += (e.pageY - previousEvent.pageY);
            previousEvent = e;
            updateBgStyle();
        }

        function removeDrag() {
            document.removeEventListener('mouseup', removeDrag);
            document.removeEventListener('mousemove', drag);
        }

        // Make the background draggable
        function draggable(e) {
            e.preventDefault();
            previousEvent = e;
            document.addEventListener('mousemove', drag);
            document.addEventListener('mouseup', removeDrag);
        }

        function load() {
            if (img.src === cachedDataUrl) return;

            var computedStyle = window.getComputedStyle(img, null);

            width = parseInt(computedStyle.width, 10)  / mobile_scale;
            height = parseInt(computedStyle.height, 10)  / mobile_scale;
            bgWidth = width ;
            bgHeight = height;
            bgPosX = 0;
            bgPosY = 0;

            setSrcToBackground(img);

            img.style.backgroundSize =  width+'px '+height+'px';
            img.style.backgroundPosition = '0 0';

            if($(window).width() <= 1380){
                img.style.backgroundPosition = '-474.634px -20px';
            }


            img.addEventListener('wheelzoom.reset', reset);

            img.addEventListener('wheel', onwheel);
            img.addEventListener('mousedown', draggable);
        }

        var destroy = function (originalProperties) {
            img.removeEventListener('wheelzoom.destroy', destroy);
            img.removeEventListener('wheelzoom.reset', reset);
            img.removeEventListener('load', load);
            img.removeEventListener('mouseup', removeDrag);
            img.removeEventListener('mousemove', drag);
            img.removeEventListener('mousedown', draggable);
            img.removeEventListener('wheel', onwheel);

            img.style.backgroundImage = originalProperties.backgroundImage;
            img.style.backgroundRepeat = originalProperties.backgroundRepeat;
            img.src = originalProperties.src;
        }.bind(null, {
                backgroundImage: img.style.backgroundImage,
                backgroundRepeat: img.style.backgroundRepeat,
                src: img.src
            });

        img.addEventListener('wheelzoom.destroy', destroy);

        options = options || {};

        Object.keys(defaults).forEach(function(key){
            settings[key] = options[key] !== undefined ? options[key] : defaults[key];
        });

        if (img.complete) {
            load();
        }

        img.addEventListener('load', load);
    };

    // Do nothing in IE8
    if (typeof window.getComputedStyle !== 'function') {
        return function(elements) {
            return elements;
        };
    } else {
        return function(elements, options) {
            if (elements && elements.length) {
                Array.prototype.forEach.call(elements, main, options);
            } else if (elements && elements.nodeName) {
                main(elements, options);
            }
            return elements;
        };
    }
}());





// bgSlideshow v0.23
(function($) {
    jQuery.getMobileScale = function (options) {
        //var data_page_resize = $('[data-page-resize]');
        //var dpr_min_width = data_page_resize.attr('dpr-min-width');
        //var dpr_min_height = data_page_resize.attr('dpr-min-height');
        var dpr_min_width = 1920;
        var dpr_min_height = 1080;

        var USER_AGENT = navigator.userAgent.toLowerCase();
        var isMobileDevice = false;
        if (/android|webos|iphone|ipad|ipod|blackberry|iemobile|opera mini/.test(USER_AGENT)) {
            isMobileDevice = true;
        }

        if(isMobileDevice == true){
            dpr_min_width = 1250;
            dpr_min_width = 650;
        }

        var mobile_scale = 1;
        var body_size = $('body');
        var centrer1 = $('.dynamic__frame__resize');
        var ratio = 0.5625;
        var frame_w, frame_h, frame_d, centrer1_w, centrer1_h;
        var min_window_w = dpr_min_width;
        var min_window_h = dpr_min_height;
        var min_window_d = min_window_h / min_window_w;
        var window_w = $(window).width();
        var window_h = $(window).height();
        var window_d = window_h/window_w;

        if(window_d < min_window_d)
        {
            return mobile_scale = Math.min(1, window_h / min_window_h);
            body_size.css({
                'min-width': window_w / mobile_scale, 'min-height': min_window_h,
                'transformOrigin': '0 0', 'scale': mobile_scale, '-webkit-transform': 'scale(' + mobile_scale  + ')'
            });
        }
        else
        {
            return mobile_scale = Math.min(1, window_w / min_window_w);
        }
    }
})(jQuery);