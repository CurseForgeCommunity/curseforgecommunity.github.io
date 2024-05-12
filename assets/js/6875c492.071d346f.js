"use strict";
(self["webpackChunkwebsite"] = self["webpackChunkwebsite"] || []).push([[813],{

/***/ 4529:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  A: () => (/* binding */ BlogLayout)
});

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(6540);
// EXTERNAL MODULE: ./node_modules/clsx/dist/clsx.m.js
var clsx_m = __webpack_require__(53);
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-classic/lib-next/theme/Layout/index.js + 61 modules
var Layout = __webpack_require__(1323);
// EXTERNAL MODULE: ./node_modules/@docusaurus/core/lib/client/exports/Link.js + 1 modules
var Link = __webpack_require__(5489);
// EXTERNAL MODULE: ./node_modules/@docusaurus/core/lib/client/exports/Translate.js + 1 modules
var Translate = __webpack_require__(1312);
;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib-next/theme/BlogSidebar/Desktop/styles.module.css
// extracted by mini-css-extract-plugin
/* harmony default export */ const styles_module = ({"sidebar":"sidebar_TMXw","sidebarItemTitle":"sidebarItemTitle_V4zb","sidebarItemList":"sidebarItemList_uHd5","sidebarItem":"sidebarItem_spIe","sidebarItemLink":"sidebarItemLink_eqrF","sidebarItemLinkActive":"sidebarItemLinkActive_XZSJ"});
;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib-next/theme/BlogSidebar/Desktop/index.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function BlogSidebarDesktop(_ref){let{sidebar}=_ref;return/*#__PURE__*/react.createElement("aside",{className:"col col--3"},/*#__PURE__*/react.createElement("nav",{className:(0,clsx_m/* default */.A)(styles_module.sidebar,'thin-scrollbar'),"aria-label":(0,Translate/* translate */.T)({id:'theme.blog.sidebar.navAriaLabel',message:'Blog recent posts navigation',description:'The ARIA label for recent posts in the blog sidebar'})},/*#__PURE__*/react.createElement("div",{className:(0,clsx_m/* default */.A)(styles_module.sidebarItemTitle,'margin-bottom--md')},sidebar.title),/*#__PURE__*/react.createElement("ul",{className:(0,clsx_m/* default */.A)(styles_module.sidebarItemList,'clean-list')},sidebar.items.map(item=>/*#__PURE__*/react.createElement("li",{key:item.permalink,className:styles_module.sidebarItem},/*#__PURE__*/react.createElement(Link/* default */.A,{isNavLink:true,to:item.permalink,className:styles_module.sidebarItemLink,activeClassName:styles_module.sidebarItemLinkActive},item.title))))));}
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-common/lib/contexts/navbarSecondaryMenu/content.js
var content = __webpack_require__(5600);
;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib-next/theme/BlogSidebar/Mobile/index.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function BlogSidebarMobileSecondaryMenu(_ref){let{sidebar}=_ref;return/*#__PURE__*/react.createElement("ul",{className:"menu__list"},sidebar.items.map(item=>/*#__PURE__*/react.createElement("li",{key:item.permalink,className:"menu__list-item"},/*#__PURE__*/react.createElement(Link/* default */.A,{isNavLink:true,to:item.permalink,className:"menu__link",activeClassName:"menu__link--active"},item.title))));}function BlogSidebarMobile(props){return/*#__PURE__*/react.createElement(content/* NavbarSecondaryMenuFiller */.GX,{component:BlogSidebarMobileSecondaryMenu,props:props});}
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-common/lib/hooks/useWindowSize.js
var useWindowSize = __webpack_require__(4581);
;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib-next/theme/BlogSidebar/index.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function BlogSidebar(_ref){let{sidebar}=_ref;const windowSize=(0,useWindowSize/* useWindowSize */.l)();if(!sidebar?.items.length){return null;}// Mobile sidebar doesn't need to be server-rendered
if(windowSize==='mobile'){return/*#__PURE__*/react.createElement(BlogSidebarMobile,{sidebar:sidebar});}return/*#__PURE__*/react.createElement(BlogSidebarDesktop,{sidebar:sidebar});}
;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib-next/theme/BlogLayout/index.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function BlogLayout(props){const{sidebar,toc,children,...layoutProps}=props;const hasSidebar=sidebar&&sidebar.items.length>0;return/*#__PURE__*/react.createElement(Layout/* default */.A,layoutProps,/*#__PURE__*/react.createElement("div",{className:"container margin-vert--lg"},/*#__PURE__*/react.createElement("div",{className:"row"},/*#__PURE__*/react.createElement(BlogSidebar,{sidebar:sidebar}),/*#__PURE__*/react.createElement("main",{className:(0,clsx_m/* default */.A)('col',{'col--7':hasSidebar,'col--9 col--offset-1':!hasSidebar}),itemScope:true,itemType:"http://schema.org/Blog"},children),toc&&/*#__PURE__*/react.createElement("div",{className:"col col--2"},toc))));}

/***/ }),

