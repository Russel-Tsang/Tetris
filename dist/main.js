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
    key: "_generateField",
    value: function _generateField() {
      var field = [];

      for (var i = 0; i < 20; i++) {
        var row = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
        field.push(row);
      }

      return field;
    } //_isValidMove

  }, {
    key: "_createColumn",
    value: function _createColumn() {
      var column = document.createElement("ul");
      column.classList.add("field-column");

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
    }
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

/***/ "./src/game/game.js":
/*!**************************!*\
  !*** ./src/game/game.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Game; });
/* harmony import */ var _field_field__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../field/field */ "./src/field/field.js");
/* harmony import */ var _pieces_oPiece__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../pieces/oPiece */ "./src/pieces/oPiece.js");
/* harmony import */ var _pieces_iPiece__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../pieces/iPiece */ "./src/pieces/iPiece.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }





var Game =
/*#__PURE__*/
function () {
  function Game() {
    _classCallCheck(this, Game);

    this.field = this._setField();
    this.colors = {
      1: "yellow",
      2: "blue"
    };
    debugger;
  }

  _createClass(Game, [{
    key: "_setField",
    value: function _setField() {
      var field = new _field_field__WEBPACK_IMPORTED_MODULE_0__["default"]();
      return field._generateField();
    }
  }, {
    key: "_isOver",
    value: function _isOver() {
      for (var i = 0; i < this.field[0].length; i++) {
        debugger;
        if (this.field[0][i]) return true;
      }

      return false;
    }
  }, {
    key: "render",
    value: function render() {
      var _this = this;

      var fieldColumns = document.querySelectorAll(".field-column");
      this.field.forEach(function (row, rowIdx) {
        row.forEach(function (col, colIdx) {
          var square = _this.field[rowIdx][colIdx];

          if (square) {
            debugger;
            fieldColumns[colIdx].children[rowIdx].classList.add(_this.colors[square]);
          } else {
            debugger;
            Object.values(_this.colors).forEach(function (color) {
              debugger;
              fieldColumns[colIdx].children[rowIdx].classList.remove(color);
            });
          }
        });
      });
    }
  }, {
    key: "play",
    value: function play(container) {
      var _this2 = this;

      var iPiece = new _pieces_iPiece__WEBPACK_IMPORTED_MODULE_2__["default"]();
      setInterval(function () {
        iPiece.drop();

        iPiece._populateField(_this2.field);

        _this2.render(container);

        debugger;
      }, 1000);
    }
  }]);

  return Game;
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
/* harmony import */ var _game_game__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./game/game */ "./src/game/game.js");
/* harmony import */ var _field_field__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./field/field */ "./src/field/field.js");


document.addEventListener("DOMContentLoaded", function () {
  var fieldContainer = document.getElementById("field-container");
  var field = new _field_field__WEBPACK_IMPORTED_MODULE_1__["default"]();
  field.createFieldWithHoldBoxAndNextBoxes(fieldContainer);
  var game = new _game_game__WEBPACK_IMPORTED_MODULE_0__["default"]();
  game.play(fieldContainer);
});

/***/ }),

/***/ "./src/pieces/iPiece.js":
/*!******************************!*\
  !*** ./src/pieces/iPiece.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return IPiece; });
/* harmony import */ var _piece__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./piece */ "./src/pieces/piece.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }



var IPiece =
/*#__PURE__*/
function (_Piece) {
  _inherits(IPiece, _Piece);

  function IPiece() {
    var _this;

    _classCallCheck(this, IPiece);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(IPiece).call(this));
    _this.name = "IPiece";
    _this.position = {
      top: [0, 3],
      right: [0, 4],
      bottom: [0, 5],
      left: [0, 6]
    };
    _this.removeSquares = {};
    return _this;
  }

  _createClass(IPiece, [{
    key: "drop",
    value: function drop() {
      this.removeSquares = {
        top: this.position.top.slice(),
        right: this.position.right.slice(),
        bottom: this.position.bottom.slice(),
        left: this.position.left.slice()
      };
      this.position.top[0] = this.position.top[0] + 1;
      this.position.right[0] = this.position.right[0] + 1;
      this.position.bottom[0] = this.position.bottom[0] + 1;
      this.position.left[0] = this.position.left[0] + 1;
      debugger;
    } // dropLine() {
    //     let fieldColumns = document.querySelectorAll(".field-column");
    //     let rowNums = [0];
    //     let colNums = [3, 4, 5, 6];
    //     this._addColor(fieldColumns, colNums, rowNums, "blue");
    //     rowNums = rowNums.map(num => num + 1);
    //     // initialize setInterval as "clear" to conditionally exit interval 
    //     let clear = setInterval(() => {
    //         this._addColor(fieldColumns, colNums, rowNums, "blue");
    //         if (rowNums[0] === 19) clearInterval(clear);
    //         //remove previous colored squares
    //         this._removeColor(fieldColumns, colNums, rowNums, "blue")
    //         rowNums = rowNums.map(num => num + 1);
    //     }, 100);
    // }

  }]);

  return IPiece;
}(_piece__WEBPACK_IMPORTED_MODULE_0__["default"]);



/***/ }),

/***/ "./src/pieces/oPiece.js":
/*!******************************!*\
  !*** ./src/pieces/oPiece.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return OPiece; });
/* harmony import */ var _piece__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./piece */ "./src/pieces/piece.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }



