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
        console.log(event);

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
          // right key

          case 39:
            if (_this9.currentPiece.rightSideBlocked(_this9.field)) break;

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
            if (_this9.currentPiece.leftSideBlocked(_this9.field)) break;

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
      clearInterval(clear);
      this.play();
    }
  }, {
    key: "play",
    value: function play() {
      var _this10 = this;

      this._setCurrentPiece();

      this.populateField(this.currentPiece);

      this._addToCurrentBag();

      this._showCurrentBag();

      if (!this.nextBag.length) this._refillNextBag();
      this.setGhostPosition();
      var clear = setInterval(function () {
        _this10.clearHandle = clear;

        _this10.populateField(_this10.currentPiece);

        _this10.render();

        if (!_this10.currentPiece.isFalling(_this10.field)) {
          _this10.handlePieceStop(clear);
        }

        _this10.currentPiece.drop();

        _this10.populateField(_this10.currentPiece); // keep only one populate field?


        _this10.render();
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
    } // compare old position of piece with new position 

  }, {
    key: "setRemoveSquares",
    value: function setRemoveSquares(oldPosition) {
      var _this4 = this;

      var oldSquares = [];
      var newSquares = [];
      Object.values(oldPosition).forEach(function (coordinatesArray) {
        return oldSquares.push.apply(oldSquares, _toConsumableArray(coordinatesArray));
      });
      Object.values(this.position).forEach(function (coordinatesArray) {
        return newSquares.push.apply(newSquares, _toConsumableArray(coordinatesArray));
      }); // keep track of squares that the positions do not have in common (squares to remove color from)

      this.removeSquares = oldSquares.filter(function (oldSquare) {
        if (!_this4._includes(oldSquare, newSquares)) return oldSquare;
      });
    }
  }, {
    key: "hangingSquares",
    value: function hangingSquares(position) {
      var _this5 = this;

      var squares = [];
      var hangingSquares = [];
      Object.values(position).forEach(function (coordinateArray) {
        return squares.push.apply(squares, _toConsumableArray(coordinateArray));
      });
      squares.forEach(function (square) {
        var belowSquare = [square[0] + 1, square[1]];
        if (!_this5._includes(belowSquare, squares)) hangingSquares.push(square);
      });
      return hangingSquares;
    }
  }, {
    key: "sideSquares",
    value: function sideSquares() {
      var _this6 = this;

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
        if (!_this6._includes(adjacentLeft, squares)) sideSquares.left.push(square);
        if (!_this6._includes(adjacentRight, squares)) sideSquares.right.push(square);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2ZpZWxkL2ZpZWxkLmpzIiwid2VicGFjazovLy8uL3NyYy9maWVsZC9ob2xkYm94LmpzIiwid2VicGFjazovLy8uL3NyYy9maWVsZC9uZXh0Qm94LmpzIiwid2VicGFjazovLy8uL3NyYy9nYW1lL2dhbWUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9waWVjZXMvaVBpZWNlLmpzIiwid2VicGFjazovLy8uL3NyYy9waWVjZXMvalBpZWNlLmpzIiwid2VicGFjazovLy8uL3NyYy9waWVjZXMvbFBpZWNlLmpzIiwid2VicGFjazovLy8uL3NyYy9waWVjZXMvb1BpZWNlLmpzIiwid2VicGFjazovLy8uL3NyYy9waWVjZXMvcGllY2UuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3BpZWNlcy9zUGllY2UuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3BpZWNlcy90UGllY2UuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3BpZWNlcy96UGllY2UuanMiXSwibmFtZXMiOlsiRmllbGQiLCJmaWVsZCIsImkiLCJyb3ciLCJwdXNoIiwiY29sdW1uIiwiZG9jdW1lbnQiLCJjcmVhdGVFbGVtZW50IiwiY2xhc3NMaXN0IiwiYWRkIiwiYXBwZW5kIiwiYXBwZW5kQ2hpbGQiLCJfY3JlYXRlQ29sdW1uIiwiY29udGFpbmVyIiwibmV4dEJveCIsIk5leHRCb3giLCJob2xkQm94IiwiSG9sZEJveCIsIl9jcmVhdGVGaWVsZCIsImNyZWF0ZU5leHRCb3hlcyIsInByZXBlbmQiLCJjcmVhdGVCb3giLCJib3giLCJfY3JlYXRlQm94Q29sdW1uIiwiX2NyZWF0ZU5leHRCb3hDb2x1bW4iLCJib3hlcyIsIl9jcmVhdGVOZXh0Qm94IiwiR2FtZSIsIl9zZXRGaWVsZCIsImNvbG9ycyIsImN1cnJlbnRCYWciLCJfc2h1ZmZsZUJhZyIsIl9nZW5lcmF0ZUJhZyIsImN1cnJlbnRQaWVjZSIsImhvbGRQaWVjZSIsImdob3N0UG9zaXRpb24iLCJuZXh0QmFnIiwiY2FuSG9sZCIsImNsZWFySGFuZGxlIiwib1BpZWNlIiwiT1BpZWNlIiwiaVBpZWNlIiwiSVBpZWNlIiwidFBpZWNlIiwiVFBpZWNlIiwic1BpZWNlIiwiU1BpZWNlIiwielBpZWNlIiwiWlBpZWNlIiwibFBpZWNlIiwiTFBpZWNlIiwialBpZWNlIiwiSlBpZWNlIiwiX2dlbmVyYXRlRmllbGQiLCJzaGlmdCIsImNvb3JkaW5hdGVBcnJheXMiLCJPYmplY3QiLCJ2YWx1ZXMiLCJmb3JFYWNoIiwiYXJyYXkiLCJjb29yZGluYXRlIiwiY29sIiwiZmllbGRDb2x1bW5zIiwicXVlcnlTZWxlY3RvckFsbCIsImNoaWxkcmVuIiwiY29sb3JDb2RlIiwidG9wIiwicG9zaXRpb24iLCJtYXAiLCJzbGljZSIsIm1pZGRsZSIsImJvdHRvbSIsInN0b3BwZWQiLCJoYW5naW5nU3F1YXJlcyIsIl9wb3B1bGF0ZUdob3N0UG9zaXRpb24iLCJyZW5kZXIiLCJwaWVjZSIsInJlbW92ZVNxdWFyZXMiLCJwb3NpdGlvbkFycmF5IiwiY2xlYXJTZWxmRnJvbUJvYXJkIiwiX2dlbmVyYXRlUGllY2UiLCJuYW1lIiwiX3NldEN1cnJlbnRQaWVjZSIsIl9zaG93Q3VycmVudEJhZyIsIl9wb3B1bGF0ZUhvbGRCb3giLCJjb2x1bW5zIiwicXVlcnlTZWxlY3RvciIsImoiLCJjbGFzc05hbWUiLCJkaXNwbGF5U3F1YXJlcyIsInNxdWFyZSIsInBpZWNlTmFtZSIsImdldEVsZW1lbnRzQnlDbGFzc05hbWUiLCJfcG9wdWxhdGVOZXh0Qm94IiwiYmFnIiwiY3VycmVudEluZGV4IiwibGVuZ3RoIiwidGVtcG9yYXJ5VmFsdWUiLCJyYW5kb21JbmRleCIsIk1hdGgiLCJmbG9vciIsInJhbmRvbSIsInJvd0lkeCIsImNvbElkeCIsInNxdWFyZVZhbHVlIiwiY29sb3IiLCJyZW1vdmUiLCJib2R5IiwiYWRkRXZlbnRMaXN0ZW5lciIsImV2ZW50IiwiY29uc29sZSIsImxvZyIsInNldExlZnRNb3N0QW5kUmlnaHRNb3N0IiwiY2xlYXJHaG9zdFBvc2l0aW9uIiwid2hpY2giLCJtb3ZlIiwicG9wdWxhdGVGaWVsZCIsInNldEdob3N0UG9zaXRpb24iLCJyaWdodFNpZGVCbG9ja2VkIiwiaXNGYWxsaW5nIiwibGVmdFNpZGVCbG9ja2VkIiwiaG9sZCIsImhhcmREcm9wIiwiaGFuZGxlUGllY2VTdG9wIiwibG93ZXN0IiwiaGlnaGVzdCIsImluY2x1ZGVzIiwiX2JyaW5nRG93bkZpZWxkIiwiY2xlYXJMaW5lcyIsInN0YXJ0aW5nUm93IiwiY2xlYXIiLCJjbGVhckdob3N0Q2xhc3MiLCJjbGVhckludGVydmFsIiwicGxheSIsIl9hZGRUb0N1cnJlbnRCYWciLCJfcmVmaWxsTmV4dEJhZyIsInNldEludGVydmFsIiwiZHJvcCIsImZpZWxkQ29udGFpbmVyIiwiZ2V0RWxlbWVudEJ5SWQiLCJjcmVhdGVGaWVsZFdpdGhIb2xkQm94QW5kTmV4dEJveGVzIiwiZ2FtZSIsImtleUxpc3RlbmVyIiwidHVybmluZ1BvaW50IiwiUGllY2UiLCJsZWZ0TW9zdCIsInJpZ2h0TW9zdCIsImNvb3JkaW5hdGVzQXJyYXkiLCJjb2x1bW5WYWx1ZSIsIm9sZFNxdWFyZSIsIm5ld1NxdWFyZSIsInJlc3VsdCIsIl9zcXVhcmVzQXJlRXF1YWwiLCJvbGRQb3NpdGlvbiIsInNldFJlbW92ZVNxdWFyZXMiLCJkaXJlY3Rpb24iLCJ0dXJuUmlnaHQiLCJzcXVhcmVzIiwiaGVpZ2h0RGlmZmVyZW5jZSIsIndpZHRoRGlmZmVyZW5jZSIsIm5ld0NvbCIsIm5ld1JvdyIsIm9sZFNxdWFyZXMiLCJuZXdTcXVhcmVzIiwiZmlsdGVyIiwiX2luY2x1ZGVzIiwiY29vcmRpbmF0ZUFycmF5IiwiYmVsb3dTcXVhcmUiLCJzaWRlU3F1YXJlcyIsImxlZnQiLCJyaWdodCIsImFkamFjZW50TGVmdCIsImFkamFjZW50UmlnaHQiLCJjb29yZGluYXRlUGFpciJdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7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ZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiL2Rpc3QvXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2luZGV4LmpzXCIpO1xuIiwiaW1wb3J0IEhvbGRCb3ggZnJvbSAnLi9ob2xkYm94JztcbmltcG9ydCBOZXh0Qm94IGZyb20gJy4vbmV4dEJveCc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEZpZWxkIHsgICAgXG4gICAgX2dlbmVyYXRlRmllbGQoKSB7XG4gICAgICAgIGxldCBmaWVsZCA9IFtdO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IDIwOyBpKyspIHtcbiAgICAgICAgICAgIGxldCByb3cgPSBbMCwwLDAsMCwwLDAsMCwwLDAsMF07XG4gICAgICAgICAgICBmaWVsZC5wdXNoKHJvdyk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGZpZWxkO1xuICAgIH1cblxuICAgIC8vX2lzVmFsaWRNb3ZlXG5cbiAgICBfY3JlYXRlQ29sdW1uKCkge1xuICAgICAgICBsZXQgY29sdW1uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInVsXCIpO1xuICAgICAgICBjb2x1bW4uY2xhc3NMaXN0LmFkZChcImZpZWxkLWNvbHVtblwiKTtcblxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IDIwOyBpKyspIHtcbiAgICAgICAgICAgIGNvbHVtbi5hcHBlbmQoZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpXCIpKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gY29sdW1uO1xuICAgIH1cblxuICAgIF9jcmVhdGVGaWVsZCgpIHtcbiAgICAgICAgbGV0IGZpZWxkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgZmllbGQuY2xhc3NMaXN0LmFkZChcImZpZWxkLWJveFwiKTtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCAxMDsgaSsrKSB7XG4gICAgICAgICAgICBmaWVsZC5hcHBlbmRDaGlsZCh0aGlzLl9jcmVhdGVDb2x1bW4oKSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGZpZWxkO1xuICAgIH1cblxuICAgIGNyZWF0ZUZpZWxkV2l0aEhvbGRCb3hBbmROZXh0Qm94ZXMoY29udGFpbmVyKSB7XG4gICAgICAgIGxldCBuZXh0Qm94ID0gbmV3IE5leHRCb3goKTtcbiAgICAgICAgbGV0IGhvbGRCb3ggPSBuZXcgSG9sZEJveCgpO1xuICAgICAgICBjb250YWluZXIuYXBwZW5kKHRoaXMuX2NyZWF0ZUZpZWxkKCkpO1xuICAgICAgICBjb250YWluZXIuYXBwZW5kKG5leHRCb3guY3JlYXRlTmV4dEJveGVzKCkpO1xuICAgICAgICBjb250YWluZXIucHJlcGVuZChob2xkQm94LmNyZWF0ZUJveCgpKTtcbiAgICAgICAgcmV0dXJuIGNvbnRhaW5lcjtcbiAgICB9XG5cbn0iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBIb2xkQm94IHtcbiAgICBfY3JlYXRlQm94Q29sdW1uKCkge1xuICAgICAgICBsZXQgY29sdW1uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInVsXCIpO1xuICAgICAgICBjb2x1bW4uY2xhc3NMaXN0LmFkZChcImhvbGQtY29sdW1uXCIpO1xuXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgNDsgaSsrKSB7XG4gICAgICAgICAgICBjb2x1bW4uYXBwZW5kKGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaVwiKSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGNvbHVtbjtcbiAgICB9XG5cbiAgICBjcmVhdGVCb3goKSB7XG4gICAgICAgIGxldCBib3ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICBib3guY2xhc3NMaXN0LmFkZChcImhvbGQtYm94XCIpO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IDU7IGkrKykge1xuICAgICAgICAgICAgYm94LmFwcGVuZENoaWxkKHRoaXMuX2NyZWF0ZUJveENvbHVtbigpKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gYm94O1xuICAgIH1cbn0iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBOZXh0Qm94IHtcbiAgICBfY3JlYXRlTmV4dEJveENvbHVtbigpIHtcbiAgICAgICAgbGV0IGNvbHVtbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ1bFwiKTtcbiAgICAgICAgY29sdW1uLmNsYXNzTGlzdC5hZGQoXCJuZXh0LWNvbHVtblwiKTtcblxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IDQ7IGkrKykge1xuICAgICAgICAgICAgY29sdW1uLmFwcGVuZChkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIikpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBjb2x1bW47XG4gICAgfVxuXG4gICAgX2NyZWF0ZU5leHRCb3goKSB7XG4gICAgICAgIGxldCBib3ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICBib3guY2xhc3NMaXN0LmFkZChcIm5leHQtYm94XCIpO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IDU7IGkrKykge1xuICAgICAgICAgICAgYm94LmFwcGVuZENoaWxkKHRoaXMuX2NyZWF0ZU5leHRCb3hDb2x1bW4oKSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGJveDtcbiAgICB9XG5cbiAgICBjcmVhdGVOZXh0Qm94ZXMoKSB7XG4gICAgICAgIGxldCBib3hlcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIGJveGVzLmNsYXNzTGlzdC5hZGQoXCJuZXh0LWJveGVzXCIpO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IDU7IGkrKykge1xuICAgICAgICAgICAgYm94ZXMuYXBwZW5kQ2hpbGQodGhpcy5fY3JlYXRlTmV4dEJveCgpKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gYm94ZXM7XG4gICAgfVxufSIsImltcG9ydCBGaWVsZCBmcm9tICcuLi9maWVsZC9maWVsZCc7XG5pbXBvcnQgT1BpZWNlIGZyb20gJy4uL3BpZWNlcy9vUGllY2UnO1xuaW1wb3J0IElQaWVjZSBmcm9tICcuLi9waWVjZXMvaVBpZWNlJztcbmltcG9ydCBUUGllY2UgZnJvbSAnLi4vcGllY2VzL3RQaWVjZSc7XG5pbXBvcnQgU1BpZWNlIGZyb20gJy4uL3BpZWNlcy9zUGllY2UnO1xuaW1wb3J0IFpQaWVjZSBmcm9tICcuLi9waWVjZXMvelBpZWNlJztcbmltcG9ydCBMUGllY2UgZnJvbSAnLi4vcGllY2VzL2xQaWVjZSc7XG5pbXBvcnQgSlBpZWNlIGZyb20gJy4uL3BpZWNlcy9qUGllY2UnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBHYW1lIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5maWVsZCA9IHRoaXMuX3NldEZpZWxkKClcblxuICAgICAgICB0aGlzLmNvbG9ycyA9IHtcbiAgICAgICAgICAgIDE6IFwieWVsbG93XCIsXG4gICAgICAgICAgICAyOiBcImJsdWVcIixcbiAgICAgICAgICAgIDM6IFwicHVycGxlXCIsXG4gICAgICAgICAgICA0OiBcImdyZWVuXCIsXG4gICAgICAgICAgICA1OiBcInJlZFwiLFxuICAgICAgICAgICAgNjogXCJvcmFuZ2VcIixcbiAgICAgICAgICAgIDc6IFwiZGFyay1ibHVlXCJcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmN1cnJlbnRCYWcgPSB0aGlzLl9zaHVmZmxlQmFnKHRoaXMuX2dlbmVyYXRlQmFnKCkpO1xuICAgICAgICB0aGlzLmN1cnJlbnRQaWVjZSA9ICcnO1xuICAgICAgICB0aGlzLmhvbGRQaWVjZSA9ICcnO1xuICAgICAgICB0aGlzLmdob3N0UG9zaXRpb24gPSAnJztcbiAgICAgICAgdGhpcy5uZXh0QmFnID0gdGhpcy5fc2h1ZmZsZUJhZyh0aGlzLl9nZW5lcmF0ZUJhZygpKTtcbiAgICAgICAgLy8gcHJldmVudHMgcGxheWVyIGZyb20gaG9sZGluZyBwaWVjZSBtdWx0aXBsZSB0aW1lc1xuICAgICAgICB0aGlzLmNhbkhvbGQgPSB0cnVlO1xuXG4gICAgICAgIHRoaXMuY2xlYXJIYW5kbGU7XG4gICAgfVxuXG4gICAgX2dlbmVyYXRlQmFnKCkge1xuICAgICAgICBsZXQgb1BpZWNlID0gbmV3IE9QaWVjZSgpO1xuICAgICAgICBsZXQgaVBpZWNlID0gbmV3IElQaWVjZSgpO1xuICAgICAgICBsZXQgdFBpZWNlID0gbmV3IFRQaWVjZSgpO1xuICAgICAgICBsZXQgc1BpZWNlID0gbmV3IFNQaWVjZSgpO1xuICAgICAgICBsZXQgelBpZWNlID0gbmV3IFpQaWVjZSgpO1xuICAgICAgICBsZXQgbFBpZWNlID0gbmV3IExQaWVjZSgpO1xuICAgICAgICBsZXQgalBpZWNlID0gbmV3IEpQaWVjZSgpO1xuXG4gICAgICAgIHJldHVybiBbb1BpZWNlLCBpUGllY2UsIHRQaWVjZSwgc1BpZWNlLCB6UGllY2UsIGxQaWVjZSwgalBpZWNlXTtcbiAgICB9XG5cbiAgICBfc2V0RmllbGQoKSB7XG4gICAgICAgIGxldCBmaWVsZCA9IG5ldyBGaWVsZCgpO1xuICAgICAgICByZXR1cm4gZmllbGQuX2dlbmVyYXRlRmllbGQoKTtcbiAgICB9XG5cbiAgICAvLyB0YWtlIHBpZWNlIGZyb20gY3VycmVudEJhZyBhbmQgc2V0IGl0IGFzIHRoZSBjdXJyZW50IHBpZWNlXG4gICAgX3NldEN1cnJlbnRQaWVjZSgpIHtcbiAgICAgICAgdGhpcy5jdXJyZW50UGllY2UgPSB0aGlzLmN1cnJlbnRCYWcuc2hpZnQoKTtcbiAgICB9XG5cbiAgICAvLyByZW1vdmVzIG9sZCBnaG9zdCBwb3NpdGlvbiBiZWZvcmUgc3dpdGNoaW5nIHRvIGEgbmV3IG9uZVxuICAgIGNsZWFyR2hvc3RQb3NpdGlvbigpIHtcbiAgICAgICAgbGV0IGNvb3JkaW5hdGVBcnJheXMgPSBPYmplY3QudmFsdWVzKHRoaXMuZ2hvc3RQb3NpdGlvbik7XG5cbiAgICAgICAgY29vcmRpbmF0ZUFycmF5cy5mb3JFYWNoKGFycmF5ID0+IHtcbiAgICAgICAgICAgIGFycmF5LmZvckVhY2goY29vcmRpbmF0ZSA9PiB7XG4gICAgICAgICAgICAgICAgbGV0IFtyb3csIGNvbF0gPSBbY29vcmRpbmF0ZVswXSwgY29vcmRpbmF0ZVsxXV07XG4gICAgICAgICAgICAgICAgdGhpcy5maWVsZFtyb3ddW2NvbF0gPSAwO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgY2xlYXJHaG9zdENsYXNzKCkge1xuICAgICAgICBsZXQgZmllbGRDb2x1bW5zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5maWVsZC1jb2x1bW5cIik7XG4gICAgICAgIGxldCBjb29yZGluYXRlQXJyYXlzID0gT2JqZWN0LnZhbHVlcyh0aGlzLmdob3N0UG9zaXRpb24pO1xuXG4gICAgICAgIGNvb3JkaW5hdGVBcnJheXMuZm9yRWFjaChhcnJheSA9PiB7XG4gICAgICAgICAgICBhcnJheS5mb3JFYWNoKGNvb3JkaW5hdGUgPT4ge1xuICAgICAgICAgICAgICAgIGxldCBbcm93LCBjb2xdID0gW2Nvb3JkaW5hdGVbMF0sIGNvb3JkaW5hdGVbMV1dO1xuICAgICAgICAgICAgICAgIGZpZWxkQ29sdW1uc1tjb2xdLmNoaWxkcmVuW3Jvd10uY2xhc3NMaXN0ID0gdGhpcy5jb2xvcnNbdGhpcy5jdXJyZW50UGllY2UuY29sb3JDb2RlXTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHNldEdob3N0UG9zaXRpb24oKSB7XG4gICAgICAgIGxldCBnaG9zdFBvc2l0aW9uID0ge1xuICAgICAgICAgICAgdG9wOiB0aGlzLmN1cnJlbnRQaWVjZS5wb3NpdGlvbi50b3AubWFwKGNvb3JkaW5hdGUgPT4gY29vcmRpbmF0ZS5zbGljZSgpKSxcbiAgICAgICAgICAgIG1pZGRsZTogdGhpcy5jdXJyZW50UGllY2UucG9zaXRpb24ubWlkZGxlLm1hcChjb29yZGluYXRlID0+IGNvb3JkaW5hdGUuc2xpY2UoKSksXG4gICAgICAgICAgICBib3R0b206IHRoaXMuY3VycmVudFBpZWNlLnBvc2l0aW9uLmJvdHRvbS5tYXAoY29vcmRpbmF0ZSA9PiBjb29yZGluYXRlLnNsaWNlKCkpXG4gICAgICAgIH1cblxuICAgICAgICBsZXQgc3RvcHBlZCA9IGZhbHNlO1xuICAgICAgICB3aGlsZSAoIXN0b3BwZWQpIHtcbiAgICAgICAgICAgIGxldCBoYW5naW5nU3F1YXJlcyA9IHRoaXMuY3VycmVudFBpZWNlLmhhbmdpbmdTcXVhcmVzKGdob3N0UG9zaXRpb24pO1xuICAgICAgICAgICAgaGFuZ2luZ1NxdWFyZXMuZm9yRWFjaChjb29yZGluYXRlID0+IHtcbiAgICAgICAgICAgICAgICBsZXQgW3JvdywgY29sXSA9IFtjb29yZGluYXRlWzBdLCBjb29yZGluYXRlWzFdXTtcbiAgICAgICAgICAgICAgICBpZiAocm93ICsgMSA9PT0gMjAgfHwgdGhpcy5maWVsZFtyb3cgKyAxXVtjb2xdKSBzdG9wcGVkID0gdHJ1ZTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgaWYgKHN0b3BwZWQpIGJyZWFrO1xuICAgICAgICAgICAgZ2hvc3RQb3NpdGlvbi50b3AgPSBnaG9zdFBvc2l0aW9uLnRvcC5tYXAoYXJyYXkgPT4gW2FycmF5WzBdICsgMSwgYXJyYXlbMV1dKTtcbiAgICAgICAgICAgIGdob3N0UG9zaXRpb24ubWlkZGxlID0gZ2hvc3RQb3NpdGlvbi5taWRkbGUubWFwKGFycmF5ID0+IFthcnJheVswXSArIDEsIGFycmF5WzFdXSk7XG4gICAgICAgICAgICBnaG9zdFBvc2l0aW9uLmJvdHRvbSA9IGdob3N0UG9zaXRpb24uYm90dG9tLm1hcChhcnJheSA9PiBbYXJyYXlbMF0gKyAxLCBhcnJheVsxXV0pO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuZ2hvc3RQb3NpdGlvbiA9IGdob3N0UG9zaXRpb247XG4gICAgICAgIHRoaXMuX3BvcHVsYXRlR2hvc3RQb3NpdGlvbigpO1xuICAgIH1cblxuICAgIF9wb3B1bGF0ZUdob3N0UG9zaXRpb24oKSB7XG4gICAgICAgIGxldCBjb29yZGluYXRlQXJyYXlzID0gT2JqZWN0LnZhbHVlcyh0aGlzLmdob3N0UG9zaXRpb24pO1xuXG4gICAgICAgIGNvb3JkaW5hdGVBcnJheXMuZm9yRWFjaChhcnJheSA9PiB7XG4gICAgICAgICAgICBhcnJheS5mb3JFYWNoKGNvb3JkaW5hdGUgPT4ge1xuICAgICAgICAgICAgICAgIGxldCBbcm93LCBjb2xdID0gW2Nvb3JkaW5hdGVbMF0sIGNvb3JkaW5hdGVbMV1dO1xuICAgICAgICAgICAgICAgIHRoaXMuZmllbGRbcm93XVtjb2xdID0gXCJ4XCI7XG4gICAgICAgICAgICB9KVxuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5yZW5kZXIoKTtcbiAgICB9XG5cbiAgICBwb3B1bGF0ZUZpZWxkKHBpZWNlKSB7XG4gICAgICAgIGxldCBjb29yZGluYXRlQXJyYXlzID0gT2JqZWN0LnZhbHVlcyhwaWVjZS5wb3NpdGlvbik7XG4gICAgICAgIGNvb3JkaW5hdGVBcnJheXMuZm9yRWFjaChhcnJheSA9PiB7XG4gICAgICAgICAgICBhcnJheS5mb3JFYWNoKGNvb3JkaW5hdGUgPT4ge1xuICAgICAgICAgICAgICAgIGxldCBbcm93LCBjb2xdID0gW2Nvb3JkaW5hdGVbMF0sIGNvb3JkaW5hdGVbMV1dO1xuICAgICAgICAgICAgICAgIHRoaXMuZmllbGRbcm93XVtjb2xdID0gcGllY2UuY29sb3JDb2RlO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgfSk7XG5cbiAgICAgICAgcGllY2UucmVtb3ZlU3F1YXJlcy5mb3JFYWNoKHBvc2l0aW9uQXJyYXkgPT4ge1xuICAgICAgICAgICAgbGV0IFtyb3csIGNvbF0gPSBbcG9zaXRpb25BcnJheVswXSwgcG9zaXRpb25BcnJheVsxXV07XG4gICAgICAgICAgICB0aGlzLmZpZWxkW3Jvd11bY29sXSA9IDA7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIC8vIGhvbGQgcGllY2UgZm9yIGxhdGVyIHVzZSBcbiAgICBob2xkKCkge1xuICAgICAgICBpZiAoIXRoaXMuY2FuSG9sZCkgcmV0dXJuO1xuXG4gICAgICAgIHRoaXMuY3VycmVudFBpZWNlLmNsZWFyU2VsZkZyb21Cb2FyZCh0aGlzLmZpZWxkKTsgXG5cbiAgICAgICAgdGhpcy5yZW5kZXIoKTtcblxuICAgICAgICBpZiAodGhpcy5ob2xkUGllY2UgPT09ICcnKSB7XG4gICAgICAgICAgICAvLyBwYXNzIGN1cnJlbnQgcGllY2UgbmFtZSBpbnRvIGdlbmVyYXRlIHBpZWNlIGluIG9yZGVyIHRvIGdlbmVyYXRlIGEgbmV3IHBpZWNlIGluc3RhbmNlXG4gICAgICAgICAgICB0aGlzLmhvbGRQaWVjZSA9IHRoaXMuX2dlbmVyYXRlUGllY2UodGhpcy5jdXJyZW50UGllY2UubmFtZSk7XG4gICAgICAgICAgICB0aGlzLl9zZXRDdXJyZW50UGllY2UoKTtcbiAgICAgICAgICAgIC8vIHJlLXJlbmRlciBuZXh0IGJveGVzIHRvIGFwcHJvcHJpYXRlbHkgc2hvdyBjdXJyZW50IGJhZ1xuICAgICAgICAgICAgdGhpcy5fc2hvd0N1cnJlbnRCYWcoKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuY3VycmVudFBpZWNlID0gdGhpcy5fZ2VuZXJhdGVQaWVjZSh0aGlzLmN1cnJlbnRQaWVjZS5uYW1lKTtcbiAgICAgICAgICAgIFt0aGlzLmN1cnJlbnRQaWVjZSwgdGhpcy5ob2xkUGllY2VdID0gW3RoaXMuaG9sZFBpZWNlLCB0aGlzLmN1cnJlbnRQaWVjZV07XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5jYW5Ib2xkID0gZmFsc2U7XG5cbiAgICAgICAgdGhpcy5fcG9wdWxhdGVIb2xkQm94KCk7XG4gICAgfVxuXG4gICAgX3BvcHVsYXRlSG9sZEJveCgpIHtcbiAgICAgICAgbGV0IGNvbHVtbnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmhvbGQtYm94XCIpLmNoaWxkcmVuO1xuXG4gICAgICAgIC8vIHJlbW92ZSBjb2xvcnMgZnJvbSBwcmV2aW91cyBwaWVjZXNcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCA1OyBpKyspIHtcbiAgICAgICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgNDsgaisrKSB7XG4gICAgICAgICAgICAgICAgLy8gY29sdW1ucy5jaGlsZHJlbiBpcyBub2RlbGlzdCBvZiA8bGlzPlxuICAgICAgICAgICAgICAgIGNvbHVtbnNbaV0uY2hpbGRyZW5bal0uY2xhc3NOYW1lID0gXCJcIjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuaG9sZFBpZWNlLmRpc3BsYXlTcXVhcmVzLmZvckVhY2goc3F1YXJlID0+IHtcbiAgICAgICAgICAgIGxldCBbY29sLCByb3ddID0gW3NxdWFyZVswXSwgc3F1YXJlWzFdXTtcbiAgICAgICAgICAgIGNvbHVtbnNbY29sXS5jaGlsZHJlbltyb3ddLmNsYXNzTGlzdC5hZGQodGhpcy5jb2xvcnNbdGhpcy5ob2xkUGllY2UuY29sb3JDb2RlXSk7XG4gICAgICAgIH0pXG5cbiAgICB9XG5cbiAgICAvLyB1c2VkIGZvciB0aGlzLmhvbGQoKTogZ2VuZXJhdGUgYSBuZXcgcGllY2Ugc28gdGhhdCBhIGhvbGRwaWVjZSB0aGF0IGlzIHJlLXJlbmRlcmVkIG9uIHRoZSBib2FyZCB3aWxsIG5vdCBzdGFydCBmcm9tIHRoZSBvbGQgcG9zaXRpb25cbiAgICBfZ2VuZXJhdGVQaWVjZShwaWVjZU5hbWUpIHtcbiAgICAgICAgc3dpdGNoKHBpZWNlTmFtZSkge1xuICAgICAgICAgICAgY2FzZSBcIlRQaWVjZVwiOlxuICAgICAgICAgICAgICAgIHJldHVybiBuZXcgVFBpZWNlO1xuICAgICAgICAgICAgY2FzZSBcIk9QaWVjZVwiOlxuICAgICAgICAgICAgICAgIHJldHVybiBuZXcgT1BpZWNlO1xuICAgICAgICAgICAgY2FzZSBcIklQaWVjZVwiOlxuICAgICAgICAgICAgICAgIHJldHVybiBuZXcgSVBpZWNlO1xuICAgICAgICAgICAgY2FzZSBcIkxQaWVjZVwiOlxuICAgICAgICAgICAgICAgIHJldHVybiBuZXcgTFBpZWNlO1xuICAgICAgICAgICAgY2FzZSBcIkpQaWVjZVwiOlxuICAgICAgICAgICAgICAgIHJldHVybiBuZXcgSlBpZWNlO1xuICAgICAgICAgICAgY2FzZSBcIlNQaWVjZVwiOlxuICAgICAgICAgICAgICAgIHJldHVybiBuZXcgU1BpZWNlO1xuICAgICAgICAgICAgY2FzZSBcIlpQaWVjZVwiOlxuICAgICAgICAgICAgICAgIHJldHVybiBuZXcgWlBpZWNlO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLy8gdGFrZSBvbmUgcGllY2UgZnJvbSBuZXh0QmFnIGFuZCBhZGQgdG8gY3VycmVudEJhZ1xuICAgIF9hZGRUb0N1cnJlbnRCYWcoKSB7XG4gICAgICAgIHRoaXMuY3VycmVudEJhZy5wdXNoKHRoaXMubmV4dEJhZy5zaGlmdCgpKTtcbiAgICB9XG5cbiAgICBfc2hvd0N1cnJlbnRCYWcoKSB7XG4gICAgICAgIGxldCBib3hlcyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJuZXh0LWJveFwiKTtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCA1OyBpKyspIHtcbiAgICAgICAgICAgIHRoaXMuX3BvcHVsYXRlTmV4dEJveChib3hlc1tpXSwgdGhpcy5jdXJyZW50QmFnW2ldKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIF9wb3B1bGF0ZU5leHRCb3goYm94LCBwaWVjZSkge1xuICAgICAgICAvLyBjb2x1bW5zIGlzIG5vZGVsaXN0IG9mIDx1bHM+XG4gICAgICAgIGxldCBjb2x1bW5zID0gYm94LmNoaWxkcmVuO1xuXG4gICAgICAgIC8vIHJlbW92ZSBjb2xvcnMgZnJvbSBwcmV2aW91cyBwaWVjZXNcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCA1OyBpKyspIHtcbiAgICAgICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgNDsgaisrKSB7XG4gICAgICAgICAgICAgICAgLy8gY29sdW1ucy5jaGlsZHJlbiBpcyBub2RlbGlzdCBvZiA8bGlzPlxuICAgICAgICAgICAgICAgIGNvbHVtbnNbaV0uY2hpbGRyZW5bal0uY2xhc3NOYW1lID0gXCJcIjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHBpZWNlLmRpc3BsYXlTcXVhcmVzLmZvckVhY2goc3F1YXJlID0+IHtcbiAgICAgICAgICAgIGxldCBbY29sLCByb3ddID0gW3NxdWFyZVswXSwgc3F1YXJlWzFdXTtcbiAgICAgICAgICAgIGNvbHVtbnNbY29sXS5jaGlsZHJlbltyb3ddLmNsYXNzTGlzdC5hZGQodGhpcy5jb2xvcnNbcGllY2UuY29sb3JDb2RlXSk7XG4gICAgICAgIH0pXG4gICAgfVxuXG4gICAgLy8gcmVmaWxsIG5leHQgYmFnLCB3aWxsIG9ubHkgYmUgY2FsbGVkIG9uY2UgbmV4dEJhZyBiZWNvbWVzIGVtcHR5XG4gICAgX3JlZmlsbE5leHRCYWcoKSB7XG4gICAgICAgIHRoaXMubmV4dEJhZyA9IHRoaXMuX2dlbmVyYXRlQmFnKCk7XG4gICAgfVxuXG4gICAgLy8gaW1wbGVtZW50YXRpb24gb2Ygc2h1ZmZsZSBmb3VuZCBvbiBodHRwczovL3N0YWNrb3ZlcmZsb3cuY29tL3F1ZXN0aW9ucy8yNDUwOTU0L2hvdy10by1yYW5kb21pemUtc2h1ZmZsZS1hLWphdmFzY3JpcHQtYXJyYXkjMjQ1MDk3NlxuICAgIF9zaHVmZmxlQmFnKGJhZykge1xuICAgICAgICB2YXIgY3VycmVudEluZGV4ID0gYmFnLmxlbmd0aCwgdGVtcG9yYXJ5VmFsdWUsIHJhbmRvbUluZGV4O1xuXG4gICAgICAgIC8vIFdoaWxlIHRoZXJlIHJlbWFpbiBlbGVtZW50cyB0byBzaHVmZmxlLi4uXG4gICAgICAgIHdoaWxlICgwICE9PSBjdXJyZW50SW5kZXgpIHtcblxuICAgICAgICAgICAgLy8gUGljayBhIHJlbWFpbmluZyBlbGVtZW50Li4uXG4gICAgICAgICAgICByYW5kb21JbmRleCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIGN1cnJlbnRJbmRleCk7XG4gICAgICAgICAgICBjdXJyZW50SW5kZXggLT0gMTtcblxuICAgICAgICAgICAgLy8gQW5kIHN3YXAgaXQgd2l0aCB0aGUgY3VycmVudCBlbGVtZW50LlxuICAgICAgICAgICAgdGVtcG9yYXJ5VmFsdWUgPSBiYWdbY3VycmVudEluZGV4XTtcbiAgICAgICAgICAgIGJhZ1tjdXJyZW50SW5kZXhdID0gYmFnW3JhbmRvbUluZGV4XTtcbiAgICAgICAgICAgIGJhZ1tyYW5kb21JbmRleF0gPSB0ZW1wb3JhcnlWYWx1ZTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gYmFnO1xuICAgIH1cbiAgICAvLyBpbXBsZW1lbnRhdGlvbiBvZiBzaHVmZmxlIGZvdW5kIG9uIGh0dHBzOi8vc3RhY2tvdmVyZmxvdy5jb20vcXVlc3Rpb25zLzI0NTA5NTQvaG93LXRvLXJhbmRvbWl6ZS1zaHVmZmxlLWEtamF2YXNjcmlwdC1hcnJheSMyNDUwOTc2XG5cbiAgICBfZ2FtZU92ZXIoKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICAvLyBsb29rIHRocm91Z2ggZmllbGQsIGlmIGZpZWxkW3Jvd11bY29sXSBjb250YWlucyBhIG51bWJlciA+IDAsIGZpbGwgdGhhdCBzcG90IHdpdGggdGhlIHJlc3BlY3RpdmUgY29sb3IuIEVsc2UsIHJlbW92ZSBjb2xvclxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgbGV0IGZpZWxkQ29sdW1ucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuZmllbGQtY29sdW1uXCIpO1xuICAgICAgICB0aGlzLmZpZWxkLmZvckVhY2goKHJvdywgcm93SWR4KSA9PiB7XG4gICAgICAgICAgICByb3cuZm9yRWFjaCgoY29sLCBjb2xJZHgpID0+IHtcbiAgICAgICAgICAgICAgICBsZXQgc3F1YXJlVmFsdWUgPSB0aGlzLmZpZWxkW3Jvd0lkeF1bY29sSWR4XTtcbiAgICAgICAgICAgICAgICBpZiAoc3F1YXJlVmFsdWUgPT09ICd4Jykge1xuICAgICAgICAgICAgICAgICAgICBmaWVsZENvbHVtbnNbY29sSWR4XS5jaGlsZHJlbltyb3dJZHhdLmNsYXNzTGlzdC5hZGQoYHgtJHt0aGlzLmNvbG9yc1t0aGlzLmN1cnJlbnRQaWVjZS5jb2xvckNvZGVdfWApO1xuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoc3F1YXJlVmFsdWUpIHtcbiAgICAgICAgICAgICAgICAgICAgZmllbGRDb2x1bW5zW2NvbElkeF0uY2hpbGRyZW5bcm93SWR4XS5jbGFzc0xpc3QuYWRkKHRoaXMuY29sb3JzW3NxdWFyZVZhbHVlXSk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgT2JqZWN0LnZhbHVlcyh0aGlzLmNvbG9ycykuZm9yRWFjaChjb2xvciA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBmaWVsZENvbHVtbnNbY29sSWR4XS5jaGlsZHJlbltyb3dJZHhdLmNsYXNzTGlzdC5yZW1vdmUoY29sb3IpO1xuICAgICAgICAgICAgICAgICAgICAgICAgZmllbGRDb2x1bW5zW2NvbElkeF0uY2hpbGRyZW5bcm93SWR4XS5jbGFzc0xpc3QucmVtb3ZlKGB4LSR7Y29sb3J9YCk7XG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGtleUxpc3RlbmVyKCkge1xuICAgICAgICBkb2N1bWVudC5ib2R5LmFkZEV2ZW50TGlzdGVuZXIoXCJrZXlkb3duXCIsIGV2ZW50ID0+IHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGV2ZW50KTtcbiAgICAgICAgICAgIHRoaXMuY3VycmVudFBpZWNlLnNldExlZnRNb3N0QW5kUmlnaHRNb3N0KCk7XG4gICAgICAgICAgICB0aGlzLmNsZWFyR2hvc3RQb3NpdGlvbigpO1xuICAgICAgICAgICAgc3dpdGNoKGV2ZW50LndoaWNoKSB7XG4gICAgICAgICAgICAgICAgLy8gdXAga2V5XG4gICAgICAgICAgICAgICAgY2FzZSAzODpcbiAgICAgICAgICAgICAgICAgICAgLy8gcGFzcyBmaWVsZCBzbyBwaWVjZSBjYW4gY2hlY2sgZmllbGQgd2FsbCBiZWZvcmUgdHVybmluZ1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmN1cnJlbnRQaWVjZS5tb3ZlKFwidXBcIiwgdGhpcy5maWVsZCk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMucG9wdWxhdGVGaWVsZCh0aGlzLmN1cnJlbnRQaWVjZSk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0R2hvc3RQb3NpdGlvbigpO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAvLyByaWdodCBrZXlcbiAgICAgICAgICAgICAgICBjYXNlIDM5OlxuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5jdXJyZW50UGllY2UucmlnaHRTaWRlQmxvY2tlZCh0aGlzLmZpZWxkKSkgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY3VycmVudFBpZWNlLm1vdmUoXCJyaWdodFwiKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wb3B1bGF0ZUZpZWxkKHRoaXMuY3VycmVudFBpZWNlKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRHaG9zdFBvc2l0aW9uKCk7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIC8vIGRvd24ga2V5XG4gICAgICAgICAgICAgICAgY2FzZSA0MDpcbiAgICAgICAgICAgICAgICAgICAgaWYgKCF0aGlzLmN1cnJlbnRQaWVjZS5pc0ZhbGxpbmcodGhpcy5maWVsZCkpIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmN1cnJlbnRQaWVjZS5tb3ZlKFwiZG93blwiKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wb3B1bGF0ZUZpZWxkKHRoaXMuY3VycmVudFBpZWNlKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRHaG9zdFBvc2l0aW9uKCk7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIC8vIGxlZnQga2V5XG4gICAgICAgICAgICAgICAgY2FzZSAzNzpcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuY3VycmVudFBpZWNlLmxlZnRTaWRlQmxvY2tlZCh0aGlzLmZpZWxkKSkgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY3VycmVudFBpZWNlLm1vdmUoXCJsZWZ0XCIpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnBvcHVsYXRlRmllbGQodGhpcy5jdXJyZW50UGllY2UpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnNldEdob3N0UG9zaXRpb24oKTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgLy8gc2hpZnQga2V5XG4gICAgICAgICAgICAgICAgY2FzZSAxNjogXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuaG9sZCgpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnBvcHVsYXRlRmllbGQodGhpcy5jdXJyZW50UGllY2UpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnNldEdob3N0UG9zaXRpb24oKTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgLy8gc3BhY2UgYmFyXG4gICAgICAgICAgICAgICAgY2FzZSAzMjpcbiAgICAgICAgICAgICAgICAgICAgLy8gdGhpcy5yZW5kZXIoKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jdXJyZW50UGllY2UuaGFyZERyb3AodGhpcy5maWVsZCk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMucmVuZGVyKCk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMucG9wdWxhdGVGaWVsZCh0aGlzLmN1cnJlbnRQaWVjZSk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuaGFuZGxlUGllY2VTdG9wKHRoaXMuY2xlYXJIYW5kbGUpO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNldEdob3N0UG9zaXRpb24oKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHRoaXMuY3VycmVudFBpZWNlKTtcbiAgICAgICAgICAgIHRoaXMuY3VycmVudFBpZWNlLnNldExlZnRNb3N0QW5kUmlnaHRNb3N0KCk7XG4gICAgICAgICAgICAvLyBtZXNzZXMgdXAgd2l0aCBwaWVjZSBjb2xvclxuICAgICAgICAgICAgLy8gdGhpcy5wb3B1bGF0ZUZpZWxkKHRoaXMuY3VycmVudFBpZWNlKTtcbiAgICAgICAgICAgIHRoaXMucmVuZGVyKCk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGNsZWFyTGluZXMobG93ZXN0LCBoaWdoZXN0KSB7XG4gICAgICAgIC8vIGJhc2UgY2FzZTogaWYgd2UgcmVhY2ggYSByb3cgdGhhdCBpcyBoaWdoZXIgdGhhbiB0aGUgaGlnaGVzdCwgdGhlbiBleGl0XG4gICAgICAgIGlmIChsb3dlc3QgPCBoaWdoZXN0KSByZXR1cm47XG4gICAgICAgIC8vIHJlY3Vyc2l2ZSBjYXNlOiBcbiAgICAgICAgLy8gaWYgbG93ZXN0IHJvdyBkb2VzIG5vdCBjb250YWluIGEgMCwgYnJpbmcgYWxsIGFib3ZlIHJvd3MgZG93biBvbmUgbGV2ZWxcbiAgICAgICAgaWYgKCF0aGlzLmZpZWxkW2xvd2VzdF0uaW5jbHVkZXMoMCkpIHtcbiAgICAgICAgICAgIHRoaXMuX2JyaW5nRG93bkZpZWxkKGxvd2VzdCk7XG4gICAgICAgICAgICAvLyBjYWxsIHJlY3Vyc2l2ZUNsZWFyKGxvd2VzdCwgaGlnaGVzdCArIDEpO1xuICAgICAgICAgICAgdGhpcy5jbGVhckxpbmVzKGxvd2VzdCwgaGlnaGVzdCArIDEpXG4gICAgICAgIC8vIGlmIHJ3IGNvbnRhaW5zIGEgMCBcbiAgICAgICAgLy8gY2FsbCBDbGVhckxpbmVzKGxvd2VzdCAtIDEsIGhpZ2hlc3QpXG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy5maWVsZFtsb3dlc3RdLmluY2x1ZGVzKDApKSB7XG4gICAgICAgICAgICB0aGlzLmNsZWFyTGluZXMobG93ZXN0IC0gMSwgaGlnaGVzdCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBfYnJpbmdEb3duRmllbGQoc3RhcnRpbmdSb3cpIHtcbiAgICAgICAgZm9yIChsZXQgaSA9IHN0YXJ0aW5nUm93OyBpID4gMDsgaS0tKSB7XG4gICAgICAgICAgICB0aGlzLmZpZWxkW2ldID0gdGhpcy5maWVsZFtpIC0gMV07XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5maWVsZFswXSA9IFswLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwXTtcbiAgICB9XG5cbiAgICBoYW5kbGVQaWVjZVN0b3AoY2xlYXIpIHsgICAgIFxuICAgICAgICAvLyBhbGxvdyBwbGF5ZXIgdG8gaG9sZCBwaWVjZSBhZ2FpblxuICAgICAgICB0aGlzLmNhbkhvbGQgPSB0cnVlO1xuICAgICAgICBsZXQgbG93ZXN0ID0gdGhpcy5jdXJyZW50UGllY2UucG9zaXRpb24uYm90dG9tWzBdWzBdO1xuICAgICAgICAvLyBpbiBjYXNlIG9mIGxpbmUgcGllY2UsIHdoaWNoIG1heSBub3QgaGF2ZSB0aGlzLnBvc2l0aW9uLnRvcFxuICAgICAgICBsZXQgaGlnaGVzdCA9ICF0aGlzLmN1cnJlbnRQaWVjZS5wb3NpdGlvbi50b3AubGVuZ3RoID8gbG93ZXN0IDogdGhpcy5jdXJyZW50UGllY2UucG9zaXRpb24udG9wWzBdWzBdO1xuICAgICAgICB0aGlzLmNsZWFyTGluZXMobG93ZXN0LCBoaWdoZXN0KTtcbiAgICAgICAgdGhpcy5jbGVhckdob3N0Q2xhc3MoKTtcbiAgICAgICAgY2xlYXJJbnRlcnZhbChjbGVhcik7XG4gICAgICAgIHRoaXMucGxheSgpO1xuICAgIH1cbiAgICBcbiAgICBwbGF5KCkge1xuICAgICAgICB0aGlzLl9zZXRDdXJyZW50UGllY2UoKTtcbiAgICAgICAgdGhpcy5wb3B1bGF0ZUZpZWxkKHRoaXMuY3VycmVudFBpZWNlKTtcbiAgICAgICAgdGhpcy5fYWRkVG9DdXJyZW50QmFnKCk7XG4gICAgICAgIHRoaXMuX3Nob3dDdXJyZW50QmFnKCk7XG4gICAgICAgIGlmICghdGhpcy5uZXh0QmFnLmxlbmd0aCkgdGhpcy5fcmVmaWxsTmV4dEJhZygpO1xuICAgICAgICB0aGlzLnNldEdob3N0UG9zaXRpb24oKTtcbiAgICAgICAgXG4gICAgICAgIGxldCBjbGVhciA9IHNldEludGVydmFsKCgpID0+IHtcbiAgICAgICAgICAgIHRoaXMuY2xlYXJIYW5kbGUgPSBjbGVhcjtcbiAgICAgICAgICAgIHRoaXMucG9wdWxhdGVGaWVsZCh0aGlzLmN1cnJlbnRQaWVjZSk7XG4gICAgICAgICAgICB0aGlzLnJlbmRlcigpO1xuICAgICAgICAgICAgaWYgKCF0aGlzLmN1cnJlbnRQaWVjZS5pc0ZhbGxpbmcodGhpcy5maWVsZCkpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmhhbmRsZVBpZWNlU3RvcChjbGVhcik7XG4gICAgICAgICAgICB9ICAgXG4gICAgICAgICAgICB0aGlzLmN1cnJlbnRQaWVjZS5kcm9wKCk7XG4gICAgICAgICAgICB0aGlzLnBvcHVsYXRlRmllbGQodGhpcy5jdXJyZW50UGllY2UpOyAvLyBrZWVwIG9ubHkgb25lIHBvcHVsYXRlIGZpZWxkP1xuICAgICAgICAgICAgdGhpcy5yZW5kZXIoKTtcbiAgICAgICAgfSwgMTAwMCk7XG4gICAgfVxuXG59IiwiaW1wb3J0IEdhbWUgZnJvbSAnLi9nYW1lL2dhbWUnO1xuaW1wb3J0IEZpZWxkIGZyb20gJy4vZmllbGQvZmllbGQnO1xuXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCAoKSA9PiB7XG4gICAgY29uc3QgZmllbGRDb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImZpZWxkLWNvbnRhaW5lclwiKTtcblxuICAgIGxldCBmaWVsZCA9IG5ldyBGaWVsZCgpO1xuICAgIGZpZWxkLmNyZWF0ZUZpZWxkV2l0aEhvbGRCb3hBbmROZXh0Qm94ZXMoZmllbGRDb250YWluZXIpO1xuXG4gICAgbGV0IGdhbWUgPSBuZXcgR2FtZSgpO1xuICAgIGdhbWUua2V5TGlzdGVuZXIoKTtcbiAgICBnYW1lLnBsYXkoZmllbGRDb250YWluZXIpO1xuXG59KTsiLCJpbXBvcnQgUGllY2UgZnJvbSAnLi9waWVjZSc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIElQaWVjZSBleHRlbmRzIFBpZWNlIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgdGhpcy5uYW1lID0gXCJJUGllY2VcIjtcbiAgICAgICAgdGhpcy5wb3NpdGlvbiA9IHtcbiAgICAgICAgICAgIHRvcDogW10sXG4gICAgICAgICAgICBtaWRkbGU6IFtdLFxuICAgICAgICAgICAgYm90dG9tOiBbWzEsIDNdLCBbMSwgNF0sIFsxLCA1XSwgWzEsIDZdXVxuICAgICAgICB9O1xuICAgICAgICB0aGlzLmNvbG9yQ29kZSA9IDI7XG4gICAgICAgIHRoaXMudHVybmluZ1BvaW50ID0gWzEsIDVdO1xuICAgICAgICB0aGlzLmRpc3BsYXlTcXVhcmVzID0gW1swLCAyXSwgWzEsIDJdLCBbMiwgMl0sIFszLCAyXV07XG5cbiAgICAgICAgdGhpcy5yZW1vdmVTcXVhcmVzID0gW107XG4gICAgfVxuXG5cbn1cblxuXG4iLCJpbXBvcnQgUGllY2UgZnJvbSAnLi9waWVjZSc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIGpQaWVjZSBleHRlbmRzIFBpZWNlIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgdGhpcy5uYW1lID0gXCJKUGllY2VcIjtcbiAgICAgICAgdGhpcy5wb3NpdGlvbiA9IHtcbiAgICAgICAgICAgIHRvcDogW1swLCAzXV0sXG4gICAgICAgICAgICBtaWRkbGU6IFtdLFxuICAgICAgICAgICAgYm90dG9tOiBbWzEsIDNdLCBbMSwgNF0sIFsxLCA1XV1cbiAgICAgICAgfTtcbiAgICAgICAgdGhpcy5jb2xvckNvZGUgPSA3O1xuXG4gICAgICAgIHRoaXMudHVybmluZ1BvaW50ID0gWzEsIDRdO1xuXG4gICAgICAgIHRoaXMuZGlzcGxheVNxdWFyZXMgPSBbWzEsIDFdLCBbMSwgMl0sIFsyLCAyXSwgWzMsIDJdXTtcbiBcbiAgICAgICAgdGhpcy5yZW1vdmVTcXVhcmVzID0gW107XG4gICAgfVxufSIsImltcG9ydCBQaWVjZSBmcm9tICcuL3BpZWNlJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgbFBpZWNlIGV4dGVuZHMgUGllY2Uge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICB0aGlzLm5hbWUgPSBcIkxQaWVjZVwiO1xuICAgICAgICB0aGlzLnBvc2l0aW9uID0ge1xuICAgICAgICAgICAgdG9wOiBbWzAsIDVdXSxcbiAgICAgICAgICAgIG1pZGRsZTogW10sXG4gICAgICAgICAgICBib3R0b206IFtbMSwgM10sIFsxLCA0XSwgWzEsIDVdXVxuICAgICAgICB9O1xuICAgICAgICB0aGlzLmNvbG9yQ29kZSA9IDY7XG5cbiAgICAgICAgdGhpcy50dXJuaW5nUG9pbnQgPSBbMSwgNF07XG5cbiAgICAgICAgdGhpcy5kaXNwbGF5U3F1YXJlcyA9IFtbMSwgMl0sIFsyLCAyXSwgWzMsIDJdLCBbMywgMV1dO1xuXG4gICAgICAgIHRoaXMucmVtb3ZlU3F1YXJlcyA9IFtdO1xuICAgIH1cbn0iLCJpbXBvcnQgUGllY2UgZnJvbSAnLi9waWVjZSc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE9QaWVjZSBleHRlbmRzIFBpZWNlIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgdGhpcy5uYW1lID0gXCJPUGllY2VcIjtcbiAgICAgICAgdGhpcy5wb3NpdGlvbiA9IHtcbiAgICAgICAgICAgIHRvcDogW1swLCA0XSwgWzAsIDVdXSxcbiAgICAgICAgICAgIG1pZGRsZTogW10sXG4gICAgICAgICAgICBib3R0b206IFtbMSwgNF0sWzEsIDVdXVxuICAgICAgICB9O1xuICAgICAgICB0aGlzLmNvbG9yQ29kZSA9IDE7XG4gICAgICAgIHRoaXMudHVybmluZ1BvaW50ID0gWzEsIDRdO1xuICAgICAgICB0aGlzLmRpc3BsYXlTcXVhcmVzID0gW1sxLCAxXSwgWzIsIDFdLCBbMSwgMl0sIFsyLCAyXV07XG5cbiAgICAgICAgdGhpcy5yZW1vdmVTcXVhcmVzID0gW107XG4gICAgfVxuXG4gICAgLy8gT1BpZWNlIGRvZXMgbm90IHR1cm5cbiAgICB0dXJuUmlnaHQoKSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG59ICIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIFBpZWNlIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5sZWZ0TW9zdCA9ICcnO1xuICAgICAgICB0aGlzLnJpZ2h0TW9zdCA9ICcnO1xuICAgIH1cblxuICAgIHNldExlZnRNb3N0QW5kUmlnaHRNb3N0KCkge1xuICAgICAgICBsZXQgbGVmdE1vc3Q7XG4gICAgICAgIGxldCByaWdodE1vc3Q7XG4gICAgICAgIE9iamVjdC52YWx1ZXModGhpcy5wb3NpdGlvbikuZm9yRWFjaChjb29yZGluYXRlc0FycmF5ID0+IGNvb3JkaW5hdGVzQXJyYXkuZm9yRWFjaChhcnJheSA9PiB7XG4gICAgICAgICAgICBsZXQgY29sdW1uVmFsdWUgPSBhcnJheVsxXTtcbiAgICAgICAgICAgIGlmICghbGVmdE1vc3QpIGxlZnRNb3N0ID0gY29sdW1uVmFsdWU7XG4gICAgICAgICAgICBpZiAoIXJpZ2h0TW9zdCkgcmlnaHRNb3N0ID0gY29sdW1uVmFsdWU7XG4gICAgICAgICAgICBpZiAoY29sdW1uVmFsdWUgPCBsZWZ0TW9zdCkgbGVmdE1vc3QgPSBjb2x1bW5WYWx1ZTtcbiAgICAgICAgICAgIGlmIChjb2x1bW5WYWx1ZSA+IHJpZ2h0TW9zdCkgcmlnaHRNb3N0ID0gY29sdW1uVmFsdWU7XG4gICAgICAgIH0pKTtcbiAgICAgICAgdGhpcy5sZWZ0TW9zdCA9IGxlZnRNb3N0O1xuICAgICAgICB0aGlzLnJpZ2h0TW9zdCA9IHJpZ2h0TW9zdDtcbiAgICB9XG5cbiAgICBfcG9wdWxhdGVGaWVsZChmaWVsZCkge1xuICAgICAgICBcbiAgICAgICAgbGV0IGNvb3JkaW5hdGVBcnJheXMgPSBPYmplY3QudmFsdWVzKHRoaXMucG9zaXRpb24pO1xuXG4gICAgICAgIGNvb3JkaW5hdGVBcnJheXMuZm9yRWFjaChhcnJheSA9PiB7XG4gICAgICAgICAgICBhcnJheS5mb3JFYWNoKGNvb3JkaW5hdGUgPT4ge1xuICAgICAgICAgICAgICAgIGxldCBbcm93LCBjb2xdID0gW2Nvb3JkaW5hdGVbMF0sIGNvb3JkaW5hdGVbMV1dO1xuICAgICAgICAgICAgICAgIGZpZWxkW3Jvd11bY29sXSA9IHRoaXMuY29sb3JDb2RlO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgfSk7XG5cbiAgICAgICAgdGhpcy5yZW1vdmVTcXVhcmVzLmZvckVhY2gocG9zaXRpb25BcnJheSA9PiB7XG4gICAgICAgICAgICBsZXQgW3JvdywgY29sXSA9IFtwb3NpdGlvbkFycmF5WzBdLCBwb3NpdGlvbkFycmF5WzFdXTtcbiAgICAgICAgICAgIGZpZWxkW3Jvd11bY29sXSA9IDA7XG4gICAgICAgIH0pO1xuICAgICAgICBcbiAgICB9XG5cbiAgICAvLyBjb21wYXJlcyB0d28gYXJyYXlzIG9mIGNvb3JkaW5hdGVzIGFuZCBjaGVjayBpZiB0aGV5IGhhdmUgdGhlIHNhbWUgY29udGVudCBpbiB0aGUgc2FtZSBvcmRlclxuICAgIF9zcXVhcmVzQXJlRXF1YWwob2xkU3F1YXJlLCBuZXdTcXVhcmUpIHtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBvbGRTcXVhcmUubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGlmIChvbGRTcXVhcmVbaV0gIT09IG5ld1NxdWFyZVtpXSkgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cblxuICAgIF9pbmNsdWRlcyhzcXVhcmUsIGNvb3JkaW5hdGVBcnJheXMpIHtcbiAgICAgICAgbGV0IHJlc3VsdCA9IGZhbHNlO1xuICAgICAgICBjb29yZGluYXRlQXJyYXlzLmZvckVhY2goYXJyYXkgPT4ge1xuICAgICAgICAgICAgaWYgKHRoaXMuX3NxdWFyZXNBcmVFcXVhbChzcXVhcmUsIGFycmF5KSkge1xuICAgICAgICAgICAgICAgIHJlc3VsdCA9IHRydWU7IFxuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG5cbiAgICBkcm9wKCkge1xuICAgICAgICBsZXQgb2xkUG9zaXRpb24gPSB7XG4gICAgICAgICAgICB0b3A6IHRoaXMucG9zaXRpb24udG9wLm1hcChhcnJheSA9PiBhcnJheS5zbGljZSgpKSxcbiAgICAgICAgICAgIG1pZGRsZTogdGhpcy5wb3NpdGlvbi5taWRkbGUubWFwKGFycmF5ID0+IGFycmF5LnNsaWNlKCkpLFxuICAgICAgICAgICAgYm90dG9tOiB0aGlzLnBvc2l0aW9uLmJvdHRvbS5tYXAoYXJyYXkgPT4gYXJyYXkuc2xpY2UoKSksXG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLnBvc2l0aW9uLnRvcCA9IHRoaXMucG9zaXRpb24udG9wLm1hcChhcnJheSA9PiBbYXJyYXlbMF0gKyAxLCBhcnJheVsxXV0pO1xuICAgICAgICB0aGlzLnBvc2l0aW9uLm1pZGRsZSA9IHRoaXMucG9zaXRpb24ubWlkZGxlLm1hcChhcnJheSA9PiBbYXJyYXlbMF0gKyAxLCBhcnJheVsxXV0pO1xuICAgICAgICB0aGlzLnBvc2l0aW9uLmJvdHRvbSA9IHRoaXMucG9zaXRpb24uYm90dG9tLm1hcChhcnJheSA9PiBbYXJyYXlbMF0gKyAxLCBhcnJheVsxXV0pO1xuICAgICAgICB0aGlzLnR1cm5pbmdQb2ludCA9IFt0aGlzLnR1cm5pbmdQb2ludFswXSArIDEsIHRoaXMudHVybmluZ1BvaW50WzFdXTtcblxuICAgICAgICB0aGlzLnNldFJlbW92ZVNxdWFyZXMob2xkUG9zaXRpb24pO1xuICAgIH1cblxuICAgIC8vIGZpbmQgaGlnaGVzdCBwb3NzaWJsZSBncm91bmQtcG9zaXRpb24gZm9yIHBpZWNlXG4gICAgaGFyZERyb3AoZmllbGQpIHtcbiAgICAgICAgdGhpcy5jbGVhclNlbGZGcm9tQm9hcmQoZmllbGQpO1xuICAgICAgICBsZXQgc3RvcHBlZCA9IGZhbHNlO1xuICAgICAgICB3aGlsZSghc3RvcHBlZCkge1xuICAgICAgICAgICAgbGV0IGhhbmdpbmdTcXVhcmVzID0gdGhpcy5oYW5naW5nU3F1YXJlcyh0aGlzLnBvc2l0aW9uKTtcbiAgICAgICAgICAgIGhhbmdpbmdTcXVhcmVzLmZvckVhY2goY29vcmRpbmF0ZSA9PiB7XG4gICAgICAgICAgICAgICAgbGV0IFtyb3csIGNvbF0gPSBbY29vcmRpbmF0ZVswXSwgY29vcmRpbmF0ZVsxXV07XG4gICAgICAgICAgICAgICAgaWYgKChyb3cgKyAxID09PSAyMCB8fCBmaWVsZFtyb3cgKyAxXVtjb2xdKSkgc3RvcHBlZCA9IHRydWU7XG4gICAgICAgICAgICB9KTsgXG4gICAgICAgICAgICBpZiAoc3RvcHBlZCkgYnJlYWs7XG4gICAgICAgICAgICB0aGlzLnBvc2l0aW9uLnRvcCA9IHRoaXMucG9zaXRpb24udG9wLm1hcChhcnJheSA9PiBbYXJyYXlbMF0gKyAxLCBhcnJheVsxXV0pO1xuICAgICAgICAgICAgdGhpcy5wb3NpdGlvbi5taWRkbGUgPSB0aGlzLnBvc2l0aW9uLm1pZGRsZS5tYXAoYXJyYXkgPT4gW2FycmF5WzBdICsgMSwgYXJyYXlbMV1dKTtcbiAgICAgICAgICAgIHRoaXMucG9zaXRpb24uYm90dG9tID0gdGhpcy5wb3NpdGlvbi5ib3R0b20ubWFwKGFycmF5ID0+IFthcnJheVswXSArIDEsIGFycmF5WzFdXSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjbGVhclNlbGZGcm9tQm9hcmQoZmllbGQpIHtcbiAgICAgICAgT2JqZWN0LnZhbHVlcyh0aGlzLnBvc2l0aW9uKS5mb3JFYWNoKGNvb3JkaW5hdGVBcnJheXMgPT4gY29vcmRpbmF0ZUFycmF5cy5mb3JFYWNoKGNvb3JkaW5hdGUgPT4ge1xuICAgICAgICAgICAgbGV0IHJvdyA9IGNvb3JkaW5hdGVbMF07XG4gICAgICAgICAgICBsZXQgY29sID0gY29vcmRpbmF0ZVsxXTtcbiAgICAgICAgICAgIGZpZWxkW3Jvd11bY29sXSA9IDA7XG4gICAgICAgIH0pKTtcbiAgICB9XG5cbiAgICBtb3ZlKGRpcmVjdGlvbiwgZmllbGQpIHtcbiAgICAgICAgbGV0IG9sZFBvc2l0aW9uID0ge1xuICAgICAgICAgICAgdG9wOiB0aGlzLnBvc2l0aW9uLnRvcC5tYXAoYXJyYXkgPT4gYXJyYXkuc2xpY2UoKSksXG4gICAgICAgICAgICBtaWRkbGU6IHRoaXMucG9zaXRpb24ubWlkZGxlLm1hcChhcnJheSA9PiBhcnJheS5zbGljZSgpKSxcbiAgICAgICAgICAgIGJvdHRvbTogdGhpcy5wb3NpdGlvbi5ib3R0b20ubWFwKGFycmF5ID0+IGFycmF5LnNsaWNlKCkpLFxuICAgICAgICB9XG4gICAgICAgIHN3aXRjaChkaXJlY3Rpb24pIHtcbiAgICAgICAgICAgIGNhc2UgXCJsZWZ0XCI6ICBcbiAgICAgICAgICAgICAgICB0aGlzLnBvc2l0aW9uLnRvcCA9IHRoaXMucG9zaXRpb24udG9wLm1hcChhcnJheSA9PiBbYXJyYXlbMF0sIGFycmF5WzFdIC0gMV0pO1xuICAgICAgICAgICAgICAgIHRoaXMucG9zaXRpb24ubWlkZGxlID0gdGhpcy5wb3NpdGlvbi5taWRkbGUubWFwKGFycmF5ID0+IFthcnJheVswXSwgYXJyYXlbMV0gLSAxXSk7XG4gICAgICAgICAgICAgICAgdGhpcy5wb3NpdGlvbi5ib3R0b20gPSB0aGlzLnBvc2l0aW9uLmJvdHRvbS5tYXAoYXJyYXkgPT4gW2FycmF5WzBdLCBhcnJheVsxXSAtIDFdKTtcbiAgICAgICAgICAgICAgICB0aGlzLnR1cm5pbmdQb2ludCA9IFt0aGlzLnR1cm5pbmdQb2ludFswXSwgdGhpcy50dXJuaW5nUG9pbnRbMV0gLSAxXTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgXCJ1cFwiOlxuICAgICAgICAgICAgICAgIC8vIGRlZmVyIHRvIHN1YmNsYXNzIFwidHVyblwiIG1ldGhvZFxuICAgICAgICAgICAgICAgIHRoaXMudHVyblJpZ2h0KGZpZWxkKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgXCJyaWdodFwiOlxuICAgICAgICAgICAgICAgIHRoaXMucG9zaXRpb24udG9wID0gdGhpcy5wb3NpdGlvbi50b3AubWFwKGFycmF5ID0+IFthcnJheVswXSwgYXJyYXlbMV0gKyAxXSk7XG4gICAgICAgICAgICAgICAgdGhpcy5wb3NpdGlvbi5taWRkbGUgPSB0aGlzLnBvc2l0aW9uLm1pZGRsZS5tYXAoYXJyYXkgPT4gW2FycmF5WzBdLCBhcnJheVsxXSArIDFdKTtcbiAgICAgICAgICAgICAgICB0aGlzLnBvc2l0aW9uLmJvdHRvbSA9IHRoaXMucG9zaXRpb24uYm90dG9tLm1hcChhcnJheSA9PiBbYXJyYXlbMF0sIGFycmF5WzFdICsgMV0pO1xuICAgICAgICAgICAgICAgIHRoaXMudHVybmluZ1BvaW50ID0gW3RoaXMudHVybmluZ1BvaW50WzBdLCB0aGlzLnR1cm5pbmdQb2ludFsxXSArIDFdO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBcImRvd25cIjpcbiAgICAgICAgICAgICAgICB0aGlzLnBvc2l0aW9uLnRvcCA9IHRoaXMucG9zaXRpb24udG9wLm1hcChhcnJheSA9PiBbYXJyYXlbMF0gKyAxLCBhcnJheVsxXV0pO1xuICAgICAgICAgICAgICAgIHRoaXMucG9zaXRpb24ubWlkZGxlID0gdGhpcy5wb3NpdGlvbi5taWRkbGUubWFwKGFycmF5ID0+IFthcnJheVswXSArIDEsIGFycmF5WzFdXSk7XG4gICAgICAgICAgICAgICAgdGhpcy5wb3NpdGlvbi5ib3R0b20gPSB0aGlzLnBvc2l0aW9uLmJvdHRvbS5tYXAoYXJyYXkgPT4gW2FycmF5WzBdICsgMSwgYXJyYXlbMV1dKTtcbiAgICAgICAgICAgICAgICB0aGlzLnR1cm5pbmdQb2ludCA9IFt0aGlzLnR1cm5pbmdQb2ludFswXSArIDEsIHRoaXMudHVybmluZ1BvaW50WzFdXTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnNldFJlbW92ZVNxdWFyZXMob2xkUG9zaXRpb24pO1xuICAgIH1cblxuICAgIHR1cm5SaWdodChmaWVsZCkge1xuICAgICAgICBsZXQgc3F1YXJlcyA9IFtdO1xuICAgICAgICBPYmplY3QudmFsdWVzKHRoaXMucG9zaXRpb24pLmZvckVhY2goY29vcmRpbmF0ZXNBcnJheSA9PiBzcXVhcmVzLnB1c2goLi4uY29vcmRpbmF0ZXNBcnJheSkpO1xuICAgICAgICB0aGlzLnBvc2l0aW9uLnRvcCA9IFtdO1xuICAgICAgICB0aGlzLnBvc2l0aW9uLm1pZGRsZSA9IFtdO1xuICAgICAgICB0aGlzLnBvc2l0aW9uLmJvdHRvbSA9IFtdO1xuICAgICAgICBzcXVhcmVzLmZvckVhY2goc3F1YXJlID0+IHtcbiAgICAgICAgICAgIGxldCBjb2x1bW4gPSBzcXVhcmVbMV07XG4gICAgICAgICAgICBsZXQgaGVpZ2h0RGlmZmVyZW5jZSA9IHRoaXMudHVybmluZ1BvaW50WzBdIC0gc3F1YXJlWzBdO1xuICAgICAgICAgICAgbGV0IHdpZHRoRGlmZmVyZW5jZSA9IHRoaXMudHVybmluZ1BvaW50WzFdIC0gc3F1YXJlWzFdO1xuICAgICAgICAgICAgbGV0IG5ld0NvbCA9IHRoaXMudHVybmluZ1BvaW50WzFdICsgaGVpZ2h0RGlmZmVyZW5jZTtcbiAgICAgICAgICAgIGxldCBuZXdSb3cgPSB0aGlzLnR1cm5pbmdQb2ludFswXSArICh3aWR0aERpZmZlcmVuY2UgKiAtMSk7XG4gICAgICAgICAgICBzd2l0Y2ggKGNvbHVtbikge1xuICAgICAgICAgICAgICAgIGNhc2UgY29sdW1uID0gdGhpcy5yaWdodE1vc3Q6XG4gICAgICAgICAgICAgICAgICAgIHRoaXMucG9zaXRpb24uYm90dG9tLnB1c2goW25ld1JvdywgbmV3Q29sXSk7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgY29sdW1uID0gdGhpcy5sZWZ0TW9zdDpcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wb3NpdGlvbi50b3AucHVzaChbbmV3Um93LCBuZXdDb2xdKTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wb3NpdGlvbi5taWRkbGUucHVzaChbbmV3Um93LCBuZXdDb2xdKTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgICAgIC8vIGZpbmQgbGVmdCBhbmQgcmlnaHQgbW9zdCBzcXVhcmVzIHRvIHNlZSBpZiBwaWVjZSB0aHJvdWdoIHdhbGxcbiAgICAgICAgLy8gaWYgdGhyb3VnaCB3YWxsLCBwdXNoIHBpZWNlIGJhY2sgaW50byBmaWVsZFxuICAgICAgICB0aGlzLnNldExlZnRNb3N0QW5kUmlnaHRNb3N0KCk7XG4gICAgICAgIFxuICAgICAgICB3aGlsZSAodGhpcy5yaWdodE1vc3QgPiA5IHx8IHRoaXMubGVmdE1vc3QgPCAwKSB7XG4gICAgICAgICAgICB0aGlzLnJpZ2h0TW9zdCA+IDkgPyB0aGlzLm1vdmUoJ2xlZnQnKSA6IHRoaXMubW92ZSgncmlnaHQnKTtcbiAgICAgICAgICAgIHRoaXMuc2V0TGVmdE1vc3RBbmRSaWdodE1vc3QoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIGluIHRoZSBjYXNlIHRoYXQgdGhlIElQaWVjZSBpcyB0dXJuZWQgdGhyb3VnaCB0aGUgZmllbGQgY2VpbGluZ1xuICAgICAgICBpZiAodGhpcy5wb3NpdGlvbi50b3AubGVuZ3RoKSB7XG4gICAgICAgICAgICB3aGlsZSAodGhpcy5wb3NpdGlvbi50b3BbMF1bMF0gPCAwKSB0aGlzLm1vdmUoJ2Rvd24nKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8vIGNvbXBhcmUgb2xkIHBvc2l0aW9uIG9mIHBpZWNlIHdpdGggbmV3IHBvc2l0aW9uIFxuICAgIHNldFJlbW92ZVNxdWFyZXMob2xkUG9zaXRpb24pIHtcbiAgICAgICAgbGV0IG9sZFNxdWFyZXMgPSBbXTtcbiAgICAgICAgbGV0IG5ld1NxdWFyZXMgPSBbXTtcbiAgICAgICAgT2JqZWN0LnZhbHVlcyhvbGRQb3NpdGlvbikuZm9yRWFjaChjb29yZGluYXRlc0FycmF5ID0+IG9sZFNxdWFyZXMucHVzaCguLi5jb29yZGluYXRlc0FycmF5KSk7XG4gICAgICAgIE9iamVjdC52YWx1ZXModGhpcy5wb3NpdGlvbikuZm9yRWFjaChjb29yZGluYXRlc0FycmF5ID0+IG5ld1NxdWFyZXMucHVzaCguLi5jb29yZGluYXRlc0FycmF5KSk7XG4gICAgICAgIC8vIGtlZXAgdHJhY2sgb2Ygc3F1YXJlcyB0aGF0IHRoZSBwb3NpdGlvbnMgZG8gbm90IGhhdmUgaW4gY29tbW9uIChzcXVhcmVzIHRvIHJlbW92ZSBjb2xvciBmcm9tKVxuICAgICAgICB0aGlzLnJlbW92ZVNxdWFyZXMgPSBvbGRTcXVhcmVzLmZpbHRlcihvbGRTcXVhcmUgPT4ge1xuICAgICAgICAgICAgaWYgKCF0aGlzLl9pbmNsdWRlcyhvbGRTcXVhcmUsIG5ld1NxdWFyZXMpKSByZXR1cm4gb2xkU3F1YXJlO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBoYW5naW5nU3F1YXJlcyhwb3NpdGlvbikge1xuICAgICAgICBsZXQgc3F1YXJlcyA9IFtdO1xuICAgICAgICBsZXQgaGFuZ2luZ1NxdWFyZXMgPSBbXTtcbiAgICAgICAgT2JqZWN0LnZhbHVlcyhwb3NpdGlvbikuZm9yRWFjaChjb29yZGluYXRlQXJyYXkgPT4gc3F1YXJlcy5wdXNoKC4uLmNvb3JkaW5hdGVBcnJheSkpXG4gICAgICAgIHNxdWFyZXMuZm9yRWFjaChzcXVhcmUgPT4ge1xuICAgICAgICAgICAgbGV0IGJlbG93U3F1YXJlID0gW3NxdWFyZVswXSArIDEsIHNxdWFyZVsxXV07XG4gICAgICAgICAgICBpZiAoIXRoaXMuX2luY2x1ZGVzKGJlbG93U3F1YXJlLCBzcXVhcmVzKSkgaGFuZ2luZ1NxdWFyZXMucHVzaChzcXVhcmUpO1xuICAgICAgICB9KVxuICAgICAgICByZXR1cm4gaGFuZ2luZ1NxdWFyZXM7XG4gICAgfSBcblxuICAgIHNpZGVTcXVhcmVzKCkge1xuICAgICAgICBsZXQgc3F1YXJlcyA9IFtdO1xuICAgICAgICBsZXQgc2lkZVNxdWFyZXMgPSB7XG4gICAgICAgICAgICBsZWZ0OiBbXSxcbiAgICAgICAgICAgIHJpZ2h0OiBbXVxuICAgICAgICB9O1xuICAgICAgICBPYmplY3QudmFsdWVzKHRoaXMucG9zaXRpb24pLmZvckVhY2goY29vcmRpbmF0ZUFycmF5ID0+IHNxdWFyZXMucHVzaCguLi5jb29yZGluYXRlQXJyYXkpKTtcbiAgICAgICAgc3F1YXJlcy5mb3JFYWNoKHNxdWFyZSA9PiB7XG4gICAgICAgICAgICBsZXQgYWRqYWNlbnRMZWZ0ID0gW3NxdWFyZVswXSwgc3F1YXJlWzFdIC0gMV07XG4gICAgICAgICAgICBsZXQgYWRqYWNlbnRSaWdodCA9IFtzcXVhcmVbMF0sIHNxdWFyZVsxXSArIDFdO1xuICAgICAgICAgICAgaWYgKCF0aGlzLl9pbmNsdWRlcyhhZGphY2VudExlZnQsIHNxdWFyZXMpKSBzaWRlU3F1YXJlcy5sZWZ0LnB1c2goc3F1YXJlKTtcbiAgICAgICAgICAgIGlmICghdGhpcy5faW5jbHVkZXMoYWRqYWNlbnRSaWdodCwgc3F1YXJlcykpIHNpZGVTcXVhcmVzLnJpZ2h0LnB1c2goc3F1YXJlKTtcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiBzaWRlU3F1YXJlcztcbiAgICB9XG5cbiAgICBpc0ZhbGxpbmcoZmllbGQpIHtcbiAgICAgICAgbGV0IHJlc3VsdCA9IHRydWU7XG4gICAgICAgIHRoaXMuaGFuZ2luZ1NxdWFyZXModGhpcy5wb3NpdGlvbikuZm9yRWFjaChjb29yZGluYXRlUGFpciA9PiB7XG4gICAgICAgICAgICBsZXQgW3JvdywgY29sXSA9IFtjb29yZGluYXRlUGFpclswXSwgY29vcmRpbmF0ZVBhaXJbMV1dO1xuICAgICAgICAgICAgLy8gaWYgdGhlIHBpZWNlJ3MgY3VycmVudCBwb3NpdGlvbiBpcyBhYm92ZSB0aGUgZmllbGQgZmxvb3Igb3IgYSBhbm90aGVyIHBpZWNlIChub3QgaW5jbHVkZSBnaG9zdCBwaWVjZSlcbiAgICAgICAgICAgIGlmICghZmllbGRbcm93ICsgMV0gfHwgKGZpZWxkW3JvdyArIDFdW2NvbF0gJiYgZmllbGRbcm93ICsgMV1bY29sXSAhPT0gXCJ4XCIpKSB7XG4gICAgICAgICAgICAgICAgcmVzdWx0ID0gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cblxuICAgIHJpZ2h0U2lkZUJsb2NrZWQoZmllbGQpIHtcbiAgICAgICAgbGV0IHJlc3VsdCA9IGZhbHNlO1xuICAgICAgICB0aGlzLnNpZGVTcXVhcmVzKCkucmlnaHQuZm9yRWFjaChjb29yZGluYXRlUGFpciA9PiB7XG4gICAgICAgICAgICBsZXQgW3JvdywgY29sXSA9IFtjb29yZGluYXRlUGFpclswXSwgY29vcmRpbmF0ZVBhaXJbMV1dO1xuICAgICAgICAgICAgLy8gaWYgYW55IHJpZ2h0IGZhY2luZyBzcXVhcmUgaGl0cyB0aGUgd2FsbCBvciBhbm90aGVyIHBpZWNlXG4gICAgICAgICAgICBpZiAoY29sID09PSA5IHx8IGZpZWxkW3Jvd11bY29sICsgMV0pIHtcbiAgICAgICAgICAgICAgICByZXN1bHQgPSB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG5cbiAgICBsZWZ0U2lkZUJsb2NrZWQoZmllbGQpIHtcbiAgICAgICAgbGV0IHJlc3VsdCA9IGZhbHNlO1xuICAgICAgICB0aGlzLnNpZGVTcXVhcmVzKCkubGVmdC5mb3JFYWNoKGNvb3JkaW5hdGVQYWlyID0+IHtcbiAgICAgICAgICAgIGxldCBbcm93LCBjb2xdID0gW2Nvb3JkaW5hdGVQYWlyWzBdLCBjb29yZGluYXRlUGFpclsxXV07XG4gICAgICAgICAgICAvLyBpZiBhbnkgbGVmdCBmYWNpbmcgc3F1YXJlIGhpdHMgdGhlIHdhbGwgb3IgYW5vdGhlciBwaWVjZVxuICAgICAgICAgICAgaWYgKGNvbCA9PT0gMCB8fCBmaWVsZFtyb3ddW2NvbCAtIDFdKSB7XG4gICAgICAgICAgICAgICAgcmVzdWx0ID0gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxufSIsImltcG9ydCBQaWVjZSBmcm9tICcuL3BpZWNlJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU1BpZWNlIGV4dGVuZHMgUGllY2Uge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICB0aGlzLm5hbWUgPSBcIlNQaWVjZVwiO1xuICAgICAgICB0aGlzLnBvc2l0aW9uID0ge1xuICAgICAgICAgICAgdG9wOiBbWzAsIDRdLCBbMCwgNV1dLFxuICAgICAgICAgICAgbWlkZGxlOiBbXSxcbiAgICAgICAgICAgIGJvdHRvbTogW1sxLCAzXSwgWzEsIDRdXVxuICAgICAgICB9O1xuICAgICAgICB0aGlzLmNvbG9yQ29kZSA9IDQ7XG5cbiAgICAgICAgdGhpcy50dXJuaW5nUG9pbnQgPSBbMSwgNF07XG5cbiAgICAgICAgdGhpcy5kaXNwbGF5U3F1YXJlcyA9IFtbMywgMV0sIFsyLCAxXSwgWzIsIDJdLCBbMSwgMl1dO1xuXG4gICAgICAgIHRoaXMucmVtb3ZlU3F1YXJlcyA9IFtdO1xuICAgIH1cbn0iLCJpbXBvcnQgUGllY2UgZnJvbSAnLi9waWVjZSc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRQaWVjZSBleHRlbmRzIFBpZWNlIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgdGhpcy5uYW1lID0gXCJUUGllY2VcIjtcbiAgICAgICAgdGhpcy5wb3NpdGlvbiA9IHtcbiAgICAgICAgICAgIHRvcDogW1swLCA0XV0sXG4gICAgICAgICAgICBtaWRkbGU6IFtdLFxuICAgICAgICAgICAgYm90dG9tOiBbWzEsIDNdLCBbMSwgNF0sIFsxLCA1XV0sXG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5jb2xvckNvZGUgPSAzO1xuXG4gICAgICAgIHRoaXMudHVybmluZ1BvaW50ID0gWzEsIDRdO1xuXG4gICAgICAgIHRoaXMuZGlzcGxheVNxdWFyZXMgPSBbWzEsIDJdLCBbMiwgMl0sIFszLCAyXSwgWzIsIDFdXTtcblxuICAgICAgICB0aGlzLnJlbW92ZVNxdWFyZXMgPSBbXTtcbiAgICB9XG59IiwiaW1wb3J0IFBpZWNlIGZyb20gJy4vcGllY2UnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBaUGllY2UgZXh0ZW5kcyBQaWVjZSB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIHRoaXMubmFtZSA9IFwiWlBpZWNlXCI7XG4gICAgICAgIHRoaXMucG9zaXRpb24gPSB7XG4gICAgICAgICAgICB0b3A6IFtbMCwgM10sIFswLCA0XV0sXG4gICAgICAgICAgICBtaWRkbGU6IFtdLFxuICAgICAgICAgICAgYm90dG9tOiBbWzEsIDRdLCBbMSwgNV1dXG4gICAgICAgIH07XG4gICAgICAgIHRoaXMuY29sb3JDb2RlID0gNTtcblxuICAgICAgICB0aGlzLnR1cm5pbmdQb2ludCA9IFsxLCA0XTtcblxuICAgICAgICB0aGlzLmRpc3BsYXlTcXVhcmVzID0gW1sxLCAxXSwgWzIsIDFdLCBbMiwgMl0sIFszLCAyXV07XG5cbiAgICAgICAgdGhpcy5yZW1vdmVTcXVhcmVzID0gW107XG4gICAgfVxufSJdLCJzb3VyY2VSb290IjoiIn0=