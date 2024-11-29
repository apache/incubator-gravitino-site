"use strict";(self.webpackChunkapache_website_template=self.webpackChunkapache_website_template||[]).push([[32334],{20116:(e,i,n)=>{n.r(i),n.d(i,{assets:()=>o,contentTitle:()=>l,default:()=>j,frontMatter:()=>c,metadata:()=>a,toc:()=>h});var s=n(13274),r=n(8438),d=n(83593),t=n(5237);const c={title:"Iceberg catalog",slug:"/lakehouse-iceberg-catalog",keywords:["lakehouse","iceberg","metadata"],license:"This software is licensed under the Apache License version 2."},l=void 0,a={id:"lakehouse-iceberg-catalog",title:"Iceberg catalog",description:"Introduction",source:"@site/versioned_docs/version-0.6.0-incubating/lakehouse-iceberg-catalog.md",sourceDirName:".",slug:"/lakehouse-iceberg-catalog",permalink:"/docs/0.6.0-incubating/lakehouse-iceberg-catalog",draft:!1,unlisted:!1,editUrl:"https://github.com/apache/gravitino-site/tree/main/docs/lakehouse-iceberg-catalog.md",tags:[],version:"0.6.0-incubating",lastUpdatedBy:"FANNG",lastUpdatedAt:1732866794e3,frontMatter:{title:"Iceberg catalog",slug:"/lakehouse-iceberg-catalog",keywords:["lakehouse","iceberg","metadata"],license:"This software is licensed under the Apache License version 2."},sidebar:"docs",previous:{title:"Web UI",permalink:"/docs/0.6.0-incubating/webui"},next:{title:"Hive catalog",permalink:"/docs/0.6.0-incubating/apache-hive-catalog"}},o={},h=[{value:"Introduction",id:"introduction",level:2},{value:"Requirements and limitations",id:"requirements-and-limitations",level:3},{value:"Catalog",id:"catalog",level:2},{value:"Catalog capabilities",id:"catalog-capabilities",level:3},{value:"Catalog properties",id:"catalog-properties",level:3},{value:"JDBC catalog",id:"jdbc-catalog",level:4},{value:"S3",id:"s3",level:4},{value:"Catalog operations",id:"catalog-operations",level:3},{value:"Schema",id:"schema",level:2},{value:"Schema capabilities",id:"schema-capabilities",level:3},{value:"Schema properties",id:"schema-properties",level:3},{value:"Schema operations",id:"schema-operations",level:3},{value:"Table",id:"table",level:2},{value:"Table capabilities",id:"table-capabilities",level:3},{value:"Table partitions",id:"table-partitions",level:4},{value:"Table sort orders",id:"table-sort-orders",level:3},{value:"Table distributions",id:"table-distributions",level:3},{value:"Table column types",id:"table-column-types",level:3},{value:"Table properties",id:"table-properties",level:3},{value:"Table indexes",id:"table-indexes",level:3},{value:"Table operations",id:"table-operations",level:3},{value:"Alter table operations",id:"alter-table-operations",level:4},{value:"HDFS configuration",id:"hdfs-configuration",level:2}];function x(e){const i={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(i.h2,{id:"introduction",children:"Introduction"}),"\n",(0,s.jsx)(i.p,{children:"Apache Gravitino provides the ability to manage Apache Iceberg metadata."}),"\n",(0,s.jsx)(i.h3,{id:"requirements-and-limitations",children:"Requirements and limitations"}),"\n",(0,s.jsx)(i.admonition,{type:"info",children:(0,s.jsxs)(i.p,{children:["Builds with Apache Iceberg ",(0,s.jsx)(i.code,{children:"1.5.2"}),". The Apache Iceberg table format version is ",(0,s.jsx)(i.code,{children:"2"})," by default."]})}),"\n",(0,s.jsx)(i.h2,{id:"catalog",children:"Catalog"}),"\n",(0,s.jsx)(i.h3,{id:"catalog-capabilities",children:"Catalog capabilities"}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsxs)(i.li,{children:["Works as a catalog proxy, supporting ",(0,s.jsx)(i.code,{children:"HiveCatalog"}),", ",(0,s.jsx)(i.code,{children:"JdbcCatalog"})," and ",(0,s.jsx)(i.code,{children:"RESTCatalog"}),"."]}),"\n",(0,s.jsx)(i.li,{children:"Supports DDL operations for Iceberg schemas and tables."}),"\n",(0,s.jsx)(i.li,{children:"Doesn't support snapshot or table management operations."}),"\n",(0,s.jsx)(i.li,{children:"Supports S3 and HDFS storage."}),"\n",(0,s.jsx)(i.li,{children:"Supports Kerberos or simple authentication for Iceberg catalog with Hive backend."}),"\n"]}),"\n",(0,s.jsx)(i.h3,{id:"catalog-properties",children:"Catalog properties"}),"\n",(0,s.jsxs)(i.table,{children:[(0,s.jsx)(i.thead,{children:(0,s.jsxs)(i.tr,{children:[(0,s.jsx)(i.th,{children:"Property name"}),(0,s.jsx)(i.th,{children:"Description"}),(0,s.jsx)(i.th,{children:"Default value"}),(0,s.jsx)(i.th,{children:"Required"}),(0,s.jsx)(i.th,{children:"Since Version"})]})}),(0,s.jsxs)(i.tbody,{children:[(0,s.jsxs)(i.tr,{children:[(0,s.jsx)(i.td,{children:(0,s.jsx)(i.code,{children:"catalog-backend"})}),(0,s.jsxs)(i.td,{children:["Catalog backend of Gravitino Iceberg catalog. Supports ",(0,s.jsx)(i.code,{children:"hive"})," or ",(0,s.jsx)(i.code,{children:"jdbc"})," or ",(0,s.jsx)(i.code,{children:"rest"}),"."]}),(0,s.jsx)(i.td,{children:"(none)"}),(0,s.jsx)(i.td,{children:"Yes"}),(0,s.jsx)(i.td,{children:"0.2.0"})]}),(0,s.jsxs)(i.tr,{children:[(0,s.jsx)(i.td,{children:(0,s.jsx)(i.code,{children:"uri"})}),(0,s.jsxs)(i.td,{children:["The URI configuration of the Iceberg catalog. ",(0,s.jsx)(i.code,{children:"thrift://127.0.0.1:9083"})," or ",(0,s.jsx)(i.code,{children:"jdbc:postgresql://127.0.0.1:5432/db_name"})," or ",(0,s.jsx)(i.code,{children:"jdbc:mysql://127.0.0.1:3306/metastore_db"})," or ",(0,s.jsx)(i.code,{children:"http://127.0.0.1:9001"}),"."]}),(0,s.jsx)(i.td,{children:"(none)"}),(0,s.jsx)(i.td,{children:"Yes"}),(0,s.jsx)(i.td,{children:"0.2.0"})]}),(0,s.jsxs)(i.tr,{children:[(0,s.jsx)(i.td,{children:(0,s.jsx)(i.code,{children:"warehouse"})}),(0,s.jsxs)(i.td,{children:["Warehouse directory of catalog. ",(0,s.jsx)(i.code,{children:"file:///user/hive/warehouse-hive/"})," for local fs or ",(0,s.jsx)(i.code,{children:"hdfs://namespace/hdfs/path"})," for HDFS."]}),(0,s.jsx)(i.td,{children:"(none)"}),(0,s.jsx)(i.td,{children:"Yes"}),(0,s.jsx)(i.td,{children:"0.2.0"})]}),(0,s.jsxs)(i.tr,{children:[(0,s.jsx)(i.td,{children:(0,s.jsx)(i.code,{children:"catalog-backend-name"})}),(0,s.jsx)(i.td,{children:"The catalog name passed to underlying Iceberg catalog backend. Catalog name in JDBC backend is used to isolate namespace and tables."}),(0,s.jsx)(i.td,{children:"Gravitino catalog name"}),(0,s.jsx)(i.td,{children:"No"}),(0,s.jsx)(i.td,{children:"0.5.2"})]}),(0,s.jsxs)(i.tr,{children:[(0,s.jsx)(i.td,{children:(0,s.jsx)(i.code,{children:"authentication.type"})}),(0,s.jsxs)(i.td,{children:["The type of authentication for Iceberg catalog backend, currently Gravitino only supports ",(0,s.jsx)(i.code,{children:"Kerberos"}),", ",(0,s.jsx)(i.code,{children:"simple"}),"."]}),(0,s.jsx)(i.td,{children:(0,s.jsx)(i.code,{children:"simple"})}),(0,s.jsx)(i.td,{children:"No"}),(0,s.jsx)(i.td,{children:"0.6.0"})]}),(0,s.jsxs)(i.tr,{children:[(0,s.jsx)(i.td,{children:(0,s.jsx)(i.code,{children:"authentication.impersonation-enable"})}),(0,s.jsx)(i.td,{children:"Whether to enable impersonation for the Iceberg catalog"}),(0,s.jsx)(i.td,{children:(0,s.jsx)(i.code,{children:"false"})}),(0,s.jsx)(i.td,{children:"No"}),(0,s.jsx)(i.td,{children:"0.6.0"})]}),(0,s.jsxs)(i.tr,{children:[(0,s.jsx)(i.td,{children:(0,s.jsx)(i.code,{children:"authentication.kerberos.principal"})}),(0,s.jsx)(i.td,{children:"The principal of the Kerberos authentication"}),(0,s.jsx)(i.td,{children:"(none)"}),(0,s.jsxs)(i.td,{children:["required if the value of ",(0,s.jsx)(i.code,{children:"authentication.type"})," is Kerberos."]}),(0,s.jsx)(i.td,{children:"0.6.0"})]}),(0,s.jsxs)(i.tr,{children:[(0,s.jsx)(i.td,{children:(0,s.jsx)(i.code,{children:"authentication.kerberos.keytab-uri"})}),(0,s.jsx)(i.td,{children:"The URI of The keytab for the Kerberos authentication."}),(0,s.jsx)(i.td,{children:"(none)"}),(0,s.jsxs)(i.td,{children:["required if the value of ",(0,s.jsx)(i.code,{children:"authentication.type"})," is Kerberos."]}),(0,s.jsx)(i.td,{children:"0.6.0"})]}),(0,s.jsxs)(i.tr,{children:[(0,s.jsx)(i.td,{children:(0,s.jsx)(i.code,{children:"authentication.kerberos.check-interval-sec"})}),(0,s.jsx)(i.td,{children:"The check interval of Kerberos credential for Iceberg catalog."}),(0,s.jsx)(i.td,{children:"60"}),(0,s.jsx)(i.td,{children:"No"}),(0,s.jsx)(i.td,{children:"0.6.0"})]}),(0,s.jsxs)(i.tr,{children:[(0,s.jsx)(i.td,{children:(0,s.jsx)(i.code,{children:"authentication.kerberos.keytab-fetch-timeout-sec"})}),(0,s.jsxs)(i.td,{children:["The fetch timeout of retrieving Kerberos keytab from ",(0,s.jsx)(i.code,{children:"authentication.kerberos.keytab-uri"}),"."]}),(0,s.jsx)(i.td,{children:"60"}),(0,s.jsx)(i.td,{children:"No"}),(0,s.jsx)(i.td,{children:"0.6.0"})]})]})]}),"\n",(0,s.jsxs)(i.p,{children:["Any properties not defined by Gravitino with ",(0,s.jsx)(i.code,{children:"gravitino.bypass."})," prefix will pass to Iceberg catalog properties and HDFS configuration. For example, if specify ",(0,s.jsx)(i.code,{children:"gravitino.bypass.list-all-tables"}),", ",(0,s.jsx)(i.code,{children:"list-all-tables"})," will pass to Iceberg catalog properties."]}),"\n",(0,s.jsxs)(i.p,{children:["When you use the Gravitino with Trino. You can pass the Trino Iceberg connector configuration using prefix ",(0,s.jsx)(i.code,{children:"trino.bypass."}),". For example, using ",(0,s.jsx)(i.code,{children:"trino.bypass.iceberg.table-statistics-enabled"})," to pass the ",(0,s.jsx)(i.code,{children:"iceberg.table-statistics-enabled"})," to the Gravitino Iceberg catalog in Trino runtime."]}),"\n",(0,s.jsxs)(i.p,{children:["When you use the Gravitino with Spark. You can pass the Spark Iceberg connector configuration using prefix ",(0,s.jsx)(i.code,{children:"spark.bypass."}),". For example, using ",(0,s.jsx)(i.code,{children:"spark.bypass.io-impl"})," to pass the ",(0,s.jsx)(i.code,{children:"io-impl"})," to the Spark Iceberg connector in Spark runtime."]}),"\n",(0,s.jsx)(i.h4,{id:"jdbc-catalog",children:"JDBC catalog"}),"\n",(0,s.jsxs)(i.p,{children:["If you are using JDBC catalog, you must provide ",(0,s.jsx)(i.code,{children:"jdbc-user"}),", ",(0,s.jsx)(i.code,{children:"jdbc-password"})," and ",(0,s.jsx)(i.code,{children:"jdbc-driver"})," to catalog properties."]}),"\n",(0,s.jsxs)(i.table,{children:[(0,s.jsx)(i.thead,{children:(0,s.jsxs)(i.tr,{children:[(0,s.jsx)(i.th,{children:"Property name"}),(0,s.jsx)(i.th,{children:"Description"}),(0,s.jsx)(i.th,{children:"Default value"}),(0,s.jsx)(i.th,{children:"Required"}),(0,s.jsx)(i.th,{children:"Since Version"})]})}),(0,s.jsxs)(i.tbody,{children:[(0,s.jsxs)(i.tr,{children:[(0,s.jsx)(i.td,{children:(0,s.jsx)(i.code,{children:"jdbc-user"})}),(0,s.jsx)(i.td,{children:"JDBC user name"}),(0,s.jsx)(i.td,{children:"(none)"}),(0,s.jsx)(i.td,{children:"Yes"}),(0,s.jsx)(i.td,{children:"0.2.0"})]}),(0,s.jsxs)(i.tr,{children:[(0,s.jsx)(i.td,{children:(0,s.jsx)(i.code,{children:"jdbc-password"})}),(0,s.jsx)(i.td,{children:"JDBC password"}),(0,s.jsx)(i.td,{children:"(none)"}),(0,s.jsx)(i.td,{children:"Yes"}),(0,s.jsx)(i.td,{children:"0.2.0"})]}),(0,s.jsxs)(i.tr,{children:[(0,s.jsx)(i.td,{children:(0,s.jsx)(i.code,{children:"jdbc-driver"})}),(0,s.jsxs)(i.td,{children:[(0,s.jsx)(i.code,{children:"com.mysql.jdbc.Driver"})," or ",(0,s.jsx)(i.code,{children:"com.mysql.cj.jdbc.Driver"})," for MySQL, ",(0,s.jsx)(i.code,{children:"org.postgresql.Driver"})," for PostgreSQL"]}),(0,s.jsx)(i.td,{children:"(none)"}),(0,s.jsx)(i.td,{children:"Yes"}),(0,s.jsx)(i.td,{children:"0.3.0"})]}),(0,s.jsxs)(i.tr,{children:[(0,s.jsx)(i.td,{children:(0,s.jsx)(i.code,{children:"jdbc-initialize"})}),(0,s.jsx)(i.td,{children:"Whether to initialize meta tables when create JDBC catalog"}),(0,s.jsx)(i.td,{children:(0,s.jsx)(i.code,{children:"true"})}),(0,s.jsx)(i.td,{children:"No"}),(0,s.jsx)(i.td,{children:"0.2.0"})]})]})]}),"\n",(0,s.jsxs)(i.p,{children:["If you have a JDBC Iceberg catalog prior, you must set ",(0,s.jsx)(i.code,{children:"catalog-backend-name"})," to keep consistent with your Jdbc Iceberg catalog name to operate the prior namespace and tables."]}),"\n",(0,s.jsx)(i.admonition,{type:"caution",children:(0,s.jsxs)(i.p,{children:["You must download the corresponding JDBC driver to the ",(0,s.jsx)(i.code,{children:"catalogs/lakehouse-iceberg/libs"})," directory."]})}),"\n",(0,s.jsx)(i.h4,{id:"s3",children:"S3"}),"\n",(0,s.jsx)(i.p,{children:"Supports using static access-key-id and secret-access-key to access S3 data."}),"\n",(0,s.jsxs)(i.table,{children:[(0,s.jsx)(i.thead,{children:(0,s.jsxs)(i.tr,{children:[(0,s.jsx)(i.th,{children:"Configuration item"}),(0,s.jsx)(i.th,{children:"Description"}),(0,s.jsx)(i.th,{children:"Default value"}),(0,s.jsx)(i.th,{children:"Required"}),(0,s.jsx)(i.th,{children:"Since Version"})]})}),(0,s.jsxs)(i.tbody,{children:[(0,s.jsxs)(i.tr,{children:[(0,s.jsx)(i.td,{children:(0,s.jsx)(i.code,{children:"io-impl"})}),(0,s.jsxs)(i.td,{children:["The io implementation for ",(0,s.jsx)(i.code,{children:"FileIO"})," in Iceberg, use ",(0,s.jsx)(i.code,{children:"org.apache.iceberg.aws.s3.S3FileIO"})," for s3."]}),(0,s.jsx)(i.td,{children:"(none)"}),(0,s.jsx)(i.td,{children:"No"}),(0,s.jsx)(i.td,{children:"0.6.0"})]}),(0,s.jsxs)(i.tr,{children:[(0,s.jsx)(i.td,{children:(0,s.jsx)(i.code,{children:"s3-access-key-id"})}),(0,s.jsx)(i.td,{children:"The static access key ID used to access S3 data."}),(0,s.jsx)(i.td,{children:"(none)"}),(0,s.jsx)(i.td,{children:"No"}),(0,s.jsx)(i.td,{children:"0.6.0"})]}),(0,s.jsxs)(i.tr,{children:[(0,s.jsx)(i.td,{children:(0,s.jsx)(i.code,{children:"s3-secret-access-key"})}),(0,s.jsx)(i.td,{children:"The static secret access key used to access S3 data."}),(0,s.jsx)(i.td,{children:"(none)"}),(0,s.jsx)(i.td,{children:"No"}),(0,s.jsx)(i.td,{children:"0.6.0"})]}),(0,s.jsxs)(i.tr,{children:[(0,s.jsx)(i.td,{children:(0,s.jsx)(i.code,{children:"s3-endpoint"})}),(0,s.jsx)(i.td,{children:"An alternative endpoint of the S3 service, This could be used for S3FileIO with any s3-compatible object storage service that has a different endpoint, or access a private S3 endpoint in a virtual private cloud."}),(0,s.jsx)(i.td,{children:"(none)"}),(0,s.jsx)(i.td,{children:"No"}),(0,s.jsx)(i.td,{children:"0.6.0"})]}),(0,s.jsxs)(i.tr,{children:[(0,s.jsx)(i.td,{children:(0,s.jsx)(i.code,{children:"s3-region"})}),(0,s.jsxs)(i.td,{children:["The region of the S3 service, like ",(0,s.jsx)(i.code,{children:"us-west-2"}),"."]}),(0,s.jsx)(i.td,{children:"(none)"}),(0,s.jsx)(i.td,{children:"No"}),(0,s.jsx)(i.td,{children:"0.6.0"})]})]})]}),"\n",(0,s.jsxs)(i.p,{children:["For other Iceberg s3 properties not managed by Gravitino like ",(0,s.jsx)(i.code,{children:"s3.sse.type"}),", you could config it directly by ",(0,s.jsx)(i.code,{children:"gravitino.bypass.s3.sse.type"}),"."]}),"\n",(0,s.jsx)(i.admonition,{type:"info",children:(0,s.jsxs)(i.p,{children:["To configure the JDBC catalog backend, set the ",(0,s.jsx)(i.code,{children:"warehouse"})," parameter to ",(0,s.jsx)(i.code,{children:"s3://{bucket_name}/${prefix_name}"}),". For the Hive catalog backend, set ",(0,s.jsx)(i.code,{children:"warehouse"})," to ",(0,s.jsx)(i.code,{children:"s3a://{bucket_name}/${prefix_name}"}),". Additionally, download the [Iceberg AWS bundle](",(0,s.jsx)(i.a,{href:"https://mvnrepository.com/artifact/org.apache.iceberg/iceberg-aws-bundle",children:"Iceberg AWS bundle"}),") and place it in the ",(0,s.jsx)(i.code,{children:"catalogs/lakehouse-iceberg/libs/"})," directory."]})}),"\n",(0,s.jsx)(i.h3,{id:"catalog-operations",children:"Catalog operations"}),"\n",(0,s.jsxs)(i.p,{children:["Please refer to ",(0,s.jsx)(i.a,{href:"/docs/0.6.0-incubating/manage-relational-metadata-using-gravitino#catalog-operations",children:"Manage Relational Metadata Using Gravitino"})," for more details."]}),"\n",(0,s.jsx)(i.h2,{id:"schema",children:"Schema"}),"\n",(0,s.jsx)(i.h3,{id:"schema-capabilities",children:"Schema capabilities"}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsx)(i.li,{children:"doesn't support cascade drop schema."}),"\n"]}),"\n",(0,s.jsx)(i.h3,{id:"schema-properties",children:"Schema properties"}),"\n",(0,s.jsxs)(i.p,{children:["You could put properties except ",(0,s.jsx)(i.code,{children:"comment"}),"."]}),"\n",(0,s.jsx)(i.h3,{id:"schema-operations",children:"Schema operations"}),"\n",(0,s.jsxs)(i.p,{children:["Please refer to ",(0,s.jsx)(i.a,{href:"/docs/0.6.0-incubating/manage-relational-metadata-using-gravitino#schema-operations",children:"Manage Relational Metadata Using Gravitino"})," for more details."]}),"\n",(0,s.jsx)(i.h2,{id:"table",children:"Table"}),"\n",(0,s.jsx)(i.h3,{id:"table-capabilities",children:"Table capabilities"}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsx)(i.li,{children:"Doesn't support column default value."}),"\n"]}),"\n",(0,s.jsx)(i.h4,{id:"table-partitions",children:"Table partitions"}),"\n",(0,s.jsx)(i.p,{children:"Supports transforms:"}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsx)(i.li,{children:(0,s.jsx)(i.code,{children:"IdentityTransform"})}),"\n",(0,s.jsx)(i.li,{children:(0,s.jsx)(i.code,{children:"BucketTransform"})}),"\n",(0,s.jsx)(i.li,{children:(0,s.jsx)(i.code,{children:"TruncateTransform"})}),"\n",(0,s.jsx)(i.li,{children:(0,s.jsx)(i.code,{children:"YearTransform"})}),"\n",(0,s.jsx)(i.li,{children:(0,s.jsx)(i.code,{children:"MonthTransform"})}),"\n",(0,s.jsx)(i.li,{children:(0,s.jsx)(i.code,{children:"DayTransform"})}),"\n",(0,s.jsx)(i.li,{children:(0,s.jsx)(i.code,{children:"HourTransform"})}),"\n"]}),"\n",(0,s.jsx)(i.admonition,{type:"info",children:(0,s.jsxs)(i.p,{children:["Iceberg doesn't support multi fields in ",(0,s.jsx)(i.code,{children:"BucketTransform"}),".\nIceberg doesn't support ",(0,s.jsx)(i.code,{children:"ApplyTransform"}),", ",(0,s.jsx)(i.code,{children:"RangeTransform"}),", and ",(0,s.jsx)(i.code,{children:"ListTransform"}),"."]})}),"\n",(0,s.jsx)(i.h3,{id:"table-sort-orders",children:"Table sort orders"}),"\n",(0,s.jsx)(i.p,{children:"supports expressions:"}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsx)(i.li,{children:(0,s.jsx)(i.code,{children:"FieldReference"})}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.code,{children:"FunctionExpression"}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsx)(i.li,{children:(0,s.jsx)(i.code,{children:"bucket"})}),"\n",(0,s.jsx)(i.li,{children:(0,s.jsx)(i.code,{children:"truncate"})}),"\n",(0,s.jsx)(i.li,{children:(0,s.jsx)(i.code,{children:"year"})}),"\n",(0,s.jsx)(i.li,{children:(0,s.jsx)(i.code,{children:"month"})}),"\n",(0,s.jsx)(i.li,{children:(0,s.jsx)(i.code,{children:"day"})}),"\n",(0,s.jsx)(i.li,{children:(0,s.jsx)(i.code,{children:"hour"})}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(i.admonition,{type:"info",children:(0,s.jsxs)(i.p,{children:["For ",(0,s.jsx)(i.code,{children:"bucket"})," and ",(0,s.jsx)(i.code,{children:"truncate"}),", the first argument must be integer literal, and the second argument must be field reference."]})}),"\n",(0,s.jsx)(i.h3,{id:"table-distributions",children:"Table distributions"}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsxs)(i.li,{children:["Gravitino used by default ",(0,s.jsx)(i.code,{children:"NoneDistribution"}),"."]}),"\n"]}),"\n",(0,s.jsxs)(d.A,{groupId:"language",queryString:!0,children:[(0,s.jsx)(t.default,{value:"json",label:"JSON",children:(0,s.jsx)(i.pre,{children:(0,s.jsx)(i.code,{className:"language-json",children:'{\n  "strategy": "none",\n  "number": 0,\n  "expressions": []\n}\n'})})}),(0,s.jsx)(t.default,{value:"java",label:"Java",children:(0,s.jsx)(i.pre,{children:(0,s.jsx)(i.code,{className:"language-java",children:"Distributions.NONE;\n"})})})]}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsxs)(i.li,{children:["Support ",(0,s.jsx)(i.code,{children:"HashDistribution"}),", Hash distribute by partition key."]}),"\n"]}),"\n",(0,s.jsxs)(d.A,{groupId:"language",queryString:!0,children:[(0,s.jsx)(t.default,{value:"json",label:"JSON",children:(0,s.jsx)(i.pre,{children:(0,s.jsx)(i.code,{className:"language-json",children:'{\n  "strategy": "hash",\n  "number": 0,\n  "expressions": []\n}\n'})})}),(0,s.jsx)(t.default,{value:"java",label:"Java",children:(0,s.jsx)(i.pre,{children:(0,s.jsx)(i.code,{className:"language-java",children:"Distributions.HASH;\n"})})})]}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsxs)(i.li,{children:["Support ",(0,s.jsx)(i.code,{children:"RangeDistribution"}),", You can pass ",(0,s.jsx)(i.code,{children:"range"})," as values through the API. Range distribute by partition key or sort key if table has an SortOrder."]}),"\n"]}),"\n",(0,s.jsxs)(d.A,{groupId:"language",queryString:!0,children:[(0,s.jsx)(t.default,{value:"json",label:"JSON",children:(0,s.jsx)(i.pre,{children:(0,s.jsx)(i.code,{className:"language-json",children:'{\n  "strategy": "range",\n  "number": 0,\n  "expressions": []\n}\n'})})}),(0,s.jsx)(t.default,{value:"java",label:"Java",children:(0,s.jsx)(i.pre,{children:(0,s.jsx)(i.code,{className:"language-java",children:"Distributions.RANGE;\n"})})})]}),"\n",(0,s.jsx)(i.admonition,{type:"info",children:(0,s.jsx)(i.p,{children:"Iceberg automatically distributes the data according to the partition or table sort order. It is forbidden to specify distribution expressions."})}),"\n",(0,s.jsx)(i.admonition,{type:"info",children:(0,s.jsxs)(i.p,{children:["Apache Iceberg doesn't support Gravitino ",(0,s.jsx)(i.code,{children:"EvenDistribution"})," type."]})}),"\n",(0,s.jsx)(i.h3,{id:"table-column-types",children:"Table column types"}),"\n",(0,s.jsxs)(i.table,{children:[(0,s.jsx)(i.thead,{children:(0,s.jsxs)(i.tr,{children:[(0,s.jsx)(i.th,{children:"Gravitino Type"}),(0,s.jsx)(i.th,{children:"Apache Iceberg Type"})]})}),(0,s.jsxs)(i.tbody,{children:[(0,s.jsxs)(i.tr,{children:[(0,s.jsx)(i.td,{children:(0,s.jsx)(i.code,{children:"Struct"})}),(0,s.jsx)(i.td,{children:(0,s.jsx)(i.code,{children:"Struct"})})]}),(0,s.jsxs)(i.tr,{children:[(0,s.jsx)(i.td,{children:(0,s.jsx)(i.code,{children:"Map"})}),(0,s.jsx)(i.td,{children:(0,s.jsx)(i.code,{children:"Map"})})]}),(0,s.jsxs)(i.tr,{children:[(0,s.jsx)(i.td,{children:(0,s.jsx)(i.code,{children:"Array"})}),(0,s.jsx)(i.td,{children:(0,s.jsx)(i.code,{children:"Array"})})]}),(0,s.jsxs)(i.tr,{children:[(0,s.jsx)(i.td,{children:(0,s.jsx)(i.code,{children:"Boolean"})}),(0,s.jsx)(i.td,{children:(0,s.jsx)(i.code,{children:"Boolean"})})]}),(0,s.jsxs)(i.tr,{children:[(0,s.jsx)(i.td,{children:(0,s.jsx)(i.code,{children:"Integer"})}),(0,s.jsx)(i.td,{children:(0,s.jsx)(i.code,{children:"Integer"})})]}),(0,s.jsxs)(i.tr,{children:[(0,s.jsx)(i.td,{children:(0,s.jsx)(i.code,{children:"Long"})}),(0,s.jsx)(i.td,{children:(0,s.jsx)(i.code,{children:"Long"})})]}),(0,s.jsxs)(i.tr,{children:[(0,s.jsx)(i.td,{children:(0,s.jsx)(i.code,{children:"Float"})}),(0,s.jsx)(i.td,{children:(0,s.jsx)(i.code,{children:"Float"})})]}),(0,s.jsxs)(i.tr,{children:[(0,s.jsx)(i.td,{children:(0,s.jsx)(i.code,{children:"Double"})}),(0,s.jsx)(i.td,{children:(0,s.jsx)(i.code,{children:"Double"})})]}),(0,s.jsxs)(i.tr,{children:[(0,s.jsx)(i.td,{children:(0,s.jsx)(i.code,{children:"String"})}),(0,s.jsx)(i.td,{children:(0,s.jsx)(i.code,{children:"String"})})]}),(0,s.jsxs)(i.tr,{children:[(0,s.jsx)(i.td,{children:(0,s.jsx)(i.code,{children:"Date"})}),(0,s.jsx)(i.td,{children:(0,s.jsx)(i.code,{children:"Date"})})]}),(0,s.jsxs)(i.tr,{children:[(0,s.jsx)(i.td,{children:(0,s.jsx)(i.code,{children:"Time"})}),(0,s.jsx)(i.td,{children:(0,s.jsx)(i.code,{children:"Time"})})]}),(0,s.jsxs)(i.tr,{children:[(0,s.jsx)(i.td,{children:(0,s.jsx)(i.code,{children:"TimestampType withZone"})}),(0,s.jsx)(i.td,{children:(0,s.jsx)(i.code,{children:"TimestampType withZone"})})]}),(0,s.jsxs)(i.tr,{children:[(0,s.jsx)(i.td,{children:(0,s.jsx)(i.code,{children:"TimestampType withoutZone"})}),(0,s.jsx)(i.td,{children:(0,s.jsx)(i.code,{children:"TimestampType withoutZone"})})]}),(0,s.jsxs)(i.tr,{children:[(0,s.jsx)(i.td,{children:(0,s.jsx)(i.code,{children:"Decimal"})}),(0,s.jsx)(i.td,{children:(0,s.jsx)(i.code,{children:"Decimal"})})]}),(0,s.jsxs)(i.tr,{children:[(0,s.jsx)(i.td,{children:(0,s.jsx)(i.code,{children:"Fixed"})}),(0,s.jsx)(i.td,{children:(0,s.jsx)(i.code,{children:"Fixed"})})]}),(0,s.jsxs)(i.tr,{children:[(0,s.jsx)(i.td,{children:(0,s.jsx)(i.code,{children:"BinaryType"})}),(0,s.jsx)(i.td,{children:(0,s.jsx)(i.code,{children:"Binary"})})]}),(0,s.jsxs)(i.tr,{children:[(0,s.jsx)(i.td,{children:(0,s.jsx)(i.code,{children:"UUID"})}),(0,s.jsx)(i.td,{children:(0,s.jsx)(i.code,{children:"UUID"})})]})]})]}),"\n",(0,s.jsx)(i.admonition,{type:"info",children:(0,s.jsxs)(i.p,{children:["Apache Iceberg doesn't support Gravitino ",(0,s.jsx)(i.code,{children:"Varchar"})," ",(0,s.jsx)(i.code,{children:"Fixedchar"})," ",(0,s.jsx)(i.code,{children:"Byte"})," ",(0,s.jsx)(i.code,{children:"Short"})," ",(0,s.jsx)(i.code,{children:"Union"})," type.\nMeanwhile, the data types other than listed above are mapped to Gravitino ",(0,s.jsx)(i.strong,{children:(0,s.jsx)(i.a,{href:"/docs/0.6.0-incubating/manage-relational-metadata-using-gravitino#external-type",children:"External Type"})})," that represents an unresolvable data type since 0.6.0."]})}),"\n",(0,s.jsx)(i.h3,{id:"table-properties",children:"Table properties"}),"\n",(0,s.jsxs)(i.p,{children:["You can pass ",(0,s.jsx)(i.a,{href:"https://iceberg.apache.org/docs/1.5.2/configuration/",children:"Iceberg table properties"})," to Gravitino when creating an Iceberg table."]}),"\n",(0,s.jsx)(i.p,{children:"The Gravitino server doesn't allow passing the following reserved fields."}),"\n",(0,s.jsxs)(i.table,{children:[(0,s.jsx)(i.thead,{children:(0,s.jsxs)(i.tr,{children:[(0,s.jsx)(i.th,{children:"Configuration item"}),(0,s.jsx)(i.th,{children:"Description"})]})}),(0,s.jsxs)(i.tbody,{children:[(0,s.jsxs)(i.tr,{children:[(0,s.jsx)(i.td,{children:(0,s.jsx)(i.code,{children:"comment"})}),(0,s.jsx)(i.td,{children:"The table comment."})]}),(0,s.jsxs)(i.tr,{children:[(0,s.jsx)(i.td,{children:(0,s.jsx)(i.code,{children:"creator"})}),(0,s.jsx)(i.td,{children:"The table creator."})]}),(0,s.jsxs)(i.tr,{children:[(0,s.jsx)(i.td,{children:(0,s.jsx)(i.code,{children:"location"})}),(0,s.jsx)(i.td,{children:"Iceberg location for table storage."})]}),(0,s.jsxs)(i.tr,{children:[(0,s.jsx)(i.td,{children:(0,s.jsx)(i.code,{children:"current-snapshot-id"})}),(0,s.jsx)(i.td,{children:"The snapshot represents the current state of the table."})]}),(0,s.jsxs)(i.tr,{children:[(0,s.jsx)(i.td,{children:(0,s.jsx)(i.code,{children:"cherry-pick-snapshot-id"})}),(0,s.jsx)(i.td,{children:"Selecting a specific snapshot in a merge operation."})]}),(0,s.jsxs)(i.tr,{children:[(0,s.jsx)(i.td,{children:(0,s.jsx)(i.code,{children:"sort-order"})}),(0,s.jsx)(i.td,{children:"Selecting a specific snapshot in a merge operation."})]}),(0,s.jsxs)(i.tr,{children:[(0,s.jsx)(i.td,{children:(0,s.jsx)(i.code,{children:"identifier-fields"})}),(0,s.jsx)(i.td,{children:"The identifier fields for defining the table."})]}),(0,s.jsxs)(i.tr,{children:[(0,s.jsx)(i.td,{children:(0,s.jsx)(i.code,{children:"write.distribution-mode"})}),(0,s.jsx)(i.td,{children:"Defines distribution of write data"})]})]})]}),"\n",(0,s.jsx)(i.h3,{id:"table-indexes",children:"Table indexes"}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsx)(i.li,{children:"Doesn't support table indexes."}),"\n"]}),"\n",(0,s.jsx)(i.h3,{id:"table-operations",children:"Table operations"}),"\n",(0,s.jsxs)(i.p,{children:["Please refer to ",(0,s.jsx)(i.a,{href:"/docs/0.6.0-incubating/manage-relational-metadata-using-gravitino#table-operations",children:"Manage Relational Metadata Using Gravitino"})," for more details."]}),"\n",(0,s.jsx)(i.h4,{id:"alter-table-operations",children:"Alter table operations"}),"\n",(0,s.jsx)(i.p,{children:"Supports operations:"}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsx)(i.li,{children:(0,s.jsx)(i.code,{children:"RenameTable"})}),"\n",(0,s.jsx)(i.li,{children:(0,s.jsx)(i.code,{children:"SetProperty"})}),"\n",(0,s.jsx)(i.li,{children:(0,s.jsx)(i.code,{children:"RemoveProperty"})}),"\n",(0,s.jsx)(i.li,{children:(0,s.jsx)(i.code,{children:"UpdateComment"})}),"\n",(0,s.jsx)(i.li,{children:(0,s.jsx)(i.code,{children:"AddColumn"})}),"\n",(0,s.jsx)(i.li,{children:(0,s.jsx)(i.code,{children:"DeleteColumn"})}),"\n",(0,s.jsx)(i.li,{children:(0,s.jsx)(i.code,{children:"RenameColumn"})}),"\n",(0,s.jsx)(i.li,{children:(0,s.jsx)(i.code,{children:"UpdateColumnType"})}),"\n",(0,s.jsx)(i.li,{children:(0,s.jsx)(i.code,{children:"UpdateColumnPosition"})}),"\n",(0,s.jsx)(i.li,{children:(0,s.jsx)(i.code,{children:"UpdateColumnNullability"})}),"\n",(0,s.jsx)(i.li,{children:(0,s.jsx)(i.code,{children:"UpdateColumnComment"})}),"\n"]}),"\n",(0,s.jsx)(i.admonition,{type:"info",children:(0,s.jsxs)(i.p,{children:["The default column position is ",(0,s.jsx)(i.code,{children:"LAST"})," when you add a column. If you add a non nullability column, there may be compatibility issues."]})}),"\n",(0,s.jsx)(i.admonition,{type:"caution",children:(0,s.jsx)(i.p,{children:"If you update a nullability column to non nullability, there may be compatibility issues."})}),"\n",(0,s.jsx)(i.h2,{id:"hdfs-configuration",children:"HDFS configuration"}),"\n",(0,s.jsxs)(i.p,{children:["You can place ",(0,s.jsx)(i.code,{children:"core-site.xml"})," and ",(0,s.jsx)(i.code,{children:"hdfs-site.xml"})," in the ",(0,s.jsx)(i.code,{children:"catalogs/lakehouse-iceberg/conf"})," directory to automatically load as the default HDFS configuration."]}),"\n",(0,s.jsx)(i.admonition,{type:"info",children:(0,s.jsxs)(i.p,{children:["Builds with Hadoop 2.10.x, there may be compatibility issues when accessing Hadoop 3.x clusters.\nWhen writing to HDFS, the Gravitino Iceberg REST server can only operate as the specified HDFS user and doesn't support proxying to other HDFS users. See ",(0,s.jsx)(i.a,{href:"/docs/0.6.0-incubating/gravitino-server-config",children:"How to access Apache Hadoop"})," for more details."]})})]})}function j(e={}){const{wrapper:i}={...(0,r.R)(),...e.components};return i?(0,s.jsx)(i,{...e,children:(0,s.jsx)(x,{...e})}):x(e)}},83593:(e,i,n)=>{n.d(i,{A:()=>j});var s=n(79474),r=n(13526),d=n(23544),t=n(45263),c=n(9805);const l={tabList:"tabList_m5Qj",tabItem:"tabItem_R4qO"};var a=n(13274);function o(e){let{className:i,block:n,selectedValue:s,selectValue:t,tabValues:c}=e;const o=[],{blockElementScrollPositionUntilNextRender:h}=(0,d.a_)(),x=e=>{const i=e.currentTarget,n=o.indexOf(i),r=c[n].value;r!==s&&(h(i),t(r))},j=e=>{let i=null;switch(e.key){case"Enter":x(e);break;case"ArrowRight":{const n=o.indexOf(e.currentTarget)+1;i=o[n]??o[0];break}case"ArrowLeft":{const n=o.indexOf(e.currentTarget)-1;i=o[n]??o[o.length-1];break}}i?.focus()};return(0,a.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.A)("tabs",{"tabs--block":n},i),children:c.map((e=>{let{value:i,label:n,attributes:d}=e;return(0,a.jsx)("li",{role:"tab",tabIndex:s===i?0:-1,"aria-selected":s===i,ref:e=>o.push(e),onKeyDown:j,onClick:x,...d,className:(0,r.A)("tabs__item",l.tabItem,d?.className,{"tabs__item--active":s===i}),children:n??i},i)}))})}function h(e){let{lazy:i,children:n,selectedValue:r}=e;const d=(Array.isArray(n)?n:[n]).filter(Boolean);if(i){const e=d.find((e=>e.props.value===r));return e?(0,s.cloneElement)(e,{className:"margin-top--md"}):null}return(0,a.jsx)("div",{className:"margin-top--md",children:d.map(((e,i)=>(0,s.cloneElement)(e,{key:i,hidden:e.props.value!==r})))})}function x(e){const i=(0,t.u)(e);return(0,a.jsxs)("div",{className:(0,r.A)("tabs-container",l.tabList),children:[(0,a.jsx)(o,{...i,...e}),(0,a.jsx)(h,{...i,...e})]})}function j(e){const i=(0,c.default)();return(0,a.jsx)(x,{...e,children:(0,t.v)(e.children)},String(i))}}}]);