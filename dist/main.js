/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"html, body{\\n  font-family: 'Belgrano-serif';\\n  max-width: 100%;\\n  box-sizing: border-box;\\n}\\n\\nbody{\\n  display: flex;\\n  flex-direction: column;\\n  position: relative;\\n}\\n\\n/* Colors */\\nbody{\\n  background-color: #D4F1F4;\\n}\\n\\nheader{\\n  background-color: #05445E;\\n  color: #D4F1F4;\\n}\\n\\n#form{\\n  background-color: #189AB4;\\n}\\n\\nbutton{\\n  border-style: none;\\n  background-color: rgb(255, 145, 0);\\n  font-size: 100%;\\n  border-style: none;\\n  border-radius: 4px;\\n  margin: 6px auto;\\n  padding: 8px 12px;\\n}\\n\\nheader{\\n  width: 100%;\\n  height: 20%;\\n  text-align: center;\\n}\\n\\nh1{\\n  font-size: 300%;\\n}\\n\\n#form-btn{\\n  margin: 0.67em 0;\\n}\\n\\n.form_container{\\n  width: 100%;\\n  height: 100%;\\n  display: flex;\\n  position: fixed;\\n  visibility: visible;\\n  opacity: 1;\\n  scale: 1;\\n  transition: opacity 0.2s, scale 0.3s;\\n}\\n\\nform{\\n  border: 2px solid black;\\n  margin: auto;\\n  height: 320px;\\n  width: 200px;\\n  border-radius: 4px;\\n  display: flex;\\n  flex-direction: column;\\n}\\n\\n.hidden{\\n  visibility: hidden;\\n  opacity: 0;\\n  scale: 1;\\n  transition: opacity 0.2s, scale 0.3s;\\n}\\n\\n#form-header{\\n  text-align: left;\\n  flex: 1;\\n  position: relative;\\n}\\n\\n#form-main{\\n  flex: 4;\\n}\\n\\nh2{\\n  font-size: 20px;\\n  margin: auto 0;\\n  height: 100%;\\n  align-items: center;\\n  display: flex;\\n  align-items: center;\\n  padding-left: 2px;\\n}\\n\\n#cancel-form{\\n  position: absolute;\\n  background-color: transparent;\\n  color: rgb(255, 145, 0);;\\n  top: 0;\\n  right: 0;\\n  margin: 0;\\n  font-weight: bolder;\\n  scale: 1;\\n  transition: scale 0.1s;\\n}\\n\\n#cancel-form:hover{\\n  scale: 1.4\\n}\\n\\n.form-grid{\\n  display: grid;\\n  grid-template-rows: 1fr 1fr;\\n  margin: 4px;\\n}\\n\\n.form-grid > label{\\n  display: flex;\\n  width: 100%;\\n}\\n\\nlabel{\\n  margin: auto 2px auto 2px;\\n  font-size: 100%;\\n}\\n\\ninput{\\n  padding: 4px;\\n  border-radius: 4px;\\n  border-style: none;\\n}\\n\\ninput:focus{\\n  outline: rgb(0, 102, 255) solid 2px;\\n}\\n\\n#radio{\\n  display: flex;\\n  justify-content: space-between;\\n}\\n\\n.radio{\\n  flex: 2;\\n  text-align: right;\\n}\\n\\nlabel > p{\\n  margin: 0;\\n  color: red;\\n  font-weight: lighter;\\n  padding-right: 2px;\\n}\\n\\nlabel[for='title']{\\n  justify-content: space-between;\\n}\\n\\nlabel[for='read']{\\n  flex: 1;\\n}\\n\\n#submit{\\n  display: block;\\n  font-size: 100%;\\n  border-style: none;\\n  border-radius: 4px;\\n  margin: auto;\\n  padding: 8px 12px;\\n  \\n}\\n\\nsection{\\n  width: 100%;\\n  min-height: 79.2vh;\\n  height: fit-content;\\n  position: relative;\\n}\\n\\n#library-grid{\\n  display: grid;\\n  grid-template-rows: 1fr;\\n  width: 60%;\\n  height: 100%;\\n  margin: auto;\\n}\\n\\n.book-div{\\n  display: flex;\\n  border-bottom: 1px solid black;\\n  width: 100%;\\n}\\n\\n.header-title{\\n  flex: 3;\\n}\\n\\n.header-author{\\n  flex: 2;\\n}\\n\\n.header-number,\\n.header-read,\\n.header-remove{\\n  flex: 1;\\n}\\n\\n.flex-remove{\\n  position: relative;\\n}\\n\\n.flex{\\n  margin: 0;\\n  padding: 15px;\\n  text-align: center;\\n  position: relative;\\n  display: flex;\\n  justify-content: center;\\n  height: fit-content;\\n}\\n\\n.flex-title{\\n  flex: 3;\\n}\\n\\n.flex-author{\\n  flex: 2;\\n}\\n\\n.flex-number,\\n.flex-read,\\n.flex-remove{\\n  flex: 1;\\n}\\n\\n.flex-remove{\\n  position: relative;\\n}\\n\\n.remove-btn{\\n  background-color: red;\\n  color: black;\\n  padding: 8px 6px;\\n  position: absolute;\\n  top: 0;\\n}\\n\\n.flex-read{\\n  gap: 5px;\\n  height: 100%;\\n  padding: 0;\\n  align-items: center;\\n}\\n\\n.span-Yes::after{\\n  content: ' \\\\2713';\\n}\\n\\n.span-No::after{\\n  content: ' \\\\2715';\\n}\\n\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://library/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://library/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://library/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://library/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n\n  return updater;\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://library/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://library/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://library/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://library/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n\n  var needLayer = typeof obj.layer !== \"undefined\";\n\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n\n  css += obj.css;\n\n  if (needLayer) {\n    css += \"}\";\n  }\n\n  if (obj.media) {\n    css += \"}\";\n  }\n\n  if (obj.supports) {\n    css += \"}\";\n  }\n\n  var sourceMap = obj.sourceMap;\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, styleElement, options.options);\n}\n\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n\n  styleElement.parentNode.removeChild(styleElement);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://library/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://library/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/book.js":
/*!*********************!*\
  !*** ./src/book.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"book\": () => (/* binding */ book)\n/* harmony export */ });\n// Factory function for books\nconst book = (title, author, pageNum) => {\n  \n  return {\n    title: title,\n    author: author,\n    pageNum: pageNum,\n    readStatus: false,\n\n    // Assigns the object an id number. *See Library\n    setId(idNumber) {\n      this.id = idNumber;\n    },\n  }\n}\n\n\n\n//# sourceURL=webpack://library/./src/book.js?");

