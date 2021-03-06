/**
 * Created by user on 15.12.2016.
 */
(function()
{
    /* jQuery v3.1.0 | (c) jQuery Foundation | jquery.org/license */
    /*! jQuery v2.1.4 | (c) 2005, 2015 jQuery Foundation, Inc. | jquery.org/license */
    !function(a,b){"object"==typeof module&&"object"==typeof module.exports?module.exports=a.document?b(a,!0):function(a){if(!a.document)throw new Error("jQuery requires a window with a document");return b(a)}:b(a)}("undefined"!=typeof window?window:this,function(a,b){var c=[],d=c.slice,e=c.concat,f=c.push,g=c.indexOf,h={},i=h.toString,j=h.hasOwnProperty,k={},l=a.document,m="2.1.4",n=function(a,b){return new n.fn.init(a,b)},o=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,p=/^-ms-/,q=/-([\da-z])/gi,r=function(a,b){return b.toUpperCase()};n.fn=n.prototype={jquery:m,constructor:n,selector:"",length:0,toArray:function(){return d.call(this)},get:function(a){return null!=a?0>a?this[a+this.length]:this[a]:d.call(this)},pushStack:function(a){var b=n.merge(this.constructor(),a);return b.prevObject=this,b.context=this.context,b},each:function(a,b){return n.each(this,a,b)},map:function(a){return this.pushStack(n.map(this,function(b,c){return a.call(b,c,b)}))},slice:function(){return this.pushStack(d.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},eq:function(a){var b=this.length,c=+a+(0>a?b:0);return this.pushStack(c>=0&&b>c?[this[c]]:[])},end:function(){return this.prevObject||this.constructor(null)},push:f,sort:c.sort,splice:c.splice},n.extend=n.fn.extend=function(){var a,b,c,d,e,f,g=arguments[0]||{},h=1,i=arguments.length,j=!1;for("boolean"==typeof g&&(j=g,g=arguments[h]||{},h++),"object"==typeof g||n.isFunction(g)||(g={}),h===i&&(g=this,h--);i>h;h++)if(null!=(a=arguments[h]))for(b in a)c=g[b],d=a[b],g!==d&&(j&&d&&(n.isPlainObject(d)||(e=n.isArray(d)))?(e?(e=!1,f=c&&n.isArray(c)?c:[]):f=c&&n.isPlainObject(c)?c:{},g[b]=n.extend(j,f,d)):void 0!==d&&(g[b]=d));return g},n.extend({expando:"jQuery"+(m+Math.random()).replace(/\D/g,""),isReady:!0,error:function(a){throw new Error(a)},noop:function(){},isFunction:function(a){return"function"===n.type(a)},isArray:Array.isArray,isWindow:function(a){return null!=a&&a===a.window},isNumeric:function(a){return!n.isArray(a)&&a-parseFloat(a)+1>=0},isPlainObject:function(a){return"object"!==n.type(a)||a.nodeType||n.isWindow(a)?!1:a.constructor&&!j.call(a.constructor.prototype,"isPrototypeOf")?!1:!0},isEmptyObject:function(a){var b;for(b in a)return!1;return!0},type:function(a){return null==a?a+"":"object"==typeof a||"function"==typeof a?h[i.call(a)]||"object":typeof a},globalEval:function(a){var b,c=eval;a=n.trim(a),a&&(1===a.indexOf("use strict")?(b=l.createElement("script"),b.text=a,l.head.appendChild(b).parentNode.removeChild(b)):c(a))},camelCase:function(a){return a.replace(p,"ms-").replace(q,r)},nodeName:function(a,b){return a.nodeName&&a.nodeName.toLowerCase()===b.toLowerCase()},each:function(a,b,c){var d,e=0,f=a.length,g=s(a);if(c){if(g){for(;f>e;e++)if(d=b.apply(a[e],c),d===!1)break}else for(e in a)if(d=b.apply(a[e],c),d===!1)break}else if(g){for(;f>e;e++)if(d=b.call(a[e],e,a[e]),d===!1)break}else for(e in a)if(d=b.call(a[e],e,a[e]),d===!1)break;return a},trim:function(a){return null==a?"":(a+"").replace(o,"")},makeArray:function(a,b){var c=b||[];return null!=a&&(s(Object(a))?n.merge(c,"string"==typeof a?[a]:a):f.call(c,a)),c},inArray:function(a,b,c){return null==b?-1:g.call(b,a,c)},merge:function(a,b){for(var c=+b.length,d=0,e=a.length;c>d;d++)a[e++]=b[d];return a.length=e,a},grep:function(a,b,c){for(var d,e=[],f=0,g=a.length,h=!c;g>f;f++)d=!b(a[f],f),d!==h&&e.push(a[f]);return e},map:function(a,b,c){var d,f=0,g=a.length,h=s(a),i=[];if(h)for(;g>f;f++)d=b(a[f],f,c),null!=d&&i.push(d);else for(f in a)d=b(a[f],f,c),null!=d&&i.push(d);return e.apply([],i)},guid:1,proxy:function(a,b){var c,e,f;return"string"==typeof b&&(c=a[b],b=a,a=c),n.isFunction(a)?(e=d.call(arguments,2),f=function(){return a.apply(b||this,e.concat(d.call(arguments)))},f.guid=a.guid=a.guid||n.guid++,f):void 0},now:Date.now,support:k}),n.each("Boolean Number String Function Array Date RegExp Object Error".split(" "),function(a,b){h["[object "+b+"]"]=b.toLowerCase()});function s(a){var b="length"in a&&a.length,c=n.type(a);return"function"===c||n.isWindow(a)?!1:1===a.nodeType&&b?!0:"array"===c||0===b||"number"==typeof b&&b>0&&b-1 in a}var t=function(a){var b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u="sizzle"+1*new Date,v=a.document,w=0,x=0,y=ha(),z=ha(),A=ha(),B=function(a,b){return a===b&&(l=!0),0},C=1<<31,D={}.hasOwnProperty,E=[],F=E.pop,G=E.push,H=E.push,I=E.slice,J=function(a,b){for(var c=0,d=a.length;d>c;c++)if(a[c]===b)return c;return-1},K="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",L="[\\x20\\t\\r\\n\\f]",M="(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",N=M.replace("w","w#"),O="\\["+L+"*("+M+")(?:"+L+"*([*^$|!~]?=)"+L+"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|("+N+"))|)"+L+"*\\]",P=":("+M+")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|"+O+")*)|.*)\\)|)",Q=new RegExp(L+"+","g"),R=new RegExp("^"+L+"+|((?:^|[^\\\\])(?:\\\\.)*)"+L+"+$","g"),S=new RegExp("^"+L+"*,"+L+"*"),T=new RegExp("^"+L+"*([>+~]|"+L+")"+L+"*"),U=new RegExp("="+L+"*([^\\]'\"]*?)"+L+"*\\]","g"),V=new RegExp(P),W=new RegExp("^"+N+"$"),X={ID:new RegExp("^#("+M+")"),CLASS:new RegExp("^\\.("+M+")"),TAG:new RegExp("^("+M.replace("w","w*")+")"),ATTR:new RegExp("^"+O),PSEUDO:new RegExp("^"+P),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+L+"*(even|odd|(([+-]|)(\\d*)n|)"+L+"*(?:([+-]|)"+L+"*(\\d+)|))"+L+"*\\)|)","i"),bool:new RegExp("^(?:"+K+")$","i"),needsContext:new RegExp("^"+L+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+L+"*((?:-\\d)?\\d*)"+L+"*\\)|)(?=[^-]|$)","i")},Y=/^(?:input|select|textarea|button)$/i,Z=/^h\d$/i,$=/^[^{]+\{\s*\[native \w/,_=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,aa=/[+~]/,ba=/'|\\/g,ca=new RegExp("\\\\([\\da-f]{1,6}"+L+"?|("+L+")|.)","ig"),da=function(a,b,c){var d="0x"+b-65536;return d!==d||c?b:0>d?String.fromCharCode(d+65536):String.fromCharCode(d>>10|55296,1023&d|56320)},ea=function(){m()};try{H.apply(E=I.call(v.childNodes),v.childNodes),E[v.childNodes.length].nodeType}catch(fa){H={apply:E.length?function(a,b){G.apply(a,I.call(b))}:function(a,b){var c=a.length,d=0;while(a[c++]=b[d++]);a.length=c-1}}}function ga(a,b,d,e){var f,h,j,k,l,o,r,s,w,x;if((b?b.ownerDocument||b:v)!==n&&m(b),b=b||n,d=d||[],k=b.nodeType,"string"!=typeof a||!a||1!==k&&9!==k&&11!==k)return d;if(!e&&p){if(11!==k&&(f=_.exec(a)))if(j=f[1]){if(9===k){if(h=b.getElementById(j),!h||!h.parentNode)return d;if(h.id===j)return d.push(h),d}else if(b.ownerDocument&&(h=b.ownerDocument.getElementById(j))&&t(b,h)&&h.id===j)return d.push(h),d}else{if(f[2])return H.apply(d,b.getElementsByTagName(a)),d;if((j=f[3])&&c.getElementsByClassName)return H.apply(d,b.getElementsByClassName(j)),d}if(c.qsa&&(!q||!q.test(a))){if(s=r=u,w=b,x=1!==k&&a,1===k&&"object"!==b.nodeName.toLowerCase()){o=g(a),(r=b.getAttribute("id"))?s=r.replace(ba,"\\$&"):b.setAttribute("id",s),s="[id='"+s+"'] ",l=o.length;while(l--)o[l]=s+ra(o[l]);w=aa.test(a)&&pa(b.parentNode)||b,x=o.join(",")}if(x)try{return H.apply(d,w.querySelectorAll(x)),d}catch(y){}finally{r||b.removeAttribute("id")}}}return i(a.replace(R,"$1"),b,d,e)}function ha(){var a=[];function b(c,e){return a.push(c+" ")>d.cacheLength&&delete b[a.shift()],b[c+" "]=e}return b}function ia(a){return a[u]=!0,a}function ja(a){var b=n.createElement("div");try{return!!a(b)}catch(c){return!1}finally{b.parentNode&&b.parentNode.removeChild(b),b=null}}function ka(a,b){var c=a.split("|"),e=a.length;while(e--)d.attrHandle[c[e]]=b}function la(a,b){var c=b&&a,d=c&&1===a.nodeType&&1===b.nodeType&&(~b.sourceIndex||C)-(~a.sourceIndex||C);if(d)return d;if(c)while(c=c.nextSibling)if(c===b)return-1;return a?1:-1}function ma(a){return function(b){var c=b.nodeName.toLowerCase();return"input"===c&&b.type===a}}function na(a){return function(b){var c=b.nodeName.toLowerCase();return("input"===c||"button"===c)&&b.type===a}}function oa(a){return ia(function(b){return b=+b,ia(function(c,d){var e,f=a([],c.length,b),g=f.length;while(g--)c[e=f[g]]&&(c[e]=!(d[e]=c[e]))})})}function pa(a){return a&&"undefined"!=typeof a.getElementsByTagName&&a}c=ga.support={},f=ga.isXML=function(a){var b=a&&(a.ownerDocument||a).documentElement;return b?"HTML"!==b.nodeName:!1},m=ga.setDocument=function(a){var b,e,g=a?a.ownerDocument||a:v;return g!==n&&9===g.nodeType&&g.documentElement?(n=g,o=g.documentElement,e=g.defaultView,e&&e!==e.top&&(e.addEventListener?e.addEventListener("unload",ea,!1):e.attachEvent&&e.attachEvent("onunload",ea)),p=!f(g),c.attributes=ja(function(a){return a.className="i",!a.getAttribute("className")}),c.getElementsByTagName=ja(function(a){return a.appendChild(g.createComment("")),!a.getElementsByTagName("*").length}),c.getElementsByClassName=$.test(g.getElementsByClassName),c.getById=ja(function(a){return o.appendChild(a).id=u,!g.getElementsByName||!g.getElementsByName(u).length}),c.getById?(d.find.ID=function(a,b){if("undefined"!=typeof b.getElementById&&p){var c=b.getElementById(a);return c&&c.parentNode?[c]:[]}},d.filter.ID=function(a){var b=a.replace(ca,da);return function(a){return a.getAttribute("id")===b}}):(delete d.find.ID,d.filter.ID=function(a){var b=a.replace(ca,da);return function(a){var c="undefined"!=typeof a.getAttributeNode&&a.getAttributeNode("id");return c&&c.value===b}}),d.find.TAG=c.getElementsByTagName?function(a,b){return"undefined"!=typeof b.getElementsByTagName?b.getElementsByTagName(a):c.qsa?b.querySelectorAll(a):void 0}:function(a,b){var c,d=[],e=0,f=b.getElementsByTagName(a);if("*"===a){while(c=f[e++])1===c.nodeType&&d.push(c);return d}return f},d.find.CLASS=c.getElementsByClassName&&function(a,b){return p?b.getElementsByClassName(a):void 0},r=[],q=[],(c.qsa=$.test(g.querySelectorAll))&&(ja(function(a){o.appendChild(a).innerHTML="<a id='"+u+"'></a><select id='"+u+"-\f]' msallowcapture=''><option selected=''></option></select>",a.querySelectorAll("[msallowcapture^='']").length&&q.push("[*^$]="+L+"*(?:''|\"\")"),a.querySelectorAll("[selected]").length||q.push("\\["+L+"*(?:value|"+K+")"),a.querySelectorAll("[id~="+u+"-]").length||q.push("~="),a.querySelectorAll(":checked").length||q.push(":checked"),a.querySelectorAll("a#"+u+"+*").length||q.push(".#.+[+~]")}),ja(function(a){var b=g.createElement("input");b.setAttribute("type","hidden"),a.appendChild(b).setAttribute("name","D"),a.querySelectorAll("[name=d]").length&&q.push("name"+L+"*[*^$|!~]?="),a.querySelectorAll(":enabled").length||q.push(":enabled",":disabled"),a.querySelectorAll("*,:x"),q.push(",.*:")})),(c.matchesSelector=$.test(s=o.matches||o.webkitMatchesSelector||o.mozMatchesSelector||o.oMatchesSelector||o.msMatchesSelector))&&ja(function(a){c.disconnectedMatch=s.call(a,"div"),s.call(a,"[s!='']:x"),r.push("!=",P)}),q=q.length&&new RegExp(q.join("|")),r=r.length&&new RegExp(r.join("|")),b=$.test(o.compareDocumentPosition),t=b||$.test(o.contains)?function(a,b){var c=9===a.nodeType?a.documentElement:a,d=b&&b.parentNode;return a===d||!(!d||1!==d.nodeType||!(c.contains?c.contains(d):a.compareDocumentPosition&&16&a.compareDocumentPosition(d)))}:function(a,b){if(b)while(b=b.parentNode)if(b===a)return!0;return!1},B=b?function(a,b){if(a===b)return l=!0,0;var d=!a.compareDocumentPosition-!b.compareDocumentPosition;return d?d:(d=(a.ownerDocument||a)===(b.ownerDocument||b)?a.compareDocumentPosition(b):1,1&d||!c.sortDetached&&b.compareDocumentPosition(a)===d?a===g||a.ownerDocument===v&&t(v,a)?-1:b===g||b.ownerDocument===v&&t(v,b)?1:k?J(k,a)-J(k,b):0:4&d?-1:1)}:function(a,b){if(a===b)return l=!0,0;var c,d=0,e=a.parentNode,f=b.parentNode,h=[a],i=[b];if(!e||!f)return a===g?-1:b===g?1:e?-1:f?1:k?J(k,a)-J(k,b):0;if(e===f)return la(a,b);c=a;while(c=c.parentNode)h.unshift(c);c=b;while(c=c.parentNode)i.unshift(c);while(h[d]===i[d])d++;return d?la(h[d],i[d]):h[d]===v?-1:i[d]===v?1:0},g):n},ga.matches=function(a,b){return ga(a,null,null,b)},ga.matchesSelector=function(a,b){if((a.ownerDocument||a)!==n&&m(a),b=b.replace(U,"='$1']"),!(!c.matchesSelector||!p||r&&r.test(b)||q&&q.test(b)))try{var d=s.call(a,b);if(d||c.disconnectedMatch||a.document&&11!==a.document.nodeType)return d}catch(e){}return ga(b,n,null,[a]).length>0},ga.contains=function(a,b){return(a.ownerDocument||a)!==n&&m(a),t(a,b)},ga.attr=function(a,b){(a.ownerDocument||a)!==n&&m(a);var e=d.attrHandle[b.toLowerCase()],f=e&&D.call(d.attrHandle,b.toLowerCase())?e(a,b,!p):void 0;return void 0!==f?f:c.attributes||!p?a.getAttribute(b):(f=a.getAttributeNode(b))&&f.specified?f.value:null},ga.error=function(a){throw new Error("Syntax error, unrecognized expression: "+a)},ga.uniqueSort=function(a){var b,d=[],e=0,f=0;if(l=!c.detectDuplicates,k=!c.sortStable&&a.slice(0),a.sort(B),l){while(b=a[f++])b===a[f]&&(e=d.push(f));while(e--)a.splice(d[e],1)}return k=null,a},e=ga.getText=function(a){var b,c="",d=0,f=a.nodeType;if(f){if(1===f||9===f||11===f){if("string"==typeof a.textContent)return a.textContent;for(a=a.firstChild;a;a=a.nextSibling)c+=e(a)}else if(3===f||4===f)return a.nodeValue}else while(b=a[d++])c+=e(b);return c},d=ga.selectors={cacheLength:50,createPseudo:ia,match:X,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(a){return a[1]=a[1].replace(ca,da),a[3]=(a[3]||a[4]||a[5]||"").replace(ca,da),"~="===a[2]&&(a[3]=" "+a[3]+" "),a.slice(0,4)},CHILD:function(a){return a[1]=a[1].toLowerCase(),"nth"===a[1].slice(0,3)?(a[3]||ga.error(a[0]),a[4]=+(a[4]?a[5]+(a[6]||1):2*("even"===a[3]||"odd"===a[3])),a[5]=+(a[7]+a[8]||"odd"===a[3])):a[3]&&ga.error(a[0]),a},PSEUDO:function(a){var b,c=!a[6]&&a[2];return X.CHILD.test(a[0])?null:(a[3]?a[2]=a[4]||a[5]||"":c&&V.test(c)&&(b=g(c,!0))&&(b=c.indexOf(")",c.length-b)-c.length)&&(a[0]=a[0].slice(0,b),a[2]=c.slice(0,b)),a.slice(0,3))}},filter:{TAG:function(a){var b=a.replace(ca,da).toLowerCase();return"*"===a?function(){return!0}:function(a){return a.nodeName&&a.nodeName.toLowerCase()===b}},CLASS:function(a){var b=y[a+" "];return b||(b=new RegExp("(^|"+L+")"+a+"("+L+"|$)"))&&y(a,function(a){return b.test("string"==typeof a.className&&a.className||"undefined"!=typeof a.getAttribute&&a.getAttribute("class")||"")})},ATTR:function(a,b,c){return function(d){var e=ga.attr(d,a);return null==e?"!="===b:b?(e+="","="===b?e===c:"!="===b?e!==c:"^="===b?c&&0===e.indexOf(c):"*="===b?c&&e.indexOf(c)>-1:"$="===b?c&&e.slice(-c.length)===c:"~="===b?(" "+e.replace(Q," ")+" ").indexOf(c)>-1:"|="===b?e===c||e.slice(0,c.length+1)===c+"-":!1):!0}},CHILD:function(a,b,c,d,e){var f="nth"!==a.slice(0,3),g="last"!==a.slice(-4),h="of-type"===b;return 1===d&&0===e?function(a){return!!a.parentNode}:function(b,c,i){var j,k,l,m,n,o,p=f!==g?"nextSibling":"previousSibling",q=b.parentNode,r=h&&b.nodeName.toLowerCase(),s=!i&&!h;if(q){if(f){while(p){l=b;while(l=l[p])if(h?l.nodeName.toLowerCase()===r:1===l.nodeType)return!1;o=p="only"===a&&!o&&"nextSibling"}return!0}if(o=[g?q.firstChild:q.lastChild],g&&s){k=q[u]||(q[u]={}),j=k[a]||[],n=j[0]===w&&j[1],m=j[0]===w&&j[2],l=n&&q.childNodes[n];while(l=++n&&l&&l[p]||(m=n=0)||o.pop())if(1===l.nodeType&&++m&&l===b){k[a]=[w,n,m];break}}else if(s&&(j=(b[u]||(b[u]={}))[a])&&j[0]===w)m=j[1];else while(l=++n&&l&&l[p]||(m=n=0)||o.pop())if((h?l.nodeName.toLowerCase()===r:1===l.nodeType)&&++m&&(s&&((l[u]||(l[u]={}))[a]=[w,m]),l===b))break;return m-=e,m===d||m%d===0&&m/d>=0}}},PSEUDO:function(a,b){var c,e=d.pseudos[a]||d.setFilters[a.toLowerCase()]||ga.error("unsupported pseudo: "+a);return e[u]?e(b):e.length>1?(c=[a,a,"",b],d.setFilters.hasOwnProperty(a.toLowerCase())?ia(function(a,c){var d,f=e(a,b),g=f.length;while(g--)d=J(a,f[g]),a[d]=!(c[d]=f[g])}):function(a){return e(a,0,c)}):e}},pseudos:{not:ia(function(a){var b=[],c=[],d=h(a.replace(R,"$1"));return d[u]?ia(function(a,b,c,e){var f,g=d(a,null,e,[]),h=a.length;while(h--)(f=g[h])&&(a[h]=!(b[h]=f))}):function(a,e,f){return b[0]=a,d(b,null,f,c),b[0]=null,!c.pop()}}),has:ia(function(a){return function(b){return ga(a,b).length>0}}),contains:ia(function(a){return a=a.replace(ca,da),function(b){return(b.textContent||b.innerText||e(b)).indexOf(a)>-1}}),lang:ia(function(a){return W.test(a||"")||ga.error("unsupported lang: "+a),a=a.replace(ca,da).toLowerCase(),function(b){var c;do if(c=p?b.lang:b.getAttribute("xml:lang")||b.getAttribute("lang"))return c=c.toLowerCase(),c===a||0===c.indexOf(a+"-");while((b=b.parentNode)&&1===b.nodeType);return!1}}),target:function(b){var c=a.location&&a.location.hash;return c&&c.slice(1)===b.id},root:function(a){return a===o},focus:function(a){return a===n.activeElement&&(!n.hasFocus||n.hasFocus())&&!!(a.type||a.href||~a.tabIndex)},enabled:function(a){return a.disabled===!1},disabled:function(a){return a.disabled===!0},checked:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&!!a.checked||"option"===b&&!!a.selected},selected:function(a){return a.parentNode&&a.parentNode.selectedIndex,a.selected===!0},empty:function(a){for(a=a.firstChild;a;a=a.nextSibling)if(a.nodeType<6)return!1;return!0},parent:function(a){return!d.pseudos.empty(a)},header:function(a){return Z.test(a.nodeName)},input:function(a){return Y.test(a.nodeName)},button:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&"button"===a.type||"button"===b},text:function(a){var b;return"input"===a.nodeName.toLowerCase()&&"text"===a.type&&(null==(b=a.getAttribute("type"))||"text"===b.toLowerCase())},first:oa(function(){return[0]}),last:oa(function(a,b){return[b-1]}),eq:oa(function(a,b,c){return[0>c?c+b:c]}),even:oa(function(a,b){for(var c=0;b>c;c+=2)a.push(c);return a}),odd:oa(function(a,b){for(var c=1;b>c;c+=2)a.push(c);return a}),lt:oa(function(a,b,c){for(var d=0>c?c+b:c;--d>=0;)a.push(d);return a}),gt:oa(function(a,b,c){for(var d=0>c?c+b:c;++d<b;)a.push(d);return a})}},d.pseudos.nth=d.pseudos.eq;for(b in{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})d.pseudos[b]=ma(b);for(b in{submit:!0,reset:!0})d.pseudos[b]=na(b);function qa(){}qa.prototype=d.filters=d.pseudos,d.setFilters=new qa,g=ga.tokenize=function(a,b){var c,e,f,g,h,i,j,k=z[a+" "];if(k)return b?0:k.slice(0);h=a,i=[],j=d.preFilter;while(h){(!c||(e=S.exec(h)))&&(e&&(h=h.slice(e[0].length)||h),i.push(f=[])),c=!1,(e=T.exec(h))&&(c=e.shift(),f.push({value:c,type:e[0].replace(R," ")}),h=h.slice(c.length));for(g in d.filter)!(e=X[g].exec(h))||j[g]&&!(e=j[g](e))||(c=e.shift(),f.push({value:c,type:g,matches:e}),h=h.slice(c.length));if(!c)break}return b?h.length:h?ga.error(a):z(a,i).slice(0)};function ra(a){for(var b=0,c=a.length,d="";c>b;b++)d+=a[b].value;return d}function sa(a,b,c){var d=b.dir,e=c&&"parentNode"===d,f=x++;return b.first?function(b,c,f){while(b=b[d])if(1===b.nodeType||e)return a(b,c,f)}:function(b,c,g){var h,i,j=[w,f];if(g){while(b=b[d])if((1===b.nodeType||e)&&a(b,c,g))return!0}else while(b=b[d])if(1===b.nodeType||e){if(i=b[u]||(b[u]={}),(h=i[d])&&h[0]===w&&h[1]===f)return j[2]=h[2];if(i[d]=j,j[2]=a(b,c,g))return!0}}}function ta(a){return a.length>1?function(b,c,d){var e=a.length;while(e--)if(!a[e](b,c,d))return!1;return!0}:a[0]}function ua(a,b,c){for(var d=0,e=b.length;e>d;d++)ga(a,b[d],c);return c}function va(a,b,c,d,e){for(var f,g=[],h=0,i=a.length,j=null!=b;i>h;h++)(f=a[h])&&(!c||c(f,d,e))&&(g.push(f),j&&b.push(h));return g}function wa(a,b,c,d,e,f){return d&&!d[u]&&(d=wa(d)),e&&!e[u]&&(e=wa(e,f)),ia(function(f,g,h,i){var j,k,l,m=[],n=[],o=g.length,p=f||ua(b||"*",h.nodeType?[h]:h,[]),q=!a||!f&&b?p:va(p,m,a,h,i),r=c?e||(f?a:o||d)?[]:g:q;if(c&&c(q,r,h,i),d){j=va(r,n),d(j,[],h,i),k=j.length;while(k--)(l=j[k])&&(r[n[k]]=!(q[n[k]]=l))}if(f){if(e||a){if(e){j=[],k=r.length;while(k--)(l=r[k])&&j.push(q[k]=l);e(null,r=[],j,i)}k=r.length;while(k--)(l=r[k])&&(j=e?J(f,l):m[k])>-1&&(f[j]=!(g[j]=l))}}else r=va(r===g?r.splice(o,r.length):r),e?e(null,g,r,i):H.apply(g,r)})}function xa(a){for(var b,c,e,f=a.length,g=d.relative[a[0].type],h=g||d.relative[" "],i=g?1:0,k=sa(function(a){return a===b},h,!0),l=sa(function(a){return J(b,a)>-1},h,!0),m=[function(a,c,d){var e=!g&&(d||c!==j)||((b=c).nodeType?k(a,c,d):l(a,c,d));return b=null,e}];f>i;i++)if(c=d.relative[a[i].type])m=[sa(ta(m),c)];else{if(c=d.filter[a[i].type].apply(null,a[i].matches),c[u]){for(e=++i;f>e;e++)if(d.relative[a[e].type])break;return wa(i>1&&ta(m),i>1&&ra(a.slice(0,i-1).concat({value:" "===a[i-2].type?"*":""})).replace(R,"$1"),c,e>i&&xa(a.slice(i,e)),f>e&&xa(a=a.slice(e)),f>e&&ra(a))}m.push(c)}return ta(m)}function ya(a,b){var c=b.length>0,e=a.length>0,f=function(f,g,h,i,k){var l,m,o,p=0,q="0",r=f&&[],s=[],t=j,u=f||e&&d.find.TAG("*",k),v=w+=null==t?1:Math.random()||.1,x=u.length;for(k&&(j=g!==n&&g);q!==x&&null!=(l=u[q]);q++){if(e&&l){m=0;while(o=a[m++])if(o(l,g,h)){i.push(l);break}k&&(w=v)}c&&((l=!o&&l)&&p--,f&&r.push(l))}if(p+=q,c&&q!==p){m=0;while(o=b[m++])o(r,s,g,h);if(f){if(p>0)while(q--)r[q]||s[q]||(s[q]=F.call(i));s=va(s)}H.apply(i,s),k&&!f&&s.length>0&&p+b.length>1&&ga.uniqueSort(i)}return k&&(w=v,j=t),r};return c?ia(f):f}return h=ga.compile=function(a,b){var c,d=[],e=[],f=A[a+" "];if(!f){b||(b=g(a)),c=b.length;while(c--)f=xa(b[c]),f[u]?d.push(f):e.push(f);f=A(a,ya(e,d)),f.selector=a}return f},i=ga.select=function(a,b,e,f){var i,j,k,l,m,n="function"==typeof a&&a,o=!f&&g(a=n.selector||a);if(e=e||[],1===o.length){if(j=o[0]=o[0].slice(0),j.length>2&&"ID"===(k=j[0]).type&&c.getById&&9===b.nodeType&&p&&d.relative[j[1].type]){if(b=(d.find.ID(k.matches[0].replace(ca,da),b)||[])[0],!b)return e;n&&(b=b.parentNode),a=a.slice(j.shift().value.length)}i=X.needsContext.test(a)?0:j.length;while(i--){if(k=j[i],d.relative[l=k.type])break;if((m=d.find[l])&&(f=m(k.matches[0].replace(ca,da),aa.test(j[0].type)&&pa(b.parentNode)||b))){if(j.splice(i,1),a=f.length&&ra(j),!a)return H.apply(e,f),e;break}}}return(n||h(a,o))(f,b,!p,e,aa.test(a)&&pa(b.parentNode)||b),e},c.sortStable=u.split("").sort(B).join("")===u,c.detectDuplicates=!!l,m(),c.sortDetached=ja(function(a){return 1&a.compareDocumentPosition(n.createElement("div"))}),ja(function(a){return a.innerHTML="<a href='#'></a>","#"===a.firstChild.getAttribute("href")})||ka("type|href|height|width",function(a,b,c){return c?void 0:a.getAttribute(b,"type"===b.toLowerCase()?1:2)}),c.attributes&&ja(function(a){return a.innerHTML="<input/>",a.firstChild.setAttribute("value",""),""===a.firstChild.getAttribute("value")})||ka("value",function(a,b,c){return c||"input"!==a.nodeName.toLowerCase()?void 0:a.defaultValue}),ja(function(a){return null==a.getAttribute("disabled")})||ka(K,function(a,b,c){var d;return c?void 0:a[b]===!0?b.toLowerCase():(d=a.getAttributeNode(b))&&d.specified?d.value:null}),ga}(a);n.find=t,n.expr=t.selectors,n.expr[":"]=n.expr.pseudos,n.unique=t.uniqueSort,n.text=t.getText,n.isXMLDoc=t.isXML,n.contains=t.contains;var u=n.expr.match.needsContext,v=/^<(\w+)\s*\/?>(?:<\/\1>|)$/,w=/^.[^:#\[\.,]*$/;function x(a,b,c){if(n.isFunction(b))return n.grep(a,function(a,d){return!!b.call(a,d,a)!==c});if(b.nodeType)return n.grep(a,function(a){return a===b!==c});if("string"==typeof b){if(w.test(b))return n.filter(b,a,c);b=n.filter(b,a)}return n.grep(a,function(a){return g.call(b,a)>=0!==c})}n.filter=function(a,b,c){var d=b[0];return c&&(a=":not("+a+")"),1===b.length&&1===d.nodeType?n.find.matchesSelector(d,a)?[d]:[]:n.find.matches(a,n.grep(b,function(a){return 1===a.nodeType}))},n.fn.extend({find:function(a){var b,c=this.length,d=[],e=this;if("string"!=typeof a)return this.pushStack(n(a).filter(function(){for(b=0;c>b;b++)if(n.contains(e[b],this))return!0}));for(b=0;c>b;b++)n.find(a,e[b],d);return d=this.pushStack(c>1?n.unique(d):d),d.selector=this.selector?this.selector+" "+a:a,d},filter:function(a){return this.pushStack(x(this,a||[],!1))},not:function(a){return this.pushStack(x(this,a||[],!0))},is:function(a){return!!x(this,"string"==typeof a&&u.test(a)?n(a):a||[],!1).length}});var y,z=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,A=n.fn.init=function(a,b){var c,d;if(!a)return this;if("string"==typeof a){if(c="<"===a[0]&&">"===a[a.length-1]&&a.length>=3?[null,a,null]:z.exec(a),!c||!c[1]&&b)return!b||b.jquery?(b||y).find(a):this.constructor(b).find(a);if(c[1]){if(b=b instanceof n?b[0]:b,n.merge(this,n.parseHTML(c[1],b&&b.nodeType?b.ownerDocument||b:l,!0)),v.test(c[1])&&n.isPlainObject(b))for(c in b)n.isFunction(this[c])?this[c](b[c]):this.attr(c,b[c]);return this}return d=l.getElementById(c[2]),d&&d.parentNode&&(this.length=1,this[0]=d),this.context=l,this.selector=a,this}return a.nodeType?(this.context=this[0]=a,this.length=1,this):n.isFunction(a)?"undefined"!=typeof y.ready?y.ready(a):a(n):(void 0!==a.selector&&(this.selector=a.selector,this.context=a.context),n.makeArray(a,this))};A.prototype=n.fn,y=n(l);var B=/^(?:parents|prev(?:Until|All))/,C={children:!0,contents:!0,next:!0,prev:!0};n.extend({dir:function(a,b,c){var d=[],e=void 0!==c;while((a=a[b])&&9!==a.nodeType)if(1===a.nodeType){if(e&&n(a).is(c))break;d.push(a)}return d},sibling:function(a,b){for(var c=[];a;a=a.nextSibling)1===a.nodeType&&a!==b&&c.push(a);return c}}),n.fn.extend({has:function(a){var b=n(a,this),c=b.length;return this.filter(function(){for(var a=0;c>a;a++)if(n.contains(this,b[a]))return!0})},closest:function(a,b){for(var c,d=0,e=this.length,f=[],g=u.test(a)||"string"!=typeof a?n(a,b||this.context):0;e>d;d++)for(c=this[d];c&&c!==b;c=c.parentNode)if(c.nodeType<11&&(g?g.index(c)>-1:1===c.nodeType&&n.find.matchesSelector(c,a))){f.push(c);break}return this.pushStack(f.length>1?n.unique(f):f)},index:function(a){return a?"string"==typeof a?g.call(n(a),this[0]):g.call(this,a.jquery?a[0]:a):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(a,b){return this.pushStack(n.unique(n.merge(this.get(),n(a,b))))},addBack:function(a){return this.add(null==a?this.prevObject:this.prevObject.filter(a))}});function D(a,b){while((a=a[b])&&1!==a.nodeType);return a}n.each({parent:function(a){var b=a.parentNode;return b&&11!==b.nodeType?b:null},parents:function(a){return n.dir(a,"parentNode")},parentsUntil:function(a,b,c){return n.dir(a,"parentNode",c)},next:function(a){return D(a,"nextSibling")},prev:function(a){return D(a,"previousSibling")},nextAll:function(a){return n.dir(a,"nextSibling")},prevAll:function(a){return n.dir(a,"previousSibling")},nextUntil:function(a,b,c){return n.dir(a,"nextSibling",c)},prevUntil:function(a,b,c){return n.dir(a,"previousSibling",c)},siblings:function(a){return n.sibling((a.parentNode||{}).firstChild,a)},children:function(a){return n.sibling(a.firstChild)},contents:function(a){return a.contentDocument||n.merge([],a.childNodes)}},function(a,b){n.fn[a]=function(c,d){var e=n.map(this,b,c);return"Until"!==a.slice(-5)&&(d=c),d&&"string"==typeof d&&(e=n.filter(d,e)),this.length>1&&(C[a]||n.unique(e),B.test(a)&&e.reverse()),this.pushStack(e)}});var E=/\S+/g,F={};function G(a){var b=F[a]={};return n.each(a.match(E)||[],function(a,c){b[c]=!0}),b}n.Callbacks=function(a){a="string"==typeof a?F[a]||G(a):n.extend({},a);var b,c,d,e,f,g,h=[],i=!a.once&&[],j=function(l){for(b=a.memory&&l,c=!0,g=e||0,e=0,f=h.length,d=!0;h&&f>g;g++)if(h[g].apply(l[0],l[1])===!1&&a.stopOnFalse){b=!1;break}d=!1,h&&(i?i.length&&j(i.shift()):b?h=[]:k.disable())},k={add:function(){if(h){var c=h.length;!function g(b){n.each(b,function(b,c){var d=n.type(c);"function"===d?a.unique&&k.has(c)||h.push(c):c&&c.length&&"string"!==d&&g(c)})}(arguments),d?f=h.length:b&&(e=c,j(b))}return this},remove:function(){return h&&n.each(arguments,function(a,b){var c;while((c=n.inArray(b,h,c))>-1)h.splice(c,1),d&&(f>=c&&f--,g>=c&&g--)}),this},has:function(a){return a?n.inArray(a,h)>-1:!(!h||!h.length)},empty:function(){return h=[],f=0,this},disable:function(){return h=i=b=void 0,this},disabled:function(){return!h},lock:function(){return i=void 0,b||k.disable(),this},locked:function(){return!i},fireWith:function(a,b){return!h||c&&!i||(b=b||[],b=[a,b.slice?b.slice():b],d?i.push(b):j(b)),this},fire:function(){return k.fireWith(this,arguments),this},fired:function(){return!!c}};return k},n.extend({Deferred:function(a){var b=[["resolve","done",n.Callbacks("once memory"),"resolved"],["reject","fail",n.Callbacks("once memory"),"rejected"],["notify","progress",n.Callbacks("memory")]],c="pending",d={state:function(){return c},always:function(){return e.done(arguments).fail(arguments),this},then:function(){var a=arguments;return n.Deferred(function(c){n.each(b,function(b,f){var g=n.isFunction(a[b])&&a[b];e[f[1]](function(){var a=g&&g.apply(this,arguments);a&&n.isFunction(a.promise)?a.promise().done(c.resolve).fail(c.reject).progress(c.notify):c[f[0]+"With"](this===d?c.promise():this,g?[a]:arguments)})}),a=null}).promise()},promise:function(a){return null!=a?n.extend(a,d):d}},e={};return d.pipe=d.then,n.each(b,function(a,f){var g=f[2],h=f[3];d[f[1]]=g.add,h&&g.add(function(){c=h},b[1^a][2].disable,b[2][2].lock),e[f[0]]=function(){return e[f[0]+"With"](this===e?d:this,arguments),this},e[f[0]+"With"]=g.fireWith}),d.promise(e),a&&a.call(e,e),e},when:function(a){var b=0,c=d.call(arguments),e=c.length,f=1!==e||a&&n.isFunction(a.promise)?e:0,g=1===f?a:n.Deferred(),h=function(a,b,c){return function(e){b[a]=this,c[a]=arguments.length>1?d.call(arguments):e,c===i?g.notifyWith(b,c):--f||g.resolveWith(b,c)}},i,j,k;if(e>1)for(i=new Array(e),j=new Array(e),k=new Array(e);e>b;b++)c[b]&&n.isFunction(c[b].promise)?c[b].promise().done(h(b,k,c)).fail(g.reject).progress(h(b,j,i)):--f;return f||g.resolveWith(k,c),g.promise()}});var H;n.fn.ready=function(a){return n.ready.promise().done(a),this},n.extend({isReady:!1,readyWait:1,holdReady:function(a){a?n.readyWait++:n.ready(!0)},ready:function(a){(a===!0?--n.readyWait:n.isReady)||(n.isReady=!0,a!==!0&&--n.readyWait>0||(H.resolveWith(l,[n]),n.fn.triggerHandler&&(n(l).triggerHandler("ready"),n(l).off("ready"))))}});function I(){l.removeEventListener("DOMContentLoaded",I,!1),a.removeEventListener("load",I,!1),n.ready()}n.ready.promise=function(b){return H||(H=n.Deferred(),"complete"===l.readyState?setTimeout(n.ready):(l.addEventListener("DOMContentLoaded",I,!1),a.addEventListener("load",I,!1))),H.promise(b)},n.ready.promise();var J=n.access=function(a,b,c,d,e,f,g){var h=0,i=a.length,j=null==c;if("object"===n.type(c)){e=!0;for(h in c)n.access(a,b,h,c[h],!0,f,g)}else if(void 0!==d&&(e=!0,n.isFunction(d)||(g=!0),j&&(g?(b.call(a,d),b=null):(j=b,b=function(a,b,c){return j.call(n(a),c)})),b))for(;i>h;h++)b(a[h],c,g?d:d.call(a[h],h,b(a[h],c)));return e?a:j?b.call(a):i?b(a[0],c):f};n.acceptData=function(a){return 1===a.nodeType||9===a.nodeType||!+a.nodeType};function K(){Object.defineProperty(this.cache={},0,{get:function(){return{}}}),this.expando=n.expando+K.uid++}K.uid=1,K.accepts=n.acceptData,K.prototype={key:function(a){if(!K.accepts(a))return 0;var b={},c=a[this.expando];if(!c){c=K.uid++;try{b[this.expando]={value:c},Object.defineProperties(a,b)}catch(d){b[this.expando]=c,n.extend(a,b)}}return this.cache[c]||(this.cache[c]={}),c},set:function(a,b,c){var d,e=this.key(a),f=this.cache[e];if("string"==typeof b)f[b]=c;else if(n.isEmptyObject(f))n.extend(this.cache[e],b);else for(d in b)f[d]=b[d];return f},get:function(a,b){var c=this.cache[this.key(a)];return void 0===b?c:c[b]},access:function(a,b,c){var d;return void 0===b||b&&"string"==typeof b&&void 0===c?(d=this.get(a,b),void 0!==d?d:this.get(a,n.camelCase(b))):(this.set(a,b,c),void 0!==c?c:b)},remove:function(a,b){var c,d,e,f=this.key(a),g=this.cache[f];if(void 0===b)this.cache[f]={};else{n.isArray(b)?d=b.concat(b.map(n.camelCase)):(e=n.camelCase(b),b in g?d=[b,e]:(d=e,d=d in g?[d]:d.match(E)||[])),c=d.length;while(c--)delete g[d[c]]}},hasData:function(a){return!n.isEmptyObject(this.cache[a[this.expando]]||{})},discard:function(a){a[this.expando]&&delete this.cache[a[this.expando]]}};var L=new K,M=new K,N=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,O=/([A-Z])/g;function P(a,b,c){var d;if(void 0===c&&1===a.nodeType)if(d="data-"+b.replace(O,"-$1").toLowerCase(),c=a.getAttribute(d),"string"==typeof c){try{c="true"===c?!0:"false"===c?!1:"null"===c?null:+c+""===c?+c:N.test(c)?n.parseJSON(c):c}catch(e){}M.set(a,b,c)}else c=void 0;return c}n.extend({hasData:function(a){return M.hasData(a)||L.hasData(a)},data:function(a,b,c){
        return M.access(a,b,c)},removeData:function(a,b){M.remove(a,b)},_data:function(a,b,c){return L.access(a,b,c)},_removeData:function(a,b){L.remove(a,b)}}),n.fn.extend({data:function(a,b){var c,d,e,f=this[0],g=f&&f.attributes;if(void 0===a){if(this.length&&(e=M.get(f),1===f.nodeType&&!L.get(f,"hasDataAttrs"))){c=g.length;while(c--)g[c]&&(d=g[c].name,0===d.indexOf("data-")&&(d=n.camelCase(d.slice(5)),P(f,d,e[d])));L.set(f,"hasDataAttrs",!0)}return e}return"object"==typeof a?this.each(function(){M.set(this,a)}):J(this,function(b){var c,d=n.camelCase(a);if(f&&void 0===b){if(c=M.get(f,a),void 0!==c)return c;if(c=M.get(f,d),void 0!==c)return c;if(c=P(f,d,void 0),void 0!==c)return c}else this.each(function(){var c=M.get(this,d);M.set(this,d,b),-1!==a.indexOf("-")&&void 0!==c&&M.set(this,a,b)})},null,b,arguments.length>1,null,!0)},removeData:function(a){return this.each(function(){M.remove(this,a)})}}),n.extend({queue:function(a,b,c){var d;return a?(b=(b||"fx")+"queue",d=L.get(a,b),c&&(!d||n.isArray(c)?d=L.access(a,b,n.makeArray(c)):d.push(c)),d||[]):void 0},dequeue:function(a,b){b=b||"fx";var c=n.queue(a,b),d=c.length,e=c.shift(),f=n._queueHooks(a,b),g=function(){n.dequeue(a,b)};"inprogress"===e&&(e=c.shift(),d--),e&&("fx"===b&&c.unshift("inprogress"),delete f.stop,e.call(a,g,f)),!d&&f&&f.empty.fire()},_queueHooks:function(a,b){var c=b+"queueHooks";return L.get(a,c)||L.access(a,c,{empty:n.Callbacks("once memory").add(function(){L.remove(a,[b+"queue",c])})})}}),n.fn.extend({queue:function(a,b){var c=2;return"string"!=typeof a&&(b=a,a="fx",c--),arguments.length<c?n.queue(this[0],a):void 0===b?this:this.each(function(){var c=n.queue(this,a,b);n._queueHooks(this,a),"fx"===a&&"inprogress"!==c[0]&&n.dequeue(this,a)})},dequeue:function(a){return this.each(function(){n.dequeue(this,a)})},clearQueue:function(a){return this.queue(a||"fx",[])},promise:function(a,b){var c,d=1,e=n.Deferred(),f=this,g=this.length,h=function(){--d||e.resolveWith(f,[f])};"string"!=typeof a&&(b=a,a=void 0),a=a||"fx";while(g--)c=L.get(f[g],a+"queueHooks"),c&&c.empty&&(d++,c.empty.add(h));return h(),e.promise(b)}});var Q=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,R=["Top","Right","Bottom","Left"],S=function(a,b){return a=b||a,"none"===n.css(a,"display")||!n.contains(a.ownerDocument,a)},T=/^(?:checkbox|radio)$/i;!function(){var a=l.createDocumentFragment(),b=a.appendChild(l.createElement("div")),c=l.createElement("input");c.setAttribute("type","radio"),c.setAttribute("checked","checked"),c.setAttribute("name","t"),b.appendChild(c),k.checkClone=b.cloneNode(!0).cloneNode(!0).lastChild.checked,b.innerHTML="<textarea>x</textarea>",k.noCloneChecked=!!b.cloneNode(!0).lastChild.defaultValue}();var U="undefined";k.focusinBubbles="onfocusin"in a;var V=/^key/,W=/^(?:mouse|pointer|contextmenu)|click/,X=/^(?:focusinfocus|focusoutblur)$/,Y=/^([^.]*)(?:\.(.+)|)$/;function Z(){return!0}function $(){return!1}function _(){try{return l.activeElement}catch(a){}}n.event={global:{},add:function(a,b,c,d,e){var f,g,h,i,j,k,l,m,o,p,q,r=L.get(a);if(r){c.handler&&(f=c,c=f.handler,e=f.selector),c.guid||(c.guid=n.guid++),(i=r.events)||(i=r.events={}),(g=r.handle)||(g=r.handle=function(b){return typeof n!==U&&n.event.triggered!==b.type?n.event.dispatch.apply(a,arguments):void 0}),b=(b||"").match(E)||[""],j=b.length;while(j--)h=Y.exec(b[j])||[],o=q=h[1],p=(h[2]||"").split(".").sort(),o&&(l=n.event.special[o]||{},o=(e?l.delegateType:l.bindType)||o,l=n.event.special[o]||{},k=n.extend({type:o,origType:q,data:d,handler:c,guid:c.guid,selector:e,needsContext:e&&n.expr.match.needsContext.test(e),namespace:p.join(".")},f),(m=i[o])||(m=i[o]=[],m.delegateCount=0,l.setup&&l.setup.call(a,d,p,g)!==!1||a.addEventListener&&a.addEventListener(o,g,!1)),l.add&&(l.add.call(a,k),k.handler.guid||(k.handler.guid=c.guid)),e?m.splice(m.delegateCount++,0,k):m.push(k),n.event.global[o]=!0)}},remove:function(a,b,c,d,e){var f,g,h,i,j,k,l,m,o,p,q,r=L.hasData(a)&&L.get(a);if(r&&(i=r.events)){b=(b||"").match(E)||[""],j=b.length;while(j--)if(h=Y.exec(b[j])||[],o=q=h[1],p=(h[2]||"").split(".").sort(),o){l=n.event.special[o]||{},o=(d?l.delegateType:l.bindType)||o,m=i[o]||[],h=h[2]&&new RegExp("(^|\\.)"+p.join("\\.(?:.*\\.|)")+"(\\.|$)"),g=f=m.length;while(f--)k=m[f],!e&&q!==k.origType||c&&c.guid!==k.guid||h&&!h.test(k.namespace)||d&&d!==k.selector&&("**"!==d||!k.selector)||(m.splice(f,1),k.selector&&m.delegateCount--,l.remove&&l.remove.call(a,k));g&&!m.length&&(l.teardown&&l.teardown.call(a,p,r.handle)!==!1||n.removeEvent(a,o,r.handle),delete i[o])}else for(o in i)n.event.remove(a,o+b[j],c,d,!0);n.isEmptyObject(i)&&(delete r.handle,L.remove(a,"events"))}},trigger:function(b,c,d,e){var f,g,h,i,k,m,o,p=[d||l],q=j.call(b,"type")?b.type:b,r=j.call(b,"namespace")?b.namespace.split("."):[];if(g=h=d=d||l,3!==d.nodeType&&8!==d.nodeType&&!X.test(q+n.event.triggered)&&(q.indexOf(".")>=0&&(r=q.split("."),q=r.shift(),r.sort()),k=q.indexOf(":")<0&&"on"+q,b=b[n.expando]?b:new n.Event(q,"object"==typeof b&&b),b.isTrigger=e?2:3,b.namespace=r.join("."),b.namespace_re=b.namespace?new RegExp("(^|\\.)"+r.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,b.result=void 0,b.target||(b.target=d),c=null==c?[b]:n.makeArray(c,[b]),o=n.event.special[q]||{},e||!o.trigger||o.trigger.apply(d,c)!==!1)){if(!e&&!o.noBubble&&!n.isWindow(d)){for(i=o.delegateType||q,X.test(i+q)||(g=g.parentNode);g;g=g.parentNode)p.push(g),h=g;h===(d.ownerDocument||l)&&p.push(h.defaultView||h.parentWindow||a)}f=0;while((g=p[f++])&&!b.isPropagationStopped())b.type=f>1?i:o.bindType||q,m=(L.get(g,"events")||{})[b.type]&&L.get(g,"handle"),m&&m.apply(g,c),m=k&&g[k],m&&m.apply&&n.acceptData(g)&&(b.result=m.apply(g,c),b.result===!1&&b.preventDefault());return b.type=q,e||b.isDefaultPrevented()||o._default&&o._default.apply(p.pop(),c)!==!1||!n.acceptData(d)||k&&n.isFunction(d[q])&&!n.isWindow(d)&&(h=d[k],h&&(d[k]=null),n.event.triggered=q,d[q](),n.event.triggered=void 0,h&&(d[k]=h)),b.result}},dispatch:function(a){a=n.event.fix(a);var b,c,e,f,g,h=[],i=d.call(arguments),j=(L.get(this,"events")||{})[a.type]||[],k=n.event.special[a.type]||{};if(i[0]=a,a.delegateTarget=this,!k.preDispatch||k.preDispatch.call(this,a)!==!1){h=n.event.handlers.call(this,a,j),b=0;while((f=h[b++])&&!a.isPropagationStopped()){a.currentTarget=f.elem,c=0;while((g=f.handlers[c++])&&!a.isImmediatePropagationStopped())(!a.namespace_re||a.namespace_re.test(g.namespace))&&(a.handleObj=g,a.data=g.data,e=((n.event.special[g.origType]||{}).handle||g.handler).apply(f.elem,i),void 0!==e&&(a.result=e)===!1&&(a.preventDefault(),a.stopPropagation()))}return k.postDispatch&&k.postDispatch.call(this,a),a.result}},handlers:function(a,b){var c,d,e,f,g=[],h=b.delegateCount,i=a.target;if(h&&i.nodeType&&(!a.button||"click"!==a.type))for(;i!==this;i=i.parentNode||this)if(i.disabled!==!0||"click"!==a.type){for(d=[],c=0;h>c;c++)f=b[c],e=f.selector+" ",void 0===d[e]&&(d[e]=f.needsContext?n(e,this).index(i)>=0:n.find(e,this,null,[i]).length),d[e]&&d.push(f);d.length&&g.push({elem:i,handlers:d})}return h<b.length&&g.push({elem:this,handlers:b.slice(h)}),g},props:"altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),fixHooks:{},keyHooks:{props:"char charCode key keyCode".split(" "),filter:function(a,b){return null==a.which&&(a.which=null!=b.charCode?b.charCode:b.keyCode),a}},mouseHooks:{props:"button buttons clientX clientY offsetX offsetY pageX pageY screenX screenY toElement".split(" "),filter:function(a,b){var c,d,e,f=b.button;return null==a.pageX&&null!=b.clientX&&(c=a.target.ownerDocument||l,d=c.documentElement,e=c.body,a.pageX=b.clientX+(d&&d.scrollLeft||e&&e.scrollLeft||0)-(d&&d.clientLeft||e&&e.clientLeft||0),a.pageY=b.clientY+(d&&d.scrollTop||e&&e.scrollTop||0)-(d&&d.clientTop||e&&e.clientTop||0)),a.which||void 0===f||(a.which=1&f?1:2&f?3:4&f?2:0),a}},fix:function(a){if(a[n.expando])return a;var b,c,d,e=a.type,f=a,g=this.fixHooks[e];g||(this.fixHooks[e]=g=W.test(e)?this.mouseHooks:V.test(e)?this.keyHooks:{}),d=g.props?this.props.concat(g.props):this.props,a=new n.Event(f),b=d.length;while(b--)c=d[b],a[c]=f[c];return a.target||(a.target=l),3===a.target.nodeType&&(a.target=a.target.parentNode),g.filter?g.filter(a,f):a},special:{load:{noBubble:!0},focus:{trigger:function(){return this!==_()&&this.focus?(this.focus(),!1):void 0},delegateType:"focusin"},blur:{trigger:function(){return this===_()&&this.blur?(this.blur(),!1):void 0},delegateType:"focusout"},click:{trigger:function(){return"checkbox"===this.type&&this.click&&n.nodeName(this,"input")?(this.click(),!1):void 0},_default:function(a){return n.nodeName(a.target,"a")}},beforeunload:{postDispatch:function(a){void 0!==a.result&&a.originalEvent&&(a.originalEvent.returnValue=a.result)}}},simulate:function(a,b,c,d){var e=n.extend(new n.Event,c,{type:a,isSimulated:!0,originalEvent:{}});d?n.event.trigger(e,null,b):n.event.dispatch.call(b,e),e.isDefaultPrevented()&&c.preventDefault()}},n.removeEvent=function(a,b,c){a.removeEventListener&&a.removeEventListener(b,c,!1)},n.Event=function(a,b){return this instanceof n.Event?(a&&a.type?(this.originalEvent=a,this.type=a.type,this.isDefaultPrevented=a.defaultPrevented||void 0===a.defaultPrevented&&a.returnValue===!1?Z:$):this.type=a,b&&n.extend(this,b),this.timeStamp=a&&a.timeStamp||n.now(),void(this[n.expando]=!0)):new n.Event(a,b)},n.Event.prototype={isDefaultPrevented:$,isPropagationStopped:$,isImmediatePropagationStopped:$,preventDefault:function(){var a=this.originalEvent;this.isDefaultPrevented=Z,a&&a.preventDefault&&a.preventDefault()},stopPropagation:function(){var a=this.originalEvent;this.isPropagationStopped=Z,a&&a.stopPropagation&&a.stopPropagation()},stopImmediatePropagation:function(){var a=this.originalEvent;this.isImmediatePropagationStopped=Z,a&&a.stopImmediatePropagation&&a.stopImmediatePropagation(),this.stopPropagation()}},n.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(a,b){n.event.special[a]={delegateType:b,bindType:b,handle:function(a){var c,d=this,e=a.relatedTarget,f=a.handleObj;return(!e||e!==d&&!n.contains(d,e))&&(a.type=f.origType,c=f.handler.apply(this,arguments),a.type=b),c}}}),k.focusinBubbles||n.each({focus:"focusin",blur:"focusout"},function(a,b){var c=function(a){n.event.simulate(b,a.target,n.event.fix(a),!0)};n.event.special[b]={setup:function(){var d=this.ownerDocument||this,e=L.access(d,b);e||d.addEventListener(a,c,!0),L.access(d,b,(e||0)+1)},teardown:function(){var d=this.ownerDocument||this,e=L.access(d,b)-1;e?L.access(d,b,e):(d.removeEventListener(a,c,!0),L.remove(d,b))}}}),n.fn.extend({on:function(a,b,c,d,e){var f,g;if("object"==typeof a){"string"!=typeof b&&(c=c||b,b=void 0);for(g in a)this.on(g,b,c,a[g],e);return this}if(null==c&&null==d?(d=b,c=b=void 0):null==d&&("string"==typeof b?(d=c,c=void 0):(d=c,c=b,b=void 0)),d===!1)d=$;else if(!d)return this;return 1===e&&(f=d,d=function(a){return n().off(a),f.apply(this,arguments)},d.guid=f.guid||(f.guid=n.guid++)),this.each(function(){n.event.add(this,a,d,c,b)})},one:function(a,b,c,d){return this.on(a,b,c,d,1)},off:function(a,b,c){var d,e;if(a&&a.preventDefault&&a.handleObj)return d=a.handleObj,n(a.delegateTarget).off(d.namespace?d.origType+"."+d.namespace:d.origType,d.selector,d.handler),this;if("object"==typeof a){for(e in a)this.off(e,b,a[e]);return this}return(b===!1||"function"==typeof b)&&(c=b,b=void 0),c===!1&&(c=$),this.each(function(){n.event.remove(this,a,c,b)})},trigger:function(a,b){return this.each(function(){n.event.trigger(a,b,this)})},triggerHandler:function(a,b){var c=this[0];return c?n.event.trigger(a,b,c,!0):void 0}});var aa=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,ba=/<([\w:]+)/,ca=/<|&#?\w+;/,da=/<(?:script|style|link)/i,ea=/checked\s*(?:[^=]|=\s*.checked.)/i,fa=/^$|\/(?:java|ecma)script/i,ga=/^true\/(.*)/,ha=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,ia={option:[1,"<select multiple='multiple'>","</select>"],thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};ia.optgroup=ia.option,ia.tbody=ia.tfoot=ia.colgroup=ia.caption=ia.thead,ia.th=ia.td;function ja(a,b){return n.nodeName(a,"table")&&n.nodeName(11!==b.nodeType?b:b.firstChild,"tr")?a.getElementsByTagName("tbody")[0]||a.appendChild(a.ownerDocument.createElement("tbody")):a}function ka(a){return a.type=(null!==a.getAttribute("type"))+"/"+a.type,a}function la(a){var b=ga.exec(a.type);return b?a.type=b[1]:a.removeAttribute("type"),a}function ma(a,b){for(var c=0,d=a.length;d>c;c++)L.set(a[c],"globalEval",!b||L.get(b[c],"globalEval"))}function na(a,b){var c,d,e,f,g,h,i,j;if(1===b.nodeType){if(L.hasData(a)&&(f=L.access(a),g=L.set(b,f),j=f.events)){delete g.handle,g.events={};for(e in j)for(c=0,d=j[e].length;d>c;c++)n.event.add(b,e,j[e][c])}M.hasData(a)&&(h=M.access(a),i=n.extend({},h),M.set(b,i))}}function oa(a,b){var c=a.getElementsByTagName?a.getElementsByTagName(b||"*"):a.querySelectorAll?a.querySelectorAll(b||"*"):[];return void 0===b||b&&n.nodeName(a,b)?n.merge([a],c):c}function pa(a,b){var c=b.nodeName.toLowerCase();"input"===c&&T.test(a.type)?b.checked=a.checked:("input"===c||"textarea"===c)&&(b.defaultValue=a.defaultValue)}n.extend({clone:function(a,b,c){var d,e,f,g,h=a.cloneNode(!0),i=n.contains(a.ownerDocument,a);if(!(k.noCloneChecked||1!==a.nodeType&&11!==a.nodeType||n.isXMLDoc(a)))for(g=oa(h),f=oa(a),d=0,e=f.length;e>d;d++)pa(f[d],g[d]);if(b)if(c)for(f=f||oa(a),g=g||oa(h),d=0,e=f.length;e>d;d++)na(f[d],g[d]);else na(a,h);return g=oa(h,"script"),g.length>0&&ma(g,!i&&oa(a,"script")),h},buildFragment:function(a,b,c,d){for(var e,f,g,h,i,j,k=b.createDocumentFragment(),l=[],m=0,o=a.length;o>m;m++)if(e=a[m],e||0===e)if("object"===n.type(e))n.merge(l,e.nodeType?[e]:e);else if(ca.test(e)){f=f||k.appendChild(b.createElement("div")),g=(ba.exec(e)||["",""])[1].toLowerCase(),h=ia[g]||ia._default,f.innerHTML=h[1]+e.replace(aa,"<$1></$2>")+h[2],j=h[0];while(j--)f=f.lastChild;n.merge(l,f.childNodes),f=k.firstChild,f.textContent=""}else l.push(b.createTextNode(e));k.textContent="",m=0;while(e=l[m++])if((!d||-1===n.inArray(e,d))&&(i=n.contains(e.ownerDocument,e),f=oa(k.appendChild(e),"script"),i&&ma(f),c)){j=0;while(e=f[j++])fa.test(e.type||"")&&c.push(e)}return k},cleanData:function(a){for(var b,c,d,e,f=n.event.special,g=0;void 0!==(c=a[g]);g++){if(n.acceptData(c)&&(e=c[L.expando],e&&(b=L.cache[e]))){if(b.events)for(d in b.events)f[d]?n.event.remove(c,d):n.removeEvent(c,d,b.handle);L.cache[e]&&delete L.cache[e]}delete M.cache[c[M.expando]]}}}),n.fn.extend({text:function(a){return J(this,function(a){return void 0===a?n.text(this):this.empty().each(function(){(1===this.nodeType||11===this.nodeType||9===this.nodeType)&&(this.textContent=a)})},null,a,arguments.length)},append:function(){return this.domManip(arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=ja(this,a);b.appendChild(a)}})},prepend:function(){return this.domManip(arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=ja(this,a);b.insertBefore(a,b.firstChild)}})},before:function(){return this.domManip(arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this)})},after:function(){return this.domManip(arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this.nextSibling)})},remove:function(a,b){for(var c,d=a?n.filter(a,this):this,e=0;null!=(c=d[e]);e++)b||1!==c.nodeType||n.cleanData(oa(c)),c.parentNode&&(b&&n.contains(c.ownerDocument,c)&&ma(oa(c,"script")),c.parentNode.removeChild(c));return this},empty:function(){for(var a,b=0;null!=(a=this[b]);b++)1===a.nodeType&&(n.cleanData(oa(a,!1)),a.textContent="");return this},clone:function(a,b){return a=null==a?!1:a,b=null==b?a:b,this.map(function(){return n.clone(this,a,b)})},html:function(a){return J(this,function(a){var b=this[0]||{},c=0,d=this.length;if(void 0===a&&1===b.nodeType)return b.innerHTML;if("string"==typeof a&&!da.test(a)&&!ia[(ba.exec(a)||["",""])[1].toLowerCase()]){a=a.replace(aa,"<$1></$2>");try{for(;d>c;c++)b=this[c]||{},1===b.nodeType&&(n.cleanData(oa(b,!1)),b.innerHTML=a);b=0}catch(e){}}b&&this.empty().append(a)},null,a,arguments.length)},replaceWith:function(){var a=arguments[0];return this.domManip(arguments,function(b){a=this.parentNode,n.cleanData(oa(this)),a&&a.replaceChild(b,this)}),a&&(a.length||a.nodeType)?this:this.remove()},detach:function(a){return this.remove(a,!0)},domManip:function(a,b){a=e.apply([],a);var c,d,f,g,h,i,j=0,l=this.length,m=this,o=l-1,p=a[0],q=n.isFunction(p);if(q||l>1&&"string"==typeof p&&!k.checkClone&&ea.test(p))return this.each(function(c){var d=m.eq(c);q&&(a[0]=p.call(this,c,d.html())),d.domManip(a,b)});if(l&&(c=n.buildFragment(a,this[0].ownerDocument,!1,this),d=c.firstChild,1===c.childNodes.length&&(c=d),d)){for(f=n.map(oa(c,"script"),ka),g=f.length;l>j;j++)h=c,j!==o&&(h=n.clone(h,!0,!0),g&&n.merge(f,oa(h,"script"))),b.call(this[j],h,j);if(g)for(i=f[f.length-1].ownerDocument,n.map(f,la),j=0;g>j;j++)h=f[j],fa.test(h.type||"")&&!L.access(h,"globalEval")&&n.contains(i,h)&&(h.src?n._evalUrl&&n._evalUrl(h.src):n.globalEval(h.textContent.replace(ha,"")))}return this}}),n.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(a,b){n.fn[a]=function(a){for(var c,d=[],e=n(a),g=e.length-1,h=0;g>=h;h++)c=h===g?this:this.clone(!0),n(e[h])[b](c),f.apply(d,c.get());return this.pushStack(d)}});var qa,ra={};function sa(b,c){var d,e=n(c.createElement(b)).appendTo(c.body),f=a.getDefaultComputedStyle&&(d=a.getDefaultComputedStyle(e[0]))?d.display:n.css(e[0],"display");return e.detach(),f}function ta(a){var b=l,c=ra[a];return c||(c=sa(a,b),"none"!==c&&c||(qa=(qa||n("<iframe frameborder='0' width='0' height='0'/>")).appendTo(b.documentElement),b=qa[0].contentDocument,b.write(),b.close(),c=sa(a,b),qa.detach()),ra[a]=c),c}var ua=/^margin/,va=new RegExp("^("+Q+")(?!px)[a-z%]+$","i"),wa=function(b){return b.ownerDocument.defaultView.opener?b.ownerDocument.defaultView.getComputedStyle(b,null):a.getComputedStyle(b,null)};function xa(a,b,c){var d,e,f,g,h=a.style;return c=c||wa(a),c&&(g=c.getPropertyValue(b)||c[b]),c&&(""!==g||n.contains(a.ownerDocument,a)||(g=n.style(a,b)),va.test(g)&&ua.test(b)&&(d=h.width,e=h.minWidth,f=h.maxWidth,h.minWidth=h.maxWidth=h.width=g,g=c.width,h.width=d,h.minWidth=e,h.maxWidth=f)),void 0!==g?g+"":g}function ya(a,b){return{get:function(){return a()?void delete this.get:(this.get=b).apply(this,arguments)}}}!function(){var b,c,d=l.documentElement,e=l.createElement("div"),f=l.createElement("div");if(f.style){f.style.backgroundClip="content-box",f.cloneNode(!0).style.backgroundClip="",k.clearCloneStyle="content-box"===f.style.backgroundClip,e.style.cssText="border:0;width:0;height:0;top:0;left:-9999px;margin-top:1px;position:absolute",e.appendChild(f);function g(){f.style.cssText="-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;display:block;margin-top:1%;top:1%;border:1px;padding:1px;width:4px;position:absolute",f.innerHTML="",d.appendChild(e);var g=a.getComputedStyle(f,null);b="1%"!==g.top,c="4px"===g.width,d.removeChild(e)}a.getComputedStyle&&n.extend(k,{pixelPosition:function(){return g(),b},boxSizingReliable:function(){return null==c&&g(),c},reliableMarginRight:function(){var b,c=f.appendChild(l.createElement("div"));return c.style.cssText=f.style.cssText="-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0",c.style.marginRight=c.style.width="0",f.style.width="1px",d.appendChild(e),b=!parseFloat(a.getComputedStyle(c,null).marginRight),d.removeChild(e),f.removeChild(c),b}})}}(),n.swap=function(a,b,c,d){var e,f,g={};for(f in b)g[f]=a.style[f],a.style[f]=b[f];e=c.apply(a,d||[]);for(f in b)a.style[f]=g[f];return e};var za=/^(none|table(?!-c[ea]).+)/,Aa=new RegExp("^("+Q+")(.*)$","i"),Ba=new RegExp("^([+-])=("+Q+")","i"),Ca={position:"absolute",visibility:"hidden",display:"block"},Da={letterSpacing:"0",fontWeight:"400"},Ea=["Webkit","O","Moz","ms"];function Fa(a,b){if(b in a)return b;var c=b[0].toUpperCase()+b.slice(1),d=b,e=Ea.length;while(e--)if(b=Ea[e]+c,b in a)return b;return d}function Ga(a,b,c){var d=Aa.exec(b);return d?Math.max(0,d[1]-(c||0))+(d[2]||"px"):b}function Ha(a,b,c,d,e){for(var f=c===(d?"border":"content")?4:"width"===b?1:0,g=0;4>f;f+=2)"margin"===c&&(g+=n.css(a,c+R[f],!0,e)),d?("content"===c&&(g-=n.css(a,"padding"+R[f],!0,e)),"margin"!==c&&(g-=n.css(a,"border"+R[f]+"Width",!0,e))):(g+=n.css(a,"padding"+R[f],!0,e),"padding"!==c&&(g+=n.css(a,"border"+R[f]+"Width",!0,e)));return g}function Ia(a,b,c){var d=!0,e="width"===b?a.offsetWidth:a.offsetHeight,f=wa(a),g="border-box"===n.css(a,"boxSizing",!1,f);if(0>=e||null==e){if(e=xa(a,b,f),(0>e||null==e)&&(e=a.style[b]),va.test(e))return e;d=g&&(k.boxSizingReliable()||e===a.style[b]),e=parseFloat(e)||0}return e+Ha(a,b,c||(g?"border":"content"),d,f)+"px"}function Ja(a,b){for(var c,d,e,f=[],g=0,h=a.length;h>g;g++)d=a[g],d.style&&(f[g]=L.get(d,"olddisplay"),c=d.style.display,b?(f[g]||"none"!==c||(d.style.display=""),""===d.style.display&&S(d)&&(f[g]=L.access(d,"olddisplay",ta(d.nodeName)))):(e=S(d),"none"===c&&e||L.set(d,"olddisplay",e?c:n.css(d,"display"))));for(g=0;h>g;g++)d=a[g],d.style&&(b&&"none"!==d.style.display&&""!==d.style.display||(d.style.display=b?f[g]||"":"none"));return a}n.extend({cssHooks:{opacity:{get:function(a,b){if(b){var c=xa(a,"opacity");return""===c?"1":c}}}},cssNumber:{columnCount:!0,fillOpacity:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{"float":"cssFloat"},style:function(a,b,c,d){if(a&&3!==a.nodeType&&8!==a.nodeType&&a.style){var e,f,g,h=n.camelCase(b),i=a.style;return b=n.cssProps[h]||(n.cssProps[h]=Fa(i,h)),g=n.cssHooks[b]||n.cssHooks[h],void 0===c?g&&"get"in g&&void 0!==(e=g.get(a,!1,d))?e:i[b]:(f=typeof c,"string"===f&&(e=Ba.exec(c))&&(c=(e[1]+1)*e[2]+parseFloat(n.css(a,b)),f="number"),null!=c&&c===c&&("number"!==f||n.cssNumber[h]||(c+="px"),k.clearCloneStyle||""!==c||0!==b.indexOf("background")||(i[b]="inherit"),g&&"set"in g&&void 0===(c=g.set(a,c,d))||(i[b]=c)),void 0)}},css:function(a,b,c,d){var e,f,g,h=n.camelCase(b);return b=n.cssProps[h]||(n.cssProps[h]=Fa(a.style,h)),g=n.cssHooks[b]||n.cssHooks[h],g&&"get"in g&&(e=g.get(a,!0,c)),void 0===e&&(e=xa(a,b,d)),"normal"===e&&b in Da&&(e=Da[b]),""===c||c?(f=parseFloat(e),c===!0||n.isNumeric(f)?f||0:e):e}}),n.each(["height","width"],function(a,b){n.cssHooks[b]={get:function(a,c,d){return c?za.test(n.css(a,"display"))&&0===a.offsetWidth?n.swap(a,Ca,function(){return Ia(a,b,d)}):Ia(a,b,d):void 0},set:function(a,c,d){var e=d&&wa(a);return Ga(a,c,d?Ha(a,b,d,"border-box"===n.css(a,"boxSizing",!1,e),e):0)}}}),n.cssHooks.marginRight=ya(k.reliableMarginRight,function(a,b){return b?n.swap(a,{display:"inline-block"},xa,[a,"marginRight"]):void 0}),n.each({margin:"",padding:"",border:"Width"},function(a,b){n.cssHooks[a+b]={expand:function(c){for(var d=0,e={},f="string"==typeof c?c.split(" "):[c];4>d;d++)e[a+R[d]+b]=f[d]||f[d-2]||f[0];return e}},ua.test(a)||(n.cssHooks[a+b].set=Ga)}),n.fn.extend({css:function(a,b){return J(this,function(a,b,c){var d,e,f={},g=0;if(n.isArray(b)){for(d=wa(a),e=b.length;e>g;g++)f[b[g]]=n.css(a,b[g],!1,d);return f}return void 0!==c?n.style(a,b,c):n.css(a,b)},a,b,arguments.length>1)},show:function(){return Ja(this,!0)},hide:function(){return Ja(this)},toggle:function(a){return"boolean"==typeof a?a?this.show():this.hide():this.each(function(){S(this)?n(this).show():n(this).hide()})}});function Ka(a,b,c,d,e){return new Ka.prototype.init(a,b,c,d,e)}n.Tween=Ka,Ka.prototype={constructor:Ka,init:function(a,b,c,d,e,f){this.elem=a,this.prop=c,this.easing=e||"swing",this.options=b,this.start=this.now=this.cur(),this.end=d,this.unit=f||(n.cssNumber[c]?"":"px")},cur:function(){var a=Ka.propHooks[this.prop];return a&&a.get?a.get(this):Ka.propHooks._default.get(this)},run:function(a){var b,c=Ka.propHooks[this.prop];return this.options.duration?this.pos=b=n.easing[this.easing](a,this.options.duration*a,0,1,this.options.duration):this.pos=b=a,this.now=(this.end-this.start)*b+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),c&&c.set?c.set(this):Ka.propHooks._default.set(this),this}},Ka.prototype.init.prototype=Ka.prototype,Ka.propHooks={_default:{get:function(a){var b;return null==a.elem[a.prop]||a.elem.style&&null!=a.elem.style[a.prop]?(b=n.css(a.elem,a.prop,""),b&&"auto"!==b?b:0):a.elem[a.prop]},set:function(a){n.fx.step[a.prop]?n.fx.step[a.prop](a):a.elem.style&&(null!=a.elem.style[n.cssProps[a.prop]]||n.cssHooks[a.prop])?n.style(a.elem,a.prop,a.now+a.unit):a.elem[a.prop]=a.now}}},Ka.propHooks.scrollTop=Ka.propHooks.scrollLeft={set:function(a){a.elem.nodeType&&a.elem.parentNode&&(a.elem[a.prop]=a.now)}},n.easing={linear:function(a){return a},swing:function(a){return.5-Math.cos(a*Math.PI)/2}},n.fx=Ka.prototype.init,n.fx.step={};var La,Ma,Na=/^(?:toggle|show|hide)$/,Oa=new RegExp("^(?:([+-])=|)("+Q+")([a-z%]*)$","i"),Pa=/queueHooks$/,Qa=[Va],Ra={"*":[function(a,b){var c=this.createTween(a,b),d=c.cur(),e=Oa.exec(b),f=e&&e[3]||(n.cssNumber[a]?"":"px"),g=(n.cssNumber[a]||"px"!==f&&+d)&&Oa.exec(n.css(c.elem,a)),h=1,i=20;if(g&&g[3]!==f){f=f||g[3],e=e||[],g=+d||1;do h=h||".5",g/=h,n.style(c.elem,a,g+f);while(h!==(h=c.cur()/d)&&1!==h&&--i)}return e&&(g=c.start=+g||+d||0,c.unit=f,c.end=e[1]?g+(e[1]+1)*e[2]:+e[2]),c}]};function Sa(){return setTimeout(function(){La=void 0}),La=n.now()}function Ta(a,b){var c,d=0,e={height:a};for(b=b?1:0;4>d;d+=2-b)c=R[d],e["margin"+c]=e["padding"+c]=a;return b&&(e.opacity=e.width=a),e}function Ua(a,b,c){for(var d,e=(Ra[b]||[]).concat(Ra["*"]),f=0,g=e.length;g>f;f++)if(d=e[f].call(c,b,a))return d}function Va(a,b,c){var d,e,f,g,h,i,j,k,l=this,m={},o=a.style,p=a.nodeType&&S(a),q=L.get(a,"fxshow");c.queue||(h=n._queueHooks(a,"fx"),null==h.unqueued&&(h.unqueued=0,i=h.empty.fire,h.empty.fire=function(){h.unqueued||i()}),h.unqueued++,l.always(function(){l.always(function(){h.unqueued--,n.queue(a,"fx").length||h.empty.fire()})})),1===a.nodeType&&("height"in b||"width"in b)&&(c.overflow=[o.overflow,o.overflowX,o.overflowY],j=n.css(a,"display"),k="none"===j?L.get(a,"olddisplay")||ta(a.nodeName):j,"inline"===k&&"none"===n.css(a,"float")&&(o.display="inline-block")),c.overflow&&(o.overflow="hidden",l.always(function(){o.overflow=c.overflow[0],o.overflowX=c.overflow[1],o.overflowY=c.overflow[2]}));for(d in b)if(e=b[d],Na.exec(e)){if(delete b[d],f=f||"toggle"===e,e===(p?"hide":"show")){if("show"!==e||!q||void 0===q[d])continue;p=!0}m[d]=q&&q[d]||n.style(a,d)}else j=void 0;if(n.isEmptyObject(m))"inline"===("none"===j?ta(a.nodeName):j)&&(o.display=j);else{q?"hidden"in q&&(p=q.hidden):q=L.access(a,"fxshow",{}),f&&(q.hidden=!p),p?n(a).show():l.done(function(){n(a).hide()}),l.done(function(){var b;L.remove(a,"fxshow");for(b in m)n.style(a,b,m[b])});for(d in m)g=Ua(p?q[d]:0,d,l),d in q||(q[d]=g.start,p&&(g.end=g.start,g.start="width"===d||"height"===d?1:0))}}function Wa(a,b){var c,d,e,f,g;for(c in a)if(d=n.camelCase(c),e=b[d],f=a[c],n.isArray(f)&&(e=f[1],f=a[c]=f[0]),c!==d&&(a[d]=f,delete a[c]),g=n.cssHooks[d],g&&"expand"in g){f=g.expand(f),delete a[d];for(c in f)c in a||(a[c]=f[c],b[c]=e)}else b[d]=e}function Xa(a,b,c){var d,e,f=0,g=Qa.length,h=n.Deferred().always(function(){delete i.elem}),i=function(){if(e)return!1;for(var b=La||Sa(),c=Math.max(0,j.startTime+j.duration-b),d=c/j.duration||0,f=1-d,g=0,i=j.tweens.length;i>g;g++)j.tweens[g].run(f);return h.notifyWith(a,[j,f,c]),1>f&&i?c:(h.resolveWith(a,[j]),!1)},j=h.promise({elem:a,props:n.extend({},b),opts:n.extend(!0,{specialEasing:{}},c),originalProperties:b,originalOptions:c,startTime:La||Sa(),duration:c.duration,tweens:[],createTween:function(b,c){var d=n.Tween(a,j.opts,b,c,j.opts.specialEasing[b]||j.opts.easing);return j.tweens.push(d),d},stop:function(b){var c=0,d=b?j.tweens.length:0;if(e)return this;for(e=!0;d>c;c++)j.tweens[c].run(1);return b?h.resolveWith(a,[j,b]):h.rejectWith(a,[j,b]),this}}),k=j.props;for(Wa(k,j.opts.specialEasing);g>f;f++)if(d=Qa[f].call(j,a,k,j.opts))return d;return n.map(k,Ua,j),n.isFunction(j.opts.start)&&j.opts.start.call(a,j),n.fx.timer(n.extend(i,{elem:a,anim:j,queue:j.opts.queue})),j.progress(j.opts.progress).done(j.opts.done,j.opts.complete).fail(j.opts.fail).always(j.opts.always)}n.Animation=n.extend(Xa,{tweener:function(a,b){n.isFunction(a)?(b=a,a=["*"]):a=a.split(" ");for(var c,d=0,e=a.length;e>d;d++)c=a[d],Ra[c]=Ra[c]||[],Ra[c].unshift(b)},prefilter:function(a,b){b?Qa.unshift(a):Qa.push(a)}}),n.speed=function(a,b,c){var d=a&&"object"==typeof a?n.extend({},a):{complete:c||!c&&b||n.isFunction(a)&&a,duration:a,easing:c&&b||b&&!n.isFunction(b)&&b};return d.duration=n.fx.off?0:"number"==typeof d.duration?d.duration:d.duration in n.fx.speeds?n.fx.speeds[d.duration]:n.fx.speeds._default,(null==d.queue||d.queue===!0)&&(d.queue="fx"),d.old=d.complete,d.complete=function(){n.isFunction(d.old)&&d.old.call(this),d.queue&&n.dequeue(this,d.queue)},d},n.fn.extend({fadeTo:function(a,b,c,d){return this.filter(S).css("opacity",0).show().end().animate({opacity:b},a,c,d)},animate:function(a,b,c,d){var e=n.isEmptyObject(a),f=n.speed(b,c,d),g=function(){var b=Xa(this,n.extend({},a),f);(e||L.get(this,"finish"))&&b.stop(!0)};return g.finish=g,e||f.queue===!1?this.each(g):this.queue(f.queue,g)},stop:function(a,b,c){var d=function(a){var b=a.stop;delete a.stop,b(c)};return"string"!=typeof a&&(c=b,b=a,a=void 0),b&&a!==!1&&this.queue(a||"fx",[]),this.each(function(){var b=!0,e=null!=a&&a+"queueHooks",f=n.timers,g=L.get(this);if(e)g[e]&&g[e].stop&&d(g[e]);else for(e in g)g[e]&&g[e].stop&&Pa.test(e)&&d(g[e]);for(e=f.length;e--;)f[e].elem!==this||null!=a&&f[e].queue!==a||(f[e].anim.stop(c),b=!1,f.splice(e,1));(b||!c)&&n.dequeue(this,a)})},finish:function(a){return a!==!1&&(a=a||"fx"),this.each(function(){var b,c=L.get(this),d=c[a+"queue"],e=c[a+"queueHooks"],f=n.timers,g=d?d.length:0;for(c.finish=!0,n.queue(this,a,[]),e&&e.stop&&e.stop.call(this,!0),b=f.length;b--;)f[b].elem===this&&f[b].queue===a&&(f[b].anim.stop(!0),f.splice(b,1));for(b=0;g>b;b++)d[b]&&d[b].finish&&d[b].finish.call(this);delete c.finish})}}),n.each(["toggle","show","hide"],function(a,b){var c=n.fn[b];n.fn[b]=function(a,d,e){return null==a||"boolean"==typeof a?c.apply(this,arguments):this.animate(Ta(b,!0),a,d,e)}}),n.each({slideDown:Ta("show"),slideUp:Ta("hide"),slideToggle:Ta("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(a,b){n.fn[a]=function(a,c,d){return this.animate(b,a,c,d)}}),n.timers=[],n.fx.tick=function(){var a,b=0,c=n.timers;for(La=n.now();b<c.length;b++)a=c[b],a()||c[b]!==a||c.splice(b--,1);c.length||n.fx.stop(),La=void 0},n.fx.timer=function(a){n.timers.push(a),a()?n.fx.start():n.timers.pop()},n.fx.interval=13,n.fx.start=function(){Ma||(Ma=setInterval(n.fx.tick,n.fx.interval))},n.fx.stop=function(){clearInterval(Ma),Ma=null},n.fx.speeds={slow:600,fast:200,_default:400},n.fn.delay=function(a,b){return a=n.fx?n.fx.speeds[a]||a:a,b=b||"fx",this.queue(b,function(b,c){var d=setTimeout(b,a);c.stop=function(){clearTimeout(d)}})},function(){var a=l.createElement("input"),b=l.createElement("select"),c=b.appendChild(l.createElement("option"));a.type="checkbox",k.checkOn=""!==a.value,k.optSelected=c.selected,b.disabled=!0,k.optDisabled=!c.disabled,a=l.createElement("input"),a.value="t",a.type="radio",k.radioValue="t"===a.value}();var Ya,Za,$a=n.expr.attrHandle;n.fn.extend({attr:function(a,b){return J(this,n.attr,a,b,arguments.length>1)},removeAttr:function(a){return this.each(function(){n.removeAttr(this,a)})}}),n.extend({attr:function(a,b,c){var d,e,f=a.nodeType;if(a&&3!==f&&8!==f&&2!==f)return typeof a.getAttribute===U?n.prop(a,b,c):(1===f&&n.isXMLDoc(a)||(b=b.toLowerCase(),d=n.attrHooks[b]||(n.expr.match.bool.test(b)?Za:Ya)),
        void 0===c?d&&"get"in d&&null!==(e=d.get(a,b))?e:(e=n.find.attr(a,b),null==e?void 0:e):null!==c?d&&"set"in d&&void 0!==(e=d.set(a,c,b))?e:(a.setAttribute(b,c+""),c):void n.removeAttr(a,b))},removeAttr:function(a,b){var c,d,e=0,f=b&&b.match(E);if(f&&1===a.nodeType)while(c=f[e++])d=n.propFix[c]||c,n.expr.match.bool.test(c)&&(a[d]=!1),a.removeAttribute(c)},attrHooks:{type:{set:function(a,b){if(!k.radioValue&&"radio"===b&&n.nodeName(a,"input")){var c=a.value;return a.setAttribute("type",b),c&&(a.value=c),b}}}}}),Za={set:function(a,b,c){return b===!1?n.removeAttr(a,c):a.setAttribute(c,c),c}},n.each(n.expr.match.bool.source.match(/\w+/g),function(a,b){var c=$a[b]||n.find.attr;$a[b]=function(a,b,d){var e,f;return d||(f=$a[b],$a[b]=e,e=null!=c(a,b,d)?b.toLowerCase():null,$a[b]=f),e}});var _a=/^(?:input|select|textarea|button)$/i;n.fn.extend({prop:function(a,b){return J(this,n.prop,a,b,arguments.length>1)},removeProp:function(a){return this.each(function(){delete this[n.propFix[a]||a]})}}),n.extend({propFix:{"for":"htmlFor","class":"className"},prop:function(a,b,c){var d,e,f,g=a.nodeType;if(a&&3!==g&&8!==g&&2!==g)return f=1!==g||!n.isXMLDoc(a),f&&(b=n.propFix[b]||b,e=n.propHooks[b]),void 0!==c?e&&"set"in e&&void 0!==(d=e.set(a,c,b))?d:a[b]=c:e&&"get"in e&&null!==(d=e.get(a,b))?d:a[b]},propHooks:{tabIndex:{get:function(a){return a.hasAttribute("tabindex")||_a.test(a.nodeName)||a.href?a.tabIndex:-1}}}}),k.optSelected||(n.propHooks.selected={get:function(a){var b=a.parentNode;return b&&b.parentNode&&b.parentNode.selectedIndex,null}}),n.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){n.propFix[this.toLowerCase()]=this});var ab=/[\t\r\n\f]/g;n.fn.extend({addClass:function(a){var b,c,d,e,f,g,h="string"==typeof a&&a,i=0,j=this.length;if(n.isFunction(a))return this.each(function(b){n(this).addClass(a.call(this,b,this.className))});if(h)for(b=(a||"").match(E)||[];j>i;i++)if(c=this[i],d=1===c.nodeType&&(c.className?(" "+c.className+" ").replace(ab," "):" ")){f=0;while(e=b[f++])d.indexOf(" "+e+" ")<0&&(d+=e+" ");g=n.trim(d),c.className!==g&&(c.className=g)}return this},removeClass:function(a){var b,c,d,e,f,g,h=0===arguments.length||"string"==typeof a&&a,i=0,j=this.length;if(n.isFunction(a))return this.each(function(b){n(this).removeClass(a.call(this,b,this.className))});if(h)for(b=(a||"").match(E)||[];j>i;i++)if(c=this[i],d=1===c.nodeType&&(c.className?(" "+c.className+" ").replace(ab," "):"")){f=0;while(e=b[f++])while(d.indexOf(" "+e+" ")>=0)d=d.replace(" "+e+" "," ");g=a?n.trim(d):"",c.className!==g&&(c.className=g)}return this},toggleClass:function(a,b){var c=typeof a;return"boolean"==typeof b&&"string"===c?b?this.addClass(a):this.removeClass(a):this.each(n.isFunction(a)?function(c){n(this).toggleClass(a.call(this,c,this.className,b),b)}:function(){if("string"===c){var b,d=0,e=n(this),f=a.match(E)||[];while(b=f[d++])e.hasClass(b)?e.removeClass(b):e.addClass(b)}else(c===U||"boolean"===c)&&(this.className&&L.set(this,"__className__",this.className),this.className=this.className||a===!1?"":L.get(this,"__className__")||"")})},hasClass:function(a){for(var b=" "+a+" ",c=0,d=this.length;d>c;c++)if(1===this[c].nodeType&&(" "+this[c].className+" ").replace(ab," ").indexOf(b)>=0)return!0;return!1}});var bb=/\r/g;n.fn.extend({val:function(a){var b,c,d,e=this[0];{if(arguments.length)return d=n.isFunction(a),this.each(function(c){var e;1===this.nodeType&&(e=d?a.call(this,c,n(this).val()):a,null==e?e="":"number"==typeof e?e+="":n.isArray(e)&&(e=n.map(e,function(a){return null==a?"":a+""})),b=n.valHooks[this.type]||n.valHooks[this.nodeName.toLowerCase()],b&&"set"in b&&void 0!==b.set(this,e,"value")||(this.value=e))});if(e)return b=n.valHooks[e.type]||n.valHooks[e.nodeName.toLowerCase()],b&&"get"in b&&void 0!==(c=b.get(e,"value"))?c:(c=e.value,"string"==typeof c?c.replace(bb,""):null==c?"":c)}}}),n.extend({valHooks:{option:{get:function(a){var b=n.find.attr(a,"value");return null!=b?b:n.trim(n.text(a))}},select:{get:function(a){for(var b,c,d=a.options,e=a.selectedIndex,f="select-one"===a.type||0>e,g=f?null:[],h=f?e+1:d.length,i=0>e?h:f?e:0;h>i;i++)if(c=d[i],!(!c.selected&&i!==e||(k.optDisabled?c.disabled:null!==c.getAttribute("disabled"))||c.parentNode.disabled&&n.nodeName(c.parentNode,"optgroup"))){if(b=n(c).val(),f)return b;g.push(b)}return g},set:function(a,b){var c,d,e=a.options,f=n.makeArray(b),g=e.length;while(g--)d=e[g],(d.selected=n.inArray(d.value,f)>=0)&&(c=!0);return c||(a.selectedIndex=-1),f}}}}),n.each(["radio","checkbox"],function(){n.valHooks[this]={set:function(a,b){return n.isArray(b)?a.checked=n.inArray(n(a).val(),b)>=0:void 0}},k.checkOn||(n.valHooks[this].get=function(a){return null===a.getAttribute("value")?"on":a.value})}),n.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "),function(a,b){n.fn[b]=function(a,c){return arguments.length>0?this.on(b,null,a,c):this.trigger(b)}}),n.fn.extend({hover:function(a,b){return this.mouseenter(a).mouseleave(b||a)},bind:function(a,b,c){return this.on(a,null,b,c)},unbind:function(a,b){return this.off(a,null,b)},delegate:function(a,b,c,d){return this.on(b,a,c,d)},undelegate:function(a,b,c){return 1===arguments.length?this.off(a,"**"):this.off(b,a||"**",c)}});var cb=n.now(),db=/\?/;n.parseJSON=function(a){return JSON.parse(a+"")},n.parseXML=function(a){var b,c;if(!a||"string"!=typeof a)return null;try{c=new DOMParser,b=c.parseFromString(a,"text/xml")}catch(d){b=void 0}return(!b||b.getElementsByTagName("parsererror").length)&&n.error("Invalid XML: "+a),b};var eb=/#.*$/,fb=/([?&])_=[^&]*/,gb=/^(.*?):[ \t]*([^\r\n]*)$/gm,hb=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,ib=/^(?:GET|HEAD)$/,jb=/^\/\//,kb=/^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,lb={},mb={},nb="*/".concat("*"),ob=a.location.href,pb=kb.exec(ob.toLowerCase())||[];function qb(a){return function(b,c){"string"!=typeof b&&(c=b,b="*");var d,e=0,f=b.toLowerCase().match(E)||[];if(n.isFunction(c))while(d=f[e++])"+"===d[0]?(d=d.slice(1)||"*",(a[d]=a[d]||[]).unshift(c)):(a[d]=a[d]||[]).push(c)}}function rb(a,b,c,d){var e={},f=a===mb;function g(h){var i;return e[h]=!0,n.each(a[h]||[],function(a,h){var j=h(b,c,d);return"string"!=typeof j||f||e[j]?f?!(i=j):void 0:(b.dataTypes.unshift(j),g(j),!1)}),i}return g(b.dataTypes[0])||!e["*"]&&g("*")}function sb(a,b){var c,d,e=n.ajaxSettings.flatOptions||{};for(c in b)void 0!==b[c]&&((e[c]?a:d||(d={}))[c]=b[c]);return d&&n.extend(!0,a,d),a}function tb(a,b,c){var d,e,f,g,h=a.contents,i=a.dataTypes;while("*"===i[0])i.shift(),void 0===d&&(d=a.mimeType||b.getResponseHeader("Content-Type"));if(d)for(e in h)if(h[e]&&h[e].test(d)){i.unshift(e);break}if(i[0]in c)f=i[0];else{for(e in c){if(!i[0]||a.converters[e+" "+i[0]]){f=e;break}g||(g=e)}f=f||g}return f?(f!==i[0]&&i.unshift(f),c[f]):void 0}function ub(a,b,c,d){var e,f,g,h,i,j={},k=a.dataTypes.slice();if(k[1])for(g in a.converters)j[g.toLowerCase()]=a.converters[g];f=k.shift();while(f)if(a.responseFields[f]&&(c[a.responseFields[f]]=b),!i&&d&&a.dataFilter&&(b=a.dataFilter(b,a.dataType)),i=f,f=k.shift())if("*"===f)f=i;else if("*"!==i&&i!==f){if(g=j[i+" "+f]||j["* "+f],!g)for(e in j)if(h=e.split(" "),h[1]===f&&(g=j[i+" "+h[0]]||j["* "+h[0]])){g===!0?g=j[e]:j[e]!==!0&&(f=h[0],k.unshift(h[1]));break}if(g!==!0)if(g&&a["throws"])b=g(b);else try{b=g(b)}catch(l){return{state:"parsererror",error:g?l:"No conversion from "+i+" to "+f}}}return{state:"success",data:b}}n.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:ob,type:"GET",isLocal:hb.test(pb[1]),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":nb,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/xml/,html:/html/,json:/json/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":n.parseJSON,"text xml":n.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(a,b){return b?sb(sb(a,n.ajaxSettings),b):sb(n.ajaxSettings,a)},ajaxPrefilter:qb(lb),ajaxTransport:qb(mb),ajax:function(a,b){"object"==typeof a&&(b=a,a=void 0),b=b||{};var c,d,e,f,g,h,i,j,k=n.ajaxSetup({},b),l=k.context||k,m=k.context&&(l.nodeType||l.jquery)?n(l):n.event,o=n.Deferred(),p=n.Callbacks("once memory"),q=k.statusCode||{},r={},s={},t=0,u="canceled",v={readyState:0,getResponseHeader:function(a){var b;if(2===t){if(!f){f={};while(b=gb.exec(e))f[b[1].toLowerCase()]=b[2]}b=f[a.toLowerCase()]}return null==b?null:b},getAllResponseHeaders:function(){return 2===t?e:null},setRequestHeader:function(a,b){var c=a.toLowerCase();return t||(a=s[c]=s[c]||a,r[a]=b),this},overrideMimeType:function(a){return t||(k.mimeType=a),this},statusCode:function(a){var b;if(a)if(2>t)for(b in a)q[b]=[q[b],a[b]];else v.always(a[v.status]);return this},abort:function(a){var b=a||u;return c&&c.abort(b),x(0,b),this}};if(o.promise(v).complete=p.add,v.success=v.done,v.error=v.fail,k.url=((a||k.url||ob)+"").replace(eb,"").replace(jb,pb[1]+"//"),k.type=b.method||b.type||k.method||k.type,k.dataTypes=n.trim(k.dataType||"*").toLowerCase().match(E)||[""],null==k.crossDomain&&(h=kb.exec(k.url.toLowerCase()),k.crossDomain=!(!h||h[1]===pb[1]&&h[2]===pb[2]&&(h[3]||("http:"===h[1]?"80":"443"))===(pb[3]||("http:"===pb[1]?"80":"443")))),k.data&&k.processData&&"string"!=typeof k.data&&(k.data=n.param(k.data,k.traditional)),rb(lb,k,b,v),2===t)return v;i=n.event&&k.global,i&&0===n.active++&&n.event.trigger("ajaxStart"),k.type=k.type.toUpperCase(),k.hasContent=!ib.test(k.type),d=k.url,k.hasContent||(k.data&&(d=k.url+=(db.test(d)?"&":"?")+k.data,delete k.data),k.cache===!1&&(k.url=fb.test(d)?d.replace(fb,"$1_="+cb++):d+(db.test(d)?"&":"?")+"_="+cb++)),k.ifModified&&(n.lastModified[d]&&v.setRequestHeader("If-Modified-Since",n.lastModified[d]),n.etag[d]&&v.setRequestHeader("If-None-Match",n.etag[d])),(k.data&&k.hasContent&&k.contentType!==!1||b.contentType)&&v.setRequestHeader("Content-Type",k.contentType),v.setRequestHeader("Accept",k.dataTypes[0]&&k.accepts[k.dataTypes[0]]?k.accepts[k.dataTypes[0]]+("*"!==k.dataTypes[0]?", "+nb+"; q=0.01":""):k.accepts["*"]);for(j in k.headers)v.setRequestHeader(j,k.headers[j]);if(k.beforeSend&&(k.beforeSend.call(l,v,k)===!1||2===t))return v.abort();u="abort";for(j in{success:1,error:1,complete:1})v[j](k[j]);if(c=rb(mb,k,b,v)){v.readyState=1,i&&m.trigger("ajaxSend",[v,k]),k.async&&k.timeout>0&&(g=setTimeout(function(){v.abort("timeout")},k.timeout));try{t=1,c.send(r,x)}catch(w){if(!(2>t))throw w;x(-1,w)}}else x(-1,"No Transport");function x(a,b,f,h){var j,r,s,u,w,x=b;2!==t&&(t=2,g&&clearTimeout(g),c=void 0,e=h||"",v.readyState=a>0?4:0,j=a>=200&&300>a||304===a,f&&(u=tb(k,v,f)),u=ub(k,u,v,j),j?(k.ifModified&&(w=v.getResponseHeader("Last-Modified"),w&&(n.lastModified[d]=w),w=v.getResponseHeader("etag"),w&&(n.etag[d]=w)),204===a||"HEAD"===k.type?x="nocontent":304===a?x="notmodified":(x=u.state,r=u.data,s=u.error,j=!s)):(s=x,(a||!x)&&(x="error",0>a&&(a=0))),v.status=a,v.statusText=(b||x)+"",j?o.resolveWith(l,[r,x,v]):o.rejectWith(l,[v,x,s]),v.statusCode(q),q=void 0,i&&m.trigger(j?"ajaxSuccess":"ajaxError",[v,k,j?r:s]),p.fireWith(l,[v,x]),i&&(m.trigger("ajaxComplete",[v,k]),--n.active||n.event.trigger("ajaxStop")))}return v},getJSON:function(a,b,c){return n.get(a,b,c,"json")},getScript:function(a,b){return n.get(a,void 0,b,"script")}}),n.each(["get","post"],function(a,b){n[b]=function(a,c,d,e){return n.isFunction(c)&&(e=e||d,d=c,c=void 0),n.ajax({url:a,type:b,dataType:e,data:c,success:d})}}),n._evalUrl=function(a){return n.ajax({url:a,type:"GET",dataType:"script",async:!1,global:!1,"throws":!0})},n.fn.extend({wrapAll:function(a){var b;return n.isFunction(a)?this.each(function(b){n(this).wrapAll(a.call(this,b))}):(this[0]&&(b=n(a,this[0].ownerDocument).eq(0).clone(!0),this[0].parentNode&&b.insertBefore(this[0]),b.map(function(){var a=this;while(a.firstElementChild)a=a.firstElementChild;return a}).append(this)),this)},wrapInner:function(a){return this.each(n.isFunction(a)?function(b){n(this).wrapInner(a.call(this,b))}:function(){var b=n(this),c=b.contents();c.length?c.wrapAll(a):b.append(a)})},wrap:function(a){var b=n.isFunction(a);return this.each(function(c){n(this).wrapAll(b?a.call(this,c):a)})},unwrap:function(){return this.parent().each(function(){n.nodeName(this,"body")||n(this).replaceWith(this.childNodes)}).end()}}),n.expr.filters.hidden=function(a){return a.offsetWidth<=0&&a.offsetHeight<=0},n.expr.filters.visible=function(a){return!n.expr.filters.hidden(a)};var vb=/%20/g,wb=/\[\]$/,xb=/\r?\n/g,yb=/^(?:submit|button|image|reset|file)$/i,zb=/^(?:input|select|textarea|keygen)/i;function Ab(a,b,c,d){var e;if(n.isArray(b))n.each(b,function(b,e){c||wb.test(a)?d(a,e):Ab(a+"["+("object"==typeof e?b:"")+"]",e,c,d)});else if(c||"object"!==n.type(b))d(a,b);else for(e in b)Ab(a+"["+e+"]",b[e],c,d)}n.param=function(a,b){var c,d=[],e=function(a,b){b=n.isFunction(b)?b():null==b?"":b,d[d.length]=encodeURIComponent(a)+"="+encodeURIComponent(b)};if(void 0===b&&(b=n.ajaxSettings&&n.ajaxSettings.traditional),n.isArray(a)||a.jquery&&!n.isPlainObject(a))n.each(a,function(){e(this.name,this.value)});else for(c in a)Ab(c,a[c],b,e);return d.join("&").replace(vb,"+")},n.fn.extend({serialize:function(){return n.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var a=n.prop(this,"elements");return a?n.makeArray(a):this}).filter(function(){var a=this.type;return this.name&&!n(this).is(":disabled")&&zb.test(this.nodeName)&&!yb.test(a)&&(this.checked||!T.test(a))}).map(function(a,b){var c=n(this).val();return null==c?null:n.isArray(c)?n.map(c,function(a){return{name:b.name,value:a.replace(xb,"\r\n")}}):{name:b.name,value:c.replace(xb,"\r\n")}}).get()}}),n.ajaxSettings.xhr=function(){try{return new XMLHttpRequest}catch(a){}};var Bb=0,Cb={},Db={0:200,1223:204},Eb=n.ajaxSettings.xhr();a.attachEvent&&a.attachEvent("onunload",function(){for(var a in Cb)Cb[a]()}),k.cors=!!Eb&&"withCredentials"in Eb,k.ajax=Eb=!!Eb,n.ajaxTransport(function(a){var b;return k.cors||Eb&&!a.crossDomain?{send:function(c,d){var e,f=a.xhr(),g=++Bb;if(f.open(a.type,a.url,a.async,a.username,a.password),a.xhrFields)for(e in a.xhrFields)f[e]=a.xhrFields[e];a.mimeType&&f.overrideMimeType&&f.overrideMimeType(a.mimeType),a.crossDomain||c["X-Requested-With"]||(c["X-Requested-With"]="XMLHttpRequest");for(e in c)f.setRequestHeader(e,c[e]);b=function(a){return function(){b&&(delete Cb[g],b=f.onload=f.onerror=null,"abort"===a?f.abort():"error"===a?d(f.status,f.statusText):d(Db[f.status]||f.status,f.statusText,"string"==typeof f.responseText?{text:f.responseText}:void 0,f.getAllResponseHeaders()))}},f.onload=b(),f.onerror=b("error"),b=Cb[g]=b("abort");try{f.send(a.hasContent&&a.data||null)}catch(h){if(b)throw h}},abort:function(){b&&b()}}:void 0}),n.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/(?:java|ecma)script/},converters:{"text script":function(a){return n.globalEval(a),a}}}),n.ajaxPrefilter("script",function(a){void 0===a.cache&&(a.cache=!1),a.crossDomain&&(a.type="GET")}),n.ajaxTransport("script",function(a){if(a.crossDomain){var b,c;return{send:function(d,e){b=n("<script>").prop({async:!0,charset:a.scriptCharset,src:a.url}).on("load error",c=function(a){b.remove(),c=null,a&&e("error"===a.type?404:200,a.type)}),l.head.appendChild(b[0])},abort:function(){c&&c()}}}});var Fb=[],Gb=/(=)\?(?=&|$)|\?\?/;n.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var a=Fb.pop()||n.expando+"_"+cb++;return this[a]=!0,a}}),n.ajaxPrefilter("json jsonp",function(b,c,d){var e,f,g,h=b.jsonp!==!1&&(Gb.test(b.url)?"url":"string"==typeof b.data&&!(b.contentType||"").indexOf("application/x-www-form-urlencoded")&&Gb.test(b.data)&&"data");return h||"jsonp"===b.dataTypes[0]?(e=b.jsonpCallback=n.isFunction(b.jsonpCallback)?b.jsonpCallback():b.jsonpCallback,h?b[h]=b[h].replace(Gb,"$1"+e):b.jsonp!==!1&&(b.url+=(db.test(b.url)?"&":"?")+b.jsonp+"="+e),b.converters["script json"]=function(){return g||n.error(e+" was not called"),g[0]},b.dataTypes[0]="json",f=a[e],a[e]=function(){g=arguments},d.always(function(){a[e]=f,b[e]&&(b.jsonpCallback=c.jsonpCallback,Fb.push(e)),g&&n.isFunction(f)&&f(g[0]),g=f=void 0}),"script"):void 0}),n.parseHTML=function(a,b,c){if(!a||"string"!=typeof a)return null;"boolean"==typeof b&&(c=b,b=!1),b=b||l;var d=v.exec(a),e=!c&&[];return d?[b.createElement(d[1])]:(d=n.buildFragment([a],b,e),e&&e.length&&n(e).remove(),n.merge([],d.childNodes))};var Hb=n.fn.load;n.fn.load=function(a,b,c){if("string"!=typeof a&&Hb)return Hb.apply(this,arguments);var d,e,f,g=this,h=a.indexOf(" ");return h>=0&&(d=n.trim(a.slice(h)),a=a.slice(0,h)),n.isFunction(b)?(c=b,b=void 0):b&&"object"==typeof b&&(e="POST"),g.length>0&&n.ajax({url:a,type:e,dataType:"html",data:b}).done(function(a){f=arguments,g.html(d?n("<div>").append(n.parseHTML(a)).find(d):a)}).complete(c&&function(a,b){g.each(c,f||[a.responseText,b,a])}),this},n.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(a,b){n.fn[b]=function(a){return this.on(b,a)}}),n.expr.filters.animated=function(a){return n.grep(n.timers,function(b){return a===b.elem}).length};var Ib=a.document.documentElement;function Jb(a){return n.isWindow(a)?a:9===a.nodeType&&a.defaultView}n.offset={setOffset:function(a,b,c){var d,e,f,g,h,i,j,k=n.css(a,"position"),l=n(a),m={};"static"===k&&(a.style.position="relative"),h=l.offset(),f=n.css(a,"top"),i=n.css(a,"left"),j=("absolute"===k||"fixed"===k)&&(f+i).indexOf("auto")>-1,j?(d=l.position(),g=d.top,e=d.left):(g=parseFloat(f)||0,e=parseFloat(i)||0),n.isFunction(b)&&(b=b.call(a,c,h)),null!=b.top&&(m.top=b.top-h.top+g),null!=b.left&&(m.left=b.left-h.left+e),"using"in b?b.using.call(a,m):l.css(m)}},n.fn.extend({offset:function(a){if(arguments.length)return void 0===a?this:this.each(function(b){n.offset.setOffset(this,a,b)});var b,c,d=this[0],e={top:0,left:0},f=d&&d.ownerDocument;if(f)return b=f.documentElement,n.contains(b,d)?(typeof d.getBoundingClientRect!==U&&(e=d.getBoundingClientRect()),c=Jb(f),{top:e.top+c.pageYOffset-b.clientTop,left:e.left+c.pageXOffset-b.clientLeft}):e},position:function(){if(this[0]){var a,b,c=this[0],d={top:0,left:0};return"fixed"===n.css(c,"position")?b=c.getBoundingClientRect():(a=this.offsetParent(),b=this.offset(),n.nodeName(a[0],"html")||(d=a.offset()),d.top+=n.css(a[0],"borderTopWidth",!0),d.left+=n.css(a[0],"borderLeftWidth",!0)),{top:b.top-d.top-n.css(c,"marginTop",!0),left:b.left-d.left-n.css(c,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){var a=this.offsetParent||Ib;while(a&&!n.nodeName(a,"html")&&"static"===n.css(a,"position"))a=a.offsetParent;return a||Ib})}}),n.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(b,c){var d="pageYOffset"===c;n.fn[b]=function(e){return J(this,function(b,e,f){var g=Jb(b);return void 0===f?g?g[c]:b[e]:void(g?g.scrollTo(d?a.pageXOffset:f,d?f:a.pageYOffset):b[e]=f)},b,e,arguments.length,null)}}),n.each(["top","left"],function(a,b){n.cssHooks[b]=ya(k.pixelPosition,function(a,c){return c?(c=xa(a,b),va.test(c)?n(a).position()[b]+"px":c):void 0})}),n.each({Height:"height",Width:"width"},function(a,b){n.each({padding:"inner"+a,content:b,"":"outer"+a},function(c,d){n.fn[d]=function(d,e){var f=arguments.length&&(c||"boolean"!=typeof d),g=c||(d===!0||e===!0?"margin":"border");return J(this,function(b,c,d){var e;return n.isWindow(b)?b.document.documentElement["client"+a]:9===b.nodeType?(e=b.documentElement,Math.max(b.body["scroll"+a],e["scroll"+a],b.body["offset"+a],e["offset"+a],e["client"+a])):void 0===d?n.css(b,c,g):n.style(b,c,d,g)},b,f?d:void 0,f,null)}})}),n.fn.size=function(){return this.length},n.fn.andSelf=n.fn.addBack,"function"==typeof define&&define.amd&&define("jquery",[],function(){return n});var Kb=a.jQuery,Lb=a.$;return n.noConflict=function(b){return a.$===n&&(a.$=Lb),b&&a.jQuery===n&&(a.jQuery=Kb),n},typeof b===U&&(a.jQuery=a.$=n),n});
        //Jquery end.

    /*!
     * jQuery Mousewheel 3.1.12
     *
     * Copyright 2014 jQuery Foundation and other contributors
     * Released under the MIT license.
     * http://jquery.org/license
     */

    (function (factory) {
        if ( typeof define === 'function' && define.amd ) {
            // AMD. Register as an anonymous module.
            define(['jquery'], factory);
        } else if (typeof exports === 'object') {
            // Node/CommonJS style for Browserify
            module.exports = factory;
        } else {
            // Browser globals
            factory(jQuery);
        }
    }(function ($) {

        var toFix  = ['wheel', 'mousewheel', 'DOMMouseScroll', 'MozMousePixelScroll'],
            toBind = ( 'onwheel' in document || document.documentMode >= 9 ) ?
                ['wheel'] : ['mousewheel', 'DomMouseScroll', 'MozMousePixelScroll'],
            slice  = Array.prototype.slice,
            nullLowestDeltaTimeout, lowestDelta;

        if ( $.event.fixHooks ) {
            for ( var i = toFix.length; i; ) {
                $.event.fixHooks[ toFix[--i] ] = $.event.mouseHooks;
            }
        }

        var special = $.event.special.mousewheel = {
            version: '3.1.12',

            setup: function() {
                if ( this.addEventListener ) {
                    for ( var i = toBind.length; i; ) {
                        this.addEventListener( toBind[--i], handler, false );
                    }
                } else {
                    this.onmousewheel = handler;
                }
                // Store the line height and page height for this particular element
                $.data(this, 'mousewheel-line-height', special.getLineHeight(this));
                $.data(this, 'mousewheel-page-height', special.getPageHeight(this));
            },

            teardown: function() {
                if ( this.removeEventListener ) {
                    for ( var i = toBind.length; i; ) {
                        this.removeEventListener( toBind[--i], handler, false );
                    }
                } else {
                    this.onmousewheel = null;
                }
                // Clean up the data we added to the element
                $.removeData(this, 'mousewheel-line-height');
                $.removeData(this, 'mousewheel-page-height');
            },

            getLineHeight: function(elem) {
                var $elem = $(elem),
                    $parent = $elem['offsetParent' in $.fn ? 'offsetParent' : 'parent']();
                if (!$parent.length) {
                    $parent = $('body');
                }
                return parseInt($parent.css('fontSize'), 10) || parseInt($elem.css('fontSize'), 10) || 16;
            },

            getPageHeight: function(elem) {
                return $(elem).height();
            },

            settings: {
                adjustOldDeltas: true, // see shouldAdjustOldDeltas() below
                normalizeOffset: true  // calls getBoundingClientRect for each event
            }
        };

        $.fn.extend({
            mousewheel: function(fn) {
                return fn ? this.bind('mousewheel', fn) : this.trigger('mousewheel');
            },

            unmousewheel: function(fn) {
                return this.unbind('mousewheel', fn);
            }
        });


        function handler(event) {
            var orgEvent   = event || window.event,
                args       = slice.call(arguments, 1),
                delta      = 0,
                deltaX     = 0,
                deltaY     = 0,
                absDelta   = 0,
                offsetX    = 0,
                offsetY    = 0;
            event = $.event.fix(orgEvent);
            event.type = 'mousewheel';

            // Old school scrollwheel delta
            if ( 'detail'      in orgEvent ) { deltaY = orgEvent.detail * -1;      }
            if ( 'wheelDelta'  in orgEvent ) { deltaY = orgEvent.wheelDelta;       }
            if ( 'wheelDeltaY' in orgEvent ) { deltaY = orgEvent.wheelDeltaY;      }
            if ( 'wheelDeltaX' in orgEvent ) { deltaX = orgEvent.wheelDeltaX * -1; }

            // Firefox < 17 horizontal scrolling related to DOMMouseScroll event
            if ( 'axis' in orgEvent && orgEvent.axis === orgEvent.HORIZONTAL_AXIS ) {
                deltaX = deltaY * -1;
                deltaY = 0;
            }

            // Set delta to be deltaY or deltaX if deltaY is 0 for backwards compatabilitiy
            delta = deltaY === 0 ? deltaX : deltaY;

            // New school wheel delta (wheel event)
            if ( 'deltaY' in orgEvent ) {
                deltaY = orgEvent.deltaY * -1;
                delta  = deltaY;
            }
            if ( 'deltaX' in orgEvent ) {
                deltaX = orgEvent.deltaX;
                if ( deltaY === 0 ) { delta  = deltaX * -1; }
            }

            // No change actually happened, no reason to go any further
            if ( deltaY === 0 && deltaX === 0 ) { return; }

            // Need to convert lines and pages to pixels if we aren't already in pixels
            // There are three delta modes:
            //   * deltaMode 0 is by pixels, nothing to do
            //   * deltaMode 1 is by lines
            //   * deltaMode 2 is by pages
            if ( orgEvent.deltaMode === 1 ) {
                var lineHeight = $.data(this, 'mousewheel-line-height');
                delta  *= lineHeight;
                deltaY *= lineHeight;
                deltaX *= lineHeight;
            } else if ( orgEvent.deltaMode === 2 ) {
                var pageHeight = $.data(this, 'mousewheel-page-height');
                delta  *= pageHeight;
                deltaY *= pageHeight;
                deltaX *= pageHeight;
            }

            // Store lowest absolute delta to normalize the delta values
            absDelta = Math.max( Math.abs(deltaY), Math.abs(deltaX) );

            if ( !lowestDelta || absDelta < lowestDelta ) {
                lowestDelta = absDelta;

                // Adjust older deltas if necessary
                if ( shouldAdjustOldDeltas(orgEvent, absDelta) ) {
                    lowestDelta /= 40;
                }
            }

            // Adjust older deltas if necessary
            if ( shouldAdjustOldDeltas(orgEvent, absDelta) ) {
                // Divide all the things by 40!
                delta  /= 40;
                deltaX /= 40;
                deltaY /= 40;
            }

            // Get a whole, normalized value for the deltas
            delta  = Math[ delta  >= 1 ? 'floor' : 'ceil' ](delta  / lowestDelta);
            deltaX = Math[ deltaX >= 1 ? 'floor' : 'ceil' ](deltaX / lowestDelta);
            deltaY = Math[ deltaY >= 1 ? 'floor' : 'ceil' ](deltaY / lowestDelta);

            // Normalise offsetX and offsetY properties
            if ( special.settings.normalizeOffset && this.getBoundingClientRect ) {
                var boundingRect = this.getBoundingClientRect();
                offsetX = event.clientX - boundingRect.left;
                offsetY = event.clientY - boundingRect.top;
            }

            // Add information to the event object
            event.deltaX = deltaX;
            event.deltaY = deltaY;
            event.deltaFactor = lowestDelta;
            event.offsetX = offsetX;
            event.offsetY = offsetY;
            // Go ahead and set deltaMode to 0 since we converted to pixels
            // Although this is a little odd since we overwrite the deltaX/Y
            // properties with normalized deltas.
            event.deltaMode = 0;

            // Add event and delta to the front of the arguments
            args.unshift(event, delta, deltaX, deltaY);

            // Clearout lowestDelta after sometime to better
            // handle multiple device types that give different
            // a different lowestDelta
            // Ex: trackpad = 3 and mouse wheel = 120
            if (nullLowestDeltaTimeout) { clearTimeout(nullLowestDeltaTimeout); }
            nullLowestDeltaTimeout = setTimeout(nullLowestDelta, 200);

            return ($.event.dispatch || $.event.handle).apply(this, args);
        }

        function nullLowestDelta() {
            lowestDelta = null;
        }

        function shouldAdjustOldDeltas(orgEvent, absDelta) {
            // If this is an older event and the delta is divisable by 120,
            // then we are assuming that the browser is treating this as an
            // older mouse wheel event and that we should divide the deltas
            // by 40 to try and get a more usable deltaFactor.
            // Side note, this actually impacts the reported scroll distance
            // in older browsers and can cause scrolling to be slower than native.
            // Turn this off by setting $.event.special.mousewheel.settings.adjustOldDeltas to false.
            return special.settings.adjustOldDeltas && orgEvent.type === 'mousewheel' && absDelta % 120 === 0;
        }

    }));
    //End mouseweel.

    /*
     * jScrollPane - v2.0.23 - 2016-01-28
     * http://jscrollpane.kelvinluck.com/
     *
     * Copyright (c) 2014 Kelvin Luck
     * Dual licensed under the MIT or GPL licenses.
     */
    !function(a){"function"==typeof define&&define.amd?define(["jquery"],a):"object"==typeof exports?module.exports=a(require("jquery")):a(jQuery)}(function(a){a.fn.jScrollPane=function(b){function c(b,c){function d(c){var f,h,j,k,l,o,p=!1,q=!1;if(N=c,void 0===O)l=b.scrollTop(),o=b.scrollLeft(),b.css({overflow:"hidden",padding:0}),P=b.innerWidth()+rb,Q=b.innerHeight(),b.width(P),O=a('<div class="jspPane" />').css("padding",qb).append(b.children()),R=a('<div class="jspContainer" />').css({width:P+"px",height:Q+"px"}).append(O).appendTo(b);else{if(b.css("width",""),p=N.stickToBottom&&A(),q=N.stickToRight&&B(),k=b.innerWidth()+rb!=P||b.outerHeight()!=Q,k&&(P=b.innerWidth()+rb,Q=b.innerHeight(),R.css({width:P+"px",height:Q+"px"})),!k&&sb==S&&O.outerHeight()==T)return void b.width(P);sb=S,O.css("width",""),b.width(P),R.find(">.jspVerticalBar,>.jspHorizontalBar").remove().end()}O.css("overflow","auto"),S=c.contentWidth?c.contentWidth:O[0].scrollWidth,T=O[0].scrollHeight,O.css("overflow",""),U=S/P,V=T/Q,W=V>1,X=U>1,X||W?(b.addClass("jspScrollable"),f=N.maintainPosition&&($||bb),f&&(h=y(),j=z()),e(),g(),i(),f&&(w(q?S-P:h,!1),v(p?T-Q:j,!1)),F(),C(),L(),N.enableKeyboardNavigation&&H(),N.clickOnTrack&&m(),J(),N.hijackInternalLinks&&K()):(b.removeClass("jspScrollable"),O.css({top:0,left:0,width:R.width()-rb}),D(),G(),I(),n()),N.autoReinitialise&&!pb?pb=setInterval(function(){d(N)},N.autoReinitialiseDelay):!N.autoReinitialise&&pb&&clearInterval(pb),l&&b.scrollTop(0)&&v(l,!1),o&&b.scrollLeft(0)&&w(o,!1),b.trigger("jsp-initialised",[X||W])}function e(){W&&(R.append(a('<div class="jspVerticalBar" />').append(a('<div class="jspCap jspCapTop" />'),a('<div class="jspTrack" />').append(a('<div class="jspDrag" />').append(a('<div class="jspDragTop" />'),a('<div class="jspDragBottom" />'))),a('<div class="jspCap jspCapBottom" />'))),cb=R.find(">.jspVerticalBar"),db=cb.find(">.jspTrack"),Y=db.find(">.jspDrag"),N.showArrows&&(hb=a('<a class="jspArrow jspArrowUp" />').bind("mousedown.jsp",k(0,-1)).bind("click.jsp",E),ib=a('<a class="jspArrow jspArrowDown" />').bind("mousedown.jsp",k(0,1)).bind("click.jsp",E),N.arrowScrollOnHover&&(hb.bind("mouseover.jsp",k(0,-1,hb)),ib.bind("mouseover.jsp",k(0,1,ib))),j(db,N.verticalArrowPositions,hb,ib)),fb=Q,R.find(">.jspVerticalBar>.jspCap:visible,>.jspVerticalBar>.jspArrow").each(function(){fb-=a(this).outerHeight()}),Y.hover(function(){Y.addClass("jspHover")},function(){Y.removeClass("jspHover")}).bind("mousedown.jsp",function(b){a("html").bind("dragstart.jsp selectstart.jsp",E),Y.addClass("jspActive");var c=b.pageY-Y.position().top;return a("html").bind("mousemove.jsp",function(a){p(a.pageY-c,!1)}).bind("mouseup.jsp mouseleave.jsp",o),!1}),f())}function f(){db.height(fb+"px"),$=0,eb=N.verticalGutter+db.outerWidth(),O.width(P-eb-rb);try{0===cb.position().left&&O.css("margin-left",eb+"px")}catch(a){}}function g(){X&&(R.append(a('<div class="jspHorizontalBar" />').append(a('<div class="jspCap jspCapLeft" />'),a('<div class="jspTrack" />').append(a('<div class="jspDrag" />').append(a('<div class="jspDragLeft" />'),a('<div class="jspDragRight" />'))),a('<div class="jspCap jspCapRight" />'))),jb=R.find(">.jspHorizontalBar"),kb=jb.find(">.jspTrack"),_=kb.find(">.jspDrag"),N.showArrows&&(nb=a('<a class="jspArrow jspArrowLeft" />').bind("mousedown.jsp",k(-1,0)).bind("click.jsp",E),ob=a('<a class="jspArrow jspArrowRight" />').bind("mousedown.jsp",k(1,0)).bind("click.jsp",E),N.arrowScrollOnHover&&(nb.bind("mouseover.jsp",k(-1,0,nb)),ob.bind("mouseover.jsp",k(1,0,ob))),j(kb,N.horizontalArrowPositions,nb,ob)),_.hover(function(){_.addClass("jspHover")},function(){_.removeClass("jspHover")}).bind("mousedown.jsp",function(b){a("html").bind("dragstart.jsp selectstart.jsp",E),_.addClass("jspActive");var c=b.pageX-_.position().left;return a("html").bind("mousemove.jsp",function(a){r(a.pageX-c,!1)}).bind("mouseup.jsp mouseleave.jsp",o),!1}),lb=R.innerWidth(),h())}function h(){R.find(">.jspHorizontalBar>.jspCap:visible,>.jspHorizontalBar>.jspArrow").each(function(){lb-=a(this).outerWidth()}),kb.width(lb+"px"),bb=0}function i(){if(X&&W){var b=kb.outerHeight(),c=db.outerWidth();fb-=b,a(jb).find(">.jspCap:visible,>.jspArrow").each(function(){lb+=a(this).outerWidth()}),lb-=c,Q-=c,P-=b,kb.parent().append(a('<div class="jspCorner" />').css("width",b+"px")),f(),h()}X&&O.width(R.outerWidth()-rb+"px"),T=O.outerHeight(),V=T/Q,X&&(mb=Math.ceil(1/U*lb),mb>N.horizontalDragMaxWidth?mb=N.horizontalDragMaxWidth:mb<N.horizontalDragMinWidth&&(mb=N.horizontalDragMinWidth),_.width(mb+"px"),ab=lb-mb,s(bb)),W&&(gb=Math.ceil(1/V*fb),gb>N.verticalDragMaxHeight?gb=N.verticalDragMaxHeight:gb<N.verticalDragMinHeight&&(gb=N.verticalDragMinHeight),Y.height(gb+"px"),Z=fb-gb,q($))}function j(a,b,c,d){var e,f="before",g="after";"os"==b&&(b=/Mac/.test(navigator.platform)?"after":"split"),b==f?g=b:b==g&&(f=b,e=c,c=d,d=e),a[f](c)[g](d)}function k(a,b,c){return function(){return l(a,b,this,c),this.blur(),!1}}function l(b,c,d,e){d=a(d).addClass("jspActive");var f,g,h=!0,i=function(){0!==b&&tb.scrollByX(b*N.arrowButtonSpeed),0!==c&&tb.scrollByY(c*N.arrowButtonSpeed),g=setTimeout(i,h?N.initialDelay:N.arrowRepeatFreq),h=!1};i(),f=e?"mouseout.jsp":"mouseup.jsp",e=e||a("html"),e.bind(f,function(){d.removeClass("jspActive"),g&&clearTimeout(g),g=null,e.unbind(f)})}function m(){n(),W&&db.bind("mousedown.jsp",function(b){if(void 0===b.originalTarget||b.originalTarget==b.currentTarget){var c,d=a(this),e=d.offset(),f=b.pageY-e.top-$,g=!0,h=function(){var a=d.offset(),e=b.pageY-a.top-gb/2,j=Q*N.scrollPagePercent,k=Z*j/(T-Q);if(0>f)$-k>e?tb.scrollByY(-j):p(e);else{if(!(f>0))return void i();e>$+k?tb.scrollByY(j):p(e)}c=setTimeout(h,g?N.initialDelay:N.trackClickRepeatFreq),g=!1},i=function(){c&&clearTimeout(c),c=null,a(document).unbind("mouseup.jsp",i)};return h(),a(document).bind("mouseup.jsp",i),!1}}),X&&kb.bind("mousedown.jsp",function(b){if(void 0===b.originalTarget||b.originalTarget==b.currentTarget){var c,d=a(this),e=d.offset(),f=b.pageX-e.left-bb,g=!0,h=function(){var a=d.offset(),e=b.pageX-a.left-mb/2,j=P*N.scrollPagePercent,k=ab*j/(S-P);if(0>f)bb-k>e?tb.scrollByX(-j):r(e);else{if(!(f>0))return void i();e>bb+k?tb.scrollByX(j):r(e)}c=setTimeout(h,g?N.initialDelay:N.trackClickRepeatFreq),g=!1},i=function(){c&&clearTimeout(c),c=null,a(document).unbind("mouseup.jsp",i)};return h(),a(document).bind("mouseup.jsp",i),!1}})}function n(){kb&&kb.unbind("mousedown.jsp"),db&&db.unbind("mousedown.jsp")}function o(){a("html").unbind("dragstart.jsp selectstart.jsp mousemove.jsp mouseup.jsp mouseleave.jsp"),Y&&Y.removeClass("jspActive"),_&&_.removeClass("jspActive")}function p(c,d){if(W){0>c?c=0:c>Z&&(c=Z);var e=new a.Event("jsp-will-scroll-y");if(b.trigger(e,[c]),!e.isDefaultPrevented()){var f=c||0,g=0===f,h=f==Z,i=c/Z,j=-i*(T-Q);void 0===d&&(d=N.animateScroll),d?tb.animate(Y,"top",c,q,function(){b.trigger("jsp-user-scroll-y",[-j,g,h])}):(Y.css("top",c),q(c),b.trigger("jsp-user-scroll-y",[-j,g,h]))}}}function q(a){void 0===a&&(a=Y.position().top),R.scrollTop(0),$=a||0;var c=0===$,d=$==Z,e=a/Z,f=-e*(T-Q);(ub!=c||wb!=d)&&(ub=c,wb=d,b.trigger("jsp-arrow-change",[ub,wb,vb,xb])),t(c,d),O.css("top",f),b.trigger("jsp-scroll-y",[-f,c,d]).trigger("scroll")}function r(c,d){if(X){0>c?c=0:c>ab&&(c=ab);var e=new a.Event("jsp-will-scroll-x");if(b.trigger(e,[c]),!e.isDefaultPrevented()){var f=c||0,g=0===f,h=f==ab,i=c/ab,j=-i*(S-P);void 0===d&&(d=N.animateScroll),d?tb.animate(_,"left",c,s,function(){b.trigger("jsp-user-scroll-x",[-j,g,h])}):(_.css("left",c),s(c),b.trigger("jsp-user-scroll-x",[-j,g,h]))}}}function s(a){void 0===a&&(a=_.position().left),R.scrollTop(0),bb=a||0;var c=0===bb,d=bb==ab,e=a/ab,f=-e*(S-P);(vb!=c||xb!=d)&&(vb=c,xb=d,b.trigger("jsp-arrow-change",[ub,wb,vb,xb])),u(c,d),O.css("left",f),b.trigger("jsp-scroll-x",[-f,c,d]).trigger("scroll")}function t(a,b){N.showArrows&&(hb[a?"addClass":"removeClass"]("jspDisabled"),ib[b?"addClass":"removeClass"]("jspDisabled"))}function u(a,b){N.showArrows&&(nb[a?"addClass":"removeClass"]("jspDisabled"),ob[b?"addClass":"removeClass"]("jspDisabled"))}function v(a,b){var c=a/(T-Q);p(c*Z,b)}function w(a,b){var c=a/(S-P);r(c*ab,b)}function x(b,c,d){var e,f,g,h,i,j,k,l,m,n=0,o=0;try{e=a(b)}catch(p){return}for(f=e.outerHeight(),g=e.outerWidth(),R.scrollTop(0),R.scrollLeft(0);!e.is(".jspPane");)if(n+=e.position().top,o+=e.position().left,e=e.offsetParent(),/^body|html$/i.test(e[0].nodeName))return;h=z(),j=h+Q,h>n||c?l=n-N.horizontalGutter:n+f>j&&(l=n-Q+f+N.horizontalGutter),isNaN(l)||v(l,d),i=y(),k=i+P,i>o||c?m=o-N.horizontalGutter:o+g>k&&(m=o-P+g+N.horizontalGutter),isNaN(m)||w(m,d)}function y(){return-O.position().left}function z(){return-O.position().top}function A(){var a=T-Q;return a>20&&a-z()<10}function B(){var a=S-P;return a>20&&a-y()<10}function C(){R.unbind(zb).bind(zb,function(a,b,c,d){bb||(bb=0),$||($=0);var e=bb,f=$,g=a.deltaFactor||N.mouseWheelSpeed;return tb.scrollBy(c*g,-d*g,!1),e==bb&&f==$})}function D(){R.unbind(zb)}function E(){return!1}function F(){O.find(":input,a").unbind("focus.jsp").bind("focus.jsp",function(a){x(a.target,!1)})}function G(){O.find(":input,a").unbind("focus.jsp")}function H(){function c(){var a=bb,b=$;switch(d){case 40:tb.scrollByY(N.keyboardSpeed,!1);break;case 38:tb.scrollByY(-N.keyboardSpeed,!1);break;case 34:case 32:tb.scrollByY(Q*N.scrollPagePercent,!1);break;case 33:tb.scrollByY(-Q*N.scrollPagePercent,!1);break;case 39:tb.scrollByX(N.keyboardSpeed,!1);break;case 37:tb.scrollByX(-N.keyboardSpeed,!1)}return e=a!=bb||b!=$}var d,e,f=[];X&&f.push(jb[0]),W&&f.push(cb[0]),O.bind("focus.jsp",function(){b.focus()}),b.attr("tabindex",0).unbind("keydown.jsp keypress.jsp").bind("keydown.jsp",function(b){if(b.target===this||f.length&&a(b.target).closest(f).length){var g=bb,h=$;switch(b.keyCode){case 40:case 38:case 34:case 32:case 33:case 39:case 37:d=b.keyCode,c();break;case 35:v(T-Q),d=null;break;case 36:v(0),d=null}return e=b.keyCode==d&&g!=bb||h!=$,!e}}).bind("keypress.jsp",function(b){return b.keyCode==d&&c(),b.target===this||f.length&&a(b.target).closest(f).length?!e:void 0}),N.hideFocus?(b.css("outline","none"),"hideFocus"in R[0]&&b.attr("hideFocus",!0)):(b.css("outline",""),"hideFocus"in R[0]&&b.attr("hideFocus",!1))}function I(){b.attr("tabindex","-1").removeAttr("tabindex").unbind("keydown.jsp keypress.jsp"),O.unbind(".jsp")}function J(){if(location.hash&&location.hash.length>1){var b,c,d=escape(location.hash.substr(1));try{b=a("#"+d+', a[name="'+d+'"]')}catch(e){return}b.length&&O.find(d)&&(0===R.scrollTop()?c=setInterval(function(){R.scrollTop()>0&&(x(b,!0),a(document).scrollTop(R.position().top),clearInterval(c))},50):(x(b,!0),a(document).scrollTop(R.position().top)))}}function K(){a(document.body).data("jspHijack")||(a(document.body).data("jspHijack",!0),a(document.body).delegate('a[href*="#"]',"click",function(b){var c,d,e,f,g,h,i=this.href.substr(0,this.href.indexOf("#")),j=location.href;if(-1!==location.href.indexOf("#")&&(j=location.href.substr(0,location.href.indexOf("#"))),i===j){c=escape(this.href.substr(this.href.indexOf("#")+1));try{d=a("#"+c+', a[name="'+c+'"]')}catch(k){return}d.length&&(e=d.closest(".jspScrollable"),f=e.data("jsp"),f.scrollToElement(d,!0),e[0].scrollIntoView&&(g=a(window).scrollTop(),h=d.offset().top,(g>h||h>g+a(window).height())&&e[0].scrollIntoView()),b.preventDefault())}}))}function L(){var a,b,c,d,e,f=!1;R.unbind("touchstart.jsp touchmove.jsp touchend.jsp click.jsp-touchclick").bind("touchstart.jsp",function(g){var h=g.originalEvent.touches[0];a=y(),b=z(),c=h.pageX,d=h.pageY,e=!1,f=!0}).bind("touchmove.jsp",function(g){if(f){var h=g.originalEvent.touches[0],i=bb,j=$;return tb.scrollTo(a+c-h.pageX,b+d-h.pageY),e=e||Math.abs(c-h.pageX)>5||Math.abs(d-h.pageY)>5,i==bb&&j==$}}).bind("touchend.jsp",function(){f=!1}).bind("click.jsp-touchclick",function(){return e?(e=!1,!1):void 0})}function M(){var a=z(),c=y();b.removeClass("jspScrollable").unbind(".jsp"),O.unbind(".jsp"),b.replaceWith(yb.append(O.children())),yb.scrollTop(a),yb.scrollLeft(c),pb&&clearInterval(pb)}var N,O,P,Q,R,S,T,U,V,W,X,Y,Z,$,_,ab,bb,cb,db,eb,fb,gb,hb,ib,jb,kb,lb,mb,nb,ob,pb,qb,rb,sb,tb=this,ub=!0,vb=!0,wb=!1,xb=!1,yb=b.clone(!1,!1).empty(),zb=a.fn.mwheelIntent?"mwheelIntent.jsp":"mousewheel.jsp";"border-box"===b.css("box-sizing")?(qb=0,rb=0):(qb=b.css("paddingTop")+" "+b.css("paddingRight")+" "+b.css("paddingBottom")+" "+b.css("paddingLeft"),rb=(parseInt(b.css("paddingLeft"),10)||0)+(parseInt(b.css("paddingRight"),10)||0)),a.extend(tb,{reinitialise:function(b){b=a.extend({},N,b),d(b)},scrollToElement:function(a,b,c){x(a,b,c)},scrollTo:function(a,b,c){w(a,c),v(b,c)},scrollToX:function(a,b){w(a,b)},scrollToY:function(a,b){v(a,b)},scrollToPercentX:function(a,b){w(a*(S-P),b)},scrollToPercentY:function(a,b){v(a*(T-Q),b)},scrollBy:function(a,b,c){tb.scrollByX(a,c),tb.scrollByY(b,c)},scrollByX:function(a,b){var c=y()+Math[0>a?"floor":"ceil"](a),d=c/(S-P);r(d*ab,b)},scrollByY:function(a,b){var c=z()+Math[0>a?"floor":"ceil"](a),d=c/(T-Q);p(d*Z,b)},positionDragX:function(a,b){r(a,b)},positionDragY:function(a,b){p(a,b)},animate:function(a,b,c,d,e){var f={};f[b]=c,a.animate(f,{duration:N.animateDuration,easing:N.animateEase,queue:!1,step:d,complete:e})},getContentPositionX:function(){return y()},getContentPositionY:function(){return z()},getContentWidth:function(){return S},getContentHeight:function(){return T},getPercentScrolledX:function(){return y()/(S-P)},getPercentScrolledY:function(){return z()/(T-Q)},getIsScrollableH:function(){return X},getIsScrollableV:function(){return W},getContentPane:function(){return O},scrollToBottom:function(a){p(Z,a)},hijackInternalLinks:a.noop,destroy:function(){M()}}),d(c)}return b=a.extend({},a.fn.jScrollPane.defaults,b),a.each(["arrowButtonSpeed","trackClickSpeed","keyboardSpeed"],function(){b[this]=b[this]||b.speed}),this.each(function(){var d=a(this),e=d.data("jsp");e?e.reinitialise(b):(a("script",d).filter('[type="text/javascript"],:not([type])').remove(),e=new c(d,b),d.data("jsp",e))})},a.fn.jScrollPane.defaults={showArrows:!1,maintainPosition:!0,stickToBottom:!1,stickToRight:!1,clickOnTrack:!0,autoReinitialise:!1,autoReinitialiseDelay:500,verticalDragMinHeight:0,verticalDragMaxHeight:99999,horizontalDragMinWidth:0,horizontalDragMaxWidth:99999,contentWidth:void 0,animateScroll:!1,animateDuration:300,animateEase:"linear",hijackInternalLinks:!1,verticalGutter:4,horizontalGutter:4,mouseWheelSpeed:3,arrowButtonSpeed:0,arrowRepeatFreq:50,arrowScrollOnHover:!1,trackClickSpeed:0,trackClickRepeatFreq:70,verticalArrowPositions:"split",horizontalArrowPositions:"split",enableKeyboardNavigation:!0,hideFocus:!1,keyboardSpeed:0,initialDelay:300,speed:30,scrollPagePercent:.8}});
    //End jScrollPane.

    /*!
     * jQuery Browser Plugin 0.1.0
     * https://github.com/gabceb/jquery-browser-plugin
     *
     * Original jquery-browser code Copyright 2005, 2015 jQuery Foundation, Inc. and other contributors
     * http://jquery.org/license
     *
     * Modifications Copyright 2015 Gabriel Cebrian
     * https://github.com/gabceb
     *
     * Released under the MIT license
     *
     * Date: 05-07-2015
     */
    /*global window: false */

    (function (factory) {
        if (typeof define === 'function' && define.amd) {
            // AMD. Register as an anonymous module.
            define(['jquery'], function ($) {
                return factory($);
            });
        } else if (typeof module === 'object' && typeof module.exports === 'object') {
            // Node-like environment
            module.exports = factory(require('jquery'));
        } else {
            // Browser globals
            factory(window.jQuery);
        }
    }(function(jQuery) {
        "use strict";

        function uaMatch( ua ) {
            // If an UA is not provided, default to the current browser UA.
            if ( ua === undefined ) {
                ua = window.navigator.userAgent;
            }
            ua = ua.toLowerCase();

            var match = /(edge)\/([\w.]+)/.exec( ua ) ||
                /(opr)[\/]([\w.]+)/.exec( ua ) ||
                /(chrome)[ \/]([\w.]+)/.exec( ua ) ||
                /(iemobile)[\/]([\w.]+)/.exec( ua ) ||
                /(version)(applewebkit)[ \/]([\w.]+).*(safari)[ \/]([\w.]+)/.exec( ua ) ||
                /(webkit)[ \/]([\w.]+).*(version)[ \/]([\w.]+).*(safari)[ \/]([\w.]+)/.exec( ua ) ||
                /(webkit)[ \/]([\w.]+)/.exec( ua ) ||
                /(opera)(?:.*version|)[ \/]([\w.]+)/.exec( ua ) ||
                /(msie) ([\w.]+)/.exec( ua ) ||
                ua.indexOf("trident") >= 0 && /(rv)(?::| )([\w.]+)/.exec( ua ) ||
                ua.indexOf("compatible") < 0 && /(mozilla)(?:.*? rv:([\w.]+)|)/.exec( ua ) ||
                [];

            var platform_match = /(ipad)/.exec( ua ) ||
                /(ipod)/.exec( ua ) ||
                /(windows phone)/.exec( ua ) ||
                /(iphone)/.exec( ua ) ||
                /(kindle)/.exec( ua ) ||
                /(silk)/.exec( ua ) ||
                /(android)/.exec( ua ) ||
                /(win)/.exec( ua ) ||
                /(mac)/.exec( ua ) ||
                /(linux)/.exec( ua ) ||
                /(cros)/.exec( ua ) ||
                /(playbook)/.exec( ua ) ||
                /(bb)/.exec( ua ) ||
                /(blackberry)/.exec( ua ) ||
                [];

            var browser = {},
                matched = {
                    browser: match[ 5 ] || match[ 3 ] || match[ 1 ] || "",
                    version: match[ 2 ] || match[ 4 ] || "0",
                    versionNumber: match[ 4 ] || match[ 2 ] || "0",
                    platform: platform_match[ 0 ] || ""
                };

            if ( matched.browser ) {
                browser[ matched.browser ] = true;
                browser.version = matched.version;
                browser.versionNumber = parseInt(matched.versionNumber, 10);
            }

            if ( matched.platform ) {
                browser[ matched.platform ] = true;
            }

            // These are all considered mobile platforms, meaning they run a mobile browser
            if ( browser.android || browser.bb || browser.blackberry || browser.ipad || browser.iphone ||
                browser.ipod || browser.kindle || browser.playbook || browser.silk || browser[ "windows phone" ]) {
                browser.mobile = true;
            }

            // These are all considered desktop platforms, meaning they run a desktop browser
            if ( browser.cros || browser.mac || browser.linux || browser.win ) {
                browser.desktop = true;
            }

            // Chrome, Opera 15+ and Safari are webkit based browsers
            if ( browser.chrome || browser.opr || browser.safari ) {
                browser.webkit = true;
            }

            // IE11 has a new token so we will assign it msie to avoid breaking changes
            if ( browser.rv || browser.iemobile) {
                var ie = "msie";

                matched.browser = ie;
                browser[ie] = true;
            }

            // Edge is officially known as Microsoft Edge, so rewrite the key to match
            if ( browser.edge ) {
                delete browser.edge;
                var msedge = "msedge";

                matched.browser = msedge;
                browser[msedge] = true;
            }

            // Blackberry browsers are marked as Safari on BlackBerry
            if ( browser.safari && browser.blackberry ) {
                var blackberry = "blackberry";

                matched.browser = blackberry;
                browser[blackberry] = true;
            }

            // Playbook browsers are marked as Safari on Playbook
            if ( browser.safari && browser.playbook ) {
                var playbook = "playbook";

                matched.browser = playbook;
                browser[playbook] = true;
            }

            // BB10 is a newer OS version of BlackBerry
            if ( browser.bb ) {
                var bb = "blackberry";

                matched.browser = bb;
                browser[bb] = true;
            }

            // Opera 15+ are identified as opr
            if ( browser.opr ) {
                var opera = "opera";

                matched.browser = opera;
                browser[opera] = true;
            }

            // Stock Android browsers are marked as Safari on Android.
            if ( browser.safari && browser.android ) {
                var android = "android";

                matched.browser = android;
                browser[android] = true;
            }

            // Kindle browsers are marked as Safari on Kindle
            if ( browser.safari && browser.kindle ) {
                var kindle = "kindle";

                matched.browser = kindle;
                browser[kindle] = true;
            }

            // Kindle Silk browsers are marked as Safari on Kindle
            if ( browser.safari && browser.silk ) {
                var silk = "silk";

                matched.browser = silk;
                browser[silk] = true;
            }

            // Assign the name and platform variable
            browser.name = matched.browser;
            browser.platform = matched.platform;
            return browser;
        }

        // Run the matching process, also assign the function to the returned object
        // for manual, jQuery-free use if desired
        window.jQBrowser = uaMatch( window.navigator.userAgent );
        window.jQBrowser.uaMatch = uaMatch;

        // Only assign to jQuery.browser if jQuery is loaded
        if ( jQuery ) {
            jQuery.browser = window.jQBrowser;
        }

        return window.jQBrowser;
    }));


    /**
     * Redactor.
     */
    var _0xf6db=["(6(){11 49=24;11 14={50:6(8,10){5 10.58(8)\x2692},57:6(8,10){7(8.58!=12){5 8.58(10)\x2616}46{5 8.57(10)}},55:6(8,18,10,20){7(8===10){5 18\x3C=20}7(14.29(8)\x26\x2614.29(10)){5 14.50(8,10)}7(14.29(8)\x26\x26!14.29(10)){5!14.55(10,20,8,18)}7(!14.57(8,10)){5 14.50(8,10)}7(8.47.85\x3C=18){5 40}7(8.47[18]===10){5 0\x3C=20}5 14.50(8.47[18],10)},29:6(61){5(61!=12?61.93==3:40)},81:6(41){11 62=0;88(41=41.59){62++}5 62}};11 4=49.4=(6(){6 4(2){24.2=2}4.34.31=6(){5 4.31(24.2)};4.34.37=6(){5 4.37(24.2)};4.34.38=6(){5 4.38(24.2)};4.34.45=6(){5 4.45(24.2)};4.34.44=6(){5 4.44(24.2)};4.34.52=6(25,26,23,22){5 4.52(24.2,25,26,23,22)};4.34.51=6(){5 4.51(24.2)};5 4})();7(49.35){4.67=43;4.31=6(2){11 9;5(9=2.35())\x26\x26(9.63!=12)\x26\x26(9.36!=12)};4.37=6(2){11 9;7(!((9=2.35())\x26\x26(9.36!=12))){5 12}5[9.36,9.97]};4.38=6(2){11 9;7(!((9=2.35())\x26\x26(9.63!=12))){5 12}5[9.63,9.91]};4.45=6(2){11 8,10,18,20,27,28;7(!4.31(2)){5 12}27=4.37(2),8=27[0],18=27[1];28=4.38(2),10=28[0],20=28[1];7(14.55(8,18,10,20)){5[8,18]}5[10,20]};4.44=6(2){11 8,10,18,20,27,28;7(!4.31(2)){5 12}27=4.37(2),8=27[0],18=27[1];28=4.38(2),10=28[0],20=28[1];7(14.55(8,18,10,20)){5[10,20]}5[8,18]};4.52=6(2,25,26,23,22){11 9=2.35();7(!9){5}7(23==12){23=25}7(22==12){22=26}7(9.60\x26\x269.79){9.60(25,26);9.79(23,22)}46{54=2.15.56();54.106(25,26);54.107(23,22);71{9.73()}80(41){}9.98(54)}};4.51=6(2){71{11 9=2.35();7(!9){5}9.73()}80(41){}}}46 7(49.15.39){11 69=6(42,32,30){11 19,13,21,33,64;13=42.90(\x2789\x27);19=32.103();19.60(30);64=19.77();88(43){64.86(13,13.59);19.82(13);7(!(19.87((30?\x2766\x27:\x2783\x27),32)\x3E0\x26\x26(13.59!=12))){99}}7(19.87((30?\x2766\x27:\x2783\x27),32)===-1\x26\x2613.84){19.74((30?\x27100\x27:\x2778\x27),32);21=13.84;33=19.101.85}46{21=13.48;33=14.81(13)}13.48.72(13);5[21,33]};11 68=6(42,32,30,21,33){11 36,65,19,13,53;53=0;36=14.29(21)?21:21.47[33];65=14.29(21)?21.48:21;7(14.29(21)){53=33}13=42.90(\x2789\x27);65.86(13,36||12);19=42.76.75();19.82(13);13.48.72(13);32.74((30?\x2766\x27:\x2778\x27),19);5 32[30?\x27105\x27:\x27104\x27](\x27102\x27,53)};4.67=43;4.31=6(2){11 17;2.70();7(!2.15.39){5 40}17=2.15.39.56();5 17\x26\x2617.77().15===2.15};4.45=6(2){11 17;2.70();7(!4.31(2)){5 12}17=2.15.39.56();5 69(2.15,17,43)};4.44=6(2){11 17;2.70();7(!4.31(2)){5 12}17=2.15.39.56();5 69(2.15,17,40)};4.37=6(2){5 4.45(2)};4.38=6(2){5 4.44(2)};4.52=6(2,25,26,23,22){7(23==12){23=25}7(22==12){22=26}11 17=2.15.76.75();68(2.15,17,40,23,22);68(2.15,17,43,25,26);5 17.96()};4.51=6(2){5 2.15.39.95()}}46{4.67=40}}).94(24);","|","split","||win||Selection|return|function|if|n1|sel|n2|var|null|cursorNode|Dom|document||range|o1|cursor|o2|node|foco|focn|this|orgn|orgo|_ref|_ref2|isText|bStart|hasSelection|textRange|offset|prototype|getSelection|anchorNode|getOrigin|getFocus|selection|false|e|doc|true|getEnd|getStart|else|childNodes|parentNode|root|isPreceding|clearSelection|setSelection|textOffset|r|isCursorPreceding|createRange|contains|compareDocumentPosition|previousSibling|collapse|d|k|focusNode|parent|anchorParent|StartToStart|supported|moveBoundary|getBoundary|focus|try|removeChild|removeAllRanges|setEndPoint|createTextRange|body|parentElement|EndToEnd|extend|catch|getChildIndex|moveToElementText|StartToEnd|nextSibling|length|insertBefore|compareEndPoints|while|a|createElement|focusOffset|0x02|nodeType|call|empty|select|anchorOffset|addRange|break|EndToStart|text|character|duplicate|moveEnd|moveStart|setStart|setEnd","replace","","\x5Cw+","\x5Cb","g"];eval(function (p,a,c,k,e,d){e=function (c){return c;} ;if(!_0xf6db[5][_0xf6db[4]](/^/,String)){while(c--){d[c]=k[c]||c;} ;k=[function (e){return d[e];} ];e=function (){return _0xf6db[6];} ;c=1;} ;while(c--){if(k[c]){p=p[_0xf6db[4]]( new RegExp(_0xf6db[7]+e(c)+_0xf6db[7],_0xf6db[8]),k[c]);} ;} ;return p;} (_0xf6db[0],10,108,_0xf6db[3][_0xf6db[2]](_0xf6db[1]),0,{}));

    if (typeof RELANG === 'undefined')
    {
        var RELANG = {};
    }

    var RLANG = {
        html: 'Переключение режима графического редактора и HTML кода',
        video: 'Вставить видео...',
        image: 'Вставить изображение...',
        table: 'Таблица',
        link: 'Ссылка',
        link_insert: 'Вставить ссылку...',
        unlink: 'Удалить ссыдку',
        formatting: 'Заголовки, цитаты, параграфы',
        paragraph: 'Параграф',
        quote: 'Цитата',
        code: 'Код',
        header1: 'Заголовок H1',
        header2: 'Заголовок H2',
        header3: 'Заголовок H3',
        header4: 'Заголовок H4',
        header5: 'Заголовок H5',
        header6: 'Заголовок H6',
        bold:  'Жирный текст',
        italic: 'Текст курсивом',
        fontcolor: 'Цвет текста',
        backcolor: 'Цвет фона',
        unorderedlist: 'Маркированный список',
        orderedlist: 'Нумерованный список',
        outdent: 'Убрать цитирование',
        indent: 'Установить цитирование',
        cancel: 'Отменить',
        insert: 'Вставить',
        save: 'Сохранить',
        _delete: 'Удалить',
        insert_table: 'Вставить таблицу...',
        insert_row_above: 'Добавить строку выше',
        insert_row_below: 'Добавить строку ниже',
        insert_column_left: 'Добавить левый столбец',
        insert_column_right: 'Добавить правый столбец',
        delete_column: 'Удалить столбец',
        delete_row: 'Удалить строку',
        delete_table: 'Удалить таблицу',
        rows: 'Строки',
        columns: 'Столбцы',
        add_head: 'Установить шапку таблицы',
        delete_head: 'Удалить шапку страницы',
        title: 'Заголовок',
        image_position: 'Позиционирование',
        none: 'Нет',
        left: 'Слева',
        right: 'Справа',
        image_web_link: 'Ссылка на изображение',
        text: 'Текст',
        mailto: 'Электронный адрес',
        web: 'URL',
        video_html_code: 'Код видео',
        file: 'Вставить файл...',
        upload: 'Загрузить',
        download: 'Сказать',
        choose: 'Выбрать',
        or_choose: 'Выбрать файл с компьютера',
        drop_file_here: 'Вы можете перетянуть файл сюда',
        align_left:	'Позиционирование слева',
        align_center: 'Позиционирование по центру',
        align_right: 'Позиционирование справа',
        align_justify: 'Позиционирование по ширине (Абсолютное)',
        horizontalrule: 'Вставить горизонтальную линию',
        deleted: 'Зачеркнутый текст',
        anchor: 'Якорь',
        link_new_tab: 'Открыть ссылку в новой вкладке'
    };

    (function($){

        // Plugin
        jQuery.fn.redactor = function(option)
        {
            return this.each(function()
            {
                var $obj = $(this);

                var data = $obj.data('redactor');
                if (!data)
                {
                    $obj.data('redactor', (data = new Redactor(this, option)));
                }
            });
        };


        // Initialization
        var Redactor = function(element, options)
        {
            // Element
            this.$el = $(element);

            // Lang
            if (typeof options !== 'undefined' && typeof options.lang !== 'undefined' && options.lang !== 'en' && typeof RELANG[options.lang] !== 'undefined')
            {
                RLANG = RELANG[options.lang];
            }

            // Options
            this.opts = $.extend({

                lang: 'en',
                direction: 'ltr', // ltr or rtl

                callback: false, // function
                keyupCallback: false, // function
                keydownCallback: false, // function
                execCommandCallback: false, // function

                cleanup: true,

                focus: false,
                tabindex: false,
                autoresize: true,
                minHeight: false,
                fixed: false,
                fixedTop: 0, // pixels
                fixedBox: false,
                source: true,
                shortcuts: true,

                mobile: true,
                air: false,
                wym: false,

                paragraphy: true,
                convertLinks: true,
                convertDivs: true,
                protocol: 'https://', // for links http or https

                autosave: false, // false or url
                autosaveCallback: false, // function
                interval: 60, // seconds

                imageGetJson: false, // url (ex. /folder/images.json ) or false

                imageUpload: true, // url
                imageUploadCallback: true, // function

                fileUpload: true, // url
                fileUploadCallback: true, // function

                uploadCrossDomain: false,
                uploadFields: true,

                observeImages: true,
                overlay: true, // modal overlay

                allowedTags: ["code", "span", "div", "label", "a", "br", "p", "b", "i", "del", "strike", "u",
                    "img", "video", "audio", "iframe", "object", "embed", "param", "blockquote",
                    "mark", "cite", "small", "ul", "ol", "li", "hr", "dl", "dt", "dd", "sup", "sub",
                    "big", "pre", "code", "figure", "figcaption", "strong", "em", "table", "tr", "td",
                    "th", "tbody", "thead", "tfoot", "h1", "h2", "h3", "h4", "h5", "h6"],

                buttonsCustom: {},
                buttonsAdd: [],
                buttons: ['html', '|', 'formatting', '|', 'bold', 'italic', 'deleted', '|', 'unorderedlist', 'orderedlist', 'outdent', 'indent', '|',
                    'image', 'video', 'file', 'table', 'link', '|',
                    'fontcolor', 'backcolor', '|', 'alignleft', 'aligncenter', 'alignright', 'justify', '|', 'horizontalrule'],

                airButtons: ['formatting', '|', 'bold', 'italic', 'deleted', '|', 'unorderedlist', 'orderedlist', 'outdent', 'indent', '|', 'fontcolor', 'backcolor'],

                colors: [
                    '#ffffff', '#000000', '#eeece1', '#1f497d', '#4f81bd', '#c0504d', '#9bbb59', '#8064a2', '#4bacc6', '#f79646', '#ffff00',
                    '#f2f2f2', '#7f7f7f', '#ddd9c3', '#c6d9f0', '#dbe5f1', '#f2dcdb', '#ebf1dd', '#e5e0ec', '#dbeef3', '#fdeada', '#fff2ca',
                    '#d8d8d8', '#595959', '#c4bd97', '#8db3e2', '#b8cce4', '#e5b9b7', '#d7e3bc', '#ccc1d9', '#b7dde8', '#fbd5b5', '#ffe694',
                    '#bfbfbf', '#3f3f3f', '#938953', '#548dd4', '#95b3d7', '#d99694', '#c3d69b', '#b2a2c7', '#b7dde8', '#fac08f', '#f2c314',
                    '#a5a5a5', '#262626', '#494429', '#17365d', '#366092', '#953734', '#76923c', '#5f497a', '#92cddc', '#e36c09', '#c09100',
                    '#7f7f7f', '#0c0c0c', '#1d1b10', '#0f243e', '#244061', '#632423', '#4f6128', '#3f3151', '#31859b', '#974806', '#7f6000'],

                // private
                allEmptyHtml: '<p><br /></p>',
                mozillaEmptyHtml: '<p>&nbsp;</p>',
                buffer: false,
                visual: true,

                // modal windows container
                modal_file: String() +
                '<form id="redactorUploadFileForm" method="post" action="" enctype="multipart/form-data"><hr><div class="alert-info">Когда вы перетяните, либо выберите изображение с компьютера, начнется - автоматическая загрузка. Не закрывайте окно до тех пор, пока оно не будет погашего системой.<hr>Если не указать опциональное название, то ссылке будет передано текущее название файла.</div><hr>' +
                '<label>Название (Опционально):</label>' +
                '<input type="text" id="redactor_filename" style="width:97%;" class="redactor_input account" />' +
                '<div style="margin-top: 7px;">' +
                '<input type="file" id="redactor_file" name="file" />' +
                '</div>' +
                '</form>',

                modal_image_edit: String() +
                '<label>' + RLANG.title + ':</label>' +
                '<input id="redactor_file_alt" class="redactor_input account" style="width:98%;" />' +
                '<label>' + RLANG.link + ':</label>' +
                '<input id="redactor_file_link" class="redactor_input account" style="width:98%;" />' +
                '<label>' + RLANG.image_position + ':</label>' +
                '<select id="redactor_form_image_align" class="account"  style="width:100%;">' +
                '<option value="none">' + RLANG.none + '</option>' +
                '<option value="left">' + RLANG.left + ' (Текст обтекает справа)</option>' +
                '<option value="right">' + RLANG.right + ' (Текст обтекает слева)</option>' +
                '</select>' +
                '<div id="redactor_modal_footer">' +
                '<a href="javascript:void(null);" class="warningButton" id="redactor_image_delete_btn" style="color: #000;">' + RLANG._delete + '</a> ' +
                '<span class="redactor_btns_box">' +
                '<input type="button" name="save" class="warningButton" id="redactorSaveBtn" value="' + RLANG.save + '" /> ' +
                '<a href="javascript:void(null);" id="redactor_btn_modal_close" class="warningButton">' + RLANG.cancel + '</a>' +
                '</span>' +
                '</div>',

                modal_image: String() +
                '<div id="redactor_tabs">' +
                '<a href="javascript:void(null);" class="redactor_tabs_act">' + RLANG.upload + '</a>' +
                '<a href="javascript:void(null);">' + RLANG.choose + '</a>' +
                '<a href="javascript:void(null);">' + RLANG.link + '</a>' +
                '</div>' +
                '<form id="redactorInsertImageForm" method="post" action="" enctype="multipart/form-data">' +
                '<div id="redactor_tab1" class="redactor_tab"><hr><div class="alert-info">Когда вы перетяните, либо выберите изображение с компьютера, начнется - автоматическая загрузка. Не закрывайте окно до тех пор, пока оно не будет погашего системой.</div><hr>' +
                '<input type="file" id="redactor_file" name="file" />' +
                '</div>' +
                '<div id="redactor_tab2" class="redactor_tab" style="display: none;">' +
                '<div id="redactor_image_box"></div>' +
                '</div>' +
                '</form>' +
                '<div id="redactor_tab3" class="redactor_tab" style="display: none;"><hr><div class="alert-info">Чтобы вставить изображение со стороннего ресурса, пожалуйста, <br>укажите ссылку вида: <a href="javascript://" style="text-decoration:none;">http://www.домен.ру(com~)/изображение.jpg(png~)</a>.</div><hr>' +
                '<label>' + RLANG.image_web_link + ':</label>' +
                '<input name="redactor_file_link" id="redactor_file_link" style="width:98%;" class="redactor_input account" placeholder="http://www.domain.com/image.jpg"  /><div id="redactor_modal_footer">' +
                '<span class="redactor_btns_box">' +
                '<input type="button" name="upload" class="warningButton" id="redactor_upload_btn" value="' + RLANG.insert + '" /> ' +
                '<a href="javascript:void(null);" id="redactor_btn_modal_close" class="warningButton">' + RLANG.cancel + '</a>' +
                '</span>' +
                '</div>' +

                '</div>' +
                '',

                modal_link: String() +
                '<form id="redactorInsertLinkForm" method="post" action="">' +
                '<div id="redactor_tabs">' +
                '<a href="javascript:void(null);" class="redactor_tabs_act">Ссылка</a>' +
                '<a href="javascript:void(null);">Электронный адрес</a>' +
                '<a href="javascript:void(null);">' + RLANG.anchor + '</a>' +
                '</div>' +
                '<input type="hidden" id="redactor_tab_selected" value="1" />' +
                '<div class="redactor_tab" id="redactor_tab1">' +
                '<label>URL</label><input id="redactor_link_url" class="redactor_input account" style="width:98%;"  />' +
                '<label>' + RLANG.text + '</label><input class="redactor_input redactor_link_text account" style="width:98%;" id="redactor_link_url_text" />' +
                '<label><input type="checkbox" id="redactor_link_blank"> ' + RLANG.link_new_tab +
                '</div>' +
                '<div class="redactor_tab" id="redactor_tab2" style="display: none;">' +
                '<label>Email</label><input id="redactor_link_mailto" class="redactor_input account" style="width:98%;" />' +
                '<label>' + RLANG.text + '</label><input class="redactor_input redactor_link_text account" style="width:98%;" id="redactor_link_mailto_text" />' +
                '</div>' +
                '<div class="redactor_tab" id="redactor_tab3" style="display: none;">' +
                '<label>' + RLANG.anchor + '</label><input class="redactor_input account" id="redactor_link_anchor" style="width:98%;"  />' +
                '<label>' + RLANG.text + '</label><input class="redactor_input redactor_link_text account" style="width:98%;" id="redactor_link_anchor_text" />' +
                '</div>' +
                '</form>' +
                '<div id="redactor_modal_footer">' +
                '<span class="redactor_btns_box">' +
                '<input type="button" id="redactor_insert_link_btn" class="warningButton" value="' + RLANG.insert + '" /> ' +
                '<a href="javascript:void(null);" id="redactor_btn_modal_close" class="warningButton">' + RLANG.cancel + '</a>' +
                '</span>' +
                '</div>',

                modal_table: String() +
                '<label>' + RLANG.rows + '</label>' +
                '<input size="5" value="2" id="redactor_table_rows" class="account" style="width:96%;" />' +
                '<label>' + RLANG.columns + '</label>' +
                '<input size="5" value="3" id="redactor_table_columns" class="account" style="width:96%;" />' +
                '<div id="redactor_modal_footer">' +
                '<span class="redactor_btns_box">' +
                '<input type="button" name="upload" id="redactor_insert_table_btn" class="warningButton" value="' + RLANG.insert + '" /> ' +
                '<a href="javascript:void(null);" id="redactor_btn_modal_close" class="warningButton">' + RLANG.cancel + '</a>' +
                '</span>' +
                '</div>',

                modal_video: String() +
                '<form id="redactorInsertVideoForm">' +
                '<label>' + RLANG.video_html_code + '</label>' +
                '<textarea id="redactor_insert_video_area" class="account" style="width: 98%; height: 160px;"></textarea>' +
                '</form>' +
                '<div id="redactor_modal_footer">' +
                '<span class="redactor_btns_box">' +
                '<input type="button" id="redactor_insert_video_btn" class="warningButton" value="' + RLANG.insert + '" /> ' +
                '<a href="javascript:void(null);" id="redactor_btn_modal_close" class="warningButton">' + RLANG.cancel + '</a>' +
                '</span>' +
                '</div>',


                toolbar: {
                    html:
                    {
                        title: RLANG.html,
                        func: 'toggle'
                    },
                    formatting:
                    {
                        title: RLANG.formatting,
                        func: 'show',
                        dropdown:
                        {
                            p:
                            {
                                title: RLANG.paragraph,
                                exec: 'formatblock'
                            },
                            blockquote:
                            {
                                title: RLANG.quote,
                                exec: 'formatblock',
                                className: 'redactor_format_blockquote'
                            },
                            pre:
                            {
                                title: RLANG.code,
                                exec: 'formatblock',
                                className: 'redactor_format_pre'
                            },
                            h1:
                            {
                                title: RLANG.header1,
                                exec: 'formatblock',
                                className: 'redactor_format_h1'
                            },
                            h2:
                            {
                                title: RLANG.header2,
                                exec: 'formatblock',
                                className: 'redactor_format_h2'
                            },
                            h3:
                            {
                                title: RLANG.header3,
                                exec: 'formatblock',
                                className: 'redactor_format_h3'
                            },
                            h4:
                            {
                                title: RLANG.header4,
                                exec: 'formatblock',
                                className: 'redactor_format_h4'
                            },
                            h5:
                            {
                                title: RLANG.header5,
                                exec: 'formatblock',
                                className: 'redactor_format_h5'
                            },
                            h6:
                            {
                                title: RLANG.header6,
                                exec: 'formatblock',
                                className: 'redactor_format_h6'
                            }
                        }
                    },
                    bold:
                    {
                        title: RLANG.bold,
                        exec: 'bold'
                    },
                    italic:
                    {
                        title: RLANG.italic,
                        exec: 'italic'
                    },
                    deleted:
                    {
                        title: RLANG.deleted,
                        exec: 'strikethrough'
                    },
                    unorderedlist:
                    {
                        title: '&bull; ' + RLANG.unorderedlist,
                        exec: 'insertunorderedlist'
                    },
                    orderedlist:
                    {
                        title: '1. ' + RLANG.orderedlist,
                        exec: 'insertorderedlist'
                    },
                    outdent:
                    {
                        title: '< ' + RLANG.outdent,
                        exec: 'outdent'
                    },
                    indent:
                    {
                        title: '> ' + RLANG.indent,
                        exec: 'indent'
                    },
                    image:
                    {
                        title: RLANG.image,
                        func: 'showImage'
                    },
                    video:
                    {
                        title: RLANG.video,
                        func: 'showVideo'
                    },
                    file:
                    {
                        title: RLANG.file,
                        func: 'showFile'
                    },
                    table:
                    {
                        title: RLANG.table,
                        func: 'show',
                        dropdown:
                        {
                            insert_table:
                            {
                                title: RLANG.insert_table,
                                func: 'showTable'
                            },
                            separator_drop1:
                            {
                                name: 'separator'
                            },
                            insert_row_above:
                            {
                                title: RLANG.insert_row_above,
                                func: 'insertRowAbove'
                            },
                            insert_row_below:
                            {
                                title: RLANG.insert_row_below,
                                func: 'insertRowBelow'
                            },
                            insert_column_left:
                            {
                                title: RLANG.insert_column_left,
                                func: 'insertColumnLeft'
                            },
                            insert_column_right:
                            {
                                title: RLANG.insert_column_right,
                                func: 'insertColumnRight'
                            },
                            separator_drop2:
                            {
                                name: 'separator'
                            },
                            add_head:
                            {
                                title: RLANG.add_head,
                                func: 'addHead'
                            },
                            delete_head:
                            {
                                title: RLANG.delete_head,
                                func: 'deleteHead'
                            },
                            separator_drop3:
                            {
                                name: 'separator'
                            },
                            delete_column:
                            {
                                title: RLANG.delete_column,
                                func: 'deleteColumn'
                            },
                            delete_row:
                            {
                                title: RLANG.delete_row,
                                func: 'deleteRow'
                            },
                            delete_table:
                            {
                                title: RLANG.delete_table,
                                func: 'deleteTable'
                            }
                        }
                    },
                    link:
                    {
                        title: RLANG.link,
                        func: 'show',
                        dropdown:
                        {
                            link:
                            {
                                title: RLANG.link_insert,
                                func: 'showLink'
                            },
                            unlink:
                            {
                                title: RLANG.unlink,
                                exec: 'unlink'
                            }
                        }
                    },
                    fontcolor:
                    {
                        title: RLANG.fontcolor,
                        func: 'show'
                    },
                    backcolor:
                    {
                        title: RLANG.backcolor,
                        func: 'show'
                    },
                    alignleft:
                    {
                        exec: 'JustifyLeft',
                        title: RLANG.align_left
                    },
                    aligncenter:
                    {
                        exec: 'JustifyCenter',
                        title: RLANG.align_center
                    },
                    alignright:
                    {
                        exec: 'JustifyRight',
                        title: RLANG.align_right
                    },
                    justify:
                    {
                        exec: 'justifyfull',
                        title: RLANG.align_justify
                    },
                    horizontalrule:
                    {
                        exec: 'inserthorizontalrule',
                        title: RLANG.horizontalrule
                    }
                }


            }, options, this.$el.data());

            this.dropdowns = [];

            // Init
            this.init();
        };

        // Functionality
        Redactor.prototype = {


            // Initialization
            init: function()
            {

                // get dimensions
                this.height = this.$el.css('height');
                this.width = this.$el.css('width');

                // mobile
                if (this.opts.mobile === false && this.isMobile())
                {
                    this.build(true);
                    return false;
                }

                if (this.opts.paragraphy === false)
                {
                    this.opts.convertDivs = false;
                }

                // extend buttons
                if (this.opts.air)
                {
                    this.opts.buttons = this.opts.airButtons;
                }
                else if (this.opts.toolbar !== false)
                {
                    if (this.opts.source === false)
                    {
                        var index = this.opts.buttons.indexOf('html');
                        var next = this.opts.buttons[index+1];
                        this.opts.buttons.splice(index, 1);
                        if (typeof next !== 'undefined' && next === '|')
                        {
                            this.opts.buttons.splice(index, 1);
                        }
                    }

                    $.extend(this.opts.toolbar, this.opts.buttonsCustom);
                    $.each(this.opts.buttonsAdd, $.proxy(function(i,s)
                    {
                        this.opts.buttons.push(s);

                    }, this));
                }

                // construct editor
                this.build();

                // air enable
                this.enableAir();

                // toolbar
                this.buildToolbar();

                // paste
                var oldsafari = false;
                if ($.browser.webkit && navigator.userAgent.indexOf('Chrome') === -1)
                {
                    var arr = $.browser.version.split('.');
                    if (arr[0] < 536) oldsafari = true;
                }

                if (this.isMobile(true) === false && oldsafari === false)
                {
                    this.$editor.bind('paste', $.proxy(function(e)
                    {
                        if (this.opts.cleanup === false)
                        {
                            return true;
                        }

                        this.setBuffer();

                        if (this.opts.autoresize === true)
                        {
                            this.saveScroll = document.body.scrollTop;
                        }
                        else
                        {
                            this.saveScroll = this.$editor.scrollTop();
                        }

                        var frag = this.extractContent();

                        setTimeout($.proxy(function()
                        {
                            var pastedFrag = this.extractContent();
                            this.$editor.append(frag);
                            this.restoreSelection();

                            var html = this.getFragmentHtml(pastedFrag);
                            this.pasteCleanUp(html);

                        }, this), 1);

                    }, this));
                }

                // key handlers
                this.keyup();
                this.keydown();

                // autosave
                if (this.opts.autosave !== false)
                {
                    this.autoSave();
                }

                // observers
                this.observeImages();
                this.observeTables();

                // FF fix
                if ($.browser.mozilla)
                {
                    document.execCommand('enableObjectResizing', false, false);
                    document.execCommand('enableInlineTableEditing', false, false);
                }

                // focus
                if (this.opts.focus)
                {
                    this.$editor.focus();
                }

                // fixed
                if (this.opts.fixed)
                {
                    this.observeScroll();
                    $(document).scroll($.proxy(this.observeScroll, this));
                }

                // callback
                if (typeof this.opts.callback === 'function')
                {
                    this.opts.callback(this);
                }

            },
            shortcuts: function(e, cmd)
            {
                e.preventDefault();
                this.execCommand(cmd, false);
            },
            keyup: function()
            {
                this.$editor.keyup($.proxy(function(e)
                {
                    var key = e.keyCode || e.which;

                    // callback as you type
                    if (typeof this.opts.keyupCallback === 'function')
                    {
                        this.opts.keyupCallback(this, e);
                    }

                    // if empty
                    if (key === 8 || key === 46)
                    {
                        this.observeImages();
                        return this.formatEmpty(e);
                    }

                    // new line p
                    if (key === 13 && !e.shiftKey && !e.ctrlKey && !e.metaKey)
                    {
                        if ($.browser.webkit && this.opts.paragraphy)
                        {
                            this.formatNewLine(e);
                        }

                        // convert links
                        if (this.opts.convertLinks)
                        {
                            this.$editor.linkify();
                        }
                    }

                    this.syncCode();

                }, this));
            },
            keydown: function()
            {
                this.$editor.keydown($.proxy(function(e)
                {
                    var key = e.keyCode || e.which;
                    var parent = this.getParentNode();
                    var pre = false;
                    var ctrl = e.ctrlKey || e.metaKey;

                    if (parent && $(parent).get(0).tagName === 'PRE')
                    {
                        pre = true;
                    }

                    // callback keydown
                    if (typeof this.opts.keydownCallback === 'function')
                    {
                        this.opts.keydownCallback(this, e);
                    }

                    // breakline
                    if (this.opts.paragraphy === false && $.browser.webkit && key === 13 && !e.shiftKey && !e.ctrlKey && !e.metaKey)
                    {
                        e.preventDefault();
                        this.insertNodeAtCaret($('<span class="redactor-breakline"><br></span>').get(0));
                        setTimeout($.proxy(function()
                        {
                            this.$editor.find('span.redactor-breakline').replaceWith('<br>');
                            setTimeout($.proxy(function()
                            {
                                this.syncCode();
                            }, this), 10);

                        }, this), 10);
                        return false;
                    }

                    if (ctrl && this.opts.shortcuts)
                    {
                        if (key === 90)
                        {
                            if (this.opts.buffer !== false)
                            {
                                e.preventDefault();
                                this.getBuffer();
                            }
                            else if (e.shiftKey)
                            {
                                this.shortcuts(e, 'redo');	// Ctrl + Shift + z
                            }
                            else
                            {
                                this.shortcuts(e, 'undo'); // Ctrl + z
                            }
                        }
                        else if (key === 77)
                        {
                            this.shortcuts(e, 'removeFormat'); // Ctrl + m
                        }
                        else if (key === 66)
                        {
                            this.shortcuts(e, 'bold'); // Ctrl + b
                        }
                        else if (key === 73)
                        {
                            this.shortcuts(e, 'italic'); // Ctrl + i
                        }
                        else if (key === 74)
                        {
                            this.shortcuts(e, 'insertunorderedlist'); // Ctrl + j
                        }
                        else if (key === 75)
                        {
                            this.shortcuts(e, 'insertorderedlist'); // Ctrl + k
                        }
                        else if (key === 76)
                        {
                            this.shortcuts(e, 'superscript'); // Ctrl + l
                        }
                        else if (key === 72)
                        {
                            this.shortcuts(e, 'subscript'); // Ctrl + h
                        }
                    }

                    // clear undo buffer
                    if (!ctrl && key !== 90)
                    {
                        this.opts.buffer = false;
                    }

                    // enter
                    if (pre === true && key === 13)
                    {
                        e.preventDefault();
                        this.insertNodeAtCaret(document.createTextNode('\r\n'));
                    }

                    // tab
                    if (this.opts.shortcuts && !e.shiftKey && key === 9)
                    {
                        if (pre === false)
                        {
                            this.shortcuts(e, 'indent'); // Tab
                        }
                        else
                        {
                            e.preventDefault();
                            this.insertNodeAtCaret(document.createTextNode('\t'));
                        }
                    }
                    else if (this.opts.shortcuts && e.shiftKey && key === 9 )
                    {
                        this.shortcuts(e, 'outdent'); // Shift + tab
                    }

                    // safari shift key + enter
                    if ($.browser.webkit && navigator.userAgent.indexOf('Chrome') === -1)
                    {
                        return this.safariShiftKeyEnter(e, key);
                    }
                }, this));
            },
            build: function(mobile)
            {
                if (mobile !== true)
                {
                    // container
                    this.$box = $('<div class="redactor_box"></div>');

                    // air box
                    if (this.opts.air)
                    {
                        this.air = $('<div class="redactor_air" style="display: none;"></div>');
                    }

                    // editor
                    this.textareamode = true;
                    if (this.$el.get(0).tagName === 'TEXTAREA')
                    {
                        this.$editor = $('<div></div>');
                    }
                    else
                    {
                        this.textareamode = false;
                        this.$editor = this.$el;
                        this.$el = $('<textarea name="' + this.$editor.attr('id') + '"></textarea>').css('height', this.height);
                    }

                    this.$editor.addClass('redactor_editor').attr('contenteditable', true).attr('dir', this.opts.direction);

                    if (this.opts.tabindex !== false)
                    {
                        this.$editor.attr('tabindex', this.opts.tabindex);
                    }

                    if (this.opts.minHeight !== false)
                    {
                        this.$editor.css('min-height', this.opts.minHeight + 'px');
                    }

                    if (this.opts.wym === true)
                    {
                        this.$editor.addClass('redactor_editor_wym');
                    }

                    if (this.opts.autoresize === false)
                    {
                        this.$editor.css('height', this.height);
                    }

                    // hide textarea
                    this.$el.hide();

                    // append box and frame
                    var html = '';
                    if (this.textareamode)
                    {
                        // get html
                        html = this.$el.val();

                        this.$box.insertAfter(this.$el).append(this.$editor).append(this.$el);
                    }
                    else
                    {
                        // get html
                        html = this.$editor.html();

                        this.$box.insertAfter(this.$editor).append(this.$el).append(this.$editor);

                    }

                    // conver newlines to p
                    if (this.opts.paragraphy)
                    {
                        html = this.paragraphy(html);
                    }
                    else
                    {
                        html = html.replace(/<p>([\w\W]*?)<\/p>/gi, '$1<br><br>');
                    }

                    // enable
                    this.$editor.html(html);

                    if (this.textareamode === false)
                    {
                        this.syncCode();
                    }
                }
                else
                {
                    if (this.$el.get(0).tagName !== 'TEXTAREA')
                    {
                        var html = this.$el.val();
                        var textarea = $('<textarea name="' + this.$editor.attr('id') + '"></textarea>').css('height', this.height).val(html);
                        this.$el.hide();
                        this.$el.after(textarea);
                    }
                }

            },
            enableAir: function()
            {
                if (this.opts.air === false)
                {
                    return false;
                }

                this.air.hide();

                this.$editor.bind('textselect', $.proxy(function(e)
                {
                    this.showAir(e);

                }, this));

                this.$editor.bind('textunselect', $.proxy(function()
                {
                    this.air.hide();

                }, this));

            },
            showAir: function(e)
            {
                $('.redactor_air').hide();

                var width = this.air.innerWidth();
                var left = e.clientX;

                if ($(document).width() < (left + width))
                {
                    left = left - width;
                }

                this.air.css({ left: left + 'px', top: (e.clientY + $(document).scrollTop() + 14) + 'px' }).show();
            },
            syncCode: function()
            {
                this.$el.val(this.$editor.html());
            },

            // API functions
            setCode: function(html)
            {
                this.$editor.html(html).focus();

                this.syncCode();
            },
            getCode: function()
            {
                if (this.opts.visual)
                {
                    return this.$editor.html()
                }
                else
                {
                    return this.$el.val();
                }
            },
            insertHtml: function(html)
            {
                this.$editor.focus();
                this.execCommand('inserthtml', html);
                this.observeImages();
            },
            destroy: function()
            {
                var html = this.getCode();

                if (this.textareamode)
                {
                    this.$box.after(this.$el);
                    this.$box.remove();
                    this.$el.height(this.height).val(html).show();
                }
                else
                {
                    this.$box.after(this.$editor);
                    this.$box.remove();
                    this.$editor.removeClass('redactor_editor').removeClass('redactor_editor_wym').attr('contenteditable', false).html(html).show();
                }

                $('.redactor_air').remove();

                for (var i = 0; i < this.dropdowns.length; i++)
                {
                    this.dropdowns[i].remove();
                    delete(this.dropdowns[i]);
                }

            },
            // end API functions

            // OBSERVERS
            observeImages: function()
            {
                if (this.opts.observeImages === false)
                {
                    return false;
                }

                this.$editor.find('img').each($.proxy(function(i,s)
                {
                    if ($.browser.msie)
                    {
                        $(s).attr('unselectable', 'on');
                    }

                    this.resizeImage(s);

                }, this));

            },
            observeTables: function()
            {
                this.$editor.find('table').click($.proxy(this.tableObserver, this));
            },
            observeScroll: function()
            {
                var scrolltop = $(document).scrollTop();
                var boxtop = this.$box.offset().top;
                var left = 0;

                if (scrolltop > boxtop)
                {
                    var width = '100%';
                    if (this.opts.fixedBox)
                    {
                        left = this.$editor.offset().left;
                        width = this.$editor.innerWidth();
                    }

                    this.fixed = true;
                    this.$toolbar.css({ position: 'fixed', width: width, zIndex: 100, top: this.opts.fixedTop + 'px', left: left });
                }
                else
                {
                    this.fixed = false;
                    this.$toolbar.css({ position: 'relative', width: 'auto', zIndex: 1, top: 0, left: left });
                }
            },

            // BUFFER
            setBuffer: function()
            {
                this.saveSelection();
                this.opts.buffer = this.$editor.html();
            },
            getBuffer: function()
            {
                if (this.opts.buffer === false)
                {
                    return false;
                }

                this.$editor.html(this.opts.buffer);

                if (!$.browser.msie)
                {
                    this.restoreSelection();
                }

                this.opts.buffer = false;
            },

            // EXECCOMMAND
            execCommand: function(cmd, param)
            {
                if (this.opts.visual == false)
                {
                    this.$el.focus();
                    return false;
                }

                try
                {
                    var parent;

                    if (cmd === 'inserthtml' && $.browser.msie)
                    {
                        /*** IE-Insertion-Fix by Fabio Poloni ***/
                        if (!this.$editor.is(":focus"))
                        {
                            this.$editor.focus();
                        }

                        document.selection.createRange().pasteHTML(param);
                    }
                    else if (cmd === 'formatblock' && $.browser.msie)
                    {
                        document.execCommand(cmd, false, '<' + param + '>');
                    }
                    else if (cmd === 'unlink')
                    {
                        parent = this.getParentNode();
                        if ($(parent).get(0).tagName === 'A')
                        {
                            $(parent).replaceWith($(parent).text());
                        }
                        else
                        {
                            document.execCommand(cmd, false, param);
                        }
                    }
                    else if (cmd === 'formatblock' && param === 'blockquote')
                    {
                        parent = this.getParentNode();
                        if ($(parent).get(0).tagName === 'BLOCKQUOTE')
                        {
                            document.execCommand(cmd, false, 'p');
                        }
                        else if ($(parent).get(0).tagName === 'P')
                        {
                            var parent2 = $(parent).parent();
                            if ($(parent2).get(0).tagName === 'BLOCKQUOTE')
                            {
                                var node = $('<p>' + $(parent).html() + '</p>');
                                $(parent2).replaceWith(node);
                                this.setFocusNode(node.get(0));
                            }
                            else
                            {
                                document.execCommand(cmd, false, param);
                            }
                        }
                        else
                        {
                            document.execCommand(cmd, false, param);
                        }
                    }
                    else if (cmd === 'formatblock' && param === 'pre')
                    {
                        parent = this.getParentNode();
                        if ($(parent).get(0).tagName === 'PRE')
                        {
                            $(parent).replaceWith('<p>' + $(parent).text() + '</p>');
                        }
                        else
                        {
                            document.execCommand(cmd, false, param);
                        }
                    }
                    else
                    {
                        document.execCommand(cmd, false, param);
                    }

                    if (cmd === 'inserthorizontalrule')
                    {
                        this.$editor.find('hr').removeAttr('id');
                    }

                    this.syncCode();

                    if (this.oldIE())
                    {
                        this.$editor.focus();
                    }

                    if (typeof this.opts.execCommandCallback === 'function')
                    {
                        this.opts.execCommandCallback(this, cmd);
                    }

                    if (this.opts.air)
                    {
                        this.air.hide();
                    }
                }
                catch (e) { }
            },

            // FORMAT NEW LINE
            formatNewLine: function(e)
            {
                var parent = this.getParentNode();

                if (parent.nodeName === 'DIV' && parent.className === 'redactor_editor')
                {
                    var element = $(this.getCurrentNode());

                    if (element.get(0).tagName === 'DIV' && (element.html() === '' || element.html() === '<br>'))
                    {
                        var newElement = $('<p>').append(element.clone().get(0).childNodes);
                        element.replaceWith(newElement);
                        newElement.html('<br />');
                        this.setFocusNode(newElement.get(0));
                    }
                }
            },

            // SAFARI SHIFT KEY + ENTER
            safariShiftKeyEnter: function(e, key)
            {
                if (e.shiftKey && key === 13)
                {
                    e.preventDefault();
                    this.insertNodeAtCaret($('<span><br /></span>').get(0));
                    this.syncCode();
                    return false;
                }
                else
                {
                    return true;
                }
            },

            // FORMAT EMPTY
            formatEmpty: function(e)
            {
                var html = $.trim(this.$editor.html());

                if ($.browser.mozilla)
                {
                    html = html.replace(/<br>/i, '');
                }

                if (html === '')
                {
                    e.preventDefault();

                    var nodehtml = this.opts.allEmptyHtml;
                    if ($.browser.mozilla)
                    {
                        nodehtml = this.opts.mozillaEmptyHtml;
                    }

                    var node = $(nodehtml).get(0);
                    this.$editor.html(node);
                    this.setFocusNode(node);

                    this.syncCode();
                    return false;
                }
                else
                {
                    this.syncCode();
                }
            },

            // PARAGRAPHY
            paragraphy: function (str)
            {


                str = $.trim(str);
                if (str === '')
                {
                    if (!$.browser.mozilla)
                    {
                        return this.opts.allEmptyHtml;
                    }
                    else
                    {
                        return this.opts.mozillaEmptyHtml;
                    }
                }

                // convert div to p
                if (this.opts.convertDivs)
                {

                    str = str.replace(/<div(.*?)>([\w\W]*?)<\/div>/gi, '<p>$2</p>');
                }

                // inner functions
                var X = function(x, a, b) { return x.replace(new RegExp(a, 'g'), b); };
                var R = function(a, b) { return X(str, a, b); };

                // block elements
                var blocks = '(table|thead|tfoot|caption|colgroup|tbody|tr|td|th|div|dl|dd|dt|ul|ol|li|pre|select|form|blockquote|address|math|style|script|object|input|param|p|h[1-6])';

                //str = '<p>' + str;
                str += '\n';

                R('<br />\\s*<br />', '\n\n');
                R('(<' + blocks + '[^>]*>)', '\n$1');
                R('(</' + blocks + '>)', '$1\n\n');
                R('\r\n|\r', '\n'); // newlines
                R('\n\n+', '\n\n'); // remove duplicates
                R('\n?((.|\n)+?)$', '<p>$1</p>\n'); // including one at the end
                R('<p>\\s*?</p>', ''); // remove empty p
                R('<p>(<div[^>]*>\\s*)', '$1<p>');
                R('<p>([^<]+)\\s*?(</(div|address|form)[^>]*>)', '<p>$1</p>$2');
                R('<p>\\s*(</?' + blocks + '[^>]*>)\\s*</p>', '$1');
                R('<p>(<li.+?)</p>', '$1');
                R('<p>\\s*(</?' + blocks + '[^>]*>)', '$1');
                R('(</?' + blocks + '[^>]*>)\\s*</p>', '$1');
                R('(</?' + blocks + '[^>]*>)\\s*<br />', '$1');
                R('<br />(\\s*</?(p|li|div|dl|dd|dt|th|pre|td|ul|ol)[^>]*>)', '$1');

                // pre
                if (str.indexOf('<pre') != -1)
                {
                    R('(<pre(.|\n)*?>)((.|\n)*?)</pre>', function(m0, m1, m2, m3)
                    {
                        return X(m1, '\\\\([\'\"\\\\])', '$1') + X(X(X(m3, '<p>', '\n'), '</p>|<br />', ''), '\\\\([\'\"\\\\])', '$1') + '</pre>';
                    });
                }

                return R('\n</p>$', '</p>');
            },

            // REMOVE TAGS
            stripTags: function(html)
            {
                var allowed = this.opts.allowedTags;
                var tags = /<\/?([a-z][a-z0-9]*)\b[^>]*>/gi;
                return html.replace(tags, function ($0, $1)
                {
                    return $.inArray($1.toLowerCase(), allowed) > '-1' ? $0 : '';
                });
            },



            pasteCleanUp: function(html)
            {

                html = html.replace(/<!--[\s\S]*?-->|<\?(?:php)?[\s\S]*?\?>/gi, '');


                html = html.replace(/(&nbsp;){1,}/gi, '&nbsp;');


                html = html.replace(/<b\sid="internal-source-marker(.*?)">([\w\W]*?)<\/b>/gi, "$2");


                html = this.stripTags(html);


                html = html.replace(/<td><br><\/td>/gi, '[td]');
                html = html.replace(/<a(.*?)>([\w\W]*?)<\/a>/gi, '[a$1]$2[/a]');
                html = html.replace(/<iframe(.*?)>([\w\W]*?)<\/iframe>/gi, '[iframe$1]$2[/iframe]');
                html = html.replace(/<video(.*?)>([\w\W]*?)<\/video>/gi, '[video$1]$2[/video]');
                html = html.replace(/<audio(.*?)>([\w\W]*?)<\/audio>/gi, '[audio$1]$2[/audio]');
                html = html.replace(/<embed(.*?)>([\w\W]*?)<\/embed>/gi, '[embed$1]$2[/embed]');
                html = html.replace(/<object(.*?)>([\w\W]*?)<\/object>/gi, '[object$1]$2[/object]');
                html = html.replace(/<param(.*?)>/gi, '[param$1]');
                html = html.replace(/<img(.*?)>/gi, '[img$1]');


                html = html.replace(/<(\w+)([\w\W]*?)>/gi, '<$1>');


                html = html.replace(/<[^\/>][^>]*>(\s*|\t*|\n*|&nbsp;|<br>)<\/[^>]+>/gi, '');
                html = html.replace(/<[^\/>][^>]*>(\s*|\t*|\n*|&nbsp;|<br>)<\/[^>]+>/gi, '');


                html = html.replace(/\[td\]/gi, '<td><br></td>');
                html = html.replace(/\[a(.*?)\]([\w\W]*?)\[\/a\]/gi, '<a$1>$2</a>');
                html = html.replace(/\[iframe(.*?)\]([\w\W]*?)\[\/iframe\]/gi, '<iframe$1>$2</iframe>');
                html = html.replace(/\[video(.*?)\]([\w\W]*?)\[\/video\]/gi, '<video$1>$2</video>');
                html = html.replace(/\[audio(.*?)\]([\w\W]*?)\[\/audio\]/gi, '<audio$1>$2</audio>');
                html = html.replace(/\[embed(.*?)\]([\w\W]*?)\[\/embed\]/gi, '<embed$1>$2</embed>');
                html = html.replace(/\[object(.*?)\]([\w\W]*?)\[\/object\]/gi, '<object$1>$2</object>');
                html = html.replace(/\[param(.*?)\]/gi, '<param$1>');
                html = html.replace(/\[img(.*?)\]/gi, '<img$1>');


                if (this.opts.convertDivs)
                {
                    html = html.replace(/<div(.*?)>([\w\W]*?)<\/div>/gi, '<p>$2</p>');
                }

                if (this.opts.paragraphy === false)
                {
                    html = html.replace(/<p>([\w\W]*?)<\/p>/gi, '$1<br>');
                }

                // remove span
                html = html.replace(/<span>([\w\W]*?)<\/span>/gi, '$1');

                html = html.replace(/\n{3,}/gi, '\n');

                // remove dirty p
                html = html.replace(/<p><p>/g, '<p>');
                html = html.replace(/<\/p><\/p>/g, '</p>');

                this.execCommand('inserthtml', html);

                if (this.opts.autoresize === true)
                {
                    $(document.body).scrollTop(this.saveScroll);
                }
                else
                {
                    this.$editor.scrollTop(this.saveScroll);
                }

            },


            // TEXTAREA CODE FORMATTING
            formattingRemove: function(html)
            {
                // save pre
                var prebuffer = [];
                var pre = html.match(/<pre(.*?)>([\w\W]*?)<\/pre>/gi);
                if (pre !== null)
                {
                    $.each(pre, function(i,s)
                    {
                        html = html.replace(s, 'prebuffer_' + i);
                        prebuffer.push(s);
                    });
                }

                html = html.replace(/\s{2,}/g, ' ');
                html = html.replace(/\n/g, ' ');
                html = html.replace(/[\t]*/g, '');
                html = html.replace(/\n\s*\n/g, "\n");
                html = html.replace(/^[\s\n]*/g, '');
                html = html.replace(/[\s\n]*$/g, '');
                html = html.replace(/>\s+</g, '><');

                if (prebuffer)
                {
                    $.each(prebuffer, function(i,s)
                    {
                        html = html.replace('prebuffer_' + i, s);
                    });

                    prebuffer = [];
                }

                return html;
            },
            formattingIndenting: function(html)
            {
                html = html.replace(/<li/g, "\t<li");
                html = html.replace(/<tr/g, "\t<tr");
                html = html.replace(/<td/g, "\t\t<td");
                html = html.replace(/<\/tr>/g, "\t</tr>");

                return html;
            },
            formattingEmptyTags: function(html)
            {
                var etags = ["<pre></pre>","<blockquote>\\s*</blockquote>","<em>\\s*</em>","<ul></ul>","<ol></ol>","<li></li>","<table></table>","<tr></tr>","<span>\\s*<span>", "<span>&nbsp;<span>", "<b>\\s*</b>", "<b>&nbsp;</b>", "<p>\\s*</p>", "<p>&nbsp;</p>",  "<p>\\s*<br>\\s*</p>", "<div>\\s*</div>", "<div>\\s*<br>\\s*</div>"];
                for (var i = 0; i < etags.length; ++i)
                {
                    var bbb = etags[i];
                    html = html.replace(new RegExp(bbb,'gi'), "");
                }

                return html;
            },
            formattingAddBefore: function(html)
            {
                var lb = '\r\n';
                var btags = ["<p", "<form","</ul>", '</ol>', "<fieldset","<legend","<object","<embed","<select","<option","<input","<textarea","<pre","<blockquote","<ul","<ol","<li","<dl","<dt","<dd","<table", "<thead","<tbody","<caption","</caption>","<th","<tr","<td","<figure"];
                for (var i = 0; i < btags.length; ++i)
                {
                    var eee = btags[i];
                    html = html.replace(new RegExp(eee,'gi'),lb+eee);
                }

                return html;
            },
            formattingAddAfter: function(html)
            {
                var lb = '\r\n';
                var atags = ['</p>', '</div>', '</h1>', '</h2>', '</h3>', '</h4>', '</h5>', '</h6>', '<br>', '<br />', '</dl>', '</dt>', '</dd>', '</form>', '</blockquote>', '</pre>', '</legend>', '</fieldset>', '</object>', '</embed>', '</textarea>', '</select>', '</option>', '</table>', '</thead>', '</tbody>', '</tr>', '</td>', '</th>', '</figure>'];
                for (var i = 0; i < atags.length; ++i)
                {
                    var aaa = atags[i];
                    html = html.replace(new RegExp(aaa,'gi'),aaa+lb);
                }

                return html;
            },
            formatting: function(html)
            {
                html = this.formattingRemove(html);

                // empty tags
                html = this.formattingEmptyTags(html);

                // add formatting before
                html = this.formattingAddBefore(html);

                // add formatting after
                html = this.formattingAddAfter(html);

                // indenting
                html = this.formattingIndenting(html);

                return html;
            },

            // TOGGLE
            toggle: function()
            {
                var html;

                if (this.opts.visual)
                {
                    this.$editor.hide();

                    html = this.$editor.html();
                    html = $.trim(this.formatting(html));

                    this.$el.height(this.$editor.innerHeight()).val(html).show().focus();

                    this.setBtnActive('html');
                    this.opts.visual = false;
                }
                else
                {
                    this.$el.hide();


                    var html = this.stripTags(this.$el.val());
                    this.$editor.html(html);
                    this.$editor.show();

                    if (this.$editor.html() === '')
                    {
                        if (!$.browser.mozilla)
                        {
                            html = this.opts.allEmptyHtml;
                        }
                        else
                        {
                            html = this.opts.mozillaEmptyHtml;
                        }

                        this.setCode(html);
                    }

                    this.$editor.focus();

                    this.setBtnInactive('html');
                    this.opts.visual = true;

                    this.observeImages();
                    this.observeTables();
                }
            },

            // AUTOSAVE
            autoSave: function()
            {
                setInterval($.proxy(function()
                {
                    $.ajax({
                        url: this.opts.autosave,
                        type: 'post',
                        data: this.$el.attr('name') + '=' + this.getCode(),
                        success: $.proxy(function(data)
                        {
                            // callback
                            if (typeof this.opts.autosaveCallback === 'function')
                            {
                                this.opts.autosaveCallback(data, this);
                            }

                        }, this)
                    });


                }, this), this.opts.interval*1000);
            },

            // TOOLBAR
            buildToolbar: function()
            {
                if (this.opts.toolbar === false)
                {
                    return false;
                }

                this.$toolbar = $('<ul>').addClass('redactor_toolbar');

                if (this.opts.air)
                {
                    $(this.air).append(this.$toolbar);
                    $('body').prepend(this.air);
                }
                else
                {
                    this.$box.prepend(this.$toolbar);
                }

                $.each(this.opts.buttons, $.proxy(function(i,key)
                {

                    if (key !== '|' && typeof this.opts.toolbar[key] !== 'undefined')
                    {
                        var s = this.opts.toolbar[key];

                        if (this.opts.fileUpload === false && key === 'file')
                        {
                            return true;
                        }

                        var li = $('<li>');
                        var a = this.buildButton(key, s);

                        // dropdown
                        if (key === 'backcolor' || key === 'fontcolor' || typeof(s.dropdown) !== 'undefined')
                        {
                            var dropdown = $('<div class="redactor_dropdown" style="display: none;">');

                            if (key === 'backcolor' || key === 'fontcolor')
                            {
                                dropdown = this.buildColorPicker(dropdown, key);
                            }
                            else
                            {
                                dropdown = this.buildDropdown(dropdown, s.dropdown);
                            }

                            this.dropdowns.push(dropdown.appendTo($(document.body)));

                            // observing dropdown
                            this.hdlHideDropDown = $.proxy(function(e) { this.hideDropDown(e, dropdown, key); }, this);
                            this.hdlShowDropDown = $.proxy(function(e) { this.showDropDown(e, dropdown, key); }, this);

                            a.click(this.hdlShowDropDown);
                        }

                        this.$toolbar.append($(li).append(a));
                    }


                    if (key === '|')
                    {
                        this.$toolbar.append($('<li class="redactor_separator"></li>'));
                    }

                }, this));

                $(document).click(this.hdlHideDropDown);
                this.$editor.click(this.hdlHideDropDown);

            },
            buildButton: function(key, s)
            {
                var button = $('<a href="javascript:void(null);" title="' + s.title + '" class="redactor_btn_' + key + '"></a>');

                if (typeof s.func === 'undefined')
                {
                    button.click($.proxy(function() { this.execCommand(s.exec, key); }, this));
                }
                else if (s.func !== 'show')
                {
                    button.click($.proxy(function(e) {

                        this[s.func](e);

                    }, this));
                }

                if (typeof s.callback !== 'undefined')
                {
                    button.click($.proxy(function(e) { s.callback(this, e, key); }, this));
                }

                return button;
            },
            buildDropdown: function(dropdown, obj)
            {
                $.each(obj, $.proxy(
                        function (x, d)
                        {
                            if (typeof(d.className) === 'undefined')
                            {
                                d.className = '';
                            }

                            var drop_a;
                            if (typeof d.name !== 'undefined' && d.name === 'separator')
                            {
                                drop_a = $('<a class="redactor_separator_drop">');
                            }
                            else
                            {
                                drop_a = $('<a href="javascript:void(null);" class="' + d.className + '">' + d.title + '</a>');

                                if (typeof(d.func) === 'undefined')
                                {
                                    $(drop_a).click($.proxy(function() { this.execCommand(d.exec, x); }, this));
                                }
                                else
                                {
                                    $(drop_a).click($.proxy(function(e) { this[d.func](e); }, this));
                                }
                            }

                            $(dropdown).append(drop_a);

                        }, this)
                );

                return dropdown;

            },
            buildColorPicker: function(dropdown, key)
            {
                var mode;
                if (key === 'backcolor')
                {
                    if ($.browser.msie)
                    {
                        mode = 'BackColor';
                    }
                    else
                    {
                        mode = 'hilitecolor';
                    }
                }
                else
                {
                    mode = 'forecolor';
                }

                $(dropdown).width(210);

                var len = this.opts.colors.length;
                for (var i = 0; i < len; ++i)
                {
                    var color = this.opts.colors[i];

                    var swatch = $('<a rel="' + color + '" href="javascript:void(null);" class="redactor_color_link"></a>').css({ 'backgroundColor': color });
                    $(dropdown).append(swatch);

                    var _self = this;
                    $(swatch).click(function()
                    {
                        _self.execCommand(mode, $(this).attr('rel'));

                        if (mode === 'forecolor')
                        {
                            _self.$editor.find('font').replaceWith(function() {

                                return $('<span style="color: ' + $(this).attr('color') + ';">' + $(this).html() + '</span>');

                            });
                        }

                        if ($.browser.msie && mode === 'BackColor')
                        {
                            _self.$editor.find('font').replaceWith(function() {

                                return $('<span style="' + $(this).attr('style') + '">' + $(this).html() + '</span>');

                            });
                        }

                    });
                }

                var elnone = $('<a href="javascript:void(null);" class="redactor_color_none"></a>').html(RLANG.none);

                if (key === 'backcolor')
                {
                    elnone.click($.proxy(this.setBackgroundNone, this));
                }
                else
                {
                    elnone.click($.proxy(this.setColorNone, this));
                }

                $(dropdown).append(elnone);

                return dropdown;
            },
            setBackgroundNone: function()
            {
                $(this.getParentNode()).css('background-color', 'transparent');
                this.syncCode();
            },
            setColorNone: function()
            {
                $(this.getParentNode()).attr('color', '').css('color', '');
                this.syncCode();
            },


            // DROPDOWNS
            showDropDown: function(e, dropdown, key)
            {
                if (this.getBtn(key).hasClass('dropact'))
                {
                    this.hideAllDropDown();
                }
                else
                {
                    this.hideAllDropDown();

                    this.setBtnActive(key);
                    this.getBtn(key).addClass('dropact');

                    var left = this.getBtn(key).offset().left;

                    if (this.opts.air)
                    {
                        var air_top = this.air.offset().top;

                        $(dropdown).css({ position: 'absolute', left: left + 'px', top: air_top+30 + 'px' }).show();
                    }
                    else if (this.opts.fixed && this.fixed)
                    {
                        $(dropdown).css({ position: 'fixed', left: left + 'px', top: '30px' }).show();
                    }
                    else
                    {
                        var top = this.$toolbar.offset().top + 30;
                        $(dropdown).css({ position: 'absolute', left: left + 'px', top: top + 'px' }).show();
                    }
                }

            },
            hideAllDropDown: function()
            {
                this.$toolbar.find('a.dropact').removeClass('act').removeClass('dropact');
                $('.redactor_dropdown').hide();
            },
            hideDropDown: function(e, dropdown, key)
            {
                if (!$(e.target).hasClass('dropact'))
                {
                    $(dropdown).removeClass('act');
                    this.showedDropDown = false;
                    this.hideAllDropDown();
                }
            },

            // SELECTION AND NODE MANIPULATION
            getSelection: function ()
            {
                if (typeof window.getSelection !== 'undefined')
                {
                    return document.getSelection();
                }
                else if (typeof document.selection !== 'undefined')
                {
                    return document.selection.createRange();
                }
            },
            getFragmentHtml: function (fragment)
            {
                var cloned = fragment.cloneNode(true);
                var div = document.createElement('div');
                div.appendChild(cloned);
                return div.innerHTML;
            },
            extractContent: function()
            {
                var node = this.$editor.get(0);
                var frag = document.createDocumentFragment(), child;
                while ((child = node.firstChild))
                {
                    frag.appendChild(child);
                }

                return frag;
            },
            saveSelection: function()
            {
                this.savedSel = null;
                this.savedSelObj = null;

                if ($.browser.msie && parseInt($.browser.version, 10) < 9)
                {
                    var node = this.$editor.get(0);
                    this.savedSel = window.Selection.getOrigin(node);
                    this.savedSelObj = window.Selection.getFocus(node);
                }
                else
                {
                    this.savedSel = window.Selection.getOrigin(window);
                    this.savedSelObj = window.Selection.getFocus(window);
                }
            },
            restoreSelection: function()
            {
                if (this.savedSel !== null && this.savedSelObj !== null && this.savedSel[0].tagName !== 'BODY')
                {
                    if ($(this.savedSel[0]).closest('.redactor_editor').size() == 0)
                    {
                        this.$editor.focus();
                    }
                    else
                    {
                        window.Selection.setSelection(window, this.savedSel[0], this.savedSel[1], this.savedSelObj[0], this.savedSelObj[1]);
                    }
                }
                else
                {
                    this.$editor.focus();
                }
            },
            getParentNode: function()
            {
                if (typeof window.getSelection !== 'undefined')
                {
                    var s = window.getSelection();
                    if (s.rangeCount > 0)
                    {
                        return this.getSelection().getRangeAt(0).startContainer.parentNode;
                    }
                    else return false;

                }
                else if (typeof document.selection !== 'undefined')
                {
                    return this.getSelection().parentElement();
                }
            },
            getCurrentNode: function()
            {
                if (typeof window.getSelection !== 'undefined')
                {
                    return this.getSelection().getRangeAt(0).startContainer;
                }
                else if (typeof document.selection !== 'undefined')
                {
                    return this.getSelection();
                }
            },
            setFocusNode: function(node)
            {
                if (typeof node === 'undefined')
                {
                    return false;
                }

                try {

                    var range = document.createRange();
                    var selection = this.getSelection();

                    if (selection !== null)
                    {
                        range.selectNodeContents(node);
                        selection.addRange(range);
                        selection.collapse(node, 0);
                    }

                    this.$editor.focus();

                } catch (e) { }

            },
            insertNodeAtCaret: function (node)
            {
                if (window.getSelection)
                {
                    var sel = this.getSelection();
                    if (sel.rangeCount)
                    {
                        var range = sel.getRangeAt(0);
                        range.collapse(false);
                        range.insertNode(node);
                        range = range.cloneRange();
                        range.selectNodeContents(node);
                        range.collapse(false);
                        sel.removeAllRanges();
                        sel.addRange(range);
                    }
                }
                else if (document.selection)
                {
                    var html = (node.nodeType === 1) ? node.outerHTML : node.data;
                    var id = "marker_" + ("" + Math.random()).slice(2);
                    html += '<span id="' + id + '"></span>';
                    var textRange = this.getSelection();
                    textRange.collapse(false);
                    textRange.pasteHTML(html);
                    var markerSpan = document.getElementById(id);
                    textRange.moveToElementText(markerSpan);
                    textRange.select();
                    markerSpan.parentNode.removeChild(markerSpan);
                }
            },
            getSelectedHtml: function()
            {
                var html = '';
                if (window.getSelection)
                {
                    var sel = window.getSelection();
                    if (sel.rangeCount)
                    {
                        var container = document.createElement("div");
                        for (var i = 0, len = sel.rangeCount; i < len; ++i)
                        {
                            container.appendChild(sel.getRangeAt(i).cloneContents());
                        }

                        html = container.innerHTML;

                    }
                }
                else if (document.selection)
                {
                    if (document.selection.type === "Text")
                    {
                        html = document.selection.createRange().htmlText;
                    }
                }

                return html;
            },

            // BUTTONS MANIPULATIONS
            getBtn: function(key)
            {
                return $(this.$toolbar.find('a.redactor_btn_' + key));
            },
            setBtnActive: function(key)
            {
                this.getBtn(key).addClass('act');
            },
            setBtnInactive: function(key)
            {
                this.getBtn(key).removeClass('act');
            },

            // RESIZE IMAGES
            resizeImage: function(resize)
            {
                var clicked = false;
                var clicker = false;
                var start_x;
                var start_y;
                var ratio = $(resize).width()/$(resize).height();
                var min_w = 10;
                var min_h = 10;

                $(resize).hover(function() { $(resize).css('cursor', 'nw-resize'); }, function() { $(resize).css('cursor','default'); clicked = false; });

                $(resize).mousedown(function(e)
                {
                    e.preventDefault();

                    ratio = $(resize).width()/$(resize).height();

                    clicked = true;
                    clicker = true;

                    start_x = Math.round(e.pageX - $(resize).eq(0).offset().left);
                    start_y = Math.round(e.pageY - $(resize).eq(0).offset().top);
                });

                $(resize).mouseup($.proxy(function(e)
                {
                    clicked = false;
                    this.syncCode();

                }, this));

                $(resize).click($.proxy(function(e)
                {
                    if (clicker)
                    {
                        this.imageEdit(e);
                    }

                }, this));

                $(resize).mousemove(function(e)
                {
                    if (clicked)
                    {
                        clicker = false;

                        var mouse_x = Math.round(e.pageX - $(this).eq(0).offset().left) - start_x;
                        var mouse_y = Math.round(e.pageY - $(this).eq(0).offset().top) - start_y;

                        var div_h = $(resize).height();

                        var new_h = parseInt(div_h, 10) + mouse_y;
                        var new_w = new_h*ratio;

                        if (new_w > min_w)
                        {
                            $(resize).width(new_w);
                        }

                        if (new_h > min_h)
                        {
                            $(resize).height(new_h);
                        }

                        start_x = Math.round(e.pageX - $(this).eq(0).offset().left);
                        start_y = Math.round(e.pageY - $(this).eq(0).offset().top);
                    }
                });
            },

            // TABLE
            showTable: function()
            {
                this.saveSelection();

                this.modalInit(RLANG.table, 'table', 300, $.proxy(function()
                    {
                        $('#redactor_insert_table_btn').click($.proxy(this.insertTable, this));
                    }, this),

                    function()
                    {
                        $('#redactor_table_rows').focus();
                    }
                );
            },
            insertTable: function()
            {
                var rows = $('#redactor_table_rows').val();
                var columns = $('#redactor_table_columns').val();

                var table_box = $('<div></div>');

                var tableid = Math.floor(Math.random() * 99999);
                var table = $('<table id="table' + tableid + '"><tbody></tbody></table>');

                for (var i = 0; i < rows; i++)
                {
                    var row = $('<tr></tr>');
                    for (var z = 0; z < columns; z++)
                    {
                        var column = $('<td><br></td>');
                        $(row).append(column);
                    }
                    $(table).append(row);
                }

                $(table_box).append(table);
                var html = $(table_box).html() + '<p></p>';

                this.restoreSelection();
                this.execCommand('inserthtml', html);
                this.modalClose();
                this.observeTables();

            },
            tableObserver: function(e)
            {
                this.$table = $(e.target).closest('table');

                this.$table_tr = this.$table.find('tr');
                this.$table_td = this.$table.find('td');

                this.$table_td.removeClass('redactor-current-td');

                this.$tbody = $(e.target).closest('tbody');
                this.$thead = $(this.$table).find('thead');

                this.$current_td = $(e.target);
                this.$current_td.addClass('redactor-current-td');

                this.$current_tr = $(e.target).closest('tr');
            },
            deleteTable: function()
            {
                $(this.$table).remove();
                this.$table = false;
                this.syncCode();
            },
            deleteRow: function()
            {
                $(this.$current_tr).remove();
                this.syncCode();
            },
            deleteColumn: function()
            {
                var index = $(this.$current_td).get(0).cellIndex;

                $(this.$table).find('tr').each(function()
                {
                    $(this).find('td').eq(index).remove();
                });

                this.syncCode();
            },
            addHead: function()
            {
                if ($(this.$table).find('thead').size() !== 0)
                {
                    this.deleteHead();
                }
                else
                {
                    var tr = $(this.$table).find('tr').first().clone();
                    tr.find('td').html('&nbsp;');
                    this.$thead = $('<thead></thead>');
                    this.$thead.append(tr);
                    $(this.$table).prepend(this.$thead);
                    this.syncCode();
                }
            },
            deleteHead: function()
            {
                $(this.$thead).remove();
                this.$thead = false;
                this.syncCode();
            },
            insertRowAbove: function()
            {
                this.insertRow('before');
            },
            insertRowBelow: function()
            {
                this.insertRow('after');
            },
            insertColumnLeft: function()
            {
                this.insertColumn('before');
            },
            insertColumnRight: function()
            {
                this.insertColumn('after');
            },
            insertRow: function(type)
            {
                var new_tr = $(this.$current_tr).clone();
                new_tr.find('td').html('&nbsp;');
                if (type === 'after')
                {
                    $(this.$current_tr).after(new_tr);
                }
                else
                {
                    $(this.$current_tr).before(new_tr);
                }

                this.syncCode();
            },
            insertColumn: function(type)
            {
                var index = 0;

                this.$current_td.addClass('redactor-current-td');

                this.$current_tr.find('td').each(function(i,s)
                {
                    if ($(s).hasClass('redactor-current-td'))
                    {
                        index = i;
                    }
                });

                this.$table_tr.each(function(i,s)
                {
                    var current = $(s).find('td').eq(index);

                    var td = current.clone();
                    td.html('&nbsp;');

                    if (type === 'after')
                    {
                        $(current).after(td);
                    }
                    else
                    {
                        $(current).before(td);
                    }

                });

                this.syncCode();
            },

            // INSERT VIDEO
            showVideo: function()
            {
                this.saveSelection();
                this.modalInit(RLANG.video, 'video', 600, $.proxy(function()
                    {
                        $('#redactor_insert_video_btn').click($.proxy(this.insertVideo, this));
                    }, this),

                    function()
                    {
                        $('#redactor_insert_video_area').focus();
                    }
                );
            },
            insertVideo: function()
            {
                var data = $('#redactor_insert_video_area').val();
                data = this.stripTags(data);

                this.restoreSelection();
                this.execCommand('inserthtml', data);
                this.modalClose();
            },

            // INSERT IMAGE
            imageEdit: function(e)
            {
                var $el = $(e.target);
                var parent = $el.parent();

                var handler = $.proxy(function()
                {
                    $('#redactor_file_alt').val($el.attr('alt'));
                    $('#redactor_image_edit_src').attr('href', $el.attr('src'));
                    $('#redactor_form_image_align').val($el.css('float'));

                    if ($(parent).get(0).tagName === 'A')
                    {
                        $('#redactor_file_link').val($(parent).attr('href'));
                    }

                    $('#redactor_image_delete_btn').click($.proxy(function() { this.imageDelete($el); }, this));
                    $('#redactorSaveBtn').click($.proxy(function() { this.imageSave($el); }, this));

                }, this);

                this.modalInit(RLANG.image, 'image_edit', 380,  handler);

            },
            imageDelete: function(el)
            {
                $(el).remove();
                this.modalClose();
                this.syncCode();
            },
            imageSave: function(el)
            {
                var parent = $(el).parent();

                $(el).attr('alt', $('#redactor_file_alt').val());

                var floating = $('#redactor_form_image_align').val();

                if (floating === 'left')
                {
                    $(el).css({ 'float': 'left', margin: '0 10px 10px 0' });
                }
                else if (floating === 'right')
                {
                    $(el).css({ 'float': 'right', margin: '0 0 10px 10px' });
                }
                else
                {
                    $(el).css({ 'float': 'none', margin: '0' });
                }

                // as link
                var link = $.trim($('#redactor_file_link').val());
                if (link !== '')
                {
                    if ($(parent).get(0).tagName !== 'A')
                    {
                        $(el).replaceWith('<a href="' + link + '">' + this.outerHTML(el) + '</a>');
                    }
                    else
                    {
                        $(parent).attr('href', link);
                    }
                }
                else
                {
                    if ($(parent).get(0).tagName === 'A')
                    {
                        $(parent).replaceWith(this.outerHTML(el));
                    }
                }

                this.modalClose();
                this.observeImages();
                this.syncCode();

            },
            showImage: function()
            {
                this.saveSelection();

                var handler = $.proxy(function()
                {
                    // json
                    if (this.opts.imageGetJson !== false)
                    {
                        $.getJSON(this.opts.imageGetJson, $.proxy(function(data) {

                            var folders = {};
                            var z = 0;

                            // folders
                            $.each(data, $.proxy(function(key, val)
                            {
                                if (typeof val.folder !== 'undefined')
                                {
                                    z++;
                                    folders[val.folder] = z;
                                }

                            }, this));

                            var folderclass = false;
                            $.each(data, $.proxy(function(key, val)
                            {
                                // title
                                var thumbtitle = '';
                                if (typeof val.title !== 'undefined')
                                {
                                    thumbtitle = val.title;
                                }

                                var folderkey = 0;
                                if (!$.isEmptyObject(folders) && typeof val.folder !== 'undefined')
                                {
                                    folderkey = folders[val.folder];
                                    if (folderclass === false)
                                    {
                                        folderclass = '.redactorfolder' + folderkey;
                                    }
                                }

                                var img = $('<img src="' + val.thumb + '" style="max-width:100%;" class="redactorfolder redactorfolder' + folderkey + '" rel="' + val.image + '" title="' + thumbtitle + '" />');
                                $('#redactor_image_box').append(img);
                                $(img).click($.proxy(this.imageSetThumb, this));


                            }, this));

                            // folders
                            if (!$.isEmptyObject(folders))
                            {
                                $('.redactorfolder').hide();
                                $(folderclass).show();

                                var onchangeFunc = function(e)
                                {
                                    $('.redactorfolder').hide();
                                    $('.redactorfolder' + $(e.target).val()).show();
                                }

                                var select = $('<select id="redactor_image_box_select">');
                                $.each(folders, function(k,v)
                                {
                                    select.append($('<option value="' + v + '">' + k + '</option>'));
                                });

                                $('#redactor_image_box').before(select);
                                select.change(onchangeFunc);
                            }

                        }, this));
                    }
                    else
                    {
                        $('#redactor_tabs a').eq(1).remove();
                    }

                    if (this.opts.imageUpload !== false)
                    {

                        // dragupload
                        if (this.opts.uploadCrossDomain === false && this.isMobile() === false)
                        {

                            if ($('#redactor_file').size() !== 0)
                            {
                                $('#redactor_file').dragupload(
                                    {
                                        url: this.opts.imageUpload,
                                        uploadFields: this.opts.uploadFields,
                                        success: $.proxy(this.imageUploadCallback, this)
                                    });
                            }
                        }

                        // ajax upload
                        this.uploadInit('redactor_file', { auto: true, url: this.opts.imageUpload, success: $.proxy(this.imageUploadCallback, this)  });
                    }
                    else
                    {
                        $('.redactor_tab').hide();
                        if (this.opts.imageGetJson === false)
                        {
                            $('#redactor_tabs').remove();
                            $('#redactor_tab3').show();
                        }
                        else
                        {
                            var tabs = $('#redactor_tabs a');
                            tabs.eq(0).remove();
                            tabs.eq(1).addClass('redactor_tabs_act');
                            $('#redactor_tab2').show();
                        }
                    }

                    $('#redactor_upload_btn').click($.proxy(this.imageUploadCallbackLink, this));

                }, this);

                var endCallback = $.proxy(function()
                {
                    if (this.opts.imageUpload === false && this.opts.imageGetJson === false)
                    {
                        $('#redactor_file_link').focus();
                    }
                }, this);

                this.modalInit(RLANG.image, 'image', 570, handler, endCallback, true);

            },
            imageSetThumb: function(e)
            {
                this._imageSet('<img src="' + $(e.target).attr('rel') + '" style="max-width:100%;" alt="' + $(e.target).attr('title') + '" />', true);
            },
            imageUploadCallbackLink: function()
            {
                if ($('#redactor_file_link').val() !== '')
                {
                    var data = '<img src="' + $('#redactor_file_link').val() + '" style="max-width:100%;" />';
                    this._imageSet(data, true);
                }
                else
                {
                    this.modalClose();
                }
            },
            imageUploadCallback: function(data)
            {
                this._imageSet(data);
            },
            _imageSet: function(json, link)
            {
                this.restoreSelection();

                if (json !== false)
                {
                    var html = '', data = '';
                    if (link !== true)
                    {
                        data = $.parseJSON(json);
                        html = '<p><img src="' + data.filelink + '" width="100%" /></p>';
                    }
                    else
                    {
                        html = json;
                    }

                    this.execCommand('inserthtml', html);

                    // upload image callback
                    if (link !== true && typeof this.opts.imageUploadCallback === 'function')
                    {
                        this.opts.imageUploadCallback(this, data);
                    }
                }

                this.modalClose();
                this.observeImages();
            },

            // INSERT LINK
            showLink: function()
            {
                this.saveSelection();

                var handler = $.proxy(function()
                {
                    this.insert_link_node = false;
                    var sel = this.getSelection();
                    var url = '', text = '', target = '';

                    if ($.browser.msie)
                    {
                        var parent = this.getParentNode();
                        if (parent.nodeName === 'A')
                        {
                            this.insert_link_node = $(parent);
                            text = this.insert_link_node.text();
                            url = this.insert_link_node.attr('href');
                            target = this.insert_link_node.attr('target');
                        }
                        else
                        {
                            if (this.oldIE())
                            {
                                text = sel.text;
                            }
                            else
                            {
                                text = sel.toString();
                            }
                        }
                    }
                    else
                    {
                        if (sel && sel.anchorNode && sel.anchorNode.parentNode.tagName === 'A')
                        {
                            url = sel.anchorNode.parentNode.href;
                            text = sel.anchorNode.parentNode.text;
                            target = sel.anchorNode.parentNode.target;

                            if (sel.toString() === '')
                            {
                                this.insert_link_node = sel.anchorNode.parentNode;
                            }
                        }
                        else
                        {
                            text = sel.toString();
                        }
                    }

                    $('.redactor_link_text').val(text);

                    var turl = url.replace(self.location.href, '');

                    if (url.search('mailto:') === 0)
                    {
                        this.setModalTab(2);

                        $('#redactor_tab_selected').val(2);
                        $('#redactor_link_mailto').val(url.replace('mailto:', ''));
                    }
                    else if (turl.search(/^#/gi) === 0)
                    {
                        this.setModalTab(3);

                        $('#redactor_tab_selected').val(3);
                        $('#redactor_link_anchor').val(turl.replace(/^#/gi, ''));
                    }
                    else
                    {
                        $('#redactor_link_url').val(url);
                    }

                    if (target === '_blank')
                    {
                        $('#redactor_link_blank').attr('checked', true);
                    }

                    $('#redactor_insert_link_btn').click($.proxy(this.insertLink, this));


                }, this);

                var endCallback = function(url)
                {
                    $('#redactor_link_url').focus();
                };


                this.modalInit(RLANG.link, 'link', 460, handler, endCallback);

            },
            insertLink: function()
            {
                var tab_selected = $('#redactor_tab_selected').val();
                var link = '', text = '', target = '';

                if (tab_selected === '1') // url
                {
                    link = $('#redactor_link_url').val();
                    text = $('#redactor_link_url_text').val();

                    if ($('#redactor_link_blank').attr('checked'))
                    {
                        target = '_blank';
                    }

                    // test http
                    var re = new RegExp('^https?://', 'i');
                    if (link.search(re) == -1)
                    {
                        link = this.opts.protocol + link;
                    }
                }
                else if (tab_selected === '2') // mailto
                {
                    link = 'mailto:' + $('#redactor_link_mailto').val();
                    text = $('#redactor_link_mailto_text').val();
                }
                else if (tab_selected === '3') // anchor
                {
                    link = '#' + $('#redactor_link_anchor').val();

                    text = $('#redactor_link_anchor_text').val();
                }
                this._insertLink('<a href="' + link + '" target="' + target + '">' +  text + '</a>&nbsp;', $.trim(text), link, target);

            },
            _insertLink: function(a, text, link, target)
            {
                this.$editor.focus();
                this.restoreSelection();

                if (text !== '')
                {
                    if (this.insert_link_node)
                    {
                        $(this.insert_link_node).text(text);
                        $(this.insert_link_node).attr('href', link);
                        if (target !== '')
                        {
                            $(this.insert_link_node).attr('target', target);
                        }
                        this.syncCode();
                    }
                    else
                    {
                        this.execCommand('inserthtml', a);
                    }
                }

                this.modalClose();
            },

            // INSERT FILE
            showFile: function()
            {
                this.saveSelection();

                var handler = $.proxy(function()
                {
                    var sel = this.getSelection();

                    var text = '';

                    if (this.oldIE())
                    {
                        text = sel.text;
                    }
                    else
                    {
                        text = sel.toString();
                    }

                    $('#redactor_filename').val(text);

                    // dragupload
                    if (this.opts.uploadCrossDomain === false && this.isMobile() === false)
                    {
                        $('#redactor_file').dragupload(
                            {
                                url: this.opts.fileUpload,
                                uploadFields: this.opts.uploadFields,
                                success: $.proxy(function(data)
                                {
                                    this.fileUploadCallback(data);
                                }, this)
                            });
                    }

                    this.uploadInit('redactor_file', { auto: true, url: this.opts.fileUpload, success: $.proxy(function(data) {

                        this.fileUploadCallback(data);

                    }, this)});

                }, this);

                this.modalInit(RLANG.file, 'file', 500, handler);
            },
            fileUploadCallback: function(json)
            {
                this.restoreSelection();

                if (json !== false)
                {
                    var data = $.parseJSON(json);
                    var text = $('#redactor_filename').val();

                    if (text === '')
                    {
                        text = data.filename;
                    }

                    var link = '<a href="' + data.filelink + '">' + text + '</a>';

                    // chrome fix
                    if ($.browser.webkit && !!window.chrome)
                    {
                        link = link + '&nbsp;';
                    }

                    this.execCommand('inserthtml', link);

                    // file upload callback
                    if (typeof this.opts.fileUploadCallback === 'function')
                    {
                        this.opts.fileUploadCallback(this, data);
                    }
                }

                this.modalClose();
            },



            // MODAL
            modalInit: function(title, url, width, handler, endCallback)
            {
                // modal overlay
                if ($('#redactor_modal_overlay').size() === 0)
                {
                    this.overlay = $('<div id="redactor_modal_overlay" style="display: none;"></div>');
                    $('body').prepend(this.overlay);
                }

                if (this.opts.overlay)
                {
                    $('#redactor_modal_overlay').show();
                    $('#redactor_modal_overlay').click($.proxy(this.modalClose, this));
                }

                if ($('#redactor_modal').size() === 0)
                {
                    this.modal = $('<div id="redactor_modal" style="display: none;"><div id="redactor_modal_close">&times;</div><div id="redactor_modal_header"></div><div id="redactor_modal_inner"></div></div>');
                    $('body').append(this.modal);
                }

                $('#redactor_modal_close').click($.proxy(this.modalClose, this));

                this.hdlModalClose = $.proxy(function(e) { if ( e.keyCode === 27) { this.modalClose(); } }, this);

                $(document).keyup(this.hdlModalClose);
                this.$editor.keyup(this.hdlModalClose);

                $('#redactor_modal_inner').html(this.opts['modal_' + url]);
                $('#redactor_modal_header').html(title);

                // tabs
                if ($('#redactor_tabs').size() !== 0)
                {
                    var that = this;
                    $('#redactor_tabs a').each(function(i,s)
                    {
                        i++;
                        $(s).click(function()
                        {
                            $('#redactor_tabs a').removeClass('redactor_tabs_act');
                            $(this).addClass('redactor_tabs_act');
                            $('.redactor_tab').hide();
                            $('#redactor_tab' + i).show();
                            $('#redactor_tab_selected').val(i);

                            if (that.isMobile() === false)
                            {
                                var height = $('#redactor_modal').outerHeight();
                                $('#redactor_modal').css('margin-top', '-' + (height+10)/2 + 'px');
                            }
                        });
                    });
                }

                $('#redactor_btn_modal_close').click($.proxy(this.modalClose, this));

                // callback
                if (typeof(handler) === 'function')
                {
                    handler();
                }

                // setup
                var height = $('#redactor_modal').outerHeight();

                if (this.isMobile() === false)
                {
                    $('#redactor_modal').css({ position: 'fixed', top: '50%', left: '50%', width: width + 'px', height: 'auto', minHeight: 'auto', marginTop: '-' + (height+10)/2 + 'px', marginLeft: '-' + (width+60)/2 + 'px' }).fadeIn('fast');

                    this.modalSaveBodyOveflow = $(document.body).css('overflow');
                    $(document.body).css('overflow', 'hidden');
                }
                else
                {
                    $('#redactor_modal').css({ position: 'fixed', width: '100%', height: '100%', top: '0', left: '0', margin: '0', minHeight: '300px' }).show();
                }

                // end callback
                if (typeof(endCallback) === 'function')
                {
                    endCallback();
                }

            },
            modalClose: function()
            {

                $('#redactor_modal_close').unbind('click', this.modalClose);
                $('#redactor_modal').fadeOut('fast', $.proxy(function()
                {
                    $('#redactor_modal_inner').html('');

                    if (this.opts.overlay)
                    {
                        $('#redactor_modal_overlay').hide();
                        $('#redactor_modal_overlay').unbind('click', this.modalClose);
                    }

                    $(document).unbind('keyup', this.hdlModalClose);
                    this.$editor.unbind('keyup', this.hdlModalClose);

                }, this));

                if (this.isMobile() === false)
                {
                    $(document.body).css('overflow', this.modalSaveBodyOveflow);
                }

            },
            setModalTab: function(num)
            {
                $('.redactor_tab').hide();
                var tabs = $('#redactor_tabs a');
                tabs.removeClass('redactor_tabs_act');
                tabs.eq(num-1).addClass('redactor_tabs_act');
                $('#redactor_tab' + num).show();
            },

            // UPLOAD
            uploadInit: function(element, options)
            {
                // Upload Options
                this.uploadOptions = {
                    url: false,
                    success: false,
                    start: false,
                    trigger: false,
                    auto: false,
                    input: false
                };

                $.extend(this.uploadOptions, options);

                // Test input or form
                if ($('#' + element).size() !== 0 && $('#' + element).get(0).tagName === 'INPUT')
                {
                    this.uploadOptions.input = $('#' + element);
                    this.element = $($('#' + element).get(0).form);
                }
                else
                {
                    this.element = $('#' + element);
                }

                this.element_action = this.element.attr('action');

                // Auto or trigger
                if (this.uploadOptions.auto)
                {
                    $(this.uploadOptions.input).change($.proxy(function()
                    {
                        this.element.submit(function(e) { return false; });
                        this.uploadSubmit();
                    }, this));

                }
                else if (this.uploadOptions.trigger)
                {
                    $('#' + this.uploadOptions.trigger).click($.proxy(this.uploadSubmit, this));
                }
            },
            uploadSubmit : function()
            {
                this.uploadForm(this.element, this.uploadFrame());
            },
            uploadFrame : function()
            {
                this.id = 'f' + Math.floor(Math.random() * 99999);

                var d = document.createElement('div');
                var iframe = '<iframe style="display:none" id="'+this.id+'" name="'+this.id+'"></iframe>';
                d.innerHTML = iframe;
                document.body.appendChild(d);

                // Start
                if (this.uploadOptions.start)
                {
                    this.uploadOptions.start();
                }

                $('#' + this.id).load($.proxy(this.uploadLoaded, this));

                return this.id;
            },
            uploadForm : function(f, name)
            {
                if (this.uploadOptions.input)
                {
                    var formId = 'redactorUploadForm' + this.id;
                    var fileId = 'redactorUploadFile' + this.id;
                    this.form = $('<form  action="' + this.uploadOptions.url + '" method="POST" target="' + name + '" name="' + formId + '" id="' + formId + '" enctype="multipart/form-data"></form>');

                    // append hidden fields
                    if (this.opts.uploadFields !== false && typeof this.opts.uploadFields === 'object')
                    {
                        $.each(this.opts.uploadFields, $.proxy(function(k,v)
                        {
                            if (v.indexOf('#') === 0)
                            {
                                v = $(v).val();
                            }

                            var hidden = $('<input type="hidden" name="' + k + '" value="' + v + '">');
                            $(this.form).append(hidden);

                        }, this));
                    }

                    var oldElement = this.uploadOptions.input;
                    var newElement = $(oldElement).clone();
                    $(oldElement).attr('id', fileId);
                    $(oldElement).before(newElement);
                    $(oldElement).appendTo(this.form);
                    $(this.form).css('position', 'absolute');
                    $(this.form).css('top', '-2000px');
                    $(this.form).css('left', '-2000px');
                    $(this.form).appendTo('body');

                    this.form.submit();
                }
                else
                {
                    f.attr('target', name);
                    f.attr('method', 'POST');
                    f.attr('enctype', 'multipart/form-data');
                    f.attr('action', this.uploadOptions.url);

                    this.element.submit();
                }

            },
            uploadLoaded : function()
            {
                var i = $('#' + this.id);
                var d;

                if (i.contentDocument)
                {
                    d = i.contentDocument;
                }
                else if (i.contentWindow)
                {
                    d = i.contentWindow.document;
                }
                else
                {
                    d = window.frames[this.id].document;
                }

                // Success
                if (this.uploadOptions.success)
                {
                    if (typeof d !== 'undefined')
                    {
                        // Remove bizarre <pre> tag wrappers around our json data:
                        var rawString = d.body.innerHTML;
                        var jsonString = rawString.match(/\{.*\}/)[0];
                        this.uploadOptions.success(jsonString);
                    }
                    else
                    {
                        alert('Upload failed!');
                        this.uploadOptions.success(false);
                    }
                }

                this.element.attr('action', this.element_action);
                this.element.attr('target', '');

            },

            // UTILITY
            oldIE: function()
            {
                if ($.browser.msie && parseInt($.browser.version, 10) < 9)
                {
                    return true;
                }

                return false;
            },
            outerHTML: function(s)
            {
                return $("<p>").append($(s).eq(0).clone()).html();
            },
            normalize: function(str)
            {
                return parseInt(str.replace('px',''), 10);
            },
            isMobile: function(ipad)
            {
                if (ipad === true && /(iPhone|iPod|iPad|BlackBerry|Android)/.test(navigator.userAgent))
                {
                    return true;
                }
                else if (/(iPhone|iPod|BlackBerry|Android)/.test(navigator.userAgent))
                {
                    return true;
                }
                else
                {
                    return false;
                }
            }

        };


        // API
        $.fn.getEditor = function()
        {
            return this.data('redactor').$editor;
        };

        $.fn.getCode = function()
        {
            return this.data('redactor').getCode();
        };

        $.fn.getText = function()
        {
            return this.data('redactor').$editor.text();
        };

        $.fn.getSelected = function()
        {
            return this.data('redactor').getSelectedHtml();
        };

        $.fn.setCode = function(html)
        {
            this.data('redactor').setCode(html);
        };

        $.fn.insertHtml = function(html)
        {
            this.data('redactor').insertHtml(html);
        };

        $.fn.destroyEditor = function()
        {
            this.data('redactor').destroy();
            this.removeData('redactor');
        };

        $.fn.setFocus = function()
        {
            this.data('redactor').$editor.focus();
        };

        $.fn.execCommand = function(cmd, param)
        {
            this.data('redactor').execCommand(cmd, param);
        };

    })(jQuery);

    /*
     Plugin Drag and drop Upload v1.0.2
     http://imperavi.com/
     Copyright 2012, Imperavi Inc.
     */
    (function($){

        "use strict";

        // Initialization
        $.fn.dragupload = function(options)
        {
            return this.each(function() {
                var obj = new Construct(this, options);
                obj.init();
            });
        };

        // Options and variables
        function Construct(el, options) {

            this.opts = $.extend({

                url: false,
                success: false,
                preview: false,
                uploadFields: false,

                text: RLANG.drop_file_here,
                atext: RLANG.or_choose

            }, options);

            this.$el = $(el);
        }

        // Functionality
        Construct.prototype = {
            init: function()
            {
                if (!$.browser.msie)
                {
                    this.droparea = $('<div class="redactor_droparea"></div>');
                    this.dropareabox = $('<div class="redactor_dropareabox">' + this.opts.text + '</div>');
                    this.dropalternative = $('<div class="redactor_dropalternative">' + this.opts.atext + '</div>');

                    this.droparea.append(this.dropareabox);

                    this.$el.before(this.droparea);
                    this.$el.before(this.dropalternative);

                    // drag over
                    this.dropareabox.bind('dragover', $.proxy(function() { return this.ondrag(); }, this));

                    // drag leave
                    this.dropareabox.bind('dragleave', $.proxy(function() { return this.ondragleave(); }, this));

                    var uploadProgress = $.proxy(function(e)
                    {
                        var percent = parseInt(e.loaded / e.total * 100, 10);
                        this.dropareabox.text('Loading ' + percent + '%');

                    }, this);

                    var xhr = jQuery.ajaxSettings.xhr();

                    if (xhr.upload)
                    {
                        xhr.upload.addEventListener('progress', uploadProgress, false);
                    }

                    var provider = function () { return xhr; };

                    // drop
                    this.dropareabox.get(0).ondrop = $.proxy(function(event)
                    {
                        event.preventDefault();

                        this.dropareabox.removeClass('hover').addClass('drop');

                        var file = event.dataTransfer.files[0];
                        var fd = new FormData();

                        // append hidden fields
                        if (this.opts.uploadFields !== false && typeof this.opts.uploadFields === 'object')
                        {
                            $.each(this.opts.uploadFields, $.proxy(function(k,v)
                            {
                                if (v.indexOf('#') === 0)
                                {
                                    v = $(v).val();
                                }

                                fd.append(k, v);

                            }, this));
                        }

                        // append file data
                        fd.append('file', file);


                        $.ajax({
                            dataType: 'html',
                            url: this.opts.url,
                            data: fd,
                            xhr: provider,
                            cache: false,
                            contentType: false,
                            processData: false,
                            type: 'POST',
                            success: $.proxy(function(data)
                            {
                                if (this.opts.success !== false)
                                {
                                    this.opts.success(data);
                                }

                                if (this.opts.preview === true)
                                {
                                    this.dropareabox.html(data);
                                }

                            }, this)
                        });


                    }, this);
                }
            },
            ondrag: function()
            {
                this.dropareabox.addClass('hover');
                return false;
            },
            ondragleave: function()
            {
                this.dropareabox.removeClass('hover');
                return false;
            }
        };

    })(jQuery);


// Define: Linkify plugin from stackoverflow
    (function($){

        "use strict";

        var protocol = 'http://';
        var url1 = /(^|&lt;|\s)(www\..+?\..+?)(\s|&gt;|$)/g,
            url2 = /(^|&lt;|\s)(((https?|ftp):\/\/|mailto:).+?)(\s|&gt;|$)/g,

            linkifyThis = function ()
            {
                var childNodes = this.childNodes,
                    i = childNodes.length;
                while(i--)
                {
                    var n = childNodes[i];
                    if (n.nodeType === 3)
                    {
                        var html = n.nodeValue;
                        if (html)
                        {
                            html = html.replace(/&/g, '&amp;')
                                .replace(/</g, '&lt;')
                                .replace(/>/g, '&gt;')
                                .replace(url1, '$1<a href="' + protocol + '$2">$2</a>$3')
                                .replace(url2, '$1<a href="$2">$2</a>$5');

                            $(n).after(html).remove();
                        }
                    }
                    else if (n.nodeType === 1  &&  !/^(a|button|textarea)$/i.test(n.tagName))
                    {
                        linkifyThis.call(n);
                    }
                }
            };

        $.fn.linkify = function ()
        {
            this.each(linkifyThis);
        };

    })(jQuery);




    /* jQuery plugin textselect
     * version: 0.9
     * author: Josef Moravec, josef.moravec@gmail.com
     * updated: Imperavi Inc.
     *
     */
    (function($){$.event.special.textselect={setup:function(data,namespaces){$(this).data("textselected",false);$(this).data("ttt",data);$(this).bind('mouseup',$.event.special.textselect.handler)},teardown:function(data){$(this).unbind('mouseup',$.event.special.textselect.handler)},handler:function(event){var data=$(this).data("ttt");var text=$.event.special.textselect.getSelectedText(data).toString();if(text!=''){$(this).data("textselected",true);event.type="textselect";event.text=text;$.event.handle.apply(this,arguments)}},getSelectedText:function(data){var text='';if(window.getSelection)text=window.getSelection();else if(document.getSelection) text=document.getSelection();else if(document.selection)text=document.selection.createRange().text;return text}};$.event.special.textunselect={setup:function(data,namespaces){$(this).data("rttt",data);$(this).data("textselected",false);$(this).bind('mouseup',$.event.special.textunselect.handler);$(this).bind('keyup',$.event.special.textunselect.handlerKey)},teardown:function(data){$(this).unbind('mouseup',$.event.special.textunselect.handler)},handler:function(event){if($(this).data("textselected")){var data=$(this).data("rttt");var text=$.event.special.textselect.getSelectedText(data).toString();if(text==''){$(this).data("textselected",false);event.type="textunselect";$.event.handle.apply(this,arguments)}}},handlerKey:function(event){if($(this).data("textselected")){var data=$(this).data("rttt");var text=$.event.special.textselect.getSelectedText(data).toString();if((event.keyCode=27)&&(text=='')){$(this).data("textselected",false);event.type="textunselect";$.event.handle.apply(this,arguments)}}}}})(jQuery);



    $(document).ready(function()
    {
        /*$('.custom-scroll-bar-basic').jScrollPane({
            contentWidth: '0px'
        });*/

        $('.redactor__textarea').redactor(
            {
                imageUpload: '/uploads.php?section=images',
                fileUpload: '/uploads.php?section=files',
                callbacks: {
                    imageUpload: function(image, json)
                    {
                        console.log(image+json);
                    },
                    imageUploadError: function(json, xhr)
                    {
                        alert(xhr);
                        if (xhr && xhr.status === 400)
                        {
                            console.log('Something went wrong!');
                        }
                    }
                }
            }
        );
    });


    $(function(){
        var wrapper = $( ".file_upload" ),
            inp = wrapper.find( "input" ),
            btn = wrapper.find( "button" ),
            lbl = wrapper.find( "div" );

        btn.focus(function(){
            inp.focus()
        });
        // Crutches for the :focus style:
        inp.focus(function(){
            wrapper.addClass( "focus" );
        }).blur(function(){
            wrapper.removeClass( "focus" );
        });

        var file_api = ( window.File && window.FileReader && window.FileList && window.Blob ) ? true : false;

        inp.change(function(){
            var file_name;
            if( file_api && inp[ 0 ].files[ 0 ] )
                file_name = inp[ 0 ].files[ 0 ].name;
            else
                file_name = inp.val().replace( "C:\\fakepath\\", '' );

            if( ! file_name.length )
                return;

            if( lbl.is( ":visible" ) ){
                lbl.text( file_name );
                btn.text( "Выбрать" );
            }else
                btn.text( file_name );
        }).change();

    });
    $( window ).resize(function(){
        $( ".file_upload input" ).triggerHandler( "change" );
    });
})();