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

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _render_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./render.js */ \"./src/render.js\");\n/* harmony import */ var _lists_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./lists.js */ \"./src/lists.js\");\n\n\n\n(0,_render_js__WEBPACK_IMPORTED_MODULE_0__.default)();\n(0,_lists_js__WEBPACK_IMPORTED_MODULE_1__.default)();\n\n//# sourceURL=webpack://todo-list/./src/index.js?");

/***/ }),

/***/ "./src/lists.js":
/*!**********************!*\
  !*** ./src/lists.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst lists = () => {\n    const listMap = new Map();\n\n    let listIndex = 0;\n    const lists = document.getElementById('lists');\n    const newListBtn = document.getElementById('new-list-icon');\n    newListBtn.addEventListener('click', () => {\n        const newListInput = document.createElement('input');\n        newListInput.classList.add('new-list');\n        newListInput.value = 'New List';\n        lists.appendChild(newListInput);\n        newListInput.focus();\n        newListInput.select();\n        //make input become button\n        newListInput.addEventListener('keyup', (event) => {\n            if (event.key === 'Escape' || event.key === \"Enter\") {\n                newListInput.blur();\n            }\n        });\n        newListInput.addEventListener('blur', (event) => {\n            event.preventDefault();\n            const newList = document.createElement('button');\n            newList.classList.add('list');\n            newList.textContent = newListInput.value;\n            listMap.set(listIndex, newList.textContent);\n            lists.removeChild(lists.lastChild);\n            lists.appendChild(newList);\n        });\n        listIndex++;\n    })\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (lists);\n\n//# sourceURL=webpack://todo-list/./src/lists.js?");

/***/ }),

/***/ "./src/render.js":
/*!***********************!*\
  !*** ./src/render.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst render = () => {\n    //render header\n    const content = document.getElementById('content');\n    const app = document.createElement('div');\n    app.id = 'app';\n    content.appendChild(app);\n\n    const header = document.createElement('header');\n    header.id = 'header';\n    const headerText = document.createElement('span');\n    headerText.id = 'header-text';\n    headerText.textContent = 'To. Do.';\n    const githubLink = document.createElement('a');\n    githubLink.href = 'https://github.com/liwll';\n    const githubIcon = document.createElement('ion-icon');\n    githubIcon.id = 'github-icon';\n    githubIcon.setAttribute('name', 'logo-github');\n\n    app.appendChild(header);\n    header.appendChild(headerText);\n    header.appendChild(githubLink);\n    githubLink.appendChild(githubIcon);\n\n    //render sidebar\n    const sidebar = document.createElement('div');\n    sidebar.id = 'sidebar';\n    const sidebarTop = document.createElement('div');\n    sidebarTop.id = 'sidebar-top';\n    const sideText = document.createElement('span');\n    sideText.id = 'side-text';\n    sideText.textContent = 'Lists';\n    const newListBtn = document.createElement('ion-icon');\n    newListBtn.id = 'new-list-icon';\n    newListBtn.setAttribute('name', 'add-circle');\n    const lists = document.createElement('div');\n    lists.id = 'lists';\n\n    app.appendChild(sidebar);\n    sidebar.appendChild(sidebarTop);\n    sidebarTop.appendChild(sideText);\n    sidebarTop.appendChild(newListBtn);\n    sidebar.appendChild(lists);\n\n\n    //render todo-list\n    const todoContainer = document.createElement('div');\n    todoContainer.id = 'todo-container';\n    const listSettings = document.createElement('div');\n    listSettings.id = 'list-settings';\n    const listTitle = document.createElement('div');\n    listTitle.id = 'list-title';\n    const editIcon = document.createElement('ion-icon');\n    editIcon.id = 'edit-icon';\n    editIcon.setAttribute('name', 'pencil');\n    const todoList = document.createElement('div');\n    todoList.id = 'todo-list';\n\n    app.appendChild(todoContainer);\n    todoContainer.appendChild(listSettings);\n    listSettings.appendChild(listTitle);\n    listSettings.appendChild(editIcon);\n    todoContainer.appendChild(todoList);\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (render);\n\n//# sourceURL=webpack://todo-list/./src/render.js?");

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