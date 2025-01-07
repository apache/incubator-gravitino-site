"use strict";(self.webpackChunkapache_website_template=self.webpackChunkapache_website_template||[]).push([[84813],{12798:(e,t,a)=>{a.d(t,{A:()=>i});a(79474);var s=a(45086),n=a(66347),r=a(13274);function i(e){const{metadata:t}=e,{previousPage:a,nextPage:i}=t;return(0,r.jsxs)("nav",{className:"pagination-nav","aria-label":(0,s.translate)({id:"theme.blog.paginator.navAriaLabel",message:"Blog list page navigation",description:"The ARIA label for the blog pagination"}),children:[a&&(0,r.jsx)(n.A,{permalink:a,title:(0,r.jsx)(s.default,{id:"theme.blog.paginator.newerEntries",description:"The label used to navigate to the newer blog posts page (previous page)",children:"Newer Entries"})}),i&&(0,r.jsx)(n.A,{permalink:i,title:(0,r.jsx)(s.default,{id:"theme.blog.paginator.olderEntries",description:"The label used to navigate to the older blog posts page (next page)",children:"Older Entries"}),isNext:!0})]})}},74179:(e,t,a)=>{a.d(t,{A:()=>i});a(79474);var s=a(90102),n=a(76196),r=a(13274);function i(e){let{items:t,component:a=n.A}=e;return(0,r.jsx)(r.Fragment,{children:t.map((e=>{let{content:t}=e;return(0,r.jsx)(s.i,{content:t,children:(0,r.jsx)(a,{children:(0,r.jsx)(t,{})})},t.metadata.permalink)}))})}},64217:(e,t,a)=>{a.r(t),a.d(t,{default:()=>b});a(79474);var s=a(13526),n=a(45086),r=a(42828),i=a(51565),l=a(71026),o=a(4661),c=a(3399),d=a(12798),u=a(12898),g=a(74179),h=a(28101),m=a(27712),p=a(13274);function x(e){const t=function(){const{selectMessage:e}=(0,r.W)();return t=>e(t,(0,n.translate)({id:"theme.blog.post.plurals",description:'Pluralized label for "{count} posts". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)',message:"One post|{count} posts"},{count:t}))}();return(0,n.translate)({id:"theme.blog.tagTitle",description:"The title of the page for a blog tag",message:'{nPosts} tagged with "{tagName}"'},{nPosts:t(e.count),tagName:e.label})}function j(e){let{tag:t}=e;const a=x(t);return(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)(i.be,{title:a,description:t.description}),(0,p.jsx)(u.A,{tag:"blog_tags_posts"})]})}function f(e){let{tag:t,items:a,sidebar:s,listMetadata:r}=e;const i=x(t);return(0,p.jsxs)(c.A,{sidebar:s,children:[t.unlisted&&(0,p.jsx)(h.default,{}),(0,p.jsxs)("header",{className:"margin-bottom--xl",children:[(0,p.jsx)(m.default,{as:"h1",children:i}),t.description&&(0,p.jsx)("p",{children:t.description}),(0,p.jsx)(o.default,{href:t.allTagsPath,children:(0,p.jsx)(n.default,{id:"theme.tags.tagsPageLink",description:"The label of the link targeting the tag list page",children:"View All Tags"})})]}),(0,p.jsx)(g.A,{items:a}),(0,p.jsx)(d.A,{metadata:r})]})}function b(e){return(0,p.jsxs)(i.e3,{className:(0,s.A)(l.G.wrapper.blogPages,l.G.page.blogTagPostListPage),children:[(0,p.jsx)(j,{...e}),(0,p.jsx)(f,{...e})]})}},28101:(e,t,a)=>{a.r(t),a.d(t,{default:()=>c});a(79474);var s=a(13526),n=a(19080),r=a(71026),i=a(33071),l=a(13274);function o(e){let{className:t}=e;return(0,l.jsx)(i.A,{type:"caution",title:(0,l.jsx)(n.Rc,{}),className:(0,s.A)(t,r.G.common.unlistedBanner),children:(0,l.jsx)(n.Uh,{})})}function c(e){return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(n.AE,{}),(0,l.jsx)(o,{...e})]})}},7626:(e,t,a)=>{a.d(t,{A:()=>E});var s=a(79474),n=a(21099),r=a(93548),i=a(38859),l=a(13274);var o=a(4661);var c=a(79024);function d(e){const t=s.Children.toArray(e.children),a=t.find((e=>s.isValidElement(e)&&"summary"===e.type)),n=(0,l.jsx)(l.Fragment,{children:t.filter((e=>e!==a))});return(0,l.jsx)(c.A,{...e,summary:a,children:n})}var u=a(27712);function g(e){return(0,l.jsx)(u.default,{...e})}var h=a(13526);const m="containsTaskList_kggB";function p(e){if(void 0!==e)return(0,h.A)(e,e?.includes("contains-task-list")&&m)}var x=a(18422);const j="img_CujE";var f=a(33071),b=a(51311),A=a(83178),v=a(67269),N=a(71813),w=a.n(N);const y=e=>{const{url:t,others:a}=e;return(0,l.jsx)("div",{className:"aspect-video w-full object-cover",children:(0,l.jsx)(w(),{width:"100%",height:"100%",url:t,...a})})};var k=a(52276),T=a(73394);const _="highlight_vY2g",P=e=>{let{children:t,className:a,bg:s,color:n}=e;const r=(0,h.A)(a,_);return(0,l.jsx)("span",{className:r,style:{color:n||"var(--theme-button-primary-text-color)",backgroundColor:s||"var(--theme-button-primary-background-color)"},children:t})},E={Head:n.A,details:d,Details:d,code:function(e){return function(e){return void 0!==e.children&&s.Children.toArray(e.children).every((e=>"string"==typeof e&&!e.includes("\n")))}(e)?(0,l.jsx)(i.A,{...e}):(0,l.jsx)(r.default,{...e})},a:function(e){return(0,l.jsx)(o.default,{...e})},pre:function(e){return(0,l.jsx)(l.Fragment,{children:e.children})},ul:function(e){return(0,l.jsx)("ul",{...e,className:p(e.className)})},li:function(e){return(0,x.A)().collectAnchor(e.id),(0,l.jsx)("li",{...e})},img:function(e){return(0,l.jsx)("img",{decoding:"async",loading:"lazy",...e,className:(t=e.className,(0,h.A)(t,j))});var t},h1:e=>(0,l.jsx)(g,{as:"h1",...e}),h2:e=>(0,l.jsx)(g,{as:"h2",...e}),h3:e=>(0,l.jsx)(g,{as:"h3",...e}),h4:e=>(0,l.jsx)(g,{as:"h4",...e}),h5:e=>(0,l.jsx)(g,{as:"h5",...e}),h6:e=>(0,l.jsx)(g,{as:"h6",...e}),admonition:f.A,mermaid:b.A,Icon:A.In,Image:v.A,Video:y,Tabs:k.A,TabItem:T.default,Highlight:P}}}]);