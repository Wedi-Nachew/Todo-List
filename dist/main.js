/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

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



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../src/icons/drop-down.svg */ "./src/icons/drop-down.svg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ../src/icons/unchecked.svg */ "./src/icons/unchecked.svg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! ../src/icons/checked.svg */ "./src/icons/checked.svg"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
var ___CSS_LOADER_URL_REPLACEMENT_2___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_2___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `*{
    box-sizing: border-box;
}
html,
body{
    height: 100%;
    width: 100%;
    padding: 0;
    margin: 0;
}
body{
    display: flex;
    flex-direction: column;
    font-family: 'Cormorant Garamond', serif;
    box-sizing: border-box;
}
.header{
    background-color: #1b263b;
    color: white;
    display: flex;
    align-items: center;
    column-gap: 10px;
    margin: 0;
    height: 10vh;
    padding-right: 150px;
    position: fixed;
    width: 100%;
    z-index: 9999;
}
.header h1{
    margin-top: 40px;
    font-size: 2rem;
    vertical-align: center;
    font-family: 'Borel', cursive;
}
.header > img[src\$="svg"]{
    height: 45px;
    width: 45px;
    margin: 16px 0 20px 30px;
    background-color: #7ae582;
    border-radius: 50%;
    box-shadow: 0 0 10px #1b263f;
}
.header > button{
    margin-left: auto;
    color: #000;
    padding: 5px 40px 5px 10px;
    background-color: #7ae582;
    text-align: left;
    border: none;
    font-size: 1.1rem;
    display: flex;
    align-items: center;
    gap: 15px;
    cursor: pointer;
    border-radius: 15px;
    font-family: inherit;
    font-weight: 400;
}
.header > button:hover{
    background-color: #71f279;
}
.header + div{
    display: flex;
    flex-grow: 1;
    padding-right: 75px;
    margin-top: 10vh;
    /* width: 100vw; */
}
.side-bar{
    display: flex;
    flex-direction: column;
    background-color: hsl(0, 0%, 97%);
    height: 100%;
    padding: 40px 20px;
    width: 22vw;
    position: fixed;
}
.task-menu,
.projects{
    display: flex;
    flex-direction: column;
    gap: 10px;
}
.side-bar button{
    padding: 5px 125px 5px 15px;
    text-align: left;
    border: none;
    font-size: 1.1rem;
    display: flex;
    align-items: center;
    gap: 15px;
    cursor: pointer;
    border-radius: 15px;
    background-color: transparent;
    font-family: inherit;
    font-weight: 400;
}
.side-bar button:hover{
    background-color: #c8c8c8;
    font-weight: 700;
    box-shadow: #000
}
img[src\$="svg"]{
    height: 25px;
    width: auto;
}
.projects h2{
    margin-bottom: 0;
    width: auto;
}
#form-wrapper{
    position: fixed;
    width: 100%;
    top: 0;
    left: 0;
    background-color: rgba(0, 0, 0, .5);
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    backdrop-filter: blur(3px);
}
input,
form button,
select,
textarea{
    margin: 0;
    padding: 0;
    border: none;
    appearance: none;
    font-size: 100%;
    font-family: inherit;
    outline: none;
}
form{
    display: flex;
    flex-direction: column;
    width: 550px;
    border-radius: 10px;
    padding: 15px;
    background-color: #fff;
}
input, textarea{
    padding: 5px 10px;
}
form input[name="title"]{
    font-size: 1.35rem;
    font-weight: 600;
    margin-top: 5px;
    padding-left: 0;
}
form input[name="title"]::placeholder{
    font-size: 1.2rem;
    font-weight: 600;
    color: #141414;
}
form textarea{
    font-size: 1rem;
    resize: none;
    padding-left: 0;
}
form select, 
form input[type="date"],
form select + button{
    padding: 5px;
    margin: 5px;
    border: 1px solid #20a4f3;
    border-radius: 5px;
    width: 120px;
    background-color: hsl(0, 0%, 97%);
    cursor: pointer;
}
form input[type="date"]{
    cursor: default;
    width: 150px;
}
form div{
    display: flex;
}
form div button{
    margin-left: auto;
    background-color: #7ae582;
    border: none;
    color: #000;
    font-weight: 600;
    font-size: 1.1rem;
    padding: 9px 18px;
}
form div{
    position: relative;
}
form div::after{
    content: url(${___CSS_LOADER_URL_REPLACEMENT_0___});
    position: absolute;
    left: 250px;
    top: 7px;
}
.show{
    visibility: visible;
}
.hidden{
    visibility: hidden;
}

.main {
    margin-left: 25vw;
    display: flex;
    flex-direction: column;
    width: 80vw;
    margin-top: 110px;
    padding: 0 200px 40px 50px;
    gap:10px;
}
.main > h1{
    margin-top: 0;
    position: fixed;
    top: 60px;
    background-color:rgb(255, 255, 255);
    width: 700px;
    margin-right: 200px;
    padding: 40px 0 20px;
}
.task{
    display: flex;
    margin-top: 0;
    justify-content: center;
    gap: 10px;
    padding: 0 10px;
    border: 1px solid rgb(128, 128, 128, .4);
}
.task-text{
    display: flex;
    flex-grow: 1;
    justify-content: center;
    padding-top: 15px;
}
.task-text div p{
    margin-top: 0;
    margin-bottom: 14px;
}
.task-text div h3{
    margin-top: 0;
    margin-bottom: 0;
    font-size: 1.1rem;
}
.task-text > p{
    margin-left: auto;
    font-size: 1.1rem;
}
input[type="checkbox"]{
    width: 45px;
}
input[type="checkbox"]:not(:checked){
    content: url(${___CSS_LOADER_URL_REPLACEMENT_1___});
}
input[type="checkbox"]:checked{
    content: url(${___CSS_LOADER_URL_REPLACEMENT_2___});
    width: 45px;
}
.priority{
    display: none;
}














`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;IACI,sBAAsB;AAC1B;AACA;;IAEI,YAAY;IACZ,WAAW;IACX,UAAU;IACV,SAAS;AACb;AACA;IACI,aAAa;IACb,sBAAsB;IACtB,wCAAwC;IACxC,sBAAsB;AAC1B;AACA;IACI,yBAAyB;IACzB,YAAY;IACZ,aAAa;IACb,mBAAmB;IACnB,gBAAgB;IAChB,SAAS;IACT,YAAY;IACZ,oBAAoB;IACpB,eAAe;IACf,WAAW;IACX,aAAa;AACjB;AACA;IACI,gBAAgB;IAChB,eAAe;IACf,sBAAsB;IACtB,6BAA6B;AACjC;AACA;IACI,YAAY;IACZ,WAAW;IACX,wBAAwB;IACxB,yBAAyB;IACzB,kBAAkB;IAClB,4BAA4B;AAChC;AACA;IACI,iBAAiB;IACjB,WAAW;IACX,0BAA0B;IAC1B,yBAAyB;IACzB,gBAAgB;IAChB,YAAY;IACZ,iBAAiB;IACjB,aAAa;IACb,mBAAmB;IACnB,SAAS;IACT,eAAe;IACf,mBAAmB;IACnB,oBAAoB;IACpB,gBAAgB;AACpB;AACA;IACI,yBAAyB;AAC7B;AACA;IACI,aAAa;IACb,YAAY;IACZ,mBAAmB;IACnB,gBAAgB;IAChB,kBAAkB;AACtB;AACA;IACI,aAAa;IACb,sBAAsB;IACtB,iCAAiC;IACjC,YAAY;IACZ,kBAAkB;IAClB,WAAW;IACX,eAAe;AACnB;AACA;;IAEI,aAAa;IACb,sBAAsB;IACtB,SAAS;AACb;AACA;IACI,2BAA2B;IAC3B,gBAAgB;IAChB,YAAY;IACZ,iBAAiB;IACjB,aAAa;IACb,mBAAmB;IACnB,SAAS;IACT,eAAe;IACf,mBAAmB;IACnB,6BAA6B;IAC7B,oBAAoB;IACpB,gBAAgB;AACpB;AACA;IACI,yBAAyB;IACzB,gBAAgB;IAChB;AACJ;AACA;IACI,YAAY;IACZ,WAAW;AACf;AACA;IACI,gBAAgB;IAChB,WAAW;AACf;AACA;IACI,eAAe;IACf,WAAW;IACX,MAAM;IACN,OAAO;IACP,mCAAmC;IACnC,aAAa;IACb,uBAAuB;IACvB,mBAAmB;IACnB,aAAa;IACb,0BAA0B;AAC9B;AACA;;;;IAII,SAAS;IACT,UAAU;IACV,YAAY;IACZ,gBAAgB;IAChB,eAAe;IACf,oBAAoB;IACpB,aAAa;AACjB;AACA;IACI,aAAa;IACb,sBAAsB;IACtB,YAAY;IACZ,mBAAmB;IACnB,aAAa;IACb,sBAAsB;AAC1B;AACA;IACI,iBAAiB;AACrB;AACA;IACI,kBAAkB;IAClB,gBAAgB;IAChB,eAAe;IACf,eAAe;AACnB;AACA;IACI,iBAAiB;IACjB,gBAAgB;IAChB,cAAc;AAClB;AACA;IACI,eAAe;IACf,YAAY;IACZ,eAAe;AACnB;AACA;;;IAGI,YAAY;IACZ,WAAW;IACX,yBAAyB;IACzB,kBAAkB;IAClB,YAAY;IACZ,iCAAiC;IACjC,eAAe;AACnB;AACA;IACI,eAAe;IACf,YAAY;AAChB;AACA;IACI,aAAa;AACjB;AACA;IACI,iBAAiB;IACjB,yBAAyB;IACzB,YAAY;IACZ,WAAW;IACX,gBAAgB;IAChB,iBAAiB;IACjB,iBAAiB;AACrB;AACA;IACI,kBAAkB;AACtB;AACA;IACI,gDAAwC;IACxC,kBAAkB;IAClB,WAAW;IACX,QAAQ;AACZ;AACA;IACI,mBAAmB;AACvB;AACA;IACI,kBAAkB;AACtB;;AAEA;IACI,iBAAiB;IACjB,aAAa;IACb,sBAAsB;IACtB,WAAW;IACX,iBAAiB;IACjB,0BAA0B;IAC1B,QAAQ;AACZ;AACA;IACI,aAAa;IACb,eAAe;IACf,SAAS;IACT,mCAAmC;IACnC,YAAY;IACZ,mBAAmB;IACnB,oBAAoB;AACxB;AACA;IACI,aAAa;IACb,aAAa;IACb,uBAAuB;IACvB,SAAS;IACT,eAAe;IACf,wCAAwC;AAC5C;AACA;IACI,aAAa;IACb,YAAY;IACZ,uBAAuB;IACvB,iBAAiB;AACrB;AACA;IACI,aAAa;IACb,mBAAmB;AACvB;AACA;IACI,aAAa;IACb,gBAAgB;IAChB,iBAAiB;AACrB;AACA;IACI,iBAAiB;IACjB,iBAAiB;AACrB;AACA;IACI,WAAW;AACf;AACA;IACI,gDAA0C;AAC9C;AACA;IACI,gDAAwC;IACxC,WAAW;AACf;AACA;IACI,aAAa;AACjB","sourcesContent":["*{\n    box-sizing: border-box;\n}\nhtml,\nbody{\n    height: 100%;\n    width: 100%;\n    padding: 0;\n    margin: 0;\n}\nbody{\n    display: flex;\n    flex-direction: column;\n    font-family: 'Cormorant Garamond', serif;\n    box-sizing: border-box;\n}\n.header{\n    background-color: #1b263b;\n    color: white;\n    display: flex;\n    align-items: center;\n    column-gap: 10px;\n    margin: 0;\n    height: 10vh;\n    padding-right: 150px;\n    position: fixed;\n    width: 100%;\n    z-index: 9999;\n}\n.header h1{\n    margin-top: 40px;\n    font-size: 2rem;\n    vertical-align: center;\n    font-family: 'Borel', cursive;\n}\n.header > img[src$=\"svg\"]{\n    height: 45px;\n    width: 45px;\n    margin: 16px 0 20px 30px;\n    background-color: #7ae582;\n    border-radius: 50%;\n    box-shadow: 0 0 10px #1b263f;\n}\n.header > button{\n    margin-left: auto;\n    color: #000;\n    padding: 5px 40px 5px 10px;\n    background-color: #7ae582;\n    text-align: left;\n    border: none;\n    font-size: 1.1rem;\n    display: flex;\n    align-items: center;\n    gap: 15px;\n    cursor: pointer;\n    border-radius: 15px;\n    font-family: inherit;\n    font-weight: 400;\n}\n.header > button:hover{\n    background-color: #71f279;\n}\n.header + div{\n    display: flex;\n    flex-grow: 1;\n    padding-right: 75px;\n    margin-top: 10vh;\n    /* width: 100vw; */\n}\n.side-bar{\n    display: flex;\n    flex-direction: column;\n    background-color: hsl(0, 0%, 97%);\n    height: 100%;\n    padding: 40px 20px;\n    width: 22vw;\n    position: fixed;\n}\n.task-menu,\n.projects{\n    display: flex;\n    flex-direction: column;\n    gap: 10px;\n}\n.side-bar button{\n    padding: 5px 125px 5px 15px;\n    text-align: left;\n    border: none;\n    font-size: 1.1rem;\n    display: flex;\n    align-items: center;\n    gap: 15px;\n    cursor: pointer;\n    border-radius: 15px;\n    background-color: transparent;\n    font-family: inherit;\n    font-weight: 400;\n}\n.side-bar button:hover{\n    background-color: #c8c8c8;\n    font-weight: 700;\n    box-shadow: #000\n}\nimg[src$=\"svg\"]{\n    height: 25px;\n    width: auto;\n}\n.projects h2{\n    margin-bottom: 0;\n    width: auto;\n}\n#form-wrapper{\n    position: fixed;\n    width: 100%;\n    top: 0;\n    left: 0;\n    background-color: rgba(0, 0, 0, .5);\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    height: 100vh;\n    backdrop-filter: blur(3px);\n}\ninput,\nform button,\nselect,\ntextarea{\n    margin: 0;\n    padding: 0;\n    border: none;\n    appearance: none;\n    font-size: 100%;\n    font-family: inherit;\n    outline: none;\n}\nform{\n    display: flex;\n    flex-direction: column;\n    width: 550px;\n    border-radius: 10px;\n    padding: 15px;\n    background-color: #fff;\n}\ninput, textarea{\n    padding: 5px 10px;\n}\nform input[name=\"title\"]{\n    font-size: 1.35rem;\n    font-weight: 600;\n    margin-top: 5px;\n    padding-left: 0;\n}\nform input[name=\"title\"]::placeholder{\n    font-size: 1.2rem;\n    font-weight: 600;\n    color: #141414;\n}\nform textarea{\n    font-size: 1rem;\n    resize: none;\n    padding-left: 0;\n}\nform select, \nform input[type=\"date\"],\nform select + button{\n    padding: 5px;\n    margin: 5px;\n    border: 1px solid #20a4f3;\n    border-radius: 5px;\n    width: 120px;\n    background-color: hsl(0, 0%, 97%);\n    cursor: pointer;\n}\nform input[type=\"date\"]{\n    cursor: default;\n    width: 150px;\n}\nform div{\n    display: flex;\n}\nform div button{\n    margin-left: auto;\n    background-color: #7ae582;\n    border: none;\n    color: #000;\n    font-weight: 600;\n    font-size: 1.1rem;\n    padding: 9px 18px;\n}\nform div{\n    position: relative;\n}\nform div::after{\n    content: url(../src/icons/drop-down.svg);\n    position: absolute;\n    left: 250px;\n    top: 7px;\n}\n.show{\n    visibility: visible;\n}\n.hidden{\n    visibility: hidden;\n}\n\n.main {\n    margin-left: 25vw;\n    display: flex;\n    flex-direction: column;\n    width: 80vw;\n    margin-top: 110px;\n    padding: 0 200px 40px 50px;\n    gap:10px;\n}\n.main > h1{\n    margin-top: 0;\n    position: fixed;\n    top: 60px;\n    background-color:rgb(255, 255, 255);\n    width: 700px;\n    margin-right: 200px;\n    padding: 40px 0 20px;\n}\n.task{\n    display: flex;\n    margin-top: 0;\n    justify-content: center;\n    gap: 10px;\n    padding: 0 10px;\n    border: 1px solid rgb(128, 128, 128, .4);\n}\n.task-text{\n    display: flex;\n    flex-grow: 1;\n    justify-content: center;\n    padding-top: 15px;\n}\n.task-text div p{\n    margin-top: 0;\n    margin-bottom: 14px;\n}\n.task-text div h3{\n    margin-top: 0;\n    margin-bottom: 0;\n    font-size: 1.1rem;\n}\n.task-text > p{\n    margin-left: auto;\n    font-size: 1.1rem;\n}\ninput[type=\"checkbox\"]{\n    width: 45px;\n}\ninput[type=\"checkbox\"]:not(:checked){\n    content: url(\"../src/icons/unchecked.svg\");\n}\ninput[type=\"checkbox\"]:checked{\n    content: url(\"../src/icons/checked.svg\");\n    width: 45px;\n}\n.priority{\n    display: none;\n}\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n"],"sourceRoot":""}]);
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

/***/ "./src/icons/checked.svg":
/*!*******************************!*\
  !*** ./src/icons/checked.svg ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "21c86faf0323024b1d78.svg";

/***/ }),

