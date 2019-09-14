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
    key: "generateField",
    value: function generateField() {
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
      return field.generateField();
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
        row.forEach(function (__, colIdx) {
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

      // let coordinateArrays = Object.values(this.position);
      var coordinateArrays = [].concat(_toConsumableArray(this.position.top), _toConsumableArray(this.position.middle), _toConsumableArray(this.position.bottom));
      coordinateArrays.forEach(function (array) {
        var _ref = [array[0], array[1]],
            row = _ref[0],
            col = _ref[1];
        if (col >= 0 && col <= 19 && row >= 0 && row <= 19) field[row][col] = _this.colorCode;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2ZpZWxkL2ZpZWxkLmpzIiwid2VicGFjazovLy8uL3NyYy9maWVsZC9ob2xkYm94LmpzIiwid2VicGFjazovLy8uL3NyYy9maWVsZC9uZXh0Qm94LmpzIiwid2VicGFjazovLy8uL3NyYy9maWVsZC9xdWV1ZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvZ2FtZS9nYW1lLmpzIiwid2VicGFjazovLy8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvbWVudS9tZW51LmpzIiwid2VicGFjazovLy8uL3NyYy9tb2RhbC9tb2RhbC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvbW9kYWwvbXVsdGlwbGF5ZXJDb250ZW50LmpzIiwid2VicGFjazovLy8uL3NyYy9tb2RhbC9zaW5nbGVQbGF5ZXJDb250ZW50LmpzIiwid2VicGFjazovLy8uL3NyYy9tdWx0aXBsYXllci9tdWx0aXBsYXllci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcGllY2VzL2lQaWVjZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcGllY2VzL2pQaWVjZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcGllY2VzL2xQaWVjZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcGllY2VzL29QaWVjZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcGllY2VzL3BpZWNlLmpzIiwid2VicGFjazovLy8uL3NyYy9waWVjZXMvc1BpZWNlLmpzIiwid2VicGFjazovLy8uL3NyYy9waWVjZXMvdFBpZWNlLmpzIiwid2VicGFjazovLy8uL3NyYy9waWVjZXMvelBpZWNlLmpzIiwid2VicGFjazovLy8uL3NyYy9zY29yZWtlZXBlci9zY29yZWtlZXBlci5qcyJdLCJuYW1lcyI6WyJGaWVsZCIsImZpZWxkTnVtIiwiZmllbGQiLCJpIiwicm93IiwicHVzaCIsImNvbHVtbiIsImRvY3VtZW50IiwiY3JlYXRlRWxlbWVudCIsImNsYXNzTGlzdCIsImFkZCIsImFwcGVuZCIsImFwcGVuZENoaWxkIiwiX2NyZWF0ZUNvbHVtbiIsImNvbnRhaW5lciIsInF1ZXVlIiwiUXVldWUiLCJuZXh0Qm94IiwiTmV4dEJveCIsImhvbGRCb3giLCJIb2xkQm94IiwiX2NyZWF0ZUZpZWxkIiwiY3JlYXRlUXVldWUiLCJjcmVhdGVOZXh0Qm94ZXMiLCJwcmVwZW5kIiwiY3JlYXRlQm94IiwiYm94V3JhcHBlciIsImJveCIsImhlYWRpbmciLCJpbm5lckhUTUwiLCJfY3JlYXRlQm94Q29sdW1uIiwiX2NyZWF0ZU5leHRCb3hDb2x1bW4iLCJib3hlcyIsIl9jcmVhdGVOZXh0Qm94IiwicXVldWVNZXRlciIsImFkanVzdFF1ZXVlSGVpZ2h0IiwicGVyY2VudGFnZSIsInF1ZXJ5U2VsZWN0b3IiLCJzdHlsZSIsImhlaWdodCIsIkdhbWUiLCJvcHRpb25zIiwic2V0RmllbGQiLCJjb2xvcnMiLCJnYW1lTnVtIiwiY3VycmVudEJhZyIsInNodWZmbGVCYWciLCJnZW5lcmF0ZUJhZyIsImN1cnJlbnRQaWVjZSIsImhvbGRQaWVjZSIsImdob3N0UG9zaXRpb24iLCJuZXh0QmFnIiwiY2FuSG9sZCIsImhhbmRsZUNsZWFyIiwiZHJvcCIsInJpZ2h0IiwibGVmdCIsImRvd24iLCJkcm9wU3BlZWQiLCJtb3ZlU3BlZWQiLCJkcm9wUGllY2UiLCJiaW5kIiwibW92ZSIsIm1vdmVQaWVjZSIsImFuaW1hdGUiLCJmcHNJbnRlcnZhbCIsInN0YXJ0VGltZSIsIm5vdyIsInRoZW4iLCJpc1BhdXNlZCIsImtleUhlbGQiLCJvcHBvbmVudCIsImNvbnRyb2xzIiwidXBjb21pbmdMaW5lcyIsImNvbWJvIiwidFNwaW4iLCJ0U3BpblN0cmVhayIsImNvbWJvR3VpZGUiLCJzdGFydEVsZXZhdGluZyIsImNsZWFyRWxldmF0ZUludGVydmFsIiwiZWxldmF0ZURlbGF5IiwiY2xlYXJUaW1lciIsInNjb3JlS2VlcGVyIiwiU2NvcmVLZWVwZXIiLCJvUGllY2UiLCJPUGllY2UiLCJpUGllY2UiLCJJUGllY2UiLCJ0UGllY2UiLCJUUGllY2UiLCJzUGllY2UiLCJTUGllY2UiLCJ6UGllY2UiLCJaUGllY2UiLCJsUGllY2UiLCJMUGllY2UiLCJqUGllY2UiLCJKUGllY2UiLCJnZW5lcmF0ZUZpZWxkIiwic2hpZnQiLCJjb29yZGluYXRlQXJyYXlzIiwiT2JqZWN0IiwidmFsdWVzIiwiZm9yRWFjaCIsImFycmF5IiwiY29vcmRpbmF0ZSIsImNvbCIsImZpZWxkQ29sdW1ucyIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJmaWVsZFNxdWFyZSIsImNoaWxkcmVuIiwiY29sb3JDb2RlIiwidG9wIiwicG9zaXRpb24iLCJtYXAiLCJzbGljZSIsIm1pZGRsZSIsImJvdHRvbSIsInN0b3BwZWQiLCJoYW5naW5nU3F1YXJlcyIsIl9wb3B1bGF0ZUdob3N0UG9zaXRpb24iLCJyZW5kZXIiLCJjbGVhclNlbGZGcm9tQm9hcmQiLCJfZ2VuZXJhdGVQaWVjZSIsIm5hbWUiLCJzZXRDdXJyZW50UGllY2UiLCJzaG93Q3VycmVudEJhZyIsIl9wb3B1bGF0ZUhvbGRCb3giLCJjb2x1bW5zIiwiaiIsImNsYXNzTmFtZSIsImRpc3BsYXlTcXVhcmVzIiwic3F1YXJlIiwicGllY2VOYW1lIiwiZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSIsIl9wb3B1bGF0ZU5leHRCb3giLCJwaWVjZSIsImJhZyIsImN1cnJlbnRJbmRleCIsImxlbmd0aCIsInRlbXBvcmFyeVZhbHVlIiwicmFuZG9tSW5kZXgiLCJNYXRoIiwiZmxvb3IiLCJyYW5kb20iLCJyb3dJZHgiLCJfXyIsImNvbElkeCIsInNxdWFyZVZhbHVlIiwicmVtb3ZlIiwiYm9keSIsImFkZEV2ZW50TGlzdGVuZXIiLCJldmVudCIsImdhbWVJc092ZXIiLCJzZXRPdXRlclNxdWFyZXMiLCJ3aGljaCIsInR1cm5SaWdodCIsImNsZWFyR2hvc3RQb3NpdGlvbiIsInBvcHVsYXRlRmllbGQiLCJzZXRHaG9zdFBvc2l0aW9uIiwidHVybkxlZnQiLCJsZWZ0U2lkZUJsb2NrZWQiLCJyaWdodFNpZGVCbG9ja2VkIiwic29mdERyb3AiLCJob2xkIiwiaGFyZERyb3AiLCJoYW5kbGVQaWVjZVN0b3AiLCJjYW5jZWxBbmltYXRpb25GcmFtZSIsImxvd2VzdCIsImhpZ2hlc3QiLCJudW1MaW5lc0NsZWFyZWQiLCJpbmNsdWRlcyIsIl9icmluZ0Rvd25GaWVsZCIsImNsZWFyTGluZXMiLCJzdGFydGluZ1JvdyIsImxlZnRNb3N0IiwicmlnaHRNb3N0IiwibGVmdE1vc3RSb3ciLCJyaWdodE1vc3RSb3ciLCJsZWZ0TW9zdENvbCIsInJpZ2h0TW9zdENvbCIsIm51bUxpbmVzIiwiYWRkTGluZXNUb1F1ZXVlIiwiYWJzIiwicmVjZWl2ZVVwY29taW5nTGluZXMiLCJhZGRUb1Njb3JlIiwiY2xlYXJHaG9zdENsYXNzIiwicGxheSIsImZwcyIsIkRhdGUiLCJyZXF1ZXN0QW5pbWF0aW9uRnJhbWUiLCJlbGFwc2VkIiwiaXNGYWxsaW5nIiwiYm90dG9tTW9zdCIsImRpcmVjdGlvbiIsImF0VG9wIiwiZ2FtZU92ZXIiLCJoYW5kbGVUb3BQaWVjZSIsImFkZFRvQ3VycmVudEJhZyIsInJlZmlsbE5leHRCYWciLCJ3aW5uZXIiLCJnYW1lT3ZlclNjcmVlbiIsImdhbWVPdmVySGVhZGluZyIsIndpbm5lckhlYWRpbmciLCJzY29yZSIsImdldFNjb3JlIiwic3RvcFRpbWVyIiwiY2xlYXJJbnRlcnZhbCIsImNsZWFyRWxldmF0aW9uIiwicGxheWVyIiwiZ2FyYmFnZUxpbmVzIiwicmFuZG9tSG9sZSIsImdhcmJhZ2VSb3ciLCJjb25jYXQiLCJzZXRJbnRlcnZhbCIsIm1pbnV0ZXMiLCJzZWNvbmRzIiwib2xkU2Vjb25kIiwiTnVtYmVyIiwib2xkTWludXRlIiwibmV3U2Vjb25kcyIsIm1lbnUiLCJNZW51IiwicmVuZGVyTWVudSIsImdldEVsZW1lbnRCeUlkIiwib3B0aW9uc1BsYXllcjEiLCJvcHRpb25zUGxheWVyMiIsImdhbWUxIiwiZ2FtZTIiLCJmaWVsZDEiLCJmaWVsZDIiLCJtdWx0aXBsYXllck1vZGUiLCJNdWx0aXBsYXllciIsImZpZWxkQ29udGFpbmVyMSIsImZpZWxkQ29udGFpbmVyMiIsInNpbmdsZVBsYXllckNvbnRlbnQiLCJTaW5nbGVQbGF5ZXJDb250ZW50IiwibXVsdGlwbGF5ZXJDb250ZW50IiwiTXVsdGlwbGF5ZXJDb250ZW50IiwibW9kYWwiLCJNb2RhbCIsInNpbmdsZVBsYXllckJ1dHRvbiIsIm11bHRpcGxheWVyQnV0dG9uIiwiYWRkRXZlbnRMaXN0ZW5lcnMiLCJyZW5kZXJTaW5nbGVQbGF5ZXIiLCJyZW5kZXJNdWx0aXBsYXllciIsImRpc3BsYXkiLCJqdXN0aWZ5Q29udGVudCIsImNyZWF0ZUFsbENvbnRlbnQiLCJjcmVhdGVDb21wbGV0ZUZpZWxkIiwia2V5TGlzdGVuZXIiLCJjaGFuZ2VDb250cm9scyIsImFkanVzdEVsZXZhdGUiLCJjcmVhdGVUaW1lciIsInN0YXJ0VGltZXIiLCJyZW1vdmVDaGlsZCIsImNvbnRyb2xzQ29udGFpbmVyIiwiY3JlYXRlQ29udHJvbHNDb250ZW50IiwiY3JlYXRlIiwiX2NyZWF0ZUNsb3NlTW9kYWxMaW5rIiwiYnV0dG9uQ29udGFpbmVyIiwicmVuZGVyQnV0dG9ucyIsImJ1dHRvbiIsImNsb3NlTGluayIsInN0YXJ0TXVsdGlwbGF5ZXIiLCJpdGVtIiwiY29udGVudCIsImtleXMiLCJwbGF5ZXIxIiwicGxheWVyMiIsImNvbnRyb2xzRGl2IiwiaW1hZ2VzIiwiZGVzY3JpcHRpb25zIiwic3BhbnMiLCJkaXZzIiwibGFiZWwiLCJwIiwiaW1nIiwic2V0QXR0cmlidXRlIiwiYWxsU2luZ2xlUGxheWVyQ29udGVudCIsImNyZWF0ZVNjb3JlS2VlcGVyIiwiY29udGVudERpdiIsInRpbWVyIiwiY29sb24iLCJlbGUiLCJzZXRPcHBvbmVudCIsInR1cm5pbmdQb2ludCIsInJlbW92ZVNxdWFyZXMiLCJvZmZzZXRHdWlkZSIsIlBpZWNlIiwidG9wTW9zdCIsInJvdGF0aW9uU3RhdGUiLCJjb29yZGluYXRlc0FycmF5IiwiY29sdW1uVmFsdWUiLCJyb3dWYWx1ZSIsInBvc2l0aW9uQXJyYXkiLCJvbGRTcXVhcmUiLCJuZXdTcXVhcmUiLCJyZXN1bHQiLCJfc3F1YXJlc0FyZUVxdWFsIiwib2xkUG9zaXRpb24iLCJzZXRSZW1vdmVTcXVhcmVzIiwib2xkVHVybmluZ1BvaW50Iiwic3F1YXJlcyIsImhlaWdodERpZmZlcmVuY2UiLCJ3aWR0aERpZmZlcmVuY2UiLCJuZXdDb2wiLCJuZXdSb3ciLCJuZXdTcXVhcmVzIiwidW5kZWZpbmVkIiwid2FsbEtpY2siLCJvbGRTcXVhcmVzIiwiZmlsdGVyIiwiX2luY2x1ZGVzIiwiY29vcmRpbmF0ZUFycmF5IiwiYmVsb3dTcXVhcmUiLCJzaWRlU3F1YXJlcyIsImFkamFjZW50TGVmdCIsImFkamFjZW50UmlnaHQiLCJjb29yZGluYXRlUGFpciIsImFjdGlvbiIsInZhbGlkU3BvdCIsInN0YXJ0aW5nT2Zmc2V0IiwibmV4dE9mZnNldCIsImJhc2VQb3NpdGlvbiIsImJhc2VUdXJuaW5nUG9pbnQiLCJzdGFydGluZ1RyYW5zbGF0aW9uIiwicG90ZW50aWFsVHJhbnNsYXRpb24iLCJyb3dTaGlmdCIsImNvbFNoaWZ0IiwidHJhbnNsYXRlVmVydGljYWwiLCJ0cmFuc2xhdGVIb3Jpem9udGFsIiwibnVtVGltZXNSb3dTaGlmdGVkIiwibnVtVGltZXNDb2xTaGlmdGVkIiwibmV3UG9zaXRpb24iLCJzY29yZUtlZXBlckRpdiIsImxpbmVzQ2xlYXJlZCJdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNB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Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQ0ZmOU0sVzs7Ozs7Ozs7O3dDQUNHO0FBQ2hCLFVBQUk0UCxjQUFjLEdBQUd4VSxRQUFRLENBQUNDLGFBQVQsQ0FBdUIsS0FBdkIsQ0FBckI7QUFDQXVVLG9CQUFjLENBQUN0VSxTQUFmLENBQXlCQyxHQUF6QixDQUE2QixhQUE3QjtBQUNBcVUsb0JBQWMsQ0FBQ2xULFNBQWYsR0FBMkIsR0FBM0I7QUFDQSxhQUFPa1QsY0FBUDtBQUNIOzs7K0JBRVVDLFksRUFBYztBQUNyQixVQUFJOVAsV0FBVyxHQUFHM0UsUUFBUSxDQUFDOEIsYUFBVCxDQUF1QixjQUF2QixDQUFsQjtBQUNBLFVBQUl1SyxLQUFLLEdBQUdjLE1BQU0sQ0FBQ3hJLFdBQVcsQ0FBQ3JELFNBQWIsQ0FBbEI7O0FBQ0EsVUFBSW1ULFlBQVksS0FBSyxDQUFyQixFQUF3QjtBQUNwQnBJLGFBQUssSUFBSSxHQUFUO0FBQ0gsT0FGRCxNQUVPLElBQUlvSSxZQUFZLEtBQUssQ0FBckIsRUFBd0I7QUFDM0JwSSxhQUFLLElBQUksR0FBVDtBQUNILE9BRk0sTUFFQSxJQUFJb0ksWUFBWSxLQUFLLENBQXJCLEVBQXdCO0FBQzNCcEksYUFBSyxJQUFJLEdBQVQ7QUFDSCxPQUZNLE1BRUEsSUFBSW9JLFlBQVksS0FBSyxDQUFyQixFQUF3QjtBQUMzQnBJLGFBQUssSUFBSSxHQUFUO0FBQ0g7O0FBQ0QxSCxpQkFBVyxDQUFDckQsU0FBWixHQUF3QitLLEtBQXhCO0FBQ0g7OzsrQkFFVTtBQUNQLFVBQUkxSCxXQUFXLEdBQUczRSxRQUFRLENBQUM4QixhQUFULENBQXVCLGNBQXZCLENBQWxCO0FBQ0EsYUFBTzZDLFdBQVcsQ0FBQ3JELFNBQW5CO0FBQ0giLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiL2Rpc3QvXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2luZGV4LmpzXCIpO1xuIiwiaW1wb3J0IEhvbGRCb3ggZnJvbSAnLi9ob2xkYm94JztcbmltcG9ydCBOZXh0Qm94IGZyb20gJy4vbmV4dEJveCc7XG5pbXBvcnQgUXVldWUgZnJvbSAnLi9xdWV1ZSc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEZpZWxkIHsgIFxuICAgIGNvbnN0cnVjdG9yKGZpZWxkTnVtKSB7XG4gICAgICAgIHRoaXMuZmllbGROdW0gPSBmaWVsZE51bTtcbiAgICB9XG4gICAgXG4gICAgZ2VuZXJhdGVGaWVsZCgpIHtcbiAgICAgICAgbGV0IGZpZWxkID0gW107XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMjA7IGkrKykge1xuICAgICAgICAgICAgbGV0IHJvdyA9IFswLDAsMCwwLDAsMCwwLDAsMCwwXTtcbiAgICAgICAgICAgIGZpZWxkLnB1c2gocm93KTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZmllbGQ7XG4gICAgfVxuXG4gICAgX2NyZWF0ZUNvbHVtbigpIHtcbiAgICAgICAgbGV0IGNvbHVtbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ1bFwiKTtcbiAgICAgICAgY29sdW1uLmNsYXNzTGlzdC5hZGQoYGZpZWxkLWNvbHVtbmAsIGBmaWVsZC0ke3RoaXMuZmllbGROdW19YCk7XG5cbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCAyMDsgaSsrKSB7XG4gICAgICAgICAgICBjb2x1bW4uYXBwZW5kKGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaVwiKSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGNvbHVtbjtcbiAgICB9XG5cbiAgICBfY3JlYXRlRmllbGQoKSB7XG4gICAgICAgIGxldCBmaWVsZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIGZpZWxkLmNsYXNzTGlzdC5hZGQoYGZpZWxkLWJveGAsIGBmaWVsZC0ke3RoaXMuZmllbGROdW19YCk7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMTA7IGkrKykge1xuICAgICAgICAgICAgZmllbGQuYXBwZW5kQ2hpbGQodGhpcy5fY3JlYXRlQ29sdW1uKCkpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBmaWVsZDtcbiAgICB9XG5cbiAgICBjcmVhdGVDb21wbGV0ZUZpZWxkKGNvbnRhaW5lcikge1xuICAgICAgICBsZXQgcXVldWUgPSBuZXcgUXVldWUodGhpcy5maWVsZE51bSk7XG4gICAgICAgIGxldCBuZXh0Qm94ID0gbmV3IE5leHRCb3godGhpcy5maWVsZE51bSk7XG4gICAgICAgIGxldCBob2xkQm94ID0gbmV3IEhvbGRCb3godGhpcy5maWVsZE51bSk7XG4gICAgICAgIGNvbnRhaW5lci5hcHBlbmQodGhpcy5fY3JlYXRlRmllbGQoKSk7XG4gICAgICAgIGNvbnRhaW5lci5hcHBlbmQocXVldWUuY3JlYXRlUXVldWUoKSk7XG4gICAgICAgIGNvbnRhaW5lci5hcHBlbmQobmV4dEJveC5jcmVhdGVOZXh0Qm94ZXMoKSk7XG4gICAgICAgIGNvbnRhaW5lci5wcmVwZW5kKGhvbGRCb3guY3JlYXRlQm94KCkpO1xuICAgICAgICByZXR1cm4gY29udGFpbmVyO1xuICAgIH1cblxufSIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIEhvbGRCb3gge1xuICAgIGNvbnN0cnVjdG9yKGZpZWxkTnVtKSB7XG4gICAgICAgIHRoaXMuZmllbGROdW0gPSBmaWVsZE51bTtcbiAgICB9XG5cbiAgICBfY3JlYXRlQm94Q29sdW1uKCkge1xuICAgICAgICBsZXQgY29sdW1uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInVsXCIpO1xuICAgICAgICBjb2x1bW4uY2xhc3NMaXN0LmFkZChgaG9sZC1jb2x1bW5gLCBgZmllbGQtJHt0aGlzLmZpZWxkTnVtfWApO1xuXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgNDsgaSsrKSB7XG4gICAgICAgICAgICBjb2x1bW4uYXBwZW5kKGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaVwiKSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGNvbHVtbjtcbiAgICB9XG5cbiAgICBjcmVhdGVCb3goKSB7XG4gICAgICAgIGxldCBib3hXcmFwcGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgYm94V3JhcHBlci5jbGFzc0xpc3QuYWRkKGBob2xkLWJveC13cmFwcGVyYCwgYGZpZWxkLSR7dGhpcy5maWVsZE51bX1gKTtcbiAgICAgICAgbGV0IGJveCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIGJveC5jbGFzc0xpc3QuYWRkKGBob2xkLWJveGAsIGBmaWVsZC0ke3RoaXMuZmllbGROdW19YCk7XG4gICAgICAgIGxldCBoZWFkaW5nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgyXCIpO1xuICAgICAgICBoZWFkaW5nLmlubmVySFRNTCA9IFwiSE9MRFwiO1xuICAgICAgICBib3hXcmFwcGVyLmFwcGVuZENoaWxkKGhlYWRpbmcpO1xuICAgICAgICBib3hXcmFwcGVyLmFwcGVuZENoaWxkKGJveCk7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgNTsgaSsrKSB7XG4gICAgICAgICAgICBib3guYXBwZW5kQ2hpbGQodGhpcy5fY3JlYXRlQm94Q29sdW1uKCkpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBib3hXcmFwcGVyO1xuICAgIH1cbn0iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBOZXh0Qm94IHtcbiAgICBjb25zdHJ1Y3RvcihmaWVsZE51bSkge1xuICAgICAgICB0aGlzLmZpZWxkTnVtID0gZmllbGROdW07XG4gICAgfVxuXG4gICAgX2NyZWF0ZU5leHRCb3hDb2x1bW4oKSB7XG4gICAgICAgIGxldCBjb2x1bW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidWxcIik7XG4gICAgICAgIGNvbHVtbi5jbGFzc0xpc3QuYWRkKGBuZXh0LWNvbHVtbmAsIGBmaWVsZC0ke3RoaXMuZmllbGROdW19YCk7XG5cbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCA0OyBpKyspIHtcbiAgICAgICAgICAgIGNvbHVtbi5hcHBlbmQoZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpXCIpKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gY29sdW1uO1xuICAgIH1cblxuICAgIF9jcmVhdGVOZXh0Qm94KCkge1xuICAgICAgICBsZXQgYm94ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgYm94LmNsYXNzTGlzdC5hZGQoYG5leHQtYm94YCwgYGZpZWxkLSR7dGhpcy5maWVsZE51bX1gKTtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCA1OyBpKyspIHtcbiAgICAgICAgICAgIGJveC5hcHBlbmRDaGlsZCh0aGlzLl9jcmVhdGVOZXh0Qm94Q29sdW1uKCkpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBib3g7XG4gICAgfVxuXG4gICAgY3JlYXRlTmV4dEJveGVzKCkge1xuICAgICAgICBsZXQgYm94ZXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICBsZXQgaGVhZGluZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMlwiKTtcbiAgICAgICAgaGVhZGluZy5pbm5lckhUTUwgPSBcIk5FWFRcIjtcbiAgICAgICAgYm94ZXMuY2xhc3NMaXN0LmFkZChgbmV4dC1ib3hlc2AsIGBmaWVsZC0ke3RoaXMuZmllbGROdW19YCk7XG4gICAgICAgIGJveGVzLmFwcGVuZENoaWxkKGhlYWRpbmcpO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IDU7IGkrKykge1xuICAgICAgICAgICAgYm94ZXMuYXBwZW5kQ2hpbGQodGhpcy5fY3JlYXRlTmV4dEJveCgpKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gYm94ZXM7XG4gICAgfVxufSIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIFF1ZXVlIHtcbiAgICBjb25zdHJ1Y3RvcihmaWVsZE51bSkge1xuICAgICAgICB0aGlzLmZpZWxkTnVtID0gZmllbGROdW07XG4gICAgfVxuXG4gICAgY3JlYXRlUXVldWUoKSB7XG4gICAgICAgIGxldCBxdWV1ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIHF1ZXVlLmNsYXNzTGlzdC5hZGQoYHF1ZXVlYCwgYGZpZWxkLSR7dGhpcy5maWVsZE51bX1gKTtcbiAgICAgICAgbGV0IHF1ZXVlTWV0ZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICBxdWV1ZU1ldGVyLmNsYXNzTGlzdC5hZGQoYHF1ZXVlLW1ldGVyYCwgYGZpZWxkLSR7dGhpcy5maWVsZE51bX1gKTtcbiAgICAgICAgcXVldWUuYXBwZW5kQ2hpbGQocXVldWVNZXRlcik7XG4gICAgICAgIHJldHVybiBxdWV1ZTtcbiAgICB9XG59XG5cbmV4cG9ydCBjb25zdCBhZGp1c3RRdWV1ZUhlaWdodCA9IChmaWVsZE51bSwgcGVyY2VudGFnZSkgPT4ge1xuICAgIGxldCBxdWV1ZU1ldGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLnF1ZXVlLW1ldGVyLmZpZWxkLSR7ZmllbGROdW19YCk7XG4gICAgaWYgKHBlcmNlbnRhZ2UgPiAxMDApIHBlcmNlbnRhZ2UgPSAxMDA7XG4gICAgcXVldWVNZXRlci5zdHlsZS5oZWlnaHQgPSBgJHtwZXJjZW50YWdlfSVgXG59IiwiaW1wb3J0IEZpZWxkIGZyb20gJy4uL2ZpZWxkL2ZpZWxkJztcbmltcG9ydCBPUGllY2UgZnJvbSAnLi4vcGllY2VzL29QaWVjZSc7XG5pbXBvcnQgSVBpZWNlIGZyb20gJy4uL3BpZWNlcy9pUGllY2UnO1xuaW1wb3J0IFRQaWVjZSBmcm9tICcuLi9waWVjZXMvdFBpZWNlJztcbmltcG9ydCBTUGllY2UgZnJvbSAnLi4vcGllY2VzL3NQaWVjZSc7XG5pbXBvcnQgWlBpZWNlIGZyb20gJy4uL3BpZWNlcy96UGllY2UnO1xuaW1wb3J0IExQaWVjZSBmcm9tICcuLi9waWVjZXMvbFBpZWNlJztcbmltcG9ydCBKUGllY2UgZnJvbSAnLi4vcGllY2VzL2pQaWVjZSc7XG5pbXBvcnQgeyBhZGp1c3RRdWV1ZUhlaWdodCB9IGZyb20gJy4uL2ZpZWxkL3F1ZXVlJztcbmltcG9ydCBTY29yZUtlZXBlciBmcm9tICcuLi9zY29yZWtlZXBlci9zY29yZWtlZXBlcic7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEdhbWUge1xuICAgIGNvbnN0cnVjdG9yKG9wdGlvbnMpIHtcbiAgICAgICAgdGhpcy5maWVsZCA9IHRoaXMuc2V0RmllbGQoKVxuXG4gICAgICAgIHRoaXMuY29sb3JzID0ge1xuICAgICAgICAgICAgMTogXCJ5ZWxsb3dcIixcbiAgICAgICAgICAgIDI6IFwiYmx1ZVwiLFxuICAgICAgICAgICAgMzogXCJwdXJwbGVcIixcbiAgICAgICAgICAgIDQ6IFwiZ3JlZW5cIixcbiAgICAgICAgICAgIDU6IFwicmVkXCIsXG4gICAgICAgICAgICA2OiBcIm9yYW5nZVwiLFxuICAgICAgICAgICAgNzogXCJkYXJrLWJsdWVcIixcbiAgICAgICAgICAgIDg6IFwiZ3JleVwiXG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmdhbWVOdW0gPSBvcHRpb25zLmdhbWVOdW07XG5cbiAgICAgICAgdGhpcy5jdXJyZW50QmFnID0gdGhpcy5zaHVmZmxlQmFnKHRoaXMuZ2VuZXJhdGVCYWcoKSk7XG4gICAgICAgIHRoaXMuY3VycmVudFBpZWNlID0gJyc7XG4gICAgICAgIHRoaXMuaG9sZFBpZWNlID0gJyc7XG4gICAgICAgIHRoaXMuZ2hvc3RQb3NpdGlvbiA9ICcnO1xuICAgICAgICB0aGlzLm5leHRCYWcgPSB0aGlzLnNodWZmbGVCYWcodGhpcy5nZW5lcmF0ZUJhZygpKTtcblxuICAgICAgICAvLyBwcmV2ZW50cyBwbGF5ZXIgZnJvbSBob2xkaW5nIHBpZWNlIG11bHRpcGxlIHRpbWVzXG4gICAgICAgIHRoaXMuY2FuSG9sZCA9IHRydWU7XG5cbiAgICAgICAgdGhpcy5oYW5kbGVDbGVhciA9IHtcbiAgICAgICAgICAgIGRyb3A6ICcnLFxuICAgICAgICAgICAgcmlnaHQ6ICcnLFxuICAgICAgICAgICAgbGVmdDogJycsXG4gICAgICAgICAgICBkb3duOiAnJ1xuICAgICAgICB9O1xuXG4gICAgICAgIC8vIGZvciBhbmltYXRpb25zXG4gICAgICAgIHRoaXMuZHJvcFNwZWVkID0gMTtcbiAgICAgICAgdGhpcy5tb3ZlU3BlZWQgPSBvcHRpb25zLm1vdmVTcGVlZDtcbiAgICAgICAgdGhpcy5kcm9wUGllY2UgPSB0aGlzLmRyb3BQaWVjZS5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLmRyb3AgPSB0aGlzLmRyb3AuYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5tb3ZlID0gdGhpcy5tb3ZlLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMubW92ZVBpZWNlID0gdGhpcy5tb3ZlUGllY2UuYmluZCh0aGlzKTtcblxuICAgICAgICAvLyBrZWVwIHRyYWNrIG9mIHRoZSBmb2xsb3dpbmcgdmFyaWFibGVzIGZvciByZXF1ZXN0QW5pbWF0aW9uRnJhbWUgdGhyb3R0bGluZ1xuICAgICAgICB0aGlzLmFuaW1hdGUgPSB7XG4gICAgICAgICAgICBkcm9wOiB7XG4gICAgICAgICAgICAgICAgZnBzSW50ZXJ2YWw6ICcnLFxuICAgICAgICAgICAgICAgIHN0YXJ0VGltZTogJycsXG4gICAgICAgICAgICAgICAgbm93OiAnJyxcbiAgICAgICAgICAgICAgICB0aGVuOiAnJ1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHJpZ2h0OiB7XG4gICAgICAgICAgICAgICAgZnBzSW50ZXJ2YWw6ICcnLFxuICAgICAgICAgICAgICAgIHN0YXJ0VGltZTogJycsXG4gICAgICAgICAgICAgICAgbm93OiAnJyxcbiAgICAgICAgICAgICAgICB0aGVuOiAnJ1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGxlZnQ6IHtcbiAgICAgICAgICAgICAgICBmcHNJbnRlcnZhbDogJycsXG4gICAgICAgICAgICAgICAgc3RhcnRUaW1lOiAnJyxcbiAgICAgICAgICAgICAgICBub3c6ICcnLFxuICAgICAgICAgICAgICAgIHRoZW46ICcnXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgZG93bjoge1xuICAgICAgICAgICAgICAgIGZwc0ludGVydmFsOiAnJyxcbiAgICAgICAgICAgICAgICBzdGFydFRpbWU6ICcnLFxuICAgICAgICAgICAgICAgIG5vdzogJycsXG4gICAgICAgICAgICAgICAgdGhlbjogJydcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC8vIHBhdXNpbmcgdGhlIGdhbWVcbiAgICAgICAgdGhpcy5pc1BhdXNlZCA9IGZhbHNlO1xuXG4gICAgICAgIHRoaXMua2V5SGVsZCA9IHtcbiAgICAgICAgICAgIGRvd246IGZhbHNlLFxuICAgICAgICAgICAgcmlnaHQ6IGZhbHNlLFxuICAgICAgICAgICAgbGVmdDogZmFsc2VcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMub3Bwb25lbnQgPSBcIlwiO1xuICAgICAgICB0aGlzLmNvbnRyb2xzID0gb3B0aW9ucy5jb250cm9scztcbiAgICAgICAgdGhpcy51cGNvbWluZ0xpbmVzID0gMDtcbiAgICAgICAgdGhpcy5jb21ibyA9IC0xO1xuICAgICAgICB0aGlzLnRTcGluID0gZmFsc2U7XG4gICAgICAgIHRoaXMudFNwaW5TdHJlYWsgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5jb21ib0d1aWRlID0geyAwOiAwLCAxOiAwLCAyOiAxLCAzOiAxLCA0OiAxLCA1OiAyLCA2OiAyLCA3OiAzLCA4OiAzLCA5OiA0LCAxMDogNCwgMTE6IDQsIDEyOiA1IH07XG5cbiAgICAgICAgLy8gc2luZ2xlIHBsYXllclxuICAgICAgICB0aGlzLnN0YXJ0RWxldmF0aW5nID0gdGhpcy5zdGFydEVsZXZhdGluZy5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLmNsZWFyRWxldmF0ZUludGVydmFsID0gJyc7XG4gICAgICAgIHRoaXMuZWxldmF0ZURlbGF5ID0gNTAwMDtcbiAgICAgICAgdGhpcy5jbGVhclRpbWVyID0gJyc7XG4gICAgICAgIHRoaXMuc2NvcmVLZWVwZXIgPSBuZXcgU2NvcmVLZWVwZXIoKTtcbiAgICB9XG5cbiAgICBnZW5lcmF0ZUJhZygpIHtcbiAgICAgICAgbGV0IG9QaWVjZSA9IG5ldyBPUGllY2UoKTtcbiAgICAgICAgbGV0IGlQaWVjZSA9IG5ldyBJUGllY2UoKTtcbiAgICAgICAgbGV0IHRQaWVjZSA9IG5ldyBUUGllY2UoKTtcbiAgICAgICAgbGV0IHNQaWVjZSA9IG5ldyBTUGllY2UoKTtcbiAgICAgICAgbGV0IHpQaWVjZSA9IG5ldyBaUGllY2UoKTtcbiAgICAgICAgbGV0IGxQaWVjZSA9IG5ldyBMUGllY2UoKTtcbiAgICAgICAgbGV0IGpQaWVjZSA9IG5ldyBKUGllY2UoKTtcblxuICAgICAgICByZXR1cm4gW29QaWVjZSwgaVBpZWNlLCB0UGllY2UsIHNQaWVjZSwgelBpZWNlLCBsUGllY2UsIGpQaWVjZV07XG4gICAgfVxuXG4gICAgc2V0RmllbGQoKSB7XG4gICAgICAgIGxldCBmaWVsZCA9IG5ldyBGaWVsZCgpO1xuICAgICAgICByZXR1cm4gZmllbGQuZ2VuZXJhdGVGaWVsZCgpO1xuICAgIH1cblxuICAgIC8vIHRha2UgcGllY2UgZnJvbSBjdXJyZW50QmFnIGFuZCBzZXQgaXQgYXMgdGhlIGN1cnJlbnQgcGllY2VcbiAgICBzZXRDdXJyZW50UGllY2UoKSB7XG4gICAgICAgIHRoaXMuY3VycmVudFBpZWNlID0gdGhpcy5jdXJyZW50QmFnLnNoaWZ0KCk7XG4gICAgfVxuXG4gICAgLy8gcmVtb3ZlcyBvbGQgZ2hvc3QgcG9zaXRpb24gZnJvbSB0aGlzLmZpZWxkIGJlZm9yZSBjaGFuZ2luZyBwaWVjZSBwb3NpdGlvblxuICAgIGNsZWFyR2hvc3RQb3NpdGlvbigpIHtcbiAgICAgICAgbGV0IGNvb3JkaW5hdGVBcnJheXMgPSBPYmplY3QudmFsdWVzKHRoaXMuZ2hvc3RQb3NpdGlvbik7XG4gICAgICAgIGNvb3JkaW5hdGVBcnJheXMuZm9yRWFjaChhcnJheSA9PiB7XG4gICAgICAgICAgICBhcnJheS5mb3JFYWNoKGNvb3JkaW5hdGUgPT4ge1xuICAgICAgICAgICAgICAgIGxldCBbcm93LCBjb2xdID0gW2Nvb3JkaW5hdGVbMF0sIGNvb3JkaW5hdGVbMV1dO1xuICAgICAgICAgICAgICAgIC8vIHByZXZlbnQgbWV0aG9kIGZyb20gY2xlYXJpbmcgcGllY2UgaWYgaXQgaGFwcGVucyB0byBiZSB3aGVyZSB0aGUgZ2hvc3QgcG9zaXRpb24gc2hvdWxkIGJlXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuZmllbGRbcm93XSAmJiB0aGlzLmZpZWxkW3Jvd11bY29sXSA9PT0gXCJ4XCIgJiYgcm93ID49IDApIHRoaXMuZmllbGRbcm93XVtjb2xdID0gMDtcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIC8vIGNsZWFycyB0aGUgY29sb3IgY2xhc3NlcyBmcm9tIHRoZSBicm93c2VyIGZpZWxkXG4gICAgY2xlYXJHaG9zdENsYXNzKCkge1xuICAgICAgICBsZXQgZmllbGRDb2x1bW5zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChgLmZpZWxkLWNvbHVtbi5maWVsZC0ke3RoaXMuZ2FtZU51bX1gKTtcbiAgICAgICAgT2JqZWN0LnZhbHVlcyh0aGlzLmdob3N0UG9zaXRpb24pLmZvckVhY2goYXJyYXkgPT4ge1xuICAgICAgICAgICAgYXJyYXkuZm9yRWFjaChjb29yZGluYXRlID0+IHtcbiAgICAgICAgICAgICAgICBsZXQgW3JvdywgY29sXSA9IFtjb29yZGluYXRlWzBdLCBjb29yZGluYXRlWzFdXTtcbiAgICAgICAgICAgICAgICBsZXQgZmllbGRTcXVhcmUgPSBmaWVsZENvbHVtbnNbY29sXS5jaGlsZHJlbltyb3ddO1xuICAgICAgICAgICAgICAgIGlmIChmaWVsZFNxdWFyZSkge1xuICAgICAgICAgICAgICAgICAgICBmaWVsZFNxdWFyZS5jbGFzc0xpc3QgPSB0aGlzLmNvbG9yc1t0aGlzLmN1cnJlbnRQaWVjZS5jb2xvckNvZGVdO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pXG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIC8vIGZpbmQgYXBwcm9wcmlhdGUgZ2hvc3QgcG9zaXRpb24gYXMgcGllY2UgcG9zaXRpb24gY2hhbmdlc1xuICAgIHNldEdob3N0UG9zaXRpb24oKSB7XG4gICAgICAgIGxldCBnaG9zdFBvc2l0aW9uID0ge1xuICAgICAgICAgICAgdG9wOiB0aGlzLmN1cnJlbnRQaWVjZS5wb3NpdGlvbi50b3AubWFwKGNvb3JkaW5hdGUgPT4gY29vcmRpbmF0ZS5zbGljZSgpKSxcbiAgICAgICAgICAgIG1pZGRsZTogdGhpcy5jdXJyZW50UGllY2UucG9zaXRpb24ubWlkZGxlLm1hcChjb29yZGluYXRlID0+IGNvb3JkaW5hdGUuc2xpY2UoKSksXG4gICAgICAgICAgICBib3R0b206IHRoaXMuY3VycmVudFBpZWNlLnBvc2l0aW9uLmJvdHRvbS5tYXAoY29vcmRpbmF0ZSA9PiBjb29yZGluYXRlLnNsaWNlKCkpXG4gICAgICAgIH1cbiAgICAgICAgbGV0IHN0b3BwZWQgPSBmYWxzZTtcbiAgICAgICAgd2hpbGUgKCFzdG9wcGVkKSB7XG4gICAgICAgICAgICBsZXQgaGFuZ2luZ1NxdWFyZXMgPSB0aGlzLmN1cnJlbnRQaWVjZS5oYW5naW5nU3F1YXJlcyhnaG9zdFBvc2l0aW9uKTtcbiAgICAgICAgICAgIGhhbmdpbmdTcXVhcmVzLmZvckVhY2goY29vcmRpbmF0ZSA9PiB7XG4gICAgICAgICAgICAgICAgbGV0IFtyb3csIGNvbF0gPSBbY29vcmRpbmF0ZVswXSwgY29vcmRpbmF0ZVsxXV07XG4gICAgICAgICAgICAgICAgaWYgKHJvdyA8IDAgfHwgcm93ICsgMSA9PT0gMjAgfHwgdGhpcy5maWVsZFtyb3cgKyAxXVtjb2xdKSBzdG9wcGVkID0gdHJ1ZTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgaWYgKHN0b3BwZWQpIGJyZWFrO1xuICAgICAgICAgICAgZ2hvc3RQb3NpdGlvbi50b3AgPSBnaG9zdFBvc2l0aW9uLnRvcC5tYXAoYXJyYXkgPT4gW2FycmF5WzBdICsgMSwgYXJyYXlbMV1dKTtcbiAgICAgICAgICAgIGdob3N0UG9zaXRpb24ubWlkZGxlID0gZ2hvc3RQb3NpdGlvbi5taWRkbGUubWFwKGFycmF5ID0+IFthcnJheVswXSArIDEsIGFycmF5WzFdXSk7XG4gICAgICAgICAgICBnaG9zdFBvc2l0aW9uLmJvdHRvbSA9IGdob3N0UG9zaXRpb24uYm90dG9tLm1hcChhcnJheSA9PiBbYXJyYXlbMF0gKyAxLCBhcnJheVsxXV0pO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuZ2hvc3RQb3NpdGlvbiA9IGdob3N0UG9zaXRpb247XG4gICAgICAgIHRoaXMuX3BvcHVsYXRlR2hvc3RQb3NpdGlvbigpO1xuICAgIH1cblxuICAgIC8vIHBvcHVsYXRlIHRoaXMuZmllbGQgd2l0aCAneCcgd2hlcmV2ZXIgdGhlIGdob3N0IHBvc2l0aW9uIGlzIGNhbGN1bGF0ZWQgdG8gYmVcbiAgICBfcG9wdWxhdGVHaG9zdFBvc2l0aW9uKCkge1xuICAgICAgICBsZXQgY29vcmRpbmF0ZUFycmF5cyA9IE9iamVjdC52YWx1ZXModGhpcy5naG9zdFBvc2l0aW9uKTtcbiAgICAgICAgY29vcmRpbmF0ZUFycmF5cy5mb3JFYWNoKGFycmF5ID0+IHtcbiAgICAgICAgICAgIGFycmF5LmZvckVhY2goY29vcmRpbmF0ZSA9PiB7XG4gICAgICAgICAgICAgICAgbGV0IFtyb3csIGNvbF0gPSBbY29vcmRpbmF0ZVswXSwgY29vcmRpbmF0ZVsxXV07XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuZmllbGRbcm93XSAmJiB0aGlzLmZpZWxkW3Jvd11bY29sXSAhPT0gdGhpcy5jdXJyZW50UGllY2UuY29sb3JDb2RlKSB0aGlzLmZpZWxkW3Jvd11bY29sXSA9IFwieFwiO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMucmVuZGVyKCk7XG4gICAgfVxuXG4gICAgLy8gaG9sZCBwaWVjZSBmb3IgbGF0ZXIgdXNlIFxuICAgIGhvbGQoKSB7XG4gICAgICAgIGlmICghdGhpcy5jYW5Ib2xkKSByZXR1cm47XG4gICAgICAgIHRoaXMuY3VycmVudFBpZWNlLmNsZWFyU2VsZkZyb21Cb2FyZCh0aGlzLmZpZWxkKTsgXG4gICAgICAgIHRoaXMucmVuZGVyKCk7XG5cbiAgICAgICAgaWYgKCF0aGlzLmhvbGRQaWVjZSkge1xuICAgICAgICAgICAgLy8gcGFzcyBjdXJyZW50IHBpZWNlIG5hbWUgaW50byBnZW5lcmF0ZSBwaWVjZSBpbiBvcmRlciB0byBnZW5lcmF0ZSBhIG5ldyBwaWVjZSBpbnN0YW5jZVxuICAgICAgICAgICAgdGhpcy5ob2xkUGllY2UgPSB0aGlzLl9nZW5lcmF0ZVBpZWNlKHRoaXMuY3VycmVudFBpZWNlLm5hbWUpO1xuICAgICAgICAgICAgdGhpcy5zZXRDdXJyZW50UGllY2UoKTtcbiAgICAgICAgICAgIC8vIHJlLXJlbmRlciBuZXh0IGJveGVzIHRvIGFwcHJvcHJpYXRlbHkgc2hvdyBjdXJyZW50IGJhZ1xuICAgICAgICAgICAgdGhpcy5zaG93Q3VycmVudEJhZygpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5jdXJyZW50UGllY2UgPSB0aGlzLl9nZW5lcmF0ZVBpZWNlKHRoaXMuY3VycmVudFBpZWNlLm5hbWUpO1xuICAgICAgICAgICAgW3RoaXMuY3VycmVudFBpZWNlLCB0aGlzLmhvbGRQaWVjZV0gPSBbdGhpcy5ob2xkUGllY2UsIHRoaXMuY3VycmVudFBpZWNlXTtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgLy8gZGlzYWJsZSBob2xkLXBpZWNlIHJpZ2h0IGFmdGVyIHBsYXllciBob2xkcyBhIHBpZWNlXG4gICAgICAgIHRoaXMuY2FuSG9sZCA9IGZhbHNlO1xuXG4gICAgICAgIHRoaXMuX3BvcHVsYXRlSG9sZEJveCgpO1xuICAgIH1cblxuICAgIF9wb3B1bGF0ZUhvbGRCb3goKSB7XG4gICAgICAgIGxldCBjb2x1bW5zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLmhvbGQtYm94LmZpZWxkLSR7dGhpcy5nYW1lTnVtfWApLmNoaWxkcmVuO1xuXG4gICAgICAgIC8vIHJlbW92ZSBjb2xvcnMgZnJvbSBwcmV2aW91cyBwaWVjZXNcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCA1OyBpKyspIHtcbiAgICAgICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgNDsgaisrKSB7XG4gICAgICAgICAgICAgICAgLy8gY29sdW1ucy5jaGlsZHJlbiBpcyBub2RlbGlzdCBvZiA8bGlzPlxuICAgICAgICAgICAgICAgIGNvbHVtbnNbaV0uY2hpbGRyZW5bal0uY2xhc3NOYW1lID0gXCJcIjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuaG9sZFBpZWNlLmRpc3BsYXlTcXVhcmVzLmZvckVhY2goc3F1YXJlID0+IHtcbiAgICAgICAgICAgIGxldCBbY29sLCByb3ddID0gW3NxdWFyZVswXSwgc3F1YXJlWzFdXTtcbiAgICAgICAgICAgIGNvbHVtbnNbY29sXS5jaGlsZHJlbltyb3ddLmNsYXNzTGlzdC5hZGQodGhpcy5jb2xvcnNbdGhpcy5ob2xkUGllY2UuY29sb3JDb2RlXSk7XG4gICAgICAgIH0pXG5cbiAgICB9XG5cbiAgICAvLyB1c2VkIGZvciB0aGlzLmhvbGQoKTogZ2VuZXJhdGUgYSBuZXcgcGllY2Ugc28gdGhhdCBhIGhvbGRwaWVjZSB0aGF0IGlzIHJlLXJlbmRlcmVkIG9uIHRoZSBib2FyZCB3aWxsIG5vdCBzdGFydCBmcm9tIHRoZSBvbGQgcG9zaXRpb25cbiAgICBfZ2VuZXJhdGVQaWVjZShwaWVjZU5hbWUpIHtcbiAgICAgICAgc3dpdGNoKHBpZWNlTmFtZSkge1xuICAgICAgICAgICAgY2FzZSBcIlRQaWVjZVwiOlxuICAgICAgICAgICAgICAgIHJldHVybiBuZXcgVFBpZWNlO1xuICAgICAgICAgICAgY2FzZSBcIk9QaWVjZVwiOlxuICAgICAgICAgICAgICAgIHJldHVybiBuZXcgT1BpZWNlO1xuICAgICAgICAgICAgY2FzZSBcIklQaWVjZVwiOlxuICAgICAgICAgICAgICAgIHJldHVybiBuZXcgSVBpZWNlO1xuICAgICAgICAgICAgY2FzZSBcIkxQaWVjZVwiOlxuICAgICAgICAgICAgICAgIHJldHVybiBuZXcgTFBpZWNlO1xuICAgICAgICAgICAgY2FzZSBcIkpQaWVjZVwiOlxuICAgICAgICAgICAgICAgIHJldHVybiBuZXcgSlBpZWNlO1xuICAgICAgICAgICAgY2FzZSBcIlNQaWVjZVwiOlxuICAgICAgICAgICAgICAgIHJldHVybiBuZXcgU1BpZWNlO1xuICAgICAgICAgICAgY2FzZSBcIlpQaWVjZVwiOlxuICAgICAgICAgICAgICAgIHJldHVybiBuZXcgWlBpZWNlO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLy8gdGFrZSBvbmUgcGllY2UgZnJvbSBuZXh0QmFnIGFuZCBhZGQgdG8gY3VycmVudEJhZ1xuICAgIGFkZFRvQ3VycmVudEJhZygpIHtcbiAgICAgICAgdGhpcy5jdXJyZW50QmFnLnB1c2godGhpcy5uZXh0QmFnLnNoaWZ0KCkpO1xuICAgIH1cblxuICAgIHNob3dDdXJyZW50QmFnKCkge1xuICAgICAgICBsZXQgYm94ZXMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKGBuZXh0LWJveCBmaWVsZC0ke3RoaXMuZ2FtZU51bX1gKTtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCA1OyBpKyspIHtcbiAgICAgICAgICAgIHRoaXMuX3BvcHVsYXRlTmV4dEJveChib3hlc1tpXSwgdGhpcy5jdXJyZW50QmFnW2ldKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIF9wb3B1bGF0ZU5leHRCb3goYm94LCBwaWVjZSkge1xuICAgICAgICAvLyBjb2x1bW5zIGlzIG5vZGVsaXN0IG9mIDx1bHM+XG4gICAgICAgIGxldCBjb2x1bW5zID0gYm94LmNoaWxkcmVuO1xuXG4gICAgICAgIC8vIHJlbW92ZSBjb2xvcnMgZnJvbSBwcmV2aW91cyBwaWVjZVxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IDU7IGkrKykge1xuICAgICAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCA0OyBqKyspIHtcbiAgICAgICAgICAgICAgICAvLyBjb2x1bW5zLmNoaWxkcmVuIGlzIG5vZGVsaXN0IG9mIDxsaXM+XG4gICAgICAgICAgICAgICAgY29sdW1uc1tpXS5jaGlsZHJlbltqXS5jbGFzc05hbWUgPSBcIlwiO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLy8gcG9wdWxhdGUgYm94IHdpdGggbmV3IHBpZWNlXG4gICAgICAgIHBpZWNlLmRpc3BsYXlTcXVhcmVzLmZvckVhY2goc3F1YXJlID0+IHtcbiAgICAgICAgICAgIGxldCBbY29sLCByb3ddID0gW3NxdWFyZVswXSwgc3F1YXJlWzFdXTtcbiAgICAgICAgICAgIGNvbHVtbnNbY29sXS5jaGlsZHJlbltyb3ddLmNsYXNzTGlzdC5hZGQodGhpcy5jb2xvcnNbcGllY2UuY29sb3JDb2RlXSk7XG4gICAgICAgIH0pXG4gICAgfVxuXG4gICAgLy8gcmVmaWxsIG5leHQgYmFnLCB3aWxsIG9ubHkgYmUgY2FsbGVkIG9uY2UgbmV4dEJhZyBiZWNvbWVzIGVtcHR5XG4gICAgcmVmaWxsTmV4dEJhZygpIHtcbiAgICAgICAgdGhpcy5uZXh0QmFnID0gdGhpcy5nZW5lcmF0ZUJhZygpO1xuICAgIH1cblxuICAgIC8vIGltcGxlbWVudGF0aW9uIG9mIHNodWZmbGUgZm91bmQgb24gaHR0cHM6Ly9zdGFja292ZXJmbG93LmNvbS9xdWVzdGlvbnMvMjQ1MDk1NC9ob3ctdG8tcmFuZG9taXplLXNodWZmbGUtYS1qYXZhc2NyaXB0LWFycmF5IzI0NTA5NzZcbiAgICBzaHVmZmxlQmFnKGJhZykge1xuICAgICAgICB2YXIgY3VycmVudEluZGV4ID0gYmFnLmxlbmd0aCwgdGVtcG9yYXJ5VmFsdWUsIHJhbmRvbUluZGV4O1xuXG4gICAgICAgIC8vIFdoaWxlIHRoZXJlIHJlbWFpbiBlbGVtZW50cyB0byBzaHVmZmxlLi4uXG4gICAgICAgIHdoaWxlICgwICE9PSBjdXJyZW50SW5kZXgpIHtcblxuICAgICAgICAgICAgLy8gUGljayBhIHJlbWFpbmluZyBlbGVtZW50Li4uXG4gICAgICAgICAgICByYW5kb21JbmRleCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIGN1cnJlbnRJbmRleCk7XG4gICAgICAgICAgICBjdXJyZW50SW5kZXggLT0gMTtcblxuICAgICAgICAgICAgLy8gQW5kIHN3YXAgaXQgd2l0aCB0aGUgY3VycmVudCBlbGVtZW50LlxuICAgICAgICAgICAgdGVtcG9yYXJ5VmFsdWUgPSBiYWdbY3VycmVudEluZGV4XTtcbiAgICAgICAgICAgIGJhZ1tjdXJyZW50SW5kZXhdID0gYmFnW3JhbmRvbUluZGV4XTtcbiAgICAgICAgICAgIGJhZ1tyYW5kb21JbmRleF0gPSB0ZW1wb3JhcnlWYWx1ZTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gYmFnO1xuICAgIH1cbiAgICAvLyBpbXBsZW1lbnRhdGlvbiBvZiBzaHVmZmxlIGZvdW5kIG9uIGh0dHBzOi8vc3RhY2tvdmVyZmxvdy5jb20vcXVlc3Rpb25zLzI0NTA5NTQvaG93LXRvLXJhbmRvbWl6ZS1zaHVmZmxlLWEtamF2YXNjcmlwdC1hcnJheSMyNDUwOTc2XG5cbiAgICAvLyBsb29rIHRocm91Z2ggZmllbGQsIGlmIGZpZWxkW3Jvd11bY29sXSBjb250YWlucyBhIG51bWJlciA+IDAsIGZpbGwgdGhhdCBzcG90IHdpdGggdGhlIHJlc3BlY3RpdmUgY29sb3IuIFxuICAgIC8vIGlmIGNvbnRhaW5zIGFuICd4JywgcG9wdWxhdGUgd2l0aCBnaG9zdCBwaWVjZSBzdHlsZXMuXG4gICAgLy8gZWxzZSwgcmVtb3ZlIGNvbG9yXG4gICAgcmVuZGVyKCkge1xuICAgICAgICAvLyBpZiAodGhpcy5jdXJyZW50UGllY2UucmlnaHRNb3N0WzFdID4gOSB8fCB0aGlzLmN1cnJlbnRQaWVjZS5sZWZ0TW9zdFsxXSA8IDApIHJldHVybjtcbiAgICAgICAgbGV0IGZpZWxkQ29sdW1ucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoYC5maWVsZC1jb2x1bW4uZmllbGQtJHt0aGlzLmdhbWVOdW19YCk7XG4gICAgICAgIHRoaXMuZmllbGQuZm9yRWFjaCgocm93LCByb3dJZHgpID0+IHtcbiAgICAgICAgICAgIHJvdy5mb3JFYWNoKChfXywgY29sSWR4KSA9PiB7XG4gICAgICAgICAgICAgICAgbGV0IHNxdWFyZVZhbHVlID0gdGhpcy5maWVsZFtyb3dJZHhdW2NvbElkeF07XG4gICAgICAgICAgICAgICAgaWYgKHNxdWFyZVZhbHVlID09PSAneCcpIHtcbiAgICAgICAgICAgICAgICAgICAgZmllbGRDb2x1bW5zW2NvbElkeF0uY2hpbGRyZW5bcm93SWR4XS5jbGFzc0xpc3QuYWRkKGB4LSR7dGhpcy5jb2xvcnNbdGhpcy5jdXJyZW50UGllY2UuY29sb3JDb2RlXX1gKTtcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHNxdWFyZVZhbHVlKSB7XG4gICAgICAgICAgICAgICAgICAgIGZpZWxkQ29sdW1uc1tjb2xJZHhdLmNoaWxkcmVuW3Jvd0lkeF0uY2xhc3NMaXN0LmFkZCh0aGlzLmNvbG9yc1tzcXVhcmVWYWx1ZV0pO1xuICAgICAgICAgICAgICAgICAgICBmaWVsZENvbHVtbnNbY29sSWR4XS5jaGlsZHJlbltyb3dJZHhdLmNsYXNzTGlzdC5yZW1vdmUoYHgtJHt0aGlzLmNvbG9yc1t0aGlzLmN1cnJlbnRQaWVjZS5jb2xvckNvZGVdfWApO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGZpZWxkQ29sdW1uc1tjb2xJZHhdLmNoaWxkcmVuW3Jvd0lkeF0uY2xhc3NMaXN0ID0gXCJcIjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAga2V5TGlzdGVuZXIoKSB7XG4gICAgICAgIGRvY3VtZW50LmJvZHkuYWRkRXZlbnRMaXN0ZW5lcihcImtleWRvd25cIiwgZXZlbnQgPT4ge1xuICAgICAgICAgICAgaWYgKHRoaXMuZ2FtZUlzT3ZlciB8fCB0aGlzLm9wcG9uZW50LmdhbWVJc092ZXIpIHJldHVybjtcbiAgICAgICAgICAgIHRoaXMuY3VycmVudFBpZWNlLnNldE91dGVyU3F1YXJlcygpO1xuICAgICAgICAgICAgLy8gdGhpcy5jbGVhckdob3N0UG9zaXRpb24oKTtcbiAgICAgICAgICAgIHN3aXRjaChldmVudC53aGljaCkge1xuICAgICAgICAgICAgICAgIC8vIHVwIGtleVxuICAgICAgICAgICAgICAgIGNhc2UgdGhpcy5jb250cm9scy50dXJuUmlnaHQ6XG4gICAgICAgICAgICAgICAgICAgIC8vIHBhc3MgZmllbGQgc28gcGllY2UgY2FuIGNoZWNrIGZpZWxkIHdhbGwgYmVmb3JlIHR1cm5pbmdcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jbGVhckdob3N0UG9zaXRpb24oKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy50U3BpbiA9IHRoaXMuY3VycmVudFBpZWNlLm1vdmUoXCJ0dXJuUmlnaHRcIiwgdGhpcy5maWVsZCk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY3VycmVudFBpZWNlLnBvcHVsYXRlRmllbGQodGhpcy5maWVsZCk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0R2hvc3RQb3NpdGlvbigpO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAvLyBDIGtleVxuICAgICAgICAgICAgICAgIGNhc2UgdGhpcy5jb250cm9scy50dXJuTGVmdDpcbiAgICAgICAgICAgICAgICAgICAgLy8gcGFzcyBmaWVsZCBzbyBwaWVjZSBjYW4gY2hlY2sgZmllbGQgd2FsbCBiZWZvcmUgdHVybmluZ1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmNsZWFyR2hvc3RQb3NpdGlvbigpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmN1cnJlbnRQaWVjZS5tb3ZlKFwidHVybkxlZnRcIiwgdGhpcy5maWVsZCk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY3VycmVudFBpZWNlLnBvcHVsYXRlRmllbGQodGhpcy5maWVsZCk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0R2hvc3RQb3NpdGlvbigpO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAvLyBsZWZ0IGtleVxuICAgICAgICAgICAgICAgIGNhc2UgdGhpcy5jb250cm9scy5sZWZ0OlxuICAgICAgICAgICAgICAgICAgICB0aGlzLmtleUhlbGQubGVmdCA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLmN1cnJlbnRQaWVjZS5sZWZ0U2lkZUJsb2NrZWQodGhpcy5maWVsZCkpIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLm1vdmVQaWVjZShcImxlZnRcIik7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIC8vIHJpZ2h0IGtleVxuICAgICAgICAgICAgICAgIGNhc2UgdGhpcy5jb250cm9scy5yaWdodDpcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5rZXlIZWxkLnJpZ2h0ID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuY3VycmVudFBpZWNlLnJpZ2h0U2lkZUJsb2NrZWQodGhpcy5maWVsZCkpIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLm1vdmVQaWVjZShcInJpZ2h0XCIpO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAvLyBkb3duIGtleVxuICAgICAgICAgICAgICAgIGNhc2UgdGhpcy5jb250cm9scy5zb2Z0RHJvcDpcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5rZXlIZWxkLmRvd24gPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLm1vdmVQaWVjZShcImRvd25cIik7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIC8vIHNoaWZ0IGtleVxuICAgICAgICAgICAgICAgIGNhc2UgdGhpcy5jb250cm9scy5ob2xkOiBcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jbGVhckdob3N0UG9zaXRpb24oKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5ob2xkKCk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY3VycmVudFBpZWNlLnBvcHVsYXRlRmllbGQodGhpcy5maWVsZCk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0R2hvc3RQb3NpdGlvbigpO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAvLyBzcGFjZSBiYXJcbiAgICAgICAgICAgICAgICBjYXNlIHRoaXMuY29udHJvbHMuaGFyZERyb3A6XG4gICAgICAgICAgICAgICAgICAgIC8vIHRoaXMucmVuZGVyKCk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY2xlYXJHaG9zdFBvc2l0aW9uKCk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY3VycmVudFBpZWNlLmhhcmREcm9wKHRoaXMuZmllbGQpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnJlbmRlcigpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmN1cnJlbnRQaWVjZS5wb3B1bGF0ZUZpZWxkKHRoaXMuZmllbGQpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmhhbmRsZVBpZWNlU3RvcCh0aGlzLmhhbmRsZUNsZWFyLmRyb3ApO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAvLyBQIGtleVxuICAgICAgICAgICAgICAgIGNhc2UgODA6XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuaXNQYXVzZWQgPyB0aGlzLmRyb3BQaWVjZSh0aGlzLmRyb3BTcGVlZCkgOiBjYW5jZWxBbmltYXRpb25GcmFtZSh0aGlzLmhhbmRsZUNsZWFyLmRyb3ApO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmlzUGF1c2VkID0gIXRoaXMuaXNQYXVzZWQ7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5jdXJyZW50UGllY2Uuc2V0T3V0ZXJTcXVhcmVzKCk7XG4gICAgICAgICAgICB0aGlzLnJlbmRlcigpO1xuICAgICAgICB9KTtcblxuICAgICAgICBkb2N1bWVudC5ib2R5LmFkZEV2ZW50TGlzdGVuZXIoXCJrZXl1cFwiLCBldmVudCA9PiB7XG4gICAgICAgICAgICBzd2l0Y2ggKGV2ZW50LndoaWNoKSB7XG4gICAgICAgICAgICAgICAgY2FzZSB0aGlzLmNvbnRyb2xzLnJpZ2h0OiBcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5rZXlIZWxkLnJpZ2h0ID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgdGhpcy5jb250cm9scy5sZWZ0OiBcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5rZXlIZWxkLmxlZnQgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSB0aGlzLmNvbnRyb2xzLnNvZnREcm9wOiBcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5rZXlIZWxkLmRvd24gPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7ICBcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgY2xlYXJMaW5lcyhsb3dlc3QsIGhpZ2hlc3QsIG51bUxpbmVzQ2xlYXJlZCkge1xuICAgICAgICBpZiAobG93ZXN0IDwgMCkgcmV0dXJuO1xuICAgICAgICAvLyBiYXNlIGNhc2U6IGlmIHdlIHJlYWNoIGEgcm93IHRoYXQgaXMgaGlnaGVyIHRoYW4gdGhlIGhpZ2hlc3QsIHRoZW4gcmV0dXJuIG51bWJlciBvZiBsaW5lcyB0aGF0IHdlcmUgY2xlYXJlZFxuICAgICAgICBpZiAobG93ZXN0IDwgaGlnaGVzdCkge1xuICAgICAgICAgICAgcmV0dXJuIG51bUxpbmVzQ2xlYXJlZDtcbiAgICAgICAgfTtcbiAgICAgICAgLy8gcmVjdXJzaXZlIGNhc2U6IFxuICAgICAgICAvLyBpZiBsb3dlc3Qgcm93IGRvZXMgbm90IGNvbnRhaW4gYSAwLCBicmluZyBhbGwgYWJvdmUgcm93cyBkb3duIG9uZSBsZXZlbFxuICAgICAgICBpZiAoIXRoaXMuZmllbGRbbG93ZXN0XS5pbmNsdWRlcygwKSkge1xuICAgICAgICAgICAgdGhpcy5fYnJpbmdEb3duRmllbGQobG93ZXN0KTtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmNsZWFyTGluZXMobG93ZXN0LCBoaWdoZXN0ICsgMSwgbnVtTGluZXNDbGVhcmVkICsgMSlcbiAgICAgICAgLy8gaWYgcm93IGNvbnRhaW5zIGEgMCwgcm93IGlzIG5vdCBjbGVhcmVkIHlldCBcbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLmZpZWxkW2xvd2VzdF0uaW5jbHVkZXMoMCkpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmNsZWFyTGluZXMobG93ZXN0IC0gMSwgaGlnaGVzdCwgbnVtTGluZXNDbGVhcmVkKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIF9icmluZ0Rvd25GaWVsZChzdGFydGluZ1Jvdykge1xuICAgICAgICBmb3IgKGxldCBpID0gc3RhcnRpbmdSb3c7IGkgPiAwOyBpLS0pIHtcbiAgICAgICAgICAgIHRoaXMuZmllbGRbaV0gPSB0aGlzLmZpZWxkW2kgLSAxXTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmZpZWxkWzBdID0gWzAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDBdO1xuICAgIH1cblxuICAgIGhhbmRsZVBpZWNlU3RvcCgpIHsgIFxuICAgICAgICAvLyBhbGxvdyBwbGF5ZXIgdG8gaG9sZCBwaWVjZSBhZ2FpblxuICAgICAgICB0aGlzLmNhbkhvbGQgPSB0cnVlO1xuICAgICAgICBsZXQgbG93ZXN0ID0gdGhpcy5jdXJyZW50UGllY2UucG9zaXRpb24uYm90dG9tWzBdWzBdO1xuICAgICAgICAvLyBpbiBjYXNlIG9mIGxpbmUgcGllY2UsIHdoaWNoIG1heSBub3QgaGF2ZSB0aGlzLnBvc2l0aW9uLnRvcFxuICAgICAgICBsZXQgaGlnaGVzdCA9ICF0aGlzLmN1cnJlbnRQaWVjZS5wb3NpdGlvbi50b3AubGVuZ3RoID8gbG93ZXN0IDogdGhpcy5jdXJyZW50UGllY2UucG9zaXRpb24udG9wWzBdWzBdO1xuICAgICAgICAvLyBjaGVjayBpZiBhIFRQaWVjZSB3YXMgc3B1biBpbiBwbGFjZVxuICAgICAgICBpZiAodGhpcy5jdXJyZW50UGllY2UubmFtZSA9PT0gXCJUUGllY2VcIikge1xuICAgICAgICAgICAgbGV0IFtsZWZ0TW9zdFJvdywgcmlnaHRNb3N0Um93XSA9IFt0aGlzLmN1cnJlbnRQaWVjZS5sZWZ0TW9zdFswXSwgdGhpcy5jdXJyZW50UGllY2UucmlnaHRNb3N0WzBdXTtcbiAgICAgICAgICAgIGxldCBbbGVmdE1vc3RDb2wsIHJpZ2h0TW9zdENvbF0gPSBbdGhpcy5jdXJyZW50UGllY2UubGVmdE1vc3RbMV0sIHRoaXMuY3VycmVudFBpZWNlLnJpZ2h0TW9zdFsxXV07XG4gICAgICAgICAgICBpZiAodGhpcy5maWVsZFtsZWZ0TW9zdFJvdyAtIDFdICYmIHRoaXMuZmllbGRbcmlnaHRNb3N0Um93IC0gMV0pIHtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5maWVsZFtsZWZ0TW9zdFJvdyAtIDFdW2xlZnRNb3N0Q29sXSB8fCB0aGlzLmZpZWxkW3JpZ2h0TW9zdFJvdyAtIDFdW3JpZ2h0TW9zdENvbF0pIHRoaXMudFNwaW4gPSB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGxldCBudW1MaW5lc0NsZWFyZWQgPSB0aGlzLmNsZWFyTGluZXMobG93ZXN0LCBoaWdoZXN0LCAwKTtcblxuICAgICAgICAvLyBpbiB0aGUgY2FzZSBvZiBtdWx0aXBsYXllciwgc2VuZCBjbGVhcmVkIGxpbmVzIHRvIG9wcG9uZW50IGFuZCByZWNlaXZlIHBvdGVudGlhbCBsaW5lc1xuICAgICAgICBpZiAodGhpcy5vcHBvbmVudCkge1xuICAgICAgICAgICAgaWYgKG51bUxpbmVzQ2xlYXJlZCA+IDApIHtcbiAgICAgICAgICAgICAgICB0aGlzLmNvbWJvICs9IDE7XG4gICAgICAgICAgICAgICAgbGV0IG51bUxpbmVzXG4gICAgICAgICAgICAgICAgaWYgKG51bUxpbmVzQ2xlYXJlZCA8IDQpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuY3VycmVudFBpZWNlLm5hbWUgPT09IFwiVFBpZWNlXCIgJiYgdGhpcy50U3Bpbikge1xuICAgICAgICAgICAgICAgICAgICAgICAgbnVtTGluZXMgPSBudW1MaW5lc0NsZWFyZWQgPT09IDMgPyA2IDogNDtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG51bUxpbmVzID0gbnVtTGluZXNDbGVhcmVkIC0gMTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMudFNwaW5TdHJlYWsgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIG51bUxpbmVzID0gNDtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBudW1MaW5lcyArPSB0aGlzLmNvbWJvR3VpZGVbdGhpcy5jb21ib107XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMudFNwaW5TdHJlYWspIG51bUxpbmVzICs9IDI7XG5cbiAgICAgICAgICAgICAgICBpZiAodGhpcy51cGNvbWluZ0xpbmVzID4gMCkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnVwY29taW5nTGluZXMgLT0gbnVtTGluZXM7XG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLnVwY29taW5nTGluZXMgPCAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm9wcG9uZW50LmFkZExpbmVzVG9RdWV1ZShNYXRoLmFicyh0aGlzLnVwY29taW5nTGluZXMpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMudXBjb21pbmdMaW5lcyA9IDA7XG4gICAgICAgICAgICAgICAgICAgICAgICBhZGp1c3RRdWV1ZUhlaWdodCh0aGlzLmdhbWVOdW0sIDApO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgYWRqdXN0UXVldWVIZWlnaHQodGhpcy5nYW1lTnVtLCB0aGlzLnVwY29taW5nTGluZXMgKiA1KTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMub3Bwb25lbnQuYWRkTGluZXNUb1F1ZXVlKG51bUxpbmVzKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMudFNwaW4gPT09IHRydWUpIHRoaXMudFNwaW5TdHJlYWsgPSB0cnVlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy5jb21ibyA9IC0xO1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLnVwY29taW5nTGluZXMgPiAwKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMucmVjZWl2ZVVwY29taW5nTGluZXModGhpcy51cGNvbWluZ0xpbmVzKTtcbiAgICAgICAgICAgICAgICAgICAgYWRqdXN0UXVldWVIZWlnaHQodGhpcy5nYW1lTnVtLCAwKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IFxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5zY29yZUtlZXBlci5hZGRUb1Njb3JlKG51bUxpbmVzQ2xlYXJlZCk7XG4gICAgICAgIH1cbiAgICAgICAgLy8gcmVzZXQgdFNwaW4gdHJhY2tlclxuICAgICAgICB0aGlzLnRTcGluID0gZmFsc2VcbiAgICAgICAgdGhpcy5jbGVhckdob3N0Q2xhc3MoKTtcbiAgICAgICAgY2FuY2VsQW5pbWF0aW9uRnJhbWUodGhpcy5oYW5kbGVDbGVhci5kcm9wKTtcbiAgICAgICAgLy8gdGhpcy5zdGFydEVsZXZhdGluZygpO1xuICAgICAgICB0aGlzLnBsYXkoKTtcbiAgICB9XG5cbiAgICBkcm9wUGllY2UoZnBzKSB7XG4gICAgICAgIC8vIERvIHdoYXRldmVyXG4gICAgICAgIHRoaXMuYW5pbWF0ZS5kcm9wLmZwc0ludGVydmFsID0gMTAwMCAvIGZwcztcbiAgICAgICAgdGhpcy5hbmltYXRlLmRyb3AudGhlbiA9IERhdGUubm93KCk7XG4gICAgICAgIHRoaXMuYW5pbWF0ZS5kcm9wLnN0YXJ0VGltZSA9IHRoaXMudGhlbjtcbiAgICAgICAgdGhpcy5kcm9wKHRoaXMuZmllbGQpO1xuICAgIH1cblxuICAgIC8vIGluc3BpcmF0aW9uIGZvciB0aHJvdHRsaW5nIHJlcXVlc3RBbmltYXRpb25GcmFtZSBmcm9tIGh0dHBzOi8vc3RhY2tvdmVyZmxvdy5jb20vcXVlc3Rpb25zLzE5NzY0MDE4L2NvbnRyb2xsaW5nLWZwcy13aXRoLXJlcXVlc3RhbmltYXRpb25mcmFtZVxuICAgIGRyb3AoKSB7XG4gICAgICAgIHRoaXMuaGFuZGxlQ2xlYXIuZHJvcCA9IHJlcXVlc3RBbmltYXRpb25GcmFtZSgoKSA9PiB0aGlzLmRyb3AodGhpcy5maWVsZCkpO1xuICAgICAgICB0aGlzLmFuaW1hdGUuZHJvcC5ub3cgPSBEYXRlLm5vdygpO1xuICAgICAgICBsZXQgZWxhcHNlZCA9IHRoaXMuYW5pbWF0ZS5kcm9wLm5vdyAtIHRoaXMuYW5pbWF0ZS5kcm9wLnRoZW47XG4gICAgICAgIGlmIChlbGFwc2VkID4gdGhpcy5hbmltYXRlLmRyb3AuZnBzSW50ZXJ2YWwpIHtcbiAgICAgICAgICAgIC8vIEdldCByZWFkeSBmb3IgbmV4dCBmcmFtZSBieSBzZXR0aW5nIHRoZW49bm93LCBhZGp1c3RpbmcgZm9yIHNwZWNpZmllZCBmcHNJbnRlcnZhbCBub3QgYmVpbmcgYSBtdWx0aXBsZSBvZiBSQUYncyBpbnRlcnZhbCAoMTYuN21zKVxuICAgICAgICAgICAgdGhpcy5hbmltYXRlLmRyb3AudGhlbiA9IHRoaXMuYW5pbWF0ZS5kcm9wLm5vdyAtIChlbGFwc2VkICUgdGhpcy5hbmltYXRlLmRyb3AuZnBzSW50ZXJ2YWwpO1xuICAgICAgICAgICAgdGhpcy5jdXJyZW50UGllY2UucG9wdWxhdGVGaWVsZCh0aGlzLmZpZWxkKTtcbiAgICAgICAgICAgIHRoaXMucmVuZGVyKCk7XG4gICAgICAgICAgICBpZiAoIXRoaXMuY3VycmVudFBpZWNlLmlzRmFsbGluZyh0aGlzLmZpZWxkKSkge1xuICAgICAgICAgICAgICAgIHRoaXMuaGFuZGxlUGllY2VTdG9wKHRoaXMuaGFuZGxlQ2xlYXIuZHJvcCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBwcmV2ZW50cyBpbmNvbWluZyBwaWVjZSBmcm9tIGRlbGV0aW5nIGEgcGllY2UgZGlyZWN0bHkgYmVsb3cgZHVyaW5nIGl0cyBpbml0aWFsIHJlbmRlclxuICAgICAgICAgICAgaWYgKHRoaXMuY3VycmVudFBpZWNlLmJvdHRvbU1vc3RbMF0gIT0gMCB8fCB0aGlzLmN1cnJlbnRQaWVjZS5pc0ZhbGxpbmcodGhpcy5maWVsZCkpIHRoaXMuY3VycmVudFBpZWNlLmRyb3AodGhpcy5maWVsZCk7XG4gICAgICAgICAgICB0aGlzLmN1cnJlbnRQaWVjZS5wb3B1bGF0ZUZpZWxkKHRoaXMuZmllbGQpOyAvLyBrZWVwIG9ubHkgb25lIHBvcHVsYXRlIGZpZWxkP1xuICAgICAgICAgICAgdGhpcy5yZW5kZXIoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIG1vdmVQaWVjZShkaXJlY3Rpb24pIHtcbiAgICAgICAgLy8gRG8gd2hhdGV2ZXJcbiAgICAgICAgdGhpcy5hbmltYXRlW2RpcmVjdGlvbl0uZnBzSW50ZXJ2YWwgPSAxMDAwIC8gdGhpcy5tb3ZlU3BlZWQ7XG4gICAgICAgIHRoaXMuYW5pbWF0ZVtkaXJlY3Rpb25dLnRoZW4gPSBEYXRlLm5vdygpO1xuICAgICAgICB0aGlzLmFuaW1hdGVbZGlyZWN0aW9uXS5zdGFydFRpbWUgPSB0aGlzLmFuaW1hdGVbZGlyZWN0aW9uXS50aGVuO1xuICAgICAgICB0aGlzLm1vdmUoZGlyZWN0aW9uKTtcbiAgICB9XG5cbiAgICAvLyBpbnNwaXJhdGlvbiBmb3IgdGhyb3R0bGluZyByZXF1ZXN0QW5pbWF0aW9uRnJhbWUgZnJvbSBodHRwczovL3N0YWNrb3ZlcmZsb3cuY29tL3F1ZXN0aW9ucy8xOTc2NDAxOC9jb250cm9sbGluZy1mcHMtd2l0aC1yZXF1ZXN0YW5pbWF0aW9uZnJhbWVcbiAgICBtb3ZlKGRpcmVjdGlvbikge1xuICAgICAgICB0aGlzLmhhbmRsZUNsZWFyW2RpcmVjdGlvbl0gPSByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoKCkgPT4gdGhpcy5tb3ZlKGRpcmVjdGlvbikpO1xuICAgICAgICBpZiAoIXRoaXMua2V5SGVsZFtkaXJlY3Rpb25dKSBjYW5jZWxBbmltYXRpb25GcmFtZSh0aGlzLmhhbmRsZUNsZWFyW2RpcmVjdGlvbl0pO1xuICAgICAgICB0aGlzLmFuaW1hdGVbZGlyZWN0aW9uXS5ub3cgPSBEYXRlLm5vdygpO1xuICAgICAgICBsZXQgZWxhcHNlZCA9IHRoaXMuYW5pbWF0ZVtkaXJlY3Rpb25dLm5vdyAtIHRoaXMuYW5pbWF0ZVtkaXJlY3Rpb25dLnRoZW47XG4gICAgICAgIGlmIChlbGFwc2VkID4gdGhpcy5hbmltYXRlW2RpcmVjdGlvbl0uZnBzSW50ZXJ2YWwpIHtcbiAgICAgICAgICAgIC8vIEdldCByZWFkeSBmb3IgbmV4dCBmcmFtZSBieSBzZXR0aW5nIHRoZW49bm93LCBhZGp1c3RpbmcgZm9yIHNwZWNpZmllZCBmcHNJbnRlcnZhbCBub3QgYmVpbmcgYSBtdWx0aXBsZSBvZiBSQUYncyBpbnRlcnZhbCAoMTYuN21zKVxuICAgICAgICAgICAgdGhpcy5hbmltYXRlW2RpcmVjdGlvbl0udGhlbiA9IHRoaXMuYW5pbWF0ZVtkaXJlY3Rpb25dLm5vdyAtIChlbGFwc2VkICUgdGhpcy5hbmltYXRlW2RpcmVjdGlvbl0uZnBzSW50ZXJ2YWwpO1xuXG4gICAgICAgICAgICAvLyBwcmV2ZW50IHBpZWNlIGZyb20gbW92aW5nIGlmIGl0IGlzIGJsb2NrZWQgb3IgaWYgYm90aCBsZWZ0IGFuZCByaWdodCBhcnJvdyBrZXlzIGFyZSBoZWxkIGRvd25cbiAgICAgICAgICAgIGlmIChcbiAgICAgICAgICAgICAgICBkaXJlY3Rpb24gPT09IFwicmlnaHRcIiAmJiB0aGlzLmN1cnJlbnRQaWVjZS5yaWdodFNpZGVCbG9ja2VkKHRoaXMuZmllbGQpIFxuICAgICAgICAgICAgICAgIHx8IFxuICAgICAgICAgICAgICAgIGRpcmVjdGlvbiA9PT0gXCJsZWZ0XCIgJiYgdGhpcy5jdXJyZW50UGllY2UubGVmdFNpZGVCbG9ja2VkKHRoaXMuZmllbGQpIFxuICAgICAgICAgICAgICAgIHx8IFxuICAgICAgICAgICAgICAgIGRpcmVjdGlvbiA9PT0gXCJkb3duXCIgJiYgIXRoaXMuY3VycmVudFBpZWNlLmlzRmFsbGluZyh0aGlzLmZpZWxkKVxuICAgICAgICAgICAgICAgIHx8IFxuICAgICAgICAgICAgICAgIHRoaXMua2V5SGVsZC5yaWdodCAmJiB0aGlzLmtleUhlbGQubGVmdFxuICAgICAgICAgICAgKSByZXR1cm47IFxuXG4gICAgICAgICAgICB0aGlzLmN1cnJlbnRQaWVjZS5tb3ZlKGRpcmVjdGlvbik7XG5cbiAgICAgICAgICAgIHRoaXMuY3VycmVudFBpZWNlLnBvcHVsYXRlRmllbGQodGhpcy5maWVsZCk7XG5cbiAgICAgICAgICAgIC8vIGRvbid0IG5lZWQgdG8gcmUtcG9wdWxhdGUgZ2hvc3QgcG9zaXRpb24gaWYgdGhlIHBpZWNlIGlzIHNvZnQtZHJvcHBpbmdcbiAgICAgICAgICAgIGlmIChkaXJlY3Rpb24gIT09IFwiZG93blwiKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5jbGVhckdob3N0UG9zaXRpb24oKTtcbiAgICAgICAgICAgICAgICB0aGlzLnNldEdob3N0UG9zaXRpb24oKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdGhpcy5yZW5kZXIoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGhhbmRsZVRvcFBpZWNlKCkge1xuICAgICAgICBsZXQgYXRUb3AgPSBmYWxzZTtcbiAgICAgICAgZm9yIChsZXQgaSBpbiB0aGlzLmN1cnJlbnRQaWVjZS5wb3NpdGlvbi5ib3R0b20pIHtcbiAgICAgICAgICAgIGxldCBzcXVhcmUgPSB0aGlzLmN1cnJlbnRQaWVjZS5wb3NpdGlvbi5ib3R0b21baV07XG4gICAgICAgICAgICBsZXQgcm93ID0gc3F1YXJlWzBdO1xuICAgICAgICAgICAgbGV0IGNvbCA9IHNxdWFyZVsxXTtcbiAgICAgICAgICAgIGlmICh0aGlzLmZpZWxkW3Jvd11bY29sXSkge1xuICAgICAgICAgICAgICAgIHRoaXMuY3VycmVudFBpZWNlLm1vdmUoXCJ1cFwiLCB0aGlzLmZpZWxkKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcblxuICAgICAgICBmb3IgKGxldCBpIGluIHRoaXMuY3VycmVudFBpZWNlLnBvc2l0aW9uLmJvdHRvbSkge1xuICAgICAgICAgICAgbGV0IHNxdWFyZSA9IHRoaXMuY3VycmVudFBpZWNlLnBvc2l0aW9uLmJvdHRvbVtpXTtcbiAgICAgICAgICAgIGxldCByb3cgPSBzcXVhcmVbMF07XG4gICAgICAgICAgICBsZXQgY29sID0gc3F1YXJlWzFdO1xuICAgICAgICAgICAgaWYgKHRoaXMuZmllbGRbcm93XVtjb2xdKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5nYW1lT3Zlcih0aGlzLm9wcG9uZW50LmdhbWVOdW0pO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgICAgICAgXG4gICAgICAgIHJldHVybiBhdFRvcDtcbiAgICB9XG4gICAgXG4gICAgcGxheSgpIHtcbiAgICAgICAgdGhpcy5zZXRDdXJyZW50UGllY2UoKTtcbiAgICAgICAgdGhpcy5oYW5kbGVUb3BQaWVjZSgpO1xuICAgICAgICB0aGlzLmN1cnJlbnRQaWVjZS5wb3B1bGF0ZUZpZWxkKHRoaXMuZmllbGQpO1xuICAgICAgICB0aGlzLmFkZFRvQ3VycmVudEJhZygpO1xuICAgICAgICB0aGlzLnNob3dDdXJyZW50QmFnKCk7XG4gICAgICAgIGlmICghdGhpcy5uZXh0QmFnLmxlbmd0aCkgdGhpcy5yZWZpbGxOZXh0QmFnKCk7XG4gICAgICAgIHRoaXMuc2V0R2hvc3RQb3NpdGlvbigpO1xuICAgICAgICAvLyBkcm9wIHBpZWNlIGF0IGdpdmVuIGZwc1xuICAgICAgICB0aGlzLmRyb3BQaWVjZSh0aGlzLmRyb3BTcGVlZCk7ICAgIFxuICAgIH1cblxuICAgIGdhbWVPdmVyKHdpbm5lcikge1xuICAgICAgICB0aGlzLmRyb3BTcGVlZCA9IDA7XG4gICAgICAgIGxldCBnYW1lT3ZlclNjcmVlbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIGdhbWVPdmVyU2NyZWVuLmNsYXNzTGlzdC5hZGQoXCJnYW1lLW92ZXItZGl2XCIpO1xuICAgICAgICBcbiAgICAgICAgbGV0IGdhbWVPdmVySGVhZGluZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMlwiKTtcbiAgICAgICAgZ2FtZU92ZXJIZWFkaW5nLmNsYXNzTGlzdC5hZGQoXCJnYW1lLW92ZXItaGVhZGluZ1wiKTtcblxuICAgICAgICBnYW1lT3ZlckhlYWRpbmcuaW5uZXJIVE1MID0gXCJHQU1FIE9WRVJcIjtcbiAgICAgICAgZ2FtZU92ZXJTY3JlZW4uYXBwZW5kKGdhbWVPdmVySGVhZGluZyk7XG5cbiAgICAgICAgbGV0IHdpbm5lckhlYWRpbmc7XG4gICAgICAgIGlmICh3aW5uZXIpICB7XG4gICAgICAgICAgICB3aW5uZXJIZWFkaW5nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgyXCIpO1xuICAgICAgICAgICAgd2lubmVySGVhZGluZy5jbGFzc0xpc3QuYWRkKFwiZ2FtZS1vdmVyLWhlYWRpbmdcIik7XG4gICAgICAgICAgICB3aW5uZXJIZWFkaW5nLmlubmVySFRNTCA9IGBQTEFZRVIgJHt3aW5uZXJ9IFdJTlNgO1xuICAgICAgICAgICAgZ2FtZU92ZXJTY3JlZW4uYXBwZW5kKHdpbm5lckhlYWRpbmcpXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBsZXQgc2NvcmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpO1xuICAgICAgICAgICAgc2NvcmUuY2xhc3NMaXN0LmFkZChcImdhbWUtb3Zlci1oZWFkaW5nXCIpO1xuICAgICAgICAgICAgc2NvcmUuaW5uZXJIVE1MID0gYCR7dGhpcy5zY29yZUtlZXBlci5nZXRTY29yZSgpfSBQb2ludHNgO1xuICAgICAgICAgICAgZ2FtZU92ZXJTY3JlZW4uYXBwZW5kKHNjb3JlKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoZ2FtZU92ZXJTY3JlZW4pO1xuXG4gICAgICAgIHRoaXMuZ2FtZUlzT3ZlciA9IHRydWU7XG4gICAgICAgIGlmICh0aGlzLm9wcG9uZW50KSB7XG4gICAgICAgICAgICBjYW5jZWxBbmltYXRpb25GcmFtZSh0aGlzLm9wcG9uZW50LmhhbmRsZUNsZWFyLmRyb3ApO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5zdG9wVGltZXIoKTtcbiAgICAgICAgICAgIGNsZWFySW50ZXJ2YWwodGhpcy5jbGVhckVsZXZhdGVJbnRlcnZhbCk7XG4gICAgICAgICAgICBjbGVhckludGVydmFsKHRoaXMuY2xlYXJFbGV2YXRpb24pO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLy8gbXVsdGlwbGF5ZXIgXG4gICAgc2V0T3Bwb25lbnQocGxheWVyKSB7XG4gICAgICAgIHRoaXMub3Bwb25lbnQgPSBwbGF5ZXI7XG4gICAgfVxuXG4gICAgYWRkTGluZXNUb1F1ZXVlKG51bUxpbmVzKSB7XG4gICAgICAgIHRoaXMudXBjb21pbmdMaW5lcyArPSBudW1MaW5lcztcbiAgICAgICAgbGV0IHBlcmNlbnRhZ2UgPSB0aGlzLnVwY29taW5nTGluZXMgKiA1O1xuICAgICAgICBhZGp1c3RRdWV1ZUhlaWdodCh0aGlzLmdhbWVOdW0sIHBlcmNlbnRhZ2UpO1xuICAgIH1cblxuICAgIHJlY2VpdmVVcGNvbWluZ0xpbmVzKCkge1xuICAgICAgICBsZXQgZ2FyYmFnZUxpbmVzID0gW107XG4gICAgICAgIGxldCBudW1MaW5lcyA9IHRoaXMudXBjb21pbmdMaW5lcztcbiAgICAgICAgbGV0IHJhbmRvbUhvbGU7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbnVtTGluZXM7IGkrKykge1xuICAgICAgICAgICAgaWYgKGkgJSAyID09PSAwKSByYW5kb21Ib2xlID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogOSk7XG4gICAgICAgICAgICBsZXQgZ2FyYmFnZVJvdyA9IFs4LCA4LCA4LCA4LCA4LCA4LCA4LCA4LCA4LCA4XTtcbiAgICAgICAgICAgIGdhcmJhZ2VSb3dbcmFuZG9tSG9sZV0gPSAwO1xuICAgICAgICAgICAgZ2FyYmFnZUxpbmVzLnB1c2goZ2FyYmFnZVJvdyk7XG4gICAgICAgIH1cbiAgICAgICAgLy8gaWYgcGxheWVyIHJlYWNoZXMgdGhlIHRvcCwgcGxheWVyIGxvc2VzXG4gICAgICAgIC8vIHNsaWNlIGFsbG93cyBwbGF5ZXIgdG8gY29udGludWUgcGxheWluZyBpZiB0b3AgbWlkZGxlIGlzIGNsZWFyXG4gICAgICAgIGlmICh0aGlzLmZpZWxkW251bUxpbmVzIC0gMV0gJiYgIXRoaXMuZmllbGRbbnVtTGluZXMgLSAxXS5zbGljZSgyLDcpLmluY2x1ZGVzKDApKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5maWVsZCA9IHRoaXMuZmllbGQuc2xpY2UobnVtTGluZXMsIDIwKS5jb25jYXQoZ2FyYmFnZUxpbmVzKTtcbiAgICAgICAgdGhpcy51cGNvbWluZ0xpbmVzID0gMDtcbiAgICAgICAgdGhpcy5yZW5kZXIoKTtcbiAgICB9XG5cbiAgICAvLyBzaW5nbGUgcGxheWVyIGxvZ2ljXG4gICAgc3RhcnRFbGV2YXRpbmcoZWxldmF0ZURlbGF5KSB7XG4gICAgICAgIHRoaXMuY2xlYXJFbGV2YXRlSW50ZXJ2YWwgPSBzZXRJbnRlcnZhbCgoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLmNsZWFyR2hvc3RQb3NpdGlvbigpO1xuICAgICAgICAgICAgdGhpcy5jdXJyZW50UGllY2UuY2xlYXJTZWxmRnJvbUJvYXJkKHRoaXMuZmllbGQpO1xuICAgICAgICAgICAgdGhpcy51cGNvbWluZ0xpbmVzICs9IDE7XG4gICAgICAgICAgICB0aGlzLnJlY2VpdmVVcGNvbWluZ0xpbmVzKCk7XG4gICAgICAgICAgICB0aGlzLnNldEdob3N0UG9zaXRpb24oKTtcbiAgICAgICAgICAgIHRoaXMuY3VycmVudFBpZWNlLnBvcHVsYXRlRmllbGQodGhpcy5maWVsZCk7XG4gICAgICAgICAgICB0aGlzLnJlbmRlcigpO1xuICAgICAgICB9LCBlbGV2YXRlRGVsYXkpXG4gICAgfVxuXG4gICAgYWRqdXN0RWxldmF0ZSgpIHtcbiAgICAgICAgdGhpcy5jbGVhckVsZXZhdGlvbiA9IHNldEludGVydmFsKCgpID0+IHtcbiAgICAgICAgICAgIGlmICh0aGlzLmNsZWFyRWxldmF0ZUludGVydmFsKSBjbGVhckludGVydmFsKHRoaXMuY2xlYXJFbGV2YXRlSW50ZXJ2YWwpO1xuICAgICAgICAgICAgaWYgKHRoaXMuZWxldmF0ZURlbGF5ID4gMjAwMCkgdGhpcy5lbGV2YXRlRGVsYXkgLT0gMjAwO1xuICAgICAgICAgICAgdGhpcy5zdGFydEVsZXZhdGluZyh0aGlzLmVsZXZhdGVEZWxheSk7XG4gICAgICAgIH0sIDEwMDAwKTtcbiAgICB9XG5cbiAgICBzdGFydFRpbWVyKCkge1xuICAgICAgICBsZXQgbWludXRlcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5taW51dGVzJyk7XG4gICAgICAgIGxldCBzZWNvbmRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNlY29uZHMnKTtcbiAgICAgICAgdGhpcy5jbGVhclRpbWVyID0gc2V0SW50ZXJ2YWwoKCkgPT4ge1xuICAgICAgICAgICAgbGV0IG9sZFNlY29uZCA9IE51bWJlcihzZWNvbmRzLmlubmVySFRNTCk7XG4gICAgICAgICAgICBsZXQgb2xkTWludXRlID0gTnVtYmVyKG1pbnV0ZXMuaW5uZXJIVE1MKTtcbiAgICAgICAgICAgIGlmIChvbGRTZWNvbmQgKyAxID09PSA2MCkge1xuICAgICAgICAgICAgICAgIHNlY29uZHMuaW5uZXJIVE1MID0gMDtcbiAgICAgICAgICAgICAgICBtaW51dGVzLmlubmVySFRNTCA9IG9sZE1pbnV0ZSArIDE7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGxldCBuZXdTZWNvbmRzID0gTnVtYmVyKHNlY29uZHMuaW5uZXJIVE1MKSArIDEgPCAxMCA/IGAwJHtOdW1iZXIoc2Vjb25kcy5pbm5lckhUTUwpICsgMX1gIDogTnVtYmVyKHNlY29uZHMuaW5uZXJIVE1MKSArIDE7XG4gICAgICAgICAgICAgICAgc2Vjb25kcy5pbm5lckhUTUwgPSBuZXdTZWNvbmRzO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LCAxMDAwKVxuICAgIH1cblxuICAgIHN0b3BUaW1lcigpIHtcbiAgICAgICAgY2xlYXJJbnRlcnZhbCh0aGlzLmNsZWFyVGltZXIpO1xuICAgIH1cblxuICAgIGNoYW5nZUNvbnRyb2xzKCkge1xuICAgICAgICB0aGlzLmNvbnRyb2xzID0geyBsZWZ0OiAzNywgcmlnaHQ6IDM5LCB0dXJuUmlnaHQ6IDM4LCBzb2Z0RHJvcDogNDAsIGhvbGQ6IDE2LCB0dXJuTGVmdDogNjcsIGhhcmREcm9wOiAzMiB9XG4gICAgfVxufSIsImltcG9ydCBNZW51IGZyb20gJy4vbWVudS9tZW51J1xuXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCAoKSA9PiB7XG4gICAgY29uc3QgbWVudSA9IG5ldyBNZW51O1xuICAgIG1lbnUucmVuZGVyTWVudSgpO1xufSk7IiwiaW1wb3J0IEdhbWUgZnJvbSAnLi4vZ2FtZS9nYW1lJztcbmltcG9ydCBGaWVsZCBmcm9tICcuLi9maWVsZC9maWVsZCc7XG5pbXBvcnQgTXVsdGlwbGF5ZXIgZnJvbSAnLi4vbXVsdGlwbGF5ZXIvbXVsdGlwbGF5ZXInO1xuaW1wb3J0IE1vZGFsIGZyb20gJy4uL21vZGFsL21vZGFsJztcbmltcG9ydCBTaW5nbGVQbGF5ZXJDb250ZW50IGZyb20gJy4uL21vZGFsL3NpbmdsZVBsYXllckNvbnRlbnQnO1xuaW1wb3J0IE11bHRpcGxheWVyQ29udGVudCBmcm9tICcuLi9tb2RhbC9tdWx0aXBsYXllckNvbnRlbnQnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNZW51IHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5tZW51ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJtZW51XCIpO1xuXG4gICAgICAgIHRoaXMub3B0aW9uc1BsYXllcjEgPSB7IGdhbWVOdW06IDEsIG1vdmVTcGVlZDogMjAsIGNvbnRyb2xzOiB7IGxlZnQ6IDY1LCByaWdodDogNjgsIHR1cm5SaWdodDogODcsIHNvZnREcm9wOiA4MywgaG9sZDogODEsIHR1cm5MZWZ0OiAxOTIsIGhhcmREcm9wOiA0OSB9IH1cbiAgICAgICAgdGhpcy5vcHRpb25zUGxheWVyMiA9IHsgZ2FtZU51bTogMiwgbW92ZVNwZWVkOiAyMCwgY29udHJvbHM6IHsgbGVmdDogMzcsIHJpZ2h0OiAzOSwgdHVyblJpZ2h0OiAzOCwgc29mdERyb3A6IDQwLCBob2xkOiAxNiwgdHVybkxlZnQ6IDc1LCBoYXJkRHJvcDogMTkwIH0gfVxuICAgICAgICAgICAgXG5cbiAgICAgICAgdGhpcy5nYW1lMSA9IG5ldyBHYW1lKHRoaXMub3B0aW9uc1BsYXllcjEpO1xuICAgICAgICB0aGlzLmdhbWUyID0gbmV3IEdhbWUodGhpcy5vcHRpb25zUGxheWVyMik7XG5cbiAgICAgICAgdGhpcy5maWVsZDEgPSBuZXcgRmllbGQoMSk7XG4gICAgICAgIHRoaXMuZmllbGQyID0gbmV3IEZpZWxkKDIpO1xuXG4gICAgICAgIHRoaXMubXVsdGlwbGF5ZXJNb2RlID0gbmV3IE11bHRpcGxheWVyKHRoaXMuZ2FtZTEsIHRoaXMuZ2FtZTIpO1xuXG4gICAgICAgIHRoaXMuZmllbGRDb250YWluZXIxID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJmaWVsZC1jb250YWluZXItMVwiKTtcbiAgICAgICAgdGhpcy5maWVsZENvbnRhaW5lcjIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImZpZWxkLWNvbnRhaW5lci0yXCIpO1xuXG4gICAgICAgIHRoaXMuc2luZ2xlUGxheWVyQ29udGVudCA9IG5ldyBTaW5nbGVQbGF5ZXJDb250ZW50KCk7XG4gICAgICAgIHRoaXMubXVsdGlwbGF5ZXJDb250ZW50ID0gbmV3IE11bHRpcGxheWVyQ29udGVudCgpO1xuICAgICAgICB0aGlzLm1vZGFsID0gbmV3IE1vZGFsKCk7XG4gICAgfVxuXG4gICAgcmVuZGVyQnV0dG9ucygpIHtcbiAgICAgICAgbGV0IHNpbmdsZVBsYXllckJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIGxldCBtdWx0aXBsYXllckJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5cbiAgICAgICAgc2luZ2xlUGxheWVyQnV0dG9uLmNsYXNzTGlzdC5hZGQoXCJzaW5nbGUtcGxheWVyLWJ1dHRvblwiKTtcbiAgICAgICAgbXVsdGlwbGF5ZXJCdXR0b24uY2xhc3NMaXN0LmFkZChcIm11bHRpcGxheWVyLWJ1dHRvblwiKTtcblxuICAgICAgICBzaW5nbGVQbGF5ZXJCdXR0b24uaW5uZXJIVE1MID0gXCJTaW5nbGUgUGxheWVyXCI7XG4gICAgICAgIG11bHRpcGxheWVyQnV0dG9uLmlubmVySFRNTCA9IFwiTXVsdGlwbGF5ZXJcIjtcblxuICAgICAgICB0aGlzLmFkZEV2ZW50TGlzdGVuZXJzKHNpbmdsZVBsYXllckJ1dHRvbiwgbXVsdGlwbGF5ZXJCdXR0b24pO1xuXG4gICAgICAgIHJldHVybiBbc2luZ2xlUGxheWVyQnV0dG9uLCBtdWx0aXBsYXllckJ1dHRvbl07XG4gICAgfVxuXG4gICAgYWRkRXZlbnRMaXN0ZW5lcnMoc2luZ2xlUGxheWVyQnV0dG9uLCBtdWx0aXBsYXllckJ1dHRvbikge1xuICAgICAgICBzaW5nbGVQbGF5ZXJCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLnJlbmRlclNpbmdsZVBsYXllcigpO1xuICAgICAgICB9KTtcbiAgICAgICAgbXVsdGlwbGF5ZXJCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLnJlbmRlck11bHRpcGxheWVyKCk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHJlbmRlclNpbmdsZVBsYXllcigpIHtcbiAgICAgICAgLy8gZG9jdW1lbnQuYm9keS5yZW1vdmVDaGlsZCh0aGlzLm1lbnUpO1xuICAgICAgICB0aGlzLm1lbnUuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICAgICAgICBkb2N1bWVudC5ib2R5LnN0eWxlLmp1c3RpZnlDb250ZW50ID0gJ25vbmUnO1xuICAgICAgICB0aGlzLnNpbmdsZVBsYXllckNvbnRlbnQuY3JlYXRlQWxsQ29udGVudCgpO1xuICAgICAgICB0aGlzLmZpZWxkMS5jcmVhdGVDb21wbGV0ZUZpZWxkKHRoaXMuZmllbGRDb250YWluZXIxKTtcbiAgICAgICAgdGhpcy5maWVsZENvbnRhaW5lcjEuc3R5bGUucG9zaXRpb24gPSAncmVsYXRpdmUnO1xuICAgICAgICB0aGlzLmZpZWxkQ29udGFpbmVyMS5zdHlsZS5sZWZ0ID0gJzE0dncnO1xuICAgICAgICB0aGlzLmdhbWUxLmtleUxpc3RlbmVyKCk7XG4gICAgICAgIHRoaXMuZ2FtZTEuY2hhbmdlQ29udHJvbHMoKTtcbiAgICAgICAgdGhpcy5nYW1lMS5wbGF5KCk7XG4gICAgICAgIHRoaXMuZ2FtZTEuc3RhcnRFbGV2YXRpbmcoNTAwMCk7XG4gICAgICAgIHRoaXMuZ2FtZTEuYWRqdXN0RWxldmF0ZSgpO1xuICAgICAgICB0aGlzLnNpbmdsZVBsYXllckNvbnRlbnQuY3JlYXRlVGltZXIoKTtcbiAgICAgICAgdGhpcy5nYW1lMS5zdGFydFRpbWVyKCk7XG4gICAgfVxuXG4gICAgcmVuZGVyTXVsdGlwbGF5ZXIoKSB7XG4gICAgICAgIGRvY3VtZW50LmJvZHkucmVtb3ZlQ2hpbGQodGhpcy5tZW51KTtcbiAgICAgICAgdGhpcy5maWVsZDEuY3JlYXRlQ29tcGxldGVGaWVsZCh0aGlzLmZpZWxkQ29udGFpbmVyMSk7XG4gICAgICAgIHRoaXMuZ2FtZTEua2V5TGlzdGVuZXIoKTtcblxuICAgICAgICB0aGlzLmZpZWxkMi5jcmVhdGVDb21wbGV0ZUZpZWxkKHRoaXMuZmllbGRDb250YWluZXIyKTtcbiAgICAgICAgdGhpcy5nYW1lMi5rZXlMaXN0ZW5lcigpO1xuXG4gICAgICAgIGxldCBjb250cm9sc0NvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBjb250cm9sc0NvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdjb250cm9scy1jb250YWluZXInKVxuICAgICAgICBjb250cm9sc0NvbnRhaW5lci5hcHBlbmRDaGlsZCh0aGlzLm11bHRpcGxheWVyQ29udGVudC5jcmVhdGVDb250cm9sc0NvbnRlbnQoJ3BsYXllcjEnKSk7XG4gICAgICAgIGNvbnRyb2xzQ29udGFpbmVyLmFwcGVuZENoaWxkKHRoaXMubXVsdGlwbGF5ZXJDb250ZW50LmNyZWF0ZUNvbnRyb2xzQ29udGVudCgncGxheWVyMicpKTtcbiAgICAgICAgdGhpcy5tb2RhbC5jcmVhdGUoKTtcbiAgICAgICAgdGhpcy5tb2RhbC5hcHBlbmRDaGlsZChjb250cm9sc0NvbnRhaW5lcik7XG4gICAgICAgIHRoaXMubW9kYWwuYXBwZW5kQ2hpbGQodGhpcy5fY3JlYXRlQ2xvc2VNb2RhbExpbmsoKSk7XG4gICAgfVxuXG4gICAgcmVuZGVyTWVudSgpIHtcbiAgICAgICAgbGV0IGJ1dHRvbkNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIGJ1dHRvbkNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwiYnV0dG9uLWNvbnRhaW5lclwiKTtcbiAgICAgICAgdGhpcy5yZW5kZXJCdXR0b25zKCkuZm9yRWFjaChidXR0b24gPT4ge1xuICAgICAgICAgICAgYnV0dG9uQ29udGFpbmVyLmFwcGVuZENoaWxkKGJ1dHRvbik7XG4gICAgICAgIH0pXG4gICAgICAgIHRoaXMubWVudS5hcHBlbmRDaGlsZChidXR0b25Db250YWluZXIpO1xuICAgIH1cblxuICAgIF9jcmVhdGVDbG9zZU1vZGFsTGluaygpIHtcbiAgICAgICAgbGV0IGNsb3NlTGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBjbG9zZUxpbmsuY2xhc3NMaXN0LmFkZCgnY2xvc2UtbW9kYWwtbGluaycpO1xuICAgICAgICBjbG9zZUxpbmsuaW5uZXJIVE1MID0gXCJMZXQncyBnZXQgc3RhcnRlZC5cIjtcblxuICAgICAgICBjbG9zZUxpbmsuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLm1vZGFsLnJlbW92ZSgpO1xuICAgICAgICAgICAgdGhpcy5tdWx0aXBsYXllck1vZGUuc3RhcnRNdWx0aXBsYXllcigpO1xuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIGNsb3NlTGluaztcbiAgICB9XG5cbiAgICByZXR1cm5Ub01lbnUoKSB7XG4gICAgICAgIGxldCBmaWVsZENvbnRhaW5lcjEgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZmllbGQtY29udGFpbmVyLTEnKTtcbiAgICAgICAgbGV0IGZpZWxkQ29udGFpbmVyMiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdmaWVsZC1jb250YWluZXItMicpO1xuICAgICAgICBsZXQgc2luZ2xlUGxheWVyQ29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ3NpbmdsZS1wbGF5ZXItY29udGVudCcpO1xuICAgICAgICBbZmllbGRDb250YWluZXIxLCBmaWVsZENvbnRhaW5lcjIsIHNpbmdsZVBsYXllckNvbnRlbnRdLmZvckVhY2goaXRlbSA9PiB7XG4gICAgICAgICAgICBkb2N1bWVudC5ib2R5LnJlbW92ZShpdGVtKTtcbiAgICAgICAgfSk7XG4gICAgfVxufSIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIE1vZGFsIHtcbiAgICBjcmVhdGUoKSB7XG4gICAgICAgIGxldCBtb2RhbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBtb2RhbC5jbGFzc0xpc3QuYWRkKCdjb250cm9scy1tb2RhbCcpO1xuICAgICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKG1vZGFsKTtcbiAgICB9XG4gICAgXG4gICAgYXBwZW5kQ2hpbGQoY29udGVudCkge1xuICAgICAgICBsZXQgbW9kYWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29udHJvbHMtbW9kYWwnKTtcbiAgICAgICAgbW9kYWwuYXBwZW5kQ2hpbGQoY29udGVudCk7XG4gICAgfVxuXG4gICAgcmVtb3ZlKCkge1xuICAgICAgICBsZXQgbW9kYWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29udHJvbHMtbW9kYWwnKTtcbiAgICAgICAgbW9kYWwucmVtb3ZlKCk7XG4gICAgfVxufSIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIE11bHRpcGxheWVyQ29udGVudCB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMua2V5cyA9IHtcbiAgICAgICAgICAgIHBsYXllcjE6IHtcbiAgICAgICAgICAgICAgICAnd19rZXknOiAnVFVSTiBSSUdIVCcsXG4gICAgICAgICAgICAgICAgJ2Ffa2V5JzogJ0xFRlQnLFxuICAgICAgICAgICAgICAgICdzX2tleSc6ICdTT0ZUIERST1AnLFxuICAgICAgICAgICAgICAgICdkX2tleSc6ICdSSUdIVCcsXG4gICAgICAgICAgICAgICAgJ2Bfa2V5JzogJ1RVUk4gTEVGVCcsXG4gICAgICAgICAgICAgICAgJ3Ffa2V5JzogJ0hPTEQnLFxuICAgICAgICAgICAgICAgICcxX2tleSc6ICdIQVJERFJPUCdcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBwbGF5ZXIyOiB7XG4gICAgICAgICAgICAgICAgJ3VwX2tleSc6ICdUVVJOIFJJR0hUJyxcbiAgICAgICAgICAgICAgICAnbGVmdF9rZXknOiAnTEVGVCcsXG4gICAgICAgICAgICAgICAgJ2Rvd25fa2V5JzogJ1NPRlQgRFJPUCcsXG4gICAgICAgICAgICAgICAgJ3JpZ2h0X2tleSc6ICdSSUdIVCcsXG4gICAgICAgICAgICAgICAgJ2tfa2V5JzogJ1RVUk4gTEVGVCcsXG4gICAgICAgICAgICAgICAgJ3NoaWZ0X2tleSc6ICdIT0xEJyxcbiAgICAgICAgICAgICAgICAncGVyaW9kX2tleSc6ICdIQVJERFJPUCdcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcblxuICAgIH1cblxuICAgIGNyZWF0ZUNvbnRyb2xzQ29udGVudChwbGF5ZXIpIHtcbiAgICAgICAgbGV0IGNvbnRyb2xzRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGNvbnRyb2xzRGl2LmNsYXNzTGlzdC5hZGQoJ2NvbnRyb2xzJyk7XG4gICAgICAgIGxldCBpbWFnZXMgPSBPYmplY3Qua2V5cyh0aGlzLmtleXNbcGxheWVyXSk7XG4gICAgICAgIGxldCBkZXNjcmlwdGlvbnMgPSBPYmplY3QudmFsdWVzKHRoaXMua2V5c1twbGF5ZXJdKTtcblxuICAgICAgICAvLyBpbml0aWFsaXplIGFycmF5cyBvZiBzcGFucyBhbmQgZGl2c1xuICAgICAgICBsZXQgc3BhbnMgPSBbXTtcbiAgICAgICAgbGV0IGRpdnMgPSBbXTtcblxuICAgICAgICBsZXQgbGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoZWFkZXInKTtcbiAgICAgICAgbGFiZWwuaW5uZXJIVE1MID0gYFBMQVlFUiAke3BsYXllci5zbGljZSg2KX1gXG4gICAgICAgIGNvbnRyb2xzRGl2LmFwcGVuZENoaWxkKGxhYmVsKTtcblxuICAgICAgICAvLyBjcmVhdGUgZWxlbWVudHMgYW5kIHN0b3JlIGludG8gYXJyYXkgaW5kaWNlcyBmb3IgbGF0ZXIgcmVmZXJlbmNlXG4gICAgICAgIGZvciAobGV0IGkgPSAxOyBpIDw9IDc7IGkrKykge1xuICAgICAgICAgICAgc3BhbnNbaV0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gICAgICAgICAgICBpZiAoaSA8PSAzKSBkaXZzW2ldID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIH1cblxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGltYWdlcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgbGV0IHAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgICAgICAgICBsZXQgaW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gICAgICAgICAgICBpbWcuY2xhc3NMaXN0LmFkZCgna2V5Ym9hcmQta2V5Jyk7XG4gICAgICAgICAgICBpZiAoaSA9PT0gNSAmJiBwbGF5ZXIgPT09IFwicGxheWVyMlwiKSBpbWcuY2xhc3NMaXN0LmFkZCgnc2hpZnQta2V5Jyk7XG5cbiAgICAgICAgICAgIHAuaW5uZXJIVE1MID0gZGVzY3JpcHRpb25zW2ldO1xuICAgICAgICAgICAgaW1nLnNldEF0dHJpYnV0ZSgnc3JjJywgYC4vYXNzZXRzL2ltYWdlcy8ke2ltYWdlc1tpXX0ucG5nYCk7XG5cbiAgICAgICAgICAgIHNwYW5zW2kgKyAxXS5hcHBlbmQoaW1nKTtcbiAgICAgICAgICAgIHNwYW5zW2kgKyAxXS5hcHBlbmQocCk7XG5cbiAgICAgICAgICAgIGlmIChpIDwgMSkge1xuICAgICAgICAgICAgICAgIGRpdnNbMV0uYXBwZW5kKHNwYW5zW2kgKyAxXSk7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKGkgPCA0KSB7XG4gICAgICAgICAgICAgICAgZGl2c1syXS5hcHBlbmQoc3BhbnNbaSArIDFdKTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoaSA8IDcpIHtcbiAgICAgICAgICAgICAgICBkaXZzWzNdLmFwcGVuZChzcGFuc1tpICsgMV0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgZm9yIChsZXQgaSA9IDE7IGkgPD0gMzsgaSsrKSB7XG4gICAgICAgICAgICBjb250cm9sc0Rpdi5hcHBlbmQoZGl2c1tpXSk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gY29udHJvbHNEaXY7XG4gICAgfVxufSIsImltcG9ydCBTY29yZUtlZXBlciBmcm9tICcuLi9zY29yZWtlZXBlci9zY29yZWtlZXBlcic7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNpbmdsZVBsYXllckNvbnRlbnQge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLmtleXMgPSB7XG4gICAgICAgICAgICAnbGVmdF9rZXknOiAnTEVGVCcsXG4gICAgICAgICAgICAncmlnaHRfa2V5JzogJ1JJR0hUJyxcbiAgICAgICAgICAgICdkb3duX2tleSc6ICdTT0ZUIERST1AnLFxuICAgICAgICAgICAgJ3VwX2tleSc6ICdUVVJOIFJJR0hUJyxcbiAgICAgICAgICAgICdjX2tleSc6ICdUVVJOIExFRlQnLFxuICAgICAgICAgICAgJ3NoaWZ0X2tleSc6ICdIT0xEJyxcbiAgICAgICAgICAgICdzcGFjZV9rZXknOiAnSEFSRERST1AnLFxuICAgICAgICB9O1xuXG4gICAgICAgIHRoaXMuc2NvcmVLZWVwZXIgPSBuZXcgU2NvcmVLZWVwZXIoKTtcbiAgICB9XG5cbiAgICBjcmVhdGVBbGxDb250ZW50KCkge1xuICAgICAgICBsZXQgYWxsU2luZ2xlUGxheWVyQ29udGVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBhbGxTaW5nbGVQbGF5ZXJDb250ZW50LmNsYXNzTGlzdC5hZGQoJ3NpbmdsZS1wbGF5ZXItY29udGVudCcpO1xuICAgICAgICBhbGxTaW5nbGVQbGF5ZXJDb250ZW50LmFwcGVuZENoaWxkKHRoaXMuY3JlYXRlVGltZXIoKSk7XG4gICAgICAgIGFsbFNpbmdsZVBsYXllckNvbnRlbnQuYXBwZW5kQ2hpbGQodGhpcy5zY29yZUtlZXBlci5jcmVhdGVTY29yZUtlZXBlcigpKTtcbiAgICAgICAgYWxsU2luZ2xlUGxheWVyQ29udGVudC5hcHBlbmRDaGlsZCh0aGlzLmNyZWF0ZUNvbnRyb2xzQ29udGVudCgpKTtcbiAgICAgICAgZG9jdW1lbnQuYm9keS5hcHBlbmQoYWxsU2luZ2xlUGxheWVyQ29udGVudCk7XG4gICAgfVxuXG4gICAgY3JlYXRlQ29udHJvbHNDb250ZW50KCkge1xuICAgICAgICBsZXQgY29udGVudERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBjb250ZW50RGl2LmNsYXNzTGlzdC5hZGQoJ2NvbnRyb2xzJyk7XG4gICAgICAgIGxldCBpbWFnZXMgPSBPYmplY3Qua2V5cyh0aGlzLmtleXMpO1xuICAgICAgICBsZXQgZGVzY3JpcHRpb25zID0gT2JqZWN0LnZhbHVlcyh0aGlzLmtleXMpO1xuXG4gICAgICAgIC8vIGluaXRpYWxpemUgYXJyYXlzIG9mIHNwYW5zIGFuZCBkaXZzXG4gICAgICAgIGxldCBzcGFucyA9IFtdO1xuICAgICAgICBsZXQgZGl2cyA9IFtdO1xuXG4gICAgICAgIC8vIGNyZWF0ZSBlbGVtZW50cyBhbmQgc3RvcmUgaW50byBhcnJheSBpbmRpY2VzIGZvciBsYXRlciByZWZlcmVuY2VcbiAgICAgICAgZm9yIChsZXQgaSA9IDE7IGkgPD0gNzsgaSsrKSB7XG4gICAgICAgICAgICBzcGFuc1tpXSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgICAgICAgICAgIGlmIChpIDw9IDQpIGRpdnNbaV0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgaW1hZ2VzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBsZXQgcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICAgICAgICAgIGxldCBpbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgICAgICAgICAgIGltZy5jbGFzc0xpc3QuYWRkKCdrZXlib2FyZC1rZXknKTtcbiAgICAgICAgICAgIGlmIChpID09PSA1KSBpbWcuY2xhc3NMaXN0LmFkZCgnc2hpZnQta2V5Jyk7XG4gICAgICAgICAgICBpZiAoaSA9PT0gNikgaW1nLmNsYXNzTGlzdC5hZGQoJ3NwYWNlLWtleScpO1xuXG4gICAgICAgICAgICBwLmlubmVySFRNTCA9IGRlc2NyaXB0aW9uc1tpXTtcbiAgICAgICAgICAgIGltZy5zZXRBdHRyaWJ1dGUoJ3NyYycsIGAuL2Fzc2V0cy9pbWFnZXMvJHtpbWFnZXNbaV19LnBuZ2ApO1xuXG4gICAgICAgICAgICBzcGFuc1tpICsgMV0uYXBwZW5kKGltZyk7XG4gICAgICAgICAgICBzcGFuc1tpICsgMV0uYXBwZW5kKHApO1xuXG4gICAgICAgICAgICBpZiAoaSA8IDIpIHtcbiAgICAgICAgICAgICAgICBkaXZzWzFdLmFwcGVuZChzcGFuc1tpICsgMV0pO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChpIDwgNCkge1xuICAgICAgICAgICAgICAgIGRpdnNbMl0uYXBwZW5kKHNwYW5zW2kgKyAxXSk7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKGkgPCA2KSB7XG4gICAgICAgICAgICAgICAgZGl2c1szXS5hcHBlbmQoc3BhbnNbaSArIDFdKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgZGl2c1s0XS5hcHBlbmQoc3BhbnNbaSArIDFdKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGZvciAobGV0IGkgPSAxOyBpIDw9IDQ7IGkrKykge1xuICAgICAgICAgICAgY29udGVudERpdi5hcHBlbmQoZGl2c1tpXSk7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIHJldHVybiBjb250ZW50RGl2O1xuICAgIH1cblxuICAgIGNyZWF0ZVRpbWVyKCkge1xuICAgICAgICBsZXQgdGltZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgbGV0IG1pbnV0ZXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgICAgIGxldCBzZWNvbmRzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgICAgICBsZXQgY29sb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgICAgIHRpbWVyLmNsYXNzTGlzdC5hZGQoJ3RpbWVyJyk7XG4gICAgICAgIG1pbnV0ZXMuY2xhc3NMaXN0LmFkZCgnbWludXRlcycpO1xuICAgICAgICBzZWNvbmRzLmNsYXNzTGlzdC5hZGQoJ3NlY29uZHMnKTtcbiAgICAgICAgY29sb24uY2xhc3NMaXN0LmFkZCgnY29sb24nKTtcbiAgICAgICAgbWludXRlcy5pbm5lckhUTUwgPSAnMCc7XG4gICAgICAgIHNlY29uZHMuaW5uZXJIVE1MID0gJzAwJztcbiAgICAgICAgY29sb24uaW5uZXJIVE1MID0gJzonO1xuICAgICAgICBbbWludXRlcywgY29sb24sIHNlY29uZHNdLmZvckVhY2goZWxlID0+IHRpbWVyLmFwcGVuZENoaWxkKGVsZSkpO1xuICAgICAgICByZXR1cm4gdGltZXI7XG4gICAgfVxuXG4gICAgXG59IiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgTXVsdGlwbGF5ZXIge1xuICAgIGNvbnN0cnVjdG9yKHBsYXllcjEsIHBsYXllcjIpIHtcbiAgICAgICAgdGhpcy5wbGF5ZXIxID0gcGxheWVyMTtcbiAgICAgICAgdGhpcy5wbGF5ZXIyID0gcGxheWVyMjtcbiAgICB9XG5cbiAgICBzdGFydE11bHRpcGxheWVyKCkge1xuICAgICAgICB0aGlzLnBsYXllcjEuc2V0T3Bwb25lbnQodGhpcy5wbGF5ZXIyKTtcbiAgICAgICAgdGhpcy5wbGF5ZXIyLnNldE9wcG9uZW50KHRoaXMucGxheWVyMSk7XG4gICAgICAgIHRoaXMucGxheWVyMS5wbGF5KCk7XG4gICAgICAgIHRoaXMucGxheWVyMi5wbGF5KCk7XG4gICAgfVxufVxuIiwiaW1wb3J0IFBpZWNlIGZyb20gJy4vcGllY2UnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBJUGllY2UgZXh0ZW5kcyBQaWVjZSB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIHRoaXMubmFtZSA9IFwiSVBpZWNlXCI7XG4gICAgICAgIHRoaXMucG9zaXRpb24gPSB7XG4gICAgICAgICAgICB0b3A6IFtdLFxuICAgICAgICAgICAgbWlkZGxlOiBbXSxcbiAgICAgICAgICAgIGJvdHRvbTogW1swLCAzXSwgWzAsIDRdLCBbMCwgNV0sIFswLCA2XV1cbiAgICAgICAgfTtcbiAgICAgICAgdGhpcy5jb2xvckNvZGUgPSAyO1xuICAgICAgICB0aGlzLnR1cm5pbmdQb2ludCA9IFsxLCA0XTtcbiAgICAgICAgdGhpcy5kaXNwbGF5U3F1YXJlcyA9IFtbMCwgMl0sIFsxLCAyXSwgWzIsIDJdLCBbMywgMl1dO1xuXG4gICAgICAgIHRoaXMucmVtb3ZlU3F1YXJlcyA9IFtdO1xuXG4gICAgICAgIHRoaXMub2Zmc2V0R3VpZGUgPSB7XG4gICAgICAgICAgICAwOiBbWzAsIDBdLCBbMCwgLTFdLCBbMCwgMl0sIFswLCAtMV0sIFswLCAyXV0sXG4gICAgICAgICAgICAxOiBbWzAsIC0xXSwgWzAsIDBdLCBbMCwgMF0sIFsxLCAwXSwgWy0yLCAwXV0sXG4gICAgICAgICAgICAyOiBbWzEsIC0xXSwgWzEsIDFdLCBbMSwgLTJdLCBbMCwgMV0sIFswLCAtMl1dLFxuICAgICAgICAgICAgMzogW1sxLCAwXSwgWzEsIDBdLCBbMSwgMF0sIFstMSwgMF0sIFsyLCAwXV1cbiAgICAgICAgfVxuICAgIH1cblxuXG59XG5cblxuIiwiaW1wb3J0IFBpZWNlIGZyb20gJy4vcGllY2UnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBqUGllY2UgZXh0ZW5kcyBQaWVjZSB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIHRoaXMubmFtZSA9IFwiSlBpZWNlXCI7XG4gICAgICAgIHRoaXMucG9zaXRpb24gPSB7XG4gICAgICAgICAgICB0b3A6IFtbMCwgM11dLFxuICAgICAgICAgICAgbWlkZGxlOiBbXSxcbiAgICAgICAgICAgIGJvdHRvbTogW1sxLCAzXSwgWzEsIDRdLCBbMSwgNV1dXG4gICAgICAgIH07XG4gICAgICAgIHRoaXMuY29sb3JDb2RlID0gNztcblxuICAgICAgICB0aGlzLnR1cm5pbmdQb2ludCA9IFsxLCA0XTtcblxuICAgICAgICB0aGlzLmRpc3BsYXlTcXVhcmVzID0gW1sxLCAxXSwgWzEsIDJdLCBbMiwgMl0sIFszLCAyXV07XG4gXG4gICAgICAgIHRoaXMucmVtb3ZlU3F1YXJlcyA9IFtdO1xuICAgIH1cbn0iLCJpbXBvcnQgUGllY2UgZnJvbSAnLi9waWVjZSc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIGxQaWVjZSBleHRlbmRzIFBpZWNlIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgdGhpcy5uYW1lID0gXCJMUGllY2VcIjtcbiAgICAgICAgdGhpcy5wb3NpdGlvbiA9IHtcbiAgICAgICAgICAgIHRvcDogW1swLCA1XV0sXG4gICAgICAgICAgICBtaWRkbGU6IFtdLFxuICAgICAgICAgICAgYm90dG9tOiBbWzEsIDNdLCBbMSwgNF0sIFsxLCA1XV1cbiAgICAgICAgfTtcbiAgICAgICAgdGhpcy5jb2xvckNvZGUgPSA2O1xuXG4gICAgICAgIHRoaXMudHVybmluZ1BvaW50ID0gWzEsIDRdO1xuXG4gICAgICAgIHRoaXMuZGlzcGxheVNxdWFyZXMgPSBbWzEsIDJdLCBbMiwgMl0sIFszLCAyXSwgWzMsIDFdXTtcblxuICAgICAgICB0aGlzLnJlbW92ZVNxdWFyZXMgPSBbXTtcbiAgICB9XG59IiwiaW1wb3J0IFBpZWNlIGZyb20gJy4vcGllY2UnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBPUGllY2UgZXh0ZW5kcyBQaWVjZSB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIHRoaXMubmFtZSA9IFwiT1BpZWNlXCI7XG4gICAgICAgIHRoaXMucG9zaXRpb24gPSB7XG4gICAgICAgICAgICB0b3A6IFtbMCwgNF0sIFswLCA1XV0sXG4gICAgICAgICAgICBtaWRkbGU6IFtdLFxuICAgICAgICAgICAgYm90dG9tOiBbWzEsIDRdLFsxLCA1XV1cbiAgICAgICAgfTtcbiAgICAgICAgdGhpcy5jb2xvckNvZGUgPSAxO1xuICAgICAgICB0aGlzLnR1cm5pbmdQb2ludCA9IFsxLCA0XTtcbiAgICAgICAgdGhpcy5kaXNwbGF5U3F1YXJlcyA9IFtbMSwgMV0sIFsyLCAxXSwgWzEsIDJdLCBbMiwgMl1dO1xuXG4gICAgICAgIHRoaXMucmVtb3ZlU3F1YXJlcyA9IFtdO1xuICAgIH1cblxuICAgIC8vIE9QaWVjZSBkb2VzIG5vdCB0dXJuXG4gICAgdHVyblJpZ2h0KCkge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIFxuICAgIHR1cm5MZWZ0KCkge1xuICAgICAgICByZXR1cm47XG4gICAgfVxufSAiLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBQaWVjZSB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMubGVmdE1vc3QgPSAnJztcbiAgICAgICAgdGhpcy5yaWdodE1vc3QgPSAnJztcbiAgICAgICAgdGhpcy5ib3R0b21Nb3N0ID0gJyc7XG4gICAgICAgIHRoaXMudG9wTW9zdCA9ICcnO1xuXG4gICAgICAgIHRoaXMucm90YXRpb25TdGF0ZSA9IDA7XG5cbiAgICAgICAgdGhpcy5vZmZzZXRHdWlkZSA9IHtcbiAgICAgICAgICAgIDA6IFtbMCwgMF0sIFswLCAwXSwgWzAsIDBdLCBbMCwgMF0sIFswLCAwXV0sXG4gICAgICAgICAgICAxOiBbWzAsIDBdLCBbMCwgMV0sIFstMSwgMV0sIFsyLCAwXSwgWzIsIDFdXSxcbiAgICAgICAgICAgIDI6IFtbMCwgMF0sIFswLCAwXSwgWzAsIDBdLCBbMCwgMF0sIFswLCAwXV0sXG4gICAgICAgICAgICAzOiBbWzAsIDBdLCBbMCwgLTFdLCBbLTEsIC0xXSwgWzIsIDBdLCBbMiwgLTFdXVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgc2V0T3V0ZXJTcXVhcmVzKCkge1xuICAgICAgICBsZXQgbGVmdE1vc3QsIHJpZ2h0TW9zdCwgdG9wTW9zdCwgYm90dG9tTW9zdDtcbiAgICAgICAgT2JqZWN0LnZhbHVlcyh0aGlzLnBvc2l0aW9uKS5mb3JFYWNoKGNvb3JkaW5hdGVzQXJyYXkgPT4gY29vcmRpbmF0ZXNBcnJheS5mb3JFYWNoKGFycmF5ID0+IHtcbiAgICAgICAgICAgIGxldCBjb2x1bW5WYWx1ZSA9IGFycmF5WzFdO1xuICAgICAgICAgICAgbGV0IHJvd1ZhbHVlID0gYXJyYXlbMF07XG4gICAgICAgICAgICBpZiAoIWxlZnRNb3N0IHx8IGNvbHVtblZhbHVlIDwgbGVmdE1vc3RbMV0pIGxlZnRNb3N0ID0gW3Jvd1ZhbHVlLCBjb2x1bW5WYWx1ZV07XG4gICAgICAgICAgICBpZiAoIXJpZ2h0TW9zdCB8fCBjb2x1bW5WYWx1ZSA+IHJpZ2h0TW9zdFsxXSkgcmlnaHRNb3N0ID0gW3Jvd1ZhbHVlLCBjb2x1bW5WYWx1ZV07XG4gICAgICAgICAgICBpZiAoIWJvdHRvbU1vc3QgfHwgcm93VmFsdWUgPiBib3R0b21Nb3N0WzBdKSBib3R0b21Nb3N0ID0gW3Jvd1ZhbHVlLCBjb2x1bW5WYWx1ZV07XG4gICAgICAgICAgICBpZiAoIXRvcE1vc3QgfHwgcm93VmFsdWUgPCB0b3BNb3N0WzBdKSB0b3BNb3N0ID0gW3Jvd1ZhbHVlLCBjb2x1bW5WYWx1ZV07XG4gICAgICAgIH0pKTtcbiAgICAgICAgdGhpcy5sZWZ0TW9zdCA9IGxlZnRNb3N0O1xuICAgICAgICB0aGlzLnJpZ2h0TW9zdCA9IHJpZ2h0TW9zdDtcbiAgICAgICAgdGhpcy50b3BNb3N0ID0gdG9wTW9zdDtcbiAgICAgICAgdGhpcy5ib3R0b21Nb3N0ID0gYm90dG9tTW9zdDtcbiAgICB9XG5cbiAgICBwb3B1bGF0ZUZpZWxkKGZpZWxkKSB7XG4gICAgICAgIC8vIGxldCBjb29yZGluYXRlQXJyYXlzID0gT2JqZWN0LnZhbHVlcyh0aGlzLnBvc2l0aW9uKTtcbiAgICAgICAgbGV0IGNvb3JkaW5hdGVBcnJheXMgPSBbLi4udGhpcy5wb3NpdGlvbi50b3AsIC4uLnRoaXMucG9zaXRpb24ubWlkZGxlLCAuLi50aGlzLnBvc2l0aW9uLmJvdHRvbV07XG5cbiAgICAgICAgY29vcmRpbmF0ZUFycmF5cy5mb3JFYWNoKGFycmF5ID0+IHtcbiAgICAgICAgICAgIGxldCBbcm93LCBjb2xdID0gW2FycmF5WzBdLCBhcnJheVsxXV07XG4gICAgICAgICAgICBpZiAoKGNvbCA+PSAwICYmIGNvbCA8PSAxOSkgJiYgKHJvdyA+PSAwICYmIHJvdyA8PSAxOSkpIGZpZWxkW3Jvd11bY29sXSA9IHRoaXMuY29sb3JDb2RlO1xuICAgICAgICB9KTtcblxuICAgICAgICB0aGlzLnJlbW92ZVNxdWFyZXMuZm9yRWFjaChwb3NpdGlvbkFycmF5ID0+IHtcbiAgICAgICAgICAgIGxldCBbcm93LCBjb2xdID0gW3Bvc2l0aW9uQXJyYXlbMF0sIHBvc2l0aW9uQXJyYXlbMV1dO1xuICAgICAgICAgICAgaWYgKChjb2wgPj0gMCAmJiBjb2wgPD0gMTkpICYmIChyb3cgPj0gMCAmJiByb3cgPD0gMTkpKSBmaWVsZFtyb3ddW2NvbF0gPSAwO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICAvLyBjb21wYXJlcyB0d28gYXJyYXlzIG9mIGNvb3JkaW5hdGVzIGFuZCBjaGVjayBpZiB0aGV5IGhhdmUgdGhlIHNhbWUgY29udGVudCBpbiB0aGUgc2FtZSBvcmRlclxuICAgIF9zcXVhcmVzQXJlRXF1YWwob2xkU3F1YXJlLCBuZXdTcXVhcmUpIHtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBvbGRTcXVhcmUubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGlmIChvbGRTcXVhcmVbaV0gIT09IG5ld1NxdWFyZVtpXSkgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cblxuICAgIF9pbmNsdWRlcyhzcXVhcmUsIGNvb3JkaW5hdGVBcnJheXMpIHtcbiAgICAgICAgbGV0IHJlc3VsdCA9IGZhbHNlO1xuICAgICAgICBjb29yZGluYXRlQXJyYXlzLmZvckVhY2goYXJyYXkgPT4ge1xuICAgICAgICAgICAgaWYgKHRoaXMuX3NxdWFyZXNBcmVFcXVhbChzcXVhcmUsIGFycmF5KSkge1xuICAgICAgICAgICAgICAgIHJlc3VsdCA9IHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cblxuICAgIGRyb3AoKSB7XG4gICAgICAgIGxldCBvbGRQb3NpdGlvbiA9IHtcbiAgICAgICAgICAgIHRvcDogdGhpcy5wb3NpdGlvbi50b3AubWFwKGFycmF5ID0+IGFycmF5LnNsaWNlKCkpLFxuICAgICAgICAgICAgbWlkZGxlOiB0aGlzLnBvc2l0aW9uLm1pZGRsZS5tYXAoYXJyYXkgPT4gYXJyYXkuc2xpY2UoKSksXG4gICAgICAgICAgICBib3R0b206IHRoaXMucG9zaXRpb24uYm90dG9tLm1hcChhcnJheSA9PiBhcnJheS5zbGljZSgpKSxcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMucG9zaXRpb24udG9wID0gdGhpcy5wb3NpdGlvbi50b3AubWFwKGFycmF5ID0+IFthcnJheVswXSArIDEsIGFycmF5WzFdXSk7XG4gICAgICAgIHRoaXMucG9zaXRpb24ubWlkZGxlID0gdGhpcy5wb3NpdGlvbi5taWRkbGUubWFwKGFycmF5ID0+IFthcnJheVswXSArIDEsIGFycmF5WzFdXSk7XG4gICAgICAgIHRoaXMucG9zaXRpb24uYm90dG9tID0gdGhpcy5wb3NpdGlvbi5ib3R0b20ubWFwKGFycmF5ID0+IFthcnJheVswXSArIDEsIGFycmF5WzFdXSk7XG4gICAgICAgIHRoaXMudHVybmluZ1BvaW50ID0gW3RoaXMudHVybmluZ1BvaW50WzBdICsgMSwgdGhpcy50dXJuaW5nUG9pbnRbMV1dO1xuXG4gICAgICAgIHRoaXMuc2V0UmVtb3ZlU3F1YXJlcyhvbGRQb3NpdGlvbik7XG4gICAgfVxuXG4gICAgLy8gZmluZCBoaWdoZXN0IHBvc3NpYmxlIGdyb3VuZC1wb3NpdGlvbiBmb3IgcGllY2VcbiAgICBoYXJkRHJvcChmaWVsZCkge1xuICAgICAgICB0aGlzLmNsZWFyU2VsZkZyb21Cb2FyZChmaWVsZCk7XG4gICAgICAgIGxldCBzdG9wcGVkID0gZmFsc2U7XG4gICAgICAgIHdoaWxlICghc3RvcHBlZCkge1xuICAgICAgICAgICAgbGV0IGhhbmdpbmdTcXVhcmVzID0gdGhpcy5oYW5naW5nU3F1YXJlcyh0aGlzLnBvc2l0aW9uKTtcbiAgICAgICAgICAgIGhhbmdpbmdTcXVhcmVzLmZvckVhY2goY29vcmRpbmF0ZSA9PiB7XG4gICAgICAgICAgICAgICAgbGV0IFtyb3csIGNvbF0gPSBbY29vcmRpbmF0ZVswXSwgY29vcmRpbmF0ZVsxXV07XG4gICAgICAgICAgICAgICAgaWYgKChyb3cgKyAxID09PSAyMCB8fCBmaWVsZFtyb3cgKyAxXVtjb2xdKSkgc3RvcHBlZCA9IHRydWU7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGlmIChzdG9wcGVkKSBicmVhaztcbiAgICAgICAgICAgIHRoaXMucG9zaXRpb24udG9wID0gdGhpcy5wb3NpdGlvbi50b3AubWFwKGFycmF5ID0+IFthcnJheVswXSArIDEsIGFycmF5WzFdXSk7XG4gICAgICAgICAgICB0aGlzLnBvc2l0aW9uLm1pZGRsZSA9IHRoaXMucG9zaXRpb24ubWlkZGxlLm1hcChhcnJheSA9PiBbYXJyYXlbMF0gKyAxLCBhcnJheVsxXV0pO1xuICAgICAgICAgICAgdGhpcy5wb3NpdGlvbi5ib3R0b20gPSB0aGlzLnBvc2l0aW9uLmJvdHRvbS5tYXAoYXJyYXkgPT4gW2FycmF5WzBdICsgMSwgYXJyYXlbMV1dKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNsZWFyU2VsZkZyb21Cb2FyZChmaWVsZCkge1xuICAgICAgICBPYmplY3QudmFsdWVzKHRoaXMucG9zaXRpb24pLmZvckVhY2goY29vcmRpbmF0ZUFycmF5cyA9PiBjb29yZGluYXRlQXJyYXlzLmZvckVhY2goY29vcmRpbmF0ZSA9PiB7XG4gICAgICAgICAgICBsZXQgcm93ID0gY29vcmRpbmF0ZVswXTtcbiAgICAgICAgICAgIGxldCBjb2wgPSBjb29yZGluYXRlWzFdO1xuICAgICAgICAgICAgaWYgKHJvdyA8IDIwICYmIHJvdyA+PSAwICYmIGNvbCA+PSAwICYmIGNvbCA8IDEwKSBmaWVsZFtyb3ddW2NvbF0gPSAwO1xuICAgICAgICB9KSk7XG4gICAgfVxuXG4gICAgbW92ZShkaXJlY3Rpb24sIGZpZWxkKSB7XG4gICAgICAgIGxldCB0U3BpbiA9IGZhbHNlO1xuICAgICAgICBsZXQgb2xkUG9zaXRpb24gPSB7XG4gICAgICAgICAgICB0b3A6IHRoaXMucG9zaXRpb24udG9wLm1hcChhcnJheSA9PiBhcnJheS5zbGljZSgpKSxcbiAgICAgICAgICAgIG1pZGRsZTogdGhpcy5wb3NpdGlvbi5taWRkbGUubWFwKGFycmF5ID0+IGFycmF5LnNsaWNlKCkpLFxuICAgICAgICAgICAgYm90dG9tOiB0aGlzLnBvc2l0aW9uLmJvdHRvbS5tYXAoYXJyYXkgPT4gYXJyYXkuc2xpY2UoKSksXG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5vbGRUdXJuaW5nUG9pbnQgPSB0aGlzLnR1cm5pbmdQb2ludC5zbGljZSgpO1xuICAgICAgICBzd2l0Y2ggKGRpcmVjdGlvbikge1xuICAgICAgICAgICAgY2FzZSBcImxlZnRcIjpcbiAgICAgICAgICAgICAgICB0aGlzLnBvc2l0aW9uLnRvcCA9IHRoaXMucG9zaXRpb24udG9wLm1hcChhcnJheSA9PiBbYXJyYXlbMF0sIGFycmF5WzFdIC0gMV0pO1xuICAgICAgICAgICAgICAgIHRoaXMucG9zaXRpb24ubWlkZGxlID0gdGhpcy5wb3NpdGlvbi5taWRkbGUubWFwKGFycmF5ID0+IFthcnJheVswXSwgYXJyYXlbMV0gLSAxXSk7XG4gICAgICAgICAgICAgICAgdGhpcy5wb3NpdGlvbi5ib3R0b20gPSB0aGlzLnBvc2l0aW9uLmJvdHRvbS5tYXAoYXJyYXkgPT4gW2FycmF5WzBdLCBhcnJheVsxXSAtIDFdKTtcbiAgICAgICAgICAgICAgICB0aGlzLnR1cm5pbmdQb2ludCA9IFt0aGlzLnR1cm5pbmdQb2ludFswXSwgdGhpcy50dXJuaW5nUG9pbnRbMV0gLSAxXTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgXCJ0dXJuUmlnaHRcIjpcbiAgICAgICAgICAgICAgICAvLyBkZWZlciB0byBcInR1cm5cIiBtZXRob2RcbiAgICAgICAgICAgICAgICAvLyB0U3BpbiB3aWxsIGVpdGhlciBiZSB0cnV0aHkgb3IgZmFsc3ksIHRyYWNrZWQgZm9yIHNlbmRpbmcgbW9yZSBsaW5lcyBkdXJpbmcgbXVsdGlwbGF5ZXJcbiAgICAgICAgICAgICAgICB0U3BpbiA9IHRoaXMudHVyblJpZ2h0KGZpZWxkLCBvbGRQb3NpdGlvbik7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIFwicmlnaHRcIjpcbiAgICAgICAgICAgICAgICB0aGlzLnBvc2l0aW9uLnRvcCA9IHRoaXMucG9zaXRpb24udG9wLm1hcChhcnJheSA9PiBbYXJyYXlbMF0sIGFycmF5WzFdICsgMV0pO1xuICAgICAgICAgICAgICAgIHRoaXMucG9zaXRpb24ubWlkZGxlID0gdGhpcy5wb3NpdGlvbi5taWRkbGUubWFwKGFycmF5ID0+IFthcnJheVswXSwgYXJyYXlbMV0gKyAxXSk7XG4gICAgICAgICAgICAgICAgdGhpcy5wb3NpdGlvbi5ib3R0b20gPSB0aGlzLnBvc2l0aW9uLmJvdHRvbS5tYXAoYXJyYXkgPT4gW2FycmF5WzBdLCBhcnJheVsxXSArIDFdKTtcbiAgICAgICAgICAgICAgICB0aGlzLnR1cm5pbmdQb2ludCA9IFt0aGlzLnR1cm5pbmdQb2ludFswXSwgdGhpcy50dXJuaW5nUG9pbnRbMV0gKyAxXTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgXCJkb3duXCI6XG4gICAgICAgICAgICAgICAgdGhpcy5wb3NpdGlvbi50b3AgPSB0aGlzLnBvc2l0aW9uLnRvcC5tYXAoYXJyYXkgPT4gW2FycmF5WzBdICsgMSwgYXJyYXlbMV1dKTtcbiAgICAgICAgICAgICAgICB0aGlzLnBvc2l0aW9uLm1pZGRsZSA9IHRoaXMucG9zaXRpb24ubWlkZGxlLm1hcChhcnJheSA9PiBbYXJyYXlbMF0gKyAxLCBhcnJheVsxXV0pO1xuICAgICAgICAgICAgICAgIHRoaXMucG9zaXRpb24uYm90dG9tID0gdGhpcy5wb3NpdGlvbi5ib3R0b20ubWFwKGFycmF5ID0+IFthcnJheVswXSArIDEsIGFycmF5WzFdXSk7XG4gICAgICAgICAgICAgICAgdGhpcy50dXJuaW5nUG9pbnQgPSBbdGhpcy50dXJuaW5nUG9pbnRbMF0gKyAxLCB0aGlzLnR1cm5pbmdQb2ludFsxXV07XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIFwidXBcIjpcbiAgICAgICAgICAgICAgICB0aGlzLnBvc2l0aW9uLnRvcCA9IHRoaXMucG9zaXRpb24udG9wLm1hcChhcnJheSA9PiBbYXJyYXlbMF0gLSAxLCBhcnJheVsxXV0pO1xuICAgICAgICAgICAgICAgIHRoaXMucG9zaXRpb24ubWlkZGxlID0gdGhpcy5wb3NpdGlvbi5taWRkbGUubWFwKGFycmF5ID0+IFthcnJheVswXSAtIDEsIGFycmF5WzFdXSk7XG4gICAgICAgICAgICAgICAgdGhpcy5wb3NpdGlvbi5ib3R0b20gPSB0aGlzLnBvc2l0aW9uLmJvdHRvbS5tYXAoYXJyYXkgPT4gW2FycmF5WzBdIC0gMSwgYXJyYXlbMV1dKTtcbiAgICAgICAgICAgICAgICB0aGlzLnR1cm5pbmdQb2ludCA9IFt0aGlzLnR1cm5pbmdQb2ludFswXSAtIDEsIHRoaXMudHVybmluZ1BvaW50WzFdXTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgXCJ0dXJuTGVmdFwiOlxuICAgICAgICAgICAgICAgIHRoaXMudHVybkxlZnQoZmllbGQsIG9sZFBvc2l0aW9uKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnNldE91dGVyU3F1YXJlcygpO1xuICAgICAgICB0aGlzLnNldFJlbW92ZVNxdWFyZXMob2xkUG9zaXRpb24sIGZpZWxkKTtcbiAgICAgICAgcmV0dXJuIHRTcGluO1xuICAgIH1cblxuICAgIHR1cm5SaWdodChmaWVsZCwgb2xkUG9zaXRpb24pIHtcbiAgICAgICAgLy8gY2xlYXIgZnJvbSBmaWVsZCBmaXJzdCBzbyB0aGF0IHRoZSBwaWVjZSBkb2Vzbid0IHNlZSBpdHNlbGYgYXMgYSBjb25mbGljdGluZyBwaWVjZVxuICAgICAgICB0aGlzLmNsZWFyU2VsZkZyb21Cb2FyZChmaWVsZCk7XG4gICAgICAgIGxldCBzcXVhcmVzID0gW107XG4gICAgICAgIE9iamVjdC52YWx1ZXModGhpcy5wb3NpdGlvbikuZm9yRWFjaChjb29yZGluYXRlc0FycmF5ID0+IHNxdWFyZXMucHVzaCguLi5jb29yZGluYXRlc0FycmF5KSk7XG4gICAgICAgIHRoaXMucG9zaXRpb24udG9wID0gW107XG4gICAgICAgIHRoaXMucG9zaXRpb24ubWlkZGxlID0gW107XG4gICAgICAgIHRoaXMucG9zaXRpb24uYm90dG9tID0gW107XG4gICAgICAgIHNxdWFyZXMuZm9yRWFjaChzcXVhcmUgPT4ge1xuICAgICAgICAgICAgbGV0IGNvbHVtbiA9IHNxdWFyZVsxXTtcbiAgICAgICAgICAgIGxldCBoZWlnaHREaWZmZXJlbmNlID0gdGhpcy50dXJuaW5nUG9pbnRbMF0gLSBzcXVhcmVbMF07XG4gICAgICAgICAgICBsZXQgd2lkdGhEaWZmZXJlbmNlID0gdGhpcy50dXJuaW5nUG9pbnRbMV0gLSBzcXVhcmVbMV07XG4gICAgICAgICAgICBsZXQgbmV3Q29sID0gdGhpcy50dXJuaW5nUG9pbnRbMV0gKyBoZWlnaHREaWZmZXJlbmNlO1xuICAgICAgICAgICAgbGV0IG5ld1JvdyA9IHRoaXMudHVybmluZ1BvaW50WzBdICsgKHdpZHRoRGlmZmVyZW5jZSAqIC0xKTtcbiAgICAgICAgICAgIHN3aXRjaCAoY29sdW1uKSB7XG4gICAgICAgICAgICAgICAgY2FzZSBjb2x1bW4gPSB0aGlzLnJpZ2h0TW9zdFsxXTpcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wb3NpdGlvbi5ib3R0b20ucHVzaChbbmV3Um93LCBuZXdDb2xdKTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSBjb2x1bW4gPSB0aGlzLmxlZnRNb3N0WzFdOlxuICAgICAgICAgICAgICAgICAgICB0aGlzLnBvc2l0aW9uLnRvcC5wdXNoKFtuZXdSb3csIG5ld0NvbF0pO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgICAgICB0aGlzLnBvc2l0aW9uLm1pZGRsZS5wdXNoKFtuZXdSb3csIG5ld0NvbF0pO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMuc2V0UmVtb3ZlU3F1YXJlcyhvbGRQb3NpdGlvbik7XG5cbiAgICAgICAgLy8gZmluZCBvdXRlci1tb3N0IHNxdWFyZXMgdG8gc2VlIGlmIHBpZWNlIGlzIG9ic3RydWN0ZWRcbiAgICAgICAgLy8gaWYgc28sIHB1c2ggcGllY2UgYmFjayBpbnRvIGZpZWxkXG4gICAgICAgIHRoaXMuc2V0T3V0ZXJTcXVhcmVzKCk7XG5cbiAgICAgICAgLy8gcmVzZXQgcm90YXRpb24gc3RhdGUsIHdoaWNoIGlzIHRyYWNrZWQgZm9yIGltcGxlbWVudGluZyBzdXBlciByb3RhdGlvbiBzeXN0ZW1cbiAgICAgICAgdGhpcy5yb3RhdGlvblN0YXRlID0gdGhpcy5yb3RhdGlvblN0YXRlID09PSAzID8gMCA6IHRoaXMucm90YXRpb25TdGF0ZSArIDE7XG5cbiAgICAgICAgbGV0IG5ld1NxdWFyZXMgPSBbLi4udGhpcy5wb3NpdGlvbi50b3AsIC4uLnRoaXMucG9zaXRpb24ubWlkZGxlLCAuLi50aGlzLnBvc2l0aW9uLmJvdHRvbV07XG4gICAgICAgIGZvciAobGV0IGkgaW4gbmV3U3F1YXJlcykge1xuICAgICAgICAgICAgbGV0IFtyb3csIGNvbF0gPSBbbmV3U3F1YXJlc1tpXVswXSwgbmV3U3F1YXJlc1tpXVsxXV07XG4gICAgICAgICAgICBpZiAoZmllbGRbcm93XSA9PT0gdW5kZWZpbmVkIHx8IGZpZWxkW3Jvd11bY29sXSA9PT0gdW5kZWZpbmVkIHx8IGZpZWxkW3Jvd11bY29sXSkge1xuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLndhbGxLaWNrKGZpZWxkLCBcInR1cm5SaWdodFwiLCBvbGRQb3NpdGlvbik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICB0dXJuTGVmdChmaWVsZCwgb2xkUG9zaXRpb24pIHtcbiAgICAgICAgdGhpcy5jbGVhclNlbGZGcm9tQm9hcmQoZmllbGQpO1xuICAgICAgICBsZXQgc3F1YXJlcyA9IFtdO1xuICAgICAgICBPYmplY3QudmFsdWVzKHRoaXMucG9zaXRpb24pLmZvckVhY2goY29vcmRpbmF0ZXNBcnJheSA9PiBzcXVhcmVzLnB1c2goLi4uY29vcmRpbmF0ZXNBcnJheSkpO1xuICAgICAgICB0aGlzLnBvc2l0aW9uLnRvcCA9IFtdO1xuICAgICAgICB0aGlzLnBvc2l0aW9uLm1pZGRsZSA9IFtdO1xuICAgICAgICB0aGlzLnBvc2l0aW9uLmJvdHRvbSA9IFtdO1xuICAgICAgICBzcXVhcmVzLmZvckVhY2goc3F1YXJlID0+IHtcbiAgICAgICAgICAgIGxldCBjb2x1bW4gPSBzcXVhcmVbMV07XG4gICAgICAgICAgICBsZXQgaGVpZ2h0RGlmZmVyZW5jZSA9IHRoaXMudHVybmluZ1BvaW50WzBdIC0gc3F1YXJlWzBdO1xuICAgICAgICAgICAgbGV0IHdpZHRoRGlmZmVyZW5jZSA9IHRoaXMudHVybmluZ1BvaW50WzFdIC0gc3F1YXJlWzFdO1xuICAgICAgICAgICAgbGV0IG5ld0NvbCA9IHRoaXMudHVybmluZ1BvaW50WzFdIC0gaGVpZ2h0RGlmZmVyZW5jZTtcbiAgICAgICAgICAgIGxldCBuZXdSb3cgPSB0aGlzLnR1cm5pbmdQb2ludFswXSAtICh3aWR0aERpZmZlcmVuY2UgKiAtMSk7XG4gICAgICAgICAgICBzd2l0Y2ggKGNvbHVtbikge1xuICAgICAgICAgICAgICAgIGNhc2UgY29sdW1uID0gdGhpcy5yaWdodE1vc3RbMV06XG4gICAgICAgICAgICAgICAgICAgIHRoaXMucG9zaXRpb24udG9wLnB1c2goW25ld1JvdywgbmV3Q29sXSk7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgY29sdW1uID0gdGhpcy5sZWZ0TW9zdFsxXTpcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wb3NpdGlvbi5ib3R0b20ucHVzaChbbmV3Um93LCBuZXdDb2xdKTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wb3NpdGlvbi5taWRkbGUucHVzaChbbmV3Um93LCBuZXdDb2xdKTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgICAgIHRoaXMuc2V0UmVtb3ZlU3F1YXJlcyhvbGRQb3NpdGlvbik7XG5cbiAgICAgICAgLy8gZmluZCBsZWZ0IGFuZCByaWdodCBtb3N0IHNxdWFyZXMgdG8gc2VlIGlmIHBpZWNlIHRocm91Z2ggd2FsbFxuICAgICAgICAvLyBpZiB0aHJvdWdoIHdhbGwsIHB1c2ggcGllY2UgYmFjayBpbnRvIGZpZWxkXG4gICAgICAgIHRoaXMuc2V0T3V0ZXJTcXVhcmVzKCk7XG5cbiAgICAgICAgLy8gcmVzZXQgcm90YXRpb24gc3RhdGUsIHdoaWNoIGlzIHRyYWNrZWQgZm9yIGltcGxlbWVudGluZyBzdXBlciByb3RhdGlvbiBzeXN0ZW1cbiAgICAgICAgdGhpcy5yb3RhdGlvblN0YXRlID0gdGhpcy5yb3RhdGlvblN0YXRlID09PSAwID8gMyA6IHRoaXMucm90YXRpb25TdGF0ZSAtIDE7XG5cbiAgICAgICAgbGV0IG5ld1NxdWFyZXMgPSBbLi4udGhpcy5wb3NpdGlvbi50b3AsIC4uLnRoaXMucG9zaXRpb24ubWlkZGxlLCAuLi50aGlzLnBvc2l0aW9uLmJvdHRvbV07XG4gICAgICAgIGZvciAobGV0IGkgaW4gbmV3U3F1YXJlcykge1xuICAgICAgICAgICAgbGV0IFtyb3csIGNvbF0gPSBbbmV3U3F1YXJlc1tpXVswXSwgbmV3U3F1YXJlc1tpXVsxXV07XG4gICAgICAgICAgICBpZiAoZmllbGRbcm93XSA9PT0gdW5kZWZpbmVkIHx8IGZpZWxkW3Jvd11bY29sXSA9PT0gdW5kZWZpbmVkIHx8IGZpZWxkW3Jvd11bY29sXSkge1xuICAgICAgICAgICAgICAgIHRoaXMud2FsbEtpY2soZmllbGQsIFwidHVybkxlZnRcIiwgb2xkUG9zaXRpb24pO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICB9XG5cbiAgICAvLyBjb21wYXJlIG9sZCBwb3NpdGlvbiBvZiBwaWVjZSB3aXRoIG5ldyBwb3NpdGlvbiBcbiAgICBzZXRSZW1vdmVTcXVhcmVzKG9sZFBvc2l0aW9uLCBmaWVsZCkge1xuICAgICAgICBsZXQgb2xkU3F1YXJlcyA9IFtdO1xuICAgICAgICBsZXQgbmV3U3F1YXJlcyA9IFtdO1xuICAgICAgICBPYmplY3QudmFsdWVzKG9sZFBvc2l0aW9uKS5mb3JFYWNoKGNvb3JkaW5hdGVzQXJyYXkgPT4gb2xkU3F1YXJlcy5wdXNoKC4uLmNvb3JkaW5hdGVzQXJyYXkpKTtcbiAgICAgICAgT2JqZWN0LnZhbHVlcyh0aGlzLnBvc2l0aW9uKS5mb3JFYWNoKGNvb3JkaW5hdGVzQXJyYXkgPT4gbmV3U3F1YXJlcy5wdXNoKC4uLmNvb3JkaW5hdGVzQXJyYXkpKTtcbiAgICAgICAgLy8ga2VlcCB0cmFjayBvZiBzcXVhcmVzIHRoYXQgdGhlIHBvc2l0aW9ucyBkbyBub3QgaGF2ZSBpbiBjb21tb24gKHNxdWFyZXMgdG8gcmVtb3ZlIGNvbG9yIGZyb20pXG4gICAgICAgIHRoaXMucmVtb3ZlU3F1YXJlcyA9IG9sZFNxdWFyZXMuZmlsdGVyKG9sZFNxdWFyZSA9PiB7XG4gICAgICAgICAgICBpZiAoIWZpZWxkKSB7XG4gICAgICAgICAgICAgICAgaWYgKCF0aGlzLl9pbmNsdWRlcyhvbGRTcXVhcmUsIG5ld1NxdWFyZXMpKSByZXR1cm4gb2xkU3F1YXJlO1xuICAgICAgICAgICAgLy8gaWYgZmllbGQgYXJndW1lbnQgaXMgcGFzc2VkLCBjaGVjayB0aGUgZmllbGQgdG8gbWFrZSBzdXJlIHRvIG5vdCBjbGVhciBzcXVhcmVzIG9mIG90aGVyIHBpZWNlc1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBpZiAoIXRoaXMuX2luY2x1ZGVzKG9sZFNxdWFyZSwgbmV3U3F1YXJlcykgJiYgIWZpZWxkW29sZFNxdWFyZVswXV1bb2xkU3F1YXJlWzFdXSkgcmV0dXJuIG9sZFNxdWFyZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIFxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBoYW5naW5nU3F1YXJlcyhwb3NpdGlvbikge1xuICAgICAgICBsZXQgc3F1YXJlcyA9IFtdO1xuICAgICAgICBsZXQgaGFuZ2luZ1NxdWFyZXMgPSBbXTtcbiAgICAgICAgT2JqZWN0LnZhbHVlcyhwb3NpdGlvbikuZm9yRWFjaChjb29yZGluYXRlQXJyYXkgPT4gc3F1YXJlcy5wdXNoKC4uLmNvb3JkaW5hdGVBcnJheSkpXG4gICAgICAgIHNxdWFyZXMuZm9yRWFjaChzcXVhcmUgPT4ge1xuICAgICAgICAgICAgbGV0IGJlbG93U3F1YXJlID0gW3NxdWFyZVswXSArIDEsIHNxdWFyZVsxXV07XG4gICAgICAgICAgICBpZiAoIXRoaXMuX2luY2x1ZGVzKGJlbG93U3F1YXJlLCBzcXVhcmVzKSkgaGFuZ2luZ1NxdWFyZXMucHVzaChzcXVhcmUpO1xuICAgICAgICB9KVxuICAgICAgICByZXR1cm4gaGFuZ2luZ1NxdWFyZXM7XG4gICAgfVxuXG4gICAgc2lkZVNxdWFyZXMoKSB7XG4gICAgICAgIGxldCBzcXVhcmVzID0gW107XG4gICAgICAgIGxldCBzaWRlU3F1YXJlcyA9IHtcbiAgICAgICAgICAgIGxlZnQ6IFtdLFxuICAgICAgICAgICAgcmlnaHQ6IFtdXG4gICAgICAgIH07XG4gICAgICAgIE9iamVjdC52YWx1ZXModGhpcy5wb3NpdGlvbikuZm9yRWFjaChjb29yZGluYXRlQXJyYXkgPT4gc3F1YXJlcy5wdXNoKC4uLmNvb3JkaW5hdGVBcnJheSkpO1xuICAgICAgICBzcXVhcmVzLmZvckVhY2goc3F1YXJlID0+IHtcbiAgICAgICAgICAgIGxldCBhZGphY2VudExlZnQgPSBbc3F1YXJlWzBdLCBzcXVhcmVbMV0gLSAxXTtcbiAgICAgICAgICAgIGxldCBhZGphY2VudFJpZ2h0ID0gW3NxdWFyZVswXSwgc3F1YXJlWzFdICsgMV07XG4gICAgICAgICAgICBpZiAoIXRoaXMuX2luY2x1ZGVzKGFkamFjZW50TGVmdCwgc3F1YXJlcykpIHNpZGVTcXVhcmVzLmxlZnQucHVzaChzcXVhcmUpO1xuICAgICAgICAgICAgaWYgKCF0aGlzLl9pbmNsdWRlcyhhZGphY2VudFJpZ2h0LCBzcXVhcmVzKSkgc2lkZVNxdWFyZXMucmlnaHQucHVzaChzcXVhcmUpO1xuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIHNpZGVTcXVhcmVzO1xuICAgIH1cblxuICAgIGlzRmFsbGluZyhmaWVsZCkge1xuICAgICAgICBsZXQgcmVzdWx0ID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5oYW5naW5nU3F1YXJlcyh0aGlzLnBvc2l0aW9uKS5mb3JFYWNoKGNvb3JkaW5hdGVQYWlyID0+IHtcbiAgICAgICAgICAgIGxldCBbcm93LCBjb2xdID0gW2Nvb3JkaW5hdGVQYWlyWzBdLCBjb29yZGluYXRlUGFpclsxXV07XG4gICAgICAgICAgICAvLyBpZiB0aGUgcGllY2UncyBjdXJyZW50IHBvc2l0aW9uIGlzIGFib3ZlIHRoZSBmaWVsZCBmbG9vciBvciBhIGFub3RoZXIgcGllY2UgKG5vdCBpbmNsdWRlIGdob3N0IHBpZWNlKVxuICAgICAgICAgICAgaWYgKCFmaWVsZFtyb3cgKyAxXSB8fCAoZmllbGRbcm93ICsgMV1bY29sXSAmJiBmaWVsZFtyb3cgKyAxXVtjb2xdICE9PSBcInhcIikpIHtcbiAgICAgICAgICAgICAgICByZXN1bHQgPSBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxuXG4gICAgcmlnaHRTaWRlQmxvY2tlZChmaWVsZCkge1xuICAgICAgICAvLyBpZiAodGhpcy5wb3NpdGlvbi50b3BbMF1bMF0gPCAwKSByZXR1cm4gZmFsc2U7XG4gICAgICAgIGxldCByZXN1bHQgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5zaWRlU3F1YXJlcygpLnJpZ2h0LmZvckVhY2goY29vcmRpbmF0ZVBhaXIgPT4ge1xuICAgICAgICAgICAgbGV0IFtyb3csIGNvbF0gPSBbY29vcmRpbmF0ZVBhaXJbMF0sIGNvb3JkaW5hdGVQYWlyWzFdXTtcbiAgICAgICAgICAgIC8vIGlmIGFueSByaWdodCBmYWNpbmcgc3F1YXJlIGhpdHMgdGhlIHdhbGwgb3IgYW5vdGhlciBwaWVjZSwgbm90IGluY2x1ZGluZyB0aGUgZ2hvc3QgcGllY2VcbiAgICAgICAgICAgIGlmIChjb2wgPT09IDkgfHwgKGZpZWxkW3Jvd10gJiYgZmllbGRbcm93XVtjb2wgKyAxXSAmJiBmaWVsZFtyb3cgKyAxXVtjb2xdICE9PSBcInhcIikpIHtcbiAgICAgICAgICAgICAgICByZXN1bHQgPSB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG5cbiAgICBsZWZ0U2lkZUJsb2NrZWQoZmllbGQpIHtcbiAgICAgICAgLy8gaWYgKHRoaXMucG9zaXRpb24udG9wWzBdWzBdIDwgMCkgcmV0dXJuIGZhbHNlO1xuICAgICAgICBsZXQgcmVzdWx0ID0gZmFsc2U7XG4gICAgICAgIHRoaXMuc2lkZVNxdWFyZXMoKS5sZWZ0LmZvckVhY2goY29vcmRpbmF0ZVBhaXIgPT4ge1xuICAgICAgICAgICAgbGV0IFtyb3csIGNvbF0gPSBbY29vcmRpbmF0ZVBhaXJbMF0sIGNvb3JkaW5hdGVQYWlyWzFdXTtcbiAgICAgICAgICAgIC8vIGlmIGFueSBsZWZ0IGZhY2luZyBzcXVhcmUgaGl0cyB0aGUgd2FsbCBvciBhbm90aGVyIHBpZWNlLCBub3QgaW5jbHVkaW5nIHRoZSBnaG9zdCBwaWVjZVxuICAgICAgICAgICAgaWYgKGNvbCA9PT0gMCB8fCAoZmllbGRbcm93XSAmJiBmaWVsZFtyb3ddW2NvbCAtIDFdICYmIGZpZWxkW3Jvd11bY29sIC0gMV0gIT09IFwieFwiKSkge1xuICAgICAgICAgICAgICAgIHJlc3VsdCA9IHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cblxuICAgIHdhbGxLaWNrKGZpZWxkLCBhY3Rpb24sIG9sZFBvc2l0aW9uKSB7XG4gICAgICAgIGxldCB2YWxpZFNwb3QsIHN0YXJ0aW5nT2Zmc2V0O1xuICAgICAgICBpZiAoYWN0aW9uID09PSBcInR1cm5SaWdodFwiKSB7XG4gICAgICAgICAgICBzdGFydGluZ09mZnNldCA9IHRoaXMucm90YXRpb25TdGF0ZSA9PT0gMCA/IHRoaXMub2Zmc2V0R3VpZGVbM10gOiB0aGlzLm9mZnNldEd1aWRlW3RoaXMucm90YXRpb25TdGF0ZSAtIDFdO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgc3RhcnRpbmdPZmZzZXQgPSB0aGlzLnJvdGF0aW9uU3RhdGUgPT09IDMgPyB0aGlzLm9mZnNldEd1aWRlWzBdIDogdGhpcy5vZmZzZXRHdWlkZVt0aGlzLnJvdGF0aW9uU3RhdGUgKyAxXTtcbiAgICAgICAgfVxuICAgICAgICBsZXQgbmV4dE9mZnNldCA9IHRoaXMub2Zmc2V0R3VpZGVbdGhpcy5yb3RhdGlvblN0YXRlXTtcbiAgICAgICAgLy8gZm9yIChsZXQgaSA9IDA7IGkgPCA1OyBpKyspIHtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCA2OyBpKyspIHtcbiAgICAgICAgICAgIC8vIGlmIGkgPT09IDUsIHRoZXJlIGFyZSBubyBtb3JlIHBvdGVudGlhbCBwb3NpdGlvbnMgdG8gY2hlY2sgYW5kIHRoZSBwaWVjZSdzIHBvc2l0aW9uIGlzIHRoZSBpbml0aWFsIHBvc2l0aW9uIGZyb20gYmVmb3JlIHR1cm5pbmdcbiAgICAgICAgICAgIGlmIChpID09PSA1KSB7XG4gICAgICAgICAgICAgICAgdGhpcy5wb3NpdGlvbiA9IG9sZFBvc2l0aW9uO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHZhbGlkU3BvdCA9IHRydWU7XG4gICAgICAgICAgICBsZXQgYmFzZVBvc2l0aW9uID0ge1xuICAgICAgICAgICAgICAgIHRvcDogdGhpcy5wb3NpdGlvbi50b3AubWFwKGFycmF5ID0+IGFycmF5LnNsaWNlKCkpLFxuICAgICAgICAgICAgICAgIG1pZGRsZTogdGhpcy5wb3NpdGlvbi5taWRkbGUubWFwKGFycmF5ID0+IGFycmF5LnNsaWNlKCkpLFxuICAgICAgICAgICAgICAgIGJvdHRvbTogdGhpcy5wb3NpdGlvbi5ib3R0b20ubWFwKGFycmF5ID0+IGFycmF5LnNsaWNlKCkpLFxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgbGV0IGJhc2VUdXJuaW5nUG9pbnQgPSB0aGlzLnR1cm5pbmdQb2ludC5zbGljZSgpO1xuXG4gICAgICAgICAgICBsZXQgc3RhcnRpbmdUcmFuc2xhdGlvbiA9IHN0YXJ0aW5nT2Zmc2V0W2ldO1xuICAgICAgICAgICAgbGV0IHBvdGVudGlhbFRyYW5zbGF0aW9uID0gbmV4dE9mZnNldFtpXTtcbiAgICAgICAgICAgIGxldCByb3dTaGlmdCA9IHN0YXJ0aW5nVHJhbnNsYXRpb25bMF0gLSBwb3RlbnRpYWxUcmFuc2xhdGlvblswXTtcbiAgICAgICAgICAgIGxldCBjb2xTaGlmdCA9IHN0YXJ0aW5nVHJhbnNsYXRpb25bMV0gLSBwb3RlbnRpYWxUcmFuc2xhdGlvblsxXTtcbiAgICAgICAgICAgIGxldCB0cmFuc2xhdGVWZXJ0aWNhbCA9IHJvd1NoaWZ0ID4gMCA/ICgpID0+IHRoaXMubW92ZShcInVwXCIpIDogKCkgPT4gdGhpcy5tb3ZlKFwiZG93blwiKTtcbiAgICAgICAgICAgIGxldCB0cmFuc2xhdGVIb3Jpem9udGFsID0gY29sU2hpZnQgPiAwID8gKCkgPT4gdGhpcy5tb3ZlKFwicmlnaHRcIikgOiAoKSA9PiB0aGlzLm1vdmUoXCJsZWZ0XCIpO1xuICAgICAgICAgICAgZm9yIChsZXQgbnVtVGltZXNSb3dTaGlmdGVkID0gMDsgbnVtVGltZXNSb3dTaGlmdGVkIDwgTWF0aC5hYnMocm93U2hpZnQpOyBudW1UaW1lc1Jvd1NoaWZ0ZWQrKykge1xuICAgICAgICAgICAgICAgIHRyYW5zbGF0ZVZlcnRpY2FsKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBmb3IgKGxldCBudW1UaW1lc0NvbFNoaWZ0ZWQgPSAwOyBudW1UaW1lc0NvbFNoaWZ0ZWQgPCBNYXRoLmFicyhjb2xTaGlmdCk7IG51bVRpbWVzQ29sU2hpZnRlZCsrKSB7XG4gICAgICAgICAgICAgICAgdHJhbnNsYXRlSG9yaXpvbnRhbCgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgbGV0IG5ld1Bvc2l0aW9uID0gWy4uLnRoaXMucG9zaXRpb24udG9wLCAuLi50aGlzLnBvc2l0aW9uLm1pZGRsZSwgLi4udGhpcy5wb3NpdGlvbi5ib3R0b21dO1xuICAgICAgICAgICAgZm9yIChsZXQgaSBpbiBuZXdQb3NpdGlvbikge1xuICAgICAgICAgICAgICAgIGxldCBbcm93LCBjb2xdID0gW25ld1Bvc2l0aW9uW2ldWzBdLCBuZXdQb3NpdGlvbltpXVsxXV07XG4gICAgICAgICAgICAgICAgaWYgKGZpZWxkW3Jvd10gPT09IHVuZGVmaW5lZCB8fCBmaWVsZFtyb3ddW2NvbF0gPT09IHVuZGVmaW5lZCB8fCBmaWVsZFtyb3ddW2NvbF0gPiAwKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhbGlkU3BvdCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnBvc2l0aW9uID0gYmFzZVBvc2l0aW9uO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnR1cm5pbmdQb2ludCA9IGJhc2VUdXJuaW5nUG9pbnQ7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIGFsbG93cyB0U3BpbiB2YXJpYWJsZSB0byBiZSB0cnV0aHlcbiAgICAgICAgICAgIGlmICh2YWxpZFNwb3QpIHtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5uYW1lID09PSBcIlRQaWVjZVwiKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59IiwiaW1wb3J0IFBpZWNlIGZyb20gJy4vcGllY2UnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTUGllY2UgZXh0ZW5kcyBQaWVjZSB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIHRoaXMubmFtZSA9IFwiU1BpZWNlXCI7XG4gICAgICAgIHRoaXMucG9zaXRpb24gPSB7XG4gICAgICAgICAgICB0b3A6IFtbMCwgNF0sIFswLCA1XV0sXG4gICAgICAgICAgICBtaWRkbGU6IFtdLFxuICAgICAgICAgICAgYm90dG9tOiBbWzEsIDNdLCBbMSwgNF1dXG4gICAgICAgIH07XG4gICAgICAgIHRoaXMuY29sb3JDb2RlID0gNDtcblxuICAgICAgICB0aGlzLnR1cm5pbmdQb2ludCA9IFsxLCA0XTtcblxuICAgICAgICB0aGlzLmRpc3BsYXlTcXVhcmVzID0gW1szLCAxXSwgWzIsIDFdLCBbMiwgMl0sIFsxLCAyXV07XG5cbiAgICAgICAgdGhpcy5yZW1vdmVTcXVhcmVzID0gW107XG4gICAgfVxufSIsImltcG9ydCBQaWVjZSBmcm9tICcuL3BpZWNlJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVFBpZWNlIGV4dGVuZHMgUGllY2Uge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICB0aGlzLm5hbWUgPSBcIlRQaWVjZVwiO1xuICAgICAgICB0aGlzLnBvc2l0aW9uID0ge1xuICAgICAgICAgICAgdG9wOiBbWzAsIDRdXSxcbiAgICAgICAgICAgIG1pZGRsZTogW10sXG4gICAgICAgICAgICBib3R0b206IFtbMSwgM10sIFsxLCA0XSwgWzEsIDVdXSxcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmNvbG9yQ29kZSA9IDM7XG5cbiAgICAgICAgdGhpcy50dXJuaW5nUG9pbnQgPSBbMSwgNF07XG5cbiAgICAgICAgdGhpcy5kaXNwbGF5U3F1YXJlcyA9IFtbMSwgMl0sIFsyLCAyXSwgWzMsIDJdLCBbMiwgMV1dO1xuXG4gICAgICAgIHRoaXMucmVtb3ZlU3F1YXJlcyA9IFtdO1xuICAgIH1cbn0iLCJpbXBvcnQgUGllY2UgZnJvbSAnLi9waWVjZSc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFpQaWVjZSBleHRlbmRzIFBpZWNlIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgdGhpcy5uYW1lID0gXCJaUGllY2VcIjtcbiAgICAgICAgdGhpcy5wb3NpdGlvbiA9IHtcbiAgICAgICAgICAgIHRvcDogW1swLCAzXSwgWzAsIDRdXSxcbiAgICAgICAgICAgIG1pZGRsZTogW10sXG4gICAgICAgICAgICBib3R0b206IFtbMSwgNF0sIFsxLCA1XV1cbiAgICAgICAgfTtcbiAgICAgICAgdGhpcy5jb2xvckNvZGUgPSA1O1xuXG4gICAgICAgIHRoaXMudHVybmluZ1BvaW50ID0gWzEsIDRdO1xuXG4gICAgICAgIHRoaXMuZGlzcGxheVNxdWFyZXMgPSBbWzEsIDFdLCBbMiwgMV0sIFsyLCAyXSwgWzMsIDJdXTtcblxuICAgICAgICB0aGlzLnJlbW92ZVNxdWFyZXMgPSBbXTtcbiAgICB9XG59IiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2NvcmVLZWVwZXIge1xuICAgIGNyZWF0ZVNjb3JlS2VlcGVyKCkge1xuICAgICAgICBsZXQgc2NvcmVLZWVwZXJEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgc2NvcmVLZWVwZXJEaXYuY2xhc3NMaXN0LmFkZCgnc2NvcmVrZWVwZXInKTtcbiAgICAgICAgc2NvcmVLZWVwZXJEaXYuaW5uZXJIVE1MID0gJzAnO1xuICAgICAgICByZXR1cm4gc2NvcmVLZWVwZXJEaXY7XG4gICAgfVxuXG4gICAgYWRkVG9TY29yZShsaW5lc0NsZWFyZWQpIHtcbiAgICAgICAgbGV0IHNjb3JlS2VlcGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNjb3Jla2VlcGVyJyk7XG4gICAgICAgIGxldCBzY29yZSA9IE51bWJlcihzY29yZUtlZXBlci5pbm5lckhUTUwpO1xuICAgICAgICBpZiAobGluZXNDbGVhcmVkID09PSAxKSB7XG4gICAgICAgICAgICBzY29yZSArPSAxMDA7IFxuICAgICAgICB9IGVsc2UgaWYgKGxpbmVzQ2xlYXJlZCA9PT0gMikge1xuICAgICAgICAgICAgc2NvcmUgKz0gMjI1O1xuICAgICAgICB9IGVsc2UgaWYgKGxpbmVzQ2xlYXJlZCA9PT0gMykge1xuICAgICAgICAgICAgc2NvcmUgKz0gMzUwO1xuICAgICAgICB9IGVsc2UgaWYgKGxpbmVzQ2xlYXJlZCA9PT0gNCkge1xuICAgICAgICAgICAgc2NvcmUgKz0gNTAwO1xuICAgICAgICB9XG4gICAgICAgIHNjb3JlS2VlcGVyLmlubmVySFRNTCA9IHNjb3JlO1xuICAgIH1cblxuICAgIGdldFNjb3JlKCkge1xuICAgICAgICBsZXQgc2NvcmVLZWVwZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2NvcmVrZWVwZXInKTtcbiAgICAgICAgcmV0dXJuIHNjb3JlS2VlcGVyLmlubmVySFRNTDtcbiAgICB9XG59Il0sInNvdXJjZVJvb3QiOiIifQ==