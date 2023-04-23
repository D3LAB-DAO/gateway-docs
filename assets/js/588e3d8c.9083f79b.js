"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[365],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>m});var a=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=a.createContext({}),l=function(e){var t=a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=l(e.components);return a.createElement(s.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,s=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),u=l(r),h=n,m=u["".concat(s,".").concat(h)]||u[h]||d[h]||o;return r?a.createElement(m,i(i({ref:t},p),{},{components:r})):a.createElement(m,i({ref:t},p))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=h;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c[u]="string"==typeof e?e:n,i[1]=c;for(var l=2;l<o;l++)i[l]=r[l];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}h.displayName="MDXCreateElement"},76:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>c,toc:()=>l});var a=r(7462),n=(r(7294),r(3905));const o={sidebar_position:4},i="Architecture",c={unversionedId:"archirecture",id:"archirecture",title:"Architecture",description:"Overview",source:"@site/docs/archirecture.md",sourceDirName:".",slug:"/archirecture",permalink:"/archirecture",draft:!1,tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"Features",permalink:"/features"},next:{title:"For Developers",permalink:"/for-developers"}},s={},l=[{value:"Overview",id:"overview",level:2},{value:"Components",id:"components",level:2},{value:"Archway Smart Contract",id:"archway-smart-contract",level:3},{value:"Gateway Backend",id:"gateway-backend",level:3},{value:"Gateway Bot",id:"gateway-bot",level:3}],p={toc:l},u="wrapper";function d(e){let{components:t,...r}=e;return(0,n.kt)(u,(0,a.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"architecture"},"Architecture"),(0,n.kt)("h2",{id:"overview"},"Overview"),(0,n.kt)("p",null,"The Gateway system architecture is composed of three main components:"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/D3LAB-DAO/gateway-contract"},"Archway Smart Contract")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/D3LAB-DAO/gateway-backend"},"Gateway Backend")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/D3LAB-DAO/gateway-bot"},"Gateway Bot"))),(0,n.kt)("p",null,"These components work in unison to enable the execution and validation of deterministic code within the Archway ecosystem."),(0,n.kt)("h2",{id:"components"},"Components"),(0,n.kt)("h3",{id:"archway-smart-contract"},"Archway Smart Contract"),(0,n.kt)("p",null,"The Archway Smart Contract is responsible for managing web2 actions, project registration, and execution result storage. It interacts with the Archway blockchain and processes transactions related to the Gateway."),(0,n.kt)("h3",{id:"gateway-backend"},"Gateway Backend"),(0,n.kt)("p",null,"The Gateway Backend is a Node.js-based server that downloads and executes JavaScript code provided by users. It offers an API endpoint for the Gateway Bot to send requests to execute code with specified input parameters."),(0,n.kt)("h3",{id:"gateway-bot"},"Gateway Bot"),(0,n.kt)("p",null,"The Gateway Bot monitors the Archway Smart Contract for new requests and prompts the Gateway Backend to execute the code when a request is identified. Additionally, it retrieves execution results and stores them in the Archway Smart Contract."))}d.isMDXComponent=!0}}]);