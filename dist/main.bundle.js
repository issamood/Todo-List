"use strict";
(self["webpackChunktodo_list"] = self["webpackChunktodo_list"] || []).push([["main"],{

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./images/task.svg */ "./src/images/task.svg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ./images/add.svg */ "./src/images/add.svg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! ./images/banner.svg */ "./src/images/banner.svg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_3___ = new URL(/* asset import */ __webpack_require__(/*! ./images/addtask.svg */ "./src/images/addtask.svg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_4___ = new URL(/* asset import */ __webpack_require__(/*! ./images/close.svg */ "./src/images/close.svg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_5___ = new URL(/* asset import */ __webpack_require__(/*! ./images/delete.svg */ "./src/images/delete.svg"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
var ___CSS_LOADER_URL_REPLACEMENT_2___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_2___);
var ___CSS_LOADER_URL_REPLACEMENT_3___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_3___);
var ___CSS_LOADER_URL_REPLACEMENT_4___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_4___);
var ___CSS_LOADER_URL_REPLACEMENT_5___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_5___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "body{\n    margin: 0;\n}\n\n#container {\n    display: grid;\n    height: 100vh;\n    width: 100vw;\n    max-height: 100vh;\n    max-width: 100vw;\n\n    grid-template-columns: 10rem auto;\n    grid-template-rows: 6rem auto;\n    overflow: auto;\n    grid-template-areas:\n    \"banner banner\"\n    \"menu content\";\n}\n\n.banner{\n    background-color: #464646;\n    grid-area: banner;\n\n    display: flex;\n    flex-direction: row;\n\n    align-items: center;\n    \n}\n\n.menu{\n    background-color: #b7ffc9;\n    grid-area: menu;\n}\n\n.content{\n    background-color: #fcf7f5;\n    grid-area: content;\n    padding-top: 2.5rem;\n    padding-left: 2.5rem;\n    padding-right: 2.5rem;\n}\n\n.tab {\n    display: flex;\n    flex-direction: row-reverse;\n    align-items: center;\n    justify-content: center;\n    cursor: pointer;\n}\n\n.material-symbols-outlined {\n  font-variation-settings:\n  'FILL' 1,\n  'wght' 200,\n  'GRAD' 0,\n  'opsz' 48\n}\n\n.contentHeaderBar {\n    background-color: rgb(241, 255, 237);\n    margin: 0 auto;\n    width: 420px;\n    height: 2rem;\n    flex-direction: row;\n    justify-content: space-between;\n    align-items: center;\n    display: none;\n    /*Add font style here*/\n}\n\n#task{\n    background: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ") no-repeat center center;\n    margin: 0px;\n    background-size: cover;\n    width: 1rem;\n    height: 1rem;\n}\n\n#addProject{\n    background: url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ") no-repeat center center;\n    margin: 0px;\n    background-size: cover;\n    width: 1rem;\n    height: 1rem;\n}\n\n#title{\n    background: url(" + ___CSS_LOADER_URL_REPLACEMENT_2___ + ") no-repeat center center;\n    margin: 0px;\n    background-size: cover;\n    width: 4rem;\n    height: 4rem;\n}\n\n.addIcon {\n    background: url(" + ___CSS_LOADER_URL_REPLACEMENT_3___ + ") no-repeat center center;\n    margin: 0px;\n    background-size: cover;\n    width: 1rem;\n    height: 1rem;\n}\n\n.add {\n    display: flex;\n    flex-direction: row;\n    justify-content: start;\n    cursor: pointer;\n}\n\n#closeTaskWindow{\n    background: url(" + ___CSS_LOADER_URL_REPLACEMENT_4___ + ") no-repeat center center;\n    margin: 0px;\n    background-size: cover;\n    width: 1.2rem;\n    height: 1.2rem;\n    align-self: flex-end;\n    border-style: none;\n    cursor: pointer;\n}\n\n.taskbarDelete {\n    background: url(" + ___CSS_LOADER_URL_REPLACEMENT_5___ + ") no-repeat center center;\n    background-size: cover;\n    margin: 0px;\n    width: 1rem;\n    height: 1rem;\n    cursor: pointer;\n}\n\n.taskWindow {\n    position: fixed;\n    z-index: 1;\n    left: 0;\n    top: 0;\n    width: 100%;\n    height: 100%;\n    overflow: auto;\n    background-color: rgba(0, 0, 0, 0.4);\n    display: none;\n    flex-direction: column;\n    align-items: center;\n    padding-top: 10rem;\n}\n\n.taskWindowContent {\n    background-color: rgb(255, 249, 253);\n    margin: 10% auto;\n    margin-top: 0%;\n    padding: 20px;\n    border-style: none;\n    width: 380px;\n    font-weight: bolder;\n    flex-direction: column;\n}\n\n.show{\n    display: block;\n}\n\n.showFlex{\n    display: flex;\n}\n\n.doneLabel {\n    position: relative;\n    display: inline-block;\n   }\n   \n   /* Input */\n   .doneLabel > input {\n    appearance: none;\n    -moz-appearance: none;\n    -webkit-appearance: none;\n    z-index: -1;\n    position: absolute;\n    left: -10px;\n    top: -8px;\n    display: block;\n    margin: 0;\n    border-radius: 50%;\n    width: 40px;\n    height: 40px;\n    background-color: rgba(0, 0, 0, 0.6);\n    box-shadow: none;\n    outline: none;\n    opacity: 0;\n    transform: scale(1);\n    pointer-events: none;\n    transition: opacity 0.3s, transform 0.2s;\n   }\n   \n   /* Span */\n   .doneLabel > span {\n    display: inline-block;\n    width: 100%;\n    cursor: pointer;\n   }\n   \n   /* Box */\n   .doneLabel > span::before {\n    content: \"\";\n    display: inline-block;\n    box-sizing: border-box;\n    margin: 3px 11px 3px 1px;\n    border: solid 2px;\n    /* Safari */\n    border-color: rgba(0, 0, 0, 0.6);\n    border-radius: 2px;\n    width: 18px;\n    height: 18px;\n    vertical-align: top;\n    transition: border-color 0.2s, background-color 0.2s;\n   }\n   \n   /* Checkmark */\n   .doneLabel > span::after {\n    content: \"\";\n    display: block;\n    position: absolute;\n    top: 3px;\n    left: 1px;\n    width: 10px;\n    height: 5px;\n    border: solid 2px transparent;\n    border-right: none;\n    border-top: none;\n    transform: translate(3px, 4px) rotate(-45deg);\n   }\n   \n   /* Checked, Indeterminate */\n   .doneLabel > input:checked,\n   .doneLabel > input:indeterminate {\n    background-color: #018786;\n   }\n   \n   .doneLabel > input:checked + span::before,\n   .doneLabel > input:indeterminate + span::before {\n    border-color: #018786;\n    background-color: #018786;\n   }\n   \n   .doneLabel > input:checked + span::after,\n   .doneLabel > input:indeterminate + span::after {\n    border-color: #fff;\n   }\n   \n   .doneLabel > input:indeterminate + span::after {\n    border-left: none;\n    transform: translate(4px, 3px);\n   }\n   \n   /* Hover, Focus */\n   .doneLabel:hover > input {\n    opacity: 0.04;\n   }\n   \n   .doneLabel > input:focus {\n    opacity: 0.12;\n   }\n   \n   .doneLabel:hover > input:focus {\n    opacity: 0.16;\n   }\n   \n   /* Active */\n   .doneLabel > input:active {\n    opacity: 1;\n    transform: scale(0);\n    transition: transform 0s, opacity 0s;\n   }\n   \n   .doneLabel > input:active + span::before {\n    border-color: #85b8b7;\n   }\n   \n   .doneLabel > input:checked:active + span::before {\n    border-color: transparent;\n    background-color: rgba(0, 0, 0, 0.6);\n   }\n   \n   /* Disabled */\n   .doneLabel > input:disabled {\n    opacity: 0;\n   }\n   \n   .doneLabel > input:disabled + span {\n    color: rgba(0, 0, 0, 0.38);\n    cursor: initial;\n   }\n   \n   .doneLabel > input:disabled + span::before {\n    border-color: currentColor;\n   }\n   \n   .doneLabel > input:checked:disabled + span::before,\n   .doneLabel > input:indeterminate:disabled + span::before {\n    border-color: transparent;\n    background-color: currentColor;\n   }\n   \n   .taskBar {\n    display: flex;\n    flex-direction: row;\n\n    justify-content: center;\n    align-items: center;\n\n    height: 3rem;\n    width: 100%;\n\n    background-color: #e0dbd8;\n    border-radius: 10px;\n   }\n\n   .lowBar {\n    background-color: #71ff94;\n    width: .4rem;\n    height: 3rem;\n    border-top-left-radius: 10px;\n    border-bottom-left-radius: 10px;\n   }\n\n   .mediumBar {\n    background-color: #ffd900;\n    width: .4rem;\n    height: 3rem;\n    border-top-left-radius: 10px;\n    border-bottom-left-radius: 10px;\n   }\n\n   .highBar {\n    background-color: #ff6464;\n    width: .4rem;\n    height: 3rem;\n    border-top-left-radius: 10px;\n    border-bottom-left-radius: 10px;\n   }\n\n   .taskbarDue{\n    margin-left: auto;\n   }\n\n   .descWindow{\n    color: white;\n    background-color: #5f5e5d;\n    height: 8rem;\n    width: 100%;\n   }\n\n   .finished{\n    opacity: .4;\n   }\n\n   .strike{\n    text-decoration: line-through;\n   }", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":["body{\n    margin: 0;\n}\n\n#container {\n    display: grid;\n    height: 100vh;\n    width: 100vw;\n    max-height: 100vh;\n    max-width: 100vw;\n\n    grid-template-columns: 10rem auto;\n    grid-template-rows: 6rem auto;\n    overflow: auto;\n    grid-template-areas:\n    \"banner banner\"\n    \"menu content\";\n}\n\n.banner{\n    background-color: #464646;\n    grid-area: banner;\n\n    display: flex;\n    flex-direction: row;\n\n    align-items: center;\n    \n}\n\n.menu{\n    background-color: #b7ffc9;\n    grid-area: menu;\n}\n\n.content{\n    background-color: #fcf7f5;\n    grid-area: content;\n    padding-top: 2.5rem;\n    padding-left: 2.5rem;\n    padding-right: 2.5rem;\n}\n\n.tab {\n    display: flex;\n    flex-direction: row-reverse;\n    align-items: center;\n    justify-content: center;\n    cursor: pointer;\n}\n\n.material-symbols-outlined {\n  font-variation-settings:\n  'FILL' 1,\n  'wght' 200,\n  'GRAD' 0,\n  'opsz' 48\n}\n\n.contentHeaderBar {\n    background-color: rgb(241, 255, 237);\n    margin: 0 auto;\n    width: 420px;\n    height: 2rem;\n    flex-direction: row;\n    justify-content: space-between;\n    align-items: center;\n    display: none;\n    /*Add font style here*/\n}\n\n#task{\n    background: url(./images/task.svg) no-repeat center center;\n    margin: 0px;\n    background-size: cover;\n    width: 1rem;\n    height: 1rem;\n}\n\n#addProject{\n    background: url(./images/add.svg) no-repeat center center;\n    margin: 0px;\n    background-size: cover;\n    width: 1rem;\n    height: 1rem;\n}\n\n#title{\n    background: url(./images/banner.svg) no-repeat center center;\n    margin: 0px;\n    background-size: cover;\n    width: 4rem;\n    height: 4rem;\n}\n\n.addIcon {\n    background: url(./images/addtask.svg) no-repeat center center;\n    margin: 0px;\n    background-size: cover;\n    width: 1rem;\n    height: 1rem;\n}\n\n.add {\n    display: flex;\n    flex-direction: row;\n    justify-content: start;\n    cursor: pointer;\n}\n\n#closeTaskWindow{\n    background: url(./images/close.svg) no-repeat center center;\n    margin: 0px;\n    background-size: cover;\n    width: 1.2rem;\n    height: 1.2rem;\n    align-self: flex-end;\n    border-style: none;\n    cursor: pointer;\n}\n\n.taskbarDelete {\n    background: url(./images/delete.svg) no-repeat center center;\n    background-size: cover;\n    margin: 0px;\n    width: 1rem;\n    height: 1rem;\n    cursor: pointer;\n}\n\n.taskWindow {\n    position: fixed;\n    z-index: 1;\n    left: 0;\n    top: 0;\n    width: 100%;\n    height: 100%;\n    overflow: auto;\n    background-color: rgba(0, 0, 0, 0.4);\n    display: none;\n    flex-direction: column;\n    align-items: center;\n    padding-top: 10rem;\n}\n\n.taskWindowContent {\n    background-color: rgb(255, 249, 253);\n    margin: 10% auto;\n    margin-top: 0%;\n    padding: 20px;\n    border-style: none;\n    width: 380px;\n    font-weight: bolder;\n    flex-direction: column;\n}\n\n.show{\n    display: block;\n}\n\n.showFlex{\n    display: flex;\n}\n\n.doneLabel {\n    position: relative;\n    display: inline-block;\n   }\n   \n   /* Input */\n   .doneLabel > input {\n    appearance: none;\n    -moz-appearance: none;\n    -webkit-appearance: none;\n    z-index: -1;\n    position: absolute;\n    left: -10px;\n    top: -8px;\n    display: block;\n    margin: 0;\n    border-radius: 50%;\n    width: 40px;\n    height: 40px;\n    background-color: rgba(0, 0, 0, 0.6);\n    box-shadow: none;\n    outline: none;\n    opacity: 0;\n    transform: scale(1);\n    pointer-events: none;\n    transition: opacity 0.3s, transform 0.2s;\n   }\n   \n   /* Span */\n   .doneLabel > span {\n    display: inline-block;\n    width: 100%;\n    cursor: pointer;\n   }\n   \n   /* Box */\n   .doneLabel > span::before {\n    content: \"\";\n    display: inline-block;\n    box-sizing: border-box;\n    margin: 3px 11px 3px 1px;\n    border: solid 2px;\n    /* Safari */\n    border-color: rgba(0, 0, 0, 0.6);\n    border-radius: 2px;\n    width: 18px;\n    height: 18px;\n    vertical-align: top;\n    transition: border-color 0.2s, background-color 0.2s;\n   }\n   \n   /* Checkmark */\n   .doneLabel > span::after {\n    content: \"\";\n    display: block;\n    position: absolute;\n    top: 3px;\n    left: 1px;\n    width: 10px;\n    height: 5px;\n    border: solid 2px transparent;\n    border-right: none;\n    border-top: none;\n    transform: translate(3px, 4px) rotate(-45deg);\n   }\n   \n   /* Checked, Indeterminate */\n   .doneLabel > input:checked,\n   .doneLabel > input:indeterminate {\n    background-color: #018786;\n   }\n   \n   .doneLabel > input:checked + span::before,\n   .doneLabel > input:indeterminate + span::before {\n    border-color: #018786;\n    background-color: #018786;\n   }\n   \n   .doneLabel > input:checked + span::after,\n   .doneLabel > input:indeterminate + span::after {\n    border-color: #fff;\n   }\n   \n   .doneLabel > input:indeterminate + span::after {\n    border-left: none;\n    transform: translate(4px, 3px);\n   }\n   \n   /* Hover, Focus */\n   .doneLabel:hover > input {\n    opacity: 0.04;\n   }\n   \n   .doneLabel > input:focus {\n    opacity: 0.12;\n   }\n   \n   .doneLabel:hover > input:focus {\n    opacity: 0.16;\n   }\n   \n   /* Active */\n   .doneLabel > input:active {\n    opacity: 1;\n    transform: scale(0);\n    transition: transform 0s, opacity 0s;\n   }\n   \n   .doneLabel > input:active + span::before {\n    border-color: #85b8b7;\n   }\n   \n   .doneLabel > input:checked:active + span::before {\n    border-color: transparent;\n    background-color: rgba(0, 0, 0, 0.6);\n   }\n   \n   /* Disabled */\n   .doneLabel > input:disabled {\n    opacity: 0;\n   }\n   \n   .doneLabel > input:disabled + span {\n    color: rgba(0, 0, 0, 0.38);\n    cursor: initial;\n   }\n   \n   .doneLabel > input:disabled + span::before {\n    border-color: currentColor;\n   }\n   \n   .doneLabel > input:checked:disabled + span::before,\n   .doneLabel > input:indeterminate:disabled + span::before {\n    border-color: transparent;\n    background-color: currentColor;\n   }\n   \n   .taskBar {\n    display: flex;\n    flex-direction: row;\n\n    justify-content: center;\n    align-items: center;\n\n    height: 3rem;\n    width: 100%;\n\n    background-color: #e0dbd8;\n    border-radius: 10px;\n   }\n\n   .lowBar {\n    background-color: #71ff94;\n    width: .4rem;\n    height: 3rem;\n    border-top-left-radius: 10px;\n    border-bottom-left-radius: 10px;\n   }\n\n   .mediumBar {\n    background-color: #ffd900;\n    width: .4rem;\n    height: 3rem;\n    border-top-left-radius: 10px;\n    border-bottom-left-radius: 10px;\n   }\n\n   .highBar {\n    background-color: #ff6464;\n    width: .4rem;\n    height: 3rem;\n    border-top-left-radius: 10px;\n    border-bottom-left-radius: 10px;\n   }\n\n   .taskbarDue{\n    margin-left: auto;\n   }\n\n   .descWindow{\n    color: white;\n    background-color: #5f5e5d;\n    height: 8rem;\n    width: 100%;\n   }\n\n   .finished{\n    opacity: .4;\n   }\n\n   .strike{\n    text-decoration: line-through;\n   }"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }
  if (!url) {
    return url;
  }
  url = String(url.__esModule ? url.default : url);

  // If url is already wrapped in quotes, remove them
  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }
  if (options.hash) {
    url += options.hash;
  }

  // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls
  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }
  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _loadMenu_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./loadMenu.js */ "./src/loadMenu.js");
