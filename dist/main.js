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

      for (var i in this.currentPiece.position.bottom) {
        var square = this.currentPiece.position.bottom[i];
        var row = square[0];
        var col = square[1];

        if (this.field[row][col]) {
          this.currentPiece.move("up", this.field);
          break;
        }
      }

      ;

      for (var _i in this.currentPiece.position.bottom) {
        var _square = this.currentPiece.position.bottom[_i];
        var _row = _square[0];
        var _col = _square[1];

        if (this.field[_row][_col]) {
          this.gameOver(this.opponent.gameNum);
          break;
        }
      }

      ;
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
      } // let gameOverOptions = document.createElement('div');
      // gameOverOptions.classList.add('game-over-options');
      // let tryAgain = document.createElement('p');
      // let mainMenu = document.createElement('p');
      // tryAgain.classList.add('game-over-heading');
      // mainMenu.classList.add('game-over-heading');
      // tryAgain.innerHTML = "Try Again";
      // mainMenu.innerHTML = "Main Menu";
      // mainMenu.addEventListener('click', () => {
      //     let fieldContainer1 = document.getElementById('field-container-1');
      //     let fieldContainer2 = document.getElementById('field-container-2');
      //     let singlePlayerContent = document.querySelector('.single-player-content');
      //     let gameOverDiv = document.querySelector('.game-over-div');
      //     [fieldContainer1, fieldContainer2, singlePlayerContent, gameOverDiv].forEach(item => {
      //         document.body.removeChild(item);
      //     });
      //     document.querySelector('#menu').style.display = "flex";
      // });
      // gameOverOptions.append(tryAgain);
      // gameOverOptions.append(mainMenu);
      // gameOverScreen.append(gameOverOptions);


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
      // document.body.removeChild(this.menu);
      this.menu.style.display = "none";
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
  }, {
    key: "returnToMenu",
    value: function returnToMenu() {
      var fieldContainer1 = document.getElementById('field-container-1');
      var fieldContainer2 = document.getElementById('field-container-2');
      var singlePlayerContent = document.querySelector('single-player-content');
      [fieldContainer1, fieldContainer2, singlePlayerContent].forEach(function (item) {
        document.body.remove(item);
      });
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
      allSinglePlayerContent.classList.add('single-player-content');
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
      bottom: [[0, 3], [0, 4], [0, 5], [0, 6]]
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2ZpZWxkL2ZpZWxkLmpzIiwid2VicGFjazovLy8uL3NyYy9maWVsZC9ob2xkYm94LmpzIiwid2VicGFjazovLy8uL3NyYy9maWVsZC9uZXh0Qm94LmpzIiwid2VicGFjazovLy8uL3NyYy9maWVsZC9xdWV1ZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvZ2FtZS9nYW1lLmpzIiwid2VicGFjazovLy8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvbWVudS9tZW51LmpzIiwid2VicGFjazovLy8uL3NyYy9tb2RhbC9tb2RhbC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvbW9kYWwvbXVsdGlwbGF5ZXJDb250ZW50LmpzIiwid2VicGFjazovLy8uL3NyYy9tb2RhbC9zaW5nbGVQbGF5ZXJDb250ZW50LmpzIiwid2VicGFjazovLy8uL3NyYy9tdWx0aXBsYXllci9tdWx0aXBsYXllci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcGllY2VzL2lQaWVjZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcGllY2VzL2pQaWVjZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcGllY2VzL2xQaWVjZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcGllY2VzL29QaWVjZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcGllY2VzL3BpZWNlLmpzIiwid2VicGFjazovLy8uL3NyYy9waWVjZXMvc1BpZWNlLmpzIiwid2VicGFjazovLy8uL3NyYy9waWVjZXMvdFBpZWNlLmpzIiwid2VicGFjazovLy8uL3NyYy9waWVjZXMvelBpZWNlLmpzIiwid2VicGFjazovLy8uL3NyYy9zY29yZWtlZXBlci9zY29yZWtlZXBlci5qcyJdLCJuYW1lcyI6WyJGaWVsZCIsImZpZWxkTnVtIiwiZmllbGQiLCJpIiwicm93IiwicHVzaCIsImNvbHVtbiIsImRvY3VtZW50IiwiY3JlYXRlRWxlbWVudCIsImNsYXNzTGlzdCIsImFkZCIsImFwcGVuZCIsImFwcGVuZENoaWxkIiwiX2NyZWF0ZUNvbHVtbiIsImNvbnRhaW5lciIsInF1ZXVlIiwiUXVldWUiLCJuZXh0Qm94IiwiTmV4dEJveCIsImhvbGRCb3giLCJIb2xkQm94IiwiX2NyZWF0ZUZpZWxkIiwiY3JlYXRlUXVldWUiLCJjcmVhdGVOZXh0Qm94ZXMiLCJwcmVwZW5kIiwiY3JlYXRlQm94IiwiYm94V3JhcHBlciIsImJveCIsImhlYWRpbmciLCJpbm5lckhUTUwiLCJfY3JlYXRlQm94Q29sdW1uIiwiX2NyZWF0ZU5leHRCb3hDb2x1bW4iLCJib3hlcyIsIl9jcmVhdGVOZXh0Qm94IiwicXVldWVNZXRlciIsImFkanVzdFF1ZXVlSGVpZ2h0IiwicGVyY2VudGFnZSIsInF1ZXJ5U2VsZWN0b3IiLCJzdHlsZSIsImhlaWdodCIsIkdhbWUiLCJvcHRpb25zIiwic2V0RmllbGQiLCJjb2xvcnMiLCJnYW1lTnVtIiwiY3VycmVudEJhZyIsInNodWZmbGVCYWciLCJnZW5lcmF0ZUJhZyIsImN1cnJlbnRQaWVjZSIsImhvbGRQaWVjZSIsImdob3N0UG9zaXRpb24iLCJuZXh0QmFnIiwiY2FuSG9sZCIsImhhbmRsZUNsZWFyIiwiZHJvcCIsInJpZ2h0IiwibGVmdCIsImRvd24iLCJkcm9wU3BlZWQiLCJtb3ZlU3BlZWQiLCJkcm9wUGllY2UiLCJiaW5kIiwibW92ZSIsIm1vdmVQaWVjZSIsImFuaW1hdGUiLCJmcHNJbnRlcnZhbCIsInN0YXJ0VGltZSIsIm5vdyIsInRoZW4iLCJpc1BhdXNlZCIsImtleUhlbGQiLCJvcHBvbmVudCIsImNvbnRyb2xzIiwidXBjb21pbmdMaW5lcyIsImNvbWJvIiwidFNwaW4iLCJ0U3BpblN0cmVhayIsImNvbWJvR3VpZGUiLCJzdGFydEVsZXZhdGluZyIsImNsZWFyRWxldmF0ZUludGVydmFsIiwiZWxldmF0ZURlbGF5IiwiY2xlYXJUaW1lciIsInNjb3JlS2VlcGVyIiwiU2NvcmVLZWVwZXIiLCJvUGllY2UiLCJPUGllY2UiLCJpUGllY2UiLCJJUGllY2UiLCJ0UGllY2UiLCJUUGllY2UiLCJzUGllY2UiLCJTUGllY2UiLCJ6UGllY2UiLCJaUGllY2UiLCJsUGllY2UiLCJMUGllY2UiLCJqUGllY2UiLCJKUGllY2UiLCJfZ2VuZXJhdGVGaWVsZCIsInNoaWZ0IiwiY29vcmRpbmF0ZUFycmF5cyIsIk9iamVjdCIsInZhbHVlcyIsImZvckVhY2giLCJhcnJheSIsImNvb3JkaW5hdGUiLCJjb2wiLCJmaWVsZENvbHVtbnMiLCJxdWVyeVNlbGVjdG9yQWxsIiwiZmllbGRTcXVhcmUiLCJjaGlsZHJlbiIsImNvbG9yQ29kZSIsInRvcCIsInBvc2l0aW9uIiwibWFwIiwic2xpY2UiLCJtaWRkbGUiLCJib3R0b20iLCJzdG9wcGVkIiwiaGFuZ2luZ1NxdWFyZXMiLCJfcG9wdWxhdGVHaG9zdFBvc2l0aW9uIiwicmVuZGVyIiwiY2xlYXJTZWxmRnJvbUJvYXJkIiwiX2dlbmVyYXRlUGllY2UiLCJuYW1lIiwic2V0Q3VycmVudFBpZWNlIiwic2hvd0N1cnJlbnRCYWciLCJfcG9wdWxhdGVIb2xkQm94IiwiY29sdW1ucyIsImoiLCJjbGFzc05hbWUiLCJkaXNwbGF5U3F1YXJlcyIsInNxdWFyZSIsInBpZWNlTmFtZSIsImdldEVsZW1lbnRzQnlDbGFzc05hbWUiLCJfcG9wdWxhdGVOZXh0Qm94IiwicGllY2UiLCJiYWciLCJjdXJyZW50SW5kZXgiLCJsZW5ndGgiLCJ0ZW1wb3JhcnlWYWx1ZSIsInJhbmRvbUluZGV4IiwiTWF0aCIsImZsb29yIiwicmFuZG9tIiwicm93SWR4IiwiY29sSWR4Iiwic3F1YXJlVmFsdWUiLCJyZW1vdmUiLCJib2R5IiwiYWRkRXZlbnRMaXN0ZW5lciIsImV2ZW50IiwiZ2FtZUlzT3ZlciIsInNldE91dGVyU3F1YXJlcyIsIndoaWNoIiwidHVyblJpZ2h0IiwiY2xlYXJHaG9zdFBvc2l0aW9uIiwicG9wdWxhdGVGaWVsZCIsInNldEdob3N0UG9zaXRpb24iLCJ0dXJuTGVmdCIsImxlZnRTaWRlQmxvY2tlZCIsInJpZ2h0U2lkZUJsb2NrZWQiLCJzb2Z0RHJvcCIsImhvbGQiLCJoYXJkRHJvcCIsImhhbmRsZVBpZWNlU3RvcCIsImNhbmNlbEFuaW1hdGlvbkZyYW1lIiwibG93ZXN0IiwiaGlnaGVzdCIsIm51bUxpbmVzQ2xlYXJlZCIsImluY2x1ZGVzIiwiX2JyaW5nRG93bkZpZWxkIiwiY2xlYXJMaW5lcyIsInN0YXJ0aW5nUm93IiwibGVmdE1vc3QiLCJyaWdodE1vc3QiLCJsZWZ0TW9zdFJvdyIsInJpZ2h0TW9zdFJvdyIsImxlZnRNb3N0Q29sIiwicmlnaHRNb3N0Q29sIiwibnVtTGluZXMiLCJhZGRMaW5lc1RvUXVldWUiLCJhYnMiLCJyZWNlaXZlVXBjb21pbmdMaW5lcyIsImFkZFRvU2NvcmUiLCJjbGVhckdob3N0Q2xhc3MiLCJwbGF5IiwiZnBzIiwiRGF0ZSIsInJlcXVlc3RBbmltYXRpb25GcmFtZSIsImVsYXBzZWQiLCJpc0ZhbGxpbmciLCJib3R0b21Nb3N0IiwiZGlyZWN0aW9uIiwiYXRUb3AiLCJnYW1lT3ZlciIsImhhbmRsZVRvcFBpZWNlIiwiYWRkVG9DdXJyZW50QmFnIiwicmVmaWxsTmV4dEJhZyIsIndpbm5lciIsImdhbWVPdmVyU2NyZWVuIiwiZ2FtZU92ZXJIZWFkaW5nIiwid2lubmVySGVhZGluZyIsInNjb3JlIiwiZ2V0U2NvcmUiLCJzdG9wVGltZXIiLCJjbGVhckludGVydmFsIiwiY2xlYXJFbGV2YXRpb24iLCJwbGF5ZXIiLCJnYXJiYWdlTGluZXMiLCJyYW5kb21Ib2xlIiwiZ2FyYmFnZVJvdyIsImNvbmNhdCIsInNldEludGVydmFsIiwibWludXRlcyIsInNlY29uZHMiLCJvbGRTZWNvbmQiLCJOdW1iZXIiLCJvbGRNaW51dGUiLCJuZXdTZWNvbmRzIiwibWVudSIsIk1lbnUiLCJyZW5kZXJNZW51IiwiZ2V0RWxlbWVudEJ5SWQiLCJvcHRpb25zUGxheWVyMSIsIm9wdGlvbnNQbGF5ZXIyIiwiZ2FtZTEiLCJnYW1lMiIsImZpZWxkMSIsImZpZWxkMiIsIm11bHRpcGxheWVyTW9kZSIsIk11bHRpcGxheWVyIiwiZmllbGRDb250YWluZXIxIiwiZmllbGRDb250YWluZXIyIiwic2luZ2xlUGxheWVyQ29udGVudCIsIlNpbmdsZVBsYXllckNvbnRlbnQiLCJtdWx0aXBsYXllckNvbnRlbnQiLCJNdWx0aXBsYXllckNvbnRlbnQiLCJtb2RhbCIsIk1vZGFsIiwic2luZ2xlUGxheWVyQnV0dG9uIiwibXVsdGlwbGF5ZXJCdXR0b24iLCJhZGRFdmVudExpc3RlbmVycyIsInJlbmRlclNpbmdsZVBsYXllciIsInJlbmRlck11bHRpcGxheWVyIiwiZGlzcGxheSIsImp1c3RpZnlDb250ZW50IiwiY3JlYXRlQWxsQ29udGVudCIsImNyZWF0ZUNvbXBsZXRlRmllbGQiLCJrZXlMaXN0ZW5lciIsImNoYW5nZUNvbnRyb2xzIiwiYWRqdXN0RWxldmF0ZSIsImNyZWF0ZVRpbWVyIiwic3RhcnRUaW1lciIsInJlbW92ZUNoaWxkIiwiY29udHJvbHNDb250YWluZXIiLCJjcmVhdGVDb250cm9sc0NvbnRlbnQiLCJjcmVhdGUiLCJfY3JlYXRlQ2xvc2VNb2RhbExpbmsiLCJidXR0b25Db250YWluZXIiLCJyZW5kZXJCdXR0b25zIiwiYnV0dG9uIiwiY2xvc2VMaW5rIiwic3RhcnRNdWx0aXBsYXllciIsIml0ZW0iLCJjb250ZW50Iiwia2V5cyIsInBsYXllcjEiLCJwbGF5ZXIyIiwiY29udHJvbHNEaXYiLCJpbWFnZXMiLCJkZXNjcmlwdGlvbnMiLCJzcGFucyIsImRpdnMiLCJsYWJlbCIsInAiLCJpbWciLCJzZXRBdHRyaWJ1dGUiLCJhbGxTaW5nbGVQbGF5ZXJDb250ZW50IiwiY3JlYXRlU2NvcmVLZWVwZXIiLCJjb250ZW50RGl2IiwidGltZXIiLCJjb2xvbiIsImVsZSIsInNldE9wcG9uZW50IiwidHVybmluZ1BvaW50IiwicmVtb3ZlU3F1YXJlcyIsIm9mZnNldEd1aWRlIiwiUGllY2UiLCJ0b3BNb3N0Iiwicm90YXRpb25TdGF0ZSIsImNvb3JkaW5hdGVzQXJyYXkiLCJjb2x1bW5WYWx1ZSIsInJvd1ZhbHVlIiwicG9zaXRpb25BcnJheSIsIm9sZFNxdWFyZSIsIm5ld1NxdWFyZSIsInJlc3VsdCIsIl9zcXVhcmVzQXJlRXF1YWwiLCJvbGRQb3NpdGlvbiIsInNldFJlbW92ZVNxdWFyZXMiLCJvbGRUdXJuaW5nUG9pbnQiLCJzcXVhcmVzIiwiaGVpZ2h0RGlmZmVyZW5jZSIsIndpZHRoRGlmZmVyZW5jZSIsIm5ld0NvbCIsIm5ld1JvdyIsIm5ld1NxdWFyZXMiLCJ1bmRlZmluZWQiLCJ3YWxsS2ljayIsIm9sZFNxdWFyZXMiLCJmaWx0ZXIiLCJfaW5jbHVkZXMiLCJjb29yZGluYXRlQXJyYXkiLCJiZWxvd1NxdWFyZSIsInNpZGVTcXVhcmVzIiwiYWRqYWNlbnRMZWZ0IiwiYWRqYWNlbnRSaWdodCIsImNvb3JkaW5hdGVQYWlyIiwiYWN0aW9uIiwidmFsaWRTcG90Iiwic3RhcnRpbmdPZmZzZXQiLCJuZXh0T2Zmc2V0IiwiYmFzZVBvc2l0aW9uIiwiYmFzZVR1cm5pbmdQb2ludCIsInN0YXJ0aW5nVHJhbnNsYXRpb24iLCJwb3RlbnRpYWxUcmFuc2xhdGlvbiIsInJvd1NoaWZ0IiwiY29sU2hpZnQiLCJ0cmFuc2xhdGVWZXJ0aWNhbCIsInRyYW5zbGF0ZUhvcml6b250YWwiLCJudW1UaW1lc1Jvd1NoaWZ0ZWQiLCJudW1UaW1lc0NvbFNoaWZ0ZWQiLCJuZXdQb3NpdGlvbiIsInNjb3JlS2VlcGVyRGl2IiwibGluZXNDbGVhcmVkIl0sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFD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IFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCIvZGlzdC9cIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvaW5kZXguanNcIik7XG4iLCJpbXBvcnQgSG9sZEJveCBmcm9tICcuL2hvbGRib3gnO1xuaW1wb3J0IE5leHRCb3ggZnJvbSAnLi9uZXh0Qm94JztcbmltcG9ydCBRdWV1ZSBmcm9tICcuL3F1ZXVlJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRmllbGQgeyAgXG4gICAgY29uc3RydWN0b3IoZmllbGROdW0pIHtcbiAgICAgICAgdGhpcy5maWVsZE51bSA9IGZpZWxkTnVtO1xuICAgIH1cbiAgICBcbiAgICBfZ2VuZXJhdGVGaWVsZCgpIHtcbiAgICAgICAgbGV0IGZpZWxkID0gW107XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMjA7IGkrKykge1xuICAgICAgICAgICAgbGV0IHJvdyA9IFswLDAsMCwwLDAsMCwwLDAsMCwwXTtcbiAgICAgICAgICAgIGZpZWxkLnB1c2gocm93KTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZmllbGQ7XG4gICAgfVxuXG4gICAgX2NyZWF0ZUNvbHVtbigpIHtcbiAgICAgICAgbGV0IGNvbHVtbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ1bFwiKTtcbiAgICAgICAgY29sdW1uLmNsYXNzTGlzdC5hZGQoYGZpZWxkLWNvbHVtbmAsIGBmaWVsZC0ke3RoaXMuZmllbGROdW19YCk7XG5cbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCAyMDsgaSsrKSB7XG4gICAgICAgICAgICBjb2x1bW4uYXBwZW5kKGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaVwiKSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGNvbHVtbjtcbiAgICB9XG5cbiAgICBfY3JlYXRlRmllbGQoKSB7XG4gICAgICAgIGxldCBmaWVsZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIGZpZWxkLmNsYXNzTGlzdC5hZGQoYGZpZWxkLWJveGAsIGBmaWVsZC0ke3RoaXMuZmllbGROdW19YCk7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMTA7IGkrKykge1xuICAgICAgICAgICAgZmllbGQuYXBwZW5kQ2hpbGQodGhpcy5fY3JlYXRlQ29sdW1uKCkpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBmaWVsZDtcbiAgICB9XG5cbiAgICBjcmVhdGVDb21wbGV0ZUZpZWxkKGNvbnRhaW5lcikge1xuICAgICAgICBsZXQgcXVldWUgPSBuZXcgUXVldWUodGhpcy5maWVsZE51bSk7XG4gICAgICAgIGxldCBuZXh0Qm94ID0gbmV3IE5leHRCb3godGhpcy5maWVsZE51bSk7XG4gICAgICAgIGxldCBob2xkQm94ID0gbmV3IEhvbGRCb3godGhpcy5maWVsZE51bSk7XG4gICAgICAgIGNvbnRhaW5lci5hcHBlbmQodGhpcy5fY3JlYXRlRmllbGQoKSk7XG4gICAgICAgIGNvbnRhaW5lci5hcHBlbmQocXVldWUuY3JlYXRlUXVldWUoKSk7XG4gICAgICAgIGNvbnRhaW5lci5hcHBlbmQobmV4dEJveC5jcmVhdGVOZXh0Qm94ZXMoKSk7XG4gICAgICAgIGNvbnRhaW5lci5wcmVwZW5kKGhvbGRCb3guY3JlYXRlQm94KCkpO1xuICAgICAgICByZXR1cm4gY29udGFpbmVyO1xuICAgIH1cblxufSIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIEhvbGRCb3gge1xuICAgIGNvbnN0cnVjdG9yKGZpZWxkTnVtKSB7XG4gICAgICAgIHRoaXMuZmllbGROdW0gPSBmaWVsZE51bTtcbiAgICB9XG5cbiAgICBfY3JlYXRlQm94Q29sdW1uKCkge1xuICAgICAgICBsZXQgY29sdW1uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInVsXCIpO1xuICAgICAgICBjb2x1bW4uY2xhc3NMaXN0LmFkZChgaG9sZC1jb2x1bW5gLCBgZmllbGQtJHt0aGlzLmZpZWxkTnVtfWApO1xuXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgNDsgaSsrKSB7XG4gICAgICAgICAgICBjb2x1bW4uYXBwZW5kKGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaVwiKSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGNvbHVtbjtcbiAgICB9XG5cbiAgICBjcmVhdGVCb3goKSB7XG4gICAgICAgIGxldCBib3hXcmFwcGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgYm94V3JhcHBlci5jbGFzc0xpc3QuYWRkKGBob2xkLWJveC13cmFwcGVyYCwgYGZpZWxkLSR7dGhpcy5maWVsZE51bX1gKTtcbiAgICAgICAgbGV0IGJveCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIGJveC5jbGFzc0xpc3QuYWRkKGBob2xkLWJveGAsIGBmaWVsZC0ke3RoaXMuZmllbGROdW19YCk7XG4gICAgICAgIGxldCBoZWFkaW5nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgyXCIpO1xuICAgICAgICBoZWFkaW5nLmlubmVySFRNTCA9IFwiSE9MRFwiO1xuICAgICAgICBib3hXcmFwcGVyLmFwcGVuZENoaWxkKGhlYWRpbmcpO1xuICAgICAgICBib3hXcmFwcGVyLmFwcGVuZENoaWxkKGJveCk7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgNTsgaSsrKSB7XG4gICAgICAgICAgICBib3guYXBwZW5kQ2hpbGQodGhpcy5fY3JlYXRlQm94Q29sdW1uKCkpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBib3hXcmFwcGVyO1xuICAgIH1cbn0iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBOZXh0Qm94IHtcbiAgICBjb25zdHJ1Y3RvcihmaWVsZE51bSkge1xuICAgICAgICB0aGlzLmZpZWxkTnVtID0gZmllbGROdW07XG4gICAgfVxuXG4gICAgX2NyZWF0ZU5leHRCb3hDb2x1bW4oKSB7XG4gICAgICAgIGxldCBjb2x1bW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidWxcIik7XG4gICAgICAgIGNvbHVtbi5jbGFzc0xpc3QuYWRkKGBuZXh0LWNvbHVtbmAsIGBmaWVsZC0ke3RoaXMuZmllbGROdW19YCk7XG5cbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCA0OyBpKyspIHtcbiAgICAgICAgICAgIGNvbHVtbi5hcHBlbmQoZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpXCIpKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gY29sdW1uO1xuICAgIH1cblxuICAgIF9jcmVhdGVOZXh0Qm94KCkge1xuICAgICAgICBsZXQgYm94ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgYm94LmNsYXNzTGlzdC5hZGQoYG5leHQtYm94YCwgYGZpZWxkLSR7dGhpcy5maWVsZE51bX1gKTtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCA1OyBpKyspIHtcbiAgICAgICAgICAgIGJveC5hcHBlbmRDaGlsZCh0aGlzLl9jcmVhdGVOZXh0Qm94Q29sdW1uKCkpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBib3g7XG4gICAgfVxuXG4gICAgY3JlYXRlTmV4dEJveGVzKCkge1xuICAgICAgICBsZXQgYm94ZXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICBsZXQgaGVhZGluZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMlwiKTtcbiAgICAgICAgaGVhZGluZy5pbm5lckhUTUwgPSBcIk5FWFRcIjtcbiAgICAgICAgYm94ZXMuY2xhc3NMaXN0LmFkZChgbmV4dC1ib3hlc2AsIGBmaWVsZC0ke3RoaXMuZmllbGROdW19YCk7XG4gICAgICAgIGJveGVzLmFwcGVuZENoaWxkKGhlYWRpbmcpO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IDU7IGkrKykge1xuICAgICAgICAgICAgYm94ZXMuYXBwZW5kQ2hpbGQodGhpcy5fY3JlYXRlTmV4dEJveCgpKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gYm94ZXM7XG4gICAgfVxufSIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIFF1ZXVlIHtcbiAgICBjb25zdHJ1Y3RvcihmaWVsZE51bSkge1xuICAgICAgICB0aGlzLmZpZWxkTnVtID0gZmllbGROdW07XG4gICAgfVxuXG4gICAgY3JlYXRlUXVldWUoKSB7XG4gICAgICAgIGxldCBxdWV1ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIHF1ZXVlLmNsYXNzTGlzdC5hZGQoYHF1ZXVlYCwgYGZpZWxkLSR7dGhpcy5maWVsZE51bX1gKTtcbiAgICAgICAgbGV0IHF1ZXVlTWV0ZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICBxdWV1ZU1ldGVyLmNsYXNzTGlzdC5hZGQoYHF1ZXVlLW1ldGVyYCwgYGZpZWxkLSR7dGhpcy5maWVsZE51bX1gKTtcbiAgICAgICAgcXVldWUuYXBwZW5kQ2hpbGQocXVldWVNZXRlcik7XG4gICAgICAgIHJldHVybiBxdWV1ZTtcbiAgICB9XG59XG5cbmV4cG9ydCBjb25zdCBhZGp1c3RRdWV1ZUhlaWdodCA9IChmaWVsZE51bSwgcGVyY2VudGFnZSkgPT4ge1xuICAgIGxldCBxdWV1ZU1ldGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLnF1ZXVlLW1ldGVyLmZpZWxkLSR7ZmllbGROdW19YCk7XG4gICAgaWYgKHBlcmNlbnRhZ2UgPiAxMDApIHBlcmNlbnRhZ2UgPSAxMDA7XG4gICAgcXVldWVNZXRlci5zdHlsZS5oZWlnaHQgPSBgJHtwZXJjZW50YWdlfSVgXG59IiwiaW1wb3J0IEZpZWxkIGZyb20gJy4uL2ZpZWxkL2ZpZWxkJztcbmltcG9ydCBPUGllY2UgZnJvbSAnLi4vcGllY2VzL29QaWVjZSc7XG5pbXBvcnQgSVBpZWNlIGZyb20gJy4uL3BpZWNlcy9pUGllY2UnO1xuaW1wb3J0IFRQaWVjZSBmcm9tICcuLi9waWVjZXMvdFBpZWNlJztcbmltcG9ydCBTUGllY2UgZnJvbSAnLi4vcGllY2VzL3NQaWVjZSc7XG5pbXBvcnQgWlBpZWNlIGZyb20gJy4uL3BpZWNlcy96UGllY2UnO1xuaW1wb3J0IExQaWVjZSBmcm9tICcuLi9waWVjZXMvbFBpZWNlJztcbmltcG9ydCBKUGllY2UgZnJvbSAnLi4vcGllY2VzL2pQaWVjZSc7XG5pbXBvcnQgeyBhZGp1c3RRdWV1ZUhlaWdodCB9IGZyb20gJy4uL2ZpZWxkL3F1ZXVlJztcbmltcG9ydCBTY29yZUtlZXBlciBmcm9tICcuLi9zY29yZWtlZXBlci9zY29yZWtlZXBlcic7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEdhbWUge1xuICAgIGNvbnN0cnVjdG9yKG9wdGlvbnMpIHtcbiAgICAgICAgdGhpcy5maWVsZCA9IHRoaXMuc2V0RmllbGQoKVxuXG4gICAgICAgIHRoaXMuY29sb3JzID0ge1xuICAgICAgICAgICAgMTogXCJ5ZWxsb3dcIixcbiAgICAgICAgICAgIDI6IFwiYmx1ZVwiLFxuICAgICAgICAgICAgMzogXCJwdXJwbGVcIixcbiAgICAgICAgICAgIDQ6IFwiZ3JlZW5cIixcbiAgICAgICAgICAgIDU6IFwicmVkXCIsXG4gICAgICAgICAgICA2OiBcIm9yYW5nZVwiLFxuICAgICAgICAgICAgNzogXCJkYXJrLWJsdWVcIixcbiAgICAgICAgICAgIDg6IFwiZ3JleVwiXG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmdhbWVOdW0gPSBvcHRpb25zLmdhbWVOdW07XG5cbiAgICAgICAgdGhpcy5jdXJyZW50QmFnID0gdGhpcy5zaHVmZmxlQmFnKHRoaXMuZ2VuZXJhdGVCYWcoKSk7XG4gICAgICAgIHRoaXMuY3VycmVudFBpZWNlID0gJyc7XG4gICAgICAgIHRoaXMuaG9sZFBpZWNlID0gJyc7XG4gICAgICAgIHRoaXMuZ2hvc3RQb3NpdGlvbiA9ICcnO1xuICAgICAgICB0aGlzLm5leHRCYWcgPSB0aGlzLnNodWZmbGVCYWcodGhpcy5nZW5lcmF0ZUJhZygpKTtcblxuICAgICAgICAvLyBwcmV2ZW50cyBwbGF5ZXIgZnJvbSBob2xkaW5nIHBpZWNlIG11bHRpcGxlIHRpbWVzXG4gICAgICAgIHRoaXMuY2FuSG9sZCA9IHRydWU7XG5cbiAgICAgICAgdGhpcy5oYW5kbGVDbGVhciA9IHtcbiAgICAgICAgICAgIGRyb3A6ICcnLFxuICAgICAgICAgICAgcmlnaHQ6ICcnLFxuICAgICAgICAgICAgbGVmdDogJycsXG4gICAgICAgICAgICBkb3duOiAnJ1xuICAgICAgICB9O1xuXG4gICAgICAgIC8vIGZvciBhbmltYXRpb25zXG4gICAgICAgIHRoaXMuZHJvcFNwZWVkID0gMTtcbiAgICAgICAgdGhpcy5tb3ZlU3BlZWQgPSBvcHRpb25zLm1vdmVTcGVlZDtcbiAgICAgICAgdGhpcy5kcm9wUGllY2UgPSB0aGlzLmRyb3BQaWVjZS5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLmRyb3AgPSB0aGlzLmRyb3AuYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5tb3ZlID0gdGhpcy5tb3ZlLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMubW92ZVBpZWNlID0gdGhpcy5tb3ZlUGllY2UuYmluZCh0aGlzKTtcblxuICAgICAgICAvLyBrZWVwIHRyYWNrIG9mIHRoZSBmb2xsb3dpbmcgdmFyaWFibGVzIGZvciByZXF1ZXN0QW5pbWF0aW9uRnJhbWUgdGhyb3R0bGluZ1xuICAgICAgICB0aGlzLmFuaW1hdGUgPSB7XG4gICAgICAgICAgICBkcm9wOiB7XG4gICAgICAgICAgICAgICAgZnBzSW50ZXJ2YWw6ICcnLFxuICAgICAgICAgICAgICAgIHN0YXJ0VGltZTogJycsXG4gICAgICAgICAgICAgICAgbm93OiAnJyxcbiAgICAgICAgICAgICAgICB0aGVuOiAnJ1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHJpZ2h0OiB7XG4gICAgICAgICAgICAgICAgZnBzSW50ZXJ2YWw6ICcnLFxuICAgICAgICAgICAgICAgIHN0YXJ0VGltZTogJycsXG4gICAgICAgICAgICAgICAgbm93OiAnJyxcbiAgICAgICAgICAgICAgICB0aGVuOiAnJ1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGxlZnQ6IHtcbiAgICAgICAgICAgICAgICBmcHNJbnRlcnZhbDogJycsXG4gICAgICAgICAgICAgICAgc3RhcnRUaW1lOiAnJyxcbiAgICAgICAgICAgICAgICBub3c6ICcnLFxuICAgICAgICAgICAgICAgIHRoZW46ICcnXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgZG93bjoge1xuICAgICAgICAgICAgICAgIGZwc0ludGVydmFsOiAnJyxcbiAgICAgICAgICAgICAgICBzdGFydFRpbWU6ICcnLFxuICAgICAgICAgICAgICAgIG5vdzogJycsXG4gICAgICAgICAgICAgICAgdGhlbjogJydcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC8vIHBhdXNpbmcgdGhlIGdhbWVcbiAgICAgICAgdGhpcy5pc1BhdXNlZCA9IGZhbHNlO1xuXG4gICAgICAgIHRoaXMua2V5SGVsZCA9IHtcbiAgICAgICAgICAgIGRvd246IGZhbHNlLFxuICAgICAgICAgICAgcmlnaHQ6IGZhbHNlLFxuICAgICAgICAgICAgbGVmdDogZmFsc2VcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMub3Bwb25lbnQgPSBcIlwiO1xuICAgICAgICB0aGlzLmNvbnRyb2xzID0gb3B0aW9ucy5jb250cm9scztcbiAgICAgICAgdGhpcy51cGNvbWluZ0xpbmVzID0gMDtcbiAgICAgICAgdGhpcy5jb21ibyA9IC0xO1xuICAgICAgICB0aGlzLnRTcGluID0gZmFsc2U7XG4gICAgICAgIHRoaXMudFNwaW5TdHJlYWsgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5jb21ib0d1aWRlID0geyAwOiAwLCAxOiAwLCAyOiAxLCAzOiAxLCA0OiAxLCA1OiAyLCA2OiAyLCA3OiAzLCA4OiAzLCA5OiA0LCAxMDogNCwgMTE6IDQsIDEyOiA1IH07XG5cbiAgICAgICAgLy8gc2luZ2xlIHBsYXllclxuICAgICAgICB0aGlzLnN0YXJ0RWxldmF0aW5nID0gdGhpcy5zdGFydEVsZXZhdGluZy5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLmNsZWFyRWxldmF0ZUludGVydmFsID0gJyc7XG4gICAgICAgIHRoaXMuZWxldmF0ZURlbGF5ID0gNTAwMDtcbiAgICAgICAgdGhpcy5jbGVhclRpbWVyID0gJyc7XG4gICAgICAgIHRoaXMuc2NvcmVLZWVwZXIgPSBuZXcgU2NvcmVLZWVwZXIoKTtcbiAgICB9XG5cbiAgICBnZW5lcmF0ZUJhZygpIHtcbiAgICAgICAgbGV0IG9QaWVjZSA9IG5ldyBPUGllY2UoKTtcbiAgICAgICAgbGV0IGlQaWVjZSA9IG5ldyBJUGllY2UoKTtcbiAgICAgICAgbGV0IHRQaWVjZSA9IG5ldyBUUGllY2UoKTtcbiAgICAgICAgbGV0IHNQaWVjZSA9IG5ldyBTUGllY2UoKTtcbiAgICAgICAgbGV0IHpQaWVjZSA9IG5ldyBaUGllY2UoKTtcbiAgICAgICAgbGV0IGxQaWVjZSA9IG5ldyBMUGllY2UoKTtcbiAgICAgICAgbGV0IGpQaWVjZSA9IG5ldyBKUGllY2UoKTtcblxuICAgICAgICByZXR1cm4gW29QaWVjZSwgaVBpZWNlLCB0UGllY2UsIHNQaWVjZSwgelBpZWNlLCBsUGllY2UsIGpQaWVjZV07XG4gICAgfVxuXG4gICAgc2V0RmllbGQoKSB7XG4gICAgICAgIGxldCBmaWVsZCA9IG5ldyBGaWVsZCgpO1xuICAgICAgICByZXR1cm4gZmllbGQuX2dlbmVyYXRlRmllbGQoKTtcbiAgICB9XG5cbiAgICAvLyB0YWtlIHBpZWNlIGZyb20gY3VycmVudEJhZyBhbmQgc2V0IGl0IGFzIHRoZSBjdXJyZW50IHBpZWNlXG4gICAgc2V0Q3VycmVudFBpZWNlKCkge1xuICAgICAgICB0aGlzLmN1cnJlbnRQaWVjZSA9IHRoaXMuY3VycmVudEJhZy5zaGlmdCgpO1xuICAgIH1cblxuICAgIC8vIHJlbW92ZXMgb2xkIGdob3N0IHBvc2l0aW9uIGZyb20gdGhpcy5maWVsZCBiZWZvcmUgY2hhbmdpbmcgcGllY2UgcG9zaXRpb25cbiAgICBjbGVhckdob3N0UG9zaXRpb24oKSB7XG4gICAgICAgIGxldCBjb29yZGluYXRlQXJyYXlzID0gT2JqZWN0LnZhbHVlcyh0aGlzLmdob3N0UG9zaXRpb24pO1xuICAgICAgICBjb29yZGluYXRlQXJyYXlzLmZvckVhY2goYXJyYXkgPT4ge1xuICAgICAgICAgICAgYXJyYXkuZm9yRWFjaChjb29yZGluYXRlID0+IHtcbiAgICAgICAgICAgICAgICBsZXQgW3JvdywgY29sXSA9IFtjb29yZGluYXRlWzBdLCBjb29yZGluYXRlWzFdXTtcbiAgICAgICAgICAgICAgICAvLyBwcmV2ZW50IG1ldGhvZCBmcm9tIGNsZWFyaW5nIHBpZWNlIGlmIGl0IGhhcHBlbnMgdG8gYmUgd2hlcmUgdGhlIGdob3N0IHBvc2l0aW9uIHNob3VsZCBiZVxuICAgICAgICAgICAgICAgIGlmICh0aGlzLmZpZWxkW3Jvd10gJiYgdGhpcy5maWVsZFtyb3ddW2NvbF0gPT09IFwieFwiICYmIHJvdyA+PSAwKSB0aGlzLmZpZWxkW3Jvd11bY29sXSA9IDA7XG4gICAgICAgICAgICB9KVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICAvLyBjbGVhcnMgdGhlIGNvbG9yIGNsYXNzZXMgZnJvbSB0aGUgYnJvd3NlciBmaWVsZFxuICAgIGNsZWFyR2hvc3RDbGFzcygpIHtcbiAgICAgICAgbGV0IGZpZWxkQ29sdW1ucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoYC5maWVsZC1jb2x1bW4uZmllbGQtJHt0aGlzLmdhbWVOdW19YCk7XG4gICAgICAgIE9iamVjdC52YWx1ZXModGhpcy5naG9zdFBvc2l0aW9uKS5mb3JFYWNoKGFycmF5ID0+IHtcbiAgICAgICAgICAgIGFycmF5LmZvckVhY2goY29vcmRpbmF0ZSA9PiB7XG4gICAgICAgICAgICAgICAgbGV0IFtyb3csIGNvbF0gPSBbY29vcmRpbmF0ZVswXSwgY29vcmRpbmF0ZVsxXV07XG4gICAgICAgICAgICAgICAgbGV0IGZpZWxkU3F1YXJlID0gZmllbGRDb2x1bW5zW2NvbF0uY2hpbGRyZW5bcm93XTtcbiAgICAgICAgICAgICAgICBpZiAoZmllbGRTcXVhcmUpIHtcbiAgICAgICAgICAgICAgICAgICAgZmllbGRTcXVhcmUuY2xhc3NMaXN0ID0gdGhpcy5jb2xvcnNbdGhpcy5jdXJyZW50UGllY2UuY29sb3JDb2RlXTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICAvLyBmaW5kIGFwcHJvcHJpYXRlIGdob3N0IHBvc2l0aW9uIGFzIHBpZWNlIHBvc2l0aW9uIGNoYW5nZXNcbiAgICBzZXRHaG9zdFBvc2l0aW9uKCkge1xuICAgICAgICBsZXQgZ2hvc3RQb3NpdGlvbiA9IHtcbiAgICAgICAgICAgIHRvcDogdGhpcy5jdXJyZW50UGllY2UucG9zaXRpb24udG9wLm1hcChjb29yZGluYXRlID0+IGNvb3JkaW5hdGUuc2xpY2UoKSksXG4gICAgICAgICAgICBtaWRkbGU6IHRoaXMuY3VycmVudFBpZWNlLnBvc2l0aW9uLm1pZGRsZS5tYXAoY29vcmRpbmF0ZSA9PiBjb29yZGluYXRlLnNsaWNlKCkpLFxuICAgICAgICAgICAgYm90dG9tOiB0aGlzLmN1cnJlbnRQaWVjZS5wb3NpdGlvbi5ib3R0b20ubWFwKGNvb3JkaW5hdGUgPT4gY29vcmRpbmF0ZS5zbGljZSgpKVxuICAgICAgICB9XG4gICAgICAgIGxldCBzdG9wcGVkID0gZmFsc2U7XG4gICAgICAgIHdoaWxlICghc3RvcHBlZCkge1xuICAgICAgICAgICAgbGV0IGhhbmdpbmdTcXVhcmVzID0gdGhpcy5jdXJyZW50UGllY2UuaGFuZ2luZ1NxdWFyZXMoZ2hvc3RQb3NpdGlvbik7XG4gICAgICAgICAgICBoYW5naW5nU3F1YXJlcy5mb3JFYWNoKGNvb3JkaW5hdGUgPT4ge1xuICAgICAgICAgICAgICAgIGxldCBbcm93LCBjb2xdID0gW2Nvb3JkaW5hdGVbMF0sIGNvb3JkaW5hdGVbMV1dO1xuICAgICAgICAgICAgICAgIGlmIChyb3cgPCAwIHx8IHJvdyArIDEgPT09IDIwIHx8IHRoaXMuZmllbGRbcm93ICsgMV1bY29sXSkgc3RvcHBlZCA9IHRydWU7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGlmIChzdG9wcGVkKSBicmVhaztcbiAgICAgICAgICAgIGdob3N0UG9zaXRpb24udG9wID0gZ2hvc3RQb3NpdGlvbi50b3AubWFwKGFycmF5ID0+IFthcnJheVswXSArIDEsIGFycmF5WzFdXSk7XG4gICAgICAgICAgICBnaG9zdFBvc2l0aW9uLm1pZGRsZSA9IGdob3N0UG9zaXRpb24ubWlkZGxlLm1hcChhcnJheSA9PiBbYXJyYXlbMF0gKyAxLCBhcnJheVsxXV0pO1xuICAgICAgICAgICAgZ2hvc3RQb3NpdGlvbi5ib3R0b20gPSBnaG9zdFBvc2l0aW9uLmJvdHRvbS5tYXAoYXJyYXkgPT4gW2FycmF5WzBdICsgMSwgYXJyYXlbMV1dKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmdob3N0UG9zaXRpb24gPSBnaG9zdFBvc2l0aW9uO1xuICAgICAgICB0aGlzLl9wb3B1bGF0ZUdob3N0UG9zaXRpb24oKTtcbiAgICB9XG5cbiAgICAvLyBwb3B1bGF0ZSB0aGlzLmZpZWxkIHdpdGggJ3gnIHdoZXJldmVyIHRoZSBnaG9zdCBwb3NpdGlvbiBpcyBjYWxjdWxhdGVkIHRvIGJlXG4gICAgX3BvcHVsYXRlR2hvc3RQb3NpdGlvbigpIHtcbiAgICAgICAgbGV0IGNvb3JkaW5hdGVBcnJheXMgPSBPYmplY3QudmFsdWVzKHRoaXMuZ2hvc3RQb3NpdGlvbik7XG4gICAgICAgIGNvb3JkaW5hdGVBcnJheXMuZm9yRWFjaChhcnJheSA9PiB7XG4gICAgICAgICAgICBhcnJheS5mb3JFYWNoKGNvb3JkaW5hdGUgPT4ge1xuICAgICAgICAgICAgICAgIGxldCBbcm93LCBjb2xdID0gW2Nvb3JkaW5hdGVbMF0sIGNvb3JkaW5hdGVbMV1dO1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLmZpZWxkW3Jvd10gJiYgdGhpcy5maWVsZFtyb3ddW2NvbF0gIT09IHRoaXMuY3VycmVudFBpZWNlLmNvbG9yQ29kZSkgdGhpcy5maWVsZFtyb3ddW2NvbF0gPSBcInhcIjtcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLnJlbmRlcigpO1xuICAgIH1cblxuICAgIC8vIGhvbGQgcGllY2UgZm9yIGxhdGVyIHVzZSBcbiAgICBob2xkKCkge1xuICAgICAgICBpZiAoIXRoaXMuY2FuSG9sZCkgcmV0dXJuO1xuICAgICAgICB0aGlzLmN1cnJlbnRQaWVjZS5jbGVhclNlbGZGcm9tQm9hcmQodGhpcy5maWVsZCk7IFxuICAgICAgICB0aGlzLnJlbmRlcigpO1xuXG4gICAgICAgIGlmICghdGhpcy5ob2xkUGllY2UpIHtcbiAgICAgICAgICAgIC8vIHBhc3MgY3VycmVudCBwaWVjZSBuYW1lIGludG8gZ2VuZXJhdGUgcGllY2UgaW4gb3JkZXIgdG8gZ2VuZXJhdGUgYSBuZXcgcGllY2UgaW5zdGFuY2VcbiAgICAgICAgICAgIHRoaXMuaG9sZFBpZWNlID0gdGhpcy5fZ2VuZXJhdGVQaWVjZSh0aGlzLmN1cnJlbnRQaWVjZS5uYW1lKTtcbiAgICAgICAgICAgIHRoaXMuc2V0Q3VycmVudFBpZWNlKCk7XG4gICAgICAgICAgICAvLyByZS1yZW5kZXIgbmV4dCBib3hlcyB0byBhcHByb3ByaWF0ZWx5IHNob3cgY3VycmVudCBiYWdcbiAgICAgICAgICAgIHRoaXMuc2hvd0N1cnJlbnRCYWcoKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuY3VycmVudFBpZWNlID0gdGhpcy5fZ2VuZXJhdGVQaWVjZSh0aGlzLmN1cnJlbnRQaWVjZS5uYW1lKTtcbiAgICAgICAgICAgIFt0aGlzLmN1cnJlbnRQaWVjZSwgdGhpcy5ob2xkUGllY2VdID0gW3RoaXMuaG9sZFBpZWNlLCB0aGlzLmN1cnJlbnRQaWVjZV07XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIC8vIGRpc2FibGUgaG9sZC1waWVjZSByaWdodCBhZnRlciBwbGF5ZXIgaG9sZHMgYSBwaWVjZVxuICAgICAgICB0aGlzLmNhbkhvbGQgPSBmYWxzZTtcblxuICAgICAgICB0aGlzLl9wb3B1bGF0ZUhvbGRCb3goKTtcbiAgICB9XG5cbiAgICBfcG9wdWxhdGVIb2xkQm94KCkge1xuICAgICAgICBsZXQgY29sdW1ucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC5ob2xkLWJveC5maWVsZC0ke3RoaXMuZ2FtZU51bX1gKS5jaGlsZHJlbjtcblxuICAgICAgICAvLyByZW1vdmUgY29sb3JzIGZyb20gcHJldmlvdXMgcGllY2VzXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgNTsgaSsrKSB7XG4gICAgICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IDQ7IGorKykge1xuICAgICAgICAgICAgICAgIC8vIGNvbHVtbnMuY2hpbGRyZW4gaXMgbm9kZWxpc3Qgb2YgPGxpcz5cbiAgICAgICAgICAgICAgICBjb2x1bW5zW2ldLmNoaWxkcmVuW2pdLmNsYXNzTmFtZSA9IFwiXCI7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmhvbGRQaWVjZS5kaXNwbGF5U3F1YXJlcy5mb3JFYWNoKHNxdWFyZSA9PiB7XG4gICAgICAgICAgICBsZXQgW2NvbCwgcm93XSA9IFtzcXVhcmVbMF0sIHNxdWFyZVsxXV07XG4gICAgICAgICAgICBjb2x1bW5zW2NvbF0uY2hpbGRyZW5bcm93XS5jbGFzc0xpc3QuYWRkKHRoaXMuY29sb3JzW3RoaXMuaG9sZFBpZWNlLmNvbG9yQ29kZV0pO1xuICAgICAgICB9KVxuXG4gICAgfVxuXG4gICAgLy8gdXNlZCBmb3IgdGhpcy5ob2xkKCk6IGdlbmVyYXRlIGEgbmV3IHBpZWNlIHNvIHRoYXQgYSBob2xkcGllY2UgdGhhdCBpcyByZS1yZW5kZXJlZCBvbiB0aGUgYm9hcmQgd2lsbCBub3Qgc3RhcnQgZnJvbSB0aGUgb2xkIHBvc2l0aW9uXG4gICAgX2dlbmVyYXRlUGllY2UocGllY2VOYW1lKSB7XG4gICAgICAgIHN3aXRjaChwaWVjZU5hbWUpIHtcbiAgICAgICAgICAgIGNhc2UgXCJUUGllY2VcIjpcbiAgICAgICAgICAgICAgICByZXR1cm4gbmV3IFRQaWVjZTtcbiAgICAgICAgICAgIGNhc2UgXCJPUGllY2VcIjpcbiAgICAgICAgICAgICAgICByZXR1cm4gbmV3IE9QaWVjZTtcbiAgICAgICAgICAgIGNhc2UgXCJJUGllY2VcIjpcbiAgICAgICAgICAgICAgICByZXR1cm4gbmV3IElQaWVjZTtcbiAgICAgICAgICAgIGNhc2UgXCJMUGllY2VcIjpcbiAgICAgICAgICAgICAgICByZXR1cm4gbmV3IExQaWVjZTtcbiAgICAgICAgICAgIGNhc2UgXCJKUGllY2VcIjpcbiAgICAgICAgICAgICAgICByZXR1cm4gbmV3IEpQaWVjZTtcbiAgICAgICAgICAgIGNhc2UgXCJTUGllY2VcIjpcbiAgICAgICAgICAgICAgICByZXR1cm4gbmV3IFNQaWVjZTtcbiAgICAgICAgICAgIGNhc2UgXCJaUGllY2VcIjpcbiAgICAgICAgICAgICAgICByZXR1cm4gbmV3IFpQaWVjZTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8vIHRha2Ugb25lIHBpZWNlIGZyb20gbmV4dEJhZyBhbmQgYWRkIHRvIGN1cnJlbnRCYWdcbiAgICBhZGRUb0N1cnJlbnRCYWcoKSB7XG4gICAgICAgIHRoaXMuY3VycmVudEJhZy5wdXNoKHRoaXMubmV4dEJhZy5zaGlmdCgpKTtcbiAgICB9XG5cbiAgICBzaG93Q3VycmVudEJhZygpIHtcbiAgICAgICAgbGV0IGJveGVzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShgbmV4dC1ib3ggZmllbGQtJHt0aGlzLmdhbWVOdW19YCk7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgNTsgaSsrKSB7XG4gICAgICAgICAgICB0aGlzLl9wb3B1bGF0ZU5leHRCb3goYm94ZXNbaV0sIHRoaXMuY3VycmVudEJhZ1tpXSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBfcG9wdWxhdGVOZXh0Qm94KGJveCwgcGllY2UpIHtcbiAgICAgICAgLy8gY29sdW1ucyBpcyBub2RlbGlzdCBvZiA8dWxzPlxuICAgICAgICBsZXQgY29sdW1ucyA9IGJveC5jaGlsZHJlbjtcblxuICAgICAgICAvLyByZW1vdmUgY29sb3JzIGZyb20gcHJldmlvdXMgcGllY2VcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCA1OyBpKyspIHtcbiAgICAgICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgNDsgaisrKSB7XG4gICAgICAgICAgICAgICAgLy8gY29sdW1ucy5jaGlsZHJlbiBpcyBub2RlbGlzdCBvZiA8bGlzPlxuICAgICAgICAgICAgICAgIGNvbHVtbnNbaV0uY2hpbGRyZW5bal0uY2xhc3NOYW1lID0gXCJcIjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC8vIHBvcHVsYXRlIGJveCB3aXRoIG5ldyBwaWVjZVxuICAgICAgICBwaWVjZS5kaXNwbGF5U3F1YXJlcy5mb3JFYWNoKHNxdWFyZSA9PiB7XG4gICAgICAgICAgICBsZXQgW2NvbCwgcm93XSA9IFtzcXVhcmVbMF0sIHNxdWFyZVsxXV07XG4gICAgICAgICAgICBjb2x1bW5zW2NvbF0uY2hpbGRyZW5bcm93XS5jbGFzc0xpc3QuYWRkKHRoaXMuY29sb3JzW3BpZWNlLmNvbG9yQ29kZV0pO1xuICAgICAgICB9KVxuICAgIH1cblxuICAgIC8vIHJlZmlsbCBuZXh0IGJhZywgd2lsbCBvbmx5IGJlIGNhbGxlZCBvbmNlIG5leHRCYWcgYmVjb21lcyBlbXB0eVxuICAgIHJlZmlsbE5leHRCYWcoKSB7XG4gICAgICAgIHRoaXMubmV4dEJhZyA9IHRoaXMuZ2VuZXJhdGVCYWcoKTtcbiAgICB9XG5cbiAgICAvLyBpbXBsZW1lbnRhdGlvbiBvZiBzaHVmZmxlIGZvdW5kIG9uIGh0dHBzOi8vc3RhY2tvdmVyZmxvdy5jb20vcXVlc3Rpb25zLzI0NTA5NTQvaG93LXRvLXJhbmRvbWl6ZS1zaHVmZmxlLWEtamF2YXNjcmlwdC1hcnJheSMyNDUwOTc2XG4gICAgc2h1ZmZsZUJhZyhiYWcpIHtcbiAgICAgICAgdmFyIGN1cnJlbnRJbmRleCA9IGJhZy5sZW5ndGgsIHRlbXBvcmFyeVZhbHVlLCByYW5kb21JbmRleDtcblxuICAgICAgICAvLyBXaGlsZSB0aGVyZSByZW1haW4gZWxlbWVudHMgdG8gc2h1ZmZsZS4uLlxuICAgICAgICB3aGlsZSAoMCAhPT0gY3VycmVudEluZGV4KSB7XG5cbiAgICAgICAgICAgIC8vIFBpY2sgYSByZW1haW5pbmcgZWxlbWVudC4uLlxuICAgICAgICAgICAgcmFuZG9tSW5kZXggPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBjdXJyZW50SW5kZXgpO1xuICAgICAgICAgICAgY3VycmVudEluZGV4IC09IDE7XG5cbiAgICAgICAgICAgIC8vIEFuZCBzd2FwIGl0IHdpdGggdGhlIGN1cnJlbnQgZWxlbWVudC5cbiAgICAgICAgICAgIHRlbXBvcmFyeVZhbHVlID0gYmFnW2N1cnJlbnRJbmRleF07XG4gICAgICAgICAgICBiYWdbY3VycmVudEluZGV4XSA9IGJhZ1tyYW5kb21JbmRleF07XG4gICAgICAgICAgICBiYWdbcmFuZG9tSW5kZXhdID0gdGVtcG9yYXJ5VmFsdWU7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGJhZztcbiAgICB9XG4gICAgLy8gaW1wbGVtZW50YXRpb24gb2Ygc2h1ZmZsZSBmb3VuZCBvbiBodHRwczovL3N0YWNrb3ZlcmZsb3cuY29tL3F1ZXN0aW9ucy8yNDUwOTU0L2hvdy10by1yYW5kb21pemUtc2h1ZmZsZS1hLWphdmFzY3JpcHQtYXJyYXkjMjQ1MDk3NlxuXG4gICAgLy8gbG9vayB0aHJvdWdoIGZpZWxkLCBpZiBmaWVsZFtyb3ddW2NvbF0gY29udGFpbnMgYSBudW1iZXIgPiAwLCBmaWxsIHRoYXQgc3BvdCB3aXRoIHRoZSByZXNwZWN0aXZlIGNvbG9yLiBcbiAgICAvLyBpZiBjb250YWlucyBhbiAneCcsIHBvcHVsYXRlIHdpdGggZ2hvc3QgcGllY2Ugc3R5bGVzLlxuICAgIC8vIGVsc2UsIHJlbW92ZSBjb2xvclxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgLy8gaWYgKHRoaXMuY3VycmVudFBpZWNlLnJpZ2h0TW9zdFsxXSA+IDkgfHwgdGhpcy5jdXJyZW50UGllY2UubGVmdE1vc3RbMV0gPCAwKSByZXR1cm47XG4gICAgICAgIGxldCBmaWVsZENvbHVtbnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKGAuZmllbGQtY29sdW1uLmZpZWxkLSR7dGhpcy5nYW1lTnVtfWApO1xuICAgICAgICB0aGlzLmZpZWxkLmZvckVhY2goKHJvdywgcm93SWR4KSA9PiB7XG4gICAgICAgICAgICByb3cuZm9yRWFjaCgoY29sLCBjb2xJZHgpID0+IHtcbiAgICAgICAgICAgICAgICBsZXQgc3F1YXJlVmFsdWUgPSB0aGlzLmZpZWxkW3Jvd0lkeF1bY29sSWR4XTtcbiAgICAgICAgICAgICAgICBpZiAoc3F1YXJlVmFsdWUgPT09ICd4Jykge1xuICAgICAgICAgICAgICAgICAgICBmaWVsZENvbHVtbnNbY29sSWR4XS5jaGlsZHJlbltyb3dJZHhdLmNsYXNzTGlzdC5hZGQoYHgtJHt0aGlzLmNvbG9yc1t0aGlzLmN1cnJlbnRQaWVjZS5jb2xvckNvZGVdfWApO1xuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoc3F1YXJlVmFsdWUpIHtcbiAgICAgICAgICAgICAgICAgICAgZmllbGRDb2x1bW5zW2NvbElkeF0uY2hpbGRyZW5bcm93SWR4XS5jbGFzc0xpc3QuYWRkKHRoaXMuY29sb3JzW3NxdWFyZVZhbHVlXSk7XG4gICAgICAgICAgICAgICAgICAgIGZpZWxkQ29sdW1uc1tjb2xJZHhdLmNoaWxkcmVuW3Jvd0lkeF0uY2xhc3NMaXN0LnJlbW92ZShgeC0ke3RoaXMuY29sb3JzW3RoaXMuY3VycmVudFBpZWNlLmNvbG9yQ29kZV19YCk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgZmllbGRDb2x1bW5zW2NvbElkeF0uY2hpbGRyZW5bcm93SWR4XS5jbGFzc0xpc3QgPSBcIlwiO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBrZXlMaXN0ZW5lcigpIHtcbiAgICAgICAgZG9jdW1lbnQuYm9keS5hZGRFdmVudExpc3RlbmVyKFwia2V5ZG93blwiLCBldmVudCA9PiB7XG4gICAgICAgICAgICBpZiAodGhpcy5nYW1lSXNPdmVyIHx8IHRoaXMub3Bwb25lbnQuZ2FtZUlzT3ZlcikgcmV0dXJuO1xuICAgICAgICAgICAgdGhpcy5jdXJyZW50UGllY2Uuc2V0T3V0ZXJTcXVhcmVzKCk7XG4gICAgICAgICAgICAvLyB0aGlzLmNsZWFyR2hvc3RQb3NpdGlvbigpO1xuICAgICAgICAgICAgc3dpdGNoKGV2ZW50LndoaWNoKSB7XG4gICAgICAgICAgICAgICAgLy8gdXAga2V5XG4gICAgICAgICAgICAgICAgY2FzZSB0aGlzLmNvbnRyb2xzLnR1cm5SaWdodDpcbiAgICAgICAgICAgICAgICAgICAgLy8gcGFzcyBmaWVsZCBzbyBwaWVjZSBjYW4gY2hlY2sgZmllbGQgd2FsbCBiZWZvcmUgdHVybmluZ1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmNsZWFyR2hvc3RQb3NpdGlvbigpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnRTcGluID0gdGhpcy5jdXJyZW50UGllY2UubW92ZShcInR1cm5SaWdodFwiLCB0aGlzLmZpZWxkKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jdXJyZW50UGllY2UucG9wdWxhdGVGaWVsZCh0aGlzLmZpZWxkKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRHaG9zdFBvc2l0aW9uKCk7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIC8vIEMga2V5XG4gICAgICAgICAgICAgICAgY2FzZSB0aGlzLmNvbnRyb2xzLnR1cm5MZWZ0OlxuICAgICAgICAgICAgICAgICAgICAvLyBwYXNzIGZpZWxkIHNvIHBpZWNlIGNhbiBjaGVjayBmaWVsZCB3YWxsIGJlZm9yZSB0dXJuaW5nXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY2xlYXJHaG9zdFBvc2l0aW9uKCk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY3VycmVudFBpZWNlLm1vdmUoXCJ0dXJuTGVmdFwiLCB0aGlzLmZpZWxkKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jdXJyZW50UGllY2UucG9wdWxhdGVGaWVsZCh0aGlzLmZpZWxkKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRHaG9zdFBvc2l0aW9uKCk7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIC8vIGxlZnQga2V5XG4gICAgICAgICAgICAgICAgY2FzZSB0aGlzLmNvbnRyb2xzLmxlZnQ6XG4gICAgICAgICAgICAgICAgICAgIHRoaXMua2V5SGVsZC5sZWZ0ID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuY3VycmVudFBpZWNlLmxlZnRTaWRlQmxvY2tlZCh0aGlzLmZpZWxkKSkgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMubW92ZVBpZWNlKFwibGVmdFwiKTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgLy8gcmlnaHQga2V5XG4gICAgICAgICAgICAgICAgY2FzZSB0aGlzLmNvbnRyb2xzLnJpZ2h0OlxuICAgICAgICAgICAgICAgICAgICB0aGlzLmtleUhlbGQucmlnaHQgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5jdXJyZW50UGllY2UucmlnaHRTaWRlQmxvY2tlZCh0aGlzLmZpZWxkKSkgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMubW92ZVBpZWNlKFwicmlnaHRcIik7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIC8vIGRvd24ga2V5XG4gICAgICAgICAgICAgICAgY2FzZSB0aGlzLmNvbnRyb2xzLnNvZnREcm9wOlxuICAgICAgICAgICAgICAgICAgICB0aGlzLmtleUhlbGQuZG93biA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMubW92ZVBpZWNlKFwiZG93blwiKTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgLy8gc2hpZnQga2V5XG4gICAgICAgICAgICAgICAgY2FzZSB0aGlzLmNvbnRyb2xzLmhvbGQ6IFxuICAgICAgICAgICAgICAgICAgICB0aGlzLmNsZWFyR2hvc3RQb3NpdGlvbigpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmhvbGQoKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jdXJyZW50UGllY2UucG9wdWxhdGVGaWVsZCh0aGlzLmZpZWxkKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRHaG9zdFBvc2l0aW9uKCk7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIC8vIHNwYWNlIGJhclxuICAgICAgICAgICAgICAgIGNhc2UgdGhpcy5jb250cm9scy5oYXJkRHJvcDpcbiAgICAgICAgICAgICAgICAgICAgLy8gdGhpcy5yZW5kZXIoKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jbGVhckdob3N0UG9zaXRpb24oKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jdXJyZW50UGllY2UuaGFyZERyb3AodGhpcy5maWVsZCk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMucmVuZGVyKCk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY3VycmVudFBpZWNlLnBvcHVsYXRlRmllbGQodGhpcy5maWVsZCk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuaGFuZGxlUGllY2VTdG9wKHRoaXMuaGFuZGxlQ2xlYXIuZHJvcCk7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIC8vIFAga2V5XG4gICAgICAgICAgICAgICAgY2FzZSA4MDpcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5pc1BhdXNlZCA/IHRoaXMuZHJvcFBpZWNlKHRoaXMuZHJvcFNwZWVkKSA6IGNhbmNlbEFuaW1hdGlvbkZyYW1lKHRoaXMuaGFuZGxlQ2xlYXIuZHJvcCk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuaXNQYXVzZWQgPSAhdGhpcy5pc1BhdXNlZDtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLmN1cnJlbnRQaWVjZS5zZXRPdXRlclNxdWFyZXMoKTtcbiAgICAgICAgICAgIHRoaXMucmVuZGVyKCk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGRvY3VtZW50LmJvZHkuYWRkRXZlbnRMaXN0ZW5lcihcImtleXVwXCIsIGV2ZW50ID0+IHtcbiAgICAgICAgICAgIHN3aXRjaCAoZXZlbnQud2hpY2gpIHtcbiAgICAgICAgICAgICAgICBjYXNlIHRoaXMuY29udHJvbHMucmlnaHQ6IFxuICAgICAgICAgICAgICAgICAgICB0aGlzLmtleUhlbGQucmlnaHQgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSB0aGlzLmNvbnRyb2xzLmxlZnQ6IFxuICAgICAgICAgICAgICAgICAgICB0aGlzLmtleUhlbGQubGVmdCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlIHRoaXMuY29udHJvbHMuc29mdERyb3A6IFxuICAgICAgICAgICAgICAgICAgICB0aGlzLmtleUhlbGQuZG93biA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICBicmVhazsgIFxuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBjbGVhckxpbmVzKGxvd2VzdCwgaGlnaGVzdCwgbnVtTGluZXNDbGVhcmVkKSB7XG4gICAgICAgIGlmIChsb3dlc3QgPCAwKSByZXR1cm47XG4gICAgICAgIC8vIGJhc2UgY2FzZTogaWYgd2UgcmVhY2ggYSByb3cgdGhhdCBpcyBoaWdoZXIgdGhhbiB0aGUgaGlnaGVzdCwgdGhlbiByZXR1cm4gbnVtYmVyIG9mIGxpbmVzIHRoYXQgd2VyZSBjbGVhcmVkXG4gICAgICAgIGlmIChsb3dlc3QgPCBoaWdoZXN0KSB7XG4gICAgICAgICAgICByZXR1cm4gbnVtTGluZXNDbGVhcmVkO1xuICAgICAgICB9O1xuICAgICAgICAvLyByZWN1cnNpdmUgY2FzZTogXG4gICAgICAgIC8vIGlmIGxvd2VzdCByb3cgZG9lcyBub3QgY29udGFpbiBhIDAsIGJyaW5nIGFsbCBhYm92ZSByb3dzIGRvd24gb25lIGxldmVsXG4gICAgICAgIGlmICghdGhpcy5maWVsZFtsb3dlc3RdLmluY2x1ZGVzKDApKSB7XG4gICAgICAgICAgICB0aGlzLl9icmluZ0Rvd25GaWVsZChsb3dlc3QpO1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuY2xlYXJMaW5lcyhsb3dlc3QsIGhpZ2hlc3QgKyAxLCBudW1MaW5lc0NsZWFyZWQgKyAxKVxuICAgICAgICAvLyBpZiByb3cgY29udGFpbnMgYSAwLCByb3cgaXMgbm90IGNsZWFyZWQgeWV0IFxuICAgICAgICB9IGVsc2UgaWYgKHRoaXMuZmllbGRbbG93ZXN0XS5pbmNsdWRlcygwKSkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuY2xlYXJMaW5lcyhsb3dlc3QgLSAxLCBoaWdoZXN0LCBudW1MaW5lc0NsZWFyZWQpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgX2JyaW5nRG93bkZpZWxkKHN0YXJ0aW5nUm93KSB7XG4gICAgICAgIGZvciAobGV0IGkgPSBzdGFydGluZ1JvdzsgaSA+IDA7IGktLSkge1xuICAgICAgICAgICAgdGhpcy5maWVsZFtpXSA9IHRoaXMuZmllbGRbaSAtIDFdO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuZmllbGRbMF0gPSBbMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMF07XG4gICAgfVxuXG4gICAgaGFuZGxlUGllY2VTdG9wKCkgeyAgXG4gICAgICAgIC8vIGFsbG93IHBsYXllciB0byBob2xkIHBpZWNlIGFnYWluXG4gICAgICAgIHRoaXMuY2FuSG9sZCA9IHRydWU7XG4gICAgICAgIGxldCBsb3dlc3QgPSB0aGlzLmN1cnJlbnRQaWVjZS5wb3NpdGlvbi5ib3R0b21bMF1bMF07XG4gICAgICAgIC8vIGluIGNhc2Ugb2YgbGluZSBwaWVjZSwgd2hpY2ggbWF5IG5vdCBoYXZlIHRoaXMucG9zaXRpb24udG9wXG4gICAgICAgIGxldCBoaWdoZXN0ID0gIXRoaXMuY3VycmVudFBpZWNlLnBvc2l0aW9uLnRvcC5sZW5ndGggPyBsb3dlc3QgOiB0aGlzLmN1cnJlbnRQaWVjZS5wb3NpdGlvbi50b3BbMF1bMF07XG4gICAgICAgIC8vIGNoZWNrIGlmIGEgVFBpZWNlIHdhcyBzcHVuIGluIHBsYWNlXG4gICAgICAgIGlmICh0aGlzLmN1cnJlbnRQaWVjZS5uYW1lID09PSBcIlRQaWVjZVwiKSB7XG4gICAgICAgICAgICBsZXQgW2xlZnRNb3N0Um93LCByaWdodE1vc3RSb3ddID0gW3RoaXMuY3VycmVudFBpZWNlLmxlZnRNb3N0WzBdLCB0aGlzLmN1cnJlbnRQaWVjZS5yaWdodE1vc3RbMF1dO1xuICAgICAgICAgICAgbGV0IFtsZWZ0TW9zdENvbCwgcmlnaHRNb3N0Q29sXSA9IFt0aGlzLmN1cnJlbnRQaWVjZS5sZWZ0TW9zdFsxXSwgdGhpcy5jdXJyZW50UGllY2UucmlnaHRNb3N0WzFdXTtcbiAgICAgICAgICAgIGlmICh0aGlzLmZpZWxkW2xlZnRNb3N0Um93IC0gMV0gJiYgdGhpcy5maWVsZFtyaWdodE1vc3RSb3cgLSAxXSkge1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLmZpZWxkW2xlZnRNb3N0Um93IC0gMV1bbGVmdE1vc3RDb2xdIHx8IHRoaXMuZmllbGRbcmlnaHRNb3N0Um93IC0gMV1bcmlnaHRNb3N0Q29sXSkgdGhpcy50U3BpbiA9IHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgbGV0IG51bUxpbmVzQ2xlYXJlZCA9IHRoaXMuY2xlYXJMaW5lcyhsb3dlc3QsIGhpZ2hlc3QsIDApO1xuXG4gICAgICAgIC8vIGluIHRoZSBjYXNlIG9mIG11bHRpcGxheWVyLCBzZW5kIGNsZWFyZWQgbGluZXMgdG8gb3Bwb25lbnQgYW5kIHJlY2VpdmUgcG90ZW50aWFsIGxpbmVzXG4gICAgICAgIGlmICh0aGlzLm9wcG9uZW50KSB7XG4gICAgICAgICAgICBpZiAobnVtTGluZXNDbGVhcmVkID4gMCkge1xuICAgICAgICAgICAgICAgIHRoaXMuY29tYm8gKz0gMTtcbiAgICAgICAgICAgICAgICBsZXQgbnVtTGluZXNcbiAgICAgICAgICAgICAgICBpZiAobnVtTGluZXNDbGVhcmVkIDwgNCkge1xuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5jdXJyZW50UGllY2UubmFtZSA9PT0gXCJUUGllY2VcIiAmJiB0aGlzLnRTcGluKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBudW1MaW5lcyA9IG51bUxpbmVzQ2xlYXJlZCA9PT0gMyA/IDYgOiA0O1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgbnVtTGluZXMgPSBudW1MaW5lc0NsZWFyZWQgLSAxO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy50U3BpblN0cmVhayA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgbnVtTGluZXMgPSA0O1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIG51bUxpbmVzICs9IHRoaXMuY29tYm9HdWlkZVt0aGlzLmNvbWJvXTtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy50U3BpblN0cmVhaykgbnVtTGluZXMgKz0gMjtcblxuICAgICAgICAgICAgICAgIGlmICh0aGlzLnVwY29taW5nTGluZXMgPiAwKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMudXBjb21pbmdMaW5lcyAtPSBudW1MaW5lcztcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMudXBjb21pbmdMaW5lcyA8IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMub3Bwb25lbnQuYWRkTGluZXNUb1F1ZXVlKE1hdGguYWJzKHRoaXMudXBjb21pbmdMaW5lcykpO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy51cGNvbWluZ0xpbmVzID0gMDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGFkanVzdFF1ZXVlSGVpZ2h0KHRoaXMuZ2FtZU51bSwgMCk7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBhZGp1c3RRdWV1ZUhlaWdodCh0aGlzLmdhbWVOdW0sIHRoaXMudXBjb21pbmdMaW5lcyAqIDUpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5vcHBvbmVudC5hZGRMaW5lc1RvUXVldWUobnVtTGluZXMpO1xuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy50U3BpbiA9PT0gdHJ1ZSkgdGhpcy50U3BpblN0cmVhayA9IHRydWU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLmNvbWJvID0gLTE7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMudXBjb21pbmdMaW5lcyA+IDApIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5yZWNlaXZlVXBjb21pbmdMaW5lcyh0aGlzLnVwY29taW5nTGluZXMpO1xuICAgICAgICAgICAgICAgICAgICBhZGp1c3RRdWV1ZUhlaWdodCh0aGlzLmdhbWVOdW0sIDApO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLnNjb3JlS2VlcGVyLmFkZFRvU2NvcmUobnVtTGluZXNDbGVhcmVkKTtcbiAgICAgICAgfVxuICAgICAgICAvLyByZXNldCB0U3BpbiB0cmFja2VyXG4gICAgICAgIHRoaXMudFNwaW4gPSBmYWxzZVxuICAgICAgICB0aGlzLmNsZWFyR2hvc3RDbGFzcygpO1xuICAgICAgICBjYW5jZWxBbmltYXRpb25GcmFtZSh0aGlzLmhhbmRsZUNsZWFyLmRyb3ApO1xuICAgICAgICAvLyB0aGlzLnN0YXJ0RWxldmF0aW5nKCk7XG4gICAgICAgIHRoaXMucGxheSgpO1xuICAgIH1cblxuICAgIGRyb3BQaWVjZShmcHMpIHtcbiAgICAgICAgLy8gRG8gd2hhdGV2ZXJcbiAgICAgICAgdGhpcy5hbmltYXRlLmRyb3AuZnBzSW50ZXJ2YWwgPSAxMDAwIC8gZnBzO1xuICAgICAgICB0aGlzLmFuaW1hdGUuZHJvcC50aGVuID0gRGF0ZS5ub3coKTtcbiAgICAgICAgdGhpcy5hbmltYXRlLmRyb3Auc3RhcnRUaW1lID0gdGhpcy50aGVuO1xuICAgICAgICB0aGlzLmRyb3AodGhpcy5maWVsZCk7XG4gICAgfVxuXG4gICAgLy8gaW5zcGlyYXRpb24gZm9yIHRocm90dGxpbmcgcmVxdWVzdEFuaW1hdGlvbkZyYW1lIGZyb20gaHR0cHM6Ly9zdGFja292ZXJmbG93LmNvbS9xdWVzdGlvbnMvMTk3NjQwMTgvY29udHJvbGxpbmctZnBzLXdpdGgtcmVxdWVzdGFuaW1hdGlvbmZyYW1lXG4gICAgZHJvcCgpIHtcbiAgICAgICAgdGhpcy5oYW5kbGVDbGVhci5kcm9wID0gcmVxdWVzdEFuaW1hdGlvbkZyYW1lKCgpID0+IHRoaXMuZHJvcCh0aGlzLmZpZWxkKSk7XG4gICAgICAgIHRoaXMuYW5pbWF0ZS5kcm9wLm5vdyA9IERhdGUubm93KCk7XG4gICAgICAgIGxldCBlbGFwc2VkID0gdGhpcy5hbmltYXRlLmRyb3Aubm93IC0gdGhpcy5hbmltYXRlLmRyb3AudGhlbjtcbiAgICAgICAgaWYgKGVsYXBzZWQgPiB0aGlzLmFuaW1hdGUuZHJvcC5mcHNJbnRlcnZhbCkge1xuICAgICAgICAgICAgLy8gR2V0IHJlYWR5IGZvciBuZXh0IGZyYW1lIGJ5IHNldHRpbmcgdGhlbj1ub3csIGFkanVzdGluZyBmb3Igc3BlY2lmaWVkIGZwc0ludGVydmFsIG5vdCBiZWluZyBhIG11bHRpcGxlIG9mIFJBRidzIGludGVydmFsICgxNi43bXMpXG4gICAgICAgICAgICB0aGlzLmFuaW1hdGUuZHJvcC50aGVuID0gdGhpcy5hbmltYXRlLmRyb3Aubm93IC0gKGVsYXBzZWQgJSB0aGlzLmFuaW1hdGUuZHJvcC5mcHNJbnRlcnZhbCk7XG4gICAgICAgICAgICB0aGlzLmN1cnJlbnRQaWVjZS5wb3B1bGF0ZUZpZWxkKHRoaXMuZmllbGQpO1xuICAgICAgICAgICAgdGhpcy5yZW5kZXIoKTtcbiAgICAgICAgICAgIGlmICghdGhpcy5jdXJyZW50UGllY2UuaXNGYWxsaW5nKHRoaXMuZmllbGQpKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5oYW5kbGVQaWVjZVN0b3AodGhpcy5oYW5kbGVDbGVhci5kcm9wKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIHByZXZlbnRzIGluY29taW5nIHBpZWNlIGZyb20gZGVsZXRpbmcgYSBwaWVjZSBkaXJlY3RseSBiZWxvdyBkdXJpbmcgaXRzIGluaXRpYWwgcmVuZGVyXG4gICAgICAgICAgICBpZiAodGhpcy5jdXJyZW50UGllY2UuYm90dG9tTW9zdFswXSAhPSAwIHx8IHRoaXMuY3VycmVudFBpZWNlLmlzRmFsbGluZyh0aGlzLmZpZWxkKSkgdGhpcy5jdXJyZW50UGllY2UuZHJvcCh0aGlzLmZpZWxkKTtcbiAgICAgICAgICAgIHRoaXMuY3VycmVudFBpZWNlLnBvcHVsYXRlRmllbGQodGhpcy5maWVsZCk7IC8vIGtlZXAgb25seSBvbmUgcG9wdWxhdGUgZmllbGQ/XG4gICAgICAgICAgICB0aGlzLnJlbmRlcigpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgbW92ZVBpZWNlKGRpcmVjdGlvbikge1xuICAgICAgICAvLyBEbyB3aGF0ZXZlclxuICAgICAgICB0aGlzLmFuaW1hdGVbZGlyZWN0aW9uXS5mcHNJbnRlcnZhbCA9IDEwMDAgLyB0aGlzLm1vdmVTcGVlZDtcbiAgICAgICAgdGhpcy5hbmltYXRlW2RpcmVjdGlvbl0udGhlbiA9IERhdGUubm93KCk7XG4gICAgICAgIHRoaXMuYW5pbWF0ZVtkaXJlY3Rpb25dLnN0YXJ0VGltZSA9IHRoaXMuYW5pbWF0ZVtkaXJlY3Rpb25dLnRoZW47XG4gICAgICAgIHRoaXMubW92ZShkaXJlY3Rpb24pO1xuICAgIH1cblxuICAgIC8vIGluc3BpcmF0aW9uIGZvciB0aHJvdHRsaW5nIHJlcXVlc3RBbmltYXRpb25GcmFtZSBmcm9tIGh0dHBzOi8vc3RhY2tvdmVyZmxvdy5jb20vcXVlc3Rpb25zLzE5NzY0MDE4L2NvbnRyb2xsaW5nLWZwcy13aXRoLXJlcXVlc3RhbmltYXRpb25mcmFtZVxuICAgIG1vdmUoZGlyZWN0aW9uKSB7XG4gICAgICAgIHRoaXMuaGFuZGxlQ2xlYXJbZGlyZWN0aW9uXSA9IHJlcXVlc3RBbmltYXRpb25GcmFtZSgoKSA9PiB0aGlzLm1vdmUoZGlyZWN0aW9uKSk7XG4gICAgICAgIGlmICghdGhpcy5rZXlIZWxkW2RpcmVjdGlvbl0pIGNhbmNlbEFuaW1hdGlvbkZyYW1lKHRoaXMuaGFuZGxlQ2xlYXJbZGlyZWN0aW9uXSk7XG4gICAgICAgIHRoaXMuYW5pbWF0ZVtkaXJlY3Rpb25dLm5vdyA9IERhdGUubm93KCk7XG4gICAgICAgIGxldCBlbGFwc2VkID0gdGhpcy5hbmltYXRlW2RpcmVjdGlvbl0ubm93IC0gdGhpcy5hbmltYXRlW2RpcmVjdGlvbl0udGhlbjtcbiAgICAgICAgaWYgKGVsYXBzZWQgPiB0aGlzLmFuaW1hdGVbZGlyZWN0aW9uXS5mcHNJbnRlcnZhbCkge1xuICAgICAgICAgICAgLy8gR2V0IHJlYWR5IGZvciBuZXh0IGZyYW1lIGJ5IHNldHRpbmcgdGhlbj1ub3csIGFkanVzdGluZyBmb3Igc3BlY2lmaWVkIGZwc0ludGVydmFsIG5vdCBiZWluZyBhIG11bHRpcGxlIG9mIFJBRidzIGludGVydmFsICgxNi43bXMpXG4gICAgICAgICAgICB0aGlzLmFuaW1hdGVbZGlyZWN0aW9uXS50aGVuID0gdGhpcy5hbmltYXRlW2RpcmVjdGlvbl0ubm93IC0gKGVsYXBzZWQgJSB0aGlzLmFuaW1hdGVbZGlyZWN0aW9uXS5mcHNJbnRlcnZhbCk7XG5cbiAgICAgICAgICAgIC8vIHByZXZlbnQgcGllY2UgZnJvbSBtb3ZpbmcgaWYgaXQgaXMgYmxvY2tlZCBvciBpZiBib3RoIGxlZnQgYW5kIHJpZ2h0IGFycm93IGtleXMgYXJlIGhlbGQgZG93blxuICAgICAgICAgICAgaWYgKFxuICAgICAgICAgICAgICAgIGRpcmVjdGlvbiA9PT0gXCJyaWdodFwiICYmIHRoaXMuY3VycmVudFBpZWNlLnJpZ2h0U2lkZUJsb2NrZWQodGhpcy5maWVsZCkgXG4gICAgICAgICAgICAgICAgfHwgXG4gICAgICAgICAgICAgICAgZGlyZWN0aW9uID09PSBcImxlZnRcIiAmJiB0aGlzLmN1cnJlbnRQaWVjZS5sZWZ0U2lkZUJsb2NrZWQodGhpcy5maWVsZCkgXG4gICAgICAgICAgICAgICAgfHwgXG4gICAgICAgICAgICAgICAgZGlyZWN0aW9uID09PSBcImRvd25cIiAmJiAhdGhpcy5jdXJyZW50UGllY2UuaXNGYWxsaW5nKHRoaXMuZmllbGQpXG4gICAgICAgICAgICAgICAgfHwgXG4gICAgICAgICAgICAgICAgdGhpcy5rZXlIZWxkLnJpZ2h0ICYmIHRoaXMua2V5SGVsZC5sZWZ0XG4gICAgICAgICAgICApIHJldHVybjsgXG5cbiAgICAgICAgICAgIHRoaXMuY3VycmVudFBpZWNlLm1vdmUoZGlyZWN0aW9uKTtcblxuICAgICAgICAgICAgdGhpcy5jdXJyZW50UGllY2UucG9wdWxhdGVGaWVsZCh0aGlzLmZpZWxkKTtcblxuICAgICAgICAgICAgLy8gZG9uJ3QgbmVlZCB0byByZS1wb3B1bGF0ZSBnaG9zdCBwb3NpdGlvbiBpZiB0aGUgcGllY2UgaXMgc29mdC1kcm9wcGluZ1xuICAgICAgICAgICAgaWYgKGRpcmVjdGlvbiAhPT0gXCJkb3duXCIpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmNsZWFyR2hvc3RQb3NpdGlvbigpO1xuICAgICAgICAgICAgICAgIHRoaXMuc2V0R2hvc3RQb3NpdGlvbigpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB0aGlzLnJlbmRlcigpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgaGFuZGxlVG9wUGllY2UoKSB7XG4gICAgICAgIGxldCBhdFRvcCA9IGZhbHNlO1xuICAgICAgICBmb3IgKGxldCBpIGluIHRoaXMuY3VycmVudFBpZWNlLnBvc2l0aW9uLmJvdHRvbSkge1xuICAgICAgICAgICAgbGV0IHNxdWFyZSA9IHRoaXMuY3VycmVudFBpZWNlLnBvc2l0aW9uLmJvdHRvbVtpXTtcbiAgICAgICAgICAgIGxldCByb3cgPSBzcXVhcmVbMF07XG4gICAgICAgICAgICBsZXQgY29sID0gc3F1YXJlWzFdO1xuICAgICAgICAgICAgaWYgKHRoaXMuZmllbGRbcm93XVtjb2xdKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5jdXJyZW50UGllY2UubW92ZShcInVwXCIsIHRoaXMuZmllbGQpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuXG4gICAgICAgIGZvciAobGV0IGkgaW4gdGhpcy5jdXJyZW50UGllY2UucG9zaXRpb24uYm90dG9tKSB7XG4gICAgICAgICAgICBsZXQgc3F1YXJlID0gdGhpcy5jdXJyZW50UGllY2UucG9zaXRpb24uYm90dG9tW2ldO1xuICAgICAgICAgICAgbGV0IHJvdyA9IHNxdWFyZVswXTtcbiAgICAgICAgICAgIGxldCBjb2wgPSBzcXVhcmVbMV07XG4gICAgICAgICAgICBpZiAodGhpcy5maWVsZFtyb3ddW2NvbF0pIHtcbiAgICAgICAgICAgICAgICB0aGlzLmdhbWVPdmVyKHRoaXMub3Bwb25lbnQuZ2FtZU51bSk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICAgICAgICBcbiAgICAgICAgcmV0dXJuIGF0VG9wO1xuICAgIH1cbiAgICBcbiAgICBwbGF5KCkge1xuICAgICAgICB0aGlzLnNldEN1cnJlbnRQaWVjZSgpO1xuICAgICAgICB0aGlzLmhhbmRsZVRvcFBpZWNlKCk7XG4gICAgICAgIHRoaXMuY3VycmVudFBpZWNlLnBvcHVsYXRlRmllbGQodGhpcy5maWVsZCk7XG4gICAgICAgIHRoaXMuYWRkVG9DdXJyZW50QmFnKCk7XG4gICAgICAgIHRoaXMuc2hvd0N1cnJlbnRCYWcoKTtcbiAgICAgICAgaWYgKCF0aGlzLm5leHRCYWcubGVuZ3RoKSB0aGlzLnJlZmlsbE5leHRCYWcoKTtcbiAgICAgICAgdGhpcy5zZXRHaG9zdFBvc2l0aW9uKCk7XG4gICAgICAgIC8vIGRyb3AgcGllY2UgYXQgZ2l2ZW4gZnBzXG4gICAgICAgIHRoaXMuZHJvcFBpZWNlKHRoaXMuZHJvcFNwZWVkKTsgICAgXG4gICAgfVxuXG4gICAgZ2FtZU92ZXIod2lubmVyKSB7XG4gICAgICAgIHRoaXMuZHJvcFNwZWVkID0gMDtcbiAgICAgICAgbGV0IGdhbWVPdmVyU2NyZWVuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgZ2FtZU92ZXJTY3JlZW4uY2xhc3NMaXN0LmFkZChcImdhbWUtb3Zlci1kaXZcIik7XG4gICAgICAgIFxuICAgICAgICBsZXQgZ2FtZU92ZXJIZWFkaW5nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgyXCIpO1xuICAgICAgICBnYW1lT3ZlckhlYWRpbmcuY2xhc3NMaXN0LmFkZChcImdhbWUtb3Zlci1oZWFkaW5nXCIpO1xuXG4gICAgICAgIGdhbWVPdmVySGVhZGluZy5pbm5lckhUTUwgPSBcIkdBTUUgT1ZFUlwiO1xuICAgICAgICBnYW1lT3ZlclNjcmVlbi5hcHBlbmQoZ2FtZU92ZXJIZWFkaW5nKTtcblxuICAgICAgICBsZXQgd2lubmVySGVhZGluZztcbiAgICAgICAgaWYgKHdpbm5lcikgIHtcbiAgICAgICAgICAgIHdpbm5lckhlYWRpbmcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDJcIik7XG4gICAgICAgICAgICB3aW5uZXJIZWFkaW5nLmNsYXNzTGlzdC5hZGQoXCJnYW1lLW92ZXItaGVhZGluZ1wiKTtcbiAgICAgICAgICAgIHdpbm5lckhlYWRpbmcuaW5uZXJIVE1MID0gYFBMQVlFUiAke3dpbm5lcn0gV0lOU2A7XG4gICAgICAgICAgICBnYW1lT3ZlclNjcmVlbi5hcHBlbmQod2lubmVySGVhZGluZylcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGxldCBzY29yZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJyk7XG4gICAgICAgICAgICBzY29yZS5jbGFzc0xpc3QuYWRkKFwiZ2FtZS1vdmVyLWhlYWRpbmdcIik7XG4gICAgICAgICAgICBzY29yZS5pbm5lckhUTUwgPSBgJHt0aGlzLnNjb3JlS2VlcGVyLmdldFNjb3JlKCl9IFBvaW50c2A7XG4gICAgICAgICAgICBnYW1lT3ZlclNjcmVlbi5hcHBlbmQoc2NvcmUpO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gbGV0IGdhbWVPdmVyT3B0aW9ucyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAvLyBnYW1lT3Zlck9wdGlvbnMuY2xhc3NMaXN0LmFkZCgnZ2FtZS1vdmVyLW9wdGlvbnMnKTtcbiAgICAgICAgLy8gbGV0IHRyeUFnYWluID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgICAgICAvLyBsZXQgbWFpbk1lbnUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgICAgIC8vIHRyeUFnYWluLmNsYXNzTGlzdC5hZGQoJ2dhbWUtb3Zlci1oZWFkaW5nJyk7XG4gICAgICAgIC8vIG1haW5NZW51LmNsYXNzTGlzdC5hZGQoJ2dhbWUtb3Zlci1oZWFkaW5nJyk7XG4gICAgICAgIC8vIHRyeUFnYWluLmlubmVySFRNTCA9IFwiVHJ5IEFnYWluXCI7XG4gICAgICAgIC8vIG1haW5NZW51LmlubmVySFRNTCA9IFwiTWFpbiBNZW51XCI7XG4gICAgICAgIC8vIG1haW5NZW51LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAvLyAgICAgbGV0IGZpZWxkQ29udGFpbmVyMSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdmaWVsZC1jb250YWluZXItMScpO1xuICAgICAgICAvLyAgICAgbGV0IGZpZWxkQ29udGFpbmVyMiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdmaWVsZC1jb250YWluZXItMicpO1xuICAgICAgICAvLyAgICAgbGV0IHNpbmdsZVBsYXllckNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2luZ2xlLXBsYXllci1jb250ZW50Jyk7XG4gICAgICAgIC8vICAgICBsZXQgZ2FtZU92ZXJEaXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZ2FtZS1vdmVyLWRpdicpO1xuICAgICAgICAvLyAgICAgW2ZpZWxkQ29udGFpbmVyMSwgZmllbGRDb250YWluZXIyLCBzaW5nbGVQbGF5ZXJDb250ZW50LCBnYW1lT3ZlckRpdl0uZm9yRWFjaChpdGVtID0+IHtcbiAgICAgICAgLy8gICAgICAgICBkb2N1bWVudC5ib2R5LnJlbW92ZUNoaWxkKGl0ZW0pO1xuICAgICAgICAvLyAgICAgfSk7XG4gICAgICAgIC8vICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbWVudScpLnN0eWxlLmRpc3BsYXkgPSBcImZsZXhcIjtcbiAgICAgICAgLy8gfSk7XG4gICAgICAgIC8vIGdhbWVPdmVyT3B0aW9ucy5hcHBlbmQodHJ5QWdhaW4pO1xuICAgICAgICAvLyBnYW1lT3Zlck9wdGlvbnMuYXBwZW5kKG1haW5NZW51KTtcbiAgICAgICAgLy8gZ2FtZU92ZXJTY3JlZW4uYXBwZW5kKGdhbWVPdmVyT3B0aW9ucyk7XG5cbiAgICAgICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChnYW1lT3ZlclNjcmVlbik7XG5cbiAgICAgICAgdGhpcy5nYW1lSXNPdmVyID0gdHJ1ZTtcbiAgICAgICAgaWYgKHRoaXMub3Bwb25lbnQpIHtcbiAgICAgICAgICAgIGNhbmNlbEFuaW1hdGlvbkZyYW1lKHRoaXMub3Bwb25lbnQuaGFuZGxlQ2xlYXIuZHJvcCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLnN0b3BUaW1lcigpO1xuICAgICAgICAgICAgY2xlYXJJbnRlcnZhbCh0aGlzLmNsZWFyRWxldmF0ZUludGVydmFsKTtcbiAgICAgICAgICAgIGNsZWFySW50ZXJ2YWwodGhpcy5jbGVhckVsZXZhdGlvbik7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBtdWx0aXBsYXllciBcbiAgICBzZXRPcHBvbmVudChwbGF5ZXIpIHtcbiAgICAgICAgdGhpcy5vcHBvbmVudCA9IHBsYXllcjtcbiAgICB9XG5cbiAgICBhZGRMaW5lc1RvUXVldWUobnVtTGluZXMpIHtcbiAgICAgICAgdGhpcy51cGNvbWluZ0xpbmVzICs9IG51bUxpbmVzO1xuICAgICAgICBsZXQgcGVyY2VudGFnZSA9IHRoaXMudXBjb21pbmdMaW5lcyAqIDU7XG4gICAgICAgIGFkanVzdFF1ZXVlSGVpZ2h0KHRoaXMuZ2FtZU51bSwgcGVyY2VudGFnZSk7XG4gICAgfVxuXG4gICAgcmVjZWl2ZVVwY29taW5nTGluZXMoKSB7XG4gICAgICAgIGxldCBnYXJiYWdlTGluZXMgPSBbXTtcbiAgICAgICAgbGV0IG51bUxpbmVzID0gdGhpcy51cGNvbWluZ0xpbmVzO1xuICAgICAgICBsZXQgcmFuZG9tSG9sZTtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBudW1MaW5lczsgaSsrKSB7XG4gICAgICAgICAgICBpZiAoaSAlIDIgPT09IDApIHJhbmRvbUhvbGUgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiA5KTtcbiAgICAgICAgICAgIGxldCBnYXJiYWdlUm93ID0gWzgsIDgsIDgsIDgsIDgsIDgsIDgsIDgsIDgsIDhdO1xuICAgICAgICAgICAgZ2FyYmFnZVJvd1tyYW5kb21Ib2xlXSA9IDA7XG4gICAgICAgICAgICBnYXJiYWdlTGluZXMucHVzaChnYXJiYWdlUm93KTtcbiAgICAgICAgfVxuICAgICAgICAvLyBpZiBwbGF5ZXIgcmVhY2hlcyB0aGUgdG9wLCBwbGF5ZXIgbG9zZXNcbiAgICAgICAgLy8gc2xpY2UgYWxsb3dzIHBsYXllciB0byBjb250aW51ZSBwbGF5aW5nIGlmIHRvcCBtaWRkbGUgaXMgY2xlYXJcbiAgICAgICAgaWYgKHRoaXMuZmllbGRbbnVtTGluZXMgLSAxXSAmJiAhdGhpcy5maWVsZFtudW1MaW5lcyAtIDFdLnNsaWNlKDIsNykuaW5jbHVkZXMoMCkpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmZpZWxkID0gdGhpcy5maWVsZC5zbGljZShudW1MaW5lcywgMjApLmNvbmNhdChnYXJiYWdlTGluZXMpO1xuICAgICAgICB0aGlzLnVwY29taW5nTGluZXMgPSAwO1xuICAgICAgICB0aGlzLnJlbmRlcigpO1xuICAgIH1cblxuICAgIC8vIHNpbmdsZSBwbGF5ZXIgbG9naWNcbiAgICBzdGFydEVsZXZhdGluZyhlbGV2YXRlRGVsYXkpIHtcbiAgICAgICAgdGhpcy5jbGVhckVsZXZhdGVJbnRlcnZhbCA9IHNldEludGVydmFsKCgpID0+IHtcbiAgICAgICAgICAgIHRoaXMuY2xlYXJHaG9zdFBvc2l0aW9uKCk7XG4gICAgICAgICAgICB0aGlzLmN1cnJlbnRQaWVjZS5jbGVhclNlbGZGcm9tQm9hcmQodGhpcy5maWVsZCk7XG4gICAgICAgICAgICB0aGlzLnVwY29taW5nTGluZXMgKz0gMTtcbiAgICAgICAgICAgIHRoaXMucmVjZWl2ZVVwY29taW5nTGluZXMoKTtcbiAgICAgICAgICAgIHRoaXMuc2V0R2hvc3RQb3NpdGlvbigpO1xuICAgICAgICAgICAgdGhpcy5jdXJyZW50UGllY2UucG9wdWxhdGVGaWVsZCh0aGlzLmZpZWxkKTtcbiAgICAgICAgICAgIHRoaXMucmVuZGVyKCk7XG4gICAgICAgIH0sIGVsZXZhdGVEZWxheSlcbiAgICB9XG5cbiAgICBhZGp1c3RFbGV2YXRlKCkge1xuICAgICAgICB0aGlzLmNsZWFyRWxldmF0aW9uID0gc2V0SW50ZXJ2YWwoKCkgPT4ge1xuICAgICAgICAgICAgaWYgKHRoaXMuY2xlYXJFbGV2YXRlSW50ZXJ2YWwpIGNsZWFySW50ZXJ2YWwodGhpcy5jbGVhckVsZXZhdGVJbnRlcnZhbCk7XG4gICAgICAgICAgICBpZiAodGhpcy5lbGV2YXRlRGVsYXkgPiAyMDAwKSB0aGlzLmVsZXZhdGVEZWxheSAtPSAyMDA7XG4gICAgICAgICAgICB0aGlzLnN0YXJ0RWxldmF0aW5nKHRoaXMuZWxldmF0ZURlbGF5KTtcbiAgICAgICAgfSwgMTAwMDApO1xuICAgIH1cblxuICAgIHN0YXJ0VGltZXIoKSB7XG4gICAgICAgIGxldCBtaW51dGVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1pbnV0ZXMnKTtcbiAgICAgICAgbGV0IHNlY29uZHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2Vjb25kcycpO1xuICAgICAgICB0aGlzLmNsZWFyVGltZXIgPSBzZXRJbnRlcnZhbCgoKSA9PiB7XG4gICAgICAgICAgICBsZXQgb2xkU2Vjb25kID0gTnVtYmVyKHNlY29uZHMuaW5uZXJIVE1MKTtcbiAgICAgICAgICAgIGxldCBvbGRNaW51dGUgPSBOdW1iZXIobWludXRlcy5pbm5lckhUTUwpO1xuICAgICAgICAgICAgaWYgKG9sZFNlY29uZCArIDEgPT09IDYwKSB7XG4gICAgICAgICAgICAgICAgc2Vjb25kcy5pbm5lckhUTUwgPSAwO1xuICAgICAgICAgICAgICAgIG1pbnV0ZXMuaW5uZXJIVE1MID0gb2xkTWludXRlICsgMTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgbGV0IG5ld1NlY29uZHMgPSBOdW1iZXIoc2Vjb25kcy5pbm5lckhUTUwpICsgMSA8IDEwID8gYDAke051bWJlcihzZWNvbmRzLmlubmVySFRNTCkgKyAxfWAgOiBOdW1iZXIoc2Vjb25kcy5pbm5lckhUTUwpICsgMTtcbiAgICAgICAgICAgICAgICBzZWNvbmRzLmlubmVySFRNTCA9IG5ld1NlY29uZHM7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sIDEwMDApXG4gICAgfVxuXG4gICAgc3RvcFRpbWVyKCkge1xuICAgICAgICBjbGVhckludGVydmFsKHRoaXMuY2xlYXJUaW1lcik7XG4gICAgfVxuXG4gICAgY2hhbmdlQ29udHJvbHMoKSB7XG4gICAgICAgIHRoaXMuY29udHJvbHMgPSB7IGxlZnQ6IDM3LCByaWdodDogMzksIHR1cm5SaWdodDogMzgsIHNvZnREcm9wOiA0MCwgaG9sZDogMTYsIHR1cm5MZWZ0OiA2NywgaGFyZERyb3A6IDMyIH1cbiAgICB9XG59IiwiaW1wb3J0IE1lbnUgZnJvbSAnLi9tZW51L21lbnUnXG5cbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsICgpID0+IHtcbiAgICBjb25zdCBtZW51ID0gbmV3IE1lbnU7XG4gICAgbWVudS5yZW5kZXJNZW51KCk7XG59KTsiLCJpbXBvcnQgR2FtZSBmcm9tICcuLi9nYW1lL2dhbWUnO1xuaW1wb3J0IEZpZWxkIGZyb20gJy4uL2ZpZWxkL2ZpZWxkJztcbmltcG9ydCBNdWx0aXBsYXllciBmcm9tICcuLi9tdWx0aXBsYXllci9tdWx0aXBsYXllcic7XG5pbXBvcnQgTW9kYWwgZnJvbSAnLi4vbW9kYWwvbW9kYWwnO1xuaW1wb3J0IFNpbmdsZVBsYXllckNvbnRlbnQgZnJvbSAnLi4vbW9kYWwvc2luZ2xlUGxheWVyQ29udGVudCc7XG5pbXBvcnQgTXVsdGlwbGF5ZXJDb250ZW50IGZyb20gJy4uL21vZGFsL211bHRpcGxheWVyQ29udGVudCc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE1lbnUge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLm1lbnUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm1lbnVcIik7XG5cbiAgICAgICAgdGhpcy5vcHRpb25zUGxheWVyMSA9IHsgZ2FtZU51bTogMSwgbW92ZVNwZWVkOiAyMCwgY29udHJvbHM6IHsgbGVmdDogNjUsIHJpZ2h0OiA2OCwgdHVyblJpZ2h0OiA4Nywgc29mdERyb3A6IDgzLCBob2xkOiA4MSwgdHVybkxlZnQ6IDE5MiwgaGFyZERyb3A6IDQ5IH0gfVxuICAgICAgICB0aGlzLm9wdGlvbnNQbGF5ZXIyID0geyBnYW1lTnVtOiAyLCBtb3ZlU3BlZWQ6IDIwLCBjb250cm9sczogeyBsZWZ0OiAzNywgcmlnaHQ6IDM5LCB0dXJuUmlnaHQ6IDM4LCBzb2Z0RHJvcDogNDAsIGhvbGQ6IDE2LCB0dXJuTGVmdDogNzUsIGhhcmREcm9wOiAxOTAgfSB9XG4gICAgICAgICAgICBcblxuICAgICAgICB0aGlzLmdhbWUxID0gbmV3IEdhbWUodGhpcy5vcHRpb25zUGxheWVyMSk7XG4gICAgICAgIHRoaXMuZ2FtZTIgPSBuZXcgR2FtZSh0aGlzLm9wdGlvbnNQbGF5ZXIyKTtcblxuICAgICAgICB0aGlzLmZpZWxkMSA9IG5ldyBGaWVsZCgxKTtcbiAgICAgICAgdGhpcy5maWVsZDIgPSBuZXcgRmllbGQoMik7XG5cbiAgICAgICAgdGhpcy5tdWx0aXBsYXllck1vZGUgPSBuZXcgTXVsdGlwbGF5ZXIodGhpcy5nYW1lMSwgdGhpcy5nYW1lMik7XG5cbiAgICAgICAgdGhpcy5maWVsZENvbnRhaW5lcjEgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImZpZWxkLWNvbnRhaW5lci0xXCIpO1xuICAgICAgICB0aGlzLmZpZWxkQ29udGFpbmVyMiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZmllbGQtY29udGFpbmVyLTJcIik7XG5cbiAgICAgICAgdGhpcy5zaW5nbGVQbGF5ZXJDb250ZW50ID0gbmV3IFNpbmdsZVBsYXllckNvbnRlbnQoKTtcbiAgICAgICAgdGhpcy5tdWx0aXBsYXllckNvbnRlbnQgPSBuZXcgTXVsdGlwbGF5ZXJDb250ZW50KCk7XG4gICAgICAgIHRoaXMubW9kYWwgPSBuZXcgTW9kYWwoKTtcbiAgICB9XG5cbiAgICByZW5kZXJCdXR0b25zKCkge1xuICAgICAgICBsZXQgc2luZ2xlUGxheWVyQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgbGV0IG11bHRpcGxheWVyQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcblxuICAgICAgICBzaW5nbGVQbGF5ZXJCdXR0b24uY2xhc3NMaXN0LmFkZChcInNpbmdsZS1wbGF5ZXItYnV0dG9uXCIpO1xuICAgICAgICBtdWx0aXBsYXllckJ1dHRvbi5jbGFzc0xpc3QuYWRkKFwibXVsdGlwbGF5ZXItYnV0dG9uXCIpO1xuXG4gICAgICAgIHNpbmdsZVBsYXllckJ1dHRvbi5pbm5lckhUTUwgPSBcIlNpbmdsZSBQbGF5ZXJcIjtcbiAgICAgICAgbXVsdGlwbGF5ZXJCdXR0b24uaW5uZXJIVE1MID0gXCJNdWx0aXBsYXllclwiO1xuXG4gICAgICAgIHRoaXMuYWRkRXZlbnRMaXN0ZW5lcnMoc2luZ2xlUGxheWVyQnV0dG9uLCBtdWx0aXBsYXllckJ1dHRvbik7XG5cbiAgICAgICAgcmV0dXJuIFtzaW5nbGVQbGF5ZXJCdXR0b24sIG11bHRpcGxheWVyQnV0dG9uXTtcbiAgICB9XG5cbiAgICBhZGRFdmVudExpc3RlbmVycyhzaW5nbGVQbGF5ZXJCdXR0b24sIG11bHRpcGxheWVyQnV0dG9uKSB7XG4gICAgICAgIHNpbmdsZVBsYXllckJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICAgIHRoaXMucmVuZGVyU2luZ2xlUGxheWVyKCk7XG4gICAgICAgIH0pO1xuICAgICAgICBtdWx0aXBsYXllckJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICAgIHRoaXMucmVuZGVyTXVsdGlwbGF5ZXIoKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmVuZGVyU2luZ2xlUGxheWVyKCkge1xuICAgICAgICAvLyBkb2N1bWVudC5ib2R5LnJlbW92ZUNoaWxkKHRoaXMubWVudSk7XG4gICAgICAgIHRoaXMubWVudS5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gICAgICAgIGRvY3VtZW50LmJvZHkuc3R5bGUuanVzdGlmeUNvbnRlbnQgPSAnbm9uZSc7XG4gICAgICAgIHRoaXMuc2luZ2xlUGxheWVyQ29udGVudC5jcmVhdGVBbGxDb250ZW50KCk7XG4gICAgICAgIHRoaXMuZmllbGQxLmNyZWF0ZUNvbXBsZXRlRmllbGQodGhpcy5maWVsZENvbnRhaW5lcjEpO1xuICAgICAgICB0aGlzLmZpZWxkQ29udGFpbmVyMS5zdHlsZS5wb3NpdGlvbiA9ICdyZWxhdGl2ZSc7XG4gICAgICAgIHRoaXMuZmllbGRDb250YWluZXIxLnN0eWxlLmxlZnQgPSAnMTR2dyc7XG4gICAgICAgIHRoaXMuZ2FtZTEua2V5TGlzdGVuZXIoKTtcbiAgICAgICAgdGhpcy5nYW1lMS5jaGFuZ2VDb250cm9scygpO1xuICAgICAgICB0aGlzLmdhbWUxLnBsYXkoKTtcbiAgICAgICAgdGhpcy5nYW1lMS5zdGFydEVsZXZhdGluZyg1MDAwKTtcbiAgICAgICAgdGhpcy5nYW1lMS5hZGp1c3RFbGV2YXRlKCk7XG4gICAgICAgIHRoaXMuc2luZ2xlUGxheWVyQ29udGVudC5jcmVhdGVUaW1lcigpO1xuICAgICAgICB0aGlzLmdhbWUxLnN0YXJ0VGltZXIoKTtcbiAgICB9XG5cbiAgICByZW5kZXJNdWx0aXBsYXllcigpIHtcbiAgICAgICAgZG9jdW1lbnQuYm9keS5yZW1vdmVDaGlsZCh0aGlzLm1lbnUpO1xuICAgICAgICB0aGlzLmZpZWxkMS5jcmVhdGVDb21wbGV0ZUZpZWxkKHRoaXMuZmllbGRDb250YWluZXIxKTtcbiAgICAgICAgdGhpcy5nYW1lMS5rZXlMaXN0ZW5lcigpO1xuXG4gICAgICAgIHRoaXMuZmllbGQyLmNyZWF0ZUNvbXBsZXRlRmllbGQodGhpcy5maWVsZENvbnRhaW5lcjIpO1xuICAgICAgICB0aGlzLmdhbWUyLmtleUxpc3RlbmVyKCk7XG5cbiAgICAgICAgbGV0IGNvbnRyb2xzQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGNvbnRyb2xzQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2NvbnRyb2xzLWNvbnRhaW5lcicpXG4gICAgICAgIGNvbnRyb2xzQ29udGFpbmVyLmFwcGVuZENoaWxkKHRoaXMubXVsdGlwbGF5ZXJDb250ZW50LmNyZWF0ZUNvbnRyb2xzQ29udGVudCgncGxheWVyMScpKTtcbiAgICAgICAgY29udHJvbHNDb250YWluZXIuYXBwZW5kQ2hpbGQodGhpcy5tdWx0aXBsYXllckNvbnRlbnQuY3JlYXRlQ29udHJvbHNDb250ZW50KCdwbGF5ZXIyJykpO1xuICAgICAgICB0aGlzLm1vZGFsLmNyZWF0ZSgpO1xuICAgICAgICB0aGlzLm1vZGFsLmFwcGVuZENoaWxkKGNvbnRyb2xzQ29udGFpbmVyKTtcbiAgICAgICAgdGhpcy5tb2RhbC5hcHBlbmRDaGlsZCh0aGlzLl9jcmVhdGVDbG9zZU1vZGFsTGluaygpKTtcbiAgICB9XG5cbiAgICByZW5kZXJNZW51KCkge1xuICAgICAgICBsZXQgYnV0dG9uQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgYnV0dG9uQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJidXR0b24tY29udGFpbmVyXCIpO1xuICAgICAgICB0aGlzLnJlbmRlckJ1dHRvbnMoKS5mb3JFYWNoKGJ1dHRvbiA9PiB7XG4gICAgICAgICAgICBidXR0b25Db250YWluZXIuYXBwZW5kQ2hpbGQoYnV0dG9uKTtcbiAgICAgICAgfSlcbiAgICAgICAgdGhpcy5tZW51LmFwcGVuZENoaWxkKGJ1dHRvbkNvbnRhaW5lcik7XG4gICAgfVxuXG4gICAgX2NyZWF0ZUNsb3NlTW9kYWxMaW5rKCkge1xuICAgICAgICBsZXQgY2xvc2VMaW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGNsb3NlTGluay5jbGFzc0xpc3QuYWRkKCdjbG9zZS1tb2RhbC1saW5rJyk7XG4gICAgICAgIGNsb3NlTGluay5pbm5lckhUTUwgPSBcIkxldCdzIGdldCBzdGFydGVkLlwiO1xuXG4gICAgICAgIGNsb3NlTGluay5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICAgIHRoaXMubW9kYWwucmVtb3ZlKCk7XG4gICAgICAgICAgICB0aGlzLm11bHRpcGxheWVyTW9kZS5zdGFydE11bHRpcGxheWVyKCk7XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gY2xvc2VMaW5rO1xuICAgIH1cblxuICAgIHJldHVyblRvTWVudSgpIHtcbiAgICAgICAgbGV0IGZpZWxkQ29udGFpbmVyMSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdmaWVsZC1jb250YWluZXItMScpO1xuICAgICAgICBsZXQgZmllbGRDb250YWluZXIyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2ZpZWxkLWNvbnRhaW5lci0yJyk7XG4gICAgICAgIGxldCBzaW5nbGVQbGF5ZXJDb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcignc2luZ2xlLXBsYXllci1jb250ZW50Jyk7XG4gICAgICAgIFtmaWVsZENvbnRhaW5lcjEsIGZpZWxkQ29udGFpbmVyMiwgc2luZ2xlUGxheWVyQ29udGVudF0uZm9yRWFjaChpdGVtID0+IHtcbiAgICAgICAgICAgIGRvY3VtZW50LmJvZHkucmVtb3ZlKGl0ZW0pO1xuICAgICAgICB9KTtcbiAgICB9XG59IiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgTW9kYWwge1xuICAgIGNyZWF0ZSgpIHtcbiAgICAgICAgbGV0IG1vZGFsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIG1vZGFsLmNsYXNzTGlzdC5hZGQoJ2NvbnRyb2xzLW1vZGFsJyk7XG4gICAgICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQobW9kYWwpO1xuICAgIH1cbiAgICBcbiAgICBhcHBlbmRDaGlsZChjb250ZW50KSB7XG4gICAgICAgIGxldCBtb2RhbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb250cm9scy1tb2RhbCcpO1xuICAgICAgICBtb2RhbC5hcHBlbmRDaGlsZChjb250ZW50KTtcbiAgICB9XG5cbiAgICByZW1vdmUoKSB7XG4gICAgICAgIGxldCBtb2RhbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb250cm9scy1tb2RhbCcpO1xuICAgICAgICBtb2RhbC5yZW1vdmUoKTtcbiAgICB9XG59IiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgTXVsdGlwbGF5ZXJDb250ZW50IHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5rZXlzID0ge1xuICAgICAgICAgICAgcGxheWVyMToge1xuICAgICAgICAgICAgICAgICd3X2tleSc6ICdUVVJOIFJJR0hUJyxcbiAgICAgICAgICAgICAgICAnYV9rZXknOiAnTEVGVCcsXG4gICAgICAgICAgICAgICAgJ3Nfa2V5JzogJ1NPRlQgRFJPUCcsXG4gICAgICAgICAgICAgICAgJ2Rfa2V5JzogJ1JJR0hUJyxcbiAgICAgICAgICAgICAgICAnYF9rZXknOiAnVFVSTiBMRUZUJyxcbiAgICAgICAgICAgICAgICAncV9rZXknOiAnSE9MRCcsXG4gICAgICAgICAgICAgICAgJzFfa2V5JzogJ0hBUkREUk9QJ1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHBsYXllcjI6IHtcbiAgICAgICAgICAgICAgICAndXBfa2V5JzogJ1RVUk4gUklHSFQnLFxuICAgICAgICAgICAgICAgICdsZWZ0X2tleSc6ICdMRUZUJyxcbiAgICAgICAgICAgICAgICAnZG93bl9rZXknOiAnU09GVCBEUk9QJyxcbiAgICAgICAgICAgICAgICAncmlnaHRfa2V5JzogJ1JJR0hUJyxcbiAgICAgICAgICAgICAgICAna19rZXknOiAnVFVSTiBMRUZUJyxcbiAgICAgICAgICAgICAgICAnc2hpZnRfa2V5JzogJ0hPTEQnLFxuICAgICAgICAgICAgICAgICdwZXJpb2Rfa2V5JzogJ0hBUkREUk9QJ1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuXG4gICAgfVxuXG4gICAgY3JlYXRlQ29udHJvbHNDb250ZW50KHBsYXllcikge1xuICAgICAgICBsZXQgY29udHJvbHNEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgY29udHJvbHNEaXYuY2xhc3NMaXN0LmFkZCgnY29udHJvbHMnKTtcbiAgICAgICAgbGV0IGltYWdlcyA9IE9iamVjdC5rZXlzKHRoaXMua2V5c1twbGF5ZXJdKTtcbiAgICAgICAgbGV0IGRlc2NyaXB0aW9ucyA9IE9iamVjdC52YWx1ZXModGhpcy5rZXlzW3BsYXllcl0pO1xuXG4gICAgICAgIC8vIGluaXRpYWxpemUgYXJyYXlzIG9mIHNwYW5zIGFuZCBkaXZzXG4gICAgICAgIGxldCBzcGFucyA9IFtdO1xuICAgICAgICBsZXQgZGl2cyA9IFtdO1xuXG4gICAgICAgIGxldCBsYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2hlYWRlcicpO1xuICAgICAgICBsYWJlbC5pbm5lckhUTUwgPSBgUExBWUVSICR7cGxheWVyLnNsaWNlKDYpfWBcbiAgICAgICAgY29udHJvbHNEaXYuYXBwZW5kQ2hpbGQobGFiZWwpO1xuXG4gICAgICAgIC8vIGNyZWF0ZSBlbGVtZW50cyBhbmQgc3RvcmUgaW50byBhcnJheSBpbmRpY2VzIGZvciBsYXRlciByZWZlcmVuY2VcbiAgICAgICAgZm9yIChsZXQgaSA9IDE7IGkgPD0gNzsgaSsrKSB7XG4gICAgICAgICAgICBzcGFuc1tpXSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgICAgICAgICAgIGlmIChpIDw9IDMpIGRpdnNbaV0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgaW1hZ2VzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBsZXQgcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICAgICAgICAgIGxldCBpbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgICAgICAgICAgIGltZy5jbGFzc0xpc3QuYWRkKCdrZXlib2FyZC1rZXknKTtcbiAgICAgICAgICAgIGlmIChpID09PSA1ICYmIHBsYXllciA9PT0gXCJwbGF5ZXIyXCIpIGltZy5jbGFzc0xpc3QuYWRkKCdzaGlmdC1rZXknKTtcblxuICAgICAgICAgICAgcC5pbm5lckhUTUwgPSBkZXNjcmlwdGlvbnNbaV07XG4gICAgICAgICAgICBpbWcuc2V0QXR0cmlidXRlKCdzcmMnLCBgLi9hc3NldHMvaW1hZ2VzLyR7aW1hZ2VzW2ldfS5wbmdgKTtcblxuICAgICAgICAgICAgc3BhbnNbaSArIDFdLmFwcGVuZChpbWcpO1xuICAgICAgICAgICAgc3BhbnNbaSArIDFdLmFwcGVuZChwKTtcblxuICAgICAgICAgICAgaWYgKGkgPCAxKSB7XG4gICAgICAgICAgICAgICAgZGl2c1sxXS5hcHBlbmQoc3BhbnNbaSArIDFdKTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoaSA8IDQpIHtcbiAgICAgICAgICAgICAgICBkaXZzWzJdLmFwcGVuZChzcGFuc1tpICsgMV0pO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChpIDwgNykge1xuICAgICAgICAgICAgICAgIGRpdnNbM10uYXBwZW5kKHNwYW5zW2kgKyAxXSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBmb3IgKGxldCBpID0gMTsgaSA8PSAzOyBpKyspIHtcbiAgICAgICAgICAgIGNvbnRyb2xzRGl2LmFwcGVuZChkaXZzW2ldKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBjb250cm9sc0RpdjtcbiAgICB9XG59IiwiaW1wb3J0IFNjb3JlS2VlcGVyIGZyb20gJy4uL3Njb3Jla2VlcGVyL3Njb3Jla2VlcGVyJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2luZ2xlUGxheWVyQ29udGVudCB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMua2V5cyA9IHtcbiAgICAgICAgICAgICdsZWZ0X2tleSc6ICdMRUZUJyxcbiAgICAgICAgICAgICdyaWdodF9rZXknOiAnUklHSFQnLFxuICAgICAgICAgICAgJ2Rvd25fa2V5JzogJ1NPRlQgRFJPUCcsXG4gICAgICAgICAgICAndXBfa2V5JzogJ1RVUk4gUklHSFQnLFxuICAgICAgICAgICAgJ2Nfa2V5JzogJ1RVUk4gTEVGVCcsXG4gICAgICAgICAgICAnc2hpZnRfa2V5JzogJ0hPTEQnLFxuICAgICAgICAgICAgJ3NwYWNlX2tleSc6ICdIQVJERFJPUCcsXG4gICAgICAgIH07XG5cbiAgICAgICAgdGhpcy5zY29yZUtlZXBlciA9IG5ldyBTY29yZUtlZXBlcigpO1xuICAgIH1cblxuICAgIGNyZWF0ZUFsbENvbnRlbnQoKSB7XG4gICAgICAgIGxldCBhbGxTaW5nbGVQbGF5ZXJDb250ZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGFsbFNpbmdsZVBsYXllckNvbnRlbnQuY2xhc3NMaXN0LmFkZCgnc2luZ2xlLXBsYXllci1jb250ZW50Jyk7XG4gICAgICAgIGFsbFNpbmdsZVBsYXllckNvbnRlbnQuYXBwZW5kQ2hpbGQodGhpcy5jcmVhdGVUaW1lcigpKTtcbiAgICAgICAgYWxsU2luZ2xlUGxheWVyQ29udGVudC5hcHBlbmRDaGlsZCh0aGlzLnNjb3JlS2VlcGVyLmNyZWF0ZVNjb3JlS2VlcGVyKCkpO1xuICAgICAgICBhbGxTaW5nbGVQbGF5ZXJDb250ZW50LmFwcGVuZENoaWxkKHRoaXMuY3JlYXRlQ29udHJvbHNDb250ZW50KCkpO1xuICAgICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZChhbGxTaW5nbGVQbGF5ZXJDb250ZW50KTtcbiAgICB9XG5cbiAgICBjcmVhdGVDb250cm9sc0NvbnRlbnQoKSB7XG4gICAgICAgIGxldCBjb250ZW50RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGNvbnRlbnREaXYuY2xhc3NMaXN0LmFkZCgnY29udHJvbHMnKTtcbiAgICAgICAgbGV0IGltYWdlcyA9IE9iamVjdC5rZXlzKHRoaXMua2V5cyk7XG4gICAgICAgIGxldCBkZXNjcmlwdGlvbnMgPSBPYmplY3QudmFsdWVzKHRoaXMua2V5cyk7XG5cbiAgICAgICAgLy8gaW5pdGlhbGl6ZSBhcnJheXMgb2Ygc3BhbnMgYW5kIGRpdnNcbiAgICAgICAgbGV0IHNwYW5zID0gW107XG4gICAgICAgIGxldCBkaXZzID0gW107XG5cbiAgICAgICAgLy8gY3JlYXRlIGVsZW1lbnRzIGFuZCBzdG9yZSBpbnRvIGFycmF5IGluZGljZXMgZm9yIGxhdGVyIHJlZmVyZW5jZVxuICAgICAgICBmb3IgKGxldCBpID0gMTsgaSA8PSA3OyBpKyspIHtcbiAgICAgICAgICAgIHNwYW5zW2ldID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICAgICAgICAgICAgaWYgKGkgPD0gNCkgZGl2c1tpXSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICB9XG5cbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBpbWFnZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGxldCBwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgICAgICAgICAgbGV0IGltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICAgICAgICAgICAgaW1nLmNsYXNzTGlzdC5hZGQoJ2tleWJvYXJkLWtleScpO1xuICAgICAgICAgICAgaWYgKGkgPT09IDUpIGltZy5jbGFzc0xpc3QuYWRkKCdzaGlmdC1rZXknKTtcbiAgICAgICAgICAgIGlmIChpID09PSA2KSBpbWcuY2xhc3NMaXN0LmFkZCgnc3BhY2Uta2V5Jyk7XG5cbiAgICAgICAgICAgIHAuaW5uZXJIVE1MID0gZGVzY3JpcHRpb25zW2ldO1xuICAgICAgICAgICAgaW1nLnNldEF0dHJpYnV0ZSgnc3JjJywgYC4vYXNzZXRzL2ltYWdlcy8ke2ltYWdlc1tpXX0ucG5nYCk7XG5cbiAgICAgICAgICAgIHNwYW5zW2kgKyAxXS5hcHBlbmQoaW1nKTtcbiAgICAgICAgICAgIHNwYW5zW2kgKyAxXS5hcHBlbmQocCk7XG5cbiAgICAgICAgICAgIGlmIChpIDwgMikge1xuICAgICAgICAgICAgICAgIGRpdnNbMV0uYXBwZW5kKHNwYW5zW2kgKyAxXSk7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKGkgPCA0KSB7XG4gICAgICAgICAgICAgICAgZGl2c1syXS5hcHBlbmQoc3BhbnNbaSArIDFdKTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoaSA8IDYpIHtcbiAgICAgICAgICAgICAgICBkaXZzWzNdLmFwcGVuZChzcGFuc1tpICsgMV0pO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBkaXZzWzRdLmFwcGVuZChzcGFuc1tpICsgMV0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgZm9yIChsZXQgaSA9IDE7IGkgPD0gNDsgaSsrKSB7XG4gICAgICAgICAgICBjb250ZW50RGl2LmFwcGVuZChkaXZzW2ldKTtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgcmV0dXJuIGNvbnRlbnREaXY7XG4gICAgfVxuXG4gICAgY3JlYXRlVGltZXIoKSB7XG4gICAgICAgIGxldCB0aW1lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBsZXQgbWludXRlcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICAgICAgbGV0IHNlY29uZHMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgICAgIGxldCBjb2xvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICAgICAgdGltZXIuY2xhc3NMaXN0LmFkZCgndGltZXInKTtcbiAgICAgICAgbWludXRlcy5jbGFzc0xpc3QuYWRkKCdtaW51dGVzJyk7XG4gICAgICAgIHNlY29uZHMuY2xhc3NMaXN0LmFkZCgnc2Vjb25kcycpO1xuICAgICAgICBjb2xvbi5jbGFzc0xpc3QuYWRkKCdjb2xvbicpO1xuICAgICAgICBtaW51dGVzLmlubmVySFRNTCA9ICcwJztcbiAgICAgICAgc2Vjb25kcy5pbm5lckhUTUwgPSAnMDAnO1xuICAgICAgICBjb2xvbi5pbm5lckhUTUwgPSAnOic7XG4gICAgICAgIFttaW51dGVzLCBjb2xvbiwgc2Vjb25kc10uZm9yRWFjaChlbGUgPT4gdGltZXIuYXBwZW5kQ2hpbGQoZWxlKSk7XG4gICAgICAgIHJldHVybiB0aW1lcjtcbiAgICB9XG5cbiAgICBcbn0iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBNdWx0aXBsYXllciB7XG4gICAgY29uc3RydWN0b3IocGxheWVyMSwgcGxheWVyMikge1xuICAgICAgICB0aGlzLnBsYXllcjEgPSBwbGF5ZXIxO1xuICAgICAgICB0aGlzLnBsYXllcjIgPSBwbGF5ZXIyO1xuICAgIH1cblxuICAgIHN0YXJ0TXVsdGlwbGF5ZXIoKSB7XG4gICAgICAgIHRoaXMucGxheWVyMS5zZXRPcHBvbmVudCh0aGlzLnBsYXllcjIpO1xuICAgICAgICB0aGlzLnBsYXllcjIuc2V0T3Bwb25lbnQodGhpcy5wbGF5ZXIxKTtcbiAgICAgICAgdGhpcy5wbGF5ZXIxLnBsYXkoKTtcbiAgICAgICAgdGhpcy5wbGF5ZXIyLnBsYXkoKTtcbiAgICB9XG59XG4iLCJpbXBvcnQgUGllY2UgZnJvbSAnLi9waWVjZSc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIElQaWVjZSBleHRlbmRzIFBpZWNlIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgdGhpcy5uYW1lID0gXCJJUGllY2VcIjtcbiAgICAgICAgdGhpcy5wb3NpdGlvbiA9IHtcbiAgICAgICAgICAgIHRvcDogW10sXG4gICAgICAgICAgICBtaWRkbGU6IFtdLFxuICAgICAgICAgICAgYm90dG9tOiBbWzAsIDNdLCBbMCwgNF0sIFswLCA1XSwgWzAsIDZdXVxuICAgICAgICB9O1xuICAgICAgICB0aGlzLmNvbG9yQ29kZSA9IDI7XG4gICAgICAgIHRoaXMudHVybmluZ1BvaW50ID0gWzEsIDRdO1xuICAgICAgICB0aGlzLmRpc3BsYXlTcXVhcmVzID0gW1swLCAyXSwgWzEsIDJdLCBbMiwgMl0sIFszLCAyXV07XG5cbiAgICAgICAgdGhpcy5yZW1vdmVTcXVhcmVzID0gW107XG5cbiAgICAgICAgdGhpcy5vZmZzZXRHdWlkZSA9IHtcbiAgICAgICAgICAgIDA6IFtbMCwgMF0sIFswLCAtMV0sIFswLCAyXSwgWzAsIC0xXSwgWzAsIDJdXSxcbiAgICAgICAgICAgIDE6IFtbMCwgLTFdLCBbMCwgMF0sIFswLCAwXSwgWzEsIDBdLCBbLTIsIDBdXSxcbiAgICAgICAgICAgIDI6IFtbMSwgLTFdLCBbMSwgMV0sIFsxLCAtMl0sIFswLCAxXSwgWzAsIC0yXV0sXG4gICAgICAgICAgICAzOiBbWzEsIDBdLCBbMSwgMF0sIFsxLCAwXSwgWy0xLCAwXSwgWzIsIDBdXVxuICAgICAgICB9XG4gICAgfVxuXG5cbn1cblxuXG4iLCJpbXBvcnQgUGllY2UgZnJvbSAnLi9waWVjZSc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIGpQaWVjZSBleHRlbmRzIFBpZWNlIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgdGhpcy5uYW1lID0gXCJKUGllY2VcIjtcbiAgICAgICAgdGhpcy5wb3NpdGlvbiA9IHtcbiAgICAgICAgICAgIHRvcDogW1swLCAzXV0sXG4gICAgICAgICAgICBtaWRkbGU6IFtdLFxuICAgICAgICAgICAgYm90dG9tOiBbWzEsIDNdLCBbMSwgNF0sIFsxLCA1XV1cbiAgICAgICAgfTtcbiAgICAgICAgdGhpcy5jb2xvckNvZGUgPSA3O1xuXG4gICAgICAgIHRoaXMudHVybmluZ1BvaW50ID0gWzEsIDRdO1xuXG4gICAgICAgIHRoaXMuZGlzcGxheVNxdWFyZXMgPSBbWzEsIDFdLCBbMSwgMl0sIFsyLCAyXSwgWzMsIDJdXTtcbiBcbiAgICAgICAgdGhpcy5yZW1vdmVTcXVhcmVzID0gW107XG4gICAgfVxufSIsImltcG9ydCBQaWVjZSBmcm9tICcuL3BpZWNlJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgbFBpZWNlIGV4dGVuZHMgUGllY2Uge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICB0aGlzLm5hbWUgPSBcIkxQaWVjZVwiO1xuICAgICAgICB0aGlzLnBvc2l0aW9uID0ge1xuICAgICAgICAgICAgdG9wOiBbWzAsIDVdXSxcbiAgICAgICAgICAgIG1pZGRsZTogW10sXG4gICAgICAgICAgICBib3R0b206IFtbMSwgM10sIFsxLCA0XSwgWzEsIDVdXVxuICAgICAgICB9O1xuICAgICAgICB0aGlzLmNvbG9yQ29kZSA9IDY7XG5cbiAgICAgICAgdGhpcy50dXJuaW5nUG9pbnQgPSBbMSwgNF07XG5cbiAgICAgICAgdGhpcy5kaXNwbGF5U3F1YXJlcyA9IFtbMSwgMl0sIFsyLCAyXSwgWzMsIDJdLCBbMywgMV1dO1xuXG4gICAgICAgIHRoaXMucmVtb3ZlU3F1YXJlcyA9IFtdO1xuICAgIH1cbn0iLCJpbXBvcnQgUGllY2UgZnJvbSAnLi9waWVjZSc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE9QaWVjZSBleHRlbmRzIFBpZWNlIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgdGhpcy5uYW1lID0gXCJPUGllY2VcIjtcbiAgICAgICAgdGhpcy5wb3NpdGlvbiA9IHtcbiAgICAgICAgICAgIHRvcDogW1swLCA0XSwgWzAsIDVdXSxcbiAgICAgICAgICAgIG1pZGRsZTogW10sXG4gICAgICAgICAgICBib3R0b206IFtbMSwgNF0sWzEsIDVdXVxuICAgICAgICB9O1xuICAgICAgICB0aGlzLmNvbG9yQ29kZSA9IDE7XG4gICAgICAgIHRoaXMudHVybmluZ1BvaW50ID0gWzEsIDRdO1xuICAgICAgICB0aGlzLmRpc3BsYXlTcXVhcmVzID0gW1sxLCAxXSwgWzIsIDFdLCBbMSwgMl0sIFsyLCAyXV07XG5cbiAgICAgICAgdGhpcy5yZW1vdmVTcXVhcmVzID0gW107XG4gICAgfVxuXG4gICAgLy8gT1BpZWNlIGRvZXMgbm90IHR1cm5cbiAgICB0dXJuUmlnaHQoKSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgXG4gICAgdHVybkxlZnQoKSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG59ICIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIFBpZWNlIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5sZWZ0TW9zdCA9ICcnO1xuICAgICAgICB0aGlzLnJpZ2h0TW9zdCA9ICcnO1xuICAgICAgICB0aGlzLmJvdHRvbU1vc3QgPSAnJztcbiAgICAgICAgdGhpcy50b3BNb3N0ID0gJyc7XG5cbiAgICAgICAgdGhpcy5yb3RhdGlvblN0YXRlID0gMDtcblxuICAgICAgICB0aGlzLm9mZnNldEd1aWRlID0ge1xuICAgICAgICAgICAgMDogW1swLCAwXSwgWzAsIDBdLCBbMCwgMF0sIFswLCAwXSwgWzAsIDBdXSxcbiAgICAgICAgICAgIDE6IFtbMCwgMF0sIFswLCAxXSwgWy0xLCAxXSwgWzIsIDBdLCBbMiwgMV1dLFxuICAgICAgICAgICAgMjogW1swLCAwXSwgWzAsIDBdLCBbMCwgMF0sIFswLCAwXSwgWzAsIDBdXSxcbiAgICAgICAgICAgIDM6IFtbMCwgMF0sIFswLCAtMV0sIFstMSwgLTFdLCBbMiwgMF0sIFsyLCAtMV1dXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBzZXRPdXRlclNxdWFyZXMoKSB7XG4gICAgICAgIGxldCBsZWZ0TW9zdCwgcmlnaHRNb3N0LCB0b3BNb3N0LCBib3R0b21Nb3N0O1xuICAgICAgICBPYmplY3QudmFsdWVzKHRoaXMucG9zaXRpb24pLmZvckVhY2goY29vcmRpbmF0ZXNBcnJheSA9PiBjb29yZGluYXRlc0FycmF5LmZvckVhY2goYXJyYXkgPT4ge1xuICAgICAgICAgICAgbGV0IGNvbHVtblZhbHVlID0gYXJyYXlbMV07XG4gICAgICAgICAgICBsZXQgcm93VmFsdWUgPSBhcnJheVswXTtcbiAgICAgICAgICAgIGlmICghbGVmdE1vc3QgfHwgY29sdW1uVmFsdWUgPCBsZWZ0TW9zdFsxXSkgbGVmdE1vc3QgPSBbcm93VmFsdWUsIGNvbHVtblZhbHVlXTtcbiAgICAgICAgICAgIGlmICghcmlnaHRNb3N0IHx8IGNvbHVtblZhbHVlID4gcmlnaHRNb3N0WzFdKSByaWdodE1vc3QgPSBbcm93VmFsdWUsIGNvbHVtblZhbHVlXTtcbiAgICAgICAgICAgIGlmICghYm90dG9tTW9zdCB8fCByb3dWYWx1ZSA+IGJvdHRvbU1vc3RbMF0pIGJvdHRvbU1vc3QgPSBbcm93VmFsdWUsIGNvbHVtblZhbHVlXTtcbiAgICAgICAgICAgIGlmICghdG9wTW9zdCB8fCByb3dWYWx1ZSA8IHRvcE1vc3RbMF0pIHRvcE1vc3QgPSBbcm93VmFsdWUsIGNvbHVtblZhbHVlXTtcbiAgICAgICAgfSkpO1xuICAgICAgICB0aGlzLmxlZnRNb3N0ID0gbGVmdE1vc3Q7XG4gICAgICAgIHRoaXMucmlnaHRNb3N0ID0gcmlnaHRNb3N0O1xuICAgICAgICB0aGlzLnRvcE1vc3QgPSB0b3BNb3N0O1xuICAgICAgICB0aGlzLmJvdHRvbU1vc3QgPSBib3R0b21Nb3N0O1xuICAgIH1cblxuICAgIHBvcHVsYXRlRmllbGQoZmllbGQpIHtcbiAgICAgICAgbGV0IGNvb3JkaW5hdGVBcnJheXMgPSBPYmplY3QudmFsdWVzKHRoaXMucG9zaXRpb24pO1xuXG4gICAgICAgIGNvb3JkaW5hdGVBcnJheXMuZm9yRWFjaChhcnJheSA9PiB7XG4gICAgICAgICAgICBhcnJheS5mb3JFYWNoKGNvb3JkaW5hdGUgPT4ge1xuICAgICAgICAgICAgICAgIGxldCBbcm93LCBjb2xdID0gW2Nvb3JkaW5hdGVbMF0sIGNvb3JkaW5hdGVbMV1dO1xuICAgICAgICAgICAgICAgIGlmICgoY29sID49IDAgJiYgY29sIDw9IDE5KSAmJiAocm93ID49IDAgJiYgcm93IDw9IDE5KSkgZmllbGRbcm93XVtjb2xdID0gdGhpcy5jb2xvckNvZGU7XG4gICAgICAgICAgICB9KVxuICAgICAgICB9KTtcblxuICAgICAgICB0aGlzLnJlbW92ZVNxdWFyZXMuZm9yRWFjaChwb3NpdGlvbkFycmF5ID0+IHtcbiAgICAgICAgICAgIGxldCBbcm93LCBjb2xdID0gW3Bvc2l0aW9uQXJyYXlbMF0sIHBvc2l0aW9uQXJyYXlbMV1dO1xuICAgICAgICAgICAgaWYgKChjb2wgPj0gMCAmJiBjb2wgPD0gMTkpICYmIChyb3cgPj0gMCAmJiByb3cgPD0gMTkpKSBmaWVsZFtyb3ddW2NvbF0gPSAwO1xuICAgICAgICB9KTtcblxuICAgIH1cblxuICAgIC8vIGNvbXBhcmVzIHR3byBhcnJheXMgb2YgY29vcmRpbmF0ZXMgYW5kIGNoZWNrIGlmIHRoZXkgaGF2ZSB0aGUgc2FtZSBjb250ZW50IGluIHRoZSBzYW1lIG9yZGVyXG4gICAgX3NxdWFyZXNBcmVFcXVhbChvbGRTcXVhcmUsIG5ld1NxdWFyZSkge1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IG9sZFNxdWFyZS5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgaWYgKG9sZFNxdWFyZVtpXSAhPT0gbmV3U3F1YXJlW2ldKSByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuXG4gICAgX2luY2x1ZGVzKHNxdWFyZSwgY29vcmRpbmF0ZUFycmF5cykge1xuICAgICAgICBsZXQgcmVzdWx0ID0gZmFsc2U7XG4gICAgICAgIGNvb3JkaW5hdGVBcnJheXMuZm9yRWFjaChhcnJheSA9PiB7XG4gICAgICAgICAgICBpZiAodGhpcy5fc3F1YXJlc0FyZUVxdWFsKHNxdWFyZSwgYXJyYXkpKSB7XG4gICAgICAgICAgICAgICAgcmVzdWx0ID0gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxuXG4gICAgZHJvcCgpIHtcbiAgICAgICAgbGV0IG9sZFBvc2l0aW9uID0ge1xuICAgICAgICAgICAgdG9wOiB0aGlzLnBvc2l0aW9uLnRvcC5tYXAoYXJyYXkgPT4gYXJyYXkuc2xpY2UoKSksXG4gICAgICAgICAgICBtaWRkbGU6IHRoaXMucG9zaXRpb24ubWlkZGxlLm1hcChhcnJheSA9PiBhcnJheS5zbGljZSgpKSxcbiAgICAgICAgICAgIGJvdHRvbTogdGhpcy5wb3NpdGlvbi5ib3R0b20ubWFwKGFycmF5ID0+IGFycmF5LnNsaWNlKCkpLFxuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5wb3NpdGlvbi50b3AgPSB0aGlzLnBvc2l0aW9uLnRvcC5tYXAoYXJyYXkgPT4gW2FycmF5WzBdICsgMSwgYXJyYXlbMV1dKTtcbiAgICAgICAgdGhpcy5wb3NpdGlvbi5taWRkbGUgPSB0aGlzLnBvc2l0aW9uLm1pZGRsZS5tYXAoYXJyYXkgPT4gW2FycmF5WzBdICsgMSwgYXJyYXlbMV1dKTtcbiAgICAgICAgdGhpcy5wb3NpdGlvbi5ib3R0b20gPSB0aGlzLnBvc2l0aW9uLmJvdHRvbS5tYXAoYXJyYXkgPT4gW2FycmF5WzBdICsgMSwgYXJyYXlbMV1dKTtcbiAgICAgICAgdGhpcy50dXJuaW5nUG9pbnQgPSBbdGhpcy50dXJuaW5nUG9pbnRbMF0gKyAxLCB0aGlzLnR1cm5pbmdQb2ludFsxXV07XG5cbiAgICAgICAgdGhpcy5zZXRSZW1vdmVTcXVhcmVzKG9sZFBvc2l0aW9uKTtcbiAgICB9XG5cbiAgICAvLyBmaW5kIGhpZ2hlc3QgcG9zc2libGUgZ3JvdW5kLXBvc2l0aW9uIGZvciBwaWVjZVxuICAgIGhhcmREcm9wKGZpZWxkKSB7XG4gICAgICAgIHRoaXMuY2xlYXJTZWxmRnJvbUJvYXJkKGZpZWxkKTtcbiAgICAgICAgbGV0IHN0b3BwZWQgPSBmYWxzZTtcbiAgICAgICAgd2hpbGUgKCFzdG9wcGVkKSB7XG4gICAgICAgICAgICBsZXQgaGFuZ2luZ1NxdWFyZXMgPSB0aGlzLmhhbmdpbmdTcXVhcmVzKHRoaXMucG9zaXRpb24pO1xuICAgICAgICAgICAgaGFuZ2luZ1NxdWFyZXMuZm9yRWFjaChjb29yZGluYXRlID0+IHtcbiAgICAgICAgICAgICAgICBsZXQgW3JvdywgY29sXSA9IFtjb29yZGluYXRlWzBdLCBjb29yZGluYXRlWzFdXTtcbiAgICAgICAgICAgICAgICBpZiAoKHJvdyArIDEgPT09IDIwIHx8IGZpZWxkW3JvdyArIDFdW2NvbF0pKSBzdG9wcGVkID0gdHJ1ZTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgaWYgKHN0b3BwZWQpIGJyZWFrO1xuICAgICAgICAgICAgdGhpcy5wb3NpdGlvbi50b3AgPSB0aGlzLnBvc2l0aW9uLnRvcC5tYXAoYXJyYXkgPT4gW2FycmF5WzBdICsgMSwgYXJyYXlbMV1dKTtcbiAgICAgICAgICAgIHRoaXMucG9zaXRpb24ubWlkZGxlID0gdGhpcy5wb3NpdGlvbi5taWRkbGUubWFwKGFycmF5ID0+IFthcnJheVswXSArIDEsIGFycmF5WzFdXSk7XG4gICAgICAgICAgICB0aGlzLnBvc2l0aW9uLmJvdHRvbSA9IHRoaXMucG9zaXRpb24uYm90dG9tLm1hcChhcnJheSA9PiBbYXJyYXlbMF0gKyAxLCBhcnJheVsxXV0pO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgY2xlYXJTZWxmRnJvbUJvYXJkKGZpZWxkKSB7XG4gICAgICAgIE9iamVjdC52YWx1ZXModGhpcy5wb3NpdGlvbikuZm9yRWFjaChjb29yZGluYXRlQXJyYXlzID0+IGNvb3JkaW5hdGVBcnJheXMuZm9yRWFjaChjb29yZGluYXRlID0+IHtcbiAgICAgICAgICAgIGxldCByb3cgPSBjb29yZGluYXRlWzBdO1xuICAgICAgICAgICAgbGV0IGNvbCA9IGNvb3JkaW5hdGVbMV07XG4gICAgICAgICAgICBpZiAocm93IDwgMjAgJiYgcm93ID49IDAgJiYgY29sID49IDAgJiYgY29sIDwgMTApIGZpZWxkW3Jvd11bY29sXSA9IDA7XG4gICAgICAgIH0pKTtcbiAgICB9XG5cbiAgICBtb3ZlKGRpcmVjdGlvbiwgZmllbGQpIHtcbiAgICAgICAgbGV0IHRTcGluID0gZmFsc2U7XG4gICAgICAgIGxldCBvbGRQb3NpdGlvbiA9IHtcbiAgICAgICAgICAgIHRvcDogdGhpcy5wb3NpdGlvbi50b3AubWFwKGFycmF5ID0+IGFycmF5LnNsaWNlKCkpLFxuICAgICAgICAgICAgbWlkZGxlOiB0aGlzLnBvc2l0aW9uLm1pZGRsZS5tYXAoYXJyYXkgPT4gYXJyYXkuc2xpY2UoKSksXG4gICAgICAgICAgICBib3R0b206IHRoaXMucG9zaXRpb24uYm90dG9tLm1hcChhcnJheSA9PiBhcnJheS5zbGljZSgpKSxcbiAgICAgICAgfVxuICAgICAgICB0aGlzLm9sZFR1cm5pbmdQb2ludCA9IHRoaXMudHVybmluZ1BvaW50LnNsaWNlKCk7XG4gICAgICAgIHN3aXRjaCAoZGlyZWN0aW9uKSB7XG4gICAgICAgICAgICBjYXNlIFwibGVmdFwiOlxuICAgICAgICAgICAgICAgIHRoaXMucG9zaXRpb24udG9wID0gdGhpcy5wb3NpdGlvbi50b3AubWFwKGFycmF5ID0+IFthcnJheVswXSwgYXJyYXlbMV0gLSAxXSk7XG4gICAgICAgICAgICAgICAgdGhpcy5wb3NpdGlvbi5taWRkbGUgPSB0aGlzLnBvc2l0aW9uLm1pZGRsZS5tYXAoYXJyYXkgPT4gW2FycmF5WzBdLCBhcnJheVsxXSAtIDFdKTtcbiAgICAgICAgICAgICAgICB0aGlzLnBvc2l0aW9uLmJvdHRvbSA9IHRoaXMucG9zaXRpb24uYm90dG9tLm1hcChhcnJheSA9PiBbYXJyYXlbMF0sIGFycmF5WzFdIC0gMV0pO1xuICAgICAgICAgICAgICAgIHRoaXMudHVybmluZ1BvaW50ID0gW3RoaXMudHVybmluZ1BvaW50WzBdLCB0aGlzLnR1cm5pbmdQb2ludFsxXSAtIDFdO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBcInR1cm5SaWdodFwiOlxuICAgICAgICAgICAgICAgIC8vIGRlZmVyIHRvIFwidHVyblwiIG1ldGhvZFxuICAgICAgICAgICAgICAgIC8vIHRTcGluIHdpbGwgZWl0aGVyIGJlIHRydXRoeSBvciBmYWxzeSwgdHJhY2tlZCBmb3Igc2VuZGluZyBtb3JlIGxpbmVzIGR1cmluZyBtdWx0aXBsYXllclxuICAgICAgICAgICAgICAgIHRTcGluID0gdGhpcy50dXJuUmlnaHQoZmllbGQsIG9sZFBvc2l0aW9uKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgXCJyaWdodFwiOlxuICAgICAgICAgICAgICAgIHRoaXMucG9zaXRpb24udG9wID0gdGhpcy5wb3NpdGlvbi50b3AubWFwKGFycmF5ID0+IFthcnJheVswXSwgYXJyYXlbMV0gKyAxXSk7XG4gICAgICAgICAgICAgICAgdGhpcy5wb3NpdGlvbi5taWRkbGUgPSB0aGlzLnBvc2l0aW9uLm1pZGRsZS5tYXAoYXJyYXkgPT4gW2FycmF5WzBdLCBhcnJheVsxXSArIDFdKTtcbiAgICAgICAgICAgICAgICB0aGlzLnBvc2l0aW9uLmJvdHRvbSA9IHRoaXMucG9zaXRpb24uYm90dG9tLm1hcChhcnJheSA9PiBbYXJyYXlbMF0sIGFycmF5WzFdICsgMV0pO1xuICAgICAgICAgICAgICAgIHRoaXMudHVybmluZ1BvaW50ID0gW3RoaXMudHVybmluZ1BvaW50WzBdLCB0aGlzLnR1cm5pbmdQb2ludFsxXSArIDFdO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBcImRvd25cIjpcbiAgICAgICAgICAgICAgICB0aGlzLnBvc2l0aW9uLnRvcCA9IHRoaXMucG9zaXRpb24udG9wLm1hcChhcnJheSA9PiBbYXJyYXlbMF0gKyAxLCBhcnJheVsxXV0pO1xuICAgICAgICAgICAgICAgIHRoaXMucG9zaXRpb24ubWlkZGxlID0gdGhpcy5wb3NpdGlvbi5taWRkbGUubWFwKGFycmF5ID0+IFthcnJheVswXSArIDEsIGFycmF5WzFdXSk7XG4gICAgICAgICAgICAgICAgdGhpcy5wb3NpdGlvbi5ib3R0b20gPSB0aGlzLnBvc2l0aW9uLmJvdHRvbS5tYXAoYXJyYXkgPT4gW2FycmF5WzBdICsgMSwgYXJyYXlbMV1dKTtcbiAgICAgICAgICAgICAgICB0aGlzLnR1cm5pbmdQb2ludCA9IFt0aGlzLnR1cm5pbmdQb2ludFswXSArIDEsIHRoaXMudHVybmluZ1BvaW50WzFdXTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgXCJ1cFwiOlxuICAgICAgICAgICAgICAgIHRoaXMucG9zaXRpb24udG9wID0gdGhpcy5wb3NpdGlvbi50b3AubWFwKGFycmF5ID0+IFthcnJheVswXSAtIDEsIGFycmF5WzFdXSk7XG4gICAgICAgICAgICAgICAgdGhpcy5wb3NpdGlvbi5taWRkbGUgPSB0aGlzLnBvc2l0aW9uLm1pZGRsZS5tYXAoYXJyYXkgPT4gW2FycmF5WzBdIC0gMSwgYXJyYXlbMV1dKTtcbiAgICAgICAgICAgICAgICB0aGlzLnBvc2l0aW9uLmJvdHRvbSA9IHRoaXMucG9zaXRpb24uYm90dG9tLm1hcChhcnJheSA9PiBbYXJyYXlbMF0gLSAxLCBhcnJheVsxXV0pO1xuICAgICAgICAgICAgICAgIHRoaXMudHVybmluZ1BvaW50ID0gW3RoaXMudHVybmluZ1BvaW50WzBdIC0gMSwgdGhpcy50dXJuaW5nUG9pbnRbMV1dO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBcInR1cm5MZWZ0XCI6XG4gICAgICAgICAgICAgICAgdGhpcy50dXJuTGVmdChmaWVsZCwgb2xkUG9zaXRpb24pO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuc2V0T3V0ZXJTcXVhcmVzKCk7XG4gICAgICAgIHRoaXMuc2V0UmVtb3ZlU3F1YXJlcyhvbGRQb3NpdGlvbiwgZmllbGQpO1xuICAgICAgICByZXR1cm4gdFNwaW47XG4gICAgfVxuXG4gICAgdHVyblJpZ2h0KGZpZWxkLCBvbGRQb3NpdGlvbikge1xuICAgICAgICAvLyBjbGVhciBmcm9tIGZpZWxkIGZpcnN0IHNvIHRoYXQgdGhlIHBpZWNlIGRvZXNuJ3Qgc2VlIGl0c2VsZiBhcyBhIGNvbmZsaWN0aW5nIHBpZWNlXG4gICAgICAgIHRoaXMuY2xlYXJTZWxmRnJvbUJvYXJkKGZpZWxkKTtcbiAgICAgICAgbGV0IHNxdWFyZXMgPSBbXTtcbiAgICAgICAgT2JqZWN0LnZhbHVlcyh0aGlzLnBvc2l0aW9uKS5mb3JFYWNoKGNvb3JkaW5hdGVzQXJyYXkgPT4gc3F1YXJlcy5wdXNoKC4uLmNvb3JkaW5hdGVzQXJyYXkpKTtcbiAgICAgICAgdGhpcy5wb3NpdGlvbi50b3AgPSBbXTtcbiAgICAgICAgdGhpcy5wb3NpdGlvbi5taWRkbGUgPSBbXTtcbiAgICAgICAgdGhpcy5wb3NpdGlvbi5ib3R0b20gPSBbXTtcbiAgICAgICAgc3F1YXJlcy5mb3JFYWNoKHNxdWFyZSA9PiB7XG4gICAgICAgICAgICBsZXQgY29sdW1uID0gc3F1YXJlWzFdO1xuICAgICAgICAgICAgbGV0IGhlaWdodERpZmZlcmVuY2UgPSB0aGlzLnR1cm5pbmdQb2ludFswXSAtIHNxdWFyZVswXTtcbiAgICAgICAgICAgIGxldCB3aWR0aERpZmZlcmVuY2UgPSB0aGlzLnR1cm5pbmdQb2ludFsxXSAtIHNxdWFyZVsxXTtcbiAgICAgICAgICAgIGxldCBuZXdDb2wgPSB0aGlzLnR1cm5pbmdQb2ludFsxXSArIGhlaWdodERpZmZlcmVuY2U7XG4gICAgICAgICAgICBsZXQgbmV3Um93ID0gdGhpcy50dXJuaW5nUG9pbnRbMF0gKyAod2lkdGhEaWZmZXJlbmNlICogLTEpO1xuICAgICAgICAgICAgc3dpdGNoIChjb2x1bW4pIHtcbiAgICAgICAgICAgICAgICBjYXNlIGNvbHVtbiA9IHRoaXMucmlnaHRNb3N0WzFdOlxuICAgICAgICAgICAgICAgICAgICB0aGlzLnBvc2l0aW9uLmJvdHRvbS5wdXNoKFtuZXdSb3csIG5ld0NvbF0pO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlIGNvbHVtbiA9IHRoaXMubGVmdE1vc3RbMV06XG4gICAgICAgICAgICAgICAgICAgIHRoaXMucG9zaXRpb24udG9wLnB1c2goW25ld1JvdywgbmV3Q29sXSk7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgICAgIHRoaXMucG9zaXRpb24ubWlkZGxlLnB1c2goW25ld1JvdywgbmV3Q29sXSk7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5zZXRSZW1vdmVTcXVhcmVzKG9sZFBvc2l0aW9uKTtcblxuICAgICAgICAvLyBmaW5kIG91dGVyLW1vc3Qgc3F1YXJlcyB0byBzZWUgaWYgcGllY2UgaXMgb2JzdHJ1Y3RlZFxuICAgICAgICAvLyBpZiBzbywgcHVzaCBwaWVjZSBiYWNrIGludG8gZmllbGRcbiAgICAgICAgdGhpcy5zZXRPdXRlclNxdWFyZXMoKTtcblxuICAgICAgICAvLyByZXNldCByb3RhdGlvbiBzdGF0ZSwgd2hpY2ggaXMgdHJhY2tlZCBmb3IgaW1wbGVtZW50aW5nIHN1cGVyIHJvdGF0aW9uIHN5c3RlbVxuICAgICAgICB0aGlzLnJvdGF0aW9uU3RhdGUgPSB0aGlzLnJvdGF0aW9uU3RhdGUgPT09IDMgPyAwIDogdGhpcy5yb3RhdGlvblN0YXRlICsgMTtcblxuICAgICAgICBsZXQgbmV3U3F1YXJlcyA9IFsuLi50aGlzLnBvc2l0aW9uLnRvcCwgLi4udGhpcy5wb3NpdGlvbi5taWRkbGUsIC4uLnRoaXMucG9zaXRpb24uYm90dG9tXTtcbiAgICAgICAgZm9yIChsZXQgaSBpbiBuZXdTcXVhcmVzKSB7XG4gICAgICAgICAgICBsZXQgW3JvdywgY29sXSA9IFtuZXdTcXVhcmVzW2ldWzBdLCBuZXdTcXVhcmVzW2ldWzFdXTtcbiAgICAgICAgICAgIGlmIChmaWVsZFtyb3ddID09PSB1bmRlZmluZWQgfHwgZmllbGRbcm93XVtjb2xdID09PSB1bmRlZmluZWQgfHwgZmllbGRbcm93XVtjb2xdKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMud2FsbEtpY2soZmllbGQsIFwidHVyblJpZ2h0XCIsIG9sZFBvc2l0aW9uKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIHR1cm5MZWZ0KGZpZWxkLCBvbGRQb3NpdGlvbikge1xuICAgICAgICB0aGlzLmNsZWFyU2VsZkZyb21Cb2FyZChmaWVsZCk7XG4gICAgICAgIGxldCBzcXVhcmVzID0gW107XG4gICAgICAgIE9iamVjdC52YWx1ZXModGhpcy5wb3NpdGlvbikuZm9yRWFjaChjb29yZGluYXRlc0FycmF5ID0+IHNxdWFyZXMucHVzaCguLi5jb29yZGluYXRlc0FycmF5KSk7XG4gICAgICAgIHRoaXMucG9zaXRpb24udG9wID0gW107XG4gICAgICAgIHRoaXMucG9zaXRpb24ubWlkZGxlID0gW107XG4gICAgICAgIHRoaXMucG9zaXRpb24uYm90dG9tID0gW107XG4gICAgICAgIHNxdWFyZXMuZm9yRWFjaChzcXVhcmUgPT4ge1xuICAgICAgICAgICAgbGV0IGNvbHVtbiA9IHNxdWFyZVsxXTtcbiAgICAgICAgICAgIGxldCBoZWlnaHREaWZmZXJlbmNlID0gdGhpcy50dXJuaW5nUG9pbnRbMF0gLSBzcXVhcmVbMF07XG4gICAgICAgICAgICBsZXQgd2lkdGhEaWZmZXJlbmNlID0gdGhpcy50dXJuaW5nUG9pbnRbMV0gLSBzcXVhcmVbMV07XG4gICAgICAgICAgICBsZXQgbmV3Q29sID0gdGhpcy50dXJuaW5nUG9pbnRbMV0gLSBoZWlnaHREaWZmZXJlbmNlO1xuICAgICAgICAgICAgbGV0IG5ld1JvdyA9IHRoaXMudHVybmluZ1BvaW50WzBdIC0gKHdpZHRoRGlmZmVyZW5jZSAqIC0xKTtcbiAgICAgICAgICAgIHN3aXRjaCAoY29sdW1uKSB7XG4gICAgICAgICAgICAgICAgY2FzZSBjb2x1bW4gPSB0aGlzLnJpZ2h0TW9zdFsxXTpcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wb3NpdGlvbi50b3AucHVzaChbbmV3Um93LCBuZXdDb2xdKTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSBjb2x1bW4gPSB0aGlzLmxlZnRNb3N0WzFdOlxuICAgICAgICAgICAgICAgICAgICB0aGlzLnBvc2l0aW9uLmJvdHRvbS5wdXNoKFtuZXdSb3csIG5ld0NvbF0pO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgICAgICB0aGlzLnBvc2l0aW9uLm1pZGRsZS5wdXNoKFtuZXdSb3csIG5ld0NvbF0pO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICAgICAgdGhpcy5zZXRSZW1vdmVTcXVhcmVzKG9sZFBvc2l0aW9uKTtcblxuICAgICAgICAvLyBmaW5kIGxlZnQgYW5kIHJpZ2h0IG1vc3Qgc3F1YXJlcyB0byBzZWUgaWYgcGllY2UgdGhyb3VnaCB3YWxsXG4gICAgICAgIC8vIGlmIHRocm91Z2ggd2FsbCwgcHVzaCBwaWVjZSBiYWNrIGludG8gZmllbGRcbiAgICAgICAgdGhpcy5zZXRPdXRlclNxdWFyZXMoKTtcblxuICAgICAgICAvLyByZXNldCByb3RhdGlvbiBzdGF0ZSwgd2hpY2ggaXMgdHJhY2tlZCBmb3IgaW1wbGVtZW50aW5nIHN1cGVyIHJvdGF0aW9uIHN5c3RlbVxuICAgICAgICB0aGlzLnJvdGF0aW9uU3RhdGUgPSB0aGlzLnJvdGF0aW9uU3RhdGUgPT09IDAgPyAzIDogdGhpcy5yb3RhdGlvblN0YXRlIC0gMTtcblxuICAgICAgICBsZXQgbmV3U3F1YXJlcyA9IFsuLi50aGlzLnBvc2l0aW9uLnRvcCwgLi4udGhpcy5wb3NpdGlvbi5taWRkbGUsIC4uLnRoaXMucG9zaXRpb24uYm90dG9tXTtcbiAgICAgICAgZm9yIChsZXQgaSBpbiBuZXdTcXVhcmVzKSB7XG4gICAgICAgICAgICBsZXQgW3JvdywgY29sXSA9IFtuZXdTcXVhcmVzW2ldWzBdLCBuZXdTcXVhcmVzW2ldWzFdXTtcbiAgICAgICAgICAgIGlmIChmaWVsZFtyb3ddID09PSB1bmRlZmluZWQgfHwgZmllbGRbcm93XVtjb2xdID09PSB1bmRlZmluZWQgfHwgZmllbGRbcm93XVtjb2xdKSB7XG4gICAgICAgICAgICAgICAgdGhpcy53YWxsS2ljayhmaWVsZCwgXCJ0dXJuTGVmdFwiLCBvbGRQb3NpdGlvbik7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgIH1cblxuICAgIC8vIGNvbXBhcmUgb2xkIHBvc2l0aW9uIG9mIHBpZWNlIHdpdGggbmV3IHBvc2l0aW9uIFxuICAgIHNldFJlbW92ZVNxdWFyZXMob2xkUG9zaXRpb24sIGZpZWxkKSB7XG4gICAgICAgIGxldCBvbGRTcXVhcmVzID0gW107XG4gICAgICAgIGxldCBuZXdTcXVhcmVzID0gW107XG4gICAgICAgIE9iamVjdC52YWx1ZXMob2xkUG9zaXRpb24pLmZvckVhY2goY29vcmRpbmF0ZXNBcnJheSA9PiBvbGRTcXVhcmVzLnB1c2goLi4uY29vcmRpbmF0ZXNBcnJheSkpO1xuICAgICAgICBPYmplY3QudmFsdWVzKHRoaXMucG9zaXRpb24pLmZvckVhY2goY29vcmRpbmF0ZXNBcnJheSA9PiBuZXdTcXVhcmVzLnB1c2goLi4uY29vcmRpbmF0ZXNBcnJheSkpO1xuICAgICAgICAvLyBrZWVwIHRyYWNrIG9mIHNxdWFyZXMgdGhhdCB0aGUgcG9zaXRpb25zIGRvIG5vdCBoYXZlIGluIGNvbW1vbiAoc3F1YXJlcyB0byByZW1vdmUgY29sb3IgZnJvbSlcbiAgICAgICAgdGhpcy5yZW1vdmVTcXVhcmVzID0gb2xkU3F1YXJlcy5maWx0ZXIob2xkU3F1YXJlID0+IHtcbiAgICAgICAgICAgIGlmICghZmllbGQpIHtcbiAgICAgICAgICAgICAgICBpZiAoIXRoaXMuX2luY2x1ZGVzKG9sZFNxdWFyZSwgbmV3U3F1YXJlcykpIHJldHVybiBvbGRTcXVhcmU7XG4gICAgICAgICAgICAvLyBpZiBmaWVsZCBhcmd1bWVudCBpcyBwYXNzZWQsIGNoZWNrIHRoZSBmaWVsZCB0byBtYWtlIHN1cmUgdG8gbm90IGNsZWFyIHNxdWFyZXMgb2Ygb3RoZXIgcGllY2VzXG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGlmICghdGhpcy5faW5jbHVkZXMob2xkU3F1YXJlLCBuZXdTcXVhcmVzKSAmJiAhZmllbGRbb2xkU3F1YXJlWzBdXVtvbGRTcXVhcmVbMV1dKSByZXR1cm4gb2xkU3F1YXJlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgXG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGhhbmdpbmdTcXVhcmVzKHBvc2l0aW9uKSB7XG4gICAgICAgIGxldCBzcXVhcmVzID0gW107XG4gICAgICAgIGxldCBoYW5naW5nU3F1YXJlcyA9IFtdO1xuICAgICAgICBPYmplY3QudmFsdWVzKHBvc2l0aW9uKS5mb3JFYWNoKGNvb3JkaW5hdGVBcnJheSA9PiBzcXVhcmVzLnB1c2goLi4uY29vcmRpbmF0ZUFycmF5KSlcbiAgICAgICAgc3F1YXJlcy5mb3JFYWNoKHNxdWFyZSA9PiB7XG4gICAgICAgICAgICBsZXQgYmVsb3dTcXVhcmUgPSBbc3F1YXJlWzBdICsgMSwgc3F1YXJlWzFdXTtcbiAgICAgICAgICAgIGlmICghdGhpcy5faW5jbHVkZXMoYmVsb3dTcXVhcmUsIHNxdWFyZXMpKSBoYW5naW5nU3F1YXJlcy5wdXNoKHNxdWFyZSk7XG4gICAgICAgIH0pXG4gICAgICAgIHJldHVybiBoYW5naW5nU3F1YXJlcztcbiAgICB9XG5cbiAgICBzaWRlU3F1YXJlcygpIHtcbiAgICAgICAgbGV0IHNxdWFyZXMgPSBbXTtcbiAgICAgICAgbGV0IHNpZGVTcXVhcmVzID0ge1xuICAgICAgICAgICAgbGVmdDogW10sXG4gICAgICAgICAgICByaWdodDogW11cbiAgICAgICAgfTtcbiAgICAgICAgT2JqZWN0LnZhbHVlcyh0aGlzLnBvc2l0aW9uKS5mb3JFYWNoKGNvb3JkaW5hdGVBcnJheSA9PiBzcXVhcmVzLnB1c2goLi4uY29vcmRpbmF0ZUFycmF5KSk7XG4gICAgICAgIHNxdWFyZXMuZm9yRWFjaChzcXVhcmUgPT4ge1xuICAgICAgICAgICAgbGV0IGFkamFjZW50TGVmdCA9IFtzcXVhcmVbMF0sIHNxdWFyZVsxXSAtIDFdO1xuICAgICAgICAgICAgbGV0IGFkamFjZW50UmlnaHQgPSBbc3F1YXJlWzBdLCBzcXVhcmVbMV0gKyAxXTtcbiAgICAgICAgICAgIGlmICghdGhpcy5faW5jbHVkZXMoYWRqYWNlbnRMZWZ0LCBzcXVhcmVzKSkgc2lkZVNxdWFyZXMubGVmdC5wdXNoKHNxdWFyZSk7XG4gICAgICAgICAgICBpZiAoIXRoaXMuX2luY2x1ZGVzKGFkamFjZW50UmlnaHQsIHNxdWFyZXMpKSBzaWRlU3F1YXJlcy5yaWdodC5wdXNoKHNxdWFyZSk7XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gc2lkZVNxdWFyZXM7XG4gICAgfVxuXG4gICAgaXNGYWxsaW5nKGZpZWxkKSB7XG4gICAgICAgIGxldCByZXN1bHQgPSB0cnVlO1xuICAgICAgICB0aGlzLmhhbmdpbmdTcXVhcmVzKHRoaXMucG9zaXRpb24pLmZvckVhY2goY29vcmRpbmF0ZVBhaXIgPT4ge1xuICAgICAgICAgICAgbGV0IFtyb3csIGNvbF0gPSBbY29vcmRpbmF0ZVBhaXJbMF0sIGNvb3JkaW5hdGVQYWlyWzFdXTtcbiAgICAgICAgICAgIC8vIGlmIHRoZSBwaWVjZSdzIGN1cnJlbnQgcG9zaXRpb24gaXMgYWJvdmUgdGhlIGZpZWxkIGZsb29yIG9yIGEgYW5vdGhlciBwaWVjZSAobm90IGluY2x1ZGUgZ2hvc3QgcGllY2UpXG4gICAgICAgICAgICBpZiAoIWZpZWxkW3JvdyArIDFdIHx8IChmaWVsZFtyb3cgKyAxXVtjb2xdICYmIGZpZWxkW3JvdyArIDFdW2NvbF0gIT09IFwieFwiKSkge1xuICAgICAgICAgICAgICAgIHJlc3VsdCA9IGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG5cbiAgICByaWdodFNpZGVCbG9ja2VkKGZpZWxkKSB7XG4gICAgICAgIC8vIGlmICh0aGlzLnBvc2l0aW9uLnRvcFswXVswXSA8IDApIHJldHVybiBmYWxzZTtcbiAgICAgICAgbGV0IHJlc3VsdCA9IGZhbHNlO1xuICAgICAgICB0aGlzLnNpZGVTcXVhcmVzKCkucmlnaHQuZm9yRWFjaChjb29yZGluYXRlUGFpciA9PiB7XG4gICAgICAgICAgICBsZXQgW3JvdywgY29sXSA9IFtjb29yZGluYXRlUGFpclswXSwgY29vcmRpbmF0ZVBhaXJbMV1dO1xuICAgICAgICAgICAgLy8gaWYgYW55IHJpZ2h0IGZhY2luZyBzcXVhcmUgaGl0cyB0aGUgd2FsbCBvciBhbm90aGVyIHBpZWNlLCBub3QgaW5jbHVkaW5nIHRoZSBnaG9zdCBwaWVjZVxuICAgICAgICAgICAgaWYgKGNvbCA9PT0gOSB8fCAoZmllbGRbcm93XSAmJiBmaWVsZFtyb3ddW2NvbCArIDFdICYmIGZpZWxkW3JvdyArIDFdW2NvbF0gIT09IFwieFwiKSkge1xuICAgICAgICAgICAgICAgIHJlc3VsdCA9IHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cblxuICAgIGxlZnRTaWRlQmxvY2tlZChmaWVsZCkge1xuICAgICAgICAvLyBpZiAodGhpcy5wb3NpdGlvbi50b3BbMF1bMF0gPCAwKSByZXR1cm4gZmFsc2U7XG4gICAgICAgIGxldCByZXN1bHQgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5zaWRlU3F1YXJlcygpLmxlZnQuZm9yRWFjaChjb29yZGluYXRlUGFpciA9PiB7XG4gICAgICAgICAgICBsZXQgW3JvdywgY29sXSA9IFtjb29yZGluYXRlUGFpclswXSwgY29vcmRpbmF0ZVBhaXJbMV1dO1xuICAgICAgICAgICAgLy8gaWYgYW55IGxlZnQgZmFjaW5nIHNxdWFyZSBoaXRzIHRoZSB3YWxsIG9yIGFub3RoZXIgcGllY2UsIG5vdCBpbmNsdWRpbmcgdGhlIGdob3N0IHBpZWNlXG4gICAgICAgICAgICBpZiAoY29sID09PSAwIHx8IChmaWVsZFtyb3ddICYmIGZpZWxkW3Jvd11bY29sIC0gMV0gJiYgZmllbGRbcm93XVtjb2wgLSAxXSAhPT0gXCJ4XCIpKSB7XG4gICAgICAgICAgICAgICAgcmVzdWx0ID0gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxuXG4gICAgd2FsbEtpY2soZmllbGQsIGFjdGlvbiwgb2xkUG9zaXRpb24pIHtcbiAgICAgICAgbGV0IHZhbGlkU3BvdCwgc3RhcnRpbmdPZmZzZXQ7XG4gICAgICAgIGlmIChhY3Rpb24gPT09IFwidHVyblJpZ2h0XCIpIHtcbiAgICAgICAgICAgIHN0YXJ0aW5nT2Zmc2V0ID0gdGhpcy5yb3RhdGlvblN0YXRlID09PSAwID8gdGhpcy5vZmZzZXRHdWlkZVszXSA6IHRoaXMub2Zmc2V0R3VpZGVbdGhpcy5yb3RhdGlvblN0YXRlIC0gMV07XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBzdGFydGluZ09mZnNldCA9IHRoaXMucm90YXRpb25TdGF0ZSA9PT0gMyA/IHRoaXMub2Zmc2V0R3VpZGVbMF0gOiB0aGlzLm9mZnNldEd1aWRlW3RoaXMucm90YXRpb25TdGF0ZSArIDFdO1xuICAgICAgICB9XG4gICAgICAgIGxldCBuZXh0T2Zmc2V0ID0gdGhpcy5vZmZzZXRHdWlkZVt0aGlzLnJvdGF0aW9uU3RhdGVdO1xuICAgICAgICAvLyBmb3IgKGxldCBpID0gMDsgaSA8IDU7IGkrKykge1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IDY7IGkrKykge1xuICAgICAgICAgICAgLy8gaWYgaSA9PT0gNSwgdGhlcmUgYXJlIG5vIG1vcmUgcG90ZW50aWFsIHBvc2l0aW9ucyB0byBjaGVjayBhbmQgdGhlIHBpZWNlJ3MgcG9zaXRpb24gaXMgdGhlIGluaXRpYWwgcG9zaXRpb24gZnJvbSBiZWZvcmUgdHVybmluZ1xuICAgICAgICAgICAgaWYgKGkgPT09IDUpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnBvc2l0aW9uID0gb2xkUG9zaXRpb247XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdmFsaWRTcG90ID0gdHJ1ZTtcbiAgICAgICAgICAgIGxldCBiYXNlUG9zaXRpb24gPSB7XG4gICAgICAgICAgICAgICAgdG9wOiB0aGlzLnBvc2l0aW9uLnRvcC5tYXAoYXJyYXkgPT4gYXJyYXkuc2xpY2UoKSksXG4gICAgICAgICAgICAgICAgbWlkZGxlOiB0aGlzLnBvc2l0aW9uLm1pZGRsZS5tYXAoYXJyYXkgPT4gYXJyYXkuc2xpY2UoKSksXG4gICAgICAgICAgICAgICAgYm90dG9tOiB0aGlzLnBvc2l0aW9uLmJvdHRvbS5tYXAoYXJyYXkgPT4gYXJyYXkuc2xpY2UoKSksXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBsZXQgYmFzZVR1cm5pbmdQb2ludCA9IHRoaXMudHVybmluZ1BvaW50LnNsaWNlKCk7XG5cbiAgICAgICAgICAgIGxldCBzdGFydGluZ1RyYW5zbGF0aW9uID0gc3RhcnRpbmdPZmZzZXRbaV07XG4gICAgICAgICAgICBsZXQgcG90ZW50aWFsVHJhbnNsYXRpb24gPSBuZXh0T2Zmc2V0W2ldO1xuICAgICAgICAgICAgbGV0IHJvd1NoaWZ0ID0gc3RhcnRpbmdUcmFuc2xhdGlvblswXSAtIHBvdGVudGlhbFRyYW5zbGF0aW9uWzBdO1xuICAgICAgICAgICAgbGV0IGNvbFNoaWZ0ID0gc3RhcnRpbmdUcmFuc2xhdGlvblsxXSAtIHBvdGVudGlhbFRyYW5zbGF0aW9uWzFdO1xuICAgICAgICAgICAgbGV0IHRyYW5zbGF0ZVZlcnRpY2FsID0gcm93U2hpZnQgPiAwID8gKCkgPT4gdGhpcy5tb3ZlKFwidXBcIikgOiAoKSA9PiB0aGlzLm1vdmUoXCJkb3duXCIpO1xuICAgICAgICAgICAgbGV0IHRyYW5zbGF0ZUhvcml6b250YWwgPSBjb2xTaGlmdCA+IDAgPyAoKSA9PiB0aGlzLm1vdmUoXCJyaWdodFwiKSA6ICgpID0+IHRoaXMubW92ZShcImxlZnRcIik7XG4gICAgICAgICAgICBmb3IgKGxldCBudW1UaW1lc1Jvd1NoaWZ0ZWQgPSAwOyBudW1UaW1lc1Jvd1NoaWZ0ZWQgPCBNYXRoLmFicyhyb3dTaGlmdCk7IG51bVRpbWVzUm93U2hpZnRlZCsrKSB7XG4gICAgICAgICAgICAgICAgdHJhbnNsYXRlVmVydGljYWwoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGZvciAobGV0IG51bVRpbWVzQ29sU2hpZnRlZCA9IDA7IG51bVRpbWVzQ29sU2hpZnRlZCA8IE1hdGguYWJzKGNvbFNoaWZ0KTsgbnVtVGltZXNDb2xTaGlmdGVkKyspIHtcbiAgICAgICAgICAgICAgICB0cmFuc2xhdGVIb3Jpem9udGFsKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBsZXQgbmV3UG9zaXRpb24gPSBbLi4udGhpcy5wb3NpdGlvbi50b3AsIC4uLnRoaXMucG9zaXRpb24ubWlkZGxlLCAuLi50aGlzLnBvc2l0aW9uLmJvdHRvbV07XG4gICAgICAgICAgICBmb3IgKGxldCBpIGluIG5ld1Bvc2l0aW9uKSB7XG4gICAgICAgICAgICAgICAgbGV0IFtyb3csIGNvbF0gPSBbbmV3UG9zaXRpb25baV1bMF0sIG5ld1Bvc2l0aW9uW2ldWzFdXTtcbiAgICAgICAgICAgICAgICBpZiAoZmllbGRbcm93XSA9PT0gdW5kZWZpbmVkIHx8IGZpZWxkW3Jvd11bY29sXSA9PT0gdW5kZWZpbmVkIHx8IGZpZWxkW3Jvd11bY29sXSA+IDApIHtcbiAgICAgICAgICAgICAgICAgICAgdmFsaWRTcG90ID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMucG9zaXRpb24gPSBiYXNlUG9zaXRpb247XG4gICAgICAgICAgICAgICAgICAgIHRoaXMudHVybmluZ1BvaW50ID0gYmFzZVR1cm5pbmdQb2ludDtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gYWxsb3dzIHRTcGluIHZhcmlhYmxlIHRvIGJlIHRydXRoeVxuICAgICAgICAgICAgaWYgKHZhbGlkU3BvdCkge1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLm5hbWUgPT09IFwiVFBpZWNlXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn0iLCJpbXBvcnQgUGllY2UgZnJvbSAnLi9waWVjZSc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNQaWVjZSBleHRlbmRzIFBpZWNlIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgdGhpcy5uYW1lID0gXCJTUGllY2VcIjtcbiAgICAgICAgdGhpcy5wb3NpdGlvbiA9IHtcbiAgICAgICAgICAgIHRvcDogW1swLCA0XSwgWzAsIDVdXSxcbiAgICAgICAgICAgIG1pZGRsZTogW10sXG4gICAgICAgICAgICBib3R0b206IFtbMSwgM10sIFsxLCA0XV1cbiAgICAgICAgfTtcbiAgICAgICAgdGhpcy5jb2xvckNvZGUgPSA0O1xuXG4gICAgICAgIHRoaXMudHVybmluZ1BvaW50ID0gWzEsIDRdO1xuXG4gICAgICAgIHRoaXMuZGlzcGxheVNxdWFyZXMgPSBbWzMsIDFdLCBbMiwgMV0sIFsyLCAyXSwgWzEsIDJdXTtcblxuICAgICAgICB0aGlzLnJlbW92ZVNxdWFyZXMgPSBbXTtcbiAgICB9XG59IiwiaW1wb3J0IFBpZWNlIGZyb20gJy4vcGllY2UnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUUGllY2UgZXh0ZW5kcyBQaWVjZSB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIHRoaXMubmFtZSA9IFwiVFBpZWNlXCI7XG4gICAgICAgIHRoaXMucG9zaXRpb24gPSB7XG4gICAgICAgICAgICB0b3A6IFtbMCwgNF1dLFxuICAgICAgICAgICAgbWlkZGxlOiBbXSxcbiAgICAgICAgICAgIGJvdHRvbTogW1sxLCAzXSwgWzEsIDRdLCBbMSwgNV1dLFxuICAgICAgICB9XG4gICAgICAgIHRoaXMuY29sb3JDb2RlID0gMztcblxuICAgICAgICB0aGlzLnR1cm5pbmdQb2ludCA9IFsxLCA0XTtcblxuICAgICAgICB0aGlzLmRpc3BsYXlTcXVhcmVzID0gW1sxLCAyXSwgWzIsIDJdLCBbMywgMl0sIFsyLCAxXV07XG5cbiAgICAgICAgdGhpcy5yZW1vdmVTcXVhcmVzID0gW107XG4gICAgfVxufSIsImltcG9ydCBQaWVjZSBmcm9tICcuL3BpZWNlJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgWlBpZWNlIGV4dGVuZHMgUGllY2Uge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICB0aGlzLm5hbWUgPSBcIlpQaWVjZVwiO1xuICAgICAgICB0aGlzLnBvc2l0aW9uID0ge1xuICAgICAgICAgICAgdG9wOiBbWzAsIDNdLCBbMCwgNF1dLFxuICAgICAgICAgICAgbWlkZGxlOiBbXSxcbiAgICAgICAgICAgIGJvdHRvbTogW1sxLCA0XSwgWzEsIDVdXVxuICAgICAgICB9O1xuICAgICAgICB0aGlzLmNvbG9yQ29kZSA9IDU7XG5cbiAgICAgICAgdGhpcy50dXJuaW5nUG9pbnQgPSBbMSwgNF07XG5cbiAgICAgICAgdGhpcy5kaXNwbGF5U3F1YXJlcyA9IFtbMSwgMV0sIFsyLCAxXSwgWzIsIDJdLCBbMywgMl1dO1xuXG4gICAgICAgIHRoaXMucmVtb3ZlU3F1YXJlcyA9IFtdO1xuICAgIH1cbn0iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBTY29yZUtlZXBlciB7XG4gICAgY3JlYXRlU2NvcmVLZWVwZXIoKSB7XG4gICAgICAgIGxldCBzY29yZUtlZXBlckRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBzY29yZUtlZXBlckRpdi5jbGFzc0xpc3QuYWRkKCdzY29yZWtlZXBlcicpO1xuICAgICAgICBzY29yZUtlZXBlckRpdi5pbm5lckhUTUwgPSAnMCc7XG4gICAgICAgIHJldHVybiBzY29yZUtlZXBlckRpdjtcbiAgICB9XG5cbiAgICBhZGRUb1Njb3JlKGxpbmVzQ2xlYXJlZCkge1xuICAgICAgICBsZXQgc2NvcmVLZWVwZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2NvcmVrZWVwZXInKTtcbiAgICAgICAgbGV0IHNjb3JlID0gTnVtYmVyKHNjb3JlS2VlcGVyLmlubmVySFRNTCk7XG4gICAgICAgIGlmIChsaW5lc0NsZWFyZWQgPT09IDEpIHtcbiAgICAgICAgICAgIHNjb3JlICs9IDEwMDsgXG4gICAgICAgIH0gZWxzZSBpZiAobGluZXNDbGVhcmVkID09PSAyKSB7XG4gICAgICAgICAgICBzY29yZSArPSAyMjU7XG4gICAgICAgIH0gZWxzZSBpZiAobGluZXNDbGVhcmVkID09PSAzKSB7XG4gICAgICAgICAgICBzY29yZSArPSAzNTA7XG4gICAgICAgIH0gZWxzZSBpZiAobGluZXNDbGVhcmVkID09PSA0KSB7XG4gICAgICAgICAgICBzY29yZSArPSA1MDA7XG4gICAgICAgIH1cbiAgICAgICAgc2NvcmVLZWVwZXIuaW5uZXJIVE1MID0gc2NvcmU7XG4gICAgfVxuXG4gICAgZ2V0U2NvcmUoKSB7XG4gICAgICAgIGxldCBzY29yZUtlZXBlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zY29yZWtlZXBlcicpO1xuICAgICAgICByZXR1cm4gc2NvcmVLZWVwZXIuaW5uZXJIVE1MO1xuICAgIH1cbn0iXSwic291cmNlUm9vdCI6IiJ9