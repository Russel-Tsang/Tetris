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
/* harmony import */ var _pieces_tPiece__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../pieces/tPiece */ "./src/pieces/tPiece.js");
/* harmony import */ var _pieces_sPiece__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../pieces/sPiece */ "./src/pieces/sPiece.js");
/* harmony import */ var _pieces_zPiece__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../pieces/zPiece */ "./src/pieces/zPiece.js");
/* harmony import */ var _pieces_lPiece__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../pieces/lPiece */ "./src/pieces/lPiece.js");
/* harmony import */ var _pieces_jPiece__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../pieces/jPiece */ "./src/pieces/jPiece.js");
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
      2: "blue",
      3: "purple",
      4: "green",
      5: "red",
      6: "orange",
      7: "dark-blue" // use slice to prevent shallow cloning

    };
    this.currentPiece = '';
    this.currentBag = this._shuffleBag(this._generateBag());
    this.nextBag = this._shuffleBag(this._generateBag());
  }

  _createClass(Game, [{
    key: "_generateBag",
    value: function _generateBag() {
      var oPiece = new _pieces_oPiece__WEBPACK_IMPORTED_MODULE_1__["default"]();
      var iPiece = new _pieces_iPiece__WEBPACK_IMPORTED_MODULE_2__["default"]();
      var tPiece = new _pieces_tPiece__WEBPACK_IMPORTED_MODULE_3__["default"]();
      var sPiece = new _pieces_sPiece__WEBPACK_IMPORTED_MODULE_4__["default"]();
      var zPiece = new _pieces_zPiece__WEBPACK_IMPORTED_MODULE_5__["default"]();
      var lPiece = new _pieces_lPiece__WEBPACK_IMPORTED_MODULE_6__["default"]();
      var jPiece = new _pieces_jPiece__WEBPACK_IMPORTED_MODULE_7__["default"]();
      return [oPiece, iPiece, tPiece, sPiece, zPiece, lPiece, jPiece];
    } // take piece from currentBag and set it as the current piece

  }, {
    key: "_setCurrentPiece",
    value: function _setCurrentPiece() {
      debugger;
      this.currentPiece = this.currentBag.shift();
    } // take one piece from nextBag and add to currentBag

  }, {
    key: "_addToCurrentBag",
    value: function _addToCurrentBag() {
      this.currentBag.push(this.nextBag.shift());
    } // refill next bag, will only be called once nextBag becomes empty

  }, {
    key: "_refillNextBag",
    value: function _refillNextBag() {
      this.nextBag = this._generateBag();
    } // implementation of shuffle found on https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array#2450976

  }, {
    key: "_shuffleBag",
    value: function _shuffleBag(bag) {
      var currentIndex = bag.length,
          temporaryValue,
          randomIndex; // While there remain elements to shuffle...

      while (0 !== currentIndex) {
        // Pick a remaining element...
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1; // And swap it with the current element.

        temporaryValue = bag[currentIndex];
        bag[currentIndex] = bag[randomIndex];
        bag[randomIndex] = temporaryValue;
      }

      return bag;
    } // implementation of shuffle found on https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array#2450976

  }, {
    key: "_setField",
    value: function _setField() {
      var field = new _field_field__WEBPACK_IMPORTED_MODULE_0__["default"]();
      return field._generateField();
    }
  }, {
    key: "_gameOver",
    value: function _gameOver() {
      // for (let i = 0; i < this.field[0].length; i++) {
      //     if (this.field[0][i]) return true;
      // }
      return false;
    } // look through field, if field[row][col] contains a number > 0, fill that spot with the respective color. Else, remove color

  }, {
    key: "render",
    value: function render() {
      var _this = this;

      var fieldColumns = document.querySelectorAll(".field-column");
      this.field.forEach(function (row, rowIdx) {
        row.forEach(function (col, colIdx) {
          var squareValue = _this.field[rowIdx][colIdx];

          if (squareValue) {
            fieldColumns[colIdx].children[rowIdx].classList.add(_this.colors[squareValue]);
          } else {
            Object.values(_this.colors).forEach(function (color) {
              fieldColumns[colIdx].children[rowIdx].classList.remove(color);
            });
          }
        });
      });
    }
  }, {
    key: "handlePieceStop",
    value: function handlePieceStop(clear) {
      debugger;
      clearInterval(clear);
      this.play();
    }
  }, {
    key: "play",
    value: function play() {
      var _this2 = this;

      // let jPiece = new JPiece();
      this._setCurrentPiece();

      this._addToCurrentBag();

      debugger;
      if (!this.nextBag.length) this._refillNextBag();
      var clear = setInterval(function () {
        _this2.currentPiece.drop();

        _this2.currentPiece._populateField(_this2.field);

        _this2.render();

        if (!_this2.currentPiece.isFalling(_this2.field)) {
          debugger;

          _this2.handlePieceStop(clear);
        }
      }, 1000); // while (!gameOver) {
      // this.currentPiece = this.setCurrentPiece; (takes from next pieces)
      // this.currentBag = this.setCurrentBag; (takes one from next bag)
      // this.nextBag = this.resetBag (if nextBag is empty)
      // this.nextPieces = this.setNextPieces;
      // }
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
      top: [],
      middle: [],
      bottom: [[0, 3], [0, 4], [0, 5], [0, 6]]
    };
    _this.basePosition = {
      top: [],
      middle: [],
      bottom: [[0, 3], [0, 4], [0, 5], [0, 6]]
    };
    _this.removeSquares = [];
    return _this;
  }

  return IPiece;
}(_piece__WEBPACK_IMPORTED_MODULE_0__["default"]);



/***/ }),

/***/ "./src/pieces/jPiece.js":
/*!******************************!*\
  !*** ./src/pieces/jPiece.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return jPiece; });
/* harmony import */ var _piece__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./piece */ "./src/pieces/piece.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }



var jPiece =
/*#__PURE__*/
function (_Piece) {
  _inherits(jPiece, _Piece);

  function jPiece() {
    var _this;

    _classCallCheck(this, jPiece);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(jPiece).call(this));
    _this.name = "JPiece";
    _this.position = {
      top: [[0, 3]],
      middle: [],
      bottom: [[1, 3], [1, 4], [1, 5]]
    };
    _this.basePosition = {
      top: [[0, 3]],
      middle: [],
      bottom: [[1, 3], [1, 4], [1, 5]]
    };
    _this.removeSquares = [];
    return _this;
  }

  return jPiece;
}(_piece__WEBPACK_IMPORTED_MODULE_0__["default"]);



/***/ }),

/***/ "./src/pieces/lPiece.js":
/*!******************************!*\
  !*** ./src/pieces/lPiece.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return lPiece; });
/* harmony import */ var _piece__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./piece */ "./src/pieces/piece.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }



var lPiece =
/*#__PURE__*/
function (_Piece) {
  _inherits(lPiece, _Piece);

  function lPiece() {
    var _this;

    _classCallCheck(this, lPiece);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(lPiece).call(this));
    _this.name = "LPiece";
    _this.position = {
      top: [[0, 5]],
      middle: [],
      bottom: [[1, 3], [1, 4], [1, 5]]
    };
    _this.basePosition = {
      top: [[0, 5]],
      middle: [],
      bottom: [[1, 3], [1, 4], [1, 5]]
    };
    _this.removeSquares = [];
    return _this;
  }

  return lPiece;
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
      top: [[0, 4], [0, 5]],
      middle: [],
      bottom: [[1, 4], [1, 5]]
    };
    _this.basePosition = {
      top: [[0, 4], [0, 5]],
      middle: [],
      bottom: [[1, 4], [1, 5]]
    };
    _this.removeSquares = [];
    debugger;
    return _this;
  }

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
    value: function _populateField(field) {
      var _this = this;

      var coordinateArrays = Object.values(this.position);
      coordinateArrays.forEach(function (array) {
        debugger;
        array.forEach(function (coordinate) {
          var _ref = [coordinate[0], coordinate[1]],
              row = _ref[0],
              col = _ref[1];

          switch (_this.name) {
            case "OPiece":
              field[row][col] = 1;
              break;

            case "IPiece":
              field[row][col] = 2;
              break;

            case "TPiece":
              field[row][col] = 3;
              break;

            case "SPiece":
              field[row][col] = 4;
              break;

            case "ZPiece":
              field[row][col] = 5;
              break;

            case "LPiece":
              field[row][col] = 6;
              break;

            case "JPiece":
              field[row][col] = 7;
              break;
          }
        });
      });
      debugger;
      this.removeSquares.forEach(function (positionArray) {
        var _ref2 = [positionArray[0], positionArray[1]],
            row = _ref2[0],
            col = _ref2[1];
        field[row][col] = 0;
      });
      debugger;
    } // compares two arrays of coordinates and check if they have the same content in the same order

  }, {
    key: "_squaresAreEqual",
    value: function _squaresAreEqual(oldSquare, newSquare) {
      for (var i = 0; i < oldSquare.length; i++) {
        if (oldSquare[i] !== newSquare[i]) return false;
      }

      return true;
    }
  }, {
    key: "_includes",
    value: function _includes(oldSquare, coordinateArrays) {
      var _this2 = this;

      var result = false;
      coordinateArrays.forEach(function (array) {
        if (_this2._squaresAreEqual(oldSquare, array)) {
          result = true;
        }
      });
      return result;
    }
  }, {
    key: "drop",
    value: function drop() {
      var _this3 = this;

      var oldPosition = {
        top: this.position.top.map(function (array) {
          return array.slice();
        }),
        middle: this.position.middle.map(function (array) {
          return array.slice();
        }),
        bottom: this.position.bottom.map(function (array) {
          return array.slice();
        })
      };
      this.position.top = this.position.top.map(function (array) {
        return [array[0] + 1, array[1]];
      });
      this.position.middle = this.position.middle.map(function (array) {
        return [array[0] + 1, array[1]];
      });
      this.position.bottom = this.position.bottom.map(function (array) {
        return [array[0] + 1, array[1]];
      }); // compare old position with new position

      var oldSquares = [];
      var newSquares = [];
      Object.values(oldPosition).forEach(function (coordinatesArray) {
        return coordinatesArray.forEach(function (array) {
          return oldSquares.push(array);
        });
      });
      Object.values(this.position).forEach(function (coordinatesArray) {
        return coordinatesArray.forEach(function (array) {
          return newSquares.push(array);
        });
      }); // keep track of squares that the positions do not have in common (squares to remove color from)

      this.removeSquares = oldSquares.filter(function (oldSquare) {
        if (!_this3._includes(oldSquare, newSquares)) return oldSquare;
      });
    }
  }, {
    key: "isFalling",
    value: function isFalling(field) {
      debugger;
      var result = true;
      this.position.bottom.forEach(function (coordinatePair) {
        var _ref3 = [coordinatePair[0], coordinatePair[1]],
            row = _ref3[0],
            col = _ref3[1]; // if the piece's current position is above the field floor or a another piece

        if (!field[row + 1] || field[row + 1][col]) {
          result = false;
        }
      });
      return result;
    } // turnPiece(piece, direction) {
    //     switch(piece) {
    //         case line {
    //         }
    //     }
    // }

  }]);

  return Piece;
}();



/***/ }),

/***/ "./src/pieces/sPiece.js":
/*!******************************!*\
  !*** ./src/pieces/sPiece.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return SPiece; });
/* harmony import */ var _piece__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./piece */ "./src/pieces/piece.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }



var SPiece =
/*#__PURE__*/
function (_Piece) {
  _inherits(SPiece, _Piece);

  function SPiece() {
    var _this;

    _classCallCheck(this, SPiece);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(SPiece).call(this));
    _this.name = "SPiece";
    _this.position = {
      top: [[0, 4], [0, 5]],
      middle: [],
      bottom: [[1, 3], [1, 4]]
    };
    _this.basePosition = {
      top: [[0, 4], [0, 5]],
      middle: [],
      bottom: [[1, 3], [1, 4]]
    };
    _this.removeSquares = [];
    debugger;
    return _this;
  }

  return SPiece;
}(_piece__WEBPACK_IMPORTED_MODULE_0__["default"]);



/***/ }),

/***/ "./src/pieces/tPiece.js":
/*!******************************!*\
  !*** ./src/pieces/tPiece.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return TPiece; });
/* harmony import */ var _piece__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./piece */ "./src/pieces/piece.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }



var TPiece =
/*#__PURE__*/
function (_Piece) {
  _inherits(TPiece, _Piece);

  function TPiece() {
    var _this;

    _classCallCheck(this, TPiece);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(TPiece).call(this));
    _this.name = "TPiece";
    _this.position = {
      top: [[0, 4]],
      middle: [],
      bottom: [[1, 3], [1, 4], [1, 5]]
    };
    _this.basePosition = {
      top: [[0, 4]],
      middle: [],
      bottom: [[1, 3], [1, 4], [1, 5]]
    };
    _this.removeSquares = [];
    debugger;
    return _this;
  }

  return TPiece;
}(_piece__WEBPACK_IMPORTED_MODULE_0__["default"]);



/***/ }),

/***/ "./src/pieces/zPiece.js":
/*!******************************!*\
  !*** ./src/pieces/zPiece.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ZPiece; });
/* harmony import */ var _piece__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./piece */ "./src/pieces/piece.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }



var ZPiece =
/*#__PURE__*/
function (_Piece) {
  _inherits(ZPiece, _Piece);

  function ZPiece() {
    var _this;

    _classCallCheck(this, ZPiece);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(ZPiece).call(this));
    _this.name = "ZPiece";
    _this.position = {
      top: [[0, 3], [0, 4]],
      middle: [],
      bottom: [[1, 4], [1, 5]]
    };
    _this.basePosition = {
      top: [[0, 3], [0, 4]],
      middle: [],
      bottom: [[1, 4], [1, 5]]
    };
    _this.removeSquares = [];
    return _this;
  }

  return ZPiece;
}(_piece__WEBPACK_IMPORTED_MODULE_0__["default"]);