/* harmony import */ var _loadBanner__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./loadBanner */ "./src/loadBanner");
/* harmony import */ var _loadContent__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./loadContent */ "./src/loadContent.js");
//imports





//functions
function createContainer() {
    const container = document.createElement('div');
    container.setAttribute('id','container');
    document.body.appendChild(container);
}

function createLayout(container){
    (0,_loadBanner__WEBPACK_IMPORTED_MODULE_2__["default"])(container);
    (0,_loadMenu_js__WEBPACK_IMPORTED_MODULE_1__["default"])(container);
    (0,_loadContent__WEBPACK_IMPORTED_MODULE_3__["default"])(container);

    return container;
}

//Logic Application
createContainer();
const container = document.querySelector('#container')

createLayout(container);

/***/ }),

/***/ "./src/loadBanner":
/*!************************!*\
  !*** ./src/loadBanner ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ loadBanner)
/* harmony export */ });
function loadBanner(container){
    const banner = document.createElement('div');
    banner.classList.add('banner');

    const titleIcon = document.createElement('div');
    titleIcon.classList.add('icon');
    titleIcon.setAttribute('id','title');

    banner.appendChild(titleIcon);

    const title = document.createElement('div');

    title.innerHTML = "Todo List"
    title.classList.add('titleText');

    banner.appendChild(title);

    container.appendChild(banner);
    return container;
}

/***/ }),

/***/ "./src/loadContent.js":
/*!****************************!*\
  !*** ./src/loadContent.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ loadContent)
/* harmony export */ });


function loadContent(container){
    //Create content container
    const content = document.createElement('div');
    content.classList.add('content')

    //Content Header
    const contentTitle = document.createElement('div');
    contentTitle.innerHTML = "Tasks To Do";
    contentTitle.classList.add('contentTitle')
    content.appendChild(contentTitle);

    //Add Task Button
    const add = document.createElement('div');
    add.classList.add('add');

    //Add Task Window
    //declare task window content
    const taskWindow = document.createElement('div');
    const taskWindowContent = document.createElement('div');
    const taskContentHeaderBar = document.createElement('div');
    const taskContentHeader = document.createElement('h1');
    const taskContentTitle = document.createElement('input');
    const taskContentDesc = document.createElement('textarea');
    const taskClose = document.createElement('button');
    const taskDue = document.createElement('div');
    const taskDueInput = document.createElement('input');
    const taskPriority = document.createElement('div');
    const lowPriority = document.createElement('input');
    const lowLabel = document.createElement('label');
    const mediumPriority = document.createElement('input');
    const mediumLabel = document.createElement('label');
    const highPriority = document.createElement('input');
    const highLabel = document.createElement('label');
    const priorityDiv = document.createElement('div');
    const taskAdd = document.createElement('button');
    const tasksDueArray = [];

    //define variables and set functions and classes.
    taskAdd.innerHTML = 'Add Task';
    taskAdd.classList.add('taskAdd');
    taskAdd.addEventListener('click', () => {
        const task = (title,desc,due,priority) => {
            const bar = () => {
                const container = document.createElement('div');
                container.classList.add('taskBar');

                const priorityBar = document.createElement('div');
                if (priority == "low"){
                    priorityBar.classList.add('lowBar');
                }
                else if (priority == "medium"){
                    priorityBar.classList.add('mediumBar');
                }
                else if(priority == "high"){
                    priorityBar.classList.add('highBar');
                }
                const doneLabel = document.createElement('label');
                doneLabel.classList.add('doneLabel');
                const doneCheckbox = document.createElement('input');
                doneCheckbox.setAttribute('type','checkbox');
                doneCheckbox.addEventListener('change', ()=> {
                    if (doneCheckbox.checked) {
                        taskTitle.classList.add('finished');
                        taskTitle.classList.add('strike');
                        taskbarDue.classList.add('finished');
                        taskDelete.classList.add('finished');
                    }
                    else {
                        taskTitle.classList.remove('finished');
                        taskTitle.classList.remove('strike');
                        taskbarDue.classList.remove('finished');
                        taskDelete.classList.remove('finished');
                    }
                })

                doneLabel.appendChild(doneCheckbox);
                doneLabel.appendChild(document.createElement('span'));

                const taskTitle = document.createElement('h3');
                taskTitle.innerHTML = title;
                taskTitle.classList.add('taskbarTitle');

                const taskbarDue = document.createElement('div');
                taskbarDue.innerHTML = due;
                taskbarDue.classList.add('taskbarDue');

                const taskDelete = document.createElement('div');
                taskDelete.classList.add('taskbarDelete');
                taskDelete.addEventListener('click',() => {
                    content.removeChild(container);
                })

                container.addEventListener('click', ()=> {
                    if (container.classList.contains('expanded')){
                        //Close expanded div
                        container.classList.remove('expanded');
                        content.removeChild(document.querySelector('.descWindow'));
                    }
                    else {
                        container.classList.add('expanded');
                        const descWindow = document.createElement('div');
                        descWindow.classList.add('descWindow');
                        descWindow.innerHTML = desc;

                        container.insertAdjacentElement('afterend',descWindow);
                    }
                })

                //Appending to Container
                container.appendChild(priorityBar);
                container.appendChild(doneLabel);
                container.appendChild(taskTitle);
                container.appendChild(taskbarDue);
                container.appendChild(taskDelete);

                taskWindow.classList.remove('show');
                taskContentHeaderBar.classList.remove('showFlex');

                return container;
            }
            return {title,desc,due,priority,bar};
        }
        const title = document.querySelector('.taskContentTitle').value;
        const desc = document.querySelector('.taskContentDesc').value;
        const due = document.querySelector('.taskDueInput').value;
        const priority = document.querySelector('input[name="priority"]:checked').id;

        //All values working now

        const newTask = task(title, desc, due, priority);
        tasksDueArray.push(newTask);
        localStorage.setItem("tasksDue",JSON.stringify(tasksDueArray));
        content.appendChild(newTask.bar());
    });

    taskPriority.innerHTML = "Priority: "
    taskPriority.classList.add('taskPriority');


    lowPriority.setAttribute('type','radio');
    lowPriority.setAttribute('id','low');
    lowPriority.setAttribute('name','priority');
    lowLabel.innerHTML = "Low";
    lowLabel.setAttribute('for','low');
    mediumPriority.setAttribute('type','radio');
    mediumPriority.setAttribute('id','medium');
    mediumPriority.setAttribute('name','priority');
    mediumLabel.innerHTML = "Medium";
    mediumLabel.setAttribute('for','medium');
    highPriority.setAttribute('type','radio');
    highPriority.setAttribute('id','high');
    highPriority.setAttribute('name','priority');
    highLabel.innerHTML = "High";
    highLabel.setAttribute('for','High');
    lowPriority.classList.add('low');
    mediumPriority.classList.add('medium');
    highPriority.classList.add('high');

    priorityDiv.appendChild(lowPriority);
    priorityDiv.appendChild(lowLabel);
    priorityDiv.appendChild(mediumPriority);
    priorityDiv.appendChild(mediumLabel);
    priorityDiv.appendChild(highPriority);
    priorityDiv.appendChild(highLabel);
    

    taskWindowContent.classList.add('taskWindowContent');


    taskContentHeader.classList.add('taskContentHeader');
    taskContentHeader.innerHTML = 'Add Task';

    taskContentHeaderBar.classList.add('contentHeaderBar');
    
    taskClose.setAttribute('id','closeTaskWindow');
    taskClose.addEventListener('click', () => {
        taskWindow.classList.remove('show');
        taskContentHeaderBar.classList.remove('showFlex');
    })

    taskContentHeaderBar.appendChild(taskContentHeader);
    taskContentHeaderBar.appendChild(taskClose);

    taskContentTitle.classList.add('taskContentTitle');
    taskContentTitle.setAttribute('type','text');
    taskContentTitle.setAttribute('placeholder','Task Title');

    taskContentDesc.classList.add('taskContentDesc');
    taskContentDesc.setAttribute('rows','8');
    taskContentDesc.setAttribute('cols','40');
    taskContentDesc.setAttribute('placeholder','Task Description');

    taskWindow.classList.add('taskWindow');
    window.addEventListener('click', (event) => {
        if (event.target == taskWindow) {
            taskWindow.classList.remove('show');
            taskContentHeaderBar.classList.remove('showFlex');
        }
    })

    taskDue.innerHTML = "Task Due:"
    taskDue.classList.add('taskDue');
    taskDueInput.setAttribute('type','date');
    taskDueInput.classList.add('taskDueInput');

    //Append elements to taskWindowContent
    taskWindowContent.appendChild(taskContentTitle);
    taskWindowContent.appendChild(taskContentDesc);
    taskWindowContent.appendChild(taskDue);
    taskWindowContent.appendChild(taskDueInput);
    taskWindowContent.appendChild(taskPriority);
    taskWindowContent.appendChild(priorityDiv);
    taskWindowContent.appendChild(taskAdd);
    taskWindow.appendChild(taskContentHeaderBar);
    taskWindow.appendChild(taskWindowContent);
    

    //Add taskWindow to content
    content.appendChild(taskWindow);

    //Add Event to show task window on click on add task
    add.addEventListener('click', () => {
        taskWindow.classList.add('show');
        taskContentHeaderBar.classList.add('showFlex');
    });

    //Creating add task tab
    const addIcon = document.createElement('div');
    addIcon.classList.add('addIcon');
    const addText = document.createElement('div');
    addText.innerHTML = "Add Task";
    addText.classList.add('addText')
    add.appendChild(addIcon);
    add.appendChild(addText);
    content.appendChild(add);

    container.appendChild(content);
    return container;
}

