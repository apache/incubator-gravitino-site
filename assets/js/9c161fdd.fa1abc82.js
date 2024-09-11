"use strict";(self.webpackChunkapache_website_template=self.webpackChunkapache_website_template||[]).push([[6755],{19590:(n,e,t)=>{t.r(e),t.d(e,{assets:()=>s,contentTitle:()=>a,default:()=>h,frontMatter:()=>i,metadata:()=>c,toc:()=>d});var o=t(13274),r=t(78140);const i={title:"Apache Gravitino Trino connector",slug:"/trino-connector/trino-connector",keyword:"gravitino connector trino",license:"This software is licensed under the Apache License version 2."},a=void 0,c={id:"trino-connector/trino-connector",title:"Apache Gravitino Trino connector",description:"Trino can manage and access data using the Trino connector provided by Apache Gravitino, commonly referred to as the Gravitino Trino connector.",source:"@site/docs/trino-connector/trino-connector.md",sourceDirName:"trino-connector",slug:"/trino-connector/trino-connector",permalink:"/docs/next/trino-connector/trino-connector",draft:!1,unlisted:!1,editUrl:"https://github.com/apache/gravitino-site/tree/main/docs/trino-connector/trino-connector.md",tags:[],version:"current",lastUpdatedBy:"Jerry Shao",lastUpdatedAt:1726031623e3,frontMatter:{title:"Apache Gravitino Trino connector",slug:"/trino-connector/trino-connector",keyword:"gravitino connector trino",license:"This software is licensed under the Apache License version 2."},sidebar:"docs",previous:{title:"Index",permalink:"/docs/next/trino-connector/index"},next:{title:"Requirements",permalink:"/docs/next/trino-connector/requirements"}},s={},d=[];function l(n){const e={a:"a",admonition:"admonition",code:"code",p:"p",pre:"pre",...(0,r.R)(),...n.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(e.p,{children:["Trino can manage and access data using the Trino connector provided by ",(0,o.jsx)(e.code,{children:"Apache Gravitino"}),", commonly referred to as the ",(0,o.jsx)(e.code,{children:"Gravitino Trino connector"}),".\nAfter configuring the Gravitino Trino connector in Trino, Trino can automatically load catalog metadata from Gravitino, allowing users to directly access these catalogs in Trino.\nOnce integrated with Gravitino, Trino can operate on all Gravitino data without requiring additional configuration.\nThe Gravitino Trino connector uses the ",(0,o.jsx)(e.a,{href:"https://trino.io/docs/current/admin/properties-catalog.html",children:"Trino dynamic catalog managed mechanism"})," to load catalogs.\nWhen the Gravitino Trino connector retrieves catalogs from the Gravitino server, it generates a ",(0,o.jsx)(e.code,{children:"CREATE CATAGLOG"})," statement and executes\nthe statement on the current Trino server to register the catalogs with Trino"]}),"\n",(0,o.jsx)(e.admonition,{type:"note",children:(0,o.jsx)(e.p,{children:"Once metadata such as catalogs are changed in Gravitino, Trino can update itself through Gravitino, this process usually takes\nabout 3~10 seconds."})}),"\n",(0,o.jsx)(e.p,{children:"By default, the loading of Gravitino's catalogs into Trino follows the naming convention:"}),"\n",(0,o.jsx)(e.pre,{children:(0,o.jsx)(e.code,{className:"language-text",children:"{catalog}\n"})}),"\n",(0,o.jsx)(e.p,{children:"Usage in queries is as follows:"}),"\n",(0,o.jsx)(e.pre,{children:(0,o.jsx)(e.code,{className:"language-text",children:"SELECT * from catalog.dbname.tablename\n"})})]})}function h(n={}){const{wrapper:e}={...(0,r.R)(),...n.components};return e?(0,o.jsx)(e,{...n,children:(0,o.jsx)(l,{...n})}):l(n)}}}]);