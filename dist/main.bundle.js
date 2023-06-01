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
___CSS_LOADER_EXPORT___.push([module.id, "body{\n    margin: 0;\n}\n\n#container {\n    display: grid;\n    height: 100vh;\n    width: 100vw;\n    max-height: 100vh;\n    max-width: 100vw;\n\n    grid-template-columns: 10rem auto;\n    grid-template-rows: 6rem auto;\n    overflow: auto;\n    grid-template-areas:\n    \"banner banner\"\n    \"menu content\";\n}\n\n.banner{\n    background-color: #464646;\n    grid-area: banner;\n\n    display: flex;\n    flex-direction: row;\n\n    align-items: center;\n    \n}\n\n.menu{\n    background-color: #b7ffc9;\n    grid-area: menu;\n}\n\n.content{\n    background-color: #fcf7f5;\n    grid-area: content;\n    padding-top: 2.5rem;\n    padding-left: 2.5rem;\n    padding-right: 2.5rem;\n}\n\n.tab {\n    display: flex;\n    flex-direction: row-reverse;\n    align-items: center;\n    justify-content: center;\n    cursor: pointer;\n}\n\n.material-symbols-outlined {\n  font-variation-settings:\n  'FILL' 1,\n  'wght' 200,\n  'GRAD' 0,\n  'opsz' 48\n}\n\n.contentHeaderBar {\n    background-color: rgb(241, 255, 237);\n    margin: 0 auto;\n    width: 420px;\n    height: 2rem;\n    flex-direction: row;\n    justify-content: space-between;\n    align-items: center;\n    display: none;\n    /*Add font style here*/\n}\n\n#task{\n    background: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ") no-repeat center center;\n    margin: 0px;\n    background-size: cover;\n    width: 1rem;\n    height: 1rem;\n}\n\n#addProject{\n    background: url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ") no-repeat center center;\n    margin: 0px;\n    background-size: cover;\n    width: 1rem;\n    height: 1rem;\n}\n\n#title{\n    background: url(" + ___CSS_LOADER_URL_REPLACEMENT_2___ + ") no-repeat center center;\n    margin: 0px;\n    background-size: cover;\n    width: 4rem;\n    height: 4rem;\n}\n\n.addIcon {\n    background: url(" + ___CSS_LOADER_URL_REPLACEMENT_3___ + ") no-repeat center center;\n    margin: 0px;\n    background-size: cover;\n    width: 1rem;\n    height: 1rem;\n}\n\n.add {\n    display: flex;\n    flex-direction: row;\n    justify-content: start;\n    cursor: pointer;\n}\n\n#closeTaskWindow{\n    background: url(" + ___CSS_LOADER_URL_REPLACEMENT_4___ + ") no-repeat center center;\n    margin: 0px;\n    background-size: cover;\n    width: 1.2rem;\n    height: 1.2rem;\n    align-self: flex-end;\n    border-style: none;\n    cursor: pointer;\n}\n\n.taskbarDelete {\n    background: url(" + ___CSS_LOADER_URL_REPLACEMENT_5___ + ") no-repeat center center;\n    background-size: cover;\n    margin: 0px;\n    width: 1rem;\n    height: 1rem;\n    cursor: pointer;\n}\n\n.taskWindow {\n    position: fixed;\n    z-index: 1;\n    left: 0;\n    top: 0;\n    width: 100%;\n    height: 100%;\n    overflow: auto;\n    background-color: rgba(0, 0, 0, 0.4);\n    display: none;\n    flex-direction: column;\n    align-items: center;\n    padding-top: 10rem;\n}\n\n.taskWindowContent {\n    background-color: rgb(255, 249, 253);\n    margin: 10% auto;\n    margin-top: 0%;\n    padding: 20px;\n    border-style: none;\n    width: 380px;\n    font-weight: bolder;\n    flex-direction: column;\n}\n\n.show{\n    display: block;\n}\n\n.showFlex{\n    display: flex;\n}\n\n.doneLabel {\n    position: relative;\n    display: inline-block;\n   }\n   \n   /* Input */\n   .doneLabel > input {\n    appearance: none;\n    -moz-appearance: none;\n    -webkit-appearance: none;\n    z-index: -1;\n    position: absolute;\n    left: -10px;\n    top: -8px;\n    display: block;\n    margin: 0;\n    border-radius: 50%;\n    width: 40px;\n    height: 40px;\n    background-color: rgba(0, 0, 0, 0.6);\n    box-shadow: none;\n    outline: none;\n    opacity: 0;\n    transform: scale(1);\n    pointer-events: none;\n    transition: opacity 0.3s, transform 0.2s;\n   }\n   \n   /* Span */\n   .doneLabel > span {\n    display: inline-block;\n    width: 100%;\n    cursor: pointer;\n   }\n   \n   /* Box */\n   .doneLabel > span::before {\n    content: \"\";\n    display: inline-block;\n    box-sizing: border-box;\n    margin: 3px 11px 3px 1px;\n    border: solid 2px;\n    /* Safari */\n    border-color: rgba(0, 0, 0, 0.6);\n    border-radius: 2px;\n    width: 18px;\n    height: 18px;\n    vertical-align: top;\n    transition: border-color 0.2s, background-color 0.2s;\n   }\n   \n   /* Checkmark */\n   .doneLabel > span::after {\n    content: \"\";\n    display: block;\n    position: absolute;\n    top: 3px;\n    left: 1px;\n    width: 10px;\n    height: 5px;\n    border: solid 2px transparent;\n    border-right: none;\n    border-top: none;\n    transform: translate(3px, 4px) rotate(-45deg);\n   }\n   \n   /* Checked, Indeterminate */\n   .doneLabel > input:checked,\n   .doneLabel > input:indeterminate {\n    background-color: #018786;\n   }\n   \n   .doneLabel > input:checked + span::before,\n   .doneLabel > input:indeterminate + span::before {\n    border-color: #018786;\n    background-color: #018786;\n   }\n   \n   .doneLabel > input:checked + span::after,\n   .doneLabel > input:indeterminate + span::after {\n    border-color: #fff;\n   }\n   \n   .doneLabel > input:indeterminate + span::after {\n    border-left: none;\n    transform: translate(4px, 3px);\n   }\n   \n   /* Hover, Focus */\n   .doneLabel:hover > input {\n    opacity: 0.04;\n   }\n   \n   .doneLabel > input:focus {\n    opacity: 0.12;\n   }\n   \n   .doneLabel:hover > input:focus {\n    opacity: 0.16;\n   }\n   \n   /* Active */\n   .doneLabel > input:active {\n    opacity: 1;\n    transform: scale(0);\n    transition: transform 0s, opacity 0s;\n   }\n   \n   .doneLabel > input:active + span::before {\n    border-color: #85b8b7;\n   }\n   \n   .doneLabel > input:checked:active + span::before {\n    border-color: transparent;\n    background-color: rgba(0, 0, 0, 0.6);\n   }\n   \n   /* Disabled */\n   .doneLabel > input:disabled {\n    opacity: 0;\n   }\n   \n   .doneLabel > input:disabled + span {\n    color: rgba(0, 0, 0, 0.38);\n    cursor: initial;\n   }\n   \n   .doneLabel > input:disabled + span::before {\n    border-color: currentColor;\n   }\n   \n   .doneLabel > input:checked:disabled + span::before,\n   .doneLabel > input:indeterminate:disabled + span::before {\n    border-color: transparent;\n    background-color: currentColor;\n   }\n   \n   .taskBar {\n    display: flex;\n    flex-direction: row;\n\n    justify-content: center;\n    align-items: center;\n\n    height: 3rem;\n    width: 100%;\n\n    background-color: #e0dbd8;\n    border-radius: 10px;\n   }\n\n   .lowBar {\n    background-color: #71ff94;\n    width: .4rem;\n    height: 3rem;\n    border-top-left-radius: 10px;\n    border-bottom-left-radius: 10px;\n   }\n\n   .mediumBar {\n    background-color: #ffd900;\n    width: .4rem;\n    height: 3rem;\n    border-top-left-radius: 10px;\n    border-bottom-left-radius: 10px;\n   }\n\n   .highBar {\n    background-color: #ff6464;\n    width: .4rem;\n    height: 3rem;\n    border-top-left-radius: 10px;\n    border-bottom-left-radius: 10px;\n   }\n\n   .taskbarDue{\n    margin-left: auto;\n   }\n\n   .descWindow{\n    color: white;\n    background-color: #5f5e5d;\n    height: 8rem;\n    width: 100%;\n   }\n\n   .finished{\n    opacity: .4;\n   }\n\n   .strike{\n    text-decoration: line-through;\n   }\n\n   .projectTab{\n    cursor: pointer;\n   }", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":["body{\n    margin: 0;\n}\n\n#container {\n    display: grid;\n    height: 100vh;\n    width: 100vw;\n    max-height: 100vh;\n    max-width: 100vw;\n\n    grid-template-columns: 10rem auto;\n    grid-template-rows: 6rem auto;\n    overflow: auto;\n    grid-template-areas:\n    \"banner banner\"\n    \"menu content\";\n}\n\n.banner{\n    background-color: #464646;\n    grid-area: banner;\n\n    display: flex;\n    flex-direction: row;\n\n    align-items: center;\n    \n}\n\n.menu{\n    background-color: #b7ffc9;\n    grid-area: menu;\n}\n\n.content{\n    background-color: #fcf7f5;\n    grid-area: content;\n    padding-top: 2.5rem;\n    padding-left: 2.5rem;\n    padding-right: 2.5rem;\n}\n\n.tab {\n    display: flex;\n    flex-direction: row-reverse;\n    align-items: center;\n    justify-content: center;\n    cursor: pointer;\n}\n\n.material-symbols-outlined {\n  font-variation-settings:\n  'FILL' 1,\n  'wght' 200,\n  'GRAD' 0,\n  'opsz' 48\n}\n\n.contentHeaderBar {\n    background-color: rgb(241, 255, 237);\n    margin: 0 auto;\n    width: 420px;\n    height: 2rem;\n    flex-direction: row;\n    justify-content: space-between;\n    align-items: center;\n    display: none;\n    /*Add font style here*/\n}\n\n#task{\n    background: url(./images/task.svg) no-repeat center center;\n    margin: 0px;\n    background-size: cover;\n    width: 1rem;\n    height: 1rem;\n}\n\n#addProject{\n    background: url(./images/add.svg) no-repeat center center;\n    margin: 0px;\n    background-size: cover;\n    width: 1rem;\n    height: 1rem;\n}\n\n#title{\n    background: url(./images/banner.svg) no-repeat center center;\n    margin: 0px;\n    background-size: cover;\n    width: 4rem;\n    height: 4rem;\n}\n\n.addIcon {\n    background: url(./images/addtask.svg) no-repeat center center;\n    margin: 0px;\n    background-size: cover;\n    width: 1rem;\n    height: 1rem;\n}\n\n.add {\n    display: flex;\n    flex-direction: row;\n    justify-content: start;\n    cursor: pointer;\n}\n\n#closeTaskWindow{\n    background: url(./images/close.svg) no-repeat center center;\n    margin: 0px;\n    background-size: cover;\n    width: 1.2rem;\n    height: 1.2rem;\n    align-self: flex-end;\n    border-style: none;\n    cursor: pointer;\n}\n\n.taskbarDelete {\n    background: url(./images/delete.svg) no-repeat center center;\n    background-size: cover;\n    margin: 0px;\n    width: 1rem;\n    height: 1rem;\n    cursor: pointer;\n}\n\n.taskWindow {\n    position: fixed;\n    z-index: 1;\n    left: 0;\n    top: 0;\n    width: 100%;\n    height: 100%;\n    overflow: auto;\n    background-color: rgba(0, 0, 0, 0.4);\n    display: none;\n    flex-direction: column;\n    align-items: center;\n    padding-top: 10rem;\n}\n\n.taskWindowContent {\n    background-color: rgb(255, 249, 253);\n    margin: 10% auto;\n    margin-top: 0%;\n    padding: 20px;\n    border-style: none;\n    width: 380px;\n    font-weight: bolder;\n    flex-direction: column;\n}\n\n.show{\n    display: block;\n}\n\n.showFlex{\n    display: flex;\n}\n\n.doneLabel {\n    position: relative;\n    display: inline-block;\n   }\n   \n   /* Input */\n   .doneLabel > input {\n    appearance: none;\n    -moz-appearance: none;\n    -webkit-appearance: none;\n    z-index: -1;\n    position: absolute;\n    left: -10px;\n    top: -8px;\n    display: block;\n    margin: 0;\n    border-radius: 50%;\n    width: 40px;\n    height: 40px;\n    background-color: rgba(0, 0, 0, 0.6);\n    box-shadow: none;\n    outline: none;\n    opacity: 0;\n    transform: scale(1);\n    pointer-events: none;\n    transition: opacity 0.3s, transform 0.2s;\n   }\n   \n   /* Span */\n   .doneLabel > span {\n    display: inline-block;\n    width: 100%;\n    cursor: pointer;\n   }\n   \n   /* Box */\n   .doneLabel > span::before {\n    content: \"\";\n    display: inline-block;\n    box-sizing: border-box;\n    margin: 3px 11px 3px 1px;\n    border: solid 2px;\n    /* Safari */\n    border-color: rgba(0, 0, 0, 0.6);\n    border-radius: 2px;\n    width: 18px;\n    height: 18px;\n    vertical-align: top;\n    transition: border-color 0.2s, background-color 0.2s;\n   }\n   \n   /* Checkmark */\n   .doneLabel > span::after {\n    content: \"\";\n    display: block;\n    position: absolute;\n    top: 3px;\n    left: 1px;\n    width: 10px;\n    height: 5px;\n    border: solid 2px transparent;\n    border-right: none;\n    border-top: none;\n    transform: translate(3px, 4px) rotate(-45deg);\n   }\n   \n   /* Checked, Indeterminate */\n   .doneLabel > input:checked,\n   .doneLabel > input:indeterminate {\n    background-color: #018786;\n   }\n   \n   .doneLabel > input:checked + span::before,\n   .doneLabel > input:indeterminate + span::before {\n    border-color: #018786;\n    background-color: #018786;\n   }\n   \n   .doneLabel > input:checked + span::after,\n   .doneLabel > input:indeterminate + span::after {\n    border-color: #fff;\n   }\n   \n   .doneLabel > input:indeterminate + span::after {\n    border-left: none;\n    transform: translate(4px, 3px);\n   }\n   \n   /* Hover, Focus */\n   .doneLabel:hover > input {\n    opacity: 0.04;\n   }\n   \n   .doneLabel > input:focus {\n    opacity: 0.12;\n   }\n   \n   .doneLabel:hover > input:focus {\n    opacity: 0.16;\n   }\n   \n   /* Active */\n   .doneLabel > input:active {\n    opacity: 1;\n    transform: scale(0);\n    transition: transform 0s, opacity 0s;\n   }\n   \n   .doneLabel > input:active + span::before {\n    border-color: #85b8b7;\n   }\n   \n   .doneLabel > input:checked:active + span::before {\n    border-color: transparent;\n    background-color: rgba(0, 0, 0, 0.6);\n   }\n   \n   /* Disabled */\n   .doneLabel > input:disabled {\n    opacity: 0;\n   }\n   \n   .doneLabel > input:disabled + span {\n    color: rgba(0, 0, 0, 0.38);\n    cursor: initial;\n   }\n   \n   .doneLabel > input:disabled + span::before {\n    border-color: currentColor;\n   }\n   \n   .doneLabel > input:checked:disabled + span::before,\n   .doneLabel > input:indeterminate:disabled + span::before {\n    border-color: transparent;\n    background-color: currentColor;\n   }\n   \n   .taskBar {\n    display: flex;\n    flex-direction: row;\n\n    justify-content: center;\n    align-items: center;\n\n    height: 3rem;\n    width: 100%;\n\n    background-color: #e0dbd8;\n    border-radius: 10px;\n   }\n\n   .lowBar {\n    background-color: #71ff94;\n    width: .4rem;\n    height: 3rem;\n    border-top-left-radius: 10px;\n    border-bottom-left-radius: 10px;\n   }\n\n   .mediumBar {\n    background-color: #ffd900;\n    width: .4rem;\n    height: 3rem;\n    border-top-left-radius: 10px;\n    border-bottom-left-radius: 10px;\n   }\n\n   .highBar {\n    background-color: #ff6464;\n    width: .4rem;\n    height: 3rem;\n    border-top-left-radius: 10px;\n    border-bottom-left-radius: 10px;\n   }\n\n   .taskbarDue{\n    margin-left: auto;\n   }\n\n   .descWindow{\n    color: white;\n    background-color: #5f5e5d;\n    height: 8rem;\n    width: 100%;\n   }\n\n   .finished{\n    opacity: .4;\n   }\n\n   .strike{\n    text-decoration: line-through;\n   }\n\n   .projectTab{\n    cursor: pointer;\n   }"],"sourceRoot":""}]);
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

