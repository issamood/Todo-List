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
var ___CSS_LOADER_URL_IMPORT_6___ = new URL(/* asset import */ __webpack_require__(/*! ./fonts/geologica-v1-latin-200.woff2 */ "./src/fonts/geologica-v1-latin-200.woff2"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_7___ = new URL(/* asset import */ __webpack_require__(/*! ./fonts/geologica-v1-latin-regular.woff2 */ "./src/fonts/geologica-v1-latin-regular.woff2"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_8___ = new URL(/* asset import */ __webpack_require__(/*! ./fonts/geologica-v1-latin-700.woff2 */ "./src/fonts/geologica-v1-latin-700.woff2"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
var ___CSS_LOADER_URL_REPLACEMENT_2___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_2___);
var ___CSS_LOADER_URL_REPLACEMENT_3___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_3___);
var ___CSS_LOADER_URL_REPLACEMENT_4___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_4___);
var ___CSS_LOADER_URL_REPLACEMENT_5___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_5___);
var ___CSS_LOADER_URL_REPLACEMENT_6___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_6___);
var ___CSS_LOADER_URL_REPLACEMENT_7___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_7___);
var ___CSS_LOADER_URL_REPLACEMENT_8___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_8___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "body {\n    margin: 0;\n    font-family: 'Geologica', sans-serif;\n    font-size: 0.9rem;\n}\n\n#container {\n    display: grid;\n    height: 100vh;\n    width: 100vw;\n    max-height: 100vh;\n    max-width: 100vw;\n\n    grid-template-columns: 10rem auto;\n    grid-template-rows: 6rem auto;\n    overflow: auto;\n    grid-template-areas:\n        \"banner banner\"\n        \"menu content\";\n}\n\n.banner {\n    background-color: #909090;\n    grid-area: banner;\n\n    display: flex;\n    flex-direction: row;\n\n    align-items: center;\n\n}\n\n.menu {\n    background-color: #b7ee7d;\n    display: flex;\n    flex-direction: column;\n    padding-top: .8rem;\n}\n\n.projects {\n    text-align: center;\n}\n\n.content {\n    background-color: #FAFAFA;\n    grid-area: content;\n    padding-top: 2.5rem;\n    padding-left: 2.5rem;\n    padding-right: 2.5rem;\n}\n\n.tab {\n    display: flex;\n    flex-direction: row-reverse;\n    align-items: center;\n    justify-content: center;\n    cursor: pointer;\n}\n\n.material-symbols-outlined {\n    font-variation-settings:\n        'FILL' 1,\n        'wght' 200,\n        'GRAD' 0,\n        'opsz' 48\n}\n\n.contentHeaderBar {\n    background-color: rgb(241, 255, 237);\n    margin: 0 auto;\n    width: 420px;\n    height: 2rem;\n    flex-direction: row;\n    justify-content: space-between;\n    align-items: center;\n    display: none;\n    /*Add font style here*/\n}\n\n#task {\n    background: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ") no-repeat center center;\n    margin: 0px;\n    background-size: cover;\n    width: 1rem;\n    height: 1rem;\n}\n\n#addProject {\n    background: url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ") no-repeat center center;\n    margin: 0px;\n    background-size: cover;\n    width: 1rem;\n    height: 1rem;\n}\n\n#title {\n    background: url(" + ___CSS_LOADER_URL_REPLACEMENT_2___ + ") no-repeat center center;\n    margin: 0px;\n    background-size: cover;\n    width: 4rem;\n    height: 4rem;\n}\n\n.addIcon {\n    background: url(" + ___CSS_LOADER_URL_REPLACEMENT_3___ + ") no-repeat center center;\n    margin: 0px;\n    background-size: cover;\n    width: 1rem;\n    height: 1rem;\n}\n\n.add {\n    display: flex;\n    flex-direction: row;\n    justify-content: start;\n    cursor: pointer;\n}\n\n#closeTaskWindow {\n    background: url(" + ___CSS_LOADER_URL_REPLACEMENT_4___ + ") no-repeat center center;\n    margin: 0px;\n    background-size: cover;\n    width: 1.2rem;\n    height: 1.2rem;\n    align-self: flex-end;\n    border-style: none;\n    cursor: pointer;\n}\n\n.taskbarDelete {\n    background: url(" + ___CSS_LOADER_URL_REPLACEMENT_5___ + ") no-repeat center center;\n    background-size: cover;\n    margin: 0px;\n    width: 1rem;\n    height: 1rem;\n    cursor: pointer;\n}\n\n.taskWindow {\n    position: fixed;\n    z-index: 1;\n    left: 0;\n    top: 0;\n    width: 100%;\n    height: 100%;\n    overflow: auto;\n    background-color: rgba(0, 0, 0, 0.4);\n    display: none;\n    flex-direction: column;\n    align-items: center;\n    padding-top: 10rem;\n}\n\n.taskWindowContent {\n    background-color: rgb(255, 249, 253);\n    margin: 10% auto;\n    margin-top: 0%;\n    padding: 20px;\n    border-style: none;\n    width: 380px;\n    font-weight: bolder;\n    display: flex;\n    flex-direction: column;\n\n    align-items: center;\n}\n\n.taskContentTitle{\n    width: 100%;\n    border: none;\n}\n\n.taskContentDesc{\n    width: 100%;\n    border: none;\n    resize: none;\n}\n\n.show {\n    display: block;\n}\n\n.showFlex {\n    display: flex;\n}\n\n.doneLabel {\n    position: relative;\n    display: inline-block;\n}\n\n/* Input */\n.doneLabel>input {\n    appearance: none;\n    -moz-appearance: none;\n    -webkit-appearance: none;\n    z-index: -1;\n    position: absolute;\n    left: -10px;\n    top: -8px;\n    display: block;\n    margin: 0;\n    border-radius: 50%;\n    width: 40px;\n    height: 40px;\n    background-color: rgba(0, 0, 0, 0.6);\n    box-shadow: none;\n    outline: none;\n    opacity: 0;\n    transform: scale(1);\n    pointer-events: none;\n    transition: opacity 0.3s, transform 0.2s;\n}\n\n/* Span */\n.doneLabel>span {\n    display: inline-block;\n    width: 100%;\n    cursor: pointer;\n}\n\n/* Box */\n.doneLabel>span::before {\n    content: \"\";\n    display: inline-block;\n    box-sizing: border-box;\n    margin: 3px 11px 3px 1px;\n    border: solid 2px;\n    /* Safari */\n    border-color: rgba(0, 0, 0, 0.6);\n    border-radius: 2px;\n    width: 18px;\n    height: 18px;\n    vertical-align: top;\n    transition: border-color 0.2s, background-color 0.2s;\n}\n\n/* Checkmark */\n.doneLabel>span::after {\n    content: \"\";\n    display: block;\n    position: absolute;\n    top: 3px;\n    left: 1px;\n    width: 10px;\n    height: 5px;\n    border: solid 2px transparent;\n    border-right: none;\n    border-top: none;\n    transform: translate(3px, 4px) rotate(-45deg);\n}\n\n/* Checked, Indeterminate */\n.doneLabel>input:checked,\n.doneLabel>input:indeterminate {\n    background-color: #018786;\n}\n\n.doneLabel>input:checked+span::before,\n.doneLabel>input:indeterminate+span::before {\n    border-color: #018786;\n    background-color: #018786;\n}\n\n.doneLabel>input:checked+span::after,\n.doneLabel>input:indeterminate+span::after {\n    border-color: #fff;\n}\n\n.doneLabel>input:indeterminate+span::after {\n    border-left: none;\n    transform: translate(4px, 3px);\n}\n\n/* Hover, Focus */\n.doneLabel:hover>input {\n    opacity: 0.04;\n}\n\n.doneLabel>input:focus {\n    opacity: 0.12;\n}\n\n.doneLabel:hover>input:focus {\n    opacity: 0.16;\n}\n\n/* Active */\n.doneLabel>input:active {\n    opacity: 1;\n    transform: scale(0);\n    transition: transform 0s, opacity 0s;\n}\n\n.doneLabel>input:active+span::before {\n    border-color: #85b8b7;\n}\n\n.doneLabel>input:checked:active+span::before {\n    border-color: transparent;\n    background-color: rgba(0, 0, 0, 0.6);\n}\n\n/* Disabled */\n.doneLabel>input:disabled {\n    opacity: 0;\n}\n\n.doneLabel>input:disabled+span {\n    color: rgba(0, 0, 0, 0.38);\n    cursor: initial;\n}\n\n.doneLabel>input:disabled+span::before {\n    border-color: currentColor;\n}\n\n.doneLabel>input:checked:disabled+span::before,\n.doneLabel>input:indeterminate:disabled+span::before {\n    border-color: transparent;\n    background-color: currentColor;\n}\n\n.taskBar {\n    display: flex;\n    flex-direction: row;\n\n    justify-content: center;\n    align-items: center;\n\n    height: 3rem;\n    width: 100%;\n\n    background-color: #e0dbd8;\n    border-radius: 10px;\n}\n\n.lowBar {\n    background-color: #71ff94;\n    width: .4rem;\n    height: 3rem;\n    border-top-left-radius: 10px;\n    border-bottom-left-radius: 10px;\n}\n\n.mediumBar {\n    background-color: #ffd900;\n    width: .4rem;\n    height: 3rem;\n    border-top-left-radius: 10px;\n    border-bottom-left-radius: 10px;\n}\n\n.highBar {\n    background-color: #ff6464;\n    width: .4rem;\n    height: 3rem;\n    border-top-left-radius: 10px;\n    border-bottom-left-radius: 10px;\n}\n\n.taskbarDue {\n    margin-left: auto;\n}\n\n.descWindow {\n    color: white;\n    background-color: #909090;\n    height: 8rem;\n    width: 100%;\n}\n\n.finished {\n    opacity: .4;\n}\n\n.strike {\n    text-decoration: line-through;\n}\n\n.projectTab {\n    cursor: pointer;\n}\n\n/* geologica-200 - latin */\n@font-face {\n    font-display: swap;\n    /* Check https://developer.mozilla.org/en-US/docs/Web/CSS/@font-face/font-display for other options. */\n    font-family: 'Geologica200';\n    font-style: normal;\n    font-weight: 200;\n    src: url(" + ___CSS_LOADER_URL_REPLACEMENT_6___ + ") format('woff2');\n    /* Chrome 36+, Opera 23+, Firefox 39+, Safari 12+, iOS 10+ */\n}\n\n/* geologica-regular - latin */\n@font-face {\n    font-display: swap;\n    /* Check https://developer.mozilla.org/en-US/docs/Web/CSS/@font-face/font-display for other options. */\n    font-family: 'Geologica';\n    font-style: normal;\n    font-weight: 400;\n    src: url(" + ___CSS_LOADER_URL_REPLACEMENT_7___ + ") format('woff2');\n    /* Chrome 36+, Opera 23+, Firefox 39+, Safari 12+, iOS 10+ */\n}\n\n/* geologica-700 - latin */\n@font-face {\n    font-display: swap;\n    /* Check https://developer.mozilla.org/en-US/docs/Web/CSS/@font-face/font-display for other options. */\n    font-family: 'Geologica700';\n    font-style: normal;\n    font-weight: 700;\n    src: url(" + ___CSS_LOADER_URL_REPLACEMENT_8___ + ") format('woff2');\n    /* Chrome 36+, Opera 23+, Firefox 39+, Safari 12+, iOS 10+ */\n}\n\n/*Aesthetic CSS*/\n.titleText {\n    font-family: 'Geologica700', sans-serif;\n    font-size: 3rem;\n    color: #FAFAFA;\n}\n\n/*Button Style Preset*/\n\n/* CSS */\n.button-16 {\n    margin-top: 1rem;\n    background-color: #c2ff90;\n    border: 1px solid #f8f9fa;\n    border-radius: 4px;\n    color: #707070;\n    cursor: pointer;\n    font-family: 'Geologica', sans-serif;\n    font-size: 14px;\n    height: 36px;\n    line-height: 27px;\n    min-width: 54px;\n    padding: 0 16px;\n    text-align: center;\n    user-select: none;\n    -webkit-user-select: none;\n    touch-action: manipulation;\n    white-space: pre;\n}\n\n.button-16:hover {\n    border-color: #dadce0;\n    box-shadow: rgba(0, 0, 0, .1) 0 1px 1px;\n    color: #202124;\n}\n\n.button-16:focus {\n    border-color: #4285f4;\n    outline: none;\n}\n\n.priorityDiv{\n    margin-top: .5rem;\n}\n\ninput[type=\"radio\"] {\n    appearance: none;\n    margin: 0px;\n    \n}\n\nlabel{\n    font-family: 'Geologica200', sans-serif;\n    font-size: 1rem;\n}\n\nlabel[for=\"low\"] {\n    padding: 2px 6px;\n    background-color: rgb(165, 255, 142);\n    border-radius: 12%;\n    margin-right: 1rem;\n}\n\nlabel[for=\"medium\"] {\n    padding: 2px 6px;\n    background-color: rgb(255, 243, 69);\n    border-radius: 12%;\n    margin-right: 1rem;\n}\n\nlabel[for=\"high\"] {\n    padding: 2px 6px;\n    background-color: rgb(255, 105, 95);\n    border-radius: 12%;\n}", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":["body {\n    margin: 0;\n    font-family: 'Geologica', sans-serif;\n    font-size: 0.9rem;\n}\n\n#container {\n    display: grid;\n    height: 100vh;\n    width: 100vw;\n    max-height: 100vh;\n    max-width: 100vw;\n\n    grid-template-columns: 10rem auto;\n    grid-template-rows: 6rem auto;\n    overflow: auto;\n    grid-template-areas:\n        \"banner banner\"\n        \"menu content\";\n}\n\n.banner {\n    background-color: #909090;\n    grid-area: banner;\n\n    display: flex;\n    flex-direction: row;\n\n    align-items: center;\n\n}\n\n.menu {\n    background-color: #b7ee7d;\n    display: flex;\n    flex-direction: column;\n    padding-top: .8rem;\n}\n\n.projects {\n    text-align: center;\n}\n\n.content {\n    background-color: #FAFAFA;\n    grid-area: content;\n    padding-top: 2.5rem;\n    padding-left: 2.5rem;\n    padding-right: 2.5rem;\n}\n\n.tab {\n    display: flex;\n    flex-direction: row-reverse;\n    align-items: center;\n    justify-content: center;\n    cursor: pointer;\n}\n\n.material-symbols-outlined {\n    font-variation-settings:\n        'FILL' 1,\n        'wght' 200,\n        'GRAD' 0,\n        'opsz' 48\n}\n\n.contentHeaderBar {\n    background-color: rgb(241, 255, 237);\n    margin: 0 auto;\n    width: 420px;\n    height: 2rem;\n    flex-direction: row;\n    justify-content: space-between;\n    align-items: center;\n    display: none;\n    /*Add font style here*/\n}\n\n#task {\n    background: url(./images/task.svg) no-repeat center center;\n    margin: 0px;\n    background-size: cover;\n    width: 1rem;\n    height: 1rem;\n}\n\n#addProject {\n    background: url(./images/add.svg) no-repeat center center;\n    margin: 0px;\n    background-size: cover;\n    width: 1rem;\n    height: 1rem;\n}\n\n#title {\n    background: url(./images/banner.svg) no-repeat center center;\n    margin: 0px;\n    background-size: cover;\n    width: 4rem;\n    height: 4rem;\n}\n\n.addIcon {\n    background: url(./images/addtask.svg) no-repeat center center;\n    margin: 0px;\n    background-size: cover;\n    width: 1rem;\n    height: 1rem;\n}\n\n.add {\n    display: flex;\n    flex-direction: row;\n    justify-content: start;\n    cursor: pointer;\n}\n\n#closeTaskWindow {\n    background: url(./images/close.svg) no-repeat center center;\n    margin: 0px;\n    background-size: cover;\n    width: 1.2rem;\n    height: 1.2rem;\n    align-self: flex-end;\n    border-style: none;\n    cursor: pointer;\n}\n\n.taskbarDelete {\n    background: url(./images/delete.svg) no-repeat center center;\n    background-size: cover;\n    margin: 0px;\n    width: 1rem;\n    height: 1rem;\n    cursor: pointer;\n}\n\n.taskWindow {\n    position: fixed;\n    z-index: 1;\n    left: 0;\n    top: 0;\n    width: 100%;\n    height: 100%;\n    overflow: auto;\n    background-color: rgba(0, 0, 0, 0.4);\n    display: none;\n    flex-direction: column;\n    align-items: center;\n    padding-top: 10rem;\n}\n\n.taskWindowContent {\n    background-color: rgb(255, 249, 253);\n    margin: 10% auto;\n    margin-top: 0%;\n    padding: 20px;\n    border-style: none;\n    width: 380px;\n    font-weight: bolder;\n    display: flex;\n    flex-direction: column;\n\n    align-items: center;\n}\n\n.taskContentTitle{\n    width: 100%;\n    border: none;\n}\n\n.taskContentDesc{\n    width: 100%;\n    border: none;\n    resize: none;\n}\n\n.show {\n    display: block;\n}\n\n.showFlex {\n    display: flex;\n}\n\n.doneLabel {\n    position: relative;\n    display: inline-block;\n}\n\n/* Input */\n.doneLabel>input {\n    appearance: none;\n    -moz-appearance: none;\n    -webkit-appearance: none;\n    z-index: -1;\n    position: absolute;\n    left: -10px;\n    top: -8px;\n    display: block;\n    margin: 0;\n    border-radius: 50%;\n    width: 40px;\n    height: 40px;\n    background-color: rgba(0, 0, 0, 0.6);\n    box-shadow: none;\n    outline: none;\n    opacity: 0;\n    transform: scale(1);\n    pointer-events: none;\n    transition: opacity 0.3s, transform 0.2s;\n}\n\n/* Span */\n.doneLabel>span {\n    display: inline-block;\n    width: 100%;\n    cursor: pointer;\n}\n\n/* Box */\n.doneLabel>span::before {\n    content: \"\";\n    display: inline-block;\n    box-sizing: border-box;\n    margin: 3px 11px 3px 1px;\n    border: solid 2px;\n    /* Safari */\n    border-color: rgba(0, 0, 0, 0.6);\n    border-radius: 2px;\n    width: 18px;\n    height: 18px;\n    vertical-align: top;\n    transition: border-color 0.2s, background-color 0.2s;\n}\n\n/* Checkmark */\n.doneLabel>span::after {\n    content: \"\";\n    display: block;\n    position: absolute;\n    top: 3px;\n    left: 1px;\n    width: 10px;\n    height: 5px;\n    border: solid 2px transparent;\n    border-right: none;\n    border-top: none;\n    transform: translate(3px, 4px) rotate(-45deg);\n}\n\n/* Checked, Indeterminate */\n.doneLabel>input:checked,\n.doneLabel>input:indeterminate {\n    background-color: #018786;\n}\n\n.doneLabel>input:checked+span::before,\n.doneLabel>input:indeterminate+span::before {\n    border-color: #018786;\n    background-color: #018786;\n}\n\n.doneLabel>input:checked+span::after,\n.doneLabel>input:indeterminate+span::after {\n    border-color: #fff;\n}\n\n.doneLabel>input:indeterminate+span::after {\n    border-left: none;\n    transform: translate(4px, 3px);\n}\n\n/* Hover, Focus */\n.doneLabel:hover>input {\n    opacity: 0.04;\n}\n\n.doneLabel>input:focus {\n    opacity: 0.12;\n}\n\n.doneLabel:hover>input:focus {\n    opacity: 0.16;\n}\n\n/* Active */\n.doneLabel>input:active {\n    opacity: 1;\n    transform: scale(0);\n    transition: transform 0s, opacity 0s;\n}\n\n.doneLabel>input:active+span::before {\n    border-color: #85b8b7;\n}\n\n.doneLabel>input:checked:active+span::before {\n    border-color: transparent;\n    background-color: rgba(0, 0, 0, 0.6);\n}\n\n/* Disabled */\n.doneLabel>input:disabled {\n    opacity: 0;\n}\n\n.doneLabel>input:disabled+span {\n    color: rgba(0, 0, 0, 0.38);\n    cursor: initial;\n}\n\n.doneLabel>input:disabled+span::before {\n    border-color: currentColor;\n}\n\n.doneLabel>input:checked:disabled+span::before,\n.doneLabel>input:indeterminate:disabled+span::before {\n    border-color: transparent;\n    background-color: currentColor;\n}\n\n.taskBar {\n    display: flex;\n    flex-direction: row;\n\n    justify-content: center;\n    align-items: center;\n\n    height: 3rem;\n    width: 100%;\n\n    background-color: #e0dbd8;\n    border-radius: 10px;\n}\n\n.lowBar {\n    background-color: #71ff94;\n    width: .4rem;\n    height: 3rem;\n    border-top-left-radius: 10px;\n    border-bottom-left-radius: 10px;\n}\n\n.mediumBar {\n    background-color: #ffd900;\n    width: .4rem;\n    height: 3rem;\n    border-top-left-radius: 10px;\n    border-bottom-left-radius: 10px;\n}\n\n.highBar {\n    background-color: #ff6464;\n    width: .4rem;\n    height: 3rem;\n    border-top-left-radius: 10px;\n    border-bottom-left-radius: 10px;\n}\n\n.taskbarDue {\n    margin-left: auto;\n}\n\n.descWindow {\n    color: white;\n    background-color: #909090;\n    height: 8rem;\n    width: 100%;\n}\n\n.finished {\n    opacity: .4;\n}\n\n.strike {\n    text-decoration: line-through;\n}\n\n.projectTab {\n    cursor: pointer;\n}\n\n/* geologica-200 - latin */\n@font-face {\n    font-display: swap;\n    /* Check https://developer.mozilla.org/en-US/docs/Web/CSS/@font-face/font-display for other options. */\n    font-family: 'Geologica200';\n    font-style: normal;\n    font-weight: 200;\n    src: url('./fonts/geologica-v1-latin-200.woff2') format('woff2');\n    /* Chrome 36+, Opera 23+, Firefox 39+, Safari 12+, iOS 10+ */\n}\n\n/* geologica-regular - latin */\n@font-face {\n    font-display: swap;\n    /* Check https://developer.mozilla.org/en-US/docs/Web/CSS/@font-face/font-display for other options. */\n    font-family: 'Geologica';\n    font-style: normal;\n    font-weight: 400;\n    src: url('./fonts/geologica-v1-latin-regular.woff2') format('woff2');\n    /* Chrome 36+, Opera 23+, Firefox 39+, Safari 12+, iOS 10+ */\n}\n\n/* geologica-700 - latin */\n@font-face {\n    font-display: swap;\n    /* Check https://developer.mozilla.org/en-US/docs/Web/CSS/@font-face/font-display for other options. */\n    font-family: 'Geologica700';\n    font-style: normal;\n    font-weight: 700;\n    src: url('./fonts/geologica-v1-latin-700.woff2') format('woff2');\n    /* Chrome 36+, Opera 23+, Firefox 39+, Safari 12+, iOS 10+ */\n}\n\n/*Aesthetic CSS*/\n.titleText {\n    font-family: 'Geologica700', sans-serif;\n    font-size: 3rem;\n    color: #FAFAFA;\n}\n\n/*Button Style Preset*/\n\n/* CSS */\n.button-16 {\n    margin-top: 1rem;\n    background-color: #c2ff90;\n    border: 1px solid #f8f9fa;\n    border-radius: 4px;\n    color: #707070;\n    cursor: pointer;\n    font-family: 'Geologica', sans-serif;\n    font-size: 14px;\n    height: 36px;\n    line-height: 27px;\n    min-width: 54px;\n    padding: 0 16px;\n    text-align: center;\n    user-select: none;\n    -webkit-user-select: none;\n    touch-action: manipulation;\n    white-space: pre;\n}\n\n.button-16:hover {\n    border-color: #dadce0;\n    box-shadow: rgba(0, 0, 0, .1) 0 1px 1px;\n    color: #202124;\n}\n\n.button-16:focus {\n    border-color: #4285f4;\n    outline: none;\n}\n\n.priorityDiv{\n    margin-top: .5rem;\n}\n\ninput[type=\"radio\"] {\n    appearance: none;\n    margin: 0px;\n    \n}\n\nlabel{\n    font-family: 'Geologica200', sans-serif;\n    font-size: 1rem;\n}\n\nlabel[for=\"low\"] {\n    padding: 2px 6px;\n    background-color: rgb(165, 255, 142);\n    border-radius: 12%;\n    margin-right: 1rem;\n}\n\nlabel[for=\"medium\"] {\n    padding: 2px 6px;\n    background-color: rgb(255, 243, 69);\n    border-radius: 12%;\n    margin-right: 1rem;\n}\n\nlabel[for=\"high\"] {\n    padding: 2px 6px;\n    background-color: rgb(255, 105, 95);\n    border-radius: 12%;\n}"],"sourceRoot":""}]);
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
    const contentTitle = document.querySelector('.contentTitle');
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
        if (contentTitle.innerHTML === "Tasks To Do"){
            const tasks = JSON.parse(sessionStorage.getItem("tasksDue"));
            for (const i in tasks){
                if (tasks[i].title === title){
                    tasks.splice(i,1);
                }
                sessionStorage.setItem("tasksDue", JSON.stringify(tasks));
            }
        }
        else{
            const tasks = JSON.parse(sessionStorage.getItem(contentTitle.innerHTML));
            for (const i in tasks){
                if (tasks[i].title === title){
                    tasks.splice(i,1);
                }
                sessionStorage.setItem(contentTitle.innerHTML, JSON.stringify(tasks));
            }
        }

        //DELETE TASK DATA FROM ARRAY IN STORAGE
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

    //define variables and set functions and classes.
    taskAdd.innerHTML = 'Add Task';
    taskAdd.classList.add('taskAdd','button-16');

    taskAdd.addEventListener('click', () => {
        const task = (title,desc,due,priority) => {
            return {title,desc,due,priority};
        }
        const title = document.querySelector('.taskContentTitle').value;
        const desc = document.querySelector('.taskContentDesc').value;
        const due = document.querySelector('.taskDueInput').value;
        const priority = document.querySelector('input[name="priority"]:checked').id;

        const taskWindow = document.querySelector('.taskWindow');
        const taskContentHeaderBar = document.querySelector('.contentHeaderBar');
        taskWindow.classList.remove('show');
        taskContentHeaderBar.classList.remove('showFlex');

        const newTask = task(title, desc, due, priority);

        if (contentTitle.innerHTML == "Tasks To Do"){
            if ("tasksDue" in sessionStorage){
                const tasksDueArray = JSON.parse(sessionStorage.getItem("tasksDue"));
                tasksDueArray.push(newTask);
                sessionStorage.setItem("tasksDue",JSON.stringify(tasksDueArray));
            }
            else {
                const tasksDueArray = [newTask];
                sessionStorage.setItem("tasksDue", JSON.stringify(tasksDueArray));
            }

        }
        else {
           const projectName = contentTitle.id;
           if (projectName in sessionStorage){
                const steps = JSON.parse(sessionStorage.getItem(projectName));
                steps.push(newTask);
                sessionStorage.setItem(projectName, JSON.stringify(steps));
           }
           else{
                const steps = [newTask];
                sessionStorage.setItem(projectName, JSON.stringify(steps));
           }
        }
        content.appendChild((0,_createBar__WEBPACK_IMPORTED_MODULE_0__["default"])(newTask.title, newTask.desc, newTask.due, newTask.priority));
    });

    taskPriority.innerHTML = "Priority: "
    taskPriority.classList.add('taskPriority');
    priorityDiv.classList.add('priorityDiv');


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
    highLabel.setAttribute('for','high');
    lowPriority.classList.add('low');
    mediumPriority.classList.add('medium');
    highPriority.classList.add('high');

    lowLabel.appendChild(lowPriority);
    priorityDiv.appendChild(lowLabel);
    mediumLabel.appendChild(mediumPriority);
    priorityDiv.appendChild(mediumLabel);
    highLabel.appendChild(highPriority);
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
    const dateMin = new Date().toISOString().split("T")[0];
    taskDueInput.setAttribute('min', dateMin);
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
        //Selecting necessary elements
        const content = document.querySelector(".content");
        const tasksDue = JSON.parse(sessionStorage.getItem("tasksDue"));
        const contentTitle = document.querySelector(".contentTitle");
        const taskAddText = document.querySelector(".addText");

        if (contentTitle === "Tasks To Do"){
            return;
        }

        //Clear content from tasks
        const taskBars = document.querySelectorAll('.taskBar');
        const descs = document.querySelectorAll('.descWindow');

        for (const taskBar of taskBars){
            content.removeChild(taskBar);
        }
        for (const desc of descs){
            content.removeChild(desc);
        }

        //Update title and add task button
        contentTitle.innerHTML = "Tasks To Do";
        taskAddText.innerHTML = "Add Task";

        //Load in bar elements into content div
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
/* harmony import */ var _createBar__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./createBar */ "./src/createBar.js");


