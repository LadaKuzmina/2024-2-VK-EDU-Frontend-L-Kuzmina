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

/***/ "./chats-mocks/chat-mocks.js":
/*!***********************************!*\
  !*** ./chats-mocks/chat-mocks.js ***!
  \***********************************/
/*! exports provided: chatsMocks */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"chatsMocks\", function() { return chatsMocks; });\nvar chatsMocks = [{\n  id: '1',\n  messages: [{\n    message: 'Привет, как дела?',\n    timestamp: '10:35',\n    author: 'Дженнифер',\n    chatOwner: 'Дженнифер'\n  }, {\n    message: 'У тебя есть свободное время?',\n    timestamp: '10:35',\n    author: 'Дженнифер',\n    chatOwner: 'Дженнифер'\n  }]\n}, {\n  id: '2',\n  author: 'Эшли',\n  messages: [{\n    message: 'Приходи на тусовку',\n    timestamp: '10:35',\n    author: 'Эшли',\n    chatOwner: 'Эшли'\n  }]\n}, {\n  id: '3',\n  author: 'Сэм',\n  messages: [{\n    message: 'Недавно такую тачку себе купил',\n    timestamp: '10:35',\n    author: 'Сэм',\n    chatOwner: 'Сэм'\n  }, {\n    message: 'Воообще улёт',\n    timestamp: '10:35',\n    author: 'Сэм',\n    chatOwner: 'Сэм'\n  }, {\n    message: 'Ставлю лайк',\n    timestamp: '10:35',\n    author: 'Сэм',\n    chatOwner: 'Сэм'\n  }]\n}, {\n  id: '4',\n  author: 'Айрат',\n  messages: [{\n    message: 'Открываю двери без ключа',\n    timestamp: '10:35',\n    author: 'Айрат',\n    chatOwner: 'Айрат'\n  }, {\n    message: 'ча ча ча ча',\n    timestamp: '10:35',\n    author: 'Айрат',\n    chatOwner: 'Айрат'\n  }]\n}, {\n  id: '5',\n  author: 'Айнура',\n  messages: [{\n    message: 'Ты смотрел кухню?',\n    timestamp: '10:35',\n    author: 'Айнура',\n    chatOwner: 'Айнура'\n  }]\n}];\n\n//# sourceURL=webpack:///./chats-mocks/chat-mocks.js?");

/***/ }),

/***/ "./footer-chat/footer-chat.css":
/*!*************************************!*\
  !*** ./footer-chat/footer-chat.css ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./footer-chat/footer-chat.css?");

/***/ }),

/***/ "./footer-chat/footer-chat.js":
/*!************************************!*\
  !*** ./footer-chat/footer-chat.js ***!
  \************************************/