/***/ }),

/***/ "./src/loadMenu.js":
/*!*************************!*\
  !*** ./src/loadMenu.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ loadMenu)
/* harmony export */ });
function loadMenu(container) {
    //create Banner div
    const menu = document.createElement('div');
    menu.classList.add('menu');

    //This month
    const taskTab = document.createElement('div');
    const taskTabIcon = document.createElement('div');

    taskTab.classList.add('tab');
    taskTab.classList.add('loadTask');
    taskTab.innerHTML = "Tasks Due";

    //FIXXX THISSSSSSSS
    taskTab.addEventListener('click', () => {
        const content = document.querySelector(".content");
        const tasksDue = JSON.parse(localStorage.getItem("tasksDue"));

        console.log(tasksDue);
        for (const i in tasksDue) {
            const container = document.createElement('div');
            container.classList.add('taskBar');

            const priorityBar = document.createElement('div');
            if (tasksDue[i].priority == "low") {
                priorityBar.classList.add('lowBar');
            }
            else if (tasksDue[i].priority == "medium") {
                priorityBar.classList.add('mediumBar');
            }
            else if (tasksDue[i].priority == "high") {
                priorityBar.classList.add('highBar');
            }
            const doneLabel = document.createElement('label');
            doneLabel.classList.add('doneLabel');
            const doneCheckbox = document.createElement('input');
            doneCheckbox.setAttribute('type', 'checkbox');
            doneCheckbox.addEventListener('change', () => {
                if (doneCheckbox.checked) {
                    taskTitle.classList.add('finished');
                    taskTitle.classList.add('strike');
                    taskbarDue.classList.add('finished');
                    taskDelete.classList.add('finished');
                }
                else {
                    taskTitle.classList.remove('finished');
                    taskTitle.classList.remove('strike');
                    taskbarDue.classList.remove('finished');
                    taskDelete.classList.remove('finished');
                }
            })

            doneLabel.appendChild(doneCheckbox);
            doneLabel.appendChild(document.createElement('span'));

            const taskTitle = document.createElement('h3');
            taskTitle.innerHTML = tasksDue[i].title;
            taskTitle.classList.add('taskbarTitle');

            const taskbarDue = document.createElement('div');
            taskbarDue.innerHTML = tasksDue[i].due;
            taskbarDue.classList.add('taskbarDue');

            const taskDelete = document.createElement('div');
            taskDelete.classList.add('taskbarDelete');
            taskDelete.addEventListener('click', () => {
                content.removeChild(container);
            })

            container.addEventListener('click', () => {
                if (container.classList.contains('expanded')) {
                    //Close expanded div
                    container.classList.remove('expanded');
                    content.removeChild(document.querySelector('.descWindow'));
                }
                else {
                    container.classList.add('expanded');
                    const descWindow = document.createElement('div');
                    descWindow.classList.add('descWindow');
                    descWindow.innerHTML = tasksDue[i].desc;

                    container.insertAdjacentElement('afterend', descWindow);
                }
            })

            //Appending to Container
            container.appendChild(priorityBar);
            container.appendChild(doneLabel);
            container.appendChild(taskTitle);
            container.appendChild(taskbarDue);
            container.appendChild(taskDelete);

            content.appendChild(container);
        }

    });

    taskTabIcon.classList.add('icon');
    taskTabIcon.setAttribute('id', 'task');

    taskTab.appendChild(taskTabIcon);

    menu.appendChild(taskTab);

    //Projects
    const projects = document.createElement('div');
    projects.innerHTML = "Projects";
    projects.classList.add('projects');

    menu.appendChild(projects);

    //Add Project Tab
    const addProject = document.createElement('div');
    const addProjectIcon = document.createElement('div');

    addProject.innerHTML = "Add Project";

    addProject.classList.add('tab');
    addProjectIcon.classList.add('icon');
    addProjectIcon.setAttribute('id', 'addProject');

    addProject.addEventListener('click', () => {

    });

    addProject.appendChild(addProjectIcon);

    menu.appendChild(addProject);
    //Final upload to container
    container.appendChild(menu);

    return container;
}

/***/ }),

/***/ "./src/images/add.svg":
/*!****************************!*\
  !*** ./src/images/add.svg ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "05bb44539b52e798ec27.svg";

/***/ }),

/***/ "./src/images/addtask.svg":
/*!********************************!*\
  !*** ./src/images/addtask.svg ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "a31034ddc7668247b597.svg";

/***/ }),

/***/ "./src/images/banner.svg":
/*!*******************************!*\
  !*** ./src/images/banner.svg ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "8bae8002149989dc6c76.svg";

/***/ }),

/***/ "./src/images/close.svg":
/*!******************************!*\
  !*** ./src/images/close.svg ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "f9e1fd884e38ced99e02.svg";

/***/ }),

/***/ "./src/images/delete.svg":
/*!*******************************!*\
  !*** ./src/images/delete.svg ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "552e2a59598f559937b6.svg";

/***/ }),

