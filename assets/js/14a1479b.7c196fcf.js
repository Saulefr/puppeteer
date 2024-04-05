/*! For license information please see 14a1479b.7c196fcf.js.LICENSE.txt */
"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[76666],{64947:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>l,contentTitle:()=>o,default:()=>c,frontMatter:()=>i,metadata:()=>a,toc:()=>d});var n=t(85893),s=t(11151);const i={sidebar_label:"Page.goto"},o="Page.goto() method",a={id:"api/puppeteer.page.goto",title:"Page.goto() method",description:"Navigates the page to the given url.",source:"@site/versioned_docs/version-22.6.3/api/puppeteer.page.goto.md",sourceDirName:"api",slug:"/api/puppeteer.page.goto",permalink:"/api/puppeteer.page.goto",draft:!1,unlisted:!1,tags:[],version:"22.6.3",frontMatter:{sidebar_label:"Page.goto"},sidebar:"api",previous:{title:"Page.goForward",permalink:"/api/puppeteer.page.goforward"},next:{title:"Page.hover",permalink:"/api/puppeteer.page.hover"}},l={},d=[{value:"Signature:",id:"signature",level:4},{value:"Parameters",id:"parameters",level:2},{value:"Exceptions",id:"exceptions",level:2},{value:"Remarks",id:"remarks",level:2}];function p(e){const r={a:"a",admonition:"admonition",code:"code",em:"em",h1:"h1",h2:"h2",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(r.h1,{id:"pagegoto-method",children:"Page.goto() method"}),"\n",(0,n.jsxs)(r.p,{children:["Navigates the page to the given ",(0,n.jsx)(r.code,{children:"url"}),"."]}),"\n",(0,n.jsx)(r.h4,{id:"signature",children:"Signature:"}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-typescript",children:"class Page {\n  goto(url: string, options?: GoToOptions): Promise<HTTPResponse | null>;\n}\n"})}),"\n",(0,n.jsx)(r.h2,{id:"parameters",children:"Parameters"}),"\n",(0,n.jsxs)("table",{children:[(0,n.jsx)("thead",{children:(0,n.jsxs)("tr",{children:[(0,n.jsx)("th",{children:(0,n.jsx)(r.p,{children:"Parameter"})}),(0,n.jsx)("th",{children:(0,n.jsx)(r.p,{children:"Type"})}),(0,n.jsx)("th",{children:(0,n.jsx)(r.p,{children:"Description"})})]})}),(0,n.jsxs)("tbody",{children:[(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:(0,n.jsx)(r.p,{children:"url"})}),(0,n.jsx)("td",{children:(0,n.jsx)(r.p,{children:"string"})}),(0,n.jsx)("td",{children:(0,n.jsxs)(r.p,{children:["URL to navigate page to. The URL should include scheme, e.g. ",(0,n.jsx)(r.code,{children:"https://"})]})})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:(0,n.jsx)(r.p,{children:"options"})}),(0,n.jsx)("td",{children:(0,n.jsx)(r.p,{children:(0,n.jsx)(r.a,{href:"/api/puppeteer.gotooptions",children:"GoToOptions"})})}),(0,n.jsx)("td",{children:(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.em,{children:"(Optional)"})," Options to configure waiting behavior."]})})]})]})]}),"\n",(0,n.jsx)(r.p,{children:(0,n.jsx)(r.strong,{children:"Returns:"})}),"\n",(0,n.jsxs)(r.p,{children:["Promise<",(0,n.jsx)(r.a,{href:"/api/puppeteer.httpresponse",children:"HTTPResponse"})," | null>"]}),"\n",(0,n.jsx)(r.p,{children:"A promise which resolves to the main resource response. In case of multiple redirects, the navigation will resolve with the response of the last redirect."}),"\n",(0,n.jsx)(r.h2,{id:"exceptions",children:"Exceptions"}),"\n",(0,n.jsx)(r.p,{children:"If:"}),"\n",(0,n.jsxs)(r.ul,{children:["\n",(0,n.jsx)(r.li,{children:"there's an SSL error (e.g. in case of self-signed certificates). - target URL is invalid. - the timeout is exceeded during navigation. - the remote server does not respond or is unreachable. - the main resource failed to load."}),"\n"]}),"\n",(0,n.jsxs)(r.p,{children:['This method will not throw an error when any valid HTTP status code is returned by the remote server, including 404 "Not Found" and 500 "Internal Server Error". The status code for such responses can be retrieved by calling ',(0,n.jsx)(r.a,{href:"/api/puppeteer.httpresponse.status",children:"HTTPResponse.status()"}),"."]}),"\n",(0,n.jsx)(r.h2,{id:"remarks",children:"Remarks"}),"\n",(0,n.jsxs)(r.p,{children:["Navigation to ",(0,n.jsx)(r.code,{children:"about:blank"})," or navigation to the same URL with a different hash will succeed and return ",(0,n.jsx)(r.code,{children:"null"}),"."]}),"\n",(0,n.jsx)(r.admonition,{type:"warning",children:(0,n.jsxs)(r.p,{children:["Headless mode doesn't support navigation to a PDF document. See the ",(0,n.jsx)(r.a,{href:"https://bugs.chromium.org/p/chromium/issues/detail?id=761295",children:"upstream issue"}),"."]})}),"\n",(0,n.jsxs)(r.p,{children:["Shortcut for ",(0,n.jsx)(r.a,{href:"/api/puppeteer.frame.goto",children:"page.mainFrame().goto(url, options)"}),"."]})]})}function c(e={}){const{wrapper:r}={...(0,s.a)(),...e.components};return r?(0,n.jsx)(r,{...e,children:(0,n.jsx)(p,{...e})}):p(e)}},75251:(e,r,t)=>{var n=t(67294),s=Symbol.for("react.element"),i=Symbol.for("react.fragment"),o=Object.prototype.hasOwnProperty,a=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function d(e,r,t){var n,i={},d=null,p=null;for(n in void 0!==t&&(d=""+t),void 0!==r.key&&(d=""+r.key),void 0!==r.ref&&(p=r.ref),r)o.call(r,n)&&!l.hasOwnProperty(n)&&(i[n]=r[n]);if(e&&e.defaultProps)for(n in r=e.defaultProps)void 0===i[n]&&(i[n]=r[n]);return{$$typeof:s,type:e,key:d,ref:p,props:i,_owner:a.current}}r.Fragment=i,r.jsx=d,r.jsxs=d},85893:(e,r,t)=>{e.exports=t(75251)},11151:(e,r,t)=>{t.d(r,{Z:()=>a,a:()=>o});var n=t(67294);const s={},i=n.createContext(s);function o(e){const r=n.useContext(i);return n.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function a(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),n.createElement(i.Provider,{value:r},e.children)}}}]);