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
    this.movePiece = this.movePiece.bind(this);
    this.restartGame = this.restartGame.bind(this);
    this.handleKeyPress = this.handleKeyPress.bind(this); // keep track of the following variables for requestAnimationFrame throttling

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

      document.body.addEventListener("keydown", this.handleKeyPress);
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
    key: "handleKeyPress",
    value: function handleKeyPress(event) {
      if (this.gameIsOver || this.opponent.gameIsOver) return;
      this.currentPiece.setOuterSquares(); // this.clearGhostPosition();

      switch (event.which) {
        // up key
        case this.controls.turnRight:
          // pass field so piece can check field wall before turning
          this.clearGhostPosition();
          this.tSpin = this.currentPiece.move("turnRight", this.field);
          this.currentPiece.populateField(this.field);
          this.setGhostPosition();
          break;
        // C key

        case this.controls.turnLeft:
          // pass field so piece can check field wall before turning
          this.clearGhostPosition();
          this.currentPiece.move("turnLeft", this.field);
          this.currentPiece.populateField(this.field);
          this.setGhostPosition();
          break;
        // left key

        case this.controls.left:
          this.keyHeld.left = true;
          if (this.currentPiece.leftSideBlocked(this.field)) break;
          this.movePiece("left");
          break;
        // right key

        case this.controls.right:
          this.keyHeld.right = true;
          if (this.currentPiece.rightSideBlocked(this.field)) break;
          this.movePiece("right");
          break;
        // down key

        case this.controls.softDrop:
          this.keyHeld.down = true;
          this.movePiece("down");
          break;
        // shift key

        case this.controls.hold:
          this.clearGhostPosition();
          this.hold();
          this.currentPiece.populateField(this.field);
          this.setGhostPosition();
          break;
        // space bar

        case this.controls.hardDrop:
          // this.render();
          this.clearGhostPosition();
          this.currentPiece.hardDrop(this.field);
          this.render();
          this.currentPiece.populateField(this.field);
          this.handlePieceStop(this.handleClear.drop);
          break;
        // P key

        case 80:
          this.isPaused ? this.dropPiece(this.dropSpeed) : cancelAnimationFrame(this.handleClear.drop);
          this.isPaused = !this.isPaused;
          break;

        default:
          break;
      }

      this.currentPiece.setOuterSquares();
      this.render();
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

        if (this.field[_row] && this.field[_row][_col]) {
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
    key: "restartGame",
    value: function restartGame() {
      if (!this.opponent) {
        this.scoreKeeper.resetScore();
        var minutes = document.querySelector('.minutes');
        var seconds = document.querySelector('.seconds');
        minutes.innerHTML = '0';
        seconds.innerHTML = '00';
        this.startTimer();
        this.startElevating(5000);
        this.adjustElevate();
      }

      var field = new _field_field__WEBPACK_IMPORTED_MODULE_0__["default"]();
      this.field = field.generateField();
      this.render();
      this.gameIsOver = false;
      if (this.opponent) this.opponent.gameIsOver = false;
      this.dropSpeed = 1;
      this.play();
      var gameOverDiv = document.querySelector('.game-over-div');
      if (gameOverDiv) gameOverDiv.remove();
    }
  }, {
    key: "returnToMenu",
    value: function returnToMenu() {
      document.querySelector('.game-over-div').remove();
      var field1 = document.querySelector('#field-container-1');
      var field2 = document.querySelector('#field-container-2');

      while (field1.firstChild) {
        field1.removeChild(field1.firstChild);
      }

      while (field2.firstChild) {
        field2.removeChild(field2.firstChild);
      }

      var singlePlayerContent = document.querySelector('.single-player-content');
      if (singlePlayerContent) singlePlayerContent.remove();
      document.getElementById('menu').setAttribute("style", "display: visible");
    }
  }, {
    key: "gameOver",
    value: function gameOver(winner) {
      var _this11 = this;

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

      var gameOptions = document.createElement('div');
      gameOptions.classList.add('game-over-options');
      var restart = document.createElement('h2');
      restart.classList.add('game-over-heading', 'link');
      restart.innerHTML = 'Play Again';
      restart.addEventListener('click', function () {
        _this11.restartGame();

        if (_this11.opponent) _this11.opponent.restartGame();
      });
      var mainMenu = document.createElement('h2');
      mainMenu.classList.add('game-over-heading', 'link');
      mainMenu.innerHTML = 'Main Menu';
      mainMenu.addEventListener('click', this.returnToMenu);
      gameOptions.append(restart);
      gameOptions.append(mainMenu);
      gameOverScreen.append(gameOptions);
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
      var _this12 = this;

      this.clearElevateInterval = setInterval(function () {
        _this12.clearGhostPosition();

        _this12.currentPiece.clearSelfFromBoard(_this12.field);

        _this12.upcomingLines += 1;

        _this12.receiveUpcomingLines();

        _this12.setGhostPosition();

        _this12.currentPiece.populateField(_this12.field);

        _this12.render();
      }, elevateDelay);
    }
  }, {
    key: "adjustElevate",
    value: function adjustElevate() {
      var _this13 = this;

      this.clearElevation = setInterval(function () {
        if (_this13.clearElevateInterval) clearInterval(_this13.clearElevateInterval);
        if (_this13.elevateDelay > 2000) _this13.elevateDelay -= 200;

        _this13.startElevating(_this13.elevateDelay);
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
    value: function changeControls(mode) {
      if (mode === 'single-player') {
        this.controls = {
          left: 37,
          right: 39,
          turnRight: 38,
          softDrop: 40,
          hold: 16,
          turnLeft: 67,
          hardDrop: 32
        };
      } else {
        this.controls = {
          left: 65,
          right: 68,
          turnRight: 87,
          softDrop: 83,
          hold: 81,
          turnLeft: 192,
          hardDrop: 49
        };
      }
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
      this.game1.changeControls('single-player');
      this.game1.restartGame();
      this.singlePlayerContent.createTimer();
    }
  }, {
    key: "renderMultiplayer",
    value: function renderMultiplayer() {
      this.game1.changeControls('multiplayer');
      this.fieldContainer1.style.left = '0vw';
      this.menu.style.display = "none";
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
      this.player1.restartGame();
      this.player2.restartGame();
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
    key: "resetScore",
    value: function resetScore() {
      var scoreKeeper = document.querySelector('.scorekeeper');
      scoreKeeper.innerHTML = 0;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2ZpZWxkL2ZpZWxkLmpzIiwid2VicGFjazovLy8uL3NyYy9maWVsZC9ob2xkYm94LmpzIiwid2VicGFjazovLy8uL3NyYy9maWVsZC9uZXh0Qm94LmpzIiwid2VicGFjazovLy8uL3NyYy9maWVsZC9xdWV1ZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvZ2FtZS9nYW1lLmpzIiwid2VicGFjazovLy8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvbWVudS9tZW51LmpzIiwid2VicGFjazovLy8uL3NyYy9tb2RhbC9tb2RhbC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvbW9kYWwvbXVsdGlwbGF5ZXJDb250ZW50LmpzIiwid2VicGFjazovLy8uL3NyYy9tb2RhbC9zaW5nbGVQbGF5ZXJDb250ZW50LmpzIiwid2VicGFjazovLy8uL3NyYy9tdWx0aXBsYXllci9tdWx0aXBsYXllci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcGllY2VzL2lQaWVjZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcGllY2VzL2pQaWVjZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcGllY2VzL2xQaWVjZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcGllY2VzL29QaWVjZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcGllY2VzL3BpZWNlLmpzIiwid2VicGFjazovLy8uL3NyYy9waWVjZXMvc1BpZWNlLmpzIiwid2VicGFjazovLy8uL3NyYy9waWVjZXMvdFBpZWNlLmpzIiwid2VicGFjazovLy8uL3NyYy9waWVjZXMvelBpZWNlLmpzIiwid2VicGFjazovLy8uL3NyYy9zY29yZWtlZXBlci9zY29yZWtlZXBlci5qcyJdLCJuYW1lcyI6WyJGaWVsZCIsImZpZWxkTnVtIiwiZmllbGQiLCJpIiwicm93IiwicHVzaCIsImNvbHVtbiIsImRvY3VtZW50IiwiY3JlYXRlRWxlbWVudCIsImNsYXNzTGlzdCIsImFkZCIsImFwcGVuZCIsImFwcGVuZENoaWxkIiwiX2NyZWF0ZUNvbHVtbiIsImNvbnRhaW5lciIsInF1ZXVlIiwiUXVldWUiLCJuZXh0Qm94IiwiTmV4dEJveCIsImhvbGRCb3giLCJIb2xkQm94IiwiX2NyZWF0ZUZpZWxkIiwiY3JlYXRlUXVldWUiLCJjcmVhdGVOZXh0Qm94ZXMiLCJwcmVwZW5kIiwiY3JlYXRlQm94IiwiYm94V3JhcHBlciIsImJveCIsImhlYWRpbmciLCJpbm5lckhUTUwiLCJfY3JlYXRlQm94Q29sdW1uIiwiX2NyZWF0ZU5leHRCb3hDb2x1bW4iLCJib3hlcyIsIl9jcmVhdGVOZXh0Qm94IiwicXVldWVNZXRlciIsImFkanVzdFF1ZXVlSGVpZ2h0IiwicGVyY2VudGFnZSIsInF1ZXJ5U2VsZWN0b3IiLCJzdHlsZSIsImhlaWdodCIsIkdhbWUiLCJvcHRpb25zIiwic2V0RmllbGQiLCJjb2xvcnMiLCJnYW1lTnVtIiwiY3VycmVudEJhZyIsInNodWZmbGVCYWciLCJnZW5lcmF0ZUJhZyIsImN1cnJlbnRQaWVjZSIsImhvbGRQaWVjZSIsImdob3N0UG9zaXRpb24iLCJuZXh0QmFnIiwiY2FuSG9sZCIsImhhbmRsZUNsZWFyIiwiZHJvcCIsInJpZ2h0IiwibGVmdCIsImRvd24iLCJkcm9wU3BlZWQiLCJtb3ZlU3BlZWQiLCJkcm9wUGllY2UiLCJiaW5kIiwibW92ZSIsIm1vdmVQaWVjZSIsInJlc3RhcnRHYW1lIiwiaGFuZGxlS2V5UHJlc3MiLCJhbmltYXRlIiwiZnBzSW50ZXJ2YWwiLCJzdGFydFRpbWUiLCJub3ciLCJ0aGVuIiwiaXNQYXVzZWQiLCJrZXlIZWxkIiwib3Bwb25lbnQiLCJjb250cm9scyIsInVwY29taW5nTGluZXMiLCJjb21ibyIsInRTcGluIiwidFNwaW5TdHJlYWsiLCJjb21ib0d1aWRlIiwic3RhcnRFbGV2YXRpbmciLCJjbGVhckVsZXZhdGVJbnRlcnZhbCIsImVsZXZhdGVEZWxheSIsImNsZWFyVGltZXIiLCJzY29yZUtlZXBlciIsIlNjb3JlS2VlcGVyIiwib1BpZWNlIiwiT1BpZWNlIiwiaVBpZWNlIiwiSVBpZWNlIiwidFBpZWNlIiwiVFBpZWNlIiwic1BpZWNlIiwiU1BpZWNlIiwielBpZWNlIiwiWlBpZWNlIiwibFBpZWNlIiwiTFBpZWNlIiwialBpZWNlIiwiSlBpZWNlIiwiZ2VuZXJhdGVGaWVsZCIsInNoaWZ0IiwiY29vcmRpbmF0ZUFycmF5cyIsIk9iamVjdCIsInZhbHVlcyIsImZvckVhY2giLCJhcnJheSIsImNvb3JkaW5hdGUiLCJjb2wiLCJmaWVsZENvbHVtbnMiLCJxdWVyeVNlbGVjdG9yQWxsIiwiZmllbGRTcXVhcmUiLCJjaGlsZHJlbiIsImNvbG9yQ29kZSIsInRvcCIsInBvc2l0aW9uIiwibWFwIiwic2xpY2UiLCJtaWRkbGUiLCJib3R0b20iLCJzdG9wcGVkIiwiaGFuZ2luZ1NxdWFyZXMiLCJfcG9wdWxhdGVHaG9zdFBvc2l0aW9uIiwicmVuZGVyIiwiY2xlYXJTZWxmRnJvbUJvYXJkIiwiX2dlbmVyYXRlUGllY2UiLCJuYW1lIiwic2V0Q3VycmVudFBpZWNlIiwic2hvd0N1cnJlbnRCYWciLCJfcG9wdWxhdGVIb2xkQm94IiwiY29sdW1ucyIsImoiLCJjbGFzc05hbWUiLCJkaXNwbGF5U3F1YXJlcyIsInNxdWFyZSIsInBpZWNlTmFtZSIsImdldEVsZW1lbnRzQnlDbGFzc05hbWUiLCJfcG9wdWxhdGVOZXh0Qm94IiwicGllY2UiLCJiYWciLCJjdXJyZW50SW5kZXgiLCJsZW5ndGgiLCJ0ZW1wb3JhcnlWYWx1ZSIsInJhbmRvbUluZGV4IiwiTWF0aCIsImZsb29yIiwicmFuZG9tIiwicm93SWR4IiwiX18iLCJjb2xJZHgiLCJzcXVhcmVWYWx1ZSIsInJlbW92ZSIsImJvZHkiLCJhZGRFdmVudExpc3RlbmVyIiwiZXZlbnQiLCJ3aGljaCIsInNvZnREcm9wIiwiZ2FtZUlzT3ZlciIsInNldE91dGVyU3F1YXJlcyIsInR1cm5SaWdodCIsImNsZWFyR2hvc3RQb3NpdGlvbiIsInBvcHVsYXRlRmllbGQiLCJzZXRHaG9zdFBvc2l0aW9uIiwidHVybkxlZnQiLCJsZWZ0U2lkZUJsb2NrZWQiLCJyaWdodFNpZGVCbG9ja2VkIiwiaG9sZCIsImhhcmREcm9wIiwiaGFuZGxlUGllY2VTdG9wIiwiY2FuY2VsQW5pbWF0aW9uRnJhbWUiLCJsb3dlc3QiLCJoaWdoZXN0IiwibnVtTGluZXNDbGVhcmVkIiwiaW5jbHVkZXMiLCJfYnJpbmdEb3duRmllbGQiLCJjbGVhckxpbmVzIiwic3RhcnRpbmdSb3ciLCJsZWZ0TW9zdCIsInJpZ2h0TW9zdCIsImxlZnRNb3N0Um93IiwicmlnaHRNb3N0Um93IiwibGVmdE1vc3RDb2wiLCJyaWdodE1vc3RDb2wiLCJudW1MaW5lcyIsImFkZExpbmVzVG9RdWV1ZSIsImFicyIsInJlY2VpdmVVcGNvbWluZ0xpbmVzIiwiYWRkVG9TY29yZSIsImNsZWFyR2hvc3RDbGFzcyIsInBsYXkiLCJmcHMiLCJEYXRlIiwicmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwiZWxhcHNlZCIsImlzRmFsbGluZyIsImJvdHRvbU1vc3QiLCJkaXJlY3Rpb24iLCJhdFRvcCIsImdhbWVPdmVyIiwiaGFuZGxlVG9wUGllY2UiLCJhZGRUb0N1cnJlbnRCYWciLCJyZWZpbGxOZXh0QmFnIiwicmVzZXRTY29yZSIsIm1pbnV0ZXMiLCJzZWNvbmRzIiwic3RhcnRUaW1lciIsImFkanVzdEVsZXZhdGUiLCJnYW1lT3ZlckRpdiIsImZpZWxkMSIsImZpZWxkMiIsImZpcnN0Q2hpbGQiLCJyZW1vdmVDaGlsZCIsInNpbmdsZVBsYXllckNvbnRlbnQiLCJnZXRFbGVtZW50QnlJZCIsInNldEF0dHJpYnV0ZSIsIndpbm5lciIsImdhbWVPdmVyU2NyZWVuIiwiZ2FtZU92ZXJIZWFkaW5nIiwid2lubmVySGVhZGluZyIsInNjb3JlIiwiZ2V0U2NvcmUiLCJnYW1lT3B0aW9ucyIsInJlc3RhcnQiLCJtYWluTWVudSIsInJldHVyblRvTWVudSIsInN0b3BUaW1lciIsImNsZWFySW50ZXJ2YWwiLCJjbGVhckVsZXZhdGlvbiIsInBsYXllciIsImdhcmJhZ2VMaW5lcyIsInJhbmRvbUhvbGUiLCJnYXJiYWdlUm93IiwiY29uY2F0Iiwic2V0SW50ZXJ2YWwiLCJvbGRTZWNvbmQiLCJOdW1iZXIiLCJvbGRNaW51dGUiLCJuZXdTZWNvbmRzIiwibW9kZSIsIm1lbnUiLCJNZW51IiwicmVuZGVyTWVudSIsIm9wdGlvbnNQbGF5ZXIxIiwib3B0aW9uc1BsYXllcjIiLCJnYW1lMSIsImdhbWUyIiwibXVsdGlwbGF5ZXJNb2RlIiwiTXVsdGlwbGF5ZXIiLCJmaWVsZENvbnRhaW5lcjEiLCJmaWVsZENvbnRhaW5lcjIiLCJTaW5nbGVQbGF5ZXJDb250ZW50IiwibXVsdGlwbGF5ZXJDb250ZW50IiwiTXVsdGlwbGF5ZXJDb250ZW50IiwibW9kYWwiLCJNb2RhbCIsInNpbmdsZVBsYXllckJ1dHRvbiIsIm11bHRpcGxheWVyQnV0dG9uIiwiYWRkRXZlbnRMaXN0ZW5lcnMiLCJyZW5kZXJTaW5nbGVQbGF5ZXIiLCJyZW5kZXJNdWx0aXBsYXllciIsImRpc3BsYXkiLCJqdXN0aWZ5Q29udGVudCIsImNyZWF0ZUFsbENvbnRlbnQiLCJjcmVhdGVDb21wbGV0ZUZpZWxkIiwia2V5TGlzdGVuZXIiLCJjaGFuZ2VDb250cm9scyIsImNyZWF0ZVRpbWVyIiwiY29udHJvbHNDb250YWluZXIiLCJjcmVhdGVDb250cm9sc0NvbnRlbnQiLCJjcmVhdGUiLCJfY3JlYXRlQ2xvc2VNb2RhbExpbmsiLCJidXR0b25Db250YWluZXIiLCJyZW5kZXJCdXR0b25zIiwiYnV0dG9uIiwiY2xvc2VMaW5rIiwic3RhcnRNdWx0aXBsYXllciIsImNvbnRlbnQiLCJrZXlzIiwicGxheWVyMSIsInBsYXllcjIiLCJjb250cm9sc0RpdiIsImltYWdlcyIsImRlc2NyaXB0aW9ucyIsInNwYW5zIiwiZGl2cyIsImxhYmVsIiwicCIsImltZyIsImFsbFNpbmdsZVBsYXllckNvbnRlbnQiLCJjcmVhdGVTY29yZUtlZXBlciIsImNvbnRlbnREaXYiLCJ0aW1lciIsImNvbG9uIiwiZWxlIiwic2V0T3Bwb25lbnQiLCJ0dXJuaW5nUG9pbnQiLCJyZW1vdmVTcXVhcmVzIiwib2Zmc2V0R3VpZGUiLCJQaWVjZSIsInRvcE1vc3QiLCJyb3RhdGlvblN0YXRlIiwiY29vcmRpbmF0ZXNBcnJheSIsImNvbHVtblZhbHVlIiwicm93VmFsdWUiLCJwb3NpdGlvbkFycmF5Iiwib2xkU3F1YXJlIiwibmV3U3F1YXJlIiwicmVzdWx0IiwiX3NxdWFyZXNBcmVFcXVhbCIsIm9sZFBvc2l0aW9uIiwic2V0UmVtb3ZlU3F1YXJlcyIsIm9sZFR1cm5pbmdQb2ludCIsInNxdWFyZXMiLCJoZWlnaHREaWZmZXJlbmNlIiwid2lkdGhEaWZmZXJlbmNlIiwibmV3Q29sIiwibmV3Um93IiwibmV3U3F1YXJlcyIsInVuZGVmaW5lZCIsIndhbGxLaWNrIiwib2xkU3F1YXJlcyIsImZpbHRlciIsIl9pbmNsdWRlcyIsImNvb3JkaW5hdGVBcnJheSIsImJlbG93U3F1YXJlIiwic2lkZVNxdWFyZXMiLCJhZGphY2VudExlZnQiLCJhZGphY2VudFJpZ2h0IiwiY29vcmRpbmF0ZVBhaXIiLCJhY3Rpb24iLCJ2YWxpZFNwb3QiLCJzdGFydGluZ09mZnNldCIsIm5leHRPZmZzZXQiLCJiYXNlUG9zaXRpb24iLCJiYXNlVHVybmluZ1BvaW50Iiwic3RhcnRpbmdUcmFuc2xhdGlvbiIsInBvdGVudGlhbFRyYW5zbGF0aW9uIiwicm93U2hpZnQiLCJjb2xTaGlmdCIsInRyYW5zbGF0ZVZlcnRpY2FsIiwidHJhbnNsYXRlSG9yaXpvbnRhbCIsIm51bVRpbWVzUm93U2hpZnRlZCIsIm51bVRpbWVzQ29sU2hpZnRlZCIsIm5ld1Bvc2l0aW9uIiwic2NvcmVLZWVwZXJEaXYiLCJsaW5lc0NsZWFyZWQiXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNB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YUFBTytDLFdBQVcsQ0FBQ3ZELFNBQW5CO0FBQ0giLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiL2Rpc3QvXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2luZGV4LmpzXCIpO1xuIiwiaW1wb3J0IEhvbGRCb3ggZnJvbSAnLi9ob2xkYm94JztcbmltcG9ydCBOZXh0Qm94IGZyb20gJy4vbmV4dEJveCc7XG5pbXBvcnQgUXVldWUgZnJvbSAnLi9xdWV1ZSc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEZpZWxkIHsgIFxuICAgIGNvbnN0cnVjdG9yKGZpZWxkTnVtKSB7XG4gICAgICAgIHRoaXMuZmllbGROdW0gPSBmaWVsZE51bTtcbiAgICB9XG4gICAgXG4gICAgZ2VuZXJhdGVGaWVsZCgpIHtcbiAgICAgICAgbGV0IGZpZWxkID0gW107XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMjA7IGkrKykge1xuICAgICAgICAgICAgbGV0IHJvdyA9IFswLDAsMCwwLDAsMCwwLDAsMCwwXTtcbiAgICAgICAgICAgIGZpZWxkLnB1c2gocm93KTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZmllbGQ7XG4gICAgfVxuXG4gICAgX2NyZWF0ZUNvbHVtbigpIHtcbiAgICAgICAgbGV0IGNvbHVtbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ1bFwiKTtcbiAgICAgICAgY29sdW1uLmNsYXNzTGlzdC5hZGQoYGZpZWxkLWNvbHVtbmAsIGBmaWVsZC0ke3RoaXMuZmllbGROdW19YCk7XG5cbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCAyMDsgaSsrKSB7XG4gICAgICAgICAgICBjb2x1bW4uYXBwZW5kKGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaVwiKSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGNvbHVtbjtcbiAgICB9XG5cbiAgICBfY3JlYXRlRmllbGQoKSB7XG4gICAgICAgIGxldCBmaWVsZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIGZpZWxkLmNsYXNzTGlzdC5hZGQoYGZpZWxkLWJveGAsIGBmaWVsZC0ke3RoaXMuZmllbGROdW19YCk7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMTA7IGkrKykge1xuICAgICAgICAgICAgZmllbGQuYXBwZW5kQ2hpbGQodGhpcy5fY3JlYXRlQ29sdW1uKCkpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBmaWVsZDtcbiAgICB9XG5cbiAgICBjcmVhdGVDb21wbGV0ZUZpZWxkKGNvbnRhaW5lcikge1xuICAgICAgICBsZXQgcXVldWUgPSBuZXcgUXVldWUodGhpcy5maWVsZE51bSk7XG4gICAgICAgIGxldCBuZXh0Qm94ID0gbmV3IE5leHRCb3godGhpcy5maWVsZE51bSk7XG4gICAgICAgIGxldCBob2xkQm94ID0gbmV3IEhvbGRCb3godGhpcy5maWVsZE51bSk7XG4gICAgICAgIGNvbnRhaW5lci5hcHBlbmQodGhpcy5fY3JlYXRlRmllbGQoKSk7XG4gICAgICAgIGNvbnRhaW5lci5hcHBlbmQocXVldWUuY3JlYXRlUXVldWUoKSk7XG4gICAgICAgIGNvbnRhaW5lci5hcHBlbmQobmV4dEJveC5jcmVhdGVOZXh0Qm94ZXMoKSk7XG4gICAgICAgIGNvbnRhaW5lci5wcmVwZW5kKGhvbGRCb3guY3JlYXRlQm94KCkpO1xuICAgICAgICByZXR1cm4gY29udGFpbmVyO1xuICAgIH1cblxufSIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIEhvbGRCb3gge1xuICAgIGNvbnN0cnVjdG9yKGZpZWxkTnVtKSB7XG4gICAgICAgIHRoaXMuZmllbGROdW0gPSBmaWVsZE51bTtcbiAgICB9XG5cbiAgICBfY3JlYXRlQm94Q29sdW1uKCkge1xuICAgICAgICBsZXQgY29sdW1uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInVsXCIpO1xuICAgICAgICBjb2x1bW4uY2xhc3NMaXN0LmFkZChgaG9sZC1jb2x1bW5gLCBgZmllbGQtJHt0aGlzLmZpZWxkTnVtfWApO1xuXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgNDsgaSsrKSB7XG4gICAgICAgICAgICBjb2x1bW4uYXBwZW5kKGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaVwiKSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGNvbHVtbjtcbiAgICB9XG5cbiAgICBjcmVhdGVCb3goKSB7XG4gICAgICAgIGxldCBib3hXcmFwcGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgYm94V3JhcHBlci5jbGFzc0xpc3QuYWRkKGBob2xkLWJveC13cmFwcGVyYCwgYGZpZWxkLSR7dGhpcy5maWVsZE51bX1gKTtcbiAgICAgICAgbGV0IGJveCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIGJveC5jbGFzc0xpc3QuYWRkKGBob2xkLWJveGAsIGBmaWVsZC0ke3RoaXMuZmllbGROdW19YCk7XG4gICAgICAgIGxldCBoZWFkaW5nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgyXCIpO1xuICAgICAgICBoZWFkaW5nLmlubmVySFRNTCA9IFwiSE9MRFwiO1xuICAgICAgICBib3hXcmFwcGVyLmFwcGVuZENoaWxkKGhlYWRpbmcpO1xuICAgICAgICBib3hXcmFwcGVyLmFwcGVuZENoaWxkKGJveCk7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgNTsgaSsrKSB7XG4gICAgICAgICAgICBib3guYXBwZW5kQ2hpbGQodGhpcy5fY3JlYXRlQm94Q29sdW1uKCkpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBib3hXcmFwcGVyO1xuICAgIH1cbn0iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBOZXh0Qm94IHtcbiAgICBjb25zdHJ1Y3RvcihmaWVsZE51bSkge1xuICAgICAgICB0aGlzLmZpZWxkTnVtID0gZmllbGROdW07XG4gICAgfVxuXG4gICAgX2NyZWF0ZU5leHRCb3hDb2x1bW4oKSB7XG4gICAgICAgIGxldCBjb2x1bW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidWxcIik7XG4gICAgICAgIGNvbHVtbi5jbGFzc0xpc3QuYWRkKGBuZXh0LWNvbHVtbmAsIGBmaWVsZC0ke3RoaXMuZmllbGROdW19YCk7XG5cbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCA0OyBpKyspIHtcbiAgICAgICAgICAgIGNvbHVtbi5hcHBlbmQoZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpXCIpKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gY29sdW1uO1xuICAgIH1cblxuICAgIF9jcmVhdGVOZXh0Qm94KCkge1xuICAgICAgICBsZXQgYm94ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgYm94LmNsYXNzTGlzdC5hZGQoYG5leHQtYm94YCwgYGZpZWxkLSR7dGhpcy5maWVsZE51bX1gKTtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCA1OyBpKyspIHtcbiAgICAgICAgICAgIGJveC5hcHBlbmRDaGlsZCh0aGlzLl9jcmVhdGVOZXh0Qm94Q29sdW1uKCkpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBib3g7XG4gICAgfVxuXG4gICAgY3JlYXRlTmV4dEJveGVzKCkge1xuICAgICAgICBsZXQgYm94ZXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICBsZXQgaGVhZGluZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMlwiKTtcbiAgICAgICAgaGVhZGluZy5pbm5lckhUTUwgPSBcIk5FWFRcIjtcbiAgICAgICAgYm94ZXMuY2xhc3NMaXN0LmFkZChgbmV4dC1ib3hlc2AsIGBmaWVsZC0ke3RoaXMuZmllbGROdW19YCk7XG4gICAgICAgIGJveGVzLmFwcGVuZENoaWxkKGhlYWRpbmcpO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IDU7IGkrKykge1xuICAgICAgICAgICAgYm94ZXMuYXBwZW5kQ2hpbGQodGhpcy5fY3JlYXRlTmV4dEJveCgpKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gYm94ZXM7XG4gICAgfVxufSIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIFF1ZXVlIHtcbiAgICBjb25zdHJ1Y3RvcihmaWVsZE51bSkge1xuICAgICAgICB0aGlzLmZpZWxkTnVtID0gZmllbGROdW07XG4gICAgfVxuXG4gICAgY3JlYXRlUXVldWUoKSB7XG4gICAgICAgIGxldCBxdWV1ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIHF1ZXVlLmNsYXNzTGlzdC5hZGQoYHF1ZXVlYCwgYGZpZWxkLSR7dGhpcy5maWVsZE51bX1gKTtcbiAgICAgICAgbGV0IHF1ZXVlTWV0ZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICBxdWV1ZU1ldGVyLmNsYXNzTGlzdC5hZGQoYHF1ZXVlLW1ldGVyYCwgYGZpZWxkLSR7dGhpcy5maWVsZE51bX1gKTtcbiAgICAgICAgcXVldWUuYXBwZW5kQ2hpbGQocXVldWVNZXRlcik7XG4gICAgICAgIHJldHVybiBxdWV1ZTtcbiAgICB9XG59XG5cbmV4cG9ydCBjb25zdCBhZGp1c3RRdWV1ZUhlaWdodCA9IChmaWVsZE51bSwgcGVyY2VudGFnZSkgPT4ge1xuICAgIGxldCBxdWV1ZU1ldGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLnF1ZXVlLW1ldGVyLmZpZWxkLSR7ZmllbGROdW19YCk7XG4gICAgaWYgKHBlcmNlbnRhZ2UgPiAxMDApIHBlcmNlbnRhZ2UgPSAxMDA7XG4gICAgcXVldWVNZXRlci5zdHlsZS5oZWlnaHQgPSBgJHtwZXJjZW50YWdlfSVgXG59IiwiaW1wb3J0IEZpZWxkIGZyb20gJy4uL2ZpZWxkL2ZpZWxkJztcbmltcG9ydCBPUGllY2UgZnJvbSAnLi4vcGllY2VzL29QaWVjZSc7XG5pbXBvcnQgSVBpZWNlIGZyb20gJy4uL3BpZWNlcy9pUGllY2UnO1xuaW1wb3J0IFRQaWVjZSBmcm9tICcuLi9waWVjZXMvdFBpZWNlJztcbmltcG9ydCBTUGllY2UgZnJvbSAnLi4vcGllY2VzL3NQaWVjZSc7XG5pbXBvcnQgWlBpZWNlIGZyb20gJy4uL3BpZWNlcy96UGllY2UnO1xuaW1wb3J0IExQaWVjZSBmcm9tICcuLi9waWVjZXMvbFBpZWNlJztcbmltcG9ydCBKUGllY2UgZnJvbSAnLi4vcGllY2VzL2pQaWVjZSc7XG5pbXBvcnQgeyBhZGp1c3RRdWV1ZUhlaWdodCB9IGZyb20gJy4uL2ZpZWxkL3F1ZXVlJztcbmltcG9ydCBTY29yZUtlZXBlciBmcm9tICcuLi9zY29yZWtlZXBlci9zY29yZWtlZXBlcic7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEdhbWUge1xuICAgIGNvbnN0cnVjdG9yKG9wdGlvbnMpIHtcbiAgICAgICAgdGhpcy5maWVsZCA9IHRoaXMuc2V0RmllbGQoKVxuXG4gICAgICAgIHRoaXMuY29sb3JzID0ge1xuICAgICAgICAgICAgMTogXCJ5ZWxsb3dcIixcbiAgICAgICAgICAgIDI6IFwiYmx1ZVwiLFxuICAgICAgICAgICAgMzogXCJwdXJwbGVcIixcbiAgICAgICAgICAgIDQ6IFwiZ3JlZW5cIixcbiAgICAgICAgICAgIDU6IFwicmVkXCIsXG4gICAgICAgICAgICA2OiBcIm9yYW5nZVwiLFxuICAgICAgICAgICAgNzogXCJkYXJrLWJsdWVcIixcbiAgICAgICAgICAgIDg6IFwiZ3JleVwiXG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmdhbWVOdW0gPSBvcHRpb25zLmdhbWVOdW07XG5cbiAgICAgICAgdGhpcy5jdXJyZW50QmFnID0gdGhpcy5zaHVmZmxlQmFnKHRoaXMuZ2VuZXJhdGVCYWcoKSk7XG4gICAgICAgIHRoaXMuY3VycmVudFBpZWNlID0gJyc7XG4gICAgICAgIHRoaXMuaG9sZFBpZWNlID0gJyc7XG4gICAgICAgIHRoaXMuZ2hvc3RQb3NpdGlvbiA9ICcnO1xuICAgICAgICB0aGlzLm5leHRCYWcgPSB0aGlzLnNodWZmbGVCYWcodGhpcy5nZW5lcmF0ZUJhZygpKTtcblxuICAgICAgICAvLyBwcmV2ZW50cyBwbGF5ZXIgZnJvbSBob2xkaW5nIHBpZWNlIG11bHRpcGxlIHRpbWVzXG4gICAgICAgIHRoaXMuY2FuSG9sZCA9IHRydWU7XG5cbiAgICAgICAgdGhpcy5oYW5kbGVDbGVhciA9IHtcbiAgICAgICAgICAgIGRyb3A6ICcnLFxuICAgICAgICAgICAgcmlnaHQ6ICcnLFxuICAgICAgICAgICAgbGVmdDogJycsXG4gICAgICAgICAgICBkb3duOiAnJ1xuICAgICAgICB9O1xuXG4gICAgICAgIC8vIGZvciBhbmltYXRpb25zXG4gICAgICAgIHRoaXMuZHJvcFNwZWVkID0gMTtcbiAgICAgICAgdGhpcy5tb3ZlU3BlZWQgPSBvcHRpb25zLm1vdmVTcGVlZDtcbiAgICAgICAgdGhpcy5kcm9wUGllY2UgPSB0aGlzLmRyb3BQaWVjZS5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLmRyb3AgPSB0aGlzLmRyb3AuYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5tb3ZlID0gdGhpcy5tb3ZlLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMubW92ZVBpZWNlID0gdGhpcy5tb3ZlUGllY2UuYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5yZXN0YXJ0R2FtZSA9IHRoaXMucmVzdGFydEdhbWUuYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5oYW5kbGVLZXlQcmVzcyA9IHRoaXMuaGFuZGxlS2V5UHJlc3MuYmluZCh0aGlzKTtcblxuICAgICAgICAvLyBrZWVwIHRyYWNrIG9mIHRoZSBmb2xsb3dpbmcgdmFyaWFibGVzIGZvciByZXF1ZXN0QW5pbWF0aW9uRnJhbWUgdGhyb3R0bGluZ1xuICAgICAgICB0aGlzLmFuaW1hdGUgPSB7XG4gICAgICAgICAgICBkcm9wOiB7XG4gICAgICAgICAgICAgICAgZnBzSW50ZXJ2YWw6ICcnLFxuICAgICAgICAgICAgICAgIHN0YXJ0VGltZTogJycsXG4gICAgICAgICAgICAgICAgbm93OiAnJyxcbiAgICAgICAgICAgICAgICB0aGVuOiAnJ1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHJpZ2h0OiB7XG4gICAgICAgICAgICAgICAgZnBzSW50ZXJ2YWw6ICcnLFxuICAgICAgICAgICAgICAgIHN0YXJ0VGltZTogJycsXG4gICAgICAgICAgICAgICAgbm93OiAnJyxcbiAgICAgICAgICAgICAgICB0aGVuOiAnJ1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGxlZnQ6IHtcbiAgICAgICAgICAgICAgICBmcHNJbnRlcnZhbDogJycsXG4gICAgICAgICAgICAgICAgc3RhcnRUaW1lOiAnJyxcbiAgICAgICAgICAgICAgICBub3c6ICcnLFxuICAgICAgICAgICAgICAgIHRoZW46ICcnXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgZG93bjoge1xuICAgICAgICAgICAgICAgIGZwc0ludGVydmFsOiAnJyxcbiAgICAgICAgICAgICAgICBzdGFydFRpbWU6ICcnLFxuICAgICAgICAgICAgICAgIG5vdzogJycsXG4gICAgICAgICAgICAgICAgdGhlbjogJydcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC8vIHBhdXNpbmcgdGhlIGdhbWVcbiAgICAgICAgdGhpcy5pc1BhdXNlZCA9IGZhbHNlO1xuXG4gICAgICAgIHRoaXMua2V5SGVsZCA9IHtcbiAgICAgICAgICAgIGRvd246IGZhbHNlLFxuICAgICAgICAgICAgcmlnaHQ6IGZhbHNlLFxuICAgICAgICAgICAgbGVmdDogZmFsc2VcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMub3Bwb25lbnQgPSBcIlwiO1xuICAgICAgICB0aGlzLmNvbnRyb2xzID0gb3B0aW9ucy5jb250cm9scztcbiAgICAgICAgdGhpcy51cGNvbWluZ0xpbmVzID0gMDtcbiAgICAgICAgdGhpcy5jb21ibyA9IC0xO1xuICAgICAgICB0aGlzLnRTcGluID0gZmFsc2U7XG4gICAgICAgIHRoaXMudFNwaW5TdHJlYWsgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5jb21ib0d1aWRlID0geyAwOiAwLCAxOiAwLCAyOiAxLCAzOiAxLCA0OiAxLCA1OiAyLCA2OiAyLCA3OiAzLCA4OiAzLCA5OiA0LCAxMDogNCwgMTE6IDQsIDEyOiA1IH07XG5cbiAgICAgICAgLy8gc2luZ2xlIHBsYXllclxuICAgICAgICB0aGlzLnN0YXJ0RWxldmF0aW5nID0gdGhpcy5zdGFydEVsZXZhdGluZy5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLmNsZWFyRWxldmF0ZUludGVydmFsID0gJyc7XG4gICAgICAgIHRoaXMuZWxldmF0ZURlbGF5ID0gNTAwMDtcbiAgICAgICAgdGhpcy5jbGVhclRpbWVyID0gJyc7XG4gICAgICAgIHRoaXMuc2NvcmVLZWVwZXIgPSBuZXcgU2NvcmVLZWVwZXIoKTtcbiAgICB9XG5cbiAgICBnZW5lcmF0ZUJhZygpIHtcbiAgICAgICAgbGV0IG9QaWVjZSA9IG5ldyBPUGllY2UoKTtcbiAgICAgICAgbGV0IGlQaWVjZSA9IG5ldyBJUGllY2UoKTtcbiAgICAgICAgbGV0IHRQaWVjZSA9IG5ldyBUUGllY2UoKTtcbiAgICAgICAgbGV0IHNQaWVjZSA9IG5ldyBTUGllY2UoKTtcbiAgICAgICAgbGV0IHpQaWVjZSA9IG5ldyBaUGllY2UoKTtcbiAgICAgICAgbGV0IGxQaWVjZSA9IG5ldyBMUGllY2UoKTtcbiAgICAgICAgbGV0IGpQaWVjZSA9IG5ldyBKUGllY2UoKTtcblxuICAgICAgICByZXR1cm4gW29QaWVjZSwgaVBpZWNlLCB0UGllY2UsIHNQaWVjZSwgelBpZWNlLCBsUGllY2UsIGpQaWVjZV07XG4gICAgfVxuXG4gICAgc2V0RmllbGQoKSB7XG4gICAgICAgIGxldCBmaWVsZCA9IG5ldyBGaWVsZCgpO1xuICAgICAgICByZXR1cm4gZmllbGQuZ2VuZXJhdGVGaWVsZCgpO1xuICAgIH1cblxuICAgIC8vIHRha2UgcGllY2UgZnJvbSBjdXJyZW50QmFnIGFuZCBzZXQgaXQgYXMgdGhlIGN1cnJlbnQgcGllY2VcbiAgICBzZXRDdXJyZW50UGllY2UoKSB7XG4gICAgICAgIHRoaXMuY3VycmVudFBpZWNlID0gdGhpcy5jdXJyZW50QmFnLnNoaWZ0KCk7XG4gICAgfVxuXG4gICAgLy8gcmVtb3ZlcyBvbGQgZ2hvc3QgcG9zaXRpb24gZnJvbSB0aGlzLmZpZWxkIGJlZm9yZSBjaGFuZ2luZyBwaWVjZSBwb3NpdGlvblxuICAgIGNsZWFyR2hvc3RQb3NpdGlvbigpIHtcbiAgICAgICAgbGV0IGNvb3JkaW5hdGVBcnJheXMgPSBPYmplY3QudmFsdWVzKHRoaXMuZ2hvc3RQb3NpdGlvbik7XG4gICAgICAgIGNvb3JkaW5hdGVBcnJheXMuZm9yRWFjaChhcnJheSA9PiB7XG4gICAgICAgICAgICBhcnJheS5mb3JFYWNoKGNvb3JkaW5hdGUgPT4ge1xuICAgICAgICAgICAgICAgIGxldCBbcm93LCBjb2xdID0gW2Nvb3JkaW5hdGVbMF0sIGNvb3JkaW5hdGVbMV1dO1xuICAgICAgICAgICAgICAgIC8vIHByZXZlbnQgbWV0aG9kIGZyb20gY2xlYXJpbmcgcGllY2UgaWYgaXQgaGFwcGVucyB0byBiZSB3aGVyZSB0aGUgZ2hvc3QgcG9zaXRpb24gc2hvdWxkIGJlXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuZmllbGRbcm93XSAmJiB0aGlzLmZpZWxkW3Jvd11bY29sXSA9PT0gXCJ4XCIgJiYgcm93ID49IDApIHRoaXMuZmllbGRbcm93XVtjb2xdID0gMDtcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIC8vIGNsZWFycyB0aGUgY29sb3IgY2xhc3NlcyBmcm9tIHRoZSBicm93c2VyIGZpZWxkXG4gICAgY2xlYXJHaG9zdENsYXNzKCkge1xuICAgICAgICBsZXQgZmllbGRDb2x1bW5zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChgLmZpZWxkLWNvbHVtbi5maWVsZC0ke3RoaXMuZ2FtZU51bX1gKTtcbiAgICAgICAgT2JqZWN0LnZhbHVlcyh0aGlzLmdob3N0UG9zaXRpb24pLmZvckVhY2goYXJyYXkgPT4ge1xuICAgICAgICAgICAgYXJyYXkuZm9yRWFjaChjb29yZGluYXRlID0+IHtcbiAgICAgICAgICAgICAgICBsZXQgW3JvdywgY29sXSA9IFtjb29yZGluYXRlWzBdLCBjb29yZGluYXRlWzFdXTtcbiAgICAgICAgICAgICAgICBsZXQgZmllbGRTcXVhcmUgPSBmaWVsZENvbHVtbnNbY29sXS5jaGlsZHJlbltyb3ddO1xuICAgICAgICAgICAgICAgIGlmIChmaWVsZFNxdWFyZSkge1xuICAgICAgICAgICAgICAgICAgICBmaWVsZFNxdWFyZS5jbGFzc0xpc3QgPSB0aGlzLmNvbG9yc1t0aGlzLmN1cnJlbnRQaWVjZS5jb2xvckNvZGVdO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pXG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIC8vIGZpbmQgYXBwcm9wcmlhdGUgZ2hvc3QgcG9zaXRpb24gYXMgcGllY2UgcG9zaXRpb24gY2hhbmdlc1xuICAgIHNldEdob3N0UG9zaXRpb24oKSB7XG4gICAgICAgIGxldCBnaG9zdFBvc2l0aW9uID0ge1xuICAgICAgICAgICAgdG9wOiB0aGlzLmN1cnJlbnRQaWVjZS5wb3NpdGlvbi50b3AubWFwKGNvb3JkaW5hdGUgPT4gY29vcmRpbmF0ZS5zbGljZSgpKSxcbiAgICAgICAgICAgIG1pZGRsZTogdGhpcy5jdXJyZW50UGllY2UucG9zaXRpb24ubWlkZGxlLm1hcChjb29yZGluYXRlID0+IGNvb3JkaW5hdGUuc2xpY2UoKSksXG4gICAgICAgICAgICBib3R0b206IHRoaXMuY3VycmVudFBpZWNlLnBvc2l0aW9uLmJvdHRvbS5tYXAoY29vcmRpbmF0ZSA9PiBjb29yZGluYXRlLnNsaWNlKCkpXG4gICAgICAgIH1cbiAgICAgICAgbGV0IHN0b3BwZWQgPSBmYWxzZTtcbiAgICAgICAgd2hpbGUgKCFzdG9wcGVkKSB7XG4gICAgICAgICAgICBsZXQgaGFuZ2luZ1NxdWFyZXMgPSB0aGlzLmN1cnJlbnRQaWVjZS5oYW5naW5nU3F1YXJlcyhnaG9zdFBvc2l0aW9uKTtcbiAgICAgICAgICAgIGhhbmdpbmdTcXVhcmVzLmZvckVhY2goY29vcmRpbmF0ZSA9PiB7XG4gICAgICAgICAgICAgICAgbGV0IFtyb3csIGNvbF0gPSBbY29vcmRpbmF0ZVswXSwgY29vcmRpbmF0ZVsxXV07XG4gICAgICAgICAgICAgICAgaWYgKHJvdyA8IDAgfHwgcm93ICsgMSA9PT0gMjAgfHwgdGhpcy5maWVsZFtyb3cgKyAxXVtjb2xdKSBzdG9wcGVkID0gdHJ1ZTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgaWYgKHN0b3BwZWQpIGJyZWFrO1xuICAgICAgICAgICAgZ2hvc3RQb3NpdGlvbi50b3AgPSBnaG9zdFBvc2l0aW9uLnRvcC5tYXAoYXJyYXkgPT4gW2FycmF5WzBdICsgMSwgYXJyYXlbMV1dKTtcbiAgICAgICAgICAgIGdob3N0UG9zaXRpb24ubWlkZGxlID0gZ2hvc3RQb3NpdGlvbi5taWRkbGUubWFwKGFycmF5ID0+IFthcnJheVswXSArIDEsIGFycmF5WzFdXSk7XG4gICAgICAgICAgICBnaG9zdFBvc2l0aW9uLmJvdHRvbSA9IGdob3N0UG9zaXRpb24uYm90dG9tLm1hcChhcnJheSA9PiBbYXJyYXlbMF0gKyAxLCBhcnJheVsxXV0pO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuZ2hvc3RQb3NpdGlvbiA9IGdob3N0UG9zaXRpb247XG4gICAgICAgIHRoaXMuX3BvcHVsYXRlR2hvc3RQb3NpdGlvbigpO1xuICAgIH1cblxuICAgIC8vIHBvcHVsYXRlIHRoaXMuZmllbGQgd2l0aCAneCcgd2hlcmV2ZXIgdGhlIGdob3N0IHBvc2l0aW9uIGlzIGNhbGN1bGF0ZWQgdG8gYmVcbiAgICBfcG9wdWxhdGVHaG9zdFBvc2l0aW9uKCkge1xuICAgICAgICBsZXQgY29vcmRpbmF0ZUFycmF5cyA9IE9iamVjdC52YWx1ZXModGhpcy5naG9zdFBvc2l0aW9uKTtcbiAgICAgICAgY29vcmRpbmF0ZUFycmF5cy5mb3JFYWNoKGFycmF5ID0+IHtcbiAgICAgICAgICAgIGFycmF5LmZvckVhY2goY29vcmRpbmF0ZSA9PiB7XG4gICAgICAgICAgICAgICAgbGV0IFtyb3csIGNvbF0gPSBbY29vcmRpbmF0ZVswXSwgY29vcmRpbmF0ZVsxXV07XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuZmllbGRbcm93XSAmJiB0aGlzLmZpZWxkW3Jvd11bY29sXSAhPT0gdGhpcy5jdXJyZW50UGllY2UuY29sb3JDb2RlKSB0aGlzLmZpZWxkW3Jvd11bY29sXSA9IFwieFwiO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMucmVuZGVyKCk7XG4gICAgfVxuXG4gICAgLy8gaG9sZCBwaWVjZSBmb3IgbGF0ZXIgdXNlIFxuICAgIGhvbGQoKSB7XG4gICAgICAgIGlmICghdGhpcy5jYW5Ib2xkKSByZXR1cm47XG4gICAgICAgIHRoaXMuY3VycmVudFBpZWNlLmNsZWFyU2VsZkZyb21Cb2FyZCh0aGlzLmZpZWxkKTsgXG4gICAgICAgIHRoaXMucmVuZGVyKCk7XG5cbiAgICAgICAgaWYgKCF0aGlzLmhvbGRQaWVjZSkge1xuICAgICAgICAgICAgLy8gcGFzcyBjdXJyZW50IHBpZWNlIG5hbWUgaW50byBnZW5lcmF0ZSBwaWVjZSBpbiBvcmRlciB0byBnZW5lcmF0ZSBhIG5ldyBwaWVjZSBpbnN0YW5jZVxuICAgICAgICAgICAgdGhpcy5ob2xkUGllY2UgPSB0aGlzLl9nZW5lcmF0ZVBpZWNlKHRoaXMuY3VycmVudFBpZWNlLm5hbWUpO1xuICAgICAgICAgICAgdGhpcy5zZXRDdXJyZW50UGllY2UoKTtcbiAgICAgICAgICAgIC8vIHJlLXJlbmRlciBuZXh0IGJveGVzIHRvIGFwcHJvcHJpYXRlbHkgc2hvdyBjdXJyZW50IGJhZ1xuICAgICAgICAgICAgdGhpcy5zaG93Q3VycmVudEJhZygpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5jdXJyZW50UGllY2UgPSB0aGlzLl9nZW5lcmF0ZVBpZWNlKHRoaXMuY3VycmVudFBpZWNlLm5hbWUpO1xuICAgICAgICAgICAgW3RoaXMuY3VycmVudFBpZWNlLCB0aGlzLmhvbGRQaWVjZV0gPSBbdGhpcy5ob2xkUGllY2UsIHRoaXMuY3VycmVudFBpZWNlXTtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgLy8gZGlzYWJsZSBob2xkLXBpZWNlIHJpZ2h0IGFmdGVyIHBsYXllciBob2xkcyBhIHBpZWNlXG4gICAgICAgIHRoaXMuY2FuSG9sZCA9IGZhbHNlO1xuXG4gICAgICAgIHRoaXMuX3BvcHVsYXRlSG9sZEJveCgpO1xuICAgIH1cblxuICAgIF9wb3B1bGF0ZUhvbGRCb3goKSB7XG4gICAgICAgIGxldCBjb2x1bW5zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLmhvbGQtYm94LmZpZWxkLSR7dGhpcy5nYW1lTnVtfWApLmNoaWxkcmVuO1xuXG4gICAgICAgIC8vIHJlbW92ZSBjb2xvcnMgZnJvbSBwcmV2aW91cyBwaWVjZXNcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCA1OyBpKyspIHtcbiAgICAgICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgNDsgaisrKSB7XG4gICAgICAgICAgICAgICAgLy8gY29sdW1ucy5jaGlsZHJlbiBpcyBub2RlbGlzdCBvZiA8bGlzPlxuICAgICAgICAgICAgICAgIGNvbHVtbnNbaV0uY2hpbGRyZW5bal0uY2xhc3NOYW1lID0gXCJcIjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuaG9sZFBpZWNlLmRpc3BsYXlTcXVhcmVzLmZvckVhY2goc3F1YXJlID0+IHtcbiAgICAgICAgICAgIGxldCBbY29sLCByb3ddID0gW3NxdWFyZVswXSwgc3F1YXJlWzFdXTtcbiAgICAgICAgICAgIGNvbHVtbnNbY29sXS5jaGlsZHJlbltyb3ddLmNsYXNzTGlzdC5hZGQodGhpcy5jb2xvcnNbdGhpcy5ob2xkUGllY2UuY29sb3JDb2RlXSk7XG4gICAgICAgIH0pXG5cbiAgICB9XG5cbiAgICAvLyB1c2VkIGZvciB0aGlzLmhvbGQoKTogZ2VuZXJhdGUgYSBuZXcgcGllY2Ugc28gdGhhdCBhIGhvbGRwaWVjZSB0aGF0IGlzIHJlLXJlbmRlcmVkIG9uIHRoZSBib2FyZCB3aWxsIG5vdCBzdGFydCBmcm9tIHRoZSBvbGQgcG9zaXRpb25cbiAgICBfZ2VuZXJhdGVQaWVjZShwaWVjZU5hbWUpIHtcbiAgICAgICAgc3dpdGNoKHBpZWNlTmFtZSkge1xuICAgICAgICAgICAgY2FzZSBcIlRQaWVjZVwiOlxuICAgICAgICAgICAgICAgIHJldHVybiBuZXcgVFBpZWNlO1xuICAgICAgICAgICAgY2FzZSBcIk9QaWVjZVwiOlxuICAgICAgICAgICAgICAgIHJldHVybiBuZXcgT1BpZWNlO1xuICAgICAgICAgICAgY2FzZSBcIklQaWVjZVwiOlxuICAgICAgICAgICAgICAgIHJldHVybiBuZXcgSVBpZWNlO1xuICAgICAgICAgICAgY2FzZSBcIkxQaWVjZVwiOlxuICAgICAgICAgICAgICAgIHJldHVybiBuZXcgTFBpZWNlO1xuICAgICAgICAgICAgY2FzZSBcIkpQaWVjZVwiOlxuICAgICAgICAgICAgICAgIHJldHVybiBuZXcgSlBpZWNlO1xuICAgICAgICAgICAgY2FzZSBcIlNQaWVjZVwiOlxuICAgICAgICAgICAgICAgIHJldHVybiBuZXcgU1BpZWNlO1xuICAgICAgICAgICAgY2FzZSBcIlpQaWVjZVwiOlxuICAgICAgICAgICAgICAgIHJldHVybiBuZXcgWlBpZWNlO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLy8gdGFrZSBvbmUgcGllY2UgZnJvbSBuZXh0QmFnIGFuZCBhZGQgdG8gY3VycmVudEJhZ1xuICAgIGFkZFRvQ3VycmVudEJhZygpIHtcbiAgICAgICAgdGhpcy5jdXJyZW50QmFnLnB1c2godGhpcy5uZXh0QmFnLnNoaWZ0KCkpO1xuICAgIH1cblxuICAgIHNob3dDdXJyZW50QmFnKCkge1xuICAgICAgICBsZXQgYm94ZXMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKGBuZXh0LWJveCBmaWVsZC0ke3RoaXMuZ2FtZU51bX1gKTtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCA1OyBpKyspIHtcbiAgICAgICAgICAgIHRoaXMuX3BvcHVsYXRlTmV4dEJveChib3hlc1tpXSwgdGhpcy5jdXJyZW50QmFnW2ldKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIF9wb3B1bGF0ZU5leHRCb3goYm94LCBwaWVjZSkge1xuICAgICAgICAvLyBjb2x1bW5zIGlzIG5vZGVsaXN0IG9mIDx1bHM+XG4gICAgICAgIGxldCBjb2x1bW5zID0gYm94LmNoaWxkcmVuO1xuXG4gICAgICAgIC8vIHJlbW92ZSBjb2xvcnMgZnJvbSBwcmV2aW91cyBwaWVjZVxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IDU7IGkrKykge1xuICAgICAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCA0OyBqKyspIHtcbiAgICAgICAgICAgICAgICAvLyBjb2x1bW5zLmNoaWxkcmVuIGlzIG5vZGVsaXN0IG9mIDxsaXM+XG4gICAgICAgICAgICAgICAgY29sdW1uc1tpXS5jaGlsZHJlbltqXS5jbGFzc05hbWUgPSBcIlwiO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLy8gcG9wdWxhdGUgYm94IHdpdGggbmV3IHBpZWNlXG4gICAgICAgIHBpZWNlLmRpc3BsYXlTcXVhcmVzLmZvckVhY2goc3F1YXJlID0+IHtcbiAgICAgICAgICAgIGxldCBbY29sLCByb3ddID0gW3NxdWFyZVswXSwgc3F1YXJlWzFdXTtcbiAgICAgICAgICAgIGNvbHVtbnNbY29sXS5jaGlsZHJlbltyb3ddLmNsYXNzTGlzdC5hZGQodGhpcy5jb2xvcnNbcGllY2UuY29sb3JDb2RlXSk7XG4gICAgICAgIH0pXG4gICAgfVxuXG4gICAgLy8gcmVmaWxsIG5leHQgYmFnLCB3aWxsIG9ubHkgYmUgY2FsbGVkIG9uY2UgbmV4dEJhZyBiZWNvbWVzIGVtcHR5XG4gICAgcmVmaWxsTmV4dEJhZygpIHtcbiAgICAgICAgdGhpcy5uZXh0QmFnID0gdGhpcy5nZW5lcmF0ZUJhZygpO1xuICAgIH1cblxuICAgIC8vIGltcGxlbWVudGF0aW9uIG9mIHNodWZmbGUgZm91bmQgb24gaHR0cHM6Ly9zdGFja292ZXJmbG93LmNvbS9xdWVzdGlvbnMvMjQ1MDk1NC9ob3ctdG8tcmFuZG9taXplLXNodWZmbGUtYS1qYXZhc2NyaXB0LWFycmF5IzI0NTA5NzZcbiAgICBzaHVmZmxlQmFnKGJhZykge1xuICAgICAgICB2YXIgY3VycmVudEluZGV4ID0gYmFnLmxlbmd0aCwgdGVtcG9yYXJ5VmFsdWUsIHJhbmRvbUluZGV4O1xuXG4gICAgICAgIC8vIFdoaWxlIHRoZXJlIHJlbWFpbiBlbGVtZW50cyB0byBzaHVmZmxlLi4uXG4gICAgICAgIHdoaWxlICgwICE9PSBjdXJyZW50SW5kZXgpIHtcblxuICAgICAgICAgICAgLy8gUGljayBhIHJlbWFpbmluZyBlbGVtZW50Li4uXG4gICAgICAgICAgICByYW5kb21JbmRleCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIGN1cnJlbnRJbmRleCk7XG4gICAgICAgICAgICBjdXJyZW50SW5kZXggLT0gMTtcblxuICAgICAgICAgICAgLy8gQW5kIHN3YXAgaXQgd2l0aCB0aGUgY3VycmVudCBlbGVtZW50LlxuICAgICAgICAgICAgdGVtcG9yYXJ5VmFsdWUgPSBiYWdbY3VycmVudEluZGV4XTtcbiAgICAgICAgICAgIGJhZ1tjdXJyZW50SW5kZXhdID0gYmFnW3JhbmRvbUluZGV4XTtcbiAgICAgICAgICAgIGJhZ1tyYW5kb21JbmRleF0gPSB0ZW1wb3JhcnlWYWx1ZTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gYmFnO1xuICAgIH1cbiAgICAvLyBpbXBsZW1lbnRhdGlvbiBvZiBzaHVmZmxlIGZvdW5kIG9uIGh0dHBzOi8vc3RhY2tvdmVyZmxvdy5jb20vcXVlc3Rpb25zLzI0NTA5NTQvaG93LXRvLXJhbmRvbWl6ZS1zaHVmZmxlLWEtamF2YXNjcmlwdC1hcnJheSMyNDUwOTc2XG5cbiAgICAvLyBsb29rIHRocm91Z2ggZmllbGQsIGlmIGZpZWxkW3Jvd11bY29sXSBjb250YWlucyBhIG51bWJlciA+IDAsIGZpbGwgdGhhdCBzcG90IHdpdGggdGhlIHJlc3BlY3RpdmUgY29sb3IuIFxuICAgIC8vIGlmIGNvbnRhaW5zIGFuICd4JywgcG9wdWxhdGUgd2l0aCBnaG9zdCBwaWVjZSBzdHlsZXMuXG4gICAgLy8gZWxzZSwgcmVtb3ZlIGNvbG9yXG4gICAgcmVuZGVyKCkge1xuICAgICAgICAvLyBpZiAodGhpcy5jdXJyZW50UGllY2UucmlnaHRNb3N0WzFdID4gOSB8fCB0aGlzLmN1cnJlbnRQaWVjZS5sZWZ0TW9zdFsxXSA8IDApIHJldHVybjtcbiAgICAgICAgbGV0IGZpZWxkQ29sdW1ucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoYC5maWVsZC1jb2x1bW4uZmllbGQtJHt0aGlzLmdhbWVOdW19YCk7XG4gICAgICAgIHRoaXMuZmllbGQuZm9yRWFjaCgocm93LCByb3dJZHgpID0+IHtcbiAgICAgICAgICAgIHJvdy5mb3JFYWNoKChfXywgY29sSWR4KSA9PiB7XG4gICAgICAgICAgICAgICAgbGV0IHNxdWFyZVZhbHVlID0gdGhpcy5maWVsZFtyb3dJZHhdW2NvbElkeF07XG4gICAgICAgICAgICAgICAgaWYgKHNxdWFyZVZhbHVlID09PSAneCcpIHtcbiAgICAgICAgICAgICAgICAgICAgZmllbGRDb2x1bW5zW2NvbElkeF0uY2hpbGRyZW5bcm93SWR4XS5jbGFzc0xpc3QuYWRkKGB4LSR7dGhpcy5jb2xvcnNbdGhpcy5jdXJyZW50UGllY2UuY29sb3JDb2RlXX1gKTtcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHNxdWFyZVZhbHVlKSB7XG4gICAgICAgICAgICAgICAgICAgIGZpZWxkQ29sdW1uc1tjb2xJZHhdLmNoaWxkcmVuW3Jvd0lkeF0uY2xhc3NMaXN0LmFkZCh0aGlzLmNvbG9yc1tzcXVhcmVWYWx1ZV0pO1xuICAgICAgICAgICAgICAgICAgICBmaWVsZENvbHVtbnNbY29sSWR4XS5jaGlsZHJlbltyb3dJZHhdLmNsYXNzTGlzdC5yZW1vdmUoYHgtJHt0aGlzLmNvbG9yc1t0aGlzLmN1cnJlbnRQaWVjZS5jb2xvckNvZGVdfWApO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGZpZWxkQ29sdW1uc1tjb2xJZHhdLmNoaWxkcmVuW3Jvd0lkeF0uY2xhc3NMaXN0ID0gXCJcIjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAga2V5TGlzdGVuZXIoKSB7XG4gICAgICAgIGRvY3VtZW50LmJvZHkuYWRkRXZlbnRMaXN0ZW5lcihcImtleWRvd25cIiwgdGhpcy5oYW5kbGVLZXlQcmVzcyk7XG5cbiAgICAgICAgZG9jdW1lbnQuYm9keS5hZGRFdmVudExpc3RlbmVyKFwia2V5dXBcIiwgZXZlbnQgPT4ge1xuICAgICAgICAgICAgc3dpdGNoIChldmVudC53aGljaCkge1xuICAgICAgICAgICAgICAgIGNhc2UgdGhpcy5jb250cm9scy5yaWdodDogXG4gICAgICAgICAgICAgICAgICAgIHRoaXMua2V5SGVsZC5yaWdodCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlIHRoaXMuY29udHJvbHMubGVmdDogXG4gICAgICAgICAgICAgICAgICAgIHRoaXMua2V5SGVsZC5sZWZ0ID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgdGhpcy5jb250cm9scy5zb2Z0RHJvcDogXG4gICAgICAgICAgICAgICAgICAgIHRoaXMua2V5SGVsZC5kb3duID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrOyAgXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGhhbmRsZUtleVByZXNzKGV2ZW50KSB7XG4gICAgICAgIFxuICAgICAgICAgICAgaWYgKHRoaXMuZ2FtZUlzT3ZlciB8fCB0aGlzLm9wcG9uZW50LmdhbWVJc092ZXIpIHJldHVybjtcbiAgICAgICAgICAgIHRoaXMuY3VycmVudFBpZWNlLnNldE91dGVyU3F1YXJlcygpO1xuICAgICAgICAgICAgLy8gdGhpcy5jbGVhckdob3N0UG9zaXRpb24oKTtcbiAgICAgICAgICAgIHN3aXRjaCAoZXZlbnQud2hpY2gpIHtcbiAgICAgICAgICAgICAgICAvLyB1cCBrZXlcbiAgICAgICAgICAgICAgICBjYXNlIHRoaXMuY29udHJvbHMudHVyblJpZ2h0OlxuICAgICAgICAgICAgICAgICAgICAvLyBwYXNzIGZpZWxkIHNvIHBpZWNlIGNhbiBjaGVjayBmaWVsZCB3YWxsIGJlZm9yZSB0dXJuaW5nXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY2xlYXJHaG9zdFBvc2l0aW9uKCk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMudFNwaW4gPSB0aGlzLmN1cnJlbnRQaWVjZS5tb3ZlKFwidHVyblJpZ2h0XCIsIHRoaXMuZmllbGQpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmN1cnJlbnRQaWVjZS5wb3B1bGF0ZUZpZWxkKHRoaXMuZmllbGQpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnNldEdob3N0UG9zaXRpb24oKTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgLy8gQyBrZXlcbiAgICAgICAgICAgICAgICBjYXNlIHRoaXMuY29udHJvbHMudHVybkxlZnQ6XG4gICAgICAgICAgICAgICAgICAgIC8vIHBhc3MgZmllbGQgc28gcGllY2UgY2FuIGNoZWNrIGZpZWxkIHdhbGwgYmVmb3JlIHR1cm5pbmdcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jbGVhckdob3N0UG9zaXRpb24oKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jdXJyZW50UGllY2UubW92ZShcInR1cm5MZWZ0XCIsIHRoaXMuZmllbGQpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmN1cnJlbnRQaWVjZS5wb3B1bGF0ZUZpZWxkKHRoaXMuZmllbGQpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnNldEdob3N0UG9zaXRpb24oKTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgLy8gbGVmdCBrZXlcbiAgICAgICAgICAgICAgICBjYXNlIHRoaXMuY29udHJvbHMubGVmdDpcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5rZXlIZWxkLmxlZnQgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5jdXJyZW50UGllY2UubGVmdFNpZGVCbG9ja2VkKHRoaXMuZmllbGQpKSBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5tb3ZlUGllY2UoXCJsZWZ0XCIpO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAvLyByaWdodCBrZXlcbiAgICAgICAgICAgICAgICBjYXNlIHRoaXMuY29udHJvbHMucmlnaHQ6XG4gICAgICAgICAgICAgICAgICAgIHRoaXMua2V5SGVsZC5yaWdodCA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLmN1cnJlbnRQaWVjZS5yaWdodFNpZGVCbG9ja2VkKHRoaXMuZmllbGQpKSBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5tb3ZlUGllY2UoXCJyaWdodFwiKTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgLy8gZG93biBrZXlcbiAgICAgICAgICAgICAgICBjYXNlIHRoaXMuY29udHJvbHMuc29mdERyb3A6XG4gICAgICAgICAgICAgICAgICAgIHRoaXMua2V5SGVsZC5kb3duID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5tb3ZlUGllY2UoXCJkb3duXCIpO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAvLyBzaGlmdCBrZXlcbiAgICAgICAgICAgICAgICBjYXNlIHRoaXMuY29udHJvbHMuaG9sZDpcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jbGVhckdob3N0UG9zaXRpb24oKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5ob2xkKCk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY3VycmVudFBpZWNlLnBvcHVsYXRlRmllbGQodGhpcy5maWVsZCk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0R2hvc3RQb3NpdGlvbigpO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAvLyBzcGFjZSBiYXJcbiAgICAgICAgICAgICAgICBjYXNlIHRoaXMuY29udHJvbHMuaGFyZERyb3A6XG4gICAgICAgICAgICAgICAgICAgIC8vIHRoaXMucmVuZGVyKCk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY2xlYXJHaG9zdFBvc2l0aW9uKCk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY3VycmVudFBpZWNlLmhhcmREcm9wKHRoaXMuZmllbGQpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnJlbmRlcigpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmN1cnJlbnRQaWVjZS5wb3B1bGF0ZUZpZWxkKHRoaXMuZmllbGQpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmhhbmRsZVBpZWNlU3RvcCh0aGlzLmhhbmRsZUNsZWFyLmRyb3ApO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAvLyBQIGtleVxuICAgICAgICAgICAgICAgIGNhc2UgODA6XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuaXNQYXVzZWQgPyB0aGlzLmRyb3BQaWVjZSh0aGlzLmRyb3BTcGVlZCkgOiBjYW5jZWxBbmltYXRpb25GcmFtZSh0aGlzLmhhbmRsZUNsZWFyLmRyb3ApO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmlzUGF1c2VkID0gIXRoaXMuaXNQYXVzZWQ7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5jdXJyZW50UGllY2Uuc2V0T3V0ZXJTcXVhcmVzKCk7XG4gICAgICAgICAgICB0aGlzLnJlbmRlcigpO1xuXG59XG5cbiAgICBjbGVhckxpbmVzKGxvd2VzdCwgaGlnaGVzdCwgbnVtTGluZXNDbGVhcmVkKSB7XG4gICAgICAgIGlmIChsb3dlc3QgPCAwKSByZXR1cm47XG4gICAgICAgIC8vIGJhc2UgY2FzZTogaWYgd2UgcmVhY2ggYSByb3cgdGhhdCBpcyBoaWdoZXIgdGhhbiB0aGUgaGlnaGVzdCwgdGhlbiByZXR1cm4gbnVtYmVyIG9mIGxpbmVzIHRoYXQgd2VyZSBjbGVhcmVkXG4gICAgICAgIGlmIChsb3dlc3QgPCBoaWdoZXN0KSB7XG4gICAgICAgICAgICByZXR1cm4gbnVtTGluZXNDbGVhcmVkO1xuICAgICAgICB9O1xuICAgICAgICAvLyByZWN1cnNpdmUgY2FzZTogXG4gICAgICAgIC8vIGlmIGxvd2VzdCByb3cgZG9lcyBub3QgY29udGFpbiBhIDAsIGJyaW5nIGFsbCBhYm92ZSByb3dzIGRvd24gb25lIGxldmVsXG4gICAgICAgIGlmICghdGhpcy5maWVsZFtsb3dlc3RdLmluY2x1ZGVzKDApKSB7XG4gICAgICAgICAgICB0aGlzLl9icmluZ0Rvd25GaWVsZChsb3dlc3QpO1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuY2xlYXJMaW5lcyhsb3dlc3QsIGhpZ2hlc3QgKyAxLCBudW1MaW5lc0NsZWFyZWQgKyAxKVxuICAgICAgICAvLyBpZiByb3cgY29udGFpbnMgYSAwLCByb3cgaXMgbm90IGNsZWFyZWQgeWV0IFxuICAgICAgICB9IGVsc2UgaWYgKHRoaXMuZmllbGRbbG93ZXN0XS5pbmNsdWRlcygwKSkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuY2xlYXJMaW5lcyhsb3dlc3QgLSAxLCBoaWdoZXN0LCBudW1MaW5lc0NsZWFyZWQpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgX2JyaW5nRG93bkZpZWxkKHN0YXJ0aW5nUm93KSB7XG4gICAgICAgIGZvciAobGV0IGkgPSBzdGFydGluZ1JvdzsgaSA+IDA7IGktLSkge1xuICAgICAgICAgICAgdGhpcy5maWVsZFtpXSA9IHRoaXMuZmllbGRbaSAtIDFdO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuZmllbGRbMF0gPSBbMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMF07XG4gICAgfVxuXG4gICAgaGFuZGxlUGllY2VTdG9wKCkgeyAgXG4gICAgICAgIC8vIGFsbG93IHBsYXllciB0byBob2xkIHBpZWNlIGFnYWluXG4gICAgICAgIHRoaXMuY2FuSG9sZCA9IHRydWU7XG4gICAgICAgIGxldCBsb3dlc3QgPSB0aGlzLmN1cnJlbnRQaWVjZS5wb3NpdGlvbi5ib3R0b21bMF1bMF07XG4gICAgICAgIC8vIGluIGNhc2Ugb2YgbGluZSBwaWVjZSwgd2hpY2ggbWF5IG5vdCBoYXZlIHRoaXMucG9zaXRpb24udG9wXG4gICAgICAgIGxldCBoaWdoZXN0ID0gIXRoaXMuY3VycmVudFBpZWNlLnBvc2l0aW9uLnRvcC5sZW5ndGggPyBsb3dlc3QgOiB0aGlzLmN1cnJlbnRQaWVjZS5wb3NpdGlvbi50b3BbMF1bMF07XG4gICAgICAgIC8vIGNoZWNrIGlmIGEgVFBpZWNlIHdhcyBzcHVuIGluIHBsYWNlXG4gICAgICAgIGlmICh0aGlzLmN1cnJlbnRQaWVjZS5uYW1lID09PSBcIlRQaWVjZVwiKSB7XG4gICAgICAgICAgICBsZXQgW2xlZnRNb3N0Um93LCByaWdodE1vc3RSb3ddID0gW3RoaXMuY3VycmVudFBpZWNlLmxlZnRNb3N0WzBdLCB0aGlzLmN1cnJlbnRQaWVjZS5yaWdodE1vc3RbMF1dO1xuICAgICAgICAgICAgbGV0IFtsZWZ0TW9zdENvbCwgcmlnaHRNb3N0Q29sXSA9IFt0aGlzLmN1cnJlbnRQaWVjZS5sZWZ0TW9zdFsxXSwgdGhpcy5jdXJyZW50UGllY2UucmlnaHRNb3N0WzFdXTtcbiAgICAgICAgICAgIGlmICh0aGlzLmZpZWxkW2xlZnRNb3N0Um93IC0gMV0gJiYgdGhpcy5maWVsZFtyaWdodE1vc3RSb3cgLSAxXSkge1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLmZpZWxkW2xlZnRNb3N0Um93IC0gMV1bbGVmdE1vc3RDb2xdIHx8IHRoaXMuZmllbGRbcmlnaHRNb3N0Um93IC0gMV1bcmlnaHRNb3N0Q29sXSkgdGhpcy50U3BpbiA9IHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgbGV0IG51bUxpbmVzQ2xlYXJlZCA9IHRoaXMuY2xlYXJMaW5lcyhsb3dlc3QsIGhpZ2hlc3QsIDApO1xuXG4gICAgICAgIC8vIGluIHRoZSBjYXNlIG9mIG11bHRpcGxheWVyLCBzZW5kIGNsZWFyZWQgbGluZXMgdG8gb3Bwb25lbnQgYW5kIHJlY2VpdmUgcG90ZW50aWFsIGxpbmVzXG4gICAgICAgIGlmICh0aGlzLm9wcG9uZW50KSB7XG4gICAgICAgICAgICBpZiAobnVtTGluZXNDbGVhcmVkID4gMCkge1xuICAgICAgICAgICAgICAgIHRoaXMuY29tYm8gKz0gMTtcbiAgICAgICAgICAgICAgICBsZXQgbnVtTGluZXNcbiAgICAgICAgICAgICAgICBpZiAobnVtTGluZXNDbGVhcmVkIDwgNCkge1xuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5jdXJyZW50UGllY2UubmFtZSA9PT0gXCJUUGllY2VcIiAmJiB0aGlzLnRTcGluKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBudW1MaW5lcyA9IG51bUxpbmVzQ2xlYXJlZCA9PT0gMyA/IDYgOiA0O1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgbnVtTGluZXMgPSBudW1MaW5lc0NsZWFyZWQgLSAxO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy50U3BpblN0cmVhayA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgbnVtTGluZXMgPSA0O1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIG51bUxpbmVzICs9IHRoaXMuY29tYm9HdWlkZVt0aGlzLmNvbWJvXTtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy50U3BpblN0cmVhaykgbnVtTGluZXMgKz0gMjtcblxuICAgICAgICAgICAgICAgIGlmICh0aGlzLnVwY29taW5nTGluZXMgPiAwKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMudXBjb21pbmdMaW5lcyAtPSBudW1MaW5lcztcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMudXBjb21pbmdMaW5lcyA8IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMub3Bwb25lbnQuYWRkTGluZXNUb1F1ZXVlKE1hdGguYWJzKHRoaXMudXBjb21pbmdMaW5lcykpO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy51cGNvbWluZ0xpbmVzID0gMDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGFkanVzdFF1ZXVlSGVpZ2h0KHRoaXMuZ2FtZU51bSwgMCk7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBhZGp1c3RRdWV1ZUhlaWdodCh0aGlzLmdhbWVOdW0sIHRoaXMudXBjb21pbmdMaW5lcyAqIDUpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5vcHBvbmVudC5hZGRMaW5lc1RvUXVldWUobnVtTGluZXMpO1xuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy50U3BpbiA9PT0gdHJ1ZSkgdGhpcy50U3BpblN0cmVhayA9IHRydWU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLmNvbWJvID0gLTE7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMudXBjb21pbmdMaW5lcyA+IDApIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5yZWNlaXZlVXBjb21pbmdMaW5lcyh0aGlzLnVwY29taW5nTGluZXMpO1xuICAgICAgICAgICAgICAgICAgICBhZGp1c3RRdWV1ZUhlaWdodCh0aGlzLmdhbWVOdW0sIDApO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLnNjb3JlS2VlcGVyLmFkZFRvU2NvcmUobnVtTGluZXNDbGVhcmVkKTtcbiAgICAgICAgfVxuICAgICAgICAvLyByZXNldCB0U3BpbiB0cmFja2VyXG4gICAgICAgIHRoaXMudFNwaW4gPSBmYWxzZVxuICAgICAgICB0aGlzLmNsZWFyR2hvc3RDbGFzcygpO1xuICAgICAgICBjYW5jZWxBbmltYXRpb25GcmFtZSh0aGlzLmhhbmRsZUNsZWFyLmRyb3ApO1xuICAgICAgICAvLyB0aGlzLnN0YXJ0RWxldmF0aW5nKCk7XG4gICAgICAgIHRoaXMucGxheSgpO1xuICAgIH1cblxuICAgIGRyb3BQaWVjZShmcHMpIHtcbiAgICAgICAgLy8gRG8gd2hhdGV2ZXJcbiAgICAgICAgdGhpcy5hbmltYXRlLmRyb3AuZnBzSW50ZXJ2YWwgPSAxMDAwIC8gZnBzO1xuICAgICAgICB0aGlzLmFuaW1hdGUuZHJvcC50aGVuID0gRGF0ZS5ub3coKTtcbiAgICAgICAgdGhpcy5hbmltYXRlLmRyb3Auc3RhcnRUaW1lID0gdGhpcy50aGVuO1xuICAgICAgICB0aGlzLmRyb3AodGhpcy5maWVsZCk7XG4gICAgfVxuXG4gICAgLy8gaW5zcGlyYXRpb24gZm9yIHRocm90dGxpbmcgcmVxdWVzdEFuaW1hdGlvbkZyYW1lIGZyb20gaHR0cHM6Ly9zdGFja292ZXJmbG93LmNvbS9xdWVzdGlvbnMvMTk3NjQwMTgvY29udHJvbGxpbmctZnBzLXdpdGgtcmVxdWVzdGFuaW1hdGlvbmZyYW1lXG4gICAgZHJvcCgpIHtcbiAgICAgICAgdGhpcy5oYW5kbGVDbGVhci5kcm9wID0gcmVxdWVzdEFuaW1hdGlvbkZyYW1lKCgpID0+IHRoaXMuZHJvcCh0aGlzLmZpZWxkKSk7XG4gICAgICAgIHRoaXMuYW5pbWF0ZS5kcm9wLm5vdyA9IERhdGUubm93KCk7XG4gICAgICAgIGxldCBlbGFwc2VkID0gdGhpcy5hbmltYXRlLmRyb3Aubm93IC0gdGhpcy5hbmltYXRlLmRyb3AudGhlbjtcbiAgICAgICAgaWYgKGVsYXBzZWQgPiB0aGlzLmFuaW1hdGUuZHJvcC5mcHNJbnRlcnZhbCkge1xuICAgICAgICAgICAgLy8gR2V0IHJlYWR5IGZvciBuZXh0IGZyYW1lIGJ5IHNldHRpbmcgdGhlbj1ub3csIGFkanVzdGluZyBmb3Igc3BlY2lmaWVkIGZwc0ludGVydmFsIG5vdCBiZWluZyBhIG11bHRpcGxlIG9mIFJBRidzIGludGVydmFsICgxNi43bXMpXG4gICAgICAgICAgICB0aGlzLmFuaW1hdGUuZHJvcC50aGVuID0gdGhpcy5hbmltYXRlLmRyb3Aubm93IC0gKGVsYXBzZWQgJSB0aGlzLmFuaW1hdGUuZHJvcC5mcHNJbnRlcnZhbCk7XG4gICAgICAgICAgICB0aGlzLmN1cnJlbnRQaWVjZS5wb3B1bGF0ZUZpZWxkKHRoaXMuZmllbGQpO1xuICAgICAgICAgICAgdGhpcy5yZW5kZXIoKTtcbiAgICAgICAgICAgIGlmICghdGhpcy5jdXJyZW50UGllY2UuaXNGYWxsaW5nKHRoaXMuZmllbGQpKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5oYW5kbGVQaWVjZVN0b3AodGhpcy5oYW5kbGVDbGVhci5kcm9wKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIHByZXZlbnRzIGluY29taW5nIHBpZWNlIGZyb20gZGVsZXRpbmcgYSBwaWVjZSBkaXJlY3RseSBiZWxvdyBkdXJpbmcgaXRzIGluaXRpYWwgcmVuZGVyXG4gICAgICAgICAgICBpZiAodGhpcy5jdXJyZW50UGllY2UuYm90dG9tTW9zdFswXSAhPSAwIHx8IHRoaXMuY3VycmVudFBpZWNlLmlzRmFsbGluZyh0aGlzLmZpZWxkKSkgdGhpcy5jdXJyZW50UGllY2UuZHJvcCh0aGlzLmZpZWxkKTtcbiAgICAgICAgICAgIHRoaXMuY3VycmVudFBpZWNlLnBvcHVsYXRlRmllbGQodGhpcy5maWVsZCk7IC8vIGtlZXAgb25seSBvbmUgcG9wdWxhdGUgZmllbGQ/XG4gICAgICAgICAgICB0aGlzLnJlbmRlcigpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgbW92ZVBpZWNlKGRpcmVjdGlvbikge1xuICAgICAgICAvLyBEbyB3aGF0ZXZlclxuICAgICAgICB0aGlzLmFuaW1hdGVbZGlyZWN0aW9uXS5mcHNJbnRlcnZhbCA9IDEwMDAgLyB0aGlzLm1vdmVTcGVlZDtcbiAgICAgICAgdGhpcy5hbmltYXRlW2RpcmVjdGlvbl0udGhlbiA9IERhdGUubm93KCk7XG4gICAgICAgIHRoaXMuYW5pbWF0ZVtkaXJlY3Rpb25dLnN0YXJ0VGltZSA9IHRoaXMuYW5pbWF0ZVtkaXJlY3Rpb25dLnRoZW47XG4gICAgICAgIHRoaXMubW92ZShkaXJlY3Rpb24pO1xuICAgIH1cblxuICAgIC8vIGluc3BpcmF0aW9uIGZvciB0aHJvdHRsaW5nIHJlcXVlc3RBbmltYXRpb25GcmFtZSBmcm9tIGh0dHBzOi8vc3RhY2tvdmVyZmxvdy5jb20vcXVlc3Rpb25zLzE5NzY0MDE4L2NvbnRyb2xsaW5nLWZwcy13aXRoLXJlcXVlc3RhbmltYXRpb25mcmFtZVxuICAgIG1vdmUoZGlyZWN0aW9uKSB7XG4gICAgICAgIHRoaXMuaGFuZGxlQ2xlYXJbZGlyZWN0aW9uXSA9IHJlcXVlc3RBbmltYXRpb25GcmFtZSgoKSA9PiB0aGlzLm1vdmUoZGlyZWN0aW9uKSk7XG4gICAgICAgIGlmICghdGhpcy5rZXlIZWxkW2RpcmVjdGlvbl0pIGNhbmNlbEFuaW1hdGlvbkZyYW1lKHRoaXMuaGFuZGxlQ2xlYXJbZGlyZWN0aW9uXSk7XG4gICAgICAgIHRoaXMuYW5pbWF0ZVtkaXJlY3Rpb25dLm5vdyA9IERhdGUubm93KCk7XG4gICAgICAgIGxldCBlbGFwc2VkID0gdGhpcy5hbmltYXRlW2RpcmVjdGlvbl0ubm93IC0gdGhpcy5hbmltYXRlW2RpcmVjdGlvbl0udGhlbjtcbiAgICAgICAgaWYgKGVsYXBzZWQgPiB0aGlzLmFuaW1hdGVbZGlyZWN0aW9uXS5mcHNJbnRlcnZhbCkge1xuICAgICAgICAgICAgLy8gR2V0IHJlYWR5IGZvciBuZXh0IGZyYW1lIGJ5IHNldHRpbmcgdGhlbj1ub3csIGFkanVzdGluZyBmb3Igc3BlY2lmaWVkIGZwc0ludGVydmFsIG5vdCBiZWluZyBhIG11bHRpcGxlIG9mIFJBRidzIGludGVydmFsICgxNi43bXMpXG4gICAgICAgICAgICB0aGlzLmFuaW1hdGVbZGlyZWN0aW9uXS50aGVuID0gdGhpcy5hbmltYXRlW2RpcmVjdGlvbl0ubm93IC0gKGVsYXBzZWQgJSB0aGlzLmFuaW1hdGVbZGlyZWN0aW9uXS5mcHNJbnRlcnZhbCk7XG5cbiAgICAgICAgICAgIC8vIHByZXZlbnQgcGllY2UgZnJvbSBtb3ZpbmcgaWYgaXQgaXMgYmxvY2tlZCBvciBpZiBib3RoIGxlZnQgYW5kIHJpZ2h0IGFycm93IGtleXMgYXJlIGhlbGQgZG93blxuICAgICAgICAgICAgaWYgKFxuICAgICAgICAgICAgICAgIGRpcmVjdGlvbiA9PT0gXCJyaWdodFwiICYmIHRoaXMuY3VycmVudFBpZWNlLnJpZ2h0U2lkZUJsb2NrZWQodGhpcy5maWVsZCkgXG4gICAgICAgICAgICAgICAgfHwgXG4gICAgICAgICAgICAgICAgZGlyZWN0aW9uID09PSBcImxlZnRcIiAmJiB0aGlzLmN1cnJlbnRQaWVjZS5sZWZ0U2lkZUJsb2NrZWQodGhpcy5maWVsZCkgXG4gICAgICAgICAgICAgICAgfHwgXG4gICAgICAgICAgICAgICAgZGlyZWN0aW9uID09PSBcImRvd25cIiAmJiAhdGhpcy5jdXJyZW50UGllY2UuaXNGYWxsaW5nKHRoaXMuZmllbGQpXG4gICAgICAgICAgICAgICAgfHwgXG4gICAgICAgICAgICAgICAgdGhpcy5rZXlIZWxkLnJpZ2h0ICYmIHRoaXMua2V5SGVsZC5sZWZ0XG4gICAgICAgICAgICApIHJldHVybjsgXG5cbiAgICAgICAgICAgIHRoaXMuY3VycmVudFBpZWNlLm1vdmUoZGlyZWN0aW9uKTtcblxuICAgICAgICAgICAgdGhpcy5jdXJyZW50UGllY2UucG9wdWxhdGVGaWVsZCh0aGlzLmZpZWxkKTtcblxuICAgICAgICAgICAgLy8gZG9uJ3QgbmVlZCB0byByZS1wb3B1bGF0ZSBnaG9zdCBwb3NpdGlvbiBpZiB0aGUgcGllY2UgaXMgc29mdC1kcm9wcGluZ1xuICAgICAgICAgICAgaWYgKGRpcmVjdGlvbiAhPT0gXCJkb3duXCIpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmNsZWFyR2hvc3RQb3NpdGlvbigpO1xuICAgICAgICAgICAgICAgIHRoaXMuc2V0R2hvc3RQb3NpdGlvbigpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB0aGlzLnJlbmRlcigpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgaGFuZGxlVG9wUGllY2UoKSB7XG4gICAgICAgIGxldCBhdFRvcCA9IGZhbHNlO1xuICAgICAgICBmb3IgKGxldCBpIGluIHRoaXMuY3VycmVudFBpZWNlLnBvc2l0aW9uLmJvdHRvbSkge1xuICAgICAgICAgICAgbGV0IHNxdWFyZSA9IHRoaXMuY3VycmVudFBpZWNlLnBvc2l0aW9uLmJvdHRvbVtpXTtcbiAgICAgICAgICAgIGxldCByb3cgPSBzcXVhcmVbMF07XG4gICAgICAgICAgICBsZXQgY29sID0gc3F1YXJlWzFdO1xuICAgICAgICAgICAgaWYgKHRoaXMuZmllbGRbcm93XVtjb2xdKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5jdXJyZW50UGllY2UubW92ZShcInVwXCIsIHRoaXMuZmllbGQpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuXG4gICAgICAgIGZvciAobGV0IGkgaW4gdGhpcy5jdXJyZW50UGllY2UucG9zaXRpb24uYm90dG9tKSB7XG4gICAgICAgICAgICBsZXQgc3F1YXJlID0gdGhpcy5jdXJyZW50UGllY2UucG9zaXRpb24uYm90dG9tW2ldO1xuICAgICAgICAgICAgbGV0IHJvdyA9IHNxdWFyZVswXTtcbiAgICAgICAgICAgIGxldCBjb2wgPSBzcXVhcmVbMV07XG4gICAgICAgICAgICBpZiAodGhpcy5maWVsZFtyb3ddICYmIHRoaXMuZmllbGRbcm93XVtjb2xdKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5nYW1lT3Zlcih0aGlzLm9wcG9uZW50LmdhbWVOdW0pO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgICAgICAgXG4gICAgICAgIHJldHVybiBhdFRvcDtcbiAgICB9XG4gICAgXG4gICAgcGxheSgpIHtcbiAgICAgICAgdGhpcy5zZXRDdXJyZW50UGllY2UoKTtcbiAgICAgICAgdGhpcy5oYW5kbGVUb3BQaWVjZSgpO1xuICAgICAgICB0aGlzLmN1cnJlbnRQaWVjZS5wb3B1bGF0ZUZpZWxkKHRoaXMuZmllbGQpO1xuICAgICAgICB0aGlzLmFkZFRvQ3VycmVudEJhZygpO1xuICAgICAgICB0aGlzLnNob3dDdXJyZW50QmFnKCk7XG4gICAgICAgIGlmICghdGhpcy5uZXh0QmFnLmxlbmd0aCkgdGhpcy5yZWZpbGxOZXh0QmFnKCk7XG4gICAgICAgIHRoaXMuc2V0R2hvc3RQb3NpdGlvbigpO1xuICAgICAgICAvLyBkcm9wIHBpZWNlIGF0IGdpdmVuIGZwc1xuICAgICAgICB0aGlzLmRyb3BQaWVjZSh0aGlzLmRyb3BTcGVlZCk7ICAgIFxuICAgIH1cblxuICAgIHJlc3RhcnRHYW1lKCkge1xuICAgICAgICBpZiAoIXRoaXMub3Bwb25lbnQpIHtcbiAgICAgICAgICAgIHRoaXMuc2NvcmVLZWVwZXIucmVzZXRTY29yZSgpO1xuICAgICAgICAgICAgbGV0IG1pbnV0ZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWludXRlcycpO1xuICAgICAgICAgICAgbGV0IHNlY29uZHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2Vjb25kcycpO1xuICAgICAgICAgICAgbWludXRlcy5pbm5lckhUTUwgPSAnMCc7XG4gICAgICAgICAgICBzZWNvbmRzLmlubmVySFRNTCA9ICcwMCc7XG4gICAgICAgICAgICB0aGlzLnN0YXJ0VGltZXIoKTtcbiAgICAgICAgICAgIHRoaXMuc3RhcnRFbGV2YXRpbmcoNTAwMCk7XG4gICAgICAgICAgICB0aGlzLmFkanVzdEVsZXZhdGUoKTtcbiAgICAgICAgfVxuICAgICAgICBsZXQgZmllbGQgPSBuZXcgRmllbGQ7XG4gICAgICAgIHRoaXMuZmllbGQgPSBmaWVsZC5nZW5lcmF0ZUZpZWxkKCk7XG4gICAgICAgIHRoaXMucmVuZGVyKCk7XG4gICAgICAgIHRoaXMuZ2FtZUlzT3ZlciA9IGZhbHNlO1xuICAgICAgICBpZiAodGhpcy5vcHBvbmVudCkgdGhpcy5vcHBvbmVudC5nYW1lSXNPdmVyID0gZmFsc2U7XG4gICAgICAgIHRoaXMuZHJvcFNwZWVkID0gMTtcbiAgICAgICAgdGhpcy5wbGF5KCk7XG4gICAgICAgIGxldCBnYW1lT3ZlckRpdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5nYW1lLW92ZXItZGl2Jyk7XG4gICAgICAgIGlmIChnYW1lT3ZlckRpdikgZ2FtZU92ZXJEaXYucmVtb3ZlKCk7XG4gICAgfVxuXG4gICAgcmV0dXJuVG9NZW51KCkge1xuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZ2FtZS1vdmVyLWRpdicpLnJlbW92ZSgpO1xuICAgICAgICBsZXQgZmllbGQxID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2ZpZWxkLWNvbnRhaW5lci0xJyk7XG4gICAgICAgIGxldCBmaWVsZDIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZmllbGQtY29udGFpbmVyLTInKTtcbiAgICAgICAgd2hpbGUgKGZpZWxkMS5maXJzdENoaWxkKSB7XG4gICAgICAgICAgICBmaWVsZDEucmVtb3ZlQ2hpbGQoZmllbGQxLmZpcnN0Q2hpbGQpO1xuICAgICAgICB9XG4gICAgICAgIHdoaWxlIChmaWVsZDIuZmlyc3RDaGlsZCkge1xuICAgICAgICAgICAgZmllbGQyLnJlbW92ZUNoaWxkKGZpZWxkMi5maXJzdENoaWxkKTtcbiAgICAgICAgfVxuICAgICAgICBsZXQgc2luZ2xlUGxheWVyQ29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zaW5nbGUtcGxheWVyLWNvbnRlbnQnKTtcbiAgICAgICAgaWYgKHNpbmdsZVBsYXllckNvbnRlbnQpIHNpbmdsZVBsYXllckNvbnRlbnQucmVtb3ZlKCk7XG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtZW51Jykuc2V0QXR0cmlidXRlKFwic3R5bGVcIiwgXCJkaXNwbGF5OiB2aXNpYmxlXCIpO1xuICAgIH1cblxuICAgIGdhbWVPdmVyKHdpbm5lcikge1xuICAgICAgICB0aGlzLmRyb3BTcGVlZCA9IDA7XG4gICAgICAgIGxldCBnYW1lT3ZlclNjcmVlbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIGdhbWVPdmVyU2NyZWVuLmNsYXNzTGlzdC5hZGQoXCJnYW1lLW92ZXItZGl2XCIpO1xuICAgICAgICBcbiAgICAgICAgbGV0IGdhbWVPdmVySGVhZGluZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMlwiKTtcbiAgICAgICAgZ2FtZU92ZXJIZWFkaW5nLmNsYXNzTGlzdC5hZGQoXCJnYW1lLW92ZXItaGVhZGluZ1wiKTtcblxuICAgICAgICBnYW1lT3ZlckhlYWRpbmcuaW5uZXJIVE1MID0gXCJHQU1FIE9WRVJcIjtcbiAgICAgICAgZ2FtZU92ZXJTY3JlZW4uYXBwZW5kKGdhbWVPdmVySGVhZGluZyk7XG5cbiAgICAgICAgbGV0IHdpbm5lckhlYWRpbmc7XG4gICAgICAgIGlmICh3aW5uZXIpICB7XG4gICAgICAgICAgICB3aW5uZXJIZWFkaW5nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgyXCIpO1xuICAgICAgICAgICAgd2lubmVySGVhZGluZy5jbGFzc0xpc3QuYWRkKFwiZ2FtZS1vdmVyLWhlYWRpbmdcIik7XG4gICAgICAgICAgICB3aW5uZXJIZWFkaW5nLmlubmVySFRNTCA9IGBQTEFZRVIgJHt3aW5uZXJ9IFdJTlNgO1xuICAgICAgICAgICAgZ2FtZU92ZXJTY3JlZW4uYXBwZW5kKHdpbm5lckhlYWRpbmcpXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBsZXQgc2NvcmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpO1xuICAgICAgICAgICAgc2NvcmUuY2xhc3NMaXN0LmFkZChcImdhbWUtb3Zlci1oZWFkaW5nXCIpO1xuICAgICAgICAgICAgc2NvcmUuaW5uZXJIVE1MID0gYCR7dGhpcy5zY29yZUtlZXBlci5nZXRTY29yZSgpfSBQb2ludHNgO1xuXG4gICAgICAgICAgICBnYW1lT3ZlclNjcmVlbi5hcHBlbmQoc2NvcmUpO1xuICAgICAgICB9XG5cbiAgICAgICAgbGV0IGdhbWVPcHRpb25zID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGdhbWVPcHRpb25zLmNsYXNzTGlzdC5hZGQoJ2dhbWUtb3Zlci1vcHRpb25zJyk7XG4gICAgICAgIGxldCByZXN0YXJ0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKTtcbiAgICAgICAgcmVzdGFydC5jbGFzc0xpc3QuYWRkKCdnYW1lLW92ZXItaGVhZGluZycsICdsaW5rJyk7XG4gICAgICAgIHJlc3RhcnQuaW5uZXJIVE1MID0gJ1BsYXkgQWdhaW4nO1xuICAgICAgICByZXN0YXJ0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5yZXN0YXJ0R2FtZSgpO1xuICAgICAgICAgICAgaWYgKHRoaXMub3Bwb25lbnQpIHRoaXMub3Bwb25lbnQucmVzdGFydEdhbWUoKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgbGV0IG1haW5NZW51ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKTtcbiAgICAgICAgbWFpbk1lbnUuY2xhc3NMaXN0LmFkZCgnZ2FtZS1vdmVyLWhlYWRpbmcnLCAnbGluaycpO1xuICAgICAgICBtYWluTWVudS5pbm5lckhUTUwgPSAnTWFpbiBNZW51JztcbiAgICAgICAgbWFpbk1lbnUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLnJldHVyblRvTWVudSk7XG5cbiAgICAgICAgZ2FtZU9wdGlvbnMuYXBwZW5kKHJlc3RhcnQpO1xuICAgICAgICBnYW1lT3B0aW9ucy5hcHBlbmQobWFpbk1lbnUpO1xuXG4gICAgICAgIGdhbWVPdmVyU2NyZWVuLmFwcGVuZChnYW1lT3B0aW9ucyk7XG5cbiAgICAgICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChnYW1lT3ZlclNjcmVlbik7XG5cbiAgICAgICAgdGhpcy5nYW1lSXNPdmVyID0gdHJ1ZTtcbiAgICAgICAgaWYgKHRoaXMub3Bwb25lbnQpIHtcbiAgICAgICAgICAgIGNhbmNlbEFuaW1hdGlvbkZyYW1lKHRoaXMub3Bwb25lbnQuaGFuZGxlQ2xlYXIuZHJvcCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLnN0b3BUaW1lcigpO1xuICAgICAgICAgICAgY2xlYXJJbnRlcnZhbCh0aGlzLmNsZWFyRWxldmF0ZUludGVydmFsKTtcbiAgICAgICAgICAgIGNsZWFySW50ZXJ2YWwodGhpcy5jbGVhckVsZXZhdGlvbik7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBtdWx0aXBsYXllciBcbiAgICBzZXRPcHBvbmVudChwbGF5ZXIpIHtcbiAgICAgICAgdGhpcy5vcHBvbmVudCA9IHBsYXllcjtcbiAgICB9XG5cbiAgICBhZGRMaW5lc1RvUXVldWUobnVtTGluZXMpIHtcbiAgICAgICAgdGhpcy51cGNvbWluZ0xpbmVzICs9IG51bUxpbmVzO1xuICAgICAgICBsZXQgcGVyY2VudGFnZSA9IHRoaXMudXBjb21pbmdMaW5lcyAqIDU7XG4gICAgICAgIGFkanVzdFF1ZXVlSGVpZ2h0KHRoaXMuZ2FtZU51bSwgcGVyY2VudGFnZSk7XG4gICAgfVxuXG4gICAgcmVjZWl2ZVVwY29taW5nTGluZXMoKSB7XG4gICAgICAgIGxldCBnYXJiYWdlTGluZXMgPSBbXTtcbiAgICAgICAgbGV0IG51bUxpbmVzID0gdGhpcy51cGNvbWluZ0xpbmVzO1xuICAgICAgICBsZXQgcmFuZG9tSG9sZTtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBudW1MaW5lczsgaSsrKSB7XG4gICAgICAgICAgICBpZiAoaSAlIDIgPT09IDApIHJhbmRvbUhvbGUgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiA5KTtcbiAgICAgICAgICAgIGxldCBnYXJiYWdlUm93ID0gWzgsIDgsIDgsIDgsIDgsIDgsIDgsIDgsIDgsIDhdO1xuICAgICAgICAgICAgZ2FyYmFnZVJvd1tyYW5kb21Ib2xlXSA9IDA7XG4gICAgICAgICAgICBnYXJiYWdlTGluZXMucHVzaChnYXJiYWdlUm93KTtcbiAgICAgICAgfVxuICAgICAgICAvLyBpZiBwbGF5ZXIgcmVhY2hlcyB0aGUgdG9wLCBwbGF5ZXIgbG9zZXNcbiAgICAgICAgLy8gc2xpY2UgYWxsb3dzIHBsYXllciB0byBjb250aW51ZSBwbGF5aW5nIGlmIHRvcCBtaWRkbGUgaXMgY2xlYXJcbiAgICAgICAgaWYgKHRoaXMuZmllbGRbbnVtTGluZXMgLSAxXSAmJiAhdGhpcy5maWVsZFtudW1MaW5lcyAtIDFdLnNsaWNlKDIsNykuaW5jbHVkZXMoMCkpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmZpZWxkID0gdGhpcy5maWVsZC5zbGljZShudW1MaW5lcywgMjApLmNvbmNhdChnYXJiYWdlTGluZXMpO1xuICAgICAgICB0aGlzLnVwY29taW5nTGluZXMgPSAwO1xuICAgICAgICB0aGlzLnJlbmRlcigpO1xuICAgIH1cblxuICAgIC8vIHNpbmdsZSBwbGF5ZXIgbG9naWNcbiAgICBzdGFydEVsZXZhdGluZyhlbGV2YXRlRGVsYXkpIHtcbiAgICAgICAgdGhpcy5jbGVhckVsZXZhdGVJbnRlcnZhbCA9IHNldEludGVydmFsKCgpID0+IHtcbiAgICAgICAgICAgIHRoaXMuY2xlYXJHaG9zdFBvc2l0aW9uKCk7XG4gICAgICAgICAgICB0aGlzLmN1cnJlbnRQaWVjZS5jbGVhclNlbGZGcm9tQm9hcmQodGhpcy5maWVsZCk7XG4gICAgICAgICAgICB0aGlzLnVwY29taW5nTGluZXMgKz0gMTtcbiAgICAgICAgICAgIHRoaXMucmVjZWl2ZVVwY29taW5nTGluZXMoKTtcbiAgICAgICAgICAgIHRoaXMuc2V0R2hvc3RQb3NpdGlvbigpO1xuICAgICAgICAgICAgdGhpcy5jdXJyZW50UGllY2UucG9wdWxhdGVGaWVsZCh0aGlzLmZpZWxkKTtcbiAgICAgICAgICAgIHRoaXMucmVuZGVyKCk7XG4gICAgICAgIH0sIGVsZXZhdGVEZWxheSlcbiAgICB9XG5cbiAgICBhZGp1c3RFbGV2YXRlKCkge1xuICAgICAgICB0aGlzLmNsZWFyRWxldmF0aW9uID0gc2V0SW50ZXJ2YWwoKCkgPT4ge1xuICAgICAgICAgICAgaWYgKHRoaXMuY2xlYXJFbGV2YXRlSW50ZXJ2YWwpIGNsZWFySW50ZXJ2YWwodGhpcy5jbGVhckVsZXZhdGVJbnRlcnZhbCk7XG4gICAgICAgICAgICBpZiAodGhpcy5lbGV2YXRlRGVsYXkgPiAyMDAwKSB0aGlzLmVsZXZhdGVEZWxheSAtPSAyMDA7XG4gICAgICAgICAgICB0aGlzLnN0YXJ0RWxldmF0aW5nKHRoaXMuZWxldmF0ZURlbGF5KTtcbiAgICAgICAgfSwgMTAwMDApO1xuICAgIH1cblxuICAgIHN0YXJ0VGltZXIoKSB7XG4gICAgICAgIGxldCBtaW51dGVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1pbnV0ZXMnKTtcbiAgICAgICAgbGV0IHNlY29uZHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2Vjb25kcycpO1xuICAgICAgICB0aGlzLmNsZWFyVGltZXIgPSBzZXRJbnRlcnZhbCgoKSA9PiB7XG4gICAgICAgICAgICBsZXQgb2xkU2Vjb25kID0gTnVtYmVyKHNlY29uZHMuaW5uZXJIVE1MKTtcbiAgICAgICAgICAgIGxldCBvbGRNaW51dGUgPSBOdW1iZXIobWludXRlcy5pbm5lckhUTUwpO1xuICAgICAgICAgICAgaWYgKG9sZFNlY29uZCArIDEgPT09IDYwKSB7XG4gICAgICAgICAgICAgICAgc2Vjb25kcy5pbm5lckhUTUwgPSAwO1xuICAgICAgICAgICAgICAgIG1pbnV0ZXMuaW5uZXJIVE1MID0gb2xkTWludXRlICsgMTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgbGV0IG5ld1NlY29uZHMgPSBOdW1iZXIoc2Vjb25kcy5pbm5lckhUTUwpICsgMSA8IDEwID8gYDAke051bWJlcihzZWNvbmRzLmlubmVySFRNTCkgKyAxfWAgOiBOdW1iZXIoc2Vjb25kcy5pbm5lckhUTUwpICsgMTtcbiAgICAgICAgICAgICAgICBzZWNvbmRzLmlubmVySFRNTCA9IG5ld1NlY29uZHM7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sIDEwMDApXG4gICAgfVxuXG4gICAgc3RvcFRpbWVyKCkge1xuICAgICAgICBjbGVhckludGVydmFsKHRoaXMuY2xlYXJUaW1lcik7XG4gICAgfVxuXG4gICAgY2hhbmdlQ29udHJvbHMobW9kZSkge1xuICAgICAgICBpZiAobW9kZSA9PT0gJ3NpbmdsZS1wbGF5ZXInKSB7XG4gICAgICAgICAgICB0aGlzLmNvbnRyb2xzID0geyBsZWZ0OiAzNywgcmlnaHQ6IDM5LCB0dXJuUmlnaHQ6IDM4LCBzb2Z0RHJvcDogNDAsIGhvbGQ6IDE2LCB0dXJuTGVmdDogNjcsIGhhcmREcm9wOiAzMiB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmNvbnRyb2xzID0geyBsZWZ0OiA2NSwgcmlnaHQ6IDY4LCB0dXJuUmlnaHQ6IDg3LCBzb2Z0RHJvcDogODMsIGhvbGQ6IDgxLCB0dXJuTGVmdDogMTkyLCBoYXJkRHJvcDogNDkgfVxuICAgICAgICB9XG4gICAgfVxufSIsImltcG9ydCBNZW51IGZyb20gJy4vbWVudS9tZW51J1xuXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCAoKSA9PiB7XG4gICAgY29uc3QgbWVudSA9IG5ldyBNZW51O1xuICAgIG1lbnUucmVuZGVyTWVudSgpO1xufSk7IiwiaW1wb3J0IEdhbWUgZnJvbSAnLi4vZ2FtZS9nYW1lJztcbmltcG9ydCBGaWVsZCBmcm9tICcuLi9maWVsZC9maWVsZCc7XG5pbXBvcnQgTXVsdGlwbGF5ZXIgZnJvbSAnLi4vbXVsdGlwbGF5ZXIvbXVsdGlwbGF5ZXInO1xuaW1wb3J0IE1vZGFsIGZyb20gJy4uL21vZGFsL21vZGFsJztcbmltcG9ydCBTaW5nbGVQbGF5ZXJDb250ZW50IGZyb20gJy4uL21vZGFsL3NpbmdsZVBsYXllckNvbnRlbnQnO1xuaW1wb3J0IE11bHRpcGxheWVyQ29udGVudCBmcm9tICcuLi9tb2RhbC9tdWx0aXBsYXllckNvbnRlbnQnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNZW51IHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5tZW51ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJtZW51XCIpO1xuXG4gICAgICAgIHRoaXMub3B0aW9uc1BsYXllcjEgPSB7IGdhbWVOdW06IDEsIG1vdmVTcGVlZDogMjAsIGNvbnRyb2xzOiB7IGxlZnQ6IDY1LCByaWdodDogNjgsIHR1cm5SaWdodDogODcsIHNvZnREcm9wOiA4MywgaG9sZDogODEsIHR1cm5MZWZ0OiAxOTIsIGhhcmREcm9wOiA0OSB9IH1cbiAgICAgICAgdGhpcy5vcHRpb25zUGxheWVyMiA9IHsgZ2FtZU51bTogMiwgbW92ZVNwZWVkOiAyMCwgY29udHJvbHM6IHsgbGVmdDogMzcsIHJpZ2h0OiAzOSwgdHVyblJpZ2h0OiAzOCwgc29mdERyb3A6IDQwLCBob2xkOiAxNiwgdHVybkxlZnQ6IDc1LCBoYXJkRHJvcDogMTkwIH0gfVxuICAgICAgICAgICAgXG5cbiAgICAgICAgdGhpcy5nYW1lMSA9IG5ldyBHYW1lKHRoaXMub3B0aW9uc1BsYXllcjEpO1xuICAgICAgICB0aGlzLmdhbWUyID0gbmV3IEdhbWUodGhpcy5vcHRpb25zUGxheWVyMik7XG5cbiAgICAgICAgdGhpcy5maWVsZDEgPSBuZXcgRmllbGQoMSk7XG4gICAgICAgIHRoaXMuZmllbGQyID0gbmV3IEZpZWxkKDIpO1xuXG4gICAgICAgIHRoaXMubXVsdGlwbGF5ZXJNb2RlID0gbmV3IE11bHRpcGxheWVyKHRoaXMuZ2FtZTEsIHRoaXMuZ2FtZTIpO1xuXG4gICAgICAgIHRoaXMuZmllbGRDb250YWluZXIxID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJmaWVsZC1jb250YWluZXItMVwiKTtcbiAgICAgICAgdGhpcy5maWVsZENvbnRhaW5lcjIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImZpZWxkLWNvbnRhaW5lci0yXCIpO1xuXG4gICAgICAgIHRoaXMuc2luZ2xlUGxheWVyQ29udGVudCA9IG5ldyBTaW5nbGVQbGF5ZXJDb250ZW50KCk7XG4gICAgICAgIHRoaXMubXVsdGlwbGF5ZXJDb250ZW50ID0gbmV3IE11bHRpcGxheWVyQ29udGVudCgpO1xuICAgICAgICB0aGlzLm1vZGFsID0gbmV3IE1vZGFsKCk7XG4gICAgfVxuXG4gICAgcmVuZGVyQnV0dG9ucygpIHtcbiAgICAgICAgbGV0IHNpbmdsZVBsYXllckJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIGxldCBtdWx0aXBsYXllckJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5cbiAgICAgICAgc2luZ2xlUGxheWVyQnV0dG9uLmNsYXNzTGlzdC5hZGQoXCJzaW5nbGUtcGxheWVyLWJ1dHRvblwiKTtcbiAgICAgICAgbXVsdGlwbGF5ZXJCdXR0b24uY2xhc3NMaXN0LmFkZChcIm11bHRpcGxheWVyLWJ1dHRvblwiKTtcblxuICAgICAgICBzaW5nbGVQbGF5ZXJCdXR0b24uaW5uZXJIVE1MID0gXCJTaW5nbGUgUGxheWVyXCI7XG4gICAgICAgIG11bHRpcGxheWVyQnV0dG9uLmlubmVySFRNTCA9IFwiTXVsdGlwbGF5ZXJcIjtcblxuICAgICAgICB0aGlzLmFkZEV2ZW50TGlzdGVuZXJzKHNpbmdsZVBsYXllckJ1dHRvbiwgbXVsdGlwbGF5ZXJCdXR0b24pO1xuXG4gICAgICAgIHJldHVybiBbc2luZ2xlUGxheWVyQnV0dG9uLCBtdWx0aXBsYXllckJ1dHRvbl07XG4gICAgfVxuXG4gICAgYWRkRXZlbnRMaXN0ZW5lcnMoc2luZ2xlUGxheWVyQnV0dG9uLCBtdWx0aXBsYXllckJ1dHRvbikge1xuICAgICAgICBzaW5nbGVQbGF5ZXJCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLnJlbmRlclNpbmdsZVBsYXllcigpO1xuICAgICAgICB9KTtcbiAgICAgICAgbXVsdGlwbGF5ZXJCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLnJlbmRlck11bHRpcGxheWVyKCk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHJlbmRlclNpbmdsZVBsYXllcigpIHtcbiAgICAgICAgLy8gZG9jdW1lbnQuYm9keS5yZW1vdmVDaGlsZCh0aGlzLm1lbnUpO1xuICAgICAgICB0aGlzLm1lbnUuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICAgICAgICBkb2N1bWVudC5ib2R5LnN0eWxlLmp1c3RpZnlDb250ZW50ID0gJ25vbmUnO1xuICAgICAgICB0aGlzLnNpbmdsZVBsYXllckNvbnRlbnQuY3JlYXRlQWxsQ29udGVudCgpO1xuICAgICAgICB0aGlzLmZpZWxkMS5jcmVhdGVDb21wbGV0ZUZpZWxkKHRoaXMuZmllbGRDb250YWluZXIxKTtcbiAgICAgICAgdGhpcy5maWVsZENvbnRhaW5lcjEuc3R5bGUucG9zaXRpb24gPSAncmVsYXRpdmUnO1xuICAgICAgICB0aGlzLmZpZWxkQ29udGFpbmVyMS5zdHlsZS5sZWZ0ID0gJzE0dncnO1xuICAgICAgICB0aGlzLmdhbWUxLmtleUxpc3RlbmVyKCk7XG4gICAgICAgIHRoaXMuZ2FtZTEuY2hhbmdlQ29udHJvbHMoJ3NpbmdsZS1wbGF5ZXInKTtcbiAgICAgICAgdGhpcy5nYW1lMS5yZXN0YXJ0R2FtZSgpO1xuICAgICAgICB0aGlzLnNpbmdsZVBsYXllckNvbnRlbnQuY3JlYXRlVGltZXIoKTtcbiAgICB9XG5cbiAgICByZW5kZXJNdWx0aXBsYXllcigpIHtcbiAgICAgICAgdGhpcy5nYW1lMS5jaGFuZ2VDb250cm9scygnbXVsdGlwbGF5ZXInKTtcbiAgICAgICAgdGhpcy5maWVsZENvbnRhaW5lcjEuc3R5bGUubGVmdCA9ICcwdncnO1xuICAgICAgICB0aGlzLm1lbnUuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICAgICAgICB0aGlzLmZpZWxkMS5jcmVhdGVDb21wbGV0ZUZpZWxkKHRoaXMuZmllbGRDb250YWluZXIxKTtcbiAgICAgICAgdGhpcy5nYW1lMS5rZXlMaXN0ZW5lcigpO1xuXG4gICAgICAgIHRoaXMuZmllbGQyLmNyZWF0ZUNvbXBsZXRlRmllbGQodGhpcy5maWVsZENvbnRhaW5lcjIpO1xuICAgICAgICB0aGlzLmdhbWUyLmtleUxpc3RlbmVyKCk7XG5cbiAgICAgICAgbGV0IGNvbnRyb2xzQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGNvbnRyb2xzQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2NvbnRyb2xzLWNvbnRhaW5lcicpXG4gICAgICAgIGNvbnRyb2xzQ29udGFpbmVyLmFwcGVuZENoaWxkKHRoaXMubXVsdGlwbGF5ZXJDb250ZW50LmNyZWF0ZUNvbnRyb2xzQ29udGVudCgncGxheWVyMScpKTtcbiAgICAgICAgY29udHJvbHNDb250YWluZXIuYXBwZW5kQ2hpbGQodGhpcy5tdWx0aXBsYXllckNvbnRlbnQuY3JlYXRlQ29udHJvbHNDb250ZW50KCdwbGF5ZXIyJykpO1xuICAgICAgICB0aGlzLm1vZGFsLmNyZWF0ZSgpO1xuICAgICAgICB0aGlzLm1vZGFsLmFwcGVuZENoaWxkKGNvbnRyb2xzQ29udGFpbmVyKTtcbiAgICAgICAgdGhpcy5tb2RhbC5hcHBlbmRDaGlsZCh0aGlzLl9jcmVhdGVDbG9zZU1vZGFsTGluaygpKTtcbiAgICB9XG5cbiAgICByZW5kZXJNZW51KCkge1xuICAgICAgICBsZXQgYnV0dG9uQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgYnV0dG9uQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJidXR0b24tY29udGFpbmVyXCIpO1xuICAgICAgICB0aGlzLnJlbmRlckJ1dHRvbnMoKS5mb3JFYWNoKGJ1dHRvbiA9PiB7XG4gICAgICAgICAgICBidXR0b25Db250YWluZXIuYXBwZW5kQ2hpbGQoYnV0dG9uKTtcbiAgICAgICAgfSlcbiAgICAgICAgdGhpcy5tZW51LmFwcGVuZENoaWxkKGJ1dHRvbkNvbnRhaW5lcik7XG4gICAgfVxuXG4gICAgX2NyZWF0ZUNsb3NlTW9kYWxMaW5rKCkge1xuICAgICAgICBsZXQgY2xvc2VMaW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGNsb3NlTGluay5jbGFzc0xpc3QuYWRkKCdjbG9zZS1tb2RhbC1saW5rJyk7XG4gICAgICAgIGNsb3NlTGluay5pbm5lckhUTUwgPSBcIkxldCdzIGdldCBzdGFydGVkLlwiO1xuXG4gICAgICAgIGNsb3NlTGluay5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICAgIHRoaXMubW9kYWwucmVtb3ZlKCk7XG4gICAgICAgICAgICB0aGlzLm11bHRpcGxheWVyTW9kZS5zdGFydE11bHRpcGxheWVyKCk7XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gY2xvc2VMaW5rO1xuICAgIH1cbn0iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBNb2RhbCB7XG4gICAgY3JlYXRlKCkge1xuICAgICAgICBsZXQgbW9kYWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgbW9kYWwuY2xhc3NMaXN0LmFkZCgnY29udHJvbHMtbW9kYWwnKTtcbiAgICAgICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChtb2RhbCk7XG4gICAgfVxuICAgIFxuICAgIGFwcGVuZENoaWxkKGNvbnRlbnQpIHtcbiAgICAgICAgbGV0IG1vZGFsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbnRyb2xzLW1vZGFsJyk7XG4gICAgICAgIG1vZGFsLmFwcGVuZENoaWxkKGNvbnRlbnQpO1xuICAgIH1cblxuICAgIHJlbW92ZSgpIHtcbiAgICAgICAgbGV0IG1vZGFsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbnRyb2xzLW1vZGFsJyk7XG4gICAgICAgIG1vZGFsLnJlbW92ZSgpO1xuICAgIH1cbn0iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBNdWx0aXBsYXllckNvbnRlbnQge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLmtleXMgPSB7XG4gICAgICAgICAgICBwbGF5ZXIxOiB7XG4gICAgICAgICAgICAgICAgJ3dfa2V5JzogJ1RVUk4gUklHSFQnLFxuICAgICAgICAgICAgICAgICdhX2tleSc6ICdMRUZUJyxcbiAgICAgICAgICAgICAgICAnc19rZXknOiAnU09GVCBEUk9QJyxcbiAgICAgICAgICAgICAgICAnZF9rZXknOiAnUklHSFQnLFxuICAgICAgICAgICAgICAgICdgX2tleSc6ICdUVVJOIExFRlQnLFxuICAgICAgICAgICAgICAgICdxX2tleSc6ICdIT0xEJyxcbiAgICAgICAgICAgICAgICAnMV9rZXknOiAnSEFSRERST1AnXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgcGxheWVyMjoge1xuICAgICAgICAgICAgICAgICd1cF9rZXknOiAnVFVSTiBSSUdIVCcsXG4gICAgICAgICAgICAgICAgJ2xlZnRfa2V5JzogJ0xFRlQnLFxuICAgICAgICAgICAgICAgICdkb3duX2tleSc6ICdTT0ZUIERST1AnLFxuICAgICAgICAgICAgICAgICdyaWdodF9rZXknOiAnUklHSFQnLFxuICAgICAgICAgICAgICAgICdrX2tleSc6ICdUVVJOIExFRlQnLFxuICAgICAgICAgICAgICAgICdzaGlmdF9rZXknOiAnSE9MRCcsXG4gICAgICAgICAgICAgICAgJ3BlcmlvZF9rZXknOiAnSEFSRERST1AnXG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG5cbiAgICB9XG5cbiAgICBjcmVhdGVDb250cm9sc0NvbnRlbnQocGxheWVyKSB7XG4gICAgICAgIGxldCBjb250cm9sc0RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBjb250cm9sc0Rpdi5jbGFzc0xpc3QuYWRkKCdjb250cm9scycpO1xuICAgICAgICBsZXQgaW1hZ2VzID0gT2JqZWN0LmtleXModGhpcy5rZXlzW3BsYXllcl0pO1xuICAgICAgICBsZXQgZGVzY3JpcHRpb25zID0gT2JqZWN0LnZhbHVlcyh0aGlzLmtleXNbcGxheWVyXSk7XG5cbiAgICAgICAgLy8gaW5pdGlhbGl6ZSBhcnJheXMgb2Ygc3BhbnMgYW5kIGRpdnNcbiAgICAgICAgbGV0IHNwYW5zID0gW107XG4gICAgICAgIGxldCBkaXZzID0gW107XG5cbiAgICAgICAgbGV0IGxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaGVhZGVyJyk7XG4gICAgICAgIGxhYmVsLmlubmVySFRNTCA9IGBQTEFZRVIgJHtwbGF5ZXIuc2xpY2UoNil9YFxuICAgICAgICBjb250cm9sc0Rpdi5hcHBlbmRDaGlsZChsYWJlbCk7XG5cbiAgICAgICAgLy8gY3JlYXRlIGVsZW1lbnRzIGFuZCBzdG9yZSBpbnRvIGFycmF5IGluZGljZXMgZm9yIGxhdGVyIHJlZmVyZW5jZVxuICAgICAgICBmb3IgKGxldCBpID0gMTsgaSA8PSA3OyBpKyspIHtcbiAgICAgICAgICAgIHNwYW5zW2ldID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICAgICAgICAgICAgaWYgKGkgPD0gMykgZGl2c1tpXSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICB9XG5cbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBpbWFnZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGxldCBwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgICAgICAgICAgbGV0IGltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICAgICAgICAgICAgaW1nLmNsYXNzTGlzdC5hZGQoJ2tleWJvYXJkLWtleScpO1xuICAgICAgICAgICAgaWYgKGkgPT09IDUgJiYgcGxheWVyID09PSBcInBsYXllcjJcIikgaW1nLmNsYXNzTGlzdC5hZGQoJ3NoaWZ0LWtleScpO1xuXG4gICAgICAgICAgICBwLmlubmVySFRNTCA9IGRlc2NyaXB0aW9uc1tpXTtcbiAgICAgICAgICAgIGltZy5zZXRBdHRyaWJ1dGUoJ3NyYycsIGAuL2Fzc2V0cy9pbWFnZXMvJHtpbWFnZXNbaV19LnBuZ2ApO1xuXG4gICAgICAgICAgICBzcGFuc1tpICsgMV0uYXBwZW5kKGltZyk7XG4gICAgICAgICAgICBzcGFuc1tpICsgMV0uYXBwZW5kKHApO1xuXG4gICAgICAgICAgICBpZiAoaSA8IDEpIHtcbiAgICAgICAgICAgICAgICBkaXZzWzFdLmFwcGVuZChzcGFuc1tpICsgMV0pO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChpIDwgNCkge1xuICAgICAgICAgICAgICAgIGRpdnNbMl0uYXBwZW5kKHNwYW5zW2kgKyAxXSk7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKGkgPCA3KSB7XG4gICAgICAgICAgICAgICAgZGl2c1szXS5hcHBlbmQoc3BhbnNbaSArIDFdKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGZvciAobGV0IGkgPSAxOyBpIDw9IDM7IGkrKykge1xuICAgICAgICAgICAgY29udHJvbHNEaXYuYXBwZW5kKGRpdnNbaV0pO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGNvbnRyb2xzRGl2O1xuICAgIH1cbn0iLCJpbXBvcnQgU2NvcmVLZWVwZXIgZnJvbSAnLi4vc2NvcmVrZWVwZXIvc2NvcmVrZWVwZXInO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTaW5nbGVQbGF5ZXJDb250ZW50IHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5rZXlzID0ge1xuICAgICAgICAgICAgJ2xlZnRfa2V5JzogJ0xFRlQnLFxuICAgICAgICAgICAgJ3JpZ2h0X2tleSc6ICdSSUdIVCcsXG4gICAgICAgICAgICAnZG93bl9rZXknOiAnU09GVCBEUk9QJyxcbiAgICAgICAgICAgICd1cF9rZXknOiAnVFVSTiBSSUdIVCcsXG4gICAgICAgICAgICAnY19rZXknOiAnVFVSTiBMRUZUJyxcbiAgICAgICAgICAgICdzaGlmdF9rZXknOiAnSE9MRCcsXG4gICAgICAgICAgICAnc3BhY2Vfa2V5JzogJ0hBUkREUk9QJyxcbiAgICAgICAgfTtcblxuICAgICAgICB0aGlzLnNjb3JlS2VlcGVyID0gbmV3IFNjb3JlS2VlcGVyKCk7XG4gICAgfVxuXG4gICAgY3JlYXRlQWxsQ29udGVudCgpIHtcbiAgICAgICAgbGV0IGFsbFNpbmdsZVBsYXllckNvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgYWxsU2luZ2xlUGxheWVyQ29udGVudC5jbGFzc0xpc3QuYWRkKCdzaW5nbGUtcGxheWVyLWNvbnRlbnQnKTtcbiAgICAgICAgYWxsU2luZ2xlUGxheWVyQ29udGVudC5hcHBlbmRDaGlsZCh0aGlzLmNyZWF0ZVRpbWVyKCkpO1xuICAgICAgICBhbGxTaW5nbGVQbGF5ZXJDb250ZW50LmFwcGVuZENoaWxkKHRoaXMuc2NvcmVLZWVwZXIuY3JlYXRlU2NvcmVLZWVwZXIoKSk7XG4gICAgICAgIGFsbFNpbmdsZVBsYXllckNvbnRlbnQuYXBwZW5kQ2hpbGQodGhpcy5jcmVhdGVDb250cm9sc0NvbnRlbnQoKSk7XG4gICAgICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kKGFsbFNpbmdsZVBsYXllckNvbnRlbnQpO1xuICAgIH1cblxuICAgIGNyZWF0ZUNvbnRyb2xzQ29udGVudCgpIHtcbiAgICAgICAgbGV0IGNvbnRlbnREaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgY29udGVudERpdi5jbGFzc0xpc3QuYWRkKCdjb250cm9scycpO1xuICAgICAgICBsZXQgaW1hZ2VzID0gT2JqZWN0LmtleXModGhpcy5rZXlzKTtcbiAgICAgICAgbGV0IGRlc2NyaXB0aW9ucyA9IE9iamVjdC52YWx1ZXModGhpcy5rZXlzKTtcblxuICAgICAgICAvLyBpbml0aWFsaXplIGFycmF5cyBvZiBzcGFucyBhbmQgZGl2c1xuICAgICAgICBsZXQgc3BhbnMgPSBbXTtcbiAgICAgICAgbGV0IGRpdnMgPSBbXTtcblxuICAgICAgICAvLyBjcmVhdGUgZWxlbWVudHMgYW5kIHN0b3JlIGludG8gYXJyYXkgaW5kaWNlcyBmb3IgbGF0ZXIgcmVmZXJlbmNlXG4gICAgICAgIGZvciAobGV0IGkgPSAxOyBpIDw9IDc7IGkrKykge1xuICAgICAgICAgICAgc3BhbnNbaV0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gICAgICAgICAgICBpZiAoaSA8PSA0KSBkaXZzW2ldID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIH1cblxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGltYWdlcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgbGV0IHAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgICAgICAgICBsZXQgaW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gICAgICAgICAgICBpbWcuY2xhc3NMaXN0LmFkZCgna2V5Ym9hcmQta2V5Jyk7XG4gICAgICAgICAgICBpZiAoaSA9PT0gNSkgaW1nLmNsYXNzTGlzdC5hZGQoJ3NoaWZ0LWtleScpO1xuICAgICAgICAgICAgaWYgKGkgPT09IDYpIGltZy5jbGFzc0xpc3QuYWRkKCdzcGFjZS1rZXknKTtcblxuICAgICAgICAgICAgcC5pbm5lckhUTUwgPSBkZXNjcmlwdGlvbnNbaV07XG4gICAgICAgICAgICBpbWcuc2V0QXR0cmlidXRlKCdzcmMnLCBgLi9hc3NldHMvaW1hZ2VzLyR7aW1hZ2VzW2ldfS5wbmdgKTtcblxuICAgICAgICAgICAgc3BhbnNbaSArIDFdLmFwcGVuZChpbWcpO1xuICAgICAgICAgICAgc3BhbnNbaSArIDFdLmFwcGVuZChwKTtcblxuICAgICAgICAgICAgaWYgKGkgPCAyKSB7XG4gICAgICAgICAgICAgICAgZGl2c1sxXS5hcHBlbmQoc3BhbnNbaSArIDFdKTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoaSA8IDQpIHtcbiAgICAgICAgICAgICAgICBkaXZzWzJdLmFwcGVuZChzcGFuc1tpICsgMV0pO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChpIDwgNikge1xuICAgICAgICAgICAgICAgIGRpdnNbM10uYXBwZW5kKHNwYW5zW2kgKyAxXSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGRpdnNbNF0uYXBwZW5kKHNwYW5zW2kgKyAxXSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBmb3IgKGxldCBpID0gMTsgaSA8PSA0OyBpKyspIHtcbiAgICAgICAgICAgIGNvbnRlbnREaXYuYXBwZW5kKGRpdnNbaV0pO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICByZXR1cm4gY29udGVudERpdjtcbiAgICB9XG5cbiAgICBjcmVhdGVUaW1lcigpIHtcbiAgICAgICAgbGV0IHRpbWVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGxldCBtaW51dGVzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgICAgICBsZXQgc2Vjb25kcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICAgICAgbGV0IGNvbG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgICAgICB0aW1lci5jbGFzc0xpc3QuYWRkKCd0aW1lcicpO1xuICAgICAgICBtaW51dGVzLmNsYXNzTGlzdC5hZGQoJ21pbnV0ZXMnKTtcbiAgICAgICAgc2Vjb25kcy5jbGFzc0xpc3QuYWRkKCdzZWNvbmRzJyk7XG4gICAgICAgIGNvbG9uLmNsYXNzTGlzdC5hZGQoJ2NvbG9uJyk7XG4gICAgICAgIG1pbnV0ZXMuaW5uZXJIVE1MID0gJzAnO1xuICAgICAgICBzZWNvbmRzLmlubmVySFRNTCA9ICcwMCc7XG4gICAgICAgIGNvbG9uLmlubmVySFRNTCA9ICc6JztcbiAgICAgICAgW21pbnV0ZXMsIGNvbG9uLCBzZWNvbmRzXS5mb3JFYWNoKGVsZSA9PiB0aW1lci5hcHBlbmRDaGlsZChlbGUpKTtcbiAgICAgICAgcmV0dXJuIHRpbWVyO1xuICAgIH1cbn0iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBNdWx0aXBsYXllciB7XG4gICAgY29uc3RydWN0b3IocGxheWVyMSwgcGxheWVyMikge1xuICAgICAgICB0aGlzLnBsYXllcjEgPSBwbGF5ZXIxO1xuICAgICAgICB0aGlzLnBsYXllcjIgPSBwbGF5ZXIyO1xuICAgIH1cblxuICAgIHN0YXJ0TXVsdGlwbGF5ZXIoKSB7XG4gICAgICAgIHRoaXMucGxheWVyMS5zZXRPcHBvbmVudCh0aGlzLnBsYXllcjIpO1xuICAgICAgICB0aGlzLnBsYXllcjIuc2V0T3Bwb25lbnQodGhpcy5wbGF5ZXIxKTtcbiAgICAgICAgdGhpcy5wbGF5ZXIxLnJlc3RhcnRHYW1lKCk7XG4gICAgICAgIHRoaXMucGxheWVyMi5yZXN0YXJ0R2FtZSgpO1xuICAgIH1cbn1cbiIsImltcG9ydCBQaWVjZSBmcm9tICcuL3BpZWNlJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSVBpZWNlIGV4dGVuZHMgUGllY2Uge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICB0aGlzLm5hbWUgPSBcIklQaWVjZVwiO1xuICAgICAgICB0aGlzLnBvc2l0aW9uID0ge1xuICAgICAgICAgICAgdG9wOiBbXSxcbiAgICAgICAgICAgIG1pZGRsZTogW10sXG4gICAgICAgICAgICBib3R0b206IFtbMCwgM10sIFswLCA0XSwgWzAsIDVdLCBbMCwgNl1dXG4gICAgICAgIH07XG4gICAgICAgIHRoaXMuY29sb3JDb2RlID0gMjtcbiAgICAgICAgdGhpcy50dXJuaW5nUG9pbnQgPSBbMSwgNF07XG4gICAgICAgIHRoaXMuZGlzcGxheVNxdWFyZXMgPSBbWzAsIDJdLCBbMSwgMl0sIFsyLCAyXSwgWzMsIDJdXTtcblxuICAgICAgICB0aGlzLnJlbW92ZVNxdWFyZXMgPSBbXTtcblxuICAgICAgICB0aGlzLm9mZnNldEd1aWRlID0ge1xuICAgICAgICAgICAgMDogW1swLCAwXSwgWzAsIC0xXSwgWzAsIDJdLCBbMCwgLTFdLCBbMCwgMl1dLFxuICAgICAgICAgICAgMTogW1swLCAtMV0sIFswLCAwXSwgWzAsIDBdLCBbMSwgMF0sIFstMiwgMF1dLFxuICAgICAgICAgICAgMjogW1sxLCAtMV0sIFsxLCAxXSwgWzEsIC0yXSwgWzAsIDFdLCBbMCwgLTJdXSxcbiAgICAgICAgICAgIDM6IFtbMSwgMF0sIFsxLCAwXSwgWzEsIDBdLCBbLTEsIDBdLCBbMiwgMF1dXG4gICAgICAgIH1cbiAgICB9XG5cblxufVxuXG5cbiIsImltcG9ydCBQaWVjZSBmcm9tICcuL3BpZWNlJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgalBpZWNlIGV4dGVuZHMgUGllY2Uge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICB0aGlzLm5hbWUgPSBcIkpQaWVjZVwiO1xuICAgICAgICB0aGlzLnBvc2l0aW9uID0ge1xuICAgICAgICAgICAgdG9wOiBbWzAsIDNdXSxcbiAgICAgICAgICAgIG1pZGRsZTogW10sXG4gICAgICAgICAgICBib3R0b206IFtbMSwgM10sIFsxLCA0XSwgWzEsIDVdXVxuICAgICAgICB9O1xuICAgICAgICB0aGlzLmNvbG9yQ29kZSA9IDc7XG5cbiAgICAgICAgdGhpcy50dXJuaW5nUG9pbnQgPSBbMSwgNF07XG5cbiAgICAgICAgdGhpcy5kaXNwbGF5U3F1YXJlcyA9IFtbMSwgMV0sIFsxLCAyXSwgWzIsIDJdLCBbMywgMl1dO1xuIFxuICAgICAgICB0aGlzLnJlbW92ZVNxdWFyZXMgPSBbXTtcbiAgICB9XG59IiwiaW1wb3J0IFBpZWNlIGZyb20gJy4vcGllY2UnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBsUGllY2UgZXh0ZW5kcyBQaWVjZSB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIHRoaXMubmFtZSA9IFwiTFBpZWNlXCI7XG4gICAgICAgIHRoaXMucG9zaXRpb24gPSB7XG4gICAgICAgICAgICB0b3A6IFtbMCwgNV1dLFxuICAgICAgICAgICAgbWlkZGxlOiBbXSxcbiAgICAgICAgICAgIGJvdHRvbTogW1sxLCAzXSwgWzEsIDRdLCBbMSwgNV1dXG4gICAgICAgIH07XG4gICAgICAgIHRoaXMuY29sb3JDb2RlID0gNjtcblxuICAgICAgICB0aGlzLnR1cm5pbmdQb2ludCA9IFsxLCA0XTtcblxuICAgICAgICB0aGlzLmRpc3BsYXlTcXVhcmVzID0gW1sxLCAyXSwgWzIsIDJdLCBbMywgMl0sIFszLCAxXV07XG5cbiAgICAgICAgdGhpcy5yZW1vdmVTcXVhcmVzID0gW107XG4gICAgfVxufSIsImltcG9ydCBQaWVjZSBmcm9tICcuL3BpZWNlJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgT1BpZWNlIGV4dGVuZHMgUGllY2Uge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICB0aGlzLm5hbWUgPSBcIk9QaWVjZVwiO1xuICAgICAgICB0aGlzLnBvc2l0aW9uID0ge1xuICAgICAgICAgICAgdG9wOiBbWzAsIDRdLCBbMCwgNV1dLFxuICAgICAgICAgICAgbWlkZGxlOiBbXSxcbiAgICAgICAgICAgIGJvdHRvbTogW1sxLCA0XSxbMSwgNV1dXG4gICAgICAgIH07XG4gICAgICAgIHRoaXMuY29sb3JDb2RlID0gMTtcbiAgICAgICAgdGhpcy50dXJuaW5nUG9pbnQgPSBbMSwgNF07XG4gICAgICAgIHRoaXMuZGlzcGxheVNxdWFyZXMgPSBbWzEsIDFdLCBbMiwgMV0sIFsxLCAyXSwgWzIsIDJdXTtcblxuICAgICAgICB0aGlzLnJlbW92ZVNxdWFyZXMgPSBbXTtcbiAgICB9XG5cbiAgICAvLyBPUGllY2UgZG9lcyBub3QgdHVyblxuICAgIHR1cm5SaWdodCgpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBcbiAgICB0dXJuTGVmdCgpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbn0gIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgUGllY2Uge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLmxlZnRNb3N0ID0gJyc7XG4gICAgICAgIHRoaXMucmlnaHRNb3N0ID0gJyc7XG4gICAgICAgIHRoaXMuYm90dG9tTW9zdCA9ICcnO1xuICAgICAgICB0aGlzLnRvcE1vc3QgPSAnJztcblxuICAgICAgICB0aGlzLnJvdGF0aW9uU3RhdGUgPSAwO1xuXG4gICAgICAgIHRoaXMub2Zmc2V0R3VpZGUgPSB7XG4gICAgICAgICAgICAwOiBbWzAsIDBdLCBbMCwgMF0sIFswLCAwXSwgWzAsIDBdLCBbMCwgMF1dLFxuICAgICAgICAgICAgMTogW1swLCAwXSwgWzAsIDFdLCBbLTEsIDFdLCBbMiwgMF0sIFsyLCAxXV0sXG4gICAgICAgICAgICAyOiBbWzAsIDBdLCBbMCwgMF0sIFswLCAwXSwgWzAsIDBdLCBbMCwgMF1dLFxuICAgICAgICAgICAgMzogW1swLCAwXSwgWzAsIC0xXSwgWy0xLCAtMV0sIFsyLCAwXSwgWzIsIC0xXV1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIHNldE91dGVyU3F1YXJlcygpIHtcbiAgICAgICAgbGV0IGxlZnRNb3N0LCByaWdodE1vc3QsIHRvcE1vc3QsIGJvdHRvbU1vc3Q7XG4gICAgICAgIE9iamVjdC52YWx1ZXModGhpcy5wb3NpdGlvbikuZm9yRWFjaChjb29yZGluYXRlc0FycmF5ID0+IGNvb3JkaW5hdGVzQXJyYXkuZm9yRWFjaChhcnJheSA9PiB7XG4gICAgICAgICAgICBsZXQgY29sdW1uVmFsdWUgPSBhcnJheVsxXTtcbiAgICAgICAgICAgIGxldCByb3dWYWx1ZSA9IGFycmF5WzBdO1xuICAgICAgICAgICAgaWYgKCFsZWZ0TW9zdCB8fCBjb2x1bW5WYWx1ZSA8IGxlZnRNb3N0WzFdKSBsZWZ0TW9zdCA9IFtyb3dWYWx1ZSwgY29sdW1uVmFsdWVdO1xuICAgICAgICAgICAgaWYgKCFyaWdodE1vc3QgfHwgY29sdW1uVmFsdWUgPiByaWdodE1vc3RbMV0pIHJpZ2h0TW9zdCA9IFtyb3dWYWx1ZSwgY29sdW1uVmFsdWVdO1xuICAgICAgICAgICAgaWYgKCFib3R0b21Nb3N0IHx8IHJvd1ZhbHVlID4gYm90dG9tTW9zdFswXSkgYm90dG9tTW9zdCA9IFtyb3dWYWx1ZSwgY29sdW1uVmFsdWVdO1xuICAgICAgICAgICAgaWYgKCF0b3BNb3N0IHx8IHJvd1ZhbHVlIDwgdG9wTW9zdFswXSkgdG9wTW9zdCA9IFtyb3dWYWx1ZSwgY29sdW1uVmFsdWVdO1xuICAgICAgICB9KSk7XG4gICAgICAgIHRoaXMubGVmdE1vc3QgPSBsZWZ0TW9zdDtcbiAgICAgICAgdGhpcy5yaWdodE1vc3QgPSByaWdodE1vc3Q7XG4gICAgICAgIHRoaXMudG9wTW9zdCA9IHRvcE1vc3Q7XG4gICAgICAgIHRoaXMuYm90dG9tTW9zdCA9IGJvdHRvbU1vc3Q7XG4gICAgfVxuXG4gICAgcG9wdWxhdGVGaWVsZChmaWVsZCkge1xuICAgICAgICAvLyBsZXQgY29vcmRpbmF0ZUFycmF5cyA9IE9iamVjdC52YWx1ZXModGhpcy5wb3NpdGlvbik7XG4gICAgICAgIGxldCBjb29yZGluYXRlQXJyYXlzID0gWy4uLnRoaXMucG9zaXRpb24udG9wLCAuLi50aGlzLnBvc2l0aW9uLm1pZGRsZSwgLi4udGhpcy5wb3NpdGlvbi5ib3R0b21dO1xuXG4gICAgICAgIGNvb3JkaW5hdGVBcnJheXMuZm9yRWFjaChhcnJheSA9PiB7XG4gICAgICAgICAgICBsZXQgW3JvdywgY29sXSA9IFthcnJheVswXSwgYXJyYXlbMV1dO1xuICAgICAgICAgICAgaWYgKChjb2wgPj0gMCAmJiBjb2wgPD0gMTkpICYmIChyb3cgPj0gMCAmJiByb3cgPD0gMTkpKSBmaWVsZFtyb3ddW2NvbF0gPSB0aGlzLmNvbG9yQ29kZTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgdGhpcy5yZW1vdmVTcXVhcmVzLmZvckVhY2gocG9zaXRpb25BcnJheSA9PiB7XG4gICAgICAgICAgICBsZXQgW3JvdywgY29sXSA9IFtwb3NpdGlvbkFycmF5WzBdLCBwb3NpdGlvbkFycmF5WzFdXTtcbiAgICAgICAgICAgIGlmICgoY29sID49IDAgJiYgY29sIDw9IDE5KSAmJiAocm93ID49IDAgJiYgcm93IDw9IDE5KSkgZmllbGRbcm93XVtjb2xdID0gMDtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgLy8gY29tcGFyZXMgdHdvIGFycmF5cyBvZiBjb29yZGluYXRlcyBhbmQgY2hlY2sgaWYgdGhleSBoYXZlIHRoZSBzYW1lIGNvbnRlbnQgaW4gdGhlIHNhbWUgb3JkZXJcbiAgICBfc3F1YXJlc0FyZUVxdWFsKG9sZFNxdWFyZSwgbmV3U3F1YXJlKSB7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgb2xkU3F1YXJlLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBpZiAob2xkU3F1YXJlW2ldICE9PSBuZXdTcXVhcmVbaV0pIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG5cbiAgICBfaW5jbHVkZXMoc3F1YXJlLCBjb29yZGluYXRlQXJyYXlzKSB7XG4gICAgICAgIGxldCByZXN1bHQgPSBmYWxzZTtcbiAgICAgICAgY29vcmRpbmF0ZUFycmF5cy5mb3JFYWNoKGFycmF5ID0+IHtcbiAgICAgICAgICAgIGlmICh0aGlzLl9zcXVhcmVzQXJlRXF1YWwoc3F1YXJlLCBhcnJheSkpIHtcbiAgICAgICAgICAgICAgICByZXN1bHQgPSB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG5cbiAgICBkcm9wKCkge1xuICAgICAgICBsZXQgb2xkUG9zaXRpb24gPSB7XG4gICAgICAgICAgICB0b3A6IHRoaXMucG9zaXRpb24udG9wLm1hcChhcnJheSA9PiBhcnJheS5zbGljZSgpKSxcbiAgICAgICAgICAgIG1pZGRsZTogdGhpcy5wb3NpdGlvbi5taWRkbGUubWFwKGFycmF5ID0+IGFycmF5LnNsaWNlKCkpLFxuICAgICAgICAgICAgYm90dG9tOiB0aGlzLnBvc2l0aW9uLmJvdHRvbS5tYXAoYXJyYXkgPT4gYXJyYXkuc2xpY2UoKSksXG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLnBvc2l0aW9uLnRvcCA9IHRoaXMucG9zaXRpb24udG9wLm1hcChhcnJheSA9PiBbYXJyYXlbMF0gKyAxLCBhcnJheVsxXV0pO1xuICAgICAgICB0aGlzLnBvc2l0aW9uLm1pZGRsZSA9IHRoaXMucG9zaXRpb24ubWlkZGxlLm1hcChhcnJheSA9PiBbYXJyYXlbMF0gKyAxLCBhcnJheVsxXV0pO1xuICAgICAgICB0aGlzLnBvc2l0aW9uLmJvdHRvbSA9IHRoaXMucG9zaXRpb24uYm90dG9tLm1hcChhcnJheSA9PiBbYXJyYXlbMF0gKyAxLCBhcnJheVsxXV0pO1xuICAgICAgICB0aGlzLnR1cm5pbmdQb2ludCA9IFt0aGlzLnR1cm5pbmdQb2ludFswXSArIDEsIHRoaXMudHVybmluZ1BvaW50WzFdXTtcblxuICAgICAgICB0aGlzLnNldFJlbW92ZVNxdWFyZXMob2xkUG9zaXRpb24pO1xuICAgIH1cblxuICAgIC8vIGZpbmQgaGlnaGVzdCBwb3NzaWJsZSBncm91bmQtcG9zaXRpb24gZm9yIHBpZWNlXG4gICAgaGFyZERyb3AoZmllbGQpIHtcbiAgICAgICAgdGhpcy5jbGVhclNlbGZGcm9tQm9hcmQoZmllbGQpO1xuICAgICAgICBsZXQgc3RvcHBlZCA9IGZhbHNlO1xuICAgICAgICB3aGlsZSAoIXN0b3BwZWQpIHtcbiAgICAgICAgICAgIGxldCBoYW5naW5nU3F1YXJlcyA9IHRoaXMuaGFuZ2luZ1NxdWFyZXModGhpcy5wb3NpdGlvbik7XG4gICAgICAgICAgICBoYW5naW5nU3F1YXJlcy5mb3JFYWNoKGNvb3JkaW5hdGUgPT4ge1xuICAgICAgICAgICAgICAgIGxldCBbcm93LCBjb2xdID0gW2Nvb3JkaW5hdGVbMF0sIGNvb3JkaW5hdGVbMV1dO1xuICAgICAgICAgICAgICAgIGlmICgocm93ICsgMSA9PT0gMjAgfHwgZmllbGRbcm93ICsgMV1bY29sXSkpIHN0b3BwZWQgPSB0cnVlO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBpZiAoc3RvcHBlZCkgYnJlYWs7XG4gICAgICAgICAgICB0aGlzLnBvc2l0aW9uLnRvcCA9IHRoaXMucG9zaXRpb24udG9wLm1hcChhcnJheSA9PiBbYXJyYXlbMF0gKyAxLCBhcnJheVsxXV0pO1xuICAgICAgICAgICAgdGhpcy5wb3NpdGlvbi5taWRkbGUgPSB0aGlzLnBvc2l0aW9uLm1pZGRsZS5tYXAoYXJyYXkgPT4gW2FycmF5WzBdICsgMSwgYXJyYXlbMV1dKTtcbiAgICAgICAgICAgIHRoaXMucG9zaXRpb24uYm90dG9tID0gdGhpcy5wb3NpdGlvbi5ib3R0b20ubWFwKGFycmF5ID0+IFthcnJheVswXSArIDEsIGFycmF5WzFdXSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjbGVhclNlbGZGcm9tQm9hcmQoZmllbGQpIHtcbiAgICAgICAgT2JqZWN0LnZhbHVlcyh0aGlzLnBvc2l0aW9uKS5mb3JFYWNoKGNvb3JkaW5hdGVBcnJheXMgPT4gY29vcmRpbmF0ZUFycmF5cy5mb3JFYWNoKGNvb3JkaW5hdGUgPT4ge1xuICAgICAgICAgICAgbGV0IHJvdyA9IGNvb3JkaW5hdGVbMF07XG4gICAgICAgICAgICBsZXQgY29sID0gY29vcmRpbmF0ZVsxXTtcbiAgICAgICAgICAgIGlmIChyb3cgPCAyMCAmJiByb3cgPj0gMCAmJiBjb2wgPj0gMCAmJiBjb2wgPCAxMCkgZmllbGRbcm93XVtjb2xdID0gMDtcbiAgICAgICAgfSkpO1xuICAgIH1cblxuICAgIG1vdmUoZGlyZWN0aW9uLCBmaWVsZCkge1xuICAgICAgICBsZXQgdFNwaW4gPSBmYWxzZTtcbiAgICAgICAgbGV0IG9sZFBvc2l0aW9uID0ge1xuICAgICAgICAgICAgdG9wOiB0aGlzLnBvc2l0aW9uLnRvcC5tYXAoYXJyYXkgPT4gYXJyYXkuc2xpY2UoKSksXG4gICAgICAgICAgICBtaWRkbGU6IHRoaXMucG9zaXRpb24ubWlkZGxlLm1hcChhcnJheSA9PiBhcnJheS5zbGljZSgpKSxcbiAgICAgICAgICAgIGJvdHRvbTogdGhpcy5wb3NpdGlvbi5ib3R0b20ubWFwKGFycmF5ID0+IGFycmF5LnNsaWNlKCkpLFxuICAgICAgICB9XG4gICAgICAgIHRoaXMub2xkVHVybmluZ1BvaW50ID0gdGhpcy50dXJuaW5nUG9pbnQuc2xpY2UoKTtcbiAgICAgICAgc3dpdGNoIChkaXJlY3Rpb24pIHtcbiAgICAgICAgICAgIGNhc2UgXCJsZWZ0XCI6XG4gICAgICAgICAgICAgICAgdGhpcy5wb3NpdGlvbi50b3AgPSB0aGlzLnBvc2l0aW9uLnRvcC5tYXAoYXJyYXkgPT4gW2FycmF5WzBdLCBhcnJheVsxXSAtIDFdKTtcbiAgICAgICAgICAgICAgICB0aGlzLnBvc2l0aW9uLm1pZGRsZSA9IHRoaXMucG9zaXRpb24ubWlkZGxlLm1hcChhcnJheSA9PiBbYXJyYXlbMF0sIGFycmF5WzFdIC0gMV0pO1xuICAgICAgICAgICAgICAgIHRoaXMucG9zaXRpb24uYm90dG9tID0gdGhpcy5wb3NpdGlvbi5ib3R0b20ubWFwKGFycmF5ID0+IFthcnJheVswXSwgYXJyYXlbMV0gLSAxXSk7XG4gICAgICAgICAgICAgICAgdGhpcy50dXJuaW5nUG9pbnQgPSBbdGhpcy50dXJuaW5nUG9pbnRbMF0sIHRoaXMudHVybmluZ1BvaW50WzFdIC0gMV07XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIFwidHVyblJpZ2h0XCI6XG4gICAgICAgICAgICAgICAgLy8gZGVmZXIgdG8gXCJ0dXJuXCIgbWV0aG9kXG4gICAgICAgICAgICAgICAgLy8gdFNwaW4gd2lsbCBlaXRoZXIgYmUgdHJ1dGh5IG9yIGZhbHN5LCB0cmFja2VkIGZvciBzZW5kaW5nIG1vcmUgbGluZXMgZHVyaW5nIG11bHRpcGxheWVyXG4gICAgICAgICAgICAgICAgdFNwaW4gPSB0aGlzLnR1cm5SaWdodChmaWVsZCwgb2xkUG9zaXRpb24pO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBcInJpZ2h0XCI6XG4gICAgICAgICAgICAgICAgdGhpcy5wb3NpdGlvbi50b3AgPSB0aGlzLnBvc2l0aW9uLnRvcC5tYXAoYXJyYXkgPT4gW2FycmF5WzBdLCBhcnJheVsxXSArIDFdKTtcbiAgICAgICAgICAgICAgICB0aGlzLnBvc2l0aW9uLm1pZGRsZSA9IHRoaXMucG9zaXRpb24ubWlkZGxlLm1hcChhcnJheSA9PiBbYXJyYXlbMF0sIGFycmF5WzFdICsgMV0pO1xuICAgICAgICAgICAgICAgIHRoaXMucG9zaXRpb24uYm90dG9tID0gdGhpcy5wb3NpdGlvbi5ib3R0b20ubWFwKGFycmF5ID0+IFthcnJheVswXSwgYXJyYXlbMV0gKyAxXSk7XG4gICAgICAgICAgICAgICAgdGhpcy50dXJuaW5nUG9pbnQgPSBbdGhpcy50dXJuaW5nUG9pbnRbMF0sIHRoaXMudHVybmluZ1BvaW50WzFdICsgMV07XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIFwiZG93blwiOlxuICAgICAgICAgICAgICAgIHRoaXMucG9zaXRpb24udG9wID0gdGhpcy5wb3NpdGlvbi50b3AubWFwKGFycmF5ID0+IFthcnJheVswXSArIDEsIGFycmF5WzFdXSk7XG4gICAgICAgICAgICAgICAgdGhpcy5wb3NpdGlvbi5taWRkbGUgPSB0aGlzLnBvc2l0aW9uLm1pZGRsZS5tYXAoYXJyYXkgPT4gW2FycmF5WzBdICsgMSwgYXJyYXlbMV1dKTtcbiAgICAgICAgICAgICAgICB0aGlzLnBvc2l0aW9uLmJvdHRvbSA9IHRoaXMucG9zaXRpb24uYm90dG9tLm1hcChhcnJheSA9PiBbYXJyYXlbMF0gKyAxLCBhcnJheVsxXV0pO1xuICAgICAgICAgICAgICAgIHRoaXMudHVybmluZ1BvaW50ID0gW3RoaXMudHVybmluZ1BvaW50WzBdICsgMSwgdGhpcy50dXJuaW5nUG9pbnRbMV1dO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBcInVwXCI6XG4gICAgICAgICAgICAgICAgdGhpcy5wb3NpdGlvbi50b3AgPSB0aGlzLnBvc2l0aW9uLnRvcC5tYXAoYXJyYXkgPT4gW2FycmF5WzBdIC0gMSwgYXJyYXlbMV1dKTtcbiAgICAgICAgICAgICAgICB0aGlzLnBvc2l0aW9uLm1pZGRsZSA9IHRoaXMucG9zaXRpb24ubWlkZGxlLm1hcChhcnJheSA9PiBbYXJyYXlbMF0gLSAxLCBhcnJheVsxXV0pO1xuICAgICAgICAgICAgICAgIHRoaXMucG9zaXRpb24uYm90dG9tID0gdGhpcy5wb3NpdGlvbi5ib3R0b20ubWFwKGFycmF5ID0+IFthcnJheVswXSAtIDEsIGFycmF5WzFdXSk7XG4gICAgICAgICAgICAgICAgdGhpcy50dXJuaW5nUG9pbnQgPSBbdGhpcy50dXJuaW5nUG9pbnRbMF0gLSAxLCB0aGlzLnR1cm5pbmdQb2ludFsxXV07XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIFwidHVybkxlZnRcIjpcbiAgICAgICAgICAgICAgICB0aGlzLnR1cm5MZWZ0KGZpZWxkLCBvbGRQb3NpdGlvbik7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5zZXRPdXRlclNxdWFyZXMoKTtcbiAgICAgICAgdGhpcy5zZXRSZW1vdmVTcXVhcmVzKG9sZFBvc2l0aW9uLCBmaWVsZCk7XG4gICAgICAgIHJldHVybiB0U3BpbjtcbiAgICB9XG5cbiAgICB0dXJuUmlnaHQoZmllbGQsIG9sZFBvc2l0aW9uKSB7XG4gICAgICAgIC8vIGNsZWFyIGZyb20gZmllbGQgZmlyc3Qgc28gdGhhdCB0aGUgcGllY2UgZG9lc24ndCBzZWUgaXRzZWxmIGFzIGEgY29uZmxpY3RpbmcgcGllY2VcbiAgICAgICAgdGhpcy5jbGVhclNlbGZGcm9tQm9hcmQoZmllbGQpO1xuICAgICAgICBsZXQgc3F1YXJlcyA9IFtdO1xuICAgICAgICBPYmplY3QudmFsdWVzKHRoaXMucG9zaXRpb24pLmZvckVhY2goY29vcmRpbmF0ZXNBcnJheSA9PiBzcXVhcmVzLnB1c2goLi4uY29vcmRpbmF0ZXNBcnJheSkpO1xuICAgICAgICB0aGlzLnBvc2l0aW9uLnRvcCA9IFtdO1xuICAgICAgICB0aGlzLnBvc2l0aW9uLm1pZGRsZSA9IFtdO1xuICAgICAgICB0aGlzLnBvc2l0aW9uLmJvdHRvbSA9IFtdO1xuICAgICAgICBzcXVhcmVzLmZvckVhY2goc3F1YXJlID0+IHtcbiAgICAgICAgICAgIGxldCBjb2x1bW4gPSBzcXVhcmVbMV07XG4gICAgICAgICAgICBsZXQgaGVpZ2h0RGlmZmVyZW5jZSA9IHRoaXMudHVybmluZ1BvaW50WzBdIC0gc3F1YXJlWzBdO1xuICAgICAgICAgICAgbGV0IHdpZHRoRGlmZmVyZW5jZSA9IHRoaXMudHVybmluZ1BvaW50WzFdIC0gc3F1YXJlWzFdO1xuICAgICAgICAgICAgbGV0IG5ld0NvbCA9IHRoaXMudHVybmluZ1BvaW50WzFdICsgaGVpZ2h0RGlmZmVyZW5jZTtcbiAgICAgICAgICAgIGxldCBuZXdSb3cgPSB0aGlzLnR1cm5pbmdQb2ludFswXSArICh3aWR0aERpZmZlcmVuY2UgKiAtMSk7XG4gICAgICAgICAgICBzd2l0Y2ggKGNvbHVtbikge1xuICAgICAgICAgICAgICAgIGNhc2UgY29sdW1uID0gdGhpcy5yaWdodE1vc3RbMV06XG4gICAgICAgICAgICAgICAgICAgIHRoaXMucG9zaXRpb24uYm90dG9tLnB1c2goW25ld1JvdywgbmV3Q29sXSk7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgY29sdW1uID0gdGhpcy5sZWZ0TW9zdFsxXTpcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wb3NpdGlvbi50b3AucHVzaChbbmV3Um93LCBuZXdDb2xdKTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wb3NpdGlvbi5taWRkbGUucHVzaChbbmV3Um93LCBuZXdDb2xdKTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLnNldFJlbW92ZVNxdWFyZXMob2xkUG9zaXRpb24pO1xuXG4gICAgICAgIC8vIGZpbmQgb3V0ZXItbW9zdCBzcXVhcmVzIHRvIHNlZSBpZiBwaWVjZSBpcyBvYnN0cnVjdGVkXG4gICAgICAgIC8vIGlmIHNvLCBwdXNoIHBpZWNlIGJhY2sgaW50byBmaWVsZFxuICAgICAgICB0aGlzLnNldE91dGVyU3F1YXJlcygpO1xuXG4gICAgICAgIC8vIHJlc2V0IHJvdGF0aW9uIHN0YXRlLCB3aGljaCBpcyB0cmFja2VkIGZvciBpbXBsZW1lbnRpbmcgc3VwZXIgcm90YXRpb24gc3lzdGVtXG4gICAgICAgIHRoaXMucm90YXRpb25TdGF0ZSA9IHRoaXMucm90YXRpb25TdGF0ZSA9PT0gMyA/IDAgOiB0aGlzLnJvdGF0aW9uU3RhdGUgKyAxO1xuXG4gICAgICAgIGxldCBuZXdTcXVhcmVzID0gWy4uLnRoaXMucG9zaXRpb24udG9wLCAuLi50aGlzLnBvc2l0aW9uLm1pZGRsZSwgLi4udGhpcy5wb3NpdGlvbi5ib3R0b21dO1xuICAgICAgICBmb3IgKGxldCBpIGluIG5ld1NxdWFyZXMpIHtcbiAgICAgICAgICAgIGxldCBbcm93LCBjb2xdID0gW25ld1NxdWFyZXNbaV1bMF0sIG5ld1NxdWFyZXNbaV1bMV1dO1xuICAgICAgICAgICAgaWYgKGZpZWxkW3Jvd10gPT09IHVuZGVmaW5lZCB8fCBmaWVsZFtyb3ddW2NvbF0gPT09IHVuZGVmaW5lZCB8fCBmaWVsZFtyb3ddW2NvbF0pIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy53YWxsS2ljayhmaWVsZCwgXCJ0dXJuUmlnaHRcIiwgb2xkUG9zaXRpb24pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgdHVybkxlZnQoZmllbGQsIG9sZFBvc2l0aW9uKSB7XG4gICAgICAgIHRoaXMuY2xlYXJTZWxmRnJvbUJvYXJkKGZpZWxkKTtcbiAgICAgICAgbGV0IHNxdWFyZXMgPSBbXTtcbiAgICAgICAgT2JqZWN0LnZhbHVlcyh0aGlzLnBvc2l0aW9uKS5mb3JFYWNoKGNvb3JkaW5hdGVzQXJyYXkgPT4gc3F1YXJlcy5wdXNoKC4uLmNvb3JkaW5hdGVzQXJyYXkpKTtcbiAgICAgICAgdGhpcy5wb3NpdGlvbi50b3AgPSBbXTtcbiAgICAgICAgdGhpcy5wb3NpdGlvbi5taWRkbGUgPSBbXTtcbiAgICAgICAgdGhpcy5wb3NpdGlvbi5ib3R0b20gPSBbXTtcbiAgICAgICAgc3F1YXJlcy5mb3JFYWNoKHNxdWFyZSA9PiB7XG4gICAgICAgICAgICBsZXQgY29sdW1uID0gc3F1YXJlWzFdO1xuICAgICAgICAgICAgbGV0IGhlaWdodERpZmZlcmVuY2UgPSB0aGlzLnR1cm5pbmdQb2ludFswXSAtIHNxdWFyZVswXTtcbiAgICAgICAgICAgIGxldCB3aWR0aERpZmZlcmVuY2UgPSB0aGlzLnR1cm5pbmdQb2ludFsxXSAtIHNxdWFyZVsxXTtcbiAgICAgICAgICAgIGxldCBuZXdDb2wgPSB0aGlzLnR1cm5pbmdQb2ludFsxXSAtIGhlaWdodERpZmZlcmVuY2U7XG4gICAgICAgICAgICBsZXQgbmV3Um93ID0gdGhpcy50dXJuaW5nUG9pbnRbMF0gLSAod2lkdGhEaWZmZXJlbmNlICogLTEpO1xuICAgICAgICAgICAgc3dpdGNoIChjb2x1bW4pIHtcbiAgICAgICAgICAgICAgICBjYXNlIGNvbHVtbiA9IHRoaXMucmlnaHRNb3N0WzFdOlxuICAgICAgICAgICAgICAgICAgICB0aGlzLnBvc2l0aW9uLnRvcC5wdXNoKFtuZXdSb3csIG5ld0NvbF0pO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlIGNvbHVtbiA9IHRoaXMubGVmdE1vc3RbMV06XG4gICAgICAgICAgICAgICAgICAgIHRoaXMucG9zaXRpb24uYm90dG9tLnB1c2goW25ld1JvdywgbmV3Q29sXSk7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgICAgIHRoaXMucG9zaXRpb24ubWlkZGxlLnB1c2goW25ld1JvdywgbmV3Q29sXSk7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KVxuICAgICAgICB0aGlzLnNldFJlbW92ZVNxdWFyZXMob2xkUG9zaXRpb24pO1xuXG4gICAgICAgIC8vIGZpbmQgbGVmdCBhbmQgcmlnaHQgbW9zdCBzcXVhcmVzIHRvIHNlZSBpZiBwaWVjZSB0aHJvdWdoIHdhbGxcbiAgICAgICAgLy8gaWYgdGhyb3VnaCB3YWxsLCBwdXNoIHBpZWNlIGJhY2sgaW50byBmaWVsZFxuICAgICAgICB0aGlzLnNldE91dGVyU3F1YXJlcygpO1xuXG4gICAgICAgIC8vIHJlc2V0IHJvdGF0aW9uIHN0YXRlLCB3aGljaCBpcyB0cmFja2VkIGZvciBpbXBsZW1lbnRpbmcgc3VwZXIgcm90YXRpb24gc3lzdGVtXG4gICAgICAgIHRoaXMucm90YXRpb25TdGF0ZSA9IHRoaXMucm90YXRpb25TdGF0ZSA9PT0gMCA/IDMgOiB0aGlzLnJvdGF0aW9uU3RhdGUgLSAxO1xuXG4gICAgICAgIGxldCBuZXdTcXVhcmVzID0gWy4uLnRoaXMucG9zaXRpb24udG9wLCAuLi50aGlzLnBvc2l0aW9uLm1pZGRsZSwgLi4udGhpcy5wb3NpdGlvbi5ib3R0b21dO1xuICAgICAgICBmb3IgKGxldCBpIGluIG5ld1NxdWFyZXMpIHtcbiAgICAgICAgICAgIGxldCBbcm93LCBjb2xdID0gW25ld1NxdWFyZXNbaV1bMF0sIG5ld1NxdWFyZXNbaV1bMV1dO1xuICAgICAgICAgICAgaWYgKGZpZWxkW3Jvd10gPT09IHVuZGVmaW5lZCB8fCBmaWVsZFtyb3ddW2NvbF0gPT09IHVuZGVmaW5lZCB8fCBmaWVsZFtyb3ddW2NvbF0pIHtcbiAgICAgICAgICAgICAgICB0aGlzLndhbGxLaWNrKGZpZWxkLCBcInR1cm5MZWZ0XCIsIG9sZFBvc2l0aW9uKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgfVxuXG4gICAgLy8gY29tcGFyZSBvbGQgcG9zaXRpb24gb2YgcGllY2Ugd2l0aCBuZXcgcG9zaXRpb24gXG4gICAgc2V0UmVtb3ZlU3F1YXJlcyhvbGRQb3NpdGlvbiwgZmllbGQpIHtcbiAgICAgICAgbGV0IG9sZFNxdWFyZXMgPSBbXTtcbiAgICAgICAgbGV0IG5ld1NxdWFyZXMgPSBbXTtcbiAgICAgICAgT2JqZWN0LnZhbHVlcyhvbGRQb3NpdGlvbikuZm9yRWFjaChjb29yZGluYXRlc0FycmF5ID0+IG9sZFNxdWFyZXMucHVzaCguLi5jb29yZGluYXRlc0FycmF5KSk7XG4gICAgICAgIE9iamVjdC52YWx1ZXModGhpcy5wb3NpdGlvbikuZm9yRWFjaChjb29yZGluYXRlc0FycmF5ID0+IG5ld1NxdWFyZXMucHVzaCguLi5jb29yZGluYXRlc0FycmF5KSk7XG4gICAgICAgIC8vIGtlZXAgdHJhY2sgb2Ygc3F1YXJlcyB0aGF0IHRoZSBwb3NpdGlvbnMgZG8gbm90IGhhdmUgaW4gY29tbW9uIChzcXVhcmVzIHRvIHJlbW92ZSBjb2xvciBmcm9tKVxuICAgICAgICB0aGlzLnJlbW92ZVNxdWFyZXMgPSBvbGRTcXVhcmVzLmZpbHRlcihvbGRTcXVhcmUgPT4ge1xuICAgICAgICAgICAgaWYgKCFmaWVsZCkge1xuICAgICAgICAgICAgICAgIGlmICghdGhpcy5faW5jbHVkZXMob2xkU3F1YXJlLCBuZXdTcXVhcmVzKSkgcmV0dXJuIG9sZFNxdWFyZTtcbiAgICAgICAgICAgIC8vIGlmIGZpZWxkIGFyZ3VtZW50IGlzIHBhc3NlZCwgY2hlY2sgdGhlIGZpZWxkIHRvIG1ha2Ugc3VyZSB0byBub3QgY2xlYXIgc3F1YXJlcyBvZiBvdGhlciBwaWVjZXNcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgaWYgKCF0aGlzLl9pbmNsdWRlcyhvbGRTcXVhcmUsIG5ld1NxdWFyZXMpICYmICFmaWVsZFtvbGRTcXVhcmVbMF1dW29sZFNxdWFyZVsxXV0pIHJldHVybiBvbGRTcXVhcmU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgaGFuZ2luZ1NxdWFyZXMocG9zaXRpb24pIHtcbiAgICAgICAgbGV0IHNxdWFyZXMgPSBbXTtcbiAgICAgICAgbGV0IGhhbmdpbmdTcXVhcmVzID0gW107XG4gICAgICAgIE9iamVjdC52YWx1ZXMocG9zaXRpb24pLmZvckVhY2goY29vcmRpbmF0ZUFycmF5ID0+IHNxdWFyZXMucHVzaCguLi5jb29yZGluYXRlQXJyYXkpKVxuICAgICAgICBzcXVhcmVzLmZvckVhY2goc3F1YXJlID0+IHtcbiAgICAgICAgICAgIGxldCBiZWxvd1NxdWFyZSA9IFtzcXVhcmVbMF0gKyAxLCBzcXVhcmVbMV1dO1xuICAgICAgICAgICAgaWYgKCF0aGlzLl9pbmNsdWRlcyhiZWxvd1NxdWFyZSwgc3F1YXJlcykpIGhhbmdpbmdTcXVhcmVzLnB1c2goc3F1YXJlKTtcbiAgICAgICAgfSlcbiAgICAgICAgcmV0dXJuIGhhbmdpbmdTcXVhcmVzO1xuICAgIH1cblxuICAgIHNpZGVTcXVhcmVzKCkge1xuICAgICAgICBsZXQgc3F1YXJlcyA9IFtdO1xuICAgICAgICBsZXQgc2lkZVNxdWFyZXMgPSB7XG4gICAgICAgICAgICBsZWZ0OiBbXSxcbiAgICAgICAgICAgIHJpZ2h0OiBbXVxuICAgICAgICB9O1xuICAgICAgICBPYmplY3QudmFsdWVzKHRoaXMucG9zaXRpb24pLmZvckVhY2goY29vcmRpbmF0ZUFycmF5ID0+IHNxdWFyZXMucHVzaCguLi5jb29yZGluYXRlQXJyYXkpKTtcbiAgICAgICAgc3F1YXJlcy5mb3JFYWNoKHNxdWFyZSA9PiB7XG4gICAgICAgICAgICBsZXQgYWRqYWNlbnRMZWZ0ID0gW3NxdWFyZVswXSwgc3F1YXJlWzFdIC0gMV07XG4gICAgICAgICAgICBsZXQgYWRqYWNlbnRSaWdodCA9IFtzcXVhcmVbMF0sIHNxdWFyZVsxXSArIDFdO1xuICAgICAgICAgICAgaWYgKCF0aGlzLl9pbmNsdWRlcyhhZGphY2VudExlZnQsIHNxdWFyZXMpKSBzaWRlU3F1YXJlcy5sZWZ0LnB1c2goc3F1YXJlKTtcbiAgICAgICAgICAgIGlmICghdGhpcy5faW5jbHVkZXMoYWRqYWNlbnRSaWdodCwgc3F1YXJlcykpIHNpZGVTcXVhcmVzLnJpZ2h0LnB1c2goc3F1YXJlKTtcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiBzaWRlU3F1YXJlcztcbiAgICB9XG5cbiAgICBpc0ZhbGxpbmcoZmllbGQpIHtcbiAgICAgICAgbGV0IHJlc3VsdCA9IHRydWU7XG4gICAgICAgIHRoaXMuaGFuZ2luZ1NxdWFyZXModGhpcy5wb3NpdGlvbikuZm9yRWFjaChjb29yZGluYXRlUGFpciA9PiB7XG4gICAgICAgICAgICBsZXQgW3JvdywgY29sXSA9IFtjb29yZGluYXRlUGFpclswXSwgY29vcmRpbmF0ZVBhaXJbMV1dO1xuICAgICAgICAgICAgLy8gaWYgdGhlIHBpZWNlJ3MgY3VycmVudCBwb3NpdGlvbiBpcyBhYm92ZSB0aGUgZmllbGQgZmxvb3Igb3IgYSBhbm90aGVyIHBpZWNlIChub3QgaW5jbHVkZSBnaG9zdCBwaWVjZSlcbiAgICAgICAgICAgIGlmICghZmllbGRbcm93ICsgMV0gfHwgKGZpZWxkW3JvdyArIDFdW2NvbF0gJiYgZmllbGRbcm93ICsgMV1bY29sXSAhPT0gXCJ4XCIpKSB7XG4gICAgICAgICAgICAgICAgcmVzdWx0ID0gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cblxuICAgIHJpZ2h0U2lkZUJsb2NrZWQoZmllbGQpIHtcbiAgICAgICAgLy8gaWYgKHRoaXMucG9zaXRpb24udG9wWzBdWzBdIDwgMCkgcmV0dXJuIGZhbHNlO1xuICAgICAgICBsZXQgcmVzdWx0ID0gZmFsc2U7XG4gICAgICAgIHRoaXMuc2lkZVNxdWFyZXMoKS5yaWdodC5mb3JFYWNoKGNvb3JkaW5hdGVQYWlyID0+IHtcbiAgICAgICAgICAgIGxldCBbcm93LCBjb2xdID0gW2Nvb3JkaW5hdGVQYWlyWzBdLCBjb29yZGluYXRlUGFpclsxXV07XG4gICAgICAgICAgICAvLyBpZiBhbnkgcmlnaHQgZmFjaW5nIHNxdWFyZSBoaXRzIHRoZSB3YWxsIG9yIGFub3RoZXIgcGllY2UsIG5vdCBpbmNsdWRpbmcgdGhlIGdob3N0IHBpZWNlXG4gICAgICAgICAgICBpZiAoY29sID09PSA5IHx8IChmaWVsZFtyb3ddICYmIGZpZWxkW3Jvd11bY29sICsgMV0gJiYgZmllbGRbcm93ICsgMV1bY29sXSAhPT0gXCJ4XCIpKSB7XG4gICAgICAgICAgICAgICAgcmVzdWx0ID0gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxuXG4gICAgbGVmdFNpZGVCbG9ja2VkKGZpZWxkKSB7XG4gICAgICAgIC8vIGlmICh0aGlzLnBvc2l0aW9uLnRvcFswXVswXSA8IDApIHJldHVybiBmYWxzZTtcbiAgICAgICAgbGV0IHJlc3VsdCA9IGZhbHNlO1xuICAgICAgICB0aGlzLnNpZGVTcXVhcmVzKCkubGVmdC5mb3JFYWNoKGNvb3JkaW5hdGVQYWlyID0+IHtcbiAgICAgICAgICAgIGxldCBbcm93LCBjb2xdID0gW2Nvb3JkaW5hdGVQYWlyWzBdLCBjb29yZGluYXRlUGFpclsxXV07XG4gICAgICAgICAgICAvLyBpZiBhbnkgbGVmdCBmYWNpbmcgc3F1YXJlIGhpdHMgdGhlIHdhbGwgb3IgYW5vdGhlciBwaWVjZSwgbm90IGluY2x1ZGluZyB0aGUgZ2hvc3QgcGllY2VcbiAgICAgICAgICAgIGlmIChjb2wgPT09IDAgfHwgKGZpZWxkW3Jvd10gJiYgZmllbGRbcm93XVtjb2wgLSAxXSAmJiBmaWVsZFtyb3ddW2NvbCAtIDFdICE9PSBcInhcIikpIHtcbiAgICAgICAgICAgICAgICByZXN1bHQgPSB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG5cbiAgICB3YWxsS2ljayhmaWVsZCwgYWN0aW9uLCBvbGRQb3NpdGlvbikge1xuICAgICAgICBsZXQgdmFsaWRTcG90LCBzdGFydGluZ09mZnNldDtcbiAgICAgICAgaWYgKGFjdGlvbiA9PT0gXCJ0dXJuUmlnaHRcIikge1xuICAgICAgICAgICAgc3RhcnRpbmdPZmZzZXQgPSB0aGlzLnJvdGF0aW9uU3RhdGUgPT09IDAgPyB0aGlzLm9mZnNldEd1aWRlWzNdIDogdGhpcy5vZmZzZXRHdWlkZVt0aGlzLnJvdGF0aW9uU3RhdGUgLSAxXTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHN0YXJ0aW5nT2Zmc2V0ID0gdGhpcy5yb3RhdGlvblN0YXRlID09PSAzID8gdGhpcy5vZmZzZXRHdWlkZVswXSA6IHRoaXMub2Zmc2V0R3VpZGVbdGhpcy5yb3RhdGlvblN0YXRlICsgMV07XG4gICAgICAgIH1cbiAgICAgICAgbGV0IG5leHRPZmZzZXQgPSB0aGlzLm9mZnNldEd1aWRlW3RoaXMucm90YXRpb25TdGF0ZV07XG4gICAgICAgIC8vIGZvciAobGV0IGkgPSAwOyBpIDwgNTsgaSsrKSB7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgNjsgaSsrKSB7XG4gICAgICAgICAgICAvLyBpZiBpID09PSA1LCB0aGVyZSBhcmUgbm8gbW9yZSBwb3RlbnRpYWwgcG9zaXRpb25zIHRvIGNoZWNrIGFuZCB0aGUgcGllY2UncyBwb3NpdGlvbiBpcyB0aGUgaW5pdGlhbCBwb3NpdGlvbiBmcm9tIGJlZm9yZSB0dXJuaW5nXG4gICAgICAgICAgICBpZiAoaSA9PT0gNSkge1xuICAgICAgICAgICAgICAgIHRoaXMucG9zaXRpb24gPSBvbGRQb3NpdGlvbjtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB2YWxpZFNwb3QgPSB0cnVlO1xuICAgICAgICAgICAgbGV0IGJhc2VQb3NpdGlvbiA9IHtcbiAgICAgICAgICAgICAgICB0b3A6IHRoaXMucG9zaXRpb24udG9wLm1hcChhcnJheSA9PiBhcnJheS5zbGljZSgpKSxcbiAgICAgICAgICAgICAgICBtaWRkbGU6IHRoaXMucG9zaXRpb24ubWlkZGxlLm1hcChhcnJheSA9PiBhcnJheS5zbGljZSgpKSxcbiAgICAgICAgICAgICAgICBib3R0b206IHRoaXMucG9zaXRpb24uYm90dG9tLm1hcChhcnJheSA9PiBhcnJheS5zbGljZSgpKSxcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGxldCBiYXNlVHVybmluZ1BvaW50ID0gdGhpcy50dXJuaW5nUG9pbnQuc2xpY2UoKTtcblxuICAgICAgICAgICAgbGV0IHN0YXJ0aW5nVHJhbnNsYXRpb24gPSBzdGFydGluZ09mZnNldFtpXTtcbiAgICAgICAgICAgIGxldCBwb3RlbnRpYWxUcmFuc2xhdGlvbiA9IG5leHRPZmZzZXRbaV07XG4gICAgICAgICAgICBsZXQgcm93U2hpZnQgPSBzdGFydGluZ1RyYW5zbGF0aW9uWzBdIC0gcG90ZW50aWFsVHJhbnNsYXRpb25bMF07XG4gICAgICAgICAgICBsZXQgY29sU2hpZnQgPSBzdGFydGluZ1RyYW5zbGF0aW9uWzFdIC0gcG90ZW50aWFsVHJhbnNsYXRpb25bMV07XG4gICAgICAgICAgICBsZXQgdHJhbnNsYXRlVmVydGljYWwgPSByb3dTaGlmdCA+IDAgPyAoKSA9PiB0aGlzLm1vdmUoXCJ1cFwiKSA6ICgpID0+IHRoaXMubW92ZShcImRvd25cIik7XG4gICAgICAgICAgICBsZXQgdHJhbnNsYXRlSG9yaXpvbnRhbCA9IGNvbFNoaWZ0ID4gMCA/ICgpID0+IHRoaXMubW92ZShcInJpZ2h0XCIpIDogKCkgPT4gdGhpcy5tb3ZlKFwibGVmdFwiKTtcbiAgICAgICAgICAgIGZvciAobGV0IG51bVRpbWVzUm93U2hpZnRlZCA9IDA7IG51bVRpbWVzUm93U2hpZnRlZCA8IE1hdGguYWJzKHJvd1NoaWZ0KTsgbnVtVGltZXNSb3dTaGlmdGVkKyspIHtcbiAgICAgICAgICAgICAgICB0cmFuc2xhdGVWZXJ0aWNhbCgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZm9yIChsZXQgbnVtVGltZXNDb2xTaGlmdGVkID0gMDsgbnVtVGltZXNDb2xTaGlmdGVkIDwgTWF0aC5hYnMoY29sU2hpZnQpOyBudW1UaW1lc0NvbFNoaWZ0ZWQrKykge1xuICAgICAgICAgICAgICAgIHRyYW5zbGF0ZUhvcml6b250YWwoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGxldCBuZXdQb3NpdGlvbiA9IFsuLi50aGlzLnBvc2l0aW9uLnRvcCwgLi4udGhpcy5wb3NpdGlvbi5taWRkbGUsIC4uLnRoaXMucG9zaXRpb24uYm90dG9tXTtcbiAgICAgICAgICAgIGZvciAobGV0IGkgaW4gbmV3UG9zaXRpb24pIHtcbiAgICAgICAgICAgICAgICBsZXQgW3JvdywgY29sXSA9IFtuZXdQb3NpdGlvbltpXVswXSwgbmV3UG9zaXRpb25baV1bMV1dO1xuICAgICAgICAgICAgICAgIGlmIChmaWVsZFtyb3ddID09PSB1bmRlZmluZWQgfHwgZmllbGRbcm93XVtjb2xdID09PSB1bmRlZmluZWQgfHwgZmllbGRbcm93XVtjb2xdID4gMCkge1xuICAgICAgICAgICAgICAgICAgICB2YWxpZFNwb3QgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wb3NpdGlvbiA9IGJhc2VQb3NpdGlvbjtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy50dXJuaW5nUG9pbnQgPSBiYXNlVHVybmluZ1BvaW50O1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBhbGxvd3MgdFNwaW4gdmFyaWFibGUgdG8gYmUgdHJ1dGh5XG4gICAgICAgICAgICBpZiAodmFsaWRTcG90KSB7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMubmFtZSA9PT0gXCJUUGllY2VcIikge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufSIsImltcG9ydCBQaWVjZSBmcm9tICcuL3BpZWNlJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU1BpZWNlIGV4dGVuZHMgUGllY2Uge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICB0aGlzLm5hbWUgPSBcIlNQaWVjZVwiO1xuICAgICAgICB0aGlzLnBvc2l0aW9uID0ge1xuICAgICAgICAgICAgdG9wOiBbWzAsIDRdLCBbMCwgNV1dLFxuICAgICAgICAgICAgbWlkZGxlOiBbXSxcbiAgICAgICAgICAgIGJvdHRvbTogW1sxLCAzXSwgWzEsIDRdXVxuICAgICAgICB9O1xuICAgICAgICB0aGlzLmNvbG9yQ29kZSA9IDQ7XG5cbiAgICAgICAgdGhpcy50dXJuaW5nUG9pbnQgPSBbMSwgNF07XG5cbiAgICAgICAgdGhpcy5kaXNwbGF5U3F1YXJlcyA9IFtbMywgMV0sIFsyLCAxXSwgWzIsIDJdLCBbMSwgMl1dO1xuXG4gICAgICAgIHRoaXMucmVtb3ZlU3F1YXJlcyA9IFtdO1xuICAgIH1cbn0iLCJpbXBvcnQgUGllY2UgZnJvbSAnLi9waWVjZSc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRQaWVjZSBleHRlbmRzIFBpZWNlIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgdGhpcy5uYW1lID0gXCJUUGllY2VcIjtcbiAgICAgICAgdGhpcy5wb3NpdGlvbiA9IHtcbiAgICAgICAgICAgIHRvcDogW1swLCA0XV0sXG4gICAgICAgICAgICBtaWRkbGU6IFtdLFxuICAgICAgICAgICAgYm90dG9tOiBbWzEsIDNdLCBbMSwgNF0sIFsxLCA1XV0sXG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5jb2xvckNvZGUgPSAzO1xuXG4gICAgICAgIHRoaXMudHVybmluZ1BvaW50ID0gWzEsIDRdO1xuXG4gICAgICAgIHRoaXMuZGlzcGxheVNxdWFyZXMgPSBbWzEsIDJdLCBbMiwgMl0sIFszLCAyXSwgWzIsIDFdXTtcblxuICAgICAgICB0aGlzLnJlbW92ZVNxdWFyZXMgPSBbXTtcbiAgICB9XG59IiwiaW1wb3J0IFBpZWNlIGZyb20gJy4vcGllY2UnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBaUGllY2UgZXh0ZW5kcyBQaWVjZSB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIHRoaXMubmFtZSA9IFwiWlBpZWNlXCI7XG4gICAgICAgIHRoaXMucG9zaXRpb24gPSB7XG4gICAgICAgICAgICB0b3A6IFtbMCwgM10sIFswLCA0XV0sXG4gICAgICAgICAgICBtaWRkbGU6IFtdLFxuICAgICAgICAgICAgYm90dG9tOiBbWzEsIDRdLCBbMSwgNV1dXG4gICAgICAgIH07XG4gICAgICAgIHRoaXMuY29sb3JDb2RlID0gNTtcblxuICAgICAgICB0aGlzLnR1cm5pbmdQb2ludCA9IFsxLCA0XTtcblxuICAgICAgICB0aGlzLmRpc3BsYXlTcXVhcmVzID0gW1sxLCAxXSwgWzIsIDFdLCBbMiwgMl0sIFszLCAyXV07XG5cbiAgICAgICAgdGhpcy5yZW1vdmVTcXVhcmVzID0gW107XG4gICAgfVxufSIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIFNjb3JlS2VlcGVyIHtcbiAgICBjcmVhdGVTY29yZUtlZXBlcigpIHtcbiAgICAgICAgbGV0IHNjb3JlS2VlcGVyRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIHNjb3JlS2VlcGVyRGl2LmNsYXNzTGlzdC5hZGQoJ3Njb3Jla2VlcGVyJyk7XG4gICAgICAgIHNjb3JlS2VlcGVyRGl2LmlubmVySFRNTCA9ICcwJztcbiAgICAgICAgcmV0dXJuIHNjb3JlS2VlcGVyRGl2O1xuICAgIH1cblxuICAgIGFkZFRvU2NvcmUobGluZXNDbGVhcmVkKSB7XG4gICAgICAgIGxldCBzY29yZUtlZXBlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zY29yZWtlZXBlcicpO1xuICAgICAgICBsZXQgc2NvcmUgPSBOdW1iZXIoc2NvcmVLZWVwZXIuaW5uZXJIVE1MKTtcbiAgICAgICAgaWYgKGxpbmVzQ2xlYXJlZCA9PT0gMSkge1xuICAgICAgICAgICAgc2NvcmUgKz0gMTAwOyBcbiAgICAgICAgfSBlbHNlIGlmIChsaW5lc0NsZWFyZWQgPT09IDIpIHtcbiAgICAgICAgICAgIHNjb3JlICs9IDIyNTtcbiAgICAgICAgfSBlbHNlIGlmIChsaW5lc0NsZWFyZWQgPT09IDMpIHtcbiAgICAgICAgICAgIHNjb3JlICs9IDM1MDtcbiAgICAgICAgfSBlbHNlIGlmIChsaW5lc0NsZWFyZWQgPT09IDQpIHtcbiAgICAgICAgICAgIHNjb3JlICs9IDUwMDtcbiAgICAgICAgfVxuICAgICAgICBzY29yZUtlZXBlci5pbm5lckhUTUwgPSBzY29yZTtcbiAgICB9XG5cbiAgICByZXNldFNjb3JlKCkge1xuICAgICAgICBsZXQgc2NvcmVLZWVwZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2NvcmVrZWVwZXInKTtcbiAgICAgICAgc2NvcmVLZWVwZXIuaW5uZXJIVE1MID0gMDtcbiAgICB9XG5cbiAgICBnZXRTY29yZSgpIHtcbiAgICAgICAgbGV0IHNjb3JlS2VlcGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNjb3Jla2VlcGVyJyk7XG4gICAgICAgIHJldHVybiBzY29yZUtlZXBlci5pbm5lckhUTUw7XG4gICAgfVxufSJdLCJzb3VyY2VSb290IjoiIn0=