/***/ "./src/images/task.svg":
/*!*****************************!*\
  !*** ./src/images/task.svg ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "08a1e8d1d67ca4a10d0e.svg";

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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WSxXQUFXLFlBQVksV0FBVyxVQUFVLFlBQVksYUFBYSxXQUFXLE9BQU8sS0FBSyxZQUFZLGFBQWEsV0FBVyxVQUFVLFVBQVUsVUFBVSxPQUFPLEtBQUssVUFBVSxVQUFVLFVBQVUsVUFBVSxVQUFVLFVBQVUsVUFBVSxZQUFZLFdBQVcsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxXQUFXLFVBQVUsWUFBWSxXQUFXLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sVUFBVSxLQUFLLFlBQVksYUFBYSxhQUFhLFdBQVcsWUFBWSxXQUFXLFVBQVUsVUFBVSxVQUFVLFlBQVksV0FBVyxVQUFVLFlBQVksYUFBYSxXQUFXLFVBQVUsWUFBWSxhQUFhLGFBQWEsT0FBTyxVQUFVLEtBQUssWUFBWSxXQUFXLFVBQVUsT0FBTyxVQUFVLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLFdBQVcsWUFBWSxhQUFhLFdBQVcsVUFBVSxZQUFZLGFBQWEsT0FBTyxVQUFVLEtBQUssVUFBVSxVQUFVLFlBQVksV0FBVyxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLE9BQU8sWUFBWSxPQUFPLFlBQVksT0FBTyxNQUFNLFlBQVksYUFBYSxPQUFPLE1BQU0sWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sWUFBWSxNQUFNLFVBQVUsTUFBTSxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsTUFBTSxVQUFVLEtBQUssVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLFVBQVUsS0FBSyxVQUFVLE1BQU0sS0FBSyxZQUFZLFdBQVcsT0FBTyxLQUFLLFlBQVksT0FBTyxNQUFNLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxhQUFhLGFBQWEsY0FBYyxXQUFXLFdBQVcsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FB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Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7QUNoUGU7QUFDZjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhOztBQUViO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsYUFBYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSxLQUFLOztBQUVMO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQSxLQUFLOztBQUVMOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2luZGV4LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9sb2FkQmFubmVyIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9sb2FkQ29udGVudC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvbG9hZE1lbnUuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fID0gbmV3IFVSTChcIi4vaW1hZ2VzL3Rhc2suc3ZnXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18gPSBuZXcgVVJMKFwiLi9pbWFnZXMvYWRkLnN2Z1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8yX19fID0gbmV3IFVSTChcIi4vaW1hZ2VzL2Jhbm5lci5zdmdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfM19fXyA9IG5ldyBVUkwoXCIuL2ltYWdlcy9hZGR0YXNrLnN2Z1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF80X19fID0gbmV3IFVSTChcIi4vaW1hZ2VzL2Nsb3NlLnN2Z1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF81X19fID0gbmV3IFVSTChcIi4vaW1hZ2VzL2RlbGV0ZS5zdmdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzJfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8yX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8zX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfM19fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfNF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzRfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzVfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF81X19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcImJvZHl7XFxuICAgIG1hcmdpbjogMDtcXG59XFxuXFxuI2NvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGhlaWdodDogMTAwdmg7XFxuICAgIHdpZHRoOiAxMDB2dztcXG4gICAgbWF4LWhlaWdodDogMTAwdmg7XFxuICAgIG1heC13aWR0aDogMTAwdnc7XFxuXFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMTByZW0gYXV0bztcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiA2cmVtIGF1dG87XFxuICAgIG92ZXJmbG93OiBhdXRvO1xcbiAgICBncmlkLXRlbXBsYXRlLWFyZWFzOlxcbiAgICBcXFwiYmFubmVyIGJhbm5lclxcXCJcXG4gICAgXFxcIm1lbnUgY29udGVudFxcXCI7XFxufVxcblxcbi5iYW5uZXJ7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICM0NjQ2NDY7XFxuICAgIGdyaWQtYXJlYTogYmFubmVyO1xcblxcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xcblxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBcXG59XFxuXFxuLm1lbnV7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNiN2ZmYzk7XFxuICAgIGdyaWQtYXJlYTogbWVudTtcXG59XFxuXFxuLmNvbnRlbnR7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmY2Y3ZjU7XFxuICAgIGdyaWQtYXJlYTogY29udGVudDtcXG4gICAgcGFkZGluZy10b3A6IDIuNXJlbTtcXG4gICAgcGFkZGluZy1sZWZ0OiAyLjVyZW07XFxuICAgIHBhZGRpbmctcmlnaHQ6IDIuNXJlbTtcXG59XFxuXFxuLnRhYiB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3ctcmV2ZXJzZTtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLm1hdGVyaWFsLXN5bWJvbHMtb3V0bGluZWQge1xcbiAgZm9udC12YXJpYXRpb24tc2V0dGluZ3M6XFxuICAnRklMTCcgMSxcXG4gICd3Z2h0JyAyMDAsXFxuICAnR1JBRCcgMCxcXG4gICdvcHN6JyA0OFxcbn1cXG5cXG4uY29udGVudEhlYWRlckJhciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyNDEsIDI1NSwgMjM3KTtcXG4gICAgbWFyZ2luOiAwIGF1dG87XFxuICAgIHdpZHRoOiA0MjBweDtcXG4gICAgaGVpZ2h0OiAycmVtO1xcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxuICAgIC8qQWRkIGZvbnQgc3R5bGUgaGVyZSovXFxufVxcblxcbiN0YXNre1xcbiAgICBiYWNrZ3JvdW5kOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fICsgXCIpIG5vLXJlcGVhdCBjZW50ZXIgY2VudGVyO1xcbiAgICBtYXJnaW46IDBweDtcXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXG4gICAgd2lkdGg6IDFyZW07XFxuICAgIGhlaWdodDogMXJlbTtcXG59XFxuXFxuI2FkZFByb2plY3R7XFxuICAgIGJhY2tncm91bmQ6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX18gKyBcIikgbm8tcmVwZWF0IGNlbnRlciBjZW50ZXI7XFxuICAgIG1hcmdpbjogMHB4O1xcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcbiAgICB3aWR0aDogMXJlbTtcXG4gICAgaGVpZ2h0OiAxcmVtO1xcbn1cXG5cXG4jdGl0bGV7XFxuICAgIGJhY2tncm91bmQ6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzJfX18gKyBcIikgbm8tcmVwZWF0IGNlbnRlciBjZW50ZXI7XFxuICAgIG1hcmdpbjogMHB4O1xcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcbiAgICB3aWR0aDogNHJlbTtcXG4gICAgaGVpZ2h0OiA0cmVtO1xcbn1cXG5cXG4uYWRkSWNvbiB7XFxuICAgIGJhY2tncm91bmQ6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzNfX18gKyBcIikgbm8tcmVwZWF0IGNlbnRlciBjZW50ZXI7XFxuICAgIG1hcmdpbjogMHB4O1xcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcbiAgICB3aWR0aDogMXJlbTtcXG4gICAgaGVpZ2h0OiAxcmVtO1xcbn1cXG5cXG4uYWRkIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gICAganVzdGlmeS1jb250ZW50OiBzdGFydDtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4jY2xvc2VUYXNrV2luZG93e1xcbiAgICBiYWNrZ3JvdW5kOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF80X19fICsgXCIpIG5vLXJlcGVhdCBjZW50ZXIgY2VudGVyO1xcbiAgICBtYXJnaW46IDBweDtcXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXG4gICAgd2lkdGg6IDEuMnJlbTtcXG4gICAgaGVpZ2h0OiAxLjJyZW07XFxuICAgIGFsaWduLXNlbGY6IGZsZXgtZW5kO1xcbiAgICBib3JkZXItc3R5bGU6IG5vbmU7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLnRhc2tiYXJEZWxldGUge1xcbiAgICBiYWNrZ3JvdW5kOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF81X19fICsgXCIpIG5vLXJlcGVhdCBjZW50ZXIgY2VudGVyO1xcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcbiAgICBtYXJnaW46IDBweDtcXG4gICAgd2lkdGg6IDFyZW07XFxuICAgIGhlaWdodDogMXJlbTtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4udGFza1dpbmRvdyB7XFxuICAgIHBvc2l0aW9uOiBmaXhlZDtcXG4gICAgei1pbmRleDogMTtcXG4gICAgbGVmdDogMDtcXG4gICAgdG9wOiAwO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICBvdmVyZmxvdzogYXV0bztcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjQpO1xcbiAgICBkaXNwbGF5OiBub25lO1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBwYWRkaW5nLXRvcDogMTByZW07XFxufVxcblxcbi50YXNrV2luZG93Q29udGVudCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyNTUsIDI0OSwgMjUzKTtcXG4gICAgbWFyZ2luOiAxMCUgYXV0bztcXG4gICAgbWFyZ2luLXRvcDogMCU7XFxuICAgIHBhZGRpbmc6IDIwcHg7XFxuICAgIGJvcmRlci1zdHlsZTogbm9uZTtcXG4gICAgd2lkdGg6IDM4MHB4O1xcbiAgICBmb250LXdlaWdodDogYm9sZGVyO1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG5cXG4uc2hvd3tcXG4gICAgZGlzcGxheTogYmxvY2s7XFxufVxcblxcbi5zaG93RmxleHtcXG4gICAgZGlzcGxheTogZmxleDtcXG59XFxuXFxuLmRvbmVMYWJlbCB7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgIH1cXG4gICBcXG4gICAvKiBJbnB1dCAqL1xcbiAgIC5kb25lTGFiZWwgPiBpbnB1dCB7XFxuICAgIGFwcGVhcmFuY2U6IG5vbmU7XFxuICAgIC1tb3otYXBwZWFyYW5jZTogbm9uZTtcXG4gICAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xcbiAgICB6LWluZGV4OiAtMTtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICBsZWZ0OiAtMTBweDtcXG4gICAgdG9wOiAtOHB4O1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XFxuICAgIHdpZHRoOiA0MHB4O1xcbiAgICBoZWlnaHQ6IDQwcHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC42KTtcXG4gICAgYm94LXNoYWRvdzogbm9uZTtcXG4gICAgb3V0bGluZTogbm9uZTtcXG4gICAgb3BhY2l0eTogMDtcXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcXG4gICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XFxuICAgIHRyYW5zaXRpb246IG9wYWNpdHkgMC4zcywgdHJhbnNmb3JtIDAuMnM7XFxuICAgfVxcbiAgIFxcbiAgIC8qIFNwYW4gKi9cXG4gICAuZG9uZUxhYmVsID4gc3BhbiB7XFxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICB9XFxuICAgXFxuICAgLyogQm94ICovXFxuICAgLmRvbmVMYWJlbCA+IHNwYW46OmJlZm9yZSB7XFxuICAgIGNvbnRlbnQ6IFxcXCJcXFwiO1xcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAgIG1hcmdpbjogM3B4IDExcHggM3B4IDFweDtcXG4gICAgYm9yZGVyOiBzb2xpZCAycHg7XFxuICAgIC8qIFNhZmFyaSAqL1xcbiAgICBib3JkZXItY29sb3I6IHJnYmEoMCwgMCwgMCwgMC42KTtcXG4gICAgYm9yZGVyLXJhZGl1czogMnB4O1xcbiAgICB3aWR0aDogMThweDtcXG4gICAgaGVpZ2h0OiAxOHB4O1xcbiAgICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xcbiAgICB0cmFuc2l0aW9uOiBib3JkZXItY29sb3IgMC4ycywgYmFja2dyb3VuZC1jb2xvciAwLjJzO1xcbiAgIH1cXG4gICBcXG4gICAvKiBDaGVja21hcmsgKi9cXG4gICAuZG9uZUxhYmVsID4gc3Bhbjo6YWZ0ZXIge1xcbiAgICBjb250ZW50OiBcXFwiXFxcIjtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgdG9wOiAzcHg7XFxuICAgIGxlZnQ6IDFweDtcXG4gICAgd2lkdGg6IDEwcHg7XFxuICAgIGhlaWdodDogNXB4O1xcbiAgICBib3JkZXI6IHNvbGlkIDJweCB0cmFuc3BhcmVudDtcXG4gICAgYm9yZGVyLXJpZ2h0OiBub25lO1xcbiAgICBib3JkZXItdG9wOiBub25lO1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgzcHgsIDRweCkgcm90YXRlKC00NWRlZyk7XFxuICAgfVxcbiAgIFxcbiAgIC8qIENoZWNrZWQsIEluZGV0ZXJtaW5hdGUgKi9cXG4gICAuZG9uZUxhYmVsID4gaW5wdXQ6Y2hlY2tlZCxcXG4gICAuZG9uZUxhYmVsID4gaW5wdXQ6aW5kZXRlcm1pbmF0ZSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMTg3ODY7XFxuICAgfVxcbiAgIFxcbiAgIC5kb25lTGFiZWwgPiBpbnB1dDpjaGVja2VkICsgc3Bhbjo6YmVmb3JlLFxcbiAgIC5kb25lTGFiZWwgPiBpbnB1dDppbmRldGVybWluYXRlICsgc3Bhbjo6YmVmb3JlIHtcXG4gICAgYm9yZGVyLWNvbG9yOiAjMDE4Nzg2O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDE4Nzg2O1xcbiAgIH1cXG4gICBcXG4gICAuZG9uZUxhYmVsID4gaW5wdXQ6Y2hlY2tlZCArIHNwYW46OmFmdGVyLFxcbiAgIC5kb25lTGFiZWwgPiBpbnB1dDppbmRldGVybWluYXRlICsgc3Bhbjo6YWZ0ZXIge1xcbiAgICBib3JkZXItY29sb3I6ICNmZmY7XFxuICAgfVxcbiAgIFxcbiAgIC5kb25lTGFiZWwgPiBpbnB1dDppbmRldGVybWluYXRlICsgc3Bhbjo6YWZ0ZXIge1xcbiAgICBib3JkZXItbGVmdDogbm9uZTtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoNHB4LCAzcHgpO1xcbiAgIH1cXG4gICBcXG4gICAvKiBIb3ZlciwgRm9jdXMgKi9cXG4gICAuZG9uZUxhYmVsOmhvdmVyID4gaW5wdXQge1xcbiAgICBvcGFjaXR5OiAwLjA0O1xcbiAgIH1cXG4gICBcXG4gICAuZG9uZUxhYmVsID4gaW5wdXQ6Zm9jdXMge1xcbiAgICBvcGFjaXR5OiAwLjEyO1xcbiAgIH1cXG4gICBcXG4gICAuZG9uZUxhYmVsOmhvdmVyID4gaW5wdXQ6Zm9jdXMge1xcbiAgICBvcGFjaXR5OiAwLjE2O1xcbiAgIH1cXG4gICBcXG4gICAvKiBBY3RpdmUgKi9cXG4gICAuZG9uZUxhYmVsID4gaW5wdXQ6YWN0aXZlIHtcXG4gICAgb3BhY2l0eTogMTtcXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgwKTtcXG4gICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDBzLCBvcGFjaXR5IDBzO1xcbiAgIH1cXG4gICBcXG4gICAuZG9uZUxhYmVsID4gaW5wdXQ6YWN0aXZlICsgc3Bhbjo6YmVmb3JlIHtcXG4gICAgYm9yZGVyLWNvbG9yOiAjODViOGI3O1xcbiAgIH1cXG4gICBcXG4gICAuZG9uZUxhYmVsID4gaW5wdXQ6Y2hlY2tlZDphY3RpdmUgKyBzcGFuOjpiZWZvcmUge1xcbiAgICBib3JkZXItY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNik7XFxuICAgfVxcbiAgIFxcbiAgIC8qIERpc2FibGVkICovXFxuICAgLmRvbmVMYWJlbCA+IGlucHV0OmRpc2FibGVkIHtcXG4gICAgb3BhY2l0eTogMDtcXG4gICB9XFxuICAgXFxuICAgLmRvbmVMYWJlbCA+IGlucHV0OmRpc2FibGVkICsgc3BhbiB7XFxuICAgIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMzgpO1xcbiAgICBjdXJzb3I6IGluaXRpYWw7XFxuICAgfVxcbiAgIFxcbiAgIC5kb25lTGFiZWwgPiBpbnB1dDpkaXNhYmxlZCArIHNwYW46OmJlZm9yZSB7XFxuICAgIGJvcmRlci1jb2xvcjogY3VycmVudENvbG9yO1xcbiAgIH1cXG4gICBcXG4gICAuZG9uZUxhYmVsID4gaW5wdXQ6Y2hlY2tlZDpkaXNhYmxlZCArIHNwYW46OmJlZm9yZSxcXG4gICAuZG9uZUxhYmVsID4gaW5wdXQ6aW5kZXRlcm1pbmF0ZTpkaXNhYmxlZCArIHNwYW46OmJlZm9yZSB7XFxuICAgIGJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGN1cnJlbnRDb2xvcjtcXG4gICB9XFxuICAgXFxuICAgLnRhc2tCYXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xcblxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG5cXG4gICAgaGVpZ2h0OiAzcmVtO1xcbiAgICB3aWR0aDogMTAwJTtcXG5cXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2UwZGJkODtcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gICB9XFxuXFxuICAgLmxvd0JhciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICM3MWZmOTQ7XFxuICAgIHdpZHRoOiAuNHJlbTtcXG4gICAgaGVpZ2h0OiAzcmVtO1xcbiAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAxMHB4O1xcbiAgICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAxMHB4O1xcbiAgIH1cXG5cXG4gICAubWVkaXVtQmFyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZDkwMDtcXG4gICAgd2lkdGg6IC40cmVtO1xcbiAgICBoZWlnaHQ6IDNyZW07XFxuICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDEwcHg7XFxuICAgIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDEwcHg7XFxuICAgfVxcblxcbiAgIC5oaWdoQmFyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmNjQ2NDtcXG4gICAgd2lkdGg6IC40cmVtO1xcbiAgICBoZWlnaHQ6IDNyZW07XFxuICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDEwcHg7XFxuICAgIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDEwcHg7XFxuICAgfVxcblxcbiAgIC50YXNrYmFyRHVle1xcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcXG4gICB9XFxuXFxuICAgLmRlc2NXaW5kb3d7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzVmNWU1ZDtcXG4gICAgaGVpZ2h0OiA4cmVtO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICB9XFxuXFxuICAgLmZpbmlzaGVke1xcbiAgICBvcGFjaXR5OiAuNDtcXG4gICB9XFxuXFxuICAgLnN0cmlrZXtcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBsaW5lLXRocm91Z2g7XFxuICAgfVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7SUFDSSxTQUFTO0FBQ2I7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsYUFBYTtJQUNiLFlBQVk7SUFDWixpQkFBaUI7SUFDakIsZ0JBQWdCOztJQUVoQixpQ0FBaUM7SUFDakMsNkJBQTZCO0lBQzdCLGNBQWM7SUFDZDs7a0JBRWM7QUFDbEI7O0FBRUE7SUFDSSx5QkFBeUI7SUFDekIsaUJBQWlCOztJQUVqQixhQUFhO0lBQ2IsbUJBQW1COztJQUVuQixtQkFBbUI7O0FBRXZCOztBQUVBO0lBQ0kseUJBQXlCO0lBQ3pCLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSx5QkFBeUI7SUFDekIsa0JBQWtCO0lBQ2xCLG1CQUFtQjtJQUNuQixvQkFBb0I7SUFDcEIscUJBQXFCO0FBQ3pCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLDJCQUEyQjtJ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R0FFQTtJQUNDLGFBQWE7R0FDZDs7R0FFQTtJQUNDLGFBQWE7R0FDZDs7R0FFQSxXQUFXO0dBQ1g7SUFDQyxVQUFVO0lBQ1YsbUJBQW1CO0lBQ25CLG9DQUFvQztHQUNyQzs7R0FFQTtJQUNDLHFCQUFxQjtHQUN0Qjs7R0FFQTtJQUNDLHlCQUF5QjtJQUN6QixvQ0FBb0M7R0FDckM7O0dBRUEsYUFBYTtHQUNiO0lBQ0MsVUFBVTtHQUNYOztHQUVBO0lBQ0MsMEJBQTBCO0lBQzFCLGVBQWU7R0FDaEI7O0dBRUE7SUFDQywwQkFBMEI7R0FDM0I7O0dBRUE7O0lBRUMseUJBQXlCO0lBQ3pCLDhCQUE4QjtHQUMvQjs7R0FFQTtJQUNDLGFBQWE7SUFDYixtQkFBbUI7O0lBRW5CLHVCQUF1QjtJQUN2QixtQkFBbUI7O0lBRW5CLFlBQVk7SUFDWixXQUFXOztJQUVYLHlCQUF5QjtJQUN6QixtQkFBbUI7R0FDcEI7O0dBRUE7SUFDQyx5QkFBeUI7SUFDekIsWUFBWTtJQUNaLFlBQVk7SUFDWiw0QkFBNEI7SUFDNUIsK0JBQStCO0dBQ2hDOztHQUVBO0lBQ0MseUJBQXlCO0lBQ3pCLFlBQVk7SUFDWixZQUFZO0lBQ1osNEJBQTRCO0lBQzVCLCtCQUErQjtHQUNoQzs7R0FFQTtJQUNDLHlCQUF5QjtJQUN6QixZQUFZO0lBQ1osWUFBWTtJQUNaLDRCQUE0QjtJQUM1QiwrQkFBK0I7R0FDaEM7O0dBRUE7SUFDQyxpQkFBaUI7R0FDbEI7O0dBRUE7SUFDQyxZQUFZO0lBQ1oseUJBQXlCO0lBQ3pCLFlBQVk7SUFDWixXQUFXO0dBQ1o7O0dBRUE7SUFDQyxXQUFXO0dBQ1o7O0dBRUE7SUFDQyw2QkFBNkI7R0FDOUJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiYm9keXtcXG4gICAgbWFyZ2luOiAwO1xcbn1cXG5cXG4jY29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgaGVpZ2h0OiAxMDB2aDtcXG4gICAgd2lkdGg6IDEwMHZ3O1xcbiAgICBtYXgtaGVpZ2h0OiAxMDB2aDtcXG4gICAgbWF4LXdpZHRoOiAxMDB2dztcXG5cXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxMHJlbSBhdXRvO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDZyZW0gYXV0bztcXG4gICAgb3ZlcmZsb3c6IGF1dG87XFxuICAgIGdyaWQtdGVtcGxhdGUtYXJlYXM6XFxuICAgIFxcXCJiYW5uZXIgYmFubmVyXFxcIlxcbiAgICBcXFwibWVudSBjb250ZW50XFxcIjtcXG59XFxuXFxuLmJhbm5lcntcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzQ2NDY0NjtcXG4gICAgZ3JpZC1hcmVhOiBiYW5uZXI7XFxuXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIFxcbn1cXG5cXG4ubWVudXtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2I3ZmZjOTtcXG4gICAgZ3JpZC1hcmVhOiBtZW51O1xcbn1cXG5cXG4uY29udGVudHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZjZjdmNTtcXG4gICAgZ3JpZC1hcmVhOiBjb250ZW50O1xcbiAgICBwYWRkaW5nLXRvcDogMi41cmVtO1xcbiAgICBwYWRkaW5nLWxlZnQ6IDIuNXJlbTtcXG4gICAgcGFkZGluZy1yaWdodDogMi41cmVtO1xcbn1cXG5cXG4udGFiIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdy1yZXZlcnNlO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4ubWF0ZXJpYWwtc3ltYm9scy1vdXRsaW5lZCB7XFxuICBmb250LXZhcmlhdGlvbi1zZXR0aW5nczpcXG4gICdGSUxMJyAxLFxcbiAgJ3dnaHQnIDIwMCxcXG4gICdHUkFEJyAwLFxcbiAgJ29wc3onIDQ4XFxufVxcblxcbi5jb250ZW50SGVhZGVyQmFyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI0MSwgMjU1LCAyMzcpO1xcbiAgICBtYXJnaW46IDAgYXV0bztcXG4gICAgd2lkdGg6IDQyMHB4O1xcbiAgICBoZWlnaHQ6IDJyZW07XFxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZGlzcGxheTogbm9uZTtcXG4gICAgLypBZGQgZm9udCBzdHlsZSBoZXJlKi9cXG59XFxuXFxuI3Rhc2t7XFxuICAgIGJhY2tncm91bmQ6IHVybCguL2ltYWdlcy90YXNrLnN2Zykgbm8tcmVwZWF0IGNlbnRlciBjZW50ZXI7XFxuICAgIG1hcmdpbjogMHB4O1xcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcbiAgICB3aWR0aDogMXJlbTtcXG4gICAgaGVpZ2h0OiAxcmVtO1xcbn1cXG5cXG4jYWRkUHJvamVjdHtcXG4gICAgYmFja2dyb3VuZDogdXJsKC4vaW1hZ2VzL2FkZC5zdmcpIG5vLXJlcGVhdCBjZW50ZXIgY2VudGVyO1xcbiAgICBtYXJnaW46IDBweDtcXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXG4gICAgd2lkdGg6IDFyZW07XFxuICAgIGhlaWdodDogMXJlbTtcXG59XFxuXFxuI3RpdGxle1xcbiAgICBiYWNrZ3JvdW5kOiB1cmwoLi9pbWFnZXMvYmFubmVyLnN2Zykgbm8tcmVwZWF0IGNlbnRlciBjZW50ZXI7XFxuICAgIG1hcmdpbjogMHB4O1xcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcbiAgICB3aWR0aDogNHJlbTtcXG4gICAgaGVpZ2h0OiA0cmVtO1xcbn1cXG5cXG4uYWRkSWNvbiB7XFxuICAgIGJhY2tncm91bmQ6IHVybCguL2ltYWdlcy9hZGR0YXNrLnN2Zykgbm8tcmVwZWF0IGNlbnRlciBjZW50ZXI7XFxuICAgIG1hcmdpbjogMHB4O1xcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcbiAgICB3aWR0aDogMXJlbTtcXG4gICAgaGVpZ2h0OiAxcmVtO1xcbn1cXG5cXG4uYWRkIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gICAganVzdGlmeS1jb250ZW50OiBzdGFydDtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4jY2xvc2VUYXNrV2luZG93e1xcbiAgICBiYWNrZ3JvdW5kOiB1cmwoLi9pbWFnZXMvY2xvc2Uuc3ZnKSBuby1yZXBlYXQgY2VudGVyIGNlbnRlcjtcXG4gICAgbWFyZ2luOiAwcHg7XFxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxuICAgIHdpZHRoOiAxLjJyZW07XFxuICAgIGhlaWdodDogMS4ycmVtO1xcbiAgICBhbGlnbi1zZWxmOiBmbGV4LWVuZDtcXG4gICAgYm9yZGVyLXN0eWxlOiBub25lO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi50YXNrYmFyRGVsZXRlIHtcXG4gICAgYmFja2dyb3VuZDogdXJsKC4vaW1hZ2VzL2RlbGV0ZS5zdmcpIG5vLXJlcGVhdCBjZW50ZXIgY2VudGVyO1xcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcbiAgICBtYXJnaW46IDBweDtcXG4gICAgd2lkdGg6IDFyZW07XFxuICAgIGhlaWdodDogMXJlbTtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4udGFza1dpbmRvdyB7XFxuICAgIHBvc2l0aW9uOiBmaXhlZDtcXG4gICAgei1pbmRleDogMTtcXG4gICAgbGVmdDogMDtcXG4gICAgdG9wOiAwO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICBvdmVyZmxvdzogYXV0bztcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjQpO1xcbiAgICBkaXNwbGF5OiBub25lO1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBwYWRkaW5nLXRvcDogMTByZW07XFxufVxcblxcbi50YXNrV2luZG93Q29udGVudCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyNTUsIDI0OSwgMjUzKTtcXG4gICAgbWFyZ2luOiAxMCUgYXV0bztcXG4gICAgbWFyZ2luLXRvcDogMCU7XFxuICAgIHBhZGRpbmc6IDIwcHg7XFxuICAgIGJvcmRlci1zdHlsZTogbm9uZTtcXG4gICAgd2lkdGg6IDM4MHB4O1xcbiAgICBmb250LXdlaWdodDogYm9sZGVyO1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG5cXG4uc2hvd3tcXG4gICAgZGlzcGxheTogYmxvY2s7XFxufVxcblxcbi5zaG93RmxleHtcXG4gICAgZGlzcGxheTogZmxleDtcXG59XFxuXFxuLmRvbmVMYWJlbCB7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgIH1cXG4gICBcXG4gICAvKiBJbnB1dCAqL1xcbiAgIC5kb25lTGFiZWwgPiBpbnB1dCB7XFxuICAgIGFwcGVhcmFuY2U6IG5vbmU7XFxuICAgIC1tb3otYXBwZWFyYW5jZTogbm9uZTtcXG4gICAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xcbiAgICB6LWluZGV4OiAtMTtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICBsZWZ0OiAtMTBweDtcXG4gICAgdG9wOiAtOHB4O1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XFxuICAgIHdpZHRoOiA0MHB4O1xcbiAgICBoZWlnaHQ6IDQwcHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC42KTtcXG4gICAgYm94LXNoYWRvdzogbm9uZTtcXG4gICAgb3V0bGluZTogbm9uZTtcXG4gICAgb3BhY2l0eTogMDtcXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcXG4gICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XFxuICAgIHRyYW5zaXRpb246IG9wYWNpdHkgMC4zcywgdHJhbnNmb3JtIDAuMnM7XFxuICAgfVxcbiAgIFxcbiAgIC8qIFNwYW4gKi9cXG4gICAuZG9uZUxhYmVsID4gc3BhbiB7XFxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICB9XFxuICAgXFxuICAgLyogQm94ICovXFxuICAgLmRvbmVMYWJlbCA+IHNwYW46OmJlZm9yZSB7XFxuICAgIGNvbnRlbnQ6IFxcXCJcXFwiO1xcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAgIG1hcmdpbjogM3B4IDExcHggM3B4IDFweDtcXG4gICAgYm9yZGVyOiBzb2xpZCAycHg7XFxuICAgIC8qIFNhZmFyaSAqL1xcbiAgICBib3JkZXItY29sb3I6IHJnYmEoMCwgMCwgMCwgMC42KTtcXG4gICAgYm9yZGVyLXJhZGl1czogMnB4O1xcbiAgICB3aWR0aDogMThweDtcXG4gICAgaGVpZ2h0OiAxOHB4O1xcbiAgICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xcbiAgICB0cmFuc2l0aW9uOiBib3JkZXItY29sb3IgMC4ycywgYmFja2dyb3VuZC1jb2xvciAwLjJzO1xcbiAgIH1cXG4gICBcXG4gICAvKiBDaGVja21hcmsgKi9cXG4gICAuZG9uZUxhYmVsID4gc3Bhbjo6YWZ0ZXIge1xcbiAgICBjb250ZW50OiBcXFwiXFxcIjtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgdG9wOiAzcHg7XFxuICAgIGxlZnQ6IDFweDtcXG4gICAgd2lkdGg6IDEwcHg7XFxuICAgIGhlaWdodDogNXB4O1xcbiAgICBib3JkZXI6IHNvbGlkIDJweCB0cmFuc3BhcmVudDtcXG4gICAgYm9yZGVyLXJpZ2h0OiBub25lO1xcbiAgICBib3JkZXItdG9wOiBub25lO1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgzcHgsIDRweCkgcm90YXRlKC00NWRlZyk7XFxuICAgfVxcbiAgIFxcbiAgIC8qIENoZWNrZWQsIEluZGV0ZXJtaW5hdGUgKi9cXG4gICAuZG9uZUxhYmVsID4gaW5wdXQ6Y2hlY2tlZCxcXG4gICAuZG9uZUxhYmVsID4gaW5wdXQ6aW5kZXRlcm1pbmF0ZSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMTg3ODY7XFxuICAgfVxcbiAgIFxcbiAgIC5kb25lTGFiZWwgPiBpbnB1dDpjaGVja2VkICsgc3Bhbjo6YmVmb3JlLFxcbiAgIC5kb25lTGFiZWwgPiBpbnB1dDppbmRldGVybWluYXRlICsgc3Bhbjo6YmVmb3JlIHtcXG4gICAgYm9yZGVyLWNvbG9yOiAjMDE4Nzg2O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDE4Nzg2O1xcbiAgIH1cXG4gICBcXG4gICAuZG9uZUxhYmVsID4gaW5wdXQ6Y2hlY2tlZCArIHNwYW46OmFmdGVyLFxcbiAgIC5kb25lTGFiZWwgPiBpbnB1dDppbmRldGVybWluYXRlICsgc3Bhbjo6YWZ0ZXIge1xcbiAgICBib3JkZXItY29sb3I6ICNmZmY7XFxuICAgfVxcbiAgIFxcbiAgIC5kb25lTGFiZWwgPiBpbnB1dDppbmRldGVybWluYXRlICsgc3Bhbjo6YWZ0ZXIge1xcbiAgICBib3JkZXItbGVmdDogbm9uZTtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoNHB4LCAzcHgpO1xcbiAgIH1cXG4gICBcXG4gICAvKiBIb3ZlciwgRm9jdXMgKi9cXG4gICAuZG9uZUxhYmVsOmhvdmVyID4gaW5wdXQge1xcbiAgICBvcGFjaXR5OiAwLjA0O1xcbiAgIH1cXG4gICBcXG4gICAuZG9uZUxhYmVsID4gaW5wdXQ6Zm9jdXMge1xcbiAgICBvcGFjaXR5OiAwLjEyO1xcbiAgIH1cXG4gICBcXG4gICAuZG9uZUxhYmVsOmhvdmVyID4gaW5wdXQ6Zm9jdXMge1xcbiAgICBvcGFjaXR5OiAwLjE2O1xcbiAgIH1cXG4gICBcXG4gICAvKiBBY3RpdmUgKi9cXG4gICAuZG9uZUxhYmVsID4gaW5wdXQ6YWN0aXZlIHtcXG4gICAgb3BhY2l0eTogMTtcXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgwKTtcXG4gICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDBzLCBvcGFjaXR5IDBzO1xcbiAgIH1cXG4gICBcXG4gICAuZG9uZUxhYmVsID4gaW5wdXQ6YWN0aXZlICsgc3Bhbjo6YmVmb3JlIHtcXG4gICAgYm9yZGVyLWNvbG9yOiAjODViOGI3O1xcbiAgIH1cXG4gICBcXG4gICAuZG9uZUxhYmVsID4gaW5wdXQ6Y2hlY2tlZDphY3RpdmUgKyBzcGFuOjpiZWZvcmUge1xcbiAgICBib3JkZXItY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNik7XFxuICAgfVxcbiAgIFxcbiAgIC8qIERpc2FibGVkICovXFxuICAgLmRvbmVMYWJlbCA+IGlucHV0OmRpc2FibGVkIHtcXG4gICAgb3BhY2l0eTogMDtcXG4gICB9XFxuICAgXFxuICAgLmRvbmVMYWJlbCA+IGlucHV0OmRpc2FibGVkICsgc3BhbiB7XFxuICAgIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMzgpO1xcbiAgICBjdXJzb3I6IGluaXRpYWw7XFxuICAgfVxcbiAgIFxcbiAgIC5kb25lTGFiZWwgPiBpbnB1dDpkaXNhYmxlZCArIHNwYW46OmJlZm9yZSB7XFxuICAgIGJvcmRlci1jb2xvcjogY3VycmVudENvbG9yO1xcbiAgIH1cXG4gICBcXG4gICAuZG9uZUxhYmVsID4gaW5wdXQ6Y2hlY2tlZDpkaXNhYmxlZCArIHNwYW46OmJlZm9yZSxcXG4gICAuZG9uZUxhYmVsID4gaW5wdXQ6aW5kZXRlcm1pbmF0ZTpkaXNhYmxlZCArIHNwYW46OmJlZm9yZSB7XFxuICAgIGJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGN1cnJlbnRDb2xvcjtcXG4gICB9XFxuICAgXFxuICAgLnRhc2tCYXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xcblxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG5cXG4gICAgaGVpZ2h0OiAzcmVtO1xcbiAgICB3aWR0aDogMTAwJTtcXG5cXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2UwZGJkODtcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gICB9XFxuXFxuICAgLmxvd0JhciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICM3MWZmOTQ7XFxuICAgIHdpZHRoOiAuNHJlbTtcXG4gICAgaGVpZ2h0OiAzcmVtO1xcbiAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAxMHB4O1xcbiAgICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAxMHB4O1xcbiAgIH1cXG5cXG4gICAubWVkaXVtQmFyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZDkwMDtcXG4gICAgd2lkdGg6IC40cmVtO1xcbiAgICBoZWlnaHQ6IDNyZW07XFxuICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDEwcHg7XFxuICAgIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDEwcHg7XFxuICAgfVxcblxcbiAgIC5oaWdoQmFyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmNjQ2NDtcXG4gICAgd2lkdGg6IC40cmVtO1xcbiAgICBoZWlnaHQ6IDNyZW07XFxuICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDEwcHg7XFxuICAgIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDEwcHg7XFxuICAgfVxcblxcbiAgIC50YXNrYmFyRHVle1xcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcXG4gICB9XFxuXFxuICAgLmRlc2NXaW5kb3d7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzVmNWU1ZDtcXG4gICAgaGVpZ2h0OiA4cmVtO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICB9XFxuXFxuICAgLmZpbmlzaGVke1xcbiAgICBvcGFjaXR5OiAuNDtcXG4gICB9XFxuXFxuICAgLnN0cmlrZXtcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBsaW5lLXRocm91Z2g7XFxuICAgfVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1cmwsIG9wdGlvbnMpIHtcbiAgaWYgKCFvcHRpb25zKSB7XG4gICAgb3B0aW9ucyA9IHt9O1xuICB9XG4gIGlmICghdXJsKSB7XG4gICAgcmV0dXJuIHVybDtcbiAgfVxuICB1cmwgPSBTdHJpbmcodXJsLl9fZXNNb2R1bGUgPyB1cmwuZGVmYXVsdCA6IHVybCk7XG5cbiAgLy8gSWYgdXJsIGlzIGFscmVhZHkgd3JhcHBlZCBpbiBxdW90ZXMsIHJlbW92ZSB0aGVtXG4gIGlmICgvXlsnXCJdLipbJ1wiXSQvLnRlc3QodXJsKSkge1xuICAgIHVybCA9IHVybC5zbGljZSgxLCAtMSk7XG4gIH1cbiAgaWYgKG9wdGlvbnMuaGFzaCkge1xuICAgIHVybCArPSBvcHRpb25zLmhhc2g7XG4gIH1cblxuICAvLyBTaG91bGQgdXJsIGJlIHdyYXBwZWQ/XG4gIC8vIFNlZSBodHRwczovL2RyYWZ0cy5jc3N3Zy5vcmcvY3NzLXZhbHVlcy0zLyN1cmxzXG4gIGlmICgvW1wiJygpIFxcdFxcbl18KCUyMCkvLnRlc3QodXJsKSB8fCBvcHRpb25zLm5lZWRRdW90ZXMpIHtcbiAgICByZXR1cm4gXCJcXFwiXCIuY29uY2F0KHVybC5yZXBsYWNlKC9cIi9nLCAnXFxcXFwiJykucmVwbGFjZSgvXFxuL2csIFwiXFxcXG5cIiksIFwiXFxcIlwiKTtcbiAgfVxuICByZXR1cm4gdXJsO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiLy9pbXBvcnRzXG5pbXBvcnQgJy4vc3R5bGUuY3NzJ1xuaW1wb3J0IGxvYWRNZW51IGZyb20gJy4vbG9hZE1lbnUuanMnXG5pbXBvcnQgbG9hZEJhbm5lciBmcm9tICcuL2xvYWRCYW5uZXInO1xuaW1wb3J0IGxvYWRDb250ZW50IGZyb20gJy4vbG9hZENvbnRlbnQnO1xuXG4vL2Z1bmN0aW9uc1xuZnVuY3Rpb24gY3JlYXRlQ29udGFpbmVyKCkge1xuICAgIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnRhaW5lci5zZXRBdHRyaWJ1dGUoJ2lkJywnY29udGFpbmVyJyk7XG4gICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChjb250YWluZXIpO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVMYXlvdXQoY29udGFpbmVyKXtcbiAgICBsb2FkQmFubmVyKGNvbnRhaW5lcik7XG4gICAgbG9hZE1lbnUoY29udGFpbmVyKTtcbiAgICBsb2FkQ29udGVudChjb250YWluZXIpO1xuXG4gICAgcmV0dXJuIGNvbnRhaW5lcjtcbn1cblxuLy9Mb2dpYyBBcHBsaWNhdGlvblxuY3JlYXRlQ29udGFpbmVyKCk7XG5jb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY29udGFpbmVyJylcblxuY3JlYXRlTGF5b3V0KGNvbnRhaW5lcik7IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gbG9hZEJhbm5lcihjb250YWluZXIpe1xuICAgIGNvbnN0IGJhbm5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGJhbm5lci5jbGFzc0xpc3QuYWRkKCdiYW5uZXInKTtcblxuICAgIGNvbnN0IHRpdGxlSWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHRpdGxlSWNvbi5jbGFzc0xpc3QuYWRkKCdpY29uJyk7XG4gICAgdGl0bGVJY29uLnNldEF0dHJpYnV0ZSgnaWQnLCd0aXRsZScpO1xuXG4gICAgYmFubmVyLmFwcGVuZENoaWxkKHRpdGxlSWNvbik7XG5cbiAgICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXG4gICAgdGl0bGUuaW5uZXJIVE1MID0gXCJUb2RvIExpc3RcIlxuICAgIHRpdGxlLmNsYXNzTGlzdC5hZGQoJ3RpdGxlVGV4dCcpO1xuXG4gICAgYmFubmVyLmFwcGVuZENoaWxkKHRpdGxlKTtcblxuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChiYW5uZXIpO1xuICAgIHJldHVybiBjb250YWluZXI7XG59IiwiaW1wb3J0IHtmb3JtYXQsIGNvbXBhcmVBc2N9IGZyb20gJ2RhdGUtZm5zJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gbG9hZENvbnRlbnQoY29udGFpbmVyKXtcbiAgICAvL0NyZWF0ZSBjb250ZW50IGNvbnRhaW5lclxuICAgIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb250ZW50LmNsYXNzTGlzdC5hZGQoJ2NvbnRlbnQnKVxuXG4gICAgLy9Db250ZW50IEhlYWRlclxuICAgIGNvbnN0IGNvbnRlbnRUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnRlbnRUaXRsZS5pbm5lckhUTUwgPSBcIlRhc2tzIFRvIERvXCI7XG4gICAgY29udGVudFRpdGxlLmNsYXNzTGlzdC5hZGQoJ2NvbnRlbnRUaXRsZScpXG4gICAgY29udGVudC5hcHBlbmRDaGlsZChjb250ZW50VGl0bGUpO1xuXG4gICAgLy9BZGQgVGFzayBCdXR0b25cbiAgICBjb25zdCBhZGQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBhZGQuY2xhc3NMaXN0LmFkZCgnYWRkJyk7XG5cbiAgICAvL0FkZCBUYXNrIFdpbmRvd1xuICAgIC8vZGVjbGFyZSB0YXNrIHdpbmRvdyBjb250ZW50XG4gICAgY29uc3QgdGFza1dpbmRvdyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnN0IHRhc2tXaW5kb3dDb250ZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29uc3QgdGFza0NvbnRlbnRIZWFkZXJCYXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb25zdCB0YXNrQ29udGVudEhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gxJyk7XG4gICAgY29uc3QgdGFza0NvbnRlbnRUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgY29uc3QgdGFza0NvbnRlbnREZXNjID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGV4dGFyZWEnKTtcbiAgICBjb25zdCB0YXNrQ2xvc2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBjb25zdCB0YXNrRHVlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29uc3QgdGFza0R1ZUlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICBjb25zdCB0YXNrUHJpb3JpdHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb25zdCBsb3dQcmlvcml0eSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgY29uc3QgbG93TGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xuICAgIGNvbnN0IG1lZGl1bVByaW9yaXR5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICBjb25zdCBtZWRpdW1MYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XG4gICAgY29uc3QgaGlnaFByaW9yaXR5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICBjb25zdCBoaWdoTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xuICAgIGNvbnN0IHByaW9yaXR5RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29uc3QgdGFza0FkZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIGNvbnN0IHRhc2tzRHVlQXJyYXkgPSBbXTtcblxuICAgIC8vZGVmaW5lIHZhcmlhYmxlcyBhbmQgc2V0IGZ1bmN0aW9ucyBhbmQgY2xhc3Nlcy5cbiAgICB0YXNrQWRkLmlubmVySFRNTCA9ICdBZGQgVGFzayc7XG4gICAgdGFza0FkZC5jbGFzc0xpc3QuYWRkKCd0YXNrQWRkJyk7XG4gICAgdGFza0FkZC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgY29uc3QgdGFzayA9ICh0aXRsZSxkZXNjLGR1ZSxwcmlvcml0eSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgYmFyID0gKCkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgICAgIGNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCd0YXNrQmFyJyk7XG5cbiAgICAgICAgICAgICAgICBjb25zdCBwcmlvcml0eUJhciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgICAgIGlmIChwcmlvcml0eSA9PSBcImxvd1wiKXtcbiAgICAgICAgICAgICAgICAgICAgcHJpb3JpdHlCYXIuY2xhc3NMaXN0LmFkZCgnbG93QmFyJyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2UgaWYgKHByaW9yaXR5ID09IFwibWVkaXVtXCIpe1xuICAgICAgICAgICAgICAgICAgICBwcmlvcml0eUJhci5jbGFzc0xpc3QuYWRkKCdtZWRpdW1CYXInKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSBpZihwcmlvcml0eSA9PSBcImhpZ2hcIil7XG4gICAgICAgICAgICAgICAgICAgIHByaW9yaXR5QmFyLmNsYXNzTGlzdC5hZGQoJ2hpZ2hCYXInKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgY29uc3QgZG9uZUxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcbiAgICAgICAgICAgICAgICBkb25lTGFiZWwuY2xhc3NMaXN0LmFkZCgnZG9uZUxhYmVsJyk7XG4gICAgICAgICAgICAgICAgY29uc3QgZG9uZUNoZWNrYm94ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICAgICAgICAgICAgICBkb25lQ2hlY2tib3guc2V0QXR0cmlidXRlKCd0eXBlJywnY2hlY2tib3gnKTtcbiAgICAgICAgICAgICAgICBkb25lQ2hlY2tib3guYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgKCk9PiB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChkb25lQ2hlY2tib3guY2hlY2tlZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGFza1RpdGxlLmNsYXNzTGlzdC5hZGQoJ2ZpbmlzaGVkJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICB0YXNrVGl0bGUuY2xhc3NMaXN0LmFkZCgnc3RyaWtlJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICB0YXNrYmFyRHVlLmNsYXNzTGlzdC5hZGQoJ2ZpbmlzaGVkJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICB0YXNrRGVsZXRlLmNsYXNzTGlzdC5hZGQoJ2ZpbmlzaGVkJyk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0YXNrVGl0bGUuY2xhc3NMaXN0LnJlbW92ZSgnZmluaXNoZWQnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRhc2tUaXRsZS5jbGFzc0xpc3QucmVtb3ZlKCdzdHJpa2UnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRhc2tiYXJEdWUuY2xhc3NMaXN0LnJlbW92ZSgnZmluaXNoZWQnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRhc2tEZWxldGUuY2xhc3NMaXN0LnJlbW92ZSgnZmluaXNoZWQnKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pXG5cbiAgICAgICAgICAgICAgICBkb25lTGFiZWwuYXBwZW5kQ2hpbGQoZG9uZUNoZWNrYm94KTtcbiAgICAgICAgICAgICAgICBkb25lTGFiZWwuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpKTtcblxuICAgICAgICAgICAgICAgIGNvbnN0IHRhc2tUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gzJyk7XG4gICAgICAgICAgICAgICAgdGFza1RpdGxlLmlubmVySFRNTCA9IHRpdGxlO1xuICAgICAgICAgICAgICAgIHRhc2tUaXRsZS5jbGFzc0xpc3QuYWRkKCd0YXNrYmFyVGl0bGUnKTtcblxuICAgICAgICAgICAgICAgIGNvbnN0IHRhc2tiYXJEdWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgICAgICB0YXNrYmFyRHVlLmlubmVySFRNTCA9IGR1ZTtcbiAgICAgICAgICAgICAgICB0YXNrYmFyRHVlLmNsYXNzTGlzdC5hZGQoJ3Rhc2tiYXJEdWUnKTtcblxuICAgICAgICAgICAgICAgIGNvbnN0IHRhc2tEZWxldGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgICAgICB0YXNrRGVsZXRlLmNsYXNzTGlzdC5hZGQoJ3Rhc2tiYXJEZWxldGUnKTtcbiAgICAgICAgICAgICAgICB0YXNrRGVsZXRlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnRlbnQucmVtb3ZlQ2hpbGQoY29udGFpbmVyKTtcbiAgICAgICAgICAgICAgICB9KVxuXG4gICAgICAgICAgICAgICAgY29udGFpbmVyLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCk9PiB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChjb250YWluZXIuY2xhc3NMaXN0LmNvbnRhaW5zKCdleHBhbmRlZCcpKXtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vQ2xvc2UgZXhwYW5kZWQgZGl2XG4gICAgICAgICAgICAgICAgICAgICAgICBjb250YWluZXIuY2xhc3NMaXN0LnJlbW92ZSgnZXhwYW5kZWQnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRlbnQucmVtb3ZlQ2hpbGQoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmRlc2NXaW5kb3cnKSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb250YWluZXIuY2xhc3NMaXN0LmFkZCgnZXhwYW5kZWQnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGRlc2NXaW5kb3cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRlc2NXaW5kb3cuY2xhc3NMaXN0LmFkZCgnZGVzY1dpbmRvdycpO1xuICAgICAgICAgICAgICAgICAgICAgICAgZGVzY1dpbmRvdy5pbm5lckhUTUwgPSBkZXNjO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBjb250YWluZXIuaW5zZXJ0QWRqYWNlbnRFbGVtZW50KCdhZnRlcmVuZCcsZGVzY1dpbmRvdyk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KVxuXG4gICAgICAgICAgICAgICAgLy9BcHBlbmRpbmcgdG8gQ29udGFpbmVyXG4gICAgICAgICAgICAgICAgY29udGFpbmVyLmFwcGVuZENoaWxkKHByaW9yaXR5QmFyKTtcbiAgICAgICAgICAgICAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoZG9uZUxhYmVsKTtcbiAgICAgICAgICAgICAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQodGFza1RpdGxlKTtcbiAgICAgICAgICAgICAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQodGFza2JhckR1ZSk7XG4gICAgICAgICAgICAgICAgY29udGFpbmVyLmFwcGVuZENoaWxkKHRhc2tEZWxldGUpO1xuXG4gICAgICAgICAgICAgICAgdGFza1dpbmRvdy5jbGFzc0xpc3QucmVtb3ZlKCdzaG93Jyk7XG4gICAgICAgICAgICAgICAgdGFza0NvbnRlbnRIZWFkZXJCYXIuY2xhc3NMaXN0LnJlbW92ZSgnc2hvd0ZsZXgnKTtcblxuICAgICAgICAgICAgICAgIHJldHVybiBjb250YWluZXI7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4ge3RpdGxlLGRlc2MsZHVlLHByaW9yaXR5LGJhcn07XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudGFza0NvbnRlbnRUaXRsZScpLnZhbHVlO1xuICAgICAgICBjb25zdCBkZXNjID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRhc2tDb250ZW50RGVzYycpLnZhbHVlO1xuICAgICAgICBjb25zdCBkdWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudGFza0R1ZUlucHV0JykudmFsdWU7XG4gICAgICAgIGNvbnN0IHByaW9yaXR5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignaW5wdXRbbmFtZT1cInByaW9yaXR5XCJdOmNoZWNrZWQnKS5pZDtcblxuICAgICAgICAvL0FsbCB2YWx1ZXMgd29ya2luZyBub3dcblxuICAgICAgICBjb25zdCBuZXdUYXNrID0gdGFzayh0aXRsZSwgZGVzYywgZHVlLCBwcmlvcml0eSk7XG4gICAgICAgIHRhc2tzRHVlQXJyYXkucHVzaChuZXdUYXNrKTtcbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJ0YXNrc0R1ZVwiLEpTT04uc3RyaW5naWZ5KHRhc2tzRHVlQXJyYXkpKTtcbiAgICAgICAgY29udGVudC5hcHBlbmRDaGlsZChuZXdUYXNrLmJhcigpKTtcbiAgICB9KTtcblxuICAgIHRhc2tQcmlvcml0eS5pbm5lckhUTUwgPSBcIlByaW9yaXR5OiBcIlxuICAgIHRhc2tQcmlvcml0eS5jbGFzc0xpc3QuYWRkKCd0YXNrUHJpb3JpdHknKTtcblxuXG4gICAgbG93UHJpb3JpdHkuc2V0QXR0cmlidXRlKCd0eXBlJywncmFkaW8nKTtcbiAgICBsb3dQcmlvcml0eS5zZXRBdHRyaWJ1dGUoJ2lkJywnbG93Jyk7XG4gICAgbG93UHJpb3JpdHkuc2V0QXR0cmlidXRlKCduYW1lJywncHJpb3JpdHknKTtcbiAgICBsb3dMYWJlbC5pbm5lckhUTUwgPSBcIkxvd1wiO1xuICAgIGxvd0xhYmVsLnNldEF0dHJpYnV0ZSgnZm9yJywnbG93Jyk7XG4gICAgbWVkaXVtUHJpb3JpdHkuc2V0QXR0cmlidXRlKCd0eXBlJywncmFkaW8nKTtcbiAgICBtZWRpdW1Qcmlvcml0eS5zZXRBdHRyaWJ1dGUoJ2lkJywnbWVkaXVtJyk7XG4gICAgbWVkaXVtUHJpb3JpdHkuc2V0QXR0cmlidXRlKCduYW1lJywncHJpb3JpdHknKTtcbiAgICBtZWRpdW1MYWJlbC5pbm5lckhUTUwgPSBcIk1lZGl1bVwiO1xuICAgIG1lZGl1bUxhYmVsLnNldEF0dHJpYnV0ZSgnZm9yJywnbWVkaXVtJyk7XG4gICAgaGlnaFByaW9yaXR5LnNldEF0dHJpYnV0ZSgndHlwZScsJ3JhZGlvJyk7XG4gICAgaGlnaFByaW9yaXR5LnNldEF0dHJpYnV0ZSgnaWQnLCdoaWdoJyk7XG4gICAgaGlnaFByaW9yaXR5LnNldEF0dHJpYnV0ZSgnbmFtZScsJ3ByaW9yaXR5Jyk7XG4gICAgaGlnaExhYmVsLmlubmVySFRNTCA9IFwiSGlnaFwiO1xuICAgIGhpZ2hMYWJlbC5zZXRBdHRyaWJ1dGUoJ2ZvcicsJ0hpZ2gnKTtcbiAgICBsb3dQcmlvcml0eS5jbGFzc0xpc3QuYWRkKCdsb3cnKTtcbiAgICBtZWRpdW1Qcmlvcml0eS5jbGFzc0xpc3QuYWRkKCdtZWRpdW0nKTtcbiAgICBoaWdoUHJpb3JpdHkuY2xhc3NMaXN0LmFkZCgnaGlnaCcpO1xuXG4gICAgcHJpb3JpdHlEaXYuYXBwZW5kQ2hpbGQobG93UHJpb3JpdHkpO1xuICAgIHByaW9yaXR5RGl2LmFwcGVuZENoaWxkKGxvd0xhYmVsKTtcbiAgICBwcmlvcml0eURpdi5hcHBlbmRDaGlsZChtZWRpdW1Qcmlvcml0eSk7XG4gICAgcHJpb3JpdHlEaXYuYXBwZW5kQ2hpbGQobWVkaXVtTGFiZWwpO1xuICAgIHByaW9yaXR5RGl2LmFwcGVuZENoaWxkKGhpZ2hQcmlvcml0eSk7XG4gICAgcHJpb3JpdHlEaXYuYXBwZW5kQ2hpbGQoaGlnaExhYmVsKTtcbiAgICBcblxuICAgIHRhc2tXaW5kb3dDb250ZW50LmNsYXNzTGlzdC5hZGQoJ3Rhc2tXaW5kb3dDb250ZW50Jyk7XG5cblxuICAgIHRhc2tDb250ZW50SGVhZGVyLmNsYXNzTGlzdC5hZGQoJ3Rhc2tDb250ZW50SGVhZGVyJyk7XG4gICAgdGFza0NvbnRlbnRIZWFkZXIuaW5uZXJIVE1MID0gJ0FkZCBUYXNrJztcblxuICAgIHRhc2tDb250ZW50SGVhZGVyQmFyLmNsYXNzTGlzdC5hZGQoJ2NvbnRlbnRIZWFkZXJCYXInKTtcbiAgICBcbiAgICB0YXNrQ2xvc2Uuc2V0QXR0cmlidXRlKCdpZCcsJ2Nsb3NlVGFza1dpbmRvdycpO1xuICAgIHRhc2tDbG9zZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgdGFza1dpbmRvdy5jbGFzc0xpc3QucmVtb3ZlKCdzaG93Jyk7XG4gICAgICAgIHRhc2tDb250ZW50SGVhZGVyQmFyLmNsYXNzTGlzdC5yZW1vdmUoJ3Nob3dGbGV4Jyk7XG4gICAgfSlcblxuICAgIHRhc2tDb250ZW50SGVhZGVyQmFyLmFwcGVuZENoaWxkKHRhc2tDb250ZW50SGVhZGVyKTtcbiAgICB0YXNrQ29udGVudEhlYWRlckJhci5hcHBlbmRDaGlsZCh0YXNrQ2xvc2UpO1xuXG4gICAgdGFza0NvbnRlbnRUaXRsZS5jbGFzc0xpc3QuYWRkKCd0YXNrQ29udGVudFRpdGxlJyk7XG4gICAgdGFza0NvbnRlbnRUaXRsZS5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCd0ZXh0Jyk7XG4gICAgdGFza0NvbnRlbnRUaXRsZS5zZXRBdHRyaWJ1dGUoJ3BsYWNlaG9sZGVyJywnVGFzayBUaXRsZScpO1xuXG4gICAgdGFza0NvbnRlbnREZXNjLmNsYXNzTGlzdC5hZGQoJ3Rhc2tDb250ZW50RGVzYycpO1xuICAgIHRhc2tDb250ZW50RGVzYy5zZXRBdHRyaWJ1dGUoJ3Jvd3MnLCc4Jyk7XG4gICAgdGFza0NvbnRlbnREZXNjLnNldEF0dHJpYnV0ZSgnY29scycsJzQwJyk7XG4gICAgdGFza0NvbnRlbnREZXNjLnNldEF0dHJpYnV0ZSgncGxhY2Vob2xkZXInLCdUYXNrIERlc2NyaXB0aW9uJyk7XG5cbiAgICB0YXNrV2luZG93LmNsYXNzTGlzdC5hZGQoJ3Rhc2tXaW5kb3cnKTtcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZXZlbnQpID0+IHtcbiAgICAgICAgaWYgKGV2ZW50LnRhcmdldCA9PSB0YXNrV2luZG93KSB7XG4gICAgICAgICAgICB0YXNrV2luZG93LmNsYXNzTGlzdC5yZW1vdmUoJ3Nob3cnKTtcbiAgICAgICAgICAgIHRhc2tDb250ZW50SGVhZGVyQmFyLmNsYXNzTGlzdC5yZW1vdmUoJ3Nob3dGbGV4Jyk7XG4gICAgICAgIH1cbiAgICB9KVxuXG4gICAgdGFza0R1ZS5pbm5lckhUTUwgPSBcIlRhc2sgRHVlOlwiXG4gICAgdGFza0R1ZS5jbGFzc0xpc3QuYWRkKCd0YXNrRHVlJyk7XG4gICAgdGFza0R1ZUlucHV0LnNldEF0dHJpYnV0ZSgndHlwZScsJ2RhdGUnKTtcbiAgICB0YXNrRHVlSW5wdXQuY2xhc3NMaXN0LmFkZCgndGFza0R1ZUlucHV0Jyk7XG5cbiAgICAvL0FwcGVuZCBlbGVtZW50cyB0byB0YXNrV2luZG93Q29udGVudFxuICAgIHRhc2tXaW5kb3dDb250ZW50LmFwcGVuZENoaWxkKHRhc2tDb250ZW50VGl0bGUpO1xuICAgIHRhc2tXaW5kb3dDb250ZW50LmFwcGVuZENoaWxkKHRhc2tDb250ZW50RGVzYyk7XG4gICAgdGFza1dpbmRvd0NvbnRlbnQuYXBwZW5kQ2hpbGQodGFza0R1ZSk7XG4gICAgdGFza1dpbmRvd0NvbnRlbnQuYXBwZW5kQ2hpbGQodGFza0R1ZUlucHV0KTtcbiAgICB0YXNrV2luZG93Q29udGVudC5hcHBlbmRDaGlsZCh0YXNrUHJpb3JpdHkpO1xuICAgIHRhc2tXaW5kb3dDb250ZW50LmFwcGVuZENoaWxkKHByaW9yaXR5RGl2KTtcbiAgICB0YXNrV2luZG93Q29udGVudC5hcHBlbmRDaGlsZCh0YXNrQWRkKTtcbiAgICB0YXNrV2luZG93LmFwcGVuZENoaWxkKHRhc2tDb250ZW50SGVhZGVyQmFyKTtcbiAgICB0YXNrV2luZG93LmFwcGVuZENoaWxkKHRhc2tXaW5kb3dDb250ZW50KTtcbiAgICBcblxuICAgIC8vQWRkIHRhc2tXaW5kb3cgdG8gY29udGVudFxuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQodGFza1dpbmRvdyk7XG5cbiAgICAvL0FkZCBFdmVudCB0byBzaG93IHRhc2sgd2luZG93IG9uIGNsaWNrIG9uIGFkZCB0YXNrXG4gICAgYWRkLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICB0YXNrV2luZG93LmNsYXNzTGlzdC5hZGQoJ3Nob3cnKTtcbiAgICAgICAgdGFza0NvbnRlbnRIZWFkZXJCYXIuY2xhc3NMaXN0LmFkZCgnc2hvd0ZsZXgnKTtcbiAgICB9KTtcblxuICAgIC8vQ3JlYXRpbmcgYWRkIHRhc2sgdGFiXG4gICAgY29uc3QgYWRkSWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGFkZEljb24uY2xhc3NMaXN0LmFkZCgnYWRkSWNvbicpO1xuICAgIGNvbnN0IGFkZFRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBhZGRUZXh0LmlubmVySFRNTCA9IFwiQWRkIFRhc2tcIjtcbiAgICBhZGRUZXh0LmNsYXNzTGlzdC5hZGQoJ2FkZFRleHQnKVxuICAgIGFkZC5hcHBlbmRDaGlsZChhZGRJY29uKTtcbiAgICBhZGQuYXBwZW5kQ2hpbGQoYWRkVGV4dCk7XG4gICAgY29udGVudC5hcHBlbmRDaGlsZChhZGQpO1xuXG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGNvbnRlbnQpO1xuICAgIHJldHVybiBjb250YWluZXI7XG59IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gbG9hZE1lbnUoY29udGFpbmVyKSB7XG4gICAgLy9jcmVhdGUgQmFubmVyIGRpdlxuICAgIGNvbnN0IG1lbnUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBtZW51LmNsYXNzTGlzdC5hZGQoJ21lbnUnKTtcblxuICAgIC8vVGhpcyBtb250aFxuICAgIGNvbnN0IHRhc2tUYWIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb25zdCB0YXNrVGFiSWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXG4gICAgdGFza1RhYi5jbGFzc0xpc3QuYWRkKCd0YWInKTtcbiAgICB0YXNrVGFiLmNsYXNzTGlzdC5hZGQoJ2xvYWRUYXNrJyk7XG4gICAgdGFza1RhYi5pbm5lckhUTUwgPSBcIlRhc2tzIER1ZVwiO1xuXG4gICAgLy9GSVhYWCBUSElTU1NTU1NTU1xuICAgIHRhc2tUYWIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmNvbnRlbnRcIik7XG4gICAgICAgIGNvbnN0IHRhc2tzRHVlID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInRhc2tzRHVlXCIpKTtcblxuICAgICAgICBjb25zb2xlLmxvZyh0YXNrc0R1ZSk7XG4gICAgICAgIGZvciAoY29uc3QgaSBpbiB0YXNrc0R1ZSkge1xuICAgICAgICAgICAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICBjb250YWluZXIuY2xhc3NMaXN0LmFkZCgndGFza0JhcicpO1xuXG4gICAgICAgICAgICBjb25zdCBwcmlvcml0eUJhciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgaWYgKHRhc2tzRHVlW2ldLnByaW9yaXR5ID09IFwibG93XCIpIHtcbiAgICAgICAgICAgICAgICBwcmlvcml0eUJhci5jbGFzc0xpc3QuYWRkKCdsb3dCYXInKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKHRhc2tzRHVlW2ldLnByaW9yaXR5ID09IFwibWVkaXVtXCIpIHtcbiAgICAgICAgICAgICAgICBwcmlvcml0eUJhci5jbGFzc0xpc3QuYWRkKCdtZWRpdW1CYXInKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKHRhc2tzRHVlW2ldLnByaW9yaXR5ID09IFwiaGlnaFwiKSB7XG4gICAgICAgICAgICAgICAgcHJpb3JpdHlCYXIuY2xhc3NMaXN0LmFkZCgnaGlnaEJhcicpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3QgZG9uZUxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcbiAgICAgICAgICAgIGRvbmVMYWJlbC5jbGFzc0xpc3QuYWRkKCdkb25lTGFiZWwnKTtcbiAgICAgICAgICAgIGNvbnN0IGRvbmVDaGVja2JveCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgICAgICAgICBkb25lQ2hlY2tib3guc2V0QXR0cmlidXRlKCd0eXBlJywgJ2NoZWNrYm94Jyk7XG4gICAgICAgICAgICBkb25lQ2hlY2tib3guYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgKCkgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChkb25lQ2hlY2tib3guY2hlY2tlZCkge1xuICAgICAgICAgICAgICAgICAgICB0YXNrVGl0bGUuY2xhc3NMaXN0LmFkZCgnZmluaXNoZWQnKTtcbiAgICAgICAgICAgICAgICAgICAgdGFza1RpdGxlLmNsYXNzTGlzdC5hZGQoJ3N0cmlrZScpO1xuICAgICAgICAgICAgICAgICAgICB0YXNrYmFyRHVlLmNsYXNzTGlzdC5hZGQoJ2ZpbmlzaGVkJyk7XG4gICAgICAgICAgICAgICAgICAgIHRhc2tEZWxldGUuY2xhc3NMaXN0LmFkZCgnZmluaXNoZWQnKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHRhc2tUaXRsZS5jbGFzc0xpc3QucmVtb3ZlKCdmaW5pc2hlZCcpO1xuICAgICAgICAgICAgICAgICAgICB0YXNrVGl0bGUuY2xhc3NMaXN0LnJlbW92ZSgnc3RyaWtlJyk7XG4gICAgICAgICAgICAgICAgICAgIHRhc2tiYXJEdWUuY2xhc3NMaXN0LnJlbW92ZSgnZmluaXNoZWQnKTtcbiAgICAgICAgICAgICAgICAgICAgdGFza0RlbGV0ZS5jbGFzc0xpc3QucmVtb3ZlKCdmaW5pc2hlZCcpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pXG5cbiAgICAgICAgICAgIGRvbmVMYWJlbC5hcHBlbmRDaGlsZChkb25lQ2hlY2tib3gpO1xuICAgICAgICAgICAgZG9uZUxhYmVsLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKSk7XG5cbiAgICAgICAgICAgIGNvbnN0IHRhc2tUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gzJyk7XG4gICAgICAgICAgICB0YXNrVGl0bGUuaW5uZXJIVE1MID0gdGFza3NEdWVbaV0udGl0bGU7XG4gICAgICAgICAgICB0YXNrVGl0bGUuY2xhc3NMaXN0LmFkZCgndGFza2JhclRpdGxlJyk7XG5cbiAgICAgICAgICAgIGNvbnN0IHRhc2tiYXJEdWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgIHRhc2tiYXJEdWUuaW5uZXJIVE1MID0gdGFza3NEdWVbaV0uZHVlO1xuICAgICAgICAgICAgdGFza2JhckR1ZS5jbGFzc0xpc3QuYWRkKCd0YXNrYmFyRHVlJyk7XG5cbiAgICAgICAgICAgIGNvbnN0IHRhc2tEZWxldGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgIHRhc2tEZWxldGUuY2xhc3NMaXN0LmFkZCgndGFza2JhckRlbGV0ZScpO1xuICAgICAgICAgICAgdGFza0RlbGV0ZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICAgICAgICBjb250ZW50LnJlbW92ZUNoaWxkKGNvbnRhaW5lcik7XG4gICAgICAgICAgICB9KVxuXG4gICAgICAgICAgICBjb250YWluZXIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKGNvbnRhaW5lci5jbGFzc0xpc3QuY29udGFpbnMoJ2V4cGFuZGVkJykpIHtcbiAgICAgICAgICAgICAgICAgICAgLy9DbG9zZSBleHBhbmRlZCBkaXZcbiAgICAgICAgICAgICAgICAgICAgY29udGFpbmVyLmNsYXNzTGlzdC5yZW1vdmUoJ2V4cGFuZGVkJyk7XG4gICAgICAgICAgICAgICAgICAgIGNvbnRlbnQucmVtb3ZlQ2hpbGQoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmRlc2NXaW5kb3cnKSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBjb250YWluZXIuY2xhc3NMaXN0LmFkZCgnZXhwYW5kZWQnKTtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgZGVzY1dpbmRvdyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgICAgICAgICBkZXNjV2luZG93LmNsYXNzTGlzdC5hZGQoJ2Rlc2NXaW5kb3cnKTtcbiAgICAgICAgICAgICAgICAgICAgZGVzY1dpbmRvdy5pbm5lckhUTUwgPSB0YXNrc0R1ZVtpXS5kZXNjO1xuXG4gICAgICAgICAgICAgICAgICAgIGNvbnRhaW5lci5pbnNlcnRBZGphY2VudEVsZW1lbnQoJ2FmdGVyZW5kJywgZGVzY1dpbmRvdyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSlcblxuICAgICAgICAgICAgLy9BcHBlbmRpbmcgdG8gQ29udGFpbmVyXG4gICAgICAgICAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQocHJpb3JpdHlCYXIpO1xuICAgICAgICAgICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGRvbmVMYWJlbCk7XG4gICAgICAgICAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQodGFza1RpdGxlKTtcbiAgICAgICAgICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZCh0YXNrYmFyRHVlKTtcbiAgICAgICAgICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZCh0YXNrRGVsZXRlKTtcblxuICAgICAgICAgICAgY29udGVudC5hcHBlbmRDaGlsZChjb250YWluZXIpO1xuICAgICAgICB9XG5cbiAgICB9KTtcblxuICAgIHRhc2tUYWJJY29uLmNsYXNzTGlzdC5hZGQoJ2ljb24nKTtcbiAgICB0YXNrVGFiSWNvbi5zZXRBdHRyaWJ1dGUoJ2lkJywgJ3Rhc2snKTtcblxuICAgIHRhc2tUYWIuYXBwZW5kQ2hpbGQodGFza1RhYkljb24pO1xuXG4gICAgbWVudS5hcHBlbmRDaGlsZCh0YXNrVGFiKTtcblxuICAgIC8vUHJvamVjdHNcbiAgICBjb25zdCBwcm9qZWN0cyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHByb2plY3RzLmlubmVySFRNTCA9IFwiUHJvamVjdHNcIjtcbiAgICBwcm9qZWN0cy5jbGFzc0xpc3QuYWRkKCdwcm9qZWN0cycpO1xuXG4gICAgbWVudS5hcHBlbmRDaGlsZChwcm9qZWN0cyk7XG5cbiAgICAvL0FkZCBQcm9qZWN0IFRhYlxuICAgIGNvbnN0IGFkZFByb2plY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb25zdCBhZGRQcm9qZWN0SWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXG4gICAgYWRkUHJvamVjdC5pbm5lckhUTUwgPSBcIkFkZCBQcm9qZWN0XCI7XG5cbiAgICBhZGRQcm9qZWN0LmNsYXNzTGlzdC5hZGQoJ3RhYicpO1xuICAgIGFkZFByb2plY3RJY29uLmNsYXNzTGlzdC5hZGQoJ2ljb24nKTtcbiAgICBhZGRQcm9qZWN0SWNvbi5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2FkZFByb2plY3QnKTtcblxuICAgIGFkZFByb2plY3QuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG5cbiAgICB9KTtcblxuICAgIGFkZFByb2plY3QuYXBwZW5kQ2hpbGQoYWRkUHJvamVjdEljb24pO1xuXG4gICAgbWVudS5hcHBlbmRDaGlsZChhZGRQcm9qZWN0KTtcbiAgICAvL0ZpbmFsIHVwbG9hZCB0byBjb250YWluZXJcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQobWVudSk7XG5cbiAgICByZXR1cm4gY29udGFpbmVyO1xufSJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==