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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2ZpZWxkL2ZpZWxkLmpzIiwid2VicGFjazovLy8uL3NyYy9maWVsZC9ob2xkYm94LmpzIiwid2VicGFjazovLy8uL3NyYy9maWVsZC9uZXh0Qm94LmpzIiwid2VicGFjazovLy8uL3NyYy9nYW1lL2dhbWUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9waWVjZXMvaVBpZWNlLmpzIiwid2VicGFjazovLy8uL3NyYy9waWVjZXMvb1BpZWNlLmpzIiwid2VicGFjazovLy8uL3NyYy9waWVjZXMvcGllY2UuanMiXSwibmFtZXMiOlsiRmllbGQiLCJmaWVsZCIsImkiLCJyb3ciLCJwdXNoIiwiY29sdW1uIiwiZG9jdW1lbnQiLCJjcmVhdGVFbGVtZW50IiwiY2xhc3NMaXN0IiwiYWRkIiwiYXBwZW5kIiwiYXBwZW5kQ2hpbGQiLCJfY3JlYXRlQ29sdW1uIiwiY29udGFpbmVyIiwibmV4dEJveCIsIk5leHRCb3giLCJob2xkQm94IiwiSG9sZEJveCIsIl9jcmVhdGVGaWVsZCIsImNyZWF0ZU5leHRCb3hlcyIsInByZXBlbmQiLCJjcmVhdGVCb3giLCJib3giLCJfY3JlYXRlQm94Q29sdW1uIiwiX2NyZWF0ZU5leHRCb3hDb2x1bW4iLCJib3hlcyIsIl9jcmVhdGVOZXh0Qm94IiwiR2FtZSIsIl9zZXRGaWVsZCIsImNvbG9ycyIsIl9nZW5lcmF0ZUZpZWxkIiwibGVuZ3RoIiwiZmllbGRDb2x1bW5zIiwicXVlcnlTZWxlY3RvckFsbCIsImZvckVhY2giLCJyb3dJZHgiLCJjb2wiLCJjb2xJZHgiLCJzcXVhcmUiLCJjaGlsZHJlbiIsIk9iamVjdCIsInZhbHVlcyIsImNvbG9yIiwicmVtb3ZlIiwiaVBpZWNlIiwiSVBpZWNlIiwic2V0SW50ZXJ2YWwiLCJkcm9wIiwiX3BvcHVsYXRlRmllbGQiLCJyZW5kZXIiLCJhZGRFdmVudExpc3RlbmVyIiwiZmllbGRDb250YWluZXIiLCJnZXRFbGVtZW50QnlJZCIsImNyZWF0ZUZpZWxkV2l0aEhvbGRCb3hBbmROZXh0Qm94ZXMiLCJnYW1lIiwicGxheSIsIm5hbWUiLCJwb3NpdGlvbiIsInRvcCIsInJpZ2h0IiwiYm90dG9tIiwibGVmdCIsInJlbW92ZVNxdWFyZXMiLCJzbGljZSIsIlBpZWNlIiwiT1BpZWNlIiwicG9zaXRpb25BcnJheSJdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7O1FBR0E7UUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNsRkE7QUFDQTs7SUFFcUJBLEs7Ozs7Ozs7OztxQ0FDQTtBQUNiLFVBQUlDLEtBQUssR0FBRyxFQUFaOztBQUNBLFdBQUssSUFBSUMsQ0FBQyxHQUFHLENBQWIsRUFBZ0JBLENBQUMsR0FBRyxFQUFwQixFQUF3QkEsQ0FBQyxFQUF6QixFQUE2QjtBQUN6QixZQUFJQyxHQUFHLEdBQUcsQ0FBQyxDQUFELEVBQUcsQ0FBSCxFQUFLLENBQUws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QUNDLE1BQVAsQ0FBYyxLQUFLZ0IsUUFBbkIsQ0FBZjtBQUNBLFVBQUlLLGFBQWEsR0FBR3RCLE1BQU0sQ0FBQ0MsTUFBUCxDQUFjLEtBQUtxQixhQUFuQixDQUFwQjtBQUVBTCxjQUFRLENBQUN2QixPQUFULENBQWlCLFVBQUFnQyxhQUFhLEVBQUk7QUFBQSxtQkFDYixDQUFDQSxhQUFhLENBQUMsQ0FBRCxDQUFkLEVBQW1CQSxhQUFhLENBQUMsQ0FBRCxDQUFoQyxDQURhO0FBQUEsWUFDekIvRCxHQUR5QjtBQUFBLFlBQ3BCaUMsR0FEb0I7O0FBRTlCLGdCQUFRLEtBQUksQ0FBQ29CLElBQWI7QUFDSSxlQUFLLFFBQUw7QUFDSXZELGlCQUFLLENBQUNFLEdBQUQsQ0FBTCxDQUFXaUMsR0FBWCxJQUFrQixDQUFsQjtBQUNBOztBQUNKLGVBQUssUUFBTDtBQUNJbkMsaUJBQUssQ0FBQ0UsR0FBRCxDQUFMLENBQVdpQyxHQUFYLElBQWtCLENBQWxCO0FBQ0E7QUFOUjtBQVFILE9BVkQ7QUFZQTtBQUNBMEIsbUJBQWEsQ0FBQzVCLE9BQWQsQ0FBc0IsVUFBQWdDLGFBQWEsRUFBSTtBQUFBLG9CQUNkLENBQUNBLGFBQWEsQ0FBQyxDQUFELENBQWQsRUFBbUJBLGFBQWEsQ0FBQyxDQUFELENBQWhDLENBRGM7QUFBQSxZQUMxQi9ELEdBRDBCO0FBQUEsWUFDckJpQyxHQURxQjtBQUUvQm5DLGFBQUssQ0FBQ0UsR0FBRCxDQUFMLENBQVdpQyxHQUFYLElBQWtCLENBQWxCO0FBQ0gsT0FITDtBQUtBO0FBQ0gsSyxDQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIi9kaXN0L1wiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9pbmRleC5qc1wiKTtcbiIsImltcG9ydCBIb2xkQm94IGZyb20gJy4vaG9sZGJveCc7XG5pbXBvcnQgTmV4dEJveCBmcm9tICcuL25leHRCb3gnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBGaWVsZCB7ICAgIFxuICAgIF9nZW5lcmF0ZUZpZWxkKCkge1xuICAgICAgICBsZXQgZmllbGQgPSBbXTtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCAyMDsgaSsrKSB7XG4gICAgICAgICAgICBsZXQgcm93ID0gWzAsMCwwLDAsMCwwLDAsMCwwLDBdO1xuICAgICAgICAgICAgZmllbGQucHVzaChyb3cpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBmaWVsZDtcbiAgICB9XG5cbiAgICAvL19pc1ZhbGlkTW92ZVxuXG4gICAgX2NyZWF0ZUNvbHVtbigpIHtcbiAgICAgICAgbGV0IGNvbHVtbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ1bFwiKTtcbiAgICAgICAgY29sdW1uLmNsYXNzTGlzdC5hZGQoXCJmaWVsZC1jb2x1bW5cIik7XG5cbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCAyMDsgaSsrKSB7XG4gICAgICAgICAgICBjb2x1bW4uYXBwZW5kKGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaVwiKSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGNvbHVtbjtcbiAgICB9XG5cbiAgICBfY3JlYXRlRmllbGQoKSB7XG4gICAgICAgIGxldCBmaWVsZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIGZpZWxkLmNsYXNzTGlzdC5hZGQoXCJmaWVsZC1ib3hcIik7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMTA7IGkrKykge1xuICAgICAgICAgICAgZmllbGQuYXBwZW5kQ2hpbGQodGhpcy5fY3JlYXRlQ29sdW1uKCkpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBmaWVsZDtcbiAgICB9XG5cbiAgICBjcmVhdGVGaWVsZFdpdGhIb2xkQm94QW5kTmV4dEJveGVzKGNvbnRhaW5lcikge1xuICAgICAgICBsZXQgbmV4dEJveCA9IG5ldyBOZXh0Qm94KCk7XG4gICAgICAgIGxldCBob2xkQm94ID0gbmV3IEhvbGRCb3goKTtcbiAgICAgICAgY29udGFpbmVyLmFwcGVuZCh0aGlzLl9jcmVhdGVGaWVsZCgpKTtcbiAgICAgICAgY29udGFpbmVyLmFwcGVuZChuZXh0Qm94LmNyZWF0ZU5leHRCb3hlcygpKTtcbiAgICAgICAgY29udGFpbmVyLnByZXBlbmQoaG9sZEJveC5jcmVhdGVCb3goKSk7XG4gICAgICAgIHJldHVybiBjb250YWluZXI7XG4gICAgfVxuXG59IiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgSG9sZEJveCB7XG4gICAgX2NyZWF0ZUJveENvbHVtbigpIHtcbiAgICAgICAgbGV0IGNvbHVtbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ1bFwiKTtcbiAgICAgICAgY29sdW1uLmNsYXNzTGlzdC5hZGQoXCJob2xkLWNvbHVtblwiKTtcblxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IDQ7IGkrKykge1xuICAgICAgICAgICAgY29sdW1uLmFwcGVuZChkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIikpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBjb2x1bW47XG4gICAgfVxuXG4gICAgY3JlYXRlQm94KCkge1xuICAgICAgICBsZXQgYm94ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgYm94LmNsYXNzTGlzdC5hZGQoXCJob2xkLWJveFwiKTtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCA1OyBpKyspIHtcbiAgICAgICAgICAgIGJveC5hcHBlbmRDaGlsZCh0aGlzLl9jcmVhdGVCb3hDb2x1bW4oKSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGJveDtcbiAgICB9XG59IiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgTmV4dEJveCB7XG4gICAgX2NyZWF0ZU5leHRCb3hDb2x1bW4oKSB7XG4gICAgICAgIGxldCBjb2x1bW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidWxcIik7XG4gICAgICAgIGNvbHVtbi5jbGFzc0xpc3QuYWRkKFwibmV4dC1jb2x1bW5cIik7XG5cbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCA0OyBpKyspIHtcbiAgICAgICAgICAgIGNvbHVtbi5hcHBlbmQoZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpXCIpKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gY29sdW1uO1xuICAgIH1cblxuICAgIF9jcmVhdGVOZXh0Qm94KCkge1xuICAgICAgICBsZXQgYm94ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgYm94LmNsYXNzTGlzdC5hZGQoXCJuZXh0LWJveFwiKTtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCA1OyBpKyspIHtcbiAgICAgICAgICAgIGJveC5hcHBlbmRDaGlsZCh0aGlzLl9jcmVhdGVOZXh0Qm94Q29sdW1uKCkpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBib3g7XG4gICAgfVxuXG4gICAgY3JlYXRlTmV4dEJveGVzKCkge1xuICAgICAgICBsZXQgYm94ZXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICBib3hlcy5jbGFzc0xpc3QuYWRkKFwibmV4dC1ib3hlc1wiKTtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCA1OyBpKyspIHtcbiAgICAgICAgICAgIGJveGVzLmFwcGVuZENoaWxkKHRoaXMuX2NyZWF0ZU5leHRCb3goKSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGJveGVzO1xuICAgIH1cbn0iLCJpbXBvcnQgRmllbGQgZnJvbSAnLi4vZmllbGQvZmllbGQnO1xuaW1wb3J0IE9QaWVjZSBmcm9tICcuLi9waWVjZXMvb1BpZWNlJztcbmltcG9ydCBJUGllY2UgZnJvbSAnLi4vcGllY2VzL2lQaWVjZSc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEdhbWUge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLmZpZWxkID0gdGhpcy5fc2V0RmllbGQoKVxuXG4gICAgICAgIHRoaXMuY29sb3JzID0ge1xuICAgICAgICAgICAgMTogXCJ5ZWxsb3dcIixcbiAgICAgICAgICAgIDI6IFwiYmx1ZVwiLFxuICAgICAgICB9XG4gICAgICAgIGRlYnVnZ2VyXG4gICAgfVxuXG4gICAgX3NldEZpZWxkKCkge1xuICAgICAgICBsZXQgZmllbGQgPSBuZXcgRmllbGQoKTtcbiAgICAgICAgcmV0dXJuIGZpZWxkLl9nZW5lcmF0ZUZpZWxkKCk7XG4gICAgfVxuXG4gICAgX2lzT3ZlcigpIHtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLmZpZWxkWzBdLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBkZWJ1Z2dlclxuICAgICAgICAgICAgaWYgKHRoaXMuZmllbGRbMF1baV0pIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICByZW5kZXIoKSB7XG4gICAgICAgIGxldCBmaWVsZENvbHVtbnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmZpZWxkLWNvbHVtblwiKTtcbiAgICAgICAgdGhpcy5maWVsZC5mb3JFYWNoKChyb3csIHJvd0lkeCkgPT4ge1xuICAgICAgICAgICAgcm93LmZvckVhY2goKGNvbCwgY29sSWR4KSA9PiB7XG4gICAgICAgICAgICAgICAgbGV0IHNxdWFyZSA9IHRoaXMuZmllbGRbcm93SWR4XVtjb2xJZHhdO1xuICAgICAgICAgICAgICAgIGlmIChzcXVhcmUpIHtcbiAgICAgICAgICAgICAgICAgICAgZGVidWdnZXJcbiAgICAgICAgICAgICAgICAgICAgZmllbGRDb2x1bW5zW2NvbElkeF0uY2hpbGRyZW5bcm93SWR4XS5jbGFzc0xpc3QuYWRkKHRoaXMuY29sb3JzW3NxdWFyZV0pO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGRlYnVnZ2VyXG4gICAgICAgICAgICAgICAgICAgIE9iamVjdC52YWx1ZXModGhpcy5jb2xvcnMpLmZvckVhY2goY29sb3IgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgZGVidWdnZXJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZpZWxkQ29sdW1uc1tjb2xJZHhdLmNoaWxkcmVuW3Jvd0lkeF0uY2xhc3NMaXN0LnJlbW92ZShjb2xvcik7XG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBcbiAgICBwbGF5KGNvbnRhaW5lcikge1xuICAgICAgICBsZXQgaVBpZWNlID0gbmV3IElQaWVjZSgpO1xuICAgICAgICBzZXRJbnRlcnZhbCgoKSA9PiB7XG4gICAgICAgICAgICBpUGllY2UuZHJvcCgpO1xuICAgICAgICAgICAgaVBpZWNlLl9wb3B1bGF0ZUZpZWxkKHRoaXMuZmllbGQpO1xuICAgICAgICAgICAgdGhpcy5yZW5kZXIoY29udGFpbmVyKTtcbiAgICAgICAgICAgIGRlYnVnZ2VyXG4gICAgICAgIH0sIDEwMDApO1xuICAgIH1cblxufSIsImltcG9ydCBHYW1lIGZyb20gJy4vZ2FtZS9nYW1lJztcbmltcG9ydCBGaWVsZCBmcm9tICcuL2ZpZWxkL2ZpZWxkJztcblxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIiwgKCkgPT4ge1xuICAgIGNvbnN0IGZpZWxkQ29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJmaWVsZC1jb250YWluZXJcIik7XG5cbiAgICBsZXQgZmllbGQgPSBuZXcgRmllbGQoKTtcbiAgICBmaWVsZC5jcmVhdGVGaWVsZFdpdGhIb2xkQm94QW5kTmV4dEJveGVzKGZpZWxkQ29udGFpbmVyKTtcblxuICAgIGxldCBnYW1lID0gbmV3IEdhbWUoKTtcbiAgICBnYW1lLnBsYXkoZmllbGRDb250YWluZXIpO1xuXG59KTsiLCJpbXBvcnQgUGllY2UgZnJvbSAnLi9waWVjZSc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIElQaWVjZSBleHRlbmRzIFBpZWNlIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgdGhpcy5uYW1lID0gXCJJUGllY2VcIjtcbiAgICAgICAgdGhpcy5wb3NpdGlvbiA9IHtcbiAgICAgICAgICAgIHRvcDogWzAsM10sXG4gICAgICAgICAgICByaWdodDogWzAsNF0sXG4gICAgICAgICAgICBib3R0b206IFswLDVdLFxuICAgICAgICAgICAgbGVmdDogWzAsNl1cbiAgICAgICAgfTtcblxuICAgICAgICB0aGlzLnJlbW92ZVNxdWFyZXMgPSB7fTtcbiAgICB9XG5cbiAgICBkcm9wKCkge1xuICAgICAgICB0aGlzLnJlbW92ZVNxdWFyZXMgPSB7XG4gICAgICAgICAgICB0b3A6IHRoaXMucG9zaXRpb24udG9wLnNsaWNlKCksXG4gICAgICAgICAgICByaWdodDogdGhpcy5wb3NpdGlvbi5yaWdodC5zbGljZSgpLFxuICAgICAgICAgICAgYm90dG9tOiB0aGlzLnBvc2l0aW9uLmJvdHRvbS5zbGljZSgpLFxuICAgICAgICAgICAgbGVmdDogdGhpcy5wb3NpdGlvbi5sZWZ0LnNsaWNlKClcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMucG9zaXRpb24udG9wWzBdID0gdGhpcy5wb3NpdGlvbi50b3BbMF0gKyAxO1xuICAgICAgICB0aGlzLnBvc2l0aW9uLnJpZ2h0WzBdID0gdGhpcy5wb3NpdGlvbi5yaWdodFswXSArIDE7XG4gICAgICAgIHRoaXMucG9zaXRpb24uYm90dG9tWzBdID0gdGhpcy5wb3NpdGlvbi5ib3R0b21bMF0gKyAxO1xuICAgICAgICB0aGlzLnBvc2l0aW9uLmxlZnRbMF0gPSB0aGlzLnBvc2l0aW9uLmxlZnRbMF0gKyAxO1xuICAgICAgICBkZWJ1Z2dlclxuICAgIH1cblxuICAgIC8vIGRyb3BMaW5lKCkge1xuICAgIC8vICAgICBsZXQgZmllbGRDb2x1bW5zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5maWVsZC1jb2x1bW5cIik7XG5cbiAgICAvLyAgICAgbGV0IHJvd051bXMgPSBbMF07XG4gICAgLy8gICAgIGxldCBjb2xOdW1zID0gWzMsIDQsIDUsIDZdO1xuXG4gICAgLy8gICAgIHRoaXMuX2FkZENvbG9yKGZpZWxkQ29sdW1ucywgY29sTnVtcywgcm93TnVtcywgXCJibHVlXCIpO1xuICAgIC8vICAgICByb3dOdW1zID0gcm93TnVtcy5tYXAobnVtID0+IG51bSArIDEpO1xuXG4gICAgLy8gICAgIC8vIGluaXRpYWxpemUgc2V0SW50ZXJ2YWwgYXMgXCJjbGVhclwiIHRvIGNvbmRpdGlvbmFsbHkgZXhpdCBpbnRlcnZhbCBcbiAgICAvLyAgICAgbGV0IGNsZWFyID0gc2V0SW50ZXJ2YWwoKCkgPT4ge1xuICAgIC8vICAgICAgICAgdGhpcy5fYWRkQ29sb3IoZmllbGRDb2x1bW5zLCBjb2xOdW1zLCByb3dOdW1zLCBcImJsdWVcIik7XG4gICAgLy8gICAgICAgICBpZiAocm93TnVtc1swXSA9PT0gMTkpIGNsZWFySW50ZXJ2YWwoY2xlYXIpO1xuXG4gICAgLy8gICAgICAgICAvL3JlbW92ZSBwcmV2aW91cyBjb2xvcmVkIHNxdWFyZXNcbiAgICAvLyAgICAgICAgIHRoaXMuX3JlbW92ZUNvbG9yKGZpZWxkQ29sdW1ucywgY29sTnVtcywgcm93TnVtcywgXCJibHVlXCIpXG5cbiAgICAvLyAgICAgICAgIHJvd051bXMgPSByb3dOdW1zLm1hcChudW0gPT4gbnVtICsgMSk7XG4gICAgLy8gICAgIH0sIDEwMCk7XG4gICAgLy8gfVxufVxuIiwiaW1wb3J0IFBpZWNlIGZyb20gJy4vcGllY2UnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBPUGllY2UgZXh0ZW5kcyBQaWVjZSB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIHRoaXMubmFtZSA9IFwiT1BpZWNlXCI7XG4gICAgICAgIHRoaXMucG9zaXRpb24gPSB7XG4gICAgICAgICAgICB0b3A6IFswLDRdLFxuICAgICAgICAgICAgcmlnaHQ6IFswLDVdLFxuICAgICAgICAgICAgYm90dG9tOiBbMSw0XSxcbiAgICAgICAgICAgIGxlZnQ6IFsxLDVdXG4gICAgICAgIH07XG5cbiAgICAgICAgdGhpcy5yZW1vdmVTcXVhcmVzID0ge307XG5cbiAgICAgICAgZGVidWdnZXJcbiAgICB9XG5cbiAgICBkcm9wKCkge1xuICAgICAgICB0aGlzLnJlbW92ZVNxdWFyZXMgPSB7XG4gICAgICAgICAgICB0b3A6IHRoaXMucG9zaXRpb24udG9wLnNsaWNlKCksXG4gICAgICAgICAgICByaWdodDogdGhpcy5wb3NpdGlvbi5yaWdodC5zbGljZSgpLFxuICAgICAgICAgICAgLy8gYm90dG9tOiB0aGlzLnBvc2l0aW9uLmJvdHRvbS5zbGljZSgpLFxuICAgICAgICAgICAgLy8gbGVmdDogdGhpcy5wb3NpdGlvbi5sZWZ0LnNsaWNlKClcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMucG9zaXRpb24udG9wWzBdID0gdGhpcy5wb3NpdGlvbi50b3BbMF0gKyAxO1xuICAgICAgICB0aGlzLnBvc2l0aW9uLnJpZ2h0WzBdID0gdGhpcy5wb3NpdGlvbi5yaWdodFswXSArIDE7XG4gICAgICAgIHRoaXMucG9zaXRpb24uYm90dG9tWzBdID0gdGhpcy5wb3NpdGlvbi5ib3R0b21bMF0gKyAxO1xuICAgICAgICB0aGlzLnBvc2l0aW9uLmxlZnRbMF0gPSB0aGlzLnBvc2l0aW9uLmxlZnRbMF0gKyAxO1xuICAgICAgICBkZWJ1Z2dlclxuICAgIH1cblxuICAgIC8vIGRyb3BCb3goKSB7XG4gICAgLy8gICAgIGxldCBmaWVsZENvbHVtbnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmZpZWxkLWNvbHVtblwiKTtcblxuICAgIC8vICAgICBsZXQgcm93TnVtcyA9IFswLCAxXTtcbiAgICAvLyAgICAgbGV0IGNvbE51bXMgPSBbNCwgNV07XG4gICAgLy8gICAgIGNvbE51bXMuZm9yRWFjaChjb2wgPT4ge1xuICAgIC8vICAgICAgICAgcm93TnVtcy5mb3JFYWNoKHJvdyA9PiB7XG4gICAgLy8gICAgICAgICAgICAgZGVidWdnZXJcbiAgICAvLyAgICAgICAgICAgICB0aGlzLl9hZGRDb2xvcihmaWVsZENvbHVtbnMsIGNvbE51bXMsIHJvd051bXMsIFwieWVsbG93XCIpO1xuICAgIC8vICAgICAgICAgfSk7XG4gICAgLy8gICAgIH0pO1xuICAgIC8vICAgICByb3dOdW1zID0gcm93TnVtcy5tYXAobnVtID0+IG51bSArIDEpO1xuXG4gICAgLy8gICAgIC8vIGluaXRpYWxpemUgc2V0SW50ZXJ2YWwgYXMgXCJjbGVhclwiIHRvIGNvbmRpdGlvbmFsbHkgZXhpdCBpbnRlcnZhbCBcbiAgICAvLyAgICAgbGV0IGNsZWFyID0gc2V0SW50ZXJ2YWwoKCkgPT4ge1xuICAgIC8vICAgICAgICAgdGhpcy5fYWRkQ29sb3IoZmllbGRDb2x1bW5zLCBjb2xOdW1zLCByb3dOdW1zLCBcInllbGxvd1wiKTtcbiAgICAvLyAgICAgICAgIGlmIChyb3dOdW1zWzFdID09PSAxOSkgY2xlYXJJbnRlcnZhbChjbGVhcik7XG5cbiAgICAvLyAgICAgICAgIC8vcmVtb3ZlIHByZXZpb3VzIGNvbG9yZWQgc3F1YXJlc1xuICAgIC8vICAgICAgICAgdGhpcy5fcmVtb3ZlQ29sb3IoZmllbGRDb2x1bW5zLCBjb2xOdW1zLCByb3dOdW1zLCBcInllbGxvd1wiKVxuXG4gICAgLy8gICAgICAgICByb3dOdW1zID0gcm93TnVtcy5tYXAobnVtID0+IG51bSArIDEpO1xuICAgIC8vICAgICB9LCAxMDApO1xuICAgIC8vIH1cbn0iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBQaWVjZSB7XG5cbiAgICAvLyBfYWRkQ29sb3IoZmllbGRDb2x1bW5zLCBjb2xOdW1zLCByb3dOdW1zLCBjbGFzc0NvbG9yKSB7XG4gICAgLy8gICAgIGNvbE51bXMuZm9yRWFjaCgoY29sLCBjb2xJZHgpID0+IHtcbiAgICAvLyAgICAgICAgIHJvd051bXMuZm9yRWFjaCgocm93LCByb3dJZHgpID0+IHtcbiAgICAvLyAgICAgICAgICAgICBzd2l0Y2ggKGNsYXNzQ29sb3IpIHtcbiAgICAvLyAgICAgICAgICAgICAgICAgY2FzZSBcInB1cnBsZVwiOiBcbiAgICAvLyAgICAgICAgICAgICAgICAgICAgIGlmICghKChjb2xJZHggPT09IDAgJiYgcm93SWR4ID09PSAwKSB8fCAoY29sSWR4ID09PSAyICYmIHJvd0lkeCA9PT0gMCkpKSB7XG4gICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgZGVidWdnZXJcbiAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICBmaWVsZENvbHVtbnNbY29sXS5jaGlsZHJlbltyb3ddLmNsYXNzTGlzdC5hZGQoY2xhc3NDb2xvcik7XG4gICAgLy8gICAgICAgICAgICAgICAgICAgICB9XG4gICAgLy8gICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAvLyAgICAgICAgICAgICAgICAgZGVmYXVsdDogXG4gICAgLy8gICAgICAgICAgICAgICAgICAgICBmaWVsZENvbHVtbnNbY29sXS5jaGlsZHJlbltyb3ddLmNsYXNzTGlzdC5hZGQoY2xhc3NDb2xvcik7XG4gICAgLy8gICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAvLyAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgXG4gICAgLy8gICAgICAgICB9KTtcbiAgICAvLyAgICAgfSk7XG4gICAgLy8gfVxuXG4gICAgX3BvcHVsYXRlRmllbGQoZmllbGQpIHtcbiAgICAgICAgbGV0IHBvc2l0aW9uID0gT2JqZWN0LnZhbHVlcyh0aGlzLnBvc2l0aW9uKTtcbiAgICAgICAgbGV0IHJlbW92ZVNxdWFyZXMgPSBPYmplY3QudmFsdWVzKHRoaXMucmVtb3ZlU3F1YXJlcyk7XG5cbiAgICAgICAgcG9zaXRpb24uZm9yRWFjaChwb3NpdGlvbkFycmF5ID0+IHtcbiAgICAgICAgICAgIGxldCBbcm93LCBjb2xdID0gW3Bvc2l0aW9uQXJyYXlbMF0sIHBvc2l0aW9uQXJyYXlbMV1dO1xuICAgICAgICAgICAgc3dpdGNoICh0aGlzLm5hbWUpIHtcbiAgICAgICAgICAgICAgICBjYXNlKFwiT1BpZWNlXCIpOiBcbiAgICAgICAgICAgICAgICAgICAgZmllbGRbcm93XVtjb2xdID0gMTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZShcIklQaWVjZVwiKTogXG4gICAgICAgICAgICAgICAgICAgIGZpZWxkW3Jvd11bY29sXSA9IDI7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICBkZWJ1Z2dlclxuICAgICAgICByZW1vdmVTcXVhcmVzLmZvckVhY2gocG9zaXRpb25BcnJheSA9PiB7XG4gICAgICAgICAgICAgICAgbGV0IFtyb3csIGNvbF0gPSBbcG9zaXRpb25BcnJheVswXSwgcG9zaXRpb25BcnJheVsxXV07XG4gICAgICAgICAgICAgICAgZmllbGRbcm93XVtjb2xdID0gMDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgKTtcbiAgICAgICAgZGVidWdnZXJcbiAgICB9XG5cbiAgICAvLyBfcmVtb3ZlQ29sb3IoZmllbGRDb2x1bW5zLCBjb2xOdW1zLCByb3dOdW1zLCBjbGFzc0NvbG9yKSB7XG4gICAgLy8gICAgIGNvbE51bXMuZm9yRWFjaCgoY29sLCBjb2xJZHgpID0+IHtcbiAgICAvLyAgICAgICAgIHN3aXRjaCAoY2xhc3NDb2xvcikge1xuICAgIC8vICAgICAgICAgICAgIGNhc2UgXCJwdXJwbGVcIjpcbiAgICAvLyAgICAgICAgICAgICAgICAgaWYgKChyb3dOdW1zWzBdIC0gMSkgPj0gMCkge1xuICAgIC8vICAgICAgICAgICAgICAgICAgICAgaWYgKGNvbElkeCA9PT0gMCB8fCBjb2xJZHggPT09IDIpIHtcbiAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICBmaWVsZENvbHVtbnNbY29sXS5jaGlsZHJlbltyb3dOdW1zWzBdXS5jbGFzc0xpc3QucmVtb3ZlKGNsYXNzQ29sb3IpO1xuICAgIC8vICAgICAgICAgICAgICAgICAgICAgfVxuICAgIC8vICAgICAgICAgICAgICAgICAgICAgaWYgKGNvbElkeCA9PT0gMSkge1xuICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgIGRlYnVnZ2VyXG4gICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgZmllbGRDb2x1bW5zW2NvbF0uY2hpbGRyZW5bcm93TnVtc1sxXSAtIDJdLmNsYXNzTGlzdC5yZW1vdmUoY2xhc3NDb2xvcik7XG4gICAgLy8gICAgICAgICAgICAgICAgICAgICB9XG4gICAgLy8gICAgICAgICAgICAgICAgIH1cbiAgICAvLyAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgLy8gICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAvLyAgICAgICAgICAgICAgICAgaWYgKChyb3dOdW1zWzBdIC0gMSkgPj0gMCkge1xuICAgIC8vICAgICAgICAgICAgICAgICAgICAgZmllbGRDb2x1bW5zW2NvbF0uY2hpbGRyZW5bcm93TnVtc1swXSAtIDFdLmNsYXNzTGlzdC5yZW1vdmUoY2xhc3NDb2xvcik7XG4gICAgLy8gICAgICAgICAgICAgICAgIH1cbiAgICAvLyAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgLy8gICAgICAgICB9XG4gICAgLy8gICAgIH0pXG4gICAgLy8gfVxuXG4gICAgLy8gdHVyblBpZWNlKHBpZWNlLCBkaXJlY3Rpb24pIHtcbiAgICAvLyAgICAgc3dpdGNoKHBpZWNlKSB7XG4gICAgLy8gICAgICAgICBjYXNlIGxpbmUge1xuXG4gICAgLy8gICAgICAgICB9XG4gICAgLy8gICAgIH1cbiAgICAvLyB9XG59Il0sInNvdXJjZVJvb3QiOiIifQ==