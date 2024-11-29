"use strict";(self.webpackChunkapache_website_template=self.webpackChunkapache_website_template||[]).push([[96542],{90209:(e,i,n)=>{n.r(i),n.d(i,{assets:()=>r,contentTitle:()=>o,default:()=>d,frontMatter:()=>s,metadata:()=>l,toc:()=>c});var t=n(13274),a=n(8438);const s={title:"How to use Apache Gravitino Python client",slug:"/how-to-use-gravitino-python-client",date:new Date("2024-05-09T00:00:00.000Z"),keyword:"Gravitino Python client",license:"This software is licensed under the Apache License version 2."},o="Apache Gravitino Python client",l={id:"how-to-use-python-client",title:"How to use Apache Gravitino Python client",description:"Apache Gravitino is a high-performance, geo-distributed, and federated metadata lake.",source:"@site/versioned_docs/version-0.7.0-incubating/how-to-use-python-client.md",sourceDirName:".",slug:"/how-to-use-gravitino-python-client",permalink:"/docs/0.7.0-incubating/how-to-use-gravitino-python-client",draft:!1,unlisted:!1,editUrl:"https://github.com/apache/gravitino-site/tree/main/docs/how-to-use-python-client.md",tags:[],version:"0.7.0-incubating",lastUpdatedBy:"FANNG",lastUpdatedAt:1732866794e3,frontMatter:{title:"How to use Apache Gravitino Python client",slug:"/how-to-use-gravitino-python-client",date:"2024-05-09T00:00:00.000Z",keyword:"Gravitino Python client",license:"This software is licensed under the Apache License version 2."},sidebar:"docs",previous:{title:"Manage tags in Gravitino",permalink:"/docs/0.7.0-incubating/manage-tags-in-gravitino"},next:{title:"Introduction",permalink:"/docs/0.7.0-incubating/api/rest/gravitino-rest-api"}},r={},c=[{value:"Use Guidance",id:"use-guidance",level:2},{value:"Apache Gravitino Python client API",id:"apache-gravitino-python-client-api",level:3},{value:"Apache Gravitino Fileset Example",id:"apache-gravitino-fileset-example",level:3},{value:"How to development Apache Gravitino Python Client",id:"how-to-development-apache-gravitino-python-client",level:2},{value:"Prerequisites",id:"prerequisites",level:3},{value:"Build and testing",id:"build-and-testing",level:3},{value:"Resources",id:"resources",level:2},{value:"License",id:"license",level:2},{value:"ASF Incubator disclaimer",id:"asf-incubator-disclaimer",level:2}];function h(e){const i={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,a.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(i.h1,{id:"apache-gravitino-python-client",children:"Apache Gravitino Python client"}),"\n",(0,t.jsx)(i.p,{children:"Apache Gravitino is a high-performance, geo-distributed, and federated metadata lake.\nIt manages the metadata directly in different sources, types, and regions, also provides users\nthe unified metadata access for data and AI assets."}),"\n",(0,t.jsx)(i.p,{children:"Gravitino Python client helps data scientists easily manage metadata using Python language."}),"\n",(0,t.jsx)(i.p,{children:(0,t.jsx)(i.img,{alt:"gravitino-python-client-introduction",src:n(42001).A+"",width:"1762",height:"978"})}),"\n",(0,t.jsx)(i.h2,{id:"use-guidance",children:"Use Guidance"}),"\n",(0,t.jsx)(i.p,{children:"You can use Gravitino Python client library with Spark, PyTorch, Tensorflow, Ray and Python environment."}),"\n",(0,t.jsxs)(i.p,{children:["First of all, You must have a Gravitino server set up and run, You can refer document of\n",(0,t.jsx)(i.a,{href:"/docs/0.7.0-incubating/how-to-install",children:"How to install Gravitino"})," to build Gravitino server from source code and\ninstall it in your local."]}),"\n",(0,t.jsx)(i.h3,{id:"apache-gravitino-python-client-api",children:"Apache Gravitino Python client API"}),"\n",(0,t.jsx)(i.pre,{children:(0,t.jsx)(i.code,{className:"language-shell",children:"pip install apache-gravitino\n"})}),"\n",(0,t.jsxs)(i.ol,{children:["\n",(0,t.jsx)(i.li,{children:(0,t.jsx)(i.a,{href:"/docs/0.7.0-incubating/manage-metalake-using-gravitino?language=python",children:"Manage metalake using Gravitino Python API"})}),"\n",(0,t.jsx)(i.li,{children:(0,t.jsx)(i.a,{href:"/docs/0.7.0-incubating/manage-fileset-metadata-using-gravitino?language=python",children:"Manage fileset metadata using Gravitino Python API"})}),"\n"]}),"\n",(0,t.jsx)(i.h3,{id:"apache-gravitino-fileset-example",children:"Apache Gravitino Fileset Example"}),"\n",(0,t.jsxs)(i.p,{children:["We offer a playground environment to help you quickly understand how to use Gravitino Python\nclient to manage non-tabular data on HDFS via Fileset in Gravitino. You can refer to the\ndocument ",(0,t.jsx)(i.a,{href:"/docs/0.7.0-incubating/how-to-use-the-playground",children:"How to use the playground"}),"\nto launch a Gravitino server, HDFS and Jupyter notebook environment in you local Docker environment."]}),"\n",(0,t.jsxs)(i.p,{children:["Waiting for the playground Docker environment to start, you can directly open\n",(0,t.jsx)(i.code,{children:"http://localhost:18888/lab/tree/gravitino-fileset-example.ipynb"})," in the browser and run the example."]}),"\n",(0,t.jsxs)(i.p,{children:["The ",(0,t.jsx)(i.a,{href:"https://github.com/apache/gravitino-playground/blob/main/init/jupyter/gravitino-fileset-example.ipynb",children:"gravitino-fileset-example"}),"\ncontains the following code snippets:"]}),"\n",(0,t.jsxs)(i.ol,{children:["\n",(0,t.jsx)(i.li,{children:"Install HDFS Python client."}),"\n",(0,t.jsx)(i.li,{children:"Create a HDFS client to connect HDFS and to do some test operations."}),"\n",(0,t.jsx)(i.li,{children:"Install Gravitino Python client."}),"\n",(0,t.jsx)(i.li,{children:"Initialize Gravitino admin client and create a Gravitino metalake."}),"\n",(0,t.jsx)(i.li,{children:"Initialize Gravitino client and list metalakes."}),"\n",(0,t.jsxs)(i.li,{children:["Create a Gravitino ",(0,t.jsx)(i.code,{children:"Catalog"})," and special ",(0,t.jsx)(i.code,{children:"type"})," is ",(0,t.jsx)(i.code,{children:"Catalog.Type.FILESET"})," and ",(0,t.jsx)(i.code,{children:"provider"})," is\n",(0,t.jsx)(i.a,{href:"/docs/0.7.0-incubating/hadoop-catalog",children:"hadoop"})]}),"\n",(0,t.jsxs)(i.li,{children:["Create a Gravitino ",(0,t.jsx)(i.code,{children:"Schema"})," with the ",(0,t.jsx)(i.code,{children:"location"})," pointed to a HDFS path, and use ",(0,t.jsx)(i.code,{children:"hdfs client"})," to\ncheck if the schema location is successfully created in HDFS."]}),"\n",(0,t.jsxs)(i.li,{children:["Create a ",(0,t.jsx)(i.code,{children:"Fileset"})," with ",(0,t.jsx)(i.code,{children:"type"})," is ",(0,t.jsx)(i.a,{href:"/docs/0.7.0-incubating/manage-fileset-metadata-using-gravitino#fileset-operations",children:"Fileset.Type.MANAGED"}),",\nuse ",(0,t.jsx)(i.code,{children:"hdfs client"})," to check if the fileset location was successfully created in HDFS."]}),"\n",(0,t.jsxs)(i.li,{children:["Drop this ",(0,t.jsx)(i.code,{children:"Fileset.Type.MANAGED"})," type fileset and check if the fileset location was\nsuccessfully deleted in HDFS."]}),"\n",(0,t.jsxs)(i.li,{children:["Create a ",(0,t.jsx)(i.code,{children:"Fileset"})," with ",(0,t.jsx)(i.code,{children:"type"})," is ",(0,t.jsx)(i.a,{href:"/docs/0.7.0-incubating/manage-fileset-metadata-using-gravitino#fileset-operations",children:"Fileset.Type.EXTERNAL"}),"\nand ",(0,t.jsx)(i.code,{children:"location"})," pointed to exist HDFS path"]}),"\n",(0,t.jsxs)(i.li,{children:["Drop this ",(0,t.jsx)(i.code,{children:"Fileset.Type.EXTERNAL"})," type fileset and check if the fileset location was\nnot deleted in HDFS."]}),"\n"]}),"\n",(0,t.jsx)(i.h2,{id:"how-to-development-apache-gravitino-python-client",children:"How to development Apache Gravitino Python Client"}),"\n",(0,t.jsx)(i.p,{children:"You can ues any IDE to develop Gravitino Python Client. Directly open the client-python module project in the IDE."}),"\n",(0,t.jsx)(i.h3,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsx)(i.li,{children:"Python 3.8+"}),"\n",(0,t.jsxs)(i.li,{children:["Refer to ",(0,t.jsx)(i.a,{href:"/docs/0.7.0-incubating/how-to-build#prerequisites",children:"How to build Gravitino"})," to have necessary build\nenvironment ready for building."]}),"\n"]}),"\n",(0,t.jsx)(i.h3,{id:"build-and-testing",children:"Build and testing"}),"\n",(0,t.jsxs)(i.ol,{children:["\n",(0,t.jsxs)(i.li,{children:["\n",(0,t.jsx)(i.p,{children:"Clone the Gravitino project."}),"\n",(0,t.jsx)(i.pre,{children:(0,t.jsx)(i.code,{className:"language-shell",children:"git clone git@github.com:apache/gravitino.git\n"})}),"\n"]}),"\n",(0,t.jsxs)(i.li,{children:["\n",(0,t.jsx)(i.p,{children:"Build the Gravitino Python client module"}),"\n",(0,t.jsx)(i.pre,{children:(0,t.jsx)(i.code,{className:"language-shell",children:"./gradlew :clients:client-python:build\n"})}),"\n"]}),"\n",(0,t.jsxs)(i.li,{children:["\n",(0,t.jsx)(i.p,{children:"Run unit tests"}),"\n",(0,t.jsx)(i.pre,{children:(0,t.jsx)(i.code,{className:"language-shell",children:"./gradlew :clients:client-python:test -PskipITs\n"})}),"\n"]}),"\n",(0,t.jsxs)(i.li,{children:["\n",(0,t.jsx)(i.p,{children:"Run integration tests"}),"\n",(0,t.jsxs)(i.p,{children:["Because Python client connects to Gravitino Server to run integration tests,\nSo it runs ",(0,t.jsx)(i.code,{children:"./gradlew compileDistribution -x test"})," command automatically to compile the\nGravitino project in the ",(0,t.jsx)(i.code,{children:"distribution"})," directory. When you run integration tests via Gradle\ncommand or IDE, Gravitino integration test framework (",(0,t.jsx)(i.code,{children:"integration_test_env.py"}),")\nwill start and stop Gravitino server automatically."]}),"\n",(0,t.jsx)(i.pre,{children:(0,t.jsx)(i.code,{className:"language-shell",children:"./gradlew :clients:client-python:test\n"})}),"\n"]}),"\n",(0,t.jsxs)(i.li,{children:["\n",(0,t.jsx)(i.p,{children:"Distribute the Gravitino Python client module"}),"\n",(0,t.jsx)(i.pre,{children:(0,t.jsx)(i.code,{className:"language-shell",children:"./gradlew :clients:client-python:distribution\n"})}),"\n"]}),"\n",(0,t.jsxs)(i.li,{children:["\n",(0,t.jsxs)(i.p,{children:["Deploy the Gravitino Python client to ",(0,t.jsx)(i.a,{href:"https://pypi.org/project/apache-gravitino/",children:"https://pypi.org/project/apache-gravitino/"})]}),"\n",(0,t.jsx)(i.pre,{children:(0,t.jsx)(i.code,{className:"language-shell",children:"./gradlew :clients:client-python:deploy\n"})}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(i.h2,{id:"resources",children:"Resources"}),"\n",(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsxs)(i.li,{children:["Official website ",(0,t.jsx)(i.a,{href:"https://gravitino.apache.org/",children:"https://gravitino.apache.org/"})]}),"\n",(0,t.jsxs)(i.li,{children:["Project home on GitHub: ",(0,t.jsx)(i.a,{href:"https://github.com/apache/gravitino/",children:"https://github.com/apache/gravitino/"})]}),"\n",(0,t.jsxs)(i.li,{children:["Playground with Docker: ",(0,t.jsx)(i.a,{href:"https://github.com/apache/gravitino-playground",children:"https://github.com/apache/gravitino-playground"})]}),"\n",(0,t.jsxs)(i.li,{children:["User documentation: ",(0,t.jsx)(i.a,{href:"https://gravitino.apache.org/docs/",children:"https://gravitino.apache.org/docs/"})]}),"\n",(0,t.jsxs)(i.li,{children:["Slack Community: ",(0,t.jsx)(i.a,{href:"https://the-asf.slack.com/archives/C078RESTT19",children:"https://the-asf.slack.com#gravitino"})]}),"\n"]}),"\n",(0,t.jsx)(i.h2,{id:"license",children:"License"}),"\n",(0,t.jsxs)(i.p,{children:["Gravitino is under the Apache License Version 2.0, See the ",(0,t.jsx)(i.a,{href:"https://github.com/apache/gravitino/blob/main/LICENSE",children:"LICENSE"})," for the details."]}),"\n",(0,t.jsx)(i.h2,{id:"asf-incubator-disclaimer",children:"ASF Incubator disclaimer"}),"\n",(0,t.jsx)(i.p,{children:"Apache Gravitino is an effort undergoing incubation at The Apache Software Foundation (ASF), sponsored by the Apache Incubator.\nIncubation is required of all newly accepted projects until a further review indicates that the infrastructure, communications,\nand decision making process have stabilized in a manner consistent with other successful ASF projects.\nWhile incubation status is not necessarily a reflection of the completeness or stability of the code,\nit does indicate that the project has yet to be fully endorsed by the ASF."})]})}function d(e={}){const{wrapper:i}={...(0,a.R)(),...e.components};return i?(0,t.jsx)(i,{...e,children:(0,t.jsx)(h,{...e})}):h(e)}},42001:(e,i,n)=>{n.d(i,{A:()=>t});const t=n.p+"assets/images/gravitino-python-client-introduction-f860054885996b14515df4c8ccb6ef64.png"}}]);