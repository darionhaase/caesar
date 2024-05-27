"use strict";(self.webpackChunkcaesar_website=self.webpackChunkcaesar_website||[]).push([[9081],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>u});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=n.createContext({}),c=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},p=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},m="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),m=c(a),h=r,u=m["".concat(l,".").concat(h)]||m[h]||d[h]||i;return a?n.createElement(u,o(o({ref:t},p),{},{components:a})):n.createElement(u,o({ref:t},p))}));function u(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,o=new Array(i);o[0]=h;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[m]="string"==typeof e?e:r,o[1]=s;for(var c=2;c<i;c++)o[c]=a[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}h.displayName="MDXCreateElement"},2981:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>h,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var n=a(7462),r=(a(7294),a(3905)),i=a(9960);const o={authors:"phisch",tags:["releases"]},s="Caesar 2.0: VSCode Extension, Slicing, and more!",l={permalink:"/blog/2024/05/20/caesar-2-0",editUrl:"https://github.com/moves-rwth/caesar/tree/main/website/blog/2024-05-20-caesar-2-0.md",source:"@site/blog/2024-05-20-caesar-2-0.md",title:"Caesar 2.0: VSCode Extension, Slicing, and more!",description:"We are happy to announce Caesar 2.0: the next release of Caesar packed with a lot of new features.",date:"2024-05-20T00:00:00.000Z",formattedDate:"May 20, 2024",tags:[{label:"releases",permalink:"/blog/tags/releases"}],readingTime:4.34,hasTruncateMarker:!1,authors:[{name:"Philipp Schroer",title:"Caesar Developer",url:"https://moves.rwth-aachen.de/people/philipp-schroer/",imageURL:"https://github.com/Philipp15b.png",key:"phisch"}],frontMatter:{authors:"phisch",tags:["releases"]},nextItem:{title:"ERC Proof of Concept Grant",permalink:"/blog/2024/01/18/erc-poc-grant"}},c={authorsImageUrls:[void 0]},p=[{value:"<em>Caesar Verifier</em> Visual Studio Code Extension",id:"caesar20-vscode-extension",level:2},{value:"Slicing for Error Reporting and Correctness",id:"caesar20-slicing",level:2},{value:"Assertion Slicing",id:"assertion-slicing",level:3},{value:"Assumption Slicing",id:"assumption-slicing",level:3},{value:"General Slicing",id:"general-slicing",level:3},{value:"Calculus Annotations for Proof Rules",id:"caesar20-calculi",level:2},{value:"Model Checking Support via JANI",id:"caesar20-jani",level:2}],m={toc:p},d="wrapper";function h(e){let{components:t,...a}=e;return(0,r.kt)(d,(0,n.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"We are happy to announce ",(0,r.kt)("em",{parentName:"p"},"Caesar 2.0"),": the next release of Caesar packed with a lot of new features."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Overview:")),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("a",{parentName:"li",href:"#caesar20-vscode-extension"},(0,r.kt)("em",{parentName:"a"},"Caesar Verifier")," Visual Studio Code Extension")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("a",{parentName:"li",href:"#caesar20-slicing"},"Slicing for Error Reporting and Correctness")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("a",{parentName:"li",href:"#caesar20-calculi"},"Calculus Annotations for Proof Rules")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("a",{parentName:"li",href:"#caesar20-jani"},"Model Checking Support via JANI"))),(0,r.kt)("h2",{id:"caesar20-vscode-extension"},(0,r.kt)("em",{parentName:"h2"},"Caesar Verifier")," Visual Studio Code Extension"),(0,r.kt)(i.Z,{to:"https://marketplace.visualstudio.com/items?itemName=rwth-moves.caesar",mdxType:"Link"},(0,r.kt)("img",{src:"/img/vc-demo.png",style:{float:"right",maxWidth:"350px","margin-left":"1em"},className:"item shadow--tl"})),(0,r.kt)("p",null,"Our new ",(0,r.kt)("em",{parentName:"p"},"Caesar Verifier")," VSCode extension is now the recommended way to use Caesar.\nThe extension is available in the VSCode and VSCodium extension marketplaces and can be installed by searching for ",(0,r.kt)("em",{parentName:"p"},"Caesar Verifier"),"."),(0,r.kt)("p",null,"The extension is built on the ",(0,r.kt)("a",{parentName:"p",href:"https://microsoft.github.io/language-server-protocol/"},"Language Server Protocol")," and uses the Caesar binary under the hood."),(0,r.kt)(i.Z,{class:"button button--primary",to:"https://marketplace.visualstudio.com/items?itemName=rwth-moves.caesar",mdxType:"Link"},"Go to Caesar Verifier on VSCode Marketplace"),(0,r.kt)("br",null),(0,r.kt)("br",null),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Features:")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Syntax highlighting and language configuration for HeyVL."),(0,r.kt)("li",{parentName:"ul"},"Snippets for HeyVL."),(0,r.kt)("li",{parentName:"ul"},"Verify HeyVL files on file save or on command."),(0,r.kt)("li",{parentName:"ul"},"Verification errors and successes are shown in the gutter via icons."),(0,r.kt)("li",{parentName:"ul"},'Diagnostics such as errors or warnings are shown in the code and in the "Problems" menu in VSCode ',"\u2014"," ",(0,r.kt)("a",{parentName:"li",href:"#caesar20-slicing"},"powered by slicing!")),(0,r.kt)("li",{parentName:"ul"},"Inline explanations of computed verification conditions (shown in picture!)."),(0,r.kt)("li",{parentName:"ul"},"Automatic installation and updating of Caesar.")),(0,r.kt)("div",{style:{clear:"both"}}),(0,r.kt)("h2",{id:"caesar20-slicing"},"Slicing for Error Reporting and Correctness"),(0,r.kt)("h3",{id:"assertion-slicing"},"Assertion Slicing"),(0,r.kt)(i.Z,{to:"/img/slicing-demo.png",mdxType:"Link"},(0,r.kt)("img",{src:"/img/slicing-demo.png",style:{float:"right",maxWidth:"350px","margin-left":"1em"},className:"item shadow--tl"})),(0,r.kt)("p",null,"The error reports in Caesar are driven by the first implementation of specification-based slicing for probabilistic programs.\nBy default, our slicing implementation is used to identify which ",(0,r.kt)("inlineCode",{parentName:"p"},"assert"),"-like statements are responsible for errors (",(0,r.kt)("a",{parentName:"p",href:"/docs/caesar/slicing#assertion-slicing"},"Caesar's ",(0,r.kt)("em",{parentName:"a"},"assertion slicing")),")."),(0,r.kt)("p",null,"An example is shown on the right.\nThe slicing algorithm has determined that the invariant might not be inductive and could rule out e.g. that the pre does not entail the invariant."),(0,r.kt)("p",null,"Caesar's slicing does not operate on high-level programs with loops, but instead on the low-level HeyVL statements, including verification statements.\nThis enables error reporting (and other slicing applications) for any verification problems that you can encode in HeyVL.\nCustom error messages can be added via ",(0,r.kt)("a",{parentName:"p",href:"/docs/caesar/slicing#slicing-message-annotations"},"slice message annotations"),"."),(0,r.kt)("div",{style:{clear:"both"}}),(0,r.kt)("h3",{id:"assumption-slicing"},"Assumption Slicing"),(0,r.kt)(i.Z,{to:"/img/assumption-slicing-demo.png",mdxType:"Link"},(0,r.kt)("img",{src:"/img/assumption-slicing-demo.png",style:{float:"right",maxWidth:"330px","margin-left":"1em"},className:"item shadow--tl"})),(0,r.kt)("p",null,"Whereas assertion slicing is concerned with finding a minimal set of assertions in the program so that the program still has an error, ",(0,r.kt)("a",{parentName:"p",href:"/docs/caesar/slicing#assumption-slicing"},(0,r.kt)("em",{parentName:"a"},"assumption slicing"))," tries to find a minimal set of assumptions so that the program still verifies."),(0,r.kt)("p",null,"In the example on the right, we can see a slightly modified version of the geometric loop example from above.\nNow it has a constant starting value of zero.\nWith the correct invariant, the program verifies.\nBut Caesar can also tell us that this ",(0,r.kt)("inlineCode",{parentName:"p"},"while")," loop could also be an ",(0,r.kt)("inlineCode",{parentName:"p"},"if")," statement ","\u2014"," no loop is required to satisfy the specification.\nThe interpretation of this result is up to the user.\nMaybe the program can be simplified, but maybe the specification is not as strong as one thought and needs to be strengthened!"),(0,r.kt)("div",{style:{clear:"both"}}),(0,r.kt)("h3",{id:"general-slicing"},"General Slicing"),(0,r.kt)(i.Z,{to:"/img/general-slicing-demo.png",mdxType:"Link"},(0,r.kt)("img",{src:"/img/general-slicing-demo.png",style:{float:"right",maxWidth:"400px","margin-left":"1em"},className:"item shadow--tl"})),(0,r.kt)("p",null,"Caesar's implementation of slicing is not restricted to verification statements such as assertions and assumptions.\nWith program annotations, Caesar can be instructed to run slicing for correctness and try to eliminate unnecessary assignments from the program."),(0,r.kt)("p",null,"In the example on the right, we have a probabilistic program that encodes a Bayesian network.",(0,r.kt)("sup",{parentName:"p",id:"fnref-1-bf9971"},(0,r.kt)("a",{parentName:"sup",href:"#fn-1-bf9971",className:"footnote-ref"},"1")),"\nWe have added the ",(0,r.kt)("a",{parentName:"p",href:"/docs/caesar/slicing#general-slicing-for-correctness"},(0,r.kt)("inlineCode",{parentName:"a"},"@slice_verify")," annotation")," to have Caesar also try to slice assignments.\nCaesar determined that most assignments are not necessary to satisfy the specification."),(0,r.kt)("p",null,"There is also a corresponding ",(0,r.kt)("a",{parentName:"p",href:"/docs/caesar/slicing#general-slicing-for-errors"},(0,r.kt)("inlineCode",{parentName:"a"},"@slice_error")," annotation")," to do slicing for errors on statements that are not ",(0,r.kt)("inlineCode",{parentName:"p"},"assert"),"-like."),(0,r.kt)("div",{style:{clear:"both"}}),(0,r.kt)("h2",{id:"caesar20-calculi"},"Calculus Annotations for Proof Rules"),(0,r.kt)(i.Z,{to:"/img/calculi-demo.png",mdxType:"Link"},(0,r.kt)("img",{src:"/img/calculi-demo.png",style:{float:"right",maxWidth:"400px","margin-left":"1em"},className:"item shadow--tl"})),(0,r.kt)("p",null,"Caesar's HeyVL was designed as a ",(0,r.kt)("a",{parentName:"p",href:"/docs/publications#oopsla-23"},"quantitative intermediate verification language"),", therefore it allows encoding all sorts of potentially unsound proof rules.\nTo make it easier to use Caesar to verify high-level programs with loops with respect to well-known expectation-based calculi and proof rules, we have added ",(0,r.kt)("a",{parentName:"p",href:"/docs/proof-rules/calculi"},"calculus annotations")," to Caesar.\nThey are ",(0,r.kt)("inlineCode",{parentName:"p"},"@wp"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"@wlp")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"@ert"),".\nWhen they are added to a ",(0,r.kt)("inlineCode",{parentName:"p"},"proc"),"/",(0,r.kt)("inlineCode",{parentName:"p"},"coproc"),", Caesar will do some additional checks to ensure that proof rules are actually sound."),(0,r.kt)("div",{style:{clear:"both"}}),(0,r.kt)("h2",{id:"caesar20-jani"},"Model Checking Support via JANI"),(0,r.kt)("p",null,"While deductive verification can deal with infinite state spaces, infinite data types, and is generally pretty awesome, sometimes you want to analyze a proabilistic program whose state space can be finitely represented.\nWith ",(0,r.kt)("a",{parentName:"p",href:"/docs/model-checking"},"Caesar's model checking support via JANI"),", you can export your probabilistic program to the ",(0,r.kt)("a",{parentName:"p",href:"https://jani-spec.org/"},"JANI format")," to use probabilistic model checkers."),(0,r.kt)("p",null,"Caesar's support is limited to ",(0,r.kt)("a",{parentName:"p",href:"/docs/model-checking#supported-programs"},"executable probabilistic programs"),".\nThat means that quantitative verification statements like ",(0,r.kt)("inlineCode",{parentName:"p"},"assert"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"assume"),", and ",(0,r.kt)("inlineCode",{parentName:"p"},"havoc")," are restricted or not supported."),(0,r.kt)("p",null,"Caesar's JANI export was designed as a replacement for ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/moves-rwth/storm/pull/456"},"the recently deleted storm-pgcl"),", and can now be used as a pGCL frontend for model checkers that accept JANI inputs."),(0,r.kt)("div",{className:"footnotes"},(0,r.kt)("hr",{parentName:"div"}),(0,r.kt)("ol",{parentName:"div"},(0,r.kt)("li",{parentName:"ol",id:"fn-1-bf9971"},"The program is Figure 7 of ",(0,r.kt)("a",{parentName:"li",href:"https://doi.org/10.1016/j.scico.2022.102822"},"Marcelo Navarro, Federico Olmedo: Slicing of Probabilistic Programs Based on Specifications. ECOOP 2022"),".",(0,r.kt)("a",{parentName:"li",href:"#fnref-1-bf9971",className:"footnote-backref"},"\u21a9")))))}h.isMDXComponent=!0}}]);