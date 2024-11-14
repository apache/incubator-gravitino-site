"use strict";(self.webpackChunkapache_website_template=self.webpackChunkapache_website_template||[]).push([[76897],{75048:(e,i,n)=>{n.r(i),n.d(i,{assets:()=>o,contentTitle:()=>d,default:()=>j,frontMatter:()=>l,metadata:()=>c,toc:()=>h});var t=n(13274),s=n(8438),r=n(83593),a=n(5237);const l={title:"Apache Doris catalog",slug:"/jdbc-doris-catalog",keywords:["jdbc","Apache Doris","metadata"],license:"This software is licensed under the Apache License version 2."},d=void 0,c={id:"jdbc-doris-catalog",title:"Apache Doris catalog",description:"Introduction",source:"@site/versioned_docs/version-0.6.1-incubating/jdbc-doris-catalog.md",sourceDirName:".",slug:"/jdbc-doris-catalog",permalink:"/docs/0.6.1-incubating/jdbc-doris-catalog",draft:!1,unlisted:!1,editUrl:"https://github.com/apache/gravitino-site/tree/main/docs/jdbc-doris-catalog.md",tags:[],version:"0.6.1-incubating",lastUpdatedBy:"Jerry Shao",lastUpdatedAt:1731579332e3,frontMatter:{title:"Apache Doris catalog",slug:"/jdbc-doris-catalog",keywords:["jdbc","Apache Doris","metadata"],license:"This software is licensed under the Apache License version 2."},sidebar:"docs",previous:{title:"PostgreSQL catalog",permalink:"/docs/0.6.1-incubating/jdbc-postgresql-catalog"},next:{title:"Paimon catalog",permalink:"/docs/0.6.1-incubating/lakehouse-paimon-catalog"}},o={},h=[{value:"Introduction",id:"introduction",level:2},{value:"Catalog",id:"catalog",level:2},{value:"Catalog capabilities",id:"catalog-capabilities",level:3},{value:"Catalog properties",id:"catalog-properties",level:3},{value:"Catalog operations",id:"catalog-operations",level:3},{value:"Schema",id:"schema",level:2},{value:"Schema capabilities",id:"schema-capabilities",level:3},{value:"Schema properties",id:"schema-properties",level:3},{value:"Schema operations",id:"schema-operations",level:3},{value:"Table",id:"table",level:2},{value:"Table capabilities",id:"table-capabilities",level:3},{value:"Table column types",id:"table-column-types",level:4},{value:"Table column auto-increment",id:"table-column-auto-increment",level:4},{value:"Table properties",id:"table-properties",level:3},{value:"Table indexes",id:"table-indexes",level:3},{value:"Table partitions",id:"table-partitions",level:3},{value:"Table distribution",id:"table-distribution",level:3},{value:"Table operations",id:"table-operations",level:3},{value:"Alter table operations",id:"alter-table-operations",level:4}];function x(e){const i={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(i.h2,{id:"introduction",children:"Introduction"}),"\n",(0,t.jsxs)(i.p,{children:["Apache Gravitino provides the ability to manage ",(0,t.jsx)(i.a,{href:"https://doris.apache.org/",children:"Apache Doris"})," metadata through JDBC connection."]}),"\n",(0,t.jsx)(i.admonition,{type:"caution",children:(0,t.jsxs)(i.p,{children:["Gravitino saves some system information in schema and table comments, like\n",(0,t.jsx)(i.code,{children:"(From Gravitino, DO NOT EDIT: gravitino.v1.uid1078334182909406185)"}),", please don't change or remove this message."]})}),"\n",(0,t.jsx)(i.h2,{id:"catalog",children:"Catalog"}),"\n",(0,t.jsx)(i.h3,{id:"catalog-capabilities",children:"Catalog capabilities"}),"\n",(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsx)(i.li,{children:"Gravitino catalog corresponds to the Doris instance."}),"\n",(0,t.jsx)(i.li,{children:"Supports metadata management of Doris (1.2.x)."}),"\n",(0,t.jsx)(i.li,{children:"Supports table index."}),"\n",(0,t.jsxs)(i.li,{children:["Supports ",(0,t.jsx)(i.a,{href:"/docs/0.6.1-incubating/manage-relational-metadata-using-gravitino#table-column-default-value",children:"column default value"}),"."]}),"\n"]}),"\n",(0,t.jsx)(i.h3,{id:"catalog-properties",children:"Catalog properties"}),"\n",(0,t.jsxs)(i.p,{children:["You can pass to a Doris data source any property that isn't defined by Gravitino by adding\n",(0,t.jsx)(i.code,{children:"gravitino.bypass."})," prefix as a catalog property. For example, catalog property\n",(0,t.jsx)(i.code,{children:"gravitino.bypass.maxWaitMillis"})," will pass ",(0,t.jsx)(i.code,{children:"maxWaitMillis"})," to the data source property."]}),"\n",(0,t.jsxs)(i.p,{children:["You can check the relevant data source configuration in\n",(0,t.jsx)(i.a,{href:"https://commons.apache.org/proper/commons-dbcp/configuration.html",children:"data source properties"})," for\nmore details."]}),"\n",(0,t.jsxs)(i.p,{children:["Besides the ",(0,t.jsx)(i.a,{href:"/docs/0.6.1-incubating/gravitino-server-config#gravitino-catalog-properties-configuration",children:"common catalog properties"}),", the Doris catalog has the following properties:"]}),"\n",(0,t.jsxs)(i.table,{children:[(0,t.jsx)(i.thead,{children:(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.th,{children:"Configuration item"}),(0,t.jsx)(i.th,{children:"Description"}),(0,t.jsx)(i.th,{children:"Default value"}),(0,t.jsx)(i.th,{children:"Required"}),(0,t.jsx)(i.th,{children:"Since Version"})]})}),(0,t.jsxs)(i.tbody,{children:[(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.td,{children:(0,t.jsx)(i.code,{children:"jdbc-url"})}),(0,t.jsxs)(i.td,{children:["JDBC URL for connecting to the database. For example, ",(0,t.jsx)(i.code,{children:"jdbc:mysql://localhost:9030"})]}),(0,t.jsx)(i.td,{children:"(none)"}),(0,t.jsx)(i.td,{children:"Yes"}),(0,t.jsx)(i.td,{children:"0.5.0"})]}),(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.td,{children:(0,t.jsx)(i.code,{children:"jdbc-driver"})}),(0,t.jsxs)(i.td,{children:["The driver of the JDBC connection. For example, ",(0,t.jsx)(i.code,{children:"com.mysql.jdbc.Driver"}),"."]}),(0,t.jsx)(i.td,{children:"(none)"}),(0,t.jsx)(i.td,{children:"Yes"}),(0,t.jsx)(i.td,{children:"0.5.0"})]}),(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.td,{children:(0,t.jsx)(i.code,{children:"jdbc-user"})}),(0,t.jsx)(i.td,{children:"The JDBC user name."}),(0,t.jsx)(i.td,{children:"(none)"}),(0,t.jsx)(i.td,{children:"Yes"}),(0,t.jsx)(i.td,{children:"0.5.0"})]}),(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.td,{children:(0,t.jsx)(i.code,{children:"jdbc-password"})}),(0,t.jsx)(i.td,{children:"The JDBC password."}),(0,t.jsx)(i.td,{children:"(none)"}),(0,t.jsx)(i.td,{children:"Yes"}),(0,t.jsx)(i.td,{children:"0.5.0"})]}),(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.td,{children:(0,t.jsx)(i.code,{children:"jdbc.pool.min-size"})}),(0,t.jsxs)(i.td,{children:["The minimum number of connections in the pool. ",(0,t.jsx)(i.code,{children:"2"})," by default."]}),(0,t.jsx)(i.td,{children:(0,t.jsx)(i.code,{children:"2"})}),(0,t.jsx)(i.td,{children:"No"}),(0,t.jsx)(i.td,{children:"0.5.0"})]}),(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.td,{children:(0,t.jsx)(i.code,{children:"jdbc.pool.max-size"})}),(0,t.jsxs)(i.td,{children:["The maximum number of connections in the pool. ",(0,t.jsx)(i.code,{children:"10"})," by default."]}),(0,t.jsx)(i.td,{children:(0,t.jsx)(i.code,{children:"10"})}),(0,t.jsx)(i.td,{children:"No"}),(0,t.jsx)(i.td,{children:"0.5.0"})]}),(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.td,{children:(0,t.jsx)(i.code,{children:"jdbc.pool.max-size"})}),(0,t.jsxs)(i.td,{children:["The maximum number of connections in the pool. ",(0,t.jsx)(i.code,{children:"10"})," by default."]}),(0,t.jsx)(i.td,{children:(0,t.jsx)(i.code,{children:"10"})}),(0,t.jsx)(i.td,{children:"No"}),(0,t.jsx)(i.td,{children:"0.5.0"})]}),(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.td,{children:(0,t.jsx)(i.code,{children:"replication_num"})}),(0,t.jsxs)(i.td,{children:["The number of replications for the table. If not specified and the number of backend servers less than 3, then the default value is 1; If not specified and the number of backend servers greater or equals to 3, the default value (3) in Doris server will be used. For more, please see the ",(0,t.jsx)(i.a,{href:"https://doris.apache.org/docs/1.2/sql-manual/sql-reference/Data-Definition-Statements/Create/CREATE-TABLE/",children:"doc"})]}),(0,t.jsxs)(i.td,{children:[(0,t.jsx)(i.code,{children:"1"})," or ",(0,t.jsx)(i.code,{children:"3"})]}),(0,t.jsx)(i.td,{children:"No"}),(0,t.jsx)(i.td,{children:"0.6.0-incubating"})]})]})]}),"\n",(0,t.jsxs)(i.p,{children:["Before using the Doris Catalog, you must download the corresponding JDBC driver to the ",(0,t.jsx)(i.code,{children:"catalogs/jdbc-doris/libs"})," directory.\nGravitino doesn't package the JDBC driver for Doris due to licensing issues."]}),"\n",(0,t.jsx)(i.h3,{id:"catalog-operations",children:"Catalog operations"}),"\n",(0,t.jsxs)(i.p,{children:["Refer to ",(0,t.jsx)(i.a,{href:"/docs/0.6.1-incubating/manage-relational-metadata-using-gravitino#catalog-operations",children:"Manage Relational Metadata Using Gravitino"})," for more details."]}),"\n",(0,t.jsx)(i.h2,{id:"schema",children:"Schema"}),"\n",(0,t.jsx)(i.h3,{id:"schema-capabilities",children:"Schema capabilities"}),"\n",(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsx)(i.li,{children:"Gravitino's schema concept corresponds to the Doris database."}),"\n",(0,t.jsx)(i.li,{children:"Supports creating schema."}),"\n",(0,t.jsx)(i.li,{children:"Supports dropping schema."}),"\n"]}),"\n",(0,t.jsx)(i.h3,{id:"schema-properties",children:"Schema properties"}),"\n",(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsx)(i.li,{children:"Support schema properties, including Doris database properties and user-defined properties."}),"\n"]}),"\n",(0,t.jsx)(i.h3,{id:"schema-operations",children:"Schema operations"}),"\n",(0,t.jsxs)(i.p,{children:["Please refer to\n",(0,t.jsx)(i.a,{href:"/docs/0.6.1-incubating/manage-relational-metadata-using-gravitino#schema-operations",children:"Manage Relational Metadata Using Gravitino"})," for more details."]}),"\n",(0,t.jsx)(i.h2,{id:"table",children:"Table"}),"\n",(0,t.jsx)(i.h3,{id:"table-capabilities",children:"Table capabilities"}),"\n",(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsx)(i.li,{children:"Gravitino's table concept corresponds to the Doris table."}),"\n",(0,t.jsx)(i.li,{children:"Supports index."}),"\n",(0,t.jsxs)(i.li,{children:["Supports ",(0,t.jsx)(i.a,{href:"/docs/0.6.1-incubating/manage-relational-metadata-using-gravitino#table-column-default-value",children:"column default value"}),"."]}),"\n"]}),"\n",(0,t.jsx)(i.h4,{id:"table-column-types",children:"Table column types"}),"\n",(0,t.jsxs)(i.table,{children:[(0,t.jsx)(i.thead,{children:(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.th,{children:"Gravitino Type"}),(0,t.jsx)(i.th,{children:"Doris Type"})]})}),(0,t.jsxs)(i.tbody,{children:[(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.td,{children:(0,t.jsx)(i.code,{children:"Boolean"})}),(0,t.jsx)(i.td,{children:(0,t.jsx)(i.code,{children:"Boolean"})})]}),(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.td,{children:(0,t.jsx)(i.code,{children:"Byte"})}),(0,t.jsx)(i.td,{children:(0,t.jsx)(i.code,{children:"TinyInt"})})]}),(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.td,{children:(0,t.jsx)(i.code,{children:"Short"})}),(0,t.jsx)(i.td,{children:(0,t.jsx)(i.code,{children:"SmallInt"})})]}),(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.td,{children:(0,t.jsx)(i.code,{children:"Integer"})}),(0,t.jsx)(i.td,{children:(0,t.jsx)(i.code,{children:"Int"})})]}),(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.td,{children:(0,t.jsx)(i.code,{children:"Long"})}),(0,t.jsx)(i.td,{children:(0,t.jsx)(i.code,{children:"BigInt"})})]}),(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.td,{children:(0,t.jsx)(i.code,{children:"Float"})}),(0,t.jsx)(i.td,{children:(0,t.jsx)(i.code,{children:"Float"})})]}),(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.td,{children:(0,t.jsx)(i.code,{children:"Double"})}),(0,t.jsx)(i.td,{children:(0,t.jsx)(i.code,{children:"Double"})})]}),(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.td,{children:(0,t.jsx)(i.code,{children:"Decimal"})}),(0,t.jsx)(i.td,{children:(0,t.jsx)(i.code,{children:"Decimal"})})]}),(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.td,{children:(0,t.jsx)(i.code,{children:"Date"})}),(0,t.jsx)(i.td,{children:(0,t.jsx)(i.code,{children:"Date"})})]}),(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.td,{children:(0,t.jsx)(i.code,{children:"Timestamp"})}),(0,t.jsx)(i.td,{children:(0,t.jsx)(i.code,{children:"Datetime"})})]}),(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.td,{children:(0,t.jsx)(i.code,{children:"VarChar"})}),(0,t.jsx)(i.td,{children:(0,t.jsx)(i.code,{children:"VarChar"})})]}),(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.td,{children:(0,t.jsx)(i.code,{children:"FixedChar"})}),(0,t.jsx)(i.td,{children:(0,t.jsx)(i.code,{children:"Char"})})]}),(0,t.jsxs)(i.tr,{children:[(0,t.jsx)(i.td,{children:(0,t.jsx)(i.code,{children:"String"})}),(0,t.jsx)(i.td,{children:(0,t.jsx)(i.code,{children:"String"})})]})]})]}),"\n",(0,t.jsxs)(i.p,{children:["Doris doesn't support Gravitino ",(0,t.jsx)(i.code,{children:"Fixed"})," ",(0,t.jsx)(i.code,{children:"Struct"})," ",(0,t.jsx)(i.code,{children:"List"})," ",(0,t.jsx)(i.code,{children:"Map"})," ",(0,t.jsx)(i.code,{children:"Timestamp_tz"})," ",(0,t.jsx)(i.code,{children:"IntervalDay"})," ",(0,t.jsx)(i.code,{children:"IntervalYear"})," ",(0,t.jsx)(i.code,{children:"Union"})," ",(0,t.jsx)(i.code,{children:"UUID"})," type.\nThe data types other than those listed above are mapped to Gravitino's\n",(0,t.jsx)(i.strong,{children:(0,t.jsx)(i.a,{href:"/docs/0.6.1-incubating/manage-relational-metadata-using-gravitino#unparsed-type",children:"Unparsed Type"})})," that\nrepresents an unresolvable data type since 0.5.0."]}),"\n",(0,t.jsx)(i.h4,{id:"table-column-auto-increment",children:"Table column auto-increment"}),"\n",(0,t.jsx)(i.p,{children:"Unsupported for now."}),"\n",(0,t.jsx)(i.h3,{id:"table-properties",children:"Table properties"}),"\n",(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsx)(i.li,{children:"Doris supports table properties, and you can set them in the table properties."}),"\n",(0,t.jsx)(i.li,{children:"Only supports Doris table properties and doesn't support user-defined properties."}),"\n"]}),"\n",(0,t.jsx)(i.h3,{id:"table-indexes",children:"Table indexes"}),"\n",(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsxs)(i.li,{children:["\n",(0,t.jsx)(i.p,{children:"Supports PRIMARY_KEY"}),"\n",(0,t.jsx)(i.p,{children:"Please be aware that the index can only apply to a single column."}),"\n",(0,t.jsxs)(r.A,{groupId:"language",queryString:!0,children:[(0,t.jsx)(a.default,{value:"json",label:"Json",children:(0,t.jsx)(i.pre,{children:(0,t.jsx)(i.code,{className:"language-json",children:'{\n  "indexes": [\n    {\n      "indexType": "primary_key",\n      "name": "PRIMARY",\n      "fieldNames": [["id"]]\n    }\n  ]\n}\n'})})}),(0,t.jsx)(a.default,{value:"java",label:"Java",children:(0,t.jsx)(i.pre,{children:(0,t.jsx)(i.code,{className:"language-java",children:'Index[] indexes = new Index[] {\n    Indexes.of(IndexType.PRIMARY_KEY, "PRIMARY", new String[][]{{"id"}})\n}\n'})})})]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(i.h3,{id:"table-partitions",children:"Table partitions"}),"\n",(0,t.jsx)(i.p,{children:"The Doris catalog supports partitioned tables.\nUsers can create partitioned tables in the Doris catalog with specific partitioning attributes. It is also supported to pre-assign partitions when creating Doris tables.\nNote that although Gravitino supports several partitioning strategies, Apache Doris inherently only supports these two partitioning strategies:"}),"\n",(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsx)(i.li,{children:(0,t.jsx)(i.code,{children:"RANGE"})}),"\n",(0,t.jsx)(i.li,{children:(0,t.jsx)(i.code,{children:"LIST"})}),"\n"]}),"\n",(0,t.jsx)(i.admonition,{type:"caution",children:(0,t.jsxs)(i.p,{children:["The ",(0,t.jsx)(i.code,{children:"fieldName"})," specified in the partitioning attributes must be the name of columns defined in the table."]})}),"\n",(0,t.jsx)(i.h3,{id:"table-distribution",children:"Table distribution"}),"\n",(0,t.jsx)(i.p,{children:"Users can also specify the distribution strategy when creating tables in the Doris catalog. Currently, the Doris catalog supports the following distribution strategies:"}),"\n",(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsx)(i.li,{children:(0,t.jsx)(i.code,{children:"HASH"})}),"\n",(0,t.jsx)(i.li,{children:(0,t.jsx)(i.code,{children:"RANDOM"})}),"\n"]}),"\n",(0,t.jsxs)(i.p,{children:["For the ",(0,t.jsx)(i.code,{children:"RANDOM"})," distribution strategy, Gravitino uses the ",(0,t.jsx)(i.code,{children:"EVEN"})," to represent it. More information about the distribution strategy defined in Gravitino can be found ",(0,t.jsx)(i.a,{href:"/docs/0.6.1-incubating/table-partitioning-distribution-sort-order-indexes#table-distribution",children:"here"}),"."]}),"\n",(0,t.jsx)(i.h3,{id:"table-operations",children:"Table operations"}),"\n",(0,t.jsxs)(i.p,{children:["Please refer to ",(0,t.jsx)(i.a,{href:"/docs/0.6.1-incubating/manage-relational-metadata-using-gravitino#table-operations",children:"Manage Relational Metadata Using Gravitino"})," for more details."]}),"\n",(0,t.jsx)(i.h4,{id:"alter-table-operations",children:"Alter table operations"}),"\n",(0,t.jsx)(i.p,{children:"Gravitino supports these table alteration operations:"}),"\n",(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsx)(i.li,{children:(0,t.jsx)(i.code,{children:"RenameTable"})}),"\n",(0,t.jsx)(i.li,{children:(0,t.jsx)(i.code,{children:"UpdateComment"})}),"\n",(0,t.jsx)(i.li,{children:(0,t.jsx)(i.code,{children:"AddColumn"})}),"\n",(0,t.jsx)(i.li,{children:(0,t.jsx)(i.code,{children:"DeleteColumn"})}),"\n",(0,t.jsx)(i.li,{children:(0,t.jsx)(i.code,{children:"UpdateColumnType"})}),"\n",(0,t.jsx)(i.li,{children:(0,t.jsx)(i.code,{children:"UpdateColumnPosition"})}),"\n",(0,t.jsx)(i.li,{children:(0,t.jsx)(i.code,{children:"UpdateColumnComment"})}),"\n",(0,t.jsx)(i.li,{children:(0,t.jsx)(i.code,{children:"SetProperty"})}),"\n"]}),"\n",(0,t.jsx)(i.p,{children:"Please be aware that:"}),"\n",(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsx)(i.li,{children:"Not all table alteration operations can be processed in batches."}),"\n",(0,t.jsx)(i.li,{children:"Schema changes, such as adding/modifying/dropping columns can be processed in batches."}),"\n",(0,t.jsx)(i.li,{children:"Supports modifying multiple column comments at the same time."}),"\n",(0,t.jsx)(i.li,{children:"Doesn't support modifying the column type and column comment at the same time."}),"\n",(0,t.jsx)(i.li,{children:"The schema alteration in Doris is asynchronous. You might get an outdated schema if you\nexecute a schema query immediately after the alteration. It is recommended to pause briefly\nafter the schema alteration. Gravitino will add the schema alteration status into\nthe schema information in the upcoming version to solve this problem."}),"\n"]})]})}function j(e={}){const{wrapper:i}={...(0,s.R)(),...e.components};return i?(0,t.jsx)(i,{...e,children:(0,t.jsx)(x,{...e})}):x(e)}},83593:(e,i,n)=>{n.d(i,{A:()=>j});var t=n(79474),s=n(13526),r=n(23544),a=n(45263),l=n(9805);const d={tabList:"tabList_m5Qj",tabItem:"tabItem_R4qO"};var c=n(13274);function o(e){let{className:i,block:n,selectedValue:t,selectValue:a,tabValues:l}=e;const o=[],{blockElementScrollPositionUntilNextRender:h}=(0,r.a_)(),x=e=>{const i=e.currentTarget,n=o.indexOf(i),s=l[n].value;s!==t&&(h(i),a(s))},j=e=>{let i=null;switch(e.key){case"Enter":x(e);break;case"ArrowRight":{const n=o.indexOf(e.currentTarget)+1;i=o[n]??o[0];break}case"ArrowLeft":{const n=o.indexOf(e.currentTarget)-1;i=o[n]??o[o.length-1];break}}i?.focus()};return(0,c.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.A)("tabs",{"tabs--block":n},i),children:l.map((e=>{let{value:i,label:n,attributes:r}=e;return(0,c.jsx)("li",{role:"tab",tabIndex:t===i?0:-1,"aria-selected":t===i,ref:e=>o.push(e),onKeyDown:j,onClick:x,...r,className:(0,s.A)("tabs__item",d.tabItem,r?.className,{"tabs__item--active":t===i}),children:n??i},i)}))})}function h(e){let{lazy:i,children:n,selectedValue:s}=e;const r=(Array.isArray(n)?n:[n]).filter(Boolean);if(i){const e=r.find((e=>e.props.value===s));return e?(0,t.cloneElement)(e,{className:"margin-top--md"}):null}return(0,c.jsx)("div",{className:"margin-top--md",children:r.map(((e,i)=>(0,t.cloneElement)(e,{key:i,hidden:e.props.value!==s})))})}function x(e){const i=(0,a.u)(e);return(0,c.jsxs)("div",{className:(0,s.A)("tabs-container",d.tabList),children:[(0,c.jsx)(o,{...i,...e}),(0,c.jsx)(h,{...i,...e})]})}function j(e){const i=(0,l.default)();return(0,c.jsx)(x,{...e,children:(0,a.v)(e.children)},String(i))}}}]);