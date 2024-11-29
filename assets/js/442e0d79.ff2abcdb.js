"use strict";(self.webpackChunkapache_website_template=self.webpackChunkapache_website_template||[]).push([[70296],{35733:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>a,contentTitle:()=>t,default:()=>h,frontMatter:()=>o,metadata:()=>l,toc:()=>d});var s=i(13274),r=i(8438);const o={title:"How to build Apache Gravitino",slug:"/how-to-build",license:"This software is licensed under the Apache License version 2."},t=void 0,l={id:"how-to-build",title:"How to build Apache Gravitino",description:"- Prerequisites",source:"@site/versioned_docs/version-0.7.0-incubating/how-to-build.md",sourceDirName:".",slug:"/how-to-build",permalink:"/docs/0.7.0-incubating/how-to-build",draft:!1,unlisted:!1,editUrl:"https://github.com/apache/gravitino-site/tree/main/docs/how-to-build.md",tags:[],version:"0.7.0-incubating",lastUpdatedBy:"FANNG",lastUpdatedAt:1732866794e3,frontMatter:{title:"How to build Apache Gravitino",slug:"/how-to-build",license:"This software is licensed under the Apache License version 2."},sidebar:"docs",previous:{title:"Delete topic",permalink:"/docs/0.7.0-incubating/api/rest/drop-topic"},next:{title:"How to test",permalink:"/docs/0.7.0-incubating/how-to-test"}},a={},d=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Quick start",id:"quick-start",level:2},{value:"How to build Apache Gravitino on Windows (Using WSL)",id:"how-to-build-apache-gravitino-on-windows-using-wsl",level:2},{value:"Download WSL (Ubuntu)",id:"download-wsl-ubuntu",level:3},{value:"Update package list and install necessary packages",id:"update-package-list-and-install-necessary-packages",level:3},{value:"Download and setup Java SDK 17 (11 or 8 also works)",id:"download-and-setup-java-sdk-17-11-or-8-also-works",level:3},{value:"Install Docker",id:"install-docker",level:3},{value:"Install Python 3.11",id:"install-python-311",level:3},{value:"Download Apache Gravitino project to WSL",id:"download-apache-gravitino-project-to-wsl",level:3}];function c(e){const n={a:"a",admonition:"admonition",code:"code",em:"em",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"#prerequisites",children:"Prerequisites"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"#quick-start",children:"Quick start"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"#how-to-build-apache-gravitino-on-windows-using-wsl",children:"How to Build Apache Gravitino on Windows (Using WSL)"})}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Linux or macOS operating system"}),"\n",(0,s.jsx)(n.li,{children:"Git"}),"\n",(0,s.jsx)(n.li,{children:"A Java Development Kit, version 8 to 17, installed in your environment to launch Gradle"}),"\n",(0,s.jsx)(n.li,{children:"Python 3.8, 3.9, 3.10, or 3.11 to build the Gravitino Python client"}),"\n",(0,s.jsx)(n.li,{children:"Optionally, Docker to run integration tests"}),"\n"]}),"\n",(0,s.jsx)(n.admonition,{title:"Please read the following notes before trying to build Gravitino.",type:"info",children:(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Gravitino requires a minimum of JDK8, and supports up to JDK17 to run Gradle, so you need to install a JDK, version 8 to 17, to launch the build environment."}),"\n",(0,s.jsx)(n.li,{children:"Gravitino itself supports using JDK8, 11, or 17 to build. The Gravitino Trino connector uses\nJDK17 to build (to avoid vendor-related issues on some platforms, Gravitino uses the specified Amazon Corretto OpenJDK 17 to build the Trino connector on macOS).\nYou don't have to preinstall the specified JDK environment, as Gradle detects the JDK version needed and downloads it automatically."}),"\n",(0,s.jsxs)(n.li,{children:["Gravitino uses the Gradle Java Toolchain to detect and manage JDK versions, and it checks the\ninstalled JDK by running the ",(0,s.jsx)(n.code,{children:"./gradlew javaToolchains"})," command. See ",(0,s.jsx)(n.a,{href:"https://docs.gradle.org/current/userguide/toolchains.html#sec:java_toolchain",children:"Gradle Java Toolchain"}),"."]}),"\n",(0,s.jsxs)(n.li,{children:["Gravitino excludes all Docker-related tests by default. To run Docker-related tests, make sure you have installed\nDocker in your environment and either (1) set ",(0,s.jsx)(n.code,{children:"skipDockerTests=false"})," in the ",(0,s.jsx)(n.code,{children:"gradle.properties"})," file (or\nuse ",(0,s.jsx)(n.code,{children:"-PskipDockerTests=false"})," in the command) or (2) ",(0,s.jsx)(n.code,{children:"export SKIP_DOCKER_TESTS=false"})," in shell. Otherwise, all tests requiring Docker will be skipped."]}),"\n",(0,s.jsxs)(n.li,{children:["macOS uses ",(0,s.jsx)(n.code,{children:"docker-connector"})," to make the Gravitino Trino connector work with Docker\nfor macOS. See ",(0,s.jsx)(n.a,{href:"https://github.com/wenjunxiao/mac-docker-connector",children:"docker-connector"}),", ",(0,s.jsx)(n.code,{children:"$GRAVITINO_HOME/dev/docker/tools/mac-docker-connector.sh"}),", and\n",(0,s.jsx)(n.code,{children:"$GRAVITINO_HOME/dev/docker/tools/README.md"})," for more details."]}),"\n",(0,s.jsxs)(n.li,{children:["You can use OrbStack as a replacement for Docker for macOS. See\n",(0,s.jsx)(n.a,{href:"https://orbstack.dev/",children:"OrbStack"}),". With OrbStack, you can run Gravitino integration tests\nwithout needing to install ",(0,s.jsx)(n.code,{children:"docker-connector"}),"."]}),"\n"]})}),"\n",(0,s.jsx)(n.h2,{id:"quick-start",children:"Quick start"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Clone the Gravitino project."}),"\n",(0,s.jsx)(n.p,{children:"If you want to contribute to this open-source project, please fork the project on GitHub first. After forking, clone the forked project to your local environment, make your changes, and submit a pull request (PR)."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",children:"git clone git@github.com:apache/gravitino.git\n"})}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Build the Gravitino project. Running this for the first time can take 15 minutes or more."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",children:"cd gravitino\n./gradlew build\n"})}),"\n",(0,s.jsxs)(n.p,{children:["The default specified JDK version is 8, but if you want to use JDK 11 or 17 to build,\nmodify the property ",(0,s.jsx)(n.code,{children:"jdkVersion"})," to 11 or 17 in the ",(0,s.jsx)(n.code,{children:"gradle.properties"})," file, or specify the version\nwith ",(0,s.jsx)(n.code,{children:"-P"}),", like:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",children:"./gradlew build -PjdkVersion=11\n"})}),"\n",(0,s.jsx)(n.p,{children:"Or:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",children:"./gradlew build -PjdkVersion=17\n"})}),"\n",(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.code,{children:"./gradlew build"})," command builds all the Gravitino components, including Gravitino\nserver, Java and Python clients, Trino and Spark connectors, and more."]}),"\n",(0,s.jsxs)(n.p,{children:["For the Python client, the ",(0,s.jsx)(n.code,{children:"./gradlew build"})," command builds the Python client with Python 3.8\nby default. If you want to use Python 3.9, 3.10 or 3.11 to build, please modify the property\n",(0,s.jsx)(n.code,{children:"pythonVersion"})," to 3.9, 3.10 or 3.11 in the ",(0,s.jsx)(n.code,{children:"gradle.properties"})," file, or specify the version\nwith ",(0,s.jsx)(n.code,{children:"-P"}),", like:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",children:"./gradlew build -PpythonVersion=3.9\n"})}),"\n",(0,s.jsx)(n.p,{children:"Or:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",children:"./gradlew build -PpythonVersion=3.10\n"})}),"\n",(0,s.jsx)(n.p,{children:"Or:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",children:"./gradlew build -PpythonVersion=3.11\n"})}),"\n",(0,s.jsx)(n.p,{children:"If you want to build some modules alone, like Spark connector, you can use Gradle build task\nwith specific module name, like:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",children:"./gradlew spark-connector:spark-runtime-3.4:build -PscalaVersion=2.12\n"})}),"\n",(0,s.jsxs)(n.p,{children:["This creates ",(0,s.jsx)(n.code,{children:"gravitino-spark-connector-runtime-{sparkVersion}_{scalaVersion}-{version}.jar"}),"\nunder the ",(0,s.jsx)(n.code,{children:"spark-connector/v3.4/spark-runtime/build/libs"})," directory. You could replace ",(0,s.jsx)(n.code,{children:"3.4"})," with\n",(0,s.jsx)(n.code,{children:"3.3"})," or ",(0,s.jsx)(n.code,{children:"3.5"})," to specify different Spark versions, and replace ",(0,s.jsx)(n.code,{children:"2.12"})," with ",(0,s.jsx)(n.code,{children:"2.13"})," for different Scala\nversions. The default Scala version is ",(0,s.jsx)(n.code,{children:"2.12"})," if not specifying ",(0,s.jsx)(n.code,{children:"-PscalaVersion"}),"."]}),"\n",(0,s.jsx)(n.admonition,{type:"info",children:(0,s.jsx)(n.p,{children:"Gravitino Spark connector doesn't support Scala 2.13 for Spark 3.3."})}),"\n",(0,s.jsxs)(n.admonition,{type:"note",children:[(0,s.jsxs)(n.p,{children:["The first time you build the project, downloading the dependencies may take a while. You can add\n",(0,s.jsx)(n.code,{children:"-x test"})," to skip the tests using ",(0,s.jsx)(n.code,{children:"./gradlew build -x test"}),"."]}),(0,s.jsx)(n.p,{children:"The built Gravitino libraries are Java 8 compatible and verified under Java 8, 11, and 17\nenvironments. You can use Java 8, 11, or 17 runtimes to run the Gravitino server, no matter which\nJDK version you used to build the project."}),(0,s.jsxs)(n.p,{children:["The built jars are under the ",(0,s.jsx)(n.code,{children:"build/libs"})," directory of the modules. You can publish them to your\nMaven repository to use them in your project."]})]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Get the Gravitino server binary package."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",children:"./gradlew compileDistribution\n"})}),"\n",(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.code,{children:"compileDistribution"})," command creates a ",(0,s.jsx)(n.code,{children:"distribution"})," directory in the Gravitino root directory."]}),"\n",(0,s.jsxs)(n.p,{children:["The directory structure of the ",(0,s.jsx)(n.code,{children:"distribution"})," directory is as follows:"]}),"\n",(0,s.jsx)(n.admonition,{type:"note",children:(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.code,{children:"./gradlew clean"})," command deletes the ",(0,s.jsx)(n.code,{children:"distribution"})," directory."]})}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Assemble the Gravitino server distribution package."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",children:"./gradlew assembleDistribution\n"})}),"\n",(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.code,{children:"assembleDistribution"})," command creates ",(0,s.jsx)(n.code,{children:"gravitino-{version}-bin.tar.gz"})," and ",(0,s.jsx)(n.code,{children:"gravitino-{version}-bin.tar.gz.sha256"})," under the ",(0,s.jsx)(n.code,{children:"distribution"})," directory."]}),"\n",(0,s.jsx)(n.p,{children:"You can deploy them to your production environment."}),"\n",(0,s.jsx)(n.admonition,{type:"note",children:(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.code,{children:"gravitino-{version}-bin.tar.gz"})," file is the Gravitino ",(0,s.jsx)(n.strong,{children:"server"})," distribution package, and the\n",(0,s.jsx)(n.code,{children:"gravitino-{version}-bin.tar.gz.sha256"})," file is the sha256 checksum file for the Gravitino\nserver distribution package."]})}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Assemble the Gravitino Trino connector package"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",children:" ./gradlew assembleTrinoConnector\n"})}),"\n",(0,s.jsx)(n.p,{children:"or"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",children:"./gradlew assembleDistribution\n"})}),"\n",(0,s.jsxs)(n.p,{children:["This creates ",(0,s.jsx)(n.code,{children:"gravitino-trino-connector-{version}.tar.gz"})," and\n",(0,s.jsx)(n.code,{children:"gravitino-trino-connector-{version}.tar.gz.sha256"})," under the ",(0,s.jsx)(n.code,{children:"distribution"})," directory. You\ncan uncompress and deploy it to Trino to use the Gravitino Trino connector."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Assemble the Gravitino Iceberg REST server package"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",children:" ./gradlew assembleIcebergRESTServer\n"})}),"\n",(0,s.jsxs)(n.p,{children:["This creates ",(0,s.jsx)(n.code,{children:"gravitino-iceberg-rest-server-{version}.tar.gz"})," and ",(0,s.jsx)(n.code,{children:"gravitino-iceberg-rest-server-{version}.tar.gz.sha256"})," under the ",(0,s.jsx)(n.code,{children:"distribution"})," directory. You can uncompress and deploy it to use the Gravitino Iceberg REST server."]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"how-to-build-apache-gravitino-on-windows-using-wsl",children:"How to build Apache Gravitino on Windows (Using WSL)"}),"\n",(0,s.jsx)(n.h3,{id:"download-wsl-ubuntu",children:"Download WSL (Ubuntu)"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"On Windows:"})}),"\n",(0,s.jsxs)(n.p,{children:["Refer to this guide for installation: ",(0,s.jsx)(n.a,{href:"https://learn.microsoft.com/en-us/windows/wsl/install",children:"WSL Installation Guide"})]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.em,{children:"Note: Ubuntu 22.04 can successfully run Gravitino"})}),"\n",(0,s.jsx)(n.p,{children:"This step involves setting up your Windows machine's Windows Subsystem for Linux (WSL). WSL allows you to run a Linux distribution alongside Windows, providing a Linux-like environment for development."}),"\n",(0,s.jsx)(n.h3,{id:"update-package-list-and-install-necessary-packages",children:"Update package list and install necessary packages"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"On Ubuntu (WSL):"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",children:"sudo apt update\nsudo apt install apt-transport-https ca-certificates curl software-properties-common\n"})}),"\n",(0,s.jsx)(n.p,{children:"Updating the package list ensures you have the latest information on the newest versions of packages and dependencies. Installing the necessary packages lets your system download and manage additional software securely."}),"\n",(0,s.jsx)(n.h3,{id:"download-and-setup-java-sdk-17-11-or-8-also-works",children:"Download and setup Java SDK 17 (11 or 8 also works)"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"On Ubuntu (WSL):"})}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["Edit your ",(0,s.jsx)(n.code,{children:"~/.bashrc"})," file using any editor. Here, ",(0,s.jsx)(n.code,{children:"vim"})," is used:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",children:"vim ~/.bashrc\n"})}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["Add the following lines at the end of the file. Replace ",(0,s.jsx)(n.code,{children:"/usr/lib/jvm/java-11-openjdk-amd64"})," with your actual Java installation path:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sh",children:'export JAVA_HOME="/usr/lib/jvm/java-11-openjdk-amd64"\nexport PATH=$PATH:$JAVA_HOME/bin\n'})}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["Save and quit in vim using ",(0,s.jsx)(n.code,{children:":wq"}),"."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["Run ",(0,s.jsx)(n.code,{children:"source ~/.bashrc"})," to update your shell session's environment variables."]}),"\n",(0,s.jsxs)(n.p,{children:["Editing the ",(0,s.jsx)(n.code,{children:"~/.bashrc"})," file allows you to set environment variables available in every terminal session. Setting ",(0,s.jsx)(n.code,{children:"JAVA_HOME"})," and updating ",(0,s.jsx)(n.code,{children:"PATH"})," ensures that your system uses the correct Java version for development."]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"install-docker",children:"Install Docker"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"On Ubuntu (WSL):"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",children:'curl -fsSL https\ncurl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo apt-key add -\nsudo add-apt-repository "deb [arch=amd64] https://download.docker.com/linux/ubuntu $(lsb_release -cs) stable"\nsudo apt update\nsudo apt install docker-ce\nsudo service docker start\nsudo docker run hello-world\nsudo usermod -aG docker $USER\n'})}),"\n",(0,s.jsxs)(n.p,{children:["These commands install Docker. Running ",(0,s.jsx)(n.code,{children:"hello-world"})," verifies the installation. Adding your user to the Docker group allows you to run Docker commands without ",(0,s.jsx)(n.code,{children:"sudo"}),"."]}),"\n",(0,s.jsx)(n.h3,{id:"install-python-311",children:"Install Python 3.11"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"On Ubuntu (WSL):"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",children:"sudo apt update\nsudo apt install software-properties-common\nsudo add-apt-repository ppa:deadsnakes/ppa\nsudo apt update\nsudo apt install python3.11\npython3.11 --version\n"})}),"\n",(0,s.jsx)(n.p,{children:"These commands add a repository that provides the latest Python versions and installs Python 3.11."}),"\n",(0,s.jsx)(n.h3,{id:"download-apache-gravitino-project-to-wsl",children:"Download Apache Gravitino project to WSL"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"On Ubuntu (WSL):"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",children:"git clone https://github.com/apache/gravitino.git\ncd gravitino\n./gradlew compileDistribution -x test\ncd distribution/package/\n./bin/gravitino.sh start\n"})}),"\n",(0,s.jsxs)(n.p,{children:["Access ",(0,s.jsx)(n.a,{href:"http://localhost:8090",children:"http://localhost:8090"})]}),"\n",(0,s.jsx)(n.p,{children:"Building the Gravitino project compiles the necessary components, and starting the server allows you to access the application in your browser."}),"\n",(0,s.jsxs)(n.p,{children:["Please refer to ",(0,s.jsx)(n.a,{href:"https://github.com/apache/gravitino/blob/main/CONTRIBUTING.md",children:"CONTRIBUTING.md"})," for instructions on running the project using VSCode or IntelliJ on Windows."]}),"\n",(0,s.jsx)("img",{src:"https://analytics.apache.org/matomo.php?idsite=62&rec=1&bots=1&action_name=HowToBuild",alt:""})]})}function h(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}}}]);