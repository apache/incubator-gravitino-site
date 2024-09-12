"use strict";(self.webpackChunkapache_website_template=self.webpackChunkapache_website_template||[]).push([[4114],{30967:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>c,contentTitle:()=>i,default:()=>h,frontMatter:()=>l,metadata:()=>r,toc:()=>o});var t=a(13274),s=a(78140);const l={title:"Apache Gravitino Trino connector - MySQL catalog",slug:"/trino-connector/catalog-mysql",keyword:"gravitino connector trino",license:"This software is licensed under the Apache License version 2."},i=void 0,r={id:"trino-connector/catalog-mysql",title:"Apache Gravitino Trino connector - MySQL catalog",description:"The MySQL catalog allows querying and creating tables in an external MySQL instance.",source:"@site/versioned_docs/version-0.6.0-incubating/trino-connector/catalog-mysql.md",sourceDirName:"trino-connector",slug:"/trino-connector/catalog-mysql",permalink:"/docs/0.6.0-incubating/trino-connector/catalog-mysql",draft:!1,unlisted:!1,editUrl:"https://github.com/apache/gravitino-site/tree/main/docs/trino-connector/catalog-mysql.md",tags:[],version:"0.6.0-incubating",lastUpdatedBy:"Justin Mclean",lastUpdatedAt:1726110569e3,frontMatter:{title:"Apache Gravitino Trino connector - MySQL catalog",slug:"/trino-connector/catalog-mysql",keyword:"gravitino connector trino",license:"This software is licensed under the Apache License version 2."},sidebar:"docs",previous:{title:"Iceberg",permalink:"/docs/0.6.0-incubating/trino-connector/catalog-iceberg"},next:{title:"PostgreSQL",permalink:"/docs/0.6.0-incubating/trino-connector/catalog-postgresql"}},c={},o=[{value:"Requirements",id:"requirements",level:2},{value:"Create table",id:"create-table",level:2},{value:"Alter table",id:"alter-table",level:2},{value:"Select",id:"select",level:2},{value:"Table and Schema properties",id:"table-and-schema-properties",level:2},{value:"Basic usage examples",id:"basic-usage-examples",level:2},{value:"Creating tables and schemas",id:"creating-tables-and-schemas",level:3},{value:"Writing data",id:"writing-data",level:3},{value:"Querying data",id:"querying-data",level:3},{value:"Modify a table",id:"modify-a-table",level:3},{value:"DROP",id:"drop",level:3}];function d(e){const n={a:"a",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,s.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.p,{children:"The MySQL catalog allows querying and creating tables in an external MySQL instance.\nYou can join data between different systems like MySQL and Hive, or between two different MySQL instances by this."}),"\n",(0,t.jsx)(n.h2,{id:"requirements",children:"Requirements"}),"\n",(0,t.jsx)(n.p,{children:"To connect to MySQL, you need:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"MySQL 5.7, 8.0 or higher."}),"\n",(0,t.jsx)(n.li,{children:"Network access from the Trino coordinator and workers to MySQL. Port 3306 is the default port."}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"create-table",children:"Create table"}),"\n",(0,t.jsx)(n.p,{children:"At present, the Apache Gravitino Trino connector only supports basic MySQL table creation statements, which involve fields, null allowances, and comments. However, it does not support advanced features like primary keys, indexes, default values, and auto-increment."}),"\n",(0,t.jsxs)(n.p,{children:["The Gravitino Trino connector does not support ",(0,t.jsx)(n.code,{children:"CREATE TABLE AS SELECT"}),"."]}),"\n",(0,t.jsx)(n.h2,{id:"alter-table",children:"Alter table"}),"\n",(0,t.jsx)(n.p,{children:"Support for the following alter table operations:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Rename table"}),"\n",(0,t.jsx)(n.li,{children:"Add a column"}),"\n",(0,t.jsx)(n.li,{children:"Drop a column"}),"\n",(0,t.jsx)(n.li,{children:"Change a column type"}),"\n",(0,t.jsx)(n.li,{children:"Set a table property"}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"select",children:"Select"}),"\n",(0,t.jsx)(n.p,{children:"The Gravitino Trino connector supports most SELECT statements, allowing the execution of queries successfully.\nCurrently, it doesn't support certain query optimizations, such as indexes and pushdowns."}),"\n",(0,t.jsx)(n.h2,{id:"table-and-schema-properties",children:"Table and Schema properties"}),"\n",(0,t.jsx)(n.p,{children:"MySQL's tables and schemas cannot support properties."}),"\n",(0,t.jsx)(n.h2,{id:"basic-usage-examples",children:"Basic usage examples"}),"\n",(0,t.jsx)(n.p,{children:"You need to do the following steps before you can use the MySQL catalog in Trino through Gravitino."}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["Create a metalake and catalog in Gravitino. Assuming that the metalake name is ",(0,t.jsx)(n.code,{children:"test"})," and the catalog name is ",(0,t.jsx)(n.code,{children:"mysql_test"}),",\nthen you can use the following code to create them in Gravitino:"]}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:'curl -X POST -H "Content-Type: application/json" \\\n-d \'{\n  "name": "test",\n  "comment": "comment",\n  "properties": {}\n}\' http://gravitino-host:8090/api/metalakes\n\ncurl -X POST -H "Content-Type: application/json" \\\n-d \'{\n  "name": "mysql_test",\n  "type": "RELATIONAL",\n  "comment": "comment",\n  "provider": "jdbc-mysql",\n  "properties": {\n    "jdbc-url": "jdbc:mysql://mysql-host:3306?useSSL=false",\n    "jdbc-user": "<username>",\n    "jdbc-password": "<password>"\n    "jdbc-driver": "com.mysql.cj.jdbc.Driver"\n  }\n}\' http://gravitino-host:8090/api/metalakes/test/catalogs\n'})}),"\n",(0,t.jsxs)(n.p,{children:["For More information about the MySQL catalog, please refer to ",(0,t.jsx)(n.a,{href:"/docs/0.6.0-incubating/jdbc-mysql-catalog",children:"MySQL catalog"}),"."]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["Set the value of configuration ",(0,t.jsx)(n.code,{children:"gravitino.metalake"})," to the metalake you have created, named 'test', and start the Trino container."]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"Use the Trino CLI to connect to the Trino container and run a query."}),"\n",(0,t.jsx)(n.p,{children:"Listing all Gravitino managed catalogs:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sql",children:"SHOW CATALOGS;\n"})}),"\n",(0,t.jsx)(n.p,{children:"The results are similar to:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-text",children:"    Catalog\n----------------\n gravitino\n jmx\n system\n mysql_test\n(4 rows)\n\nQuery 20231017_082503_00018_6nt3n, FINISHED, 1 node\n"})}),"\n",(0,t.jsxs)(n.p,{children:["The ",(0,t.jsx)(n.code,{children:"gravitino"})," catalog is a catalog defined By Trino catalog configuration.\nThe ",(0,t.jsx)(n.code,{children:"mysql_test"})," catalog is the catalog created by you in Gravitino.\nOther catalogs are regular user-configured Trino catalogs."]}),"\n",(0,t.jsx)(n.h3,{id:"creating-tables-and-schemas",children:"Creating tables and schemas"}),"\n",(0,t.jsxs)(n.p,{children:["Create a new schema named ",(0,t.jsx)(n.code,{children:"database_01"})," in ",(0,t.jsx)(n.code,{children:"test.mysql_test"})," catalog."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sql",children:"CREATE SCHEMA mysql_test.database_01;\n"})}),"\n",(0,t.jsxs)(n.p,{children:["Create a new table named ",(0,t.jsx)(n.code,{children:"table_01"})," in schema ",(0,t.jsx)(n.code,{children:"mysql_test.database_01"}),"."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sql",children:"CREATE TABLE mysql_test.database_01.table_01\n(\nname varchar,\nsalary int\n);\n"})}),"\n",(0,t.jsx)(n.h3,{id:"writing-data",children:"Writing data"}),"\n",(0,t.jsxs)(n.p,{children:["Insert data into the table ",(0,t.jsx)(n.code,{children:"table_01"}),":"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sql",children:"INSERT INTO mysql_test.database_01.table_01 (name, salary) VALUES ('ice', 12);\n"})}),"\n",(0,t.jsxs)(n.p,{children:["Insert data into the table ",(0,t.jsx)(n.code,{children:"table_01"})," from select:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sql",children:'INSERT INTO mysql_test.database_01.table_01 (name, salary) SELECT * FROM "test.mysql_test".database_01.table_01;\n'})}),"\n",(0,t.jsx)(n.h3,{id:"querying-data",children:"Querying data"}),"\n",(0,t.jsxs)(n.p,{children:["Query the ",(0,t.jsx)(n.code,{children:"table_01"})," table:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sql",children:"SELECT * FROM mysql_test.database_01.table_01;\n"})}),"\n",(0,t.jsx)(n.h3,{id:"modify-a-table",children:"Modify a table"}),"\n",(0,t.jsxs)(n.p,{children:["Add a new column ",(0,t.jsx)(n.code,{children:"age"})," to the ",(0,t.jsx)(n.code,{children:"table_01"})," table:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sql",children:"ALTER TABLE mysql_test.database_01.table_01 ADD COLUMN age int;\n"})}),"\n",(0,t.jsxs)(n.p,{children:["Drop a column ",(0,t.jsx)(n.code,{children:"age"})," from the ",(0,t.jsx)(n.code,{children:"table_01"})," table:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sql",children:"ALTER TABLE mysql_test.database_01.table_01 DROP COLUMN age;\n"})}),"\n",(0,t.jsxs)(n.p,{children:["Rename the ",(0,t.jsx)(n.code,{children:"table_01"})," table to ",(0,t.jsx)(n.code,{children:"table_02"}),":"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sql",children:"ALTER TABLE mysql_test.database_01.table_01 RENAME TO mysql_test.database_01.table_02;\n"})}),"\n",(0,t.jsx)(n.h3,{id:"drop",children:"DROP"}),"\n",(0,t.jsx)(n.p,{children:"Drop a schema:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sql",children:"DROP SCHEMA mysql_test.database_01;\n"})}),"\n",(0,t.jsx)(n.p,{children:"Drop a table:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sql",children:"DROP TABLE mysql_test.database_01.table_01;\n"})})]})}function h(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}}}]);