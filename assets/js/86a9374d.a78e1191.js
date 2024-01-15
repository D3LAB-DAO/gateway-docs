"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[118],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>f});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),i=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},p=function(e){var t=i(e.components);return n.createElement(c.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=i(r),m=a,f=u["".concat(c,".").concat(m)]||u[m]||d[m]||o;return r?n.createElement(f,l(l({ref:t},p),{},{components:r})):n.createElement(f,l({ref:t},p))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,l=new Array(o);l[0]=m;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[u]="string"==typeof e?e:a,l[1]=s;for(var i=2;i<o;i++)l[i]=r[i];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},5579:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>d,frontMatter:()=>o,metadata:()=>s,toc:()=>i});var n=r(7462),a=(r(7294),r(3905));const o={sidebar_position:2},l="Microservices",s={unversionedId:"for-developers/microservices",id:"for-developers/microservices",title:"Microservices",description:"Global",source:"@site/docs/for-developers/microservices.md",sourceDirName:"for-developers",slug:"/for-developers/microservices",permalink:"/gateway-docs/for-developers/microservices",draft:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Quick Start",permalink:"/gateway-docs/for-developers/quick-start"},next:{title:"Tables",permalink:"/gateway-docs/for-developers/tables"}},c={},i=[{value:"Global",id:"global",level:2},{value:"Relay",id:"relay",level:2},{value:"Node",id:"node",level:2}],p={toc:i},u="wrapper";function d(e){let{components:t,...r}=e;return(0,a.kt)(u,(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"microservices"},"Microservices"),(0,a.kt)("h2",{id:"global"},"Global"),(0,a.kt)("p",null,"To run the ",(0,a.kt)("inlineCode",{parentName:"p"},"Counter")," service (default port number is ",(0,a.kt)("inlineCode",{parentName:"p"},"30328"),"):"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"$ node src/global/counter.js\n")),(0,a.kt)("p",null,"Interact with the ",(0,a.kt)("inlineCode",{parentName:"p"},"Counter")," service via the following endpoints:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},'$ curl http://localhost:30328/epoch\n{"epoch":10000}\n\n$ curl http://localhost:30328/round\n{"round":4}\n\n$ curl http://localhost:30328/seed\n{"seed":"1bd4c2ec750458404795bc011361551f35c3ab7c1b924f3a23ceb853269cdcd8"}\n')),(0,a.kt)("h2",{id:"relay"},"Relay"),(0,a.kt)("p",null,"Run the ",(0,a.kt)("inlineCode",{parentName:"p"},"DB")," with Docker:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"$ docker-compose up -d --build\n")),(0,a.kt)("p",null,"Start the ",(0,a.kt)("inlineCode",{parentName:"p"},"Receive")," service to handle user requests (default port number is ",(0,a.kt)("inlineCode",{parentName:"p"},"30329"),"):"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"$ node src/relay/receive.js\n")),(0,a.kt)("p",null,"Post a new request to the system:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},'$ curl -X POST -H "Content-Type: application/json" -d \'{"uri":"[URI]", "params": [INPUT_PARAMETERS], "deadline": [DEADLINE]}\' http://localhost:30329/request\n{"result":8}\n')),(0,a.kt)("p",null,"Run the ",(0,a.kt)("inlineCode",{parentName:"p"},"Send")," service to manage transactions:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"$ node src/relay/send.js\n")),(0,a.kt)("h2",{id:"node"},"Node"),(0,a.kt)("p",null,"Execute and interact with the ",(0,a.kt)("inlineCode",{parentName:"p"},"VRF")," (default port number is ",(0,a.kt)("inlineCode",{parentName:"p"},"30327"),"):"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"$ export PK=[YOUR_PRIVATE_KEY_HERE]\n\n$ node src/node/vrf.js\n")),(0,a.kt)("p",null,"Post data for VRF evaluation and verification:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},'$ curl -X POST -H "Content-Type: application/json" -d \'{"data":"[DATA]"}\' http://localhost:30327/evaluate\n{"hash":[12,144,213,205,213,202,202,139,198,46,234,157,134,224,50,238,40,184,250,76,59,118,184,35,169,109,115,141,221,42,143,99],"proof":[73,103,77,19,206,194,140,121,180,136,15,203,222,184,104,134,131,52,177,140,221,81,171,15,73,231,41,240,250,88,179,249,31,21,71,105,211,219,5,198,245,210,169,209,183,49,112,199,184,15,149,5,50,51,177,174,197,50,249,192,74,159,6,148,4,88,151,116,205,4,119,193,115,177,119,194,200,51,229,209,111,178,209,3,153,213,203,64,51,125,123,228,209,36,46,124,35,179,80,28,146,109,24,56,39,101,243,186,38,131,254,80,197,192,18,152,156,106,114,193,38,215,96,132,22,195,123,110,230]}\n\n$ curl -X POST -H "Content-Type: application/json" -d \'{"publicKey":"[YOUR_PUBLIC_KEY_HERE]", "data":"[DATA]", "hash":"[HASH]", "proof":"[PROOF]"}\' http://localhost:30327/verify\n{"result":true}\n')),(0,a.kt)("p",null,"Start the ",(0,a.kt)("inlineCode",{parentName:"p"},"APP")," service:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"$ export PK=[YOUR_PRIVATE_KEY_HERE]\n\n$ node src/node/app.js\n")))}d.isMDXComponent=!0}}]);