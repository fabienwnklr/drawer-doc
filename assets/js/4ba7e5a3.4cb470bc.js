"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[9735],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>h});var o=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=o.createContext({}),u=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=u(e.components);return o.createElement(s.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),c=u(n),m=r,h=c["".concat(s,".").concat(m)]||c[m]||d[m]||a;return n?o.createElement(h,i(i({ref:t},p),{},{components:n})):o.createElement(h,i({ref:t},p))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[c]="string"==typeof e?e:r,i[1]=l;for(var u=2;u<a;u++)i[u]=n[u];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}m.displayName="MDXCreateElement"},5380:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>a,metadata:()=>l,toc:()=>u});var o=n(7462),r=(n(7294),n(3905));const a={},i="Contributing to Drawer",l={unversionedId:"contribute",id:"contribute",title:"Contributing to Drawer",description:"First off, thanks for taking the time to contribute! \u2764\ufe0f",source:"@site/docs/contribute.md",sourceDirName:".",slug:"/contribute",permalink:"/docs/next/contribute",draft:!1,editUrl:"https://github.com/fabienwnklr/drawer-doc/docs/contribute.md",tags:[],version:"current",frontMatter:{},sidebar:"getStartedSidebar",previous:{title:"Events",permalink:"/docs/next/events"}},s={},u=[{value:"Table of Contents",id:"table-of-contents",level:2},{value:"I have a question",id:"i-have-a-question",level:2},{value:"Reporting bugs",id:"reporting-bugs",level:2},{value:"I want to contribute",id:"i-want-to-contribute",level:2},{value:"Get repo",id:"get-repo",level:3},{value:"move to drawer folder",id:"move-to-drawer-folder",level:3},{value:"Open in vscode",id:"open-in-vscode",level:3},{value:"Install dependencies",id:"install-dependencies",level:3},{value:"Run debug mode",id:"run-debug-mode",level:3},{value:"Run docs website",id:"run-docs-website",level:3},{value:"Commit Messages",id:"commit-messages",level:2},{value:"Improving The Documentation",id:"improving-the-documentation",level:2}],p={toc:u},c="wrapper";function d(e){let{components:t,...n}=e;return(0,r.kt)(c,(0,o.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"contributing-to-drawer"},"Contributing to Drawer"),(0,r.kt)("p",null,"First off, thanks for taking the time to contribute! \u2764\ufe0f"),(0,r.kt)("admonition",{title:"For everybody",type:"info"},(0,r.kt)("p",{parentName:"admonition"},"Don't forget it : Drawer is open source project, not my main project, so be respectful and understanding about the fact that sometimes i can\u2019t respond to the request within a short time")),(0,r.kt)("p",null,"All types of contributions are encouraged and valued. See the ",(0,r.kt)("a",{parentName:"p",href:"#table-of-contents"},"Table of Contents")," for different ways to help and details about how this project handles them. Please make sure to read the relevant section before making your contribution. It will make it easier for us maintainers and smooth out the experience for all involved. The community looks forward to your contributions. \ud83c\udf89"),(0,r.kt)("admonition",{title:"For no contributors",type:"info"},(0,r.kt)("p",{parentName:"admonition"},"And if you like the project, but just don't have time to contribute, that's fine. There are other easy ways to support the project and show your appreciation, which we would also be very happy about:"),(0,r.kt)("ul",{parentName:"admonition"},(0,r.kt)("li",{parentName:"ul"},"Star the project"),(0,r.kt)("li",{parentName:"ul"},"Sponsor the project and/or individual contributors"),(0,r.kt)("li",{parentName:"ul"},"Tweet about it"),(0,r.kt)("li",{parentName:"ul"},"Refer this project in your project's readme"),(0,r.kt)("li",{parentName:"ul"},"Mention the project at local meetups and tell your friends/colleagues"))),(0,r.kt)("h2",{id:"table-of-contents"},"Table of Contents"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#i-have-a-question"},"I have a question")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#reporting-bugs"},"Reporting bugs")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#i-want-to-contribute"},"I want to contribute")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#commit-messages"},"Commit Messages")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#improving-the-documentation"},"Improving The Documentation"))),(0,r.kt)("h2",{id:"i-have-a-question"},"I have a question"),(0,r.kt)("p",null,"there is no stupid question, only silly answers (but still check that the answer does not already exist...)."),(0,r.kt)("p",null,"if you have any question, the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/fabwcie/drawer/discussions"},"discussion")," is here for that ! so don't hesitate."),(0,r.kt)("h2",{id:"reporting-bugs"},"Reporting bugs"),(0,r.kt)("p",null,"Please follow some step before report a bug"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Make sure that you are using the latest version."),(0,r.kt)("li",{parentName:"ul"},"Determine if your bug is a bug and not an error. e.g., using incompatible environment components/versions (Make sure that you have read the documentation. If you are looking for support, you might want to check ",(0,r.kt)("a",{parentName:"li",href:"#i-have-a-question"},"this section"),")."),(0,r.kt)("li",{parentName:"ul"},"To see if other users have experienced (and potentially already solved) the same issue you are having, check if there is not already a bug report existing for your bug or error in ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/fabwcie/drawer/issues"},"the bug tracker"),"."),(0,r.kt)("li",{parentName:"ul"},"Make sure to search the internet (including Stack Overflow) to see if users outside the GitHub community have discussed the issue."),(0,r.kt)("li",{parentName:"ul"},"Collect information about the bug:",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Stack trace (Traceback)"),(0,r.kt)("li",{parentName:"ul"},"OS, Platform, and Version (Windows, Linux, macOS, x86, ARM)"),(0,r.kt)("li",{parentName:"ul"},"Version of the interpreter, compiler, SDK, runtime environment, and package manager, depending on what seems relevant."))),(0,r.kt)("li",{parentName:"ul"},"Possibly your input and the output"),(0,r.kt)("li",{parentName:"ul"},"Can you reliably reproduce the issue?",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Can you also reproduce it with older versions? Or have you updated to the latest version?")))),(0,r.kt)("h2",{id:"i-want-to-contribute"},"I want to contribute"),(0,r.kt)("admonition",{title:"Legal Notice",type:"info"},(0,r.kt)("p",{parentName:"admonition"},"When contributing to this project, you must agree that you have authored 100% of the content, that you have the necessary rights to the content and that the content you contribute may be provided under the project license.")),(0,r.kt)("h3",{id:"get-repo"},"Get repo"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"git clone https://github.com/fabwcie/drawer.git\n")),(0,r.kt)("h3",{id:"move-to-drawer-folder"},"move to drawer folder"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"cd drawer\n")),(0,r.kt)("h3",{id:"open-in-vscode"},"Open in vscode"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"code ./\n")),(0,r.kt)("h3",{id:"install-dependencies"},"Install dependencies"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"npm i\n")),(0,r.kt)("h3",{id:"run-debug-mode"},"Run debug mode"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"npm run dev\n")),(0,r.kt)("h3",{id:"run-docs-website"},"Run docs website"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"cd docs && npm run start\n")),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"Before all commit and build, pre-commit hook run for test and lint, if you won't you can disable it"),(0,r.kt)("p",{parentName:"admonition"},"for commit :"),(0,r.kt)("p",{parentName:"admonition"},"remove content of ",(0,r.kt)("inlineCode",{parentName:"p"},".husky/pre-commit")," ",(0,r.kt)("strong",{parentName:"p"},"(DON'T COMMIT THIS CHANGE)")),(0,r.kt)("p",{parentName:"admonition"},"for build:"),(0,r.kt)("p",{parentName:"admonition"},"remove ",(0,r.kt)("inlineCode",{parentName:"p"},"prebuild")," script into ",(0,r.kt)("inlineCode",{parentName:"p"},"package.json")," ",(0,r.kt)("strong",{parentName:"p"},"(DON'T COMMIT THIS CHANGE)"))),(0,r.kt)("h2",{id:"commit-messages"},"Commit Messages"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"We use ",(0,r.kt)("a",{parentName:"strong",href:"https://github.com/conventional-changelog/commitlint"},"commitlint")," as commit linter.")),(0,r.kt)("p",null,"Commit messages should be concise and descriptive and reference the issue they are addressing whenever possible. In addition, they should follow the ",(0,r.kt)("a",{parentName:"p",href:"https://www.conventionalcommits.org/en/v1.0.0/"},"Conventional Commits specification"),"."),(0,r.kt)("h2",{id:"improving-the-documentation"},"Improving The Documentation"),(0,r.kt)("p",null,"If you are a new contributor and want to help improve the documentation, you can edit the documentation files in the ",(0,r.kt)("inlineCode",{parentName:"p"},"/docs")," directory."),(0,r.kt)("p",null,"We actively seek additional help in building new examples or providing documentation translations."))}d.isMDXComponent=!0}}]);