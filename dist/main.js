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

/***/ "./src/eventListeners.js":
/*!*******************************!*\
  !*** ./src/eventListeners.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _list_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./list.js */ \"./src/list.js\");\n\n\nconst newListListener = () => {\n    const lists = document.getElementById('lists');\n    const newListBtn = document.getElementById('new-list-icon');\n    newListBtn.addEventListener('click', () => {\n        const listInput = document.createElement('input');\n        listInput.classList.add('new-list');\n        listInput.autocomplete = 'off';\n        listInput.value = 'New List';\n        lists.appendChild(listInput);\n        // focus and select input after appending\n        listInput.focus();\n        listInput.select();\n        // make input blur when escape or enter is pressed\n        listInput.addEventListener('keyup', (event) => {\n            if (event.key === 'Escape' || event.key === \"Enter\") {\n                listInput.blur();\n            }\n        });\n        // make input become button when blurred\n        listInput.addEventListener('blur', (event) => {\n            event.preventDefault();\n            if (listInput.value != '') {\n                const listBtn = document.createElement('button');\n                listBtn.classList.add('list');\n                listBtn.textContent = listInput.value;\n                const list = new _list_js__WEBPACK_IMPORTED_MODULE_0__.default(listInput.value);\n                //Add listener to button\n                listBtn.addEventListener('click', () => {\n                    clearTodo();\n                    renderTodo(list);\n                    listTitleListener(list, listBtn);\n                    newTaskListener(list);\n                });\n                //Add to DOM\n                lists.removeChild(lists.lastChild);\n                lists.appendChild(listBtn);\n            }\n        });\n    });\n}\n\nconst newTaskListener = (list) => {\n    const newTaskBtn= document.getElementById('new-task');\n    newTaskBtn.addEventListener('click', () => {\n        list.createTask();\n    });\n}\n\nfunction listTitleListener(list, listBtn) {\n    const listTitle = document.getElementById('list-title');\n    const listTitleEdit = document.getElementById('list-title-edit');\n    \n    listTitle.onclick = () => {\n        listTitle.style = 'display: none'\n        listTitleEdit.value = list.getName();\n        listTitleEdit.style = 'display: block'\n        listTitleEdit.focus();\n        listTitleEdit.select();\n        listTitleEdit.onkeyup = (event) => {\n            if (event.key === 'Escape' || event.key === \"Enter\") {\n                listTitleEdit.blur();\n            }\n        }\n        listTitleEdit.onblur = (event) => {\n            event.preventDefault();\n            if (listTitleEdit.value != '') {\n                list.setName(listTitleEdit.value);\n                listTitle.textContent = list.getName();\n                listBtn.textContent = list.getName();\n            }\n            listTitleEdit.style = 'display: none'\n            listTitle.style = 'display: block'\n        }\n    }\n}\n\nfunction renderTodo(list) {\n    const todoList = document.getElementById('todo-list');\n\n    //render title\n    const listTitle = document.getElementById('list-title');\n    listTitle.textContent = list.getName();\n\n    //render list\n    if (list.getNumTasks() != 0) {\n        list.renderAll();\n    }\n    \n    //render new-task button\n    const newTask = document.createElement('button');\n    newTask.id = 'new-task';\n    todoList.appendChild(newTask);\n\n    //render new-task icon\n    const newTaskIcon = document.createElement('ion-icon')\n    newTaskIcon.id = 'new-task-icon';\n    newTaskIcon.name = 'add';\n    newTask.appendChild(newTaskIcon);\n}\n\n//Helper functions\nfunction clearTodo() {\n    const todoList = document.getElementById('todo-list');\n    while (todoList.firstChild) (todoList.removeChild(todoList.firstChild));\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (newListListener);\n\n//# sourceURL=webpack://todo-list/./src/eventListeners.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _render_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./render.js */ \"./src/render.js\");\n/* harmony import */ var _eventListeners__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./eventListeners */ \"./src/eventListeners.js\");\n\n\n\n(0,_render_js__WEBPACK_IMPORTED_MODULE_0__.default)();\n(0,_eventListeners__WEBPACK_IMPORTED_MODULE_1__.default)();\n\n//# sourceURL=webpack://todo-list/./src/index.js?");

/***/ }),

