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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `body {\n    background-color: #535353;\n    margin: 0px;\n    padding: 0px;\n    height: 100vh;\n}\n\n.content {\n    width: 100%;\n    height: 100%;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n    gap: 24px;\n}\n\n.boards {\n    display: flex;\n    flex-direction: row;\n    align-items: center;\n    justify-content: center;\n    gap: 24px;\n}\n\n.board-container {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n    gap: 24px;\n}\n\n.board-text {\n    color: red;\n    font-size: 24px;\n}\n\n.board {\n    display: grid;\n    width: 600px;\n    height: 600px;\n    grid-template-rows: repeat(10, 1fr);\n    grid-template-columns: repeat(10, 1fr);\n}\n\n.square {\n    border: 1px solid gray;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n\n#computerBoard > .square:hover {\n    background-color: rgb(194, 155, 155);\n}\n\n.ship {\n    background-color: blue;\n}\n\n.sunk {\n    background-color: #535353;\n}\n\n.empty {\n    background-color: aquamarine;\n}\n\n.hit {\n    background-color: red;\n}\n\n.miss {\n    background-color: yellow;\n}\n\n.instructions {\n    background-color: antiquewhite;\n    font-size: larger;\n    padding: 0px 16px;\n}\n\n.hidden {\n    /* display: none; */\n    opacity: 0;\n    transition: opacity 500ms ease-in-out\n}\n\nimg {\n    max-width: 100%;\n    height: auto;\n    pointer-events: none;\n}`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://battleship/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://battleship/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://battleship/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://battleship/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://battleship/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://battleship/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://battleship/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://battleship/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://battleship/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://battleship/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _scripts_domFunctions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scripts/domFunctions */ \"./src/scripts/domFunctions.js\");\n/* harmony import */ var _scripts_game__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./scripts/game */ \"./src/scripts/game.js\");\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n\n\n\n\n// FULL CODE\n// create game\nconst newGame = (0,_scripts_game__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n\n// build Gameboards\n(0,_scripts_domFunctions__WEBPACK_IMPORTED_MODULE_0__.buildGameboards)();\n\n// add event listeners for player move\n(0,_scripts_domFunctions__WEBPACK_IMPORTED_MODULE_0__.addBoardListeners)();\n \n\n\n//# sourceURL=webpack://battleship/./src/index.js?");

/***/ }),

