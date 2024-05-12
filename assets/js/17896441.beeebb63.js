"use strict";
(self["webpackChunkwebsite"] = self["webpackChunkwebsite"] || []).push([[401],{

/***/ 7101:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ DocItem)
});

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(6540);
// EXTERNAL MODULE: ./node_modules/clsx/dist/clsx.m.js
var clsx_m = __webpack_require__(53);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/extends.js
var esm_extends = __webpack_require__(8168);
// EXTERNAL MODULE: ./node_modules/@docusaurus/core/lib/client/exports/Translate.js + 1 modules
var Translate = __webpack_require__(1312);
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-classic/lib-next/theme/PaginatorNavLink/index.js
var PaginatorNavLink = __webpack_require__(5058);
;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib-next/theme/DocPaginator/index.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function DocPaginator(props){const{previous,next}=props;return/*#__PURE__*/react.createElement("nav",{className:"pagination-nav docusaurus-mt-lg","aria-label":(0,Translate/* translate */.T)({id:'theme.docs.paginator.navAriaLabel',message:'Docs pages navigation',description:'The ARIA label for the docs pagination'})},previous&&/*#__PURE__*/react.createElement(PaginatorNavLink/* default */.A,(0,esm_extends/* default */.A)({},previous,{subLabel:/*#__PURE__*/react.createElement(Translate/* default */.A,{id:"theme.docs.paginator.previous",description:"The label used to navigate to the previous doc"},"Previous")})),next&&/*#__PURE__*/react.createElement(PaginatorNavLink/* default */.A,(0,esm_extends/* default */.A)({},next,{subLabel:/*#__PURE__*/react.createElement(Translate/* default */.A,{id:"theme.docs.paginator.next",description:"The label used to navigate to the next doc"},"Next"),isNext:true})));}
// EXTERNAL MODULE: ./node_modules/@docusaurus/core/lib/client/exports/useDocusaurusContext.js
var useDocusaurusContext = __webpack_require__(4586);
// EXTERNAL MODULE: ./node_modules/@docusaurus/core/lib/client/exports/Link.js + 1 modules
var Link = __webpack_require__(5489);
// EXTERNAL MODULE: ./node_modules/@docusaurus/plugin-content-docs/lib/client/index.js
var client = __webpack_require__(7712);
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-common/lib/contexts/docsPreferredVersion.js
var docsPreferredVersion = __webpack_require__(5597);
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-common/lib/utils/ThemeClassNames.js
var ThemeClassNames = __webpack_require__(7559);
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-common/lib/contexts/docsVersion.js
var docsVersion = __webpack_require__(2252);
;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib-next/theme/DocVersionBanner/index.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function UnreleasedVersionLabel(_ref){let{siteTitle,versionMetadata}=_ref;return/*#__PURE__*/react.createElement(Translate/* default */.A,{id:"theme.docs.versions.unreleasedVersionLabel",description:"The label used to tell the user that he's browsing an unreleased doc version",values:{siteTitle,versionLabel:/*#__PURE__*/react.createElement("b",null,versionMetadata.label)}},'This is unreleased documentation for {siteTitle} {versionLabel} version.');}function UnmaintainedVersionLabel(_ref2){let{siteTitle,versionMetadata}=_ref2;return/*#__PURE__*/react.createElement(Translate/* default */.A,{id:"theme.docs.versions.unmaintainedVersionLabel",description:"The label used to tell the user that he's browsing an unmaintained doc version",values:{siteTitle,versionLabel:/*#__PURE__*/react.createElement("b",null,versionMetadata.label)}},'This is documentation for {siteTitle} {versionLabel}, which is no longer actively maintained.');}const BannerLabelComponents={unreleased:UnreleasedVersionLabel,unmaintained:UnmaintainedVersionLabel};function BannerLabel(props){const BannerLabelComponent=BannerLabelComponents[props.versionMetadata.banner];return/*#__PURE__*/react.createElement(BannerLabelComponent,props);}function LatestVersionSuggestionLabel(_ref3){let{versionLabel,to,onClick}=_ref3;return/*#__PURE__*/react.createElement(Translate/* default */.A,{id:"theme.docs.versions.latestVersionSuggestionLabel",description:"The label used to tell the user to check the latest version",values:{versionLabel,latestVersionLink:/*#__PURE__*/react.createElement("b",null,/*#__PURE__*/react.createElement(Link/* default */.A,{to:to,onClick:onClick},/*#__PURE__*/react.createElement(Translate/* default */.A,{id:"theme.docs.versions.latestVersionLinkLabel",description:"The label used for the latest version suggestion link label"},"latest version")))}},'For up-to-date documentation, see the {latestVersionLink} ({versionLabel}).');}function DocVersionBannerEnabled(_ref4){let{className,versionMetadata}=_ref4;const{siteConfig:{title:siteTitle}}=(0,useDocusaurusContext/* default */.A)();const{pluginId}=(0,client/* useActivePlugin */.vT)({failfast:true});const getVersionMainDoc=version=>version.docs.find(doc=>doc.id===version.mainDocId);const{savePreferredVersionName}=(0,docsPreferredVersion/* useDocsPreferredVersion */.g1)(pluginId);const{latestDocSuggestion,latestVersionSuggestion}=(0,client/* useDocVersionSuggestions */.HW)(pluginId);// Try to link to same doc in latest version (not always possible), falling
// back to main doc of latest version
const latestVersionSuggestedDoc=latestDocSuggestion??getVersionMainDoc(latestVersionSuggestion);return/*#__PURE__*/react.createElement("div",{className:(0,clsx_m/* default */.A)(className,ThemeClassNames/* ThemeClassNames */.G.docs.docVersionBanner,'alert alert--warning margin-bottom--md'),role:"alert"},/*#__PURE__*/react.createElement("div",null,/*#__PURE__*/react.createElement(BannerLabel,{siteTitle:siteTitle,versionMetadata:versionMetadata})),/*#__PURE__*/react.createElement("div",{className:"margin-top--md"},/*#__PURE__*/react.createElement(LatestVersionSuggestionLabel,{versionLabel:latestVersionSuggestion.label,to:latestVersionSuggestedDoc.path,onClick:()=>savePreferredVersionName(latestVersionSuggestion.name)})));}function DocVersionBanner(_ref5){let{className}=_ref5;const versionMetadata=(0,docsVersion/* useDocsVersion */.r)();if(versionMetadata.banner){return/*#__PURE__*/react.createElement(DocVersionBannerEnabled,{className:className,versionMetadata:versionMetadata});}return null;}
;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib-next/theme/DocVersionBadge/index.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function DocVersionBadge(_ref){let{className}=_ref;const versionMetadata=(0,docsVersion/* useDocsVersion */.r)();if(versionMetadata.badge){return/*#__PURE__*/react.createElement("span",{className:(0,clsx_m/* default */.A)(className,ThemeClassNames/* ThemeClassNames */.G.docs.docVersionBadge,'badge badge--secondary')},/*#__PURE__*/react.createElement(Translate/* default */.A,{id:"theme.docs.versionBadge.label",values:{versionLabel:versionMetadata.label}},'Version: {versionLabel}'));}return null;}
;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib-next/theme/LastUpdated/index.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function LastUpdatedAtDate(_ref){let{lastUpdatedAt,formattedLastUpdatedAt}=_ref;return/*#__PURE__*/react.createElement(Translate/* default */.A,{id:"theme.lastUpdated.atDate",description:"The words used to describe on which date a page has been last updated",values:{date:/*#__PURE__*/react.createElement("b",null,/*#__PURE__*/react.createElement("time",{dateTime:new Date(lastUpdatedAt*1000).toISOString()},formattedLastUpdatedAt))}},' on {date}');}function LastUpdatedByUser(_ref2){let{lastUpdatedBy}=_ref2;return/*#__PURE__*/react.createElement(Translate/* default */.A,{id:"theme.lastUpdated.byUser",description:"The words used to describe by who the page has been last updated",values:{user:/*#__PURE__*/react.createElement("b",null,lastUpdatedBy)}},' by {user}');}function LastUpdated(_ref3){let{lastUpdatedAt,formattedLastUpdatedAt,lastUpdatedBy}=_ref3;return/*#__PURE__*/react.createElement("span",{className:ThemeClassNames/* ThemeClassNames */.G.common.lastUpdated},/*#__PURE__*/react.createElement(Translate/* default */.A,{id:"theme.lastUpdated.lastUpdatedAtBy",description:"The sentence used to display when a page has been last updated, and by who",values:{atDate:lastUpdatedAt&&formattedLastUpdatedAt?/*#__PURE__*/react.createElement(LastUpdatedAtDate,{lastUpdatedAt:lastUpdatedAt,formattedLastUpdatedAt:formattedLastUpdatedAt}):'',byUser:lastUpdatedBy?/*#__PURE__*/react.createElement(LastUpdatedByUser,{lastUpdatedBy:lastUpdatedBy}):''}},'Last updated{atDate}{byUser}'), false&&/*#__PURE__*/0);}
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-classic/lib-next/theme/EditThisPage/index.js + 2 modules
var EditThisPage = __webpack_require__(1335);
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-classic/lib-next/theme/TagsListInline/index.js + 1 modules
var TagsListInline = __webpack_require__(5137);
;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib-next/theme/DocItemFooter/styles.module.css
// extracted by mini-css-extract-plugin
/* harmony default export */ const styles_module = ({"lastUpdated":"lastUpdated_foO9"});
;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib-next/theme/DocItemFooter/index.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function TagsRow(props){return/*#__PURE__*/react.createElement("div",{className:(0,clsx_m/* default */.A)(ThemeClassNames/* ThemeClassNames */.G.docs.docFooterTagsRow,'row margin-bottom--sm')},/*#__PURE__*/react.createElement("div",{className:"col"},/*#__PURE__*/react.createElement(TagsListInline/* default */.A,props)));}function EditMetaRow(_ref){let{editUrl,lastUpdatedAt,lastUpdatedBy,formattedLastUpdatedAt}=_ref;return/*#__PURE__*/react.createElement("div",{className:(0,clsx_m/* default */.A)(ThemeClassNames/* ThemeClassNames */.G.docs.docFooterEditMetaRow,'row')},/*#__PURE__*/react.createElement("div",{className:"col"},editUrl&&/*#__PURE__*/react.createElement(EditThisPage/* default */.A,{editUrl:editUrl})),/*#__PURE__*/react.createElement("div",{className:(0,clsx_m/* default */.A)('col',styles_module.lastUpdated)},(lastUpdatedAt||lastUpdatedBy)&&/*#__PURE__*/react.createElement(LastUpdated,{lastUpdatedAt:lastUpdatedAt,formattedLastUpdatedAt:formattedLastUpdatedAt,lastUpdatedBy:lastUpdatedBy})));}function DocItemFooter(props){const{content:DocContent}=props;const{metadata}=DocContent;const{editUrl,lastUpdatedAt,formattedLastUpdatedAt,lastUpdatedBy,tags}=metadata;const canDisplayTagsRow=tags.length>0;const canDisplayEditMetaRow=!!(editUrl||lastUpdatedAt||lastUpdatedBy);const canDisplayFooter=canDisplayTagsRow||canDisplayEditMetaRow;if(!canDisplayFooter){return null;}return/*#__PURE__*/react.createElement("footer",{className:(0,clsx_m/* default */.A)(ThemeClassNames/* ThemeClassNames */.G.docs.docFooter,'docusaurus-mt-lg')},canDisplayTagsRow&&/*#__PURE__*/react.createElement(TagsRow,{tags:tags}),canDisplayEditMetaRow&&/*#__PURE__*/react.createElement(EditMetaRow,{editUrl:editUrl,lastUpdatedAt:lastUpdatedAt,lastUpdatedBy:lastUpdatedBy,formattedLastUpdatedAt:formattedLastUpdatedAt}));}
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-classic/lib-next/theme/TOC/index.js + 1 modules
var TOC = __webpack_require__(5751);
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-common/lib/components/Collapsible/index.js
var Collapsible = __webpack_require__(1422);
;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib-next/theme/TOCCollapsible/index.module.css
// extracted by mini-css-extract-plugin
/* harmony default export */ const index_module = ({"tocCollapsible":"tocCollapsible_bZGK","tocCollapsibleContent":"tocCollapsibleContent_NNA8","tocCollapsibleExpanded":"tocCollapsibleExpanded_IqtF"});
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-classic/lib-next/theme/TOCItems/index.js + 3 modules
var TOCItems = __webpack_require__(9495);
;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib-next/theme/TOCCollapsible/CollapseButton.module.css
// extracted by mini-css-extract-plugin
/* harmony default export */ const CollapseButton_module = ({"tocCollapsibleButton":"tocCollapsibleButton_l22C","tocCollapsibleButtonExpanded":"tocCollapsibleButtonExpanded_KeTX"});
;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib-next/theme/TOCCollapsible/CollapseButton.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function TOCCollapsibleCollapseButton(_ref){let{collapsed,...props}=_ref;return/*#__PURE__*/react.createElement("button",(0,esm_extends/* default */.A)({type:"button"},props,{className:(0,clsx_m/* default */.A)('clean-btn',CollapseButton_module.tocCollapsibleButton,!collapsed&&CollapseButton_module.tocCollapsibleButtonExpanded,props.className)}),/*#__PURE__*/react.createElement(Translate/* default */.A,{id:"theme.TOCCollapsible.toggleButtonLabel",description:"The label used by the button on the collapsible TOC component"},"On this page"));}
;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib-next/theme/TOCCollapsible/index.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function TOCCollapsible(_ref){let{toc,className,minHeadingLevel,maxHeadingLevel}=_ref;const{collapsed,toggleCollapsed}=(0,Collapsible/* useCollapsible */.u)({initialState:true});return/*#__PURE__*/react.createElement("div",{className:(0,clsx_m/* default */.A)(index_module.tocCollapsible,!collapsed&&index_module.tocCollapsibleExpanded,className)},/*#__PURE__*/react.createElement(TOCCollapsibleCollapseButton,{collapsed:collapsed,onClick:toggleCollapsed}),/*#__PURE__*/react.createElement(Collapsible/* Collapsible */.N,{lazy:true,className:index_module.tocCollapsibleContent,collapsed:collapsed},/*#__PURE__*/react.createElement(TOCItems/* default */.A,{toc:toc,minHeadingLevel:minHeadingLevel,maxHeadingLevel:maxHeadingLevel})));}
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-classic/lib-next/theme/Heading/index.js + 1 modules
var Heading = __webpack_require__(39);
;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib-next/theme/DocItem/styles.module.css
// extracted by mini-css-extract-plugin
/* harmony default export */ const DocItem_styles_module = ({"docItemContainer":"docItemContainer_vinB","docItemCol":"docItemCol_DM6M","tocMobile":"tocMobile_TmEX"});
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-common/lib/utils/metadataUtils.js + 2 modules
var metadataUtils = __webpack_require__(1003);
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-common/lib/hooks/useWindowSize.js
var useWindowSize = __webpack_require__(4581);
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-common/lib/utils/docsUtils.js + 1 modules
var docsUtils = __webpack_require__(1754);
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-common/lib/utils/routesUtils.js
var routesUtils = __webpack_require__(9169);
;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib-next/theme/DocBreadcrumbs/styles.module.css
// extracted by mini-css-extract-plugin
/* harmony default export */ const DocBreadcrumbs_styles_module = ({"breadcrumbsContainer":"breadcrumbsContainer_Xlws","breadcrumbHomeIcon":"breadcrumbHomeIcon_kU5B"});
// EXTERNAL MODULE: ./node_modules/@docusaurus/core/lib/client/exports/useBaseUrl.js
var useBaseUrl = __webpack_require__(6025);
;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib-next/theme/IconHome/index.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function IconHome(props){return/*#__PURE__*/react.createElement("svg",(0,esm_extends/* default */.A)({viewBox:"0 0 24 24"},props),/*#__PURE__*/react.createElement("path",{d:"M10 19v-5h4v5c0 .55.45 1 1 1h3c.55 0 1-.45 1-1v-7h1.7c.46 0 .68-.57.33-.87L12.67 3.6c-.38-.34-.96-.34-1.34 0l-8.36 7.53c-.34.3-.13.87.33.87H5v7c0 .55.45 1 1 1h3c.55 0 1-.45 1-1z",fill:"currentColor"}));}
;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib-next/theme/DocBreadcrumbs/index.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */// TODO move to design system folder
function BreadcrumbsItemLink(_ref){let{children,href,isLast}=_ref;const className='breadcrumbs__link';if(isLast){return/*#__PURE__*/react.createElement("span",{className:className,itemProp:"name"},children);}return href?/*#__PURE__*/react.createElement(Link/* default */.A,{className:className,href:href,itemProp:"item"},/*#__PURE__*/react.createElement("span",{itemProp:"name"},children))// TODO Google search console doesn't like breadcrumb items without href.
:/*#__PURE__*/ // The schema doesn't seem to require `id` for each `item`, although Google
// insist to infer one, even if it's invalid. Removing `itemProp="item
// name"` for now, since I don't know how to properly fix it.
// See https://github.com/facebook/docusaurus/issues/7241
react.createElement("span",{className:className},children);}// TODO move to design system folder
function BreadcrumbsItem(_ref2){let{children,active,index,addMicrodata}=_ref2;return/*#__PURE__*/react.createElement("li",(0,esm_extends/* default */.A)({},addMicrodata&&{itemScope:true,itemProp:'itemListElement',itemType:'https://schema.org/ListItem'},{className:(0,clsx_m/* default */.A)('breadcrumbs__item',{'breadcrumbs__item--active':active})}),children,/*#__PURE__*/react.createElement("meta",{itemProp:"position",content:String(index+1)}));}function HomeBreadcrumbItem(){const homeHref=(0,useBaseUrl/* default */.A)('/');return/*#__PURE__*/react.createElement("li",{className:"breadcrumbs__item"},/*#__PURE__*/react.createElement(Link/* default */.A,{"aria-label":(0,Translate/* translate */.T)({id:'theme.docs.breadcrumbs.home',message:'Home page',description:'The ARIA label for the home page in the breadcrumbs'}),className:(0,clsx_m/* default */.A)('breadcrumbs__link',DocBreadcrumbs_styles_module.breadcrumbsItemLink),href:homeHref},/*#__PURE__*/react.createElement(IconHome,{className:DocBreadcrumbs_styles_module.breadcrumbHomeIcon})));}function DocBreadcrumbs(){const breadcrumbs=(0,docsUtils/* useSidebarBreadcrumbs */.OF)();const homePageRoute=(0,routesUtils/* useHomePageRoute */.Dt)();if(!breadcrumbs){return null;}return/*#__PURE__*/react.createElement("nav",{className:(0,clsx_m/* default */.A)(ThemeClassNames/* ThemeClassNames */.G.docs.docBreadcrumbs,DocBreadcrumbs_styles_module.breadcrumbsContainer),"aria-label":(0,Translate/* translate */.T)({id:'theme.docs.breadcrumbs.navAriaLabel',message:'Breadcrumbs',description:'The ARIA label for the breadcrumbs'})},/*#__PURE__*/react.createElement("ul",{className:"breadcrumbs",itemScope:true,itemType:"https://schema.org/BreadcrumbList"},homePageRoute&&/*#__PURE__*/react.createElement(HomeBreadcrumbItem,null),breadcrumbs.map((item,idx)=>{const isLast=idx===breadcrumbs.length-1;return/*#__PURE__*/react.createElement(BreadcrumbsItem,{key:idx,active:isLast,index:idx,addMicrodata:!!item.href},/*#__PURE__*/react.createElement(BreadcrumbsItemLink,{href:item.href,isLast:isLast},item.label));})));}
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-classic/lib-next/theme/MDXContent/index.js + 32 modules
var MDXContent = __webpack_require__(981);
;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib-next/theme/DocItem/index.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function DocItemMetadata(props){const{content:DocContent}=props;const{metadata,frontMatter,assets}=DocContent;const{keywords}=frontMatter;const{description,title}=metadata;const image=assets.image??frontMatter.image;return/*#__PURE__*/react.createElement(metadataUtils/* PageMetadata */.be,{title,description,keywords,image});}function DocItemContent(props){const{content:DocContent}=props;const{metadata,frontMatter}=DocContent;const{hide_title:hideTitle,hide_table_of_contents:hideTableOfContents,toc_min_heading_level:tocMinHeadingLevel,toc_max_heading_level:tocMaxHeadingLevel}=frontMatter;const{title}=metadata;// We only add a title if:
// - user doesn't ask to hide it with front matter
// - the markdown content does not already contain a top-level h1 heading
const shouldAddTitle=!hideTitle&&typeof DocContent.contentTitle==='undefined';const windowSize=(0,useWindowSize/* useWindowSize */.l)();const canRenderTOC=!hideTableOfContents&&DocContent.toc&&DocContent.toc.length>0;const renderTocDesktop=canRenderTOC&&(windowSize==='desktop'||windowSize==='ssr');return/*#__PURE__*/react.createElement("div",{className:"row"},/*#__PURE__*/react.createElement("div",{className:(0,clsx_m/* default */.A)('col',!hideTableOfContents&&DocItem_styles_module.docItemCol)},/*#__PURE__*/react.createElement(DocVersionBanner,null),/*#__PURE__*/react.createElement("div",{className:DocItem_styles_module.docItemContainer},/*#__PURE__*/react.createElement("article",null,/*#__PURE__*/react.createElement(DocBreadcrumbs,null),/*#__PURE__*/react.createElement(DocVersionBadge,null),canRenderTOC&&/*#__PURE__*/react.createElement(TOCCollapsible,{toc:DocContent.toc,minHeadingLevel:tocMinHeadingLevel,maxHeadingLevel:tocMaxHeadingLevel,className:(0,clsx_m/* default */.A)(ThemeClassNames/* ThemeClassNames */.G.docs.docTocMobile,DocItem_styles_module.tocMobile)}),/*#__PURE__*/react.createElement("div",{className:(0,clsx_m/* default */.A)(ThemeClassNames/* ThemeClassNames */.G.docs.docMarkdown,'markdown')},shouldAddTitle&&/*#__PURE__*/react.createElement("header",null,/*#__PURE__*/react.createElement(Heading/* default */.A,{as:"h1"},title)),/*#__PURE__*/react.createElement(MDXContent/* default */.A,null,/*#__PURE__*/react.createElement(DocContent,null))),/*#__PURE__*/react.createElement(DocItemFooter,props)),/*#__PURE__*/react.createElement(DocPaginator,{previous:metadata.previous,next:metadata.next}))),renderTocDesktop&&/*#__PURE__*/react.createElement("div",{className:"col col--3"},/*#__PURE__*/react.createElement(TOC/* default */.A,{toc:DocContent.toc,minHeadingLevel:tocMinHeadingLevel,maxHeadingLevel:tocMaxHeadingLevel,className:ThemeClassNames/* ThemeClassNames */.G.docs.docTocDesktop})));}function DocItem(props){const docHtmlClassName=`docs-doc-id-${props.content.metadata.unversionedId}`;return/*#__PURE__*/react.createElement(metadataUtils/* HtmlClassNameProvider */.e3,{className:docHtmlClassName},/*#__PURE__*/react.createElement(DocItemMetadata,props),/*#__PURE__*/react.createElement(DocItemContent,props));}

