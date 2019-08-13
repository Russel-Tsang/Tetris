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
/******/ 	__webpack_require__.p = "/dist/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/field/field.js":
/*!****************************!*\
  !*** ./src/field/field.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Field; });
/* harmony import */ var _holdbox__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./holdbox */ "./src/field/holdbox.js");
/* harmony import */ var _nextBox__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./nextBox */ "./src/field/nextBox.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }




var Field =
/*#__PURE__*/
function () {
  function Field() {
    _classCallCheck(this, Field);
  }

  _createClass(Field, [{
    key: "_createColumn",
    value: function _createColumn() {
      var column = document.createElement("ul");
      column.classList.add("column");

      for (var i = 0; i < 20; i++) {
        column.append(document.createElement("li"));
      }

      return column;
    }
  }, {
    key: "_createField",
    value: function _createField() {
      var field = document.createElement("div");
      field.classList.add("field-box");

      for (var i = 0; i < 10; i++) {
        field.appendChild(this._createColumn());
      }

      return field;
    } // _createHoldBox() {
    //     let holdBox = new HoldBox();
    //     field.prepend(holdBox.createBox());
    //     return holdBox.create;
    // }

  }, {
    key: "createFieldWithHoldBoxAndNextBoxes",
    value: function createFieldWithHoldBoxAndNextBoxes(container) {
      var nextBox = new _nextBox__WEBPACK_IMPORTED_MODULE_1__["default"]();
      var holdBox = new _holdbox__WEBPACK_IMPORTED_MODULE_0__["default"]();
      container.append(this._createField());
      container.append(nextBox.createNextBoxes());
      container.prepend(holdBox.createBox());
      return container;
    }
  }]);

  return Field;
}();



/***/ }),

/***/ "./src/field/holdbox.js":
/*!******************************!*\
  !*** ./src/field/holdbox.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return HoldBox; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var HoldBox =
/*#__PURE__*/
function () {
  function HoldBox() {
    _classCallCheck(this, HoldBox);
  }

  _createClass(HoldBox, [{
    key: "_createBoxColumn",
    value: function _createBoxColumn() {
      var column = document.createElement("ul");
      column.classList.add("hold-column");

      for (var i = 0; i < 4; i++) {
        column.append(document.createElement("li"));
      }

      return column;
    }
  }, {
    key: "createBox",
    value: function createBox() {
      var box = document.createElement("div");
      box.classList.add("hold-box");

      for (var i = 0; i < 5; i++) {
        box.appendChild(this._createBoxColumn());
      }

      return box;
    }
  }]);

  return HoldBox;
}();



/***/ }),

/***/ "./src/field/nextBox.js":
/*!******************************!*\
  !*** ./src/field/nextBox.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return NextBox; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var NextBox =
/*#__PURE__*/
function () {
  function NextBox() {
    _classCallCheck(this, NextBox);
  }

  _createClass(NextBox, [{
    key: "_createNextBoxColumn",
    value: function _createNextBoxColumn() {
      var column = document.createElement("ul");
      column.classList.add("next-column");

      for (var i = 0; i < 4; i++) {
        column.append(document.createElement("li"));
      }

      return column;
    }
  }, {
    key: "_createNextBox",
    value: function _createNextBox() {
      var box = document.createElement("div");
      box.classList.add("next-box");

      for (var i = 0; i < 5; i++) {
        box.appendChild(this._createNextBoxColumn());
      }

      return box;
    }
  }, {
    key: "createNextBoxes",
    value: function createNextBoxes() {
      var boxes = document.createElement("div");
      boxes.classList.add("next-boxes");

      for (var i = 0; i < 5; i++) {
        boxes.appendChild(this._createNextBox());
      }

      return boxes;
    }
  }]);

  return NextBox;
}();



/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _field_field__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./field/field */ "./src/field/field.js");

