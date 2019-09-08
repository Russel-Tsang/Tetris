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
/* harmony import */ var _scorekeeper_scorekeeper__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../scorekeeper/scorekeeper */ "./src/scorekeeper/scorekeeper.js");
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
    this.scoreKeeper = new _scorekeeper_scorekeeper__WEBPACK_IMPORTED_MODULE_9__["default"]();
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
      Object.values(this.ghostPosition).forEach(function (array) {
        array.forEach(function (coordinate) {
          var _ref2 = [coordinate[0], coordinate[1]],
              row = _ref2[0],
              col = _ref2[1];
          var fieldSquare = fieldColumns[col].children[row];

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
        if (_this8.gameIsOver || _this8.opponent.gameIsOver) return;

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
      } else {
        this.scoreKeeper.addToScore(numLinesCleared);
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
        } // prevents incoming piece from deleting a piece directly below during its initial render


        if (this.currentPiece.bottomMost[0] != 0 || this.currentPiece.isFalling(this.field)) this.currentPiece.drop(this.field);
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
      } else {
        var score = document.createElement('h2');
        score.classList.add("game-over-heading");
        score.innerHTML = "".concat(this.scoreKeeper.getScore(), " Points");
        gameOverScreen.append(score);
      }

      document.body.appendChild(gameOverScreen);
      this.gameIsOver = true;

      if (this.opponent) {
        cancelAnimationFrame(this.opponent.handleClear.drop);
      } else {
        this.stopTimer();
        clearInterval(this.clearElevateInterval);
        clearInterval(this.clearElevation);
      }
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


      if (this.field[numLines - 1] && !this.field[numLines - 1].slice(2, 7).includes(0)) {
        return;
      }

      this.field = this.field.slice(numLines, 20).concat(garbageLines);
      this.upcomingLines = 0;
      this.render();
    } // single player logic

  }, {
    key: "startElevating",
    value: function startElevating(elevateDelay) {
      var _this11 = this;

      this.clearElevateInterval = setInterval(function () {
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

      this.clearElevation = setInterval(function () {
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
      this.singlePlayerContent.createAllContent();
      this.field1.createCompleteField(this.fieldContainer1);
      this.fieldContainer1.style.position = 'relative';
      this.fieldContainer1.style.left = '14vw';
      this.game1.keyListener();
      this.game1.changeControls();
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
  function MultiplayerContent() {
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
/* harmony import */ var _scorekeeper_scorekeeper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../scorekeeper/scorekeeper */ "./src/scorekeeper/scorekeeper.js");
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
    this.scoreKeeper = new _scorekeeper_scorekeeper__WEBPACK_IMPORTED_MODULE_0__["default"]();
  }

  _createClass(SinglePlayerContent, [{
    key: "createAllContent",
    value: function createAllContent() {
      var allSinglePlayerContent = document.createElement('div');
      allSinglePlayerContent.appendChild(this.createTimer());
      allSinglePlayerContent.appendChild(this.scoreKeeper.createScoreKeeper());
      allSinglePlayerContent.appendChild(this.createControlsContent());
      document.body.append(allSinglePlayerContent);
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



/***/ }),

/***/ "./src/scorekeeper/scorekeeper.js":
/*!****************************************!*\
  !*** ./src/scorekeeper/scorekeeper.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ScoreKeeper; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var ScoreKeeper =
/*#__PURE__*/
function () {
  function ScoreKeeper() {
    _classCallCheck(this, ScoreKeeper);
  }

  _createClass(ScoreKeeper, [{
    key: "createScoreKeeper",
    value: function createScoreKeeper() {
      var scoreKeeperDiv = document.createElement('div');
      scoreKeeperDiv.classList.add('scorekeeper');
      scoreKeeperDiv.innerHTML = '0';
      return scoreKeeperDiv;
    }
  }, {
    key: "addToScore",
    value: function addToScore(linesCleared) {
      var scoreKeeper = document.querySelector('.scorekeeper');
      var score = Number(scoreKeeper.innerHTML);

      if (linesCleared === 1) {
        score += 100;
      } else if (linesCleared === 2) {
        score += 225;
      } else if (linesCleared === 3) {
        score += 350;
      } else if (linesCleared === 4) {
        score += 500;
      }

      scoreKeeper.innerHTML = score;
    }
  }, {
    key: "getScore",
    value: function getScore() {
      var scoreKeeper = document.querySelector('.scorekeeper');
      return scoreKeeper.innerHTML;
    }
  }]);

  return ScoreKeeper;
}();



/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2ZpZWxkL2ZpZWxkLmpzIiwid2VicGFjazovLy8uL3NyYy9maWVsZC9ob2xkYm94LmpzIiwid2VicGFjazovLy8uL3NyYy9maWVsZC9uZXh0Qm94LmpzIiwid2VicGFjazovLy8uL3NyYy9maWVsZC9xdWV1ZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvZ2FtZS9nYW1lLmpzIiwid2VicGFjazovLy8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvbWVudS9tZW51LmpzIiwid2VicGFjazovLy8uL3NyYy9tb2RhbC9tb2RhbC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvbW9kYWwvbXVsdGlwbGF5ZXJDb250ZW50LmpzIiwid2VicGFjazovLy8uL3NyYy9tb2RhbC9zaW5nbGVQbGF5ZXJDb250ZW50LmpzIiwid2VicGFjazovLy8uL3NyYy9tdWx0aXBsYXllci9tdWx0aXBsYXllci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcGllY2VzL2lQaWVjZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcGllY2VzL2pQaWVjZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcGllY2VzL2xQaWVjZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcGllY2VzL29QaWVjZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcGllY2VzL3BpZWNlLmpzIiwid2VicGFjazovLy8uL3NyYy9waWVjZXMvc1BpZWNlLmpzIiwid2VicGFjazovLy8uL3NyYy9waWVjZXMvdFBpZWNlLmpzIiwid2VicGFjazovLy8uL3NyYy9waWVjZXMvelBpZWNlLmpzIiwid2VicGFjazovLy8uL3NyYy9zY29yZWtlZXBlci9zY29yZWtlZXBlci5qcyJdLCJuYW1lcyI6WyJGaWVsZCIsImZpZWxkTnVtIiwiZmllbGQiLCJpIiwicm93IiwicHVzaCIsImNvbHVtbiIsImRvY3VtZW50IiwiY3JlYXRlRWxlbWVudCIsImNsYXNzTGlzdCIsImFkZCIsImFwcGVuZCIsImFwcGVuZENoaWxkIiwiX2NyZWF0ZUNvbHVtbiIsImNvbnRhaW5lciIsInF1ZXVlIiwiUXVldWUiLCJuZXh0Qm94IiwiTmV4dEJveCIsImhvbGRCb3giLCJIb2xkQm94IiwiX2NyZWF0ZUZpZWxkIiwiY3JlYXRlUXVldWUiLCJjcmVhdGVOZXh0Qm94ZXMiLCJwcmVwZW5kIiwiY3JlYXRlQm94IiwiYm94V3JhcHBlciIsImJveCIsImhlYWRpbmciLCJpbm5lckhUTUwiLCJfY3JlYXRlQm94Q29sdW1uIiwiX2NyZWF0ZU5leHRCb3hDb2x1bW4iLCJib3hlcyIsIl9jcmVhdGVOZXh0Qm94IiwicXVldWVNZXRlciIsImFkanVzdFF1ZXVlSGVpZ2h0IiwicGVyY2VudGFnZSIsInF1ZXJ5U2VsZWN0b3IiLCJzdHlsZSIsImhlaWdodCIsIkdhbWUiLCJvcHRpb25zIiwic2V0RmllbGQiLCJjb2xvcnMiLCJnYW1lTnVtIiwiY3VycmVudEJhZyIsInNodWZmbGVCYWciLCJnZW5lcmF0ZUJhZyIsImN1cnJlbnRQaWVjZSIsImhvbGRQaWVjZSIsImdob3N0UG9zaXRpb24iLCJuZXh0QmFnIiwiY2FuSG9sZCIsImhhbmRsZUNsZWFyIiwiZHJvcCIsInJpZ2h0IiwibGVmdCIsImRvd24iLCJkcm9wU3BlZWQiLCJtb3ZlU3BlZWQiLCJkcm9wUGllY2UiLCJiaW5kIiwibW92ZSIsIm1vdmVQaWVjZSIsImFuaW1hdGUiLCJmcHNJbnRlcnZhbCIsInN0YXJ0VGltZSIsIm5vdyIsInRoZW4iLCJpc1BhdXNlZCIsImtleUhlbGQiLCJvcHBvbmVudCIsImNvbnRyb2xzIiwidXBjb21pbmdMaW5lcyIsImNvbWJvIiwidFNwaW4iLCJ0U3BpblN0cmVhayIsImNvbWJvR3VpZGUiLCJzdGFydEVsZXZhdGluZyIsImNsZWFyRWxldmF0ZUludGVydmFsIiwiZWxldmF0ZURlbGF5IiwiY2xlYXJUaW1lciIsInNjb3JlS2VlcGVyIiwiU2NvcmVLZWVwZXIiLCJvUGllY2UiLCJPUGllY2UiLCJpUGllY2UiLCJJUGllY2UiLCJ0UGllY2UiLCJUUGllY2UiLCJzUGllY2UiLCJTUGllY2UiLCJ6UGllY2UiLCJaUGllY2UiLCJsUGllY2UiLCJMUGllY2UiLCJqUGllY2UiLCJKUGllY2UiLCJfZ2VuZXJhdGVGaWVsZCIsInNoaWZ0IiwiY29vcmRpbmF0ZUFycmF5cyIsIk9iamVjdCIsInZhbHVlcyIsImZvckVhY2giLCJhcnJheSIsImNvb3JkaW5hdGUiLCJjb2wiLCJmaWVsZENvbHVtbnMiLCJxdWVyeVNlbGVjdG9yQWxsIiwiZmllbGRTcXVhcmUiLCJjaGlsZHJlbiIsImNvbG9yQ29kZSIsInRvcCIsInBvc2l0aW9uIiwibWFwIiwic2xpY2UiLCJtaWRkbGUiLCJib3R0b20iLCJzdG9wcGVkIiwiaGFuZ2luZ1NxdWFyZXMiLCJfcG9wdWxhdGVHaG9zdFBvc2l0aW9uIiwicmVuZGVyIiwiY2xlYXJTZWxmRnJvbUJvYXJkIiwiX2dlbmVyYXRlUGllY2UiLCJuYW1lIiwic2V0Q3VycmVudFBpZWNlIiwic2hvd0N1cnJlbnRCYWciLCJfcG9wdWxhdGVIb2xkQm94IiwiY29sdW1ucyIsImoiLCJjbGFzc05hbWUiLCJkaXNwbGF5U3F1YXJlcyIsInNxdWFyZSIsInBpZWNlTmFtZSIsImdldEVsZW1lbnRzQnlDbGFzc05hbWUiLCJfcG9wdWxhdGVOZXh0Qm94IiwicGllY2UiLCJiYWciLCJjdXJyZW50SW5kZXgiLCJsZW5ndGgiLCJ0ZW1wb3JhcnlWYWx1ZSIsInJhbmRvbUluZGV4IiwiTWF0aCIsImZsb29yIiwicmFuZG9tIiwicm93SWR4IiwiY29sSWR4Iiwic3F1YXJlVmFsdWUiLCJyZW1vdmUiLCJib2R5IiwiYWRkRXZlbnRMaXN0ZW5lciIsImV2ZW50IiwiZ2FtZUlzT3ZlciIsInNldE91dGVyU3F1YXJlcyIsIndoaWNoIiwidHVyblJpZ2h0IiwiY2xlYXJHaG9zdFBvc2l0aW9uIiwicG9wdWxhdGVGaWVsZCIsInNldEdob3N0UG9zaXRpb24iLCJ0dXJuTGVmdCIsImxlZnRTaWRlQmxvY2tlZCIsInJpZ2h0U2lkZUJsb2NrZWQiLCJzb2Z0RHJvcCIsImhvbGQiLCJoYXJkRHJvcCIsImhhbmRsZVBpZWNlU3RvcCIsImNhbmNlbEFuaW1hdGlvbkZyYW1lIiwibG93ZXN0IiwiaGlnaGVzdCIsIm51bUxpbmVzQ2xlYXJlZCIsImluY2x1ZGVzIiwiX2JyaW5nRG93bkZpZWxkIiwiY2xlYXJMaW5lcyIsInN0YXJ0aW5nUm93IiwibGVmdE1vc3QiLCJyaWdodE1vc3QiLCJsZWZ0TW9zdFJvdyIsInJpZ2h0TW9zdFJvdyIsImxlZnRNb3N0Q29sIiwicmlnaHRNb3N0Q29sIiwibnVtTGluZXMiLCJhZGRMaW5lc1RvUXVldWUiLCJhYnMiLCJyZWNlaXZlVXBjb21pbmdMaW5lcyIsImFkZFRvU2NvcmUiLCJjbGVhckdob3N0Q2xhc3MiLCJwbGF5IiwiZnBzIiwiRGF0ZSIsInJlcXVlc3RBbmltYXRpb25GcmFtZSIsImVsYXBzZWQiLCJpc0ZhbGxpbmciLCJib3R0b21Nb3N0IiwiZGlyZWN0aW9uIiwiYXRUb3AiLCJnYW1lT3ZlciIsImhhbmRsZVRvcFBpZWNlIiwiYWRkVG9DdXJyZW50QmFnIiwicmVmaWxsTmV4dEJhZyIsIndpbm5lciIsImdhbWVPdmVyU2NyZWVuIiwiZ2FtZU92ZXJIZWFkaW5nIiwid2lubmVySGVhZGluZyIsInNjb3JlIiwiZ2V0U2NvcmUiLCJzdG9wVGltZXIiLCJjbGVhckludGVydmFsIiwiY2xlYXJFbGV2YXRpb24iLCJwbGF5ZXIiLCJnYXJiYWdlTGluZXMiLCJyYW5kb21Ib2xlIiwiZ2FyYmFnZVJvdyIsImNvbmNhdCIsInNldEludGVydmFsIiwibWludXRlcyIsInNlY29uZHMiLCJvbGRTZWNvbmQiLCJOdW1iZXIiLCJvbGRNaW51dGUiLCJuZXdTZWNvbmRzIiwibWVudSIsIk1lbnUiLCJyZW5kZXJNZW51IiwiZ2V0RWxlbWVudEJ5SWQiLCJvcHRpb25zUGxheWVyMSIsIm9wdGlvbnNQbGF5ZXIyIiwiZ2FtZTEiLCJnYW1lMiIsImZpZWxkMSIsImZpZWxkMiIsIm11bHRpcGxheWVyTW9kZSIsIk11bHRpcGxheWVyIiwiZmllbGRDb250YWluZXIxIiwiZmllbGRDb250YWluZXIyIiwic2luZ2xlUGxheWVyQ29udGVudCIsIlNpbmdsZVBsYXllckNvbnRlbnQiLCJtdWx0aXBsYXllckNvbnRlbnQiLCJNdWx0aXBsYXllckNvbnRlbnQiLCJtb2RhbCIsIk1vZGFsIiwic2luZ2xlUGxheWVyQnV0dG9uIiwibXVsdGlwbGF5ZXJCdXR0b24iLCJhZGRFdmVudExpc3RlbmVycyIsInJlbmRlclNpbmdsZVBsYXllciIsInJlbmRlck11bHRpcGxheWVyIiwicmVtb3ZlQ2hpbGQiLCJqdXN0aWZ5Q29udGVudCIsImNyZWF0ZUFsbENvbnRlbnQiLCJjcmVhdGVDb21wbGV0ZUZpZWxkIiwia2V5TGlzdGVuZXIiLCJjaGFuZ2VDb250cm9scyIsImFkanVzdEVsZXZhdGUiLCJjcmVhdGVUaW1lciIsInN0YXJ0VGltZXIiLCJjb250cm9sc0NvbnRhaW5lciIsImNyZWF0ZUNvbnRyb2xzQ29udGVudCIsImNyZWF0ZSIsIl9jcmVhdGVDbG9zZU1vZGFsTGluayIsImJ1dHRvbkNvbnRhaW5lciIsInJlbmRlckJ1dHRvbnMiLCJidXR0b24iLCJjbG9zZUxpbmsiLCJzdGFydE11bHRpcGxheWVyIiwiY29udGVudCIsImtleXMiLCJwbGF5ZXIxIiwicGxheWVyMiIsImNvbnRyb2xzRGl2IiwiaW1hZ2VzIiwiZGVzY3JpcHRpb25zIiwic3BhbnMiLCJkaXZzIiwibGFiZWwiLCJwIiwiaW1nIiwic2V0QXR0cmlidXRlIiwiYWxsU2luZ2xlUGxheWVyQ29udGVudCIsImNyZWF0ZVNjb3JlS2VlcGVyIiwiY29udGVudERpdiIsInRpbWVyIiwiY29sb24iLCJlbGUiLCJzZXRPcHBvbmVudCIsInR1cm5pbmdQb2ludCIsInJlbW92ZVNxdWFyZXMiLCJvZmZzZXRHdWlkZSIsIlBpZWNlIiwidG9wTW9zdCIsInJvdGF0aW9uU3RhdGUiLCJjb29yZGluYXRlc0FycmF5IiwiY29sdW1uVmFsdWUiLCJyb3dWYWx1ZSIsInBvc2l0aW9uQXJyYXkiLCJvbGRTcXVhcmUiLCJuZXdTcXVhcmUiLCJyZXN1bHQiLCJfc3F1YXJlc0FyZUVxdWFsIiwib2xkUG9zaXRpb24iLCJzZXRSZW1vdmVTcXVhcmVzIiwib2xkVHVybmluZ1BvaW50Iiwic3F1YXJlcyIsImhlaWdodERpZmZlcmVuY2UiLCJ3aWR0aERpZmZlcmVuY2UiLCJuZXdDb2wiLCJuZXdSb3ciLCJuZXdTcXVhcmVzIiwidW5kZWZpbmVkIiwid2FsbEtpY2siLCJvbGRTcXVhcmVzIiwiZmlsdGVyIiwiX2luY2x1ZGVzIiwiY29vcmRpbmF0ZUFycmF5IiwiYmVsb3dTcXVhcmUiLCJzaWRlU3F1YXJlcyIsImFkamFjZW50TGVmdCIsImFkamFjZW50UmlnaHQiLCJjb29yZGluYXRlUGFpciIsImFjdGlvbiIsInZhbGlkU3BvdCIsInN0YXJ0aW5nT2Zmc2V0IiwibmV4dE9mZnNldCIsImJhc2VQb3NpdGlvbiIsImJhc2VUdXJuaW5nUG9pbnQiLCJzdGFydGluZ1RyYW5zbGF0aW9uIiwicG90ZW50aWFsVHJhbnNsYXRpb24iLCJyb3dTaGlmdCIsImNvbFNoaWZ0IiwidHJhbnNsYXRlVmVydGljYWwiLCJ0cmFuc2xhdGVIb3Jpem9udGFsIiwibnVtVGltZXNSb3dTaGlmdGVkIiwibnVtVGltZXNDb2xTaGlmdGVkIiwibmV3UG9zaXRpb24iLCJzY29yZUtlZXBlckRpdiIsImxpbmVzQ2xlYXJlZCJdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7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a0ksWUFBWSxLQUFLLENBQXJCLEVBQXdCO0FBQzNCbEksYUFBSyxJQUFJLEdBQVQ7QUFDSDs7QUFDRHpILGlCQUFXLENBQUNyRCxTQUFaLEdBQXdCOEssS0FBeEI7QUFDSDs7OytCQUVVO0FBQ1AsVUFBSXpILFdBQVcsR0FBRzNFLFFBQVEsQ0FBQzhCLGFBQVQsQ0FBdUIsY0FBdkIsQ0FBbEI7QUFDQSxhQUFPNkMsV0FBVyxDQUFDckQsU0FBbkI7QUFDSCIsImZpbGUiOiJtYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCIvZGlzdC9cIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvaW5kZXguanNcIik7XG4iLCJpbXBvcnQgSG9sZEJveCBmcm9tICcuL2hvbGRib3gnO1xuaW1wb3J0IE5leHRCb3ggZnJvbSAnLi9uZXh0Qm94JztcbmltcG9ydCBRdWV1ZSBmcm9tICcuL3F1ZXVlJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRmllbGQgeyAgXG4gICAgY29uc3RydWN0b3IoZmllbGROdW0pIHtcbiAgICAgICAgdGhpcy5maWVsZE51bSA9IGZpZWxkTnVtO1xuICAgIH1cbiAgICBcbiAgICBfZ2VuZXJhdGVGaWVsZCgpIHtcbiAgICAgICAgbGV0IGZpZWxkID0gW107XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMjA7IGkrKykge1xuICAgICAgICAgICAgbGV0IHJvdyA9IFswLDAsMCwwLDAsMCwwLDAsMCwwXTtcbiAgICAgICAgICAgIGZpZWxkLnB1c2gocm93KTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZmllbGQ7XG4gICAgfVxuXG4gICAgX2NyZWF0ZUNvbHVtbigpIHtcbiAgICAgICAgbGV0IGNvbHVtbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ1bFwiKTtcbiAgICAgICAgY29sdW1uLmNsYXNzTGlzdC5hZGQoYGZpZWxkLWNvbHVtbmAsIGBmaWVsZC0ke3RoaXMuZmllbGROdW19YCk7XG5cbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCAyMDsgaSsrKSB7XG4gICAgICAgICAgICBjb2x1bW4uYXBwZW5kKGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaVwiKSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGNvbHVtbjtcbiAgICB9XG5cbiAgICBfY3JlYXRlRmllbGQoKSB7XG4gICAgICAgIGxldCBmaWVsZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIGZpZWxkLmNsYXNzTGlzdC5hZGQoYGZpZWxkLWJveGAsIGBmaWVsZC0ke3RoaXMuZmllbGROdW19YCk7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMTA7IGkrKykge1xuICAgICAgICAgICAgZmllbGQuYXBwZW5kQ2hpbGQodGhpcy5fY3JlYXRlQ29sdW1uKCkpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBmaWVsZDtcbiAgICB9XG5cbiAgICBjcmVhdGVDb21wbGV0ZUZpZWxkKGNvbnRhaW5lcikge1xuICAgICAgICBsZXQgcXVldWUgPSBuZXcgUXVldWUodGhpcy5maWVsZE51bSk7XG4gICAgICAgIGxldCBuZXh0Qm94ID0gbmV3IE5leHRCb3godGhpcy5maWVsZE51bSk7XG4gICAgICAgIGxldCBob2xkQm94ID0gbmV3IEhvbGRCb3godGhpcy5maWVsZE51bSk7XG4gICAgICAgIGNvbnRhaW5lci5hcHBlbmQodGhpcy5fY3JlYXRlRmllbGQoKSk7XG4gICAgICAgIGNvbnRhaW5lci5hcHBlbmQocXVldWUuY3JlYXRlUXVldWUoKSk7XG4gICAgICAgIGNvbnRhaW5lci5hcHBlbmQobmV4dEJveC5jcmVhdGVOZXh0Qm94ZXMoKSk7XG4gICAgICAgIGNvbnRhaW5lci5wcmVwZW5kKGhvbGRCb3guY3JlYXRlQm94KCkpO1xuICAgICAgICByZXR1cm4gY29udGFpbmVyO1xuICAgIH1cblxufSIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIEhvbGRCb3gge1xuICAgIGNvbnN0cnVjdG9yKGZpZWxkTnVtKSB7XG4gICAgICAgIHRoaXMuZmllbGROdW0gPSBmaWVsZE51bTtcbiAgICB9XG5cbiAgICBfY3JlYXRlQm94Q29sdW1uKCkge1xuICAgICAgICBsZXQgY29sdW1uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInVsXCIpO1xuICAgICAgICBjb2x1bW4uY2xhc3NMaXN0LmFkZChgaG9sZC1jb2x1bW5gLCBgZmllbGQtJHt0aGlzLmZpZWxkTnVtfWApO1xuXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgNDsgaSsrKSB7XG4gICAgICAgICAgICBjb2x1bW4uYXBwZW5kKGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaVwiKSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGNvbHVtbjtcbiAgICB9XG5cbiAgICBjcmVhdGVCb3goKSB7XG4gICAgICAgIGxldCBib3hXcmFwcGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgYm94V3JhcHBlci5jbGFzc0xpc3QuYWRkKGBob2xkLWJveC13cmFwcGVyYCwgYGZpZWxkLSR7dGhpcy5maWVsZE51bX1gKTtcbiAgICAgICAgbGV0IGJveCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIGJveC5jbGFzc0xpc3QuYWRkKGBob2xkLWJveGAsIGBmaWVsZC0ke3RoaXMuZmllbGROdW19YCk7XG4gICAgICAgIGxldCBoZWFkaW5nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgyXCIpO1xuICAgICAgICBoZWFkaW5nLmlubmVySFRNTCA9IFwiSE9MRFwiO1xuICAgICAgICBib3hXcmFwcGVyLmFwcGVuZENoaWxkKGhlYWRpbmcpO1xuICAgICAgICBib3hXcmFwcGVyLmFwcGVuZENoaWxkKGJveCk7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgNTsgaSsrKSB7XG4gICAgICAgICAgICBib3guYXBwZW5kQ2hpbGQodGhpcy5fY3JlYXRlQm94Q29sdW1uKCkpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBib3hXcmFwcGVyO1xuICAgIH1cbn0iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBOZXh0Qm94IHtcbiAgICBjb25zdHJ1Y3RvcihmaWVsZE51bSkge1xuICAgICAgICB0aGlzLmZpZWxkTnVtID0gZmllbGROdW07XG4gICAgfVxuXG4gICAgX2NyZWF0ZU5leHRCb3hDb2x1bW4oKSB7XG4gICAgICAgIGxldCBjb2x1bW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidWxcIik7XG4gICAgICAgIGNvbHVtbi5jbGFzc0xpc3QuYWRkKGBuZXh0LWNvbHVtbmAsIGBmaWVsZC0ke3RoaXMuZmllbGROdW19YCk7XG5cbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCA0OyBpKyspIHtcbiAgICAgICAgICAgIGNvbHVtbi5hcHBlbmQoZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpXCIpKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gY29sdW1uO1xuICAgIH1cblxuICAgIF9jcmVhdGVOZXh0Qm94KCkge1xuICAgICAgICBsZXQgYm94ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgYm94LmNsYXNzTGlzdC5hZGQoYG5leHQtYm94YCwgYGZpZWxkLSR7dGhpcy5maWVsZE51bX1gKTtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCA1OyBpKyspIHtcbiAgICAgICAgICAgIGJveC5hcHBlbmRDaGlsZCh0aGlzLl9jcmVhdGVOZXh0Qm94Q29sdW1uKCkpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBib3g7XG4gICAgfVxuXG4gICAgY3JlYXRlTmV4dEJveGVzKCkge1xuICAgICAgICBsZXQgYm94ZXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICBsZXQgaGVhZGluZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMlwiKTtcbiAgICAgICAgaGVhZGluZy5pbm5lckhUTUwgPSBcIk5FWFRcIjtcbiAgICAgICAgYm94ZXMuY2xhc3NMaXN0LmFkZChgbmV4dC1ib3hlc2AsIGBmaWVsZC0ke3RoaXMuZmllbGROdW19YCk7XG4gICAgICAgIGJveGVzLmFwcGVuZENoaWxkKGhlYWRpbmcpO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IDU7IGkrKykge1xuICAgICAgICAgICAgYm94ZXMuYXBwZW5kQ2hpbGQodGhpcy5fY3JlYXRlTmV4dEJveCgpKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gYm94ZXM7XG4gICAgfVxufSIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIFF1ZXVlIHtcbiAgICBjb25zdHJ1Y3RvcihmaWVsZE51bSkge1xuICAgICAgICB0aGlzLmZpZWxkTnVtID0gZmllbGROdW07XG4gICAgfVxuXG4gICAgY3JlYXRlUXVldWUoKSB7XG4gICAgICAgIGxldCBxdWV1ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIHF1ZXVlLmNsYXNzTGlzdC5hZGQoYHF1ZXVlYCwgYGZpZWxkLSR7dGhpcy5maWVsZE51bX1gKTtcbiAgICAgICAgbGV0IHF1ZXVlTWV0ZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICBxdWV1ZU1ldGVyLmNsYXNzTGlzdC5hZGQoYHF1ZXVlLW1ldGVyYCwgYGZpZWxkLSR7dGhpcy5maWVsZE51bX1gKTtcbiAgICAgICAgcXVldWUuYXBwZW5kQ2hpbGQocXVldWVNZXRlcik7XG4gICAgICAgIHJldHVybiBxdWV1ZTtcbiAgICB9XG59XG5cbmV4cG9ydCBjb25zdCBhZGp1c3RRdWV1ZUhlaWdodCA9IChmaWVsZE51bSwgcGVyY2VudGFnZSkgPT4ge1xuICAgIGxldCBxdWV1ZU1ldGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLnF1ZXVlLW1ldGVyLmZpZWxkLSR7ZmllbGROdW19YCk7XG4gICAgaWYgKHBlcmNlbnRhZ2UgPiAxMDApIHBlcmNlbnRhZ2UgPSAxMDA7XG4gICAgcXVldWVNZXRlci5zdHlsZS5oZWlnaHQgPSBgJHtwZXJjZW50YWdlfSVgXG59IiwiaW1wb3J0IEZpZWxkIGZyb20gJy4uL2ZpZWxkL2ZpZWxkJztcbmltcG9ydCBPUGllY2UgZnJvbSAnLi4vcGllY2VzL29QaWVjZSc7XG5pbXBvcnQgSVBpZWNlIGZyb20gJy4uL3BpZWNlcy9pUGllY2UnO1xuaW1wb3J0IFRQaWVjZSBmcm9tICcuLi9waWVjZXMvdFBpZWNlJztcbmltcG9ydCBTUGllY2UgZnJvbSAnLi4vcGllY2VzL3NQaWVjZSc7XG5pbXBvcnQgWlBpZWNlIGZyb20gJy4uL3BpZWNlcy96UGllY2UnO1xuaW1wb3J0IExQaWVjZSBmcm9tICcuLi9waWVjZXMvbFBpZWNlJztcbmltcG9ydCBKUGllY2UgZnJvbSAnLi4vcGllY2VzL2pQaWVjZSc7XG5pbXBvcnQgeyBhZGp1c3RRdWV1ZUhlaWdodCB9IGZyb20gJy4uL2ZpZWxkL3F1ZXVlJztcbmltcG9ydCBTY29yZUtlZXBlciBmcm9tICcuLi9zY29yZWtlZXBlci9zY29yZWtlZXBlcic7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEdhbWUge1xuICAgIGNvbnN0cnVjdG9yKG9wdGlvbnMpIHtcbiAgICAgICAgdGhpcy5maWVsZCA9IHRoaXMuc2V0RmllbGQoKVxuXG4gICAgICAgIHRoaXMuY29sb3JzID0ge1xuICAgICAgICAgICAgMTogXCJ5ZWxsb3dcIixcbiAgICAgICAgICAgIDI6IFwiYmx1ZVwiLFxuICAgICAgICAgICAgMzogXCJwdXJwbGVcIixcbiAgICAgICAgICAgIDQ6IFwiZ3JlZW5cIixcbiAgICAgICAgICAgIDU6IFwicmVkXCIsXG4gICAgICAgICAgICA2OiBcIm9yYW5nZVwiLFxuICAgICAgICAgICAgNzogXCJkYXJrLWJsdWVcIixcbiAgICAgICAgICAgIDg6IFwiZ3JleVwiXG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmdhbWVOdW0gPSBvcHRpb25zLmdhbWVOdW07XG5cbiAgICAgICAgdGhpcy5jdXJyZW50QmFnID0gdGhpcy5zaHVmZmxlQmFnKHRoaXMuZ2VuZXJhdGVCYWcoKSk7XG4gICAgICAgIHRoaXMuY3VycmVudFBpZWNlID0gJyc7XG4gICAgICAgIHRoaXMuaG9sZFBpZWNlID0gJyc7XG4gICAgICAgIHRoaXMuZ2hvc3RQb3NpdGlvbiA9ICcnO1xuICAgICAgICB0aGlzLm5leHRCYWcgPSB0aGlzLnNodWZmbGVCYWcodGhpcy5nZW5lcmF0ZUJhZygpKTtcblxuICAgICAgICAvLyBwcmV2ZW50cyBwbGF5ZXIgZnJvbSBob2xkaW5nIHBpZWNlIG11bHRpcGxlIHRpbWVzXG4gICAgICAgIHRoaXMuY2FuSG9sZCA9IHRydWU7XG5cbiAgICAgICAgdGhpcy5oYW5kbGVDbGVhciA9IHtcbiAgICAgICAgICAgIGRyb3A6ICcnLFxuICAgICAgICAgICAgcmlnaHQ6ICcnLFxuICAgICAgICAgICAgbGVmdDogJycsXG4gICAgICAgICAgICBkb3duOiAnJ1xuICAgICAgICB9O1xuXG4gICAgICAgIC8vIGZvciBhbmltYXRpb25zXG4gICAgICAgIHRoaXMuZHJvcFNwZWVkID0gMTtcbiAgICAgICAgdGhpcy5tb3ZlU3BlZWQgPSBvcHRpb25zLm1vdmVTcGVlZDtcbiAgICAgICAgdGhpcy5kcm9wUGllY2UgPSB0aGlzLmRyb3BQaWVjZS5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLmRyb3AgPSB0aGlzLmRyb3AuYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5tb3ZlID0gdGhpcy5tb3ZlLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMubW92ZVBpZWNlID0gdGhpcy5tb3ZlUGllY2UuYmluZCh0aGlzKTtcblxuICAgICAgICAvLyBrZWVwIHRyYWNrIG9mIHRoZSBmb2xsb3dpbmcgdmFyaWFibGVzIGZvciByZXF1ZXN0QW5pbWF0aW9uRnJhbWUgdGhyb3R0bGluZ1xuICAgICAgICB0aGlzLmFuaW1hdGUgPSB7XG4gICAgICAgICAgICBkcm9wOiB7XG4gICAgICAgICAgICAgICAgZnBzSW50ZXJ2YWw6ICcnLFxuICAgICAgICAgICAgICAgIHN0YXJ0VGltZTogJycsXG4gICAgICAgICAgICAgICAgbm93OiAnJyxcbiAgICAgICAgICAgICAgICB0aGVuOiAnJ1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHJpZ2h0OiB7XG4gICAgICAgICAgICAgICAgZnBzSW50ZXJ2YWw6ICcnLFxuICAgICAgICAgICAgICAgIHN0YXJ0VGltZTogJycsXG4gICAgICAgICAgICAgICAgbm93OiAnJyxcbiAgICAgICAgICAgICAgICB0aGVuOiAnJ1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGxlZnQ6IHtcbiAgICAgICAgICAgICAgICBmcHNJbnRlcnZhbDogJycsXG4gICAgICAgICAgICAgICAgc3RhcnRUaW1lOiAnJyxcbiAgICAgICAgICAgICAgICBub3c6ICcnLFxuICAgICAgICAgICAgICAgIHRoZW46ICcnXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgZG93bjoge1xuICAgICAgICAgICAgICAgIGZwc0ludGVydmFsOiAnJyxcbiAgICAgICAgICAgICAgICBzdGFydFRpbWU6ICcnLFxuICAgICAgICAgICAgICAgIG5vdzogJycsXG4gICAgICAgICAgICAgICAgdGhlbjogJydcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC8vIHBhdXNpbmcgdGhlIGdhbWVcbiAgICAgICAgdGhpcy5pc1BhdXNlZCA9IGZhbHNlO1xuXG4gICAgICAgIHRoaXMua2V5SGVsZCA9IHtcbiAgICAgICAgICAgIGRvd246IGZhbHNlLFxuICAgICAgICAgICAgcmlnaHQ6IGZhbHNlLFxuICAgICAgICAgICAgbGVmdDogZmFsc2VcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMub3Bwb25lbnQgPSBcIlwiO1xuICAgICAgICB0aGlzLmNvbnRyb2xzID0gb3B0aW9ucy5jb250cm9scztcbiAgICAgICAgdGhpcy51cGNvbWluZ0xpbmVzID0gMDtcbiAgICAgICAgdGhpcy5jb21ibyA9IC0xO1xuICAgICAgICB0aGlzLnRTcGluID0gZmFsc2U7XG4gICAgICAgIHRoaXMudFNwaW5TdHJlYWsgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5jb21ib0d1aWRlID0geyAwOiAwLCAxOiAwLCAyOiAxLCAzOiAxLCA0OiAxLCA1OiAyLCA2OiAyLCA3OiAzLCA4OiAzLCA5OiA0LCAxMDogNCwgMTE6IDQsIDEyOiA1IH07XG5cbiAgICAgICAgLy8gc2luZ2xlIHBsYXllclxuICAgICAgICB0aGlzLnN0YXJ0RWxldmF0aW5nID0gdGhpcy5zdGFydEVsZXZhdGluZy5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLmNsZWFyRWxldmF0ZUludGVydmFsID0gJyc7XG4gICAgICAgIHRoaXMuZWxldmF0ZURlbGF5ID0gNTAwMDtcbiAgICAgICAgdGhpcy5jbGVhclRpbWVyID0gJyc7XG4gICAgICAgIHRoaXMuc2NvcmVLZWVwZXIgPSBuZXcgU2NvcmVLZWVwZXIoKTtcbiAgICB9XG5cbiAgICBnZW5lcmF0ZUJhZygpIHtcbiAgICAgICAgbGV0IG9QaWVjZSA9IG5ldyBPUGllY2UoKTtcbiAgICAgICAgbGV0IGlQaWVjZSA9IG5ldyBJUGllY2UoKTtcbiAgICAgICAgbGV0IHRQaWVjZSA9IG5ldyBUUGllY2UoKTtcbiAgICAgICAgbGV0IHNQaWVjZSA9IG5ldyBTUGllY2UoKTtcbiAgICAgICAgbGV0IHpQaWVjZSA9IG5ldyBaUGllY2UoKTtcbiAgICAgICAgbGV0IGxQaWVjZSA9IG5ldyBMUGllY2UoKTtcbiAgICAgICAgbGV0IGpQaWVjZSA9IG5ldyBKUGllY2UoKTtcblxuICAgICAgICByZXR1cm4gW29QaWVjZSwgaVBpZWNlLCB0UGllY2UsIHNQaWVjZSwgelBpZWNlLCBsUGllY2UsIGpQaWVjZV07XG4gICAgfVxuXG4gICAgc2V0RmllbGQoKSB7XG4gICAgICAgIGxldCBmaWVsZCA9IG5ldyBGaWVsZCgpO1xuICAgICAgICByZXR1cm4gZmllbGQuX2dlbmVyYXRlRmllbGQoKTtcbiAgICB9XG5cbiAgICAvLyB0YWtlIHBpZWNlIGZyb20gY3VycmVudEJhZyBhbmQgc2V0IGl0IGFzIHRoZSBjdXJyZW50IHBpZWNlXG4gICAgc2V0Q3VycmVudFBpZWNlKCkge1xuICAgICAgICB0aGlzLmN1cnJlbnRQaWVjZSA9IHRoaXMuY3VycmVudEJhZy5zaGlmdCgpO1xuICAgIH1cblxuICAgIC8vIHJlbW92ZXMgb2xkIGdob3N0IHBvc2l0aW9uIGZyb20gdGhpcy5maWVsZCBiZWZvcmUgY2hhbmdpbmcgcGllY2UgcG9zaXRpb25cbiAgICBjbGVhckdob3N0UG9zaXRpb24oKSB7XG4gICAgICAgIGxldCBjb29yZGluYXRlQXJyYXlzID0gT2JqZWN0LnZhbHVlcyh0aGlzLmdob3N0UG9zaXRpb24pO1xuICAgICAgICBjb29yZGluYXRlQXJyYXlzLmZvckVhY2goYXJyYXkgPT4ge1xuICAgICAgICAgICAgYXJyYXkuZm9yRWFjaChjb29yZGluYXRlID0+IHtcbiAgICAgICAgICAgICAgICBsZXQgW3JvdywgY29sXSA9IFtjb29yZGluYXRlWzBdLCBjb29yZGluYXRlWzFdXTtcbiAgICAgICAgICAgICAgICAvLyBwcmV2ZW50IG1ldGhvZCBmcm9tIGNsZWFyaW5nIHBpZWNlIGlmIGl0IGhhcHBlbnMgdG8gYmUgd2hlcmUgdGhlIGdob3N0IHBvc2l0aW9uIHNob3VsZCBiZVxuICAgICAgICAgICAgICAgIGlmICh0aGlzLmZpZWxkW3Jvd10gJiYgdGhpcy5maWVsZFtyb3ddW2NvbF0gPT09IFwieFwiICYmIHJvdyA+PSAwKSB0aGlzLmZpZWxkW3Jvd11bY29sXSA9IDA7XG4gICAgICAgICAgICB9KVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICAvLyBjbGVhcnMgdGhlIGNvbG9yIGNsYXNzZXMgZnJvbSB0aGUgYnJvd3NlciBmaWVsZFxuICAgIGNsZWFyR2hvc3RDbGFzcygpIHtcbiAgICAgICAgbGV0IGZpZWxkQ29sdW1ucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoYC5maWVsZC1jb2x1bW4uZmllbGQtJHt0aGlzLmdhbWVOdW19YCk7XG4gICAgICAgIE9iamVjdC52YWx1ZXModGhpcy5naG9zdFBvc2l0aW9uKS5mb3JFYWNoKGFycmF5ID0+IHtcbiAgICAgICAgICAgIGFycmF5LmZvckVhY2goY29vcmRpbmF0ZSA9PiB7XG4gICAgICAgICAgICAgICAgbGV0IFtyb3csIGNvbF0gPSBbY29vcmRpbmF0ZVswXSwgY29vcmRpbmF0ZVsxXV07XG4gICAgICAgICAgICAgICAgbGV0IGZpZWxkU3F1YXJlID0gZmllbGRDb2x1bW5zW2NvbF0uY2hpbGRyZW5bcm93XTtcbiAgICAgICAgICAgICAgICBpZiAoZmllbGRTcXVhcmUpIHtcbiAgICAgICAgICAgICAgICAgICAgZmllbGRTcXVhcmUuY2xhc3NMaXN0ID0gdGhpcy5jb2xvcnNbdGhpcy5jdXJyZW50UGllY2UuY29sb3JDb2RlXTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICAvLyBmaW5kIGFwcHJvcHJpYXRlIGdob3N0IHBvc2l0aW9uIGFzIHBpZWNlIHBvc2l0aW9uIGNoYW5nZXNcbiAgICBzZXRHaG9zdFBvc2l0aW9uKCkge1xuICAgICAgICBsZXQgZ2hvc3RQb3NpdGlvbiA9IHtcbiAgICAgICAgICAgIHRvcDogdGhpcy5jdXJyZW50UGllY2UucG9zaXRpb24udG9wLm1hcChjb29yZGluYXRlID0+IGNvb3JkaW5hdGUuc2xpY2UoKSksXG4gICAgICAgICAgICBtaWRkbGU6IHRoaXMuY3VycmVudFBpZWNlLnBvc2l0aW9uLm1pZGRsZS5tYXAoY29vcmRpbmF0ZSA9PiBjb29yZGluYXRlLnNsaWNlKCkpLFxuICAgICAgICAgICAgYm90dG9tOiB0aGlzLmN1cnJlbnRQaWVjZS5wb3NpdGlvbi5ib3R0b20ubWFwKGNvb3JkaW5hdGUgPT4gY29vcmRpbmF0ZS5zbGljZSgpKVxuICAgICAgICB9XG4gICAgICAgIGxldCBzdG9wcGVkID0gZmFsc2U7XG4gICAgICAgIHdoaWxlICghc3RvcHBlZCkge1xuICAgICAgICAgICAgbGV0IGhhbmdpbmdTcXVhcmVzID0gdGhpcy5jdXJyZW50UGllY2UuaGFuZ2luZ1NxdWFyZXMoZ2hvc3RQb3NpdGlvbik7XG4gICAgICAgICAgICBoYW5naW5nU3F1YXJlcy5mb3JFYWNoKGNvb3JkaW5hdGUgPT4ge1xuICAgICAgICAgICAgICAgIGxldCBbcm93LCBjb2xdID0gW2Nvb3JkaW5hdGVbMF0sIGNvb3JkaW5hdGVbMV1dO1xuICAgICAgICAgICAgICAgIGlmIChyb3cgPCAwIHx8IHJvdyArIDEgPT09IDIwIHx8IHRoaXMuZmllbGRbcm93ICsgMV1bY29sXSkgc3RvcHBlZCA9IHRydWU7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGlmIChzdG9wcGVkKSBicmVhaztcbiAgICAgICAgICAgIGdob3N0UG9zaXRpb24udG9wID0gZ2hvc3RQb3NpdGlvbi50b3AubWFwKGFycmF5ID0+IFthcnJheVswXSArIDEsIGFycmF5WzFdXSk7XG4gICAgICAgICAgICBnaG9zdFBvc2l0aW9uLm1pZGRsZSA9IGdob3N0UG9zaXRpb24ubWlkZGxlLm1hcChhcnJheSA9PiBbYXJyYXlbMF0gKyAxLCBhcnJheVsxXV0pO1xuICAgICAgICAgICAgZ2hvc3RQb3NpdGlvbi5ib3R0b20gPSBnaG9zdFBvc2l0aW9uLmJvdHRvbS5tYXAoYXJyYXkgPT4gW2FycmF5WzBdICsgMSwgYXJyYXlbMV1dKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmdob3N0UG9zaXRpb24gPSBnaG9zdFBvc2l0aW9uO1xuICAgICAgICB0aGlzLl9wb3B1bGF0ZUdob3N0UG9zaXRpb24oKTtcbiAgICB9XG5cbiAgICAvLyBwb3B1bGF0ZSB0aGlzLmZpZWxkIHdpdGggJ3gnIHdoZXJldmVyIHRoZSBnaG9zdCBwb3NpdGlvbiBpcyBjYWxjdWxhdGVkIHRvIGJlXG4gICAgX3BvcHVsYXRlR2hvc3RQb3NpdGlvbigpIHtcbiAgICAgICAgbGV0IGNvb3JkaW5hdGVBcnJheXMgPSBPYmplY3QudmFsdWVzKHRoaXMuZ2hvc3RQb3NpdGlvbik7XG4gICAgICAgIGNvb3JkaW5hdGVBcnJheXMuZm9yRWFjaChhcnJheSA9PiB7XG4gICAgICAgICAgICBhcnJheS5mb3JFYWNoKGNvb3JkaW5hdGUgPT4ge1xuICAgICAgICAgICAgICAgIGxldCBbcm93LCBjb2xdID0gW2Nvb3JkaW5hdGVbMF0sIGNvb3JkaW5hdGVbMV1dO1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLmZpZWxkW3Jvd10gJiYgdGhpcy5maWVsZFtyb3ddW2NvbF0gIT09IHRoaXMuY3VycmVudFBpZWNlLmNvbG9yQ29kZSkgdGhpcy5maWVsZFtyb3ddW2NvbF0gPSBcInhcIjtcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLnJlbmRlcigpO1xuICAgIH1cblxuICAgIC8vIGhvbGQgcGllY2UgZm9yIGxhdGVyIHVzZSBcbiAgICBob2xkKCkge1xuICAgICAgICBpZiAoIXRoaXMuY2FuSG9sZCkgcmV0dXJuO1xuICAgICAgICB0aGlzLmN1cnJlbnRQaWVjZS5jbGVhclNlbGZGcm9tQm9hcmQodGhpcy5maWVsZCk7IFxuICAgICAgICB0aGlzLnJlbmRlcigpO1xuXG4gICAgICAgIGlmICghdGhpcy5ob2xkUGllY2UpIHtcbiAgICAgICAgICAgIC8vIHBhc3MgY3VycmVudCBwaWVjZSBuYW1lIGludG8gZ2VuZXJhdGUgcGllY2UgaW4gb3JkZXIgdG8gZ2VuZXJhdGUgYSBuZXcgcGllY2UgaW5zdGFuY2VcbiAgICAgICAgICAgIHRoaXMuaG9sZFBpZWNlID0gdGhpcy5fZ2VuZXJhdGVQaWVjZSh0aGlzLmN1cnJlbnRQaWVjZS5uYW1lKTtcbiAgICAgICAgICAgIHRoaXMuc2V0Q3VycmVudFBpZWNlKCk7XG4gICAgICAgICAgICAvLyByZS1yZW5kZXIgbmV4dCBib3hlcyB0byBhcHByb3ByaWF0ZWx5IHNob3cgY3VycmVudCBiYWdcbiAgICAgICAgICAgIHRoaXMuc2hvd0N1cnJlbnRCYWcoKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuY3VycmVudFBpZWNlID0gdGhpcy5fZ2VuZXJhdGVQaWVjZSh0aGlzLmN1cnJlbnRQaWVjZS5uYW1lKTtcbiAgICAgICAgICAgIFt0aGlzLmN1cnJlbnRQaWVjZSwgdGhpcy5ob2xkUGllY2VdID0gW3RoaXMuaG9sZFBpZWNlLCB0aGlzLmN1cnJlbnRQaWVjZV07XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIC8vIGRpc2FibGUgaG9sZC1waWVjZSByaWdodCBhZnRlciBwbGF5ZXIgaG9sZHMgYSBwaWVjZVxuICAgICAgICB0aGlzLmNhbkhvbGQgPSBmYWxzZTtcblxuICAgICAgICB0aGlzLl9wb3B1bGF0ZUhvbGRCb3goKTtcbiAgICB9XG5cbiAgICBfcG9wdWxhdGVIb2xkQm94KCkge1xuICAgICAgICBsZXQgY29sdW1ucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC5ob2xkLWJveC5maWVsZC0ke3RoaXMuZ2FtZU51bX1gKS5jaGlsZHJlbjtcblxuICAgICAgICAvLyByZW1vdmUgY29sb3JzIGZyb20gcHJldmlvdXMgcGllY2VzXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgNTsgaSsrKSB7XG4gICAgICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IDQ7IGorKykge1xuICAgICAgICAgICAgICAgIC8vIGNvbHVtbnMuY2hpbGRyZW4gaXMgbm9kZWxpc3Qgb2YgPGxpcz5cbiAgICAgICAgICAgICAgICBjb2x1bW5zW2ldLmNoaWxkcmVuW2pdLmNsYXNzTmFtZSA9IFwiXCI7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmhvbGRQaWVjZS5kaXNwbGF5U3F1YXJlcy5mb3JFYWNoKHNxdWFyZSA9PiB7XG4gICAgICAgICAgICBsZXQgW2NvbCwgcm93XSA9IFtzcXVhcmVbMF0sIHNxdWFyZVsxXV07XG4gICAgICAgICAgICBjb2x1bW5zW2NvbF0uY2hpbGRyZW5bcm93XS5jbGFzc0xpc3QuYWRkKHRoaXMuY29sb3JzW3RoaXMuaG9sZFBpZWNlLmNvbG9yQ29kZV0pO1xuICAgICAgICB9KVxuXG4gICAgfVxuXG4gICAgLy8gdXNlZCBmb3IgdGhpcy5ob2xkKCk6IGdlbmVyYXRlIGEgbmV3IHBpZWNlIHNvIHRoYXQgYSBob2xkcGllY2UgdGhhdCBpcyByZS1yZW5kZXJlZCBvbiB0aGUgYm9hcmQgd2lsbCBub3Qgc3RhcnQgZnJvbSB0aGUgb2xkIHBvc2l0aW9uXG4gICAgX2dlbmVyYXRlUGllY2UocGllY2VOYW1lKSB7XG4gICAgICAgIHN3aXRjaChwaWVjZU5hbWUpIHtcbiAgICAgICAgICAgIGNhc2UgXCJUUGllY2VcIjpcbiAgICAgICAgICAgICAgICByZXR1cm4gbmV3IFRQaWVjZTtcbiAgICAgICAgICAgIGNhc2UgXCJPUGllY2VcIjpcbiAgICAgICAgICAgICAgICByZXR1cm4gbmV3IE9QaWVjZTtcbiAgICAgICAgICAgIGNhc2UgXCJJUGllY2VcIjpcbiAgICAgICAgICAgICAgICByZXR1cm4gbmV3IElQaWVjZTtcbiAgICAgICAgICAgIGNhc2UgXCJMUGllY2VcIjpcbiAgICAgICAgICAgICAgICByZXR1cm4gbmV3IExQaWVjZTtcbiAgICAgICAgICAgIGNhc2UgXCJKUGllY2VcIjpcbiAgICAgICAgICAgICAgICByZXR1cm4gbmV3IEpQaWVjZTtcbiAgICAgICAgICAgIGNhc2UgXCJTUGllY2VcIjpcbiAgICAgICAgICAgICAgICByZXR1cm4gbmV3IFNQaWVjZTtcbiAgICAgICAgICAgIGNhc2UgXCJaUGllY2VcIjpcbiAgICAgICAgICAgICAgICByZXR1cm4gbmV3IFpQaWVjZTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8vIHRha2Ugb25lIHBpZWNlIGZyb20gbmV4dEJhZyBhbmQgYWRkIHRvIGN1cnJlbnRCYWdcbiAgICBhZGRUb0N1cnJlbnRCYWcoKSB7XG4gICAgICAgIHRoaXMuY3VycmVudEJhZy5wdXNoKHRoaXMubmV4dEJhZy5zaGlmdCgpKTtcbiAgICB9XG5cbiAgICBzaG93Q3VycmVudEJhZygpIHtcbiAgICAgICAgbGV0IGJveGVzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShgbmV4dC1ib3ggZmllbGQtJHt0aGlzLmdhbWVOdW19YCk7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgNTsgaSsrKSB7XG4gICAgICAgICAgICB0aGlzLl9wb3B1bGF0ZU5leHRCb3goYm94ZXNbaV0sIHRoaXMuY3VycmVudEJhZ1tpXSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBfcG9wdWxhdGVOZXh0Qm94KGJveCwgcGllY2UpIHtcbiAgICAgICAgLy8gY29sdW1ucyBpcyBub2RlbGlzdCBvZiA8dWxzPlxuICAgICAgICBsZXQgY29sdW1ucyA9IGJveC5jaGlsZHJlbjtcblxuICAgICAgICAvLyByZW1vdmUgY29sb3JzIGZyb20gcHJldmlvdXMgcGllY2VcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCA1OyBpKyspIHtcbiAgICAgICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgNDsgaisrKSB7XG4gICAgICAgICAgICAgICAgLy8gY29sdW1ucy5jaGlsZHJlbiBpcyBub2RlbGlzdCBvZiA8bGlzPlxuICAgICAgICAgICAgICAgIGNvbHVtbnNbaV0uY2hpbGRyZW5bal0uY2xhc3NOYW1lID0gXCJcIjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC8vIHBvcHVsYXRlIGJveCB3aXRoIG5ldyBwaWVjZVxuICAgICAgICBwaWVjZS5kaXNwbGF5U3F1YXJlcy5mb3JFYWNoKHNxdWFyZSA9PiB7XG4gICAgICAgICAgICBsZXQgW2NvbCwgcm93XSA9IFtzcXVhcmVbMF0sIHNxdWFyZVsxXV07XG4gICAgICAgICAgICBjb2x1bW5zW2NvbF0uY2hpbGRyZW5bcm93XS5jbGFzc0xpc3QuYWRkKHRoaXMuY29sb3JzW3BpZWNlLmNvbG9yQ29kZV0pO1xuICAgICAgICB9KVxuICAgIH1cblxuICAgIC8vIHJlZmlsbCBuZXh0IGJhZywgd2lsbCBvbmx5IGJlIGNhbGxlZCBvbmNlIG5leHRCYWcgYmVjb21lcyBlbXB0eVxuICAgIHJlZmlsbE5leHRCYWcoKSB7XG4gICAgICAgIHRoaXMubmV4dEJhZyA9IHRoaXMuZ2VuZXJhdGVCYWcoKTtcbiAgICB9XG5cbiAgICAvLyBpbXBsZW1lbnRhdGlvbiBvZiBzaHVmZmxlIGZvdW5kIG9uIGh0dHBzOi8vc3RhY2tvdmVyZmxvdy5jb20vcXVlc3Rpb25zLzI0NTA5NTQvaG93LXRvLXJhbmRvbWl6ZS1zaHVmZmxlLWEtamF2YXNjcmlwdC1hcnJheSMyNDUwOTc2XG4gICAgc2h1ZmZsZUJhZyhiYWcpIHtcbiAgICAgICAgdmFyIGN1cnJlbnRJbmRleCA9IGJhZy5sZW5ndGgsIHRlbXBvcmFyeVZhbHVlLCByYW5kb21JbmRleDtcblxuICAgICAgICAvLyBXaGlsZSB0aGVyZSByZW1haW4gZWxlbWVudHMgdG8gc2h1ZmZsZS4uLlxuICAgICAgICB3aGlsZSAoMCAhPT0gY3VycmVudEluZGV4KSB7XG5cbiAgICAgICAgICAgIC8vIFBpY2sgYSByZW1haW5pbmcgZWxlbWVudC4uLlxuICAgICAgICAgICAgcmFuZG9tSW5kZXggPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBjdXJyZW50SW5kZXgpO1xuICAgICAgICAgICAgY3VycmVudEluZGV4IC09IDE7XG5cbiAgICAgICAgICAgIC8vIEFuZCBzd2FwIGl0IHdpdGggdGhlIGN1cnJlbnQgZWxlbWVudC5cbiAgICAgICAgICAgIHRlbXBvcmFyeVZhbHVlID0gYmFnW2N1cnJlbnRJbmRleF07XG4gICAgICAgICAgICBiYWdbY3VycmVudEluZGV4XSA9IGJhZ1tyYW5kb21JbmRleF07XG4gICAgICAgICAgICBiYWdbcmFuZG9tSW5kZXhdID0gdGVtcG9yYXJ5VmFsdWU7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGJhZztcbiAgICB9XG4gICAgLy8gaW1wbGVtZW50YXRpb24gb2Ygc2h1ZmZsZSBmb3VuZCBvbiBodHRwczovL3N0YWNrb3ZlcmZsb3cuY29tL3F1ZXN0aW9ucy8yNDUwOTU0L2hvdy10by1yYW5kb21pemUtc2h1ZmZsZS1hLWphdmFzY3JpcHQtYXJyYXkjMjQ1MDk3NlxuXG4gICAgLy8gbG9vayB0aHJvdWdoIGZpZWxkLCBpZiBmaWVsZFtyb3ddW2NvbF0gY29udGFpbnMgYSBudW1iZXIgPiAwLCBmaWxsIHRoYXQgc3BvdCB3aXRoIHRoZSByZXNwZWN0aXZlIGNvbG9yLiBcbiAgICAvLyBpZiBjb250YWlucyBhbiAneCcsIHBvcHVsYXRlIHdpdGggZ2hvc3QgcGllY2Ugc3R5bGVzLlxuICAgIC8vIGVsc2UsIHJlbW92ZSBjb2xvclxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgLy8gaWYgKHRoaXMuY3VycmVudFBpZWNlLnJpZ2h0TW9zdFsxXSA+IDkgfHwgdGhpcy5jdXJyZW50UGllY2UubGVmdE1vc3RbMV0gPCAwKSByZXR1cm47XG4gICAgICAgIGxldCBmaWVsZENvbHVtbnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKGAuZmllbGQtY29sdW1uLmZpZWxkLSR7dGhpcy5nYW1lTnVtfWApO1xuICAgICAgICB0aGlzLmZpZWxkLmZvckVhY2goKHJvdywgcm93SWR4KSA9PiB7XG4gICAgICAgICAgICByb3cuZm9yRWFjaCgoY29sLCBjb2xJZHgpID0+IHtcbiAgICAgICAgICAgICAgICBsZXQgc3F1YXJlVmFsdWUgPSB0aGlzLmZpZWxkW3Jvd0lkeF1bY29sSWR4XTtcbiAgICAgICAgICAgICAgICBpZiAoc3F1YXJlVmFsdWUgPT09ICd4Jykge1xuICAgICAgICAgICAgICAgICAgICBmaWVsZENvbHVtbnNbY29sSWR4XS5jaGlsZHJlbltyb3dJZHhdLmNsYXNzTGlzdC5hZGQoYHgtJHt0aGlzLmNvbG9yc1t0aGlzLmN1cnJlbnRQaWVjZS5jb2xvckNvZGVdfWApO1xuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoc3F1YXJlVmFsdWUpIHtcbiAgICAgICAgICAgICAgICAgICAgZmllbGRDb2x1bW5zW2NvbElkeF0uY2hpbGRyZW5bcm93SWR4XS5jbGFzc0xpc3QuYWRkKHRoaXMuY29sb3JzW3NxdWFyZVZhbHVlXSk7XG4gICAgICAgICAgICAgICAgICAgIGZpZWxkQ29sdW1uc1tjb2xJZHhdLmNoaWxkcmVuW3Jvd0lkeF0uY2xhc3NMaXN0LnJlbW92ZShgeC0ke3RoaXMuY29sb3JzW3RoaXMuY3VycmVudFBpZWNlLmNvbG9yQ29kZV19YCk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgZmllbGRDb2x1bW5zW2NvbElkeF0uY2hpbGRyZW5bcm93SWR4XS5jbGFzc0xpc3QgPSBcIlwiO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBrZXlMaXN0ZW5lcigpIHtcbiAgICAgICAgZG9jdW1lbnQuYm9keS5hZGRFdmVudExpc3RlbmVyKFwia2V5ZG93blwiLCBldmVudCA9PiB7XG4gICAgICAgICAgICBpZiAodGhpcy5nYW1lSXNPdmVyIHx8IHRoaXMub3Bwb25lbnQuZ2FtZUlzT3ZlcikgcmV0dXJuO1xuICAgICAgICAgICAgdGhpcy5jdXJyZW50UGllY2Uuc2V0T3V0ZXJTcXVhcmVzKCk7XG4gICAgICAgICAgICAvLyB0aGlzLmNsZWFyR2hvc3RQb3NpdGlvbigpO1xuICAgICAgICAgICAgc3dpdGNoKGV2ZW50LndoaWNoKSB7XG4gICAgICAgICAgICAgICAgLy8gdXAga2V5XG4gICAgICAgICAgICAgICAgY2FzZSB0aGlzLmNvbnRyb2xzLnR1cm5SaWdodDpcbiAgICAgICAgICAgICAgICAgICAgLy8gcGFzcyBmaWVsZCBzbyBwaWVjZSBjYW4gY2hlY2sgZmllbGQgd2FsbCBiZWZvcmUgdHVybmluZ1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmNsZWFyR2hvc3RQb3NpdGlvbigpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnRTcGluID0gdGhpcy5jdXJyZW50UGllY2UubW92ZShcInR1cm5SaWdodFwiLCB0aGlzLmZpZWxkKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jdXJyZW50UGllY2UucG9wdWxhdGVGaWVsZCh0aGlzLmZpZWxkKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRHaG9zdFBvc2l0aW9uKCk7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIC8vIEMga2V5XG4gICAgICAgICAgICAgICAgY2FzZSB0aGlzLmNvbnRyb2xzLnR1cm5MZWZ0OlxuICAgICAgICAgICAgICAgICAgICAvLyBwYXNzIGZpZWxkIHNvIHBpZWNlIGNhbiBjaGVjayBmaWVsZCB3YWxsIGJlZm9yZSB0dXJuaW5nXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY2xlYXJHaG9zdFBvc2l0aW9uKCk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY3VycmVudFBpZWNlLm1vdmUoXCJ0dXJuTGVmdFwiLCB0aGlzLmZpZWxkKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jdXJyZW50UGllY2UucG9wdWxhdGVGaWVsZCh0aGlzLmZpZWxkKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRHaG9zdFBvc2l0aW9uKCk7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIC8vIGxlZnQga2V5XG4gICAgICAgICAgICAgICAgY2FzZSB0aGlzLmNvbnRyb2xzLmxlZnQ6XG4gICAgICAgICAgICAgICAgICAgIHRoaXMua2V5SGVsZC5sZWZ0ID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuY3VycmVudFBpZWNlLmxlZnRTaWRlQmxvY2tlZCh0aGlzLmZpZWxkKSkgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMubW92ZVBpZWNlKFwibGVmdFwiKTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgLy8gcmlnaHQga2V5XG4gICAgICAgICAgICAgICAgY2FzZSB0aGlzLmNvbnRyb2xzLnJpZ2h0OlxuICAgICAgICAgICAgICAgICAgICB0aGlzLmtleUhlbGQucmlnaHQgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5jdXJyZW50UGllY2UucmlnaHRTaWRlQmxvY2tlZCh0aGlzLmZpZWxkKSkgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMubW92ZVBpZWNlKFwicmlnaHRcIik7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIC8vIGRvd24ga2V5XG4gICAgICAgICAgICAgICAgY2FzZSB0aGlzLmNvbnRyb2xzLnNvZnREcm9wOlxuICAgICAgICAgICAgICAgICAgICB0aGlzLmtleUhlbGQuZG93biA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMubW92ZVBpZWNlKFwiZG93blwiKTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgLy8gc2hpZnQga2V5XG4gICAgICAgICAgICAgICAgY2FzZSB0aGlzLmNvbnRyb2xzLmhvbGQ6IFxuICAgICAgICAgICAgICAgICAgICB0aGlzLmNsZWFyR2hvc3RQb3NpdGlvbigpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmhvbGQoKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jdXJyZW50UGllY2UucG9wdWxhdGVGaWVsZCh0aGlzLmZpZWxkKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRHaG9zdFBvc2l0aW9uKCk7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIC8vIHNwYWNlIGJhclxuICAgICAgICAgICAgICAgIGNhc2UgdGhpcy5jb250cm9scy5oYXJkRHJvcDpcbiAgICAgICAgICAgICAgICAgICAgLy8gdGhpcy5yZW5kZXIoKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jbGVhckdob3N0UG9zaXRpb24oKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jdXJyZW50UGllY2UuaGFyZERyb3AodGhpcy5maWVsZCk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMucmVuZGVyKCk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY3VycmVudFBpZWNlLnBvcHVsYXRlRmllbGQodGhpcy5maWVsZCk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuaGFuZGxlUGllY2VTdG9wKHRoaXMuaGFuZGxlQ2xlYXIuZHJvcCk7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIC8vIFAga2V5XG4gICAgICAgICAgICAgICAgY2FzZSA4MDpcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5pc1BhdXNlZCA/IHRoaXMuZHJvcFBpZWNlKHRoaXMuZHJvcFNwZWVkKSA6IGNhbmNlbEFuaW1hdGlvbkZyYW1lKHRoaXMuaGFuZGxlQ2xlYXIuZHJvcCk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuaXNQYXVzZWQgPSAhdGhpcy5pc1BhdXNlZDtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLmN1cnJlbnRQaWVjZS5zZXRPdXRlclNxdWFyZXMoKTtcbiAgICAgICAgICAgIHRoaXMucmVuZGVyKCk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGRvY3VtZW50LmJvZHkuYWRkRXZlbnRMaXN0ZW5lcihcImtleXVwXCIsIGV2ZW50ID0+IHtcbiAgICAgICAgICAgIHN3aXRjaCAoZXZlbnQud2hpY2gpIHtcbiAgICAgICAgICAgICAgICBjYXNlIHRoaXMuY29udHJvbHMucmlnaHQ6IFxuICAgICAgICAgICAgICAgICAgICB0aGlzLmtleUhlbGQucmlnaHQgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSB0aGlzLmNvbnRyb2xzLmxlZnQ6IFxuICAgICAgICAgICAgICAgICAgICB0aGlzLmtleUhlbGQubGVmdCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlIHRoaXMuY29udHJvbHMuc29mdERyb3A6IFxuICAgICAgICAgICAgICAgICAgICB0aGlzLmtleUhlbGQuZG93biA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICBicmVhazsgIFxuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBjbGVhckxpbmVzKGxvd2VzdCwgaGlnaGVzdCwgbnVtTGluZXNDbGVhcmVkKSB7XG4gICAgICAgIGlmIChsb3dlc3QgPCAwKSByZXR1cm47XG4gICAgICAgIC8vIGJhc2UgY2FzZTogaWYgd2UgcmVhY2ggYSByb3cgdGhhdCBpcyBoaWdoZXIgdGhhbiB0aGUgaGlnaGVzdCwgdGhlbiByZXR1cm4gbnVtYmVyIG9mIGxpbmVzIHRoYXQgd2VyZSBjbGVhcmVkXG4gICAgICAgIGlmIChsb3dlc3QgPCBoaWdoZXN0KSB7XG4gICAgICAgICAgICByZXR1cm4gbnVtTGluZXNDbGVhcmVkO1xuICAgICAgICB9O1xuICAgICAgICAvLyByZWN1cnNpdmUgY2FzZTogXG4gICAgICAgIC8vIGlmIGxvd2VzdCByb3cgZG9lcyBub3QgY29udGFpbiBhIDAsIGJyaW5nIGFsbCBhYm92ZSByb3dzIGRvd24gb25lIGxldmVsXG4gICAgICAgIGlmICghdGhpcy5maWVsZFtsb3dlc3RdLmluY2x1ZGVzKDApKSB7XG4gICAgICAgICAgICB0aGlzLl9icmluZ0Rvd25GaWVsZChsb3dlc3QpO1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuY2xlYXJMaW5lcyhsb3dlc3QsIGhpZ2hlc3QgKyAxLCBudW1MaW5lc0NsZWFyZWQgKyAxKVxuICAgICAgICAvLyBpZiByb3cgY29udGFpbnMgYSAwLCByb3cgaXMgbm90IGNsZWFyZWQgeWV0IFxuICAgICAgICB9IGVsc2UgaWYgKHRoaXMuZmllbGRbbG93ZXN0XS5pbmNsdWRlcygwKSkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuY2xlYXJMaW5lcyhsb3dlc3QgLSAxLCBoaWdoZXN0LCBudW1MaW5lc0NsZWFyZWQpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgX2JyaW5nRG93bkZpZWxkKHN0YXJ0aW5nUm93KSB7XG4gICAgICAgIGZvciAobGV0IGkgPSBzdGFydGluZ1JvdzsgaSA+IDA7IGktLSkge1xuICAgICAgICAgICAgdGhpcy5maWVsZFtpXSA9IHRoaXMuZmllbGRbaSAtIDFdO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuZmllbGRbMF0gPSBbMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMF07XG4gICAgfVxuXG4gICAgaGFuZGxlUGllY2VTdG9wKCkgeyAgXG4gICAgICAgIC8vIGFsbG93IHBsYXllciB0byBob2xkIHBpZWNlIGFnYWluXG4gICAgICAgIHRoaXMuY2FuSG9sZCA9IHRydWU7XG4gICAgICAgIGxldCBsb3dlc3QgPSB0aGlzLmN1cnJlbnRQaWVjZS5wb3NpdGlvbi5ib3R0b21bMF1bMF07XG4gICAgICAgIC8vIGluIGNhc2Ugb2YgbGluZSBwaWVjZSwgd2hpY2ggbWF5IG5vdCBoYXZlIHRoaXMucG9zaXRpb24udG9wXG4gICAgICAgIGxldCBoaWdoZXN0ID0gIXRoaXMuY3VycmVudFBpZWNlLnBvc2l0aW9uLnRvcC5sZW5ndGggPyBsb3dlc3QgOiB0aGlzLmN1cnJlbnRQaWVjZS5wb3NpdGlvbi50b3BbMF1bMF07XG4gICAgICAgIC8vIGNoZWNrIGlmIGEgVFBpZWNlIHdhcyBzcHVuIGluIHBsYWNlXG4gICAgICAgIGlmICh0aGlzLmN1cnJlbnRQaWVjZS5uYW1lID09PSBcIlRQaWVjZVwiKSB7XG4gICAgICAgICAgICBsZXQgW2xlZnRNb3N0Um93LCByaWdodE1vc3RSb3ddID0gW3RoaXMuY3VycmVudFBpZWNlLmxlZnRNb3N0WzBdLCB0aGlzLmN1cnJlbnRQaWVjZS5yaWdodE1vc3RbMF1dO1xuICAgICAgICAgICAgbGV0IFtsZWZ0TW9zdENvbCwgcmlnaHRNb3N0Q29sXSA9IFt0aGlzLmN1cnJlbnRQaWVjZS5sZWZ0TW9zdFsxXSwgdGhpcy5jdXJyZW50UGllY2UucmlnaHRNb3N0WzFdXTtcbiAgICAgICAgICAgIGlmICh0aGlzLmZpZWxkW2xlZnRNb3N0Um93IC0gMV0gJiYgdGhpcy5maWVsZFtyaWdodE1vc3RSb3cgLSAxXSkge1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLmZpZWxkW2xlZnRNb3N0Um93IC0gMV1bbGVmdE1vc3RDb2xdIHx8IHRoaXMuZmllbGRbcmlnaHRNb3N0Um93IC0gMV1bcmlnaHRNb3N0Q29sXSkgdGhpcy50U3BpbiA9IHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgbGV0IG51bUxpbmVzQ2xlYXJlZCA9IHRoaXMuY2xlYXJMaW5lcyhsb3dlc3QsIGhpZ2hlc3QsIDApO1xuXG4gICAgICAgIC8vIGluIHRoZSBjYXNlIG9mIG11bHRpcGxheWVyLCBzZW5kIGNsZWFyZWQgbGluZXMgdG8gb3Bwb25lbnQgYW5kIHJlY2VpdmUgcG90ZW50aWFsIGxpbmVzXG4gICAgICAgIGlmICh0aGlzLm9wcG9uZW50KSB7XG4gICAgICAgICAgICBpZiAobnVtTGluZXNDbGVhcmVkID4gMCkge1xuICAgICAgICAgICAgICAgIHRoaXMuY29tYm8gKz0gMTtcbiAgICAgICAgICAgICAgICBsZXQgbnVtTGluZXNcbiAgICAgICAgICAgICAgICBpZiAobnVtTGluZXNDbGVhcmVkIDwgNCkge1xuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5jdXJyZW50UGllY2UubmFtZSA9PT0gXCJUUGllY2VcIiAmJiB0aGlzLnRTcGluKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBudW1MaW5lcyA9IG51bUxpbmVzQ2xlYXJlZCA9PT0gMyA/IDYgOiA0O1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgbnVtTGluZXMgPSBudW1MaW5lc0NsZWFyZWQgLSAxO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy50U3BpblN0cmVhayA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgbnVtTGluZXMgPSA0O1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIG51bUxpbmVzICs9IHRoaXMuY29tYm9HdWlkZVt0aGlzLmNvbWJvXTtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy50U3BpblN0cmVhaykgbnVtTGluZXMgKz0gMjtcblxuICAgICAgICAgICAgICAgIGlmICh0aGlzLnVwY29taW5nTGluZXMgPiAwKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMudXBjb21pbmdMaW5lcyAtPSBudW1MaW5lcztcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMudXBjb21pbmdMaW5lcyA8IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMub3Bwb25lbnQuYWRkTGluZXNUb1F1ZXVlKE1hdGguYWJzKHRoaXMudXBjb21pbmdMaW5lcykpO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy51cGNvbWluZ0xpbmVzID0gMDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGFkanVzdFF1ZXVlSGVpZ2h0KHRoaXMuZ2FtZU51bSwgMCk7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBhZGp1c3RRdWV1ZUhlaWdodCh0aGlzLmdhbWVOdW0sIHRoaXMudXBjb21pbmdMaW5lcyAqIDUpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5vcHBvbmVudC5hZGRMaW5lc1RvUXVldWUobnVtTGluZXMpO1xuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy50U3BpbiA9PT0gdHJ1ZSkgdGhpcy50U3BpblN0cmVhayA9IHRydWU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLmNvbWJvID0gLTE7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMudXBjb21pbmdMaW5lcyA+IDApIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5yZWNlaXZlVXBjb21pbmdMaW5lcyh0aGlzLnVwY29taW5nTGluZXMpO1xuICAgICAgICAgICAgICAgICAgICBhZGp1c3RRdWV1ZUhlaWdodCh0aGlzLmdhbWVOdW0sIDApO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLnNjb3JlS2VlcGVyLmFkZFRvU2NvcmUobnVtTGluZXNDbGVhcmVkKTtcbiAgICAgICAgfVxuICAgICAgICAvLyByZXNldCB0U3BpbiB0cmFja2VyXG4gICAgICAgIHRoaXMudFNwaW4gPSBmYWxzZVxuICAgICAgICB0aGlzLmNsZWFyR2hvc3RDbGFzcygpO1xuICAgICAgICBjYW5jZWxBbmltYXRpb25GcmFtZSh0aGlzLmhhbmRsZUNsZWFyLmRyb3ApO1xuICAgICAgICAvLyB0aGlzLnN0YXJ0RWxldmF0aW5nKCk7XG4gICAgICAgIHRoaXMucGxheSgpO1xuICAgIH1cblxuICAgIGRyb3BQaWVjZShmcHMpIHtcbiAgICAgICAgLy8gRG8gd2hhdGV2ZXJcbiAgICAgICAgdGhpcy5hbmltYXRlLmRyb3AuZnBzSW50ZXJ2YWwgPSAxMDAwIC8gZnBzO1xuICAgICAgICB0aGlzLmFuaW1hdGUuZHJvcC50aGVuID0gRGF0ZS5ub3coKTtcbiAgICAgICAgdGhpcy5hbmltYXRlLmRyb3Auc3RhcnRUaW1lID0gdGhpcy50aGVuO1xuICAgICAgICB0aGlzLmRyb3AodGhpcy5maWVsZCk7XG4gICAgfVxuXG4gICAgLy8gaW5zcGlyYXRpb24gZm9yIHRocm90dGxpbmcgcmVxdWVzdEFuaW1hdGlvbkZyYW1lIGZyb20gaHR0cHM6Ly9zdGFja292ZXJmbG93LmNvbS9xdWVzdGlvbnMvMTk3NjQwMTgvY29udHJvbGxpbmctZnBzLXdpdGgtcmVxdWVzdGFuaW1hdGlvbmZyYW1lXG4gICAgZHJvcCgpIHtcbiAgICAgICAgdGhpcy5oYW5kbGVDbGVhci5kcm9wID0gcmVxdWVzdEFuaW1hdGlvbkZyYW1lKCgpID0+IHRoaXMuZHJvcCh0aGlzLmZpZWxkKSk7XG4gICAgICAgIHRoaXMuYW5pbWF0ZS5kcm9wLm5vdyA9IERhdGUubm93KCk7XG4gICAgICAgIGxldCBlbGFwc2VkID0gdGhpcy5hbmltYXRlLmRyb3Aubm93IC0gdGhpcy5hbmltYXRlLmRyb3AudGhlbjtcbiAgICAgICAgaWYgKGVsYXBzZWQgPiB0aGlzLmFuaW1hdGUuZHJvcC5mcHNJbnRlcnZhbCkge1xuICAgICAgICAgICAgLy8gR2V0IHJlYWR5IGZvciBuZXh0IGZyYW1lIGJ5IHNldHRpbmcgdGhlbj1ub3csIGFkanVzdGluZyBmb3Igc3BlY2lmaWVkIGZwc0ludGVydmFsIG5vdCBiZWluZyBhIG11bHRpcGxlIG9mIFJBRidzIGludGVydmFsICgxNi43bXMpXG4gICAgICAgICAgICB0aGlzLmFuaW1hdGUuZHJvcC50aGVuID0gdGhpcy5hbmltYXRlLmRyb3Aubm93IC0gKGVsYXBzZWQgJSB0aGlzLmFuaW1hdGUuZHJvcC5mcHNJbnRlcnZhbCk7XG4gICAgICAgICAgICB0aGlzLmN1cnJlbnRQaWVjZS5wb3B1bGF0ZUZpZWxkKHRoaXMuZmllbGQpO1xuICAgICAgICAgICAgdGhpcy5yZW5kZXIoKTtcbiAgICAgICAgICAgIGlmICghdGhpcy5jdXJyZW50UGllY2UuaXNGYWxsaW5nKHRoaXMuZmllbGQpKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5oYW5kbGVQaWVjZVN0b3AodGhpcy5oYW5kbGVDbGVhci5kcm9wKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIHByZXZlbnRzIGluY29taW5nIHBpZWNlIGZyb20gZGVsZXRpbmcgYSBwaWVjZSBkaXJlY3RseSBiZWxvdyBkdXJpbmcgaXRzIGluaXRpYWwgcmVuZGVyXG4gICAgICAgICAgICBpZiAodGhpcy5jdXJyZW50UGllY2UuYm90dG9tTW9zdFswXSAhPSAwIHx8IHRoaXMuY3VycmVudFBpZWNlLmlzRmFsbGluZyh0aGlzLmZpZWxkKSkgdGhpcy5jdXJyZW50UGllY2UuZHJvcCh0aGlzLmZpZWxkKTtcbiAgICAgICAgICAgIHRoaXMuY3VycmVudFBpZWNlLnBvcHVsYXRlRmllbGQodGhpcy5maWVsZCk7IC8vIGtlZXAgb25seSBvbmUgcG9wdWxhdGUgZmllbGQ/XG4gICAgICAgICAgICB0aGlzLnJlbmRlcigpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgbW92ZVBpZWNlKGRpcmVjdGlvbikge1xuICAgICAgICAvLyBEbyB3aGF0ZXZlclxuICAgICAgICB0aGlzLmFuaW1hdGVbZGlyZWN0aW9uXS5mcHNJbnRlcnZhbCA9IDEwMDAgLyB0aGlzLm1vdmVTcGVlZDtcbiAgICAgICAgdGhpcy5hbmltYXRlW2RpcmVjdGlvbl0udGhlbiA9IERhdGUubm93KCk7XG4gICAgICAgIHRoaXMuYW5pbWF0ZVtkaXJlY3Rpb25dLnN0YXJ0VGltZSA9IHRoaXMuYW5pbWF0ZVtkaXJlY3Rpb25dLnRoZW47XG4gICAgICAgIHRoaXMubW92ZShkaXJlY3Rpb24pO1xuICAgIH1cblxuICAgIC8vIGluc3BpcmF0aW9uIGZvciB0aHJvdHRsaW5nIHJlcXVlc3RBbmltYXRpb25GcmFtZSBmcm9tIGh0dHBzOi8vc3RhY2tvdmVyZmxvdy5jb20vcXVlc3Rpb25zLzE5NzY0MDE4L2NvbnRyb2xsaW5nLWZwcy13aXRoLXJlcXVlc3RhbmltYXRpb25mcmFtZVxuICAgIG1vdmUoZGlyZWN0aW9uKSB7XG4gICAgICAgIHRoaXMuaGFuZGxlQ2xlYXJbZGlyZWN0aW9uXSA9IHJlcXVlc3RBbmltYXRpb25GcmFtZSgoKSA9PiB0aGlzLm1vdmUoZGlyZWN0aW9uKSk7XG4gICAgICAgIGlmICghdGhpcy5rZXlIZWxkW2RpcmVjdGlvbl0pIGNhbmNlbEFuaW1hdGlvbkZyYW1lKHRoaXMuaGFuZGxlQ2xlYXJbZGlyZWN0aW9uXSk7XG4gICAgICAgIHRoaXMuYW5pbWF0ZVtkaXJlY3Rpb25dLm5vdyA9IERhdGUubm93KCk7XG4gICAgICAgIGxldCBlbGFwc2VkID0gdGhpcy5hbmltYXRlW2RpcmVjdGlvbl0ubm93IC0gdGhpcy5hbmltYXRlW2RpcmVjdGlvbl0udGhlbjtcbiAgICAgICAgaWYgKGVsYXBzZWQgPiB0aGlzLmFuaW1hdGVbZGlyZWN0aW9uXS5mcHNJbnRlcnZhbCkge1xuICAgICAgICAgICAgLy8gR2V0IHJlYWR5IGZvciBuZXh0IGZyYW1lIGJ5IHNldHRpbmcgdGhlbj1ub3csIGFkanVzdGluZyBmb3Igc3BlY2lmaWVkIGZwc0ludGVydmFsIG5vdCBiZWluZyBhIG11bHRpcGxlIG9mIFJBRidzIGludGVydmFsICgxNi43bXMpXG4gICAgICAgICAgICB0aGlzLmFuaW1hdGVbZGlyZWN0aW9uXS50aGVuID0gdGhpcy5hbmltYXRlW2RpcmVjdGlvbl0ubm93IC0gKGVsYXBzZWQgJSB0aGlzLmFuaW1hdGVbZGlyZWN0aW9uXS5mcHNJbnRlcnZhbCk7XG5cbiAgICAgICAgICAgIC8vIHByZXZlbnQgcGllY2UgZnJvbSBtb3ZpbmcgaWYgaXQgaXMgYmxvY2tlZCBvciBpZiBib3RoIGxlZnQgYW5kIHJpZ2h0IGFycm93IGtleXMgYXJlIGhlbGQgZG93blxuICAgICAgICAgICAgaWYgKFxuICAgICAgICAgICAgICAgIGRpcmVjdGlvbiA9PT0gXCJyaWdodFwiICYmIHRoaXMuY3VycmVudFBpZWNlLnJpZ2h0U2lkZUJsb2NrZWQodGhpcy5maWVsZCkgXG4gICAgICAgICAgICAgICAgfHwgXG4gICAgICAgICAgICAgICAgZGlyZWN0aW9uID09PSBcImxlZnRcIiAmJiB0aGlzLmN1cnJlbnRQaWVjZS5sZWZ0U2lkZUJsb2NrZWQodGhpcy5maWVsZCkgXG4gICAgICAgICAgICAgICAgfHwgXG4gICAgICAgICAgICAgICAgZGlyZWN0aW9uID09PSBcImRvd25cIiAmJiAhdGhpcy5jdXJyZW50UGllY2UuaXNGYWxsaW5nKHRoaXMuZmllbGQpXG4gICAgICAgICAgICAgICAgfHwgXG4gICAgICAgICAgICAgICAgdGhpcy5rZXlIZWxkLnJpZ2h0ICYmIHRoaXMua2V5SGVsZC5sZWZ0XG4gICAgICAgICAgICApIHJldHVybjsgXG5cbiAgICAgICAgICAgIHRoaXMuY3VycmVudFBpZWNlLm1vdmUoZGlyZWN0aW9uKTtcblxuICAgICAgICAgICAgdGhpcy5jdXJyZW50UGllY2UucG9wdWxhdGVGaWVsZCh0aGlzLmZpZWxkKTtcblxuICAgICAgICAgICAgLy8gZG9uJ3QgbmVlZCB0byByZS1wb3B1bGF0ZSBnaG9zdCBwb3NpdGlvbiBpZiB0aGUgcGllY2UgaXMgc29mdC1kcm9wcGluZ1xuICAgICAgICAgICAgaWYgKGRpcmVjdGlvbiAhPT0gXCJkb3duXCIpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmNsZWFyR2hvc3RQb3NpdGlvbigpO1xuICAgICAgICAgICAgICAgIHRoaXMuc2V0R2hvc3RQb3NpdGlvbigpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB0aGlzLnJlbmRlcigpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgaGFuZGxlVG9wUGllY2UoKSB7XG4gICAgICAgIGxldCBhdFRvcCA9IGZhbHNlO1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgd2hpbGUgKHRoaXMuZmllbGRbdGhpcy5jdXJyZW50UGllY2UucG9zaXRpb24uYm90dG9tWzBdWzBdXVszXSB8fCB0aGlzLmZpZWxkW3RoaXMuY3VycmVudFBpZWNlLnBvc2l0aW9uLmJvdHRvbVswXVswXV1bNF0gfHwgdGhpcy5maWVsZFt0aGlzLmN1cnJlbnRQaWVjZS5wb3NpdGlvbi5ib3R0b21bMF1bMF1dWzVdIHx8IHRoaXMuZmllbGRbdGhpcy5jdXJyZW50UGllY2UucG9zaXRpb24uYm90dG9tWzBdWzBdXVs2XSkge1xuICAgICAgICAgICAgICAgIHRoaXMuY3VycmVudFBpZWNlLm1vdmUoXCJ1cFwiLCB0aGlzLmZpZWxkKTtcbiAgICAgICAgICAgICAgICBhdFRvcCA9IHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gY2F0Y2gge1xuICAgICAgICAgICAgdGhpcy5nYW1lT3Zlcih0aGlzLm9wcG9uZW50LmdhbWVOdW0pO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBhdFRvcDtcbiAgICB9XG4gICAgXG4gICAgcGxheSgpIHtcbiAgICAgICAgdGhpcy5zZXRDdXJyZW50UGllY2UoKTtcbiAgICAgICAgdGhpcy5oYW5kbGVUb3BQaWVjZSgpO1xuICAgICAgICB0aGlzLmN1cnJlbnRQaWVjZS5wb3B1bGF0ZUZpZWxkKHRoaXMuZmllbGQpO1xuICAgICAgICB0aGlzLmFkZFRvQ3VycmVudEJhZygpO1xuICAgICAgICB0aGlzLnNob3dDdXJyZW50QmFnKCk7XG4gICAgICAgIGlmICghdGhpcy5uZXh0QmFnLmxlbmd0aCkgdGhpcy5yZWZpbGxOZXh0QmFnKCk7XG4gICAgICAgIHRoaXMuc2V0R2hvc3RQb3NpdGlvbigpO1xuICAgICAgICAvLyBkcm9wIHBpZWNlIGF0IGdpdmVuIGZwc1xuICAgICAgICB0aGlzLmRyb3BQaWVjZSh0aGlzLmRyb3BTcGVlZCk7ICAgIFxuICAgIH1cblxuICAgIGdhbWVPdmVyKHdpbm5lcikge1xuICAgICAgICB0aGlzLmRyb3BTcGVlZCA9IDA7XG4gICAgICAgIGxldCBnYW1lT3ZlclNjcmVlbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIGdhbWVPdmVyU2NyZWVuLmNsYXNzTGlzdC5hZGQoXCJnYW1lLW92ZXItZGl2XCIpO1xuICAgICAgICBcbiAgICAgICAgbGV0IGdhbWVPdmVySGVhZGluZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMlwiKTtcbiAgICAgICAgZ2FtZU92ZXJIZWFkaW5nLmNsYXNzTGlzdC5hZGQoXCJnYW1lLW92ZXItaGVhZGluZ1wiKTtcblxuICAgICAgICBnYW1lT3ZlckhlYWRpbmcuaW5uZXJIVE1MID0gXCJHQU1FIE9WRVJcIjtcbiAgICAgICAgZ2FtZU92ZXJTY3JlZW4uYXBwZW5kKGdhbWVPdmVySGVhZGluZyk7XG5cbiAgICAgICAgbGV0IHdpbm5lckhlYWRpbmc7XG4gICAgICAgIGlmICh3aW5uZXIpICB7XG4gICAgICAgICAgICB3aW5uZXJIZWFkaW5nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgyXCIpO1xuICAgICAgICAgICAgd2lubmVySGVhZGluZy5jbGFzc0xpc3QuYWRkKFwiZ2FtZS1vdmVyLWhlYWRpbmdcIik7XG4gICAgICAgICAgICB3aW5uZXJIZWFkaW5nLmlubmVySFRNTCA9IGBQTEFZRVIgJHt3aW5uZXJ9IFdJTlNgO1xuICAgICAgICAgICAgZ2FtZU92ZXJTY3JlZW4uYXBwZW5kKHdpbm5lckhlYWRpbmcpXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBsZXQgc2NvcmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpO1xuICAgICAgICAgICAgc2NvcmUuY2xhc3NMaXN0LmFkZChcImdhbWUtb3Zlci1oZWFkaW5nXCIpO1xuICAgICAgICAgICAgc2NvcmUuaW5uZXJIVE1MID0gYCR7dGhpcy5zY29yZUtlZXBlci5nZXRTY29yZSgpfSBQb2ludHNgO1xuICAgICAgICAgICAgZ2FtZU92ZXJTY3JlZW4uYXBwZW5kKHNjb3JlKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoZ2FtZU92ZXJTY3JlZW4pO1xuXG4gICAgICAgIHRoaXMuZ2FtZUlzT3ZlciA9IHRydWU7XG4gICAgICAgIGlmICh0aGlzLm9wcG9uZW50KSB7XG4gICAgICAgICAgICBjYW5jZWxBbmltYXRpb25GcmFtZSh0aGlzLm9wcG9uZW50LmhhbmRsZUNsZWFyLmRyb3ApO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5zdG9wVGltZXIoKTtcbiAgICAgICAgICAgIGNsZWFySW50ZXJ2YWwodGhpcy5jbGVhckVsZXZhdGVJbnRlcnZhbCk7XG4gICAgICAgICAgICBjbGVhckludGVydmFsKHRoaXMuY2xlYXJFbGV2YXRpb24pO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLy8gbXVsdGlwbGF5ZXIgXG4gICAgc2V0T3Bwb25lbnQocGxheWVyKSB7XG4gICAgICAgIHRoaXMub3Bwb25lbnQgPSBwbGF5ZXI7XG4gICAgfVxuXG4gICAgYWRkTGluZXNUb1F1ZXVlKG51bUxpbmVzKSB7XG4gICAgICAgIHRoaXMudXBjb21pbmdMaW5lcyArPSBudW1MaW5lcztcbiAgICAgICAgbGV0IHBlcmNlbnRhZ2UgPSB0aGlzLnVwY29taW5nTGluZXMgKiA1O1xuICAgICAgICBhZGp1c3RRdWV1ZUhlaWdodCh0aGlzLmdhbWVOdW0sIHBlcmNlbnRhZ2UpO1xuICAgIH1cblxuICAgIHJlY2VpdmVVcGNvbWluZ0xpbmVzKCkge1xuICAgICAgICBsZXQgZ2FyYmFnZUxpbmVzID0gW107XG4gICAgICAgIGxldCBudW1MaW5lcyA9IHRoaXMudXBjb21pbmdMaW5lcztcbiAgICAgICAgbGV0IHJhbmRvbUhvbGU7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbnVtTGluZXM7IGkrKykge1xuICAgICAgICAgICAgaWYgKGkgJSAyID09PSAwKSByYW5kb21Ib2xlID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogOSk7XG4gICAgICAgICAgICBsZXQgZ2FyYmFnZVJvdyA9IFs4LCA4LCA4LCA4LCA4LCA4LCA4LCA4LCA4LCA4XTtcbiAgICAgICAgICAgIGdhcmJhZ2VSb3dbcmFuZG9tSG9sZV0gPSAwO1xuICAgICAgICAgICAgZ2FyYmFnZUxpbmVzLnB1c2goZ2FyYmFnZVJvdyk7XG4gICAgICAgIH1cbiAgICAgICAgLy8gaWYgcGxheWVyIHJlYWNoZXMgdGhlIHRvcCwgcGxheWVyIGxvc2VzXG4gICAgICAgIC8vIHNsaWNlIGFsbG93cyBwbGF5ZXIgdG8gY29udGludWUgcGxheWluZyBpZiB0b3AgbWlkZGxlIGlzIGNsZWFyXG4gICAgICAgIGlmICh0aGlzLmZpZWxkW251bUxpbmVzIC0gMV0gJiYgIXRoaXMuZmllbGRbbnVtTGluZXMgLSAxXS5zbGljZSgyLDcpLmluY2x1ZGVzKDApKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5maWVsZCA9IHRoaXMuZmllbGQuc2xpY2UobnVtTGluZXMsIDIwKS5jb25jYXQoZ2FyYmFnZUxpbmVzKTtcbiAgICAgICAgdGhpcy51cGNvbWluZ0xpbmVzID0gMDtcbiAgICAgICAgdGhpcy5yZW5kZXIoKTtcbiAgICB9XG5cbiAgICAvLyBzaW5nbGUgcGxheWVyIGxvZ2ljXG4gICAgc3RhcnRFbGV2YXRpbmcoZWxldmF0ZURlbGF5KSB7XG4gICAgICAgIHRoaXMuY2xlYXJFbGV2YXRlSW50ZXJ2YWwgPSBzZXRJbnRlcnZhbCgoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLmNsZWFyR2hvc3RQb3NpdGlvbigpO1xuICAgICAgICAgICAgdGhpcy5jdXJyZW50UGllY2UuY2xlYXJTZWxmRnJvbUJvYXJkKHRoaXMuZmllbGQpO1xuICAgICAgICAgICAgdGhpcy51cGNvbWluZ0xpbmVzICs9IDE7XG4gICAgICAgICAgICB0aGlzLnJlY2VpdmVVcGNvbWluZ0xpbmVzKCk7XG4gICAgICAgICAgICB0aGlzLnNldEdob3N0UG9zaXRpb24oKTtcbiAgICAgICAgICAgIHRoaXMuY3VycmVudFBpZWNlLnBvcHVsYXRlRmllbGQodGhpcy5maWVsZCk7XG4gICAgICAgICAgICB0aGlzLnJlbmRlcigpO1xuICAgICAgICB9LCBlbGV2YXRlRGVsYXkpXG4gICAgfVxuXG4gICAgYWRqdXN0RWxldmF0ZSgpIHtcbiAgICAgICAgdGhpcy5jbGVhckVsZXZhdGlvbiA9IHNldEludGVydmFsKCgpID0+IHtcbiAgICAgICAgICAgIGlmICh0aGlzLmNsZWFyRWxldmF0ZUludGVydmFsKSBjbGVhckludGVydmFsKHRoaXMuY2xlYXJFbGV2YXRlSW50ZXJ2YWwpO1xuICAgICAgICAgICAgaWYgKHRoaXMuZWxldmF0ZURlbGF5ID4gMjAwMCkgdGhpcy5lbGV2YXRlRGVsYXkgLT0gMjAwO1xuICAgICAgICAgICAgdGhpcy5zdGFydEVsZXZhdGluZyh0aGlzLmVsZXZhdGVEZWxheSk7XG4gICAgICAgIH0sIDEwMDAwKTtcbiAgICB9XG5cbiAgICBzdGFydFRpbWVyKCkge1xuICAgICAgICBsZXQgbWludXRlcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5taW51dGVzJyk7XG4gICAgICAgIGxldCBzZWNvbmRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNlY29uZHMnKTtcbiAgICAgICAgdGhpcy5jbGVhclRpbWVyID0gc2V0SW50ZXJ2YWwoKCkgPT4ge1xuICAgICAgICAgICAgbGV0IG9sZFNlY29uZCA9IE51bWJlcihzZWNvbmRzLmlubmVySFRNTCk7XG4gICAgICAgICAgICBsZXQgb2xkTWludXRlID0gTnVtYmVyKG1pbnV0ZXMuaW5uZXJIVE1MKTtcbiAgICAgICAgICAgIGlmIChvbGRTZWNvbmQgKyAxID09PSA2MCkge1xuICAgICAgICAgICAgICAgIHNlY29uZHMuaW5uZXJIVE1MID0gMDtcbiAgICAgICAgICAgICAgICBtaW51dGVzLmlubmVySFRNTCA9IG9sZE1pbnV0ZSArIDE7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGxldCBuZXdTZWNvbmRzID0gTnVtYmVyKHNlY29uZHMuaW5uZXJIVE1MKSArIDEgPCAxMCA/IGAwJHtOdW1iZXIoc2Vjb25kcy5pbm5lckhUTUwpICsgMX1gIDogTnVtYmVyKHNlY29uZHMuaW5uZXJIVE1MKSArIDE7XG4gICAgICAgICAgICAgICAgc2Vjb25kcy5pbm5lckhUTUwgPSBuZXdTZWNvbmRzO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LCAxMDAwKVxuICAgIH1cblxuICAgIHN0b3BUaW1lcigpIHtcbiAgICAgICAgY2xlYXJJbnRlcnZhbCh0aGlzLmNsZWFyVGltZXIpO1xuICAgIH1cblxuICAgIGNoYW5nZUNvbnRyb2xzKCkge1xuICAgICAgICB0aGlzLmNvbnRyb2xzID0geyBsZWZ0OiAzNywgcmlnaHQ6IDM5LCB0dXJuUmlnaHQ6IDM4LCBzb2Z0RHJvcDogNDAsIGhvbGQ6IDE2LCB0dXJuTGVmdDogNjcsIGhhcmREcm9wOiAzMiB9XG4gICAgfVxufSIsImltcG9ydCBNZW51IGZyb20gJy4vbWVudS9tZW51J1xuXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCAoKSA9PiB7XG4gICAgY29uc3QgbWVudSA9IG5ldyBNZW51O1xuICAgIG1lbnUucmVuZGVyTWVudSgpO1xufSk7IiwiaW1wb3J0IEdhbWUgZnJvbSAnLi4vZ2FtZS9nYW1lJztcbmltcG9ydCBGaWVsZCBmcm9tICcuLi9maWVsZC9maWVsZCc7XG5pbXBvcnQgTXVsdGlwbGF5ZXIgZnJvbSAnLi4vbXVsdGlwbGF5ZXIvbXVsdGlwbGF5ZXInO1xuaW1wb3J0IE1vZGFsIGZyb20gJy4uL21vZGFsL21vZGFsJztcbmltcG9ydCBTaW5nbGVQbGF5ZXJDb250ZW50IGZyb20gJy4uL21vZGFsL3NpbmdsZVBsYXllckNvbnRlbnQnO1xuaW1wb3J0IE11bHRpcGxheWVyQ29udGVudCBmcm9tICcuLi9tb2RhbC9tdWx0aXBsYXllckNvbnRlbnQnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNZW51IHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5tZW51ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJtZW51XCIpO1xuXG4gICAgICAgIHRoaXMub3B0aW9uc1BsYXllcjEgPSB7IGdhbWVOdW06IDEsIG1vdmVTcGVlZDogMjAsIGNvbnRyb2xzOiB7IGxlZnQ6IDY1LCByaWdodDogNjgsIHR1cm5SaWdodDogODcsIHNvZnREcm9wOiA4MywgaG9sZDogODEsIHR1cm5MZWZ0OiAxOTIsIGhhcmREcm9wOiA0OSB9IH1cbiAgICAgICAgdGhpcy5vcHRpb25zUGxheWVyMiA9IHsgZ2FtZU51bTogMiwgbW92ZVNwZWVkOiAyMCwgY29udHJvbHM6IHsgbGVmdDogMzcsIHJpZ2h0OiAzOSwgdHVyblJpZ2h0OiAzOCwgc29mdERyb3A6IDQwLCBob2xkOiAxNiwgdHVybkxlZnQ6IDc1LCBoYXJkRHJvcDogMTkwIH0gfVxuICAgICAgICAgICAgXG5cbiAgICAgICAgdGhpcy5nYW1lMSA9IG5ldyBHYW1lKHRoaXMub3B0aW9uc1BsYXllcjEpO1xuICAgICAgICB0aGlzLmdhbWUyID0gbmV3IEdhbWUodGhpcy5vcHRpb25zUGxheWVyMik7XG5cbiAgICAgICAgdGhpcy5maWVsZDEgPSBuZXcgRmllbGQoMSk7XG4gICAgICAgIHRoaXMuZmllbGQyID0gbmV3IEZpZWxkKDIpO1xuXG4gICAgICAgIHRoaXMubXVsdGlwbGF5ZXJNb2RlID0gbmV3IE11bHRpcGxheWVyKHRoaXMuZ2FtZTEsIHRoaXMuZ2FtZTIpO1xuXG4gICAgICAgIHRoaXMuZmllbGRDb250YWluZXIxID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJmaWVsZC1jb250YWluZXItMVwiKTtcbiAgICAgICAgdGhpcy5maWVsZENvbnRhaW5lcjIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImZpZWxkLWNvbnRhaW5lci0yXCIpO1xuXG4gICAgICAgIHRoaXMuc2luZ2xlUGxheWVyQ29udGVudCA9IG5ldyBTaW5nbGVQbGF5ZXJDb250ZW50KCk7XG4gICAgICAgIHRoaXMubXVsdGlwbGF5ZXJDb250ZW50ID0gbmV3IE11bHRpcGxheWVyQ29udGVudCgpO1xuICAgICAgICB0aGlzLm1vZGFsID0gbmV3IE1vZGFsKCk7XG4gICAgfVxuXG4gICAgcmVuZGVyQnV0dG9ucygpIHtcbiAgICAgICAgbGV0IHNpbmdsZVBsYXllckJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIGxldCBtdWx0aXBsYXllckJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5cbiAgICAgICAgc2luZ2xlUGxheWVyQnV0dG9uLmNsYXNzTGlzdC5hZGQoXCJzaW5nbGUtcGxheWVyLWJ1dHRvblwiKTtcbiAgICAgICAgbXVsdGlwbGF5ZXJCdXR0b24uY2xhc3NMaXN0LmFkZChcIm11bHRpcGxheWVyLWJ1dHRvblwiKTtcblxuICAgICAgICBzaW5nbGVQbGF5ZXJCdXR0b24uaW5uZXJIVE1MID0gXCJTaW5nbGUgUGxheWVyXCI7XG4gICAgICAgIG11bHRpcGxheWVyQnV0dG9uLmlubmVySFRNTCA9IFwiTXVsdGlwbGF5ZXJcIjtcblxuICAgICAgICB0aGlzLmFkZEV2ZW50TGlzdGVuZXJzKHNpbmdsZVBsYXllckJ1dHRvbiwgbXVsdGlwbGF5ZXJCdXR0b24pO1xuXG4gICAgICAgIHJldHVybiBbc2luZ2xlUGxheWVyQnV0dG9uLCBtdWx0aXBsYXllckJ1dHRvbl07XG4gICAgfVxuXG4gICAgYWRkRXZlbnRMaXN0ZW5lcnMoc2luZ2xlUGxheWVyQnV0dG9uLCBtdWx0aXBsYXllckJ1dHRvbikge1xuICAgICAgICBzaW5nbGVQbGF5ZXJCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLnJlbmRlclNpbmdsZVBsYXllcigpO1xuICAgICAgICB9KTtcbiAgICAgICAgbXVsdGlwbGF5ZXJCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLnJlbmRlck11bHRpcGxheWVyKCk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHJlbmRlclNpbmdsZVBsYXllcigpIHtcbiAgICAgICAgZG9jdW1lbnQuYm9keS5yZW1vdmVDaGlsZCh0aGlzLm1lbnUpO1xuICAgICAgICBkb2N1bWVudC5ib2R5LnN0eWxlLmp1c3RpZnlDb250ZW50ID0gJ25vbmUnO1xuICAgICAgICB0aGlzLnNpbmdsZVBsYXllckNvbnRlbnQuY3JlYXRlQWxsQ29udGVudCgpO1xuICAgICAgICB0aGlzLmZpZWxkMS5jcmVhdGVDb21wbGV0ZUZpZWxkKHRoaXMuZmllbGRDb250YWluZXIxKTtcbiAgICAgICAgdGhpcy5maWVsZENvbnRhaW5lcjEuc3R5bGUucG9zaXRpb24gPSAncmVsYXRpdmUnO1xuICAgICAgICB0aGlzLmZpZWxkQ29udGFpbmVyMS5zdHlsZS5sZWZ0ID0gJzE0dncnO1xuICAgICAgICB0aGlzLmdhbWUxLmtleUxpc3RlbmVyKCk7XG4gICAgICAgIHRoaXMuZ2FtZTEuY2hhbmdlQ29udHJvbHMoKTtcbiAgICAgICAgdGhpcy5nYW1lMS5wbGF5KCk7XG4gICAgICAgIHRoaXMuZ2FtZTEuc3RhcnRFbGV2YXRpbmcoNTAwMCk7XG4gICAgICAgIHRoaXMuZ2FtZTEuYWRqdXN0RWxldmF0ZSgpO1xuICAgICAgICB0aGlzLnNpbmdsZVBsYXllckNvbnRlbnQuY3JlYXRlVGltZXIoKTtcbiAgICAgICAgdGhpcy5nYW1lMS5zdGFydFRpbWVyKCk7XG4gICAgfVxuXG4gICAgcmVuZGVyTXVsdGlwbGF5ZXIoKSB7XG4gICAgICAgIGRvY3VtZW50LmJvZHkucmVtb3ZlQ2hpbGQodGhpcy5tZW51KTtcbiAgICAgICAgdGhpcy5maWVsZDEuY3JlYXRlQ29tcGxldGVGaWVsZCh0aGlzLmZpZWxkQ29udGFpbmVyMSk7XG4gICAgICAgIHRoaXMuZ2FtZTEua2V5TGlzdGVuZXIoKTtcblxuICAgICAgICB0aGlzLmZpZWxkMi5jcmVhdGVDb21wbGV0ZUZpZWxkKHRoaXMuZmllbGRDb250YWluZXIyKTtcbiAgICAgICAgdGhpcy5nYW1lMi5rZXlMaXN0ZW5lcigpO1xuXG4gICAgICAgIGxldCBjb250cm9sc0NvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBjb250cm9sc0NvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdjb250cm9scy1jb250YWluZXInKVxuICAgICAgICBjb250cm9sc0NvbnRhaW5lci5hcHBlbmRDaGlsZCh0aGlzLm11bHRpcGxheWVyQ29udGVudC5jcmVhdGVDb250cm9sc0NvbnRlbnQoJ3BsYXllcjEnKSk7XG4gICAgICAgIGNvbnRyb2xzQ29udGFpbmVyLmFwcGVuZENoaWxkKHRoaXMubXVsdGlwbGF5ZXJDb250ZW50LmNyZWF0ZUNvbnRyb2xzQ29udGVudCgncGxheWVyMicpKTtcbiAgICAgICAgdGhpcy5tb2RhbC5jcmVhdGUoKTtcbiAgICAgICAgdGhpcy5tb2RhbC5hcHBlbmRDaGlsZChjb250cm9sc0NvbnRhaW5lcik7XG4gICAgICAgIHRoaXMubW9kYWwuYXBwZW5kQ2hpbGQodGhpcy5fY3JlYXRlQ2xvc2VNb2RhbExpbmsoKSk7XG4gICAgfVxuXG4gICAgcmVuZGVyTWVudSgpIHtcbiAgICAgICAgbGV0IGJ1dHRvbkNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIGJ1dHRvbkNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwiYnV0dG9uLWNvbnRhaW5lclwiKTtcbiAgICAgICAgdGhpcy5yZW5kZXJCdXR0b25zKCkuZm9yRWFjaChidXR0b24gPT4ge1xuICAgICAgICAgICAgYnV0dG9uQ29udGFpbmVyLmFwcGVuZENoaWxkKGJ1dHRvbik7XG4gICAgICAgIH0pXG4gICAgICAgIHRoaXMubWVudS5hcHBlbmRDaGlsZChidXR0b25Db250YWluZXIpO1xuICAgIH1cblxuICAgIF9jcmVhdGVDbG9zZU1vZGFsTGluaygpIHtcbiAgICAgICAgbGV0IGNsb3NlTGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBjbG9zZUxpbmsuY2xhc3NMaXN0LmFkZCgnY2xvc2UtbW9kYWwtbGluaycpO1xuICAgICAgICBjbG9zZUxpbmsuaW5uZXJIVE1MID0gXCJMZXQncyBnZXQgc3RhcnRlZC5cIjtcblxuICAgICAgICBjbG9zZUxpbmsuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLm1vZGFsLnJlbW92ZSgpO1xuICAgICAgICAgICAgdGhpcy5tdWx0aXBsYXllck1vZGUuc3RhcnRNdWx0aXBsYXllcigpO1xuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIGNsb3NlTGluaztcbiAgICB9XG59IiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgTW9kYWwge1xuICAgIGNyZWF0ZSgpIHtcbiAgICAgICAgbGV0IG1vZGFsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIG1vZGFsLmNsYXNzTGlzdC5hZGQoJ2NvbnRyb2xzLW1vZGFsJyk7XG4gICAgICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQobW9kYWwpO1xuICAgIH1cbiAgICBcbiAgICBhcHBlbmRDaGlsZChjb250ZW50KSB7XG4gICAgICAgIGxldCBtb2RhbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb250cm9scy1tb2RhbCcpO1xuICAgICAgICBtb2RhbC5hcHBlbmRDaGlsZChjb250ZW50KTtcbiAgICB9XG5cbiAgICByZW1vdmUoKSB7XG4gICAgICAgIGxldCBtb2RhbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb250cm9scy1tb2RhbCcpO1xuICAgICAgICBtb2RhbC5yZW1vdmUoKTtcbiAgICB9XG59IiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgTXVsdGlwbGF5ZXJDb250ZW50IHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5rZXlzID0ge1xuICAgICAgICAgICAgcGxheWVyMToge1xuICAgICAgICAgICAgICAgICd3X2tleSc6ICdUVVJOIFJJR0hUJyxcbiAgICAgICAgICAgICAgICAnYV9rZXknOiAnTEVGVCcsXG4gICAgICAgICAgICAgICAgJ3Nfa2V5JzogJ1NPRlQgRFJPUCcsXG4gICAgICAgICAgICAgICAgJ2Rfa2V5JzogJ1JJR0hUJyxcbiAgICAgICAgICAgICAgICAnYF9rZXknOiAnVFVSTiBMRUZUJyxcbiAgICAgICAgICAgICAgICAncV9rZXknOiAnSE9MRCcsXG4gICAgICAgICAgICAgICAgJzFfa2V5JzogJ0hBUkREUk9QJ1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHBsYXllcjI6IHtcbiAgICAgICAgICAgICAgICAndXBfa2V5JzogJ1RVUk4gUklHSFQnLFxuICAgICAgICAgICAgICAgICdsZWZ0X2tleSc6ICdMRUZUJyxcbiAgICAgICAgICAgICAgICAnZG93bl9rZXknOiAnU09GVCBEUk9QJyxcbiAgICAgICAgICAgICAgICAncmlnaHRfa2V5JzogJ1JJR0hUJyxcbiAgICAgICAgICAgICAgICAna19rZXknOiAnVFVSTiBMRUZUJyxcbiAgICAgICAgICAgICAgICAnc2hpZnRfa2V5JzogJ0hPTEQnLFxuICAgICAgICAgICAgICAgICdwZXJpb2Rfa2V5JzogJ0hBUkREUk9QJ1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuXG4gICAgfVxuXG4gICAgY3JlYXRlQ29udHJvbHNDb250ZW50KHBsYXllcikge1xuICAgICAgICBsZXQgY29udHJvbHNEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgY29udHJvbHNEaXYuY2xhc3NMaXN0LmFkZCgnY29udHJvbHMnKTtcbiAgICAgICAgbGV0IGltYWdlcyA9IE9iamVjdC5rZXlzKHRoaXMua2V5c1twbGF5ZXJdKTtcbiAgICAgICAgbGV0IGRlc2NyaXB0aW9ucyA9IE9iamVjdC52YWx1ZXModGhpcy5rZXlzW3BsYXllcl0pO1xuXG4gICAgICAgIC8vIGluaXRpYWxpemUgYXJyYXlzIG9mIHNwYW5zIGFuZCBkaXZzXG4gICAgICAgIGxldCBzcGFucyA9IFtdO1xuICAgICAgICBsZXQgZGl2cyA9IFtdO1xuXG4gICAgICAgIGxldCBsYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2hlYWRlcicpO1xuICAgICAgICBsYWJlbC5pbm5lckhUTUwgPSBgUExBWUVSICR7cGxheWVyLnNsaWNlKDYpfWBcbiAgICAgICAgY29udHJvbHNEaXYuYXBwZW5kQ2hpbGQobGFiZWwpO1xuXG4gICAgICAgIC8vIGNyZWF0ZSBlbGVtZW50cyBhbmQgc3RvcmUgaW50byBhcnJheSBpbmRpY2VzIGZvciBsYXRlciByZWZlcmVuY2VcbiAgICAgICAgZm9yIChsZXQgaSA9IDE7IGkgPD0gNzsgaSsrKSB7XG4gICAgICAgICAgICBzcGFuc1tpXSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgICAgICAgICAgIGlmIChpIDw9IDMpIGRpdnNbaV0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgaW1hZ2VzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBsZXQgcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICAgICAgICAgIGxldCBpbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgICAgICAgICAgIGltZy5jbGFzc0xpc3QuYWRkKCdrZXlib2FyZC1rZXknKTtcbiAgICAgICAgICAgIGlmIChpID09PSA1ICYmIHBsYXllciA9PT0gXCJwbGF5ZXIyXCIpIGltZy5jbGFzc0xpc3QuYWRkKCdzaGlmdC1rZXknKTtcblxuICAgICAgICAgICAgcC5pbm5lckhUTUwgPSBkZXNjcmlwdGlvbnNbaV07XG4gICAgICAgICAgICBpbWcuc2V0QXR0cmlidXRlKCdzcmMnLCBgLi9hc3NldHMvaW1hZ2VzLyR7aW1hZ2VzW2ldfS5wbmdgKTtcblxuICAgICAgICAgICAgc3BhbnNbaSArIDFdLmFwcGVuZChpbWcpO1xuICAgICAgICAgICAgc3BhbnNbaSArIDFdLmFwcGVuZChwKTtcblxuICAgICAgICAgICAgaWYgKGkgPCAxKSB7XG4gICAgICAgICAgICAgICAgZGl2c1sxXS5hcHBlbmQoc3BhbnNbaSArIDFdKTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoaSA8IDQpIHtcbiAgICAgICAgICAgICAgICBkaXZzWzJdLmFwcGVuZChzcGFuc1tpICsgMV0pO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChpIDwgNykge1xuICAgICAgICAgICAgICAgIGRpdnNbM10uYXBwZW5kKHNwYW5zW2kgKyAxXSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBmb3IgKGxldCBpID0gMTsgaSA8PSAzOyBpKyspIHtcbiAgICAgICAgICAgIGNvbnRyb2xzRGl2LmFwcGVuZChkaXZzW2ldKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBjb250cm9sc0RpdjtcbiAgICB9XG59IiwiaW1wb3J0IFNjb3JlS2VlcGVyIGZyb20gJy4uL3Njb3Jla2VlcGVyL3Njb3Jla2VlcGVyJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2luZ2xlUGxheWVyQ29udGVudCB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMua2V5cyA9IHtcbiAgICAgICAgICAgICdsZWZ0X2tleSc6ICdMRUZUJyxcbiAgICAgICAgICAgICdyaWdodF9rZXknOiAnUklHSFQnLFxuICAgICAgICAgICAgJ2Rvd25fa2V5JzogJ1NPRlQgRFJPUCcsXG4gICAgICAgICAgICAndXBfa2V5JzogJ1RVUk4gUklHSFQnLFxuICAgICAgICAgICAgJ2Nfa2V5JzogJ1RVUk4gTEVGVCcsXG4gICAgICAgICAgICAnc2hpZnRfa2V5JzogJ0hPTEQnLFxuICAgICAgICAgICAgJ3NwYWNlX2tleSc6ICdIQVJERFJPUCcsXG4gICAgICAgIH07XG5cbiAgICAgICAgdGhpcy5zY29yZUtlZXBlciA9IG5ldyBTY29yZUtlZXBlcigpO1xuICAgIH1cblxuICAgIGNyZWF0ZUFsbENvbnRlbnQoKSB7XG4gICAgICAgIGxldCBhbGxTaW5nbGVQbGF5ZXJDb250ZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGFsbFNpbmdsZVBsYXllckNvbnRlbnQuYXBwZW5kQ2hpbGQodGhpcy5jcmVhdGVUaW1lcigpKTtcbiAgICAgICAgYWxsU2luZ2xlUGxheWVyQ29udGVudC5hcHBlbmRDaGlsZCh0aGlzLnNjb3JlS2VlcGVyLmNyZWF0ZVNjb3JlS2VlcGVyKCkpO1xuICAgICAgICBhbGxTaW5nbGVQbGF5ZXJDb250ZW50LmFwcGVuZENoaWxkKHRoaXMuY3JlYXRlQ29udHJvbHNDb250ZW50KCkpO1xuICAgICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZChhbGxTaW5nbGVQbGF5ZXJDb250ZW50KTtcbiAgICB9XG5cbiAgICBjcmVhdGVDb250cm9sc0NvbnRlbnQoKSB7XG4gICAgICAgIGxldCBjb250ZW50RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGNvbnRlbnREaXYuY2xhc3NMaXN0LmFkZCgnY29udHJvbHMnKTtcbiAgICAgICAgbGV0IGltYWdlcyA9IE9iamVjdC5rZXlzKHRoaXMua2V5cyk7XG4gICAgICAgIGxldCBkZXNjcmlwdGlvbnMgPSBPYmplY3QudmFsdWVzKHRoaXMua2V5cyk7XG5cbiAgICAgICAgLy8gaW5pdGlhbGl6ZSBhcnJheXMgb2Ygc3BhbnMgYW5kIGRpdnNcbiAgICAgICAgbGV0IHNwYW5zID0gW107XG4gICAgICAgIGxldCBkaXZzID0gW107XG5cbiAgICAgICAgLy8gY3JlYXRlIGVsZW1lbnRzIGFuZCBzdG9yZSBpbnRvIGFycmF5IGluZGljZXMgZm9yIGxhdGVyIHJlZmVyZW5jZVxuICAgICAgICBmb3IgKGxldCBpID0gMTsgaSA8PSA3OyBpKyspIHtcbiAgICAgICAgICAgIHNwYW5zW2ldID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICAgICAgICAgICAgaWYgKGkgPD0gNCkgZGl2c1tpXSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICB9XG5cbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBpbWFnZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGxldCBwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgICAgICAgICAgbGV0IGltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICAgICAgICAgICAgaW1nLmNsYXNzTGlzdC5hZGQoJ2tleWJvYXJkLWtleScpO1xuICAgICAgICAgICAgaWYgKGkgPT09IDUpIGltZy5jbGFzc0xpc3QuYWRkKCdzaGlmdC1rZXknKTtcbiAgICAgICAgICAgIGlmIChpID09PSA2KSBpbWcuY2xhc3NMaXN0LmFkZCgnc3BhY2Uta2V5Jyk7XG5cbiAgICAgICAgICAgIHAuaW5uZXJIVE1MID0gZGVzY3JpcHRpb25zW2ldO1xuICAgICAgICAgICAgaW1nLnNldEF0dHJpYnV0ZSgnc3JjJywgYC4vYXNzZXRzL2ltYWdlcy8ke2ltYWdlc1tpXX0ucG5nYCk7XG5cbiAgICAgICAgICAgIHNwYW5zW2kgKyAxXS5hcHBlbmQoaW1nKTtcbiAgICAgICAgICAgIHNwYW5zW2kgKyAxXS5hcHBlbmQocCk7XG5cbiAgICAgICAgICAgIGlmIChpIDwgMikge1xuICAgICAgICAgICAgICAgIGRpdnNbMV0uYXBwZW5kKHNwYW5zW2kgKyAxXSk7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKGkgPCA0KSB7XG4gICAgICAgICAgICAgICAgZGl2c1syXS5hcHBlbmQoc3BhbnNbaSArIDFdKTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoaSA8IDYpIHtcbiAgICAgICAgICAgICAgICBkaXZzWzNdLmFwcGVuZChzcGFuc1tpICsgMV0pO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBkaXZzWzRdLmFwcGVuZChzcGFuc1tpICsgMV0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgZm9yIChsZXQgaSA9IDE7IGkgPD0gNDsgaSsrKSB7XG4gICAgICAgICAgICBjb250ZW50RGl2LmFwcGVuZChkaXZzW2ldKTtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgcmV0dXJuIGNvbnRlbnREaXY7XG4gICAgfVxuXG4gICAgY3JlYXRlVGltZXIoKSB7XG4gICAgICAgIGxldCB0aW1lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBsZXQgbWludXRlcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICAgICAgbGV0IHNlY29uZHMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgICAgIGxldCBjb2xvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICAgICAgdGltZXIuY2xhc3NMaXN0LmFkZCgndGltZXInKTtcbiAgICAgICAgbWludXRlcy5jbGFzc0xpc3QuYWRkKCdtaW51dGVzJyk7XG4gICAgICAgIHNlY29uZHMuY2xhc3NMaXN0LmFkZCgnc2Vjb25kcycpO1xuICAgICAgICBjb2xvbi5jbGFzc0xpc3QuYWRkKCdjb2xvbicpO1xuICAgICAgICBtaW51dGVzLmlubmVySFRNTCA9ICcwJztcbiAgICAgICAgc2Vjb25kcy5pbm5lckhUTUwgPSAnMDAnO1xuICAgICAgICBjb2xvbi5pbm5lckhUTUwgPSAnOic7XG4gICAgICAgIFttaW51dGVzLCBjb2xvbiwgc2Vjb25kc10uZm9yRWFjaChlbGUgPT4gdGltZXIuYXBwZW5kQ2hpbGQoZWxlKSk7XG4gICAgICAgIHJldHVybiB0aW1lcjtcbiAgICB9XG5cbiAgICBcbn0iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBNdWx0aXBsYXllciB7XG4gICAgY29uc3RydWN0b3IocGxheWVyMSwgcGxheWVyMikge1xuICAgICAgICB0aGlzLnBsYXllcjEgPSBwbGF5ZXIxO1xuICAgICAgICB0aGlzLnBsYXllcjIgPSBwbGF5ZXIyO1xuICAgIH1cblxuICAgIHN0YXJ0TXVsdGlwbGF5ZXIoKSB7XG4gICAgICAgIHRoaXMucGxheWVyMS5zZXRPcHBvbmVudCh0aGlzLnBsYXllcjIpO1xuICAgICAgICB0aGlzLnBsYXllcjIuc2V0T3Bwb25lbnQodGhpcy5wbGF5ZXIxKTtcbiAgICAgICAgdGhpcy5wbGF5ZXIxLnBsYXkoKTtcbiAgICAgICAgdGhpcy5wbGF5ZXIyLnBsYXkoKTtcbiAgICB9XG59XG4iLCJpbXBvcnQgUGllY2UgZnJvbSAnLi9waWVjZSc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIElQaWVjZSBleHRlbmRzIFBpZWNlIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgdGhpcy5uYW1lID0gXCJJUGllY2VcIjtcbiAgICAgICAgdGhpcy5wb3NpdGlvbiA9IHtcbiAgICAgICAgICAgIHRvcDogW10sXG4gICAgICAgICAgICBtaWRkbGU6IFtdLFxuICAgICAgICAgICAgYm90dG9tOiBbWzEsIDNdLCBbMSwgNF0sIFsxLCA1XSwgWzEsIDZdXVxuICAgICAgICB9O1xuICAgICAgICB0aGlzLmNvbG9yQ29kZSA9IDI7XG4gICAgICAgIHRoaXMudHVybmluZ1BvaW50ID0gWzEsIDRdO1xuICAgICAgICB0aGlzLmRpc3BsYXlTcXVhcmVzID0gW1swLCAyXSwgWzEsIDJdLCBbMiwgMl0sIFszLCAyXV07XG5cbiAgICAgICAgdGhpcy5yZW1vdmVTcXVhcmVzID0gW107XG5cbiAgICAgICAgdGhpcy5vZmZzZXRHdWlkZSA9IHtcbiAgICAgICAgICAgIDA6IFtbMCwgMF0sIFswLCAtMV0sIFswLCAyXSwgWzAsIC0xXSwgWzAsIDJdXSxcbiAgICAgICAgICAgIDE6IFtbMCwgLTFdLCBbMCwgMF0sIFswLCAwXSwgWzEsIDBdLCBbLTIsIDBdXSxcbiAgICAgICAgICAgIDI6IFtbMSwgLTFdLCBbMSwgMV0sIFsxLCAtMl0sIFswLCAxXSwgWzAsIC0yXV0sXG4gICAgICAgICAgICAzOiBbWzEsIDBdLCBbMSwgMF0sIFsxLCAwXSwgWy0xLCAwXSwgWzIsIDBdXVxuICAgICAgICB9XG4gICAgfVxuXG5cbn1cblxuXG4iLCJpbXBvcnQgUGllY2UgZnJvbSAnLi9waWVjZSc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIGpQaWVjZSBleHRlbmRzIFBpZWNlIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgdGhpcy5uYW1lID0gXCJKUGllY2VcIjtcbiAgICAgICAgdGhpcy5wb3NpdGlvbiA9IHtcbiAgICAgICAgICAgIHRvcDogW1swLCAzXV0sXG4gICAgICAgICAgICBtaWRkbGU6IFtdLFxuICAgICAgICAgICAgYm90dG9tOiBbWzEsIDNdLCBbMSwgNF0sIFsxLCA1XV1cbiAgICAgICAgfTtcbiAgICAgICAgdGhpcy5jb2xvckNvZGUgPSA3O1xuXG4gICAgICAgIHRoaXMudHVybmluZ1BvaW50ID0gWzEsIDRdO1xuXG4gICAgICAgIHRoaXMuZGlzcGxheVNxdWFyZXMgPSBbWzEsIDFdLCBbMSwgMl0sIFsyLCAyXSwgWzMsIDJdXTtcbiBcbiAgICAgICAgdGhpcy5yZW1vdmVTcXVhcmVzID0gW107XG4gICAgfVxufSIsImltcG9ydCBQaWVjZSBmcm9tICcuL3BpZWNlJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgbFBpZWNlIGV4dGVuZHMgUGllY2Uge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICB0aGlzLm5hbWUgPSBcIkxQaWVjZVwiO1xuICAgICAgICB0aGlzLnBvc2l0aW9uID0ge1xuICAgICAgICAgICAgdG9wOiBbWzAsIDVdXSxcbiAgICAgICAgICAgIG1pZGRsZTogW10sXG4gICAgICAgICAgICBib3R0b206IFtbMSwgM10sIFsxLCA0XSwgWzEsIDVdXVxuICAgICAgICB9O1xuICAgICAgICB0aGlzLmNvbG9yQ29kZSA9IDY7XG5cbiAgICAgICAgdGhpcy50dXJuaW5nUG9pbnQgPSBbMSwgNF07XG5cbiAgICAgICAgdGhpcy5kaXNwbGF5U3F1YXJlcyA9IFtbMSwgMl0sIFsyLCAyXSwgWzMsIDJdLCBbMywgMV1dO1xuXG4gICAgICAgIHRoaXMucmVtb3ZlU3F1YXJlcyA9IFtdO1xuICAgIH1cbn0iLCJpbXBvcnQgUGllY2UgZnJvbSAnLi9waWVjZSc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE9QaWVjZSBleHRlbmRzIFBpZWNlIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgdGhpcy5uYW1lID0gXCJPUGllY2VcIjtcbiAgICAgICAgdGhpcy5wb3NpdGlvbiA9IHtcbiAgICAgICAgICAgIHRvcDogW1swLCA0XSwgWzAsIDVdXSxcbiAgICAgICAgICAgIG1pZGRsZTogW10sXG4gICAgICAgICAgICBib3R0b206IFtbMSwgNF0sWzEsIDVdXVxuICAgICAgICB9O1xuICAgICAgICB0aGlzLmNvbG9yQ29kZSA9IDE7XG4gICAgICAgIHRoaXMudHVybmluZ1BvaW50ID0gWzEsIDRdO1xuICAgICAgICB0aGlzLmRpc3BsYXlTcXVhcmVzID0gW1sxLCAxXSwgWzIsIDFdLCBbMSwgMl0sIFsyLCAyXV07XG5cbiAgICAgICAgdGhpcy5yZW1vdmVTcXVhcmVzID0gW107XG4gICAgfVxuXG4gICAgLy8gT1BpZWNlIGRvZXMgbm90IHR1cm5cbiAgICB0dXJuUmlnaHQoKSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgXG4gICAgdHVybkxlZnQoKSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG59ICIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIFBpZWNlIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5sZWZ0TW9zdCA9ICcnO1xuICAgICAgICB0aGlzLnJpZ2h0TW9zdCA9ICcnO1xuICAgICAgICB0aGlzLmJvdHRvbU1vc3QgPSAnJztcbiAgICAgICAgdGhpcy50b3BNb3N0ID0gJyc7XG5cbiAgICAgICAgdGhpcy5yb3RhdGlvblN0YXRlID0gMDtcblxuICAgICAgICB0aGlzLm9mZnNldEd1aWRlID0ge1xuICAgICAgICAgICAgMDogW1swLCAwXSwgWzAsIDBdLCBbMCwgMF0sIFswLCAwXSwgWzAsIDBdXSxcbiAgICAgICAgICAgIDE6IFtbMCwgMF0sIFswLCAxXSwgWy0xLCAxXSwgWzIsIDBdLCBbMiwgMV1dLFxuICAgICAgICAgICAgMjogW1swLCAwXSwgWzAsIDBdLCBbMCwgMF0sIFswLCAwXSwgWzAsIDBdXSxcbiAgICAgICAgICAgIDM6IFtbMCwgMF0sIFswLCAtMV0sIFstMSwgLTFdLCBbMiwgMF0sIFsyLCAtMV1dXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBzZXRPdXRlclNxdWFyZXMoKSB7XG4gICAgICAgIGxldCBsZWZ0TW9zdCwgcmlnaHRNb3N0LCB0b3BNb3N0LCBib3R0b21Nb3N0O1xuICAgICAgICBPYmplY3QudmFsdWVzKHRoaXMucG9zaXRpb24pLmZvckVhY2goY29vcmRpbmF0ZXNBcnJheSA9PiBjb29yZGluYXRlc0FycmF5LmZvckVhY2goYXJyYXkgPT4ge1xuICAgICAgICAgICAgbGV0IGNvbHVtblZhbHVlID0gYXJyYXlbMV07XG4gICAgICAgICAgICBsZXQgcm93VmFsdWUgPSBhcnJheVswXTtcbiAgICAgICAgICAgIGlmICghbGVmdE1vc3QgfHwgY29sdW1uVmFsdWUgPCBsZWZ0TW9zdFsxXSkgbGVmdE1vc3QgPSBbcm93VmFsdWUsIGNvbHVtblZhbHVlXTtcbiAgICAgICAgICAgIGlmICghcmlnaHRNb3N0IHx8IGNvbHVtblZhbHVlID4gcmlnaHRNb3N0WzFdKSByaWdodE1vc3QgPSBbcm93VmFsdWUsIGNvbHVtblZhbHVlXTtcbiAgICAgICAgICAgIGlmICghYm90dG9tTW9zdCB8fCByb3dWYWx1ZSA+IGJvdHRvbU1vc3RbMF0pIGJvdHRvbU1vc3QgPSBbcm93VmFsdWUsIGNvbHVtblZhbHVlXTtcbiAgICAgICAgICAgIGlmICghdG9wTW9zdCB8fCByb3dWYWx1ZSA8IHRvcE1vc3RbMF0pIHRvcE1vc3QgPSBbcm93VmFsdWUsIGNvbHVtblZhbHVlXTtcbiAgICAgICAgfSkpO1xuICAgICAgICB0aGlzLmxlZnRNb3N0ID0gbGVmdE1vc3Q7XG4gICAgICAgIHRoaXMucmlnaHRNb3N0ID0gcmlnaHRNb3N0O1xuICAgICAgICB0aGlzLnRvcE1vc3QgPSB0b3BNb3N0O1xuICAgICAgICB0aGlzLmJvdHRvbU1vc3QgPSBib3R0b21Nb3N0O1xuICAgIH1cblxuICAgIHBvcHVsYXRlRmllbGQoZmllbGQpIHtcbiAgICAgICAgbGV0IGNvb3JkaW5hdGVBcnJheXMgPSBPYmplY3QudmFsdWVzKHRoaXMucG9zaXRpb24pO1xuXG4gICAgICAgIGNvb3JkaW5hdGVBcnJheXMuZm9yRWFjaChhcnJheSA9PiB7XG4gICAgICAgICAgICBhcnJheS5mb3JFYWNoKGNvb3JkaW5hdGUgPT4ge1xuICAgICAgICAgICAgICAgIGxldCBbcm93LCBjb2xdID0gW2Nvb3JkaW5hdGVbMF0sIGNvb3JkaW5hdGVbMV1dO1xuICAgICAgICAgICAgICAgIGlmICgoY29sID49IDAgJiYgY29sIDw9IDE5KSAmJiAocm93ID49IDAgJiYgcm93IDw9IDE5KSkgZmllbGRbcm93XVtjb2xdID0gdGhpcy5jb2xvckNvZGU7XG4gICAgICAgICAgICB9KVxuICAgICAgICB9KTtcblxuICAgICAgICB0aGlzLnJlbW92ZVNxdWFyZXMuZm9yRWFjaChwb3NpdGlvbkFycmF5ID0+IHtcbiAgICAgICAgICAgIGxldCBbcm93LCBjb2xdID0gW3Bvc2l0aW9uQXJyYXlbMF0sIHBvc2l0aW9uQXJyYXlbMV1dO1xuICAgICAgICAgICAgaWYgKChjb2wgPj0gMCAmJiBjb2wgPD0gMTkpICYmIChyb3cgPj0gMCAmJiByb3cgPD0gMTkpKSBmaWVsZFtyb3ddW2NvbF0gPSAwO1xuICAgICAgICB9KTtcblxuICAgIH1cblxuICAgIC8vIGNvbXBhcmVzIHR3byBhcnJheXMgb2YgY29vcmRpbmF0ZXMgYW5kIGNoZWNrIGlmIHRoZXkgaGF2ZSB0aGUgc2FtZSBjb250ZW50IGluIHRoZSBzYW1lIG9yZGVyXG4gICAgX3NxdWFyZXNBcmVFcXVhbChvbGRTcXVhcmUsIG5ld1NxdWFyZSkge1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IG9sZFNxdWFyZS5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgaWYgKG9sZFNxdWFyZVtpXSAhPT0gbmV3U3F1YXJlW2ldKSByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuXG4gICAgX2luY2x1ZGVzKHNxdWFyZSwgY29vcmRpbmF0ZUFycmF5cykge1xuICAgICAgICBsZXQgcmVzdWx0ID0gZmFsc2U7XG4gICAgICAgIGNvb3JkaW5hdGVBcnJheXMuZm9yRWFjaChhcnJheSA9PiB7XG4gICAgICAgICAgICBpZiAodGhpcy5fc3F1YXJlc0FyZUVxdWFsKHNxdWFyZSwgYXJyYXkpKSB7XG4gICAgICAgICAgICAgICAgcmVzdWx0ID0gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxuXG4gICAgZHJvcCgpIHtcbiAgICAgICAgbGV0IG9sZFBvc2l0aW9uID0ge1xuICAgICAgICAgICAgdG9wOiB0aGlzLnBvc2l0aW9uLnRvcC5tYXAoYXJyYXkgPT4gYXJyYXkuc2xpY2UoKSksXG4gICAgICAgICAgICBtaWRkbGU6IHRoaXMucG9zaXRpb24ubWlkZGxlLm1hcChhcnJheSA9PiBhcnJheS5zbGljZSgpKSxcbiAgICAgICAgICAgIGJvdHRvbTogdGhpcy5wb3NpdGlvbi5ib3R0b20ubWFwKGFycmF5ID0+IGFycmF5LnNsaWNlKCkpLFxuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5wb3NpdGlvbi50b3AgPSB0aGlzLnBvc2l0aW9uLnRvcC5tYXAoYXJyYXkgPT4gW2FycmF5WzBdICsgMSwgYXJyYXlbMV1dKTtcbiAgICAgICAgdGhpcy5wb3NpdGlvbi5taWRkbGUgPSB0aGlzLnBvc2l0aW9uLm1pZGRsZS5tYXAoYXJyYXkgPT4gW2FycmF5WzBdICsgMSwgYXJyYXlbMV1dKTtcbiAgICAgICAgdGhpcy5wb3NpdGlvbi5ib3R0b20gPSB0aGlzLnBvc2l0aW9uLmJvdHRvbS5tYXAoYXJyYXkgPT4gW2FycmF5WzBdICsgMSwgYXJyYXlbMV1dKTtcbiAgICAgICAgdGhpcy50dXJuaW5nUG9pbnQgPSBbdGhpcy50dXJuaW5nUG9pbnRbMF0gKyAxLCB0aGlzLnR1cm5pbmdQb2ludFsxXV07XG5cbiAgICAgICAgdGhpcy5zZXRSZW1vdmVTcXVhcmVzKG9sZFBvc2l0aW9uKTtcbiAgICB9XG5cbiAgICAvLyBmaW5kIGhpZ2hlc3QgcG9zc2libGUgZ3JvdW5kLXBvc2l0aW9uIGZvciBwaWVjZVxuICAgIGhhcmREcm9wKGZpZWxkKSB7XG4gICAgICAgIHRoaXMuY2xlYXJTZWxmRnJvbUJvYXJkKGZpZWxkKTtcbiAgICAgICAgbGV0IHN0b3BwZWQgPSBmYWxzZTtcbiAgICAgICAgd2hpbGUgKCFzdG9wcGVkKSB7XG4gICAgICAgICAgICBsZXQgaGFuZ2luZ1NxdWFyZXMgPSB0aGlzLmhhbmdpbmdTcXVhcmVzKHRoaXMucG9zaXRpb24pO1xuICAgICAgICAgICAgaGFuZ2luZ1NxdWFyZXMuZm9yRWFjaChjb29yZGluYXRlID0+IHtcbiAgICAgICAgICAgICAgICBsZXQgW3JvdywgY29sXSA9IFtjb29yZGluYXRlWzBdLCBjb29yZGluYXRlWzFdXTtcbiAgICAgICAgICAgICAgICBpZiAoKHJvdyArIDEgPT09IDIwIHx8IGZpZWxkW3JvdyArIDFdW2NvbF0pKSBzdG9wcGVkID0gdHJ1ZTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgaWYgKHN0b3BwZWQpIGJyZWFrO1xuICAgICAgICAgICAgdGhpcy5wb3NpdGlvbi50b3AgPSB0aGlzLnBvc2l0aW9uLnRvcC5tYXAoYXJyYXkgPT4gW2FycmF5WzBdICsgMSwgYXJyYXlbMV1dKTtcbiAgICAgICAgICAgIHRoaXMucG9zaXRpb24ubWlkZGxlID0gdGhpcy5wb3NpdGlvbi5taWRkbGUubWFwKGFycmF5ID0+IFthcnJheVswXSArIDEsIGFycmF5WzFdXSk7XG4gICAgICAgICAgICB0aGlzLnBvc2l0aW9uLmJvdHRvbSA9IHRoaXMucG9zaXRpb24uYm90dG9tLm1hcChhcnJheSA9PiBbYXJyYXlbMF0gKyAxLCBhcnJheVsxXV0pO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgY2xlYXJTZWxmRnJvbUJvYXJkKGZpZWxkKSB7XG4gICAgICAgIE9iamVjdC52YWx1ZXModGhpcy5wb3NpdGlvbikuZm9yRWFjaChjb29yZGluYXRlQXJyYXlzID0+IGNvb3JkaW5hdGVBcnJheXMuZm9yRWFjaChjb29yZGluYXRlID0+IHtcbiAgICAgICAgICAgIGxldCByb3cgPSBjb29yZGluYXRlWzBdO1xuICAgICAgICAgICAgbGV0IGNvbCA9IGNvb3JkaW5hdGVbMV07XG4gICAgICAgICAgICBpZiAocm93IDwgMjAgJiYgcm93ID49IDAgJiYgY29sID49IDAgJiYgY29sIDwgMTApIGZpZWxkW3Jvd11bY29sXSA9IDA7XG4gICAgICAgIH0pKTtcbiAgICB9XG5cbiAgICBtb3ZlKGRpcmVjdGlvbiwgZmllbGQpIHtcbiAgICAgICAgbGV0IHRTcGluID0gZmFsc2U7XG4gICAgICAgIGxldCBvbGRQb3NpdGlvbiA9IHtcbiAgICAgICAgICAgIHRvcDogdGhpcy5wb3NpdGlvbi50b3AubWFwKGFycmF5ID0+IGFycmF5LnNsaWNlKCkpLFxuICAgICAgICAgICAgbWlkZGxlOiB0aGlzLnBvc2l0aW9uLm1pZGRsZS5tYXAoYXJyYXkgPT4gYXJyYXkuc2xpY2UoKSksXG4gICAgICAgICAgICBib3R0b206IHRoaXMucG9zaXRpb24uYm90dG9tLm1hcChhcnJheSA9PiBhcnJheS5zbGljZSgpKSxcbiAgICAgICAgfVxuICAgICAgICB0aGlzLm9sZFR1cm5pbmdQb2ludCA9IHRoaXMudHVybmluZ1BvaW50LnNsaWNlKCk7XG4gICAgICAgIHN3aXRjaCAoZGlyZWN0aW9uKSB7XG4gICAgICAgICAgICBjYXNlIFwibGVmdFwiOlxuICAgICAgICAgICAgICAgIHRoaXMucG9zaXRpb24udG9wID0gdGhpcy5wb3NpdGlvbi50b3AubWFwKGFycmF5ID0+IFthcnJheVswXSwgYXJyYXlbMV0gLSAxXSk7XG4gICAgICAgICAgICAgICAgdGhpcy5wb3NpdGlvbi5taWRkbGUgPSB0aGlzLnBvc2l0aW9uLm1pZGRsZS5tYXAoYXJyYXkgPT4gW2FycmF5WzBdLCBhcnJheVsxXSAtIDFdKTtcbiAgICAgICAgICAgICAgICB0aGlzLnBvc2l0aW9uLmJvdHRvbSA9IHRoaXMucG9zaXRpb24uYm90dG9tLm1hcChhcnJheSA9PiBbYXJyYXlbMF0sIGFycmF5WzFdIC0gMV0pO1xuICAgICAgICAgICAgICAgIHRoaXMudHVybmluZ1BvaW50ID0gW3RoaXMudHVybmluZ1BvaW50WzBdLCB0aGlzLnR1cm5pbmdQb2ludFsxXSAtIDFdO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBcInR1cm5SaWdodFwiOlxuICAgICAgICAgICAgICAgIC8vIGRlZmVyIHRvIFwidHVyblwiIG1ldGhvZFxuICAgICAgICAgICAgICAgIC8vIHRTcGluIHdpbGwgZWl0aGVyIGJlIHRydXRoeSBvciBmYWxzeSwgdHJhY2tlZCBmb3Igc2VuZGluZyBtb3JlIGxpbmVzIGR1cmluZyBtdWx0aXBsYXllclxuICAgICAgICAgICAgICAgIHRTcGluID0gdGhpcy50dXJuUmlnaHQoZmllbGQsIG9sZFBvc2l0aW9uKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgXCJyaWdodFwiOlxuICAgICAgICAgICAgICAgIHRoaXMucG9zaXRpb24udG9wID0gdGhpcy5wb3NpdGlvbi50b3AubWFwKGFycmF5ID0+IFthcnJheVswXSwgYXJyYXlbMV0gKyAxXSk7XG4gICAgICAgICAgICAgICAgdGhpcy5wb3NpdGlvbi5taWRkbGUgPSB0aGlzLnBvc2l0aW9uLm1pZGRsZS5tYXAoYXJyYXkgPT4gW2FycmF5WzBdLCBhcnJheVsxXSArIDFdKTtcbiAgICAgICAgICAgICAgICB0aGlzLnBvc2l0aW9uLmJvdHRvbSA9IHRoaXMucG9zaXRpb24uYm90dG9tLm1hcChhcnJheSA9PiBbYXJyYXlbMF0sIGFycmF5WzFdICsgMV0pO1xuICAgICAgICAgICAgICAgIHRoaXMudHVybmluZ1BvaW50ID0gW3RoaXMudHVybmluZ1BvaW50WzBdLCB0aGlzLnR1cm5pbmdQb2ludFsxXSArIDFdO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBcImRvd25cIjpcbiAgICAgICAgICAgICAgICB0aGlzLnBvc2l0aW9uLnRvcCA9IHRoaXMucG9zaXRpb24udG9wLm1hcChhcnJheSA9PiBbYXJyYXlbMF0gKyAxLCBhcnJheVsxXV0pO1xuICAgICAgICAgICAgICAgIHRoaXMucG9zaXRpb24ubWlkZGxlID0gdGhpcy5wb3NpdGlvbi5taWRkbGUubWFwKGFycmF5ID0+IFthcnJheVswXSArIDEsIGFycmF5WzFdXSk7XG4gICAgICAgICAgICAgICAgdGhpcy5wb3NpdGlvbi5ib3R0b20gPSB0aGlzLnBvc2l0aW9uLmJvdHRvbS5tYXAoYXJyYXkgPT4gW2FycmF5WzBdICsgMSwgYXJyYXlbMV1dKTtcbiAgICAgICAgICAgICAgICB0aGlzLnR1cm5pbmdQb2ludCA9IFt0aGlzLnR1cm5pbmdQb2ludFswXSArIDEsIHRoaXMudHVybmluZ1BvaW50WzFdXTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgXCJ1cFwiOlxuICAgICAgICAgICAgICAgIHRoaXMucG9zaXRpb24udG9wID0gdGhpcy5wb3NpdGlvbi50b3AubWFwKGFycmF5ID0+IFthcnJheVswXSAtIDEsIGFycmF5WzFdXSk7XG4gICAgICAgICAgICAgICAgdGhpcy5wb3NpdGlvbi5taWRkbGUgPSB0aGlzLnBvc2l0aW9uLm1pZGRsZS5tYXAoYXJyYXkgPT4gW2FycmF5WzBdIC0gMSwgYXJyYXlbMV1dKTtcbiAgICAgICAgICAgICAgICB0aGlzLnBvc2l0aW9uLmJvdHRvbSA9IHRoaXMucG9zaXRpb24uYm90dG9tLm1hcChhcnJheSA9PiBbYXJyYXlbMF0gLSAxLCBhcnJheVsxXV0pO1xuICAgICAgICAgICAgICAgIHRoaXMudHVybmluZ1BvaW50ID0gW3RoaXMudHVybmluZ1BvaW50WzBdIC0gMSwgdGhpcy50dXJuaW5nUG9pbnRbMV1dO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBcInR1cm5MZWZ0XCI6XG4gICAgICAgICAgICAgICAgdGhpcy50dXJuTGVmdChmaWVsZCwgb2xkUG9zaXRpb24pO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuc2V0T3V0ZXJTcXVhcmVzKCk7XG4gICAgICAgIHRoaXMuc2V0UmVtb3ZlU3F1YXJlcyhvbGRQb3NpdGlvbiwgZmllbGQpO1xuICAgICAgICByZXR1cm4gdFNwaW47XG4gICAgfVxuXG4gICAgdHVyblJpZ2h0KGZpZWxkLCBvbGRQb3NpdGlvbikge1xuICAgICAgICAvLyBjbGVhciBmcm9tIGZpZWxkIGZpcnN0IHNvIHRoYXQgdGhlIHBpZWNlIGRvZXNuJ3Qgc2VlIGl0c2VsZiBhcyBhIGNvbmZsaWN0aW5nIHBpZWNlXG4gICAgICAgIHRoaXMuY2xlYXJTZWxmRnJvbUJvYXJkKGZpZWxkKTtcbiAgICAgICAgbGV0IHNxdWFyZXMgPSBbXTtcbiAgICAgICAgT2JqZWN0LnZhbHVlcyh0aGlzLnBvc2l0aW9uKS5mb3JFYWNoKGNvb3JkaW5hdGVzQXJyYXkgPT4gc3F1YXJlcy5wdXNoKC4uLmNvb3JkaW5hdGVzQXJyYXkpKTtcbiAgICAgICAgdGhpcy5wb3NpdGlvbi50b3AgPSBbXTtcbiAgICAgICAgdGhpcy5wb3NpdGlvbi5taWRkbGUgPSBbXTtcbiAgICAgICAgdGhpcy5wb3NpdGlvbi5ib3R0b20gPSBbXTtcbiAgICAgICAgc3F1YXJlcy5mb3JFYWNoKHNxdWFyZSA9PiB7XG4gICAgICAgICAgICBsZXQgY29sdW1uID0gc3F1YXJlWzFdO1xuICAgICAgICAgICAgbGV0IGhlaWdodERpZmZlcmVuY2UgPSB0aGlzLnR1cm5pbmdQb2ludFswXSAtIHNxdWFyZVswXTtcbiAgICAgICAgICAgIGxldCB3aWR0aERpZmZlcmVuY2UgPSB0aGlzLnR1cm5pbmdQb2ludFsxXSAtIHNxdWFyZVsxXTtcbiAgICAgICAgICAgIGxldCBuZXdDb2wgPSB0aGlzLnR1cm5pbmdQb2ludFsxXSArIGhlaWdodERpZmZlcmVuY2U7XG4gICAgICAgICAgICBsZXQgbmV3Um93ID0gdGhpcy50dXJuaW5nUG9pbnRbMF0gKyAod2lkdGhEaWZmZXJlbmNlICogLTEpO1xuICAgICAgICAgICAgc3dpdGNoIChjb2x1bW4pIHtcbiAgICAgICAgICAgICAgICBjYXNlIGNvbHVtbiA9IHRoaXMucmlnaHRNb3N0WzFdOlxuICAgICAgICAgICAgICAgICAgICB0aGlzLnBvc2l0aW9uLmJvdHRvbS5wdXNoKFtuZXdSb3csIG5ld0NvbF0pO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlIGNvbHVtbiA9IHRoaXMubGVmdE1vc3RbMV06XG4gICAgICAgICAgICAgICAgICAgIHRoaXMucG9zaXRpb24udG9wLnB1c2goW25ld1JvdywgbmV3Q29sXSk7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgICAgIHRoaXMucG9zaXRpb24ubWlkZGxlLnB1c2goW25ld1JvdywgbmV3Q29sXSk7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5zZXRSZW1vdmVTcXVhcmVzKG9sZFBvc2l0aW9uKTtcblxuICAgICAgICAvLyBmaW5kIG91dGVyLW1vc3Qgc3F1YXJlcyB0byBzZWUgaWYgcGllY2UgaXMgb2JzdHJ1Y3RlZFxuICAgICAgICAvLyBpZiBzbywgcHVzaCBwaWVjZSBiYWNrIGludG8gZmllbGRcbiAgICAgICAgdGhpcy5zZXRPdXRlclNxdWFyZXMoKTtcblxuICAgICAgICAvLyByZXNldCByb3RhdGlvbiBzdGF0ZSwgd2hpY2ggaXMgdHJhY2tlZCBmb3IgaW1wbGVtZW50aW5nIHN1cGVyIHJvdGF0aW9uIHN5c3RlbVxuICAgICAgICB0aGlzLnJvdGF0aW9uU3RhdGUgPSB0aGlzLnJvdGF0aW9uU3RhdGUgPT09IDMgPyAwIDogdGhpcy5yb3RhdGlvblN0YXRlICsgMTtcblxuICAgICAgICBsZXQgbmV3U3F1YXJlcyA9IFsuLi50aGlzLnBvc2l0aW9uLnRvcCwgLi4udGhpcy5wb3NpdGlvbi5taWRkbGUsIC4uLnRoaXMucG9zaXRpb24uYm90dG9tXTtcbiAgICAgICAgZm9yIChsZXQgaSBpbiBuZXdTcXVhcmVzKSB7XG4gICAgICAgICAgICBsZXQgW3JvdywgY29sXSA9IFtuZXdTcXVhcmVzW2ldWzBdLCBuZXdTcXVhcmVzW2ldWzFdXTtcbiAgICAgICAgICAgIGlmIChmaWVsZFtyb3ddID09PSB1bmRlZmluZWQgfHwgZmllbGRbcm93XVtjb2xdID09PSB1bmRlZmluZWQgfHwgZmllbGRbcm93XVtjb2xdKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMud2FsbEtpY2soZmllbGQsIFwidHVyblJpZ2h0XCIsIG9sZFBvc2l0aW9uKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIHR1cm5MZWZ0KGZpZWxkLCBvbGRQb3NpdGlvbikge1xuICAgICAgICB0aGlzLmNsZWFyU2VsZkZyb21Cb2FyZChmaWVsZCk7XG4gICAgICAgIGxldCBzcXVhcmVzID0gW107XG4gICAgICAgIE9iamVjdC52YWx1ZXModGhpcy5wb3NpdGlvbikuZm9yRWFjaChjb29yZGluYXRlc0FycmF5ID0+IHNxdWFyZXMucHVzaCguLi5jb29yZGluYXRlc0FycmF5KSk7XG4gICAgICAgIHRoaXMucG9zaXRpb24udG9wID0gW107XG4gICAgICAgIHRoaXMucG9zaXRpb24ubWlkZGxlID0gW107XG4gICAgICAgIHRoaXMucG9zaXRpb24uYm90dG9tID0gW107XG4gICAgICAgIHNxdWFyZXMuZm9yRWFjaChzcXVhcmUgPT4ge1xuICAgICAgICAgICAgbGV0IGNvbHVtbiA9IHNxdWFyZVsxXTtcbiAgICAgICAgICAgIGxldCBoZWlnaHREaWZmZXJlbmNlID0gdGhpcy50dXJuaW5nUG9pbnRbMF0gLSBzcXVhcmVbMF07XG4gICAgICAgICAgICBsZXQgd2lkdGhEaWZmZXJlbmNlID0gdGhpcy50dXJuaW5nUG9pbnRbMV0gLSBzcXVhcmVbMV07XG4gICAgICAgICAgICBsZXQgbmV3Q29sID0gdGhpcy50dXJuaW5nUG9pbnRbMV0gLSBoZWlnaHREaWZmZXJlbmNlO1xuICAgICAgICAgICAgbGV0IG5ld1JvdyA9IHRoaXMudHVybmluZ1BvaW50WzBdIC0gKHdpZHRoRGlmZmVyZW5jZSAqIC0xKTtcbiAgICAgICAgICAgIHN3aXRjaCAoY29sdW1uKSB7XG4gICAgICAgICAgICAgICAgY2FzZSBjb2x1bW4gPSB0aGlzLnJpZ2h0TW9zdFsxXTpcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wb3NpdGlvbi50b3AucHVzaChbbmV3Um93LCBuZXdDb2xdKTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSBjb2x1bW4gPSB0aGlzLmxlZnRNb3N0WzFdOlxuICAgICAgICAgICAgICAgICAgICB0aGlzLnBvc2l0aW9uLmJvdHRvbS5wdXNoKFtuZXdSb3csIG5ld0NvbF0pO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgICAgICB0aGlzLnBvc2l0aW9uLm1pZGRsZS5wdXNoKFtuZXdSb3csIG5ld0NvbF0pO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICAgICAgdGhpcy5zZXRSZW1vdmVTcXVhcmVzKG9sZFBvc2l0aW9uKTtcblxuICAgICAgICAvLyBmaW5kIGxlZnQgYW5kIHJpZ2h0IG1vc3Qgc3F1YXJlcyB0byBzZWUgaWYgcGllY2UgdGhyb3VnaCB3YWxsXG4gICAgICAgIC8vIGlmIHRocm91Z2ggd2FsbCwgcHVzaCBwaWVjZSBiYWNrIGludG8gZmllbGRcbiAgICAgICAgdGhpcy5zZXRPdXRlclNxdWFyZXMoKTtcblxuICAgICAgICAvLyByZXNldCByb3RhdGlvbiBzdGF0ZSwgd2hpY2ggaXMgdHJhY2tlZCBmb3IgaW1wbGVtZW50aW5nIHN1cGVyIHJvdGF0aW9uIHN5c3RlbVxuICAgICAgICB0aGlzLnJvdGF0aW9uU3RhdGUgPSB0aGlzLnJvdGF0aW9uU3RhdGUgPT09IDAgPyAzIDogdGhpcy5yb3RhdGlvblN0YXRlIC0gMTtcblxuICAgICAgICBsZXQgbmV3U3F1YXJlcyA9IFsuLi50aGlzLnBvc2l0aW9uLnRvcCwgLi4udGhpcy5wb3NpdGlvbi5taWRkbGUsIC4uLnRoaXMucG9zaXRpb24uYm90dG9tXTtcbiAgICAgICAgZm9yIChsZXQgaSBpbiBuZXdTcXVhcmVzKSB7XG4gICAgICAgICAgICBsZXQgW3JvdywgY29sXSA9IFtuZXdTcXVhcmVzW2ldWzBdLCBuZXdTcXVhcmVzW2ldWzFdXTtcbiAgICAgICAgICAgIGlmIChmaWVsZFtyb3ddID09PSB1bmRlZmluZWQgfHwgZmllbGRbcm93XVtjb2xdID09PSB1bmRlZmluZWQgfHwgZmllbGRbcm93XVtjb2xdKSB7XG4gICAgICAgICAgICAgICAgdGhpcy53YWxsS2ljayhmaWVsZCwgXCJ0dXJuTGVmdFwiLCBvbGRQb3NpdGlvbik7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgIH1cblxuICAgIC8vIGNvbXBhcmUgb2xkIHBvc2l0aW9uIG9mIHBpZWNlIHdpdGggbmV3IHBvc2l0aW9uIFxuICAgIHNldFJlbW92ZVNxdWFyZXMob2xkUG9zaXRpb24sIGZpZWxkKSB7XG4gICAgICAgIGxldCBvbGRTcXVhcmVzID0gW107XG4gICAgICAgIGxldCBuZXdTcXVhcmVzID0gW107XG4gICAgICAgIE9iamVjdC52YWx1ZXMob2xkUG9zaXRpb24pLmZvckVhY2goY29vcmRpbmF0ZXNBcnJheSA9PiBvbGRTcXVhcmVzLnB1c2goLi4uY29vcmRpbmF0ZXNBcnJheSkpO1xuICAgICAgICBPYmplY3QudmFsdWVzKHRoaXMucG9zaXRpb24pLmZvckVhY2goY29vcmRpbmF0ZXNBcnJheSA9PiBuZXdTcXVhcmVzLnB1c2goLi4uY29vcmRpbmF0ZXNBcnJheSkpO1xuICAgICAgICAvLyBrZWVwIHRyYWNrIG9mIHNxdWFyZXMgdGhhdCB0aGUgcG9zaXRpb25zIGRvIG5vdCBoYXZlIGluIGNvbW1vbiAoc3F1YXJlcyB0byByZW1vdmUgY29sb3IgZnJvbSlcbiAgICAgICAgdGhpcy5yZW1vdmVTcXVhcmVzID0gb2xkU3F1YXJlcy5maWx0ZXIob2xkU3F1YXJlID0+IHtcbiAgICAgICAgICAgIGlmICghZmllbGQpIHtcbiAgICAgICAgICAgICAgICBpZiAoIXRoaXMuX2luY2x1ZGVzKG9sZFNxdWFyZSwgbmV3U3F1YXJlcykpIHJldHVybiBvbGRTcXVhcmU7XG4gICAgICAgICAgICAvLyBpZiBmaWVsZCBhcmd1bWVudCBpcyBwYXNzZWQsIGNoZWNrIHRoZSBmaWVsZCB0byBtYWtlIHN1cmUgdG8gbm90IGNsZWFyIHNxdWFyZXMgb2Ygb3RoZXIgcGllY2VzXG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGlmICghdGhpcy5faW5jbHVkZXMob2xkU3F1YXJlLCBuZXdTcXVhcmVzKSAmJiAhZmllbGRbb2xkU3F1YXJlWzBdXVtvbGRTcXVhcmVbMV1dKSByZXR1cm4gb2xkU3F1YXJlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgXG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGhhbmdpbmdTcXVhcmVzKHBvc2l0aW9uKSB7XG4gICAgICAgIGxldCBzcXVhcmVzID0gW107XG4gICAgICAgIGxldCBoYW5naW5nU3F1YXJlcyA9IFtdO1xuICAgICAgICBPYmplY3QudmFsdWVzKHBvc2l0aW9uKS5mb3JFYWNoKGNvb3JkaW5hdGVBcnJheSA9PiBzcXVhcmVzLnB1c2goLi4uY29vcmRpbmF0ZUFycmF5KSlcbiAgICAgICAgc3F1YXJlcy5mb3JFYWNoKHNxdWFyZSA9PiB7XG4gICAgICAgICAgICBsZXQgYmVsb3dTcXVhcmUgPSBbc3F1YXJlWzBdICsgMSwgc3F1YXJlWzFdXTtcbiAgICAgICAgICAgIGlmICghdGhpcy5faW5jbHVkZXMoYmVsb3dTcXVhcmUsIHNxdWFyZXMpKSBoYW5naW5nU3F1YXJlcy5wdXNoKHNxdWFyZSk7XG4gICAgICAgIH0pXG4gICAgICAgIHJldHVybiBoYW5naW5nU3F1YXJlcztcbiAgICB9XG5cbiAgICBzaWRlU3F1YXJlcygpIHtcbiAgICAgICAgbGV0IHNxdWFyZXMgPSBbXTtcbiAgICAgICAgbGV0IHNpZGVTcXVhcmVzID0ge1xuICAgICAgICAgICAgbGVmdDogW10sXG4gICAgICAgICAgICByaWdodDogW11cbiAgICAgICAgfTtcbiAgICAgICAgT2JqZWN0LnZhbHVlcyh0aGlzLnBvc2l0aW9uKS5mb3JFYWNoKGNvb3JkaW5hdGVBcnJheSA9PiBzcXVhcmVzLnB1c2goLi4uY29vcmRpbmF0ZUFycmF5KSk7XG4gICAgICAgIHNxdWFyZXMuZm9yRWFjaChzcXVhcmUgPT4ge1xuICAgICAgICAgICAgbGV0IGFkamFjZW50TGVmdCA9IFtzcXVhcmVbMF0sIHNxdWFyZVsxXSAtIDFdO1xuICAgICAgICAgICAgbGV0IGFkamFjZW50UmlnaHQgPSBbc3F1YXJlWzBdLCBzcXVhcmVbMV0gKyAxXTtcbiAgICAgICAgICAgIGlmICghdGhpcy5faW5jbHVkZXMoYWRqYWNlbnRMZWZ0LCBzcXVhcmVzKSkgc2lkZVNxdWFyZXMubGVmdC5wdXNoKHNxdWFyZSk7XG4gICAgICAgICAgICBpZiAoIXRoaXMuX2luY2x1ZGVzKGFkamFjZW50UmlnaHQsIHNxdWFyZXMpKSBzaWRlU3F1YXJlcy5yaWdodC5wdXNoKHNxdWFyZSk7XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gc2lkZVNxdWFyZXM7XG4gICAgfVxuXG4gICAgaXNGYWxsaW5nKGZpZWxkKSB7XG4gICAgICAgIGxldCByZXN1bHQgPSB0cnVlO1xuICAgICAgICB0aGlzLmhhbmdpbmdTcXVhcmVzKHRoaXMucG9zaXRpb24pLmZvckVhY2goY29vcmRpbmF0ZVBhaXIgPT4ge1xuICAgICAgICAgICAgbGV0IFtyb3csIGNvbF0gPSBbY29vcmRpbmF0ZVBhaXJbMF0sIGNvb3JkaW5hdGVQYWlyWzFdXTtcbiAgICAgICAgICAgIC8vIGlmIHRoZSBwaWVjZSdzIGN1cnJlbnQgcG9zaXRpb24gaXMgYWJvdmUgdGhlIGZpZWxkIGZsb29yIG9yIGEgYW5vdGhlciBwaWVjZSAobm90IGluY2x1ZGUgZ2hvc3QgcGllY2UpXG4gICAgICAgICAgICBpZiAoIWZpZWxkW3JvdyArIDFdIHx8IChmaWVsZFtyb3cgKyAxXVtjb2xdICYmIGZpZWxkW3JvdyArIDFdW2NvbF0gIT09IFwieFwiKSkge1xuICAgICAgICAgICAgICAgIHJlc3VsdCA9IGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG5cbiAgICByaWdodFNpZGVCbG9ja2VkKGZpZWxkKSB7XG4gICAgICAgIC8vIGlmICh0aGlzLnBvc2l0aW9uLnRvcFswXVswXSA8IDApIHJldHVybiBmYWxzZTtcbiAgICAgICAgbGV0IHJlc3VsdCA9IGZhbHNlO1xuICAgICAgICB0aGlzLnNpZGVTcXVhcmVzKCkucmlnaHQuZm9yRWFjaChjb29yZGluYXRlUGFpciA9PiB7XG4gICAgICAgICAgICBsZXQgW3JvdywgY29sXSA9IFtjb29yZGluYXRlUGFpclswXSwgY29vcmRpbmF0ZVBhaXJbMV1dO1xuICAgICAgICAgICAgLy8gaWYgYW55IHJpZ2h0IGZhY2luZyBzcXVhcmUgaGl0cyB0aGUgd2FsbCBvciBhbm90aGVyIHBpZWNlLCBub3QgaW5jbHVkaW5nIHRoZSBnaG9zdCBwaWVjZVxuICAgICAgICAgICAgaWYgKGNvbCA9PT0gOSB8fCAoZmllbGRbcm93XSAmJiBmaWVsZFtyb3ddW2NvbCArIDFdICYmIGZpZWxkW3JvdyArIDFdW2NvbF0gIT09IFwieFwiKSkge1xuICAgICAgICAgICAgICAgIHJlc3VsdCA9IHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cblxuICAgIGxlZnRTaWRlQmxvY2tlZChmaWVsZCkge1xuICAgICAgICAvLyBpZiAodGhpcy5wb3NpdGlvbi50b3BbMF1bMF0gPCAwKSByZXR1cm4gZmFsc2U7XG4gICAgICAgIGxldCByZXN1bHQgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5zaWRlU3F1YXJlcygpLmxlZnQuZm9yRWFjaChjb29yZGluYXRlUGFpciA9PiB7XG4gICAgICAgICAgICBsZXQgW3JvdywgY29sXSA9IFtjb29yZGluYXRlUGFpclswXSwgY29vcmRpbmF0ZVBhaXJbMV1dO1xuICAgICAgICAgICAgLy8gaWYgYW55IGxlZnQgZmFjaW5nIHNxdWFyZSBoaXRzIHRoZSB3YWxsIG9yIGFub3RoZXIgcGllY2UsIG5vdCBpbmNsdWRpbmcgdGhlIGdob3N0IHBpZWNlXG4gICAgICAgICAgICBpZiAoY29sID09PSAwIHx8IChmaWVsZFtyb3ddICYmIGZpZWxkW3Jvd11bY29sIC0gMV0gJiYgZmllbGRbcm93XVtjb2wgLSAxXSAhPT0gXCJ4XCIpKSB7XG4gICAgICAgICAgICAgICAgcmVzdWx0ID0gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxuXG4gICAgd2FsbEtpY2soZmllbGQsIGFjdGlvbiwgb2xkUG9zaXRpb24pIHtcbiAgICAgICAgbGV0IHZhbGlkU3BvdCwgc3RhcnRpbmdPZmZzZXQ7XG4gICAgICAgIGlmIChhY3Rpb24gPT09IFwidHVyblJpZ2h0XCIpIHtcbiAgICAgICAgICAgIHN0YXJ0aW5nT2Zmc2V0ID0gdGhpcy5yb3RhdGlvblN0YXRlID09PSAwID8gdGhpcy5vZmZzZXRHdWlkZVszXSA6IHRoaXMub2Zmc2V0R3VpZGVbdGhpcy5yb3RhdGlvblN0YXRlIC0gMV07XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBzdGFydGluZ09mZnNldCA9IHRoaXMucm90YXRpb25TdGF0ZSA9PT0gMyA/IHRoaXMub2Zmc2V0R3VpZGVbMF0gOiB0aGlzLm9mZnNldEd1aWRlW3RoaXMucm90YXRpb25TdGF0ZSArIDFdO1xuICAgICAgICB9XG4gICAgICAgIGxldCBuZXh0T2Zmc2V0ID0gdGhpcy5vZmZzZXRHdWlkZVt0aGlzLnJvdGF0aW9uU3RhdGVdO1xuICAgICAgICAvLyBmb3IgKGxldCBpID0gMDsgaSA8IDU7IGkrKykge1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IDY7IGkrKykge1xuICAgICAgICAgICAgLy8gaWYgaSA9PT0gNSwgdGhlcmUgYXJlIG5vIG1vcmUgcG90ZW50aWFsIHBvc2l0aW9ucyB0byBjaGVjayBhbmQgdGhlIHBpZWNlJ3MgcG9zaXRpb24gaXMgdGhlIGluaXRpYWwgcG9zaXRpb24gZnJvbSBiZWZvcmUgdHVybmluZ1xuICAgICAgICAgICAgaWYgKGkgPT09IDUpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnBvc2l0aW9uID0gb2xkUG9zaXRpb247XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdmFsaWRTcG90ID0gdHJ1ZTtcbiAgICAgICAgICAgIGxldCBiYXNlUG9zaXRpb24gPSB7XG4gICAgICAgICAgICAgICAgdG9wOiB0aGlzLnBvc2l0aW9uLnRvcC5tYXAoYXJyYXkgPT4gYXJyYXkuc2xpY2UoKSksXG4gICAgICAgICAgICAgICAgbWlkZGxlOiB0aGlzLnBvc2l0aW9uLm1pZGRsZS5tYXAoYXJyYXkgPT4gYXJyYXkuc2xpY2UoKSksXG4gICAgICAgICAgICAgICAgYm90dG9tOiB0aGlzLnBvc2l0aW9uLmJvdHRvbS5tYXAoYXJyYXkgPT4gYXJyYXkuc2xpY2UoKSksXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBsZXQgYmFzZVR1cm5pbmdQb2ludCA9IHRoaXMudHVybmluZ1BvaW50LnNsaWNlKCk7XG5cbiAgICAgICAgICAgIGxldCBzdGFydGluZ1RyYW5zbGF0aW9uID0gc3RhcnRpbmdPZmZzZXRbaV07XG4gICAgICAgICAgICBsZXQgcG90ZW50aWFsVHJhbnNsYXRpb24gPSBuZXh0T2Zmc2V0W2ldO1xuICAgICAgICAgICAgbGV0IHJvd1NoaWZ0ID0gc3RhcnRpbmdUcmFuc2xhdGlvblswXSAtIHBvdGVudGlhbFRyYW5zbGF0aW9uWzBdO1xuICAgICAgICAgICAgbGV0IGNvbFNoaWZ0ID0gc3RhcnRpbmdUcmFuc2xhdGlvblsxXSAtIHBvdGVudGlhbFRyYW5zbGF0aW9uWzFdO1xuICAgICAgICAgICAgbGV0IHRyYW5zbGF0ZVZlcnRpY2FsID0gcm93U2hpZnQgPiAwID8gKCkgPT4gdGhpcy5tb3ZlKFwidXBcIikgOiAoKSA9PiB0aGlzLm1vdmUoXCJkb3duXCIpO1xuICAgICAgICAgICAgbGV0IHRyYW5zbGF0ZUhvcml6b250YWwgPSBjb2xTaGlmdCA+IDAgPyAoKSA9PiB0aGlzLm1vdmUoXCJyaWdodFwiKSA6ICgpID0+IHRoaXMubW92ZShcImxlZnRcIik7XG4gICAgICAgICAgICBmb3IgKGxldCBudW1UaW1lc1Jvd1NoaWZ0ZWQgPSAwOyBudW1UaW1lc1Jvd1NoaWZ0ZWQgPCBNYXRoLmFicyhyb3dTaGlmdCk7IG51bVRpbWVzUm93U2hpZnRlZCsrKSB7XG4gICAgICAgICAgICAgICAgdHJhbnNsYXRlVmVydGljYWwoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGZvciAobGV0IG51bVRpbWVzQ29sU2hpZnRlZCA9IDA7IG51bVRpbWVzQ29sU2hpZnRlZCA8IE1hdGguYWJzKGNvbFNoaWZ0KTsgbnVtVGltZXNDb2xTaGlmdGVkKyspIHtcbiAgICAgICAgICAgICAgICB0cmFuc2xhdGVIb3Jpem9udGFsKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBsZXQgbmV3UG9zaXRpb24gPSBbLi4udGhpcy5wb3NpdGlvbi50b3AsIC4uLnRoaXMucG9zaXRpb24ubWlkZGxlLCAuLi50aGlzLnBvc2l0aW9uLmJvdHRvbV07XG4gICAgICAgICAgICBmb3IgKGxldCBpIGluIG5ld1Bvc2l0aW9uKSB7XG4gICAgICAgICAgICAgICAgbGV0IFtyb3csIGNvbF0gPSBbbmV3UG9zaXRpb25baV1bMF0sIG5ld1Bvc2l0aW9uW2ldWzFdXTtcbiAgICAgICAgICAgICAgICBpZiAoZmllbGRbcm93XSA9PT0gdW5kZWZpbmVkIHx8IGZpZWxkW3Jvd11bY29sXSA9PT0gdW5kZWZpbmVkIHx8IGZpZWxkW3Jvd11bY29sXSA+IDApIHtcbiAgICAgICAgICAgICAgICAgICAgdmFsaWRTcG90ID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMucG9zaXRpb24gPSBiYXNlUG9zaXRpb247XG4gICAgICAgICAgICAgICAgICAgIHRoaXMudHVybmluZ1BvaW50ID0gYmFzZVR1cm5pbmdQb2ludDtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gYWxsb3dzIHRTcGluIHZhcmlhYmxlIHRvIGJlIHRydXRoeVxuICAgICAgICAgICAgaWYgKHZhbGlkU3BvdCkge1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLm5hbWUgPT09IFwiVFBpZWNlXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn0iLCJpbXBvcnQgUGllY2UgZnJvbSAnLi9waWVjZSc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNQaWVjZSBleHRlbmRzIFBpZWNlIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgdGhpcy5uYW1lID0gXCJTUGllY2VcIjtcbiAgICAgICAgdGhpcy5wb3NpdGlvbiA9IHtcbiAgICAgICAgICAgIHRvcDogW1swLCA0XSwgWzAsIDVdXSxcbiAgICAgICAgICAgIG1pZGRsZTogW10sXG4gICAgICAgICAgICBib3R0b206IFtbMSwgM10sIFsxLCA0XV1cbiAgICAgICAgfTtcbiAgICAgICAgdGhpcy5jb2xvckNvZGUgPSA0O1xuXG4gICAgICAgIHRoaXMudHVybmluZ1BvaW50ID0gWzEsIDRdO1xuXG4gICAgICAgIHRoaXMuZGlzcGxheVNxdWFyZXMgPSBbWzMsIDFdLCBbMiwgMV0sIFsyLCAyXSwgWzEsIDJdXTtcblxuICAgICAgICB0aGlzLnJlbW92ZVNxdWFyZXMgPSBbXTtcbiAgICB9XG59IiwiaW1wb3J0IFBpZWNlIGZyb20gJy4vcGllY2UnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUUGllY2UgZXh0ZW5kcyBQaWVjZSB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIHRoaXMubmFtZSA9IFwiVFBpZWNlXCI7XG4gICAgICAgIHRoaXMucG9zaXRpb24gPSB7XG4gICAgICAgICAgICB0b3A6IFtbMCwgNF1dLFxuICAgICAgICAgICAgbWlkZGxlOiBbXSxcbiAgICAgICAgICAgIGJvdHRvbTogW1sxLCAzXSwgWzEsIDRdLCBbMSwgNV1dLFxuICAgICAgICB9XG4gICAgICAgIHRoaXMuY29sb3JDb2RlID0gMztcblxuICAgICAgICB0aGlzLnR1cm5pbmdQb2ludCA9IFsxLCA0XTtcblxuICAgICAgICB0aGlzLmRpc3BsYXlTcXVhcmVzID0gW1sxLCAyXSwgWzIsIDJdLCBbMywgMl0sIFsyLCAxXV07XG5cbiAgICAgICAgdGhpcy5yZW1vdmVTcXVhcmVzID0gW107XG4gICAgfVxufSIsImltcG9ydCBQaWVjZSBmcm9tICcuL3BpZWNlJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgWlBpZWNlIGV4dGVuZHMgUGllY2Uge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICB0aGlzLm5hbWUgPSBcIlpQaWVjZVwiO1xuICAgICAgICB0aGlzLnBvc2l0aW9uID0ge1xuICAgICAgICAgICAgdG9wOiBbWzAsIDNdLCBbMCwgNF1dLFxuICAgICAgICAgICAgbWlkZGxlOiBbXSxcbiAgICAgICAgICAgIGJvdHRvbTogW1sxLCA0XSwgWzEsIDVdXVxuICAgICAgICB9O1xuICAgICAgICB0aGlzLmNvbG9yQ29kZSA9IDU7XG5cbiAgICAgICAgdGhpcy50dXJuaW5nUG9pbnQgPSBbMSwgNF07XG5cbiAgICAgICAgdGhpcy5kaXNwbGF5U3F1YXJlcyA9IFtbMSwgMV0sIFsyLCAxXSwgWzIsIDJdLCBbMywgMl1dO1xuXG4gICAgICAgIHRoaXMucmVtb3ZlU3F1YXJlcyA9IFtdO1xuICAgIH1cbn0iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBTY29yZUtlZXBlciB7XG4gICAgY3JlYXRlU2NvcmVLZWVwZXIoKSB7XG4gICAgICAgIGxldCBzY29yZUtlZXBlckRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBzY29yZUtlZXBlckRpdi5jbGFzc0xpc3QuYWRkKCdzY29yZWtlZXBlcicpO1xuICAgICAgICBzY29yZUtlZXBlckRpdi5pbm5lckhUTUwgPSAnMCc7XG4gICAgICAgIHJldHVybiBzY29yZUtlZXBlckRpdjtcbiAgICB9XG5cbiAgICBhZGRUb1Njb3JlKGxpbmVzQ2xlYXJlZCkge1xuICAgICAgICBsZXQgc2NvcmVLZWVwZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2NvcmVrZWVwZXInKTtcbiAgICAgICAgbGV0IHNjb3JlID0gTnVtYmVyKHNjb3JlS2VlcGVyLmlubmVySFRNTCk7XG4gICAgICAgIGlmIChsaW5lc0NsZWFyZWQgPT09IDEpIHtcbiAgICAgICAgICAgIHNjb3JlICs9IDEwMDsgXG4gICAgICAgIH0gZWxzZSBpZiAobGluZXNDbGVhcmVkID09PSAyKSB7XG4gICAgICAgICAgICBzY29yZSArPSAyMjU7XG4gICAgICAgIH0gZWxzZSBpZiAobGluZXNDbGVhcmVkID09PSAzKSB7XG4gICAgICAgICAgICBzY29yZSArPSAzNTA7XG4gICAgICAgIH0gZWxzZSBpZiAobGluZXNDbGVhcmVkID09PSA0KSB7XG4gICAgICAgICAgICBzY29yZSArPSA1MDA7XG4gICAgICAgIH1cbiAgICAgICAgc2NvcmVLZWVwZXIuaW5uZXJIVE1MID0gc2NvcmU7XG4gICAgfVxuXG4gICAgZ2V0U2NvcmUoKSB7XG4gICAgICAgIGxldCBzY29yZUtlZXBlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zY29yZWtlZXBlcicpO1xuICAgICAgICByZXR1cm4gc2NvcmVLZWVwZXIuaW5uZXJIVE1MO1xuICAgIH1cbn0iXSwic291cmNlUm9vdCI6IiJ9