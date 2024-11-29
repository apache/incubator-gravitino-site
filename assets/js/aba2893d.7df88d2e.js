"use strict";(self.webpackChunkapache_website_template=self.webpackChunkapache_website_template||[]).push([[99739],{67765:(n,e,i)=>{i.r(e),i.d(e,{assets:()=>s,contentTitle:()=>c,default:()=>d,frontMatter:()=>r,metadata:()=>a,toc:()=>l});var t=i(13274),o=i(8438);const r={title:"Apache Gravitino Trino connector installation",slug:"/trino-connector/installation",keyword:"gravitino connector trino",license:"This software is licensed under the Apache License version 2."},c=void 0,a={id:"trino-connector/installation",title:"Apache Gravitino Trino connector installation",description:"To install the Apache Gravitino Trino connector, you should first deploy the Trino environment, and then install the Gravitino Trino connector plugin into Trino.",source:"@site/versioned_docs/version-0.7.0-incubating/trino-connector/installation.md",sourceDirName:"trino-connector",slug:"/trino-connector/installation",permalink:"/docs/0.7.0-incubating/trino-connector/installation",draft:!1,unlisted:!1,editUrl:"https://github.com/apache/gravitino-site/tree/main/docs/trino-connector/installation.md",tags:[],version:"0.7.0-incubating",lastUpdatedBy:"FANNG",lastUpdatedAt:1732866794e3,frontMatter:{title:"Apache Gravitino Trino connector installation",slug:"/trino-connector/installation",keyword:"gravitino connector trino",license:"This software is licensed under the Apache License version 2."},sidebar:"docs",previous:{title:"Requirements",permalink:"/docs/0.7.0-incubating/trino-connector/requirements"},next:{title:"Configuration",permalink:"/docs/0.7.0-incubating/trino-connector/configuration"}},s={},l=[{value:"Example",id:"example",level:2},{value:"Running the container",id:"running-the-container",level:3},{value:"Installing the Apache Gravitino Trino connector",id:"installing-the-apache-gravitino-trino-connector",level:3},{value:"Configuring the Trino",id:"configuring-the-trino",level:3},{value:"Configuring the Apache Gravitino Trino connector",id:"configuring-the-apache-gravitino-trino-connector",level:3},{value:"Verifying the Apache Gravitino Trino connector",id:"verifying-the-apache-gravitino-trino-connector",level:3}];function h(n){const e={a:"a",code:"code",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,o.R)(),...n.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(e.p,{children:["To install the Apache Gravitino Trino connector, you should first deploy the Trino environment, and then install the Gravitino Trino connector plugin into Trino.\nPlease refer to the ",(0,t.jsx)(e.a,{href:"https://trino.io/docs/current/installation/deployment.html",children:"Deploying Trino documentation"})," and do the following steps:"]}),"\n",(0,t.jsxs)(e.ol,{children:["\n",(0,t.jsxs)(e.li,{children:[(0,t.jsx)(e.a,{href:"https://github.com/apache/gravitino/releases",children:"Download"})," the Gravitino Trino connector tarball and unpack it.\nThe tarball contains a single top-level directory ",(0,t.jsx)(e.code,{children:"gravitino-trino-connector-<version>"}),",\nwhich called the connector directory."]}),"\n",(0,t.jsxs)(e.li,{children:["Copy the connector directory to the Trino's plugin directory.\nNormally, the directory location is ",(0,t.jsx)(e.code,{children:"Trino-server-<version>/plugin"}),", and the directory contains other catalogs used by Trino."]}),"\n",(0,t.jsxs)(e.li,{children:["Add Trino JVM arguments ",(0,t.jsx)(e.code,{children:"-Dlog4j.configurationFile=file:////etc/trino/log4j2.properties"})," to enable logging for the Gravitino Trino connector."]}),"\n",(0,t.jsxs)(e.li,{children:["Update Trino coordinator configuration.\nYou need to set ",(0,t.jsx)(e.code,{children:"catalog.management=dynamic"}),", The config location is ",(0,t.jsx)(e.code,{children:"Trino-server-<version>/etc/config.properties"}),",  and the contents like:"]}),"\n"]}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-text",children:"coordinator=true\nnode-scheduler.include-coordinator=true\nhttp-server.http.port=8080\ncatalog.management=dynamic\ndiscovery.uri=http://0.0.0.0:8080\n"})}),"\n",(0,t.jsxs)(e.p,{children:["Alternatively,\nyou can build the Gravitino Trino connector package from the sources\nand obtain the ",(0,t.jsx)(e.code,{children:"gravitino-trino-connector-<version>.tar.gz"})," file in the ",(0,t.jsx)(e.code,{children:"$PROJECT/distribution"})," directory.\nPlease refer to the ",(0,t.jsx)(e.a,{href:"/docs/0.7.0-incubating/how-to-build",children:"Gravitino Development documentation"})]}),"\n",(0,t.jsx)(e.h2,{id:"example",children:"Example"}),"\n",(0,t.jsx)(e.p,{children:"You can install the Gravitino Trino connector in Trino office docker images step by step."}),"\n",(0,t.jsx)(e.h3,{id:"running-the-container",children:"Running the container"}),"\n",(0,t.jsxs)(e.p,{children:["Use the docker command to create a container from the ",(0,t.jsx)(e.code,{children:"trinodb/trino"})," image. Assign it the trino-gravitino name.\nRun it in the background, and map the default Trino port, which is 8080, from inside the container to port 8080 on your machine."]}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-shell",children:"docker run --name trino-gravitino -d -p 8080:8080 trinodb/trino:435\n"})}),"\n",(0,t.jsxs)(e.p,{children:["Run ",(0,t.jsx)(e.code,{children:"docker ps"})," to check whether the container is running."]}),"\n",(0,t.jsx)(e.h3,{id:"installing-the-apache-gravitino-trino-connector",children:"Installing the Apache Gravitino Trino connector"}),"\n",(0,t.jsx)(e.p,{children:"Download the Gravitino Trino connector tarball and unpack it."}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-shell",children:"cd /tmp\nwget https://github.com/apache/gravitino/releases/gravitino-trino-connector-<version>.tar.gz\ntar -zxvf gravitino-trino-connector-<version>.tar.gz\n"})}),"\n",(0,t.jsxs)(e.p,{children:["You can see the connector directory ",(0,t.jsx)(e.code,{children:"gravitino-trino-connector-<version>"})," after unpacking."]}),"\n",(0,t.jsx)(e.p,{children:"Copy the connector directory to the Trino container's plugin directory."}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-shell",children:"docker cp /tmp/gravitino-trino-connector-<version> trino-gravitino:/lib/trino/plugin\n"})}),"\n",(0,t.jsx)(e.p,{children:"Check the plugin directory in the container."}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-shell",children:"docker exec -it trino-gravitino /bin/bash\ncd /lib/trino/plugin\n"})}),"\n",(0,t.jsx)(e.p,{children:"Now you can see the Gravitino Trino connector directory in the plugin directory."}),"\n",(0,t.jsx)(e.h3,{id:"configuring-the-trino",children:"Configuring the Trino"}),"\n",(0,t.jsxs)(e.p,{children:["You can find the Trino configuration file ",(0,t.jsx)(e.code,{children:"config.properties"})," in the directory ",(0,t.jsx)(e.code,{children:"/etc/trino"}),". You need changed the file like this:"]}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-text",children:"#single node install config\ncoordinator=true\nnode-scheduler.include-coordinator=true\nhttp-server.http.port=8080\ndiscovery.uri=http://localhost:8080\ncatalog.management=dynamic\n"})}),"\n",(0,t.jsx)(e.h3,{id:"configuring-the-apache-gravitino-trino-connector",children:"Configuring the Apache Gravitino Trino connector"}),"\n",(0,t.jsxs)(e.p,{children:["Assuming you have now started the Gravitino server on the host ",(0,t.jsx)(e.code,{children:"gravitino-server-host"})," and already created a metalake named ",(0,t.jsx)(e.code,{children:"test"}),", if those have not been prepared, please refer to the ",(0,t.jsx)(e.a,{href:"/docs/0.7.0-incubating/getting-started",children:"Gravitino getting started"}),"."]}),"\n",(0,t.jsxs)(e.p,{children:["To configure Gravitino Trino connector correctly, you need to put the following configurations to the Trino configuration file ",(0,t.jsx)(e.code,{children:"/etc/trino/catalog/gravitino.properties"}),"."]}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-text",children:"connector.name=gravitino\ngravitino.uri=http://gravitino-server-host:8090\ngravitino.metalake=test\n"})}),"\n",(0,t.jsxs)(e.ul,{children:["\n",(0,t.jsxs)(e.li,{children:["The ",(0,t.jsx)(e.code,{children:"gravitino.name"})," defines which Gravitino Trino connector is used. It must be ",(0,t.jsx)(e.code,{children:"gravitino"}),"."]}),"\n",(0,t.jsxs)(e.li,{children:["The ",(0,t.jsx)(e.code,{children:"gravitino.metalake"})," defines which metalake are used. It should exist in the Gravitino server."]}),"\n",(0,t.jsxs)(e.li,{children:["The ",(0,t.jsx)(e.code,{children:"gravitino.uri"})," defines the connection information about Gravitino server. Make sure your container can access the Gravitino server."]}),"\n"]}),"\n",(0,t.jsxs)(e.p,{children:["Full configurations for Apache Gravitino Trino connector can be seen ",(0,t.jsx)(e.a,{href:"/docs/0.7.0-incubating/trino-connector/configuration",children:"here"})]}),"\n",(0,t.jsxs)(e.p,{children:["If you haven't created the metalake named ",(0,t.jsx)(e.code,{children:"test"}),", you can use the following command to create it."]}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-shell",children:'curl -X POST -H "Content-Type: application/json" -d \'{"name":"test","comment":"comment","properties":{}}\' http://gravitino-server-host:8090/api/metalakes\n'})}),"\n",(0,t.jsx)(e.p,{children:"And then restart the Trino container to load the Gravitino Trino connector."}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-shell",children:"docker restart trino-gravitino\n"})}),"\n",(0,t.jsx)(e.h3,{id:"verifying-the-apache-gravitino-trino-connector",children:"Verifying the Apache Gravitino Trino connector"}),"\n",(0,t.jsx)(e.p,{children:"Use the Trino CLI to connect to the Trino container and run a query."}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-text",children:"docker exec -it trino-gravitino trino\ntrino> SHOW CATALOGS;\nCatalog\n------------------------\ngravitino\njmx\nmemory\ntpcds\ntpch\nsystem\n"})}),"\n",(0,t.jsxs)(e.p,{children:["You can see the ",(0,t.jsx)(e.code,{children:"gravitino"})," catalog in the result set. This signifies the successful installation of the Gravitino Trino connector."]}),"\n",(0,t.jsxs)(e.p,{children:["Assuming you have created a catalog named ",(0,t.jsx)(e.code,{children:"test.jdbc-mysql"})," in the Gravitino server, or please refer to ",(0,t.jsx)(e.a,{href:"/docs/0.7.0-incubating/manage-relational-metadata-using-gravitino#create-a-catalog",children:"Create a Catalog"}),". Then you can use the Trino CLI to connect to the Trino container and run a query like this."]}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-text",children:"docker exec -it trino-gravitino trino\ntrino> SHOW CATALOGS;\nCatalog\n------------------------\ngravitino\njmx\nmemory\ntpcds\ntpch\nsystem\njdbc-mysql\n"})}),"\n",(0,t.jsx)(e.p,{children:"The catalog named 'jdbc-mysql' is the catalog that you created by gravitino server, and you can use it to access the mysql database like other Trino catalogs."})]})}function d(n={}){const{wrapper:e}={...(0,o.R)(),...n.components};return e?(0,t.jsx)(e,{...n,children:(0,t.jsx)(h,{...n})}):h(n)}}}]);