document.addEventListener("DOMContentLoaded", function () {
  var fieldContainer = document.getElementById("field-container");
  var gameField = new _field_field__WEBPACK_IMPORTED_MODULE_0__["default"]();
  gameField.createFieldWithHoldBoxAndNextBoxes(fieldContainer);
});

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2ZpZWxkL2ZpZWxkLmpzIiwid2VicGFjazovLy8uL3NyYy9maWVsZC9ob2xkYm94LmpzIiwid2VicGFjazovLy8uL3NyYy9maWVsZC9uZXh0Qm94LmpzIiwid2VicGFjazovLy8uL3NyYy9pbmRleC5qcyJdLCJuYW1lcyI6WyJGaWVsZCIsImNvbHVtbiIsImRvY3VtZW50IiwiY3JlYXRlRWxlbWVudCIsImNsYXNzTGlzdCIsImFkZCIsImkiLCJhcHBlbmQiLCJmaWVsZCIsImFwcGVuZENoaWxkIiwiX2NyZWF0ZUNvbHVtbiIsImNvbnRhaW5lciIsIm5leHRCb3giLCJOZXh0Qm94IiwiaG9sZEJveCIsIkhvbGRCb3giLCJfY3JlYXRlRmllbGQiLCJjcmVhdGVOZXh0Qm94ZXMiLCJwcmVwZW5kIiwiY3JlYXRlQm94IiwiYm94IiwiX2NyZWF0ZUJveENvbHVtbiIsIl9jcmVhdGVOZXh0Qm94Q29sdW1uIiwiYm94ZXMiLCJfY3JlYXRlTmV4dEJveCIsImFkZEV2ZW50TGlzdGVuZXIiLCJmaWVsZENvbnRhaW5lciIsImdldEVsZW1lbnRCeUlkIiwiZ2FtZUZpZWxkIiwiY3JlYXRlRmllbGRXaXRoSG9sZEJveEFuZE5leHRCb3hlcyJdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFD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LGtDQUFWLENBQTZDSCxjQUE3QztBQUNILENBSkQsRSIsImZpbGUiOiJtYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCIvZGlzdC9cIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvaW5kZXguanNcIik7XG4iLCJpbXBvcnQgSG9sZEJveCBmcm9tICcuL2hvbGRib3gnO1xuaW1wb3J0IE5leHRCb3ggZnJvbSAnLi9uZXh0Qm94JztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRmllbGQge1xuICAgIF9jcmVhdGVDb2x1bW4oKSB7XG4gICAgICAgIGxldCBjb2x1bW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidWxcIik7XG4gICAgICAgIGNvbHVtbi5jbGFzc0xpc3QuYWRkKFwiY29sdW1uXCIpO1xuXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMjA7IGkrKykge1xuICAgICAgICAgICAgY29sdW1uLmFwcGVuZChkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIikpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBjb2x1bW47XG4gICAgfVxuXG4gICAgX2NyZWF0ZUZpZWxkKCkge1xuICAgICAgICBsZXQgZmllbGQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICBmaWVsZC5jbGFzc0xpc3QuYWRkKFwiZmllbGQtYm94XCIpO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IDEwOyBpKyspIHtcbiAgICAgICAgICAgIGZpZWxkLmFwcGVuZENoaWxkKHRoaXMuX2NyZWF0ZUNvbHVtbigpKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZmllbGQ7XG4gICAgfVxuXG4gICAgLy8gX2NyZWF0ZUhvbGRCb3goKSB7XG4gICAgLy8gICAgIGxldCBob2xkQm94ID0gbmV3IEhvbGRCb3goKTtcbiAgICAvLyAgICAgZmllbGQucHJlcGVuZChob2xkQm94LmNyZWF0ZUJveCgpKTtcbiAgICAvLyAgICAgcmV0dXJuIGhvbGRCb3guY3JlYXRlO1xuICAgIC8vIH1cblxuICAgIGNyZWF0ZUZpZWxkV2l0aEhvbGRCb3hBbmROZXh0Qm94ZXMoY29udGFpbmVyKSB7XG4gICAgICAgIGxldCBuZXh0Qm94ID0gbmV3IE5leHRCb3goKTtcbiAgICAgICAgbGV0IGhvbGRCb3ggPSBuZXcgSG9sZEJveCgpO1xuICAgICAgICBjb250YWluZXIuYXBwZW5kKHRoaXMuX2NyZWF0ZUZpZWxkKCkpO1xuICAgICAgICBjb250YWluZXIuYXBwZW5kKG5leHRCb3guY3JlYXRlTmV4dEJveGVzKCkpO1xuICAgICAgICBjb250YWluZXIucHJlcGVuZChob2xkQm94LmNyZWF0ZUJveCgpKTtcbiAgICAgICAgcmV0dXJuIGNvbnRhaW5lcjtcbiAgICB9XG5cbn0iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBIb2xkQm94IHtcbiAgICBfY3JlYXRlQm94Q29sdW1uKCkge1xuICAgICAgICBsZXQgY29sdW1uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInVsXCIpO1xuICAgICAgICBjb2x1bW4uY2xhc3NMaXN0LmFkZChcImhvbGQtY29sdW1uXCIpO1xuXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgNDsgaSsrKSB7XG4gICAgICAgICAgICBjb2x1bW4uYXBwZW5kKGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaVwiKSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGNvbHVtbjtcbiAgICB9XG5cbiAgICBjcmVhdGVCb3goKSB7XG4gICAgICAgIGxldCBib3ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICBib3guY2xhc3NMaXN0LmFkZChcImhvbGQtYm94XCIpO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IDU7IGkrKykge1xuICAgICAgICAgICAgYm94LmFwcGVuZENoaWxkKHRoaXMuX2NyZWF0ZUJveENvbHVtbigpKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gYm94O1xuICAgIH1cbn0iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBOZXh0Qm94IHtcbiAgICBfY3JlYXRlTmV4dEJveENvbHVtbigpIHtcbiAgICAgICAgbGV0IGNvbHVtbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ1bFwiKTtcbiAgICAgICAgY29sdW1uLmNsYXNzTGlzdC5hZGQoXCJuZXh0LWNvbHVtblwiKTtcblxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IDQ7IGkrKykge1xuICAgICAgICAgICAgY29sdW1uLmFwcGVuZChkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIikpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBjb2x1bW47XG4gICAgfVxuXG4gICAgX2NyZWF0ZU5leHRCb3goKSB7XG4gICAgICAgIGxldCBib3ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICBib3guY2xhc3NMaXN0LmFkZChcIm5leHQtYm94XCIpO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IDU7IGkrKykge1xuICAgICAgICAgICAgYm94LmFwcGVuZENoaWxkKHRoaXMuX2NyZWF0ZU5leHRCb3hDb2x1bW4oKSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGJveDtcbiAgICB9XG5cbiAgICBjcmVhdGVOZXh0Qm94ZXMoKSB7XG4gICAgICAgIGxldCBib3hlcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIGJveGVzLmNsYXNzTGlzdC5hZGQoXCJuZXh0LWJveGVzXCIpO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IDU7IGkrKykge1xuICAgICAgICAgICAgYm94ZXMuYXBwZW5kQ2hpbGQodGhpcy5fY3JlYXRlTmV4dEJveCgpKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gYm94ZXM7XG4gICAgfVxufSIsImltcG9ydCBGaWVsZCBmcm9tICcuL2ZpZWxkL2ZpZWxkJztcblxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIiwgKCkgPT4ge1xuICAgIGNvbnN0IGZpZWxkQ29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJmaWVsZC1jb250YWluZXJcIik7XG4gICAgbGV0IGdhbWVGaWVsZCA9IG5ldyBGaWVsZCgpO1xuICAgIGdhbWVGaWVsZC5jcmVhdGVGaWVsZFdpdGhIb2xkQm94QW5kTmV4dEJveGVzKGZpZWxkQ29udGFpbmVyKTtcbn0pOyJdLCJzb3VyY2VSb290IjoiIn0=