/*! exports provided: createFooterChat */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"createFooterChat\", function() { return createFooterChat; });\n/* harmony import */ var _utils_createElement__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/createElement */ \"./utils/createElement.js\");\n/* harmony import */ var _utils_createIcons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/createIcons */ \"./utils/createIcons.js\");\n/* harmony import */ var _footer_chat_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./footer-chat.css */ \"./footer-chat/footer-chat.css\");\n/* harmony import */ var _footer_chat_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_footer_chat_css__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../index */ \"./index.js\");\n\n\n\n\nvar keyCodeEnter = 13;\nvar handleSubmit = function handleSubmit(event) {\n  event.preventDefault();\n};\nvar handleEnterMessage = function handleEnterMessage(event, chatId) {\n  var input = document.getElementById('input-id');\n  if (event.keyCode === keyCodeEnter) {\n    if (input.value.trim() !== '') {\n      Object(_index__WEBPACK_IMPORTED_MODULE_3__[\"saveMessageToLocalStorages\"])(chatId);\n      input.value = '';\n      input.placeholder = 'Сообщение';\n    }\n  }\n};\nvar handleKeyPress = function handleKeyPress(event, chatId) {\n  var form = document.querySelector('form');\n  if (event.keyCode === keyCodeEnter) {\n    handleEnterMessage(event, chatId);\n    form.dispatchEvent(new Event('submit'));\n  }\n};\nvar createFooterChat = function createFooterChat(chatId) {\n  var footer = Object(_utils_createElement__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"])('footer', 'footer');\n  var form = Object(_utils_createElement__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"])('form', 'form');\n  form.action = '/';\n  form.addEventListener('submit', function (e) {\n    return handleSubmit(e, chatId);\n  });\n  form.addEventListener('keypress', function (e) {\n    return handleKeyPress(e, chatId);\n  });\n  var messageDiv = Object(_utils_createElement__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"])('div', 'message-footer');\n  var input = Object(_utils_createElement__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"])('input', 'form-input');\n  input.name = 'message-text';\n  input.placeholder = 'Сообщение';\n  input.type = 'text';\n  input.id = 'input-id';\n  var attachmentIcon = Object(_utils_createIcons__WEBPACK_IMPORTED_MODULE_1__[\"createIcons\"])();\n  attachmentIcon.textContent = 'attachment';\n  messageDiv.appendChild(input);\n  messageDiv.appendChild(attachmentIcon);\n  form.appendChild(messageDiv);\n  footer.appendChild(form);\n  return footer;\n};\n\n//# sourceURL=webpack:///./footer-chat/footer-chat.js?");

/***/ }),

/***/ "./header-chat/header-chat.css":
/*!*************************************!*\
  !*** ./header-chat/header-chat.css ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./header-chat/header-chat.css?");

/***/ }),

/***/ "./header-chat/header-chat.js":
/*!************************************!*\
  !*** ./header-chat/header-chat.js ***!
  \************************************/
/*! exports provided: createHeaderChat */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"createHeaderChat\", function() { return createHeaderChat; });\n/* harmony import */ var _utils_createElement__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/createElement */ \"./utils/createElement.js\");\n/* harmony import */ var _utils_createIcons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/createIcons */ \"./utils/createIcons.js\");\n/* harmony import */ var _header_chat_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./header-chat.css */ \"./header-chat/header-chat.css\");\n/* harmony import */ var _header_chat_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_header_chat_css__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _header_chats_header_chats__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../header-chats/header-chats */ \"./header-chats/header-chats.js\");\n/* harmony import */ var _main_chats_main_chats__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../main-chats/main-chats */ \"./main-chats/main-chats.js\");\n/* harmony import */ var _new_button_chat_new_button_chat__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../new-button-chat/new-button-chat */ \"./new-button-chat/new-button-chat.js\");\n\n\n\n\n\n\nvar renderChatsPage = function renderChatsPage() {\n  var root = document.getElementById('root');\n  root.innerHTML = '';\n  root.appendChild(Object(_header_chats_header_chats__WEBPACK_IMPORTED_MODULE_3__[\"createHeaderChats\"])());\n  root.appendChild(Object(_main_chats_main_chats__WEBPACK_IMPORTED_MODULE_4__[\"createMainChats\"])());\n  root.appendChild(Object(_new_button_chat_new_button_chat__WEBPACK_IMPORTED_MODULE_5__[\"createNewChatButton\"])());\n};\nvar createHeaderChat = function createHeaderChat(interlocutorName) {\n  var header = Object(_utils_createElement__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"])('header', 'header');\n  var arrowBack = Object(_utils_createIcons__WEBPACK_IMPORTED_MODULE_1__[\"createIcons\"])();\n  arrowBack.innerText = 'arrow_back';\n  arrowBack.id = 'arrow-back';\n  arrowBack.addEventListener('click', renderChatsPage);\n  var interlocutor = Object(_utils_createElement__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"])('div', 'interlocutor');\n  var accountCircle = Object(_utils_createIcons__WEBPACK_IMPORTED_MODULE_1__[\"createIcons\"])();\n  accountCircle.innerText = 'account_circle';\n  accountCircle.id = 'default-icon';\n  var infoInterlocutor = Object(_utils_createElement__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"])('div', 'info-interlocutor');\n  var nameInterlocutor = Object(_utils_createElement__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"])('h1', 'name-interlocutor');\n  nameInterlocutor.innerText = interlocutorName;\n  var timeInterlocutor = Object(_utils_createElement__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"])('span', 'time-interlocutor');\n  timeInterlocutor.innerText = 'был в сети 2 часа назад';\n  infoInterlocutor.appendChild(nameInterlocutor);\n  infoInterlocutor.appendChild(timeInterlocutor);\n  interlocutor.appendChild(accountCircle);\n  interlocutor.append(infoInterlocutor);\n  var symbols = Object(_utils_createElement__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"])('div', 'symbols');\n  var search = Object(_utils_createIcons__WEBPACK_IMPORTED_MODULE_1__[\"createIcons\"])();\n  search.innerText = 'search';\n  var moreVert = Object(_utils_createIcons__WEBPACK_IMPORTED_MODULE_1__[\"createIcons\"])();\n  moreVert.innerText = 'more_vert';\n  moreVert.id = 'more-vert';\n  symbols.appendChild(search);\n  symbols.appendChild(moreVert);\n  header.appendChild(arrowBack);\n  header.appendChild(interlocutor);\n  header.appendChild(symbols);\n  return header;\n};\n\n//# sourceURL=webpack:///./header-chat/header-chat.js?");

