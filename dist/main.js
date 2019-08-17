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
    this.currentBag = this._shuffleBag(this._generateBag());
    this.currentPiece = '';
    this.holdPiece = '';
    this.ghostPosition = '';
    this.nextBag = this._shuffleBag(this._generateBag()); // prevents player from holding piece multiple times

    this.canHold = true;
    this.clearHandle; // for animations

    this.dropPiece = this.dropPiece.bind(this);
    this.drop = this.drop.bind(this);
    this.fps = '';
    this.fpsInterval = '';
    this.startTime = '';
    this.now = '';
    this.then = '';
    this.isPaused = false;
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
    }
  }, {
    key: "_setField",
    value: function _setField() {
      var field = new _field_field__WEBPACK_IMPORTED_MODULE_0__["default"]();
      return field._generateField();
    } // take piece from currentBag and set it as the current piece

  }, {
    key: "_setCurrentPiece",
    value: function _setCurrentPiece() {
      this.currentPiece = this.currentBag.shift();
    } // removes old ghost position before switching to a new one

  }, {
    key: "clearGhostPosition",
    value: function clearGhostPosition() {
      var _this = this;

      var coordinateArrays = Object.values(this.ghostPosition);
      coordinateArrays.forEach(function (array) {
        array.forEach(function (coordinate) {
          var _ref = [coordinate[0], coordinate[1]],
              row = _ref[0],
              col = _ref[1];
          _this.field[row][col] = 0;
        });
      });
    }
  }, {
    key: "clearGhostClass",
    value: function clearGhostClass() {
      var _this2 = this;

      var fieldColumns = document.querySelectorAll(".field-column");
      var coordinateArrays = Object.values(this.ghostPosition);
      coordinateArrays.forEach(function (array) {
        array.forEach(function (coordinate) {
          var _ref2 = [coordinate[0], coordinate[1]],
              row = _ref2[0],
              col = _ref2[1];
          fieldColumns[col].children[row].classList = _this2.colors[_this2.currentPiece.colorCode];
        });
      });
    }
  }, {
    key: "setGhostPosition",
    value: function setGhostPosition() {
      var _this3 = this;

      var ghostPosition = {
        top: this.currentPiece.position.top.map(function (coordinate) {
          return coordinate.slice();
        }),
        middle: this.currentPiece.position.middle.map(function (coordinate) {
          return coordinate.slice();
        }),
        bottom: this.currentPiece.position.bottom.map(function (coordinate) {
          return coordinate.slice();
        })
      };
      var stopped = false;

      while (!stopped) {
        var hangingSquares = this.currentPiece.hangingSquares(ghostPosition);
        hangingSquares.forEach(function (coordinate) {
          var _ref3 = [coordinate[0], coordinate[1]],
              row = _ref3[0],
              col = _ref3[1];
          if (row + 1 === 20 || _this3.field[row + 1][col]) stopped = true;
        });
        if (stopped) break;
        ghostPosition.top = ghostPosition.top.map(function (array) {
          return [array[0] + 1, array[1]];
        });
        ghostPosition.middle = ghostPosition.middle.map(function (array) {
          return [array[0] + 1, array[1]];
        });
        ghostPosition.bottom = ghostPosition.bottom.map(function (array) {
          return [array[0] + 1, array[1]];
        });
      }

      this.ghostPosition = ghostPosition;

      this._populateGhostPosition();
    }
  }, {
    key: "_populateGhostPosition",
    value: function _populateGhostPosition() {
      var _this4 = this;

      var coordinateArrays = Object.values(this.ghostPosition);
      coordinateArrays.forEach(function (array) {
        array.forEach(function (coordinate) {
          var _ref4 = [coordinate[0], coordinate[1]],
              row = _ref4[0],
              col = _ref4[1];
          _this4.field[row][col] = "x";
        });
      });
      this.render();
    }
  }, {
    key: "populateField",
    value: function populateField(piece) {
      var _this5 = this;

      var coordinateArrays = Object.values(piece.position);
      coordinateArrays.forEach(function (array) {
        array.forEach(function (coordinate) {
          var _ref5 = [coordinate[0], coordinate[1]],
              row = _ref5[0],
              col = _ref5[1];
          _this5.field[row][col] = piece.colorCode;
        });
      });
      piece.removeSquares.forEach(function (positionArray) {
        var _ref6 = [positionArray[0], positionArray[1]],
            row = _ref6[0],
            col = _ref6[1];
        _this5.field[row][col] = 0;
      });
    } // hold piece for later use 

  }, {
    key: "hold",
    value: function hold() {
      if (!this.canHold) return;
      this.currentPiece.clearSelfFromBoard(this.field);
      this.render();

      if (this.holdPiece === '') {
        // pass current piece name into generate piece in order to generate a new piece instance
        this.holdPiece = this._generatePiece(this.currentPiece.name);

        this._setCurrentPiece(); // re-render next boxes to appropriately show current bag


        this._showCurrentBag();
      } else {
        this.currentPiece = this._generatePiece(this.currentPiece.name);
        var _ref7 = [this.holdPiece, this.currentPiece];
        this.currentPiece = _ref7[0];
        this.holdPiece = _ref7[1];
      }

      this.canHold = false;

      this._populateHoldBox();
    }
  }, {
    key: "_populateHoldBox",
    value: function _populateHoldBox() {
      var _this6 = this;

      var columns = document.querySelector(".hold-box").children; // remove colors from previous pieces

      for (var i = 0; i < 5; i++) {
        for (var j = 0; j < 4; j++) {
          // columns.children is nodelist of <lis>
          columns[i].children[j].className = "";
        }
      }

      this.holdPiece.displaySquares.forEach(function (square) {
        var _ref8 = [square[0], square[1]],
            col = _ref8[0],
            row = _ref8[1];
        columns[col].children[row].classList.add(_this6.colors[_this6.holdPiece.colorCode]);
      });
    } // used for this.hold(): generate a new piece so that a holdpiece that is re-rendered on the board will not start from the old position

  }, {
    key: "_generatePiece",
    value: function _generatePiece(pieceName) {
      switch (pieceName) {
        case "TPiece":
          return new _pieces_tPiece__WEBPACK_IMPORTED_MODULE_3__["default"]();

        case "OPiece":
          return new _pieces_oPiece__WEBPACK_IMPORTED_MODULE_1__["default"]();

        case "IPiece":
          return new _pieces_iPiece__WEBPACK_IMPORTED_MODULE_2__["default"]();

        case "LPiece":
          return new _pieces_lPiece__WEBPACK_IMPORTED_MODULE_6__["default"]();

        case "JPiece":
          return new _pieces_jPiece__WEBPACK_IMPORTED_MODULE_7__["default"]();

        case "SPiece":
          return new _pieces_sPiece__WEBPACK_IMPORTED_MODULE_4__["default"]();

        case "ZPiece":
          return new _pieces_zPiece__WEBPACK_IMPORTED_MODULE_5__["default"]();
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
      var _this7 = this;

      // columns is nodelist of <uls>
      var columns = box.children; // remove colors from previous pieces

      for (var i = 0; i < 5; i++) {
        for (var j = 0; j < 4; j++) {
          // columns.children is nodelist of <lis>
          columns[i].children[j].className = "";
        }
      }

      piece.displaySquares.forEach(function (square) {
        var _ref9 = [square[0], square[1]],
            col = _ref9[0],
            row = _ref9[1];
        columns[col].children[row].classList.add(_this7.colors[piece.colorCode]);
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
    key: "_gameOver",
    value: function _gameOver() {
      return false;
    } // look through field, if field[row][col] contains a number > 0, fill that spot with the respective color. Else, remove color

  }, {
    key: "render",
    value: function render() {
      var _this8 = this;

      var fieldColumns = document.querySelectorAll(".field-column");
      this.field.forEach(function (row, rowIdx) {
        row.forEach(function (col, colIdx) {
          var squareValue = _this8.field[rowIdx][colIdx];

          if (squareValue === 'x') {
            fieldColumns[colIdx].children[rowIdx].classList.add("x-".concat(_this8.colors[_this8.currentPiece.colorCode]));
          } else if (squareValue) {
            fieldColumns[colIdx].children[rowIdx].classList.add(_this8.colors[squareValue]);
          } else {
            Object.values(_this8.colors).forEach(function (color) {
              fieldColumns[colIdx].children[rowIdx].classList.remove(color);
              fieldColumns[colIdx].children[rowIdx].classList.remove("x-".concat(color));
            });
          }
        });
      });
    }
  }, {
    key: "keyListener",
    value: function keyListener() {
      var _this9 = this;

      document.body.addEventListener("keydown", function (event) {
        _this9.currentPiece.setLeftMostAndRightMost();

        _this9.clearGhostPosition();

        switch (event.which) {
          // up key
          case 38:
            // pass field so piece can check field wall before turning
            _this9.currentPiece.move("up", _this9.field);

            _this9.populateField(_this9.currentPiece);

            _this9.setGhostPosition();

            break;
          // C key

          case 67:
            // pass field so piece can check field wall before turning
            _this9.currentPiece.move("C", _this9.field);

            _this9.populateField(_this9.currentPiece);

            _this9.setGhostPosition();

            break;
          // right key

          case 39:
            if (_this9.currentPiece.rightSideBlocked(_this9.field)) {
              _this9.setGhostPosition();

              break;
            }

            _this9.currentPiece.move("right");

            _this9.populateField(_this9.currentPiece);

            _this9.setGhostPosition();

            break;
          // down key

          case 40:
            if (!_this9.currentPiece.isFalling(_this9.field)) break;

            _this9.currentPiece.move("down");

            _this9.populateField(_this9.currentPiece);

            _this9.setGhostPosition();

            break;
          // left key

          case 37:
            if (_this9.currentPiece.leftSideBlocked(_this9.field)) {
              _this9.setGhostPosition();

              break;
            }

            _this9.currentPiece.move("left");

            _this9.populateField(_this9.currentPiece);

            _this9.setGhostPosition();

            break;
          // shift key

          case 16:
            _this9.hold();

            _this9.populateField(_this9.currentPiece);

            _this9.setGhostPosition();

            break;
          // space bar

          case 32:
            // this.render();
            _this9.currentPiece.hardDrop(_this9.field);

            _this9.render();

            _this9.populateField(_this9.currentPiece);

            _this9.handlePieceStop(_this9.clearHandle);

            break;
          // P key

          case 80:
            // this.render();
            _this9.isPaused ? _this9.dropPiece(1.5) : cancelAnimationFrame(_this9.clearHandle);
            _this9.isPaused = !_this9.isPaused;

            _this9.setGhostPosition();

            break;

          default:
            _this9.setGhostPosition();

        }

        console.log(_this9.currentPiece);

        _this9.currentPiece.setLeftMostAndRightMost(); // messes up with piece color
        // this.populateField(this.currentPiece);


        _this9.render();
      });
    }
  }, {
    key: "clearLines",
    value: function clearLines(lowest, highest) {
      // base case: if we reach a row that is higher than the highest, then exit
      if (lowest < highest) return; // recursive case: 
      // if lowest row does not contain a 0, bring all above rows down one level

      if (!this.field[lowest].includes(0)) {
        this._bringDownField(lowest); // call recursiveClear(lowest, highest + 1);


        this.clearLines(lowest, highest + 1); // if rw contains a 0 
        // call ClearLines(lowest - 1, highest)
      } else if (this.field[lowest].includes(0)) {
        this.clearLines(lowest - 1, highest);
      }
    }
  }, {
    key: "_bringDownField",
    value: function _bringDownField(startingRow) {
      for (var i = startingRow; i > 0; i--) {
        this.field[i] = this.field[i - 1];
      }

      this.field[0] = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    }
  }, {
    key: "handlePieceStop",
    value: function handlePieceStop(clear) {
      // allow player to hold piece again
      this.canHold = true;
      var lowest = this.currentPiece.position.bottom[0][0]; // in case of line piece, which may not have this.position.top

      var highest = !this.currentPiece.position.top.length ? lowest : this.currentPiece.position.top[0][0];
      this.clearLines(lowest, highest);
      this.clearGhostClass();
      cancelAnimationFrame(this.clearHandle);
      this.play();
    }
  }, {
    key: "dropPiece",
    value: function dropPiece(fps) {
      // Do whatever
      this.fpsInterval = 1000 / fps;
      this.then = Date.now();
      this.startTime = this.then;
      this.drop();
    } // inspiration for throttling requestAnimationFrame from https://stackoverflow.com/questions/19764018/controlling-fps-with-requestanimationframe

  }, {
    key: "drop",
    value: function drop() {
      this.clearHandle = requestAnimationFrame(this.drop);
      this.now = Date.now();
      var elapsed = this.now - this.then;

      if (elapsed > this.fpsInterval) {
        // Get ready for next frame by setting then=now, adjusting for specified fpsInterval not being a multiple of RAF's interval (16.7ms)
        this.then = this.now - elapsed % this.fpsInterval;
        this.populateField(this.currentPiece);
        this.render();

        if (!this.currentPiece.isFalling(this.field)) {
          this.handlePieceStop(this.clearHandle);
        }

        this.currentPiece.drop();
        this.populateField(this.currentPiece); // keep only one populate field?

        this.render();
      }
    }
  }, {
    key: "play",
    value: function play() {
      this._setCurrentPiece();

      this.populateField(this.currentPiece);

      this._addToCurrentBag();

      this._showCurrentBag();

      if (!this.nextBag.length) this._refillNextBag();
      this.setGhostPosition(); // drop piece at 4 fps

      this.dropPiece(1.5);
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
      bottom: [[1, 3], [1, 4], [1, 5], [1, 6]]
    };
    _this.colorCode = 2;
    _this.turningPoint = [1, 5];
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
      top: [[0, 4], [0, 5]],
      middle: [],
      bottom: [[1, 4], [1, 5]]
    };
    _this.colorCode = 1;
    _this.turningPoint = [1, 4];
    _this.displaySquares = [[1, 1], [2, 1], [1, 2], [2, 2]];
    _this.removeSquares = [];
    return _this;
  } // OPiece does not turn


  _createClass(OPiece, [{
    key: "turnRight",
    value: function turnRight() {
      return;
    }
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
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

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
    value: function _includes(square, coordinateArrays) {
      var _this2 = this;

      var result = false;
      coordinateArrays.forEach(function (array) {
        if (_this2._squaresAreEqual(square, array)) {
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
    } // find highest possible ground-position for piece

  }, {
    key: "hardDrop",
    value: function hardDrop(field) {
      this.clearSelfFromBoard(field);
      var stopped = false;

      while (!stopped) {
        var hangingSquares = this.hangingSquares(this.position);
        hangingSquares.forEach(function (coordinate) {
          var _ref3 = [coordinate[0], coordinate[1]],
              row = _ref3[0],
              col = _ref3[1];
          if (row + 1 === 20 || field[row + 1][col]) stopped = true;
        });
        if (stopped) break;
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
    key: "clearSelfFromBoard",
    value: function clearSelfFromBoard(field) {
      Object.values(this.position).forEach(function (coordinateArrays) {
        return coordinateArrays.forEach(function (coordinate) {
          var row = coordinate[0];
          var col = coordinate[1];
          field[row][col] = 0;
        });
      });
    }
  }, {
    key: "move",
    value: function move(direction, field) {
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
          this.turnRight(field);
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

        case "C":
          this.turnLeft(field);
          break;
      }

      this.setRemoveSquares(oldPosition);
    }
  }, {
    key: "turnRight",
    value: function turnRight(field) {
      var _this3 = this;

      var squares = [];
      Object.values(this.position).forEach(function (coordinatesArray) {
        return squares.push.apply(squares, _toConsumableArray(coordinatesArray));
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
          case column = _this3.rightMost:
            _this3.position.bottom.push([newRow, newCol]);

            break;

          case column = _this3.leftMost:
            _this3.position.top.push([newRow, newCol]);

            break;

          default:
            _this3.position.middle.push([newRow, newCol]);

            break;
        }
      }); // find left and right most squares to see if piece through wall
      // if through wall, push piece back into field

      this.setLeftMostAndRightMost();

      while (this.rightMost > 9 || this.leftMost < 0) {
        this.rightMost > 9 ? this.move('left') : this.move('right');
        this.setLeftMostAndRightMost();
      } // in the case that the IPiece is turned through the field ceiling


      if (this.position.top.length) {
        while (this.position.top[0][0] < 0) {
          this.move('down');
        }
      }
    }
  }, {
    key: "turnLeft",
    value: function turnLeft(field) {
      var _this4 = this;

      var squares = [];
      Object.values(this.position).forEach(function (coordinatesArray) {
        return squares.push.apply(squares, _toConsumableArray(coordinatesArray));
      });
      this.position.top = [];
      this.position.middle = [];
      this.position.bottom = [];
      squares.forEach(function (square) {
        var column = square[1];
        var heightDifference = _this4.turningPoint[0] - square[0];
        var widthDifference = _this4.turningPoint[1] - square[1];
        var newCol = _this4.turningPoint[1] - heightDifference;
        var newRow = _this4.turningPoint[0] - widthDifference * -1;

        switch (column) {
          case column = _this4.rightMost:
            _this4.position.top.push([newRow, newCol]);

            break;

          case column = _this4.leftMost:
            _this4.position.bottom.push([newRow, newCol]);

            break;

          default:
            _this4.position.middle.push([newRow, newCol]);

            break;
        }
      }); // find left and right most squares to see if piece through wall
      // if through wall, push piece back into field

      this.setLeftMostAndRightMost();

      while (this.rightMost > 9 || this.leftMost < 0) {
        this.rightMost > 9 ? this.move('left') : this.move('right');
        this.setLeftMostAndRightMost();
      } // in the case that the IPiece is turned through the field ceiling


      if (this.position.top.length) {
        while (this.position.top[0][0] < 0) {
          this.move('down');
        }
      }
    } // compare old position of piece with new position 

  }, {
    key: "setRemoveSquares",
    value: function setRemoveSquares(oldPosition) {
      var _this5 = this;

      var oldSquares = [];
      var newSquares = [];
      Object.values(oldPosition).forEach(function (coordinatesArray) {
        return oldSquares.push.apply(oldSquares, _toConsumableArray(coordinatesArray));
      });
      Object.values(this.position).forEach(function (coordinatesArray) {
        return newSquares.push.apply(newSquares, _toConsumableArray(coordinatesArray));
      }); // keep track of squares that the positions do not have in common (squares to remove color from)

      this.removeSquares = oldSquares.filter(function (oldSquare) {
        if (!_this5._includes(oldSquare, newSquares)) return oldSquare;
      });
    }
  }, {
    key: "hangingSquares",
    value: function hangingSquares(position) {
      var _this6 = this;

      var squares = [];
      var hangingSquares = [];
      Object.values(position).forEach(function (coordinateArray) {
        return squares.push.apply(squares, _toConsumableArray(coordinateArray));
      });
      squares.forEach(function (square) {
        var belowSquare = [square[0] + 1, square[1]];
        if (!_this6._includes(belowSquare, squares)) hangingSquares.push(square);
      });
      return hangingSquares;
    }
  }, {
    key: "sideSquares",
    value: function sideSquares() {
      var _this7 = this;

      var squares = [];
      var sideSquares = {
        left: [],
        right: []
      };
      Object.values(this.position).forEach(function (coordinateArray) {
        return squares.push.apply(squares, _toConsumableArray(coordinateArray));
      });
      squares.forEach(function (square) {
        var adjacentLeft = [square[0], square[1] - 1];
        var adjacentRight = [square[0], square[1] + 1];
        if (!_this7._includes(adjacentLeft, squares)) sideSquares.left.push(square);
        if (!_this7._includes(adjacentRight, squares)) sideSquares.right.push(square);
      });
      return sideSquares;
    }
  }, {
    key: "isFalling",
    value: function isFalling(field) {
      var result = true;
      this.hangingSquares(this.position).forEach(function (coordinatePair) {
        var _ref4 = [coordinatePair[0], coordinatePair[1]],
            row = _ref4[0],
            col = _ref4[1]; // if the piece's current position is above the field floor or a another piece (not include ghost piece)

        if (!field[row + 1] || field[row + 1][col] && field[row + 1][col] !== "x") {
          result = false;
        }
      });
      return result;
    }
  }, {
    key: "rightSideBlocked",
    value: function rightSideBlocked(field) {
      var result = false;
      this.sideSquares().right.forEach(function (coordinatePair) {
        var _ref5 = [coordinatePair[0], coordinatePair[1]],
            row = _ref5[0],
            col = _ref5[1]; // if any right facing square hits the wall or another piece

        if (col === 9 || field[row][col + 1]) {
          result = true;
        }
      });
      return result;
    }
  }, {
    key: "leftSideBlocked",
    value: function leftSideBlocked(field) {
      var result = false;
      this.sideSquares().left.forEach(function (coordinatePair) {
        var _ref6 = [coordinatePair[0], coordinatePair[1]],
            row = _ref6[0],
            col = _ref6[1]; // if any left facing square hits the wall or another piece

        if (col === 0 || field[row][col - 1]) {
          result = true;
        }
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2ZpZWxkL2ZpZWxkLmpzIiwid2VicGFjazovLy8uL3NyYy9maWVsZC9ob2xkYm94LmpzIiwid2VicGFjazovLy8uL3NyYy9maWVsZC9uZXh0Qm94LmpzIiwid2VicGFjazovLy8uL3NyYy9nYW1lL2dhbWUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9waWVjZXMvaVBpZWNlLmpzIiwid2VicGFjazovLy8uL3NyYy9waWVjZXMvalBpZWNlLmpzIiwid2VicGFjazovLy8uL3NyYy9waWVjZXMvbFBpZWNlLmpzIiwid2VicGFjazovLy8uL3NyYy9waWVjZXMvb1BpZWNlLmpzIiwid2VicGFjazovLy8uL3NyYy9waWVjZXMvcGllY2UuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3BpZWNlcy9zUGllY2UuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3BpZWNlcy90UGllY2UuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3BpZWNlcy96UGllY2UuanMiXSwibmFtZXMiOlsiRmllbGQiLCJmaWVsZCIsImkiLCJyb3ciLCJwdXNoIiwiY29sdW1uIiwiZG9jdW1lbnQiLCJjcmVhdGVFbGVtZW50IiwiY2xhc3NMaXN0IiwiYWRkIiwiYXBwZW5kIiwiYXBwZW5kQ2hpbGQiLCJfY3JlYXRlQ29sdW1uIiwiY29udGFpbmVyIiwibmV4dEJveCIsIk5leHRCb3giLCJob2xkQm94IiwiSG9sZEJveCIsIl9jcmVhdGVGaWVsZCIsImNyZWF0ZU5leHRCb3hlcyIsInByZXBlbmQiLCJjcmVhdGVCb3giLCJib3giLCJfY3JlYXRlQm94Q29sdW1uIiwiX2NyZWF0ZU5leHRCb3hDb2x1bW4iLCJib3hlcyIsIl9jcmVhdGVOZXh0Qm94IiwiR2FtZSIsIl9zZXRGaWVsZCIsImNvbG9ycyIsImN1cnJlbnRCYWciLCJfc2h1ZmZsZUJhZyIsIl9nZW5lcmF0ZUJhZyIsImN1cnJlbnRQaWVjZSIsImhvbGRQaWVjZSIsImdob3N0UG9zaXRpb24iLCJuZXh0QmFnIiwiY2FuSG9sZCIsImNsZWFySGFuZGxlIiwiZHJvcFBpZWNlIiwiYmluZCIsImRyb3AiLCJmcHMiLCJmcHNJbnRlcnZhbCIsInN0YXJ0VGltZSIsIm5vdyIsInRoZW4iLCJpc1BhdXNlZCIsIm9QaWVjZSIsIk9QaWVjZSIsImlQaWVjZSIsIklQaWVjZSIsInRQaWVjZSIsIlRQaWVjZSIsInNQaWVjZSIsIlNQaWVjZSIsInpQaWVjZSIsIlpQaWVjZSIsImxQaWVjZSIsIkxQaWVjZSIsImpQaWVjZSIsIkpQaWVjZSIsIl9nZW5lcmF0ZUZpZWxkIiwic2hpZnQiLCJjb29yZGluYXRlQXJyYXlzIiwiT2JqZWN0IiwidmFsdWVzIiwiZm9yRWFjaCIsImFycmF5IiwiY29vcmRpbmF0ZSIsImNvbCIsImZpZWxkQ29sdW1ucyIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJjaGlsZHJlbiIsImNvbG9yQ29kZSIsInRvcCIsInBvc2l0aW9uIiwibWFwIiwic2xpY2UiLCJtaWRkbGUiLCJib3R0b20iLCJzdG9wcGVkIiwiaGFuZ2luZ1NxdWFyZXMiLCJfcG9wdWxhdGVHaG9zdFBvc2l0aW9uIiwicmVuZGVyIiwicGllY2UiLCJyZW1vdmVTcXVhcmVzIiwicG9zaXRpb25BcnJheSIsImNsZWFyU2VsZkZyb21Cb2FyZCIsIl9nZW5lcmF0ZVBpZWNlIiwibmFtZSIsIl9zZXRDdXJyZW50UGllY2UiLCJfc2hvd0N1cnJlbnRCYWciLCJfcG9wdWxhdGVIb2xkQm94IiwiY29sdW1ucyIsInF1ZXJ5U2VsZWN0b3IiLCJqIiwiY2xhc3NOYW1lIiwiZGlzcGxheVNxdWFyZXMiLCJzcXVhcmUiLCJwaWVjZU5hbWUiLCJnZXRFbGVtZW50c0J5Q2xhc3NOYW1lIiwiX3BvcHVsYXRlTmV4dEJveCIsImJhZyIsImN1cnJlbnRJbmRleCIsImxlbmd0aCIsInRlbXBvcmFyeVZhbHVlIiwicmFuZG9tSW5kZXgiLCJNYXRoIiwiZmxvb3IiLCJyYW5kb20iLCJyb3dJZHgiLCJjb2xJZHgiLCJzcXVhcmVWYWx1ZSIsImNvbG9yIiwicmVtb3ZlIiwiYm9keSIsImFkZEV2ZW50TGlzdGVuZXIiLCJldmVudCIsInNldExlZnRNb3N0QW5kUmlnaHRNb3N0IiwiY2xlYXJHaG9zdFBvc2l0aW9uIiwid2hpY2giLCJtb3ZlIiwicG9wdWxhdGVGaWVsZCIsInNldEdob3N0UG9zaXRpb24iLCJyaWdodFNpZGVCbG9ja2VkIiwiaXNGYWxsaW5nIiwibGVmdFNpZGVCbG9ja2VkIiwiaG9sZCIsImhhcmREcm9wIiwiaGFuZGxlUGllY2VTdG9wIiwiY2FuY2VsQW5pbWF0aW9uRnJhbWUiLCJjb25zb2xlIiwibG9nIiwibG93ZXN0IiwiaGlnaGVzdCIsImluY2x1ZGVzIiwiX2JyaW5nRG93bkZpZWxkIiwiY2xlYXJMaW5lcyIsInN0YXJ0aW5nUm93IiwiY2xlYXIiLCJjbGVhckdob3N0Q2xhc3MiLCJwbGF5IiwiRGF0ZSIsInJlcXVlc3RBbmltYXRpb25GcmFtZSIsImVsYXBzZWQiLCJfYWRkVG9DdXJyZW50QmFnIiwiX3JlZmlsbE5leHRCYWciLCJmaWVsZENvbnRhaW5lciIsImdldEVsZW1lbnRCeUlkIiwiY3JlYXRlRmllbGRXaXRoSG9sZEJveEFuZE5leHRCb3hlcyIsImdhbWUiLCJrZXlMaXN0ZW5lciIsInR1cm5pbmdQb2ludCIsIlBpZWNlIiwibGVmdE1vc3QiLCJyaWdodE1vc3QiLCJjb29yZGluYXRlc0FycmF5IiwiY29sdW1uVmFsdWUiLCJvbGRTcXVhcmUiLCJuZXdTcXVhcmUiLCJyZXN1bHQiLCJfc3F1YXJlc0FyZUVxdWFsIiwib2xkUG9zaXRpb24iLCJzZXRSZW1vdmVTcXVhcmVzIiwiZGlyZWN0aW9uIiwidHVyblJpZ2h0IiwidHVybkxlZnQiLCJzcXVhcmVzIiwiaGVpZ2h0RGlmZmVyZW5jZSIsIndpZHRoRGlmZmVyZW5jZSIsIm5ld0NvbCIsIm5ld1JvdyIsIm9sZFNxdWFyZXMiLCJuZXdTcXVhcmVzIiwiZmlsdGVyIiwiX2luY2x1ZGVzIiwiY29vcmRpbmF0ZUFycmF5IiwiYmVsb3dTcXVhcmUiLCJzaWRlU3F1YXJlcyIsImxlZnQiLCJyaWdodCIsImFkamFjZW50TGVmdCIsImFkamFjZW50UmlnaHQiLCJjb29yZGluYXRlUGFpciJdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7O1FBR0E7UUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNsRkE7QUFDQTs7SUFFcUJBLEs7Ozs7Ozs7OztxQ0FDQTtBQUNiLFVBQUlDLEtBQUssR0FBRyxFQUFaOztBQUNBLFdBQUssSUFBSUMsQ0FBQyxHQUFHLENBQWIsRUFBZ0JBLENBQUMsR0FBRyxFQUFwQixFQUF3QkEsQ0FBQyxFQUF6QixFQUE2QjtBQUN6QixZQUFJQyxHQUFHLEdBQUcsQ0FBQyxDQUFELEVBQUcsQ0FBSCxFQUFLLENBQUwsRUFBTyxDQUFQLEVBQVMsQ0FBVCxFQUFXLENBQVgsRUFBYSxDQUFiLEVBQWUsQ0FBZixFQUFpQixDQUFqQixFQUFtQixDQUFuQixDQUFWO0FBQ0FGLGFBQUssQ0FBQ0csSUFB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LCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiL2Rpc3QvXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2luZGV4LmpzXCIpO1xuIiwiaW1wb3J0IEhvbGRCb3ggZnJvbSAnLi9ob2xkYm94JztcbmltcG9ydCBOZXh0Qm94IGZyb20gJy4vbmV4dEJveCc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEZpZWxkIHsgICAgXG4gICAgX2dlbmVyYXRlRmllbGQoKSB7XG4gICAgICAgIGxldCBmaWVsZCA9IFtdO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IDIwOyBpKyspIHtcbiAgICAgICAgICAgIGxldCByb3cgPSBbMCwwLDAsMCwwLDAsMCwwLDAsMF07XG4gICAgICAgICAgICBmaWVsZC5wdXNoKHJvdyk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGZpZWxkO1xuICAgIH1cblxuICAgIC8vX2lzVmFsaWRNb3ZlXG5cbiAgICBfY3JlYXRlQ29sdW1uKCkge1xuICAgICAgICBsZXQgY29sdW1uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInVsXCIpO1xuICAgICAgICBjb2x1bW4uY2xhc3NMaXN0LmFkZChcImZpZWxkLWNvbHVtblwiKTtcblxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IDIwOyBpKyspIHtcbiAgICAgICAgICAgIGNvbHVtbi5hcHBlbmQoZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpXCIpKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gY29sdW1uO1xuICAgIH1cblxuICAgIF9jcmVhdGVGaWVsZCgpIHtcbiAgICAgICAgbGV0IGZpZWxkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgZmllbGQuY2xhc3NMaXN0LmFkZChcImZpZWxkLWJveFwiKTtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCAxMDsgaSsrKSB7XG4gICAgICAgICAgICBmaWVsZC5hcHBlbmRDaGlsZCh0aGlzLl9jcmVhdGVDb2x1bW4oKSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGZpZWxkO1xuICAgIH1cblxuICAgIGNyZWF0ZUZpZWxkV2l0aEhvbGRCb3hBbmROZXh0Qm94ZXMoY29udGFpbmVyKSB7XG4gICAgICAgIGxldCBuZXh0Qm94ID0gbmV3IE5leHRCb3goKTtcbiAgICAgICAgbGV0IGhvbGRCb3ggPSBuZXcgSG9sZEJveCgpO1xuICAgICAgICBjb250YWluZXIuYXBwZW5kKHRoaXMuX2NyZWF0ZUZpZWxkKCkpO1xuICAgICAgICBjb250YWluZXIuYXBwZW5kKG5leHRCb3guY3JlYXRlTmV4dEJveGVzKCkpO1xuICAgICAgICBjb250YWluZXIucHJlcGVuZChob2xkQm94LmNyZWF0ZUJveCgpKTtcbiAgICAgICAgcmV0dXJuIGNvbnRhaW5lcjtcbiAgICB9XG5cbn0iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBIb2xkQm94IHtcbiAgICBfY3JlYXRlQm94Q29sdW1uKCkge1xuICAgICAgICBsZXQgY29sdW1uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInVsXCIpO1xuICAgICAgICBjb2x1bW4uY2xhc3NMaXN0LmFkZChcImhvbGQtY29sdW1uXCIpO1xuXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgNDsgaSsrKSB7XG4gICAgICAgICAgICBjb2x1bW4uYXBwZW5kKGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaVwiKSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGNvbHVtbjtcbiAgICB9XG5cbiAgICBjcmVhdGVCb3goKSB7XG4gICAgICAgIGxldCBib3ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICBib3guY2xhc3NMaXN0LmFkZChcImhvbGQtYm94XCIpO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IDU7IGkrKykge1xuICAgICAgICAgICAgYm94LmFwcGVuZENoaWxkKHRoaXMuX2NyZWF0ZUJveENvbHVtbigpKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gYm94O1xuICAgIH1cbn0iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBOZXh0Qm94IHtcbiAgICBfY3JlYXRlTmV4dEJveENvbHVtbigpIHtcbiAgICAgICAgbGV0IGNvbHVtbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ1bFwiKTtcbiAgICAgICAgY29sdW1uLmNsYXNzTGlzdC5hZGQoXCJuZXh0LWNvbHVtblwiKTtcblxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IDQ7IGkrKykge1xuICAgICAgICAgICAgY29sdW1uLmFwcGVuZChkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIikpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBjb2x1bW47XG4gICAgfVxuXG4gICAgX2NyZWF0ZU5leHRCb3goKSB7XG4gICAgICAgIGxldCBib3ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICBib3guY2xhc3NMaXN0LmFkZChcIm5leHQtYm94XCIpO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IDU7IGkrKykge1xuICAgICAgICAgICAgYm94LmFwcGVuZENoaWxkKHRoaXMuX2NyZWF0ZU5leHRCb3hDb2x1bW4oKSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGJveDtcbiAgICB9XG5cbiAgICBjcmVhdGVOZXh0Qm94ZXMoKSB7XG4gICAgICAgIGxldCBib3hlcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIGJveGVzLmNsYXNzTGlzdC5hZGQoXCJuZXh0LWJveGVzXCIpO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IDU7IGkrKykge1xuICAgICAgICAgICAgYm94ZXMuYXBwZW5kQ2hpbGQodGhpcy5fY3JlYXRlTmV4dEJveCgpKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gYm94ZXM7XG4gICAgfVxufSIsImltcG9ydCBGaWVsZCBmcm9tICcuLi9maWVsZC9maWVsZCc7XG5pbXBvcnQgT1BpZWNlIGZyb20gJy4uL3BpZWNlcy9vUGllY2UnO1xuaW1wb3J0IElQaWVjZSBmcm9tICcuLi9waWVjZXMvaVBpZWNlJztcbmltcG9ydCBUUGllY2UgZnJvbSAnLi4vcGllY2VzL3RQaWVjZSc7XG5pbXBvcnQgU1BpZWNlIGZyb20gJy4uL3BpZWNlcy9zUGllY2UnO1xuaW1wb3J0IFpQaWVjZSBmcm9tICcuLi9waWVjZXMvelBpZWNlJztcbmltcG9ydCBMUGllY2UgZnJvbSAnLi4vcGllY2VzL2xQaWVjZSc7XG5pbXBvcnQgSlBpZWNlIGZyb20gJy4uL3BpZWNlcy9qUGllY2UnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBHYW1lIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5maWVsZCA9IHRoaXMuX3NldEZpZWxkKClcblxuICAgICAgICB0aGlzLmNvbG9ycyA9IHtcbiAgICAgICAgICAgIDE6IFwieWVsbG93XCIsXG4gICAgICAgICAgICAyOiBcImJsdWVcIixcbiAgICAgICAgICAgIDM6IFwicHVycGxlXCIsXG4gICAgICAgICAgICA0OiBcImdyZWVuXCIsXG4gICAgICAgICAgICA1OiBcInJlZFwiLFxuICAgICAgICAgICAgNjogXCJvcmFuZ2VcIixcbiAgICAgICAgICAgIDc6IFwiZGFyay1ibHVlXCJcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmN1cnJlbnRCYWcgPSB0aGlzLl9zaHVmZmxlQmFnKHRoaXMuX2dlbmVyYXRlQmFnKCkpO1xuICAgICAgICB0aGlzLmN1cnJlbnRQaWVjZSA9ICcnO1xuICAgICAgICB0aGlzLmhvbGRQaWVjZSA9ICcnO1xuICAgICAgICB0aGlzLmdob3N0UG9zaXRpb24gPSAnJztcbiAgICAgICAgdGhpcy5uZXh0QmFnID0gdGhpcy5fc2h1ZmZsZUJhZyh0aGlzLl9nZW5lcmF0ZUJhZygpKTtcblxuICAgICAgICAvLyBwcmV2ZW50cyBwbGF5ZXIgZnJvbSBob2xkaW5nIHBpZWNlIG11bHRpcGxlIHRpbWVzXG4gICAgICAgIHRoaXMuY2FuSG9sZCA9IHRydWU7XG5cbiAgICAgICAgdGhpcy5jbGVhckhhbmRsZTtcblxuICAgICAgICAvLyBmb3IgYW5pbWF0aW9uc1xuICAgICAgICB0aGlzLmRyb3BQaWVjZSA9IHRoaXMuZHJvcFBpZWNlLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMuZHJvcCA9IHRoaXMuZHJvcC5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLmZwcyA9ICcnO1xuICAgICAgICB0aGlzLmZwc0ludGVydmFsID0gJyc7XG4gICAgICAgIHRoaXMuc3RhcnRUaW1lID0gJyc7XG4gICAgICAgIHRoaXMubm93ID0gJyc7XG4gICAgICAgIHRoaXMudGhlbiA9ICcnO1xuXG4gICAgICAgIHRoaXMuaXNQYXVzZWQgPSBmYWxzZTtcblxuICAgIH1cblxuICAgIF9nZW5lcmF0ZUJhZygpIHtcbiAgICAgICAgbGV0IG9QaWVjZSA9IG5ldyBPUGllY2UoKTtcbiAgICAgICAgbGV0IGlQaWVjZSA9IG5ldyBJUGllY2UoKTtcbiAgICAgICAgbGV0IHRQaWVjZSA9IG5ldyBUUGllY2UoKTtcbiAgICAgICAgbGV0IHNQaWVjZSA9IG5ldyBTUGllY2UoKTtcbiAgICAgICAgbGV0IHpQaWVjZSA9IG5ldyBaUGllY2UoKTtcbiAgICAgICAgbGV0IGxQaWVjZSA9IG5ldyBMUGllY2UoKTtcbiAgICAgICAgbGV0IGpQaWVjZSA9IG5ldyBKUGllY2UoKTtcblxuICAgICAgICByZXR1cm4gW29QaWVjZSwgaVBpZWNlLCB0UGllY2UsIHNQaWVjZSwgelBpZWNlLCBsUGllY2UsIGpQaWVjZV07XG4gICAgfVxuXG4gICAgX3NldEZpZWxkKCkge1xuICAgICAgICBsZXQgZmllbGQgPSBuZXcgRmllbGQoKTtcbiAgICAgICAgcmV0dXJuIGZpZWxkLl9nZW5lcmF0ZUZpZWxkKCk7XG4gICAgfVxuXG4gICAgLy8gdGFrZSBwaWVjZSBmcm9tIGN1cnJlbnRCYWcgYW5kIHNldCBpdCBhcyB0aGUgY3VycmVudCBwaWVjZVxuICAgIF9zZXRDdXJyZW50UGllY2UoKSB7XG4gICAgICAgIHRoaXMuY3VycmVudFBpZWNlID0gdGhpcy5jdXJyZW50QmFnLnNoaWZ0KCk7XG4gICAgfVxuXG4gICAgLy8gcmVtb3ZlcyBvbGQgZ2hvc3QgcG9zaXRpb24gYmVmb3JlIHN3aXRjaGluZyB0byBhIG5ldyBvbmVcbiAgICBjbGVhckdob3N0UG9zaXRpb24oKSB7XG4gICAgICAgIGxldCBjb29yZGluYXRlQXJyYXlzID0gT2JqZWN0LnZhbHVlcyh0aGlzLmdob3N0UG9zaXRpb24pO1xuXG4gICAgICAgIGNvb3JkaW5hdGVBcnJheXMuZm9yRWFjaChhcnJheSA9PiB7XG4gICAgICAgICAgICBhcnJheS5mb3JFYWNoKGNvb3JkaW5hdGUgPT4ge1xuICAgICAgICAgICAgICAgIGxldCBbcm93LCBjb2xdID0gW2Nvb3JkaW5hdGVbMF0sIGNvb3JkaW5hdGVbMV1dO1xuICAgICAgICAgICAgICAgIHRoaXMuZmllbGRbcm93XVtjb2xdID0gMDtcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGNsZWFyR2hvc3RDbGFzcygpIHtcbiAgICAgICAgbGV0IGZpZWxkQ29sdW1ucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuZmllbGQtY29sdW1uXCIpO1xuICAgICAgICBsZXQgY29vcmRpbmF0ZUFycmF5cyA9IE9iamVjdC52YWx1ZXModGhpcy5naG9zdFBvc2l0aW9uKTtcblxuICAgICAgICBjb29yZGluYXRlQXJyYXlzLmZvckVhY2goYXJyYXkgPT4ge1xuICAgICAgICAgICAgYXJyYXkuZm9yRWFjaChjb29yZGluYXRlID0+IHtcbiAgICAgICAgICAgICAgICBsZXQgW3JvdywgY29sXSA9IFtjb29yZGluYXRlWzBdLCBjb29yZGluYXRlWzFdXTtcbiAgICAgICAgICAgICAgICBmaWVsZENvbHVtbnNbY29sXS5jaGlsZHJlbltyb3ddLmNsYXNzTGlzdCA9IHRoaXMuY29sb3JzW3RoaXMuY3VycmVudFBpZWNlLmNvbG9yQ29kZV07XG4gICAgICAgICAgICB9KVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBzZXRHaG9zdFBvc2l0aW9uKCkge1xuICAgICAgICBsZXQgZ2hvc3RQb3NpdGlvbiA9IHtcbiAgICAgICAgICAgIHRvcDogdGhpcy5jdXJyZW50UGllY2UucG9zaXRpb24udG9wLm1hcChjb29yZGluYXRlID0+IGNvb3JkaW5hdGUuc2xpY2UoKSksXG4gICAgICAgICAgICBtaWRkbGU6IHRoaXMuY3VycmVudFBpZWNlLnBvc2l0aW9uLm1pZGRsZS5tYXAoY29vcmRpbmF0ZSA9PiBjb29yZGluYXRlLnNsaWNlKCkpLFxuICAgICAgICAgICAgYm90dG9tOiB0aGlzLmN1cnJlbnRQaWVjZS5wb3NpdGlvbi5ib3R0b20ubWFwKGNvb3JkaW5hdGUgPT4gY29vcmRpbmF0ZS5zbGljZSgpKVxuICAgICAgICB9XG5cbiAgICAgICAgbGV0IHN0b3BwZWQgPSBmYWxzZTtcbiAgICAgICAgd2hpbGUgKCFzdG9wcGVkKSB7XG4gICAgICAgICAgICBsZXQgaGFuZ2luZ1NxdWFyZXMgPSB0aGlzLmN1cnJlbnRQaWVjZS5oYW5naW5nU3F1YXJlcyhnaG9zdFBvc2l0aW9uKTtcbiAgICAgICAgICAgIGhhbmdpbmdTcXVhcmVzLmZvckVhY2goY29vcmRpbmF0ZSA9PiB7XG4gICAgICAgICAgICAgICAgbGV0IFtyb3csIGNvbF0gPSBbY29vcmRpbmF0ZVswXSwgY29vcmRpbmF0ZVsxXV07XG4gICAgICAgICAgICAgICAgaWYgKHJvdyArIDEgPT09IDIwIHx8IHRoaXMuZmllbGRbcm93ICsgMV1bY29sXSkgc3RvcHBlZCA9IHRydWU7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGlmIChzdG9wcGVkKSBicmVhaztcbiAgICAgICAgICAgIGdob3N0UG9zaXRpb24udG9wID0gZ2hvc3RQb3NpdGlvbi50b3AubWFwKGFycmF5ID0+IFthcnJheVswXSArIDEsIGFycmF5WzFdXSk7XG4gICAgICAgICAgICBnaG9zdFBvc2l0aW9uLm1pZGRsZSA9IGdob3N0UG9zaXRpb24ubWlkZGxlLm1hcChhcnJheSA9PiBbYXJyYXlbMF0gKyAxLCBhcnJheVsxXV0pO1xuICAgICAgICAgICAgZ2hvc3RQb3NpdGlvbi5ib3R0b20gPSBnaG9zdFBvc2l0aW9uLmJvdHRvbS5tYXAoYXJyYXkgPT4gW2FycmF5WzBdICsgMSwgYXJyYXlbMV1dKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmdob3N0UG9zaXRpb24gPSBnaG9zdFBvc2l0aW9uO1xuICAgICAgICB0aGlzLl9wb3B1bGF0ZUdob3N0UG9zaXRpb24oKTtcbiAgICB9XG5cbiAgICBfcG9wdWxhdGVHaG9zdFBvc2l0aW9uKCkge1xuICAgICAgICBsZXQgY29vcmRpbmF0ZUFycmF5cyA9IE9iamVjdC52YWx1ZXModGhpcy5naG9zdFBvc2l0aW9uKTtcblxuICAgICAgICBjb29yZGluYXRlQXJyYXlzLmZvckVhY2goYXJyYXkgPT4ge1xuICAgICAgICAgICAgYXJyYXkuZm9yRWFjaChjb29yZGluYXRlID0+IHtcbiAgICAgICAgICAgICAgICBsZXQgW3JvdywgY29sXSA9IFtjb29yZGluYXRlWzBdLCBjb29yZGluYXRlWzFdXTtcbiAgICAgICAgICAgICAgICB0aGlzLmZpZWxkW3Jvd11bY29sXSA9IFwieFwiO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMucmVuZGVyKCk7XG4gICAgfVxuXG4gICAgcG9wdWxhdGVGaWVsZChwaWVjZSkge1xuICAgICAgICBsZXQgY29vcmRpbmF0ZUFycmF5cyA9IE9iamVjdC52YWx1ZXMocGllY2UucG9zaXRpb24pO1xuICAgICAgICBjb29yZGluYXRlQXJyYXlzLmZvckVhY2goYXJyYXkgPT4ge1xuICAgICAgICAgICAgYXJyYXkuZm9yRWFjaChjb29yZGluYXRlID0+IHtcbiAgICAgICAgICAgICAgICBsZXQgW3JvdywgY29sXSA9IFtjb29yZGluYXRlWzBdLCBjb29yZGluYXRlWzFdXTtcbiAgICAgICAgICAgICAgICB0aGlzLmZpZWxkW3Jvd11bY29sXSA9IHBpZWNlLmNvbG9yQ29kZTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH0pO1xuXG4gICAgICAgIHBpZWNlLnJlbW92ZVNxdWFyZXMuZm9yRWFjaChwb3NpdGlvbkFycmF5ID0+IHtcbiAgICAgICAgICAgIGxldCBbcm93LCBjb2xdID0gW3Bvc2l0aW9uQXJyYXlbMF0sIHBvc2l0aW9uQXJyYXlbMV1dO1xuICAgICAgICAgICAgdGhpcy5maWVsZFtyb3ddW2NvbF0gPSAwO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICAvLyBob2xkIHBpZWNlIGZvciBsYXRlciB1c2UgXG4gICAgaG9sZCgpIHtcbiAgICAgICAgaWYgKCF0aGlzLmNhbkhvbGQpIHJldHVybjtcblxuICAgICAgICB0aGlzLmN1cnJlbnRQaWVjZS5jbGVhclNlbGZGcm9tQm9hcmQodGhpcy5maWVsZCk7IFxuXG4gICAgICAgIHRoaXMucmVuZGVyKCk7XG5cbiAgICAgICAgaWYgKHRoaXMuaG9sZFBpZWNlID09PSAnJykge1xuICAgICAgICAgICAgLy8gcGFzcyBjdXJyZW50IHBpZWNlIG5hbWUgaW50byBnZW5lcmF0ZSBwaWVjZSBpbiBvcmRlciB0byBnZW5lcmF0ZSBhIG5ldyBwaWVjZSBpbnN0YW5jZVxuICAgICAgICAgICAgdGhpcy5ob2xkUGllY2UgPSB0aGlzLl9nZW5lcmF0ZVBpZWNlKHRoaXMuY3VycmVudFBpZWNlLm5hbWUpO1xuICAgICAgICAgICAgdGhpcy5fc2V0Q3VycmVudFBpZWNlKCk7XG4gICAgICAgICAgICAvLyByZS1yZW5kZXIgbmV4dCBib3hlcyB0byBhcHByb3ByaWF0ZWx5IHNob3cgY3VycmVudCBiYWdcbiAgICAgICAgICAgIHRoaXMuX3Nob3dDdXJyZW50QmFnKCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmN1cnJlbnRQaWVjZSA9IHRoaXMuX2dlbmVyYXRlUGllY2UodGhpcy5jdXJyZW50UGllY2UubmFtZSk7XG4gICAgICAgICAgICBbdGhpcy5jdXJyZW50UGllY2UsIHRoaXMuaG9sZFBpZWNlXSA9IFt0aGlzLmhvbGRQaWVjZSwgdGhpcy5jdXJyZW50UGllY2VdO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuY2FuSG9sZCA9IGZhbHNlO1xuXG4gICAgICAgIHRoaXMuX3BvcHVsYXRlSG9sZEJveCgpO1xuICAgIH1cblxuICAgIF9wb3B1bGF0ZUhvbGRCb3goKSB7XG4gICAgICAgIGxldCBjb2x1bW5zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5ob2xkLWJveFwiKS5jaGlsZHJlbjtcblxuICAgICAgICAvLyByZW1vdmUgY29sb3JzIGZyb20gcHJldmlvdXMgcGllY2VzXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgNTsgaSsrKSB7XG4gICAgICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IDQ7IGorKykge1xuICAgICAgICAgICAgICAgIC8vIGNvbHVtbnMuY2hpbGRyZW4gaXMgbm9kZWxpc3Qgb2YgPGxpcz5cbiAgICAgICAgICAgICAgICBjb2x1bW5zW2ldLmNoaWxkcmVuW2pdLmNsYXNzTmFtZSA9IFwiXCI7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmhvbGRQaWVjZS5kaXNwbGF5U3F1YXJlcy5mb3JFYWNoKHNxdWFyZSA9PiB7XG4gICAgICAgICAgICBsZXQgW2NvbCwgcm93XSA9IFtzcXVhcmVbMF0sIHNxdWFyZVsxXV07XG4gICAgICAgICAgICBjb2x1bW5zW2NvbF0uY2hpbGRyZW5bcm93XS5jbGFzc0xpc3QuYWRkKHRoaXMuY29sb3JzW3RoaXMuaG9sZFBpZWNlLmNvbG9yQ29kZV0pO1xuICAgICAgICB9KVxuXG4gICAgfVxuXG4gICAgLy8gdXNlZCBmb3IgdGhpcy5ob2xkKCk6IGdlbmVyYXRlIGEgbmV3IHBpZWNlIHNvIHRoYXQgYSBob2xkcGllY2UgdGhhdCBpcyByZS1yZW5kZXJlZCBvbiB0aGUgYm9hcmQgd2lsbCBub3Qgc3RhcnQgZnJvbSB0aGUgb2xkIHBvc2l0aW9uXG4gICAgX2dlbmVyYXRlUGllY2UocGllY2VOYW1lKSB7XG4gICAgICAgIHN3aXRjaChwaWVjZU5hbWUpIHtcbiAgICAgICAgICAgIGNhc2UgXCJUUGllY2VcIjpcbiAgICAgICAgICAgICAgICByZXR1cm4gbmV3IFRQaWVjZTtcbiAgICAgICAgICAgIGNhc2UgXCJPUGllY2VcIjpcbiAgICAgICAgICAgICAgICByZXR1cm4gbmV3IE9QaWVjZTtcbiAgICAgICAgICAgIGNhc2UgXCJJUGllY2VcIjpcbiAgICAgICAgICAgICAgICByZXR1cm4gbmV3IElQaWVjZTtcbiAgICAgICAgICAgIGNhc2UgXCJMUGllY2VcIjpcbiAgICAgICAgICAgICAgICByZXR1cm4gbmV3IExQaWVjZTtcbiAgICAgICAgICAgIGNhc2UgXCJKUGllY2VcIjpcbiAgICAgICAgICAgICAgICByZXR1cm4gbmV3IEpQaWVjZTtcbiAgICAgICAgICAgIGNhc2UgXCJTUGllY2VcIjpcbiAgICAgICAgICAgICAgICByZXR1cm4gbmV3IFNQaWVjZTtcbiAgICAgICAgICAgIGNhc2UgXCJaUGllY2VcIjpcbiAgICAgICAgICAgICAgICByZXR1cm4gbmV3IFpQaWVjZTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8vIHRha2Ugb25lIHBpZWNlIGZyb20gbmV4dEJhZyBhbmQgYWRkIHRvIGN1cnJlbnRCYWdcbiAgICBfYWRkVG9DdXJyZW50QmFnKCkge1xuICAgICAgICB0aGlzLmN1cnJlbnRCYWcucHVzaCh0aGlzLm5leHRCYWcuc2hpZnQoKSk7XG4gICAgfVxuXG4gICAgX3Nob3dDdXJyZW50QmFnKCkge1xuICAgICAgICBsZXQgYm94ZXMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwibmV4dC1ib3hcIik7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgNTsgaSsrKSB7XG4gICAgICAgICAgICB0aGlzLl9wb3B1bGF0ZU5leHRCb3goYm94ZXNbaV0sIHRoaXMuY3VycmVudEJhZ1tpXSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBfcG9wdWxhdGVOZXh0Qm94KGJveCwgcGllY2UpIHtcbiAgICAgICAgLy8gY29sdW1ucyBpcyBub2RlbGlzdCBvZiA8dWxzPlxuICAgICAgICBsZXQgY29sdW1ucyA9IGJveC5jaGlsZHJlbjtcblxuICAgICAgICAvLyByZW1vdmUgY29sb3JzIGZyb20gcHJldmlvdXMgcGllY2VzXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgNTsgaSsrKSB7XG4gICAgICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IDQ7IGorKykge1xuICAgICAgICAgICAgICAgIC8vIGNvbHVtbnMuY2hpbGRyZW4gaXMgbm9kZWxpc3Qgb2YgPGxpcz5cbiAgICAgICAgICAgICAgICBjb2x1bW5zW2ldLmNoaWxkcmVuW2pdLmNsYXNzTmFtZSA9IFwiXCI7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBwaWVjZS5kaXNwbGF5U3F1YXJlcy5mb3JFYWNoKHNxdWFyZSA9PiB7XG4gICAgICAgICAgICBsZXQgW2NvbCwgcm93XSA9IFtzcXVhcmVbMF0sIHNxdWFyZVsxXV07XG4gICAgICAgICAgICBjb2x1bW5zW2NvbF0uY2hpbGRyZW5bcm93XS5jbGFzc0xpc3QuYWRkKHRoaXMuY29sb3JzW3BpZWNlLmNvbG9yQ29kZV0pO1xuICAgICAgICB9KVxuICAgIH1cblxuICAgIC8vIHJlZmlsbCBuZXh0IGJhZywgd2lsbCBvbmx5IGJlIGNhbGxlZCBvbmNlIG5leHRCYWcgYmVjb21lcyBlbXB0eVxuICAgIF9yZWZpbGxOZXh0QmFnKCkge1xuICAgICAgICB0aGlzLm5leHRCYWcgPSB0aGlzLl9nZW5lcmF0ZUJhZygpO1xuICAgIH1cblxuICAgIC8vIGltcGxlbWVudGF0aW9uIG9mIHNodWZmbGUgZm91bmQgb24gaHR0cHM6Ly9zdGFja292ZXJmbG93LmNvbS9xdWVzdGlvbnMvMjQ1MDk1NC9ob3ctdG8tcmFuZG9taXplLXNodWZmbGUtYS1qYXZhc2NyaXB0LWFycmF5IzI0NTA5NzZcbiAgICBfc2h1ZmZsZUJhZyhiYWcpIHtcbiAgICAgICAgdmFyIGN1cnJlbnRJbmRleCA9IGJhZy5sZW5ndGgsIHRlbXBvcmFyeVZhbHVlLCByYW5kb21JbmRleDtcblxuICAgICAgICAvLyBXaGlsZSB0aGVyZSByZW1haW4gZWxlbWVudHMgdG8gc2h1ZmZsZS4uLlxuICAgICAgICB3aGlsZSAoMCAhPT0gY3VycmVudEluZGV4KSB7XG5cbiAgICAgICAgICAgIC8vIFBpY2sgYSByZW1haW5pbmcgZWxlbWVudC4uLlxuICAgICAgICAgICAgcmFuZG9tSW5kZXggPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBjdXJyZW50SW5kZXgpO1xuICAgICAgICAgICAgY3VycmVudEluZGV4IC09IDE7XG5cbiAgICAgICAgICAgIC8vIEFuZCBzd2FwIGl0IHdpdGggdGhlIGN1cnJlbnQgZWxlbWVudC5cbiAgICAgICAgICAgIHRlbXBvcmFyeVZhbHVlID0gYmFnW2N1cnJlbnRJbmRleF07XG4gICAgICAgICAgICBiYWdbY3VycmVudEluZGV4XSA9IGJhZ1tyYW5kb21JbmRleF07XG4gICAgICAgICAgICBiYWdbcmFuZG9tSW5kZXhdID0gdGVtcG9yYXJ5VmFsdWU7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGJhZztcbiAgICB9XG4gICAgLy8gaW1wbGVtZW50YXRpb24gb2Ygc2h1ZmZsZSBmb3VuZCBvbiBodHRwczovL3N0YWNrb3ZlcmZsb3cuY29tL3F1ZXN0aW9ucy8yNDUwOTU0L2hvdy10by1yYW5kb21pemUtc2h1ZmZsZS1hLWphdmFzY3JpcHQtYXJyYXkjMjQ1MDk3NlxuXG4gICAgX2dhbWVPdmVyKCkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgLy8gbG9vayB0aHJvdWdoIGZpZWxkLCBpZiBmaWVsZFtyb3ddW2NvbF0gY29udGFpbnMgYSBudW1iZXIgPiAwLCBmaWxsIHRoYXQgc3BvdCB3aXRoIHRoZSByZXNwZWN0aXZlIGNvbG9yLiBFbHNlLCByZW1vdmUgY29sb3JcbiAgICByZW5kZXIoKSB7XG4gICAgICAgIGxldCBmaWVsZENvbHVtbnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmZpZWxkLWNvbHVtblwiKTtcbiAgICAgICAgdGhpcy5maWVsZC5mb3JFYWNoKChyb3csIHJvd0lkeCkgPT4ge1xuICAgICAgICAgICAgcm93LmZvckVhY2goKGNvbCwgY29sSWR4KSA9PiB7XG4gICAgICAgICAgICAgICAgbGV0IHNxdWFyZVZhbHVlID0gdGhpcy5maWVsZFtyb3dJZHhdW2NvbElkeF07XG4gICAgICAgICAgICAgICAgaWYgKHNxdWFyZVZhbHVlID09PSAneCcpIHtcbiAgICAgICAgICAgICAgICAgICAgZmllbGRDb2x1bW5zW2NvbElkeF0uY2hpbGRyZW5bcm93SWR4XS5jbGFzc0xpc3QuYWRkKGB4LSR7dGhpcy5jb2xvcnNbdGhpcy5jdXJyZW50UGllY2UuY29sb3JDb2RlXX1gKTtcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHNxdWFyZVZhbHVlKSB7XG4gICAgICAgICAgICAgICAgICAgIGZpZWxkQ29sdW1uc1tjb2xJZHhdLmNoaWxkcmVuW3Jvd0lkeF0uY2xhc3NMaXN0LmFkZCh0aGlzLmNvbG9yc1tzcXVhcmVWYWx1ZV0pO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIE9iamVjdC52YWx1ZXModGhpcy5jb2xvcnMpLmZvckVhY2goY29sb3IgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgZmllbGRDb2x1bW5zW2NvbElkeF0uY2hpbGRyZW5bcm93SWR4XS5jbGFzc0xpc3QucmVtb3ZlKGNvbG9yKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZpZWxkQ29sdW1uc1tjb2xJZHhdLmNoaWxkcmVuW3Jvd0lkeF0uY2xhc3NMaXN0LnJlbW92ZShgeC0ke2NvbG9yfWApO1xuICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBrZXlMaXN0ZW5lcigpIHtcbiAgICAgICAgZG9jdW1lbnQuYm9keS5hZGRFdmVudExpc3RlbmVyKFwia2V5ZG93blwiLCBldmVudCA9PiB7XG4gICAgICAgICAgICB0aGlzLmN1cnJlbnRQaWVjZS5zZXRMZWZ0TW9zdEFuZFJpZ2h0TW9zdCgpO1xuICAgICAgICAgICAgdGhpcy5jbGVhckdob3N0UG9zaXRpb24oKTtcbiAgICAgICAgICAgIHN3aXRjaChldmVudC53aGljaCkge1xuICAgICAgICAgICAgICAgIC8vIHVwIGtleVxuICAgICAgICAgICAgICAgIGNhc2UgMzg6XG4gICAgICAgICAgICAgICAgICAgIC8vIHBhc3MgZmllbGQgc28gcGllY2UgY2FuIGNoZWNrIGZpZWxkIHdhbGwgYmVmb3JlIHR1cm5pbmdcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jdXJyZW50UGllY2UubW92ZShcInVwXCIsIHRoaXMuZmllbGQpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnBvcHVsYXRlRmllbGQodGhpcy5jdXJyZW50UGllY2UpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnNldEdob3N0UG9zaXRpb24oKTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgLy8gQyBrZXlcbiAgICAgICAgICAgICAgICBjYXNlIDY3OlxuICAgICAgICAgICAgICAgICAgICAvLyBwYXNzIGZpZWxkIHNvIHBpZWNlIGNhbiBjaGVjayBmaWVsZCB3YWxsIGJlZm9yZSB0dXJuaW5nXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY3VycmVudFBpZWNlLm1vdmUoXCJDXCIsIHRoaXMuZmllbGQpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnBvcHVsYXRlRmllbGQodGhpcy5jdXJyZW50UGllY2UpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnNldEdob3N0UG9zaXRpb24oKTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgLy8gcmlnaHQga2V5XG4gICAgICAgICAgICAgICAgY2FzZSAzOTpcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuY3VycmVudFBpZWNlLnJpZ2h0U2lkZUJsb2NrZWQodGhpcy5maWVsZCkpe1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRHaG9zdFBvc2l0aW9uKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgfSBcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jdXJyZW50UGllY2UubW92ZShcInJpZ2h0XCIpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnBvcHVsYXRlRmllbGQodGhpcy5jdXJyZW50UGllY2UpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnNldEdob3N0UG9zaXRpb24oKTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgLy8gZG93biBrZXlcbiAgICAgICAgICAgICAgICBjYXNlIDQwOlxuICAgICAgICAgICAgICAgICAgICBpZiAoIXRoaXMuY3VycmVudFBpZWNlLmlzRmFsbGluZyh0aGlzLmZpZWxkKSkgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY3VycmVudFBpZWNlLm1vdmUoXCJkb3duXCIpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnBvcHVsYXRlRmllbGQodGhpcy5jdXJyZW50UGllY2UpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnNldEdob3N0UG9zaXRpb24oKTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgLy8gbGVmdCBrZXlcbiAgICAgICAgICAgICAgICBjYXNlIDM3OlxuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5jdXJyZW50UGllY2UubGVmdFNpZGVCbG9ja2VkKHRoaXMuZmllbGQpKXtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0R2hvc3RQb3NpdGlvbigpO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIH0gXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY3VycmVudFBpZWNlLm1vdmUoXCJsZWZ0XCIpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnBvcHVsYXRlRmllbGQodGhpcy5jdXJyZW50UGllY2UpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnNldEdob3N0UG9zaXRpb24oKTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgLy8gc2hpZnQga2V5XG4gICAgICAgICAgICAgICAgY2FzZSAxNjogXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuaG9sZCgpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnBvcHVsYXRlRmllbGQodGhpcy5jdXJyZW50UGllY2UpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnNldEdob3N0UG9zaXRpb24oKTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgLy8gc3BhY2UgYmFyXG4gICAgICAgICAgICAgICAgY2FzZSAzMjpcbiAgICAgICAgICAgICAgICAgICAgLy8gdGhpcy5yZW5kZXIoKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jdXJyZW50UGllY2UuaGFyZERyb3AodGhpcy5maWVsZCk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMucmVuZGVyKCk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMucG9wdWxhdGVGaWVsZCh0aGlzLmN1cnJlbnRQaWVjZSk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuaGFuZGxlUGllY2VTdG9wKHRoaXMuY2xlYXJIYW5kbGUpO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAvLyBQIGtleVxuICAgICAgICAgICAgICAgIGNhc2UgODA6XG4gICAgICAgICAgICAgICAgICAgIC8vIHRoaXMucmVuZGVyKCk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuaXNQYXVzZWQgPyB0aGlzLmRyb3BQaWVjZSgxLjUpIDogY2FuY2VsQW5pbWF0aW9uRnJhbWUodGhpcy5jbGVhckhhbmRsZSk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuaXNQYXVzZWQgPSAhdGhpcy5pc1BhdXNlZDtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRHaG9zdFBvc2l0aW9uKCk7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0R2hvc3RQb3NpdGlvbigpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc29sZS5sb2codGhpcy5jdXJyZW50UGllY2UpO1xuICAgICAgICAgICAgdGhpcy5jdXJyZW50UGllY2Uuc2V0TGVmdE1vc3RBbmRSaWdodE1vc3QoKTtcbiAgICAgICAgICAgIC8vIG1lc3NlcyB1cCB3aXRoIHBpZWNlIGNvbG9yXG4gICAgICAgICAgICAvLyB0aGlzLnBvcHVsYXRlRmllbGQodGhpcy5jdXJyZW50UGllY2UpO1xuICAgICAgICAgICAgdGhpcy5yZW5kZXIoKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgY2xlYXJMaW5lcyhsb3dlc3QsIGhpZ2hlc3QpIHtcbiAgICAgICAgLy8gYmFzZSBjYXNlOiBpZiB3ZSByZWFjaCBhIHJvdyB0aGF0IGlzIGhpZ2hlciB0aGFuIHRoZSBoaWdoZXN0LCB0aGVuIGV4aXRcbiAgICAgICAgaWYgKGxvd2VzdCA8IGhpZ2hlc3QpIHJldHVybjtcbiAgICAgICAgLy8gcmVjdXJzaXZlIGNhc2U6IFxuICAgICAgICAvLyBpZiBsb3dlc3Qgcm93IGRvZXMgbm90IGNvbnRhaW4gYSAwLCBicmluZyBhbGwgYWJvdmUgcm93cyBkb3duIG9uZSBsZXZlbFxuICAgICAgICBpZiAoIXRoaXMuZmllbGRbbG93ZXN0XS5pbmNsdWRlcygwKSkge1xuICAgICAgICAgICAgdGhpcy5fYnJpbmdEb3duRmllbGQobG93ZXN0KTtcbiAgICAgICAgICAgIC8vIGNhbGwgcmVjdXJzaXZlQ2xlYXIobG93ZXN0LCBoaWdoZXN0ICsgMSk7XG4gICAgICAgICAgICB0aGlzLmNsZWFyTGluZXMobG93ZXN0LCBoaWdoZXN0ICsgMSlcbiAgICAgICAgLy8gaWYgcncgY29udGFpbnMgYSAwIFxuICAgICAgICAvLyBjYWxsIENsZWFyTGluZXMobG93ZXN0IC0gMSwgaGlnaGVzdClcbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLmZpZWxkW2xvd2VzdF0uaW5jbHVkZXMoMCkpIHtcbiAgICAgICAgICAgIHRoaXMuY2xlYXJMaW5lcyhsb3dlc3QgLSAxLCBoaWdoZXN0KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIF9icmluZ0Rvd25GaWVsZChzdGFydGluZ1Jvdykge1xuICAgICAgICBmb3IgKGxldCBpID0gc3RhcnRpbmdSb3c7IGkgPiAwOyBpLS0pIHtcbiAgICAgICAgICAgIHRoaXMuZmllbGRbaV0gPSB0aGlzLmZpZWxkW2kgLSAxXTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmZpZWxkWzBdID0gWzAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDBdO1xuICAgIH1cblxuICAgIGhhbmRsZVBpZWNlU3RvcChjbGVhcikgeyAgICAgXG4gICAgICAgIC8vIGFsbG93IHBsYXllciB0byBob2xkIHBpZWNlIGFnYWluXG4gICAgICAgIHRoaXMuY2FuSG9sZCA9IHRydWU7XG4gICAgICAgIGxldCBsb3dlc3QgPSB0aGlzLmN1cnJlbnRQaWVjZS5wb3NpdGlvbi5ib3R0b21bMF1bMF07XG4gICAgICAgIC8vIGluIGNhc2Ugb2YgbGluZSBwaWVjZSwgd2hpY2ggbWF5IG5vdCBoYXZlIHRoaXMucG9zaXRpb24udG9wXG4gICAgICAgIGxldCBoaWdoZXN0ID0gIXRoaXMuY3VycmVudFBpZWNlLnBvc2l0aW9uLnRvcC5sZW5ndGggPyBsb3dlc3QgOiB0aGlzLmN1cnJlbnRQaWVjZS5wb3NpdGlvbi50b3BbMF1bMF07XG4gICAgICAgIHRoaXMuY2xlYXJMaW5lcyhsb3dlc3QsIGhpZ2hlc3QpO1xuICAgICAgICB0aGlzLmNsZWFyR2hvc3RDbGFzcygpO1xuICAgICAgICBjYW5jZWxBbmltYXRpb25GcmFtZSh0aGlzLmNsZWFySGFuZGxlKTtcbiAgICAgICAgdGhpcy5wbGF5KCk7XG4gICAgfVxuXG4gICAgZHJvcFBpZWNlKGZwcykge1xuICAgICAgICAvLyBEbyB3aGF0ZXZlclxuICAgICAgICB0aGlzLmZwc0ludGVydmFsID0gMTAwMCAvIGZwcztcbiAgICAgICAgdGhpcy50aGVuID0gRGF0ZS5ub3coKTtcbiAgICAgICAgdGhpcy5zdGFydFRpbWUgPSB0aGlzLnRoZW47XG4gICAgICAgIHRoaXMuZHJvcCgpO1xuICAgIH1cblxuICAgIC8vIGluc3BpcmF0aW9uIGZvciB0aHJvdHRsaW5nIHJlcXVlc3RBbmltYXRpb25GcmFtZSBmcm9tIGh0dHBzOi8vc3RhY2tvdmVyZmxvdy5jb20vcXVlc3Rpb25zLzE5NzY0MDE4L2NvbnRyb2xsaW5nLWZwcy13aXRoLXJlcXVlc3RhbmltYXRpb25mcmFtZVxuICAgIGRyb3AoKSB7XG4gICAgICAgIHRoaXMuY2xlYXJIYW5kbGUgPSByZXF1ZXN0QW5pbWF0aW9uRnJhbWUodGhpcy5kcm9wKTtcbiAgICAgICAgdGhpcy5ub3cgPSBEYXRlLm5vdygpO1xuICAgICAgICBsZXQgZWxhcHNlZCA9IHRoaXMubm93IC0gdGhpcy50aGVuO1xuICAgICAgICBpZiAoZWxhcHNlZCA+IHRoaXMuZnBzSW50ZXJ2YWwpIHtcbiAgICAgICAgICAgIC8vIEdldCByZWFkeSBmb3IgbmV4dCBmcmFtZSBieSBzZXR0aW5nIHRoZW49bm93LCBhZGp1c3RpbmcgZm9yIHNwZWNpZmllZCBmcHNJbnRlcnZhbCBub3QgYmVpbmcgYSBtdWx0aXBsZSBvZiBSQUYncyBpbnRlcnZhbCAoMTYuN21zKVxuICAgICAgICAgICAgdGhpcy50aGVuID0gdGhpcy5ub3cgLSAoZWxhcHNlZCAlIHRoaXMuZnBzSW50ZXJ2YWwpO1xuXG4gICAgICAgICAgICB0aGlzLnBvcHVsYXRlRmllbGQodGhpcy5jdXJyZW50UGllY2UpO1xuICAgICAgICAgICAgdGhpcy5yZW5kZXIoKTtcbiAgICAgICAgICAgIGlmICghdGhpcy5jdXJyZW50UGllY2UuaXNGYWxsaW5nKHRoaXMuZmllbGQpKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5oYW5kbGVQaWVjZVN0b3AodGhpcy5jbGVhckhhbmRsZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLmN1cnJlbnRQaWVjZS5kcm9wKCk7XG4gICAgICAgICAgICB0aGlzLnBvcHVsYXRlRmllbGQodGhpcy5jdXJyZW50UGllY2UpOyAvLyBrZWVwIG9ubHkgb25lIHBvcHVsYXRlIGZpZWxkP1xuICAgICAgICAgICAgdGhpcy5yZW5kZXIoKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBcbiAgICBwbGF5KCkge1xuICAgICAgICB0aGlzLl9zZXRDdXJyZW50UGllY2UoKTtcbiAgICAgICAgdGhpcy5wb3B1bGF0ZUZpZWxkKHRoaXMuY3VycmVudFBpZWNlKTtcbiAgICAgICAgdGhpcy5fYWRkVG9DdXJyZW50QmFnKCk7XG4gICAgICAgIHRoaXMuX3Nob3dDdXJyZW50QmFnKCk7XG4gICAgICAgIGlmICghdGhpcy5uZXh0QmFnLmxlbmd0aCkgdGhpcy5fcmVmaWxsTmV4dEJhZygpO1xuICAgICAgICB0aGlzLnNldEdob3N0UG9zaXRpb24oKTtcbiAgICAgICAgLy8gZHJvcCBwaWVjZSBhdCA0IGZwc1xuICAgICAgICB0aGlzLmRyb3BQaWVjZSgxLjUpO1xuICAgIH1cblxufSIsImltcG9ydCBHYW1lIGZyb20gJy4vZ2FtZS9nYW1lJztcbmltcG9ydCBGaWVsZCBmcm9tICcuL2ZpZWxkL2ZpZWxkJztcblxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIiwgKCkgPT4ge1xuICAgIGNvbnN0IGZpZWxkQ29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJmaWVsZC1jb250YWluZXJcIik7XG5cbiAgICBsZXQgZmllbGQgPSBuZXcgRmllbGQoKTtcbiAgICBmaWVsZC5jcmVhdGVGaWVsZFdpdGhIb2xkQm94QW5kTmV4dEJveGVzKGZpZWxkQ29udGFpbmVyKTtcblxuICAgIGxldCBnYW1lID0gbmV3IEdhbWUoKTtcbiAgICBnYW1lLmtleUxpc3RlbmVyKCk7XG4gICAgZ2FtZS5wbGF5KGZpZWxkQ29udGFpbmVyKTtcblxufSk7IiwiaW1wb3J0IFBpZWNlIGZyb20gJy4vcGllY2UnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBJUGllY2UgZXh0ZW5kcyBQaWVjZSB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIHRoaXMubmFtZSA9IFwiSVBpZWNlXCI7XG4gICAgICAgIHRoaXMucG9zaXRpb24gPSB7XG4gICAgICAgICAgICB0b3A6IFtdLFxuICAgICAgICAgICAgbWlkZGxlOiBbXSxcbiAgICAgICAgICAgIGJvdHRvbTogW1sxLCAzXSwgWzEsIDRdLCBbMSwgNV0sIFsxLCA2XV1cbiAgICAgICAgfTtcbiAgICAgICAgdGhpcy5jb2xvckNvZGUgPSAyO1xuICAgICAgICB0aGlzLnR1cm5pbmdQb2ludCA9IFsxLCA1XTtcbiAgICAgICAgdGhpcy5kaXNwbGF5U3F1YXJlcyA9IFtbMCwgMl0sIFsxLCAyXSwgWzIsIDJdLCBbMywgMl1dO1xuXG4gICAgICAgIHRoaXMucmVtb3ZlU3F1YXJlcyA9IFtdO1xuICAgIH1cblxuXG59XG5cblxuIiwiaW1wb3J0IFBpZWNlIGZyb20gJy4vcGllY2UnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBqUGllY2UgZXh0ZW5kcyBQaWVjZSB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIHRoaXMubmFtZSA9IFwiSlBpZWNlXCI7XG4gICAgICAgIHRoaXMucG9zaXRpb24gPSB7XG4gICAgICAgICAgICB0b3A6IFtbMCwgM11dLFxuICAgICAgICAgICAgbWlkZGxlOiBbXSxcbiAgICAgICAgICAgIGJvdHRvbTogW1sxLCAzXSwgWzEsIDRdLCBbMSwgNV1dXG4gICAgICAgIH07XG4gICAgICAgIHRoaXMuY29sb3JDb2RlID0gNztcblxuICAgICAgICB0aGlzLnR1cm5pbmdQb2ludCA9IFsxLCA0XTtcblxuICAgICAgICB0aGlzLmRpc3BsYXlTcXVhcmVzID0gW1sxLCAxXSwgWzEsIDJdLCBbMiwgMl0sIFszLCAyXV07XG4gXG4gICAgICAgIHRoaXMucmVtb3ZlU3F1YXJlcyA9IFtdO1xuICAgIH1cbn0iLCJpbXBvcnQgUGllY2UgZnJvbSAnLi9waWVjZSc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIGxQaWVjZSBleHRlbmRzIFBpZWNlIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgdGhpcy5uYW1lID0gXCJMUGllY2VcIjtcbiAgICAgICAgdGhpcy5wb3NpdGlvbiA9IHtcbiAgICAgICAgICAgIHRvcDogW1swLCA1XV0sXG4gICAgICAgICAgICBtaWRkbGU6IFtdLFxuICAgICAgICAgICAgYm90dG9tOiBbWzEsIDNdLCBbMSwgNF0sIFsxLCA1XV1cbiAgICAgICAgfTtcbiAgICAgICAgdGhpcy5jb2xvckNvZGUgPSA2O1xuXG4gICAgICAgIHRoaXMudHVybmluZ1BvaW50ID0gWzEsIDRdO1xuXG4gICAgICAgIHRoaXMuZGlzcGxheVNxdWFyZXMgPSBbWzEsIDJdLCBbMiwgMl0sIFszLCAyXSwgWzMsIDFdXTtcblxuICAgICAgICB0aGlzLnJlbW92ZVNxdWFyZXMgPSBbXTtcbiAgICB9XG59IiwiaW1wb3J0IFBpZWNlIGZyb20gJy4vcGllY2UnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBPUGllY2UgZXh0ZW5kcyBQaWVjZSB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIHRoaXMubmFtZSA9IFwiT1BpZWNlXCI7XG4gICAgICAgIHRoaXMucG9zaXRpb24gPSB7XG4gICAgICAgICAgICB0b3A6IFtbMCwgNF0sIFswLCA1XV0sXG4gICAgICAgICAgICBtaWRkbGU6IFtdLFxuICAgICAgICAgICAgYm90dG9tOiBbWzEsIDRdLFsxLCA1XV1cbiAgICAgICAgfTtcbiAgICAgICAgdGhpcy5jb2xvckNvZGUgPSAxO1xuICAgICAgICB0aGlzLnR1cm5pbmdQb2ludCA9IFsxLCA0XTtcbiAgICAgICAgdGhpcy5kaXNwbGF5U3F1YXJlcyA9IFtbMSwgMV0sIFsyLCAxXSwgWzEsIDJdLCBbMiwgMl1dO1xuXG4gICAgICAgIHRoaXMucmVtb3ZlU3F1YXJlcyA9IFtdO1xuICAgIH1cblxuICAgIC8vIE9QaWVjZSBkb2VzIG5vdCB0dXJuXG4gICAgdHVyblJpZ2h0KCkge1xuICAgICAgICByZXR1cm47XG4gICAgfVxufSAiLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBQaWVjZSB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMubGVmdE1vc3QgPSAnJztcbiAgICAgICAgdGhpcy5yaWdodE1vc3QgPSAnJztcbiAgICB9XG5cbiAgICBzZXRMZWZ0TW9zdEFuZFJpZ2h0TW9zdCgpIHtcbiAgICAgICAgbGV0IGxlZnRNb3N0O1xuICAgICAgICBsZXQgcmlnaHRNb3N0O1xuICAgICAgICBPYmplY3QudmFsdWVzKHRoaXMucG9zaXRpb24pLmZvckVhY2goY29vcmRpbmF0ZXNBcnJheSA9PiBjb29yZGluYXRlc0FycmF5LmZvckVhY2goYXJyYXkgPT4ge1xuICAgICAgICAgICAgbGV0IGNvbHVtblZhbHVlID0gYXJyYXlbMV07XG4gICAgICAgICAgICBpZiAoIWxlZnRNb3N0KSBsZWZ0TW9zdCA9IGNvbHVtblZhbHVlO1xuICAgICAgICAgICAgaWYgKCFyaWdodE1vc3QpIHJpZ2h0TW9zdCA9IGNvbHVtblZhbHVlO1xuICAgICAgICAgICAgaWYgKGNvbHVtblZhbHVlIDwgbGVmdE1vc3QpIGxlZnRNb3N0ID0gY29sdW1uVmFsdWU7XG4gICAgICAgICAgICBpZiAoY29sdW1uVmFsdWUgPiByaWdodE1vc3QpIHJpZ2h0TW9zdCA9IGNvbHVtblZhbHVlO1xuICAgICAgICB9KSk7XG4gICAgICAgIHRoaXMubGVmdE1vc3QgPSBsZWZ0TW9zdDtcbiAgICAgICAgdGhpcy5yaWdodE1vc3QgPSByaWdodE1vc3Q7XG4gICAgfVxuXG4gICAgX3BvcHVsYXRlRmllbGQoZmllbGQpIHtcbiAgICAgICAgXG4gICAgICAgIGxldCBjb29yZGluYXRlQXJyYXlzID0gT2JqZWN0LnZhbHVlcyh0aGlzLnBvc2l0aW9uKTtcblxuICAgICAgICBjb29yZGluYXRlQXJyYXlzLmZvckVhY2goYXJyYXkgPT4ge1xuICAgICAgICAgICAgYXJyYXkuZm9yRWFjaChjb29yZGluYXRlID0+IHtcbiAgICAgICAgICAgICAgICBsZXQgW3JvdywgY29sXSA9IFtjb29yZGluYXRlWzBdLCBjb29yZGluYXRlWzFdXTtcbiAgICAgICAgICAgICAgICBmaWVsZFtyb3ddW2NvbF0gPSB0aGlzLmNvbG9yQ29kZTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH0pO1xuXG4gICAgICAgIHRoaXMucmVtb3ZlU3F1YXJlcy5mb3JFYWNoKHBvc2l0aW9uQXJyYXkgPT4ge1xuICAgICAgICAgICAgbGV0IFtyb3csIGNvbF0gPSBbcG9zaXRpb25BcnJheVswXSwgcG9zaXRpb25BcnJheVsxXV07XG4gICAgICAgICAgICBmaWVsZFtyb3ddW2NvbF0gPSAwO1xuICAgICAgICB9KTtcbiAgICAgICAgXG4gICAgfVxuXG4gICAgLy8gY29tcGFyZXMgdHdvIGFycmF5cyBvZiBjb29yZGluYXRlcyBhbmQgY2hlY2sgaWYgdGhleSBoYXZlIHRoZSBzYW1lIGNvbnRlbnQgaW4gdGhlIHNhbWUgb3JkZXJcbiAgICBfc3F1YXJlc0FyZUVxdWFsKG9sZFNxdWFyZSwgbmV3U3F1YXJlKSB7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgb2xkU3F1YXJlLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBpZiAob2xkU3F1YXJlW2ldICE9PSBuZXdTcXVhcmVbaV0pIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG5cbiAgICBfaW5jbHVkZXMoc3F1YXJlLCBjb29yZGluYXRlQXJyYXlzKSB7XG4gICAgICAgIGxldCByZXN1bHQgPSBmYWxzZTtcbiAgICAgICAgY29vcmRpbmF0ZUFycmF5cy5mb3JFYWNoKGFycmF5ID0+IHtcbiAgICAgICAgICAgIGlmICh0aGlzLl9zcXVhcmVzQXJlRXF1YWwoc3F1YXJlLCBhcnJheSkpIHtcbiAgICAgICAgICAgICAgICByZXN1bHQgPSB0cnVlOyBcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxuXG4gICAgZHJvcCgpIHtcbiAgICAgICAgbGV0IG9sZFBvc2l0aW9uID0ge1xuICAgICAgICAgICAgdG9wOiB0aGlzLnBvc2l0aW9uLnRvcC5tYXAoYXJyYXkgPT4gYXJyYXkuc2xpY2UoKSksXG4gICAgICAgICAgICBtaWRkbGU6IHRoaXMucG9zaXRpb24ubWlkZGxlLm1hcChhcnJheSA9PiBhcnJheS5zbGljZSgpKSxcbiAgICAgICAgICAgIGJvdHRvbTogdGhpcy5wb3NpdGlvbi5ib3R0b20ubWFwKGFycmF5ID0+IGFycmF5LnNsaWNlKCkpLFxuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5wb3NpdGlvbi50b3AgPSB0aGlzLnBvc2l0aW9uLnRvcC5tYXAoYXJyYXkgPT4gW2FycmF5WzBdICsgMSwgYXJyYXlbMV1dKTtcbiAgICAgICAgdGhpcy5wb3NpdGlvbi5taWRkbGUgPSB0aGlzLnBvc2l0aW9uLm1pZGRsZS5tYXAoYXJyYXkgPT4gW2FycmF5WzBdICsgMSwgYXJyYXlbMV1dKTtcbiAgICAgICAgdGhpcy5wb3NpdGlvbi5ib3R0b20gPSB0aGlzLnBvc2l0aW9uLmJvdHRvbS5tYXAoYXJyYXkgPT4gW2FycmF5WzBdICsgMSwgYXJyYXlbMV1dKTtcbiAgICAgICAgdGhpcy50dXJuaW5nUG9pbnQgPSBbdGhpcy50dXJuaW5nUG9pbnRbMF0gKyAxLCB0aGlzLnR1cm5pbmdQb2ludFsxXV07XG5cbiAgICAgICAgdGhpcy5zZXRSZW1vdmVTcXVhcmVzKG9sZFBvc2l0aW9uKTtcbiAgICB9XG5cbiAgICAvLyBmaW5kIGhpZ2hlc3QgcG9zc2libGUgZ3JvdW5kLXBvc2l0aW9uIGZvciBwaWVjZVxuICAgIGhhcmREcm9wKGZpZWxkKSB7XG4gICAgICAgIHRoaXMuY2xlYXJTZWxmRnJvbUJvYXJkKGZpZWxkKTtcbiAgICAgICAgbGV0IHN0b3BwZWQgPSBmYWxzZTtcbiAgICAgICAgd2hpbGUoIXN0b3BwZWQpIHtcbiAgICAgICAgICAgIGxldCBoYW5naW5nU3F1YXJlcyA9IHRoaXMuaGFuZ2luZ1NxdWFyZXModGhpcy5wb3NpdGlvbik7XG4gICAgICAgICAgICBoYW5naW5nU3F1YXJlcy5mb3JFYWNoKGNvb3JkaW5hdGUgPT4ge1xuICAgICAgICAgICAgICAgIGxldCBbcm93LCBjb2xdID0gW2Nvb3JkaW5hdGVbMF0sIGNvb3JkaW5hdGVbMV1dO1xuICAgICAgICAgICAgICAgIGlmICgocm93ICsgMSA9PT0gMjAgfHwgZmllbGRbcm93ICsgMV1bY29sXSkpIHN0b3BwZWQgPSB0cnVlO1xuICAgICAgICAgICAgfSk7IFxuICAgICAgICAgICAgaWYgKHN0b3BwZWQpIGJyZWFrO1xuICAgICAgICAgICAgdGhpcy5wb3NpdGlvbi50b3AgPSB0aGlzLnBvc2l0aW9uLnRvcC5tYXAoYXJyYXkgPT4gW2FycmF5WzBdICsgMSwgYXJyYXlbMV1dKTtcbiAgICAgICAgICAgIHRoaXMucG9zaXRpb24ubWlkZGxlID0gdGhpcy5wb3NpdGlvbi5taWRkbGUubWFwKGFycmF5ID0+IFthcnJheVswXSArIDEsIGFycmF5WzFdXSk7XG4gICAgICAgICAgICB0aGlzLnBvc2l0aW9uLmJvdHRvbSA9IHRoaXMucG9zaXRpb24uYm90dG9tLm1hcChhcnJheSA9PiBbYXJyYXlbMF0gKyAxLCBhcnJheVsxXV0pO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgY2xlYXJTZWxmRnJvbUJvYXJkKGZpZWxkKSB7XG4gICAgICAgIE9iamVjdC52YWx1ZXModGhpcy5wb3NpdGlvbikuZm9yRWFjaChjb29yZGluYXRlQXJyYXlzID0+IGNvb3JkaW5hdGVBcnJheXMuZm9yRWFjaChjb29yZGluYXRlID0+IHtcbiAgICAgICAgICAgIGxldCByb3cgPSBjb29yZGluYXRlWzBdO1xuICAgICAgICAgICAgbGV0IGNvbCA9IGNvb3JkaW5hdGVbMV07XG4gICAgICAgICAgICBmaWVsZFtyb3ddW2NvbF0gPSAwO1xuICAgICAgICB9KSk7XG4gICAgfVxuXG4gICAgbW92ZShkaXJlY3Rpb24sIGZpZWxkKSB7XG4gICAgICAgIGxldCBvbGRQb3NpdGlvbiA9IHtcbiAgICAgICAgICAgIHRvcDogdGhpcy5wb3NpdGlvbi50b3AubWFwKGFycmF5ID0+IGFycmF5LnNsaWNlKCkpLFxuICAgICAgICAgICAgbWlkZGxlOiB0aGlzLnBvc2l0aW9uLm1pZGRsZS5tYXAoYXJyYXkgPT4gYXJyYXkuc2xpY2UoKSksXG4gICAgICAgICAgICBib3R0b206IHRoaXMucG9zaXRpb24uYm90dG9tLm1hcChhcnJheSA9PiBhcnJheS5zbGljZSgpKSxcbiAgICAgICAgfVxuICAgICAgICBzd2l0Y2goZGlyZWN0aW9uKSB7XG4gICAgICAgICAgICBjYXNlIFwibGVmdFwiOiAgXG4gICAgICAgICAgICAgICAgdGhpcy5wb3NpdGlvbi50b3AgPSB0aGlzLnBvc2l0aW9uLnRvcC5tYXAoYXJyYXkgPT4gW2FycmF5WzBdLCBhcnJheVsxXSAtIDFdKTtcbiAgICAgICAgICAgICAgICB0aGlzLnBvc2l0aW9uLm1pZGRsZSA9IHRoaXMucG9zaXRpb24ubWlkZGxlLm1hcChhcnJheSA9PiBbYXJyYXlbMF0sIGFycmF5WzFdIC0gMV0pO1xuICAgICAgICAgICAgICAgIHRoaXMucG9zaXRpb24uYm90dG9tID0gdGhpcy5wb3NpdGlvbi5ib3R0b20ubWFwKGFycmF5ID0+IFthcnJheVswXSwgYXJyYXlbMV0gLSAxXSk7XG4gICAgICAgICAgICAgICAgdGhpcy50dXJuaW5nUG9pbnQgPSBbdGhpcy50dXJuaW5nUG9pbnRbMF0sIHRoaXMudHVybmluZ1BvaW50WzFdIC0gMV07XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIFwidXBcIjpcbiAgICAgICAgICAgICAgICAvLyBkZWZlciB0byBzdWJjbGFzcyBcInR1cm5cIiBtZXRob2RcbiAgICAgICAgICAgICAgICB0aGlzLnR1cm5SaWdodChmaWVsZCk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIFwicmlnaHRcIjpcbiAgICAgICAgICAgICAgICB0aGlzLnBvc2l0aW9uLnRvcCA9IHRoaXMucG9zaXRpb24udG9wLm1hcChhcnJheSA9PiBbYXJyYXlbMF0sIGFycmF5WzFdICsgMV0pO1xuICAgICAgICAgICAgICAgIHRoaXMucG9zaXRpb24ubWlkZGxlID0gdGhpcy5wb3NpdGlvbi5taWRkbGUubWFwKGFycmF5ID0+IFthcnJheVswXSwgYXJyYXlbMV0gKyAxXSk7XG4gICAgICAgICAgICAgICAgdGhpcy5wb3NpdGlvbi5ib3R0b20gPSB0aGlzLnBvc2l0aW9uLmJvdHRvbS5tYXAoYXJyYXkgPT4gW2FycmF5WzBdLCBhcnJheVsxXSArIDFdKTtcbiAgICAgICAgICAgICAgICB0aGlzLnR1cm5pbmdQb2ludCA9IFt0aGlzLnR1cm5pbmdQb2ludFswXSwgdGhpcy50dXJuaW5nUG9pbnRbMV0gKyAxXTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgXCJkb3duXCI6XG4gICAgICAgICAgICAgICAgdGhpcy5wb3NpdGlvbi50b3AgPSB0aGlzLnBvc2l0aW9uLnRvcC5tYXAoYXJyYXkgPT4gW2FycmF5WzBdICsgMSwgYXJyYXlbMV1dKTtcbiAgICAgICAgICAgICAgICB0aGlzLnBvc2l0aW9uLm1pZGRsZSA9IHRoaXMucG9zaXRpb24ubWlkZGxlLm1hcChhcnJheSA9PiBbYXJyYXlbMF0gKyAxLCBhcnJheVsxXV0pO1xuICAgICAgICAgICAgICAgIHRoaXMucG9zaXRpb24uYm90dG9tID0gdGhpcy5wb3NpdGlvbi5ib3R0b20ubWFwKGFycmF5ID0+IFthcnJheVswXSArIDEsIGFycmF5WzFdXSk7XG4gICAgICAgICAgICAgICAgdGhpcy50dXJuaW5nUG9pbnQgPSBbdGhpcy50dXJuaW5nUG9pbnRbMF0gKyAxLCB0aGlzLnR1cm5pbmdQb2ludFsxXV07XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIFwiQ1wiOlxuICAgICAgICAgICAgICAgIHRoaXMudHVybkxlZnQoZmllbGQpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuc2V0UmVtb3ZlU3F1YXJlcyhvbGRQb3NpdGlvbik7XG4gICAgfVxuXG4gICAgdHVyblJpZ2h0KGZpZWxkKSB7XG4gICAgICAgIGxldCBzcXVhcmVzID0gW107XG4gICAgICAgIE9iamVjdC52YWx1ZXModGhpcy5wb3NpdGlvbikuZm9yRWFjaChjb29yZGluYXRlc0FycmF5ID0+IHNxdWFyZXMucHVzaCguLi5jb29yZGluYXRlc0FycmF5KSk7XG4gICAgICAgIHRoaXMucG9zaXRpb24udG9wID0gW107XG4gICAgICAgIHRoaXMucG9zaXRpb24ubWlkZGxlID0gW107XG4gICAgICAgIHRoaXMucG9zaXRpb24uYm90dG9tID0gW107XG4gICAgICAgIHNxdWFyZXMuZm9yRWFjaChzcXVhcmUgPT4ge1xuICAgICAgICAgICAgbGV0IGNvbHVtbiA9IHNxdWFyZVsxXTtcbiAgICAgICAgICAgIGxldCBoZWlnaHREaWZmZXJlbmNlID0gdGhpcy50dXJuaW5nUG9pbnRbMF0gLSBzcXVhcmVbMF07XG4gICAgICAgICAgICBsZXQgd2lkdGhEaWZmZXJlbmNlID0gdGhpcy50dXJuaW5nUG9pbnRbMV0gLSBzcXVhcmVbMV07XG4gICAgICAgICAgICBsZXQgbmV3Q29sID0gdGhpcy50dXJuaW5nUG9pbnRbMV0gKyBoZWlnaHREaWZmZXJlbmNlO1xuICAgICAgICAgICAgbGV0IG5ld1JvdyA9IHRoaXMudHVybmluZ1BvaW50WzBdICsgKHdpZHRoRGlmZmVyZW5jZSAqIC0xKTtcbiAgICAgICAgICAgIHN3aXRjaCAoY29sdW1uKSB7XG4gICAgICAgICAgICAgICAgY2FzZSBjb2x1bW4gPSB0aGlzLnJpZ2h0TW9zdDpcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wb3NpdGlvbi5ib3R0b20ucHVzaChbbmV3Um93LCBuZXdDb2xdKTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSBjb2x1bW4gPSB0aGlzLmxlZnRNb3N0OlxuICAgICAgICAgICAgICAgICAgICB0aGlzLnBvc2l0aW9uLnRvcC5wdXNoKFtuZXdSb3csIG5ld0NvbF0pO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgICAgICB0aGlzLnBvc2l0aW9uLm1pZGRsZS5wdXNoKFtuZXdSb3csIG5ld0NvbF0pO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICAgICAgLy8gZmluZCBsZWZ0IGFuZCByaWdodCBtb3N0IHNxdWFyZXMgdG8gc2VlIGlmIHBpZWNlIHRocm91Z2ggd2FsbFxuICAgICAgICAvLyBpZiB0aHJvdWdoIHdhbGwsIHB1c2ggcGllY2UgYmFjayBpbnRvIGZpZWxkXG4gICAgICAgIHRoaXMuc2V0TGVmdE1vc3RBbmRSaWdodE1vc3QoKTtcbiAgICAgICAgXG4gICAgICAgIHdoaWxlICh0aGlzLnJpZ2h0TW9zdCA+IDkgfHwgdGhpcy5sZWZ0TW9zdCA8IDApIHtcbiAgICAgICAgICAgIHRoaXMucmlnaHRNb3N0ID4gOSA/IHRoaXMubW92ZSgnbGVmdCcpIDogdGhpcy5tb3ZlKCdyaWdodCcpO1xuICAgICAgICAgICAgdGhpcy5zZXRMZWZ0TW9zdEFuZFJpZ2h0TW9zdCgpO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gaW4gdGhlIGNhc2UgdGhhdCB0aGUgSVBpZWNlIGlzIHR1cm5lZCB0aHJvdWdoIHRoZSBmaWVsZCBjZWlsaW5nXG4gICAgICAgIGlmICh0aGlzLnBvc2l0aW9uLnRvcC5sZW5ndGgpIHtcbiAgICAgICAgICAgIHdoaWxlICh0aGlzLnBvc2l0aW9uLnRvcFswXVswXSA8IDApIHRoaXMubW92ZSgnZG93bicpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgdHVybkxlZnQoZmllbGQpIHtcbiAgICAgICAgbGV0IHNxdWFyZXMgPSBbXTtcbiAgICAgICAgT2JqZWN0LnZhbHVlcyh0aGlzLnBvc2l0aW9uKS5mb3JFYWNoKGNvb3JkaW5hdGVzQXJyYXkgPT4gc3F1YXJlcy5wdXNoKC4uLmNvb3JkaW5hdGVzQXJyYXkpKTtcbiAgICAgICAgdGhpcy5wb3NpdGlvbi50b3AgPSBbXTtcbiAgICAgICAgdGhpcy5wb3NpdGlvbi5taWRkbGUgPSBbXTtcbiAgICAgICAgdGhpcy5wb3NpdGlvbi5ib3R0b20gPSBbXTtcbiAgICAgICAgc3F1YXJlcy5mb3JFYWNoKHNxdWFyZSA9PiB7XG4gICAgICAgICAgICBsZXQgY29sdW1uID0gc3F1YXJlWzFdO1xuICAgICAgICAgICAgbGV0IGhlaWdodERpZmZlcmVuY2UgPSB0aGlzLnR1cm5pbmdQb2ludFswXSAtIHNxdWFyZVswXTtcbiAgICAgICAgICAgIGxldCB3aWR0aERpZmZlcmVuY2UgPSB0aGlzLnR1cm5pbmdQb2ludFsxXSAtIHNxdWFyZVsxXTtcbiAgICAgICAgICAgIGxldCBuZXdDb2wgPSB0aGlzLnR1cm5pbmdQb2ludFsxXSAtIGhlaWdodERpZmZlcmVuY2U7XG4gICAgICAgICAgICBsZXQgbmV3Um93ID0gdGhpcy50dXJuaW5nUG9pbnRbMF0gLSAod2lkdGhEaWZmZXJlbmNlICogLTEpO1xuICAgICAgICAgICAgc3dpdGNoIChjb2x1bW4pIHtcbiAgICAgICAgICAgICAgICBjYXNlIGNvbHVtbiA9IHRoaXMucmlnaHRNb3N0OlxuICAgICAgICAgICAgICAgICAgICB0aGlzLnBvc2l0aW9uLnRvcC5wdXNoKFtuZXdSb3csIG5ld0NvbF0pO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlIGNvbHVtbiA9IHRoaXMubGVmdE1vc3Q6XG4gICAgICAgICAgICAgICAgICAgIHRoaXMucG9zaXRpb24uYm90dG9tLnB1c2goW25ld1JvdywgbmV3Q29sXSk7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgICAgIHRoaXMucG9zaXRpb24ubWlkZGxlLnB1c2goW25ld1JvdywgbmV3Q29sXSk7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KVxuICAgICAgICAvLyBmaW5kIGxlZnQgYW5kIHJpZ2h0IG1vc3Qgc3F1YXJlcyB0byBzZWUgaWYgcGllY2UgdGhyb3VnaCB3YWxsXG4gICAgICAgIC8vIGlmIHRocm91Z2ggd2FsbCwgcHVzaCBwaWVjZSBiYWNrIGludG8gZmllbGRcbiAgICAgICAgdGhpcy5zZXRMZWZ0TW9zdEFuZFJpZ2h0TW9zdCgpO1xuICAgICAgICBcbiAgICAgICAgd2hpbGUgKHRoaXMucmlnaHRNb3N0ID4gOSB8fCB0aGlzLmxlZnRNb3N0IDwgMCkge1xuICAgICAgICAgICAgdGhpcy5yaWdodE1vc3QgPiA5ID8gdGhpcy5tb3ZlKCdsZWZ0JykgOiB0aGlzLm1vdmUoJ3JpZ2h0Jyk7XG4gICAgICAgICAgICB0aGlzLnNldExlZnRNb3N0QW5kUmlnaHRNb3N0KCk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBpbiB0aGUgY2FzZSB0aGF0IHRoZSBJUGllY2UgaXMgdHVybmVkIHRocm91Z2ggdGhlIGZpZWxkIGNlaWxpbmdcbiAgICAgICAgaWYgKHRoaXMucG9zaXRpb24udG9wLmxlbmd0aCkge1xuICAgICAgICAgICAgd2hpbGUgKHRoaXMucG9zaXRpb24udG9wWzBdWzBdIDwgMCkgdGhpcy5tb3ZlKCdkb3duJyk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBjb21wYXJlIG9sZCBwb3NpdGlvbiBvZiBwaWVjZSB3aXRoIG5ldyBwb3NpdGlvbiBcbiAgICBzZXRSZW1vdmVTcXVhcmVzKG9sZFBvc2l0aW9uKSB7XG4gICAgICAgIGxldCBvbGRTcXVhcmVzID0gW107XG4gICAgICAgIGxldCBuZXdTcXVhcmVzID0gW107XG4gICAgICAgIE9iamVjdC52YWx1ZXMob2xkUG9zaXRpb24pLmZvckVhY2goY29vcmRpbmF0ZXNBcnJheSA9PiBvbGRTcXVhcmVzLnB1c2goLi4uY29vcmRpbmF0ZXNBcnJheSkpO1xuICAgICAgICBPYmplY3QudmFsdWVzKHRoaXMucG9zaXRpb24pLmZvckVhY2goY29vcmRpbmF0ZXNBcnJheSA9PiBuZXdTcXVhcmVzLnB1c2goLi4uY29vcmRpbmF0ZXNBcnJheSkpO1xuICAgICAgICAvLyBrZWVwIHRyYWNrIG9mIHNxdWFyZXMgdGhhdCB0aGUgcG9zaXRpb25zIGRvIG5vdCBoYXZlIGluIGNvbW1vbiAoc3F1YXJlcyB0byByZW1vdmUgY29sb3IgZnJvbSlcbiAgICAgICAgdGhpcy5yZW1vdmVTcXVhcmVzID0gb2xkU3F1YXJlcy5maWx0ZXIob2xkU3F1YXJlID0+IHtcbiAgICAgICAgICAgIGlmICghdGhpcy5faW5jbHVkZXMob2xkU3F1YXJlLCBuZXdTcXVhcmVzKSkgcmV0dXJuIG9sZFNxdWFyZTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgaGFuZ2luZ1NxdWFyZXMocG9zaXRpb24pIHtcbiAgICAgICAgbGV0IHNxdWFyZXMgPSBbXTtcbiAgICAgICAgbGV0IGhhbmdpbmdTcXVhcmVzID0gW107XG4gICAgICAgIE9iamVjdC52YWx1ZXMocG9zaXRpb24pLmZvckVhY2goY29vcmRpbmF0ZUFycmF5ID0+IHNxdWFyZXMucHVzaCguLi5jb29yZGluYXRlQXJyYXkpKVxuICAgICAgICBzcXVhcmVzLmZvckVhY2goc3F1YXJlID0+IHtcbiAgICAgICAgICAgIGxldCBiZWxvd1NxdWFyZSA9IFtzcXVhcmVbMF0gKyAxLCBzcXVhcmVbMV1dO1xuICAgICAgICAgICAgaWYgKCF0aGlzLl9pbmNsdWRlcyhiZWxvd1NxdWFyZSwgc3F1YXJlcykpIGhhbmdpbmdTcXVhcmVzLnB1c2goc3F1YXJlKTtcbiAgICAgICAgfSlcbiAgICAgICAgcmV0dXJuIGhhbmdpbmdTcXVhcmVzO1xuICAgIH0gXG5cbiAgICBzaWRlU3F1YXJlcygpIHtcbiAgICAgICAgbGV0IHNxdWFyZXMgPSBbXTtcbiAgICAgICAgbGV0IHNpZGVTcXVhcmVzID0ge1xuICAgICAgICAgICAgbGVmdDogW10sXG4gICAgICAgICAgICByaWdodDogW11cbiAgICAgICAgfTtcbiAgICAgICAgT2JqZWN0LnZhbHVlcyh0aGlzLnBvc2l0aW9uKS5mb3JFYWNoKGNvb3JkaW5hdGVBcnJheSA9PiBzcXVhcmVzLnB1c2goLi4uY29vcmRpbmF0ZUFycmF5KSk7XG4gICAgICAgIHNxdWFyZXMuZm9yRWFjaChzcXVhcmUgPT4ge1xuICAgICAgICAgICAgbGV0IGFkamFjZW50TGVmdCA9IFtzcXVhcmVbMF0sIHNxdWFyZVsxXSAtIDFdO1xuICAgICAgICAgICAgbGV0IGFkamFjZW50UmlnaHQgPSBbc3F1YXJlWzBdLCBzcXVhcmVbMV0gKyAxXTtcbiAgICAgICAgICAgIGlmICghdGhpcy5faW5jbHVkZXMoYWRqYWNlbnRMZWZ0LCBzcXVhcmVzKSkgc2lkZVNxdWFyZXMubGVmdC5wdXNoKHNxdWFyZSk7XG4gICAgICAgICAgICBpZiAoIXRoaXMuX2luY2x1ZGVzKGFkamFjZW50UmlnaHQsIHNxdWFyZXMpKSBzaWRlU3F1YXJlcy5yaWdodC5wdXNoKHNxdWFyZSk7XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gc2lkZVNxdWFyZXM7XG4gICAgfVxuXG4gICAgaXNGYWxsaW5nKGZpZWxkKSB7XG4gICAgICAgIGxldCByZXN1bHQgPSB0cnVlO1xuICAgICAgICB0aGlzLmhhbmdpbmdTcXVhcmVzKHRoaXMucG9zaXRpb24pLmZvckVhY2goY29vcmRpbmF0ZVBhaXIgPT4ge1xuICAgICAgICAgICAgbGV0IFtyb3csIGNvbF0gPSBbY29vcmRpbmF0ZVBhaXJbMF0sIGNvb3JkaW5hdGVQYWlyWzFdXTtcbiAgICAgICAgICAgIC8vIGlmIHRoZSBwaWVjZSdzIGN1cnJlbnQgcG9zaXRpb24gaXMgYWJvdmUgdGhlIGZpZWxkIGZsb29yIG9yIGEgYW5vdGhlciBwaWVjZSAobm90IGluY2x1ZGUgZ2hvc3QgcGllY2UpXG4gICAgICAgICAgICBpZiAoIWZpZWxkW3JvdyArIDFdIHx8IChmaWVsZFtyb3cgKyAxXVtjb2xdICYmIGZpZWxkW3JvdyArIDFdW2NvbF0gIT09IFwieFwiKSkge1xuICAgICAgICAgICAgICAgIHJlc3VsdCA9IGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG5cbiAgICByaWdodFNpZGVCbG9ja2VkKGZpZWxkKSB7XG4gICAgICAgIGxldCByZXN1bHQgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5zaWRlU3F1YXJlcygpLnJpZ2h0LmZvckVhY2goY29vcmRpbmF0ZVBhaXIgPT4ge1xuICAgICAgICAgICAgbGV0IFtyb3csIGNvbF0gPSBbY29vcmRpbmF0ZVBhaXJbMF0sIGNvb3JkaW5hdGVQYWlyWzFdXTtcbiAgICAgICAgICAgIC8vIGlmIGFueSByaWdodCBmYWNpbmcgc3F1YXJlIGhpdHMgdGhlIHdhbGwgb3IgYW5vdGhlciBwaWVjZVxuICAgICAgICAgICAgaWYgKGNvbCA9PT0gOSB8fCBmaWVsZFtyb3ddW2NvbCArIDFdKSB7XG4gICAgICAgICAgICAgICAgcmVzdWx0ID0gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxuXG4gICAgbGVmdFNpZGVCbG9ja2VkKGZpZWxkKSB7XG4gICAgICAgIGxldCByZXN1bHQgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5zaWRlU3F1YXJlcygpLmxlZnQuZm9yRWFjaChjb29yZGluYXRlUGFpciA9PiB7XG4gICAgICAgICAgICBsZXQgW3JvdywgY29sXSA9IFtjb29yZGluYXRlUGFpclswXSwgY29vcmRpbmF0ZVBhaXJbMV1dO1xuICAgICAgICAgICAgLy8gaWYgYW55IGxlZnQgZmFjaW5nIHNxdWFyZSBoaXRzIHRoZSB3YWxsIG9yIGFub3RoZXIgcGllY2VcbiAgICAgICAgICAgIGlmIChjb2wgPT09IDAgfHwgZmllbGRbcm93XVtjb2wgLSAxXSkge1xuICAgICAgICAgICAgICAgIHJlc3VsdCA9IHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cbn0iLCJpbXBvcnQgUGllY2UgZnJvbSAnLi9waWVjZSc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNQaWVjZSBleHRlbmRzIFBpZWNlIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgdGhpcy5uYW1lID0gXCJTUGllY2VcIjtcbiAgICAgICAgdGhpcy5wb3NpdGlvbiA9IHtcbiAgICAgICAgICAgIHRvcDogW1swLCA0XSwgWzAsIDVdXSxcbiAgICAgICAgICAgIG1pZGRsZTogW10sXG4gICAgICAgICAgICBib3R0b206IFtbMSwgM10sIFsxLCA0XV1cbiAgICAgICAgfTtcbiAgICAgICAgdGhpcy5jb2xvckNvZGUgPSA0O1xuXG4gICAgICAgIHRoaXMudHVybmluZ1BvaW50ID0gWzEsIDRdO1xuXG4gICAgICAgIHRoaXMuZGlzcGxheVNxdWFyZXMgPSBbWzMsIDFdLCBbMiwgMV0sIFsyLCAyXSwgWzEsIDJdXTtcblxuICAgICAgICB0aGlzLnJlbW92ZVNxdWFyZXMgPSBbXTtcbiAgICB9XG59IiwiaW1wb3J0IFBpZWNlIGZyb20gJy4vcGllY2UnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUUGllY2UgZXh0ZW5kcyBQaWVjZSB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIHRoaXMubmFtZSA9IFwiVFBpZWNlXCI7XG4gICAgICAgIHRoaXMucG9zaXRpb24gPSB7XG4gICAgICAgICAgICB0b3A6IFtbMCwgNF1dLFxuICAgICAgICAgICAgbWlkZGxlOiBbXSxcbiAgICAgICAgICAgIGJvdHRvbTogW1sxLCAzXSwgWzEsIDRdLCBbMSwgNV1dLFxuICAgICAgICB9XG4gICAgICAgIHRoaXMuY29sb3JDb2RlID0gMztcblxuICAgICAgICB0aGlzLnR1cm5pbmdQb2ludCA9IFsxLCA0XTtcblxuICAgICAgICB0aGlzLmRpc3BsYXlTcXVhcmVzID0gW1sxLCAyXSwgWzIsIDJdLCBbMywgMl0sIFsyLCAxXV07XG5cbiAgICAgICAgdGhpcy5yZW1vdmVTcXVhcmVzID0gW107XG4gICAgfVxufSIsImltcG9ydCBQaWVjZSBmcm9tICcuL3BpZWNlJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgWlBpZWNlIGV4dGVuZHMgUGllY2Uge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICB0aGlzLm5hbWUgPSBcIlpQaWVjZVwiO1xuICAgICAgICB0aGlzLnBvc2l0aW9uID0ge1xuICAgICAgICAgICAgdG9wOiBbWzAsIDNdLCBbMCwgNF1dLFxuICAgICAgICAgICAgbWlkZGxlOiBbXSxcbiAgICAgICAgICAgIGJvdHRvbTogW1sxLCA0XSwgWzEsIDVdXVxuICAgICAgICB9O1xuICAgICAgICB0aGlzLmNvbG9yQ29kZSA9IDU7XG5cbiAgICAgICAgdGhpcy50dXJuaW5nUG9pbnQgPSBbMSwgNF07XG5cbiAgICAgICAgdGhpcy5kaXNwbGF5U3F1YXJlcyA9IFtbMSwgMV0sIFsyLCAxXSwgWzIsIDJdLCBbMywgMl1dO1xuXG4gICAgICAgIHRoaXMucmVtb3ZlU3F1YXJlcyA9IFtdO1xuICAgIH1cbn0iXSwic291cmNlUm9vdCI6IiJ9