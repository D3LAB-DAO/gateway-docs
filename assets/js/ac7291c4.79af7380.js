"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[246],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>m});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var o=n.createContext({}),d=function(e){var t=n.useContext(o),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},u=function(e){var t=d(e.components);return n.createElement(o.Provider,{value:t},e.children)},p="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=d(r),h=a,m=p["".concat(o,".").concat(h)]||p[h]||c[h]||i;return r?n.createElement(m,l(l({ref:t},u),{},{components:r})):n.createElement(m,l({ref:t},u))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,l=new Array(i);l[0]=h;var s={};for(var o in t)hasOwnProperty.call(t,o)&&(s[o]=t[o]);s.originalType=e,s[p]="string"==typeof e?e:a,l[1]=s;for(var d=2;d<i;d++)l[d]=r[d];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}h.displayName="MDXCreateElement"},75:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>o,contentTitle:()=>l,default:()=>c,frontMatter:()=>i,metadata:()=>s,toc:()=>d});var n=r(7462),a=(r(7294),r(3905));const i={sidebar_position:4},l="Tables",s={unversionedId:"architecture/tables",id:"architecture/tables",title:"Tables",description:"The multinode system utilizes a series of tables within its database to store and manage data efficiently. Here's an overview of the tables and their purposes:",source:"@site/docs/architecture/tables.md",sourceDirName:"architecture",slug:"/architecture/tables",permalink:"/gateway-docs/architecture/tables",draft:!1,tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"Microservices",permalink:"/gateway-docs/architecture/microservices"},next:{title:"For Developers",permalink:"/gateway-docs/for-developers"}},o={},d=[{value:"Requests Table",id:"requests-table",level:2},{value:"Nodes Table",id:"nodes-table",level:2},{value:"Results Table",id:"results-table",level:2}],u={toc:d},p="wrapper";function c(e){let{components:t,...r}=e;return(0,a.kt)(p,(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"tables"},"Tables"),(0,a.kt)("h1",{id:"database-tables-overview"},"Database Tables Overview"),(0,a.kt)("p",null,"The multinode system utilizes a series of tables within its database to store and manage data efficiently. Here's an overview of the tables and their purposes:"),(0,a.kt)("h2",{id:"requests-table"},"Requests Table"),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"requests")," table is designed to store incoming user requests for processing by the system.\nEach record in the table corresponds to a single user request and includes the following fields:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"id"),": An auto-incrementing integer that serves as the primary key."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"uri"),": A text field that stores the URI of the request, indicating where the request originates or where the required script is located."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"params"),": A text field containing the parameters of the request in a JSON string format."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"timestamp"),": A bigint field that records the time at which the request was made."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"deadline"),": A bigint field indicating the deadline by which the request needs to be processed."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"seed"),": A VARCHAR(64) field storing a seed value associated with the request for ensuring randomness in operations."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"tx"),": A text field that stores transaction hash. It can be filled at a later stage.")),(0,a.kt)("h2",{id:"nodes-table"},"Nodes Table"),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"nodes")," table holds information about the individual nodes that process the requests.\nEach node is represented by a record with the following fields:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"id"),": An auto-incrementing integer that acts as the primary key."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"public_key"),": A text field that stores the public key of the node, which is essential for identifying the node and for cryptographic operations related to the node's activities.")),(0,a.kt)("h2",{id:"results-table"},"Results Table"),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"results")," table captures the outcomes of processed requests\nThe structure of the table is as follows:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"id"),": An auto-incrementing integer that serves as the primary key for the results table."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"request_id"),": An integer that references the ",(0,a.kt)("inlineCode",{parentName:"li"},"id")," from the ",(0,a.kt)("inlineCode",{parentName:"li"},"requests")," table, establishing a relationship to the original user request."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"node_id"),": An integer that references the ",(0,a.kt)("inlineCode",{parentName:"li"},"id")," from the ",(0,a.kt)("inlineCode",{parentName:"li"},"nodes")," table, linking the result to the node that processed the request."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"timestamp"),": A bigint field that records the time at which the result was produced."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"hash"),": A text field that stores the data \u2014 about the user request concatenated with ",(0,a.kt)("inlineCode",{parentName:"li"},"seed")," and ",(0,a.kt)("inlineCode",{parentName:"li"},"round")," information."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"proof"),": A text field that holds a cryptographic proof, ensuring that the result was produced by the actual node and has not been tampered with."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"result"),": A text field containing the actual result of the request in a JSON string format."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"sig"),": A text field that contains the digital signature, further attributing the result to the node and ensuring integrity.")))}c.isMDXComponent=!0}}]);