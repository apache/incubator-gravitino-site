"use strict";(self.webpackChunkapache_website_template=self.webpackChunkapache_website_template||[]).push([[7090],{69274:(e,i,n)=>{n.r(i),n.d(i,{assets:()=>o,contentTitle:()=>d,default:()=>h,frontMatter:()=>s,metadata:()=>c,toc:()=>l});var r=n(13274),t=n(38112);const s={title:"Apache Gravitino configuration",slug:"/gravitino-server-config",keywords:["configuration"],license:"This software is licensed under the Apache License version 2."},d=void 0,c={id:"gravitino-server-config",title:"Apache Gravitino configuration",description:"Introduction",source:"@site/versioned_docs/version-0.6.1-incubating/gravitino-server-config.md",sourceDirName:".",slug:"/gravitino-server-config",permalink:"/docs/0.6.1-incubating/gravitino-server-config",draft:!1,unlisted:!1,editUrl:"https://github.com/apache/gravitino-site/tree/main/docs/gravitino-server-config.md",tags:[],version:"0.6.1-incubating",lastUpdatedBy:"Justin Mclean",lastUpdatedAt:1736293354e3,frontMatter:{title:"Apache Gravitino configuration",slug:"/gravitino-server-config",keywords:["configuration"],license:"This software is licensed under the Apache License version 2."},sidebar:"docs",previous:{title:"Hive",permalink:"/docs/0.6.1-incubating/flink-connector/flink-catalog-hive"},next:{title:"Metrics",permalink:"/docs/0.6.1-incubating/metrics"}},o={},l=[{value:"Introduction",id:"introduction",level:2},{value:"Apache Gravitino server configurations",id:"apache-gravitino-server-configurations",level:2},{value:"Apache Gravitino HTTP Server configuration",id:"apache-gravitino-http-server-configuration",level:3},{value:"Storage configuration",id:"storage-configuration",level:3},{value:"Storage backend configuration",id:"storage-backend-configuration",level:4},{value:"Create JDBC backend schema and table",id:"create-jdbc-backend-schema-and-table",level:4},{value:"Tree lock configuration",id:"tree-lock-configuration",level:3},{value:"Catalog configuration",id:"catalog-configuration",level:3},{value:"Auxiliary service configuration",id:"auxiliary-service-configuration",level:3},{value:"Event listener configuration",id:"event-listener-configuration",level:3},{value:"Event",id:"event",level:4},{value:"Event listener plugin",id:"event-listener-plugin",level:4},{value:"Security configuration",id:"security-configuration",level:3},{value:"Metrics configuration",id:"metrics-configuration",level:3},{value:"Apache Gravitino catalog properties configuration",id:"apache-gravitino-catalog-properties-configuration",level:2},{value:"Some other configurations",id:"some-other-configurations",level:2},{value:"How to set up runtime environment variables",id:"how-to-set-up-runtime-environment-variables",level:2},{value:"How to access Apache Hadoop",id:"how-to-access-apache-hadoop",level:3}];function a(e){const i={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",h4:"h4",li:"li",ol:"ol",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,t.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(i.h2,{id:"introduction",children:"Introduction"}),"\n",(0,r.jsx)(i.p,{children:"Apache Gravitino supports several configurations:"}),"\n",(0,r.jsxs)(i.ol,{children:["\n",(0,r.jsxs)(i.li,{children:[(0,r.jsx)(i.strong,{children:"Gravitino server configuration"}),": Used to start up the Gravitino server."]}),"\n",(0,r.jsxs)(i.li,{children:[(0,r.jsx)(i.strong,{children:"Gravitino catalog properties configuration"}),": Used to make default values for different catalogs."]}),"\n",(0,r.jsxs)(i.li,{children:[(0,r.jsx)(i.strong,{children:"Some other configurations"}),": Includes HDFS and other configurations."]}),"\n"]}),"\n",(0,r.jsx)(i.h2,{id:"apache-gravitino-server-configurations",children:"Apache Gravitino server configurations"}),"\n",(0,r.jsxs)(i.p,{children:["You can customize the Gravitino server by editing the configuration file ",(0,r.jsx)(i.code,{children:"gravitino.conf"})," in the ",(0,r.jsx)(i.code,{children:"conf"})," directory. The default values are sufficient for most use cases.\nWe strongly recommend that you read the following sections to understand the configuration file, so you can change the default values to suit your specific situation and usage scenario."]}),"\n",(0,r.jsxs)(i.p,{children:["The ",(0,r.jsx)(i.code,{children:"gravitino.conf"})," file lists the configuration items in the following table. It groups those items into the following categories:"]}),"\n",(0,r.jsx)(i.h3,{id:"apache-gravitino-http-server-configuration",children:"Apache Gravitino HTTP Server configuration"}),"\n",(0,r.jsxs)(i.table,{children:[(0,r.jsx)(i.thead,{children:(0,r.jsxs)(i.tr,{children:[(0,r.jsx)(i.th,{children:"Configuration item"}),(0,r.jsx)(i.th,{children:"Description"}),(0,r.jsx)(i.th,{children:"Default value"}),(0,r.jsx)(i.th,{children:"Required"}),(0,r.jsx)(i.th,{children:"Since version"})]})}),(0,r.jsxs)(i.tbody,{children:[(0,r.jsxs)(i.tr,{children:[(0,r.jsx)(i.td,{children:(0,r.jsx)(i.code,{children:"gravitino.server.webserver.host"})}),(0,r.jsx)(i.td,{children:"The host of the Gravitino server."}),(0,r.jsx)(i.td,{children:(0,r.jsx)(i.code,{children:"0.0.0.0"})}),(0,r.jsx)(i.td,{children:"No"}),(0,r.jsx)(i.td,{children:"0.1.0"})]}),(0,r.jsxs)(i.tr,{children:[(0,r.jsx)(i.td,{children:(0,r.jsx)(i.code,{children:"gravitino.server.webserver.httpPort"})}),(0,r.jsx)(i.td,{children:"The port on which the Gravitino server listens for incoming connections."}),(0,r.jsx)(i.td,{children:(0,r.jsx)(i.code,{children:"8090"})}),(0,r.jsx)(i.td,{children:"No"}),(0,r.jsx)(i.td,{children:"0.1.0"})]}),(0,r.jsxs)(i.tr,{children:[(0,r.jsx)(i.td,{children:(0,r.jsx)(i.code,{children:"gravitino.server.webserver.minThreads"})}),(0,r.jsxs)(i.td,{children:["The minimum number of threads in the thread pool used by the Jetty webserver. ",(0,r.jsx)(i.code,{children:"minThreads"})," is 8 if the value is less than 8."]}),(0,r.jsx)(i.td,{children:(0,r.jsx)(i.code,{children:"Math.max(Math.min(Runtime.getRuntime().availableProcessors() * 2, 100), 8)"})}),(0,r.jsx)(i.td,{children:"No"}),(0,r.jsx)(i.td,{children:"0.2.0"})]}),(0,r.jsxs)(i.tr,{children:[(0,r.jsx)(i.td,{children:(0,r.jsx)(i.code,{children:"gravitino.server.webserver.maxThreads"})}),(0,r.jsxs)(i.td,{children:["The maximum number of threads in the thread pool used by the Jetty webserver. ",(0,r.jsx)(i.code,{children:"maxThreads"})," is 8 if the value is less than 8, and ",(0,r.jsx)(i.code,{children:"maxThreads"})," must be great or equal to ",(0,r.jsx)(i.code,{children:"minThreads"}),"."]}),(0,r.jsx)(i.td,{children:(0,r.jsx)(i.code,{children:"Math.max(Runtime.getRuntime().availableProcessors() * 4, 400)"})}),(0,r.jsx)(i.td,{children:"No"}),(0,r.jsx)(i.td,{children:"0.1.0"})]}),(0,r.jsxs)(i.tr,{children:[(0,r.jsx)(i.td,{children:(0,r.jsx)(i.code,{children:"gravitino.server.webserver.threadPoolWorkQueueSize"})}),(0,r.jsx)(i.td,{children:"The size of the queue in the thread pool used by the Jetty webserver."}),(0,r.jsx)(i.td,{children:(0,r.jsx)(i.code,{children:"100"})}),(0,r.jsx)(i.td,{children:"No"}),(0,r.jsx)(i.td,{children:"0.1.0"})]}),(0,r.jsxs)(i.tr,{children:[(0,r.jsx)(i.td,{children:(0,r.jsx)(i.code,{children:"gravitino.server.webserver.stopTimeout"})}),(0,r.jsxs)(i.td,{children:["Time in milliseconds to gracefully shut down the Jetty webserver, for more, please see ",(0,r.jsx)(i.code,{children:"org.eclipse.jetty.server.Server#setStopTimeout"}),"."]}),(0,r.jsx)(i.td,{children:(0,r.jsx)(i.code,{children:"30000"})}),(0,r.jsx)(i.td,{children:"No"}),(0,r.jsx)(i.td,{children:"0.2.0"})]}),(0,r.jsxs)(i.tr,{children:[(0,r.jsx)(i.td,{children:(0,r.jsx)(i.code,{children:"gravitino.server.webserver.idleTimeout"})}),(0,r.jsx)(i.td,{children:"The timeout in milliseconds of idle connections."}),(0,r.jsx)(i.td,{children:(0,r.jsx)(i.code,{children:"30000"})}),(0,r.jsx)(i.td,{children:"No"}),(0,r.jsx)(i.td,{children:"0.2.0"})]}),(0,r.jsxs)(i.tr,{children:[(0,r.jsx)(i.td,{children:(0,r.jsx)(i.code,{children:"gravitino.server.webserver.requestHeaderSize"})}),(0,r.jsx)(i.td,{children:"Maximum size of HTTP requests."}),(0,r.jsx)(i.td,{children:(0,r.jsx)(i.code,{children:"131072"})}),(0,r.jsx)(i.td,{children:"No"}),(0,r.jsx)(i.td,{children:"0.1.0"})]}),(0,r.jsxs)(i.tr,{children:[(0,r.jsx)(i.td,{children:(0,r.jsx)(i.code,{children:"gravitino.server.webserver.responseHeaderSize"})}),(0,r.jsx)(i.td,{children:"Maximum size of HTTP responses."}),(0,r.jsx)(i.td,{children:(0,r.jsx)(i.code,{children:"131072"})}),(0,r.jsx)(i.td,{children:"No"}),(0,r.jsx)(i.td,{children:"0.1.0"})]}),(0,r.jsxs)(i.tr,{children:[(0,r.jsx)(i.td,{children:(0,r.jsx)(i.code,{children:"gravitino.server.shutdown.timeout"})}),(0,r.jsx)(i.td,{children:"Time in milliseconds to gracefully shut down of the Gravitino webserver."}),(0,r.jsx)(i.td,{children:(0,r.jsx)(i.code,{children:"3000"})}),(0,r.jsx)(i.td,{children:"No"}),(0,r.jsx)(i.td,{children:"0.2.0"})]}),(0,r.jsxs)(i.tr,{children:[(0,r.jsx)(i.td,{children:(0,r.jsx)(i.code,{children:"gravitino.server.webserver.customFilters"})}),(0,r.jsx)(i.td,{children:"Comma-separated list of filter class names to apply to the API."}),(0,r.jsx)(i.td,{children:"(none)"}),(0,r.jsx)(i.td,{children:"No"}),(0,r.jsx)(i.td,{children:"0.4.0"})]}),(0,r.jsxs)(i.tr,{children:[(0,r.jsx)(i.td,{children:(0,r.jsx)(i.code,{children:"gravitino.server.rest.extensionPackages"})}),(0,r.jsx)(i.td,{children:"Comma-separated list of REST API packages to expand"}),(0,r.jsx)(i.td,{children:"(none)"}),(0,r.jsx)(i.td,{children:"No"}),(0,r.jsx)(i.td,{children:"0.6.0-incubating"})]})]})]}),"\n",(0,r.jsxs)(i.p,{children:["The filter in the customFilters should be a standard javax servlet filter.\nYou can also specify filter parameters by setting configuration entries of the form ",(0,r.jsx)(i.code,{children:"gravitino.server.webserver.<class name of filter>.param.<param name>=<value>"}),"."]}),"\n",(0,r.jsx)(i.h3,{id:"storage-configuration",children:"Storage configuration"}),"\n",(0,r.jsx)(i.h4,{id:"storage-backend-configuration",children:"Storage backend configuration"}),"\n",(0,r.jsx)(i.p,{children:"Currently, Gravitino only supports JDBC database backend, and the default implementation is H2 database as it's an embedded database, has no external dependencies and is very suitable for local development or tests.\nIf you are going to use H2 in the production environment, Gravitino will not guarantee the data consistency and durability. It's highly recommended using MySQL as the backend database."}),"\n",(0,r.jsx)(i.p,{children:"The following table lists the storage configuration items:"}),"\n",(0,r.jsxs)(i.table,{children:[(0,r.jsx)(i.thead,{children:(0,r.jsxs)(i.tr,{children:[(0,r.jsx)(i.th,{children:"Configuration item"}),(0,r.jsx)(i.th,{children:"Description"}),(0,r.jsx)(i.th,{children:"Default value"}),(0,r.jsx)(i.th,{children:"Required"}),(0,r.jsx)(i.th,{children:"Since version"})]})}),(0,r.jsxs)(i.tbody,{children:[(0,r.jsxs)(i.tr,{children:[(0,r.jsx)(i.td,{children:(0,r.jsx)(i.code,{children:"gravitino.entity.store"})}),(0,r.jsxs)(i.td,{children:["Which entity storage implementation to use. Only",(0,r.jsx)(i.code,{children:"relational"})," storage is currently supported."]}),(0,r.jsx)(i.td,{children:(0,r.jsx)(i.code,{children:"relational"})}),(0,r.jsx)(i.td,{children:"No"}),(0,r.jsx)(i.td,{children:"0.1.0"})]}),(0,r.jsxs)(i.tr,{children:[(0,r.jsx)(i.td,{children:(0,r.jsx)(i.code,{children:"gravitino.entity.serde"})}),(0,r.jsx)(i.td,{children:"The serialization/deserialization class used to support entity storage. `proto' is currently supported."}),(0,r.jsx)(i.td,{children:(0,r.jsx)(i.code,{children:"proto"})}),(0,r.jsx)(i.td,{children:"No"}),(0,r.jsx)(i.td,{children:"0.1.0"})]}),(0,r.jsxs)(i.tr,{children:[(0,r.jsx)(i.td,{children:(0,r.jsx)(i.code,{children:"gravitino.entity.store.maxTransactionSkewTimeMs"})}),(0,r.jsx)(i.td,{children:"The maximum skew time of transactions in milliseconds."}),(0,r.jsx)(i.td,{children:(0,r.jsx)(i.code,{children:"2000"})}),(0,r.jsx)(i.td,{children:"No"}),(0,r.jsx)(i.td,{children:"0.3.0"})]}),(0,r.jsxs)(i.tr,{children:[(0,r.jsx)(i.td,{children:(0,r.jsx)(i.code,{children:"gravitino.entity.store.kv.deleteAfterTimeMs"})}),(0,r.jsxs)(i.td,{children:["It is deprecated since Gravitino 0.5.0. Please use ",(0,r.jsx)(i.code,{children:"gravitino.entity.store.deleteAfterTimeMs"})," instead."]}),(0,r.jsxs)(i.td,{children:[(0,r.jsx)(i.code,{children:"604800000"}),"(7 days)"]}),(0,r.jsx)(i.td,{children:"No"}),(0,r.jsx)(i.td,{children:"0.3.0"})]}),(0,r.jsxs)(i.tr,{children:[(0,r.jsx)(i.td,{children:(0,r.jsx)(i.code,{children:"gravitino.entity.store.deleteAfterTimeMs"})}),(0,r.jsx)(i.td,{children:"The maximum time in milliseconds that deleted and old-version data is kept. Set to at least 10 minutes and no longer than 30 days."}),(0,r.jsxs)(i.td,{children:[(0,r.jsx)(i.code,{children:"604800000"}),"(7 days)"]}),(0,r.jsx)(i.td,{children:"No"}),(0,r.jsx)(i.td,{children:"0.5.0"})]}),(0,r.jsxs)(i.tr,{children:[(0,r.jsx)(i.td,{children:(0,r.jsx)(i.code,{children:"gravitino.entity.store.versionRetentionCount"})}),(0,r.jsx)(i.td,{children:"The Count of versions allowed to be retained, including the current version, used to delete old versions data. Set to at least 1 and no greater than 10."}),(0,r.jsx)(i.td,{children:(0,r.jsx)(i.code,{children:"1"})}),(0,r.jsx)(i.td,{children:"No"}),(0,r.jsx)(i.td,{children:"0.5.0"})]}),(0,r.jsxs)(i.tr,{children:[(0,r.jsx)(i.td,{children:(0,r.jsx)(i.code,{children:"gravitino.entity.store.relational"})}),(0,r.jsxs)(i.td,{children:["Detailed implementation of Relational storage. ",(0,r.jsx)(i.code,{children:"H2"})," and ",(0,r.jsx)(i.code,{children:"MySQL"})," is currently supported, and the implementation is ",(0,r.jsx)(i.code,{children:"JDBCBackend"}),"."]}),(0,r.jsx)(i.td,{children:(0,r.jsx)(i.code,{children:"JDBCBackend"})}),(0,r.jsx)(i.td,{children:"No"}),(0,r.jsx)(i.td,{children:"0.5.0"})]}),(0,r.jsxs)(i.tr,{children:[(0,r.jsx)(i.td,{children:(0,r.jsx)(i.code,{children:"gravitino.entity.store.relational.jdbcUrl"})}),(0,r.jsxs)(i.td,{children:["The database url that the ",(0,r.jsx)(i.code,{children:"JDBCBackend"})," needs to connect to. If you use ",(0,r.jsx)(i.code,{children:"MySQL"}),", you should firstly initialize the database tables yourself by executing the ddl scripts in the ",(0,r.jsx)(i.code,{children:"${GRAVITINO_HOME}/scripts/mysql/"})," directory."]}),(0,r.jsx)(i.td,{children:(0,r.jsx)(i.code,{children:"jdbc:h2"})}),(0,r.jsx)(i.td,{children:"No"}),(0,r.jsx)(i.td,{children:"0.5.0"})]}),(0,r.jsxs)(i.tr,{children:[(0,r.jsx)(i.td,{children:(0,r.jsx)(i.code,{children:"gravitino.entity.store.relational.jdbcDriver"})}),(0,r.jsxs)(i.td,{children:["The jdbc driver name that the ",(0,r.jsx)(i.code,{children:"JDBCBackend"})," needs to use. You should place the driver Jar package in the ",(0,r.jsx)(i.code,{children:"${GRAVITINO_HOME}/libs/"})," directory."]}),(0,r.jsx)(i.td,{children:(0,r.jsx)(i.code,{children:"org.h2.Driver"})}),(0,r.jsxs)(i.td,{children:["Yes if the jdbc connection url is not ",(0,r.jsx)(i.code,{children:"jdbc:h2"})]}),(0,r.jsx)(i.td,{children:"0.5.0"})]}),(0,r.jsxs)(i.tr,{children:[(0,r.jsx)(i.td,{children:(0,r.jsx)(i.code,{children:"gravitino.entity.store.relational.jdbcUser"})}),(0,r.jsxs)(i.td,{children:["The username that the ",(0,r.jsx)(i.code,{children:"JDBCBackend"})," needs to use when connecting the database. It is required for ",(0,r.jsx)(i.code,{children:"MySQL"}),"."]}),(0,r.jsx)(i.td,{children:(0,r.jsx)(i.code,{children:"gravitino"})}),(0,r.jsxs)(i.td,{children:["Yes if the jdbc connection url is not ",(0,r.jsx)(i.code,{children:"jdbc:h2"})]}),(0,r.jsx)(i.td,{children:"0.5.0"})]}),(0,r.jsxs)(i.tr,{children:[(0,r.jsx)(i.td,{children:(0,r.jsx)(i.code,{children:"gravitino.entity.store.relational.jdbcPassword"})}),(0,r.jsxs)(i.td,{children:["The password that the ",(0,r.jsx)(i.code,{children:"JDBCBackend"})," needs to use when connecting the database. It is required for ",(0,r.jsx)(i.code,{children:"MySQL"}),"."]}),(0,r.jsx)(i.td,{children:(0,r.jsx)(i.code,{children:"gravitino"})}),(0,r.jsxs)(i.td,{children:["Yes if the jdbc connection url is not ",(0,r.jsx)(i.code,{children:"jdbc:h2"})]}),(0,r.jsx)(i.td,{children:"0.5.0"})]}),(0,r.jsxs)(i.tr,{children:[(0,r.jsx)(i.td,{children:(0,r.jsx)(i.code,{children:"gravitino.entity.store.relational.storagePath"})}),(0,r.jsxs)(i.td,{children:["The storage path for embedded JDBC storage implementation. It supports both absolute and relative path, if the value is a relative path, the final path is ",(0,r.jsx)(i.code,{children:"${GRAVITINO_HOME}/${PATH_YOU_HAVA_SET}"}),", default value is ",(0,r.jsx)(i.code,{children:"${GRAVITINO_HOME}/data/jdbc"})]}),(0,r.jsx)(i.td,{children:(0,r.jsx)(i.code,{children:"${GRAVITINO_HOME}/data/jdbc"})}),(0,r.jsx)(i.td,{children:"No"}),(0,r.jsx)(i.td,{children:"0.6.0-incubating"})]})]})]}),"\n",(0,r.jsx)(i.admonition,{type:"caution",children:(0,r.jsxs)(i.p,{children:["We strongly recommend that you change the default value of ",(0,r.jsx)(i.code,{children:"gravitino.entity.store.relational.storagePath"}),", as it's under the deployment directory and future version upgrades may remove it."]})}),"\n",(0,r.jsx)(i.h4,{id:"create-jdbc-backend-schema-and-table",children:"Create JDBC backend schema and table"}),"\n",(0,r.jsxs)(i.p,{children:["For H2 database, All tables needed by Gravitino are created automatically when the Gravitino server starts up. For MySQL, you should firstly initialize the database tables yourself by executing the ddl scripts in the ",(0,r.jsx)(i.code,{children:"${GRAVITINO_HOME}/scripts/mysql/"})," directory."]}),"\n",(0,r.jsx)(i.h3,{id:"tree-lock-configuration",children:"Tree lock configuration"}),"\n",(0,r.jsx)(i.p,{children:"Gravitino server uses tree lock to ensure the consistency of the data. The tree lock is a memory lock (Currently, Gravitino only supports in memory lock) that can be used to ensure the consistency of the data in Gravitino server. The configuration items are as follows:"}),"\n",(0,r.jsxs)(i.table,{children:[(0,r.jsx)(i.thead,{children:(0,r.jsxs)(i.tr,{children:[(0,r.jsx)(i.th,{children:"Configuration item"}),(0,r.jsx)(i.th,{children:"Description"}),(0,r.jsx)(i.th,{children:"Default value"}),(0,r.jsx)(i.th,{children:"Required"}),(0,r.jsx)(i.th,{children:"Since Version"})]})}),(0,r.jsxs)(i.tbody,{children:[(0,r.jsxs)(i.tr,{children:[(0,r.jsx)(i.td,{children:(0,r.jsx)(i.code,{children:"gravitino.lock.maxNodes"})}),(0,r.jsx)(i.td,{children:"The maximum number of tree lock nodes to keep in memory"}),(0,r.jsx)(i.td,{children:"100000"}),(0,r.jsx)(i.td,{children:"No"}),(0,r.jsx)(i.td,{children:"0.5.0"})]}),(0,r.jsxs)(i.tr,{children:[(0,r.jsx)(i.td,{children:(0,r.jsx)(i.code,{children:"gravitino.lock.minNodes"})}),(0,r.jsx)(i.td,{children:"The minimum number of tree lock nodes to keep in memory"}),(0,r.jsx)(i.td,{children:"1000"}),(0,r.jsx)(i.td,{children:"No"}),(0,r.jsx)(i.td,{children:"0.5.0"})]}),(0,r.jsxs)(i.tr,{children:[(0,r.jsx)(i.td,{children:(0,r.jsx)(i.code,{children:"gravitino.lock.cleanIntervalInSecs"})}),(0,r.jsx)(i.td,{children:"The interval in seconds to clean up the stale tree lock nodes"}),(0,r.jsx)(i.td,{children:"60"}),(0,r.jsx)(i.td,{children:"No"}),(0,r.jsx)(i.td,{children:"0.5.0"})]})]})]}),"\n",(0,r.jsx)(i.h3,{id:"catalog-configuration",children:"Catalog configuration"}),"\n",(0,r.jsxs)(i.table,{children:[(0,r.jsx)(i.thead,{children:(0,r.jsxs)(i.tr,{children:[(0,r.jsx)(i.th,{children:"Configuration item"}),(0,r.jsx)(i.th,{children:"Description"}),(0,r.jsx)(i.th,{children:"Default value"}),(0,r.jsx)(i.th,{children:"Required"}),(0,r.jsx)(i.th,{children:"Since version"})]})}),(0,r.jsxs)(i.tbody,{children:[(0,r.jsxs)(i.tr,{children:[(0,r.jsx)(i.td,{children:(0,r.jsx)(i.code,{children:"gravitino.catalog.cache.evictionIntervalMs"})}),(0,r.jsx)(i.td,{children:"The interval in milliseconds to evict the catalog cache; default 3600000ms(1h)."}),(0,r.jsx)(i.td,{children:(0,r.jsx)(i.code,{children:"3600000"})}),(0,r.jsx)(i.td,{children:"No"}),(0,r.jsx)(i.td,{children:"0.1.0"})]}),(0,r.jsxs)(i.tr,{children:[(0,r.jsx)(i.td,{children:(0,r.jsx)(i.code,{children:"gravitino.catalog.classloader.isolated"})}),(0,r.jsxs)(i.td,{children:["Whether to use an isolated classloader for catalog. If ",(0,r.jsx)(i.code,{children:"true"}),", an isolated classloader loads all catalog-related libraries and configurations, not the AppClassLoader. The default value is ",(0,r.jsx)(i.code,{children:"true"}),"."]}),(0,r.jsx)(i.td,{children:(0,r.jsx)(i.code,{children:"true"})}),(0,r.jsx)(i.td,{children:"No"}),(0,r.jsx)(i.td,{children:"0.1.0"})]})]})]}),"\n",(0,r.jsx)(i.h3,{id:"auxiliary-service-configuration",children:"Auxiliary service configuration"}),"\n",(0,r.jsxs)(i.table,{children:[(0,r.jsx)(i.thead,{children:(0,r.jsxs)(i.tr,{children:[(0,r.jsx)(i.th,{children:"Configuration item"}),(0,r.jsx)(i.th,{children:"Description"}),(0,r.jsx)(i.th,{children:"Default value"}),(0,r.jsx)(i.th,{children:"Since Version"})]})}),(0,r.jsx)(i.tbody,{children:(0,r.jsxs)(i.tr,{children:[(0,r.jsx)(i.td,{children:(0,r.jsx)(i.code,{children:"gravitino.auxService.names "})}),(0,r.jsxs)(i.td,{children:["The auxiliary service name of the Gravitino Iceberg REST server. Use ",(0,r.jsx)(i.strong,{children:(0,r.jsx)(i.code,{children:"iceberg-rest"})})," for the Gravitino Iceberg REST server."]}),(0,r.jsx)(i.td,{children:"(none)"}),(0,r.jsx)(i.td,{children:"0.2.0"})]})})]}),"\n",(0,r.jsxs)(i.p,{children:["Refer to ",(0,r.jsx)(i.a,{href:"/docs/0.6.1-incubating/iceberg-rest-service",children:"Iceberg REST catalog service"})," for configuration details."]}),"\n",(0,r.jsx)(i.h3,{id:"event-listener-configuration",children:"Event listener configuration"}),"\n",(0,r.jsx)(i.p,{children:"Gravitino provides event listener mechanism to allow users to capture the events which are provided by Gravitino server to integrate some custom operations."}),"\n",(0,r.jsxs)(i.p,{children:["To leverage the event listener, you must implement the ",(0,r.jsx)(i.code,{children:"EventListenerPlugin"})," interface and place the JAR file in the classpath of the Gravitino server. Then, add configurations to gravitino.conf to enable the event listener."]}),"\n",(0,r.jsxs)(i.table,{children:[(0,r.jsx)(i.thead,{children:(0,r.jsxs)(i.tr,{children:[(0,r.jsx)(i.th,{children:"Property name"}),(0,r.jsx)(i.th,{children:"Description"}),(0,r.jsx)(i.th,{children:"Default value"}),(0,r.jsx)(i.th,{children:"Required"}),(0,r.jsx)(i.th,{children:"Since Version"})]})}),(0,r.jsxs)(i.tbody,{children:[(0,r.jsxs)(i.tr,{children:[(0,r.jsx)(i.td,{children:(0,r.jsx)(i.code,{children:"gravitino.eventListener.names"})}),(0,r.jsx)(i.td,{children:'The name of the event listener, For multiple listeners, separate names with a comma, like "audit,sync"'}),(0,r.jsx)(i.td,{children:"(none)"}),(0,r.jsx)(i.td,{children:"Yes"}),(0,r.jsx)(i.td,{children:"0.5.0"})]}),(0,r.jsxs)(i.tr,{children:[(0,r.jsx)(i.td,{children:(0,r.jsx)(i.code,{children:"gravitino.eventListener.{name}.class"})}),(0,r.jsxs)(i.td,{children:["The class name of the event listener, replace ",(0,r.jsx)(i.code,{children:"{name}"})," with the actual listener name."]}),(0,r.jsx)(i.td,{children:"(none)"}),(0,r.jsx)(i.td,{children:"Yes"}),(0,r.jsx)(i.td,{children:"0.5.0"})]}),(0,r.jsxs)(i.tr,{children:[(0,r.jsx)(i.td,{children:(0,r.jsx)(i.code,{children:"gravitino.eventListener.{name}.{key}"})}),(0,r.jsx)(i.td,{children:"Custom properties that will be passed to the event listener plugin."}),(0,r.jsx)(i.td,{children:"(none)"}),(0,r.jsx)(i.td,{children:"Yes"}),(0,r.jsx)(i.td,{children:"0.5.0"})]})]})]}),"\n",(0,r.jsx)(i.h4,{id:"event",children:"Event"}),"\n",(0,r.jsx)(i.p,{children:"Gravitino triggers a specific event upon the completion of the operation, with varying events being generated for different operations."}),"\n",(0,r.jsxs)(i.table,{children:[(0,r.jsx)(i.thead,{children:(0,r.jsxs)(i.tr,{children:[(0,r.jsx)(i.th,{children:"operation type"}),(0,r.jsx)(i.th,{children:"event"})]})}),(0,r.jsxs)(i.tbody,{children:[(0,r.jsxs)(i.tr,{children:[(0,r.jsx)(i.td,{children:"table operation"}),(0,r.jsxs)(i.td,{children:[(0,r.jsx)(i.code,{children:"CreateTableEvent"}),", ",(0,r.jsx)(i.code,{children:"AlterTableEvent"}),", ",(0,r.jsx)(i.code,{children:"DropTableEvent"}),", ",(0,r.jsx)(i.code,{children:"LoadTableEvent"}),", ",(0,r.jsx)(i.code,{children:"ListTableEvent"}),", ",(0,r.jsx)(i.code,{children:"PurgeTableFailureEvent"}),", ",(0,r.jsx)(i.code,{children:"CreateTableFailureEvent"}),", ",(0,r.jsx)(i.code,{children:"AlterTableFailureEvent"}),", ",(0,r.jsx)(i.code,{children:"DropTableFailureEvent"}),", ",(0,r.jsx)(i.code,{children:"LoadTableFailureEvent"}),", ",(0,r.jsx)(i.code,{children:"ListTableFailureEvent"}),", ",(0,r.jsx)(i.code,{children:"PurgeTableFailureEvent"})]})]}),(0,r.jsxs)(i.tr,{children:[(0,r.jsx)(i.td,{children:"fileset operation"}),(0,r.jsxs)(i.td,{children:[(0,r.jsx)(i.code,{children:"CreateFileSetEvent"}),", ",(0,r.jsx)(i.code,{children:"AlterFileSetEvent"}),", ",(0,r.jsx)(i.code,{children:"DropFileSetEvent"}),", ",(0,r.jsx)(i.code,{children:"LoadFileSetEvent"}),", ",(0,r.jsx)(i.code,{children:"ListFileSetEvent"}),", ",(0,r.jsx)(i.code,{children:"CreateFileSetFailureEvent"}),", ",(0,r.jsx)(i.code,{children:"AlterFileSetFailureEvent"}),", ",(0,r.jsx)(i.code,{children:"DropFileSetFailureEvent"}),", ",(0,r.jsx)(i.code,{children:"LoadFileSetFailureEvent"}),", ",(0,r.jsx)(i.code,{children:"ListFileSetFailureEvent"})]})]}),(0,r.jsxs)(i.tr,{children:[(0,r.jsx)(i.td,{children:"topic operation"}),(0,r.jsxs)(i.td,{children:[(0,r.jsx)(i.code,{children:"CreateTopicEvent"}),", ",(0,r.jsx)(i.code,{children:"AlterTopicEvent"}),", ",(0,r.jsx)(i.code,{children:"DropTopicEvent"}),", ",(0,r.jsx)(i.code,{children:"LoadTopicEvent"}),", ",(0,r.jsx)(i.code,{children:"ListTopicEvent"}),", ",(0,r.jsx)(i.code,{children:"CreateTopicFailureEvent"}),", ",(0,r.jsx)(i.code,{children:"AlterTopicFailureEvent"}),", ",(0,r.jsx)(i.code,{children:"DropTopicFailureEvent"}),", ",(0,r.jsx)(i.code,{children:"LoadTopicFailureEvent"}),", ",(0,r.jsx)(i.code,{children:"ListTopicFailureEvent"})]})]}),(0,r.jsxs)(i.tr,{children:[(0,r.jsx)(i.td,{children:"schema operation"}),(0,r.jsxs)(i.td,{children:[(0,r.jsx)(i.code,{children:"CreateSchemaEvent"}),", ",(0,r.jsx)(i.code,{children:"AlterSchemaEvent"}),", ",(0,r.jsx)(i.code,{children:"DropSchemaEvent"}),", ",(0,r.jsx)(i.code,{children:"LoadSchemaEvent"}),", ",(0,r.jsx)(i.code,{children:"ListSchemaEvent"}),", ",(0,r.jsx)(i.code,{children:"CreateSchemaFailureEvent"}),", ",(0,r.jsx)(i.code,{children:"AlterSchemaFailureEvent"}),", ",(0,r.jsx)(i.code,{children:"DropSchemaFailureEvent"}),", ",(0,r.jsx)(i.code,{children:"LoadSchemaFailureEvent"}),", ",(0,r.jsx)(i.code,{children:"ListSchemaFailureEvent"})]})]}),(0,r.jsxs)(i.tr,{children:[(0,r.jsx)(i.td,{children:"catalog operation"}),(0,r.jsxs)(i.td,{children:[(0,r.jsx)(i.code,{children:"CreateCatalogEvent"}),", ",(0,r.jsx)(i.code,{children:"AlterCatalogEvent"}),", ",(0,r.jsx)(i.code,{children:"DropCatalogEvent"}),", ",(0,r.jsx)(i.code,{children:"LoadCatalogEvent"}),", ",(0,r.jsx)(i.code,{children:"ListCatalogEvent"}),", ",(0,r.jsx)(i.code,{children:"CreateCatalogFailureEvent"}),", ",(0,r.jsx)(i.code,{children:"AlterCatalogFailureEvent"}),", ",(0,r.jsx)(i.code,{children:"DropCatalogFailureEvent"}),", ",(0,r.jsx)(i.code,{children:"LoadCatalogFailureEvent"}),", ",(0,r.jsx)(i.code,{children:"ListCatalogFailureEvent"})]})]}),(0,r.jsxs)(i.tr,{children:[(0,r.jsx)(i.td,{children:"metalake operation"}),(0,r.jsxs)(i.td,{children:[(0,r.jsx)(i.code,{children:"CreateMetalakeEvent"}),", ",(0,r.jsx)(i.code,{children:"AlterMetalakeEvent"}),", ",(0,r.jsx)(i.code,{children:"DropMetalakeEvent"}),", ",(0,r.jsx)(i.code,{children:"LoadMetalakeEvent"}),", ",(0,r.jsx)(i.code,{children:"ListMetalakeEvent"}),", ",(0,r.jsx)(i.code,{children:"CreateMetalakeFailureEvent"}),", ",(0,r.jsx)(i.code,{children:"AlterMetalakeFailureEvent"}),", ",(0,r.jsx)(i.code,{children:"DropMetalakeFailureEvent"}),", ",(0,r.jsx)(i.code,{children:"LoadMetalakeFailureEvent"}),", ",(0,r.jsx)(i.code,{children:"ListMetalakeFailureEvent"})]})]})]})]}),"\n",(0,r.jsx)(i.h4,{id:"event-listener-plugin",children:"Event listener plugin"}),"\n",(0,r.jsxs)(i.p,{children:["The ",(0,r.jsx)(i.code,{children:"EventListenerPlugin"})," defines an interface for event listeners that manage the lifecycle and state of a plugin. This includes handling its initialization, startup, and shutdown processes, as well as handing events triggered by various operations."]}),"\n",(0,r.jsx)(i.p,{children:"The plugin provides several operational modes for how to process event, supporting both synchronous and asynchronous processing approaches."}),"\n",(0,r.jsxs)(i.ul,{children:["\n",(0,r.jsxs)(i.li,{children:["\n",(0,r.jsxs)(i.p,{children:[(0,r.jsx)(i.strong,{children:"SYNC"}),": Events are processed synchronously, immediately following the associated operation. This mode ensures events are processed before the operation's result is returned to the client, but it may delay the main process if event processing takes too long."]}),"\n"]}),"\n",(0,r.jsxs)(i.li,{children:["\n",(0,r.jsxs)(i.p,{children:[(0,r.jsx)(i.strong,{children:"ASYNC_SHARED"}),": This mode employs a shared queue and dispatcher for asynchronous event processing. It prevents the main process from being blocked, though there's a risk events might be dropped if not promptly consumed. Sharing a dispatcher can lead to poor isolation in case of slow listeners."]}),"\n"]}),"\n",(0,r.jsxs)(i.li,{children:["\n",(0,r.jsxs)(i.p,{children:[(0,r.jsx)(i.strong,{children:"ASYNC_ISOLATED"}),": Events are processed asynchronously, with each listener having its own dedicated queue and dispatcher thread. This approach offers better isolation but at the expense of multiple queues and dispatchers."]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(i.p,{children:"For more details, please refer to the definition of the plugin."}),"\n",(0,r.jsx)(i.h3,{id:"security-configuration",children:"Security configuration"}),"\n",(0,r.jsxs)(i.p,{children:["Refer to ",(0,r.jsx)(i.a,{href:"/docs/0.6.1-incubating/security/security",children:"security"})," for HTTPS and authentication configurations."]}),"\n",(0,r.jsx)(i.h3,{id:"metrics-configuration",children:"Metrics configuration"}),"\n",(0,r.jsxs)(i.table,{children:[(0,r.jsx)(i.thead,{children:(0,r.jsxs)(i.tr,{children:[(0,r.jsx)(i.th,{children:"Property name"}),(0,r.jsx)(i.th,{children:"Description"}),(0,r.jsx)(i.th,{children:"Default value"}),(0,r.jsx)(i.th,{children:"Required"}),(0,r.jsx)(i.th,{children:"Since Version"})]})}),(0,r.jsx)(i.tbody,{children:(0,r.jsxs)(i.tr,{children:[(0,r.jsx)(i.td,{children:(0,r.jsx)(i.code,{children:"gravitino.metrics.timeSlidingWindowSecs"})}),(0,r.jsx)(i.td,{children:"The seconds of Gravitino metrics time sliding window"}),(0,r.jsx)(i.td,{children:"60"}),(0,r.jsx)(i.td,{children:"No"}),(0,r.jsx)(i.td,{children:"0.5.1"})]})})]}),"\n",(0,r.jsx)(i.h2,{id:"apache-gravitino-catalog-properties-configuration",children:"Apache Gravitino catalog properties configuration"}),"\n",(0,r.jsx)(i.p,{children:"There are three types of catalog properties:"}),"\n",(0,r.jsxs)(i.ol,{children:["\n",(0,r.jsxs)(i.li,{children:[(0,r.jsx)(i.strong,{children:"Gravitino defined properties"}),": Gravitino defines these properties as the necessary\nconfigurations for the catalog to work properly."]}),"\n",(0,r.jsxs)(i.li,{children:[(0,r.jsxs)(i.strong,{children:["Properties with the ",(0,r.jsx)(i.code,{children:"gravitino.bypass."})," prefix"]}),": These properties are not managed by\nGravitino and pass directly to the underlying system for advanced usage."]}),"\n",(0,r.jsxs)(i.li,{children:[(0,r.jsx)(i.strong,{children:"Other properties"}),": Gravitino doesn't leverage these properties, just store them. Users\ncan use them for their own purposes."]}),"\n"]}),"\n",(0,r.jsxs)(i.p,{children:["Catalog properties are either defined in catalog configuration files as default values or\nspecified as ",(0,r.jsx)(i.code,{children:"properties"})," explicitly when creating a catalog."]}),"\n",(0,r.jsxs)(i.admonition,{type:"info",children:[(0,r.jsxs)(i.p,{children:["The catalog properties explicitly specified in the ",(0,r.jsx)(i.code,{children:"properties"})," field take precedence over the\ndefault values in the catalog configuration file."]}),(0,r.jsx)(i.p,{children:"These rules only apply to the catalog properties and don't affect the schema or table properties."})]}),"\n",(0,r.jsx)(i.p,{children:"Below is a list of catalog properties that will be used by all Gravitino catalogs:"}),"\n",(0,r.jsxs)(i.table,{children:[(0,r.jsx)(i.thead,{children:(0,r.jsxs)(i.tr,{children:[(0,r.jsx)(i.th,{children:"Configuration item"}),(0,r.jsx)(i.th,{children:"Description"}),(0,r.jsx)(i.th,{children:"Default value"}),(0,r.jsx)(i.th,{children:"Required"}),(0,r.jsx)(i.th,{children:"Since version"})]})}),(0,r.jsxs)(i.tbody,{children:[(0,r.jsxs)(i.tr,{children:[(0,r.jsx)(i.td,{children:(0,r.jsx)(i.code,{children:"package"})}),(0,r.jsxs)(i.td,{children:["The path of the catalog package, Gravitino leverages this path to load the related catalog libs and configurations. The package should consist two folders, ",(0,r.jsx)(i.code,{children:"conf"})," (for catalog related configurations) and ",(0,r.jsx)(i.code,{children:"libs"})," (for catalog related dependencies/jars)"]}),(0,r.jsx)(i.td,{children:"(none)"}),(0,r.jsx)(i.td,{children:"No"}),(0,r.jsx)(i.td,{children:"0.5.0"})]}),(0,r.jsxs)(i.tr,{children:[(0,r.jsx)(i.td,{children:(0,r.jsx)(i.code,{children:"cloud.name"})}),(0,r.jsxs)(i.td,{children:["The property to specify the cloud that the catalog is running on. The valid values are ",(0,r.jsx)(i.code,{children:"aws"}),", ",(0,r.jsx)(i.code,{children:"azure"}),", ",(0,r.jsx)(i.code,{children:"gcp"}),", ",(0,r.jsx)(i.code,{children:"on_premise"})," and ",(0,r.jsx)(i.code,{children:"other"}),"."]}),(0,r.jsx)(i.td,{children:"(none)"}),(0,r.jsx)(i.td,{children:"No"}),(0,r.jsx)(i.td,{children:"0.6.0-incubating"})]}),(0,r.jsxs)(i.tr,{children:[(0,r.jsx)(i.td,{children:(0,r.jsx)(i.code,{children:"cloud.region-code"})}),(0,r.jsx)(i.td,{children:"The property to specify the region code of the cloud that the catalog is running on."}),(0,r.jsx)(i.td,{children:"(none)"}),(0,r.jsx)(i.td,{children:"No"}),(0,r.jsx)(i.td,{children:"0.6.0-incubating"})]})]})]}),"\n",(0,r.jsx)(i.p,{children:"The following table lists the catalog specific properties and their default paths:"}),"\n",(0,r.jsxs)(i.table,{children:[(0,r.jsx)(i.thead,{children:(0,r.jsxs)(i.tr,{children:[(0,r.jsx)(i.th,{children:"catalog provider"}),(0,r.jsx)(i.th,{children:"catalog properties"}),(0,r.jsx)(i.th,{children:"catalog properties configuration file path"})]})}),(0,r.jsxs)(i.tbody,{children:[(0,r.jsxs)(i.tr,{children:[(0,r.jsx)(i.td,{children:(0,r.jsx)(i.code,{children:"hive"})}),(0,r.jsx)(i.td,{children:(0,r.jsx)(i.a,{href:"/docs/0.6.1-incubating/apache-hive-catalog#catalog-properties",children:"Hive catalog properties"})}),(0,r.jsx)(i.td,{children:(0,r.jsx)(i.code,{children:"catalogs/hive/conf/hive.conf"})})]}),(0,r.jsxs)(i.tr,{children:[(0,r.jsx)(i.td,{children:(0,r.jsx)(i.code,{children:"lakehouse-iceberg"})}),(0,r.jsx)(i.td,{children:(0,r.jsx)(i.a,{href:"/docs/0.6.1-incubating/lakehouse-iceberg-catalog#catalog-properties",children:"Lakehouse Iceberg catalog properties"})}),(0,r.jsx)(i.td,{children:(0,r.jsx)(i.code,{children:"catalogs/lakehouse-iceberg/conf/lakehouse-iceberg.conf"})})]}),(0,r.jsxs)(i.tr,{children:[(0,r.jsx)(i.td,{children:(0,r.jsx)(i.code,{children:"jdbc-mysql"})}),(0,r.jsx)(i.td,{children:(0,r.jsx)(i.a,{href:"/docs/0.6.1-incubating/jdbc-mysql-catalog#catalog-properties",children:"MySQL catalog properties"})}),(0,r.jsx)(i.td,{children:(0,r.jsx)(i.code,{children:"catalogs/jdbc-mysql/conf/jdbc-mysql.conf"})})]}),(0,r.jsxs)(i.tr,{children:[(0,r.jsx)(i.td,{children:(0,r.jsx)(i.code,{children:"jdbc-postgresql"})}),(0,r.jsx)(i.td,{children:(0,r.jsx)(i.a,{href:"/docs/0.6.1-incubating/jdbc-postgresql-catalog#catalog-properties",children:"PostgreSQL catalog properties"})}),(0,r.jsx)(i.td,{children:(0,r.jsx)(i.code,{children:"catalogs/jdbc-postgresql/conf/jdbc-postgresql.conf"})})]}),(0,r.jsxs)(i.tr,{children:[(0,r.jsx)(i.td,{children:(0,r.jsx)(i.code,{children:"jdbc-doris"})}),(0,r.jsx)(i.td,{children:(0,r.jsx)(i.a,{href:"/docs/0.6.1-incubating/jdbc-doris-catalog#catalog-properties",children:"Doris catalog properties"})}),(0,r.jsx)(i.td,{children:(0,r.jsx)(i.code,{children:"catalogs/jdbc-doris/conf/jdbc-doris.conf"})})]}),(0,r.jsxs)(i.tr,{children:[(0,r.jsx)(i.td,{children:(0,r.jsx)(i.code,{children:"lakehouse-paimon"})}),(0,r.jsx)(i.td,{children:(0,r.jsx)(i.a,{href:"/docs/0.6.1-incubating/lakehouse-paimon-catalog#catalog-properties",children:"Lakehouse Paimon catalog properties"})}),(0,r.jsx)(i.td,{children:(0,r.jsx)(i.code,{children:"catalogs/lakehouse-paimon/conf/lakehouse-paimon.conf"})})]}),(0,r.jsxs)(i.tr,{children:[(0,r.jsx)(i.td,{children:(0,r.jsx)(i.code,{children:"kafka"})}),(0,r.jsx)(i.td,{children:(0,r.jsx)(i.a,{href:"/docs/0.6.1-incubating/kafka-catalog#catalog-properties",children:"Kafka catalog properties"})}),(0,r.jsx)(i.td,{children:(0,r.jsx)(i.code,{children:"catalogs/kafka/conf/kafka.conf"})})]})]})]}),"\n",(0,r.jsx)(i.admonition,{type:"info",children:(0,r.jsx)(i.p,{children:"The Gravitino server automatically adds the catalog properties configuration directory to classpath."})}),"\n",(0,r.jsx)(i.h2,{id:"some-other-configurations",children:"Some other configurations"}),"\n",(0,r.jsxs)(i.p,{children:["You could put HDFS configuration file to the catalog properties configuration dir, like ",(0,r.jsx)(i.code,{children:"catalogs/lakehouse-iceberg/conf/"}),"."]}),"\n",(0,r.jsx)(i.h2,{id:"how-to-set-up-runtime-environment-variables",children:"How to set up runtime environment variables"}),"\n",(0,r.jsxs)(i.p,{children:["The Gravitino server lets you set up runtime environment variables by editing the ",(0,r.jsx)(i.code,{children:"gravitino-env.sh"})," file, located in the ",(0,r.jsx)(i.code,{children:"conf"})," directory."]}),"\n",(0,r.jsx)(i.h3,{id:"how-to-access-apache-hadoop",children:"How to access Apache Hadoop"}),"\n",(0,r.jsxs)(i.p,{children:["Currently, due to the absence of a comprehensive user permission system, Gravitino can only use a single username for\nApache Hadoop access. Ensure that the user starting the Gravitino server has Hadoop (HDFS, YARN, etc.) access\npermissions; otherwise, you may encounter a ",(0,r.jsx)(i.code,{children:"Permission denied"})," error. There are two ways to resolve this error:"]}),"\n",(0,r.jsxs)(i.ul,{children:["\n",(0,r.jsx)(i.li,{children:"Grant Gravitino startup user permissions in Hadoop"}),"\n",(0,r.jsxs)(i.li,{children:["Specify the authorized Hadoop username in the environment variables ",(0,r.jsx)(i.code,{children:"HADOOP_USER_NAME"})," before starting the Gravitino server."]}),"\n"]})]})}function h(e={}){const{wrapper:i}={...(0,t.R)(),...e.components};return i?(0,r.jsx)(i,{...e,children:(0,r.jsx)(a,{...e})}):a(e)}}}]);