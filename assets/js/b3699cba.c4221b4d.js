"use strict";(self.webpackChunkapache_website_template=self.webpackChunkapache_website_template||[]).push([[89426],{19670:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>d,contentTitle:()=>o,default:()=>f,frontMatter:()=>l,metadata:()=>c,toc:()=>u});var i=a(13274),s=a(8438),r=a(83593),t=a(5237);const l={title:"Expression system of Apache Gravitino",slug:"/expression",date:new Date("2024-02-02T00:00:00.000Z"),keyword:"expression function field literal reference",license:"This software is licensed under the Apache License version 2."},o=void 0,c={id:"expression",title:"Expression system of Apache Gravitino",description:"This page introduces the expression system of Apache Gravitino. Expressions are vital component of metadata definition, through expressions, you can define default values for columns, function arguments for function partitioning, bucketing, and sort term of sort ordering in tables.",source:"@site/versioned_docs/version-0.6.1-incubating/expression.md",sourceDirName:".",slug:"/expression",permalink:"/docs/0.6.1-incubating/expression",draft:!1,unlisted:!1,editUrl:"https://github.com/apache/gravitino-site/tree/main/docs/expression.md",tags:[],version:"0.6.1-incubating",lastUpdatedBy:"FANNG",lastUpdatedAt:1732866794e3,frontMatter:{title:"Expression system of Apache Gravitino",slug:"/expression",date:"2024-02-02T00:00:00.000Z",keyword:"expression function field literal reference",license:"This software is licensed under the Apache License version 2."},sidebar:"docs",previous:{title:"Table partitioning, bucketing, sort ordering and indexes",permalink:"/docs/0.6.1-incubating/table-partitioning-bucketing-sort-order-indexes"},next:{title:"Manage fileset metadata",permalink:"/docs/0.6.1-incubating/manage-fileset-metadata-using-gravitino"}},d={},u=[{value:"Field reference",id:"field-reference",level:2},{value:"Literal",id:"literal",level:2},{value:"Function expression",id:"function-expression",level:2},{value:"Unparsed expression",id:"unparsed-expression",level:2}];function p(e){const n={a:"a",code:"code",h2:"h2",p:"p",pre:"pre",...(0,s.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(n.p,{children:["This page introduces the expression system of Apache Gravitino. Expressions are vital component of metadata definition, through expressions, you can define ",(0,i.jsx)(n.a,{href:"/docs/0.6.1-incubating/manage-relational-metadata-using-gravitino#table-column-default-value",children:"default values"})," for columns, function arguments for ",(0,i.jsx)(n.a,{href:"/docs/0.6.1-incubating/table-partitioning-bucketing-sort-order-indexes#table-partitioning",children:"function partitioning"}),", ",(0,i.jsx)(n.a,{href:"/docs/0.6.1-incubating/table-partitioning-bucketing-sort-order-indexes#table-bucketing",children:"bucketing"}),", and sort term of ",(0,i.jsx)(n.a,{href:"/docs/0.6.1-incubating/table-partitioning-bucketing-sort-order-indexes#sort-ordering",children:"sort ordering"})," in tables.\nGravitino expression system divides expressions into three basic parts: field reference, literal, and function. Function expressions can contain field references, literals, and other function expressions."]}),"\n",(0,i.jsx)(n.h2,{id:"field-reference",children:"Field reference"}),"\n",(0,i.jsxs)(n.p,{children:["Field reference is a reference to a field in a table.\nThe following is an example of creating a field reference expression, demonstrating how to create a reference for the ",(0,i.jsx)(n.code,{children:"student"})," field."]}),"\n",(0,i.jsxs)(r.A,{groupId:"language",queryString:!0,children:[(0,i.jsx)(t.default,{value:"Json",label:"Json",children:(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-json",children:'[\n  {\n    "type": "field",\n    "fieldName": [\n      "student"\n    ]\n  }\n]\n'})})}),(0,i.jsx)(t.default,{value:"java",label:"Java",children:(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-java",children:'NamedReference field = NamedReference.field("student");\n'})})})]}),"\n",(0,i.jsx)(n.h2,{id:"literal",children:"Literal"}),"\n",(0,i.jsxs)(n.p,{children:["Literal is a constant value.\nThe following is an example of creating a literal expression, demonstrating how to create a ",(0,i.jsx)(n.code,{children:"NULL"})," literal and three different data types of literal expressions for the value ",(0,i.jsx)(n.code,{children:"1024"}),"."]}),"\n",(0,i.jsxs)(r.A,{groupId:"language",queryString:!0,children:[(0,i.jsx)(t.default,{value:"Json",label:"Json",children:(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-json",children:'[\n  {\n    "type": "literal",\n    "dataType": "null",\n    "value": "null"\n  },\n  {\n    "type": "literal",\n    "dataType": "integer",\n    "value": "1024"\n  },\n  {\n    "type": "literal",\n    "dataType": "string",\n    "value": "1024"\n  },\n  {\n    "type": "literal",\n    "dataType": "decimal(10,2)",\n    "value": "1024"\n  }\n]\n'})})}),(0,i.jsx)(t.default,{value:"java",label:"Java",children:(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-java",children:'Literal<?>[] literals =\n    new Literal[] {\n    Literals.NULL,\n    Literals.integerLiteral(1024),\n    Literals.stringLiteral("1024"),\n    Literals.decimalLiteral(Decimal.of("1024", 10, 2))\n    };\n'})})})]}),"\n",(0,i.jsx)(n.h2,{id:"function-expression",children:"Function expression"}),"\n",(0,i.jsxs)(n.p,{children:["Function expression represents a function call with/without arguments. The arguments can be field references, literals, or other function expressions.\nThe following is an example of creating a function expression, demonstrating how to create function expressions for ",(0,i.jsx)(n.code,{children:"rand()"})," and ",(0,i.jsx)(n.code,{children:"date_trunc('year', birthday)"}),"."]}),"\n",(0,i.jsxs)(r.A,{groupId:"language",queryString:!0,children:[(0,i.jsx)(t.default,{value:"Json",label:"Json",children:(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-json",children:'[\n  {\n    "type": "function",\n    "funcName": "rand",\n    "funcArgs": []\n  },\n  {\n    "type": "function",\n    "funcName": "date_trunc",\n    "funcArgs": [\n      {\n        "type": "literal",\n        "dataType": "string",\n        "value": "year"\n      },\n      {\n        "type": "field",\n        "fieldName": [\n          "birthday"\n        ]\n      }\n    ]\n  }\n]\n'})})}),(0,i.jsx)(t.default,{value:"java",label:"Java",children:(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-java",children:'FunctionExpression[] functionExpressions =\n        new FunctionExpression[] {\n          FunctionExpression.of("rand"),\n          FunctionExpression.of("date_trunc", Literals.stringLiteral("year"), NamedReference.field("birthday"))\n        };\n'})})})]}),"\n",(0,i.jsx)(n.h2,{id:"unparsed-expression",children:"Unparsed expression"}),"\n",(0,i.jsx)(n.p,{children:"Unparsed expression is a special type of expression, currently serves exclusively for presenting the default value of a column when it's unsolvable.\nThe following shows the data structure of an unparsed expression in JSON and Java, enabling easy retrieval of its value."}),"\n",(0,i.jsxs)(r.A,{groupId:"language",queryString:!0,children:[(0,i.jsx)(t.default,{value:"Json",label:"Json",children:(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-json",children:'{\n  "type": "unparsed",\n  "unparsedExpression": "(curdate() + interval 1 year)"\n}\n'})})}),(0,i.jsx)(t.default,{value:"java",label:"Java",children:(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-java",children:'// The result of the following expression is a string "(curdate() + interval 1 year)"\nString unparsedValue = ((UnparsedExpression) expressino).unparsedExpression();\n'})})})]})]})}function f(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(p,{...e})}):p(e)}},83593:(e,n,a)=>{a.d(n,{A:()=>f});var i=a(79474),s=a(13526),r=a(23544),t=a(45263),l=a(9805);const o={tabList:"tabList_m5Qj",tabItem:"tabItem_R4qO"};var c=a(13274);function d(e){let{className:n,block:a,selectedValue:i,selectValue:t,tabValues:l}=e;const d=[],{blockElementScrollPositionUntilNextRender:u}=(0,r.a_)(),p=e=>{const n=e.currentTarget,a=d.indexOf(n),s=l[a].value;s!==i&&(u(n),t(s))},f=e=>{let n=null;switch(e.key){case"Enter":p(e);break;case"ArrowRight":{const a=d.indexOf(e.currentTarget)+1;n=d[a]??d[0];break}case"ArrowLeft":{const a=d.indexOf(e.currentTarget)-1;n=d[a]??d[d.length-1];break}}n?.focus()};return(0,c.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.A)("tabs",{"tabs--block":a},n),children:l.map((e=>{let{value:n,label:a,attributes:r}=e;return(0,c.jsx)("li",{role:"tab",tabIndex:i===n?0:-1,"aria-selected":i===n,ref:e=>d.push(e),onKeyDown:f,onClick:p,...r,className:(0,s.A)("tabs__item",o.tabItem,r?.className,{"tabs__item--active":i===n}),children:a??n},n)}))})}function u(e){let{lazy:n,children:a,selectedValue:s}=e;const r=(Array.isArray(a)?a:[a]).filter(Boolean);if(n){const e=r.find((e=>e.props.value===s));return e?(0,i.cloneElement)(e,{className:"margin-top--md"}):null}return(0,c.jsx)("div",{className:"margin-top--md",children:r.map(((e,n)=>(0,i.cloneElement)(e,{key:n,hidden:e.props.value!==s})))})}function p(e){const n=(0,t.u)(e);return(0,c.jsxs)("div",{className:(0,s.A)("tabs-container",o.tabList),children:[(0,c.jsx)(d,{...n,...e}),(0,c.jsx)(u,{...n,...e})]})}function f(e){const n=(0,l.default)();return(0,c.jsx)(p,{...e,children:(0,t.v)(e.children)},String(n))}}}]);