/***/ }),

/***/ "./header-chats/header-chats.js":
/*!**************************************!*\
  !*** ./header-chats/header-chats.js ***!
  \**************************************/
/*! exports provided: createHeaderChats */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"createHeaderChats\", function() { return createHeaderChats; });\n/* harmony import */ var _utils_createElement__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/createElement */ \"./utils/createElement.js\");\n/* harmony import */ var _utils_createIcons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/createIcons */ \"./utils/createIcons.js\");\n/* harmony import */ var _header_chat_header_chat_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../header-chat/header-chat.css */ \"./header-chat/header-chat.css\");\n/* harmony import */ var _header_chat_header_chat_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_header_chat_header_chat_css__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nvar createHeaderChats = function createHeaderChats() {\n  var header = Object(_utils_createElement__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"])('header', 'header');\n  var headerTitle = Object(_utils_createElement__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"])('h1');\n  headerTitle.innerText = 'Messenger';\n  var searchIcon = Object(_utils_createIcons__WEBPACK_IMPORTED_MODULE_1__[\"createIcons\"])();\n  searchIcon.innerText = 'search';\n  var menuIcon = Object(_utils_createIcons__WEBPACK_IMPORTED_MODULE_1__[\"createIcons\"])();\n  menuIcon.innerText = 'menu';\n  header.appendChild(menuIcon);\n  header.appendChild(headerTitle);\n  header.appendChild(searchIcon);\n  return header;\n};\n\n//# sourceURL=webpack:///./header-chats/header-chats.js?");

