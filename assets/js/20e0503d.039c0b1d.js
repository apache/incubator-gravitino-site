"use strict";(self.webpackChunkapache_website_template=self.webpackChunkapache_website_template||[]).push([[28664],{92272:(e,i,n)=>{n.r(i),n.d(i,{assets:()=>h,contentTitle:()=>s,default:()=>d,frontMatter:()=>r,metadata:()=>o,toc:()=>c});var a=n(13274),t=n(38112);const r={title:"Apache Gravitino 0.6.0 - First ASF release for Apache Gravitino\u2122 (incubating)",slug:"gravitino-0-6-0-release-notes",authors:["jerryshao"],tags:["apache","gravitino","metadata","multicloud"]},s=void 0,o={permalink:"/blog/gravitino-0-6-0-release-notes",editUrl:"https://github.com/apache/gravitino-site/tree/main/blog/2024-09-09-gravitino-0-6-0-release-notes.mdx",source:"@site/blog/2024-09-09-gravitino-0-6-0-release-notes.mdx",title:"Apache Gravitino 0.6.0 - First ASF release for Apache Gravitino\u2122 (incubating)",description:"This blog post will briefly introduce the new features and significant improvements. Keep reading to",date:"2024-09-09T00:00:00.000Z",tags:[{inline:!0,label:"apache",permalink:"/blog/tags/apache"},{inline:!0,label:"gravitino",permalink:"/blog/tags/gravitino"},{inline:!0,label:"metadata",permalink:"/blog/tags/metadata"},{inline:!0,label:"multicloud",permalink:"/blog/tags/multicloud"}],readingTime:6.065,hasTruncateMarker:!1,authors:[{name:"Jerry Shao",title:"PPMC Member",url:"https://github.com/jerryshao/",imageURL:"https://github.com/jerryshao.png",key:"jerryshao"}],frontMatter:{title:"Apache Gravitino 0.6.0 - First ASF release for Apache Gravitino\u2122 (incubating)",slug:"gravitino-0-6-0-release-notes",authors:["jerryshao"],tags:["apache","gravitino","metadata","multicloud"]},unlisted:!1,prevItem:{title:"Apache Gravitino 0.6.1 release for Apache Gravitino\u2122 (incubating)",permalink:"/blog/gravitino-0-6-1-release-notes"},nextItem:{title:"Gravitino is an Open Source Data and AI Multi-Cloud Solution",permalink:"/blog/gravitino-open-source"}},h={authorsImageUrls:[void 0]},c=[{value:"Introducing the unified RBAC model for Gravitino",id:"introducing-the-unified-rbac-model-for-gravitino",level:2},{value:"Separation of the Iceberg REST catalog service",id:"separation-of-the-iceberg-rest-catalog-service",level:2},{value:"Tagging support",id:"tagging-support",level:2},{value:"Apache Flink Gravitino connector",id:"apache-flink-gravitino-connector",level:2},{value:"Apache Paimon table management in Gravitino",id:"apache-paimon-table-management-in-gravitino",level:2},{value:"Add Python GVFS support for fileset",id:"add-python-gvfs-support-for-fileset",level:2},{value:"Notable enhancements",id:"notable-enhancements",level:2},{value:"Gravitino core",id:"gravitino-core",level:3},{value:"Catalog relate",id:"catalog-relate",level:3},{value:"API and client",id:"api-and-client",level:3},{value:"Overall",id:"overall",level:2},{value:"Credits",id:"credits",level:2}];function l(e){const i={a:"a",code:"code",h2:"h2",h3:"h3",img:"img",li:"li",p:"p",strong:"strong",ul:"ul",...(0,t.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(i.p,{children:"This blog post will briefly introduce the new features and significant improvements. Keep reading to\nlearn what the community has worked on and understand Gravitino\u2019s use cases."}),"\n",(0,a.jsx)(i.h2,{id:"introducing-the-unified-rbac-model-for-gravitino",children:"Introducing the unified RBAC model for Gravitino"}),"\n",(0,a.jsx)(i.p,{children:"Access control is a crucial feature for the enterprise use of a data catalog, providing users with\nunified and centralized authorization and authentication capabilities. This release introduces a\nrole-based access control (RBAC) model in Gravitino to authorize different securable objects in a\nunified manner."}),"\n",(0,a.jsxs)(i.p,{children:["We use ",(0,a.jsx)(i.code,{children:"Privilege"}),", ",(0,a.jsx)(i.code,{children:"SecurableObject"}),", ",(0,a.jsx)(i.code,{children:"Role"}),", ",(0,a.jsx)(i.code,{children:"User"}),", and ",(0,a.jsx)(i.code,{children:"Group"})," to define the permissions."]}),"\n",(0,a.jsx)(i.p,{children:(0,a.jsx)(i.img,{alt:"RBAC model",src:n(87428).A+"",width:"1280",height:"960"})}),"\n",(0,a.jsx)(i.p,{children:(0,a.jsx)(i.strong,{children:"Privilege"})}),"\n",(0,a.jsx)(i.p,{children:"Privilege defines the types of operations on different metadata objects, and is used to allow or\ndeny a specific type of operation on a metadata object."}),"\n",(0,a.jsx)(i.p,{children:(0,a.jsx)(i.strong,{children:"SecurableObject"})}),"\n",(0,a.jsx)(i.p,{children:"SecurableObject binds multiple operation-specific types of privileges to a single metadata object."}),"\n",(0,a.jsx)(i.p,{children:(0,a.jsx)(i.strong,{children:"Role"})}),"\n",(0,a.jsx)(i.p,{children:"A Role is a collection of SecurableObjects, and a role represents multiple operation type\npermissions on multiple metadata objects."}),"\n",(0,a.jsxs)(i.p,{children:[(0,a.jsx)(i.strong,{children:"User"}),"\nUsers are granted one or multiple roles, and users have different operating privileges depending\non their roles."]}),"\n",(0,a.jsx)(i.p,{children:(0,a.jsx)(i.strong,{children:"Group"})}),"\n",(0,a.jsx)(i.p,{children:"To make it easier to grant a single permission to multiple users, we can add users to a group,\nand then grant one or more roles to that user group. This process allows all users belonging to\nthat user group to have the permissions in those roles."}),"\n",(0,a.jsx)(i.p,{children:"More importantly, the privileges authorized by the user in Gravitino will be pushed down to\nthe underlying permission system. Currently, we support push permissions to Apache Ranger,\nothers like IAM are under development."}),"\n",(0,a.jsx)(i.p,{children:(0,a.jsx)(i.img,{alt:"Authorization flow",src:n(23372).A+"",width:"1280",height:"960"})}),"\n",(0,a.jsxs)(i.p,{children:["For more information about how our RBAC works, please check out our ",(0,a.jsx)(i.a,{href:"https://docs.google.com/document/d/11MF1PTN5UTKJf3WLuHqhCikQzJoLxaXM_AEDZpXhO2I/edit?usp=sharing",children:"design document"}),".\nTo enable and use access control in Gravitino, please refer to the ",(0,a.jsx)(i.a,{href:"https://gravitino.apache.org/docs/0.6.0-incubating/security/access-control",children:"user document"}),"."]}),"\n",(0,a.jsx)(i.p,{children:"Our implementation of unified access control capability is still in the alpha stage, and we\u2019re\nstriving to add more features and make it stable as soon as possible, so please stay tuned."}),"\n",(0,a.jsx)(i.h2,{id:"separation-of-the-iceberg-rest-catalog-service",children:"Separation of the Iceberg REST catalog service"}),"\n",(0,a.jsxs)(i.p,{children:["Apache Iceberg is a first-class citizen, and Gravitino has provided an embedded Iceberg REST catalog\nservice since version 0.3. We have seen the increased demands and adoption of Iceberg REST catalog\nservice as a standalone server. So, in version 0.6.0, we refactored the whole architecture and\nmodularized the Iceberg REST catalog service as a standalone service, allowing it to be deployed\nwith or without the Gravitino server. Besides the refactoring, we also bumped the supported version\nto Iceberg 1.5.2, added support for S3 cloud storage, and now support the ",(0,a.jsx)(i.code,{children:"registerTable"})," interface."]}),"\n",(0,a.jsx)(i.p,{children:"Iceberg REST catalog support is crucial to Gravitino, and modularization is just the first step.\nIn future releases, we will add more features like cloud storage support and integrating Gravitino\u2019s\nRBAC model, credential vending, etc."}),"\n",(0,a.jsxs)(i.p,{children:["To use the Gravitino Iceberg REST catalog service, please check our ",(0,a.jsx)(i.a,{href:"https://gravitino.apache.org/docs/0.6.0-incubating/iceberg-rest-service",children:"user document"}),".\nThe umbrella issue is ",(0,a.jsx)(i.a,{href:"https://github.com/apache/gravitino/issues/4058",children:"#4058"}),"."]}),"\n",(0,a.jsx)(i.h2,{id:"tagging-support",children:"Tagging support"}),"\n",(0,a.jsxs)(i.p,{children:["Tagging on metadata objects is useful for data discovery, classification, and data governance.\nIt can also be leveraged by query engines to provide tag-based access control. In Gravitino 0.6.0,\nwe introduce tag support users can add tags on metadata objects like ",(0,a.jsx)(i.code,{children:"CATALOG"}),", ",(0,a.jsx)(i.code,{children:"SCHEMA"}),", ",(0,a.jsx)(i.code,{children:"TABLE"}),",\n",(0,a.jsx)(i.code,{children:"FILESET"}),", and ",(0,a.jsx)(i.code,{children:"TOPIC"}),". To know how our tag system is designed, please check out the\n",(0,a.jsx)(i.a,{href:"https://docs.google.com/document/d/1zkQWla8OMIPY61HqKUivpf43cTteNvcd2w_oA32yAfg/edit#heading=h.26ac49mb3u1q",children:"design document"}),"\nand issue ",(0,a.jsx)(i.a,{href:"https://github.com/apache/gravitino/issues/3344",children:"#3344"}),". To use\ntags in both REST API and Java SDK, please see ",(0,a.jsx)(i.a,{href:"https://gravitino.apache.org/docs/0.6.0-incubating/manage-tags-in-gravitino",children:"how to manage tags"}),"."]}),"\n",(0,a.jsx)(i.h2,{id:"apache-flink-gravitino-connector",children:"Apache Flink Gravitino connector"}),"\n",(0,a.jsx)(i.p,{children:"As an open data catalog, we want to be able to support all query engines. Therefore, alongside Trino\nand Apache Spark, we have added Apache Flink as our newest supported query engine."}),"\n",(0,a.jsxs)(i.p,{children:["In 0.6.0, we added a new Flink Gravitino connector ",(0,a.jsx)(i.a,{href:"https://github.com/apache/gravitino/issues/1354",children:"#1354"}),"\nand supported querying Hive tables using Flink with Gravitino. Hive support is just our first step,\nwe will continue to add more table support."]}),"\n",(0,a.jsxs)(i.p,{children:["To know how to use the Flink Gravitino connector, please refer to our ",(0,a.jsx)(i.a,{href:"https://gravitino.apache.org/docs/0.6.0-incubating/flink-connector/flink-connector",children:"documentation"}),"."]}),"\n",(0,a.jsx)(i.h2,{id:"apache-paimon-table-management-in-gravitino",children:"Apache Paimon table management in Gravitino"}),"\n",(0,a.jsxs)(i.p,{children:["Apache Paimon has become quite popular this year, and many companies use Paimon to build their\nstreaming warehouse or lakehouse. To manage all the lakehouse tables in a unified manner, Gravitino\nhas added Paimon table management in 0.6.0 ",(0,a.jsx)(i.a,{href:"https://github.com/apache/gravitino/issues/1129",children:"#1129"}),".\nUsers can use our unified API to manage Paimon tables as well as other tables.\nTo know more about how to manage Paimon tables, please refer to ",(0,a.jsx)(i.a,{href:"https://gravitino.apache.org/docs/0.6.0-incubating/lakehouse-paimon-catalog",children:"Lakehouse Paimon Catalog document"}),"."]}),"\n",(0,a.jsx)(i.h2,{id:"add-python-gvfs-support-for-fileset",children:"Add Python GVFS support for fileset"}),"\n",(0,a.jsx)(i.p,{children:"In Gravitino 0.5, we added a Java Hadoop Compatible Filesystem (HCFS) support (GVFS) for fileset\nread/write in Gravitino. The provided Java GVFS can be used by query engines like Apache Spark to\nread/write data from files or folders. Although this works well in big data, AI development is\nlargely dominated by Python, which can create an obstacle and hinder users from using Fileset with AI frameworks."}),"\n",(0,a.jsxs)(i.p,{children:["In 0.6.0, we followed the Python fsspec to provide a Python GVFS package that can be used by popular\nPython frameworks like Apache Arrow, Pandas, Ray, LlamaIndex, and more. You can check\nout ",(0,a.jsx)(i.a,{href:"https://gravitino.apache.org/docs/0.6.0-incubating/how-to-use-gvfs#2-managing-files-of-fileset-with-python-gvfs",children:"Python GVFS document"})," for more information."]}),"\n",(0,a.jsx)(i.h2,{id:"notable-enhancements",children:"Notable enhancements"}),"\n",(0,a.jsx)(i.h3,{id:"gravitino-core",children:"Gravitino core"}),"\n",(0,a.jsxs)(i.ul,{children:["\n",(0,a.jsxs)(i.li,{children:["Support catalog reload after a property is altered ",(0,a.jsx)(i.a,{href:"https://github.com/apache/gravitino/issues/2267",children:"#2267"}),"."]}),"\n",(0,a.jsxs)(i.li,{children:["Deprecate KV store and add H2 support as embedded storage backend ",(0,a.jsx)(i.a,{href:"https://github.com/apache/gravitino/issues/3968",children:"#3968"}),"."]}),"\n"]}),"\n",(0,a.jsx)(i.h3,{id:"catalog-relate",children:"Catalog relate"}),"\n",(0,a.jsxs)(i.ul,{children:["\n",(0,a.jsxs)(i.li,{children:["Add API test catalog connection ",(0,a.jsx)(i.a,{href:"https://github.com/apache/gravitino/issues/4107",children:"#4107"}),"."]}),"\n",(0,a.jsxs)(i.li,{children:["Improve the type system to support unknown types ",(0,a.jsx)(i.a,{href:"https://github.com/apache/gravitino/issues/3427",children:"#3427"}),"."]}),"\n",(0,a.jsxs)(i.li,{children:["Add Kerberos support for fileset Hadoop catalog ",(0,a.jsx)(i.a,{href:"https://github.com/apache/gravitino/issues/3462",children:"#3462"}),"."]}),"\n",(0,a.jsxs)(i.li,{children:["Add S3 support for Iceberg ",(0,a.jsx)(i.a,{href:"https://github.com/apache/gravitino/issues/4264",children:"#4264"}),"."]}),"\n",(0,a.jsxs)(i.li,{children:["Support cloud and region property when creating catalog ",(0,a.jsx)(i.a,{href:"https://github.com/apache/gravitino/issues/3966",children:"#3966"}),"."]}),"\n",(0,a.jsxs)(i.li,{children:["Support multiple Kerberos authentication for Hive catalog ",(0,a.jsx)(i.a,{href:"https://github.com/apache/gravitino/issues/3906",children:"#3906"}),"."]}),"\n",(0,a.jsxs)(i.li,{children:["Unify the behavior of purge for all the catalogs ",(0,a.jsx)(i.a,{href:"https://github.com/apache/gravitino/issues/3685",children:"#3685"}),"."]}),"\n"]}),"\n",(0,a.jsx)(i.h3,{id:"api-and-client",children:"API and client"}),"\n",(0,a.jsxs)(i.ul,{children:["\n",(0,a.jsxs)(i.li,{children:["Refactor Java and Python API for better user experience ",(0,a.jsx)(i.a,{href:"https://github.com/apache/gravitino/issues/3626",children:"#3626"}),"."]}),"\n",(0,a.jsxs)(i.li,{children:["Add missing error handlers in Python client ",(0,a.jsx)(i.a,{href:"https://github.com/apache/gravitino/issues/4225",children:"#4225"}),"."]}),"\n"]}),"\n",(0,a.jsxs)(i.p,{children:["All the resolved issues targeting the 0.6.0 release can be seen at ",(0,a.jsx)(i.a,{href:"https://github.com/apache/gravitino/issues?page=12&q=is%3Aissue+is%3Aclosed+label%3A0.6.0",children:"https://github.com/apache/gravitino/issues?page=12&q=is%3Aissue+is%3Aclosed+label%3A0.6.0"}),"."]}),"\n",(0,a.jsx)(i.h2,{id:"overall",children:"Overall"}),"\n",(0,a.jsx)(i.p,{children:"Apache Gravitino 0.6.0 is the first ASF release, we would like to show appreciation to the Gravitino\ncommunity for their continued support and valuable contributions. Thanks to the feedback of our users,\nwe are able to continue to innovate and build, so thanks to all those reading this!"}),"\n",(0,a.jsxs)(i.p,{children:["To explore Gravitino 0.6.0 release, please check ",(0,a.jsx)(i.a,{href:"https://gravitino.apache.org/docs/0.6.0-incubating",children:"the documentation"}),".\nYour feedback is invaluable to the community and the project."]}),"\n",(0,a.jsx)(i.h2,{id:"credits",children:"Credits"}),"\n",(0,a.jsx)(i.p,{children:"This release acknowledges the hard work and dedication of all contributors who have helped make this\nrelease possible."}),"\n",(0,a.jsxs)(i.p,{children:[(0,a.jsx)(i.a,{href:"https://github.com/1996fanrui",children:"@1996fanrui"}),"\n",(0,a.jsx)(i.a,{href:"https://github.com/BSSsunny",children:"@BSSsunny"}),"\n",(0,a.jsx)(i.a,{href:"https://github.com/FANNG1",children:"@FANNG1"}),"\n",(0,a.jsx)(i.a,{href:"https://github.com/IamSaker",children:"@IamSaker"}),"\n",(0,a.jsx)(i.a,{href:"https://github.com/JinsYin",children:"@JinsYin"}),"\n",(0,a.jsx)(i.a,{href:"https://github.com/JosefinaOller",children:"@JosefinaOller"}),"\n",(0,a.jsx)(i.a,{href:"https://github.com/LanceHsun",children:"@LanceHsun"}),"\n",(0,a.jsx)(i.a,{href:"https://github.com/LauraXia123",children:"@LauraXia123"}),"\n",(0,a.jsx)(i.a,{href:"https://github.com/Leonidas963",children:"@Leonidas963"}),"\n",(0,a.jsx)(i.a,{href:"https://github.com/LindaSummer",children:"@LindaSummer"}),"\n",(0,a.jsx)(i.a,{href:"https://github.com/MukarramHaq",children:"@MukarramHaq"}),"\n",(0,a.jsx)(i.a,{href:"https://github.com/Naresh-kumar-Thodupunoori",children:"@Naresh-kumar-Thodupunoori"}),"\n",(0,a.jsx)(i.a,{href:"https://github.com/Nishtha-Jain-1119",children:"@Nishtha-Jain-1119"}),"\n",(0,a.jsx)(i.a,{href:"https://github.com/SteNicholas",children:"@SteNicholas"}),"\n",(0,a.jsx)(i.a,{href:"https://github.com/TEOTEO520",children:"@TEOTEO520"}),"\n",(0,a.jsx)(i.a,{href:"https://github.com/Vishesh-Paliwal",children:"@Vishesh-Paliwal"}),"\n",(0,a.jsx)(i.a,{href:"https://github.com/ashwin1596",children:"@ashwin1596"}),"\n",(0,a.jsx)(i.a,{href:"https://github.com/bknbkn",children:"@bknbkn"}),"\n",(0,a.jsx)(i.a,{href:"https://github.com/caican00",children:"@caican00"}),"\n",(0,a.jsx)(i.a,{href:"https://github.com/ch3yne",children:"@ch3yne"}),"\n",(0,a.jsx)(i.a,{href:"https://github.com/charliecheng630",children:"@charliecheng630"}),"\n",(0,a.jsx)(i.a,{href:"https://github.com/coolderli",children:"@coolderli"}),"\n",(0,a.jsx)(i.a,{href:"https://github.com/danhuawang",children:"@danhuawang"}),"\n",(0,a.jsx)(i.a,{href:"https://github.com/diqiu50",children:"@diqiu50"}),"\n",(0,a.jsx)(i.a,{href:"https://github.com/featherchen",children:"@featherchen"}),"\n",(0,a.jsx)(i.a,{href:"https://github.com/hanwxx",children:"@hanwxx"}),"\n",(0,a.jsx)(i.a,{href:"https://github.com/ian910297",children:"@ian910297"}),"\n",(0,a.jsx)(i.a,{href:"https://github.com/jenish-thapa",children:"@jenish-thapa"}),"\n",(0,a.jsx)(i.a,{href:"https://github.com/jerqi",children:"@jerqi"}),"\n",(0,a.jsx)(i.a,{href:"https://github.com/jerryshao",children:"@jerryshao"}),"\n",(0,a.jsx)(i.a,{href:"https://github.com/jingjia88",children:"@jingjia88"}),"\n",(0,a.jsx)(i.a,{href:"https://github.com/jtao1",children:"@jtao1"}),"\n",(0,a.jsx)(i.a,{href:"https://github.com/justinmclean",children:"@justinmclean"}),"\n",(0,a.jsx)(i.a,{href:"https://github.com/kalencaya",children:"@kalencaya"}),"\n",(0,a.jsx)(i.a,{href:"https://github.com/khmgobe",children:"@khmgobe"}),"\n",(0,a.jsx)(i.a,{href:"https://github.com/kiratkumar47",children:"@kiratkumar47"}),"\n",(0,a.jsx)(i.a,{href:"https://github.com/kohantikanath",children:"@kohantikanath"}),"\n",(0,a.jsx)(i.a,{href:"https://github.com/kristopherkane",children:"@kristopherkane"}),"\n",(0,a.jsx)(i.a,{href:"https://github.com/lsyulong",children:"@lsyulong"}),"\n",(0,a.jsx)(i.a,{href:"https://github.com/lw-yang",children:"@lw-yang"}),"\n",(0,a.jsx)(i.a,{href:"https://github.com/mchades",children:"@mchades"}),"\n",(0,a.jsx)(i.a,{href:"https://github.com/mygrsun",children:"@mygrsun"}),"\n",(0,a.jsx)(i.a,{href:"https://github.com/noidname01",children:"@noidname01"}),"\n",(0,a.jsx)(i.a,{href:"https://github.com/pan3793",children:"@pan3793"}),"\n",(0,a.jsx)(i.a,{href:"https://github.com/pravo23",children:"@pravo23"}),"\n",(0,a.jsx)(i.a,{href:"https://github.com/qqqttt123",children:"@qqqttt123"}),"\n",(0,a.jsx)(i.a,{href:"https://github.com/rich7420",children:"@rich7420"}),"\n",(0,a.jsx)(i.a,{href:"https://github.com/rohit-satya",children:"@rohit-satya"}),"\n",(0,a.jsx)(i.a,{href:"https://github.com/shaofengshi",children:"@shaofengshi"}),"\n",(0,a.jsx)(i.a,{href:"https://github.com/theoryxu",children:"@theoryxu"}),"\n",(0,a.jsx)(i.a,{href:"https://github.com/totalo",children:"@totalo"}),"\n",(0,a.jsx)(i.a,{href:"https://github.com/unknowntpo",children:"@unknowntpo"}),"\n",(0,a.jsx)(i.a,{href:"https://github.com/xiaozcy",children:"@xiaozcy"}),"\n",(0,a.jsx)(i.a,{href:"https://github.com/xloya",children:"@xloya"}),"\n",(0,a.jsx)(i.a,{href:"https://github.com/xunliu",children:"@xunliu"}),"\n",(0,a.jsx)(i.a,{href:"https://github.com/yijhenlin",children:"@yijhenlin"}),"\n",(0,a.jsx)(i.a,{href:"https://github.com/yuqi1129",children:"@yuqi1129"}),"\n",(0,a.jsx)(i.a,{href:"https://github.com/zhoukangcn",children:"@zhoukangcn"}),"\n",(0,a.jsx)(i.a,{href:"https://github.com/zivali",children:"@zivali"})]}),"\n",(0,a.jsx)(i.p,{children:"Apache Gravitino is an effort undergoing incubation at The Apache Software Foundation (ASF),\nsponsored by ASF Incubator. Incubation is required of all newly accepted projects until a further\nreview indicates that the infrastructure, communications, and decision making process have\nstabilized in a manner consistent with other successful ASF projects. While incubation status is not\nnecessarily a reflection of the completeness or stability of the code, it does indicate that the\nproject has yet to be fully endorsed by the ASF."}),"\n",(0,a.jsx)("sub",{children:"Apache, Apache Iceberg, Apache Hive, Apache Fink, Apache Paimon and Apache Gravitino are either\nregistered trademarks or trademarks of the Apache Software Foundation in the United States\nand/or other countries."})]})}function d(e={}){const{wrapper:i}={...(0,t.R)(),...e.components};return i?(0,a.jsx)(i,{...e,children:(0,a.jsx)(l,{...e})}):l(e)}},87428:(e,i,n)=>{n.d(i,{A:()=>a});const a=n.p+"assets/images/rbac-img1-67e559bb9f29cfade09a07b526180b7c.png"},23372:(e,i,n)=>{n.d(i,{A:()=>a});const a=n.p+"assets/images/rbac-img2-953edaaa24a7cc6e5affb9cf179550ca.png"}}]);