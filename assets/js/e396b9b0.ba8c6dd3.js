"use strict";(self.webpackChunkapache_website_template=self.webpackChunkapache_website_template||[]).push([[34915],{4597:(e,a,n)=>{n.r(a),n.d(a,{assets:()=>c,contentTitle:()=>d,default:()=>p,frontMatter:()=>r,metadata:()=>o,toc:()=>h});var l=n(13274),t=n(38112),i=n(52276),s=n(73394);const r={title:"Manage metalake using Apache Gravitino",slug:"/manage-metalake-using-gravitino",date:new Date("2023-12-10T00:00:00.000Z"),keyword:"Gravitino metalake manage",license:"This software is licensed under the Apache License version 2."},d=void 0,o={id:"manage-metalake-using-gravitino",title:"Manage metalake using Apache Gravitino",description:"This page introduces how to create, modify, view, and delete metalakes by using Gravitino.",source:"@site/docs/manage-metalake-using-gravitino.md",sourceDirName:".",slug:"/manage-metalake-using-gravitino",permalink:"/docs/next/manage-metalake-using-gravitino",draft:!1,unlisted:!1,editUrl:"https://github.com/apache/gravitino-site/tree/main/docs/manage-metalake-using-gravitino.md",tags:[],version:"current",lastUpdatedBy:"Justin Mclean",lastUpdatedAt:1736293354e3,frontMatter:{title:"Manage metalake using Apache Gravitino",slug:"/manage-metalake-using-gravitino",date:"2023-12-10T00:00:00.000Z",keyword:"Gravitino metalake manage",license:"This software is licensed under the Apache License version 2."},sidebar:"docs",previous:{title:"Use Gravitino playground",permalink:"/docs/next/how-to-use-the-playground"},next:{title:"Manage relational metadata",permalink:"/docs/next/manage-relational-metadata-using-gravitino"}},c={},h=[{value:"Prerequsites",id:"prerequsites",level:2},{value:"Create a metalake",id:"create-a-metalake",level:2},{value:"Load a metalake",id:"load-a-metalake",level:2},{value:"Alter a metalake",id:"alter-a-metalake",level:2},{value:"Enable a metalake",id:"enable-a-metalake",level:2},{value:"Disable a metalake",id:"disable-a-metalake",level:2},{value:"Drop a metalake",id:"drop-a-metalake",level:2},{value:"List all metalakes",id:"list-all-metalakes",level:2}];function m(e){const a={a:"a",admonition:"admonition",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,t.R)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsxs)(a.p,{children:["This page introduces how to create, modify, view, and delete ",(0,l.jsx)(a.a,{href:"/docs/next/glossary#metalake",children:"metalakes"})," by using Gravitino."]}),"\n",(0,l.jsx)(a.h2,{id:"prerequsites",children:"Prerequsites"}),"\n",(0,l.jsxs)(a.p,{children:["You have installed and launched Gravitino. For more details, see ",(0,l.jsx)(a.a,{href:"/docs/next/getting-started",children:"Get started"}),"."]}),"\n",(0,l.jsxs)(a.p,{children:["Let's say, the access is ",(0,l.jsx)(a.a,{href:"http://localhost:8090",children:"http://localhost:8090"}),"."]}),"\n",(0,l.jsx)(a.h2,{id:"create-a-metalake",children:"Create a metalake"}),"\n",(0,l.jsxs)(a.p,{children:["To create a metalake, you can send a ",(0,l.jsx)(a.code,{children:"POST"})," request to the ",(0,l.jsx)(a.code,{children:"/api/metalakes"})," endpoint or use the Gravitino Admin client."]}),"\n",(0,l.jsx)(a.p,{children:"The following is an example of creating a metalake:"}),"\n",(0,l.jsxs)(i.A,{groupId:"language",queryString:!0,children:[(0,l.jsx)(s.default,{value:"shell",label:"Shell",children:(0,l.jsx)(a.pre,{children:(0,l.jsx)(a.code,{className:"language-shell",children:'curl -X POST -H "Accept: application/vnd.gravitino.v1+json" \\\n-H "Content-Type: application/json" -d \'{"name":"metalake","comment":"This is a new metalake","properties":{}}\' \\\nhttp://localhost:8090/api/metalakes\n'})})}),(0,l.jsx)(s.default,{value:"java",label:"Java",children:(0,l.jsx)(a.pre,{children:(0,l.jsx)(a.code,{className:"language-java",children:'GravitinoAdminClient gravitinoAdminClient = GravitinoAdminClient\n    .builder("http://localhost:8090")\n    .build();\n\nGravitinoMetalake newMetalake = gravitinoAdminClient.createMetalake(\n    NameIdentifier.of("metalake"),\n    "This is a new metalake",\n    new HashMap<>());\n  // ...\n'})})}),(0,l.jsx)(s.default,{value:"python",label:"Python",children:(0,l.jsx)(a.pre,{children:(0,l.jsx)(a.code,{className:"language-python",children:'gravitino_admin_client: GravitinoAdminClient = GravitinoAdminClient(uri="http://localhost:8090")\ngravitino_admin_client.create_metalake(name="metalake", \n                                       comment="This is a new metalake", \n                                       properties={})\n'})})})]}),"\n",(0,l.jsx)(a.h2,{id:"load-a-metalake",children:"Load a metalake"}),"\n",(0,l.jsxs)(a.p,{children:["To load a metalake, you can send a ",(0,l.jsx)(a.code,{children:"GET"})," request to the ",(0,l.jsx)(a.code,{children:"/api/metalakes/{metalake_name}"})," endpoint or use the Gravitino Admin client."]}),"\n",(0,l.jsx)(a.p,{children:"The following is an example of loading a metalake:"}),"\n",(0,l.jsxs)(i.A,{groupId:"language",queryString:!0,children:[(0,l.jsx)(s.default,{value:"shell",label:"Shell",children:(0,l.jsx)(a.pre,{children:(0,l.jsx)(a.code,{className:"language-shell",children:'curl -X GET -H "Accept: application/vnd.gravitino.v1+json" \\\n-H "Content-Type: application/json"  http://localhost:8090/api/metalakes/metalake\n'})})}),(0,l.jsx)(s.default,{value:"java",label:"Java",children:(0,l.jsx)(a.pre,{children:(0,l.jsx)(a.code,{className:"language-java",children:'// ...\nGravitinoMetalake loaded = gravitinoAdminClient.loadMetalake(\n    NameIdentifier.of("metalake"));\n// ...\n'})})}),(0,l.jsx)(s.default,{value:"python",label:"Python",children:(0,l.jsx)(a.pre,{children:(0,l.jsx)(a.code,{className:"language-python",children:'gravitino_admin_client.load_metalake("metalake")\n'})})})]}),"\n",(0,l.jsx)(a.h2,{id:"alter-a-metalake",children:"Alter a metalake"}),"\n",(0,l.jsxs)(a.p,{children:["To alter a metalake, you can send a ",(0,l.jsx)(a.code,{children:"PUT"})," request to the ",(0,l.jsx)(a.code,{children:"/api/metalakes/{metalake_name}"})," endpoint or use the Gravitino Admin client."]}),"\n",(0,l.jsx)(a.p,{children:"The following is an example of renaming a metalake:"}),"\n",(0,l.jsxs)(i.A,{groupId:"language",queryString:!0,children:[(0,l.jsx)(s.default,{value:"shell",label:"Shell",children:(0,l.jsx)(a.pre,{children:(0,l.jsx)(a.code,{className:"language-shell",children:'curl -X PUT -H "Accept: application/vnd.gravitino.v1+json" \\\n-H "Content-Type: application/json" -d \'{\n  "updates": [\n    {\n      "@type": "rename",\n      "newName": "metalake_renamed"\n    }\n  ]\n}\' http://localhost:8090/api/metalakes/metalake\n'})})}),(0,l.jsx)(s.default,{value:"java",label:"Java",children:(0,l.jsx)(a.pre,{children:(0,l.jsx)(a.code,{className:"language-java",children:'// ...\nGravitinoMetalake renamed = gravitinoAdminClient.alterMetalake(\n    NameIdentifier.of("metalake"),\n    MetalakeChange.rename("metalake_renamed")\n);\n// ...\n'})})}),(0,l.jsx)(s.default,{value:"python",label:"Python",children:(0,l.jsx)(a.pre,{children:(0,l.jsx)(a.code,{className:"language-python",children:'changes = (\n    MetalakeChange.rename("metalake_renamed"),\n)\n\nmetalake = gravitino_admin_client.alter_metalake("metalake", *changes)\n'})})})]}),"\n",(0,l.jsx)(a.p,{children:"The following table outlines the supported modifications that you can make to a metalake:"}),"\n",(0,l.jsxs)(a.table,{children:[(0,l.jsx)(a.thead,{children:(0,l.jsxs)(a.tr,{children:[(0,l.jsx)(a.th,{children:"Supported modification"}),(0,l.jsx)(a.th,{children:"JSON"}),(0,l.jsx)(a.th,{children:"Java"}),(0,l.jsx)(a.th,{children:"Python"})]})}),(0,l.jsxs)(a.tbody,{children:[(0,l.jsxs)(a.tr,{children:[(0,l.jsx)(a.td,{children:"Rename metalake"}),(0,l.jsx)(a.td,{children:(0,l.jsx)(a.code,{children:'{"@type":"rename","newName":"metalake_renamed"}'})}),(0,l.jsx)(a.td,{children:(0,l.jsx)(a.code,{children:'MetalakeChange.rename("metalake_renamed")'})}),(0,l.jsx)(a.td,{children:(0,l.jsx)(a.code,{children:'MetalakeChange.rename("metalake_renamed")'})})]}),(0,l.jsxs)(a.tr,{children:[(0,l.jsx)(a.td,{children:"Update comment"}),(0,l.jsx)(a.td,{children:(0,l.jsx)(a.code,{children:'{"@type":"updateComment","newComment":"new_comment"}'})}),(0,l.jsx)(a.td,{children:(0,l.jsx)(a.code,{children:'MetalakeChange.updateComment("new_comment")'})}),(0,l.jsx)(a.td,{children:(0,l.jsx)(a.code,{children:'MetalakeChange.update_comment("new_comment")'})})]}),(0,l.jsxs)(a.tr,{children:[(0,l.jsx)(a.td,{children:"Set property"}),(0,l.jsx)(a.td,{children:(0,l.jsx)(a.code,{children:'{"@type":"setProperty","property":"key1","value":"value1"}'})}),(0,l.jsx)(a.td,{children:(0,l.jsx)(a.code,{children:'MetalakeChange.setProperty("key1", "value1")'})}),(0,l.jsx)(a.td,{children:(0,l.jsx)(a.code,{children:'MetalakeChange.set_property("key1", "value1")'})})]}),(0,l.jsxs)(a.tr,{children:[(0,l.jsx)(a.td,{children:"Remove property"}),(0,l.jsx)(a.td,{children:(0,l.jsx)(a.code,{children:'{"@type":"removeProperty","property":"key1"}'})}),(0,l.jsx)(a.td,{children:(0,l.jsx)(a.code,{children:'MetalakeChange.removeProperty("key1")'})}),(0,l.jsx)(a.td,{children:(0,l.jsx)(a.code,{children:'MetalakeChange.remove_property("key1")'})})]})]})]}),"\n",(0,l.jsx)(a.h2,{id:"enable-a-metalake",children:"Enable a metalake"}),"\n",(0,l.jsxs)(a.p,{children:["Metalake has a reserved property - ",(0,l.jsx)(a.code,{children:"in-use"}),", which indicates whether the metalake is available for use. By default, the ",(0,l.jsx)(a.code,{children:"in-use"})," property is set to ",(0,l.jsx)(a.code,{children:"true"}),".\nTo enable a disabled metalake, you can send a ",(0,l.jsx)(a.code,{children:"PATCH"})," request to the ",(0,l.jsx)(a.code,{children:"/api/metalakes/{metalake_name}"})," endpoint or use the Gravitino Admin client."]}),"\n",(0,l.jsx)(a.p,{children:"The following is an example of enabling a metalake:"}),"\n",(0,l.jsxs)(i.A,{groupId:"language",queryString:!0,children:[(0,l.jsx)(s.default,{value:"shell",label:"Shell",children:(0,l.jsx)(a.pre,{children:(0,l.jsx)(a.code,{className:"language-shell",children:'curl -X PATCH -H "Accept: application/vnd.gravitino.v1+json" \\\n-H "Content-Type: application/json" -d \'{"inUse": true}\' \\\nhttp://localhost:8090/api/metalakes/metalake\n'})})}),(0,l.jsx)(s.default,{value:"java",label:"Java",children:(0,l.jsx)(a.pre,{children:(0,l.jsx)(a.code,{className:"language-java",children:'GravitinoAdminClient gravitinoAdminClient = GravitinoAdminClient\n    .builder("http://localhost:8090")\n    .build();\n\ngravitinoAdminClient.enableMetalake("metalake");\n  // ...\n'})})}),(0,l.jsx)(s.default,{value:"python",label:"Python",children:(0,l.jsx)(a.pre,{children:(0,l.jsx)(a.code,{className:"language-python",children:'gravitino_admin_client: GravitinoAdminClient = GravitinoAdminClient(uri="http://localhost:8090")\ngravitino_admin_client.enable_metalake("metalake")\n'})})})]}),"\n",(0,l.jsx)(a.admonition,{type:"info",children:(0,l.jsx)(a.p,{children:"This operation does nothing if the metalake is already enabled."})}),"\n",(0,l.jsx)(a.h2,{id:"disable-a-metalake",children:"Disable a metalake"}),"\n",(0,l.jsx)(a.p,{children:"Once a metalake is disabled:"}),"\n",(0,l.jsxs)(a.ul,{children:["\n",(0,l.jsxs)(a.li,{children:["Users can only ",(0,l.jsx)(a.a,{href:"#list-all-metalakes",children:"list"}),", ",(0,l.jsx)(a.a,{href:"#load-a-metalake",children:"load"}),", ",(0,l.jsx)(a.a,{href:"#drop-a-metalake",children:"drop"}),", or ",(0,l.jsx)(a.a,{href:"#enable-a-metalake",children:"enable"})," it."]}),"\n",(0,l.jsx)(a.li,{children:"Any other operation on the metalake or its sub-entities will result in an error."}),"\n"]}),"\n",(0,l.jsxs)(a.p,{children:["To disable a metalake, you can send a ",(0,l.jsx)(a.code,{children:"PATCH"})," request to the ",(0,l.jsx)(a.code,{children:"/api/metalakes/{metalake_name}"})," endpoint or use the Gravitino Admin client."]}),"\n",(0,l.jsx)(a.p,{children:"The following is an example of disabling a metalake:"}),"\n",(0,l.jsxs)(i.A,{groupId:"language",queryString:!0,children:[(0,l.jsx)(s.default,{value:"shell",label:"Shell",children:(0,l.jsx)(a.pre,{children:(0,l.jsx)(a.code,{className:"language-shell",children:'curl -X PATCH -H "Accept: application/vnd.gravitino.v1+json" \\\n-H "Content-Type: application/json" -d \'{"inUse": false}\' \\\nhttp://localhost:8090/api/metalakes/metalake\n'})})}),(0,l.jsx)(s.default,{value:"java",label:"Java",children:(0,l.jsx)(a.pre,{children:(0,l.jsx)(a.code,{className:"language-java",children:'GravitinoAdminClient gravitinoAdminClient = GravitinoAdminClient\n    .builder("http://localhost:8090")\n    .build();\n\ngravitinoAdminClient.disableMetalake("metalake");\n  // ...\n'})})}),(0,l.jsx)(s.default,{value:"python",label:"Python",children:(0,l.jsx)(a.pre,{children:(0,l.jsx)(a.code,{className:"language-python",children:'gravitino_admin_client: GravitinoAdminClient = GravitinoAdminClient(uri="http://localhost:8090")\ngravitino_admin_client.disable_metalake("metalake")\n'})})})]}),"\n",(0,l.jsx)(a.admonition,{type:"info",children:(0,l.jsx)(a.p,{children:"This operation does nothing if the metalake is already disabled."})}),"\n",(0,l.jsx)(a.h2,{id:"drop-a-metalake",children:"Drop a metalake"}),"\n",(0,l.jsx)(a.p,{children:'Deleting a metalake by "force" is not a default behavior, so please make sure:'}),"\n",(0,l.jsxs)(a.ul,{children:["\n",(0,l.jsx)(a.li,{children:"There are no catalogs under the metalake. Otherwise, you will get an error."}),"\n",(0,l.jsxs)(a.li,{children:["The metalake is ",(0,l.jsx)(a.a,{href:"#disable-a-metalake",children:"disabled"}),". Otherwise, you will get an error."]}),"\n"]}),"\n",(0,l.jsx)(a.p,{children:'Deleting a metalake by "force" will:'}),"\n",(0,l.jsxs)(a.ul,{children:["\n",(0,l.jsx)(a.li,{children:"Delete all sub-entities (tags, catalogs, schemas, etc.) under the metalake."}),"\n",(0,l.jsx)(a.li,{children:"Delete the metalake itself even if it is enabled."}),"\n",(0,l.jsx)(a.li,{children:"Not delete the external resources (such as database, table, etc.) associated with sub-entities unless they are managed (such as managed fileset)."}),"\n"]}),"\n",(0,l.jsxs)(a.p,{children:["To drop a metalake, you can send a ",(0,l.jsx)(a.code,{children:"DELETE"})," request to the ",(0,l.jsx)(a.code,{children:"/api/metalakes/{metalake_name}"})," endpoint or use the Gravitino Admin client."]}),"\n",(0,l.jsx)(a.p,{children:"The following is an example of dropping a metalake:"}),"\n",(0,l.jsxs)(i.A,{groupId:"language",queryString:!0,children:[(0,l.jsx)(s.default,{value:"shell",label:"Shell",children:(0,l.jsx)(a.pre,{children:(0,l.jsx)(a.code,{className:"language-shell",children:'curl -X DELETE -H "Accept: application/vnd.gravitino.v1+json" \\\n-H "Content-Type: application/json" http://localhost:8090/api/metalakes/metalake?force=false\n'})})}),(0,l.jsx)(s.default,{value:"java",label:"Java",children:(0,l.jsx)(a.pre,{children:(0,l.jsx)(a.code,{className:"language-java",children:'// ...\n// force can be true or false\nboolean success = gravitinoAdminClient.dropMetalake("metalake", false);\n// ...\n'})})}),(0,l.jsx)(s.default,{value:"python",label:"Python",children:(0,l.jsx)(a.pre,{children:(0,l.jsx)(a.code,{className:"language-python",children:'gravitino_admin_client.drop_metalake("metalake", force=True)\n'})})})]}),"\n",(0,l.jsx)(a.h2,{id:"list-all-metalakes",children:"List all metalakes"}),"\n",(0,l.jsxs)(a.p,{children:["To view all your metalakes, you can send a ",(0,l.jsx)(a.code,{children:"GET"})," request to the ",(0,l.jsx)(a.code,{children:"/api/metalakes"})," endpoint or use the Gravitino Admin client."]}),"\n",(0,l.jsx)(a.p,{children:"The following is an example of listing all metalakes:"}),"\n",(0,l.jsxs)(i.A,{groupId:"language",queryString:!0,children:[(0,l.jsx)(s.default,{value:"shell",label:"Shell",children:(0,l.jsx)(a.pre,{children:(0,l.jsx)(a.code,{className:"language-shell",children:'curl -X GET -H "Accept: application/vnd.gravitino.v1+json" \\\n-H "Content-Type: application/json"  http://localhost:8090/api/metalakes\n'})})}),(0,l.jsx)(s.default,{value:"java",label:"Java",children:(0,l.jsx)(a.pre,{children:(0,l.jsx)(a.code,{className:"language-java",children:"// ...\nGravitinoMetalake[] allMetalakes = gravitinoAdminClient.listMetalakes();\n// ...\n"})})}),(0,l.jsx)(s.default,{value:"python",label:"Python",children:(0,l.jsx)(a.pre,{children:(0,l.jsx)(a.code,{className:"language-python",children:"metalake_list: List[GravitinoMetalake] = gravitino_admin_client.list_metalakes()\n"})})})]})]})}function p(e={}){const{wrapper:a}={...(0,t.R)(),...e.components};return a?(0,l.jsx)(a,{...e,children:(0,l.jsx)(m,{...e})}):m(e)}},52276:(e,a,n)=>{n.d(a,{A:()=>p});var l=n(79474),t=n(13526),i=n(67697),s=n(24382),r=n(22972);const d={tabList:"tabList_Vy7e",tabItem:"tabItem_kHuZ"};var o=n(13274);function c(e){let{className:a,block:n,selectedValue:l,selectValue:s,tabValues:r}=e;const c=[],{blockElementScrollPositionUntilNextRender:h}=(0,i.a_)(),m=e=>{const a=e.currentTarget,n=c.indexOf(a),t=r[n].value;t!==l&&(h(a),s(t))},p=e=>{let a=null;switch(e.key){case"Enter":m(e);break;case"ArrowRight":{const n=c.indexOf(e.currentTarget)+1;a=c[n]??c[0];break}case"ArrowLeft":{const n=c.indexOf(e.currentTarget)-1;a=c[n]??c[c.length-1];break}}a?.focus()};return(0,o.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,t.A)("tabs",{"tabs--block":n},a),children:r.map((e=>{let{value:a,label:n,attributes:i}=e;return(0,o.jsx)("li",{role:"tab",tabIndex:l===a?0:-1,"aria-selected":l===a,ref:e=>c.push(e),onKeyDown:p,onClick:m,...i,className:(0,t.A)("tabs__item",d.tabItem,i?.className,{"tabs__item--active":l===a}),children:n??a},a)}))})}function h(e){let{lazy:a,children:n,selectedValue:t}=e;const i=(Array.isArray(n)?n:[n]).filter(Boolean);if(a){const e=i.find((e=>e.props.value===t));return e?(0,l.cloneElement)(e,{className:"margin-top--md"}):null}return(0,o.jsx)("div",{className:"margin-top--md",children:i.map(((e,a)=>(0,l.cloneElement)(e,{key:a,hidden:e.props.value!==t})))})}function m(e){const a=(0,s.u)(e);return(0,o.jsxs)("div",{className:(0,t.A)("tabs-container",d.tabList),children:[(0,o.jsx)(c,{...a,...e}),(0,o.jsx)(h,{...a,...e})]})}function p(e){const a=(0,r.default)();return(0,o.jsx)(m,{...e,children:(0,s.v)(e.children)},String(a))}}}]);