/***/ }),

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
/*! exports provided: getMessagesFromLocalStorage, saveMessageToLocalStorages */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getMessagesFromLocalStorage\", function() { return getMessagesFromLocalStorage; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"saveMessageToLocalStorages\", function() { return saveMessageToLocalStorages; });\n/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.css */ \"./index.css\");\n/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_index_css__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _main_chats_main_chats__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./main-chats/main-chats */ \"./main-chats/main-chats.js\");\n/* harmony import */ var _header_chats_header_chats__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./header-chats/header-chats */ \"./header-chats/header-chats.js\");\n/* harmony import */ var _chats_mocks_chat_mocks__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./chats-mocks/chat-mocks */ \"./chats-mocks/chat-mocks.js\");\n/* harmony import */ var _new_button_chat_new_button_chat__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./new-button-chat/new-button-chat */ \"./new-button-chat/new-button-chat.js\");\n\n\n\n\n\nif (localStorage.length === 0) {\n  _chats_mocks_chat_mocks__WEBPACK_IMPORTED_MODULE_3__[\"chatsMocks\"].forEach(function (chat) {\n    localStorage.setItem(\"myMessage-\".concat(chat.id), JSON.stringify(chat.messages));\n  });\n}\nvar root = document.getElementById('root');\nroot.appendChild(Object(_header_chats_header_chats__WEBPACK_IMPORTED_MODULE_2__[\"createHeaderChats\"])());\nvar mainChatsElement = Object(_main_chats_main_chats__WEBPACK_IMPORTED_MODULE_1__[\"createMainChats\"])();\nroot.appendChild(mainChatsElement);\nvar newChatButton = Object(_new_button_chat_new_button_chat__WEBPACK_IMPORTED_MODULE_4__[\"createNewChatButton\"])();\nroot.appendChild(newChatButton);\nvar getMessagesFromLocalStorage = function getMessagesFromLocalStorage(chatId) {\n  return JSON.parse(localStorage.getItem(\"myMessage-\".concat(chatId)) || '[]');\n};\nvar renderMessage = function renderMessage(message) {\n  var listMessage = document.getElementById('list-message');\n  var messageItem = document.createElement('div');\n  messageItem.className = 'message-item';\n  var authorSpan = document.createElement('span');\n  authorSpan.className = 'message-author';\n  authorSpan.textContent = message.author;\n  var messageTextSpan = document.createElement('span');\n  messageTextSpan.className = 'message-text';\n  messageTextSpan.textContent = message.message;\n  var timestampSpan = document.createElement('span');\n  timestampSpan.className = 'message-timestamp';\n  timestampSpan.textContent = message.timestamp;\n  messageItem.appendChild(authorSpan);\n  messageItem.appendChild(messageTextSpan);\n  messageItem.appendChild(timestampSpan);\n  listMessage.appendChild(messageItem);\n  messageItem.scrollIntoView();\n};\nvar saveMessageToLocalStorages = function saveMessageToLocalStorages(chatId) {\n  var messages = getMessagesFromLocalStorage(chatId);\n  var input = document.getElementById('input-id');\n  var newMessage = {\n    message: input.value,\n    timestamp: new Date().toLocaleTimeString().slice(0, -3),\n    author: 'Автор',\n    chatOwner: messages[0].chatOwner\n  };\n  messages.push(newMessage);\n  localStorage.setItem(\"myMessage-\".concat(chatId), JSON.stringify(messages));\n  renderMessage(newMessage);\n};\n\n//# sourceURL=webpack:///./index.js?");

/***/ }),

/***/ "./main-chat/main-chat.css":
/*!*********************************!*\
  !*** ./main-chat/main-chat.css ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./main-chat/main-chat.css?");

/***/ }),

/***/ "./main-chat/main-chat.js":
/*!********************************!*\
  !*** ./main-chat/main-chat.js ***!
  \********************************/
/*! exports provided: createMainChat */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"createMainChat\", function() { return createMainChat; });\n/* harmony import */ var _utils_createElement__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/createElement */ \"./utils/createElement.js\");\n/* harmony import */ var _main_chat_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./main-chat.css */ \"./main-chat/main-chat.css\");\n/* harmony import */ var _main_chat_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_main_chat_css__WEBPACK_IMPORTED_MODULE_1__);\n\n\nvar createMainChat = function createMainChat(messages) {\n  var main = Object(_utils_createElement__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"])('main');\n  var listMessageDiv = Object(_utils_createElement__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"])('div');\n  listMessageDiv.id = 'list-message';\n  messages.forEach(function (message) {\n    var messageDiv = message.author === 'Автор' ? Object(_utils_createElement__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"])('div', 'message-item') : Object(_utils_createElement__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"])('div', 'message-item-interlocutor');\n    var messageAuthor = Object(_utils_createElement__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"])('span', 'message-author');\n    messageAuthor.textContent = message.author;\n    var messageText = Object(_utils_createElement__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"])('span', 'message-text');\n    messageText.textContent = message.message;\n    var messageTimestamp = Object(_utils_createElement__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"])('span', 'message-timestamp');\n    messageTimestamp.textContent = message.timestamp;\n    messageDiv.appendChild(messageAuthor);\n    messageDiv.appendChild(messageText);\n    messageDiv.appendChild(messageTimestamp);\n    listMessageDiv.appendChild(messageDiv);\n  });\n  main.appendChild(listMessageDiv);\n  return main;\n};\n\n//# sourceURL=webpack:///./main-chat/main-chat.js?");

