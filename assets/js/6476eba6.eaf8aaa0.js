"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[827],{3905:(e,t,r)=>{r.d(t,{Zo:()=>l,kt:()=>h});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),p=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},l=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},g=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),u=p(r),g=a,h=u["".concat(s,".").concat(g)]||u[g]||d[g]||o;return r?n.createElement(h,i(i({ref:t},l),{},{components:r})):n.createElement(h,i({ref:t},l))}));function h(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=g;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c[u]="string"==typeof e?e:a,i[1]=c;for(var p=2;p<o;p++)i[p]=r[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}g.displayName="MDXCreateElement"},2175:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>c,toc:()=>p});var n=r(7462),a=(r(7294),r(3905));const o={sidebar_position:6},i="Usage Guide",c={unversionedId:"usage",id:"usage",title:"Usage Guide",description:"Demo Webpage//gateway-frontend.vercel.app/",source:"@site/docs/usage.md",sourceDirName:".",slug:"/usage",permalink:"/usage",draft:!1,tags:[],version:"current",sidebarPosition:6,frontMatter:{sidebar_position:6},sidebar:"tutorialSidebar",previous:{title:"For Developers",permalink:"/for-developers"},next:{title:"Roadmap",permalink:"/roadmap"}},s={},p=[{value:"<strong>Adding a New Project and Request</strong>",id:"adding-a-new-project-and-request",level:2},{value:"<strong>Monitoring and Executing Requests</strong>",id:"monitoring-and-executing-requests",level:2},{value:"<strong>Fetching Execution Results</strong>",id:"fetching-execution-results",level:2}],l={toc:p},u="wrapper";function d(e){let{components:t,...o}=e;return(0,a.kt)(u,(0,n.Z)({},l,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"usage-guide"},"Usage Guide"),(0,a.kt)("p",null,"Demo Webpage: ",(0,a.kt)("a",{parentName:"p",href:"https://gateway-frontend.vercel.app/"},"https://gateway-frontend.vercel.app/")),(0,a.kt)("admonition",{type:"caution"},(0,a.kt)("p",{parentName:"admonition"},"On the demo webpage, you can register a new project by interacting with the contract in Archway.")),(0,a.kt)("admonition",{type:"caution"},(0,a.kt)("p",{parentName:"admonition"},"After registration, you can interact with that project through the UI, but for a smooth demo, the newly registered project will disappear from the UI after refreshing.")),(0,a.kt)("admonition",{type:"caution"},(0,a.kt)("p",{parentName:"admonition"},"A ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/D3LAB-DAO/gateway-backend"},"backend")," and ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/D3LAB-DAO/gateway-bot"},"bot")," are required to run the JavaScript code and register the results on Web2.")),(0,a.kt)("hr",null),(0,a.kt)("p",null,"You must have ",(0,a.kt)("a",{parentName:"p",href:"https://chrome.google.com/webstore/detail/keplr/dmkamcknogkgcdfhhbddcghachkejeap"},"Keplr")," installed to use the demo webpage."),(0,a.kt)("h2",{id:"adding-a-new-project-and-request"},(0,a.kt)("strong",{parentName:"h2"},"Adding a New Project and Request")),(0,a.kt)("p",null,"Register a new project by interacting with the Archway Smart Contract. Submit a request with a short description and the URL of the JavaScript code to be executed."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"upload",src:r(8217).Z,width:"2528",height:"1480"})),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"Description"),": A short description of the project."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"Wallet address"),": Additional information for rewards, etc."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"GitHub link"),": Publicly accessible location of the JavaScript code. This should be a ",(0,a.kt)("a",{parentName:"li",href:"https://raw.githubusercontent.com/D3LAB-DAO/gateway-backend/main/examples/circle_area.js"},"link to the raw source code only"),".")),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"projects",src:r(5612).Z,width:"3006",height:"2382"})),(0,a.kt)("h2",{id:"monitoring-and-executing-requests"},(0,a.kt)("strong",{parentName:"h2"},"Monitoring and Executing Requests")),(0,a.kt)("p",null,"The Gateway Bot continuously monitors the Archway Smart Contract for new requests. Upon detecting a request, it triggers the Gateway Backend to download and execute the JavaScript code with the provided input parameters."),(0,a.kt)("h2",{id:"fetching-execution-results"},(0,a.kt)("strong",{parentName:"h2"},"Fetching Execution Results")),(0,a.kt)("p",null,"The Gateway Bot fetches execution results from the Gateway Backend and stores them in the Archway Smart Contract. Users can retrieve these results by querying the smart contract."))}d.isMDXComponent=!0},5612:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/projects-a80c546506cec46858f923249e5c1b4b.png"},8217:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/upload-4e8cbf726f32ad3a58bd065662ef7139.png"}}]);