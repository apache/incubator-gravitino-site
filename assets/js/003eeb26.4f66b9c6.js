"use strict";(self.webpackChunkapache_website_template=self.webpackChunkapache_website_template||[]).push([[9666],{25441:(e,i,n)=>{n.r(i),n.d(i,{assets:()=>o,contentTitle:()=>l,default:()=>h,frontMatter:()=>c,metadata:()=>a,toc:()=>d});var r=n(13274),s=n(78140);const c={title:"Docker image details",slug:"/docker-image-details",keyword:"docker",license:"This software is licensed under the Apache License version 2."},l="User Docker images",a={id:"docker-image-details",title:"Docker image details",description:"Apache Gravitino Docker image",source:"@site/versioned_docs/version-0.6.0-incubating/docker-image-details.md",sourceDirName:".",slug:"/docker-image-details",permalink:"/docs/0.6.0-incubating/docker-image-details",draft:!1,unlisted:!1,editUrl:"https://github.com/apache/gravitino-site/tree/main/docs/docker-image-details.md",tags:[],version:"0.6.0-incubating",lastUpdatedBy:"Qian Xia",lastUpdatedAt:1726236339e3,frontMatter:{title:"Docker image details",slug:"/docker-image-details",keyword:"docker",license:"This software is licensed under the Apache License version 2."},sidebar:"docs",previous:{title:"Publish Docker images",permalink:"/docs/0.6.0-incubating/publish-docker-images"},next:{title:"How to upgrade",permalink:"/docs/0.6.0-incubating/how-to-upgrade"}},o={},d=[{value:"Apache Gravitino Docker image",id:"apache-gravitino-docker-image",level:2},{value:"Apache Gravitino Iceberg REST server Docker image",id:"apache-gravitino-iceberg-rest-server-docker-image",level:2},{value:"Playground Docker image",id:"playground-docker-image",level:2},{value:"Apache Hive image",id:"apache-hive-image",level:3},{value:"Trino image",id:"trino-image",level:3},{value:"Apache Gravitino CI Apache Hive image with kerberos enabled",id:"apache-gravitino-ci-apache-hive-image-with-kerberos-enabled",level:2},{value:"Apache Gravitino CI Apache Hive image",id:"apache-gravitino-ci-apache-hive-image",level:2},{value:"Apache Gravitino CI Trino image",id:"apache-gravitino-ci-trino-image",level:2},{value:"Apache Gravitino CI Doris image",id:"apache-gravitino-ci-doris-image",level:2},{value:"Apache Gravitino CI Apache Ranger image",id:"apache-gravitino-ci-apache-ranger-image",level:2}];function t(e){const i={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,s.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(i.h1,{id:"user-docker-images",children:"User Docker images"}),"\n",(0,r.jsx)(i.h2,{id:"apache-gravitino-docker-image",children:"Apache Gravitino Docker image"}),"\n",(0,r.jsx)(i.p,{children:"You can deploy the service with the Gravitino Docker image."}),"\n",(0,r.jsx)(i.p,{children:"Container startup commands"}),"\n",(0,r.jsx)(i.pre,{children:(0,r.jsx)(i.code,{className:"language-shell",children:"docker run --rm -d -p 8090:8090 -p 9001:9001 apache/gravitino:0.6.0-incubating\n"})}),"\n",(0,r.jsx)(i.p,{children:"Changelog"}),"\n",(0,r.jsxs)(i.ul,{children:["\n",(0,r.jsxs)(i.li,{children:["\n",(0,r.jsx)(i.p,{children:"apache/gravitino:0.6.0-incubating (Switch to Apache official DockerHub repository)"}),"\n",(0,r.jsxs)(i.ul,{children:["\n",(0,r.jsx)(i.li,{children:"Use the latest Gravitino version 0.6.0 source code to build the image."}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(i.li,{children:["\n",(0,r.jsx)(i.p,{children:"datastrato/gravitino:0.5.1"}),"\n",(0,r.jsxs)(i.ul,{children:["\n",(0,r.jsx)(i.li,{children:"Based on Gravitino 0.5.1, you can know more information from 0.5.1 release notes."}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(i.li,{children:["\n",(0,r.jsx)(i.p,{children:"datastrato/gravitino:0.5.0"}),"\n",(0,r.jsxs)(i.ul,{children:["\n",(0,r.jsx)(i.li,{children:"Based on Gravitino 0.5.0, you can know more information from 0.5.0 release notes."}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(i.li,{children:["\n",(0,r.jsx)(i.p,{children:"datastrato/gravitino:0.4.0"}),"\n",(0,r.jsxs)(i.ul,{children:["\n",(0,r.jsx)(i.li,{children:"Based on Gravitino 0.4.0, you can know more information from 0.4.0 release notes."}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(i.li,{children:["\n",(0,r.jsx)(i.p,{children:"datastrato/gravitino:0.3.1"}),"\n",(0,r.jsxs)(i.ul,{children:["\n",(0,r.jsx)(i.li,{children:"Fix some issues"}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(i.li,{children:["\n",(0,r.jsx)(i.p,{children:"datastrato/gravitino:0.3.0"}),"\n",(0,r.jsxs)(i.ul,{children:["\n",(0,r.jsxs)(i.li,{children:["Docker image ",(0,r.jsx)(i.code,{children:"datastrato/gravitino:0.3.0"})]}),"\n",(0,r.jsx)(i.li,{children:"Gravitino Server"}),"\n",(0,r.jsxs)(i.li,{children:["Expose ports:","\n",(0,r.jsxs)(i.ul,{children:["\n",(0,r.jsxs)(i.li,{children:[(0,r.jsx)(i.code,{children:"8090"})," Gravitino Web UI"]}),"\n",(0,r.jsxs)(i.li,{children:[(0,r.jsx)(i.code,{children:"9001"})," Iceberg REST service"]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(i.h2,{id:"apache-gravitino-iceberg-rest-server-docker-image",children:"Apache Gravitino Iceberg REST server Docker image"}),"\n",(0,r.jsx)(i.p,{children:"You can deploy the standalone Gravitino Iceberg REST server with the Docker image."}),"\n",(0,r.jsx)(i.p,{children:"Container startup commands"}),"\n",(0,r.jsx)(i.pre,{children:(0,r.jsx)(i.code,{className:"language-shell",children:"docker run --rm -d -p 9001:9001 apache/gravitino-iceberg-rest:0.6.0-incubating\n"})}),"\n",(0,r.jsx)(i.p,{children:"Changelog"}),"\n",(0,r.jsxs)(i.ul,{children:["\n",(0,r.jsxs)(i.li,{children:["apache/gravitino-iceberg-rest:0.6.0-incubating.","\n",(0,r.jsxs)(i.ul,{children:["\n",(0,r.jsx)(i.li,{children:"Gravitino Iceberg REST Server with memory catalog backend."}),"\n",(0,r.jsxs)(i.li,{children:["Expose ports:","\n",(0,r.jsxs)(i.ul,{children:["\n",(0,r.jsxs)(i.li,{children:[(0,r.jsx)(i.code,{children:"9001"})," Iceberg REST service"]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(i.h2,{id:"playground-docker-image",children:"Playground Docker image"}),"\n",(0,r.jsxs)(i.p,{children:["You can use the ",(0,r.jsx)(i.a,{href:"https://github.com/apache/gravitino-playground",children:"playground"})," to experience the whole Gravitino system with other components."]}),"\n",(0,r.jsx)(i.p,{children:"The playground consists of multiple Docker images."}),"\n",(0,r.jsx)(i.p,{children:"The Docker images of the playground have suitable configurations for users to experience."}),"\n",(0,r.jsx)(i.h3,{id:"apache-hive-image",children:"Apache Hive image"}),"\n",(0,r.jsx)(i.p,{children:"Changelog"}),"\n",(0,r.jsxs)(i.ul,{children:["\n",(0,r.jsxs)(i.li,{children:["\n",(0,r.jsxs)(i.p,{children:["apache/gravitino-playground",":hive-2",".7.3 (Switch to Apache official DockerHub repository)"]}),"\n",(0,r.jsxs)(i.ul,{children:["\n",(0,r.jsxs)(i.li,{children:["Use ",(0,r.jsx)(i.code,{children:"datastrato/hive:2.7.3-no-yarn"})," Dockerfile to rebuild the image."]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(i.li,{children:["\n",(0,r.jsx)(i.p,{children:"datastrato/hive:2.7.3-no-yarn"}),"\n",(0,r.jsxs)(i.ul,{children:["\n",(0,r.jsxs)(i.li,{children:["Docker image ",(0,r.jsx)(i.code,{children:"datastrato/hive:2.7.3-no-yarn"})]}),"\n",(0,r.jsx)(i.li,{children:(0,r.jsx)(i.code,{children:"hadoop-2.7.3"})}),"\n",(0,r.jsx)(i.li,{children:(0,r.jsx)(i.code,{children:"hive-2.3.9"})}),"\n",(0,r.jsx)(i.li,{children:"Don't start YARN when container startup"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(i.h3,{id:"trino-image",children:"Trino image"}),"\n",(0,r.jsx)(i.p,{children:"Changelog"}),"\n",(0,r.jsxs)(i.ul,{children:["\n",(0,r.jsxs)(i.li,{children:["\n",(0,r.jsxs)(i.p,{children:["apache/gravitino-playground",":trino-435-gravitino-0",".6.0-incubating (Switch to Apache official DockerHub repository)"]}),"\n",(0,r.jsxs)(i.ul,{children:["\n",(0,r.jsx)(i.li,{children:"Use Gravitino release 0.6.0 Dockerfile to build the image."}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(i.li,{children:["\n",(0,r.jsx)(i.p,{children:"datastrato/trino:435-gravitino-0.5.1"}),"\n",(0,r.jsxs)(i.ul,{children:["\n",(0,r.jsx)(i.li,{children:"Based on Gravitino 0.5.1, you can know more information from 0.5.1 release notes."}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(i.li,{children:["\n",(0,r.jsx)(i.p,{children:"datastrato/trino:426-gravitino-0.5.0"}),"\n",(0,r.jsxs)(i.ul,{children:["\n",(0,r.jsx)(i.li,{children:"Based on Gravitino 0.5.0, you can know more information from 0.5.0 release notes."}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(i.li,{children:["\n",(0,r.jsx)(i.p,{children:"datastrato/trino:426-gravitino-0.4.0"}),"\n",(0,r.jsxs)(i.ul,{children:["\n",(0,r.jsx)(i.li,{children:"Based on Gravitino 0.4.0, you can know more information from 0.4.0 release notes."}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(i.li,{children:["\n",(0,r.jsx)(i.p,{children:"datastrato/trino:426-gravitino-0.3.1"}),"\n",(0,r.jsxs)(i.ul,{children:["\n",(0,r.jsx)(i.li,{children:"Fix some issues"}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(i.li,{children:["\n",(0,r.jsx)(i.p,{children:"datastrato/trino:426-gravitino-0.3.0"}),"\n",(0,r.jsxs)(i.ul,{children:["\n",(0,r.jsxs)(i.li,{children:["Docker image ",(0,r.jsx)(i.code,{children:"datastrato/trino:426-gravitino-0.3.0"})]}),"\n",(0,r.jsxs)(i.li,{children:["Base on ",(0,r.jsx)(i.code,{children:"trino:426"})]}),"\n",(0,r.jsxs)(i.li,{children:["Added Gravitino trino-connector-0.3.0 libraries into the ",(0,r.jsx)(i.code,{children:"/usr/lib/trino/plugin/gravitino"})]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(i.h1,{id:"developer-docker-images",children:"Developer Docker images"}),"\n",(0,r.jsx)(i.p,{children:"You can use these kinds of Docker images to facilitate integration testing of all catalog and connector modules within Gravitino."}),"\n",(0,r.jsx)(i.h2,{id:"apache-gravitino-ci-apache-hive-image-with-kerberos-enabled",children:"Apache Gravitino CI Apache Hive image with kerberos enabled"}),"\n",(0,r.jsx)(i.p,{children:"You can use this kind of image to test the catalog of Apache Hive with kerberos enable"}),"\n",(0,r.jsx)(i.p,{children:"Changelog"}),"\n",(0,r.jsxs)(i.ul,{children:["\n",(0,r.jsxs)(i.li,{children:["\n",(0,r.jsxs)(i.p,{children:["apache/gravitino-ci",":kerberos-hive-0",".1.5 (Switch to Apache official DockerHub repository)"]}),"\n",(0,r.jsxs)(i.ul,{children:["\n",(0,r.jsx)(i.li,{children:"Use Gravitino release 0.6.0 Dockerfile to build the image."}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(i.li,{children:["\n",(0,r.jsx)(i.p,{children:"datastrato/gravitino-ci-kerberos-hive:0.1.5"}),"\n",(0,r.jsxs)(i.ul,{children:["\n",(0,r.jsx)(i.li,{children:"Start another HMS for the Hive cluster in the container with port 19083. This is to test whether Kerberos authentication works for a Kerberos-enabled Hive cluster with multiple HMS."}),"\n",(0,r.jsx)(i.li,{children:"Refresh ssh keys in the startup script."}),"\n",(0,r.jsx)(i.li,{children:"Add test logic to log in localhost via ssh without password."}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(i.li,{children:["\n",(0,r.jsx)(i.p,{children:"datastrato/gravitino-ci-kerberos-hive:0.1.4"}),"\n",(0,r.jsxs)(i.ul,{children:["\n",(0,r.jsx)(i.li,{children:"Increase the total check time for the status of DataNode to 150s."}),"\n",(0,r.jsx)(i.li,{children:"Output the log of the DataNode fails to start"}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(i.li,{children:["\n",(0,r.jsx)(i.p,{children:"datastrato/gravitino-ci-kerberos-hive:0.1.3"}),"\n",(0,r.jsxs)(i.ul,{children:["\n",(0,r.jsx)(i.li,{children:"Add more proxy users in the core-site.xml file."}),"\n",(0,r.jsxs)(i.li,{children:["fix bugs in the ",(0,r.jsx)(i.code,{children:"start.sh"})," script."]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(i.li,{children:["\n",(0,r.jsx)(i.p,{children:"datastrato/gravitino-ci-kerberos-hive:0.1.2"}),"\n",(0,r.jsxs)(i.ul,{children:["\n",(0,r.jsxs)(i.li,{children:["Add ",(0,r.jsx)(i.code,{children:"${HOSTNAME} >> /root/.ssh/known_hosts"})," to the startup script."]}),"\n",(0,r.jsx)(i.li,{children:"Add check for the status of DataNode, if the DataNode is not running or ready within 100s, the container will exit."}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(i.li,{children:["\n",(0,r.jsx)(i.p,{children:"datastrato/gravitino-ci-kerberos-hive:0.1.1"}),"\n",(0,r.jsxs)(i.ul,{children:["\n",(0,r.jsx)(i.li,{children:"Add a principal for Gravitino web server named 'HTTP/localhost@HADOOPKRB'."}),"\n",(0,r.jsx)(i.li,{children:"Fix bugs about the configuration of proxy users."}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(i.li,{children:["\n",(0,r.jsx)(i.p,{children:"datastrato/gravitino-ci-kerberos-hive:0.1.0"}),"\n",(0,r.jsxs)(i.ul,{children:["\n",(0,r.jsx)(i.li,{children:"Set up a Hive cluster with kerberos enabled."}),"\n",(0,r.jsxs)(i.li,{children:["Install a KDC server and create a principal for Hive. For more please see ",(0,r.jsx)(i.a,{href:"../dev/docker/kerberos-hive",children:"kerberos-hive"})]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(i.h2,{id:"apache-gravitino-ci-apache-hive-image",children:"Apache Gravitino CI Apache Hive image"}),"\n",(0,r.jsx)(i.p,{children:"You can use this kind of image to test the catalog of Apache Hive."}),"\n",(0,r.jsx)(i.p,{children:"Changelog"}),"\n",(0,r.jsxs)(i.ul,{children:["\n",(0,r.jsxs)(i.li,{children:["\n",(0,r.jsxs)(i.p,{children:["apache/gravitino-ci",":hive-0",".1.13 (Switch to Apache official DockerHub repository)"]}),"\n",(0,r.jsxs)(i.ul,{children:["\n",(0,r.jsx)(i.li,{children:"Use Gravitino release 0.6.0 Dockerfile to build the image."}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(i.li,{children:["\n",(0,r.jsx)(i.p,{children:"datastrato/gravitino-ci-hive:0.1.13"}),"\n",(0,r.jsxs)(i.ul,{children:["\n",(0,r.jsxs)(i.li,{children:["Support Hive 2.3.9 and HDFS 2.7.3","\n",(0,r.jsxs)(i.ul,{children:["\n",(0,r.jsxs)(i.li,{children:["Docker environment variables:","\n",(0,r.jsxs)(i.ul,{children:["\n",(0,r.jsxs)(i.li,{children:[(0,r.jsx)(i.code,{children:"HIVE_RUNTIME_VERSION"}),": ",(0,r.jsx)(i.code,{children:"hive2"})," (default)"]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(i.li,{children:["Support Hive 3.1.3, HDFS 3.1.0 and Ranger plugin version 2.4.0","\n",(0,r.jsxs)(i.ul,{children:["\n",(0,r.jsxs)(i.li,{children:["Docker environment variables:","\n",(0,r.jsxs)(i.ul,{children:["\n",(0,r.jsxs)(i.li,{children:[(0,r.jsx)(i.code,{children:"HIVE_RUNTIME_VERSION"}),": ",(0,r.jsx)(i.code,{children:"hive3"})]}),"\n",(0,r.jsxs)(i.li,{children:[(0,r.jsx)(i.code,{children:"RANGER_SERVER_URL"}),": Ranger admin URL"]}),"\n",(0,r.jsxs)(i.li,{children:[(0,r.jsx)(i.code,{children:"RANGER_HIVE_REPOSITORY_NAME"}),": Hive repository name in Ranger admin"]}),"\n",(0,r.jsxs)(i.li,{children:[(0,r.jsx)(i.code,{children:"RANGER_HDFS_REPOSITORY_NAME"}),": HDFS repository name in Ranger admin"]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(i.li,{children:["If you want to enable Hive Ranger plugin, you need both set the ",(0,r.jsx)(i.code,{children:"RANGER_SERVER_URL"})," and ",(0,r.jsx)(i.code,{children:"RANGER_HIVE_REPOSITORY_NAME"})," environment variables. Hive Ranger audit logs are stored in the ",(0,r.jsx)(i.code,{children:"/tmp/root/ranger-hive-audit.log"}),"."]}),"\n",(0,r.jsxs)(i.li,{children:["If you want to enable HDFS Ranger plugin, you need both set the ",(0,r.jsx)(i.code,{children:"RANGER_SERVER_URL"})," and ",(0,r.jsx)(i.code,{children:"RANGER_HDFS_REPOSITORY_NAME"})," environment variables. HDFS Ranger audit logs are stored in the ",(0,r.jsx)(i.code,{children:"/usr/local/hadoop/logs/ranger-hdfs-audit.log"})]}),"\n",(0,r.jsxs)(i.li,{children:["Example: docker run -e HIVE_RUNTIME_VERSION='hive3' -e RANGER_SERVER_URL='",(0,r.jsx)(i.a,{href:"http://ranger-server:6080",children:"http://ranger-server:6080"}),"' -e RANGER_HIVE_REPOSITORY_NAME='hiveDev' -e RANGER_HDFS_REPOSITORY_NAME='hdfsDev' ... datastrato/gravitino-ci-hive:0.1.13"]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(i.li,{children:["\n",(0,r.jsx)(i.p,{children:"datastrato/gravitino-ci-hive:0.1.12"}),"\n",(0,r.jsxs)(i.ul,{children:["\n",(0,r.jsx)(i.li,{children:"Shrink hive Docker image size by 420MB"}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(i.li,{children:["\n",(0,r.jsx)(i.p,{children:"datastrato/gravitino-ci-hive:0.1.11"}),"\n",(0,r.jsxs)(i.ul,{children:["\n",(0,r.jsxs)(i.li,{children:["Remove ",(0,r.jsx)(i.code,{children:"yarn"})," from the startup script; Remove ",(0,r.jsx)(i.code,{children:"yarn-site.xml"})," and ",(0,r.jsx)(i.code,{children:"yarn-env.sh"})," files;"]}),"\n",(0,r.jsxs)(i.li,{children:["Change the value of ",(0,r.jsx)(i.code,{children:"mapreduce.framework.name"})," from ",(0,r.jsx)(i.code,{children:"yarn"})," to ",(0,r.jsx)(i.code,{children:"local"})," in the ",(0,r.jsx)(i.code,{children:"mapred-site.xml"})," file."]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(i.li,{children:["\n",(0,r.jsx)(i.p,{children:"datastrato/gravitino-ci-hive:0.1.10"}),"\n",(0,r.jsxs)(i.ul,{children:["\n",(0,r.jsx)(i.li,{children:"Remove SSH service from the startup script."}),"\n",(0,r.jsxs)(i.li,{children:["Use ",(0,r.jsx)(i.code,{children:"hadoop-daemon.sh"})," to start HDFS services."]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(i.li,{children:["\n",(0,r.jsx)(i.p,{children:"datastrato/gravitino-ci-hive:0.1.9"}),"\n",(0,r.jsxs)(i.ul,{children:["\n",(0,r.jsx)(i.li,{children:"Remove cache after installing packages."}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(i.li,{children:["\n",(0,r.jsx)(i.p,{children:"datastrato/gravitino-ci-hive:0.1.8"}),"\n",(0,r.jsxs)(i.ul,{children:["\n",(0,r.jsxs)(i.li,{children:["Change the value of ",(0,r.jsx)(i.code,{children:"hive.server2.enable.doAs"})," to ",(0,r.jsx)(i.code,{children:"true"})]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(i.li,{children:["\n",(0,r.jsx)(i.p,{children:"datastrato/gravitino-ci-hive:0.1.7"}),"\n",(0,r.jsxs)(i.ul,{children:["\n",(0,r.jsx)(i.li,{children:"Download MySQL JDBC driver before building the Docker image"}),"\n",(0,r.jsxs)(i.li,{children:["Set ",(0,r.jsx)(i.code,{children:"hdfs"})," as HDFS superuser group"]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(i.li,{children:["\n",(0,r.jsx)(i.p,{children:"datastrato/gravitino-ci-hive:0.1.6"}),"\n",(0,r.jsxs)(i.ul,{children:["\n",(0,r.jsx)(i.li,{children:"No starting YARN when container startup"}),"\n",(0,r.jsxs)(i.li,{children:["Removed expose ports:","\n",(0,r.jsxs)(i.ul,{children:["\n",(0,r.jsxs)(i.li,{children:[(0,r.jsx)(i.code,{children:"22"})," SSH"]}),"\n",(0,r.jsxs)(i.li,{children:[(0,r.jsx)(i.code,{children:"8088"})," YARN Service"]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(i.li,{children:["\n",(0,r.jsx)(i.p,{children:"datastrato/gravitino-ci-hive:0.1.5"}),"\n",(0,r.jsxs)(i.ul,{children:["\n",(0,r.jsxs)(i.li,{children:["Rollback ",(0,r.jsx)(i.code,{children:"Map container hostname to 127.0.0.1 before starting Hadoop"})," of ",(0,r.jsx)(i.code,{children:"datastrato/gravitino-ci-hive:0.1.4"})]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(i.li,{children:["\n",(0,r.jsx)(i.p,{children:"datastrato/gravitino-ci-hive:0.1.4"}),"\n",(0,r.jsxs)(i.ul,{children:["\n",(0,r.jsxs)(i.li,{children:["Configure HDFS DataNode data transfer address to be ",(0,r.jsx)(i.code,{children:"0.0.0.0:50010"})]}),"\n",(0,r.jsxs)(i.li,{children:["Map the container hostname to ",(0,r.jsx)(i.code,{children:"127.0.0.1"})," before starting Hadoop"]}),"\n",(0,r.jsxs)(i.li,{children:["Expose ",(0,r.jsx)(i.code,{children:"50010"})," port for the HDFS DataNode"]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(i.li,{children:["\n",(0,r.jsx)(i.p,{children:"datastrato/gravitino-ci-hive:0.1.3"}),"\n",(0,r.jsxs)(i.ul,{children:["\n",(0,r.jsxs)(i.li,{children:["Change MySQL bind-address from ",(0,r.jsx)(i.code,{children:"127.0.0.1"})," to ",(0,r.jsx)(i.code,{children:"0.0.0.0"})]}),"\n",(0,r.jsxs)(i.li,{children:["Add ",(0,r.jsx)(i.code,{children:"iceberg"})," to MySQL users with password ",(0,r.jsx)(i.code,{children:"iceberg"})]}),"\n",(0,r.jsxs)(i.li,{children:["Export ",(0,r.jsx)(i.code,{children:"3306"})," port for MySQL"]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(i.li,{children:["\n",(0,r.jsx)(i.p,{children:"datastrato/gravitino-ci-hive:0.1.2"}),"\n",(0,r.jsxs)(i.ul,{children:["\n",(0,r.jsxs)(i.li,{children:["Based on ",(0,r.jsx)(i.code,{children:"datastrato/gravitino-ci-hive:0.1.1"})]}),"\n",(0,r.jsxs)(i.li,{children:["Modify ",(0,r.jsx)(i.code,{children:"fs.defaultFS"})," from ",(0,r.jsx)(i.code,{children:"local"})," to ",(0,r.jsx)(i.code,{children:"0.0.0.0"})," in the ",(0,r.jsx)(i.code,{children:"core-site.xml"})," file."]}),"\n",(0,r.jsxs)(i.li,{children:["Expose ",(0,r.jsx)(i.code,{children:"9000"})," port in the ",(0,r.jsx)(i.code,{children:"Dockerfile"})," file."]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(i.li,{children:["\n",(0,r.jsx)(i.p,{children:"datastrato/gravitino-ci-hive:0.1.1"}),"\n",(0,r.jsxs)(i.ul,{children:["\n",(0,r.jsxs)(i.li,{children:["Based on ",(0,r.jsx)(i.code,{children:"datastrato/gravitino-ci-hive:0.1.0"})]}),"\n",(0,r.jsxs)(i.li,{children:["Modify HDFS/YARN/HIVE ",(0,r.jsx)(i.code,{children:"MaxPermSize"})," from ",(0,r.jsx)(i.code,{children:"8GB"})," to ",(0,r.jsx)(i.code,{children:"128MB"})]}),"\n",(0,r.jsxs)(i.li,{children:["Modify ",(0,r.jsx)(i.code,{children:"HADOOP_HEAPSIZE"})," from ",(0,r.jsx)(i.code,{children:"8192"})," to ",(0,r.jsx)(i.code,{children:"128"})]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(i.li,{children:["\n",(0,r.jsx)(i.p,{children:"datastrato/gravitino-ci-hive:0.1.0"}),"\n",(0,r.jsxs)(i.ul,{children:["\n",(0,r.jsxs)(i.li,{children:["Docker image ",(0,r.jsx)(i.code,{children:"datastrato/gravitino-ci-hive:0.1.0"})]}),"\n",(0,r.jsx)(i.li,{children:(0,r.jsx)(i.code,{children:"hadoop-2.7.3"})}),"\n",(0,r.jsx)(i.li,{children:(0,r.jsx)(i.code,{children:"hive-2.3.9"})}),"\n",(0,r.jsxs)(i.li,{children:["Expose ports:","\n",(0,r.jsxs)(i.ul,{children:["\n",(0,r.jsxs)(i.li,{children:[(0,r.jsx)(i.code,{children:"22"})," SSH"]}),"\n",(0,r.jsxs)(i.li,{children:[(0,r.jsx)(i.code,{children:"9000"})," HDFS defaultFS"]}),"\n",(0,r.jsxs)(i.li,{children:[(0,r.jsx)(i.code,{children:"50070"})," HDFS NameNode"]}),"\n",(0,r.jsxs)(i.li,{children:[(0,r.jsx)(i.code,{children:"50075"})," HDFS DataNode HTTP server"]}),"\n",(0,r.jsxs)(i.li,{children:[(0,r.jsx)(i.code,{children:"50010"})," HDFS DataNode data transfer"]}),"\n",(0,r.jsxs)(i.li,{children:[(0,r.jsx)(i.code,{children:"8088"})," YARN Service"]}),"\n",(0,r.jsxs)(i.li,{children:[(0,r.jsx)(i.code,{children:"9083"})," Hive metastore"]}),"\n",(0,r.jsxs)(i.li,{children:[(0,r.jsx)(i.code,{children:"10000"})," HiveServer2"]}),"\n",(0,r.jsxs)(i.li,{children:[(0,r.jsx)(i.code,{children:"10002"})," HiveServer2 HTTP"]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(i.h2,{id:"apache-gravitino-ci-trino-image",children:"Apache Gravitino CI Trino image"}),"\n",(0,r.jsx)(i.p,{children:"You can use this image to test Trino."}),"\n",(0,r.jsx)(i.p,{children:"Changelog"}),"\n",(0,r.jsxs)(i.ul,{children:["\n",(0,r.jsxs)(i.li,{children:["\n",(0,r.jsxs)(i.p,{children:["apache/gravitino-ci",":trino-0",".1.6 (Switch to Apache official DockerHub repository)"]}),"\n",(0,r.jsxs)(i.ul,{children:["\n",(0,r.jsx)(i.li,{children:"Use Gravitino release 0.6.0 Dockerfile to build the image."}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(i.li,{children:["\n",(0,r.jsx)(i.p,{children:"datastrato/gravitino-ci-trino:0.1.6"}),"\n",(0,r.jsxs)(i.ul,{children:["\n",(0,r.jsx)(i.li,{children:"Upgrade trino:426 to trino:435"}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(i.li,{children:["\n",(0,r.jsx)(i.p,{children:"datastrato/gravitino-ci-trino:0.1.5"}),"\n",(0,r.jsxs)(i.ul,{children:["\n",(0,r.jsx)(i.li,{children:"Add check for the version of gravitino-trino-connector"}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(i.li,{children:["\n",(0,r.jsx)(i.p,{children:"datastrato/gravitino-ci-trino:0.1.4"}),"\n",(0,r.jsxs)(i.ul,{children:["\n",(0,r.jsxs)(i.li,{children:["Change ",(0,r.jsx)(i.code,{children:"-Xmx1G"})," to ",(0,r.jsx)(i.code,{children:"-Xmx2G"})," in the config file ",(0,r.jsx)(i.code,{children:"/etc/trino/jvm.config"})]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(i.li,{children:["\n",(0,r.jsx)(i.p,{children:"datastrato/gravitino-ci-trino:0.1.3"}),"\n",(0,r.jsxs)(i.ul,{children:["\n",(0,r.jsxs)(i.li,{children:["Remove copy content in folder ",(0,r.jsx)(i.code,{children:"gravitino-trino-connector"})," to plugin folder ",(0,r.jsx)(i.code,{children:"/usr/lib/trino/plugin/gravitino"})]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(i.li,{children:["\n",(0,r.jsx)(i.p,{children:"datastrato/gravitino-ci-trino:0.1.2"}),"\n",(0,r.jsxs)(i.ul,{children:["\n",(0,r.jsxs)(i.li,{children:["Copy JDBC driver 'mysql-connector-java' and 'postgres' to ",(0,r.jsx)(i.code,{children:"/usr/lib/trino/iceberg/"})," folder"]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(i.li,{children:["\n",(0,r.jsx)(i.p,{children:"datastrato/gravitino-ci-trino:0.1.0"}),"\n",(0,r.jsxs)(i.ul,{children:["\n",(0,r.jsxs)(i.li,{children:["Docker image ",(0,r.jsx)(i.code,{children:"datastrato/gravitino-ci-trino:0.1.0"})]}),"\n",(0,r.jsxs)(i.li,{children:["Based on ",(0,r.jsx)(i.code,{children:"trinodb/trino:426"})," and removed some unused plugins from it."]}),"\n",(0,r.jsxs)(i.li,{children:["Expose ports:","\n",(0,r.jsxs)(i.ul,{children:["\n",(0,r.jsxs)(i.li,{children:[(0,r.jsx)(i.code,{children:"8080"})," Trino JDBC port"]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(i.h2,{id:"apache-gravitino-ci-doris-image",children:"Apache Gravitino CI Doris image"}),"\n",(0,r.jsx)(i.p,{children:"You can use this image to test Apache Doris."}),"\n",(0,r.jsx)(i.p,{children:"Changelog"}),"\n",(0,r.jsxs)(i.ul,{children:["\n",(0,r.jsxs)(i.li,{children:["\n",(0,r.jsxs)(i.p,{children:["apache/gravitino-ci",":doris-0",".1.5 (Switch to Apache official DockerHub repository)"]}),"\n",(0,r.jsxs)(i.ul,{children:["\n",(0,r.jsx)(i.li,{children:"Use Gravitino release 0.6.0 Dockerfile to build the image."}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(i.li,{children:["\n",(0,r.jsx)(i.p,{children:"datastrato/gravitino-ci-doris:0.1.5"}),"\n",(0,r.jsxs)(i.ul,{children:["\n",(0,r.jsx)(i.li,{children:"Remove the chmod command in the Dockerfile to decrease the size of the Docker image."}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(i.li,{children:["\n",(0,r.jsx)(i.p,{children:"datastrato/gravitino-ci-doris:0.1.4"}),"\n",(0,r.jsxs)(i.ul,{children:["\n",(0,r.jsx)(i.li,{children:"remove chmod in start.sh to accelerate the startup speed"}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(i.li,{children:["\n",(0,r.jsx)(i.p,{children:"datastrato/gravitino-ci-doris:0.1.3"}),"\n",(0,r.jsxs)(i.ul,{children:["\n",(0,r.jsx)(i.li,{children:"To adapt to the CI framework, don't exit container when start failed, logs are no longer printed to stdout."}),"\n",(0,r.jsxs)(i.li,{children:["Add ",(0,r.jsx)(i.code,{children:"report_disk_state_interval_seconds"})," config to decrease report interval."]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(i.li,{children:["\n",(0,r.jsx)(i.p,{children:"datastrato/gravitino-ci-doris:0.1.2"}),"\n",(0,r.jsxs)(i.ul,{children:["\n",(0,r.jsx)(i.li,{children:"Add a check for the status of Doris BE, add retry for adding BE nodes."}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(i.li,{children:["\n",(0,r.jsx)(i.p,{children:"datastrato/gravitino-ci-doris:0.1.1"}),"\n",(0,r.jsxs)(i.ul,{children:["\n",(0,r.jsxs)(i.li,{children:["Optimize ",(0,r.jsx)(i.code,{children:"start.sh"}),", add disk space check before starting Doris, exit when FE or BE start failed, add log to stdout"]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(i.li,{children:["\n",(0,r.jsx)(i.p,{children:"datastrato/gravitino-ci-doris:0.1.0"}),"\n",(0,r.jsxs)(i.ul,{children:["\n",(0,r.jsxs)(i.li,{children:["Docker image ",(0,r.jsx)(i.code,{children:"datastrato/gravitino-ci-doris:0.1.0"})]}),"\n",(0,r.jsx)(i.li,{children:"Start Doris BE & FE in one container"}),"\n",(0,r.jsxs)(i.li,{children:["Please set table properties ",(0,r.jsx)(i.code,{children:'"replication_num" = "1"'})," when creating a table in Doris, because the default replication number is 3, but the Doris container only has one BE."]}),"\n",(0,r.jsxs)(i.li,{children:["Username: ",(0,r.jsx)(i.code,{children:"root"}),", Password: N/A (password is empty)"]}),"\n",(0,r.jsxs)(i.li,{children:["Expose ports:","\n",(0,r.jsxs)(i.ul,{children:["\n",(0,r.jsxs)(i.li,{children:[(0,r.jsx)(i.code,{children:"8030"})," Doris FE HTTP port"]}),"\n",(0,r.jsxs)(i.li,{children:[(0,r.jsx)(i.code,{children:"9030"})," Doris FE MySQL server port"]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(i.h2,{id:"apache-gravitino-ci-apache-ranger-image",children:"Apache Gravitino CI Apache Ranger image"}),"\n",(0,r.jsx)(i.p,{children:"You can use this image to control Trino's permissions."}),"\n",(0,r.jsx)(i.p,{children:"Changelog"}),"\n",(0,r.jsxs)(i.ul,{children:["\n",(0,r.jsxs)(i.li,{children:["\n",(0,r.jsxs)(i.p,{children:["apache/gravitino-ci",":ranger-0",".1.1 (Switch to Apache official DockerHub repository)"]}),"\n",(0,r.jsxs)(i.ul,{children:["\n",(0,r.jsx)(i.li,{children:"Use Gravitino release 0.6.0 Dockerfile to build the image."}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(i.li,{children:["\n",(0,r.jsx)(i.p,{children:"datastrato/gravitino-ci-ranger:0.1.1"}),"\n",(0,r.jsxs)(i.ul,{children:["\n",(0,r.jsx)(i.li,{children:"Docker image datastrato/gravitino-ci-ranger:0.1.1"}),"\n",(0,r.jsxs)(i.li,{children:["Use ",(0,r.jsx)(i.code,{children:"ranger-admin"})," release from ",(0,r.jsx)(i.code,{children:"datastrato/apache-ranger:2.4.0"})," to build docker image."]}),"\n",(0,r.jsxs)(i.li,{children:["Remove unnecessary hack in ",(0,r.jsx)(i.code,{children:"start-ranger-service.sh"}),"."]}),"\n",(0,r.jsxs)(i.li,{children:["Reduce docker image build time from ",(0,r.jsx)(i.code,{children:"~1h"})," to ",(0,r.jsx)(i.code,{children:"~5min"}),"."]}),"\n",(0,r.jsxs)(i.li,{children:["How to debug Ranger admin service:","\n",(0,r.jsxs)(i.ul,{children:["\n",(0,r.jsxs)(i.li,{children:["Use ",(0,r.jsx)(i.code,{children:"docker exec -it <container_id> bash"})," to enter the docker container."]}),"\n",(0,r.jsxs)(i.li,{children:["Add these context ",(0,r.jsx)(i.code,{children:"export JAVA_OPTS=-agentlib:jdwp=transport=dt_socket,server=y,suspend=n,address=*:5001"})," into ",(0,r.jsx)(i.code,{children:"/opt/ranger-admin/ews/webapp/WEB-INF/classes/conf/ranger-admin-env-debug.sh"})," in the docker container."]}),"\n",(0,r.jsxs)(i.li,{children:["Execute ",(0,r.jsx)(i.code,{children:"./opt/ranger-admin/stop-ranger-admin.sh"})," and ",(0,r.jsx)(i.code,{children:"./opt/ranger-admin/start-ranger-admin.sh"})," to restart Ranger admin."]}),"\n",(0,r.jsxs)(i.li,{children:["Clone the ",(0,r.jsx)(i.code,{children:"Apache Ranger"})," project from GiHub and checkout the ",(0,r.jsx)(i.code,{children:"2.4.0"})," release."]}),"\n",(0,r.jsxs)(i.li,{children:["Create a remote debug configuration (",(0,r.jsx)(i.code,{children:"Use model classpath"})," = ",(0,r.jsx)(i.code,{children:"EmbeddedServer"}),") in your IDE and connect to the Ranger admin container."]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(i.li,{children:["\n",(0,r.jsx)(i.p,{children:"datastrato/gravitino-ci-ranger:0.1.0"}),"\n",(0,r.jsxs)(i.ul,{children:["\n",(0,r.jsxs)(i.li,{children:["Docker image ",(0,r.jsx)(i.code,{children:"datastrato/gravitino-ci-ranger:0.1.0"})]}),"\n",(0,r.jsx)(i.li,{children:"Support Apache Ranger 2.4.0"}),"\n",(0,r.jsxs)(i.li,{children:["Use environment variable ",(0,r.jsx)(i.code,{children:"RANGER_PASSWORD"})," to set up Apache Ranger admin password, Please notice Apache Ranger Password should be minimum 8 characters with min one alphabet and one numeric."]}),"\n",(0,r.jsxs)(i.li,{children:["Expose ports:","\n",(0,r.jsxs)(i.ul,{children:["\n",(0,r.jsxs)(i.li,{children:[(0,r.jsx)(i.code,{children:"6080"})," Apache Ranger admin port"]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n"]})]})}function h(e={}){const{wrapper:i}={...(0,s.R)(),...e.components};return i?(0,r.jsx)(i,{...e,children:(0,r.jsx)(t,{...e})}):t(e)}}}]);