!function(){function t(t){return t&&t.__esModule?t.default:t}var n,e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},o={};Object.defineProperty(o,"__esModule",{value:!0}),o.default=function(t){return t&&t.constructor===Symbol?"symbol":typeof t};var i=/^\s+|\s+$/g,r=/^[-+]0x[0-9a-f]+$/i,u=/^0b[01]+$/i,a=/^0o[0-7]+$/i,c=parseInt,f="object"==typeof e&&e&&e.Object===Object&&e,l="object"==typeof self&&self&&self.Object===Object&&self,s=f||l||Function("return this")(),p=Object.prototype.toString,d=Math.max,v=Math.min,g=function(){return s.Date.now()};function y(n){var e=void 0===n?"undefined":t(o)(n);return!!n&&("object"==e||"function"==e)}function b(n){if("number"==typeof n)return n;if(function(n){return"symbol"==(void 0===n?"undefined":t(o)(n))||function(t){return!!t&&"object"==typeof t}(n)&&"[object Symbol]"==p.call(n)}(n))return NaN;if(y(n)){var e="function"==typeof n.valueOf?n.valueOf():n;n=y(e)?e+"":e}if("string"!=typeof n)return 0===n?n:+n;n=n.replace(i,"");var f=u.test(n);return f||a.test(n)?c(n.slice(2),f?2:8):r.test(n)?NaN:+n}n=function(t,n,e){var o,i,r,u,a,c,f=0,l=!1,s=!1,p=!0;if("function"!=typeof t)throw new TypeError("Expected a function");function m(n){var e=o,r=i;return o=i=void 0,f=n,u=t.apply(r,e)}function h(t){return f=t,a=setTimeout(O,n),l?m(t):u}function j(t){var e=t-c;return void 0===c||e>=n||e<0||s&&t-f>=r}function O(){var t=g();if(j(t))return T(t);a=setTimeout(O,function(t){var e=n-(t-c);return s?v(e,r-(t-f)):e}(t))}function T(t){return a=void 0,p&&o?m(t):(o=i=void 0,u)}function w(){var t=g(),e=j(t);if(o=arguments,i=this,c=t,e){if(void 0===a)return h(c);if(s)return a=setTimeout(O,n),m(c)}return void 0===a&&(a=setTimeout(O,n)),u}return n=b(n)||0,y(e)&&(l=!!e.leading,r=(s="maxWait"in e)?d(b(e.maxWait)||0,n):r,p="trailing"in e?!!e.trailing:p),w.cancel=function(){void 0!==a&&clearTimeout(a),f=0,o=c=i=a=void 0},w.flush=function(){return void 0===a?u:T(g())},w};var m=document.querySelector(".country-info");function h(t){var n=t.map((function(t){var n=t.name,e=t.capital,o=t.population,i=t.flags,r=t.languages;return'<h2 class="country"><img src="'.concat(i.svg,'" alt="country flags" width = 40px> ').concat(n.official,'</h2>\n          <p class="capital">Capital: ').concat(e,' </p>\n          <p class="population">Population: ').concat(o,' </p>\n         <p class="languages">Languages: ').concat(Object.values(r),"</p>")})).join("");m.innerHTML=n}document.querySelector("#search-box").addEventListener("input",t(n)((function(t){var n=t.target.value;n.trim(),console.log(n),fetch("https://restcountries.com/v3.1/all/?fields=name,capital,population,flags,languages").then((function(t){return t.json()})).then(h).catch((function(t){return console.log(t)}))}),300))}();
//# sourceMappingURL=index.01ee39df.js.map