function loadProject(project) {
    const projectName = project.innerHTML;

    //Selectors
    const content = document.querySelector('.content');
    const contentTitle = document.querySelector('.contentTitle');
    if (contentTitle.innerHTML === projectName){
        return;
    }

    contentTitle.setAttribute('id',projectName);
    contentTitle.innerHTML = projectName;


    //Clear content window of tasks
    const bars = document.querySelectorAll('.taskBar');
    const descs = document.querySelectorAll('.descWindow');

    for (const bar of bars) {
        content.removeChild(bar);
    }
    for (const desc of descs){
        content.removeChild(desc);
    }

    //Update add task button
    const addText = document.querySelector(".addText");
    const taskContentHeader = document.querySelector(".taskContentHeader");

    taskContentHeader.innerHTML = "Add Step";
    addText.innerHTML = "Add Step";

    //Load steps (FINAL STEP)
    if (sessionStorage.getItem(projectName) === null){
        
    }
    else{
        const steps = JSON.parse(sessionStorage.getItem(projectName));

        for (let i in steps){
            console.log(i);
            content.appendChild((0,_createBar__WEBPACK_IMPORTED_MODULE_0__["default"])(steps[i].title, steps[i].desc, steps[i].due, steps[i].priority))
        }
    }
}

/***/ }),

/***/ "./src/fonts/geologica-v1-latin-200.woff2":
/*!************************************************!*\
  !*** ./src/fonts/geologica-v1-latin-200.woff2 ***!
  \************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "982388c9033ddc356949.woff2";

/***/ }),

/***/ "./src/fonts/geologica-v1-latin-700.woff2":
/*!************************************************!*\
  !*** ./src/fonts/geologica-v1-latin-700.woff2 ***!
  \************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "01026ce17e27cff2a65d.woff2";

/***/ }),

