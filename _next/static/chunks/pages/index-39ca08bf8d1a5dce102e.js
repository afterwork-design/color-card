(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{1902:function(e,r,t){"use strict";var c=t(8527),o=(t(7294),t(456)),n=t(8250),f=t(5893);r.Z=function(e){var r=e.activeIndex,t=void 0===r?0:r;return(0,f.jsxs)(c.Ug,{justifyContent:"space-between",h:"80px",p:"0px 10px",bgColor:"white",position:"fixed",top:"0",left:"0",right:"0",boxShadow:"0px 5px 20px rgba(36, 37, 38, 0.25)",zIndex:1,children:[(0,f.jsxs)(c.Ug,{children:[(0,f.jsx)(o.Ee,{src:"./logo1.png",alt:"kaka color card"}),(0,f.jsx)(n.H1,{children:(0,f.jsx)(o.Ee,{src:"./logo2.png",alt:"kaka"})})]}),(0,f.jsxs)(c.Ug,{children:[[{name:"Palette",link:"https://afterwork-design.github.io/color-card"},{name:"Gradient",link:"https://afterwork-design.github.io/color-card/gradient"}].map((function(e,r){return(0,f.jsx)(c.rU,{href:e.link,border:"2px solid transparent",p:"10px 2px",textDecoration:"none",borderBottomColor:t===r?"#ff8d1a":"",children:(0,f.jsx)(n.H2,{fontSize:"16px",children:e.name})},e.name)})),(0,f.jsx)(c.rU,{href:"https://github.com/afterwork-design/color-card",children:(0,f.jsx)(o.Ee,{src:"./github.png",w:"40px",h:"25px",pl:"15px"})})]})]})}},8250:function(e,r,t){"use strict";t.d(r,{H1:function(){return d},H2:function(){return b},b:function(){return i}});var c=t(2809),o=(t(7294),t(8527)),n=t(5893);function f(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);r&&(c=c.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,c)}return t}function a(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?f(Object(t),!0).forEach((function(r){(0,c.Z)(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):f(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}var d=function(e){return(0,n.jsx)(o.X6,a({as:"h1",size:"xl",mt:0},e))},b=function(e){return(0,n.jsx)(o.X6,a({as:"h2",size:"lg"},e))},i=function(e){return(0,n.jsx)(o.xu,a({borderRadius:"8px",backgroundColor:"white"},e))}},5145:function(e,r,t){"use strict";t.r(r),t.d(r,{default:function(){return w}});var c=t(7294),o=t(8527),n=t(1902),f=t(9823),a=t(2809),d=t(219),b=t(5893),i=["colors"];function p(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);r&&(c=c.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,c)}return t}function s(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?p(Object(t),!0).forEach((function(r){(0,a.Z)(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):p(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}var u=function(e){var r=e.colors,t=(0,d.Z)(e,i);return(0,b.jsx)(o.xu,s(s({pos:"relative",h:"0",pb:"100%",cursor:"pointer",transition:"1s",_hover:{transform:"scale(0.9)"}},t),{},{children:(0,b.jsx)(o.rj,{pos:"absolute",top:"0",left:"0",bottom:"0",right:"0",gridTemplateColumns:"repeat(2, 50%)",gridTemplateRows:"repeat(2, 50%)",p:"20px",bgColor:"white",borderRadius:"8px",boxShadow:"5px 12px 20px rgba(36, 37, 38, 0.13)",children:r.map((function(e){return(0,b.jsx)(o.xu,{bgColor:e},e)}))})}))},l=function(e){var r=e.setColor;return(0,b.jsx)(o.rj,{mt:"80px",mr:"240px",p:["5px","20px","40px","80px"],flexWrap:"wrap",rowGap:"40px",columnGap:"40px",gridTemplateColumns:["repeat(1, 1fr)","repeat(2, 1fr)","repeat(2, 1fr)","repeat(3, 1fr)","repeat(5, 1fr)","repeat(6, 1fr)"],children:f.UA.colors.map((function(e){return(0,b.jsx)(u,{colors:e,onClick:function(){return r(e)}},e.toString())}))})},x=t(8250),g=function(e){var r=parseInt(e.substring(1,3),16),t=parseInt(e.substring(3,5),16),c=parseInt(e.substring(5,7),16);return"rgb(".concat(r,",").concat(t,",").concat(c,")")},h="copied!",j=function(e){var r=e.colors,t=function(e){var r=e.target,t=r.innerText;t!==h&&navigator.clipboard.writeText(t).then((function(){r.innerText=h,setTimeout((function(){r.innerText=t}),1e3)}))};return(0,b.jsx)(o.gC,{justifyContent:"space-between",w:"240px",position:"fixed",right:"0",top:"80px",bottom:"0",bgColor:"white",p:"40px",rowGap:["10px","15px","18px","20px","25px","40px"],boxShadow:"5px 12px 20px rgba(36, 37, 38, 0.25)",children:r.map((function(e){return(0,b.jsxs)(x.b,{display:"flex",flexDir:"column",flexGrow:1,overflow:"hidden",alignItems:"center",w:"100%",boxShadow:"1px 1px 12px rgba(36, 37, 38, 0.25)",rowGap:"5px",paddingBottom:"5px",children:[(0,b.jsx)(o.xu,{bgColor:e,minH:"10px",w:"100%",flexGrow:1}),(0,b.jsx)(o.xu,{onClick:t,cursor:"pointer",border:"1px solid #ebebeb",p:"5px",borderRadius:"4px",children:e}),(0,b.jsx)(o.xu,{onClick:t,cursor:"pointer",border:"1px solid #ebebeb",p:"5px",borderRadius:"4px",children:g(e)})]},e)}))})},w=function(){var e=(0,c.useState)(f.kM),r=e[0],t=e[1];return(0,b.jsxs)(o.xu,{children:[(0,b.jsx)(n.Z,{}),(0,b.jsxs)(o.xu,{children:[(0,b.jsx)(l,{setColor:t}),(0,b.jsx)(j,{colors:r})]})]})}},9823:function(e,r,t){"use strict";t.d(r,{UA:function(){return n},FL:function(){return a},kM:function(){return f}});var c=JSON.parse('{"zh":"\u56db\u8272","en":"four","colors":[["#d5a09a","#f2dbd5","#eae3dd","#d8c1bb"],["#d8c1bb","#f0e2e0","#ebeee7","#e0c3a8"],["#e7669e","#e7afcc","#e6d9e3","#5fa0d9"],["#f29ab2","#f6d2e0","#d6dbee","#ccc9de"],["#eec9be","#f3dbdb","#d2e8da","#9acddc"],["#a1a5cb","#cbc7d9","#d9ccd0","#bfb6c7"],["#e7ab89","#e0cfbb","#e9dbd0","#a59179"],["#a17364","#d7dac5","#dbcdb2","#dbcdb2"],["#9c9672","#c6b597","#b9c4b3","#a1b3a7"],["#a1b3a7","#bfafa2","#b3a799","#7e988d"],["#c4987d","#c4987d","#dacdbd","#b0a498"],["#c2a279","#e5cbb2","#d1c088","#d49d7e"],["#fbaf74","#f8f18e","#6dbb68","#fda295"],["#e9d1af","#4b9faa","#b98377","#ed8381"],["#fcf8e0","#f1decf","#ffe3d6","#ffaf8a"],["#f3c5c7","#ffaf8a","#cec7f3","#d6e4a6"],["#db705e","#fee1d9","#d9ebf5","#a8c8d7"],["#9cdee5","#a4e69c","#e6d29c","#e6e59c"],["#d6694c","#f5c0a1","#d8ddc0","#9bc2b0"],["#e19536","#f7c7b0","#cba47b","#3b5f2b"],["#eed05b","#e68764","#907b57","#f0d8ad"],["#2a5097","#cf6938","#ffc8a9","#1e73c4"],["#db5087","#f8edfd","#ecbdcf","#8bb3c0"],["#de9e20","#0758a6","#d47222","#d3b28f"],["#67b176","#0f7953","#b3cf9f","#80a949"],["#0f67fc","#b3cffe","#f8cfb1","#ab4215"],["#0f3391","#d68d28","#ddb419","#a11109"],["#a32317","#d9d8c9","#e9c318","#496d5c"],["#d25536","#f5ead9","#f9c7b0","#f6c72a"],["#7774e5","#abd70e","#e5e315","#eab322"],["#edb6bc","#c6bdab","#b5c9c0","#bddfd4"],["#bfb3d7","#f0d063","#a5cee2","#bea1a6"],["#ff8b8b","#f9f7e8","#b6e4e4","#61bfad"],["#f4f1c8","#e8a7df","#cdf4c7","#a6e4e3"],["#e5ddc8","#4391c1","#e6b840","#d7e4d2"],["#31b77a","#efe9d9","#fbcbbf","#cfecf4"],["#a5c1e6","#e6bca4","#cbe5a4","#bebfb9"],["#c6f6d5","#feebc8","#bee3f8","#fed7e2"],["#ff5d12","#ffaf8a","#ffe3d6","#ffeee6"],["#6f5cf1","#c5bcff","#dbd6ff","#f0eefe"],["#0e62f1","#a3c5ff","#ccdfff","#eef4fe"],["#9e9fc1","#c8a0be","#b2a697","#60b9c7"]]}'),o=JSON.parse('{"zh":"\u6e10\u53d8\u8272","en":"gradient","colors":[{"deg":135,"colors":[{"color":"#85FBA7"},{"color":"#13d0f8"}]},{"deg":135,"colors":[{"color":"#FF9A9E"},{"color":"#FAD0C4"}]},{"deg":135,"colors":[{"color":"#FFECD2"},{"color":"#FCB69F"}]},{"deg":135,"colors":[{"color":"#32b0fc"},{"color":"#0073f0"}]},{"deg":135,"colors":[{"color":"#ff692f"},{"color":"#ea453d"}]}]}'),n=c,f=n.colors[0],a=o},5301:function(e,r,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return t(5145)}])}},function(e){e.O(0,[479,774,888,179],(function(){return r=5301,e(e.s=r);var r}));var r=e.O();_N_E=r}]);