"use strict";(self.webpackChunkapache_website_template=self.webpackChunkapache_website_template||[]).push([[35223],{86075:(a,e,t)=>{t.r(e),t.d(e,{assets:()=>d,contentTitle:()=>o,default:()=>j,frontMatter:()=>c,metadata:()=>r,toc:()=>g});var n=t(13274),s=t(8438),l=t(83593),i=t(5237);const c={title:"Manage tags in Gravitino",slug:"/manage-tags-in-gravitino",date:new Date("2024-07-24T00:00:00.000Z"),keyword:"tag management, tag, tags, Gravitino",license:"This software is licensed under the Apache License version 2."},o=void 0,r={id:"manage-tags-in-gravitino",title:"Manage tags in Gravitino",description:"Introduction",source:"@site/docs/manage-tags-in-gravitino.md",sourceDirName:".",slug:"/manage-tags-in-gravitino",permalink:"/docs/next/manage-tags-in-gravitino",draft:!1,unlisted:!1,editUrl:"https://github.com/apache/gravitino-site/tree/main/docs/manage-tags-in-gravitino.md",tags:[],version:"current",lastUpdatedBy:"Justin Mclean",lastUpdatedAt:1731621995e3,frontMatter:{title:"Manage tags in Gravitino",slug:"/manage-tags-in-gravitino",date:"2024-07-24T00:00:00.000Z",keyword:"tag management, tag, tags, Gravitino",license:"This software is licensed under the Apache License version 2."},sidebar:"docs",previous:{title:"Manage messaging metadata",permalink:"/docs/next/manage-massaging-metadata-using-gravitino"},next:{title:"Use Gravitino Python Client",permalink:"/docs/next/how-to-use-gravitino-python-client"}},d={},g=[{value:"Introduction",id:"introduction",level:2},{value:"Tag operations",id:"tag-operations",level:2},{value:"Create new tags",id:"create-new-tags",level:3},{value:"List created tags",id:"list-created-tags",level:3},{value:"Get a tag by name",id:"get-a-tag-by-name",level:3},{value:"Update a tag",id:"update-a-tag",level:3},{value:"Delete a tag",id:"delete-a-tag",level:3},{value:"Tag associations",id:"tag-associations",level:2},{value:"Associate and disassociate tags with a metadata object",id:"associate-and-disassociate-tags-with-a-metadata-object",level:3},{value:"List associated tags for a metadata object",id:"list-associated-tags-for-a-metadata-object",level:3},{value:"Get an associated tag by name for a metadata object",id:"get-an-associated-tag-by-name-for-a-metadata-object",level:3},{value:"List metadata objects associated with a tag",id:"list-metadata-objects-associated-with-a-tag",level:3}];function h(a){const e={admonition:"admonition",code:"code",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.R)(),...a.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(e.h2,{id:"introduction",children:"Introduction"}),"\n",(0,n.jsx)(e.p,{children:"Starting from 0.6.0, Gravitino introduces a new tag system that allows you to manage tags for\nmetadata objects. Tags are a way to categorize and organize metadata objects in Gravitino."}),"\n",(0,n.jsx)(e.p,{children:"This document briefly introduces how to use tags in Gravitino by both Gravitino Java client and\nREST APIs. If you want to know more about the tag system in Gravitino, please refer to the\nJavadoc and REST API documentation."}),"\n",(0,n.jsx)(e.p,{children:"Note that current tag system is a basic implementation, some advanced features will be added in\nthe future versions."}),"\n",(0,n.jsx)(e.admonition,{type:"info",children:(0,n.jsxs)(e.ol,{children:["\n",(0,n.jsxs)(e.li,{children:["Metadata objects are objects that are managed in Gravitino, such as ",(0,n.jsx)(e.code,{children:"CATALOG"}),", ",(0,n.jsx)(e.code,{children:"SCHEMA"}),", ",(0,n.jsx)(e.code,{children:"TABLE"}),",\n",(0,n.jsx)(e.code,{children:"COLUMN"}),", ",(0,n.jsx)(e.code,{children:"FILESET"}),", ",(0,n.jsx)(e.code,{children:"TOPIC"}),", ",(0,n.jsx)(e.code,{children:"COLUMN"}),", etc. A metadata object is combined by a ",(0,n.jsx)(e.code,{children:"type"})," and a\ncomma-separated ",(0,n.jsx)(e.code,{children:"name"}),". For example, a ",(0,n.jsx)(e.code,{children:"CATAGLOG"}),' object has a name "catalog1" with type\n"CATALOG", a ',(0,n.jsx)(e.code,{children:"SCHEMA"}),' object has a name "catalog1.schema1" with type "SCHEMA", a ',(0,n.jsx)(e.code,{children:"TABLE"}),'\nobject has a name "catalog1.schema1.table1" with type "TABLE", a ',(0,n.jsx)(e.code,{children:"COLUMN"}),' object has a name\n"catalog1.schema1.table1.column1" with type "COLUMN".']}),"\n",(0,n.jsxs)(e.li,{children:["Currently, ",(0,n.jsx)(e.code,{children:"CATALOG"}),", ",(0,n.jsx)(e.code,{children:"SCHEMA"}),", ",(0,n.jsx)(e.code,{children:"TABLE"}),", ",(0,n.jsx)(e.code,{children:"FILESET"}),", ",(0,n.jsx)(e.code,{children:"TOPIC"}),", and ",(0,n.jsx)(e.code,{children:"COLUMN"})," objects can be tagged."]}),"\n",(0,n.jsxs)(e.li,{children:["Tags in Gravitino is inheritable, so listing tags of a metadata object will also list the\ntags of its parent metadata objects. For example, listing tags of a ",(0,n.jsx)(e.code,{children:"Table"})," will also list\nthe tags of its parent ",(0,n.jsx)(e.code,{children:"Schema"})," and ",(0,n.jsx)(e.code,{children:"Catalog"}),"."]}),"\n",(0,n.jsxs)(e.li,{children:["Same tag can be associated to both parent and child metadata objects. When you list the\nassociated tags of a child metadata object, this tag will be included twice in the result\nlist with different ",(0,n.jsx)(e.code,{children:"inherited"})," values."]}),"\n"]})}),"\n",(0,n.jsx)(e.h2,{id:"tag-operations",children:"Tag operations"}),"\n",(0,n.jsx)(e.h3,{id:"create-new-tags",children:"Create new tags"}),"\n",(0,n.jsx)(e.p,{children:"The first step to manage tags is to create new tags. You can create a new tag by providing a tag\nname, optional comment and properties."}),"\n",(0,n.jsxs)(l.A,{groupId:"language",queryString:!0,children:[(0,n.jsx)(i.default,{value:"shell",label:"Shell",children:(0,n.jsx)(e.pre,{children:(0,n.jsx)(e.code,{className:"language-shell",children:'curl -X POST -H "Accept: application/vnd.gravitino.v1+json" \\\n-H "Content-Type: application/json" -d \'{\n  "name": "tag1",\n  "comment": "This is a tag",\n  "properties": {\n    "key1": "value1",\n    "key2": "value2"\n  }\n}\' http://localhost:8090/api/metalakes/test/tags\n'})})}),(0,n.jsx)(i.default,{value:"java",label:"Java",children:(0,n.jsx)(e.pre,{children:(0,n.jsx)(e.code,{className:"language-java",children:'GravitinoClient client = ...\nTag tag =\n    client.createTag("tag1", "This is a tag", ImmutableMap.of("key1", "value1", "key2", "value2"));\n'})})})]}),"\n",(0,n.jsx)(e.h3,{id:"list-created-tags",children:"List created tags"}),"\n",(0,n.jsx)(e.p,{children:"You can list all the created tag names as well as tag objects in a metalake in Gravitino."}),"\n",(0,n.jsxs)(l.A,{groupId:"language",queryString:!0,children:[(0,n.jsx)(i.default,{value:"shell",label:"Shell",children:(0,n.jsx)(e.pre,{children:(0,n.jsx)(e.code,{className:"language-shell",children:'curl -X GET -H "Accept: application/vnd.gravitino.v1+json" \\\nhttp://localhost:8090/api/metalakes/test/tags\n\ncurl -X GET -H "Accept: application/vnd.gravitino.v1+json" \\\nhttp://localhost:8090/api/metalakes/test/tags?details=true\n'})})}),(0,n.jsx)(i.default,{value:"java",label:"Java",children:(0,n.jsx)(e.pre,{children:(0,n.jsx)(e.code,{className:"language-java",children:"GravitinoClient client = ...\nString[] tagNames = client.listTags();\n\nTag[] tags = client.listTagsInfo();\n"})})})]}),"\n",(0,n.jsx)(e.h3,{id:"get-a-tag-by-name",children:"Get a tag by name"}),"\n",(0,n.jsx)(e.p,{children:"You can get a tag by its name."}),"\n",(0,n.jsxs)(l.A,{groupId:"language",queryString:!0,children:[(0,n.jsx)(i.default,{value:"shell",label:"Shell",children:(0,n.jsx)(e.pre,{children:(0,n.jsx)(e.code,{className:"language-shell",children:'curl -X GET -H "Accept: application/vnd.gravitino.v1+json" \\\nhttp://localhost:8090/api/metalakes/test/tags/tag1\n'})})}),(0,n.jsx)(i.default,{value:"java",label:"Java",children:(0,n.jsx)(e.pre,{children:(0,n.jsx)(e.code,{className:"language-java",children:'GravitinoClient client = ...\nTag tag = client.getTag("tag1");\n'})})})]}),"\n",(0,n.jsx)(e.h3,{id:"update-a-tag",children:"Update a tag"}),"\n",(0,n.jsx)(e.p,{children:"Gravitino allows you to update a tag by providing a new tag name, comment and properties."}),"\n",(0,n.jsxs)(l.A,{groupId:"language",queryString:!0,children:[(0,n.jsx)(i.default,{value:"shell",label:"Shell",children:(0,n.jsx)(e.pre,{children:(0,n.jsx)(e.code,{className:"language-shell",children:'curl -X PUT -H "Accept: application/vnd.gravitino.v1+json" \\\n-H "Content-Type: application/json" -d \'{\n  "updates": [\n    {\n      "@type": "rename",\n      "newName": "tag2"\n    },\n    {\n      "@type": "updateComment",\n      "newComment": "This is an updated tag"\n    },\n    {\n      "@type": "setProperty",\n      "property": "key3",\n      "value": "value3"\n    },\n    {\n      "@type": "removeProperty",\n      "property": "key1"\n    }\n  ]\n}\' http://localhost:8090/api/metalakes/test/tags/tag1\n'})})}),(0,n.jsx)(i.default,{value:"java",label:"Java",children:(0,n.jsx)(e.pre,{children:(0,n.jsx)(e.code,{className:"language-java",children:'GravitinoClient client = ...\nTag tag = client.alterTag(\n    "tag1",\n    TagChange.rename("tag2"),\n    TagChange.updateComment("This is an updated tag"),\n    TagChange.setProperty("key3", "value3"),\n    TagChange.removeProperty("key1"));\n'})})})]}),"\n",(0,n.jsx)(e.p,{children:"Currently, Gravitino support the following tag changes:"}),"\n",(0,n.jsxs)(e.table,{children:[(0,n.jsx)(e.thead,{children:(0,n.jsxs)(e.tr,{children:[(0,n.jsx)(e.th,{children:"Supported modification"}),(0,n.jsx)(e.th,{children:"JSON"}),(0,n.jsx)(e.th,{children:"Java"})]})}),(0,n.jsxs)(e.tbody,{children:[(0,n.jsxs)(e.tr,{children:[(0,n.jsx)(e.td,{children:"Rename a tag"}),(0,n.jsx)(e.td,{children:(0,n.jsx)(e.code,{children:'{"@type":"rename","newName":"tag_renamed"}'})}),(0,n.jsx)(e.td,{children:(0,n.jsx)(e.code,{children:'TagChange.rename("tag_renamed")'})})]}),(0,n.jsxs)(e.tr,{children:[(0,n.jsx)(e.td,{children:"Update a comment"}),(0,n.jsx)(e.td,{children:(0,n.jsx)(e.code,{children:'{"@type":"updateComment","newComment":"new_comment"}'})}),(0,n.jsx)(e.td,{children:(0,n.jsx)(e.code,{children:'TagChange.updateComment("new_comment")'})})]}),(0,n.jsxs)(e.tr,{children:[(0,n.jsx)(e.td,{children:"Set a tag property"}),(0,n.jsx)(e.td,{children:(0,n.jsx)(e.code,{children:'{"@type":"setProperty","property":"key1","value":"value1"}'})}),(0,n.jsx)(e.td,{children:(0,n.jsx)(e.code,{children:'TagChange.setProperty("key1", "value1")'})})]}),(0,n.jsxs)(e.tr,{children:[(0,n.jsx)(e.td,{children:"Remove a tag property"}),(0,n.jsx)(e.td,{children:(0,n.jsx)(e.code,{children:'{"@type":"removeProperty","property":"key1"}'})}),(0,n.jsx)(e.td,{children:(0,n.jsx)(e.code,{children:'TagChange.removeProperty("key1")'})})]})]})]}),"\n",(0,n.jsx)(e.h3,{id:"delete-a-tag",children:"Delete a tag"}),"\n",(0,n.jsx)(e.p,{children:"You can delete a tag by its name."}),"\n",(0,n.jsxs)(l.A,{groupId:"language",queryString:!0,children:[(0,n.jsx)(i.default,{value:"shell",label:"Shell",children:(0,n.jsx)(e.pre,{children:(0,n.jsx)(e.code,{className:"language-shell",children:'curl -X DELETE -H "Accept: application/vnd.gravitino.v1+json" \\\nhttp://localhost:8090/api/metalakes/test/tags/tag2\n'})})}),(0,n.jsx)(i.default,{value:"java",label:"Java",children:(0,n.jsx)(e.pre,{children:(0,n.jsx)(e.code,{className:"language-java",children:'GravitinoClient client = ...\nclient.deleteTag("tag2");\n'})})})]}),"\n",(0,n.jsx)(e.h2,{id:"tag-associations",children:"Tag associations"}),"\n",(0,n.jsxs)(e.p,{children:["Gravitino allows you to associate and disassociate tags with metadata objects. Currently, only\n",(0,n.jsx)(e.code,{children:"CATALOG"}),", ",(0,n.jsx)(e.code,{children:"SCHEMA"}),", ",(0,n.jsx)(e.code,{children:"TABLE"}),", ",(0,n.jsx)(e.code,{children:"FILESET"}),", ",(0,n.jsx)(e.code,{children:"TOPIC"})," objects can be tagged."]}),"\n",(0,n.jsx)(e.h3,{id:"associate-and-disassociate-tags-with-a-metadata-object",children:"Associate and disassociate tags with a metadata object"}),"\n",(0,n.jsx)(e.p,{children:"You can associate and disassociate tags with a metadata object by providing the object type, object\nname and tag names."}),"\n",(0,n.jsxs)(e.p,{children:["The request path for REST API is ",(0,n.jsx)(e.code,{children:"/api/metalakes/{metalake}/objects/{metadataObjectType}/{metadataObjectName}/tags"}),"."]}),"\n",(0,n.jsxs)(l.A,{groupId:"language",queryString:!0,children:[(0,n.jsx)(i.default,{value:"shell",label:"Shell",children:(0,n.jsx)(e.pre,{children:(0,n.jsx)(e.code,{className:"language-shell",children:'curl -X POST -H "Accept: application/vnd.gravitino.v1+json" \\\n-H "Content-Type: application/json" -d \'{\n  "tagsToAdd": ["tag1", "tag2"],\n  "tagsToRemove": ["tag3"]\n}\' http://localhost:8090/api/metalakes/test/objects/catalog/catalog1/tags\n\ncurl -X POST -H "Accept: application/vnd.gravitino.v1+json" \\\n-H "Content-Type: application/json" -d \'{\n  "tagsToAdd": ["tag1"]\n}\' http://localhost:8090/api/metalakes/test/objects/schema/catalog1.schema1/tags\n'})})}),(0,n.jsx)(i.default,{value:"java",label:"Java",children:(0,n.jsx)(e.pre,{children:(0,n.jsx)(e.code,{className:"language-java",children:'Catalog catalog1 = ...\ncatalog1.supportsTags().associateTags(\n    new String[] {"tag1", "tag2"},\n    new String[] {"tag3"});\n\nSchema schema1 = ...\nschema1.supportsTags().associateTags(new String[] {"tag1"}\uff0c null);\n'})})})]}),"\n",(0,n.jsx)(e.h3,{id:"list-associated-tags-for-a-metadata-object",children:"List associated tags for a metadata object"}),"\n",(0,n.jsx)(e.p,{children:"You can list all the tags associated with a metadata object. The tags in Gravitino are\ninheritable, so listing tags of a metadata object will also list the tags of its parent metadata\nobjects."}),"\n",(0,n.jsxs)(e.p,{children:["The request path for REST API is ",(0,n.jsx)(e.code,{children:"/api/metalakes/{metalake}/objects/{metadataObjectType}/{metadataObjectName}/tags"}),"."]}),"\n",(0,n.jsxs)(l.A,{groupId:"language",queryString:!0,children:[(0,n.jsx)(i.default,{value:"shell",label:"Shell",children:(0,n.jsx)(e.pre,{children:(0,n.jsx)(e.code,{className:"language-shell",children:'curl -X GET -H "Accept: application/vnd.gravitino.v1+json" \\\nhttp://localhost:8090/api/metalakes/test/objects/catalog/catalog1/tags\n\ncurl -X GET -H "Accept: application/vnd.gravitino.v1+json" \\\nhttp://localhost:8090/api/metalakes/test/objects/schema/catalog1.schema1/tags\n\ncurl -X GET -H "Accept: application/vnd.gravitino.v1+json" \\\nhttp://localhost:8090/api/metalakes/test/objects/catalog/catalog1/tags?details=true\n\ncurl -X GET -H "Accept: application/vnd.gravitino.v1+json" \\\nhttp://localhost:8090/api/metalakes/test/objects/schema/catalog1.schema1/tags?details=true\n'})})}),(0,n.jsx)(i.default,{value:"java",label:"Java",children:(0,n.jsx)(e.pre,{children:(0,n.jsx)(e.code,{className:"language-java",children:"Catalog catalog1 = ...\nString[] tags = catalog1.supportsTags().listTags();\nTag[] tagsInfo = catalog1.supportsTags().listTagsInfo();\n\nSchema schema1 = ...\nString[] tags = schema1.supportsTags().listTags();\nTag[] tagsInfo = schema1.supportsTags().listTagsInfo();\n"})})})]}),"\n",(0,n.jsx)(e.h3,{id:"get-an-associated-tag-by-name-for-a-metadata-object",children:"Get an associated tag by name for a metadata object"}),"\n",(0,n.jsx)(e.p,{children:"You can get an associated tag by its name for a metadata object."}),"\n",(0,n.jsxs)(e.p,{children:["The request path for REST API is ",(0,n.jsx)(e.code,{children:"/api/metalakes/{metalake}/objects/{metadataObjectType}/{metadataObjectName}/tags/{tagName}"}),"."]}),"\n",(0,n.jsxs)(l.A,{groupId:"language",queryString:!0,children:[(0,n.jsx)(i.default,{value:"shell",label:"Shell",children:(0,n.jsx)(e.pre,{children:(0,n.jsx)(e.code,{className:"language-shell",children:'curl -X GET -H "Accept: application/vnd.gravitino.v1+json" \\\nhttp://localhost:8090/api/metalakes/test/objects/catalog/catalog1/tags/tag1\n\ncurl -X GET -H "Accept: application/vnd.gravitino.v1+json" \\\nhttp://localhost:8090/api/metalakes/test/objects/schema/catalog1.schema1/tags/tag1\n'})})}),(0,n.jsx)(i.default,{value:"java",label:"Java",children:(0,n.jsx)(e.pre,{children:(0,n.jsx)(e.code,{className:"language-java",children:'Catalog catalog1 = ...\nTag tag = catalog1.supportsTags().getTag("tag1");\n\nSchema schema1 = ...\nTag tag = schema1.supportsTags().getTag("tag1");\n'})})})]}),"\n",(0,n.jsx)(e.h3,{id:"list-metadata-objects-associated-with-a-tag",children:"List metadata objects associated with a tag"}),"\n",(0,n.jsx)(e.p,{children:"You can list all the metadata objects associated with a tag."}),"\n",(0,n.jsxs)(l.A,{groupId:"language",queryString:!0,children:[(0,n.jsx)(i.default,{value:"shell",label:"Shell",children:(0,n.jsx)(e.pre,{children:(0,n.jsx)(e.code,{className:"language-shell",children:'curl -X GET -H "Accept: application/vnd.gravitino.v1+json" \\\nhttp://localhost:8090/api/metalakes/test/tags/tag1/objects\n'})})}),(0,n.jsx)(i.default,{value:"java",label:"Java",children:(0,n.jsx)(e.pre,{children:(0,n.jsx)(e.code,{className:"language-java",children:"Tag tag = ...\nMetadataObject[] objects = tag.associatedObjects().objects();\nint count = tag.associatedObjects().count();\n"})})})]})]})}function j(a={}){const{wrapper:e}={...(0,s.R)(),...a.components};return e?(0,n.jsx)(e,{...a,children:(0,n.jsx)(h,{...a})}):h(a)}},83593:(a,e,t)=>{t.d(e,{A:()=>j});var n=t(79474),s=t(13526),l=t(23544),i=t(45263),c=t(9805);const o={tabList:"tabList_m5Qj",tabItem:"tabItem_R4qO"};var r=t(13274);function d(a){let{className:e,block:t,selectedValue:n,selectValue:i,tabValues:c}=a;const d=[],{blockElementScrollPositionUntilNextRender:g}=(0,l.a_)(),h=a=>{const e=a.currentTarget,t=d.indexOf(e),s=c[t].value;s!==n&&(g(e),i(s))},j=a=>{let e=null;switch(a.key){case"Enter":h(a);break;case"ArrowRight":{const t=d.indexOf(a.currentTarget)+1;e=d[t]??d[0];break}case"ArrowLeft":{const t=d.indexOf(a.currentTarget)-1;e=d[t]??d[d.length-1];break}}e?.focus()};return(0,r.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.A)("tabs",{"tabs--block":t},e),children:c.map((a=>{let{value:e,label:t,attributes:l}=a;return(0,r.jsx)("li",{role:"tab",tabIndex:n===e?0:-1,"aria-selected":n===e,ref:a=>d.push(a),onKeyDown:j,onClick:h,...l,className:(0,s.A)("tabs__item",o.tabItem,l?.className,{"tabs__item--active":n===e}),children:t??e},e)}))})}function g(a){let{lazy:e,children:t,selectedValue:s}=a;const l=(Array.isArray(t)?t:[t]).filter(Boolean);if(e){const a=l.find((a=>a.props.value===s));return a?(0,n.cloneElement)(a,{className:"margin-top--md"}):null}return(0,r.jsx)("div",{className:"margin-top--md",children:l.map(((a,e)=>(0,n.cloneElement)(a,{key:e,hidden:a.props.value!==s})))})}function h(a){const e=(0,i.u)(a);return(0,r.jsxs)("div",{className:(0,s.A)("tabs-container",o.tabList),children:[(0,r.jsx)(d,{...e,...a}),(0,r.jsx)(g,{...e,...a})]})}function j(a){const e=(0,c.default)();return(0,r.jsx)(h,{...a,children:(0,i.v)(a.children)},String(e))}}}]);