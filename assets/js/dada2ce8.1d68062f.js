"use strict";(self.webpackChunkapache_website_template=self.webpackChunkapache_website_template||[]).push([[3989],{79712:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>i,default:()=>h,frontMatter:()=>r,metadata:()=>l,toc:()=>d});var a=t(13274),s=t(78140);const r={title:"Apache Gravitino Trino connector - Hive catalog",slug:"/trino-connector/catalog-hive",keyword:"gravitino connector trino",license:"This software is licensed under the Apache License version 2."},i=void 0,l={id:"trino-connector/catalog-hive",title:"Apache Gravitino Trino connector - Hive catalog",description:"The Hive catalog allows Trino querying data stored in an Apache Hive data warehouse.",source:"@site/docs/trino-connector/catalog-hive.md",sourceDirName:"trino-connector",slug:"/trino-connector/catalog-hive",permalink:"/docs/next/trino-connector/catalog-hive",draft:!1,unlisted:!1,editUrl:"https://github.com/apache/gravitino-site/tree/main/docs/trino-connector/catalog-hive.md",tags:[],version:"current",lastUpdatedBy:"Qian Xia",lastUpdatedAt:1726236339e3,frontMatter:{title:"Apache Gravitino Trino connector - Hive catalog",slug:"/trino-connector/catalog-hive",keyword:"gravitino connector trino",license:"This software is licensed under the Apache License version 2."},sidebar:"docs",previous:{title:"Introduction",permalink:"/docs/next/trino-connector/supported-catalog"},next:{title:"Iceberg",permalink:"/docs/next/trino-connector/catalog-iceberg"}},c={},d=[{value:"Requirements",id:"requirements",level:2},{value:"Schema operations",id:"schema-operations",level:2},{value:"Create a schema",id:"create-a-schema",level:3},{value:"Table operations",id:"table-operations",level:2},{value:"Create table",id:"create-table",level:3},{value:"Alter table",id:"alter-table",level:3},{value:"Select",id:"select",level:3},{value:"Schema and table properties",id:"schema-and-table-properties",level:2},{value:"Create a schema with properties",id:"create-a-schema-with-properties",level:3},{value:"Create a table with properties",id:"create-a-table-with-properties",level:3},{value:"Basic usage examples",id:"basic-usage-examples",level:2},{value:"Creating tables and schemas",id:"creating-tables-and-schemas",level:3},{value:"Writing data",id:"writing-data",level:3},{value:"Querying data",id:"querying-data",level:3},{value:"Modify a table",id:"modify-a-table",level:3},{value:"DROP",id:"drop",level:3},{value:"HDFS config and permissions",id:"hdfs-config-and-permissions",level:2}];function o(e){const n={a:"a",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.p,{children:"The Hive catalog allows Trino querying data stored in an Apache Hive data warehouse."}),"\n",(0,a.jsx)(n.h2,{id:"requirements",children:"Requirements"}),"\n",(0,a.jsx)(n.p,{children:"The Hive connector requires a Hive metastore service (HMS), or a compatible implementation of the Hive metastore, such\nas AWS Glue."}),"\n",(0,a.jsx)(n.p,{children:"Apache Hadoop HDFS 2.x supported."}),"\n",(0,a.jsx)(n.p,{children:"Many distributed storage systems including HDFS, Amazon S3 or S3-compatible systems,\nGoogle Cloud Storage, Azure Storage, and IBM Cloud Object Storage can be queried with the Hive connector."}),"\n",(0,a.jsx)(n.p,{children:"The coordinator and all workers must have network access to the Hive metastore and the storage system."}),"\n",(0,a.jsx)(n.p,{children:"Hive metastore access with the Thrift protocol defaults to using port 9083."}),"\n",(0,a.jsx)(n.p,{children:"Data files must be in a supported file format. Some file formats can be configured using file format configuration\nproperties\nper catalog:"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"ORC"}),"\n",(0,a.jsx)(n.li,{children:"Parquet"}),"\n",(0,a.jsx)(n.li,{children:"Avro"}),"\n",(0,a.jsx)(n.li,{children:"RCText (RCFile using ColumnarSerDe)"}),"\n",(0,a.jsx)(n.li,{children:"RCBinary (RCFile using LazyBinaryColumnarSerDe)"}),"\n",(0,a.jsx)(n.li,{children:"SequenceFile"}),"\n",(0,a.jsx)(n.li,{children:"JSON (using org.apache.hive.hcatalog.data.JsonSerDe)"}),"\n",(0,a.jsx)(n.li,{children:"CSV (using org.apache.hadoop.hive.serde2.OpenCSVSerde)"}),"\n",(0,a.jsx)(n.li,{children:"TextFile"}),"\n"]}),"\n",(0,a.jsx)(n.h2,{id:"schema-operations",children:"Schema operations"}),"\n",(0,a.jsx)(n.h3,{id:"create-a-schema",children:"Create a schema"}),"\n",(0,a.jsx)(n.p,{children:"Users can create a schema with properties through Apache Gravitino Trino connector as follows:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-SQL",children:"CREATE SCHEMA catalog.schema_name \n"})}),"\n",(0,a.jsx)(n.h2,{id:"table-operations",children:"Table operations"}),"\n",(0,a.jsx)(n.h3,{id:"create-table",children:"Create table"}),"\n",(0,a.jsxs)(n.p,{children:["The Gravitino Trino connector currently supports basic Hive table creation statements, such as defining fields,\nallowing null values, and adding comments. The Gravitino Trino connector does not support ",(0,a.jsx)(n.code,{children:"CREATE TABLE AS SELECT"}),"."]}),"\n",(0,a.jsx)(n.p,{children:"The following example shows how to create a table in the Hive catalog:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-shell",children:"CREATE TABLE catalog.schema_name.table_name\n(\n  name varchar,\n  salary int\n)\n"})}),"\n",(0,a.jsx)(n.h3,{id:"alter-table",children:"Alter table"}),"\n",(0,a.jsx)(n.p,{children:"Support for the following alter table operations:"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"Rename table"}),"\n",(0,a.jsx)(n.li,{children:"Add a column"}),"\n",(0,a.jsx)(n.li,{children:"Drop a column"}),"\n",(0,a.jsx)(n.li,{children:"Rename a column"}),"\n",(0,a.jsx)(n.li,{children:"Change a column type"}),"\n",(0,a.jsx)(n.li,{children:"Set a table property"}),"\n"]}),"\n",(0,a.jsx)(n.h3,{id:"select",children:"Select"}),"\n",(0,a.jsx)(n.p,{children:"The Gravitino Trino connector supports most SELECT statements, allowing the execution of queries successfully.\nCurrently, it doesn't support certain query optimizations, such as pushdown and pruning functionalities."}),"\n",(0,a.jsx)(n.h2,{id:"schema-and-table-properties",children:"Schema and table properties"}),"\n",(0,a.jsx)(n.p,{children:'You can set additional properties for tables and schemas in the Hive catalog using "WITH" keyword in the "CREATE"\nstatement.'}),"\n",(0,a.jsx)(n.h3,{id:"create-a-schema-with-properties",children:"Create a schema with properties"}),"\n",(0,a.jsx)(n.p,{children:"Users can use the following example to create a schema with properties:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-sql",children:"CREATE SCHEMA catalog.dbname\nWITH (\n  location = 'hdfs://hdfs-host:9000/user/hive/warehouse/dbname'\n);\n"})}),"\n",(0,a.jsx)(n.p,{children:"The following tables are the properties supported by the Hive schema:"}),"\n",(0,a.jsxs)(n.table,{children:[(0,a.jsx)(n.thead,{children:(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.th,{children:"Property"}),(0,a.jsx)(n.th,{children:"Description"}),(0,a.jsx)(n.th,{children:"Default Value"}),(0,a.jsx)(n.th,{children:"Required"}),(0,a.jsx)(n.th,{children:"Reserved"}),(0,a.jsx)(n.th,{children:"Since Version"})]})}),(0,a.jsx)(n.tbody,{children:(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"location"}),(0,a.jsx)(n.td,{children:"HDFS location for table storage"}),(0,a.jsx)(n.td,{children:"(none)"}),(0,a.jsx)(n.td,{children:"No"}),(0,a.jsx)(n.td,{children:"No"}),(0,a.jsx)(n.td,{children:"0.2.0"})]})})]}),"\n",(0,a.jsx)(n.p,{children:"Reserved properties: A reserved property is one can't be set by users but can be read by users."}),"\n",(0,a.jsx)(n.h3,{id:"create-a-table-with-properties",children:"Create a table with properties"}),"\n",(0,a.jsx)(n.p,{children:"Users can use the following example to create a table with properties:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-sql",children:"CREATE TABLE catalog.dbname.tablename\n(\n  name varchar,\n  salary int\n) WITH (\n  format = 'TEXTFILE',\n  KEY = 'VALUE',\n  ...      \n);\n"})}),"\n",(0,a.jsx)(n.p,{children:"The following tables are the properties supported by the Hive table:"}),"\n",(0,a.jsxs)(n.table,{children:[(0,a.jsx)(n.thead,{children:(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.th,{children:"Property"}),(0,a.jsx)(n.th,{children:"Description"}),(0,a.jsx)(n.th,{children:"Default Value"}),(0,a.jsx)(n.th,{children:"Required"}),(0,a.jsx)(n.th,{children:"Reserved"}),(0,a.jsx)(n.th,{children:"Since Version"})]})}),(0,a.jsxs)(n.tbody,{children:[(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"format"}),(0,a.jsx)(n.td,{children:"Hive storage format for the table"}),(0,a.jsx)(n.td,{children:"TEXTFILE"}),(0,a.jsx)(n.td,{children:"No"}),(0,a.jsx)(n.td,{children:"No"}),(0,a.jsx)(n.td,{children:"0.2.0"})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"total_size"}),(0,a.jsx)(n.td,{children:"Total size of the table"}),(0,a.jsx)(n.td,{children:"(none)"}),(0,a.jsx)(n.td,{children:"No"}),(0,a.jsx)(n.td,{children:"Yes"}),(0,a.jsx)(n.td,{children:"0.2.0"})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"num_files"}),(0,a.jsx)(n.td,{children:"Number of files"}),(0,a.jsx)(n.td,{children:"0"}),(0,a.jsx)(n.td,{children:"No"}),(0,a.jsx)(n.td,{children:"Yes"}),(0,a.jsx)(n.td,{children:"0.2.0"})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"external"}),(0,a.jsx)(n.td,{children:"Indicate whether it's an external table"}),(0,a.jsx)(n.td,{children:"(none)"}),(0,a.jsx)(n.td,{children:"No"}),(0,a.jsx)(n.td,{children:"No"}),(0,a.jsx)(n.td,{children:"0.2.0"})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"location"}),(0,a.jsx)(n.td,{children:"HDFS location for table storage"}),(0,a.jsx)(n.td,{children:"(none)"}),(0,a.jsx)(n.td,{children:"No"}),(0,a.jsx)(n.td,{children:"No"}),(0,a.jsx)(n.td,{children:"0.2.0"})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"table_type"}),(0,a.jsx)(n.td,{children:"The type of Hive table"}),(0,a.jsx)(n.td,{children:"(none)"}),(0,a.jsx)(n.td,{children:"No"}),(0,a.jsx)(n.td,{children:"No"}),(0,a.jsx)(n.td,{children:"0.2.0"})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"input_format"}),(0,a.jsx)(n.td,{children:"The input format class for the table"}),(0,a.jsx)(n.td,{children:"org.apache.hadoop.mapred.TextInputFormat"}),(0,a.jsx)(n.td,{children:"No"}),(0,a.jsx)(n.td,{children:"No"}),(0,a.jsx)(n.td,{children:"0.2.0"})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"output_format"}),(0,a.jsx)(n.td,{children:"The output format class for the table"}),(0,a.jsx)(n.td,{children:"org.apache.hadoop.hive.ql.io.HiveIgnoreKeyTextOutputFormat"}),(0,a.jsx)(n.td,{children:"No"}),(0,a.jsx)(n.td,{children:"No"}),(0,a.jsx)(n.td,{children:"0.2.0"})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"serde_lib"}),(0,a.jsx)(n.td,{children:"The serde library class for the table"}),(0,a.jsx)(n.td,{children:"org.apache.hadoop.hive.serde2.lazy.LazySimpleSerDe"}),(0,a.jsx)(n.td,{children:"No"}),(0,a.jsx)(n.td,{children:"No"}),(0,a.jsx)(n.td,{children:"0.2.0"})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"serde_name"}),(0,a.jsx)(n.td,{children:"Name of the serde"}),(0,a.jsx)(n.td,{children:"table name by default"}),(0,a.jsx)(n.td,{children:"No"}),(0,a.jsx)(n.td,{children:"No"}),(0,a.jsx)(n.td,{children:"0.2.0"})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"partitioned_by"}),(0,a.jsx)(n.td,{children:"Partition columns for the table"}),(0,a.jsx)(n.td,{children:"(none)"}),(0,a.jsx)(n.td,{children:"No"}),(0,a.jsx)(n.td,{children:"No"}),(0,a.jsx)(n.td,{children:"0.4.0"})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"bucketed_by"}),(0,a.jsx)(n.td,{children:"Bucket columns for the table"}),(0,a.jsx)(n.td,{children:"(none)"}),(0,a.jsx)(n.td,{children:"No"}),(0,a.jsx)(n.td,{children:"No"}),(0,a.jsx)(n.td,{children:"0.4.0"})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"bucket_count"}),(0,a.jsx)(n.td,{children:"Number of buckets for the table"}),(0,a.jsx)(n.td,{children:"(none)"}),(0,a.jsx)(n.td,{children:"No"}),(0,a.jsx)(n.td,{children:"No"}),(0,a.jsx)(n.td,{children:"0.4.0"})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"sorted_by"}),(0,a.jsx)(n.td,{children:"Sorted columns for the table"}),(0,a.jsx)(n.td,{children:"(none)"}),(0,a.jsx)(n.td,{children:"No"}),(0,a.jsx)(n.td,{children:"No"}),(0,a.jsx)(n.td,{children:"0.4.0"})]})]})]}),"\n",(0,a.jsx)(n.h2,{id:"basic-usage-examples",children:"Basic usage examples"}),"\n",(0,a.jsx)(n.p,{children:"You need to do the following steps before you can use the Hive catalog in Trino through Gravitino."}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:["Create a metalake and catalog in Gravitino. Assuming that the metalake name is ",(0,a.jsx)(n.code,{children:"test"})," and the catalog name is ",(0,a.jsx)(n.code,{children:"hive_test"}),",\nthen you can use the following code to create them in Gravitino:"]}),"\n"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:'curl -X POST -H "Content-Type: application/json" \\\n-d \'{\n  "name": "test",\n  "comment": "comment",\n  "properties": {}\n}\' http://gravitino-host:8090/api/metalakes\n\ncurl -X POST \\\n-H "Content-Type: application/json" \\\n-d \'{\n  "name": "hive_test",\n  "type": "RELATIONAL",\n  "comment": "comment",\n  "provider": "hive",\n  "properties": {\n    "metastore.uris": "thrift://hive-host:9083"\n  }\n}\' http://gravitino-host:8090/api/metalakes/test/catalogs\n'})}),"\n",(0,a.jsxs)(n.p,{children:["For More information about the Hive catalog, please refer to ",(0,a.jsx)(n.a,{href:"/docs/next/apache-hive-catalog",children:"Hive catalog"}),"."]}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:["Set the value of configuration ",(0,a.jsx)(n.code,{children:"gravitino.metalake"})," to the metalake you have created, named 'test', and start the Trino container."]}),"\n"]}),"\n",(0,a.jsx)(n.p,{children:"Use the Trino CLI to connect to the Trino container and run a query."}),"\n",(0,a.jsx)(n.p,{children:"Listing all Gravitino managed catalogs:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-sql",children:"SHOW CATALOGS;\n"})}),"\n",(0,a.jsx)(n.p,{children:"The results are similar to:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-text",children:"    Catalog\n----------------\n gravitino\n jmx\n system\n hive_test\n(4 rows)\n\nQuery 20231017_082503_00018_6nt3n, FINISHED, 1 node\n"})}),"\n",(0,a.jsxs)(n.p,{children:["The ",(0,a.jsx)(n.code,{children:"gravitino"})," catalog is a catalog defined By Trino catalog configuration.\nThe ",(0,a.jsx)(n.code,{children:"hive_test"})," catalog is the catalog created by you in Gravitino.\nOther catalogs are regular user-configured Trino catalogs."]}),"\n",(0,a.jsx)(n.h3,{id:"creating-tables-and-schemas",children:"Creating tables and schemas"}),"\n",(0,a.jsxs)(n.p,{children:["Create a new schema named ",(0,a.jsx)(n.code,{children:"database_01"})," in ",(0,a.jsx)(n.code,{children:"hive_test"})," catalog."]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-sql",children:"CREATE SCHEMA hive_test.database_01;\n"})}),"\n",(0,a.jsx)(n.p,{children:"Create a new schema using HDFS location:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-sql",children:"CREATE SCHEMA hive_test.database_01 WITH (\n  location = 'hdfs://hdfs-host:9000/user/hive/warehouse/database_01'\n);\n"})}),"\n",(0,a.jsxs)(n.p,{children:["Create a new table named ",(0,a.jsx)(n.code,{children:"table_01"})," in schema ",(0,a.jsx)(n.code,{children:"hive_test.database_01"})," and stored in a TEXTFILE format, partitioning by ",(0,a.jsx)(n.code,{children:"salary"}),", bucket by ",(0,a.jsx)(n.code,{children:"name"})," and sorted by ",(0,a.jsx)(n.code,{children:"salary"}),"."]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-sql",children:"CREATE TABLE  hive_test.database_01.table_01\n(\nname varchar,\nsalary int,\nmonth int    \n)\nWITH (\n  format = 'TEXTFILE',\n  partitioned_by = ARRAY['month'],\n  bucketed_by = ARRAY['name'],\n  bucket_count = 2,\n  sorted_by = ARRAY['salary']  \n);\n"})}),"\n",(0,a.jsx)(n.h3,{id:"writing-data",children:"Writing data"}),"\n",(0,a.jsxs)(n.p,{children:["Insert data into the table ",(0,a.jsx)(n.code,{children:"table_01"}),":"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-sql",children:"INSERT INTO hive_test.database_01.table_01 (name, salary) VALUES ('ice', 12, 22);\n"})}),"\n",(0,a.jsxs)(n.p,{children:["Insert data into the table ",(0,a.jsx)(n.code,{children:"table_01"})," from select:"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-sql",children:"INSERT INTO hive_test.database_01.table_01 (name, salary, month) SELECT * FROM hive_test.database_01.table_01;\n"})}),"\n",(0,a.jsx)(n.h3,{id:"querying-data",children:"Querying data"}),"\n",(0,a.jsxs)(n.p,{children:["Query the ",(0,a.jsx)(n.code,{children:"table_01"})," table:"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-sql",children:"SELECT * FROM hive_test.database_01.table_01;\n"})}),"\n",(0,a.jsx)(n.h3,{id:"modify-a-table",children:"Modify a table"}),"\n",(0,a.jsxs)(n.p,{children:["Add a new column ",(0,a.jsx)(n.code,{children:"age"})," to the ",(0,a.jsx)(n.code,{children:"table_01"})," table:"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-sql",children:"ALTER TABLE hive_test.database_01.table_01 ADD COLUMN age int;\n"})}),"\n",(0,a.jsxs)(n.p,{children:["Drop a column ",(0,a.jsx)(n.code,{children:"age"})," from the ",(0,a.jsx)(n.code,{children:"table_01"})," table:"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-sql",children:"ALTER TABLE hive_test.database_01.table_01 DROP COLUMN age;\n"})}),"\n",(0,a.jsxs)(n.p,{children:["Rename the ",(0,a.jsx)(n.code,{children:"table_01"})," table to ",(0,a.jsx)(n.code,{children:"table_02"}),":"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-sql",children:"ALTER TABLE hive_test.database_01.table_01 RENAME TO hive_test.database_01.table_02;\n"})}),"\n",(0,a.jsx)(n.h3,{id:"drop",children:"DROP"}),"\n",(0,a.jsx)(n.p,{children:"Drop a schema:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-sql",children:"DROP SCHEMA hive_test.database_01;\n"})}),"\n",(0,a.jsx)(n.p,{children:"Drop a table:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-sql",children:"DROP TABLE hive_test.database_01.table_01;\n"})}),"\n",(0,a.jsx)(n.h2,{id:"hdfs-config-and-permissions",children:"HDFS config and permissions"}),"\n",(0,a.jsxs)(n.p,{children:["For basic setups, Gravitino Trino connector configures the HDFS client automatically and does not require any configuration\nfiles.\nGravitino Trino connector is not support user to config the ",(0,a.jsx)(n.code,{children:"hdfs-site.xml"})," and ",(0,a.jsx)(n.code,{children:"core-site.xml"})," files to the HDFS client."]}),"\n",(0,a.jsxs)(n.p,{children:["Before running any ",(0,a.jsx)(n.code,{children:"Insert"})," statements for Hive tables in Trino,\nyou must check that the user Trino is using to access HDFS has access to the Hive warehouse directory.\nYou can override this username by setting the HADOOP_USER_NAME system property in the Trino JVM config,\nreplacing hdfs_user with the appropriate username:"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-text",children:"-DHADOOP_USER_NAME=hdfs_user\n"})})]})}function h(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(o,{...e})}):o(e)}}}]);