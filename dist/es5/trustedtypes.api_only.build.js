(function(){var k="function"==typeof Object.create?Object.create:function(a){function b(){}b.prototype=a;return new b},l;if("function"==typeof Object.setPrototypeOf)l=Object.setPrototypeOf;else{var m;a:{var q={j:!0},r={};try{r.__proto__=q;m=r.j;break a}catch(a){}m=!1}l=m?function(a,b){a.__proto__=b;if(a.__proto__!==b)throw new TypeError(a+" is not extensible");return a}:null}var t=l;
function u(a,b){a.prototype=k(b.prototype);a.prototype.constructor=a;if(t)t(a,b);else for(var c in b)if("prototype"!=c)if(Object.defineProperties){var f=Object.getOwnPropertyDescriptor(b,c);f&&Object.defineProperty(a,c,f)}else a[c]=b[c];a.D=b.prototype}var v="function"==typeof Object.defineProperties?Object.defineProperty:function(a,b,c){a!=Array.prototype&&a!=Object.prototype&&(a[b]=c.value)},w="undefined"!=typeof window&&window===this?this:"undefined"!=typeof global&&null!=global?global:this;
function x(){x=function(){};w.Symbol||(w.Symbol=y)}var y=function(){var a=0;return function(b){return"jscomp_symbol_"+(b||"")+a++}}();function G(){x();var a=w.Symbol.iterator;a||(a=w.Symbol.iterator=w.Symbol("iterator"));"function"!=typeof Array.prototype[a]&&v(Array.prototype,a,{configurable:!0,writable:!0,value:function(){return H(this)}});G=function(){}}function H(a){var b=0;return I(function(){return b<a.length?{done:!1,value:a[b++]}:{done:!0}})}
function I(a){G();a={next:a};a[w.Symbol.iterator]=function(){return this};return a}function J(a){G();var b=a[Symbol.iterator];return b?b.call(a):H(a)}function P(a,b){return Object.prototype.hasOwnProperty.call(a,b)}function Q(a,b){if(b){var c=w;a=a.split(".");for(var f=0;f<a.length-1;f++){var e=a[f];e in c||(c[e]={});c=c[e]}a=a[a.length-1];f=c[a];b=b(f);b!=f&&null!=b&&v(c,a,{configurable:!0,writable:!0,value:b})}}
Q("WeakMap",function(a){function b(a){this.a=(g+=Math.random()+1).toString();if(a){x();G();a=J(a);for(var d;!(d=a.next()).done;)d=d.value,this.set(d[0],d[1])}}function c(a){P(a,e)||v(a,e,{value:{}})}function f(a){var d=Object[a];d&&(Object[a]=function(a){c(a);return d(a)})}if(function(){if(!a||!Object.seal)return!1;try{var b=Object.seal({}),d=Object.seal({}),c=new a([[b,2],[d,3]]);if(2!=c.get(b)||3!=c.get(d))return!1;c.delete(b);c.set(d,4);return!c.has(b)&&4==c.get(d)}catch(K){return!1}}())return a;
var e="$jscomp_hidden_"+Math.random();f("freeze");f("preventExtensions");f("seal");var g=0;b.prototype.set=function(a,d){c(a);if(!P(a,e))throw Error("WeakMap key fail: "+a);a[e][this.a]=d;return this};b.prototype.get=function(a){return P(a,e)?a[e][this.a]:void 0};b.prototype.has=function(a){return P(a,e)&&P(a[e],this.a)};b.prototype.delete=function(a){return P(a,e)&&P(a[e],this.a)?delete a[e][this.a]:!1};return b});
Q("Map",function(a){function b(){var a={};return a.c=a.next=a.head=a}function c(a,b){var d=a.a;return I(function(){if(d){for(;d.head!=a.a;)d=d.c;for(;d.next!=d.head;)return d=d.next,{done:!1,value:b(d)};d=null}return{done:!0,value:void 0}})}function f(a,b){var d=b&&typeof b;"object"==d||"function"==d?g.has(b)?d=g.get(b):(d=""+ ++p,g.set(b,d)):d="p_"+b;var c=a.f[d];if(c&&P(a.f,d))for(a=0;a<c.length;a++){var e=c[a];if(b!==b&&e.key!==e.key||b===e.key)return{id:d,list:c,index:a,b:e}}return{id:d,list:c,
index:-1,b:void 0}}function e(a){this.f={};this.a=b();this.size=0;if(a){a=J(a);for(var d;!(d=a.next()).done;)d=d.value,this.set(d[0],d[1])}}if(function(){if(!a||"function"!=typeof a||!a.prototype.entries||"function"!=typeof Object.seal)return!1;try{var d=Object.seal({x:4}),b=new a(J([[d,"s"]]));if("s"!=b.get(d)||1!=b.size||b.get({x:4})||b.set({x:4},"t")!=b||2!=b.size)return!1;var c=b.entries(),e=c.next();if(e.done||e.value[0]!=d||"s"!=e.value[1])return!1;e=c.next();return e.done||4!=e.value[0].x||
"t"!=e.value[1]||!c.next().done?!1:!0}catch(h){return!1}}())return a;x();G();var g=new WeakMap;e.prototype.set=function(a,b){a=0===a?0:a;var d=f(this,a);d.list||(d.list=this.f[d.id]=[]);d.b?d.b.value=b:(d.b={next:this.a,c:this.a.c,head:this.a,key:a,value:b},d.list.push(d.b),this.a.c.next=d.b,this.a.c=d.b,this.size++);return this};e.prototype.delete=function(a){a=f(this,a);return a.b&&a.list?(a.list.splice(a.index,1),a.list.length||delete this.f[a.id],a.b.c.next=a.b.next,a.b.next.c=a.b.c,a.b.head=
null,this.size--,!0):!1};e.prototype.clear=function(){this.f={};this.a=this.a.c=b();this.size=0};e.prototype.has=function(a){return!!f(this,a).b};e.prototype.get=function(a){return(a=f(this,a).b)&&a.value};e.prototype.entries=function(){return c(this,function(a){return[a.key,a.value]})};e.prototype.keys=function(){return c(this,function(a){return a.key})};e.prototype.values=function(){return c(this,function(a){return a.value})};e.prototype.forEach=function(a,b){for(var d=this.entries(),c;!(c=d.next()).done;)c=
c.value,a.call(b,c[1],c[0],this)};e.prototype[Symbol.iterator]=e.prototype.entries;var p=0;return e});Q("Object.is",function(a){return a?a:function(a,c){return a===c?0!==a||1/a===1/c:a!==a&&c!==c}});Q("Array.prototype.includes",function(a){return a?a:function(a,c){var b=this;b instanceof String&&(b=String(b));var e=b.length;c=c||0;for(0>c&&(c=Math.max(c+e,0));c<e;c++){var g=b[c];if(g===a||Object.is(g,a))return!0}return!1}});
var R=Reflect.apply,S=Object.prototype.hasOwnProperty,T=function(){function a(a){return f.apply(this,arguments)||this}function b(a){return f.apply(this,arguments)||this}function c(a){return f.apply(this,arguments)||this}function f(a,b){if(a!==M)throw Error("cannot call the constructor");A(this,"policyName",{value:b,enumerable:!0})}function e(a){var b=B.get(a);void 0===b&&(b=C(null),B.set(a,b));return b}function g(a){var b=N(a);if(null==b||N(b)!==U)throw Error();b=J(V(b));for(var c=b.next();!c.done;c=
b.next())c=c.value,A(a,c,{value:a[c]});return a}function p(a,b){n(a.prototype);delete a.name;A(a,"name",{value:b})}function d(a){return function(b){return b instanceof a&&B.has(b)}}function z(a,b){return function(a,c){a=L(a);if(!a||!R(S,a,[b]))throw Error("Policy not found");return(0,a[b])(c)}}function K(d,f){function g(a,b){var c=f[b],g=n(new a(M,d));a={};b=(a[b]=function(a){var b=n(C(g));e(b).value=""+c(a);return b},a)[b];return n(b)}return n({createHTML:g(a,"createHTML"),createScriptURL:g(b,"createScriptURL"),
createURL:g(c,"createURL")})}function L(a){return O.get(a)||null}var h=Object,W=h.assign,C=h.create,A=h.defineProperty,n=h.freeze,V=h.getOwnPropertyNames,N=h.getPrototypeOf,U=h.prototype;h=Array.prototype;var X=h.forEach,Y=h.push;x();var M=Symbol(),B=g(new WeakMap),D=g([]),O=g(new Map),E=g([]),F=!1;f.prototype.toString=function(){return e(this).value};f.prototype.valueOf=function(){return e(this).value};u(c,f);p(c,"TrustedURL");u(b,f);p(b,"TrustedScriptURL");u(a,f);p(a,"TrustedHTML");p(f,"TrustedType");
var Z={createHTML:function(){throw Error("undefined conversion");},createURL:function(){throw Error("undefined conversion");},createScriptURL:function(){throw Error("undefined conversion");},expose:!1};return n({g:a,i:c,h:b,l:z(a,"createHTML"),s:z(c,"createURL"),o:z(b,"createScriptURL"),m:function(a,b){if(F&&!E.includes(a))throw Error("Policy "+a+" disallowed.");if(D.includes(a))throw Error("Policy "+a+" exists.");D.push(a);var c=W(C(null),Z);b(c);n(c);b=K(a,c);c.expose&&O.set(a,b);return b},u:L,
v:function(){return D.slice()},w:d(a),B:d(c),A:d(b),C:function(a){a.includes("*")?F=!1:(F=!0,E.length=0,X.call(a,function(a){Y.call(E,""+a)}))}})}();"undefined"!==typeof window&&"undefined"===typeof window.TrustedTypes&&(window.TrustedTypes={TrustedHTML:T.g,TrustedURL:T.i,TrustedScriptURL:T.h,createHTML:T.l,createURL:T.s,createScriptURL:T.o,createPolicy:T.m,getExposedPolicy:T.u,getPolicyNames:T.v});}).call(window);//# sourceMappingURL=trustedtypes.api_only.build.js.map
