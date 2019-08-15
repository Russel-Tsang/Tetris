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
      7: "dark-blue" // test
      // let tPiece = new TPiece();
      // this.currentPiece = tPiece;
      // test
      // use slice to prevent shallow cloning

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
      clearInterval(clear);
      this.play();
    }
  }, {
    key: "keyListener",
    value: function keyListener() {
      var _this2 = this;

      document.body.addEventListener("keydown", function (event) {
        console.log(event);

        _this2.currentPiece.setLeftMostAndRightMost();

        switch (event.which) {
          // up key
          case 38:
            _this2.currentPiece.move("up");

            break;
          // right key

          case 39:
            if (_this2.currentPiece.rightSideNextToBlock(_this2.field)) break;

            _this2.currentPiece.move("right");

            break;
          // down key

          case 40:
            if (!_this2.currentPiece.isFalling(_this2.field)) break;

            _this2.currentPiece.move("down");

            break;
          // left key

          case 37:
            if (_this2.currentPiece.leftSideNextToBlock(_this2.field)) break;

            _this2.currentPiece.move("left");

            break;
          // space bar
          // case 32:
          //     this.currentPiece.hardDrop();
        }

        _this2.currentPiece.setLeftMostAndRightMost();

        _this2.currentPiece._populateField(_this2.field);

        _this2.render();
      });
    }
  }, {
    key: "play",
    value: function play() {
      var _this3 = this;

      // let jPiece = new JPiece();
      this._setCurrentPiece();

      this.currentPiece.hangingSquares();

      this._addToCurrentBag();

      if (!this.nextBag.length) this._refillNextBag();
      var clear = setInterval(function () {
        // console.log(this.currentPiece.leftMost)
        _this3.currentPiece._populateField(_this3.field);

        _this3.render();

        if (!_this3.currentPiece.isFalling(_this3.field)) _this3.handlePieceStop(clear);

        _this3.currentPiece.drop();

        _this3.currentPiece._populateField(_this3.field); // keep only one populate field?


        _this3.render();
      }, 800);
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
  game.keyListener();
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
    _this.turningPoint = [0, 4];
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
    _this.turningPoint = [1, 4];
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
    _this.turningPoint = [1, 4];
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
    _this.turningPoint = [1, 4];
    _this.removeSquares = [];
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

    this.leftMost = '';
    this.rightMost = '';
  }

  _createClass(Piece, [{
    key: "setLeftMostAndRightMost",
    value: function setLeftMostAndRightMost() {
      var leftMost;
      var rightMost;
      Object.values(this.position).forEach(function (coordinatesArray) {
        return coordinatesArray.forEach(function (array) {
          var columnValue = array[1];
          if (!leftMost) leftMost = columnValue;
          if (!rightMost) rightMost = columnValue;
          if (columnValue < leftMost) leftMost = columnValue;
          if (columnValue > rightMost) rightMost = columnValue;
        });
      });
      this.leftMost = leftMost;
      this.rightMost = rightMost;
    }
  }, {
    key: "_populateField",
    value: function _populateField(field) {
      var _this = this;

      var coordinateArrays = Object.values(this.position);
      coordinateArrays.forEach(function (array) {
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
      this.removeSquares.forEach(function (positionArray) {
        var _ref2 = [positionArray[0], positionArray[1]],
            row = _ref2[0],
            col = _ref2[1];
        field[row][col] = 0;
      });
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
      });
      this.turningPoint = [this.turningPoint[0] + 1, this.turningPoint[1]];
      this.setRemoveSquares(oldPosition);
    } // hardDrop() {
    // }

  }, {
    key: "move",
    value: function move(direction) {
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

      switch (direction) {
        case "left":
          this.position.top = this.position.top.map(function (array) {
            return [array[0], array[1] - 1];
          });
          this.position.middle = this.position.middle.map(function (array) {
            return [array[0], array[1] - 1];
          });
          this.position.bottom = this.position.bottom.map(function (array) {
            return [array[0], array[1] - 1];
          });
          this.turningPoint = [this.turningPoint[0], this.turningPoint[1] - 1];
          break;

        case "up":
          // defer to subclass "turn" method
          this.turnRight();
          break;

        case "right":
          this.position.top = this.position.top.map(function (array) {
            return [array[0], array[1] + 1];
          });
          this.position.middle = this.position.middle.map(function (array) {
            return [array[0], array[1] + 1];
          });
          this.position.bottom = this.position.bottom.map(function (array) {
            return [array[0], array[1] + 1];
          });
          this.turningPoint = [this.turningPoint[0], this.turningPoint[1] + 1];
          break;

        case "down":
          this.position.top = this.position.top.map(function (array) {
            return [array[0] + 1, array[1]];
          });
          this.position.middle = this.position.middle.map(function (array) {
            return [array[0] + 1, array[1]];
          });
          this.position.bottom = this.position.bottom.map(function (array) {
            return [array[0] + 1, array[1]];
          });
          this.turningPoint = [this.turningPoint[0] + 1, this.turningPoint[1]];
          break;
      }

      this.setRemoveSquares(oldPosition);
    }
  }, {
    key: "turnRight",
    value: function turnRight() {
      var _this3 = this;

      var squares = [];
      Object.values(this.position).forEach(function (coordinatesArray) {
        return coordinatesArray.forEach(function (array) {
          squares.push(array);
        });
      });
      this.position.top = [];
      this.position.middle = [];
      this.position.bottom = [];
      squares.forEach(function (square) {
        var column = square[1];
        var heightDifference = _this3.turningPoint[0] - square[0];
        var widthDifference = _this3.turningPoint[1] - square[1];
        var newCol = _this3.turningPoint[1] + heightDifference;
        var newRow = _this3.turningPoint[0] + widthDifference * -1;

        switch (column) {
          case column = _this3.leftMost:
            _this3.position.top.push([newRow, newCol]);

            break;

          case column = _this3.rightMost:
            _this3.position.bottom.push([newRow, newCol]);

            break;

          default:
            _this3.position.middle.push([newRow, newCol]);

            break;
        }
      });
    } // compare old position of piece with new position 

  }, {
    key: "setRemoveSquares",
    value: function setRemoveSquares(oldPosition) {
      var _this4 = this;

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
        if (!_this4._includes(oldSquare, newSquares)) return oldSquare;
      });
    }
  }, {
    key: "hangingSquares",
    value: function hangingSquares() {
      var _this5 = this;

      var squares = [];
      var hangingSquares = [];
      Object.values(this.position).forEach(function (coordinateArrays) {
        return coordinateArrays.forEach(function (coordinate) {
          squares.push(coordinate);
        });
      });
      squares.forEach(function (square) {
        var belowSquare = [square[0] + 1, square[1]];
        if (!_this5._includes(belowSquare, squares)) hangingSquares.push(square);
      });
      return hangingSquares;
    }
  }, {
    key: "isFalling",
    value: function isFalling(field) {
      var result = true;
      this.hangingSquares().forEach(function (coordinatePair) {
        var _ref3 = [coordinatePair[0], coordinatePair[1]],
            row = _ref3[0],
            col = _ref3[1]; // if the piece's current position is above the field floor or a another piece

        if (!field[row + 1] || field[row + 1][col]) {
          result = false;
        }
      });
      return result;
    }
  }, {
    key: "rightSideNextToBlock",
    value: function rightSideNextToBlock(field) {
      var _this6 = this;

      var result = false;
      Object.values(this.position).forEach(function (coordinatesArray) {
        return coordinatesArray.forEach(function (array) {
          var columnValue = array[1];
          var rowValue = array[0];

          if (columnValue = _this6.rightMost) {
            if (columnValue === 9 || field[rowValue][columnValue + 1]) result = true;
          }
        });
      });
      return result;
    }
  }, {
    key: "leftSideNextToBlock",
    value: function leftSideNextToBlock(field) {
      var _this7 = this;

      var result = false;
      Object.values(this.position).forEach(function (coordinatesArray) {
        return coordinatesArray.forEach(function (array) {
          var columnValue = array[1];
          var rowValue = array[0];

          if (columnValue === _this7.leftMost) {
            if (columnValue === 0 || field[rowValue][columnValue - 1]) result = true;
          }
        });
      });
      return result;
    }
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
    _this.turningPoint = [1, 4];
    _this.removeSquares = [];
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
    _this.turningPoint = [1, 4];
    _this.removeSquares = [];
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
    _this.turningPoint = [1, 4];
    _this.removeSquares = [];
    return _this;
  }

  return ZPiece;
}(_piece__WEBPACK_IMPORTED_MODULE_0__["default"]);