/***/ 8773:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (/* binding */ BlogListPaginator)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6540);
/* harmony import */ var _docusaurus_Translate__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1312);
/* harmony import */ var _theme_PaginatorNavLink__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5058);
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function BlogListPaginator(props){const{metadata}=props;const{previousPage,nextPage}=metadata;return/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("nav",{className:"pagination-nav","aria-label":(0,_docusaurus_Translate__WEBPACK_IMPORTED_MODULE_1__/* .translate */ .T)({id:'theme.blog.paginator.navAriaLabel',message:'Blog list page navigation',description:'The ARIA label for the blog pagination'})},previousPage&&/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_theme_PaginatorNavLink__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A,{permalink:previousPage,title:/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_docusaurus_Translate__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A,{id:"theme.blog.paginator.newerEntries",description:"The label used to navigate to the newer blog posts page (previous page)"},"Newer Entries")}),nextPage&&/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_theme_PaginatorNavLink__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A,{permalink:nextPage,title:/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_docusaurus_Translate__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A,{id:"theme.blog.paginator.olderEntries",description:"The label used to navigate to the older blog posts page (next page)"},"Older Entries"),isNext:true}));}

/***/ }),

/***/ 7247:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  A: () => (/* binding */ BlogPostItem)
});

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(6540);
// EXTERNAL MODULE: ./node_modules/clsx/dist/clsx.m.js
var clsx_m = __webpack_require__(53);
// EXTERNAL MODULE: ./node_modules/@docusaurus/core/lib/client/exports/Translate.js + 1 modules
var Translate = __webpack_require__(1312);
// EXTERNAL MODULE: ./node_modules/@docusaurus/core/lib/client/exports/Link.js + 1 modules
var Link = __webpack_require__(5489);
// EXTERNAL MODULE: ./node_modules/@docusaurus/core/lib/client/exports/useBaseUrl.js
var useBaseUrl = __webpack_require__(6025);
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-common/lib/utils/usePluralForm.js
var usePluralForm = __webpack_require__(3465);
// EXTERNAL MODULE: ./node_modules/@docusaurus/utils-common/lib/index.js
var lib = __webpack_require__(440);
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-classic/lib-next/theme/MDXContent/index.js + 32 modules
var MDXContent = __webpack_require__(981);
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-classic/lib-next/theme/EditThisPage/index.js + 2 modules
var EditThisPage = __webpack_require__(1335);
;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib-next/theme/BlogPostItem/styles.module.css
// extracted by mini-css-extract-plugin
/* harmony default export */ const styles_module = ({"blogPostTitle":"blogPostTitle_rzP5","blogPostData":"blogPostData_Zg1s","blogPostDetailsFull":"blogPostDetailsFull_h6_j"});
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-classic/lib-next/theme/TagsListInline/index.js + 1 modules
var TagsListInline = __webpack_require__(5137);
;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib-next/theme/BlogPostAuthor/index.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function MaybeLink(props){if(props.href){return/*#__PURE__*/react.createElement(Link/* default */.A,props);}return/*#__PURE__*/react.createElement(react.Fragment,null,props.children);}function BlogPostAuthor(_ref){let{author}=_ref;const{name,title,url,imageURL,email}=author;const link=url||email&&`mailto:${email}`||undefined;return/*#__PURE__*/react.createElement("div",{className:"avatar margin-bottom--sm"},imageURL&&/*#__PURE__*/react.createElement(MaybeLink,{href:link,className:"avatar__photo-link"},/*#__PURE__*/react.createElement("img",{className:"avatar__photo",src:imageURL,alt:name})),name&&/*#__PURE__*/react.createElement("div",{className:"avatar__intro",itemProp:"author",itemScope:true,itemType:"https://schema.org/Person"},/*#__PURE__*/react.createElement("div",{className:"avatar__name"},/*#__PURE__*/react.createElement(MaybeLink,{href:link,itemProp:"url"},/*#__PURE__*/react.createElement("span",{itemProp:"name"},name))),title&&/*#__PURE__*/react.createElement("small",{className:"avatar__subtitle",itemProp:"description"},title)));}
;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib-next/theme/BlogPostAuthors/styles.module.css
// extracted by mini-css-extract-plugin
/* harmony default export */ const BlogPostAuthors_styles_module = ({"authorCol":"authorCol_FlmR","imageOnlyAuthorRow":"imageOnlyAuthorRow_trpF","imageOnlyAuthorCol":"imageOnlyAuthorCol_S2np"});
;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib-next/theme/BlogPostAuthors/index.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */// Component responsible for the authors layout
function BlogPostAuthors(_ref){let{authors,assets}=_ref;const authorsCount=authors.length;if(authorsCount===0){return null;}const imageOnly=authors.every(_ref2=>{let{name}=_ref2;return!name;});return/*#__PURE__*/react.createElement("div",{className:(0,clsx_m/* default */.A)('margin-top--md margin-bottom--sm',imageOnly?BlogPostAuthors_styles_module.imageOnlyAuthorRow:'row')},authors.map((author,idx)=>/*#__PURE__*/react.createElement("div",{className:(0,clsx_m/* default */.A)(!imageOnly&&'col col--6',imageOnly?BlogPostAuthors_styles_module.imageOnlyAuthorCol:BlogPostAuthors_styles_module.authorCol),key:idx},/*#__PURE__*/react.createElement(BlogPostAuthor,{author:{...author,// Handle author images using relative paths
imageURL:assets.authorsImageUrls[idx]??author.imageURL}}))));}
;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib-next/theme/BlogPostItem/index.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */// Very simple pluralization: probably good enough for now
function useReadingTimePlural(){const{selectMessage}=(0,usePluralForm/* usePluralForm */.W)();return readingTimeFloat=>{const readingTime=Math.ceil(readingTimeFloat);return selectMessage(readingTime,(0,Translate/* translate */.T)({id:'theme.blog.post.readingTime.plurals',description:'Pluralized label for "{readingTime} min read". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)',message:'One min read|{readingTime} min read'},{readingTime}));};}function BlogPostItem(props){const readingTimePlural=useReadingTimePlural();const{withBaseUrl}=(0,useBaseUrl/* useBaseUrlUtils */.h)();const{children,frontMatter,assets,metadata,truncated,isBlogPostPage=false}=props;const{date,formattedDate,permalink,tags,readingTime,title,editUrl,authors}=metadata;const image=assets.image??frontMatter.image;const truncatedPost=!isBlogPostPage&&truncated;const tagsExists=tags.length>0;const TitleHeading=isBlogPostPage?'h1':'h2';return/*#__PURE__*/react.createElement("article",{className:!isBlogPostPage?'margin-bottom--xl':undefined,itemProp:"blogPost",itemScope:true,itemType:"http://schema.org/BlogPosting"},/*#__PURE__*/react.createElement("header",null,/*#__PURE__*/react.createElement(TitleHeading,{className:styles_module.blogPostTitle,itemProp:"headline"},isBlogPostPage?title:/*#__PURE__*/react.createElement(Link/* default */.A,{itemProp:"url",to:permalink},title)),/*#__PURE__*/react.createElement("div",{className:(0,clsx_m/* default */.A)(styles_module.blogPostData,'margin-vert--md')},/*#__PURE__*/react.createElement("time",{dateTime:date,itemProp:"datePublished"},formattedDate),typeof readingTime!=='undefined'&&/*#__PURE__*/react.createElement(react.Fragment,null,' · ',readingTimePlural(readingTime))),/*#__PURE__*/react.createElement(BlogPostAuthors,{authors:authors,assets:assets})),image&&/*#__PURE__*/react.createElement("meta",{itemProp:"image",content:withBaseUrl(image,{absolute:true})}),/*#__PURE__*/react.createElement("div",{// This ID is used for the feed generation to locate the main content
id:isBlogPostPage?lib.blogPostContainerID:undefined,className:"markdown",itemProp:"articleBody"},/*#__PURE__*/react.createElement(MDXContent/* default */.A,null,children)),(tagsExists||truncated)&&/*#__PURE__*/react.createElement("footer",{className:(0,clsx_m/* default */.A)('row docusaurus-mt-lg',isBlogPostPage&&styles_module.blogPostDetailsFull)},tagsExists&&/*#__PURE__*/react.createElement("div",{className:(0,clsx_m/* default */.A)('col',{'col--9':truncatedPost})},/*#__PURE__*/react.createElement(TagsListInline/* default */.A,{tags:tags})),isBlogPostPage&&editUrl&&/*#__PURE__*/react.createElement("div",{className:"col margin-top--sm"},/*#__PURE__*/react.createElement(EditThisPage/* default */.A,{editUrl:editUrl})),truncatedPost&&/*#__PURE__*/react.createElement("div",{className:(0,clsx_m/* default */.A)('col text--right',{'col--3':tagsExists})},/*#__PURE__*/react.createElement(Link/* default */.A,{to:metadata.permalink,"aria-label":(0,Translate/* translate */.T)({message:'Read more about {title}',id:'theme.blog.post.readMoreLabel',description:'The ARIA label for the link to full blog posts from excerpts'},{title})},/*#__PURE__*/react.createElement("b",null,/*#__PURE__*/react.createElement(Translate/* default */.A,{id:"theme.blog.post.readMore",description:"The label used in blog post item excerpts to link to full blog posts"},"Read More"))))));}