/***/ "./src/scripts/AI.js":
/*!***************************!*\
  !*** ./src/scripts/AI.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./helpers */ \"./src/scripts/helpers.js\");\n\n\n// AI functions for computer player\n\n// shoot in a new empty area on board\nfunction shootNew(hits, misses) {\n  let newCoord = (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.getRandCoord)();\n  while (hits.includes(newCoord) || misses.includes(newCoord)) {\n    newCoord = (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.getRandCoord)();\n  }\n  return newCoord;\n}\n\nfunction linearOffset(directionArr, direction, fixed) {\n  // find min and max of directionArr\n  const minMax = [Math.min(...directionArr), Math.max(...directionArr)];\n  let nextLinear;\n\n  // make new array of possible values\n  let poss = [];\n  for (let i = minMax[0] + 1; i <= minMax[1]; i++) {\n    poss.push(i);\n  }\n  // if max <= 8, add new possible max\n  if (minMax[1] >= 8) {\n    poss.push(minMax[1] + 1);\n  } \n  // if min >= 1, add new possible min\n  if (minMax[0] >= 1) {\n    poss.push(minMax[0] - 1)\n  }\n\n  // pick a random value from possibles and return\n  nextLinear = poss[Math.floor(Math.random() * poss.length)];\n\n\n  if (direction === 'x') {\n    return `${nextLinear}${fixed}`;\n  }\n  return `${fixed}${nextLinear}`;\n}\n\n// random offset of one square from start\nfunction randOffset(start) {\n  const randOffsets = [[0, 1], [0, -1], [1, 0], [-1, 0]];\n  const offset = randOffsets[Math.floor(Math.random() * randOffsets.length)];\n  const x = parseInt(start.charAt(0), 10) + offset[0];\n  const y = parseInt(start.charAt(1), 10) + offset[1];\n\n  if (x < 0 || x > 9 || y < 0 || y > 9) return randOffset(start);\n  return `${x}${y}`;\n}\n\nfunction shootNextTo(sunkHits, hits, misses) {\n  // find the unique hits that have not sunk ships\n  const uniqueHits = [];\n  hits.forEach((hit) => {\n    if (!sunkHits.includes(hit)) uniqueHits.push(hit);\n  });\n  // if there is only one unique hit, just randomly shoot next to it\n  if (uniqueHits.length === 1) {\n    let move = randOffset(uniqueHits[0]);\n    while (hits.includes(move) || misses.includes(move)) {\n      move = randOffset(uniqueHits[0]);\n    }\n    return move;\n  }\n  // otherwise shoot along the current line\n  // test first two entries of uniqueHits for direction\n  const directionArr = [];\n  let direction;\n  let fixed;\n  if (uniqueHits[0].charAt(1) === uniqueHits[1].charAt(1)) {\n    uniqueHits.forEach((hit) => directionArr.push(parseInt(hit.charAt(0), 10)));\n    direction = 'x';\n    fixed = uniqueHits[0].charAt(1);\n  } else {\n    uniqueHits.forEach((hit) => directionArr.push(parseInt(hit.charAt(1), 10)));\n    direction = 'y';\n    fixed = uniqueHits[0].charAt(0);\n  }\n\n  let move = linearOffset(directionArr, direction, fixed);\n  while (hits.includes(move) || misses.includes(move)) {\n    move = linearOffset(directionArr, direction, fixed);\n  }\n  return move;\n}\n\nfunction AIPlay(AIMode, enemyBoard) {\n  // easy mode, just picks random spots\n  if (AIMode === 'easy') return shootNew(enemyBoard.hits, enemyBoard.misses);\n\n  // med mode, shoots near previous hits\n  // create array of hits on sunk ships\n  const sunkHits = [];\n  enemyBoard.sunk.forEach((sunkShip) => {\n    sunkShip.array.forEach((hit) => sunkHits.push(hit));\n  });\n  // if there are hits not in sunk ships, shoot close\n  if (enemyBoard.hits.length > sunkHits.length) {\n    return shootNextTo(sunkHits, enemyBoard.hits, enemyBoard.misses);\n  }\n  // else pick a random spot and shoot at it\n  return shootNew(enemyBoard.hits, enemyBoard.misses);\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AIPlay);\n\n\n//# sourceURL=webpack://battleship/./src/scripts/AI.js?");

/***/ }),

