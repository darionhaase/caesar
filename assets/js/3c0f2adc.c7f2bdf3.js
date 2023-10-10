"use strict";(self.webpackChunkcaesar_website=self.webpackChunkcaesar_website||[]).push([[5003],{3905:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>f});var o=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function p(e,n){if(null==e)return{};var t,o,r=function(e,n){if(null==e)return{};var t,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)t=i[o],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)t=i[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var l=o.createContext({}),s=function(e){var n=o.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},c=function(e){var n=s(e.components);return o.createElement(l.Provider,{value:n},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},m=o.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),u=s(t),m=r,f=u["".concat(l,".").concat(m)]||u[m]||d[m]||i;return t?o.createElement(f,a(a({ref:n},c),{},{components:t})):o.createElement(f,a({ref:n},c))}));function f(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,a=new Array(i);a[0]=m;var p={};for(var l in n)hasOwnProperty.call(n,l)&&(p[l]=n[l]);p.originalType=e,p[u]="string"==typeof e?e:r,a[1]=p;for(var s=2;s<i;s++)a[s]=t[s];return o.createElement.apply(null,a)}return o.createElement.apply(null,t)}m.displayName="MDXCreateElement"},400:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>a,default:()=>d,frontMatter:()=>i,metadata:()=>p,toc:()=>s});var o=t(7462),r=(t(7294),t(3905));const i={description:"Induction and k-Induction are proof rules for while loops.",sidebar_position:1},a="Induction and k-Induction",p={unversionedId:"proof-rules/induction",id:"proof-rules/induction",title:"Induction and k-Induction",description:"Induction and k-Induction are proof rules for while loops.",source:"@site/docs/proof-rules/induction.md",sourceDirName:"proof-rules",slug:"/proof-rules/induction",permalink:"/docs/proof-rules/induction",draft:!1,editUrl:"https://github.com/moves-rwth/caesar/tree/main/website/docs/proof-rules/induction.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{description:"Induction and k-Induction are proof rules for while loops.",sidebar_position:1},sidebar:"docsSidebar",previous:{title:"Proof Rules",permalink:"/docs/proof-rules/"},next:{title:"Loop Unrolling",permalink:"/docs/proof-rules/unrolling"}},l={},s=[{value:"Usage",id:"usage",level:2},{value:"Soundness",id:"soundness",level:2}],c={toc:s},u="wrapper";function d(e){let{components:n,...t}=e;return(0,r.kt)(u,(0,o.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"induction-and-k-induction"},"Induction and k-Induction"),(0,r.kt)("p",null,"TLDR: Probabilistic induction generalizes the well-known ",(0,r.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Hoare_logic#While_rule"},"proof rule for loops from Hoare logic"),"."),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"Induction")," and the more general ",(0,r.kt)("em",{parentName:"p"},"k-Induction")," are built-in proof rules to reason about ",(0,r.kt)("inlineCode",{parentName:"p"},"while")," loops.\nThe non-probabilistic intuitions go as follows: induction requires an ",(0,r.kt)("em",{parentName:"p"},"invariant")," that is maintained by each loop iteration.\nIt must hold before the loop, and then we are guaranteed that the invariant holds after the loop.\n",(0,r.kt)("em",{parentName:"p"},"k"),"-induction allows us to reason about multiple loop iterations: the invariant is not required to be re-established after just one loop iteration, but may be re-established after ",(0,r.kt)("inlineCode",{parentName:"p"},"1"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"2"),", ..., up to ",(0,r.kt)("inlineCode",{parentName:"p"},"k")," loop iterations."),(0,r.kt)("p",null,"HeyVL supports the lattice-theoretic generalizations of these rules.\nSee ",(0,r.kt)("a",{parentName:"p",href:"https://link.springer.com/chapter/10.1007/978-3-030-81688-9_25"},(0,r.kt)("em",{parentName:"a"},"Latticed k-Induction with an Application to Probabilistic Programs"))," (CAV 2021) for more information on the theory.\nCaesar will use the formulation from that paper only for upper-bounds reasoning (",(0,r.kt)("inlineCode",{parentName:"p"},"coproc"),"s) because it is associated with least fixed-point reasoning that the paper also deals with.\nFor lower-bounds reasoning (",(0,r.kt)("inlineCode",{parentName:"p"},"proc"),"s), Caesar will use a dual encoding that is sound with respect to greatest fixed-point semantics.\nFormal details are provided in Appendix C of the ",(0,r.kt)("a",{parentName:"p",href:"https://arxiv.org/abs/2309.07781"},"extended version of our OOPSLA '23 paper"),"."),(0,r.kt)("h2",{id:"usage"},"Usage"),(0,r.kt)("p",null,"To use ",(0,r.kt)("em",{parentName:"p"},"induction"),", simply add an ",(0,r.kt)("inlineCode",{parentName:"p"},"@invariant(I)")," annotation to your loop with a probabilistic invariant ",(0,r.kt)("inlineCode",{parentName:"p"},"I"),".\nIn this case, it is ",(0,r.kt)("inlineCode",{parentName:"p"},"ite(cont, c + 1, c)"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-heyvl"},"coproc geo1_induction(init_c: UInt) -> (c: UInt)\n    pre init_c + 1\n    post c\n{\n    c = init_c\n    var cont: Bool = true\n    @invariant(ite(cont, c + 1, c))\n    while (cont) {\n        var prob_choice: Bool = flip(0.5)\n        if prob_choice { cont = false } else { c = c + 1 }\n    }\n}\n")),(0,r.kt)("p",null,"To use ",(0,r.kt)("em",{parentName:"p"},"k-induction"),", you can use the ",(0,r.kt)("inlineCode",{parentName:"p"},"@k_induction(k, I)")," annotation on a loop.\nIt takes two parameters: The number literal ",(0,r.kt)("inlineCode",{parentName:"p"},"k")," specifies the number of unrollings are to be done and ",(0,r.kt)("inlineCode",{parentName:"p"},"I")," is the invariant."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-heyvl"},"coproc geo1_2induction(init_c: UInt) -> (c: UInt)\n    pre init_c + 1\n    post c\n{\n    c = init_c\n    var cont: Bool = true\n    @k_induction(2, c + 1)\n    while cont {\n        var prob_choice: Bool = flip(0.5)\n        if prob_choice { cont = false } else { c = c + 1 }\n    }\n}\n")),(0,r.kt)("p",null,"This program will not verify if ",(0,r.kt)("inlineCode",{parentName:"p"},"k")," is set to ",(0,r.kt)("inlineCode",{parentName:"p"},"1")," because the invariant ",(0,r.kt)("inlineCode",{parentName:"p"},"c + 1")," is not 1-inductive."),(0,r.kt)("h2",{id:"soundness"},"Soundness"),(0,r.kt)("p",null,"Using these proof rules is always ",(0,r.kt)("em",{parentName:"p"},"sound")," in the following way: Both annotations will always ",(0,r.kt)("em",{parentName:"p"},"under-approximate greatest fixed-point")," semantics when used in lower-bound contexts (",(0,r.kt)("inlineCode",{parentName:"p"},"proc"),") and ",(0,r.kt)("em",{parentName:"p"},"over-approximate  least fixed-point")," loop semantics when used in upper-bound contexts (",(0,r.kt)("inlineCode",{parentName:"p"},"coproc"),")."),(0,r.kt)("p",null,"If the invariants are not ",(0,r.kt)("em",{parentName:"p"},"inductive")," in some initial state, i.e. are not maintained by the loop iteration(s), then the encodings will evaluate to ",(0,r.kt)("inlineCode",{parentName:"p"},"0")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"\\infty")," (",(0,r.kt)("inlineCode",{parentName:"p"},"proc")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"coproc"),", respectively) for that initial state."),(0,r.kt)("p",null,"Again, formal details are provided in Appendix C of the ",(0,r.kt)("a",{parentName:"p",href:"https://arxiv.org/abs/2309.07781"},"extended version of our OOPSLA '23 paper"),"."))}d.isMDXComponent=!0}}]);