var OPiece =
/*#__PURE__*/
function (_Piece) {
  _inherits(OPiece, _Piece);

  function OPiece() {
    var _this;

    _classCallCheck(this, OPiece);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(OPiece).call(this));
    _this.name = "OPiece";
    _this.position = {
      top: [0, 4],
      right: [0, 5],
      bottom: [1, 4],
      left: [1, 5]
    };
    _this.removeSquares = {};
    debugger;
    return _this;
  }

  _createClass(OPiece, [{
    key: "drop",
    value: function drop() {
      this.removeSquares = {
        top: this.position.top.slice(),
        right: this.position.right.slice() // bottom: this.position.bottom.slice(),
        // left: this.position.left.slice()

      };
      this.position.top[0] = this.position.top[0] + 1;
      this.position.right[0] = this.position.right[0] + 1;
      this.position.bottom[0] = this.position.bottom[0] + 1;
      this.position.left[0] = this.position.left[0] + 1;
      debugger;
    } // dropBox() {
    //     let fieldColumns = document.querySelectorAll(".field-column");
    //     let rowNums = [0, 1];
    //     let colNums = [4, 5];
    //     colNums.forEach(col => {
    //         rowNums.forEach(row => {
    //             debugger
    //             this._addColor(fieldColumns, colNums, rowNums, "yellow");
    //         });
    //     });
    //     rowNums = rowNums.map(num => num + 1);
    //     // initialize setInterval as "clear" to conditionally exit interval 
    //     let clear = setInterval(() => {
    //         this._addColor(fieldColumns, colNums, rowNums, "yellow");
    //         if (rowNums[1] === 19) clearInterval(clear);
    //         //remove previous colored squares
    //         this._removeColor(fieldColumns, colNums, rowNums, "yellow")
    //         rowNums = rowNums.map(num => num + 1);
    //     }, 100);
    // }

  }]);

  return OPiece;
}(_piece__WEBPACK_IMPORTED_MODULE_0__["default"]);



/***/ }),

/***/ "./src/pieces/piece.js":
/*!*****************************!*\
  !*** ./src/pieces/piece.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Piece; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Piece =
/*#__PURE__*/
function () {
  function Piece() {
    _classCallCheck(this, Piece);
  }

  _createClass(Piece, [{
    key: "_populateField",
    // _addColor(fieldColumns, colNums, rowNums, classColor) {
    //     colNums.forEach((col, colIdx) => {
    //         rowNums.forEach((row, rowIdx) => {
    //             switch (classColor) {
    //                 case "purple": 
    //                     if (!((colIdx === 0 && rowIdx === 0) || (colIdx === 2 && rowIdx === 0))) {
    //                         debugger
    //                         fieldColumns[col].children[row].classList.add(classColor);
    //                     }
    //                     break;
    //                 default: 
    //                     fieldColumns[col].children[row].classList.add(classColor);
    //                     break;
    //             }
    //         });
    //     });
    // }
    value: function _populateField(field) {
      var _this = this;

      var position = Object.values(this.position);
      var removeSquares = Object.values(this.removeSquares);
      position.forEach(function (positionArray) {
        var _ref = [positionArray[0], positionArray[1]],
            row = _ref[0],
            col = _ref[1];

        switch (_this.name) {
          case "OPiece":
            field[row][col] = 1;
            break;

          case "IPiece":
            field[row][col] = 2;
            break;
        }
      });
      debugger;
      removeSquares.forEach(function (positionArray) {
        var _ref2 = [positionArray[0], positionArray[1]],
            row = _ref2[0],
            col = _ref2[1];
        field[row][col] = 0;
      });
      debugger;
    } // _removeColor(fieldColumns, colNums, rowNums, classColor) {
    //     colNums.forEach((col, colIdx) => {
    //         switch (classColor) {
    //             case "purple":
    //                 if ((rowNums[0] - 1) >= 0) {
    //                     if (colIdx === 0 || colIdx === 2) {
    //                         fieldColumns[col].children[rowNums[0]].classList.remove(classColor);
    //                     }
    //                     if (colIdx === 1) {
    //                         debugger
    //                         fieldColumns[col].children[rowNums[1] - 2].classList.remove(classColor);
    //                     }
    //                 }
    //                 break;
    //             default:
    //                 if ((rowNums[0] - 1) >= 0) {
    //                     fieldColumns[col].children[rowNums[0] - 1].classList.remove(classColor);
    //                 }
    //                 break;
    //         }
    //     })
    // }
    // turnPiece(piece, direction) {
    //     switch(piece) {
    //         case line {
    //         }
    //     }
    // }

  }]);

  return Piece;
}();



