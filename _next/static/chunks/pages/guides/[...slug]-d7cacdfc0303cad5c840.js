(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[902],{34699:function(e,n,r){"use strict";r.d(n,{Z:function(){return s}});var t=r(82961);function s(e,n){return function(e){if(Array.isArray(e))return e}(e)||function(e,n){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e)){var r=[],t=!0,s=!1,a=void 0;try{for(var i,c=e[Symbol.iterator]();!(t=(i=c.next()).done)&&(r.push(i.value),!n||r.length!==n);t=!0);}catch(u){s=!0,a=u}finally{try{t||null==c.return||c.return()}finally{if(s)throw a}}return r}}(e,n)||(0,t.Z)(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}},68399:function(e,n,r){"use strict";r.d(n,{V:function(){return u}});var t=r(85893),s=r(34699),a=r(17375),i=r(22152),c=r(4404),u=(r(67294),function(e){e.className;var n=e.releases,r=void 0===n?[]:n,u=e.namespace,d=void 0===u?"guides":u,f=(0,a.Z)(e,["className","releases","namespace"]),m=(0,c.MR)(r,"date","desc"),p=(0,s.Z)(m,1)[0];return(0,t.jsxs)("div",{className:"space-y-5",children:[p&&(0,t.jsxs)("a",{className:"underline text-xl text-gray-800",href:"#",children:["News: ",p.title]}),f.sections.map((function(e){return(0,t.jsx)(i.Menu,{title:e.name,children:e.guides.sort(o).map((function(e,n){return(0,t.jsxs)("div",{className:"flex text-gray-500",children:[(0,t.jsxs)("span",{className:"w-2.5",children:[n+1,"."]}),(0,t.jsx)("li",{className:"ml-2",children:(0,t.jsx)(i.NavLink,{href:l(d,e),reverse:!0,children:e.title})})]},e.slug)}))},e.name)}))]})}),l=function(e,n){return"/".concat(e,"/").concat(n.slug)},o=function(e,n){return e.number>n.number?1:0};r(54319),r(94184)},62393:function(e,n,r){"use strict";r.d(n,{pG:function(){return l},KE:function(){return u},VO:function(){return t.V}});var t=r(68399),s=r(85893),a=r(17375),i=r(41664),c=(r(67294),r(4404)),u=function(e){e.className;var n=e.post;return(0,s.jsxs)("p",{className:"text-gray-400 prose-sm",children:[(0,s.jsx)("span",{className:"italic",children:(0,c.p6)(n.date)})," \xb7"," ",(0,s.jsxs)("span",{className:"italic",children:["by ",n.author]})," \xb7"," ",(0,s.jsxs)("span",{children:[(0,s.jsx)("span",{className:"italic",children:"in "}),(0,s.jsx)("a",{className:"underline",href:"",children:n.category})]})]})},l=function(e){e.className;var n=e.post,r=((0,a.Z)(e,["className","post"]),"/blog/".concat(n.slug));return(0,s.jsxs)("div",{className:"space-y-2",children:[(0,s.jsxs)("div",{children:[(0,s.jsx)("h2",{className:"prose prose-2xl uppercase",children:(0,s.jsx)(i.default,{href:r,children:(0,s.jsx)("span",{className:"no-underline cursor-pointer",children:n.title})})}),(0,s.jsx)(u,{post:n})]}),(0,s.jsx)("p",{className:"text-gray-600",children:n.summary}),(0,s.jsx)("span",{className:"text-primary-800 underline cursor-pointer",children:(0,s.jsx)(i.default,{href:r,children:"Continue reading \u2192"})})]})}},67914:function(e,n,r){"use strict";r.r(n),r.d(n,{__N_SSG:function(){return c}});var t=r(85893),s=r(70973),a=r(4404),i=r(62393),c=(r(67294),!0);n.default=function(e){return(0,t.jsxs)(s.V.A,{className:"space-y-3",breadcrumbs:["Guides",e.guide.title],right:(0,t.jsx)(i.VO,{sections:e.sections,releases:e.releases}),children:[(0,t.jsx)("h2",{className:"text-gray-400",children:(0,a.MI)(e.guide.section)}),(0,t.jsx)("h1",{className:"prose text-4xl",children:e.guide.title}),(0,t.jsx)("ul",{className:"space-y-2 mt-10",children:e.guide.subsections.map((function(e,n){return(0,t.jsxs)("li",{className:"flex",children:[(0,t.jsxs)("div",{className:"w-5 text-gray-500",children:[n+1,"."]}),(0,t.jsx)("a",{className:"text-primary-800 underline",href:"#".concat(e.slug),children:e.name})]},n)}))}),(0,t.jsx)("div",{className:"mt-10 space-y-5",dangerouslySetInnerHTML:{__html:e.guide.content}})]})}},4404:function(e,n,r){"use strict";r.d(n,{p6:function(){return i},MR:function(){return u},MI:function(){return a}});var t=r(53406),s=r.n(t);function a(e){return s()(e.replace("-"," "))}function i(e){var n="string"===typeof e?new Date(e):e;return new Intl.DateTimeFormat(void 0,{dateStyle:"long"}).format(n)}var c=r(87329);function u(e,n,r){var t="asc"===r?function(e,r){return e[n]<r[n]?-1:1}:function(e,r){return e[n]>r[n]?-1:1};return(0,c.Z)(e.sort(t))}},69372:function(e,n,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/guides/[...slug]",function(){return r(67914)}])},53406:function(e){"use strict";const n=e=>{if("string"!==typeof e)throw new TypeError("Expected a string");return e.toLowerCase().replace(/(?:^|\s|-)\S/g,(e=>e.toUpperCase()))};e.exports=n,e.exports.default=n}},function(e){e.O(0,[774,403,973,888,179],(function(){return n=69372,e(e.s=n);var n}));var n=e.O();_N_E=n}]);