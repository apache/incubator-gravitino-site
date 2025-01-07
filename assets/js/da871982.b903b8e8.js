"use strict";(self.webpackChunkapache_website_template=self.webpackChunkapache_website_template||[]).push([[6529],{52028:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>s,contentTitle:()=>a,default:()=>h,frontMatter:()=>o,metadata:()=>c,toc:()=>l});var t=r(13274),i=r(38112);const o={title:"Apache Gravitino Trino connector supported Catalogs",slug:"/trino-connector/supported-catalog",keyword:"gravitino connector trino",license:"This software is licensed under the Apache License version 2."},a=void 0,c={id:"trino-connector/supported-catalog",title:"Apache Gravitino Trino connector supported Catalogs",description:"The catalogs currently supported by the Apache Gravitino Trino connector are as follows:",source:"@site/versioned_docs/version-0.6.0-incubating/trino-connector/supported-catalog.md",sourceDirName:"trino-connector",slug:"/trino-connector/supported-catalog",permalink:"/docs/0.6.0-incubating/trino-connector/supported-catalog",draft:!1,unlisted:!1,editUrl:"https://github.com/apache/gravitino-site/tree/main/docs/trino-connector/supported-catalog.md",tags:[],version:"0.6.0-incubating",lastUpdatedBy:"Justin Mclean",lastUpdatedAt:1736293354e3,frontMatter:{title:"Apache Gravitino Trino connector supported Catalogs",slug:"/trino-connector/supported-catalog",keyword:"gravitino connector trino",license:"This software is licensed under the Apache License version 2."},sidebar:"docs",previous:{title:"Configuration",permalink:"/docs/0.6.0-incubating/trino-connector/configuration"},next:{title:"Hive",permalink:"/docs/0.6.0-incubating/trino-connector/catalog-hive"}},s={},l=[{value:"Create catalog",id:"create-catalog",level:2},{value:"Passing Trino connector configuration",id:"passing-trino-connector-configuration",level:2},{value:"Data type mapping between Trino and Apache Gravitino",id:"data-type-mapping-between-trino-and-apache-gravitino",level:2}];function d(e){const n={a:"a",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.p,{children:"The catalogs currently supported by the Apache Gravitino Trino connector are as follows:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"/docs/0.6.0-incubating/trino-connector/catalog-hive",children:"Hive"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"/docs/0.6.0-incubating/trino-connector/catalog-iceberg",children:"Iceberg"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"/docs/0.6.0-incubating/trino-connector/catalog-mysql",children:"MySQL"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"/docs/0.6.0-incubating/trino-connector/catalog-postgresql",children:"PostgreSQL"})}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"create-catalog",children:"Create catalog"}),"\n",(0,t.jsxs)(n.p,{children:["Users can create catalogs through the Gravitino Trino connector and then load them into Trino.\nThe Gravitino Trino connector provides the following stored procedures to create, delete, and alter catalogs.\nUser can also use the system table ",(0,t.jsx)(n.code,{children:"catalog"})," to describe all the catalogs."]}),"\n",(0,t.jsx)(n.p,{children:"Create catalog:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sql",children:"create_catalog(CATALOG varchar, PROVIDER varchar, PROPERTIES MAP(VARCHAR, VARCHAR), IGNORE_EXIST boolean);\n"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"CATALOG: The catalog name to be created."}),"\n",(0,t.jsxs)(n.li,{children:["PROVIDER: The catalog provider, currently only supports ",(0,t.jsx)(n.code,{children:"hive"}),", ",(0,t.jsx)(n.code,{children:"lakehouse-iceberg"}),", ",(0,t.jsx)(n.code,{children:"jdbc-mysql"}),", ",(0,t.jsx)(n.code,{children:"jdbc-postgresql"}),"."]}),"\n",(0,t.jsx)(n.li,{children:"PROPERTIES: The properties of the catalog."}),"\n",(0,t.jsxs)(n.li,{children:["IGNORE_EXIST: The flag to ignore the error if the catalog already exists. It's optional, the default value is ",(0,t.jsx)(n.code,{children:"false"}),"."]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"The type of catalog properties reference:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"/docs/0.6.0-incubating/apache-hive-catalog#catalog-properties",children:"Hive catalog"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"/docs/0.6.0-incubating/lakehouse-iceberg-catalog#catalog-properties",children:"Iceberg catalog"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"/docs/0.6.0-incubating/jdbc-mysql-catalog#catalog-properties",children:"MySQL catalog"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"/docs/0.6.0-incubating/jdbc-postgresql-catalog#catalog-properties",children:"PostgreSQL catalog"})}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"Drop catalog:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sql",children:"drop_catalog(CATALOG varchar, IGNORE_NOT_EXIST boolean);\n"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"CATALOG: The catalog name to be deleted."}),"\n",(0,t.jsxs)(n.li,{children:["IGNORE_NOT_EXIST: The flag to ignore the error if the catalog does not exist. It's optional, the default value is ",(0,t.jsx)(n.code,{children:"false"}),"."]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"Alter catalog:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sql",children:"alter_catalog(CATALOG varchar, SET_PROPERTIES MAP(VARCHAR, VARCHAR), REMOVE_PROPERTIES ARRY[VARCHAR]);\n"})}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"CATALOG: The catalog name to be altered."}),"\n",(0,t.jsx)(n.li,{children:"SET_PROPERTIES: The properties to be set."}),"\n",(0,t.jsx)(n.li,{children:"REMOVE_PROPERTIES: The properties to be removed."}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["These stored procedures are under the ",(0,t.jsx)(n.code,{children:"gravitino"})," connector and the ",(0,t.jsx)(n.code,{children:"system"})," schema.\nSo you need to use the following SQL to call them in the ",(0,t.jsx)(n.code,{children:"trino-cli"}),":"]}),"\n",(0,t.jsx)(n.p,{children:"Describe catalogs:"}),"\n",(0,t.jsxs)(n.p,{children:["The system table ",(0,t.jsx)(n.code,{children:"gravitino.system.catalog"})," is used to describe all the catalogs."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sql",children:"select * from gravitino.system.catalog;\n"})}),"\n",(0,t.jsx)(n.p,{children:"The result is like:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-test",children:"     name     | provider |                                                 properties\n--------------+----------+-------------------------------------------------------------------------------------------------------------\n gt_hive      | hive     | {gravitino.bypass.hive.metastore.client.capability.check=false, metastore.uris=thrift://trino-ci-hive:9083}\n"})}),"\n",(0,t.jsxs)(n.p,{children:["Example:\nYou can run the following SQL to create a catalog named ",(0,t.jsx)(n.code,{children:"mysql"})," with ",(0,t.jsx)(n.code,{children:"jdbc-mysql"})," provider."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sql",children:"-- Call stored procedures with position.\ncall gravitino.system.create_catalog(\n    'mysql',\n    'jdbc-mysql',\n    Map(\n        Array['jdbc-url', 'jdbc-user', 'jdbc-password', 'jdbc-driver'],\n        Array['jdbc:mysql://192.168.164.4:3306?useSSL=false', 'trino', 'ds123', 'com.mysql.cj.jdbc.Driver']\n    )\n);\ncall gravitino.system.drop_datalog('mysql');\n\n-- Call stored procedures with name.\ncall gravitino.system.create_catalog(\n    catalog =>'mysql',\n    provider => 'jdbc-mysql',\n    properties => Map(\n        Array['jdbc-url', 'jdbc-user', 'jdbc-password', 'jdbc-driver'],\n        Array['jdbc:mysql://192.168.164.4:3306?useSSL=false', 'trino', 'ds123', 'com.mysql.cj.jdbc.Driver']\n    ),\n    ignore_exist => true\n);\n\ncall gravitino.system.drop_datalog(\n    catalog => 'mysql'\n    ignore_not_exist => true\n);\n\ncall gravitino.system.alter_catalog(\n    catalog => 'mysql',\n    set_properties=> Map(\n        Array['jdbc-url'],\n        Array['jdbc:mysql://127.0.0.1:3306?useSSL=false']\n    ),\n    remove_properties => Array['jdbc-driver']\n);\n"})}),"\n",(0,t.jsxs)(n.p,{children:["if you need more information about catalog, please refer to:\n",(0,t.jsx)(n.a,{href:"/docs/0.6.0-incubating/manage-relational-metadata-using-gravitino#create-a-catalog",children:"Create a Catalog"}),"."]}),"\n",(0,t.jsx)(n.h2,{id:"passing-trino-connector-configuration",children:"Passing Trino connector configuration"}),"\n",(0,t.jsxs)(n.p,{children:["A Gravitino catalog is implemented by the Trino connector, so you can pass the Trino connector configuration to the Gravitino catalog.\nFor example, you want to set the ",(0,t.jsx)(n.code,{children:"hive.config.resources"})," configuration for the Hive catalog, you can pass the configuration to the\nGravitino catalog like this:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sql",children:"call gravitino.system.create_catalog(\n    'gt_hive',\n    'hive',\n    map(\n        array['metastore.uris', 'trino.bypass.hive.config.resources'],\n        array['thrift://trino-ci-hive:9083', \"/tmp/hive-site.xml,/tmp/core-site.xml\"]\n    )\n);\n"})}),"\n",(0,t.jsxs)(n.p,{children:["A prefix with ",(0,t.jsx)(n.code,{children:"trino.bypass."})," in the configuration key is used to indicate Gravitino Trino connector to pass the Trino connector configuration to the Gravitino catalog in the Trino runtime."]}),"\n",(0,t.jsx)(n.p,{children:"More Trino connector configurations can refer to:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://trino.io/docs/current/connector/hive.html#hive-general-configuration-properties",children:"Hive catalog"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://trino.io/docs/current/connector/iceberg.html#general-configuration",children:"Iceberg catalog"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://trino.io/docs/current/connector/mysql.html#general-configuration-properties",children:"MySQL catalog"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://trino.io/docs/current/connector/postgresql.html#general-configuration-properties",children:"PostgreSQL catalog"})}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"data-type-mapping-between-trino-and-apache-gravitino",children:"Data type mapping between Trino and Apache Gravitino"}),"\n",(0,t.jsxs)(n.p,{children:["Gravitino Trino connector supports the following data type conversions between Trino and Gravitino currently. Depending on the detailed catalog, Gravitino may not support some data types conversion for this specific catalog, for example,\nHive does not support ",(0,t.jsx)(n.code,{children:"TIME"})," data type."]}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Gravitino Type"}),(0,t.jsx)(n.th,{children:"Trino Type"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"BooleanType"}),(0,t.jsx)(n.td,{children:"BOOLEAN"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"ByteType"}),(0,t.jsx)(n.td,{children:"TINYINT"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"ShortType"}),(0,t.jsx)(n.td,{children:"SMALLINT"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"IntegerType"}),(0,t.jsx)(n.td,{children:"INTEGER"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"LongType"}),(0,t.jsx)(n.td,{children:"BIGINT"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"FloatType"}),(0,t.jsx)(n.td,{children:"REAL"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"DoubleType"}),(0,t.jsx)(n.td,{children:"DOUBLE"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"DecimalType"}),(0,t.jsx)(n.td,{children:"DECIMAL"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"StringType"}),(0,t.jsx)(n.td,{children:"VARCHAR"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"VarcharType"}),(0,t.jsx)(n.td,{children:"VARCHAR"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"BinaryType"}),(0,t.jsx)(n.td,{children:"VARBINARY"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"DateType"}),(0,t.jsx)(n.td,{children:"DATE"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"TimeType"}),(0,t.jsx)(n.td,{children:"TIME"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"TimestampType"}),(0,t.jsx)(n.td,{children:"TIMESTAMP"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"ArrayType"}),(0,t.jsx)(n.td,{children:"ARRAY"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"MapType"}),(0,t.jsx)(n.td,{children:"MAP"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"StructType"}),(0,t.jsx)(n.td,{children:"ROW"})]})]})]}),"\n",(0,t.jsxs)(n.p,{children:["For more about Trino data types, please refer to ",(0,t.jsx)(n.a,{href:"https://trino.io/docs/current/language/types.html",children:"Trino data types"})," and Gravitino data types, please refer to ",(0,t.jsx)(n.a,{href:"/docs/0.6.0-incubating/manage-relational-metadata-using-gravitino#gravitino-table-column-type",children:"Gravitino data types"}),"."]})]})}function h(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}}}]);