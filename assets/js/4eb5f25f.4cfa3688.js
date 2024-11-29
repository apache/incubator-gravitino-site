"use strict";(self.webpackChunkapache_website_template=self.webpackChunkapache_website_template||[]).push([[32652],{34891:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>c,default:()=>h,frontMatter:()=>o,metadata:()=>s,toc:()=>a});var i=t(13274),r=t(8438);const o={title:"Apache Gravitino Trino connector Configuration",slug:"/trino-connector/configuration",keyword:"gravitino connector trino",license:"This software is licensed under the Apache License version 2."},c=void 0,s={id:"trino-connector/configuration",title:"Apache Gravitino Trino connector Configuration",description:"| Property                         | Type    | Default Value               | Description                                                                                                                                                                                                                                                                                                         | Required | Since Version |",source:"@site/versioned_docs/version-0.7.0-incubating/trino-connector/configuration.md",sourceDirName:"trino-connector",slug:"/trino-connector/configuration",permalink:"/docs/0.7.0-incubating/trino-connector/configuration",draft:!1,unlisted:!1,editUrl:"https://github.com/apache/gravitino-site/tree/main/docs/trino-connector/configuration.md",tags:[],version:"0.7.0-incubating",lastUpdatedBy:"FANNG",lastUpdatedAt:1732866794e3,frontMatter:{title:"Apache Gravitino Trino connector Configuration",slug:"/trino-connector/configuration",keyword:"gravitino connector trino",license:"This software is licensed under the Apache License version 2."},sidebar:"docs",previous:{title:"Installation",permalink:"/docs/0.7.0-incubating/trino-connector/installation"},next:{title:"Introduction",permalink:"/docs/0.7.0-incubating/trino-connector/supported-catalog"}},d={},a=[];function l(e){const n={a:"a",code:"code",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.R)(),...e.components};return(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Property"}),(0,i.jsx)(n.th,{children:"Type"}),(0,i.jsx)(n.th,{children:"Default Value"}),(0,i.jsx)(n.th,{children:"Description"}),(0,i.jsx)(n.th,{children:"Required"}),(0,i.jsx)(n.th,{children:"Since Version"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"connector.name"}),(0,i.jsx)(n.td,{children:"string"}),(0,i.jsx)(n.td,{children:"(none)"}),(0,i.jsxs)(n.td,{children:["The ",(0,i.jsx)(n.code,{children:"connector.name"})," defines the type of Trino connector, this value is always 'gravitino'."]}),(0,i.jsx)(n.td,{children:"Yes"}),(0,i.jsx)(n.td,{children:"0.2.0"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"gravitino.metalake"}),(0,i.jsx)(n.td,{children:"string"}),(0,i.jsx)(n.td,{children:"(none)"}),(0,i.jsxs)(n.td,{children:["The ",(0,i.jsx)(n.code,{children:"gravitino.metalake"})," defines which metalake in Gravitino server the Trino connector uses. Trino connector should set it at start, the value of ",(0,i.jsx)(n.code,{children:"gravitino.metalake"})," needs to be a valid name, Trino connector can detect and load the metalake with catalogs, schemas and tables once created and keep in sync."]}),(0,i.jsx)(n.td,{children:"Yes"}),(0,i.jsx)(n.td,{children:"0.2.0"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"gravitino.uri"}),(0,i.jsx)(n.td,{children:"string"}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.a,{href:"http://localhost:8090",children:"http://localhost:8090"})}),(0,i.jsxs)(n.td,{children:["The ",(0,i.jsx)(n.code,{children:"gravitino.uri"})," defines the connection URL of the Gravitino server, the default value is ",(0,i.jsx)(n.code,{children:"http://localhost:8090"}),". Trino connector can detect and connect to Gravitino server once it is ready, no need to start Gravitino server beforehand."]}),(0,i.jsx)(n.td,{children:"No"}),(0,i.jsx)(n.td,{children:"0.2.0"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"trino.jdbc.user"}),(0,i.jsx)(n.td,{children:"string"}),(0,i.jsx)(n.td,{children:"admin"}),(0,i.jsx)(n.td,{children:"The jdbc user name of current Trino."}),(0,i.jsx)(n.td,{children:"NO"}),(0,i.jsx)(n.td,{children:"0.5.1"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"trino.jdbc.password"}),(0,i.jsx)(n.td,{children:"string"}),(0,i.jsx)(n.td,{children:"(none)"}),(0,i.jsx)(n.td,{children:"The jdbc password of current Trino."}),(0,i.jsx)(n.td,{children:"NO"}),(0,i.jsx)(n.td,{children:"0.5.1"})]})]})]})}function h(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(l,{...e})}):l(e)}}}]);