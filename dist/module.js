/*! For license information please see module.js.LICENSE.txt */
define(["react","@grafana/ui","@grafana/data"],(function(e,t,n){return function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="/",n(n.s=8)}([function(t,n){t.exports=e},function(e,n){e.exports=t},function(e,t){e.exports=n},function(e,t,n){var r=n(4);"string"==typeof r&&(r=[[e.i,r,""]]);var o={hmr:!0,transform:void 0,insertInto:void 0};n(6)(r,o);r.locals&&(e.exports=r.locals)},function(e,t,n){(t=n(5)(!0)).push([e.i,"@-webkit-keyframes spin {\n  from {\n    transform: scale(1) rotate(0deg); }\n  to {\n    transform: scale(1) rotate(360deg); } }\n\n@keyframes spin {\n  from {\n    transform: scale(1) rotate(0deg); }\n  to {\n    transform: scale(1) rotate(360deg); } }\n\n.spinning > * > *:first-child {\n  -webkit-animation: spin 1s infinite linear;\n          animation: spin 1s infinite linear; }\n\n.center {\n  display: flex;\n  align-items: center;\n  justify-content: center; }\n\n.left {\n  float: left; }\n\n.right {\n  float: right; }\n","",{version:3,sources:["button-panel.css"],names:[],mappings:"AAAA;EACE;IACE,gCAAgC,EAAE;EACpC;IACE,kCAAkC,EAAE,EAAE;;AAJ1C;EACE;IACE,gCAAgC,EAAE;EACpC;IACE,kCAAkC,EAAE,EAAE;;AAE1C;EACE,0CAAkC;UAAlC,kCAAkC,EAAE;;AAEtC;EACE,aAAa;EACb,mBAAmB;EACnB,uBAAuB,EAAE;;AAE3B;EACE,WAAW,EAAE;;AAEf;EACE,YAAY,EAAE",file:"button-panel.css",sourcesContent:["@keyframes spin {\n  from {\n    transform: scale(1) rotate(0deg); }\n  to {\n    transform: scale(1) rotate(360deg); } }\n\n.spinning > * > *:first-child {\n  animation: spin 1s infinite linear; }\n\n.center {\n  display: flex;\n  align-items: center;\n  justify-content: center; }\n\n.left {\n  float: left; }\n\n.right {\n  float: right; }\n"]}]),e.exports=t},function(e,t,n){"use strict";e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n=function(e,t){var n=e[1]||"",r=e[3];if(!r)return n;if(t&&"function"==typeof btoa){var o=(i=r,s=btoa(unescape(encodeURIComponent(JSON.stringify(i)))),c="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(s),"/*# ".concat(c," */")),a=r.sources.map((function(e){return"/*# sourceURL=".concat(r.sourceRoot||"").concat(e," */")}));return[n].concat(a).concat([o]).join("\n")}var i,s,c;return[n].join("\n")}(t,e);return t[2]?"@media ".concat(t[2]," {").concat(n,"}"):n})).join("")},t.i=function(e,n,r){"string"==typeof e&&(e=[[null,e,""]]);var o={};if(r)for(var a=0;a<this.length;a++){var i=this[a][0];null!=i&&(o[i]=!0)}for(var s=0;s<e.length;s++){var c=[].concat(e[s]);r&&o[c[0]]||(n&&(c[2]?c[2]="".concat(n," and ").concat(c[2]):c[2]=n),t.push(c))}},t}},function(e,t,n){var r,o,a={},i=(r=function(){return window&&document&&document.all&&!window.atob},function(){return void 0===o&&(o=r.apply(this,arguments)),o}),s=function(e,t){return t?t.querySelector(e):document.querySelector(e)},c=function(e){var t={};return function(e,n){if("function"==typeof e)return e();if(void 0===t[e]){var r=s.call(this,e,n);if(window.HTMLIFrameElement&&r instanceof window.HTMLIFrameElement)try{r=r.contentDocument.head}catch(e){r=null}t[e]=r}return t[e]}}(),u=null,l=0,p=[],f=n(7);function d(e,t){for(var n=0;n<e.length;n++){var r=e[n],o=a[r.id];if(o){o.refs++;for(var i=0;i<o.parts.length;i++)o.parts[i](r.parts[i]);for(;i<r.parts.length;i++)o.parts.push(b(r.parts[i],t))}else{var s=[];for(i=0;i<r.parts.length;i++)s.push(b(r.parts[i],t));a[r.id]={id:r.id,refs:1,parts:s}}}}function h(e,t){for(var n=[],r={},o=0;o<e.length;o++){var a=e[o],i=t.base?a[0]+t.base:a[0],s={css:a[1],media:a[2],sourceMap:a[3]};r[i]?r[i].parts.push(s):n.push(r[i]={id:i,parts:[s]})}return n}function m(e,t){var n=c(e.insertInto);if(!n)throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");var r=p[p.length-1];if("top"===e.insertAt)r?r.nextSibling?n.insertBefore(t,r.nextSibling):n.appendChild(t):n.insertBefore(t,n.firstChild),p.push(t);else if("bottom"===e.insertAt)n.appendChild(t);else{if("object"!=typeof e.insertAt||!e.insertAt.before)throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");var o=c(e.insertAt.before,n);n.insertBefore(t,o)}}function v(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e);var t=p.indexOf(e);t>=0&&p.splice(t,1)}function y(e){var t=document.createElement("style");if(void 0===e.attrs.type&&(e.attrs.type="text/css"),void 0===e.attrs.nonce){var r=function(){0;return n.nc}();r&&(e.attrs.nonce=r)}return g(t,e.attrs),m(e,t),t}function g(e,t){Object.keys(t).forEach((function(n){e.setAttribute(n,t[n])}))}function b(e,t){var n,r,o,a;if(t.transform&&e.css){if(!(a="function"==typeof t.transform?t.transform(e.css):t.transform.default(e.css)))return function(){};e.css=a}if(t.singleton){var i=l++;n=u||(u=y(t)),r=C.bind(null,n,i,!1),o=C.bind(null,n,i,!0)}else e.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(n=function(e){var t=document.createElement("link");return void 0===e.attrs.type&&(e.attrs.type="text/css"),e.attrs.rel="stylesheet",g(t,e.attrs),m(e,t),t}(t),r=S.bind(null,n,t),o=function(){v(n),n.href&&URL.revokeObjectURL(n.href)}):(n=y(t),r=w.bind(null,n),o=function(){v(n)});return r(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;r(e=t)}else o()}}e.exports=function(e,t){if("undefined"!=typeof DEBUG&&DEBUG&&"object"!=typeof document)throw new Error("The style-loader cannot be used in a non-browser environment");(t=t||{}).attrs="object"==typeof t.attrs?t.attrs:{},t.singleton||"boolean"==typeof t.singleton||(t.singleton=i()),t.insertInto||(t.insertInto="head"),t.insertAt||(t.insertAt="bottom");var n=h(e,t);return d(n,t),function(e){for(var r=[],o=0;o<n.length;o++){var i=n[o];(s=a[i.id]).refs--,r.push(s)}e&&d(h(e,t),t);for(o=0;o<r.length;o++){var s;if(0===(s=r[o]).refs){for(var c=0;c<s.parts.length;c++)s.parts[c]();delete a[s.id]}}}};var A,E=(A=[],function(e,t){return A[e]=t,A.filter(Boolean).join("\n")});function C(e,t,n,r){var o=n?"":r.css;if(e.styleSheet)e.styleSheet.cssText=E(t,o);else{var a=document.createTextNode(o),i=e.childNodes;i[t]&&e.removeChild(i[t]),i.length?e.insertBefore(a,i[t]):e.appendChild(a)}}function w(e,t){var n=t.css,r=t.media;if(r&&e.setAttribute("media",r),e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}function S(e,t,n){var r=n.css,o=n.sourceMap,a=void 0===t.convertToAbsoluteUrls&&o;(t.convertToAbsoluteUrls||a)&&(r=f(r)),o&&(r+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(o))))+" */");var i=new Blob([r],{type:"text/css"}),s=e.href;e.href=URL.createObjectURL(i),s&&URL.revokeObjectURL(s)}},function(e,t){e.exports=function(e){var t="undefined"!=typeof window&&window.location;if(!t)throw new Error("fixUrls requires window.location");if(!e||"string"!=typeof e)return e;var n=t.protocol+"//"+t.host,r=n+t.pathname.replace(/\/[^\/]*$/,"/");return e.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi,(function(e,t){var o,a=t.trim().replace(/^"(.*)"$/,(function(e,t){return t})).replace(/^'(.*)'$/,(function(e,t){return t}));return/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(a)?e:(o=0===a.indexOf("//")?a:0===a.indexOf("/")?n+a:r+a.replace(/^\.\//,""),"url("+JSON.stringify(o)+")")}))}},function(e,t,n){"use strict";n.r(t);var r=n(2),o=function(e,t){return(o=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])})(e,t)};function a(e,t){var n="function"==typeof Symbol&&e[Symbol.iterator];if(!n)return e;var r,o,a=n.call(e),i=[];try{for(;(void 0===t||t-- >0)&&!(r=a.next()).done;)i.push(r.value)}catch(e){o={error:e}}finally{try{r&&!r.done&&(n=a.return)&&n.call(a)}finally{if(o)throw o.error}}return i}var i=n(0),s=n.n(i),c=n(1),u=function(e){function t(t){var n=e.call(this,t)||this;return n.init(),n}return function(e,t){function n(){this.constructor=e}o(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}(t,e),t.prototype.init=function(){this.state={api_call:"READY",response:""}},t.prototype.render=function(){var e=this,t=this.props.options;return s.a.createElement("div",{className:function(){if(!e.props.options.orientation)return"center";switch(e.props.options.orientation){case"left":return"left";case"right":return"right";case"center":default:return"center"}}()},s.a.createElement(c.Button,{variant:this.props.options.variant,title:this.state.response,size:"lg",className:function(){switch(e.state.api_call){case"IN_PROGRESS":return"spinning";default:return""}}(),icon:function(){switch(e.state.api_call){case"IN_PROGRESS":return"fa fa-spinner";case"SUCCESS":return"check";case"ERROR":return"exclamation-triangle";case"READY":default:return t.icon}}(),onClick:function(){e.setState({api_call:"IN_PROGRESS"}),console.log(t.method," to ",t.url," with params as ",t.type);var n=new URL(t.url),r=new Headers;r.set("Accept","application/json");var o={method:t.method,mode:"cors",credentials:"include",cache:"no-cache",headers:r,redirect:"follow"};"POST"===t.method&&(r.set("Content-Type",t.contentType),t.payload&&(o.body=t.payload)),t.isAuth&&r.set("Authorization",btoa(t.username+":"+t.password)),"header"===t.type?t.params.forEach((function(e){r.set(e[0],e[1])})):"query"===t.type?t.params.forEach((function(e){n.searchParams.append(e[0],e[1])})):console.error("Unknown params type",t.type),fetch(n.toString(),o).then((function(t){if("opaque"===t.type)e.setState({api_call:"READY",response:"CORS prevents access to the response"});else{if(!t.ok)throw console.log("Requeste failed: ",t),new Error(t.status+t.statusText);e.setState({api_call:"SUCCESS",response:t.statusText}),console.log("Requeste successful: ",t)}})).catch((function(t){e.setState({api_call:"ERROR",response:t.message}),console.error("Request error: ",t)}))},style:void 0===e.props.options.variant?{background:"none",border:"none",backgroundColor:e.props.options.backgroundColor,color:e.props.options.foregroundColor}:{}},t.text))},t}(i.PureComponent),l=function(e){e.item;var t=e.value,n=e.onChange,r=(e.context,a(Object(i.useState)(""),2)),o=r[0],u=r[1],l=a(Object(i.useState)(""),2),p=l[0],f=l[1];return s.a.createElement("div",{className:"panel-container",style:{width:"auto"}},s.a.createElement(c.HorizontalGroup,null,s.a.createElement(c.Input,{css:"",placeholder:"Name",onChange:function(e){var t=e.target;u(t.value)},value:o}),s.a.createElement(c.Input,{css:"",placeholder:"Value",onChange:function(e){var t=e.target;f(t.value)},value:p}),s.a.createElement(c.IconButton,{onClick:function(e){return function(e){e.target;var r,a=o;(r=t?t.filter((function(e){return e[0]!==a})):[]).push([a,p]),r.sort((function(e,t){return e[0].localeCompare(t[0])})),console.log("Updated params: ",r),u(""),f(""),n(r)}(e)},name:"plus"})),s.a.createElement(c.VerticalGroup,null,Array.from(t||[]).map((function(e){return s.a.createElement(c.HorizontalGroup,null,s.a.createElement(c.Input,{css:"",disabled:!0,value:e[0]}),s.a.createElement(c.Input,{css:"",disabled:!0,value:e[1]}),s.a.createElement(c.IconButton,{onClick:(r=e[0],function(e){e.target,console.log("Removing "+r);var o=t.filter((function(e){return e[0]!==r}));console.log("Removed "+r+": ",o),n(o)}),name:"minus"}));var r}))))};n(3);n.d(t,"plugin",(function(){return p}));var p=new r.PanelPlugin(u).setPanelOptions((function(e){return e.addRadio({path:"method",name:"Method",category:["REST Integration"],description:"HTTP method used to communicate with the remote site",settings:{options:[{value:"GET",label:"GET"},{value:"POST",label:"POST"}]},defaultValue:"GET"}).addTextInput({path:"url",name:"URL",category:["REST Integration"],description:"The URL to call",defaultValue:"http://api.example.com/"}).addRadio({path:"type",name:"Type",category:["REST Integration"],description:"Defines how the parameters are sent to the server",settings:{options:[{value:"header",label:"Header",description:"Send the parameters as request HTTP headers"},{value:"query",label:"Query",description:"Send the parameters as `key=value` query parameter"}]},defaultValue:"header"}).addCustomEditor({id:"buttonParams",path:"params",name:"Parameters",category:["REST Integration"],description:"The parameters sent with the request",editor:l}).addTextInput({path:"contentType",name:"Content-Type",category:["REST Integration"],description:"Content-Type of the payload",defaultValue:"application/json",showIf:function(e){return"POST"===e.method}}).addTextInput({path:"payload",name:"Payload",category:["REST Integration"],description:"Optional payload to send with the request",settings:{useTextarea:!0,rows:5},showIf:function(e){return"POST"===e.method}}).addSelect({path:"variant",name:"Variant",description:"Button variant used to render",settings:{options:[{value:"primary",label:"Primary"},{value:"secondary",label:"Secondary"},{value:"destructive",label:"Destructive"},{value:"link",label:"Link"},{value:void 0,label:"Custom"}]},defaultValue:"primary"}).addColorPicker({path:"foregroundColor",name:"Fackground Color",description:"Foreground color of the button",settings:{disableNamedColors:!0},showIf:function(e){return void 0===e.variant}}).addColorPicker({path:"backgroundColor",name:"Background Color",description:"Background color of the button",settings:{disableNamedColors:!0},showIf:function(e){return void 0===e.variant}}).addRadio({path:"orientation",name:"Orientation",description:"Button orientation used to render",settings:{options:[{value:"left",label:"Left"},{value:"center",label:"Center"},{value:"right",label:"Right"}]},defaultValue:"center"}).addSelect({path:"icon",name:"Icon",description:"",settings:{options:Object(c.getAvailableIcons)().map((function(e){return{value:e,label:e}}))},defaultValue:"cog"}).addTextInput({path:"text",name:"Text",description:"The description of the button",defaultValue:"The default button label"}).addBooleanSwitch({path:"isAuth",name:"Authentication",category:["Authentication"],description:"Should basic authentication be used?",defaultValue:!1}).addTextInput({path:"username",name:"Username",category:["Authentication"],description:"ℹ️ The server MUST provide proper CORS Access-Control-Allow-* headers!",showIf:function(e){return e.isAuth}}).addTextInput({path:"password",name:"Password",category:["Authentication"],description:"⚠️ The password is NOT stored encrypted in Grafana!",showIf:function(e){return e.isAuth}})}))}])}));
//# sourceMappingURL=module.js.map