"use strict";(self.webpackChunkapache_website_template=self.webpackChunkapache_website_template||[]).push([[72556],{76555:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>l,contentTitle:()=>d,default:()=>a,frontMatter:()=>c,metadata:()=>s,toc:()=>o});var t=i(13274),r=i(8438);const c={title:"Apache Gravitino Flink connector",slug:"/flink-connector/flink-connector",keyword:"flink connector federation query",license:"This software is licensed under the Apache License version 2."},d=void 0,s={id:"flink-connector/flink-connector",title:"Apache Gravitino Flink connector",description:"Overview",source:"@site/docs/flink-connector/flink-connector.md",sourceDirName:"flink-connector",slug:"/flink-connector/flink-connector",permalink:"/docs/next/flink-connector/flink-connector",draft:!1,unlisted:!1,editUrl:"https://github.com/apache/gravitino-site/tree/main/docs/flink-connector/flink-connector.md",tags:[],version:"current",lastUpdatedBy:"Jerry Shao",lastUpdatedAt:1731579332e3,frontMatter:{title:"Apache Gravitino Flink connector",slug:"/flink-connector/flink-connector",keyword:"flink connector federation query",license:"This software is licensed under the Apache License version 2."},sidebar:"docs",previous:{title:"Iceberg",permalink:"/docs/next/spark-connector/spark-catalog-iceberg"},next:{title:"Hive",permalink:"/docs/next/flink-connector/flink-catalog-hive"}},l={},o=[{value:"Overview",id:"overview",level:2},{value:"Capabilities",id:"capabilities",level:2},{value:"Requirement",id:"requirement",level:2},{value:"How to use it",id:"how-to-use-it",level:2},{value:"Datatype mapping",id:"datatype-mapping",level:2}];function h(e){const n={a:"a",code:"code",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h2,{id:"overview",children:"Overview"}),"\n",(0,t.jsxs)(n.p,{children:["The Apache Gravitino Flink connector implements the ",(0,t.jsx)(n.a,{href:"https://nightlies.apache.org/flink/flink-docs-release-1.18/docs/dev/table/catalogs/#catalog-store",children:"Catalog Store"})," to manage the catalogs under Gravitino.\nThis capability allows users to perform federation queries, accessing data from various catalogs through a unified interface and consistent access control."]}),"\n",(0,t.jsx)(n.h2,{id:"capabilities",children:"Capabilities"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["Supports ",(0,t.jsx)(n.a,{href:"/docs/next/flink-connector/flink-catalog-hive",children:"Hive catalog"})]}),"\n",(0,t.jsx)(n.li,{children:"Supports most DDL and DML SQLs."}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"requirement",children:"Requirement"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Flink 1.18"}),"\n",(0,t.jsx)(n.li,{children:"Scala 2.12"}),"\n",(0,t.jsx)(n.li,{children:"JDK 8 or 11 or 17"}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"how-to-use-it",children:"How to use it"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.a,{href:"/docs/next/how-to-build",children:"Build"})," or ",(0,t.jsx)(n.a,{href:"https://mvnrepository.com/artifact/org.apache.gravitino/gravitino-flink-connector-runtime-1.18",children:"download"})," the Gravitino flink connector runtime jar, and place it to the classpath of Flink."]}),"\n",(0,t.jsx)(n.li,{children:"Configure the Flink configuration to use the Gravitino flink connector."}),"\n"]}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Property"}),(0,t.jsx)(n.th,{children:"Type"}),(0,t.jsx)(n.th,{children:"Default Value"}),(0,t.jsx)(n.th,{children:"Description"}),(0,t.jsx)(n.th,{children:"Required"}),(0,t.jsx)(n.th,{children:"Since Version"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"table.catalog-store.kind"}),(0,t.jsx)(n.td,{children:"string"}),(0,t.jsx)(n.td,{children:"generic_in_memory"}),(0,t.jsxs)(n.td,{children:["The Catalog Store name, it should set to ",(0,t.jsx)(n.code,{children:"gravitino"}),"."]}),(0,t.jsx)(n.td,{children:"Yes"}),(0,t.jsx)(n.td,{children:"0.6.0-incubating"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"table.catalog-store.gravitino.gravitino.metalake"}),(0,t.jsx)(n.td,{children:"string"}),(0,t.jsx)(n.td,{children:"(none)"}),(0,t.jsx)(n.td,{children:"The metalake name that flink connector used to request to Gravitino."}),(0,t.jsx)(n.td,{children:"Yes"}),(0,t.jsx)(n.td,{children:"0.6.0-incubating"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"table.catalog-store.gravitino.gravitino.uri"}),(0,t.jsx)(n.td,{children:"string"}),(0,t.jsx)(n.td,{children:"(none)"}),(0,t.jsx)(n.td,{children:"The uri of Gravitino server address."}),(0,t.jsx)(n.td,{children:"Yes"}),(0,t.jsx)(n.td,{children:"0.6.0-incubating"})]})]})]}),"\n",(0,t.jsx)(n.p,{children:"Set the flink configuration in flink-conf.yaml."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-yaml",children:"table.catalog-store.kind=gravitino\ntable.catalog-store.gravitino.gravitino.metalake=test\ntable.catalog-store.gravitino.gravitino.uri=http://localhost:8080\n"})}),"\n",(0,t.jsxs)(n.p,{children:["Or you can set the flink configuration in the ",(0,t.jsx)(n.code,{children:"TableEnvironment"}),"."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-java",children:'final Configuration configuration = new Configuration();\nconfiguration.setString("table.catalog-store.kind", "gravitino");\nconfiguration.setString("table.catalog-store.gravitino.gravitino.metalake", "test");\nconfiguration.setString("table.catalog-store.gravitino.gravitino.uri", "http://localhost:8080");\nEnvironmentSettings.Builder builder = EnvironmentSettings.newInstance().withConfiguration(configuration);\nTableEnvironment tableEnv = TableEnvironment.create(builder.inBatchMode().build());\n'})}),"\n",(0,t.jsxs)(n.ol,{start:"3",children:["\n",(0,t.jsx)(n.li,{children:"Execute the Flink SQL query."}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["Suppose there is only one hive catalog with the name ",(0,t.jsx)(n.code,{children:"hive"})," in the metalake ",(0,t.jsx)(n.code,{children:"test"}),"."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sql",children:"// use hive catalog\nUSE hive;\nCREATE DATABASE db;\nUSE db;\nCREATE TABLE hive_students (id INT, name STRING);\nINSERT INTO hive_students VALUES (1, 'Alice'), (2, 'Bob');\nSELECT * FROM hive_students;\n"})}),"\n",(0,t.jsx)(n.h2,{id:"datatype-mapping",children:"Datatype mapping"}),"\n",(0,t.jsx)(n.p,{children:"Gravitino flink connector support the following datatype mapping between Flink and Gravitino."}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Flink Type"}),(0,t.jsx)(n.th,{children:"Gravitino Type"}),(0,t.jsx)(n.th,{children:"Since Version"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"array"})}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"list"})}),(0,t.jsx)(n.td,{children:"0.6.0-incubating"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"bigint"})}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"long"})}),(0,t.jsx)(n.td,{children:"0.6.0-incubating"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"binary"})}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"fixed"})}),(0,t.jsx)(n.td,{children:"0.6.0-incubating"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"boolean"})}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"boolean"})}),(0,t.jsx)(n.td,{children:"0.6.0-incubating"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"char"})}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"char"})}),(0,t.jsx)(n.td,{children:"0.6.0-incubating"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"date"})}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"date"})}),(0,t.jsx)(n.td,{children:"0.6.0-incubating"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"decimal"})}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"decimal"})}),(0,t.jsx)(n.td,{children:"0.6.0-incubating"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"double"})}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"double"})}),(0,t.jsx)(n.td,{children:"0.6.0-incubating"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"float"})}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"float"})}),(0,t.jsx)(n.td,{children:"0.6.0-incubating"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"integer"})}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"integer"})}),(0,t.jsx)(n.td,{children:"0.6.0-incubating"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"map"})}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"map"})}),(0,t.jsx)(n.td,{children:"0.6.0-incubating"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"null"})}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"null"})}),(0,t.jsx)(n.td,{children:"0.6.0-incubating"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"row"})}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"struct"})}),(0,t.jsx)(n.td,{children:"0.6.0-incubating"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"smallint"})}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"short"})}),(0,t.jsx)(n.td,{children:"0.6.0-incubating"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"time"})}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"time"})}),(0,t.jsx)(n.td,{children:"0.6.0-incubating"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"timestamp"})}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"timestamp without time zone"})}),(0,t.jsx)(n.td,{children:"0.6.0-incubating"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"timestamp without time zone"})}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"timestamp without time zone"})}),(0,t.jsx)(n.td,{children:"0.6.0-incubating"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"timestamp with time zone"})}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"timestamp with time zone"})}),(0,t.jsx)(n.td,{children:"0.6.0-incubating"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"timestamp with local time zone"})}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"timestamp with time zone"})}),(0,t.jsx)(n.td,{children:"0.6.0-incubating"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"timestamp_ltz"})}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"timestamp with time zone"})}),(0,t.jsx)(n.td,{children:"0.6.0-incubating"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"tinyint"})}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"byte"})}),(0,t.jsx)(n.td,{children:"0.6.0-incubating"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"varbinary"})}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"binary"})}),(0,t.jsx)(n.td,{children:"0.6.0-incubating"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"varchar"})}),(0,t.jsx)(n.td,{children:(0,t.jsx)(n.code,{children:"string"})}),(0,t.jsx)(n.td,{children:"0.6.0-incubating"})]})]})]})]})}function a(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(h,{...e})}):h(e)}}}]);