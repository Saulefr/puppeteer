"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[48742],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>g});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function p(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?p(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):p(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},p=Object.keys(e);for(n=0;n<p.length;n++)r=p[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(n=0;n<p.length;n++)r=p[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),c=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},s=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,p=e.originalType,l=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),d=c(r),g=a,b=d["".concat(l,".").concat(g)]||d[g]||u[g]||p;return r?n.createElement(b,o(o({ref:t},s),{},{components:r})):n.createElement(b,o({ref:t},s))}));function g(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var p=r.length,o=new Array(p);o[0]=d;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var c=2;c<p;c++)o[c]=r[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},66155:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>l,toc:()=>s});r(67294);var n=r(3905);function a(){return a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},a.apply(this,arguments)}function p(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},p=Object.keys(e);for(n=0;n<p.length;n++)r=p[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(n=0;n<p.length;n++)r=p[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}const o={sidebar_label:"Page.isDragInterceptionEnabled"},i="Page.isDragInterceptionEnabled() method",l={unversionedId:"api/puppeteer.page.isdraginterceptionenabled",id:"api/puppeteer.page.isdraginterceptionenabled",title:"Page.isDragInterceptionEnabled() method",description:"Warning: This API is now obsolete.",source:"@site/../docs/api/puppeteer.page.isdraginterceptionenabled.md",sourceDirName:"api",slug:"/api/puppeteer.page.isdraginterceptionenabled",permalink:"/next/api/puppeteer.page.isdraginterceptionenabled",draft:!1,tags:[],version:"current",frontMatter:{sidebar_label:"Page.isDragInterceptionEnabled"},sidebar:"api",previous:{title:"Page.isClosed",permalink:"/next/api/puppeteer.page.isclosed"},next:{title:"Page.isJavaScriptEnabled",permalink:"/next/api/puppeteer.page.isjavascriptenabled"}},c={},s=[{value:"Signature:",id:"signature",level:4}],u={toc:s};function d(e){var{components:t}=e,r=p(e,["components"]);return(0,n.kt)("wrapper",a({},u,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",a({},{id:"pageisdraginterceptionenabled-method"}),"Page.isDragInterceptionEnabled() method"),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"Warning: This API is now obsolete."),(0,n.kt)("p",{parentName:"blockquote"},"We no longer support intercepting drag payloads. Use the new drag APIs found on ",(0,n.kt)("a",a({parentName:"p"},{href:"/next/api/puppeteer.elementhandle"}),"ElementHandle")," to drag (or just use the ",(0,n.kt)("a",a({parentName:"p"},{href:"./puppeteer.page.mouse.md"}),"Page.mouse"),").")),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"true")," if drag events are being intercepted, ",(0,n.kt)("inlineCode",{parentName:"p"},"false")," otherwise."),(0,n.kt)("h4",a({},{id:"signature"}),"Signature:"),(0,n.kt)("pre",null,(0,n.kt)("code",a({parentName:"pre"},{className:"language-typescript"}),"class Page {\n  isDragInterceptionEnabled(): boolean;\n}\n")),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Returns:")),(0,n.kt)("p",null,"boolean"))}d.isMDXComponent=!0}}]);