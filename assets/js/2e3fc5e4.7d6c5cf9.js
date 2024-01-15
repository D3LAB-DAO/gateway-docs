"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[382],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=l(n),f=i,m=p["".concat(c,".").concat(f)]||p[f]||d[f]||a;return n?r.createElement(m,o(o({ref:t},u),{},{components:n})):r.createElement(m,o({ref:t},u))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=f;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[p]="string"==typeof e?e:i,o[1]=s;for(var l=2;l<a;l++)o[l]=n[l];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},1783:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>d,frontMatter:()=>a,metadata:()=>s,toc:()=>l});var r=n(7462),i=(n(7294),n(3905));const a={sidebar_position:3},o="Multichain Features",s={unversionedId:"multichain",id:"multichain",title:"Multichain Features",description:"Gateway stands out with its multichain capabilities.",source:"@site/docs/multichain.md",sourceDirName:".",slug:"/multichain",permalink:"/gateway-docs/multichain",draft:!1,tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Features",permalink:"/gateway-docs/features"},next:{title:"ARCH-itecture",permalink:"/gateway-docs/category/arch-itecture"}},c={},l=[],u={toc:l},p="wrapper";function d(e){let{components:t,...a}=e;return(0,i.kt)(p,(0,r.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"multichain-features"},"Multichain Features"),(0,i.kt)("p",null,"Gateway stands out with its multichain capabilities.\nActions initiated on one chain can find their responses on another.\nWe've crafted Gateway versions compatible with both ",(0,i.kt)("strong",{parentName:"p"},"EVM-based")," blockchains and ",(0,i.kt)("strong",{parentName:"p"},"CosmWasm-based")," blockchains."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"multi_1",src:n(9020).Z,width:"1920",height:"1080"})),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"multi_2",src:n(2502).Z,width:"1920",height:"1080"})),(0,i.kt)("p",null,"The process is as follows:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("strong",{parentName:"li"},"Register"),": Begin by registering your web2 code. Ensure it's written in JavaScript."),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("strong",{parentName:"li"},"Request"),": Initiate a call to execute your web2 code, specifying the desired function and providing input parameters."),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("strong",{parentName:"li"},"Response"),": After executing the web2 code, each node derives a result. This result undergoes a consensus process among a subset of nodes to ensure its accuracy and reliability. Upon achieving consensus, the validated result is uploaded directly to the target chain, triggering a specific function call on the designated contract.")),(0,i.kt)("p",null,"By following these steps, developers can ensure a seamless integration of their web2 applications within the web3 environment provided by Gateway."))}d.isMDXComponent=!0},9020:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/multi_1-f02e9722fb86f80a6898cf7a3ce41949.png"},2502:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/multi_2-648f004f4ee86c9b010133c4eec36fe5.png"}}]);