"use strict";(self.webpackChunkapache_website_template=self.webpackChunkapache_website_template||[]).push([[17420],{43362:(e,a,n)=>{n.r(a),n.d(a,{assets:()=>c,contentTitle:()=>s,default:()=>h,frontMatter:()=>r,metadata:()=>o,toc:()=>l});var t=n(13274),i=n(8438);const r={title:"Spark connector hive catalog",slug:"/spark-connector/spark-catalog-hive",keyword:"spark connector hive catalog",license:"This software is licensed under the Apache License version 2."},s=void 0,o={id:"spark-connector/spark-catalog-hive",title:"Spark connector hive catalog",description:"With the Apache Gravitino Spark connector, accessing data or managing metadata in Hive catalogs becomes straightforward, enabling seamless federation queries across different Hive catalogs.",source:"@site/docs/spark-connector/spark-catalog-hive.md",sourceDirName:"spark-connector",slug:"/spark-connector/spark-catalog-hive",permalink:"/docs/next/spark-connector/spark-catalog-hive",draft:!1,unlisted:!1,editUrl:"https://github.com/apache/gravitino-site/tree/main/docs/spark-connector/spark-catalog-hive.md",tags:[],version:"current",lastUpdatedBy:"FANNG",lastUpdatedAt:1732866794e3,frontMatter:{title:"Spark connector hive catalog",slug:"/spark-connector/spark-catalog-hive",keyword:"spark connector hive catalog",license:"This software is licensed under the Apache License version 2."},sidebar:"docs",previous:{title:"Overview",permalink:"/docs/next/spark-connector/spark-connector"},next:{title:"Iceberg",permalink:"/docs/next/spark-connector/spark-catalog-iceberg"}},c={},l=[{value:"Capabilities",id:"capabilities",level:2},{value:"Requirement",id:"requirement",level:2},{value:"SQL example",id:"sql-example",level:2},{value:"Catalog properties",id:"catalog-properties",level:2},{value:"Storage",id:"storage",level:2},{value:"S3",id:"s3",level:3}];function d(e){const a={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(a.p,{children:"With the Apache Gravitino Spark connector, accessing data or managing metadata in Hive catalogs becomes straightforward, enabling seamless federation queries across different Hive catalogs."}),"\n",(0,t.jsx)(a.h2,{id:"capabilities",children:"Capabilities"}),"\n",(0,t.jsx)(a.p,{children:"Supports most DDL and DML operations in SparkSQL, except such operations:"}),"\n",(0,t.jsxs)(a.ul,{children:["\n",(0,t.jsx)(a.li,{children:"Function operations"}),"\n",(0,t.jsx)(a.li,{children:"Partition operations"}),"\n",(0,t.jsx)(a.li,{children:"View operations"}),"\n",(0,t.jsx)(a.li,{children:"Querying UDF"}),"\n",(0,t.jsxs)(a.li,{children:[(0,t.jsx)(a.code,{children:"LOAD"})," clause"]}),"\n",(0,t.jsxs)(a.li,{children:[(0,t.jsx)(a.code,{children:"CREATE TABLE LIKE"})," clause"]}),"\n",(0,t.jsxs)(a.li,{children:[(0,t.jsx)(a.code,{children:"TRUCATE TABLE"})," clause"]}),"\n"]}),"\n",(0,t.jsx)(a.admonition,{type:"info",children:(0,t.jsxs)(a.p,{children:["Don't support reading and writing tables with ",(0,t.jsx)(a.code,{children:"org.apache.hadoop.hive.serde2.OpenCSVSerde"})," row format."]})}),"\n",(0,t.jsx)(a.h2,{id:"requirement",children:"Requirement"}),"\n",(0,t.jsxs)(a.ul,{children:["\n",(0,t.jsx)(a.li,{children:"Hive metastore 2.x"}),"\n",(0,t.jsx)(a.li,{children:"HDFS 2.x or 3.x"}),"\n"]}),"\n",(0,t.jsx)(a.h2,{id:"sql-example",children:"SQL example"}),"\n",(0,t.jsx)(a.pre,{children:(0,t.jsx)(a.code,{className:"language-sql",children:"\n// Suppose hive_a is the Hive catalog name managed by Gravitino\nUSE hive_a;\n\nCREATE DATABASE IF NOT EXISTS mydatabase;\nUSE mydatabase;\n\n// Create table\nCREATE TABLE IF NOT EXISTS employees (\n    id INT,\n    name STRING,\n    age INT\n)\nPARTITIONED BY (department STRING)\nSTORED AS PARQUET;\nDESC TABLE EXTENDED employees;\n\nINSERT OVERWRITE TABLE employees PARTITION(department='Engineering') VALUES (1, 'John Doe', 30), (2, 'Jane Smith', 28);\nINSERT OVERWRITE TABLE employees PARTITION(department='Marketing') VALUES (3, 'Mike Brown', 32);\n\nSELECT * FROM employees WHERE department = 'Engineering';\n"})}),"\n",(0,t.jsx)(a.h2,{id:"catalog-properties",children:"Catalog properties"}),"\n",(0,t.jsx)(a.p,{children:"Gravitino spark connector will transform below property names which are defined in catalog properties to Spark Hive connector configuration."}),"\n",(0,t.jsxs)(a.table,{children:[(0,t.jsx)(a.thead,{children:(0,t.jsxs)(a.tr,{children:[(0,t.jsx)(a.th,{children:"Property name in Gravitino catalog properties"}),(0,t.jsx)(a.th,{children:"Spark Hive connector configuration"}),(0,t.jsx)(a.th,{children:"Description"}),(0,t.jsx)(a.th,{children:"Since Version"})]})}),(0,t.jsx)(a.tbody,{children:(0,t.jsxs)(a.tr,{children:[(0,t.jsx)(a.td,{children:(0,t.jsx)(a.code,{children:"metastore.uris"})}),(0,t.jsx)(a.td,{children:(0,t.jsx)(a.code,{children:"hive.metastore.uris"})}),(0,t.jsx)(a.td,{children:"Hive metastore uri address"}),(0,t.jsx)(a.td,{children:"0.5.0"})]})})]}),"\n",(0,t.jsxs)(a.p,{children:["Gravitino catalog property names with the prefix ",(0,t.jsx)(a.code,{children:"spark.bypass."})," are passed to Spark Hive connector. For example, using ",(0,t.jsx)(a.code,{children:"spark.bypass.hive.exec.dynamic.partition.mode"})," to pass the ",(0,t.jsx)(a.code,{children:"hive.exec.dynamic.partition.mode"})," to the Spark Hive connector."]}),"\n",(0,t.jsx)(a.admonition,{type:"caution",children:(0,t.jsxs)(a.p,{children:["When using the ",(0,t.jsx)(a.code,{children:"spark-sql"})," shell client, you must explicitly set the ",(0,t.jsx)(a.code,{children:"spark.bypass.spark.sql.hive.metastore.jars"})," in the Gravitino Hive catalog properties. Replace the default ",(0,t.jsx)(a.code,{children:"builtin"})," value with the appropriate setting for your setup."]})}),"\n",(0,t.jsx)(a.h2,{id:"storage",children:"Storage"}),"\n",(0,t.jsx)(a.h3,{id:"s3",children:"S3"}),"\n",(0,t.jsxs)(a.p,{children:["Please refer to ",(0,t.jsx)(a.a,{href:"/docs/next/hive-catalog",children:"Hive catalog with s3"})," to set up a Hive catalog with s3 storage. To query the data stored in s3, you need to add s3 secret to the Spark configuration using ",(0,t.jsx)(a.code,{children:"spark.sql.catalog.${hive_catalog_name}.fs.s3a.access.key"})," and ",(0,t.jsx)(a.code,{children:"spark.sql.catalog.${hive_catalog_name}.fs.s3a.secret.key"}),". Additionally, download ",(0,t.jsx)(a.a,{href:"https://mvnrepository.com/artifact/org.apache.hadoop/hadoop-aws",children:"hadoop aws jar"}),", ",(0,t.jsx)(a.a,{href:"https://mvnrepository.com/artifact/com.amazonaws/aws-java-sdk-bundle",children:"aws java sdk jar"})," and place them in the classpath of Spark."]})]})}function h(e={}){const{wrapper:a}={...(0,i.R)(),...e.components};return a?(0,t.jsx)(a,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}}}]);