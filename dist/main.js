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
/* harmony import */ var _queue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./queue */ "./src/field/queue.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }





var Field =
/*#__PURE__*/
function () {
  function Field(fieldNum) {
    _classCallCheck(this, Field);

    this.fieldNum = fieldNum;
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
    }
  }, {
    key: "_createColumn",
    value: function _createColumn() {
      var column = document.createElement("ul");
      column.classList.add("field-column", "field-".concat(this.fieldNum));

      for (var i = 0; i < 20; i++) {
        column.append(document.createElement("li"));
      }

      return column;
    }
  }, {
    key: "_createField",
    value: function _createField() {
      var field = document.createElement("div");
      field.classList.add("field-box", "field-".concat(this.fieldNum));

      for (var i = 0; i < 10; i++) {
        field.appendChild(this._createColumn());
      }

      return field;
    }
  }, {
    key: "createCompleteField",
    value: function createCompleteField(container) {
      var queue = new _queue__WEBPACK_IMPORTED_MODULE_2__["default"](this.fieldNum);
      var nextBox = new _nextBox__WEBPACK_IMPORTED_MODULE_1__["default"](this.fieldNum);
      var holdBox = new _holdbox__WEBPACK_IMPORTED_MODULE_0__["default"](this.fieldNum);
      container.append(this._createField());
      container.append(queue.createQueue());
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
  function HoldBox(fieldNum) {
    _classCallCheck(this, HoldBox);

    this.fieldNum = fieldNum;
  }

  _createClass(HoldBox, [{
    key: "_createBoxColumn",
    value: function _createBoxColumn() {
      var column = document.createElement("ul");
      column.classList.add("hold-column", "field-".concat(this.fieldNum));

      for (var i = 0; i < 4; i++) {
        column.append(document.createElement("li"));
      }

      return column;
    }
  }, {
    key: "createBox",
    value: function createBox() {
      var boxWrapper = document.createElement("div");
      boxWrapper.classList.add("hold-box-wrapper", "field-".concat(this.fieldNum));
      var box = document.createElement("div");
      box.classList.add("hold-box", "field-".concat(this.fieldNum));
      var heading = document.createElement("h2");
      heading.innerHTML = "HOLD";
      boxWrapper.appendChild(heading);
      boxWrapper.appendChild(box);

      for (var i = 0; i < 5; i++) {
        box.appendChild(this._createBoxColumn());
      }

      return boxWrapper;
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
  function NextBox(fieldNum) {
    _classCallCheck(this, NextBox);

    this.fieldNum = fieldNum;
  }

  _createClass(NextBox, [{
    key: "_createNextBoxColumn",
    value: function _createNextBoxColumn() {
      var column = document.createElement("ul");
      column.classList.add("next-column", "field-".concat(this.fieldNum));

      for (var i = 0; i < 4; i++) {
        column.append(document.createElement("li"));
      }

      return column;
    }
  }, {
    key: "_createNextBox",
    value: function _createNextBox() {
      var box = document.createElement("div");
      box.classList.add("next-box", "field-".concat(this.fieldNum));

      for (var i = 0; i < 5; i++) {
        box.appendChild(this._createNextBoxColumn());
      }

      return box;
    }
  }, {
    key: "createNextBoxes",
    value: function createNextBoxes() {
      var boxes = document.createElement("div");
      var heading = document.createElement("h2");
      heading.innerHTML = "NEXT";
      boxes.classList.add("next-boxes", "field-".concat(this.fieldNum));
      boxes.appendChild(heading);

      for (var i = 0; i < 5; i++) {
        boxes.appendChild(this._createNextBox());
      }

      return boxes;
    }
  }]);

  return NextBox;
}();



/***/ }),

/***/ "./src/field/queue.js":
/*!****************************!*\
  !*** ./src/field/queue.js ***!
  \****************************/
/*! exports provided: default, adjustQueueHeight */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Queue; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "adjustQueueHeight", function() { return adjustQueueHeight; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Queue =
/*#__PURE__*/
function () {
  function Queue(fieldNum) {
    _classCallCheck(this, Queue);

    this.fieldNum = fieldNum;
  }

  _createClass(Queue, [{
    key: "createQueue",
    value: function createQueue() {
      var queue = document.createElement("div");
      queue.classList.add("queue", "field-".concat(this.fieldNum));
      var queueMeter = document.createElement("div");
      queueMeter.classList.add("queue-meter", "field-".concat(this.fieldNum));
      queue.appendChild(queueMeter);
      return queue;
    }
  }]);

  return Queue;
}();


var adjustQueueHeight = function adjustQueueHeight(fieldNum, percentage) {
  var queueMeter = document.querySelector(".queue-meter.field-".concat(fieldNum));
  if (percentage > 100) percentage = 100;
  queueMeter.style.height = "".concat(percentage, "%");
};

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
/* harmony import */ var _field_queue__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../field/queue */ "./src/field/queue.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }











var Game =
/*#__PURE__*/
function () {
  function Game(options) {
    _classCallCheck(this, Game);

    this.field = this.setField();
    this.colors = {
      1: "yellow",
      2: "blue",
      3: "purple",
      4: "green",
      5: "red",
      6: "orange",
      7: "dark-blue",
      8: "grey"
    };
    this.gameNum = options.gameNum;
    this.currentBag = this.shuffleBag(this.generateBag());
    this.currentPiece = '';
    this.holdPiece = '';
    this.ghostPosition = '';
    this.nextBag = this.shuffleBag(this.generateBag()); // prevents player from holding piece multiple times

    this.canHold = true;
    this.handleClear = {
      drop: '',
      right: '',
      left: '',
      down: ''
    }; // for animations

    this.dropSpeed = 1;
    this.moveSpeed = options.moveSpeed;
    this.dropPiece = this.dropPiece.bind(this);
    this.drop = this.drop.bind(this);
    this.move = this.move.bind(this);
    this.movePiece = this.movePiece.bind(this); // keep track of the following variables for requestAnimationFrame throttling

    this.animate = {
      drop: {
        fpsInterval: '',
        startTime: '',
        now: '',
        then: ''
      },
      right: {
        fpsInterval: '',
        startTime: '',
        now: '',
        then: ''
      },
      left: {
        fpsInterval: '',
        startTime: '',
        now: '',
        then: ''
      },
      down: {
        fpsInterval: '',
        startTime: '',
        now: '',
        then: ''
      } // pausing the game

    };
    this.isPaused = false;
    this.keyHeld = {
      down: false,
      right: false,
      left: false
    };
    this.opponent = "";
    this.controls = options.controls;
    this.upcomingLines = 0;
    this.combo = -1;
    this.tSpin = false;
    this.tSpinStreak = false;
    this.comboGuide = {
      0: 0,
      1: 0,
      2: 1,
      3: 1,
      4: 1,
      5: 2,
      6: 2,
      7: 3,
      8: 3,
      9: 4,
      10: 4,
      11: 4,
      12: 5
    }; // single player

    this.startElevating = this.startElevating.bind(this);
    this.clearElevateInterval = '';
    this.elevateDelay = 5000;
    this.clearTimer = '';
  }

  _createClass(Game, [{
    key: "generateBag",
    value: function generateBag() {
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
    key: "setField",
    value: function setField() {
      var field = new _field_field__WEBPACK_IMPORTED_MODULE_0__["default"]();
      return field._generateField();
    } // take piece from currentBag and set it as the current piece

  }, {
    key: "setCurrentPiece",
    value: function setCurrentPiece() {
      this.currentPiece = this.currentBag.shift();
    } // removes old ghost position from this.field before changing piece position

  }, {
    key: "clearGhostPosition",
    value: function clearGhostPosition() {
      var _this = this;

      var coordinateArrays = Object.values(this.ghostPosition);
      coordinateArrays.forEach(function (array) {
        array.forEach(function (coordinate) {
          var _ref = [coordinate[0], coordinate[1]],
              row = _ref[0],
              col = _ref[1]; // prevent method from clearing piece if it happens to be where the ghost position should be

          if (_this.field[row] && _this.field[row][col] === "x" && row >= 0) _this.field[row][col] = 0;
        });
      });
    } // clears the color classes from the browser field

  }, {
    key: "clearGhostClass",
    value: function clearGhostClass() {
      var _this2 = this;

      var fieldColumns = document.querySelectorAll(".field-column.field-".concat(this.gameNum));
      debugger;
      Object.values(this.ghostPosition).forEach(function (array) {
        array.forEach(function (coordinate) {
          var _ref2 = [coordinate[0], coordinate[1]],
              row = _ref2[0],
              col = _ref2[1];
          var fieldSquare = fieldColumns[col].children[row];
          debugger;

          if (fieldSquare) {
            fieldSquare.classList = _this2.colors[_this2.currentPiece.colorCode];
          }
        });
      });
    } // find appropriate ghost position as piece position changes

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
          if (row < 0 || row + 1 === 20 || _this3.field[row + 1][col]) stopped = true;
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
    } // populate this.field with 'x' wherever the ghost position is calculated to be

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
          if (_this4.field[row] && _this4.field[row][col] !== _this4.currentPiece.colorCode) _this4.field[row][col] = "x";
        });
      });
      this.render();
    } // hold piece for later use 

  }, {
    key: "hold",
    value: function hold() {
      if (!this.canHold) return;
      this.currentPiece.clearSelfFromBoard(this.field);
      this.render();

      if (!this.holdPiece) {
        // pass current piece name into generate piece in order to generate a new piece instance
        this.holdPiece = this._generatePiece(this.currentPiece.name);
        this.setCurrentPiece(); // re-render next boxes to appropriately show current bag

        this.showCurrentBag();
      } else {
        this.currentPiece = this._generatePiece(this.currentPiece.name);
        var _ref5 = [this.holdPiece, this.currentPiece];
        this.currentPiece = _ref5[0];
        this.holdPiece = _ref5[1];
      } // disable hold-piece right after player holds a piece


      this.canHold = false;

      this._populateHoldBox();
    }
  }, {
    key: "_populateHoldBox",
    value: function _populateHoldBox() {
      var _this5 = this;

      var columns = document.querySelector(".hold-box.field-".concat(this.gameNum)).children; // remove colors from previous pieces

      for (var i = 0; i < 5; i++) {
        for (var j = 0; j < 4; j++) {
          // columns.children is nodelist of <lis>
          columns[i].children[j].className = "";
        }
      }

      this.holdPiece.displaySquares.forEach(function (square) {
        var _ref6 = [square[0], square[1]],
            col = _ref6[0],
            row = _ref6[1];
        columns[col].children[row].classList.add(_this5.colors[_this5.holdPiece.colorCode]);
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
    key: "addToCurrentBag",
    value: function addToCurrentBag() {
      this.currentBag.push(this.nextBag.shift());
    }
  }, {
    key: "showCurrentBag",
    value: function showCurrentBag() {
      var boxes = document.getElementsByClassName("next-box field-".concat(this.gameNum));

      for (var i = 0; i < 5; i++) {
        this._populateNextBox(boxes[i], this.currentBag[i]);
      }
    }
  }, {
    key: "_populateNextBox",
    value: function _populateNextBox(box, piece) {
      var _this6 = this;

      // columns is nodelist of <uls>
      var columns = box.children; // remove colors from previous piece

      for (var i = 0; i < 5; i++) {
        for (var j = 0; j < 4; j++) {
          // columns.children is nodelist of <lis>
          columns[i].children[j].className = "";
        }
      } // populate box with new piece


      piece.displaySquares.forEach(function (square) {
        var _ref7 = [square[0], square[1]],
            col = _ref7[0],
            row = _ref7[1];
        columns[col].children[row].classList.add(_this6.colors[piece.colorCode]);
      });
    } // refill next bag, will only be called once nextBag becomes empty

  }, {
    key: "refillNextBag",
    value: function refillNextBag() {
      this.nextBag = this.generateBag();
    } // implementation of shuffle found on https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array#2450976

  }, {
    key: "shuffleBag",
    value: function shuffleBag(bag) {
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
    // look through field, if field[row][col] contains a number > 0, fill that spot with the respective color. 
    // if contains an 'x', populate with ghost piece styles.
    // else, remove color

  }, {
    key: "render",
    value: function render() {
      var _this7 = this;

      // if (this.currentPiece.rightMost[1] > 9 || this.currentPiece.leftMost[1] < 0) return;
      var fieldColumns = document.querySelectorAll(".field-column.field-".concat(this.gameNum));
      this.field.forEach(function (row, rowIdx) {
        row.forEach(function (col, colIdx) {
          var squareValue = _this7.field[rowIdx][colIdx];

          if (squareValue === 'x') {
            fieldColumns[colIdx].children[rowIdx].classList.add("x-".concat(_this7.colors[_this7.currentPiece.colorCode]));
          } else if (squareValue) {
            fieldColumns[colIdx].children[rowIdx].classList.add(_this7.colors[squareValue]);
            fieldColumns[colIdx].children[rowIdx].classList.remove("x-".concat(_this7.colors[_this7.currentPiece.colorCode]));
          } else {
            fieldColumns[colIdx].children[rowIdx].classList = "";
          }
        });
      });
    }
  }, {
    key: "keyListener",
    value: function keyListener() {
      var _this8 = this;

      document.body.addEventListener("keydown", function (event) {
        if (_this8.gameIsOver) return;

        _this8.currentPiece.setOuterSquares(); // this.clearGhostPosition();


        switch (event.which) {
          // up key
          case _this8.controls.turnRight:
            // pass field so piece can check field wall before turning
            _this8.clearGhostPosition();

            _this8.tSpin = _this8.currentPiece.move("turnRight", _this8.field);

            _this8.currentPiece.populateField(_this8.field);

            _this8.setGhostPosition();

            break;
          // C key

          case _this8.controls.turnLeft:
            // pass field so piece can check field wall before turning
            _this8.clearGhostPosition();

            _this8.currentPiece.move("turnLeft", _this8.field);

            _this8.currentPiece.populateField(_this8.field);

            _this8.setGhostPosition();

            break;
          // left key

          case _this8.controls.left:
            _this8.keyHeld.left = true;
            if (_this8.currentPiece.leftSideBlocked(_this8.field)) break;

            _this8.movePiece("left");

            break;
          // right key

          case _this8.controls.right:
            _this8.keyHeld.right = true;
            if (_this8.currentPiece.rightSideBlocked(_this8.field)) break;

            _this8.movePiece("right");

            break;
          // down key

          case _this8.controls.softDrop:
            _this8.keyHeld.down = true;

            _this8.movePiece("down");

            break;
          // shift key

          case _this8.controls.hold:
            _this8.clearGhostPosition();

            _this8.hold();

            _this8.currentPiece.populateField(_this8.field);

            _this8.setGhostPosition();

            break;
          // space bar

          case _this8.controls.hardDrop:
            // this.render();
            _this8.clearGhostPosition();

            _this8.currentPiece.hardDrop(_this8.field);

            _this8.render();

            _this8.currentPiece.populateField(_this8.field);

            _this8.handlePieceStop(_this8.handleClear.drop);

            break;
          // P key

          case 80:
            _this8.isPaused ? _this8.dropPiece(_this8.dropSpeed) : cancelAnimationFrame(_this8.handleClear.drop);
            _this8.isPaused = !_this8.isPaused;
            break;

          default:
            break;
        }

        _this8.currentPiece.setOuterSquares();

        _this8.render();
      });
      document.body.addEventListener("keyup", function (event) {
        switch (event.which) {
          case _this8.controls.right:
            _this8.keyHeld.right = false;
            break;

          case _this8.controls.left:
            _this8.keyHeld.left = false;
            break;

          case _this8.controls.softDrop:
            _this8.keyHeld.down = false;
            break;
        }
      });
    }
  }, {
    key: "clearLines",
    value: function clearLines(lowest, highest, numLinesCleared) {
      if (lowest < 0) return; // base case: if we reach a row that is higher than the highest, then return number of lines that were cleared

      if (lowest < highest) {
        debugger;
        return numLinesCleared;
      }

      ; // recursive case: 
      // if lowest row does not contain a 0, bring all above rows down one level

      if (!this.field[lowest].includes(0)) {
        this._bringDownField(lowest);

        return this.clearLines(lowest, highest + 1, numLinesCleared + 1); // if row contains a 0, row is not cleared yet 
      } else if (this.field[lowest].includes(0)) {
        return this.clearLines(lowest - 1, highest, numLinesCleared);
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
    value: function handlePieceStop() {
      // allow player to hold piece again
      this.canHold = true;
      var lowest = this.currentPiece.position.bottom[0][0]; // in case of line piece, which may not have this.position.top

      var highest = !this.currentPiece.position.top.length ? lowest : this.currentPiece.position.top[0][0]; // check if a TPiece was spun in place

      if (this.currentPiece.name === "TPiece") {
        var _ref8 = [this.currentPiece.leftMost[0], this.currentPiece.rightMost[0]],
            leftMostRow = _ref8[0],
            rightMostRow = _ref8[1];
        var _ref9 = [this.currentPiece.leftMost[1], this.currentPiece.rightMost[1]],
            leftMostCol = _ref9[0],
            rightMostCol = _ref9[1];

        if (this.field[leftMostRow - 1] && this.field[rightMostRow - 1]) {
          if (this.field[leftMostRow - 1][leftMostCol] || this.field[rightMostRow - 1][rightMostCol]) this.tSpin = true;
        }
      }

      var numLinesCleared = this.clearLines(lowest, highest, 0); // in the case of multiplayer, send cleared lines to opponent and receive potential lines

      if (this.opponent) {
        if (this.tSpinStreak === true) debugger;

        if (numLinesCleared > 0) {
          this.combo += 1;
          var numLines;

          if (numLinesCleared < 4) {
            if (this.currentPiece.name === "TPiece" && this.tSpin) {
              numLines = numLinesCleared === 3 ? 6 : 4;
            } else {
              numLines = numLinesCleared - 1;
              this.tSpinStreak = false;
            }
          } else {
            numLines = 4;
          }

          numLines += this.comboGuide[this.combo];
          if (this.tSpinStreak) numLines += 2;

          if (this.upcomingLines > 0) {
            this.upcomingLines -= numLines;

            if (this.upcomingLines < 0) {
              this.opponent.addLinesToQueue(Math.abs(this.upcomingLines));
              this.upcomingLines = 0;
              Object(_field_queue__WEBPACK_IMPORTED_MODULE_8__["adjustQueueHeight"])(this.gameNum, 0);
            } else {
              Object(_field_queue__WEBPACK_IMPORTED_MODULE_8__["adjustQueueHeight"])(this.gameNum, this.upcomingLines * 5);
            }
          } else {
            this.opponent.addLinesToQueue(numLines);
            if (this.tSpin === true) this.tSpinStreak = true;
          }
        } else {
          this.combo = -1;

          if (this.upcomingLines > 0) {
            this.receiveUpcomingLines(this.upcomingLines);
            Object(_field_queue__WEBPACK_IMPORTED_MODULE_8__["adjustQueueHeight"])(this.gameNum, 0);
          }
        }
      } // reset tSpin tracker


      this.tSpin = false;
      this.clearGhostClass();
      cancelAnimationFrame(this.handleClear.drop); // this.startElevating();

      this.play();
    }
  }, {
    key: "dropPiece",
    value: function dropPiece(fps) {
      // Do whatever
      this.animate.drop.fpsInterval = 1000 / fps;
      this.animate.drop.then = Date.now();
      this.animate.drop.startTime = this.then;
      this.drop(this.field);
    } // inspiration for throttling requestAnimationFrame from https://stackoverflow.com/questions/19764018/controlling-fps-with-requestanimationframe

  }, {
    key: "drop",
    value: function drop() {
      var _this9 = this;

      this.handleClear.drop = requestAnimationFrame(function () {
        return _this9.drop(_this9.field);
      });
      this.animate.drop.now = Date.now();
      var elapsed = this.animate.drop.now - this.animate.drop.then;

      if (elapsed > this.animate.drop.fpsInterval) {
        // Get ready for next frame by setting then=now, adjusting for specified fpsInterval not being a multiple of RAF's interval (16.7ms)
        this.animate.drop.then = this.animate.drop.now - elapsed % this.animate.drop.fpsInterval;
        this.currentPiece.populateField(this.field);
        this.render();

        if (!this.currentPiece.isFalling(this.field)) {
          this.handlePieceStop(this.handleClear.drop);
        }

        if (this.currentPiece.bottomMost[0] != 0) this.currentPiece.drop(this.field); // this.setGhostPosition();

        this.currentPiece.populateField(this.field); // keep only one populate field?

        this.render();
      }
    }
  }, {
    key: "movePiece",
    value: function movePiece(direction) {
      // Do whatever
      this.animate[direction].fpsInterval = 1000 / this.moveSpeed;
      this.animate[direction].then = Date.now();
      this.animate[direction].startTime = this.animate[direction].then;
      this.move(direction);
    } // inspiration for throttling requestAnimationFrame from https://stackoverflow.com/questions/19764018/controlling-fps-with-requestanimationframe

  }, {
    key: "move",
    value: function move(direction) {
      var _this10 = this;

      this.handleClear[direction] = requestAnimationFrame(function () {
        return _this10.move(direction);
      });
      if (!this.keyHeld[direction]) cancelAnimationFrame(this.handleClear[direction]);
      this.animate[direction].now = Date.now();
      var elapsed = this.animate[direction].now - this.animate[direction].then;

      if (elapsed > this.animate[direction].fpsInterval) {
        // Get ready for next frame by setting then=now, adjusting for specified fpsInterval not being a multiple of RAF's interval (16.7ms)
        this.animate[direction].then = this.animate[direction].now - elapsed % this.animate[direction].fpsInterval; // prevent piece from moving if it is blocked or if both left and right arrow keys are held down

        if (direction === "right" && this.currentPiece.rightSideBlocked(this.field) || direction === "left" && this.currentPiece.leftSideBlocked(this.field) || direction === "down" && !this.currentPiece.isFalling(this.field) || this.keyHeld.right && this.keyHeld.left) return;
        this.currentPiece.move(direction);
        this.currentPiece.populateField(this.field); // don't need to re-populate ghost position if the piece is soft-dropping

        if (direction !== "down") {
          this.clearGhostPosition();
          this.setGhostPosition();
        }

        this.render();
      }
    }
  }, {
    key: "handleTopPiece",
    value: function handleTopPiece() {
      var atTop = false;

      try {
        while (this.field[this.currentPiece.position.bottom[0][0]][3] || this.field[this.currentPiece.position.bottom[0][0]][4] || this.field[this.currentPiece.position.bottom[0][0]][5] || this.field[this.currentPiece.position.bottom[0][0]][6]) {
          this.currentPiece.move("up", this.field);
          atTop = true;
        }
      } catch (_unused) {
        this.gameOver(this.opponent.gameNum);
      }

      return atTop;
    }
  }, {
    key: "play",
    value: function play() {
      this.setCurrentPiece();
      this.handleTopPiece();
      this.currentPiece.populateField(this.field);
      this.addToCurrentBag();
      this.showCurrentBag();
      if (!this.nextBag.length) this.refillNextBag();
      this.setGhostPosition(); // drop piece at given fps

      this.dropPiece(this.dropSpeed);
    }
  }, {
    key: "gameOver",
    value: function gameOver(winner) {
      this.dropSpeed = 0;
      var gameOverScreen = document.createElement("div");
      gameOverScreen.classList.add("game-over-div");
      var gameOverHeading = document.createElement("h2");
      gameOverHeading.classList.add("game-over-heading");
      gameOverHeading.innerHTML = "GAME OVER";
      gameOverScreen.append(gameOverHeading);
      var winnerHeading;

      if (winner) {
        winnerHeading = document.createElement("h2");
        winnerHeading.classList.add("game-over-heading");
        winnerHeading.innerHTML = "PLAYER ".concat(winner, " WINS");
        gameOverScreen.append(winnerHeading);
      }

      document.body.appendChild(gameOverScreen);
      this.stopTimer();
      this.gameIsOver = true;
    } // multiplayer 

  }, {
    key: "setOpponent",
    value: function setOpponent(player) {
      this.opponent = player;
    }
  }, {
    key: "addLinesToQueue",
    value: function addLinesToQueue(numLines) {
      this.upcomingLines += numLines;
      var percentage = this.upcomingLines * 5;
      Object(_field_queue__WEBPACK_IMPORTED_MODULE_8__["adjustQueueHeight"])(this.gameNum, percentage);
    }
  }, {
    key: "receiveUpcomingLines",
    value: function receiveUpcomingLines() {
      var garbageLines = [];
      var numLines = this.upcomingLines;
      var randomHole;

      for (var i = 0; i < numLines; i++) {
        if (i % 2 === 0) randomHole = Math.floor(Math.random() * 9);
        var garbageRow = [8, 8, 8, 8, 8, 8, 8, 8, 8, 8];
        garbageRow[randomHole] = 0;
        garbageLines.push(garbageRow);
      } // if player reaches the top, player loses
      // slice allows player to continue playing if top middle is clear


      if (!this.field[numLines - 1].slice(2, 7).includes(0)) {
        return;
      }

      this.field = this.field.slice(numLines, 20).concat(garbageLines);
      this.upcomingLines = 0;
      this.render();
    } // single player

  }, {
    key: "startElevating",
    value: function startElevating(elevateDelay) {
      var _this11 = this;

      this.clearElevateInterval = setInterval(function () {
        console.log(_this11.currentPiece);

        _this11.clearGhostPosition();

        _this11.currentPiece.clearSelfFromBoard(_this11.field);

        _this11.upcomingLines += 1;

        _this11.receiveUpcomingLines();

        _this11.setGhostPosition();

        _this11.currentPiece.populateField(_this11.field);

        _this11.render();
      }, elevateDelay);
    }
  }, {
    key: "adjustElevate",
    value: function adjustElevate() {
      var _this12 = this;

      setInterval(function () {
        if (_this12.clearElevateInterval) clearInterval(_this12.clearElevateInterval);
        if (_this12.elevateDelay > 2000) _this12.elevateDelay -= 200;

        _this12.startElevating(_this12.elevateDelay);
      }, 10000);
    }
  }, {
    key: "startTimer",
    value: function startTimer() {
      var minutes = document.querySelector('.minutes');
      var seconds = document.querySelector('.seconds');
      this.clearTimer = setInterval(function () {
        var oldSecond = Number(seconds.innerHTML);
        var oldMinute = Number(minutes.innerHTML);

        if (oldSecond + 1 === 60) {
          seconds.innerHTML = 0;
          minutes.innerHTML = oldMinute + 1;
        } else {
          var newSeconds = Number(seconds.innerHTML) + 1 < 10 ? "0".concat(Number(seconds.innerHTML) + 1) : Number(seconds.innerHTML) + 1;
          seconds.innerHTML = newSeconds;
        }
      }, 1000);
    }
  }, {
    key: "stopTimer",
    value: function stopTimer() {
      clearInterval(this.clearTimer);
    }
  }, {
    key: "changeControls",
    value: function changeControls() {
      this.controls = {
        left: 37,
        right: 39,
        turnRight: 38,
        softDrop: 40,
        hold: 16,
        turnLeft: 67,
        hardDrop: 32
      };
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
/* harmony import */ var _menu_menu__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./menu/menu */ "./src/menu/menu.js");

document.addEventListener("DOMContentLoaded", function () {
  var menu = new _menu_menu__WEBPACK_IMPORTED_MODULE_0__["default"]();
  menu.renderMenu();
});

/***/ }),

/***/ "./src/menu/menu.js":
/*!**************************!*\
  !*** ./src/menu/menu.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Menu; });
/* harmony import */ var _game_game__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../game/game */ "./src/game/game.js");
/* harmony import */ var _field_field__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../field/field */ "./src/field/field.js");
/* harmony import */ var _multiplayer_multiplayer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../multiplayer/multiplayer */ "./src/multiplayer/multiplayer.js");
/* harmony import */ var _modal_modal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../modal/modal */ "./src/modal/modal.js");
/* harmony import */ var _modal_singlePlayerContent__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../modal/singlePlayerContent */ "./src/modal/singlePlayerContent.js");
/* harmony import */ var _modal_multiplayerContent__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../modal/multiplayerContent */ "./src/modal/multiplayerContent.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }








var Menu =
/*#__PURE__*/
function () {
  function Menu() {
    _classCallCheck(this, Menu);

    this.menu = document.getElementById("menu");
    this.optionsPlayer1 = {
      gameNum: 1,
      moveSpeed: 20,
      controls: {
        left: 65,
        right: 68,
        turnRight: 87,
        softDrop: 83,
        hold: 81,
        turnLeft: 192,
        hardDrop: 49
      }
    };
    this.optionsPlayer2 = {
      gameNum: 2,
      moveSpeed: 20,
      controls: {
        left: 37,
        right: 39,
        turnRight: 38,
        softDrop: 40,
        hold: 16,
        turnLeft: 75,
        hardDrop: 190
      }
    };
    this.game1 = new _game_game__WEBPACK_IMPORTED_MODULE_0__["default"](this.optionsPlayer1);
    this.game2 = new _game_game__WEBPACK_IMPORTED_MODULE_0__["default"](this.optionsPlayer2);
    this.field1 = new _field_field__WEBPACK_IMPORTED_MODULE_1__["default"](1);
    this.field2 = new _field_field__WEBPACK_IMPORTED_MODULE_1__["default"](2);
    this.multiplayerMode = new _multiplayer_multiplayer__WEBPACK_IMPORTED_MODULE_2__["default"](this.game1, this.game2);
    this.fieldContainer1 = document.getElementById("field-container-1");
    this.fieldContainer2 = document.getElementById("field-container-2");
    this.singlePlayerContent = new _modal_singlePlayerContent__WEBPACK_IMPORTED_MODULE_4__["default"]();
    this.multiplayerContent = new _modal_multiplayerContent__WEBPACK_IMPORTED_MODULE_5__["default"]();
    this.modal = new _modal_modal__WEBPACK_IMPORTED_MODULE_3__["default"]();
  }

  _createClass(Menu, [{
    key: "renderButtons",
    value: function renderButtons() {
      var singlePlayerButton = document.createElement("div");
      var multiplayerButton = document.createElement("div");
      singlePlayerButton.classList.add("single-player-button");
      multiplayerButton.classList.add("multiplayer-button");
      singlePlayerButton.innerHTML = "Single Player";
      multiplayerButton.innerHTML = "Multiplayer";
      this.addEventListeners(singlePlayerButton, multiplayerButton);
      return [singlePlayerButton, multiplayerButton];
    }
  }, {
    key: "addEventListeners",
    value: function addEventListeners(singlePlayerButton, multiplayerButton) {
      var _this = this;

      singlePlayerButton.addEventListener('click', function () {
        _this.renderSinglePlayer();
      });
      multiplayerButton.addEventListener('click', function () {
        _this.renderMultiplayer();
      });
    }
  }, {
    key: "renderSinglePlayer",
    value: function renderSinglePlayer() {
      document.body.removeChild(this.menu);
      document.body.style.justifyContent = 'none';
      this.singlePlayerContent.createTimerAndControls();
      this.field1.createCompleteField(this.fieldContainer1);
      this.fieldContainer1.style.position = 'relative';
      this.fieldContainer1.style.left = '14vw';
      this.game1.keyListener(); // this.game1.changeControls();

      this.game1.play();
      this.game1.startElevating(5000);
      this.game1.adjustElevate();
      this.singlePlayerContent.createTimer();
      this.game1.startTimer();
    }
  }, {
    key: "renderMultiplayer",
    value: function renderMultiplayer() {
      document.body.removeChild(this.menu);
      this.field1.createCompleteField(this.fieldContainer1);
      this.game1.keyListener();
      this.field2.createCompleteField(this.fieldContainer2);
      this.game2.keyListener();
      var controlsContainer = document.createElement('div');
      controlsContainer.classList.add('controls-container');
      controlsContainer.appendChild(this.multiplayerContent.createControlsContent('player1'));
      controlsContainer.appendChild(this.multiplayerContent.createControlsContent('player2'));
      this.modal.create();
      this.modal.appendChild(controlsContainer);
      this.modal.appendChild(this._createCloseModalLink());
    }
  }, {
    key: "renderMenu",
    value: function renderMenu() {
      var buttonContainer = document.createElement("div");
      buttonContainer.classList.add("button-container");
      this.renderButtons().forEach(function (button) {
        buttonContainer.appendChild(button);
      });
      this.menu.appendChild(buttonContainer);
    }
  }, {
    key: "_createCloseModalLink",
    value: function _createCloseModalLink() {
      var _this2 = this;

      var closeLink = document.createElement('div');
      closeLink.classList.add('close-modal-link');
      closeLink.innerHTML = "Let's get started.";
      closeLink.addEventListener('click', function () {
        _this2.modal.remove();

        _this2.multiplayerMode.startMultiplayer();
      });
      return closeLink;
    }
  }]);

  return Menu;
}();



/***/ }),

