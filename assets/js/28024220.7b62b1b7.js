"use strict";(self.webpackChunkapache_website_template=self.webpackChunkapache_website_template||[]).push([[74251],{43145:(e,i,n)=>{n.r(i),n.d(i,{assets:()=>a,contentTitle:()=>t,default:()=>h,frontMatter:()=>l,metadata:()=>d,toc:()=>c});var s=n(13274),r=n(38112);const l={title:"Paimon catalog",slug:"/lakehouse-paimon-catalog",keywords:["lakehouse","Paimon","metadata"],license:"This software is licensed under the Apache License version 2."},t=void 0,d={id:"lakehouse-paimon-catalog",title:"Paimon catalog",description:"Introduction",source:"@site/versioned_docs/version-0.6.0-incubating/lakehouse-paimon-catalog.md",sourceDirName:".",slug:"/lakehouse-paimon-catalog",permalink:"/docs/0.6.0-incubating/lakehouse-paimon-catalog",draft:!1,unlisted:!1,editUrl:"https://github.com/apache/gravitino-site/tree/main/docs/lakehouse-paimon-catalog.md",tags:[],version:"0.6.0-incubating",lastUpdatedBy:"Justin Mclean",lastUpdatedAt:1736293354e3,frontMatter:{title:"Paimon catalog",slug:"/lakehouse-paimon-catalog",keywords:["lakehouse","Paimon","metadata"],license:"This software is licensed under the Apache License version 2."},sidebar:"docs",previous:{title:"Doris catalog",permalink:"/docs/0.6.0-incubating/jdbc-doris-catalog"},next:{title:"Hadoop catalog",permalink:"/docs/0.6.0-incubating/hadoop-catalog"}},a={},c=[{value:"Introduction",id:"introduction",level:2},{value:"Requirements",id:"requirements",level:3},{value:"Catalog",id:"catalog",level:2},{value:"Catalog capabilities",id:"catalog-capabilities",level:3},{value:"Catalog properties",id:"catalog-properties",level:3},{value:"Catalog operations",id:"catalog-operations",level:3},{value:"Schema",id:"schema",level:2},{value:"Schema capabilities",id:"schema-capabilities",level:3},{value:"Schema properties",id:"schema-properties",level:3},{value:"Schema operations",id:"schema-operations",level:3},{value:"Table",id:"table",level:2},{value:"Table capabilities",id:"table-capabilities",level:3},{value:"Table changes",id:"table-changes",level:4},{value:"Table partitions",id:"table-partitions",level:4},{value:"Table sort orders",id:"table-sort-orders",level:3},{value:"Table distributions",id:"table-distributions",level:3},{value:"Table indexes",id:"table-indexes",level:3},{value:"Table column types",id:"table-column-types",level:3},{value:"Table properties",id:"table-properties",level:3},{value:"Table operations",id:"table-operations",level:3},{value:"HDFS configuration",id:"hdfs-configuration",level:2}];function o(e){const i={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(i.h2,{id:"introduction",children:"Introduction"}),"\n",(0,s.jsx)(i.p,{children:"Apache Gravitino provides the ability to manage Apache Paimon metadata."}),"\n",(0,s.jsx)(i.h3,{id:"requirements",children:"Requirements"}),"\n",(0,s.jsx)(i.admonition,{type:"info",children:(0,s.jsxs)(i.p,{children:["Builds with Apache Paimon ",(0,s.jsx)(i.code,{children:"0.8.0"}),"."]})}),"\n",(0,s.jsx)(i.h2,{id:"catalog",children:"Catalog"}),"\n",(0,s.jsx)(i.h3,{id:"catalog-capabilities",children:"Catalog capabilities"}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsxs)(i.li,{children:["\n",(0,s.jsxs)(i.p,{children:["Works as a catalog proxy, supporting ",(0,s.jsx)(i.code,{children:"FilesystemCatalog"}),"."]}),"\n"]}),"\n",(0,s.jsxs)(i.li,{children:["\n",(0,s.jsx)(i.p,{children:"Supports DDL operations for Paimon schemas and tables."}),"\n"]}),"\n",(0,s.jsxs)(i.li,{children:["\n",(0,s.jsxs)(i.p,{children:["Doesn't support ",(0,s.jsx)(i.code,{children:"JdbcCatalog"})," and ",(0,s.jsx)(i.code,{children:"HiveCatalog"})," catalog backend now."]}),"\n"]}),"\n",(0,s.jsxs)(i.li,{children:["\n",(0,s.jsx)(i.p,{children:"Doesn't support alterSchema."}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(i.h3,{id:"catalog-properties",children:"Catalog properties"}),"\n",(0,s.jsxs)(i.table,{children:[(0,s.jsx)(i.thead,{children:(0,s.jsxs)(i.tr,{children:[(0,s.jsx)(i.th,{children:"Property name"}),(0,s.jsx)(i.th,{children:"Description"}),(0,s.jsx)(i.th,{children:"Default value"}),(0,s.jsx)(i.th,{children:"Required"}),(0,s.jsx)(i.th,{children:"Since Version"})]})}),(0,s.jsxs)(i.tbody,{children:[(0,s.jsxs)(i.tr,{children:[(0,s.jsx)(i.td,{children:(0,s.jsx)(i.code,{children:"catalog-backend"})}),(0,s.jsxs)(i.td,{children:["Catalog backend of Gravitino Paimon catalog. Only supports ",(0,s.jsx)(i.code,{children:"filesystem"})," now."]}),(0,s.jsx)(i.td,{children:"(none)"}),(0,s.jsx)(i.td,{children:"Yes"}),(0,s.jsx)(i.td,{children:"0.6.0"})]}),(0,s.jsxs)(i.tr,{children:[(0,s.jsx)(i.td,{children:(0,s.jsx)(i.code,{children:"uri"})}),(0,s.jsxs)(i.td,{children:["The URI configuration of the Paimon catalog. ",(0,s.jsx)(i.code,{children:"thrift://127.0.0.1:9083"})," or ",(0,s.jsx)(i.code,{children:"jdbc:postgresql://127.0.0.1:5432/db_name"})," or ",(0,s.jsx)(i.code,{children:"jdbc:mysql://127.0.0.1:3306/metastore_db"}),". It is optional for ",(0,s.jsx)(i.code,{children:"FilesystemCatalog"}),"."]}),(0,s.jsx)(i.td,{children:"(none)"}),(0,s.jsxs)(i.td,{children:["required if the value of ",(0,s.jsx)(i.code,{children:"catalog-backend"})," is not ",(0,s.jsx)(i.code,{children:"filesystem"}),"."]}),(0,s.jsx)(i.td,{children:"0.6.0"})]}),(0,s.jsxs)(i.tr,{children:[(0,s.jsx)(i.td,{children:(0,s.jsx)(i.code,{children:"warehouse"})}),(0,s.jsxs)(i.td,{children:["Warehouse directory of catalog. ",(0,s.jsx)(i.code,{children:"file:///user/hive/warehouse-paimon/"})," for local fs or ",(0,s.jsx)(i.code,{children:"hdfs://namespace/hdfs/path"})," for HDFS."]}),(0,s.jsx)(i.td,{children:"(none)"}),(0,s.jsx)(i.td,{children:"Yes"}),(0,s.jsx)(i.td,{children:"0.6.0"})]}),(0,s.jsxs)(i.tr,{children:[(0,s.jsx)(i.td,{children:(0,s.jsx)(i.code,{children:"authentication.type"})}),(0,s.jsxs)(i.td,{children:["The type of authentication for Paimon catalog backend, currently Gravitino only supports ",(0,s.jsx)(i.code,{children:"Kerberos"})," and ",(0,s.jsx)(i.code,{children:"simple"}),"."]}),(0,s.jsx)(i.td,{children:(0,s.jsx)(i.code,{children:"simple"})}),(0,s.jsx)(i.td,{children:"No"}),(0,s.jsx)(i.td,{children:"0.6.0"})]}),(0,s.jsxs)(i.tr,{children:[(0,s.jsx)(i.td,{children:(0,s.jsx)(i.code,{children:"authentication.kerberos.principal"})}),(0,s.jsx)(i.td,{children:"The principal of the Kerberos authentication."}),(0,s.jsx)(i.td,{children:"(none)"}),(0,s.jsxs)(i.td,{children:["required if the value of ",(0,s.jsx)(i.code,{children:"authentication.type"})," is Kerberos."]}),(0,s.jsx)(i.td,{children:"0.6.0"})]}),(0,s.jsxs)(i.tr,{children:[(0,s.jsx)(i.td,{children:(0,s.jsx)(i.code,{children:"authentication.kerberos.keytab-uri"})}),(0,s.jsx)(i.td,{children:"The URI of The keytab for the Kerberos authentication."}),(0,s.jsx)(i.td,{children:"(none)"}),(0,s.jsxs)(i.td,{children:["required if the value of ",(0,s.jsx)(i.code,{children:"authentication.type"})," is Kerberos."]}),(0,s.jsx)(i.td,{children:"0.6.0"})]}),(0,s.jsxs)(i.tr,{children:[(0,s.jsx)(i.td,{children:(0,s.jsx)(i.code,{children:"authentication.kerberos.check-interval-sec"})}),(0,s.jsx)(i.td,{children:"The check interval of Kerberos credential for Paimon catalog."}),(0,s.jsx)(i.td,{children:"60"}),(0,s.jsx)(i.td,{children:"No"}),(0,s.jsx)(i.td,{children:"0.6.0"})]}),(0,s.jsxs)(i.tr,{children:[(0,s.jsx)(i.td,{children:(0,s.jsx)(i.code,{children:"authentication.kerberos.keytab-fetch-timeout-sec"})}),(0,s.jsxs)(i.td,{children:["The fetch timeout of retrieving Kerberos keytab from ",(0,s.jsx)(i.code,{children:"authentication.kerberos.keytab-uri"}),"."]}),(0,s.jsx)(i.td,{children:"60"}),(0,s.jsx)(i.td,{children:"No"}),(0,s.jsx)(i.td,{children:"0.6.0"})]})]})]}),"\n",(0,s.jsxs)(i.p,{children:["Any properties not defined by Gravitino with ",(0,s.jsx)(i.code,{children:"gravitino.bypass."})," prefix will pass to Paimon catalog properties and HDFS configuration. For example, if specify ",(0,s.jsx)(i.code,{children:"gravitino.bypass.table.type"}),", ",(0,s.jsx)(i.code,{children:"table.type"})," will pass to Paimon catalog properties."]}),"\n",(0,s.jsx)(i.h3,{id:"catalog-operations",children:"Catalog operations"}),"\n",(0,s.jsxs)(i.p,{children:["Please refer to ",(0,s.jsx)(i.a,{href:"/docs/0.6.0-incubating/manage-relational-metadata-using-gravitino#catalog-operations",children:"Manage Relational Metadata Using Gravitino"})," for more details."]}),"\n",(0,s.jsx)(i.h2,{id:"schema",children:"Schema"}),"\n",(0,s.jsx)(i.h3,{id:"schema-capabilities",children:"Schema capabilities"}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsxs)(i.li,{children:["\n",(0,s.jsx)(i.p,{children:"Supporting createSchema, dropSchema, loadSchema and listSchema."}),"\n"]}),"\n",(0,s.jsxs)(i.li,{children:["\n",(0,s.jsx)(i.p,{children:"Supporting cascade drop schema."}),"\n"]}),"\n",(0,s.jsxs)(i.li,{children:["\n",(0,s.jsx)(i.p,{children:"Doesn't support alterSchema."}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(i.h3,{id:"schema-properties",children:"Schema properties"}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsx)(i.li,{children:"Doesn't support specify location and store any schema properties when createSchema for FilesystemCatalog."}),"\n",(0,s.jsx)(i.li,{children:"Doesn't return any schema properties when loadSchema for FilesystemCatalog."}),"\n",(0,s.jsx)(i.li,{children:"Doesn't support store schema comment for FilesystemCatalog."}),"\n"]}),"\n",(0,s.jsx)(i.h3,{id:"schema-operations",children:"Schema operations"}),"\n",(0,s.jsxs)(i.p,{children:["Please refer to ",(0,s.jsx)(i.a,{href:"/docs/0.6.0-incubating/manage-relational-metadata-using-gravitino#schema-operations",children:"Manage Relational Metadata Using Gravitino"})," for more details."]}),"\n",(0,s.jsx)(i.h2,{id:"table",children:"Table"}),"\n",(0,s.jsx)(i.h3,{id:"table-capabilities",children:"Table capabilities"}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsxs)(i.li,{children:["\n",(0,s.jsx)(i.p,{children:"Supporting createTable, purgeTable, alterTable, loadTable and listTable."}),"\n"]}),"\n",(0,s.jsxs)(i.li,{children:["\n",(0,s.jsxs)(i.p,{children:["Supporting Column default value through table properties, such as ",(0,s.jsx)(i.code,{children:"fields.{columnName}.default-value"}),", not column expression."]}),"\n"]}),"\n",(0,s.jsxs)(i.li,{children:["\n",(0,s.jsx)(i.p,{children:"Doesn't support dropTable."}),"\n"]}),"\n",(0,s.jsxs)(i.li,{children:["\n",(0,s.jsx)(i.p,{children:"Doesn't support table distribution and sort orders."}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(i.admonition,{type:"info",children:(0,s.jsx)(i.p,{children:"Gravitino Paimon Catalog does not support dropTable, because the dropTable in Paimon will both remove the table metadata and the table location from the file system and skip the trash, we should use purgeTable instead in Gravitino."})}),"\n",(0,s.jsx)(i.admonition,{type:"info",children:(0,s.jsx)(i.p,{children:"Paimon does not support auto increment column."})}),"\n",(0,s.jsx)(i.h4,{id:"table-changes",children:"Table changes"}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsx)(i.li,{children:"RenameTable"}),"\n",(0,s.jsx)(i.li,{children:"AddColumn"}),"\n",(0,s.jsx)(i.li,{children:"DeleteColumn"}),"\n",(0,s.jsx)(i.li,{children:"RenameColumn"}),"\n",(0,s.jsx)(i.li,{children:"UpdateColumnComment"}),"\n",(0,s.jsx)(i.li,{children:"UpdateColumnNullability"}),"\n",(0,s.jsx)(i.li,{children:"UpdateColumnPosition"}),"\n",(0,s.jsx)(i.li,{children:"UpdateColumnType"}),"\n",(0,s.jsx)(i.li,{children:"UpdateComment"}),"\n",(0,s.jsx)(i.li,{children:"SetProperty"}),"\n",(0,s.jsx)(i.li,{children:"RemoveProperty"}),"\n"]}),"\n",(0,s.jsx)(i.h4,{id:"table-partitions",children:"Table partitions"}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsxs)(i.li,{children:["Only supports Identity partitions, such as ",(0,s.jsx)(i.code,{children:"day"}),", ",(0,s.jsx)(i.code,{children:"hour"}),", etc."]}),"\n"]}),"\n",(0,s.jsxs)(i.p,{children:["Please refer to ",(0,s.jsx)(i.a,{href:"https://paimon.apache.org/docs/0.8/spark/sql-ddl/#create-table",children:"Paimon DDL Create Table"})," for more details."]}),"\n",(0,s.jsx)(i.h3,{id:"table-sort-orders",children:"Table sort orders"}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsx)(i.li,{children:"Doesn't support table sort orders."}),"\n"]}),"\n",(0,s.jsx)(i.h3,{id:"table-distributions",children:"Table distributions"}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsx)(i.li,{children:"Doesn't support table distributions."}),"\n"]}),"\n",(0,s.jsx)(i.h3,{id:"table-indexes",children:"Table indexes"}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsx)(i.li,{children:"Only supports primary key Index."}),"\n"]}),"\n",(0,s.jsx)(i.admonition,{type:"info",children:(0,s.jsx)(i.p,{children:"We cannot specify more than one primary key Index, and a primary key Index can contain multiple fields as a joint primary key."})}),"\n",(0,s.jsx)(i.admonition,{type:"info",children:(0,s.jsx)(i.p,{children:"Paimon Table primary key constraint should not be same with partition fields, this will result in only one record in a partition."})}),"\n",(0,s.jsx)(i.h3,{id:"table-column-types",children:"Table column types"}),"\n",(0,s.jsxs)(i.table,{children:[(0,s.jsx)(i.thead,{children:(0,s.jsxs)(i.tr,{children:[(0,s.jsx)(i.th,{children:"Gravitino Type"}),(0,s.jsx)(i.th,{children:"Apache Paimon Type"})]})}),(0,s.jsxs)(i.tbody,{children:[(0,s.jsxs)(i.tr,{children:[(0,s.jsx)(i.td,{children:(0,s.jsx)(i.code,{children:"Sturct"})}),(0,s.jsx)(i.td,{children:(0,s.jsx)(i.code,{children:"Row"})})]}),(0,s.jsxs)(i.tr,{children:[(0,s.jsx)(i.td,{children:(0,s.jsx)(i.code,{children:"Map"})}),(0,s.jsx)(i.td,{children:(0,s.jsx)(i.code,{children:"Map"})})]}),(0,s.jsxs)(i.tr,{children:[(0,s.jsx)(i.td,{children:(0,s.jsx)(i.code,{children:"Array"})}),(0,s.jsx)(i.td,{children:(0,s.jsx)(i.code,{children:"Array"})})]}),(0,s.jsxs)(i.tr,{children:[(0,s.jsx)(i.td,{children:(0,s.jsx)(i.code,{children:"Boolean"})}),(0,s.jsx)(i.td,{children:(0,s.jsx)(i.code,{children:"Boolean"})})]}),(0,s.jsxs)(i.tr,{children:[(0,s.jsx)(i.td,{children:(0,s.jsx)(i.code,{children:"Byte"})}),(0,s.jsx)(i.td,{children:(0,s.jsx)(i.code,{children:"TinyInt"})})]}),(0,s.jsxs)(i.tr,{children:[(0,s.jsx)(i.td,{children:(0,s.jsx)(i.code,{children:"Short"})}),(0,s.jsx)(i.td,{children:(0,s.jsx)(i.code,{children:"SmallInt"})})]}),(0,s.jsxs)(i.tr,{children:[(0,s.jsx)(i.td,{children:(0,s.jsx)(i.code,{children:"Integer"})}),(0,s.jsx)(i.td,{children:(0,s.jsx)(i.code,{children:"Int"})})]}),(0,s.jsxs)(i.tr,{children:[(0,s.jsx)(i.td,{children:(0,s.jsx)(i.code,{children:"Long"})}),(0,s.jsx)(i.td,{children:(0,s.jsx)(i.code,{children:"BigInt"})})]}),(0,s.jsxs)(i.tr,{children:[(0,s.jsx)(i.td,{children:(0,s.jsx)(i.code,{children:"Float"})}),(0,s.jsx)(i.td,{children:(0,s.jsx)(i.code,{children:"Float"})})]}),(0,s.jsxs)(i.tr,{children:[(0,s.jsx)(i.td,{children:(0,s.jsx)(i.code,{children:"Double"})}),(0,s.jsx)(i.td,{children:(0,s.jsx)(i.code,{children:"Double"})})]}),(0,s.jsxs)(i.tr,{children:[(0,s.jsx)(i.td,{children:(0,s.jsx)(i.code,{children:"Decimal"})}),(0,s.jsx)(i.td,{children:(0,s.jsx)(i.code,{children:"Decimal"})})]}),(0,s.jsxs)(i.tr,{children:[(0,s.jsx)(i.td,{children:(0,s.jsx)(i.code,{children:"String"})}),(0,s.jsx)(i.td,{children:(0,s.jsx)(i.code,{children:"VarChar(Integer.MAX_VALUE)"})})]}),(0,s.jsxs)(i.tr,{children:[(0,s.jsx)(i.td,{children:(0,s.jsx)(i.code,{children:"VarChar"})}),(0,s.jsx)(i.td,{children:(0,s.jsx)(i.code,{children:"VarChar"})})]}),(0,s.jsxs)(i.tr,{children:[(0,s.jsx)(i.td,{children:(0,s.jsx)(i.code,{children:"FixedChar"})}),(0,s.jsx)(i.td,{children:(0,s.jsx)(i.code,{children:"Char"})})]}),(0,s.jsxs)(i.tr,{children:[(0,s.jsx)(i.td,{children:(0,s.jsx)(i.code,{children:"Date"})}),(0,s.jsx)(i.td,{children:(0,s.jsx)(i.code,{children:"Date"})})]}),(0,s.jsxs)(i.tr,{children:[(0,s.jsx)(i.td,{children:(0,s.jsx)(i.code,{children:"Time"})}),(0,s.jsx)(i.td,{children:(0,s.jsx)(i.code,{children:"Time"})})]}),(0,s.jsxs)(i.tr,{children:[(0,s.jsx)(i.td,{children:(0,s.jsx)(i.code,{children:"TimestampType withZone"})}),(0,s.jsx)(i.td,{children:(0,s.jsx)(i.code,{children:"LocalZonedTimestamp"})})]}),(0,s.jsxs)(i.tr,{children:[(0,s.jsx)(i.td,{children:(0,s.jsx)(i.code,{children:"TimestampType withoutZone"})}),(0,s.jsx)(i.td,{children:(0,s.jsx)(i.code,{children:"Timestamp"})})]}),(0,s.jsxs)(i.tr,{children:[(0,s.jsx)(i.td,{children:(0,s.jsx)(i.code,{children:"Binary"})}),(0,s.jsx)(i.td,{children:(0,s.jsx)(i.code,{children:"Binary"})})]}),(0,s.jsxs)(i.tr,{children:[(0,s.jsx)(i.td,{children:(0,s.jsx)(i.code,{children:"Fixed"})}),(0,s.jsx)(i.td,{children:(0,s.jsx)(i.code,{children:"VarBinary"})})]})]})]}),"\n",(0,s.jsx)(i.admonition,{type:"info",children:(0,s.jsxs)(i.p,{children:["Gravitino doesn't support Paimon ",(0,s.jsx)(i.code,{children:"MultisetType"})," type."]})}),"\n",(0,s.jsx)(i.h3,{id:"table-properties",children:"Table properties"}),"\n",(0,s.jsxs)(i.p,{children:["You can pass ",(0,s.jsx)(i.a,{href:"https://paimon.apache.org/docs/0.8/maintenance/configurations/",children:"Paimon table properties"})," to Gravitino when creating a Paimon table."]}),"\n",(0,s.jsx)(i.p,{children:"The Gravitino server doesn't allow passing the following reserved fields."}),"\n",(0,s.jsxs)(i.table,{children:[(0,s.jsx)(i.thead,{children:(0,s.jsxs)(i.tr,{children:[(0,s.jsx)(i.th,{children:"Configuration item"}),(0,s.jsx)(i.th,{children:"Description"})]})}),(0,s.jsxs)(i.tbody,{children:[(0,s.jsxs)(i.tr,{children:[(0,s.jsx)(i.td,{children:(0,s.jsx)(i.code,{children:"comment"})}),(0,s.jsx)(i.td,{children:"The table comment."})]}),(0,s.jsxs)(i.tr,{children:[(0,s.jsx)(i.td,{children:(0,s.jsx)(i.code,{children:"owner"})}),(0,s.jsx)(i.td,{children:"The table owner."})]}),(0,s.jsxs)(i.tr,{children:[(0,s.jsx)(i.td,{children:(0,s.jsx)(i.code,{children:"bucket-key"})}),(0,s.jsx)(i.td,{children:"The table bucket-key."})]}),(0,s.jsxs)(i.tr,{children:[(0,s.jsx)(i.td,{children:(0,s.jsx)(i.code,{children:"merge-engine"})}),(0,s.jsx)(i.td,{children:"The table merge-engine."})]}),(0,s.jsxs)(i.tr,{children:[(0,s.jsx)(i.td,{children:(0,s.jsx)(i.code,{children:"sequence.field"})}),(0,s.jsx)(i.td,{children:"The table sequence.field."})]}),(0,s.jsxs)(i.tr,{children:[(0,s.jsx)(i.td,{children:(0,s.jsx)(i.code,{children:"rowkind.field"})}),(0,s.jsx)(i.td,{children:"The table rowkind.field."})]}),(0,s.jsxs)(i.tr,{children:[(0,s.jsx)(i.td,{children:(0,s.jsx)(i.code,{children:"primary-key"})}),(0,s.jsx)(i.td,{children:"The table primary-key."})]}),(0,s.jsxs)(i.tr,{children:[(0,s.jsx)(i.td,{children:(0,s.jsx)(i.code,{children:"partition"})}),(0,s.jsx)(i.td,{children:"The table partition."})]})]})]}),"\n",(0,s.jsx)(i.h3,{id:"table-operations",children:"Table operations"}),"\n",(0,s.jsxs)(i.p,{children:["Please refer to ",(0,s.jsx)(i.a,{href:"/docs/0.6.0-incubating/manage-relational-metadata-using-gravitino#table-operations",children:"Manage Relational Metadata Using Gravitino"})," for more details."]}),"\n",(0,s.jsx)(i.h2,{id:"hdfs-configuration",children:"HDFS configuration"}),"\n",(0,s.jsxs)(i.p,{children:["You can place ",(0,s.jsx)(i.code,{children:"core-site.xml"})," and ",(0,s.jsx)(i.code,{children:"hdfs-site.xml"})," in the ",(0,s.jsx)(i.code,{children:"catalogs/lakehouse-paimon/conf"})," directory to automatically load as the default HDFS configuration."]}),"\n",(0,s.jsx)(i.admonition,{type:"caution",children:(0,s.jsx)(i.p,{children:"When reading and writing to HDFS, the Gravitino server can only operate as the specified Kerberos user and doesn't support proxying to other Kerberos users now."})})]})}function h(e={}){const{wrapper:i}={...(0,r.R)(),...e.components};return i?(0,s.jsx)(i,{...e,children:(0,s.jsx)(o,{...e})}):o(e)}}}]);