/***/ "./src/scripts/domFunctions.js":
/*!*************************************!*\
  !*** ./src/scripts/domFunctions.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   addBoardListeners: () => (/* binding */ addBoardListeners),\n/* harmony export */   buildGameboards: () => (/* binding */ buildGameboards)\n/* harmony export */ });\n// DOM functions\n\n// set up array to track cells player can select\nconst listenCells = [];\n\nfunction buildGameboards() {\n  const playerBoard = document.querySelector('#playerBoard');\n  for (let y = 0; y <= 9; y++) {\n    for (let x = 0; x <= 9; x++) {\n      const square = document.createElement('div');\n      square.classList.add('square');\n      square.classList.add('empty');\n      square.id = `p${x}${y}`;\n      playerBoard.appendChild(square);\n    }\n  }\n\n  const computerBoard = document.querySelector('#computerBoard');\n  for (let y = 0; y <= 9; y++) {\n    for (let x = 0; x <= 9; x++) {\n      const square = document.createElement('div');\n      square.classList.add('square');\n      square.classList.add('empty');\n      square.id = `c${x}${y}`;\n      listenCells.push(square.id);\n      computerBoard.appendChild(square);\n    }\n  }\n}\n\n// get click id\nfunction getClickId(e) {\n  console.log('test');\n  const cell = e.target.id.charAt(1) + e.target.id.charAt(2);\n  return cell;\n}\n\n// add event listeners for buttons\nfunction autoPlaceBtn() {\n  let btn = document.querySelector(\"#auto-place\");\n  btn.addEventListener()\n}\n\n// add event listeners to cells\nfunction addBoardListeners() {\n  listenCells.forEach((cellId) => {\n    const cell = document.getElementById(cellId);\n    cell.addEventListener('click', getClickId);\n  });\n}\n\n// remove all event listeners\nfunction removeBoardListeners() {\n  listenCells.forEach((cellId) => {\n    const cell = document.getElementById(cellId);\n    cell.removeEventListener('click', getClickId);\n  });\n}\n\n// remove one listener from array\nfunction removeListenerFromArray(cell) {\n  const index = listenCells.IndexOf(cell);\n  listenCells.splice(index, 1);\n}\n\n// toggle setup btns\nfunction showHideSetupBtns(show) {\n  const newGameContainer = document.querySelector('.setup-btns');\n  const setupContainer = document.querySelector('.new-game');\n  if (show) {\n    newGameContainer.classList.add('hidden');\n    setupContainer.classList.remove('hidden');\n  } else {\n    newGameContainer.classList.remove('hidden');\n    setupContainer.classList.add('hidden');\n  }\n}\n\n// toggle start button\nfunction toggleStartBtn(show) {\n  const startContainer = document.querySelector('.start-btn');\n  if (show) {\n    startContainer.classList.remove('hidden');\n  } else {\n    startContainer.classList.add('hidden');\n  }\n}\n\nfunction displayShip(shipsArray) {\n  shipsArray.forEach(ship => {\n    ship.position.forEach(val => {\n      const cellID = document.getElementById(`p${val}`);\n      cellID.classList.remove('empty');\n      cellID.classList.add('ship');\n    })\n  });\n}\n\n// update boards with new attacks\nfunction updateBoard(target, attack) {\n  // cell id variable\n  let cellID;\n  let modifier;\n  if (target === 'player') {\n    modifier = 'p';\n  } else {\n    modifier = 'c';\n  }\n\n  // if ship was sunk, update visible list, animate sinking\n  if (attack[0] !== 'hit' && attack[0] !== 'miss') {\n    updateShipList(target, attack[0]);\n    animateSinking(target, attack[1]);\n  } else {\n    cellID = document.getElementById(`${modifier}${attack[1]}`);\n    // remove cell event listener if computer board\n    if (modifier === c) removeListenerFromArray(`${modifier}${attack[1]}`);\n\n    // update cell based on attack value\n    if (attack[0] === 'hit') {\n      cellID.classList.remove('ship');\n      cellID.classList.add('hit');\n      animateShot(target, attack[1], 'hit', cellID);\n    } else {\n      cellID.classList.remove('empty');\n      cellID.classList.add('miss');\n      animateShot(target, attack[1], 'miss', cellID);\n    }\n  }\n\n  // add or remove event listeners based on player\n  if (target === 'player') {\n    addBoardListeners();\n  } else {\n    removeBoardListeners();\n  }\n}\n\n// animate ship sinking\nfunction animateSinking(target, shipArray) {\n  let modifier;\n  if (target === 'player') {\n    modifier = 'p';\n  } else {\n    modifier = 'c';\n  }\n      \n  const delay = 500;\n  let promise = Promise.resolve();\n  shipArray.forEach(pos => {\n    promise = promise.then(() => {\n      let cell = document.getElementById(`${modifier}${pos}`);\n      cell.classList.remove('hit');\n      cell.classList.add('sunk');\n    })\n  })\n}\n\n// animate a single shot\nfunction animateShot(target, shot) {\n\n}\n\n// *********\n// REFERENCE animation from KNIGHTS project\nfunction moveKnight(e) {\n  removeKnightListeners();\n  const finish = idToArr(e.target.id);\n  const results = knightMoves(knightPos, finish);\n  displayResults(results);\n  const path = results[3];\n  const delay = 1000;\n  let promise = Promise.resolve();\n  path.forEach((move) => {\n    promise = promise.then(() => {\n      updateKnightPos(knightPos, move);\n      return new Promise((resolve) => {\n        setTimeout(resolve, delay);\n      });\n    });\n  });\n  promise.then(() => {\n    addKnightListeners();\n  });\n}\n\n// update visible list of ships with new sunk ships\nfunction updateShipList(target, shipType) {\n\n}\n\n\n\n\n//# sourceURL=webpack://battleship/./src/scripts/domFunctions.js?");

/***/ }),

