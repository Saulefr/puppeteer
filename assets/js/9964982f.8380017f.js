"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[46686],{3905:(e,r,t)=>{t.d(r,{Zo:()=>l,kt:()=>g});var o=t(67294);function n(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function p(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(Object(t),!0).forEach((function(r){n(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function s(e,r){if(null==e)return{};var t,o,n=function(e,r){if(null==e)return{};var t,o,n={},a=Object.keys(e);for(o=0;o<a.length;o++)t=a[o],r.indexOf(t)>=0||(n[t]=e[t]);return n}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)t=a[o],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var i=o.createContext({}),c=function(e){var r=o.useContext(i),t=r;return e&&(t="function"==typeof e?e(r):p(p({},r),e)),t},l=function(e){var r=c(e.components);return o.createElement(i.Provider,{value:r},e.children)},u={inlineCode:"code",wrapper:function(e){var r=e.children;return o.createElement(o.Fragment,{},r)}},v=o.forwardRef((function(e,r){var t=e.components,n=e.mdxType,a=e.originalType,i=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),v=c(t),g=n,f=v["".concat(i,".").concat(g)]||v[g]||u[g]||a;return t?o.createElement(f,p(p({ref:r},l),{},{components:t})):o.createElement(f,p({ref:r},l))}));function g(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var a=t.length,p=new Array(a);p[0]=v;var s={};for(var i in r)hasOwnProperty.call(r,i)&&(s[i]=r[i]);s.originalType=e,s.mdxType="string"==typeof e?e:n,p[1]=s;for(var c=2;c<a;c++)p[c]=t[c];return o.createElement.apply(null,p)}return o.createElement.apply(null,t)}v.displayName="MDXCreateElement"},52288:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>c,contentTitle:()=>s,default:()=>v,frontMatter:()=>p,metadata:()=>i,toc:()=>l});t(67294);var o=t(3905);function n(){return n=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var t=arguments[r];for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o])}return e},n.apply(this,arguments)}function a(e,r){if(null==e)return{};var t,o,n=function(e,r){if(null==e)return{};var t,o,n={},a=Object.keys(e);for(o=0;o<a.length;o++)t=a[o],r.indexOf(t)>=0||(n[t]=e[t]);return n}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)t=a[o],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}const p={sidebar_label:"Coverage.stopJSCoverage"},s="Coverage.stopJSCoverage() method",i={unversionedId:"api/puppeteer.coverage.stopjscoverage",id:"version-19.11.1/api/puppeteer.coverage.stopjscoverage",title:"Coverage.stopJSCoverage() method",description:"Promise that resolves to the array of coverage reports for all scripts.",source:"@site/versioned_docs/version-19.11.1/api/puppeteer.coverage.stopjscoverage.md",sourceDirName:"api",slug:"/api/puppeteer.coverage.stopjscoverage",permalink:"/api/puppeteer.coverage.stopjscoverage",draft:!1,tags:[],version:"19.11.1",frontMatter:{sidebar_label:"Coverage.stopJSCoverage"},sidebar:"api",previous:{title:"Coverage.stopCSSCoverage",permalink:"/api/puppeteer.coverage.stopcsscoverage"},next:{title:"TimeoutError",permalink:"/api/puppeteer.timeouterror"}},c={},l=[{value:"Signature:",id:"signature",level:4},{value:"Remarks",id:"remarks",level:2}],u={toc:l};function v(e){var{components:r}=e,t=a(e,["components"]);return(0,o.kt)("wrapper",n({},u,t,{components:r,mdxType:"MDXLayout"}),(0,o.kt)("h1",n({},{id:"coveragestopjscoverage-method"}),"Coverage.stopJSCoverage() method"),(0,o.kt)("p",null,"Promise that resolves to the array of coverage reports for all scripts."),(0,o.kt)("h4",n({},{id:"signature"}),"Signature:"),(0,o.kt)("pre",null,(0,o.kt)("code",n({parentName:"pre"},{className:"language-typescript"}),"class Coverage {\n  stopJSCoverage(): Promise<JSCoverageEntry[]>;\n}\n")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Returns:")),(0,o.kt)("p",null,"Promise","<",(0,o.kt)("a",n({parentName:"p"},{href:"/api/puppeteer.jscoverageentry"}),"JSCoverageEntry"),"[","]",">"),(0,o.kt)("h2",n({},{id:"remarks"}),"Remarks"),(0,o.kt)("p",null,"JavaScript Coverage doesn't include anonymous scripts by default. However, scripts with sourceURLs are reported."))}v.isMDXComponent=!0}}]);