/***/ "./src/createBar.js":
/*!**************************!*\
  !*** ./src/createBar.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ createBar)
/* harmony export */ });
function createBar(title, desc, due, priority) {
    const container = document.createElement('div');
    const content = document.querySelector('.content');
    container.classList.add('taskBar');

    const priorityBar = document.createElement('div');
    if (priority == "low") {
        priorityBar.classList.add('lowBar');
    }
    else if (priority == "medium") {
        priorityBar.classList.add('mediumBar');
    }
    else if (priority == "high") {
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
    taskTitle.innerHTML = title;
    taskTitle.classList.add('taskbarTitle');

    const taskbarDue = document.createElement('div');
    taskbarDue.innerHTML = due;
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
            descWindow.innerHTML = desc;

            container.insertAdjacentElement('afterend', descWindow);
        }
    })

    //Appending to Container
    container.appendChild(priorityBar);
    container.appendChild(doneLabel);
    container.appendChild(taskTitle);
    container.appendChild(taskbarDue);
    container.appendChild(taskDelete);

    return container;
}

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
/* harmony import */ var _createBar__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./createBar */ "./src/createBar.js");



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
            return {title,desc,due,priority};
        }
        const title = document.querySelector('.taskContentTitle').value;
        const desc = document.querySelector('.taskContentDesc').value;
        const due = document.querySelector('.taskDueInput').value;
        const priority = document.querySelector('input[name="priority"]:checked').id;

        //All values working now

        const newTask = task(title, desc, due, priority);
        tasksDueArray.push(newTask);
        sessionStorage.setItem("tasksDue",JSON.stringify(tasksDueArray));
        content.appendChild((0,_createBar__WEBPACK_IMPORTED_MODULE_0__["default"])(newTask.title, newTask.desc, newTask.due, newTask.priority));
        taskWindow.classList.remove('show');
        taskContentHeaderBar.classList.remove('showFlex');
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
/* harmony import */ var _createBar__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./createBar */ "./src/createBar.js");
/* harmony import */ var _loadProject__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./loadProject */ "./src/loadProject.js");



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

    taskTab.addEventListener('click', () => {
        const content = document.querySelector(".content");
        const tasksDue = JSON.parse(sessionStorage.getItem("tasksDue"));

        console.log(tasksDue);
        for (const i in tasksDue) {
            content.appendChild((0,_createBar__WEBPACK_IMPORTED_MODULE_0__["default"])(tasksDue[i].title, tasksDue[i].desc, tasksDue[i].due, tasksDue[i].priority));
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
        menu.removeChild(addProject);

        //Create Project container
        const projectContainer = document.createElement('div');
        projectContainer.classList.add('projectContainer');
        
        //Project Name Input
        const projectName = document.createElement('input');
        projectName.setAttribute('type','text');
        projectName.classList.add('projectName');
        projectName.setAttribute('placeholder','Project Name');
        projectContainer.appendChild(projectName);

        //Add Project Button
        const addProjectBtn = document.createElement('button');
        addProjectBtn.classList.add('addProjectBtn');
        addProjectBtn.innerHTML = "Add";
        projectContainer.appendChild(addProjectBtn);
        addProjectBtn.addEventListener('click',() => {
            const projectTab = document.createElement('div');
            projectTab.classList.add('projectTab');
            projectTab.innerHTML = projectName.value;
            projectTab.addEventListener('click',() => {
                (0,_loadProject__WEBPACK_IMPORTED_MODULE_1__["default"])(projectTab);
            });

            menu.removeChild(projectContainer);
            menu.appendChild(projectTab);
            menu.appendChild(addProject);

        })

        //Cancel Add Project Button
        const cancelProjectBtn = document.createElement('button');
        cancelProjectBtn.classList.add('cancelProject');
        cancelProjectBtn.innerHTML = "Cancel"
        projectContainer.appendChild(cancelProjectBtn);
        cancelProjectBtn.addEventListener('click',() => {
            menu.removeChild(projectContainer);
            menu.appendChild(addProject);
        })

        menu.appendChild(projectContainer);
    });

    addProject.appendChild(addProjectIcon);

    menu.appendChild(addProject);
    //Final upload to container
    container.appendChild(menu);

    return container;
}

/***/ }),