/***/ }),

/***/ 1335:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  A: () => (/* binding */ EditThisPage)
});

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(6540);
// EXTERNAL MODULE: ./node_modules/@docusaurus/core/lib/client/exports/Translate.js + 1 modules
var Translate = __webpack_require__(1312);
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/extends.js
var esm_extends = __webpack_require__(8168);
// EXTERNAL MODULE: ./node_modules/clsx/dist/clsx.m.js
var clsx_m = __webpack_require__(53);
;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib-next/theme/IconEdit/styles.module.css
// extracted by mini-css-extract-plugin
/* harmony default export */ const styles_module = ({"iconEdit":"iconEdit_dcUD"});
;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib-next/theme/IconEdit/index.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function IconEdit(_ref){let{className,...restProps}=_ref;return/*#__PURE__*/react.createElement("svg",(0,esm_extends/* default */.A)({fill:"currentColor",height:"20",width:"20",viewBox:"0 0 40 40",className:(0,clsx_m/* default */.A)(styles_module.iconEdit,className),"aria-hidden":"true"},restProps),/*#__PURE__*/react.createElement("g",null,/*#__PURE__*/react.createElement("path",{d:"m34.5 11.7l-3 3.1-6.3-6.3 3.1-3q0.5-0.5 1.2-0.5t1.1 0.5l3.9 3.9q0.5 0.4 0.5 1.1t-0.5 1.2z m-29.5 17.1l18.4-18.5 6.3 6.3-18.4 18.4h-6.3v-6.2z"})));}
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-common/lib/utils/ThemeClassNames.js
var ThemeClassNames = __webpack_require__(7559);
;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib-next/theme/EditThisPage/index.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function EditThisPage(_ref){let{editUrl}=_ref;return/*#__PURE__*/react.createElement("a",{href:editUrl,target:"_blank",rel:"noreferrer noopener",className:ThemeClassNames/* ThemeClassNames */.G.common.editThisPage},/*#__PURE__*/react.createElement(IconEdit,null),/*#__PURE__*/react.createElement(Translate/* default */.A,{id:"theme.common.editThisPage",description:"The link label to edit the current page"},"Edit this page"));}

