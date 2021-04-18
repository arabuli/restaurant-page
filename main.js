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

/***/ "./src/contact.js":
/*!************************!*\
  !*** ./src/contact.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction contact() {\r\n  const contactContainer = document.createElement(\"div\");\r\n  contactContainer.classList.add(\"contact-container\");\r\n  const headerElement = document.createElement(\"h1\");\r\n  headerElement.textContent = \"Contact Us\";\r\n  contactContainer.appendChild(headerElement);\r\n\r\n  //Create Description\r\n  const paragraphElement = document.createElement(\"p\");\r\n  paragraphElement.textContent = \"Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem distinctio culpa libero quo numquam, quae accusamus ducimus quidem voluptatibus dolor itaque mollitia sint! Repellendus exercitationem dolorem omnis repudiandae. Expedita, similique. Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem distinctio culpa libero quo numquam, quae accusamus ducimus quidem voluptatibus dolor itaque mollitia sint! Repellendus exercitationem dolorem omnis repudiandae. Expedita, similique. Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem distinctio culpa libero quo numquam, quae accusamus ducimus quidem voluptatibus dolor itaque mollitia sint! Repellendus exercitationem dolorem omnis repudiandae. Expedita, similique.\";\r\n  contactContainer.appendChild(paragraphElement);\r\n  contactContainer.setAttribute(\"id\", \"maincontiner\");\r\n  return contactContainer;\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (contact);\n\n//# sourceURL=webpack://restaurant_page/./src/contact.js?");

/***/ }),

/***/ "./src/homepage.js":
/*!*************************!*\
  !*** ./src/homepage.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction homePage() {\r\n  //Create Header\r\n  const mainContainer = document.createElement(\"div\");\r\n  mainContainer.classList.add(\"homepage-container\");\r\n  const headerElement = document.createElement(\"h1\");\r\n  headerElement.textContent = \"Restaurant 'Gamarjoba' in middle of Potsdam\";\r\n  mainContainer.appendChild(headerElement);\r\n\r\n  //Create Description\r\n  const paragraphElement = document.createElement(\"p\");\r\n  paragraphElement.textContent = \"Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem distinctio culpa libero quo numquam, quae accusamus ducimus quidem voluptatibus dolor itaque mollitia sint! Repellendus exercitationem dolorem omnis repudiandae. Expedita, similique. Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem distinctio culpa libero quo numquam, quae accusamus ducimus quidem voluptatibus dolor itaque mollitia sint! Repellendus exercitationem dolorem omnis repudiandae. Expedita, similique. Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem distinctio culpa libero quo numquam, quae accusamus ducimus quidem voluptatibus dolor itaque mollitia sint! Repellendus exercitationem dolorem omnis repudiandae. Expedita, similique.\";\r\n  mainContainer.appendChild(paragraphElement);\r\n  mainContainer.setAttribute(\"id\", \"maincontiner\");\r\n  return mainContainer;\r\n}\r\n\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (homePage);\r\n\n\n//# sourceURL=webpack://restaurant_page/./src/homepage.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _website__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./website */ \"./src/website.js\");\n\r\n\r\nlet getConentContainer = document.getElementById(\"content\");\r\n\r\ngetConentContainer.appendChild((0,_website__WEBPACK_IMPORTED_MODULE_0__.createNavigation)());\r\ngetConentContainer.appendChild((0,_website__WEBPACK_IMPORTED_MODULE_0__.populateHome)());\n\n//# sourceURL=webpack://restaurant_page/./src/index.js?");

/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction menuPage() {\r\n  const menuContainer = document.createElement(\"div\");\r\n  menuContainer.classList.add(\"menu-container\");\r\n  const headerElement = document.createElement(\"h1\");\r\n  headerElement.textContent = \"Our Menu\";\r\n  menuContainer.appendChild(headerElement);\r\n\r\n  //Create Description\r\n  const paragraphElement = document.createElement(\"p\");\r\n  paragraphElement.textContent = \"Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem distinctio culpa libero quo numquam, quae accusamus ducimus quidem voluptatibus dolor itaque mollitia sint! Repellendus exercitationem dolorem omnis repudiandae. Expedita, similique. Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem distinctio culpa libero quo numquam, quae accusamus ducimus quidem voluptatibus dolor itaque mollitia sint! Repellendus exercitationem dolorem omnis repudiandae. Expedita, similique. Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem distinctio culpa libero quo numquam, quae accusamus ducimus quidem voluptatibus dolor itaque mollitia sint! Repellendus exercitationem dolorem omnis repudiandae. Expedita, similique.\";\r\n  menuContainer.appendChild(paragraphElement);\r\n  return menuContainer;\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (menuPage);\n\n//# sourceURL=webpack://restaurant_page/./src/menu.js?");

/***/ }),

/***/ "./src/website.js":
/*!************************!*\
  !*** ./src/website.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"createNavigation\": () => (/* binding */ createNavigation),\n/* harmony export */   \"populateHome\": () => (/* binding */ populateHome)\n/* harmony export */ });\n/* harmony import */ var _homepage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./homepage */ \"./src/homepage.js\");\n/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menu */ \"./src/menu.js\");\n/* harmony import */ var _contact__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./contact */ \"./src/contact.js\");\n\r\n\r\n\r\n\r\nlet getConentContainer = document.getElementById(\"content\");\r\n\r\n//Single section for storing home, menu and contact pages.\r\nlet singleSection = document.createElement(\"div\");\r\nsingleSection.classList.add(\"section\");\r\n\r\nfunction createNavigation() {\r\n  let navigationDiv = document.createElement(\"div\");\r\n  navigationDiv.classList.add(\"navigation\");\r\n\r\n\r\n  //Add Home Button\r\n  let homepageButton = document.createElement(\"button\");\r\n  homepageButton.textContent = \"Homepage\";\r\n  navigationDiv.appendChild(homepageButton);\r\n  homepageButton.addEventListener(\"click\", function () {\r\n    singleSection.innerHTML = \"\";\r\n    singleSection.appendChild((0,_homepage__WEBPACK_IMPORTED_MODULE_0__.default)());\r\n    getConentContainer.appendChild(singleSection);\r\n  });\r\n\r\n  //Add Menu Button\r\n  let menuButton = document.createElement(\"button\");\r\n  menuButton.textContent = \"Menu\";\r\n  navigationDiv.appendChild(menuButton);\r\n  menuButton.addEventListener(\"click\", function () {\r\n    singleSection.innerHTML = \"\";\r\n    singleSection.appendChild((0,_menu__WEBPACK_IMPORTED_MODULE_1__.default)());\r\n    getConentContainer.appendChild(singleSection);\r\n  });\r\n\r\n  //Add Contact Button\r\n  let contactButton = document.createElement(\"button\");\r\n  contactButton.textContent = \"Contact\";\r\n  navigationDiv.appendChild(contactButton);\r\n  contactButton.addEventListener(\"click\", function () {\r\n    singleSection.innerHTML = \"\";\r\n    singleSection.appendChild((0,_contact__WEBPACK_IMPORTED_MODULE_2__.default)());\r\n    getConentContainer.appendChild(singleSection);\r\n  });\r\n  return navigationDiv;\r\n}\r\n\r\nfunction populateHome() {\r\n  singleSection.appendChild((0,_homepage__WEBPACK_IMPORTED_MODULE_0__.default)());\r\n\r\n  getConentContainer.appendChild(singleSection);\r\n  return singleSection;\r\n}\r\n\r\n\r\n\r\n\r\n\r\n\n\n//# sourceURL=webpack://restaurant_page/./src/website.js?");

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