/***/ "./src/icons/drop-down.svg":
/*!*********************************!*\
  !*** ./src/icons/drop-down.svg ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "716ca93692407f10c3d6.svg";

/***/ }),

/***/ "./src/icons/unchecked.svg":
/*!*********************************!*\
  !*** ./src/icons/unchecked.svg ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "153ceb135224e018c1c8.svg";

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
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && !scriptUrl) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");



const inputForm = document.querySelector("form")


const InputFormDisplay = (()=>{
    const addTask = document.querySelector(".header > button")
    const inputFormWrapper = document.querySelector("#form-wrapper")

    addTask.addEventListener("click", ()=>{
        inputFormWrapper.className = "show"
    })

    inputFormWrapper.addEventListener("click", (event)=>{
        if(!inputForm.contains(event.target)){
            inputFormWrapper.className = "hidden"
        }
    })

    const resetInputFields=()=>{
        inputForm.childNodes.forEach(child => {
            if(child.nodeName !== "DIV"){
                child.value = ""
            }else if(child.nodeName === "DIV"){
               child.childNodes.forEach(grandChild => grandChild.value = "")
            }
        })
    }

    resetInputFields()
    return {inputFormWrapper, resetInputFields}
    
})()


const TaskInfoReceiver = (()=>{

    const taskInfo = {}
    const getTaskInfo= () => taskInfo

    inputForm.addEventListener("input", (event)=>{
        switch(event.target.name){
            case "title":
               taskInfo.title = event.target.value
                break
            case "description":
                taskInfo.description = event.target.value
                break
            case "due-date":
                taskInfo.dueDate = event.target.value
                break
            case "priority":
                taskInfo.priority = Number.parseInt(event.target.value)
                break
        }
    })
    


    return {getTaskInfo}
})()

const Tasks = (() => {
    const add = document.querySelector(".add-btn")
    const details = TaskInfoReceiver.getTaskInfo()
    const tasks = []

    const Task = (title, description, dueDate, priority) => {
        return {title, description, dueDate, priority}
    }

    add.addEventListener("click", (event)=>{
        if(details.title && details.dueDate && details.priority){
            event.preventDefault()
            addTask()
            InputFormDisplay.resetInputFields()
            InputFormDisplay.inputFormWrapper.className = "hidden"
            RenderTasks.append(details.title, details.description, details.dueDate, details.priority)
            PriorityMark.priorityIndicators()
        }
    })

    function addTask(){
        const newTask = Task(details.title, details.description, details.dueDate, details.priority)
        tasks.push(newTask)
    }
})()

const RenderTasks= (()=>{
    
    const append = (info1, info2, info3, info4)=> {
        const main = document.querySelector(".main")
        const task = document.createElement("div")
        const checkBox = document.createElement("input")
        const taskText = document.createElement("div")
        const div = document.createElement("div")
        const title = document.createElement("h3")
        const description = document.createElement("p")
        const dueDate = document.createElement("p")
        const priority = document.createElement("p")

        task.className = "task"
        taskText.className = "task-text"
        checkBox.type = "checkbox"
        checkBox.value = "completed"
        checkBox.id = "task-completion"

        title.textContent = info1
        description.textContent = info2
        dueDate.textContent = info3
        priority.textContent = info4
        priority.className = "priority"

        div.appendChild(title)
        div.appendChild(description)
        taskText.appendChild(div)
        taskText.appendChild(dueDate)
        task.appendChild(checkBox)
        task.appendChild(taskText)
        task.appendChild(priority)
        main.appendChild(task)

    }

   return{append}
})()

const PriorityMark = (() => {
    const main = document.querySelector(".main")

    function priorityIndicators(){
        
        main.childNodes.forEach(child => {
            if(child.className == "task"){child.childNodes.forEach(grandChild => {
                    if(grandChild.className == "priority" && grandChild.textContent == 1){
                        grandChild.parentNode.style.cssText = "border-left: 12px solid #ef476f;"
                    }else if(grandChild.className == "priority" && grandChild.textContent == 2){
                        grandChild.parentNode.style.cssText = "border-left: 12px solid #ffd166;"
                    }else if(grandChild.className == "priority" && grandChild.textContent == 3){
                        grandChild.parentNode.style.cssText = "border-left: 12px solid #06d6a0;"
                    }else if(grandChild.className == "priority" && grandChild.textContent == 4){
                        grandChild.parentNode.style.cssText = "border-left: 12px solid #06d6a0;"
                    }
                })
            }
        })
   }

   priorityIndicators()

   return{priorityIndicators}
})()




















document.addEventListener("DOMContentLoaded", () => {
    // inputForm.childNodes.forEach(input => input.value = "")
    // dateSelect.childNodes.forEach(field => field.value = "")

})
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQzBHO0FBQ2pCO0FBQ087QUFDaEcsNENBQTRDLDRIQUE2QztBQUN6Riw0Q0FBNEMsNEhBQTZDO0FBQ3pGLDRDQUE0Qyx3SEFBMkM7QUFDdkYsOEJBQThCLG1GQUEyQixDQUFDLDRGQUFxQztBQUMvRix5Q0FBeUMsc0ZBQStCO0FBQ3hFLHlDQUF5QyxzRkFBK0I7QUFDeEUseUNBQXlDLHNGQUErQjtBQUN4RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUIsbUNBQW1DO0FBQ3REO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CLG1DQUFtQztBQUN0RDtBQUNBO0FBQ0EsbUJBQW1CLG1DQUFtQztBQUN0RDtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7QUFlQSxPQUFPLGdGQUFnRixZQUFZLE1BQU0sTUFBTSxVQUFVLFVBQVUsVUFBVSxVQUFVLEtBQUssS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLE1BQU0sS0FBSyxZQUFZLFdBQVcsVUFBVSxZQUFZLGFBQWEsV0FBVyxVQUFVLFlBQVksV0FBVyxVQUFVLFVBQVUsTUFBTSxLQUFLLFlBQVksV0FBVyxZQUFZLGFBQWEsTUFBTSxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLE1BQU0sS0FBSyxZQUFZLFdBQVcsWUFBWSxhQUFhLGFBQWEsV0FBVyxZQUFZLFdBQVcsWUFBWSxXQUFXLFVBQVUsWUFBWSxhQUFhLGFBQWEsTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxZQUFZLFdBQVcsVUFBVSxNQUFNLE1BQU0sVUFBVSxZQUFZLFdBQVcsS0FBSyxLQUFLLFlBQVksYUFBYSxXQUFXLFlBQVksV0FBVyxZQUFZLFdBQVcsVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLE1BQU0sS0FBSyxZQUFZLGFBQWEsTUFBTSxLQUFLLEtBQUssVUFBVSxVQUFVLEtBQUssS0FBSyxZQUFZLFdBQVcsS0FBSyxLQUFLLFVBQVUsVUFBVSxVQUFVLFVBQVUsWUFBWSxXQUFXLFlBQVksYUFBYSxXQUFXLFlBQVksTUFBTSxRQUFRLFVBQVUsVUFBVSxVQUFVLFlBQVksV0FBVyxZQUFZLFdBQVcsTUFBTSxLQUFLLFVBQVUsWUFBWSxXQUFXLFlBQVksV0FBVyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLGFBQWEsV0FBVyxVQUFVLE1BQU0sS0FBSyxZQUFZLGFBQWEsV0FBVyxNQUFNLEtBQUssVUFBVSxVQUFVLFVBQVUsTUFBTSxPQUFPLFVBQVUsVUFBVSxZQUFZLGFBQWEsV0FBVyxZQUFZLFdBQVcsTUFBTSxLQUFLLFVBQVUsVUFBVSxNQUFNLEtBQUssVUFBVSxNQUFNLEtBQUssWUFBWSxhQUFhLFdBQVcsVUFBVSxZQUFZLGFBQWEsYUFBYSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxhQUFhLFdBQVcsVUFBVSxLQUFLLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksV0FBVyxZQUFZLGFBQWEsV0FBVyxLQUFLLEtBQUssVUFBVSxVQUFVLFVBQVUsWUFBWSxXQUFXLFlBQVksYUFB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QTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUEsVUFBVTtBQUNWLENBQUM7O0FBRUQ7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSwwQ0FBMEM7QUFDMUM7QUFDQSwrRkFBK0Y7QUFDL0YscUJBQXFCO0FBQ3JCLCtGQUErRjtBQUMvRixxQkFBcUI7QUFDckIsK0ZBQStGO0FBQy9GLHFCQUFxQjtBQUNyQiwrRkFBK0Y7QUFDL0Y7QUFDQSxpQkFBaUI7QUFDakI7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7O0FBRUEsVUFBVTtBQUNWLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQXFCRDtBQUNBO0FBQ0E7O0FBRUEsQ0FBQyxDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2pzb25wIGNodW5rIGxvYWRpbmciLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fID0gbmV3IFVSTChcIi4uL3NyYy9pY29ucy9kcm9wLWRvd24uc3ZnXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18gPSBuZXcgVVJMKFwiLi4vc3JjL2ljb25zL3VuY2hlY2tlZC5zdmdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMl9fXyA9IG5ldyBVUkwoXCIuLi9zcmMvaWNvbnMvY2hlY2tlZC5zdmdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzJfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8yX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgKntcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xufVxuaHRtbCxcbmJvZHl7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIHBhZGRpbmc6IDA7XG4gICAgbWFyZ2luOiAwO1xufVxuYm9keXtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgZm9udC1mYW1pbHk6ICdDb3Jtb3JhbnQgR2FyYW1vbmQnLCBzZXJpZjtcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xufVxuLmhlYWRlcntcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMWIyNjNiO1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgY29sdW1uLWdhcDogMTBweDtcbiAgICBtYXJnaW46IDA7XG4gICAgaGVpZ2h0OiAxMHZoO1xuICAgIHBhZGRpbmctcmlnaHQ6IDE1MHB4O1xuICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICB6LWluZGV4OiA5OTk5O1xufVxuLmhlYWRlciBoMXtcbiAgICBtYXJnaW4tdG9wOiA0MHB4O1xuICAgIGZvbnQtc2l6ZTogMnJlbTtcbiAgICB2ZXJ0aWNhbC1hbGlnbjogY2VudGVyO1xuICAgIGZvbnQtZmFtaWx5OiAnQm9yZWwnLCBjdXJzaXZlO1xufVxuLmhlYWRlciA+IGltZ1tzcmNcXCQ9XCJzdmdcIl17XG4gICAgaGVpZ2h0OiA0NXB4O1xuICAgIHdpZHRoOiA0NXB4O1xuICAgIG1hcmdpbjogMTZweCAwIDIwcHggMzBweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjN2FlNTgyO1xuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICBib3gtc2hhZG93OiAwIDAgMTBweCAjMWIyNjNmO1xufVxuLmhlYWRlciA+IGJ1dHRvbntcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcbiAgICBjb2xvcjogIzAwMDtcbiAgICBwYWRkaW5nOiA1cHggNDBweCA1cHggMTBweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjN2FlNTgyO1xuICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIGZvbnQtc2l6ZTogMS4xcmVtO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBnYXA6IDE1cHg7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XG4gICAgZm9udC1mYW1pbHk6IGluaGVyaXQ7XG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcbn1cbi5oZWFkZXIgPiBidXR0b246aG92ZXJ7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzcxZjI3OTtcbn1cbi5oZWFkZXIgKyBkaXZ7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWdyb3c6IDE7XG4gICAgcGFkZGluZy1yaWdodDogNzVweDtcbiAgICBtYXJnaW4tdG9wOiAxMHZoO1xuICAgIC8qIHdpZHRoOiAxMDB2dzsgKi9cbn1cbi5zaWRlLWJhcntcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgYmFja2dyb3VuZC1jb2xvcjogaHNsKDAsIDAlLCA5NyUpO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBwYWRkaW5nOiA0MHB4IDIwcHg7XG4gICAgd2lkdGg6IDIydnc7XG4gICAgcG9zaXRpb246IGZpeGVkO1xufVxuLnRhc2stbWVudSxcbi5wcm9qZWN0c3tcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgZ2FwOiAxMHB4O1xufVxuLnNpZGUtYmFyIGJ1dHRvbntcbiAgICBwYWRkaW5nOiA1cHggMTI1cHggNXB4IDE1cHg7XG4gICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgZm9udC1zaXplOiAxLjFyZW07XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGdhcDogMTVweDtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgYm9yZGVyLXJhZGl1czogMTVweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgICBmb250LWZhbWlseTogaW5oZXJpdDtcbiAgICBmb250LXdlaWdodDogNDAwO1xufVxuLnNpZGUtYmFyIGJ1dHRvbjpob3ZlcntcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjYzhjOGM4O1xuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgYm94LXNoYWRvdzogIzAwMFxufVxuaW1nW3NyY1xcJD1cInN2Z1wiXXtcbiAgICBoZWlnaHQ6IDI1cHg7XG4gICAgd2lkdGg6IGF1dG87XG59XG4ucHJvamVjdHMgaDJ7XG4gICAgbWFyZ2luLWJvdHRvbTogMDtcbiAgICB3aWR0aDogYXV0bztcbn1cbiNmb3JtLXdyYXBwZXJ7XG4gICAgcG9zaXRpb246IGZpeGVkO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIHRvcDogMDtcbiAgICBsZWZ0OiAwO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgLjUpO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBoZWlnaHQ6IDEwMHZoO1xuICAgIGJhY2tkcm9wLWZpbHRlcjogYmx1cigzcHgpO1xufVxuaW5wdXQsXG5mb3JtIGJ1dHRvbixcbnNlbGVjdCxcbnRleHRhcmVhe1xuICAgIG1hcmdpbjogMDtcbiAgICBwYWRkaW5nOiAwO1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBhcHBlYXJhbmNlOiBub25lO1xuICAgIGZvbnQtc2l6ZTogMTAwJTtcbiAgICBmb250LWZhbWlseTogaW5oZXJpdDtcbiAgICBvdXRsaW5lOiBub25lO1xufVxuZm9ybXtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgd2lkdGg6IDU1MHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgcGFkZGluZzogMTVweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xufVxuaW5wdXQsIHRleHRhcmVhe1xuICAgIHBhZGRpbmc6IDVweCAxMHB4O1xufVxuZm9ybSBpbnB1dFtuYW1lPVwidGl0bGVcIl17XG4gICAgZm9udC1zaXplOiAxLjM1cmVtO1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgbWFyZ2luLXRvcDogNXB4O1xuICAgIHBhZGRpbmctbGVmdDogMDtcbn1cbmZvcm0gaW5wdXRbbmFtZT1cInRpdGxlXCJdOjpwbGFjZWhvbGRlcntcbiAgICBmb250LXNpemU6IDEuMnJlbTtcbiAgICBmb250LXdlaWdodDogNjAwO1xuICAgIGNvbG9yOiAjMTQxNDE0O1xufVxuZm9ybSB0ZXh0YXJlYXtcbiAgICBmb250LXNpemU6IDFyZW07XG4gICAgcmVzaXplOiBub25lO1xuICAgIHBhZGRpbmctbGVmdDogMDtcbn1cbmZvcm0gc2VsZWN0LCBcbmZvcm0gaW5wdXRbdHlwZT1cImRhdGVcIl0sXG5mb3JtIHNlbGVjdCArIGJ1dHRvbntcbiAgICBwYWRkaW5nOiA1cHg7XG4gICAgbWFyZ2luOiA1cHg7XG4gICAgYm9yZGVyOiAxcHggc29saWQgIzIwYTRmMztcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgd2lkdGg6IDEyMHB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6IGhzbCgwLCAwJSwgOTclKTtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG59XG5mb3JtIGlucHV0W3R5cGU9XCJkYXRlXCJde1xuICAgIGN1cnNvcjogZGVmYXVsdDtcbiAgICB3aWR0aDogMTUwcHg7XG59XG5mb3JtIGRpdntcbiAgICBkaXNwbGF5OiBmbGV4O1xufVxuZm9ybSBkaXYgYnV0dG9ue1xuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICM3YWU1ODI7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIGNvbG9yOiAjMDAwO1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgZm9udC1zaXplOiAxLjFyZW07XG4gICAgcGFkZGluZzogOXB4IDE4cHg7XG59XG5mb3JtIGRpdntcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5mb3JtIGRpdjo6YWZ0ZXJ7XG4gICAgY29udGVudDogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fX30pO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBsZWZ0OiAyNTBweDtcbiAgICB0b3A6IDdweDtcbn1cbi5zaG93e1xuICAgIHZpc2liaWxpdHk6IHZpc2libGU7XG59XG4uaGlkZGVue1xuICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcbn1cblxuLm1haW4ge1xuICAgIG1hcmdpbi1sZWZ0OiAyNXZ3O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICB3aWR0aDogODB2dztcbiAgICBtYXJnaW4tdG9wOiAxMTBweDtcbiAgICBwYWRkaW5nOiAwIDIwMHB4IDQwcHggNTBweDtcbiAgICBnYXA6MTBweDtcbn1cbi5tYWluID4gaDF7XG4gICAgbWFyZ2luLXRvcDogMDtcbiAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgdG9wOiA2MHB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6cmdiKDI1NSwgMjU1LCAyNTUpO1xuICAgIHdpZHRoOiA3MDBweDtcbiAgICBtYXJnaW4tcmlnaHQ6IDIwMHB4O1xuICAgIHBhZGRpbmc6IDQwcHggMCAyMHB4O1xufVxuLnRhc2t7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBtYXJnaW4tdG9wOiAwO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGdhcDogMTBweDtcbiAgICBwYWRkaW5nOiAwIDEwcHg7XG4gICAgYm9yZGVyOiAxcHggc29saWQgcmdiKDEyOCwgMTI4LCAxMjgsIC40KTtcbn1cbi50YXNrLXRleHR7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWdyb3c6IDE7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgcGFkZGluZy10b3A6IDE1cHg7XG59XG4udGFzay10ZXh0IGRpdiBwe1xuICAgIG1hcmdpbi10b3A6IDA7XG4gICAgbWFyZ2luLWJvdHRvbTogMTRweDtcbn1cbi50YXNrLXRleHQgZGl2IGgze1xuICAgIG1hcmdpbi10b3A6IDA7XG4gICAgbWFyZ2luLWJvdHRvbTogMDtcbiAgICBmb250LXNpemU6IDEuMXJlbTtcbn1cbi50YXNrLXRleHQgPiBwe1xuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICAgIGZvbnQtc2l6ZTogMS4xcmVtO1xufVxuaW5wdXRbdHlwZT1cImNoZWNrYm94XCJde1xuICAgIHdpZHRoOiA0NXB4O1xufVxuaW5wdXRbdHlwZT1cImNoZWNrYm94XCJdOm5vdCg6Y2hlY2tlZCl7XG4gICAgY29udGVudDogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fX30pO1xufVxuaW5wdXRbdHlwZT1cImNoZWNrYm94XCJdOmNoZWNrZWR7XG4gICAgY29udGVudDogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMl9fX30pO1xuICAgIHdpZHRoOiA0NXB4O1xufVxuLnByaW9yaXR5e1xuICAgIGRpc3BsYXk6IG5vbmU7XG59XG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuYCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0lBQ0ksc0JBQXNCO0FBQzFCO0FBQ0E7O0lBRUksWUFBWTtJQUNaLFdBQVc7SUFDWCxVQUFVO0lBQ1YsU0FBUztBQUNiO0FBQ0E7SUFD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a0I7QUFDdEI7O0FBRUE7SUFDSSxpQkFBaUI7SUFDakIsYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixXQUFXO0lBQ1gsaUJBQWlCO0lBQ2pCLDBCQUEwQjtJQUMxQixRQUFRO0FBQ1o7QUFDQTtJQUNJLGFBQWE7SUFDYixlQUFlO0lBQ2YsU0FBUztJQUNULG1DQUFtQztJQUNuQyxZQUFZO0lBQ1osbUJBQW1CO0lBQ25CLG9CQUFvQjtBQUN4QjtBQUNBO0lBQ0ksYUFBYTtJQUNiLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsU0FBUztJQUNULGVBQWU7SUFDZix3Q0FBd0M7QUFDNUM7QUFDQTtJQUNJLGFBQWE7SUFDYixZQUFZO0lBQ1osdUJBQXVCO0lBQ3ZCLGlCQUFpQjtBQUNyQjtBQUNBO0lBQ0ksYUFBYTtJQUNiLG1CQUFtQjtBQUN2QjtBQUNBO0lBQ0ksYUFBYTtJQUNiLGdCQUFnQjtJQUNoQixpQkFBaUI7QUFDckI7QUFDQTtJQUNJLGlCQUFpQjtJQUNqQixpQkFBaUI7QUFDckI7QUFDQTtJQUNJLFdBQVc7QUFDZjtBQUNBO0lBQ0ksZ0RBQTBDO0FBQzlDO0FBQ0E7SUFDSSxnREFBd0M7SUFDeEMsV0FBVztBQUNmO0FBQ0E7SUFDSSxhQUFhO0FBQ2pCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIip7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcbmh0bWwsXFxuYm9keXtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgcGFkZGluZzogMDtcXG4gICAgbWFyZ2luOiAwO1xcbn1cXG5ib2R5e1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBmb250LWZhbWlseTogJ0Nvcm1vcmFudCBHYXJhbW9uZCcsIHNlcmlmO1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn1cXG4uaGVhZGVye1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMWIyNjNiO1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGNvbHVtbi1nYXA6IDEwcHg7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgaGVpZ2h0OiAxMHZoO1xcbiAgICBwYWRkaW5nLXJpZ2h0OiAxNTBweDtcXG4gICAgcG9zaXRpb246IGZpeGVkO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgei1pbmRleDogOTk5OTtcXG59XFxuLmhlYWRlciBoMXtcXG4gICAgbWFyZ2luLXRvcDogNDBweDtcXG4gICAgZm9udC1zaXplOiAycmVtO1xcbiAgICB2ZXJ0aWNhbC1hbGlnbjogY2VudGVyO1xcbiAgICBmb250LWZhbWlseTogJ0JvcmVsJywgY3Vyc2l2ZTtcXG59XFxuLmhlYWRlciA+IGltZ1tzcmMkPVxcXCJzdmdcXFwiXXtcXG4gICAgaGVpZ2h0OiA0NXB4O1xcbiAgICB3aWR0aDogNDVweDtcXG4gICAgbWFyZ2luOiAxNnB4IDAgMjBweCAzMHB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjN2FlNTgyO1xcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XFxuICAgIGJveC1zaGFkb3c6IDAgMCAxMHB4ICMxYjI2M2Y7XFxufVxcbi5oZWFkZXIgPiBidXR0b257XFxuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xcbiAgICBjb2xvcjogIzAwMDtcXG4gICAgcGFkZGluZzogNXB4IDQwcHggNXB4IDEwcHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICM3YWU1ODI7XFxuICAgIHRleHQtYWxpZ246IGxlZnQ7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgZm9udC1zaXplOiAxLjFyZW07XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGdhcDogMTVweDtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xcbiAgICBmb250LWZhbWlseTogaW5oZXJpdDtcXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcXG59XFxuLmhlYWRlciA+IGJ1dHRvbjpob3ZlcntcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzcxZjI3OTtcXG59XFxuLmhlYWRlciArIGRpdntcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1ncm93OiAxO1xcbiAgICBwYWRkaW5nLXJpZ2h0OiA3NXB4O1xcbiAgICBtYXJnaW4tdG9wOiAxMHZoO1xcbiAgICAvKiB3aWR0aDogMTAwdnc7ICovXFxufVxcbi5zaWRlLWJhcntcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogaHNsKDAsIDAlLCA5NyUpO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIHBhZGRpbmc6IDQwcHggMjBweDtcXG4gICAgd2lkdGg6IDIydnc7XFxuICAgIHBvc2l0aW9uOiBmaXhlZDtcXG59XFxuLnRhc2stbWVudSxcXG4ucHJvamVjdHN7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGdhcDogMTBweDtcXG59XFxuLnNpZGUtYmFyIGJ1dHRvbntcXG4gICAgcGFkZGluZzogNXB4IDEyNXB4IDVweCAxNXB4O1xcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGZvbnQtc2l6ZTogMS4xcmVtO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBnYXA6IDE1cHg7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgYm9yZGVyLXJhZGl1czogMTVweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICAgIGZvbnQtZmFtaWx5OiBpbmhlcml0O1xcbiAgICBmb250LXdlaWdodDogNDAwO1xcbn1cXG4uc2lkZS1iYXIgYnV0dG9uOmhvdmVye1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjYzhjOGM4O1xcbiAgICBmb250LXdlaWdodDogNzAwO1xcbiAgICBib3gtc2hhZG93OiAjMDAwXFxufVxcbmltZ1tzcmMkPVxcXCJzdmdcXFwiXXtcXG4gICAgaGVpZ2h0OiAyNXB4O1xcbiAgICB3aWR0aDogYXV0bztcXG59XFxuLnByb2plY3RzIGgye1xcbiAgICBtYXJnaW4tYm90dG9tOiAwO1xcbiAgICB3aWR0aDogYXV0bztcXG59XFxuI2Zvcm0td3JhcHBlcntcXG4gICAgcG9zaXRpb246IGZpeGVkO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgdG9wOiAwO1xcbiAgICBsZWZ0OiAwO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIC41KTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGhlaWdodDogMTAwdmg7XFxuICAgIGJhY2tkcm9wLWZpbHRlcjogYmx1cigzcHgpO1xcbn1cXG5pbnB1dCxcXG5mb3JtIGJ1dHRvbixcXG5zZWxlY3QsXFxudGV4dGFyZWF7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgcGFkZGluZzogMDtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBhcHBlYXJhbmNlOiBub25lO1xcbiAgICBmb250LXNpemU6IDEwMCU7XFxuICAgIGZvbnQtZmFtaWx5OiBpbmhlcml0O1xcbiAgICBvdXRsaW5lOiBub25lO1xcbn1cXG5mb3Jte1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICB3aWR0aDogNTUwcHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICAgIHBhZGRpbmc6IDE1cHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XFxufVxcbmlucHV0LCB0ZXh0YXJlYXtcXG4gICAgcGFkZGluZzogNXB4IDEwcHg7XFxufVxcbmZvcm0gaW5wdXRbbmFtZT1cXFwidGl0bGVcXFwiXXtcXG4gICAgZm9udC1zaXplOiAxLjM1cmVtO1xcbiAgICBmb250LXdlaWdodDogNjAwO1xcbiAgICBtYXJnaW4tdG9wOiA1cHg7XFxuICAgIHBhZGRpbmctbGVmdDogMDtcXG59XFxuZm9ybSBpbnB1dFtuYW1lPVxcXCJ0aXRsZVxcXCJdOjpwbGFjZWhvbGRlcntcXG4gICAgZm9udC1zaXplOiAxLjJyZW07XFxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XFxuICAgIGNvbG9yOiAjMTQxNDE0O1xcbn1cXG5mb3JtIHRleHRhcmVhe1xcbiAgICBmb250LXNpemU6IDFyZW07XFxuICAgIHJlc2l6ZTogbm9uZTtcXG4gICAgcGFkZGluZy1sZWZ0OiAwO1xcbn1cXG5mb3JtIHNlbGVjdCwgXFxuZm9ybSBpbnB1dFt0eXBlPVxcXCJkYXRlXFxcIl0sXFxuZm9ybSBzZWxlY3QgKyBidXR0b257XFxuICAgIHBhZGRpbmc6IDVweDtcXG4gICAgbWFyZ2luOiA1cHg7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkICMyMGE0ZjM7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgd2lkdGg6IDEyMHB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBoc2woMCwgMCUsIDk3JSk7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuZm9ybSBpbnB1dFt0eXBlPVxcXCJkYXRlXFxcIl17XFxuICAgIGN1cnNvcjogZGVmYXVsdDtcXG4gICAgd2lkdGg6IDE1MHB4O1xcbn1cXG5mb3JtIGRpdntcXG4gICAgZGlzcGxheTogZmxleDtcXG59XFxuZm9ybSBkaXYgYnV0dG9ue1xcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzdhZTU4MjtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBjb2xvcjogIzAwMDtcXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcXG4gICAgZm9udC1zaXplOiAxLjFyZW07XFxuICAgIHBhZGRpbmc6IDlweCAxOHB4O1xcbn1cXG5mb3JtIGRpdntcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG5mb3JtIGRpdjo6YWZ0ZXJ7XFxuICAgIGNvbnRlbnQ6IHVybCguLi9zcmMvaWNvbnMvZHJvcC1kb3duLnN2Zyk7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgbGVmdDogMjUwcHg7XFxuICAgIHRvcDogN3B4O1xcbn1cXG4uc2hvd3tcXG4gICAgdmlzaWJpbGl0eTogdmlzaWJsZTtcXG59XFxuLmhpZGRlbntcXG4gICAgdmlzaWJpbGl0eTogaGlkZGVuO1xcbn1cXG5cXG4ubWFpbiB7XFxuICAgIG1hcmdpbi1sZWZ0OiAyNXZ3O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICB3aWR0aDogODB2dztcXG4gICAgbWFyZ2luLXRvcDogMTEwcHg7XFxuICAgIHBhZGRpbmc6IDAgMjAwcHggNDBweCA1MHB4O1xcbiAgICBnYXA6MTBweDtcXG59XFxuLm1haW4gPiBoMXtcXG4gICAgbWFyZ2luLXRvcDogMDtcXG4gICAgcG9zaXRpb246IGZpeGVkO1xcbiAgICB0b3A6IDYwcHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6cmdiKDI1NSwgMjU1LCAyNTUpO1xcbiAgICB3aWR0aDogNzAwcHg7XFxuICAgIG1hcmdpbi1yaWdodDogMjAwcHg7XFxuICAgIHBhZGRpbmc6IDQwcHggMCAyMHB4O1xcbn1cXG4udGFza3tcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgbWFyZ2luLXRvcDogMDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGdhcDogMTBweDtcXG4gICAgcGFkZGluZzogMCAxMHB4O1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCByZ2IoMTI4LCAxMjgsIDEyOCwgLjQpO1xcbn1cXG4udGFzay10ZXh0e1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWdyb3c6IDE7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBwYWRkaW5nLXRvcDogMTVweDtcXG59XFxuLnRhc2stdGV4dCBkaXYgcHtcXG4gICAgbWFyZ2luLXRvcDogMDtcXG4gICAgbWFyZ2luLWJvdHRvbTogMTRweDtcXG59XFxuLnRhc2stdGV4dCBkaXYgaDN7XFxuICAgIG1hcmdpbi10b3A6IDA7XFxuICAgIG1hcmdpbi1ib3R0b206IDA7XFxuICAgIGZvbnQtc2l6ZTogMS4xcmVtO1xcbn1cXG4udGFzay10ZXh0ID4gcHtcXG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XFxuICAgIGZvbnQtc2l6ZTogMS4xcmVtO1xcbn1cXG5pbnB1dFt0eXBlPVxcXCJjaGVja2JveFxcXCJde1xcbiAgICB3aWR0aDogNDVweDtcXG59XFxuaW5wdXRbdHlwZT1cXFwiY2hlY2tib3hcXFwiXTpub3QoOmNoZWNrZWQpe1xcbiAgICBjb250ZW50OiB1cmwoXFxcIi4uL3NyYy9pY29ucy91bmNoZWNrZWQuc3ZnXFxcIik7XFxufVxcbmlucHV0W3R5cGU9XFxcImNoZWNrYm94XFxcIl06Y2hlY2tlZHtcXG4gICAgY29udGVudDogdXJsKFxcXCIuLi9zcmMvaWNvbnMvY2hlY2tlZC5zdmdcXFwiKTtcXG4gICAgd2lkdGg6IDQ1cHg7XFxufVxcbi5wcmlvcml0eXtcXG4gICAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVybCwgb3B0aW9ucykge1xuICBpZiAoIW9wdGlvbnMpIHtcbiAgICBvcHRpb25zID0ge307XG4gIH1cbiAgaWYgKCF1cmwpIHtcbiAgICByZXR1cm4gdXJsO1xuICB9XG4gIHVybCA9IFN0cmluZyh1cmwuX19lc01vZHVsZSA/IHVybC5kZWZhdWx0IDogdXJsKTtcblxuICAvLyBJZiB1cmwgaXMgYWxyZWFkeSB3cmFwcGVkIGluIHF1b3RlcywgcmVtb3ZlIHRoZW1cbiAgaWYgKC9eWydcIl0uKlsnXCJdJC8udGVzdCh1cmwpKSB7XG4gICAgdXJsID0gdXJsLnNsaWNlKDEsIC0xKTtcbiAgfVxuICBpZiAob3B0aW9ucy5oYXNoKSB7XG4gICAgdXJsICs9IG9wdGlvbnMuaGFzaDtcbiAgfVxuXG4gIC8vIFNob3VsZCB1cmwgYmUgd3JhcHBlZD9cbiAgLy8gU2VlIGh0dHBzOi8vZHJhZnRzLmNzc3dnLm9yZy9jc3MtdmFsdWVzLTMvI3VybHNcbiAgaWYgKC9bXCInKCkgXFx0XFxuXXwoJTIwKS8udGVzdCh1cmwpIHx8IG9wdGlvbnMubmVlZFF1b3Rlcykge1xuICAgIHJldHVybiBcIlxcXCJcIi5jb25jYXQodXJsLnJlcGxhY2UoL1wiL2csICdcXFxcXCInKS5yZXBsYWNlKC9cXG4vZywgXCJcXFxcblwiKSwgXCJcXFwiXCIpO1xuICB9XG4gIHJldHVybiB1cmw7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuLy8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbl9fd2VicGFja19yZXF1aXJlX18ubSA9IF9fd2VicGFja19tb2R1bGVzX187XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjO1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHtcblx0XHRcdHZhciBpID0gc2NyaXB0cy5sZW5ndGggLSAxO1xuXHRcdFx0d2hpbGUgKGkgPiAtMSAmJiAhc2NyaXB0VXJsKSBzY3JpcHRVcmwgPSBzY3JpcHRzW2ktLV0uc3JjO1xuXHRcdH1cblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5iID0gZG9jdW1lbnQuYmFzZVVSSSB8fCBzZWxmLmxvY2F0aW9uLmhyZWY7XG5cbi8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4vLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbi8vIFtyZXNvbHZlLCByZWplY3QsIFByb21pc2VdID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxudmFyIGluc3RhbGxlZENodW5rcyA9IHtcblx0XCJtYWluXCI6IDBcbn07XG5cbi8vIG5vIGNodW5rIG9uIGRlbWFuZCBsb2FkaW5nXG5cbi8vIG5vIHByZWZldGNoaW5nXG5cbi8vIG5vIHByZWxvYWRlZFxuXG4vLyBubyBITVJcblxuLy8gbm8gSE1SIG1hbmlmZXN0XG5cbi8vIG5vIG9uIGNodW5rcyBsb2FkZWRcblxuLy8gbm8ganNvbnAgZnVuY3Rpb24iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCBcIi4vc3R5bGUuY3NzXCJcblxuXG5jb25zdCBpbnB1dEZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiZm9ybVwiKVxuXG5cbmNvbnN0IElucHV0Rm9ybURpc3BsYXkgPSAoKCk9PntcbiAgICBjb25zdCBhZGRUYXNrID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5oZWFkZXIgPiBidXR0b25cIilcbiAgICBjb25zdCBpbnB1dEZvcm1XcmFwcGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNmb3JtLXdyYXBwZXJcIilcblxuICAgIGFkZFRhc2suYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpPT57XG4gICAgICAgIGlucHV0Rm9ybVdyYXBwZXIuY2xhc3NOYW1lID0gXCJzaG93XCJcbiAgICB9KVxuXG4gICAgaW5wdXRGb3JtV3JhcHBlci5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGV2ZW50KT0+e1xuICAgICAgICBpZighaW5wdXRGb3JtLmNvbnRhaW5zKGV2ZW50LnRhcmdldCkpe1xuICAgICAgICAgICAgaW5wdXRGb3JtV3JhcHBlci5jbGFzc05hbWUgPSBcImhpZGRlblwiXG4gICAgICAgIH1cbiAgICB9KVxuXG4gICAgY29uc3QgcmVzZXRJbnB1dEZpZWxkcz0oKT0+e1xuICAgICAgICBpbnB1dEZvcm0uY2hpbGROb2Rlcy5mb3JFYWNoKGNoaWxkID0+IHtcbiAgICAgICAgICAgIGlmKGNoaWxkLm5vZGVOYW1lICE9PSBcIkRJVlwiKXtcbiAgICAgICAgICAgICAgICBjaGlsZC52YWx1ZSA9IFwiXCJcbiAgICAgICAgICAgIH1lbHNlIGlmKGNoaWxkLm5vZGVOYW1lID09PSBcIkRJVlwiKXtcbiAgICAgICAgICAgICAgIGNoaWxkLmNoaWxkTm9kZXMuZm9yRWFjaChncmFuZENoaWxkID0+IGdyYW5kQ2hpbGQudmFsdWUgPSBcIlwiKVxuICAgICAgICAgICAgfVxuICAgICAgICB9KVxuICAgIH1cblxuICAgIHJlc2V0SW5wdXRGaWVsZHMoKVxuICAgIHJldHVybiB7aW5wdXRGb3JtV3JhcHBlciwgcmVzZXRJbnB1dEZpZWxkc31cbiAgICBcbn0pKClcblxuXG5jb25zdCBUYXNrSW5mb1JlY2VpdmVyID0gKCgpPT57XG5cbiAgICBjb25zdCB0YXNrSW5mbyA9IHt9XG4gICAgY29uc3QgZ2V0VGFza0luZm89ICgpID0+IHRhc2tJbmZvXG5cbiAgICBpbnB1dEZvcm0uYWRkRXZlbnRMaXN0ZW5lcihcImlucHV0XCIsIChldmVudCk9PntcbiAgICAgICAgc3dpdGNoKGV2ZW50LnRhcmdldC5uYW1lKXtcbiAgICAgICAgICAgIGNhc2UgXCJ0aXRsZVwiOlxuICAgICAgICAgICAgICAgdGFza0luZm8udGl0bGUgPSBldmVudC50YXJnZXQudmFsdWVcbiAgICAgICAgICAgICAgICBicmVha1xuICAgICAgICAgICAgY2FzZSBcImRlc2NyaXB0aW9uXCI6XG4gICAgICAgICAgICAgICAgdGFza0luZm8uZGVzY3JpcHRpb24gPSBldmVudC50YXJnZXQudmFsdWVcbiAgICAgICAgICAgICAgICBicmVha1xuICAgICAgICAgICAgY2FzZSBcImR1ZS1kYXRlXCI6XG4gICAgICAgICAgICAgICAgdGFza0luZm8uZHVlRGF0ZSA9IGV2ZW50LnRhcmdldC52YWx1ZVxuICAgICAgICAgICAgICAgIGJyZWFrXG4gICAgICAgICAgICBjYXNlIFwicHJpb3JpdHlcIjpcbiAgICAgICAgICAgICAgICB0YXNrSW5mby5wcmlvcml0eSA9IE51bWJlci5wYXJzZUludChldmVudC50YXJnZXQudmFsdWUpXG4gICAgICAgICAgICAgICAgYnJlYWtcbiAgICAgICAgfVxuICAgIH0pXG4gICAgXG5cblxuICAgIHJldHVybiB7Z2V0VGFza0luZm99XG59KSgpXG5cbmNvbnN0IFRhc2tzID0gKCgpID0+IHtcbiAgICBjb25zdCBhZGQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmFkZC1idG5cIilcbiAgICBjb25zdCBkZXRhaWxzID0gVGFza0luZm9SZWNlaXZlci5nZXRUYXNrSW5mbygpXG4gICAgY29uc3QgdGFza3MgPSBbXVxuXG4gICAgY29uc3QgVGFzayA9ICh0aXRsZSwgZGVzY3JpcHRpb24sIGR1ZURhdGUsIHByaW9yaXR5KSA9PiB7XG4gICAgICAgIHJldHVybiB7dGl0bGUsIGRlc2NyaXB0aW9uLCBkdWVEYXRlLCBwcmlvcml0eX1cbiAgICB9XG5cbiAgICBhZGQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChldmVudCk9PntcbiAgICAgICAgaWYoZGV0YWlscy50aXRsZSAmJiBkZXRhaWxzLmR1ZURhdGUgJiYgZGV0YWlscy5wcmlvcml0eSl7XG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpXG4gICAgICAgICAgICBhZGRUYXNrKClcbiAgICAgICAgICAgIElucHV0Rm9ybURpc3BsYXkucmVzZXRJbnB1dEZpZWxkcygpXG4gICAgICAgICAgICBJbnB1dEZvcm1EaXNwbGF5LmlucHV0Rm9ybVdyYXBwZXIuY2xhc3NOYW1lID0gXCJoaWRkZW5cIlxuICAgICAgICAgICAgUmVuZGVyVGFza3MuYXBwZW5kKGRldGFpbHMudGl0bGUsIGRldGFpbHMuZGVzY3JpcHRpb24sIGRldGFpbHMuZHVlRGF0ZSwgZGV0YWlscy5wcmlvcml0eSlcbiAgICAgICAgICAgIFByaW9yaXR5TWFyay5wcmlvcml0eUluZGljYXRvcnMoKVxuICAgICAgICB9XG4gICAgfSlcblxuICAgIGZ1bmN0aW9uIGFkZFRhc2soKXtcbiAgICAgICAgY29uc3QgbmV3VGFzayA9IFRhc2soZGV0YWlscy50aXRsZSwgZGV0YWlscy5kZXNjcmlwdGlvbiwgZGV0YWlscy5kdWVEYXRlLCBkZXRhaWxzLnByaW9yaXR5KVxuICAgICAgICB0YXNrcy5wdXNoKG5ld1Rhc2spXG4gICAgfVxufSkoKVxuXG5jb25zdCBSZW5kZXJUYXNrcz0gKCgpPT57XG4gICAgXG4gICAgY29uc3QgYXBwZW5kID0gKGluZm8xLCBpbmZvMiwgaW5mbzMsIGluZm80KT0+IHtcbiAgICAgICAgY29uc3QgbWFpbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubWFpblwiKVxuICAgICAgICBjb25zdCB0YXNrID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKVxuICAgICAgICBjb25zdCBjaGVja0JveCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKVxuICAgICAgICBjb25zdCB0YXNrVGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIilcbiAgICAgICAgY29uc3QgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKVxuICAgICAgICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoM1wiKVxuICAgICAgICBjb25zdCBkZXNjcmlwdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpXG4gICAgICAgIGNvbnN0IGR1ZURhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKVxuICAgICAgICBjb25zdCBwcmlvcml0eSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpXG5cbiAgICAgICAgdGFzay5jbGFzc05hbWUgPSBcInRhc2tcIlxuICAgICAgICB0YXNrVGV4dC5jbGFzc05hbWUgPSBcInRhc2stdGV4dFwiXG4gICAgICAgIGNoZWNrQm94LnR5cGUgPSBcImNoZWNrYm94XCJcbiAgICAgICAgY2hlY2tCb3gudmFsdWUgPSBcImNvbXBsZXRlZFwiXG4gICAgICAgIGNoZWNrQm94LmlkID0gXCJ0YXNrLWNvbXBsZXRpb25cIlxuXG4gICAgICAgIHRpdGxlLnRleHRDb250ZW50ID0gaW5mbzFcbiAgICAgICAgZGVzY3JpcHRpb24udGV4dENvbnRlbnQgPSBpbmZvMlxuICAgICAgICBkdWVEYXRlLnRleHRDb250ZW50ID0gaW5mbzNcbiAgICAgICAgcHJpb3JpdHkudGV4dENvbnRlbnQgPSBpbmZvNFxuICAgICAgICBwcmlvcml0eS5jbGFzc05hbWUgPSBcInByaW9yaXR5XCJcblxuICAgICAgICBkaXYuYXBwZW5kQ2hpbGQodGl0bGUpXG4gICAgICAgIGRpdi5hcHBlbmRDaGlsZChkZXNjcmlwdGlvbilcbiAgICAgICAgdGFza1RleHQuYXBwZW5kQ2hpbGQoZGl2KVxuICAgICAgICB0YXNrVGV4dC5hcHBlbmRDaGlsZChkdWVEYXRlKVxuICAgICAgICB0YXNrLmFwcGVuZENoaWxkKGNoZWNrQm94KVxuICAgICAgICB0YXNrLmFwcGVuZENoaWxkKHRhc2tUZXh0KVxuICAgICAgICB0YXNrLmFwcGVuZENoaWxkKHByaW9yaXR5KVxuICAgICAgICBtYWluLmFwcGVuZENoaWxkKHRhc2spXG5cbiAgICB9XG5cbiAgIHJldHVybnthcHBlbmR9XG59KSgpXG5cbmNvbnN0IFByaW9yaXR5TWFyayA9ICgoKSA9PiB7XG4gICAgY29uc3QgbWFpbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubWFpblwiKVxuXG4gICAgZnVuY3Rpb24gcHJpb3JpdHlJbmRpY2F0b3JzKCl7XG4gICAgICAgIFxuICAgICAgICBtYWluLmNoaWxkTm9kZXMuZm9yRWFjaChjaGlsZCA9PiB7XG4gICAgICAgICAgICBpZihjaGlsZC5jbGFzc05hbWUgPT0gXCJ0YXNrXCIpe2NoaWxkLmNoaWxkTm9kZXMuZm9yRWFjaChncmFuZENoaWxkID0+IHtcbiAgICAgICAgICAgICAgICAgICAgaWYoZ3JhbmRDaGlsZC5jbGFzc05hbWUgPT0gXCJwcmlvcml0eVwiICYmIGdyYW5kQ2hpbGQudGV4dENvbnRlbnQgPT0gMSl7XG4gICAgICAgICAgICAgICAgICAgICAgICBncmFuZENoaWxkLnBhcmVudE5vZGUuc3R5bGUuY3NzVGV4dCA9IFwiYm9yZGVyLWxlZnQ6IDEycHggc29saWQgI2VmNDc2ZjtcIlxuICAgICAgICAgICAgICAgICAgICB9ZWxzZSBpZihncmFuZENoaWxkLmNsYXNzTmFtZSA9PSBcInByaW9yaXR5XCIgJiYgZ3JhbmRDaGlsZC50ZXh0Q29udGVudCA9PSAyKXtcbiAgICAgICAgICAgICAgICAgICAgICAgIGdyYW5kQ2hpbGQucGFyZW50Tm9kZS5zdHlsZS5jc3NUZXh0ID0gXCJib3JkZXItbGVmdDogMTJweCBzb2xpZCAjZmZkMTY2O1wiXG4gICAgICAgICAgICAgICAgICAgIH1lbHNlIGlmKGdyYW5kQ2hpbGQuY2xhc3NOYW1lID09IFwicHJpb3JpdHlcIiAmJiBncmFuZENoaWxkLnRleHRDb250ZW50ID09IDMpe1xuICAgICAgICAgICAgICAgICAgICAgICAgZ3JhbmRDaGlsZC5wYXJlbnROb2RlLnN0eWxlLmNzc1RleHQgPSBcImJvcmRlci1sZWZ0OiAxMnB4IHNvbGlkICMwNmQ2YTA7XCJcbiAgICAgICAgICAgICAgICAgICAgfWVsc2UgaWYoZ3JhbmRDaGlsZC5jbGFzc05hbWUgPT0gXCJwcmlvcml0eVwiICYmIGdyYW5kQ2hpbGQudGV4dENvbnRlbnQgPT0gNCl7XG4gICAgICAgICAgICAgICAgICAgICAgICBncmFuZENoaWxkLnBhcmVudE5vZGUuc3R5bGUuY3NzVGV4dCA9IFwiYm9yZGVyLWxlZnQ6IDEycHggc29saWQgIzA2ZDZhMDtcIlxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgIH1cblxuICAgcHJpb3JpdHlJbmRpY2F0b3JzKClcblxuICAgcmV0dXJue3ByaW9yaXR5SW5kaWNhdG9yc31cbn0pKClcblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCAoKSA9PiB7XG4gICAgLy8gaW5wdXRGb3JtLmNoaWxkTm9kZXMuZm9yRWFjaChpbnB1dCA9PiBpbnB1dC52YWx1ZSA9IFwiXCIpXG4gICAgLy8gZGF0ZVNlbGVjdC5jaGlsZE5vZGVzLmZvckVhY2goZmllbGQgPT4gZmllbGQudmFsdWUgPSBcIlwiKVxuXG59KSJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==