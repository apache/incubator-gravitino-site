"use strict";(self.webpackChunkapache_website_template=self.webpackChunkapache_website_template||[]).push([[23220],{34260:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>a,contentTitle:()=>c,default:()=>h,frontMatter:()=>s,metadata:()=>d,toc:()=>l});var i=n(13274),t=n(8438);const s={title:"Apache Gravitino Spark connector",slug:"/spark-connector/spark-connector",keyword:"spark connector federation query",license:"This software is licensed under the Apache License version 2."},c=void 0,d={id:"spark-connector/spark-connector",title:"Apache Gravitino Spark connector",description:"Overview",source:"@site/versioned_docs/version-0.6.0-incubating/spark-connector/spark-connector.md",sourceDirName:"spark-connector",slug:"/spark-connector/spark-connector",permalink:"/docs/0.6.0-incubating/spark-connector/spark-connector",draft:!1,unlisted:!1,editUrl:"https://github.com/apache/gravitino-site/tree/main/docs/spark-connector/spark-connector.md",tags:[],version:"0.6.0-incubating",lastUpdatedBy:"Justin Mclean",lastUpdatedAt:1731621995e3,frontMatter:{title:"Apache Gravitino Spark connector",slug:"/spark-connector/spark-connector",keyword:"spark connector federation query",license:"This software is licensed under the Apache License version 2."},sidebar:"docs",previous:{title:"Development",permalink:"/docs/0.6.0-incubating/trino-connector/development"},next:{title:"Hive",permalink:"/docs/0.6.0-incubating/spark-connector/spark-catalog-hive"}},a={},l=[{value:"Overview",id:"overview",level:2},{value:"Capabilities",id:"capabilities",level:2},{value:"Requirement",id:"requirement",level:2},{value:"How to use it",id:"how-to-use-it",level:2},{value:"Datatype mapping",id:"datatype-mapping",level:2}];function o(e){const r={a:"a",admonition:"admonition",code:"code",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,t.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(r.h2,{id:"overview",children:"Overview"}),"\n",(0,i.jsx)(r.p,{children:"The Apache Gravitino Spark connector leverages the Spark DataSourceV2 interface to facilitate the management of diverse catalogs under Gravitino. This capability allows users to perform federation queries, accessing data from various catalogs through a unified interface and consistent access control."}),"\n",(0,i.jsx)(r.h2,{id:"capabilities",children:"Capabilities"}),"\n",(0,i.jsxs)(r.ol,{children:["\n",(0,i.jsxs)(r.li,{children:["Supports ",(0,i.jsx)(r.a,{href:"/docs/0.6.0-incubating/spark-connector/spark-catalog-hive",children:"Hive catalog"})," and ",(0,i.jsx)(r.a,{href:"/docs/0.6.0-incubating/spark-connector/spark-catalog-iceberg",children:"Iceberg catalog"}),"."]}),"\n",(0,i.jsx)(r.li,{children:"Supports federation query."}),"\n",(0,i.jsx)(r.li,{children:"Supports most DDL and DML SQLs."}),"\n"]}),"\n",(0,i.jsx)(r.h2,{id:"requirement",children:"Requirement"}),"\n",(0,i.jsxs)(r.ul,{children:["\n",(0,i.jsx)(r.li,{children:"Spark 3.3 or 3.4 or 3.5"}),"\n",(0,i.jsx)(r.li,{children:"Scala 2.12 or 2.13"}),"\n",(0,i.jsx)(r.li,{children:"JDK 8 or 11 or 17"}),"\n"]}),"\n",(0,i.jsx)(r.admonition,{type:"info",children:(0,i.jsx)(r.p,{children:"Gravitino Spark connector doesn't support Scala 2.13 for Spark3.3."})}),"\n",(0,i.jsx)(r.h2,{id:"how-to-use-it",children:"How to use it"}),"\n",(0,i.jsxs)(r.ol,{children:["\n",(0,i.jsxs)(r.li,{children:[(0,i.jsx)(r.a,{href:"/docs/0.6.0-incubating/how-to-build",children:"Build"})," or download the package (",(0,i.jsx)(r.a,{href:"https://mvnrepository.com/artifact/org.apache.gravitino/gravitino-spark-connector-runtime-3.3",children:"gravitino-spark-connector-runtime-3.3"}),", ",(0,i.jsx)(r.a,{href:"https://mvnrepository.com/artifact/org.apache.gravitino/gravitino-spark-connector-runtime-3.4",children:"gravitino-spark-connector-runtime-3.4"}),", ",(0,i.jsx)(r.a,{href:"https://mvnrepository.com/artifact/org.apache.gravitino/gravitino-spark-connector-runtime-3.5",children:"gravitino-spark-connector-runtime-3.5"}),"), and place it to the classpath of Spark."]}),"\n",(0,i.jsx)(r.li,{children:"Configure the Spark session to use the Gravitino spark connector."}),"\n"]}),"\n",(0,i.jsxs)(r.table,{children:[(0,i.jsx)(r.thead,{children:(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.th,{children:"Property"}),(0,i.jsx)(r.th,{children:"Type"}),(0,i.jsx)(r.th,{children:"Default Value"}),(0,i.jsx)(r.th,{children:"Description"}),(0,i.jsx)(r.th,{children:"Required"}),(0,i.jsx)(r.th,{children:"Since Version"})]})}),(0,i.jsxs)(r.tbody,{children:[(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.td,{children:"spark.plugins"}),(0,i.jsx)(r.td,{children:"string"}),(0,i.jsx)(r.td,{children:"(none)"}),(0,i.jsxs)(r.td,{children:["Gravitino spark plugin name, ",(0,i.jsx)(r.code,{children:"org.apache.gravitino.spark.connector.plugin.GravitinoSparkPlugin"})]}),(0,i.jsx)(r.td,{children:"Yes"}),(0,i.jsx)(r.td,{children:"0.5.0"})]}),(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.td,{children:"spark.sql.gravitino.metalake"}),(0,i.jsx)(r.td,{children:"string"}),(0,i.jsx)(r.td,{children:"(none)"}),(0,i.jsx)(r.td,{children:"The metalake name that spark connector used to request to Gravitino."}),(0,i.jsx)(r.td,{children:"Yes"}),(0,i.jsx)(r.td,{children:"0.5.0"})]}),(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.td,{children:"spark.sql.gravitino.uri"}),(0,i.jsx)(r.td,{children:"string"}),(0,i.jsx)(r.td,{children:"(none)"}),(0,i.jsx)(r.td,{children:"The uri of Gravitino server address."}),(0,i.jsx)(r.td,{children:"Yes"}),(0,i.jsx)(r.td,{children:"0.5.0"})]}),(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.td,{children:"spark.sql.gravitino.enableIcebergSupport"}),(0,i.jsx)(r.td,{children:"string"}),(0,i.jsx)(r.td,{children:(0,i.jsx)(r.code,{children:"false"})}),(0,i.jsxs)(r.td,{children:["Set to ",(0,i.jsx)(r.code,{children:"true"})," to use Iceberg catalog."]}),(0,i.jsx)(r.td,{children:"No"}),(0,i.jsx)(r.td,{children:"0.5.1"})]})]})]}),"\n",(0,i.jsx)(r.pre,{children:(0,i.jsx)(r.code,{className:"language-shell",children:'./bin/spark-sql -v \\\n--conf spark.plugins="org.apache.gravitino.spark.connector.plugin.GravitinoSparkPlugin" \\\n--conf spark.sql.gravitino.uri=http://127.0.0.1:8090 \\\n--conf spark.sql.gravitino.metalake=test \\\n--conf spark.sql.gravitino.enableIcebergSupport=true \\\n--conf spark.sql.warehouse.dir=hdfs://127.0.0.1:9000/user/hive/warehouse-hive\n'})}),"\n",(0,i.jsxs)(r.ol,{start:"3",children:["\n",(0,i.jsxs)(r.li,{children:["\n",(0,i.jsxs)(r.p,{children:[(0,i.jsx)(r.a,{href:"https://iceberg.apache.org/releases/",children:"Download"})," corresponding runtime jars and place it to the classpath of Spark if using Iceberg catalog."]}),"\n"]}),"\n",(0,i.jsxs)(r.li,{children:["\n",(0,i.jsx)(r.p,{children:"Execute the Spark SQL query."}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(r.p,{children:["Suppose there are two catalogs in the metalake ",(0,i.jsx)(r.code,{children:"test"}),", ",(0,i.jsx)(r.code,{children:"hive"})," for Hive catalog and ",(0,i.jsx)(r.code,{children:"iceberg"})," for Iceberg catalog."]}),"\n",(0,i.jsx)(r.pre,{children:(0,i.jsx)(r.code,{className:"language-sql",children:"// use hive catalog\nUSE hive;\nCREATE DATABASE db;\nUSE db;\nCREATE TABLE hive_students (id INT, name STRING);\nINSERT INTO hive_students VALUES (1, 'Alice'), (2, 'Bob');\n\n// use Iceberg catalog\nUSE iceberg;\nUSE db;\nCREATE TABLE IF NOT EXISTS iceberg_scores (id INT, score INT) USING iceberg;\nINSERT INTO iceberg_scores VALUES (1, 95), (2, 88);\n\n// execute federation query between hive table and iceberg table\nSELECT hs.name, is.score FROM hive.db.hive_students hs JOIN iceberg_scores is ON hs.id = is.id;\n"})}),"\n",(0,i.jsx)(r.admonition,{type:"info",children:(0,i.jsxs)(r.p,{children:["The command ",(0,i.jsx)(r.code,{children:"SHOW CATALOGS"})," will only display the Spark default catalog, named spark_catalog, due to limitations within the Spark catalog manager. It does not list the catalogs present in the metalake. However, after explicitly using the ",(0,i.jsx)(r.code,{children:"USE"})," command with a specific catalog name, that catalog name then becomes visible in the output of ",(0,i.jsx)(r.code,{children:"SHOW CATALOGS"}),"."]})}),"\n",(0,i.jsx)(r.h2,{id:"datatype-mapping",children:"Datatype mapping"}),"\n",(0,i.jsx)(r.p,{children:"Gravitino spark connector support the following datatype mapping between Spark and Gravitino."}),"\n",(0,i.jsxs)(r.table,{children:[(0,i.jsx)(r.thead,{children:(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.th,{children:"Spark Data Type"}),(0,i.jsx)(r.th,{children:"Gravitino Data Type"}),(0,i.jsx)(r.th,{children:"Since Version"})]})}),(0,i.jsxs)(r.tbody,{children:[(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.td,{children:(0,i.jsx)(r.code,{children:"BooleanType"})}),(0,i.jsx)(r.td,{children:(0,i.jsx)(r.code,{children:"boolean"})}),(0,i.jsx)(r.td,{children:"0.5.0"})]}),(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.td,{children:(0,i.jsx)(r.code,{children:"ByteType"})}),(0,i.jsx)(r.td,{children:(0,i.jsx)(r.code,{children:"byte"})}),(0,i.jsx)(r.td,{children:"0.5.0"})]}),(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.td,{children:(0,i.jsx)(r.code,{children:"ShortType"})}),(0,i.jsx)(r.td,{children:(0,i.jsx)(r.code,{children:"short"})}),(0,i.jsx)(r.td,{children:"0.5.0"})]}),(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.td,{children:(0,i.jsx)(r.code,{children:"IntegerType"})}),(0,i.jsx)(r.td,{children:(0,i.jsx)(r.code,{children:"integer"})}),(0,i.jsx)(r.td,{children:"0.5.0"})]}),(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.td,{children:(0,i.jsx)(r.code,{children:"LongType"})}),(0,i.jsx)(r.td,{children:(0,i.jsx)(r.code,{children:"long"})}),(0,i.jsx)(r.td,{children:"0.5.0"})]}),(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.td,{children:(0,i.jsx)(r.code,{children:"FloatType"})}),(0,i.jsx)(r.td,{children:(0,i.jsx)(r.code,{children:"float"})}),(0,i.jsx)(r.td,{children:"0.5.0"})]}),(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.td,{children:(0,i.jsx)(r.code,{children:"DoubleType"})}),(0,i.jsx)(r.td,{children:(0,i.jsx)(r.code,{children:"double"})}),(0,i.jsx)(r.td,{children:"0.5.0"})]}),(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.td,{children:(0,i.jsx)(r.code,{children:"DecimalType"})}),(0,i.jsx)(r.td,{children:(0,i.jsx)(r.code,{children:"decimal"})}),(0,i.jsx)(r.td,{children:"0.5.0"})]}),(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.td,{children:(0,i.jsx)(r.code,{children:"StringType"})}),(0,i.jsx)(r.td,{children:(0,i.jsx)(r.code,{children:"string"})}),(0,i.jsx)(r.td,{children:"0.5.0"})]}),(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.td,{children:(0,i.jsx)(r.code,{children:"CharType"})}),(0,i.jsx)(r.td,{children:(0,i.jsx)(r.code,{children:"char"})}),(0,i.jsx)(r.td,{children:"0.5.0"})]}),(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.td,{children:(0,i.jsx)(r.code,{children:"VarcharType"})}),(0,i.jsx)(r.td,{children:(0,i.jsx)(r.code,{children:"varchar"})}),(0,i.jsx)(r.td,{children:"0.5.0"})]}),(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.td,{children:(0,i.jsx)(r.code,{children:"TimestampType"})}),(0,i.jsx)(r.td,{children:(0,i.jsx)(r.code,{children:"timestamp with time zone"})}),(0,i.jsx)(r.td,{children:"0.5.0"})]}),(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.td,{children:(0,i.jsx)(r.code,{children:"TimestampNTZType"})}),(0,i.jsx)(r.td,{children:(0,i.jsx)(r.code,{children:"timestamp without time zone"})}),(0,i.jsx)(r.td,{children:"0.5.0"})]}),(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.td,{children:(0,i.jsx)(r.code,{children:"DateType"})}),(0,i.jsx)(r.td,{children:(0,i.jsx)(r.code,{children:"date"})}),(0,i.jsx)(r.td,{children:"0.5.0"})]}),(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.td,{children:(0,i.jsx)(r.code,{children:"BinaryType"})}),(0,i.jsx)(r.td,{children:(0,i.jsx)(r.code,{children:"binary"})}),(0,i.jsx)(r.td,{children:"0.5.0"})]}),(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.td,{children:(0,i.jsx)(r.code,{children:"ArrayType"})}),(0,i.jsx)(r.td,{children:(0,i.jsx)(r.code,{children:"array"})}),(0,i.jsx)(r.td,{children:"0.5.0"})]}),(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.td,{children:(0,i.jsx)(r.code,{children:"MapType"})}),(0,i.jsx)(r.td,{children:(0,i.jsx)(r.code,{children:"map"})}),(0,i.jsx)(r.td,{children:"0.5.0"})]}),(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.td,{children:(0,i.jsx)(r.code,{children:"StructType"})}),(0,i.jsx)(r.td,{children:(0,i.jsx)(r.code,{children:"struct"})}),(0,i.jsx)(r.td,{children:"0.5.0"})]})]})]})]})}function h(e={}){const{wrapper:r}={...(0,t.R)(),...e.components};return r?(0,i.jsx)(r,{...e,children:(0,i.jsx)(o,{...e})}):o(e)}}}]);