/***/ "./src/scripts/game.js":
/*!*****************************!*\
  !*** ./src/scripts/game.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _gameboard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./gameboard */ \"./src/scripts/gameboard.js\");\n/* harmony import */ var _player__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./player */ \"./src/scripts/player.js\");\n/* harmony import */ var _domFunctions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./domFunctions */ \"./src/scripts/domFunctions.js\");\n\n\n\n\n// auto place enemy ships\n\n// wait for user to fire\n\n// enemy fire\n\n// show the winner\n\nconst game = () => {\n  // create players\n  const user = (0,_player__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n  const computer = (0,_player__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n  const AIMode = 'easy';\n\n  // create gameboards\n  const playerBoard = (0,_gameboard__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n  const computerBoard = (0,_gameboard__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n\n  // auto place ships\n  // TESTING ONLY - PLAYER PLACES OWN SHIPS EVENTUALLY\n  playerBoard.autoPlaceShips();\n  computerBoard.autoPlaceShips();\n\n  // player fire\n  function playerFire(move) {\n    const attack = user.playerTurn(move, computerBoard);\n    updateBoard('computer', attack);\n  }\n\n  // computer fire\n  function computerFire() {\n    const attack = computer.computerTurn(AIMode, playerBoard);\n    updateBoard('player', attack);\n  }\n\n  // check for win\n  function checkWin(board) {\n    if (board.sunk.length === 5) return true;\n    return false;\n  }\n\n  return {\n    playerFire,\n    computerFire,\n    checkWin,\n  };\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (game);\n\n\n//# sourceURL=webpack://battleship/./src/scripts/game.js?");

/***/ }),

/***/ "./src/scripts/gameboard.js":
/*!**********************************!*\
  !*** ./src/scripts/gameboard.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _ship__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ship */ \"./src/scripts/ship.js\");\n/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./helpers */ \"./src/scripts/helpers.js\");\n\n\n\nconst gameboard = () => {\n  // game variables\n  const ships = [];\n  const sunk = [];\n  const hits = [];\n  const misses = [];\n\n  // NEED TO ADD COLLISION DETECTION WITH OTHER SHIPS\n  function checkShipPlacement(id, start, isVertical) {\n    const x = parseInt(start.charAt(0));\n    const y = parseInt(start.charAt(1));\n\n    // check against boundary\n    if (!isVertical) {\n      if (x + ((0,_helpers__WEBPACK_IMPORTED_MODULE_1__.shipLengths)(id) - 1) >= 10) return false;\n    } else {\n      if (y + ((0,_helpers__WEBPACK_IMPORTED_MODULE_1__.shipLengths)(id) - 1) >= 10) return false;\n    }\n\n    // check against existing ships\n    if (ships.length !== 0) {\n      // create array of desired ship placement\n      const shipPlace = [];\n      for (let i = 0; i < (0,_helpers__WEBPACK_IMPORTED_MODULE_1__.shipLengths)(id); i++) {\n        if (!isVertical) {\n          shipPlace.push(`${x + i}${y}`);\n        } else {\n          shipPlace.push(`${x}${y + i}`);\n        }\n      }\n      // create array of all current ship placements\n      let currShips = [];\n      ships.forEach(currShip => {\n        currShip.position.forEach(val => {\n          currShips.push(val);\n        });\n      });\n      // check desired array against current array\n      let repeat = currShips.filter(val => shipPlace.includes(val));\n      if (repeat.length !== 0) return false;\n    }\n\n    return true;\n  }\n  // removed placement validation\n  function placeShip(id, start, isVertical) {\n    // create ship array\n    const array = [];\n    const len = (0,_helpers__WEBPACK_IMPORTED_MODULE_1__.shipLengths)(id);\n    if (!isVertical) {\n      const y = parseInt(start.charAt(1));\n      const x = parseInt(start.charAt(0));\n      for (let i = x; i < (x + len); i++) {\n        array.push(`${i}${y}`);\n      }\n    } else {\n      const y = parseInt(start.charAt(1));\n      const x = parseInt(start.charAt(0));\n      for (let j = y; j < (y + len); j++) {\n        array.push(`${x}${j}`);\n      }\n    }\n    // create ship and add to player list\n    ships.push((0,_ship__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(id, array));\n  }\n\n  function autoPlaceShips() {\n    const fleet = ['A', 'B', 'D1', 'D2', 'P'];\n    fleet.forEach((id) => {\n      let rand = (0,_helpers__WEBPACK_IMPORTED_MODULE_1__.getRandCoord)();\n      let randVert = Math.random() < 0.5;\n      while (!checkShipPlacement(id, rand, randVert)) {\n        rand = (0,_helpers__WEBPACK_IMPORTED_MODULE_1__.getRandCoord)();\n        randVert = Math.random() < 0.5;\n      }\n      placeShip(id, rand, randVert);\n    });\n  }\n\n  function receiveAttack(move) {\n    let hitMark = false;\n    let sunkMark = false;\n    // create a return value variable\n    const returnVal = [];\n    // check against enemy ships\n    ships.forEach((shp) => {\n      // if ship not already sunk, check for hits\n      if (!shp.isSunk()) {\n        shp.position.forEach((pt) => {\n          if (pt === move) {\n            // log hit and set var to true\n            shp.hit(move);\n            hitMark = true;\n            // check if ship is sunk\n            if (shp.isSunk()) {\n              sunk.push(shp);\n              sunkMark = true;\n              returnVal.push(shp.shipType, shp.position);\n            }\n          }\n        });\n      }\n    });\n    // if hit was logged, add to hits, else add to misses\n    // update return value\n    if (hitMark && sunkMark) {\n      hits.push(move);\n    } else if (hitMark) {\n      hits.push(move);\n      returnVal.push('hit');\n      returnVal.push(move);\n    } else {\n      misses.push(move);\n      returnVal.push('miss');\n      returnVal.push(move);\n    }\n    return returnVal;\n  }\n  return {\n    ships,\n    hits,\n    misses,\n    sunk,\n    placeShip,\n    autoPlaceShips,\n    receiveAttack,\n  };\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (gameboard);\n\n\n//# sourceURL=webpack://battleship/./src/scripts/gameboard.js?");