/***/ }),

/***/ 6033:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ BlogTagsPostsPage)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6540);
/* harmony import */ var _docusaurus_Link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5489);
/* harmony import */ var _theme_BlogLayout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4529);
/* harmony import */ var _theme_BlogPostItem__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7247);
/* harmony import */ var _docusaurus_Translate__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1312);
/* harmony import */ var _docusaurus_theme_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(3465);
/* harmony import */ var _docusaurus_theme_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(1003);
/* harmony import */ var _docusaurus_theme_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(7559);
/* harmony import */ var _theme_BlogListPaginator__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(8773);
/* harmony import */ var _theme_SearchMetadata__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(1707);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(53);
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */// Very simple pluralization: probably good enough for now
function useBlogPostsPlural(){const{selectMessage}=(0,_docusaurus_theme_common__WEBPACK_IMPORTED_MODULE_7__/* .usePluralForm */ .W)();return count=>selectMessage(count,(0,_docusaurus_Translate__WEBPACK_IMPORTED_MODULE_4__/* .translate */ .T)({id:'theme.blog.post.plurals',description:'Pluralized label for "{count} posts". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)',message:'One post|{count} posts'},{count}));}function BlogTagsPostsPage(_ref){let{tag,items,sidebar,listMetadata}=_ref;const blogPostsPlural=useBlogPostsPlural();const title=(0,_docusaurus_Translate__WEBPACK_IMPORTED_MODULE_4__/* .translate */ .T)({id:'theme.blog.tagTitle',description:'The title of the page for a blog tag',message:'{nPosts} tagged with "{tagName}"'},{nPosts:blogPostsPlural(tag.count),tagName:tag.label});return/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_docusaurus_theme_common__WEBPACK_IMPORTED_MODULE_8__/* .HtmlClassNameProvider */ .e3,{className:(0,clsx__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .A)(_docusaurus_theme_common__WEBPACK_IMPORTED_MODULE_10__/* .ThemeClassNames */ .G.wrapper.blogPages,_docusaurus_theme_common__WEBPACK_IMPORTED_MODULE_10__/* .ThemeClassNames */ .G.page.blogTagPostListPage)},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_docusaurus_theme_common__WEBPACK_IMPORTED_MODULE_8__/* .PageMetadata */ .be,{title:title}),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_theme_SearchMetadata__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .A,{tag:"blog_tags_posts"}),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_theme_BlogLayout__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A,{sidebar:sidebar},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("header",{className:"margin-bottom--xl"},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h1",null,title),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_docusaurus_Link__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A,{href:tag.allTagsPath},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_docusaurus_Translate__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .A,{id:"theme.tags.tagsPageLink",description:"The label of the link targeting the tag list page"},"View All Tags"))),items.map(_ref2=>{let{content:BlogPostContent}=_ref2;return/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_theme_BlogPostItem__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .A,{key:BlogPostContent.metadata.permalink,frontMatter:BlogPostContent.frontMatter,assets:BlogPostContent.assets,metadata:BlogPostContent.metadata,truncated:true},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(BlogPostContent,null));}),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_theme_BlogListPaginator__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .A,{metadata:listMetadata})));}

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

/***/ 3465:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   W: () => (/* binding */ usePluralForm)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6540);
/* harmony import */ var _docusaurus_useDocusaurusContext__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4586);
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */// We want to ensurer a stable plural form order in all cases
// It is more convenient and natural to handle "small values" first
// See https://twitter.com/sebastienlorber/status/1366820663261077510
const OrderedPluralForms=['zero','one','two','few','many','other'];function sortPluralForms(pluralForms){return OrderedPluralForms.filter(pf=>pluralForms.includes(pf));}// Hardcoded english/fallback implementation
const EnglishPluralForms={locale:'en',pluralForms:sortPluralForms(['one','other']),select:count=>count===1?'one':'other'};function createLocalePluralForms(locale){const pluralRules=new Intl.PluralRules(locale);return{locale,pluralForms:sortPluralForms(pluralRules.resolvedOptions().pluralCategories),select:count=>pluralRules.select(count)};}/**
 * Poor man's `PluralSelector` implementation, using an English fallback. We
 * want a lightweight, future-proof and good-enough solution. We don't want a
 * perfect and heavy solution.
 *
 * Docusaurus classic theme has only 2 deeply nested labels requiring complex
 * plural rules. We don't want to use `Intl` + `PluralRules` polyfills + full
 * ICU syntax (react-intl) just for that.
 *
 * Notes:
 * - 2021: 92+% Browsers support `Intl.PluralRules`, and support will increase
 * in the future
 * - NodeJS >= 13 has full ICU support by default
 * - In case of "mismatch" between SSR and Browser ICU support, React keeps
 * working!
 */function useLocalePluralForms(){const{i18n:{currentLocale}}=(0,_docusaurus_useDocusaurusContext__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A)();return (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(()=>{try{return createLocalePluralForms(currentLocale);}catch(err){console.error(`Failed to use Intl.PluralRules for locale "${currentLocale}".
Docusaurus will fallback to the default (English) implementation.
Error: ${err.message}
`);return EnglishPluralForms;}},[currentLocale]);}function selectPluralMessage(pluralMessages,count,localePluralForms){const separator='|';const parts=pluralMessages.split(separator);if(parts.length===1){return parts[0];}if(parts.length>localePluralForms.pluralForms.length){console.error(`For locale=${localePluralForms.locale}, a maximum of ${localePluralForms.pluralForms.length} plural forms are expected (${localePluralForms.pluralForms}), but the message contains ${parts.length}: ${pluralMessages}`);}const pluralForm=localePluralForms.select(count);const pluralFormIndex=localePluralForms.pluralForms.indexOf(pluralForm);// In case of not enough plural form messages, we take the last one (other)
// instead of returning undefined
return parts[Math.min(pluralFormIndex,parts.length-1)];}/**
 * Reads the current locale and returns an interface very similar to
 * `Intl.PluralRules`.
 */function usePluralForm(){const localePluralForm=useLocalePluralForms();return{selectMessage:(count,pluralMessages)=>selectPluralMessage(pluralMessages,count,localePluralForm)};}

/***/ })

}]);