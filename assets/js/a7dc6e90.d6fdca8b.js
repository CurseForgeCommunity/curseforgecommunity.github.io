"use strict";
(self["webpackChunkwebsite"] = self["webpackChunkwebsite"] || []).push([[312],{

/***/ 5680:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   xA: () => (/* binding */ MDXProvider),
/* harmony export */   yg: () => (/* binding */ createElement)
/* harmony export */ });
/* unused harmony exports MDXContext, useMDXComponents, withMDXComponents */
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6540);


function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly) symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    });
    keys.push.apply(keys, symbols);
  }

  return keys;
}

function _objectSpread2(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      ownKeys(Object(source), true).forEach(function (key) {
        _defineProperty(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys(Object(source)).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
}

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};

  var target = _objectWithoutPropertiesLoose(source, excluded);

  var key, i;

  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);

    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }

  return target;
}

var isFunction = function isFunction(obj) {
  return typeof obj === 'function';
};

var MDXContext = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createContext({});
var withMDXComponents = function withMDXComponents(Component) {
  return function (props) {
    var allComponents = useMDXComponents(props.components);
    return /*#__PURE__*/React.createElement(Component, _extends({}, props, {
      components: allComponents
    }));
  };
};
var useMDXComponents = function useMDXComponents(components) {
  var contextComponents = react__WEBPACK_IMPORTED_MODULE_0__.useContext(MDXContext);
  var allComponents = contextComponents;

  if (components) {
    allComponents = isFunction(components) ? components(contextComponents) : _objectSpread2(_objectSpread2({}, contextComponents), components);
  }

  return allComponents;
};
var MDXProvider = function MDXProvider(props) {
  var allComponents = useMDXComponents(props.components);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(MDXContext.Provider, {
    value: allComponents
  }, props.children);
};

var TYPE_PROP_NAME = 'mdxType';
var DEFAULTS = {
  inlineCode: 'code',
  wrapper: function wrapper(_ref) {
    var children = _ref.children;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, {}, children);
  }
};
var MDXCreateElement = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(function (props, ref) {
  var propComponents = props.components,
      mdxType = props.mdxType,
      originalType = props.originalType,
      parentName = props.parentName,
      etc = _objectWithoutProperties(props, ["components", "mdxType", "originalType", "parentName"]);

  var components = useMDXComponents(propComponents);
  var type = mdxType;
  var Component = components["".concat(parentName, ".").concat(type)] || components[type] || DEFAULTS[type] || originalType;

  if (propComponents) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Component, _objectSpread2(_objectSpread2({
      ref: ref
    }, etc), {}, {
      components: propComponents
    }));
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Component, _objectSpread2({
    ref: ref
  }, etc));
});
MDXCreateElement.displayName = 'MDXCreateElement';
function createElement (type, props) {
  var args = arguments;
  var mdxType = props && props.mdxType;

  if (typeof type === 'string' || mdxType) {
    var argsLength = args.length;
    var createElementArgArray = new Array(argsLength);
    createElementArgArray[0] = MDXCreateElement;
    var newProps = {};

    for (var key in props) {
      if (hasOwnProperty.call(props, key)) {
        newProps[key] = props[key];
      }
    }

    newProps.originalType = type;
    newProps[TYPE_PROP_NAME] = typeof type === 'string' ? type : mdxType;
    createElementArgArray[1] = newProps;

    for (var i = 2; i < argsLength; i++) {
      createElementArgArray[i] = args[i];
    }

    return react__WEBPACK_IMPORTED_MODULE_0__.createElement.apply(null, createElementArgArray);
  }

  return react__WEBPACK_IMPORTED_MODULE_0__.createElement.apply(null, args);
}




/***/ }),

