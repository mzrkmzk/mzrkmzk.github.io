/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _sub__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sub */ \"./src/sub.js\");\n/* harmony import */ var _sub__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_sub__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _mystyle_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./mystyle.scss */ \"./src/mystyle.scss\");\n// import 文を使って sub.js ファイルを読み込む。\n // import 文を使ってsassファイルを読み込む。\n\n\nvar message = \"Hello World\"; // sub.jsに定義されたJavaScriptを実行する。\n// hello(message);\n\n//# sourceURL=webpack://task_2022/./src/index.js?");

/***/ }),

/***/ "./src/sub.js":
/*!********************!*\
  !*** ./src/sub.js ***!
  \********************/
/***/ (() => {

eval("// 内職アプリ\nvar updateBtn = document.querySelector('.js-project-update');\nvar inputItem = document.querySelectorAll('.js-save-item'); // 枚数計算のコンストラクタ\n\nvar calc = new doFigures(); // プロジェクト表示のコンストラクタ\n\nvar project = new displayProject();\n/**\n * [calc 枚数計算のコンストラクタ]\n * @constructor\n */\n\nfunction doFigures() {\n  this.calcBtn = document.querySelector('.js-calc-btn');\n}\n\n; // 初回計算\n\ncalc.calcBtn.addEventListener('click', function () {\n  var pages = parseInt(document.querySelector('.js-calc-total').value);\n  var termDay = calc.getNumberDays();\n  var targetID = document.querySelector('.js-calc-result');\n  setNumberPage(pages, termDay, targetID);\n  calc.saveInputData(termDay);\n}); // 再計算\n\nupdateBtn.addEventListener('click', function () {\n  // 残り枚数再計算\n  var pages = updatePages();\n  var days = parseInt(document.querySelector('.js-project-left_day').textContent);\n  var targetID = document.querySelector('.js-project-target');\n  var leftPages; // 日割り枚数再計算\n\n  setNumberPage(pages, days, targetID); // 折った枚数を保存\n\n  leftPages = saveTodayPages();\n  nokoriPage(leftPages);\n});\n/**\n * [getNumberDays 締切日までの日数計算]\n * @returns {Number} 日数を返す\n */\n\ndoFigures.prototype.getNumberDays = function () {\n  // function getNumberDays() {\n  var val_from = document.querySelector('.js-calc-from').value;\n  var val_to = document.querySelector('.js-calc-to').value;\n\n  if (val_from != '' && val_to != '') {\n    // 日付オブジェクトを生成\n    var day_from = new Date(val_from);\n    var day_to = new Date(val_to); //日数の計算\n\n    termDay = (day_to - day_from) / 86400000 + 1;\n    return termDay;\n  }\n}; // 日割り枚数計算\n\n\nfunction setNumberPage(pages, days, targetID) {\n  var item = Math.ceil(pages / days); // 小数点以下を切り上げ\n\n  targetID.innerHTML = item;\n}\n\n; // 残り枚数再計算\n\nfunction updatePages() {\n  var total = parseInt(document.querySelector('.js-project-total').textContent); // 最初に入れた総目標数\n\n  var today = parseInt(document.querySelector('.js-project-done_today').value); // 今日の進捗\n\n  var targetID = document.querySelector('.js-project-left_page');\n  var item = Math.ceil(total - today);\n  targetID.innerHTML = item;\n  return item;\n}\n\n;\n/**\n * [saveInputData 各種データ保存]\n * @param   {Number} termDay 日数\n * @returns {void}\n */\n\ndoFigures.prototype.saveInputData = function (termDay) {\n  var objData = [];\n  var jsonData;\n  inputItem.forEach(function (elem) {\n    var keyName = elem.dataset.keyname;\n    var val = elem.value; // オブジェクトを配列に格納して連想配列を作成\n    // label: data属性, data: 入力データ\n\n    objData.push({\n      label: keyName,\n      data: val\n    });\n  });\n  jsonData = JSON.stringify(objData);\n  localStorage.setItem('project', jsonData);\n  localStorage.setItem('days', termDay);\n}; // ロード時に発火\n\n\nwindow.addEventListener('load', function () {\n  // 入力したデータの表示\n  displaySavedData(); // 締め切りまでの日数表示\n\n  project.getDate(new Date());\n  project.getDiffDate();\n  project.setDataItem();\n});\n\nfunction displaySavedData() {\n  if (localStorage.getItem('project')) {\n    var inputArr = JSON.parse(localStorage.getItem('project')); //　各inputタグのdata属性と合致している要素を格納\n\n    inputItem.forEach(function (elem) {\n      var keyName = elem.dataset.keyname;\n      var matchKey = inputArr.find(function (item) {\n        return item.label === keyName;\n      });\n      elem.value = matchKey.data;\n    });\n  }\n\n  ;\n}\n\n;\n/**\n * [displayProject プロジェクト情報のコンストラクタ]\n * @constructor\n */\n\nfunction displayProject() {\n  this.startTd = document.querySelector('.js-project-start');\n  this.goalTd = document.querySelector('.js-project-goal');\n  this.totalItem = document.querySelector('.js-project-total');\n\n  if (localStorage.getItem('project')) {\n    this.inputArr = JSON.parse(localStorage.getItem('project'));\n  }\n\n  ;\n}\n\n;\n/**\n * [getDate 今日の日付の取得]\n * @returns {void}\n */\n\ndisplayProject.prototype.getDate = function (dt) {\n  var self = this; // 現在日時を取得\n\n  var y = dt.getFullYear();\n  var m = dt.getMonth() + 1;\n  var d = dt.getDate();\n  var format = y + '年' + m + '月' + d + '日'; // 出力先のセレクタ\n\n  var targetID = document.querySelector('.js-project-today');\n  self.showDate(format, targetID);\n};\n/**\n * [getDiffDate 締め切り日までの日数の取得]\n * @returns {void}\n */\n\n\ndisplayProject.prototype.getDiffDate = function () {\n  var self = this; // 現在日時\n\n  var today = Date.now(); // 締め切り日時を取得し、数値に変換\n\n  var deadlineDate = self.inputArr.find(function (item) {\n    return item.label === 'to';\n  }).data;\n  var deadline = Date.parse(deadlineDate); // 差の日数を計算\n\n  var diffDays = Math.ceil((deadline - today) / 86400000); // 小数点以下を切り上げ\n  // 出力先のセレクタ\n\n  var targetID = document.querySelector('.js-project-left_day');\n  self.showDate(diffDays, targetID);\n};\n/**\n * [showDate 取得した日付の表示]\n  * @param   {Number} dt 日付\n * @param   {Object} targetID 対象のDOM\n * @returns {void}\n */\n\n\ndisplayProject.prototype.showDate = function (dt, targetID) {\n  var self = this;\n  var target = targetID;\n  target.innerHTML = dt;\n};\n/**\n * [setDataItem プロジェクト情報の表示]\n * @returns {void}\n */\n\n\ndisplayProject.prototype.setDataItem = function () {\n  var self = this;\n  self.inputArr.find(function (item) {\n    if (item.label === 'from') {\n      self.startTd.innerHTML = item.data;\n    } else if (item.label === 'to') {\n      self.goalTd.innerHTML = item.data;\n    } else if (item.label === 'total') {\n      self.totalItem.innerHTML = item.data;\n    }\n\n    ;\n  }); // 達成枚数/残り枚数の表示\n\n  if (localStorage.getItem('pages')) {\n    var inputPages = JSON.parse(localStorage.getItem('pages'));\n    var total = parseInt(self.inputArr.find(function (item) {\n      return item.label === 'total';\n    }).data);\n    var leftPages = Math.ceil(total - inputPages);\n    var leftTarget = document.querySelector('.js-project-left_page'); // 「今日までの達成数」を表示\n\n    nokoriPage(inputPages); // 「残り枚数」を表示\n\n    leftTarget.innerHTML = leftPages;\n  }\n\n  ; // 明日以降の目標数の表示\n\n  if (localStorage.getItem('days')) {\n    var inputDays = JSON.parse(localStorage.getItem('days'));\n    var targetID = document.querySelector('.js-project-target');\n    setNumberPage(leftPages, inputDays, targetID);\n  }\n\n  ;\n}; // 今日折った枚数を保存\n\n\nfunction saveTodayPages() {\n  var jsonData;\n  var today = parseInt(document.querySelector('.js-project-done_today').value);\n\n  if (localStorage.getItem('pages')) {\n    // pagesのデータが既に存在している場合\n    var pagesData = JSON.parse(localStorage.getItem('pages'));\n    var newItems = pagesData + today;\n    localStorage.setItem('pages', newItems);\n    return newItems;\n  } else {\n    // pagesのデータが空の場合\n    jsonData = JSON.stringify(today);\n    localStorage.setItem('pages', jsonData);\n    return today;\n  }\n}\n\n; // 残り枚数を表示するだけのfunc\n\nfunction nokoriPage(pages) {\n  if (!pages) var pages = JSON.parse(localStorage.getItem('pages'));\n  var doneTarget = document.querySelector('.js-project-done_page');\n  doneTarget.innerHTML = pages;\n}\n\n;\n\n//# sourceURL=webpack://task_2022/./src/sub.js?");

/***/ }),

/***/ "./src/mystyle.scss":
/*!**************************!*\
  !*** ./src/mystyle.scss ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://task_2022/./src/mystyle.scss?");

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
/******/ 			// no module.id needed
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
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;