/*! For license information please see 50ada7cf.91ef6109.js.LICENSE.txt */
"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[43601],{67934:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>l,contentTitle:()=>p,default:()=>c,frontMatter:()=>i,metadata:()=>o,toc:()=>d});var s=t(85893),n=t(11151);const i={sidebar_label:"HTTPRequest.respond"},p="HTTPRequest.respond() method",o={id:"api/puppeteer.httprequest.respond",title:"HTTPRequest.respond() method",description:"Fulfills a request with the given response.",source:"@site/versioned_docs/version-22.6.3/api/puppeteer.httprequest.respond.md",sourceDirName:"api",slug:"/api/puppeteer.httprequest.respond",permalink:"/api/puppeteer.httprequest.respond",draft:!1,unlisted:!1,tags:[],version:"22.6.3",frontMatter:{sidebar_label:"HTTPRequest.respond"},sidebar:"api",previous:{title:"HTTPRequest.resourceType",permalink:"/api/puppeteer.httprequest.resourcetype"},next:{title:"HTTPRequest.response",permalink:"/api/puppeteer.httprequest.response"}},l={},d=[{value:"Signature:",id:"signature",level:4},{value:"Parameters",id:"parameters",level:2},{value:"Remarks",id:"remarks",level:2},{value:"Example",id:"example",level:2}];function a(e){const r={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",h4:"h4",p:"p",pre:"pre",strong:"strong",...(0,n.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(r.h1,{id:"httprequestrespond-method",children:"HTTPRequest.respond() method"}),"\n",(0,s.jsx)(r.p,{children:"Fulfills a request with the given response."}),"\n",(0,s.jsx)(r.h4,{id:"signature",children:"Signature:"}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-typescript",children:"class HTTPRequest {\n  respond(\n    response: Partial<ResponseForRequest>,\n    priority?: number\n  ): Promise<void>;\n}\n"})}),"\n",(0,s.jsx)(r.h2,{id:"parameters",children:"Parameters"}),"\n",(0,s.jsxs)("table",{children:[(0,s.jsx)("thead",{children:(0,s.jsxs)("tr",{children:[(0,s.jsx)("th",{children:(0,s.jsx)(r.p,{children:"Parameter"})}),(0,s.jsx)("th",{children:(0,s.jsx)(r.p,{children:"Type"})}),(0,s.jsx)("th",{children:(0,s.jsx)(r.p,{children:"Description"})})]})}),(0,s.jsxs)("tbody",{children:[(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:(0,s.jsx)(r.p,{children:"response"})}),(0,s.jsx)("td",{children:(0,s.jsxs)(r.p,{children:["Partial<",(0,s.jsx)(r.a,{href:"/api/puppeteer.responseforrequest",children:"ResponseForRequest"}),">"]})}),(0,s.jsx)("td",{children:(0,s.jsx)(r.p,{children:"the response to fulfill the request with."})})]}),(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:(0,s.jsx)(r.p,{children:"priority"})}),(0,s.jsx)("td",{children:(0,s.jsx)(r.p,{children:"number"})}),(0,s.jsx)("td",{children:(0,s.jsxs)(r.p,{children:[(0,s.jsx)(r.em,{children:"(Optional)"})," If provided, intercept is resolved using cooperative handling rules. Otherwise, intercept is resolved immediately."]})})]})]})]}),"\n",(0,s.jsx)(r.p,{children:(0,s.jsx)(r.strong,{children:"Returns:"})}),"\n",(0,s.jsx)(r.p,{children:"Promise<void>"}),"\n",(0,s.jsx)(r.h2,{id:"remarks",children:"Remarks"}),"\n",(0,s.jsxs)(r.p,{children:["To use this, request interception should be enabled with ",(0,s.jsx)(r.a,{href:"/api/puppeteer.page.setrequestinterception",children:"Page.setRequestInterception()"}),"."]}),"\n",(0,s.jsx)(r.p,{children:"Exception is immediately thrown if the request interception is not enabled."}),"\n",(0,s.jsx)(r.h2,{id:"example",children:"Example"}),"\n",(0,s.jsx)(r.p,{children:"An example of fulfilling all requests with 404 responses:"}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-ts",children:"await page.setRequestInterception(true);\npage.on('request', request => {\n  request.respond({\n    status: 404,\n    contentType: 'text/plain',\n    body: 'Not Found!',\n  });\n});\n"})}),"\n",(0,s.jsxs)(r.p,{children:["NOTE: Mocking responses for dataURL requests is not supported. Calling ",(0,s.jsx)(r.code,{children:"request.respond"})," for a dataURL request is a noop."]})]})}function c(e={}){const{wrapper:r}={...(0,n.a)(),...e.components};return r?(0,s.jsx)(r,{...e,children:(0,s.jsx)(a,{...e})}):a(e)}},75251:(e,r,t)=>{var s=t(67294),n=Symbol.for("react.element"),i=Symbol.for("react.fragment"),p=Object.prototype.hasOwnProperty,o=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function d(e,r,t){var s,i={},d=null,a=null;for(s in void 0!==t&&(d=""+t),void 0!==r.key&&(d=""+r.key),void 0!==r.ref&&(a=r.ref),r)p.call(r,s)&&!l.hasOwnProperty(s)&&(i[s]=r[s]);if(e&&e.defaultProps)for(s in r=e.defaultProps)void 0===i[s]&&(i[s]=r[s]);return{$$typeof:n,type:e,key:d,ref:a,props:i,_owner:o.current}}r.Fragment=i,r.jsx=d,r.jsxs=d},85893:(e,r,t)=>{e.exports=t(75251)},11151:(e,r,t)=>{t.d(r,{Z:()=>o,a:()=>p});var s=t(67294);const n={},i=s.createContext(n);function p(e){const r=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function o(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:p(e.components),s.createElement(i.Provider,{value:r},e.children)}}}]);