/***/ 6465:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   contentTitle: () => (/* binding */ contentTitle),
/* harmony export */   "default": () => (/* binding */ MDXContent),
/* harmony export */   frontMatter: () => (/* binding */ frontMatter),
/* harmony export */   metadata: () => (/* binding */ metadata),
/* harmony export */   toc: () => (/* binding */ toc)
/* harmony export */ });
/* harmony import */ var _home_runner_work_curseforgecommunity_github_io_curseforgecommunity_github_io_node_modules_babel_runtime_helpers_esm_extends_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8168);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6540);
/* harmony import */ var _mdx_js_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5680);
/* @jsxRuntime classic */ /* @jsx mdx */ /* @jsxFrag mdx.Fragment */const frontMatter={title:'Community Tools',description:'Tools made by the CurseForge Community'};const contentTitle='Community Tools';const metadata={"type":"mdx","permalink":"/tools","source":"@site/src/pages/tools.md","title":"Community Tools","description":"Tools made by the CurseForge Community","frontMatter":{"title":"Community Tools","description":"Tools made by the CurseForge Community"}};const toc=[{value:'<a href="https://cf-community.com/cf-mc-server" target="_blank">CF-MC-Server</a> (Standalone)',id:'cf-mc-server-standalone',level:2},{value:'<a href="https://cflookup.com" target="_blank">CFLookup</a> (Website)',id:'cflookup-website',level:2},{value:'<a href="https://www.nuget.org/packages/CurseForge.APIClient/" target="_blank">CurseForge API Client</a> (.NET library, NuGet)',id:'curseforge-api-client-net-library-nuget',level:2},{value:'<a href="https://github.com/Darkhax/CurseForgeGradle" target="_blank">CurseForgeGradle</a> (Gradle Plugin)',id:'curseforgegradle-gradle-plugin',level:2},{value:'<a href="https://github.com/matthewprenger/CurseGradle" target="_blank">CurseGradle</a> (Gradle Plugin)',id:'cursegradle-gradle-plugin',level:2},{value:'<a href="https://github.com/marketplace/actions/upload-to-curseforge" target="_blank">Upload to CurseForge</a> (GitHub Action)',id:'upload-to-curseforge-github-action',level:2},{value:'<a href="https://cursemaven.com/" target="_blank">CurseMaven</a> (Maven Repository)',id:'cursemaven-maven-repository',level:2},{value:'<a href="https://paste.cflookup.com/" target="_blank">cursebin</a> (Hastebin)',id:'cursebin-hastebin',level:2},{value:'<a href="https://www.cfwidget.com/" target="_blank">CFWidget</a> (Forum widget)',id:'cfwidget-forum-widget',level:2},{value:'<a href="https://curseupdate.com/" target="_blank">CurseUpdate</a> (Mod library)',id:'curseupdate-mod-library',level:2},{value:'<a href="https://cf.way2muchnoise.eu/" target="_blank">CurseForge Badges</a> (SVG badges)',id:'curseforge-badges-svg-badges',level:2},{value:'<a href="https://github.com/CurseForgeCommunity/cf-troubleshooter-win" target="_blank">CurseForge (unofficial) Troubleshooter</a> (Troubleshooter for Windows)',id:'curseforge-unofficial-troubleshooter-troubleshooter-for-windows',level:2},{value:'<a href="https://github.com/Matyrobbrt/CurseForgeJavaAPI" target="_blank">CurseForgeJavaAPI</a> (API Client)',id:'curseforgejavaapi-api-client',level:2},{value:'<a href="https://github.com/nanonestor/universalator/wiki" target="_blank">Universalator</a> (Minecraft Server installer/launcher script file)',id:'universalator-minecraft-server-installerlauncher-script-file',level:2}];const layoutProps={toc};const MDXLayout="wrapper";function MDXContent(_ref){let{components,...props}=_ref;return (0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)(MDXLayout,(0,_home_runner_work_curseforgecommunity_github_io_curseforgecommunity_github_io_node_modules_babel_runtime_helpers_esm_extends_js__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A)({},layoutProps,props,{components:components,mdxType:"MDXLayout"}),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("h1",{"id":"community-tools"},`Community Tools`),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("p",null,`Here we collect projects/utilities/plugins made by the community that is somehow related to CurseForge in some way.`),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("div",{"className":"admonition admonition-note alert alert--secondary"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("div",{parentName:"div","className":"admonition-heading"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("h5",{parentName:"div"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("span",{parentName:"h5","className":"admonition-icon"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("svg",{parentName:"span","xmlns":"http://www.w3.org/2000/svg","width":"14","height":"16","viewBox":"0 0 14 16"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("path",{parentName:"svg","fillRule":"evenodd","d":"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),`note`)),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("div",{parentName:"div","className":"admonition-content"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("p",{parentName:"div"},`These projects are not made by or maintained by Overwolf/CurseForge, but made by the community`))),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("hr",null),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("h2",{"id":"cf-mc-server-standalone"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("a",{href:"https://cf-community.com/cf-mc-server",target:"_blank"},`CF-MC-Server`),` (Standalone)`),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("p",null,`This one packs a punch. It's a CLI (Command Line Interface) that allows you to install a Minecraft server, with the extra feature, that you can download modpacks from CurseForge with it, and use as servers.`),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("p",null,`Made by: `,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("a",{href:"https://nolifeking85.tv",target:"_blank"},`NoLifeKing85`),` (`,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("a",{href:"https://github.com/itssimple",target:"_blank"},`GitHub`),`)`),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("hr",null),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("h2",{"id":"cflookup-website"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("a",{href:"https://cflookup.com",target:"_blank"},`CFLookup`),` (Website)`),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("p",null,`This project aims to provide a way to look up CurseForge projects by their ID, and get the project's data, which is used to get the project's page.`),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("p",null,`And we also get really cool embeds, that you can use in your Discord server, Twitter, Facebook, LinkedIn, etc.`),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("p",null,`Made by: `,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("a",{href:"https://nolifeking85.tv",target:"_blank"},`NoLifeKing85`),` (`,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("a",{href:"https://github.com/itssimple",target:"_blank"},`GitHub`),`)`),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("hr",null),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("h2",{"id":"curseforge-api-client-net-library-nuget"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("a",{href:"https://www.nuget.org/packages/CurseForge.APIClient/",target:"_blank"},`CurseForge API Client`),` (.NET library, NuGet)`),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("p",null,`This project aims to be a fully functional .NET client that allows you to use the CurseForge API,`),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("p",null,`All you need is an API key, your partner ID and a contact email to get started.`),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("p",null,`Made by: `,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("a",{href:"https://nolifeking85.tv",target:"_blank"},`NoLifeKing85`),` (`,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("a",{href:"https://github.com/itssimple",target:"_blank"},`GitHub`),`)`),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("hr",null),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("h2",{"id":"curseforgegradle-gradle-plugin"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("a",{href:"https://github.com/Darkhax/CurseForgeGradle",target:"_blank"},`CurseForgeGradle`),` (Gradle Plugin)`),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("p",null,`This tool allows Gradle projects to upload build artifacts to CurseForge.`),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("p",null,`Made by: `,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("a",{href:"https://darkhax.net/",target:"_blank"},`Darkhax`),` (`,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("a",{href:"https://twitter.com/DarkhaxDev",target:"_blank"},`Twitter`),` | `,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("a",{href:"https://www.curseforge.com/members/darkhaxdev/projects",target:"_blank"},`CurseForge`),`)`),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("hr",null),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("h2",{"id":"cursegradle-gradle-plugin"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("a",{href:"https://github.com/matthewprenger/CurseGradle",target:"_blank"},`CurseGradle`),` (Gradle Plugin)`),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("p",null,`A gradle plugin for publishing artifacts to CurseForge.`),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("p",null,`Made by: `,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("a",{href:"https://github.com/matthewprenger",target:"_blank"},`matthewprenger`)),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("hr",null),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("h2",{"id":"upload-to-curseforge-github-action"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("a",{href:"https://github.com/marketplace/actions/upload-to-curseforge",target:"_blank"},`Upload to CurseForge`),` (GitHub Action)`),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("p",null,`A GitHub Action to interact with the CurseForge file upload API`),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("p",null,`Made by: `,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("a",{href:"https://github.com/itsmeow",target:"_blank"},`itsmeow`)),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("hr",null),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("h2",{"id":"cursemaven-maven-repository"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("a",{href:"https://cursemaven.com/",target:"_blank"},`CurseMaven`),` (Maven Repository)`),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("p",null,`Curse Maven is an alternative to the normal CurseForge Maven, that takes in the project id and file id, rather than getting the artifacts from the jar name.`),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("p",null,`Made by: `,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("a",{href:"http://www.wynprice.com/",target:"_blank"},`Wyn Price`),` (`,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("a",{href:"https://github.com/Wyn-Price/",target:"_blank"},`GitHub`),` | `,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("a",{href:"https://twitter.com/wyn_price",target:"_blank"},`Twitter`),`)`),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("hr",null),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("h2",{"id":"cursebin-hastebin"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("a",{href:"https://paste.cflookup.com/",target:"_blank"},`cursebin`),` (Hastebin)`),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("p",null,`A hastebin instance, meant to host end user logs from i.e. Minecraft crashes and other logs.`),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("p",null,`Made by: `,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("a",{href:"https://nolifeking85.tv",target:"_blank"},`NoLifeKing85`),` (`,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("a",{href:"https://github.com/itssimple",target:"_blank"},`GitHub`),`)`),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("hr",null),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("h2",{"id":"cfwidget-forum-widget"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("a",{href:"https://www.cfwidget.com/",target:"_blank"},`CFWidget`),` (Forum widget)`),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("p",null,`Embed CurseForge project downloads anywhere on the web using widgets, and access project information programmatically through the JSON API to integrate automatic updates, content discovery and more into your projects.`),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("p",null,`Made by: `,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("a",{href:"mailto:admin@cfwidget.com"},`Ralex`),` (`,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("a",{href:"https://github.com/LordRalex",target:"_blank"},`GitHub`),`)`),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("hr",null),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("h2",{"id":"curseupdate-mod-library"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("a",{href:"https://curseupdate.com/",target:"_blank"},`CurseUpdate`),` (Mod library)`),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("p",null,`Enable the built-in Forge Update system with your mod with no code changes or hosting of websites. By using the power of CurseForge, let us manage the JSON so you can focus on creating your mods!`),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("p",null,`Made by: `,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("a",{href:"mailto:admin@cfwidget.com"},`Ralex`),` (`,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("a",{href:"https://github.com/LordRalex",target:"_blank"},`GitHub`),`)`),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("hr",null),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("h2",{"id":"curseforge-badges-svg-badges"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("a",{href:"https://cf.way2muchnoise.eu/",target:"_blank"},`CurseForge Badges`),` (SVG badges)`),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("p",null,`A little badge/shield for minecraft mods/packs/... on CurseForge.`),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("p",null,`Made by: `,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("a",{href:"https://twitter.com/way2muchnoise",target:"_blank"},`way2muchnoise`),` (`,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("a",{href:"https://github.com/way2muchnoise",target:"_blank"},`GitHub`),`)`),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("hr",null),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("h2",{"id":"curseforge-unofficial-troubleshooter-troubleshooter-for-windows"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("a",{href:"https://github.com/CurseForgeCommunity/cf-troubleshooter-win",target:"_blank"},`CurseForge (unofficial) Troubleshooter`),` (Troubleshooter for Windows)`),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("p",null,`A small troubleshooting utility that lets you find out if you've accidentally activated Compatibility mode for
either CurseForge, Minecraft or java, or if you have strange entries in your hosts file that doesn't let you
play Minecraft like you should be able to, and also contains a very simple duplicate mod checker.`),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("p",null,`Made by: `,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("a",{href:"https://nolifeking85.tv",target:"_blank"},`NoLifeKing85`),` (`,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("a",{href:"https://github.com/itssimple",target:"_blank"},`GitHub`),`)`),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("hr",null),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("h2",{"id":"curseforgejavaapi-api-client"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("a",{href:"https://github.com/Matyrobbrt/CurseForgeJavaAPI",target:"_blank"},`CurseForgeJavaAPI`),` (API Client)`),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("p",null,`A Java client for the CFCore API and the Upload API.`),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("p",null,`Made by: `,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("a",{href:"https://github.com/Matyrobbrt",target:"_blank"},`Matyrobbrt`),` (`,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("a",{href:"https://github.com/Matyrobbrt",target:"_blank"},`GitHub`),`)`),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("hr",null),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("h2",{"id":"universalator-minecraft-server-installerlauncher-script-file"},(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("a",{href:"https://github.com/nanonestor/universalator/wiki",target:"_blank"},`Universalator`),` (Minecraft Server installer/launcher script file)`),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("p",null,`The Universalator is a file (BAT script) which can be used to install and launch modded Minecraft server files on PCs.`),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("ul",null,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("li",{parentName:"ul"},`Use it to create custom servers on your PC!`),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("li",{parentName:"ul"},`Use it to launch existing published server packs on your PC!`),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("li",{parentName:"ul"},`Include it in server packs to be published for others - as a server files install/launch solution!`)),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("p",null,`Made by: `,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("a",{href:"https://github.com/nanonestor",target:"_blank"},`Briar Thrain`)),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("hr",null),(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("p",null,`If you know of some tools that we're missing, please let us know! Fill out an `,(0,_mdx_js_react__WEBPACK_IMPORTED_MODULE_1__/* .mdx */ .yg)("a",{parentName:"p","href":"https://github.com/CurseForgeCommunity/curseforgecommunity.github.io/issues/new/choose"},`issue over at our GitHub`),`, and we'll add it to the list after a review!`));};MDXContent.isMDXComponent=true;

/***/ })

}]);