/***/ "./src/modal/modal.js":
/*!****************************!*\
  !*** ./src/modal/modal.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Modal; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Modal =
/*#__PURE__*/
function () {
  function Modal() {
    _classCallCheck(this, Modal);
  }

  _createClass(Modal, [{
    key: "create",
    value: function create() {
      var modal = document.createElement('div');
      modal.classList.add('controls-modal');
      document.body.appendChild(modal);
    }
  }, {
    key: "appendChild",
    value: function appendChild(content) {
      var modal = document.querySelector('.controls-modal');
      modal.appendChild(content);
    }
  }, {
    key: "remove",
    value: function remove() {
      var modal = document.querySelector('.controls-modal');
      modal.remove();
    }
  }]);

  return Modal;
}();



/***/ }),

/***/ "./src/modal/multiplayerContent.js":
/*!*****************************************!*\
  !*** ./src/modal/multiplayerContent.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return MultiplayerContent; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var MultiplayerContent =
/*#__PURE__*/
function () {
  function MultiplayerContent(props) {
    _classCallCheck(this, MultiplayerContent);

    this.keys = {
      player1: {
        'w_key': 'TURN RIGHT',
        'a_key': 'LEFT',
        's_key': 'SOFT DROP',
        'd_key': 'RIGHT',
        '`_key': 'TURN LEFT',
        'q_key': 'HOLD',
        '1_key': 'HARDDROP'
      },
      player2: {
        'up_key': 'TURN RIGHT',
        'left_key': 'LEFT',
        'down_key': 'SOFT DROP',
        'right_key': 'RIGHT',
        'k_key': 'TURN LEFT',
        'shift_key': 'HOLD',
        'period_key': 'HARDDROP'
      }
    };
  }

  _createClass(MultiplayerContent, [{
    key: "createControlsContent",
    value: function createControlsContent(player) {
      var controlsDiv = document.createElement('div');
      controlsDiv.classList.add('controls');
      var images = Object.keys(this.keys[player]);
      var descriptions = Object.values(this.keys[player]); // initialize arrays of spans and divs

      var spans = [];
      var divs = [];
      var label = document.createElement('header');
      label.innerHTML = "PLAYER ".concat(player.slice(6));
      controlsDiv.appendChild(label); // create elements and store into array indices for later reference

      for (var i = 1; i <= 7; i++) {
        spans[i] = document.createElement('span');
        if (i <= 3) divs[i] = document.createElement('div');
      }

      for (var _i = 0; _i < images.length; _i++) {
        var p = document.createElement('p');
        var img = document.createElement('img');
        img.classList.add('keyboard-key');
        if (_i === 5 && player === "player2") img.classList.add('shift-key');
        p.innerHTML = descriptions[_i];
        img.setAttribute('src', "./assets/images/".concat(images[_i], ".png"));

        spans[_i + 1].append(img);

        spans[_i + 1].append(p);

        if (_i < 1) {
          divs[1].append(spans[_i + 1]);
        } else if (_i < 4) {
          divs[2].append(spans[_i + 1]);
        } else if (_i < 7) {
          divs[3].append(spans[_i + 1]);
        }
      }

      for (var _i2 = 1; _i2 <= 3; _i2++) {
        controlsDiv.append(divs[_i2]);
      }

      return controlsDiv;
    }
  }]);

  return MultiplayerContent;
}();



/***/ }),

/***/ "./src/modal/singlePlayerContent.js":
/*!******************************************!*\
  !*** ./src/modal/singlePlayerContent.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return SinglePlayerContent; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var SinglePlayerContent =
/*#__PURE__*/
function () {
  function SinglePlayerContent() {
    _classCallCheck(this, SinglePlayerContent);

    this.keys = {
      'left_key': 'LEFT',
      'right_key': 'RIGHT',
      'down_key': 'SOFT DROP',
      'up_key': 'TURN RIGHT',
      'c_key': 'TURN LEFT',
      'shift_key': 'HOLD',
      'space_key': 'HARDDROP'
    };
  }

  _createClass(SinglePlayerContent, [{
    key: "createTimerAndControls",
    value: function createTimerAndControls() {
      var timerAndControls = document.createElement('div');
      timerAndControls.appendChild(this.createTimer());
      timerAndControls.appendChild(this.createControlsContent());
      document.body.append(timerAndControls);
    }
  }, {
    key: "createControlsContent",
    value: function createControlsContent() {
      var contentDiv = document.createElement('div');
      contentDiv.classList.add('controls');
      var images = Object.keys(this.keys);
      var descriptions = Object.values(this.keys); // initialize arrays of spans and divs

      var spans = [];
      var divs = []; // create elements and store into array indices for later reference

      for (var i = 1; i <= 7; i++) {
        spans[i] = document.createElement('span');
        if (i <= 4) divs[i] = document.createElement('div');
      }

      for (var _i = 0; _i < images.length; _i++) {
        var p = document.createElement('p');
        var img = document.createElement('img');
        img.classList.add('keyboard-key');
        if (_i === 5) img.classList.add('shift-key');
        if (_i === 6) img.classList.add('space-key');
        p.innerHTML = descriptions[_i];
        img.setAttribute('src', "./assets/images/".concat(images[_i], ".png"));

        spans[_i + 1].append(img);

        spans[_i + 1].append(p);

        if (_i < 2) {
          divs[1].append(spans[_i + 1]);
        } else if (_i < 4) {
          divs[2].append(spans[_i + 1]);
        } else if (_i < 6) {
          divs[3].append(spans[_i + 1]);
        } else {
          divs[4].append(spans[_i + 1]);
        }
      }

      for (var _i2 = 1; _i2 <= 4; _i2++) {
        contentDiv.append(divs[_i2]);
      }

      return contentDiv;
    }
  }, {
    key: "createTimer",
    value: function createTimer() {
      var timer = document.createElement('div');
      var minutes = document.createElement('p');
      var seconds = document.createElement('p');
      var colon = document.createElement('p');
      timer.classList.add('timer');
      minutes.classList.add('minutes');
      seconds.classList.add('seconds');
      colon.classList.add('colon');
      minutes.innerHTML = '0';
      seconds.innerHTML = '00';
      colon.innerHTML = ':';
      [minutes, colon, seconds].forEach(function (ele) {
        return timer.appendChild(ele);
      });
      return timer;
    }
  }]);

  return SinglePlayerContent;
}();



/***/ }),