/***/ }),

/***/ "./main-chats/main-chats.css":
/*!***********************************!*\
  !*** ./main-chats/main-chats.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./main-chats/main-chats.css?");

/***/ }),

/***/ "./main-chats/main-chats.js":
/*!**********************************!*\
  !*** ./main-chats/main-chats.js ***!
  \**********************************/
/*! exports provided: createMainChats */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"createMainChats\", function() { return createMainChats; });\n/* harmony import */ var _utils_createElement__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/createElement */ \"./utils/createElement.js\");\n/* harmony import */ var _main_chat_main_chat__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../main-chat/main-chat */ \"./main-chat/main-chat.js\");\n/* harmony import */ var _header_chat_header_chat__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../header-chat/header-chat */ \"./header-chat/header-chat.js\");\n/* harmony import */ var _footer_chat_footer_chat__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../footer-chat/footer-chat */ \"./footer-chat/footer-chat.js\");\n/* harmony import */ var _utils_createIcons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils/createIcons */ \"./utils/createIcons.js\");\n/* harmony import */ var _main_chats_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./main-chats.css */ \"./main-chats/main-chats.css\");\n/* harmony import */ var _main_chats_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_main_chats_css__WEBPACK_IMPORTED_MODULE_5__);\n\n\n\n\n\n\nvar renderChatPage = function renderChatPage(author, messages, id) {\n  var root = document.getElementById('root');\n  root.innerHTML = '';\n  root.appendChild(Object(_header_chat_header_chat__WEBPACK_IMPORTED_MODULE_2__[\"createHeaderChat\"])(author));\n  root.appendChild(Object(_main_chat_main_chat__WEBPACK_IMPORTED_MODULE_1__[\"createMainChat\"])(messages));\n  root.appendChild(Object(_footer_chat_footer_chat__WEBPACK_IMPORTED_MODULE_3__[\"createFooterChat\"])(id));\n};\nvar createMainChats = function createMainChats() {\n  var listChats = Object(_utils_createElement__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"])('div', 'list-chats');\n  var _loop = function _loop() {\n    if (localStorageKey.startsWith('myMessage')) {\n      var id = localStorageKey.slice(10);\n      var messages = JSON.parse(localStorage.getItem(localStorageKey) || '[]');\n      var author = messages[0].chatOwner;\n      var chatItem = Object(_utils_createElement__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"])('div', 'chat-item');\n      chatItem.id = id;\n      var avatar = Object(_utils_createIcons__WEBPACK_IMPORTED_MODULE_4__[\"createIcons\"])();\n      avatar.innerText = 'account_circle';\n      var userInfo = Object(_utils_createElement__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"])('div', 'user-info-interlocutor');\n      var nameInterlocutor = Object(_utils_createElement__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"])('span', 'name-interlocutor');\n      nameInterlocutor.innerText = author;\n      var lastMessage = messages[messages.length - 1];\n      var messageInterlocutor = Object(_utils_createElement__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"])('span', 'message');\n      messageInterlocutor.innerText = lastMessage.message;\n      var messageTimestamp = Object(_utils_createElement__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"])('span', 'message-timestamp');\n      messageTimestamp.innerText = lastMessage.timestamp;\n      var checkIcon = Object(_utils_createIcons__WEBPACK_IMPORTED_MODULE_4__[\"createIcons\"])();\n      checkIcon.innerText = 'check';\n      checkIcon.id = 'check-icon';\n      userInfo.append(nameInterlocutor, messageInterlocutor);\n      var infoRightSide = Object(_utils_createElement__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"])('div', 'info-right-side');\n      infoRightSide.append(messageTimestamp, checkIcon);\n      var infoLeftSide = Object(_utils_createElement__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"])('div', 'info-left-side');\n      infoLeftSide.append(avatar, userInfo);\n      chatItem.append(infoLeftSide, infoRightSide);\n      chatItem.addEventListener('click', function () {\n        return renderChatPage(author, messages, id);\n      });\n      listChats.appendChild(chatItem);\n    }\n  };\n  for (var localStorageKey in localStorage) {\n    _loop();\n  }\n  return listChats;\n};\n\n//# sourceURL=webpack:///./main-chats/main-chats.js?");

