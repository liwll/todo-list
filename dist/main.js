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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _todoListener_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./todoListener.js */ \"./src/todoListener.js\");\n\n\nconst lists = () => {\n    const listMap = new Map();\n\n    let listIndex = 0;\n    const lists = document.getElementById('lists');\n    const newListBtn = document.getElementById('new-list-icon');\n    newListBtn.addEventListener('click', () => {\n        const newListInput = document.createElement('input');\n        newListInput.classList.add('new-list');\n        newListInput.value = 'New List';\n        lists.appendChild(newListInput);\n        // focus and select input after appending\n        newListInput.focus();\n        newListInput.select();\n        // make input blur when escape or enter is pressed\n        newListInput.addEventListener('keyup', (event) => {\n            if (event.key === 'Escape' || event.key === \"Enter\") {\n                newListInput.blur();\n            }\n        });\n        // make input become button when blurred\n        newListInput.addEventListener('blur', (event) => {\n            event.preventDefault();\n            const newList = document.createElement('button');\n            newList.classList.add('list');\n            newList.textContent = newListInput.value;\n            //Add listener to button\n            (0,_todoListener_js__WEBPACK_IMPORTED_MODULE_0__.default)(newList);\n            listMap.set(listIndex, newList.textContent);\n            //Add to DOM\n            lists.removeChild(lists.lastChild);\n            lists.appendChild(newList);\n        });\n        listIndex++;\n        \n    })\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (lists);\n\n//# sourceURL=webpack://todo-list/./src/lists.js?");

/***/ }),

/***/ "./src/newTaskListener.js":
/*!********************************!*\
  !*** ./src/newTaskListener.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n//Helper functions for calculating date\nDate.prototype.toDateInputValue = (function() {\n    var local = new Date(this);\n    local.setMinutes(this.getMinutes() - this.getTimezoneOffset());\n    return local.toJSON().slice(0,10);\n});\nDate.prototype.toDateInputValueOffset = (function(years) {\n    const minutes = years * 365 * 24 * 60;\n    var local = new Date(this);\n    local.setMinutes(this.getMinutes() - this.getTimezoneOffset() + minutes);\n    return local.toJSON().slice(0,10);\n});\n\nfunction renderExpandedTask(editMode) {\n    if (editMode) {\n        const todoList = document.getElementById('todo-list');\n        const newTask = document.getElementById('new-task');\n\n        //Render simple task\n        const task = document.createElement('div');\n        task.classList.add('task');\n        todoList.insertBefore(task, newTask);\n        \n        //Append elements to left side of task\n        const taskLeft = document.createElement('div');\n        taskLeft.classList.add('task-left');\n        task.appendChild(taskLeft);\n    \n        const checkIcon = document.createElement('ion-icon');\n        checkIcon.classList.add('check-icon');\n        checkIcon.name = 'checkbox';\n        taskLeft.appendChild(checkIcon);\n    \n        const taskName = document.createElement('input');\n        taskName.classList.add('task-name-edit');\n        taskLeft.appendChild(taskName);\n        \n        //Append elements to right side of task\n        const taskRight = document.createElement('div');\n        taskRight.classList.add('task-right');\n        task.appendChild(taskRight);\n    \n        const date = document.createElement('button');\n        date.classList.add('date');\n        taskRight.appendChild(date);\n\n        // const dateIcon = document.createElement('ion-icon');\n        // dateIcon.classList.add('date-icon');\n        // dateIcon.name = 'calendar';\n        // date.appendChild(dateIcon);\n\n        const dateEdit = document.createElement('input');\n        dateEdit.classList.add('date-edit');\n        dateEdit.type = 'date'\n        dateEdit.min = new Date().toDateInputValue();\n        dateEdit.max = new Date().toDateInputValueOffset(50);\n        date.appendChild(dateEdit);\n\n        const delIcon = document.createElement('ion-icon');\n        delIcon.classList.add('del-icon');\n        delIcon.name = 'trash';\n        taskRight.appendChild(delIcon);\n\n        //Render expanded part\n        const taskExpanded = document.createElement('div');\n        taskExpanded.classList.add('task-expanded');\n        todoList.insertBefore(taskExpanded, newTask);\n\n        const priority = document.createElement('div');\n        priority.classList.add('priority');\n        taskExpanded.appendChild(priority);\n\n        const priorityHi = document.createElement('button');\n        priorityHi.classList.add('priority-hi');\n        priorityHi.textContent = 'High Priority';\n        priority.appendChild(priorityHi);\n\n        const priorityMid = document.createElement('button');\n        priorityMid.classList.add('priority-mid');\n        priorityMid.textContent = 'Mid Priority';\n        priority.appendChild(priorityMid);\n\n        const priorityLow = document.createElement('button');\n        priorityLow.classList.add('priority-low');\n        priorityLow.textContent = 'Low Priority';\n        priority.appendChild(priorityLow);\n\n        const description = document.createElement('textarea');\n        description.classList.add('description-edit');\n        description.textContent = '';\n        taskExpanded.appendChild(description);\n\n        const descriptionBtns = document.createElement('div');\n        descriptionBtns.classList.add('description-btns');\n        taskExpanded.appendChild(descriptionBtns);\n\n        const editBtn = document.createElement('button');\n        editBtn.classList.add('description-btn');\n        editBtn.textContent = 'Edit';\n        descriptionBtns.appendChild(editBtn);\n\n        const hideBtn = document.createElement('button');\n        hideBtn.classList.add('description-btn');\n        hideBtn.textContent = 'Hide';\n        descriptionBtns.appendChild(hideBtn);\n    } else {\n        return;\n    }\n}\n\n\nconst tasks = [];\n\nconst newTaskListener = () => {\n    const newTask = document.getElementById('new-task');\n    newTask.addEventListener('click', () => {\n        renderExpandedTask(true);\n    });\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (newTaskListener);\n\n//# sourceURL=webpack://todo-list/./src/newTaskListener.js?");

/***/ }),