/***/ }),

/***/ "./src/scripts/helpers.js":
/*!********************************!*\
  !*** ./src/scripts/helpers.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   getRandCoord: () => (/* binding */ getRandCoord),\n/* harmony export */   shipLengths: () => (/* binding */ shipLengths)\n/* harmony export */ });\n// get ship length from ID\nfunction shipLengths(id) {\n  // lookup ship length by ID\n  const table = {\n    shipId: ['A', 'B', 'D1', 'D2', 'P'],\n    len: [5, 4, 3, 3, 2],\n  };\n\n  return table.len[table.shipId.findIndex((i) => i === id)];\n}\n\n// get random coordinate pair, 0 to 9\nfunction getRandCoord() {\n  const x = Math.floor(Math.random() * 10);\n  const y = Math.floor(Math.random() * 10);\n  return `${x}${y}`;\n}\n\n\n\n\n//# sourceURL=webpack://battleship/./src/scripts/helpers.js?");

/***/ }),

/***/ "./src/scripts/player.js":
/*!*******************************!*\
  !*** ./src/scripts/player.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _AI__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AI */ \"./src/scripts/AI.js\");\n\n\nconst player = () => {\n  function computerTurn(AIMode, enemyBoard) {\n    // get AI Play\n    return enemyBoard.receiveAttack((0,_AI__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(AIMode, enemyBoard));\n  }\n\n  function playerTurn(move, enemyBoard) {\n    return enemyBoard.receiveAttack(move);\n  }\n\n  return {\n    computerTurn,\n    playerTurn,\n  };\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (player);\n\n\n//# sourceURL=webpack://battleship/./src/scripts/player.js?");

/***/ }),

/***/ "./src/scripts/ship.js":
/*!*****************************!*\
  !*** ./src/scripts/ship.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n// create ship\nconst ship = (id, array) => {\n  // ship setup\n  const shipType = id;\n  const position = array;\n  const hits = [];\n\n  function hit(move) {\n    hits.push(move);\n  }\n\n  function isSunk() {\n    return this.position.every((pos) => this.hits.includes(pos));\n  }\n\n  return {\n    shipType,\n    position,\n    hits,\n    hit,\n    isSunk,\n  };\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ship);\n\n\n//# sourceURL=webpack://battleship/./src/scripts/ship.js?");

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