/***/ }),

/***/ "./new-button-chat/new-button-chat.js":
/*!********************************************!*\
  !*** ./new-button-chat/new-button-chat.js ***!
  \********************************************/
/*! exports provided: createNewChatButton */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"createNewChatButton\", function() { return createNewChatButton; });\n/* harmony import */ var _utils_createElement__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/createElement */ \"./utils/createElement.js\");\n/* harmony import */ var _utils_createIcons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/createIcons */ \"./utils/createIcons.js\");\n/* harmony import */ var _new_chat_button_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./new-chat-button.css */ \"./new-button-chat/new-chat-button.css\");\n/* harmony import */ var _new_chat_button_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_new_chat_button_css__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nvar createNewChatButton = function createNewChatButton() {\n  var newChatButton = Object(_utils_createElement__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"])('div', 'new-chat-button');\n  var newChatButtonIcon = Object(_utils_createIcons__WEBPACK_IMPORTED_MODULE_1__[\"createIcons\"])();\n  newChatButtonIcon.innerText = 'edit';\n  newChatButton.append(newChatButtonIcon);\n  return newChatButton;\n};\n\n//# sourceURL=webpack:///./new-button-chat/new-button-chat.js?");

/***/ }),

/***/ "./new-button-chat/new-chat-button.css":
/*!*********************************************!*\
  !*** ./new-button-chat/new-chat-button.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./new-button-chat/new-chat-button.css?");

/***/ }),

/***/ "./utils/createElement.js":
/*!********************************!*\
  !*** ./utils/createElement.js ***!
  \********************************/
/*! exports provided: createElement */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"createElement\", function() { return createElement; });\nvar createElement = function createElement(tagName, className) {\n  var element = document.createElement(tagName);\n  if (className) {\n    element.className = className;\n  }\n  return element;\n};\n\n//# sourceURL=webpack:///./utils/createElement.js?");

/***/ }),

/***/ "./utils/createIcons.css":
/*!*******************************!*\
  !*** ./utils/createIcons.css ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./utils/createIcons.css?");

/***/ }),

/***/ "./utils/createIcons.js":
/*!******************************!*\
  !*** ./utils/createIcons.js ***!
  \******************************/
/*! exports provided: createIcons */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"createIcons\", function() { return createIcons; });\n/* harmony import */ var _createElement__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./createElement */ \"./utils/createElement.js\");\n/* harmony import */ var _createIcons_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./createIcons.css */ \"./utils/createIcons.css\");\n/* harmony import */ var _createIcons_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_createIcons_css__WEBPACK_IMPORTED_MODULE_1__);\n\n\nvar createIcons = function createIcons() {\n  return Object(_createElement__WEBPACK_IMPORTED_MODULE_0__[\"createElement\"])('span', 'material-symbols-outlined');\n};\n\n//# sourceURL=webpack:///./utils/createIcons.js?");

/***/ })

/******/ });