/***/ "./src/render.js":
/*!***********************!*\
  !*** ./src/render.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst render = () => {\n    //render header\n    const content = document.getElementById('content');\n    const app = document.createElement('div');\n    app.id = 'app';\n    content.appendChild(app);\n\n    const header = document.createElement('header');\n    header.id = 'header';\n    const headerText = document.createElement('span');\n    headerText.id = 'header-text';\n    headerText.textContent = 'To. Do.';\n    const githubLink = document.createElement('a');\n    githubLink.href = 'https://github.com/liwll';\n    const githubIcon = document.createElement('ion-icon');\n    githubIcon.id = 'github-icon';\n    githubIcon.setAttribute('name', 'logo-github');\n\n    app.appendChild(header);\n    header.appendChild(headerText);\n    header.appendChild(githubLink);\n    githubLink.appendChild(githubIcon);\n\n    //render sidebar\n    const sidebar = document.createElement('div');\n    sidebar.id = 'sidebar';\n    const sidebarTop = document.createElement('div');\n    sidebarTop.id = 'sidebar-top';\n    const sideText = document.createElement('span');\n    sideText.id = 'side-text';\n    sideText.textContent = 'Lists';\n    const newListBtn = document.createElement('ion-icon');\n    newListBtn.id = 'new-list-icon';\n    newListBtn.setAttribute('name', 'add-circle');\n    const lists = document.createElement('div');\n    lists.id = 'lists';\n\n    app.appendChild(sidebar);\n    sidebar.appendChild(sidebarTop);\n    sidebarTop.appendChild(sideText);\n    sidebarTop.appendChild(newListBtn);\n    sidebar.appendChild(lists);\n\n\n    //render todo-list\n    const todoContainer = document.createElement('div');\n    todoContainer.id = 'todo-container';\n    const listSettings = document.createElement('div');\n    listSettings.id = 'list-settings';\n    const listTitle = document.createElement('div');\n    listTitle.id = 'list-title';\n    const editIcon = document.createElement('ion-icon');\n    editIcon.id = 'edit-icon';\n    editIcon.name = 'pencil';\n    const todoList = document.createElement('div');\n    todoList.id = 'todo-list';\n\n    app.appendChild(todoContainer);\n    todoContainer.appendChild(listSettings);\n    listSettings.appendChild(listTitle);\n    listSettings.appendChild(editIcon);\n    todoContainer.appendChild(todoList);\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (render);\n\n//# sourceURL=webpack://todo-list/./src/render.js?");

/***/ }),

/***/ "./src/todoListener.js":
/*!*****************************!*\
  !*** ./src/todoListener.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _newTaskListener_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./newTaskListener.js */ \"./src/newTaskListener.js\");\n\n\nconst todo = (element) => {\n    element.addEventListener('click', () => {\n        clearTodo(element);\n        renderTodo(element.textContent);\n    });\n}\n\nfunction clearTodo() {\n    const todoList = document.getElementById('todo-list');\n    while (todoList.firstChild) (todoList.removeChild(todoList.firstChild));\n}\n\nfunction renderTodo(title) {\n    const todoList = document.getElementById('todo-list');\n    //render title\n    const listTitle = document.getElementById('list-title');\n    listTitle.textContent = title;\n    \n    //render new-task button\n    const newTask = document.createElement('button');\n    newTask.id = 'new-task';\n    todoList.appendChild(newTask);\n    (0,_newTaskListener_js__WEBPACK_IMPORTED_MODULE_0__.default)();\n\n    //render new-task icon\n    const newTaskIcon = document.createElement('ion-icon')\n    newTaskIcon.id = 'new-task-icon';\n    newTaskIcon.name = 'add';\n    newTask.appendChild(newTaskIcon);\n    \n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (todo);\n\n//# sourceURL=webpack://todo-list/./src/todoListener.js?");

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