/***/ "./src/list.js":
/*!*********************!*\
  !*** ./src/list.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _task_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./task.js */ \"./src/task.js\");\n\n\nclass List {\n    constructor(name) {\n        this.name = name;\n        this.tasks = [];\n    }\n    currentId = 0;\n\n    getName() {\n        return this.name;\n    }\n\n    setName(name) {\n        this.name = name;\n    } \n\n    getNumTasks() {\n        return this.tasks.length;\n    }\n\n    createTask() {\n        const newTask = new _task_js__WEBPACK_IMPORTED_MODULE_0__.default();\n        newTask.setId(this.currentId);\n        newTask.createContainer();\n        newTask.renderExpandedTask();\n        this.tasks.push(newTask);\n        this.currentId++;\n    }\n\n    filterDeletedTasks() {\n        this.tasks = this.tasks.filter((task) => {\n            return task.getId() !== 'deleted';\n        });\n    }\n\n    renderAll() {\n        this.filterDeletedTasks();\n        this.tasks.forEach((task) => {\n            task.createContainer();\n            task.isEditing() ? task.renderExpandedTask() : task.renderTask();\n        });\n    }\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (List);\n\n//# sourceURL=webpack://todo-list/./src/list.js?");

/***/ }),

/***/ "./src/render.js":
/*!***********************!*\
  !*** ./src/render.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst render = () => {\n    //render header\n    const content = document.getElementById('content');\n    const app = document.createElement('div');\n    app.id = 'app';\n    content.appendChild(app);\n\n    const header = document.createElement('header');\n    header.id = 'header';\n    const headerText = document.createElement('span');\n    headerText.id = 'header-text';\n    headerText.textContent = 'To. Do.';\n    const githubLink = document.createElement('a');\n    githubLink.href = 'https://github.com/liwll';\n    const githubIcon = document.createElement('ion-icon');\n    githubIcon.id = 'github-icon';\n    githubIcon.setAttribute('name', 'logo-github');\n\n    app.appendChild(header);\n    header.appendChild(headerText);\n    header.appendChild(githubLink);\n    githubLink.appendChild(githubIcon);\n\n    //render sidebar\n    const sidebar = document.createElement('div');\n    sidebar.id = 'sidebar';\n    const sidebarTop = document.createElement('div');\n    sidebarTop.id = 'sidebar-top';\n    const sideText = document.createElement('span');\n    sideText.id = 'side-text';\n    sideText.textContent = 'Lists';\n    const newListBtn = document.createElement('ion-icon');\n    newListBtn.id = 'new-list-icon';\n    newListBtn.setAttribute('name', 'add-circle');\n    const lists = document.createElement('div');\n    lists.id = 'lists';\n\n    app.appendChild(sidebar);\n    sidebar.appendChild(sidebarTop);\n    sidebarTop.appendChild(sideText);\n    sidebarTop.appendChild(newListBtn);\n    sidebar.appendChild(lists);\n\n\n    //render todo-list\n    const todoContainer = document.createElement('div');\n    todoContainer.id = 'todo-container';\n    app.appendChild(todoContainer);\n\n    const listHeader = document.createElement('div');\n    listHeader.id = 'list-header';\n    todoContainer.appendChild(listHeader);\n\n    const listTitle = document.createElement('div');\n    listTitle.id = 'list-title';\n    listHeader.appendChild(listTitle);\n\n    const listTitleEdit = document.createElement('input');\n    listTitleEdit.id = 'list-title-edit';\n    listTitleEdit.autocomplete = 'off';\n    listHeader.appendChild(listTitleEdit);\n\n    const todoList = document.createElement('div');\n    todoList.id = 'todo-list';\n    todoContainer.appendChild(todoList);\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (render);\n\n//# sourceURL=webpack://todo-list/./src/render.js?");

/***/ }),

