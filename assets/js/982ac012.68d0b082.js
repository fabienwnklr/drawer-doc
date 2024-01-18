"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[6983],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>m});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},d=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),p=c(n),f=a,m=p["".concat(s,".").concat(f)]||p[f]||u[f]||o;return n?r.createElement(m,l(l({ref:t},d),{},{components:n})):r.createElement(m,l({ref:t},d))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=f;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[p]="string"==typeof e?e:a,l[1]=i;for(var c=2;c<o;c++)l[c]=n[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},6038:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>u,frontMatter:()=>o,metadata:()=>i,toc:()=>c});var r=n(7462),a=(n(7294),n(3905));const o={},l=void 0,i={unversionedId:"api/README",id:"api/README",title:"README",description:"@fabwcie/drawer / Exports",source:"@site/docs/api/README.md",sourceDirName:"api",slug:"/api/",permalink:"/docs/next/api/",draft:!1,editUrl:"https://github.com/fabienwnklr/drawer-doc/docs/api/README.md",tags:[],version:"current",frontMatter:{}},s={},c=[{value:"Dependencies",id:"dependencies",level:2},{value:"Get started",id:"get-started",level:2},{value:"install",id:"install",level:3},{value:"usage",id:"usage",level:3},{value:"Using module",id:"using-module",level:4},{value:"Using iife",id:"using-iife",level:4},{value:"Get Drawer instance of canvas",id:"get-drawer-instance-of-canvas",level:3},{value:"Available options",id:"available-options",level:3}],d={toc:c},p="wrapper";function u(e){let{components:t,...n}=e;return(0,a.kt)(p,(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"@fabwcie/drawer / ",(0,a.kt)("a",{parentName:"p",href:"/docs/next/api/modules"},"Exports")),(0,a.kt)("h1",{id:"drawer"},"Drawer"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"[!TIP]","\n",(0,a.kt)("strong",{parentName:"p"},"Watch docs and demo ",(0,a.kt)("a",{parentName:"strong",href:"https://drawer.fabienwinkler.fr"},"here")))),(0,a.kt)("h2",{id:"dependencies"},"Dependencies"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/mdbassit/Coloris"},"Coloris")," for color input better managing")),(0,a.kt)("h2",{id:"get-started"},"Get started"),(0,a.kt)("h3",{id:"install"},"install"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"npm i @fabwcie/drawer\n")),(0,a.kt)("h3",{id:"usage"},"usage"),(0,a.kt)("h4",{id:"using-module"},"Using module"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'import { Drawer } from "@fabwcie/drawer";\n\nconst $el = document.getElementById("myElement");\nconst drawer = new Drawer($el, { /** optional options */});\n')),(0,a.kt)("h4",{id:"using-iife"},"Using iife"),(0,a.kt)("p",null,"first import file"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-html"},'<script src="path/to/drawer.iife.js"><\/script>\n')),(0,a.kt)("p",null,"then init drawer"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'const $el = document.getElementById("myElement");\nconst drawer = new Drawer($el, { /** optional options */});\n')),(0,a.kt)("h3",{id:"get-drawer-instance-of-canvas"},"Get Drawer instance of canvas"),(0,a.kt)("p",null,"Drawer instance stored into $canvas object directly, for example:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"const $canvas = document.getElementById('canvas');\nconst drawer = $canvas.drawer;\n\ndrawer.setTool('eraser');\n// ...\n")),(0,a.kt)("h3",{id:"available-options"},"Available options"),(0,a.kt)("p",null,"default options"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"{\n  id: Date.now().toString(), // id for drawer\n  defaultToolbar: true, // add default sidebar bouton\n  width: 400, // width\n  height: 400, // height\n  localStorageKey: 'draw', // local storage key for save\n  autoSave: true, // save on change in localStorage\n  toolbarPosition: 'outerTop', // can be 'outerTop', 'outerEnd', 'outerBottom', 'outerStart', 'innerTop', 'innerEnd', 'innerBottom', 'innerStart'\n  bgColor: '#fff', // can be format hex, rgba, rgba, hlsa\n  color: '#000', // can be format hex, rgba, rgba, hlsa\n  lineThickness: 3, // Line thickness\n  dotted: false, // active line dotted\n  dash: [10, 5], // if dotted true\n  cap: 'round', // \"butt\" | \"round\" | \"square\"\n  fill: true, // fill draw\n  availableColor: undefined, // for input color\n  availableColorOnly: false, // show color only into colorpicker popover\n  grid: false, // show css grid for draw helping\n  guides: false, // show guide when drawing\n  opacity: 1, // global opacity of draw\n  xor: false, // active xor\n};\n")))}u.isMDXComponent=!0}}]);