/***/ }),

/***/ "./src/displayController.js":
/*!**********************************!*\
  !*** ./src/displayController.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Display\": () => (/* binding */ Display)\n/* harmony export */ });\n\n\nconst Display = (() => {\n  \n})(); \n\n\n\n\n\n\n\n\n\n\n// The module that affects what the user sees;\n// Everything that alters the dom;\n// Must have to pull information to fill values,\n// or allow another module/function to do the filling.\n\n// function to create dom elements with optional class and innerText;\n// if text was wanted, but a className is not, enter false instead;\nfunction tagMaker(htmlTag, className, text) {\n  let element = document.createElement(htmlTag);\n  if(className) {\n    element.classList.add(className);\n  } else if(text) {\n    element.innerHTML = text;\n  } return element;\n}\n\nconst valueAssignment = () => {\n\tfunction buildTile() {\n\t\tlet book_div = document.createElement('div');\n\t\tlet title = tagMaker('p');\n\t\tlet author = tagMaker('p');\n\t\tlet pageNum = tagMaker('p');\n\t\tlet read = tagMaker('p');\n\t\tlet omit = tagMaker('p');\n\t\tbook.append(title, author, pageNum, read, omit);\n\t\treturn book_div;\n\t}\n\tfunction assignValues(domElement, obj) {\n\t\tlet nodes = domElement.childNodes;\n\t\tfor(let i = 0; i < nodes.length; i++) {\n\t\t\tlet keyValue = Object.values(obj)[i];\n\t\t\tnodes[i].textContent = keyValue;\n\t\t}\n\t};\n\tfunction produceBookTile(obj) {\n\t\tlet book = buildTile();\n\t\tassignValues(book, obj);\n\t\treturn book;\n\t}\n\n\treturn { produceBookTile };\n};\n\n // Attaches the information from the book object onto it's DOM element\nfunction giveValues(obj, arr){\n  for(i = 0; i < arr.length; i++){\n   let key = Object.keys(obj)[i];\n   let keyValue = Object.values(obj)[i];\n   (key === 'remove') ? createButton(arr[i]) : arr[i].textContent = keyValue;\n   arr[i].classList = `flex flex-${key}`;\n   (key === 'read') ? createSpan(arr[i], keyValue) : false;\n  }; return\n};  \n\n\n// function to create a book item, containing all the fields necessary\nfunction buildTile(obj){\n  let book = document.createElement('div');\n  let title = tagMaker('p');\n  let author = tagMaker('p');\n  let pageNum = tagMaker('p');\n  let read = tagMaker('p');\n  let omit = tagMaker('p');\n  book.append(title, author, pageNum, read, omit);\n  let nodes = book.childNodes; // creates a nodeList of each p element created and appended\n  giveValues(obj, nodes); // I want to take this out and have seperate function\n                          // perform this action on the dom element it returns;\n  library_grid.appendChild(book_div).classList = 'book-div';\n};\n // Clears the existing grid of all elements\n function clearGrid(){\n  let book_divs = document.querySelectorAll('.book-div');\n  book_divs.forEach((element)=>{\n    if(element !== book_divs[0]){\n      element.remove();\n    };\n  }); \n}; \n \n\n\n//# sourceURL=webpack://library/./src/displayController.js?");

