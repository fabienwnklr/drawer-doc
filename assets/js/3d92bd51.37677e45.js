"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[3974],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>k});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var d=a.createContext({}),p=function(e){var t=a.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=p(e.components);return a.createElement(d.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,d=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),c=p(n),u=r,k=c["".concat(d,".").concat(u)]||c[u]||m[u]||l;return n?a.createElement(k,o(o({ref:t},s),{},{components:n})):a.createElement(k,o({ref:t},s))}));function k(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,o=new Array(l);o[0]=u;var i={};for(var d in t)hasOwnProperty.call(t,d)&&(i[d]=t[d]);i.originalType=e,i[c]="string"==typeof e?e:r,o[1]=i;for(var p=2;p<l;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},6209:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>o,default:()=>m,frontMatter:()=>l,metadata:()=>i,toc:()=>p});var a=n(7462),r=(n(7294),n(3905));const l={},o="Events",i={unversionedId:"events",id:"version-1.3.1/events",title:"Events",description:"In the usage documentation, a few callbacks are listed that allow you to listen to specific events. Callbacks aren't always ideal, though, specifically when you wish to have multiple handlers.",source:"@site/versioned_docs/version-1.3.1/events.md",sourceDirName:".",slug:"/events",permalink:"/docs/events",draft:!1,editUrl:"https://github.com/fabienwnklr/drawer-doc/versioned_docs/version-1.3.1/events.md",tags:[],version:"1.3.1",frontMatter:{},sidebar:"getStartedSidebar",previous:{title:"Constants",permalink:"/docs/constants"},next:{title:"Contributing to Drawer",permalink:"/docs/contribute"}},d={},p=[],s={toc:p},c="wrapper";function m(e){let{components:t,...n}=e;return(0,r.kt)(c,(0,a.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"events"},"Events"),(0,r.kt)("p",null,"In the usage documentation, a few callbacks are listed that allow you to listen to specific events. Callbacks aren't always ideal, though, specifically when you wish to have multiple handlers."),(0,r.kt)("admonition",{type:"warning"},(0,r.kt)("p",{parentName:"admonition"},"Be carefull, onlyy ",(0,r.kt)("inlineCode",{parentName:"p"},"drawer.init")," event is dispatched to source element, anyone else are dispatched to ",(0,r.kt)("inlineCode",{parentName:"p"},"<canvas>")," element")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Exemple of init event :")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"const $element = document.getElementById('canvas-container');\n\n$element.addEventListener('drawer.init', (event) => {\n  console.log(event.detail.drawer);\n  //....\n});\n\nconst drawer = new Drawer(/*...options*/);\n\n// console.log appear after init\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Basic event :")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"const $element = document.getElementById('canvas-container');\n\nconst drawer = new Drawer(/*...options*/);\ndrawer.$canvas.addEventListener('drawer.change', (event) => {\n  console.log(event.detail.drawer);\n  //....\n});\n\n// console.log appear after any change in drawer\n")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Event"),(0,r.kt)("th",{parentName:"tr",align:null},"Event.detail"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"drawer.init"),(0,r.kt)("td",{parentName:"tr",align:null},"drawer"),(0,r.kt)("td",{parentName:"tr",align:null},"Invoked when drawer initied")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"drawer.change"),(0,r.kt)("td",{parentName:"tr",align:null},"drawer"),(0,r.kt)("td",{parentName:"tr",align:null},"Invoked when canvas content change")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"drawer.update.size"),(0,r.kt)("td",{parentName:"tr",align:null},"{ setSize: { w: number, h: number } }"),(0,r.kt)("td",{parentName:"tr",align:null},"Invoked when ",(0,r.kt)("inlineCode",{parentName:"td"},"setSize")," api method called")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"drawer.update.canvasSize"),(0,r.kt)("td",{parentName:"tr",align:null},"{ setSize: { w: number, h: number } }"),(0,r.kt)("td",{parentName:"tr",align:null},"Invoked when ",(0,r.kt)("inlineCode",{parentName:"td"},"setCanvasSize")," api method called")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"drawer.update.color"),(0,r.kt)("td",{parentName:"tr",align:null},"{ color: string }"),(0,r.kt)("td",{parentName:"tr",align:null},"Invoked when ",(0,r.kt)("inlineCode",{parentName:"td"},"setColor")," api method called (or changed color via input)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"drawer.update.bgColor"),(0,r.kt)("td",{parentName:"tr",align:null},"{ bgColor: string }"),(0,r.kt)("td",{parentName:"tr",align:null},"Invoked when ",(0,r.kt)("inlineCode",{parentName:"td"},"setBgColor")," api method called")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"drawer.update.tool"),(0,r.kt)("td",{parentName:"tr",align:null},"{ toolName: string }"),(0,r.kt)("td",{parentName:"tr",align:null},"Invoked when ",(0,r.kt)("inlineCode",{parentName:"td"},"setTool")," api method called (or changed via toolbar)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"drawer.update.shape"),(0,r.kt)("td",{parentName:"tr",align:null},"{ shape: keyof typeof DrawTools }"),(0,r.kt)("td",{parentName:"tr",align:null},"Invoked when ",(0,r.kt)("inlineCode",{parentName:"td"},"setShape")," api method called (or changed via toolbar)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"drawer.update.dotted"),(0,r.kt)("td",{parentName:"tr",align:null},"{ dooted: boolean, dash: number[] }"),(0,r.kt)("td",{parentName:"tr",align:null},"Invoked when ",(0,r.kt)("inlineCode",{parentName:"td"},"setDottedLine")," api method called")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"drawer.update.lineThickness"),(0,r.kt)("td",{parentName:"tr",align:null},"{ lineThickness: number }"),(0,r.kt)("td",{parentName:"tr",align:null},"Invoked when ",(0,r.kt)("inlineCode",{parentName:"td"},"setLineWidth")," api method called (or changed via input)")))))}m.isMDXComponent=!0}}]);