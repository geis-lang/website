(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[172],{34699:function(e,n,r){"use strict";r.d(n,{Z:function(){return s}});var t=r(82961);function s(e,n){return function(e){if(Array.isArray(e))return e}(e)||function(e,n){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e)){var r=[],t=!0,s=!1,i=void 0;try{for(var a,o=e[Symbol.iterator]();!(t=(a=o.next()).done)&&(r.push(a.value),!n||r.length!==n);t=!0);}catch(c){s=!0,i=c}finally{try{t||null==o.return||o.return()}finally{if(s)throw i}}return r}}(e,n)||(0,t.Z)(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}},68399:function(e,n,r){"use strict";r.d(n,{V:function(){return c}});var t=r(85893),s=r(34699),i=r(17375),a=r(22152),o=r(4404),c=(r(67294),function(e){e.className;var n=e.releases,r=void 0===n?[]:n,c=e.namespace,d=void 0===c?"guides":c,f=(0,i.Z)(e,["className","releases","namespace"]),h=(0,o.MR)(r,"date","desc"),m=(0,s.Z)(h,1)[0];return(0,t.jsxs)("div",{className:"space-y-5",children:[m&&(0,t.jsxs)("a",{className:"underline text-xl text-gray-800",href:"#",children:["News: ",m.title]}),f.sections.map((function(e){return(0,t.jsx)(a.Menu,{title:e.name,children:e.guides.sort(l).map((function(e,n){return(0,t.jsxs)("div",{className:"flex text-gray-500",children:[(0,t.jsxs)("span",{className:"w-2.5",children:[n+1,"."]}),(0,t.jsx)("li",{className:"ml-2",children:(0,t.jsx)(a.NavLink,{href:u(d,e),reverse:!0,children:e.title})})]},e.slug)}))},e.name)}))]})}),u=function(e,n){return"/".concat(e,"/").concat(n.slug)},l=function(e,n){return e.number>n.number?1:0};r(54319),r(94184)},73024:function(e,n,r){"use strict";r.r(n),r.d(n,{__N_SSG:function(){return c}});var t=r(85893),s=r(17375),i=r(22152),a=r(70973),o=(r(67294),r(68399)),c=!0;n.default=function(e){var n=e.docs,r=(0,s.Z)(e,["docs"]);return(0,t.jsx)(a.V.A,{breadcrumbs:["API"],right:(0,t.jsx)(o.V,{namespace:"docs",sections:n,releases:r.releases}),children:(0,t.jsxs)("div",{className:"space-y-5",children:[(0,t.jsx)("h2",{className:"prose prose-2xl",children:"API"}),(0,t.jsx)("p",{className:"prose",children:"Click on the cases below to learn more about how companies across different industries are using the power of Geis and its ecosystem to create and grow their businesses. Examples are listed in the order they have been published."}),(0,t.jsxs)("p",{className:"prose",children:["Want to see more companies? Check out the"," ",(0,t.jsx)(i.Link,{href:"/",children:"Geis Companies website"}),", which is maintained by the community."]})]})})}},4404:function(e,n,r){"use strict";r.d(n,{p6:function(){return a},MR:function(){return c},MI:function(){return i}});var t=r(53406),s=r.n(t);function i(e){return s()(e.replace("-"," "))}function a(e){var n="string"===typeof e?new Date(e):e;return new Intl.DateTimeFormat(void 0,{dateStyle:"long"}).format(n)}var o=r(87329);function c(e,n,r){var t="asc"===r?function(e,r){return e[n]<r[n]?-1:1}:function(e,r){return e[n]>r[n]?-1:1};return(0,o.Z)(e.sort(t))}},48348:function(e,n,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/docs",function(){return r(73024)}])},53406:function(e){"use strict";const n=e=>{if("string"!==typeof e)throw new TypeError("Expected a string");return e.toLowerCase().replace(/(?:^|\s|-)\S/g,(e=>e.toUpperCase()))};e.exports=n,e.exports.default=n}},function(e){e.O(0,[774,403,973,888,179],(function(){return n=48348,e(e.s=n);var n}));var n=e.O();_N_E=n}]);