/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2ZpZWxkL2ZpZWxkLmpzIiwid2VicGFjazovLy8uL3NyYy9maWVsZC9ob2xkYm94LmpzIiwid2VicGFjazovLy8uL3NyYy9maWVsZC9uZXh0Qm94LmpzIiwid2VicGFjazovLy8uL3NyYy9nYW1lL2dhbWUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9waWVjZXMvaVBpZWNlLmpzIiwid2VicGFjazovLy8uL3NyYy9waWVjZXMvalBpZWNlLmpzIiwid2VicGFjazovLy8uL3NyYy9waWVjZXMvbFBpZWNlLmpzIiwid2VicGFjazovLy8uL3NyYy9waWVjZXMvb1BpZWNlLmpzIiwid2VicGFjazovLy8uL3NyYy9waWVjZXMvcGllY2UuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3BpZWNlcy9zUGllY2UuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3BpZWNlcy90UGllY2UuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3BpZWNlcy96UGllY2UuanMiXSwibmFtZXMiOlsiRmllbGQiLCJmaWVsZCIsImkiLCJyb3ciLCJwdXNoIiwiY29sdW1uIiwiZG9jdW1lbnQiLCJjcmVhdGVFbGVtZW50IiwiY2xhc3NMaXN0IiwiYWRkIiwiYXBwZW5kIiwiYXBwZW5kQ2hpbGQiLCJfY3JlYXRlQ29sdW1uIiwiY29udGFpbmVyIiwibmV4dEJveCIsIk5leHRCb3giLCJob2xkQm94IiwiSG9sZEJveCIsIl9jcmVhdGVGaWVsZCIsImNyZWF0ZU5leHRCb3hlcyIsInByZXBlbmQiLCJjcmVhdGVCb3giLCJib3giLCJfY3JlYXRlQm94Q29sdW1uIiwiX2NyZWF0ZU5leHRCb3hDb2x1bW4iLCJib3hlcyIsIl9jcmVhdGVOZXh0Qm94IiwiR2FtZSIsIl9zZXRGaWVsZCIsImNvbG9ycyIsImN1cnJlbnRQaWVjZSIsImN1cnJlbnRCYWciLCJfc2h1ZmZsZUJhZyIsIl9nZW5lcmF0ZUJhZyIsIm5leHRCYWciLCJvUGllY2UiLCJPUGllY2UiLCJpUGllY2UiLCJJUGllY2UiLCJ0UGllY2UiLCJUUGllY2UiLCJzUGllY2UiLCJTUGllY2UiLCJ6UGllY2UiLCJaUGllY2UiLCJsUGllY2UiLCJMUGllY2UiLCJqUGllY2UiLCJKUGllY2UiLCJzaGlmdCIsImJhZyIsImN1cnJlbnRJbmRleCIsImxlbmd0aCIsInRlbXBvcmFyeVZhbHVlIiwicmFuZG9tSW5kZXgiLCJNYXRoIiwiZmxvb3IiLCJyYW5kb20iLCJfZ2VuZXJhdGVGaWVsZCIsImZpZWxkQ29sdW1ucyIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJmb3JFYWNoIiwicm93SWR4IiwiY29sIiwiY29sSWR4Iiwic3F1YXJlVmFsdWUiLCJjaGlsZHJlbiIsIk9iamVjdCIsInZhbHVlcyIsImNvbG9yIiwicmVtb3ZlIiwiY2xlYXIiLCJjbGVhckludGVydmFsIiwicGxheSIsImJvZHkiLCJhZGRFdmVudExpc3RlbmVyIiwiZXZlbnQiLCJjb25zb2xlIiwibG9nIiwic2V0TGVmdE1vc3RBbmRSaWdodE1vc3QiLCJ3aGljaCIsIm1vdmUiLCJyaWdodFNpZGVOZXh0VG9CbG9jayIsImlzRmFsbGluZyIsImxlZnRTaWRlTmV4dFRvQmxvY2siLCJfcG9wdWxhdGVGaWVsZCIsInJlbmRlciIsIl9zZXRDdXJyZW50UGllY2UiLCJoYW5naW5nU3F1YXJlcyIsIl9hZGRUb0N1cnJlbnRCYWciLCJfcmVmaWxsTmV4dEJhZyIsInNldEludGVydmFsIiwiaGFuZGxlUGllY2VTdG9wIiwiZHJvcCIsImZpZWxkQ29udGFpbmVyIiwiZ2V0RWxlbWVudEJ5SWQiLCJjcmVhdGVGaWVsZFdpdGhIb2xkQm94QW5kTmV4dEJveGVzIiwiZ2FtZSIsImtleUxpc3RlbmVyIiwibmFtZSIsInBvc2l0aW9uIiwidG9wIiwibWlkZGxlIiwiYm90dG9tIiwidHVybmluZ1BvaW50IiwicmVtb3ZlU3F1YXJlcyIsIlBpZWNlIiwibGVmdE1vc3QiLCJyaWdodE1vc3QiLCJjb29yZGluYXRlc0FycmF5IiwiYXJyYXkiLCJjb2x1bW5WYWx1ZSIsImNvb3JkaW5hdGVBcnJheXMiLCJjb29yZGluYXRlIiwicG9zaXRpb25BcnJheSIsIm9sZFNxdWFyZSIsIm5ld1NxdWFyZSIsInJlc3VsdCIsIl9zcXVhcmVzQXJlRXF1YWwiLCJvbGRQb3NpdGlvbiIsIm1hcCIsInNsaWNlIiwic2V0UmVtb3ZlU3F1YXJlcyIsImRpcmVjdGlvbiIsInR1cm5SaWdodCIsInNxdWFyZXMiLCJzcXVhcmUiLCJoZWlnaHREaWZmZXJlbmNlIiwid2lkdGhEaWZmZXJlbmNlIiwibmV3Q29sIiwibmV3Um93Iiwib2xkU3F1YXJlcyIsIm5ld1NxdWFyZXMiLCJmaWx0ZXIiLCJfaW5jbHVkZXMiLCJiZWxvd1NxdWFyZSIsImNvb3JkaW5hdGVQYWlyIiwicm93VmFsdWUiXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbEZBO0FBQ0E7O0lBRXFC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QUUsQ0FBQyxDQUFDLENBQUQsRUFBSSxDQUFKLENBQUQsRUFBUyxDQUFDLENBQUQsRUFBSSxDQUFKLENBQVQ7QUFISSxLQUFoQjtBQUtBLFVBQUtDLFlBQUwsR0FBb0IsQ0FBQyxDQUFELEVBQUksQ0FBSixDQUFwQjtBQUVBLFVBQUtDLGFBQUwsR0FBcUIsRUFBckI7QUFWVTtBQVdiOzs7RUFaK0JDLDhDIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIi9kaXN0L1wiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9pbmRleC5qc1wiKTtcbiIsImltcG9ydCBIb2xkQm94IGZyb20gJy4vaG9sZGJveCc7XG5pbXBvcnQgTmV4dEJveCBmcm9tICcuL25leHRCb3gnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBGaWVsZCB7ICAgIFxuICAgIF9nZW5lcmF0ZUZpZWxkKCkge1xuICAgICAgICBsZXQgZmllbGQgPSBbXTtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCAyMDsgaSsrKSB7XG4gICAgICAgICAgICBsZXQgcm93ID0gWzAsMCwwLDAsMCwwLDAsMCwwLDBdO1xuICAgICAgICAgICAgZmllbGQucHVzaChyb3cpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBmaWVsZDtcbiAgICB9XG5cbiAgICAvL19pc1ZhbGlkTW92ZVxuXG4gICAgX2NyZWF0ZUNvbHVtbigpIHtcbiAgICAgICAgbGV0IGNvbHVtbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ1bFwiKTtcbiAgICAgICAgY29sdW1uLmNsYXNzTGlzdC5hZGQoXCJmaWVsZC1jb2x1bW5cIik7XG5cbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCAyMDsgaSsrKSB7XG4gICAgICAgICAgICBjb2x1bW4uYXBwZW5kKGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaVwiKSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGNvbHVtbjtcbiAgICB9XG5cbiAgICBfY3JlYXRlRmllbGQoKSB7XG4gICAgICAgIGxldCBmaWVsZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIGZpZWxkLmNsYXNzTGlzdC5hZGQoXCJmaWVsZC1ib3hcIik7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMTA7IGkrKykge1xuICAgICAgICAgICAgZmllbGQuYXBwZW5kQ2hpbGQodGhpcy5fY3JlYXRlQ29sdW1uKCkpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBmaWVsZDtcbiAgICB9XG5cbiAgICBjcmVhdGVGaWVsZFdpdGhIb2xkQm94QW5kTmV4dEJveGVzKGNvbnRhaW5lcikge1xuICAgICAgICBsZXQgbmV4dEJveCA9IG5ldyBOZXh0Qm94KCk7XG4gICAgICAgIGxldCBob2xkQm94ID0gbmV3IEhvbGRCb3goKTtcbiAgICAgICAgY29udGFpbmVyLmFwcGVuZCh0aGlzLl9jcmVhdGVGaWVsZCgpKTtcbiAgICAgICAgY29udGFpbmVyLmFwcGVuZChuZXh0Qm94LmNyZWF0ZU5leHRCb3hlcygpKTtcbiAgICAgICAgY29udGFpbmVyLnByZXBlbmQoaG9sZEJveC5jcmVhdGVCb3goKSk7XG4gICAgICAgIHJldHVybiBjb250YWluZXI7XG4gICAgfVxuXG59IiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgSG9sZEJveCB7XG4gICAgX2NyZWF0ZUJveENvbHVtbigpIHtcbiAgICAgICAgbGV0IGNvbHVtbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ1bFwiKTtcbiAgICAgICAgY29sdW1uLmNsYXNzTGlzdC5hZGQoXCJob2xkLWNvbHVtblwiKTtcblxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IDQ7IGkrKykge1xuICAgICAgICAgICAgY29sdW1uLmFwcGVuZChkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIikpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBjb2x1bW47XG4gICAgfVxuXG4gICAgY3JlYXRlQm94KCkge1xuICAgICAgICBsZXQgYm94ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgYm94LmNsYXNzTGlzdC5hZGQoXCJob2xkLWJveFwiKTtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCA1OyBpKyspIHtcbiAgICAgICAgICAgIGJveC5hcHBlbmRDaGlsZCh0aGlzLl9jcmVhdGVCb3hDb2x1bW4oKSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGJveDtcbiAgICB9XG59IiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgTmV4dEJveCB7XG4gICAgX2NyZWF0ZU5leHRCb3hDb2x1bW4oKSB7XG4gICAgICAgIGxldCBjb2x1bW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidWxcIik7XG4gICAgICAgIGNvbHVtbi5jbGFzc0xpc3QuYWRkKFwibmV4dC1jb2x1bW5cIik7XG5cbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCA0OyBpKyspIHtcbiAgICAgICAgICAgIGNvbHVtbi5hcHBlbmQoZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpXCIpKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gY29sdW1uO1xuICAgIH1cblxuICAgIF9jcmVhdGVOZXh0Qm94KCkge1xuICAgICAgICBsZXQgYm94ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgYm94LmNsYXNzTGlzdC5hZGQoXCJuZXh0LWJveFwiKTtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCA1OyBpKyspIHtcbiAgICAgICAgICAgIGJveC5hcHBlbmRDaGlsZCh0aGlzLl9jcmVhdGVOZXh0Qm94Q29sdW1uKCkpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBib3g7XG4gICAgfVxuXG4gICAgY3JlYXRlTmV4dEJveGVzKCkge1xuICAgICAgICBsZXQgYm94ZXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICBib3hlcy5jbGFzc0xpc3QuYWRkKFwibmV4dC1ib3hlc1wiKTtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCA1OyBpKyspIHtcbiAgICAgICAgICAgIGJveGVzLmFwcGVuZENoaWxkKHRoaXMuX2NyZWF0ZU5leHRCb3goKSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGJveGVzO1xuICAgIH1cbn0iLCJpbXBvcnQgRmllbGQgZnJvbSAnLi4vZmllbGQvZmllbGQnO1xuaW1wb3J0IE9QaWVjZSBmcm9tICcuLi9waWVjZXMvb1BpZWNlJztcbmltcG9ydCBJUGllY2UgZnJvbSAnLi4vcGllY2VzL2lQaWVjZSc7XG5pbXBvcnQgVFBpZWNlIGZyb20gJy4uL3BpZWNlcy90UGllY2UnO1xuaW1wb3J0IFNQaWVjZSBmcm9tICcuLi9waWVjZXMvc1BpZWNlJztcbmltcG9ydCBaUGllY2UgZnJvbSAnLi4vcGllY2VzL3pQaWVjZSc7XG5pbXBvcnQgTFBpZWNlIGZyb20gJy4uL3BpZWNlcy9sUGllY2UnO1xuaW1wb3J0IEpQaWVjZSBmcm9tICcuLi9waWVjZXMvalBpZWNlJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgR2FtZSB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMuZmllbGQgPSB0aGlzLl9zZXRGaWVsZCgpXG5cbiAgICAgICAgdGhpcy5jb2xvcnMgPSB7XG4gICAgICAgICAgICAxOiBcInllbGxvd1wiLFxuICAgICAgICAgICAgMjogXCJibHVlXCIsXG4gICAgICAgICAgICAzOiBcInB1cnBsZVwiLFxuICAgICAgICAgICAgNDogXCJncmVlblwiLFxuICAgICAgICAgICAgNTogXCJyZWRcIixcbiAgICAgICAgICAgIDY6IFwib3JhbmdlXCIsXG4gICAgICAgICAgICA3OiBcImRhcmstYmx1ZVwiXG4gICAgICAgIH1cbiAgICAgICAgLy8gdGVzdFxuICAgICAgICAvLyBsZXQgdFBpZWNlID0gbmV3IFRQaWVjZSgpO1xuICAgICAgICAvLyB0aGlzLmN1cnJlbnRQaWVjZSA9IHRQaWVjZTtcbiAgICAgICAgLy8gdGVzdFxuICAgICAgICAvLyB1c2Ugc2xpY2UgdG8gcHJldmVudCBzaGFsbG93IGNsb25pbmdcbiAgICAgICAgdGhpcy5jdXJyZW50UGllY2UgPSAnJztcbiAgICAgICAgdGhpcy5jdXJyZW50QmFnID0gdGhpcy5fc2h1ZmZsZUJhZyh0aGlzLl9nZW5lcmF0ZUJhZygpKTtcbiAgICAgICAgdGhpcy5uZXh0QmFnID0gdGhpcy5fc2h1ZmZsZUJhZyh0aGlzLl9nZW5lcmF0ZUJhZygpKTtcbiAgICB9XG5cbiAgICBfZ2VuZXJhdGVCYWcoKSB7XG4gICAgICAgIGxldCBvUGllY2UgPSBuZXcgT1BpZWNlKCk7XG4gICAgICAgIGxldCBpUGllY2UgPSBuZXcgSVBpZWNlKCk7XG4gICAgICAgIGxldCB0UGllY2UgPSBuZXcgVFBpZWNlKCk7XG4gICAgICAgIGxldCBzUGllY2UgPSBuZXcgU1BpZWNlKCk7XG4gICAgICAgIGxldCB6UGllY2UgPSBuZXcgWlBpZWNlKCk7XG4gICAgICAgIGxldCBsUGllY2UgPSBuZXcgTFBpZWNlKCk7XG4gICAgICAgIGxldCBqUGllY2UgPSBuZXcgSlBpZWNlKCk7XG5cbiAgICAgICAgcmV0dXJuIFtvUGllY2UsIGlQaWVjZSwgdFBpZWNlLCBzUGllY2UsIHpQaWVjZSwgbFBpZWNlLCBqUGllY2VdO1xuICAgIH1cblxuICAgIC8vIHRha2UgcGllY2UgZnJvbSBjdXJyZW50QmFnIGFuZCBzZXQgaXQgYXMgdGhlIGN1cnJlbnQgcGllY2VcbiAgICBfc2V0Q3VycmVudFBpZWNlKCkge1xuICAgICAgICB0aGlzLmN1cnJlbnRQaWVjZSA9IHRoaXMuY3VycmVudEJhZy5zaGlmdCgpO1xuICAgIH1cblxuICAgIC8vIHRha2Ugb25lIHBpZWNlIGZyb20gbmV4dEJhZyBhbmQgYWRkIHRvIGN1cnJlbnRCYWdcbiAgICBfYWRkVG9DdXJyZW50QmFnKCkge1xuICAgICAgICB0aGlzLmN1cnJlbnRCYWcucHVzaCh0aGlzLm5leHRCYWcuc2hpZnQoKSk7XG4gICAgfVxuXG4gICAgLy8gcmVmaWxsIG5leHQgYmFnLCB3aWxsIG9ubHkgYmUgY2FsbGVkIG9uY2UgbmV4dEJhZyBiZWNvbWVzIGVtcHR5XG4gICAgX3JlZmlsbE5leHRCYWcoKSB7XG4gICAgICAgIHRoaXMubmV4dEJhZyA9IHRoaXMuX2dlbmVyYXRlQmFnKCk7XG4gICAgfVxuXG4gICAgLy8gaW1wbGVtZW50YXRpb24gb2Ygc2h1ZmZsZSBmb3VuZCBvbiBodHRwczovL3N0YWNrb3ZlcmZsb3cuY29tL3F1ZXN0aW9ucy8yNDUwOTU0L2hvdy10by1yYW5kb21pemUtc2h1ZmZsZS1hLWphdmFzY3JpcHQtYXJyYXkjMjQ1MDk3NlxuICAgIF9zaHVmZmxlQmFnKGJhZykge1xuICAgICAgICB2YXIgY3VycmVudEluZGV4ID0gYmFnLmxlbmd0aCwgdGVtcG9yYXJ5VmFsdWUsIHJhbmRvbUluZGV4O1xuXG4gICAgICAgIC8vIFdoaWxlIHRoZXJlIHJlbWFpbiBlbGVtZW50cyB0byBzaHVmZmxlLi4uXG4gICAgICAgIHdoaWxlICgwICE9PSBjdXJyZW50SW5kZXgpIHtcblxuICAgICAgICAgICAgLy8gUGljayBhIHJlbWFpbmluZyBlbGVtZW50Li4uXG4gICAgICAgICAgICByYW5kb21JbmRleCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIGN1cnJlbnRJbmRleCk7XG4gICAgICAgICAgICBjdXJyZW50SW5kZXggLT0gMTtcblxuICAgICAgICAgICAgLy8gQW5kIHN3YXAgaXQgd2l0aCB0aGUgY3VycmVudCBlbGVtZW50LlxuICAgICAgICAgICAgdGVtcG9yYXJ5VmFsdWUgPSBiYWdbY3VycmVudEluZGV4XTtcbiAgICAgICAgICAgIGJhZ1tjdXJyZW50SW5kZXhdID0gYmFnW3JhbmRvbUluZGV4XTtcbiAgICAgICAgICAgIGJhZ1tyYW5kb21JbmRleF0gPSB0ZW1wb3JhcnlWYWx1ZTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gYmFnO1xuICAgIH1cbiAgICAvLyBpbXBsZW1lbnRhdGlvbiBvZiBzaHVmZmxlIGZvdW5kIG9uIGh0dHBzOi8vc3RhY2tvdmVyZmxvdy5jb20vcXVlc3Rpb25zLzI0NTA5NTQvaG93LXRvLXJhbmRvbWl6ZS1zaHVmZmxlLWEtamF2YXNjcmlwdC1hcnJheSMyNDUwOTc2XG5cbiAgICBfc2V0RmllbGQoKSB7XG4gICAgICAgIGxldCBmaWVsZCA9IG5ldyBGaWVsZCgpO1xuICAgICAgICByZXR1cm4gZmllbGQuX2dlbmVyYXRlRmllbGQoKTtcbiAgICB9XG5cbiAgICBfZ2FtZU92ZXIoKSB7XG4gICAgICAgIC8vIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5maWVsZFswXS5sZW5ndGg7IGkrKykge1xuICAgICAgICAvLyAgICAgaWYgKHRoaXMuZmllbGRbMF1baV0pIHJldHVybiB0cnVlO1xuICAgICAgICAvLyB9XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICAvLyBsb29rIHRocm91Z2ggZmllbGQsIGlmIGZpZWxkW3Jvd11bY29sXSBjb250YWlucyBhIG51bWJlciA+IDAsIGZpbGwgdGhhdCBzcG90IHdpdGggdGhlIHJlc3BlY3RpdmUgY29sb3IuIEVsc2UsIHJlbW92ZSBjb2xvclxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgbGV0IGZpZWxkQ29sdW1ucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuZmllbGQtY29sdW1uXCIpO1xuICAgICAgICB0aGlzLmZpZWxkLmZvckVhY2goKHJvdywgcm93SWR4KSA9PiB7XG4gICAgICAgICAgICByb3cuZm9yRWFjaCgoY29sLCBjb2xJZHgpID0+IHtcbiAgICAgICAgICAgICAgICBsZXQgc3F1YXJlVmFsdWUgPSB0aGlzLmZpZWxkW3Jvd0lkeF1bY29sSWR4XTtcbiAgICAgICAgICAgICAgICBpZiAoc3F1YXJlVmFsdWUpIHtcbiAgICAgICAgICAgICAgICAgICAgZmllbGRDb2x1bW5zW2NvbElkeF0uY2hpbGRyZW5bcm93SWR4XS5jbGFzc0xpc3QuYWRkKHRoaXMuY29sb3JzW3NxdWFyZVZhbHVlXSk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgT2JqZWN0LnZhbHVlcyh0aGlzLmNvbG9ycykuZm9yRWFjaChjb2xvciA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBmaWVsZENvbHVtbnNbY29sSWR4XS5jaGlsZHJlbltyb3dJZHhdLmNsYXNzTGlzdC5yZW1vdmUoY29sb3IpO1xuICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBoYW5kbGVQaWVjZVN0b3AoY2xlYXIpIHtcbiAgICAgICAgY2xlYXJJbnRlcnZhbChjbGVhcilcbiAgICAgICAgdGhpcy5wbGF5KClcbiAgICB9XG5cbiAgICBrZXlMaXN0ZW5lcigpIHtcbiAgICAgICAgZG9jdW1lbnQuYm9keS5hZGRFdmVudExpc3RlbmVyKFwia2V5ZG93blwiLCBldmVudCA9PiB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhldmVudCk7XG4gICAgICAgICAgICB0aGlzLmN1cnJlbnRQaWVjZS5zZXRMZWZ0TW9zdEFuZFJpZ2h0TW9zdCgpO1xuICAgICAgICAgICAgc3dpdGNoKGV2ZW50LndoaWNoKSB7XG4gICAgICAgICAgICAgICAgLy8gdXAga2V5XG4gICAgICAgICAgICAgICAgY2FzZSAzODpcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jdXJyZW50UGllY2UubW92ZShcInVwXCIpO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAvLyByaWdodCBrZXlcbiAgICAgICAgICAgICAgICBjYXNlIDM5OlxuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5jdXJyZW50UGllY2UucmlnaHRTaWRlTmV4dFRvQmxvY2sodGhpcy5maWVsZCkpIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmN1cnJlbnRQaWVjZS5tb3ZlKFwicmlnaHRcIik7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIC8vIGRvd24ga2V5XG4gICAgICAgICAgICAgICAgY2FzZSA0MDpcbiAgICAgICAgICAgICAgICAgICAgaWYgKCF0aGlzLmN1cnJlbnRQaWVjZS5pc0ZhbGxpbmcodGhpcy5maWVsZCkpIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmN1cnJlbnRQaWVjZS5tb3ZlKFwiZG93blwiKTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgLy8gbGVmdCBrZXlcbiAgICAgICAgICAgICAgICBjYXNlIDM3OlxuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5jdXJyZW50UGllY2UubGVmdFNpZGVOZXh0VG9CbG9jayh0aGlzLmZpZWxkKSkgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY3VycmVudFBpZWNlLm1vdmUoXCJsZWZ0XCIpO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAvLyBzcGFjZSBiYXJcbiAgICAgICAgICAgICAgICAvLyBjYXNlIDMyOlxuICAgICAgICAgICAgICAgIC8vICAgICB0aGlzLmN1cnJlbnRQaWVjZS5oYXJkRHJvcCgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5jdXJyZW50UGllY2Uuc2V0TGVmdE1vc3RBbmRSaWdodE1vc3QoKTtcbiAgICAgICAgICAgIHRoaXMuY3VycmVudFBpZWNlLl9wb3B1bGF0ZUZpZWxkKHRoaXMuZmllbGQpO1xuICAgICAgICAgICAgdGhpcy5yZW5kZXIoKTtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIFxuICAgIHBsYXkoKSB7XG4gICAgICAgIC8vIGxldCBqUGllY2UgPSBuZXcgSlBpZWNlKCk7XG4gICAgICAgIHRoaXMuX3NldEN1cnJlbnRQaWVjZSgpO1xuICAgICAgICB0aGlzLmN1cnJlbnRQaWVjZS5oYW5naW5nU3F1YXJlcygpO1xuICAgICAgICB0aGlzLl9hZGRUb0N1cnJlbnRCYWcoKTtcbiAgICAgICAgaWYgKCF0aGlzLm5leHRCYWcubGVuZ3RoKSB0aGlzLl9yZWZpbGxOZXh0QmFnKCk7XG4gICAgICAgIFxuICAgICAgICBsZXQgY2xlYXIgPSBzZXRJbnRlcnZhbCgoKSA9PiB7XG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyh0aGlzLmN1cnJlbnRQaWVjZS5sZWZ0TW9zdClcbiAgICAgICAgICAgIHRoaXMuY3VycmVudFBpZWNlLl9wb3B1bGF0ZUZpZWxkKHRoaXMuZmllbGQpO1xuICAgICAgICAgICAgdGhpcy5yZW5kZXIoKTtcbiAgICAgICAgICAgIGlmICghdGhpcy5jdXJyZW50UGllY2UuaXNGYWxsaW5nKHRoaXMuZmllbGQpKSB0aGlzLmhhbmRsZVBpZWNlU3RvcChjbGVhcik7XG4gICAgICAgICAgICB0aGlzLmN1cnJlbnRQaWVjZS5kcm9wKCk7XG4gICAgICAgICAgICB0aGlzLmN1cnJlbnRQaWVjZS5fcG9wdWxhdGVGaWVsZCh0aGlzLmZpZWxkKTsgLy8ga2VlcCBvbmx5IG9uZSBwb3B1bGF0ZSBmaWVsZD9cbiAgICAgICAgICAgIHRoaXMucmVuZGVyKCk7XG4gICAgICAgIH0sIDgwMCk7XG4gICAgfVxuXG59IiwiaW1wb3J0IEdhbWUgZnJvbSAnLi9nYW1lL2dhbWUnO1xuaW1wb3J0IEZpZWxkIGZyb20gJy4vZmllbGQvZmllbGQnO1xuXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCAoKSA9PiB7XG4gICAgY29uc3QgZmllbGRDb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImZpZWxkLWNvbnRhaW5lclwiKTtcblxuICAgIGxldCBmaWVsZCA9IG5ldyBGaWVsZCgpO1xuICAgIGZpZWxkLmNyZWF0ZUZpZWxkV2l0aEhvbGRCb3hBbmROZXh0Qm94ZXMoZmllbGRDb250YWluZXIpO1xuXG4gICAgbGV0IGdhbWUgPSBuZXcgR2FtZSgpO1xuICAgIGdhbWUua2V5TGlzdGVuZXIoKTtcbiAgICBnYW1lLnBsYXkoZmllbGRDb250YWluZXIpO1xuXG59KTsiLCJpbXBvcnQgUGllY2UgZnJvbSAnLi9waWVjZSc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIElQaWVjZSBleHRlbmRzIFBpZWNlIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgdGhpcy5uYW1lID0gXCJJUGllY2VcIjtcbiAgICAgICAgdGhpcy5wb3NpdGlvbiA9IHtcbiAgICAgICAgICAgIHRvcDogW10sXG4gICAgICAgICAgICBtaWRkbGU6IFtdLFxuICAgICAgICAgICAgYm90dG9tOiBbWzAsIDNdLCBbMCwgNF0sIFswLCA1XSwgWzAsIDZdXVxuICAgICAgICB9O1xuICAgICAgICB0aGlzLnR1cm5pbmdQb2ludCA9IFswLCA0XTtcblxuICAgICAgICB0aGlzLnJlbW92ZVNxdWFyZXMgPSBbXTtcbiAgICB9XG5cblxufVxuXG5cbiIsImltcG9ydCBQaWVjZSBmcm9tICcuL3BpZWNlJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgalBpZWNlIGV4dGVuZHMgUGllY2Uge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICB0aGlzLm5hbWUgPSBcIkpQaWVjZVwiO1xuICAgICAgICB0aGlzLnBvc2l0aW9uID0ge1xuICAgICAgICAgICAgdG9wOiBbWzAsIDNdXSxcbiAgICAgICAgICAgIG1pZGRsZTogW10sXG4gICAgICAgICAgICBib3R0b206IFtbMSwgM10sIFsxLCA0XSwgWzEsIDVdXVxuICAgICAgICB9O1xuICAgICAgICB0aGlzLnR1cm5pbmdQb2ludCA9IFsxLCA0XTtcblxuICAgICAgICB0aGlzLnJlbW92ZVNxdWFyZXMgPSBbXTtcbiAgICB9XG59IiwiaW1wb3J0IFBpZWNlIGZyb20gJy4vcGllY2UnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBsUGllY2UgZXh0ZW5kcyBQaWVjZSB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIHRoaXMubmFtZSA9IFwiTFBpZWNlXCI7XG4gICAgICAgIHRoaXMucG9zaXRpb24gPSB7XG4gICAgICAgICAgICB0b3A6IFtbMCwgNV1dLFxuICAgICAgICAgICAgbWlkZGxlOiBbXSxcbiAgICAgICAgICAgIGJvdHRvbTogW1sxLCAzXSwgWzEsIDRdLCBbMSwgNV1dXG4gICAgICAgIH07XG4gICAgICAgIHRoaXMudHVybmluZ1BvaW50ID0gWzEsIDRdO1xuXG4gICAgICAgIHRoaXMucmVtb3ZlU3F1YXJlcyA9IFtdO1xuICAgIH1cbn0iLCJpbXBvcnQgUGllY2UgZnJvbSAnLi9waWVjZSc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE9QaWVjZSBleHRlbmRzIFBpZWNlIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgdGhpcy5uYW1lID0gXCJPUGllY2VcIjtcbiAgICAgICAgdGhpcy5wb3NpdGlvbiA9IHtcbiAgICAgICAgICAgIHRvcDogW1swLCA0XSwgWzAsIDVdXSxcbiAgICAgICAgICAgIG1pZGRsZTogW10sXG4gICAgICAgICAgICBib3R0b206IFtbMSwgNF0sWzEsIDVdXVxuICAgICAgICB9O1xuICAgICAgICB0aGlzLnR1cm5pbmdQb2ludCA9IFsxLCA0XTtcblxuICAgICAgICB0aGlzLnJlbW92ZVNxdWFyZXMgPSBbXTtcbiAgICB9XG59ICIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIFBpZWNlIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5sZWZ0TW9zdCA9ICcnO1xuICAgICAgICB0aGlzLnJpZ2h0TW9zdCA9ICcnO1xuICAgIH1cblxuICAgIHNldExlZnRNb3N0QW5kUmlnaHRNb3N0KCkge1xuICAgICAgICBsZXQgbGVmdE1vc3Q7XG4gICAgICAgIGxldCByaWdodE1vc3Q7XG4gICAgICAgIE9iamVjdC52YWx1ZXModGhpcy5wb3NpdGlvbikuZm9yRWFjaChjb29yZGluYXRlc0FycmF5ID0+IGNvb3JkaW5hdGVzQXJyYXkuZm9yRWFjaChhcnJheSA9PiB7XG4gICAgICAgICAgICBsZXQgY29sdW1uVmFsdWUgPSBhcnJheVsxXTtcbiAgICAgICAgICAgIGlmICghbGVmdE1vc3QpIGxlZnRNb3N0ID0gY29sdW1uVmFsdWU7XG4gICAgICAgICAgICBpZiAoIXJpZ2h0TW9zdCkgcmlnaHRNb3N0ID0gY29sdW1uVmFsdWU7XG4gICAgICAgICAgICBpZiAoY29sdW1uVmFsdWUgPCBsZWZ0TW9zdCkgbGVmdE1vc3QgPSBjb2x1bW5WYWx1ZTtcbiAgICAgICAgICAgIGlmIChjb2x1bW5WYWx1ZSA+IHJpZ2h0TW9zdCkgcmlnaHRNb3N0ID0gY29sdW1uVmFsdWU7XG4gICAgICAgIH0pKTtcbiAgICAgICAgdGhpcy5sZWZ0TW9zdCA9IGxlZnRNb3N0O1xuICAgICAgICB0aGlzLnJpZ2h0TW9zdCA9IHJpZ2h0TW9zdDtcbiAgICB9XG5cbiAgICBfcG9wdWxhdGVGaWVsZChmaWVsZCkge1xuICAgICAgICBcbiAgICAgICAgbGV0IGNvb3JkaW5hdGVBcnJheXMgPSBPYmplY3QudmFsdWVzKHRoaXMucG9zaXRpb24pO1xuXG4gICAgICAgIGNvb3JkaW5hdGVBcnJheXMuZm9yRWFjaChhcnJheSA9PiB7XG4gICAgICAgICAgICBhcnJheS5mb3JFYWNoKGNvb3JkaW5hdGUgPT4ge1xuICAgICAgICAgICAgICAgIGxldCBbcm93LCBjb2xdID0gW2Nvb3JkaW5hdGVbMF0sIGNvb3JkaW5hdGVbMV1dO1xuICAgICAgICAgICAgICAgIHN3aXRjaCAodGhpcy5uYW1lKSB7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UoXCJPUGllY2VcIik6IFxuICAgICAgICAgICAgICAgICAgICAgICAgZmllbGRbcm93XVtjb2xdID0gMTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICBjYXNlKFwiSVBpZWNlXCIpOiBcbiAgICAgICAgICAgICAgICAgICAgICAgIGZpZWxkW3Jvd11bY29sXSA9IDI7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgY2FzZShcIlRQaWVjZVwiKTpcbiAgICAgICAgICAgICAgICAgICAgICAgIGZpZWxkW3Jvd11bY29sXSA9IDM7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgY2FzZShcIlNQaWVjZVwiKTpcbiAgICAgICAgICAgICAgICAgICAgICAgIGZpZWxkW3Jvd11bY29sXSA9IDQ7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAoXCJaUGllY2VcIik6XG4gICAgICAgICAgICAgICAgICAgICAgICBmaWVsZFtyb3ddW2NvbF0gPSA1O1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgKFwiTFBpZWNlXCIpOlxuICAgICAgICAgICAgICAgICAgICAgICAgZmllbGRbcm93XVtjb2xdID0gNjtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIChcIkpQaWVjZVwiKTpcbiAgICAgICAgICAgICAgICAgICAgICAgIGZpZWxkW3Jvd11bY29sXSA9IDc7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KVxuICAgICAgICB9KTtcblxuICAgICAgICB0aGlzLnJlbW92ZVNxdWFyZXMuZm9yRWFjaChwb3NpdGlvbkFycmF5ID0+IHtcbiAgICAgICAgICAgIGxldCBbcm93LCBjb2xdID0gW3Bvc2l0aW9uQXJyYXlbMF0sIHBvc2l0aW9uQXJyYXlbMV1dO1xuICAgICAgICAgICAgZmllbGRbcm93XVtjb2xdID0gMDtcbiAgICAgICAgfSk7XG4gICAgICAgIFxuICAgIH1cblxuICAgIC8vIGNvbXBhcmVzIHR3byBhcnJheXMgb2YgY29vcmRpbmF0ZXMgYW5kIGNoZWNrIGlmIHRoZXkgaGF2ZSB0aGUgc2FtZSBjb250ZW50IGluIHRoZSBzYW1lIG9yZGVyXG4gICAgX3NxdWFyZXNBcmVFcXVhbChvbGRTcXVhcmUsIG5ld1NxdWFyZSkge1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IG9sZFNxdWFyZS5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgaWYgKG9sZFNxdWFyZVtpXSAhPT0gbmV3U3F1YXJlW2ldKSByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuXG4gICAgX2luY2x1ZGVzKG9sZFNxdWFyZSwgY29vcmRpbmF0ZUFycmF5cykge1xuICAgICAgICBsZXQgcmVzdWx0ID0gZmFsc2U7XG4gICAgICAgIGNvb3JkaW5hdGVBcnJheXMuZm9yRWFjaChhcnJheSA9PiB7XG4gICAgICAgICAgICBpZiAodGhpcy5fc3F1YXJlc0FyZUVxdWFsKG9sZFNxdWFyZSwgYXJyYXkpKSB7XG4gICAgICAgICAgICAgICAgcmVzdWx0ID0gdHJ1ZTsgXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cblxuICAgIGRyb3AoKSB7XG4gICAgICAgIGxldCBvbGRQb3NpdGlvbiA9IHtcbiAgICAgICAgICAgIHRvcDogdGhpcy5wb3NpdGlvbi50b3AubWFwKGFycmF5ID0+IGFycmF5LnNsaWNlKCkpLFxuICAgICAgICAgICAgbWlkZGxlOiB0aGlzLnBvc2l0aW9uLm1pZGRsZS5tYXAoYXJyYXkgPT4gYXJyYXkuc2xpY2UoKSksXG4gICAgICAgICAgICBib3R0b206IHRoaXMucG9zaXRpb24uYm90dG9tLm1hcChhcnJheSA9PiBhcnJheS5zbGljZSgpKSxcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMucG9zaXRpb24udG9wID0gdGhpcy5wb3NpdGlvbi50b3AubWFwKGFycmF5ID0+IFthcnJheVswXSArIDEsIGFycmF5WzFdXSk7XG4gICAgICAgIHRoaXMucG9zaXRpb24ubWlkZGxlID0gdGhpcy5wb3NpdGlvbi5taWRkbGUubWFwKGFycmF5ID0+IFthcnJheVswXSArIDEsIGFycmF5WzFdXSk7XG4gICAgICAgIHRoaXMucG9zaXRpb24uYm90dG9tID0gdGhpcy5wb3NpdGlvbi5ib3R0b20ubWFwKGFycmF5ID0+IFthcnJheVswXSArIDEsIGFycmF5WzFdXSk7XG4gICAgICAgIHRoaXMudHVybmluZ1BvaW50ID0gW3RoaXMudHVybmluZ1BvaW50WzBdICsgMSwgdGhpcy50dXJuaW5nUG9pbnRbMV1dO1xuXG4gICAgICAgIHRoaXMuc2V0UmVtb3ZlU3F1YXJlcyhvbGRQb3NpdGlvbik7XG4gICAgfVxuXG4gICAgLy8gaGFyZERyb3AoKSB7XG5cbiAgICAvLyB9XG5cbiAgICBtb3ZlKGRpcmVjdGlvbikge1xuICAgICAgICBsZXQgb2xkUG9zaXRpb24gPSB7XG4gICAgICAgICAgICB0b3A6IHRoaXMucG9zaXRpb24udG9wLm1hcChhcnJheSA9PiBhcnJheS5zbGljZSgpKSxcbiAgICAgICAgICAgIG1pZGRsZTogdGhpcy5wb3NpdGlvbi5taWRkbGUubWFwKGFycmF5ID0+IGFycmF5LnNsaWNlKCkpLFxuICAgICAgICAgICAgYm90dG9tOiB0aGlzLnBvc2l0aW9uLmJvdHRvbS5tYXAoYXJyYXkgPT4gYXJyYXkuc2xpY2UoKSksXG4gICAgICAgIH1cbiAgICAgICAgc3dpdGNoKGRpcmVjdGlvbikge1xuICAgICAgICAgICAgY2FzZSBcImxlZnRcIjogIFxuICAgICAgICAgICAgICAgIHRoaXMucG9zaXRpb24udG9wID0gdGhpcy5wb3NpdGlvbi50b3AubWFwKGFycmF5ID0+IFthcnJheVswXSwgYXJyYXlbMV0gLSAxXSk7XG4gICAgICAgICAgICAgICAgdGhpcy5wb3NpdGlvbi5taWRkbGUgPSB0aGlzLnBvc2l0aW9uLm1pZGRsZS5tYXAoYXJyYXkgPT4gW2FycmF5WzBdLCBhcnJheVsxXSAtIDFdKTtcbiAgICAgICAgICAgICAgICB0aGlzLnBvc2l0aW9uLmJvdHRvbSA9IHRoaXMucG9zaXRpb24uYm90dG9tLm1hcChhcnJheSA9PiBbYXJyYXlbMF0sIGFycmF5WzFdIC0gMV0pO1xuICAgICAgICAgICAgICAgIHRoaXMudHVybmluZ1BvaW50ID0gW3RoaXMudHVybmluZ1BvaW50WzBdLCB0aGlzLnR1cm5pbmdQb2ludFsxXSAtIDFdO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBcInVwXCI6XG4gICAgICAgICAgICAgICAgLy8gZGVmZXIgdG8gc3ViY2xhc3MgXCJ0dXJuXCIgbWV0aG9kXG4gICAgICAgICAgICAgICAgdGhpcy50dXJuUmlnaHQoKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgXCJyaWdodFwiOlxuICAgICAgICAgICAgICAgIHRoaXMucG9zaXRpb24udG9wID0gdGhpcy5wb3NpdGlvbi50b3AubWFwKGFycmF5ID0+IFthcnJheVswXSwgYXJyYXlbMV0gKyAxXSk7XG4gICAgICAgICAgICAgICAgdGhpcy5wb3NpdGlvbi5taWRkbGUgPSB0aGlzLnBvc2l0aW9uLm1pZGRsZS5tYXAoYXJyYXkgPT4gW2FycmF5WzBdLCBhcnJheVsxXSArIDFdKTtcbiAgICAgICAgICAgICAgICB0aGlzLnBvc2l0aW9uLmJvdHRvbSA9IHRoaXMucG9zaXRpb24uYm90dG9tLm1hcChhcnJheSA9PiBbYXJyYXlbMF0sIGFycmF5WzFdICsgMV0pO1xuICAgICAgICAgICAgICAgIHRoaXMudHVybmluZ1BvaW50ID0gW3RoaXMudHVybmluZ1BvaW50WzBdLCB0aGlzLnR1cm5pbmdQb2ludFsxXSArIDFdO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBcImRvd25cIjpcbiAgICAgICAgICAgICAgICB0aGlzLnBvc2l0aW9uLnRvcCA9IHRoaXMucG9zaXRpb24udG9wLm1hcChhcnJheSA9PiBbYXJyYXlbMF0gKyAxLCBhcnJheVsxXV0pO1xuICAgICAgICAgICAgICAgIHRoaXMucG9zaXRpb24ubWlkZGxlID0gdGhpcy5wb3NpdGlvbi5taWRkbGUubWFwKGFycmF5ID0+IFthcnJheVswXSArIDEsIGFycmF5WzFdXSk7XG4gICAgICAgICAgICAgICAgdGhpcy5wb3NpdGlvbi5ib3R0b20gPSB0aGlzLnBvc2l0aW9uLmJvdHRvbS5tYXAoYXJyYXkgPT4gW2FycmF5WzBdICsgMSwgYXJyYXlbMV1dKTtcbiAgICAgICAgICAgICAgICB0aGlzLnR1cm5pbmdQb2ludCA9IFt0aGlzLnR1cm5pbmdQb2ludFswXSArIDEsIHRoaXMudHVybmluZ1BvaW50WzFdXTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnNldFJlbW92ZVNxdWFyZXMob2xkUG9zaXRpb24pO1xuICAgIH1cblxuICAgIHR1cm5SaWdodCgpIHtcbiAgICAgICAgbGV0IHNxdWFyZXMgPSBbXTtcbiAgICAgICAgT2JqZWN0LnZhbHVlcyh0aGlzLnBvc2l0aW9uKS5mb3JFYWNoKGNvb3JkaW5hdGVzQXJyYXkgPT4gY29vcmRpbmF0ZXNBcnJheS5mb3JFYWNoKGFycmF5ID0+IHtcbiAgICAgICAgICAgIHNxdWFyZXMucHVzaChhcnJheSk7XG4gICAgICAgIH0pKTtcblxuICAgICAgICB0aGlzLnBvc2l0aW9uLnRvcCA9IFtdO1xuICAgICAgICB0aGlzLnBvc2l0aW9uLm1pZGRsZSA9IFtdO1xuICAgICAgICB0aGlzLnBvc2l0aW9uLmJvdHRvbSA9IFtdO1xuICAgICAgICBzcXVhcmVzLmZvckVhY2goc3F1YXJlID0+IHtcbiAgICAgICAgICAgIGxldCBjb2x1bW4gPSBzcXVhcmVbMV07XG4gICAgICAgICAgICBsZXQgaGVpZ2h0RGlmZmVyZW5jZSA9IHRoaXMudHVybmluZ1BvaW50WzBdIC0gc3F1YXJlWzBdO1xuICAgICAgICAgICAgbGV0IHdpZHRoRGlmZmVyZW5jZSA9IHRoaXMudHVybmluZ1BvaW50WzFdIC0gc3F1YXJlWzFdO1xuICAgICAgICAgICAgbGV0IG5ld0NvbCA9IHRoaXMudHVybmluZ1BvaW50WzFdICsgaGVpZ2h0RGlmZmVyZW5jZTtcbiAgICAgICAgICAgIGxldCBuZXdSb3cgPSB0aGlzLnR1cm5pbmdQb2ludFswXSArICh3aWR0aERpZmZlcmVuY2UgKiAtMSk7XG4gICAgICAgICAgICBzd2l0Y2ggKGNvbHVtbikge1xuICAgICAgICAgICAgICAgIGNhc2UgY29sdW1uID0gdGhpcy5sZWZ0TW9zdDpcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wb3NpdGlvbi50b3AucHVzaChbbmV3Um93LCBuZXdDb2xdKTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSBjb2x1bW4gPSB0aGlzLnJpZ2h0TW9zdDpcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wb3NpdGlvbi5ib3R0b20ucHVzaChbbmV3Um93LCBuZXdDb2xdKTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wb3NpdGlvbi5taWRkbGUucHVzaChbbmV3Um93LCBuZXdDb2xdKTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgfVxuXG4gICAgLy8gY29tcGFyZSBvbGQgcG9zaXRpb24gb2YgcGllY2Ugd2l0aCBuZXcgcG9zaXRpb24gXG4gICAgc2V0UmVtb3ZlU3F1YXJlcyhvbGRQb3NpdGlvbikge1xuICAgICAgICBsZXQgb2xkU3F1YXJlcyA9IFtdO1xuICAgICAgICBsZXQgbmV3U3F1YXJlcyA9IFtdO1xuICAgICAgICBPYmplY3QudmFsdWVzKG9sZFBvc2l0aW9uKS5mb3JFYWNoKGNvb3JkaW5hdGVzQXJyYXkgPT4gY29vcmRpbmF0ZXNBcnJheS5mb3JFYWNoKGFycmF5ID0+IG9sZFNxdWFyZXMucHVzaChhcnJheSkpKTtcbiAgICAgICAgT2JqZWN0LnZhbHVlcyh0aGlzLnBvc2l0aW9uKS5mb3JFYWNoKGNvb3JkaW5hdGVzQXJyYXkgPT4gY29vcmRpbmF0ZXNBcnJheS5mb3JFYWNoKGFycmF5ID0+IG5ld1NxdWFyZXMucHVzaChhcnJheSkpKTtcbiAgICAgICAgLy8ga2VlcCB0cmFjayBvZiBzcXVhcmVzIHRoYXQgdGhlIHBvc2l0aW9ucyBkbyBub3QgaGF2ZSBpbiBjb21tb24gKHNxdWFyZXMgdG8gcmVtb3ZlIGNvbG9yIGZyb20pXG4gICAgICAgIHRoaXMucmVtb3ZlU3F1YXJlcyA9IG9sZFNxdWFyZXMuZmlsdGVyKG9sZFNxdWFyZSA9PiB7XG4gICAgICAgICAgICBpZiAoIXRoaXMuX2luY2x1ZGVzKG9sZFNxdWFyZSwgbmV3U3F1YXJlcykpIHJldHVybiBvbGRTcXVhcmU7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGhhbmdpbmdTcXVhcmVzKCkge1xuICAgICAgICBsZXQgc3F1YXJlcyA9IFtdO1xuICAgICAgICBsZXQgaGFuZ2luZ1NxdWFyZXMgPSBbXTtcbiAgICAgICAgT2JqZWN0LnZhbHVlcyh0aGlzLnBvc2l0aW9uKS5mb3JFYWNoKGNvb3JkaW5hdGVBcnJheXMgPT4gY29vcmRpbmF0ZUFycmF5cy5mb3JFYWNoKGNvb3JkaW5hdGUgPT4ge1xuICAgICAgICAgICAgc3F1YXJlcy5wdXNoKGNvb3JkaW5hdGUpO1xuICAgICAgICB9KSk7XG4gICAgICAgIHNxdWFyZXMuZm9yRWFjaChzcXVhcmUgPT4ge1xuICAgICAgICAgICAgbGV0IGJlbG93U3F1YXJlID0gW3NxdWFyZVswXSArIDEsIHNxdWFyZVsxXV07XG4gICAgICAgICAgICBpZiAoIXRoaXMuX2luY2x1ZGVzKGJlbG93U3F1YXJlLCBzcXVhcmVzKSkgaGFuZ2luZ1NxdWFyZXMucHVzaChzcXVhcmUpO1xuICAgICAgICB9KVxuICAgICAgICByZXR1cm4gaGFuZ2luZ1NxdWFyZXM7XG4gICAgfSBcblxuICAgIGlzRmFsbGluZyhmaWVsZCkge1xuICAgICAgICBsZXQgcmVzdWx0ID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5oYW5naW5nU3F1YXJlcygpLmZvckVhY2goY29vcmRpbmF0ZVBhaXIgPT4ge1xuICAgICAgICAgICAgbGV0IFtyb3csIGNvbF0gPSBbY29vcmRpbmF0ZVBhaXJbMF0sIGNvb3JkaW5hdGVQYWlyWzFdXTtcbiAgICAgICAgICAgIC8vIGlmIHRoZSBwaWVjZSdzIGN1cnJlbnQgcG9zaXRpb24gaXMgYWJvdmUgdGhlIGZpZWxkIGZsb29yIG9yIGEgYW5vdGhlciBwaWVjZVxuICAgICAgICAgICAgaWYgKCFmaWVsZFtyb3cgKyAxXSB8fCBmaWVsZFtyb3cgKyAxXVtjb2xdKSB7XG4gICAgICAgICAgICAgICAgcmVzdWx0ID0gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cblxuICAgIHJpZ2h0U2lkZU5leHRUb0Jsb2NrKGZpZWxkKSB7XG4gICAgICAgIGxldCByZXN1bHQgPSBmYWxzZTtcbiAgICAgICAgT2JqZWN0LnZhbHVlcyh0aGlzLnBvc2l0aW9uKS5mb3JFYWNoKGNvb3JkaW5hdGVzQXJyYXkgPT4gY29vcmRpbmF0ZXNBcnJheS5mb3JFYWNoKGFycmF5ID0+IHtcbiAgICAgICAgICAgIGxldCBjb2x1bW5WYWx1ZSA9IGFycmF5WzFdO1xuICAgICAgICAgICAgbGV0IHJvd1ZhbHVlID0gYXJyYXlbMF07XG4gICAgICAgICAgICBpZiAoY29sdW1uVmFsdWUgPSB0aGlzLnJpZ2h0TW9zdCkge1xuICAgICAgICAgICAgICAgIGlmIChjb2x1bW5WYWx1ZSA9PT0gOSB8fCBmaWVsZFtyb3dWYWx1ZV1bY29sdW1uVmFsdWUgKyAxXSkgcmVzdWx0ID0gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSkpO1xuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cblxuICAgIGxlZnRTaWRlTmV4dFRvQmxvY2soZmllbGQpIHtcbiAgICAgICAgbGV0IHJlc3VsdCA9IGZhbHNlO1xuICAgICAgICBPYmplY3QudmFsdWVzKHRoaXMucG9zaXRpb24pLmZvckVhY2goY29vcmRpbmF0ZXNBcnJheSA9PiBjb29yZGluYXRlc0FycmF5LmZvckVhY2goYXJyYXkgPT4ge1xuICAgICAgICAgICAgbGV0IGNvbHVtblZhbHVlID0gYXJyYXlbMV07XG4gICAgICAgICAgICBsZXQgcm93VmFsdWUgPSBhcnJheVswXTtcbiAgICAgICAgICAgIGlmIChjb2x1bW5WYWx1ZSA9PT0gdGhpcy5sZWZ0TW9zdCkge1xuICAgICAgICAgICAgICAgIGlmIChjb2x1bW5WYWx1ZSA9PT0gMCB8fCBmaWVsZFtyb3dWYWx1ZV1bY29sdW1uVmFsdWUgLSAxXSkgcmVzdWx0ID0gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSkpO1xuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cbn0iLCJpbXBvcnQgUGllY2UgZnJvbSAnLi9waWVjZSc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNQaWVjZSBleHRlbmRzIFBpZWNlIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgdGhpcy5uYW1lID0gXCJTUGllY2VcIjtcbiAgICAgICAgdGhpcy5wb3NpdGlvbiA9IHtcbiAgICAgICAgICAgIHRvcDogW1swLCA0XSwgWzAsIDVdXSxcbiAgICAgICAgICAgIG1pZGRsZTogW10sXG4gICAgICAgICAgICBib3R0b206IFtbMSwgM10sIFsxLCA0XV1cbiAgICAgICAgfTtcbiAgICAgICAgdGhpcy50dXJuaW5nUG9pbnQgPSBbMSwgNF07XG5cbiAgICAgICAgdGhpcy5yZW1vdmVTcXVhcmVzID0gW107XG4gICAgfVxufSIsImltcG9ydCBQaWVjZSBmcm9tICcuL3BpZWNlJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVFBpZWNlIGV4dGVuZHMgUGllY2Uge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICB0aGlzLm5hbWUgPSBcIlRQaWVjZVwiO1xuICAgICAgICB0aGlzLnBvc2l0aW9uID0ge1xuICAgICAgICAgICAgdG9wOiBbWzAsIDRdXSxcbiAgICAgICAgICAgIG1pZGRsZTogW10sXG4gICAgICAgICAgICBib3R0b206IFtbMSwgM10sIFsxLCA0XSwgWzEsIDVdXSxcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnR1cm5pbmdQb2ludCA9IFsxLCA0XTtcbiAgICAgICAgdGhpcy5yZW1vdmVTcXVhcmVzID0gW107XG4gICAgfVxufSIsImltcG9ydCBQaWVjZSBmcm9tICcuL3BpZWNlJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgWlBpZWNlIGV4dGVuZHMgUGllY2Uge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICB0aGlzLm5hbWUgPSBcIlpQaWVjZVwiO1xuICAgICAgICB0aGlzLnBvc2l0aW9uID0ge1xuICAgICAgICAgICAgdG9wOiBbWzAsIDNdLCBbMCwgNF1dLFxuICAgICAgICAgICAgbWlkZGxlOiBbXSxcbiAgICAgICAgICAgIGJvdHRvbTogW1sxLCA0XSwgWzEsIDVdXVxuICAgICAgICB9O1xuICAgICAgICB0aGlzLnR1cm5pbmdQb2ludCA9IFsxLCA0XTtcblxuICAgICAgICB0aGlzLnJlbW92ZVNxdWFyZXMgPSBbXTtcbiAgICB9XG59Il0sInNvdXJjZVJvb3QiOiIifQ==