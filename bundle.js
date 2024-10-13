/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./index.css":
/*!*******************!*\
  !*** ./index.css ***!
  \*******************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./index.css?");

/***/ }),

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.css */ \"./index.css\");\n/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_index_css__WEBPACK_IMPORTED_MODULE_0__);\n\nvar form = document.querySelector('form');\nvar input = document.getElementById('input-id');\nvar listMessage = document.getElementById('list-message');\nvar keyCodeEnter = 13;\nvar getMessagesFromLocalStorage = function getMessagesFromLocalStorage() {\n  return JSON.parse(localStorage.getItem('myMessage') || '[]');\n};\nvar renderMessage = function renderMessage(message) {\n  var messageItem = document.createElement('div');\n  messageItem.className = 'message-item';\n  var authorSpan = document.createElement('span');\n  authorSpan.className = 'message-author';\n  authorSpan.textContent = message.author;\n  var messageTextSpan = document.createElement('span');\n  messageTextSpan.className = 'message-text';\n  messageTextSpan.textContent = message.message;\n  var timestampSpan = document.createElement('span');\n  timestampSpan.className = 'message-timestamp';\n  timestampSpan.textContent = message.timestamp;\n  messageItem.appendChild(authorSpan);\n  messageItem.appendChild(messageTextSpan);\n  messageItem.appendChild(timestampSpan);\n  listMessage.appendChild(messageItem);\n\n  // подскролл к новому сообщению\n  messageItem.scrollIntoView();\n};\nvar renderMessagesFromLocalStorage = function renderMessagesFromLocalStorage() {\n  var messages = getMessagesFromLocalStorage();\n  messages.forEach(function (message) {\n    renderMessage(message);\n  });\n};\nvar saveMessageToLocalStorages = function saveMessageToLocalStorages() {\n  var messages = getMessagesFromLocalStorage();\n  var newMessage = {\n    message: input.value,\n    timestamp: new Date().toLocaleTimeString().slice(0, -3),\n    author: 'Автор'\n  };\n  messages.push(newMessage);\n  localStorage.setItem('myMessage', JSON.stringify(messages));\n  renderMessage(newMessage);\n};\nvar handleSubmit = function handleSubmit(event) {\n  event.preventDefault();\n};\nvar handleKeyPress = function handleKeyPress(event) {\n  if (event.keyCode === keyCodeEnter) {\n    handleEnterMessage(event);\n    form.dispatchEvent(new Event('submit'));\n  }\n};\nvar handleEnterMessage = function handleEnterMessage(event) {\n  if (event.keyCode === keyCodeEnter) {\n    if (input.value.trim() !== '') {\n      saveMessageToLocalStorages();\n      input.value = '';\n      input.placeholder = 'Сообщение';\n\n      // скролл всей страницы - это нам не надо / нужно чтобы скроллился только блок сообщений\n      // window.scrollTo(0, document.body.scrollHeight);\n    }\n  }\n};\nform.addEventListener('submit', function (e) {\n  return handleSubmit(e);\n});\nform.addEventListener('keypress', function (e) {\n  return handleKeyPress(e);\n});\ndocument.addEventListener(\"DOMContentLoaded\", renderMessagesFromLocalStorage);\n\n//# sourceURL=webpack:///./index.js?");

/***/ })

/******/ });