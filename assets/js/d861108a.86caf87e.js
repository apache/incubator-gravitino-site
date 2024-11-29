"use strict";(self.webpackChunkapache_website_template=self.webpackChunkapache_website_template||[]).push([[39558],{46090:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>c,contentTitle:()=>o,default:()=>u,frontMatter:()=>r,metadata:()=>d,toc:()=>h});var n=t(13274),i=t(8438),l=t(83593),s=t(5237);const r={title:"Manage table partition using Apache Gravitino",slug:"/manage-table-partition-using-gravitino",date:new Date("2024-02-03T00:00:00.000Z"),keyword:"table partition management",license:"This software is licensed under the Apache License version 2."},o=void 0,d={id:"manage-table-partition-using-gravitino",title:"Manage table partition using Apache Gravitino",description:"Introduction",source:"@site/docs/manage-table-partition-using-gravitino.md",sourceDirName:".",slug:"/manage-table-partition-using-gravitino",permalink:"/docs/next/manage-table-partition-using-gravitino",draft:!1,unlisted:!1,editUrl:"https://github.com/apache/gravitino-site/tree/main/docs/manage-table-partition-using-gravitino.md",tags:[],version:"current",lastUpdatedBy:"FANNG",lastUpdatedAt:1732866794e3,frontMatter:{title:"Manage table partition using Apache Gravitino",slug:"/manage-table-partition-using-gravitino",date:"2024-02-03T00:00:00.000Z",keyword:"table partition management",license:"This software is licensed under the Apache License version 2."},sidebar:"docs",previous:{title:"Manage relational metadata",permalink:"/docs/next/manage-relational-metadata-using-gravitino"},next:{title:"Table partitioning, bucketing, sort ordering and indexes",permalink:"/docs/next/table-partitioning-bucketing-sort-order-indexes"}},c={},h=[{value:"Introduction",id:"introduction",level:2},{value:"Requirements and limitations",id:"requirements-and-limitations",level:3},{value:"Partition operations",id:"partition-operations",level:2},{value:"Add partition",id:"add-partition",level:3},{value:"Get a partition by name",id:"get-a-partition-by-name",level:3},{value:"List partition names under a partitioned table",id:"list-partition-names-under-a-partitioned-table",level:3},{value:"List partitions under a partitioned table",id:"list-partitions-under-a-partitioned-table",level:3},{value:"Drop a partition by name",id:"drop-a-partition-by-name",level:3}];function p(e){const a={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(a.h2,{id:"introduction",children:"Introduction"}),"\n",(0,n.jsx)(a.p,{children:"Although many catalogs inherently manage partitions automatically, there are scenarios where manual partition management is necessary. Usage scenarios like managing the TTL (Time-To-Live) of partition data, gathering statistics on partition metadata, and optimizing queries through partition pruning. For these reasons, Apache Gravitino provides capabilities of partition management."}),"\n",(0,n.jsx)(a.h3,{id:"requirements-and-limitations",children:"Requirements and limitations"}),"\n",(0,n.jsxs)(a.ul,{children:["\n",(0,n.jsx)(a.li,{children:"Partition management is based on the partitioned table, so please ensure that you are operating on a partitioned table."}),"\n"]}),"\n",(0,n.jsx)(a.p,{children:"The following table shows the partition operations supported across various catalogs in Gravitino:"}),"\n",(0,n.jsxs)(a.table,{children:[(0,n.jsx)(a.thead,{children:(0,n.jsxs)(a.tr,{children:[(0,n.jsx)(a.th,{children:"Operation"}),(0,n.jsx)(a.th,{children:"Hive catalog"}),(0,n.jsx)(a.th,{children:"Iceberg catalog"}),(0,n.jsx)(a.th,{children:"Jdbc-Mysql catalog"}),(0,n.jsx)(a.th,{children:"Jdbc-PostgreSQL catalog"}),(0,n.jsx)(a.th,{children:"Jdbc-Doris catalog"})]})}),(0,n.jsxs)(a.tbody,{children:[(0,n.jsxs)(a.tr,{children:[(0,n.jsx)(a.td,{children:"Add Partition"}),(0,n.jsx)(a.td,{children:"\u2714"}),(0,n.jsx)(a.td,{children:"\u2718"}),(0,n.jsx)(a.td,{children:"\u2718"}),(0,n.jsx)(a.td,{children:"\u2718"}),(0,n.jsx)(a.td,{children:"\u2714"})]}),(0,n.jsxs)(a.tr,{children:[(0,n.jsx)(a.td,{children:"Get Partition by Name"}),(0,n.jsx)(a.td,{children:"\u2714"}),(0,n.jsx)(a.td,{children:"\u2718"}),(0,n.jsx)(a.td,{children:"\u2718"}),(0,n.jsx)(a.td,{children:"\u2718"}),(0,n.jsx)(a.td,{children:"\u2714"})]}),(0,n.jsxs)(a.tr,{children:[(0,n.jsx)(a.td,{children:"List Partition Names"}),(0,n.jsx)(a.td,{children:"\u2714"}),(0,n.jsx)(a.td,{children:"\u2718"}),(0,n.jsx)(a.td,{children:"\u2718"}),(0,n.jsx)(a.td,{children:"\u2718"}),(0,n.jsx)(a.td,{children:"\u2714"})]}),(0,n.jsxs)(a.tr,{children:[(0,n.jsx)(a.td,{children:"List Partitions"}),(0,n.jsx)(a.td,{children:"\u2714"}),(0,n.jsx)(a.td,{children:"\u2718"}),(0,n.jsx)(a.td,{children:"\u2718"}),(0,n.jsx)(a.td,{children:"\u2718"}),(0,n.jsx)(a.td,{children:"\u2714"})]}),(0,n.jsxs)(a.tr,{children:[(0,n.jsx)(a.td,{children:"Drop Partition"}),(0,n.jsx)(a.td,{children:"\u2714"}),(0,n.jsx)(a.td,{children:"\u2718"}),(0,n.jsx)(a.td,{children:"\u2718"}),(0,n.jsx)(a.td,{children:"\u2718"}),(0,n.jsx)(a.td,{children:"\u2714"})]})]})]}),"\n",(0,n.jsx)(a.admonition,{title:"WELCOME FEEDBACK",type:"tip",children:(0,n.jsxs)(a.p,{children:["If you need additional partition management support for a specific catalog, please feel free to ",(0,n.jsx)(a.a,{href:"https://github.com/apache/gravitino/issues/new/choose",children:"create an issue"})," on the ",(0,n.jsx)(a.a,{href:"https://github.com/apache/gravitino",children:"Gravitino repository"}),"."]})}),"\n",(0,n.jsx)(a.h2,{id:"partition-operations",children:"Partition operations"}),"\n",(0,n.jsx)(a.h3,{id:"add-partition",children:"Add partition"}),"\n",(0,n.jsxs)(a.p,{children:["You must match the partition types you want to add with the table's ",(0,n.jsx)(a.a,{href:"/docs/next/table-partitioning-bucketing-sort-order-indexes#table-partitioning",children:"partitioning"})," types; Gravitino currently supports adding the following partition types:"]}),"\n",(0,n.jsxs)(a.table,{children:[(0,n.jsx)(a.thead,{children:(0,n.jsxs)(a.tr,{children:[(0,n.jsx)(a.th,{children:"Partition Type"}),(0,n.jsx)(a.th,{children:"Description"})]})}),(0,n.jsxs)(a.tbody,{children:[(0,n.jsxs)(a.tr,{children:[(0,n.jsx)(a.td,{children:"identity"}),(0,n.jsxs)(a.td,{children:["An identity partition represents a result of identity ",(0,n.jsx)(a.a,{href:"/docs/next/table-partitioning-bucketing-sort-order-indexes#table-partitioning",children:"partitioning"}),"."]})]}),(0,n.jsxs)(a.tr,{children:[(0,n.jsx)(a.td,{children:"range"}),(0,n.jsxs)(a.td,{children:["A range partition represents a result of range ",(0,n.jsx)(a.a,{href:"/docs/next/table-partitioning-bucketing-sort-order-indexes#table-partitioning",children:"partitioning"}),"."]})]}),(0,n.jsxs)(a.tr,{children:[(0,n.jsx)(a.td,{children:"list"}),(0,n.jsxs)(a.td,{children:["A list partition represents a result of list ",(0,n.jsx)(a.a,{href:"/docs/next/table-partitioning-bucketing-sort-order-indexes#table-partitioning",children:"partitioning"}),"."]})]})]})]}),"\n",(0,n.jsx)(a.p,{children:"For JSON examples:"}),"\n",(0,n.jsxs)(l.A,{groupId:"partitions",children:[(0,n.jsxs)(s.default,{value:"identity",label:"identity",children:[(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-json",children:'{\n  "type": "identity",\n  "name": "dt=2008-08-08/country=us",\n  "fieldNames": [\n    [\n      "dt"\n    ],\n    [\n      "country"\n    ]\n  ],\n  "values": [\n    {\n      "type": "literal",\n      "dataType": "date",\n      "value": "2008-08-08"\n    },\n    {\n      "type": "literal",\n      "dataType": "string",\n      "value": "us"\n    }\n  ]\n}\n'})}),(0,n.jsxs)(a.admonition,{type:"note",children:[(0,n.jsxs)(a.p,{children:["The values of the field ",(0,n.jsx)(a.code,{children:"values"})," must be the same ordering as the values of ",(0,n.jsx)(a.code,{children:"fieldNames"}),"."]}),(0,n.jsx)(a.p,{children:"When adding an identity partition to a partitioned Hive table, the specified partition name is ignored. This is because Hive generates the partition name based on field names and values."})]})]}),(0,n.jsx)(s.default,{value:"range",label:"range",children:(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-json",children:'{\n  "type": "range",\n  "name": "p20200321",\n  "upper": {\n    "type": "literal",\n    "dataType": "date",\n    "value": "2020-03-21"\n  },\n  "lower": {\n    "type": "literal",\n    "dataType": "null",\n    "value": "null"\n  }\n}\n'})})}),(0,n.jsxs)(s.default,{value:"list",label:"list",children:[(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-json",children:'{\n  "type": "list",\n  "name": "p202204_California",\n  "lists": [\n    [\n      {\n        "type": "literal",\n        "dataType": "date",\n        "value": "2022-04-01"\n      },\n      {\n        "type": "literal",\n        "dataType": "string",\n        "value": "Los Angeles"\n      }\n    ],\n    [\n      {\n        "type": "literal",\n        "dataType": "date",\n        "value": "2022-04-01"\n      },\n      {\n        "type": "literal",\n        "dataType": "string",\n        "value": "San Francisco"\n      }\n    ]\n  ]\n}\n'})}),(0,n.jsx)(a.admonition,{type:"note",children:(0,n.jsxs)(a.p,{children:["Each list in the lists must have the same length. The values in each list must correspond to the field definitions in the list ",(0,n.jsx)(a.a,{href:"/docs/next/table-partitioning-bucketing-sort-order-indexes#table-partitioning",children:"partitioning"}),"."]})})]})]}),"\n",(0,n.jsx)(a.p,{children:"For Java examples:"}),"\n",(0,n.jsxs)(l.A,{groupId:"partitions",children:[(0,n.jsxs)(s.default,{value:"identity",label:"Identity",children:[(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-java",children:'Partition partition =\n        Partitions.identity(\n            "dt=2008-08-08/country=us",\n            new String[][] {{"dt"}, {"country"}},\n            new Literal[] {\n              Literals.dateLiteral(LocalDate.parse("2008-08-08")), Literals.stringLiteral("us")\n            },\n            Maps.newHashMap());\n'})}),(0,n.jsxs)(a.admonition,{type:"note",children:[(0,n.jsx)(a.p,{children:"The values are in the same order as the field names."}),(0,n.jsx)(a.p,{children:"When adding an identity partition to a partitioned Hive table, the specified partition name is ignored. This is because Hive generates the partition name based on field names and values."})]})]}),(0,n.jsx)(s.default,{value:"range",label:"Range",children:(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-java",children:'Partition partition =\n        Partitions.range(\n            "p20200321",\n            Literals.dateLiteral(LocalDate.parse("2020-03-21")),\n            Literals.NULL,\n            Maps.newHashMap());\n'})})}),(0,n.jsxs)(s.default,{value:"list",label:"List",children:[(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-java",children:'Partition partition =\n        Partitions.list(\n            "p202204_California",\n            new Literal[][] {\n              {\n                Literals.dateLiteral(LocalDate.parse("2022-04-01")),\n                Literals.stringLiteral("Los Angeles")\n              },\n              {\n                Literals.dateLiteral(LocalDate.parse("2022-04-01")),\n                Literals.stringLiteral("San Francisco")\n              }\n            },\n            Maps.newHashMap());\n'})}),(0,n.jsx)(a.admonition,{type:"note",children:(0,n.jsxs)(a.p,{children:["Each list in the lists must have the same length. The values in each list must correspond to the field definitions in the list ",(0,n.jsx)(a.a,{href:"/docs/next/table-partitioning-bucketing-sort-order-indexes#table-partitioning",children:"partitioning"}),"."]})})]})]}),"\n",(0,n.jsxs)(a.p,{children:["You can add a partition to a partitioned table by sending a ",(0,n.jsx)(a.code,{children:"POST"})," request to the ",(0,n.jsx)(a.code,{children:"/api/metalakes/{metalake_name}/catalogs/{catalog_name}/schemas/{schema_name}/tables/{partitioned_table_name}/partitions"})," endpoint or by using the Gravitino Java client.\nThe following is an example of adding an identity partition to a Hive partitioned table:"]}),"\n",(0,n.jsxs)(l.A,{groupId:"language",queryString:!0,children:[(0,n.jsx)(s.default,{value:"shell",label:"Shell",children:(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-shell",children:'curl -X POST -H "Accept: application/vnd.gravitino.v1+json" \\\n-H "Content-Type: application/json" -d \'{\n  "partitions": [\n    {\n      "type": "identity",\n      "fieldNames": [\n        [\n          "dt"\n        ],\n        [\n          "country"\n        ]\n      ],\n      "values": [\n        {\n          "type": "literal",\n          "dataType": "date",\n          "value": "2008-08-08"\n        },\n        {\n          "type": "literal",\n          "dataType": "string",\n          "value": "us"\n        }\n      ]\n    }\n  ]\n}\' http://localhost:8090/api/metalakes/metalake/catalogs/catalog/schemas/schema/tables/table/partitions\n'})})}),(0,n.jsx)(s.default,{value:"java",label:"Java",children:(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-java",children:'GravitinoClient gravitinoClient = GravitinoClient\n    .builder("http://127.0.0.1:8090")\n    .withMetalake("metalake")\n    .build();\n\n// Assume that you have a partitioned table named "metalake.catalog.schema.table".\nPartition addedPartition = \n    gravitinoClient\n        .loadCatalog("catalog")\n        .asTableCatalog()\n        .loadTable(NameIdentifier.of("schema", "table"))\n        .supportPartitions()\n        .addPartition(\n            Partitions.identity(\n              new String[][] {{"dt"}, {"country"}},\n              new Literal[] {\n              Literals.dateLiteral(LocalDate.parse("2008-08-08")), Literals.stringLiteral("us")},\n              Maps.newHashMap()));\n'})})})]}),"\n",(0,n.jsx)(a.h3,{id:"get-a-partition-by-name",children:"Get a partition by name"}),"\n",(0,n.jsxs)(a.p,{children:["You can get a partition by its name via sending a ",(0,n.jsx)(a.code,{children:"GET"})," request to the ",(0,n.jsx)(a.code,{children:"/api/metalakes/{metalake_name}/catalogs/{catalog_name}/schemas/{schema_name}/tables/{partitioned_table_name}/partitions/{partition_name}"})," endpoint or by using the Gravitino Java client.\nThe following is an example of getting a partition by its name:"]}),"\n",(0,n.jsxs)(l.A,{groupId:"language",queryString:!0,children:[(0,n.jsxs)(s.default,{value:"shell",label:"Shell",children:[(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-shell",children:'curl -X GET -H "Accept: application/vnd.gravitino.v1+json" \\\n-H "Content-Type: application/json" \\\nhttp://localhost:8090/api/metalakes/metalake/catalogs/catalog/schemas/schema/tables/table/partitions/p20200321\n'})}),(0,n.jsx)(a.admonition,{type:"tip",children:(0,n.jsxs)(a.p,{children:["If the partition name contains special characters, you should use ",(0,n.jsx)(a.a,{href:"https://en.wikipedia.org/wiki/Percent-encoding#Reserved_characters",children:"URL encoding"}),". For example, if the partition name is ",(0,n.jsx)(a.code,{children:"dt=2008-08-08/country=us"})," you should use ",(0,n.jsx)(a.code,{children:"dt%3D2008-08-08%2Fcountry%3Dus"})," in the URL."]})})]}),(0,n.jsx)(s.default,{value:"java",label:"Java",children:(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-java",children:'GravitinoClient gravitinoClient = GravitinoClient\n    .builder("http://127.0.0.1:8090")\n    .withMetalake("metalake")\n    .build();\n\n// Assume that you have a partitioned table named "metalake.catalog.schema.table".\nPartition Partition = \n    gravitinoClient\n        .loadCatalog("catalog")\n        .asTableCatalog()\n        .loadTable(NameIdentifier.of("schema", "table"))\n        .supportPartitions()\n        .getPartition("partition_name");\n'})})})]}),"\n",(0,n.jsx)(a.h3,{id:"list-partition-names-under-a-partitioned-table",children:"List partition names under a partitioned table"}),"\n",(0,n.jsxs)(a.p,{children:["You can list all partition names under a partitioned table by sending a ",(0,n.jsx)(a.code,{children:"GET"})," request to the ",(0,n.jsx)(a.code,{children:"/api/metalakes/{metalake_name}/catalogs/{catalog_name}/schemas/{schema_name}/tables/{partitioned_table_name}/partitions"})," endpoint or by using the Gravitino Java client.\nThe following is an example of listing all the partition names under a partitioned table:"]}),"\n",(0,n.jsxs)(l.A,{groupId:"language",queryString:!0,children:[(0,n.jsx)(s.default,{value:"shell",label:"Shell",children:(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-shell",children:'curl -X GET -H "Accept: application/vnd.gravitino.v1+json" \\\n-H "Content-Type: application/json" \\\nhttp://localhost:8090/api/metalakes/metalake/catalogs/catalog/schemas/schema/tables/table/partitions\n'})})}),(0,n.jsx)(s.default,{value:"java",label:"Java",children:(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-java",children:'GravitinoClient gravitinoClient = GravitinoClient\n    .builder("http://127.0.0.1:8090")\n    .withMetalake("metalake")\n    .build();\n\n// Assume that you have a partitioned table named "metalake.catalog.schema.table".\nString[] partitionNames = \n    gravitinoClient\n        .loadCatalog("catalog")\n        .asTableCatalog()\n        .loadTable(NameIdentifier.of("schema", "table"))\n        .supportPartitions()\n        .listPartitionNames();\n'})})})]}),"\n",(0,n.jsx)(a.h3,{id:"list-partitions-under-a-partitioned-table",children:"List partitions under a partitioned table"}),"\n",(0,n.jsxs)(a.p,{children:["If you want to get more detailed information about the partitions under a partitioned table, you can list all partitions under a partitioned table by sending a ",(0,n.jsx)(a.code,{children:"GET"})," request to the ",(0,n.jsx)(a.code,{children:"/api/metalakes/{metalake_name}/catalogs/{catalog_name}/schemas/{schema_name}/tables/{partitioned_table_name}/partitions"})," endpoint or by using the Gravitino Java client.\nThe following is an example of listing all the partitions under a partitioned table:"]}),"\n",(0,n.jsxs)(l.A,{groupId:"language",queryString:!0,children:[(0,n.jsx)(s.default,{value:"shell",label:"Shell",children:(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-shell",children:'curl -X GET -H "Accept: application/vnd.gravitino.v1+json" \\\n-H "Content-Type: application/json" \\\nhttp://localhost:8090/api/metalakes/metalake/catalogs/catalog/schemas/schema/tables/table/partitions?details=true\n'})})}),(0,n.jsx)(s.default,{value:"java",label:"Java",children:(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-java",children:'// Assume that you have a partitioned table named "metalake.catalog.schema.table".\nPartition[] partitions =\n        gravitinoClient\n            .loadCatalog("catalog")\n            .asTableCatalog()\n            .loadTable(NameIdentifier.of("schema", "table"))\n            .supportPartitions()\n            .listPartitions();\n'})})})]}),"\n",(0,n.jsx)(a.h3,{id:"drop-a-partition-by-name",children:"Drop a partition by name"}),"\n",(0,n.jsxs)(a.p,{children:["You can drop a partition by its name via sending a ",(0,n.jsx)(a.code,{children:"DELETE"})," request to the ",(0,n.jsx)(a.code,{children:"/api/metalakes/{metalake_name}/catalogs/{catalog_name}/schemas/{schema_name}/tables/{partitioned_table_name}/partitions/{partition_name}"})," endpoint or by using the Gravitino Java client.\nThe following is an example of dropping a partition by its name:"]}),"\n",(0,n.jsxs)(l.A,{groupId:"language",queryString:!0,children:[(0,n.jsxs)(s.default,{value:"shell",label:"Shell",children:[(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-shell",children:'curl -X DELETE -H "Accept: application/vnd.gravitino.v1+json" \\\n-H "Content-Type: application/json" \\\nhttp://localhost:8090/api/metalakes/metalake/catalogs/catalog/schemas/schema/tables/table/partitions/p20200321\n'})}),(0,n.jsx)(a.admonition,{type:"tip",children:(0,n.jsxs)(a.p,{children:["If the partition name contains special characters, you should use ",(0,n.jsx)(a.a,{href:"https://en.wikipedia.org/wiki/Percent-encoding#Reserved_characters",children:"URL encoding"}),". For example, if the partition name is ",(0,n.jsx)(a.code,{children:"dt=2008-08-08/country=us"})," you should use ",(0,n.jsx)(a.code,{children:"dt%3D2008-08-08%2Fcountry%3Dus"})," in the URL."]})})]}),(0,n.jsx)(s.default,{value:"java",label:"Java",children:(0,n.jsx)(a.pre,{children:(0,n.jsx)(a.code,{className:"language-java",children:'GravitinoClient gravitinoClient = GravitinoClient\n    .builder("http://127.0.0.1:8090")\n    .withMetalake("metalake")\n    .build();\n\n// Assume that you have a partitioned table named "metalake.catalog.schema.table".\nPartition Partition = \n    gravitinoClient\n        .loadCatalog("catalog")\n        .asTableCatalog()\n        .loadTable(NameIdentifier.of("schema", "table"))\n        .supportPartitions()\n        .dropPartition("partition_name");\n'})})})]})]})}function u(e={}){const{wrapper:a}={...(0,i.R)(),...e.components};return a?(0,n.jsx)(a,{...e,children:(0,n.jsx)(p,{...e})}):p(e)}},83593:(e,a,t)=>{t.d(a,{A:()=>u});var n=t(79474),i=t(13526),l=t(23544),s=t(45263),r=t(9805);const o={tabList:"tabList_m5Qj",tabItem:"tabItem_R4qO"};var d=t(13274);function c(e){let{className:a,block:t,selectedValue:n,selectValue:s,tabValues:r}=e;const c=[],{blockElementScrollPositionUntilNextRender:h}=(0,l.a_)(),p=e=>{const a=e.currentTarget,t=c.indexOf(a),i=r[t].value;i!==n&&(h(a),s(i))},u=e=>{let a=null;switch(e.key){case"Enter":p(e);break;case"ArrowRight":{const t=c.indexOf(e.currentTarget)+1;a=c[t]??c[0];break}case"ArrowLeft":{const t=c.indexOf(e.currentTarget)-1;a=c[t]??c[c.length-1];break}}a?.focus()};return(0,d.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.A)("tabs",{"tabs--block":t},a),children:r.map((e=>{let{value:a,label:t,attributes:l}=e;return(0,d.jsx)("li",{role:"tab",tabIndex:n===a?0:-1,"aria-selected":n===a,ref:e=>c.push(e),onKeyDown:u,onClick:p,...l,className:(0,i.A)("tabs__item",o.tabItem,l?.className,{"tabs__item--active":n===a}),children:t??a},a)}))})}function h(e){let{lazy:a,children:t,selectedValue:i}=e;const l=(Array.isArray(t)?t:[t]).filter(Boolean);if(a){const e=l.find((e=>e.props.value===i));return e?(0,n.cloneElement)(e,{className:"margin-top--md"}):null}return(0,d.jsx)("div",{className:"margin-top--md",children:l.map(((e,a)=>(0,n.cloneElement)(e,{key:a,hidden:e.props.value!==i})))})}function p(e){const a=(0,s.u)(e);return(0,d.jsxs)("div",{className:(0,i.A)("tabs-container",o.tabList),children:[(0,d.jsx)(c,{...a,...e}),(0,d.jsx)(h,{...a,...e})]})}function u(e){const a=(0,r.default)();return(0,d.jsx)(p,{...e,children:(0,s.v)(e.children)},String(a))}}}]);