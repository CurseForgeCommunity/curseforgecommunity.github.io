(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[981],{5680:(e,t,n)=>{"use strict";n.d(t,{xA:()=>u,yg:()=>f});var r=n(6540);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),i=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},u=function(e){var t=i(e.components);return r.createElement(s.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=i(n),d=o,f=p["".concat(s,".").concat(d)]||p[d]||m[d]||a;return n?r.createElement(f,c(c({ref:t},u),{},{components:n})):r.createElement(f,c({ref:t},u))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,c=new Array(a);c[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[p]="string"==typeof e?e:o,c[1]=l;for(var i=2;i<a;i++)c[i]=n[i];return r.createElement.apply(null,c)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},39:(e,t,n)=>{"use strict";n.d(t,{A:()=>i});var r=n(8168),o=n(6540),a=n(53),c=n(1312),l=n(6342);const s={anchorWithStickyNavbar:"anchorWithStickyNavbar_mojV",anchorWithHideOnScrollNavbar:"anchorWithHideOnScrollNavbar_R0VQ"};function i(e){let{as:t,id:n,...i}=e;const{navbar:{hideOnScroll:u}}=(0,l.p)();return"h1"!==t&&n?o.createElement(t,(0,r.A)({},i,{className:(0,a.A)("anchor",u?s.anchorWithHideOnScrollNavbar:s.anchorWithStickyNavbar),id:n}),i.children,o.createElement("a",{className:"hash-link",href:`#${n}`,title:(0,c.T)({id:"theme.common.headingLinkTitle",message:"Direct link to heading",description:"Title for link to heading"})},"\u200b")):o.createElement(t,(0,r.A)({},i,{id:void 0}))}},981:(e,t,n)=>{"use strict";n.d(t,{A:()=>ne});var r=n(6540),o=n(5680),a=n(8168),c=n(5260);var l=n(2303),s=n(53),i=n(5293),u=n(6342);function p(){const{prism:e}=(0,u.p)(),{colorMode:t}=(0,i.G)(),n=e.theme,r=e.darkTheme||n;return"dark"===t?r:n}var m=n(8426),d=n.n(m);const f=/title=(?<quote>["'])(?<title>.*?)\1/,y=/\{(?<range>[\d,-]+)\}/,g={js:{start:"\\/\\/",end:""},jsBlock:{start:"\\/\\*",end:"\\*\\/"},jsx:{start:"\\{\\s*\\/\\*",end:"\\*\\/\\s*\\}"},bash:{start:"#",end:""},html:{start:"\x3c!--",end:"--\x3e"}};function h(e,t){const n=e.map((e=>{const{start:n,end:r}=g[e];return`(?:${n}\\s*(${t.flatMap((e=>[e.line,e.block?.start,e.block?.end].filter(Boolean))).join("|")})\\s*${r})`})).join("|");return new RegExp(`^\\s*(?:${n})\\s*$`)}function b(e,t){let n=e.replace(/\n$/,"");const{language:r,magicComments:o,metastring:a}=t;if(a&&y.test(a)){const e=a.match(y).groups.range;if(0===o.length)throw new Error(`A highlight range has been given in code block's metastring (\`\`\` ${a}), but no magic comment config is available. Docusaurus applies the first magic comment entry's className for metastring ranges.`);const t=o[0].className,r=d()(e).filter((e=>e>0)).map((e=>[e-1,[t]]));return{lineClassNames:Object.fromEntries(r),code:n}}if(void 0===r)return{lineClassNames:{},code:n};const c=function(e,t){switch(e){case"js":case"javascript":case"ts":case"typescript":return h(["js","jsBlock"],t);case"jsx":case"tsx":return h(["js","jsBlock","jsx"],t);case"html":return h(["js","jsBlock","html"],t);case"python":case"py":case"bash":return h(["bash"],t);case"markdown":case"md":return h(["html","jsx","bash"],t);default:return h(Object.keys(g),t)}}(r,o),l=n.split("\n"),s=Object.fromEntries(o.map((e=>[e.className,{start:0,range:""}]))),i=Object.fromEntries(o.filter((e=>e.line)).map((e=>{let{className:t,line:n}=e;return[n,t]}))),u=Object.fromEntries(o.filter((e=>e.block)).map((e=>{let{className:t,block:n}=e;return[n.start,t]}))),p=Object.fromEntries(o.filter((e=>e.block)).map((e=>{let{className:t,block:n}=e;return[n.end,t]})));for(let d=0;d<l.length;){const e=l[d].match(c);if(!e){d+=1;continue}const t=e.slice(1).find((e=>void 0!==e));i[t]?s[i[t]].range+=`${d},`:u[t]?s[u[t]].start=d:p[t]&&(s[p[t]].range+=`${s[p[t]].start}-${d-1},`),l.splice(d,1)}n=l.join("\n");const m={};return Object.entries(s).forEach((e=>{let[t,{range:n}]=e;d()(n).forEach((e=>{m[e]??(m[e]=[]),m[e].push(t)}))})),{lineClassNames:m,code:n}}var v=n(7559);const k={codeBlockContainer:"codeBlockContainer_MPoW"};function E(e){let{as:t,...n}=e;const o=function(e){const t={color:"--prism-color",backgroundColor:"--prism-background-color"},n={};return Object.entries(e.plain).forEach((e=>{let[r,o]=e;const a=t[r];a&&"string"==typeof o&&(n[a]=o)})),n}(p());return r.createElement(t,(0,a.A)({},n,{style:o,className:(0,s.A)(n.className,k.codeBlockContainer,v.G.common.codeBlock)}))}const N={codeBlockContent:"codeBlockContent_B9tL",codeBlockTitle:"codeBlockTitle_YYkX",codeBlock:"codeBlock__0OG",codeBlockStandalone:"codeBlockStandalone_Px3r",codeBlockLines:"codeBlockLines_gEuF",codeBlockLinesWithNumbering:"codeBlockLinesWithNumbering_hGCP",buttonGroup:"buttonGroup_hRr1"};function B(e){let{children:t,className:n}=e;return r.createElement(E,{as:"pre",tabIndex:0,className:(0,s.A)(N.codeBlockStandalone,"thin-scrollbar",n)},r.createElement("code",{className:N.codeBlockLines},t))}const w={plain:{backgroundColor:"#2a2734",color:"#9a86fd"},styles:[{types:["comment","prolog","doctype","cdata","punctuation"],style:{color:"#6c6783"}},{types:["namespace"],style:{opacity:.7}},{types:["tag","operator","number"],style:{color:"#e09142"}},{types:["property","function"],style:{color:"#9a86fd"}},{types:["tag-id","selector","atrule-id"],style:{color:"#eeebff"}},{types:["attr-name"],style:{color:"#c4b9fe"}},{types:["boolean","string","entity","url","attr-value","keyword","control","directive","unit","statement","regex","atrule","placeholder","variable"],style:{color:"#ffcc99"}},{types:["deleted"],style:{textDecorationLine:"line-through"}},{types:["inserted"],style:{textDecorationLine:"underline"}},{types:["italic"],style:{fontStyle:"italic"}},{types:["important","bold"],style:{fontWeight:"bold"}},{types:["important"],style:{color:"#c4b9fe"}}]};var A={Prism:n(1258).default,theme:w};function C(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function j(){return j=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},j.apply(this,arguments)}var O=/\r\n|\r|\n/,T=function(e){0===e.length?e.push({types:["plain"],content:"\n",empty:!0}):1===e.length&&""===e[0].content&&(e[0].content="\n",e[0].empty=!0)},L=function(e,t){var n=e.length;return n>0&&e[n-1]===t?e:e.concat(t)};function x(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&-1===t.indexOf(r)&&(n[r]=e[r]);return n}var S=function(e){function t(){for(var t=this,n=[],r=arguments.length;r--;)n[r]=arguments[r];e.apply(this,n),C(this,"getThemeDict",(function(e){if(void 0!==t.themeDict&&e.theme===t.prevTheme&&e.language===t.prevLanguage)return t.themeDict;t.prevTheme=e.theme,t.prevLanguage=e.language;var n=e.theme?function(e,t){var n=e.plain,r=Object.create(null),o=e.styles.reduce((function(e,n){var r=n.languages,o=n.style;return r&&!r.includes(t)||n.types.forEach((function(t){var n=j({},e[t],o);e[t]=n})),e}),r);return o.root=n,o.plain=j({},n,{backgroundColor:null}),o}(e.theme,e.language):void 0;return t.themeDict=n})),C(this,"getLineProps",(function(e){var n=e.key,r=e.className,o=e.style,a=j({},x(e,["key","className","style","line"]),{className:"token-line",style:void 0,key:void 0}),c=t.getThemeDict(t.props);return void 0!==c&&(a.style=c.plain),void 0!==o&&(a.style=void 0!==a.style?j({},a.style,o):o),void 0!==n&&(a.key=n),r&&(a.className+=" "+r),a})),C(this,"getStyleForToken",(function(e){var n=e.types,r=e.empty,o=n.length,a=t.getThemeDict(t.props);if(void 0!==a){if(1===o&&"plain"===n[0])return r?{display:"inline-block"}:void 0;if(1===o&&!r)return a[n[0]];var c=r?{display:"inline-block"}:{},l=n.map((function(e){return a[e]}));return Object.assign.apply(Object,[c].concat(l))}})),C(this,"getTokenProps",(function(e){var n=e.key,r=e.className,o=e.style,a=e.token,c=j({},x(e,["key","className","style","token"]),{className:"token "+a.types.join(" "),children:a.content,style:t.getStyleForToken(a),key:void 0});return void 0!==o&&(c.style=void 0!==c.style?j({},c.style,o):o),void 0!==n&&(c.key=n),r&&(c.className+=" "+r),c})),C(this,"tokenize",(function(e,t,n,r){var o={code:t,grammar:n,language:r,tokens:[]};e.hooks.run("before-tokenize",o);var a=o.tokens=e.tokenize(o.code,o.grammar,o.language);return e.hooks.run("after-tokenize",o),a}))}return e&&(t.__proto__=e),t.prototype=Object.create(e&&e.prototype),t.prototype.constructor=t,t.prototype.render=function(){var e=this.props,t=e.Prism,n=e.language,r=e.code,o=e.children,a=this.getThemeDict(this.props),c=t.languages[n];return o({tokens:function(e){for(var t=[[]],n=[e],r=[0],o=[e.length],a=0,c=0,l=[],s=[l];c>-1;){for(;(a=r[c]++)<o[c];){var i=void 0,u=t[c],p=n[c][a];if("string"==typeof p?(u=c>0?u:["plain"],i=p):(u=L(u,p.type),p.alias&&(u=L(u,p.alias)),i=p.content),"string"==typeof i){var m=i.split(O),d=m.length;l.push({types:u,content:m[0]});for(var f=1;f<d;f++)T(l),s.push(l=[]),l.push({types:u,content:m[f]})}else c++,t.push(u),n.push(i),r.push(0),o.push(i.length)}c--,t.pop(),n.pop(),r.pop(),o.pop()}return T(l),s}(void 0!==c?this.tokenize(t,r,c,n):[r]),className:"prism-code language-"+n,style:void 0!==a?a.root:{},getLineProps:this.getLineProps,getTokenProps:this.getTokenProps})},t}(r.Component);const P=S,_={codeLine:"codeLine_rqGN",codeLineNumber:"codeLineNumber_hzTh",codeLineContent:"codeLineContent_hM6e"};function W(e){let{line:t,classNames:n,showLineNumbers:o,getLineProps:c,getTokenProps:l}=e;1===t.length&&"\n"===t[0].content&&(t[0].content="");const i=c({line:t,className:(0,s.A)(n,o&&_.codeLine)}),u=t.map(((e,t)=>r.createElement("span",(0,a.A)({key:t},l({token:e,key:t})))));return r.createElement("span",i,o?r.createElement(r.Fragment,null,r.createElement("span",{className:_.codeLineNumber}),r.createElement("span",{className:_.codeLineContent},u)):r.createElement(r.Fragment,null,u,r.createElement("br",null)))}var D=n(1312);const I={copyButtonCopied:"copyButtonCopied_ljy5",copyButtonIcons:"copyButtonIcons_W9eQ",copyButtonIcon:"copyButtonIcon_XEyF",copyButtonSuccessIcon:"copyButtonSuccessIcon_i9w9"};function $(e){let{code:t,className:n}=e;const[o,a]=(0,r.useState)(!1),c=(0,r.useRef)(void 0),l=(0,r.useCallback)((()=>{!function(e,t){let{target:n=document.body}=void 0===t?{}:t;if("string"!=typeof e)throw new TypeError(`Expected parameter \`text\` to be a \`string\`, got \`${typeof e}\`.`);const r=document.createElement("textarea"),o=document.activeElement;r.value=e,r.setAttribute("readonly",""),r.style.contain="strict",r.style.position="absolute",r.style.left="-9999px",r.style.fontSize="12pt";const a=document.getSelection(),c=a.rangeCount>0&&a.getRangeAt(0);n.append(r),r.select(),r.selectionStart=0,r.selectionEnd=e.length;let l=!1;try{l=document.execCommand("copy")}catch{}r.remove(),c&&(a.removeAllRanges(),a.addRange(c)),o&&o.focus()}(t),a(!0),c.current=window.setTimeout((()=>{a(!1)}),1e3)}),[t]);return(0,r.useEffect)((()=>()=>window.clearTimeout(c.current)),[]),r.createElement("button",{type:"button","aria-label":o?(0,D.T)({id:"theme.CodeBlock.copied",message:"Copied",description:"The copied button label on code blocks"}):(0,D.T)({id:"theme.CodeBlock.copyButtonAriaLabel",message:"Copy code to clipboard",description:"The ARIA label for copy code blocks button"}),title:(0,D.T)({id:"theme.CodeBlock.copy",message:"Copy",description:"The copy button label on code blocks"}),className:(0,s.A)("clean-btn",n,I.copyButton,o&&I.copyButtonCopied),onClick:l},r.createElement("span",{className:I.copyButtonIcons,"aria-hidden":"true"},r.createElement("svg",{className:I.copyButtonIcon,viewBox:"0 0 24 24"},r.createElement("path",{d:"M19,21H8V7H19M19,5H8A2,2 0 0,0 6,7V21A2,2 0 0,0 8,23H19A2,2 0 0,0 21,21V7A2,2 0 0,0 19,5M16,1H4A2,2 0 0,0 2,3V17H4V3H16V1Z"})),r.createElement("svg",{className:I.copyButtonSuccessIcon,viewBox:"0 0 24 24"},r.createElement("path",{d:"M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z"}))))}const z={wordWrapButtonIcon:"wordWrapButtonIcon_azs1",wordWrapButtonEnabled:"wordWrapButtonEnabled_Geot"};function R(e){let{className:t,onClick:n,isEnabled:o}=e;const a=(0,D.T)({id:"theme.CodeBlock.wordWrapToggle",message:"Toggle word wrap",description:"The title attribute for toggle word wrapping button of code block lines"});return r.createElement("button",{type:"button",onClick:n,className:(0,s.A)("clean-btn",t,o&&z.wordWrapButtonEnabled),"aria-label":a,title:a},r.createElement("svg",{className:z.wordWrapButtonIcon,viewBox:"0 0 24 24","aria-hidden":"true"},r.createElement("path",{fill:"currentColor",d:"M4 19h6v-2H4v2zM20 5H4v2h16V5zm-3 6H4v2h13.25c1.1 0 2 .9 2 2s-.9 2-2 2H15v-2l-3 3l3 3v-2h2c2.21 0 4-1.79 4-4s-1.79-4-4-4z"})))}function H(e){let{children:t,className:n="",metastring:o,title:c,showLineNumbers:l,language:i}=e;const{prism:{defaultLanguage:m,magicComments:d}}=(0,u.p)(),y=i??function(e){const t=e.split(" ").find((e=>e.startsWith("language-")));return t?.replace(/language-/,"")}(n)??m,g=p(),h=function(){const[e,t]=(0,r.useState)(!1),[n,o]=(0,r.useState)(!1),a=(0,r.useRef)(null),c=(0,r.useCallback)((()=>{const n=a.current.querySelector("code");e?n.removeAttribute("style"):n.style.whiteSpace="pre-wrap",t((e=>!e))}),[a,e]),l=(0,r.useCallback)((()=>{const{scrollWidth:e,clientWidth:t}=a.current,n=e>t||a.current.querySelector("code").hasAttribute("style");o(n)}),[a]);return(0,r.useEffect)((()=>{l()}),[e,l]),(0,r.useEffect)((()=>(window.addEventListener("resize",l,{passive:!0}),()=>{window.removeEventListener("resize",l)})),[l]),{codeBlockRef:a,isEnabled:e,isCodeScrollable:n,toggle:c}}(),v=function(e){return e?.match(f)?.groups.title??""}(o)||c,{lineClassNames:k,code:B}=b(t,{metastring:o,language:y,magicComments:d}),w=l||function(e){return e?.includes("showLineNumbers")||!1}(o);return r.createElement(E,{as:"div",className:(0,s.A)(n,y&&!n.includes(`language-${y}`)&&`language-${y}`)},v&&r.createElement("div",{className:N.codeBlockTitle},v),r.createElement("div",{className:N.codeBlockContent},r.createElement(P,(0,a.A)({},A,{theme:g,code:B,language:y??"text"}),(e=>{let{className:t,tokens:n,getLineProps:o,getTokenProps:a}=e;return r.createElement("pre",{tabIndex:0,ref:h.codeBlockRef,className:(0,s.A)(t,N.codeBlock,"thin-scrollbar")},r.createElement("code",{className:(0,s.A)(N.codeBlockLines,w&&N.codeBlockLinesWithNumbering)},n.map(((e,t)=>r.createElement(W,{key:t,line:e,getLineProps:o,getTokenProps:a,classNames:k[t],showLineNumbers:w})))))})),r.createElement("div",{className:N.buttonGroup},(h.isEnabled||h.isCodeScrollable)&&r.createElement(R,{className:N.codeButton,onClick:()=>h.toggle(),isEnabled:h.isEnabled}),r.createElement($,{className:N.codeButton,code:B}))))}function M(e){let{children:t,...n}=e;const o=(0,l.A)(),c=function(e){return r.Children.toArray(e).some((e=>(0,r.isValidElement)(e)))?e:Array.isArray(e)?e.join(""):e}(t),s="string"==typeof c?H:B;return r.createElement(s,(0,a.A)({key:String(o)},n),c)}var V=n(5489);var F=n(1422);const G={details:"details_lb9f",isBrowser:"isBrowser_bmU9",collapsibleContent:"collapsibleContent_i85q"};function q(e){return!!e&&("SUMMARY"===e.tagName||q(e.parentElement))}function X(e,t){return!!e&&(e===t||X(e.parentElement,t))}function Y(e){let{summary:t,children:n,...o}=e;const a=(0,l.A)(),c=(0,r.useRef)(null),{collapsed:i,setCollapsed:u}=(0,F.u)({initialState:!o.open}),[p,m]=(0,r.useState)(o.open);return r.createElement("details",{...o,ref:c,open:p,"data-collapsed":i,className:(0,s.A)(G.details,a&&G.isBrowser,o.className),onMouseDown:e=>{q(e.target)&&e.detail>1&&e.preventDefault()},onClick:e=>{e.stopPropagation();const t=e.target;q(t)&&X(t,c.current)&&(e.preventDefault(),i?(u(!1),m(!0)):u(!0))}},t||r.createElement("summary",null,"Details"),r.createElement(F.N,{lazy:!1,collapsed:i,disableSSRStyle:!0,onCollapseTransitionEnd:e=>{u(e),m(!e)}},r.createElement("div",{className:G.collapsibleContent},n)))}const Q={details:"details_BAp3"},U="alert alert--info";function Z(e){let{...t}=e;return r.createElement(Y,(0,a.A)({},t,{className:(0,s.A)(U,Q.details,t.className)}))}var J=n(39);function K(e){return r.createElement(J.A,e)}const ee={img:"img_E7b_"};const te={head:function(e){const t=r.Children.map(e.children,(e=>function(e){if(e?.props?.mdxType&&e?.props?.originalType){const{mdxType:t,originalType:n,...o}=e.props;return r.createElement(e.props.originalType,o)}return e}(e)));return r.createElement(c.A,e,t)},code:function(e){const t=["a","b","big","i","span","em","strong","sup","sub","small"];return r.Children.toArray(e.children).every((e=>"string"==typeof e&&!e.includes("\n")||(0,r.isValidElement)(e)&&t.includes(e.props.mdxType)))?r.createElement("code",e):r.createElement(M,e)},a:function(e){return r.createElement(V.A,e)},pre:function(e){return r.createElement(M,(0,r.isValidElement)(e.children)&&"code"===e.children.props.originalType?e.children?.props:{...e})},details:function(e){const t=r.Children.toArray(e.children),n=t.find((e=>"summary"===e?.props?.mdxType)),o=r.createElement(r.Fragment,null,t.filter((e=>e!==n)));return r.createElement(Z,(0,a.A)({},e,{summary:n}),o)},ul:function(e){return r.createElement("ul",(0,a.A)({},e,{className:(t=e.className,(0,s.A)(t,t?.includes("contains-task-list")&&"clean-list"))}));var t},img:function(e){return r.createElement("img",(0,a.A)({loading:"lazy"},e,{className:(t=e.className,(0,s.A)(t,ee.img))}));var t},h1:e=>r.createElement(K,(0,a.A)({as:"h1"},e)),h2:e=>r.createElement(K,(0,a.A)({as:"h2"},e)),h3:e=>r.createElement(K,(0,a.A)({as:"h3"},e)),h4:e=>r.createElement(K,(0,a.A)({as:"h4"},e)),h5:e=>r.createElement(K,(0,a.A)({as:"h5"},e)),h6:e=>r.createElement(K,(0,a.A)({as:"h6"},e))};function ne(e){let{children:t}=e;return r.createElement(o.xA,{components:te},t)}},8426:(e,t)=>{function n(e){let t,n=[];for(let r of e.split(",").map((e=>e.trim())))if(/^-?\d+$/.test(r))n.push(parseInt(r,10));else if(t=r.match(/^(-?\d+)(-|\.\.\.?|\u2025|\u2026|\u22EF)(-?\d+)$/)){let[e,r,o,a]=t;if(r&&a){r=parseInt(r),a=parseInt(a);const e=r<a?1:-1;"-"!==o&&".."!==o&&"\u2025"!==o||(a+=e);for(let t=r;t!==a;t+=e)n.push(t)}}return n}t.default=n,e.exports=n}}]);