/***/ }),

/***/ 5058:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ PaginatorNavLink)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6540);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(53);
/* harmony import */ var _docusaurus_Link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5489);
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function PaginatorNavLink(props){const{permalink,title,subLabel,isNext}=props;return/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_docusaurus_Link__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A,{className:(0,clsx__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A)('pagination-nav__link',isNext?'pagination-nav__link--next':'pagination-nav__link--prev'),to:permalink},subLabel&&/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{className:"pagination-nav__sublabel"},subLabel),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{className:"pagination-nav__label"},title));}

/***/ }),

/***/ 5751:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  A: () => (/* binding */ TOC)
});

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/extends.js
var esm_extends = __webpack_require__(8168);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(6540);
// EXTERNAL MODULE: ./node_modules/clsx/dist/clsx.m.js
var clsx_m = __webpack_require__(53);
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-classic/lib-next/theme/TOCItems/index.js + 3 modules
var TOCItems = __webpack_require__(9495);
;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib-next/theme/TOC/styles.module.css
// extracted by mini-css-extract-plugin
/* harmony default export */ const styles_module = ({"tableOfContents":"tableOfContents_cNA8","docItemContainer":"docItemContainer_WX_Y"});
;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib-next/theme/TOC/index.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */// Using a custom className
// This prevents TOCInline/TOCCollapsible getting highlighted by mistake
const LINK_CLASS_NAME='table-of-contents__link toc-highlight';const LINK_ACTIVE_CLASS_NAME='table-of-contents__link--active';function TOC(_ref){let{className,...props}=_ref;return/*#__PURE__*/react.createElement("div",{className:(0,clsx_m/* default */.A)(styles_module.tableOfContents,'thin-scrollbar',className)},/*#__PURE__*/react.createElement(TOCItems/* default */.A,(0,esm_extends/* default */.A)({},props,{linkClassName:LINK_CLASS_NAME,linkActiveClassName:LINK_ACTIVE_CLASS_NAME})));}