/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2ZpZWxkL2ZpZWxkLmpzIiwid2VicGFjazovLy8uL3NyYy9maWVsZC9ob2xkYm94LmpzIiwid2VicGFjazovLy8uL3NyYy9maWVsZC9uZXh0Qm94LmpzIiwid2VicGFjazovLy8uL3NyYy9nYW1lL2dhbWUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9waWVjZXMvaVBpZWNlLmpzIiwid2VicGFjazovLy8uL3NyYy9waWVjZXMvb1BpZWNlLmpzIiwid2VicGFjazovLy8uL3NyYy9waWVjZXMvcGllY2UuanMiXSwibmFtZXMiOlsiRmllbGQiLCJmaWVsZCIsImkiLCJyb3ciLCJwdXNoIiwiY29sdW1uIiwiZG9jdW1lbnQiLCJjcmVhdGVFbGVtZW50IiwiY2xhc3NMaXN0IiwiYWRkIiwiYXBwZW5kIiwiYXBwZW5kQ2hpbGQiLCJfY3JlYXRlQ29sdW1uIiwiY29udGFpbmVyIiwibmV4dEJveCIsIk5leHRCb3giLCJob2xkQm94IiwiSG9sZEJveCIsIl9jcmVhdGVGaWVsZCIsImNyZWF0ZU5leHRCb3hlcyIsInByZXBlbmQiLCJjcmVhdGVCb3giLCJib3giLCJfY3JlYXRlQm94Q29sdW1uIiwiX2NyZWF0ZU5leHRCb3hDb2x1bW4iLCJib3hlcyIsIl9jcmVhdGVOZXh0Qm94IiwiR2FtZSIsIl9zZXRGaWVsZCIsImNvbG9ycyIsIl9nZW5lcmF0ZUZpZWxkIiwibGVuZ3RoIiwiZmllbGRDb2x1bW5zIiwicXVlcnlTZWxlY3RvckFsbCIsImZvckVhY2giLCJyb3dJZHgiLCJjb2wiLCJjb2xJZHgiLCJzcXVhcmUiLCJjaGlsZHJlbiIsIk9iamVjdCIsInZhbHVlcyIsImNvbG9yIiwicmVtb3ZlIiwiaVBpZWNlIiwiSVBpZWNlIiwic2V0SW50ZXJ2YWwiLCJkcm9wIiwiX3BvcHVsYXRlRmllbGQiLCJyZW5kZXIiLCJhZGRFdmVudExpc3RlbmVyIiwiZmllbGRDb250YWluZXIiLCJnZXRFbGVtZW50QnlJZCIsImNyZWF0ZUZpZWxkV2l0aEhvbGRCb3hBbmROZXh0Qm94ZXMiLCJnYW1lIiwicGxheSIsIm5hbWUiLCJwb3NpdGlvbiIsInRvcCIsInJpZ2h0IiwiYm90dG9tIiwibGVmdCIsInJlbW92ZVNxdWFyZXMiLCJzbGljZSIsIlBpZWNlIiwiT1BpZWNlIiwicG9zaXRpb25BcnJheSJdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7O1FBR0E7UUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNsRkE7QUFDQTs7SUFFcUJBLEs7Ozs7Ozs7OztxQ0FDQTtBQUNiLFVBQUlDLEtBQUssR0FBRyxFQUFaOztBQUNBLFdBQUssSUFBSUMsQ0FBQyxHQUFHLENBQWIsRUFBZ0JBLENBQUMsR0FBRyxFQUFwQixFQUF3QkEsQ0FBQyxFQUF6QixFQUE2QjtBQUN6QixZQUFJQyxHQUFHLEdBQUcsQ0FBQyxDQUFELEVBQUcsQ0FBSCxFQUFLLENBQUws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QUNDLE1BQVAsQ0FBYyxLQUFLZ0IsUUFBbkIsQ0FBZjtBQUNBLFVBQUlLLGFBQWEsR0FBR3RCLE1BQU0sQ0FBQ0MsTUFBUCxDQUFjLEtBQUtxQixhQUFuQixDQUFwQjtBQUVBTCxjQUFRLENBQUN2QixPQUFULENBQWlCLFVBQUFnQyxhQUFhLEVBQUk7QUFBQSxtQkFDYixDQUFDQSxhQUFhLENBQUMsQ0FBRCxDQUFkLEVBQW1CQSxhQUFhLENBQUMsQ0FBRCxDQUFoQyxDQURhO0FBQUEsWUFDekIvRCxHQUR5QjtBQUFBLFlBQ3BCaUMsR0FEb0I7O0FBRTlCLGdCQUFRLEtBQUksQ0FBQ29CLElBQWI7QUFDSSxlQUFLLFFBQUw7QUFDSXZELGlCQUFLLENBQUNFLEdBQUQsQ0FBTCxDQUFXaUMsR0FBWCxJQUFrQixDQUFsQjtBQUNBOztBQUNKLGVBQUssUUFBTDtBQUNJbkMsaUJBQUssQ0FBQ0UsR0FBRCxDQUFMLENBQVdpQyxHQUFYLElBQWtCLENBQWxCO0FBQ0E7QUFOUjtBQVFILE9BVkQ7QUFZQTtBQUNBMEIsbUJBQWEsQ0FBQzVCLE9BQWQsQ0FBc0IsVUFBQWdDLGFBQWEsRUFBSTtBQUFBLG9CQUNsQixDQUFDQSxhQUFhLENBQUMsQ0FBRCxDQUFkLEVBQW1CQSxhQUFhLENBQUMsQ0FBRCxDQUFoQyxDQURrQjtBQUFBLFlBQzlCL0QsR0FEOEI7QUFBQSxZQUN6QmlDLEdBRHlCO0FBRW5DbkMsYUFBSyxDQUFDRSxHQUFELENBQUwsQ0FBV2lDLEdBQVgsSUFBa0IsQ0FBbEI7QUFDSCxPQUhEO0FBS0E7QUFDSCxLLENBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0EiLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiL2Rpc3QvXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2luZGV4LmpzXCIpO1xuIiwiaW1wb3J0IEhvbGRCb3ggZnJvbSAnLi9ob2xkYm94JztcbmltcG9ydCBOZXh0Qm94IGZyb20gJy4vbmV4dEJveCc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEZpZWxkIHsgICAgXG4gICAgX2dlbmVyYXRlRmllbGQoKSB7XG4gICAgICAgIGxldCBmaWVsZCA9IFtdO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IDIwOyBpKyspIHtcbiAgICAgICAgICAgIGxldCByb3cgPSBbMCwwLDAsMCwwLDAsMCwwLDAsMF07XG4gICAgICAgICAgICBmaWVsZC5wdXNoKHJvdyk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGZpZWxkO1xuICAgIH1cblxuICAgIC8vX2lzVmFsaWRNb3ZlXG5cbiAgICBfY3JlYXRlQ29sdW1uKCkge1xuICAgICAgICBsZXQgY29sdW1uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInVsXCIpO1xuICAgICAgICBjb2x1bW4uY2xhc3NMaXN0LmFkZChcImZpZWxkLWNvbHVtblwiKTtcblxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IDIwOyBpKyspIHtcbiAgICAgICAgICAgIGNvbHVtbi5hcHBlbmQoZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpXCIpKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gY29sdW1uO1xuICAgIH1cblxuICAgIF9jcmVhdGVGaWVsZCgpIHtcbiAgICAgICAgbGV0IGZpZWxkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgZmllbGQuY2xhc3NMaXN0LmFkZChcImZpZWxkLWJveFwiKTtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCAxMDsgaSsrKSB7XG4gICAgICAgICAgICBmaWVsZC5hcHBlbmRDaGlsZCh0aGlzLl9jcmVhdGVDb2x1bW4oKSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGZpZWxkO1xuICAgIH1cblxuICAgIGNyZWF0ZUZpZWxkV2l0aEhvbGRCb3hBbmROZXh0Qm94ZXMoY29udGFpbmVyKSB7XG4gICAgICAgIGxldCBuZXh0Qm94ID0gbmV3IE5leHRCb3goKTtcbiAgICAgICAgbGV0IGhvbGRCb3ggPSBuZXcgSG9sZEJveCgpO1xuICAgICAgICBjb250YWluZXIuYXBwZW5kKHRoaXMuX2NyZWF0ZUZpZWxkKCkpO1xuICAgICAgICBjb250YWluZXIuYXBwZW5kKG5leHRCb3guY3JlYXRlTmV4dEJveGVzKCkpO1xuICAgICAgICBjb250YWluZXIucHJlcGVuZChob2xkQm94LmNyZWF0ZUJveCgpKTtcbiAgICAgICAgcmV0dXJuIGNvbnRhaW5lcjtcbiAgICB9XG5cbn0iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBIb2xkQm94IHtcbiAgICBfY3JlYXRlQm94Q29sdW1uKCkge1xuICAgICAgICBsZXQgY29sdW1uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInVsXCIpO1xuICAgICAgICBjb2x1bW4uY2xhc3NMaXN0LmFkZChcImhvbGQtY29sdW1uXCIpO1xuXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgNDsgaSsrKSB7XG4gICAgICAgICAgICBjb2x1bW4uYXBwZW5kKGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaVwiKSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGNvbHVtbjtcbiAgICB9XG5cbiAgICBjcmVhdGVCb3goKSB7XG4gICAgICAgIGxldCBib3ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICBib3guY2xhc3NMaXN0LmFkZChcImhvbGQtYm94XCIpO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IDU7IGkrKykge1xuICAgICAgICAgICAgYm94LmFwcGVuZENoaWxkKHRoaXMuX2NyZWF0ZUJveENvbHVtbigpKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gYm94O1xuICAgIH1cbn0iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBOZXh0Qm94IHtcbiAgICBfY3JlYXRlTmV4dEJveENvbHVtbigpIHtcbiAgICAgICAgbGV0IGNvbHVtbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ1bFwiKTtcbiAgICAgICAgY29sdW1uLmNsYXNzTGlzdC5hZGQoXCJuZXh0LWNvbHVtblwiKTtcblxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IDQ7IGkrKykge1xuICAgICAgICAgICAgY29sdW1uLmFwcGVuZChkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIikpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBjb2x1bW47XG4gICAgfVxuXG4gICAgX2NyZWF0ZU5leHRCb3goKSB7XG4gICAgICAgIGxldCBib3ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICBib3guY2xhc3NMaXN0LmFkZChcIm5leHQtYm94XCIpO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IDU7IGkrKykge1xuICAgICAgICAgICAgYm94LmFwcGVuZENoaWxkKHRoaXMuX2NyZWF0ZU5leHRCb3hDb2x1bW4oKSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGJveDtcbiAgICB9XG5cbiAgICBjcmVhdGVOZXh0Qm94ZXMoKSB7XG4gICAgICAgIGxldCBib3hlcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIGJveGVzLmNsYXNzTGlzdC5hZGQoXCJuZXh0LWJveGVzXCIpO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IDU7IGkrKykge1xuICAgICAgICAgICAgYm94ZXMuYXBwZW5kQ2hpbGQodGhpcy5fY3JlYXRlTmV4dEJveCgpKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gYm94ZXM7XG4gICAgfVxufSIsImltcG9ydCBGaWVsZCBmcm9tICcuLi9maWVsZC9maWVsZCc7XG5pbXBvcnQgT1BpZWNlIGZyb20gJy4uL3BpZWNlcy9vUGllY2UnO1xuaW1wb3J0IElQaWVjZSBmcm9tICcuLi9waWVjZXMvaVBpZWNlJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgR2FtZSB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMuZmllbGQgPSB0aGlzLl9zZXRGaWVsZCgpXG5cbiAgICAgICAgdGhpcy5jb2xvcnMgPSB7XG4gICAgICAgICAgICAxOiBcInllbGxvd1wiLFxuICAgICAgICAgICAgMjogXCJibHVlXCIsXG4gICAgICAgIH1cbiAgICAgICAgZGVidWdnZXJcbiAgICB9XG5cbiAgICBfc2V0RmllbGQoKSB7XG4gICAgICAgIGxldCBmaWVsZCA9IG5ldyBGaWVsZCgpO1xuICAgICAgICByZXR1cm4gZmllbGQuX2dlbmVyYXRlRmllbGQoKTtcbiAgICB9XG5cbiAgICBfaXNPdmVyKCkge1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuZmllbGRbMF0ubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGRlYnVnZ2VyXG4gICAgICAgICAgICBpZiAodGhpcy5maWVsZFswXVtpXSkgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgbGV0IGZpZWxkQ29sdW1ucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuZmllbGQtY29sdW1uXCIpO1xuICAgICAgICB0aGlzLmZpZWxkLmZvckVhY2goKHJvdywgcm93SWR4KSA9PiB7XG4gICAgICAgICAgICByb3cuZm9yRWFjaCgoY29sLCBjb2xJZHgpID0+IHtcbiAgICAgICAgICAgICAgICBsZXQgc3F1YXJlID0gdGhpcy5maWVsZFtyb3dJZHhdW2NvbElkeF07XG4gICAgICAgICAgICAgICAgaWYgKHNxdWFyZSkge1xuICAgICAgICAgICAgICAgICAgICBkZWJ1Z2dlclxuICAgICAgICAgICAgICAgICAgICBmaWVsZENvbHVtbnNbY29sSWR4XS5jaGlsZHJlbltyb3dJZHhdLmNsYXNzTGlzdC5hZGQodGhpcy5jb2xvcnNbc3F1YXJlXSk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgZGVidWdnZXJcbiAgICAgICAgICAgICAgICAgICAgT2JqZWN0LnZhbHVlcyh0aGlzLmNvbG9ycykuZm9yRWFjaChjb2xvciA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBkZWJ1Z2dlclxuICAgICAgICAgICAgICAgICAgICAgICAgZmllbGRDb2x1bW5zW2NvbElkeF0uY2hpbGRyZW5bcm93SWR4XS5jbGFzc0xpc3QucmVtb3ZlKGNvbG9yKTtcbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIFxuICAgIHBsYXkoY29udGFpbmVyKSB7XG4gICAgICAgIGxldCBpUGllY2UgPSBuZXcgSVBpZWNlKCk7XG4gICAgICAgIHNldEludGVydmFsKCgpID0+IHtcbiAgICAgICAgICAgIGlQaWVjZS5kcm9wKCk7XG4gICAgICAgICAgICBpUGllY2UuX3BvcHVsYXRlRmllbGQodGhpcy5maWVsZCk7XG4gICAgICAgICAgICB0aGlzLnJlbmRlcihjb250YWluZXIpO1xuICAgICAgICAgICAgZGVidWdnZXJcbiAgICAgICAgfSwgMTAwMCk7XG4gICAgfVxuXG59IiwiaW1wb3J0IEdhbWUgZnJvbSAnLi9nYW1lL2dhbWUnO1xuaW1wb3J0IEZpZWxkIGZyb20gJy4vZmllbGQvZmllbGQnO1xuXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCAoKSA9PiB7XG4gICAgY29uc3QgZmllbGRDb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImZpZWxkLWNvbnRhaW5lclwiKTtcblxuICAgIGxldCBmaWVsZCA9IG5ldyBGaWVsZCgpO1xuICAgIGZpZWxkLmNyZWF0ZUZpZWxkV2l0aEhvbGRCb3hBbmROZXh0Qm94ZXMoZmllbGRDb250YWluZXIpO1xuXG4gICAgbGV0IGdhbWUgPSBuZXcgR2FtZSgpO1xuICAgIGdhbWUucGxheShmaWVsZENvbnRhaW5lcik7XG5cbn0pOyIsImltcG9ydCBQaWVjZSBmcm9tICcuL3BpZWNlJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSVBpZWNlIGV4dGVuZHMgUGllY2Uge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICB0aGlzLm5hbWUgPSBcIklQaWVjZVwiO1xuICAgICAgICB0aGlzLnBvc2l0aW9uID0ge1xuICAgICAgICAgICAgdG9wOiBbMCwzXSxcbiAgICAgICAgICAgIHJpZ2h0OiBbMCw0XSxcbiAgICAgICAgICAgIGJvdHRvbTogWzAsNV0sXG4gICAgICAgICAgICBsZWZ0OiBbMCw2XVxuICAgICAgICB9O1xuXG4gICAgICAgIHRoaXMucmVtb3ZlU3F1YXJlcyA9IHt9O1xuICAgIH1cblxuICAgIGRyb3AoKSB7XG4gICAgICAgIHRoaXMucmVtb3ZlU3F1YXJlcyA9IHtcbiAgICAgICAgICAgIHRvcDogdGhpcy5wb3NpdGlvbi50b3Auc2xpY2UoKSxcbiAgICAgICAgICAgIHJpZ2h0OiB0aGlzLnBvc2l0aW9uLnJpZ2h0LnNsaWNlKCksXG4gICAgICAgICAgICBib3R0b206IHRoaXMucG9zaXRpb24uYm90dG9tLnNsaWNlKCksXG4gICAgICAgICAgICBsZWZ0OiB0aGlzLnBvc2l0aW9uLmxlZnQuc2xpY2UoKVxuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5wb3NpdGlvbi50b3BbMF0gPSB0aGlzLnBvc2l0aW9uLnRvcFswXSArIDE7XG4gICAgICAgIHRoaXMucG9zaXRpb24ucmlnaHRbMF0gPSB0aGlzLnBvc2l0aW9uLnJpZ2h0WzBdICsgMTtcbiAgICAgICAgdGhpcy5wb3NpdGlvbi5ib3R0b21bMF0gPSB0aGlzLnBvc2l0aW9uLmJvdHRvbVswXSArIDE7XG4gICAgICAgIHRoaXMucG9zaXRpb24ubGVmdFswXSA9IHRoaXMucG9zaXRpb24ubGVmdFswXSArIDE7XG4gICAgICAgIGRlYnVnZ2VyXG4gICAgfVxuXG4gICAgLy8gZHJvcExpbmUoKSB7XG4gICAgLy8gICAgIGxldCBmaWVsZENvbHVtbnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmZpZWxkLWNvbHVtblwiKTtcblxuICAgIC8vICAgICBsZXQgcm93TnVtcyA9IFswXTtcbiAgICAvLyAgICAgbGV0IGNvbE51bXMgPSBbMywgNCwgNSwgNl07XG5cbiAgICAvLyAgICAgdGhpcy5fYWRkQ29sb3IoZmllbGRDb2x1bW5zLCBjb2xOdW1zLCByb3dOdW1zLCBcImJsdWVcIik7XG4gICAgLy8gICAgIHJvd051bXMgPSByb3dOdW1zLm1hcChudW0gPT4gbnVtICsgMSk7XG5cbiAgICAvLyAgICAgLy8gaW5pdGlhbGl6ZSBzZXRJbnRlcnZhbCBhcyBcImNsZWFyXCIgdG8gY29uZGl0aW9uYWxseSBleGl0IGludGVydmFsIFxuICAgIC8vICAgICBsZXQgY2xlYXIgPSBzZXRJbnRlcnZhbCgoKSA9PiB7XG4gICAgLy8gICAgICAgICB0aGlzLl9hZGRDb2xvcihmaWVsZENvbHVtbnMsIGNvbE51bXMsIHJvd051bXMsIFwiYmx1ZVwiKTtcbiAgICAvLyAgICAgICAgIGlmIChyb3dOdW1zWzBdID09PSAxOSkgY2xlYXJJbnRlcnZhbChjbGVhcik7XG5cbiAgICAvLyAgICAgICAgIC8vcmVtb3ZlIHByZXZpb3VzIGNvbG9yZWQgc3F1YXJlc1xuICAgIC8vICAgICAgICAgdGhpcy5fcmVtb3ZlQ29sb3IoZmllbGRDb2x1bW5zLCBjb2xOdW1zLCByb3dOdW1zLCBcImJsdWVcIilcblxuICAgIC8vICAgICAgICAgcm93TnVtcyA9IHJvd051bXMubWFwKG51bSA9PiBudW0gKyAxKTtcbiAgICAvLyAgICAgfSwgMTAwKTtcbiAgICAvLyB9XG59XG4iLCJpbXBvcnQgUGllY2UgZnJvbSAnLi9waWVjZSc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE9QaWVjZSBleHRlbmRzIFBpZWNlIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgdGhpcy5uYW1lID0gXCJPUGllY2VcIjtcbiAgICAgICAgdGhpcy5wb3NpdGlvbiA9IHtcbiAgICAgICAgICAgIHRvcDogWzAsNF0sXG4gICAgICAgICAgICByaWdodDogWzAsNV0sXG4gICAgICAgICAgICBib3R0b206IFsxLDRdLFxuICAgICAgICAgICAgbGVmdDogWzEsNV1cbiAgICAgICAgfTtcblxuICAgICAgICB0aGlzLnJlbW92ZVNxdWFyZXMgPSB7fTtcblxuICAgICAgICBkZWJ1Z2dlclxuICAgIH1cblxuICAgIGRyb3AoKSB7XG4gICAgICAgIHRoaXMucmVtb3ZlU3F1YXJlcyA9IHtcbiAgICAgICAgICAgIHRvcDogdGhpcy5wb3NpdGlvbi50b3Auc2xpY2UoKSxcbiAgICAgICAgICAgIHJpZ2h0OiB0aGlzLnBvc2l0aW9uLnJpZ2h0LnNsaWNlKCksXG4gICAgICAgICAgICAvLyBib3R0b206IHRoaXMucG9zaXRpb24uYm90dG9tLnNsaWNlKCksXG4gICAgICAgICAgICAvLyBsZWZ0OiB0aGlzLnBvc2l0aW9uLmxlZnQuc2xpY2UoKVxuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5wb3NpdGlvbi50b3BbMF0gPSB0aGlzLnBvc2l0aW9uLnRvcFswXSArIDE7XG4gICAgICAgIHRoaXMucG9zaXRpb24ucmlnaHRbMF0gPSB0aGlzLnBvc2l0aW9uLnJpZ2h0WzBdICsgMTtcbiAgICAgICAgdGhpcy5wb3NpdGlvbi5ib3R0b21bMF0gPSB0aGlzLnBvc2l0aW9uLmJvdHRvbVswXSArIDE7XG4gICAgICAgIHRoaXMucG9zaXRpb24ubGVmdFswXSA9IHRoaXMucG9zaXRpb24ubGVmdFswXSArIDE7XG4gICAgICAgIGRlYnVnZ2VyXG4gICAgfVxuXG4gICAgLy8gZHJvcEJveCgpIHtcbiAgICAvLyAgICAgbGV0IGZpZWxkQ29sdW1ucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuZmllbGQtY29sdW1uXCIpO1xuXG4gICAgLy8gICAgIGxldCByb3dOdW1zID0gWzAsIDFdO1xuICAgIC8vICAgICBsZXQgY29sTnVtcyA9IFs0LCA1XTtcbiAgICAvLyAgICAgY29sTnVtcy5mb3JFYWNoKGNvbCA9PiB7XG4gICAgLy8gICAgICAgICByb3dOdW1zLmZvckVhY2gocm93ID0+IHtcbiAgICAvLyAgICAgICAgICAgICBkZWJ1Z2dlclxuICAgIC8vICAgICAgICAgICAgIHRoaXMuX2FkZENvbG9yKGZpZWxkQ29sdW1ucywgY29sTnVtcywgcm93TnVtcywgXCJ5ZWxsb3dcIik7XG4gICAgLy8gICAgICAgICB9KTtcbiAgICAvLyAgICAgfSk7XG4gICAgLy8gICAgIHJvd051bXMgPSByb3dOdW1zLm1hcChudW0gPT4gbnVtICsgMSk7XG5cbiAgICAvLyAgICAgLy8gaW5pdGlhbGl6ZSBzZXRJbnRlcnZhbCBhcyBcImNsZWFyXCIgdG8gY29uZGl0aW9uYWxseSBleGl0IGludGVydmFsIFxuICAgIC8vICAgICBsZXQgY2xlYXIgPSBzZXRJbnRlcnZhbCgoKSA9PiB7XG4gICAgLy8gICAgICAgICB0aGlzLl9hZGRDb2xvcihmaWVsZENvbHVtbnMsIGNvbE51bXMsIHJvd051bXMsIFwieWVsbG93XCIpO1xuICAgIC8vICAgICAgICAgaWYgKHJvd051bXNbMV0gPT09IDE5KSBjbGVhckludGVydmFsKGNsZWFyKTtcblxuICAgIC8vICAgICAgICAgLy9yZW1vdmUgcHJldmlvdXMgY29sb3JlZCBzcXVhcmVzXG4gICAgLy8gICAgICAgICB0aGlzLl9yZW1vdmVDb2xvcihmaWVsZENvbHVtbnMsIGNvbE51bXMsIHJvd051bXMsIFwieWVsbG93XCIpXG5cbiAgICAvLyAgICAgICAgIHJvd051bXMgPSByb3dOdW1zLm1hcChudW0gPT4gbnVtICsgMSk7XG4gICAgLy8gICAgIH0sIDEwMCk7XG4gICAgLy8gfVxufSIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIFBpZWNlIHtcblxuICAgIC8vIF9hZGRDb2xvcihmaWVsZENvbHVtbnMsIGNvbE51bXMsIHJvd051bXMsIGNsYXNzQ29sb3IpIHtcbiAgICAvLyAgICAgY29sTnVtcy5mb3JFYWNoKChjb2wsIGNvbElkeCkgPT4ge1xuICAgIC8vICAgICAgICAgcm93TnVtcy5mb3JFYWNoKChyb3csIHJvd0lkeCkgPT4ge1xuICAgIC8vICAgICAgICAgICAgIHN3aXRjaCAoY2xhc3NDb2xvcikge1xuICAgIC8vICAgICAgICAgICAgICAgICBjYXNlIFwicHVycGxlXCI6IFxuICAgIC8vICAgICAgICAgICAgICAgICAgICAgaWYgKCEoKGNvbElkeCA9PT0gMCAmJiByb3dJZHggPT09IDApIHx8IChjb2xJZHggPT09IDIgJiYgcm93SWR4ID09PSAwKSkpIHtcbiAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICBkZWJ1Z2dlclxuICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgIGZpZWxkQ29sdW1uc1tjb2xdLmNoaWxkcmVuW3Jvd10uY2xhc3NMaXN0LmFkZChjbGFzc0NvbG9yKTtcbiAgICAvLyAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAvLyAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgIC8vICAgICAgICAgICAgICAgICBkZWZhdWx0OiBcbiAgICAvLyAgICAgICAgICAgICAgICAgICAgIGZpZWxkQ29sdW1uc1tjb2xdLmNoaWxkcmVuW3Jvd10uY2xhc3NMaXN0LmFkZChjbGFzc0NvbG9yKTtcbiAgICAvLyAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgIC8vICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBcbiAgICAvLyAgICAgICAgIH0pO1xuICAgIC8vICAgICB9KTtcbiAgICAvLyB9XG5cbiAgICBfcG9wdWxhdGVGaWVsZChmaWVsZCkge1xuICAgICAgICBsZXQgcG9zaXRpb24gPSBPYmplY3QudmFsdWVzKHRoaXMucG9zaXRpb24pO1xuICAgICAgICBsZXQgcmVtb3ZlU3F1YXJlcyA9IE9iamVjdC52YWx1ZXModGhpcy5yZW1vdmVTcXVhcmVzKTtcblxuICAgICAgICBwb3NpdGlvbi5mb3JFYWNoKHBvc2l0aW9uQXJyYXkgPT4ge1xuICAgICAgICAgICAgbGV0IFtyb3csIGNvbF0gPSBbcG9zaXRpb25BcnJheVswXSwgcG9zaXRpb25BcnJheVsxXV07XG4gICAgICAgICAgICBzd2l0Y2ggKHRoaXMubmFtZSkge1xuICAgICAgICAgICAgICAgIGNhc2UoXCJPUGllY2VcIik6IFxuICAgICAgICAgICAgICAgICAgICBmaWVsZFtyb3ddW2NvbF0gPSAxO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlKFwiSVBpZWNlXCIpOiBcbiAgICAgICAgICAgICAgICAgICAgZmllbGRbcm93XVtjb2xdID0gMjtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGRlYnVnZ2VyXG4gICAgICAgIHJlbW92ZVNxdWFyZXMuZm9yRWFjaChwb3NpdGlvbkFycmF5ID0+IHtcbiAgICAgICAgICAgIGxldCBbcm93LCBjb2xdID0gW3Bvc2l0aW9uQXJyYXlbMF0sIHBvc2l0aW9uQXJyYXlbMV1dO1xuICAgICAgICAgICAgZmllbGRbcm93XVtjb2xdID0gMDtcbiAgICAgICAgfSk7XG4gICAgICAgIFxuICAgICAgICBkZWJ1Z2dlclxuICAgIH1cblxuICAgIC8vIF9yZW1vdmVDb2xvcihmaWVsZENvbHVtbnMsIGNvbE51bXMsIHJvd051bXMsIGNsYXNzQ29sb3IpIHtcbiAgICAvLyAgICAgY29sTnVtcy5mb3JFYWNoKChjb2wsIGNvbElkeCkgPT4ge1xuICAgIC8vICAgICAgICAgc3dpdGNoIChjbGFzc0NvbG9yKSB7XG4gICAgLy8gICAgICAgICAgICAgY2FzZSBcInB1cnBsZVwiOlxuICAgIC8vICAgICAgICAgICAgICAgICBpZiAoKHJvd051bXNbMF0gLSAxKSA+PSAwKSB7XG4gICAgLy8gICAgICAgICAgICAgICAgICAgICBpZiAoY29sSWR4ID09PSAwIHx8IGNvbElkeCA9PT0gMikge1xuICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgIGZpZWxkQ29sdW1uc1tjb2xdLmNoaWxkcmVuW3Jvd051bXNbMF1dLmNsYXNzTGlzdC5yZW1vdmUoY2xhc3NDb2xvcik7XG4gICAgLy8gICAgICAgICAgICAgICAgICAgICB9XG4gICAgLy8gICAgICAgICAgICAgICAgICAgICBpZiAoY29sSWR4ID09PSAxKSB7XG4gICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgZGVidWdnZXJcbiAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICBmaWVsZENvbHVtbnNbY29sXS5jaGlsZHJlbltyb3dOdW1zWzFdIC0gMl0uY2xhc3NMaXN0LnJlbW92ZShjbGFzc0NvbG9yKTtcbiAgICAvLyAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAvLyAgICAgICAgICAgICAgICAgfVxuICAgIC8vICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAvLyAgICAgICAgICAgICBkZWZhdWx0OlxuICAgIC8vICAgICAgICAgICAgICAgICBpZiAoKHJvd051bXNbMF0gLSAxKSA+PSAwKSB7XG4gICAgLy8gICAgICAgICAgICAgICAgICAgICBmaWVsZENvbHVtbnNbY29sXS5jaGlsZHJlbltyb3dOdW1zWzBdIC0gMV0uY2xhc3NMaXN0LnJlbW92ZShjbGFzc0NvbG9yKTtcbiAgICAvLyAgICAgICAgICAgICAgICAgfVxuICAgIC8vICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAvLyAgICAgICAgIH1cbiAgICAvLyAgICAgfSlcbiAgICAvLyB9XG5cbiAgICAvLyB0dXJuUGllY2UocGllY2UsIGRpcmVjdGlvbikge1xuICAgIC8vICAgICBzd2l0Y2gocGllY2UpIHtcbiAgICAvLyAgICAgICAgIGNhc2UgbGluZSB7XG5cbiAgICAvLyAgICAgICAgIH1cbiAgICAvLyAgICAgfVxuICAgIC8vIH1cbn0iXSwic291cmNlUm9vdCI6IiJ9