"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[942],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>d});var a=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function n(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?n(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,a,o=function(e,t){if(null==e)return{};var r,a,o={},n=Object.keys(e);for(a=0;a<n.length;a++)r=n[a],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(a=0;a<n.length;a++)r=n[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=a.createContext({}),u=function(e){var t=a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},c=function(e){var t=u(e.components);return a.createElement(s.Provider,{value:t},e.children)},h="mdxType",g={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var r=e.components,o=e.mdxType,n=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),h=u(r),p=o,d=h["".concat(s,".").concat(p)]||h[p]||g[p]||n;return r?a.createElement(d,l(l({ref:t},c),{},{components:r})):a.createElement(d,l({ref:t},c))}));function d(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var n=r.length,l=new Array(n);l[0]=p;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[h]="string"==typeof e?e:o,l[1]=i;for(var u=2;u<n;u++)l[u]=r[u];return a.createElement.apply(null,l)}return a.createElement.apply(null,r)}p.displayName="MDXCreateElement"},2687:(e,t,r)=>{r.r(t),r.d(t,{contentTitle:()=>l,default:()=>h,frontMatter:()=>n,metadata:()=>i,toc:()=>s});var a=r(7462),o=(r(7294),r(3905));const n={title:"Community Tools",description:"Tools made by the CurseForge Community"},l="Community Tools",i={type:"mdx",permalink:"/tools",source:"@site/src/pages/tools.md",title:"Community Tools",description:"Tools made by the CurseForge Community",frontMatter:{title:"Community Tools",description:"Tools made by the CurseForge Community"}},s=[{value:'<a href="https://cf-community.com/cf-mc-server" target="_blank">CF-MC-Server</a> (Standalone)',id:"cf-mc-server-standalone",level:2},{value:'<a href="https://cflookup.com" target="_blank">CFLookup</a> (Website)',id:"cflookup-website",level:2},{value:'<a href="https://www.nuget.org/packages/CurseForge.APIClient/" target="_blank">CurseForge API Client</a> (.NET library, NuGet)',id:"curseforge-api-client-net-library-nuget",level:2},{value:'<a href="https://github.com/Darkhax/CurseForgeGradle" target="_blank">CurseForgeGradle</a> (Gradle Plugin)',id:"curseforgegradle-gradle-plugin",level:2},{value:'<a href="https://github.com/matthewprenger/CurseGradle" target="_blank">CurseGradle</a> (Gradle Plugin)',id:"cursegradle-gradle-plugin",level:2},{value:'<a href="https://github.com/marketplace/actions/upload-to-curseforge" target="_blank">Upload to CurseForge</a> (GitHub Action)',id:"upload-to-curseforge-github-action",level:2},{value:'<a href="https://cursemaven.com/" target="_blank">CurseMaven</a> (Maven Repository)',id:"cursemaven-maven-repository",level:2},{value:'<a href="https://paste.cflookup.com/" target="_blank">cursebin</a> (Hastebin)',id:"cursebin-hastebin",level:2},{value:'<a href="https://www.cfwidget.com/" target="_blank">CFWidget</a> (Forum widget)',id:"cfwidget-forum-widget",level:2},{value:'<a href="https://curseupdate.com/" target="_blank">CurseUpdate</a> (Mod library)',id:"curseupdate-mod-library",level:2},{value:'<a href="https://cf.way2muchnoise.eu/" target="_blank">CurseForge Badges</a> (SVG badges)',id:"curseforge-badges-svg-badges",level:2},{value:'<a href="https://github.com/CurseForgeCommunity/cf-troubleshooter-win" target="_blank">CurseForge (unofficial) Troubleshooter</a> (Troubleshooter for Windows)',id:"curseforge-unofficial-troubleshooter-troubleshooter-for-windows",level:2},{value:'<a href="https://github.com/Matyrobbrt/CurseForgeJavaAPI" target="_blank">CurseForgeJavaAPI</a> (API Client)',id:"curseforgejavaapi-api-client",level:2}],u={toc:s},c="wrapper";function h(e){let{components:t,...r}=e;return(0,o.kt)(c,(0,a.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"community-tools"},"Community Tools"),(0,o.kt)("p",null,"Here we collect projects/utilities/plugins made by the community that is somehow related to CurseForge in some way."),(0,o.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"These projects are not made by or maintained by Overwolf/CurseForge, but made by the community"))),(0,o.kt)("hr",null),(0,o.kt)("h2",{id:"cf-mc-server-standalone"},(0,o.kt)("a",{href:"https://cf-community.com/cf-mc-server",target:"_blank"},"CF-MC-Server")," (Standalone)"),(0,o.kt)("p",null,"This one packs a punch. It's a CLI (Command Line Interface) that allows you to install a Minecraft server, with the extra feature, that you can download modpacks from CurseForge with it, and use as servers."),(0,o.kt)("p",null,"Made by: ",(0,o.kt)("a",{href:"https://nolifeking85.tv",target:"_blank"},"NoLifeKing85")," (",(0,o.kt)("a",{href:"https://github.com/itssimple",target:"_blank"},"GitHub"),")"),(0,o.kt)("hr",null),(0,o.kt)("h2",{id:"cflookup-website"},(0,o.kt)("a",{href:"https://cflookup.com",target:"_blank"},"CFLookup")," (Website)"),(0,o.kt)("p",null,"This project aims to provide a way to look up CurseForge projects by their ID, and get the project's data, which is used to get the project's page."),(0,o.kt)("p",null,"And we also get really cool embeds, that you can use in your Discord server, Twitter, Facebook, LinkedIn, etc."),(0,o.kt)("p",null,"Made by: ",(0,o.kt)("a",{href:"https://nolifeking85.tv",target:"_blank"},"NoLifeKing85")," (",(0,o.kt)("a",{href:"https://github.com/itssimple",target:"_blank"},"GitHub"),")"),(0,o.kt)("hr",null),(0,o.kt)("h2",{id:"curseforge-api-client-net-library-nuget"},(0,o.kt)("a",{href:"https://www.nuget.org/packages/CurseForge.APIClient/",target:"_blank"},"CurseForge API Client")," (.NET library, NuGet)"),(0,o.kt)("p",null,"This project aims to be a fully functional .NET client that allows you to use the CurseForge API,"),(0,o.kt)("p",null,"All you need is an API key, your partner ID and a contact email to get started."),(0,o.kt)("p",null,"Made by: ",(0,o.kt)("a",{href:"https://nolifeking85.tv",target:"_blank"},"NoLifeKing85")," (",(0,o.kt)("a",{href:"https://github.com/itssimple",target:"_blank"},"GitHub"),")"),(0,o.kt)("hr",null),(0,o.kt)("h2",{id:"curseforgegradle-gradle-plugin"},(0,o.kt)("a",{href:"https://github.com/Darkhax/CurseForgeGradle",target:"_blank"},"CurseForgeGradle")," (Gradle Plugin)"),(0,o.kt)("p",null,"This tool allows Gradle projects to upload build artifacts to CurseForge."),(0,o.kt)("p",null,"Made by: ",(0,o.kt)("a",{href:"https://darkhax.net/",target:"_blank"},"Darkhax")," (",(0,o.kt)("a",{href:"https://twitter.com/DarkhaxDev",target:"_blank"},"Twitter")," | ",(0,o.kt)("a",{href:"https://www.curseforge.com/members/darkhaxdev/projects",target:"_blank"},"CurseForge"),")"),(0,o.kt)("hr",null),(0,o.kt)("h2",{id:"cursegradle-gradle-plugin"},(0,o.kt)("a",{href:"https://github.com/matthewprenger/CurseGradle",target:"_blank"},"CurseGradle")," (Gradle Plugin)"),(0,o.kt)("p",null,"A gradle plugin for publishing artifacts to CurseForge."),(0,o.kt)("p",null,"Made by: ",(0,o.kt)("a",{href:"https://github.com/matthewprenger",target:"_blank"},"matthewprenger")),(0,o.kt)("hr",null),(0,o.kt)("h2",{id:"upload-to-curseforge-github-action"},(0,o.kt)("a",{href:"https://github.com/marketplace/actions/upload-to-curseforge",target:"_blank"},"Upload to CurseForge")," (GitHub Action)"),(0,o.kt)("p",null,"A GitHub Action to interact with the CurseForge file upload API"),(0,o.kt)("p",null,"Made by: ",(0,o.kt)("a",{href:"https://github.com/itsmeow",target:"_blank"},"itsmeow")),(0,o.kt)("hr",null),(0,o.kt)("h2",{id:"cursemaven-maven-repository"},(0,o.kt)("a",{href:"https://cursemaven.com/",target:"_blank"},"CurseMaven")," (Maven Repository)"),(0,o.kt)("p",null,"Curse Maven is an alternative to the normal CurseForge Maven, that takes in the project id and file id, rather than getting the artifacts from the jar name."),(0,o.kt)("p",null,"Made by: ",(0,o.kt)("a",{href:"http://www.wynprice.com/",target:"_blank"},"Wyn Price")," (",(0,o.kt)("a",{href:"https://github.com/Wyn-Price/",target:"_blank"},"GitHub")," | ",(0,o.kt)("a",{href:"https://twitter.com/wyn_price",target:"_blank"},"Twitter"),")"),(0,o.kt)("hr",null),(0,o.kt)("h2",{id:"cursebin-hastebin"},(0,o.kt)("a",{href:"https://paste.cflookup.com/",target:"_blank"},"cursebin")," (Hastebin)"),(0,o.kt)("p",null,"A hastebin instance, meant to host end user logs from i.e. Minecraft crashes and other logs."),(0,o.kt)("p",null,"Made by: ",(0,o.kt)("a",{href:"https://nolifeking85.tv",target:"_blank"},"NoLifeKing85")," (",(0,o.kt)("a",{href:"https://github.com/itssimple",target:"_blank"},"GitHub"),")"),(0,o.kt)("hr",null),(0,o.kt)("h2",{id:"cfwidget-forum-widget"},(0,o.kt)("a",{href:"https://www.cfwidget.com/",target:"_blank"},"CFWidget")," (Forum widget)"),(0,o.kt)("p",null,"Embed CurseForge project downloads anywhere on the web using widgets, and access project information programmatically through the JSON API to integrate automatic updates, content discovery and more into your projects."),(0,o.kt)("p",null,"Made by: ",(0,o.kt)("a",{href:"mailto:admin@cfwidget.com"},"Ralex")," (",(0,o.kt)("a",{href:"https://github.com/LordRalex",target:"_blank"},"GitHub"),")"),(0,o.kt)("hr",null),(0,o.kt)("h2",{id:"curseupdate-mod-library"},(0,o.kt)("a",{href:"https://curseupdate.com/",target:"_blank"},"CurseUpdate")," (Mod library)"),(0,o.kt)("p",null,"Enable the built-in Forge Update system with your mod with no code changes or hosting of websites. By using the power of CurseForge, let us manage the JSON so you can focus on creating your mods!"),(0,o.kt)("p",null,"Made by: ",(0,o.kt)("a",{href:"mailto:admin@cfwidget.com"},"Ralex")," (",(0,o.kt)("a",{href:"https://github.com/LordRalex",target:"_blank"},"GitHub"),")"),(0,o.kt)("hr",null),(0,o.kt)("h2",{id:"curseforge-badges-svg-badges"},(0,o.kt)("a",{href:"https://cf.way2muchnoise.eu/",target:"_blank"},"CurseForge Badges")," (SVG badges)"),(0,o.kt)("p",null,"A little badge/shield for minecraft mods/packs/... on CurseForge."),(0,o.kt)("p",null,"Made by: ",(0,o.kt)("a",{href:"https://twitter.com/way2muchnoise",target:"_blank"},"way2muchnoise")," (",(0,o.kt)("a",{href:"https://github.com/way2muchnoise",target:"_blank"},"GitHub"),")"),(0,o.kt)("hr",null),(0,o.kt)("h2",{id:"curseforge-unofficial-troubleshooter-troubleshooter-for-windows"},(0,o.kt)("a",{href:"https://github.com/CurseForgeCommunity/cf-troubleshooter-win",target:"_blank"},"CurseForge (unofficial) Troubleshooter")," (Troubleshooter for Windows)"),(0,o.kt)("p",null,"A small troubleshooting utility that lets you find out if you've accidentally activated Compatibility mode for\neither CurseForge, Minecraft or java, or if you have strange entries in your hosts file that doesn't let you\nplay Minecraft like you should be able to, and also contains a very simple duplicate mod checker."),(0,o.kt)("p",null,"Made by: ",(0,o.kt)("a",{href:"https://nolifeking85.tv",target:"_blank"},"NoLifeKing85")," (",(0,o.kt)("a",{href:"https://github.com/itssimple",target:"_blank"},"GitHub"),")"),(0,o.kt)("hr",null),(0,o.kt)("h2",{id:"curseforgejavaapi-api-client"},(0,o.kt)("a",{href:"https://github.com/Matyrobbrt/CurseForgeJavaAPI",target:"_blank"},"CurseForgeJavaAPI")," (API Client)"),(0,o.kt)("p",null,"A Java client for the CFCore API and the Upload API."),(0,o.kt)("p",null,"Made by: ",(0,o.kt)("a",{href:"https://github.com/Matyrobbrt",target:"_blank"},"Matyrobbrt")," (",(0,o.kt)("a",{href:"https://github.com/Matyrobbrt",target:"_blank"},"GitHub"),")"),(0,o.kt)("hr",null),(0,o.kt)("p",null,"If you know of some tools that we're missing, please let us know! Fill out an ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/CurseForgeCommunity/curseforgecommunity.github.io/issues/new/choose"},"issue over at our GitHub"),", and we'll add it to the list after a review!"))}h.isMDXComponent=!0}}]);