/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2ZpZWxkL2ZpZWxkLmpzIiwid2VicGFjazovLy8uL3NyYy9maWVsZC9ob2xkYm94LmpzIiwid2VicGFjazovLy8uL3NyYy9maWVsZC9uZXh0Qm94LmpzIiwid2VicGFjazovLy8uL3NyYy9nYW1lL2dhbWUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9waWVjZXMvaVBpZWNlLmpzIiwid2VicGFjazovLy8uL3NyYy9waWVjZXMvalBpZWNlLmpzIiwid2VicGFjazovLy8uL3NyYy9waWVjZXMvbFBpZWNlLmpzIiwid2VicGFjazovLy8uL3NyYy9waWVjZXMvb1BpZWNlLmpzIiwid2VicGFjazovLy8uL3NyYy9waWVjZXMvcGllY2UuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3BpZWNlcy9zUGllY2UuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3BpZWNlcy90UGllY2UuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3BpZWNlcy96UGllY2UuanMiXSwibmFtZXMiOlsiRmllbGQiLCJmaWVsZCIsImkiLCJyb3ciLCJwdXNoIiwiY29sdW1uIiwiZG9jdW1lbnQiLCJjcmVhdGVFbGVtZW50IiwiY2xhc3NMaXN0IiwiYWRkIiwiYXBwZW5kIiwiYXBwZW5kQ2hpbGQiLCJfY3JlYXRlQ29sdW1uIiwiY29udGFpbmVyIiwibmV4dEJveCIsIk5leHRCb3giLCJob2xkQm94IiwiSG9sZEJveCIsIl9jcmVhdGVGaWVsZCIsImNyZWF0ZU5leHRCb3hlcyIsInByZXBlbmQiLCJjcmVhdGVCb3giLCJib3giLCJfY3JlYXRlQm94Q29sdW1uIiwiX2NyZWF0ZU5leHRCb3hDb2x1bW4iLCJib3hlcyIsIl9jcmVhdGVOZXh0Qm94IiwiR2FtZSIsIl9zZXRGaWVsZCIsImNvbG9ycyIsImN1cnJlbnRQaWVjZSIsImN1cnJlbnRCYWciLCJfc2h1ZmZsZUJhZyIsIl9nZW5lcmF0ZUJhZyIsIm5leHRCYWciLCJvUGllY2UiLCJPUGllY2UiLCJpUGllY2UiLCJJUGllY2UiLCJ0UGllY2UiLCJUUGllY2UiLCJzUGllY2UiLCJTUGllY2UiLCJ6UGllY2UiLCJaUGllY2UiLCJsUGllY2UiLCJMUGllY2UiLCJqUGllY2UiLCJKUGllY2UiLCJzaGlmdCIsImJhZyIsImN1cnJlbnRJbmRleCIsImxlbmd0aCIsInRlbXBvcmFyeVZhbHVlIiwicmFuZG9tSW5kZXgiLCJNYXRoIiwiZmxvb3IiLCJyYW5kb20iLCJfZ2VuZXJhdGVGaWVsZCIsImZpZWxkQ29sdW1ucyIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJmb3JFYWNoIiwicm93SWR4IiwiY29sIiwiY29sSWR4Iiwic3F1YXJlVmFsdWUiLCJjaGlsZHJlbiIsIk9iamVjdCIsInZhbHVlcyIsImNvbG9yIiwicmVtb3ZlIiwiY2xlYXIiLCJjbGVhckludGVydmFsIiwicGxheSIsIl9zZXRDdXJyZW50UGllY2UiLCJfYWRkVG9DdXJyZW50QmFnIiwiX3JlZmlsbE5leHRCYWciLCJzZXRJbnRlcnZhbCIsImRyb3AiLCJfcG9wdWxhdGVGaWVsZCIsInJlbmRlciIsImlzRmFsbGluZyIsImhhbmRsZVBpZWNlU3RvcCIsImFkZEV2ZW50TGlzdGVuZXIiLCJmaWVsZENvbnRhaW5lciIsImdldEVsZW1lbnRCeUlkIiwiY3JlYXRlRmllbGRXaXRoSG9sZEJveEFuZE5leHRCb3hlcyIsImdhbWUiLCJuYW1lIiwicG9zaXRpb24iLCJ0b3AiLCJtaWRkbGUiLCJib3R0b20iLCJiYXNlUG9zaXRpb24iLCJyZW1vdmVTcXVhcmVzIiwiUGllY2UiLCJjb29yZGluYXRlQXJyYXlzIiwiYXJyYXkiLCJjb29yZGluYXRlIiwicG9zaXRpb25BcnJheSIsIm9sZFNxdWFyZSIsIm5ld1NxdWFyZSIsInJlc3VsdCIsIl9zcXVhcmVzQXJlRXF1YWwiLCJvbGRQb3NpdGlvbiIsIm1hcCIsInNsaWNlIiwib2xkU3F1YXJlcyIsIm5ld1NxdWFyZXMiLCJjb29yZGluYXRlc0Fy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QUFLNEMsSUFBTCxHQUFZLFFBQVo7QUFDQSxVQUFLQyxRQUFMLEdBQWdCO0FBQ1pDLFNBQUcsRUFBRSxDQUFDLENBQUMsQ0FBRCxFQUFJLENBQUosQ0FBRCxFQUFTLENBQUMsQ0FBRCxFQUFJLENBQUosQ0FBVCxDQURPO0FBRVpDLFlBQU0sRUFBRSxFQUZJO0FBR1pDLFlBQU0sRUFBRSxDQUFDLENBQUMsQ0FBRCxFQUFJLENBQUosQ0FBRCxFQUFTLENBQUMsQ0FBRCxFQUFJLENBQUosQ0FBVDtBQUhJLEtBQWhCO0FBS0EsVUFBS0MsWUFBTCxHQUFvQjtBQUNoQkgsU0FBRyxFQUFFLENBQUMsQ0FBQyxDQUFELEVBQUksQ0FBSixDQUFELEVBQVMsQ0FBQyxDQUFELEVBQUksQ0FBSixDQUFULENBRFc7QUFFaEJDLFlBQU0sRUFBRSxFQUZRO0FBR2hCQyxZQUFNLEVBQUUsQ0FBQyxDQUFDLENBQUQsRUFBSSxDQUFKLENBQUQsRUFBUyxDQUFDLENBQUQsRUFBSSxDQUFKLENBQVQ7QUFIUSxLQUFwQjtBQU1BLFVBQUtFLGFBQUwsR0FBcUIsRUFBckI7QUFkVTtBQWViOzs7RUFoQitCQyw4QyIsImZpbGUiOiJtYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCIvZGlzdC9cIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvaW5kZXguanNcIik7XG4iLCJpbXBvcnQgSG9sZEJveCBmcm9tICcuL2hvbGRib3gnO1xuaW1wb3J0IE5leHRCb3ggZnJvbSAnLi9uZXh0Qm94JztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRmllbGQgeyAgICBcbiAgICBfZ2VuZXJhdGVGaWVsZCgpIHtcbiAgICAgICAgbGV0IGZpZWxkID0gW107XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMjA7IGkrKykge1xuICAgICAgICAgICAgbGV0IHJvdyA9IFswLDAsMCwwLDAsMCwwLDAsMCwwXTtcbiAgICAgICAgICAgIGZpZWxkLnB1c2gocm93KTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZmllbGQ7XG4gICAgfVxuXG4gICAgLy9faXNWYWxpZE1vdmVcblxuICAgIF9jcmVhdGVDb2x1bW4oKSB7XG4gICAgICAgIGxldCBjb2x1bW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidWxcIik7XG4gICAgICAgIGNvbHVtbi5jbGFzc0xpc3QuYWRkKFwiZmllbGQtY29sdW1uXCIpO1xuXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMjA7IGkrKykge1xuICAgICAgICAgICAgY29sdW1uLmFwcGVuZChkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIikpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBjb2x1bW47XG4gICAgfVxuXG4gICAgX2NyZWF0ZUZpZWxkKCkge1xuICAgICAgICBsZXQgZmllbGQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICBmaWVsZC5jbGFzc0xpc3QuYWRkKFwiZmllbGQtYm94XCIpO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IDEwOyBpKyspIHtcbiAgICAgICAgICAgIGZpZWxkLmFwcGVuZENoaWxkKHRoaXMuX2NyZWF0ZUNvbHVtbigpKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZmllbGQ7XG4gICAgfVxuXG4gICAgY3JlYXRlRmllbGRXaXRoSG9sZEJveEFuZE5leHRCb3hlcyhjb250YWluZXIpIHtcbiAgICAgICAgbGV0IG5leHRCb3ggPSBuZXcgTmV4dEJveCgpO1xuICAgICAgICBsZXQgaG9sZEJveCA9IG5ldyBIb2xkQm94KCk7XG4gICAgICAgIGNvbnRhaW5lci5hcHBlbmQodGhpcy5fY3JlYXRlRmllbGQoKSk7XG4gICAgICAgIGNvbnRhaW5lci5hcHBlbmQobmV4dEJveC5jcmVhdGVOZXh0Qm94ZXMoKSk7XG4gICAgICAgIGNvbnRhaW5lci5wcmVwZW5kKGhvbGRCb3guY3JlYXRlQm94KCkpO1xuICAgICAgICByZXR1cm4gY29udGFpbmVyO1xuICAgIH1cblxufSIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIEhvbGRCb3gge1xuICAgIF9jcmVhdGVCb3hDb2x1bW4oKSB7XG4gICAgICAgIGxldCBjb2x1bW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidWxcIik7XG4gICAgICAgIGNvbHVtbi5jbGFzc0xpc3QuYWRkKFwiaG9sZC1jb2x1bW5cIik7XG5cbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCA0OyBpKyspIHtcbiAgICAgICAgICAgIGNvbHVtbi5hcHBlbmQoZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpXCIpKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gY29sdW1uO1xuICAgIH1cblxuICAgIGNyZWF0ZUJveCgpIHtcbiAgICAgICAgbGV0IGJveCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIGJveC5jbGFzc0xpc3QuYWRkKFwiaG9sZC1ib3hcIik7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgNTsgaSsrKSB7XG4gICAgICAgICAgICBib3guYXBwZW5kQ2hpbGQodGhpcy5fY3JlYXRlQm94Q29sdW1uKCkpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBib3g7XG4gICAgfVxufSIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIE5leHRCb3gge1xuICAgIF9jcmVhdGVOZXh0Qm94Q29sdW1uKCkge1xuICAgICAgICBsZXQgY29sdW1uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInVsXCIpO1xuICAgICAgICBjb2x1bW4uY2xhc3NMaXN0LmFkZChcIm5leHQtY29sdW1uXCIpO1xuXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgNDsgaSsrKSB7XG4gICAgICAgICAgICBjb2x1bW4uYXBwZW5kKGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaVwiKSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGNvbHVtbjtcbiAgICB9XG5cbiAgICBfY3JlYXRlTmV4dEJveCgpIHtcbiAgICAgICAgbGV0IGJveCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIGJveC5jbGFzc0xpc3QuYWRkKFwibmV4dC1ib3hcIik7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgNTsgaSsrKSB7XG4gICAgICAgICAgICBib3guYXBwZW5kQ2hpbGQodGhpcy5fY3JlYXRlTmV4dEJveENvbHVtbigpKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gYm94O1xuICAgIH1cblxuICAgIGNyZWF0ZU5leHRCb3hlcygpIHtcbiAgICAgICAgbGV0IGJveGVzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgYm94ZXMuY2xhc3NMaXN0LmFkZChcIm5leHQtYm94ZXNcIik7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgNTsgaSsrKSB7XG4gICAgICAgICAgICBib3hlcy5hcHBlbmRDaGlsZCh0aGlzLl9jcmVhdGVOZXh0Qm94KCkpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBib3hlcztcbiAgICB9XG59IiwiaW1wb3J0IEZpZWxkIGZyb20gJy4uL2ZpZWxkL2ZpZWxkJztcbmltcG9ydCBPUGllY2UgZnJvbSAnLi4vcGllY2VzL29QaWVjZSc7XG5pbXBvcnQgSVBpZWNlIGZyb20gJy4uL3BpZWNlcy9pUGllY2UnO1xuaW1wb3J0IFRQaWVjZSBmcm9tICcuLi9waWVjZXMvdFBpZWNlJztcbmltcG9ydCBTUGllY2UgZnJvbSAnLi4vcGllY2VzL3NQaWVjZSc7XG5pbXBvcnQgWlBpZWNlIGZyb20gJy4uL3BpZWNlcy96UGllY2UnO1xuaW1wb3J0IExQaWVjZSBmcm9tICcuLi9waWVjZXMvbFBpZWNlJztcbmltcG9ydCBKUGllY2UgZnJvbSAnLi4vcGllY2VzL2pQaWVjZSc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEdhbWUge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLmZpZWxkID0gdGhpcy5fc2V0RmllbGQoKVxuXG4gICAgICAgIHRoaXMuY29sb3JzID0ge1xuICAgICAgICAgICAgMTogXCJ5ZWxsb3dcIixcbiAgICAgICAgICAgIDI6IFwiYmx1ZVwiLFxuICAgICAgICAgICAgMzogXCJwdXJwbGVcIixcbiAgICAgICAgICAgIDQ6IFwiZ3JlZW5cIixcbiAgICAgICAgICAgIDU6IFwicmVkXCIsXG4gICAgICAgICAgICA2OiBcIm9yYW5nZVwiLFxuICAgICAgICAgICAgNzogXCJkYXJrLWJsdWVcIlxuICAgICAgICB9XG5cbiAgICAgICAgLy8gdXNlIHNsaWNlIHRvIHByZXZlbnQgc2hhbGxvdyBjbG9uaW5nXG4gICAgICAgIHRoaXMuY3VycmVudFBpZWNlID0gJyc7XG4gICAgICAgIHRoaXMuY3VycmVudEJhZyA9IHRoaXMuX3NodWZmbGVCYWcodGhpcy5fZ2VuZXJhdGVCYWcoKSk7XG4gICAgICAgIHRoaXMubmV4dEJhZyA9IHRoaXMuX3NodWZmbGVCYWcodGhpcy5fZ2VuZXJhdGVCYWcoKSk7XG4gICAgfVxuXG4gICAgX2dlbmVyYXRlQmFnKCkge1xuICAgICAgICBsZXQgb1BpZWNlID0gbmV3IE9QaWVjZSgpO1xuICAgICAgICBsZXQgaVBpZWNlID0gbmV3IElQaWVjZSgpO1xuICAgICAgICBsZXQgdFBpZWNlID0gbmV3IFRQaWVjZSgpO1xuICAgICAgICBsZXQgc1BpZWNlID0gbmV3IFNQaWVjZSgpO1xuICAgICAgICBsZXQgelBpZWNlID0gbmV3IFpQaWVjZSgpO1xuICAgICAgICBsZXQgbFBpZWNlID0gbmV3IExQaWVjZSgpO1xuICAgICAgICBsZXQgalBpZWNlID0gbmV3IEpQaWVjZSgpO1xuXG4gICAgICAgIHJldHVybiBbb1BpZWNlLCBpUGllY2UsIHRQaWVjZSwgc1BpZWNlLCB6UGllY2UsIGxQaWVjZSwgalBpZWNlXTtcbiAgICB9XG5cbiAgICAvLyB0YWtlIHBpZWNlIGZyb20gY3VycmVudEJhZyBhbmQgc2V0IGl0IGFzIHRoZSBjdXJyZW50IHBpZWNlXG4gICAgX3NldEN1cnJlbnRQaWVjZSgpIHtcbiAgICAgICAgZGVidWdnZXJcbiAgICAgICAgdGhpcy5jdXJyZW50UGllY2UgPSB0aGlzLmN1cnJlbnRCYWcuc2hpZnQoKTtcbiAgICB9XG5cbiAgICAvLyB0YWtlIG9uZSBwaWVjZSBmcm9tIG5leHRCYWcgYW5kIGFkZCB0byBjdXJyZW50QmFnXG4gICAgX2FkZFRvQ3VycmVudEJhZygpIHtcbiAgICAgICAgdGhpcy5jdXJyZW50QmFnLnB1c2godGhpcy5uZXh0QmFnLnNoaWZ0KCkpO1xuICAgIH1cblxuICAgIC8vIHJlZmlsbCBuZXh0IGJhZywgd2lsbCBvbmx5IGJlIGNhbGxlZCBvbmNlIG5leHRCYWcgYmVjb21lcyBlbXB0eVxuICAgIF9yZWZpbGxOZXh0QmFnKCkge1xuICAgICAgICB0aGlzLm5leHRCYWcgPSB0aGlzLl9nZW5lcmF0ZUJhZygpO1xuICAgIH1cblxuICAgIC8vIGltcGxlbWVudGF0aW9uIG9mIHNodWZmbGUgZm91bmQgb24gaHR0cHM6Ly9zdGFja292ZXJmbG93LmNvbS9xdWVzdGlvbnMvMjQ1MDk1NC9ob3ctdG8tcmFuZG9taXplLXNodWZmbGUtYS1qYXZhc2NyaXB0LWFycmF5IzI0NTA5NzZcbiAgICBfc2h1ZmZsZUJhZyhiYWcpIHtcbiAgICAgICAgdmFyIGN1cnJlbnRJbmRleCA9IGJhZy5sZW5ndGgsIHRlbXBvcmFyeVZhbHVlLCByYW5kb21JbmRleDtcblxuICAgICAgICAvLyBXaGlsZSB0aGVyZSByZW1haW4gZWxlbWVudHMgdG8gc2h1ZmZsZS4uLlxuICAgICAgICB3aGlsZSAoMCAhPT0gY3VycmVudEluZGV4KSB7XG5cbiAgICAgICAgICAgIC8vIFBpY2sgYSByZW1haW5pbmcgZWxlbWVudC4uLlxuICAgICAgICAgICAgcmFuZG9tSW5kZXggPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBjdXJyZW50SW5kZXgpO1xuICAgICAgICAgICAgY3VycmVudEluZGV4IC09IDE7XG5cbiAgICAgICAgICAgIC8vIEFuZCBzd2FwIGl0IHdpdGggdGhlIGN1cnJlbnQgZWxlbWVudC5cbiAgICAgICAgICAgIHRlbXBvcmFyeVZhbHVlID0gYmFnW2N1cnJlbnRJbmRleF07XG4gICAgICAgICAgICBiYWdbY3VycmVudEluZGV4XSA9IGJhZ1tyYW5kb21JbmRleF07XG4gICAgICAgICAgICBiYWdbcmFuZG9tSW5kZXhdID0gdGVtcG9yYXJ5VmFsdWU7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGJhZztcbiAgICB9XG4gICAgLy8gaW1wbGVtZW50YXRpb24gb2Ygc2h1ZmZsZSBmb3VuZCBvbiBodHRwczovL3N0YWNrb3ZlcmZsb3cuY29tL3F1ZXN0aW9ucy8yNDUwOTU0L2hvdy10by1yYW5kb21pemUtc2h1ZmZsZS1hLWphdmFzY3JpcHQtYXJyYXkjMjQ1MDk3NlxuXG4gICAgX3NldEZpZWxkKCkge1xuICAgICAgICBsZXQgZmllbGQgPSBuZXcgRmllbGQoKTtcbiAgICAgICAgcmV0dXJuIGZpZWxkLl9nZW5lcmF0ZUZpZWxkKCk7XG4gICAgfVxuXG4gICAgX2dhbWVPdmVyKCkge1xuICAgICAgICAvLyBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuZmllbGRbMF0ubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgLy8gICAgIGlmICh0aGlzLmZpZWxkWzBdW2ldKSByZXR1cm4gdHJ1ZTtcbiAgICAgICAgLy8gfVxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgLy8gbG9vayB0aHJvdWdoIGZpZWxkLCBpZiBmaWVsZFtyb3ddW2NvbF0gY29udGFpbnMgYSBudW1iZXIgPiAwLCBmaWxsIHRoYXQgc3BvdCB3aXRoIHRoZSByZXNwZWN0aXZlIGNvbG9yLiBFbHNlLCByZW1vdmUgY29sb3JcbiAgICByZW5kZXIoKSB7XG4gICAgICAgIGxldCBmaWVsZENvbHVtbnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmZpZWxkLWNvbHVtblwiKTtcbiAgICAgICAgdGhpcy5maWVsZC5mb3JFYWNoKChyb3csIHJvd0lkeCkgPT4ge1xuICAgICAgICAgICAgcm93LmZvckVhY2goKGNvbCwgY29sSWR4KSA9PiB7XG4gICAgICAgICAgICAgICAgbGV0IHNxdWFyZVZhbHVlID0gdGhpcy5maWVsZFtyb3dJZHhdW2NvbElkeF07XG4gICAgICAgICAgICAgICAgaWYgKHNxdWFyZVZhbHVlKSB7XG4gICAgICAgICAgICAgICAgICAgIGZpZWxkQ29sdW1uc1tjb2xJZHhdLmNoaWxkcmVuW3Jvd0lkeF0uY2xhc3NMaXN0LmFkZCh0aGlzLmNvbG9yc1tzcXVhcmVWYWx1ZV0pO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIE9iamVjdC52YWx1ZXModGhpcy5jb2xvcnMpLmZvckVhY2goY29sb3IgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgZmllbGRDb2x1bW5zW2NvbElkeF0uY2hpbGRyZW5bcm93SWR4XS5jbGFzc0xpc3QucmVtb3ZlKGNvbG9yKTtcbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgaGFuZGxlUGllY2VTdG9wKGNsZWFyKSB7XG4gICAgICAgIGRlYnVnZ2VyXG4gICAgICAgIGNsZWFySW50ZXJ2YWwoY2xlYXIpXG4gICAgICAgIHRoaXMucGxheSgpXG4gICAgfVxuICAgIFxuICAgIHBsYXkoKSB7XG4gICAgICAgIC8vIGxldCBqUGllY2UgPSBuZXcgSlBpZWNlKCk7XG4gICAgICAgIHRoaXMuX3NldEN1cnJlbnRQaWVjZSgpO1xuICAgICAgICB0aGlzLl9hZGRUb0N1cnJlbnRCYWcoKTtcbiAgICAgICAgZGVidWdnZXJcbiAgICAgICAgaWYgKCF0aGlzLm5leHRCYWcubGVuZ3RoKSB0aGlzLl9yZWZpbGxOZXh0QmFnKCk7XG4gICAgICAgIFxuICAgICAgICBsZXQgY2xlYXIgPSBzZXRJbnRlcnZhbCgoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLmN1cnJlbnRQaWVjZS5kcm9wKCk7XG4gICAgICAgICAgICB0aGlzLmN1cnJlbnRQaWVjZS5fcG9wdWxhdGVGaWVsZCh0aGlzLmZpZWxkKTtcbiAgICAgICAgICAgIHRoaXMucmVuZGVyKCk7XG4gICAgICAgICAgICBpZiAoIXRoaXMuY3VycmVudFBpZWNlLmlzRmFsbGluZyh0aGlzLmZpZWxkKSkge1xuICAgICAgICAgICAgICAgIGRlYnVnZ2VyXG4gICAgICAgICAgICAgICAgdGhpcy5oYW5kbGVQaWVjZVN0b3AoY2xlYXIpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LCAxMDAwKTtcbiAgICAgICAgXG4gICAgICAgIC8vIHdoaWxlICghZ2FtZU92ZXIpIHtcbiAgICAgICAgICAgIC8vIHRoaXMuY3VycmVudFBpZWNlID0gdGhpcy5zZXRDdXJyZW50UGllY2U7ICh0YWtlcyBmcm9tIG5leHQgcGllY2VzKVxuICAgICAgICAgICAgLy8gdGhpcy5jdXJyZW50QmFnID0gdGhpcy5zZXRDdXJyZW50QmFnOyAodGFrZXMgb25lIGZyb20gbmV4dCBiYWcpXG4gICAgICAgICAgICAvLyB0aGlzLm5leHRCYWcgPSB0aGlzLnJlc2V0QmFnIChpZiBuZXh0QmFnIGlzIGVtcHR5KVxuICAgICAgICAgICAgLy8gdGhpcy5uZXh0UGllY2VzID0gdGhpcy5zZXROZXh0UGllY2VzO1xuICAgICAgICAvLyB9XG4gICAgfVxuXG59IiwiaW1wb3J0IEdhbWUgZnJvbSAnLi9nYW1lL2dhbWUnO1xuaW1wb3J0IEZpZWxkIGZyb20gJy4vZmllbGQvZmllbGQnO1xuXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCAoKSA9PiB7XG4gICAgY29uc3QgZmllbGRDb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImZpZWxkLWNvbnRhaW5lclwiKTtcblxuICAgIGxldCBmaWVsZCA9IG5ldyBGaWVsZCgpO1xuICAgIGZpZWxkLmNyZWF0ZUZpZWxkV2l0aEhvbGRCb3hBbmROZXh0Qm94ZXMoZmllbGRDb250YWluZXIpO1xuXG4gICAgbGV0IGdhbWUgPSBuZXcgR2FtZSgpO1xuICAgIGdhbWUucGxheShmaWVsZENvbnRhaW5lcik7XG5cbn0pOyIsImltcG9ydCBQaWVjZSBmcm9tICcuL3BpZWNlJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSVBpZWNlIGV4dGVuZHMgUGllY2Uge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICB0aGlzLm5hbWUgPSBcIklQaWVjZVwiO1xuICAgICAgICB0aGlzLnBvc2l0aW9uID0ge1xuICAgICAgICAgICAgdG9wOiBbXSxcbiAgICAgICAgICAgIG1pZGRsZTogW10sXG4gICAgICAgICAgICBib3R0b206IFtbMCwgM10sIFswLCA0XSwgWzAsIDVdLCBbMCwgNl1dXG4gICAgICAgIH07XG4gICAgICAgIHRoaXMuYmFzZVBvc2l0aW9uID0ge1xuICAgICAgICAgICAgdG9wOiBbXSxcbiAgICAgICAgICAgIG1pZGRsZTogW10sXG4gICAgICAgICAgICBib3R0b206IFtbMCwgM10sIFswLCA0XSwgWzAsIDVdLCBbMCwgNl1dXG4gICAgICAgIH07XG5cbiAgICAgICAgdGhpcy5yZW1vdmVTcXVhcmVzID0gW107XG4gICAgfVxufVxuIiwiaW1wb3J0IFBpZWNlIGZyb20gJy4vcGllY2UnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBqUGllY2UgZXh0ZW5kcyBQaWVjZSB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIHRoaXMubmFtZSA9IFwiSlBpZWNlXCI7XG4gICAgICAgIHRoaXMucG9zaXRpb24gPSB7XG4gICAgICAgICAgICB0b3A6IFtbMCwgM11dLFxuICAgICAgICAgICAgbWlkZGxlOiBbXSxcbiAgICAgICAgICAgIGJvdHRvbTogW1sxLCAzXSwgWzEsIDRdLCBbMSwgNV1dXG4gICAgICAgIH07XG4gICAgICAgIHRoaXMuYmFzZVBvc2l0aW9uID0ge1xuICAgICAgICAgICAgdG9wOiBbWzAsIDNdXSxcbiAgICAgICAgICAgIG1pZGRsZTogW10sXG4gICAgICAgICAgICBib3R0b206IFtbMSwgM10sIFsxLCA0XSwgWzEsIDVdXVxuICAgICAgICB9O1xuXG4gICAgICAgIHRoaXMucmVtb3ZlU3F1YXJlcyA9IFtdO1xuICAgIH1cbn0iLCJpbXBvcnQgUGllY2UgZnJvbSAnLi9waWVjZSc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIGxQaWVjZSBleHRlbmRzIFBpZWNlIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgdGhpcy5uYW1lID0gXCJMUGllY2VcIjtcbiAgICAgICAgdGhpcy5wb3NpdGlvbiA9IHtcbiAgICAgICAgICAgIHRvcDogW1swLCA1XV0sXG4gICAgICAgICAgICBtaWRkbGU6IFtdLFxuICAgICAgICAgICAgYm90dG9tOiBbWzEsIDNdLCBbMSwgNF0sIFsxLCA1XV1cbiAgICAgICAgfTtcbiAgICAgICAgdGhpcy5iYXNlUG9zaXRpb24gPSB7XG4gICAgICAgICAgICB0b3A6IFtbMCwgNV1dLFxuICAgICAgICAgICAgbWlkZGxlOiBbXSxcbiAgICAgICAgICAgIGJvdHRvbTogW1sxLCAzXSwgWzEsIDRdLCBbMSwgNV1dXG4gICAgICAgIH07XG5cbiAgICAgICAgdGhpcy5yZW1vdmVTcXVhcmVzID0gW107XG4gICAgfVxufSIsImltcG9ydCBQaWVjZSBmcm9tICcuL3BpZWNlJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgT1BpZWNlIGV4dGVuZHMgUGllY2Uge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICB0aGlzLm5hbWUgPSBcIk9QaWVjZVwiO1xuICAgICAgICB0aGlzLnBvc2l0aW9uID0ge1xuICAgICAgICAgICAgdG9wOiBbWzAsIDRdLCBbMCwgNV1dLFxuICAgICAgICAgICAgbWlkZGxlOiBbXSxcbiAgICAgICAgICAgIGJvdHRvbTogW1sxLCA0XSxbMSwgNV1dXG4gICAgICAgIH07XG4gICAgICAgIHRoaXMuYmFzZVBvc2l0aW9uID0ge1xuICAgICAgICAgICAgdG9wOiBbWzAsIDRdLCBbMCwgNV1dLFxuICAgICAgICAgICAgbWlkZGxlOiBbXSxcbiAgICAgICAgICAgIGJvdHRvbTogW1sxLCA0XSxbMSwgNV1dXG4gICAgICAgIH07XG5cbiAgICAgICAgdGhpcy5yZW1vdmVTcXVhcmVzID0gW107XG5cbiAgICAgICAgZGVidWdnZXJcbiAgICB9XG59ICIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIFBpZWNlIHtcbiAgICBfcG9wdWxhdGVGaWVsZChmaWVsZCkge1xuICAgICAgICBsZXQgY29vcmRpbmF0ZUFycmF5cyA9IE9iamVjdC52YWx1ZXModGhpcy5wb3NpdGlvbik7XG5cbiAgICAgICAgY29vcmRpbmF0ZUFycmF5cy5mb3JFYWNoKGFycmF5ID0+IHtcbiAgICAgICAgICAgIGRlYnVnZ2VyXG4gICAgICAgICAgICBhcnJheS5mb3JFYWNoKGNvb3JkaW5hdGUgPT4ge1xuICAgICAgICAgICAgICAgIGxldCBbcm93LCBjb2xdID0gW2Nvb3JkaW5hdGVbMF0sIGNvb3JkaW5hdGVbMV1dO1xuICAgICAgICAgICAgICAgIHN3aXRjaCAodGhpcy5uYW1lKSB7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UoXCJPUGllY2VcIik6IFxuICAgICAgICAgICAgICAgICAgICAgICAgZmllbGRbcm93XVtjb2xdID0gMTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICBjYXNlKFwiSVBpZWNlXCIpOiBcbiAgICAgICAgICAgICAgICAgICAgICAgIGZpZWxkW3Jvd11bY29sXSA9IDI7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgY2FzZShcIlRQaWVjZVwiKTpcbiAgICAgICAgICAgICAgICAgICAgICAgIGZpZWxkW3Jvd11bY29sXSA9IDM7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgY2FzZShcIlNQaWVjZVwiKTpcbiAgICAgICAgICAgICAgICAgICAgICAgIGZpZWxkW3Jvd11bY29sXSA9IDQ7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAoXCJaUGllY2VcIik6XG4gICAgICAgICAgICAgICAgICAgICAgICBmaWVsZFtyb3ddW2NvbF0gPSA1O1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgKFwiTFBpZWNlXCIpOlxuICAgICAgICAgICAgICAgICAgICAgICAgZmllbGRbcm93XVtjb2xdID0gNjtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIChcIkpQaWVjZVwiKTpcbiAgICAgICAgICAgICAgICAgICAgICAgIGZpZWxkW3Jvd11bY29sXSA9IDc7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KVxuICAgICAgICB9KTtcblxuICAgICAgICBkZWJ1Z2dlclxuICAgICAgICB0aGlzLnJlbW92ZVNxdWFyZXMuZm9yRWFjaChwb3NpdGlvbkFycmF5ID0+IHtcbiAgICAgICAgICAgIGxldCBbcm93LCBjb2xdID0gW3Bvc2l0aW9uQXJyYXlbMF0sIHBvc2l0aW9uQXJyYXlbMV1dO1xuICAgICAgICAgICAgZmllbGRbcm93XVtjb2xdID0gMDtcbiAgICAgICAgfSk7XG4gICAgICAgIFxuICAgICAgICBkZWJ1Z2dlclxuICAgIH1cblxuICAgIC8vIGNvbXBhcmVzIHR3byBhcnJheXMgb2YgY29vcmRpbmF0ZXMgYW5kIGNoZWNrIGlmIHRoZXkgaGF2ZSB0aGUgc2FtZSBjb250ZW50IGluIHRoZSBzYW1lIG9yZGVyXG4gICAgX3NxdWFyZXNBcmVFcXVhbChvbGRTcXVhcmUsIG5ld1NxdWFyZSkge1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IG9sZFNxdWFyZS5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgaWYgKG9sZFNxdWFyZVtpXSAhPT0gbmV3U3F1YXJlW2ldKSByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuXG4gICAgX2luY2x1ZGVzKG9sZFNxdWFyZSwgY29vcmRpbmF0ZUFycmF5cykge1xuICAgICAgICBsZXQgcmVzdWx0ID0gZmFsc2U7XG4gICAgICAgIGNvb3JkaW5hdGVBcnJheXMuZm9yRWFjaChhcnJheSA9PiB7XG4gICAgICAgICAgICBpZiAodGhpcy5fc3F1YXJlc0FyZUVxdWFsKG9sZFNxdWFyZSwgYXJyYXkpKSB7XG4gICAgICAgICAgICAgICAgcmVzdWx0ID0gdHJ1ZTsgXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cblxuICAgIGRyb3AoKSB7XG4gICAgICAgIGxldCBvbGRQb3NpdGlvbiA9IHtcbiAgICAgICAgICAgIHRvcDogdGhpcy5wb3NpdGlvbi50b3AubWFwKGFycmF5ID0+IGFycmF5LnNsaWNlKCkpLFxuICAgICAgICAgICAgbWlkZGxlOiB0aGlzLnBvc2l0aW9uLm1pZGRsZS5tYXAoYXJyYXkgPT4gYXJyYXkuc2xpY2UoKSksXG4gICAgICAgICAgICBib3R0b206IHRoaXMucG9zaXRpb24uYm90dG9tLm1hcChhcnJheSA9PiBhcnJheS5zbGljZSgpKSxcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMucG9zaXRpb24udG9wID0gdGhpcy5wb3NpdGlvbi50b3AubWFwKGFycmF5ID0+IFthcnJheVswXSArIDEsIGFycmF5WzFdXSk7XG4gICAgICAgIHRoaXMucG9zaXRpb24ubWlkZGxlID0gdGhpcy5wb3NpdGlvbi5taWRkbGUubWFwKGFycmF5ID0+IFthcnJheVswXSArIDEsIGFycmF5WzFdXSk7XG4gICAgICAgIHRoaXMucG9zaXRpb24uYm90dG9tID0gdGhpcy5wb3NpdGlvbi5ib3R0b20ubWFwKGFycmF5ID0+IFthcnJheVswXSArIDEsIGFycmF5WzFdXSk7XG5cbiAgICAgICAgLy8gY29tcGFyZSBvbGQgcG9zaXRpb24gd2l0aCBuZXcgcG9zaXRpb25cbiAgICAgICAgbGV0IG9sZFNxdWFyZXMgPSBbXTtcbiAgICAgICAgbGV0IG5ld1NxdWFyZXMgPSBbXTtcbiAgICAgICAgT2JqZWN0LnZhbHVlcyhvbGRQb3NpdGlvbikuZm9yRWFjaChjb29yZGluYXRlc0FycmF5ID0+IGNvb3JkaW5hdGVzQXJyYXkuZm9yRWFjaChhcnJheSA9PiBvbGRTcXVhcmVzLnB1c2goYXJyYXkpKSk7XG4gICAgICAgIE9iamVjdC52YWx1ZXModGhpcy5wb3NpdGlvbikuZm9yRWFjaChjb29yZGluYXRlc0FycmF5ID0+IGNvb3JkaW5hdGVzQXJyYXkuZm9yRWFjaChhcnJheSA9PiBuZXdTcXVhcmVzLnB1c2goYXJyYXkpKSk7XG4gICAgICAgIC8vIGtlZXAgdHJhY2sgb2Ygc3F1YXJlcyB0aGF0IHRoZSBwb3NpdGlvbnMgZG8gbm90IGhhdmUgaW4gY29tbW9uIChzcXVhcmVzIHRvIHJlbW92ZSBjb2xvciBmcm9tKVxuICAgICAgICB0aGlzLnJlbW92ZVNxdWFyZXMgPSBvbGRTcXVhcmVzLmZpbHRlcihvbGRTcXVhcmUgPT4ge1xuICAgICAgICAgICAgaWYgKCF0aGlzLl9pbmNsdWRlcyhvbGRTcXVhcmUsIG5ld1NxdWFyZXMpKSByZXR1cm4gb2xkU3F1YXJlO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBpc0ZhbGxpbmcoZmllbGQpIHtcbiAgICAgICAgZGVidWdnZXJcbiAgICAgICAgbGV0IHJlc3VsdCA9IHRydWU7XG4gICAgICAgIHRoaXMucG9zaXRpb24uYm90dG9tLmZvckVhY2goY29vcmRpbmF0ZVBhaXIgPT4ge1xuICAgICAgICAgICAgbGV0IFtyb3csIGNvbF0gPSBbY29vcmRpbmF0ZVBhaXJbMF0sIGNvb3JkaW5hdGVQYWlyWzFdXTtcbiAgICAgICAgICAgIC8vIGlmIHRoZSBwaWVjZSdzIGN1cnJlbnQgcG9zaXRpb24gaXMgYWJvdmUgdGhlIGZpZWxkIGZsb29yIG9yIGEgYW5vdGhlciBwaWVjZVxuICAgICAgICAgICAgaWYgKCFmaWVsZFtyb3cgKyAxXSB8fCBmaWVsZFtyb3cgKyAxXVtjb2xdKSB7XG4gICAgICAgICAgICAgICAgcmVzdWx0ID0gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cblxuXG4gICAgLy8gdHVyblBpZWNlKHBpZWNlLCBkaXJlY3Rpb24pIHtcbiAgICAvLyAgICAgc3dpdGNoKHBpZWNlKSB7XG4gICAgLy8gICAgICAgICBjYXNlIGxpbmUge1xuXG4gICAgLy8gICAgICAgICB9XG4gICAgLy8gICAgIH1cbiAgICAvLyB9XG59IiwiaW1wb3J0IFBpZWNlIGZyb20gJy4vcGllY2UnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTUGllY2UgZXh0ZW5kcyBQaWVjZSB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIHRoaXMubmFtZSA9IFwiU1BpZWNlXCI7XG4gICAgICAgIHRoaXMucG9zaXRpb24gPSB7XG4gICAgICAgICAgICB0b3A6IFtbMCwgNF0sIFswLCA1XV0sXG4gICAgICAgICAgICBtaWRkbGU6IFtdLFxuICAgICAgICAgICAgYm90dG9tOiBbWzEsIDNdLCBbMSwgNF1dXG4gICAgICAgIH07XG4gICAgICAgIHRoaXMuYmFzZVBvc2l0aW9uID0ge1xuICAgICAgICAgICAgdG9wOiBbWzAsIDRdLCBbMCwgNV1dLFxuICAgICAgICAgICAgbWlkZGxlOiBbXSxcbiAgICAgICAgICAgIGJvdHRvbTogW1sxLCAzXSwgWzEsIDRdXVxuICAgICAgICB9O1xuXG4gICAgICAgIHRoaXMucmVtb3ZlU3F1YXJlcyA9IFtdO1xuXG4gICAgICAgIGRlYnVnZ2VyXG4gICAgfVxufSIsImltcG9ydCBQaWVjZSBmcm9tICcuL3BpZWNlJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVFBpZWNlIGV4dGVuZHMgUGllY2Uge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICB0aGlzLm5hbWUgPSBcIlRQaWVjZVwiO1xuICAgICAgICB0aGlzLnBvc2l0aW9uID0ge1xuICAgICAgICAgICAgdG9wOiBbWzAsIDRdXSxcbiAgICAgICAgICAgIG1pZGRsZTogW10sXG4gICAgICAgICAgICBib3R0b206IFtbMSwgM10sIFsxLCA0XSwgWzEsIDVdXSAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICB9XG4gICAgICAgIHRoaXMuYmFzZVBvc2l0aW9uID0ge1xuICAgICAgICAgICAgdG9wOiBbWzAsIDRdXSxcbiAgICAgICAgICAgIG1pZGRsZTogW10sXG4gICAgICAgICAgICBib3R0b206IFtbMSwgM10sIFsxLCA0XSwgWzEsIDVdXSAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5yZW1vdmVTcXVhcmVzID0gW107XG4gICAgICAgIGRlYnVnZ2VyXG4gICAgfVxuXG59IiwiaW1wb3J0IFBpZWNlIGZyb20gJy4vcGllY2UnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBaUGllY2UgZXh0ZW5kcyBQaWVjZSB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIHRoaXMubmFtZSA9IFwiWlBpZWNlXCI7XG4gICAgICAgIHRoaXMucG9zaXRpb24gPSB7XG4gICAgICAgICAgICB0b3A6IFtbMCwgM10sIFswLCA0XV0sXG4gICAgICAgICAgICBtaWRkbGU6IFtdLFxuICAgICAgICAgICAgYm90dG9tOiBbWzEsIDRdLCBbMSwgNV1dXG4gICAgICAgIH07XG4gICAgICAgIHRoaXMuYmFzZVBvc2l0aW9uID0ge1xuICAgICAgICAgICAgdG9wOiBbWzAsIDNdLCBbMCwgNF1dLFxuICAgICAgICAgICAgbWlkZGxlOiBbXSxcbiAgICAgICAgICAgIGJvdHRvbTogW1sxLCA0XSwgWzEsIDVdXVxuICAgICAgICB9O1xuXG4gICAgICAgIHRoaXMucmVtb3ZlU3F1YXJlcyA9IFtdO1xuICAgIH1cbn0iXSwic291cmNlUm9vdCI6IiJ9