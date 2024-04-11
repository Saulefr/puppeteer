/*! For license information please see acdb3ddd.fa6657cc.js.LICENSE.txt */
"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[71954],{68105:(e,s,t)=>{t.r(s),t.d(s,{assets:()=>d,contentTitle:()=>n,default:()=>p,frontMatter:()=>a,metadata:()=>l,toc:()=>c});var r=t(85893),i=t(11151);const a={sidebar_label:"Dialog"},n="Dialog class",l={id:"api/puppeteer.dialog",title:"Dialog class",description:"Dialog instances are dispatched by the Page via the dialog event.",source:"@site/../docs/api/puppeteer.dialog.md",sourceDirName:"api",slug:"/api/puppeteer.dialog",permalink:"/next/api/puppeteer.dialog",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{sidebar_label:"Dialog"},sidebar:"api",previous:{title:"FileChooser.isMultiple",permalink:"/next/api/puppeteer.filechooser.ismultiple"},next:{title:"Dialog.accept",permalink:"/next/api/puppeteer.dialog.accept"}},d={},c=[{value:"Signature:",id:"signature",level:4},{value:"Remarks",id:"remarks",level:2},{value:"Example",id:"example",level:2},{value:"Methods",id:"methods",level:2}];function o(e){const s={a:"a",code:"code",h1:"h1",h2:"h2",h4:"h4",p:"p",pre:"pre",...(0,i.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(s.h1,{id:"dialog-class",children:"Dialog class"}),"\n",(0,r.jsxs)(s.p,{children:["Dialog instances are dispatched by the ",(0,r.jsx)(s.a,{href:"/next/api/puppeteer.page",children:"Page"})," via the ",(0,r.jsx)(s.code,{children:"dialog"})," event."]}),"\n",(0,r.jsx)(s.h4,{id:"signature",children:"Signature:"}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-typescript",children:"export declare abstract class Dialog\n"})}),"\n",(0,r.jsx)(s.h2,{id:"remarks",children:"Remarks"}),"\n",(0,r.jsxs)(s.p,{children:["The constructor for this class is marked as internal. Third-party code should not call the constructor directly or create subclasses that extend the ",(0,r.jsx)(s.code,{children:"Dialog"})," class."]}),"\n",(0,r.jsx)(s.h2,{id:"example",children:"Example"}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-ts",children:"import puppeteer from 'puppeteer';\n\n(async () => {\n  const browser = await puppeteer.launch();\n  const page = await browser.newPage();\n  page.on('dialog', async dialog => {\n    console.log(dialog.message());\n    await dialog.dismiss();\n    await browser.close();\n  });\n  page.evaluate(() => alert('1'));\n})();\n"})}),"\n",(0,r.jsx)(s.h2,{id:"methods",children:"Methods"}),"\n",(0,r.jsxs)("table",{children:[(0,r.jsx)("thead",{children:(0,r.jsxs)("tr",{children:[(0,r.jsx)("th",{children:(0,r.jsx)(s.p,{children:"Method"})}),(0,r.jsx)("th",{children:(0,r.jsx)(s.p,{children:"Modifiers"})}),(0,r.jsx)("th",{children:(0,r.jsx)(s.p,{children:"Description"})})]})}),(0,r.jsxs)("tbody",{children:[(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:(0,r.jsx)("span",{id:"accept",children:(0,r.jsx)(s.a,{href:"/next/api/puppeteer.dialog.accept",children:"accept(promptText)"})})}),(0,r.jsx)("td",{}),(0,r.jsx)("td",{children:(0,r.jsx)(s.p,{children:"A promise that resolves when the dialog has been accepted."})})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:(0,r.jsx)("span",{id:"defaultvalue",children:(0,r.jsx)(s.a,{href:"/next/api/puppeteer.dialog.defaultvalue",children:"defaultValue()"})})}),(0,r.jsx)("td",{}),(0,r.jsx)("td",{children:(0,r.jsxs)(s.p,{children:["The default value of the prompt, or an empty string if the dialog is not a ",(0,r.jsx)(s.code,{children:"prompt"}),"."]})})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:(0,r.jsx)("span",{id:"dismiss",children:(0,r.jsx)(s.a,{href:"/next/api/puppeteer.dialog.dismiss",children:"dismiss()"})})}),(0,r.jsx)("td",{}),(0,r.jsx)("td",{children:(0,r.jsx)(s.p,{children:"A promise which will resolve once the dialog has been dismissed"})})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:(0,r.jsx)("span",{id:"message",children:(0,r.jsx)(s.a,{href:"/next/api/puppeteer.dialog.message",children:"message()"})})}),(0,r.jsx)("td",{}),(0,r.jsx)("td",{children:(0,r.jsx)(s.p,{children:"The message displayed in the dialog."})})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:(0,r.jsx)("span",{id:"type",children:(0,r.jsx)(s.a,{href:"/next/api/puppeteer.dialog.type",children:"type()"})})}),(0,r.jsx)("td",{}),(0,r.jsx)("td",{children:(0,r.jsx)(s.p,{children:"The type of the dialog."})})]})]})]})]})}function p(e={}){const{wrapper:s}={...(0,i.a)(),...e.components};return s?(0,r.jsx)(s,{...e,children:(0,r.jsx)(o,{...e})}):o(e)}},75251:(e,s,t)=>{var r=t(67294),i=Symbol.for("react.element"),a=Symbol.for("react.fragment"),n=Object.prototype.hasOwnProperty,l=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,d={key:!0,ref:!0,__self:!0,__source:!0};function c(e,s,t){var r,a={},c=null,o=null;for(r in void 0!==t&&(c=""+t),void 0!==s.key&&(c=""+s.key),void 0!==s.ref&&(o=s.ref),s)n.call(s,r)&&!d.hasOwnProperty(r)&&(a[r]=s[r]);if(e&&e.defaultProps)for(r in s=e.defaultProps)void 0===a[r]&&(a[r]=s[r]);return{$$typeof:i,type:e,key:c,ref:o,props:a,_owner:l.current}}s.Fragment=a,s.jsx=c,s.jsxs=c},85893:(e,s,t)=>{e.exports=t(75251)},11151:(e,s,t)=>{t.d(s,{Z:()=>l,a:()=>n});var r=t(67294);const i={},a=r.createContext(i);function n(e){const s=r.useContext(a);return r.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function l(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:n(e.components),r.createElement(a.Provider,{value:s},e.children)}}}]);