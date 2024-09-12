"use strict";(self.webpackChunkapache_website_template=self.webpackChunkapache_website_template||[]).push([[5135],{4546:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>c,contentTitle:()=>s,default:()=>p,frontMatter:()=>r,metadata:()=>o,toc:()=>l});var a=i(13274),t=i(78140);const r={title:"Spark connector hive catalog",slug:"/spark-connector/spark-catalog-hive",keyword:"spark connector hive catalog",license:"This software is licensed under the Apache License version 2."},s=void 0,o={id:"spark-connector/spark-catalog-hive",title:"Spark connector hive catalog",description:"With the Apache Gravitino Spark connector, accessing data or managing metadata in Hive catalogs becomes straightforward, enabling seamless federation queries across different Hive catalogs.",source:"@site/versioned_docs/version-0.6.0-incubating/spark-connector/spark-catalog-hive.md",sourceDirName:"spark-connector",slug:"/spark-connector/spark-catalog-hive",permalink:"/docs/0.6.0-incubating/spark-connector/spark-catalog-hive",draft:!1,unlisted:!1,editUrl:"https://github.com/apache/gravitino-site/tree/main/docs/spark-connector/spark-catalog-hive.md",tags:[],version:"0.6.0-incubating",lastUpdatedBy:"Justin Mclean",lastUpdatedAt:1726110569e3,frontMatter:{title:"Spark connector hive catalog",slug:"/spark-connector/spark-catalog-hive",keyword:"spark connector hive catalog",license:"This software is licensed under the Apache License version 2."},sidebar:"docs",previous:{title:"Overview",permalink:"/docs/0.6.0-incubating/spark-connector/spark-connector"},next:{title:"Iceberg",permalink:"/docs/0.6.0-incubating/spark-connector/spark-catalog-iceberg"}},c={},l=[{value:"Capabilities",id:"capabilities",level:2},{value:"Requirement",id:"requirement",level:2},{value:"SQL example",id:"sql-example",level:2},{value:"Catalog properties",id:"catalog-properties",level:2}];function d(e){const n={admonition:"admonition",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,t.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.p,{children:"With the Apache Gravitino Spark connector, accessing data or managing metadata in Hive catalogs becomes straightforward, enabling seamless federation queries across different Hive catalogs."}),"\n",(0,a.jsx)(n.h2,{id:"capabilities",children:"Capabilities"}),"\n",(0,a.jsx)(n.p,{children:"Supports most DDL and DML operations in SparkSQL, except such operations:"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"Function operations"}),"\n",(0,a.jsx)(n.li,{children:"Partition operations"}),"\n",(0,a.jsx)(n.li,{children:"View operations"}),"\n",(0,a.jsx)(n.li,{children:"Querying UDF"}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.code,{children:"LOAD"})," clause"]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.code,{children:"CREATE TABLE LIKE"})," clause"]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.code,{children:"TRUCATE TABLE"})," clause"]}),"\n"]}),"\n",(0,a.jsx)(n.admonition,{type:"info",children:(0,a.jsxs)(n.p,{children:["Don't support reading and writing tables with ",(0,a.jsx)(n.code,{children:"org.apache.hadoop.hive.serde2.OpenCSVSerde"})," row format."]})}),"\n",(0,a.jsx)(n.h2,{id:"requirement",children:"Requirement"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"Hive metastore 2.x"}),"\n",(0,a.jsx)(n.li,{children:"HDFS 2.x or 3.x"}),"\n"]}),"\n",(0,a.jsx)(n.h2,{id:"sql-example",children:"SQL example"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-sql",children:"\n// Suppose hive_a is the Hive catalog name managed by Gravitino\nUSE hive_a;\n\nCREATE DATABASE IF NOT EXISTS mydatabase;\nUSE mydatabase;\n\n// Create table\nCREATE TABLE IF NOT EXISTS employees (\n    id INT,\n    name STRING,\n    age INT\n)\nPARTITIONED BY (department STRING)\nSTORED AS PARQUET;\nDESC TABLE EXTENDED employees;\n\nINSERT OVERWRITE TABLE employees PARTITION(department='Engineering') VALUES (1, 'John Doe', 30), (2, 'Jane Smith', 28);\nINSERT OVERWRITE TABLE employees PARTITION(department='Marketing') VALUES (3, 'Mike Brown', 32);\n\nSELECT * FROM employees WHERE department = 'Engineering';\n"})}),"\n",(0,a.jsx)(n.h2,{id:"catalog-properties",children:"Catalog properties"}),"\n",(0,a.jsx)(n.p,{children:"Gravitino spark connector will transform below property names which are defined in catalog properties to Spark Hive connector configuration."}),"\n",(0,a.jsxs)(n.table,{children:[(0,a.jsx)(n.thead,{children:(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.th,{children:"Property name in Gravitino catalog properties"}),(0,a.jsx)(n.th,{children:"Spark Hive connector configuration"}),(0,a.jsx)(n.th,{children:"Description"}),(0,a.jsx)(n.th,{children:"Since Version"})]})}),(0,a.jsx)(n.tbody,{children:(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:(0,a.jsx)(n.code,{children:"metastore.uris"})}),(0,a.jsx)(n.td,{children:(0,a.jsx)(n.code,{children:"hive.metastore.uris"})}),(0,a.jsx)(n.td,{children:"Hive metastore uri address"}),(0,a.jsx)(n.td,{children:"0.5.0"})]})})]}),"\n",(0,a.jsxs)(n.p,{children:["Gravitino catalog property names with the prefix ",(0,a.jsx)(n.code,{children:"spark.bypass."})," are passed to Spark Hive connector. For example, using ",(0,a.jsx)(n.code,{children:"spark.bypass.hive.exec.dynamic.partition.mode"})," to pass the ",(0,a.jsx)(n.code,{children:"hive.exec.dynamic.partition.mode"})," to the Spark Hive connector."]}),"\n",(0,a.jsx)(n.admonition,{type:"caution",children:(0,a.jsxs)(n.p,{children:["When using the ",(0,a.jsx)(n.code,{children:"spark-sql"})," shell client, you must explicitly set the ",(0,a.jsx)(n.code,{children:"spark.bypass.spark.sql.hive.metastore.jars"})," in the Gravitino Hive catalog properties. Replace the default ",(0,a.jsx)(n.code,{children:"builtin"})," value with the appropriate setting for your setup."]})})]})}function p(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(d,{...e})}):d(e)}}}]);