/***/ "./src/loadProject.js":
/*!****************************!*\
  !*** ./src/loadProject.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ loadProject)
/* harmony export */ });
function loadProject(project){
    let projectName = project.innerHTML;
    projectName = String(projectName);

    if (sessionStorage.getItem(projectName) === null){
        const content = document.querySelector('.content');
        const contentTitle = document.querySelector('.contentTitle');
        
        contentTitle.innerHTML = projectName;

        //Add Task Button
        content.removeChild(document.querySelector('.add'));
        const add = document.createElement('div');
        add.classList.add('add');
        const addIcon = document.createElement('div');
        addIcon.classList.add('addIcon');
        const addText = document.createElement('div');
        addText.innerHTML = "Add Step";
        addText.classList.add('addText')
        add.appendChild(addIcon);
        add.appendChild(addText);
        add.addEventListener('click', () => {
            
        })

        content.appendChild(add);
    }
    else {

    }
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LFdBQVcsT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLFdBQVcsVUFBVSxZQUFZLGFBQWEsV0FBVyxPQUFPLEtBQUssWUFBWSxhQUFhLFdBQVcsVUFBVSxVQUFVLFVBQVUsT0FBTyxLQUFLLFVBQVUsVUFBVSxVQUFVLFVBQVUsVUFBVSxVQUFVLFVBQVUsWUFBWSxXQUFXLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsV0FBVyxVQUFVLFlBQVksV0FBVyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLFVBQVUsS0FBSyxZQUFZLGFBQWEsYUFBYSxXQUFXLFlBQVksV0FBVyxVQUFVLFVBQVUsVUFBVSxZQUFZLFdBQVcsVUFBVSxZQUFZLGFBQWEsV0FBVyxVQUFVLFlBQVksYUFBYSxhQUFhLE9BQU8sVUFBVSxLQUFLLFlBQVksV0FBVyxVQUFVLE9BQU8sVUFBVSxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxXQUFXLFlBQVksYUFBYSxXQUFXLFVBQVUsWUFBWSxhQUFhLE9BQU8sVUFBVSxLQUFLLFVBQVUsVUFBVSxZQUFZLFdBQVcsVUFBVSxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLFlBQVksT0FBTyxZQUFZLE9BQU8sTUFBTSxZQUFZLGFBQWEsT0FBTyxNQUFNLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLFlBQVksTUFBTSxVQUFVLE1BQU0sS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLE1BQU0sVUFBVSxLQUFLLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxVQUFVLEtBQUssVUFBVSxNQUFNLEtBQUssWUFBWSxXQUFXLE9BQU8sS0FBSyxZQUFZLE9BQU8sTUFBTSxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsYUFBYSxhQUFhLGNBQWMsV0FBVyxXQUFXLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLFVBQVUsWUFBWSxhQUFh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Q0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGdDQUFnQyxzREFBUztBQUN6QztBQUNBLEtBQUs7O0FBRUw7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0Isd0RBQVc7QUFDM0IsYUFBYTs7QUFFYjtBQUNBO0FBQ0E7O0FBRUEsU0FBUzs7QUFFVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUzs7QUFFVDtBQUNBLEtBQUs7O0FBRUw7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0FDdkdlO0FBQ2Y7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUzs7QUFFVDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9jcmVhdGVCYXIuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2luZGV4LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9sb2FkQmFubmVyIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9sb2FkQ29udGVudC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvbG9hZE1lbnUuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2xvYWRQcm9qZWN0LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyA9IG5ldyBVUkwoXCIuL2ltYWdlcy90YXNrLnN2Z1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fID0gbmV3IFVSTChcIi4vaW1hZ2VzL2FkZC5zdmdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMl9fXyA9IG5ldyBVUkwoXCIuL2ltYWdlcy9iYW5uZXIuc3ZnXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzNfX18gPSBuZXcgVVJMKFwiLi9pbWFnZXMvYWRkdGFzay5zdmdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfNF9fXyA9IG5ldyBVUkwoXCIuL2ltYWdlcy9jbG9zZS5zdmdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfNV9fXyA9IG5ldyBVUkwoXCIuL2ltYWdlcy9kZWxldGUuc3ZnXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8yX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMl9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfM19fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzNfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzRfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF80X19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF81X19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfNV9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJib2R5e1xcbiAgICBtYXJnaW46IDA7XFxufVxcblxcbiNjb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBoZWlnaHQ6IDEwMHZoO1xcbiAgICB3aWR0aDogMTAwdnc7XFxuICAgIG1heC1oZWlnaHQ6IDEwMHZoO1xcbiAgICBtYXgtd2lkdGg6IDEwMHZ3O1xcblxcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDEwcmVtIGF1dG87XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogNnJlbSBhdXRvO1xcbiAgICBvdmVyZmxvdzogYXV0bztcXG4gICAgZ3JpZC10ZW1wbGF0ZS1hcmVhczpcXG4gICAgXFxcImJhbm5lciBiYW5uZXJcXFwiXFxuICAgIFxcXCJtZW51IGNvbnRlbnRcXFwiO1xcbn1cXG5cXG4uYmFubmVye1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDY0NjQ2O1xcbiAgICBncmlkLWFyZWE6IGJhbm5lcjtcXG5cXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcXG5cXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgXFxufVxcblxcbi5tZW51e1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjYjdmZmM5O1xcbiAgICBncmlkLWFyZWE6IG1lbnU7XFxufVxcblxcbi5jb250ZW50e1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmNmN2Y1O1xcbiAgICBncmlkLWFyZWE6IGNvbnRlbnQ7XFxuICAgIHBhZGRpbmctdG9wOiAyLjVyZW07XFxuICAgIHBhZGRpbmctbGVmdDogMi41cmVtO1xcbiAgICBwYWRkaW5nLXJpZ2h0OiAyLjVyZW07XFxufVxcblxcbi50YWIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93LXJldmVyc2U7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5tYXRlcmlhbC1zeW1ib2xzLW91dGxpbmVkIHtcXG4gIGZvbnQtdmFyaWF0aW9uLXNldHRpbmdzOlxcbiAgJ0ZJTEwnIDEsXFxuICAnd2dodCcgMjAwLFxcbiAgJ0dSQUQnIDAsXFxuICAnb3BzeicgNDhcXG59XFxuXFxuLmNvbnRlbnRIZWFkZXJCYXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjQxLCAyNTUsIDIzNyk7XFxuICAgIG1hcmdpbjogMCBhdXRvO1xcbiAgICB3aWR0aDogNDIwcHg7XFxuICAgIGhlaWdodDogMnJlbTtcXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBkaXNwbGF5OiBub25lO1xcbiAgICAvKkFkZCBmb250IHN0eWxlIGhlcmUqL1xcbn1cXG5cXG4jdGFza3tcXG4gICAgYmFja2dyb3VuZDogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyArIFwiKSBuby1yZXBlYXQgY2VudGVyIGNlbnRlcjtcXG4gICAgbWFyZ2luOiAwcHg7XFxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxuICAgIHdpZHRoOiAxcmVtO1xcbiAgICBoZWlnaHQ6IDFyZW07XFxufVxcblxcbiNhZGRQcm9qZWN0e1xcbiAgICBiYWNrZ3JvdW5kOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19fICsgXCIpIG5vLXJlcGVhdCBjZW50ZXIgY2VudGVyO1xcbiAgICBtYXJnaW46IDBweDtcXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXG4gICAgd2lkdGg6IDFyZW07XFxuICAgIGhlaWdodDogMXJlbTtcXG59XFxuXFxuI3RpdGxle1xcbiAgICBiYWNrZ3JvdW5kOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8yX19fICsgXCIpIG5vLXJlcGVhdCBjZW50ZXIgY2VudGVyO1xcbiAgICBtYXJnaW46IDBweDtcXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXG4gICAgd2lkdGg6IDRyZW07XFxuICAgIGhlaWdodDogNHJlbTtcXG59XFxuXFxuLmFkZEljb24ge1xcbiAgICBiYWNrZ3JvdW5kOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8zX19fICsgXCIpIG5vLXJlcGVhdCBjZW50ZXIgY2VudGVyO1xcbiAgICBtYXJnaW46IDBweDtcXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXG4gICAgd2lkdGg6IDFyZW07XFxuICAgIGhlaWdodDogMXJlbTtcXG59XFxuXFxuLmFkZCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICAgIGp1c3RpZnktY29udGVudDogc3RhcnQ7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuI2Nsb3NlVGFza1dpbmRvd3tcXG4gICAgYmFja2dyb3VuZDogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfNF9fXyArIFwiKSBuby1yZXBlYXQgY2VudGVyIGNlbnRlcjtcXG4gICAgbWFyZ2luOiAwcHg7XFxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxuICAgIHdpZHRoOiAxLjJyZW07XFxuICAgIGhlaWdodDogMS4ycmVtO1xcbiAgICBhbGlnbi1zZWxmOiBmbGV4LWVuZDtcXG4gICAgYm9yZGVyLXN0eWxlOiBub25lO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi50YXNrYmFyRGVsZXRlIHtcXG4gICAgYmFja2dyb3VuZDogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfNV9fXyArIFwiKSBuby1yZXBlYXQgY2VudGVyIGNlbnRlcjtcXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXG4gICAgbWFyZ2luOiAwcHg7XFxuICAgIHdpZHRoOiAxcmVtO1xcbiAgICBoZWlnaHQ6IDFyZW07XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLnRhc2tXaW5kb3cge1xcbiAgICBwb3NpdGlvbjogZml4ZWQ7XFxuICAgIHotaW5kZXg6IDE7XFxuICAgIGxlZnQ6IDA7XFxuICAgIHRvcDogMDtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgb3ZlcmZsb3c6IGF1dG87XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC40KTtcXG4gICAgZGlzcGxheTogbm9uZTtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgcGFkZGluZy10b3A6IDEwcmVtO1xcbn1cXG5cXG4udGFza1dpbmRvd0NvbnRlbnQge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjU1LCAyNDksIDI1Myk7XFxuICAgIG1hcmdpbjogMTAlIGF1dG87XFxuICAgIG1hcmdpbi10b3A6IDAlO1xcbiAgICBwYWRkaW5nOiAyMHB4O1xcbiAgICBib3JkZXItc3R5bGU6IG5vbmU7XFxuICAgIHdpZHRoOiAzODBweDtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuXFxuLnNob3d7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbn1cXG5cXG4uc2hvd0ZsZXh7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxufVxcblxcbi5kb25lTGFiZWwge1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gICB9XFxuICAgXFxuICAgLyogSW5wdXQgKi9cXG4gICAuZG9uZUxhYmVsID4gaW5wdXQge1xcbiAgICBhcHBlYXJhbmNlOiBub25lO1xcbiAgICAtbW96LWFwcGVhcmFuY2U6IG5vbmU7XFxuICAgIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcXG4gICAgei1pbmRleDogLTE7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgbGVmdDogLTEwcHg7XFxuICAgIHRvcDogLThweDtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xcbiAgICB3aWR0aDogNDBweDtcXG4gICAgaGVpZ2h0OiA0MHB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNik7XFxuICAgIGJveC1zaGFkb3c6IG5vbmU7XFxuICAgIG91dGxpbmU6IG5vbmU7XFxuICAgIG9wYWNpdHk6IDA7XFxuICAgIHRyYW5zZm9ybTogc2NhbGUoMSk7XFxuICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xcbiAgICB0cmFuc2l0aW9uOiBvcGFjaXR5IDAuM3MsIHRyYW5zZm9ybSAwLjJzO1xcbiAgIH1cXG4gICBcXG4gICAvKiBTcGFuICovXFxuICAgLmRvbmVMYWJlbCA+IHNwYW4ge1xcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgfVxcbiAgIFxcbiAgIC8qIEJveCAqL1xcbiAgIC5kb25lTGFiZWwgPiBzcGFuOjpiZWZvcmUge1xcbiAgICBjb250ZW50OiBcXFwiXFxcIjtcXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgICBtYXJnaW46IDNweCAxMXB4IDNweCAxcHg7XFxuICAgIGJvcmRlcjogc29saWQgMnB4O1xcbiAgICAvKiBTYWZhcmkgKi9cXG4gICAgYm9yZGVyLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNik7XFxuICAgIGJvcmRlci1yYWRpdXM6IDJweDtcXG4gICAgd2lkdGg6IDE4cHg7XFxuICAgIGhlaWdodDogMThweDtcXG4gICAgdmVydGljYWwtYWxpZ246IHRvcDtcXG4gICAgdHJhbnNpdGlvbjogYm9yZGVyLWNvbG9yIDAuMnMsIGJhY2tncm91bmQtY29sb3IgMC4ycztcXG4gICB9XFxuICAgXFxuICAgLyogQ2hlY2ttYXJrICovXFxuICAgLmRvbmVMYWJlbCA+IHNwYW46OmFmdGVyIHtcXG4gICAgY29udGVudDogXFxcIlxcXCI7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHRvcDogM3B4O1xcbiAgICBsZWZ0OiAxcHg7XFxuICAgIHdpZHRoOiAxMHB4O1xcbiAgICBoZWlnaHQ6IDVweDtcXG4gICAgYm9yZGVyOiBzb2xpZCAycHggdHJhbnNwYXJlbnQ7XFxuICAgIGJvcmRlci1yaWdodDogbm9uZTtcXG4gICAgYm9yZGVyLXRvcDogbm9uZTtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoM3B4LCA0cHgpIHJvdGF0ZSgtNDVkZWcpO1xcbiAgIH1cXG4gICBcXG4gICAvKiBDaGVja2VkLCBJbmRldGVybWluYXRlICovXFxuICAgLmRvbmVMYWJlbCA+IGlucHV0OmNoZWNrZWQsXFxuICAgLmRvbmVMYWJlbCA+IGlucHV0OmluZGV0ZXJtaW5hdGUge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDE4Nzg2O1xcbiAgIH1cXG4gICBcXG4gICAuZG9uZUxhYmVsID4gaW5wdXQ6Y2hlY2tlZCArIHNwYW46OmJlZm9yZSxcXG4gICAuZG9uZUxhYmVsID4gaW5wdXQ6aW5kZXRlcm1pbmF0ZSArIHNwYW46OmJlZm9yZSB7XFxuICAgIGJvcmRlci1jb2xvcjogIzAxODc4NjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAxODc4NjtcXG4gICB9XFxuICAgXFxuICAgLmRvbmVMYWJlbCA+IGlucHV0OmNoZWNrZWQgKyBzcGFuOjphZnRlcixcXG4gICAuZG9uZUxhYmVsID4gaW5wdXQ6aW5kZXRlcm1pbmF0ZSArIHNwYW46OmFmdGVyIHtcXG4gICAgYm9yZGVyLWNvbG9yOiAjZmZmO1xcbiAgIH1cXG4gICBcXG4gICAuZG9uZUxhYmVsID4gaW5wdXQ6aW5kZXRlcm1pbmF0ZSArIHNwYW46OmFmdGVyIHtcXG4gICAgYm9yZGVyLWxlZnQ6IG5vbmU7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDRweCwgM3B4KTtcXG4gICB9XFxuICAgXFxuICAgLyogSG92ZXIsIEZvY3VzICovXFxuICAgLmRvbmVMYWJlbDpob3ZlciA+IGlucHV0IHtcXG4gICAgb3BhY2l0eTogMC4wNDtcXG4gICB9XFxuICAgXFxuICAgLmRvbmVMYWJlbCA+IGlucHV0OmZvY3VzIHtcXG4gICAgb3BhY2l0eTogMC4xMjtcXG4gICB9XFxuICAgXFxuICAgLmRvbmVMYWJlbDpob3ZlciA+IGlucHV0OmZvY3VzIHtcXG4gICAgb3BhY2l0eTogMC4xNjtcXG4gICB9XFxuICAgXFxuICAgLyogQWN0aXZlICovXFxuICAgLmRvbmVMYWJlbCA+IGlucHV0OmFjdGl2ZSB7XFxuICAgIG9wYWNpdHk6IDE7XFxuICAgIHRyYW5zZm9ybTogc2NhbGUoMCk7XFxuICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwcywgb3BhY2l0eSAwcztcXG4gICB9XFxuICAgXFxuICAgLmRvbmVMYWJlbCA+IGlucHV0OmFjdGl2ZSArIHNwYW46OmJlZm9yZSB7XFxuICAgIGJvcmRlci1jb2xvcjogIzg1YjhiNztcXG4gICB9XFxuICAgXFxuICAgLmRvbmVMYWJlbCA+IGlucHV0OmNoZWNrZWQ6YWN0aXZlICsgc3Bhbjo6YmVmb3JlIHtcXG4gICAgYm9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjYpO1xcbiAgIH1cXG4gICBcXG4gICAvKiBEaXNhYmxlZCAqL1xcbiAgIC5kb25lTGFiZWwgPiBpbnB1dDpkaXNhYmxlZCB7XFxuICAgIG9wYWNpdHk6IDA7XFxuICAgfVxcbiAgIFxcbiAgIC5kb25lTGFiZWwgPiBpbnB1dDpkaXNhYmxlZCArIHNwYW4ge1xcbiAgICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjM4KTtcXG4gICAgY3Vyc29yOiBpbml0aWFsO1xcbiAgIH1cXG4gICBcXG4gICAuZG9uZUxhYmVsID4gaW5wdXQ6ZGlzYWJsZWQgKyBzcGFuOjpiZWZvcmUge1xcbiAgICBib3JkZXItY29sb3I6IGN1cnJlbnRDb2xvcjtcXG4gICB9XFxuICAgXFxuICAgLmRvbmVMYWJlbCA+IGlucHV0OmNoZWNrZWQ6ZGlzYWJsZWQgKyBzcGFuOjpiZWZvcmUsXFxuICAgLmRvbmVMYWJlbCA+IGlucHV0OmluZGV0ZXJtaW5hdGU6ZGlzYWJsZWQgKyBzcGFuOjpiZWZvcmUge1xcbiAgICBib3JkZXItY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBjdXJyZW50Q29sb3I7XFxuICAgfVxcbiAgIFxcbiAgIC50YXNrQmFyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcXG5cXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuXFxuICAgIGhlaWdodDogM3JlbTtcXG4gICAgd2lkdGg6IDEwMCU7XFxuXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNlMGRiZDg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICAgfVxcblxcbiAgIC5sb3dCYXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNzFmZjk0O1xcbiAgICB3aWR0aDogLjRyZW07XFxuICAgIGhlaWdodDogM3JlbTtcXG4gICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMTBweDtcXG4gICAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMTBweDtcXG4gICB9XFxuXFxuICAgLm1lZGl1bUJhciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmQ5MDA7XFxuICAgIHdpZHRoOiAuNHJlbTtcXG4gICAgaGVpZ2h0OiAzcmVtO1xcbiAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAxMHB4O1xcbiAgICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAxMHB4O1xcbiAgIH1cXG5cXG4gICAuaGlnaEJhciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZjY0NjQ7XFxuICAgIHdpZHRoOiAuNHJlbTtcXG4gICAgaGVpZ2h0OiAzcmVtO1xcbiAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAxMHB4O1xcbiAgICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAxMHB4O1xcbiAgIH1cXG5cXG4gICAudGFza2JhckR1ZXtcXG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XFxuICAgfVxcblxcbiAgIC5kZXNjV2luZG93e1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICM1ZjVlNWQ7XFxuICAgIGhlaWdodDogOHJlbTtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgfVxcblxcbiAgIC5maW5pc2hlZHtcXG4gICAgb3BhY2l0eTogLjQ7XFxuICAgfVxcblxcbiAgIC5zdHJpa2V7XFxuICAgIHRleHQtZGVjb3JhdGlvbjogbGluZS10aHJvdWdoO1xcbiAgIH1cXG5cXG4gICAucHJvamVjdFRhYntcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgIH1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0lBQ0ksU0FBUztBQUNiOztBQUVBO0lBQ0ksYUFBYTtJQUNiLGFBQWE7SUFDYixZQUFZO0lBQ1osaUJBQWlCO0lBQ2pCLGdCQUFnQjs7SUFFaEIsaUNBQWlDO0lBQ2pDLDZCQUE2QjtJQUM3QixjQUFjO0lBQ2Q7O2tCQUVjO0FBQ2xCOztBQUVBO0lBQ0kseUJBQXlCO0lBQ3pCLGlCQUFpQjs7SUFFakIsYUFBYTtJQUNiLG1CQUFtQjs7SUFFbkIsbUJBQW1COztBQUV2Qjs7QUFFQTtJQUNJLHlCQUF5QjtJQUN6QixlQUFlO0FBQ25COztBQUVBO0lBQ0kseUJBQXlCO0lBQ3pCLGtCQUFrQjtJQUNsQixtQkFBbUI7SUFDbkIsb0JBQW9CO0lBQ3BCLHFCQUFxQjtBQUN6Qjs7QUFFQTtJQUNJLGFBQWE7SUFDYiwyQkFBMkI7SUFDM0IsbUJBQW1CO0lBQ25CLHVCQUF1QjtJQUN2QixlQUFlO0FBQ25COztBQUVBO0VBQ0U7Ozs7O0FBS0Y7O0FBRUE7SUFDSSxvQ0FBb0M7SUFDcEMsY0FBYztJQUNkLFlBQVk7SUFDWixZQUFZO0lBQ1osbUJBQW1CO0lBQ25CLDhCQUE4QjtJQUM5QixtQkFBbUI7SUFDbkIsYUFBYTtJQUNiLHNCQUFzQjtBQUMxQjs7QUFFQTtJQUNJLDJFQUEwRDtJQUMxRCxXQUFXO0lBQ1gsc0JBQXNCO0lBQ3RCLFdBQVc7SUFDWCxZQUFZO0FBQ2hCOztB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OztHQUVBOztJQUVDLHlCQUF5QjtJQUN6Qiw4QkFBOEI7R0FDL0I7O0dBRUE7SUFDQyxhQUFhO0lBQ2IsbUJBQW1COztJQUVuQix1QkFBdUI7SUFDdkIsbUJBQW1COztJQUVuQixZQUFZO0lBQ1osV0FBVzs7SUFFWCx5QkFBeUI7SUFDekIsbUJBQW1CO0dBQ3BCOztHQUVBO0lBQ0MseUJBQXlCO0lBQ3pCLFlBQVk7SUFDWixZQUFZO0lBQ1osNEJBQTRCO0lBQzVCLCtCQUErQjtHQUNoQzs7R0FFQTtJQUNDLHlCQUF5QjtJQUN6QixZQUFZO0lBQ1osWUFBWTtJQUNaLDRCQUE0QjtJQUM1QiwrQkFBK0I7R0FDaEM7O0dBRUE7SUFDQyx5QkFBeUI7SUFDekIsWUFBWTtJQUNaLFlBQVk7SUFDWiw0QkFBNEI7SUFDNUIsK0JBQStCO0dBQ2hDOztHQUVBO0lBQ0MsaUJBQWlCO0dBQ2xCOztHQUVBO0lBQ0MsWUFBWTtJQUNaLHlCQUF5QjtJQUN6QixZQUFZO0lBQ1osV0FBVztHQUNaOztHQUVBO0lBQ0MsV0FBVztHQUNaOztHQUVBO0lBQ0MsNkJBQTZCO0dBQzlCOztHQUVBO0lBQ0MsZUFBZTtHQUNoQlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJib2R5e1xcbiAgICBtYXJnaW46IDA7XFxufVxcblxcbiNjb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBoZWlnaHQ6IDEwMHZoO1xcbiAgICB3aWR0aDogMTAwdnc7XFxuICAgIG1heC1oZWlnaHQ6IDEwMHZoO1xcbiAgICBtYXgtd2lkdGg6IDEwMHZ3O1xcblxcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDEwcmVtIGF1dG87XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogNnJlbSBhdXRvO1xcbiAgICBvdmVyZmxvdzogYXV0bztcXG4gICAgZ3JpZC10ZW1wbGF0ZS1hcmVhczpcXG4gICAgXFxcImJhbm5lciBiYW5uZXJcXFwiXFxuICAgIFxcXCJtZW51IGNvbnRlbnRcXFwiO1xcbn1cXG5cXG4uYmFubmVye1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDY0NjQ2O1xcbiAgICBncmlkLWFyZWE6IGJhbm5lcjtcXG5cXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcXG5cXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgXFxufVxcblxcbi5tZW51e1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjYjdmZmM5O1xcbiAgICBncmlkLWFyZWE6IG1lbnU7XFxufVxcblxcbi5jb250ZW50e1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmNmN2Y1O1xcbiAgICBncmlkLWFyZWE6IGNvbnRlbnQ7XFxuICAgIHBhZGRpbmctdG9wOiAyLjVyZW07XFxuICAgIHBhZGRpbmctbGVmdDogMi41cmVtO1xcbiAgICBwYWRkaW5nLXJpZ2h0OiAyLjVyZW07XFxufVxcblxcbi50YWIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93LXJldmVyc2U7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5tYXRlcmlhbC1zeW1ib2xzLW91dGxpbmVkIHtcXG4gIGZvbnQtdmFyaWF0aW9uLXNldHRpbmdzOlxcbiAgJ0ZJTEwnIDEsXFxuICAnd2dodCcgMjAwLFxcbiAgJ0dSQUQnIDAsXFxuICAnb3BzeicgNDhcXG59XFxuXFxuLmNvbnRlbnRIZWFkZXJCYXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjQxLCAyNTUsIDIzNyk7XFxuICAgIG1hcmdpbjogMCBhdXRvO1xcbiAgICB3aWR0aDogNDIwcHg7XFxuICAgIGhlaWdodDogMnJlbTtcXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBkaXNwbGF5OiBub25lO1xcbiAgICAvKkFkZCBmb250IHN0eWxlIGhlcmUqL1xcbn1cXG5cXG4jdGFza3tcXG4gICAgYmFja2dyb3VuZDogdXJsKC4vaW1hZ2VzL3Rhc2suc3ZnKSBuby1yZXBlYXQgY2VudGVyIGNlbnRlcjtcXG4gICAgbWFyZ2luOiAwcHg7XFxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxuICAgIHdpZHRoOiAxcmVtO1xcbiAgICBoZWlnaHQ6IDFyZW07XFxufVxcblxcbiNhZGRQcm9qZWN0e1xcbiAgICBiYWNrZ3JvdW5kOiB1cmwoLi9pbWFnZXMvYWRkLnN2Zykgbm8tcmVwZWF0IGNlbnRlciBjZW50ZXI7XFxuICAgIG1hcmdpbjogMHB4O1xcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcbiAgICB3aWR0aDogMXJlbTtcXG4gICAgaGVpZ2h0OiAxcmVtO1xcbn1cXG5cXG4jdGl0bGV7XFxuICAgIGJhY2tncm91bmQ6IHVybCguL2ltYWdlcy9iYW5uZXIuc3ZnKSBuby1yZXBlYXQgY2VudGVyIGNlbnRlcjtcXG4gICAgbWFyZ2luOiAwcHg7XFxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxuICAgIHdpZHRoOiA0cmVtO1xcbiAgICBoZWlnaHQ6IDRyZW07XFxufVxcblxcbi5hZGRJY29uIHtcXG4gICAgYmFja2dyb3VuZDogdXJsKC4vaW1hZ2VzL2FkZHRhc2suc3ZnKSBuby1yZXBlYXQgY2VudGVyIGNlbnRlcjtcXG4gICAgbWFyZ2luOiAwcHg7XFxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxuICAgIHdpZHRoOiAxcmVtO1xcbiAgICBoZWlnaHQ6IDFyZW07XFxufVxcblxcbi5hZGQge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHN0YXJ0O1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbiNjbG9zZVRhc2tXaW5kb3d7XFxuICAgIGJhY2tncm91bmQ6IHVybCguL2ltYWdlcy9jbG9zZS5zdmcpIG5vLXJlcGVhdCBjZW50ZXIgY2VudGVyO1xcbiAgICBtYXJnaW46IDBweDtcXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXG4gICAgd2lkdGg6IDEuMnJlbTtcXG4gICAgaGVpZ2h0OiAxLjJyZW07XFxuICAgIGFsaWduLXNlbGY6IGZsZXgtZW5kO1xcbiAgICBib3JkZXItc3R5bGU6IG5vbmU7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLnRhc2tiYXJEZWxldGUge1xcbiAgICBiYWNrZ3JvdW5kOiB1cmwoLi9pbWFnZXMvZGVsZXRlLnN2Zykgbm8tcmVwZWF0IGNlbnRlciBjZW50ZXI7XFxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxuICAgIG1hcmdpbjogMHB4O1xcbiAgICB3aWR0aDogMXJlbTtcXG4gICAgaGVpZ2h0OiAxcmVtO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi50YXNrV2luZG93IHtcXG4gICAgcG9zaXRpb246IGZpeGVkO1xcbiAgICB6LWluZGV4OiAxO1xcbiAgICBsZWZ0OiAwO1xcbiAgICB0b3A6IDA7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIG92ZXJmbG93OiBhdXRvO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNCk7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIHBhZGRpbmctdG9wOiAxMHJlbTtcXG59XFxuXFxuLnRhc2tXaW5kb3dDb250ZW50IHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI1NSwgMjQ5LCAyNTMpO1xcbiAgICBtYXJnaW46IDEwJSBhdXRvO1xcbiAgICBtYXJnaW4tdG9wOiAwJTtcXG4gICAgcGFkZGluZzogMjBweDtcXG4gICAgYm9yZGVyLXN0eWxlOiBub25lO1xcbiAgICB3aWR0aDogMzgwcHg7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkZXI7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcblxcbi5zaG93e1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG59XFxuXFxuLnNob3dGbGV4e1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbn1cXG5cXG4uZG9uZUxhYmVsIHtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICAgfVxcbiAgIFxcbiAgIC8qIElucHV0ICovXFxuICAgLmRvbmVMYWJlbCA+IGlucHV0IHtcXG4gICAgYXBwZWFyYW5jZTogbm9uZTtcXG4gICAgLW1vei1hcHBlYXJhbmNlOiBub25lO1xcbiAgICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XFxuICAgIHotaW5kZXg6IC0xO1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIGxlZnQ6IC0xMHB4O1xcbiAgICB0b3A6IC04cHg7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICBtYXJnaW46IDA7XFxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcXG4gICAgd2lkdGg6IDQwcHg7XFxuICAgIGhlaWdodDogNDBweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjYpO1xcbiAgICBib3gtc2hhZG93OiBub25lO1xcbiAgICBvdXRsaW5lOiBub25lO1xcbiAgICBvcGFjaXR5OiAwO1xcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xcbiAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcXG4gICAgdHJhbnNpdGlvbjogb3BhY2l0eSAwLjNzLCB0cmFuc2Zvcm0gMC4ycztcXG4gICB9XFxuICAgXFxuICAgLyogU3BhbiAqL1xcbiAgIC5kb25lTGFiZWwgPiBzcGFuIHtcXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgIH1cXG4gICBcXG4gICAvKiBCb3ggKi9cXG4gICAuZG9uZUxhYmVsID4gc3Bhbjo6YmVmb3JlIHtcXG4gICAgY29udGVudDogXFxcIlxcXCI7XFxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gICAgbWFyZ2luOiAzcHggMTFweCAzcHggMXB4O1xcbiAgICBib3JkZXI6IHNvbGlkIDJweDtcXG4gICAgLyogU2FmYXJpICovXFxuICAgIGJvcmRlci1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjYpO1xcbiAgICBib3JkZXItcmFkaXVzOiAycHg7XFxuICAgIHdpZHRoOiAxOHB4O1xcbiAgICBoZWlnaHQ6IDE4cHg7XFxuICAgIHZlcnRpY2FsLWFsaWduOiB0b3A7XFxuICAgIHRyYW5zaXRpb246IGJvcmRlci1jb2xvciAwLjJzLCBiYWNrZ3JvdW5kLWNvbG9yIDAuMnM7XFxuICAgfVxcbiAgIFxcbiAgIC8qIENoZWNrbWFyayAqL1xcbiAgIC5kb25lTGFiZWwgPiBzcGFuOjphZnRlciB7XFxuICAgIGNvbnRlbnQ6IFxcXCJcXFwiO1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB0b3A6IDNweDtcXG4gICAgbGVmdDogMXB4O1xcbiAgICB3aWR0aDogMTBweDtcXG4gICAgaGVpZ2h0OiA1cHg7XFxuICAgIGJvcmRlcjogc29saWQgMnB4IHRyYW5zcGFyZW50O1xcbiAgICBib3JkZXItcmlnaHQ6IG5vbmU7XFxuICAgIGJvcmRlci10b3A6IG5vbmU7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDNweCwgNHB4KSByb3RhdGUoLTQ1ZGVnKTtcXG4gICB9XFxuICAgXFxuICAgLyogQ2hlY2tlZCwgSW5kZXRlcm1pbmF0ZSAqL1xcbiAgIC5kb25lTGFiZWwgPiBpbnB1dDpjaGVja2VkLFxcbiAgIC5kb25lTGFiZWwgPiBpbnB1dDppbmRldGVybWluYXRlIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAxODc4NjtcXG4gICB9XFxuICAgXFxuICAgLmRvbmVMYWJlbCA+IGlucHV0OmNoZWNrZWQgKyBzcGFuOjpiZWZvcmUsXFxuICAgLmRvbmVMYWJlbCA+IGlucHV0OmluZGV0ZXJtaW5hdGUgKyBzcGFuOjpiZWZvcmUge1xcbiAgICBib3JkZXItY29sb3I6ICMwMTg3ODY7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMTg3ODY7XFxuICAgfVxcbiAgIFxcbiAgIC5kb25lTGFiZWwgPiBpbnB1dDpjaGVja2VkICsgc3Bhbjo6YWZ0ZXIsXFxuICAgLmRvbmVMYWJlbCA+IGlucHV0OmluZGV0ZXJtaW5hdGUgKyBzcGFuOjphZnRlciB7XFxuICAgIGJvcmRlci1jb2xvcjogI2ZmZjtcXG4gICB9XFxuICAgXFxuICAgLmRvbmVMYWJlbCA+IGlucHV0OmluZGV0ZXJtaW5hdGUgKyBzcGFuOjphZnRlciB7XFxuICAgIGJvcmRlci1sZWZ0OiBub25lO1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSg0cHgsIDNweCk7XFxuICAgfVxcbiAgIFxcbiAgIC8qIEhvdmVyLCBGb2N1cyAqL1xcbiAgIC5kb25lTGFiZWw6aG92ZXIgPiBpbnB1dCB7XFxuICAgIG9wYWNpdHk6IDAuMDQ7XFxuICAgfVxcbiAgIFxcbiAgIC5kb25lTGFiZWwgPiBpbnB1dDpmb2N1cyB7XFxuICAgIG9wYWNpdHk6IDAuMTI7XFxuICAgfVxcbiAgIFxcbiAgIC5kb25lTGFiZWw6aG92ZXIgPiBpbnB1dDpmb2N1cyB7XFxuICAgIG9wYWNpdHk6IDAuMTY7XFxuICAgfVxcbiAgIFxcbiAgIC8qIEFjdGl2ZSAqL1xcbiAgIC5kb25lTGFiZWwgPiBpbnB1dDphY3RpdmUge1xcbiAgICBvcGFjaXR5OiAxO1xcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDApO1xcbiAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMHMsIG9wYWNpdHkgMHM7XFxuICAgfVxcbiAgIFxcbiAgIC5kb25lTGFiZWwgPiBpbnB1dDphY3RpdmUgKyBzcGFuOjpiZWZvcmUge1xcbiAgICBib3JkZXItY29sb3I6ICM4NWI4Yjc7XFxuICAgfVxcbiAgIFxcbiAgIC5kb25lTGFiZWwgPiBpbnB1dDpjaGVja2VkOmFjdGl2ZSArIHNwYW46OmJlZm9yZSB7XFxuICAgIGJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC42KTtcXG4gICB9XFxuICAgXFxuICAgLyogRGlzYWJsZWQgKi9cXG4gICAuZG9uZUxhYmVsID4gaW5wdXQ6ZGlzYWJsZWQge1xcbiAgICBvcGFjaXR5OiAwO1xcbiAgIH1cXG4gICBcXG4gICAuZG9uZUxhYmVsID4gaW5wdXQ6ZGlzYWJsZWQgKyBzcGFuIHtcXG4gICAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4zOCk7XFxuICAgIGN1cnNvcjogaW5pdGlhbDtcXG4gICB9XFxuICAgXFxuICAgLmRvbmVMYWJlbCA+IGlucHV0OmRpc2FibGVkICsgc3Bhbjo6YmVmb3JlIHtcXG4gICAgYm9yZGVyLWNvbG9yOiBjdXJyZW50Q29sb3I7XFxuICAgfVxcbiAgIFxcbiAgIC5kb25lTGFiZWwgPiBpbnB1dDpjaGVja2VkOmRpc2FibGVkICsgc3Bhbjo6YmVmb3JlLFxcbiAgIC5kb25lTGFiZWwgPiBpbnB1dDppbmRldGVybWluYXRlOmRpc2FibGVkICsgc3Bhbjo6YmVmb3JlIHtcXG4gICAgYm9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogY3VycmVudENvbG9yO1xcbiAgIH1cXG4gICBcXG4gICAudGFza0JhciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuXFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcblxcbiAgICBoZWlnaHQ6IDNyZW07XFxuICAgIHdpZHRoOiAxMDAlO1xcblxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTBkYmQ4O1xcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgIH1cXG5cXG4gICAubG93QmFyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzcxZmY5NDtcXG4gICAgd2lkdGg6IC40cmVtO1xcbiAgICBoZWlnaHQ6IDNyZW07XFxuICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDEwcHg7XFxuICAgIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDEwcHg7XFxuICAgfVxcblxcbiAgIC5tZWRpdW1CYXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZkOTAwO1xcbiAgICB3aWR0aDogLjRyZW07XFxuICAgIGhlaWdodDogM3JlbTtcXG4gICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMTBweDtcXG4gICAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMTBweDtcXG4gICB9XFxuXFxuICAgLmhpZ2hCYXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmY2NDY0O1xcbiAgICB3aWR0aDogLjRyZW07XFxuICAgIGhlaWdodDogM3JlbTtcXG4gICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMTBweDtcXG4gICAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMTBweDtcXG4gICB9XFxuXFxuICAgLnRhc2tiYXJEdWV7XFxuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xcbiAgIH1cXG5cXG4gICAuZGVzY1dpbmRvd3tcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNWY1ZTVkO1xcbiAgICBoZWlnaHQ6IDhyZW07XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgIH1cXG5cXG4gICAuZmluaXNoZWR7XFxuICAgIG9wYWNpdHk6IC40O1xcbiAgIH1cXG5cXG4gICAuc3RyaWtle1xcbiAgICB0ZXh0LWRlY29yYXRpb246IGxpbmUtdGhyb3VnaDtcXG4gICB9XFxuXFxuICAgLnByb2plY3RUYWJ7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICB9XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVybCwgb3B0aW9ucykge1xuICBpZiAoIW9wdGlvbnMpIHtcbiAgICBvcHRpb25zID0ge307XG4gIH1cbiAgaWYgKCF1cmwpIHtcbiAgICByZXR1cm4gdXJsO1xuICB9XG4gIHVybCA9IFN0cmluZyh1cmwuX19lc01vZHVsZSA/IHVybC5kZWZhdWx0IDogdXJsKTtcblxuICAvLyBJZiB1cmwgaXMgYWxyZWFkeSB3cmFwcGVkIGluIHF1b3RlcywgcmVtb3ZlIHRoZW1cbiAgaWYgKC9eWydcIl0uKlsnXCJdJC8udGVzdCh1cmwpKSB7XG4gICAgdXJsID0gdXJsLnNsaWNlKDEsIC0xKTtcbiAgfVxuICBpZiAob3B0aW9ucy5oYXNoKSB7XG4gICAgdXJsICs9IG9wdGlvbnMuaGFzaDtcbiAgfVxuXG4gIC8vIFNob3VsZCB1cmwgYmUgd3JhcHBlZD9cbiAgLy8gU2VlIGh0dHBzOi8vZHJhZnRzLmNzc3dnLm9yZy9jc3MtdmFsdWVzLTMvI3VybHNcbiAgaWYgKC9bXCInKCkgXFx0XFxuXXwoJTIwKS8udGVzdCh1cmwpIHx8IG9wdGlvbnMubmVlZFF1b3Rlcykge1xuICAgIHJldHVybiBcIlxcXCJcIi5jb25jYXQodXJsLnJlcGxhY2UoL1wiL2csICdcXFxcXCInKS5yZXBsYWNlKC9cXG4vZywgXCJcXFxcblwiKSwgXCJcXFwiXCIpO1xuICB9XG4gIHJldHVybiB1cmw7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjcmVhdGVCYXIodGl0bGUsIGRlc2MsIGR1ZSwgcHJpb3JpdHkpIHtcbiAgICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbnRlbnQnKTtcbiAgICBjb250YWluZXIuY2xhc3NMaXN0LmFkZCgndGFza0JhcicpO1xuXG4gICAgY29uc3QgcHJpb3JpdHlCYXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBpZiAocHJpb3JpdHkgPT0gXCJsb3dcIikge1xuICAgICAgICBwcmlvcml0eUJhci5jbGFzc0xpc3QuYWRkKCdsb3dCYXInKTtcbiAgICB9XG4gICAgZWxzZSBpZiAocHJpb3JpdHkgPT0gXCJtZWRpdW1cIikge1xuICAgICAgICBwcmlvcml0eUJhci5jbGFzc0xpc3QuYWRkKCdtZWRpdW1CYXInKTtcbiAgICB9XG4gICAgZWxzZSBpZiAocHJpb3JpdHkgPT0gXCJoaWdoXCIpIHtcbiAgICAgICAgcHJpb3JpdHlCYXIuY2xhc3NMaXN0LmFkZCgnaGlnaEJhcicpO1xuICAgIH1cbiAgICBjb25zdCBkb25lTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xuICAgIGRvbmVMYWJlbC5jbGFzc0xpc3QuYWRkKCdkb25lTGFiZWwnKTtcbiAgICBjb25zdCBkb25lQ2hlY2tib3ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgIGRvbmVDaGVja2JveC5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAnY2hlY2tib3gnKTtcbiAgICBkb25lQ2hlY2tib3guYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgKCkgPT4ge1xuICAgICAgICBpZiAoZG9uZUNoZWNrYm94LmNoZWNrZWQpIHtcbiAgICAgICAgICAgIHRhc2tUaXRsZS5jbGFzc0xpc3QuYWRkKCdmaW5pc2hlZCcpO1xuICAgICAgICAgICAgdGFza1RpdGxlLmNsYXNzTGlzdC5hZGQoJ3N0cmlrZScpO1xuICAgICAgICAgICAgdGFza2JhckR1ZS5jbGFzc0xpc3QuYWRkKCdmaW5pc2hlZCcpO1xuICAgICAgICAgICAgdGFza0RlbGV0ZS5jbGFzc0xpc3QuYWRkKCdmaW5pc2hlZCcpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdGFza1RpdGxlLmNsYXNzTGlzdC5yZW1vdmUoJ2ZpbmlzaGVkJyk7XG4gICAgICAgICAgICB0YXNrVGl0bGUuY2xhc3NMaXN0LnJlbW92ZSgnc3RyaWtlJyk7XG4gICAgICAgICAgICB0YXNrYmFyRHVlLmNsYXNzTGlzdC5yZW1vdmUoJ2ZpbmlzaGVkJyk7XG4gICAgICAgICAgICB0YXNrRGVsZXRlLmNsYXNzTGlzdC5yZW1vdmUoJ2ZpbmlzaGVkJyk7XG4gICAgICAgIH1cbiAgICB9KVxuXG4gICAgZG9uZUxhYmVsLmFwcGVuZENoaWxkKGRvbmVDaGVja2JveCk7XG4gICAgZG9uZUxhYmVsLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKSk7XG5cbiAgICBjb25zdCB0YXNrVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMycpO1xuICAgIHRhc2tUaXRsZS5pbm5lckhUTUwgPSB0aXRsZTtcbiAgICB0YXNrVGl0bGUuY2xhc3NMaXN0LmFkZCgndGFza2JhclRpdGxlJyk7XG5cbiAgICBjb25zdCB0YXNrYmFyRHVlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgdGFza2JhckR1ZS5pbm5lckhUTUwgPSBkdWU7XG4gICAgdGFza2JhckR1ZS5jbGFzc0xpc3QuYWRkKCd0YXNrYmFyRHVlJyk7XG5cbiAgICBjb25zdCB0YXNrRGVsZXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgdGFza0RlbGV0ZS5jbGFzc0xpc3QuYWRkKCd0YXNrYmFyRGVsZXRlJyk7XG4gICAgdGFza0RlbGV0ZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgY29udGVudC5yZW1vdmVDaGlsZChjb250YWluZXIpO1xuICAgIH0pXG5cbiAgICBjb250YWluZXIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgIGlmIChjb250YWluZXIuY2xhc3NMaXN0LmNvbnRhaW5zKCdleHBhbmRlZCcpKSB7XG4gICAgICAgICAgICAvL0Nsb3NlIGV4cGFuZGVkIGRpdlxuICAgICAgICAgICAgY29udGFpbmVyLmNsYXNzTGlzdC5yZW1vdmUoJ2V4cGFuZGVkJyk7XG4gICAgICAgICAgICBjb250ZW50LnJlbW92ZUNoaWxkKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5kZXNjV2luZG93JykpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgY29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2V4cGFuZGVkJyk7XG4gICAgICAgICAgICBjb25zdCBkZXNjV2luZG93ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICBkZXNjV2luZG93LmNsYXNzTGlzdC5hZGQoJ2Rlc2NXaW5kb3cnKTtcbiAgICAgICAgICAgIGRlc2NXaW5kb3cuaW5uZXJIVE1MID0gZGVzYztcblxuICAgICAgICAgICAgY29udGFpbmVyLmluc2VydEFkamFjZW50RWxlbWVudCgnYWZ0ZXJlbmQnLCBkZXNjV2luZG93KTtcbiAgICAgICAgfVxuICAgIH0pXG5cbiAgICAvL0FwcGVuZGluZyB0byBDb250YWluZXJcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQocHJpb3JpdHlCYXIpO1xuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChkb25lTGFiZWwpO1xuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZCh0YXNrVGl0bGUpO1xuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZCh0YXNrYmFyRHVlKTtcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQodGFza0RlbGV0ZSk7XG5cbiAgICByZXR1cm4gY29udGFpbmVyO1xufSIsIi8vaW1wb3J0c1xuaW1wb3J0ICcuL3N0eWxlLmNzcydcbmltcG9ydCBsb2FkTWVudSBmcm9tICcuL2xvYWRNZW51LmpzJ1xuaW1wb3J0IGxvYWRCYW5uZXIgZnJvbSAnLi9sb2FkQmFubmVyJztcbmltcG9ydCBsb2FkQ29udGVudCBmcm9tICcuL2xvYWRDb250ZW50JztcblxuLy9mdW5jdGlvbnNcbmZ1bmN0aW9uIGNyZWF0ZUNvbnRhaW5lcigpIHtcbiAgICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb250YWluZXIuc2V0QXR0cmlidXRlKCdpZCcsJ2NvbnRhaW5lcicpO1xuICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoY29udGFpbmVyKTtcbn1cblxuZnVuY3Rpb24gY3JlYXRlTGF5b3V0KGNvbnRhaW5lcil7XG4gICAgbG9hZEJhbm5lcihjb250YWluZXIpO1xuICAgIGxvYWRNZW51KGNvbnRhaW5lcik7XG4gICAgbG9hZENvbnRlbnQoY29udGFpbmVyKTtcblxuICAgIHJldHVybiBjb250YWluZXI7XG59XG5cbi8vTG9naWMgQXBwbGljYXRpb25cbmNyZWF0ZUNvbnRhaW5lcigpO1xuY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NvbnRhaW5lcicpXG5cbmNyZWF0ZUxheW91dChjb250YWluZXIpOyIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGxvYWRCYW5uZXIoY29udGFpbmVyKXtcbiAgICBjb25zdCBiYW5uZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBiYW5uZXIuY2xhc3NMaXN0LmFkZCgnYmFubmVyJyk7XG5cbiAgICBjb25zdCB0aXRsZUljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICB0aXRsZUljb24uY2xhc3NMaXN0LmFkZCgnaWNvbicpO1xuICAgIHRpdGxlSWNvbi5zZXRBdHRyaWJ1dGUoJ2lkJywndGl0bGUnKTtcblxuICAgIGJhbm5lci5hcHBlbmRDaGlsZCh0aXRsZUljb24pO1xuXG4gICAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblxuICAgIHRpdGxlLmlubmVySFRNTCA9IFwiVG9kbyBMaXN0XCJcbiAgICB0aXRsZS5jbGFzc0xpc3QuYWRkKCd0aXRsZVRleHQnKTtcblxuICAgIGJhbm5lci5hcHBlbmRDaGlsZCh0aXRsZSk7XG5cbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoYmFubmVyKTtcbiAgICByZXR1cm4gY29udGFpbmVyO1xufSIsImltcG9ydCB7Zm9ybWF0LCBjb21wYXJlQXNjfSBmcm9tICdkYXRlLWZucyc7XG5pbXBvcnQgY3JlYXRlQmFyIGZyb20gJy4vY3JlYXRlQmFyJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gbG9hZENvbnRlbnQoY29udGFpbmVyKXtcbiAgICAvL0NyZWF0ZSBjb250ZW50IGNvbnRhaW5lclxuICAgIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb250ZW50LmNsYXNzTGlzdC5hZGQoJ2NvbnRlbnQnKVxuXG4gICAgLy9Db250ZW50IEhlYWRlclxuICAgIGNvbnN0IGNvbnRlbnRUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnRlbnRUaXRsZS5pbm5lckhUTUwgPSBcIlRhc2tzIFRvIERvXCI7XG4gICAgY29udGVudFRpdGxlLmNsYXNzTGlzdC5hZGQoJ2NvbnRlbnRUaXRsZScpXG4gICAgY29udGVudC5hcHBlbmRDaGlsZChjb250ZW50VGl0bGUpO1xuXG4gICAgLy9BZGQgVGFzayBCdXR0b25cbiAgICBjb25zdCBhZGQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBhZGQuY2xhc3NMaXN0LmFkZCgnYWRkJyk7XG5cbiAgICAvL0FkZCBUYXNrIFdpbmRvd1xuICAgIC8vZGVjbGFyZSB0YXNrIHdpbmRvdyBjb250ZW50XG4gICAgY29uc3QgdGFza1dpbmRvdyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnN0IHRhc2tXaW5kb3dDb250ZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29uc3QgdGFza0NvbnRlbnRIZWFkZXJCYXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb25zdCB0YXNrQ29udGVudEhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gxJyk7XG4gICAgY29uc3QgdGFza0NvbnRlbnRUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgY29uc3QgdGFza0NvbnRlbnREZXNjID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGV4dGFyZWEnKTtcbiAgICBjb25zdCB0YXNrQ2xvc2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBjb25zdCB0YXNrRHVlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29uc3QgdGFza0R1ZUlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICBjb25zdCB0YXNrUHJpb3JpdHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb25zdCBsb3dQcmlvcml0eSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgY29uc3QgbG93TGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xuICAgIGNvbnN0IG1lZGl1bVByaW9yaXR5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICBjb25zdCBtZWRpdW1MYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XG4gICAgY29uc3QgaGlnaFByaW9yaXR5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICBjb25zdCBoaWdoTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xuICAgIGNvbnN0IHByaW9yaXR5RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29uc3QgdGFza0FkZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIGNvbnN0IHRhc2tzRHVlQXJyYXkgPSBbXTtcblxuICAgIC8vZGVmaW5lIHZhcmlhYmxlcyBhbmQgc2V0IGZ1bmN0aW9ucyBhbmQgY2xhc3Nlcy5cbiAgICB0YXNrQWRkLmlubmVySFRNTCA9ICdBZGQgVGFzayc7XG4gICAgdGFza0FkZC5jbGFzc0xpc3QuYWRkKCd0YXNrQWRkJyk7XG4gICAgdGFza0FkZC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgY29uc3QgdGFzayA9ICh0aXRsZSxkZXNjLGR1ZSxwcmlvcml0eSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgYmFyID0gKCkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgICAgIGNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCd0YXNrQmFyJyk7XG5cbiAgICAgICAgICAgICAgICBjb25zdCBwcmlvcml0eUJhciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgICAgIGlmIChwcmlvcml0eSA9PSBcImxvd1wiKXtcbiAgICAgICAgICAgICAgICAgICAgcHJpb3JpdHlCYXIuY2xhc3NMaXN0LmFkZCgnbG93QmFyJyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2UgaWYgKHByaW9yaXR5ID09IFwibWVkaXVtXCIpe1xuICAgICAgICAgICAgICAgICAgICBwcmlvcml0eUJhci5jbGFzc0xpc3QuYWRkKCdtZWRpdW1CYXInKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSBpZihwcmlvcml0eSA9PSBcImhpZ2hcIil7XG4gICAgICAgICAgICAgICAgICAgIHByaW9yaXR5QmFyLmNsYXNzTGlzdC5hZGQoJ2hpZ2hCYXInKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgY29uc3QgZG9uZUxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcbiAgICAgICAgICAgICAgICBkb25lTGFiZWwuY2xhc3NMaXN0LmFkZCgnZG9uZUxhYmVsJyk7XG4gICAgICAgICAgICAgICAgY29uc3QgZG9uZUNoZWNrYm94ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICAgICAgICAgICAgICBkb25lQ2hlY2tib3guc2V0QXR0cmlidXRlKCd0eXBlJywnY2hlY2tib3gnKTtcbiAgICAgICAgICAgICAgICBkb25lQ2hlY2tib3guYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgKCk9PiB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChkb25lQ2hlY2tib3guY2hlY2tlZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGFza1RpdGxlLmNsYXNzTGlzdC5hZGQoJ2ZpbmlzaGVkJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICB0YXNrVGl0bGUuY2xhc3NMaXN0LmFkZCgnc3RyaWtlJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICB0YXNrYmFyRHVlLmNsYXNzTGlzdC5hZGQoJ2ZpbmlzaGVkJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICB0YXNrRGVsZXRlLmNsYXNzTGlzdC5hZGQoJ2ZpbmlzaGVkJyk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0YXNrVGl0bGUuY2xhc3NMaXN0LnJlbW92ZSgnZmluaXNoZWQnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRhc2tUaXRsZS5jbGFzc0xpc3QucmVtb3ZlKCdzdHJpa2UnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRhc2tiYXJEdWUuY2xhc3NMaXN0LnJlbW92ZSgnZmluaXNoZWQnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRhc2tEZWxldGUuY2xhc3NMaXN0LnJlbW92ZSgnZmluaXNoZWQnKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pXG5cbiAgICAgICAgICAgICAgICBkb25lTGFiZWwuYXBwZW5kQ2hpbGQoZG9uZUNoZWNrYm94KTtcbiAgICAgICAgICAgICAgICBkb25lTGFiZWwuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpKTtcblxuICAgICAgICAgICAgICAgIGNvbnN0IHRhc2tUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gzJyk7XG4gICAgICAgICAgICAgICAgdGFza1RpdGxlLmlubmVySFRNTCA9IHRpdGxlO1xuICAgICAgICAgICAgICAgIHRhc2tUaXRsZS5jbGFzc0xpc3QuYWRkKCd0YXNrYmFyVGl0bGUnKTtcblxuICAgICAgICAgICAgICAgIGNvbnN0IHRhc2tiYXJEdWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgICAgICB0YXNrYmFyRHVlLmlubmVySFRNTCA9IGR1ZTtcbiAgICAgICAgICAgICAgICB0YXNrYmFyRHVlLmNsYXNzTGlzdC5hZGQoJ3Rhc2tiYXJEdWUnKTtcblxuICAgICAgICAgICAgICAgIGNvbnN0IHRhc2tEZWxldGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgICAgICB0YXNrRGVsZXRlLmNsYXNzTGlzdC5hZGQoJ3Rhc2tiYXJEZWxldGUnKTtcbiAgICAgICAgICAgICAgICB0YXNrRGVsZXRlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnRlbnQucmVtb3ZlQ2hpbGQoY29udGFpbmVyKTtcbiAgICAgICAgICAgICAgICB9KVxuXG4gICAgICAgICAgICAgICAgY29udGFpbmVyLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCk9PiB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChjb250YWluZXIuY2xhc3NMaXN0LmNvbnRhaW5zKCdleHBhbmRlZCcpKXtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vQ2xvc2UgZXhwYW5kZWQgZGl2XG4gICAgICAgICAgICAgICAgICAgICAgICBjb250YWluZXIuY2xhc3NMaXN0LnJlbW92ZSgnZXhwYW5kZWQnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRlbnQucmVtb3ZlQ2hpbGQoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmRlc2NXaW5kb3cnKSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb250YWluZXIuY2xhc3NMaXN0LmFkZCgnZXhwYW5kZWQnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGRlc2NXaW5kb3cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRlc2NXaW5kb3cuY2xhc3NMaXN0LmFkZCgnZGVzY1dpbmRvdycpO1xuICAgICAgICAgICAgICAgICAgICAgICAgZGVzY1dpbmRvdy5pbm5lckhUTUwgPSBkZXNjO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBjb250YWluZXIuaW5zZXJ0QWRqYWNlbnRFbGVtZW50KCdhZnRlcmVuZCcsZGVzY1dpbmRvdyk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KVxuXG4gICAgICAgICAgICAgICAgLy9BcHBlbmRpbmcgdG8gQ29udGFpbmVyXG4gICAgICAgICAgICAgICAgY29udGFpbmVyLmFwcGVuZENoaWxkKHByaW9yaXR5QmFyKTtcbiAgICAgICAgICAgICAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoZG9uZUxhYmVsKTtcbiAgICAgICAgICAgICAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQodGFza1RpdGxlKTtcbiAgICAgICAgICAgICAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQodGFza2JhckR1ZSk7XG4gICAgICAgICAgICAgICAgY29udGFpbmVyLmFwcGVuZENoaWxkKHRhc2tEZWxldGUpO1xuXG4gICAgICAgICAgICAgICAgdGFza1dpbmRvdy5jbGFzc0xpc3QucmVtb3ZlKCdzaG93Jyk7XG4gICAgICAgICAgICAgICAgdGFza0NvbnRlbnRIZWFkZXJCYXIuY2xhc3NMaXN0LnJlbW92ZSgnc2hvd0ZsZXgnKTtcblxuICAgICAgICAgICAgICAgIHJldHVybiBjb250YWluZXI7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4ge3RpdGxlLGRlc2MsZHVlLHByaW9yaXR5fTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50YXNrQ29udGVudFRpdGxlJykudmFsdWU7XG4gICAgICAgIGNvbnN0IGRlc2MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudGFza0NvbnRlbnREZXNjJykudmFsdWU7XG4gICAgICAgIGNvbnN0IGR1ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50YXNrRHVlSW5wdXQnKS52YWx1ZTtcbiAgICAgICAgY29uc3QgcHJpb3JpdHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdpbnB1dFtuYW1lPVwicHJpb3JpdHlcIl06Y2hlY2tlZCcpLmlkO1xuXG4gICAgICAgIC8vQWxsIHZhbHVlcyB3b3JraW5nIG5vd1xuXG4gICAgICAgIGNvbnN0IG5ld1Rhc2sgPSB0YXNrKHRpdGxlLCBkZXNjLCBkdWUsIHByaW9yaXR5KTtcbiAgICAgICAgdGFza3NEdWVBcnJheS5wdXNoKG5ld1Rhc2spO1xuICAgICAgICBzZXNzaW9uU3RvcmFnZS5zZXRJdGVtKFwidGFza3NEdWVcIixKU09OLnN0cmluZ2lmeSh0YXNrc0R1ZUFycmF5KSk7XG4gICAgICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQoY3JlYXRlQmFyKG5ld1Rhc2sudGl0bGUsIG5ld1Rhc2suZGVzYywgbmV3VGFzay5kdWUsIG5ld1Rhc2sucHJpb3JpdHkpKTtcbiAgICAgICAgdGFza1dpbmRvdy5jbGFzc0xpc3QucmVtb3ZlKCdzaG93Jyk7XG4gICAgICAgIHRhc2tDb250ZW50SGVhZGVyQmFyLmNsYXNzTGlzdC5yZW1vdmUoJ3Nob3dGbGV4Jyk7XG4gICAgfSk7XG5cbiAgICB0YXNrUHJpb3JpdHkuaW5uZXJIVE1MID0gXCJQcmlvcml0eTogXCJcbiAgICB0YXNrUHJpb3JpdHkuY2xhc3NMaXN0LmFkZCgndGFza1ByaW9yaXR5Jyk7XG5cblxuICAgIGxvd1ByaW9yaXR5LnNldEF0dHJpYnV0ZSgndHlwZScsJ3JhZGlvJyk7XG4gICAgbG93UHJpb3JpdHkuc2V0QXR0cmlidXRlKCdpZCcsJ2xvdycpO1xuICAgIGxvd1ByaW9yaXR5LnNldEF0dHJpYnV0ZSgnbmFtZScsJ3ByaW9yaXR5Jyk7XG4gICAgbG93TGFiZWwuaW5uZXJIVE1MID0gXCJMb3dcIjtcbiAgICBsb3dMYWJlbC5zZXRBdHRyaWJ1dGUoJ2ZvcicsJ2xvdycpO1xuICAgIG1lZGl1bVByaW9yaXR5LnNldEF0dHJpYnV0ZSgndHlwZScsJ3JhZGlvJyk7XG4gICAgbWVkaXVtUHJpb3JpdHkuc2V0QXR0cmlidXRlKCdpZCcsJ21lZGl1bScpO1xuICAgIG1lZGl1bVByaW9yaXR5LnNldEF0dHJpYnV0ZSgnbmFtZScsJ3ByaW9yaXR5Jyk7XG4gICAgbWVkaXVtTGFiZWwuaW5uZXJIVE1MID0gXCJNZWRpdW1cIjtcbiAgICBtZWRpdW1MYWJlbC5zZXRBdHRyaWJ1dGUoJ2ZvcicsJ21lZGl1bScpO1xuICAgIGhpZ2hQcmlvcml0eS5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCdyYWRpbycpO1xuICAgIGhpZ2hQcmlvcml0eS5zZXRBdHRyaWJ1dGUoJ2lkJywnaGlnaCcpO1xuICAgIGhpZ2hQcmlvcml0eS5zZXRBdHRyaWJ1dGUoJ25hbWUnLCdwcmlvcml0eScpO1xuICAgIGhpZ2hMYWJlbC5pbm5lckhUTUwgPSBcIkhpZ2hcIjtcbiAgICBoaWdoTGFiZWwuc2V0QXR0cmlidXRlKCdmb3InLCdIaWdoJyk7XG4gICAgbG93UHJpb3JpdHkuY2xhc3NMaXN0LmFkZCgnbG93Jyk7XG4gICAgbWVkaXVtUHJpb3JpdHkuY2xhc3NMaXN0LmFkZCgnbWVkaXVtJyk7XG4gICAgaGlnaFByaW9yaXR5LmNsYXNzTGlzdC5hZGQoJ2hpZ2gnKTtcblxuICAgIHByaW9yaXR5RGl2LmFwcGVuZENoaWxkKGxvd1ByaW9yaXR5KTtcbiAgICBwcmlvcml0eURpdi5hcHBlbmRDaGlsZChsb3dMYWJlbCk7XG4gICAgcHJpb3JpdHlEaXYuYXBwZW5kQ2hpbGQobWVkaXVtUHJpb3JpdHkpO1xuICAgIHByaW9yaXR5RGl2LmFwcGVuZENoaWxkKG1lZGl1bUxhYmVsKTtcbiAgICBwcmlvcml0eURpdi5hcHBlbmRDaGlsZChoaWdoUHJpb3JpdHkpO1xuICAgIHByaW9yaXR5RGl2LmFwcGVuZENoaWxkKGhpZ2hMYWJlbCk7XG4gICAgXG5cbiAgICB0YXNrV2luZG93Q29udGVudC5jbGFzc0xpc3QuYWRkKCd0YXNrV2luZG93Q29udGVudCcpO1xuXG5cbiAgICB0YXNrQ29udGVudEhlYWRlci5jbGFzc0xpc3QuYWRkKCd0YXNrQ29udGVudEhlYWRlcicpO1xuICAgIHRhc2tDb250ZW50SGVhZGVyLmlubmVySFRNTCA9ICdBZGQgVGFzayc7XG5cbiAgICB0YXNrQ29udGVudEhlYWRlckJhci5jbGFzc0xpc3QuYWRkKCdjb250ZW50SGVhZGVyQmFyJyk7XG4gICAgXG4gICAgdGFza0Nsb3NlLnNldEF0dHJpYnV0ZSgnaWQnLCdjbG9zZVRhc2tXaW5kb3cnKTtcbiAgICB0YXNrQ2xvc2UuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgIHRhc2tXaW5kb3cuY2xhc3NMaXN0LnJlbW92ZSgnc2hvdycpO1xuICAgICAgICB0YXNrQ29udGVudEhlYWRlckJhci5jbGFzc0xpc3QucmVtb3ZlKCdzaG93RmxleCcpO1xuICAgIH0pXG5cbiAgICB0YXNrQ29udGVudEhlYWRlckJhci5hcHBlbmRDaGlsZCh0YXNrQ29udGVudEhlYWRlcik7XG4gICAgdGFza0NvbnRlbnRIZWFkZXJCYXIuYXBwZW5kQ2hpbGQodGFza0Nsb3NlKTtcblxuICAgIHRhc2tDb250ZW50VGl0bGUuY2xhc3NMaXN0LmFkZCgndGFza0NvbnRlbnRUaXRsZScpO1xuICAgIHRhc2tDb250ZW50VGl0bGUuc2V0QXR0cmlidXRlKCd0eXBlJywndGV4dCcpO1xuICAgIHRhc2tDb250ZW50VGl0bGUuc2V0QXR0cmlidXRlKCdwbGFjZWhvbGRlcicsJ1Rhc2sgVGl0bGUnKTtcblxuICAgIHRhc2tDb250ZW50RGVzYy5jbGFzc0xpc3QuYWRkKCd0YXNrQ29udGVudERlc2MnKTtcbiAgICB0YXNrQ29udGVudERlc2Muc2V0QXR0cmlidXRlKCdyb3dzJywnOCcpO1xuICAgIHRhc2tDb250ZW50RGVzYy5zZXRBdHRyaWJ1dGUoJ2NvbHMnLCc0MCcpO1xuICAgIHRhc2tDb250ZW50RGVzYy5zZXRBdHRyaWJ1dGUoJ3BsYWNlaG9sZGVyJywnVGFzayBEZXNjcmlwdGlvbicpO1xuXG4gICAgdGFza1dpbmRvdy5jbGFzc0xpc3QuYWRkKCd0YXNrV2luZG93Jyk7XG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGV2ZW50KSA9PiB7XG4gICAgICAgIGlmIChldmVudC50YXJnZXQgPT0gdGFza1dpbmRvdykge1xuICAgICAgICAgICAgdGFza1dpbmRvdy5jbGFzc0xpc3QucmVtb3ZlKCdzaG93Jyk7XG4gICAgICAgICAgICB0YXNrQ29udGVudEhlYWRlckJhci5jbGFzc0xpc3QucmVtb3ZlKCdzaG93RmxleCcpO1xuICAgICAgICB9XG4gICAgfSlcblxuICAgIHRhc2tEdWUuaW5uZXJIVE1MID0gXCJUYXNrIER1ZTpcIlxuICAgIHRhc2tEdWUuY2xhc3NMaXN0LmFkZCgndGFza0R1ZScpO1xuICAgIHRhc2tEdWVJbnB1dC5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCdkYXRlJyk7XG4gICAgdGFza0R1ZUlucHV0LmNsYXNzTGlzdC5hZGQoJ3Rhc2tEdWVJbnB1dCcpO1xuXG4gICAgLy9BcHBlbmQgZWxlbWVudHMgdG8gdGFza1dpbmRvd0NvbnRlbnRcbiAgICB0YXNrV2luZG93Q29udGVudC5hcHBlbmRDaGlsZCh0YXNrQ29udGVudFRpdGxlKTtcbiAgICB0YXNrV2luZG93Q29udGVudC5hcHBlbmRDaGlsZCh0YXNrQ29udGVudERlc2MpO1xuICAgIHRhc2tXaW5kb3dDb250ZW50LmFwcGVuZENoaWxkKHRhc2tEdWUpO1xuICAgIHRhc2tXaW5kb3dDb250ZW50LmFwcGVuZENoaWxkKHRhc2tEdWVJbnB1dCk7XG4gICAgdGFza1dpbmRvd0NvbnRlbnQuYXBwZW5kQ2hpbGQodGFza1ByaW9yaXR5KTtcbiAgICB0YXNrV2luZG93Q29udGVudC5hcHBlbmRDaGlsZChwcmlvcml0eURpdik7XG4gICAgdGFza1dpbmRvd0NvbnRlbnQuYXBwZW5kQ2hpbGQodGFza0FkZCk7XG4gICAgdGFza1dpbmRvdy5hcHBlbmRDaGlsZCh0YXNrQ29udGVudEhlYWRlckJhcik7XG4gICAgdGFza1dpbmRvdy5hcHBlbmRDaGlsZCh0YXNrV2luZG93Q29udGVudCk7XG4gICAgXG5cbiAgICAvL0FkZCB0YXNrV2luZG93IHRvIGNvbnRlbnRcbiAgICBjb250ZW50LmFwcGVuZENoaWxkKHRhc2tXaW5kb3cpO1xuXG4gICAgLy9BZGQgRXZlbnQgdG8gc2hvdyB0YXNrIHdpbmRvdyBvbiBjbGljayBvbiBhZGQgdGFza1xuICAgIGFkZC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgdGFza1dpbmRvdy5jbGFzc0xpc3QuYWRkKCdzaG93Jyk7XG4gICAgICAgIHRhc2tDb250ZW50SGVhZGVyQmFyLmNsYXNzTGlzdC5hZGQoJ3Nob3dGbGV4Jyk7XG4gICAgfSk7XG5cbiAgICAvL0NyZWF0aW5nIGFkZCB0YXNrIHRhYlxuICAgIGNvbnN0IGFkZEljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBhZGRJY29uLmNsYXNzTGlzdC5hZGQoJ2FkZEljb24nKTtcbiAgICBjb25zdCBhZGRUZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgYWRkVGV4dC5pbm5lckhUTUwgPSBcIkFkZCBUYXNrXCI7XG4gICAgYWRkVGV4dC5jbGFzc0xpc3QuYWRkKCdhZGRUZXh0JylcbiAgICBhZGQuYXBwZW5kQ2hpbGQoYWRkSWNvbik7XG4gICAgYWRkLmFwcGVuZENoaWxkKGFkZFRleHQpO1xuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQoYWRkKTtcblxuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChjb250ZW50KTtcbiAgICByZXR1cm4gY29udGFpbmVyO1xufSIsImltcG9ydCBjcmVhdGVCYXIgZnJvbSBcIi4vY3JlYXRlQmFyXCI7XG5pbXBvcnQgbG9hZFByb2plY3QgZnJvbSBcIi4vbG9hZFByb2plY3RcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gbG9hZE1lbnUoY29udGFpbmVyKSB7XG4gICAgLy9jcmVhdGUgQmFubmVyIGRpdlxuICAgIGNvbnN0IG1lbnUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBtZW51LmNsYXNzTGlzdC5hZGQoJ21lbnUnKTtcblxuICAgIC8vVGhpcyBtb250aFxuICAgIGNvbnN0IHRhc2tUYWIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb25zdCB0YXNrVGFiSWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXG4gICAgdGFza1RhYi5jbGFzc0xpc3QuYWRkKCd0YWInKTtcbiAgICB0YXNrVGFiLmNsYXNzTGlzdC5hZGQoJ2xvYWRUYXNrJyk7XG4gICAgdGFza1RhYi5pbm5lckhUTUwgPSBcIlRhc2tzIER1ZVwiO1xuXG4gICAgdGFza1RhYi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY29udGVudFwiKTtcbiAgICAgICAgY29uc3QgdGFza3NEdWUgPSBKU09OLnBhcnNlKHNlc3Npb25TdG9yYWdlLmdldEl0ZW0oXCJ0YXNrc0R1ZVwiKSk7XG5cbiAgICAgICAgY29uc29sZS5sb2codGFza3NEdWUpO1xuICAgICAgICBmb3IgKGNvbnN0IGkgaW4gdGFza3NEdWUpIHtcbiAgICAgICAgICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQoY3JlYXRlQmFyKHRhc2tzRHVlW2ldLnRpdGxlLCB0YXNrc0R1ZVtpXS5kZXNjLCB0YXNrc0R1ZVtpXS5kdWUsIHRhc2tzRHVlW2ldLnByaW9yaXR5KSk7XG4gICAgICAgIH1cbiAgICB9KTtcblxuICAgIHRhc2tUYWJJY29uLmNsYXNzTGlzdC5hZGQoJ2ljb24nKTtcbiAgICB0YXNrVGFiSWNvbi5zZXRBdHRyaWJ1dGUoJ2lkJywgJ3Rhc2snKTtcblxuICAgIHRhc2tUYWIuYXBwZW5kQ2hpbGQodGFza1RhYkljb24pO1xuXG4gICAgbWVudS5hcHBlbmRDaGlsZCh0YXNrVGFiKTtcblxuICAgIC8vUHJvamVjdHNcbiAgICBjb25zdCBwcm9qZWN0cyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHByb2plY3RzLmlubmVySFRNTCA9IFwiUHJvamVjdHNcIjtcbiAgICBwcm9qZWN0cy5jbGFzc0xpc3QuYWRkKCdwcm9qZWN0cycpO1xuXG4gICAgbWVudS5hcHBlbmRDaGlsZChwcm9qZWN0cyk7XG5cbiAgICAvL0FkZCBQcm9qZWN0IFRhYlxuICAgIGNvbnN0IGFkZFByb2plY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb25zdCBhZGRQcm9qZWN0SWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXG4gICAgYWRkUHJvamVjdC5pbm5lckhUTUwgPSBcIkFkZCBQcm9qZWN0XCI7XG5cbiAgICBhZGRQcm9qZWN0LmNsYXNzTGlzdC5hZGQoJ3RhYicpO1xuICAgIGFkZFByb2plY3RJY29uLmNsYXNzTGlzdC5hZGQoJ2ljb24nKTtcbiAgICBhZGRQcm9qZWN0SWNvbi5zZXRBdHRyaWJ1dGUoJ2lkJywgJ2FkZFByb2plY3QnKTtcblxuICAgIGFkZFByb2plY3QuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgIG1lbnUucmVtb3ZlQ2hpbGQoYWRkUHJvamVjdCk7XG5cbiAgICAgICAgLy9DcmVhdGUgUHJvamVjdCBjb250YWluZXJcbiAgICAgICAgY29uc3QgcHJvamVjdENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBwcm9qZWN0Q29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ3Byb2plY3RDb250YWluZXInKTtcbiAgICAgICAgXG4gICAgICAgIC8vUHJvamVjdCBOYW1lIElucHV0XG4gICAgICAgIGNvbnN0IHByb2plY3ROYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICAgICAgcHJvamVjdE5hbWUuc2V0QXR0cmlidXRlKCd0eXBlJywndGV4dCcpO1xuICAgICAgICBwcm9qZWN0TmFtZS5jbGFzc0xpc3QuYWRkKCdwcm9qZWN0TmFtZScpO1xuICAgICAgICBwcm9qZWN0TmFtZS5zZXRBdHRyaWJ1dGUoJ3BsYWNlaG9sZGVyJywnUHJvamVjdCBOYW1lJyk7XG4gICAgICAgIHByb2plY3RDb250YWluZXIuYXBwZW5kQ2hpbGQocHJvamVjdE5hbWUpO1xuXG4gICAgICAgIC8vQWRkIFByb2plY3QgQnV0dG9uXG4gICAgICAgIGNvbnN0IGFkZFByb2plY3RCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICAgICAgYWRkUHJvamVjdEJ0bi5jbGFzc0xpc3QuYWRkKCdhZGRQcm9qZWN0QnRuJyk7XG4gICAgICAgIGFkZFByb2plY3RCdG4uaW5uZXJIVE1MID0gXCJBZGRcIjtcbiAgICAgICAgcHJvamVjdENvbnRhaW5lci5hcHBlbmRDaGlsZChhZGRQcm9qZWN0QnRuKTtcbiAgICAgICAgYWRkUHJvamVjdEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsKCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgcHJvamVjdFRhYiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgcHJvamVjdFRhYi5jbGFzc0xpc3QuYWRkKCdwcm9qZWN0VGFiJyk7XG4gICAgICAgICAgICBwcm9qZWN0VGFiLmlubmVySFRNTCA9IHByb2plY3ROYW1lLnZhbHVlO1xuICAgICAgICAgICAgcHJvamVjdFRhYi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsKCkgPT4ge1xuICAgICAgICAgICAgICAgIGxvYWRQcm9qZWN0KHByb2plY3RUYWIpO1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIG1lbnUucmVtb3ZlQ2hpbGQocHJvamVjdENvbnRhaW5lcik7XG4gICAgICAgICAgICBtZW51LmFwcGVuZENoaWxkKHByb2plY3RUYWIpO1xuICAgICAgICAgICAgbWVudS5hcHBlbmRDaGlsZChhZGRQcm9qZWN0KTtcblxuICAgICAgICB9KVxuXG4gICAgICAgIC8vQ2FuY2VsIEFkZCBQcm9qZWN0IEJ1dHRvblxuICAgICAgICBjb25zdCBjYW5jZWxQcm9qZWN0QnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgICAgIGNhbmNlbFByb2plY3RCdG4uY2xhc3NMaXN0LmFkZCgnY2FuY2VsUHJvamVjdCcpO1xuICAgICAgICBjYW5jZWxQcm9qZWN0QnRuLmlubmVySFRNTCA9IFwiQ2FuY2VsXCJcbiAgICAgICAgcHJvamVjdENvbnRhaW5lci5hcHBlbmRDaGlsZChjYW5jZWxQcm9qZWN0QnRuKTtcbiAgICAgICAgY2FuY2VsUHJvamVjdEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsKCkgPT4ge1xuICAgICAgICAgICAgbWVudS5yZW1vdmVDaGlsZChwcm9qZWN0Q29udGFpbmVyKTtcbiAgICAgICAgICAgIG1lbnUuYXBwZW5kQ2hpbGQoYWRkUHJvamVjdCk7XG4gICAgICAgIH0pXG5cbiAgICAgICAgbWVudS5hcHBlbmRDaGlsZChwcm9qZWN0Q29udGFpbmVyKTtcbiAgICB9KTtcblxuICAgIGFkZFByb2plY3QuYXBwZW5kQ2hpbGQoYWRkUHJvamVjdEljb24pO1xuXG4gICAgbWVudS5hcHBlbmRDaGlsZChhZGRQcm9qZWN0KTtcbiAgICAvL0ZpbmFsIHVwbG9hZCB0byBjb250YWluZXJcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQobWVudSk7XG5cbiAgICByZXR1cm4gY29udGFpbmVyO1xufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGxvYWRQcm9qZWN0KHByb2plY3Qpe1xuICAgIGxldCBwcm9qZWN0TmFtZSA9IHByb2plY3QuaW5uZXJIVE1MO1xuICAgIHByb2plY3ROYW1lID0gU3RyaW5nKHByb2plY3ROYW1lKTtcblxuICAgIGlmIChzZXNzaW9uU3RvcmFnZS5nZXRJdGVtKHByb2plY3ROYW1lKSA9PT0gbnVsbCl7XG4gICAgICAgIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29udGVudCcpO1xuICAgICAgICBjb25zdCBjb250ZW50VGl0bGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29udGVudFRpdGxlJyk7XG4gICAgICAgIFxuICAgICAgICBjb250ZW50VGl0bGUuaW5uZXJIVE1MID0gcHJvamVjdE5hbWU7XG5cbiAgICAgICAgLy9BZGQgVGFzayBCdXR0b25cbiAgICAgICAgY29udGVudC5yZW1vdmVDaGlsZChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYWRkJykpO1xuICAgICAgICBjb25zdCBhZGQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgYWRkLmNsYXNzTGlzdC5hZGQoJ2FkZCcpO1xuICAgICAgICBjb25zdCBhZGRJY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGFkZEljb24uY2xhc3NMaXN0LmFkZCgnYWRkSWNvbicpO1xuICAgICAgICBjb25zdCBhZGRUZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGFkZFRleHQuaW5uZXJIVE1MID0gXCJBZGQgU3RlcFwiO1xuICAgICAgICBhZGRUZXh0LmNsYXNzTGlzdC5hZGQoJ2FkZFRleHQnKVxuICAgICAgICBhZGQuYXBwZW5kQ2hpbGQoYWRkSWNvbik7XG4gICAgICAgIGFkZC5hcHBlbmRDaGlsZChhZGRUZXh0KTtcbiAgICAgICAgYWRkLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgICAgXG4gICAgICAgIH0pXG5cbiAgICAgICAgY29udGVudC5hcHBlbmRDaGlsZChhZGQpO1xuICAgIH1cbiAgICBlbHNlIHtcblxuICAgIH1cbn0iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=