/***/ }),

/***/ 9495:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  A: () => (/* binding */ TOCItems)
});

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/extends.js
var esm_extends = __webpack_require__(8168);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(6540);
;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib-next/theme/TOCItems/Tree.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */// Recursive component rendering the toc tree
function TOCItemTree(_ref){let{toc,className,linkClassName,isChild}=_ref;if(!toc.length){return null;}return/*#__PURE__*/react.createElement("ul",{className:isChild?undefined:className},toc.map(heading=>/*#__PURE__*/react.createElement("li",{key:heading.id},/*#__PURE__*/react.createElement("a",{href:`#${heading.id}`,className:linkClassName??undefined// Developer provided the HTML, so assume it's safe.
// eslint-disable-next-line react/no-danger
,dangerouslySetInnerHTML:{__html:heading.value}}),/*#__PURE__*/react.createElement(TOCItemTree,{isChild:true,toc:heading.children,className:className,linkClassName:linkClassName}))));}// Memo only the tree root is enough
/* harmony default export */ const Tree = (/*#__PURE__*/react.memo(TOCItemTree));
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-common/lib/utils/useThemeConfig.js
var useThemeConfig = __webpack_require__(6342);
;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-common/lib/utils/tocUtils.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function treeifyTOC(flatTOC){const headings=flatTOC.map(heading=>({...heading,parentIndex:-1,children:[]}));// Keep track of which previous index would be the current heading's direct
// parent. Each entry <i> is the last index of the `headings` array at heading
// level <i>. We will modify these indices as we iterate through all headings.
// e.g. if an ### H3 was last seen at index 2, then prevIndexForLevel[3] === 2
// indices 0 and 1 will remain unused.
const prevIndexForLevel=Array(7).fill(-1);headings.forEach((curr,currIndex)=>{// Take the last seen index for each ancestor level. the highest index will
// be the direct ancestor of the current heading.
const ancestorLevelIndexes=prevIndexForLevel.slice(2,curr.level);curr.parentIndex=Math.max(...ancestorLevelIndexes);// Mark that curr.level was last seen at the current index.
prevIndexForLevel[curr.level]=currIndex;});const rootNodes=[];// For a given parentIndex, add each Node into that parent's `children` array
headings.forEach(heading=>{const{parentIndex,...rest}=heading;if(parentIndex>=0){headings[parentIndex].children.push(rest);}else{rootNodes.push(rest);}});return rootNodes;}/**
 * Takes a flat TOC list (from the MDX loader) and treeifies it into what the
 * TOC components expect. Memoized for performance.
 */function useTreeifiedTOC(toc){return useMemo(()=>treeifyTOC(toc),[toc]);}function filterTOC(_ref){let{toc,minHeadingLevel,maxHeadingLevel}=_ref;function isValid(item){return item.level>=minHeadingLevel&&item.level<=maxHeadingLevel;}return toc.flatMap(item=>{const filteredChildren=filterTOC({toc:item.children,minHeadingLevel,maxHeadingLevel});if(isValid(item)){return[{...item,children:filteredChildren}];}return filteredChildren;});}/**
 * Takes a flat TOC list (from the MDX loader) and treeifies it into what the
 * TOC components expect, applying the `minHeadingLevel` and `maxHeadingLevel`.
 * Memoized for performance.
 *
 * **Important**: this is not the same as `useTreeifiedTOC(toc.filter(...))`,
 * because we have to filter the TOC after it has been treeified. This is mostly
 * to ensure that weird TOC structures preserve their semantics. For example, an
 * h3-h2-h4 sequence should not be treeified as an "h3 > h4" hierarchy with
 * min=3, max=4, but should rather be "[h3, h4]" (since the h2 heading has split
 * the two headings and they are not parent-children)
 */function useFilteredAndTreeifiedTOC(_ref2){let{toc,minHeadingLevel,maxHeadingLevel}=_ref2;return (0,react.useMemo)(()=>filterTOC({toc:treeifyTOC(toc),minHeadingLevel,maxHeadingLevel}),[toc,minHeadingLevel,maxHeadingLevel]);}