/***/ "./src/task.js":
/*!*********************!*\
  !*** ./src/task.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n//Helper functions for calculating date\nDate.prototype.toDateInputValue = (function() {\n    var local = new Date(this);\n    local.setMinutes(this.getMinutes() - this.getTimezoneOffset());\n    return local.toJSON().slice(0,10);\n});\nDate.prototype.toDateInputValueOffset = (function(years) {\n    const minutes = years * 365 * 24 * 60;\n    var local = new Date(this);\n    local.setMinutes(this.getMinutes() - this.getTimezoneOffset() + minutes);\n    return local.toJSON().slice(0,10);\n});\n\nclass Task {\n    constructor(name, date, priority, description) {\n        this.name = name;\n        this.date = date;\n        this.priority = priority;\n        this.description = description;\n    }\n    #isEditing = true;\n    #id = -1;\n\n    getId() {\n        return this.#id;\n    }\n\n    setId(id) {\n        this.#id = id;\n    }\n\n    isEditing() {\n        return this.#isEditing;\n    }\n\n    //Container must always be created before rendering task\n    createContainer() {\n        const todoList = document.getElementById('todo-list');\n        const newTask = document.getElementById('new-task');\n        const taskContainer = document.createElement('div');\n        taskContainer.classList.add('task-container');\n        taskContainer.id = 'task-' + this.#id;\n        todoList.insertBefore(taskContainer, newTask);\n    }\n\n    renderTask() {\n        const taskContainer = document.getElementById(`task-${this.#id}`);\n        \n        const task = document.createElement('div');\n        task.classList.add('task');\n        task.classList.add(`task-${this.priority}`);\n        taskContainer.appendChild(task);\n        \n        //Append elements to left side of task\n        const taskLeft = document.createElement('div');\n        taskLeft.classList.add('task-left');\n        task.appendChild(taskLeft);\n    \n        const checkIcon = document.createElement('ion-icon');\n        checkIcon.classList.add('check-icon');\n        checkIcon.name = 'checkbox';\n        taskLeft.appendChild(checkIcon);\n    \n        if (this.#isEditing) {\n            const taskName = document.createElement('input');\n            taskName.classList.add('task-name-edit');\n            taskName.value = this.name === undefined ? '' : this.name;\n            taskName.addEventListener('change', () => {\n                this.name = taskName.value;\n            });\n            taskLeft.appendChild(taskName);\n        } else {\n            const taskName = document.createElement('button');\n            taskName.classList.add('task-name');\n            taskName.textContent = this.name;\n            taskName.addEventListener('click', () => {\n                while(taskContainer.firstChild) {\n                    taskContainer.removeChild(taskContainer.firstChild);\n                };\n                this.renderExpandedTask();\n            });\n            taskLeft.appendChild(taskName);\n        }\n        \n        //Append elements to right side of task\n        const taskRight = document.createElement('div');\n        taskRight.classList.add('task-right');\n        task.appendChild(taskRight);\n    \n        const date = document.createElement('button');\n        date.classList.add('date');\n        taskRight.appendChild(date);\n    \n        if (this.#isEditing) {\n            const dateInput = document.createElement('input');\n            dateInput.classList.add('date-edit');\n            dateInput.type = 'date'\n            dateInput.min = new Date().toDateInputValue();\n            dateInput.max = new Date().toDateInputValueOffset(50);\n            dateInput.value = this.date;\n            dateInput.addEventListener('change', () => {\n                this.date = dateInput.value;\n            });\n            date.appendChild(dateInput);\n        } else {\n            const dateText = document.createElement('span');\n            dateText.classList.add('date-text');\n            dateText.textContent = this.date;\n            date.appendChild(dateText);\n\n            const dateIcon = document.createElement('ion-icon');\n            dateIcon.classList.add('date-icon');\n            dateIcon.name = 'calendar-clear';\n            date.appendChild(dateIcon);\n        }\n    \n        const delIcon = document.createElement('ion-icon');\n        delIcon.classList.add('del-icon');\n        delIcon.id = `del-${this.#id}`;\n        delIcon.name = 'trash';\n        delIcon.addEventListener('click', () => {\n            while (taskContainer.firstChild) {\n                taskContainer.removeChild(taskContainer.firstChild);\n            }\n            taskContainer.parentNode.removeChild(taskContainer);\n            this.setId('deleted');\n        });\n        taskRight.appendChild(delIcon);\n\n        return task;\n    }\n\n    renderExpandedTask() {\n        //Render simple view\n        const task = this.renderTask();\n\n        const taskContainer = document.getElementById(`task-${this.#id}`);\n        //Have to remove and append for correct order\n        taskContainer.removeChild(task);\n        taskContainer.appendChild(task);\n\n        //Render expanded view\n        const taskExpanded = document.createElement('div');\n        taskExpanded.classList.add('task-expanded');\n        taskExpanded.classList.add(`task-expanded-${this.priority}`);\n        taskContainer.appendChild(taskExpanded);\n    \n        const priority = document.createElement('div');\n        priority.classList.add('priority');\n        taskExpanded.appendChild(priority);\n\n        if (this.#isEditing) {\n            const priorityHi = document.createElement('button');\n            priorityHi.classList.add('priority-hi');\n            priorityHi.textContent = 'High Priority';\n            priorityHi.addEventListener('click', () => {\n                this.priority = 'hi';\n                priorityMid.className = 'priority-mid';\n                priorityLow.className = 'priority-low';\n                priorityHi.className = 'priority-hi-active';\n                taskExpanded.className = `task-expanded-${this.priority}`;\n                task.className = `task-${this.priority}`;\n            });\n            priority.appendChild(priorityHi);\n        \n            const priorityMid = document.createElement('button');\n            priorityMid.classList.add('priority-mid');\n            priorityMid.textContent = 'Mid Priority';\n            priorityMid.addEventListener('click', () => {\n                this.priority = 'mid';\n                priorityHi.className = 'priority-hi';\n                priorityLow.className = 'priority-low';\n                priorityMid.className = 'priority-mid-active';\n                taskExpanded.className = `task-expanded-${this.priority}`;\n                task.className = `task-${this.priority}`;\n            });\n            priority.appendChild(priorityMid);\n        \n            const priorityLow = document.createElement('button');\n            priorityLow.classList.add('priority-low');\n            priorityLow.textContent = 'Low Priority';\n            priorityLow.addEventListener('click', () => {\n                this.priority = 'low';\n                priorityHi.className = 'priority-hi';\n                priorityMid.className = 'priority-mid';\n                priorityLow.className = 'priority-low-active';\n                taskExpanded.className = `task-expanded-${this.priority}`;\n                task.className = `task-${this.priority}`;\n            });\n            priority.appendChild(priorityLow);\n        } else {\n            switch (this.priority) {\n                case 'hi':\n                    const priorityHi = document.createElement('button');\n                    priorityHi.classList.add('priority-hi-active');\n                    priorityHi.textContent = 'High Priority';\n                    priority.appendChild(priorityHi);\n                    break;\n                case 'mid':\n                    const priorityMid = document.createElement('button');\n                    priorityMid.classList.add('priority-mid-active');\n                    priorityMid.textContent = 'Mid Priority';\n                    priority.appendChild(priorityMid);\n                    break;\n                case 'low':\n                    const priorityLow = document.createElement('button');\n                    priorityLow.classList.add('priority-low-active');\n                    priorityLow.textContent = 'Low Priority';\n                    priority.appendChild(priorityLow);\n                    break;\n            };\n        }\n    \n        if (this.#isEditing) {\n            const description = document.createElement('textarea');\n            description.classList.add('description-edit');\n            description.value = this.description === undefined ? '' : this.description;\n            description.addEventListener('change', () => {\n                this.description = description.value;\n            })\n            taskExpanded.appendChild(description);\n        } else {\n            const description = document.createElement('div');\n            description.classList.add('description');\n            description.textContent = this.description;\n            taskExpanded.appendChild(description);\n        }\n    \n        const descriptionBtns = document.createElement('div');\n        descriptionBtns.classList.add('description-btns');\n        taskExpanded.appendChild(descriptionBtns);\n    \n        if (this.#isEditing) {\n            const finishBtn = document.createElement('button');\n            finishBtn.classList.add('description-btn');\n            finishBtn.textContent = 'Finish';\n            finishBtn.addEventListener('click', () => {\n                this.#isEditing = false;\n                taskContainer.removeChild(taskExpanded);\n                taskContainer.removeChild(task);\n                this.renderExpandedTask();\n            });\n            descriptionBtns.appendChild(finishBtn);\n        } else {\n            const editBtn = document.createElement('button');\n            editBtn.classList.add('description-btn');\n            editBtn.textContent = 'Edit';\n            editBtn.addEventListener('click', () => {\n                this.#isEditing = true;\n                taskContainer.removeChild(taskExpanded);\n                taskContainer.removeChild(task);\n                this.renderExpandedTask();\n            });\n            descriptionBtns.appendChild(editBtn);\n        }\n\n        if (!this.#isEditing) {\n            const hideBtn = document.createElement('button');\n            hideBtn.classList.add('description-btn');\n            hideBtn.textContent = 'Hide';\n            hideBtn.addEventListener('click', () => {\n                taskContainer.removeChild(taskExpanded);\n            });\n            descriptionBtns.appendChild(hideBtn);\n        }\n    }\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Task);\n\n//# sourceURL=webpack://todo-list/./src/task.js?");

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