"use strict";(self.webpackChunkcaesar_website=self.webpackChunkcaesar_website||[]).push([[9486],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>f});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),l=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=l(e.components);return n.createElement(c.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),m=l(r),d=a,f=m["".concat(c,".").concat(d)]||m[d]||u[d]||o;return r?n.createElement(f,i(i({ref:t},p),{},{components:r})):n.createElement(f,i({ref:t},p))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=d;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[m]="string"==typeof e?e:a,i[1]=s;for(var l=2;l<o;l++)i[l]=r[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},2991:(e,t,r)=>{r.d(t,{Z:()=>y});var n=r(7294),a=r(6010),o=r(3438),i=r(9960),s=r(3919),c=r(5999);const l={cardContainer:"cardContainer_fWXF",cardTitle:"cardTitle_rnsV",cardDescription:"cardDescription_PWke"};function p(e){let{href:t,children:r}=e;return n.createElement(i.Z,{href:t,className:(0,a.Z)("card padding--lg",l.cardContainer)},r)}function m(e){let{href:t,icon:r,title:o,description:i}=e;return n.createElement(p,{href:t},n.createElement("h2",{className:(0,a.Z)("text--truncate",l.cardTitle),title:o},r," ",o),i&&n.createElement("p",{className:(0,a.Z)("text--truncate",l.cardDescription),title:i},i))}function u(e){let{item:t}=e;const r=(0,o.Wl)(t);return r?n.createElement(m,{href:r,icon:"\ud83d\uddc3\ufe0f",title:t.label,description:t.description??(0,c.I)({message:"{count} items",id:"theme.docs.DocCard.categoryDescription",description:"The default description for a category card in the generated index about how many items this category includes"},{count:t.items.length})}):null}function d(e){let{item:t}=e;const r=(0,s.Z)(t.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",a=(0,o.xz)(t.docId??void 0);return n.createElement(m,{href:t.href,icon:r,title:t.label,description:t.description??a?.description})}function f(e){let{item:t}=e;switch(t.type){case"link":return n.createElement(d,{item:t});case"category":return n.createElement(u,{item:t});default:throw new Error(`unknown item type ${JSON.stringify(t)}`)}}function h(e){let{className:t}=e;const r=(0,o.jA)();return n.createElement(y,{items:r.items,className:t})}function y(e){const{items:t,className:r}=e;if(!t)return n.createElement(h,e);const i=(0,o.MN)(t);return n.createElement("section",{className:(0,a.Z)("row",r)},i.map(((e,t)=>n.createElement("article",{key:t,className:"col col--6 margin-bottom--lg"},n.createElement(f,{item:e})))))}},6572:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>d,frontMatter:()=>i,metadata:()=>c,toc:()=>p});var n=r(7462),a=(r(7294),r(3905)),o=r(2991);const i={sidebar_position:3},s="HeyVL",c={unversionedId:"heyvl/README",id:"heyvl/README",title:"HeyVL",description:"HeyVL is a verification language similar to Viper and Boogie.",source:"@site/docs/heyvl/README.md",sourceDirName:"heyvl",slug:"/heyvl/",permalink:"/docs/heyvl/",draft:!1,editUrl:"https://github.com/moves-rwth/caesar/tree/main/website/docs/heyvl/README.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"docsSidebar",previous:{title:"A Zoo of HeyVL Examples",permalink:"/docs/getting-started/zoo-of-heyvl-examples"},next:{title:"Procedures",permalink:"/docs/heyvl/procs"}},l={},p=[{value:"Use the source, Luke",id:"use-the-source-luke",level:2},{value:"Examples",id:"examples",level:2}],m={toc:p},u="wrapper";function d(e){let{components:t,...r}=e;return(0,a.kt)(u,(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"heyvl"},"HeyVL"),(0,a.kt)("p",null,"HeyVL is a verification language similar to Viper and Boogie.\nThe main innovation is that it supports ",(0,a.kt)("em",{parentName:"p"},"quantitative")," reasoning via its constructs inspired by G\xf6del logic.\nRefer to our ",(0,a.kt)("a",{parentName:"p",href:"/docs/publications"},"publications")," for details on the theory."),(0,a.kt)("p",null,"A HeyVL file consists of a sequence of declarations: ",(0,a.kt)("a",{parentName:"p",href:"/docs/heyvl/procs"},"procedure")," and ",(0,a.kt)("a",{parentName:"p",href:"/docs/heyvl/domains"},"domain declarations"),"."),(0,a.kt)(o.Z,{mdxType:"DocCardList"}),(0,a.kt)("h2",{id:"use-the-source-luke"},"Use the source, Luke"),(0,a.kt)("p",null,"We do not formally describe the syntax of HeyVL in this documentation.\nYou can find a more formal definition in the ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/moves-rwth/caesar/blob/main/src/front/parser/grammar.lalrpop"},(0,a.kt)("inlineCode",{parentName:"a"},"src/front/parser/grammar.lalrpop"))," file that specifies the syntax used to generate Caesar's parser.\nIt is written in the ",(0,a.kt)("a",{parentName:"p",href:"https://lalrpop.github.io/lalrpop/tutorial/index.html"},"LALRPOP language"),"."),(0,a.kt)("h2",{id:"examples"},"Examples"),(0,a.kt)("p",null,"The ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/moves-rwth/caesar/tree/main/pgcl/examples-heyvl"},(0,a.kt)("inlineCode",{parentName:"a"},"pgcl/examples-heyvl"))," directory contains the machine-translated HeyVL code for our pGCL examples.\nNote that they are just sequences of HeyVL statements without wrapping procedure declarations.\nRefer to the page on the ",(0,a.kt)("a",{parentName:"p",href:"/docs/pgcl"},"pGCL frontend")," for more information."),(0,a.kt)("p",null,"Caesar's integration tests in ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/moves-rwth/caesar/tree/main/tests"},(0,a.kt)("inlineCode",{parentName:"a"},"tests/"))," can also serve as a reference.\nRefer to the ",(0,a.kt)("a",{parentName:"p",href:"/docs/devguide#caesar"},"development guide")," for more information about these tests."))}d.isMDXComponent=!0}}]);