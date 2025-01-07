"use strict";(self.webpackChunkapache_website_template=self.webpackChunkapache_website_template||[]).push([[50935],{46826:(e,i,t)=>{t.r(i),t.d(i,{assets:()=>r,contentTitle:()=>l,default:()=>h,frontMatter:()=>s,metadata:()=>d,toc:()=>c});var n=t(13274),a=t(38112);t(52276),t(73394);const s={title:"Hudi catalog",slug:"/lakehouse-hudi-catalog",keywords:["lakehouse","hudi","metadata"],license:"This software is licensed under the Apache License version 2."},l=void 0,d={id:"lakehouse-hudi-catalog",title:"Hudi catalog",description:"Introduction",source:"@site/versioned_docs/version-0.7.0-incubating/lakehouse-hudi-catalog.md",sourceDirName:".",slug:"/lakehouse-hudi-catalog",permalink:"/docs/0.7.0-incubating/lakehouse-hudi-catalog",draft:!1,unlisted:!1,editUrl:"https://github.com/apache/gravitino-site/tree/main/docs/lakehouse-hudi-catalog.md",tags:[],version:"0.7.0-incubating",lastUpdatedBy:"Justin Mclean",lastUpdatedAt:1736293697e3,frontMatter:{title:"Hudi catalog",slug:"/lakehouse-hudi-catalog",keywords:["lakehouse","hudi","metadata"],license:"This software is licensed under the Apache License version 2."},sidebar:"docs",previous:{title:"Paimon catalog",permalink:"/docs/0.7.0-incubating/lakehouse-paimon-catalog"},next:{title:"OceanBase catalog",permalink:"/docs/0.7.0-incubating/jdbc-oceanbase-catalog"}},r={},c=[{value:"Introduction",id:"introduction",level:2},{value:"Requirements and limitations",id:"requirements-and-limitations",level:3},{value:"Catalog",id:"catalog",level:2},{value:"Catalog capabilities",id:"catalog-capabilities",level:3},{value:"Catalog properties",id:"catalog-properties",level:3},{value:"Catalog operations",id:"catalog-operations",level:3},{value:"Schema",id:"schema",level:2},{value:"Schema capabilities",id:"schema-capabilities",level:3},{value:"Schema properties",id:"schema-properties",level:3},{value:"Schema operations",id:"schema-operations",level:3},{value:"Table",id:"table",level:2},{value:"Table capabilities",id:"table-capabilities",level:3},{value:"Table partitions",id:"table-partitions",level:3},{value:"Table sort orders",id:"table-sort-orders",level:3},{value:"Table distributions",id:"table-distributions",level:3},{value:"Table indexes",id:"table-indexes",level:3},{value:"Table properties",id:"table-properties",level:3},{value:"Table column types",id:"table-column-types",level:3},{value:"Table operations",id:"table-operations",level:3}];function o(e){const i={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,a.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(i.h2,{id:"introduction",children:"Introduction"}),"\n",(0,n.jsx)(i.p,{children:"Apache Gravitino provides the ability to manage Apache Hudi metadata."}),"\n",(0,n.jsx)(i.h3,{id:"requirements-and-limitations",children:"Requirements and limitations"}),"\n",(0,n.jsx)(i.admonition,{type:"info",children:(0,n.jsxs)(i.p,{children:["Tested and verified with Apache Hudi ",(0,n.jsx)(i.code,{children:"0.15.0"}),"."]})}),"\n",(0,n.jsx)(i.h2,{id:"catalog",children:"Catalog"}),"\n",(0,n.jsx)(i.h3,{id:"catalog-capabilities",children:"Catalog capabilities"}),"\n",(0,n.jsxs)(i.ul,{children:["\n",(0,n.jsxs)(i.li,{children:["Works as a catalog proxy, supporting ",(0,n.jsx)(i.code,{children:"HMS"})," as catalog backend."]}),"\n",(0,n.jsx)(i.li,{children:"Only support read operations (list and load) for Hudi schemas and tables."}),"\n",(0,n.jsx)(i.li,{children:"Doesn't support timeline management operations now."}),"\n"]}),"\n",(0,n.jsx)(i.h3,{id:"catalog-properties",children:"Catalog properties"}),"\n",(0,n.jsxs)(i.table,{children:[(0,n.jsx)(i.thead,{children:(0,n.jsxs)(i.tr,{children:[(0,n.jsx)(i.th,{children:"Property name"}),(0,n.jsx)(i.th,{children:"Description"}),(0,n.jsx)(i.th,{children:"Default value"}),(0,n.jsx)(i.th,{children:"Required"}),(0,n.jsx)(i.th,{children:"Since Version"})]})}),(0,n.jsxs)(i.tbody,{children:[(0,n.jsxs)(i.tr,{children:[(0,n.jsx)(i.td,{children:(0,n.jsx)(i.code,{children:"catalog-backend"})}),(0,n.jsxs)(i.td,{children:["Catalog backend of Gravitino Hudi catalog. Only supports ",(0,n.jsx)(i.code,{children:"hms"})," now."]}),(0,n.jsx)(i.td,{children:"(none)"}),(0,n.jsx)(i.td,{children:"Yes"}),(0,n.jsx)(i.td,{children:"0.7.0-incubating"})]}),(0,n.jsxs)(i.tr,{children:[(0,n.jsx)(i.td,{children:(0,n.jsx)(i.code,{children:"uri"})}),(0,n.jsxs)(i.td,{children:["The URI associated with the backend. Such as ",(0,n.jsx)(i.code,{children:"thrift://127.0.0.1:9083"})," for HMS backend."]}),(0,n.jsx)(i.td,{children:"(none)"}),(0,n.jsx)(i.td,{children:"Yes"}),(0,n.jsx)(i.td,{children:"0.7.0-incubating"})]}),(0,n.jsxs)(i.tr,{children:[(0,n.jsx)(i.td,{children:(0,n.jsx)(i.code,{children:"client.pool-size"})}),(0,n.jsx)(i.td,{children:"For HMS backend. The maximum number of Hive metastore clients in the pool for Gravitino."}),(0,n.jsx)(i.td,{children:"1"}),(0,n.jsx)(i.td,{children:"No"}),(0,n.jsx)(i.td,{children:"0.7.0-incubating"})]}),(0,n.jsxs)(i.tr,{children:[(0,n.jsx)(i.td,{children:(0,n.jsx)(i.code,{children:"client.pool-cache.eviction-interval-ms"})}),(0,n.jsx)(i.td,{children:"For HMS backend. The cache pool eviction interval."}),(0,n.jsx)(i.td,{children:"300000"}),(0,n.jsx)(i.td,{children:"No"}),(0,n.jsx)(i.td,{children:"0.7.0-incubating"})]}),(0,n.jsxs)(i.tr,{children:[(0,n.jsx)(i.td,{children:(0,n.jsx)(i.code,{children:"gravitino.bypass."})}),(0,n.jsxs)(i.td,{children:["Property name with this prefix passed down to the underlying backend client for use. Such as ",(0,n.jsx)(i.code,{children:"gravitino.bypass.hive.metastore.failure.retries = 3"})," indicate 3 times of retries upon failure of Thrift metastore calls for HMS backend."]}),(0,n.jsx)(i.td,{children:"(none)"}),(0,n.jsx)(i.td,{children:"No"}),(0,n.jsx)(i.td,{children:"0.7.0-incubating"})]})]})]}),"\n",(0,n.jsx)(i.h3,{id:"catalog-operations",children:"Catalog operations"}),"\n",(0,n.jsxs)(i.p,{children:["Please refer to ",(0,n.jsx)(i.a,{href:"/docs/0.7.0-incubating/manage-relational-metadata-using-gravitino#catalog-operations",children:"Manage Relational Metadata Using Gravitino"})," for more details."]}),"\n",(0,n.jsx)(i.h2,{id:"schema",children:"Schema"}),"\n",(0,n.jsx)(i.h3,{id:"schema-capabilities",children:"Schema capabilities"}),"\n",(0,n.jsxs)(i.ul,{children:["\n",(0,n.jsx)(i.li,{children:"Only support read operations: listSchema, loadSchema, and schemaExists."}),"\n"]}),"\n",(0,n.jsx)(i.h3,{id:"schema-properties",children:"Schema properties"}),"\n",(0,n.jsxs)(i.ul,{children:["\n",(0,n.jsxs)(i.li,{children:["The ",(0,n.jsx)(i.code,{children:"Location"})," is an optional property that shows the storage path to the Hudi database"]}),"\n"]}),"\n",(0,n.jsx)(i.h3,{id:"schema-operations",children:"Schema operations"}),"\n",(0,n.jsxs)(i.p,{children:["Only support read operations: listSchema, loadSchema, and schemaExists.\nPlease refer to ",(0,n.jsx)(i.a,{href:"/docs/0.7.0-incubating/manage-relational-metadata-using-gravitino#schema-operations",children:"Manage Relational Metadata Using Gravitino"})," for more details."]}),"\n",(0,n.jsx)(i.h2,{id:"table",children:"Table"}),"\n",(0,n.jsx)(i.h3,{id:"table-capabilities",children:"Table capabilities"}),"\n",(0,n.jsxs)(i.ul,{children:["\n",(0,n.jsx)(i.li,{children:"Only support read operations: listTable, loadTable, and tableExists."}),"\n"]}),"\n",(0,n.jsx)(i.h3,{id:"table-partitions",children:"Table partitions"}),"\n",(0,n.jsxs)(i.ul,{children:["\n",(0,n.jsx)(i.li,{children:"Support loading Hudi partitioned tables (Hudi only supports identity partitioning)."}),"\n"]}),"\n",(0,n.jsx)(i.h3,{id:"table-sort-orders",children:"Table sort orders"}),"\n",(0,n.jsxs)(i.ul,{children:["\n",(0,n.jsx)(i.li,{children:"Doesn't support table sort orders."}),"\n"]}),"\n",(0,n.jsx)(i.h3,{id:"table-distributions",children:"Table distributions"}),"\n",(0,n.jsxs)(i.ul,{children:["\n",(0,n.jsx)(i.li,{children:"Doesn't support table distributions."}),"\n"]}),"\n",(0,n.jsx)(i.h3,{id:"table-indexes",children:"Table indexes"}),"\n",(0,n.jsxs)(i.ul,{children:["\n",(0,n.jsx)(i.li,{children:"Doesn't support table indexes."}),"\n"]}),"\n",(0,n.jsx)(i.h3,{id:"table-properties",children:"Table properties"}),"\n",(0,n.jsxs)(i.ul,{children:["\n",(0,n.jsx)(i.li,{children:"For HMS backend, it will bring out all the table parameters from the HMS."}),"\n"]}),"\n",(0,n.jsx)(i.h3,{id:"table-column-types",children:"Table column types"}),"\n",(0,n.jsxs)(i.p,{children:["The following table shows the mapping between Gravitino and ",(0,n.jsx)(i.a,{href:"https://hudi.apache.org/docs/sql_ddl#supported-types",children:"Apache Hudi column types"}),":"]}),"\n",(0,n.jsxs)(i.table,{children:[(0,n.jsx)(i.thead,{children:(0,n.jsxs)(i.tr,{children:[(0,n.jsx)(i.th,{children:"Gravitino Type"}),(0,n.jsx)(i.th,{children:"Apache Hudi Type"})]})}),(0,n.jsxs)(i.tbody,{children:[(0,n.jsxs)(i.tr,{children:[(0,n.jsx)(i.td,{children:(0,n.jsx)(i.code,{children:"boolean"})}),(0,n.jsx)(i.td,{children:(0,n.jsx)(i.code,{children:"boolean"})})]}),(0,n.jsxs)(i.tr,{children:[(0,n.jsx)(i.td,{children:(0,n.jsx)(i.code,{children:"integer"})}),(0,n.jsx)(i.td,{children:(0,n.jsx)(i.code,{children:"int"})})]}),(0,n.jsxs)(i.tr,{children:[(0,n.jsx)(i.td,{children:(0,n.jsx)(i.code,{children:"long"})}),(0,n.jsx)(i.td,{children:(0,n.jsx)(i.code,{children:"long"})})]}),(0,n.jsxs)(i.tr,{children:[(0,n.jsx)(i.td,{children:(0,n.jsx)(i.code,{children:"date"})}),(0,n.jsx)(i.td,{children:(0,n.jsx)(i.code,{children:"date"})})]}),(0,n.jsxs)(i.tr,{children:[(0,n.jsx)(i.td,{children:(0,n.jsx)(i.code,{children:"timestamp"})}),(0,n.jsx)(i.td,{children:(0,n.jsx)(i.code,{children:"timestamp"})})]}),(0,n.jsxs)(i.tr,{children:[(0,n.jsx)(i.td,{children:(0,n.jsx)(i.code,{children:"float"})}),(0,n.jsx)(i.td,{children:(0,n.jsx)(i.code,{children:"float"})})]}),(0,n.jsxs)(i.tr,{children:[(0,n.jsx)(i.td,{children:(0,n.jsx)(i.code,{children:"double"})}),(0,n.jsx)(i.td,{children:(0,n.jsx)(i.code,{children:"double"})})]}),(0,n.jsxs)(i.tr,{children:[(0,n.jsx)(i.td,{children:(0,n.jsx)(i.code,{children:"string"})}),(0,n.jsx)(i.td,{children:(0,n.jsx)(i.code,{children:"string"})})]}),(0,n.jsxs)(i.tr,{children:[(0,n.jsx)(i.td,{children:(0,n.jsx)(i.code,{children:"decimal"})}),(0,n.jsx)(i.td,{children:(0,n.jsx)(i.code,{children:"decimal"})})]}),(0,n.jsxs)(i.tr,{children:[(0,n.jsx)(i.td,{children:(0,n.jsx)(i.code,{children:"binary"})}),(0,n.jsx)(i.td,{children:(0,n.jsx)(i.code,{children:"bytes"})})]}),(0,n.jsxs)(i.tr,{children:[(0,n.jsx)(i.td,{children:(0,n.jsx)(i.code,{children:"array"})}),(0,n.jsx)(i.td,{children:(0,n.jsx)(i.code,{children:"array"})})]}),(0,n.jsxs)(i.tr,{children:[(0,n.jsx)(i.td,{children:(0,n.jsx)(i.code,{children:"map"})}),(0,n.jsx)(i.td,{children:(0,n.jsx)(i.code,{children:"map"})})]}),(0,n.jsxs)(i.tr,{children:[(0,n.jsx)(i.td,{children:(0,n.jsx)(i.code,{children:"struct"})}),(0,n.jsx)(i.td,{children:(0,n.jsx)(i.code,{children:"struct"})})]})]})]}),"\n",(0,n.jsx)(i.h3,{id:"table-operations",children:"Table operations"}),"\n",(0,n.jsxs)(i.p,{children:["Only support read operations: listTable, loadTable, and tableExists.\nPlease refer to ",(0,n.jsx)(i.a,{href:"/docs/0.7.0-incubating/manage-relational-metadata-using-gravitino#table-operations",children:"Manage Relational Metadata Using Gravitino"})," for more details."]})]})}function h(e={}){const{wrapper:i}={...(0,a.R)(),...e.components};return i?(0,n.jsx)(i,{...e,children:(0,n.jsx)(o,{...e})}):o(e)}},52276:(e,i,t)=>{t.d(i,{A:()=>j});var n=t(79474),a=t(13526),s=t(67697),l=t(24382),d=t(22972);const r={tabList:"tabList_Vy7e",tabItem:"tabItem_kHuZ"};var c=t(13274);function o(e){let{className:i,block:t,selectedValue:n,selectValue:l,tabValues:d}=e;const o=[],{blockElementScrollPositionUntilNextRender:h}=(0,s.a_)(),x=e=>{const i=e.currentTarget,t=o.indexOf(i),a=d[t].value;a!==n&&(h(i),l(a))},j=e=>{let i=null;switch(e.key){case"Enter":x(e);break;case"ArrowRight":{const t=o.indexOf(e.currentTarget)+1;i=o[t]??o[0];break}case"ArrowLeft":{const t=o.indexOf(e.currentTarget)-1;i=o[t]??o[o.length-1];break}}i?.focus()};return(0,c.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.A)("tabs",{"tabs--block":t},i),children:d.map((e=>{let{value:i,label:t,attributes:s}=e;return(0,c.jsx)("li",{role:"tab",tabIndex:n===i?0:-1,"aria-selected":n===i,ref:e=>o.push(e),onKeyDown:j,onClick:x,...s,className:(0,a.A)("tabs__item",r.tabItem,s?.className,{"tabs__item--active":n===i}),children:t??i},i)}))})}function h(e){let{lazy:i,children:t,selectedValue:a}=e;const s=(Array.isArray(t)?t:[t]).filter(Boolean);if(i){const e=s.find((e=>e.props.value===a));return e?(0,n.cloneElement)(e,{className:"margin-top--md"}):null}return(0,c.jsx)("div",{className:"margin-top--md",children:s.map(((e,i)=>(0,n.cloneElement)(e,{key:i,hidden:e.props.value!==a})))})}function x(e){const i=(0,l.u)(e);return(0,c.jsxs)("div",{className:(0,a.A)("tabs-container",r.tabList),children:[(0,c.jsx)(o,{...i,...e}),(0,c.jsx)(h,{...i,...e})]})}function j(e){const i=(0,d.default)();return(0,c.jsx)(x,{...e,children:(0,l.v)(e.children)},String(i))}}}]);