/***/ "./src/multiplayer/multiplayer.js":
/*!****************************************!*\
  !*** ./src/multiplayer/multiplayer.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Multiplayer; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Multiplayer =
/*#__PURE__*/
function () {
  function Multiplayer(player1, player2) {
    _classCallCheck(this, Multiplayer);

    this.player1 = player1;
    this.player2 = player2;
  }

  _createClass(Multiplayer, [{
    key: "startMultiplayer",
    value: function startMultiplayer() {
      this.player1.setOpponent(this.player2);
      this.player2.setOpponent(this.player1);
      this.player1.play();
      this.player2.play();
    }
  }]);

  return Multiplayer;
}();



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
    _this.turningPoint = [1, 4];
    _this.displaySquares = [[0, 2], [1, 2], [2, 2], [3, 2]];
    _this.removeSquares = [];
    _this.offsetGuide = {
      0: [[0, 0], [0, -1], [0, 2], [0, -1], [0, 2]],
      1: [[0, -1], [0, 0], [0, 0], [1, 0], [-2, 0]],
      2: [[1, -1], [1, 1], [1, -2], [0, 1], [0, -2]],
      3: [[1, 0], [1, 0], [1, 0], [-1, 0], [2, 0]]
    };
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
  }, {
    key: "turnLeft",
    value: function turnLeft() {
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
    this.bottomMost = '';
    this.topMost = '';
    this.rotationState = 0;
    this.offsetGuide = {
      0: [[0, 0], [0, 0], [0, 0], [0, 0], [0, 0]],
      1: [[0, 0], [0, 1], [-1, 1], [2, 0], [2, 1]],
      2: [[0, 0], [0, 0], [0, 0], [0, 0], [0, 0]],
      3: [[0, 0], [0, -1], [-1, -1], [2, 0], [2, -1]]
    };
  }

  _createClass(Piece, [{
    key: "setOuterSquares",
    value: function setOuterSquares() {
      var leftMost, rightMost, topMost, bottomMost;
      Object.values(this.position).forEach(function (coordinatesArray) {
        return coordinatesArray.forEach(function (array) {
          var columnValue = array[1];
          var rowValue = array[0];
          if (!leftMost || columnValue < leftMost[1]) leftMost = [rowValue, columnValue];
          if (!rightMost || columnValue > rightMost[1]) rightMost = [rowValue, columnValue];
          if (!bottomMost || rowValue > bottomMost[0]) bottomMost = [rowValue, columnValue];
          if (!topMost || rowValue < topMost[0]) topMost = [rowValue, columnValue];
        });
      });
      this.leftMost = leftMost;
      this.rightMost = rightMost;
      this.topMost = topMost;
      this.bottomMost = bottomMost;
    }
  }, {
    key: "populateField",
    value: function populateField(field) {
      var _this = this;

      var coordinateArrays = Object.values(this.position);
      coordinateArrays.forEach(function (array) {
        array.forEach(function (coordinate) {
          var _ref = [coordinate[0], coordinate[1]],
              row = _ref[0],
              col = _ref[1];
          if (col >= 0 && col <= 19 && row >= 0 && row <= 19) field[row][col] = _this.colorCode;
        });
      });
      this.removeSquares.forEach(function (positionArray) {
        var _ref2 = [positionArray[0], positionArray[1]],
            row = _ref2[0],
            col = _ref2[1];
        if (col >= 0 && col <= 19 && row >= 0 && row <= 19) field[row][col] = 0;
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
          if (row < 20 && row >= 0 && col >= 0 && col < 10) field[row][col] = 0;
        });
      });
    }
  }, {
    key: "move",
    value: function move(direction, field) {
      var tSpin = false;
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
      this.oldTurningPoint = this.turningPoint.slice();

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

        case "turnRight":
          // defer to "turn" method
          // tSpin will either be truthy or falsy, tracked for sending more lines during multiplayer
          tSpin = this.turnRight(field, oldPosition);
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

        case "up":
          this.position.top = this.position.top.map(function (array) {
            return [array[0] - 1, array[1]];
          });
          this.position.middle = this.position.middle.map(function (array) {
            return [array[0] - 1, array[1]];
          });
          this.position.bottom = this.position.bottom.map(function (array) {
            return [array[0] - 1, array[1]];
          });
          this.turningPoint = [this.turningPoint[0] - 1, this.turningPoint[1]];
          break;

        case "turnLeft":
          this.turnLeft(field, oldPosition);
          break;
      }

      this.setOuterSquares();
      this.setRemoveSquares(oldPosition, field);
      return tSpin;
    }
  }, {
    key: "turnRight",
    value: function turnRight(field, oldPosition) {
      var _this3 = this;

      // clear from field first so that the piece doesn't see itself as a conflicting piece
      this.clearSelfFromBoard(field);
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
          case column = _this3.rightMost[1]:
            _this3.position.bottom.push([newRow, newCol]);

            break;

          case column = _this3.leftMost[1]:
            _this3.position.top.push([newRow, newCol]);

            break;

          default:
            _this3.position.middle.push([newRow, newCol]);

            break;
        }
      });
      this.setRemoveSquares(oldPosition); // find outer-most squares to see if piece is obstructed
      // if so, push piece back into field

      this.setOuterSquares(); // reset rotation state, which is tracked for implementing super rotation system

      this.rotationState = this.rotationState === 3 ? 0 : this.rotationState + 1;
      var newSquares = [].concat(_toConsumableArray(this.position.top), _toConsumableArray(this.position.middle), _toConsumableArray(this.position.bottom));

      for (var i in newSquares) {
        var _ref4 = [newSquares[i][0], newSquares[i][1]],
            row = _ref4[0],
            col = _ref4[1];

        if (field[row] === undefined || field[row][col] === undefined || field[row][col]) {
          return this.wallKick(field, "turnRight", oldPosition);
        }
      }
    }
  }, {
    key: "turnLeft",
    value: function turnLeft(field, oldPosition) {
      var _this4 = this;

      this.clearSelfFromBoard(field);
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
          case column = _this4.rightMost[1]:
            _this4.position.top.push([newRow, newCol]);

            break;

          case column = _this4.leftMost[1]:
            _this4.position.bottom.push([newRow, newCol]);

            break;

          default:
            _this4.position.middle.push([newRow, newCol]);

            break;
        }
      });
      this.setRemoveSquares(oldPosition); // find left and right most squares to see if piece through wall
      // if through wall, push piece back into field

      this.setOuterSquares(); // reset rotation state, which is tracked for implementing super rotation system

      this.rotationState = this.rotationState === 0 ? 3 : this.rotationState - 1;
      var newSquares = [].concat(_toConsumableArray(this.position.top), _toConsumableArray(this.position.middle), _toConsumableArray(this.position.bottom));

      for (var i in newSquares) {
        var _ref5 = [newSquares[i][0], newSquares[i][1]],
            row = _ref5[0],
            col = _ref5[1];

        if (field[row] === undefined || field[row][col] === undefined || field[row][col]) {
          this.wallKick(field, "turnLeft", oldPosition);
          break;
        }
      }
    } // compare old position of piece with new position 

  }, {
    key: "setRemoveSquares",
    value: function setRemoveSquares(oldPosition, field) {
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
        if (!field) {
          if (!_this5._includes(oldSquare, newSquares)) return oldSquare; // if field argument is passed, check the field to make sure to not clear squares of other pieces
        } else {
          if (!_this5._includes(oldSquare, newSquares) && !field[oldSquare[0]][oldSquare[1]]) return oldSquare;
        }
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
        var _ref6 = [coordinatePair[0], coordinatePair[1]],
            row = _ref6[0],
            col = _ref6[1]; // if the piece's current position is above the field floor or a another piece (not include ghost piece)

        if (!field[row + 1] || field[row + 1][col] && field[row + 1][col] !== "x") {
          result = false;
        }
      });
      return result;
    }
  }, {
    key: "rightSideBlocked",
    value: function rightSideBlocked(field) {
      // if (this.position.top[0][0] < 0) return false;
      var result = false;
      this.sideSquares().right.forEach(function (coordinatePair) {
        var _ref7 = [coordinatePair[0], coordinatePair[1]],
            row = _ref7[0],
            col = _ref7[1]; // if any right facing square hits the wall or another piece, not including the ghost piece

        if (col === 9 || field[row] && field[row][col + 1] && field[row + 1][col] !== "x") {
          result = true;
        }
      });
      return result;
    }
  }, {
    key: "leftSideBlocked",
    value: function leftSideBlocked(field) {
      // if (this.position.top[0][0] < 0) return false;
      var result = false;
      this.sideSquares().left.forEach(function (coordinatePair) {
        var _ref8 = [coordinatePair[0], coordinatePair[1]],
            row = _ref8[0],
            col = _ref8[1]; // if any left facing square hits the wall or another piece, not including the ghost piece

        if (col === 0 || field[row] && field[row][col - 1] && field[row][col - 1] !== "x") {
          result = true;
        }
      });
      return result;
    }
  }, {
    key: "wallKick",
    value: function wallKick(field, action, oldPosition) {
      var _this8 = this;

      var validSpot, startingOffset;

      if (action === "turnRight") {
        startingOffset = this.rotationState === 0 ? this.offsetGuide[3] : this.offsetGuide[this.rotationState - 1];
      } else {
        startingOffset = this.rotationState === 3 ? this.offsetGuide[0] : this.offsetGuide[this.rotationState + 1];
      }

      var nextOffset = this.offsetGuide[this.rotationState]; // for (let i = 0; i < 5; i++) {

      for (var i = 0; i < 6; i++) {
        // if i === 5, there are no more potential positions to check and the piece's position is the initial position from before turning
        if (i === 5) {
          this.position = oldPosition;
          return;
        }

        validSpot = true;
        var basePosition = {
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
        var baseTurningPoint = this.turningPoint.slice();
        var startingTranslation = startingOffset[i];
        var potentialTranslation = nextOffset[i];
        var rowShift = startingTranslation[0] - potentialTranslation[0];
        var colShift = startingTranslation[1] - potentialTranslation[1];
        var translateVertical = rowShift > 0 ? function () {
          return _this8.move("up");
        } : function () {
          return _this8.move("down");
        };
        var translateHorizontal = colShift > 0 ? function () {
          return _this8.move("right");
        } : function () {
          return _this8.move("left");
        };

        for (var numTimesRowShifted = 0; numTimesRowShifted < Math.abs(rowShift); numTimesRowShifted++) {
          translateVertical();
        }

        for (var numTimesColShifted = 0; numTimesColShifted < Math.abs(colShift); numTimesColShifted++) {
          translateHorizontal();
        }

        var newPosition = [].concat(_toConsumableArray(this.position.top), _toConsumableArray(this.position.middle), _toConsumableArray(this.position.bottom));

        for (var _i in newPosition) {
          var _ref9 = [newPosition[_i][0], newPosition[_i][1]],
              row = _ref9[0],
              col = _ref9[1];

          if (field[row] === undefined || field[row][col] === undefined || field[row][col] > 0) {
            validSpot = false;
            this.position = basePosition;
            this.turningPoint = baseTurningPoint;
            break;
          }
        } // allows tSpin variable to be truthy


        if (validSpot) {
          if (this.name === "TPiece") {
            return true;
          } else {
            return;
          }
        }
      }
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2ZpZWxkL2ZpZWxkLmpzIiwid2VicGFjazovLy8uL3NyYy9maWVsZC9ob2xkYm94LmpzIiwid2VicGFjazovLy8uL3NyYy9maWVsZC9uZXh0Qm94LmpzIiwid2VicGFjazovLy8uL3NyYy9maWVsZC9xdWV1ZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvZ2FtZS9nYW1lLmpzIiwid2VicGFjazovLy8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvbWVudS9tZW51LmpzIiwid2VicGFjazovLy8uL3NyYy9tb2RhbC9tb2RhbC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvbW9kYWwvbXVsdGlwbGF5ZXJDb250ZW50LmpzIiwid2VicGFjazovLy8uL3NyYy9tb2RhbC9zaW5nbGVQbGF5ZXJDb250ZW50LmpzIiwid2VicGFjazovLy8uL3NyYy9tdWx0aXBsYXllci9tdWx0aXBsYXllci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcGllY2VzL2lQaWVjZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcGllY2VzL2pQaWVjZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcGllY2VzL2xQaWVjZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcGllY2VzL29QaWVjZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcGllY2VzL3BpZWNlLmpzIiwid2VicGFjazovLy8uL3NyYy9waWVjZXMvc1BpZWNlLmpzIiwid2VicGFjazovLy8uL3NyYy9waWVjZXMvdFBpZWNlLmpzIiwid2VicGFjazovLy8uL3NyYy9waWVjZXMvelBpZWNlLmpzIl0sIm5hbWVzIjpbIkZpZWxkIiwiZmllbGROdW0iLCJmaWVsZCIsImkiLCJyb3ciLCJwdXNoIiwiY29sdW1uIiwiZG9jdW1lbnQiLCJjcmVhdGVFbGVtZW50IiwiY2xhc3NMaXN0IiwiYWRkIiwiYXBwZW5kIiwiYXBwZW5kQ2hpbGQiLCJfY3JlYXRlQ29sdW1uIiwiY29udGFpbmVyIiwicXVldWUiLCJRdWV1ZSIsIm5leHRCb3giLCJOZXh0Qm94IiwiaG9sZEJveCIsIkhvbGRCb3giLCJfY3JlYXRlRmllbGQiLCJjcmVhdGVRdWV1ZSIsImNyZWF0ZU5leHRCb3hlcyIsInByZXBlbmQiLCJjcmVhdGVCb3giLCJib3hXcmFwcGVyIiwiYm94IiwiaGVhZGluZyIsImlubmVySFRNTCIsIl9jcmVhdGVCb3hDb2x1bW4iLCJfY3JlYXRlTmV4dEJveENvbHVtbiIsImJveGVzIiwiX2NyZWF0ZU5leHRCb3giLCJxdWV1ZU1ldGVyIiwiYWRqdXN0UXVldWVIZWlnaHQiLCJwZXJjZW50YWdlIiwicXVlcnlTZWxlY3RvciIsInN0eWxlIiwiaGVpZ2h0IiwiR2FtZSIsIm9wdGlvbnMiLCJzZXRGaWVsZCIsImNvbG9ycyIsImdhbWVOdW0iLCJjdXJyZW50QmFnIiwic2h1ZmZsZUJhZyIsImdlbmVyYXRlQmFnIiwiY3VycmVudFBpZWNlIiwiaG9sZFBpZWNlIiwiZ2hvc3RQb3NpdGlvbiIsIm5leHRCYWciLCJjYW5Ib2xkIiwiaGFuZGxlQ2xlYXIiLCJkcm9wIiwicmlnaHQiLCJsZWZ0IiwiZG93biIsImRyb3BTcGVlZCIsIm1vdmVTcGVlZCIsImRyb3BQaWVjZSIsImJpbmQiLCJtb3ZlIiwibW92ZVBpZWNlIiwiYW5pbWF0ZSIsImZwc0ludGVydmFsIiwic3RhcnRUaW1lIiwibm93IiwidGhlbiIsImlzUGF1c2VkIiwia2V5SGVsZCIsIm9wcG9uZW50IiwiY29udHJvbHMiLCJ1cGNvbWluZ0xpbmVzIiwiY29tYm8iLCJ0U3BpbiIsInRTcGluU3RyZWFrIiwiY29tYm9HdWlkZSIsInN0YXJ0RWxldmF0aW5nIiwiY2xlYXJFbGV2YXRlSW50ZXJ2YWwiLCJlbGV2YXRlRGVsYXkiLCJjbGVhclRpbWVyIiwib1BpZWNlIiwiT1BpZWNlIiwiaVBpZWNlIiwiSVBpZWNlIiwidFBpZWNlIiwiVFBpZWNlIiwic1BpZWNlIiwiU1BpZWNlIiwielBpZWNlIiwiWlBpZWNlIiwibFBpZWNlIiwiTFBpZWNlIiwialBpZWNlIiwiSlBpZWNlIiwiX2dlbmVyYXRlRmllbGQiLCJzaGlmdCIsImNvb3JkaW5hdGVBcnJheXMiLCJPYmplY3QiLCJ2YWx1ZXMiLCJmb3JFYWNoIiwiYXJyYXkiLCJjb29yZGluYXRlIiwiY29sIiwiZmllbGRDb2x1bW5zIiwicXVlcnlTZWxlY3RvckFsbCIsImZpZWxkU3F1YXJlIiwiY2hpbGRyZW4iLCJjb2xvckNvZGUiLCJ0b3AiLCJwb3NpdGlvbiIsIm1hcCIsInNsaWNlIiwibWlkZGxlIiwiYm90dG9tIiwic3RvcHBlZCIsImhhbmdpbmdTcXVhcmVzIiwiX3BvcHVsYXRlR2hvc3RQb3NpdGlvbiIsInJlbmRlciIsImNsZWFyU2VsZkZyb21Cb2FyZCIsIl9nZW5lcmF0ZVBpZWNlIiwibmFtZSIsInNldEN1cnJlbnRQaWVjZSIsInNob3dDdXJyZW50QmFnIiwiX3BvcHVsYXRlSG9sZEJveCIsImNvbHVtbnMiLCJqIiwiY2xhc3NOYW1lIiwiZGlzcGxheVNxdWFyZXMiLCJzcXVhcmUiLCJwaWVjZU5hbWUiLCJnZXRFbGVtZW50c0J5Q2xhc3NOYW1lIiwiX3BvcHVsYXRlTmV4dEJveCIsInBpZWNlIiwiYmFnIiwiY3VycmVudEluZGV4IiwibGVuZ3RoIiwidGVtcG9yYXJ5VmFsdWUiLCJyYW5kb21JbmRleCIsIk1hdGgiLCJmbG9vciIsInJhbmRvbSIsInJvd0lkeCIsImNvbElkeCIsInNxdWFyZVZhbHVlIiwicmVtb3ZlIiwiYm9keSIsImFkZEV2ZW50TGlzdGVuZXIiLCJldmVudCIsImdhbWVJc092ZXIiLCJzZXRPdXRlclNxdWFyZXMiLCJ3aGljaCIsInR1cm5SaWdodCIsImNsZWFyR2hvc3RQb3NpdGlvbiIsInBvcHVsYXRlRmllbGQiLCJzZXRHaG9zdFBvc2l0aW9uIiwidHVybkxlZnQiLCJsZWZ0U2lkZUJsb2NrZWQiLCJyaWdodFNpZGVCbG9ja2VkIiwic29mdERyb3AiLCJob2xkIiwiaGFyZERyb3AiLCJoYW5kbGVQaWVjZVN0b3AiLCJjYW5jZWxBbmltYXRpb25GcmFtZSIsImxvd2VzdCIsImhpZ2hlc3QiLCJudW1MaW5lc0NsZWFyZWQiLCJpbmNsdWRlcyIsIl9icmluZ0Rvd25GaWVsZCIsImNsZWFyTGluZXMiLCJzdGFydGluZ1JvdyIsImxlZnRNb3N0IiwicmlnaHRNb3N0IiwibGVmdE1vc3RSb3ciLCJyaWdodE1vc3RSb3ciLCJsZWZ0TW9zdENvbCIsInJpZ2h0TW9zdENvbCIsIm51bUxpbmVzIiwiYWRkTGluZXNUb1F1ZXVlIiwiYWJzIiwicmVjZWl2ZVVwY29taW5nTGluZXMiLCJjbGVhckdob3N0Q2xhc3MiLCJwbGF5IiwiZnBzIiwiRGF0ZSIsInJlcXVlc3RBbmltYXRpb25GcmFtZSIsImVsYXBzZWQiLCJpc0ZhbGxpbmciLCJib3R0b21Nb3N0IiwiZGlyZWN0aW9uIiwiYXRUb3AiLCJnYW1lT3ZlciIsImhhbmRsZVRvcFBpZWNlIiwiYWRkVG9DdXJyZW50QmFnIiwicmVmaWxsTmV4dEJhZyIsIndpbm5lciIsImdhbWVPdmVyU2NyZWVuIiwiZ2FtZU92ZXJIZWFkaW5nIiwid2lubmVySGVhZGluZyIsInN0b3BUaW1lciIsInBsYXllciIsImdhcmJhZ2VMaW5lcyIsInJhbmRvbUhvbGUiLCJnYXJiYWdlUm93IiwiY29uY2F0Iiwic2V0SW50ZXJ2YWwiLCJjb25zb2xlIiwibG9nIiwiY2xlYXJJbnRlcnZhbCIsIm1pbnV0ZXMiLCJzZWNvbmRzIiwib2xkU2Vjb25kIiwiTnVtYmVyIiwib2xkTWludXRlIiwibmV3U2Vjb25kcyIsIm1lbnUiLCJNZW51IiwicmVuZGVyTWVudSIsImdldEVsZW1lbnRCeUlkIiwib3B0aW9uc1BsYXllcjEiLCJvcHRpb25zUGxheWVyMiIsImdhbWUxIiwiZ2FtZTIiLCJmaWVsZDEiLCJmaWVsZDIiLCJtdWx0aXBsYXllck1vZGUiLCJNdWx0aXBsYXllciIsImZpZWxkQ29udGFpbmVyMSIsImZpZWxkQ29udGFpbmVyMiIsInNpbmdsZVBsYXllckNvbnRlbnQiLCJTaW5nbGVQbGF5ZXJDb250ZW50IiwibXVsdGlwbGF5ZXJDb250ZW50IiwiTXVsdGlwbGF5ZXJDb250ZW50IiwibW9kYWwiLCJNb2RhbCIsInNpbmdsZVBsYXllckJ1dHRvbiIsIm11bHRpcGxheWVyQnV0dG9uIiwiYWRkRXZlbnRMaXN0ZW5lcnMiLCJyZW5kZXJTaW5nbGVQbGF5ZXIiLCJyZW5kZXJNdWx0aXBsYXllciIsInJlbW92ZUNoaWxkIiwianVzdGlmeUNvbnRlbnQiLCJjcmVhdGVUaW1lckFuZENvbnRyb2xzIiwiY3JlYXRlQ29tcGxldGVGaWVsZCIsImtleUxpc3RlbmVyIiwiYWRqdXN0RWxldmF0ZSIsImNyZWF0ZVRpbWVyIiwic3RhcnRUaW1lciIsImNvbnRyb2xzQ29udGFpbmVyIiwiY3JlYXRlQ29udHJvbHNDb250ZW50IiwiY3JlYXRlIiwiX2NyZWF0ZUNsb3NlTW9kYWxMaW5rIiwiYnV0dG9uQ29udGFpbmVyIiwicmVuZGVyQnV0dG9ucyIsImJ1dHRvbiIsImNsb3NlTGluayIsInN0YXJ0TXVsdGlwbGF5ZXIiLCJjb250ZW50IiwicHJvcHMiLCJrZXlzIiwicGxheWVyMSIsInBsYXllcjIiLCJjb250cm9sc0RpdiIsImltYWdlcyIsImRlc2NyaXB0aW9ucyIsInNwYW5zIiwiZGl2cyIsImxhYmVsIiwicCIsImltZyIsInNldEF0dHJpYnV0ZSIsInRpbWVyQW5kQ29udHJvbHMiLCJjb250ZW50RGl2IiwidGltZXIiLCJjb2xvbiIsImVsZSIsInNldE9wcG9uZW50IiwidHVybmluZ1BvaW50IiwicmVtb3ZlU3F1YXJlcyIsIm9mZnNldEd1aWRlIiwiUGllY2UiLCJ0b3BNb3N0Iiwicm90YXRpb25TdGF0ZSIsImNvb3JkaW5hdGVzQXJyYXkiLCJjb2x1bW5WYWx1ZSIsInJvd1ZhbHVlIiwicG9zaXRpb25BcnJheSIsIm9sZFNxdWFyZSIsIm5ld1NxdWFyZSIsInJlc3VsdCIsIl9zcXVhcmVzQXJlRXF1YWwiLCJvbGRQb3NpdGlvbiIsInNldFJlbW92ZVNxdWFyZXMiLCJvbGRUdXJuaW5nUG9pbnQiLCJzcXVhcmVzIiwiaGVpZ2h0RGlmZmVyZW5jZSIsIndpZHRoRGlmZmVyZW5jZSIsIm5ld0NvbCIsIm5ld1JvdyIsIm5ld1NxdWFyZXMiLCJ1bmRlZmluZWQiLCJ3YWxsS2ljayIsIm9sZFNxdWFyZXMiLCJmaWx0ZXIiLCJfaW5jbHVkZXMiLCJjb29yZGluYXRlQXJyYXkiLCJiZWxvd1NxdWFyZSIsInNpZGVTcXVhcmVzIiwiYWRqYWNlbnRMZWZ0IiwiYWRqYWNlbnRSaWdodCIsImNvb3JkaW5hdGVQYWlyIiwiYWN0aW9uIiwidmFsaWRTcG90Iiwic3RhcnRpbmdPZmZzZXQiLCJuZXh0T2Zmc2V0IiwiYmFzZVBvc2l0aW9uIiwiYmFzZVR1cm5pbmdQb2ludCIsInN0YXJ0aW5nVHJhbnNsYXRpb24iLCJwb3RlbnRpYWxUcmFuc2xhdGlvbiIsInJvd1NoaWZ0IiwiY29sU2hpZnQiLCJ0cmFuc2xhdGVWZXJ0aWNhbCIsInRyYW5zbGF0ZUhvcml6b250YWwiLCJudW1UaW1lc1Jvd1NoaWZ0ZWQiLCJudW1UaW1lc0NvbFNoaWZ0ZWQiLCJuZXdQb3NpdGlvbiJdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RB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O0FBR1pDLFlBQU0sRUFBRSxDQUFDLENBQUMsQ0FBRCxFQUFJLENBQUosQ0FBRCxFQUFTLENBQUMsQ0FBRCxFQUFJLENBQUosQ0FBVDtBQUhJLEtBQWhCO0FBS0EsVUFBS04sU0FBTCxHQUFpQixDQUFqQjtBQUVBLFVBQUt5SyxZQUFMLEdBQW9CLENBQUMsQ0FBRCxFQUFJLENBQUosQ0FBcEI7QUFFQSxVQUFLckosY0FBTCxHQUFzQixDQUFDLENBQUMsQ0FBRCxFQUFJLENBQUosQ0FBRCxFQUFTLENBQUMsQ0FBRCxFQUFJLENBQUosQ0FBVCxFQUFpQixDQUFDLENBQUQsRUFBSSxDQUFKLENBQWpCLEVBQXlCLENBQUMsQ0FBRCxFQUFJLENBQUosQ0FBekIsQ0FBdEI7QUFFQSxVQUFLc0osYUFBTCxHQUFxQixFQUFyQjtBQWRVO0FBZWI7OztFQWhCK0JFLDhDIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIi9kaXN0L1wiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9pbmRleC5qc1wiKTtcbiIsImltcG9ydCBIb2xkQm94IGZyb20gJy4vaG9sZGJveCc7XG5pbXBvcnQgTmV4dEJveCBmcm9tICcuL25leHRCb3gnO1xuaW1wb3J0IFF1ZXVlIGZyb20gJy4vcXVldWUnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBGaWVsZCB7ICBcbiAgICBjb25zdHJ1Y3RvcihmaWVsZE51bSkge1xuICAgICAgICB0aGlzLmZpZWxkTnVtID0gZmllbGROdW07XG4gICAgfVxuICAgIFxuICAgIF9nZW5lcmF0ZUZpZWxkKCkge1xuICAgICAgICBsZXQgZmllbGQgPSBbXTtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCAyMDsgaSsrKSB7XG4gICAgICAgICAgICBsZXQgcm93ID0gWzAsMCwwLDAsMCwwLDAsMCwwLDBdO1xuICAgICAgICAgICAgZmllbGQucHVzaChyb3cpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBmaWVsZDtcbiAgICB9XG5cbiAgICBfY3JlYXRlQ29sdW1uKCkge1xuICAgICAgICBsZXQgY29sdW1uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInVsXCIpO1xuICAgICAgICBjb2x1bW4uY2xhc3NMaXN0LmFkZChgZmllbGQtY29sdW1uYCwgYGZpZWxkLSR7dGhpcy5maWVsZE51bX1gKTtcblxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IDIwOyBpKyspIHtcbiAgICAgICAgICAgIGNvbHVtbi5hcHBlbmQoZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpXCIpKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gY29sdW1uO1xuICAgIH1cblxuICAgIF9jcmVhdGVGaWVsZCgpIHtcbiAgICAgICAgbGV0IGZpZWxkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgZmllbGQuY2xhc3NMaXN0LmFkZChgZmllbGQtYm94YCwgYGZpZWxkLSR7dGhpcy5maWVsZE51bX1gKTtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCAxMDsgaSsrKSB7XG4gICAgICAgICAgICBmaWVsZC5hcHBlbmRDaGlsZCh0aGlzLl9jcmVhdGVDb2x1bW4oKSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGZpZWxkO1xuICAgIH1cblxuICAgIGNyZWF0ZUNvbXBsZXRlRmllbGQoY29udGFpbmVyKSB7XG4gICAgICAgIGxldCBxdWV1ZSA9IG5ldyBRdWV1ZSh0aGlzLmZpZWxkTnVtKTtcbiAgICAgICAgbGV0IG5leHRCb3ggPSBuZXcgTmV4dEJveCh0aGlzLmZpZWxkTnVtKTtcbiAgICAgICAgbGV0IGhvbGRCb3ggPSBuZXcgSG9sZEJveCh0aGlzLmZpZWxkTnVtKTtcbiAgICAgICAgY29udGFpbmVyLmFwcGVuZCh0aGlzLl9jcmVhdGVGaWVsZCgpKTtcbiAgICAgICAgY29udGFpbmVyLmFwcGVuZChxdWV1ZS5jcmVhdGVRdWV1ZSgpKTtcbiAgICAgICAgY29udGFpbmVyLmFwcGVuZChuZXh0Qm94LmNyZWF0ZU5leHRCb3hlcygpKTtcbiAgICAgICAgY29udGFpbmVyLnByZXBlbmQoaG9sZEJveC5jcmVhdGVCb3goKSk7XG4gICAgICAgIHJldHVybiBjb250YWluZXI7XG4gICAgfVxuXG59IiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgSG9sZEJveCB7XG4gICAgY29uc3RydWN0b3IoZmllbGROdW0pIHtcbiAgICAgICAgdGhpcy5maWVsZE51bSA9IGZpZWxkTnVtO1xuICAgIH1cblxuICAgIF9jcmVhdGVCb3hDb2x1bW4oKSB7XG4gICAgICAgIGxldCBjb2x1bW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidWxcIik7XG4gICAgICAgIGNvbHVtbi5jbGFzc0xpc3QuYWRkKGBob2xkLWNvbHVtbmAsIGBmaWVsZC0ke3RoaXMuZmllbGROdW19YCk7XG5cbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCA0OyBpKyspIHtcbiAgICAgICAgICAgIGNvbHVtbi5hcHBlbmQoZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpXCIpKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gY29sdW1uO1xuICAgIH1cblxuICAgIGNyZWF0ZUJveCgpIHtcbiAgICAgICAgbGV0IGJveFdyYXBwZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICBib3hXcmFwcGVyLmNsYXNzTGlzdC5hZGQoYGhvbGQtYm94LXdyYXBwZXJgLCBgZmllbGQtJHt0aGlzLmZpZWxkTnVtfWApO1xuICAgICAgICBsZXQgYm94ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgYm94LmNsYXNzTGlzdC5hZGQoYGhvbGQtYm94YCwgYGZpZWxkLSR7dGhpcy5maWVsZE51bX1gKTtcbiAgICAgICAgbGV0IGhlYWRpbmcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDJcIik7XG4gICAgICAgIGhlYWRpbmcuaW5uZXJIVE1MID0gXCJIT0xEXCI7XG4gICAgICAgIGJveFdyYXBwZXIuYXBwZW5kQ2hpbGQoaGVhZGluZyk7XG4gICAgICAgIGJveFdyYXBwZXIuYXBwZW5kQ2hpbGQoYm94KTtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCA1OyBpKyspIHtcbiAgICAgICAgICAgIGJveC5hcHBlbmRDaGlsZCh0aGlzLl9jcmVhdGVCb3hDb2x1bW4oKSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGJveFdyYXBwZXI7XG4gICAgfVxufSIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIE5leHRCb3gge1xuICAgIGNvbnN0cnVjdG9yKGZpZWxkTnVtKSB7XG4gICAgICAgIHRoaXMuZmllbGROdW0gPSBmaWVsZE51bTtcbiAgICB9XG5cbiAgICBfY3JlYXRlTmV4dEJveENvbHVtbigpIHtcbiAgICAgICAgbGV0IGNvbHVtbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ1bFwiKTtcbiAgICAgICAgY29sdW1uLmNsYXNzTGlzdC5hZGQoYG5leHQtY29sdW1uYCwgYGZpZWxkLSR7dGhpcy5maWVsZE51bX1gKTtcblxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IDQ7IGkrKykge1xuICAgICAgICAgICAgY29sdW1uLmFwcGVuZChkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIikpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBjb2x1bW47XG4gICAgfVxuXG4gICAgX2NyZWF0ZU5leHRCb3goKSB7XG4gICAgICAgIGxldCBib3ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICBib3guY2xhc3NMaXN0LmFkZChgbmV4dC1ib3hgLCBgZmllbGQtJHt0aGlzLmZpZWxkTnVtfWApO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IDU7IGkrKykge1xuICAgICAgICAgICAgYm94LmFwcGVuZENoaWxkKHRoaXMuX2NyZWF0ZU5leHRCb3hDb2x1bW4oKSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGJveDtcbiAgICB9XG5cbiAgICBjcmVhdGVOZXh0Qm94ZXMoKSB7XG4gICAgICAgIGxldCBib3hlcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIGxldCBoZWFkaW5nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgyXCIpO1xuICAgICAgICBoZWFkaW5nLmlubmVySFRNTCA9IFwiTkVYVFwiO1xuICAgICAgICBib3hlcy5jbGFzc0xpc3QuYWRkKGBuZXh0LWJveGVzYCwgYGZpZWxkLSR7dGhpcy5maWVsZE51bX1gKTtcbiAgICAgICAgYm94ZXMuYXBwZW5kQ2hpbGQoaGVhZGluZyk7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgNTsgaSsrKSB7XG4gICAgICAgICAgICBib3hlcy5hcHBlbmRDaGlsZCh0aGlzLl9jcmVhdGVOZXh0Qm94KCkpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBib3hlcztcbiAgICB9XG59IiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgUXVldWUge1xuICAgIGNvbnN0cnVjdG9yKGZpZWxkTnVtKSB7XG4gICAgICAgIHRoaXMuZmllbGROdW0gPSBmaWVsZE51bTtcbiAgICB9XG5cbiAgICBjcmVhdGVRdWV1ZSgpIHtcbiAgICAgICAgbGV0IHF1ZXVlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgcXVldWUuY2xhc3NMaXN0LmFkZChgcXVldWVgLCBgZmllbGQtJHt0aGlzLmZpZWxkTnVtfWApO1xuICAgICAgICBsZXQgcXVldWVNZXRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIHF1ZXVlTWV0ZXIuY2xhc3NMaXN0LmFkZChgcXVldWUtbWV0ZXJgLCBgZmllbGQtJHt0aGlzLmZpZWxkTnVtfWApO1xuICAgICAgICBxdWV1ZS5hcHBlbmRDaGlsZChxdWV1ZU1ldGVyKTtcbiAgICAgICAgcmV0dXJuIHF1ZXVlO1xuICAgIH1cbn1cblxuZXhwb3J0IGNvbnN0IGFkanVzdFF1ZXVlSGVpZ2h0ID0gKGZpZWxkTnVtLCBwZXJjZW50YWdlKSA9PiB7XG4gICAgbGV0IHF1ZXVlTWV0ZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAucXVldWUtbWV0ZXIuZmllbGQtJHtmaWVsZE51bX1gKTtcbiAgICBpZiAocGVyY2VudGFnZSA+IDEwMCkgcGVyY2VudGFnZSA9IDEwMDtcbiAgICBxdWV1ZU1ldGVyLnN0eWxlLmhlaWdodCA9IGAke3BlcmNlbnRhZ2V9JWBcbn0iLCJpbXBvcnQgRmllbGQgZnJvbSAnLi4vZmllbGQvZmllbGQnO1xuaW1wb3J0IE9QaWVjZSBmcm9tICcuLi9waWVjZXMvb1BpZWNlJztcbmltcG9ydCBJUGllY2UgZnJvbSAnLi4vcGllY2VzL2lQaWVjZSc7XG5pbXBvcnQgVFBpZWNlIGZyb20gJy4uL3BpZWNlcy90UGllY2UnO1xuaW1wb3J0IFNQaWVjZSBmcm9tICcuLi9waWVjZXMvc1BpZWNlJztcbmltcG9ydCBaUGllY2UgZnJvbSAnLi4vcGllY2VzL3pQaWVjZSc7XG5pbXBvcnQgTFBpZWNlIGZyb20gJy4uL3BpZWNlcy9sUGllY2UnO1xuaW1wb3J0IEpQaWVjZSBmcm9tICcuLi9waWVjZXMvalBpZWNlJztcbmltcG9ydCB7IGFkanVzdFF1ZXVlSGVpZ2h0IH0gZnJvbSAnLi4vZmllbGQvcXVldWUnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBHYW1lIHtcbiAgICBjb25zdHJ1Y3RvcihvcHRpb25zKSB7XG4gICAgICAgIHRoaXMuZmllbGQgPSB0aGlzLnNldEZpZWxkKClcblxuICAgICAgICB0aGlzLmNvbG9ycyA9IHtcbiAgICAgICAgICAgIDE6IFwieWVsbG93XCIsXG4gICAgICAgICAgICAyOiBcImJsdWVcIixcbiAgICAgICAgICAgIDM6IFwicHVycGxlXCIsXG4gICAgICAgICAgICA0OiBcImdyZWVuXCIsXG4gICAgICAgICAgICA1OiBcInJlZFwiLFxuICAgICAgICAgICAgNjogXCJvcmFuZ2VcIixcbiAgICAgICAgICAgIDc6IFwiZGFyay1ibHVlXCIsXG4gICAgICAgICAgICA4OiBcImdyZXlcIlxuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5nYW1lTnVtID0gb3B0aW9ucy5nYW1lTnVtO1xuXG4gICAgICAgIHRoaXMuY3VycmVudEJhZyA9IHRoaXMuc2h1ZmZsZUJhZyh0aGlzLmdlbmVyYXRlQmFnKCkpO1xuICAgICAgICB0aGlzLmN1cnJlbnRQaWVjZSA9ICcnO1xuICAgICAgICB0aGlzLmhvbGRQaWVjZSA9ICcnO1xuICAgICAgICB0aGlzLmdob3N0UG9zaXRpb24gPSAnJztcbiAgICAgICAgdGhpcy5uZXh0QmFnID0gdGhpcy5zaHVmZmxlQmFnKHRoaXMuZ2VuZXJhdGVCYWcoKSk7XG5cbiAgICAgICAgLy8gcHJldmVudHMgcGxheWVyIGZyb20gaG9sZGluZyBwaWVjZSBtdWx0aXBsZSB0aW1lc1xuICAgICAgICB0aGlzLmNhbkhvbGQgPSB0cnVlO1xuXG4gICAgICAgIHRoaXMuaGFuZGxlQ2xlYXIgPSB7XG4gICAgICAgICAgICBkcm9wOiAnJyxcbiAgICAgICAgICAgIHJpZ2h0OiAnJyxcbiAgICAgICAgICAgIGxlZnQ6ICcnLFxuICAgICAgICAgICAgZG93bjogJydcbiAgICAgICAgfTtcblxuICAgICAgICAvLyBmb3IgYW5pbWF0aW9uc1xuICAgICAgICB0aGlzLmRyb3BTcGVlZCA9IDE7XG4gICAgICAgIHRoaXMubW92ZVNwZWVkID0gb3B0aW9ucy5tb3ZlU3BlZWQ7XG4gICAgICAgIHRoaXMuZHJvcFBpZWNlID0gdGhpcy5kcm9wUGllY2UuYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5kcm9wID0gdGhpcy5kcm9wLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMubW92ZSA9IHRoaXMubW92ZS5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLm1vdmVQaWVjZSA9IHRoaXMubW92ZVBpZWNlLmJpbmQodGhpcyk7XG5cbiAgICAgICAgLy8ga2VlcCB0cmFjayBvZiB0aGUgZm9sbG93aW5nIHZhcmlhYmxlcyBmb3IgcmVxdWVzdEFuaW1hdGlvbkZyYW1lIHRocm90dGxpbmdcbiAgICAgICAgdGhpcy5hbmltYXRlID0ge1xuICAgICAgICAgICAgZHJvcDoge1xuICAgICAgICAgICAgICAgIGZwc0ludGVydmFsOiAnJyxcbiAgICAgICAgICAgICAgICBzdGFydFRpbWU6ICcnLFxuICAgICAgICAgICAgICAgIG5vdzogJycsXG4gICAgICAgICAgICAgICAgdGhlbjogJydcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICByaWdodDoge1xuICAgICAgICAgICAgICAgIGZwc0ludGVydmFsOiAnJyxcbiAgICAgICAgICAgICAgICBzdGFydFRpbWU6ICcnLFxuICAgICAgICAgICAgICAgIG5vdzogJycsXG4gICAgICAgICAgICAgICAgdGhlbjogJydcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBsZWZ0OiB7XG4gICAgICAgICAgICAgICAgZnBzSW50ZXJ2YWw6ICcnLFxuICAgICAgICAgICAgICAgIHN0YXJ0VGltZTogJycsXG4gICAgICAgICAgICAgICAgbm93OiAnJyxcbiAgICAgICAgICAgICAgICB0aGVuOiAnJ1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGRvd246IHtcbiAgICAgICAgICAgICAgICBmcHNJbnRlcnZhbDogJycsXG4gICAgICAgICAgICAgICAgc3RhcnRUaW1lOiAnJyxcbiAgICAgICAgICAgICAgICBub3c6ICcnLFxuICAgICAgICAgICAgICAgIHRoZW46ICcnXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAvLyBwYXVzaW5nIHRoZSBnYW1lXG4gICAgICAgIHRoaXMuaXNQYXVzZWQgPSBmYWxzZTtcblxuICAgICAgICB0aGlzLmtleUhlbGQgPSB7XG4gICAgICAgICAgICBkb3duOiBmYWxzZSxcbiAgICAgICAgICAgIHJpZ2h0OiBmYWxzZSxcbiAgICAgICAgICAgIGxlZnQ6IGZhbHNlXG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLm9wcG9uZW50ID0gXCJcIjtcbiAgICAgICAgdGhpcy5jb250cm9scyA9IG9wdGlvbnMuY29udHJvbHM7XG4gICAgICAgIHRoaXMudXBjb21pbmdMaW5lcyA9IDA7XG4gICAgICAgIHRoaXMuY29tYm8gPSAtMTtcbiAgICAgICAgdGhpcy50U3BpbiA9IGZhbHNlO1xuICAgICAgICB0aGlzLnRTcGluU3RyZWFrID0gZmFsc2U7XG4gICAgICAgIHRoaXMuY29tYm9HdWlkZSA9IHtcbiAgICAgICAgICAgIDA6IDAsXG4gICAgICAgICAgICAxOiAwLCBcbiAgICAgICAgICAgIDI6IDEsXG4gICAgICAgICAgICAzOiAxLFxuICAgICAgICAgICAgNDogMSxcbiAgICAgICAgICAgIDU6IDIsXG4gICAgICAgICAgICA2OiAyLFxuICAgICAgICAgICAgNzogMyxcbiAgICAgICAgICAgIDg6IDMsXG4gICAgICAgICAgICA5OiA0LFxuICAgICAgICAgICAgMTA6IDQsXG4gICAgICAgICAgICAxMTogNCxcbiAgICAgICAgICAgIDEyOiA1XG4gICAgICAgIH07XG5cbiAgICAgICAgLy8gc2luZ2xlIHBsYXllclxuICAgICAgICB0aGlzLnN0YXJ0RWxldmF0aW5nID0gdGhpcy5zdGFydEVsZXZhdGluZy5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLmNsZWFyRWxldmF0ZUludGVydmFsID0gJyc7XG4gICAgICAgIHRoaXMuZWxldmF0ZURlbGF5ID0gNTAwMDtcbiAgICAgICAgdGhpcy5jbGVhclRpbWVyID0gJyc7XG4gICAgfVxuXG4gICAgZ2VuZXJhdGVCYWcoKSB7XG4gICAgICAgIGxldCBvUGllY2UgPSBuZXcgT1BpZWNlKCk7XG4gICAgICAgIGxldCBpUGllY2UgPSBuZXcgSVBpZWNlKCk7XG4gICAgICAgIGxldCB0UGllY2UgPSBuZXcgVFBpZWNlKCk7XG4gICAgICAgIGxldCBzUGllY2UgPSBuZXcgU1BpZWNlKCk7XG4gICAgICAgIGxldCB6UGllY2UgPSBuZXcgWlBpZWNlKCk7XG4gICAgICAgIGxldCBsUGllY2UgPSBuZXcgTFBpZWNlKCk7XG4gICAgICAgIGxldCBqUGllY2UgPSBuZXcgSlBpZWNlKCk7XG5cbiAgICAgICAgcmV0dXJuIFtvUGllY2UsIGlQaWVjZSwgdFBpZWNlLCBzUGllY2UsIHpQaWVjZSwgbFBpZWNlLCBqUGllY2VdO1xuICAgIH1cblxuICAgIHNldEZpZWxkKCkge1xuICAgICAgICBsZXQgZmllbGQgPSBuZXcgRmllbGQoKTtcbiAgICAgICAgcmV0dXJuIGZpZWxkLl9nZW5lcmF0ZUZpZWxkKCk7XG4gICAgfVxuXG4gICAgLy8gdGFrZSBwaWVjZSBmcm9tIGN1cnJlbnRCYWcgYW5kIHNldCBpdCBhcyB0aGUgY3VycmVudCBwaWVjZVxuICAgIHNldEN1cnJlbnRQaWVjZSgpIHtcbiAgICAgICAgdGhpcy5jdXJyZW50UGllY2UgPSB0aGlzLmN1cnJlbnRCYWcuc2hpZnQoKTtcbiAgICB9XG5cbiAgICAvLyByZW1vdmVzIG9sZCBnaG9zdCBwb3NpdGlvbiBmcm9tIHRoaXMuZmllbGQgYmVmb3JlIGNoYW5naW5nIHBpZWNlIHBvc2l0aW9uXG4gICAgY2xlYXJHaG9zdFBvc2l0aW9uKCkge1xuICAgICAgICBsZXQgY29vcmRpbmF0ZUFycmF5cyA9IE9iamVjdC52YWx1ZXModGhpcy5naG9zdFBvc2l0aW9uKTtcbiAgICAgICAgY29vcmRpbmF0ZUFycmF5cy5mb3JFYWNoKGFycmF5ID0+IHtcbiAgICAgICAgICAgIGFycmF5LmZvckVhY2goY29vcmRpbmF0ZSA9PiB7XG4gICAgICAgICAgICAgICAgbGV0IFtyb3csIGNvbF0gPSBbY29vcmRpbmF0ZVswXSwgY29vcmRpbmF0ZVsxXV07XG4gICAgICAgICAgICAgICAgLy8gcHJldmVudCBtZXRob2QgZnJvbSBjbGVhcmluZyBwaWVjZSBpZiBpdCBoYXBwZW5zIHRvIGJlIHdoZXJlIHRoZSBnaG9zdCBwb3NpdGlvbiBzaG91bGQgYmVcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5maWVsZFtyb3ddICYmIHRoaXMuZmllbGRbcm93XVtjb2xdID09PSBcInhcIiAmJiByb3cgPj0gMCkgdGhpcy5maWVsZFtyb3ddW2NvbF0gPSAwO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgLy8gY2xlYXJzIHRoZSBjb2xvciBjbGFzc2VzIGZyb20gdGhlIGJyb3dzZXIgZmllbGRcbiAgICBjbGVhckdob3N0Q2xhc3MoKSB7XG4gICAgICAgIGxldCBmaWVsZENvbHVtbnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKGAuZmllbGQtY29sdW1uLmZpZWxkLSR7dGhpcy5nYW1lTnVtfWApO1xuICAgICAgICBkZWJ1Z2dlclxuICAgICAgICBPYmplY3QudmFsdWVzKHRoaXMuZ2hvc3RQb3NpdGlvbikuZm9yRWFjaChhcnJheSA9PiB7XG4gICAgICAgICAgICBhcnJheS5mb3JFYWNoKGNvb3JkaW5hdGUgPT4ge1xuICAgICAgICAgICAgICAgIGxldCBbcm93LCBjb2xdID0gW2Nvb3JkaW5hdGVbMF0sIGNvb3JkaW5hdGVbMV1dO1xuICAgICAgICAgICAgICAgIGxldCBmaWVsZFNxdWFyZSA9IGZpZWxkQ29sdW1uc1tjb2xdLmNoaWxkcmVuW3Jvd107XG4gICAgICAgICAgICAgICAgZGVidWdnZXJcbiAgICAgICAgICAgICAgICBpZiAoZmllbGRTcXVhcmUpIHtcbiAgICAgICAgICAgICAgICAgICAgZmllbGRTcXVhcmUuY2xhc3NMaXN0ID0gdGhpcy5jb2xvcnNbdGhpcy5jdXJyZW50UGllY2UuY29sb3JDb2RlXTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICAvLyBmaW5kIGFwcHJvcHJpYXRlIGdob3N0IHBvc2l0aW9uIGFzIHBpZWNlIHBvc2l0aW9uIGNoYW5nZXNcbiAgICBzZXRHaG9zdFBvc2l0aW9uKCkge1xuICAgICAgICBsZXQgZ2hvc3RQb3NpdGlvbiA9IHtcbiAgICAgICAgICAgIHRvcDogdGhpcy5jdXJyZW50UGllY2UucG9zaXRpb24udG9wLm1hcChjb29yZGluYXRlID0+IGNvb3JkaW5hdGUuc2xpY2UoKSksXG4gICAgICAgICAgICBtaWRkbGU6IHRoaXMuY3VycmVudFBpZWNlLnBvc2l0aW9uLm1pZGRsZS5tYXAoY29vcmRpbmF0ZSA9PiBjb29yZGluYXRlLnNsaWNlKCkpLFxuICAgICAgICAgICAgYm90dG9tOiB0aGlzLmN1cnJlbnRQaWVjZS5wb3NpdGlvbi5ib3R0b20ubWFwKGNvb3JkaW5hdGUgPT4gY29vcmRpbmF0ZS5zbGljZSgpKVxuICAgICAgICB9XG4gICAgICAgIGxldCBzdG9wcGVkID0gZmFsc2U7XG4gICAgICAgIHdoaWxlICghc3RvcHBlZCkge1xuICAgICAgICAgICAgbGV0IGhhbmdpbmdTcXVhcmVzID0gdGhpcy5jdXJyZW50UGllY2UuaGFuZ2luZ1NxdWFyZXMoZ2hvc3RQb3NpdGlvbik7XG4gICAgICAgICAgICBoYW5naW5nU3F1YXJlcy5mb3JFYWNoKGNvb3JkaW5hdGUgPT4ge1xuICAgICAgICAgICAgICAgIGxldCBbcm93LCBjb2xdID0gW2Nvb3JkaW5hdGVbMF0sIGNvb3JkaW5hdGVbMV1dO1xuICAgICAgICAgICAgICAgIGlmIChyb3cgPCAwIHx8IHJvdyArIDEgPT09IDIwIHx8IHRoaXMuZmllbGRbcm93ICsgMV1bY29sXSkgc3RvcHBlZCA9IHRydWU7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGlmIChzdG9wcGVkKSBicmVhaztcbiAgICAgICAgICAgIGdob3N0UG9zaXRpb24udG9wID0gZ2hvc3RQb3NpdGlvbi50b3AubWFwKGFycmF5ID0+IFthcnJheVswXSArIDEsIGFycmF5WzFdXSk7XG4gICAgICAgICAgICBnaG9zdFBvc2l0aW9uLm1pZGRsZSA9IGdob3N0UG9zaXRpb24ubWlkZGxlLm1hcChhcnJheSA9PiBbYXJyYXlbMF0gKyAxLCBhcnJheVsxXV0pO1xuICAgICAgICAgICAgZ2hvc3RQb3NpdGlvbi5ib3R0b20gPSBnaG9zdFBvc2l0aW9uLmJvdHRvbS5tYXAoYXJyYXkgPT4gW2FycmF5WzBdICsgMSwgYXJyYXlbMV1dKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmdob3N0UG9zaXRpb24gPSBnaG9zdFBvc2l0aW9uO1xuICAgICAgICB0aGlzLl9wb3B1bGF0ZUdob3N0UG9zaXRpb24oKTtcbiAgICB9XG5cbiAgICAvLyBwb3B1bGF0ZSB0aGlzLmZpZWxkIHdpdGggJ3gnIHdoZXJldmVyIHRoZSBnaG9zdCBwb3NpdGlvbiBpcyBjYWxjdWxhdGVkIHRvIGJlXG4gICAgX3BvcHVsYXRlR2hvc3RQb3NpdGlvbigpIHtcbiAgICAgICAgbGV0IGNvb3JkaW5hdGVBcnJheXMgPSBPYmplY3QudmFsdWVzKHRoaXMuZ2hvc3RQb3NpdGlvbik7XG4gICAgICAgIGNvb3JkaW5hdGVBcnJheXMuZm9yRWFjaChhcnJheSA9PiB7XG4gICAgICAgICAgICBhcnJheS5mb3JFYWNoKGNvb3JkaW5hdGUgPT4ge1xuICAgICAgICAgICAgICAgIGxldCBbcm93LCBjb2xdID0gW2Nvb3JkaW5hdGVbMF0sIGNvb3JkaW5hdGVbMV1dO1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLmZpZWxkW3Jvd10gJiYgdGhpcy5maWVsZFtyb3ddW2NvbF0gIT09IHRoaXMuY3VycmVudFBpZWNlLmNvbG9yQ29kZSkgdGhpcy5maWVsZFtyb3ddW2NvbF0gPSBcInhcIjtcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLnJlbmRlcigpO1xuICAgIH1cblxuICAgIC8vIGhvbGQgcGllY2UgZm9yIGxhdGVyIHVzZSBcbiAgICBob2xkKCkge1xuICAgICAgICBpZiAoIXRoaXMuY2FuSG9sZCkgcmV0dXJuO1xuICAgICAgICB0aGlzLmN1cnJlbnRQaWVjZS5jbGVhclNlbGZGcm9tQm9hcmQodGhpcy5maWVsZCk7IFxuICAgICAgICB0aGlzLnJlbmRlcigpO1xuXG4gICAgICAgIGlmICghdGhpcy5ob2xkUGllY2UpIHtcbiAgICAgICAgICAgIC8vIHBhc3MgY3VycmVudCBwaWVjZSBuYW1lIGludG8gZ2VuZXJhdGUgcGllY2UgaW4gb3JkZXIgdG8gZ2VuZXJhdGUgYSBuZXcgcGllY2UgaW5zdGFuY2VcbiAgICAgICAgICAgIHRoaXMuaG9sZFBpZWNlID0gdGhpcy5fZ2VuZXJhdGVQaWVjZSh0aGlzLmN1cnJlbnRQaWVjZS5uYW1lKTtcbiAgICAgICAgICAgIHRoaXMuc2V0Q3VycmVudFBpZWNlKCk7XG4gICAgICAgICAgICAvLyByZS1yZW5kZXIgbmV4dCBib3hlcyB0byBhcHByb3ByaWF0ZWx5IHNob3cgY3VycmVudCBiYWdcbiAgICAgICAgICAgIHRoaXMuc2hvd0N1cnJlbnRCYWcoKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuY3VycmVudFBpZWNlID0gdGhpcy5fZ2VuZXJhdGVQaWVjZSh0aGlzLmN1cnJlbnRQaWVjZS5uYW1lKTtcbiAgICAgICAgICAgIFt0aGlzLmN1cnJlbnRQaWVjZSwgdGhpcy5ob2xkUGllY2VdID0gW3RoaXMuaG9sZFBpZWNlLCB0aGlzLmN1cnJlbnRQaWVjZV07XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIC8vIGRpc2FibGUgaG9sZC1waWVjZSByaWdodCBhZnRlciBwbGF5ZXIgaG9sZHMgYSBwaWVjZVxuICAgICAgICB0aGlzLmNhbkhvbGQgPSBmYWxzZTtcblxuICAgICAgICB0aGlzLl9wb3B1bGF0ZUhvbGRCb3goKTtcbiAgICB9XG5cbiAgICBfcG9wdWxhdGVIb2xkQm94KCkge1xuICAgICAgICBsZXQgY29sdW1ucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC5ob2xkLWJveC5maWVsZC0ke3RoaXMuZ2FtZU51bX1gKS5jaGlsZHJlbjtcblxuICAgICAgICAvLyByZW1vdmUgY29sb3JzIGZyb20gcHJldmlvdXMgcGllY2VzXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgNTsgaSsrKSB7XG4gICAgICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IDQ7IGorKykge1xuICAgICAgICAgICAgICAgIC8vIGNvbHVtbnMuY2hpbGRyZW4gaXMgbm9kZWxpc3Qgb2YgPGxpcz5cbiAgICAgICAgICAgICAgICBjb2x1bW5zW2ldLmNoaWxkcmVuW2pdLmNsYXNzTmFtZSA9IFwiXCI7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmhvbGRQaWVjZS5kaXNwbGF5U3F1YXJlcy5mb3JFYWNoKHNxdWFyZSA9PiB7XG4gICAgICAgICAgICBsZXQgW2NvbCwgcm93XSA9IFtzcXVhcmVbMF0sIHNxdWFyZVsxXV07XG4gICAgICAgICAgICBjb2x1bW5zW2NvbF0uY2hpbGRyZW5bcm93XS5jbGFzc0xpc3QuYWRkKHRoaXMuY29sb3JzW3RoaXMuaG9sZFBpZWNlLmNvbG9yQ29kZV0pO1xuICAgICAgICB9KVxuXG4gICAgfVxuXG4gICAgLy8gdXNlZCBmb3IgdGhpcy5ob2xkKCk6IGdlbmVyYXRlIGEgbmV3IHBpZWNlIHNvIHRoYXQgYSBob2xkcGllY2UgdGhhdCBpcyByZS1yZW5kZXJlZCBvbiB0aGUgYm9hcmQgd2lsbCBub3Qgc3RhcnQgZnJvbSB0aGUgb2xkIHBvc2l0aW9uXG4gICAgX2dlbmVyYXRlUGllY2UocGllY2VOYW1lKSB7XG4gICAgICAgIHN3aXRjaChwaWVjZU5hbWUpIHtcbiAgICAgICAgICAgIGNhc2UgXCJUUGllY2VcIjpcbiAgICAgICAgICAgICAgICByZXR1cm4gbmV3IFRQaWVjZTtcbiAgICAgICAgICAgIGNhc2UgXCJPUGllY2VcIjpcbiAgICAgICAgICAgICAgICByZXR1cm4gbmV3IE9QaWVjZTtcbiAgICAgICAgICAgIGNhc2UgXCJJUGllY2VcIjpcbiAgICAgICAgICAgICAgICByZXR1cm4gbmV3IElQaWVjZTtcbiAgICAgICAgICAgIGNhc2UgXCJMUGllY2VcIjpcbiAgICAgICAgICAgICAgICByZXR1cm4gbmV3IExQaWVjZTtcbiAgICAgICAgICAgIGNhc2UgXCJKUGllY2VcIjpcbiAgICAgICAgICAgICAgICByZXR1cm4gbmV3IEpQaWVjZTtcbiAgICAgICAgICAgIGNhc2UgXCJTUGllY2VcIjpcbiAgICAgICAgICAgICAgICByZXR1cm4gbmV3IFNQaWVjZTtcbiAgICAgICAgICAgIGNhc2UgXCJaUGllY2VcIjpcbiAgICAgICAgICAgICAgICByZXR1cm4gbmV3IFpQaWVjZTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8vIHRha2Ugb25lIHBpZWNlIGZyb20gbmV4dEJhZyBhbmQgYWRkIHRvIGN1cnJlbnRCYWdcbiAgICBhZGRUb0N1cnJlbnRCYWcoKSB7XG4gICAgICAgIHRoaXMuY3VycmVudEJhZy5wdXNoKHRoaXMubmV4dEJhZy5zaGlmdCgpKTtcbiAgICB9XG5cbiAgICBzaG93Q3VycmVudEJhZygpIHtcbiAgICAgICAgbGV0IGJveGVzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShgbmV4dC1ib3ggZmllbGQtJHt0aGlzLmdhbWVOdW19YCk7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgNTsgaSsrKSB7XG4gICAgICAgICAgICB0aGlzLl9wb3B1bGF0ZU5leHRCb3goYm94ZXNbaV0sIHRoaXMuY3VycmVudEJhZ1tpXSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBfcG9wdWxhdGVOZXh0Qm94KGJveCwgcGllY2UpIHtcbiAgICAgICAgLy8gY29sdW1ucyBpcyBub2RlbGlzdCBvZiA8dWxzPlxuICAgICAgICBsZXQgY29sdW1ucyA9IGJveC5jaGlsZHJlbjtcblxuICAgICAgICAvLyByZW1vdmUgY29sb3JzIGZyb20gcHJldmlvdXMgcGllY2VcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCA1OyBpKyspIHtcbiAgICAgICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgNDsgaisrKSB7XG4gICAgICAgICAgICAgICAgLy8gY29sdW1ucy5jaGlsZHJlbiBpcyBub2RlbGlzdCBvZiA8bGlzPlxuICAgICAgICAgICAgICAgIGNvbHVtbnNbaV0uY2hpbGRyZW5bal0uY2xhc3NOYW1lID0gXCJcIjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC8vIHBvcHVsYXRlIGJveCB3aXRoIG5ldyBwaWVjZVxuICAgICAgICBwaWVjZS5kaXNwbGF5U3F1YXJlcy5mb3JFYWNoKHNxdWFyZSA9PiB7XG4gICAgICAgICAgICBsZXQgW2NvbCwgcm93XSA9IFtzcXVhcmVbMF0sIHNxdWFyZVsxXV07XG4gICAgICAgICAgICBjb2x1bW5zW2NvbF0uY2hpbGRyZW5bcm93XS5jbGFzc0xpc3QuYWRkKHRoaXMuY29sb3JzW3BpZWNlLmNvbG9yQ29kZV0pO1xuICAgICAgICB9KVxuICAgIH1cblxuICAgIC8vIHJlZmlsbCBuZXh0IGJhZywgd2lsbCBvbmx5IGJlIGNhbGxlZCBvbmNlIG5leHRCYWcgYmVjb21lcyBlbXB0eVxuICAgIHJlZmlsbE5leHRCYWcoKSB7XG4gICAgICAgIHRoaXMubmV4dEJhZyA9IHRoaXMuZ2VuZXJhdGVCYWcoKTtcbiAgICB9XG5cbiAgICAvLyBpbXBsZW1lbnRhdGlvbiBvZiBzaHVmZmxlIGZvdW5kIG9uIGh0dHBzOi8vc3RhY2tvdmVyZmxvdy5jb20vcXVlc3Rpb25zLzI0NTA5NTQvaG93LXRvLXJhbmRvbWl6ZS1zaHVmZmxlLWEtamF2YXNjcmlwdC1hcnJheSMyNDUwOTc2XG4gICAgc2h1ZmZsZUJhZyhiYWcpIHtcbiAgICAgICAgdmFyIGN1cnJlbnRJbmRleCA9IGJhZy5sZW5ndGgsIHRlbXBvcmFyeVZhbHVlLCByYW5kb21JbmRleDtcblxuICAgICAgICAvLyBXaGlsZSB0aGVyZSByZW1haW4gZWxlbWVudHMgdG8gc2h1ZmZsZS4uLlxuICAgICAgICB3aGlsZSAoMCAhPT0gY3VycmVudEluZGV4KSB7XG5cbiAgICAgICAgICAgIC8vIFBpY2sgYSByZW1haW5pbmcgZWxlbWVudC4uLlxuICAgICAgICAgICAgcmFuZG9tSW5kZXggPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBjdXJyZW50SW5kZXgpO1xuICAgICAgICAgICAgY3VycmVudEluZGV4IC09IDE7XG5cbiAgICAgICAgICAgIC8vIEFuZCBzd2FwIGl0IHdpdGggdGhlIGN1cnJlbnQgZWxlbWVudC5cbiAgICAgICAgICAgIHRlbXBvcmFyeVZhbHVlID0gYmFnW2N1cnJlbnRJbmRleF07XG4gICAgICAgICAgICBiYWdbY3VycmVudEluZGV4XSA9IGJhZ1tyYW5kb21JbmRleF07XG4gICAgICAgICAgICBiYWdbcmFuZG9tSW5kZXhdID0gdGVtcG9yYXJ5VmFsdWU7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGJhZztcbiAgICB9XG4gICAgLy8gaW1wbGVtZW50YXRpb24gb2Ygc2h1ZmZsZSBmb3VuZCBvbiBodHRwczovL3N0YWNrb3ZlcmZsb3cuY29tL3F1ZXN0aW9ucy8yNDUwOTU0L2hvdy10by1yYW5kb21pemUtc2h1ZmZsZS1hLWphdmFzY3JpcHQtYXJyYXkjMjQ1MDk3NlxuXG4gICAgLy8gbG9vayB0aHJvdWdoIGZpZWxkLCBpZiBmaWVsZFtyb3ddW2NvbF0gY29udGFpbnMgYSBudW1iZXIgPiAwLCBmaWxsIHRoYXQgc3BvdCB3aXRoIHRoZSByZXNwZWN0aXZlIGNvbG9yLiBcbiAgICAvLyBpZiBjb250YWlucyBhbiAneCcsIHBvcHVsYXRlIHdpdGggZ2hvc3QgcGllY2Ugc3R5bGVzLlxuICAgIC8vIGVsc2UsIHJlbW92ZSBjb2xvclxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgLy8gaWYgKHRoaXMuY3VycmVudFBpZWNlLnJpZ2h0TW9zdFsxXSA+IDkgfHwgdGhpcy5jdXJyZW50UGllY2UubGVmdE1vc3RbMV0gPCAwKSByZXR1cm47XG4gICAgICAgIGxldCBmaWVsZENvbHVtbnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKGAuZmllbGQtY29sdW1uLmZpZWxkLSR7dGhpcy5nYW1lTnVtfWApO1xuICAgICAgICB0aGlzLmZpZWxkLmZvckVhY2goKHJvdywgcm93SWR4KSA9PiB7XG4gICAgICAgICAgICByb3cuZm9yRWFjaCgoY29sLCBjb2xJZHgpID0+IHtcbiAgICAgICAgICAgICAgICBsZXQgc3F1YXJlVmFsdWUgPSB0aGlzLmZpZWxkW3Jvd0lkeF1bY29sSWR4XTtcbiAgICAgICAgICAgICAgICBpZiAoc3F1YXJlVmFsdWUgPT09ICd4Jykge1xuICAgICAgICAgICAgICAgICAgICBmaWVsZENvbHVtbnNbY29sSWR4XS5jaGlsZHJlbltyb3dJZHhdLmNsYXNzTGlzdC5hZGQoYHgtJHt0aGlzLmNvbG9yc1t0aGlzLmN1cnJlbnRQaWVjZS5jb2xvckNvZGVdfWApO1xuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoc3F1YXJlVmFsdWUpIHtcbiAgICAgICAgICAgICAgICAgICAgZmllbGRDb2x1bW5zW2NvbElkeF0uY2hpbGRyZW5bcm93SWR4XS5jbGFzc0xpc3QuYWRkKHRoaXMuY29sb3JzW3NxdWFyZVZhbHVlXSk7XG4gICAgICAgICAgICAgICAgICAgIGZpZWxkQ29sdW1uc1tjb2xJZHhdLmNoaWxkcmVuW3Jvd0lkeF0uY2xhc3NMaXN0LnJlbW92ZShgeC0ke3RoaXMuY29sb3JzW3RoaXMuY3VycmVudFBpZWNlLmNvbG9yQ29kZV19YCk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgZmllbGRDb2x1bW5zW2NvbElkeF0uY2hpbGRyZW5bcm93SWR4XS5jbGFzc0xpc3QgPSBcIlwiO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBrZXlMaXN0ZW5lcigpIHtcbiAgICAgICAgZG9jdW1lbnQuYm9keS5hZGRFdmVudExpc3RlbmVyKFwia2V5ZG93blwiLCBldmVudCA9PiB7XG4gICAgICAgICAgICBpZiAodGhpcy5nYW1lSXNPdmVyKSByZXR1cm47XG4gICAgICAgICAgICB0aGlzLmN1cnJlbnRQaWVjZS5zZXRPdXRlclNxdWFyZXMoKTtcbiAgICAgICAgICAgIC8vIHRoaXMuY2xlYXJHaG9zdFBvc2l0aW9uKCk7XG4gICAgICAgICAgICBzd2l0Y2goZXZlbnQud2hpY2gpIHtcbiAgICAgICAgICAgICAgICAvLyB1cCBrZXlcbiAgICAgICAgICAgICAgICBjYXNlIHRoaXMuY29udHJvbHMudHVyblJpZ2h0OlxuICAgICAgICAgICAgICAgICAgICAvLyBwYXNzIGZpZWxkIHNvIHBpZWNlIGNhbiBjaGVjayBmaWVsZCB3YWxsIGJlZm9yZSB0dXJuaW5nXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY2xlYXJHaG9zdFBvc2l0aW9uKCk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMudFNwaW4gPSB0aGlzLmN1cnJlbnRQaWVjZS5tb3ZlKFwidHVyblJpZ2h0XCIsIHRoaXMuZmllbGQpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmN1cnJlbnRQaWVjZS5wb3B1bGF0ZUZpZWxkKHRoaXMuZmllbGQpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnNldEdob3N0UG9zaXRpb24oKTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgLy8gQyBrZXlcbiAgICAgICAgICAgICAgICBjYXNlIHRoaXMuY29udHJvbHMudHVybkxlZnQ6XG4gICAgICAgICAgICAgICAgICAgIC8vIHBhc3MgZmllbGQgc28gcGllY2UgY2FuIGNoZWNrIGZpZWxkIHdhbGwgYmVmb3JlIHR1cm5pbmdcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jbGVhckdob3N0UG9zaXRpb24oKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jdXJyZW50UGllY2UubW92ZShcInR1cm5MZWZ0XCIsIHRoaXMuZmllbGQpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmN1cnJlbnRQaWVjZS5wb3B1bGF0ZUZpZWxkKHRoaXMuZmllbGQpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnNldEdob3N0UG9zaXRpb24oKTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgLy8gbGVmdCBrZXlcbiAgICAgICAgICAgICAgICBjYXNlIHRoaXMuY29udHJvbHMubGVmdDpcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5rZXlIZWxkLmxlZnQgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5jdXJyZW50UGllY2UubGVmdFNpZGVCbG9ja2VkKHRoaXMuZmllbGQpKSBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5tb3ZlUGllY2UoXCJsZWZ0XCIpO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAvLyByaWdodCBrZXlcbiAgICAgICAgICAgICAgICBjYXNlIHRoaXMuY29udHJvbHMucmlnaHQ6XG4gICAgICAgICAgICAgICAgICAgIHRoaXMua2V5SGVsZC5yaWdodCA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLmN1cnJlbnRQaWVjZS5yaWdodFNpZGVCbG9ja2VkKHRoaXMuZmllbGQpKSBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5tb3ZlUGllY2UoXCJyaWdodFwiKTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgLy8gZG93biBrZXlcbiAgICAgICAgICAgICAgICBjYXNlIHRoaXMuY29udHJvbHMuc29mdERyb3A6XG4gICAgICAgICAgICAgICAgICAgIHRoaXMua2V5SGVsZC5kb3duID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5tb3ZlUGllY2UoXCJkb3duXCIpO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAvLyBzaGlmdCBrZXlcbiAgICAgICAgICAgICAgICBjYXNlIHRoaXMuY29udHJvbHMuaG9sZDogXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY2xlYXJHaG9zdFBvc2l0aW9uKCk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuaG9sZCgpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmN1cnJlbnRQaWVjZS5wb3B1bGF0ZUZpZWxkKHRoaXMuZmllbGQpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnNldEdob3N0UG9zaXRpb24oKTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgLy8gc3BhY2UgYmFyXG4gICAgICAgICAgICAgICAgY2FzZSB0aGlzLmNvbnRyb2xzLmhhcmREcm9wOlxuICAgICAgICAgICAgICAgICAgICAvLyB0aGlzLnJlbmRlcigpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmNsZWFyR2hvc3RQb3NpdGlvbigpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmN1cnJlbnRQaWVjZS5oYXJkRHJvcCh0aGlzLmZpZWxkKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5yZW5kZXIoKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jdXJyZW50UGllY2UucG9wdWxhdGVGaWVsZCh0aGlzLmZpZWxkKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5oYW5kbGVQaWVjZVN0b3AodGhpcy5oYW5kbGVDbGVhci5kcm9wKTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgLy8gUCBrZXlcbiAgICAgICAgICAgICAgICBjYXNlIDgwOlxuICAgICAgICAgICAgICAgICAgICB0aGlzLmlzUGF1c2VkID8gdGhpcy5kcm9wUGllY2UodGhpcy5kcm9wU3BlZWQpIDogY2FuY2VsQW5pbWF0aW9uRnJhbWUodGhpcy5oYW5kbGVDbGVhci5kcm9wKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5pc1BhdXNlZCA9ICF0aGlzLmlzUGF1c2VkO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMuY3VycmVudFBpZWNlLnNldE91dGVyU3F1YXJlcygpO1xuICAgICAgICAgICAgdGhpcy5yZW5kZXIoKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgZG9jdW1lbnQuYm9keS5hZGRFdmVudExpc3RlbmVyKFwia2V5dXBcIiwgZXZlbnQgPT4ge1xuICAgICAgICAgICAgc3dpdGNoIChldmVudC53aGljaCkge1xuICAgICAgICAgICAgICAgIGNhc2UgdGhpcy5jb250cm9scy5yaWdodDogXG4gICAgICAgICAgICAgICAgICAgIHRoaXMua2V5SGVsZC5yaWdodCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlIHRoaXMuY29udHJvbHMubGVmdDogXG4gICAgICAgICAgICAgICAgICAgIHRoaXMua2V5SGVsZC5sZWZ0ID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgdGhpcy5jb250cm9scy5zb2Z0RHJvcDogXG4gICAgICAgICAgICAgICAgICAgIHRoaXMua2V5SGVsZC5kb3duID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrOyAgXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGNsZWFyTGluZXMobG93ZXN0LCBoaWdoZXN0LCBudW1MaW5lc0NsZWFyZWQpIHtcbiAgICAgICAgaWYgKGxvd2VzdCA8IDApIHJldHVybjtcbiAgICAgICAgLy8gYmFzZSBjYXNlOiBpZiB3ZSByZWFjaCBhIHJvdyB0aGF0IGlzIGhpZ2hlciB0aGFuIHRoZSBoaWdoZXN0LCB0aGVuIHJldHVybiBudW1iZXIgb2YgbGluZXMgdGhhdCB3ZXJlIGNsZWFyZWRcbiAgICAgICAgaWYgKGxvd2VzdCA8IGhpZ2hlc3QpIHtcbiAgICAgICAgICAgIGRlYnVnZ2VyXG4gICAgICAgICAgICByZXR1cm4gbnVtTGluZXNDbGVhcmVkO1xuICAgICAgICB9O1xuICAgICAgICAvLyByZWN1cnNpdmUgY2FzZTogXG4gICAgICAgIC8vIGlmIGxvd2VzdCByb3cgZG9lcyBub3QgY29udGFpbiBhIDAsIGJyaW5nIGFsbCBhYm92ZSByb3dzIGRvd24gb25lIGxldmVsXG4gICAgICAgIGlmICghdGhpcy5maWVsZFtsb3dlc3RdLmluY2x1ZGVzKDApKSB7XG4gICAgICAgICAgICB0aGlzLl9icmluZ0Rvd25GaWVsZChsb3dlc3QpO1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuY2xlYXJMaW5lcyhsb3dlc3QsIGhpZ2hlc3QgKyAxLCBudW1MaW5lc0NsZWFyZWQgKyAxKVxuICAgICAgICAvLyBpZiByb3cgY29udGFpbnMgYSAwLCByb3cgaXMgbm90IGNsZWFyZWQgeWV0IFxuICAgICAgICB9IGVsc2UgaWYgKHRoaXMuZmllbGRbbG93ZXN0XS5pbmNsdWRlcygwKSkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuY2xlYXJMaW5lcyhsb3dlc3QgLSAxLCBoaWdoZXN0LCBudW1MaW5lc0NsZWFyZWQpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgX2JyaW5nRG93bkZpZWxkKHN0YXJ0aW5nUm93KSB7XG4gICAgICAgIGZvciAobGV0IGkgPSBzdGFydGluZ1JvdzsgaSA+IDA7IGktLSkge1xuICAgICAgICAgICAgdGhpcy5maWVsZFtpXSA9IHRoaXMuZmllbGRbaSAtIDFdO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuZmllbGRbMF0gPSBbMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMF07XG4gICAgfVxuXG4gICAgaGFuZGxlUGllY2VTdG9wKCkgeyAgXG4gICAgICAgIC8vIGFsbG93IHBsYXllciB0byBob2xkIHBpZWNlIGFnYWluXG4gICAgICAgIHRoaXMuY2FuSG9sZCA9IHRydWU7XG4gICAgICAgIGxldCBsb3dlc3QgPSB0aGlzLmN1cnJlbnRQaWVjZS5wb3NpdGlvbi5ib3R0b21bMF1bMF07XG4gICAgICAgIC8vIGluIGNhc2Ugb2YgbGluZSBwaWVjZSwgd2hpY2ggbWF5IG5vdCBoYXZlIHRoaXMucG9zaXRpb24udG9wXG4gICAgICAgIGxldCBoaWdoZXN0ID0gIXRoaXMuY3VycmVudFBpZWNlLnBvc2l0aW9uLnRvcC5sZW5ndGggPyBsb3dlc3QgOiB0aGlzLmN1cnJlbnRQaWVjZS5wb3NpdGlvbi50b3BbMF1bMF07XG4gICAgICAgIC8vIGNoZWNrIGlmIGEgVFBpZWNlIHdhcyBzcHVuIGluIHBsYWNlXG4gICAgICAgIGlmICh0aGlzLmN1cnJlbnRQaWVjZS5uYW1lID09PSBcIlRQaWVjZVwiKSB7XG4gICAgICAgICAgICBsZXQgW2xlZnRNb3N0Um93LCByaWdodE1vc3RSb3ddID0gW3RoaXMuY3VycmVudFBpZWNlLmxlZnRNb3N0WzBdLCB0aGlzLmN1cnJlbnRQaWVjZS5yaWdodE1vc3RbMF1dO1xuICAgICAgICAgICAgbGV0IFtsZWZ0TW9zdENvbCwgcmlnaHRNb3N0Q29sXSA9IFt0aGlzLmN1cnJlbnRQaWVjZS5sZWZ0TW9zdFsxXSwgdGhpcy5jdXJyZW50UGllY2UucmlnaHRNb3N0WzFdXTtcbiAgICAgICAgICAgIGlmICh0aGlzLmZpZWxkW2xlZnRNb3N0Um93IC0gMV0gJiYgdGhpcy5maWVsZFtyaWdodE1vc3RSb3cgLSAxXSkge1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLmZpZWxkW2xlZnRNb3N0Um93IC0gMV1bbGVmdE1vc3RDb2xdIHx8IHRoaXMuZmllbGRbcmlnaHRNb3N0Um93IC0gMV1bcmlnaHRNb3N0Q29sXSkgdGhpcy50U3BpbiA9IHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgbGV0IG51bUxpbmVzQ2xlYXJlZCA9IHRoaXMuY2xlYXJMaW5lcyhsb3dlc3QsIGhpZ2hlc3QsIDApO1xuXG4gICAgICAgIC8vIGluIHRoZSBjYXNlIG9mIG11bHRpcGxheWVyLCBzZW5kIGNsZWFyZWQgbGluZXMgdG8gb3Bwb25lbnQgYW5kIHJlY2VpdmUgcG90ZW50aWFsIGxpbmVzXG4gICAgICAgIGlmICh0aGlzLm9wcG9uZW50KSB7XG4gICAgICAgICAgICBpZiAodGhpcy50U3BpblN0cmVhayA9PT0gdHJ1ZSkgZGVidWdnZXJcbiAgICAgICAgICAgIGlmIChudW1MaW5lc0NsZWFyZWQgPiAwKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5jb21ibyArPSAxO1xuICAgICAgICAgICAgICAgIGxldCBudW1MaW5lc1xuICAgICAgICAgICAgICAgIGlmIChudW1MaW5lc0NsZWFyZWQgPCA0KSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLmN1cnJlbnRQaWVjZS5uYW1lID09PSBcIlRQaWVjZVwiICYmIHRoaXMudFNwaW4pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG51bUxpbmVzID0gbnVtTGluZXNDbGVhcmVkID09PSAzID8gNiA6IDQ7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBudW1MaW5lcyA9IG51bUxpbmVzQ2xlYXJlZCAtIDE7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnRTcGluU3RyZWFrID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBudW1MaW5lcyA9IDQ7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgbnVtTGluZXMgKz0gdGhpcy5jb21ib0d1aWRlW3RoaXMuY29tYm9dO1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLnRTcGluU3RyZWFrKSBudW1MaW5lcyArPSAyO1xuXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMudXBjb21pbmdMaW5lcyA+IDApIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy51cGNvbWluZ0xpbmVzIC09IG51bUxpbmVzO1xuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy51cGNvbWluZ0xpbmVzIDwgMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5vcHBvbmVudC5hZGRMaW5lc1RvUXVldWUoTWF0aC5hYnModGhpcy51cGNvbWluZ0xpbmVzKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnVwY29taW5nTGluZXMgPSAwO1xuICAgICAgICAgICAgICAgICAgICAgICAgYWRqdXN0UXVldWVIZWlnaHQodGhpcy5nYW1lTnVtLCAwKTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGFkanVzdFF1ZXVlSGVpZ2h0KHRoaXMuZ2FtZU51bSwgdGhpcy51cGNvbWluZ0xpbmVzICogNSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLm9wcG9uZW50LmFkZExpbmVzVG9RdWV1ZShudW1MaW5lcyk7XG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLnRTcGluID09PSB0cnVlKSB0aGlzLnRTcGluU3RyZWFrID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMuY29tYm8gPSAtMTtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy51cGNvbWluZ0xpbmVzID4gMCkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnJlY2VpdmVVcGNvbWluZ0xpbmVzKHRoaXMudXBjb21pbmdMaW5lcyk7XG4gICAgICAgICAgICAgICAgICAgIGFkanVzdFF1ZXVlSGVpZ2h0KHRoaXMuZ2FtZU51bSwgMCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBcbiAgICAgICAgfVxuICAgICAgICAvLyByZXNldCB0U3BpbiB0cmFja2VyXG4gICAgICAgIHRoaXMudFNwaW4gPSBmYWxzZVxuICAgICAgICB0aGlzLmNsZWFyR2hvc3RDbGFzcygpO1xuICAgICAgICBjYW5jZWxBbmltYXRpb25GcmFtZSh0aGlzLmhhbmRsZUNsZWFyLmRyb3ApO1xuICAgICAgICAvLyB0aGlzLnN0YXJ0RWxldmF0aW5nKCk7XG4gICAgICAgIHRoaXMucGxheSgpO1xuICAgIH1cblxuICAgIGRyb3BQaWVjZShmcHMpIHtcbiAgICAgICAgLy8gRG8gd2hhdGV2ZXJcbiAgICAgICAgdGhpcy5hbmltYXRlLmRyb3AuZnBzSW50ZXJ2YWwgPSAxMDAwIC8gZnBzO1xuICAgICAgICB0aGlzLmFuaW1hdGUuZHJvcC50aGVuID0gRGF0ZS5ub3coKTtcbiAgICAgICAgdGhpcy5hbmltYXRlLmRyb3Auc3RhcnRUaW1lID0gdGhpcy50aGVuO1xuICAgICAgICB0aGlzLmRyb3AodGhpcy5maWVsZCk7XG4gICAgfVxuXG4gICAgLy8gaW5zcGlyYXRpb24gZm9yIHRocm90dGxpbmcgcmVxdWVzdEFuaW1hdGlvbkZyYW1lIGZyb20gaHR0cHM6Ly9zdGFja292ZXJmbG93LmNvbS9xdWVzdGlvbnMvMTk3NjQwMTgvY29udHJvbGxpbmctZnBzLXdpdGgtcmVxdWVzdGFuaW1hdGlvbmZyYW1lXG4gICAgZHJvcCgpIHtcbiAgICAgICAgdGhpcy5oYW5kbGVDbGVhci5kcm9wID0gcmVxdWVzdEFuaW1hdGlvbkZyYW1lKCgpID0+IHRoaXMuZHJvcCh0aGlzLmZpZWxkKSk7XG4gICAgICAgIHRoaXMuYW5pbWF0ZS5kcm9wLm5vdyA9IERhdGUubm93KCk7XG4gICAgICAgIGxldCBlbGFwc2VkID0gdGhpcy5hbmltYXRlLmRyb3Aubm93IC0gdGhpcy5hbmltYXRlLmRyb3AudGhlbjtcbiAgICAgICAgaWYgKGVsYXBzZWQgPiB0aGlzLmFuaW1hdGUuZHJvcC5mcHNJbnRlcnZhbCkge1xuICAgICAgICAgICAgLy8gR2V0IHJlYWR5IGZvciBuZXh0IGZyYW1lIGJ5IHNldHRpbmcgdGhlbj1ub3csIGFkanVzdGluZyBmb3Igc3BlY2lmaWVkIGZwc0ludGVydmFsIG5vdCBiZWluZyBhIG11bHRpcGxlIG9mIFJBRidzIGludGVydmFsICgxNi43bXMpXG4gICAgICAgICAgICB0aGlzLmFuaW1hdGUuZHJvcC50aGVuID0gdGhpcy5hbmltYXRlLmRyb3Aubm93IC0gKGVsYXBzZWQgJSB0aGlzLmFuaW1hdGUuZHJvcC5mcHNJbnRlcnZhbCk7XG4gICAgICAgICAgICB0aGlzLmN1cnJlbnRQaWVjZS5wb3B1bGF0ZUZpZWxkKHRoaXMuZmllbGQpO1xuICAgICAgICAgICAgdGhpcy5yZW5kZXIoKTtcbiAgICAgICAgICAgIGlmICghdGhpcy5jdXJyZW50UGllY2UuaXNGYWxsaW5nKHRoaXMuZmllbGQpKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5oYW5kbGVQaWVjZVN0b3AodGhpcy5oYW5kbGVDbGVhci5kcm9wKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICh0aGlzLmN1cnJlbnRQaWVjZS5ib3R0b21Nb3N0WzBdICE9IDApIHRoaXMuY3VycmVudFBpZWNlLmRyb3AodGhpcy5maWVsZCk7XG4gICAgICAgICAgICAvLyB0aGlzLnNldEdob3N0UG9zaXRpb24oKTtcbiAgICAgICAgICAgIHRoaXMuY3VycmVudFBpZWNlLnBvcHVsYXRlRmllbGQodGhpcy5maWVsZCk7IC8vIGtlZXAgb25seSBvbmUgcG9wdWxhdGUgZmllbGQ/XG4gICAgICAgICAgICB0aGlzLnJlbmRlcigpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgbW92ZVBpZWNlKGRpcmVjdGlvbikge1xuICAgICAgICAvLyBEbyB3aGF0ZXZlclxuICAgICAgICB0aGlzLmFuaW1hdGVbZGlyZWN0aW9uXS5mcHNJbnRlcnZhbCA9IDEwMDAgLyB0aGlzLm1vdmVTcGVlZDtcbiAgICAgICAgdGhpcy5hbmltYXRlW2RpcmVjdGlvbl0udGhlbiA9IERhdGUubm93KCk7XG4gICAgICAgIHRoaXMuYW5pbWF0ZVtkaXJlY3Rpb25dLnN0YXJ0VGltZSA9IHRoaXMuYW5pbWF0ZVtkaXJlY3Rpb25dLnRoZW47XG4gICAgICAgIHRoaXMubW92ZShkaXJlY3Rpb24pO1xuICAgIH1cblxuICAgIC8vIGluc3BpcmF0aW9uIGZvciB0aHJvdHRsaW5nIHJlcXVlc3RBbmltYXRpb25GcmFtZSBmcm9tIGh0dHBzOi8vc3RhY2tvdmVyZmxvdy5jb20vcXVlc3Rpb25zLzE5NzY0MDE4L2NvbnRyb2xsaW5nLWZwcy13aXRoLXJlcXVlc3RhbmltYXRpb25mcmFtZVxuICAgIG1vdmUoZGlyZWN0aW9uKSB7XG4gICAgICAgIHRoaXMuaGFuZGxlQ2xlYXJbZGlyZWN0aW9uXSA9IHJlcXVlc3RBbmltYXRpb25GcmFtZSgoKSA9PiB0aGlzLm1vdmUoZGlyZWN0aW9uKSk7XG4gICAgICAgIGlmICghdGhpcy5rZXlIZWxkW2RpcmVjdGlvbl0pIGNhbmNlbEFuaW1hdGlvbkZyYW1lKHRoaXMuaGFuZGxlQ2xlYXJbZGlyZWN0aW9uXSk7XG4gICAgICAgIHRoaXMuYW5pbWF0ZVtkaXJlY3Rpb25dLm5vdyA9IERhdGUubm93KCk7XG4gICAgICAgIGxldCBlbGFwc2VkID0gdGhpcy5hbmltYXRlW2RpcmVjdGlvbl0ubm93IC0gdGhpcy5hbmltYXRlW2RpcmVjdGlvbl0udGhlbjtcbiAgICAgICAgaWYgKGVsYXBzZWQgPiB0aGlzLmFuaW1hdGVbZGlyZWN0aW9uXS5mcHNJbnRlcnZhbCkge1xuICAgICAgICAgICAgLy8gR2V0IHJlYWR5IGZvciBuZXh0IGZyYW1lIGJ5IHNldHRpbmcgdGhlbj1ub3csIGFkanVzdGluZyBmb3Igc3BlY2lmaWVkIGZwc0ludGVydmFsIG5vdCBiZWluZyBhIG11bHRpcGxlIG9mIFJBRidzIGludGVydmFsICgxNi43bXMpXG4gICAgICAgICAgICB0aGlzLmFuaW1hdGVbZGlyZWN0aW9uXS50aGVuID0gdGhpcy5hbmltYXRlW2RpcmVjdGlvbl0ubm93IC0gKGVsYXBzZWQgJSB0aGlzLmFuaW1hdGVbZGlyZWN0aW9uXS5mcHNJbnRlcnZhbCk7XG5cbiAgICAgICAgICAgIC8vIHByZXZlbnQgcGllY2UgZnJvbSBtb3ZpbmcgaWYgaXQgaXMgYmxvY2tlZCBvciBpZiBib3RoIGxlZnQgYW5kIHJpZ2h0IGFycm93IGtleXMgYXJlIGhlbGQgZG93blxuICAgICAgICAgICAgaWYgKFxuICAgICAgICAgICAgICAgIGRpcmVjdGlvbiA9PT0gXCJyaWdodFwiICYmIHRoaXMuY3VycmVudFBpZWNlLnJpZ2h0U2lkZUJsb2NrZWQodGhpcy5maWVsZCkgXG4gICAgICAgICAgICAgICAgfHwgXG4gICAgICAgICAgICAgICAgZGlyZWN0aW9uID09PSBcImxlZnRcIiAmJiB0aGlzLmN1cnJlbnRQaWVjZS5sZWZ0U2lkZUJsb2NrZWQodGhpcy5maWVsZCkgXG4gICAgICAgICAgICAgICAgfHwgXG4gICAgICAgICAgICAgICAgZGlyZWN0aW9uID09PSBcImRvd25cIiAmJiAhdGhpcy5jdXJyZW50UGllY2UuaXNGYWxsaW5nKHRoaXMuZmllbGQpXG4gICAgICAgICAgICAgICAgfHwgXG4gICAgICAgICAgICAgICAgdGhpcy5rZXlIZWxkLnJpZ2h0ICYmIHRoaXMua2V5SGVsZC5sZWZ0XG4gICAgICAgICAgICApIHJldHVybjsgXG5cbiAgICAgICAgICAgIHRoaXMuY3VycmVudFBpZWNlLm1vdmUoZGlyZWN0aW9uKTtcblxuICAgICAgICAgICAgdGhpcy5jdXJyZW50UGllY2UucG9wdWxhdGVGaWVsZCh0aGlzLmZpZWxkKTtcblxuICAgICAgICAgICAgLy8gZG9uJ3QgbmVlZCB0byByZS1wb3B1bGF0ZSBnaG9zdCBwb3NpdGlvbiBpZiB0aGUgcGllY2UgaXMgc29mdC1kcm9wcGluZ1xuICAgICAgICAgICAgaWYgKGRpcmVjdGlvbiAhPT0gXCJkb3duXCIpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmNsZWFyR2hvc3RQb3NpdGlvbigpO1xuICAgICAgICAgICAgICAgIHRoaXMuc2V0R2hvc3RQb3NpdGlvbigpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB0aGlzLnJlbmRlcigpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgaGFuZGxlVG9wUGllY2UoKSB7XG4gICAgICAgIGxldCBhdFRvcCA9IGZhbHNlO1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgd2hpbGUgKHRoaXMuZmllbGRbdGhpcy5jdXJyZW50UGllY2UucG9zaXRpb24uYm90dG9tWzBdWzBdXVszXSB8fCB0aGlzLmZpZWxkW3RoaXMuY3VycmVudFBpZWNlLnBvc2l0aW9uLmJvdHRvbVswXVswXV1bNF0gfHwgdGhpcy5maWVsZFt0aGlzLmN1cnJlbnRQaWVjZS5wb3NpdGlvbi5ib3R0b21bMF1bMF1dWzVdIHx8IHRoaXMuZmllbGRbdGhpcy5jdXJyZW50UGllY2UucG9zaXRpb24uYm90dG9tWzBdWzBdXVs2XSkge1xuICAgICAgICAgICAgICAgIHRoaXMuY3VycmVudFBpZWNlLm1vdmUoXCJ1cFwiLCB0aGlzLmZpZWxkKTtcbiAgICAgICAgICAgICAgICBhdFRvcCA9IHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gY2F0Y2gge1xuICAgICAgICAgICAgdGhpcy5nYW1lT3Zlcih0aGlzLm9wcG9uZW50LmdhbWVOdW0pO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBhdFRvcDtcbiAgICB9XG4gICAgXG4gICAgcGxheSgpIHtcbiAgICAgICAgdGhpcy5zZXRDdXJyZW50UGllY2UoKTtcbiAgICAgICAgdGhpcy5oYW5kbGVUb3BQaWVjZSgpO1xuICAgICAgICB0aGlzLmN1cnJlbnRQaWVjZS5wb3B1bGF0ZUZpZWxkKHRoaXMuZmllbGQpO1xuICAgICAgICB0aGlzLmFkZFRvQ3VycmVudEJhZygpO1xuICAgICAgICB0aGlzLnNob3dDdXJyZW50QmFnKCk7XG4gICAgICAgIGlmICghdGhpcy5uZXh0QmFnLmxlbmd0aCkgdGhpcy5yZWZpbGxOZXh0QmFnKCk7XG4gICAgICAgIHRoaXMuc2V0R2hvc3RQb3NpdGlvbigpO1xuICAgICAgICAvLyBkcm9wIHBpZWNlIGF0IGdpdmVuIGZwc1xuICAgICAgICB0aGlzLmRyb3BQaWVjZSh0aGlzLmRyb3BTcGVlZCk7ICAgIFxuICAgIH1cblxuICAgIGdhbWVPdmVyKHdpbm5lcikge1xuICAgICAgICB0aGlzLmRyb3BTcGVlZCA9IDA7XG4gICAgICAgIGxldCBnYW1lT3ZlclNjcmVlbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIGdhbWVPdmVyU2NyZWVuLmNsYXNzTGlzdC5hZGQoXCJnYW1lLW92ZXItZGl2XCIpO1xuICAgICAgICBcbiAgICAgICAgbGV0IGdhbWVPdmVySGVhZGluZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMlwiKTtcbiAgICAgICAgZ2FtZU92ZXJIZWFkaW5nLmNsYXNzTGlzdC5hZGQoXCJnYW1lLW92ZXItaGVhZGluZ1wiKTtcblxuICAgICAgICBnYW1lT3ZlckhlYWRpbmcuaW5uZXJIVE1MID0gXCJHQU1FIE9WRVJcIjtcbiAgICAgICAgZ2FtZU92ZXJTY3JlZW4uYXBwZW5kKGdhbWVPdmVySGVhZGluZyk7XG5cbiAgICAgICAgbGV0IHdpbm5lckhlYWRpbmc7XG4gICAgICAgIGlmICh3aW5uZXIpICB7XG4gICAgICAgICAgICB3aW5uZXJIZWFkaW5nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgyXCIpO1xuICAgICAgICAgICAgd2lubmVySGVhZGluZy5jbGFzc0xpc3QuYWRkKFwiZ2FtZS1vdmVyLWhlYWRpbmdcIik7XG4gICAgICAgICAgICB3aW5uZXJIZWFkaW5nLmlubmVySFRNTCA9IGBQTEFZRVIgJHt3aW5uZXJ9IFdJTlNgO1xuICAgICAgICAgICAgZ2FtZU92ZXJTY3JlZW4uYXBwZW5kKHdpbm5lckhlYWRpbmcpXG4gICAgICAgIH0gICBcblxuICAgICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGdhbWVPdmVyU2NyZWVuKTtcbiAgICAgICAgdGhpcy5zdG9wVGltZXIoKTtcbiAgICAgICAgdGhpcy5nYW1lSXNPdmVyID0gdHJ1ZTtcbiAgICB9XG5cbiAgICAvLyBtdWx0aXBsYXllciBcbiAgICBzZXRPcHBvbmVudChwbGF5ZXIpIHtcbiAgICAgICAgdGhpcy5vcHBvbmVudCA9IHBsYXllcjtcbiAgICB9XG5cbiAgICBhZGRMaW5lc1RvUXVldWUobnVtTGluZXMpIHtcbiAgICAgICAgdGhpcy51cGNvbWluZ0xpbmVzICs9IG51bUxpbmVzO1xuICAgICAgICBsZXQgcGVyY2VudGFnZSA9IHRoaXMudXBjb21pbmdMaW5lcyAqIDU7XG4gICAgICAgIGFkanVzdFF1ZXVlSGVpZ2h0KHRoaXMuZ2FtZU51bSwgcGVyY2VudGFnZSk7XG4gICAgfVxuXG4gICAgcmVjZWl2ZVVwY29taW5nTGluZXMoKSB7XG4gICAgICAgIGxldCBnYXJiYWdlTGluZXMgPSBbXTtcbiAgICAgICAgbGV0IG51bUxpbmVzID0gdGhpcy51cGNvbWluZ0xpbmVzO1xuICAgICAgICBsZXQgcmFuZG9tSG9sZTtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBudW1MaW5lczsgaSsrKSB7XG4gICAgICAgICAgICBpZiAoaSAlIDIgPT09IDApIHJhbmRvbUhvbGUgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiA5KTtcbiAgICAgICAgICAgIGxldCBnYXJiYWdlUm93ID0gWzgsIDgsIDgsIDgsIDgsIDgsIDgsIDgsIDgsIDhdO1xuICAgICAgICAgICAgZ2FyYmFnZVJvd1tyYW5kb21Ib2xlXSA9IDA7XG4gICAgICAgICAgICBnYXJiYWdlTGluZXMucHVzaChnYXJiYWdlUm93KTtcbiAgICAgICAgfVxuICAgICAgICAvLyBpZiBwbGF5ZXIgcmVhY2hlcyB0aGUgdG9wLCBwbGF5ZXIgbG9zZXNcbiAgICAgICAgLy8gc2xpY2UgYWxsb3dzIHBsYXllciB0byBjb250aW51ZSBwbGF5aW5nIGlmIHRvcCBtaWRkbGUgaXMgY2xlYXJcbiAgICAgICAgaWYgKCF0aGlzLmZpZWxkW251bUxpbmVzIC0gMV0uc2xpY2UoMiw3KS5pbmNsdWRlcygwKSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuZmllbGQgPSB0aGlzLmZpZWxkLnNsaWNlKG51bUxpbmVzLCAyMCkuY29uY2F0KGdhcmJhZ2VMaW5lcyk7XG4gICAgICAgIHRoaXMudXBjb21pbmdMaW5lcyA9IDA7XG4gICAgICAgIHRoaXMucmVuZGVyKCk7XG4gICAgfVxuXG4gICAgLy8gc2luZ2xlIHBsYXllclxuICAgIHN0YXJ0RWxldmF0aW5nKGVsZXZhdGVEZWxheSkge1xuICAgICAgICB0aGlzLmNsZWFyRWxldmF0ZUludGVydmFsID0gc2V0SW50ZXJ2YWwoKCkgPT4ge1xuICAgICAgICAgICAgY29uc29sZS5sb2codGhpcy5jdXJyZW50UGllY2UpO1xuICAgICAgICAgICAgdGhpcy5jbGVhckdob3N0UG9zaXRpb24oKTtcbiAgICAgICAgICAgIHRoaXMuY3VycmVudFBpZWNlLmNsZWFyU2VsZkZyb21Cb2FyZCh0aGlzLmZpZWxkKTtcbiAgICAgICAgICAgIHRoaXMudXBjb21pbmdMaW5lcyArPSAxO1xuICAgICAgICAgICAgdGhpcy5yZWNlaXZlVXBjb21pbmdMaW5lcygpO1xuICAgICAgICAgICAgdGhpcy5zZXRHaG9zdFBvc2l0aW9uKCk7XG4gICAgICAgICAgICB0aGlzLmN1cnJlbnRQaWVjZS5wb3B1bGF0ZUZpZWxkKHRoaXMuZmllbGQpO1xuICAgICAgICAgICAgdGhpcy5yZW5kZXIoKTtcbiAgICAgICAgfSwgZWxldmF0ZURlbGF5KVxuICAgIH1cblxuICAgIGFkanVzdEVsZXZhdGUoKSB7XG4gICAgICAgIHNldEludGVydmFsKCgpID0+IHtcbiAgICAgICAgICAgIGlmICh0aGlzLmNsZWFyRWxldmF0ZUludGVydmFsKSBjbGVhckludGVydmFsKHRoaXMuY2xlYXJFbGV2YXRlSW50ZXJ2YWwpO1xuICAgICAgICAgICAgaWYgKHRoaXMuZWxldmF0ZURlbGF5ID4gMjAwMCkgdGhpcy5lbGV2YXRlRGVsYXkgLT0gMjAwO1xuICAgICAgICAgICAgdGhpcy5zdGFydEVsZXZhdGluZyh0aGlzLmVsZXZhdGVEZWxheSk7XG4gICAgICAgIH0sIDEwMDAwKTtcbiAgICB9XG5cbiAgICBzdGFydFRpbWVyKCkge1xuICAgICAgICBsZXQgbWludXRlcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5taW51dGVzJyk7XG4gICAgICAgIGxldCBzZWNvbmRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNlY29uZHMnKTtcbiAgICAgICAgdGhpcy5jbGVhclRpbWVyID0gc2V0SW50ZXJ2YWwoKCkgPT4ge1xuICAgICAgICAgICAgbGV0IG9sZFNlY29uZCA9IE51bWJlcihzZWNvbmRzLmlubmVySFRNTCk7XG4gICAgICAgICAgICBsZXQgb2xkTWludXRlID0gTnVtYmVyKG1pbnV0ZXMuaW5uZXJIVE1MKTtcbiAgICAgICAgICAgIGlmIChvbGRTZWNvbmQgKyAxID09PSA2MCkge1xuICAgICAgICAgICAgICAgIHNlY29uZHMuaW5uZXJIVE1MID0gMDtcbiAgICAgICAgICAgICAgICBtaW51dGVzLmlubmVySFRNTCA9IG9sZE1pbnV0ZSArIDE7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGxldCBuZXdTZWNvbmRzID0gTnVtYmVyKHNlY29uZHMuaW5uZXJIVE1MKSArIDEgPCAxMCA/IGAwJHtOdW1iZXIoc2Vjb25kcy5pbm5lckhUTUwpICsgMX1gIDogTnVtYmVyKHNlY29uZHMuaW5uZXJIVE1MKSArIDE7XG4gICAgICAgICAgICAgICAgc2Vjb25kcy5pbm5lckhUTUwgPSBuZXdTZWNvbmRzO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LCAxMDAwKVxuICAgIH1cblxuICAgIHN0b3BUaW1lcigpIHtcbiAgICAgICAgY2xlYXJJbnRlcnZhbCh0aGlzLmNsZWFyVGltZXIpO1xuICAgIH1cblxuICAgIGNoYW5nZUNvbnRyb2xzKCkge1xuICAgICAgICB0aGlzLmNvbnRyb2xzID0geyBsZWZ0OiAzNywgcmlnaHQ6IDM5LCB0dXJuUmlnaHQ6IDM4LCBzb2Z0RHJvcDogNDAsIGhvbGQ6IDE2LCB0dXJuTGVmdDogNjcsIGhhcmREcm9wOiAzMiB9XG4gICAgfVxufSIsImltcG9ydCBNZW51IGZyb20gJy4vbWVudS9tZW51J1xuXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCAoKSA9PiB7XG4gICAgY29uc3QgbWVudSA9IG5ldyBNZW51O1xuICAgIG1lbnUucmVuZGVyTWVudSgpO1xufSk7IiwiaW1wb3J0IEdhbWUgZnJvbSAnLi4vZ2FtZS9nYW1lJztcbmltcG9ydCBGaWVsZCBmcm9tICcuLi9maWVsZC9maWVsZCc7XG5pbXBvcnQgTXVsdGlwbGF5ZXIgZnJvbSAnLi4vbXVsdGlwbGF5ZXIvbXVsdGlwbGF5ZXInO1xuaW1wb3J0IE1vZGFsIGZyb20gJy4uL21vZGFsL21vZGFsJztcbmltcG9ydCBTaW5nbGVQbGF5ZXJDb250ZW50IGZyb20gJy4uL21vZGFsL3NpbmdsZVBsYXllckNvbnRlbnQnO1xuaW1wb3J0IE11bHRpcGxheWVyQ29udGVudCBmcm9tICcuLi9tb2RhbC9tdWx0aXBsYXllckNvbnRlbnQnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNZW51IHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5tZW51ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJtZW51XCIpO1xuXG4gICAgICAgIHRoaXMub3B0aW9uc1BsYXllcjEgPSB7IGdhbWVOdW06IDEsIG1vdmVTcGVlZDogMjAsIGNvbnRyb2xzOiB7IGxlZnQ6IDY1LCByaWdodDogNjgsIHR1cm5SaWdodDogODcsIHNvZnREcm9wOiA4MywgaG9sZDogODEsIHR1cm5MZWZ0OiAxOTIsIGhhcmREcm9wOiA0OSB9IH1cbiAgICAgICAgdGhpcy5vcHRpb25zUGxheWVyMiA9IHsgZ2FtZU51bTogMiwgbW92ZVNwZWVkOiAyMCwgY29udHJvbHM6IHsgbGVmdDogMzcsIHJpZ2h0OiAzOSwgdHVyblJpZ2h0OiAzOCwgc29mdERyb3A6IDQwLCBob2xkOiAxNiwgdHVybkxlZnQ6IDc1LCBoYXJkRHJvcDogMTkwIH0gfVxuICAgICAgICAgICAgXG5cbiAgICAgICAgdGhpcy5nYW1lMSA9IG5ldyBHYW1lKHRoaXMub3B0aW9uc1BsYXllcjEpO1xuICAgICAgICB0aGlzLmdhbWUyID0gbmV3IEdhbWUodGhpcy5vcHRpb25zUGxheWVyMik7XG5cbiAgICAgICAgdGhpcy5maWVsZDEgPSBuZXcgRmllbGQoMSk7XG4gICAgICAgIHRoaXMuZmllbGQyID0gbmV3IEZpZWxkKDIpO1xuXG4gICAgICAgIHRoaXMubXVsdGlwbGF5ZXJNb2RlID0gbmV3IE11bHRpcGxheWVyKHRoaXMuZ2FtZTEsIHRoaXMuZ2FtZTIpO1xuXG4gICAgICAgIHRoaXMuZmllbGRDb250YWluZXIxID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJmaWVsZC1jb250YWluZXItMVwiKTtcbiAgICAgICAgdGhpcy5maWVsZENvbnRhaW5lcjIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImZpZWxkLWNvbnRhaW5lci0yXCIpO1xuXG4gICAgICAgIHRoaXMuc2luZ2xlUGxheWVyQ29udGVudCA9IG5ldyBTaW5nbGVQbGF5ZXJDb250ZW50KCk7XG4gICAgICAgIHRoaXMubXVsdGlwbGF5ZXJDb250ZW50ID0gbmV3IE11bHRpcGxheWVyQ29udGVudCgpO1xuICAgICAgICB0aGlzLm1vZGFsID0gbmV3IE1vZGFsKCk7XG4gICAgfVxuXG4gICAgcmVuZGVyQnV0dG9ucygpIHtcbiAgICAgICAgbGV0IHNpbmdsZVBsYXllckJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIGxldCBtdWx0aXBsYXllckJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5cbiAgICAgICAgc2luZ2xlUGxheWVyQnV0dG9uLmNsYXNzTGlzdC5hZGQoXCJzaW5nbGUtcGxheWVyLWJ1dHRvblwiKTtcbiAgICAgICAgbXVsdGlwbGF5ZXJCdXR0b24uY2xhc3NMaXN0LmFkZChcIm11bHRpcGxheWVyLWJ1dHRvblwiKTtcblxuICAgICAgICBzaW5nbGVQbGF5ZXJCdXR0b24uaW5uZXJIVE1MID0gXCJTaW5nbGUgUGxheWVyXCI7XG4gICAgICAgIG11bHRpcGxheWVyQnV0dG9uLmlubmVySFRNTCA9IFwiTXVsdGlwbGF5ZXJcIjtcblxuICAgICAgICB0aGlzLmFkZEV2ZW50TGlzdGVuZXJzKHNpbmdsZVBsYXllckJ1dHRvbiwgbXVsdGlwbGF5ZXJCdXR0b24pO1xuXG4gICAgICAgIHJldHVybiBbc2luZ2xlUGxheWVyQnV0dG9uLCBtdWx0aXBsYXllckJ1dHRvbl07XG4gICAgfVxuXG4gICAgYWRkRXZlbnRMaXN0ZW5lcnMoc2luZ2xlUGxheWVyQnV0dG9uLCBtdWx0aXBsYXllckJ1dHRvbikge1xuICAgICAgICBzaW5nbGVQbGF5ZXJCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLnJlbmRlclNpbmdsZVBsYXllcigpO1xuICAgICAgICB9KTtcbiAgICAgICAgbXVsdGlwbGF5ZXJCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLnJlbmRlck11bHRpcGxheWVyKCk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHJlbmRlclNpbmdsZVBsYXllcigpIHtcbiAgICAgICAgZG9jdW1lbnQuYm9keS5yZW1vdmVDaGlsZCh0aGlzLm1lbnUpO1xuICAgICAgICBkb2N1bWVudC5ib2R5LnN0eWxlLmp1c3RpZnlDb250ZW50ID0gJ25vbmUnO1xuICAgICAgICB0aGlzLnNpbmdsZVBsYXllckNvbnRlbnQuY3JlYXRlVGltZXJBbmRDb250cm9scygpO1xuICAgICAgICB0aGlzLmZpZWxkMS5jcmVhdGVDb21wbGV0ZUZpZWxkKHRoaXMuZmllbGRDb250YWluZXIxKTtcbiAgICAgICAgdGhpcy5maWVsZENvbnRhaW5lcjEuc3R5bGUucG9zaXRpb24gPSAncmVsYXRpdmUnO1xuICAgICAgICB0aGlzLmZpZWxkQ29udGFpbmVyMS5zdHlsZS5sZWZ0ID0gJzE0dncnO1xuICAgICAgICB0aGlzLmdhbWUxLmtleUxpc3RlbmVyKCk7XG4gICAgICAgIC8vIHRoaXMuZ2FtZTEuY2hhbmdlQ29udHJvbHMoKTtcbiAgICAgICAgdGhpcy5nYW1lMS5wbGF5KCk7XG4gICAgICAgIHRoaXMuZ2FtZTEuc3RhcnRFbGV2YXRpbmcoNTAwMCk7XG4gICAgICAgIHRoaXMuZ2FtZTEuYWRqdXN0RWxldmF0ZSgpO1xuICAgICAgICB0aGlzLnNpbmdsZVBsYXllckNvbnRlbnQuY3JlYXRlVGltZXIoKTtcbiAgICAgICAgdGhpcy5nYW1lMS5zdGFydFRpbWVyKCk7XG4gICAgfVxuXG4gICAgcmVuZGVyTXVsdGlwbGF5ZXIoKSB7XG4gICAgICAgIGRvY3VtZW50LmJvZHkucmVtb3ZlQ2hpbGQodGhpcy5tZW51KTtcbiAgICAgICAgdGhpcy5maWVsZDEuY3JlYXRlQ29tcGxldGVGaWVsZCh0aGlzLmZpZWxkQ29udGFpbmVyMSk7XG4gICAgICAgIHRoaXMuZ2FtZTEua2V5TGlzdGVuZXIoKTtcblxuICAgICAgICB0aGlzLmZpZWxkMi5jcmVhdGVDb21wbGV0ZUZpZWxkKHRoaXMuZmllbGRDb250YWluZXIyKTtcbiAgICAgICAgdGhpcy5nYW1lMi5rZXlMaXN0ZW5lcigpO1xuXG4gICAgICAgIGxldCBjb250cm9sc0NvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBjb250cm9sc0NvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdjb250cm9scy1jb250YWluZXInKVxuICAgICAgICBjb250cm9sc0NvbnRhaW5lci5hcHBlbmRDaGlsZCh0aGlzLm11bHRpcGxheWVyQ29udGVudC5jcmVhdGVDb250cm9sc0NvbnRlbnQoJ3BsYXllcjEnKSk7XG4gICAgICAgIGNvbnRyb2xzQ29udGFpbmVyLmFwcGVuZENoaWxkKHRoaXMubXVsdGlwbGF5ZXJDb250ZW50LmNyZWF0ZUNvbnRyb2xzQ29udGVudCgncGxheWVyMicpKTtcbiAgICAgICAgdGhpcy5tb2RhbC5jcmVhdGUoKTtcbiAgICAgICAgdGhpcy5tb2RhbC5hcHBlbmRDaGlsZChjb250cm9sc0NvbnRhaW5lcik7XG4gICAgICAgIHRoaXMubW9kYWwuYXBwZW5kQ2hpbGQodGhpcy5fY3JlYXRlQ2xvc2VNb2RhbExpbmsoKSk7XG4gICAgfVxuXG4gICAgcmVuZGVyTWVudSgpIHtcbiAgICAgICAgbGV0IGJ1dHRvbkNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIGJ1dHRvbkNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwiYnV0dG9uLWNvbnRhaW5lclwiKTtcbiAgICAgICAgdGhpcy5yZW5kZXJCdXR0b25zKCkuZm9yRWFjaChidXR0b24gPT4ge1xuICAgICAgICAgICAgYnV0dG9uQ29udGFpbmVyLmFwcGVuZENoaWxkKGJ1dHRvbik7XG4gICAgICAgIH0pXG4gICAgICAgIHRoaXMubWVudS5hcHBlbmRDaGlsZChidXR0b25Db250YWluZXIpO1xuICAgIH1cblxuICAgIF9jcmVhdGVDbG9zZU1vZGFsTGluaygpIHtcbiAgICAgICAgbGV0IGNsb3NlTGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBjbG9zZUxpbmsuY2xhc3NMaXN0LmFkZCgnY2xvc2UtbW9kYWwtbGluaycpO1xuICAgICAgICBjbG9zZUxpbmsuaW5uZXJIVE1MID0gXCJMZXQncyBnZXQgc3RhcnRlZC5cIjtcblxuICAgICAgICBjbG9zZUxpbmsuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLm1vZGFsLnJlbW92ZSgpO1xuICAgICAgICAgICAgdGhpcy5tdWx0aXBsYXllck1vZGUuc3RhcnRNdWx0aXBsYXllcigpO1xuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIGNsb3NlTGluaztcbiAgICB9XG59IiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgTW9kYWwge1xuICAgIGNyZWF0ZSgpIHtcbiAgICAgICAgbGV0IG1vZGFsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIG1vZGFsLmNsYXNzTGlzdC5hZGQoJ2NvbnRyb2xzLW1vZGFsJyk7XG4gICAgICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQobW9kYWwpO1xuICAgIH1cbiAgICBcbiAgICBhcHBlbmRDaGlsZChjb250ZW50KSB7XG4gICAgICAgIGxldCBtb2RhbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb250cm9scy1tb2RhbCcpO1xuICAgICAgICBtb2RhbC5hcHBlbmRDaGlsZChjb250ZW50KTtcbiAgICB9XG5cbiAgICByZW1vdmUoKSB7XG4gICAgICAgIGxldCBtb2RhbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb250cm9scy1tb2RhbCcpO1xuICAgICAgICBtb2RhbC5yZW1vdmUoKTtcbiAgICB9XG59IiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgTXVsdGlwbGF5ZXJDb250ZW50IHtcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgICAgICB0aGlzLmtleXMgPSB7XG4gICAgICAgICAgICBwbGF5ZXIxOiB7XG4gICAgICAgICAgICAgICAgJ3dfa2V5JzogJ1RVUk4gUklHSFQnLFxuICAgICAgICAgICAgICAgICdhX2tleSc6ICdMRUZUJyxcbiAgICAgICAgICAgICAgICAnc19rZXknOiAnU09GVCBEUk9QJyxcbiAgICAgICAgICAgICAgICAnZF9rZXknOiAnUklHSFQnLFxuICAgICAgICAgICAgICAgICdgX2tleSc6ICdUVVJOIExFRlQnLFxuICAgICAgICAgICAgICAgICdxX2tleSc6ICdIT0xEJyxcbiAgICAgICAgICAgICAgICAnMV9rZXknOiAnSEFSRERST1AnXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgcGxheWVyMjoge1xuICAgICAgICAgICAgICAgICd1cF9rZXknOiAnVFVSTiBSSUdIVCcsXG4gICAgICAgICAgICAgICAgJ2xlZnRfa2V5JzogJ0xFRlQnLFxuICAgICAgICAgICAgICAgICdkb3duX2tleSc6ICdTT0ZUIERST1AnLFxuICAgICAgICAgICAgICAgICdyaWdodF9rZXknOiAnUklHSFQnLFxuICAgICAgICAgICAgICAgICdrX2tleSc6ICdUVVJOIExFRlQnLFxuICAgICAgICAgICAgICAgICdzaGlmdF9rZXknOiAnSE9MRCcsXG4gICAgICAgICAgICAgICAgJ3BlcmlvZF9rZXknOiAnSEFSRERST1AnXG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG5cbiAgICB9XG5cbiAgICBjcmVhdGVDb250cm9sc0NvbnRlbnQocGxheWVyKSB7XG4gICAgICAgIGxldCBjb250cm9sc0RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBjb250cm9sc0Rpdi5jbGFzc0xpc3QuYWRkKCdjb250cm9scycpO1xuICAgICAgICBsZXQgaW1hZ2VzID0gT2JqZWN0LmtleXModGhpcy5rZXlzW3BsYXllcl0pO1xuICAgICAgICBsZXQgZGVzY3JpcHRpb25zID0gT2JqZWN0LnZhbHVlcyh0aGlzLmtleXNbcGxheWVyXSk7XG5cbiAgICAgICAgLy8gaW5pdGlhbGl6ZSBhcnJheXMgb2Ygc3BhbnMgYW5kIGRpdnNcbiAgICAgICAgbGV0IHNwYW5zID0gW107XG4gICAgICAgIGxldCBkaXZzID0gW107XG5cbiAgICAgICAgbGV0IGxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaGVhZGVyJyk7XG4gICAgICAgIGxhYmVsLmlubmVySFRNTCA9IGBQTEFZRVIgJHtwbGF5ZXIuc2xpY2UoNil9YFxuICAgICAgICBjb250cm9sc0Rpdi5hcHBlbmRDaGlsZChsYWJlbCk7XG5cbiAgICAgICAgLy8gY3JlYXRlIGVsZW1lbnRzIGFuZCBzdG9yZSBpbnRvIGFycmF5IGluZGljZXMgZm9yIGxhdGVyIHJlZmVyZW5jZVxuICAgICAgICBmb3IgKGxldCBpID0gMTsgaSA8PSA3OyBpKyspIHtcbiAgICAgICAgICAgIHNwYW5zW2ldID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICAgICAgICAgICAgaWYgKGkgPD0gMykgZGl2c1tpXSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICB9XG5cbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBpbWFnZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGxldCBwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgICAgICAgICAgbGV0IGltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICAgICAgICAgICAgaW1nLmNsYXNzTGlzdC5hZGQoJ2tleWJvYXJkLWtleScpO1xuICAgICAgICAgICAgaWYgKGkgPT09IDUgJiYgcGxheWVyID09PSBcInBsYXllcjJcIikgaW1nLmNsYXNzTGlzdC5hZGQoJ3NoaWZ0LWtleScpO1xuXG4gICAgICAgICAgICBwLmlubmVySFRNTCA9IGRlc2NyaXB0aW9uc1tpXTtcbiAgICAgICAgICAgIGltZy5zZXRBdHRyaWJ1dGUoJ3NyYycsIGAuL2Fzc2V0cy9pbWFnZXMvJHtpbWFnZXNbaV19LnBuZ2ApO1xuXG4gICAgICAgICAgICBzcGFuc1tpICsgMV0uYXBwZW5kKGltZyk7XG4gICAgICAgICAgICBzcGFuc1tpICsgMV0uYXBwZW5kKHApO1xuXG4gICAgICAgICAgICBpZiAoaSA8IDEpIHtcbiAgICAgICAgICAgICAgICBkaXZzWzFdLmFwcGVuZChzcGFuc1tpICsgMV0pO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChpIDwgNCkge1xuICAgICAgICAgICAgICAgIGRpdnNbMl0uYXBwZW5kKHNwYW5zW2kgKyAxXSk7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKGkgPCA3KSB7XG4gICAgICAgICAgICAgICAgZGl2c1szXS5hcHBlbmQoc3BhbnNbaSArIDFdKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGZvciAobGV0IGkgPSAxOyBpIDw9IDM7IGkrKykge1xuICAgICAgICAgICAgY29udHJvbHNEaXYuYXBwZW5kKGRpdnNbaV0pO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGNvbnRyb2xzRGl2O1xuICAgIH1cbn0iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBTaW5nbGVQbGF5ZXJDb250ZW50IHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5rZXlzID0ge1xuICAgICAgICAgICAgJ2xlZnRfa2V5JzogJ0xFRlQnLFxuICAgICAgICAgICAgJ3JpZ2h0X2tleSc6ICdSSUdIVCcsXG4gICAgICAgICAgICAnZG93bl9rZXknOiAnU09GVCBEUk9QJyxcbiAgICAgICAgICAgICd1cF9rZXknOiAnVFVSTiBSSUdIVCcsXG4gICAgICAgICAgICAnY19rZXknOiAnVFVSTiBMRUZUJyxcbiAgICAgICAgICAgICdzaGlmdF9rZXknOiAnSE9MRCcsXG4gICAgICAgICAgICAnc3BhY2Vfa2V5JzogJ0hBUkREUk9QJyxcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICBjcmVhdGVUaW1lckFuZENvbnRyb2xzKCkge1xuICAgICAgICBsZXQgdGltZXJBbmRDb250cm9scyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICB0aW1lckFuZENvbnRyb2xzLmFwcGVuZENoaWxkKHRoaXMuY3JlYXRlVGltZXIoKSk7XG4gICAgICAgIHRpbWVyQW5kQ29udHJvbHMuYXBwZW5kQ2hpbGQodGhpcy5jcmVhdGVDb250cm9sc0NvbnRlbnQoKSk7XG4gICAgICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kKHRpbWVyQW5kQ29udHJvbHMpO1xuICAgIH1cblxuICAgIGNyZWF0ZUNvbnRyb2xzQ29udGVudCgpIHtcbiAgICAgICAgbGV0IGNvbnRlbnREaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgY29udGVudERpdi5jbGFzc0xpc3QuYWRkKCdjb250cm9scycpO1xuICAgICAgICBsZXQgaW1hZ2VzID0gT2JqZWN0LmtleXModGhpcy5rZXlzKTtcbiAgICAgICAgbGV0IGRlc2NyaXB0aW9ucyA9IE9iamVjdC52YWx1ZXModGhpcy5rZXlzKTtcblxuICAgICAgICAvLyBpbml0aWFsaXplIGFycmF5cyBvZiBzcGFucyBhbmQgZGl2c1xuICAgICAgICBsZXQgc3BhbnMgPSBbXTtcbiAgICAgICAgbGV0IGRpdnMgPSBbXTtcblxuICAgICAgICAvLyBjcmVhdGUgZWxlbWVudHMgYW5kIHN0b3JlIGludG8gYXJyYXkgaW5kaWNlcyBmb3IgbGF0ZXIgcmVmZXJlbmNlXG4gICAgICAgIGZvciAobGV0IGkgPSAxOyBpIDw9IDc7IGkrKykge1xuICAgICAgICAgICAgc3BhbnNbaV0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gICAgICAgICAgICBpZiAoaSA8PSA0KSBkaXZzW2ldID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIH1cblxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGltYWdlcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgbGV0IHAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgICAgICAgICBsZXQgaW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gICAgICAgICAgICBpbWcuY2xhc3NMaXN0LmFkZCgna2V5Ym9hcmQta2V5Jyk7XG4gICAgICAgICAgICBpZiAoaSA9PT0gNSkgaW1nLmNsYXNzTGlzdC5hZGQoJ3NoaWZ0LWtleScpO1xuICAgICAgICAgICAgaWYgKGkgPT09IDYpIGltZy5jbGFzc0xpc3QuYWRkKCdzcGFjZS1rZXknKTtcblxuICAgICAgICAgICAgcC5pbm5lckhUTUwgPSBkZXNjcmlwdGlvbnNbaV07XG4gICAgICAgICAgICBpbWcuc2V0QXR0cmlidXRlKCdzcmMnLCBgLi9hc3NldHMvaW1hZ2VzLyR7aW1hZ2VzW2ldfS5wbmdgKTtcblxuICAgICAgICAgICAgc3BhbnNbaSArIDFdLmFwcGVuZChpbWcpO1xuICAgICAgICAgICAgc3BhbnNbaSArIDFdLmFwcGVuZChwKTtcblxuICAgICAgICAgICAgaWYgKGkgPCAyKSB7XG4gICAgICAgICAgICAgICAgZGl2c1sxXS5hcHBlbmQoc3BhbnNbaSArIDFdKTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoaSA8IDQpIHtcbiAgICAgICAgICAgICAgICBkaXZzWzJdLmFwcGVuZChzcGFuc1tpICsgMV0pO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChpIDwgNikge1xuICAgICAgICAgICAgICAgIGRpdnNbM10uYXBwZW5kKHNwYW5zW2kgKyAxXSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGRpdnNbNF0uYXBwZW5kKHNwYW5zW2kgKyAxXSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBmb3IgKGxldCBpID0gMTsgaSA8PSA0OyBpKyspIHtcbiAgICAgICAgICAgIGNvbnRlbnREaXYuYXBwZW5kKGRpdnNbaV0pO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICByZXR1cm4gY29udGVudERpdjtcbiAgICB9XG5cbiAgICBjcmVhdGVUaW1lcigpIHtcbiAgICAgICAgbGV0IHRpbWVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGxldCBtaW51dGVzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgICAgICBsZXQgc2Vjb25kcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICAgICAgbGV0IGNvbG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgICAgICB0aW1lci5jbGFzc0xpc3QuYWRkKCd0aW1lcicpO1xuICAgICAgICBtaW51dGVzLmNsYXNzTGlzdC5hZGQoJ21pbnV0ZXMnKTtcbiAgICAgICAgc2Vjb25kcy5jbGFzc0xpc3QuYWRkKCdzZWNvbmRzJyk7XG4gICAgICAgIGNvbG9uLmNsYXNzTGlzdC5hZGQoJ2NvbG9uJyk7XG4gICAgICAgIG1pbnV0ZXMuaW5uZXJIVE1MID0gJzAnO1xuICAgICAgICBzZWNvbmRzLmlubmVySFRNTCA9ICcwMCc7XG4gICAgICAgIGNvbG9uLmlubmVySFRNTCA9ICc6JztcbiAgICAgICAgW21pbnV0ZXMsIGNvbG9uLCBzZWNvbmRzXS5mb3JFYWNoKGVsZSA9PiB0aW1lci5hcHBlbmRDaGlsZChlbGUpKTtcbiAgICAgICAgcmV0dXJuIHRpbWVyO1xuICAgIH1cblxuICAgIFxufSIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIE11bHRpcGxheWVyIHtcbiAgICBjb25zdHJ1Y3RvcihwbGF5ZXIxLCBwbGF5ZXIyKSB7XG4gICAgICAgIHRoaXMucGxheWVyMSA9IHBsYXllcjE7XG4gICAgICAgIHRoaXMucGxheWVyMiA9IHBsYXllcjI7XG4gICAgfVxuXG4gICAgc3RhcnRNdWx0aXBsYXllcigpIHtcbiAgICAgICAgdGhpcy5wbGF5ZXIxLnNldE9wcG9uZW50KHRoaXMucGxheWVyMik7XG4gICAgICAgIHRoaXMucGxheWVyMi5zZXRPcHBvbmVudCh0aGlzLnBsYXllcjEpO1xuICAgICAgICB0aGlzLnBsYXllcjEucGxheSgpO1xuICAgICAgICB0aGlzLnBsYXllcjIucGxheSgpO1xuICAgIH1cbn1cbiIsImltcG9ydCBQaWVjZSBmcm9tICcuL3BpZWNlJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSVBpZWNlIGV4dGVuZHMgUGllY2Uge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICB0aGlzLm5hbWUgPSBcIklQaWVjZVwiO1xuICAgICAgICB0aGlzLnBvc2l0aW9uID0ge1xuICAgICAgICAgICAgdG9wOiBbXSxcbiAgICAgICAgICAgIG1pZGRsZTogW10sXG4gICAgICAgICAgICBib3R0b206IFtbMSwgM10sIFsxLCA0XSwgWzEsIDVdLCBbMSwgNl1dXG4gICAgICAgIH07XG4gICAgICAgIHRoaXMuY29sb3JDb2RlID0gMjtcbiAgICAgICAgdGhpcy50dXJuaW5nUG9pbnQgPSBbMSwgNF07XG4gICAgICAgIHRoaXMuZGlzcGxheVNxdWFyZXMgPSBbWzAsIDJdLCBbMSwgMl0sIFsyLCAyXSwgWzMsIDJdXTtcblxuICAgICAgICB0aGlzLnJlbW92ZVNxdWFyZXMgPSBbXTtcblxuICAgICAgICB0aGlzLm9mZnNldEd1aWRlID0ge1xuICAgICAgICAgICAgMDogW1swLCAwXSwgWzAsIC0xXSwgWzAsIDJdLCBbMCwgLTFdLCBbMCwgMl1dLFxuICAgICAgICAgICAgMTogW1swLCAtMV0sIFswLCAwXSwgWzAsIDBdLCBbMSwgMF0sIFstMiwgMF1dLFxuICAgICAgICAgICAgMjogW1sxLCAtMV0sIFsxLCAxXSwgWzEsIC0yXSwgWzAsIDFdLCBbMCwgLTJdXSxcbiAgICAgICAgICAgIDM6IFtbMSwgMF0sIFsxLCAwXSwgWzEsIDBdLCBbLTEsIDBdLCBbMiwgMF1dXG4gICAgICAgIH1cbiAgICB9XG5cblxufVxuXG5cbiIsImltcG9ydCBQaWVjZSBmcm9tICcuL3BpZWNlJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgalBpZWNlIGV4dGVuZHMgUGllY2Uge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICB0aGlzLm5hbWUgPSBcIkpQaWVjZVwiO1xuICAgICAgICB0aGlzLnBvc2l0aW9uID0ge1xuICAgICAgICAgICAgdG9wOiBbWzAsIDNdXSxcbiAgICAgICAgICAgIG1pZGRsZTogW10sXG4gICAgICAgICAgICBib3R0b206IFtbMSwgM10sIFsxLCA0XSwgWzEsIDVdXVxuICAgICAgICB9O1xuICAgICAgICB0aGlzLmNvbG9yQ29kZSA9IDc7XG5cbiAgICAgICAgdGhpcy50dXJuaW5nUG9pbnQgPSBbMSwgNF07XG5cbiAgICAgICAgdGhpcy5kaXNwbGF5U3F1YXJlcyA9IFtbMSwgMV0sIFsxLCAyXSwgWzIsIDJdLCBbMywgMl1dO1xuIFxuICAgICAgICB0aGlzLnJlbW92ZVNxdWFyZXMgPSBbXTtcbiAgICB9XG59IiwiaW1wb3J0IFBpZWNlIGZyb20gJy4vcGllY2UnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBsUGllY2UgZXh0ZW5kcyBQaWVjZSB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIHRoaXMubmFtZSA9IFwiTFBpZWNlXCI7XG4gICAgICAgIHRoaXMucG9zaXRpb24gPSB7XG4gICAgICAgICAgICB0b3A6IFtbMCwgNV1dLFxuICAgICAgICAgICAgbWlkZGxlOiBbXSxcbiAgICAgICAgICAgIGJvdHRvbTogW1sxLCAzXSwgWzEsIDRdLCBbMSwgNV1dXG4gICAgICAgIH07XG4gICAgICAgIHRoaXMuY29sb3JDb2RlID0gNjtcblxuICAgICAgICB0aGlzLnR1cm5pbmdQb2ludCA9IFsxLCA0XTtcblxuICAgICAgICB0aGlzLmRpc3BsYXlTcXVhcmVzID0gW1sxLCAyXSwgWzIsIDJdLCBbMywgMl0sIFszLCAxXV07XG5cbiAgICAgICAgdGhpcy5yZW1vdmVTcXVhcmVzID0gW107XG4gICAgfVxufSIsImltcG9ydCBQaWVjZSBmcm9tICcuL3BpZWNlJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgT1BpZWNlIGV4dGVuZHMgUGllY2Uge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICB0aGlzLm5hbWUgPSBcIk9QaWVjZVwiO1xuICAgICAgICB0aGlzLnBvc2l0aW9uID0ge1xuICAgICAgICAgICAgdG9wOiBbWzAsIDRdLCBbMCwgNV1dLFxuICAgICAgICAgICAgbWlkZGxlOiBbXSxcbiAgICAgICAgICAgIGJvdHRvbTogW1sxLCA0XSxbMSwgNV1dXG4gICAgICAgIH07XG4gICAgICAgIHRoaXMuY29sb3JDb2RlID0gMTtcbiAgICAgICAgdGhpcy50dXJuaW5nUG9pbnQgPSBbMSwgNF07XG4gICAgICAgIHRoaXMuZGlzcGxheVNxdWFyZXMgPSBbWzEsIDFdLCBbMiwgMV0sIFsxLCAyXSwgWzIsIDJdXTtcblxuICAgICAgICB0aGlzLnJlbW92ZVNxdWFyZXMgPSBbXTtcbiAgICB9XG5cbiAgICAvLyBPUGllY2UgZG9lcyBub3QgdHVyblxuICAgIHR1cm5SaWdodCgpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBcbiAgICB0dXJuTGVmdCgpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbn0gIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgUGllY2Uge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLmxlZnRNb3N0ID0gJyc7XG4gICAgICAgIHRoaXMucmlnaHRNb3N0ID0gJyc7XG4gICAgICAgIHRoaXMuYm90dG9tTW9zdCA9ICcnO1xuICAgICAgICB0aGlzLnRvcE1vc3QgPSAnJztcblxuICAgICAgICB0aGlzLnJvdGF0aW9uU3RhdGUgPSAwO1xuXG4gICAgICAgIHRoaXMub2Zmc2V0R3VpZGUgPSB7XG4gICAgICAgICAgICAwOiBbWzAsIDBdLCBbMCwgMF0sIFswLCAwXSwgWzAsIDBdLCBbMCwgMF1dLFxuICAgICAgICAgICAgMTogW1swLCAwXSwgWzAsIDFdLCBbLTEsIDFdLCBbMiwgMF0sIFsyLCAxXV0sXG4gICAgICAgICAgICAyOiBbWzAsIDBdLCBbMCwgMF0sIFswLCAwXSwgWzAsIDBdLCBbMCwgMF1dLFxuICAgICAgICAgICAgMzogW1swLCAwXSwgWzAsIC0xXSwgWy0xLCAtMV0sIFsyLCAwXSwgWzIsIC0xXV1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIHNldE91dGVyU3F1YXJlcygpIHtcbiAgICAgICAgbGV0IGxlZnRNb3N0LCByaWdodE1vc3QsIHRvcE1vc3QsIGJvdHRvbU1vc3Q7XG4gICAgICAgIE9iamVjdC52YWx1ZXModGhpcy5wb3NpdGlvbikuZm9yRWFjaChjb29yZGluYXRlc0FycmF5ID0+IGNvb3JkaW5hdGVzQXJyYXkuZm9yRWFjaChhcnJheSA9PiB7XG4gICAgICAgICAgICBsZXQgY29sdW1uVmFsdWUgPSBhcnJheVsxXTtcbiAgICAgICAgICAgIGxldCByb3dWYWx1ZSA9IGFycmF5WzBdO1xuICAgICAgICAgICAgaWYgKCFsZWZ0TW9zdCB8fCBjb2x1bW5WYWx1ZSA8IGxlZnRNb3N0WzFdKSBsZWZ0TW9zdCA9IFtyb3dWYWx1ZSwgY29sdW1uVmFsdWVdO1xuICAgICAgICAgICAgaWYgKCFyaWdodE1vc3QgfHwgY29sdW1uVmFsdWUgPiByaWdodE1vc3RbMV0pIHJpZ2h0TW9zdCA9IFtyb3dWYWx1ZSwgY29sdW1uVmFsdWVdO1xuICAgICAgICAgICAgaWYgKCFib3R0b21Nb3N0IHx8IHJvd1ZhbHVlID4gYm90dG9tTW9zdFswXSkgYm90dG9tTW9zdCA9IFtyb3dWYWx1ZSwgY29sdW1uVmFsdWVdO1xuICAgICAgICAgICAgaWYgKCF0b3BNb3N0IHx8IHJvd1ZhbHVlIDwgdG9wTW9zdFswXSkgdG9wTW9zdCA9IFtyb3dWYWx1ZSwgY29sdW1uVmFsdWVdO1xuICAgICAgICB9KSk7XG4gICAgICAgIHRoaXMubGVmdE1vc3QgPSBsZWZ0TW9zdDtcbiAgICAgICAgdGhpcy5yaWdodE1vc3QgPSByaWdodE1vc3Q7XG4gICAgICAgIHRoaXMudG9wTW9zdCA9IHRvcE1vc3Q7XG4gICAgICAgIHRoaXMuYm90dG9tTW9zdCA9IGJvdHRvbU1vc3Q7XG4gICAgfVxuXG4gICAgcG9wdWxhdGVGaWVsZChmaWVsZCkge1xuICAgICAgICBsZXQgY29vcmRpbmF0ZUFycmF5cyA9IE9iamVjdC52YWx1ZXModGhpcy5wb3NpdGlvbik7XG5cbiAgICAgICAgY29vcmRpbmF0ZUFycmF5cy5mb3JFYWNoKGFycmF5ID0+IHtcbiAgICAgICAgICAgIGFycmF5LmZvckVhY2goY29vcmRpbmF0ZSA9PiB7XG4gICAgICAgICAgICAgICAgbGV0IFtyb3csIGNvbF0gPSBbY29vcmRpbmF0ZVswXSwgY29vcmRpbmF0ZVsxXV07XG4gICAgICAgICAgICAgICAgaWYgKChjb2wgPj0gMCAmJiBjb2wgPD0gMTkpICYmIChyb3cgPj0gMCAmJiByb3cgPD0gMTkpKSBmaWVsZFtyb3ddW2NvbF0gPSB0aGlzLmNvbG9yQ29kZTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH0pO1xuXG4gICAgICAgIHRoaXMucmVtb3ZlU3F1YXJlcy5mb3JFYWNoKHBvc2l0aW9uQXJyYXkgPT4ge1xuICAgICAgICAgICAgbGV0IFtyb3csIGNvbF0gPSBbcG9zaXRpb25BcnJheVswXSwgcG9zaXRpb25BcnJheVsxXV07XG4gICAgICAgICAgICBpZiAoKGNvbCA+PSAwICYmIGNvbCA8PSAxOSkgJiYgKHJvdyA+PSAwICYmIHJvdyA8PSAxOSkpIGZpZWxkW3Jvd11bY29sXSA9IDA7XG4gICAgICAgIH0pO1xuXG4gICAgfVxuXG4gICAgLy8gY29tcGFyZXMgdHdvIGFycmF5cyBvZiBjb29yZGluYXRlcyBhbmQgY2hlY2sgaWYgdGhleSBoYXZlIHRoZSBzYW1lIGNvbnRlbnQgaW4gdGhlIHNhbWUgb3JkZXJcbiAgICBfc3F1YXJlc0FyZUVxdWFsKG9sZFNxdWFyZSwgbmV3U3F1YXJlKSB7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgb2xkU3F1YXJlLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBpZiAob2xkU3F1YXJlW2ldICE9PSBuZXdTcXVhcmVbaV0pIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG5cbiAgICBfaW5jbHVkZXMoc3F1YXJlLCBjb29yZGluYXRlQXJyYXlzKSB7XG4gICAgICAgIGxldCByZXN1bHQgPSBmYWxzZTtcbiAgICAgICAgY29vcmRpbmF0ZUFycmF5cy5mb3JFYWNoKGFycmF5ID0+IHtcbiAgICAgICAgICAgIGlmICh0aGlzLl9zcXVhcmVzQXJlRXF1YWwoc3F1YXJlLCBhcnJheSkpIHtcbiAgICAgICAgICAgICAgICByZXN1bHQgPSB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG5cbiAgICBkcm9wKCkge1xuICAgICAgICBsZXQgb2xkUG9zaXRpb24gPSB7XG4gICAgICAgICAgICB0b3A6IHRoaXMucG9zaXRpb24udG9wLm1hcChhcnJheSA9PiBhcnJheS5zbGljZSgpKSxcbiAgICAgICAgICAgIG1pZGRsZTogdGhpcy5wb3NpdGlvbi5taWRkbGUubWFwKGFycmF5ID0+IGFycmF5LnNsaWNlKCkpLFxuICAgICAgICAgICAgYm90dG9tOiB0aGlzLnBvc2l0aW9uLmJvdHRvbS5tYXAoYXJyYXkgPT4gYXJyYXkuc2xpY2UoKSksXG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLnBvc2l0aW9uLnRvcCA9IHRoaXMucG9zaXRpb24udG9wLm1hcChhcnJheSA9PiBbYXJyYXlbMF0gKyAxLCBhcnJheVsxXV0pO1xuICAgICAgICB0aGlzLnBvc2l0aW9uLm1pZGRsZSA9IHRoaXMucG9zaXRpb24ubWlkZGxlLm1hcChhcnJheSA9PiBbYXJyYXlbMF0gKyAxLCBhcnJheVsxXV0pO1xuICAgICAgICB0aGlzLnBvc2l0aW9uLmJvdHRvbSA9IHRoaXMucG9zaXRpb24uYm90dG9tLm1hcChhcnJheSA9PiBbYXJyYXlbMF0gKyAxLCBhcnJheVsxXV0pO1xuICAgICAgICB0aGlzLnR1cm5pbmdQb2ludCA9IFt0aGlzLnR1cm5pbmdQb2ludFswXSArIDEsIHRoaXMudHVybmluZ1BvaW50WzFdXTtcblxuICAgICAgICB0aGlzLnNldFJlbW92ZVNxdWFyZXMob2xkUG9zaXRpb24pO1xuICAgIH1cblxuICAgIC8vIGZpbmQgaGlnaGVzdCBwb3NzaWJsZSBncm91bmQtcG9zaXRpb24gZm9yIHBpZWNlXG4gICAgaGFyZERyb3AoZmllbGQpIHtcbiAgICAgICAgdGhpcy5jbGVhclNlbGZGcm9tQm9hcmQoZmllbGQpO1xuICAgICAgICBsZXQgc3RvcHBlZCA9IGZhbHNlO1xuICAgICAgICB3aGlsZSAoIXN0b3BwZWQpIHtcbiAgICAgICAgICAgIGxldCBoYW5naW5nU3F1YXJlcyA9IHRoaXMuaGFuZ2luZ1NxdWFyZXModGhpcy5wb3NpdGlvbik7XG4gICAgICAgICAgICBoYW5naW5nU3F1YXJlcy5mb3JFYWNoKGNvb3JkaW5hdGUgPT4ge1xuICAgICAgICAgICAgICAgIGxldCBbcm93LCBjb2xdID0gW2Nvb3JkaW5hdGVbMF0sIGNvb3JkaW5hdGVbMV1dO1xuICAgICAgICAgICAgICAgIGlmICgocm93ICsgMSA9PT0gMjAgfHwgZmllbGRbcm93ICsgMV1bY29sXSkpIHN0b3BwZWQgPSB0cnVlO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBpZiAoc3RvcHBlZCkgYnJlYWs7XG4gICAgICAgICAgICB0aGlzLnBvc2l0aW9uLnRvcCA9IHRoaXMucG9zaXRpb24udG9wLm1hcChhcnJheSA9PiBbYXJyYXlbMF0gKyAxLCBhcnJheVsxXV0pO1xuICAgICAgICAgICAgdGhpcy5wb3NpdGlvbi5taWRkbGUgPSB0aGlzLnBvc2l0aW9uLm1pZGRsZS5tYXAoYXJyYXkgPT4gW2FycmF5WzBdICsgMSwgYXJyYXlbMV1dKTtcbiAgICAgICAgICAgIHRoaXMucG9zaXRpb24uYm90dG9tID0gdGhpcy5wb3NpdGlvbi5ib3R0b20ubWFwKGFycmF5ID0+IFthcnJheVswXSArIDEsIGFycmF5WzFdXSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjbGVhclNlbGZGcm9tQm9hcmQoZmllbGQpIHtcbiAgICAgICAgT2JqZWN0LnZhbHVlcyh0aGlzLnBvc2l0aW9uKS5mb3JFYWNoKGNvb3JkaW5hdGVBcnJheXMgPT4gY29vcmRpbmF0ZUFycmF5cy5mb3JFYWNoKGNvb3JkaW5hdGUgPT4ge1xuICAgICAgICAgICAgbGV0IHJvdyA9IGNvb3JkaW5hdGVbMF07XG4gICAgICAgICAgICBsZXQgY29sID0gY29vcmRpbmF0ZVsxXTtcbiAgICAgICAgICAgIGlmIChyb3cgPCAyMCAmJiByb3cgPj0gMCAmJiBjb2wgPj0gMCAmJiBjb2wgPCAxMCkgZmllbGRbcm93XVtjb2xdID0gMDtcbiAgICAgICAgfSkpO1xuICAgIH1cblxuICAgIG1vdmUoZGlyZWN0aW9uLCBmaWVsZCkge1xuICAgICAgICBsZXQgdFNwaW4gPSBmYWxzZTtcbiAgICAgICAgbGV0IG9sZFBvc2l0aW9uID0ge1xuICAgICAgICAgICAgdG9wOiB0aGlzLnBvc2l0aW9uLnRvcC5tYXAoYXJyYXkgPT4gYXJyYXkuc2xpY2UoKSksXG4gICAgICAgICAgICBtaWRkbGU6IHRoaXMucG9zaXRpb24ubWlkZGxlLm1hcChhcnJheSA9PiBhcnJheS5zbGljZSgpKSxcbiAgICAgICAgICAgIGJvdHRvbTogdGhpcy5wb3NpdGlvbi5ib3R0b20ubWFwKGFycmF5ID0+IGFycmF5LnNsaWNlKCkpLFxuICAgICAgICB9XG4gICAgICAgIHRoaXMub2xkVHVybmluZ1BvaW50ID0gdGhpcy50dXJuaW5nUG9pbnQuc2xpY2UoKTtcbiAgICAgICAgc3dpdGNoIChkaXJlY3Rpb24pIHtcbiAgICAgICAgICAgIGNhc2UgXCJsZWZ0XCI6XG4gICAgICAgICAgICAgICAgdGhpcy5wb3NpdGlvbi50b3AgPSB0aGlzLnBvc2l0aW9uLnRvcC5tYXAoYXJyYXkgPT4gW2FycmF5WzBdLCBhcnJheVsxXSAtIDFdKTtcbiAgICAgICAgICAgICAgICB0aGlzLnBvc2l0aW9uLm1pZGRsZSA9IHRoaXMucG9zaXRpb24ubWlkZGxlLm1hcChhcnJheSA9PiBbYXJyYXlbMF0sIGFycmF5WzFdIC0gMV0pO1xuICAgICAgICAgICAgICAgIHRoaXMucG9zaXRpb24uYm90dG9tID0gdGhpcy5wb3NpdGlvbi5ib3R0b20ubWFwKGFycmF5ID0+IFthcnJheVswXSwgYXJyYXlbMV0gLSAxXSk7XG4gICAgICAgICAgICAgICAgdGhpcy50dXJuaW5nUG9pbnQgPSBbdGhpcy50dXJuaW5nUG9pbnRbMF0sIHRoaXMudHVybmluZ1BvaW50WzFdIC0gMV07XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIFwidHVyblJpZ2h0XCI6XG4gICAgICAgICAgICAgICAgLy8gZGVmZXIgdG8gXCJ0dXJuXCIgbWV0aG9kXG4gICAgICAgICAgICAgICAgLy8gdFNwaW4gd2lsbCBlaXRoZXIgYmUgdHJ1dGh5IG9yIGZhbHN5LCB0cmFja2VkIGZvciBzZW5kaW5nIG1vcmUgbGluZXMgZHVyaW5nIG11bHRpcGxheWVyXG4gICAgICAgICAgICAgICAgdFNwaW4gPSB0aGlzLnR1cm5SaWdodChmaWVsZCwgb2xkUG9zaXRpb24pO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBcInJpZ2h0XCI6XG4gICAgICAgICAgICAgICAgdGhpcy5wb3NpdGlvbi50b3AgPSB0aGlzLnBvc2l0aW9uLnRvcC5tYXAoYXJyYXkgPT4gW2FycmF5WzBdLCBhcnJheVsxXSArIDFdKTtcbiAgICAgICAgICAgICAgICB0aGlzLnBvc2l0aW9uLm1pZGRsZSA9IHRoaXMucG9zaXRpb24ubWlkZGxlLm1hcChhcnJheSA9PiBbYXJyYXlbMF0sIGFycmF5WzFdICsgMV0pO1xuICAgICAgICAgICAgICAgIHRoaXMucG9zaXRpb24uYm90dG9tID0gdGhpcy5wb3NpdGlvbi5ib3R0b20ubWFwKGFycmF5ID0+IFthcnJheVswXSwgYXJyYXlbMV0gKyAxXSk7XG4gICAgICAgICAgICAgICAgdGhpcy50dXJuaW5nUG9pbnQgPSBbdGhpcy50dXJuaW5nUG9pbnRbMF0sIHRoaXMudHVybmluZ1BvaW50WzFdICsgMV07XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIFwiZG93blwiOlxuICAgICAgICAgICAgICAgIHRoaXMucG9zaXRpb24udG9wID0gdGhpcy5wb3NpdGlvbi50b3AubWFwKGFycmF5ID0+IFthcnJheVswXSArIDEsIGFycmF5WzFdXSk7XG4gICAgICAgICAgICAgICAgdGhpcy5wb3NpdGlvbi5taWRkbGUgPSB0aGlzLnBvc2l0aW9uLm1pZGRsZS5tYXAoYXJyYXkgPT4gW2FycmF5WzBdICsgMSwgYXJyYXlbMV1dKTtcbiAgICAgICAgICAgICAgICB0aGlzLnBvc2l0aW9uLmJvdHRvbSA9IHRoaXMucG9zaXRpb24uYm90dG9tLm1hcChhcnJheSA9PiBbYXJyYXlbMF0gKyAxLCBhcnJheVsxXV0pO1xuICAgICAgICAgICAgICAgIHRoaXMudHVybmluZ1BvaW50ID0gW3RoaXMudHVybmluZ1BvaW50WzBdICsgMSwgdGhpcy50dXJuaW5nUG9pbnRbMV1dO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBcInVwXCI6XG4gICAgICAgICAgICAgICAgdGhpcy5wb3NpdGlvbi50b3AgPSB0aGlzLnBvc2l0aW9uLnRvcC5tYXAoYXJyYXkgPT4gW2FycmF5WzBdIC0gMSwgYXJyYXlbMV1dKTtcbiAgICAgICAgICAgICAgICB0aGlzLnBvc2l0aW9uLm1pZGRsZSA9IHRoaXMucG9zaXRpb24ubWlkZGxlLm1hcChhcnJheSA9PiBbYXJyYXlbMF0gLSAxLCBhcnJheVsxXV0pO1xuICAgICAgICAgICAgICAgIHRoaXMucG9zaXRpb24uYm90dG9tID0gdGhpcy5wb3NpdGlvbi5ib3R0b20ubWFwKGFycmF5ID0+IFthcnJheVswXSAtIDEsIGFycmF5WzFdXSk7XG4gICAgICAgICAgICAgICAgdGhpcy50dXJuaW5nUG9pbnQgPSBbdGhpcy50dXJuaW5nUG9pbnRbMF0gLSAxLCB0aGlzLnR1cm5pbmdQb2ludFsxXV07XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIFwidHVybkxlZnRcIjpcbiAgICAgICAgICAgICAgICB0aGlzLnR1cm5MZWZ0KGZpZWxkLCBvbGRQb3NpdGlvbik7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5zZXRPdXRlclNxdWFyZXMoKTtcbiAgICAgICAgdGhpcy5zZXRSZW1vdmVTcXVhcmVzKG9sZFBvc2l0aW9uLCBmaWVsZCk7XG4gICAgICAgIHJldHVybiB0U3BpbjtcbiAgICB9XG5cbiAgICB0dXJuUmlnaHQoZmllbGQsIG9sZFBvc2l0aW9uKSB7XG4gICAgICAgIC8vIGNsZWFyIGZyb20gZmllbGQgZmlyc3Qgc28gdGhhdCB0aGUgcGllY2UgZG9lc24ndCBzZWUgaXRzZWxmIGFzIGEgY29uZmxpY3RpbmcgcGllY2VcbiAgICAgICAgdGhpcy5jbGVhclNlbGZGcm9tQm9hcmQoZmllbGQpO1xuICAgICAgICBsZXQgc3F1YXJlcyA9IFtdO1xuICAgICAgICBPYmplY3QudmFsdWVzKHRoaXMucG9zaXRpb24pLmZvckVhY2goY29vcmRpbmF0ZXNBcnJheSA9PiBzcXVhcmVzLnB1c2goLi4uY29vcmRpbmF0ZXNBcnJheSkpO1xuICAgICAgICB0aGlzLnBvc2l0aW9uLnRvcCA9IFtdO1xuICAgICAgICB0aGlzLnBvc2l0aW9uLm1pZGRsZSA9IFtdO1xuICAgICAgICB0aGlzLnBvc2l0aW9uLmJvdHRvbSA9IFtdO1xuICAgICAgICBzcXVhcmVzLmZvckVhY2goc3F1YXJlID0+IHtcbiAgICAgICAgICAgIGxldCBjb2x1bW4gPSBzcXVhcmVbMV07XG4gICAgICAgICAgICBsZXQgaGVpZ2h0RGlmZmVyZW5jZSA9IHRoaXMudHVybmluZ1BvaW50WzBdIC0gc3F1YXJlWzBdO1xuICAgICAgICAgICAgbGV0IHdpZHRoRGlmZmVyZW5jZSA9IHRoaXMudHVybmluZ1BvaW50WzFdIC0gc3F1YXJlWzFdO1xuICAgICAgICAgICAgbGV0IG5ld0NvbCA9IHRoaXMudHVybmluZ1BvaW50WzFdICsgaGVpZ2h0RGlmZmVyZW5jZTtcbiAgICAgICAgICAgIGxldCBuZXdSb3cgPSB0aGlzLnR1cm5pbmdQb2ludFswXSArICh3aWR0aERpZmZlcmVuY2UgKiAtMSk7XG4gICAgICAgICAgICBzd2l0Y2ggKGNvbHVtbikge1xuICAgICAgICAgICAgICAgIGNhc2UgY29sdW1uID0gdGhpcy5yaWdodE1vc3RbMV06XG4gICAgICAgICAgICAgICAgICAgIHRoaXMucG9zaXRpb24uYm90dG9tLnB1c2goW25ld1JvdywgbmV3Q29sXSk7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgY29sdW1uID0gdGhpcy5sZWZ0TW9zdFsxXTpcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wb3NpdGlvbi50b3AucHVzaChbbmV3Um93LCBuZXdDb2xdKTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wb3NpdGlvbi5taWRkbGUucHVzaChbbmV3Um93LCBuZXdDb2xdKTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLnNldFJlbW92ZVNxdWFyZXMob2xkUG9zaXRpb24pO1xuXG4gICAgICAgIC8vIGZpbmQgb3V0ZXItbW9zdCBzcXVhcmVzIHRvIHNlZSBpZiBwaWVjZSBpcyBvYnN0cnVjdGVkXG4gICAgICAgIC8vIGlmIHNvLCBwdXNoIHBpZWNlIGJhY2sgaW50byBmaWVsZFxuICAgICAgICB0aGlzLnNldE91dGVyU3F1YXJlcygpO1xuXG4gICAgICAgIC8vIHJlc2V0IHJvdGF0aW9uIHN0YXRlLCB3aGljaCBpcyB0cmFja2VkIGZvciBpbXBsZW1lbnRpbmcgc3VwZXIgcm90YXRpb24gc3lzdGVtXG4gICAgICAgIHRoaXMucm90YXRpb25TdGF0ZSA9IHRoaXMucm90YXRpb25TdGF0ZSA9PT0gMyA/IDAgOiB0aGlzLnJvdGF0aW9uU3RhdGUgKyAxO1xuXG4gICAgICAgIGxldCBuZXdTcXVhcmVzID0gWy4uLnRoaXMucG9zaXRpb24udG9wLCAuLi50aGlzLnBvc2l0aW9uLm1pZGRsZSwgLi4udGhpcy5wb3NpdGlvbi5ib3R0b21dO1xuICAgICAgICBmb3IgKGxldCBpIGluIG5ld1NxdWFyZXMpIHtcbiAgICAgICAgICAgIGxldCBbcm93LCBjb2xdID0gW25ld1NxdWFyZXNbaV1bMF0sIG5ld1NxdWFyZXNbaV1bMV1dO1xuICAgICAgICAgICAgaWYgKGZpZWxkW3Jvd10gPT09IHVuZGVmaW5lZCB8fCBmaWVsZFtyb3ddW2NvbF0gPT09IHVuZGVmaW5lZCB8fCBmaWVsZFtyb3ddW2NvbF0pIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy53YWxsS2ljayhmaWVsZCwgXCJ0dXJuUmlnaHRcIiwgb2xkUG9zaXRpb24pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgdHVybkxlZnQoZmllbGQsIG9sZFBvc2l0aW9uKSB7XG4gICAgICAgIHRoaXMuY2xlYXJTZWxmRnJvbUJvYXJkKGZpZWxkKTtcbiAgICAgICAgbGV0IHNxdWFyZXMgPSBbXTtcbiAgICAgICAgT2JqZWN0LnZhbHVlcyh0aGlzLnBvc2l0aW9uKS5mb3JFYWNoKGNvb3JkaW5hdGVzQXJyYXkgPT4gc3F1YXJlcy5wdXNoKC4uLmNvb3JkaW5hdGVzQXJyYXkpKTtcbiAgICAgICAgdGhpcy5wb3NpdGlvbi50b3AgPSBbXTtcbiAgICAgICAgdGhpcy5wb3NpdGlvbi5taWRkbGUgPSBbXTtcbiAgICAgICAgdGhpcy5wb3NpdGlvbi5ib3R0b20gPSBbXTtcbiAgICAgICAgc3F1YXJlcy5mb3JFYWNoKHNxdWFyZSA9PiB7XG4gICAgICAgICAgICBsZXQgY29sdW1uID0gc3F1YXJlWzFdO1xuICAgICAgICAgICAgbGV0IGhlaWdodERpZmZlcmVuY2UgPSB0aGlzLnR1cm5pbmdQb2ludFswXSAtIHNxdWFyZVswXTtcbiAgICAgICAgICAgIGxldCB3aWR0aERpZmZlcmVuY2UgPSB0aGlzLnR1cm5pbmdQb2ludFsxXSAtIHNxdWFyZVsxXTtcbiAgICAgICAgICAgIGxldCBuZXdDb2wgPSB0aGlzLnR1cm5pbmdQb2ludFsxXSAtIGhlaWdodERpZmZlcmVuY2U7XG4gICAgICAgICAgICBsZXQgbmV3Um93ID0gdGhpcy50dXJuaW5nUG9pbnRbMF0gLSAod2lkdGhEaWZmZXJlbmNlICogLTEpO1xuICAgICAgICAgICAgc3dpdGNoIChjb2x1bW4pIHtcbiAgICAgICAgICAgICAgICBjYXNlIGNvbHVtbiA9IHRoaXMucmlnaHRNb3N0WzFdOlxuICAgICAgICAgICAgICAgICAgICB0aGlzLnBvc2l0aW9uLnRvcC5wdXNoKFtuZXdSb3csIG5ld0NvbF0pO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlIGNvbHVtbiA9IHRoaXMubGVmdE1vc3RbMV06XG4gICAgICAgICAgICAgICAgICAgIHRoaXMucG9zaXRpb24uYm90dG9tLnB1c2goW25ld1JvdywgbmV3Q29sXSk7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgICAgIHRoaXMucG9zaXRpb24ubWlkZGxlLnB1c2goW25ld1JvdywgbmV3Q29sXSk7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KVxuICAgICAgICB0aGlzLnNldFJlbW92ZVNxdWFyZXMob2xkUG9zaXRpb24pO1xuXG4gICAgICAgIC8vIGZpbmQgbGVmdCBhbmQgcmlnaHQgbW9zdCBzcXVhcmVzIHRvIHNlZSBpZiBwaWVjZSB0aHJvdWdoIHdhbGxcbiAgICAgICAgLy8gaWYgdGhyb3VnaCB3YWxsLCBwdXNoIHBpZWNlIGJhY2sgaW50byBmaWVsZFxuICAgICAgICB0aGlzLnNldE91dGVyU3F1YXJlcygpO1xuXG4gICAgICAgIC8vIHJlc2V0IHJvdGF0aW9uIHN0YXRlLCB3aGljaCBpcyB0cmFja2VkIGZvciBpbXBsZW1lbnRpbmcgc3VwZXIgcm90YXRpb24gc3lzdGVtXG4gICAgICAgIHRoaXMucm90YXRpb25TdGF0ZSA9IHRoaXMucm90YXRpb25TdGF0ZSA9PT0gMCA/IDMgOiB0aGlzLnJvdGF0aW9uU3RhdGUgLSAxO1xuXG4gICAgICAgIGxldCBuZXdTcXVhcmVzID0gWy4uLnRoaXMucG9zaXRpb24udG9wLCAuLi50aGlzLnBvc2l0aW9uLm1pZGRsZSwgLi4udGhpcy5wb3NpdGlvbi5ib3R0b21dO1xuICAgICAgICBmb3IgKGxldCBpIGluIG5ld1NxdWFyZXMpIHtcbiAgICAgICAgICAgIGxldCBbcm93LCBjb2xdID0gW25ld1NxdWFyZXNbaV1bMF0sIG5ld1NxdWFyZXNbaV1bMV1dO1xuICAgICAgICAgICAgaWYgKGZpZWxkW3Jvd10gPT09IHVuZGVmaW5lZCB8fCBmaWVsZFtyb3ddW2NvbF0gPT09IHVuZGVmaW5lZCB8fCBmaWVsZFtyb3ddW2NvbF0pIHtcbiAgICAgICAgICAgICAgICB0aGlzLndhbGxLaWNrKGZpZWxkLCBcInR1cm5MZWZ0XCIsIG9sZFBvc2l0aW9uKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgfVxuXG4gICAgLy8gY29tcGFyZSBvbGQgcG9zaXRpb24gb2YgcGllY2Ugd2l0aCBuZXcgcG9zaXRpb24gXG4gICAgc2V0UmVtb3ZlU3F1YXJlcyhvbGRQb3NpdGlvbiwgZmllbGQpIHtcbiAgICAgICAgbGV0IG9sZFNxdWFyZXMgPSBbXTtcbiAgICAgICAgbGV0IG5ld1NxdWFyZXMgPSBbXTtcbiAgICAgICAgT2JqZWN0LnZhbHVlcyhvbGRQb3NpdGlvbikuZm9yRWFjaChjb29yZGluYXRlc0FycmF5ID0+IG9sZFNxdWFyZXMucHVzaCguLi5jb29yZGluYXRlc0FycmF5KSk7XG4gICAgICAgIE9iamVjdC52YWx1ZXModGhpcy5wb3NpdGlvbikuZm9yRWFjaChjb29yZGluYXRlc0FycmF5ID0+IG5ld1NxdWFyZXMucHVzaCguLi5jb29yZGluYXRlc0FycmF5KSk7XG4gICAgICAgIC8vIGtlZXAgdHJhY2sgb2Ygc3F1YXJlcyB0aGF0IHRoZSBwb3NpdGlvbnMgZG8gbm90IGhhdmUgaW4gY29tbW9uIChzcXVhcmVzIHRvIHJlbW92ZSBjb2xvciBmcm9tKVxuICAgICAgICB0aGlzLnJlbW92ZVNxdWFyZXMgPSBvbGRTcXVhcmVzLmZpbHRlcihvbGRTcXVhcmUgPT4ge1xuICAgICAgICAgICAgaWYgKCFmaWVsZCkge1xuICAgICAgICAgICAgICAgIGlmICghdGhpcy5faW5jbHVkZXMob2xkU3F1YXJlLCBuZXdTcXVhcmVzKSkgcmV0dXJuIG9sZFNxdWFyZTtcbiAgICAgICAgICAgIC8vIGlmIGZpZWxkIGFyZ3VtZW50IGlzIHBhc3NlZCwgY2hlY2sgdGhlIGZpZWxkIHRvIG1ha2Ugc3VyZSB0byBub3QgY2xlYXIgc3F1YXJlcyBvZiBvdGhlciBwaWVjZXNcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgaWYgKCF0aGlzLl9pbmNsdWRlcyhvbGRTcXVhcmUsIG5ld1NxdWFyZXMpICYmICFmaWVsZFtvbGRTcXVhcmVbMF1dW29sZFNxdWFyZVsxXV0pIHJldHVybiBvbGRTcXVhcmU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgaGFuZ2luZ1NxdWFyZXMocG9zaXRpb24pIHtcbiAgICAgICAgbGV0IHNxdWFyZXMgPSBbXTtcbiAgICAgICAgbGV0IGhhbmdpbmdTcXVhcmVzID0gW107XG4gICAgICAgIE9iamVjdC52YWx1ZXMocG9zaXRpb24pLmZvckVhY2goY29vcmRpbmF0ZUFycmF5ID0+IHNxdWFyZXMucHVzaCguLi5jb29yZGluYXRlQXJyYXkpKVxuICAgICAgICBzcXVhcmVzLmZvckVhY2goc3F1YXJlID0+IHtcbiAgICAgICAgICAgIGxldCBiZWxvd1NxdWFyZSA9IFtzcXVhcmVbMF0gKyAxLCBzcXVhcmVbMV1dO1xuICAgICAgICAgICAgaWYgKCF0aGlzLl9pbmNsdWRlcyhiZWxvd1NxdWFyZSwgc3F1YXJlcykpIGhhbmdpbmdTcXVhcmVzLnB1c2goc3F1YXJlKTtcbiAgICAgICAgfSlcbiAgICAgICAgcmV0dXJuIGhhbmdpbmdTcXVhcmVzO1xuICAgIH1cblxuICAgIHNpZGVTcXVhcmVzKCkge1xuICAgICAgICBsZXQgc3F1YXJlcyA9IFtdO1xuICAgICAgICBsZXQgc2lkZVNxdWFyZXMgPSB7XG4gICAgICAgICAgICBsZWZ0OiBbXSxcbiAgICAgICAgICAgIHJpZ2h0OiBbXVxuICAgICAgICB9O1xuICAgICAgICBPYmplY3QudmFsdWVzKHRoaXMucG9zaXRpb24pLmZvckVhY2goY29vcmRpbmF0ZUFycmF5ID0+IHNxdWFyZXMucHVzaCguLi5jb29yZGluYXRlQXJyYXkpKTtcbiAgICAgICAgc3F1YXJlcy5mb3JFYWNoKHNxdWFyZSA9PiB7XG4gICAgICAgICAgICBsZXQgYWRqYWNlbnRMZWZ0ID0gW3NxdWFyZVswXSwgc3F1YXJlWzFdIC0gMV07XG4gICAgICAgICAgICBsZXQgYWRqYWNlbnRSaWdodCA9IFtzcXVhcmVbMF0sIHNxdWFyZVsxXSArIDFdO1xuICAgICAgICAgICAgaWYgKCF0aGlzLl9pbmNsdWRlcyhhZGphY2VudExlZnQsIHNxdWFyZXMpKSBzaWRlU3F1YXJlcy5sZWZ0LnB1c2goc3F1YXJlKTtcbiAgICAgICAgICAgIGlmICghdGhpcy5faW5jbHVkZXMoYWRqYWNlbnRSaWdodCwgc3F1YXJlcykpIHNpZGVTcXVhcmVzLnJpZ2h0LnB1c2goc3F1YXJlKTtcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiBzaWRlU3F1YXJlcztcbiAgICB9XG5cbiAgICBpc0ZhbGxpbmcoZmllbGQpIHtcbiAgICAgICAgbGV0IHJlc3VsdCA9IHRydWU7XG4gICAgICAgIHRoaXMuaGFuZ2luZ1NxdWFyZXModGhpcy5wb3NpdGlvbikuZm9yRWFjaChjb29yZGluYXRlUGFpciA9PiB7XG4gICAgICAgICAgICBsZXQgW3JvdywgY29sXSA9IFtjb29yZGluYXRlUGFpclswXSwgY29vcmRpbmF0ZVBhaXJbMV1dO1xuICAgICAgICAgICAgLy8gaWYgdGhlIHBpZWNlJ3MgY3VycmVudCBwb3NpdGlvbiBpcyBhYm92ZSB0aGUgZmllbGQgZmxvb3Igb3IgYSBhbm90aGVyIHBpZWNlIChub3QgaW5jbHVkZSBnaG9zdCBwaWVjZSlcbiAgICAgICAgICAgIGlmICghZmllbGRbcm93ICsgMV0gfHwgKGZpZWxkW3JvdyArIDFdW2NvbF0gJiYgZmllbGRbcm93ICsgMV1bY29sXSAhPT0gXCJ4XCIpKSB7XG4gICAgICAgICAgICAgICAgcmVzdWx0ID0gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cblxuICAgIHJpZ2h0U2lkZUJsb2NrZWQoZmllbGQpIHtcbiAgICAgICAgLy8gaWYgKHRoaXMucG9zaXRpb24udG9wWzBdWzBdIDwgMCkgcmV0dXJuIGZhbHNlO1xuICAgICAgICBsZXQgcmVzdWx0ID0gZmFsc2U7XG4gICAgICAgIHRoaXMuc2lkZVNxdWFyZXMoKS5yaWdodC5mb3JFYWNoKGNvb3JkaW5hdGVQYWlyID0+IHtcbiAgICAgICAgICAgIGxldCBbcm93LCBjb2xdID0gW2Nvb3JkaW5hdGVQYWlyWzBdLCBjb29yZGluYXRlUGFpclsxXV07XG4gICAgICAgICAgICAvLyBpZiBhbnkgcmlnaHQgZmFjaW5nIHNxdWFyZSBoaXRzIHRoZSB3YWxsIG9yIGFub3RoZXIgcGllY2UsIG5vdCBpbmNsdWRpbmcgdGhlIGdob3N0IHBpZWNlXG4gICAgICAgICAgICBpZiAoY29sID09PSA5IHx8IChmaWVsZFtyb3ddICYmIGZpZWxkW3Jvd11bY29sICsgMV0gJiYgZmllbGRbcm93ICsgMV1bY29sXSAhPT0gXCJ4XCIpKSB7XG4gICAgICAgICAgICAgICAgcmVzdWx0ID0gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxuXG4gICAgbGVmdFNpZGVCbG9ja2VkKGZpZWxkKSB7XG4gICAgICAgIC8vIGlmICh0aGlzLnBvc2l0aW9uLnRvcFswXVswXSA8IDApIHJldHVybiBmYWxzZTtcbiAgICAgICAgbGV0IHJlc3VsdCA9IGZhbHNlO1xuICAgICAgICB0aGlzLnNpZGVTcXVhcmVzKCkubGVmdC5mb3JFYWNoKGNvb3JkaW5hdGVQYWlyID0+IHtcbiAgICAgICAgICAgIGxldCBbcm93LCBjb2xdID0gW2Nvb3JkaW5hdGVQYWlyWzBdLCBjb29yZGluYXRlUGFpclsxXV07XG4gICAgICAgICAgICAvLyBpZiBhbnkgbGVmdCBmYWNpbmcgc3F1YXJlIGhpdHMgdGhlIHdhbGwgb3IgYW5vdGhlciBwaWVjZSwgbm90IGluY2x1ZGluZyB0aGUgZ2hvc3QgcGllY2VcbiAgICAgICAgICAgIGlmIChjb2wgPT09IDAgfHwgKGZpZWxkW3Jvd10gJiYgZmllbGRbcm93XVtjb2wgLSAxXSAmJiBmaWVsZFtyb3ddW2NvbCAtIDFdICE9PSBcInhcIikpIHtcbiAgICAgICAgICAgICAgICByZXN1bHQgPSB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG5cbiAgICB3YWxsS2ljayhmaWVsZCwgYWN0aW9uLCBvbGRQb3NpdGlvbikge1xuICAgICAgICBsZXQgdmFsaWRTcG90LCBzdGFydGluZ09mZnNldDtcbiAgICAgICAgaWYgKGFjdGlvbiA9PT0gXCJ0dXJuUmlnaHRcIikge1xuICAgICAgICAgICAgc3RhcnRpbmdPZmZzZXQgPSB0aGlzLnJvdGF0aW9uU3RhdGUgPT09IDAgPyB0aGlzLm9mZnNldEd1aWRlWzNdIDogdGhpcy5vZmZzZXRHdWlkZVt0aGlzLnJvdGF0aW9uU3RhdGUgLSAxXTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHN0YXJ0aW5nT2Zmc2V0ID0gdGhpcy5yb3RhdGlvblN0YXRlID09PSAzID8gdGhpcy5vZmZzZXRHdWlkZVswXSA6IHRoaXMub2Zmc2V0R3VpZGVbdGhpcy5yb3RhdGlvblN0YXRlICsgMV07XG4gICAgICAgIH1cbiAgICAgICAgbGV0IG5leHRPZmZzZXQgPSB0aGlzLm9mZnNldEd1aWRlW3RoaXMucm90YXRpb25TdGF0ZV07XG4gICAgICAgIC8vIGZvciAobGV0IGkgPSAwOyBpIDwgNTsgaSsrKSB7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgNjsgaSsrKSB7XG4gICAgICAgICAgICAvLyBpZiBpID09PSA1LCB0aGVyZSBhcmUgbm8gbW9yZSBwb3RlbnRpYWwgcG9zaXRpb25zIHRvIGNoZWNrIGFuZCB0aGUgcGllY2UncyBwb3NpdGlvbiBpcyB0aGUgaW5pdGlhbCBwb3NpdGlvbiBmcm9tIGJlZm9yZSB0dXJuaW5nXG4gICAgICAgICAgICBpZiAoaSA9PT0gNSkge1xuICAgICAgICAgICAgICAgIHRoaXMucG9zaXRpb24gPSBvbGRQb3NpdGlvbjtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB2YWxpZFNwb3QgPSB0cnVlO1xuICAgICAgICAgICAgbGV0IGJhc2VQb3NpdGlvbiA9IHtcbiAgICAgICAgICAgICAgICB0b3A6IHRoaXMucG9zaXRpb24udG9wLm1hcChhcnJheSA9PiBhcnJheS5zbGljZSgpKSxcbiAgICAgICAgICAgICAgICBtaWRkbGU6IHRoaXMucG9zaXRpb24ubWlkZGxlLm1hcChhcnJheSA9PiBhcnJheS5zbGljZSgpKSxcbiAgICAgICAgICAgICAgICBib3R0b206IHRoaXMucG9zaXRpb24uYm90dG9tLm1hcChhcnJheSA9PiBhcnJheS5zbGljZSgpKSxcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGxldCBiYXNlVHVybmluZ1BvaW50ID0gdGhpcy50dXJuaW5nUG9pbnQuc2xpY2UoKTtcblxuICAgICAgICAgICAgbGV0IHN0YXJ0aW5nVHJhbnNsYXRpb24gPSBzdGFydGluZ09mZnNldFtpXTtcbiAgICAgICAgICAgIGxldCBwb3RlbnRpYWxUcmFuc2xhdGlvbiA9IG5leHRPZmZzZXRbaV07XG4gICAgICAgICAgICBsZXQgcm93U2hpZnQgPSBzdGFydGluZ1RyYW5zbGF0aW9uWzBdIC0gcG90ZW50aWFsVHJhbnNsYXRpb25bMF07XG4gICAgICAgICAgICBsZXQgY29sU2hpZnQgPSBzdGFydGluZ1RyYW5zbGF0aW9uWzFdIC0gcG90ZW50aWFsVHJhbnNsYXRpb25bMV07XG4gICAgICAgICAgICBsZXQgdHJhbnNsYXRlVmVydGljYWwgPSByb3dTaGlmdCA+IDAgPyAoKSA9PiB0aGlzLm1vdmUoXCJ1cFwiKSA6ICgpID0+IHRoaXMubW92ZShcImRvd25cIik7XG4gICAgICAgICAgICBsZXQgdHJhbnNsYXRlSG9yaXpvbnRhbCA9IGNvbFNoaWZ0ID4gMCA/ICgpID0+IHRoaXMubW92ZShcInJpZ2h0XCIpIDogKCkgPT4gdGhpcy5tb3ZlKFwibGVmdFwiKTtcbiAgICAgICAgICAgIGZvciAobGV0IG51bVRpbWVzUm93U2hpZnRlZCA9IDA7IG51bVRpbWVzUm93U2hpZnRlZCA8IE1hdGguYWJzKHJvd1NoaWZ0KTsgbnVtVGltZXNSb3dTaGlmdGVkKyspIHtcbiAgICAgICAgICAgICAgICB0cmFuc2xhdGVWZXJ0aWNhbCgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZm9yIChsZXQgbnVtVGltZXNDb2xTaGlmdGVkID0gMDsgbnVtVGltZXNDb2xTaGlmdGVkIDwgTWF0aC5hYnMoY29sU2hpZnQpOyBudW1UaW1lc0NvbFNoaWZ0ZWQrKykge1xuICAgICAgICAgICAgICAgIHRyYW5zbGF0ZUhvcml6b250YWwoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGxldCBuZXdQb3NpdGlvbiA9IFsuLi50aGlzLnBvc2l0aW9uLnRvcCwgLi4udGhpcy5wb3NpdGlvbi5taWRkbGUsIC4uLnRoaXMucG9zaXRpb24uYm90dG9tXTtcbiAgICAgICAgICAgIGZvciAobGV0IGkgaW4gbmV3UG9zaXRpb24pIHtcbiAgICAgICAgICAgICAgICBsZXQgW3JvdywgY29sXSA9IFtuZXdQb3NpdGlvbltpXVswXSwgbmV3UG9zaXRpb25baV1bMV1dO1xuICAgICAgICAgICAgICAgIGlmIChmaWVsZFtyb3ddID09PSB1bmRlZmluZWQgfHwgZmllbGRbcm93XVtjb2xdID09PSB1bmRlZmluZWQgfHwgZmllbGRbcm93XVtjb2xdID4gMCkge1xuICAgICAgICAgICAgICAgICAgICB2YWxpZFNwb3QgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wb3NpdGlvbiA9IGJhc2VQb3NpdGlvbjtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy50dXJuaW5nUG9pbnQgPSBiYXNlVHVybmluZ1BvaW50O1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBhbGxvd3MgdFNwaW4gdmFyaWFibGUgdG8gYmUgdHJ1dGh5XG4gICAgICAgICAgICBpZiAodmFsaWRTcG90KSB7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMubmFtZSA9PT0gXCJUUGllY2VcIikge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufSIsImltcG9ydCBQaWVjZSBmcm9tICcuL3BpZWNlJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU1BpZWNlIGV4dGVuZHMgUGllY2Uge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICB0aGlzLm5hbWUgPSBcIlNQaWVjZVwiO1xuICAgICAgICB0aGlzLnBvc2l0aW9uID0ge1xuICAgICAgICAgICAgdG9wOiBbWzAsIDRdLCBbMCwgNV1dLFxuICAgICAgICAgICAgbWlkZGxlOiBbXSxcbiAgICAgICAgICAgIGJvdHRvbTogW1sxLCAzXSwgWzEsIDRdXVxuICAgICAgICB9O1xuICAgICAgICB0aGlzLmNvbG9yQ29kZSA9IDQ7XG5cbiAgICAgICAgdGhpcy50dXJuaW5nUG9pbnQgPSBbMSwgNF07XG5cbiAgICAgICAgdGhpcy5kaXNwbGF5U3F1YXJlcyA9IFtbMywgMV0sIFsyLCAxXSwgWzIsIDJdLCBbMSwgMl1dO1xuXG4gICAgICAgIHRoaXMucmVtb3ZlU3F1YXJlcyA9IFtdO1xuICAgIH1cbn0iLCJpbXBvcnQgUGllY2UgZnJvbSAnLi9waWVjZSc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRQaWVjZSBleHRlbmRzIFBpZWNlIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgdGhpcy5uYW1lID0gXCJUUGllY2VcIjtcbiAgICAgICAgdGhpcy5wb3NpdGlvbiA9IHtcbiAgICAgICAgICAgIHRvcDogW1swLCA0XV0sXG4gICAgICAgICAgICBtaWRkbGU6IFtdLFxuICAgICAgICAgICAgYm90dG9tOiBbWzEsIDNdLCBbMSwgNF0sIFsxLCA1XV0sXG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5jb2xvckNvZGUgPSAzO1xuXG4gICAgICAgIHRoaXMudHVybmluZ1BvaW50ID0gWzEsIDRdO1xuXG4gICAgICAgIHRoaXMuZGlzcGxheVNxdWFyZXMgPSBbWzEsIDJdLCBbMiwgMl0sIFszLCAyXSwgWzIsIDFdXTtcblxuICAgICAgICB0aGlzLnJlbW92ZVNxdWFyZXMgPSBbXTtcbiAgICB9XG59IiwiaW1wb3J0IFBpZWNlIGZyb20gJy4vcGllY2UnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBaUGllY2UgZXh0ZW5kcyBQaWVjZSB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIHRoaXMubmFtZSA9IFwiWlBpZWNlXCI7XG4gICAgICAgIHRoaXMucG9zaXRpb24gPSB7XG4gICAgICAgICAgICB0b3A6IFtbMCwgM10sIFswLCA0XV0sXG4gICAgICAgICAgICBtaWRkbGU6IFtdLFxuICAgICAgICAgICAgYm90dG9tOiBbWzEsIDRdLCBbMSwgNV1dXG4gICAgICAgIH07XG4gICAgICAgIHRoaXMuY29sb3JDb2RlID0gNTtcblxuICAgICAgICB0aGlzLnR1cm5pbmdQb2ludCA9IFsxLCA0XTtcblxuICAgICAgICB0aGlzLmRpc3BsYXlTcXVhcmVzID0gW1sxLCAxXSwgWzIsIDFdLCBbMiwgMl0sIFszLCAyXV07XG5cbiAgICAgICAgdGhpcy5yZW1vdmVTcXVhcmVzID0gW107XG4gICAgfVxufSJdLCJzb3VyY2VSb290IjoiIn0=