;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-common/lib/hooks/useTOCHighlight.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */// TODO make the hardcoded theme-classic classnames configurable (or add them
// to ThemeClassNames?)
/**
 * If the anchor has no height and is just a "marker" in the DOM; we'll use the
 * parent (normally the link text) rect boundaries instead
 */function getVisibleBoundingClientRect(element){const rect=element.getBoundingClientRect();const hasNoHeight=rect.top===rect.bottom;if(hasNoHeight){return getVisibleBoundingClientRect(element.parentNode);}return rect;}/**
 * Considering we divide viewport into 2 zones of each 50vh, this returns true
 * if an element is in the first zone (i.e., appear in viewport, near the top)
 */function isInViewportTopHalf(boundingRect){return boundingRect.top>0&&boundingRect.bottom<window.innerHeight/2;}function getAnchors(_ref){let{minHeadingLevel,maxHeadingLevel}=_ref;const selectors=[];for(let i=minHeadingLevel;i<=maxHeadingLevel;i+=1){selectors.push(`h${i}.anchor`);}return Array.from(document.querySelectorAll(selectors.join()));}function getActiveAnchor(anchors,_ref2){let{anchorTopOffset}=_ref2;// Naming is hard: The "nextVisibleAnchor" is the first anchor that appear
// under the viewport top boundary. It does not mean this anchor is visible
// yet, but if user continues scrolling down, it will be the first to become
// visible
const nextVisibleAnchor=anchors.find(anchor=>{const boundingRect=getVisibleBoundingClientRect(anchor);return boundingRect.top>=anchorTopOffset;});if(nextVisibleAnchor){const boundingRect=getVisibleBoundingClientRect(nextVisibleAnchor);// If anchor is in the top half of the viewport: it is the one we consider
// "active" (unless it's too close to the top and and soon to be scrolled
// outside viewport)
if(isInViewportTopHalf(boundingRect)){return nextVisibleAnchor;}// If anchor is in the bottom half of the viewport, or under the viewport,
// we consider the active anchor is the previous one. This is because the
// main text appearing in the user screen mostly belong to the previous
// anchor. Returns null for the first anchor, see
// https://github.com/facebook/docusaurus/issues/5318
return anchors[anchors.indexOf(nextVisibleAnchor)-1]??null;}// No anchor under viewport top (i.e. we are at the bottom of the page),
// highlight the last anchor found
return anchors[anchors.length-1]??null;}function getLinkAnchorValue(link){return decodeURIComponent(link.href.substring(link.href.indexOf('#')+1));}function getLinks(linkClassName){return Array.from(document.getElementsByClassName(linkClassName));}function getNavbarHeight(){// Not ideal to obtain actual height this way
// Using TS ! (not ?) because otherwise a bad selector would be un-noticed
return document.querySelector('.navbar').clientHeight;}function useAnchorTopOffsetRef(){const anchorTopOffsetRef=(0,react.useRef)(0);const{navbar:{hideOnScroll}}=(0,useThemeConfig/* useThemeConfig */.p)();(0,react.useEffect)(()=>{anchorTopOffsetRef.current=hideOnScroll?0:getNavbarHeight();},[hideOnScroll]);return anchorTopOffsetRef;}/**
 * Side-effect that applies the active class name to the TOC heading that the
 * user is currently viewing. Disabled when `config` is undefined.
 */function useTOCHighlight(config){const lastActiveLinkRef=(0,react.useRef)(undefined);const anchorTopOffsetRef=useAnchorTopOffsetRef();(0,react.useEffect)(()=>{if(!config){// No-op, highlighting is disabled
return()=>{};}const{linkClassName,linkActiveClassName,minHeadingLevel,maxHeadingLevel}=config;function updateLinkActiveClass(link,active){if(active){if(lastActiveLinkRef.current&&lastActiveLinkRef.current!==link){lastActiveLinkRef.current?.classList.remove(linkActiveClassName);}link.classList.add(linkActiveClassName);lastActiveLinkRef.current=link;// link.scrollIntoView({block: 'nearest'});
}else{link.classList.remove(linkActiveClassName);}}function updateActiveLink(){const links=getLinks(linkClassName);const anchors=getAnchors({minHeadingLevel,maxHeadingLevel});const activeAnchor=getActiveAnchor(anchors,{anchorTopOffset:anchorTopOffsetRef.current});const activeLink=links.find(link=>activeAnchor&&activeAnchor.id===getLinkAnchorValue(link));links.forEach(link=>{updateLinkActiveClass(link,link===activeLink);});}document.addEventListener('scroll',updateActiveLink);document.addEventListener('resize',updateActiveLink);updateActiveLink();return()=>{document.removeEventListener('scroll',updateActiveLink);document.removeEventListener('resize',updateActiveLink);};},[config,anchorTopOffsetRef]);}
;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib-next/theme/TOCItems/index.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function TOCItems(_ref){let{toc,className='table-of-contents table-of-contents__left-border',linkClassName='table-of-contents__link',linkActiveClassName=undefined,minHeadingLevel:minHeadingLevelOption,maxHeadingLevel:maxHeadingLevelOption,...props}=_ref;const themeConfig=(0,useThemeConfig/* useThemeConfig */.p)();const minHeadingLevel=minHeadingLevelOption??themeConfig.tableOfContents.minHeadingLevel;const maxHeadingLevel=maxHeadingLevelOption??themeConfig.tableOfContents.maxHeadingLevel;const tocTree=useFilteredAndTreeifiedTOC({toc,minHeadingLevel,maxHeadingLevel});const tocHighlightConfig=(0,react.useMemo)(()=>{if(linkClassName&&linkActiveClassName){return{linkClassName,linkActiveClassName,minHeadingLevel,maxHeadingLevel};}return undefined;},[linkClassName,linkActiveClassName,minHeadingLevel,maxHeadingLevel]);useTOCHighlight(tocHighlightConfig);return/*#__PURE__*/react.createElement(Tree,(0,esm_extends/* default */.A)({toc:tocTree,className:className,linkClassName:linkClassName},props));}

