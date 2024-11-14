"use strict";(self.webpackChunkapache_website_template=self.webpackChunkapache_website_template||[]).push([[10911],{38802:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>d,frontMatter:()=>i,metadata:()=>o,toc:()=>a});var r=n(13274),s=n(8438);const i={title:"Apache Gravitino Trino connector SQL support",slug:"/trino-connector/sql-support",keyword:"gravitino connector trino",license:"This software is licensed under the Apache License version 2."},l=void 0,o={id:"trino-connector/sql-support",title:"Apache Gravitino Trino connector SQL support",description:"The connector provides read access and write access to data and metadata stored in Apache Gravitino.",source:"@site/versioned_docs/version-0.6.0-incubating/trino-connector/sql-support.md",sourceDirName:"trino-connector",slug:"/trino-connector/sql-support",permalink:"/docs/0.6.0-incubating/trino-connector/sql-support",draft:!1,unlisted:!1,editUrl:"https://github.com/apache/gravitino-site/tree/main/docs/trino-connector/sql-support.md",tags:[],version:"0.6.0-incubating",lastUpdatedBy:"Qian Xia",lastUpdatedAt:1731578623e3,frontMatter:{title:"Apache Gravitino Trino connector SQL support",slug:"/trino-connector/sql-support",keyword:"gravitino connector trino",license:"This software is licensed under the Apache License version 2."},sidebar:"docs",previous:{title:"PostgreSQL",permalink:"/docs/0.6.0-incubating/trino-connector/catalog-postgresql"},next:{title:"Development",permalink:"/docs/0.6.0-incubating/trino-connector/development"}},c={},a=[{value:"Globally available statements",id:"globally-available-statements",level:3},{value:"Read operations",id:"read-operations",level:3},{value:"Write operations",id:"write-operations",level:3},{value:"Schema and table management",id:"schema-and-table-management",level:3},{value:"Transactions",id:"transactions",level:3}];function h(e){const t={a:"a",h3:"h3",li:"li",p:"p",ul:"ul",...(0,s.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.p,{children:"The connector provides read access and write access to data and metadata stored in Apache Gravitino."}),"\n",(0,r.jsx)(t.h3,{id:"globally-available-statements",children:"Globally available statements"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{children:(0,r.jsx)(t.a,{href:"https://trino.io/docs/current/sql/explain.html",children:"EXPLAIN"})}),"\n",(0,r.jsx)(t.li,{children:(0,r.jsx)(t.a,{href:"https://trino.io/docs/current/sql/explain-analyze.html",children:"EXPLAIN ANALYZE"})}),"\n",(0,r.jsx)(t.li,{children:(0,r.jsx)(t.a,{href:"https://trino.io/docs/current/sql/prepare.html",children:"PREPARE"})}),"\n",(0,r.jsx)(t.li,{children:(0,r.jsx)(t.a,{href:"https://trino.io/docs/current/sql/use.html",children:"USE"})}),"\n"]}),"\n",(0,r.jsx)(t.h3,{id:"read-operations",children:"Read operations"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{children:(0,r.jsx)(t.a,{href:"https://trino.io/docs/current/sql/select.html",children:"SELECT"})}),"\n",(0,r.jsx)(t.li,{children:(0,r.jsx)(t.a,{href:"https://trino.io/docs/current/sql/describe.html",children:"DESCRIBE"})}),"\n",(0,r.jsx)(t.li,{children:(0,r.jsx)(t.a,{href:"https://trino.io/docs/current/sql/show-catalogs.html",children:"SHOW CATALOGS"})}),"\n",(0,r.jsx)(t.li,{children:(0,r.jsx)(t.a,{href:"https://trino.io/docs/current/sql/show-columns.html",children:"SHOW COLUMNS"})}),"\n",(0,r.jsx)(t.li,{children:(0,r.jsx)(t.a,{href:"https://trino.io/docs/current/sql/show-create-schema.html",children:"SHOW CREATE SCHEMA"})}),"\n",(0,r.jsx)(t.li,{children:(0,r.jsx)(t.a,{href:"https://trino.io/docs/current/sql/show-create-table.html",children:"SHOW CREATE TABLE"})}),"\n",(0,r.jsx)(t.li,{children:(0,r.jsx)(t.a,{href:"https://trino.io/docs/current/sql/show-schemas.html",children:"SHOW SCHEMAS"})}),"\n",(0,r.jsx)(t.li,{children:(0,r.jsx)(t.a,{href:"https://trino.io/docs/current/sql/show-tables.html",children:"SHOW TABLES"})}),"\n"]}),"\n",(0,r.jsx)(t.h3,{id:"write-operations",children:"Write operations"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{children:(0,r.jsx)(t.a,{href:"https://trino.io/docs/current/sql/insert.html",children:"INSERT"})}),"\n",(0,r.jsx)(t.li,{children:(0,r.jsx)(t.a,{href:"https://trino.io/docs/current/sql/insert.html",children:"INSERT INTO SELECT"})}),"\n"]}),"\n",(0,r.jsx)(t.h3,{id:"schema-and-table-management",children:"Schema and table management"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{children:(0,r.jsx)(t.a,{href:"https://trino.io/docs/current/sql/create-table.html",children:"CREATE TABLE"})}),"\n",(0,r.jsx)(t.li,{children:(0,r.jsx)(t.a,{href:"https://trino.io/docs/current/sql/drop-table.html",children:"DROP TABLE"})}),"\n",(0,r.jsx)(t.li,{children:(0,r.jsx)(t.a,{href:"https://trino.io/docs/current/sql/alter-table.html",children:"ALTER TABLE"})}),"\n",(0,r.jsx)(t.li,{children:(0,r.jsx)(t.a,{href:"https://trino.io/docs/current/sql/create-schema.html",children:"CREATE SCHEMA"})}),"\n",(0,r.jsx)(t.li,{children:(0,r.jsx)(t.a,{href:"https://trino.io/docs/current/sql/drop-schema.html",children:"DROP SCHEMA"})}),"\n",(0,r.jsx)(t.li,{children:(0,r.jsx)(t.a,{href:"https://trino.io/docs/current/sql/comment.html",children:"COMMENT"})}),"\n"]}),"\n",(0,r.jsx)(t.h3,{id:"transactions",children:"Transactions"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{children:(0,r.jsx)(t.a,{href:"https://trino.io/docs/current/sql/start-transaction.html",children:"START TRANSACTION"})}),"\n",(0,r.jsx)(t.li,{children:(0,r.jsx)(t.a,{href:"https://trino.io/docs/current/sql/commit.html",children:"COMMIT"})}),"\n",(0,r.jsx)(t.li,{children:(0,r.jsx)(t.a,{href:"https://trino.io/docs/current/sql/rollback.html",children:"ROLLBACK"})}),"\n"]}),"\n",(0,r.jsxs)(t.p,{children:["For more information, please refer to Trino ",(0,r.jsx)(t.a,{href:"https://trino.io/docs/current/language/sql-support.html#sql-globally-available",children:"SQL statements support"})]})]})}function d(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}}}]);