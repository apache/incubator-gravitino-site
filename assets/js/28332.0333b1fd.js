(self.webpackChunkapache_website_template=self.webpackChunkapache_website_template||[]).push([[28332],{13003:(e,t,r)=>{"use strict";r.d(t,{_:()=>i,u:()=>l});var a=r(79474),o=r(23700),s=r(13274);const n=a.createContext(null);function i(e){let{children:t,content:r}=e;const o=function(e){return(0,a.useMemo)((()=>({metadata:e.metadata,frontMatter:e.frontMatter,assets:e.assets,contentTitle:e.contentTitle,toc:e.toc})),[e])}(r);return(0,s.jsx)(n.Provider,{value:o,children:t})}function l(){const e=(0,a.useContext)(n);if(null===e)throw new o.dV("DocProvider");return e}},4393:(e,t,r)=>{"use strict";r.r(t),r.d(t,{Collapsible:()=>c.N,ErrorBoundaryError:()=>O.bq,ErrorBoundaryErrorMessageFallback:()=>O.MN,ErrorBoundaryTryAgainButton:()=>O.a2,ErrorCauseBoundary:()=>O.k2,HtmlClassNameProvider:()=>b.e3,NavbarSecondaryMenuFiller:()=>p.GX,PageMetadata:()=>b.be,ReactContextError:()=>g.dV,SkipToContentFallbackId:()=>L.j,SkipToContentLink:()=>L.K,ThemeClassNames:()=>d.G,ThemedComponent:()=>o.A,UnlistedBannerMessage:()=>N.Uh,UnlistedBannerTitle:()=>N.Rc,UnlistedMetadata:()=>N.AE,composeProviders:()=>g.fM,createStorageSlot:()=>s.Wf,duplicates:()=>M.X,filterDocCardListItems:()=>i.d1,isMultiColumnFooterLinks:()=>B.C,isRegexpStringMatch:()=>E.G,listStorageKeys:()=>s.Eo,listTagsByLetters:()=>C.Q,prefersReducedMotion:()=>f.O,processAdmonitionProps:()=>x.c,translateTagsPageTitle:()=>C.b,uniq:()=>M.s,useBlogListPageStructuredData:()=>l.k,useBlogPostStructuredData:()=>l.J,useClearQueryString:()=>h.W9,useCollapsible:()=>c.u,useColorMode:()=>m.G,useContextualSearchFilters:()=>n.af,useCurrentSidebarCategory:()=>i.$S,useDocsPreferredVersion:()=>D.g1,useEvent:()=>g._q,useHistorySelector:()=>h.Hl,usePluralForm:()=>u.W,usePrevious:()=>g.ZC,usePrismTheme:()=>_.A,useQueryString:()=>h.l,useQueryStringList:()=>h.fV,useSearchLinkCreator:()=>k,useSearchQueryString:()=>T,useStorageSlot:()=>s.Dv,useThemeConfig:()=>a.p,useWindowSize:()=>S.l});var a=r(57806),o=r(52673),s=r(8297),n=r(61999),i=r(134),l=r(73019),u=r(14721),c=r(4902),d=r(96751),f=r(88701),g=r(23700),b=r(16980),m=r(83733),p=r(17560),S=r(23069),C=r(37964),v=r(79474),y=r(55492),h=r(71045);const P="q";function T(){return(0,h.l)(P)}function k(){const{siteConfig:{baseUrl:e,themeConfig:t}}=(0,y.default)(),{algolia:{searchPagePath:r}}=t;return(0,v.useCallback)((t=>`${e}${r}?${P}=${encodeURIComponent(t)}`),[e,r])}var B=r(57946),E=r(77036),M=r(8442),_=r(23794),D=r(97061),x=r(44177),L=r(52604),N=r(4709),O=r(83454)},73971:(e,t,r)=>{"use strict";r.r(t),r.d(t,{AnnouncementBarProvider:()=>c.o,BlogPostProvider:()=>l.i,Collapsible:()=>a.Collapsible,ColorModeProvider:()=>b.a,DEFAULT_SEARCH_TAG:()=>S.Cy,DocProvider:()=>i._,DocSidebarItemsExpandedStateProvider:()=>o.A,DocsPreferredVersionContextProvider:()=>u.VQ,DocsSidebarProvider:()=>n.V,DocsVersionProvider:()=>s.n,ErrorBoundaryError:()=>a.ErrorBoundaryError,ErrorBoundaryErrorMessageFallback:()=>a.ErrorBoundaryErrorMessageFallback,ErrorBoundaryTryAgainButton:()=>a.ErrorBoundaryTryAgainButton,ErrorCauseBoundary:()=>a.ErrorCauseBoundary,HtmlClassNameProvider:()=>a.HtmlClassNameProvider,NavbarProvider:()=>M.G,NavbarSecondaryMenuFiller:()=>a.NavbarSecondaryMenuFiller,PageMetadata:()=>a.PageMetadata,PluginHtmlClassNameProvider:()=>E.Jx,ReactContextError:()=>a.ReactContextError,ScrollControllerProvider:()=>k.Tv,SkipToContentFallbackId:()=>a.SkipToContentFallbackId,SkipToContentLink:()=>a.SkipToContentLink,ThemeClassNames:()=>a.ThemeClassNames,ThemedComponent:()=>a.ThemedComponent,UnlistedBannerMessage:()=>a.UnlistedBannerMessage,UnlistedBannerTitle:()=>a.UnlistedBannerTitle,UnlistedMetadata:()=>a.UnlistedMetadata,composeProviders:()=>a.composeProviders,containsLineNumbers:()=>p._u,createStorageSlot:()=>a.createStorageSlot,docVersionSearchTag:()=>S.tU,duplicates:()=>a.duplicates,filterDocCardListItems:()=>a.filterDocCardListItems,findFirstSidebarItemLink:()=>C.Nr,findSidebarCategory:()=>C._j,getPrismCssVariables:()=>p.M$,isActiveSidebarItem:()=>C.w8,isDocsPluginEnabled:()=>C.C5,isMultiColumnFooterLinks:()=>a.isMultiColumnFooterLinks,isRegexpStringMatch:()=>a.isRegexpStringMatch,isSamePath:()=>B.ys,isVisibleSidebarItem:()=>C.Se,keyboardFocusedClassName:()=>N.w,listStorageKeys:()=>a.listStorageKeys,listTagsByLetters:()=>a.listTagsByLetters,parseCodeBlockTitle:()=>p.wt,parseLanguage:()=>p.Op,parseLines:()=>p.Li,prefersReducedMotion:()=>a.prefersReducedMotion,processAdmonitionProps:()=>a.processAdmonitionProps,sanitizeTabsChildren:()=>d.v,splitNavbarItems:()=>M.D,translateTagsPageTitle:()=>a.translateTagsPageTitle,uniq:()=>a.uniq,useAlternatePageUtils:()=>m.o,useAnnouncementBar:()=>c.M,useBackToTopButton:()=>F.H,useBlogListPageStructuredData:()=>a.useBlogListPageStructuredData,useBlogPost:()=>l.e,useBlogPostStructuredData:()=>a.useBlogPostStructuredData,useClearQueryString:()=>a.useClearQueryString,useCodeWordWrap:()=>A.f,useCollapsible:()=>a.useCollapsible,useColorMode:()=>a.useColorMode,useContextualSearchFilters:()=>a.useContextualSearchFilters,useCurrentSidebarCategory:()=>a.useCurrentSidebarCategory,useDateTimeFormat:()=>x.i,useDoc:()=>i.u,useDocById:()=>C.cC,useDocRootMetadata:()=>C.B5,useDocSidebarItemsExpandedState:()=>o.G,useDocsPreferredVersion:()=>a.useDocsPreferredVersion,useDocsPreferredVersionByPluginId:()=>u.XK,useDocsSidebar:()=>n.t,useDocsVersion:()=>s.r,useDocsVersionCandidates:()=>C.Vd,useEvent:()=>a.useEvent,useFilteredAndTreeifiedTOC:()=>T.h,useHideableNavbar:()=>L.S,useHistoryPopHandler:()=>P.$Z,useHistorySelector:()=>P.Hl,useHomePageRoute:()=>B.Dt,useKeyboardNavigation:()=>N.J,useLayoutDoc:()=>C.QB,useLayoutDocsSidebar:()=>C.fW,useLocalPathname:()=>h.B,useLocationChange:()=>y.$,useLockBodyScroll:()=>O._,useNavbarMobileSidebar:()=>f.M,useNavbarSecondaryMenu:()=>g.T,usePluralForm:()=>a.usePluralForm,usePrevious:()=>a.usePrevious,usePrismTheme:()=>a.usePrismTheme,useQueryString:()=>a.useQueryString,useQueryStringList:()=>a.useQueryStringList,useQueryStringValue:()=>P.aZ,useScrollController:()=>k.n1,useScrollPosition:()=>k.Mq,useScrollPositionBlocker:()=>k.a_,useSearchLinkCreator:()=>a.useSearchLinkCreator,useSearchQueryString:()=>a.useSearchQueryString,useSidebarBreadcrumbs:()=>C.OF,useSmoothScrollTo:()=>k.gk,useStorageSlot:()=>a.useStorageSlot,useTOCHighlight:()=>_.i,useTabs:()=>d.u,useThemeConfig:()=>a.useThemeConfig,useTitleFormatter:()=>v.s,useTreeifiedTOC:()=>T.v,useVisibleBlogSidebarItems:()=>D.G,useVisibleSidebarItems:()=>C.Y,useWindowSize:()=>a.useWindowSize});var a=r(4393),o=r(69857),s=r(98500),n=r(83428),i=r(13003),l=r(68515),u=r(97061),c=r(7065),d=r(45263),f=r(95325),g=r(56879),b=r(83733),m=r(72171),p=r(35211),S=r(61999),C=r(134),v=r(89689),y=r(78350),h=r(79478),P=r(71045),T=r(55971),k=r(23544),B=r(35961),E=r(16980),M=r(99913),_=r(61094),D=r(62663),x=r(47746),L=r(11814),N=r(69637),O=r(82666),A=r(95410),F=r(80951)},28332:function(e,t,r){"use strict";var a=this&&this.__createBinding||(Object.create?function(e,t,r,a){void 0===a&&(a=r);var o=Object.getOwnPropertyDescriptor(t,r);o&&!("get"in o?!t.__esModule:o.writable||o.configurable)||(o={enumerable:!0,get:function(){return t[r]}}),Object.defineProperty(e,a,o)}:function(e,t,r,a){void 0===a&&(a=r),e[a]=t[r]}),o=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),s=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)"default"!==r&&Object.prototype.hasOwnProperty.call(e,r)&&a(t,e,r);return o(t,e),t},n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const i=s(r(79474)),l=r(73971),u=n(r(9805)),c=n(r(68835)),d=n(r(82874));function f(e){let{className:t,block:r,selectedValue:a,selectValue:o,tabValues:s}=e;const n=[],{blockElementScrollPositionUntilNextRender:u}=(0,l.useScrollPositionBlocker)(),d=e=>{const t=e.currentTarget,r=n.indexOf(t),i=s[r].value;i!==a&&(u(t),o(i))},f=e=>{let t=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const r=n.indexOf(e.currentTarget)+1;t=n[r]??n[0];break}case"ArrowLeft":{const r=n.indexOf(e.currentTarget)-1;t=n[r]??n[n.length-1];break}}t?.focus()},g=(0,i.useRef)(null),[b,m]=(0,i.useState)(!1);(0,i.useEffect)((()=>{const e=new ResizeObserver((e=>{for(let t of e)t.target.clientWidth<t.target.scrollWidth?m(!0):m(!1)}));return e.observe(g.current),()=>{e.disconnect()}}),[]);return i.default.createElement("div",{className:"openapi-tabs__schema-tabs-container"},b&&i.default.createElement("button",{className:"openapi-tabs__arrow left",onClick:()=>{g.current.scrollLeft-=90}}),i.default.createElement("ul",{ref:g,role:"tablist","aria-orientation":"horizontal",className:(0,c.default)("openapi-tabs__schema-list-container","tabs",{"tabs--block":r},t)},s.map((e=>{let{value:t,label:r,attributes:o}=e;return i.default.createElement("li",{role:"tab",tabIndex:a===t?0:-1,"aria-selected":a===t,key:t,ref:e=>n.push(e),onKeyDown:f,onClick:d,...o,className:(0,c.default)("tabs__item","openapi-tabs__schema-item",o?.className,{active:a===t})},i.default.createElement("span",{className:"openapi-tabs__schema-label"},r??t))}))),b&&i.default.createElement("button",{className:"openapi-tabs__arrow right",onClick:()=>{g.current.scrollLeft+=90}}))}function g(e){let{lazy:t,children:r,selectedValue:a}=e;const o=(Array.isArray(r)?r:[r]).filter(Boolean),s=(0,d.default)(o);if(t){const e=s.find((e=>e.props.value===a));return e?(0,i.cloneElement)(e,{className:"margin-top--md"}):null}return i.default.createElement("div",{className:"margin-top--md"},o.map(((e,t)=>(0,i.cloneElement)(e,{key:t,hidden:e.props.value!==a}))))}function b(e){const t=(0,l.useTabs)(e);return i.default.createElement("div",{className:"openapi-tabs__schema-container"},i.default.createElement(f,{...e,...t}),i.default.createElement(g,{...e,...t}))}t.default=function(e){const t=(0,u.default)();return i.default.createElement(b,{key:String(t),...e},(0,l.sanitizeTabsChildren)(e.children))}},68835:(e,t,r)=>{"use strict";function a(e){var t,r,o="";if("string"==typeof e||"number"==typeof e)o+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(r=a(e[t]))&&(o&&(o+=" "),o+=r);else for(t in e)e[t]&&(o&&(o+=" "),o+=t);return o}function o(){for(var e,t,r=0,o="";r<arguments.length;)(e=arguments[r++])&&(t=a(e))&&(o&&(o+=" "),o+=t);return o}r.r(t),r.d(t,{clsx:()=>o,default:()=>s});const s=o},64073:(e,t,r)=>{var a=r(58453).Symbol;e.exports=a},79512:e=>{e.exports=function(e,t){for(var r=-1,a=t.length,o=e.length;++r<a;)e[o+r]=t[r];return e}},83880:(e,t,r)=>{var a=r(79512),o=r(88923);e.exports=function e(t,r,s,n,i){var l=-1,u=t.length;for(s||(s=o),i||(i=[]);++l<u;){var c=t[l];r>0&&s(c)?r>1?e(c,r-1,s,n,i):a(i,c):n||(i[i.length]=c)}return i}},76624:(e,t,r)=>{var a=r(64073),o=r(7915),s=r(14478),n=a?a.toStringTag:void 0;e.exports=function(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":n&&n in Object(e)?o(e):s(e)}},47382:(e,t,r)=>{var a=r(76624),o=r(2050);e.exports=function(e){return o(e)&&"[object Arguments]"==a(e)}},18928:(e,t,r)=>{var a="object"==typeof r.g&&r.g&&r.g.Object===Object&&r.g;e.exports=a},7915:(e,t,r)=>{var a=r(64073),o=Object.prototype,s=o.hasOwnProperty,n=o.toString,i=a?a.toStringTag:void 0;e.exports=function(e){var t=s.call(e,i),r=e[i];try{e[i]=void 0;var a=!0}catch(l){}var o=n.call(e);return a&&(t?e[i]=r:delete e[i]),o}},88923:(e,t,r)=>{var a=r(64073),o=r(6356),s=r(66521),n=a?a.isConcatSpreadable:void 0;e.exports=function(e){return s(e)||o(e)||!!(n&&e&&e[n])}},14478:e=>{var t=Object.prototype.toString;e.exports=function(e){return t.call(e)}},58453:(e,t,r)=>{var a=r(18928),o="object"==typeof self&&self&&self.Object===Object&&self,s=a||o||Function("return this")();e.exports=s},82874:(e,t,r)=>{var a=r(83880);e.exports=function(e){return(null==e?0:e.length)?a(e,1):[]}},6356:(e,t,r)=>{var a=r(47382),o=r(2050),s=Object.prototype,n=s.hasOwnProperty,i=s.propertyIsEnumerable,l=a(function(){return arguments}())?a:function(e){return o(e)&&n.call(e,"callee")&&!i.call(e,"callee")};e.exports=l},66521:e=>{var t=Array.isArray;e.exports=t},2050:e=>{e.exports=function(e){return null!=e&&"object"==typeof e}}}]);