/***/ }),

/***/ 5465:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  A: () => (/* binding */ Tag)
});

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(6540);
// EXTERNAL MODULE: ./node_modules/clsx/dist/clsx.m.js
var clsx_m = __webpack_require__(53);
// EXTERNAL MODULE: ./node_modules/@docusaurus/core/lib/client/exports/Link.js + 1 modules
var Link = __webpack_require__(5489);
;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib-next/theme/Tag/styles.module.css
// extracted by mini-css-extract-plugin
/* harmony default export */ const styles_module = ({"tag":"tag_hD8n","tagRegular":"tagRegular_D6E_","tagWithCount":"tagWithCount_i0QQ"});
;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib-next/theme/Tag/index.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function Tag(_ref){let{permalink,label,count}=_ref;return/*#__PURE__*/react.createElement(Link/* default */.A,{href:permalink,className:(0,clsx_m/* default */.A)(styles_module.tag,count?styles_module.tagWithCount:styles_module.tagRegular)},label,count&&/*#__PURE__*/react.createElement("span",null,count));}

/***/ }),

/***/ 5137:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  A: () => (/* binding */ TagsListInline)
});

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(6540);
// EXTERNAL MODULE: ./node_modules/clsx/dist/clsx.m.js
var clsx_m = __webpack_require__(53);
// EXTERNAL MODULE: ./node_modules/@docusaurus/core/lib/client/exports/Translate.js + 1 modules
var Translate = __webpack_require__(1312);
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-classic/lib-next/theme/Tag/index.js + 1 modules
var Tag = __webpack_require__(5465);
;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib-next/theme/TagsListInline/styles.module.css
// extracted by mini-css-extract-plugin
/* harmony default export */ const styles_module = ({"tags":"tags_XVD_","tag":"tag_JSN8"});
;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib-next/theme/TagsListInline/index.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function TagsListInline(_ref){let{tags}=_ref;return/*#__PURE__*/react.createElement(react.Fragment,null,/*#__PURE__*/react.createElement("b",null,/*#__PURE__*/react.createElement(Translate/* default */.A,{id:"theme.tags.tagsListLabel",description:"The label alongside a tag list"},"Tags:")),/*#__PURE__*/react.createElement("ul",{className:(0,clsx_m/* default */.A)(styles_module.tags,'padding--none','margin-left--sm')},tags.map(_ref2=>{let{label,permalink:tagPermalink}=_ref2;return/*#__PURE__*/react.createElement("li",{key:tagPermalink,className:styles_module.tag},/*#__PURE__*/react.createElement(Tag/* default */.A,{label:label,permalink:tagPermalink}));})));}

/***/ }),

/***/ 2252:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   n: () => (/* binding */ DocsVersionProvider),
/* harmony export */   r: () => (/* binding */ useDocsVersion)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6540);
/* harmony import */ var _utils_reactUtils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9532);
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */const Context=/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createContext(null);/**
 * Provide the current version's metadata to your children.
 */function DocsVersionProvider(_ref){let{children,version}=_ref;return/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Context.Provider,{value:version},children);}/**
 * Gets the version metadata of the current doc page.
 */function useDocsVersion(){const version=(0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(Context);if(version===null){throw new _utils_reactUtils__WEBPACK_IMPORTED_MODULE_1__/* .ReactContextError */ .dV('DocsVersionProvider');}return version;}

/***/ })

}]);