"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[849],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=a.createContext({}),l=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=l(e.components);return a.createElement(c.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=l(n),h=r,m=p["".concat(c,".").concat(h)]||p[h]||d[h]||i;return n?a.createElement(m,o(o({ref:t},u),{},{components:n})):a.createElement(m,o({ref:t},u))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=h;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[p]="string"==typeof e?e:r,o[1]=s;for(var l=2;l<i;l++)o[l]=n[l];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},2166:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>s,toc:()=>l});var a=n(7462),r=(n(7294),n(3905));const i={sidebar_position:2},o="Multi Node",s={unversionedId:"architecture/multinode",id:"architecture/multinode",title:"Multi Node",description:"Overview",source:"@site/docs/architecture/multinode.md",sourceDirName:"architecture",slug:"/architecture/multinode",permalink:"/gateway-docs/architecture/multinode",draft:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Single Node (Deprecated)",permalink:"/gateway-docs/architecture/singlenode"},next:{title:"Microservices",permalink:"/gateway-docs/architecture/microservices"}},c={},l=[{value:"Overview",id:"overview",level:2},{value:"Archway Smart Contract",id:"archway-smart-contract",level:2},{value:"Gateway Backend",id:"gateway-backend",level:2},{value:"Global",id:"global",level:3},{value:"Relay",id:"relay",level:3},{value:"Node",id:"node",level:3}],u={toc:l},p="wrapper";function d(e){let{components:t,...i}=e;return(0,r.kt)(p,(0,a.Z)({},u,i,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"multi-node"},"Multi Node"),(0,r.kt)("h2",{id:"overview"},"Overview"),(0,r.kt)("p",null,"Our Gateway system now boasts enhanced robustness and decentralization, thanks to the multi-node architecture.\nThis evolution not only improves system resilience but also optimizes performance."),(0,r.kt)("p",null,"This revised architecture seamlessly integrates the Gateway Bot within the Backend, allowing nodes to focus exclusively on backend tasks, thus streamlining operations."),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/D3LAB-DAO/gateway-contract"},"Archway Smart Contract")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/D3LAB-DAO/gateway-backend"},"Gateway Backend"))),(0,r.kt)("h2",{id:"archway-smart-contract"},"Archway Smart Contract"),(0,r.kt)("p",null,"The Archway Smart Contract is responsible for managing web2 actions, project registration, and execution result storage.\nIt interacts with the Archway blockchain and processes transactions related to the Gateway."),(0,r.kt)("h2",{id:"gateway-backend"},"Gateway Backend"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"multinode",src:n(4316).Z,width:"2562",height:"1728"})),(0,r.kt)("p",null,"The Gateway Backend is a cluster of Node.js-based microservices, each providing an API endpoint to handle requests and execute specific services."),(0,r.kt)("p",null,"Users interact with the system through the ",(0,r.kt)("inlineCode",{parentName:"p"},"Relay")," service, which acts as a reverse proxy."),(0,r.kt)("h3",{id:"global"},"Global"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"Global")," component acts as the centralized configuration manager, ensuring synchronization and harmony throughout the architecture. It consists of:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Settings"),": This service oversees the system configuration, maintaining consistency and standardization in operations.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Counter"),": This vital microservice tracks temporal aspects like rounds and epochs, alongside random seed data to keep operations synchronized. It's essential for coordinating tasks that are time-sensitive and for preserving a uniform state throughout the system's lifecycle. Future plans include migrating this service to a decentralized smart contract to further bolster the system's integrity and stability.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"IPFS and GitHub"),": These platforms are used for open-source code storage with version control. A private code storage solution is in the pipeline to offer enhanced privacy for users."))),(0,r.kt)("h3",{id:"relay"},"Relay"),(0,r.kt)("p",null,"The Relay serves as the pivotal communication hub of the architecture, orchestrating the interaction between user requests and the system's processing nodes."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Receive"),": This microservice is the initial point of contact for user requests. It is tasked with receiving, validating, and queiring incoming data for processing.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Send"),": Once a request has been processed, this microservice is responsible for dispatching transactions for execution. This script manages a queue of results that have achieved consensus and prepares them for publication.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Verifiable Random Function (VRF)"),": A ",(0,r.kt)("inlineCode",{parentName:"p"},"VRF")," is employed within ",(0,r.kt)("inlineCode",{parentName:"p"},"send")," to ensure the integrity and randomness of operations. It is used to verify the sortition of nodes. The use of VRF, along with the quorum and consensus mechanisms, contributes significantly to the Relay's ability to balance load across the system and enhance security. These features ensure that no single node or small group of nodes can dominate or disrupt the process, promoting a fair and decentralized environment.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Database (DB)"),": The ",(0,r.kt)("inlineCode",{parentName:"p"},"DB")," is essential for systematically storing and managing requests. It houses key tables: requests, nodes, and results. Further information on the database structure is detailed in the ",(0,r.kt)("a",{parentName:"p",href:"./tables"},"tables section"),"."))),(0,r.kt)("h3",{id:"node"},"Node"),(0,r.kt)("p",null,"Nodes within this architecture are individual units responsible for executing user-requested services. Each node is fortified with a Virtual Machine (",(0,r.kt)("inlineCode",{parentName:"p"},"VM"),") and ",(0,r.kt)("inlineCode",{parentName:"p"},"VRF")," to perform and secure operations."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"VM (V8)"),": Nodes are powered by Google's V8 engine, a high-performance VM designed to run JavaScript with efficiency. In this Gateway Backend, each Node operates as a dedicated microservice environment, executing code snippets as requested.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Verifiable Random Function (VRF)"),": It is integral to the system's sharding mechanism, which distributes the execution of code across different Nodes. The use of VRF guarantees that each execution shard is assigned in a manner that is both random and secure, ensuring no single point of failure and upholding the decentralized ethos of the network."))))}d.isMDXComponent=!0},4316:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/multinode-dd9a90646d03c6f151e988af8c10e7f4.png"}}]);