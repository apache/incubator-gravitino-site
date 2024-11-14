"use strict";(self.webpackChunkapache_website_template=self.webpackChunkapache_website_template||[]).push([[88286],{26033:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>a,contentTitle:()=>c,default:()=>h,frontMatter:()=>i,metadata:()=>o,toc:()=>d});var r=s(13274),n=s(8438);const i={title:"Apache Gravitino Spark connector integration test",slug:"/spark-connector/spark-connector-integration-test",keyword:"spark connector integration test",license:"This software is licensed under the Apache License version 2."},c=void 0,o={id:"spark-connector/spark-integration-test",title:"Apache Gravitino Spark connector integration test",description:"Overview",source:"@site/versioned_docs/version-0.6.1-incubating/spark-connector/spark-integration-test.md",sourceDirName:"spark-connector",slug:"/spark-connector/spark-connector-integration-test",permalink:"/docs/0.6.1-incubating/spark-connector/spark-connector-integration-test",draft:!1,unlisted:!1,editUrl:"https://github.com/apache/gravitino-site/tree/main/docs/spark-connector/spark-integration-test.md",tags:[],version:"0.6.1-incubating",lastUpdatedBy:"Justin Mclean",lastUpdatedAt:1731621995e3,frontMatter:{title:"Apache Gravitino Spark connector integration test",slug:"/spark-connector/spark-connector-integration-test",keyword:"spark connector integration test",license:"This software is licensed under the Apache License version 2."}},a={},d=[{value:"Overview",id:"overview",level:2},{value:"Normal integration test",id:"normal-integration-test",level:2},{value:"Golden file integration test",id:"golden-file-integration-test",level:2}];function l(e){const t={a:"a",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,n.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h2,{id:"overview",children:"Overview"}),"\n",(0,r.jsxs)(t.p,{children:["There are two types of integration tests in spark connector, normal integration test like ",(0,r.jsx)(t.code,{children:"SparkXXCatalogIT"}),", and the golden file integration test."]}),"\n",(0,r.jsx)(t.h2,{id:"normal-integration-test",children:"Normal integration test"}),"\n",(0,r.jsx)(t.p,{children:"Normal integration test are mainly used to test the correctness of the metadata, it's enabled in the GitHub CI. You could run tests with specific Spark version like:"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{children:'./gradlew :spark-connector:spark3.3:test --tests "org.apache.gravitino.spark.connector.integration.test.hive.SparkHiveCatalogIT33.testCreateHiveFormatPartitionTable"\n'})}),"\n",(0,r.jsx)(t.h2,{id:"golden-file-integration-test",children:"Golden file integration test"}),"\n",(0,r.jsx)(t.p,{children:"Golden file integration test are mainly to test the correctness of the SQL result with massive data, it's disabled in the GitHub CI, you could run tests with following command:"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{children:'./gradlew :spark-connector:spark-3.3:test --tests  "org.apache.gravitino.spark.connector.integration.test.sql.SparkSQLRegressionTest33" -PenableSparkSQLITs\n'})}),"\n",(0,r.jsxs)(t.p,{children:["Please change the Spark version number if you want to test other Spark versions.\nIf you want to change the test behaviour, please modify ",(0,r.jsx)(t.code,{children:"spark-connector/spark-common/src/test/resources/spark-test.conf"}),"."]}),"\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Configuration item"}),(0,r.jsx)(t.th,{children:"Description"}),(0,r.jsx)(t.th,{children:"Default value"}),(0,r.jsx)(t.th,{children:"Required"}),(0,r.jsx)(t.th,{children:"Since Version"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"gravitino.spark.test.dir"})}),(0,r.jsxs)(t.td,{children:["The Spark SQL test base dir, include ",(0,r.jsx)(t.code,{children:"test-sqls"})," and ",(0,r.jsx)(t.code,{children:"data"}),"."]}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"spark-connector/spark-common/src/test/resources/"})}),(0,r.jsx)(t.td,{children:"No"}),(0,r.jsx)(t.td,{children:"0.6.0"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"gravitino.spark.test.sqls"})}),(0,r.jsxs)(t.td,{children:["Specify the test SQLs, using directory to specify group of SQLs like ",(0,r.jsx)(t.code,{children:"test-sqls/hive"}),", using file path to specify one SQL like ",(0,r.jsx)(t.code,{children:"test-sqls/hive/basic.sql"}),", use ",(0,r.jsx)(t.code,{children:","})," to split multi part"]}),(0,r.jsx)(t.td,{children:"run all SQLs"}),(0,r.jsx)(t.td,{children:"No"}),(0,r.jsx)(t.td,{children:"0.6.0"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"gravitino.spark.test.generateGoldenFiles"})}),(0,r.jsx)(t.td,{children:"Whether generate golden files which are used to check the correctness of the SQL result"}),(0,r.jsx)(t.td,{children:"false"}),(0,r.jsx)(t.td,{children:"No"}),(0,r.jsx)(t.td,{children:"0.6.0"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"gravitino.spark.test.metalake"})}),(0,r.jsx)(t.td,{children:"The metalake name to run the test"}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"test"})}),(0,r.jsx)(t.td,{children:"No"}),(0,r.jsx)(t.td,{children:"0.6.0"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"gravitino.spark.test.setupEnv"})}),(0,r.jsx)(t.td,{children:"Whether to setup Gravitino and Hive environment"}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"false"})}),(0,r.jsx)(t.td,{children:"No"}),(0,r.jsx)(t.td,{children:"0.6.0"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"gravitino.spark.test.uri"})}),(0,r.jsxs)(t.td,{children:["Gravitino uri address, only available when ",(0,r.jsx)(t.code,{children:"gravitino.spark.test.setupEnv"})," is false"]}),(0,r.jsx)(t.td,{children:(0,r.jsx)(t.a,{href:"http://127.0.0.1:8090",children:"http://127.0.0.1:8090"})}),(0,r.jsx)(t.td,{children:"No"}),(0,r.jsx)(t.td,{children:"0.6.0"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:(0,r.jsx)(t.code,{children:"gravitino.spark.test.iceberg.warehouse"})}),(0,r.jsxs)(t.td,{children:["The warehouse location, only available when ",(0,r.jsx)(t.code,{children:"gravitino.spark.test.setupEnv"})," is false"]}),(0,r.jsx)(t.td,{children:"hdfs://127.0.0.1:9000/user/hive/warehouse-spark-test"}),(0,r.jsx)(t.td,{children:"No"}),(0,r.jsx)(t.td,{children:"0.6.0"})]})]})]}),"\n",(0,r.jsxs)(t.p,{children:["The test SQL files are located in ",(0,r.jsx)(t.code,{children:"spark-connector/spark-common/src/test/resources/"})," by default. There are three directories:"]}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.code,{children:"hive"}),", SQL tests for Hive catalog."]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.code,{children:"lakehouse-iceberg"}),", SQL tests for Iceberg catalog."]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.code,{children:"tpcds"}),", SQL tests for ",(0,r.jsx)(t.code,{children:"tpcds"})," in Hive catalog."]}),"\n"]}),"\n",(0,r.jsxs)(t.p,{children:["You could create a simple SQL file, like ",(0,r.jsx)(t.code,{children:"hive/catalog.sql"}),", the program will check the output with ",(0,r.jsx)(t.code,{children:"hive/catalog.sql.out"}),". For complex cases like ",(0,r.jsx)(t.code,{children:"tpcds"}),", you could do some prepare work like create table&load data in ",(0,r.jsx)(t.code,{children:"prepare.sql"}),"."]})]})}function h(e={}){const{wrapper:t}={...(0,n.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(l,{...e})}):l(e)}}}]);