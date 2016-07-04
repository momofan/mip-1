<<<<<<< HEAD
/*! jQuery v2.1.4 | (c) 2005, 2015 jQuery Foundation, Inc. | jquery.org/license */
!function(a,b){"object"==typeof module&&"object"==typeof module.exports?module.exports=a.document?b(a,!0):function(a){if(!a.document)throw new Error("jQuery requires a window with a document");return b(a)}:b(a)}("undefined"!=typeof window?window:this,function(a,b){var c=[],d=c.slice,e=c.concat,f=c.push,g=c.indexOf,h={},i=h.toString,j=h.hasOwnProperty,k={},l=a.document,m="2.1.4",n=function(a,b){return new n.fn.init(a,b)},o=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,p=/^-ms-/,q=/-([\da-z])/gi,r=function(a,b){return b.toUpperCase()};n.fn=n.prototype={jquery:m,constructor:n,selector:"",length:0,toArray:function(){return d.call(this)},get:function(a){return null!=a?0>a?this[a+this.length]:this[a]:d.call(this)},pushStack:function(a){var b=n.merge(this.constructor(),a);return b.prevObject=this,b.context=this.context,b},each:function(a,b){return n.each(this,a,b)},map:function(a){return this.pushStack(n.map(this,function(b,c){return a.call(b,c,b)}))},slice:function(){return this.pushStack(d.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},eq:function(a){var b=this.length,c=+a+(0>a?b:0);return this.pushStack(c>=0&&b>c?[this[c]]:[])},end:function(){return this.prevObject||this.constructor(null)},push:f,sort:c.sort,splice:c.splice},n.extend=n.fn.extend=function(){var a,b,c,d,e,f,g=arguments[0]||{},h=1,i=arguments.length,j=!1;for("boolean"==typeof g&&(j=g,g=arguments[h]||{},h++),"object"==typeof g||n.isFunction(g)||(g={}),h===i&&(g=this,h--);i>h;h++)if(null!=(a=arguments[h]))for(b in a)c=g[b],d=a[b],g!==d&&(j&&d&&(n.isPlainObject(d)||(e=n.isArray(d)))?(e?(e=!1,f=c&&n.isArray(c)?c:[]):f=c&&n.isPlainObject(c)?c:{},g[b]=n.extend(j,f,d)):void 0!==d&&(g[b]=d));return g},n.extend({expando:"jQuery"+(m+Math.random()).replace(/\D/g,""),isReady:!0,error:function(a){throw new Error(a)},noop:function(){},isFunction:function(a){return"function"===n.type(a)},isArray:Array.isArray,isWindow:function(a){return null!=a&&a===a.window},isNumeric:function(a){return!n.isArray(a)&&a-parseFloat(a)+1>=0},isPlainObject:function(a){return"object"!==n.type(a)||a.nodeType||n.isWindow(a)?!1:a.constructor&&!j.call(a.constructor.prototype,"isPrototypeOf")?!1:!0},isEmptyObject:function(a){var b;for(b in a)return!1;return!0},type:function(a){return null==a?a+"":"object"==typeof a||"function"==typeof a?h[i.call(a)]||"object":typeof a},globalEval:function(a){var b,c=eval;a=n.trim(a),a&&(1===a.indexOf("use strict")?(b=l.createElement("script"),b.text=a,l.head.appendChild(b).parentNode.removeChild(b)):c(a))},camelCase:function(a){return a.replace(p,"ms-").replace(q,r)},nodeName:function(a,b){return a.nodeName&&a.nodeName.toLowerCase()===b.toLowerCase()},each:function(a,b,c){var d,e=0,f=a.length,g=s(a);if(c){if(g){for(;f>e;e++)if(d=b.apply(a[e],c),d===!1)break}else for(e in a)if(d=b.apply(a[e],c),d===!1)break}else if(g){for(;f>e;e++)if(d=b.call(a[e],e,a[e]),d===!1)break}else for(e in a)if(d=b.call(a[e],e,a[e]),d===!1)break;return a},trim:function(a){return null==a?"":(a+"").replace(o,"")},makeArray:function(a,b){var c=b||[];return null!=a&&(s(Object(a))?n.merge(c,"string"==typeof a?[a]:a):f.call(c,a)),c},inArray:function(a,b,c){return null==b?-1:g.call(b,a,c)},merge:function(a,b){for(var c=+b.length,d=0,e=a.length;c>d;d++)a[e++]=b[d];return a.length=e,a},grep:function(a,b,c){for(var d,e=[],f=0,g=a.length,h=!c;g>f;f++)d=!b(a[f],f),d!==h&&e.push(a[f]);return e},map:function(a,b,c){var d,f=0,g=a.length,h=s(a),i=[];if(h)for(;g>f;f++)d=b(a[f],f,c),null!=d&&i.push(d);else for(f in a)d=b(a[f],f,c),null!=d&&i.push(d);return e.apply([],i)},guid:1,proxy:function(a,b){var c,e,f;return"string"==typeof b&&(c=a[b],b=a,a=c),n.isFunction(a)?(e=d.call(arguments,2),f=function(){return a.apply(b||this,e.concat(d.call(arguments)))},f.guid=a.guid=a.guid||n.guid++,f):void 0},now:Date.now,support:k}),n.each("Boolean Number String Function Array Date RegExp Object Error".split(" "),function(a,b){h["[object "+b+"]"]=b.toLowerCase()});function s(a){var b="length"in a&&a.length,c=n.type(a);return"function"===c||n.isWindow(a)?!1:1===a.nodeType&&b?!0:"array"===c||0===b||"number"==typeof b&&b>0&&b-1 in a}var t=function(a){var b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u="sizzle"+1*new Date,v=a.document,w=0,x=0,y=ha(),z=ha(),A=ha(),B=function(a,b){return a===b&&(l=!0),0},C=1<<31,D={}.hasOwnProperty,E=[],F=E.pop,G=E.push,H=E.push,I=E.slice,J=function(a,b){for(var c=0,d=a.length;d>c;c++)if(a[c]===b)return c;return-1},K="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",L="[\\x20\\t\\r\\n\\f]",M="(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",N=M.replace("w","w#"),O="\\["+L+"*("+M+")(?:"+L+"*([*^$|!~]?=)"+L+"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|("+N+"))|)"+L+"*\\]",P=":("+M+")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|"+O+")*)|.*)\\)|)",Q=new RegExp(L+"+","g"),R=new RegExp("^"+L+"+|((?:^|[^\\\\])(?:\\\\.)*)"+L+"+$","g"),S=new RegExp("^"+L+"*,"+L+"*"),T=new RegExp("^"+L+"*([>+~]|"+L+")"+L+"*"),U=new RegExp("="+L+"*([^\\]'\"]*?)"+L+"*\\]","g"),V=new RegExp(P),W=new RegExp("^"+N+"$"),X={ID:new RegExp("^#("+M+")"),CLASS:new RegExp("^\\.("+M+")"),TAG:new RegExp("^("+M.replace("w","w*")+")"),ATTR:new RegExp("^"+O),PSEUDO:new RegExp("^"+P),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+L+"*(even|odd|(([+-]|)(\\d*)n|)"+L+"*(?:([+-]|)"+L+"*(\\d+)|))"+L+"*\\)|)","i"),bool:new RegExp("^(?:"+K+")$","i"),needsContext:new RegExp("^"+L+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+L+"*((?:-\\d)?\\d*)"+L+"*\\)|)(?=[^-]|$)","i")},Y=/^(?:input|select|textarea|button)$/i,Z=/^h\d$/i,$=/^[^{]+\{\s*\[native \w/,_=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,aa=/[+~]/,ba=/'|\\/g,ca=new RegExp("\\\\([\\da-f]{1,6}"+L+"?|("+L+")|.)","ig"),da=function(a,b,c){var d="0x"+b-65536;return d!==d||c?b:0>d?String.fromCharCode(d+65536):String.fromCharCode(d>>10|55296,1023&d|56320)},ea=function(){m()};try{H.apply(E=I.call(v.childNodes),v.childNodes),E[v.childNodes.length].nodeType}catch(fa){H={apply:E.length?function(a,b){G.apply(a,I.call(b))}:function(a,b){var c=a.length,d=0;while(a[c++]=b[d++]);a.length=c-1}}}function ga(a,b,d,e){var f,h,j,k,l,o,r,s,w,x;if((b?b.ownerDocument||b:v)!==n&&m(b),b=b||n,d=d||[],k=b.nodeType,"string"!=typeof a||!a||1!==k&&9!==k&&11!==k)return d;if(!e&&p){if(11!==k&&(f=_.exec(a)))if(j=f[1]){if(9===k){if(h=b.getElementById(j),!h||!h.parentNode)return d;if(h.id===j)return d.push(h),d}else if(b.ownerDocument&&(h=b.ownerDocument.getElementById(j))&&t(b,h)&&h.id===j)return d.push(h),d}else{if(f[2])return H.apply(d,b.getElementsByTagName(a)),d;if((j=f[3])&&c.getElementsByClassName)return H.apply(d,b.getElementsByClassName(j)),d}if(c.qsa&&(!q||!q.test(a))){if(s=r=u,w=b,x=1!==k&&a,1===k&&"object"!==b.nodeName.toLowerCase()){o=g(a),(r=b.getAttribute("id"))?s=r.replace(ba,"\\$&"):b.setAttribute("id",s),s="[id='"+s+"'] ",l=o.length;while(l--)o[l]=s+ra(o[l]);w=aa.test(a)&&pa(b.parentNode)||b,x=o.join(",")}if(x)try{return H.apply(d,w.querySelectorAll(x)),d}catch(y){}finally{r||b.removeAttribute("id")}}}return i(a.replace(R,"$1"),b,d,e)}function ha(){var a=[];function b(c,e){return a.push(c+" ")>d.cacheLength&&delete b[a.shift()],b[c+" "]=e}return b}function ia(a){return a[u]=!0,a}function ja(a){var b=n.createElement("div");try{return!!a(b)}catch(c){return!1}finally{b.parentNode&&b.parentNode.removeChild(b),b=null}}function ka(a,b){var c=a.split("|"),e=a.length;while(e--)d.attrHandle[c[e]]=b}function la(a,b){var c=b&&a,d=c&&1===a.nodeType&&1===b.nodeType&&(~b.sourceIndex||C)-(~a.sourceIndex||C);if(d)return d;if(c)while(c=c.nextSibling)if(c===b)return-1;return a?1:-1}function ma(a){return function(b){var c=b.nodeName.toLowerCase();return"input"===c&&b.type===a}}function na(a){return function(b){var c=b.nodeName.toLowerCase();return("input"===c||"button"===c)&&b.type===a}}function oa(a){return ia(function(b){return b=+b,ia(function(c,d){var e,f=a([],c.length,b),g=f.length;while(g--)c[e=f[g]]&&(c[e]=!(d[e]=c[e]))})})}function pa(a){return a&&"undefined"!=typeof a.getElementsByTagName&&a}c=ga.support={},f=ga.isXML=function(a){var b=a&&(a.ownerDocument||a).documentElement;return b?"HTML"!==b.nodeName:!1},m=ga.setDocument=function(a){var b,e,g=a?a.ownerDocument||a:v;return g!==n&&9===g.nodeType&&g.documentElement?(n=g,o=g.documentElement,e=g.defaultView,e&&e!==e.top&&(e.addEventListener?e.addEventListener("unload",ea,!1):e.attachEvent&&e.attachEvent("onunload",ea)),p=!f(g),c.attributes=ja(function(a){return a.className="i",!a.getAttribute("className")}),c.getElementsByTagName=ja(function(a){return a.appendChild(g.createComment("")),!a.getElementsByTagName("*").length}),c.getElementsByClassName=$.test(g.getElementsByClassName),c.getById=ja(function(a){return o.appendChild(a).id=u,!g.getElementsByName||!g.getElementsByName(u).length}),c.getById?(d.find.ID=function(a,b){if("undefined"!=typeof b.getElementById&&p){var c=b.getElementById(a);return c&&c.parentNode?[c]:[]}},d.filter.ID=function(a){var b=a.replace(ca,da);return function(a){return a.getAttribute("id")===b}}):(delete d.find.ID,d.filter.ID=function(a){var b=a.replace(ca,da);return function(a){var c="undefined"!=typeof a.getAttributeNode&&a.getAttributeNode("id");return c&&c.value===b}}),d.find.TAG=c.getElementsByTagName?function(a,b){return"undefined"!=typeof b.getElementsByTagName?b.getElementsByTagName(a):c.qsa?b.querySelectorAll(a):void 0}:function(a,b){var c,d=[],e=0,f=b.getElementsByTagName(a);if("*"===a){while(c=f[e++])1===c.nodeType&&d.push(c);return d}return f},d.find.CLASS=c.getElementsByClassName&&function(a,b){return p?b.getElementsByClassName(a):void 0},r=[],q=[],(c.qsa=$.test(g.querySelectorAll))&&(ja(function(a){o.appendChild(a).innerHTML="<a id='"+u+"'></a><select id='"+u+"-\f]' msallowcapture=''><option selected=''></option></select>",a.querySelectorAll("[msallowcapture^='']").length&&q.push("[*^$]="+L+"*(?:''|\"\")"),a.querySelectorAll("[selected]").length||q.push("\\["+L+"*(?:value|"+K+")"),a.querySelectorAll("[id~="+u+"-]").length||q.push("~="),a.querySelectorAll(":checked").length||q.push(":checked"),a.querySelectorAll("a#"+u+"+*").length||q.push(".#.+[+~]")}),ja(function(a){var b=g.createElement("input");b.setAttribute("type","hidden"),a.appendChild(b).setAttribute("name","D"),a.querySelectorAll("[name=d]").length&&q.push("name"+L+"*[*^$|!~]?="),a.querySelectorAll(":enabled").length||q.push(":enabled",":disabled"),a.querySelectorAll("*,:x"),q.push(",.*:")})),(c.matchesSelector=$.test(s=o.matches||o.webkitMatchesSelector||o.mozMatchesSelector||o.oMatchesSelector||o.msMatchesSelector))&&ja(function(a){c.disconnectedMatch=s.call(a,"div"),s.call(a,"[s!='']:x"),r.push("!=",P)}),q=q.length&&new RegExp(q.join("|")),r=r.length&&new RegExp(r.join("|")),b=$.test(o.compareDocumentPosition),t=b||$.test(o.contains)?function(a,b){var c=9===a.nodeType?a.documentElement:a,d=b&&b.parentNode;return a===d||!(!d||1!==d.nodeType||!(c.contains?c.contains(d):a.compareDocumentPosition&&16&a.compareDocumentPosition(d)))}:function(a,b){if(b)while(b=b.parentNode)if(b===a)return!0;return!1},B=b?function(a,b){if(a===b)return l=!0,0;var d=!a.compareDocumentPosition-!b.compareDocumentPosition;return d?d:(d=(a.ownerDocument||a)===(b.ownerDocument||b)?a.compareDocumentPosition(b):1,1&d||!c.sortDetached&&b.compareDocumentPosition(a)===d?a===g||a.ownerDocument===v&&t(v,a)?-1:b===g||b.ownerDocument===v&&t(v,b)?1:k?J(k,a)-J(k,b):0:4&d?-1:1)}:function(a,b){if(a===b)return l=!0,0;var c,d=0,e=a.parentNode,f=b.parentNode,h=[a],i=[b];if(!e||!f)return a===g?-1:b===g?1:e?-1:f?1:k?J(k,a)-J(k,b):0;if(e===f)return la(a,b);c=a;while(c=c.parentNode)h.unshift(c);c=b;while(c=c.parentNode)i.unshift(c);while(h[d]===i[d])d++;return d?la(h[d],i[d]):h[d]===v?-1:i[d]===v?1:0},g):n},ga.matches=function(a,b){return ga(a,null,null,b)},ga.matchesSelector=function(a,b){if((a.ownerDocument||a)!==n&&m(a),b=b.replace(U,"='$1']"),!(!c.matchesSelector||!p||r&&r.test(b)||q&&q.test(b)))try{var d=s.call(a,b);if(d||c.disconnectedMatch||a.document&&11!==a.document.nodeType)return d}catch(e){}return ga(b,n,null,[a]).length>0},ga.contains=function(a,b){return(a.ownerDocument||a)!==n&&m(a),t(a,b)},ga.attr=function(a,b){(a.ownerDocument||a)!==n&&m(a);var e=d.attrHandle[b.toLowerCase()],f=e&&D.call(d.attrHandle,b.toLowerCase())?e(a,b,!p):void 0;return void 0!==f?f:c.attributes||!p?a.getAttribute(b):(f=a.getAttributeNode(b))&&f.specified?f.value:null},ga.error=function(a){throw new Error("Syntax error, unrecognized expression: "+a)},ga.uniqueSort=function(a){var b,d=[],e=0,f=0;if(l=!c.detectDuplicates,k=!c.sortStable&&a.slice(0),a.sort(B),l){while(b=a[f++])b===a[f]&&(e=d.push(f));while(e--)a.splice(d[e],1)}return k=null,a},e=ga.getText=function(a){var b,c="",d=0,f=a.nodeType;if(f){if(1===f||9===f||11===f){if("string"==typeof a.textContent)return a.textContent;for(a=a.firstChild;a;a=a.nextSibling)c+=e(a)}else if(3===f||4===f)return a.nodeValue}else while(b=a[d++])c+=e(b);return c},d=ga.selectors={cacheLength:50,createPseudo:ia,match:X,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(a){return a[1]=a[1].replace(ca,da),a[3]=(a[3]||a[4]||a[5]||"").replace(ca,da),"~="===a[2]&&(a[3]=" "+a[3]+" "),a.slice(0,4)},CHILD:function(a){return a[1]=a[1].toLowerCase(),"nth"===a[1].slice(0,3)?(a[3]||ga.error(a[0]),a[4]=+(a[4]?a[5]+(a[6]||1):2*("even"===a[3]||"odd"===a[3])),a[5]=+(a[7]+a[8]||"odd"===a[3])):a[3]&&ga.error(a[0]),a},PSEUDO:function(a){var b,c=!a[6]&&a[2];return X.CHILD.test(a[0])?null:(a[3]?a[2]=a[4]||a[5]||"":c&&V.test(c)&&(b=g(c,!0))&&(b=c.indexOf(")",c.length-b)-c.length)&&(a[0]=a[0].slice(0,b),a[2]=c.slice(0,b)),a.slice(0,3))}},filter:{TAG:function(a){var b=a.replace(ca,da).toLowerCase();return"*"===a?function(){return!0}:function(a){return a.nodeName&&a.nodeName.toLowerCase()===b}},CLASS:function(a){var b=y[a+" "];return b||(b=new RegExp("(^|"+L+")"+a+"("+L+"|$)"))&&y(a,function(a){return b.test("string"==typeof a.className&&a.className||"undefined"!=typeof a.getAttribute&&a.getAttribute("class")||"")})},ATTR:function(a,b,c){return function(d){var e=ga.attr(d,a);return null==e?"!="===b:b?(e+="","="===b?e===c:"!="===b?e!==c:"^="===b?c&&0===e.indexOf(c):"*="===b?c&&e.indexOf(c)>-1:"$="===b?c&&e.slice(-c.length)===c:"~="===b?(" "+e.replace(Q," ")+" ").indexOf(c)>-1:"|="===b?e===c||e.slice(0,c.length+1)===c+"-":!1):!0}},CHILD:function(a,b,c,d,e){var f="nth"!==a.slice(0,3),g="last"!==a.slice(-4),h="of-type"===b;return 1===d&&0===e?function(a){return!!a.parentNode}:function(b,c,i){var j,k,l,m,n,o,p=f!==g?"nextSibling":"previousSibling",q=b.parentNode,r=h&&b.nodeName.toLowerCase(),s=!i&&!h;if(q){if(f){while(p){l=b;while(l=l[p])if(h?l.nodeName.toLowerCase()===r:1===l.nodeType)return!1;o=p="only"===a&&!o&&"nextSibling"}return!0}if(o=[g?q.firstChild:q.lastChild],g&&s){k=q[u]||(q[u]={}),j=k[a]||[],n=j[0]===w&&j[1],m=j[0]===w&&j[2],l=n&&q.childNodes[n];while(l=++n&&l&&l[p]||(m=n=0)||o.pop())if(1===l.nodeType&&++m&&l===b){k[a]=[w,n,m];break}}else if(s&&(j=(b[u]||(b[u]={}))[a])&&j[0]===w)m=j[1];else while(l=++n&&l&&l[p]||(m=n=0)||o.pop())if((h?l.nodeName.toLowerCase()===r:1===l.nodeType)&&++m&&(s&&((l[u]||(l[u]={}))[a]=[w,m]),l===b))break;return m-=e,m===d||m%d===0&&m/d>=0}}},PSEUDO:function(a,b){var c,e=d.pseudos[a]||d.setFilters[a.toLowerCase()]||ga.error("unsupported pseudo: "+a);return e[u]?e(b):e.length>1?(c=[a,a,"",b],d.setFilters.hasOwnProperty(a.toLowerCase())?ia(function(a,c){var d,f=e(a,b),g=f.length;while(g--)d=J(a,f[g]),a[d]=!(c[d]=f[g])}):function(a){return e(a,0,c)}):e}},pseudos:{not:ia(function(a){var b=[],c=[],d=h(a.replace(R,"$1"));return d[u]?ia(function(a,b,c,e){var f,g=d(a,null,e,[]),h=a.length;while(h--)(f=g[h])&&(a[h]=!(b[h]=f))}):function(a,e,f){return b[0]=a,d(b,null,f,c),b[0]=null,!c.pop()}}),has:ia(function(a){return function(b){return ga(a,b).length>0}}),contains:ia(function(a){return a=a.replace(ca,da),function(b){return(b.textContent||b.innerText||e(b)).indexOf(a)>-1}}),lang:ia(function(a){return W.test(a||"")||ga.error("unsupported lang: "+a),a=a.replace(ca,da).toLowerCase(),function(b){var c;do if(c=p?b.lang:b.getAttribute("xml:lang")||b.getAttribute("lang"))return c=c.toLowerCase(),c===a||0===c.indexOf(a+"-");while((b=b.parentNode)&&1===b.nodeType);return!1}}),target:function(b){var c=a.location&&a.location.hash;return c&&c.slice(1)===b.id},root:function(a){return a===o},focus:function(a){return a===n.activeElement&&(!n.hasFocus||n.hasFocus())&&!!(a.type||a.href||~a.tabIndex)},enabled:function(a){return a.disabled===!1},disabled:function(a){return a.disabled===!0},checked:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&!!a.checked||"option"===b&&!!a.selected},selected:function(a){return a.parentNode&&a.parentNode.selectedIndex,a.selected===!0},empty:function(a){for(a=a.firstChild;a;a=a.nextSibling)if(a.nodeType<6)return!1;return!0},parent:function(a){return!d.pseudos.empty(a)},header:function(a){return Z.test(a.nodeName)},input:function(a){return Y.test(a.nodeName)},button:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&"button"===a.type||"button"===b},text:function(a){var b;return"input"===a.nodeName.toLowerCase()&&"text"===a.type&&(null==(b=a.getAttribute("type"))||"text"===b.toLowerCase())},first:oa(function(){return[0]}),last:oa(function(a,b){return[b-1]}),eq:oa(function(a,b,c){return[0>c?c+b:c]}),even:oa(function(a,b){for(var c=0;b>c;c+=2)a.push(c);return a}),odd:oa(function(a,b){for(var c=1;b>c;c+=2)a.push(c);return a}),lt:oa(function(a,b,c){for(var d=0>c?c+b:c;--d>=0;)a.push(d);return a}),gt:oa(function(a,b,c){for(var d=0>c?c+b:c;++d<b;)a.push(d);return a})}},d.pseudos.nth=d.pseudos.eq;for(b in{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})d.pseudos[b]=ma(b);for(b in{submit:!0,reset:!0})d.pseudos[b]=na(b);function qa(){}qa.prototype=d.filters=d.pseudos,d.setFilters=new qa,g=ga.tokenize=function(a,b){var c,e,f,g,h,i,j,k=z[a+" "];if(k)return b?0:k.slice(0);h=a,i=[],j=d.preFilter;while(h){(!c||(e=S.exec(h)))&&(e&&(h=h.slice(e[0].length)||h),i.push(f=[])),c=!1,(e=T.exec(h))&&(c=e.shift(),f.push({value:c,type:e[0].replace(R," ")}),h=h.slice(c.length));for(g in d.filter)!(e=X[g].exec(h))||j[g]&&!(e=j[g](e))||(c=e.shift(),f.push({value:c,type:g,matches:e}),h=h.slice(c.length));if(!c)break}return b?h.length:h?ga.error(a):z(a,i).slice(0)};function ra(a){for(var b=0,c=a.length,d="";c>b;b++)d+=a[b].value;return d}function sa(a,b,c){var d=b.dir,e=c&&"parentNode"===d,f=x++;return b.first?function(b,c,f){while(b=b[d])if(1===b.nodeType||e)return a(b,c,f)}:function(b,c,g){var h,i,j=[w,f];if(g){while(b=b[d])if((1===b.nodeType||e)&&a(b,c,g))return!0}else while(b=b[d])if(1===b.nodeType||e){if(i=b[u]||(b[u]={}),(h=i[d])&&h[0]===w&&h[1]===f)return j[2]=h[2];if(i[d]=j,j[2]=a(b,c,g))return!0}}}function ta(a){return a.length>1?function(b,c,d){var e=a.length;while(e--)if(!a[e](b,c,d))return!1;return!0}:a[0]}function ua(a,b,c){for(var d=0,e=b.length;e>d;d++)ga(a,b[d],c);return c}function va(a,b,c,d,e){for(var f,g=[],h=0,i=a.length,j=null!=b;i>h;h++)(f=a[h])&&(!c||c(f,d,e))&&(g.push(f),j&&b.push(h));return g}function wa(a,b,c,d,e,f){return d&&!d[u]&&(d=wa(d)),e&&!e[u]&&(e=wa(e,f)),ia(function(f,g,h,i){var j,k,l,m=[],n=[],o=g.length,p=f||ua(b||"*",h.nodeType?[h]:h,[]),q=!a||!f&&b?p:va(p,m,a,h,i),r=c?e||(f?a:o||d)?[]:g:q;if(c&&c(q,r,h,i),d){j=va(r,n),d(j,[],h,i),k=j.length;while(k--)(l=j[k])&&(r[n[k]]=!(q[n[k]]=l))}if(f){if(e||a){if(e){j=[],k=r.length;while(k--)(l=r[k])&&j.push(q[k]=l);e(null,r=[],j,i)}k=r.length;while(k--)(l=r[k])&&(j=e?J(f,l):m[k])>-1&&(f[j]=!(g[j]=l))}}else r=va(r===g?r.splice(o,r.length):r),e?e(null,g,r,i):H.apply(g,r)})}function xa(a){for(var b,c,e,f=a.length,g=d.relative[a[0].type],h=g||d.relative[" "],i=g?1:0,k=sa(function(a){return a===b},h,!0),l=sa(function(a){return J(b,a)>-1},h,!0),m=[function(a,c,d){var e=!g&&(d||c!==j)||((b=c).nodeType?k(a,c,d):l(a,c,d));return b=null,e}];f>i;i++)if(c=d.relative[a[i].type])m=[sa(ta(m),c)];else{if(c=d.filter[a[i].type].apply(null,a[i].matches),c[u]){for(e=++i;f>e;e++)if(d.relative[a[e].type])break;return wa(i>1&&ta(m),i>1&&ra(a.slice(0,i-1).concat({value:" "===a[i-2].type?"*":""})).replace(R,"$1"),c,e>i&&xa(a.slice(i,e)),f>e&&xa(a=a.slice(e)),f>e&&ra(a))}m.push(c)}return ta(m)}function ya(a,b){var c=b.length>0,e=a.length>0,f=function(f,g,h,i,k){var l,m,o,p=0,q="0",r=f&&[],s=[],t=j,u=f||e&&d.find.TAG("*",k),v=w+=null==t?1:Math.random()||.1,x=u.length;for(k&&(j=g!==n&&g);q!==x&&null!=(l=u[q]);q++){if(e&&l){m=0;while(o=a[m++])if(o(l,g,h)){i.push(l);break}k&&(w=v)}c&&((l=!o&&l)&&p--,f&&r.push(l))}if(p+=q,c&&q!==p){m=0;while(o=b[m++])o(r,s,g,h);if(f){if(p>0)while(q--)r[q]||s[q]||(s[q]=F.call(i));s=va(s)}H.apply(i,s),k&&!f&&s.length>0&&p+b.length>1&&ga.uniqueSort(i)}return k&&(w=v,j=t),r};return c?ia(f):f}return h=ga.compile=function(a,b){var c,d=[],e=[],f=A[a+" "];if(!f){b||(b=g(a)),c=b.length;while(c--)f=xa(b[c]),f[u]?d.push(f):e.push(f);f=A(a,ya(e,d)),f.selector=a}return f},i=ga.select=function(a,b,e,f){var i,j,k,l,m,n="function"==typeof a&&a,o=!f&&g(a=n.selector||a);if(e=e||[],1===o.length){if(j=o[0]=o[0].slice(0),j.length>2&&"ID"===(k=j[0]).type&&c.getById&&9===b.nodeType&&p&&d.relative[j[1].type]){if(b=(d.find.ID(k.matches[0].replace(ca,da),b)||[])[0],!b)return e;n&&(b=b.parentNode),a=a.slice(j.shift().value.length)}i=X.needsContext.test(a)?0:j.length;while(i--){if(k=j[i],d.relative[l=k.type])break;if((m=d.find[l])&&(f=m(k.matches[0].replace(ca,da),aa.test(j[0].type)&&pa(b.parentNode)||b))){if(j.splice(i,1),a=f.length&&ra(j),!a)return H.apply(e,f),e;break}}}return(n||h(a,o))(f,b,!p,e,aa.test(a)&&pa(b.parentNode)||b),e},c.sortStable=u.split("").sort(B).join("")===u,c.detectDuplicates=!!l,m(),c.sortDetached=ja(function(a){return 1&a.compareDocumentPosition(n.createElement("div"))}),ja(function(a){return a.innerHTML="<a href='#'></a>","#"===a.firstChild.getAttribute("href")})||ka("type|href|height|width",function(a,b,c){return c?void 0:a.getAttribute(b,"type"===b.toLowerCase()?1:2)}),c.attributes&&ja(function(a){return a.innerHTML="<input/>",a.firstChild.setAttribute("value",""),""===a.firstChild.getAttribute("value")})||ka("value",function(a,b,c){return c||"input"!==a.nodeName.toLowerCase()?void 0:a.defaultValue}),ja(function(a){return null==a.getAttribute("disabled")})||ka(K,function(a,b,c){var d;return c?void 0:a[b]===!0?b.toLowerCase():(d=a.getAttributeNode(b))&&d.specified?d.value:null}),ga}(a);n.find=t,n.expr=t.selectors,n.expr[":"]=n.expr.pseudos,n.unique=t.uniqueSort,n.text=t.getText,n.isXMLDoc=t.isXML,n.contains=t.contains;var u=n.expr.match.needsContext,v=/^<(\w+)\s*\/?>(?:<\/\1>|)$/,w=/^.[^:#\[\.,]*$/;function x(a,b,c){if(n.isFunction(b))return n.grep(a,function(a,d){return!!b.call(a,d,a)!==c});if(b.nodeType)return n.grep(a,function(a){return a===b!==c});if("string"==typeof b){if(w.test(b))return n.filter(b,a,c);b=n.filter(b,a)}return n.grep(a,function(a){return g.call(b,a)>=0!==c})}n.filter=function(a,b,c){var d=b[0];return c&&(a=":not("+a+")"),1===b.length&&1===d.nodeType?n.find.matchesSelector(d,a)?[d]:[]:n.find.matches(a,n.grep(b,function(a){return 1===a.nodeType}))},n.fn.extend({find:function(a){var b,c=this.length,d=[],e=this;if("string"!=typeof a)return this.pushStack(n(a).filter(function(){for(b=0;c>b;b++)if(n.contains(e[b],this))return!0}));for(b=0;c>b;b++)n.find(a,e[b],d);return d=this.pushStack(c>1?n.unique(d):d),d.selector=this.selector?this.selector+" "+a:a,d},filter:function(a){return this.pushStack(x(this,a||[],!1))},not:function(a){return this.pushStack(x(this,a||[],!0))},is:function(a){return!!x(this,"string"==typeof a&&u.test(a)?n(a):a||[],!1).length}});var y,z=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,A=n.fn.init=function(a,b){var c,d;if(!a)return this;if("string"==typeof a){if(c="<"===a[0]&&">"===a[a.length-1]&&a.length>=3?[null,a,null]:z.exec(a),!c||!c[1]&&b)return!b||b.jquery?(b||y).find(a):this.constructor(b).find(a);if(c[1]){if(b=b instanceof n?b[0]:b,n.merge(this,n.parseHTML(c[1],b&&b.nodeType?b.ownerDocument||b:l,!0)),v.test(c[1])&&n.isPlainObject(b))for(c in b)n.isFunction(this[c])?this[c](b[c]):this.attr(c,b[c]);return this}return d=l.getElementById(c[2]),d&&d.parentNode&&(this.length=1,this[0]=d),this.context=l,this.selector=a,this}return a.nodeType?(this.context=this[0]=a,this.length=1,this):n.isFunction(a)?"undefined"!=typeof y.ready?y.ready(a):a(n):(void 0!==a.selector&&(this.selector=a.selector,this.context=a.context),n.makeArray(a,this))};A.prototype=n.fn,y=n(l);var B=/^(?:parents|prev(?:Until|All))/,C={children:!0,contents:!0,next:!0,prev:!0};n.extend({dir:function(a,b,c){var d=[],e=void 0!==c;while((a=a[b])&&9!==a.nodeType)if(1===a.nodeType){if(e&&n(a).is(c))break;d.push(a)}return d},sibling:function(a,b){for(var c=[];a;a=a.nextSibling)1===a.nodeType&&a!==b&&c.push(a);return c}}),n.fn.extend({has:function(a){var b=n(a,this),c=b.length;return this.filter(function(){for(var a=0;c>a;a++)if(n.contains(this,b[a]))return!0})},closest:function(a,b){for(var c,d=0,e=this.length,f=[],g=u.test(a)||"string"!=typeof a?n(a,b||this.context):0;e>d;d++)for(c=this[d];c&&c!==b;c=c.parentNode)if(c.nodeType<11&&(g?g.index(c)>-1:1===c.nodeType&&n.find.matchesSelector(c,a))){f.push(c);break}return this.pushStack(f.length>1?n.unique(f):f)},index:function(a){return a?"string"==typeof a?g.call(n(a),this[0]):g.call(this,a.jquery?a[0]:a):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(a,b){return this.pushStack(n.unique(n.merge(this.get(),n(a,b))))},addBack:function(a){return this.add(null==a?this.prevObject:this.prevObject.filter(a))}});function D(a,b){while((a=a[b])&&1!==a.nodeType);return a}n.each({parent:function(a){var b=a.parentNode;return b&&11!==b.nodeType?b:null},parents:function(a){return n.dir(a,"parentNode")},parentsUntil:function(a,b,c){return n.dir(a,"parentNode",c)},next:function(a){return D(a,"nextSibling")},prev:function(a){return D(a,"previousSibling")},nextAll:function(a){return n.dir(a,"nextSibling")},prevAll:function(a){return n.dir(a,"previousSibling")},nextUntil:function(a,b,c){return n.dir(a,"nextSibling",c)},prevUntil:function(a,b,c){return n.dir(a,"previousSibling",c)},siblings:function(a){return n.sibling((a.parentNode||{}).firstChild,a)},children:function(a){return n.sibling(a.firstChild)},contents:function(a){return a.contentDocument||n.merge([],a.childNodes)}},function(a,b){n.fn[a]=function(c,d){var e=n.map(this,b,c);return"Until"!==a.slice(-5)&&(d=c),d&&"string"==typeof d&&(e=n.filter(d,e)),this.length>1&&(C[a]||n.unique(e),B.test(a)&&e.reverse()),this.pushStack(e)}});var E=/\S+/g,F={};function G(a){var b=F[a]={};return n.each(a.match(E)||[],function(a,c){b[c]=!0}),b}n.Callbacks=function(a){a="string"==typeof a?F[a]||G(a):n.extend({},a);var b,c,d,e,f,g,h=[],i=!a.once&&[],j=function(l){for(b=a.memory&&l,c=!0,g=e||0,e=0,f=h.length,d=!0;h&&f>g;g++)if(h[g].apply(l[0],l[1])===!1&&a.stopOnFalse){b=!1;break}d=!1,h&&(i?i.length&&j(i.shift()):b?h=[]:k.disable())},k={add:function(){if(h){var c=h.length;!function g(b){n.each(b,function(b,c){var d=n.type(c);"function"===d?a.unique&&k.has(c)||h.push(c):c&&c.length&&"string"!==d&&g(c)})}(arguments),d?f=h.length:b&&(e=c,j(b))}return this},remove:function(){return h&&n.each(arguments,function(a,b){var c;while((c=n.inArray(b,h,c))>-1)h.splice(c,1),d&&(f>=c&&f--,g>=c&&g--)}),this},has:function(a){return a?n.inArray(a,h)>-1:!(!h||!h.length)},empty:function(){return h=[],f=0,this},disable:function(){return h=i=b=void 0,this},disabled:function(){return!h},lock:function(){return i=void 0,b||k.disable(),this},locked:function(){return!i},fireWith:function(a,b){return!h||c&&!i||(b=b||[],b=[a,b.slice?b.slice():b],d?i.push(b):j(b)),this},fire:function(){return k.fireWith(this,arguments),this},fired:function(){return!!c}};return k},n.extend({Deferred:function(a){var b=[["resolve","done",n.Callbacks("once memory"),"resolved"],["reject","fail",n.Callbacks("once memory"),"rejected"],["notify","progress",n.Callbacks("memory")]],c="pending",d={state:function(){return c},always:function(){return e.done(arguments).fail(arguments),this},then:function(){var a=arguments;return n.Deferred(function(c){n.each(b,function(b,f){var g=n.isFunction(a[b])&&a[b];e[f[1]](function(){var a=g&&g.apply(this,arguments);a&&n.isFunction(a.promise)?a.promise().done(c.resolve).fail(c.reject).progress(c.notify):c[f[0]+"With"](this===d?c.promise():this,g?[a]:arguments)})}),a=null}).promise()},promise:function(a){return null!=a?n.extend(a,d):d}},e={};return d.pipe=d.then,n.each(b,function(a,f){var g=f[2],h=f[3];d[f[1]]=g.add,h&&g.add(function(){c=h},b[1^a][2].disable,b[2][2].lock),e[f[0]]=function(){return e[f[0]+"With"](this===e?d:this,arguments),this},e[f[0]+"With"]=g.fireWith}),d.promise(e),a&&a.call(e,e),e},when:function(a){var b=0,c=d.call(arguments),e=c.length,f=1!==e||a&&n.isFunction(a.promise)?e:0,g=1===f?a:n.Deferred(),h=function(a,b,c){return function(e){b[a]=this,c[a]=arguments.length>1?d.call(arguments):e,c===i?g.notifyWith(b,c):--f||g.resolveWith(b,c)}},i,j,k;if(e>1)for(i=new Array(e),j=new Array(e),k=new Array(e);e>b;b++)c[b]&&n.isFunction(c[b].promise)?c[b].promise().done(h(b,k,c)).fail(g.reject).progress(h(b,j,i)):--f;return f||g.resolveWith(k,c),g.promise()}});var H;n.fn.ready=function(a){return n.ready.promise().done(a),this},n.extend({isReady:!1,readyWait:1,holdReady:function(a){a?n.readyWait++:n.ready(!0)},ready:function(a){(a===!0?--n.readyWait:n.isReady)||(n.isReady=!0,a!==!0&&--n.readyWait>0||(H.resolveWith(l,[n]),n.fn.triggerHandler&&(n(l).triggerHandler("ready"),n(l).off("ready"))))}});function I(){l.removeEventListener("DOMContentLoaded",I,!1),a.removeEventListener("load",I,!1),n.ready()}n.ready.promise=function(b){return H||(H=n.Deferred(),"complete"===l.readyState?setTimeout(n.ready):(l.addEventListener("DOMContentLoaded",I,!1),a.addEventListener("load",I,!1))),H.promise(b)},n.ready.promise();var J=n.access=function(a,b,c,d,e,f,g){var h=0,i=a.length,j=null==c;if("object"===n.type(c)){e=!0;for(h in c)n.access(a,b,h,c[h],!0,f,g)}else if(void 0!==d&&(e=!0,n.isFunction(d)||(g=!0),j&&(g?(b.call(a,d),b=null):(j=b,b=function(a,b,c){return j.call(n(a),c)})),b))for(;i>h;h++)b(a[h],c,g?d:d.call(a[h],h,b(a[h],c)));return e?a:j?b.call(a):i?b(a[0],c):f};n.acceptData=function(a){return 1===a.nodeType||9===a.nodeType||!+a.nodeType};function K(){Object.defineProperty(this.cache={},0,{get:function(){return{}}}),this.expando=n.expando+K.uid++}K.uid=1,K.accepts=n.acceptData,K.prototype={key:function(a){if(!K.accepts(a))return 0;var b={},c=a[this.expando];if(!c){c=K.uid++;try{b[this.expando]={value:c},Object.defineProperties(a,b)}catch(d){b[this.expando]=c,n.extend(a,b)}}return this.cache[c]||(this.cache[c]={}),c},set:function(a,b,c){var d,e=this.key(a),f=this.cache[e];if("string"==typeof b)f[b]=c;else if(n.isEmptyObject(f))n.extend(this.cache[e],b);else for(d in b)f[d]=b[d];return f},get:function(a,b){var c=this.cache[this.key(a)];return void 0===b?c:c[b]},access:function(a,b,c){var d;return void 0===b||b&&"string"==typeof b&&void 0===c?(d=this.get(a,b),void 0!==d?d:this.get(a,n.camelCase(b))):(this.set(a,b,c),void 0!==c?c:b)},remove:function(a,b){var c,d,e,f=this.key(a),g=this.cache[f];if(void 0===b)this.cache[f]={};else{n.isArray(b)?d=b.concat(b.map(n.camelCase)):(e=n.camelCase(b),b in g?d=[b,e]:(d=e,d=d in g?[d]:d.match(E)||[])),c=d.length;while(c--)delete g[d[c]]}},hasData:function(a){return!n.isEmptyObject(this.cache[a[this.expando]]||{})},discard:function(a){a[this.expando]&&delete this.cache[a[this.expando]]}};var L=new K,M=new K,N=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,O=/([A-Z])/g;function P(a,b,c){var d;if(void 0===c&&1===a.nodeType)if(d="data-"+b.replace(O,"-$1").toLowerCase(),c=a.getAttribute(d),"string"==typeof c){try{c="true"===c?!0:"false"===c?!1:"null"===c?null:+c+""===c?+c:N.test(c)?n.parseJSON(c):c}catch(e){}M.set(a,b,c)}else c=void 0;return c}n.extend({hasData:function(a){return M.hasData(a)||L.hasData(a)},data:function(a,b,c){
return M.access(a,b,c)},removeData:function(a,b){M.remove(a,b)},_data:function(a,b,c){return L.access(a,b,c)},_removeData:function(a,b){L.remove(a,b)}}),n.fn.extend({data:function(a,b){var c,d,e,f=this[0],g=f&&f.attributes;if(void 0===a){if(this.length&&(e=M.get(f),1===f.nodeType&&!L.get(f,"hasDataAttrs"))){c=g.length;while(c--)g[c]&&(d=g[c].name,0===d.indexOf("data-")&&(d=n.camelCase(d.slice(5)),P(f,d,e[d])));L.set(f,"hasDataAttrs",!0)}return e}return"object"==typeof a?this.each(function(){M.set(this,a)}):J(this,function(b){var c,d=n.camelCase(a);if(f&&void 0===b){if(c=M.get(f,a),void 0!==c)return c;if(c=M.get(f,d),void 0!==c)return c;if(c=P(f,d,void 0),void 0!==c)return c}else this.each(function(){var c=M.get(this,d);M.set(this,d,b),-1!==a.indexOf("-")&&void 0!==c&&M.set(this,a,b)})},null,b,arguments.length>1,null,!0)},removeData:function(a){return this.each(function(){M.remove(this,a)})}}),n.extend({queue:function(a,b,c){var d;return a?(b=(b||"fx")+"queue",d=L.get(a,b),c&&(!d||n.isArray(c)?d=L.access(a,b,n.makeArray(c)):d.push(c)),d||[]):void 0},dequeue:function(a,b){b=b||"fx";var c=n.queue(a,b),d=c.length,e=c.shift(),f=n._queueHooks(a,b),g=function(){n.dequeue(a,b)};"inprogress"===e&&(e=c.shift(),d--),e&&("fx"===b&&c.unshift("inprogress"),delete f.stop,e.call(a,g,f)),!d&&f&&f.empty.fire()},_queueHooks:function(a,b){var c=b+"queueHooks";return L.get(a,c)||L.access(a,c,{empty:n.Callbacks("once memory").add(function(){L.remove(a,[b+"queue",c])})})}}),n.fn.extend({queue:function(a,b){var c=2;return"string"!=typeof a&&(b=a,a="fx",c--),arguments.length<c?n.queue(this[0],a):void 0===b?this:this.each(function(){var c=n.queue(this,a,b);n._queueHooks(this,a),"fx"===a&&"inprogress"!==c[0]&&n.dequeue(this,a)})},dequeue:function(a){return this.each(function(){n.dequeue(this,a)})},clearQueue:function(a){return this.queue(a||"fx",[])},promise:function(a,b){var c,d=1,e=n.Deferred(),f=this,g=this.length,h=function(){--d||e.resolveWith(f,[f])};"string"!=typeof a&&(b=a,a=void 0),a=a||"fx";while(g--)c=L.get(f[g],a+"queueHooks"),c&&c.empty&&(d++,c.empty.add(h));return h(),e.promise(b)}});var Q=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,R=["Top","Right","Bottom","Left"],S=function(a,b){return a=b||a,"none"===n.css(a,"display")||!n.contains(a.ownerDocument,a)},T=/^(?:checkbox|radio)$/i;!function(){var a=l.createDocumentFragment(),b=a.appendChild(l.createElement("div")),c=l.createElement("input");c.setAttribute("type","radio"),c.setAttribute("checked","checked"),c.setAttribute("name","t"),b.appendChild(c),k.checkClone=b.cloneNode(!0).cloneNode(!0).lastChild.checked,b.innerHTML="<textarea>x</textarea>",k.noCloneChecked=!!b.cloneNode(!0).lastChild.defaultValue}();var U="undefined";k.focusinBubbles="onfocusin"in a;var V=/^key/,W=/^(?:mouse|pointer|contextmenu)|click/,X=/^(?:focusinfocus|focusoutblur)$/,Y=/^([^.]*)(?:\.(.+)|)$/;function Z(){return!0}function $(){return!1}function _(){try{return l.activeElement}catch(a){}}n.event={global:{},add:function(a,b,c,d,e){var f,g,h,i,j,k,l,m,o,p,q,r=L.get(a);if(r){c.handler&&(f=c,c=f.handler,e=f.selector),c.guid||(c.guid=n.guid++),(i=r.events)||(i=r.events={}),(g=r.handle)||(g=r.handle=function(b){return typeof n!==U&&n.event.triggered!==b.type?n.event.dispatch.apply(a,arguments):void 0}),b=(b||"").match(E)||[""],j=b.length;while(j--)h=Y.exec(b[j])||[],o=q=h[1],p=(h[2]||"").split(".").sort(),o&&(l=n.event.special[o]||{},o=(e?l.delegateType:l.bindType)||o,l=n.event.special[o]||{},k=n.extend({type:o,origType:q,data:d,handler:c,guid:c.guid,selector:e,needsContext:e&&n.expr.match.needsContext.test(e),namespace:p.join(".")},f),(m=i[o])||(m=i[o]=[],m.delegateCount=0,l.setup&&l.setup.call(a,d,p,g)!==!1||a.addEventListener&&a.addEventListener(o,g,!1)),l.add&&(l.add.call(a,k),k.handler.guid||(k.handler.guid=c.guid)),e?m.splice(m.delegateCount++,0,k):m.push(k),n.event.global[o]=!0)}},remove:function(a,b,c,d,e){var f,g,h,i,j,k,l,m,o,p,q,r=L.hasData(a)&&L.get(a);if(r&&(i=r.events)){b=(b||"").match(E)||[""],j=b.length;while(j--)if(h=Y.exec(b[j])||[],o=q=h[1],p=(h[2]||"").split(".").sort(),o){l=n.event.special[o]||{},o=(d?l.delegateType:l.bindType)||o,m=i[o]||[],h=h[2]&&new RegExp("(^|\\.)"+p.join("\\.(?:.*\\.|)")+"(\\.|$)"),g=f=m.length;while(f--)k=m[f],!e&&q!==k.origType||c&&c.guid!==k.guid||h&&!h.test(k.namespace)||d&&d!==k.selector&&("**"!==d||!k.selector)||(m.splice(f,1),k.selector&&m.delegateCount--,l.remove&&l.remove.call(a,k));g&&!m.length&&(l.teardown&&l.teardown.call(a,p,r.handle)!==!1||n.removeEvent(a,o,r.handle),delete i[o])}else for(o in i)n.event.remove(a,o+b[j],c,d,!0);n.isEmptyObject(i)&&(delete r.handle,L.remove(a,"events"))}},trigger:function(b,c,d,e){var f,g,h,i,k,m,o,p=[d||l],q=j.call(b,"type")?b.type:b,r=j.call(b,"namespace")?b.namespace.split("."):[];if(g=h=d=d||l,3!==d.nodeType&&8!==d.nodeType&&!X.test(q+n.event.triggered)&&(q.indexOf(".")>=0&&(r=q.split("."),q=r.shift(),r.sort()),k=q.indexOf(":")<0&&"on"+q,b=b[n.expando]?b:new n.Event(q,"object"==typeof b&&b),b.isTrigger=e?2:3,b.namespace=r.join("."),b.namespace_re=b.namespace?new RegExp("(^|\\.)"+r.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,b.result=void 0,b.target||(b.target=d),c=null==c?[b]:n.makeArray(c,[b]),o=n.event.special[q]||{},e||!o.trigger||o.trigger.apply(d,c)!==!1)){if(!e&&!o.noBubble&&!n.isWindow(d)){for(i=o.delegateType||q,X.test(i+q)||(g=g.parentNode);g;g=g.parentNode)p.push(g),h=g;h===(d.ownerDocument||l)&&p.push(h.defaultView||h.parentWindow||a)}f=0;while((g=p[f++])&&!b.isPropagationStopped())b.type=f>1?i:o.bindType||q,m=(L.get(g,"events")||{})[b.type]&&L.get(g,"handle"),m&&m.apply(g,c),m=k&&g[k],m&&m.apply&&n.acceptData(g)&&(b.result=m.apply(g,c),b.result===!1&&b.preventDefault());return b.type=q,e||b.isDefaultPrevented()||o._default&&o._default.apply(p.pop(),c)!==!1||!n.acceptData(d)||k&&n.isFunction(d[q])&&!n.isWindow(d)&&(h=d[k],h&&(d[k]=null),n.event.triggered=q,d[q](),n.event.triggered=void 0,h&&(d[k]=h)),b.result}},dispatch:function(a){a=n.event.fix(a);var b,c,e,f,g,h=[],i=d.call(arguments),j=(L.get(this,"events")||{})[a.type]||[],k=n.event.special[a.type]||{};if(i[0]=a,a.delegateTarget=this,!k.preDispatch||k.preDispatch.call(this,a)!==!1){h=n.event.handlers.call(this,a,j),b=0;while((f=h[b++])&&!a.isPropagationStopped()){a.currentTarget=f.elem,c=0;while((g=f.handlers[c++])&&!a.isImmediatePropagationStopped())(!a.namespace_re||a.namespace_re.test(g.namespace))&&(a.handleObj=g,a.data=g.data,e=((n.event.special[g.origType]||{}).handle||g.handler).apply(f.elem,i),void 0!==e&&(a.result=e)===!1&&(a.preventDefault(),a.stopPropagation()))}return k.postDispatch&&k.postDispatch.call(this,a),a.result}},handlers:function(a,b){var c,d,e,f,g=[],h=b.delegateCount,i=a.target;if(h&&i.nodeType&&(!a.button||"click"!==a.type))for(;i!==this;i=i.parentNode||this)if(i.disabled!==!0||"click"!==a.type){for(d=[],c=0;h>c;c++)f=b[c],e=f.selector+" ",void 0===d[e]&&(d[e]=f.needsContext?n(e,this).index(i)>=0:n.find(e,this,null,[i]).length),d[e]&&d.push(f);d.length&&g.push({elem:i,handlers:d})}return h<b.length&&g.push({elem:this,handlers:b.slice(h)}),g},props:"altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),fixHooks:{},keyHooks:{props:"char charCode key keyCode".split(" "),filter:function(a,b){return null==a.which&&(a.which=null!=b.charCode?b.charCode:b.keyCode),a}},mouseHooks:{props:"button buttons clientX clientY offsetX offsetY pageX pageY screenX screenY toElement".split(" "),filter:function(a,b){var c,d,e,f=b.button;return null==a.pageX&&null!=b.clientX&&(c=a.target.ownerDocument||l,d=c.documentElement,e=c.body,a.pageX=b.clientX+(d&&d.scrollLeft||e&&e.scrollLeft||0)-(d&&d.clientLeft||e&&e.clientLeft||0),a.pageY=b.clientY+(d&&d.scrollTop||e&&e.scrollTop||0)-(d&&d.clientTop||e&&e.clientTop||0)),a.which||void 0===f||(a.which=1&f?1:2&f?3:4&f?2:0),a}},fix:function(a){if(a[n.expando])return a;var b,c,d,e=a.type,f=a,g=this.fixHooks[e];g||(this.fixHooks[e]=g=W.test(e)?this.mouseHooks:V.test(e)?this.keyHooks:{}),d=g.props?this.props.concat(g.props):this.props,a=new n.Event(f),b=d.length;while(b--)c=d[b],a[c]=f[c];return a.target||(a.target=l),3===a.target.nodeType&&(a.target=a.target.parentNode),g.filter?g.filter(a,f):a},special:{load:{noBubble:!0},focus:{trigger:function(){return this!==_()&&this.focus?(this.focus(),!1):void 0},delegateType:"focusin"},blur:{trigger:function(){return this===_()&&this.blur?(this.blur(),!1):void 0},delegateType:"focusout"},click:{trigger:function(){return"checkbox"===this.type&&this.click&&n.nodeName(this,"input")?(this.click(),!1):void 0},_default:function(a){return n.nodeName(a.target,"a")}},beforeunload:{postDispatch:function(a){void 0!==a.result&&a.originalEvent&&(a.originalEvent.returnValue=a.result)}}},simulate:function(a,b,c,d){var e=n.extend(new n.Event,c,{type:a,isSimulated:!0,originalEvent:{}});d?n.event.trigger(e,null,b):n.event.dispatch.call(b,e),e.isDefaultPrevented()&&c.preventDefault()}},n.removeEvent=function(a,b,c){a.removeEventListener&&a.removeEventListener(b,c,!1)},n.Event=function(a,b){return this instanceof n.Event?(a&&a.type?(this.originalEvent=a,this.type=a.type,this.isDefaultPrevented=a.defaultPrevented||void 0===a.defaultPrevented&&a.returnValue===!1?Z:$):this.type=a,b&&n.extend(this,b),this.timeStamp=a&&a.timeStamp||n.now(),void(this[n.expando]=!0)):new n.Event(a,b)},n.Event.prototype={isDefaultPrevented:$,isPropagationStopped:$,isImmediatePropagationStopped:$,preventDefault:function(){var a=this.originalEvent;this.isDefaultPrevented=Z,a&&a.preventDefault&&a.preventDefault()},stopPropagation:function(){var a=this.originalEvent;this.isPropagationStopped=Z,a&&a.stopPropagation&&a.stopPropagation()},stopImmediatePropagation:function(){var a=this.originalEvent;this.isImmediatePropagationStopped=Z,a&&a.stopImmediatePropagation&&a.stopImmediatePropagation(),this.stopPropagation()}},n.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(a,b){n.event.special[a]={delegateType:b,bindType:b,handle:function(a){var c,d=this,e=a.relatedTarget,f=a.handleObj;return(!e||e!==d&&!n.contains(d,e))&&(a.type=f.origType,c=f.handler.apply(this,arguments),a.type=b),c}}}),k.focusinBubbles||n.each({focus:"focusin",blur:"focusout"},function(a,b){var c=function(a){n.event.simulate(b,a.target,n.event.fix(a),!0)};n.event.special[b]={setup:function(){var d=this.ownerDocument||this,e=L.access(d,b);e||d.addEventListener(a,c,!0),L.access(d,b,(e||0)+1)},teardown:function(){var d=this.ownerDocument||this,e=L.access(d,b)-1;e?L.access(d,b,e):(d.removeEventListener(a,c,!0),L.remove(d,b))}}}),n.fn.extend({on:function(a,b,c,d,e){var f,g;if("object"==typeof a){"string"!=typeof b&&(c=c||b,b=void 0);for(g in a)this.on(g,b,c,a[g],e);return this}if(null==c&&null==d?(d=b,c=b=void 0):null==d&&("string"==typeof b?(d=c,c=void 0):(d=c,c=b,b=void 0)),d===!1)d=$;else if(!d)return this;return 1===e&&(f=d,d=function(a){return n().off(a),f.apply(this,arguments)},d.guid=f.guid||(f.guid=n.guid++)),this.each(function(){n.event.add(this,a,d,c,b)})},one:function(a,b,c,d){return this.on(a,b,c,d,1)},off:function(a,b,c){var d,e;if(a&&a.preventDefault&&a.handleObj)return d=a.handleObj,n(a.delegateTarget).off(d.namespace?d.origType+"."+d.namespace:d.origType,d.selector,d.handler),this;if("object"==typeof a){for(e in a)this.off(e,b,a[e]);return this}return(b===!1||"function"==typeof b)&&(c=b,b=void 0),c===!1&&(c=$),this.each(function(){n.event.remove(this,a,c,b)})},trigger:function(a,b){return this.each(function(){n.event.trigger(a,b,this)})},triggerHandler:function(a,b){var c=this[0];return c?n.event.trigger(a,b,c,!0):void 0}});var aa=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,ba=/<([\w:]+)/,ca=/<|&#?\w+;/,da=/<(?:script|style|link)/i,ea=/checked\s*(?:[^=]|=\s*.checked.)/i,fa=/^$|\/(?:java|ecma)script/i,ga=/^true\/(.*)/,ha=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,ia={option:[1,"<select multiple='multiple'>","</select>"],thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};ia.optgroup=ia.option,ia.tbody=ia.tfoot=ia.colgroup=ia.caption=ia.thead,ia.th=ia.td;function ja(a,b){return n.nodeName(a,"table")&&n.nodeName(11!==b.nodeType?b:b.firstChild,"tr")?a.getElementsByTagName("tbody")[0]||a.appendChild(a.ownerDocument.createElement("tbody")):a}function ka(a){return a.type=(null!==a.getAttribute("type"))+"/"+a.type,a}function la(a){var b=ga.exec(a.type);return b?a.type=b[1]:a.removeAttribute("type"),a}function ma(a,b){for(var c=0,d=a.length;d>c;c++)L.set(a[c],"globalEval",!b||L.get(b[c],"globalEval"))}function na(a,b){var c,d,e,f,g,h,i,j;if(1===b.nodeType){if(L.hasData(a)&&(f=L.access(a),g=L.set(b,f),j=f.events)){delete g.handle,g.events={};for(e in j)for(c=0,d=j[e].length;d>c;c++)n.event.add(b,e,j[e][c])}M.hasData(a)&&(h=M.access(a),i=n.extend({},h),M.set(b,i))}}function oa(a,b){var c=a.getElementsByTagName?a.getElementsByTagName(b||"*"):a.querySelectorAll?a.querySelectorAll(b||"*"):[];return void 0===b||b&&n.nodeName(a,b)?n.merge([a],c):c}function pa(a,b){var c=b.nodeName.toLowerCase();"input"===c&&T.test(a.type)?b.checked=a.checked:("input"===c||"textarea"===c)&&(b.defaultValue=a.defaultValue)}n.extend({clone:function(a,b,c){var d,e,f,g,h=a.cloneNode(!0),i=n.contains(a.ownerDocument,a);if(!(k.noCloneChecked||1!==a.nodeType&&11!==a.nodeType||n.isXMLDoc(a)))for(g=oa(h),f=oa(a),d=0,e=f.length;e>d;d++)pa(f[d],g[d]);if(b)if(c)for(f=f||oa(a),g=g||oa(h),d=0,e=f.length;e>d;d++)na(f[d],g[d]);else na(a,h);return g=oa(h,"script"),g.length>0&&ma(g,!i&&oa(a,"script")),h},buildFragment:function(a,b,c,d){for(var e,f,g,h,i,j,k=b.createDocumentFragment(),l=[],m=0,o=a.length;o>m;m++)if(e=a[m],e||0===e)if("object"===n.type(e))n.merge(l,e.nodeType?[e]:e);else if(ca.test(e)){f=f||k.appendChild(b.createElement("div")),g=(ba.exec(e)||["",""])[1].toLowerCase(),h=ia[g]||ia._default,f.innerHTML=h[1]+e.replace(aa,"<$1></$2>")+h[2],j=h[0];while(j--)f=f.lastChild;n.merge(l,f.childNodes),f=k.firstChild,f.textContent=""}else l.push(b.createTextNode(e));k.textContent="",m=0;while(e=l[m++])if((!d||-1===n.inArray(e,d))&&(i=n.contains(e.ownerDocument,e),f=oa(k.appendChild(e),"script"),i&&ma(f),c)){j=0;while(e=f[j++])fa.test(e.type||"")&&c.push(e)}return k},cleanData:function(a){for(var b,c,d,e,f=n.event.special,g=0;void 0!==(c=a[g]);g++){if(n.acceptData(c)&&(e=c[L.expando],e&&(b=L.cache[e]))){if(b.events)for(d in b.events)f[d]?n.event.remove(c,d):n.removeEvent(c,d,b.handle);L.cache[e]&&delete L.cache[e]}delete M.cache[c[M.expando]]}}}),n.fn.extend({text:function(a){return J(this,function(a){return void 0===a?n.text(this):this.empty().each(function(){(1===this.nodeType||11===this.nodeType||9===this.nodeType)&&(this.textContent=a)})},null,a,arguments.length)},append:function(){return this.domManip(arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=ja(this,a);b.appendChild(a)}})},prepend:function(){return this.domManip(arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=ja(this,a);b.insertBefore(a,b.firstChild)}})},before:function(){return this.domManip(arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this)})},after:function(){return this.domManip(arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this.nextSibling)})},remove:function(a,b){for(var c,d=a?n.filter(a,this):this,e=0;null!=(c=d[e]);e++)b||1!==c.nodeType||n.cleanData(oa(c)),c.parentNode&&(b&&n.contains(c.ownerDocument,c)&&ma(oa(c,"script")),c.parentNode.removeChild(c));return this},empty:function(){for(var a,b=0;null!=(a=this[b]);b++)1===a.nodeType&&(n.cleanData(oa(a,!1)),a.textContent="");return this},clone:function(a,b){return a=null==a?!1:a,b=null==b?a:b,this.map(function(){return n.clone(this,a,b)})},html:function(a){return J(this,function(a){var b=this[0]||{},c=0,d=this.length;if(void 0===a&&1===b.nodeType)return b.innerHTML;if("string"==typeof a&&!da.test(a)&&!ia[(ba.exec(a)||["",""])[1].toLowerCase()]){a=a.replace(aa,"<$1></$2>");try{for(;d>c;c++)b=this[c]||{},1===b.nodeType&&(n.cleanData(oa(b,!1)),b.innerHTML=a);b=0}catch(e){}}b&&this.empty().append(a)},null,a,arguments.length)},replaceWith:function(){var a=arguments[0];return this.domManip(arguments,function(b){a=this.parentNode,n.cleanData(oa(this)),a&&a.replaceChild(b,this)}),a&&(a.length||a.nodeType)?this:this.remove()},detach:function(a){return this.remove(a,!0)},domManip:function(a,b){a=e.apply([],a);var c,d,f,g,h,i,j=0,l=this.length,m=this,o=l-1,p=a[0],q=n.isFunction(p);if(q||l>1&&"string"==typeof p&&!k.checkClone&&ea.test(p))return this.each(function(c){var d=m.eq(c);q&&(a[0]=p.call(this,c,d.html())),d.domManip(a,b)});if(l&&(c=n.buildFragment(a,this[0].ownerDocument,!1,this),d=c.firstChild,1===c.childNodes.length&&(c=d),d)){for(f=n.map(oa(c,"script"),ka),g=f.length;l>j;j++)h=c,j!==o&&(h=n.clone(h,!0,!0),g&&n.merge(f,oa(h,"script"))),b.call(this[j],h,j);if(g)for(i=f[f.length-1].ownerDocument,n.map(f,la),j=0;g>j;j++)h=f[j],fa.test(h.type||"")&&!L.access(h,"globalEval")&&n.contains(i,h)&&(h.src?n._evalUrl&&n._evalUrl(h.src):n.globalEval(h.textContent.replace(ha,"")))}return this}}),n.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(a,b){n.fn[a]=function(a){for(var c,d=[],e=n(a),g=e.length-1,h=0;g>=h;h++)c=h===g?this:this.clone(!0),n(e[h])[b](c),f.apply(d,c.get());return this.pushStack(d)}});var qa,ra={};function sa(b,c){var d,e=n(c.createElement(b)).appendTo(c.body),f=a.getDefaultComputedStyle&&(d=a.getDefaultComputedStyle(e[0]))?d.display:n.css(e[0],"display");return e.detach(),f}function ta(a){var b=l,c=ra[a];return c||(c=sa(a,b),"none"!==c&&c||(qa=(qa||n("<iframe frameborder='0' width='0' height='0'/>")).appendTo(b.documentElement),b=qa[0].contentDocument,b.write(),b.close(),c=sa(a,b),qa.detach()),ra[a]=c),c}var ua=/^margin/,va=new RegExp("^("+Q+")(?!px)[a-z%]+$","i"),wa=function(b){return b.ownerDocument.defaultView.opener?b.ownerDocument.defaultView.getComputedStyle(b,null):a.getComputedStyle(b,null)};function xa(a,b,c){var d,e,f,g,h=a.style;return c=c||wa(a),c&&(g=c.getPropertyValue(b)||c[b]),c&&(""!==g||n.contains(a.ownerDocument,a)||(g=n.style(a,b)),va.test(g)&&ua.test(b)&&(d=h.width,e=h.minWidth,f=h.maxWidth,h.minWidth=h.maxWidth=h.width=g,g=c.width,h.width=d,h.minWidth=e,h.maxWidth=f)),void 0!==g?g+"":g}function ya(a,b){return{get:function(){return a()?void delete this.get:(this.get=b).apply(this,arguments)}}}!function(){var b,c,d=l.documentElement,e=l.createElement("div"),f=l.createElement("div");if(f.style){f.style.backgroundClip="content-box",f.cloneNode(!0).style.backgroundClip="",k.clearCloneStyle="content-box"===f.style.backgroundClip,e.style.cssText="border:0;width:0;height:0;top:0;left:-9999px;margin-top:1px;position:absolute",e.appendChild(f);function g(){f.style.cssText="-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;display:block;margin-top:1%;top:1%;border:1px;padding:1px;width:4px;position:absolute",f.innerHTML="",d.appendChild(e);var g=a.getComputedStyle(f,null);b="1%"!==g.top,c="4px"===g.width,d.removeChild(e)}a.getComputedStyle&&n.extend(k,{pixelPosition:function(){return g(),b},boxSizingReliable:function(){return null==c&&g(),c},reliableMarginRight:function(){var b,c=f.appendChild(l.createElement("div"));return c.style.cssText=f.style.cssText="-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0",c.style.marginRight=c.style.width="0",f.style.width="1px",d.appendChild(e),b=!parseFloat(a.getComputedStyle(c,null).marginRight),d.removeChild(e),f.removeChild(c),b}})}}(),n.swap=function(a,b,c,d){var e,f,g={};for(f in b)g[f]=a.style[f],a.style[f]=b[f];e=c.apply(a,d||[]);for(f in b)a.style[f]=g[f];return e};var za=/^(none|table(?!-c[ea]).+)/,Aa=new RegExp("^("+Q+")(.*)$","i"),Ba=new RegExp("^([+-])=("+Q+")","i"),Ca={position:"absolute",visibility:"hidden",display:"block"},Da={letterSpacing:"0",fontWeight:"400"},Ea=["Webkit","O","Moz","ms"];function Fa(a,b){if(b in a)return b;var c=b[0].toUpperCase()+b.slice(1),d=b,e=Ea.length;while(e--)if(b=Ea[e]+c,b in a)return b;return d}function Ga(a,b,c){var d=Aa.exec(b);return d?Math.max(0,d[1]-(c||0))+(d[2]||"px"):b}function Ha(a,b,c,d,e){for(var f=c===(d?"border":"content")?4:"width"===b?1:0,g=0;4>f;f+=2)"margin"===c&&(g+=n.css(a,c+R[f],!0,e)),d?("content"===c&&(g-=n.css(a,"padding"+R[f],!0,e)),"margin"!==c&&(g-=n.css(a,"border"+R[f]+"Width",!0,e))):(g+=n.css(a,"padding"+R[f],!0,e),"padding"!==c&&(g+=n.css(a,"border"+R[f]+"Width",!0,e)));return g}function Ia(a,b,c){var d=!0,e="width"===b?a.offsetWidth:a.offsetHeight,f=wa(a),g="border-box"===n.css(a,"boxSizing",!1,f);if(0>=e||null==e){if(e=xa(a,b,f),(0>e||null==e)&&(e=a.style[b]),va.test(e))return e;d=g&&(k.boxSizingReliable()||e===a.style[b]),e=parseFloat(e)||0}return e+Ha(a,b,c||(g?"border":"content"),d,f)+"px"}function Ja(a,b){for(var c,d,e,f=[],g=0,h=a.length;h>g;g++)d=a[g],d.style&&(f[g]=L.get(d,"olddisplay"),c=d.style.display,b?(f[g]||"none"!==c||(d.style.display=""),""===d.style.display&&S(d)&&(f[g]=L.access(d,"olddisplay",ta(d.nodeName)))):(e=S(d),"none"===c&&e||L.set(d,"olddisplay",e?c:n.css(d,"display"))));for(g=0;h>g;g++)d=a[g],d.style&&(b&&"none"!==d.style.display&&""!==d.style.display||(d.style.display=b?f[g]||"":"none"));return a}n.extend({cssHooks:{opacity:{get:function(a,b){if(b){var c=xa(a,"opacity");return""===c?"1":c}}}},cssNumber:{columnCount:!0,fillOpacity:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{"float":"cssFloat"},style:function(a,b,c,d){if(a&&3!==a.nodeType&&8!==a.nodeType&&a.style){var e,f,g,h=n.camelCase(b),i=a.style;return b=n.cssProps[h]||(n.cssProps[h]=Fa(i,h)),g=n.cssHooks[b]||n.cssHooks[h],void 0===c?g&&"get"in g&&void 0!==(e=g.get(a,!1,d))?e:i[b]:(f=typeof c,"string"===f&&(e=Ba.exec(c))&&(c=(e[1]+1)*e[2]+parseFloat(n.css(a,b)),f="number"),null!=c&&c===c&&("number"!==f||n.cssNumber[h]||(c+="px"),k.clearCloneStyle||""!==c||0!==b.indexOf("background")||(i[b]="inherit"),g&&"set"in g&&void 0===(c=g.set(a,c,d))||(i[b]=c)),void 0)}},css:function(a,b,c,d){var e,f,g,h=n.camelCase(b);return b=n.cssProps[h]||(n.cssProps[h]=Fa(a.style,h)),g=n.cssHooks[b]||n.cssHooks[h],g&&"get"in g&&(e=g.get(a,!0,c)),void 0===e&&(e=xa(a,b,d)),"normal"===e&&b in Da&&(e=Da[b]),""===c||c?(f=parseFloat(e),c===!0||n.isNumeric(f)?f||0:e):e}}),n.each(["height","width"],function(a,b){n.cssHooks[b]={get:function(a,c,d){return c?za.test(n.css(a,"display"))&&0===a.offsetWidth?n.swap(a,Ca,function(){return Ia(a,b,d)}):Ia(a,b,d):void 0},set:function(a,c,d){var e=d&&wa(a);return Ga(a,c,d?Ha(a,b,d,"border-box"===n.css(a,"boxSizing",!1,e),e):0)}}}),n.cssHooks.marginRight=ya(k.reliableMarginRight,function(a,b){return b?n.swap(a,{display:"inline-block"},xa,[a,"marginRight"]):void 0}),n.each({margin:"",padding:"",border:"Width"},function(a,b){n.cssHooks[a+b]={expand:function(c){for(var d=0,e={},f="string"==typeof c?c.split(" "):[c];4>d;d++)e[a+R[d]+b]=f[d]||f[d-2]||f[0];return e}},ua.test(a)||(n.cssHooks[a+b].set=Ga)}),n.fn.extend({css:function(a,b){return J(this,function(a,b,c){var d,e,f={},g=0;if(n.isArray(b)){for(d=wa(a),e=b.length;e>g;g++)f[b[g]]=n.css(a,b[g],!1,d);return f}return void 0!==c?n.style(a,b,c):n.css(a,b)},a,b,arguments.length>1)},show:function(){return Ja(this,!0)},hide:function(){return Ja(this)},toggle:function(a){return"boolean"==typeof a?a?this.show():this.hide():this.each(function(){S(this)?n(this).show():n(this).hide()})}});function Ka(a,b,c,d,e){return new Ka.prototype.init(a,b,c,d,e)}n.Tween=Ka,Ka.prototype={constructor:Ka,init:function(a,b,c,d,e,f){this.elem=a,this.prop=c,this.easing=e||"swing",this.options=b,this.start=this.now=this.cur(),this.end=d,this.unit=f||(n.cssNumber[c]?"":"px")},cur:function(){var a=Ka.propHooks[this.prop];return a&&a.get?a.get(this):Ka.propHooks._default.get(this)},run:function(a){var b,c=Ka.propHooks[this.prop];return this.options.duration?this.pos=b=n.easing[this.easing](a,this.options.duration*a,0,1,this.options.duration):this.pos=b=a,this.now=(this.end-this.start)*b+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),c&&c.set?c.set(this):Ka.propHooks._default.set(this),this}},Ka.prototype.init.prototype=Ka.prototype,Ka.propHooks={_default:{get:function(a){var b;return null==a.elem[a.prop]||a.elem.style&&null!=a.elem.style[a.prop]?(b=n.css(a.elem,a.prop,""),b&&"auto"!==b?b:0):a.elem[a.prop]},set:function(a){n.fx.step[a.prop]?n.fx.step[a.prop](a):a.elem.style&&(null!=a.elem.style[n.cssProps[a.prop]]||n.cssHooks[a.prop])?n.style(a.elem,a.prop,a.now+a.unit):a.elem[a.prop]=a.now}}},Ka.propHooks.scrollTop=Ka.propHooks.scrollLeft={set:function(a){a.elem.nodeType&&a.elem.parentNode&&(a.elem[a.prop]=a.now)}},n.easing={linear:function(a){return a},swing:function(a){return.5-Math.cos(a*Math.PI)/2}},n.fx=Ka.prototype.init,n.fx.step={};var La,Ma,Na=/^(?:toggle|show|hide)$/,Oa=new RegExp("^(?:([+-])=|)("+Q+")([a-z%]*)$","i"),Pa=/queueHooks$/,Qa=[Va],Ra={"*":[function(a,b){var c=this.createTween(a,b),d=c.cur(),e=Oa.exec(b),f=e&&e[3]||(n.cssNumber[a]?"":"px"),g=(n.cssNumber[a]||"px"!==f&&+d)&&Oa.exec(n.css(c.elem,a)),h=1,i=20;if(g&&g[3]!==f){f=f||g[3],e=e||[],g=+d||1;do h=h||".5",g/=h,n.style(c.elem,a,g+f);while(h!==(h=c.cur()/d)&&1!==h&&--i)}return e&&(g=c.start=+g||+d||0,c.unit=f,c.end=e[1]?g+(e[1]+1)*e[2]:+e[2]),c}]};function Sa(){return setTimeout(function(){La=void 0}),La=n.now()}function Ta(a,b){var c,d=0,e={height:a};for(b=b?1:0;4>d;d+=2-b)c=R[d],e["margin"+c]=e["padding"+c]=a;return b&&(e.opacity=e.width=a),e}function Ua(a,b,c){for(var d,e=(Ra[b]||[]).concat(Ra["*"]),f=0,g=e.length;g>f;f++)if(d=e[f].call(c,b,a))return d}function Va(a,b,c){var d,e,f,g,h,i,j,k,l=this,m={},o=a.style,p=a.nodeType&&S(a),q=L.get(a,"fxshow");c.queue||(h=n._queueHooks(a,"fx"),null==h.unqueued&&(h.unqueued=0,i=h.empty.fire,h.empty.fire=function(){h.unqueued||i()}),h.unqueued++,l.always(function(){l.always(function(){h.unqueued--,n.queue(a,"fx").length||h.empty.fire()})})),1===a.nodeType&&("height"in b||"width"in b)&&(c.overflow=[o.overflow,o.overflowX,o.overflowY],j=n.css(a,"display"),k="none"===j?L.get(a,"olddisplay")||ta(a.nodeName):j,"inline"===k&&"none"===n.css(a,"float")&&(o.display="inline-block")),c.overflow&&(o.overflow="hidden",l.always(function(){o.overflow=c.overflow[0],o.overflowX=c.overflow[1],o.overflowY=c.overflow[2]}));for(d in b)if(e=b[d],Na.exec(e)){if(delete b[d],f=f||"toggle"===e,e===(p?"hide":"show")){if("show"!==e||!q||void 0===q[d])continue;p=!0}m[d]=q&&q[d]||n.style(a,d)}else j=void 0;if(n.isEmptyObject(m))"inline"===("none"===j?ta(a.nodeName):j)&&(o.display=j);else{q?"hidden"in q&&(p=q.hidden):q=L.access(a,"fxshow",{}),f&&(q.hidden=!p),p?n(a).show():l.done(function(){n(a).hide()}),l.done(function(){var b;L.remove(a,"fxshow");for(b in m)n.style(a,b,m[b])});for(d in m)g=Ua(p?q[d]:0,d,l),d in q||(q[d]=g.start,p&&(g.end=g.start,g.start="width"===d||"height"===d?1:0))}}function Wa(a,b){var c,d,e,f,g;for(c in a)if(d=n.camelCase(c),e=b[d],f=a[c],n.isArray(f)&&(e=f[1],f=a[c]=f[0]),c!==d&&(a[d]=f,delete a[c]),g=n.cssHooks[d],g&&"expand"in g){f=g.expand(f),delete a[d];for(c in f)c in a||(a[c]=f[c],b[c]=e)}else b[d]=e}function Xa(a,b,c){var d,e,f=0,g=Qa.length,h=n.Deferred().always(function(){delete i.elem}),i=function(){if(e)return!1;for(var b=La||Sa(),c=Math.max(0,j.startTime+j.duration-b),d=c/j.duration||0,f=1-d,g=0,i=j.tweens.length;i>g;g++)j.tweens[g].run(f);return h.notifyWith(a,[j,f,c]),1>f&&i?c:(h.resolveWith(a,[j]),!1)},j=h.promise({elem:a,props:n.extend({},b),opts:n.extend(!0,{specialEasing:{}},c),originalProperties:b,originalOptions:c,startTime:La||Sa(),duration:c.duration,tweens:[],createTween:function(b,c){var d=n.Tween(a,j.opts,b,c,j.opts.specialEasing[b]||j.opts.easing);return j.tweens.push(d),d},stop:function(b){var c=0,d=b?j.tweens.length:0;if(e)return this;for(e=!0;d>c;c++)j.tweens[c].run(1);return b?h.resolveWith(a,[j,b]):h.rejectWith(a,[j,b]),this}}),k=j.props;for(Wa(k,j.opts.specialEasing);g>f;f++)if(d=Qa[f].call(j,a,k,j.opts))return d;return n.map(k,Ua,j),n.isFunction(j.opts.start)&&j.opts.start.call(a,j),n.fx.timer(n.extend(i,{elem:a,anim:j,queue:j.opts.queue})),j.progress(j.opts.progress).done(j.opts.done,j.opts.complete).fail(j.opts.fail).always(j.opts.always)}n.Animation=n.extend(Xa,{tweener:function(a,b){n.isFunction(a)?(b=a,a=["*"]):a=a.split(" ");for(var c,d=0,e=a.length;e>d;d++)c=a[d],Ra[c]=Ra[c]||[],Ra[c].unshift(b)},prefilter:function(a,b){b?Qa.unshift(a):Qa.push(a)}}),n.speed=function(a,b,c){var d=a&&"object"==typeof a?n.extend({},a):{complete:c||!c&&b||n.isFunction(a)&&a,duration:a,easing:c&&b||b&&!n.isFunction(b)&&b};return d.duration=n.fx.off?0:"number"==typeof d.duration?d.duration:d.duration in n.fx.speeds?n.fx.speeds[d.duration]:n.fx.speeds._default,(null==d.queue||d.queue===!0)&&(d.queue="fx"),d.old=d.complete,d.complete=function(){n.isFunction(d.old)&&d.old.call(this),d.queue&&n.dequeue(this,d.queue)},d},n.fn.extend({fadeTo:function(a,b,c,d){return this.filter(S).css("opacity",0).show().end().animate({opacity:b},a,c,d)},animate:function(a,b,c,d){var e=n.isEmptyObject(a),f=n.speed(b,c,d),g=function(){var b=Xa(this,n.extend({},a),f);(e||L.get(this,"finish"))&&b.stop(!0)};return g.finish=g,e||f.queue===!1?this.each(g):this.queue(f.queue,g)},stop:function(a,b,c){var d=function(a){var b=a.stop;delete a.stop,b(c)};return"string"!=typeof a&&(c=b,b=a,a=void 0),b&&a!==!1&&this.queue(a||"fx",[]),this.each(function(){var b=!0,e=null!=a&&a+"queueHooks",f=n.timers,g=L.get(this);if(e)g[e]&&g[e].stop&&d(g[e]);else for(e in g)g[e]&&g[e].stop&&Pa.test(e)&&d(g[e]);for(e=f.length;e--;)f[e].elem!==this||null!=a&&f[e].queue!==a||(f[e].anim.stop(c),b=!1,f.splice(e,1));(b||!c)&&n.dequeue(this,a)})},finish:function(a){return a!==!1&&(a=a||"fx"),this.each(function(){var b,c=L.get(this),d=c[a+"queue"],e=c[a+"queueHooks"],f=n.timers,g=d?d.length:0;for(c.finish=!0,n.queue(this,a,[]),e&&e.stop&&e.stop.call(this,!0),b=f.length;b--;)f[b].elem===this&&f[b].queue===a&&(f[b].anim.stop(!0),f.splice(b,1));for(b=0;g>b;b++)d[b]&&d[b].finish&&d[b].finish.call(this);delete c.finish})}}),n.each(["toggle","show","hide"],function(a,b){var c=n.fn[b];n.fn[b]=function(a,d,e){return null==a||"boolean"==typeof a?c.apply(this,arguments):this.animate(Ta(b,!0),a,d,e)}}),n.each({slideDown:Ta("show"),slideUp:Ta("hide"),slideToggle:Ta("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(a,b){n.fn[a]=function(a,c,d){return this.animate(b,a,c,d)}}),n.timers=[],n.fx.tick=function(){var a,b=0,c=n.timers;for(La=n.now();b<c.length;b++)a=c[b],a()||c[b]!==a||c.splice(b--,1);c.length||n.fx.stop(),La=void 0},n.fx.timer=function(a){n.timers.push(a),a()?n.fx.start():n.timers.pop()},n.fx.interval=13,n.fx.start=function(){Ma||(Ma=setInterval(n.fx.tick,n.fx.interval))},n.fx.stop=function(){clearInterval(Ma),Ma=null},n.fx.speeds={slow:600,fast:200,_default:400},n.fn.delay=function(a,b){return a=n.fx?n.fx.speeds[a]||a:a,b=b||"fx",this.queue(b,function(b,c){var d=setTimeout(b,a);c.stop=function(){clearTimeout(d)}})},function(){var a=l.createElement("input"),b=l.createElement("select"),c=b.appendChild(l.createElement("option"));a.type="checkbox",k.checkOn=""!==a.value,k.optSelected=c.selected,b.disabled=!0,k.optDisabled=!c.disabled,a=l.createElement("input"),a.value="t",a.type="radio",k.radioValue="t"===a.value}();var Ya,Za,$a=n.expr.attrHandle;n.fn.extend({attr:function(a,b){return J(this,n.attr,a,b,arguments.length>1)},removeAttr:function(a){return this.each(function(){n.removeAttr(this,a)})}}),n.extend({attr:function(a,b,c){var d,e,f=a.nodeType;if(a&&3!==f&&8!==f&&2!==f)return typeof a.getAttribute===U?n.prop(a,b,c):(1===f&&n.isXMLDoc(a)||(b=b.toLowerCase(),d=n.attrHooks[b]||(n.expr.match.bool.test(b)?Za:Ya)),
void 0===c?d&&"get"in d&&null!==(e=d.get(a,b))?e:(e=n.find.attr(a,b),null==e?void 0:e):null!==c?d&&"set"in d&&void 0!==(e=d.set(a,c,b))?e:(a.setAttribute(b,c+""),c):void n.removeAttr(a,b))},removeAttr:function(a,b){var c,d,e=0,f=b&&b.match(E);if(f&&1===a.nodeType)while(c=f[e++])d=n.propFix[c]||c,n.expr.match.bool.test(c)&&(a[d]=!1),a.removeAttribute(c)},attrHooks:{type:{set:function(a,b){if(!k.radioValue&&"radio"===b&&n.nodeName(a,"input")){var c=a.value;return a.setAttribute("type",b),c&&(a.value=c),b}}}}}),Za={set:function(a,b,c){return b===!1?n.removeAttr(a,c):a.setAttribute(c,c),c}},n.each(n.expr.match.bool.source.match(/\w+/g),function(a,b){var c=$a[b]||n.find.attr;$a[b]=function(a,b,d){var e,f;return d||(f=$a[b],$a[b]=e,e=null!=c(a,b,d)?b.toLowerCase():null,$a[b]=f),e}});var _a=/^(?:input|select|textarea|button)$/i;n.fn.extend({prop:function(a,b){return J(this,n.prop,a,b,arguments.length>1)},removeProp:function(a){return this.each(function(){delete this[n.propFix[a]||a]})}}),n.extend({propFix:{"for":"htmlFor","class":"className"},prop:function(a,b,c){var d,e,f,g=a.nodeType;if(a&&3!==g&&8!==g&&2!==g)return f=1!==g||!n.isXMLDoc(a),f&&(b=n.propFix[b]||b,e=n.propHooks[b]),void 0!==c?e&&"set"in e&&void 0!==(d=e.set(a,c,b))?d:a[b]=c:e&&"get"in e&&null!==(d=e.get(a,b))?d:a[b]},propHooks:{tabIndex:{get:function(a){return a.hasAttribute("tabindex")||_a.test(a.nodeName)||a.href?a.tabIndex:-1}}}}),k.optSelected||(n.propHooks.selected={get:function(a){var b=a.parentNode;return b&&b.parentNode&&b.parentNode.selectedIndex,null}}),n.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){n.propFix[this.toLowerCase()]=this});var ab=/[\t\r\n\f]/g;n.fn.extend({addClass:function(a){var b,c,d,e,f,g,h="string"==typeof a&&a,i=0,j=this.length;if(n.isFunction(a))return this.each(function(b){n(this).addClass(a.call(this,b,this.className))});if(h)for(b=(a||"").match(E)||[];j>i;i++)if(c=this[i],d=1===c.nodeType&&(c.className?(" "+c.className+" ").replace(ab," "):" ")){f=0;while(e=b[f++])d.indexOf(" "+e+" ")<0&&(d+=e+" ");g=n.trim(d),c.className!==g&&(c.className=g)}return this},removeClass:function(a){var b,c,d,e,f,g,h=0===arguments.length||"string"==typeof a&&a,i=0,j=this.length;if(n.isFunction(a))return this.each(function(b){n(this).removeClass(a.call(this,b,this.className))});if(h)for(b=(a||"").match(E)||[];j>i;i++)if(c=this[i],d=1===c.nodeType&&(c.className?(" "+c.className+" ").replace(ab," "):"")){f=0;while(e=b[f++])while(d.indexOf(" "+e+" ")>=0)d=d.replace(" "+e+" "," ");g=a?n.trim(d):"",c.className!==g&&(c.className=g)}return this},toggleClass:function(a,b){var c=typeof a;return"boolean"==typeof b&&"string"===c?b?this.addClass(a):this.removeClass(a):this.each(n.isFunction(a)?function(c){n(this).toggleClass(a.call(this,c,this.className,b),b)}:function(){if("string"===c){var b,d=0,e=n(this),f=a.match(E)||[];while(b=f[d++])e.hasClass(b)?e.removeClass(b):e.addClass(b)}else(c===U||"boolean"===c)&&(this.className&&L.set(this,"__className__",this.className),this.className=this.className||a===!1?"":L.get(this,"__className__")||"")})},hasClass:function(a){for(var b=" "+a+" ",c=0,d=this.length;d>c;c++)if(1===this[c].nodeType&&(" "+this[c].className+" ").replace(ab," ").indexOf(b)>=0)return!0;return!1}});var bb=/\r/g;n.fn.extend({val:function(a){var b,c,d,e=this[0];{if(arguments.length)return d=n.isFunction(a),this.each(function(c){var e;1===this.nodeType&&(e=d?a.call(this,c,n(this).val()):a,null==e?e="":"number"==typeof e?e+="":n.isArray(e)&&(e=n.map(e,function(a){return null==a?"":a+""})),b=n.valHooks[this.type]||n.valHooks[this.nodeName.toLowerCase()],b&&"set"in b&&void 0!==b.set(this,e,"value")||(this.value=e))});if(e)return b=n.valHooks[e.type]||n.valHooks[e.nodeName.toLowerCase()],b&&"get"in b&&void 0!==(c=b.get(e,"value"))?c:(c=e.value,"string"==typeof c?c.replace(bb,""):null==c?"":c)}}}),n.extend({valHooks:{option:{get:function(a){var b=n.find.attr(a,"value");return null!=b?b:n.trim(n.text(a))}},select:{get:function(a){for(var b,c,d=a.options,e=a.selectedIndex,f="select-one"===a.type||0>e,g=f?null:[],h=f?e+1:d.length,i=0>e?h:f?e:0;h>i;i++)if(c=d[i],!(!c.selected&&i!==e||(k.optDisabled?c.disabled:null!==c.getAttribute("disabled"))||c.parentNode.disabled&&n.nodeName(c.parentNode,"optgroup"))){if(b=n(c).val(),f)return b;g.push(b)}return g},set:function(a,b){var c,d,e=a.options,f=n.makeArray(b),g=e.length;while(g--)d=e[g],(d.selected=n.inArray(d.value,f)>=0)&&(c=!0);return c||(a.selectedIndex=-1),f}}}}),n.each(["radio","checkbox"],function(){n.valHooks[this]={set:function(a,b){return n.isArray(b)?a.checked=n.inArray(n(a).val(),b)>=0:void 0}},k.checkOn||(n.valHooks[this].get=function(a){return null===a.getAttribute("value")?"on":a.value})}),n.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "),function(a,b){n.fn[b]=function(a,c){return arguments.length>0?this.on(b,null,a,c):this.trigger(b)}}),n.fn.extend({hover:function(a,b){return this.mouseenter(a).mouseleave(b||a)},bind:function(a,b,c){return this.on(a,null,b,c)},unbind:function(a,b){return this.off(a,null,b)},delegate:function(a,b,c,d){return this.on(b,a,c,d)},undelegate:function(a,b,c){return 1===arguments.length?this.off(a,"**"):this.off(b,a||"**",c)}});var cb=n.now(),db=/\?/;n.parseJSON=function(a){return JSON.parse(a+"")},n.parseXML=function(a){var b,c;if(!a||"string"!=typeof a)return null;try{c=new DOMParser,b=c.parseFromString(a,"text/xml")}catch(d){b=void 0}return(!b||b.getElementsByTagName("parsererror").length)&&n.error("Invalid XML: "+a),b};var eb=/#.*$/,fb=/([?&])_=[^&]*/,gb=/^(.*?):[ \t]*([^\r\n]*)$/gm,hb=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,ib=/^(?:GET|HEAD)$/,jb=/^\/\//,kb=/^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,lb={},mb={},nb="*/".concat("*"),ob=a.location.href,pb=kb.exec(ob.toLowerCase())||[];function qb(a){return function(b,c){"string"!=typeof b&&(c=b,b="*");var d,e=0,f=b.toLowerCase().match(E)||[];if(n.isFunction(c))while(d=f[e++])"+"===d[0]?(d=d.slice(1)||"*",(a[d]=a[d]||[]).unshift(c)):(a[d]=a[d]||[]).push(c)}}function rb(a,b,c,d){var e={},f=a===mb;function g(h){var i;return e[h]=!0,n.each(a[h]||[],function(a,h){var j=h(b,c,d);return"string"!=typeof j||f||e[j]?f?!(i=j):void 0:(b.dataTypes.unshift(j),g(j),!1)}),i}return g(b.dataTypes[0])||!e["*"]&&g("*")}function sb(a,b){var c,d,e=n.ajaxSettings.flatOptions||{};for(c in b)void 0!==b[c]&&((e[c]?a:d||(d={}))[c]=b[c]);return d&&n.extend(!0,a,d),a}function tb(a,b,c){var d,e,f,g,h=a.contents,i=a.dataTypes;while("*"===i[0])i.shift(),void 0===d&&(d=a.mimeType||b.getResponseHeader("Content-Type"));if(d)for(e in h)if(h[e]&&h[e].test(d)){i.unshift(e);break}if(i[0]in c)f=i[0];else{for(e in c){if(!i[0]||a.converters[e+" "+i[0]]){f=e;break}g||(g=e)}f=f||g}return f?(f!==i[0]&&i.unshift(f),c[f]):void 0}function ub(a,b,c,d){var e,f,g,h,i,j={},k=a.dataTypes.slice();if(k[1])for(g in a.converters)j[g.toLowerCase()]=a.converters[g];f=k.shift();while(f)if(a.responseFields[f]&&(c[a.responseFields[f]]=b),!i&&d&&a.dataFilter&&(b=a.dataFilter(b,a.dataType)),i=f,f=k.shift())if("*"===f)f=i;else if("*"!==i&&i!==f){if(g=j[i+" "+f]||j["* "+f],!g)for(e in j)if(h=e.split(" "),h[1]===f&&(g=j[i+" "+h[0]]||j["* "+h[0]])){g===!0?g=j[e]:j[e]!==!0&&(f=h[0],k.unshift(h[1]));break}if(g!==!0)if(g&&a["throws"])b=g(b);else try{b=g(b)}catch(l){return{state:"parsererror",error:g?l:"No conversion from "+i+" to "+f}}}return{state:"success",data:b}}n.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:ob,type:"GET",isLocal:hb.test(pb[1]),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":nb,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/xml/,html:/html/,json:/json/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":n.parseJSON,"text xml":n.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(a,b){return b?sb(sb(a,n.ajaxSettings),b):sb(n.ajaxSettings,a)},ajaxPrefilter:qb(lb),ajaxTransport:qb(mb),ajax:function(a,b){"object"==typeof a&&(b=a,a=void 0),b=b||{};var c,d,e,f,g,h,i,j,k=n.ajaxSetup({},b),l=k.context||k,m=k.context&&(l.nodeType||l.jquery)?n(l):n.event,o=n.Deferred(),p=n.Callbacks("once memory"),q=k.statusCode||{},r={},s={},t=0,u="canceled",v={readyState:0,getResponseHeader:function(a){var b;if(2===t){if(!f){f={};while(b=gb.exec(e))f[b[1].toLowerCase()]=b[2]}b=f[a.toLowerCase()]}return null==b?null:b},getAllResponseHeaders:function(){return 2===t?e:null},setRequestHeader:function(a,b){var c=a.toLowerCase();return t||(a=s[c]=s[c]||a,r[a]=b),this},overrideMimeType:function(a){return t||(k.mimeType=a),this},statusCode:function(a){var b;if(a)if(2>t)for(b in a)q[b]=[q[b],a[b]];else v.always(a[v.status]);return this},abort:function(a){var b=a||u;return c&&c.abort(b),x(0,b),this}};if(o.promise(v).complete=p.add,v.success=v.done,v.error=v.fail,k.url=((a||k.url||ob)+"").replace(eb,"").replace(jb,pb[1]+"//"),k.type=b.method||b.type||k.method||k.type,k.dataTypes=n.trim(k.dataType||"*").toLowerCase().match(E)||[""],null==k.crossDomain&&(h=kb.exec(k.url.toLowerCase()),k.crossDomain=!(!h||h[1]===pb[1]&&h[2]===pb[2]&&(h[3]||("http:"===h[1]?"80":"443"))===(pb[3]||("http:"===pb[1]?"80":"443")))),k.data&&k.processData&&"string"!=typeof k.data&&(k.data=n.param(k.data,k.traditional)),rb(lb,k,b,v),2===t)return v;i=n.event&&k.global,i&&0===n.active++&&n.event.trigger("ajaxStart"),k.type=k.type.toUpperCase(),k.hasContent=!ib.test(k.type),d=k.url,k.hasContent||(k.data&&(d=k.url+=(db.test(d)?"&":"?")+k.data,delete k.data),k.cache===!1&&(k.url=fb.test(d)?d.replace(fb,"$1_="+cb++):d+(db.test(d)?"&":"?")+"_="+cb++)),k.ifModified&&(n.lastModified[d]&&v.setRequestHeader("If-Modified-Since",n.lastModified[d]),n.etag[d]&&v.setRequestHeader("If-None-Match",n.etag[d])),(k.data&&k.hasContent&&k.contentType!==!1||b.contentType)&&v.setRequestHeader("Content-Type",k.contentType),v.setRequestHeader("Accept",k.dataTypes[0]&&k.accepts[k.dataTypes[0]]?k.accepts[k.dataTypes[0]]+("*"!==k.dataTypes[0]?", "+nb+"; q=0.01":""):k.accepts["*"]);for(j in k.headers)v.setRequestHeader(j,k.headers[j]);if(k.beforeSend&&(k.beforeSend.call(l,v,k)===!1||2===t))return v.abort();u="abort";for(j in{success:1,error:1,complete:1})v[j](k[j]);if(c=rb(mb,k,b,v)){v.readyState=1,i&&m.trigger("ajaxSend",[v,k]),k.async&&k.timeout>0&&(g=setTimeout(function(){v.abort("timeout")},k.timeout));try{t=1,c.send(r,x)}catch(w){if(!(2>t))throw w;x(-1,w)}}else x(-1,"No Transport");function x(a,b,f,h){var j,r,s,u,w,x=b;2!==t&&(t=2,g&&clearTimeout(g),c=void 0,e=h||"",v.readyState=a>0?4:0,j=a>=200&&300>a||304===a,f&&(u=tb(k,v,f)),u=ub(k,u,v,j),j?(k.ifModified&&(w=v.getResponseHeader("Last-Modified"),w&&(n.lastModified[d]=w),w=v.getResponseHeader("etag"),w&&(n.etag[d]=w)),204===a||"HEAD"===k.type?x="nocontent":304===a?x="notmodified":(x=u.state,r=u.data,s=u.error,j=!s)):(s=x,(a||!x)&&(x="error",0>a&&(a=0))),v.status=a,v.statusText=(b||x)+"",j?o.resolveWith(l,[r,x,v]):o.rejectWith(l,[v,x,s]),v.statusCode(q),q=void 0,i&&m.trigger(j?"ajaxSuccess":"ajaxError",[v,k,j?r:s]),p.fireWith(l,[v,x]),i&&(m.trigger("ajaxComplete",[v,k]),--n.active||n.event.trigger("ajaxStop")))}return v},getJSON:function(a,b,c){return n.get(a,b,c,"json")},getScript:function(a,b){return n.get(a,void 0,b,"script")}}),n.each(["get","post"],function(a,b){n[b]=function(a,c,d,e){return n.isFunction(c)&&(e=e||d,d=c,c=void 0),n.ajax({url:a,type:b,dataType:e,data:c,success:d})}}),n._evalUrl=function(a){return n.ajax({url:a,type:"GET",dataType:"script",async:!1,global:!1,"throws":!0})},n.fn.extend({wrapAll:function(a){var b;return n.isFunction(a)?this.each(function(b){n(this).wrapAll(a.call(this,b))}):(this[0]&&(b=n(a,this[0].ownerDocument).eq(0).clone(!0),this[0].parentNode&&b.insertBefore(this[0]),b.map(function(){var a=this;while(a.firstElementChild)a=a.firstElementChild;return a}).append(this)),this)},wrapInner:function(a){return this.each(n.isFunction(a)?function(b){n(this).wrapInner(a.call(this,b))}:function(){var b=n(this),c=b.contents();c.length?c.wrapAll(a):b.append(a)})},wrap:function(a){var b=n.isFunction(a);return this.each(function(c){n(this).wrapAll(b?a.call(this,c):a)})},unwrap:function(){return this.parent().each(function(){n.nodeName(this,"body")||n(this).replaceWith(this.childNodes)}).end()}}),n.expr.filters.hidden=function(a){return a.offsetWidth<=0&&a.offsetHeight<=0},n.expr.filters.visible=function(a){return!n.expr.filters.hidden(a)};var vb=/%20/g,wb=/\[\]$/,xb=/\r?\n/g,yb=/^(?:submit|button|image|reset|file)$/i,zb=/^(?:input|select|textarea|keygen)/i;function Ab(a,b,c,d){var e;if(n.isArray(b))n.each(b,function(b,e){c||wb.test(a)?d(a,e):Ab(a+"["+("object"==typeof e?b:"")+"]",e,c,d)});else if(c||"object"!==n.type(b))d(a,b);else for(e in b)Ab(a+"["+e+"]",b[e],c,d)}n.param=function(a,b){var c,d=[],e=function(a,b){b=n.isFunction(b)?b():null==b?"":b,d[d.length]=encodeURIComponent(a)+"="+encodeURIComponent(b)};if(void 0===b&&(b=n.ajaxSettings&&n.ajaxSettings.traditional),n.isArray(a)||a.jquery&&!n.isPlainObject(a))n.each(a,function(){e(this.name,this.value)});else for(c in a)Ab(c,a[c],b,e);return d.join("&").replace(vb,"+")},n.fn.extend({serialize:function(){return n.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var a=n.prop(this,"elements");return a?n.makeArray(a):this}).filter(function(){var a=this.type;return this.name&&!n(this).is(":disabled")&&zb.test(this.nodeName)&&!yb.test(a)&&(this.checked||!T.test(a))}).map(function(a,b){var c=n(this).val();return null==c?null:n.isArray(c)?n.map(c,function(a){return{name:b.name,value:a.replace(xb,"\r\n")}}):{name:b.name,value:c.replace(xb,"\r\n")}}).get()}}),n.ajaxSettings.xhr=function(){try{return new XMLHttpRequest}catch(a){}};var Bb=0,Cb={},Db={0:200,1223:204},Eb=n.ajaxSettings.xhr();a.attachEvent&&a.attachEvent("onunload",function(){for(var a in Cb)Cb[a]()}),k.cors=!!Eb&&"withCredentials"in Eb,k.ajax=Eb=!!Eb,n.ajaxTransport(function(a){var b;return k.cors||Eb&&!a.crossDomain?{send:function(c,d){var e,f=a.xhr(),g=++Bb;if(f.open(a.type,a.url,a.async,a.username,a.password),a.xhrFields)for(e in a.xhrFields)f[e]=a.xhrFields[e];a.mimeType&&f.overrideMimeType&&f.overrideMimeType(a.mimeType),a.crossDomain||c["X-Requested-With"]||(c["X-Requested-With"]="XMLHttpRequest");for(e in c)f.setRequestHeader(e,c[e]);b=function(a){return function(){b&&(delete Cb[g],b=f.onload=f.onerror=null,"abort"===a?f.abort():"error"===a?d(f.status,f.statusText):d(Db[f.status]||f.status,f.statusText,"string"==typeof f.responseText?{text:f.responseText}:void 0,f.getAllResponseHeaders()))}},f.onload=b(),f.onerror=b("error"),b=Cb[g]=b("abort");try{f.send(a.hasContent&&a.data||null)}catch(h){if(b)throw h}},abort:function(){b&&b()}}:void 0}),n.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/(?:java|ecma)script/},converters:{"text script":function(a){return n.globalEval(a),a}}}),n.ajaxPrefilter("script",function(a){void 0===a.cache&&(a.cache=!1),a.crossDomain&&(a.type="GET")}),n.ajaxTransport("script",function(a){if(a.crossDomain){var b,c;return{send:function(d,e){b=n("<script>").prop({async:!0,charset:a.scriptCharset,src:a.url}).on("load error",c=function(a){b.remove(),c=null,a&&e("error"===a.type?404:200,a.type)}),l.head.appendChild(b[0])},abort:function(){c&&c()}}}});var Fb=[],Gb=/(=)\?(?=&|$)|\?\?/;n.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var a=Fb.pop()||n.expando+"_"+cb++;return this[a]=!0,a}}),n.ajaxPrefilter("json jsonp",function(b,c,d){var e,f,g,h=b.jsonp!==!1&&(Gb.test(b.url)?"url":"string"==typeof b.data&&!(b.contentType||"").indexOf("application/x-www-form-urlencoded")&&Gb.test(b.data)&&"data");return h||"jsonp"===b.dataTypes[0]?(e=b.jsonpCallback=n.isFunction(b.jsonpCallback)?b.jsonpCallback():b.jsonpCallback,h?b[h]=b[h].replace(Gb,"$1"+e):b.jsonp!==!1&&(b.url+=(db.test(b.url)?"&":"?")+b.jsonp+"="+e),b.converters["script json"]=function(){return g||n.error(e+" was not called"),g[0]},b.dataTypes[0]="json",f=a[e],a[e]=function(){g=arguments},d.always(function(){a[e]=f,b[e]&&(b.jsonpCallback=c.jsonpCallback,Fb.push(e)),g&&n.isFunction(f)&&f(g[0]),g=f=void 0}),"script"):void 0}),n.parseHTML=function(a,b,c){if(!a||"string"!=typeof a)return null;"boolean"==typeof b&&(c=b,b=!1),b=b||l;var d=v.exec(a),e=!c&&[];return d?[b.createElement(d[1])]:(d=n.buildFragment([a],b,e),e&&e.length&&n(e).remove(),n.merge([],d.childNodes))};var Hb=n.fn.load;n.fn.load=function(a,b,c){if("string"!=typeof a&&Hb)return Hb.apply(this,arguments);var d,e,f,g=this,h=a.indexOf(" ");return h>=0&&(d=n.trim(a.slice(h)),a=a.slice(0,h)),n.isFunction(b)?(c=b,b=void 0):b&&"object"==typeof b&&(e="POST"),g.length>0&&n.ajax({url:a,type:e,dataType:"html",data:b}).done(function(a){f=arguments,g.html(d?n("<div>").append(n.parseHTML(a)).find(d):a)}).complete(c&&function(a,b){g.each(c,f||[a.responseText,b,a])}),this},n.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(a,b){n.fn[b]=function(a){return this.on(b,a)}}),n.expr.filters.animated=function(a){return n.grep(n.timers,function(b){return a===b.elem}).length};var Ib=a.document.documentElement;function Jb(a){return n.isWindow(a)?a:9===a.nodeType&&a.defaultView}n.offset={setOffset:function(a,b,c){var d,e,f,g,h,i,j,k=n.css(a,"position"),l=n(a),m={};"static"===k&&(a.style.position="relative"),h=l.offset(),f=n.css(a,"top"),i=n.css(a,"left"),j=("absolute"===k||"fixed"===k)&&(f+i).indexOf("auto")>-1,j?(d=l.position(),g=d.top,e=d.left):(g=parseFloat(f)||0,e=parseFloat(i)||0),n.isFunction(b)&&(b=b.call(a,c,h)),null!=b.top&&(m.top=b.top-h.top+g),null!=b.left&&(m.left=b.left-h.left+e),"using"in b?b.using.call(a,m):l.css(m)}},n.fn.extend({offset:function(a){if(arguments.length)return void 0===a?this:this.each(function(b){n.offset.setOffset(this,a,b)});var b,c,d=this[0],e={top:0,left:0},f=d&&d.ownerDocument;if(f)return b=f.documentElement,n.contains(b,d)?(typeof d.getBoundingClientRect!==U&&(e=d.getBoundingClientRect()),c=Jb(f),{top:e.top+c.pageYOffset-b.clientTop,left:e.left+c.pageXOffset-b.clientLeft}):e},position:function(){if(this[0]){var a,b,c=this[0],d={top:0,left:0};return"fixed"===n.css(c,"position")?b=c.getBoundingClientRect():(a=this.offsetParent(),b=this.offset(),n.nodeName(a[0],"html")||(d=a.offset()),d.top+=n.css(a[0],"borderTopWidth",!0),d.left+=n.css(a[0],"borderLeftWidth",!0)),{top:b.top-d.top-n.css(c,"marginTop",!0),left:b.left-d.left-n.css(c,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){var a=this.offsetParent||Ib;while(a&&!n.nodeName(a,"html")&&"static"===n.css(a,"position"))a=a.offsetParent;return a||Ib})}}),n.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(b,c){var d="pageYOffset"===c;n.fn[b]=function(e){return J(this,function(b,e,f){var g=Jb(b);return void 0===f?g?g[c]:b[e]:void(g?g.scrollTo(d?a.pageXOffset:f,d?f:a.pageYOffset):b[e]=f)},b,e,arguments.length,null)}}),n.each(["top","left"],function(a,b){n.cssHooks[b]=ya(k.pixelPosition,function(a,c){return c?(c=xa(a,b),va.test(c)?n(a).position()[b]+"px":c):void 0})}),n.each({Height:"height",Width:"width"},function(a,b){n.each({padding:"inner"+a,content:b,"":"outer"+a},function(c,d){n.fn[d]=function(d,e){var f=arguments.length&&(c||"boolean"!=typeof d),g=c||(d===!0||e===!0?"margin":"border");return J(this,function(b,c,d){var e;return n.isWindow(b)?b.document.documentElement["client"+a]:9===b.nodeType?(e=b.documentElement,Math.max(b.body["scroll"+a],e["scroll"+a],b.body["offset"+a],e["offset"+a],e["client"+a])):void 0===d?n.css(b,c,g):n.style(b,c,d,g)},b,f?d:void 0,f,null)}})}),n.fn.size=function(){return this.length},n.fn.andSelf=n.fn.addBack,"function"==typeof define&&define.amd&&define('deps/jquery',['require'],function(require){return n});var Kb=a.jQuery,Lb=a.$;return n.noConflict=function(b){return a.$===n&&(a.$=Lb),b&&a.jQuery===n&&(a.jQuery=Kb),n},typeof b===U&&(a.jQuery=a.$=n),n});
;
var define,require,esl;!function(n){function e(n){p(n,N)||(_[n]=1)}function r(n,e){function r(n){0===n.indexOf(".")&&i.push(n)}var i=[];if("string"==typeof n?r(n):D(n,function(n){r(n)}),i.length>0)throw new Error("[REQUIRE_FATAL]Relative ID is not allowed in global require: "+i.join(", "));var o=P.waitSeconds;return o&&n instanceof Array&&(T&&clearTimeout(T),T=setTimeout(t,1e3*o)),H(n,e)}function t(){function n(a,u){if(!o[a]&&!p(a,N)){o[a]=1,p(a,L)||t[a]||(t[a]=1,e.push(a));var f=F[a];f?u&&(t[a]||(t[a]=1,e.push(a)),D(f.depMs,function(e){n(e.absId,e.hard)})):i[a]||(i[a]=1,r.push(a))}}var e=[],r=[],t={},i={},o={};for(var a in _)n(a,1);if(e.length||r.length)throw new Error("[MODULE_TIMEOUT]Hang( "+(e.join(", ")||"none")+" ) Miss( "+(r.join(", ")||"none")+" )")}function i(n){D(Q,function(e){u(n,e.deps,e.factory)}),Q.length=0}function o(n,e,r){if(null==r&&(null==e?(r=n,n=null):(r=e,e=null,n instanceof Array&&(e=n,n=null))),null!=r){var t=window.opera;if(!n&&document.attachEvent&&(!t||"[object Opera]"!==t.toString())){var i=O();n=i&&i.getAttribute("data-require-id")}n?u(n,e,r):Q[0]={deps:e,factory:r}}}function a(){var n=P.config[this.id];return n&&"object"==typeof n?n:{}}function u(n,e,r){F[n]||(F[n]={id:n,depsDec:e,deps:e||["require","exports","module"],factoryDeps:[],factory:r,exports:{},config:a,state:z,require:M(n),depMs:[],depMkv:{},depRs:[]})}function f(n){var e=F[n];if(e&&!p(n,B)){var r=e.deps,t=e.factory,i=0;"function"==typeof t&&(i=Math.min(t.length,r.length),!e.depsDec&&t.toString().replace(/(\/\*([\s\S]*?)\*\/|([^:]|^)\/\/(.*)$)/gm,"").replace(/require\(\s*(['"])([^'"]+)\1\s*\)/g,function(n,e,t){r.push(t)}));var o=[],a=[];D(r,function(r,t){var u,f,c=S(r),s=q(c.mod,n);s&&!C[s]?(c.res&&(f={id:r,mod:s,res:c.res},a.push(r),e.depRs.push(f)),u=e.depMkv[s],u||(u={id:c.mod,absId:s,hard:i>t},e.depMs.push(u),e.depMkv[s]=u,o.push(s))):u={absId:s},i>t&&e.factoryDeps.push(f||u)}),e.state=B,l(n),m(o),a.length&&e.require(a,function(){D(e.depRs,function(e){e.absId||(e.absId=q(e.id,n))}),c()})}}function c(){for(var n in _)f(n),s(n),d(n)}function s(n){function e(n){if(f(n),!p(n,B))return!1;if(p(n,L)||r[n])return!0;r[n]=1;var t=F[n],i=!0;return D(t.depMs,function(n){return i=e(n.absId)}),i&&D(t.depRs,function(n){return i=!!n.absId}),i&&!p(n,L)&&(t.state=L),i}var r={};e(n)}function l(e){function r(){if(!t&&i.state===L){t=1;var r=1;if(D(i.factoryDeps,function(n){var e=n.absId;return C[e]?void 0:(d(e),r=p(e,N))}),r){try{var o=i.factory,a="function"==typeof o?o.apply(n,v(i.factoryDeps,{require:i.require,exports:i.exports,module:i})):o;null!=a&&(i.exports=a),i.invokeFactory=null}catch(u){if(/^\[MODULE_MISS\]"([^"]+)/.test(u.message)){var f=i.depMkv[RegExp.$1];return f&&(f.hard=1),void(t=0)}throw u}g(e)}}}var t,i=F[e];i.invokeFactory=r}function p(n,e){return F[n]&&F[n].state>=e}function d(n){var e=F[n];e&&e.invokeFactory&&e.invokeFactory()}function v(n,e){var r=[];return D(n,function(n,t){"object"==typeof n&&(n=n.absId),r[t]=e[n]||F[n].exports}),r}function h(n,e){if(p(n,N))return void e();var r=G[n];r||(r=G[n]=[]),r.push(e)}function g(n){var e=F[n];e.state=N,delete _[n];for(var r=G[n]||[],t=r.length;t--;)r[t]();r.length=0,G[n]=null}function m(e,r,t){function i(){if("function"==typeof r&&!o){var t=1;D(e,function(n){return C[n]?void 0:t=!!p(n,N)}),t&&(o=1,r.apply(n,v(e,C)))}}var o=0;D(e,function(n){C[n]||p(n,N)||(h(n,i),(n.indexOf("!")>0?b:y)(n,t))}),i()}function y(e){function r(){var n=X[e];R(n||e,t)}function t(){if(a){var r;"function"==typeof a.init&&(r=a.init.apply(n,v(u,C))),null==r&&a.exports&&(r=n,D(a.exports.split("."),function(n){return r=r[n],!!r})),o(e,u,r||{})}else i(e);c()}if(!J[e]&&!F[e]){J[e]=1;var a=P.shim[e];a instanceof Array&&(P.shim[e]=a={deps:a});var u=a&&(a.deps||[]);u?(D(u,function(n){P.shim[n]||(P.shim[n]={})}),H(u,r)):r()}}function b(n,e){function r(e){f.exports=e||!0,g(n)}function t(t){var i=e?F[e].require:H;t.load(u.res,i,r,a.call({id:n}))}if(!F[n]){var o=X[n];if(o)return void y(o);var u=S(n),f={id:n,state:B};F[n]=f,r.fromText=function(n,e){new Function(e)(),i(n)},t(H(u.mod))}}function x(n,e){var r=U(n,1,e);return r.sort($),r}function k(){function n(n){X[A(n)]=e}P.baseUrl=P.baseUrl.replace(/\/$/,"")+"/",K=x(P.paths),W=x(P.map,1),D(W,function(n){n.v=x(n.v)}),V=[],D(P.packages,function(n){var e=n;"string"==typeof n&&(e={name:n.split("/")[0],location:n,main:"main"}),e.location=e.location||e.name,e.main=(e.main||"main").replace(/\.js$/i,""),e.reg=j(e.name),V.push(e)}),V.sort($),Y=x(P.urlArgs,1),X={};for(var e in P.bundles)D(P.bundles[e],n)}function E(n,e,r){D(e,function(e){return e.reg.test(n)?(r(e.v,e.k,e),!1):void 0})}function w(n,e){var r=/(\.[a-z0-9]+)$/i,t=/(\?[^#]*)$/,i="",o=n,a="";t.test(n)&&(a=RegExp.$1,n=n.replace(t,"")),r.test(n)&&(i=RegExp.$1,o=n.replace(r,"")),null!=e&&(o=q(o,e));var u,f=o;return E(o,K,function(n,e){f=f.replace(e,n),u=1}),u||E(o,V,function(n,e,r){f=f.replace(r.name,r.location)}),/^([a-z]{2,10}:\/)?\//i.test(f)||(f=P.baseUrl+f),f+=i+a,E(o,Y,function(n){f+=(f.indexOf("?")>0?"&":"?")+n}),f}function M(n){function r(r,i){if("string"==typeof r){if(!t[r]){var o=q(r,n);if(d(o),!p(o,N))throw new Error('[MODULE_MISS]"'+o+'" is not exists!');t[r]=F[o].exports}return t[r]}if(r instanceof Array){var a=[],u=[];D(r,function(r,t){var i=S(r),o=q(i.mod,n),f=i.res,c=o;if(f){var s=o+"!"+f;0!==f.indexOf(".")&&X[s]?o=c=s:c=null}u[t]=c,e(o),a.push(o)}),m(a,function(){D(u,function(t,i){null==t&&(t=u[i]=q(r[i],n),e(t))}),m(u,i,n),c()},n),c()}}var t={};return r.toUrl=function(e){return w(e,n||"")},r}function q(n,e){if(!n)return"";e=e||"";var r=S(n);if(!r)return n;var t=r.res,i=I(r.mod,e);if(E(e,W,function(n){E(i,n,function(n,e){i=i.replace(e,n)})}),i=A(i),t){var o=p(i,N)&&H(i);t=o&&o.normalize?o.normalize(t,function(n){return q(n,e)}):q(t,e),i+="!"+t}return i}function A(n){return D(V,function(e){var r=e.name;return r===n?(n=r+"/"+e.main,!1):void 0}),n}function I(n,e){if(0===n.indexOf(".")){var r=e.split("/"),t=n.split("/"),i=r.length-1,o=t.length,a=0,u=0;n:for(var f=0;o>f;f++)switch(t[f]){case"..":if(!(i>a))break n;a++,u++;break;case".":u++;break;default:break n}return r.length=i-a,t=t.slice(u),r.concat(t).join("/")}return n}function S(n){var e=n.split("!");return e[0]?{mod:e[0],res:e[1]}:void 0}function U(n,e,r){var t=[];for(var i in n)if(n.hasOwnProperty(i)){var o={k:i,v:n[i]};t.push(o),e&&(o.reg="*"===i&&r?/^/:j(i))}return t}function O(){if(Z)return Z;if(ne&&"interactive"===ne.readyState)return ne;for(var n=document.getElementsByTagName("script"),e=n.length;e--;){var r=n[e];if("interactive"===r.readyState)return ne=r,r}}function R(n,e){function r(){var n=t.readyState;("undefined"==typeof n||/^(loaded|complete)$/.test(n))&&(t.onload=t.onreadystatechange=null,t=null,e())}var t=document.createElement("script");t.setAttribute("data-require-id",n),t.src=w(n+".js"),t.async=!0,t.readyState?t.onreadystatechange=r:t.onload=r,Z=t,re?ee.insertBefore(t,re):ee.appendChild(t),Z=null}function j(n){return new RegExp("^"+n+"(/|$)")}function D(n,e){if(n instanceof Array)for(var r=0,t=n.length;t>r&&e(n[r],r)!==!1;r++);}function $(n,e){var r=n.k||n.name,t=e.k||e.name;return"*"===t?-1:"*"===r?1:t.length-r.length}var T,F={},z=1,B=2,L=3,N=4,_={},C={require:r,exports:1,module:1},H=M(),P={baseUrl:"./",paths:{},config:{},map:{},packages:[],shim:{},waitSeconds:0,bundles:{},urlArgs:{}};r.version="2.0.6",r.loader="esl",r.toUrl=H.toUrl;var Q=[];o.amd={};var G={},J={};r.config=function(n){if(n){for(var e in P){var r=n[e],t=P[e];if(r)if("urlArgs"===e&&"string"==typeof r)P.urlArgs["*"]=r;else if(t instanceof Array)t.push.apply(t,r);else if("object"==typeof t)for(var i in r)t[i]=r[i];else P[e]=r}k()}},k();var K,V,W,X,Y,Z,ne,ee=document.getElementsByTagName("head")[0],re=document.getElementsByTagName("base")[0];re&&(ee=re.parentNode),define||(define=o,require||(require=r),esl=r)}(this);;
window.require.config({
    paths: {
        'searchbox/openjs/aio': '//m.baidu.com/static/searchbox/openjs/aio.js?v=201606'
    }
});
;
/**
 * @file 事件触发机制
 * @author luofei02
 * @date 2015-12-09
 */
define('deps/emit', ['require'], function (require) {
    function EventEmitter() {}

    var proto = EventEmitter.prototype;

    function indexOfListener(listeners, listener) {
        var i = listeners.length;
        while (i--) {
            if (listeners[i].listener === listener) {
                return i;
            }
        }

        return -1;
    }

    proto.addEventListener = proto.on = function (evt, listener) {
        var listeners = this._getEventListenersAsObject(evt);
        var isMulti = typeof listener === 'object';

        for (var key in listeners) {
            if (listeners.hasOwnProperty(key) && indexOfListener(listeners[key], listener) === -1) {
                listeners[key].push(isMulti ? listener : {
                    listener: listener,
                    once: false
                });
            }
        }

        return this;
    };

    proto.one = function (evt, listener) {
        return this.on(evt, {
            listener: listener,
            once: true
        });
    };

    proto.removeEventListener = proto.off = function (evt, listener) {
        var listeners = this._getEventListenersAsObject(evt);

        for (var key in listeners) {
            if (listeners.hasOwnProperty(key)) {
                var index = indexOfListener(listeners[key], listener);

                if (index !== -1) {
                    listeners[key].splice(index, 1);
                }
            }
        }

        return this;
    };

    proto.trigger = function (evt, args) {
        var listenersMap = this._getEventListenersAsObject(evt);
        var response;

        for (var key in listenersMap) {
            if (listenersMap.hasOwnProperty(key)) {
                var listeners = listenersMap[key].slice(0);
                var i = listeners.length;
                while (i--) {
                    var listener = listeners[i];

                    if (listener.once === true) {
                        this.off(evt, listener.listener);
                    }

                    response = listener.listener.apply(this, args || []);
                }
            }
        }

        return this;
    };

    proto._getEventListenersAsObject = function (evt) {
        var listeners = this._getEventListeners(evt);
        var response;

        if (listeners instanceof Array) {
            response = {};
            response[evt] = listeners;
        }

        return response || listeners;
    };

    proto._getEventListeners = function (evt) {
        var events = this._getEvents();
        return events[evt] || (events[evt] = []);
    };

    proto._getEvents = function () {
        return this._events || (this._events = {});
    };

    return EventEmitter;
});
;

define('observable', ['require'], function(require){
    function Observable(){
        this.handlers_ = []; 
    }

    /**
    * Adds the observer to this instance.
    * @param {function(TYPE)} handler Observer's handler.
    * @return {!Unlisten}
    */

    Observable.prototype.add = function(handler){
        var _this = this;
        this.handlers_.push(handler);
        return function () {
            _this.remove(handler);
        };
    }

    /**
    * Removes the observer from this instance.
    * @param {function(TYPE)} handler Observer's instance.
    */

    Observable.prototype.remove = function(handler){
        for (var i = 0; i < this.handlers_.length; i++) {
            if (handler == this.handlers_[i]) {
                this.handlers_.splice(i, 1);
                break;
            }
        }
    }
    /**
    * Fires an event. All observers are called.
    * @param {TYPE} event
    */

    Observable.prototype.fire = function(){
        var args = Array.prototype.slice.call(arguments);
        this.handlers_.forEach(function (handler) {
            handler.apply(null,args);
        });

    }
    /**
    * Returns number of handlers. Mostly needed for tests.
    * @return {number}
    */

    Observable.prototype.getHandlerCount = function(){

        return this.handlers_.length;
    }
    return new Observable();
});
;
var platform = (function() {

    function isIos() {
        return /iPhone|iPad|iPod/i.test(window.navigator.userAgent); 
    }

    function isSafari() {
        return /Safari/i.test(window.navigator.userAgent) && !isChrome(); 
    }
    function isChrome() {
        return /Chrome|CriOS/i.test(window.navigator.userAgent);
    }
    function isUc() {
        return /UCBrowser/i.test(window.navigator.userAgent);
    }

    return {
        isIos:isIos,
        isSafari:isSafari,
        isChrome:isChrome,
        isUc: isUc,
        needSpecialScroll: isIos() && !isUc()
    }
})(); 
;
define('message_center', ['require', 'observable'], function(require){
    /**
    * @des 消息中心 如果初始化时候，不指定target，则只会监听当前页面，不可以发送请求，否则会报错
    * @author shenzhou@baidu.com
    * @version 1.0
    * @copyright 2015 Baidu.com, Inc. All Rights Reserved
    */
    //发送postMessage时候，目标response的回掉函数
    responseHandlers = {};
    var messageObserver = require('observable');

    var isListener = false;
    var sentinel = '__MIP__';
    var sentinelRequest = sentinel + 'REQUEST'; 
    var sentinelResponse = sentinel + 'RESPONSE'; 
    /**
    * {send request to targe frame}
    * 
    * @param data {type json} 
    * @param responseHandler {type function} 
    * @return nothing return
    */
    function sendRequest(target,data,responseHandler){
        var sessionID = ((new Date()).getTime()+parseInt(Math.random()*1000)).toString(); 
        data.requestData = {};
        data.sentinel = sentinelRequest;
        data.requestData.sessionID = sessionID;
        if(typeof responseHandler != undefined){
            responseHandlers[sessionID] = responseHandler;
        }
        target.postMessage(data, '*');

        //TODO 响应页面消息逻辑，需要额外函数处理
    }

    function onMessage(messageHandler){
        if(!isListener) {
            window.addEventListener('message', function(event){
                messageFire(event);
            } , false);
            isListener = true;
        }
        messageObserver.add(messageHandler);
    }

    function messageFire(event){
        var data = event.data;
        if(data.sentinel == sentinelRequest){
            messageObserver.fire(event);
        } else if(data.sentinel == sentinelResponse){
            var sessionID =  data.sessionID;
            if(responseHandlers[sessionID]){
                responseHandlers[sessionID](event);
            } 
        }
    }

    function sendResponse(target, requestData, responseData) {
        var sessionID = requestData.sessionID;
        var data = responseData;
        data.sessionID = sessionID;
        data.sentinel = sentinelResponse;
        target.postMessage(data, '*');
    }
    return {
        sendRequest:sendRequest,
        sendResponse:sendRequest,
        onMessage:onMessage
    };
});
;
define('gesture', ['require', 'observable'], function(require){
    
    var state = {
    }
    
    var gestureObserver = require('observable');
    
    function message(data,event){
       gestureObserver.fire(data,event);
    }
    
    function bind(handler){
        gestureObserver.add(handler);
    }
    
    function unbind(handler){
        gestureObserver.remove(handler);
    }
     
    var point = {
        "startX" : 0,
        "startY" : 0,
        "lastX" : 0,
        "lastY" : 0,
        "startT" : 0
    };

    
    function touchStart(evt){
        try {
            var touch = evt.touches[0];
            point.startX = Number(touch.screenX);
            point.startY = Number(touch.screenY);
            point.startT = evt.timeStamp;
            var data = {"event" : "touchstart", "x" : point.startX, "y" : point.startY, "_t" : evt.timeStamp};
            message(evt,data);
        }
        catch (e) {

        }
    }
    
    function touchEnd(evt){

        try {
            nChangX = evt.changedTouches[0].screenX;
            nChangY = evt.changedTouches[0].screenY;

            var distX = nChangX - point.startX;
            var distY = nChangY - point.startY;

            var speed = (evt.timeStamp - point.startT)/distX;
            message(evt, {"event" : "touchend", "x" : distX, "y" : distY, "_t" : evt.timeStamp, "speed" : speed});

        }
        catch (e) {

        }

    }

    function touchMove(evt){
        try {
            var touch = evt.touches[0]; 
            var x = Number(touch.screenX);
            var y = Number(touch.screenY);
            var data = {"event" : "touchmove", "x" : x - point.startX, "y" : y - point.startY, "_t" : evt.timeStamp};
            message(evt,data);

        }
        catch (e) {

        }
    }

    //绑定事件
    var isBind = false;
    function bindEvent(){
        if(!isBind) {
            window.addEventListener('touchstart', touchStart, false);
            window.addEventListener('touchmove', touchMove, false);
            window.addEventListener('touchend', touchEnd, false);
            isBind = true;
        }
    }
    
    function init(){
        bindEvent();
    }
    return {
        init:init,
        bind:bind,
        unbind:unbind
    }
});
;
define('viewport', ['require', 'observable', 'gesture'], function(require){

    /**
        界面可视窗口模块，提供窗口各属性，以及窗口整体scroll、resize等事件接口
    */
    var Viewport = {};

    /**
        Viewer对象，用于做父页面和子页面的通信代理
    */
    var viewer  = null;

    var _scrollTop = null,
        _scrollLeft = null,
        _size = null,
        _scrollCount = 0,
        _scrollTracking = false,
        _swapTracking = false,
        _isViewportNormal = true,
        _changeObservable = require('observable'),
        _scrollObservable = require('observable'),
        _touchObservable = require('observable');

    var gesture = require('gesture');

    gesture.init();

    Viewport.getTop = function() {
        return this.getScrollTop();
    };

    Viewport.getScrollTop = function() {
        _scrollTop = $(window).scrollTop();
        return _scrollTop;
    };

    Viewport.getScrollLeft = function() {
        if(_scrollLeft == null) {
            _scrollLeft = $(window).scrollLeft();
        }
        return _scrollLeft;
    };

    /**
     *  
     * */
    Viewport.setScrollTop = function(scrollPos) {
        _scrollTop = null;
        $(window).scrollTop(scrollPos);
    };

    /**
     * Returns the size of the viewport.
     * @return {!{width: number, height: number}}
    */
    Viewport.getSize = function() {
        if (_size) {
            return _size;
        }
        return _size = {
            "width" : $(window).width(),
            "height" : $(window).height()
        };
    };

    Viewport.getWidth = function() {
        return this.getSize().width;
    };

    Viewport.getScrollWidth = function() {
        return _getScrollingElement.scrollWidth;
    };

    Viewport.onChanged = function(handler) {
        return _changeObservable.add(handler);
    };

    Viewport.onScroll = function(handler) {
        return _scrollObservable.add(handler);
    };

    Viewport.onTouch = function(handler) {
        return _touchObservable.add(handler);
    }

    Viewport.resetTouchZoom = function(){
        var windowHeight = window.innerHeight;
        var documentHeight = window.document.documentElement.clientHeight;
        
        if(windowHeight && documentHeight && windowHeight === documentHeight) {
            return;
        }

        if(disableTouchZoom()) {
            //restore touch zoom
        }

    };

    Viewport.disableTouchZoom = function() {
        var viewportMeta = _getViewportMeta();
    };

    Viewport.setViewportNormal = function(flag) {
        _isViewportNormal = flag;
    };

    function _touch(evt, data) {
         if(_isViewportNormal) {
            //正常浏览时执行
            //此处应该调用recognizeGesture来识别
            _recognizeGesture(evt, data);
         } else {
            //图片浏览、全屏视频播放时，不触发viewport的touch
            return;
         }
    }

    function _recognizeGesture(evt, data) {


        if(typeof data === "object") {
            var eventType = data.event;

            switch(eventType) {
                case "touchstart" :
                    window.parent.postMessage(data,'*');
                    break;
                case "touchmove" :

                    if (Math.abs(data.x) > 15 && Math.abs(data.x/data.y) >= 3 && !_scrollTracking ) {
                        evt.preventDefault(); //阻止触摸时浏览器的缩放、滚动条滚动等
                        _swapTracking = true;
                        window.parent.postMessage(data,'*');
                    } else if(Math.abs(data.y/data.x) >= 3 && !_swapTracking) {
                        _scrollTracking = true; 
                    }
                    if(data.y != 0 && _swapTracking) {
                        evt.preventDefault && evt.preventDefault();
                        evt.stopPropagation && evt.stopPropagation();
                    }
                    break;
                case "touchend" :
                    window.parent.postMessage(data,'*');
                    _swapTracking = false;
                    _scrollTracking = false;
                    break;
            } 
        }
    }

    function _changed() {
        var size = Viewport.getSize();
        var scrollTop = Viewport.getScrollTop();
        _changeObservable.fire({
            top: scrollTop,
            width: size.width,
            height: size.height
        });
    }

    function _getScrollingElement() {
        var doc = this.win.document;
        if (doc.scrollingElement) {
          return doc.scrollingElement;
        }
        if (doc.body) {
          return doc.body;
        }
        return doc.documentElement;
    }

    /**
     *  触发scroll，并向observerfire事件
     * */
    function _scroll() {

        _scrollCount ++;
        _scrollObservable.fire();
        _scrollLeft = Viewport.getScrollLeft();
        
        /*
        if(_scrollTracking) {
            return;
        }
        */

        var newScrollTop = Viewport.getScrollTop();
        if(newScrollTop < 0) {
            return;
        }

        //正在进行scroll，scrollTracking设为true
        //TODO 
        //计算滚动速度，速度为0的时候，
        //_scrollTracking = true;
        _scrollTop = newScrollTop;

    }

    Viewport.hasScrolled = function() {
        return _scrollCount > 0;
    };

    function _init() {
        $(window).on("scroll",_scroll);
        
        if (window.parent !== window && platform.needSpecialScroll) {
            $('body').on('scroll', _scroll);
        }
        gesture.bind(_touch);
        return Viewport;
    }

    return _init();

});
;
/**
 * @file MIP: mobile instant baidu
 * @author shenzhou@baidu.com
 * @version 1.0
 * @copyright 2015 Baidu.com, Inc. All Rights Reserved
 */
define('mip', ['require', 'gesture', 'viewport', 'buildins/registerMipElement', 'buildins/mip-gif', 'buildins/mip-img'], function(require){
    /**
    * 初始化相关JS
    */

    /**
     *  初始化touch手势
     * */
    var gesture = require('gesture');
    gesture.init();

    /**
     *  初始化视图
     * */
    var viewport = require('viewport');

    /*
    if (window.parent && window.parent != window){
        var target = window.parent;
        var pageMessageCenter = require('message_center');
        gesture.onChange(function(event){
            //console.log("in iframe: start postMessage");
            //console.log(event);
            pageMessageCenter.sendRequest(target,event);
        });
    }
    */

    /**
     *  订阅相关逻辑
     *  TODO:封装成模块
     * */
    /*
    function subscribe(){
        var isSub = false;
        $('.subscrib-action').on("click",function(ev){
            var clickEv = ev;
            $this = $(this);
            $this.children("div").fadeOut(400,"linear",function(){
                $this.children(".subscrib-ok").fadeIn(200);
                clickEv.stopPropagation();
            });
        });
    }
    $(subscribe);
    */

    /**
     *  web compenent组件初始化
     * */
    require('buildins/registerMipElement');

    /***
     *  注册统计组件
     * /
    require(['dom/mip-pix'],function(mipPix){
        window.registerMipElement('mip-pix',mipPix);
    });

    /*
     *注册mip-gif组件
     */
    window.registerMipElement('mip-gif', require('buildins/mip-gif'));

    /*
     * 注册mip-img组件
     */
    window.registerMipElement('mip-img',require('buildins/mip-img'));


    //页面初始化后，处理可视区域内元素
    $(function(){
        window.setTimeout(function(){
            $('.mip-element').each(function(){
                this.inviewCallback();
            });
        },100);
    });

    //元素绑定scroll，用于lazy load等场景
    viewport.onScroll(function(){
        $('.mip-element').each(function(){
            this.inviewCallback();
        });
    });

    /**
     *  初始化图片浏览组件，并处理viewport中的事件冲突
     * */
    /*
    require(['dom/mip-carousel'],function(mipCarousel){
        mipCarousel.initData();
        $(window).bind("mip.carousel.open", function() {
            viewport.setViewportNormal(false);
        });
        $(window).bind("mip.carousel.close", function() {
            viewport.setViewportNormal(true);
        });
    });
    */

   /*
    require(['dom/img-viewer'], function (mipViewer) {
        new mipViewer();
    });
    */

});
;
/*!
Copyright (C) 2014-2015 by WebReflection

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.

*/
(function(window, document, Object, REGISTER_ELEMENT){'use strict';

// in case it's there or already patched
if (REGISTER_ELEMENT in document) return;

// DO NOT USE THIS FILE DIRECTLY, IT WON'T WORK
// THIS IS A PROJECT BASED ON A BUILD SYSTEM
// THIS FILE IS JUST WRAPPED UP RESULTING IN
// build/document-register-element.js
// and its .max.js counter part

var
  // IE < 11 only + old WebKit for attributes + feature detection
  EXPANDO_UID = '__' + REGISTER_ELEMENT + (Math.random() * 10e4 >> 0),

  // shortcuts and costants
  ATTACHED = 'attached',
  DETACHED = 'detached',
  EXTENDS = 'extends',
  ADDITION = 'ADDITION',
  MODIFICATION = 'MODIFICATION',
  REMOVAL = 'REMOVAL',
  DOM_ATTR_MODIFIED = 'DOMAttrModified',
  DOM_CONTENT_LOADED = 'DOMContentLoaded',
  DOM_SUBTREE_MODIFIED = 'DOMSubtreeModified',
  PREFIX_TAG = '<',
  PREFIX_IS = '=',

  // valid and invalid node names
  validName = /^[A-Z][A-Z0-9]*(?:-[A-Z0-9]+)+$/,
  invalidNames = [
    'ANNOTATION-XML',
    'COLOR-PROFILE',
    'FONT-FACE',
    'FONT-FACE-SRC',
    'FONT-FACE-URI',
    'FONT-FACE-FORMAT',
    'FONT-FACE-NAME',
    'MISSING-GLYPH'
  ],

  // registered types and their prototypes
  types = [],
  protos = [],

  // to query subnodes
  query = '',

  // html shortcut used to feature detect
  documentElement = document.documentElement,

  // ES5 inline helpers || basic patches
  indexOf = types.indexOf || function (v) {
    for(var i = this.length; i-- && this[i] !== v;){}
    return i;
  },

  // other helpers / shortcuts
  OP = Object.prototype,
  hOP = OP.hasOwnProperty,
  iPO = OP.isPrototypeOf,

  defineProperty = Object.defineProperty,
  gOPD = Object.getOwnPropertyDescriptor,
  gOPN = Object.getOwnPropertyNames,
  gPO = Object.getPrototypeOf,
  sPO = Object.setPrototypeOf,

  // jshint proto: true
  hasProto = !!Object.__proto__,

  // used to create unique instances
  create = Object.create || function Bridge(proto) {
    // silly broken polyfill probably ever used but short enough to work
    return proto ? ((Bridge.prototype = proto), new Bridge()) : this;
  },

  // will set the prototype if possible
  // or copy over all properties
  setPrototype = sPO || (
    hasProto ?
      function (o, p) {
        o.__proto__ = p;
        return o;
      } : (
    (gOPN && gOPD) ?
      (function(){
        function setProperties(o, p) {
          for (var
            key,
            names = gOPN(p),
            i = 0, length = names.length;
            i < length; i++
          ) {
            key = names[i];
            if (!hOP.call(o, key)) {
              defineProperty(o, key, gOPD(p, key));
            }
          }
        }
        return function (o, p) {
          do {
            setProperties(o, p);
          } while ((p = gPO(p)) && !iPO.call(p, o));
          return o;
        };
      }()) :
      function (o, p) {
        for (var key in p) {
          o[key] = p[key];
        }
        return o;
      }
  )),

  // DOM shortcuts and helpers, if any

  MutationObserver = window.MutationObserver ||
                     window.WebKitMutationObserver,

  HTMLElementPrototype = (
    window.HTMLElement ||
    window.Element ||
    window.Node
  ).prototype,

  IE8 = !iPO.call(HTMLElementPrototype, documentElement),

  isValidNode = IE8 ?
    function (node) {
      return node.nodeType === 1;
    } :
    function (node) {
      return iPO.call(HTMLElementPrototype, node);
    },

  targets = IE8 && [],

  cloneNode = HTMLElementPrototype.cloneNode,
  setAttribute = HTMLElementPrototype.setAttribute,
  removeAttribute = HTMLElementPrototype.removeAttribute,

  // replaced later on
  createElement = document.createElement,

  // shared observer for all attributes
  attributesObserver = MutationObserver && {
    attributes: true,
    characterData: true,
    attributeOldValue: true
  },

  // useful to detect only if there's no MutationObserver
  DOMAttrModified = MutationObserver || function(e) {
    doesNotSupportDOMAttrModified = false;
    documentElement.removeEventListener(
      DOM_ATTR_MODIFIED,
      DOMAttrModified
    );
  },

  // will both be used to make DOMNodeInserted asynchronous
  asapQueue,
  rAF = window.requestAnimationFrame ||
        window.webkitRequestAnimationFrame ||
        window.mozRequestAnimationFrame ||
        window.msRequestAnimationFrame ||
        function (fn) { setTimeout(fn, 10); },

  // internal flags
  setListener = false,
  doesNotSupportDOMAttrModified = true,
  dropDomContentLoaded = true,

  // needed for the innerHTML helper
  notFromInnerHTMLHelper = true,

  // optionally defined later on
  onSubtreeModified,
  callDOMAttrModified,
  getAttributesMirror,
  observer,

  // based on setting prototype capability
  // will check proto or the expando attribute
  // in order to setup the node once
  patchIfNotAlready,
  patch
;

if (sPO || hasProto) {
    patchIfNotAlready = function (node, proto) {
      if (!iPO.call(proto, node)) {
        setupNode(node, proto);
      }
    };
    patch = setupNode;
} else {
    patchIfNotAlready = function (node, proto) {
      if (!node[EXPANDO_UID]) {
        node[EXPANDO_UID] = Object(true);
        setupNode(node, proto);
      }
    };
    patch = patchIfNotAlready;
}
if (IE8) {
  doesNotSupportDOMAttrModified = false;
  (function (){
    var
      descriptor = gOPD(HTMLElementPrototype, 'addEventListener'),
      addEventListener = descriptor.value,
      patchedRemoveAttribute = function (name) {
        var e = new CustomEvent(DOM_ATTR_MODIFIED, {bubbles: true});
        e.attrName = name;
        e.prevValue = this.getAttribute(name);
        e.newValue = null;
        e[REMOVAL] = e.attrChange = 2;
        removeAttribute.call(this, name);
        this.dispatchEvent(e);
      },
      patchedSetAttribute = function (name, value) {
        var
          had = this.hasAttribute(name),
          old = had && this.getAttribute(name),
          e = new CustomEvent(DOM_ATTR_MODIFIED, {bubbles: true})
        ;
        setAttribute.call(this, name, value);
        e.attrName = name;
        e.prevValue = had ? old : null;
        e.newValue = value;
        if (had) {
          e[MODIFICATION] = e.attrChange = 1;
        } else {
          e[ADDITION] = e.attrChange = 0;
        }
        this.dispatchEvent(e);
      },
      onPropertyChange = function (e) {
        // jshint eqnull:true
        var
          node = e.currentTarget,
          superSecret = node[EXPANDO_UID],
          propertyName = e.propertyName,
          event
        ;
        if (superSecret.hasOwnProperty(propertyName)) {
          superSecret = superSecret[propertyName];
          event = new CustomEvent(DOM_ATTR_MODIFIED, {bubbles: true});
          event.attrName = superSecret.name;
          event.prevValue = superSecret.value || null;
          event.newValue = (superSecret.value = node[propertyName] || null);
          if (event.prevValue == null) {
            event[ADDITION] = event.attrChange = 0;
          } else {
            event[MODIFICATION] = event.attrChange = 1;
          }
          node.dispatchEvent(event);
        }
      }
    ;
    descriptor.value = function (type, handler, capture) {
      if (
        type === DOM_ATTR_MODIFIED &&
        this.attributeChangedCallback &&
        this.setAttribute !== patchedSetAttribute
      ) {
        this[EXPANDO_UID] = {
          className: {
            name: 'class',
            value: this.className
          }
        };
        this.setAttribute = patchedSetAttribute;
        this.removeAttribute = patchedRemoveAttribute;
        addEventListener.call(this, 'propertychange', onPropertyChange);
      }
      addEventListener.call(this, type, handler, capture);
    };
    defineProperty(HTMLElementPrototype, 'addEventListener', descriptor);
  }());
} else if (!MutationObserver) {
  documentElement.addEventListener(DOM_ATTR_MODIFIED, DOMAttrModified);
  documentElement.setAttribute(EXPANDO_UID, 1);
  documentElement.removeAttribute(EXPANDO_UID);
  if (doesNotSupportDOMAttrModified) {
    onSubtreeModified = function (e) {
      var
        node = this,
        oldAttributes,
        newAttributes,
        key
      ;
      if (node === e.target) {
        oldAttributes = node[EXPANDO_UID];
        node[EXPANDO_UID] = (newAttributes = getAttributesMirror(node));
        for (key in newAttributes) {
          if (!(key in oldAttributes)) {
            // attribute was added
            return callDOMAttrModified(
              0,
              node,
              key,
              oldAttributes[key],
              newAttributes[key],
              ADDITION
            );
          } else if (newAttributes[key] !== oldAttributes[key]) {
            // attribute was changed
            return callDOMAttrModified(
              1,
              node,
              key,
              oldAttributes[key],
              newAttributes[key],
              MODIFICATION
            );
          }
        }
        // checking if it has been removed
        for (key in oldAttributes) {
          if (!(key in newAttributes)) {
            // attribute removed
            return callDOMAttrModified(
              2,
              node,
              key,
              oldAttributes[key],
              newAttributes[key],
              REMOVAL
            );
          }
        }
      }
    };
    callDOMAttrModified = function (
      attrChange,
      currentTarget,
      attrName,
      prevValue,
      newValue,
      action
    ) {
      var e = {
        attrChange: attrChange,
        currentTarget: currentTarget,
        attrName: attrName,
        prevValue: prevValue,
        newValue: newValue
      };
      e[action] = attrChange;
      onDOMAttrModified(e);
    };
    getAttributesMirror = function (node) {
      for (var
        attr, name,
        result = {},
        attributes = node.attributes,
        i = 0, length = attributes.length;
        i < length; i++
      ) {
        attr = attributes[i];
        name = attr.name;
        if (name !== 'setAttribute') {
          result[name] = attr.value;
        }
      }
      return result;
    };
  }
}

function loopAndVerify(list, action) {
  for (var i = 0, length = list.length; i < length; i++) {
    verifyAndSetupAndAction(list[i], action);
  }
}

function loopAndSetup(list) {
  for (var i = 0, length = list.length, node; i < length; i++) {
    node = list[i];
    patch(node, protos[getTypeIndex(node)]);
  }
}

function executeAction(action) {
  return function (node) {
    if (isValidNode(node)) {
      verifyAndSetupAndAction(node, action);
      loopAndVerify(
        node.querySelectorAll(query),
        action
      );
    }
  };
}

function getTypeIndex(target) {
  var
    is = target.getAttribute('is'),
    nodeName = target.nodeName.toUpperCase(),
    i = indexOf.call(
      types,
      is ?
          PREFIX_IS + is.toUpperCase() :
          PREFIX_TAG + nodeName
    )
  ;
  return is && -1 < i && !isInQSA(nodeName, is) ? -1 : i;
}

function isInQSA(name, type) {
  return -1 < query.indexOf(name + '[is="' + type + '"]');
}

function onDOMAttrModified(e) {
  var
    node = e.currentTarget,
    attrChange = e.attrChange,
    attrName = e.attrName,
    target = e.target
  ;
  if (notFromInnerHTMLHelper &&
      (!target || target === node) &&
      node.attributeChangedCallback &&
      attrName !== 'style') {
    node.attributeChangedCallback(
      attrName,
      attrChange === e[ADDITION] ? null : e.prevValue,
      attrChange === e[REMOVAL] ? null : e.newValue
    );
  }
}

function onDOMNode(action) {
  var executor = executeAction(action);
  return function (e) {
    asapQueue.push(executor, e.target);
  };
}

function onReadyStateChange(e) {
  if (dropDomContentLoaded) {
    dropDomContentLoaded = false;
    e.currentTarget.removeEventListener(DOM_CONTENT_LOADED, onReadyStateChange);
  }
  loopAndVerify(
    (e.target || document).querySelectorAll(query),
    e.detail === DETACHED ? DETACHED : ATTACHED
  );
  if (IE8) purge();
}

function patchedSetAttribute(name, value) {
  // jshint validthis:true
  var self = this;
  setAttribute.call(self, name, value);
  onSubtreeModified.call(self, {target: self});
}

function setupNode(node, proto) {
  setPrototype(node, proto);
  if (observer) {
    observer.observe(node, attributesObserver);
  } else {
    if (doesNotSupportDOMAttrModified) {
      node.setAttribute = patchedSetAttribute;
      node[EXPANDO_UID] = getAttributesMirror(node);
      node.addEventListener(DOM_SUBTREE_MODIFIED, onSubtreeModified);
    }
    node.addEventListener(DOM_ATTR_MODIFIED, onDOMAttrModified);
  }
  if (node.createdCallback && notFromInnerHTMLHelper) {
    node.created = true;
    node.createdCallback();
    node.created = false;
  }
}

function purge() {
  for (var
    node,
    i = 0,
    length = targets.length;
    i < length; i++
  ) {
    node = targets[i];
    if (!documentElement.contains(node)) {
      targets.splice(i, 1);
      verifyAndSetupAndAction(node, DETACHED);
    }
  }
}

function verifyAndSetupAndAction(node, action) {
  var
    fn,
    i = getTypeIndex(node)
  ;
  if (-1 < i) {
    patchIfNotAlready(node, protos[i]);
    i = 0;
    if (action === ATTACHED && !node[ATTACHED]) {
      node[DETACHED] = false;
      node[ATTACHED] = true;
      i = 1;
      if (IE8 && indexOf.call(targets, node) < 0) {
        targets.push(node);
      }
    } else if (action === DETACHED && !node[DETACHED]) {
      node[ATTACHED] = false;
      node[DETACHED] = true;
      i = 1;
    }
    if (i && (fn = node[action + 'Callback'])) fn.call(node);
  }
}

// set as enumerable, writable and configurable
document[REGISTER_ELEMENT] = function registerElement(type, options) {
  upperType = type.toUpperCase();
  if (!setListener) {
    // only first time document.registerElement is used
    // we need to set this listener
    // setting it by default might slow down for no reason
    setListener = true;
    if (MutationObserver) {
      observer = (function(attached, detached){
        function checkEmAll(list, callback) {
          for (var i = 0, length = list.length; i < length; callback(list[i++])){}
        }
        return new MutationObserver(function (records) {
          for (var
            current, node,
            i = 0, length = records.length; i < length; i++
          ) {
            current = records[i];
            if (current.type === 'childList') {
              checkEmAll(current.addedNodes, attached);
              checkEmAll(current.removedNodes, detached);
            } else {
              node = current.target;
              if (notFromInnerHTMLHelper &&
                  node.attributeChangedCallback &&
                  current.attributeName !== 'style') {
                node.attributeChangedCallback(
                  current.attributeName,
                  current.oldValue,
                  node.getAttribute(current.attributeName)
                );
              }
            }
          }
        });
      }(executeAction(ATTACHED), executeAction(DETACHED)));
      observer.observe(
        document,
        {
          childList: true,
          subtree: true
        }
      );
    } else {
      asapQueue = [];
      rAF(function ASAP() {
        while (asapQueue.length) {
          asapQueue.shift().call(
            null, asapQueue.shift()
          );
        }
        rAF(ASAP);
      });
      document.addEventListener('DOMNodeInserted', onDOMNode(ATTACHED));
      document.addEventListener('DOMNodeRemoved', onDOMNode(DETACHED));
    }

    document.addEventListener(DOM_CONTENT_LOADED, onReadyStateChange);
    document.addEventListener('readystatechange', onReadyStateChange);

    document.createElement = function (localName, typeExtension) {
      var
        node = createElement.apply(document, arguments),
        name = '' + localName,
        i = indexOf.call(
          types,
          (typeExtension ? PREFIX_IS : PREFIX_TAG) +
          (typeExtension || name).toUpperCase()
        ),
        setup = -1 < i
      ;
      if (typeExtension) {
        node.setAttribute('is', typeExtension = typeExtension.toLowerCase());
        if (setup) {
          setup = isInQSA(name.toUpperCase(), typeExtension);
        }
      }
      notFromInnerHTMLHelper = !document.createElement.innerHTMLHelper;
      if (setup) patch(node, protos[i]);
      return node;
    };

    HTMLElementPrototype.cloneNode = function (deep) {
      var
        node = cloneNode.call(this, !!deep),
        i = getTypeIndex(node)
      ;
      if (-1 < i) patch(node, protos[i]);
      if (deep) loopAndSetup(node.querySelectorAll(query));
      return node;
    };
  }

  if (-2 < (
    indexOf.call(types, PREFIX_IS + upperType) +
    indexOf.call(types, PREFIX_TAG + upperType)
  )) {
    throw new Error('A ' + type + ' type is already registered');
  }

  if (!validName.test(upperType) || -1 < indexOf.call(invalidNames, upperType)) {
    throw new Error('The type ' + type + ' is invalid');
  }

  var
    constructor = function () {
      return extending ?
        document.createElement(nodeName, upperType) :
        document.createElement(nodeName);
    },
    opt = options || OP,
    extending = hOP.call(opt, EXTENDS),
    nodeName = extending ? options[EXTENDS].toUpperCase() : upperType,
    i = types.push((extending ? PREFIX_IS : PREFIX_TAG) + upperType) - 1,
    upperType
  ;

  query = query.concat(
    query.length ? ',' : '',
    extending ? nodeName + '[is="' + type.toLowerCase() + '"]' : nodeName
  );

  constructor.prototype = (
    protos[i] = hOP.call(opt, 'prototype') ?
      opt.prototype :
      create(HTMLElementPrototype)
  );

  loopAndVerify(
    document.querySelectorAll(query),
    ATTACHED
  );

  return constructor;
};

}(window, document, Object, 'registerElement'));;
/**
 * 自定义组件基类
 * @exports modulename
 * @author shenzhou@baidu.com
 * @version 1.0
 * @copyright 2015 Baidu.com, Inc. All Rights Reserved
 */
define('buildins/customElement', ['require'], function(require){
   
    function customElement(){
        if(this.init){
        this.init();
        }    
    }
//    var customElement =  Object.create(HTMLElement.prototype); 
       
    customElement.prototype.mipCreatedCallback = function(){
         
    };
    
    customElement.prototype.mipAttachedCallback = function(){
    };
    
    customElement.prototype.mipDetachedCallback = function(){
    
    };

    customElement.prototype.mipAttributeChangedCallback = function(){
    };
    
    //自定义元素进入可视区域的默认处理函数，此处可以覆写，如果有特殊逻辑

    customElement.prototype.inviewCallback = function(){
        if(this.isInviewer()){
            this.build();
        }
    };
   //模板的元素build功能，即元素的默认初始化功能 
    customElement.prototype.build = function(){
    
    };
    
    return customElement;

});
;
/**
 * 自定义组件类注册组件
 * @exports registerMipElement
 * 说明：自定义组件生生命周期如下：
 *      创建节点：执行createCallback
 *      插入节点：执行attachedCallback
 *      渲染接口：build，用户在可视区域内，才会渲染，如果在build里面定义渲染，
 * @author shenzhou@baidu.com
 * @version 1.0
 * @copyright 2015 Baidu.com, Inc. All Rights Reserved
 */
define('buildins/registerMipElement', ['require'], function(require){
    if(window['registerMipElement']){
        return window['registerMipElement'];
    }

    var mipTagList = {};


    function registerElement(name, elementClass){
       if(mipTagList[name]){
            return; 
        }
        mipTagList[name] = 1;
        var elemProto = Object.create(HTMLElement.prototype);
        //创建元素实例时候自动调用
        var implClass = new elementClass();
        //elemProto._implementation = new elementClass();
        $.extend(true,elemProto, implClass);
        elemProto.createdCallback = function(){
            this.classList.add('mip-element');
            this.mipCreatedCallback();
        };
        //向文档中插入实例时候调用
        elemProto.attachedCallback = function(){
            this.mipAttachedCallback();
        };
        //删除实例时候调用
        elemProto.detachedCallback = function(){
            this.mipDetachedCallback();
        };
       //属性变化时候调用
        elemProto.attributeChangedCallback = function(){
            this.mipAttributeChangedCallback();
        };
        elemProto.isInviewer = function(){
            var elmTop = $(this).offset().top;
            var pageHight  = $(window).height();
            var scrollTop = pageYOffset;

            if (window.parent !== window && platform.needSpecialScroll) {
                return elmTop <= pageHight;
            }
            if(elmTop - scrollTop>pageHight){
                return false;
            } else {
                return true;
            }
        }

              document.registerElement(name, {prototype:elemProto});
    }

    window['registerMipElement'] = registerElement;
    
    return registerElement;

});
;
define('utils/util', ['require'], function(require) {
    /**
     *  页面资源url转成可用的cache url
     *  @pageUrl 当前页面url地址
     *  @url 需要替换的url地址，默认全局路径
     *  @return url
     *  by lilangbo@baidu.com
     * */
    function urlToCacheUrl (pageUrl, url, type) { 
        //线下联调 http://cq02-super-god.cq02.baidu.com   mipcache.bdstatic.com
        // 不合法的url 或 pageUrl非mip cache域名 直接return 
        if (pageUrl.indexOf('cq02-super-god.cq02.baidu.com') < 0 
            || (url && url.length < 8) 
            || !(url.indexOf('http') == 0 || url.indexOf('//') == 0)) {
            return url;
        }
        var prefix = (type === 'img') ? '/i/' : '/c/';
        if (url.indexOf('//') == 0 || url.indexOf('https') == 0) {
            prefix += 's/';
        }
        //去掉http头
        var urlParas = url.split('//');
        urlParas.shift();
        url = urlParas.join('//');
        return prefix + url;
    }
    return {
        urlToCacheUrl : urlToCacheUrl
    }
});
;
define('buildins/mip-img', ['utils/util', 'buildins/customElement'], function(util){
   var customElem = require('buildins/customElement');
   var build = function(){
        if(this.isRender){
            return; 
        }
        this.isRender = true;
        var _img = new Image();
        //var src = util.urlToCacheUrl (document.location.href, this.getAttribute('src'), 'img');
        var src = this.getAttribute('src');
        _img.src = src;

        if(this.getAttribute('width')){
            _img.setAttribute('width',this.getAttribute('width'));
        }
        if(this.getAttribute('height')){
            _img.setAttribute('height',this.getAttribute('height'));
        }
        if(this.getAttribute('alt')) {
            _img.setAttribute('alt', this.getAttribute('alt'));
        }

        //this.appendChild(_img);
        this.insertBefore(_img, this.firstChild);

        if (this.getAttribute('popup') !== null) {
            // 弹层dom
            var popUpDom = [
                '<div class="mip-img-popUp-wrapper">',
                    '<div class="mip-img-popUp-bg"></div>',
                    '<img src="' + src + '" />',
                '</div>'
            ].join('');

            var $img = $(_img);

            var $popUp = $(popUpDom).insertAfter($img);
            var $popUpBg = $popUp.find('.mip-img-popUp-bg');
            var $popUpImg = $popUp.find('img');

            // 动画时长
            var DURATION = 400;

            // 点击弹层任何地方，关闭弹层
            $popUp.on('click', function () {
                // 黑色背景fadeout
                $popUpBg.fadeOut(DURATION);
                // 页面上原始图片当前所处的位置
                var currentLeft = $img.offset().left;
                var currentTop = $img.offset().top - $(window).scrollTop();
                // 弹层图片退回到原始图片的位置和大小
                $popUpImg.animate({
                    left: currentLeft,
                    top: currentTop,
                    width: $img.width(),
                    height: $img.height()
                }, DURATION, function () {
                    $popUp.hide();
                });
            });

            // 点击图片，弹出弹层
            $img.on('click', function () {
                // 图片原始宽高
                var oWid = _img.width;
                var oHei = _img.height;
                // 用户设置的图片宽高
                var uWid = $img.attr('width');
                var uHei = $img.attr('height');

                // 获取弹层中的图片最终需要的位置和大小
                var info = getPopUpImgInfo({
                    oWid: oWid,
                    oHei: oHei,
                    uWid: uWid,
                    uHei: uHei,
                    $wrapper: $popUp
                });

                // 页面原始图片当前的位置，弹层图片出现时需要与原始图片保持一致的大小和位置，营造一种原始图片弹出的效果
                var currentLeft = $img.offset().left;
                var currentTop = $img.offset().top - $(window).scrollTop();

                $popUpImg.css({
                    left: currentLeft,
                    top: currentTop,
                    width: $img.width(),
                    height: $img.height()
                });

                $popUpBg.show();
                $popUp.show();

                // 弹层图片由原始图片的位置和大小渐变到最终需要的位置和大小
                $popUpImg.animate({
                    left: info.left,
                    top: info.top,
                    width: info.wid,
                    height: info.hei
                }, DURATION);
            });
        }
    };

    /**
     * 获取图片最后展示的宽高和位置
     *
     * @param  {Object} opt [图片的原始信息]
     *                      opt.oWid(origin width): 图片原始宽度
     *                      opt.oHei(origin height): 图片原始高度
     *                      opt.uWid(user width): 用户设置的图片宽度
     *                      opt.uHei(user heigth): 用户设置的图片高度
     *                      opt.$wrapper: 最终的弹层dom
     *
     * @return {Object}     [图片在弹出层中的宽高和位置信息]
     *                      wid: 图片在弹层中的显示宽度
     *                      hei: 图片在弹层中的显示高度
     *                      left: 图片在弹层中的显示位置left
     *                      top: 图片在弹层中的显示位置top
     */
    function getPopUpImgInfo(opt) {
        // 计算前图片的宽高 before width && before height
        var bWid;
        var bHei;

        if (opt.uWid && opt.uHei) {
            bWid = +opt.uWid;
            bHei = +opt.uHei;
        }
        else {
            bWid = +opt.oWid;
            bHei = +opt.oHei;
        }

        // 计算后图片的宽高 after width && after height
        var aWid = opt.$wrapper.width();
        var aHei = Math.round(aWid * bHei / bWid);

        var top = (opt.$wrapper.height() - aHei) / 2;

        return {
            wid: aWid,
            hei: aHei,
            left: 0,
            top: top
        };
    }


    customElem.prototype.init = function(){
        this.build = build; 
    };

    return customElem;

});
;
define('buildins/mip-gif', ['require', 'buildins/customElement'], function(require){
    var customGif = require('buildins/customElement');
   function build(){
        if(this.isRender){
            return; 
        }
        this.isRender = true;
        var _img = new Image();
        var src = this.getAttribute('framesrc');
        _img.src = src;
        if(this.getAttribute('width')){
            _img.setAttribute('width',this.getAttribute('width'));
        }
        if(this.getAttribute('height')){
            _img.setAttribute('height',this.getAttribute('height'));
        }
        if(this.getAttribute('srcset')){
            _img.setAttribute('srcset',this.getAttribute('srcset'));
        }

        if(this.getAttribute('sizes')){
            _img.setAttribute('sizes',this.getAttribute('sizes'));
        }
        this.appendChild(_img);
        $(_img).on('click',function(){
           var mipGifNode = this.parentNode;
           var src = mipGifNode.getAttribute('src');
           var img  = new Image();
           _this = this;
           img.onload = function(){
                mipGifNode.removeChild(_this);
                mipGifNode.appendChild(this);
                _this = null;
           };
           img.src = src;
        });
    }
    customGif.prototype.init = function(){
        this.build = build; 
    };
    return customGif;

});
;
/**
* 统计标签
* @exports modulename
* @author shenzhou@baidu.com
* @version 1.0
* @copyright 2015 Baidu.com, Inc. All Rights Reserved
*/
define('buildins/mip-pix', ['require', 'buildins/customElement'], function(require){
    var customElem = require('buildins/customElement');

    function build(){
        if(this.isRender){
            return; 
        }
        this.isRender = true;
        var _img = new Image();
        var src = this.getAttribute('src');
        var time = (new Date().getTime());
        _img.src = src+"?"+time;
        _img.setAttribute('width',0);
        _img.setAttribute('height',0);
        this.setAttribute('width','');
        this.setAttribute('height','');
        this.appendChild(_img);
    }

    customElem.prototype.init = function(){
        this.build = build;
        /*
        *覆盖默认inviewCallBack
        * */
        this.inviewCallback = function(){

        }
        this.mipAttachedCallback = function(){
            this.build();
        }

    };
    return customElem;
});
;
define('buildins/mip-carousel', ['require', 'gesture'], function(require){
    /**
    * 说明,如果需要触发图片浏览，需要在对应图片上加data-carousel="carousel' 属性
    * 在图片浏览模式打开时候，会触发：mip.carousel.open;在图片浏览模式关闭时候，会触发：mip.carousel.close
    */
    var index = 0;
    var itemNum = 0;
    var left = 0;
    var screenWidth = $(window).width();
    var perDistance = screenWidth;
    var switchMinDist = 200;
    var maxSlidDist = 0;
    var curentLeft = 0;
    var urlList = [];
    var isDisplay = false;
    var isRender = false;
    var gesture = require('gesture');

    /**
    * 组件初始化工作
    */
    function init(url){
        for(var i =0;i<urlList.length;i++){
            if(urlList[i] == url){
                index = i;
                break;
            } 
        }
        itemNum = urlList.length; 
        maxSlidDist = perDistance * (itemNum - 1)
        left = perDistance*index;

        if($('.mip-img-box').length <= 0) {
            $('body').append('<div class="mip-img-box" style="display:none">');
        }

        render();
        $('.mip-img-box').attr("style",'display:block');
        $('.box-item').each(function(){
            this.style.width = perDistance + 'px';
        });
        $('.box-img-wrap img').each(function(){
            this.style.width = perDistance + 'px';
        });
        moveTo(-1*index*perDistance,0);   
        isDisplay = true;
        $(window).trigger('mip.carousel.open');
        gesture.init();
        gesture.bind(bindGesture);
    }

    /*
    * 初始化事件工作，组件require后，需要初始化数据
    */

    function initData(){
        $('[data-carousel]').each(function(){
            var src = this.getAttribute('src');
            urlList.push(src);
            $(this).on('click',function(){
                var src = this.getAttribute('src');
                init(src);
            });
        })
    }

    function render(){
        var resultStr =  "";
        for(var i=0; i<urlList.length;i++){
            resultStr = resultStr + '<div class = "box-item"><div class="box-img-wrap"> <img src="'+ urlList[i] +'"> </div> </div>';
        }
        var renderStr = '<div class = "box-line"><div class = "box-container">' + resultStr + '</div></div>'+ '<div class="mip-box-page">'+(index+1)+'/'+itemNum+'</div>';
        $('.mip-img-box').html(renderStr); 
    }

    function close(){
        $('.mip-img-box').attr("style","display:none");
        $(window).trigger('mip.carousel.close');
        isDisplay = false;
        gesture.unbind(bindGesture);
    }

    /*
    * 左右移动函数，移动到对应的距离
    */
    function moveTo(x,y){
        $('.box-container').attr('style','transform:translate3d('+x+'px, '+ y +'px, 0px);');
        $('.box-container').attr('style','-webkit-transform:translate3d('+ x +'px, '+ y +'px, 0px);');
    }

    function positionTo(imgEle,x,y){
        imgEle.style.top = x+'px';
        imgEle.style.left = y+'px';
    }
/**
 * 拖动
 * */
    function dragTo(event,data){
        var ele = event.srcElement;
        if(data.x>0 && data.x < x){
           ele.style.left = -1*(x - data.x)+'px';
           return true;
        }else{
            if(data.x <0 &&(Math.abs(data.x)+x+srcWidth)<startWidth){
                ele.style.left = (-1*x + data.x)+'px';
                return true;
            }else {
                return false;
            }
        }
    }
    /*
    *  处理左右滑动，切换图片
    */

    function switchItem(data,event){
        if(data.event == 'touchmove'){
            var ele = event.srcElement;
            var distance = (-1 * data.x) + left;
            if(distance > -perDistance && distance < maxSlidDist + perDistance){
                moveTo(-1*distance,0);
                var ele = event.srcElement;
                if(srcWidth !=0){
                    resetStaus(ele);
                    srcWidth = 0;
                }
            }
        }else if(data.event == 'touchend'){
            if(Math.abs(data.x) < 10){
                close(); 
            } 
            if(Math.abs(data.x) > switchMinDist && left >= 0 && left <= maxSlidDist){
                if(data.x > 0 && left !=0){
                    left = left - perDistance;
                }else if(data.x <0 && left != maxSlidDist){
                    left = left + perDistance;
                }
            }
            var num = Math.abs(left/perDistance);
            moveTo(-1*left,0);
            $('.mip-box-page').html((num+1)+"/"+itemNum);
        }
        event.stopPropagation();
        event.preventDefault();

    }
    /*
    * 获取触摸移动距离，
    *dist: 2点间距离，x、y为横坐标、纵坐标移动距离
    */
    function calTouchDist(e) {
        var x1 = 0,
        y1 = 0,
        x2 = 0,
        y2 = 0,
        x3 = 0,
        y3 = 0,
        result = {};
        x1 = e.touches[0].pageX;
        x2 = e.touches[1].pageX;
        y1 = e.touches[0].pageY - document.body.scrollTop;
        y2 = e.touches[1].pageY - document.body.scrollTop;
        if (!x1 || !x2) return;
        if (x1 <= x2) {
            x3 = (x2 - x1) / 2 + x1;
        } else {
            x3 = (x1 - x2) / 2 + x2;
        }
        if (y1 <= y2) {
            y3 = (y2 - y1) / 2 + y1;
        } else {
            y3 = (y1 - y2) / 2 + y2;
        }
        result = {
            dist: Math.round(Math.sqrt(Math.pow(x1 - x2, 2) + Math.pow(y1 - y2, 2))),
            x: Math.round(x3),
            y: Math.round(y3)
        };
        return result;

    }
    /*
    * 重置放到的缩放状态
    */
    function resetStaus(ele){
        ele.style.width = srcWidth+"px";
        ele.style.left = "0";
        ele.style.top = "0";
    }

    /*
    * 缩放服务
    */
    var startDist = {};
    var startWidth = 0;
    var srcWidth = 0;
    var srcHeight = 0;
    var startHeight = 0;
    var x = 0;
    var y = 0;
    var isZoom = false;
    var maxZoomNum = 2;

    function zoom(data,event){
        if(data.event == "touchstart"){
            isZoom = true;
            startDist = calTouchDist(event);
            var ele = event.srcElement;
            startWidth = ele.clientWidth;
            startHeight = ele.clientHeight;
            if(srcWidth ==0){
                srcWidth = startWidth;
                srcHeight = startHeight;
            }
        }
        if(data.event == "touchmove"){
            var ele = event.srcElement;
            var moveDist = calTouchDist(event);
            var ratio = moveDist.dist/startDist.dist;
            var newWidth = Math.round(ratio * startWidth);
            var newHeight = Math.round(ratio * startHeight);

            if(newWidth < srcWidth || newWidth > srcWidth*maxZoomNum){
                return; 
            }
             
            x = (newWidth - srcWidth)/2;
           console.log(startDist);
           console.log(ratio);
            ele.style.left = -1* x + 'px';
            ele.style.width = newWidth+"px";
        }
        if(data.event =="touchend"){
            if(event.targetTouches.length == 0){
                isZoom = false;
            }
            var ele = event.srcElement;
            startWidth = ele.clientWidth;
        }
        event.preventDefault();
        event.stopPropagation();
    }

    /*
    * 手势识别统一处理
    */

    function bindGesture(event,data){
        if(!isDisplay){
            return; 
        }
        if(event.targetTouches.length>1 || isZoom == true){
            zoom(data,event); 
        }else{
            switchItem(data,event);
        } 

    }
    return{
        initData:initData
    }
});
;
;
define('buildins/img-viewer', ['deps/emit'], function (EventEmitter) {
    var $win = $(window);
    var winInfo = {
        width: $win.width(),
        height: $win.height()
    };

    function MipViewer(opt) {
        this.opt = $.extend({
            selector: '[data-carousel]',
            viewerClass: '.mip-viewer',
            // 影藏header的延迟
            timeoutHideHeader: 3000,
            // 竖屏滑动阈值
            verticalThreshold: .2,
            // 横屏滑动阈值
            horizontalThreshold: .2,
            // 页面中只会保留最多3张图片，供预览
            maxShowItem: 3
        }, opt);

        this.init();
        this.createDom();
        this.bindEv();
    }

    $.extend(MipViewer.prototype, {
        init: function () {
            this.imgs = $(this.opt.selector);
            this.urlList = [];

            this.wrapper = $(this.opt.viewerClass);

            if (!this.wrapper.length) {
                this.wrapper = $('<div class="mip-viewer"/>');
                $('body').append(this.wrapper);
            }

            this.updateDirection();
        },
        createDom: function () {
            var tplSidebar = '<div class="mip-viewer-header">' +
                                '<a href="javascript:;" class="mip-viewer-header-ret"><i class="c-icon">&#xe783</i></a>' +
                                '<div class="mip-viewer-header-inner">' +
                                    '<span class="mip-viewer-header-txt"></span>' +
                                '</div>' +
                             '</div>';
            var tplHeader = '<div class="mip-viewer-viewer">' +
                                '<div class="mip-viewer-list mip-viewer-normal">';
            var tplItem = '<div class="mip-viewer-item">' +
                            '<div class="mip-viewer-item-inner">' +
                                '<img src="" />' +
                            '</div>' +
                          '</div>';
            var tplFooter = '</div></div>';
            var html = '';

            this.updateList();

            html += tplSidebar;
            html += tplHeader;

            for (var i = 0, len = this.opt.maxShowItem; i < len; i++) {
                html += tplItem;
            }

            html += tplFooter;

            this.wrapper.html(html);
            this.viewer = this.wrapper.find('.mip-viewer-viewer');
            this.list = this.viewer.find('.mip-viewer-list');
            this.items = this.list.find('.mip-viewer-item');

            this.header = this.wrapper.find('.mip-viewer-header');
            this.pager = this.header.find('.mip-viewer-header-txt');
            // 关闭按钮
            this.ret = this.header.find('.mip-viewer-header-ret');
        },
        show: function () {
            var self = this;

            window.parent.postMessage({
                event: 'jqHandle',
                data: {
                    selector: '.sf-header',
                    handle: 'hide'
                }
            }, '*');
            // BUGFIX ios下iframe window高度获取bug
            $('.main').hide(0, function () {
                $win.trigger('resize');
                self.wrapper.height(winInfo.height).show();
                self.replaceDom(self.getShowList(self.carouselId));
            });

            this.updatePager();
            this.hideHeader();
        },
        hide: function () {
            this.wrapper.hide();
            $('.main').show();

            window.parent.postMessage({
                event: 'jqHandle',
                data: {
                    selector: '.sf-header',
                    handle: 'show'
                }
            }, '*');
        },
        updateDirection: function () {
            var horizonClassName = 'mip-viewer-horizon';
            if (winInfo.width > winInfo.height) {
                this.phoneDirection = 'horizontal';
                this.wrapper.addClass(horizonClassName);
            }
            else {
                this.phoneDirection = 'vertical';
                this.wrapper.removeClass(horizonClassName);
            }
        },
        getShowList: function (carouselId) {
            var list = [];
            // prev
            list.push({
                src: this.urlList[carouselId - 1] || ''
            })
            // active
            list.push({
                src: this.urlList[carouselId]
            });
            // next
            list.push({
                src: this.urlList[carouselId + 1] || ''
            });
            return list;
        },
        replaceDom: function (list) {
            this.items.each(function (index) {
                var $img = $(this).find('img');
                $img.removeAttr('style').attr('src', list[index].src);
                !list[index].src && $img.hide();
            });
        },
        showHeader: function () {
            this.headerTimer && window.clearTimeout(this.headerTimer);
            this.header.show();
            this.hideHeader();
        },
        hideHeader: function () {
            var self = this;
            this.headerTimer = setTimeout(function () {
                self.header.hide();
            }, this.opt.timeoutHideHeader);
        },
        updatePager: function() {
            this.pager.text((this.carouselId + 1) + '/' + this.urlList.length);
        },
        updateList: function ($container) {
            var $dom = $container || this.imgs;
            var self = this;
            self.urlList.length = 0;
            $dom.each(function (index) {
                var $this = $(this);
                self.urlList.push($this.attr('src'));
                $this.attr('carouselId', index);
            });
        },
        bindEv: function () {
            var self = this;
            var xPos;
            var initTransX;

            // TODO 事件代理
            // this.wrapper.on('click', this.opt.selector, function () {
            this.imgs.on('click', function () {
                var $this = $(this);
                var carouselId = $this.attr('carouselId');
                self.carouselId = +carouselId;
                self.show();
            });

            this.ret.on('click', function () {
                self.hide();
                return false;
            });

            // 点击显示header
            this.viewer.on('click', function () {
                self.showHeader();
            });
            this.viewer.on('touchstart', function (e) {
                // prevent(e);
                // 交互锁：可多状态组合，目前只有动画状态
                self.locked = !!self.animationStatus;

                if (self.locked) return;

                xPos = e.originalEvent.touches[0].pageX;
                initTransX = self.list.css('-webkit-transform').match(/(-?[0-9\.]+)/g);
                
                self.initTransX = initTransX && +initTransX[4] || 0;
            })
            .on('touchmove', function (e) {
                if (self.locked) return;

                var x = e.originalEvent.touches[0].pageX;
                var diff = x - xPos + self.initTransX;
                prevent(e);

                self.list.css({
                    '-webkit-transition-duration': '0s',
                    '-webkit-transform': 'translateX(' + diff + 'px)'
                });
            })
            .on('touchend', function (e) {
                if (self.locked) return;

                var x = e.originalEvent.changedTouches[0].pageX;
                var diff = x - xPos;
                // prevent(e);

                var needChange = (Math.abs(diff) > winInfo.width * self.opt[self.phoneDirection + 'Threshold']);

                if (needChange) {
                    (diff > 0) ? self._goPrev() : self._goNext();
                }
                else {
                    self._goNormal();
                }
            })
            .on('touchcancel', function (e) {
            });

            this.list.on('transitionend webkitTransitionEnd', function () {
                self.replaceDom(self.getShowList(self.carouselId));
                self._goCommon();

                self.animationStatus = '';
                self.updatePager();
            });

            $win.on('viewport_resize.img_viewer', function (e, info) {
                winInfo = info;
                self.updateDirection();
                self.wrapper.height(winInfo.height);
            });

            function prevent(e) {
                // e.stopPropagation();
                e.preventDefault();
            }
        },
        // TODO 可优化 -- 目前的策略：如果在动画中，则不处理后续请求
        // 停止动画，立即完成动画
        stop: function () {
        },
        _goNormal: function () {
            this.animationStatus = '_goNormal';
            this.list.css({
                '-webkit-transition-duration': '400ms',
                '-webkit-transform': 'translateX(-33.33%)'
            });
        },
        _goNext: function () {
            this.animationStatus = '_goNext';
            if (!this.urlList[this.carouselId + 1]) {
                this._goNormal();
                return;
            }
            this.list.removeAttr('style').addClass('mip-viewer-toright');
            this.carouselId++;
        },
        _goPrev: function () {
            this.animationStatus = '_goPrev';
            if (!this.urlList[this.carouselId - 1]) {
                this._goNormal();
                return;
            }
            this.list.removeAttr('style').addClass('mip-viewer-toleft');
            this.carouselId--;
        },
        _goCommon: function () {
            this.list.removeAttr('style').removeClass('mip-viewer-toright mip-viewer-toleft');
        },
        destroy: function () {
        }
    }, EventEmitter.prototype);

    return MipViewer;
});
;
;

/**
 * fork from http://gitlab.baidu.com/MIP/mibhtml/raw/master/src/static/js/utils/util.js
 */

define('olympic/util', ['require'], function(require) {

    /**
     * @description 极简版模版引擎
     * @param {String} tpl 模版
     * @param {Object} data 渲染数据
     * @return 渲染后的数据
     */
    function format(tpl, data) {
        data = data || {};
        return tpl.replace(/#\{([^\}]+)\}/g, function() {
            if (data[arguments[1]] !== undefined) {
                return data[arguments[1]];
            }
            return '';
        });
    }

    /**
     *  时间转换工具
     *  @params time 传入时间戳
     *  @return 时间字符串
     *  by liwenqian@baidu.com
     * */
    function timeSince(time) {
        var tempSeconds = 1000 * time;
        if((new Date() - tempSeconds) < 60000) {
            return "刚刚";
        }
        var tempMinutes = Math.floor((new Date() - tempSeconds)/60000);
        if(tempMinutes < 60) {
            return tempMinutes + "分钟前";
        }
        var tempHours = Math.floor(tempMinutes/60);
        if(tempHours < 24) {
            return tempHours + "小时前";
        }
        var tempDate = new Date(tempSeconds);
        var month = tempDate.getMonth() + 1;
            month = month < 10 ? "0" + month : month;
        var day = tempDate.getDate() < 10 ? "0" + tempDate.getDate() : tempDate.getDate();
        return  month + "-" + day;
    }

    /**
     *  页面url参数获取工具，hash和参数均生效
     *  @params 要匹配的字符串，要提取的参数
     *  @return 参数值或空
     *  by liwenqian@baidu.com,taoqingqian01@baidu.com
     * */
    function getParam(param, url) {
        var reg = new RegExp(param + '=([^&\?#]+)'),
            href = url;
        var matchs = href.match(reg);
        return matchs ? matchs[1] : "";
    }

//格式化
    function formatBigNumber(num) {
        if (!num) return 0;
        if (num < 1e5) {
            return num;
        }
        else if (num < 1e8) {
            // return (num / 1e4).toFixed(1).replace(/\.0+$/, '') + '万';
            return Math.round(num / 1e4, 10) + '万';
        }
        else {
            return (num / 1e8).toFixed(1).replace(/\.0+$/, '') + '亿';
        }
    }

    return {
        timeSince : timeSince,
        getParam : getParam,
        format: format,
        formatBigNumber: formatBigNumber
    }
});
;
/**
 * @file 跳转链接
 * @author junmer
 * @time 2016.06.21
 */

define('olympic/mip-link', ['require', 'buildins/customElement'], function(require) {

    var customElem = require('buildins/customElement');

    /**
     * 点击链接事件
     *
     * @param  {Event} e event
     */
    function onClick (e) {

        e.preventDefault();

        var href = this.getAttribute('href');

        if (!href) { return; }

        if (window.parent !== window) {

            var elem = $(this);
            var message = {
                'event': 'loadiframe',
                'data': {
                    'url': href,
                    'title': (elem.attr('title') || elem.text().trim().split('\n')[0]),
                    'click': elem.data('click')
                }
            };

            window.parent.postMessage(message, '*');
        }
        else {
            location.href = href;
        }

    }

    /**
     * build
     *
     */
    function build() {

        if (this.isRender) {
            return;
        }

        this.isRender = true;

        $(this).on('click', onClick.bind(this));
    }

    /**
     * 初始化
     *
     */
    customElem.prototype.init = function() {
        this.build = build;
    };

    return customElem;

});
;
/**
 * @file 复制
 * @author junmer
 * @see https://clipboardjs.com/
 */


define('olympic/clipboard', ['require'], function(require) {

    var isBaidubox = /baiduboxapp/.test(navigator.userAgent);

    /**
     * CLICK_EVENT
     * 也许手机需要 touchend
     *
     * @type {String}
     */
    var CLICK_EVENT = isBaidubox ? 'touchstart' : 'click';

    /**
     * Clipboard
     *
     * @class 复制
     *
     * @param {Object} opt
     * @param {string} opt.text
     * @param {Function} opt.sucess
     * @param {Function} opt.error
     */
    function Clipboard(opt) {

        $.extend(this, opt);

        this.bind();
    }

    Clipboard.prototype = {

        bind: function() {
            $(this.el).on('click', this.handler.bind(this));
        },

        update: function(data) {
            this.text = data;
        },

        unbind: function() {
            $(this.el).off('click', this.handler);
            this.removeFake();
        },

        handler: function() {
            this.selectFake(this.text);
        },

        /**
         * Only removes the fake element after another click event, that way
         * a user can hit `Ctrl+C` to copy because selection still exists.
         */
        removeFake: function() {
            if (this.fakeHandler) {
                document.body.removeEventListener(CLICK_EVENT, this.fakeHandlerCallback);
                this.fakeHandler = null;
                this.fakeHandlerCallback = null;
            }

            if (this.fakeElem) {
                document.body.removeChild(this.fakeElem);
                this.fakeElem = null;
            }

        },

        /**
         * Executes the copy operation based on the current selection.
         */
        copyText: function() {

            var succeeded;
            try {
                succeeded = document.execCommand('copy');
            } catch (err) {
                succeeded = false;
            }

            this.handleResult(succeeded);
        },

        handleResult: function(succeeded) {
            if (succeeded) {
                this.success && this.success();
            } else {
                this.error && this.error();
            }
        },

        selectFake: function(text) {
            var isRTL = document.documentElement.getAttribute('dir') === 'rtl';

            this.removeFake();

            this.fakeHandlerCallback = this.removeFake.bind(this);
            this.fakeHandler = document.body.addEventListener(CLICK_EVENT, this.fakeHandlerCallback);

            this.fakeElem = document.createElement('textarea');
            // Prevent zooming on iOS
            this.fakeElem.style.fontSize = '12pt';
            // Reset box model
            this.fakeElem.style.border = '0';
            this.fakeElem.style.padding = '0';
            this.fakeElem.style.margin = '0';
            // Move element out of screen horizontally
            this.fakeElem.style.position = 'fixed';
            this.fakeElem.style[isRTL ? 'right' : 'left'] = '-9999px';
            // Move element to the same position vertically
            this.fakeElem.style.top = (window.pageYOffset || document.documentElement.scrollTop) + 'px';
            this.fakeElem.setAttribute('readonly', '');
            this.fakeElem.value = text;

            document.body.appendChild(this.fakeElem);

            this.selectedText = select(this.fakeElem);

            this.copyText();
        }
    };

    function select(element) {
        var selectedText;

        if (element.nodeName === 'INPUT' || element.nodeName === 'TEXTAREA') {
            element.focus();
            element.setSelectionRange(0, element.value.length);

            selectedText = element.value;
        } else {
            if (element.hasAttribute('contenteditable')) {
                element.focus();
            }

            var selection = window.getSelection();
            var range = document.createRange();

            range.selectNodeContents(element);
            selection.removeAllRanges();
            selection.addRange(range);

            selectedText = selection.toString();
        }

        return selectedText;
    }

    return Clipboard;

});
;
/**
 * @file 分享
 *
 * @description
 * fork from:  yaohao_share by yuanxueran
 *
 * @update
 * 2017-07-02 by menglingjun
 * 着急上，先在别人的东西上改，有空重写
 *
 */


define('olympic/share', ['require', 'olympic/clipboard'], function (require) {

    var Clipboard = require('olympic/clipboard');

    var isBaiduHost = /badiu.com$/.test(location.host);
    var isBaidubox = /baiduboxapp/.test(navigator.userAgent) && isBaiduHost;

    var defaultOpt = {
        url: window.location.href,
        title: '百度搜索有惊喜',
        content: '百度搜索有惊喜',
        iconUrl: 'http://m.baidu.com/static/ala/share/bdu.jpg',
        imageUrl: '',
        qzoneCfg: {},
        sinaweiboCfg: {},
        pyqCfg: {},
        wxfriendCfg: {},
        custom: []
    };

    if (isBaidubox) {
        require(['searchbox/openjs/aio']);
    }

    var onSuccess = function(){
    }

    var onFail = function(){
    }

    var nativeShare = function (cfg, encode) {

        if (encode) {
            cfg.url = encodeURIComponent(cfg.url);
            cfg.linkUrl = encodeURIComponent(cfg.url);
        }
        if (Box.os.android) {
            Box.android.invokeApp('Bdbox_android_utils', 'callShare', [JSON.stringify(cfg), window.successFnName || 'console.log', window.errorFnName || 'console.log']);
        }
        else {
            console.log(cfg);

            Box.ios.invokeApp('callShare', {
                options: encodeURIComponent(JSON.stringify(cfg)),
                errorcallback: 'onFail',
                successcallback: 'onSuccess'
            });
        }
    }

    var qzone = {
        type: 'qzone',
        title: 'QQ空间',
        cb: (function () {
            var fn;
            if (isBaidubox) {
                fn = function (opt) {
                    opt.mediaType = 'qqdenglu';
                    var cfg = opt;
                    if (opt.qzoneCfg && !$.isEmptyObject(opt.qzoneCfg)) {
                        cfg = $.extend({}, opt, opt.qzoneCfg);
                    }
                    nativeShare(cfg, false);
                };
            }
            else {
                fn = function (opt) {
                    var qzoneurl = 'http://qzs.qzone.qq.com/open/connect/widget/mobile/qzshare/index.html?page=qzshare.html&loginpage=loginindex.html&logintype=qzone&site=百度&appName=百度&';
                  //  var qzoneurl = 'http://sns.qzone.qq.com/cgi-bin/qzshare/cgi_qzshare_onekey?';

                    window.open(qzoneurl + 'url=' + encodeURIComponent(opt.url)+'&title=' + encodeURIComponent(opt.title)+'&summary='+encodeURIComponent(opt.content));
                };
            }
            return fn;
        })()
    };

    var sinaweibo = {
        type: 'sinaweibo',
        title: '新浪微博',
        cb: (function () {
            var fn;
            if (isBaidubox) {
                fn = function (opt) {
                    opt.mediaType = 'sinaweibo';
                    var cfg = opt;
                    if (opt.sinaweiboCfg && !$.isEmptyObject(opt.sinaweiboCfg)) {
                        cfg = $.extend({}, opt, opt.sinaweiboCfg);
                    }
                    nativeShare(cfg, false);
                };
            }
            else {
                fn = function (opt) {
                    if (opt.sinaweibourl) {
                        window.open(opt.sinaweibourl);
                    } else {
                        window.open('http://v.t.sina.com.cn/share/share.php?url=' + encodeURIComponent(opt.url) + '&title=' + encodeURIComponent(opt.title)+'&pic='+encodeURIComponent(opt.imageUrl));
                    }
                };
            }
            return fn;
        })()
    };

    var pyq = {
        type: 'pyq',
        title: '朋友圈',
        cb: function (opt) {
            opt.mediaType = 'weixin_timeline';
            var cfg = opt;
            if (opt.pyqCfg && !$.isEmptyObject(opt.pyqCfg)) {
                cfg = $.extend({}, opt, opt.pyqCfg);
            }
            nativeShare(cfg, false);
        }
    };

    var wxfriend = {
        type: 'wxfriend',
        title: '微信好友',
        cb: function (opt) {
            opt.mediaType = 'weixin_friend';
            var cfg = opt;
            if (opt.wxfriendCfg && !$.isEmptyObject(opt.wxfriendCfg)) {
                cfg = $.extend({}, opt, opt.wxfriendCfg);
            }
            nativeShare(cfg, false);
        }
    };


    var copylink = {
        type: 'copylink',
        title: '复制链接',
        cb: function () {
            alert('复制成功');
        }
    };

    var Share = function (opt, container, logfn) {
        this.container = container;
        this.logfn = logfn || function() {};

        this.opt = $.extend({}, defaultOpt, opt);
        if (!this.opt.content) {
            this.opt.content = this.opt.title;
        }
        var reg = /^\/\/.+/;
        if (reg.test(this.opt.url)) {
            this.opt.url = 'http:' + this.opt.url;
        }
        this.opt.linkUrl = this.opt.url;
        var list = [];
        if (isBaidubox) {
            list.push(wxfriend);
            list.push(pyq);
        }
        list.push(qzone);
        list.push(sinaweibo);
        list.push(copylink);

        list = list.concat(this.opt.custom);

        // 小屏幕就少一个吧
        if (window.innerWidth < 400 && list.length > 4) {
            list.splice(4, 10);
        }

        this.list = list;

        var str = '',
            num = list.length,
            obj;

        str += '<div class="mip-share-list">';

        for (var i = 0; i < num; i++) {
            obj = list[i];
            str += '<span class="mip-share-btn">';
            if (obj) {
                str += '<div class="mip-share-icon mip-share-icon-' + obj.type + '"></div>';
                str += '<div class="c-line-clamp1 c-gray">' + obj.title + '</div>';
            }
            str += '</span>';
        }
        str += '</div>';

        this.domHtml = str;

        this._init();
    };

    Share.prototype = {
        constructor: Share,

        _init: function () {
            this.container.html(this.domHtml);
            this.share();
        },
        share: function (cb) {

            var _this = this;

            var me = null;

            var hasCopy;

            $('.mip-share-btn', this.container).off();
            $('.mip-share-btn', this.container).each(function (i) {
                me = $(this);

                var handler = _this.list[i];

                if (handler) {

                    // 初始化复制
                    if (handler.type == 'copylink') {

                        new Clipboard(
                            {
                                el: me,
                                text: _this.opt.linkUrl,
                                success: function () {
                                    handler.cb(_this.opt);
                                    _this.logfn(handler, isBaidubox ? 0 : 1)
                                },
                                error: function () {
                                    alert('复制失败');
                                }
                            }
                        );

                        return;

                    }

                    me.on('click', function () {
                        if (isBaidubox) {
                            _this.logfn(handler, 1);
                        }
                        handler.cb(_this.opt);
                    });

                    // 非手百，统计绑定到touchend上
                    if (!isBaidubox) {
                        me.on('touchend', function () {
                            _this.logfn(handler[i], 0);
                        });
                    }


                }
            });

        }
    };

    return Share;
});
;
/**
 * @file 分享
 * @author junmer
 * @time 2016.06.21
 */

define('olympic/mip-share', ['require', 'buildins/customElement', 'olympic/share'], function(require) {

    var customElem = require('buildins/customElement');

    var Share = require('olympic/share');


    /**
     * build
     */
    function build() {

        if (this.isRender) {
            return;
        }

        this.isRender = true;

        new Share({
            title: this.getAttribute('title') || document.title,
            url: this.getAttribute('url'),
            content: this.getAttribute('content'),
            iconUrl: this.getAttribute('icon')
        }, $(this));

    }

    /**
     * 初始化
     *
     */
    customElem.prototype.init = function() {
        this.build = build;
    };

    return customElem;

});
;
/**
 * @file 推荐
 *
 * fork from http://gitlab.baidu.com/MIP/mibhtml/raw/master/src/static/js/dom/recommend.js
 */


define('olympic/recommend', ['require', 'olympic/util'], function(require) {

    var _ = require('olympic/util');

    /**
    * 推荐模块
    */
    function render(data) {
        //相关标签导流
        if(data.recommend_tag && data.recommend_tag.length > 0) {
            var keywordString = '';
            var tpl = '<a class="recommends-keywords-href c-urljump" href="#{url}" data-urljump=\'#{urljump}\'>' +
                        '<span>#{text}</span>' +
                      '</a>';
            for(var i in data.recommend_tag) {
                keywordString += _.format(tpl, {
                    url: data.recommend_tag[i].url,
                    text: data.recommend_tag[i].query,
                    urljump: JSON.stringify({
                        t: 'mdd_k',
                        lid: window.B ? B.comm.lid : 0
                    })
                });
            }
            $(".recommends").append(
                '<div class="recommends-keywords">' +
                keywordString +
                '</div>'
            );
        }
        //相关推荐
        var recommendData = data.recommend ? data.recommend : data;
        var logClass = window.parent !== window ? '' : 'MIP_LOG_BTN';

        $.each(recommendData, function(i, item) {
            $(".recommends").append(
                '<div class="' + logClass + ' recommends-box' + (!i ? ' recommends-box-first' : '') + '" data-click=\'{"action":"recommend", "order":"' + i + '", "href":"' + item.url + '", "type": "sf"}\'>'+
                '<a class="recommends-href" href='+ item.url + '>' +
                '<div class="recommends-title">' + item.title + '</div>' +
                '<div class="recommends-info">' +
                '<span>' + _.timeSince(item.time) + '</span>' +
                '<span class="recommends-provider">' + item.provider + '</span></div></a></div>'
            );
        });

        //重设高度兼容手百
        $(".recommends").css("height", "100%");


    }

    function init() {

        $(".recommends").delegate('.recommends-box','click',function(ev) {

            ev.preventDefault();
            var href = $(this).find(".recommends-href").attr("href");

            var message = {
                "event": "loadiframe",
                "data": {
                    "url": href,
                    "title": $(this).find(".recommends-provider").text(),
                    "click": $(this).data('click')
                }
            };

            //此处判断iframe用了较为tricky的逻辑，后续需要通过父页面message来确认
            if(window.parent !== window) {
                window.parent.postMessage(message, '*');
            }
            else {
                location.href = href;
            }


        });

    }

    return {
        init : init,
        render: render
    }
});
;
/**
 * @file 新闻推荐组件
 *
 * @author menglingjun
 * @copyright 2016 Baidu.com, Inc. All Rights Reserved
 */

define('olympic/mip-recommend', ['require', 'buildins/customElement', 'olympic/recommend'], function(require) {

    var customElem = require('buildins/customElement');
    var recommend = require('olympic/recommend');

    customElem.prototype.init = function() {

        this.build = render;

    };

    function render() {

        if (this.isRender) {
            return;
        }

        this.isRender = true;

        var url = this.getAttribute('src') || '//headline.baidu.com/doc/recommended';

        $.ajax({
            'url': url,
            'dataType': 'jsonp',
            'jsonp': 'cb',
            'data': {
                'url_key': location.href
            },
            'success': function (res) {
                recommend.init();
                recommend.render(res.data);
            }
        });

    }

    return customElem;

});

;

require(['mip'], function () {

    var regME = window.registerMipElement;

    /*
     * 注册mip-link组件
     */
    require(['olympic/mip-link'], regME.bind(this, 'mip-link'));

    /*
     * 注册mip-share 组件
     */
    require(['olympic/mip-share'], regME.bind(this, 'mip-share'));

    /*
     * 注册mip-recommend 组件
     */
    require(['olympic/mip-recommend'], regME.bind(this, 'mip-recommend'));

});
=======
!function(e,t){"object"==typeof module&&"object"==typeof module.exports?module.exports=e.document?t(e,!0):function(e){if(!e.document)throw new Error("jQuery requires a window with a document");return t(e)}:t(e)}("undefined"!=typeof window?window:this,function(e,t){function n(e){var t="length"in e&&e.length,n=K.type(e);return"function"===n||K.isWindow(e)?!1:1===e.nodeType&&t?!0:"array"===n||0===t||"number"==typeof t&&t>0&&t-1 in e}function i(e,t,n){if(K.isFunction(t))return K.grep(e,function(e,i){return!!t.call(e,i,e)!==n
});if(t.nodeType)return K.grep(e,function(e){return e===t!==n});if("string"==typeof t){if(at.test(t))return K.filter(t,e,n);t=K.filter(t,e)}return K.grep(e,function(e){return X.call(t,e)>=0!==n})}function r(e,t){for(;(e=e[t])&&1!==e.nodeType;);return e}function o(e){var t=ht[e]={};return K.each(e.match(pt)||[],function(e,n){t[n]=!0}),t}function s(){J.removeEventListener("DOMContentLoaded",s,!1),e.removeEventListener("load",s,!1),K.ready()}function a(){Object.defineProperty(this.cache={},0,{get:function(){return{}
}}),this.expando=K.expando+a.uid++}function u(e,t,n){var i;if(void 0===n&&1===e.nodeType)if(i="data-"+t.replace(wt,"-$1").toLowerCase(),n=e.getAttribute(i),"string"==typeof n){try{n="true"===n?!0:"false"===n?!1:"null"===n?null:+n+""===n?+n:bt.test(n)?K.parseJSON(n):n}catch(r){}yt.set(e,t,n)}else n=void 0;return n}function c(){return!0}function l(){return!1}function f(){try{return J.activeElement}catch(e){}}function d(e,t){return K.nodeName(e,"table")&&K.nodeName(11!==t.nodeType?t:t.firstChild,"tr")?e.getElementsByTagName("tbody")[0]||e.appendChild(e.ownerDocument.createElement("tbody")):e
}function p(e){return e.type=(null!==e.getAttribute("type"))+"/"+e.type,e}function h(e){var t=Ht.exec(e.type);return t?e.type=t[1]:e.removeAttribute("type"),e}function m(e,t){for(var n=0,i=e.length;i>n;n++)vt.set(e[n],"globalEval",!t||vt.get(t[n],"globalEval"))}function g(e,t){var n,i,r,o,s,a,u,c;if(1===t.nodeType){if(vt.hasData(e)&&(o=vt.access(e),s=vt.set(t,o),c=o.events)){delete s.handle,s.events={};for(r in c)for(n=0,i=c[r].length;i>n;n++)K.event.add(t,r,c[r][n])}yt.hasData(e)&&(a=yt.access(e),u=K.extend({},a),yt.set(t,u))
}}function v(e,t){var n=e.getElementsByTagName?e.getElementsByTagName(t||"*"):e.querySelectorAll?e.querySelectorAll(t||"*"):[];return void 0===t||t&&K.nodeName(e,t)?K.merge([e],n):n}function y(e,t){var n=t.nodeName.toLowerCase();"input"===n&&Et.test(e.type)?t.checked=e.checked:("input"===n||"textarea"===n)&&(t.defaultValue=e.defaultValue)}function b(t,n){var i,r=K(n.createElement(t)).appendTo(n.body),o=e.getDefaultComputedStyle&&(i=e.getDefaultComputedStyle(r[0]))?i.display:K.css(r[0],"display");
return r.detach(),o}function w(e){var t=J,n=_t[e];return n||(n=b(e,t),"none"!==n&&n||(It=(It||K("<iframe frameborder='0' width='0' height='0'/>")).appendTo(t.documentElement),t=It[0].contentDocument,t.write(),t.close(),n=b(e,t),It.detach()),_t[e]=n),n}function x(e,t,n){var i,r,o,s,a=e.style;return n=n||Ut(e),n&&(s=n.getPropertyValue(t)||n[t]),n&&(""!==s||K.contains(e.ownerDocument,e)||(s=K.style(e,t)),Wt.test(s)&&Pt.test(t)&&(i=a.width,r=a.minWidth,o=a.maxWidth,a.minWidth=a.maxWidth=a.width=s,s=n.width,a.width=i,a.minWidth=r,a.maxWidth=o)),void 0!==s?s+"":s
}function C(e,t){return{get:function(){return e()?void delete this.get:(this.get=t).apply(this,arguments)}}}function T(e,t){if(t in e)return t;for(var n=t[0].toUpperCase()+t.slice(1),i=t,r=Gt.length;r--;)if(t=Gt[r]+n,t in e)return t;return i}function E(e,t,n){var i=zt.exec(t);return i?Math.max(0,i[1]-(n||0))+(i[2]||"px"):t}function k(e,t,n,i,r){for(var o=n===(i?"border":"content")?4:"width"===t?1:0,s=0;4>o;o+=2)"margin"===n&&(s+=K.css(e,n+Ct[o],!0,r)),i?("content"===n&&(s-=K.css(e,"padding"+Ct[o],!0,r)),"margin"!==n&&(s-=K.css(e,"border"+Ct[o]+"Width",!0,r))):(s+=K.css(e,"padding"+Ct[o],!0,r),"padding"!==n&&(s+=K.css(e,"border"+Ct[o]+"Width",!0,r)));
return s}function A(e,t,n){var i=!0,r="width"===t?e.offsetWidth:e.offsetHeight,o=Ut(e),s="border-box"===K.css(e,"boxSizing",!1,o);if(0>=r||null==r){if(r=x(e,t,o),(0>r||null==r)&&(r=e.style[t]),Wt.test(r))return r;i=s&&(Q.boxSizingReliable()||r===e.style[t]),r=parseFloat(r)||0}return r+k(e,t,n||(s?"border":"content"),i,o)+"px"}function N(e,t){for(var n,i,r,o=[],s=0,a=e.length;a>s;s++)i=e[s],i.style&&(o[s]=vt.get(i,"olddisplay"),n=i.style.display,t?(o[s]||"none"!==n||(i.style.display=""),""===i.style.display&&Tt(i)&&(o[s]=vt.access(i,"olddisplay",w(i.nodeName)))):(r=Tt(i),"none"===n&&r||vt.set(i,"olddisplay",r?n:K.css(i,"display"))));
for(s=0;a>s;s++)i=e[s],i.style&&(t&&"none"!==i.style.display&&""!==i.style.display||(i.style.display=t?o[s]||"":"none"));return e}function S(e,t,n,i,r){return new S.prototype.init(e,t,n,i,r)}function D(){return setTimeout(function(){Qt=void 0}),Qt=K.now()}function q(e,t){var n,i=0,r={height:e};for(t=t?1:0;4>i;i+=2-t)n=Ct[i],r["margin"+n]=r["padding"+n]=e;return t&&(r.opacity=r.width=e),r}function j(e,t,n){for(var i,r=(nn[t]||[]).concat(nn["*"]),o=0,s=r.length;s>o;o++)if(i=r[o].call(n,t,e))return i
}function L(e,t,n){var i,r,o,s,a,u,c,l,f=this,d={},p=e.style,h=e.nodeType&&Tt(e),m=vt.get(e,"fxshow");n.queue||(a=K._queueHooks(e,"fx"),null==a.unqueued&&(a.unqueued=0,u=a.empty.fire,a.empty.fire=function(){a.unqueued||u()}),a.unqueued++,f.always(function(){f.always(function(){a.unqueued--,K.queue(e,"fx").length||a.empty.fire()})})),1===e.nodeType&&("height"in t||"width"in t)&&(n.overflow=[p.overflow,p.overflowX,p.overflowY],c=K.css(e,"display"),l="none"===c?vt.get(e,"olddisplay")||w(e.nodeName):c,"inline"===l&&"none"===K.css(e,"float")&&(p.display="inline-block")),n.overflow&&(p.overflow="hidden",f.always(function(){p.overflow=n.overflow[0],p.overflowX=n.overflow[1],p.overflowY=n.overflow[2]
}));for(i in t)if(r=t[i],Zt.exec(r)){if(delete t[i],o=o||"toggle"===r,r===(h?"hide":"show")){if("show"!==r||!m||void 0===m[i])continue;h=!0}d[i]=m&&m[i]||K.style(e,i)}else c=void 0;if(K.isEmptyObject(d))"inline"===("none"===c?w(e.nodeName):c)&&(p.display=c);else{m?"hidden"in m&&(h=m.hidden):m=vt.access(e,"fxshow",{}),o&&(m.hidden=!h),h?K(e).show():f.done(function(){K(e).hide()}),f.done(function(){var t;vt.remove(e,"fxshow");for(t in d)K.style(e,t,d[t])});for(i in d)s=j(h?m[i]:0,i,f),i in m||(m[i]=s.start,h&&(s.end=s.start,s.start="width"===i||"height"===i?1:0))
}}function O(e,t){var n,i,r,o,s;for(n in e)if(i=K.camelCase(n),r=t[i],o=e[n],K.isArray(o)&&(r=o[1],o=e[n]=o[0]),n!==i&&(e[i]=o,delete e[n]),s=K.cssHooks[i],s&&"expand"in s){o=s.expand(o),delete e[i];for(n in o)n in e||(e[n]=o[n],t[n]=r)}else t[i]=r}function M(e,t,n){var i,r,o=0,s=tn.length,a=K.Deferred().always(function(){delete u.elem}),u=function(){if(r)return!1;for(var t=Qt||D(),n=Math.max(0,c.startTime+c.duration-t),i=n/c.duration||0,o=1-i,s=0,u=c.tweens.length;u>s;s++)c.tweens[s].run(o);return a.notifyWith(e,[c,o,n]),1>o&&u?n:(a.resolveWith(e,[c]),!1)
},c=a.promise({elem:e,props:K.extend({},t),opts:K.extend(!0,{specialEasing:{}},n),originalProperties:t,originalOptions:n,startTime:Qt||D(),duration:n.duration,tweens:[],createTween:function(t,n){var i=K.Tween(e,c.opts,t,n,c.opts.specialEasing[t]||c.opts.easing);return c.tweens.push(i),i},stop:function(t){var n=0,i=t?c.tweens.length:0;if(r)return this;for(r=!0;i>n;n++)c.tweens[n].run(1);return t?a.resolveWith(e,[c,t]):a.rejectWith(e,[c,t]),this}}),l=c.props;for(O(l,c.opts.specialEasing);s>o;o++)if(i=tn[o].call(c,e,l,c.opts))return i;
return K.map(l,j,c),K.isFunction(c.opts.start)&&c.opts.start.call(e,c),K.fx.timer(K.extend(u,{elem:e,anim:c,queue:c.opts.queue})),c.progress(c.opts.progress).done(c.opts.done,c.opts.complete).fail(c.opts.fail).always(c.opts.always)}function $(e){return function(t,n){"string"!=typeof t&&(n=t,t="*");var i,r=0,o=t.toLowerCase().match(pt)||[];if(K.isFunction(n))for(;i=o[r++];)"+"===i[0]?(i=i.slice(1)||"*",(e[i]=e[i]||[]).unshift(n)):(e[i]=e[i]||[]).push(n)}}function H(e,t,n,i){function r(a){var u;return o[a]=!0,K.each(e[a]||[],function(e,a){var c=a(t,n,i);
return"string"!=typeof c||s||o[c]?s?!(u=c):void 0:(t.dataTypes.unshift(c),r(c),!1)}),u}var o={},s=e===wn;return r(t.dataTypes[0])||!o["*"]&&r("*")}function R(e,t){var n,i,r=K.ajaxSettings.flatOptions||{};for(n in t)void 0!==t[n]&&((r[n]?e:i||(i={}))[n]=t[n]);return i&&K.extend(!0,e,i),e}function F(e,t,n){for(var i,r,o,s,a=e.contents,u=e.dataTypes;"*"===u[0];)u.shift(),void 0===i&&(i=e.mimeType||t.getResponseHeader("Content-Type"));if(i)for(r in a)if(a[r]&&a[r].test(i)){u.unshift(r);break}if(u[0]in n)o=u[0];
else{for(r in n){if(!u[0]||e.converters[r+" "+u[0]]){o=r;break}s||(s=r)}o=o||s}return o?(o!==u[0]&&u.unshift(o),n[o]):void 0}function I(e,t,n,i){var r,o,s,a,u,c={},l=e.dataTypes.slice();if(l[1])for(s in e.converters)c[s.toLowerCase()]=e.converters[s];for(o=l.shift();o;)if(e.responseFields[o]&&(n[e.responseFields[o]]=t),!u&&i&&e.dataFilter&&(t=e.dataFilter(t,e.dataType)),u=o,o=l.shift())if("*"===o)o=u;else if("*"!==u&&u!==o){if(s=c[u+" "+o]||c["* "+o],!s)for(r in c)if(a=r.split(" "),a[1]===o&&(s=c[u+" "+a[0]]||c["* "+a[0]])){s===!0?s=c[r]:c[r]!==!0&&(o=a[0],l.unshift(a[1]));
break}if(s!==!0)if(s&&e["throws"])t=s(t);else try{t=s(t)}catch(f){return{state:"parsererror",error:s?f:"No conversion from "+u+" to "+o}}}return{state:"success",data:t}}function _(e,t,n,i){var r;if(K.isArray(t))K.each(t,function(t,r){n||kn.test(e)?i(e,r):_(e+"["+("object"==typeof r?t:"")+"]",r,n,i)});else if(n||"object"!==K.type(t))i(e,t);else for(r in t)_(e+"["+r+"]",t[r],n,i)}function P(e){return K.isWindow(e)?e:9===e.nodeType&&e.defaultView}var W=[],U=W.slice,B=W.concat,z=W.push,X=W.indexOf,V={},Y=V.toString,G=V.hasOwnProperty,Q={},J=e.document,Z="2.1.4",K=function(e,t){return new K.fn.init(e,t)
},et=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,tt=/^-ms-/,nt=/-([\da-z])/gi,it=function(e,t){return t.toUpperCase()};K.fn=K.prototype={jquery:Z,constructor:K,selector:"",length:0,toArray:function(){return U.call(this)},get:function(e){return null!=e?0>e?this[e+this.length]:this[e]:U.call(this)},pushStack:function(e){var t=K.merge(this.constructor(),e);return t.prevObject=this,t.context=this.context,t},each:function(e,t){return K.each(this,e,t)},map:function(e){return this.pushStack(K.map(this,function(t,n){return e.call(t,n,t)
}))},slice:function(){return this.pushStack(U.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},eq:function(e){var t=this.length,n=+e+(0>e?t:0);return this.pushStack(n>=0&&t>n?[this[n]]:[])},end:function(){return this.prevObject||this.constructor(null)},push:z,sort:W.sort,splice:W.splice},K.extend=K.fn.extend=function(){var e,t,n,i,r,o,s=arguments[0]||{},a=1,u=arguments.length,c=!1;for("boolean"==typeof s&&(c=s,s=arguments[a]||{},a++),"object"==typeof s||K.isFunction(s)||(s={}),a===u&&(s=this,a--);u>a;a++)if(null!=(e=arguments[a]))for(t in e)n=s[t],i=e[t],s!==i&&(c&&i&&(K.isPlainObject(i)||(r=K.isArray(i)))?(r?(r=!1,o=n&&K.isArray(n)?n:[]):o=n&&K.isPlainObject(n)?n:{},s[t]=K.extend(c,o,i)):void 0!==i&&(s[t]=i));
return s},K.extend({expando:"jQuery"+(Z+Math.random()).replace(/\D/g,""),isReady:!0,error:function(e){throw new Error(e)},noop:function(){},isFunction:function(e){return"function"===K.type(e)},isArray:Array.isArray,isWindow:function(e){return null!=e&&e===e.window},isNumeric:function(e){return!K.isArray(e)&&e-parseFloat(e)+1>=0},isPlainObject:function(e){return"object"!==K.type(e)||e.nodeType||K.isWindow(e)?!1:e.constructor&&!G.call(e.constructor.prototype,"isPrototypeOf")?!1:!0},isEmptyObject:function(e){var t;
for(t in e)return!1;return!0},type:function(e){return null==e?e+"":"object"==typeof e||"function"==typeof e?V[Y.call(e)]||"object":typeof e},globalEval:function(e){var t,n=eval;e=K.trim(e),e&&(1===e.indexOf("use strict")?(t=J.createElement("script"),t.text=e,J.head.appendChild(t).parentNode.removeChild(t)):n(e))},camelCase:function(e){return e.replace(tt,"ms-").replace(nt,it)},nodeName:function(e,t){return e.nodeName&&e.nodeName.toLowerCase()===t.toLowerCase()},each:function(e,t,i){var r,o=0,s=e.length,a=n(e);
if(i){if(a)for(;s>o&&(r=t.apply(e[o],i),r!==!1);o++);else for(o in e)if(r=t.apply(e[o],i),r===!1)break}else if(a)for(;s>o&&(r=t.call(e[o],o,e[o]),r!==!1);o++);else for(o in e)if(r=t.call(e[o],o,e[o]),r===!1)break;return e},trim:function(e){return null==e?"":(e+"").replace(et,"")},makeArray:function(e,t){var i=t||[];return null!=e&&(n(Object(e))?K.merge(i,"string"==typeof e?[e]:e):z.call(i,e)),i},inArray:function(e,t,n){return null==t?-1:X.call(t,e,n)},merge:function(e,t){for(var n=+t.length,i=0,r=e.length;n>i;i++)e[r++]=t[i];
return e.length=r,e},grep:function(e,t,n){for(var i,r=[],o=0,s=e.length,a=!n;s>o;o++)i=!t(e[o],o),i!==a&&r.push(e[o]);return r},map:function(e,t,i){var r,o=0,s=e.length,a=n(e),u=[];if(a)for(;s>o;o++)r=t(e[o],o,i),null!=r&&u.push(r);else for(o in e)r=t(e[o],o,i),null!=r&&u.push(r);return B.apply([],u)},guid:1,proxy:function(e,t){var n,i,r;return"string"==typeof t&&(n=e[t],t=e,e=n),K.isFunction(e)?(i=U.call(arguments,2),r=function(){return e.apply(t||this,i.concat(U.call(arguments)))},r.guid=e.guid=e.guid||K.guid++,r):void 0
},now:Date.now,support:Q}),K.each("Boolean Number String Function Array Date RegExp Object Error".split(" "),function(e,t){V["[object "+t+"]"]=t.toLowerCase()});var rt=function(e){function t(e,t,n,i){var r,o,s,a,u,c,f,p,h,m;if((t?t.ownerDocument||t:_)!==L&&j(t),t=t||L,n=n||[],a=t.nodeType,"string"!=typeof e||!e||1!==a&&9!==a&&11!==a)return n;if(!i&&M){if(11!==a&&(r=yt.exec(e)))if(s=r[1]){if(9===a){if(o=t.getElementById(s),!o||!o.parentNode)return n;if(o.id===s)return n.push(o),n}else if(t.ownerDocument&&(o=t.ownerDocument.getElementById(s))&&F(t,o)&&o.id===s)return n.push(o),n
}else{if(r[2])return Z.apply(n,t.getElementsByTagName(e)),n;if((s=r[3])&&x.getElementsByClassName)return Z.apply(n,t.getElementsByClassName(s)),n}if(x.qsa&&(!$||!$.test(e))){if(p=f=I,h=t,m=1!==a&&e,1===a&&"object"!==t.nodeName.toLowerCase()){for(c=k(e),(f=t.getAttribute("id"))?p=f.replace(wt,"\\$&"):t.setAttribute("id",p),p="[id='"+p+"'] ",u=c.length;u--;)c[u]=p+d(c[u]);h=bt.test(e)&&l(t.parentNode)||t,m=c.join(",")}if(m)try{return Z.apply(n,h.querySelectorAll(m)),n}catch(g){}finally{f||t.removeAttribute("id")
}}}return N(e.replace(ut,"$1"),t,n,i)}function n(){function e(n,i){return t.push(n+" ")>C.cacheLength&&delete e[t.shift()],e[n+" "]=i}var t=[];return e}function i(e){return e[I]=!0,e}function r(e){var t=L.createElement("div");try{return!!e(t)}catch(n){return!1}finally{t.parentNode&&t.parentNode.removeChild(t),t=null}}function o(e,t){for(var n=e.split("|"),i=e.length;i--;)C.attrHandle[n[i]]=t}function s(e,t){var n=t&&e,i=n&&1===e.nodeType&&1===t.nodeType&&(~t.sourceIndex||V)-(~e.sourceIndex||V);if(i)return i;
if(n)for(;n=n.nextSibling;)if(n===t)return-1;return e?1:-1}function a(e){return function(t){var n=t.nodeName.toLowerCase();return"input"===n&&t.type===e}}function u(e){return function(t){var n=t.nodeName.toLowerCase();return("input"===n||"button"===n)&&t.type===e}}function c(e){return i(function(t){return t=+t,i(function(n,i){for(var r,o=e([],n.length,t),s=o.length;s--;)n[r=o[s]]&&(n[r]=!(i[r]=n[r]))})})}function l(e){return e&&"undefined"!=typeof e.getElementsByTagName&&e}function f(){}function d(e){for(var t=0,n=e.length,i="";n>t;t++)i+=e[t].value;
return i}function p(e,t,n){var i=t.dir,r=n&&"parentNode"===i,o=W++;return t.first?function(t,n,o){for(;t=t[i];)if(1===t.nodeType||r)return e(t,n,o)}:function(t,n,s){var a,u,c=[P,o];if(s){for(;t=t[i];)if((1===t.nodeType||r)&&e(t,n,s))return!0}else for(;t=t[i];)if(1===t.nodeType||r){if(u=t[I]||(t[I]={}),(a=u[i])&&a[0]===P&&a[1]===o)return c[2]=a[2];if(u[i]=c,c[2]=e(t,n,s))return!0}}}function h(e){return e.length>1?function(t,n,i){for(var r=e.length;r--;)if(!e[r](t,n,i))return!1;return!0}:e[0]}function m(e,n,i){for(var r=0,o=n.length;o>r;r++)t(e,n[r],i);
return i}function g(e,t,n,i,r){for(var o,s=[],a=0,u=e.length,c=null!=t;u>a;a++)(o=e[a])&&(!n||n(o,i,r))&&(s.push(o),c&&t.push(a));return s}function v(e,t,n,r,o,s){return r&&!r[I]&&(r=v(r)),o&&!o[I]&&(o=v(o,s)),i(function(i,s,a,u){var c,l,f,d=[],p=[],h=s.length,v=i||m(t||"*",a.nodeType?[a]:a,[]),y=!e||!i&&t?v:g(v,d,e,a,u),b=n?o||(i?e:h||r)?[]:s:y;if(n&&n(y,b,a,u),r)for(c=g(b,p),r(c,[],a,u),l=c.length;l--;)(f=c[l])&&(b[p[l]]=!(y[p[l]]=f));if(i){if(o||e){if(o){for(c=[],l=b.length;l--;)(f=b[l])&&c.push(y[l]=f);
o(null,b=[],c,u)}for(l=b.length;l--;)(f=b[l])&&(c=o?et(i,f):d[l])>-1&&(i[c]=!(s[c]=f))}}else b=g(b===s?b.splice(h,b.length):b),o?o(null,s,b,u):Z.apply(s,b)})}function y(e){for(var t,n,i,r=e.length,o=C.relative[e[0].type],s=o||C.relative[" "],a=o?1:0,u=p(function(e){return e===t},s,!0),c=p(function(e){return et(t,e)>-1},s,!0),l=[function(e,n,i){var r=!o&&(i||n!==S)||((t=n).nodeType?u(e,n,i):c(e,n,i));return t=null,r}];r>a;a++)if(n=C.relative[e[a].type])l=[p(h(l),n)];else{if(n=C.filter[e[a].type].apply(null,e[a].matches),n[I]){for(i=++a;r>i&&!C.relative[e[i].type];i++);return v(a>1&&h(l),a>1&&d(e.slice(0,a-1).concat({value:" "===e[a-2].type?"*":""})).replace(ut,"$1"),n,i>a&&y(e.slice(a,i)),r>i&&y(e=e.slice(i)),r>i&&d(e))
}l.push(n)}return h(l)}function b(e,n){var r=n.length>0,o=e.length>0,s=function(i,s,a,u,c){var l,f,d,p=0,h="0",m=i&&[],v=[],y=S,b=i||o&&C.find.TAG("*",c),w=P+=null==y?1:Math.random()||.1,x=b.length;for(c&&(S=s!==L&&s);h!==x&&null!=(l=b[h]);h++){if(o&&l){for(f=0;d=e[f++];)if(d(l,s,a)){u.push(l);break}c&&(P=w)}r&&((l=!d&&l)&&p--,i&&m.push(l))}if(p+=h,r&&h!==p){for(f=0;d=n[f++];)d(m,v,s,a);if(i){if(p>0)for(;h--;)m[h]||v[h]||(v[h]=Q.call(u));v=g(v)}Z.apply(u,v),c&&!i&&v.length>0&&p+n.length>1&&t.uniqueSort(u)
}return c&&(P=w,S=y),m};return r?i(s):s}var w,x,C,T,E,k,A,N,S,D,q,j,L,O,M,$,H,R,F,I="sizzle"+1*new Date,_=e.document,P=0,W=0,U=n(),B=n(),z=n(),X=function(e,t){return e===t&&(q=!0),0},V=1<<31,Y={}.hasOwnProperty,G=[],Q=G.pop,J=G.push,Z=G.push,K=G.slice,et=function(e,t){for(var n=0,i=e.length;i>n;n++)if(e[n]===t)return n;return-1},tt="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",nt="[\\x20\\t\\r\\n\\f]",it="(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",rt=it.replace("w","w#"),ot="\\["+nt+"*("+it+")(?:"+nt+"*([*^$|!~]?=)"+nt+"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|("+rt+"))|)"+nt+"*\\]",st=":("+it+")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|"+ot+")*)|.*)\\)|)",at=new RegExp(nt+"+","g"),ut=new RegExp("^"+nt+"+|((?:^|[^\\\\])(?:\\\\.)*)"+nt+"+$","g"),ct=new RegExp("^"+nt+"*,"+nt+"*"),lt=new RegExp("^"+nt+"*([>+~]|"+nt+")"+nt+"*"),ft=new RegExp("="+nt+"*([^\\]'\"]*?)"+nt+"*\\]","g"),dt=new RegExp(st),pt=new RegExp("^"+rt+"$"),ht={ID:new RegExp("^#("+it+")"),CLASS:new RegExp("^\\.("+it+")"),TAG:new RegExp("^("+it.replace("w","w*")+")"),ATTR:new RegExp("^"+ot),PSEUDO:new RegExp("^"+st),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+nt+"*(even|odd|(([+-]|)(\\d*)n|)"+nt+"*(?:([+-]|)"+nt+"*(\\d+)|))"+nt+"*\\)|)","i"),bool:new RegExp("^(?:"+tt+")$","i"),needsContext:new RegExp("^"+nt+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+nt+"*((?:-\\d)?\\d*)"+nt+"*\\)|)(?=[^-]|$)","i")},mt=/^(?:input|select|textarea|button)$/i,gt=/^h\d$/i,vt=/^[^{]+\{\s*\[native \w/,yt=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,bt=/[+~]/,wt=/'|\\/g,xt=new RegExp("\\\\([\\da-f]{1,6}"+nt+"?|("+nt+")|.)","ig"),Ct=function(e,t,n){var i="0x"+t-65536;
return i!==i||n?t:0>i?String.fromCharCode(i+65536):String.fromCharCode(i>>10|55296,1023&i|56320)},Tt=function(){j()};try{Z.apply(G=K.call(_.childNodes),_.childNodes),G[_.childNodes.length].nodeType}catch(Et){Z={apply:G.length?function(e,t){J.apply(e,K.call(t))}:function(e,t){for(var n=e.length,i=0;e[n++]=t[i++];);e.length=n-1}}}x=t.support={},E=t.isXML=function(e){var t=e&&(e.ownerDocument||e).documentElement;return t?"HTML"!==t.nodeName:!1},j=t.setDocument=function(e){var t,n,i=e?e.ownerDocument||e:_;
return i!==L&&9===i.nodeType&&i.documentElement?(L=i,O=i.documentElement,n=i.defaultView,n&&n!==n.top&&(n.addEventListener?n.addEventListener("unload",Tt,!1):n.attachEvent&&n.attachEvent("onunload",Tt)),M=!E(i),x.attributes=r(function(e){return e.className="i",!e.getAttribute("className")}),x.getElementsByTagName=r(function(e){return e.appendChild(i.createComment("")),!e.getElementsByTagName("*").length}),x.getElementsByClassName=vt.test(i.getElementsByClassName),x.getById=r(function(e){return O.appendChild(e).id=I,!i.getElementsByName||!i.getElementsByName(I).length
}),x.getById?(C.find.ID=function(e,t){if("undefined"!=typeof t.getElementById&&M){var n=t.getElementById(e);return n&&n.parentNode?[n]:[]}},C.filter.ID=function(e){var t=e.replace(xt,Ct);return function(e){return e.getAttribute("id")===t}}):(delete C.find.ID,C.filter.ID=function(e){var t=e.replace(xt,Ct);return function(e){var n="undefined"!=typeof e.getAttributeNode&&e.getAttributeNode("id");return n&&n.value===t}}),C.find.TAG=x.getElementsByTagName?function(e,t){return"undefined"!=typeof t.getElementsByTagName?t.getElementsByTagName(e):x.qsa?t.querySelectorAll(e):void 0
}:function(e,t){var n,i=[],r=0,o=t.getElementsByTagName(e);if("*"===e){for(;n=o[r++];)1===n.nodeType&&i.push(n);return i}return o},C.find.CLASS=x.getElementsByClassName&&function(e,t){return M?t.getElementsByClassName(e):void 0},H=[],$=[],(x.qsa=vt.test(i.querySelectorAll))&&(r(function(e){O.appendChild(e).innerHTML="<a id='"+I+"'></a><select id='"+I+"-\f]' msallowcapture=''><option selected=''></option></select>",e.querySelectorAll("[msallowcapture^='']").length&&$.push("[*^$]="+nt+"*(?:''|\"\")"),e.querySelectorAll("[selected]").length||$.push("\\["+nt+"*(?:value|"+tt+")"),e.querySelectorAll("[id~="+I+"-]").length||$.push("~="),e.querySelectorAll(":checked").length||$.push(":checked"),e.querySelectorAll("a#"+I+"+*").length||$.push(".#.+[+~]")
}),r(function(e){var t=i.createElement("input");t.setAttribute("type","hidden"),e.appendChild(t).setAttribute("name","D"),e.querySelectorAll("[name=d]").length&&$.push("name"+nt+"*[*^$|!~]?="),e.querySelectorAll(":enabled").length||$.push(":enabled",":disabled"),e.querySelectorAll("*,:x"),$.push(",.*:")})),(x.matchesSelector=vt.test(R=O.matches||O.webkitMatchesSelector||O.mozMatchesSelector||O.oMatchesSelector||O.msMatchesSelector))&&r(function(e){x.disconnectedMatch=R.call(e,"div"),R.call(e,"[s!='']:x"),H.push("!=",st)
}),$=$.length&&new RegExp($.join("|")),H=H.length&&new RegExp(H.join("|")),t=vt.test(O.compareDocumentPosition),F=t||vt.test(O.contains)?function(e,t){var n=9===e.nodeType?e.documentElement:e,i=t&&t.parentNode;return e===i||!(!i||1!==i.nodeType||!(n.contains?n.contains(i):e.compareDocumentPosition&&16&e.compareDocumentPosition(i)))}:function(e,t){if(t)for(;t=t.parentNode;)if(t===e)return!0;return!1},X=t?function(e,t){if(e===t)return q=!0,0;var n=!e.compareDocumentPosition-!t.compareDocumentPosition;
return n?n:(n=(e.ownerDocument||e)===(t.ownerDocument||t)?e.compareDocumentPosition(t):1,1&n||!x.sortDetached&&t.compareDocumentPosition(e)===n?e===i||e.ownerDocument===_&&F(_,e)?-1:t===i||t.ownerDocument===_&&F(_,t)?1:D?et(D,e)-et(D,t):0:4&n?-1:1)}:function(e,t){if(e===t)return q=!0,0;var n,r=0,o=e.parentNode,a=t.parentNode,u=[e],c=[t];if(!o||!a)return e===i?-1:t===i?1:o?-1:a?1:D?et(D,e)-et(D,t):0;if(o===a)return s(e,t);for(n=e;n=n.parentNode;)u.unshift(n);for(n=t;n=n.parentNode;)c.unshift(n);for(;u[r]===c[r];)r++;
return r?s(u[r],c[r]):u[r]===_?-1:c[r]===_?1:0},i):L},t.matches=function(e,n){return t(e,null,null,n)},t.matchesSelector=function(e,n){if((e.ownerDocument||e)!==L&&j(e),n=n.replace(ft,"='$1']"),!(!x.matchesSelector||!M||H&&H.test(n)||$&&$.test(n)))try{var i=R.call(e,n);if(i||x.disconnectedMatch||e.document&&11!==e.document.nodeType)return i}catch(r){}return t(n,L,null,[e]).length>0},t.contains=function(e,t){return(e.ownerDocument||e)!==L&&j(e),F(e,t)},t.attr=function(e,t){(e.ownerDocument||e)!==L&&j(e);
var n=C.attrHandle[t.toLowerCase()],i=n&&Y.call(C.attrHandle,t.toLowerCase())?n(e,t,!M):void 0;return void 0!==i?i:x.attributes||!M?e.getAttribute(t):(i=e.getAttributeNode(t))&&i.specified?i.value:null},t.error=function(e){throw new Error("Syntax error, unrecognized expression: "+e)},t.uniqueSort=function(e){var t,n=[],i=0,r=0;if(q=!x.detectDuplicates,D=!x.sortStable&&e.slice(0),e.sort(X),q){for(;t=e[r++];)t===e[r]&&(i=n.push(r));for(;i--;)e.splice(n[i],1)}return D=null,e},T=t.getText=function(e){var t,n="",i=0,r=e.nodeType;
if(r){if(1===r||9===r||11===r){if("string"==typeof e.textContent)return e.textContent;for(e=e.firstChild;e;e=e.nextSibling)n+=T(e)}else if(3===r||4===r)return e.nodeValue}else for(;t=e[i++];)n+=T(t);return n},C=t.selectors={cacheLength:50,createPseudo:i,match:ht,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(e){return e[1]=e[1].replace(xt,Ct),e[3]=(e[3]||e[4]||e[5]||"").replace(xt,Ct),"~="===e[2]&&(e[3]=" "+e[3]+" "),e.slice(0,4)
},CHILD:function(e){return e[1]=e[1].toLowerCase(),"nth"===e[1].slice(0,3)?(e[3]||t.error(e[0]),e[4]=+(e[4]?e[5]+(e[6]||1):2*("even"===e[3]||"odd"===e[3])),e[5]=+(e[7]+e[8]||"odd"===e[3])):e[3]&&t.error(e[0]),e},PSEUDO:function(e){var t,n=!e[6]&&e[2];return ht.CHILD.test(e[0])?null:(e[3]?e[2]=e[4]||e[5]||"":n&&dt.test(n)&&(t=k(n,!0))&&(t=n.indexOf(")",n.length-t)-n.length)&&(e[0]=e[0].slice(0,t),e[2]=n.slice(0,t)),e.slice(0,3))}},filter:{TAG:function(e){var t=e.replace(xt,Ct).toLowerCase();return"*"===e?function(){return!0
}:function(e){return e.nodeName&&e.nodeName.toLowerCase()===t}},CLASS:function(e){var t=U[e+" "];return t||(t=new RegExp("(^|"+nt+")"+e+"("+nt+"|$)"))&&U(e,function(e){return t.test("string"==typeof e.className&&e.className||"undefined"!=typeof e.getAttribute&&e.getAttribute("class")||"")})},ATTR:function(e,n,i){return function(r){var o=t.attr(r,e);return null==o?"!="===n:n?(o+="","="===n?o===i:"!="===n?o!==i:"^="===n?i&&0===o.indexOf(i):"*="===n?i&&o.indexOf(i)>-1:"$="===n?i&&o.slice(-i.length)===i:"~="===n?(" "+o.replace(at," ")+" ").indexOf(i)>-1:"|="===n?o===i||o.slice(0,i.length+1)===i+"-":!1):!0
}},CHILD:function(e,t,n,i,r){var o="nth"!==e.slice(0,3),s="last"!==e.slice(-4),a="of-type"===t;return 1===i&&0===r?function(e){return!!e.parentNode}:function(t,n,u){var c,l,f,d,p,h,m=o!==s?"nextSibling":"previousSibling",g=t.parentNode,v=a&&t.nodeName.toLowerCase(),y=!u&&!a;if(g){if(o){for(;m;){for(f=t;f=f[m];)if(a?f.nodeName.toLowerCase()===v:1===f.nodeType)return!1;h=m="only"===e&&!h&&"nextSibling"}return!0}if(h=[s?g.firstChild:g.lastChild],s&&y){for(l=g[I]||(g[I]={}),c=l[e]||[],p=c[0]===P&&c[1],d=c[0]===P&&c[2],f=p&&g.childNodes[p];f=++p&&f&&f[m]||(d=p=0)||h.pop();)if(1===f.nodeType&&++d&&f===t){l[e]=[P,p,d];
break}}else if(y&&(c=(t[I]||(t[I]={}))[e])&&c[0]===P)d=c[1];else for(;(f=++p&&f&&f[m]||(d=p=0)||h.pop())&&((a?f.nodeName.toLowerCase()!==v:1!==f.nodeType)||!++d||(y&&((f[I]||(f[I]={}))[e]=[P,d]),f!==t)););return d-=r,d===i||d%i===0&&d/i>=0}}},PSEUDO:function(e,n){var r,o=C.pseudos[e]||C.setFilters[e.toLowerCase()]||t.error("unsupported pseudo: "+e);return o[I]?o(n):o.length>1?(r=[e,e,"",n],C.setFilters.hasOwnProperty(e.toLowerCase())?i(function(e,t){for(var i,r=o(e,n),s=r.length;s--;)i=et(e,r[s]),e[i]=!(t[i]=r[s])
}):function(e){return o(e,0,r)}):o}},pseudos:{not:i(function(e){var t=[],n=[],r=A(e.replace(ut,"$1"));return r[I]?i(function(e,t,n,i){for(var o,s=r(e,null,i,[]),a=e.length;a--;)(o=s[a])&&(e[a]=!(t[a]=o))}):function(e,i,o){return t[0]=e,r(t,null,o,n),t[0]=null,!n.pop()}}),has:i(function(e){return function(n){return t(e,n).length>0}}),contains:i(function(e){return e=e.replace(xt,Ct),function(t){return(t.textContent||t.innerText||T(t)).indexOf(e)>-1}}),lang:i(function(e){return pt.test(e||"")||t.error("unsupported lang: "+e),e=e.replace(xt,Ct).toLowerCase(),function(t){var n;
do if(n=M?t.lang:t.getAttribute("xml:lang")||t.getAttribute("lang"))return n=n.toLowerCase(),n===e||0===n.indexOf(e+"-");while((t=t.parentNode)&&1===t.nodeType);return!1}}),target:function(t){var n=e.location&&e.location.hash;return n&&n.slice(1)===t.id},root:function(e){return e===O},focus:function(e){return e===L.activeElement&&(!L.hasFocus||L.hasFocus())&&!!(e.type||e.href||~e.tabIndex)},enabled:function(e){return e.disabled===!1},disabled:function(e){return e.disabled===!0},checked:function(e){var t=e.nodeName.toLowerCase();
return"input"===t&&!!e.checked||"option"===t&&!!e.selected},selected:function(e){return e.parentNode&&e.parentNode.selectedIndex,e.selected===!0},empty:function(e){for(e=e.firstChild;e;e=e.nextSibling)if(e.nodeType<6)return!1;return!0},parent:function(e){return!C.pseudos.empty(e)},header:function(e){return gt.test(e.nodeName)},input:function(e){return mt.test(e.nodeName)},button:function(e){var t=e.nodeName.toLowerCase();return"input"===t&&"button"===e.type||"button"===t},text:function(e){var t;return"input"===e.nodeName.toLowerCase()&&"text"===e.type&&(null==(t=e.getAttribute("type"))||"text"===t.toLowerCase())
},first:c(function(){return[0]}),last:c(function(e,t){return[t-1]}),eq:c(function(e,t,n){return[0>n?n+t:n]}),even:c(function(e,t){for(var n=0;t>n;n+=2)e.push(n);return e}),odd:c(function(e,t){for(var n=1;t>n;n+=2)e.push(n);return e}),lt:c(function(e,t,n){for(var i=0>n?n+t:n;--i>=0;)e.push(i);return e}),gt:c(function(e,t,n){for(var i=0>n?n+t:n;++i<t;)e.push(i);return e})}},C.pseudos.nth=C.pseudos.eq;for(w in{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})C.pseudos[w]=a(w);for(w in{submit:!0,reset:!0})C.pseudos[w]=u(w);
return f.prototype=C.filters=C.pseudos,C.setFilters=new f,k=t.tokenize=function(e,n){var i,r,o,s,a,u,c,l=B[e+" "];if(l)return n?0:l.slice(0);for(a=e,u=[],c=C.preFilter;a;){(!i||(r=ct.exec(a)))&&(r&&(a=a.slice(r[0].length)||a),u.push(o=[])),i=!1,(r=lt.exec(a))&&(i=r.shift(),o.push({value:i,type:r[0].replace(ut," ")}),a=a.slice(i.length));for(s in C.filter)!(r=ht[s].exec(a))||c[s]&&!(r=c[s](r))||(i=r.shift(),o.push({value:i,type:s,matches:r}),a=a.slice(i.length));if(!i)break}return n?a.length:a?t.error(e):B(e,u).slice(0)
},A=t.compile=function(e,t){var n,i=[],r=[],o=z[e+" "];if(!o){for(t||(t=k(e)),n=t.length;n--;)o=y(t[n]),o[I]?i.push(o):r.push(o);o=z(e,b(r,i)),o.selector=e}return o},N=t.select=function(e,t,n,i){var r,o,s,a,u,c="function"==typeof e&&e,f=!i&&k(e=c.selector||e);if(n=n||[],1===f.length){if(o=f[0]=f[0].slice(0),o.length>2&&"ID"===(s=o[0]).type&&x.getById&&9===t.nodeType&&M&&C.relative[o[1].type]){if(t=(C.find.ID(s.matches[0].replace(xt,Ct),t)||[])[0],!t)return n;c&&(t=t.parentNode),e=e.slice(o.shift().value.length)
}for(r=ht.needsContext.test(e)?0:o.length;r--&&(s=o[r],!C.relative[a=s.type]);)if((u=C.find[a])&&(i=u(s.matches[0].replace(xt,Ct),bt.test(o[0].type)&&l(t.parentNode)||t))){if(o.splice(r,1),e=i.length&&d(o),!e)return Z.apply(n,i),n;break}}return(c||A(e,f))(i,t,!M,n,bt.test(e)&&l(t.parentNode)||t),n},x.sortStable=I.split("").sort(X).join("")===I,x.detectDuplicates=!!q,j(),x.sortDetached=r(function(e){return 1&e.compareDocumentPosition(L.createElement("div"))}),r(function(e){return e.innerHTML="<a href='#'></a>","#"===e.firstChild.getAttribute("href")
})||o("type|href|height|width",function(e,t,n){return n?void 0:e.getAttribute(t,"type"===t.toLowerCase()?1:2)}),x.attributes&&r(function(e){return e.innerHTML="<input/>",e.firstChild.setAttribute("value",""),""===e.firstChild.getAttribute("value")})||o("value",function(e,t,n){return n||"input"!==e.nodeName.toLowerCase()?void 0:e.defaultValue}),r(function(e){return null==e.getAttribute("disabled")})||o(tt,function(e,t,n){var i;return n?void 0:e[t]===!0?t.toLowerCase():(i=e.getAttributeNode(t))&&i.specified?i.value:null
}),t}(e);K.find=rt,K.expr=rt.selectors,K.expr[":"]=K.expr.pseudos,K.unique=rt.uniqueSort,K.text=rt.getText,K.isXMLDoc=rt.isXML,K.contains=rt.contains;var ot=K.expr.match.needsContext,st=/^<(\w+)\s*\/?>(?:<\/\1>|)$/,at=/^.[^:#\[\.,]*$/;K.filter=function(e,t,n){var i=t[0];return n&&(e=":not("+e+")"),1===t.length&&1===i.nodeType?K.find.matchesSelector(i,e)?[i]:[]:K.find.matches(e,K.grep(t,function(e){return 1===e.nodeType}))},K.fn.extend({find:function(e){var t,n=this.length,i=[],r=this;if("string"!=typeof e)return this.pushStack(K(e).filter(function(){for(t=0;n>t;t++)if(K.contains(r[t],this))return!0
}));for(t=0;n>t;t++)K.find(e,r[t],i);return i=this.pushStack(n>1?K.unique(i):i),i.selector=this.selector?this.selector+" "+e:e,i},filter:function(e){return this.pushStack(i(this,e||[],!1))},not:function(e){return this.pushStack(i(this,e||[],!0))},is:function(e){return!!i(this,"string"==typeof e&&ot.test(e)?K(e):e||[],!1).length}});var ut,ct=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,lt=K.fn.init=function(e,t){var n,i;if(!e)return this;if("string"==typeof e){if(n="<"===e[0]&&">"===e[e.length-1]&&e.length>=3?[null,e,null]:ct.exec(e),!n||!n[1]&&t)return!t||t.jquery?(t||ut).find(e):this.constructor(t).find(e);
if(n[1]){if(t=t instanceof K?t[0]:t,K.merge(this,K.parseHTML(n[1],t&&t.nodeType?t.ownerDocument||t:J,!0)),st.test(n[1])&&K.isPlainObject(t))for(n in t)K.isFunction(this[n])?this[n](t[n]):this.attr(n,t[n]);return this}return i=J.getElementById(n[2]),i&&i.parentNode&&(this.length=1,this[0]=i),this.context=J,this.selector=e,this}return e.nodeType?(this.context=this[0]=e,this.length=1,this):K.isFunction(e)?"undefined"!=typeof ut.ready?ut.ready(e):e(K):(void 0!==e.selector&&(this.selector=e.selector,this.context=e.context),K.makeArray(e,this))
};lt.prototype=K.fn,ut=K(J);var ft=/^(?:parents|prev(?:Until|All))/,dt={children:!0,contents:!0,next:!0,prev:!0};K.extend({dir:function(e,t,n){for(var i=[],r=void 0!==n;(e=e[t])&&9!==e.nodeType;)if(1===e.nodeType){if(r&&K(e).is(n))break;i.push(e)}return i},sibling:function(e,t){for(var n=[];e;e=e.nextSibling)1===e.nodeType&&e!==t&&n.push(e);return n}}),K.fn.extend({has:function(e){var t=K(e,this),n=t.length;return this.filter(function(){for(var e=0;n>e;e++)if(K.contains(this,t[e]))return!0})},closest:function(e,t){for(var n,i=0,r=this.length,o=[],s=ot.test(e)||"string"!=typeof e?K(e,t||this.context):0;r>i;i++)for(n=this[i];n&&n!==t;n=n.parentNode)if(n.nodeType<11&&(s?s.index(n)>-1:1===n.nodeType&&K.find.matchesSelector(n,e))){o.push(n);
break}return this.pushStack(o.length>1?K.unique(o):o)},index:function(e){return e?"string"==typeof e?X.call(K(e),this[0]):X.call(this,e.jquery?e[0]:e):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(e,t){return this.pushStack(K.unique(K.merge(this.get(),K(e,t))))},addBack:function(e){return this.add(null==e?this.prevObject:this.prevObject.filter(e))}}),K.each({parent:function(e){var t=e.parentNode;return t&&11!==t.nodeType?t:null},parents:function(e){return K.dir(e,"parentNode")
},parentsUntil:function(e,t,n){return K.dir(e,"parentNode",n)},next:function(e){return r(e,"nextSibling")},prev:function(e){return r(e,"previousSibling")},nextAll:function(e){return K.dir(e,"nextSibling")},prevAll:function(e){return K.dir(e,"previousSibling")},nextUntil:function(e,t,n){return K.dir(e,"nextSibling",n)},prevUntil:function(e,t,n){return K.dir(e,"previousSibling",n)},siblings:function(e){return K.sibling((e.parentNode||{}).firstChild,e)},children:function(e){return K.sibling(e.firstChild)
},contents:function(e){return e.contentDocument||K.merge([],e.childNodes)}},function(e,t){K.fn[e]=function(n,i){var r=K.map(this,t,n);return"Until"!==e.slice(-5)&&(i=n),i&&"string"==typeof i&&(r=K.filter(i,r)),this.length>1&&(dt[e]||K.unique(r),ft.test(e)&&r.reverse()),this.pushStack(r)}});var pt=/\S+/g,ht={};K.Callbacks=function(e){e="string"==typeof e?ht[e]||o(e):K.extend({},e);var t,n,i,r,s,a,u=[],c=!e.once&&[],l=function(o){for(t=e.memory&&o,n=!0,a=r||0,r=0,s=u.length,i=!0;u&&s>a;a++)if(u[a].apply(o[0],o[1])===!1&&e.stopOnFalse){t=!1;
break}i=!1,u&&(c?c.length&&l(c.shift()):t?u=[]:f.disable())},f={add:function(){if(u){var n=u.length;!function o(t){K.each(t,function(t,n){var i=K.type(n);"function"===i?e.unique&&f.has(n)||u.push(n):n&&n.length&&"string"!==i&&o(n)})}(arguments),i?s=u.length:t&&(r=n,l(t))}return this},remove:function(){return u&&K.each(arguments,function(e,t){for(var n;(n=K.inArray(t,u,n))>-1;)u.splice(n,1),i&&(s>=n&&s--,a>=n&&a--)}),this},has:function(e){return e?K.inArray(e,u)>-1:!(!u||!u.length)},empty:function(){return u=[],s=0,this
},disable:function(){return u=c=t=void 0,this},disabled:function(){return!u},lock:function(){return c=void 0,t||f.disable(),this},locked:function(){return!c},fireWith:function(e,t){return!u||n&&!c||(t=t||[],t=[e,t.slice?t.slice():t],i?c.push(t):l(t)),this},fire:function(){return f.fireWith(this,arguments),this},fired:function(){return!!n}};return f},K.extend({Deferred:function(e){var t=[["resolve","done",K.Callbacks("once memory"),"resolved"],["reject","fail",K.Callbacks("once memory"),"rejected"],["notify","progress",K.Callbacks("memory")]],n="pending",i={state:function(){return n
},always:function(){return r.done(arguments).fail(arguments),this},then:function(){var e=arguments;return K.Deferred(function(n){K.each(t,function(t,o){var s=K.isFunction(e[t])&&e[t];r[o[1]](function(){var e=s&&s.apply(this,arguments);e&&K.isFunction(e.promise)?e.promise().done(n.resolve).fail(n.reject).progress(n.notify):n[o[0]+"With"](this===i?n.promise():this,s?[e]:arguments)})}),e=null}).promise()},promise:function(e){return null!=e?K.extend(e,i):i}},r={};return i.pipe=i.then,K.each(t,function(e,o){var s=o[2],a=o[3];
i[o[1]]=s.add,a&&s.add(function(){n=a},t[1^e][2].disable,t[2][2].lock),r[o[0]]=function(){return r[o[0]+"With"](this===r?i:this,arguments),this},r[o[0]+"With"]=s.fireWith}),i.promise(r),e&&e.call(r,r),r},when:function(e){var t,n,i,r=0,o=U.call(arguments),s=o.length,a=1!==s||e&&K.isFunction(e.promise)?s:0,u=1===a?e:K.Deferred(),c=function(e,n,i){return function(r){n[e]=this,i[e]=arguments.length>1?U.call(arguments):r,i===t?u.notifyWith(n,i):--a||u.resolveWith(n,i)}};if(s>1)for(t=new Array(s),n=new Array(s),i=new Array(s);s>r;r++)o[r]&&K.isFunction(o[r].promise)?o[r].promise().done(c(r,i,o)).fail(u.reject).progress(c(r,n,t)):--a;
return a||u.resolveWith(i,o),u.promise()}});var mt;K.fn.ready=function(e){return K.ready.promise().done(e),this},K.extend({isReady:!1,readyWait:1,holdReady:function(e){e?K.readyWait++:K.ready(!0)},ready:function(e){(e===!0?--K.readyWait:K.isReady)||(K.isReady=!0,e!==!0&&--K.readyWait>0||(mt.resolveWith(J,[K]),K.fn.triggerHandler&&(K(J).triggerHandler("ready"),K(J).off("ready"))))}}),K.ready.promise=function(t){return mt||(mt=K.Deferred(),"complete"===J.readyState?setTimeout(K.ready):(J.addEventListener("DOMContentLoaded",s,!1),e.addEventListener("load",s,!1))),mt.promise(t)
},K.ready.promise();var gt=K.access=function(e,t,n,i,r,o,s){var a=0,u=e.length,c=null==n;if("object"===K.type(n)){r=!0;for(a in n)K.access(e,t,a,n[a],!0,o,s)}else if(void 0!==i&&(r=!0,K.isFunction(i)||(s=!0),c&&(s?(t.call(e,i),t=null):(c=t,t=function(e,t,n){return c.call(K(e),n)})),t))for(;u>a;a++)t(e[a],n,s?i:i.call(e[a],a,t(e[a],n)));return r?e:c?t.call(e):u?t(e[0],n):o};K.acceptData=function(e){return 1===e.nodeType||9===e.nodeType||!+e.nodeType},a.uid=1,a.accepts=K.acceptData,a.prototype={key:function(e){if(!a.accepts(e))return 0;
var t={},n=e[this.expando];if(!n){n=a.uid++;try{t[this.expando]={value:n},Object.defineProperties(e,t)}catch(i){t[this.expando]=n,K.extend(e,t)}}return this.cache[n]||(this.cache[n]={}),n},set:function(e,t,n){var i,r=this.key(e),o=this.cache[r];if("string"==typeof t)o[t]=n;else if(K.isEmptyObject(o))K.extend(this.cache[r],t);else for(i in t)o[i]=t[i];return o},get:function(e,t){var n=this.cache[this.key(e)];return void 0===t?n:n[t]},access:function(e,t,n){var i;return void 0===t||t&&"string"==typeof t&&void 0===n?(i=this.get(e,t),void 0!==i?i:this.get(e,K.camelCase(t))):(this.set(e,t,n),void 0!==n?n:t)
},remove:function(e,t){var n,i,r,o=this.key(e),s=this.cache[o];if(void 0===t)this.cache[o]={};else{K.isArray(t)?i=t.concat(t.map(K.camelCase)):(r=K.camelCase(t),t in s?i=[t,r]:(i=r,i=i in s?[i]:i.match(pt)||[])),n=i.length;for(;n--;)delete s[i[n]]}},hasData:function(e){return!K.isEmptyObject(this.cache[e[this.expando]]||{})},discard:function(e){e[this.expando]&&delete this.cache[e[this.expando]]}};var vt=new a,yt=new a,bt=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,wt=/([A-Z])/g;K.extend({hasData:function(e){return yt.hasData(e)||vt.hasData(e)
},data:function(e,t,n){return yt.access(e,t,n)},removeData:function(e,t){yt.remove(e,t)},_data:function(e,t,n){return vt.access(e,t,n)},_removeData:function(e,t){vt.remove(e,t)}}),K.fn.extend({data:function(e,t){var n,i,r,o=this[0],s=o&&o.attributes;if(void 0===e){if(this.length&&(r=yt.get(o),1===o.nodeType&&!vt.get(o,"hasDataAttrs"))){for(n=s.length;n--;)s[n]&&(i=s[n].name,0===i.indexOf("data-")&&(i=K.camelCase(i.slice(5)),u(o,i,r[i])));vt.set(o,"hasDataAttrs",!0)}return r}return"object"==typeof e?this.each(function(){yt.set(this,e)
}):gt(this,function(t){var n,i=K.camelCase(e);if(o&&void 0===t){if(n=yt.get(o,e),void 0!==n)return n;if(n=yt.get(o,i),void 0!==n)return n;if(n=u(o,i,void 0),void 0!==n)return n}else this.each(function(){var n=yt.get(this,i);yt.set(this,i,t),-1!==e.indexOf("-")&&void 0!==n&&yt.set(this,e,t)})},null,t,arguments.length>1,null,!0)},removeData:function(e){return this.each(function(){yt.remove(this,e)})}}),K.extend({queue:function(e,t,n){var i;return e?(t=(t||"fx")+"queue",i=vt.get(e,t),n&&(!i||K.isArray(n)?i=vt.access(e,t,K.makeArray(n)):i.push(n)),i||[]):void 0
},dequeue:function(e,t){t=t||"fx";var n=K.queue(e,t),i=n.length,r=n.shift(),o=K._queueHooks(e,t),s=function(){K.dequeue(e,t)};"inprogress"===r&&(r=n.shift(),i--),r&&("fx"===t&&n.unshift("inprogress"),delete o.stop,r.call(e,s,o)),!i&&o&&o.empty.fire()},_queueHooks:function(e,t){var n=t+"queueHooks";return vt.get(e,n)||vt.access(e,n,{empty:K.Callbacks("once memory").add(function(){vt.remove(e,[t+"queue",n])})})}}),K.fn.extend({queue:function(e,t){var n=2;return"string"!=typeof e&&(t=e,e="fx",n--),arguments.length<n?K.queue(this[0],e):void 0===t?this:this.each(function(){var n=K.queue(this,e,t);
K._queueHooks(this,e),"fx"===e&&"inprogress"!==n[0]&&K.dequeue(this,e)})},dequeue:function(e){return this.each(function(){K.dequeue(this,e)})},clearQueue:function(e){return this.queue(e||"fx",[])},promise:function(e,t){var n,i=1,r=K.Deferred(),o=this,s=this.length,a=function(){--i||r.resolveWith(o,[o])};for("string"!=typeof e&&(t=e,e=void 0),e=e||"fx";s--;)n=vt.get(o[s],e+"queueHooks"),n&&n.empty&&(i++,n.empty.add(a));return a(),r.promise(t)}});var xt=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,Ct=["Top","Right","Bottom","Left"],Tt=function(e,t){return e=t||e,"none"===K.css(e,"display")||!K.contains(e.ownerDocument,e)
},Et=/^(?:checkbox|radio)$/i;!function(){var e=J.createDocumentFragment(),t=e.appendChild(J.createElement("div")),n=J.createElement("input");n.setAttribute("type","radio"),n.setAttribute("checked","checked"),n.setAttribute("name","t"),t.appendChild(n),Q.checkClone=t.cloneNode(!0).cloneNode(!0).lastChild.checked,t.innerHTML="<textarea>x</textarea>",Q.noCloneChecked=!!t.cloneNode(!0).lastChild.defaultValue}();var kt="undefined";Q.focusinBubbles="onfocusin"in e;var At=/^key/,Nt=/^(?:mouse|pointer|contextmenu)|click/,St=/^(?:focusinfocus|focusoutblur)$/,Dt=/^([^.]*)(?:\.(.+)|)$/;
K.event={global:{},add:function(e,t,n,i,r){var o,s,a,u,c,l,f,d,p,h,m,g=vt.get(e);if(g)for(n.handler&&(o=n,n=o.handler,r=o.selector),n.guid||(n.guid=K.guid++),(u=g.events)||(u=g.events={}),(s=g.handle)||(s=g.handle=function(t){return typeof K!==kt&&K.event.triggered!==t.type?K.event.dispatch.apply(e,arguments):void 0}),t=(t||"").match(pt)||[""],c=t.length;c--;)a=Dt.exec(t[c])||[],p=m=a[1],h=(a[2]||"").split(".").sort(),p&&(f=K.event.special[p]||{},p=(r?f.delegateType:f.bindType)||p,f=K.event.special[p]||{},l=K.extend({type:p,origType:m,data:i,handler:n,guid:n.guid,selector:r,needsContext:r&&K.expr.match.needsContext.test(r),namespace:h.join(".")},o),(d=u[p])||(d=u[p]=[],d.delegateCount=0,f.setup&&f.setup.call(e,i,h,s)!==!1||e.addEventListener&&e.addEventListener(p,s,!1)),f.add&&(f.add.call(e,l),l.handler.guid||(l.handler.guid=n.guid)),r?d.splice(d.delegateCount++,0,l):d.push(l),K.event.global[p]=!0)
},remove:function(e,t,n,i,r){var o,s,a,u,c,l,f,d,p,h,m,g=vt.hasData(e)&&vt.get(e);if(g&&(u=g.events)){for(t=(t||"").match(pt)||[""],c=t.length;c--;)if(a=Dt.exec(t[c])||[],p=m=a[1],h=(a[2]||"").split(".").sort(),p){for(f=K.event.special[p]||{},p=(i?f.delegateType:f.bindType)||p,d=u[p]||[],a=a[2]&&new RegExp("(^|\\.)"+h.join("\\.(?:.*\\.|)")+"(\\.|$)"),s=o=d.length;o--;)l=d[o],!r&&m!==l.origType||n&&n.guid!==l.guid||a&&!a.test(l.namespace)||i&&i!==l.selector&&("**"!==i||!l.selector)||(d.splice(o,1),l.selector&&d.delegateCount--,f.remove&&f.remove.call(e,l));
s&&!d.length&&(f.teardown&&f.teardown.call(e,h,g.handle)!==!1||K.removeEvent(e,p,g.handle),delete u[p])}else for(p in u)K.event.remove(e,p+t[c],n,i,!0);K.isEmptyObject(u)&&(delete g.handle,vt.remove(e,"events"))}},trigger:function(t,n,i,r){var o,s,a,u,c,l,f,d=[i||J],p=G.call(t,"type")?t.type:t,h=G.call(t,"namespace")?t.namespace.split("."):[];if(s=a=i=i||J,3!==i.nodeType&&8!==i.nodeType&&!St.test(p+K.event.triggered)&&(p.indexOf(".")>=0&&(h=p.split("."),p=h.shift(),h.sort()),c=p.indexOf(":")<0&&"on"+p,t=t[K.expando]?t:new K.Event(p,"object"==typeof t&&t),t.isTrigger=r?2:3,t.namespace=h.join("."),t.namespace_re=t.namespace?new RegExp("(^|\\.)"+h.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,t.result=void 0,t.target||(t.target=i),n=null==n?[t]:K.makeArray(n,[t]),f=K.event.special[p]||{},r||!f.trigger||f.trigger.apply(i,n)!==!1)){if(!r&&!f.noBubble&&!K.isWindow(i)){for(u=f.delegateType||p,St.test(u+p)||(s=s.parentNode);s;s=s.parentNode)d.push(s),a=s;
a===(i.ownerDocument||J)&&d.push(a.defaultView||a.parentWindow||e)}for(o=0;(s=d[o++])&&!t.isPropagationStopped();)t.type=o>1?u:f.bindType||p,l=(vt.get(s,"events")||{})[t.type]&&vt.get(s,"handle"),l&&l.apply(s,n),l=c&&s[c],l&&l.apply&&K.acceptData(s)&&(t.result=l.apply(s,n),t.result===!1&&t.preventDefault());return t.type=p,r||t.isDefaultPrevented()||f._default&&f._default.apply(d.pop(),n)!==!1||!K.acceptData(i)||c&&K.isFunction(i[p])&&!K.isWindow(i)&&(a=i[c],a&&(i[c]=null),K.event.triggered=p,i[p](),K.event.triggered=void 0,a&&(i[c]=a)),t.result
}},dispatch:function(e){e=K.event.fix(e);var t,n,i,r,o,s=[],a=U.call(arguments),u=(vt.get(this,"events")||{})[e.type]||[],c=K.event.special[e.type]||{};if(a[0]=e,e.delegateTarget=this,!c.preDispatch||c.preDispatch.call(this,e)!==!1){for(s=K.event.handlers.call(this,e,u),t=0;(r=s[t++])&&!e.isPropagationStopped();)for(e.currentTarget=r.elem,n=0;(o=r.handlers[n++])&&!e.isImmediatePropagationStopped();)(!e.namespace_re||e.namespace_re.test(o.namespace))&&(e.handleObj=o,e.data=o.data,i=((K.event.special[o.origType]||{}).handle||o.handler).apply(r.elem,a),void 0!==i&&(e.result=i)===!1&&(e.preventDefault(),e.stopPropagation()));
return c.postDispatch&&c.postDispatch.call(this,e),e.result}},handlers:function(e,t){var n,i,r,o,s=[],a=t.delegateCount,u=e.target;if(a&&u.nodeType&&(!e.button||"click"!==e.type))for(;u!==this;u=u.parentNode||this)if(u.disabled!==!0||"click"!==e.type){for(i=[],n=0;a>n;n++)o=t[n],r=o.selector+" ",void 0===i[r]&&(i[r]=o.needsContext?K(r,this).index(u)>=0:K.find(r,this,null,[u]).length),i[r]&&i.push(o);i.length&&s.push({elem:u,handlers:i})}return a<t.length&&s.push({elem:this,handlers:t.slice(a)}),s
},props:"altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),fixHooks:{},keyHooks:{props:"char charCode key keyCode".split(" "),filter:function(e,t){return null==e.which&&(e.which=null!=t.charCode?t.charCode:t.keyCode),e}},mouseHooks:{props:"button buttons clientX clientY offsetX offsetY pageX pageY screenX screenY toElement".split(" "),filter:function(e,t){var n,i,r,o=t.button;return null==e.pageX&&null!=t.clientX&&(n=e.target.ownerDocument||J,i=n.documentElement,r=n.body,e.pageX=t.clientX+(i&&i.scrollLeft||r&&r.scrollLeft||0)-(i&&i.clientLeft||r&&r.clientLeft||0),e.pageY=t.clientY+(i&&i.scrollTop||r&&r.scrollTop||0)-(i&&i.clientTop||r&&r.clientTop||0)),e.which||void 0===o||(e.which=1&o?1:2&o?3:4&o?2:0),e
}},fix:function(e){if(e[K.expando])return e;var t,n,i,r=e.type,o=e,s=this.fixHooks[r];for(s||(this.fixHooks[r]=s=Nt.test(r)?this.mouseHooks:At.test(r)?this.keyHooks:{}),i=s.props?this.props.concat(s.props):this.props,e=new K.Event(o),t=i.length;t--;)n=i[t],e[n]=o[n];return e.target||(e.target=J),3===e.target.nodeType&&(e.target=e.target.parentNode),s.filter?s.filter(e,o):e},special:{load:{noBubble:!0},focus:{trigger:function(){return this!==f()&&this.focus?(this.focus(),!1):void 0},delegateType:"focusin"},blur:{trigger:function(){return this===f()&&this.blur?(this.blur(),!1):void 0
},delegateType:"focusout"},click:{trigger:function(){return"checkbox"===this.type&&this.click&&K.nodeName(this,"input")?(this.click(),!1):void 0},_default:function(e){return K.nodeName(e.target,"a")}},beforeunload:{postDispatch:function(e){void 0!==e.result&&e.originalEvent&&(e.originalEvent.returnValue=e.result)}}},simulate:function(e,t,n,i){var r=K.extend(new K.Event,n,{type:e,isSimulated:!0,originalEvent:{}});i?K.event.trigger(r,null,t):K.event.dispatch.call(t,r),r.isDefaultPrevented()&&n.preventDefault()
}},K.removeEvent=function(e,t,n){e.removeEventListener&&e.removeEventListener(t,n,!1)},K.Event=function(e,t){return this instanceof K.Event?(e&&e.type?(this.originalEvent=e,this.type=e.type,this.isDefaultPrevented=e.defaultPrevented||void 0===e.defaultPrevented&&e.returnValue===!1?c:l):this.type=e,t&&K.extend(this,t),this.timeStamp=e&&e.timeStamp||K.now(),void(this[K.expando]=!0)):new K.Event(e,t)},K.Event.prototype={isDefaultPrevented:l,isPropagationStopped:l,isImmediatePropagationStopped:l,preventDefault:function(){var e=this.originalEvent;
this.isDefaultPrevented=c,e&&e.preventDefault&&e.preventDefault()},stopPropagation:function(){var e=this.originalEvent;this.isPropagationStopped=c,e&&e.stopPropagation&&e.stopPropagation()},stopImmediatePropagation:function(){var e=this.originalEvent;this.isImmediatePropagationStopped=c,e&&e.stopImmediatePropagation&&e.stopImmediatePropagation(),this.stopPropagation()}},K.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(e,t){K.event.special[e]={delegateType:t,bindType:t,handle:function(e){var n,i=this,r=e.relatedTarget,o=e.handleObj;
return(!r||r!==i&&!K.contains(i,r))&&(e.type=o.origType,n=o.handler.apply(this,arguments),e.type=t),n}}}),Q.focusinBubbles||K.each({focus:"focusin",blur:"focusout"},function(e,t){var n=function(e){K.event.simulate(t,e.target,K.event.fix(e),!0)};K.event.special[t]={setup:function(){var i=this.ownerDocument||this,r=vt.access(i,t);r||i.addEventListener(e,n,!0),vt.access(i,t,(r||0)+1)},teardown:function(){var i=this.ownerDocument||this,r=vt.access(i,t)-1;r?vt.access(i,t,r):(i.removeEventListener(e,n,!0),vt.remove(i,t))
}}}),K.fn.extend({on:function(e,t,n,i,r){var o,s;if("object"==typeof e){"string"!=typeof t&&(n=n||t,t=void 0);for(s in e)this.on(s,t,n,e[s],r);return this}if(null==n&&null==i?(i=t,n=t=void 0):null==i&&("string"==typeof t?(i=n,n=void 0):(i=n,n=t,t=void 0)),i===!1)i=l;else if(!i)return this;return 1===r&&(o=i,i=function(e){return K().off(e),o.apply(this,arguments)},i.guid=o.guid||(o.guid=K.guid++)),this.each(function(){K.event.add(this,e,i,n,t)})},one:function(e,t,n,i){return this.on(e,t,n,i,1)},off:function(e,t,n){var i,r;
if(e&&e.preventDefault&&e.handleObj)return i=e.handleObj,K(e.delegateTarget).off(i.namespace?i.origType+"."+i.namespace:i.origType,i.selector,i.handler),this;if("object"==typeof e){for(r in e)this.off(r,t,e[r]);return this}return(t===!1||"function"==typeof t)&&(n=t,t=void 0),n===!1&&(n=l),this.each(function(){K.event.remove(this,e,n,t)})},trigger:function(e,t){return this.each(function(){K.event.trigger(e,t,this)})},triggerHandler:function(e,t){var n=this[0];return n?K.event.trigger(e,t,n,!0):void 0
}});var qt=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,jt=/<([\w:]+)/,Lt=/<|&#?\w+;/,Ot=/<(?:script|style|link)/i,Mt=/checked\s*(?:[^=]|=\s*.checked.)/i,$t=/^$|\/(?:java|ecma)script/i,Ht=/^true\/(.*)/,Rt=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,Ft={option:[1,"<select multiple='multiple'>","</select>"],thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};
Ft.optgroup=Ft.option,Ft.tbody=Ft.tfoot=Ft.colgroup=Ft.caption=Ft.thead,Ft.th=Ft.td,K.extend({clone:function(e,t,n){var i,r,o,s,a=e.cloneNode(!0),u=K.contains(e.ownerDocument,e);if(!(Q.noCloneChecked||1!==e.nodeType&&11!==e.nodeType||K.isXMLDoc(e)))for(s=v(a),o=v(e),i=0,r=o.length;r>i;i++)y(o[i],s[i]);if(t)if(n)for(o=o||v(e),s=s||v(a),i=0,r=o.length;r>i;i++)g(o[i],s[i]);else g(e,a);return s=v(a,"script"),s.length>0&&m(s,!u&&v(e,"script")),a},buildFragment:function(e,t,n,i){for(var r,o,s,a,u,c,l=t.createDocumentFragment(),f=[],d=0,p=e.length;p>d;d++)if(r=e[d],r||0===r)if("object"===K.type(r))K.merge(f,r.nodeType?[r]:r);
else if(Lt.test(r)){for(o=o||l.appendChild(t.createElement("div")),s=(jt.exec(r)||["",""])[1].toLowerCase(),a=Ft[s]||Ft._default,o.innerHTML=a[1]+r.replace(qt,"<$1></$2>")+a[2],c=a[0];c--;)o=o.lastChild;K.merge(f,o.childNodes),o=l.firstChild,o.textContent=""}else f.push(t.createTextNode(r));for(l.textContent="",d=0;r=f[d++];)if((!i||-1===K.inArray(r,i))&&(u=K.contains(r.ownerDocument,r),o=v(l.appendChild(r),"script"),u&&m(o),n))for(c=0;r=o[c++];)$t.test(r.type||"")&&n.push(r);return l},cleanData:function(e){for(var t,n,i,r,o=K.event.special,s=0;void 0!==(n=e[s]);s++){if(K.acceptData(n)&&(r=n[vt.expando],r&&(t=vt.cache[r]))){if(t.events)for(i in t.events)o[i]?K.event.remove(n,i):K.removeEvent(n,i,t.handle);
vt.cache[r]&&delete vt.cache[r]}delete yt.cache[n[yt.expando]]}}}),K.fn.extend({text:function(e){return gt(this,function(e){return void 0===e?K.text(this):this.empty().each(function(){(1===this.nodeType||11===this.nodeType||9===this.nodeType)&&(this.textContent=e)})},null,e,arguments.length)},append:function(){return this.domManip(arguments,function(e){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var t=d(this,e);t.appendChild(e)}})},prepend:function(){return this.domManip(arguments,function(e){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var t=d(this,e);
t.insertBefore(e,t.firstChild)}})},before:function(){return this.domManip(arguments,function(e){this.parentNode&&this.parentNode.insertBefore(e,this)})},after:function(){return this.domManip(arguments,function(e){this.parentNode&&this.parentNode.insertBefore(e,this.nextSibling)})},remove:function(e,t){for(var n,i=e?K.filter(e,this):this,r=0;null!=(n=i[r]);r++)t||1!==n.nodeType||K.cleanData(v(n)),n.parentNode&&(t&&K.contains(n.ownerDocument,n)&&m(v(n,"script")),n.parentNode.removeChild(n));return this
},empty:function(){for(var e,t=0;null!=(e=this[t]);t++)1===e.nodeType&&(K.cleanData(v(e,!1)),e.textContent="");return this},clone:function(e,t){return e=null==e?!1:e,t=null==t?e:t,this.map(function(){return K.clone(this,e,t)})},html:function(e){return gt(this,function(e){var t=this[0]||{},n=0,i=this.length;if(void 0===e&&1===t.nodeType)return t.innerHTML;if("string"==typeof e&&!Ot.test(e)&&!Ft[(jt.exec(e)||["",""])[1].toLowerCase()]){e=e.replace(qt,"<$1></$2>");try{for(;i>n;n++)t=this[n]||{},1===t.nodeType&&(K.cleanData(v(t,!1)),t.innerHTML=e);
t=0}catch(r){}}t&&this.empty().append(e)},null,e,arguments.length)},replaceWith:function(){var e=arguments[0];return this.domManip(arguments,function(t){e=this.parentNode,K.cleanData(v(this)),e&&e.replaceChild(t,this)}),e&&(e.length||e.nodeType)?this:this.remove()},detach:function(e){return this.remove(e,!0)},domManip:function(e,t){e=B.apply([],e);var n,i,r,o,s,a,u=0,c=this.length,l=this,f=c-1,d=e[0],m=K.isFunction(d);if(m||c>1&&"string"==typeof d&&!Q.checkClone&&Mt.test(d))return this.each(function(n){var i=l.eq(n);
m&&(e[0]=d.call(this,n,i.html())),i.domManip(e,t)});if(c&&(n=K.buildFragment(e,this[0].ownerDocument,!1,this),i=n.firstChild,1===n.childNodes.length&&(n=i),i)){for(r=K.map(v(n,"script"),p),o=r.length;c>u;u++)s=n,u!==f&&(s=K.clone(s,!0,!0),o&&K.merge(r,v(s,"script"))),t.call(this[u],s,u);if(o)for(a=r[r.length-1].ownerDocument,K.map(r,h),u=0;o>u;u++)s=r[u],$t.test(s.type||"")&&!vt.access(s,"globalEval")&&K.contains(a,s)&&(s.src?K._evalUrl&&K._evalUrl(s.src):K.globalEval(s.textContent.replace(Rt,"")))
}return this}}),K.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(e,t){K.fn[e]=function(e){for(var n,i=[],r=K(e),o=r.length-1,s=0;o>=s;s++)n=s===o?this:this.clone(!0),K(r[s])[t](n),z.apply(i,n.get());return this.pushStack(i)}});var It,_t={},Pt=/^margin/,Wt=new RegExp("^("+xt+")(?!px)[a-z%]+$","i"),Ut=function(t){return t.ownerDocument.defaultView.opener?t.ownerDocument.defaultView.getComputedStyle(t,null):e.getComputedStyle(t,null)
};!function(){function t(){s.style.cssText="-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;display:block;margin-top:1%;top:1%;border:1px;padding:1px;width:4px;position:absolute",s.innerHTML="",r.appendChild(o);var t=e.getComputedStyle(s,null);n="1%"!==t.top,i="4px"===t.width,r.removeChild(o)}var n,i,r=J.documentElement,o=J.createElement("div"),s=J.createElement("div");s.style&&(s.style.backgroundClip="content-box",s.cloneNode(!0).style.backgroundClip="",Q.clearCloneStyle="content-box"===s.style.backgroundClip,o.style.cssText="border:0;width:0;height:0;top:0;left:-9999px;margin-top:1px;position:absolute",o.appendChild(s),e.getComputedStyle&&K.extend(Q,{pixelPosition:function(){return t(),n
},boxSizingReliable:function(){return null==i&&t(),i},reliableMarginRight:function(){var t,n=s.appendChild(J.createElement("div"));return n.style.cssText=s.style.cssText="-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0",n.style.marginRight=n.style.width="0",s.style.width="1px",r.appendChild(o),t=!parseFloat(e.getComputedStyle(n,null).marginRight),r.removeChild(o),s.removeChild(n),t}}))}(),K.swap=function(e,t,n,i){var r,o,s={};
for(o in t)s[o]=e.style[o],e.style[o]=t[o];r=n.apply(e,i||[]);for(o in t)e.style[o]=s[o];return r};var Bt=/^(none|table(?!-c[ea]).+)/,zt=new RegExp("^("+xt+")(.*)$","i"),Xt=new RegExp("^([+-])=("+xt+")","i"),Vt={position:"absolute",visibility:"hidden",display:"block"},Yt={letterSpacing:"0",fontWeight:"400"},Gt=["Webkit","O","Moz","ms"];K.extend({cssHooks:{opacity:{get:function(e,t){if(t){var n=x(e,"opacity");return""===n?"1":n}}}},cssNumber:{columnCount:!0,fillOpacity:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{"float":"cssFloat"},style:function(e,t,n,i){if(e&&3!==e.nodeType&&8!==e.nodeType&&e.style){var r,o,s,a=K.camelCase(t),u=e.style;
return t=K.cssProps[a]||(K.cssProps[a]=T(u,a)),s=K.cssHooks[t]||K.cssHooks[a],void 0===n?s&&"get"in s&&void 0!==(r=s.get(e,!1,i))?r:u[t]:(o=typeof n,"string"===o&&(r=Xt.exec(n))&&(n=(r[1]+1)*r[2]+parseFloat(K.css(e,t)),o="number"),void(null!=n&&n===n&&("number"!==o||K.cssNumber[a]||(n+="px"),Q.clearCloneStyle||""!==n||0!==t.indexOf("background")||(u[t]="inherit"),s&&"set"in s&&void 0===(n=s.set(e,n,i))||(u[t]=n))))}},css:function(e,t,n,i){var r,o,s,a=K.camelCase(t);return t=K.cssProps[a]||(K.cssProps[a]=T(e.style,a)),s=K.cssHooks[t]||K.cssHooks[a],s&&"get"in s&&(r=s.get(e,!0,n)),void 0===r&&(r=x(e,t,i)),"normal"===r&&t in Yt&&(r=Yt[t]),""===n||n?(o=parseFloat(r),n===!0||K.isNumeric(o)?o||0:r):r
}}),K.each(["height","width"],function(e,t){K.cssHooks[t]={get:function(e,n,i){return n?Bt.test(K.css(e,"display"))&&0===e.offsetWidth?K.swap(e,Vt,function(){return A(e,t,i)}):A(e,t,i):void 0},set:function(e,n,i){var r=i&&Ut(e);return E(e,n,i?k(e,t,i,"border-box"===K.css(e,"boxSizing",!1,r),r):0)}}}),K.cssHooks.marginRight=C(Q.reliableMarginRight,function(e,t){return t?K.swap(e,{display:"inline-block"},x,[e,"marginRight"]):void 0}),K.each({margin:"",padding:"",border:"Width"},function(e,t){K.cssHooks[e+t]={expand:function(n){for(var i=0,r={},o="string"==typeof n?n.split(" "):[n];4>i;i++)r[e+Ct[i]+t]=o[i]||o[i-2]||o[0];
return r}},Pt.test(e)||(K.cssHooks[e+t].set=E)}),K.fn.extend({css:function(e,t){return gt(this,function(e,t,n){var i,r,o={},s=0;if(K.isArray(t)){for(i=Ut(e),r=t.length;r>s;s++)o[t[s]]=K.css(e,t[s],!1,i);return o}return void 0!==n?K.style(e,t,n):K.css(e,t)},e,t,arguments.length>1)},show:function(){return N(this,!0)},hide:function(){return N(this)},toggle:function(e){return"boolean"==typeof e?e?this.show():this.hide():this.each(function(){Tt(this)?K(this).show():K(this).hide()})}}),K.Tween=S,S.prototype={constructor:S,init:function(e,t,n,i,r,o){this.elem=e,this.prop=n,this.easing=r||"swing",this.options=t,this.start=this.now=this.cur(),this.end=i,this.unit=o||(K.cssNumber[n]?"":"px")
},cur:function(){var e=S.propHooks[this.prop];return e&&e.get?e.get(this):S.propHooks._default.get(this)},run:function(e){var t,n=S.propHooks[this.prop];return this.pos=t=this.options.duration?K.easing[this.easing](e,this.options.duration*e,0,1,this.options.duration):e,this.now=(this.end-this.start)*t+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),n&&n.set?n.set(this):S.propHooks._default.set(this),this}},S.prototype.init.prototype=S.prototype,S.propHooks={_default:{get:function(e){var t;
return null==e.elem[e.prop]||e.elem.style&&null!=e.elem.style[e.prop]?(t=K.css(e.elem,e.prop,""),t&&"auto"!==t?t:0):e.elem[e.prop]},set:function(e){K.fx.step[e.prop]?K.fx.step[e.prop](e):e.elem.style&&(null!=e.elem.style[K.cssProps[e.prop]]||K.cssHooks[e.prop])?K.style(e.elem,e.prop,e.now+e.unit):e.elem[e.prop]=e.now}}},S.propHooks.scrollTop=S.propHooks.scrollLeft={set:function(e){e.elem.nodeType&&e.elem.parentNode&&(e.elem[e.prop]=e.now)}},K.easing={linear:function(e){return e},swing:function(e){return.5-Math.cos(e*Math.PI)/2
}},K.fx=S.prototype.init,K.fx.step={};var Qt,Jt,Zt=/^(?:toggle|show|hide)$/,Kt=new RegExp("^(?:([+-])=|)("+xt+")([a-z%]*)$","i"),en=/queueHooks$/,tn=[L],nn={"*":[function(e,t){var n=this.createTween(e,t),i=n.cur(),r=Kt.exec(t),o=r&&r[3]||(K.cssNumber[e]?"":"px"),s=(K.cssNumber[e]||"px"!==o&&+i)&&Kt.exec(K.css(n.elem,e)),a=1,u=20;if(s&&s[3]!==o){o=o||s[3],r=r||[],s=+i||1;do a=a||".5",s/=a,K.style(n.elem,e,s+o);while(a!==(a=n.cur()/i)&&1!==a&&--u)}return r&&(s=n.start=+s||+i||0,n.unit=o,n.end=r[1]?s+(r[1]+1)*r[2]:+r[2]),n
}]};K.Animation=K.extend(M,{tweener:function(e,t){K.isFunction(e)?(t=e,e=["*"]):e=e.split(" ");for(var n,i=0,r=e.length;r>i;i++)n=e[i],nn[n]=nn[n]||[],nn[n].unshift(t)},prefilter:function(e,t){t?tn.unshift(e):tn.push(e)}}),K.speed=function(e,t,n){var i=e&&"object"==typeof e?K.extend({},e):{complete:n||!n&&t||K.isFunction(e)&&e,duration:e,easing:n&&t||t&&!K.isFunction(t)&&t};return i.duration=K.fx.off?0:"number"==typeof i.duration?i.duration:i.duration in K.fx.speeds?K.fx.speeds[i.duration]:K.fx.speeds._default,(null==i.queue||i.queue===!0)&&(i.queue="fx"),i.old=i.complete,i.complete=function(){K.isFunction(i.old)&&i.old.call(this),i.queue&&K.dequeue(this,i.queue)
},i},K.fn.extend({fadeTo:function(e,t,n,i){return this.filter(Tt).css("opacity",0).show().end().animate({opacity:t},e,n,i)},animate:function(e,t,n,i){var r=K.isEmptyObject(e),o=K.speed(t,n,i),s=function(){var t=M(this,K.extend({},e),o);(r||vt.get(this,"finish"))&&t.stop(!0)};return s.finish=s,r||o.queue===!1?this.each(s):this.queue(o.queue,s)},stop:function(e,t,n){var i=function(e){var t=e.stop;delete e.stop,t(n)};return"string"!=typeof e&&(n=t,t=e,e=void 0),t&&e!==!1&&this.queue(e||"fx",[]),this.each(function(){var t=!0,r=null!=e&&e+"queueHooks",o=K.timers,s=vt.get(this);
if(r)s[r]&&s[r].stop&&i(s[r]);else for(r in s)s[r]&&s[r].stop&&en.test(r)&&i(s[r]);for(r=o.length;r--;)o[r].elem!==this||null!=e&&o[r].queue!==e||(o[r].anim.stop(n),t=!1,o.splice(r,1));(t||!n)&&K.dequeue(this,e)})},finish:function(e){return e!==!1&&(e=e||"fx"),this.each(function(){var t,n=vt.get(this),i=n[e+"queue"],r=n[e+"queueHooks"],o=K.timers,s=i?i.length:0;for(n.finish=!0,K.queue(this,e,[]),r&&r.stop&&r.stop.call(this,!0),t=o.length;t--;)o[t].elem===this&&o[t].queue===e&&(o[t].anim.stop(!0),o.splice(t,1));
for(t=0;s>t;t++)i[t]&&i[t].finish&&i[t].finish.call(this);delete n.finish})}}),K.each(["toggle","show","hide"],function(e,t){var n=K.fn[t];K.fn[t]=function(e,i,r){return null==e||"boolean"==typeof e?n.apply(this,arguments):this.animate(q(t,!0),e,i,r)}}),K.each({slideDown:q("show"),slideUp:q("hide"),slideToggle:q("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(e,t){K.fn[e]=function(e,n,i){return this.animate(t,e,n,i)}}),K.timers=[],K.fx.tick=function(){var e,t=0,n=K.timers;
for(Qt=K.now();t<n.length;t++)e=n[t],e()||n[t]!==e||n.splice(t--,1);n.length||K.fx.stop(),Qt=void 0},K.fx.timer=function(e){K.timers.push(e),e()?K.fx.start():K.timers.pop()},K.fx.interval=13,K.fx.start=function(){Jt||(Jt=setInterval(K.fx.tick,K.fx.interval))},K.fx.stop=function(){clearInterval(Jt),Jt=null},K.fx.speeds={slow:600,fast:200,_default:400},K.fn.delay=function(e,t){return e=K.fx?K.fx.speeds[e]||e:e,t=t||"fx",this.queue(t,function(t,n){var i=setTimeout(t,e);n.stop=function(){clearTimeout(i)
}})},function(){var e=J.createElement("input"),t=J.createElement("select"),n=t.appendChild(J.createElement("option"));e.type="checkbox",Q.checkOn=""!==e.value,Q.optSelected=n.selected,t.disabled=!0,Q.optDisabled=!n.disabled,e=J.createElement("input"),e.value="t",e.type="radio",Q.radioValue="t"===e.value}();var rn,on,sn=K.expr.attrHandle;K.fn.extend({attr:function(e,t){return gt(this,K.attr,e,t,arguments.length>1)},removeAttr:function(e){return this.each(function(){K.removeAttr(this,e)})}}),K.extend({attr:function(e,t,n){var i,r,o=e.nodeType;
return e&&3!==o&&8!==o&&2!==o?typeof e.getAttribute===kt?K.prop(e,t,n):(1===o&&K.isXMLDoc(e)||(t=t.toLowerCase(),i=K.attrHooks[t]||(K.expr.match.bool.test(t)?on:rn)),void 0===n?i&&"get"in i&&null!==(r=i.get(e,t))?r:(r=K.find.attr(e,t),null==r?void 0:r):null!==n?i&&"set"in i&&void 0!==(r=i.set(e,n,t))?r:(e.setAttribute(t,n+""),n):void K.removeAttr(e,t)):void 0},removeAttr:function(e,t){var n,i,r=0,o=t&&t.match(pt);if(o&&1===e.nodeType)for(;n=o[r++];)i=K.propFix[n]||n,K.expr.match.bool.test(n)&&(e[i]=!1),e.removeAttribute(n)
},attrHooks:{type:{set:function(e,t){if(!Q.radioValue&&"radio"===t&&K.nodeName(e,"input")){var n=e.value;return e.setAttribute("type",t),n&&(e.value=n),t}}}}}),on={set:function(e,t,n){return t===!1?K.removeAttr(e,n):e.setAttribute(n,n),n}},K.each(K.expr.match.bool.source.match(/\w+/g),function(e,t){var n=sn[t]||K.find.attr;sn[t]=function(e,t,i){var r,o;return i||(o=sn[t],sn[t]=r,r=null!=n(e,t,i)?t.toLowerCase():null,sn[t]=o),r}});var an=/^(?:input|select|textarea|button)$/i;K.fn.extend({prop:function(e,t){return gt(this,K.prop,e,t,arguments.length>1)
},removeProp:function(e){return this.each(function(){delete this[K.propFix[e]||e]})}}),K.extend({propFix:{"for":"htmlFor","class":"className"},prop:function(e,t,n){var i,r,o,s=e.nodeType;return e&&3!==s&&8!==s&&2!==s?(o=1!==s||!K.isXMLDoc(e),o&&(t=K.propFix[t]||t,r=K.propHooks[t]),void 0!==n?r&&"set"in r&&void 0!==(i=r.set(e,n,t))?i:e[t]=n:r&&"get"in r&&null!==(i=r.get(e,t))?i:e[t]):void 0},propHooks:{tabIndex:{get:function(e){return e.hasAttribute("tabindex")||an.test(e.nodeName)||e.href?e.tabIndex:-1
}}}}),Q.optSelected||(K.propHooks.selected={get:function(e){var t=e.parentNode;return t&&t.parentNode&&t.parentNode.selectedIndex,null}}),K.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){K.propFix[this.toLowerCase()]=this});var un=/[\t\r\n\f]/g;K.fn.extend({addClass:function(e){var t,n,i,r,o,s,a="string"==typeof e&&e,u=0,c=this.length;if(K.isFunction(e))return this.each(function(t){K(this).addClass(e.call(this,t,this.className))
});if(a)for(t=(e||"").match(pt)||[];c>u;u++)if(n=this[u],i=1===n.nodeType&&(n.className?(" "+n.className+" ").replace(un," "):" ")){for(o=0;r=t[o++];)i.indexOf(" "+r+" ")<0&&(i+=r+" ");s=K.trim(i),n.className!==s&&(n.className=s)}return this},removeClass:function(e){var t,n,i,r,o,s,a=0===arguments.length||"string"==typeof e&&e,u=0,c=this.length;if(K.isFunction(e))return this.each(function(t){K(this).removeClass(e.call(this,t,this.className))});if(a)for(t=(e||"").match(pt)||[];c>u;u++)if(n=this[u],i=1===n.nodeType&&(n.className?(" "+n.className+" ").replace(un," "):"")){for(o=0;r=t[o++];)for(;i.indexOf(" "+r+" ")>=0;)i=i.replace(" "+r+" "," ");
s=e?K.trim(i):"",n.className!==s&&(n.className=s)}return this},toggleClass:function(e,t){var n=typeof e;return"boolean"==typeof t&&"string"===n?t?this.addClass(e):this.removeClass(e):this.each(K.isFunction(e)?function(n){K(this).toggleClass(e.call(this,n,this.className,t),t)}:function(){if("string"===n)for(var t,i=0,r=K(this),o=e.match(pt)||[];t=o[i++];)r.hasClass(t)?r.removeClass(t):r.addClass(t);else(n===kt||"boolean"===n)&&(this.className&&vt.set(this,"__className__",this.className),this.className=this.className||e===!1?"":vt.get(this,"__className__")||"")
})},hasClass:function(e){for(var t=" "+e+" ",n=0,i=this.length;i>n;n++)if(1===this[n].nodeType&&(" "+this[n].className+" ").replace(un," ").indexOf(t)>=0)return!0;return!1}});var cn=/\r/g;K.fn.extend({val:function(e){var t,n,i,r=this[0];return arguments.length?(i=K.isFunction(e),this.each(function(n){var r;1===this.nodeType&&(r=i?e.call(this,n,K(this).val()):e,null==r?r="":"number"==typeof r?r+="":K.isArray(r)&&(r=K.map(r,function(e){return null==e?"":e+""})),t=K.valHooks[this.type]||K.valHooks[this.nodeName.toLowerCase()],t&&"set"in t&&void 0!==t.set(this,r,"value")||(this.value=r))
})):r?(t=K.valHooks[r.type]||K.valHooks[r.nodeName.toLowerCase()],t&&"get"in t&&void 0!==(n=t.get(r,"value"))?n:(n=r.value,"string"==typeof n?n.replace(cn,""):null==n?"":n)):void 0}}),K.extend({valHooks:{option:{get:function(e){var t=K.find.attr(e,"value");return null!=t?t:K.trim(K.text(e))}},select:{get:function(e){for(var t,n,i=e.options,r=e.selectedIndex,o="select-one"===e.type||0>r,s=o?null:[],a=o?r+1:i.length,u=0>r?a:o?r:0;a>u;u++)if(n=i[u],!(!n.selected&&u!==r||(Q.optDisabled?n.disabled:null!==n.getAttribute("disabled"))||n.parentNode.disabled&&K.nodeName(n.parentNode,"optgroup"))){if(t=K(n).val(),o)return t;
s.push(t)}return s},set:function(e,t){for(var n,i,r=e.options,o=K.makeArray(t),s=r.length;s--;)i=r[s],(i.selected=K.inArray(i.value,o)>=0)&&(n=!0);return n||(e.selectedIndex=-1),o}}}}),K.each(["radio","checkbox"],function(){K.valHooks[this]={set:function(e,t){return K.isArray(t)?e.checked=K.inArray(K(e).val(),t)>=0:void 0}},Q.checkOn||(K.valHooks[this].get=function(e){return null===e.getAttribute("value")?"on":e.value})}),K.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "),function(e,t){K.fn[t]=function(e,n){return arguments.length>0?this.on(t,null,e,n):this.trigger(t)
}}),K.fn.extend({hover:function(e,t){return this.mouseenter(e).mouseleave(t||e)},bind:function(e,t,n){return this.on(e,null,t,n)},unbind:function(e,t){return this.off(e,null,t)},delegate:function(e,t,n,i){return this.on(t,e,n,i)},undelegate:function(e,t,n){return 1===arguments.length?this.off(e,"**"):this.off(t,e||"**",n)}});var ln=K.now(),fn=/\?/;K.parseJSON=function(e){return JSON.parse(e+"")},K.parseXML=function(e){var t,n;if(!e||"string"!=typeof e)return null;try{n=new DOMParser,t=n.parseFromString(e,"text/xml")
}catch(i){t=void 0}return(!t||t.getElementsByTagName("parsererror").length)&&K.error("Invalid XML: "+e),t};var dn=/#.*$/,pn=/([?&])_=[^&]*/,hn=/^(.*?):[ \t]*([^\r\n]*)$/gm,mn=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,gn=/^(?:GET|HEAD)$/,vn=/^\/\//,yn=/^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,bn={},wn={},xn="*/".concat("*"),Cn=e.location.href,Tn=yn.exec(Cn.toLowerCase())||[];K.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:Cn,type:"GET",isLocal:mn.test(Tn[1]),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":xn,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/xml/,html:/html/,json:/json/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":K.parseJSON,"text xml":K.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(e,t){return t?R(R(e,K.ajaxSettings),t):R(K.ajaxSettings,e)
},ajaxPrefilter:$(bn),ajaxTransport:$(wn),ajax:function(e,t){function n(e,t,n,s){var u,l,v,y,w,C=t;2!==b&&(b=2,a&&clearTimeout(a),i=void 0,o=s||"",x.readyState=e>0?4:0,u=e>=200&&300>e||304===e,n&&(y=F(f,x,n)),y=I(f,y,x,u),u?(f.ifModified&&(w=x.getResponseHeader("Last-Modified"),w&&(K.lastModified[r]=w),w=x.getResponseHeader("etag"),w&&(K.etag[r]=w)),204===e||"HEAD"===f.type?C="nocontent":304===e?C="notmodified":(C=y.state,l=y.data,v=y.error,u=!v)):(v=C,(e||!C)&&(C="error",0>e&&(e=0))),x.status=e,x.statusText=(t||C)+"",u?h.resolveWith(d,[l,C,x]):h.rejectWith(d,[x,C,v]),x.statusCode(g),g=void 0,c&&p.trigger(u?"ajaxSuccess":"ajaxError",[x,f,u?l:v]),m.fireWith(d,[x,C]),c&&(p.trigger("ajaxComplete",[x,f]),--K.active||K.event.trigger("ajaxStop")))
}"object"==typeof e&&(t=e,e=void 0),t=t||{};var i,r,o,s,a,u,c,l,f=K.ajaxSetup({},t),d=f.context||f,p=f.context&&(d.nodeType||d.jquery)?K(d):K.event,h=K.Deferred(),m=K.Callbacks("once memory"),g=f.statusCode||{},v={},y={},b=0,w="canceled",x={readyState:0,getResponseHeader:function(e){var t;if(2===b){if(!s)for(s={};t=hn.exec(o);)s[t[1].toLowerCase()]=t[2];t=s[e.toLowerCase()]}return null==t?null:t},getAllResponseHeaders:function(){return 2===b?o:null},setRequestHeader:function(e,t){var n=e.toLowerCase();
return b||(e=y[n]=y[n]||e,v[e]=t),this},overrideMimeType:function(e){return b||(f.mimeType=e),this},statusCode:function(e){var t;if(e)if(2>b)for(t in e)g[t]=[g[t],e[t]];else x.always(e[x.status]);return this},abort:function(e){var t=e||w;return i&&i.abort(t),n(0,t),this}};if(h.promise(x).complete=m.add,x.success=x.done,x.error=x.fail,f.url=((e||f.url||Cn)+"").replace(dn,"").replace(vn,Tn[1]+"//"),f.type=t.method||t.type||f.method||f.type,f.dataTypes=K.trim(f.dataType||"*").toLowerCase().match(pt)||[""],null==f.crossDomain&&(u=yn.exec(f.url.toLowerCase()),f.crossDomain=!(!u||u[1]===Tn[1]&&u[2]===Tn[2]&&(u[3]||("http:"===u[1]?"80":"443"))===(Tn[3]||("http:"===Tn[1]?"80":"443")))),f.data&&f.processData&&"string"!=typeof f.data&&(f.data=K.param(f.data,f.traditional)),H(bn,f,t,x),2===b)return x;
c=K.event&&f.global,c&&0===K.active++&&K.event.trigger("ajaxStart"),f.type=f.type.toUpperCase(),f.hasContent=!gn.test(f.type),r=f.url,f.hasContent||(f.data&&(r=f.url+=(fn.test(r)?"&":"?")+f.data,delete f.data),f.cache===!1&&(f.url=pn.test(r)?r.replace(pn,"$1_="+ln++):r+(fn.test(r)?"&":"?")+"_="+ln++)),f.ifModified&&(K.lastModified[r]&&x.setRequestHeader("If-Modified-Since",K.lastModified[r]),K.etag[r]&&x.setRequestHeader("If-None-Match",K.etag[r])),(f.data&&f.hasContent&&f.contentType!==!1||t.contentType)&&x.setRequestHeader("Content-Type",f.contentType),x.setRequestHeader("Accept",f.dataTypes[0]&&f.accepts[f.dataTypes[0]]?f.accepts[f.dataTypes[0]]+("*"!==f.dataTypes[0]?", "+xn+"; q=0.01":""):f.accepts["*"]);
for(l in f.headers)x.setRequestHeader(l,f.headers[l]);if(f.beforeSend&&(f.beforeSend.call(d,x,f)===!1||2===b))return x.abort();w="abort";for(l in{success:1,error:1,complete:1})x[l](f[l]);if(i=H(wn,f,t,x)){x.readyState=1,c&&p.trigger("ajaxSend",[x,f]),f.async&&f.timeout>0&&(a=setTimeout(function(){x.abort("timeout")},f.timeout));try{b=1,i.send(v,n)}catch(C){if(!(2>b))throw C;n(-1,C)}}else n(-1,"No Transport");return x},getJSON:function(e,t,n){return K.get(e,t,n,"json")},getScript:function(e,t){return K.get(e,void 0,t,"script")
}}),K.each(["get","post"],function(e,t){K[t]=function(e,n,i,r){return K.isFunction(n)&&(r=r||i,i=n,n=void 0),K.ajax({url:e,type:t,dataType:r,data:n,success:i})}}),K._evalUrl=function(e){return K.ajax({url:e,type:"GET",dataType:"script",async:!1,global:!1,"throws":!0})},K.fn.extend({wrapAll:function(e){var t;return K.isFunction(e)?this.each(function(t){K(this).wrapAll(e.call(this,t))}):(this[0]&&(t=K(e,this[0].ownerDocument).eq(0).clone(!0),this[0].parentNode&&t.insertBefore(this[0]),t.map(function(){for(var e=this;e.firstElementChild;)e=e.firstElementChild;
return e}).append(this)),this)},wrapInner:function(e){return this.each(K.isFunction(e)?function(t){K(this).wrapInner(e.call(this,t))}:function(){var t=K(this),n=t.contents();n.length?n.wrapAll(e):t.append(e)})},wrap:function(e){var t=K.isFunction(e);return this.each(function(n){K(this).wrapAll(t?e.call(this,n):e)})},unwrap:function(){return this.parent().each(function(){K.nodeName(this,"body")||K(this).replaceWith(this.childNodes)}).end()}}),K.expr.filters.hidden=function(e){return e.offsetWidth<=0&&e.offsetHeight<=0
},K.expr.filters.visible=function(e){return!K.expr.filters.hidden(e)};var En=/%20/g,kn=/\[\]$/,An=/\r?\n/g,Nn=/^(?:submit|button|image|reset|file)$/i,Sn=/^(?:input|select|textarea|keygen)/i;K.param=function(e,t){var n,i=[],r=function(e,t){t=K.isFunction(t)?t():null==t?"":t,i[i.length]=encodeURIComponent(e)+"="+encodeURIComponent(t)};if(void 0===t&&(t=K.ajaxSettings&&K.ajaxSettings.traditional),K.isArray(e)||e.jquery&&!K.isPlainObject(e))K.each(e,function(){r(this.name,this.value)});else for(n in e)_(n,e[n],t,r);
return i.join("&").replace(En,"+")},K.fn.extend({serialize:function(){return K.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var e=K.prop(this,"elements");return e?K.makeArray(e):this}).filter(function(){var e=this.type;return this.name&&!K(this).is(":disabled")&&Sn.test(this.nodeName)&&!Nn.test(e)&&(this.checked||!Et.test(e))}).map(function(e,t){var n=K(this).val();return null==n?null:K.isArray(n)?K.map(n,function(e){return{name:t.name,value:e.replace(An,"\r\n")}
}):{name:t.name,value:n.replace(An,"\r\n")}}).get()}}),K.ajaxSettings.xhr=function(){try{return new XMLHttpRequest}catch(e){}};var Dn=0,qn={},jn={0:200,1223:204},Ln=K.ajaxSettings.xhr();e.attachEvent&&e.attachEvent("onunload",function(){for(var e in qn)qn[e]()}),Q.cors=!!Ln&&"withCredentials"in Ln,Q.ajax=Ln=!!Ln,K.ajaxTransport(function(e){var t;return Q.cors||Ln&&!e.crossDomain?{send:function(n,i){var r,o=e.xhr(),s=++Dn;if(o.open(e.type,e.url,e.async,e.username,e.password),e.xhrFields)for(r in e.xhrFields)o[r]=e.xhrFields[r];
e.mimeType&&o.overrideMimeType&&o.overrideMimeType(e.mimeType),e.crossDomain||n["X-Requested-With"]||(n["X-Requested-With"]="XMLHttpRequest");for(r in n)o.setRequestHeader(r,n[r]);t=function(e){return function(){t&&(delete qn[s],t=o.onload=o.onerror=null,"abort"===e?o.abort():"error"===e?i(o.status,o.statusText):i(jn[o.status]||o.status,o.statusText,"string"==typeof o.responseText?{text:o.responseText}:void 0,o.getAllResponseHeaders()))}},o.onload=t(),o.onerror=t("error"),t=qn[s]=t("abort");try{o.send(e.hasContent&&e.data||null)
}catch(a){if(t)throw a}},abort:function(){t&&t()}}:void 0}),K.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/(?:java|ecma)script/},converters:{"text script":function(e){return K.globalEval(e),e}}}),K.ajaxPrefilter("script",function(e){void 0===e.cache&&(e.cache=!1),e.crossDomain&&(e.type="GET")}),K.ajaxTransport("script",function(e){if(e.crossDomain){var t,n;return{send:function(i,r){t=K("<script>").prop({async:!0,charset:e.scriptCharset,src:e.url}).on("load error",n=function(e){t.remove(),n=null,e&&r("error"===e.type?404:200,e.type)
}),J.head.appendChild(t[0])},abort:function(){n&&n()}}}});var On=[],Mn=/(=)\?(?=&|$)|\?\?/;K.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var e=On.pop()||K.expando+"_"+ln++;return this[e]=!0,e}}),K.ajaxPrefilter("json jsonp",function(t,n,i){var r,o,s,a=t.jsonp!==!1&&(Mn.test(t.url)?"url":"string"==typeof t.data&&!(t.contentType||"").indexOf("application/x-www-form-urlencoded")&&Mn.test(t.data)&&"data");return a||"jsonp"===t.dataTypes[0]?(r=t.jsonpCallback=K.isFunction(t.jsonpCallback)?t.jsonpCallback():t.jsonpCallback,a?t[a]=t[a].replace(Mn,"$1"+r):t.jsonp!==!1&&(t.url+=(fn.test(t.url)?"&":"?")+t.jsonp+"="+r),t.converters["script json"]=function(){return s||K.error(r+" was not called"),s[0]
},t.dataTypes[0]="json",o=e[r],e[r]=function(){s=arguments},i.always(function(){e[r]=o,t[r]&&(t.jsonpCallback=n.jsonpCallback,On.push(r)),s&&K.isFunction(o)&&o(s[0]),s=o=void 0}),"script"):void 0}),K.parseHTML=function(e,t,n){if(!e||"string"!=typeof e)return null;"boolean"==typeof t&&(n=t,t=!1),t=t||J;var i=st.exec(e),r=!n&&[];return i?[t.createElement(i[1])]:(i=K.buildFragment([e],t,r),r&&r.length&&K(r).remove(),K.merge([],i.childNodes))};var $n=K.fn.load;K.fn.load=function(e,t,n){if("string"!=typeof e&&$n)return $n.apply(this,arguments);
var i,r,o,s=this,a=e.indexOf(" ");return a>=0&&(i=K.trim(e.slice(a)),e=e.slice(0,a)),K.isFunction(t)?(n=t,t=void 0):t&&"object"==typeof t&&(r="POST"),s.length>0&&K.ajax({url:e,type:r,dataType:"html",data:t}).done(function(e){o=arguments,s.html(i?K("<div>").append(K.parseHTML(e)).find(i):e)}).complete(n&&function(e,t){s.each(n,o||[e.responseText,t,e])}),this},K.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(e,t){K.fn[t]=function(e){return this.on(t,e)}}),K.expr.filters.animated=function(e){return K.grep(K.timers,function(t){return e===t.elem
}).length};var Hn=e.document.documentElement;K.offset={setOffset:function(e,t,n){var i,r,o,s,a,u,c,l=K.css(e,"position"),f=K(e),d={};"static"===l&&(e.style.position="relative"),a=f.offset(),o=K.css(e,"top"),u=K.css(e,"left"),c=("absolute"===l||"fixed"===l)&&(o+u).indexOf("auto")>-1,c?(i=f.position(),s=i.top,r=i.left):(s=parseFloat(o)||0,r=parseFloat(u)||0),K.isFunction(t)&&(t=t.call(e,n,a)),null!=t.top&&(d.top=t.top-a.top+s),null!=t.left&&(d.left=t.left-a.left+r),"using"in t?t.using.call(e,d):f.css(d)
}},K.fn.extend({offset:function(e){if(arguments.length)return void 0===e?this:this.each(function(t){K.offset.setOffset(this,e,t)});var t,n,i=this[0],r={top:0,left:0},o=i&&i.ownerDocument;return o?(t=o.documentElement,K.contains(t,i)?(typeof i.getBoundingClientRect!==kt&&(r=i.getBoundingClientRect()),n=P(o),{top:r.top+n.pageYOffset-t.clientTop,left:r.left+n.pageXOffset-t.clientLeft}):r):void 0},position:function(){if(this[0]){var e,t,n=this[0],i={top:0,left:0};return"fixed"===K.css(n,"position")?t=n.getBoundingClientRect():(e=this.offsetParent(),t=this.offset(),K.nodeName(e[0],"html")||(i=e.offset()),i.top+=K.css(e[0],"borderTopWidth",!0),i.left+=K.css(e[0],"borderLeftWidth",!0)),{top:t.top-i.top-K.css(n,"marginTop",!0),left:t.left-i.left-K.css(n,"marginLeft",!0)}
}},offsetParent:function(){return this.map(function(){for(var e=this.offsetParent||Hn;e&&!K.nodeName(e,"html")&&"static"===K.css(e,"position");)e=e.offsetParent;return e||Hn})}}),K.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(t,n){var i="pageYOffset"===n;K.fn[t]=function(r){return gt(this,function(t,r,o){var s=P(t);return void 0===o?s?s[n]:t[r]:void(s?s.scrollTo(i?e.pageXOffset:o,i?o:e.pageYOffset):t[r]=o)},t,r,arguments.length,null)}}),K.each(["top","left"],function(e,t){K.cssHooks[t]=C(Q.pixelPosition,function(e,n){return n?(n=x(e,t),Wt.test(n)?K(e).position()[t]+"px":n):void 0
})}),K.each({Height:"height",Width:"width"},function(e,t){K.each({padding:"inner"+e,content:t,"":"outer"+e},function(n,i){K.fn[i]=function(i,r){var o=arguments.length&&(n||"boolean"!=typeof i),s=n||(i===!0||r===!0?"margin":"border");return gt(this,function(t,n,i){var r;return K.isWindow(t)?t.document.documentElement["client"+e]:9===t.nodeType?(r=t.documentElement,Math.max(t.body["scroll"+e],r["scroll"+e],t.body["offset"+e],r["offset"+e],r["client"+e])):void 0===i?K.css(t,n,s):K.style(t,n,i,s)},t,o?i:void 0,o,null)
}})}),K.fn.size=function(){return this.length},K.fn.andSelf=K.fn.addBack,"function"==typeof define&&define.amd&&define("deps/jquery",["require"],function(){return K});var Rn=e.jQuery,Fn=e.$;return K.noConflict=function(t){return e.$===K&&(e.$=Fn),t&&e.jQuery===K&&(e.jQuery=Rn),K},typeof t===kt&&(e.jQuery=e.$=K),K});var define,require,esl;!function(e){function t(e){d(e,_)||(P[e]=1)}function n(e,t){function n(e){0===e.indexOf(".")&&r.push(e)}var r=[];if("string"==typeof e?n(e):O(e,function(e){n(e)}),r.length>0)throw new Error("[REQUIRE_FATAL]Relative ID is not allowed in global require: "+r.join(", "));
var o=B.waitSeconds;return o&&e instanceof Array&&($&&clearTimeout($),$=setTimeout(i,1e3*o)),U(e,t)}function i(){function e(s,a){if(!o[s]&&!d(s,_)){o[s]=1,d(s,I)||i[s]||(i[s]=1,t.push(s));var u=H[s];u?a&&(i[s]||(i[s]=1,t.push(s)),O(u.depMs,function(t){e(t.absId,t.hard)})):r[s]||(r[s]=1,n.push(s))}}var t=[],n=[],i={},r={},o={};for(var s in P)e(s,1);if(t.length||n.length)throw new Error("[MODULE_TIMEOUT]Hang( "+(t.join(", ")||"none")+" ) Miss( "+(n.join(", ")||"none")+" )")}function r(e){O(z,function(t){a(e,t.deps,t.factory)
}),z.length=0}function o(e,t,n){if(null==n&&(null==t?(n=e,e=null):(n=t,t=null,e instanceof Array&&(t=e,e=null))),null!=n){var i=window.opera;if(!e&&document.attachEvent&&(!i||"[object Opera]"!==i.toString())){var r=q();e=r&&r.getAttribute("data-require-id")}e?a(e,t,n):z[0]={deps:t,factory:n}}}function s(){var e=B.config[this.id];return e&&"object"==typeof e?e:{}}function a(e,t,n){H[e]||(H[e]={id:e,depsDec:t,deps:t||["require","exports","module"],factoryDeps:[],factory:n,exports:{},config:s,state:R,require:E(e),depMs:[],depMkv:{},depRs:[]})
}function u(e){var t=H[e];if(t&&!d(e,F)){var n=t.deps,i=t.factory,r=0;"function"==typeof i&&(r=Math.min(i.length,n.length),!t.depsDec&&i.toString().replace(/(\/\*([\s\S]*?)\*\/|([^:]|^)\/\/(.*)$)/gm,"").replace(/require\(\s*(['"])([^'"]+)\1\s*\)/g,function(e,t,i){n.push(i)}));var o=[],s=[];O(n,function(n,i){var a,u,c=S(n),l=k(c.mod,e);l&&!W[l]?(c.res&&(u={id:n,mod:l,res:c.res},s.push(n),t.depRs.push(u)),a=t.depMkv[l],a||(a={id:c.mod,absId:l,hard:r>i},t.depMs.push(a),t.depMkv[l]=a,o.push(l))):a={absId:l},r>i&&t.factoryDeps.push(u||a)
}),t.state=F,f(e),v(o),s.length&&t.require(s,function(){O(t.depRs,function(t){t.absId||(t.absId=k(t.id,e))}),c()})}}function c(){for(var e in P)u(e),l(e),p(e)}function l(e){function t(e){if(u(e),!d(e,F))return!1;if(d(e,I)||n[e])return!0;n[e]=1;var i=H[e],r=!0;return O(i.depMs,function(e){return r=t(e.absId)}),r&&O(i.depRs,function(e){return r=!!e.absId}),r&&!d(e,I)&&(i.state=I),r}var n={};t(e)}function f(t){function n(){if(!i&&r.state===I){i=1;var n=1;if(O(r.factoryDeps,function(e){var t=e.absId;
return W[t]?void 0:(p(t),n=d(t,_))}),n){try{var o=r.factory,s="function"==typeof o?o.apply(e,h(r.factoryDeps,{require:r.require,exports:r.exports,module:r})):o;null!=s&&(r.exports=s),r.invokeFactory=null}catch(a){if(/^\[MODULE_MISS\]"([^"]+)/.test(a.message)){var u=r.depMkv[RegExp.$1];return u&&(u.hard=1),void(i=0)}throw a}g(t)}}}var i,r=H[t];r.invokeFactory=n}function d(e,t){return H[e]&&H[e].state>=t}function p(e){var t=H[e];t&&t.invokeFactory&&t.invokeFactory()}function h(e,t){var n=[];return O(e,function(e,i){"object"==typeof e&&(e=e.absId),n[i]=t[e]||H[e].exports
}),n}function m(e,t){if(d(e,_))return void t();var n=X[e];n||(n=X[e]=[]),n.push(t)}function g(e){var t=H[e];t.state=_,delete P[e];for(var n=X[e]||[],i=n.length;i--;)n[i]();n.length=0,X[e]=null}function v(t,n,i){function r(){if("function"==typeof n&&!o){var i=1;O(t,function(e){return W[e]?void 0:i=!!d(e,_)}),i&&(o=1,n.apply(e,h(t,W)))}}var o=0;O(t,function(e){W[e]||d(e,_)||(m(e,r),(e.indexOf("!")>0?b:y)(e,i))}),r()}function y(t){function n(){var e=J[t];j(e||t,i)}function i(){if(s){var n;"function"==typeof s.init&&(n=s.init.apply(e,h(a,W))),null==n&&s.exports&&(n=e,O(s.exports.split("."),function(e){return n=n[e],!!n
})),o(t,a,n||{})}else r(t);c()}if(!V[t]&&!H[t]){V[t]=1;var s=B.shim[t];s instanceof Array&&(B.shim[t]=s={deps:s});var a=s&&(s.deps||[]);a?(O(a,function(e){B.shim[e]||(B.shim[e]={})}),U(a,n)):n()}}function b(e,t){function n(t){u.exports=t||!0,g(e)}function i(i){var r=t?H[t].require:U;i.load(a.res,r,n,s.call({id:e}))}if(!H[e]){var o=J[e];if(o)return void y(o);var a=S(e),u={id:e,state:F};H[e]=u,n.fromText=function(e,t){new Function(t)(),r(e)},i(U(a.mod))}}function w(e,t){var n=D(e,1,t);return n.sort(M),n
}function x(){function e(e){J[A(e)]=t}B.baseUrl=B.baseUrl.replace(/\/$/,"")+"/",Y=w(B.paths),Q=w(B.map,1),O(Q,function(e){e.v=w(e.v)}),G=[],O(B.packages,function(e){var t=e;"string"==typeof e&&(t={name:e.split("/")[0],location:e,main:"main"}),t.location=t.location||t.name,t.main=(t.main||"main").replace(/\.js$/i,""),t.reg=L(t.name),G.push(t)}),G.sort(M),Z=w(B.urlArgs,1),J={};for(var t in B.bundles)O(B.bundles[t],e)}function C(e,t,n){O(t,function(t){return t.reg.test(e)?(n(t.v,t.k,t),!1):void 0})}function T(e,t){var n=/(\.[a-z0-9]+)$/i,i=/(\?[^#]*)$/,r="",o=e,s="";
i.test(e)&&(s=RegExp.$1,e=e.replace(i,"")),n.test(e)&&(r=RegExp.$1,o=e.replace(n,"")),null!=t&&(o=k(o,t));var a,u=o;return C(o,Y,function(e,t){u=u.replace(t,e),a=1}),a||C(o,G,function(e,t,n){u=u.replace(n.name,n.location)}),/^([a-z]{2,10}:\/)?\//i.test(u)||(u=B.baseUrl+u),u+=r+s,C(o,Z,function(e){u+=(u.indexOf("?")>0?"&":"?")+e}),u}function E(e){function n(n,r){if("string"==typeof n){if(!i[n]){var o=k(n,e);if(p(o),!d(o,_))throw new Error('[MODULE_MISS]"'+o+'" is not exists!');i[n]=H[o].exports}return i[n]
}if(n instanceof Array){var s=[],a=[];O(n,function(n,i){var r=S(n),o=k(r.mod,e),u=r.res,c=o;if(u){var l=o+"!"+u;0!==u.indexOf(".")&&J[l]?o=c=l:c=null}a[i]=c,t(o),s.push(o)}),v(s,function(){O(a,function(i,r){null==i&&(i=a[r]=k(n[r],e),t(i))}),v(a,r,e),c()},e),c()}}var i={};return n.toUrl=function(t){return T(t,e||"")},n}function k(e,t){if(!e)return"";t=t||"";var n=S(e);if(!n)return e;var i=n.res,r=N(n.mod,t);if(C(t,Q,function(e){C(r,e,function(e,t){r=r.replace(t,e)})}),r=A(r),i){var o=d(r,_)&&U(r);
i=o&&o.normalize?o.normalize(i,function(e){return k(e,t)}):k(i,t),r+="!"+i}return r}function A(e){return O(G,function(t){var n=t.name;return n===e?(e=n+"/"+t.main,!1):void 0}),e}function N(e,t){if(0===e.indexOf(".")){var n=t.split("/"),i=e.split("/"),r=n.length-1,o=i.length,s=0,a=0;e:for(var u=0;o>u;u++)switch(i[u]){case"..":if(!(r>s))break e;s++,a++;break;case".":a++;break;default:break e}return n.length=r-s,i=i.slice(a),n.concat(i).join("/")}return e}function S(e){var t=e.split("!");return t[0]?{mod:t[0],res:t[1]}:void 0
}function D(e,t,n){var i=[];for(var r in e)if(e.hasOwnProperty(r)){var o={k:r,v:e[r]};i.push(o),t&&(o.reg="*"===r&&n?/^/:L(r))}return i}function q(){if(K)return K;if(et&&"interactive"===et.readyState)return et;for(var e=document.getElementsByTagName("script"),t=e.length;t--;){var n=e[t];if("interactive"===n.readyState)return et=n,n}}function j(e,t){function n(){var e=i.readyState;("undefined"==typeof e||/^(loaded|complete)$/.test(e))&&(i.onload=i.onreadystatechange=null,i=null,t())}var i=document.createElement("script");
i.setAttribute("data-require-id",e),i.src=T(e+".js"),i.async=!0,i.readyState?i.onreadystatechange=n:i.onload=n,K=i,nt?tt.insertBefore(i,nt):tt.appendChild(i),K=null}function L(e){return new RegExp("^"+e+"(/|$)")}function O(e,t){if(e instanceof Array)for(var n=0,i=e.length;i>n&&t(e[n],n)!==!1;n++);}function M(e,t){var n=e.k||e.name,i=t.k||t.name;return"*"===i?-1:"*"===n?1:i.length-n.length}var $,H={},R=1,F=2,I=3,_=4,P={},W={require:n,exports:1,module:1},U=E(),B={baseUrl:"./",paths:{},config:{},map:{},packages:[],shim:{},waitSeconds:0,bundles:{},urlArgs:{}};
n.version="2.0.6",n.loader="esl",n.toUrl=U.toUrl;var z=[];o.amd={};var X={},V={};n.config=function(e){if(e){for(var t in B){var n=e[t],i=B[t];if(n)if("urlArgs"===t&&"string"==typeof n)B.urlArgs["*"]=n;else if(i instanceof Array)i.push.apply(i,n);else if("object"==typeof i)for(var r in n)i[r]=n[r];else B[t]=n}x()}},x();var Y,G,Q,J,Z,K,et,tt=document.getElementsByTagName("head")[0],nt=document.getElementsByTagName("base")[0];nt&&(tt=nt.parentNode),define||(define=o,require||(require=n),esl=n)}(this),window.require.config({paths:{"searchbox/openjs/aio":"//m.baidu.com/static/searchbox/openjs/aio.js?v=201606"}}),define("deps/emit",["require"],function(){function e(){}function t(e,t){for(var n=e.length;n--;)if(e[n].listener===t)return n;
return-1}var n=e.prototype;return n.addEventListener=n.on=function(e,n){var i=this._getEventListenersAsObject(e),r="object"==typeof n;for(var o in i)i.hasOwnProperty(o)&&-1===t(i[o],n)&&i[o].push(r?n:{listener:n,once:!1});return this},n.one=function(e,t){return this.on(e,{listener:t,once:!0})},n.removeEventListener=n.off=function(e,n){var i=this._getEventListenersAsObject(e);for(var r in i)if(i.hasOwnProperty(r)){var o=t(i[r],n);-1!==o&&i[r].splice(o,1)}return this},n.trigger=function(e,t){var n,i=this._getEventListenersAsObject(e);
for(var r in i)if(i.hasOwnProperty(r))for(var o=i[r].slice(0),s=o.length;s--;){var a=o[s];a.once===!0&&this.off(e,a.listener),n=a.listener.apply(this,t||[])}return this},n._getEventListenersAsObject=function(e){var t,n=this._getEventListeners(e);return n instanceof Array&&(t={},t[e]=n),t||n},n._getEventListeners=function(e){var t=this._getEvents();return t[e]||(t[e]=[])},n._getEvents=function(){return this._events||(this._events={})},e}),define("observable",["require"],function(){function e(){this.handlers_=[]
}return e.prototype.add=function(e){var t=this;return this.handlers_.push(e),function(){t.remove(e)}},e.prototype.remove=function(e){for(var t=0;t<this.handlers_.length;t++)if(e==this.handlers_[t]){this.handlers_.splice(t,1);break}},e.prototype.fire=function(){var e=Array.prototype.slice.call(arguments);this.handlers_.forEach(function(t){t.apply(null,e)})},e.prototype.getHandlerCount=function(){return this.handlers_.length},new e});var platform=function(){function e(){return/iPhone|iPad|iPod/i.test(window.navigator.userAgent)
}function t(){return/Safari/i.test(window.navigator.userAgent)&&!n()}function n(){return/Chrome|CriOS/i.test(window.navigator.userAgent)}function i(){return/UCBrowser/i.test(window.navigator.userAgent)}return{isIos:e,isSafari:t,isChrome:n,isUc:i,needSpecialScroll:e()&&!i()}}();define("message_center",["require","observable"],function(e){function t(e,t,n){var i=((new Date).getTime()+parseInt(1e3*Math.random())).toString();t.requestData={},t.sentinel=a,t.requestData.sessionID=i,void 0!=typeof n&&(responseHandlers[i]=n),e.postMessage(t,"*")
}function n(e){o||(window.addEventListener("message",function(e){i(e)},!1),o=!0),r.add(e)}function i(e){var t=e.data;if(t.sentinel==a)r.fire(e);else if(t.sentinel==u){var n=t.sessionID;responseHandlers[n]&&responseHandlers[n](e)}}responseHandlers={};var r=e("observable"),o=!1,s="__MIP__",a=s+"REQUEST",u=s+"RESPONSE";return{sendRequest:t,sendResponse:t,onMessage:n}}),define("gesture",["require","observable"],function(e){function t(e,t){c.fire(e,t)}function n(e){c.add(e)}function i(e){c.remove(e)}function r(e){try{var n=e.touches[0];
l.startX=Number(n.screenX),l.startY=Number(n.screenY),l.startT=e.timeStamp;var i={event:"touchstart",x:l.startX,y:l.startY,_t:e.timeStamp};t(e,i)}catch(r){}}function o(e){try{nChangX=e.changedTouches[0].screenX,nChangY=e.changedTouches[0].screenY;var n=nChangX-l.startX,i=nChangY-l.startY,r=(e.timeStamp-l.startT)/n;t(e,{event:"touchend",x:n,y:i,_t:e.timeStamp,speed:r})}catch(o){}}function s(e){try{var n=e.touches[0],i=Number(n.screenX),r=Number(n.screenY),o={event:"touchmove",x:i-l.startX,y:r-l.startY,_t:e.timeStamp};
t(e,o)}catch(s){}}function a(){f||(window.addEventListener("touchstart",r,!1),window.addEventListener("touchmove",s,!1),window.addEventListener("touchend",o,!1),f=!0)}function u(){a()}var c=e("observable"),l={startX:0,startY:0,lastX:0,lastY:0,startT:0},f=!1;return{init:u,bind:n,unbind:i}}),define("viewport",["require","observable","gesture"],function(e){function t(e,t){p&&n(e,t)}function n(e,t){if("object"==typeof t){var n=t.event;switch(n){case"touchstart":window.parent.postMessage(t,"*");break;
case"touchmove":Math.abs(t.x)>15&&Math.abs(t.x/t.y)>=3&&!f?(e.preventDefault(),d=!0,window.parent.postMessage(t,"*")):Math.abs(t.y/t.x)>=3&&!d&&(f=!0),0!=t.y&&d&&(e.preventDefault&&e.preventDefault(),e.stopPropagation&&e.stopPropagation());break;case"touchend":window.parent.postMessage(t,"*"),d=!1,f=!1}}}function i(){var e=this.win.document;return e.scrollingElement?e.scrollingElement:e.body?e.body:e.documentElement}function r(){l++,m.fire(),u=s.getScrollLeft();var e=s.getScrollTop();0>e||(a=e)}function o(){return $(window).on("scroll",r),window.parent!==window&&platform.needSpecialScroll&&$("body").on("scroll",r),v.bind(t),s
}var s={},a=null,u=null,c=null,l=0,f=!1,d=!1,p=!0,h=e("observable"),m=e("observable"),g=e("observable"),v=e("gesture");return v.init(),s.getTop=function(){return this.getScrollTop()},s.getScrollTop=function(){return a=$(window).scrollTop()},s.getScrollLeft=function(){return null==u&&(u=$(window).scrollLeft()),u},s.setScrollTop=function(e){a=null,$(window).scrollTop(e)},s.getSize=function(){return c?c:c={width:$(window).width(),height:$(window).height()}},s.getWidth=function(){return this.getSize().width
},s.getScrollWidth=function(){return i.scrollWidth},s.onChanged=function(e){return h.add(e)},s.onScroll=function(e){return m.add(e)},s.onTouch=function(e){return g.add(e)},s.resetTouchZoom=function(){var e=window.innerHeight,t=window.document.documentElement.clientHeight;e&&t&&e===t||disableTouchZoom()},s.disableTouchZoom=function(){_getViewportMeta()},s.setViewportNormal=function(e){p=e},s.hasScrolled=function(){return l>0},o()}),define("mip",["require","gesture","viewport","buildins/registerMipElement","buildins/mip-gif","buildins/mip-img"],function(e){var t=e("gesture");
t.init();var n=e("viewport");e("buildins/registerMipElement"),window.registerMipElement("mip-gif",e("buildins/mip-gif")),window.registerMipElement("mip-img",e("buildins/mip-img")),$(function(){window.setTimeout(function(){$(".mip-element").each(function(){this.inviewCallback()})},100)}),n.onScroll(function(){$(".mip-element").each(function(){this.inviewCallback()})})}),function(e,t,n,i){"use strict";function r(e,t){for(var n=0,i=e.length;i>n;n++)m(e[n],t)}function o(e){for(var t,n=0,i=e.length;i>n;n++)t=e[n],C(t,F[a(t)])
}function s(e){return function(t){nt(t)&&(m(t,e),r(t.querySelectorAll(I),e))}}function a(e){var t=e.getAttribute("is"),n=e.nodeName.toUpperCase(),i=P.call(R,t?M+t.toUpperCase():O+n);return t&&i>-1&&!u(n,t)?-1:i}function u(e,t){return-1<I.indexOf(e+'[is="'+t+'"]')}function c(e){var t=e.currentTarget,n=e.attrChange,i=e.attrName,r=e.target;!ht||r&&r!==t||!t.attributeChangedCallback||"style"===i||t.attributeChangedCallback(i,n===e[N]?null:e.prevValue,n===e[D]?null:e.newValue)}function l(e){var t=s(e);
return function(e){g.push(t,e.target)}}function f(e){pt&&(pt=!1,e.currentTarget.removeEventListener(j,f)),r((e.target||t).querySelectorAll(I),e.detail===k?k:E),tt&&h()}function d(e,t){var n=this;ot.call(n,e,t),v.call(n,{target:n})}function p(e,t){Z(e,t),w?w.observe(e,ut):(dt&&(e.setAttribute=d,e[T]=b(e),e.addEventListener(L,v)),e.addEventListener(q,c)),e.createdCallback&&ht&&(e.created=!0,e.createdCallback(),e.created=!1)}function h(){for(var e,t=0,n=it.length;n>t;t++)e=it[t],_.contains(e)||(it.splice(t,1),m(e,k))
}function m(e,t){var n,i=a(e);i>-1&&(x(e,F[i]),i=0,t!==E||e[E]?t!==k||e[k]||(e[E]=!1,e[k]=!0,i=1):(e[k]=!1,e[E]=!0,i=1,tt&&P.call(it,e)<0&&it.push(e)),i&&(n=e[t+"Callback"])&&n.call(e))}if(!(i in t)){var g,v,y,b,w,x,C,T="__"+i+(1e5*Math.random()>>0),E="attached",k="detached",A="extends",N="ADDITION",S="MODIFICATION",D="REMOVAL",q="DOMAttrModified",j="DOMContentLoaded",L="DOMSubtreeModified",O="<",M="=",$=/^[A-Z][A-Z0-9]*(?:-[A-Z0-9]+)+$/,H=["ANNOTATION-XML","COLOR-PROFILE","FONT-FACE","FONT-FACE-SRC","FONT-FACE-URI","FONT-FACE-FORMAT","FONT-FACE-NAME","MISSING-GLYPH"],R=[],F=[],I="",_=t.documentElement,P=R.indexOf||function(e){for(var t=this.length;t--&&this[t]!==e;);return t
},W=n.prototype,U=W.hasOwnProperty,B=W.isPrototypeOf,z=n.defineProperty,X=n.getOwnPropertyDescriptor,V=n.getOwnPropertyNames,Y=n.getPrototypeOf,G=n.setPrototypeOf,Q=!!n.__proto__,J=n.create||function mt(e){return e?(mt.prototype=e,new mt):this},Z=G||(Q?function(e,t){return e.__proto__=t,e}:V&&X?function(){function e(e,t){for(var n,i=V(t),r=0,o=i.length;o>r;r++)n=i[r],U.call(e,n)||z(e,n,X(t,n))}return function(t,n){do e(t,n);while((n=Y(n))&&!B.call(n,t));return t}}():function(e,t){for(var n in t)e[n]=t[n];
return e}),K=e.MutationObserver||e.WebKitMutationObserver,et=(e.HTMLElement||e.Element||e.Node).prototype,tt=!B.call(et,_),nt=tt?function(e){return 1===e.nodeType}:function(e){return B.call(et,e)},it=tt&&[],rt=et.cloneNode,ot=et.setAttribute,st=et.removeAttribute,at=t.createElement,ut=K&&{attributes:!0,characterData:!0,attributeOldValue:!0},ct=K||function(){dt=!1,_.removeEventListener(q,ct)},lt=e.requestAnimationFrame||e.webkitRequestAnimationFrame||e.mozRequestAnimationFrame||e.msRequestAnimationFrame||function(e){setTimeout(e,10)
},ft=!1,dt=!0,pt=!0,ht=!0;G||Q?(x=function(e,t){B.call(t,e)||p(e,t)},C=p):(x=function(e,t){e[T]||(e[T]=n(!0),p(e,t))},C=x),tt?(dt=!1,function(){var e=X(et,"addEventListener"),t=e.value,n=function(e){var t=new CustomEvent(q,{bubbles:!0});t.attrName=e,t.prevValue=this.getAttribute(e),t.newValue=null,t[D]=t.attrChange=2,st.call(this,e),this.dispatchEvent(t)},i=function(e,t){var n=this.hasAttribute(e),i=n&&this.getAttribute(e),r=new CustomEvent(q,{bubbles:!0});ot.call(this,e,t),r.attrName=e,r.prevValue=n?i:null,r.newValue=t,n?r[S]=r.attrChange=1:r[N]=r.attrChange=0,this.dispatchEvent(r)
},r=function(e){var t,n=e.currentTarget,i=n[T],r=e.propertyName;i.hasOwnProperty(r)&&(i=i[r],t=new CustomEvent(q,{bubbles:!0}),t.attrName=i.name,t.prevValue=i.value||null,t.newValue=i.value=n[r]||null,null==t.prevValue?t[N]=t.attrChange=0:t[S]=t.attrChange=1,n.dispatchEvent(t))};e.value=function(e,o,s){e===q&&this.attributeChangedCallback&&this.setAttribute!==i&&(this[T]={className:{name:"class",value:this.className}},this.setAttribute=i,this.removeAttribute=n,t.call(this,"propertychange",r)),t.call(this,e,o,s)
},z(et,"addEventListener",e)}()):K||(_.addEventListener(q,ct),_.setAttribute(T,1),_.removeAttribute(T),dt&&(v=function(e){var t,n,i,r=this;if(r===e.target){t=r[T],r[T]=n=b(r);for(i in n){if(!(i in t))return y(0,r,i,t[i],n[i],N);if(n[i]!==t[i])return y(1,r,i,t[i],n[i],S)}for(i in t)if(!(i in n))return y(2,r,i,t[i],n[i],D)}},y=function(e,t,n,i,r,o){var s={attrChange:e,currentTarget:t,attrName:n,prevValue:i,newValue:r};s[o]=e,c(s)},b=function(e){for(var t,n,i={},r=e.attributes,o=0,s=r.length;s>o;o++)t=r[o],n=t.name,"setAttribute"!==n&&(i[n]=t.value);
return i})),t[i]=function(e,n){if(i=e.toUpperCase(),ft||(ft=!0,K?(w=function(e,t){function n(e,t){for(var n=0,i=e.length;i>n;t(e[n++]));}return new K(function(i){for(var r,o,s=0,a=i.length;a>s;s++)r=i[s],"childList"===r.type?(n(r.addedNodes,e),n(r.removedNodes,t)):(o=r.target,ht&&o.attributeChangedCallback&&"style"!==r.attributeName&&o.attributeChangedCallback(r.attributeName,r.oldValue,o.getAttribute(r.attributeName)))})}(s(E),s(k)),w.observe(t,{childList:!0,subtree:!0})):(g=[],lt(function v(){for(;g.length;)g.shift().call(null,g.shift());
lt(v)}),t.addEventListener("DOMNodeInserted",l(E)),t.addEventListener("DOMNodeRemoved",l(k))),t.addEventListener(j,f),t.addEventListener("readystatechange",f),t.createElement=function(e,n){var i=at.apply(t,arguments),r=""+e,o=P.call(R,(n?M:O)+(n||r).toUpperCase()),s=o>-1;return n&&(i.setAttribute("is",n=n.toLowerCase()),s&&(s=u(r.toUpperCase(),n))),ht=!t.createElement.innerHTMLHelper,s&&C(i,F[o]),i},et.cloneNode=function(e){var t=rt.call(this,!!e),n=a(t);return n>-1&&C(t,F[n]),e&&o(t.querySelectorAll(I)),t
}),-2<P.call(R,M+i)+P.call(R,O+i))throw new Error("A "+e+" type is already registered");if(!$.test(i)||-1<P.call(H,i))throw new Error("The type "+e+" is invalid");var i,c=function(){return p?t.createElement(h,i):t.createElement(h)},d=n||W,p=U.call(d,A),h=p?n[A].toUpperCase():i,m=R.push((p?M:O)+i)-1;return I=I.concat(I.length?",":"",p?h+'[is="'+e.toLowerCase()+'"]':h),c.prototype=F[m]=U.call(d,"prototype")?d.prototype:J(et),r(t.querySelectorAll(I),E),c}}}(window,document,Object,"registerElement"),define("buildins/customElement",["require"],function(){function e(){this.init&&this.init()
}return e.prototype.mipCreatedCallback=function(){},e.prototype.mipAttachedCallback=function(){},e.prototype.mipDetachedCallback=function(){},e.prototype.mipAttributeChangedCallback=function(){},e.prototype.inviewCallback=function(){this.isInviewer()&&this.build()},e.prototype.build=function(){},e}),define("buildins/registerMipElement",["require"],function(){function e(e,n){if(!t[e]){t[e]=1;var i=Object.create(HTMLElement.prototype),r=new n;$.extend(!0,i,r),i.createdCallback=function(){this.classList.add("mip-element"),this.mipCreatedCallback()
},i.attachedCallback=function(){this.mipAttachedCallback()},i.detachedCallback=function(){this.mipDetachedCallback()},i.attributeChangedCallback=function(){this.mipAttributeChangedCallback()},i.isInviewer=function(){var e=$(this).offset().top,t=$(window).height(),n=pageYOffset;return window.parent!==window&&platform.needSpecialScroll?t>=e:e-n>t?!1:!0},document.registerElement(e,{prototype:i})}}if(window.registerMipElement)return window.registerMipElement;var t={};return window.registerMipElement=e,e
}),define("utils/util",["require"],function(){function e(e,t,n){if(e.indexOf("cq02-super-god.cq02.baidu.com")<0||t&&t.length<8||0!=t.indexOf("http")&&0!=t.indexOf("//"))return t;var i="img"===n?"/i/":"/c/";(0==t.indexOf("//")||0==t.indexOf("https"))&&(i+="s/");var r=t.split("//");return r.shift(),t=r.join("//"),i+t}return{urlToCacheUrl:e}}),define("buildins/mip-img",["utils/util","buildins/customElement"],function(){function e(e){var t,n;e.uWid&&e.uHei?(t=+e.uWid,n=+e.uHei):(t=+e.oWid,n=+e.oHei);
var i=e.$wrapper.width(),r=Math.round(i*n/t),o=(e.$wrapper.height()-r)/2;return{wid:i,hei:r,left:0,top:o}}var t=require("buildins/customElement"),n=function(){if(!this.isRender){this.isRender=!0;var t=new Image,n=this.getAttribute("src");if(t.src=n,this.getAttribute("width")&&t.setAttribute("width",this.getAttribute("width")),this.getAttribute("height")&&t.setAttribute("height",this.getAttribute("height")),this.getAttribute("alt")&&t.setAttribute("alt",this.getAttribute("alt")),this.insertBefore(t,this.firstChild),null!==this.getAttribute("popup")){var i=['<div class="mip-img-popUp-wrapper">','<div class="mip-img-popUp-bg"></div>','<img src="'+n+'" />',"</div>"].join(""),r=$(t),o=$(i).insertAfter(r),s=o.find(".mip-img-popUp-bg"),a=o.find("img"),u=400;
o.on("click",function(){s.fadeOut(u);var e=r.offset().left,t=r.offset().top-$(window).scrollTop();a.animate({left:e,top:t,width:r.width(),height:r.height()},u,function(){o.hide()})}),r.on("click",function(){var n=t.width,i=t.height,c=r.attr("width"),l=r.attr("height"),f=e({oWid:n,oHei:i,uWid:c,uHei:l,$wrapper:o}),d=r.offset().left,p=r.offset().top-$(window).scrollTop();a.css({left:d,top:p,width:r.width(),height:r.height()}),s.show(),o.show(),a.animate({left:f.left,top:f.top,width:f.wid,height:f.hei},u)
})}}};return t.prototype.init=function(){this.build=n},t}),define("buildins/mip-gif",["require","buildins/customElement"],function(e){function t(){if(!this.isRender){this.isRender=!0;var e=new Image,t=this.getAttribute("framesrc");e.src=t,this.getAttribute("width")&&e.setAttribute("width",this.getAttribute("width")),this.getAttribute("height")&&e.setAttribute("height",this.getAttribute("height")),this.getAttribute("srcset")&&e.setAttribute("srcset",this.getAttribute("srcset")),this.getAttribute("sizes")&&e.setAttribute("sizes",this.getAttribute("sizes")),this.appendChild(e),$(e).on("click",function(){var e=this.parentNode,t=e.getAttribute("src"),n=new Image;
_this=this,n.onload=function(){e.removeChild(_this),e.appendChild(this),_this=null},n.src=t})}}var n=e("buildins/customElement");return n.prototype.init=function(){this.build=t},n}),define("buildins/mip-pix",["require","buildins/customElement"],function(e){function t(){if(!this.isRender){this.isRender=!0;var e=new Image,t=this.getAttribute("src"),n=(new Date).getTime();e.src=t+"?"+n,e.setAttribute("width",0),e.setAttribute("height",0),this.setAttribute("width",""),this.setAttribute("height",""),this.appendChild(e)
}}var n=e("buildins/customElement");return n.prototype.init=function(){this.build=t,this.inviewCallback=function(){},this.mipAttachedCallback=function(){this.build()}},n}),define("buildins/mip-carousel",["require","gesture"],function(e){function t(e){for(var t=0;t<y.length;t++)if(y[t]==e){f=t;break}d=y.length,v=m*(d-1),p=m*f,$(".mip-img-box").length<=0&&$("body").append('<div class="mip-img-box" style="display:none">'),i(),$(".mip-img-box").attr("style","display:block"),$(".box-item").each(function(){this.style.width=m+"px"
}),$(".box-img-wrap img").each(function(){this.style.width=m+"px"}),o(-1*f*m,0),b=!0,$(window).trigger("mip.carousel.open"),w.init(),w.bind(l)}function n(){$("[data-carousel]").each(function(){var e=this.getAttribute("src");y.push(e),$(this).on("click",function(){var e=this.getAttribute("src");t(e)})})}function i(){for(var e="",t=0;t<y.length;t++)e=e+'<div class = "box-item"><div class="box-img-wrap"> <img src="'+y[t]+'"> </div> </div>';var n='<div class = "box-line"><div class = "box-container">'+e+'</div></div><div class="mip-box-page">'+(f+1)+"/"+d+"</div>";
$(".mip-img-box").html(n)}function r(){$(".mip-img-box").attr("style","display:none"),$(window).trigger("mip.carousel.close"),b=!1,w.unbind(l)}function o(e,t){$(".box-container").attr("style","transform:translate3d("+e+"px, "+t+"px, 0px);"),$(".box-container").attr("style","-webkit-transform:translate3d("+e+"px, "+t+"px, 0px);")}function s(e,t){if("touchmove"==e.event){var n=t.srcElement,i=-1*e.x+p;if(i>-m&&v+m>i){o(-1*i,0);var n=t.srcElement;0!=T&&(u(n),T=0)}}else if("touchend"==e.event){Math.abs(e.x)<10&&r(),Math.abs(e.x)>g&&p>=0&&v>=p&&(e.x>0&&0!=p?p-=m:e.x<0&&p!=v&&(p+=m));
var s=Math.abs(p/m);o(-1*p,0),$(".mip-box-page").html(s+1+"/"+d)}t.stopPropagation(),t.preventDefault()}function a(e){var t=0,n=0,i=0,r=0,o=0,s=0,a={};return t=e.touches[0].pageX,i=e.touches[1].pageX,n=e.touches[0].pageY-document.body.scrollTop,r=e.touches[1].pageY-document.body.scrollTop,t&&i?(o=i>=t?(i-t)/2+t:(t-i)/2+i,s=r>=n?(r-n)/2+n:(n-r)/2+r,a={dist:Math.round(Math.sqrt(Math.pow(t-i,2)+Math.pow(n-r,2))),x:Math.round(o),y:Math.round(s)}):void 0}function u(e){e.style.width=T+"px",e.style.left="0",e.style.top="0"
}function c(e,t){if("touchstart"==e.event){N=!0,x=a(t);var n=t.srcElement;C=n.clientWidth,k=n.clientHeight,0==T&&(T=C,E=k)}if("touchmove"==e.event){{var n=t.srcElement,i=a(t),r=i.dist/x.dist,o=Math.round(r*C);Math.round(r*k)}if(T>o||o>T*S)return;A=(o-T)/2,console.log(x),console.log(r),n.style.left=-1*A+"px",n.style.width=o+"px"}if("touchend"==e.event){0==t.targetTouches.length&&(N=!1);var n=t.srcElement;C=n.clientWidth}t.preventDefault(),t.stopPropagation()}function l(e,t){b&&(e.targetTouches.length>1||1==N?c(t,e):s(t,e))
}var f=0,d=0,p=0,h=$(window).width(),m=h,g=200,v=0,y=[],b=!1,w=e("gesture"),x={},C=0,T=0,E=0,k=0,A=0,N=!1,S=2;return{initData:n}}),define("buildins/img-viewer",["deps/emit"],function(e){function t(e){this.opt=$.extend({selector:"[data-carousel]",viewerClass:".mip-viewer",timeoutHideHeader:3e3,verticalThreshold:.2,horizontalThreshold:.2,maxShowItem:3},e),this.init(),this.createDom(),this.bindEv()}var n=$(window),i={width:n.width(),height:n.height()};return $.extend(t.prototype,{init:function(){this.imgs=$(this.opt.selector),this.urlList=[],this.wrapper=$(this.opt.viewerClass),this.wrapper.length||(this.wrapper=$('<div class="mip-viewer"/>'),$("body").append(this.wrapper)),this.updateDirection()
},createDom:function(){var e='<div class="mip-viewer-header"><a href="javascript:;" class="mip-viewer-header-ret"><i class="c-icon">&#xe783</i></a><div class="mip-viewer-header-inner"><span class="mip-viewer-header-txt"></span></div></div>',t='<div class="mip-viewer-viewer"><div class="mip-viewer-list mip-viewer-normal">',n='<div class="mip-viewer-item"><div class="mip-viewer-item-inner"><img src="" /></div></div>',i="</div></div>",r="";this.updateList(),r+=e,r+=t;for(var o=0,s=this.opt.maxShowItem;s>o;o++)r+=n;
r+=i,this.wrapper.html(r),this.viewer=this.wrapper.find(".mip-viewer-viewer"),this.list=this.viewer.find(".mip-viewer-list"),this.items=this.list.find(".mip-viewer-item"),this.header=this.wrapper.find(".mip-viewer-header"),this.pager=this.header.find(".mip-viewer-header-txt"),this.ret=this.header.find(".mip-viewer-header-ret")},show:function(){var e=this;window.parent.postMessage({event:"jqHandle",data:{selector:".sf-header",handle:"hide"}},"*"),$(".main").hide(0,function(){n.trigger("resize"),e.wrapper.height(i.height).show(),e.replaceDom(e.getShowList(e.carouselId))
}),this.updatePager(),this.hideHeader()},hide:function(){this.wrapper.hide(),$(".main").show(),window.parent.postMessage({event:"jqHandle",data:{selector:".sf-header",handle:"show"}},"*")},updateDirection:function(){var e="mip-viewer-horizon";i.width>i.height?(this.phoneDirection="horizontal",this.wrapper.addClass(e)):(this.phoneDirection="vertical",this.wrapper.removeClass(e))},getShowList:function(e){var t=[];return t.push({src:this.urlList[e-1]||""}),t.push({src:this.urlList[e]}),t.push({src:this.urlList[e+1]||""}),t
},replaceDom:function(e){this.items.each(function(t){var n=$(this).find("img");n.removeAttr("style").attr("src",e[t].src),!e[t].src&&n.hide()})},showHeader:function(){this.headerTimer&&window.clearTimeout(this.headerTimer),this.header.show(),this.hideHeader()},hideHeader:function(){var e=this;this.headerTimer=setTimeout(function(){e.header.hide()},this.opt.timeoutHideHeader)},updatePager:function(){this.pager.text(this.carouselId+1+"/"+this.urlList.length)},updateList:function(e){var t=e||this.imgs,n=this;
n.urlList.length=0,t.each(function(e){var t=$(this);n.urlList.push(t.attr("src")),t.attr("carouselId",e)})},bindEv:function(){function e(e){e.preventDefault()}var t,r,o=this;this.imgs.on("click",function(){var e=$(this),t=e.attr("carouselId");o.carouselId=+t,o.show()}),this.ret.on("click",function(){return o.hide(),!1}),this.viewer.on("click",function(){o.showHeader()}),this.viewer.on("touchstart",function(e){o.locked=!!o.animationStatus,o.locked||(t=e.originalEvent.touches[0].pageX,r=o.list.css("-webkit-transform").match(/(-?[0-9\.]+)/g),o.initTransX=r&&+r[4]||0)
}).on("touchmove",function(n){if(!o.locked){var i=n.originalEvent.touches[0].pageX,r=i-t+o.initTransX;e(n),o.list.css({"-webkit-transition-duration":"0s","-webkit-transform":"translateX("+r+"px)"})}}).on("touchend",function(e){if(!o.locked){var n=e.originalEvent.changedTouches[0].pageX,r=n-t,s=Math.abs(r)>i.width*o.opt[o.phoneDirection+"Threshold"];s?r>0?o._goPrev():o._goNext():o._goNormal()}}).on("touchcancel",function(){}),this.list.on("transitionend webkitTransitionEnd",function(){o.replaceDom(o.getShowList(o.carouselId)),o._goCommon(),o.animationStatus="",o.updatePager()
}),n.on("viewport_resize.img_viewer",function(e,t){i=t,o.updateDirection(),o.wrapper.height(i.height)})},stop:function(){},_goNormal:function(){this.animationStatus="_goNormal",this.list.css({"-webkit-transition-duration":"400ms","-webkit-transform":"translateX(-33.33%)"})},_goNext:function(){return this.animationStatus="_goNext",this.urlList[this.carouselId+1]?(this.list.removeAttr("style").addClass("mip-viewer-toright"),void this.carouselId++):void this._goNormal()},_goPrev:function(){return this.animationStatus="_goPrev",this.urlList[this.carouselId-1]?(this.list.removeAttr("style").addClass("mip-viewer-toleft"),void this.carouselId--):void this._goNormal()
},_goCommon:function(){this.list.removeAttr("style").removeClass("mip-viewer-toright mip-viewer-toleft")},destroy:function(){}},e.prototype),t}),define("olympic/util",["require"],function(){function e(e,t){return t=t||{},e.replace(/#\{([^\}]+)\}/g,function(){return void 0!==t[arguments[1]]?t[arguments[1]]:""})}function t(e){var t=1e3*e;if(new Date-t<6e4)return"刚刚";var n=Math.floor((new Date-t)/6e4);if(60>n)return n+"分钟前";var i=Math.floor(n/60);if(24>i)return i+"小时前";var r=new Date(t),o=r.getMonth()+1;
o=10>o?"0"+o:o;var s=r.getDate()<10?"0"+r.getDate():r.getDate();return o+"-"+s}function n(e,t){var n=new RegExp(e+"=([^&?#]+)"),i=t,r=i.match(n);return r?r[1]:""}function i(e){return e?1e5>e?e:1e8>e?Math.round(e/1e4,10)+"万":(e/1e8).toFixed(1).replace(/\.0+$/,"")+"亿":0}return{timeSince:t,getParam:n,format:e,formatBigNumber:i}}),define("olympic/mip-link",["require","buildins/customElement"],function(e){function t(e){e.preventDefault();var t=this.getAttribute("href");if(t)if(window.parent!==window){var n=$(this),i={event:"loadiframe",data:{url:t,title:n.attr("title")||n.text().trim().split("\n")[0],click:n.data("click")}};
window.parent.postMessage(i,"*")}else location.href=t}function n(){this.isRender||(this.isRender=!0,$(this).on("click",t.bind(this)))}var i=e("buildins/customElement");return i.prototype.init=function(){this.build=n},i}),define("olympic/clipboard",["require"],function(){function e(e){$.extend(this,e),this.bind()}function t(e){var t;if("INPUT"===e.nodeName||"TEXTAREA"===e.nodeName)e.focus(),e.setSelectionRange(0,e.value.length),t=e.value;else{e.hasAttribute("contenteditable")&&e.focus();var n=window.getSelection(),i=document.createRange();
i.selectNodeContents(e),n.removeAllRanges(),n.addRange(i),t=n.toString()}return t}var n=/baiduboxapp/.test(navigator.userAgent),i=n?"touchstart":"click";return e.prototype={bind:function(){$(this.el).on("click",this.handler.bind(this))},update:function(e){this.text=e},unbind:function(){$(this.el).off("click",this.handler),this.removeFake()},handler:function(){this.selectFake(this.text)},removeFake:function(){this.fakeHandler&&(document.body.removeEventListener(i,this.fakeHandlerCallback),this.fakeHandler=null,this.fakeHandlerCallback=null),this.fakeElem&&(document.body.removeChild(this.fakeElem),this.fakeElem=null)
},copyText:function(){var e;try{e=document.execCommand("copy")}catch(t){e=!1}this.handleResult(e)},handleResult:function(e){e?this.success&&this.success():this.error&&this.error()},selectFake:function(e){var n="rtl"===document.documentElement.getAttribute("dir");this.removeFake(),this.fakeHandlerCallback=this.removeFake.bind(this),this.fakeHandler=document.body.addEventListener(i,this.fakeHandlerCallback),this.fakeElem=document.createElement("textarea"),this.fakeElem.style.fontSize="12pt",this.fakeElem.style.border="0",this.fakeElem.style.padding="0",this.fakeElem.style.margin="0",this.fakeElem.style.position="fixed",this.fakeElem.style[n?"right":"left"]="-9999px",this.fakeElem.style.top=(window.pageYOffset||document.documentElement.scrollTop)+"px",this.fakeElem.setAttribute("readonly",""),this.fakeElem.value=e,document.body.appendChild(this.fakeElem),this.selectedText=t(this.fakeElem),this.copyText()
}},e}),define("olympic/share",["require","olympic/clipboard"],function(e){var t=e("olympic/clipboard"),n=/badiu.com$/.test(location.host),i=/baiduboxapp/.test(navigator.userAgent)&&n,r={url:window.location.href,title:"百度搜索有惊喜",content:"百度搜索有惊喜",iconUrl:"http://m.baidu.com/static/ala/share/bdu.jpg",imageUrl:"",qzoneCfg:{},sinaweiboCfg:{},pyqCfg:{},wxfriendCfg:{},custom:[]};i&&e(["searchbox/openjs/aio"]);var o=function(e,t){t&&(e.url=encodeURIComponent(e.url),e.linkUrl=encodeURIComponent(e.url)),Box.os.android?Box.android.invokeApp("Bdbox_android_utils","callShare",[JSON.stringify(e),window.successFnName||"console.log",window.errorFnName||"console.log"]):(console.log(e),Box.ios.invokeApp("callShare",{options:encodeURIComponent(JSON.stringify(e)),errorcallback:"onFail",successcallback:"onSuccess"}))
},s={type:"qzone",title:"QQ空间",cb:function(){var e;return e=i?function(e){e.mediaType="qqdenglu";var t=e;e.qzoneCfg&&!$.isEmptyObject(e.qzoneCfg)&&(t=$.extend({},e,e.qzoneCfg)),o(t,!1)}:function(e){var t="http://qzs.qzone.qq.com/open/connect/widget/mobile/qzshare/index.html?page=qzshare.html&loginpage=loginindex.html&logintype=qzone&site=百度&appName=百度&";window.open(t+"url="+encodeURIComponent(e.url)+"&title="+encodeURIComponent(e.title)+"&summary="+encodeURIComponent(e.content))}}()},a={type:"sinaweibo",title:"新浪微博",cb:function(){var e;
return e=i?function(e){e.mediaType="sinaweibo";var t=e;e.sinaweiboCfg&&!$.isEmptyObject(e.sinaweiboCfg)&&(t=$.extend({},e,e.sinaweiboCfg)),o(t,!1)}:function(e){window.open(e.sinaweibourl?e.sinaweibourl:"http://v.t.sina.com.cn/share/share.php?url="+encodeURIComponent(e.url)+"&title="+encodeURIComponent(e.title)+"&pic="+encodeURIComponent(e.imageUrl))}}()},u={type:"pyq",title:"朋友圈",cb:function(e){e.mediaType="weixin_timeline";var t=e;e.pyqCfg&&!$.isEmptyObject(e.pyqCfg)&&(t=$.extend({},e,e.pyqCfg)),o(t,!1)
}},c={type:"wxfriend",title:"微信好友",cb:function(e){e.mediaType="weixin_friend";var t=e;e.wxfriendCfg&&!$.isEmptyObject(e.wxfriendCfg)&&(t=$.extend({},e,e.wxfriendCfg)),o(t,!1)}},l={type:"copylink",title:"复制链接",cb:function(){alert("复制成功")}},f=function(e,t,n){this.container=t,this.logfn=n||function(){},this.opt=$.extend({},r,e),this.opt.content||(this.opt.content=this.opt.title);var o=/^\/\/.+/;o.test(this.opt.url)&&(this.opt.url="http:"+this.opt.url),this.opt.linkUrl=this.opt.url;var f=[];i&&(f.push(c),f.push(u)),f.push(s),f.push(a),f.push(l),f=f.concat(this.opt.custom),window.innerWidth<400&&f.length>4&&f.splice(4,10),this.list=f;
var d,p="",h=f.length;p+='<div class="mip-share-list">';for(var m=0;h>m;m++)d=f[m],p+='<span class="mip-share-btn">',d&&(p+='<div class="mip-share-icon mip-share-icon-'+d.type+'"></div>',p+='<div class="c-line-clamp1 c-gray">'+d.title+"</div>"),p+="</span>";p+="</div>",this.domHtml=p,this._init()};return f.prototype={constructor:f,_init:function(){this.container.html(this.domHtml),this.share()},share:function(){var e=this,n=null;$(".mip-share-btn",this.container).off(),$(".mip-share-btn",this.container).each(function(r){n=$(this);
var o=e.list[r];if(o){if("copylink"==o.type)return void new t({el:n,text:e.opt.linkUrl,success:function(){o.cb(e.opt),e.logfn(o,i?0:1)},error:function(){alert("复制失败")}});n.on("click",function(){i&&e.logfn(o,1),o.cb(e.opt)}),i||n.on("touchend",function(){e.logfn(o[r],0)})}})}},f}),define("olympic/mip-share",["require","buildins/customElement","olympic/share"],function(e){function t(){this.isRender||(this.isRender=!0,new i({title:this.getAttribute("title")||document.title,url:this.getAttribute("url"),content:this.getAttribute("content"),iconUrl:this.getAttribute("icon")},$(this)))
}var n=e("buildins/customElement"),i=e("olympic/share");return n.prototype.init=function(){this.build=t},n}),define("olympic/recommend",["require","olympic/util"],function(e){function t(e){var t=e.recommend?e.recommend:e,n=window.parent!==window?"":"MIP_LOG_BTN";$.each(t,function(e,t){$(".recommends").append('<div class="'+n+" recommends-box"+(e?"":" recommends-box-first")+'" data-click=\'{"action":"recommend", "order":"'+e+'", "href":"'+t.url+'", "type": "sf"}\'><a class="recommends-href" href='+t.url+'><div class="recommends-title">'+t.title+'</div><div class="recommends-info"><span>'+i.timeSince(t.time)+'</span><span class="recommends-provider">'+t.provider+"</span></div></a></div>")
}),$(".recommends").css("height","100%")}function n(){$(".recommends").delegate(".recommends-box","click",function(e){e.preventDefault();var t=$(this).find(".recommends-href").attr("href"),n={event:"loadiframe",data:{url:t,title:$(this).find(".recommends-provider").text(),click:$(this).data("click")}};window.parent!==window?window.parent.postMessage(n,"*"):location.href=t})}var i=e("olympic/util");return{init:n,render:t}}),define("olympic/mip-recommend",["require","buildins/customElement","olympic/recommend"],function(e){function t(){if(!this.isRender){this.isRender=!0;
var e=this.getAttribute("src")||"//headline.baidu.com/doc/recommended";$.ajax({url:e,dataType:"jsonp",jsonp:"cb",data:{url_key:location.href},success:function(e){i.init(),i.render(e.data)}})}}var n=e("buildins/customElement"),i=e("olympic/recommend");return n.prototype.init=function(){this.build=t},n}),require(["mip"],function(){var e=window.registerMipElement;require(["olympic/mip-link"],e.bind(this,"mip-link")),require(["olympic/mip-share"],e.bind(this,"mip-share")),require(["olympic/mip-recommend"],e.bind(this,"mip-recommend"))
});
>>>>>>> 306565a84c1b75fcf4112a09ef56efcf5585c230
