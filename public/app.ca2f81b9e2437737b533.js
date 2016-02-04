webpackJsonp([2,0],{0:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}var o=n(4),u=r(o),i=n(73),a=n(45),c=n(72),s=n(27),f=n(129),l=r(f),p=(0,c.getRootStore)(),d=document.getElementById("app");(0,i.render)(u["default"].createElement(a.Provider,{store:p},u["default"].createElement(s.Router,{history:s.browserHistory},l["default"])),d)},71:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function u(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},c=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}();Object.defineProperty(t,"__esModule",{value:!0});var s=n(123),f=r(s),l=n(249),p=r(l),d=n(128),y=r(d);(0,p["default"])("http://localhost:8080")(h);var h=function(e){function t(){var e=arguments.length<=0||void 0===arguments[0]?t.INITIAL_STATE:arguments[0];o(this,t);var n=u(this,Object.getPrototypeOf(t).call(this,e));return n.setHandler("SUCCESS",function(e,t){return console.log("action:",t),a({},e,{isPending:!1,todos:t.payload})}),n.setHandler("FAILURE",function(e,t){var n=t.payload;return a({},e,{isPending:!1,error:n})}),n}return i(t,e),c(t,[{key:"getTodos",value:function(){var e=this;this.fetch("/"+y["default"]+"/todos").then(function(t){return e.dispatch(e.createAction("SUCCESS")({payload:t.json()}))})["catch"](function(t){return e.dispatch(e.createAction("FAILURE")({payload:t}))})}},{key:"todos",value:function(){return this.getState().todos}}]),t}(f["default"]);h.INITIAL_STATE={error:"",isPending:!1,todos:[]},t["default"]=h},72:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0}),t.getRootStore=void 0;var o=n(123),u=r(o),i=n(44),a=n(71)["default"],c=new a,s=(0,i.createStore)(c.reducer);(0,u["default"])(s,c);t.getRootStore=function(){return s}},123:function(e,t,n){!function(t,n){e.exports=n()}(this,function(){return function(e){function t(r){if(n[r])return n[r].exports;var o=n[r]={exports:{},id:r,loaded:!1};return e[r].call(o.exports,o,o.exports,t),o.loaded=!0,o.exports}var n={};return t.m=e,t.c=n,t.p="",t(0)}([function(e,t){"use strict";function n(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}return Array.from(e)}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){var n=arguments.length<=2||void 0===arguments[2]?u:arguments[2];return t.__parent=e,e instanceof l&&(t.__link=n.bind(t)),t}function u(e,t){return void 0===t?"object"==("undefined"==typeof e?"undefined":c(e))&&this.__parent?e[i(this.__parent,this)]:e:"object"==("undefined"==typeof e?"undefined":c(e))&&this.__parent?e[i(this.__parent,this)]=t:t}function i(e,t){for(var n,r=Object.keys(e),o=0;n=r[o];o++)if(e[n]===t)return n}function a(e,t,n){var r="function"==typeof t?t:function(e){return e};return function(){var t={type:e,payload:r.apply(void 0,arguments)};return 1===arguments.length&&(arguments.length<=0?void 0:arguments[0])instanceof Error&&(t.error=!0),"function"==typeof n&&(t.meta=n.apply(void 0,arguments)),t}}var c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol?"symbol":typeof e},s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},f=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}();Object.defineProperty(t,"__esModule",{value:!0}),t.link=o;var l=t.Api=function(){function e(){var t=this,n=arguments.length<=0||void 0===arguments[0]?{}:arguments[0];r(this,e),Object.defineProperties(this,{__actionHandlers:{value:{}},__state:{value:n,writable:!0},__dispatch:{value:function(e){return"function"==typeof e?e(t.dispatch.bind(t),t.getState.bind(t)):(n=t.reducer(n,e),e)}},__parent:{value:void 0,writable:!0},__link:{value:void 0,writable:!0},connector:{value:this.connector.bind(this)},reducer:{value:this.reducer.bind(this)}})}return f(e,[{key:"init",value:function(){return this.dispatch(this.createAction("@@redux/INIT")()),this}},{key:"dispatch",value:function(e){return this.__parent?this.__parent.dispatch(e):this.__dispatch(e)}},{key:"getState",value:function(){return this.__parent?this.__link?this.__link(this.__parent.getState()):this.__parent.getState():this.__state}},{key:"createAction",value:function(t,n,r){return this.__parent instanceof e?this.__parent.createAction(i(this.__parent,this)+"/"+t,n,r):a(t,n,r)}},{key:"setHandler",value:function(e,t){this.__actionHandlers[e]=t}},{key:"clearHandler",value:function(e){delete this.__actionHandlers[e]}},{key:"connector",value:function(e,t){return s({},this.getState(),t,{api:this})}},{key:"reducer",value:function(t,r){var o=this,u=r.type.indexOf("/"),i=-1!==u&&r.type.substring(0,u),a=this.__actionHandlers[r.type]?this.__actionHandlers[r.type].call(this,t,r):void 0===t?this.__state:void 0,c=Object.keys(this).filter(function(t){return o[t]instanceof e});return c.forEach(function(e){var c=e!==i?r:s({},r,{type:r.type.substring(u+1)}),f=o[e].reducer(o[e].__link(t),c);(void 0===t||o[e].__link&&void 0===o[e].__link(t)||o[e].getState()!==f)&&(void 0===a&&(a=t instanceof Array?[].concat(n(t)):s({},t)),o[e].__link(a,f))}),this.__state=a||t}}]),e}();t["default"]=l}])})},128:function(e,t){"use strict"},129:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var o=n(4),u=r(o),i=n(27),a=n(133),c=r(a),s=n(132);t["default"]=u["default"].createElement(i.Route,{component:c["default"],path:"/"},u["default"].createElement(i.IndexRoute,{component:s.FrontPage}),u["default"].createElement(i.Route,{component:s.AboutPage,path:"/about"}))},130:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function u(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var a=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}();Object.defineProperty(t,"__esModule",{value:!0});var c=n(4),s=r(c),f=n(27),l=function(e){function t(e){return o(this,t),u(this,Object.getPrototypeOf(t).call(this,e))}return i(t,e),a(t,[{key:"render",value:function(){return s["default"].createElement("div",null,s["default"].createElement("h2",null,"About Page!"),s["default"].createElement(f.Link,{to:"/"},"Home"))}}]),t}(c.Component);t["default"]=l},131:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var o=n(4),u=r(o),i=(n(44),n(45)),a=n(27),c=n(72),s=r(c),f=n(71),l=(r(f),function(e){var t=e.todos,n=e.getTodos;return console.log("wahh todos:",t),u["default"].createElement("div",null,u["default"].createElement("h2",null,"FrontPage"),u["default"].createElement("button",{onClick:n},"Fetch Todos"),u["default"].createElement(a.Link,{to:"/about"},"About"),u["default"].createElement("ul",null,t.todos.map(function(e){return u["default"].createElement("li",{key:e.id},e.title)})))});l.propTypes={getTodos:o.PropTypes.func.isRequired,todos:o.PropTypes.shape({error:o.PropTypes.string.isRequired,isPending:o.PropTypes.bool.isRequired,todos:o.PropTypes.arrayOf(o.PropTypes.shape({userId:o.PropTypes.number.isRequired,id:o.PropTypes.number.isRequired,title:o.PropTypes.string.isRequired,completed:o.PropTypes.bool.isRequired})).isRequired})},t["default"]=(0,i.connect)(s["default"].getRootStore().connector)(l)},132:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var o=n(131);Object.defineProperty(t,"FrontPage",{enumerable:!0,get:function(){return r(o)["default"]}});var u=n(130);Object.defineProperty(t,"AboutPage",{enumerable:!0,get:function(){return r(u)["default"]}})},133:function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function u(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var i=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}();Object.defineProperty(t,"__esModule",{value:!0});var a=n(4),c=function(e){function t(){return r(this,t),o(this,Object.getPrototypeOf(t).apply(this,arguments))}return u(t,e),i(t,[{key:"render",value:function(){return this.props.children}}]),t}(a.Component);c.propTypes={children:a.PropTypes.any},t["default"]=c},249:function(e,t,n){!function(t,n){e.exports=n()}(this,function(){return function(e){function t(r){if(n[r])return n[r].exports;var o=n[r]={exports:{},id:r,loaded:!1};return e[r].call(o.exports,o,o.exports,t),o.loaded=!0,o.exports}var n={};return t.m=e,t.c=n,t.p="",t(0)}([function(e,t){(function(e){"use strict";function n(){var e=arguments.length<=0||void 0===arguments[0]?"":arguments[0];return"string"!=typeof e?n()(e):function(t){return"function"==typeof t?t.prototype.fetch=u(e):t.fetch=u(e).bind(t),t}}function r(){var e=arguments.length<=0||void 0===arguments[0]?"":arguments[0],t=arguments.length<=1||void 0===arguments[1]?null:arguments[1],n=arguments.length<=2||void 0===arguments[2]?i():arguments[2];return"string"!=typeof e?r()(e):function(r){var o="function"==typeof r?r.prototype:r;return o.__endpoint=n&&t||e,r}}function o(e){return function(t){var n="function"==typeof t?t.prototype:t;return n.__fetch=e,t}}function u(e){return function(){var t=arguments.length<=0||void 0===arguments[0]?"":arguments[0],n=arguments.length<=1||void 0===arguments[1]?void 0:arguments[1],r=arguments.length<=2||void 0===arguments[2]?!1:arguments[2];if(this.__endpoint)t=r&&t||this.__endpoint+e+t;else{t=!r&&e?e+t:t;for(var o=this;o=o.__parent;)if(o.fetch)return o.fetch(t,n,r)}return this.__fetch?this.__fetch(t,n):c(t,n)}}function i(){return"object"==("undefined"==typeof window?"undefined":a(window))&&"undefined"==typeof e}var a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol?"symbol":typeof e};Object.defineProperty(t,"__esModule",{value:!0}),t.remote=n,t.endpoint=r,t.fetcher=o;var c="object"==("undefined"==typeof window?"undefined":a(window))&&window.fetch||e.fetch;t["default"]=n}).call(t,function(){return this}())}])})}});