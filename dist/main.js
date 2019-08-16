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
      7: "dark-blue"
    };
    this.currentPiece = '';
    this.holdPiece = '';
    this.currentBag = this._shuffleBag(this._generateBag());
    this.nextBag = this._shuffleBag(this._generateBag()); // prevents player from holding piece multiple times

    this.canHold = true;
    this.clearHandle;
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
    } // hold piece for later use 

  }, {
    key: "hold",
    value: function hold() {
      if (!this.canHold) return;
      this.currentPiece.clearFromBoard(this.field);
      this.render();

      if (this.holdPiece === '') {
        // pass current piece name into generate piece in order to generate a new piece instance
        this.holdPiece = this._generatePiece(this.currentPiece.name);

        this._setCurrentPiece(); // re-render next boxes to appropriately show current bag


        this._showCurrentBag();
      } else {
        this.currentPiece = this._generatePiece(this.currentPiece.name);
        var _ref = [this.holdPiece, this.currentPiece];
        this.currentPiece = _ref[0];
        this.holdPiece = _ref[1];
      }

      this.canHold = false;

      this._populateHoldBox();
    }
  }, {
    key: "_populateHoldBox",
    value: function _populateHoldBox() {
      var _this = this;

      var columns = document.querySelector(".hold-box").children; // remove colors from previous pieces

      for (var i = 0; i < 5; i++) {
        for (var j = 0; j < 4; j++) {
          // columns.children is nodelist of <lis>
          columns[i].children[j].className = "";
        }
      }

      this.holdPiece.displaySquares.forEach(function (square) {
        var _ref2 = [square[0], square[1]],
            col = _ref2[0],
            row = _ref2[1];
        columns[col].children[row].classList.add(_this.colors[_this.holdPiece.colorCode]);
      });
    } // used for this.hold(): generate a new piece so that a holdpiece that is re-rendered on the board will not start from the old position

  }, {
    key: "_generatePiece",
    value: function _generatePiece(pieceName) {
      switch (pieceName) {
        case "TPiece":
          return new _pieces_tPiece__WEBPACK_IMPORTED_MODULE_3__["default"]();
          break;

        case "OPiece":
          return new _pieces_oPiece__WEBPACK_IMPORTED_MODULE_1__["default"]();
          break;

        case "IPiece":
          return new _pieces_iPiece__WEBPACK_IMPORTED_MODULE_2__["default"]();
          break;

        case "LPiece":
          return new _pieces_lPiece__WEBPACK_IMPORTED_MODULE_6__["default"]();
          break;

        case "JPiece":
          return new _pieces_jPiece__WEBPACK_IMPORTED_MODULE_7__["default"]();
          break;

        case "SPiece":
          return new _pieces_sPiece__WEBPACK_IMPORTED_MODULE_4__["default"]();
          break;

        case "ZPiece":
          return new _pieces_zPiece__WEBPACK_IMPORTED_MODULE_5__["default"]();
          break;
      }
    } // take one piece from nextBag and add to currentBag

  }, {
    key: "_addToCurrentBag",
    value: function _addToCurrentBag() {
      this.currentBag.push(this.nextBag.shift());
    }
  }, {
    key: "_showCurrentBag",
    value: function _showCurrentBag() {
      var boxes = document.getElementsByClassName("next-box");

      for (var i = 0; i < 5; i++) {
        this._populateNextBox(boxes[i], this.currentBag[i]);
      }
    }
  }, {
    key: "_populateNextBox",
    value: function _populateNextBox(box, piece) {
      var _this2 = this;

      // columns is nodelist of <uls>
      var columns = box.children; // remove colors from previous pieces

      for (var i = 0; i < 5; i++) {
        for (var j = 0; j < 4; j++) {
          // columns.children is nodelist of <lis>
          columns[i].children[j].className = "";
        }
      }

      piece.displaySquares.forEach(function (square) {
        var _ref3 = [square[0], square[1]],
            col = _ref3[0],
            row = _ref3[1];
        columns[col].children[row].classList.add(_this2.colors[piece.colorCode]);
      });
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
      var _this3 = this;

      var fieldColumns = document.querySelectorAll(".field-column");
      this.field.forEach(function (row, rowIdx) {
        row.forEach(function (col, colIdx) {
          var squareValue = _this3.field[rowIdx][colIdx];

          if (squareValue) {
            fieldColumns[colIdx].children[rowIdx].classList.add(_this3.colors[squareValue]);
          } else {
            Object.values(_this3.colors).forEach(function (color) {
              fieldColumns[colIdx].children[rowIdx].classList.remove(color);
            });
          }
        });
      });
    }
  }, {
    key: "keyListener",
    value: function keyListener() {
      var _this4 = this;

      document.body.addEventListener("keydown", function (event) {
        console.log(event);

        _this4.currentPiece.setLeftMostAndRightMost();

        switch (event.which) {
          // up key
          case 38:
            _this4.currentPiece.move("up");

            break;
          // right key

          case 39:
            if (_this4.currentPiece.rightSideNextToBlock(_this4.field)) break;

            _this4.currentPiece.move("right");

            break;
          // down key

          case 40:
            if (!_this4.currentPiece.isFalling(_this4.field)) break;

            _this4.currentPiece.move("down");

            break;
          // left key

          case 37:
            if (_this4.currentPiece.leftSideNextToBlock(_this4.field)) break;

            _this4.currentPiece.move("left");

            break;
          // shift key

          case 16:
            console.log(_this4);

            _this4.hold();

            break;
          // space bar

          case 32:
            _this4.currentPiece.hardDrop(_this4.field);

            _this4.currentPiece._populateField(_this4.field);

            _this4.handlePieceStop(_this4.clearHandle);

            break;
        }

        console.log(_this4.currentPiece);

        _this4.currentPiece.setLeftMostAndRightMost();

        _this4.currentPiece._populateField(_this4.field);

        _this4.render();
      });
    }
  }, {
    key: "clearLines",
    value: function clearLines(lowest, highest) {
      // base case: if we reach a row that is higher than the highest, then exit
      if (lowest < highest) return; // recursive case: 
      // if lowest row does not contain a 0, bring all above rows down one level

      debugger;

      if (!this.field[lowest].includes(0)) {
        this._bringDownField(lowest); // call recursiveClear(lowest, highest + 1);


        this.clearLines(lowest, highest + 1); // if row contains a 0 
        // call ClearLines(lowest - 1, highest)
      } else if (this.field[lowest].includes(0)) {
        this.clearLines(lowest - 1, highest);
      }
    }
  }, {
    key: "_bringDownField",
    value: function _bringDownField(startingRow) {
      debugger;

      for (var i = startingRow; i > 0; i--) {
        this.field[i] = this.field[i - 1];
      }

      this.field[0] = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
      debugger;
    }
  }, {
    key: "handlePieceStop",
    value: function handlePieceStop(clear) {
      // allow player to hold piece again
      this.canHold = true;
      var lowest = this.currentPiece.position.bottom[0][0]; // in case of line piece, which may not have this.position.top

      var highest = !this.currentPiece.position.top.length ? lowest : this.currentPiece.position.top[0][0];
      debugger;
      this.clearLines(lowest, highest);
      clearInterval(clear);
      this.play();
    }
  }, {
    key: "play",
    value: function play() {
      var _this5 = this;

      this._setCurrentPiece();

      this._addToCurrentBag();

      this._showCurrentBag();

      if (!this.nextBag.length) this._refillNextBag();
      var clear = setInterval(function () {
        console.log(_this5.currentPiece.position);
        _this5.clearHandle = clear;

        _this5.currentPiece._populateField(_this5.field);

        _this5.render();

        if (!_this5.currentPiece.isFalling(_this5.field)) _this5.handlePieceStop(clear);

        _this5.currentPiece.drop();

        _this5.currentPiece._populateField(_this5.field); // keep only one populate field?


        _this5.render();
      }, 200);
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
    _this.colorCode = 2;
    _this.turningPoint = [0, 4];
    _this.displaySquares = [[0, 2], [1, 2], [2, 2], [3, 2]];
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
    _this.colorCode = 7;
    _this.turningPoint = [1, 4];
    _this.displaySquares = [[1, 1], [1, 2], [2, 2], [3, 2]];
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
    _this.colorCode = 6;
    _this.turningPoint = [1, 4];
    _this.displaySquares = [[1, 2], [2, 2], [3, 2], [3, 1]];
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
    _this.colorCode = 1;
    _this.turningPoint = [1, 4];
    _this.displaySquares = [[1, 1], [2, 1], [1, 2], [2, 2]];
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
          field[row][col] = _this.colorCode;
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
    }
  }, {
    key: "hardDrop",
    value: function hardDrop(field) {
      this.clearFromBoard(field);
      var stopped = false;

      while (!stopped) {
        var hangingSquares = this.hangingSquares();
        hangingSquares.forEach(function (coordinate) {
          var _ref3 = [coordinate[0], coordinate[1]],
              row = _ref3[0],
              col = _ref3[1];
          if (row + 1 === 20 || field[row + 1][col]) stopped = true;
        });

        if (stopped) {
          debugger;
          break;
        }

        this.position.top = this.position.top.map(function (array) {
          return [array[0] + 1, array[1]];
        });
        this.position.middle = this.position.middle.map(function (array) {
          return [array[0] + 1, array[1]];
        });
        this.position.bottom = this.position.bottom.map(function (array) {
          return [array[0] + 1, array[1]];
        });
      }
    }
  }, {
    key: "clearFromBoard",
    value: function clearFromBoard(field) {
      Object.values(this.position).forEach(function (coordinateArrays) {
        return coordinateArrays.forEach(function (coordinate) {
          var row = coordinate[0];
          var col = coordinate[1];
          field[row][col] = 0;
        });
      });
      debugger;
    }
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
        var _ref4 = [coordinatePair[0], coordinatePair[1]],
            row = _ref4[0],
            col = _ref4[1]; // if the piece's current position is above the field floor or a another piece

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
    _this.colorCode = 4;
    _this.turningPoint = [1, 4];
    _this.displaySquares = [[3, 1], [2, 1], [2, 2], [1, 2]];
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
    _this.colorCode = 3;
    _this.turningPoint = [1, 4];
    _this.displaySquares = [[1, 2], [2, 2], [3, 2], [2, 1]];
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
    _this.colorCode = 5;
    _this.turningPoint = [1, 4];
    _this.displaySquares = [[1, 1], [2, 1], [2, 2], [3, 2]];
    _this.removeSquares = [];
    return _this;
  }

  return ZPiece;
}(_piece__WEBPACK_IMPORTED_MODULE_0__["default"]);