/***/ "./src/fonts/geologica-v1-latin-regular.woff2":
/*!****************************************************!*\
  !*** ./src/fonts/geologica-v1-latin-regular.woff2 ***!
  \****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "dd385366eacba8b59685.woff2";

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QVUsVUFBVSxVQUFVLE9BQU8sS0FBSyxVQUFVLFVBQVUsVUFBVSxVQUFVLFVBQVUsVUFBVSxVQUFVLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLFdBQVcsVUFBVSxZQUFZLFdBQVcsWUFBWSxXQUFXLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLE9BQU8sS0FBSyxVQUFVLFVBQVUsVUFBVSxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sVUFBVSxLQUFLLFlBQVksYUFBYSxhQUFhLFdBQVcsWUFBWSxXQUFXLFVBQVUsVUFBVSxVQUFVLFlBQVksV0FBVyxVQUFVLFlBQVksYUFBYSxXQUFXLFVBQVUsWUFBWSxhQUFhLGFBQWEsT0FBTyxVQUFVLEtBQUssWUFBWSxXQUFXLFVBQVUsT0FBTyxVQUFVLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLFdBQVcsWUFBWSxhQUFhLFdBQVcsVUFBVSxZQUFZLGFBQWEsT0FBTyxVQUFVLEtBQUssVUFBVSxVQUFVLFlBQVksV0FBVyxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLE9BQU8sWUFBWSxPQUFPLFlBQVksT0FBTyxNQUFNLFlBQVksYUFBYSxPQUFPLE1BQU0sWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sWUFBWSxNQUFNLFVBQVUsT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLFVBQVUsT0FBTyxVQUFVLEtBQUssVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLFVBQVUsS0FBSyxVQUFVLE1BQU0sS0FBSyxZQUFZLFdBQVcsT0FBTyxLQUFLLFlBQVksT0FBTyxNQUFNLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxhQUFhLGFBQWEsY0FBYyxXQUFXLFdBQVcsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLFlB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Ozs7Ozs7Ozs7O0FDbkI0QztBQUNSOztBQUVyQjtBQUNmO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0Esb0JBQW9CO0FBQ3BCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0QkFBNEIsc0RBQVM7QUFDckMsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7OztBQ2hNb0M7QUFDSTs7QUFFekI7QUFDZjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxnQ0FBZ0Msc0RBQVM7QUFDekM7O0FBRUE7QUFDQSxLQUFLOztBQUVMO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCLHdEQUFXO0FBQzNCLGFBQWE7O0FBRWI7QUFDQTtBQUNBOztBQUVBLFNBQVM7O0FBRVQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7O0FBRVQ7QUFDQSxLQUFLOztBQUVMOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7QUMvSG9DOztBQUVyQjtBQUNmOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsZ0NBQWdDLHNEQUFTO0FBQ3pDO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9jcmVhdGVCYXIuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2luZGV4LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9sb2FkQmFubmVyIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9sb2FkQ29udGVudC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvbG9hZE1lbnUuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2xvYWRQcm9qZWN0LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyA9IG5ldyBVUkwoXCIuL2ltYWdlcy90YXNrLnN2Z1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fID0gbmV3IFVSTChcIi4vaW1hZ2VzL2FkZC5zdmdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMl9fXyA9IG5ldyBVUkwoXCIuL2ltYWdlcy9iYW5uZXIuc3ZnXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzNfX18gPSBuZXcgVVJMKFwiLi9pbWFnZXMvYWRkdGFzay5zdmdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfNF9fXyA9IG5ldyBVUkwoXCIuL2ltYWdlcy9jbG9zZS5zdmdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfNV9fXyA9IG5ldyBVUkwoXCIuL2ltYWdlcy9kZWxldGUuc3ZnXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzZfX18gPSBuZXcgVVJMKFwiLi9mb250cy9nZW9sb2dpY2EtdjEtbGF0aW4tMjAwLndvZmYyXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzdfX18gPSBuZXcgVVJMKFwiLi9mb250cy9nZW9sb2dpY2EtdjEtbGF0aW4tcmVndWxhci53b2ZmMlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF84X19fID0gbmV3IFVSTChcIi4vZm9udHMvZ2VvbG9naWNhLXYxLWxhdGluLTcwMC53b2ZmMlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMl9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzJfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzNfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8zX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF80X19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfNF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfNV9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzVfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzZfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF82X19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF83X19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfN19fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfOF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzhfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiYm9keSB7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgZm9udC1mYW1pbHk6ICdHZW9sb2dpY2EnLCBzYW5zLXNlcmlmO1xcbiAgICBmb250LXNpemU6IDAuOXJlbTtcXG59XFxuXFxuI2NvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGhlaWdodDogMTAwdmg7XFxuICAgIHdpZHRoOiAxMDB2dztcXG4gICAgbWF4LWhlaWdodDogMTAwdmg7XFxuICAgIG1heC13aWR0aDogMTAwdnc7XFxuXFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMTByZW0gYXV0bztcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiA2cmVtIGF1dG87XFxuICAgIG92ZXJmbG93OiBhdXRvO1xcbiAgICBncmlkLXRlbXBsYXRlLWFyZWFzOlxcbiAgICAgICAgXFxcImJhbm5lciBiYW5uZXJcXFwiXFxuICAgICAgICBcXFwibWVudSBjb250ZW50XFxcIjtcXG59XFxuXFxuLmJhbm5lciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICM5MDkwOTA7XFxuICAgIGdyaWQtYXJlYTogYmFubmVyO1xcblxcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xcblxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcblxcbn1cXG5cXG4ubWVudSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNiN2VlN2Q7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIHBhZGRpbmctdG9wOiAuOHJlbTtcXG59XFxuXFxuLnByb2plY3RzIHtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG4uY29udGVudCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNGQUZBRkE7XFxuICAgIGdyaWQtYXJlYTogY29udGVudDtcXG4gICAgcGFkZGluZy10b3A6IDIuNXJlbTtcXG4gICAgcGFkZGluZy1sZWZ0OiAyLjVyZW07XFxuICAgIHBhZGRpbmctcmlnaHQ6IDIuNXJlbTtcXG59XFxuXFxuLnRhYiB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3ctcmV2ZXJzZTtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLm1hdGVyaWFsLXN5bWJvbHMtb3V0bGluZWQge1xcbiAgICBmb250LXZhcmlhdGlvbi1zZXR0aW5nczpcXG4gICAgICAgICdGSUxMJyAxLFxcbiAgICAgICAgJ3dnaHQnIDIwMCxcXG4gICAgICAgICdHUkFEJyAwLFxcbiAgICAgICAgJ29wc3onIDQ4XFxufVxcblxcbi5jb250ZW50SGVhZGVyQmFyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI0MSwgMjU1LCAyMzcpO1xcbiAgICBtYXJnaW46IDAgYXV0bztcXG4gICAgd2lkdGg6IDQyMHB4O1xcbiAgICBoZWlnaHQ6IDJyZW07XFxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZGlzcGxheTogbm9uZTtcXG4gICAgLypBZGQgZm9udCBzdHlsZSBoZXJlKi9cXG59XFxuXFxuI3Rhc2sge1xcbiAgICBiYWNrZ3JvdW5kOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fICsgXCIpIG5vLXJlcGVhdCBjZW50ZXIgY2VudGVyO1xcbiAgICBtYXJnaW46IDBweDtcXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXG4gICAgd2lkdGg6IDFyZW07XFxuICAgIGhlaWdodDogMXJlbTtcXG59XFxuXFxuI2FkZFByb2plY3Qge1xcbiAgICBiYWNrZ3JvdW5kOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19fICsgXCIpIG5vLXJlcGVhdCBjZW50ZXIgY2VudGVyO1xcbiAgICBtYXJnaW46IDBweDtcXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXG4gICAgd2lkdGg6IDFyZW07XFxuICAgIGhlaWdodDogMXJlbTtcXG59XFxuXFxuI3RpdGxlIHtcXG4gICAgYmFja2dyb3VuZDogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMl9fXyArIFwiKSBuby1yZXBlYXQgY2VudGVyIGNlbnRlcjtcXG4gICAgbWFyZ2luOiAwcHg7XFxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxuICAgIHdpZHRoOiA0cmVtO1xcbiAgICBoZWlnaHQ6IDRyZW07XFxufVxcblxcbi5hZGRJY29uIHtcXG4gICAgYmFja2dyb3VuZDogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfM19fXyArIFwiKSBuby1yZXBlYXQgY2VudGVyIGNlbnRlcjtcXG4gICAgbWFyZ2luOiAwcHg7XFxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxuICAgIHdpZHRoOiAxcmVtO1xcbiAgICBoZWlnaHQ6IDFyZW07XFxufVxcblxcbi5hZGQge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHN0YXJ0O1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbiNjbG9zZVRhc2tXaW5kb3cge1xcbiAgICBiYWNrZ3JvdW5kOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF80X19fICsgXCIpIG5vLXJlcGVhdCBjZW50ZXIgY2VudGVyO1xcbiAgICBtYXJnaW46IDBweDtcXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXG4gICAgd2lkdGg6IDEuMnJlbTtcXG4gICAgaGVpZ2h0OiAxLjJyZW07XFxuICAgIGFsaWduLXNlbGY6IGZsZXgtZW5kO1xcbiAgICBib3JkZXItc3R5bGU6IG5vbmU7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLnRhc2tiYXJEZWxldGUge1xcbiAgICBiYWNrZ3JvdW5kOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF81X19fICsgXCIpIG5vLXJlcGVhdCBjZW50ZXIgY2VudGVyO1xcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcbiAgICBtYXJnaW46IDBweDtcXG4gICAgd2lkdGg6IDFyZW07XFxuICAgIGhlaWdodDogMXJlbTtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4udGFza1dpbmRvdyB7XFxuICAgIHBvc2l0aW9uOiBmaXhlZDtcXG4gICAgei1pbmRleDogMTtcXG4gICAgbGVmdDogMDtcXG4gICAgdG9wOiAwO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICBvdmVyZmxvdzogYXV0bztcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjQpO1xcbiAgICBkaXNwbGF5OiBub25lO1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBwYWRkaW5nLXRvcDogMTByZW07XFxufVxcblxcbi50YXNrV2luZG93Q29udGVudCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyNTUsIDI0OSwgMjUzKTtcXG4gICAgbWFyZ2luOiAxMCUgYXV0bztcXG4gICAgbWFyZ2luLXRvcDogMCU7XFxuICAgIHBhZGRpbmc6IDIwcHg7XFxuICAgIGJvcmRlci1zdHlsZTogbm9uZTtcXG4gICAgd2lkdGg6IDM4MHB4O1xcbiAgICBmb250LXdlaWdodDogYm9sZGVyO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcblxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4udGFza0NvbnRlbnRUaXRsZXtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGJvcmRlcjogbm9uZTtcXG59XFxuXFxuLnRhc2tDb250ZW50RGVzY3tcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgcmVzaXplOiBub25lO1xcbn1cXG5cXG4uc2hvdyB7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbn1cXG5cXG4uc2hvd0ZsZXgge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbn1cXG5cXG4uZG9uZUxhYmVsIHtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxufVxcblxcbi8qIElucHV0ICovXFxuLmRvbmVMYWJlbD5pbnB1dCB7XFxuICAgIGFwcGVhcmFuY2U6IG5vbmU7XFxuICAgIC1tb3otYXBwZWFyYW5jZTogbm9uZTtcXG4gICAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xcbiAgICB6LWluZGV4OiAtMTtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICBsZWZ0OiAtMTBweDtcXG4gICAgdG9wOiAtOHB4O1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XFxuICAgIHdpZHRoOiA0MHB4O1xcbiAgICBoZWlnaHQ6IDQwcHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC42KTtcXG4gICAgYm94LXNoYWRvdzogbm9uZTtcXG4gICAgb3V0bGluZTogbm9uZTtcXG4gICAgb3BhY2l0eTogMDtcXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcXG4gICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XFxuICAgIHRyYW5zaXRpb246IG9wYWNpdHkgMC4zcywgdHJhbnNmb3JtIDAuMnM7XFxufVxcblxcbi8qIFNwYW4gKi9cXG4uZG9uZUxhYmVsPnNwYW4ge1xcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi8qIEJveCAqL1xcbi5kb25lTGFiZWw+c3Bhbjo6YmVmb3JlIHtcXG4gICAgY29udGVudDogXFxcIlxcXCI7XFxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gICAgbWFyZ2luOiAzcHggMTFweCAzcHggMXB4O1xcbiAgICBib3JkZXI6IHNvbGlkIDJweDtcXG4gICAgLyogU2FmYXJpICovXFxuICAgIGJvcmRlci1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjYpO1xcbiAgICBib3JkZXItcmFkaXVzOiAycHg7XFxuICAgIHdpZHRoOiAxOHB4O1xcbiAgICBoZWlnaHQ6IDE4cHg7XFxuICAgIHZlcnRpY2FsLWFsaWduOiB0b3A7XFxuICAgIHRyYW5zaXRpb246IGJvcmRlci1jb2xvciAwLjJzLCBiYWNrZ3JvdW5kLWNvbG9yIDAuMnM7XFxufVxcblxcbi8qIENoZWNrbWFyayAqL1xcbi5kb25lTGFiZWw+c3Bhbjo6YWZ0ZXIge1xcbiAgICBjb250ZW50OiBcXFwiXFxcIjtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgdG9wOiAzcHg7XFxuICAgIGxlZnQ6IDFweDtcXG4gICAgd2lkdGg6IDEwcHg7XFxuICAgIGhlaWdodDogNXB4O1xcbiAgICBib3JkZXI6IHNvbGlkIDJweCB0cmFuc3BhcmVudDtcXG4gICAgYm9yZGVyLXJpZ2h0OiBub25lO1xcbiAgICBib3JkZXItdG9wOiBub25lO1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgzcHgsIDRweCkgcm90YXRlKC00NWRlZyk7XFxufVxcblxcbi8qIENoZWNrZWQsIEluZGV0ZXJtaW5hdGUgKi9cXG4uZG9uZUxhYmVsPmlucHV0OmNoZWNrZWQsXFxuLmRvbmVMYWJlbD5pbnB1dDppbmRldGVybWluYXRlIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAxODc4NjtcXG59XFxuXFxuLmRvbmVMYWJlbD5pbnB1dDpjaGVja2VkK3NwYW46OmJlZm9yZSxcXG4uZG9uZUxhYmVsPmlucHV0OmluZGV0ZXJtaW5hdGUrc3Bhbjo6YmVmb3JlIHtcXG4gICAgYm9yZGVyLWNvbG9yOiAjMDE4Nzg2O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDE4Nzg2O1xcbn1cXG5cXG4uZG9uZUxhYmVsPmlucHV0OmNoZWNrZWQrc3Bhbjo6YWZ0ZXIsXFxuLmRvbmVMYWJlbD5pbnB1dDppbmRldGVybWluYXRlK3NwYW46OmFmdGVyIHtcXG4gICAgYm9yZGVyLWNvbG9yOiAjZmZmO1xcbn1cXG5cXG4uZG9uZUxhYmVsPmlucHV0OmluZGV0ZXJtaW5hdGUrc3Bhbjo6YWZ0ZXIge1xcbiAgICBib3JkZXItbGVmdDogbm9uZTtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoNHB4LCAzcHgpO1xcbn1cXG5cXG4vKiBIb3ZlciwgRm9jdXMgKi9cXG4uZG9uZUxhYmVsOmhvdmVyPmlucHV0IHtcXG4gICAgb3BhY2l0eTogMC4wNDtcXG59XFxuXFxuLmRvbmVMYWJlbD5pbnB1dDpmb2N1cyB7XFxuICAgIG9wYWNpdHk6IDAuMTI7XFxufVxcblxcbi5kb25lTGFiZWw6aG92ZXI+aW5wdXQ6Zm9jdXMge1xcbiAgICBvcGFjaXR5OiAwLjE2O1xcbn1cXG5cXG4vKiBBY3RpdmUgKi9cXG4uZG9uZUxhYmVsPmlucHV0OmFjdGl2ZSB7XFxuICAgIG9wYWNpdHk6IDE7XFxuICAgIHRyYW5zZm9ybTogc2NhbGUoMCk7XFxuICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwcywgb3BhY2l0eSAwcztcXG59XFxuXFxuLmRvbmVMYWJlbD5pbnB1dDphY3RpdmUrc3Bhbjo6YmVmb3JlIHtcXG4gICAgYm9yZGVyLWNvbG9yOiAjODViOGI3O1xcbn1cXG5cXG4uZG9uZUxhYmVsPmlucHV0OmNoZWNrZWQ6YWN0aXZlK3NwYW46OmJlZm9yZSB7XFxuICAgIGJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC42KTtcXG59XFxuXFxuLyogRGlzYWJsZWQgKi9cXG4uZG9uZUxhYmVsPmlucHV0OmRpc2FibGVkIHtcXG4gICAgb3BhY2l0eTogMDtcXG59XFxuXFxuLmRvbmVMYWJlbD5pbnB1dDpkaXNhYmxlZCtzcGFuIHtcXG4gICAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4zOCk7XFxuICAgIGN1cnNvcjogaW5pdGlhbDtcXG59XFxuXFxuLmRvbmVMYWJlbD5pbnB1dDpkaXNhYmxlZCtzcGFuOjpiZWZvcmUge1xcbiAgICBib3JkZXItY29sb3I6IGN1cnJlbnRDb2xvcjtcXG59XFxuXFxuLmRvbmVMYWJlbD5pbnB1dDpjaGVja2VkOmRpc2FibGVkK3NwYW46OmJlZm9yZSxcXG4uZG9uZUxhYmVsPmlucHV0OmluZGV0ZXJtaW5hdGU6ZGlzYWJsZWQrc3Bhbjo6YmVmb3JlIHtcXG4gICAgYm9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogY3VycmVudENvbG9yO1xcbn1cXG5cXG4udGFza0JhciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuXFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcblxcbiAgICBoZWlnaHQ6IDNyZW07XFxuICAgIHdpZHRoOiAxMDAlO1xcblxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTBkYmQ4O1xcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbn1cXG5cXG4ubG93QmFyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzcxZmY5NDtcXG4gICAgd2lkdGg6IC40cmVtO1xcbiAgICBoZWlnaHQ6IDNyZW07XFxuICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDEwcHg7XFxuICAgIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDEwcHg7XFxufVxcblxcbi5tZWRpdW1CYXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZkOTAwO1xcbiAgICB3aWR0aDogLjRyZW07XFxuICAgIGhlaWdodDogM3JlbTtcXG4gICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMTBweDtcXG4gICAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMTBweDtcXG59XFxuXFxuLmhpZ2hCYXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmY2NDY0O1xcbiAgICB3aWR0aDogLjRyZW07XFxuICAgIGhlaWdodDogM3JlbTtcXG4gICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMTBweDtcXG4gICAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMTBweDtcXG59XFxuXFxuLnRhc2tiYXJEdWUge1xcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcXG59XFxuXFxuLmRlc2NXaW5kb3cge1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICM5MDkwOTA7XFxuICAgIGhlaWdodDogOHJlbTtcXG4gICAgd2lkdGg6IDEwMCU7XFxufVxcblxcbi5maW5pc2hlZCB7XFxuICAgIG9wYWNpdHk6IC40O1xcbn1cXG5cXG4uc3RyaWtlIHtcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBsaW5lLXRocm91Z2g7XFxufVxcblxcbi5wcm9qZWN0VGFiIHtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4vKiBnZW9sb2dpY2EtMjAwIC0gbGF0aW4gKi9cXG5AZm9udC1mYWNlIHtcXG4gICAgZm9udC1kaXNwbGF5OiBzd2FwO1xcbiAgICAvKiBDaGVjayBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9DU1MvQGZvbnQtZmFjZS9mb250LWRpc3BsYXkgZm9yIG90aGVyIG9wdGlvbnMuICovXFxuICAgIGZvbnQtZmFtaWx5OiAnR2VvbG9naWNhMjAwJztcXG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xcbiAgICBmb250LXdlaWdodDogMjAwO1xcbiAgICBzcmM6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzZfX18gKyBcIikgZm9ybWF0KCd3b2ZmMicpO1xcbiAgICAvKiBDaHJvbWUgMzYrLCBPcGVyYSAyMyssIEZpcmVmb3ggMzkrLCBTYWZhcmkgMTIrLCBpT1MgMTArICovXFxufVxcblxcbi8qIGdlb2xvZ2ljYS1yZWd1bGFyIC0gbGF0aW4gKi9cXG5AZm9udC1mYWNlIHtcXG4gICAgZm9udC1kaXNwbGF5OiBzd2FwO1xcbiAgICAvKiBDaGVjayBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9DU1MvQGZvbnQtZmFjZS9mb250LWRpc3BsYXkgZm9yIG90aGVyIG9wdGlvbnMuICovXFxuICAgIGZvbnQtZmFtaWx5OiAnR2VvbG9naWNhJztcXG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xcbiAgICBmb250LXdlaWdodDogNDAwO1xcbiAgICBzcmM6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzdfX18gKyBcIikgZm9ybWF0KCd3b2ZmMicpO1xcbiAgICAvKiBDaHJvbWUgMzYrLCBPcGVyYSAyMyssIEZpcmVmb3ggMzkrLCBTYWZhcmkgMTIrLCBpT1MgMTArICovXFxufVxcblxcbi8qIGdlb2xvZ2ljYS03MDAgLSBsYXRpbiAqL1xcbkBmb250LWZhY2Uge1xcbiAgICBmb250LWRpc3BsYXk6IHN3YXA7XFxuICAgIC8qIENoZWNrIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0NTUy9AZm9udC1mYWNlL2ZvbnQtZGlzcGxheSBmb3Igb3RoZXIgb3B0aW9ucy4gKi9cXG4gICAgZm9udC1mYW1pbHk6ICdHZW9sb2dpY2E3MDAnO1xcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XFxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XFxuICAgIHNyYzogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfOF9fXyArIFwiKSBmb3JtYXQoJ3dvZmYyJyk7XFxuICAgIC8qIENocm9tZSAzNissIE9wZXJhIDIzKywgRmlyZWZveCAzOSssIFNhZmFyaSAxMissIGlPUyAxMCsgKi9cXG59XFxuXFxuLypBZXN0aGV0aWMgQ1NTKi9cXG4udGl0bGVUZXh0IHtcXG4gICAgZm9udC1mYW1pbHk6ICdHZW9sb2dpY2E3MDAnLCBzYW5zLXNlcmlmO1xcbiAgICBmb250LXNpemU6IDNyZW07XFxuICAgIGNvbG9yOiAjRkFGQUZBO1xcbn1cXG5cXG4vKkJ1dHRvbiBTdHlsZSBQcmVzZXQqL1xcblxcbi8qIENTUyAqL1xcbi5idXR0b24tMTYge1xcbiAgICBtYXJnaW4tdG9wOiAxcmVtO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjYzJmZjkwO1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZjhmOWZhO1xcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XFxuICAgIGNvbG9yOiAjNzA3MDcwO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIGZvbnQtZmFtaWx5OiAnR2VvbG9naWNhJywgc2Fucy1zZXJpZjtcXG4gICAgZm9udC1zaXplOiAxNHB4O1xcbiAgICBoZWlnaHQ6IDM2cHg7XFxuICAgIGxpbmUtaGVpZ2h0OiAyN3B4O1xcbiAgICBtaW4td2lkdGg6IDU0cHg7XFxuICAgIHBhZGRpbmc6IDAgMTZweDtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICB1c2VyLXNlbGVjdDogbm9uZTtcXG4gICAgLXdlYmtpdC11c2VyLXNlbGVjdDogbm9uZTtcXG4gICAgdG91Y2gtYWN0aW9uOiBtYW5pcHVsYXRpb247XFxuICAgIHdoaXRlLXNwYWNlOiBwcmU7XFxufVxcblxcbi5idXR0b24tMTY6aG92ZXIge1xcbiAgICBib3JkZXItY29sb3I6ICNkYWRjZTA7XFxuICAgIGJveC1zaGFkb3c6IHJnYmEoMCwgMCwgMCwgLjEpIDAgMXB4IDFweDtcXG4gICAgY29sb3I6ICMyMDIxMjQ7XFxufVxcblxcbi5idXR0b24tMTY6Zm9jdXMge1xcbiAgICBib3JkZXItY29sb3I6ICM0Mjg1ZjQ7XFxuICAgIG91dGxpbmU6IG5vbmU7XFxufVxcblxcbi5wcmlvcml0eURpdntcXG4gICAgbWFyZ2luLXRvcDogLjVyZW07XFxufVxcblxcbmlucHV0W3R5cGU9XFxcInJhZGlvXFxcIl0ge1xcbiAgICBhcHBlYXJhbmNlOiBub25lO1xcbiAgICBtYXJnaW46IDBweDtcXG4gICAgXFxufVxcblxcbmxhYmVse1xcbiAgICBmb250LWZhbWlseTogJ0dlb2xvZ2ljYTIwMCcsIHNhbnMtc2VyaWY7XFxuICAgIGZvbnQtc2l6ZTogMXJlbTtcXG59XFxuXFxubGFiZWxbZm9yPVxcXCJsb3dcXFwiXSB7XFxuICAgIHBhZGRpbmc6IDJweCA2cHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigxNjUsIDI1NSwgMTQyKTtcXG4gICAgYm9yZGVyLXJhZGl1czogMTIlO1xcbiAgICBtYXJnaW4tcmlnaHQ6IDFyZW07XFxufVxcblxcbmxhYmVsW2Zvcj1cXFwibWVkaXVtXFxcIl0ge1xcbiAgICBwYWRkaW5nOiAycHggNnB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjU1LCAyNDMsIDY5KTtcXG4gICAgYm9yZGVyLXJhZGl1czogMTIlO1xcbiAgICBtYXJnaW4tcmlnaHQ6IDFyZW07XFxufVxcblxcbmxhYmVsW2Zvcj1cXFwiaGlnaFxcXCJdIHtcXG4gICAgcGFkZGluZzogMnB4IDZweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI1NSwgMTA1LCA5NSk7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEyJTtcXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtJQUNJLFNBQVM7SUFDVCxvQ0FBb0M7SUFDcEMsaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLGFBQWE7SUFDYixZQUFZO0lBQ1osaUJBQWlCO0lBQ2pCLGdCQUFnQjs7SUFFaEIsaUNBQWlDO0lBQ2pDLDZCQUE2QjtJQUM3QixjQUFjO0lBQ2Q7O3NCQUVrQjtBQUN0Qjs7QUFFQTtJQUNJLHlCQUF5QjtJQUN6QixpQkFBaUI7O0lBRWpCLGFBQWE7SUFDYixtQkFBbUI7O0lBRW5CLG1CQUFtQjs7QUFFdkI7O0FBRUE7SUFDSSx5QkFBeUI7SUFDekIsYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSx5QkFBeUI7SUFDekIsa0JBQWtCO0lBQ2xCLG1CQUFtQjtJQUNuQixvQkFBb0I7SUFDcEIscUJBQXFCO0FBQ3pCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLDJCQUEyQjtJQUMzQixtQkFBbUI7SUFDbkIsdUJBQXVCO0lBQ3ZCLGVBQWU7QUFD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O0FBQ3RCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcImJvZHkge1xcbiAgICBtYXJnaW46IDA7XFxuICAgIGZvbnQtZmFtaWx5OiAnR2VvbG9naWNhJywgc2Fucy1zZXJpZjtcXG4gICAgZm9udC1zaXplOiAwLjlyZW07XFxufVxcblxcbiNjb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBoZWlnaHQ6IDEwMHZoO1xcbiAgICB3aWR0aDogMTAwdnc7XFxuICAgIG1heC1oZWlnaHQ6IDEwMHZoO1xcbiAgICBtYXgtd2lkdGg6IDEwMHZ3O1xcblxcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDEwcmVtIGF1dG87XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogNnJlbSBhdXRvO1xcbiAgICBvdmVyZmxvdzogYXV0bztcXG4gICAgZ3JpZC10ZW1wbGF0ZS1hcmVhczpcXG4gICAgICAgIFxcXCJiYW5uZXIgYmFubmVyXFxcIlxcbiAgICAgICAgXFxcIm1lbnUgY29udGVudFxcXCI7XFxufVxcblxcbi5iYW5uZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjOTA5MDkwO1xcbiAgICBncmlkLWFyZWE6IGJhbm5lcjtcXG5cXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcXG5cXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG5cXG59XFxuXFxuLm1lbnUge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjYjdlZTdkO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBwYWRkaW5nLXRvcDogLjhyZW07XFxufVxcblxcbi5wcm9qZWN0cyB7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuLmNvbnRlbnQge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkFGQUZBO1xcbiAgICBncmlkLWFyZWE6IGNvbnRlbnQ7XFxuICAgIHBhZGRpbmctdG9wOiAyLjVyZW07XFxuICAgIHBhZGRpbmctbGVmdDogMi41cmVtO1xcbiAgICBwYWRkaW5nLXJpZ2h0OiAyLjVyZW07XFxufVxcblxcbi50YWIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93LXJldmVyc2U7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5tYXRlcmlhbC1zeW1ib2xzLW91dGxpbmVkIHtcXG4gICAgZm9udC12YXJpYXRpb24tc2V0dGluZ3M6XFxuICAgICAgICAnRklMTCcgMSxcXG4gICAgICAgICd3Z2h0JyAyMDAsXFxuICAgICAgICAnR1JBRCcgMCxcXG4gICAgICAgICdvcHN6JyA0OFxcbn1cXG5cXG4uY29udGVudEhlYWRlckJhciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyNDEsIDI1NSwgMjM3KTtcXG4gICAgbWFyZ2luOiAwIGF1dG87XFxuICAgIHdpZHRoOiA0MjBweDtcXG4gICAgaGVpZ2h0OiAycmVtO1xcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxuICAgIC8qQWRkIGZvbnQgc3R5bGUgaGVyZSovXFxufVxcblxcbiN0YXNrIHtcXG4gICAgYmFja2dyb3VuZDogdXJsKC4vaW1hZ2VzL3Rhc2suc3ZnKSBuby1yZXBlYXQgY2VudGVyIGNlbnRlcjtcXG4gICAgbWFyZ2luOiAwcHg7XFxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxuICAgIHdpZHRoOiAxcmVtO1xcbiAgICBoZWlnaHQ6IDFyZW07XFxufVxcblxcbiNhZGRQcm9qZWN0IHtcXG4gICAgYmFja2dyb3VuZDogdXJsKC4vaW1hZ2VzL2FkZC5zdmcpIG5vLXJlcGVhdCBjZW50ZXIgY2VudGVyO1xcbiAgICBtYXJnaW46IDBweDtcXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXG4gICAgd2lkdGg6IDFyZW07XFxuICAgIGhlaWdodDogMXJlbTtcXG59XFxuXFxuI3RpdGxlIHtcXG4gICAgYmFja2dyb3VuZDogdXJsKC4vaW1hZ2VzL2Jhbm5lci5zdmcpIG5vLXJlcGVhdCBjZW50ZXIgY2VudGVyO1xcbiAgICBtYXJnaW46IDBweDtcXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXG4gICAgd2lkdGg6IDRyZW07XFxuICAgIGhlaWdodDogNHJlbTtcXG59XFxuXFxuLmFkZEljb24ge1xcbiAgICBiYWNrZ3JvdW5kOiB1cmwoLi9pbWFnZXMvYWRkdGFzay5zdmcpIG5vLXJlcGVhdCBjZW50ZXIgY2VudGVyO1xcbiAgICBtYXJnaW46IDBweDtcXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXG4gICAgd2lkdGg6IDFyZW07XFxuICAgIGhlaWdodDogMXJlbTtcXG59XFxuXFxuLmFkZCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICAgIGp1c3RpZnktY29udGVudDogc3RhcnQ7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuI2Nsb3NlVGFza1dpbmRvdyB7XFxuICAgIGJhY2tncm91bmQ6IHVybCguL2ltYWdlcy9jbG9zZS5zdmcpIG5vLXJlcGVhdCBjZW50ZXIgY2VudGVyO1xcbiAgICBtYXJnaW46IDBweDtcXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXG4gICAgd2lkdGg6IDEuMnJlbTtcXG4gICAgaGVpZ2h0OiAxLjJyZW07XFxuICAgIGFsaWduLXNlbGY6IGZsZXgtZW5kO1xcbiAgICBib3JkZXItc3R5bGU6IG5vbmU7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLnRhc2tiYXJEZWxldGUge1xcbiAgICBiYWNrZ3JvdW5kOiB1cmwoLi9pbWFnZXMvZGVsZXRlLnN2Zykgbm8tcmVwZWF0IGNlbnRlciBjZW50ZXI7XFxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxuICAgIG1hcmdpbjogMHB4O1xcbiAgICB3aWR0aDogMXJlbTtcXG4gICAgaGVpZ2h0OiAxcmVtO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi50YXNrV2luZG93IHtcXG4gICAgcG9zaXRpb246IGZpeGVkO1xcbiAgICB6LWluZGV4OiAxO1xcbiAgICBsZWZ0OiAwO1xcbiAgICB0b3A6IDA7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIG92ZXJmbG93OiBhdXRvO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNCk7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIHBhZGRpbmctdG9wOiAxMHJlbTtcXG59XFxuXFxuLnRhc2tXaW5kb3dDb250ZW50IHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI1NSwgMjQ5LCAyNTMpO1xcbiAgICBtYXJnaW46IDEwJSBhdXRvO1xcbiAgICBtYXJnaW4tdG9wOiAwJTtcXG4gICAgcGFkZGluZzogMjBweDtcXG4gICAgYm9yZGVyLXN0eWxlOiBub25lO1xcbiAgICB3aWR0aDogMzgwcHg7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkZXI7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi50YXNrQ29udGVudFRpdGxle1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgYm9yZGVyOiBub25lO1xcbn1cXG5cXG4udGFza0NvbnRlbnREZXNje1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICByZXNpemU6IG5vbmU7XFxufVxcblxcbi5zaG93IHtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxufVxcblxcbi5zaG93RmxleCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxufVxcblxcbi5kb25lTGFiZWwge1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG59XFxuXFxuLyogSW5wdXQgKi9cXG4uZG9uZUxhYmVsPmlucHV0IHtcXG4gICAgYXBwZWFyYW5jZTogbm9uZTtcXG4gICAgLW1vei1hcHBlYXJhbmNlOiBub25lO1xcbiAgICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XFxuICAgIHotaW5kZXg6IC0xO1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIGxlZnQ6IC0xMHB4O1xcbiAgICB0b3A6IC04cHg7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICBtYXJnaW46IDA7XFxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcXG4gICAgd2lkdGg6IDQwcHg7XFxuICAgIGhlaWdodDogNDBweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjYpO1xcbiAgICBib3gtc2hhZG93OiBub25lO1xcbiAgICBvdXRsaW5lOiBub25lO1xcbiAgICBvcGFjaXR5OiAwO1xcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xcbiAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcXG4gICAgdHJhbnNpdGlvbjogb3BhY2l0eSAwLjNzLCB0cmFuc2Zvcm0gMC4ycztcXG59XFxuXFxuLyogU3BhbiAqL1xcbi5kb25lTGFiZWw+c3BhbiB7XFxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLyogQm94ICovXFxuLmRvbmVMYWJlbD5zcGFuOjpiZWZvcmUge1xcbiAgICBjb250ZW50OiBcXFwiXFxcIjtcXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgICBtYXJnaW46IDNweCAxMXB4IDNweCAxcHg7XFxuICAgIGJvcmRlcjogc29saWQgMnB4O1xcbiAgICAvKiBTYWZhcmkgKi9cXG4gICAgYm9yZGVyLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNik7XFxuICAgIGJvcmRlci1yYWRpdXM6IDJweDtcXG4gICAgd2lkdGg6IDE4cHg7XFxuICAgIGhlaWdodDogMThweDtcXG4gICAgdmVydGljYWwtYWxpZ246IHRvcDtcXG4gICAgdHJhbnNpdGlvbjogYm9yZGVyLWNvbG9yIDAuMnMsIGJhY2tncm91bmQtY29sb3IgMC4ycztcXG59XFxuXFxuLyogQ2hlY2ttYXJrICovXFxuLmRvbmVMYWJlbD5zcGFuOjphZnRlciB7XFxuICAgIGNvbnRlbnQ6IFxcXCJcXFwiO1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB0b3A6IDNweDtcXG4gICAgbGVmdDogMXB4O1xcbiAgICB3aWR0aDogMTBweDtcXG4gICAgaGVpZ2h0OiA1cHg7XFxuICAgIGJvcmRlcjogc29saWQgMnB4IHRyYW5zcGFyZW50O1xcbiAgICBib3JkZXItcmlnaHQ6IG5vbmU7XFxuICAgIGJvcmRlci10b3A6IG5vbmU7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDNweCwgNHB4KSByb3RhdGUoLTQ1ZGVnKTtcXG59XFxuXFxuLyogQ2hlY2tlZCwgSW5kZXRlcm1pbmF0ZSAqL1xcbi5kb25lTGFiZWw+aW5wdXQ6Y2hlY2tlZCxcXG4uZG9uZUxhYmVsPmlucHV0OmluZGV0ZXJtaW5hdGUge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDE4Nzg2O1xcbn1cXG5cXG4uZG9uZUxhYmVsPmlucHV0OmNoZWNrZWQrc3Bhbjo6YmVmb3JlLFxcbi5kb25lTGFiZWw+aW5wdXQ6aW5kZXRlcm1pbmF0ZStzcGFuOjpiZWZvcmUge1xcbiAgICBib3JkZXItY29sb3I6ICMwMTg3ODY7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMTg3ODY7XFxufVxcblxcbi5kb25lTGFiZWw+aW5wdXQ6Y2hlY2tlZCtzcGFuOjphZnRlcixcXG4uZG9uZUxhYmVsPmlucHV0OmluZGV0ZXJtaW5hdGUrc3Bhbjo6YWZ0ZXIge1xcbiAgICBib3JkZXItY29sb3I6ICNmZmY7XFxufVxcblxcbi5kb25lTGFiZWw+aW5wdXQ6aW5kZXRlcm1pbmF0ZStzcGFuOjphZnRlciB7XFxuICAgIGJvcmRlci1sZWZ0OiBub25lO1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSg0cHgsIDNweCk7XFxufVxcblxcbi8qIEhvdmVyLCBGb2N1cyAqL1xcbi5kb25lTGFiZWw6aG92ZXI+aW5wdXQge1xcbiAgICBvcGFjaXR5OiAwLjA0O1xcbn1cXG5cXG4uZG9uZUxhYmVsPmlucHV0OmZvY3VzIHtcXG4gICAgb3BhY2l0eTogMC4xMjtcXG59XFxuXFxuLmRvbmVMYWJlbDpob3Zlcj5pbnB1dDpmb2N1cyB7XFxuICAgIG9wYWNpdHk6IDAuMTY7XFxufVxcblxcbi8qIEFjdGl2ZSAqL1xcbi5kb25lTGFiZWw+aW5wdXQ6YWN0aXZlIHtcXG4gICAgb3BhY2l0eTogMTtcXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgwKTtcXG4gICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDBzLCBvcGFjaXR5IDBzO1xcbn1cXG5cXG4uZG9uZUxhYmVsPmlucHV0OmFjdGl2ZStzcGFuOjpiZWZvcmUge1xcbiAgICBib3JkZXItY29sb3I6ICM4NWI4Yjc7XFxufVxcblxcbi5kb25lTGFiZWw+aW5wdXQ6Y2hlY2tlZDphY3RpdmUrc3Bhbjo6YmVmb3JlIHtcXG4gICAgYm9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjYpO1xcbn1cXG5cXG4vKiBEaXNhYmxlZCAqL1xcbi5kb25lTGFiZWw+aW5wdXQ6ZGlzYWJsZWQge1xcbiAgICBvcGFjaXR5OiAwO1xcbn1cXG5cXG4uZG9uZUxhYmVsPmlucHV0OmRpc2FibGVkK3NwYW4ge1xcbiAgICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjM4KTtcXG4gICAgY3Vyc29yOiBpbml0aWFsO1xcbn1cXG5cXG4uZG9uZUxhYmVsPmlucHV0OmRpc2FibGVkK3NwYW46OmJlZm9yZSB7XFxuICAgIGJvcmRlci1jb2xvcjogY3VycmVudENvbG9yO1xcbn1cXG5cXG4uZG9uZUxhYmVsPmlucHV0OmNoZWNrZWQ6ZGlzYWJsZWQrc3Bhbjo6YmVmb3JlLFxcbi5kb25lTGFiZWw+aW5wdXQ6aW5kZXRlcm1pbmF0ZTpkaXNhYmxlZCtzcGFuOjpiZWZvcmUge1xcbiAgICBib3JkZXItY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBjdXJyZW50Q29sb3I7XFxufVxcblxcbi50YXNrQmFyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcXG5cXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuXFxuICAgIGhlaWdodDogM3JlbTtcXG4gICAgd2lkdGg6IDEwMCU7XFxuXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNlMGRiZDg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxufVxcblxcbi5sb3dCYXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNzFmZjk0O1xcbiAgICB3aWR0aDogLjRyZW07XFxuICAgIGhlaWdodDogM3JlbTtcXG4gICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMTBweDtcXG4gICAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMTBweDtcXG59XFxuXFxuLm1lZGl1bUJhciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmQ5MDA7XFxuICAgIHdpZHRoOiAuNHJlbTtcXG4gICAgaGVpZ2h0OiAzcmVtO1xcbiAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAxMHB4O1xcbiAgICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAxMHB4O1xcbn1cXG5cXG4uaGlnaEJhciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZjY0NjQ7XFxuICAgIHdpZHRoOiAuNHJlbTtcXG4gICAgaGVpZ2h0OiAzcmVtO1xcbiAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAxMHB4O1xcbiAgICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAxMHB4O1xcbn1cXG5cXG4udGFza2JhckR1ZSB7XFxuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xcbn1cXG5cXG4uZGVzY1dpbmRvdyB7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzkwOTA5MDtcXG4gICAgaGVpZ2h0OiA4cmVtO1xcbiAgICB3aWR0aDogMTAwJTtcXG59XFxuXFxuLmZpbmlzaGVkIHtcXG4gICAgb3BhY2l0eTogLjQ7XFxufVxcblxcbi5zdHJpa2Uge1xcbiAgICB0ZXh0LWRlY29yYXRpb246IGxpbmUtdGhyb3VnaDtcXG59XFxuXFxuLnByb2plY3RUYWIge1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi8qIGdlb2xvZ2ljYS0yMDAgLSBsYXRpbiAqL1xcbkBmb250LWZhY2Uge1xcbiAgICBmb250LWRpc3BsYXk6IHN3YXA7XFxuICAgIC8qIENoZWNrIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0NTUy9AZm9udC1mYWNlL2ZvbnQtZGlzcGxheSBmb3Igb3RoZXIgb3B0aW9ucy4gKi9cXG4gICAgZm9udC1mYW1pbHk6ICdHZW9sb2dpY2EyMDAnO1xcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XFxuICAgIGZvbnQtd2VpZ2h0OiAyMDA7XFxuICAgIHNyYzogdXJsKCcuL2ZvbnRzL2dlb2xvZ2ljYS12MS1sYXRpbi0yMDAud29mZjInKSBmb3JtYXQoJ3dvZmYyJyk7XFxuICAgIC8qIENocm9tZSAzNissIE9wZXJhIDIzKywgRmlyZWZveCAzOSssIFNhZmFyaSAxMissIGlPUyAxMCsgKi9cXG59XFxuXFxuLyogZ2VvbG9naWNhLXJlZ3VsYXIgLSBsYXRpbiAqL1xcbkBmb250LWZhY2Uge1xcbiAgICBmb250LWRpc3BsYXk6IHN3YXA7XFxuICAgIC8qIENoZWNrIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0NTUy9AZm9udC1mYWNlL2ZvbnQtZGlzcGxheSBmb3Igb3RoZXIgb3B0aW9ucy4gKi9cXG4gICAgZm9udC1mYW1pbHk6ICdHZW9sb2dpY2EnO1xcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XFxuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XFxuICAgIHNyYzogdXJsKCcuL2ZvbnRzL2dlb2xvZ2ljYS12MS1sYXRpbi1yZWd1bGFyLndvZmYyJykgZm9ybWF0KCd3b2ZmMicpO1xcbiAgICAvKiBDaHJvbWUgMzYrLCBPcGVyYSAyMyssIEZpcmVmb3ggMzkrLCBTYWZhcmkgMTIrLCBpT1MgMTArICovXFxufVxcblxcbi8qIGdlb2xvZ2ljYS03MDAgLSBsYXRpbiAqL1xcbkBmb250LWZhY2Uge1xcbiAgICBmb250LWRpc3BsYXk6IHN3YXA7XFxuICAgIC8qIENoZWNrIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0NTUy9AZm9udC1mYWNlL2ZvbnQtZGlzcGxheSBmb3Igb3RoZXIgb3B0aW9ucy4gKi9cXG4gICAgZm9udC1mYW1pbHk6ICdHZW9sb2dpY2E3MDAnO1xcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XFxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XFxuICAgIHNyYzogdXJsKCcuL2ZvbnRzL2dlb2xvZ2ljYS12MS1sYXRpbi03MDAud29mZjInKSBmb3JtYXQoJ3dvZmYyJyk7XFxuICAgIC8qIENocm9tZSAzNissIE9wZXJhIDIzKywgRmlyZWZveCAzOSssIFNhZmFyaSAxMissIGlPUyAxMCsgKi9cXG59XFxuXFxuLypBZXN0aGV0aWMgQ1NTKi9cXG4udGl0bGVUZXh0IHtcXG4gICAgZm9udC1mYW1pbHk6ICdHZW9sb2dpY2E3MDAnLCBzYW5zLXNlcmlmO1xcbiAgICBmb250LXNpemU6IDNyZW07XFxuICAgIGNvbG9yOiAjRkFGQUZBO1xcbn1cXG5cXG4vKkJ1dHRvbiBTdHlsZSBQcmVzZXQqL1xcblxcbi8qIENTUyAqL1xcbi5idXR0b24tMTYge1xcbiAgICBtYXJnaW4tdG9wOiAxcmVtO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjYzJmZjkwO1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZjhmOWZhO1xcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XFxuICAgIGNvbG9yOiAjNzA3MDcwO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIGZvbnQtZmFtaWx5OiAnR2VvbG9naWNhJywgc2Fucy1zZXJpZjtcXG4gICAgZm9udC1zaXplOiAxNHB4O1xcbiAgICBoZWlnaHQ6IDM2cHg7XFxuICAgIGxpbmUtaGVpZ2h0OiAyN3B4O1xcbiAgICBtaW4td2lkdGg6IDU0cHg7XFxuICAgIHBhZGRpbmc6IDAgMTZweDtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICB1c2VyLXNlbGVjdDogbm9uZTtcXG4gICAgLXdlYmtpdC11c2VyLXNlbGVjdDogbm9uZTtcXG4gICAgdG91Y2gtYWN0aW9uOiBtYW5pcHVsYXRpb247XFxuICAgIHdoaXRlLXNwYWNlOiBwcmU7XFxufVxcblxcbi5idXR0b24tMTY6aG92ZXIge1xcbiAgICBib3JkZXItY29sb3I6ICNkYWRjZTA7XFxuICAgIGJveC1zaGFkb3c6IHJnYmEoMCwgMCwgMCwgLjEpIDAgMXB4IDFweDtcXG4gICAgY29sb3I6ICMyMDIxMjQ7XFxufVxcblxcbi5idXR0b24tMTY6Zm9jdXMge1xcbiAgICBib3JkZXItY29sb3I6ICM0Mjg1ZjQ7XFxuICAgIG91dGxpbmU6IG5vbmU7XFxufVxcblxcbi5wcmlvcml0eURpdntcXG4gICAgbWFyZ2luLXRvcDogLjVyZW07XFxufVxcblxcbmlucHV0W3R5cGU9XFxcInJhZGlvXFxcIl0ge1xcbiAgICBhcHBlYXJhbmNlOiBub25lO1xcbiAgICBtYXJnaW46IDBweDtcXG4gICAgXFxufVxcblxcbmxhYmVse1xcbiAgICBmb250LWZhbWlseTogJ0dlb2xvZ2ljYTIwMCcsIHNhbnMtc2VyaWY7XFxuICAgIGZvbnQtc2l6ZTogMXJlbTtcXG59XFxuXFxubGFiZWxbZm9yPVxcXCJsb3dcXFwiXSB7XFxuICAgIHBhZGRpbmc6IDJweCA2cHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigxNjUsIDI1NSwgMTQyKTtcXG4gICAgYm9yZGVyLXJhZGl1czogMTIlO1xcbiAgICBtYXJnaW4tcmlnaHQ6IDFyZW07XFxufVxcblxcbmxhYmVsW2Zvcj1cXFwibWVkaXVtXFxcIl0ge1xcbiAgICBwYWRkaW5nOiAycHggNnB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjU1LCAyNDMsIDY5KTtcXG4gICAgYm9yZGVyLXJhZGl1czogMTIlO1xcbiAgICBtYXJnaW4tcmlnaHQ6IDFyZW07XFxufVxcblxcbmxhYmVsW2Zvcj1cXFwiaGlnaFxcXCJdIHtcXG4gICAgcGFkZGluZzogMnB4IDZweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI1NSwgMTA1LCA5NSk7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEyJTtcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVybCwgb3B0aW9ucykge1xuICBpZiAoIW9wdGlvbnMpIHtcbiAgICBvcHRpb25zID0ge307XG4gIH1cbiAgaWYgKCF1cmwpIHtcbiAgICByZXR1cm4gdXJsO1xuICB9XG4gIHVybCA9IFN0cmluZyh1cmwuX19lc01vZHVsZSA/IHVybC5kZWZhdWx0IDogdXJsKTtcblxuICAvLyBJZiB1cmwgaXMgYWxyZWFkeSB3cmFwcGVkIGluIHF1b3RlcywgcmVtb3ZlIHRoZW1cbiAgaWYgKC9eWydcIl0uKlsnXCJdJC8udGVzdCh1cmwpKSB7XG4gICAgdXJsID0gdXJsLnNsaWNlKDEsIC0xKTtcbiAgfVxuICBpZiAob3B0aW9ucy5oYXNoKSB7XG4gICAgdXJsICs9IG9wdGlvbnMuaGFzaDtcbiAgfVxuXG4gIC8vIFNob3VsZCB1cmwgYmUgd3JhcHBlZD9cbiAgLy8gU2VlIGh0dHBzOi8vZHJhZnRzLmNzc3dnLm9yZy9jc3MtdmFsdWVzLTMvI3VybHNcbiAgaWYgKC9bXCInKCkgXFx0XFxuXXwoJTIwKS8udGVzdCh1cmwpIHx8IG9wdGlvbnMubmVlZFF1b3Rlcykge1xuICAgIHJldHVybiBcIlxcXCJcIi5jb25jYXQodXJsLnJlcGxhY2UoL1wiL2csICdcXFxcXCInKS5yZXBsYWNlKC9cXG4vZywgXCJcXFxcblwiKSwgXCJcXFwiXCIpO1xuICB9XG4gIHJldHVybiB1cmw7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjcmVhdGVCYXIodGl0bGUsIGRlc2MsIGR1ZSwgcHJpb3JpdHkpIHtcbiAgICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbnRlbnQnKTtcbiAgICBjb25zdCBjb250ZW50VGl0bGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29udGVudFRpdGxlJyk7XG4gICAgY29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ3Rhc2tCYXInKTtcblxuICAgIGNvbnN0IHByaW9yaXR5QmFyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgaWYgKHByaW9yaXR5ID09IFwibG93XCIpIHtcbiAgICAgICAgcHJpb3JpdHlCYXIuY2xhc3NMaXN0LmFkZCgnbG93QmFyJyk7XG4gICAgfVxuICAgIGVsc2UgaWYgKHByaW9yaXR5ID09IFwibWVkaXVtXCIpIHtcbiAgICAgICAgcHJpb3JpdHlCYXIuY2xhc3NMaXN0LmFkZCgnbWVkaXVtQmFyJyk7XG4gICAgfVxuICAgIGVsc2UgaWYgKHByaW9yaXR5ID09IFwiaGlnaFwiKSB7XG4gICAgICAgIHByaW9yaXR5QmFyLmNsYXNzTGlzdC5hZGQoJ2hpZ2hCYXInKTtcbiAgICB9XG4gICAgY29uc3QgZG9uZUxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcbiAgICBkb25lTGFiZWwuY2xhc3NMaXN0LmFkZCgnZG9uZUxhYmVsJyk7XG4gICAgY29uc3QgZG9uZUNoZWNrYm94ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICBkb25lQ2hlY2tib3guc2V0QXR0cmlidXRlKCd0eXBlJywgJ2NoZWNrYm94Jyk7XG4gICAgZG9uZUNoZWNrYm94LmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsICgpID0+IHtcbiAgICAgICAgaWYgKGRvbmVDaGVja2JveC5jaGVja2VkKSB7XG4gICAgICAgICAgICB0YXNrVGl0bGUuY2xhc3NMaXN0LmFkZCgnZmluaXNoZWQnKTtcbiAgICAgICAgICAgIHRhc2tUaXRsZS5jbGFzc0xpc3QuYWRkKCdzdHJpa2UnKTtcbiAgICAgICAgICAgIHRhc2tiYXJEdWUuY2xhc3NMaXN0LmFkZCgnZmluaXNoZWQnKTtcbiAgICAgICAgICAgIHRhc2tEZWxldGUuY2xhc3NMaXN0LmFkZCgnZmluaXNoZWQnKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHRhc2tUaXRsZS5jbGFzc0xpc3QucmVtb3ZlKCdmaW5pc2hlZCcpO1xuICAgICAgICAgICAgdGFza1RpdGxlLmNsYXNzTGlzdC5yZW1vdmUoJ3N0cmlrZScpO1xuICAgICAgICAgICAgdGFza2JhckR1ZS5jbGFzc0xpc3QucmVtb3ZlKCdmaW5pc2hlZCcpO1xuICAgICAgICAgICAgdGFza0RlbGV0ZS5jbGFzc0xpc3QucmVtb3ZlKCdmaW5pc2hlZCcpO1xuICAgICAgICB9XG4gICAgfSlcblxuICAgIGRvbmVMYWJlbC5hcHBlbmRDaGlsZChkb25lQ2hlY2tib3gpO1xuICAgIGRvbmVMYWJlbC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJykpO1xuXG4gICAgY29uc3QgdGFza1RpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDMnKTtcbiAgICB0YXNrVGl0bGUuaW5uZXJIVE1MID0gdGl0bGU7XG4gICAgdGFza1RpdGxlLmNsYXNzTGlzdC5hZGQoJ3Rhc2tiYXJUaXRsZScpO1xuXG4gICAgY29uc3QgdGFza2JhckR1ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHRhc2tiYXJEdWUuaW5uZXJIVE1MID0gZHVlO1xuICAgIHRhc2tiYXJEdWUuY2xhc3NMaXN0LmFkZCgndGFza2JhckR1ZScpO1xuXG4gICAgY29uc3QgdGFza0RlbGV0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHRhc2tEZWxldGUuY2xhc3NMaXN0LmFkZCgndGFza2JhckRlbGV0ZScpO1xuICAgIHRhc2tEZWxldGUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgIGlmIChjb250ZW50VGl0bGUuaW5uZXJIVE1MID09PSBcIlRhc2tzIFRvIERvXCIpe1xuICAgICAgICAgICAgY29uc3QgdGFza3MgPSBKU09OLnBhcnNlKHNlc3Npb25TdG9yYWdlLmdldEl0ZW0oXCJ0YXNrc0R1ZVwiKSk7XG4gICAgICAgICAgICBmb3IgKGNvbnN0IGkgaW4gdGFza3Mpe1xuICAgICAgICAgICAgICAgIGlmICh0YXNrc1tpXS50aXRsZSA9PT0gdGl0bGUpe1xuICAgICAgICAgICAgICAgICAgICB0YXNrcy5zcGxpY2UoaSwxKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgc2Vzc2lvblN0b3JhZ2Uuc2V0SXRlbShcInRhc2tzRHVlXCIsIEpTT04uc3RyaW5naWZ5KHRhc2tzKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZWxzZXtcbiAgICAgICAgICAgIGNvbnN0IHRhc2tzID0gSlNPTi5wYXJzZShzZXNzaW9uU3RvcmFnZS5nZXRJdGVtKGNvbnRlbnRUaXRsZS5pbm5lckhUTUwpKTtcbiAgICAgICAgICAgIGZvciAoY29uc3QgaSBpbiB0YXNrcyl7XG4gICAgICAgICAgICAgICAgaWYgKHRhc2tzW2ldLnRpdGxlID09PSB0aXRsZSl7XG4gICAgICAgICAgICAgICAgICAgIHRhc2tzLnNwbGljZShpLDEpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBzZXNzaW9uU3RvcmFnZS5zZXRJdGVtKGNvbnRlbnRUaXRsZS5pbm5lckhUTUwsIEpTT04uc3RyaW5naWZ5KHRhc2tzKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAvL0RFTEVURSBUQVNLIERBVEEgRlJPTSBBUlJBWSBJTiBTVE9SQUdFXG4gICAgICAgIGNvbnRlbnQucmVtb3ZlQ2hpbGQoY29udGFpbmVyKTtcbiAgICB9KVxuXG4gICAgY29udGFpbmVyLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICBpZiAoY29udGFpbmVyLmNsYXNzTGlzdC5jb250YWlucygnZXhwYW5kZWQnKSkge1xuICAgICAgICAgICAgLy9DbG9zZSBleHBhbmRlZCBkaXZcbiAgICAgICAgICAgIGNvbnRhaW5lci5jbGFzc0xpc3QucmVtb3ZlKCdleHBhbmRlZCcpO1xuICAgICAgICAgICAgY29udGVudC5yZW1vdmVDaGlsZChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZGVzY1dpbmRvdycpKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdleHBhbmRlZCcpO1xuICAgICAgICAgICAgY29uc3QgZGVzY1dpbmRvdyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgZGVzY1dpbmRvdy5jbGFzc0xpc3QuYWRkKCdkZXNjV2luZG93Jyk7XG4gICAgICAgICAgICBkZXNjV2luZG93LmlubmVySFRNTCA9IGRlc2M7XG5cbiAgICAgICAgICAgIGNvbnRhaW5lci5pbnNlcnRBZGphY2VudEVsZW1lbnQoJ2FmdGVyZW5kJywgZGVzY1dpbmRvdyk7XG4gICAgICAgIH1cbiAgICB9KVxuXG4gICAgLy9BcHBlbmRpbmcgdG8gQ29udGFpbmVyXG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKHByaW9yaXR5QmFyKTtcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoZG9uZUxhYmVsKTtcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQodGFza1RpdGxlKTtcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQodGFza2JhckR1ZSk7XG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKHRhc2tEZWxldGUpO1xuXG4gICAgcmV0dXJuIGNvbnRhaW5lcjtcbn0iLCIvL2ltcG9ydHNcbmltcG9ydCAnLi9zdHlsZS5jc3MnXG5pbXBvcnQgbG9hZE1lbnUgZnJvbSAnLi9sb2FkTWVudS5qcydcbmltcG9ydCBsb2FkQmFubmVyIGZyb20gJy4vbG9hZEJhbm5lcic7XG5pbXBvcnQgbG9hZENvbnRlbnQgZnJvbSAnLi9sb2FkQ29udGVudCc7XG5cbi8vZnVuY3Rpb25zXG5mdW5jdGlvbiBjcmVhdGVDb250YWluZXIoKSB7XG4gICAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29udGFpbmVyLnNldEF0dHJpYnV0ZSgnaWQnLCdjb250YWluZXInKTtcbiAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGNvbnRhaW5lcik7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUxheW91dChjb250YWluZXIpe1xuICAgIGxvYWRCYW5uZXIoY29udGFpbmVyKTtcbiAgICBsb2FkTWVudShjb250YWluZXIpO1xuICAgIGxvYWRDb250ZW50KGNvbnRhaW5lcik7XG5cbiAgICByZXR1cm4gY29udGFpbmVyO1xufVxuXG4vL0xvZ2ljIEFwcGxpY2F0aW9uXG5jcmVhdGVDb250YWluZXIoKTtcbmNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjb250YWluZXInKVxuXG5jcmVhdGVMYXlvdXQoY29udGFpbmVyKTsiLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBsb2FkQmFubmVyKGNvbnRhaW5lcil7XG4gICAgY29uc3QgYmFubmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgYmFubmVyLmNsYXNzTGlzdC5hZGQoJ2Jhbm5lcicpO1xuXG4gICAgY29uc3QgdGl0bGVJY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgdGl0bGVJY29uLmNsYXNzTGlzdC5hZGQoJ2ljb24nKTtcbiAgICB0aXRsZUljb24uc2V0QXR0cmlidXRlKCdpZCcsJ3RpdGxlJyk7XG5cbiAgICBiYW5uZXIuYXBwZW5kQ2hpbGQodGl0bGVJY29uKTtcblxuICAgIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cbiAgICB0aXRsZS5pbm5lckhUTUwgPSBcIlRvZG8gTGlzdFwiXG4gICAgdGl0bGUuY2xhc3NMaXN0LmFkZCgndGl0bGVUZXh0Jyk7XG5cbiAgICBiYW5uZXIuYXBwZW5kQ2hpbGQodGl0bGUpO1xuXG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGJhbm5lcik7XG4gICAgcmV0dXJuIGNvbnRhaW5lcjtcbn0iLCJpbXBvcnQge2Zvcm1hdCwgY29tcGFyZUFzY30gZnJvbSAnZGF0ZS1mbnMnO1xuaW1wb3J0IGNyZWF0ZUJhciBmcm9tICcuL2NyZWF0ZUJhcic7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGxvYWRDb250ZW50KGNvbnRhaW5lcil7XG4gICAgLy9DcmVhdGUgY29udGVudCBjb250YWluZXJcbiAgICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29udGVudC5jbGFzc0xpc3QuYWRkKCdjb250ZW50JylcblxuICAgIC8vQ29udGVudCBIZWFkZXJcbiAgICBjb25zdCBjb250ZW50VGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb250ZW50VGl0bGUuaW5uZXJIVE1MID0gXCJUYXNrcyBUbyBEb1wiO1xuICAgIGNvbnRlbnRUaXRsZS5jbGFzc0xpc3QuYWRkKCdjb250ZW50VGl0bGUnKVxuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQoY29udGVudFRpdGxlKTtcblxuICAgIC8vQWRkIFRhc2sgQnV0dG9uXG4gICAgY29uc3QgYWRkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgYWRkLmNsYXNzTGlzdC5hZGQoJ2FkZCcpO1xuXG4gICAgLy9BZGQgVGFzayBXaW5kb3dcbiAgICAvL2RlY2xhcmUgdGFzayB3aW5kb3cgY29udGVudFxuICAgIGNvbnN0IHRhc2tXaW5kb3cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb25zdCB0YXNrV2luZG93Q29udGVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnN0IHRhc2tDb250ZW50SGVhZGVyQmFyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29uc3QgdGFza0NvbnRlbnRIZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMScpO1xuICAgIGNvbnN0IHRhc2tDb250ZW50VGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgIGNvbnN0IHRhc2tDb250ZW50RGVzYyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RleHRhcmVhJyk7XG4gICAgY29uc3QgdGFza0Nsb3NlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgY29uc3QgdGFza0R1ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnN0IHRhc2tEdWVJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgY29uc3QgdGFza1ByaW9yaXR5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29uc3QgbG93UHJpb3JpdHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgIGNvbnN0IGxvd0xhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcbiAgICBjb25zdCBtZWRpdW1Qcmlvcml0eSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgY29uc3QgbWVkaXVtTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xuICAgIGNvbnN0IGhpZ2hQcmlvcml0eSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgY29uc3QgaGlnaExhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcbiAgICBjb25zdCBwcmlvcml0eURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnN0IHRhc2tBZGQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcblxuICAgIC8vZGVmaW5lIHZhcmlhYmxlcyBhbmQgc2V0IGZ1bmN0aW9ucyBhbmQgY2xhc3Nlcy5cbiAgICB0YXNrQWRkLmlubmVySFRNTCA9ICdBZGQgVGFzayc7XG4gICAgdGFza0FkZC5jbGFzc0xpc3QuYWRkKCd0YXNrQWRkJywnYnV0dG9uLTE2Jyk7XG5cbiAgICB0YXNrQWRkLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICBjb25zdCB0YXNrID0gKHRpdGxlLGRlc2MsZHVlLHByaW9yaXR5KSA9PiB7XG4gICAgICAgICAgICByZXR1cm4ge3RpdGxlLGRlc2MsZHVlLHByaW9yaXR5fTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50YXNrQ29udGVudFRpdGxlJykudmFsdWU7XG4gICAgICAgIGNvbnN0IGRlc2MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudGFza0NvbnRlbnREZXNjJykudmFsdWU7XG4gICAgICAgIGNvbnN0IGR1ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50YXNrRHVlSW5wdXQnKS52YWx1ZTtcbiAgICAgICAgY29uc3QgcHJpb3JpdHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdpbnB1dFtuYW1lPVwicHJpb3JpdHlcIl06Y2hlY2tlZCcpLmlkO1xuXG4gICAgICAgIGNvbnN0IHRhc2tXaW5kb3cgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudGFza1dpbmRvdycpO1xuICAgICAgICBjb25zdCB0YXNrQ29udGVudEhlYWRlckJhciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb250ZW50SGVhZGVyQmFyJyk7XG4gICAgICAgIHRhc2tXaW5kb3cuY2xhc3NMaXN0LnJlbW92ZSgnc2hvdycpO1xuICAgICAgICB0YXNrQ29udGVudEhlYWRlckJhci5jbGFzc0xpc3QucmVtb3ZlKCdzaG93RmxleCcpO1xuXG4gICAgICAgIGNvbnN0IG5ld1Rhc2sgPSB0YXNrKHRpdGxlLCBkZXNjLCBkdWUsIHByaW9yaXR5KTtcblxuICAgICAgICBpZiAoY29udGVudFRpdGxlLmlubmVySFRNTCA9PSBcIlRhc2tzIFRvIERvXCIpe1xuICAgICAgICAgICAgaWYgKFwidGFza3NEdWVcIiBpbiBzZXNzaW9uU3RvcmFnZSl7XG4gICAgICAgICAgICAgICAgY29uc3QgdGFza3NEdWVBcnJheSA9IEpTT04ucGFyc2Uoc2Vzc2lvblN0b3JhZ2UuZ2V0SXRlbShcInRhc2tzRHVlXCIpKTtcbiAgICAgICAgICAgICAgICB0YXNrc0R1ZUFycmF5LnB1c2gobmV3VGFzayk7XG4gICAgICAgICAgICAgICAgc2Vzc2lvblN0b3JhZ2Uuc2V0SXRlbShcInRhc2tzRHVlXCIsSlNPTi5zdHJpbmdpZnkodGFza3NEdWVBcnJheSkpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgY29uc3QgdGFza3NEdWVBcnJheSA9IFtuZXdUYXNrXTtcbiAgICAgICAgICAgICAgICBzZXNzaW9uU3RvcmFnZS5zZXRJdGVtKFwidGFza3NEdWVcIiwgSlNPTi5zdHJpbmdpZnkodGFza3NEdWVBcnJheSkpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgIGNvbnN0IHByb2plY3ROYW1lID0gY29udGVudFRpdGxlLmlkO1xuICAgICAgICAgICBpZiAocHJvamVjdE5hbWUgaW4gc2Vzc2lvblN0b3JhZ2Upe1xuICAgICAgICAgICAgICAgIGNvbnN0IHN0ZXBzID0gSlNPTi5wYXJzZShzZXNzaW9uU3RvcmFnZS5nZXRJdGVtKHByb2plY3ROYW1lKSk7XG4gICAgICAgICAgICAgICAgc3RlcHMucHVzaChuZXdUYXNrKTtcbiAgICAgICAgICAgICAgICBzZXNzaW9uU3RvcmFnZS5zZXRJdGVtKHByb2plY3ROYW1lLCBKU09OLnN0cmluZ2lmeShzdGVwcykpO1xuICAgICAgICAgICB9XG4gICAgICAgICAgIGVsc2V7XG4gICAgICAgICAgICAgICAgY29uc3Qgc3RlcHMgPSBbbmV3VGFza107XG4gICAgICAgICAgICAgICAgc2Vzc2lvblN0b3JhZ2Uuc2V0SXRlbShwcm9qZWN0TmFtZSwgSlNPTi5zdHJpbmdpZnkoc3RlcHMpKTtcbiAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQoY3JlYXRlQmFyKG5ld1Rhc2sudGl0bGUsIG5ld1Rhc2suZGVzYywgbmV3VGFzay5kdWUsIG5ld1Rhc2sucHJpb3JpdHkpKTtcbiAgICB9KTtcblxuICAgIHRhc2tQcmlvcml0eS5pbm5lckhUTUwgPSBcIlByaW9yaXR5OiBcIlxuICAgIHRhc2tQcmlvcml0eS5jbGFzc0xpc3QuYWRkKCd0YXNrUHJpb3JpdHknKTtcbiAgICBwcmlvcml0eURpdi5jbGFzc0xpc3QuYWRkKCdwcmlvcml0eURpdicpO1xuXG5cbiAgICBsb3dQcmlvcml0eS5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCdyYWRpbycpO1xuICAgIGxvd1ByaW9yaXR5LnNldEF0dHJpYnV0ZSgnaWQnLCdsb3cnKTtcbiAgICBsb3dQcmlvcml0eS5zZXRBdHRyaWJ1dGUoJ25hbWUnLCdwcmlvcml0eScpO1xuICAgIGxvd0xhYmVsLmlubmVySFRNTCA9IFwiTG93XCI7XG4gICAgbG93TGFiZWwuc2V0QXR0cmlidXRlKCdmb3InLCdsb3cnKTtcbiAgICBtZWRpdW1Qcmlvcml0eS5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCdyYWRpbycpO1xuICAgIG1lZGl1bVByaW9yaXR5LnNldEF0dHJpYnV0ZSgnaWQnLCdtZWRpdW0nKTtcbiAgICBtZWRpdW1Qcmlvcml0eS5zZXRBdHRyaWJ1dGUoJ25hbWUnLCdwcmlvcml0eScpO1xuICAgIG1lZGl1bUxhYmVsLmlubmVySFRNTCA9IFwiTWVkaXVtXCI7XG4gICAgbWVkaXVtTGFiZWwuc2V0QXR0cmlidXRlKCdmb3InLCdtZWRpdW0nKTtcbiAgICBoaWdoUHJpb3JpdHkuc2V0QXR0cmlidXRlKCd0eXBlJywncmFkaW8nKTtcbiAgICBoaWdoUHJpb3JpdHkuc2V0QXR0cmlidXRlKCdpZCcsJ2hpZ2gnKTtcbiAgICBoaWdoUHJpb3JpdHkuc2V0QXR0cmlidXRlKCduYW1lJywncHJpb3JpdHknKTtcbiAgICBoaWdoTGFiZWwuaW5uZXJIVE1MID0gXCJIaWdoXCI7XG4gICAgaGlnaExhYmVsLnNldEF0dHJpYnV0ZSgnZm9yJywnaGlnaCcpO1xuICAgIGxvd1ByaW9yaXR5LmNsYXNzTGlzdC5hZGQoJ2xvdycpO1xuICAgIG1lZGl1bVByaW9yaXR5LmNsYXNzTGlzdC5hZGQoJ21lZGl1bScpO1xuICAgIGhpZ2hQcmlvcml0eS5jbGFzc0xpc3QuYWRkKCdoaWdoJyk7XG5cbiAgICBsb3dMYWJlbC5hcHBlbmRDaGlsZChsb3dQcmlvcml0eSk7XG4gICAgcHJpb3JpdHlEaXYuYXBwZW5kQ2hpbGQobG93TGFiZWwpO1xuICAgIG1lZGl1bUxhYmVsLmFwcGVuZENoaWxkKG1lZGl1bVByaW9yaXR5KTtcbiAgICBwcmlvcml0eURpdi5hcHBlbmRDaGlsZChtZWRpdW1MYWJlbCk7XG4gICAgaGlnaExhYmVsLmFwcGVuZENoaWxkKGhpZ2hQcmlvcml0eSk7XG4gICAgcHJpb3JpdHlEaXYuYXBwZW5kQ2hpbGQoaGlnaExhYmVsKTtcbiAgICBcblxuICAgIHRhc2tXaW5kb3dDb250ZW50LmNsYXNzTGlzdC5hZGQoJ3Rhc2tXaW5kb3dDb250ZW50Jyk7XG5cblxuICAgIHRhc2tDb250ZW50SGVhZGVyLmNsYXNzTGlzdC5hZGQoJ3Rhc2tDb250ZW50SGVhZGVyJyk7XG4gICAgdGFza0NvbnRlbnRIZWFkZXIuaW5uZXJIVE1MID0gJ0FkZCBUYXNrJztcblxuICAgIHRhc2tDb250ZW50SGVhZGVyQmFyLmNsYXNzTGlzdC5hZGQoJ2NvbnRlbnRIZWFkZXJCYXInKTtcbiAgICBcbiAgICB0YXNrQ2xvc2Uuc2V0QXR0cmlidXRlKCdpZCcsJ2Nsb3NlVGFza1dpbmRvdycpO1xuICAgIHRhc2tDbG9zZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgdGFza1dpbmRvdy5jbGFzc0xpc3QucmVtb3ZlKCdzaG93Jyk7XG4gICAgICAgIHRhc2tDb250ZW50SGVhZGVyQmFyLmNsYXNzTGlzdC5yZW1vdmUoJ3Nob3dGbGV4Jyk7XG4gICAgfSlcblxuICAgIHRhc2tDb250ZW50SGVhZGVyQmFyLmFwcGVuZENoaWxkKHRhc2tDb250ZW50SGVhZGVyKTtcbiAgICB0YXNrQ29udGVudEhlYWRlckJhci5hcHBlbmRDaGlsZCh0YXNrQ2xvc2UpO1xuXG4gICAgdGFza0NvbnRlbnRUaXRsZS5jbGFzc0xpc3QuYWRkKCd0YXNrQ29udGVudFRpdGxlJyk7XG4gICAgdGFza0NvbnRlbnRUaXRsZS5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCd0ZXh0Jyk7XG4gICAgdGFza0NvbnRlbnRUaXRsZS5zZXRBdHRyaWJ1dGUoJ3BsYWNlaG9sZGVyJywnVGFzayBUaXRsZScpO1xuXG4gICAgdGFza0NvbnRlbnREZXNjLmNsYXNzTGlzdC5hZGQoJ3Rhc2tDb250ZW50RGVzYycpO1xuICAgIHRhc2tDb250ZW50RGVzYy5zZXRBdHRyaWJ1dGUoJ3Jvd3MnLCc4Jyk7XG4gICAgdGFza0NvbnRlbnREZXNjLnNldEF0dHJpYnV0ZSgnY29scycsJzQwJyk7XG4gICAgdGFza0NvbnRlbnREZXNjLnNldEF0dHJpYnV0ZSgncGxhY2Vob2xkZXInLCdUYXNrIERlc2NyaXB0aW9uJyk7XG5cbiAgICB0YXNrV2luZG93LmNsYXNzTGlzdC5hZGQoJ3Rhc2tXaW5kb3cnKTtcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZXZlbnQpID0+IHtcbiAgICAgICAgaWYgKGV2ZW50LnRhcmdldCA9PSB0YXNrV2luZG93KSB7XG4gICAgICAgICAgICB0YXNrV2luZG93LmNsYXNzTGlzdC5yZW1vdmUoJ3Nob3cnKTtcbiAgICAgICAgICAgIHRhc2tDb250ZW50SGVhZGVyQmFyLmNsYXNzTGlzdC5yZW1vdmUoJ3Nob3dGbGV4Jyk7XG4gICAgICAgIH1cbiAgICB9KVxuXG4gICAgdGFza0R1ZS5pbm5lckhUTUwgPSBcIlRhc2sgRHVlOlwiXG4gICAgdGFza0R1ZS5jbGFzc0xpc3QuYWRkKCd0YXNrRHVlJyk7XG4gICAgdGFza0R1ZUlucHV0LnNldEF0dHJpYnV0ZSgndHlwZScsJ2RhdGUnKTtcbiAgICBjb25zdCBkYXRlTWluID0gbmV3IERhdGUoKS50b0lTT1N0cmluZygpLnNwbGl0KFwiVFwiKVswXTtcbiAgICB0YXNrRHVlSW5wdXQuc2V0QXR0cmlidXRlKCdtaW4nLCBkYXRlTWluKTtcbiAgICB0YXNrRHVlSW5wdXQuY2xhc3NMaXN0LmFkZCgndGFza0R1ZUlucHV0Jyk7XG5cbiAgICAvL0FwcGVuZCBlbGVtZW50cyB0byB0YXNrV2luZG93Q29udGVudFxuICAgIHRhc2tXaW5kb3dDb250ZW50LmFwcGVuZENoaWxkKHRhc2tDb250ZW50VGl0bGUpO1xuICAgIHRhc2tXaW5kb3dDb250ZW50LmFwcGVuZENoaWxkKHRhc2tDb250ZW50RGVzYyk7XG4gICAgdGFza1dpbmRvd0NvbnRlbnQuYXBwZW5kQ2hpbGQodGFza0R1ZSk7XG4gICAgdGFza1dpbmRvd0NvbnRlbnQuYXBwZW5kQ2hpbGQodGFza0R1ZUlucHV0KTtcbiAgICB0YXNrV2luZG93Q29udGVudC5hcHBlbmRDaGlsZCh0YXNrUHJpb3JpdHkpO1xuICAgIHRhc2tXaW5kb3dDb250ZW50LmFwcGVuZENoaWxkKHByaW9yaXR5RGl2KTtcbiAgICB0YXNrV2luZG93Q29udGVudC5hcHBlbmRDaGlsZCh0YXNrQWRkKTtcbiAgICB0YXNrV2luZG93LmFwcGVuZENoaWxkKHRhc2tDb250ZW50SGVhZGVyQmFyKTtcbiAgICB0YXNrV2luZG93LmFwcGVuZENoaWxkKHRhc2tXaW5kb3dDb250ZW50KTtcbiAgICBcblxuICAgIC8vQWRkIHRhc2tXaW5kb3cgdG8gY29udGVudFxuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQodGFza1dpbmRvdyk7XG5cbiAgICAvL0FkZCBFdmVudCB0byBzaG93IHRhc2sgd2luZG93IG9uIGNsaWNrIG9uIGFkZCB0YXNrXG4gICAgYWRkLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICB0YXNrV2luZG93LmNsYXNzTGlzdC5hZGQoJ3Nob3cnKTtcbiAgICAgICAgdGFza0NvbnRlbnRIZWFkZXJCYXIuY2xhc3NMaXN0LmFkZCgnc2hvd0ZsZXgnKTtcbiAgICB9KTtcblxuICAgIC8vQ3JlYXRpbmcgYWRkIHRhc2sgdGFiXG4gICAgY29uc3QgYWRkSWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGFkZEljb24uY2xhc3NMaXN0LmFkZCgnYWRkSWNvbicpO1xuICAgIGNvbnN0IGFkZFRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBhZGRUZXh0LmlubmVySFRNTCA9IFwiQWRkIFRhc2tcIjtcbiAgICBhZGRUZXh0LmNsYXNzTGlzdC5hZGQoJ2FkZFRleHQnKVxuICAgIGFkZC5hcHBlbmRDaGlsZChhZGRJY29uKTtcbiAgICBhZGQuYXBwZW5kQ2hpbGQoYWRkVGV4dCk7XG4gICAgY29udGVudC5hcHBlbmRDaGlsZChhZGQpO1xuXG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGNvbnRlbnQpO1xuICAgIHJldHVybiBjb250YWluZXI7XG59IiwiaW1wb3J0IGNyZWF0ZUJhciBmcm9tIFwiLi9jcmVhdGVCYXJcIjtcbmltcG9ydCBsb2FkUHJvamVjdCBmcm9tIFwiLi9sb2FkUHJvamVjdFwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBsb2FkTWVudShjb250YWluZXIpIHtcbiAgICAvL2NyZWF0ZSBCYW5uZXIgZGl2XG4gICAgY29uc3QgbWVudSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIG1lbnUuY2xhc3NMaXN0LmFkZCgnbWVudScpO1xuXG4gICAgLy9UaGlzIG1vbnRoXG4gICAgY29uc3QgdGFza1RhYiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnN0IHRhc2tUYWJJY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cbiAgICB0YXNrVGFiLmNsYXNzTGlzdC5hZGQoJ3RhYicpO1xuICAgIHRhc2tUYWIuY2xhc3NMaXN0LmFkZCgnbG9hZFRhc2snKTtcbiAgICB0YXNrVGFiLmlubmVySFRNTCA9IFwiVGFza3MgRHVlXCI7XG5cbiAgICB0YXNrVGFiLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAvL1NlbGVjdGluZyBuZWNlc3NhcnkgZWxlbWVudHNcbiAgICAgICAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY29udGVudFwiKTtcbiAgICAgICAgY29uc3QgdGFza3NEdWUgPSBKU09OLnBhcnNlKHNlc3Npb25TdG9yYWdlLmdldEl0ZW0oXCJ0YXNrc0R1ZVwiKSk7XG4gICAgICAgIGNvbnN0IGNvbnRlbnRUaXRsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY29udGVudFRpdGxlXCIpO1xuICAgICAgICBjb25zdCB0YXNrQWRkVGV4dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYWRkVGV4dFwiKTtcblxuICAgICAgICBpZiAoY29udGVudFRpdGxlID09PSBcIlRhc2tzIFRvIERvXCIpe1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgLy9DbGVhciBjb250ZW50IGZyb20gdGFza3NcbiAgICAgICAgY29uc3QgdGFza0JhcnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcudGFza0JhcicpO1xuICAgICAgICBjb25zdCBkZXNjcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5kZXNjV2luZG93Jyk7XG5cbiAgICAgICAgZm9yIChjb25zdCB0YXNrQmFyIG9mIHRhc2tCYXJzKXtcbiAgICAgICAgICAgIGNvbnRlbnQucmVtb3ZlQ2hpbGQodGFza0Jhcik7XG4gICAgICAgIH1cbiAgICAgICAgZm9yIChjb25zdCBkZXNjIG9mIGRlc2NzKXtcbiAgICAgICAgICAgIGNvbnRlbnQucmVtb3ZlQ2hpbGQoZGVzYyk7XG4gICAgICAgIH1cblxuICAgICAgICAvL1VwZGF0ZSB0aXRsZSBhbmQgYWRkIHRhc2sgYnV0dG9uXG4gICAgICAgIGNvbnRlbnRUaXRsZS5pbm5lckhUTUwgPSBcIlRhc2tzIFRvIERvXCI7XG4gICAgICAgIHRhc2tBZGRUZXh0LmlubmVySFRNTCA9IFwiQWRkIFRhc2tcIjtcblxuICAgICAgICAvL0xvYWQgaW4gYmFyIGVsZW1lbnRzIGludG8gY29udGVudCBkaXZcbiAgICAgICAgZm9yIChjb25zdCBpIGluIHRhc2tzRHVlKSB7XG4gICAgICAgICAgICBjb250ZW50LmFwcGVuZENoaWxkKGNyZWF0ZUJhcih0YXNrc0R1ZVtpXS50aXRsZSwgdGFza3NEdWVbaV0uZGVzYywgdGFza3NEdWVbaV0uZHVlLCB0YXNrc0R1ZVtpXS5wcmlvcml0eSkpO1xuICAgICAgICB9XG5cbiAgICAgICAgXG4gICAgfSk7XG5cbiAgICB0YXNrVGFiSWNvbi5jbGFzc0xpc3QuYWRkKCdpY29uJyk7XG4gICAgdGFza1RhYkljb24uc2V0QXR0cmlidXRlKCdpZCcsICd0YXNrJyk7XG5cbiAgICB0YXNrVGFiLmFwcGVuZENoaWxkKHRhc2tUYWJJY29uKTtcblxuICAgIG1lbnUuYXBwZW5kQ2hpbGQodGFza1RhYik7XG5cbiAgICAvL1Byb2plY3RzXG4gICAgY29uc3QgcHJvamVjdHMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBwcm9qZWN0cy5pbm5lckhUTUwgPSBcIlByb2plY3RzXCI7XG4gICAgcHJvamVjdHMuY2xhc3NMaXN0LmFkZCgncHJvamVjdHMnKTtcblxuICAgIG1lbnUuYXBwZW5kQ2hpbGQocHJvamVjdHMpO1xuXG4gICAgLy9BZGQgUHJvamVjdCBUYWJcbiAgICBjb25zdCBhZGRQcm9qZWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29uc3QgYWRkUHJvamVjdEljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblxuICAgIGFkZFByb2plY3QuaW5uZXJIVE1MID0gXCJBZGQgUHJvamVjdFwiO1xuXG4gICAgYWRkUHJvamVjdC5jbGFzc0xpc3QuYWRkKCd0YWInKTtcbiAgICBhZGRQcm9qZWN0SWNvbi5jbGFzc0xpc3QuYWRkKCdpY29uJyk7XG4gICAgYWRkUHJvamVjdEljb24uc2V0QXR0cmlidXRlKCdpZCcsICdhZGRQcm9qZWN0Jyk7XG5cbiAgICBhZGRQcm9qZWN0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICBtZW51LnJlbW92ZUNoaWxkKGFkZFByb2plY3QpO1xuXG4gICAgICAgIC8vQ3JlYXRlIFByb2plY3QgY29udGFpbmVyXG4gICAgICAgIGNvbnN0IHByb2plY3RDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgcHJvamVjdENvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdwcm9qZWN0Q29udGFpbmVyJyk7XG4gICAgICAgIFxuICAgICAgICAvL1Byb2plY3QgTmFtZSBJbnB1dFxuICAgICAgICBjb25zdCBwcm9qZWN0TmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgICAgIHByb2plY3ROYW1lLnNldEF0dHJpYnV0ZSgndHlwZScsJ3RleHQnKTtcbiAgICAgICAgcHJvamVjdE5hbWUuY2xhc3NMaXN0LmFkZCgncHJvamVjdE5hbWUnKTtcbiAgICAgICAgcHJvamVjdE5hbWUuc2V0QXR0cmlidXRlKCdwbGFjZWhvbGRlcicsJ1Byb2plY3QgTmFtZScpO1xuICAgICAgICBwcm9qZWN0Q29udGFpbmVyLmFwcGVuZENoaWxkKHByb2plY3ROYW1lKTtcblxuICAgICAgICAvL0FkZCBQcm9qZWN0IEJ1dHRvblxuICAgICAgICBjb25zdCBhZGRQcm9qZWN0QnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgICAgIGFkZFByb2plY3RCdG4uY2xhc3NMaXN0LmFkZCgnYWRkUHJvamVjdEJ0bicpO1xuICAgICAgICBhZGRQcm9qZWN0QnRuLmlubmVySFRNTCA9IFwiQWRkXCI7XG4gICAgICAgIHByb2plY3RDb250YWluZXIuYXBwZW5kQ2hpbGQoYWRkUHJvamVjdEJ0bik7XG4gICAgICAgIGFkZFByb2plY3RCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCgpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHByb2plY3RUYWIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgIHByb2plY3RUYWIuY2xhc3NMaXN0LmFkZCgncHJvamVjdFRhYicpO1xuICAgICAgICAgICAgcHJvamVjdFRhYi5pbm5lckhUTUwgPSBwcm9qZWN0TmFtZS52YWx1ZTtcbiAgICAgICAgICAgIHByb2plY3RUYWIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCgpID0+IHtcbiAgICAgICAgICAgICAgICBsb2FkUHJvamVjdChwcm9qZWN0VGFiKTtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICBtZW51LnJlbW92ZUNoaWxkKHByb2plY3RDb250YWluZXIpO1xuICAgICAgICAgICAgbWVudS5hcHBlbmRDaGlsZChwcm9qZWN0VGFiKTtcbiAgICAgICAgICAgIG1lbnUuYXBwZW5kQ2hpbGQoYWRkUHJvamVjdCk7XG5cbiAgICAgICAgfSlcblxuICAgICAgICAvL0NhbmNlbCBBZGQgUHJvamVjdCBCdXR0b25cbiAgICAgICAgY29uc3QgY2FuY2VsUHJvamVjdEJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgICAgICBjYW5jZWxQcm9qZWN0QnRuLmNsYXNzTGlzdC5hZGQoJ2NhbmNlbFByb2plY3QnKTtcbiAgICAgICAgY2FuY2VsUHJvamVjdEJ0bi5pbm5lckhUTUwgPSBcIkNhbmNlbFwiXG4gICAgICAgIHByb2plY3RDb250YWluZXIuYXBwZW5kQ2hpbGQoY2FuY2VsUHJvamVjdEJ0bik7XG4gICAgICAgIGNhbmNlbFByb2plY3RCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCgpID0+IHtcbiAgICAgICAgICAgIG1lbnUucmVtb3ZlQ2hpbGQocHJvamVjdENvbnRhaW5lcik7XG4gICAgICAgICAgICBtZW51LmFwcGVuZENoaWxkKGFkZFByb2plY3QpO1xuICAgICAgICB9KVxuXG4gICAgICAgIG1lbnUuYXBwZW5kQ2hpbGQocHJvamVjdENvbnRhaW5lcik7XG4gICAgfSk7XG5cbiAgICBhZGRQcm9qZWN0LmFwcGVuZENoaWxkKGFkZFByb2plY3RJY29uKTtcblxuICAgIG1lbnUuYXBwZW5kQ2hpbGQoYWRkUHJvamVjdCk7XG4gICAgLy9GaW5hbCB1cGxvYWQgdG8gY29udGFpbmVyXG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKG1lbnUpO1xuXG4gICAgcmV0dXJuIGNvbnRhaW5lcjtcbn0iLCJpbXBvcnQgY3JlYXRlQmFyIGZyb20gXCIuL2NyZWF0ZUJhclwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBsb2FkUHJvamVjdChwcm9qZWN0KSB7XG4gICAgY29uc3QgcHJvamVjdE5hbWUgPSBwcm9qZWN0LmlubmVySFRNTDtcblxuICAgIC8vU2VsZWN0b3JzXG4gICAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb250ZW50Jyk7XG4gICAgY29uc3QgY29udGVudFRpdGxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbnRlbnRUaXRsZScpO1xuICAgIGlmIChjb250ZW50VGl0bGUuaW5uZXJIVE1MID09PSBwcm9qZWN0TmFtZSl7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb250ZW50VGl0bGUuc2V0QXR0cmlidXRlKCdpZCcscHJvamVjdE5hbWUpO1xuICAgIGNvbnRlbnRUaXRsZS5pbm5lckhUTUwgPSBwcm9qZWN0TmFtZTtcblxuXG4gICAgLy9DbGVhciBjb250ZW50IHdpbmRvdyBvZiB0YXNrc1xuICAgIGNvbnN0IGJhcnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcudGFza0JhcicpO1xuICAgIGNvbnN0IGRlc2NzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmRlc2NXaW5kb3cnKTtcblxuICAgIGZvciAoY29uc3QgYmFyIG9mIGJhcnMpIHtcbiAgICAgICAgY29udGVudC5yZW1vdmVDaGlsZChiYXIpO1xuICAgIH1cbiAgICBmb3IgKGNvbnN0IGRlc2Mgb2YgZGVzY3Mpe1xuICAgICAgICBjb250ZW50LnJlbW92ZUNoaWxkKGRlc2MpO1xuICAgIH1cblxuICAgIC8vVXBkYXRlIGFkZCB0YXNrIGJ1dHRvblxuICAgIGNvbnN0IGFkZFRleHQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmFkZFRleHRcIik7XG4gICAgY29uc3QgdGFza0NvbnRlbnRIZWFkZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnRhc2tDb250ZW50SGVhZGVyXCIpO1xuXG4gICAgdGFza0NvbnRlbnRIZWFkZXIuaW5uZXJIVE1MID0gXCJBZGQgU3RlcFwiO1xuICAgIGFkZFRleHQuaW5uZXJIVE1MID0gXCJBZGQgU3RlcFwiO1xuXG4gICAgLy9Mb2FkIHN0ZXBzIChGSU5BTCBTVEVQKVxuICAgIGlmIChzZXNzaW9uU3RvcmFnZS5nZXRJdGVtKHByb2plY3ROYW1lKSA9PT0gbnVsbCl7XG4gICAgICAgIFxuICAgIH1cbiAgICBlbHNle1xuICAgICAgICBjb25zdCBzdGVwcyA9IEpTT04ucGFyc2Uoc2Vzc2lvblN0b3JhZ2UuZ2V0SXRlbShwcm9qZWN0TmFtZSkpO1xuXG4gICAgICAgIGZvciAobGV0IGkgaW4gc3RlcHMpe1xuICAgICAgICAgICAgY29uc29sZS5sb2coaSk7XG4gICAgICAgICAgICBjb250ZW50LmFwcGVuZENoaWxkKGNyZWF0ZUJhcihzdGVwc1tpXS50aXRsZSwgc3RlcHNbaV0uZGVzYywgc3RlcHNbaV0uZHVlLCBzdGVwc1tpXS5wcmlvcml0eSkpXG4gICAgICAgIH1cbiAgICB9XG59Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9