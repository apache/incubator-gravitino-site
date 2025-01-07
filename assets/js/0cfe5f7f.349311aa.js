"use strict";(self.webpackChunkapache_website_template=self.webpackChunkapache_website_template||[]).push([[78685],{63441:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>d,default:()=>l,frontMatter:()=>s,metadata:()=>h,toc:()=>a});var i=n(13274),r=n(38112);const s={title:"How to authenticate",slug:"/security/how-to-authenticate",keyword:"security authentication oauth kerberos",license:"This software is licensed under the Apache License version 2."},d=void 0,h={id:"security/how-to-authenticate",title:"How to authenticate",description:"Authentication",source:"@site/docs/security/how-to-authenticate.md",sourceDirName:"security",slug:"/security/how-to-authenticate",permalink:"/docs/next/security/how-to-authenticate",draft:!1,unlisted:!1,editUrl:"https://github.com/apache/gravitino-site/tree/main/docs/security/how-to-authenticate.md",tags:[],version:"current",lastUpdatedBy:"Justin Mclean",lastUpdatedAt:1736293354e3,frontMatter:{title:"How to authenticate",slug:"/security/how-to-authenticate",keyword:"security authentication oauth kerberos",license:"This software is licensed under the Apache License version 2."},sidebar:"docs",previous:{title:"Authorization Push-down",permalink:"/docs/next/security/authorization-push-down"},next:{title:"How to use CORS",permalink:"/docs/next/security/how-to-use-cors"}},c={},a=[{value:"Authentication",id:"authentication",level:2},{value:"Simple mode",id:"simple-mode",level:3},{value:"OAuth mode",id:"oauth-mode",level:3},{value:"Kerberos mode",id:"kerberos-mode",level:3},{value:"Server configuration",id:"server-configuration",level:3},{value:"Example",id:"example",level:3}];function o(e){const t={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.h2,{id:"authentication",children:"Authentication"}),"\n",(0,i.jsxs)(t.p,{children:["Apache Gravitino supports three kinds of authentication mechanisms: simple, OAuth and Kerberos.\nIf you don't enable authentication for your client and server explicitly, you will use user ",(0,i.jsx)(t.code,{children:"anonymous"})," to access the server."]}),"\n",(0,i.jsx)(t.h3,{id:"simple-mode",children:"Simple mode"}),"\n",(0,i.jsxs)(t.p,{children:["If the client sets the simple mode, it will use the value of environment variable ",(0,i.jsx)(t.code,{children:"GRAVITINO_USER"})," as the user.\nIf the environment variable ",(0,i.jsx)(t.code,{children:"GRAVITINO_USER"})," in the client isn't set, the client uses the user logging in the machine that sends requests."]}),"\n",(0,i.jsxs)(t.p,{children:["For the client side, users can enable ",(0,i.jsx)(t.code,{children:"simple"})," mode by the following code:"]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-java",children:'GravitinoClient client = GravitinoClient.builder(uri)\n    .withMetalake("metalake")\n    .withSimpleAuth()\n    .build();\n'})}),"\n",(0,i.jsx)(t.p,{children:"Additionally, the username can be directly used as a parameter to create a client."}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-java",children:'GravitinoClient client = GravitinoClient.builder(uri)\n    .withMetalake("metalake")\n    .withSimpleAuth("test_user_name")\n    .build();\n'})}),"\n",(0,i.jsx)(t.h3,{id:"oauth-mode",children:"OAuth mode"}),"\n",(0,i.jsx)(t.p,{children:"Gravitino only supports external OAuth 2.0 servers. To enable OAuth mode, users should follow the steps below."}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsx)(t.p,{children:"First, users need to guarantee that the external correctly configured OAuth 2.0 server supports Bearer JWT."}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsxs)(t.p,{children:["Then, on the server side, users should set ",(0,i.jsx)(t.code,{children:"gravitino.authenticators"})," as ",(0,i.jsx)(t.code,{children:"oauth"})," and give\n",(0,i.jsx)(t.code,{children:"gravitino.authenticator.oauth.defaultSignKey"}),", ",(0,i.jsx)(t.code,{children:"gravitino.authenticator.oauth.serverUri"})," and\n",(0,i.jsx)(t.code,{children:"gravitino.authenticator.oauth.tokenPath"}),"  a proper value."]}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsxs)(t.p,{children:["Next, for the client side, users can enable ",(0,i.jsx)(t.code,{children:"OAuth"})," mode by the following code:"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-java",children:'DefaultOAuth2TokenProvider authDataProvider = DefaultOAuth2TokenProvider.builder()\n    .withUri("oauth server uri")\n    .withCredential("yy:xx")\n    .withPath("oauth/token")\n    .withScope("test")\n    .build();\n\nGravitinoClient client = GravitinoClient.builder(uri)\n    .withMetalake("metalake")\n    .withOAuth(authDataProvider)\n    .build();\n'})}),"\n",(0,i.jsx)(t.h3,{id:"kerberos-mode",children:"Kerberos mode"}),"\n",(0,i.jsxs)(t.p,{children:["To enable Kerberos mode, users need to guarantee that the server and client have the correct Kerberos configuration. In the server side, users should set ",(0,i.jsx)(t.code,{children:"gravitino.authenticators"})," as ",(0,i.jsx)(t.code,{children:"kerberos"})," and give\n",(0,i.jsx)(t.code,{children:"gravitino.authenticator.kerberos.principal"})," and ",(0,i.jsx)(t.code,{children:"gravitino.authenticator.kerberos.keytab"})," a proper value. For the client side, users can enable ",(0,i.jsx)(t.code,{children:"kerberos"})," mode by the following code:"]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-java",children:'// Use keytab to create KerberosTokenProvider\nKerberosTokenProvider provider = KerberosTokenProvider.builder()\n        .withClientPrincipal(clientPrincipal)\n        .withKeyTabFile(new File(keytabFile))\n        .build();\n\n// Use ticketCache to create KerberosTokenProvider\nKerberosTokenProvider provider = KerberosTokenProvider.builder()\n        .withClientPrincipal(clientPrincipal)\n        .build();        \n\nGravitinoClient client = GravitinoClient.builder(uri)\n    .withMetalake("metalake")\n    .withKerberosAuth(provider)\n    .build();\n'})}),"\n",(0,i.jsx)(t.admonition,{type:"info",children:(0,i.jsx)(t.p,{children:"Now Iceberg REST service doesn't support Kerberos authentication.\nThe URI must use the hostname of server instead of IP."})}),"\n",(0,i.jsx)(t.h3,{id:"server-configuration",children:"Server configuration"}),"\n",(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{children:"Configuration item"}),(0,i.jsx)(t.th,{children:"Description"}),(0,i.jsx)(t.th,{children:"Default value"}),(0,i.jsx)(t.th,{children:"Required"}),(0,i.jsx)(t.th,{children:"Since version"})]})}),(0,i.jsxs)(t.tbody,{children:[(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"gravitino.authenticator"})}),(0,i.jsxs)(t.td,{children:["It is deprecated since Gravitino 0.6.0. Please use ",(0,i.jsx)(t.code,{children:"gravitino.authenticators"})," instead."]}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"simple"})}),(0,i.jsx)(t.td,{children:"No"}),(0,i.jsx)(t.td,{children:"0.3.0"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"gravitino.authenticators"})}),(0,i.jsxs)(t.td,{children:["The authenticators which Gravitino uses, setting as ",(0,i.jsx)(t.code,{children:"simple"}),",",(0,i.jsx)(t.code,{children:"oauth"})," or ",(0,i.jsx)(t.code,{children:"kerberos"}),". Multiple authenticators are separated by commas. If a request is supported by multiple authenticators simultaneously, the first authenticator will be used by default."]}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"simple"})}),(0,i.jsx)(t.td,{children:"No"}),(0,i.jsx)(t.td,{children:"0.6.0-incubating"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"gravitino.authenticator.oauth.serviceAudience"})}),(0,i.jsx)(t.td,{children:"The audience name when Gravitino uses OAuth as the authenticator."}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"GravitinoServer"})}),(0,i.jsx)(t.td,{children:"No"}),(0,i.jsx)(t.td,{children:"0.3.0"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"gravitino.authenticator.oauth.allowSkewSecs"})}),(0,i.jsx)(t.td,{children:"The JWT allows skew seconds when Gravitino uses OAuth as the authenticator."}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"0"})}),(0,i.jsx)(t.td,{children:"No"}),(0,i.jsx)(t.td,{children:"0.3.0"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"gravitino.authenticator.oauth.defaultSignKey"})}),(0,i.jsx)(t.td,{children:"The signing key of JWT when Gravitino uses OAuth as the authenticator."}),(0,i.jsx)(t.td,{children:"(none)"}),(0,i.jsxs)(t.td,{children:["Yes if use ",(0,i.jsx)(t.code,{children:"oauth"})," as the authenticator"]}),(0,i.jsx)(t.td,{children:"0.3.0"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"gravitino.authenticator.oauth.signAlgorithmType"})}),(0,i.jsx)(t.td,{children:"The signature algorithm when Gravitino uses OAuth as the authenticator."}),(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"RS256"})}),(0,i.jsx)(t.td,{children:"No"}),(0,i.jsx)(t.td,{children:"0.3.0"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"gravitino.authenticator.oauth.serverUri"})}),(0,i.jsx)(t.td,{children:"The URI of the default OAuth server."}),(0,i.jsx)(t.td,{children:"(none)"}),(0,i.jsxs)(t.td,{children:["Yes if use ",(0,i.jsx)(t.code,{children:"oauth"})," as the authenticator"]}),(0,i.jsx)(t.td,{children:"0.3.0"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"gravitino.authenticator.oauth.tokenPath"})}),(0,i.jsx)(t.td,{children:"The path for token of the default OAuth server."}),(0,i.jsx)(t.td,{children:"(none)"}),(0,i.jsxs)(t.td,{children:["Yes if use ",(0,i.jsx)(t.code,{children:"oauth"})," as the authenticator"]}),(0,i.jsx)(t.td,{children:"0.3.0"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"gravitino.authenticator.kerberos.principal"})}),(0,i.jsxs)(t.td,{children:["Indicates the Kerberos principal to be used for HTTP endpoint. Principal should start with ",(0,i.jsx)(t.code,{children:"HTTP/"}),"."]}),(0,i.jsx)(t.td,{children:"(none)"}),(0,i.jsxs)(t.td,{children:["Yes if use ",(0,i.jsx)(t.code,{children:"kerberos"})," as the authenticator"]}),(0,i.jsx)(t.td,{children:"0.4.0"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:(0,i.jsx)(t.code,{children:"gravitino.authenticator.kerberos.keytab"})}),(0,i.jsx)(t.td,{children:"Location of the keytab file with the credentials for the principal."}),(0,i.jsx)(t.td,{children:"(none)"}),(0,i.jsxs)(t.td,{children:["Yes if use ",(0,i.jsx)(t.code,{children:"kerberos"})," as the authenticator"]}),(0,i.jsx)(t.td,{children:"0.4.0"})]})]})]}),"\n",(0,i.jsx)(t.p,{children:"The signature algorithms that Gravitino supports follows:"}),"\n",(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{children:"Name"}),(0,i.jsx)(t.th,{children:"Description"})]})}),(0,i.jsxs)(t.tbody,{children:[(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"HS256"}),(0,i.jsx)(t.td,{children:"HMAC using SHA-25A"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"HS384"}),(0,i.jsx)(t.td,{children:"HMAC using SHA-384"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"HS512"}),(0,i.jsx)(t.td,{children:"HMAC using SHA-51"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"RS256"}),(0,i.jsx)(t.td,{children:"RSASSA-PKCS-v1_5 using SHA-256"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"RS384"}),(0,i.jsx)(t.td,{children:"RSASSA-PKCS-v1_5 using SHA-384"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"RS512"}),(0,i.jsx)(t.td,{children:"RSASSA-PKCS-v1_5 using SHA-512"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"ES256"}),(0,i.jsx)(t.td,{children:"ECDSA using P-256 and SHA-256"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"ES384"}),(0,i.jsx)(t.td,{children:"ECDSA using P-384 and SHA-384"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"ES512"}),(0,i.jsx)(t.td,{children:"ECDSA using P-521 and SHA-512"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"PS256"}),(0,i.jsx)(t.td,{children:"RSASSA-PSS using SHA-256 and MGF1 with SHA-256"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"PS384"}),(0,i.jsx)(t.td,{children:"RSASSA-PSS using SHA-384 and MGF1 with SHA-384"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"PS512"}),(0,i.jsx)(t.td,{children:"RSASSA-PSS using SHA-512 and MGF1 with SHA-512"})]})]})]}),"\n",(0,i.jsx)(t.h3,{id:"example",children:"Example"}),"\n",(0,i.jsx)(t.p,{children:"You can follow the steps to set up an OAuth mode Gravitino server."}),"\n",(0,i.jsxs)(t.ol,{children:["\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsx)(t.p,{children:"Prerequisite"}),"\n",(0,i.jsx)(t.p,{children:"You need to install the JDK8 and Docker."}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsx)(t.p,{children:"Set up an external OAuth 2.0 server"}),"\n",(0,i.jsxs)(t.p,{children:["There is a sample-authorization-server based on ",(0,i.jsx)(t.a,{href:"https://github.com/spring-projects/spring-authorization-server/tree/1.0.3",children:"spring-authorization-server"}),". The image has registered client information in the external OAuth 2.0 server\nand its clientId is ",(0,i.jsx)(t.code,{children:"test"}),", secret is ",(0,i.jsx)(t.code,{children:"test"}),", scope is ",(0,i.jsx)(t.code,{children:"test"}),"."]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-shell",children:" docker run -p 8177:8177 --name sample-auth-server -d datastrato/sample-authorization-server:0.3.0\n"})}),"\n",(0,i.jsxs)(t.ol,{start:"3",children:["\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsxs)(t.p,{children:["Open ",(0,i.jsx)(t.a,{href:"http://localhost:8177/oauth2/jwks",children:"the JWK URL of the Authorization server"})," in the browser and you can get the JWK."]}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{alt:"jks_response_image",src:n(81100).A+"",width:"2303",height:"199"})}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsxs)(t.p,{children:["Convert the JWK to PEM. You can use the ",(0,i.jsx)(t.a,{href:"https://8gwifi.org/jwkconvertfunctions.jsp#google_vignette",children:"online tool"})," or other tools."]}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{alt:"pem_convert_result_image",src:n(39590).A+"",width:"1530",height:"1262"})}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsxs)(t.p,{children:["Copy the public key and remove the character ",(0,i.jsx)(t.code,{children:"\\n"})," and you can get the default signing key of Gravitino server."]}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsxs)(t.p,{children:["You can refer to the ",(0,i.jsx)(t.a,{href:"/docs/next/gravitino-server-config",children:"Configurations"})," and append the configurations to the conf/gravitino.conf."]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-text",children:"gravitino.authenticators = oauth\ngravitino.authenticator.oauth.serviceAudience = test\ngravitino.authenticator.oauth.defaultSignKey = <the default signing key>\ngravitino.authenticator.oauth.tokenPath = /oauth2/token\ngravitino.authenticator.oauth.serverUri = http://localhost:8177\n"})}),"\n",(0,i.jsxs)(t.ol,{start:"7",children:["\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsxs)(t.p,{children:["Open ",(0,i.jsx)(t.a,{href:"http://localhost:8090",children:"the URL of Gravitino server"})," and login in with clientId ",(0,i.jsx)(t.code,{children:"test"}),", clientSecret ",(0,i.jsx)(t.code,{children:"test"}),", and scope ",(0,i.jsx)(t.code,{children:"test"}),"."]}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{alt:"oauth_login_image",src:n(2001).A+"",width:"1133",height:"1211"})}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsx)(t.p,{children:"You can also use the curl command to access Gravitino."}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(t.p,{children:"Get access token"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-shell",children:"curl --location --request POST 'http://127.0.0.1:8177/oauth2/token?grant_type=client_credentials&client_id=test&client_secret=test&scope=test'\n"})}),"\n",(0,i.jsx)(t.p,{children:"Use the access token to request the Gravitino"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-shell",children:'curl -v -X GET -H "Accept: application/vnd.gravitino.v1+json" -H "Content-Type: application/json" -H "Authorization: Bearer <access_token>" http://localhost:8090/api/version\n'})})]})}function l(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(o,{...e})}):o(e)}},81100:(e,t,n)=>{n.d(t,{A:()=>i});const i=n.p+"assets/images/jks-995eb0b7c2ca4f7f4f1e28ebae5e3144.png"},2001:(e,t,n)=>{n.d(t,{A:()=>i});const i=n.p+"assets/images/oauth-d58a2bcf262ce077548b31413bbfcb73.png"},39590:(e,t,n)=>{n.d(t,{A:()=>i});const i=n.p+"assets/images/pem-7d669432b13e068faef25044ce6cde3d.png"}}]);