/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2ZpZWxkL2ZpZWxkLmpzIiwid2VicGFjazovLy8uL3NyYy9maWVsZC9ob2xkYm94LmpzIiwid2VicGFjazovLy8uL3NyYy9maWVsZC9uZXh0Qm94LmpzIiwid2VicGFjazovLy8uL3NyYy9nYW1lL2dhbWUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9waWVjZXMvaVBpZWNlLmpzIiwid2VicGFjazovLy8uL3NyYy9waWVjZXMvalBpZWNlLmpzIiwid2VicGFjazovLy8uL3NyYy9waWVjZXMvbFBpZWNlLmpzIiwid2VicGFjazovLy8uL3NyYy9waWVjZXMvb1BpZWNlLmpzIiwid2VicGFjazovLy8uL3NyYy9waWVjZXMvcGllY2UuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3BpZWNlcy9zUGllY2UuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3BpZWNlcy90UGllY2UuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3BpZWNlcy96UGllY2UuanMiXSwibmFtZXMiOlsiRmllbGQiLCJmaWVsZCIsImkiLCJyb3ciLCJwdXNoIiwiY29sdW1uIiwiZG9jdW1lbnQiLCJjcmVhdGVFbGVtZW50IiwiY2xhc3NMaXN0IiwiYWRkIiwiYXBwZW5kIiwiYXBwZW5kQ2hpbGQiLCJfY3JlYXRlQ29sdW1uIiwiY29udGFpbmVyIiwibmV4dEJveCIsIk5leHRCb3giLCJob2xkQm94IiwiSG9sZEJveCIsIl9jcmVhdGVGaWVsZCIsImNyZWF0ZU5leHRCb3hlcyIsInByZXBlbmQiLCJjcmVhdGVCb3giLCJib3giLCJfY3JlYXRlQm94Q29sdW1uIiwiX2NyZWF0ZU5leHRCb3hDb2x1bW4iLCJib3hlcyIsIl9jcmVhdGVOZXh0Qm94IiwiR2FtZSIsIl9zZXRGaWVsZCIsImNvbG9ycyIsImN1cnJlbnRQaWVjZSIsImhvbGRQaWVjZSIsImN1cnJlbnRCYWciLCJfc2h1ZmZsZUJhZyIsIl9nZW5lcmF0ZUJhZyIsIm5leHRCYWciLCJjYW5Ib2xkIiwiY2xlYXJIYW5kbGUiLCJvUGllY2UiLCJPUGllY2UiLCJpUGllY2UiLCJJUGllY2UiLCJ0UGllY2UiLCJUUGllY2UiLCJzUGllY2UiLCJTUGllY2UiLCJ6UGllY2UiLCJaUGllY2UiLCJsUGllY2UiLCJMUGllY2UiLCJqUGllY2UiLCJKUGllY2UiLCJzaGlmdCIsImNsZWFyRnJvbUJvYXJkIiwicmVuZGVyIiwiX2dlbmVyYXRlUGllY2UiLCJuYW1lIiwiX3NldEN1cnJlbnRQaWVjZSIsIl9zaG93Q3VycmVudEJhZyIsIl9wb3B1bGF0ZUhvbGRCb3giLCJjb2x1bW5zIiwicXVlcnlTZWxlY3RvciIsImNoaWxkcmVuIiwiaiIsImNsYXNzTmFtZSIsImRpc3BsYXlTcXVhcmVzIiwiZm9yRWFjaCIsInNxdWFyZSIsImNvbCIsImNvbG9yQ29kZSIsInBpZWNlTmFtZSIsImdldEVsZW1lbnRzQnlDbGFzc05hbWUiLCJfcG9wdWxhdGVOZXh0Qm94IiwicGllY2UiLCJiYWciLCJjdXJyZW50SW5kZXgiLCJsZW5ndGgiLCJ0ZW1wb3JhcnlWYWx1ZSIsInJhbmRvbUluZGV4IiwiTWF0aCIsImZsb29yIiwicmFuZG9tIiwiX2dlbmVyYXRlRmllbGQiLCJmaWVsZENvbHVtbnMiLCJxdWVyeVNlbGVjdG9yQWxsIiwicm93SWR4IiwiY29sSWR4Iiwic3F1YXJlVmFsdWUiLCJPYmplY3QiLCJ2YWx1ZXMiLCJjb2xvciIsInJlbW92ZSIsImJvZHkiLCJhZGRFdmVudExpc3RlbmVyIiwiZXZlbnQiLCJjb25zb2xlIiwibG9nIiwic2V0TGVmdE1vc3RBbmRSaWdodE1vc3QiLCJ3aGljaCIsIm1vdmUiLCJyaWdodFNpZGVOZXh0VG9CbG9jayIsImlzRmFsbGluZyIsImxlZnRTaWRlTmV4dFRvQmxvY2siLCJob2xkIiwiaGFyZERyb3AiLCJfcG9wdWxhdGVGaWVsZCIsImhhbmRsZVBpZWNlU3RvcCIsImxvd2VzdCIsImhpZ2hlc3QiLCJpbmNsdWRlcyIsIl9icmluZ0Rvd25GaWVsZCIsImNsZWFyTGluZXMiLCJzdGFydGluZ1JvdyIsImNsZWFyIiwicG9zaXRpb24iLCJib3R0b20iLCJ0b3AiLCJjbGVhckludGVydmFsIiwicGxheSIsIl9hZGRUb0N1cnJlbnRCYWciLCJfcmVmaWxsTmV4dEJhZyIsInNldEludGVydmFsIiwiZHJvcCIsImZpZWxkQ29udGFpbmVyIiwiZ2V0RWxlbWVudEJ5SWQiLCJjcmVhdGVGaWVsZFdpdGhIb2xkQm94QW5kTmV4dEJveGVzIiwiZ2FtZSIsImtleUxpc3RlbmVyIiwibWlkZGxlIiwidHVybmluZ1BvaW50IiwicmVtb3ZlU3F1YXJlcyIsIlBpZWNlIiwibGVmdE1vc3QiLCJyaWdodE1vc3QiLCJjb29yZGluYXRlc0FycmF5IiwiYXJyYXkiLCJjb2x1bW5WYWx1ZSIsImNvb3JkaW5hdGVBcnJheXMiLCJjb29yZGluYXRlIiwicG9zaXRpb25BcnJheSIsIm9sZFNxdWFyZSIsIm5ld1NxdWFyZSIsInJlc3VsdCIsIl9zcXVhcmVzQXJlRXF1YWwiLCJvbGRQb3NpdGlvbiIsIm1hcCIsInNsaWNlIiwic2V0UmVtb3ZlU3F1YXJlcyIsInN0b3BwZWQiLCJoYW5naW5nU3F1YXJlcyIsImRpcmVjdGlvbiIsInR1cm5SaWdodCIsInNxdWFyZXMiLCJoZWlnaHREaWZmZXJlbmNlIiwid2lkdGhEaWZmZXJlbmNlIiwibmV3Q29sIiwibmV3Um93Iiwib2xkU3F1YXJlcyIsIm5ld1NxdWFyZXMiLCJmaWx0ZXIiLCJfaW5jbHVkZXMiLCJiZWxvd1NxdWFyZSIsImNvb3JkaW5hdGVQYWlyIiwicm93VmFsdWUiXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFD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QUosQ0FBVCxDQURPO0FBRVpZLFlBQU0sRUFBRSxFQUZJO0FBR1piLFlBQU0sRUFBRSxDQUFDLENBQUMsQ0FBRCxFQUFJLENBQUosQ0FBRCxFQUFTLENBQUMsQ0FBRCxFQUFJLENBQUosQ0FBVDtBQUhJLEtBQWhCO0FBS0EsVUFBSzlDLFNBQUwsR0FBaUIsQ0FBakI7QUFFQSxVQUFLNEQsWUFBTCxHQUFvQixDQUFDLENBQUQsRUFBSSxDQUFKLENBQXBCO0FBRUEsVUFBS2hFLGNBQUwsR0FBc0IsQ0FBQyxDQUFDLENBQUQsRUFBSSxDQUFKLENBQUQsRUFBUyxDQUFDLENBQUQsRUFBSSxDQUFKLENBQVQsRUFBaUIsQ0FBQyxDQUFELEVBQUksQ0FBSixDQUFqQixFQUF5QixDQUFDLENBQUQsRUFBSSxDQUFKLENBQXpCLENBQXRCO0FBRUEsVUFBS2lFLGFBQUwsR0FBcUIsRUFBckI7QUFkVTtBQWViOzs7RUFoQitCQyw4QyIsImZpbGUiOiJtYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCIvZGlzdC9cIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvaW5kZXguanNcIik7XG4iLCJpbXBvcnQgSG9sZEJveCBmcm9tICcuL2hvbGRib3gnO1xuaW1wb3J0IE5leHRCb3ggZnJvbSAnLi9uZXh0Qm94JztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRmllbGQgeyAgICBcbiAgICBfZ2VuZXJhdGVGaWVsZCgpIHtcbiAgICAgICAgbGV0IGZpZWxkID0gW107XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMjA7IGkrKykge1xuICAgICAgICAgICAgbGV0IHJvdyA9IFswLDAsMCwwLDAsMCwwLDAsMCwwXTtcbiAgICAgICAgICAgIGZpZWxkLnB1c2gocm93KTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZmllbGQ7XG4gICAgfVxuXG4gICAgLy9faXNWYWxpZE1vdmVcblxuICAgIF9jcmVhdGVDb2x1bW4oKSB7XG4gICAgICAgIGxldCBjb2x1bW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidWxcIik7XG4gICAgICAgIGNvbHVtbi5jbGFzc0xpc3QuYWRkKFwiZmllbGQtY29sdW1uXCIpO1xuXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMjA7IGkrKykge1xuICAgICAgICAgICAgY29sdW1uLmFwcGVuZChkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIikpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBjb2x1bW47XG4gICAgfVxuXG4gICAgX2NyZWF0ZUZpZWxkKCkge1xuICAgICAgICBsZXQgZmllbGQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICBmaWVsZC5jbGFzc0xpc3QuYWRkKFwiZmllbGQtYm94XCIpO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IDEwOyBpKyspIHtcbiAgICAgICAgICAgIGZpZWxkLmFwcGVuZENoaWxkKHRoaXMuX2NyZWF0ZUNvbHVtbigpKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZmllbGQ7XG4gICAgfVxuXG4gICAgY3JlYXRlRmllbGRXaXRoSG9sZEJveEFuZE5leHRCb3hlcyhjb250YWluZXIpIHtcbiAgICAgICAgbGV0IG5leHRCb3ggPSBuZXcgTmV4dEJveCgpO1xuICAgICAgICBsZXQgaG9sZEJveCA9IG5ldyBIb2xkQm94KCk7XG4gICAgICAgIGNvbnRhaW5lci5hcHBlbmQodGhpcy5fY3JlYXRlRmllbGQoKSk7XG4gICAgICAgIGNvbnRhaW5lci5hcHBlbmQobmV4dEJveC5jcmVhdGVOZXh0Qm94ZXMoKSk7XG4gICAgICAgIGNvbnRhaW5lci5wcmVwZW5kKGhvbGRCb3guY3JlYXRlQm94KCkpO1xuICAgICAgICByZXR1cm4gY29udGFpbmVyO1xuICAgIH1cblxufSIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIEhvbGRCb3gge1xuICAgIF9jcmVhdGVCb3hDb2x1bW4oKSB7XG4gICAgICAgIGxldCBjb2x1bW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidWxcIik7XG4gICAgICAgIGNvbHVtbi5jbGFzc0xpc3QuYWRkKFwiaG9sZC1jb2x1bW5cIik7XG5cbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCA0OyBpKyspIHtcbiAgICAgICAgICAgIGNvbHVtbi5hcHBlbmQoZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpXCIpKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gY29sdW1uO1xuICAgIH1cblxuICAgIGNyZWF0ZUJveCgpIHtcbiAgICAgICAgbGV0IGJveCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIGJveC5jbGFzc0xpc3QuYWRkKFwiaG9sZC1ib3hcIik7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgNTsgaSsrKSB7XG4gICAgICAgICAgICBib3guYXBwZW5kQ2hpbGQodGhpcy5fY3JlYXRlQm94Q29sdW1uKCkpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBib3g7XG4gICAgfVxufSIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIE5leHRCb3gge1xuICAgIF9jcmVhdGVOZXh0Qm94Q29sdW1uKCkge1xuICAgICAgICBsZXQgY29sdW1uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInVsXCIpO1xuICAgICAgICBjb2x1bW4uY2xhc3NMaXN0LmFkZChcIm5leHQtY29sdW1uXCIpO1xuXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgNDsgaSsrKSB7XG4gICAgICAgICAgICBjb2x1bW4uYXBwZW5kKGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaVwiKSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGNvbHVtbjtcbiAgICB9XG5cbiAgICBfY3JlYXRlTmV4dEJveCgpIHtcbiAgICAgICAgbGV0IGJveCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIGJveC5jbGFzc0xpc3QuYWRkKFwibmV4dC1ib3hcIik7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgNTsgaSsrKSB7XG4gICAgICAgICAgICBib3guYXBwZW5kQ2hpbGQodGhpcy5fY3JlYXRlTmV4dEJveENvbHVtbigpKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gYm94O1xuICAgIH1cblxuICAgIGNyZWF0ZU5leHRCb3hlcygpIHtcbiAgICAgICAgbGV0IGJveGVzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgYm94ZXMuY2xhc3NMaXN0LmFkZChcIm5leHQtYm94ZXNcIik7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgNTsgaSsrKSB7XG4gICAgICAgICAgICBib3hlcy5hcHBlbmRDaGlsZCh0aGlzLl9jcmVhdGVOZXh0Qm94KCkpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBib3hlcztcbiAgICB9XG59IiwiaW1wb3J0IEZpZWxkIGZyb20gJy4uL2ZpZWxkL2ZpZWxkJztcbmltcG9ydCBPUGllY2UgZnJvbSAnLi4vcGllY2VzL29QaWVjZSc7XG5pbXBvcnQgSVBpZWNlIGZyb20gJy4uL3BpZWNlcy9pUGllY2UnO1xuaW1wb3J0IFRQaWVjZSBmcm9tICcuLi9waWVjZXMvdFBpZWNlJztcbmltcG9ydCBTUGllY2UgZnJvbSAnLi4vcGllY2VzL3NQaWVjZSc7XG5pbXBvcnQgWlBpZWNlIGZyb20gJy4uL3BpZWNlcy96UGllY2UnO1xuaW1wb3J0IExQaWVjZSBmcm9tICcuLi9waWVjZXMvbFBpZWNlJztcbmltcG9ydCBKUGllY2UgZnJvbSAnLi4vcGllY2VzL2pQaWVjZSc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEdhbWUge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLmZpZWxkID0gdGhpcy5fc2V0RmllbGQoKVxuXG4gICAgICAgIHRoaXMuY29sb3JzID0ge1xuICAgICAgICAgICAgMTogXCJ5ZWxsb3dcIixcbiAgICAgICAgICAgIDI6IFwiYmx1ZVwiLFxuICAgICAgICAgICAgMzogXCJwdXJwbGVcIixcbiAgICAgICAgICAgIDQ6IFwiZ3JlZW5cIixcbiAgICAgICAgICAgIDU6IFwicmVkXCIsXG4gICAgICAgICAgICA2OiBcIm9yYW5nZVwiLFxuICAgICAgICAgICAgNzogXCJkYXJrLWJsdWVcIlxuICAgICAgICB9XG4gICAgICAgIHRoaXMuY3VycmVudFBpZWNlID0gJyc7XG4gICAgICAgIHRoaXMuaG9sZFBpZWNlID0gJyc7XG4gICAgICAgIHRoaXMuY3VycmVudEJhZyA9IHRoaXMuX3NodWZmbGVCYWcodGhpcy5fZ2VuZXJhdGVCYWcoKSk7XG4gICAgICAgIHRoaXMubmV4dEJhZyA9IHRoaXMuX3NodWZmbGVCYWcodGhpcy5fZ2VuZXJhdGVCYWcoKSk7XG4gICAgICAgIC8vIHByZXZlbnRzIHBsYXllciBmcm9tIGhvbGRpbmcgcGllY2UgbXVsdGlwbGUgdGltZXNcbiAgICAgICAgdGhpcy5jYW5Ib2xkID0gdHJ1ZTtcblxuICAgICAgICB0aGlzLmNsZWFySGFuZGxlO1xuICAgIH1cblxuICAgIF9nZW5lcmF0ZUJhZygpIHtcbiAgICAgICAgbGV0IG9QaWVjZSA9IG5ldyBPUGllY2UoKTtcbiAgICAgICAgbGV0IGlQaWVjZSA9IG5ldyBJUGllY2UoKTtcbiAgICAgICAgbGV0IHRQaWVjZSA9IG5ldyBUUGllY2UoKTtcbiAgICAgICAgbGV0IHNQaWVjZSA9IG5ldyBTUGllY2UoKTtcbiAgICAgICAgbGV0IHpQaWVjZSA9IG5ldyBaUGllY2UoKTtcbiAgICAgICAgbGV0IGxQaWVjZSA9IG5ldyBMUGllY2UoKTtcbiAgICAgICAgbGV0IGpQaWVjZSA9IG5ldyBKUGllY2UoKTtcblxuICAgICAgICByZXR1cm4gW29QaWVjZSwgaVBpZWNlLCB0UGllY2UsIHNQaWVjZSwgelBpZWNlLCBsUGllY2UsIGpQaWVjZV07XG4gICAgfVxuXG4gICAgLy8gdGFrZSBwaWVjZSBmcm9tIGN1cnJlbnRCYWcgYW5kIHNldCBpdCBhcyB0aGUgY3VycmVudCBwaWVjZVxuICAgIF9zZXRDdXJyZW50UGllY2UoKSB7XG4gICAgICAgIHRoaXMuY3VycmVudFBpZWNlID0gdGhpcy5jdXJyZW50QmFnLnNoaWZ0KCk7XG4gICAgfVxuXG4gICAgLy8gaG9sZCBwaWVjZSBmb3IgbGF0ZXIgdXNlIFxuICAgIGhvbGQoKSB7XG4gICAgICAgIGlmICghdGhpcy5jYW5Ib2xkKSByZXR1cm47XG5cbiAgICAgICAgdGhpcy5jdXJyZW50UGllY2UuY2xlYXJGcm9tQm9hcmQodGhpcy5maWVsZCk7IFxuXG4gICAgICAgIHRoaXMucmVuZGVyKCk7XG5cbiAgICAgICAgaWYgKHRoaXMuaG9sZFBpZWNlID09PSAnJykge1xuICAgICAgICAgICAgLy8gcGFzcyBjdXJyZW50IHBpZWNlIG5hbWUgaW50byBnZW5lcmF0ZSBwaWVjZSBpbiBvcmRlciB0byBnZW5lcmF0ZSBhIG5ldyBwaWVjZSBpbnN0YW5jZVxuICAgICAgICAgICAgdGhpcy5ob2xkUGllY2UgPSB0aGlzLl9nZW5lcmF0ZVBpZWNlKHRoaXMuY3VycmVudFBpZWNlLm5hbWUpO1xuICAgICAgICAgICAgdGhpcy5fc2V0Q3VycmVudFBpZWNlKCk7XG4gICAgICAgICAgICAvLyByZS1yZW5kZXIgbmV4dCBib3hlcyB0byBhcHByb3ByaWF0ZWx5IHNob3cgY3VycmVudCBiYWdcbiAgICAgICAgICAgIHRoaXMuX3Nob3dDdXJyZW50QmFnKCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmN1cnJlbnRQaWVjZSA9IHRoaXMuX2dlbmVyYXRlUGllY2UodGhpcy5jdXJyZW50UGllY2UubmFtZSk7XG4gICAgICAgICAgICBbdGhpcy5jdXJyZW50UGllY2UsIHRoaXMuaG9sZFBpZWNlXSA9IFt0aGlzLmhvbGRQaWVjZSwgdGhpcy5jdXJyZW50UGllY2VdO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuY2FuSG9sZCA9IGZhbHNlO1xuXG4gICAgICAgIHRoaXMuX3BvcHVsYXRlSG9sZEJveCgpO1xuICAgIH1cblxuICAgIF9wb3B1bGF0ZUhvbGRCb3goKSB7XG4gICAgICAgIGxldCBjb2x1bW5zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5ob2xkLWJveFwiKS5jaGlsZHJlbjtcblxuICAgICAgICAvLyByZW1vdmUgY29sb3JzIGZyb20gcHJldmlvdXMgcGllY2VzXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgNTsgaSsrKSB7XG4gICAgICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IDQ7IGorKykge1xuICAgICAgICAgICAgICAgIC8vIGNvbHVtbnMuY2hpbGRyZW4gaXMgbm9kZWxpc3Qgb2YgPGxpcz5cbiAgICAgICAgICAgICAgICBjb2x1bW5zW2ldLmNoaWxkcmVuW2pdLmNsYXNzTmFtZSA9IFwiXCI7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmhvbGRQaWVjZS5kaXNwbGF5U3F1YXJlcy5mb3JFYWNoKHNxdWFyZSA9PiB7XG4gICAgICAgICAgICBsZXQgW2NvbCwgcm93XSA9IFtzcXVhcmVbMF0sIHNxdWFyZVsxXV07XG4gICAgICAgICAgICBjb2x1bW5zW2NvbF0uY2hpbGRyZW5bcm93XS5jbGFzc0xpc3QuYWRkKHRoaXMuY29sb3JzW3RoaXMuaG9sZFBpZWNlLmNvbG9yQ29kZV0pO1xuICAgICAgICB9KVxuXG4gICAgfVxuXG4gICAgLy8gdXNlZCBmb3IgdGhpcy5ob2xkKCk6IGdlbmVyYXRlIGEgbmV3IHBpZWNlIHNvIHRoYXQgYSBob2xkcGllY2UgdGhhdCBpcyByZS1yZW5kZXJlZCBvbiB0aGUgYm9hcmQgd2lsbCBub3Qgc3RhcnQgZnJvbSB0aGUgb2xkIHBvc2l0aW9uXG4gICAgX2dlbmVyYXRlUGllY2UocGllY2VOYW1lKSB7XG4gICAgICAgIHN3aXRjaChwaWVjZU5hbWUpIHtcbiAgICAgICAgICAgIGNhc2UgXCJUUGllY2VcIjpcbiAgICAgICAgICAgICAgICByZXR1cm4gbmV3IFRQaWVjZTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgXCJPUGllY2VcIjpcbiAgICAgICAgICAgICAgICByZXR1cm4gbmV3IE9QaWVjZTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgXCJJUGllY2VcIjpcbiAgICAgICAgICAgICAgICByZXR1cm4gbmV3IElQaWVjZTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgXCJMUGllY2VcIjpcbiAgICAgICAgICAgICAgICByZXR1cm4gbmV3IExQaWVjZTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgXCJKUGllY2VcIjpcbiAgICAgICAgICAgICAgICByZXR1cm4gbmV3IEpQaWVjZTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgXCJTUGllY2VcIjpcbiAgICAgICAgICAgICAgICByZXR1cm4gbmV3IFNQaWVjZTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgXCJaUGllY2VcIjpcbiAgICAgICAgICAgICAgICByZXR1cm4gbmV3IFpQaWVjZTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8vIHRha2Ugb25lIHBpZWNlIGZyb20gbmV4dEJhZyBhbmQgYWRkIHRvIGN1cnJlbnRCYWdcbiAgICBfYWRkVG9DdXJyZW50QmFnKCkge1xuICAgICAgICB0aGlzLmN1cnJlbnRCYWcucHVzaCh0aGlzLm5leHRCYWcuc2hpZnQoKSk7XG4gICAgfVxuXG4gICAgX3Nob3dDdXJyZW50QmFnKCkge1xuICAgICAgICBsZXQgYm94ZXMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwibmV4dC1ib3hcIik7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgNTsgaSsrKSB7XG4gICAgICAgICAgICB0aGlzLl9wb3B1bGF0ZU5leHRCb3goYm94ZXNbaV0sIHRoaXMuY3VycmVudEJhZ1tpXSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBfcG9wdWxhdGVOZXh0Qm94KGJveCwgcGllY2UpIHtcbiAgICAgICAgLy8gY29sdW1ucyBpcyBub2RlbGlzdCBvZiA8dWxzPlxuICAgICAgICBsZXQgY29sdW1ucyA9IGJveC5jaGlsZHJlbjtcblxuICAgICAgICAvLyByZW1vdmUgY29sb3JzIGZyb20gcHJldmlvdXMgcGllY2VzXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgNTsgaSsrKSB7XG4gICAgICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IDQ7IGorKykge1xuICAgICAgICAgICAgICAgIC8vIGNvbHVtbnMuY2hpbGRyZW4gaXMgbm9kZWxpc3Qgb2YgPGxpcz5cbiAgICAgICAgICAgICAgICBjb2x1bW5zW2ldLmNoaWxkcmVuW2pdLmNsYXNzTmFtZSA9IFwiXCI7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBwaWVjZS5kaXNwbGF5U3F1YXJlcy5mb3JFYWNoKHNxdWFyZSA9PiB7XG4gICAgICAgICAgICBsZXQgW2NvbCwgcm93XSA9IFtzcXVhcmVbMF0sIHNxdWFyZVsxXV07XG4gICAgICAgICAgICBjb2x1bW5zW2NvbF0uY2hpbGRyZW5bcm93XS5jbGFzc0xpc3QuYWRkKHRoaXMuY29sb3JzW3BpZWNlLmNvbG9yQ29kZV0pO1xuICAgICAgICB9KVxuICAgIH1cblxuICAgIC8vIHJlZmlsbCBuZXh0IGJhZywgd2lsbCBvbmx5IGJlIGNhbGxlZCBvbmNlIG5leHRCYWcgYmVjb21lcyBlbXB0eVxuICAgIF9yZWZpbGxOZXh0QmFnKCkge1xuICAgICAgICB0aGlzLm5leHRCYWcgPSB0aGlzLl9nZW5lcmF0ZUJhZygpO1xuICAgIH1cblxuICAgIC8vIGltcGxlbWVudGF0aW9uIG9mIHNodWZmbGUgZm91bmQgb24gaHR0cHM6Ly9zdGFja292ZXJmbG93LmNvbS9xdWVzdGlvbnMvMjQ1MDk1NC9ob3ctdG8tcmFuZG9taXplLXNodWZmbGUtYS1qYXZhc2NyaXB0LWFycmF5IzI0NTA5NzZcbiAgICBfc2h1ZmZsZUJhZyhiYWcpIHtcbiAgICAgICAgdmFyIGN1cnJlbnRJbmRleCA9IGJhZy5sZW5ndGgsIHRlbXBvcmFyeVZhbHVlLCByYW5kb21JbmRleDtcblxuICAgICAgICAvLyBXaGlsZSB0aGVyZSByZW1haW4gZWxlbWVudHMgdG8gc2h1ZmZsZS4uLlxuICAgICAgICB3aGlsZSAoMCAhPT0gY3VycmVudEluZGV4KSB7XG5cbiAgICAgICAgICAgIC8vIFBpY2sgYSByZW1haW5pbmcgZWxlbWVudC4uLlxuICAgICAgICAgICAgcmFuZG9tSW5kZXggPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBjdXJyZW50SW5kZXgpO1xuICAgICAgICAgICAgY3VycmVudEluZGV4IC09IDE7XG5cbiAgICAgICAgICAgIC8vIEFuZCBzd2FwIGl0IHdpdGggdGhlIGN1cnJlbnQgZWxlbWVudC5cbiAgICAgICAgICAgIHRlbXBvcmFyeVZhbHVlID0gYmFnW2N1cnJlbnRJbmRleF07XG4gICAgICAgICAgICBiYWdbY3VycmVudEluZGV4XSA9IGJhZ1tyYW5kb21JbmRleF07XG4gICAgICAgICAgICBiYWdbcmFuZG9tSW5kZXhdID0gdGVtcG9yYXJ5VmFsdWU7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGJhZztcbiAgICB9XG4gICAgLy8gaW1wbGVtZW50YXRpb24gb2Ygc2h1ZmZsZSBmb3VuZCBvbiBodHRwczovL3N0YWNrb3ZlcmZsb3cuY29tL3F1ZXN0aW9ucy8yNDUwOTU0L2hvdy10by1yYW5kb21pemUtc2h1ZmZsZS1hLWphdmFzY3JpcHQtYXJyYXkjMjQ1MDk3NlxuXG4gICAgX3NldEZpZWxkKCkge1xuICAgICAgICBsZXQgZmllbGQgPSBuZXcgRmllbGQoKTtcbiAgICAgICAgcmV0dXJuIGZpZWxkLl9nZW5lcmF0ZUZpZWxkKCk7XG4gICAgfVxuXG4gICAgX2dhbWVPdmVyKCkge1xuICAgICAgICAvLyBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuZmllbGRbMF0ubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgLy8gICAgIGlmICh0aGlzLmZpZWxkWzBdW2ldKSByZXR1cm4gdHJ1ZTtcbiAgICAgICAgLy8gfVxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgLy8gbG9vayB0aHJvdWdoIGZpZWxkLCBpZiBmaWVsZFtyb3ddW2NvbF0gY29udGFpbnMgYSBudW1iZXIgPiAwLCBmaWxsIHRoYXQgc3BvdCB3aXRoIHRoZSByZXNwZWN0aXZlIGNvbG9yLiBFbHNlLCByZW1vdmUgY29sb3JcbiAgICByZW5kZXIoKSB7XG4gICAgICAgIGxldCBmaWVsZENvbHVtbnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmZpZWxkLWNvbHVtblwiKTtcbiAgICAgICAgdGhpcy5maWVsZC5mb3JFYWNoKChyb3csIHJvd0lkeCkgPT4ge1xuICAgICAgICAgICAgcm93LmZvckVhY2goKGNvbCwgY29sSWR4KSA9PiB7XG4gICAgICAgICAgICAgICAgbGV0IHNxdWFyZVZhbHVlID0gdGhpcy5maWVsZFtyb3dJZHhdW2NvbElkeF07XG4gICAgICAgICAgICAgICAgaWYgKHNxdWFyZVZhbHVlKSB7XG4gICAgICAgICAgICAgICAgICAgIGZpZWxkQ29sdW1uc1tjb2xJZHhdLmNoaWxkcmVuW3Jvd0lkeF0uY2xhc3NMaXN0LmFkZCh0aGlzLmNvbG9yc1tzcXVhcmVWYWx1ZV0pO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIE9iamVjdC52YWx1ZXModGhpcy5jb2xvcnMpLmZvckVhY2goY29sb3IgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgZmllbGRDb2x1bW5zW2NvbElkeF0uY2hpbGRyZW5bcm93SWR4XS5jbGFzc0xpc3QucmVtb3ZlKGNvbG9yKTtcbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAga2V5TGlzdGVuZXIoKSB7XG4gICAgICAgIGRvY3VtZW50LmJvZHkuYWRkRXZlbnRMaXN0ZW5lcihcImtleWRvd25cIiwgZXZlbnQgPT4ge1xuICAgICAgICAgICAgY29uc29sZS5sb2coZXZlbnQpO1xuICAgICAgICAgICAgdGhpcy5jdXJyZW50UGllY2Uuc2V0TGVmdE1vc3RBbmRSaWdodE1vc3QoKTtcbiAgICAgICAgICAgIHN3aXRjaChldmVudC53aGljaCkge1xuICAgICAgICAgICAgICAgIC8vIHVwIGtleVxuICAgICAgICAgICAgICAgIGNhc2UgMzg6XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY3VycmVudFBpZWNlLm1vdmUoXCJ1cFwiKTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgLy8gcmlnaHQga2V5XG4gICAgICAgICAgICAgICAgY2FzZSAzOTpcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuY3VycmVudFBpZWNlLnJpZ2h0U2lkZU5leHRUb0Jsb2NrKHRoaXMuZmllbGQpKSBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jdXJyZW50UGllY2UubW92ZShcInJpZ2h0XCIpO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAvLyBkb3duIGtleVxuICAgICAgICAgICAgICAgIGNhc2UgNDA6XG4gICAgICAgICAgICAgICAgICAgIGlmICghdGhpcy5jdXJyZW50UGllY2UuaXNGYWxsaW5nKHRoaXMuZmllbGQpKSBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jdXJyZW50UGllY2UubW92ZShcImRvd25cIik7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIC8vIGxlZnQga2V5XG4gICAgICAgICAgICAgICAgY2FzZSAzNzpcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuY3VycmVudFBpZWNlLmxlZnRTaWRlTmV4dFRvQmxvY2sodGhpcy5maWVsZCkpIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmN1cnJlbnRQaWVjZS5tb3ZlKFwibGVmdFwiKTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgLy8gc2hpZnQga2V5XG4gICAgICAgICAgICAgICAgY2FzZSAxNjogXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHRoaXMpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmhvbGQoKTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgLy8gc3BhY2UgYmFyXG4gICAgICAgICAgICAgICAgY2FzZSAzMjpcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jdXJyZW50UGllY2UuaGFyZERyb3AodGhpcy5maWVsZCk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY3VycmVudFBpZWNlLl9wb3B1bGF0ZUZpZWxkKHRoaXMuZmllbGQpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmhhbmRsZVBpZWNlU3RvcCh0aGlzLmNsZWFySGFuZGxlKTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zb2xlLmxvZyh0aGlzLmN1cnJlbnRQaWVjZSk7XG4gICAgICAgICAgICB0aGlzLmN1cnJlbnRQaWVjZS5zZXRMZWZ0TW9zdEFuZFJpZ2h0TW9zdCgpO1xuICAgICAgICAgICAgdGhpcy5jdXJyZW50UGllY2UuX3BvcHVsYXRlRmllbGQodGhpcy5maWVsZCk7XG4gICAgICAgICAgICB0aGlzLnJlbmRlcigpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBjbGVhckxpbmVzKGxvd2VzdCwgaGlnaGVzdCkge1xuICAgICAgICAvLyBiYXNlIGNhc2U6IGlmIHdlIHJlYWNoIGEgcm93IHRoYXQgaXMgaGlnaGVyIHRoYW4gdGhlIGhpZ2hlc3QsIHRoZW4gZXhpdFxuICAgICAgICBpZiAobG93ZXN0IDwgaGlnaGVzdCkgcmV0dXJuO1xuICAgICAgICAvLyByZWN1cnNpdmUgY2FzZTogXG4gICAgICAgIC8vIGlmIGxvd2VzdCByb3cgZG9lcyBub3QgY29udGFpbiBhIDAsIGJyaW5nIGFsbCBhYm92ZSByb3dzIGRvd24gb25lIGxldmVsXG4gICAgICAgIGRlYnVnZ2VyXG4gICAgICAgIGlmICghdGhpcy5maWVsZFtsb3dlc3RdLmluY2x1ZGVzKDApKSB7XG4gICAgICAgICAgICB0aGlzLl9icmluZ0Rvd25GaWVsZChsb3dlc3QpO1xuICAgICAgICAgICAgLy8gY2FsbCByZWN1cnNpdmVDbGVhcihsb3dlc3QsIGhpZ2hlc3QgKyAxKTtcbiAgICAgICAgICAgIHRoaXMuY2xlYXJMaW5lcyhsb3dlc3QsIGhpZ2hlc3QgKyAxKVxuICAgICAgICAvLyBpZiByb3cgY29udGFpbnMgYSAwIFxuICAgICAgICAvLyBjYWxsIENsZWFyTGluZXMobG93ZXN0IC0gMSwgaGlnaGVzdClcbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLmZpZWxkW2xvd2VzdF0uaW5jbHVkZXMoMCkpIHtcbiAgICAgICAgICAgIHRoaXMuY2xlYXJMaW5lcyhsb3dlc3QgLSAxLCBoaWdoZXN0KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIF9icmluZ0Rvd25GaWVsZChzdGFydGluZ1Jvdykge1xuICAgICAgICBkZWJ1Z2dlclxuICAgICAgICBmb3IgKGxldCBpID0gc3RhcnRpbmdSb3c7IGkgPiAwOyBpLS0pIHtcbiAgICAgICAgICAgIHRoaXMuZmllbGRbaV0gPSB0aGlzLmZpZWxkW2kgLSAxXTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmZpZWxkWzBdID0gWzAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDBdO1xuICAgICAgICBkZWJ1Z2dlclxuICAgIH1cblxuICAgIGhhbmRsZVBpZWNlU3RvcChjbGVhcikge1xuICAgICAgICAvLyBhbGxvdyBwbGF5ZXIgdG8gaG9sZCBwaWVjZSBhZ2FpblxuICAgICAgICB0aGlzLmNhbkhvbGQgPSB0cnVlO1xuICAgICAgICBsZXQgbG93ZXN0ID0gdGhpcy5jdXJyZW50UGllY2UucG9zaXRpb24uYm90dG9tWzBdWzBdO1xuICAgICAgICAvLyBpbiBjYXNlIG9mIGxpbmUgcGllY2UsIHdoaWNoIG1heSBub3QgaGF2ZSB0aGlzLnBvc2l0aW9uLnRvcFxuICAgICAgICBsZXQgaGlnaGVzdCA9ICF0aGlzLmN1cnJlbnRQaWVjZS5wb3NpdGlvbi50b3AubGVuZ3RoID8gbG93ZXN0IDogdGhpcy5jdXJyZW50UGllY2UucG9zaXRpb24udG9wWzBdWzBdO1xuICAgICAgICBkZWJ1Z2dlclxuICAgICAgICB0aGlzLmNsZWFyTGluZXMobG93ZXN0LCBoaWdoZXN0KTtcbiAgICAgICAgY2xlYXJJbnRlcnZhbChjbGVhcik7XG4gICAgICAgIHRoaXMucGxheSgpO1xuICAgIH1cbiAgICBcbiAgICBwbGF5KCkge1xuICAgICAgICB0aGlzLl9zZXRDdXJyZW50UGllY2UoKTtcbiAgICAgICAgdGhpcy5fYWRkVG9DdXJyZW50QmFnKCk7XG4gICAgICAgIHRoaXMuX3Nob3dDdXJyZW50QmFnKCk7XG4gICAgICAgIGlmICghdGhpcy5uZXh0QmFnLmxlbmd0aCkgdGhpcy5fcmVmaWxsTmV4dEJhZygpO1xuICAgICAgICBcbiAgICAgICAgbGV0IGNsZWFyID0gc2V0SW50ZXJ2YWwoKCkgPT4ge1xuICAgICAgICAgICAgY29uc29sZS5sb2codGhpcy5jdXJyZW50UGllY2UucG9zaXRpb24pO1xuICAgICAgICAgICAgdGhpcy5jbGVhckhhbmRsZSA9IGNsZWFyO1xuICAgICAgICAgICAgdGhpcy5jdXJyZW50UGllY2UuX3BvcHVsYXRlRmllbGQodGhpcy5maWVsZCk7XG4gICAgICAgICAgICB0aGlzLnJlbmRlcigpO1xuICAgICAgICAgICAgaWYgKCF0aGlzLmN1cnJlbnRQaWVjZS5pc0ZhbGxpbmcodGhpcy5maWVsZCkpIHRoaXMuaGFuZGxlUGllY2VTdG9wKGNsZWFyKTtcbiAgICAgICAgICAgIHRoaXMuY3VycmVudFBpZWNlLmRyb3AoKTtcbiAgICAgICAgICAgIHRoaXMuY3VycmVudFBpZWNlLl9wb3B1bGF0ZUZpZWxkKHRoaXMuZmllbGQpOyAvLyBrZWVwIG9ubHkgb25lIHBvcHVsYXRlIGZpZWxkP1xuICAgICAgICAgICAgdGhpcy5yZW5kZXIoKTtcbiAgICAgICAgfSwgMjAwKTtcbiAgICB9XG5cbn0iLCJpbXBvcnQgR2FtZSBmcm9tICcuL2dhbWUvZ2FtZSc7XG5pbXBvcnQgRmllbGQgZnJvbSAnLi9maWVsZC9maWVsZCc7XG5cbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsICgpID0+IHtcbiAgICBjb25zdCBmaWVsZENvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZmllbGQtY29udGFpbmVyXCIpO1xuXG4gICAgbGV0IGZpZWxkID0gbmV3IEZpZWxkKCk7XG4gICAgZmllbGQuY3JlYXRlRmllbGRXaXRoSG9sZEJveEFuZE5leHRCb3hlcyhmaWVsZENvbnRhaW5lcik7XG5cbiAgICBsZXQgZ2FtZSA9IG5ldyBHYW1lKCk7XG4gICAgZ2FtZS5rZXlMaXN0ZW5lcigpO1xuICAgIGdhbWUucGxheShmaWVsZENvbnRhaW5lcik7XG5cbn0pOyIsImltcG9ydCBQaWVjZSBmcm9tICcuL3BpZWNlJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSVBpZWNlIGV4dGVuZHMgUGllY2Uge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICB0aGlzLm5hbWUgPSBcIklQaWVjZVwiO1xuICAgICAgICB0aGlzLnBvc2l0aW9uID0ge1xuICAgICAgICAgICAgdG9wOiBbXSxcbiAgICAgICAgICAgIG1pZGRsZTogW10sXG4gICAgICAgICAgICBib3R0b206IFtbMCwgM10sIFswLCA0XSwgWzAsIDVdLCBbMCwgNl1dXG4gICAgICAgIH07XG4gICAgICAgIHRoaXMuY29sb3JDb2RlID0gMjtcbiAgICAgICAgdGhpcy50dXJuaW5nUG9pbnQgPSBbMCwgNF07XG4gICAgICAgIHRoaXMuZGlzcGxheVNxdWFyZXMgPSBbWzAsIDJdLCBbMSwgMl0sIFsyLCAyXSwgWzMsIDJdXTtcblxuICAgICAgICB0aGlzLnJlbW92ZVNxdWFyZXMgPSBbXTtcbiAgICB9XG5cblxufVxuXG5cbiIsImltcG9ydCBQaWVjZSBmcm9tICcuL3BpZWNlJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgalBpZWNlIGV4dGVuZHMgUGllY2Uge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICB0aGlzLm5hbWUgPSBcIkpQaWVjZVwiO1xuICAgICAgICB0aGlzLnBvc2l0aW9uID0ge1xuICAgICAgICAgICAgdG9wOiBbWzAsIDNdXSxcbiAgICAgICAgICAgIG1pZGRsZTogW10sXG4gICAgICAgICAgICBib3R0b206IFtbMSwgM10sIFsxLCA0XSwgWzEsIDVdXVxuICAgICAgICB9O1xuICAgICAgICB0aGlzLmNvbG9yQ29kZSA9IDc7XG5cbiAgICAgICAgdGhpcy50dXJuaW5nUG9pbnQgPSBbMSwgNF07XG5cbiAgICAgICAgdGhpcy5kaXNwbGF5U3F1YXJlcyA9IFtbMSwgMV0sIFsxLCAyXSwgWzIsIDJdLCBbMywgMl1dO1xuIFxuICAgICAgICB0aGlzLnJlbW92ZVNxdWFyZXMgPSBbXTtcbiAgICB9XG59IiwiaW1wb3J0IFBpZWNlIGZyb20gJy4vcGllY2UnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBsUGllY2UgZXh0ZW5kcyBQaWVjZSB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIHRoaXMubmFtZSA9IFwiTFBpZWNlXCI7XG4gICAgICAgIHRoaXMucG9zaXRpb24gPSB7XG4gICAgICAgICAgICB0b3A6IFtbMCwgNV1dLFxuICAgICAgICAgICAgbWlkZGxlOiBbXSxcbiAgICAgICAgICAgIGJvdHRvbTogW1sxLCAzXSwgWzEsIDRdLCBbMSwgNV1dXG4gICAgICAgIH07XG4gICAgICAgIHRoaXMuY29sb3JDb2RlID0gNjtcblxuICAgICAgICB0aGlzLnR1cm5pbmdQb2ludCA9IFsxLCA0XTtcblxuICAgICAgICB0aGlzLmRpc3BsYXlTcXVhcmVzID0gW1sxLCAyXSwgWzIsIDJdLCBbMywgMl0sIFszLCAxXV07XG5cbiAgICAgICAgdGhpcy5yZW1vdmVTcXVhcmVzID0gW107XG4gICAgfVxufSIsImltcG9ydCBQaWVjZSBmcm9tICcuL3BpZWNlJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgT1BpZWNlIGV4dGVuZHMgUGllY2Uge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICB0aGlzLm5hbWUgPSBcIk9QaWVjZVwiO1xuICAgICAgICB0aGlzLnBvc2l0aW9uID0ge1xuICAgICAgICAgICAgdG9wOiBbWzAsIDRdLCBbMCwgNV1dLFxuICAgICAgICAgICAgbWlkZGxlOiBbXSxcbiAgICAgICAgICAgIGJvdHRvbTogW1sxLCA0XSxbMSwgNV1dXG4gICAgICAgIH07XG4gICAgICAgIHRoaXMuY29sb3JDb2RlID0gMTtcbiAgICAgICAgdGhpcy50dXJuaW5nUG9pbnQgPSBbMSwgNF07XG4gICAgICAgIHRoaXMuZGlzcGxheVNxdWFyZXMgPSBbWzEsIDFdLCBbMiwgMV0sIFsxLCAyXSwgWzIsIDJdXTtcblxuICAgICAgICB0aGlzLnJlbW92ZVNxdWFyZXMgPSBbXTtcbiAgICB9XG59ICIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIFBpZWNlIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5sZWZ0TW9zdCA9ICcnO1xuICAgICAgICB0aGlzLnJpZ2h0TW9zdCA9ICcnO1xuICAgIH1cblxuICAgIHNldExlZnRNb3N0QW5kUmlnaHRNb3N0KCkge1xuICAgICAgICBsZXQgbGVmdE1vc3Q7XG4gICAgICAgIGxldCByaWdodE1vc3Q7XG4gICAgICAgIE9iamVjdC52YWx1ZXModGhpcy5wb3NpdGlvbikuZm9yRWFjaChjb29yZGluYXRlc0FycmF5ID0+IGNvb3JkaW5hdGVzQXJyYXkuZm9yRWFjaChhcnJheSA9PiB7XG4gICAgICAgICAgICBsZXQgY29sdW1uVmFsdWUgPSBhcnJheVsxXTtcbiAgICAgICAgICAgIGlmICghbGVmdE1vc3QpIGxlZnRNb3N0ID0gY29sdW1uVmFsdWU7XG4gICAgICAgICAgICBpZiAoIXJpZ2h0TW9zdCkgcmlnaHRNb3N0ID0gY29sdW1uVmFsdWU7XG4gICAgICAgICAgICBpZiAoY29sdW1uVmFsdWUgPCBsZWZ0TW9zdCkgbGVmdE1vc3QgPSBjb2x1bW5WYWx1ZTtcbiAgICAgICAgICAgIGlmIChjb2x1bW5WYWx1ZSA+IHJpZ2h0TW9zdCkgcmlnaHRNb3N0ID0gY29sdW1uVmFsdWU7XG4gICAgICAgIH0pKTtcbiAgICAgICAgdGhpcy5sZWZ0TW9zdCA9IGxlZnRNb3N0O1xuICAgICAgICB0aGlzLnJpZ2h0TW9zdCA9IHJpZ2h0TW9zdDtcbiAgICB9XG5cbiAgICBfcG9wdWxhdGVGaWVsZChmaWVsZCkge1xuICAgICAgICBcbiAgICAgICAgbGV0IGNvb3JkaW5hdGVBcnJheXMgPSBPYmplY3QudmFsdWVzKHRoaXMucG9zaXRpb24pO1xuXG4gICAgICAgIGNvb3JkaW5hdGVBcnJheXMuZm9yRWFjaChhcnJheSA9PiB7XG4gICAgICAgICAgICBhcnJheS5mb3JFYWNoKGNvb3JkaW5hdGUgPT4ge1xuICAgICAgICAgICAgICAgIGxldCBbcm93LCBjb2xdID0gW2Nvb3JkaW5hdGVbMF0sIGNvb3JkaW5hdGVbMV1dO1xuICAgICAgICAgICAgICAgIGZpZWxkW3Jvd11bY29sXSA9IHRoaXMuY29sb3JDb2RlO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgfSk7XG5cbiAgICAgICAgdGhpcy5yZW1vdmVTcXVhcmVzLmZvckVhY2gocG9zaXRpb25BcnJheSA9PiB7XG4gICAgICAgICAgICBsZXQgW3JvdywgY29sXSA9IFtwb3NpdGlvbkFycmF5WzBdLCBwb3NpdGlvbkFycmF5WzFdXTtcbiAgICAgICAgICAgIGZpZWxkW3Jvd11bY29sXSA9IDA7XG4gICAgICAgIH0pO1xuICAgICAgICBcbiAgICB9XG5cbiAgICAvLyBjb21wYXJlcyB0d28gYXJyYXlzIG9mIGNvb3JkaW5hdGVzIGFuZCBjaGVjayBpZiB0aGV5IGhhdmUgdGhlIHNhbWUgY29udGVudCBpbiB0aGUgc2FtZSBvcmRlclxuICAgIF9zcXVhcmVzQXJlRXF1YWwob2xkU3F1YXJlLCBuZXdTcXVhcmUpIHtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBvbGRTcXVhcmUubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGlmIChvbGRTcXVhcmVbaV0gIT09IG5ld1NxdWFyZVtpXSkgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cblxuICAgIF9pbmNsdWRlcyhvbGRTcXVhcmUsIGNvb3JkaW5hdGVBcnJheXMpIHtcbiAgICAgICAgbGV0IHJlc3VsdCA9IGZhbHNlO1xuICAgICAgICBjb29yZGluYXRlQXJyYXlzLmZvckVhY2goYXJyYXkgPT4ge1xuICAgICAgICAgICAgaWYgKHRoaXMuX3NxdWFyZXNBcmVFcXVhbChvbGRTcXVhcmUsIGFycmF5KSkge1xuICAgICAgICAgICAgICAgIHJlc3VsdCA9IHRydWU7IFxuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG5cbiAgICBkcm9wKCkge1xuICAgICAgICBsZXQgb2xkUG9zaXRpb24gPSB7XG4gICAgICAgICAgICB0b3A6IHRoaXMucG9zaXRpb24udG9wLm1hcChhcnJheSA9PiBhcnJheS5zbGljZSgpKSxcbiAgICAgICAgICAgIG1pZGRsZTogdGhpcy5wb3NpdGlvbi5taWRkbGUubWFwKGFycmF5ID0+IGFycmF5LnNsaWNlKCkpLFxuICAgICAgICAgICAgYm90dG9tOiB0aGlzLnBvc2l0aW9uLmJvdHRvbS5tYXAoYXJyYXkgPT4gYXJyYXkuc2xpY2UoKSksXG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLnBvc2l0aW9uLnRvcCA9IHRoaXMucG9zaXRpb24udG9wLm1hcChhcnJheSA9PiBbYXJyYXlbMF0gKyAxLCBhcnJheVsxXV0pO1xuICAgICAgICB0aGlzLnBvc2l0aW9uLm1pZGRsZSA9IHRoaXMucG9zaXRpb24ubWlkZGxlLm1hcChhcnJheSA9PiBbYXJyYXlbMF0gKyAxLCBhcnJheVsxXV0pO1xuICAgICAgICB0aGlzLnBvc2l0aW9uLmJvdHRvbSA9IHRoaXMucG9zaXRpb24uYm90dG9tLm1hcChhcnJheSA9PiBbYXJyYXlbMF0gKyAxLCBhcnJheVsxXV0pO1xuICAgICAgICB0aGlzLnR1cm5pbmdQb2ludCA9IFt0aGlzLnR1cm5pbmdQb2ludFswXSArIDEsIHRoaXMudHVybmluZ1BvaW50WzFdXTtcblxuICAgICAgICB0aGlzLnNldFJlbW92ZVNxdWFyZXMob2xkUG9zaXRpb24pO1xuICAgIH1cblxuICAgIGhhcmREcm9wKGZpZWxkKSB7XG4gICAgICAgIHRoaXMuY2xlYXJGcm9tQm9hcmQoZmllbGQpO1xuICAgICAgICBsZXQgc3RvcHBlZCA9IGZhbHNlO1xuICAgICAgICB3aGlsZSghc3RvcHBlZCkge1xuICAgICAgICAgICAgbGV0IGhhbmdpbmdTcXVhcmVzID0gdGhpcy5oYW5naW5nU3F1YXJlcygpO1xuICAgICAgICAgICAgaGFuZ2luZ1NxdWFyZXMuZm9yRWFjaChjb29yZGluYXRlID0+IHtcbiAgICAgICAgICAgICAgICBsZXQgW3JvdywgY29sXSA9IFtjb29yZGluYXRlWzBdLCBjb29yZGluYXRlWzFdXTtcbiAgICAgICAgICAgICAgICBpZiAocm93ICsgMSA9PT0gMjAgfHwgZmllbGRbcm93ICsgMV1bY29sXSkgc3RvcHBlZCA9IHRydWU7XG4gICAgICAgICAgICB9KTsgXG4gICAgICAgICAgICBpZiAoc3RvcHBlZCkge1xuICAgICAgICAgICAgICAgIGRlYnVnZ2VyXG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLnBvc2l0aW9uLnRvcCA9IHRoaXMucG9zaXRpb24udG9wLm1hcChhcnJheSA9PiBbYXJyYXlbMF0gKyAxLCBhcnJheVsxXV0pO1xuICAgICAgICAgICAgdGhpcy5wb3NpdGlvbi5taWRkbGUgPSB0aGlzLnBvc2l0aW9uLm1pZGRsZS5tYXAoYXJyYXkgPT4gW2FycmF5WzBdICsgMSwgYXJyYXlbMV1dKTtcbiAgICAgICAgICAgIHRoaXMucG9zaXRpb24uYm90dG9tID0gdGhpcy5wb3NpdGlvbi5ib3R0b20ubWFwKGFycmF5ID0+IFthcnJheVswXSArIDEsIGFycmF5WzFdXSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjbGVhckZyb21Cb2FyZChmaWVsZCkge1xuICAgICAgICBPYmplY3QudmFsdWVzKHRoaXMucG9zaXRpb24pLmZvckVhY2goY29vcmRpbmF0ZUFycmF5cyA9PiBjb29yZGluYXRlQXJyYXlzLmZvckVhY2goY29vcmRpbmF0ZSA9PiB7XG4gICAgICAgICAgICBsZXQgcm93ID0gY29vcmRpbmF0ZVswXTtcbiAgICAgICAgICAgIGxldCBjb2wgPSBjb29yZGluYXRlWzFdO1xuICAgICAgICAgICAgZmllbGRbcm93XVtjb2xdID0gMDtcbiAgICAgICAgfSkpO1xuICAgICAgICBkZWJ1Z2dlclxuICAgIH1cblxuICAgIG1vdmUoZGlyZWN0aW9uKSB7XG4gICAgICAgIGxldCBvbGRQb3NpdGlvbiA9IHtcbiAgICAgICAgICAgIHRvcDogdGhpcy5wb3NpdGlvbi50b3AubWFwKGFycmF5ID0+IGFycmF5LnNsaWNlKCkpLFxuICAgICAgICAgICAgbWlkZGxlOiB0aGlzLnBvc2l0aW9uLm1pZGRsZS5tYXAoYXJyYXkgPT4gYXJyYXkuc2xpY2UoKSksXG4gICAgICAgICAgICBib3R0b206IHRoaXMucG9zaXRpb24uYm90dG9tLm1hcChhcnJheSA9PiBhcnJheS5zbGljZSgpKSxcbiAgICAgICAgfVxuICAgICAgICBzd2l0Y2goZGlyZWN0aW9uKSB7XG4gICAgICAgICAgICBjYXNlIFwibGVmdFwiOiAgXG4gICAgICAgICAgICAgICAgdGhpcy5wb3NpdGlvbi50b3AgPSB0aGlzLnBvc2l0aW9uLnRvcC5tYXAoYXJyYXkgPT4gW2FycmF5WzBdLCBhcnJheVsxXSAtIDFdKTtcbiAgICAgICAgICAgICAgICB0aGlzLnBvc2l0aW9uLm1pZGRsZSA9IHRoaXMucG9zaXRpb24ubWlkZGxlLm1hcChhcnJheSA9PiBbYXJyYXlbMF0sIGFycmF5WzFdIC0gMV0pO1xuICAgICAgICAgICAgICAgIHRoaXMucG9zaXRpb24uYm90dG9tID0gdGhpcy5wb3NpdGlvbi5ib3R0b20ubWFwKGFycmF5ID0+IFthcnJheVswXSwgYXJyYXlbMV0gLSAxXSk7XG4gICAgICAgICAgICAgICAgdGhpcy50dXJuaW5nUG9pbnQgPSBbdGhpcy50dXJuaW5nUG9pbnRbMF0sIHRoaXMudHVybmluZ1BvaW50WzFdIC0gMV07XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIFwidXBcIjpcbiAgICAgICAgICAgICAgICAvLyBkZWZlciB0byBzdWJjbGFzcyBcInR1cm5cIiBtZXRob2RcbiAgICAgICAgICAgICAgICB0aGlzLnR1cm5SaWdodCgpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBcInJpZ2h0XCI6XG4gICAgICAgICAgICAgICAgdGhpcy5wb3NpdGlvbi50b3AgPSB0aGlzLnBvc2l0aW9uLnRvcC5tYXAoYXJyYXkgPT4gW2FycmF5WzBdLCBhcnJheVsxXSArIDFdKTtcbiAgICAgICAgICAgICAgICB0aGlzLnBvc2l0aW9uLm1pZGRsZSA9IHRoaXMucG9zaXRpb24ubWlkZGxlLm1hcChhcnJheSA9PiBbYXJyYXlbMF0sIGFycmF5WzFdICsgMV0pO1xuICAgICAgICAgICAgICAgIHRoaXMucG9zaXRpb24uYm90dG9tID0gdGhpcy5wb3NpdGlvbi5ib3R0b20ubWFwKGFycmF5ID0+IFthcnJheVswXSwgYXJyYXlbMV0gKyAxXSk7XG4gICAgICAgICAgICAgICAgdGhpcy50dXJuaW5nUG9pbnQgPSBbdGhpcy50dXJuaW5nUG9pbnRbMF0sIHRoaXMudHVybmluZ1BvaW50WzFdICsgMV07XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIFwiZG93blwiOlxuICAgICAgICAgICAgICAgIHRoaXMucG9zaXRpb24udG9wID0gdGhpcy5wb3NpdGlvbi50b3AubWFwKGFycmF5ID0+IFthcnJheVswXSArIDEsIGFycmF5WzFdXSk7XG4gICAgICAgICAgICAgICAgdGhpcy5wb3NpdGlvbi5taWRkbGUgPSB0aGlzLnBvc2l0aW9uLm1pZGRsZS5tYXAoYXJyYXkgPT4gW2FycmF5WzBdICsgMSwgYXJyYXlbMV1dKTtcbiAgICAgICAgICAgICAgICB0aGlzLnBvc2l0aW9uLmJvdHRvbSA9IHRoaXMucG9zaXRpb24uYm90dG9tLm1hcChhcnJheSA9PiBbYXJyYXlbMF0gKyAxLCBhcnJheVsxXV0pO1xuICAgICAgICAgICAgICAgIHRoaXMudHVybmluZ1BvaW50ID0gW3RoaXMudHVybmluZ1BvaW50WzBdICsgMSwgdGhpcy50dXJuaW5nUG9pbnRbMV1dO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuc2V0UmVtb3ZlU3F1YXJlcyhvbGRQb3NpdGlvbik7XG4gICAgfVxuXG4gICAgdHVyblJpZ2h0KCkge1xuICAgICAgICBsZXQgc3F1YXJlcyA9IFtdO1xuICAgICAgICBPYmplY3QudmFsdWVzKHRoaXMucG9zaXRpb24pLmZvckVhY2goY29vcmRpbmF0ZXNBcnJheSA9PiBjb29yZGluYXRlc0FycmF5LmZvckVhY2goYXJyYXkgPT4ge1xuICAgICAgICAgICAgc3F1YXJlcy5wdXNoKGFycmF5KTtcbiAgICAgICAgfSkpO1xuXG4gICAgICAgIHRoaXMucG9zaXRpb24udG9wID0gW107XG4gICAgICAgIHRoaXMucG9zaXRpb24ubWlkZGxlID0gW107XG4gICAgICAgIHRoaXMucG9zaXRpb24uYm90dG9tID0gW107XG4gICAgICAgIHNxdWFyZXMuZm9yRWFjaChzcXVhcmUgPT4ge1xuICAgICAgICAgICAgbGV0IGNvbHVtbiA9IHNxdWFyZVsxXTtcbiAgICAgICAgICAgIGxldCBoZWlnaHREaWZmZXJlbmNlID0gdGhpcy50dXJuaW5nUG9pbnRbMF0gLSBzcXVhcmVbMF07XG4gICAgICAgICAgICBsZXQgd2lkdGhEaWZmZXJlbmNlID0gdGhpcy50dXJuaW5nUG9pbnRbMV0gLSBzcXVhcmVbMV07XG4gICAgICAgICAgICBsZXQgbmV3Q29sID0gdGhpcy50dXJuaW5nUG9pbnRbMV0gKyBoZWlnaHREaWZmZXJlbmNlO1xuICAgICAgICAgICAgbGV0IG5ld1JvdyA9IHRoaXMudHVybmluZ1BvaW50WzBdICsgKHdpZHRoRGlmZmVyZW5jZSAqIC0xKTtcbiAgICAgICAgICAgIHN3aXRjaCAoY29sdW1uKSB7XG4gICAgICAgICAgICAgICAgY2FzZSBjb2x1bW4gPSB0aGlzLmxlZnRNb3N0OlxuICAgICAgICAgICAgICAgICAgICB0aGlzLnBvc2l0aW9uLnRvcC5wdXNoKFtuZXdSb3csIG5ld0NvbF0pO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlIGNvbHVtbiA9IHRoaXMucmlnaHRNb3N0OlxuICAgICAgICAgICAgICAgICAgICB0aGlzLnBvc2l0aW9uLmJvdHRvbS5wdXNoKFtuZXdSb3csIG5ld0NvbF0pO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgICAgICB0aGlzLnBvc2l0aW9uLm1pZGRsZS5wdXNoKFtuZXdSb3csIG5ld0NvbF0pO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICB9XG5cbiAgICAvLyBjb21wYXJlIG9sZCBwb3NpdGlvbiBvZiBwaWVjZSB3aXRoIG5ldyBwb3NpdGlvbiBcbiAgICBzZXRSZW1vdmVTcXVhcmVzKG9sZFBvc2l0aW9uKSB7XG4gICAgICAgIGxldCBvbGRTcXVhcmVzID0gW107XG4gICAgICAgIGxldCBuZXdTcXVhcmVzID0gW107XG4gICAgICAgIE9iamVjdC52YWx1ZXMob2xkUG9zaXRpb24pLmZvckVhY2goY29vcmRpbmF0ZXNBcnJheSA9PiBjb29yZGluYXRlc0FycmF5LmZvckVhY2goYXJyYXkgPT4gb2xkU3F1YXJlcy5wdXNoKGFycmF5KSkpO1xuICAgICAgICBPYmplY3QudmFsdWVzKHRoaXMucG9zaXRpb24pLmZvckVhY2goY29vcmRpbmF0ZXNBcnJheSA9PiBjb29yZGluYXRlc0FycmF5LmZvckVhY2goYXJyYXkgPT4gbmV3U3F1YXJlcy5wdXNoKGFycmF5KSkpO1xuICAgICAgICAvLyBrZWVwIHRyYWNrIG9mIHNxdWFyZXMgdGhhdCB0aGUgcG9zaXRpb25zIGRvIG5vdCBoYXZlIGluIGNvbW1vbiAoc3F1YXJlcyB0byByZW1vdmUgY29sb3IgZnJvbSlcbiAgICAgICAgdGhpcy5yZW1vdmVTcXVhcmVzID0gb2xkU3F1YXJlcy5maWx0ZXIob2xkU3F1YXJlID0+IHtcbiAgICAgICAgICAgIGlmICghdGhpcy5faW5jbHVkZXMob2xkU3F1YXJlLCBuZXdTcXVhcmVzKSkgcmV0dXJuIG9sZFNxdWFyZTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgaGFuZ2luZ1NxdWFyZXMoKSB7XG4gICAgICAgIGxldCBzcXVhcmVzID0gW107XG4gICAgICAgIGxldCBoYW5naW5nU3F1YXJlcyA9IFtdO1xuICAgICAgICBPYmplY3QudmFsdWVzKHRoaXMucG9zaXRpb24pLmZvckVhY2goY29vcmRpbmF0ZUFycmF5cyA9PiBjb29yZGluYXRlQXJyYXlzLmZvckVhY2goY29vcmRpbmF0ZSA9PiB7XG4gICAgICAgICAgICBzcXVhcmVzLnB1c2goY29vcmRpbmF0ZSk7XG4gICAgICAgIH0pKTtcbiAgICAgICAgc3F1YXJlcy5mb3JFYWNoKHNxdWFyZSA9PiB7XG4gICAgICAgICAgICBsZXQgYmVsb3dTcXVhcmUgPSBbc3F1YXJlWzBdICsgMSwgc3F1YXJlWzFdXTtcbiAgICAgICAgICAgIGlmICghdGhpcy5faW5jbHVkZXMoYmVsb3dTcXVhcmUsIHNxdWFyZXMpKSBoYW5naW5nU3F1YXJlcy5wdXNoKHNxdWFyZSk7XG4gICAgICAgIH0pXG4gICAgICAgIHJldHVybiBoYW5naW5nU3F1YXJlcztcbiAgICB9IFxuXG4gICAgaXNGYWxsaW5nKGZpZWxkKSB7XG4gICAgICAgIGxldCByZXN1bHQgPSB0cnVlO1xuICAgICAgICB0aGlzLmhhbmdpbmdTcXVhcmVzKCkuZm9yRWFjaChjb29yZGluYXRlUGFpciA9PiB7XG4gICAgICAgICAgICBsZXQgW3JvdywgY29sXSA9IFtjb29yZGluYXRlUGFpclswXSwgY29vcmRpbmF0ZVBhaXJbMV1dO1xuICAgICAgICAgICAgLy8gaWYgdGhlIHBpZWNlJ3MgY3VycmVudCBwb3NpdGlvbiBpcyBhYm92ZSB0aGUgZmllbGQgZmxvb3Igb3IgYSBhbm90aGVyIHBpZWNlXG4gICAgICAgICAgICBpZiAoIWZpZWxkW3JvdyArIDFdIHx8IGZpZWxkW3JvdyArIDFdW2NvbF0pIHtcbiAgICAgICAgICAgICAgICByZXN1bHQgPSBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxuXG4gICAgcmlnaHRTaWRlTmV4dFRvQmxvY2soZmllbGQpIHtcbiAgICAgICAgbGV0IHJlc3VsdCA9IGZhbHNlO1xuICAgICAgICBPYmplY3QudmFsdWVzKHRoaXMucG9zaXRpb24pLmZvckVhY2goY29vcmRpbmF0ZXNBcnJheSA9PiBjb29yZGluYXRlc0FycmF5LmZvckVhY2goYXJyYXkgPT4ge1xuICAgICAgICAgICAgbGV0IGNvbHVtblZhbHVlID0gYXJyYXlbMV07XG4gICAgICAgICAgICBsZXQgcm93VmFsdWUgPSBhcnJheVswXTtcbiAgICAgICAgICAgIGlmIChjb2x1bW5WYWx1ZSA9IHRoaXMucmlnaHRNb3N0KSB7XG4gICAgICAgICAgICAgICAgaWYgKGNvbHVtblZhbHVlID09PSA5IHx8IGZpZWxkW3Jvd1ZhbHVlXVtjb2x1bW5WYWx1ZSArIDFdKSByZXN1bHQgPSB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KSk7XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxuXG4gICAgbGVmdFNpZGVOZXh0VG9CbG9jayhmaWVsZCkge1xuICAgICAgICBsZXQgcmVzdWx0ID0gZmFsc2U7XG4gICAgICAgIE9iamVjdC52YWx1ZXModGhpcy5wb3NpdGlvbikuZm9yRWFjaChjb29yZGluYXRlc0FycmF5ID0+IGNvb3JkaW5hdGVzQXJyYXkuZm9yRWFjaChhcnJheSA9PiB7XG4gICAgICAgICAgICBsZXQgY29sdW1uVmFsdWUgPSBhcnJheVsxXTtcbiAgICAgICAgICAgIGxldCByb3dWYWx1ZSA9IGFycmF5WzBdO1xuICAgICAgICAgICAgaWYgKGNvbHVtblZhbHVlID09PSB0aGlzLmxlZnRNb3N0KSB7XG4gICAgICAgICAgICAgICAgaWYgKGNvbHVtblZhbHVlID09PSAwIHx8IGZpZWxkW3Jvd1ZhbHVlXVtjb2x1bW5WYWx1ZSAtIDFdKSByZXN1bHQgPSB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KSk7XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxufSIsImltcG9ydCBQaWVjZSBmcm9tICcuL3BpZWNlJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU1BpZWNlIGV4dGVuZHMgUGllY2Uge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICB0aGlzLm5hbWUgPSBcIlNQaWVjZVwiO1xuICAgICAgICB0aGlzLnBvc2l0aW9uID0ge1xuICAgICAgICAgICAgdG9wOiBbWzAsIDRdLCBbMCwgNV1dLFxuICAgICAgICAgICAgbWlkZGxlOiBbXSxcbiAgICAgICAgICAgIGJvdHRvbTogW1sxLCAzXSwgWzEsIDRdXVxuICAgICAgICB9O1xuICAgICAgICB0aGlzLmNvbG9yQ29kZSA9IDQ7XG5cbiAgICAgICAgdGhpcy50dXJuaW5nUG9pbnQgPSBbMSwgNF07XG5cbiAgICAgICAgdGhpcy5kaXNwbGF5U3F1YXJlcyA9IFtbMywgMV0sIFsyLCAxXSwgWzIsIDJdLCBbMSwgMl1dO1xuXG4gICAgICAgIHRoaXMucmVtb3ZlU3F1YXJlcyA9IFtdO1xuICAgIH1cbn0iLCJpbXBvcnQgUGllY2UgZnJvbSAnLi9waWVjZSc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRQaWVjZSBleHRlbmRzIFBpZWNlIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgdGhpcy5uYW1lID0gXCJUUGllY2VcIjtcbiAgICAgICAgdGhpcy5wb3NpdGlvbiA9IHtcbiAgICAgICAgICAgIHRvcDogW1swLCA0XV0sXG4gICAgICAgICAgICBtaWRkbGU6IFtdLFxuICAgICAgICAgICAgYm90dG9tOiBbWzEsIDNdLCBbMSwgNF0sIFsxLCA1XV0sXG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5jb2xvckNvZGUgPSAzO1xuXG4gICAgICAgIHRoaXMudHVybmluZ1BvaW50ID0gWzEsIDRdO1xuXG4gICAgICAgIHRoaXMuZGlzcGxheVNxdWFyZXMgPSBbWzEsIDJdLCBbMiwgMl0sIFszLCAyXSwgWzIsIDFdXTtcblxuICAgICAgICB0aGlzLnJlbW92ZVNxdWFyZXMgPSBbXTtcbiAgICB9XG59IiwiaW1wb3J0IFBpZWNlIGZyb20gJy4vcGllY2UnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBaUGllY2UgZXh0ZW5kcyBQaWVjZSB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIHRoaXMubmFtZSA9IFwiWlBpZWNlXCI7XG4gICAgICAgIHRoaXMucG9zaXRpb24gPSB7XG4gICAgICAgICAgICB0b3A6IFtbMCwgM10sIFswLCA0XV0sXG4gICAgICAgICAgICBtaWRkbGU6IFtdLFxuICAgICAgICAgICAgYm90dG9tOiBbWzEsIDRdLCBbMSwgNV1dXG4gICAgICAgIH07XG4gICAgICAgIHRoaXMuY29sb3JDb2RlID0gNTtcblxuICAgICAgICB0aGlzLnR1cm5pbmdQb2ludCA9IFsxLCA0XTtcblxuICAgICAgICB0aGlzLmRpc3BsYXlTcXVhcmVzID0gW1sxLCAxXSwgWzIsIDFdLCBbMiwgMl0sIFszLCAyXV07XG5cbiAgICAgICAgdGhpcy5yZW1vdmVTcXVhcmVzID0gW107XG4gICAgfVxufSJdLCJzb3VyY2VSb290IjoiIn0=