/***/ }),

/***/ "./src/formActions.js":
/*!****************************!*\
  !*** ./src/formActions.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getValues\": () => (/* binding */ getValues)\n/* harmony export */ });\n\nconst elements = document.getElementById('form').elements;\n\nfunction extractValues(elements) {\n  \n}\n\nfunction checkForErrors(form_elements) {\n  form_elements\n}\n\n\nfunction getValues() {\n  \n  const array = [];\n  for(let i = 0; i < elements.length; i++) {\n    array.push(elements[i].value);\n  }\n  if(!elements[0].value) {\n      inputError();\n      return false;\n    }\n  return array;\n}\n\n\n//# sourceURL=webpack://library/./src/formActions.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _formActions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./formActions */ \"./src/formActions.js\");\n/* harmony import */ var _libraryActions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./libraryActions */ \"./src/libraryActions.js\");\n/* harmony import */ var _displayController__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./displayController */ \"./src/displayController.js\");\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n\n\n\n\n\nwindow.addEventListener('load', () => {\n  // Connection to the form's submit button;\n  const submitButton = document.getElementById('submit');\n  submitButton.addEventListener('click', () => {\n    console.log(submitButton);\n    Form.checkForErrors(form.elements);\n    _libraryActions__WEBPACK_IMPORTED_MODULE_1__.Library.addBookToLibrary(values);\n    _displayController__WEBPACK_IMPORTED_MODULE_2__.Display.showLibrary();\n  })\n})\n\n\n\n\n\n\nsubmit_btn.addEventListener('click', ()=>{\n  let book = createBookObject(form.elements);\n  if(!book.title) { // checks if title was left empty\n    inputTitleErr();\n    return false; // ensures the form  will not be submitted \n  } else {\n    addBookToLibrary(book);\n  };\n  toggleForm();\n  displayLibrary();\n  return;\n});\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n// Set Global Variables\nconst form_container = document.querySelector('.form_container');\nconst form = document.getElementById('form');\nconst form_btn = document.querySelector('#form-btn');\nconst submit_btn = document.querySelector('#submit');\nconst cancel_btn = document.querySelector('#cancel-form');\nconst input_focus = document.querySelector('input[id=\"title\"]');\nconst buttons = document.querySelectorAll('button');\nconst library_grid = document.getElementById('library-grid');\nconst myLibrary = [];\n\n// Creates p elements within a div to display information\nfunction buildTile(obj){\n let book_div = document.createElement('div');\n let title = document.createElement('p');\n let author = document.createElement('p');\n let pageNum = document.createElement('p');\n let read = document.createElement('p');\n let omit = document.createElement('p');\n book_div.append(title, author, pageNum, read, omit);\n let nodes = book_div.childNodes; // creates a nodeList of each p element created and appended\n giveValues(obj, nodes);\n library_grid.appendChild(book_div).classList = 'book-div';\n};\n\n// Attaches the information from the book object onto it's DOM element\nfunction giveValues(obj, arr){\n  for(i = 0; i < arr.length; i++){\n   let key = Object.keys(obj)[i];\n   let keyValue = Object.values(obj)[i];\n   (key === 'remove') ? createButton(arr[i]) : arr[i].textContent = keyValue;\n   arr[i].classList = `flex flex-${key}`;\n   (key === 'read') ? createSpan(arr[i], keyValue) : false;\n  }; return\n};  \n\n// Creates a span for the check or X mark \nfunction createSpan(node, keyValue){\n  let span = document.createElement('span');\n  node.appendChild(span).classList = `span-${keyValue}`;\n};\n\n// Assigns datakeys and the event listeners corresponding to those keys\nfunction assignDatakeys(){\n  let remove_btns = document.querySelectorAll('.remove-btn');\n  let read_btns = document.querySelectorAll('.flex-read');\n  for(let i = 0; i < remove_btns.length; i++){\n    remove_btns[i].dataset.key = `${i}`;\n    remove_btns[i].addEventListener('click', () => {\n      removeBook(remove_btns[i].dataset.key);\n    });\n  };\n  for(let i = 0; i < read_btns.length; i++){\n    read_btns[i].dataset.key = `${i}`;\n    read_btns[i].addEventListener('click', () => {\n      toggleReadStatus(read_btns[i].dataset.key);\n    });\n  };\n};\n\n// Allows for the 'Read' status on an object to be switched to either no or yes\nfunction toggleReadStatus(index){\n  (myLibrary[index].read === 'Yes') ? myLibrary[index].read = 'No' : myLibrary[index].read = 'Yes';\n  displayLibrary();\n};\n\n\n // Removes a book from the library array\nfunction removeBook(index){\n  myLibrary.splice(index, 1);\n  displayLibrary();\n};\n\n// Creates a button \nfunction createButton(tag){\n  let button = document.createElement('button');\n   tag.appendChild(button).classList = 'remove-btn';\n    button.textContent = 'Del';\n};\n\n // Book Object Contructor\nfunction Book(title, author, page, read){\n  this.title = title,\n  this.author = author,\n  this.number = page,\n  this.read = read;\n  this.remove = '';\n};\n\nBook.prototype.readToggle = function(){\n  console.log(this)\n  (this.read === 'yes') ? this.read = 'no' : this.read = 'yes';\n  displayLibrary();\n  return;\n};\n\n // Adds new Book object to myLibrary array\nfunction addBookToLibrary(obj){\n  deleteDupes(obj);\n  myLibrary.push(obj);\n};\n\n // If multiple books sharing the same Title are entered, delete old book\nfunction deleteDupes(obj){\n  for(let i = 0; i < myLibrary.length; i++){\n    if(obj.title === myLibrary[i].title){\n      myLibrary.splice(i, 1);\n    };\n  }; \n};\n // Switches form's visibility between 'hidden' and 'visibile'\nfunction toggleForm(){\n  form.reset();\n  form_container.classList.toggle('hidden');\n  return;\n};\n\n // Clears the existing grid of all elements\nfunction clearGrid(){\n  let book_divs = document.querySelectorAll('.book-div');\n  book_divs.forEach((element)=>{\n    if(element !== book_divs[0]){\n      element.remove();\n    };\n  }); \n}; \n\n // Runs through myLibrary array and displays information\nfunction displayLibrary(){\n  clearGrid();\n  myLibrary.forEach((book) => {\n    buildTile(book);\n  });\n  assignDatakeys();\n};\n\n// Returns the value of the checked radio box\nfunction radioCheck(){\n  let radios = document.getElementsByName('read');\n  for(let i = 0; i < radios.length; i++){\n    if(radios[i].checked){\n      return radios[i].value;\n    };\n  }; \n};\n\n // Creates a book object from form inputs\nfunction getInfo(obj){\n  let array = [];\n  for(let i = 1; i < obj.length; i++){\n    array.push(obj[i].value);\n  };\n  let book = new Book(array[0], array[1], array[2], radioCheck()) // inputs checked radio input's value\n  return book;\n};\n\n // Appends an empty title input warning\nfunction inputTitleErr(){\n  let label = document.querySelector('label[for=\"title\"]')\n  if(label.lastElementChild){return};\n  let p = document.createElement('p');\n  label.appendChild(p).classList.add = 'inputTitleErr_p';\n  p.textContent = '*title is empty';\n};\n\n // removes the warning label as you type into the input\nfunction checkWarning(){\n  let label = document.querySelector('label[for=\"title\"]')\n  if(label.lastElementChild){\n    label.lastElementChild.remove();\n  } return;\n};\n\nsubmit_btn.addEventListener('click', ()=>{\n  let book = getInfo(form.elements);\n  if((book.title === '' || book.title === undefined)){ // checks if title was left empty\n    inputTitleErr();\n    return false; // ensures the form  will not be submitted \n  } else {\n    addBookToLibrary(book);\n  };\n  toggleForm();\n  displayLibrary();\n  return;\n});\n\n//# sourceURL=webpack://library/./src/index.js?");

