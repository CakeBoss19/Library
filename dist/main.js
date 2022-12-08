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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getValues\": () => (/* binding */ getValues)\n/* harmony export */ });\n\nconst elements = document.getElementById('form').elements;\n\nfunction checkForErrors(form_elements) {\n  form_elements\n}\n\n\nfunction getValues() {\n  \n  const array = [];\n  for(let i = 0; i < elements.length; i++) {\n    array.push(elements[i].value);\n  }\n  if(!elements[0].value) {\n      inputError();\n      return false;\n    }\n  return array;\n}\n\n\n//# sourceURL=webpack://library/./src/formActions.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _formActions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./formActions */ \"./src/formActions.js\");\n/* harmony import */ var _libraryActions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./libraryActions */ \"./src/libraryActions.js\");\n/* harmony import */ var _displayController__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./displayController */ \"./src/displayController.js\");\n\n\n\n\nwindow.addEventListener('load', () => {\n  // Connection to the form's submit button;\n  const submitButton = document.getElementById('submit');\n  submitButton.addEventListener('click', () => {\n    Form.checkForErrors(form.elements);\n    _libraryActions__WEBPACK_IMPORTED_MODULE_1__.Library.addBookToLibrary(values);\n    _displayController__WEBPACK_IMPORTED_MODULE_2__.Display.showLibrary();\n  })\n  console.log('woa it worked');\n})\n\n\n\n\n\n\nsubmit_btn.addEventListener('click', ()=>{\n  let book = createBookObject(form.elements);\n  if(!book.title) { // checks if title was left empty\n    inputTitleErr();\n    return false; // ensures the form  will not be submitted \n  } else {\n    addBookToLibrary(book);\n  };\n  toggleForm();\n  displayLibrary();\n  return;\n});\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n// Set Global Variables\nconst form_container = document.querySelector('.form_container');\nconst form = document.getElementById('form');\nconst form_btn = document.querySelector('#form-btn');\nconst submit_btn = document.querySelector('#submit');\nconst cancel_btn = document.querySelector('#cancel-form');\nconst input_focus = document.querySelector('input[id=\"title\"]');\nconst buttons = document.querySelectorAll('button');\nconst library_grid = document.getElementById('library-grid');\nconst myLibrary = [];\n\n// Creates p elements within a div to display information\nfunction buildTile(obj){\n let book_div = document.createElement('div');\n let title = document.createElement('p');\n let author = document.createElement('p');\n let pageNum = document.createElement('p');\n let read = document.createElement('p');\n let omit = document.createElement('p');\n book_div.append(title, author, pageNum, read, omit);\n let nodes = book_div.childNodes; // creates a nodeList of each p element created and appended\n giveValues(obj, nodes);\n library_grid.appendChild(book_div).classList = 'book-div';\n};\n\n// Attaches the information from the book object onto it's DOM element\nfunction giveValues(obj, arr){\n  for(i = 0; i < arr.length; i++){\n   let key = Object.keys(obj)[i];\n   let keyValue = Object.values(obj)[i];\n   (key === 'remove') ? createButton(arr[i]) : arr[i].textContent = keyValue;\n   arr[i].classList = `flex flex-${key}`;\n   (key === 'read') ? createSpan(arr[i], keyValue) : false;\n  }; return\n};  \n\n// Creates a span for the check or X mark \nfunction createSpan(node, keyValue){\n  let span = document.createElement('span');\n  node.appendChild(span).classList = `span-${keyValue}`;\n};\n\n// Assigns datakeys and the event listeners corresponding to those keys\nfunction assignDatakeys(){\n  let remove_btns = document.querySelectorAll('.remove-btn');\n  let read_btns = document.querySelectorAll('.flex-read');\n  for(let i = 0; i < remove_btns.length; i++){\n    remove_btns[i].dataset.key = `${i}`;\n    remove_btns[i].addEventListener('click', () => {\n      removeBook(remove_btns[i].dataset.key);\n    });\n  };\n  for(let i = 0; i < read_btns.length; i++){\n    read_btns[i].dataset.key = `${i}`;\n    read_btns[i].addEventListener('click', () => {\n      toggleReadStatus(read_btns[i].dataset.key);\n    });\n  };\n};\n\n// Allows for the 'Read' status on an object to be switched to either no or yes\nfunction toggleReadStatus(index){\n  (myLibrary[index].read === 'Yes') ? myLibrary[index].read = 'No' : myLibrary[index].read = 'Yes';\n  displayLibrary();\n};\n\n\n // Removes a book from the library array\nfunction removeBook(index){\n  myLibrary.splice(index, 1);\n  displayLibrary();\n};\n\n// Creates a button \nfunction createButton(tag){\n  let button = document.createElement('button');\n   tag.appendChild(button).classList = 'remove-btn';\n    button.textContent = 'Del';\n};\n\n // Book Object Contructor\nfunction Book(title, author, page, read){\n  this.title = title,\n  this.author = author,\n  this.number = page,\n  this.read = read;\n  this.remove = '';\n};\n\nBook.prototype.readToggle = function(){\n  console.log(this)\n  (this.read === 'yes') ? this.read = 'no' : this.read = 'yes';\n  displayLibrary();\n  return;\n};\n\n // Adds new Book object to myLibrary array\nfunction addBookToLibrary(obj){\n  deleteDupes(obj);\n  myLibrary.push(obj);\n};\n\n // If multiple books sharing the same Title are entered, delete old book\nfunction deleteDupes(obj){\n  for(let i = 0; i < myLibrary.length; i++){\n    if(obj.title === myLibrary[i].title){\n      myLibrary.splice(i, 1);\n    };\n  }; \n};\n // Switches form's visibility between 'hidden' and 'visibile'\nfunction toggleForm(){\n  form.reset();\n  form_container.classList.toggle('hidden');\n  return;\n};\n\n // Clears the existing grid of all elements\nfunction clearGrid(){\n  let book_divs = document.querySelectorAll('.book-div');\n  book_divs.forEach((element)=>{\n    if(element !== book_divs[0]){\n      element.remove();\n    };\n  }); \n}; \n\n // Runs through myLibrary array and displays information\nfunction displayLibrary(){\n  clearGrid();\n  myLibrary.forEach((book) => {\n    buildTile(book);\n  });\n  assignDatakeys();\n};\n\n// Returns the value of the checked radio box\nfunction radioCheck(){\n  let radios = document.getElementsByName('read');\n  for(let i = 0; i < radios.length; i++){\n    if(radios[i].checked){\n      return radios[i].value;\n    };\n  }; \n};\n\n // Creates a book object from form inputs\nfunction getInfo(obj){\n  let array = [];\n  for(let i = 1; i < obj.length; i++){\n    array.push(obj[i].value);\n  };\n  let book = new Book(array[0], array[1], array[2], radioCheck()) // inputs checked radio input's value\n  return book;\n};\n\n // Appends an empty title input warning\nfunction inputTitleErr(){\n  let label = document.querySelector('label[for=\"title\"]')\n  if(label.lastElementChild){return};\n  let p = document.createElement('p');\n  label.appendChild(p).classList.add = 'inputTitleErr_p';\n  p.textContent = '*title is empty';\n};\n\n // removes the warning label as you type into the input\nfunction checkWarning(){\n  let label = document.querySelector('label[for=\"title\"]')\n  if(label.lastElementChild){\n    label.lastElementChild.remove();\n  } return;\n};\n\nsubmit_btn.addEventListener('click', ()=>{\n  let book = getInfo(form.elements);\n  if((book.title === '' || book.title === undefined)){ // checks if title was left empty\n    inputTitleErr();\n    return false; // ensures the form  will not be submitted \n  } else {\n    addBookToLibrary(book);\n  };\n  toggleForm();\n  displayLibrary();\n  return;\n});\n\n//# sourceURL=webpack://library/./src/index.js?");

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