/***/ }),

/***/ "./src/libraryActions.js":
/*!*******************************!*\
  !*** ./src/libraryActions.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Library\": () => (/* binding */ Library)\n/* harmony export */ });\n/* harmony import */ var _book__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./book */ \"./src/book.js\");\n\n\nconst Library = (() => {\n\n  // Collection of object to be referenced\n  const myLibrary = [];\n\n  // Collection of objects removed.\n  const deletedLibrary = [];\n\n  // Assign an id number to each object indicating its place within the array\n  function assignIds(array) {\n    for(let i = 0; i < array.length; i++) {\n      assignedArray[i].setId(i);\n    } return array;\n  }\n\n  function getValues() {\n    if(!elements[0].value) {\n      return false;\n    }\n    const array = [];\n    for(let i = 0; i < elements.length; i++) {\n      array.push(elements[i].value);\n    }\n    return array;\n  }\n\n  return {\n    addBookToLibrary(form_elements) {\n      if(!form_elements[0]) {\n        return false;\n      }\n      const values = getValues(form_elements)\n      const bookObj = (0,_book__WEBPACK_IMPORTED_MODULE_0__.book)(values[0], values[1], values[2])\n      myLibrary.push(bookObj);\n    },\n\n    removeBookFromLibrary(obj_id) {\n      myLibrary.splice(obj_id, 1);\n    },\n\n    getLibrary() {\n      const finishedLibrary = assignIds(myLibrary);\n      return finishedLibrary;       \n    } \n  }\n})();\n\n\n//# sourceURL=webpack://library/./src/libraryActions.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;