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
          debugger;
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
      cancelAnimationFrame(this.opponent.handleClear.drop);
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
      this.gameIsOver = true;
      if (!this.opponent) this.stopTimer();
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
    } // single player

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2ZpZWxkL2ZpZWxkLmpzIiwid2VicGFjazovLy8uL3NyYy9maWVsZC9ob2xkYm94LmpzIiwid2VicGFjazovLy8uL3NyYy9maWVsZC9uZXh0Qm94LmpzIiwid2VicGFjazovLy8uL3NyYy9maWVsZC9xdWV1ZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvZ2FtZS9nYW1lLmpzIiwid2VicGFjazovLy8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvbWVudS9tZW51LmpzIiwid2VicGFjazovLy8uL3NyYy9tb2RhbC9tb2RhbC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvbW9kYWwvbXVsdGlwbGF5ZXJDb250ZW50LmpzIiwid2VicGFjazovLy8uL3NyYy9tb2RhbC9zaW5nbGVQbGF5ZXJDb250ZW50LmpzIiwid2VicGFjazovLy8uL3NyYy9tdWx0aXBsYXllci9tdWx0aXBsYXllci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcGllY2VzL2lQaWVjZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcGllY2VzL2pQaWVjZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcGllY2VzL2xQaWVjZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcGllY2VzL29QaWVjZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcGllY2VzL3BpZWNlLmpzIiwid2VicGFjazovLy8uL3NyYy9waWVjZXMvc1BpZWNlLmpzIiwid2VicGFjazovLy8uL3NyYy9waWVjZXMvdFBpZWNlLmpzIiwid2VicGFjazovLy8uL3NyYy9waWVjZXMvelBpZWNlLmpzIl0sIm5hbWVzIjpbIkZpZWxkIiwiZmllbGROdW0iLCJmaWVsZCIsImkiLCJyb3ciLCJwdXNoIiwiY29sdW1uIiwiZG9jdW1lbnQiLCJjcmVhdGVFbGVtZW50IiwiY2xhc3NMaXN0IiwiYWRkIiwiYXBwZW5kIiwiYXBwZW5kQ2hpbGQiLCJfY3JlYXRlQ29sdW1uIiwiY29udGFpbmVyIiwicXVldWUiLCJRdWV1ZSIsIm5leHRCb3giLCJOZXh0Qm94IiwiaG9sZEJveCIsIkhvbGRCb3giLCJfY3JlYXRlRmllbGQiLCJjcmVhdGVRdWV1ZSIsImNyZWF0ZU5leHRCb3hlcyIsInByZXBlbmQiLCJjcmVhdGVCb3giLCJib3hXcmFwcGVyIiwiYm94IiwiaGVhZGluZyIsImlubmVySFRNTCIsIl9jcmVhdGVCb3hDb2x1bW4iLCJfY3JlYXRlTmV4dEJveENvbHVtbiIsImJveGVzIiwiX2NyZWF0ZU5leHRCb3giLCJxdWV1ZU1ldGVyIiwiYWRqdXN0UXVldWVIZWlnaHQiLCJwZXJjZW50YWdlIiwicXVlcnlTZWxlY3RvciIsInN0eWxlIiwiaGVpZ2h0IiwiR2FtZSIsIm9wdGlvbnMiLCJzZXRGaWVsZCIsImNvbG9ycyIsImdhbWVOdW0iLCJjdXJyZW50QmFnIiwic2h1ZmZsZUJhZyIsImdlbmVyYXRlQmFnIiwiY3VycmVudFBpZWNlIiwiaG9sZFBpZWNlIiwiZ2hvc3RQb3NpdGlvbiIsIm5leHRCYWciLCJjYW5Ib2xkIiwiaGFuZGxlQ2xlYXIiLCJkcm9wIiwicmlnaHQiLCJsZWZ0IiwiZG93biIsImRyb3BTcGVlZCIsIm1vdmVTcGVlZCIsImRyb3BQaWVjZSIsImJpbmQiLCJtb3ZlIiwibW92ZVBpZWNlIiwiYW5pbWF0ZSIsImZwc0ludGVydmFsIiwic3RhcnRUaW1lIiwibm93IiwidGhlbiIsImlzUGF1c2VkIiwia2V5SGVsZCIsIm9wcG9uZW50IiwiY29udHJvbHMiLCJ1cGNvbWluZ0xpbmVzIiwiY29tYm8iLCJ0U3BpbiIsInRTcGluU3RyZWFrIiwiY29tYm9HdWlkZSIsInN0YXJ0RWxldmF0aW5nIiwiY2xlYXJFbGV2YXRlSW50ZXJ2YWwiLCJlbGV2YXRlRGVsYXkiLCJjbGVhclRpbWVyIiwib1BpZWNlIiwiT1BpZWNlIiwiaVBpZWNlIiwiSVBpZWNlIiwidFBpZWNlIiwiVFBpZWNlIiwic1BpZWNlIiwiU1BpZWNlIiwielBpZWNlIiwiWlBpZWNlIiwibFBpZWNlIiwiTFBpZWNlIiwialBpZWNlIiwiSlBpZWNlIiwiX2dlbmVyYXRlRmllbGQiLCJzaGlmdCIsImNvb3JkaW5hdGVBcnJheXMiLCJPYmplY3QiLCJ2YWx1ZXMiLCJmb3JFYWNoIiwiYXJyYXkiLCJjb29yZGluYXRlIiwiY29sIiwiZmllbGRDb2x1bW5zIiwicXVlcnlTZWxlY3RvckFsbCIsImZpZWxkU3F1YXJlIiwiY2hpbGRyZW4iLCJjb2xvckNvZGUiLCJ0b3AiLCJwb3NpdGlvbiIsIm1hcCIsInNsaWNlIiwibWlkZGxlIiwiYm90dG9tIiwic3RvcHBlZCIsImhhbmdpbmdTcXVhcmVzIiwiX3BvcHVsYXRlR2hvc3RQb3NpdGlvbiIsInJlbmRlciIsImNsZWFyU2VsZkZyb21Cb2FyZCIsIl9nZW5lcmF0ZVBpZWNlIiwibmFtZSIsInNldEN1cnJlbnRQaWVjZSIsInNob3dDdXJyZW50QmFnIiwiX3BvcHVsYXRlSG9sZEJveCIsImNvbHVtbnMiLCJqIiwiY2xhc3NOYW1lIiwiZGlzcGxheVNxdWFyZXMiLCJzcXVhcmUiLCJwaWVjZU5hbWUiLCJnZXRFbGVtZW50c0J5Q2xhc3NOYW1lIiwiX3BvcHVsYXRlTmV4dEJveCIsInBpZWNlIiwiYmFnIiwiY3VycmVudEluZGV4IiwibGVuZ3RoIiwidGVtcG9yYXJ5VmFsdWUiLCJyYW5kb21JbmRleCIsIk1hdGgiLCJmbG9vciIsInJhbmRvbSIsInJvd0lkeCIsImNvbElkeCIsInNxdWFyZVZhbHVlIiwicmVtb3ZlIiwiYm9keSIsImFkZEV2ZW50TGlzdGVuZXIiLCJldmVudCIsImdhbWVJc092ZXIiLCJzZXRPdXRlclNxdWFyZXMiLCJ3aGljaCIsInR1cm5SaWdodCIsImNsZWFyR2hvc3RQb3NpdGlvbiIsInBvcHVsYXRlRmllbGQiLCJzZXRHaG9zdFBvc2l0aW9uIiwidHVybkxlZnQiLCJsZWZ0U2lkZUJsb2NrZWQiLCJyaWdodFNpZGVCbG9ja2VkIiwic29mdERyb3AiLCJob2xkIiwiaGFyZERyb3AiLCJoYW5kbGVQaWVjZVN0b3AiLCJjYW5jZWxBbmltYXRpb25GcmFtZSIsImxvd2VzdCIsImhpZ2hlc3QiLCJudW1MaW5lc0NsZWFyZWQiLCJpbmNsdWRlcyIsIl9icmluZ0Rvd25GaWVsZCIsImNsZWFyTGluZXMiLCJzdGFydGluZ1JvdyIsImxlZnRNb3N0IiwicmlnaHRNb3N0IiwibGVmdE1vc3RSb3ciLCJyaWdodE1vc3RSb3ciLCJsZWZ0TW9zdENvbCIsInJpZ2h0TW9zdENvbCIsIm51bUxpbmVzIiwiYWRkTGluZXNUb1F1ZXVlIiwiYWJzIiwicmVjZWl2ZVVwY29taW5nTGluZXMiLCJjbGVhckdob3N0Q2xhc3MiLCJwbGF5IiwiZnBzIiwiRGF0ZSIsInJlcXVlc3RBbmltYXRpb25GcmFtZSIsImVsYXBzZWQiLCJpc0ZhbGxpbmciLCJib3R0b21Nb3N0IiwiZGlyZWN0aW9uIiwiYXRUb3AiLCJnYW1lT3ZlciIsImhhbmRsZVRvcFBpZWNlIiwiYWRkVG9DdXJyZW50QmFnIiwicmVmaWxsTmV4dEJhZyIsIndpbm5lciIsImdhbWVPdmVyU2NyZWVuIiwiZ2FtZU92ZXJIZWFkaW5nIiwid2lubmVySGVhZGluZyIsInN0b3BUaW1lciIsInBsYXllciIsImdhcmJhZ2VMaW5lcyIsInJhbmRvbUhvbGUiLCJnYXJiYWdlUm93IiwiY29uY2F0Iiwic2V0SW50ZXJ2YWwiLCJjbGVhckludGVydmFsIiwibWludXRlcyIsInNlY29uZHMiLCJvbGRTZWNvbmQiLCJOdW1iZXIiLCJvbGRNaW51dGUiLCJuZXdTZWNvbmRzIiwibWVudSIsIk1lbnUiLCJyZW5kZXJNZW51IiwiZ2V0RWxlbWVudEJ5SWQiLCJvcHRpb25zUGxheWVyMSIsIm9wdGlvbnNQbGF5ZXIyIiwiZ2FtZTEiLCJnYW1lMiIsImZpZWxkMSIsImZpZWxkMiIsIm11bHRpcGxheWVyTW9kZSIsIk11bHRpcGxheWVyIiwiZmllbGRDb250YWluZXIxIiwiZmllbGRDb250YWluZXIyIiwic2luZ2xlUGxheWVyQ29udGVudCIsIlNpbmdsZVBsYXllckNvbnRlbnQiLCJtdWx0aXBsYXllckNvbnRlbnQiLCJNdWx0aXBsYXllckNvbnRlbnQiLCJtb2RhbCIsIk1vZGFsIiwic2luZ2xlUGxheWVyQnV0dG9uIiwibXVsdGlwbGF5ZXJCdXR0b24iLCJhZGRFdmVudExpc3RlbmVycyIsInJlbmRlclNpbmdsZVBsYXllciIsInJlbmRlck11bHRpcGxheWVyIiwicmVtb3ZlQ2hpbGQiLCJqdXN0aWZ5Q29udGVudCIsImNyZWF0ZVRpbWVyQW5kQ29udHJvbHMiLCJjcmVhdGVDb21wbGV0ZUZpZWxkIiwia2V5TGlzdGVuZXIiLCJjaGFuZ2VDb250cm9scyIsImFkanVzdEVsZXZhdGUiLCJjcmVhdGVUaW1lciIsInN0YXJ0VGltZXIiLCJjb250cm9sc0NvbnRhaW5lciIsImNyZWF0ZUNvbnRyb2xzQ29udGVudCIsImNyZWF0ZSIsIl9jcmVhdGVDbG9zZU1vZGFsTGluayIsImJ1dHRvbkNvbnRhaW5lciIsInJlbmRlckJ1dHRvbnMiLCJidXR0b24iLCJjbG9zZUxpbmsiLCJzdGFydE11bHRpcGxheWVyIiwiY29udGVudCIsInByb3BzIiwia2V5cyIsInBsYXllcjEiLCJwbGF5ZXIyIiwiY29udHJvbHNEaXYiLCJpbWFnZXMiLCJkZXNjcmlwdGlvbnMiLCJzcGFucyIsImRpdnMiLCJsYWJlbCIsInAiLCJpbWciLCJzZXRBdHRyaWJ1dGUiLCJ0aW1lckFuZENvbnRyb2xzIiwiY29udGVudERpdiIsInRpbWVyIiwiY29sb24iLCJlbGUiLCJzZXRPcHBvbmVudCIsInR1cm5pbmdQb2ludCIsInJlbW92ZVNxdWFyZXMiLCJvZmZzZXRHdWlkZSIsIlBpZWNlIiwidG9wTW9zdCIsInJvdGF0aW9uU3RhdGUiLCJjb29yZGluYXRlc0FycmF5IiwiY29sdW1uVmFsdWUiLCJyb3dWYWx1ZSIsInBvc2l0aW9uQXJyYXkiLCJvbGRTcXVhcmUiLCJuZXdTcXVhcmUiLCJyZXN1bHQiLCJfc3F1YXJlc0FyZUVxdWFsIiwib2xkUG9zaXRpb24iLCJzZXRSZW1vdmVTcXVhcmVzIiwib2xkVHVybmluZ1BvaW50Iiwic3F1YXJlcyIsImhlaWdodERpZmZlcmVuY2UiLCJ3aWR0aERpZmZlcmVuY2UiLCJuZXdDb2wiLCJuZXdSb3ciLCJuZXdTcXVhcmVzIiwidW5kZWZpbmVkIiwid2FsbEtpY2siLCJvbGRTcXVhcmVzIiwiZmlsdGVyIiwiX2luY2x1ZGVzIiwiY29vcmRpbmF0ZUFycmF5IiwiYmVsb3dTcXVhcmUiLCJzaWRlU3F1YXJlcyIsImFkamFjZW50TGVmdCIsImFkamFjZW50UmlnaHQiLCJjb29yZGluYXRlUGFpciIsImFjdGlvbiIsInZhbGlkU3BvdCIsInN0YXJ0aW5nT2Zmc2V0IiwibmV4dE9mZnNldCIsImJhc2VQb3NpdGlvbiIsImJhc2VUdXJuaW5nUG9pbnQiLCJzdGFydGluZ1RyYW5zbGF0aW9uIiwicG90ZW50aWFsVHJhbnNsYXRpb24iLCJyb3dTaGlmdCIsImNvbFNoaWZ0IiwidHJhbnNsYXRlVmVydGljYWwiLCJ0cmFuc2xhdGVIb3Jpem9udGFsIiwibnVtVGltZXNSb3dTaGlmdGVkIiwibnVtVGltZXNDb2xTaGlmdGVkIiwibmV3UG9zaXRpb24iXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNE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QUNBLFVBQUsrQixJQUFMLEdBQVksUUFBWjtBQUNBLFVBQUtYLFFBQUwsR0FBZ0I7QUFDWkQsU0FBRyxFQUFFLENBQUMsQ0FBQyxDQUFELEVBQUksQ0FBSixDQUFELEVBQVMsQ0FBQyxDQUFELEVBQUksQ0FBSixDQUFULENBRE87QUFFWkksWUFBTSxFQUFFLEVBRkk7QUFHWkMsWUFBTSxFQUFFLENBQUMsQ0FBQyxDQUFELEVBQUksQ0FBSixDQUFELEVBQVMsQ0FBQyxDQUFELEVBQUksQ0FBSixDQUFUO0FBSEksS0FBaEI7QUFLQSxVQUFLTixTQUFMLEdBQWlCLENBQWpCO0FBRUEsVUFBS3dLLFlBQUwsR0FBb0IsQ0FBQyxDQUFELEVBQUksQ0FBSixDQUFwQjtBQUVBLFVBQUtwSixjQUFMLEdBQXNCLENBQUMsQ0FBQyxDQUFELEVBQUksQ0FBSixDQUFELEVBQVMsQ0FBQyxDQUFELEVBQUksQ0FBSixDQUFULEVBQWlCLENBQUMsQ0FBRCxFQUFJLENBQUosQ0FBakIsRUFBeUIsQ0FBQyxDQUFELEVBQUksQ0FBSixDQUF6QixDQUF0QjtBQUVBLFVBQUtxSixhQUFMLEdBQXFCLEVBQXJCO0FBZFU7QUFlYjs7O0VBaEIrQkUsOEMiLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiL2Rpc3QvXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2luZGV4LmpzXCIpO1xuIiwiaW1wb3J0IEhvbGRCb3ggZnJvbSAnLi9ob2xkYm94JztcbmltcG9ydCBOZXh0Qm94IGZyb20gJy4vbmV4dEJveCc7XG5pbXBvcnQgUXVldWUgZnJvbSAnLi9xdWV1ZSc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEZpZWxkIHsgIFxuICAgIGNvbnN0cnVjdG9yKGZpZWxkTnVtKSB7XG4gICAgICAgIHRoaXMuZmllbGROdW0gPSBmaWVsZE51bTtcbiAgICB9XG4gICAgXG4gICAgX2dlbmVyYXRlRmllbGQoKSB7XG4gICAgICAgIGxldCBmaWVsZCA9IFtdO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IDIwOyBpKyspIHtcbiAgICAgICAgICAgIGxldCByb3cgPSBbMCwwLDAsMCwwLDAsMCwwLDAsMF07XG4gICAgICAgICAgICBmaWVsZC5wdXNoKHJvdyk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGZpZWxkO1xuICAgIH1cblxuICAgIF9jcmVhdGVDb2x1bW4oKSB7XG4gICAgICAgIGxldCBjb2x1bW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidWxcIik7XG4gICAgICAgIGNvbHVtbi5jbGFzc0xpc3QuYWRkKGBmaWVsZC1jb2x1bW5gLCBgZmllbGQtJHt0aGlzLmZpZWxkTnVtfWApO1xuXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMjA7IGkrKykge1xuICAgICAgICAgICAgY29sdW1uLmFwcGVuZChkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIikpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBjb2x1bW47XG4gICAgfVxuXG4gICAgX2NyZWF0ZUZpZWxkKCkge1xuICAgICAgICBsZXQgZmllbGQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICBmaWVsZC5jbGFzc0xpc3QuYWRkKGBmaWVsZC1ib3hgLCBgZmllbGQtJHt0aGlzLmZpZWxkTnVtfWApO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IDEwOyBpKyspIHtcbiAgICAgICAgICAgIGZpZWxkLmFwcGVuZENoaWxkKHRoaXMuX2NyZWF0ZUNvbHVtbigpKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZmllbGQ7XG4gICAgfVxuXG4gICAgY3JlYXRlQ29tcGxldGVGaWVsZChjb250YWluZXIpIHtcbiAgICAgICAgbGV0IHF1ZXVlID0gbmV3IFF1ZXVlKHRoaXMuZmllbGROdW0pO1xuICAgICAgICBsZXQgbmV4dEJveCA9IG5ldyBOZXh0Qm94KHRoaXMuZmllbGROdW0pO1xuICAgICAgICBsZXQgaG9sZEJveCA9IG5ldyBIb2xkQm94KHRoaXMuZmllbGROdW0pO1xuICAgICAgICBjb250YWluZXIuYXBwZW5kKHRoaXMuX2NyZWF0ZUZpZWxkKCkpO1xuICAgICAgICBjb250YWluZXIuYXBwZW5kKHF1ZXVlLmNyZWF0ZVF1ZXVlKCkpO1xuICAgICAgICBjb250YWluZXIuYXBwZW5kKG5leHRCb3guY3JlYXRlTmV4dEJveGVzKCkpO1xuICAgICAgICBjb250YWluZXIucHJlcGVuZChob2xkQm94LmNyZWF0ZUJveCgpKTtcbiAgICAgICAgcmV0dXJuIGNvbnRhaW5lcjtcbiAgICB9XG5cbn0iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBIb2xkQm94IHtcbiAgICBjb25zdHJ1Y3RvcihmaWVsZE51bSkge1xuICAgICAgICB0aGlzLmZpZWxkTnVtID0gZmllbGROdW07XG4gICAgfVxuXG4gICAgX2NyZWF0ZUJveENvbHVtbigpIHtcbiAgICAgICAgbGV0IGNvbHVtbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ1bFwiKTtcbiAgICAgICAgY29sdW1uLmNsYXNzTGlzdC5hZGQoYGhvbGQtY29sdW1uYCwgYGZpZWxkLSR7dGhpcy5maWVsZE51bX1gKTtcblxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IDQ7IGkrKykge1xuICAgICAgICAgICAgY29sdW1uLmFwcGVuZChkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIikpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBjb2x1bW47XG4gICAgfVxuXG4gICAgY3JlYXRlQm94KCkge1xuICAgICAgICBsZXQgYm94V3JhcHBlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIGJveFdyYXBwZXIuY2xhc3NMaXN0LmFkZChgaG9sZC1ib3gtd3JhcHBlcmAsIGBmaWVsZC0ke3RoaXMuZmllbGROdW19YCk7XG4gICAgICAgIGxldCBib3ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICBib3guY2xhc3NMaXN0LmFkZChgaG9sZC1ib3hgLCBgZmllbGQtJHt0aGlzLmZpZWxkTnVtfWApO1xuICAgICAgICBsZXQgaGVhZGluZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMlwiKTtcbiAgICAgICAgaGVhZGluZy5pbm5lckhUTUwgPSBcIkhPTERcIjtcbiAgICAgICAgYm94V3JhcHBlci5hcHBlbmRDaGlsZChoZWFkaW5nKTtcbiAgICAgICAgYm94V3JhcHBlci5hcHBlbmRDaGlsZChib3gpO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IDU7IGkrKykge1xuICAgICAgICAgICAgYm94LmFwcGVuZENoaWxkKHRoaXMuX2NyZWF0ZUJveENvbHVtbigpKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gYm94V3JhcHBlcjtcbiAgICB9XG59IiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgTmV4dEJveCB7XG4gICAgY29uc3RydWN0b3IoZmllbGROdW0pIHtcbiAgICAgICAgdGhpcy5maWVsZE51bSA9IGZpZWxkTnVtO1xuICAgIH1cblxuICAgIF9jcmVhdGVOZXh0Qm94Q29sdW1uKCkge1xuICAgICAgICBsZXQgY29sdW1uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInVsXCIpO1xuICAgICAgICBjb2x1bW4uY2xhc3NMaXN0LmFkZChgbmV4dC1jb2x1bW5gLCBgZmllbGQtJHt0aGlzLmZpZWxkTnVtfWApO1xuXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgNDsgaSsrKSB7XG4gICAgICAgICAgICBjb2x1bW4uYXBwZW5kKGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaVwiKSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGNvbHVtbjtcbiAgICB9XG5cbiAgICBfY3JlYXRlTmV4dEJveCgpIHtcbiAgICAgICAgbGV0IGJveCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIGJveC5jbGFzc0xpc3QuYWRkKGBuZXh0LWJveGAsIGBmaWVsZC0ke3RoaXMuZmllbGROdW19YCk7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgNTsgaSsrKSB7XG4gICAgICAgICAgICBib3guYXBwZW5kQ2hpbGQodGhpcy5fY3JlYXRlTmV4dEJveENvbHVtbigpKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gYm94O1xuICAgIH1cblxuICAgIGNyZWF0ZU5leHRCb3hlcygpIHtcbiAgICAgICAgbGV0IGJveGVzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgbGV0IGhlYWRpbmcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDJcIik7XG4gICAgICAgIGhlYWRpbmcuaW5uZXJIVE1MID0gXCJORVhUXCI7XG4gICAgICAgIGJveGVzLmNsYXNzTGlzdC5hZGQoYG5leHQtYm94ZXNgLCBgZmllbGQtJHt0aGlzLmZpZWxkTnVtfWApO1xuICAgICAgICBib3hlcy5hcHBlbmRDaGlsZChoZWFkaW5nKTtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCA1OyBpKyspIHtcbiAgICAgICAgICAgIGJveGVzLmFwcGVuZENoaWxkKHRoaXMuX2NyZWF0ZU5leHRCb3goKSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGJveGVzO1xuICAgIH1cbn0iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBRdWV1ZSB7XG4gICAgY29uc3RydWN0b3IoZmllbGROdW0pIHtcbiAgICAgICAgdGhpcy5maWVsZE51bSA9IGZpZWxkTnVtO1xuICAgIH1cblxuICAgIGNyZWF0ZVF1ZXVlKCkge1xuICAgICAgICBsZXQgcXVldWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICBxdWV1ZS5jbGFzc0xpc3QuYWRkKGBxdWV1ZWAsIGBmaWVsZC0ke3RoaXMuZmllbGROdW19YCk7XG4gICAgICAgIGxldCBxdWV1ZU1ldGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgcXVldWVNZXRlci5jbGFzc0xpc3QuYWRkKGBxdWV1ZS1tZXRlcmAsIGBmaWVsZC0ke3RoaXMuZmllbGROdW19YCk7XG4gICAgICAgIHF1ZXVlLmFwcGVuZENoaWxkKHF1ZXVlTWV0ZXIpO1xuICAgICAgICByZXR1cm4gcXVldWU7XG4gICAgfVxufVxuXG5leHBvcnQgY29uc3QgYWRqdXN0UXVldWVIZWlnaHQgPSAoZmllbGROdW0sIHBlcmNlbnRhZ2UpID0+IHtcbiAgICBsZXQgcXVldWVNZXRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC5xdWV1ZS1tZXRlci5maWVsZC0ke2ZpZWxkTnVtfWApO1xuICAgIGlmIChwZXJjZW50YWdlID4gMTAwKSBwZXJjZW50YWdlID0gMTAwO1xuICAgIHF1ZXVlTWV0ZXIuc3R5bGUuaGVpZ2h0ID0gYCR7cGVyY2VudGFnZX0lYFxufSIsImltcG9ydCBGaWVsZCBmcm9tICcuLi9maWVsZC9maWVsZCc7XG5pbXBvcnQgT1BpZWNlIGZyb20gJy4uL3BpZWNlcy9vUGllY2UnO1xuaW1wb3J0IElQaWVjZSBmcm9tICcuLi9waWVjZXMvaVBpZWNlJztcbmltcG9ydCBUUGllY2UgZnJvbSAnLi4vcGllY2VzL3RQaWVjZSc7XG5pbXBvcnQgU1BpZWNlIGZyb20gJy4uL3BpZWNlcy9zUGllY2UnO1xuaW1wb3J0IFpQaWVjZSBmcm9tICcuLi9waWVjZXMvelBpZWNlJztcbmltcG9ydCBMUGllY2UgZnJvbSAnLi4vcGllY2VzL2xQaWVjZSc7XG5pbXBvcnQgSlBpZWNlIGZyb20gJy4uL3BpZWNlcy9qUGllY2UnO1xuaW1wb3J0IHsgYWRqdXN0UXVldWVIZWlnaHQgfSBmcm9tICcuLi9maWVsZC9xdWV1ZSc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEdhbWUge1xuICAgIGNvbnN0cnVjdG9yKG9wdGlvbnMpIHtcbiAgICAgICAgdGhpcy5maWVsZCA9IHRoaXMuc2V0RmllbGQoKVxuXG4gICAgICAgIHRoaXMuY29sb3JzID0ge1xuICAgICAgICAgICAgMTogXCJ5ZWxsb3dcIixcbiAgICAgICAgICAgIDI6IFwiYmx1ZVwiLFxuICAgICAgICAgICAgMzogXCJwdXJwbGVcIixcbiAgICAgICAgICAgIDQ6IFwiZ3JlZW5cIixcbiAgICAgICAgICAgIDU6IFwicmVkXCIsXG4gICAgICAgICAgICA2OiBcIm9yYW5nZVwiLFxuICAgICAgICAgICAgNzogXCJkYXJrLWJsdWVcIixcbiAgICAgICAgICAgIDg6IFwiZ3JleVwiXG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmdhbWVOdW0gPSBvcHRpb25zLmdhbWVOdW07XG5cbiAgICAgICAgdGhpcy5jdXJyZW50QmFnID0gdGhpcy5zaHVmZmxlQmFnKHRoaXMuZ2VuZXJhdGVCYWcoKSk7XG4gICAgICAgIHRoaXMuY3VycmVudFBpZWNlID0gJyc7XG4gICAgICAgIHRoaXMuaG9sZFBpZWNlID0gJyc7XG4gICAgICAgIHRoaXMuZ2hvc3RQb3NpdGlvbiA9ICcnO1xuICAgICAgICB0aGlzLm5leHRCYWcgPSB0aGlzLnNodWZmbGVCYWcodGhpcy5nZW5lcmF0ZUJhZygpKTtcblxuICAgICAgICAvLyBwcmV2ZW50cyBwbGF5ZXIgZnJvbSBob2xkaW5nIHBpZWNlIG11bHRpcGxlIHRpbWVzXG4gICAgICAgIHRoaXMuY2FuSG9sZCA9IHRydWU7XG5cbiAgICAgICAgdGhpcy5oYW5kbGVDbGVhciA9IHtcbiAgICAgICAgICAgIGRyb3A6ICcnLFxuICAgICAgICAgICAgcmlnaHQ6ICcnLFxuICAgICAgICAgICAgbGVmdDogJycsXG4gICAgICAgICAgICBkb3duOiAnJ1xuICAgICAgICB9O1xuXG4gICAgICAgIC8vIGZvciBhbmltYXRpb25zXG4gICAgICAgIHRoaXMuZHJvcFNwZWVkID0gMTtcbiAgICAgICAgdGhpcy5tb3ZlU3BlZWQgPSBvcHRpb25zLm1vdmVTcGVlZDtcbiAgICAgICAgdGhpcy5kcm9wUGllY2UgPSB0aGlzLmRyb3BQaWVjZS5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLmRyb3AgPSB0aGlzLmRyb3AuYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5tb3ZlID0gdGhpcy5tb3ZlLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMubW92ZVBpZWNlID0gdGhpcy5tb3ZlUGllY2UuYmluZCh0aGlzKTtcblxuICAgICAgICAvLyBrZWVwIHRyYWNrIG9mIHRoZSBmb2xsb3dpbmcgdmFyaWFibGVzIGZvciByZXF1ZXN0QW5pbWF0aW9uRnJhbWUgdGhyb3R0bGluZ1xuICAgICAgICB0aGlzLmFuaW1hdGUgPSB7XG4gICAgICAgICAgICBkcm9wOiB7XG4gICAgICAgICAgICAgICAgZnBzSW50ZXJ2YWw6ICcnLFxuICAgICAgICAgICAgICAgIHN0YXJ0VGltZTogJycsXG4gICAgICAgICAgICAgICAgbm93OiAnJyxcbiAgICAgICAgICAgICAgICB0aGVuOiAnJ1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHJpZ2h0OiB7XG4gICAgICAgICAgICAgICAgZnBzSW50ZXJ2YWw6ICcnLFxuICAgICAgICAgICAgICAgIHN0YXJ0VGltZTogJycsXG4gICAgICAgICAgICAgICAgbm93OiAnJyxcbiAgICAgICAgICAgICAgICB0aGVuOiAnJ1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGxlZnQ6IHtcbiAgICAgICAgICAgICAgICBmcHNJbnRlcnZhbDogJycsXG4gICAgICAgICAgICAgICAgc3RhcnRUaW1lOiAnJyxcbiAgICAgICAgICAgICAgICBub3c6ICcnLFxuICAgICAgICAgICAgICAgIHRoZW46ICcnXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgZG93bjoge1xuICAgICAgICAgICAgICAgIGZwc0ludGVydmFsOiAnJyxcbiAgICAgICAgICAgICAgICBzdGFydFRpbWU6ICcnLFxuICAgICAgICAgICAgICAgIG5vdzogJycsXG4gICAgICAgICAgICAgICAgdGhlbjogJydcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC8vIHBhdXNpbmcgdGhlIGdhbWVcbiAgICAgICAgdGhpcy5pc1BhdXNlZCA9IGZhbHNlO1xuXG4gICAgICAgIHRoaXMua2V5SGVsZCA9IHtcbiAgICAgICAgICAgIGRvd246IGZhbHNlLFxuICAgICAgICAgICAgcmlnaHQ6IGZhbHNlLFxuICAgICAgICAgICAgbGVmdDogZmFsc2VcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMub3Bwb25lbnQgPSBcIlwiO1xuICAgICAgICB0aGlzLmNvbnRyb2xzID0gb3B0aW9ucy5jb250cm9scztcbiAgICAgICAgdGhpcy51cGNvbWluZ0xpbmVzID0gMDtcbiAgICAgICAgdGhpcy5jb21ibyA9IC0xO1xuICAgICAgICB0aGlzLnRTcGluID0gZmFsc2U7XG4gICAgICAgIHRoaXMudFNwaW5TdHJlYWsgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5jb21ib0d1aWRlID0ge1xuICAgICAgICAgICAgMDogMCxcbiAgICAgICAgICAgIDE6IDAsIFxuICAgICAgICAgICAgMjogMSxcbiAgICAgICAgICAgIDM6IDEsXG4gICAgICAgICAgICA0OiAxLFxuICAgICAgICAgICAgNTogMixcbiAgICAgICAgICAgIDY6IDIsXG4gICAgICAgICAgICA3OiAzLFxuICAgICAgICAgICAgODogMyxcbiAgICAgICAgICAgIDk6IDQsXG4gICAgICAgICAgICAxMDogNCxcbiAgICAgICAgICAgIDExOiA0LFxuICAgICAgICAgICAgMTI6IDVcbiAgICAgICAgfTtcblxuICAgICAgICAvLyBzaW5nbGUgcGxheWVyXG4gICAgICAgIHRoaXMuc3RhcnRFbGV2YXRpbmcgPSB0aGlzLnN0YXJ0RWxldmF0aW5nLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMuY2xlYXJFbGV2YXRlSW50ZXJ2YWwgPSAnJztcbiAgICAgICAgdGhpcy5lbGV2YXRlRGVsYXkgPSA1MDAwO1xuICAgICAgICB0aGlzLmNsZWFyVGltZXIgPSAnJztcbiAgICB9XG5cbiAgICBnZW5lcmF0ZUJhZygpIHtcbiAgICAgICAgbGV0IG9QaWVjZSA9IG5ldyBPUGllY2UoKTtcbiAgICAgICAgbGV0IGlQaWVjZSA9IG5ldyBJUGllY2UoKTtcbiAgICAgICAgbGV0IHRQaWVjZSA9IG5ldyBUUGllY2UoKTtcbiAgICAgICAgbGV0IHNQaWVjZSA9IG5ldyBTUGllY2UoKTtcbiAgICAgICAgbGV0IHpQaWVjZSA9IG5ldyBaUGllY2UoKTtcbiAgICAgICAgbGV0IGxQaWVjZSA9IG5ldyBMUGllY2UoKTtcbiAgICAgICAgbGV0IGpQaWVjZSA9IG5ldyBKUGllY2UoKTtcblxuICAgICAgICByZXR1cm4gW29QaWVjZSwgaVBpZWNlLCB0UGllY2UsIHNQaWVjZSwgelBpZWNlLCBsUGllY2UsIGpQaWVjZV07XG4gICAgfVxuXG4gICAgc2V0RmllbGQoKSB7XG4gICAgICAgIGxldCBmaWVsZCA9IG5ldyBGaWVsZCgpO1xuICAgICAgICByZXR1cm4gZmllbGQuX2dlbmVyYXRlRmllbGQoKTtcbiAgICB9XG5cbiAgICAvLyB0YWtlIHBpZWNlIGZyb20gY3VycmVudEJhZyBhbmQgc2V0IGl0IGFzIHRoZSBjdXJyZW50IHBpZWNlXG4gICAgc2V0Q3VycmVudFBpZWNlKCkge1xuICAgICAgICB0aGlzLmN1cnJlbnRQaWVjZSA9IHRoaXMuY3VycmVudEJhZy5zaGlmdCgpO1xuICAgIH1cblxuICAgIC8vIHJlbW92ZXMgb2xkIGdob3N0IHBvc2l0aW9uIGZyb20gdGhpcy5maWVsZCBiZWZvcmUgY2hhbmdpbmcgcGllY2UgcG9zaXRpb25cbiAgICBjbGVhckdob3N0UG9zaXRpb24oKSB7XG4gICAgICAgIGxldCBjb29yZGluYXRlQXJyYXlzID0gT2JqZWN0LnZhbHVlcyh0aGlzLmdob3N0UG9zaXRpb24pO1xuICAgICAgICBjb29yZGluYXRlQXJyYXlzLmZvckVhY2goYXJyYXkgPT4ge1xuICAgICAgICAgICAgYXJyYXkuZm9yRWFjaChjb29yZGluYXRlID0+IHtcbiAgICAgICAgICAgICAgICBsZXQgW3JvdywgY29sXSA9IFtjb29yZGluYXRlWzBdLCBjb29yZGluYXRlWzFdXTtcbiAgICAgICAgICAgICAgICAvLyBwcmV2ZW50IG1ldGhvZCBmcm9tIGNsZWFyaW5nIHBpZWNlIGlmIGl0IGhhcHBlbnMgdG8gYmUgd2hlcmUgdGhlIGdob3N0IHBvc2l0aW9uIHNob3VsZCBiZVxuICAgICAgICAgICAgICAgIGlmICh0aGlzLmZpZWxkW3Jvd10gJiYgdGhpcy5maWVsZFtyb3ddW2NvbF0gPT09IFwieFwiICYmIHJvdyA+PSAwKSB0aGlzLmZpZWxkW3Jvd11bY29sXSA9IDA7XG4gICAgICAgICAgICB9KVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICAvLyBjbGVhcnMgdGhlIGNvbG9yIGNsYXNzZXMgZnJvbSB0aGUgYnJvd3NlciBmaWVsZFxuICAgIGNsZWFyR2hvc3RDbGFzcygpIHtcbiAgICAgICAgbGV0IGZpZWxkQ29sdW1ucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoYC5maWVsZC1jb2x1bW4uZmllbGQtJHt0aGlzLmdhbWVOdW19YCk7XG4gICAgICAgIE9iamVjdC52YWx1ZXModGhpcy5naG9zdFBvc2l0aW9uKS5mb3JFYWNoKGFycmF5ID0+IHtcbiAgICAgICAgICAgIGFycmF5LmZvckVhY2goY29vcmRpbmF0ZSA9PiB7XG4gICAgICAgICAgICAgICAgbGV0IFtyb3csIGNvbF0gPSBbY29vcmRpbmF0ZVswXSwgY29vcmRpbmF0ZVsxXV07XG4gICAgICAgICAgICAgICAgbGV0IGZpZWxkU3F1YXJlID0gZmllbGRDb2x1bW5zW2NvbF0uY2hpbGRyZW5bcm93XTtcbiAgICAgICAgICAgICAgICBpZiAoZmllbGRTcXVhcmUpIHtcbiAgICAgICAgICAgICAgICAgICAgZmllbGRTcXVhcmUuY2xhc3NMaXN0ID0gdGhpcy5jb2xvcnNbdGhpcy5jdXJyZW50UGllY2UuY29sb3JDb2RlXTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICAvLyBmaW5kIGFwcHJvcHJpYXRlIGdob3N0IHBvc2l0aW9uIGFzIHBpZWNlIHBvc2l0aW9uIGNoYW5nZXNcbiAgICBzZXRHaG9zdFBvc2l0aW9uKCkge1xuICAgICAgICBsZXQgZ2hvc3RQb3NpdGlvbiA9IHtcbiAgICAgICAgICAgIHRvcDogdGhpcy5jdXJyZW50UGllY2UucG9zaXRpb24udG9wLm1hcChjb29yZGluYXRlID0+IGNvb3JkaW5hdGUuc2xpY2UoKSksXG4gICAgICAgICAgICBtaWRkbGU6IHRoaXMuY3VycmVudFBpZWNlLnBvc2l0aW9uLm1pZGRsZS5tYXAoY29vcmRpbmF0ZSA9PiBjb29yZGluYXRlLnNsaWNlKCkpLFxuICAgICAgICAgICAgYm90dG9tOiB0aGlzLmN1cnJlbnRQaWVjZS5wb3NpdGlvbi5ib3R0b20ubWFwKGNvb3JkaW5hdGUgPT4gY29vcmRpbmF0ZS5zbGljZSgpKVxuICAgICAgICB9XG4gICAgICAgIGxldCBzdG9wcGVkID0gZmFsc2U7XG4gICAgICAgIHdoaWxlICghc3RvcHBlZCkge1xuICAgICAgICAgICAgbGV0IGhhbmdpbmdTcXVhcmVzID0gdGhpcy5jdXJyZW50UGllY2UuaGFuZ2luZ1NxdWFyZXMoZ2hvc3RQb3NpdGlvbik7XG4gICAgICAgICAgICBoYW5naW5nU3F1YXJlcy5mb3JFYWNoKGNvb3JkaW5hdGUgPT4ge1xuICAgICAgICAgICAgICAgIGxldCBbcm93LCBjb2xdID0gW2Nvb3JkaW5hdGVbMF0sIGNvb3JkaW5hdGVbMV1dO1xuICAgICAgICAgICAgICAgIGlmIChyb3cgPCAwIHx8IHJvdyArIDEgPT09IDIwIHx8IHRoaXMuZmllbGRbcm93ICsgMV1bY29sXSkgc3RvcHBlZCA9IHRydWU7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGlmIChzdG9wcGVkKSBicmVhaztcbiAgICAgICAgICAgIGdob3N0UG9zaXRpb24udG9wID0gZ2hvc3RQb3NpdGlvbi50b3AubWFwKGFycmF5ID0+IFthcnJheVswXSArIDEsIGFycmF5WzFdXSk7XG4gICAgICAgICAgICBnaG9zdFBvc2l0aW9uLm1pZGRsZSA9IGdob3N0UG9zaXRpb24ubWlkZGxlLm1hcChhcnJheSA9PiBbYXJyYXlbMF0gKyAxLCBhcnJheVsxXV0pO1xuICAgICAgICAgICAgZ2hvc3RQb3NpdGlvbi5ib3R0b20gPSBnaG9zdFBvc2l0aW9uLmJvdHRvbS5tYXAoYXJyYXkgPT4gW2FycmF5WzBdICsgMSwgYXJyYXlbMV1dKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmdob3N0UG9zaXRpb24gPSBnaG9zdFBvc2l0aW9uO1xuICAgICAgICB0aGlzLl9wb3B1bGF0ZUdob3N0UG9zaXRpb24oKTtcbiAgICB9XG5cbiAgICAvLyBwb3B1bGF0ZSB0aGlzLmZpZWxkIHdpdGggJ3gnIHdoZXJldmVyIHRoZSBnaG9zdCBwb3NpdGlvbiBpcyBjYWxjdWxhdGVkIHRvIGJlXG4gICAgX3BvcHVsYXRlR2hvc3RQb3NpdGlvbigpIHtcbiAgICAgICAgbGV0IGNvb3JkaW5hdGVBcnJheXMgPSBPYmplY3QudmFsdWVzKHRoaXMuZ2hvc3RQb3NpdGlvbik7XG4gICAgICAgIGNvb3JkaW5hdGVBcnJheXMuZm9yRWFjaChhcnJheSA9PiB7XG4gICAgICAgICAgICBhcnJheS5mb3JFYWNoKGNvb3JkaW5hdGUgPT4ge1xuICAgICAgICAgICAgICAgIGxldCBbcm93LCBjb2xdID0gW2Nvb3JkaW5hdGVbMF0sIGNvb3JkaW5hdGVbMV1dO1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLmZpZWxkW3Jvd10gJiYgdGhpcy5maWVsZFtyb3ddW2NvbF0gIT09IHRoaXMuY3VycmVudFBpZWNlLmNvbG9yQ29kZSkgdGhpcy5maWVsZFtyb3ddW2NvbF0gPSBcInhcIjtcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLnJlbmRlcigpO1xuICAgIH1cblxuICAgIC8vIGhvbGQgcGllY2UgZm9yIGxhdGVyIHVzZSBcbiAgICBob2xkKCkge1xuICAgICAgICBpZiAoIXRoaXMuY2FuSG9sZCkgcmV0dXJuO1xuICAgICAgICB0aGlzLmN1cnJlbnRQaWVjZS5jbGVhclNlbGZGcm9tQm9hcmQodGhpcy5maWVsZCk7IFxuICAgICAgICB0aGlzLnJlbmRlcigpO1xuXG4gICAgICAgIGlmICghdGhpcy5ob2xkUGllY2UpIHtcbiAgICAgICAgICAgIC8vIHBhc3MgY3VycmVudCBwaWVjZSBuYW1lIGludG8gZ2VuZXJhdGUgcGllY2UgaW4gb3JkZXIgdG8gZ2VuZXJhdGUgYSBuZXcgcGllY2UgaW5zdGFuY2VcbiAgICAgICAgICAgIHRoaXMuaG9sZFBpZWNlID0gdGhpcy5fZ2VuZXJhdGVQaWVjZSh0aGlzLmN1cnJlbnRQaWVjZS5uYW1lKTtcbiAgICAgICAgICAgIHRoaXMuc2V0Q3VycmVudFBpZWNlKCk7XG4gICAgICAgICAgICAvLyByZS1yZW5kZXIgbmV4dCBib3hlcyB0byBhcHByb3ByaWF0ZWx5IHNob3cgY3VycmVudCBiYWdcbiAgICAgICAgICAgIHRoaXMuc2hvd0N1cnJlbnRCYWcoKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuY3VycmVudFBpZWNlID0gdGhpcy5fZ2VuZXJhdGVQaWVjZSh0aGlzLmN1cnJlbnRQaWVjZS5uYW1lKTtcbiAgICAgICAgICAgIFt0aGlzLmN1cnJlbnRQaWVjZSwgdGhpcy5ob2xkUGllY2VdID0gW3RoaXMuaG9sZFBpZWNlLCB0aGlzLmN1cnJlbnRQaWVjZV07XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIC8vIGRpc2FibGUgaG9sZC1waWVjZSByaWdodCBhZnRlciBwbGF5ZXIgaG9sZHMgYSBwaWVjZVxuICAgICAgICB0aGlzLmNhbkhvbGQgPSBmYWxzZTtcblxuICAgICAgICB0aGlzLl9wb3B1bGF0ZUhvbGRCb3goKTtcbiAgICB9XG5cbiAgICBfcG9wdWxhdGVIb2xkQm94KCkge1xuICAgICAgICBsZXQgY29sdW1ucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC5ob2xkLWJveC5maWVsZC0ke3RoaXMuZ2FtZU51bX1gKS5jaGlsZHJlbjtcblxuICAgICAgICAvLyByZW1vdmUgY29sb3JzIGZyb20gcHJldmlvdXMgcGllY2VzXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgNTsgaSsrKSB7XG4gICAgICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IDQ7IGorKykge1xuICAgICAgICAgICAgICAgIC8vIGNvbHVtbnMuY2hpbGRyZW4gaXMgbm9kZWxpc3Qgb2YgPGxpcz5cbiAgICAgICAgICAgICAgICBjb2x1bW5zW2ldLmNoaWxkcmVuW2pdLmNsYXNzTmFtZSA9IFwiXCI7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmhvbGRQaWVjZS5kaXNwbGF5U3F1YXJlcy5mb3JFYWNoKHNxdWFyZSA9PiB7XG4gICAgICAgICAgICBsZXQgW2NvbCwgcm93XSA9IFtzcXVhcmVbMF0sIHNxdWFyZVsxXV07XG4gICAgICAgICAgICBjb2x1bW5zW2NvbF0uY2hpbGRyZW5bcm93XS5jbGFzc0xpc3QuYWRkKHRoaXMuY29sb3JzW3RoaXMuaG9sZFBpZWNlLmNvbG9yQ29kZV0pO1xuICAgICAgICB9KVxuXG4gICAgfVxuXG4gICAgLy8gdXNlZCBmb3IgdGhpcy5ob2xkKCk6IGdlbmVyYXRlIGEgbmV3IHBpZWNlIHNvIHRoYXQgYSBob2xkcGllY2UgdGhhdCBpcyByZS1yZW5kZXJlZCBvbiB0aGUgYm9hcmQgd2lsbCBub3Qgc3RhcnQgZnJvbSB0aGUgb2xkIHBvc2l0aW9uXG4gICAgX2dlbmVyYXRlUGllY2UocGllY2VOYW1lKSB7XG4gICAgICAgIHN3aXRjaChwaWVjZU5hbWUpIHtcbiAgICAgICAgICAgIGNhc2UgXCJUUGllY2VcIjpcbiAgICAgICAgICAgICAgICByZXR1cm4gbmV3IFRQaWVjZTtcbiAgICAgICAgICAgIGNhc2UgXCJPUGllY2VcIjpcbiAgICAgICAgICAgICAgICByZXR1cm4gbmV3IE9QaWVjZTtcbiAgICAgICAgICAgIGNhc2UgXCJJUGllY2VcIjpcbiAgICAgICAgICAgICAgICByZXR1cm4gbmV3IElQaWVjZTtcbiAgICAgICAgICAgIGNhc2UgXCJMUGllY2VcIjpcbiAgICAgICAgICAgICAgICByZXR1cm4gbmV3IExQaWVjZTtcbiAgICAgICAgICAgIGNhc2UgXCJKUGllY2VcIjpcbiAgICAgICAgICAgICAgICByZXR1cm4gbmV3IEpQaWVjZTtcbiAgICAgICAgICAgIGNhc2UgXCJTUGllY2VcIjpcbiAgICAgICAgICAgICAgICByZXR1cm4gbmV3IFNQaWVjZTtcbiAgICAgICAgICAgIGNhc2UgXCJaUGllY2VcIjpcbiAgICAgICAgICAgICAgICByZXR1cm4gbmV3IFpQaWVjZTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8vIHRha2Ugb25lIHBpZWNlIGZyb20gbmV4dEJhZyBhbmQgYWRkIHRvIGN1cnJlbnRCYWdcbiAgICBhZGRUb0N1cnJlbnRCYWcoKSB7XG4gICAgICAgIHRoaXMuY3VycmVudEJhZy5wdXNoKHRoaXMubmV4dEJhZy5zaGlmdCgpKTtcbiAgICB9XG5cbiAgICBzaG93Q3VycmVudEJhZygpIHtcbiAgICAgICAgbGV0IGJveGVzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShgbmV4dC1ib3ggZmllbGQtJHt0aGlzLmdhbWVOdW19YCk7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgNTsgaSsrKSB7XG4gICAgICAgICAgICB0aGlzLl9wb3B1bGF0ZU5leHRCb3goYm94ZXNbaV0sIHRoaXMuY3VycmVudEJhZ1tpXSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBfcG9wdWxhdGVOZXh0Qm94KGJveCwgcGllY2UpIHtcbiAgICAgICAgLy8gY29sdW1ucyBpcyBub2RlbGlzdCBvZiA8dWxzPlxuICAgICAgICBsZXQgY29sdW1ucyA9IGJveC5jaGlsZHJlbjtcblxuICAgICAgICAvLyByZW1vdmUgY29sb3JzIGZyb20gcHJldmlvdXMgcGllY2VcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCA1OyBpKyspIHtcbiAgICAgICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgNDsgaisrKSB7XG4gICAgICAgICAgICAgICAgLy8gY29sdW1ucy5jaGlsZHJlbiBpcyBub2RlbGlzdCBvZiA8bGlzPlxuICAgICAgICAgICAgICAgIGNvbHVtbnNbaV0uY2hpbGRyZW5bal0uY2xhc3NOYW1lID0gXCJcIjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC8vIHBvcHVsYXRlIGJveCB3aXRoIG5ldyBwaWVjZVxuICAgICAgICBwaWVjZS5kaXNwbGF5U3F1YXJlcy5mb3JFYWNoKHNxdWFyZSA9PiB7XG4gICAgICAgICAgICBsZXQgW2NvbCwgcm93XSA9IFtzcXVhcmVbMF0sIHNxdWFyZVsxXV07XG4gICAgICAgICAgICBjb2x1bW5zW2NvbF0uY2hpbGRyZW5bcm93XS5jbGFzc0xpc3QuYWRkKHRoaXMuY29sb3JzW3BpZWNlLmNvbG9yQ29kZV0pO1xuICAgICAgICB9KVxuICAgIH1cblxuICAgIC8vIHJlZmlsbCBuZXh0IGJhZywgd2lsbCBvbmx5IGJlIGNhbGxlZCBvbmNlIG5leHRCYWcgYmVjb21lcyBlbXB0eVxuICAgIHJlZmlsbE5leHRCYWcoKSB7XG4gICAgICAgIHRoaXMubmV4dEJhZyA9IHRoaXMuZ2VuZXJhdGVCYWcoKTtcbiAgICB9XG5cbiAgICAvLyBpbXBsZW1lbnRhdGlvbiBvZiBzaHVmZmxlIGZvdW5kIG9uIGh0dHBzOi8vc3RhY2tvdmVyZmxvdy5jb20vcXVlc3Rpb25zLzI0NTA5NTQvaG93LXRvLXJhbmRvbWl6ZS1zaHVmZmxlLWEtamF2YXNjcmlwdC1hcnJheSMyNDUwOTc2XG4gICAgc2h1ZmZsZUJhZyhiYWcpIHtcbiAgICAgICAgdmFyIGN1cnJlbnRJbmRleCA9IGJhZy5sZW5ndGgsIHRlbXBvcmFyeVZhbHVlLCByYW5kb21JbmRleDtcblxuICAgICAgICAvLyBXaGlsZSB0aGVyZSByZW1haW4gZWxlbWVudHMgdG8gc2h1ZmZsZS4uLlxuICAgICAgICB3aGlsZSAoMCAhPT0gY3VycmVudEluZGV4KSB7XG5cbiAgICAgICAgICAgIC8vIFBpY2sgYSByZW1haW5pbmcgZWxlbWVudC4uLlxuICAgICAgICAgICAgcmFuZG9tSW5kZXggPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBjdXJyZW50SW5kZXgpO1xuICAgICAgICAgICAgY3VycmVudEluZGV4IC09IDE7XG5cbiAgICAgICAgICAgIC8vIEFuZCBzd2FwIGl0IHdpdGggdGhlIGN1cnJlbnQgZWxlbWVudC5cbiAgICAgICAgICAgIHRlbXBvcmFyeVZhbHVlID0gYmFnW2N1cnJlbnRJbmRleF07XG4gICAgICAgICAgICBiYWdbY3VycmVudEluZGV4XSA9IGJhZ1tyYW5kb21JbmRleF07XG4gICAgICAgICAgICBiYWdbcmFuZG9tSW5kZXhdID0gdGVtcG9yYXJ5VmFsdWU7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGJhZztcbiAgICB9XG4gICAgLy8gaW1wbGVtZW50YXRpb24gb2Ygc2h1ZmZsZSBmb3VuZCBvbiBodHRwczovL3N0YWNrb3ZlcmZsb3cuY29tL3F1ZXN0aW9ucy8yNDUwOTU0L2hvdy10by1yYW5kb21pemUtc2h1ZmZsZS1hLWphdmFzY3JpcHQtYXJyYXkjMjQ1MDk3NlxuXG4gICAgLy8gbG9vayB0aHJvdWdoIGZpZWxkLCBpZiBmaWVsZFtyb3ddW2NvbF0gY29udGFpbnMgYSBudW1iZXIgPiAwLCBmaWxsIHRoYXQgc3BvdCB3aXRoIHRoZSByZXNwZWN0aXZlIGNvbG9yLiBcbiAgICAvLyBpZiBjb250YWlucyBhbiAneCcsIHBvcHVsYXRlIHdpdGggZ2hvc3QgcGllY2Ugc3R5bGVzLlxuICAgIC8vIGVsc2UsIHJlbW92ZSBjb2xvclxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgLy8gaWYgKHRoaXMuY3VycmVudFBpZWNlLnJpZ2h0TW9zdFsxXSA+IDkgfHwgdGhpcy5jdXJyZW50UGllY2UubGVmdE1vc3RbMV0gPCAwKSByZXR1cm47XG4gICAgICAgIGxldCBmaWVsZENvbHVtbnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKGAuZmllbGQtY29sdW1uLmZpZWxkLSR7dGhpcy5nYW1lTnVtfWApO1xuICAgICAgICB0aGlzLmZpZWxkLmZvckVhY2goKHJvdywgcm93SWR4KSA9PiB7XG4gICAgICAgICAgICByb3cuZm9yRWFjaCgoY29sLCBjb2xJZHgpID0+IHtcbiAgICAgICAgICAgICAgICBsZXQgc3F1YXJlVmFsdWUgPSB0aGlzLmZpZWxkW3Jvd0lkeF1bY29sSWR4XTtcbiAgICAgICAgICAgICAgICBpZiAoc3F1YXJlVmFsdWUgPT09ICd4Jykge1xuICAgICAgICAgICAgICAgICAgICBmaWVsZENvbHVtbnNbY29sSWR4XS5jaGlsZHJlbltyb3dJZHhdLmNsYXNzTGlzdC5hZGQoYHgtJHt0aGlzLmNvbG9yc1t0aGlzLmN1cnJlbnRQaWVjZS5jb2xvckNvZGVdfWApO1xuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoc3F1YXJlVmFsdWUpIHtcbiAgICAgICAgICAgICAgICAgICAgZmllbGRDb2x1bW5zW2NvbElkeF0uY2hpbGRyZW5bcm93SWR4XS5jbGFzc0xpc3QuYWRkKHRoaXMuY29sb3JzW3NxdWFyZVZhbHVlXSk7XG4gICAgICAgICAgICAgICAgICAgIGZpZWxkQ29sdW1uc1tjb2xJZHhdLmNoaWxkcmVuW3Jvd0lkeF0uY2xhc3NMaXN0LnJlbW92ZShgeC0ke3RoaXMuY29sb3JzW3RoaXMuY3VycmVudFBpZWNlLmNvbG9yQ29kZV19YCk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgZmllbGRDb2x1bW5zW2NvbElkeF0uY2hpbGRyZW5bcm93SWR4XS5jbGFzc0xpc3QgPSBcIlwiO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBrZXlMaXN0ZW5lcigpIHtcbiAgICAgICAgZG9jdW1lbnQuYm9keS5hZGRFdmVudExpc3RlbmVyKFwia2V5ZG93blwiLCBldmVudCA9PiB7XG4gICAgICAgICAgICBpZiAodGhpcy5nYW1lSXNPdmVyIHx8IHRoaXMub3Bwb25lbnQuZ2FtZUlzT3ZlcikgcmV0dXJuO1xuICAgICAgICAgICAgdGhpcy5jdXJyZW50UGllY2Uuc2V0T3V0ZXJTcXVhcmVzKCk7XG4gICAgICAgICAgICAvLyB0aGlzLmNsZWFyR2hvc3RQb3NpdGlvbigpO1xuICAgICAgICAgICAgc3dpdGNoKGV2ZW50LndoaWNoKSB7XG4gICAgICAgICAgICAgICAgLy8gdXAga2V5XG4gICAgICAgICAgICAgICAgY2FzZSB0aGlzLmNvbnRyb2xzLnR1cm5SaWdodDpcbiAgICAgICAgICAgICAgICAgICAgLy8gcGFzcyBmaWVsZCBzbyBwaWVjZSBjYW4gY2hlY2sgZmllbGQgd2FsbCBiZWZvcmUgdHVybmluZ1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmNsZWFyR2hvc3RQb3NpdGlvbigpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnRTcGluID0gdGhpcy5jdXJyZW50UGllY2UubW92ZShcInR1cm5SaWdodFwiLCB0aGlzLmZpZWxkKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jdXJyZW50UGllY2UucG9wdWxhdGVGaWVsZCh0aGlzLmZpZWxkKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRHaG9zdFBvc2l0aW9uKCk7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIC8vIEMga2V5XG4gICAgICAgICAgICAgICAgY2FzZSB0aGlzLmNvbnRyb2xzLnR1cm5MZWZ0OlxuICAgICAgICAgICAgICAgICAgICAvLyBwYXNzIGZpZWxkIHNvIHBpZWNlIGNhbiBjaGVjayBmaWVsZCB3YWxsIGJlZm9yZSB0dXJuaW5nXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY2xlYXJHaG9zdFBvc2l0aW9uKCk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY3VycmVudFBpZWNlLm1vdmUoXCJ0dXJuTGVmdFwiLCB0aGlzLmZpZWxkKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jdXJyZW50UGllY2UucG9wdWxhdGVGaWVsZCh0aGlzLmZpZWxkKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRHaG9zdFBvc2l0aW9uKCk7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIC8vIGxlZnQga2V5XG4gICAgICAgICAgICAgICAgY2FzZSB0aGlzLmNvbnRyb2xzLmxlZnQ6XG4gICAgICAgICAgICAgICAgICAgIHRoaXMua2V5SGVsZC5sZWZ0ID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuY3VycmVudFBpZWNlLmxlZnRTaWRlQmxvY2tlZCh0aGlzLmZpZWxkKSkgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMubW92ZVBpZWNlKFwibGVmdFwiKTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgLy8gcmlnaHQga2V5XG4gICAgICAgICAgICAgICAgY2FzZSB0aGlzLmNvbnRyb2xzLnJpZ2h0OlxuICAgICAgICAgICAgICAgICAgICB0aGlzLmtleUhlbGQucmlnaHQgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5jdXJyZW50UGllY2UucmlnaHRTaWRlQmxvY2tlZCh0aGlzLmZpZWxkKSkgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMubW92ZVBpZWNlKFwicmlnaHRcIik7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIC8vIGRvd24ga2V5XG4gICAgICAgICAgICAgICAgY2FzZSB0aGlzLmNvbnRyb2xzLnNvZnREcm9wOlxuICAgICAgICAgICAgICAgICAgICB0aGlzLmtleUhlbGQuZG93biA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMubW92ZVBpZWNlKFwiZG93blwiKTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgLy8gc2hpZnQga2V5XG4gICAgICAgICAgICAgICAgY2FzZSB0aGlzLmNvbnRyb2xzLmhvbGQ6IFxuICAgICAgICAgICAgICAgICAgICB0aGlzLmNsZWFyR2hvc3RQb3NpdGlvbigpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmhvbGQoKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jdXJyZW50UGllY2UucG9wdWxhdGVGaWVsZCh0aGlzLmZpZWxkKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRHaG9zdFBvc2l0aW9uKCk7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIC8vIHNwYWNlIGJhclxuICAgICAgICAgICAgICAgIGNhc2UgdGhpcy5jb250cm9scy5oYXJkRHJvcDpcbiAgICAgICAgICAgICAgICAgICAgLy8gdGhpcy5yZW5kZXIoKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jbGVhckdob3N0UG9zaXRpb24oKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jdXJyZW50UGllY2UuaGFyZERyb3AodGhpcy5maWVsZCk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMucmVuZGVyKCk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY3VycmVudFBpZWNlLnBvcHVsYXRlRmllbGQodGhpcy5maWVsZCk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuaGFuZGxlUGllY2VTdG9wKHRoaXMuaGFuZGxlQ2xlYXIuZHJvcCk7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIC8vIFAga2V5XG4gICAgICAgICAgICAgICAgY2FzZSA4MDpcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5pc1BhdXNlZCA/IHRoaXMuZHJvcFBpZWNlKHRoaXMuZHJvcFNwZWVkKSA6IGNhbmNlbEFuaW1hdGlvbkZyYW1lKHRoaXMuaGFuZGxlQ2xlYXIuZHJvcCk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuaXNQYXVzZWQgPSAhdGhpcy5pc1BhdXNlZDtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLmN1cnJlbnRQaWVjZS5zZXRPdXRlclNxdWFyZXMoKTtcbiAgICAgICAgICAgIHRoaXMucmVuZGVyKCk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGRvY3VtZW50LmJvZHkuYWRkRXZlbnRMaXN0ZW5lcihcImtleXVwXCIsIGV2ZW50ID0+IHtcbiAgICAgICAgICAgIHN3aXRjaCAoZXZlbnQud2hpY2gpIHtcbiAgICAgICAgICAgICAgICBjYXNlIHRoaXMuY29udHJvbHMucmlnaHQ6IFxuICAgICAgICAgICAgICAgICAgICB0aGlzLmtleUhlbGQucmlnaHQgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSB0aGlzLmNvbnRyb2xzLmxlZnQ6IFxuICAgICAgICAgICAgICAgICAgICB0aGlzLmtleUhlbGQubGVmdCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlIHRoaXMuY29udHJvbHMuc29mdERyb3A6IFxuICAgICAgICAgICAgICAgICAgICB0aGlzLmtleUhlbGQuZG93biA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICBicmVhazsgIFxuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBjbGVhckxpbmVzKGxvd2VzdCwgaGlnaGVzdCwgbnVtTGluZXNDbGVhcmVkKSB7XG4gICAgICAgIGlmIChsb3dlc3QgPCAwKSByZXR1cm47XG4gICAgICAgIC8vIGJhc2UgY2FzZTogaWYgd2UgcmVhY2ggYSByb3cgdGhhdCBpcyBoaWdoZXIgdGhhbiB0aGUgaGlnaGVzdCwgdGhlbiByZXR1cm4gbnVtYmVyIG9mIGxpbmVzIHRoYXQgd2VyZSBjbGVhcmVkXG4gICAgICAgIGlmIChsb3dlc3QgPCBoaWdoZXN0KSB7XG4gICAgICAgICAgICByZXR1cm4gbnVtTGluZXNDbGVhcmVkO1xuICAgICAgICB9O1xuICAgICAgICAvLyByZWN1cnNpdmUgY2FzZTogXG4gICAgICAgIC8vIGlmIGxvd2VzdCByb3cgZG9lcyBub3QgY29udGFpbiBhIDAsIGJyaW5nIGFsbCBhYm92ZSByb3dzIGRvd24gb25lIGxldmVsXG4gICAgICAgIGlmICghdGhpcy5maWVsZFtsb3dlc3RdLmluY2x1ZGVzKDApKSB7XG4gICAgICAgICAgICB0aGlzLl9icmluZ0Rvd25GaWVsZChsb3dlc3QpO1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuY2xlYXJMaW5lcyhsb3dlc3QsIGhpZ2hlc3QgKyAxLCBudW1MaW5lc0NsZWFyZWQgKyAxKVxuICAgICAgICAvLyBpZiByb3cgY29udGFpbnMgYSAwLCByb3cgaXMgbm90IGNsZWFyZWQgeWV0IFxuICAgICAgICB9IGVsc2UgaWYgKHRoaXMuZmllbGRbbG93ZXN0XS5pbmNsdWRlcygwKSkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuY2xlYXJMaW5lcyhsb3dlc3QgLSAxLCBoaWdoZXN0LCBudW1MaW5lc0NsZWFyZWQpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgX2JyaW5nRG93bkZpZWxkKHN0YXJ0aW5nUm93KSB7XG4gICAgICAgIGZvciAobGV0IGkgPSBzdGFydGluZ1JvdzsgaSA+IDA7IGktLSkge1xuICAgICAgICAgICAgdGhpcy5maWVsZFtpXSA9IHRoaXMuZmllbGRbaSAtIDFdO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuZmllbGRbMF0gPSBbMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMF07XG4gICAgfVxuXG4gICAgaGFuZGxlUGllY2VTdG9wKCkgeyAgXG4gICAgICAgIC8vIGFsbG93IHBsYXllciB0byBob2xkIHBpZWNlIGFnYWluXG4gICAgICAgIHRoaXMuY2FuSG9sZCA9IHRydWU7XG4gICAgICAgIGxldCBsb3dlc3QgPSB0aGlzLmN1cnJlbnRQaWVjZS5wb3NpdGlvbi5ib3R0b21bMF1bMF07XG4gICAgICAgIC8vIGluIGNhc2Ugb2YgbGluZSBwaWVjZSwgd2hpY2ggbWF5IG5vdCBoYXZlIHRoaXMucG9zaXRpb24udG9wXG4gICAgICAgIGxldCBoaWdoZXN0ID0gIXRoaXMuY3VycmVudFBpZWNlLnBvc2l0aW9uLnRvcC5sZW5ndGggPyBsb3dlc3QgOiB0aGlzLmN1cnJlbnRQaWVjZS5wb3NpdGlvbi50b3BbMF1bMF07XG4gICAgICAgIC8vIGNoZWNrIGlmIGEgVFBpZWNlIHdhcyBzcHVuIGluIHBsYWNlXG4gICAgICAgIGlmICh0aGlzLmN1cnJlbnRQaWVjZS5uYW1lID09PSBcIlRQaWVjZVwiKSB7XG4gICAgICAgICAgICBsZXQgW2xlZnRNb3N0Um93LCByaWdodE1vc3RSb3ddID0gW3RoaXMuY3VycmVudFBpZWNlLmxlZnRNb3N0WzBdLCB0aGlzLmN1cnJlbnRQaWVjZS5yaWdodE1vc3RbMF1dO1xuICAgICAgICAgICAgbGV0IFtsZWZ0TW9zdENvbCwgcmlnaHRNb3N0Q29sXSA9IFt0aGlzLmN1cnJlbnRQaWVjZS5sZWZ0TW9zdFsxXSwgdGhpcy5jdXJyZW50UGllY2UucmlnaHRNb3N0WzFdXTtcbiAgICAgICAgICAgIGlmICh0aGlzLmZpZWxkW2xlZnRNb3N0Um93IC0gMV0gJiYgdGhpcy5maWVsZFtyaWdodE1vc3RSb3cgLSAxXSkge1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLmZpZWxkW2xlZnRNb3N0Um93IC0gMV1bbGVmdE1vc3RDb2xdIHx8IHRoaXMuZmllbGRbcmlnaHRNb3N0Um93IC0gMV1bcmlnaHRNb3N0Q29sXSkgdGhpcy50U3BpbiA9IHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgbGV0IG51bUxpbmVzQ2xlYXJlZCA9IHRoaXMuY2xlYXJMaW5lcyhsb3dlc3QsIGhpZ2hlc3QsIDApO1xuXG4gICAgICAgIC8vIGluIHRoZSBjYXNlIG9mIG11bHRpcGxheWVyLCBzZW5kIGNsZWFyZWQgbGluZXMgdG8gb3Bwb25lbnQgYW5kIHJlY2VpdmUgcG90ZW50aWFsIGxpbmVzXG4gICAgICAgIGlmICh0aGlzLm9wcG9uZW50KSB7XG4gICAgICAgICAgICBpZiAobnVtTGluZXNDbGVhcmVkID4gMCkge1xuICAgICAgICAgICAgICAgIHRoaXMuY29tYm8gKz0gMTtcbiAgICAgICAgICAgICAgICBsZXQgbnVtTGluZXNcbiAgICAgICAgICAgICAgICBpZiAobnVtTGluZXNDbGVhcmVkIDwgNCkge1xuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5jdXJyZW50UGllY2UubmFtZSA9PT0gXCJUUGllY2VcIiAmJiB0aGlzLnRTcGluKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBudW1MaW5lcyA9IG51bUxpbmVzQ2xlYXJlZCA9PT0gMyA/IDYgOiA0O1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgbnVtTGluZXMgPSBudW1MaW5lc0NsZWFyZWQgLSAxO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy50U3BpblN0cmVhayA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgbnVtTGluZXMgPSA0O1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIG51bUxpbmVzICs9IHRoaXMuY29tYm9HdWlkZVt0aGlzLmNvbWJvXTtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy50U3BpblN0cmVhaykgbnVtTGluZXMgKz0gMjtcblxuICAgICAgICAgICAgICAgIGlmICh0aGlzLnVwY29taW5nTGluZXMgPiAwKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMudXBjb21pbmdMaW5lcyAtPSBudW1MaW5lcztcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMudXBjb21pbmdMaW5lcyA8IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMub3Bwb25lbnQuYWRkTGluZXNUb1F1ZXVlKE1hdGguYWJzKHRoaXMudXBjb21pbmdMaW5lcykpO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy51cGNvbWluZ0xpbmVzID0gMDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGFkanVzdFF1ZXVlSGVpZ2h0KHRoaXMuZ2FtZU51bSwgMCk7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBhZGp1c3RRdWV1ZUhlaWdodCh0aGlzLmdhbWVOdW0sIHRoaXMudXBjb21pbmdMaW5lcyAqIDUpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5vcHBvbmVudC5hZGRMaW5lc1RvUXVldWUobnVtTGluZXMpO1xuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy50U3BpbiA9PT0gdHJ1ZSkgdGhpcy50U3BpblN0cmVhayA9IHRydWU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLmNvbWJvID0gLTE7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMudXBjb21pbmdMaW5lcyA+IDApIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5yZWNlaXZlVXBjb21pbmdMaW5lcyh0aGlzLnVwY29taW5nTGluZXMpO1xuICAgICAgICAgICAgICAgICAgICBhZGp1c3RRdWV1ZUhlaWdodCh0aGlzLmdhbWVOdW0sIDApO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gXG4gICAgICAgIH1cbiAgICAgICAgLy8gcmVzZXQgdFNwaW4gdHJhY2tlclxuICAgICAgICB0aGlzLnRTcGluID0gZmFsc2VcbiAgICAgICAgdGhpcy5jbGVhckdob3N0Q2xhc3MoKTtcbiAgICAgICAgY2FuY2VsQW5pbWF0aW9uRnJhbWUodGhpcy5oYW5kbGVDbGVhci5kcm9wKTtcbiAgICAgICAgLy8gdGhpcy5zdGFydEVsZXZhdGluZygpO1xuICAgICAgICB0aGlzLnBsYXkoKTtcbiAgICB9XG5cbiAgICBkcm9wUGllY2UoZnBzKSB7XG4gICAgICAgIC8vIERvIHdoYXRldmVyXG4gICAgICAgIHRoaXMuYW5pbWF0ZS5kcm9wLmZwc0ludGVydmFsID0gMTAwMCAvIGZwcztcbiAgICAgICAgdGhpcy5hbmltYXRlLmRyb3AudGhlbiA9IERhdGUubm93KCk7XG4gICAgICAgIHRoaXMuYW5pbWF0ZS5kcm9wLnN0YXJ0VGltZSA9IHRoaXMudGhlbjtcbiAgICAgICAgdGhpcy5kcm9wKHRoaXMuZmllbGQpO1xuICAgIH1cblxuICAgIC8vIGluc3BpcmF0aW9uIGZvciB0aHJvdHRsaW5nIHJlcXVlc3RBbmltYXRpb25GcmFtZSBmcm9tIGh0dHBzOi8vc3RhY2tvdmVyZmxvdy5jb20vcXVlc3Rpb25zLzE5NzY0MDE4L2NvbnRyb2xsaW5nLWZwcy13aXRoLXJlcXVlc3RhbmltYXRpb25mcmFtZVxuICAgIGRyb3AoKSB7XG4gICAgICAgIHRoaXMuaGFuZGxlQ2xlYXIuZHJvcCA9IHJlcXVlc3RBbmltYXRpb25GcmFtZSgoKSA9PiB0aGlzLmRyb3AodGhpcy5maWVsZCkpO1xuICAgICAgICB0aGlzLmFuaW1hdGUuZHJvcC5ub3cgPSBEYXRlLm5vdygpO1xuICAgICAgICBsZXQgZWxhcHNlZCA9IHRoaXMuYW5pbWF0ZS5kcm9wLm5vdyAtIHRoaXMuYW5pbWF0ZS5kcm9wLnRoZW47XG4gICAgICAgIGlmIChlbGFwc2VkID4gdGhpcy5hbmltYXRlLmRyb3AuZnBzSW50ZXJ2YWwpIHtcbiAgICAgICAgICAgIC8vIEdldCByZWFkeSBmb3IgbmV4dCBmcmFtZSBieSBzZXR0aW5nIHRoZW49bm93LCBhZGp1c3RpbmcgZm9yIHNwZWNpZmllZCBmcHNJbnRlcnZhbCBub3QgYmVpbmcgYSBtdWx0aXBsZSBvZiBSQUYncyBpbnRlcnZhbCAoMTYuN21zKVxuICAgICAgICAgICAgdGhpcy5hbmltYXRlLmRyb3AudGhlbiA9IHRoaXMuYW5pbWF0ZS5kcm9wLm5vdyAtIChlbGFwc2VkICUgdGhpcy5hbmltYXRlLmRyb3AuZnBzSW50ZXJ2YWwpO1xuICAgICAgICAgICAgdGhpcy5jdXJyZW50UGllY2UucG9wdWxhdGVGaWVsZCh0aGlzLmZpZWxkKTtcbiAgICAgICAgICAgIHRoaXMucmVuZGVyKCk7XG4gICAgICAgICAgICBpZiAoIXRoaXMuY3VycmVudFBpZWNlLmlzRmFsbGluZyh0aGlzLmZpZWxkKSkge1xuICAgICAgICAgICAgICAgIGRlYnVnZ2VyXG4gICAgICAgICAgICAgICAgdGhpcy5oYW5kbGVQaWVjZVN0b3AodGhpcy5oYW5kbGVDbGVhci5kcm9wKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIHByZXZlbnRzIGluY29taW5nIHBpZWNlIGZyb20gZGVsZXRpbmcgYSBwaWVjZSBkaXJlY3RseSBiZWxvdyBkdXJpbmcgaXRzIGluaXRpYWwgcmVuZGVyXG4gICAgICAgICAgICBpZiAodGhpcy5jdXJyZW50UGllY2UuYm90dG9tTW9zdFswXSAhPSAwIHx8IHRoaXMuY3VycmVudFBpZWNlLmlzRmFsbGluZyh0aGlzLmZpZWxkKSkgdGhpcy5jdXJyZW50UGllY2UuZHJvcCh0aGlzLmZpZWxkKTtcbiAgICAgICAgICAgIHRoaXMuY3VycmVudFBpZWNlLnBvcHVsYXRlRmllbGQodGhpcy5maWVsZCk7IC8vIGtlZXAgb25seSBvbmUgcG9wdWxhdGUgZmllbGQ/XG4gICAgICAgICAgICB0aGlzLnJlbmRlcigpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgbW92ZVBpZWNlKGRpcmVjdGlvbikge1xuICAgICAgICAvLyBEbyB3aGF0ZXZlclxuICAgICAgICB0aGlzLmFuaW1hdGVbZGlyZWN0aW9uXS5mcHNJbnRlcnZhbCA9IDEwMDAgLyB0aGlzLm1vdmVTcGVlZDtcbiAgICAgICAgdGhpcy5hbmltYXRlW2RpcmVjdGlvbl0udGhlbiA9IERhdGUubm93KCk7XG4gICAgICAgIHRoaXMuYW5pbWF0ZVtkaXJlY3Rpb25dLnN0YXJ0VGltZSA9IHRoaXMuYW5pbWF0ZVtkaXJlY3Rpb25dLnRoZW47XG4gICAgICAgIHRoaXMubW92ZShkaXJlY3Rpb24pO1xuICAgIH1cblxuICAgIC8vIGluc3BpcmF0aW9uIGZvciB0aHJvdHRsaW5nIHJlcXVlc3RBbmltYXRpb25GcmFtZSBmcm9tIGh0dHBzOi8vc3RhY2tvdmVyZmxvdy5jb20vcXVlc3Rpb25zLzE5NzY0MDE4L2NvbnRyb2xsaW5nLWZwcy13aXRoLXJlcXVlc3RhbmltYXRpb25mcmFtZVxuICAgIG1vdmUoZGlyZWN0aW9uKSB7XG4gICAgICAgIHRoaXMuaGFuZGxlQ2xlYXJbZGlyZWN0aW9uXSA9IHJlcXVlc3RBbmltYXRpb25GcmFtZSgoKSA9PiB0aGlzLm1vdmUoZGlyZWN0aW9uKSk7XG4gICAgICAgIGlmICghdGhpcy5rZXlIZWxkW2RpcmVjdGlvbl0pIGNhbmNlbEFuaW1hdGlvbkZyYW1lKHRoaXMuaGFuZGxlQ2xlYXJbZGlyZWN0aW9uXSk7XG4gICAgICAgIHRoaXMuYW5pbWF0ZVtkaXJlY3Rpb25dLm5vdyA9IERhdGUubm93KCk7XG4gICAgICAgIGxldCBlbGFwc2VkID0gdGhpcy5hbmltYXRlW2RpcmVjdGlvbl0ubm93IC0gdGhpcy5hbmltYXRlW2RpcmVjdGlvbl0udGhlbjtcbiAgICAgICAgaWYgKGVsYXBzZWQgPiB0aGlzLmFuaW1hdGVbZGlyZWN0aW9uXS5mcHNJbnRlcnZhbCkge1xuICAgICAgICAgICAgLy8gR2V0IHJlYWR5IGZvciBuZXh0IGZyYW1lIGJ5IHNldHRpbmcgdGhlbj1ub3csIGFkanVzdGluZyBmb3Igc3BlY2lmaWVkIGZwc0ludGVydmFsIG5vdCBiZWluZyBhIG11bHRpcGxlIG9mIFJBRidzIGludGVydmFsICgxNi43bXMpXG4gICAgICAgICAgICB0aGlzLmFuaW1hdGVbZGlyZWN0aW9uXS50aGVuID0gdGhpcy5hbmltYXRlW2RpcmVjdGlvbl0ubm93IC0gKGVsYXBzZWQgJSB0aGlzLmFuaW1hdGVbZGlyZWN0aW9uXS5mcHNJbnRlcnZhbCk7XG5cbiAgICAgICAgICAgIC8vIHByZXZlbnQgcGllY2UgZnJvbSBtb3ZpbmcgaWYgaXQgaXMgYmxvY2tlZCBvciBpZiBib3RoIGxlZnQgYW5kIHJpZ2h0IGFycm93IGtleXMgYXJlIGhlbGQgZG93blxuICAgICAgICAgICAgaWYgKFxuICAgICAgICAgICAgICAgIGRpcmVjdGlvbiA9PT0gXCJyaWdodFwiICYmIHRoaXMuY3VycmVudFBpZWNlLnJpZ2h0U2lkZUJsb2NrZWQodGhpcy5maWVsZCkgXG4gICAgICAgICAgICAgICAgfHwgXG4gICAgICAgICAgICAgICAgZGlyZWN0aW9uID09PSBcImxlZnRcIiAmJiB0aGlzLmN1cnJlbnRQaWVjZS5sZWZ0U2lkZUJsb2NrZWQodGhpcy5maWVsZCkgXG4gICAgICAgICAgICAgICAgfHwgXG4gICAgICAgICAgICAgICAgZGlyZWN0aW9uID09PSBcImRvd25cIiAmJiAhdGhpcy5jdXJyZW50UGllY2UuaXNGYWxsaW5nKHRoaXMuZmllbGQpXG4gICAgICAgICAgICAgICAgfHwgXG4gICAgICAgICAgICAgICAgdGhpcy5rZXlIZWxkLnJpZ2h0ICYmIHRoaXMua2V5SGVsZC5sZWZ0XG4gICAgICAgICAgICApIHJldHVybjsgXG5cbiAgICAgICAgICAgIHRoaXMuY3VycmVudFBpZWNlLm1vdmUoZGlyZWN0aW9uKTtcblxuICAgICAgICAgICAgdGhpcy5jdXJyZW50UGllY2UucG9wdWxhdGVGaWVsZCh0aGlzLmZpZWxkKTtcblxuICAgICAgICAgICAgLy8gZG9uJ3QgbmVlZCB0byByZS1wb3B1bGF0ZSBnaG9zdCBwb3NpdGlvbiBpZiB0aGUgcGllY2UgaXMgc29mdC1kcm9wcGluZ1xuICAgICAgICAgICAgaWYgKGRpcmVjdGlvbiAhPT0gXCJkb3duXCIpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmNsZWFyR2hvc3RQb3NpdGlvbigpO1xuICAgICAgICAgICAgICAgIHRoaXMuc2V0R2hvc3RQb3NpdGlvbigpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB0aGlzLnJlbmRlcigpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgaGFuZGxlVG9wUGllY2UoKSB7XG4gICAgICAgIGxldCBhdFRvcCA9IGZhbHNlO1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgd2hpbGUgKHRoaXMuZmllbGRbdGhpcy5jdXJyZW50UGllY2UucG9zaXRpb24uYm90dG9tWzBdWzBdXVszXSB8fCB0aGlzLmZpZWxkW3RoaXMuY3VycmVudFBpZWNlLnBvc2l0aW9uLmJvdHRvbVswXVswXV1bNF0gfHwgdGhpcy5maWVsZFt0aGlzLmN1cnJlbnRQaWVjZS5wb3NpdGlvbi5ib3R0b21bMF1bMF1dWzVdIHx8IHRoaXMuZmllbGRbdGhpcy5jdXJyZW50UGllY2UucG9zaXRpb24uYm90dG9tWzBdWzBdXVs2XSkge1xuICAgICAgICAgICAgICAgIHRoaXMuY3VycmVudFBpZWNlLm1vdmUoXCJ1cFwiLCB0aGlzLmZpZWxkKTtcbiAgICAgICAgICAgICAgICBhdFRvcCA9IHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gY2F0Y2gge1xuICAgICAgICAgICAgdGhpcy5nYW1lT3Zlcih0aGlzLm9wcG9uZW50LmdhbWVOdW0pO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBhdFRvcDtcbiAgICB9XG4gICAgXG4gICAgcGxheSgpIHtcbiAgICAgICAgdGhpcy5zZXRDdXJyZW50UGllY2UoKTtcbiAgICAgICAgdGhpcy5oYW5kbGVUb3BQaWVjZSgpO1xuICAgICAgICB0aGlzLmN1cnJlbnRQaWVjZS5wb3B1bGF0ZUZpZWxkKHRoaXMuZmllbGQpO1xuICAgICAgICB0aGlzLmFkZFRvQ3VycmVudEJhZygpO1xuICAgICAgICB0aGlzLnNob3dDdXJyZW50QmFnKCk7XG4gICAgICAgIGlmICghdGhpcy5uZXh0QmFnLmxlbmd0aCkgdGhpcy5yZWZpbGxOZXh0QmFnKCk7XG4gICAgICAgIHRoaXMuc2V0R2hvc3RQb3NpdGlvbigpO1xuICAgICAgICAvLyBkcm9wIHBpZWNlIGF0IGdpdmVuIGZwc1xuICAgICAgICB0aGlzLmRyb3BQaWVjZSh0aGlzLmRyb3BTcGVlZCk7ICAgIFxuICAgIH1cblxuICAgIGdhbWVPdmVyKHdpbm5lcikge1xuICAgICAgICB0aGlzLmRyb3BTcGVlZCA9IDA7XG4gICAgICAgIGNhbmNlbEFuaW1hdGlvbkZyYW1lKHRoaXMub3Bwb25lbnQuaGFuZGxlQ2xlYXIuZHJvcCk7XG4gICAgICAgIGxldCBnYW1lT3ZlclNjcmVlbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIGdhbWVPdmVyU2NyZWVuLmNsYXNzTGlzdC5hZGQoXCJnYW1lLW92ZXItZGl2XCIpO1xuICAgICAgICBcbiAgICAgICAgbGV0IGdhbWVPdmVySGVhZGluZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMlwiKTtcbiAgICAgICAgZ2FtZU92ZXJIZWFkaW5nLmNsYXNzTGlzdC5hZGQoXCJnYW1lLW92ZXItaGVhZGluZ1wiKTtcblxuICAgICAgICBnYW1lT3ZlckhlYWRpbmcuaW5uZXJIVE1MID0gXCJHQU1FIE9WRVJcIjtcbiAgICAgICAgZ2FtZU92ZXJTY3JlZW4uYXBwZW5kKGdhbWVPdmVySGVhZGluZyk7XG5cbiAgICAgICAgbGV0IHdpbm5lckhlYWRpbmc7XG4gICAgICAgIGlmICh3aW5uZXIpICB7XG4gICAgICAgICAgICB3aW5uZXJIZWFkaW5nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgyXCIpO1xuICAgICAgICAgICAgd2lubmVySGVhZGluZy5jbGFzc0xpc3QuYWRkKFwiZ2FtZS1vdmVyLWhlYWRpbmdcIik7XG4gICAgICAgICAgICB3aW5uZXJIZWFkaW5nLmlubmVySFRNTCA9IGBQTEFZRVIgJHt3aW5uZXJ9IFdJTlNgO1xuICAgICAgICAgICAgZ2FtZU92ZXJTY3JlZW4uYXBwZW5kKHdpbm5lckhlYWRpbmcpXG4gICAgICAgIH0gICBcblxuICAgICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGdhbWVPdmVyU2NyZWVuKTtcblxuICAgICAgICB0aGlzLmdhbWVJc092ZXIgPSB0cnVlO1xuICAgICAgICBpZiAoIXRoaXMub3Bwb25lbnQpIHRoaXMuc3RvcFRpbWVyKCk7XG4gICAgfVxuXG4gICAgLy8gbXVsdGlwbGF5ZXIgXG4gICAgc2V0T3Bwb25lbnQocGxheWVyKSB7XG4gICAgICAgIHRoaXMub3Bwb25lbnQgPSBwbGF5ZXI7XG4gICAgfVxuXG4gICAgYWRkTGluZXNUb1F1ZXVlKG51bUxpbmVzKSB7XG4gICAgICAgIHRoaXMudXBjb21pbmdMaW5lcyArPSBudW1MaW5lcztcbiAgICAgICAgbGV0IHBlcmNlbnRhZ2UgPSB0aGlzLnVwY29taW5nTGluZXMgKiA1O1xuICAgICAgICBhZGp1c3RRdWV1ZUhlaWdodCh0aGlzLmdhbWVOdW0sIHBlcmNlbnRhZ2UpO1xuICAgIH1cblxuICAgIHJlY2VpdmVVcGNvbWluZ0xpbmVzKCkge1xuICAgICAgICBsZXQgZ2FyYmFnZUxpbmVzID0gW107XG4gICAgICAgIGxldCBudW1MaW5lcyA9IHRoaXMudXBjb21pbmdMaW5lcztcbiAgICAgICAgbGV0IHJhbmRvbUhvbGU7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbnVtTGluZXM7IGkrKykge1xuICAgICAgICAgICAgaWYgKGkgJSAyID09PSAwKSByYW5kb21Ib2xlID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogOSk7XG4gICAgICAgICAgICBsZXQgZ2FyYmFnZVJvdyA9IFs4LCA4LCA4LCA4LCA4LCA4LCA4LCA4LCA4LCA4XTtcbiAgICAgICAgICAgIGdhcmJhZ2VSb3dbcmFuZG9tSG9sZV0gPSAwO1xuICAgICAgICAgICAgZ2FyYmFnZUxpbmVzLnB1c2goZ2FyYmFnZVJvdyk7XG4gICAgICAgIH1cbiAgICAgICAgLy8gaWYgcGxheWVyIHJlYWNoZXMgdGhlIHRvcCwgcGxheWVyIGxvc2VzXG4gICAgICAgIC8vIHNsaWNlIGFsbG93cyBwbGF5ZXIgdG8gY29udGludWUgcGxheWluZyBpZiB0b3AgbWlkZGxlIGlzIGNsZWFyXG4gICAgICAgIGlmICh0aGlzLmZpZWxkW251bUxpbmVzIC0gMV0gJiYgIXRoaXMuZmllbGRbbnVtTGluZXMgLSAxXS5zbGljZSgyLDcpLmluY2x1ZGVzKDApKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5maWVsZCA9IHRoaXMuZmllbGQuc2xpY2UobnVtTGluZXMsIDIwKS5jb25jYXQoZ2FyYmFnZUxpbmVzKTtcbiAgICAgICAgdGhpcy51cGNvbWluZ0xpbmVzID0gMDtcbiAgICAgICAgdGhpcy5yZW5kZXIoKTtcbiAgICB9XG5cbiAgICAvLyBzaW5nbGUgcGxheWVyXG4gICAgc3RhcnRFbGV2YXRpbmcoZWxldmF0ZURlbGF5KSB7XG4gICAgICAgIHRoaXMuY2xlYXJFbGV2YXRlSW50ZXJ2YWwgPSBzZXRJbnRlcnZhbCgoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLmNsZWFyR2hvc3RQb3NpdGlvbigpO1xuICAgICAgICAgICAgdGhpcy5jdXJyZW50UGllY2UuY2xlYXJTZWxmRnJvbUJvYXJkKHRoaXMuZmllbGQpO1xuICAgICAgICAgICAgdGhpcy51cGNvbWluZ0xpbmVzICs9IDE7XG4gICAgICAgICAgICB0aGlzLnJlY2VpdmVVcGNvbWluZ0xpbmVzKCk7XG4gICAgICAgICAgICB0aGlzLnNldEdob3N0UG9zaXRpb24oKTtcbiAgICAgICAgICAgIHRoaXMuY3VycmVudFBpZWNlLnBvcHVsYXRlRmllbGQodGhpcy5maWVsZCk7XG4gICAgICAgICAgICB0aGlzLnJlbmRlcigpO1xuICAgICAgICB9LCBlbGV2YXRlRGVsYXkpXG4gICAgfVxuXG4gICAgYWRqdXN0RWxldmF0ZSgpIHtcbiAgICAgICAgc2V0SW50ZXJ2YWwoKCkgPT4ge1xuICAgICAgICAgICAgaWYgKHRoaXMuY2xlYXJFbGV2YXRlSW50ZXJ2YWwpIGNsZWFySW50ZXJ2YWwodGhpcy5jbGVhckVsZXZhdGVJbnRlcnZhbCk7XG4gICAgICAgICAgICBpZiAodGhpcy5lbGV2YXRlRGVsYXkgPiAyMDAwKSB0aGlzLmVsZXZhdGVEZWxheSAtPSAyMDA7XG4gICAgICAgICAgICB0aGlzLnN0YXJ0RWxldmF0aW5nKHRoaXMuZWxldmF0ZURlbGF5KTtcbiAgICAgICAgfSwgMTAwMDApO1xuICAgIH1cblxuICAgIHN0YXJ0VGltZXIoKSB7XG4gICAgICAgIGxldCBtaW51dGVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1pbnV0ZXMnKTtcbiAgICAgICAgbGV0IHNlY29uZHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2Vjb25kcycpO1xuICAgICAgICB0aGlzLmNsZWFyVGltZXIgPSBzZXRJbnRlcnZhbCgoKSA9PiB7XG4gICAgICAgICAgICBsZXQgb2xkU2Vjb25kID0gTnVtYmVyKHNlY29uZHMuaW5uZXJIVE1MKTtcbiAgICAgICAgICAgIGxldCBvbGRNaW51dGUgPSBOdW1iZXIobWludXRlcy5pbm5lckhUTUwpO1xuICAgICAgICAgICAgaWYgKG9sZFNlY29uZCArIDEgPT09IDYwKSB7XG4gICAgICAgICAgICAgICAgc2Vjb25kcy5pbm5lckhUTUwgPSAwO1xuICAgICAgICAgICAgICAgIG1pbnV0ZXMuaW5uZXJIVE1MID0gb2xkTWludXRlICsgMTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgbGV0IG5ld1NlY29uZHMgPSBOdW1iZXIoc2Vjb25kcy5pbm5lckhUTUwpICsgMSA8IDEwID8gYDAke051bWJlcihzZWNvbmRzLmlubmVySFRNTCkgKyAxfWAgOiBOdW1iZXIoc2Vjb25kcy5pbm5lckhUTUwpICsgMTtcbiAgICAgICAgICAgICAgICBzZWNvbmRzLmlubmVySFRNTCA9IG5ld1NlY29uZHM7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sIDEwMDApXG4gICAgfVxuXG4gICAgc3RvcFRpbWVyKCkge1xuICAgICAgICBjbGVhckludGVydmFsKHRoaXMuY2xlYXJUaW1lcik7XG4gICAgfVxuXG4gICAgY2hhbmdlQ29udHJvbHMoKSB7XG4gICAgICAgIHRoaXMuY29udHJvbHMgPSB7IGxlZnQ6IDM3LCByaWdodDogMzksIHR1cm5SaWdodDogMzgsIHNvZnREcm9wOiA0MCwgaG9sZDogMTYsIHR1cm5MZWZ0OiA2NywgaGFyZERyb3A6IDMyIH1cbiAgICB9XG59IiwiaW1wb3J0IE1lbnUgZnJvbSAnLi9tZW51L21lbnUnXG5cbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsICgpID0+IHtcbiAgICBjb25zdCBtZW51ID0gbmV3IE1lbnU7XG4gICAgbWVudS5yZW5kZXJNZW51KCk7XG59KTsiLCJpbXBvcnQgR2FtZSBmcm9tICcuLi9nYW1lL2dhbWUnO1xuaW1wb3J0IEZpZWxkIGZyb20gJy4uL2ZpZWxkL2ZpZWxkJztcbmltcG9ydCBNdWx0aXBsYXllciBmcm9tICcuLi9tdWx0aXBsYXllci9tdWx0aXBsYXllcic7XG5pbXBvcnQgTW9kYWwgZnJvbSAnLi4vbW9kYWwvbW9kYWwnO1xuaW1wb3J0IFNpbmdsZVBsYXllckNvbnRlbnQgZnJvbSAnLi4vbW9kYWwvc2luZ2xlUGxheWVyQ29udGVudCc7XG5pbXBvcnQgTXVsdGlwbGF5ZXJDb250ZW50IGZyb20gJy4uL21vZGFsL211bHRpcGxheWVyQ29udGVudCc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE1lbnUge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLm1lbnUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm1lbnVcIik7XG5cbiAgICAgICAgdGhpcy5vcHRpb25zUGxheWVyMSA9IHsgZ2FtZU51bTogMSwgbW92ZVNwZWVkOiAyMCwgY29udHJvbHM6IHsgbGVmdDogNjUsIHJpZ2h0OiA2OCwgdHVyblJpZ2h0OiA4Nywgc29mdERyb3A6IDgzLCBob2xkOiA4MSwgdHVybkxlZnQ6IDE5MiwgaGFyZERyb3A6IDQ5IH0gfVxuICAgICAgICB0aGlzLm9wdGlvbnNQbGF5ZXIyID0geyBnYW1lTnVtOiAyLCBtb3ZlU3BlZWQ6IDIwLCBjb250cm9sczogeyBsZWZ0OiAzNywgcmlnaHQ6IDM5LCB0dXJuUmlnaHQ6IDM4LCBzb2Z0RHJvcDogNDAsIGhvbGQ6IDE2LCB0dXJuTGVmdDogNzUsIGhhcmREcm9wOiAxOTAgfSB9XG4gICAgICAgICAgICBcblxuICAgICAgICB0aGlzLmdhbWUxID0gbmV3IEdhbWUodGhpcy5vcHRpb25zUGxheWVyMSk7XG4gICAgICAgIHRoaXMuZ2FtZTIgPSBuZXcgR2FtZSh0aGlzLm9wdGlvbnNQbGF5ZXIyKTtcblxuICAgICAgICB0aGlzLmZpZWxkMSA9IG5ldyBGaWVsZCgxKTtcbiAgICAgICAgdGhpcy5maWVsZDIgPSBuZXcgRmllbGQoMik7XG5cbiAgICAgICAgdGhpcy5tdWx0aXBsYXllck1vZGUgPSBuZXcgTXVsdGlwbGF5ZXIodGhpcy5nYW1lMSwgdGhpcy5nYW1lMik7XG5cbiAgICAgICAgdGhpcy5maWVsZENvbnRhaW5lcjEgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImZpZWxkLWNvbnRhaW5lci0xXCIpO1xuICAgICAgICB0aGlzLmZpZWxkQ29udGFpbmVyMiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZmllbGQtY29udGFpbmVyLTJcIik7XG5cbiAgICAgICAgdGhpcy5zaW5nbGVQbGF5ZXJDb250ZW50ID0gbmV3IFNpbmdsZVBsYXllckNvbnRlbnQoKTtcbiAgICAgICAgdGhpcy5tdWx0aXBsYXllckNvbnRlbnQgPSBuZXcgTXVsdGlwbGF5ZXJDb250ZW50KCk7XG4gICAgICAgIHRoaXMubW9kYWwgPSBuZXcgTW9kYWwoKTtcbiAgICB9XG5cbiAgICByZW5kZXJCdXR0b25zKCkge1xuICAgICAgICBsZXQgc2luZ2xlUGxheWVyQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgbGV0IG11bHRpcGxheWVyQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcblxuICAgICAgICBzaW5nbGVQbGF5ZXJCdXR0b24uY2xhc3NMaXN0LmFkZChcInNpbmdsZS1wbGF5ZXItYnV0dG9uXCIpO1xuICAgICAgICBtdWx0aXBsYXllckJ1dHRvbi5jbGFzc0xpc3QuYWRkKFwibXVsdGlwbGF5ZXItYnV0dG9uXCIpO1xuXG4gICAgICAgIHNpbmdsZVBsYXllckJ1dHRvbi5pbm5lckhUTUwgPSBcIlNpbmdsZSBQbGF5ZXJcIjtcbiAgICAgICAgbXVsdGlwbGF5ZXJCdXR0b24uaW5uZXJIVE1MID0gXCJNdWx0aXBsYXllclwiO1xuXG4gICAgICAgIHRoaXMuYWRkRXZlbnRMaXN0ZW5lcnMoc2luZ2xlUGxheWVyQnV0dG9uLCBtdWx0aXBsYXllckJ1dHRvbik7XG5cbiAgICAgICAgcmV0dXJuIFtzaW5nbGVQbGF5ZXJCdXR0b24sIG11bHRpcGxheWVyQnV0dG9uXTtcbiAgICB9XG5cbiAgICBhZGRFdmVudExpc3RlbmVycyhzaW5nbGVQbGF5ZXJCdXR0b24sIG11bHRpcGxheWVyQnV0dG9uKSB7XG4gICAgICAgIHNpbmdsZVBsYXllckJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICAgIHRoaXMucmVuZGVyU2luZ2xlUGxheWVyKCk7XG4gICAgICAgIH0pO1xuICAgICAgICBtdWx0aXBsYXllckJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICAgIHRoaXMucmVuZGVyTXVsdGlwbGF5ZXIoKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmVuZGVyU2luZ2xlUGxheWVyKCkge1xuICAgICAgICBkb2N1bWVudC5ib2R5LnJlbW92ZUNoaWxkKHRoaXMubWVudSk7XG4gICAgICAgIGRvY3VtZW50LmJvZHkuc3R5bGUuanVzdGlmeUNvbnRlbnQgPSAnbm9uZSc7XG4gICAgICAgIHRoaXMuc2luZ2xlUGxheWVyQ29udGVudC5jcmVhdGVUaW1lckFuZENvbnRyb2xzKCk7XG4gICAgICAgIHRoaXMuZmllbGQxLmNyZWF0ZUNvbXBsZXRlRmllbGQodGhpcy5maWVsZENvbnRhaW5lcjEpO1xuICAgICAgICB0aGlzLmZpZWxkQ29udGFpbmVyMS5zdHlsZS5wb3NpdGlvbiA9ICdyZWxhdGl2ZSc7XG4gICAgICAgIHRoaXMuZmllbGRDb250YWluZXIxLnN0eWxlLmxlZnQgPSAnMTR2dyc7XG4gICAgICAgIHRoaXMuZ2FtZTEua2V5TGlzdGVuZXIoKTtcbiAgICAgICAgdGhpcy5nYW1lMS5jaGFuZ2VDb250cm9scygpO1xuICAgICAgICB0aGlzLmdhbWUxLnBsYXkoKTtcbiAgICAgICAgdGhpcy5nYW1lMS5zdGFydEVsZXZhdGluZyg1MDAwKTtcbiAgICAgICAgdGhpcy5nYW1lMS5hZGp1c3RFbGV2YXRlKCk7XG4gICAgICAgIHRoaXMuc2luZ2xlUGxheWVyQ29udGVudC5jcmVhdGVUaW1lcigpO1xuICAgICAgICB0aGlzLmdhbWUxLnN0YXJ0VGltZXIoKTtcbiAgICB9XG5cbiAgICByZW5kZXJNdWx0aXBsYXllcigpIHtcbiAgICAgICAgZG9jdW1lbnQuYm9keS5yZW1vdmVDaGlsZCh0aGlzLm1lbnUpO1xuICAgICAgICB0aGlzLmZpZWxkMS5jcmVhdGVDb21wbGV0ZUZpZWxkKHRoaXMuZmllbGRDb250YWluZXIxKTtcbiAgICAgICAgdGhpcy5nYW1lMS5rZXlMaXN0ZW5lcigpO1xuXG4gICAgICAgIHRoaXMuZmllbGQyLmNyZWF0ZUNvbXBsZXRlRmllbGQodGhpcy5maWVsZENvbnRhaW5lcjIpO1xuICAgICAgICB0aGlzLmdhbWUyLmtleUxpc3RlbmVyKCk7XG5cbiAgICAgICAgbGV0IGNvbnRyb2xzQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGNvbnRyb2xzQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2NvbnRyb2xzLWNvbnRhaW5lcicpXG4gICAgICAgIGNvbnRyb2xzQ29udGFpbmVyLmFwcGVuZENoaWxkKHRoaXMubXVsdGlwbGF5ZXJDb250ZW50LmNyZWF0ZUNvbnRyb2xzQ29udGVudCgncGxheWVyMScpKTtcbiAgICAgICAgY29udHJvbHNDb250YWluZXIuYXBwZW5kQ2hpbGQodGhpcy5tdWx0aXBsYXllckNvbnRlbnQuY3JlYXRlQ29udHJvbHNDb250ZW50KCdwbGF5ZXIyJykpO1xuICAgICAgICB0aGlzLm1vZGFsLmNyZWF0ZSgpO1xuICAgICAgICB0aGlzLm1vZGFsLmFwcGVuZENoaWxkKGNvbnRyb2xzQ29udGFpbmVyKTtcbiAgICAgICAgdGhpcy5tb2RhbC5hcHBlbmRDaGlsZCh0aGlzLl9jcmVhdGVDbG9zZU1vZGFsTGluaygpKTtcbiAgICB9XG5cbiAgICByZW5kZXJNZW51KCkge1xuICAgICAgICBsZXQgYnV0dG9uQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgYnV0dG9uQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJidXR0b24tY29udGFpbmVyXCIpO1xuICAgICAgICB0aGlzLnJlbmRlckJ1dHRvbnMoKS5mb3JFYWNoKGJ1dHRvbiA9PiB7XG4gICAgICAgICAgICBidXR0b25Db250YWluZXIuYXBwZW5kQ2hpbGQoYnV0dG9uKTtcbiAgICAgICAgfSlcbiAgICAgICAgdGhpcy5tZW51LmFwcGVuZENoaWxkKGJ1dHRvbkNvbnRhaW5lcik7XG4gICAgfVxuXG4gICAgX2NyZWF0ZUNsb3NlTW9kYWxMaW5rKCkge1xuICAgICAgICBsZXQgY2xvc2VMaW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGNsb3NlTGluay5jbGFzc0xpc3QuYWRkKCdjbG9zZS1tb2RhbC1saW5rJyk7XG4gICAgICAgIGNsb3NlTGluay5pbm5lckhUTUwgPSBcIkxldCdzIGdldCBzdGFydGVkLlwiO1xuXG4gICAgICAgIGNsb3NlTGluay5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICAgIHRoaXMubW9kYWwucmVtb3ZlKCk7XG4gICAgICAgICAgICB0aGlzLm11bHRpcGxheWVyTW9kZS5zdGFydE11bHRpcGxheWVyKCk7XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gY2xvc2VMaW5rO1xuICAgIH1cbn0iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBNb2RhbCB7XG4gICAgY3JlYXRlKCkge1xuICAgICAgICBsZXQgbW9kYWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgbW9kYWwuY2xhc3NMaXN0LmFkZCgnY29udHJvbHMtbW9kYWwnKTtcbiAgICAgICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChtb2RhbCk7XG4gICAgfVxuICAgIFxuICAgIGFwcGVuZENoaWxkKGNvbnRlbnQpIHtcbiAgICAgICAgbGV0IG1vZGFsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbnRyb2xzLW1vZGFsJyk7XG4gICAgICAgIG1vZGFsLmFwcGVuZENoaWxkKGNvbnRlbnQpO1xuICAgIH1cblxuICAgIHJlbW92ZSgpIHtcbiAgICAgICAgbGV0IG1vZGFsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbnRyb2xzLW1vZGFsJyk7XG4gICAgICAgIG1vZGFsLnJlbW92ZSgpO1xuICAgIH1cbn0iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBNdWx0aXBsYXllckNvbnRlbnQge1xuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgICAgIHRoaXMua2V5cyA9IHtcbiAgICAgICAgICAgIHBsYXllcjE6IHtcbiAgICAgICAgICAgICAgICAnd19rZXknOiAnVFVSTiBSSUdIVCcsXG4gICAgICAgICAgICAgICAgJ2Ffa2V5JzogJ0xFRlQnLFxuICAgICAgICAgICAgICAgICdzX2tleSc6ICdTT0ZUIERST1AnLFxuICAgICAgICAgICAgICAgICdkX2tleSc6ICdSSUdIVCcsXG4gICAgICAgICAgICAgICAgJ2Bfa2V5JzogJ1RVUk4gTEVGVCcsXG4gICAgICAgICAgICAgICAgJ3Ffa2V5JzogJ0hPTEQnLFxuICAgICAgICAgICAgICAgICcxX2tleSc6ICdIQVJERFJPUCdcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBwbGF5ZXIyOiB7XG4gICAgICAgICAgICAgICAgJ3VwX2tleSc6ICdUVVJOIFJJR0hUJyxcbiAgICAgICAgICAgICAgICAnbGVmdF9rZXknOiAnTEVGVCcsXG4gICAgICAgICAgICAgICAgJ2Rvd25fa2V5JzogJ1NPRlQgRFJPUCcsXG4gICAgICAgICAgICAgICAgJ3JpZ2h0X2tleSc6ICdSSUdIVCcsXG4gICAgICAgICAgICAgICAgJ2tfa2V5JzogJ1RVUk4gTEVGVCcsXG4gICAgICAgICAgICAgICAgJ3NoaWZ0X2tleSc6ICdIT0xEJyxcbiAgICAgICAgICAgICAgICAncGVyaW9kX2tleSc6ICdIQVJERFJPUCdcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcblxuICAgIH1cblxuICAgIGNyZWF0ZUNvbnRyb2xzQ29udGVudChwbGF5ZXIpIHtcbiAgICAgICAgbGV0IGNvbnRyb2xzRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGNvbnRyb2xzRGl2LmNsYXNzTGlzdC5hZGQoJ2NvbnRyb2xzJyk7XG4gICAgICAgIGxldCBpbWFnZXMgPSBPYmplY3Qua2V5cyh0aGlzLmtleXNbcGxheWVyXSk7XG4gICAgICAgIGxldCBkZXNjcmlwdGlvbnMgPSBPYmplY3QudmFsdWVzKHRoaXMua2V5c1twbGF5ZXJdKTtcblxuICAgICAgICAvLyBpbml0aWFsaXplIGFycmF5cyBvZiBzcGFucyBhbmQgZGl2c1xuICAgICAgICBsZXQgc3BhbnMgPSBbXTtcbiAgICAgICAgbGV0IGRpdnMgPSBbXTtcblxuICAgICAgICBsZXQgbGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoZWFkZXInKTtcbiAgICAgICAgbGFiZWwuaW5uZXJIVE1MID0gYFBMQVlFUiAke3BsYXllci5zbGljZSg2KX1gXG4gICAgICAgIGNvbnRyb2xzRGl2LmFwcGVuZENoaWxkKGxhYmVsKTtcblxuICAgICAgICAvLyBjcmVhdGUgZWxlbWVudHMgYW5kIHN0b3JlIGludG8gYXJyYXkgaW5kaWNlcyBmb3IgbGF0ZXIgcmVmZXJlbmNlXG4gICAgICAgIGZvciAobGV0IGkgPSAxOyBpIDw9IDc7IGkrKykge1xuICAgICAgICAgICAgc3BhbnNbaV0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gICAgICAgICAgICBpZiAoaSA8PSAzKSBkaXZzW2ldID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIH1cblxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGltYWdlcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgbGV0IHAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgICAgICAgICBsZXQgaW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gICAgICAgICAgICBpbWcuY2xhc3NMaXN0LmFkZCgna2V5Ym9hcmQta2V5Jyk7XG4gICAgICAgICAgICBpZiAoaSA9PT0gNSAmJiBwbGF5ZXIgPT09IFwicGxheWVyMlwiKSBpbWcuY2xhc3NMaXN0LmFkZCgnc2hpZnQta2V5Jyk7XG5cbiAgICAgICAgICAgIHAuaW5uZXJIVE1MID0gZGVzY3JpcHRpb25zW2ldO1xuICAgICAgICAgICAgaW1nLnNldEF0dHJpYnV0ZSgnc3JjJywgYC4vYXNzZXRzL2ltYWdlcy8ke2ltYWdlc1tpXX0ucG5nYCk7XG5cbiAgICAgICAgICAgIHNwYW5zW2kgKyAxXS5hcHBlbmQoaW1nKTtcbiAgICAgICAgICAgIHNwYW5zW2kgKyAxXS5hcHBlbmQocCk7XG5cbiAgICAgICAgICAgIGlmIChpIDwgMSkge1xuICAgICAgICAgICAgICAgIGRpdnNbMV0uYXBwZW5kKHNwYW5zW2kgKyAxXSk7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKGkgPCA0KSB7XG4gICAgICAgICAgICAgICAgZGl2c1syXS5hcHBlbmQoc3BhbnNbaSArIDFdKTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoaSA8IDcpIHtcbiAgICAgICAgICAgICAgICBkaXZzWzNdLmFwcGVuZChzcGFuc1tpICsgMV0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgZm9yIChsZXQgaSA9IDE7IGkgPD0gMzsgaSsrKSB7XG4gICAgICAgICAgICBjb250cm9sc0Rpdi5hcHBlbmQoZGl2c1tpXSk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gY29udHJvbHNEaXY7XG4gICAgfVxufSIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIFNpbmdsZVBsYXllckNvbnRlbnQge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLmtleXMgPSB7XG4gICAgICAgICAgICAnbGVmdF9rZXknOiAnTEVGVCcsXG4gICAgICAgICAgICAncmlnaHRfa2V5JzogJ1JJR0hUJyxcbiAgICAgICAgICAgICdkb3duX2tleSc6ICdTT0ZUIERST1AnLFxuICAgICAgICAgICAgJ3VwX2tleSc6ICdUVVJOIFJJR0hUJyxcbiAgICAgICAgICAgICdjX2tleSc6ICdUVVJOIExFRlQnLFxuICAgICAgICAgICAgJ3NoaWZ0X2tleSc6ICdIT0xEJyxcbiAgICAgICAgICAgICdzcGFjZV9rZXknOiAnSEFSRERST1AnLFxuICAgICAgICB9O1xuICAgIH1cblxuICAgIGNyZWF0ZVRpbWVyQW5kQ29udHJvbHMoKSB7XG4gICAgICAgIGxldCB0aW1lckFuZENvbnRyb2xzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIHRpbWVyQW5kQ29udHJvbHMuYXBwZW5kQ2hpbGQodGhpcy5jcmVhdGVUaW1lcigpKTtcbiAgICAgICAgdGltZXJBbmRDb250cm9scy5hcHBlbmRDaGlsZCh0aGlzLmNyZWF0ZUNvbnRyb2xzQ29udGVudCgpKTtcbiAgICAgICAgZG9jdW1lbnQuYm9keS5hcHBlbmQodGltZXJBbmRDb250cm9scyk7XG4gICAgfVxuXG4gICAgY3JlYXRlQ29udHJvbHNDb250ZW50KCkge1xuICAgICAgICBsZXQgY29udGVudERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBjb250ZW50RGl2LmNsYXNzTGlzdC5hZGQoJ2NvbnRyb2xzJyk7XG4gICAgICAgIGxldCBpbWFnZXMgPSBPYmplY3Qua2V5cyh0aGlzLmtleXMpO1xuICAgICAgICBsZXQgZGVzY3JpcHRpb25zID0gT2JqZWN0LnZhbHVlcyh0aGlzLmtleXMpO1xuXG4gICAgICAgIC8vIGluaXRpYWxpemUgYXJyYXlzIG9mIHNwYW5zIGFuZCBkaXZzXG4gICAgICAgIGxldCBzcGFucyA9IFtdO1xuICAgICAgICBsZXQgZGl2cyA9IFtdO1xuXG4gICAgICAgIC8vIGNyZWF0ZSBlbGVtZW50cyBhbmQgc3RvcmUgaW50byBhcnJheSBpbmRpY2VzIGZvciBsYXRlciByZWZlcmVuY2VcbiAgICAgICAgZm9yIChsZXQgaSA9IDE7IGkgPD0gNzsgaSsrKSB7XG4gICAgICAgICAgICBzcGFuc1tpXSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgICAgICAgICAgIGlmIChpIDw9IDQpIGRpdnNbaV0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgaW1hZ2VzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBsZXQgcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICAgICAgICAgIGxldCBpbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgICAgICAgICAgIGltZy5jbGFzc0xpc3QuYWRkKCdrZXlib2FyZC1rZXknKTtcbiAgICAgICAgICAgIGlmIChpID09PSA1KSBpbWcuY2xhc3NMaXN0LmFkZCgnc2hpZnQta2V5Jyk7XG4gICAgICAgICAgICBpZiAoaSA9PT0gNikgaW1nLmNsYXNzTGlzdC5hZGQoJ3NwYWNlLWtleScpO1xuXG4gICAgICAgICAgICBwLmlubmVySFRNTCA9IGRlc2NyaXB0aW9uc1tpXTtcbiAgICAgICAgICAgIGltZy5zZXRBdHRyaWJ1dGUoJ3NyYycsIGAuL2Fzc2V0cy9pbWFnZXMvJHtpbWFnZXNbaV19LnBuZ2ApO1xuXG4gICAgICAgICAgICBzcGFuc1tpICsgMV0uYXBwZW5kKGltZyk7XG4gICAgICAgICAgICBzcGFuc1tpICsgMV0uYXBwZW5kKHApO1xuXG4gICAgICAgICAgICBpZiAoaSA8IDIpIHtcbiAgICAgICAgICAgICAgICBkaXZzWzFdLmFwcGVuZChzcGFuc1tpICsgMV0pO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChpIDwgNCkge1xuICAgICAgICAgICAgICAgIGRpdnNbMl0uYXBwZW5kKHNwYW5zW2kgKyAxXSk7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKGkgPCA2KSB7XG4gICAgICAgICAgICAgICAgZGl2c1szXS5hcHBlbmQoc3BhbnNbaSArIDFdKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgZGl2c1s0XS5hcHBlbmQoc3BhbnNbaSArIDFdKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGZvciAobGV0IGkgPSAxOyBpIDw9IDQ7IGkrKykge1xuICAgICAgICAgICAgY29udGVudERpdi5hcHBlbmQoZGl2c1tpXSk7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIHJldHVybiBjb250ZW50RGl2O1xuICAgIH1cblxuICAgIGNyZWF0ZVRpbWVyKCkge1xuICAgICAgICBsZXQgdGltZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgbGV0IG1pbnV0ZXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgICAgIGxldCBzZWNvbmRzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgICAgICBsZXQgY29sb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgICAgIHRpbWVyLmNsYXNzTGlzdC5hZGQoJ3RpbWVyJyk7XG4gICAgICAgIG1pbnV0ZXMuY2xhc3NMaXN0LmFkZCgnbWludXRlcycpO1xuICAgICAgICBzZWNvbmRzLmNsYXNzTGlzdC5hZGQoJ3NlY29uZHMnKTtcbiAgICAgICAgY29sb24uY2xhc3NMaXN0LmFkZCgnY29sb24nKTtcbiAgICAgICAgbWludXRlcy5pbm5lckhUTUwgPSAnMCc7XG4gICAgICAgIHNlY29uZHMuaW5uZXJIVE1MID0gJzAwJztcbiAgICAgICAgY29sb24uaW5uZXJIVE1MID0gJzonO1xuICAgICAgICBbbWludXRlcywgY29sb24sIHNlY29uZHNdLmZvckVhY2goZWxlID0+IHRpbWVyLmFwcGVuZENoaWxkKGVsZSkpO1xuICAgICAgICByZXR1cm4gdGltZXI7XG4gICAgfVxuXG4gICAgXG59IiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgTXVsdGlwbGF5ZXIge1xuICAgIGNvbnN0cnVjdG9yKHBsYXllcjEsIHBsYXllcjIpIHtcbiAgICAgICAgdGhpcy5wbGF5ZXIxID0gcGxheWVyMTtcbiAgICAgICAgdGhpcy5wbGF5ZXIyID0gcGxheWVyMjtcbiAgICB9XG5cbiAgICBzdGFydE11bHRpcGxheWVyKCkge1xuICAgICAgICB0aGlzLnBsYXllcjEuc2V0T3Bwb25lbnQodGhpcy5wbGF5ZXIyKTtcbiAgICAgICAgdGhpcy5wbGF5ZXIyLnNldE9wcG9uZW50KHRoaXMucGxheWVyMSk7XG4gICAgICAgIHRoaXMucGxheWVyMS5wbGF5KCk7XG4gICAgICAgIHRoaXMucGxheWVyMi5wbGF5KCk7XG4gICAgfVxufVxuIiwiaW1wb3J0IFBpZWNlIGZyb20gJy4vcGllY2UnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBJUGllY2UgZXh0ZW5kcyBQaWVjZSB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIHRoaXMubmFtZSA9IFwiSVBpZWNlXCI7XG4gICAgICAgIHRoaXMucG9zaXRpb24gPSB7XG4gICAgICAgICAgICB0b3A6IFtdLFxuICAgICAgICAgICAgbWlkZGxlOiBbXSxcbiAgICAgICAgICAgIGJvdHRvbTogW1sxLCAzXSwgWzEsIDRdLCBbMSwgNV0sIFsxLCA2XV1cbiAgICAgICAgfTtcbiAgICAgICAgdGhpcy5jb2xvckNvZGUgPSAyO1xuICAgICAgICB0aGlzLnR1cm5pbmdQb2ludCA9IFsxLCA0XTtcbiAgICAgICAgdGhpcy5kaXNwbGF5U3F1YXJlcyA9IFtbMCwgMl0sIFsxLCAyXSwgWzIsIDJdLCBbMywgMl1dO1xuXG4gICAgICAgIHRoaXMucmVtb3ZlU3F1YXJlcyA9IFtdO1xuXG4gICAgICAgIHRoaXMub2Zmc2V0R3VpZGUgPSB7XG4gICAgICAgICAgICAwOiBbWzAsIDBdLCBbMCwgLTFdLCBbMCwgMl0sIFswLCAtMV0sIFswLCAyXV0sXG4gICAgICAgICAgICAxOiBbWzAsIC0xXSwgWzAsIDBdLCBbMCwgMF0sIFsxLCAwXSwgWy0yLCAwXV0sXG4gICAgICAgICAgICAyOiBbWzEsIC0xXSwgWzEsIDFdLCBbMSwgLTJdLCBbMCwgMV0sIFswLCAtMl1dLFxuICAgICAgICAgICAgMzogW1sxLCAwXSwgWzEsIDBdLCBbMSwgMF0sIFstMSwgMF0sIFsyLCAwXV1cbiAgICAgICAgfVxuICAgIH1cblxuXG59XG5cblxuIiwiaW1wb3J0IFBpZWNlIGZyb20gJy4vcGllY2UnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBqUGllY2UgZXh0ZW5kcyBQaWVjZSB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIHRoaXMubmFtZSA9IFwiSlBpZWNlXCI7XG4gICAgICAgIHRoaXMucG9zaXRpb24gPSB7XG4gICAgICAgICAgICB0b3A6IFtbMCwgM11dLFxuICAgICAgICAgICAgbWlkZGxlOiBbXSxcbiAgICAgICAgICAgIGJvdHRvbTogW1sxLCAzXSwgWzEsIDRdLCBbMSwgNV1dXG4gICAgICAgIH07XG4gICAgICAgIHRoaXMuY29sb3JDb2RlID0gNztcblxuICAgICAgICB0aGlzLnR1cm5pbmdQb2ludCA9IFsxLCA0XTtcblxuICAgICAgICB0aGlzLmRpc3BsYXlTcXVhcmVzID0gW1sxLCAxXSwgWzEsIDJdLCBbMiwgMl0sIFszLCAyXV07XG4gXG4gICAgICAgIHRoaXMucmVtb3ZlU3F1YXJlcyA9IFtdO1xuICAgIH1cbn0iLCJpbXBvcnQgUGllY2UgZnJvbSAnLi9waWVjZSc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIGxQaWVjZSBleHRlbmRzIFBpZWNlIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgdGhpcy5uYW1lID0gXCJMUGllY2VcIjtcbiAgICAgICAgdGhpcy5wb3NpdGlvbiA9IHtcbiAgICAgICAgICAgIHRvcDogW1swLCA1XV0sXG4gICAgICAgICAgICBtaWRkbGU6IFtdLFxuICAgICAgICAgICAgYm90dG9tOiBbWzEsIDNdLCBbMSwgNF0sIFsxLCA1XV1cbiAgICAgICAgfTtcbiAgICAgICAgdGhpcy5jb2xvckNvZGUgPSA2O1xuXG4gICAgICAgIHRoaXMudHVybmluZ1BvaW50ID0gWzEsIDRdO1xuXG4gICAgICAgIHRoaXMuZGlzcGxheVNxdWFyZXMgPSBbWzEsIDJdLCBbMiwgMl0sIFszLCAyXSwgWzMsIDFdXTtcblxuICAgICAgICB0aGlzLnJlbW92ZVNxdWFyZXMgPSBbXTtcbiAgICB9XG59IiwiaW1wb3J0IFBpZWNlIGZyb20gJy4vcGllY2UnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBPUGllY2UgZXh0ZW5kcyBQaWVjZSB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIHRoaXMubmFtZSA9IFwiT1BpZWNlXCI7XG4gICAgICAgIHRoaXMucG9zaXRpb24gPSB7XG4gICAgICAgICAgICB0b3A6IFtbMCwgNF0sIFswLCA1XV0sXG4gICAgICAgICAgICBtaWRkbGU6IFtdLFxuICAgICAgICAgICAgYm90dG9tOiBbWzEsIDRdLFsxLCA1XV1cbiAgICAgICAgfTtcbiAgICAgICAgdGhpcy5jb2xvckNvZGUgPSAxO1xuICAgICAgICB0aGlzLnR1cm5pbmdQb2ludCA9IFsxLCA0XTtcbiAgICAgICAgdGhpcy5kaXNwbGF5U3F1YXJlcyA9IFtbMSwgMV0sIFsyLCAxXSwgWzEsIDJdLCBbMiwgMl1dO1xuXG4gICAgICAgIHRoaXMucmVtb3ZlU3F1YXJlcyA9IFtdO1xuICAgIH1cblxuICAgIC8vIE9QaWVjZSBkb2VzIG5vdCB0dXJuXG4gICAgdHVyblJpZ2h0KCkge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIFxuICAgIHR1cm5MZWZ0KCkge1xuICAgICAgICByZXR1cm47XG4gICAgfVxufSAiLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBQaWVjZSB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMubGVmdE1vc3QgPSAnJztcbiAgICAgICAgdGhpcy5yaWdodE1vc3QgPSAnJztcbiAgICAgICAgdGhpcy5ib3R0b21Nb3N0ID0gJyc7XG4gICAgICAgIHRoaXMudG9wTW9zdCA9ICcnO1xuXG4gICAgICAgIHRoaXMucm90YXRpb25TdGF0ZSA9IDA7XG5cbiAgICAgICAgdGhpcy5vZmZzZXRHdWlkZSA9IHtcbiAgICAgICAgICAgIDA6IFtbMCwgMF0sIFswLCAwXSwgWzAsIDBdLCBbMCwgMF0sIFswLCAwXV0sXG4gICAgICAgICAgICAxOiBbWzAsIDBdLCBbMCwgMV0sIFstMSwgMV0sIFsyLCAwXSwgWzIsIDFdXSxcbiAgICAgICAgICAgIDI6IFtbMCwgMF0sIFswLCAwXSwgWzAsIDBdLCBbMCwgMF0sIFswLCAwXV0sXG4gICAgICAgICAgICAzOiBbWzAsIDBdLCBbMCwgLTFdLCBbLTEsIC0xXSwgWzIsIDBdLCBbMiwgLTFdXVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgc2V0T3V0ZXJTcXVhcmVzKCkge1xuICAgICAgICBsZXQgbGVmdE1vc3QsIHJpZ2h0TW9zdCwgdG9wTW9zdCwgYm90dG9tTW9zdDtcbiAgICAgICAgT2JqZWN0LnZhbHVlcyh0aGlzLnBvc2l0aW9uKS5mb3JFYWNoKGNvb3JkaW5hdGVzQXJyYXkgPT4gY29vcmRpbmF0ZXNBcnJheS5mb3JFYWNoKGFycmF5ID0+IHtcbiAgICAgICAgICAgIGxldCBjb2x1bW5WYWx1ZSA9IGFycmF5WzFdO1xuICAgICAgICAgICAgbGV0IHJvd1ZhbHVlID0gYXJyYXlbMF07XG4gICAgICAgICAgICBpZiAoIWxlZnRNb3N0IHx8IGNvbHVtblZhbHVlIDwgbGVmdE1vc3RbMV0pIGxlZnRNb3N0ID0gW3Jvd1ZhbHVlLCBjb2x1bW5WYWx1ZV07XG4gICAgICAgICAgICBpZiAoIXJpZ2h0TW9zdCB8fCBjb2x1bW5WYWx1ZSA+IHJpZ2h0TW9zdFsxXSkgcmlnaHRNb3N0ID0gW3Jvd1ZhbHVlLCBjb2x1bW5WYWx1ZV07XG4gICAgICAgICAgICBpZiAoIWJvdHRvbU1vc3QgfHwgcm93VmFsdWUgPiBib3R0b21Nb3N0WzBdKSBib3R0b21Nb3N0ID0gW3Jvd1ZhbHVlLCBjb2x1bW5WYWx1ZV07XG4gICAgICAgICAgICBpZiAoIXRvcE1vc3QgfHwgcm93VmFsdWUgPCB0b3BNb3N0WzBdKSB0b3BNb3N0ID0gW3Jvd1ZhbHVlLCBjb2x1bW5WYWx1ZV07XG4gICAgICAgIH0pKTtcbiAgICAgICAgdGhpcy5sZWZ0TW9zdCA9IGxlZnRNb3N0O1xuICAgICAgICB0aGlzLnJpZ2h0TW9zdCA9IHJpZ2h0TW9zdDtcbiAgICAgICAgdGhpcy50b3BNb3N0ID0gdG9wTW9zdDtcbiAgICAgICAgdGhpcy5ib3R0b21Nb3N0ID0gYm90dG9tTW9zdDtcbiAgICB9XG5cbiAgICBwb3B1bGF0ZUZpZWxkKGZpZWxkKSB7XG4gICAgICAgIGxldCBjb29yZGluYXRlQXJyYXlzID0gT2JqZWN0LnZhbHVlcyh0aGlzLnBvc2l0aW9uKTtcblxuICAgICAgICBjb29yZGluYXRlQXJyYXlzLmZvckVhY2goYXJyYXkgPT4ge1xuICAgICAgICAgICAgYXJyYXkuZm9yRWFjaChjb29yZGluYXRlID0+IHtcbiAgICAgICAgICAgICAgICBsZXQgW3JvdywgY29sXSA9IFtjb29yZGluYXRlWzBdLCBjb29yZGluYXRlWzFdXTtcbiAgICAgICAgICAgICAgICBpZiAoKGNvbCA+PSAwICYmIGNvbCA8PSAxOSkgJiYgKHJvdyA+PSAwICYmIHJvdyA8PSAxOSkpIGZpZWxkW3Jvd11bY29sXSA9IHRoaXMuY29sb3JDb2RlO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgfSk7XG5cbiAgICAgICAgdGhpcy5yZW1vdmVTcXVhcmVzLmZvckVhY2gocG9zaXRpb25BcnJheSA9PiB7XG4gICAgICAgICAgICBsZXQgW3JvdywgY29sXSA9IFtwb3NpdGlvbkFycmF5WzBdLCBwb3NpdGlvbkFycmF5WzFdXTtcbiAgICAgICAgICAgIGlmICgoY29sID49IDAgJiYgY29sIDw9IDE5KSAmJiAocm93ID49IDAgJiYgcm93IDw9IDE5KSkgZmllbGRbcm93XVtjb2xdID0gMDtcbiAgICAgICAgfSk7XG5cbiAgICB9XG5cbiAgICAvLyBjb21wYXJlcyB0d28gYXJyYXlzIG9mIGNvb3JkaW5hdGVzIGFuZCBjaGVjayBpZiB0aGV5IGhhdmUgdGhlIHNhbWUgY29udGVudCBpbiB0aGUgc2FtZSBvcmRlclxuICAgIF9zcXVhcmVzQXJlRXF1YWwob2xkU3F1YXJlLCBuZXdTcXVhcmUpIHtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBvbGRTcXVhcmUubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGlmIChvbGRTcXVhcmVbaV0gIT09IG5ld1NxdWFyZVtpXSkgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cblxuICAgIF9pbmNsdWRlcyhzcXVhcmUsIGNvb3JkaW5hdGVBcnJheXMpIHtcbiAgICAgICAgbGV0IHJlc3VsdCA9IGZhbHNlO1xuICAgICAgICBjb29yZGluYXRlQXJyYXlzLmZvckVhY2goYXJyYXkgPT4ge1xuICAgICAgICAgICAgaWYgKHRoaXMuX3NxdWFyZXNBcmVFcXVhbChzcXVhcmUsIGFycmF5KSkge1xuICAgICAgICAgICAgICAgIHJlc3VsdCA9IHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cblxuICAgIGRyb3AoKSB7XG4gICAgICAgIGxldCBvbGRQb3NpdGlvbiA9IHtcbiAgICAgICAgICAgIHRvcDogdGhpcy5wb3NpdGlvbi50b3AubWFwKGFycmF5ID0+IGFycmF5LnNsaWNlKCkpLFxuICAgICAgICAgICAgbWlkZGxlOiB0aGlzLnBvc2l0aW9uLm1pZGRsZS5tYXAoYXJyYXkgPT4gYXJyYXkuc2xpY2UoKSksXG4gICAgICAgICAgICBib3R0b206IHRoaXMucG9zaXRpb24uYm90dG9tLm1hcChhcnJheSA9PiBhcnJheS5zbGljZSgpKSxcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMucG9zaXRpb24udG9wID0gdGhpcy5wb3NpdGlvbi50b3AubWFwKGFycmF5ID0+IFthcnJheVswXSArIDEsIGFycmF5WzFdXSk7XG4gICAgICAgIHRoaXMucG9zaXRpb24ubWlkZGxlID0gdGhpcy5wb3NpdGlvbi5taWRkbGUubWFwKGFycmF5ID0+IFthcnJheVswXSArIDEsIGFycmF5WzFdXSk7XG4gICAgICAgIHRoaXMucG9zaXRpb24uYm90dG9tID0gdGhpcy5wb3NpdGlvbi5ib3R0b20ubWFwKGFycmF5ID0+IFthcnJheVswXSArIDEsIGFycmF5WzFdXSk7XG4gICAgICAgIHRoaXMudHVybmluZ1BvaW50ID0gW3RoaXMudHVybmluZ1BvaW50WzBdICsgMSwgdGhpcy50dXJuaW5nUG9pbnRbMV1dO1xuXG4gICAgICAgIHRoaXMuc2V0UmVtb3ZlU3F1YXJlcyhvbGRQb3NpdGlvbik7XG4gICAgfVxuXG4gICAgLy8gZmluZCBoaWdoZXN0IHBvc3NpYmxlIGdyb3VuZC1wb3NpdGlvbiBmb3IgcGllY2VcbiAgICBoYXJkRHJvcChmaWVsZCkge1xuICAgICAgICB0aGlzLmNsZWFyU2VsZkZyb21Cb2FyZChmaWVsZCk7XG4gICAgICAgIGxldCBzdG9wcGVkID0gZmFsc2U7XG4gICAgICAgIHdoaWxlICghc3RvcHBlZCkge1xuICAgICAgICAgICAgbGV0IGhhbmdpbmdTcXVhcmVzID0gdGhpcy5oYW5naW5nU3F1YXJlcyh0aGlzLnBvc2l0aW9uKTtcbiAgICAgICAgICAgIGhhbmdpbmdTcXVhcmVzLmZvckVhY2goY29vcmRpbmF0ZSA9PiB7XG4gICAgICAgICAgICAgICAgbGV0IFtyb3csIGNvbF0gPSBbY29vcmRpbmF0ZVswXSwgY29vcmRpbmF0ZVsxXV07XG4gICAgICAgICAgICAgICAgaWYgKChyb3cgKyAxID09PSAyMCB8fCBmaWVsZFtyb3cgKyAxXVtjb2xdKSkgc3RvcHBlZCA9IHRydWU7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGlmIChzdG9wcGVkKSBicmVhaztcbiAgICAgICAgICAgIHRoaXMucG9zaXRpb24udG9wID0gdGhpcy5wb3NpdGlvbi50b3AubWFwKGFycmF5ID0+IFthcnJheVswXSArIDEsIGFycmF5WzFdXSk7XG4gICAgICAgICAgICB0aGlzLnBvc2l0aW9uLm1pZGRsZSA9IHRoaXMucG9zaXRpb24ubWlkZGxlLm1hcChhcnJheSA9PiBbYXJyYXlbMF0gKyAxLCBhcnJheVsxXV0pO1xuICAgICAgICAgICAgdGhpcy5wb3NpdGlvbi5ib3R0b20gPSB0aGlzLnBvc2l0aW9uLmJvdHRvbS5tYXAoYXJyYXkgPT4gW2FycmF5WzBdICsgMSwgYXJyYXlbMV1dKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNsZWFyU2VsZkZyb21Cb2FyZChmaWVsZCkge1xuICAgICAgICBPYmplY3QudmFsdWVzKHRoaXMucG9zaXRpb24pLmZvckVhY2goY29vcmRpbmF0ZUFycmF5cyA9PiBjb29yZGluYXRlQXJyYXlzLmZvckVhY2goY29vcmRpbmF0ZSA9PiB7XG4gICAgICAgICAgICBsZXQgcm93ID0gY29vcmRpbmF0ZVswXTtcbiAgICAgICAgICAgIGxldCBjb2wgPSBjb29yZGluYXRlWzFdO1xuICAgICAgICAgICAgaWYgKHJvdyA8IDIwICYmIHJvdyA+PSAwICYmIGNvbCA+PSAwICYmIGNvbCA8IDEwKSBmaWVsZFtyb3ddW2NvbF0gPSAwO1xuICAgICAgICB9KSk7XG4gICAgfVxuXG4gICAgbW92ZShkaXJlY3Rpb24sIGZpZWxkKSB7XG4gICAgICAgIGxldCB0U3BpbiA9IGZhbHNlO1xuICAgICAgICBsZXQgb2xkUG9zaXRpb24gPSB7XG4gICAgICAgICAgICB0b3A6IHRoaXMucG9zaXRpb24udG9wLm1hcChhcnJheSA9PiBhcnJheS5zbGljZSgpKSxcbiAgICAgICAgICAgIG1pZGRsZTogdGhpcy5wb3NpdGlvbi5taWRkbGUubWFwKGFycmF5ID0+IGFycmF5LnNsaWNlKCkpLFxuICAgICAgICAgICAgYm90dG9tOiB0aGlzLnBvc2l0aW9uLmJvdHRvbS5tYXAoYXJyYXkgPT4gYXJyYXkuc2xpY2UoKSksXG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5vbGRUdXJuaW5nUG9pbnQgPSB0aGlzLnR1cm5pbmdQb2ludC5zbGljZSgpO1xuICAgICAgICBzd2l0Y2ggKGRpcmVjdGlvbikge1xuICAgICAgICAgICAgY2FzZSBcImxlZnRcIjpcbiAgICAgICAgICAgICAgICB0aGlzLnBvc2l0aW9uLnRvcCA9IHRoaXMucG9zaXRpb24udG9wLm1hcChhcnJheSA9PiBbYXJyYXlbMF0sIGFycmF5WzFdIC0gMV0pO1xuICAgICAgICAgICAgICAgIHRoaXMucG9zaXRpb24ubWlkZGxlID0gdGhpcy5wb3NpdGlvbi5taWRkbGUubWFwKGFycmF5ID0+IFthcnJheVswXSwgYXJyYXlbMV0gLSAxXSk7XG4gICAgICAgICAgICAgICAgdGhpcy5wb3NpdGlvbi5ib3R0b20gPSB0aGlzLnBvc2l0aW9uLmJvdHRvbS5tYXAoYXJyYXkgPT4gW2FycmF5WzBdLCBhcnJheVsxXSAtIDFdKTtcbiAgICAgICAgICAgICAgICB0aGlzLnR1cm5pbmdQb2ludCA9IFt0aGlzLnR1cm5pbmdQb2ludFswXSwgdGhpcy50dXJuaW5nUG9pbnRbMV0gLSAxXTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgXCJ0dXJuUmlnaHRcIjpcbiAgICAgICAgICAgICAgICAvLyBkZWZlciB0byBcInR1cm5cIiBtZXRob2RcbiAgICAgICAgICAgICAgICAvLyB0U3BpbiB3aWxsIGVpdGhlciBiZSB0cnV0aHkgb3IgZmFsc3ksIHRyYWNrZWQgZm9yIHNlbmRpbmcgbW9yZSBsaW5lcyBkdXJpbmcgbXVsdGlwbGF5ZXJcbiAgICAgICAgICAgICAgICB0U3BpbiA9IHRoaXMudHVyblJpZ2h0KGZpZWxkLCBvbGRQb3NpdGlvbik7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIFwicmlnaHRcIjpcbiAgICAgICAgICAgICAgICB0aGlzLnBvc2l0aW9uLnRvcCA9IHRoaXMucG9zaXRpb24udG9wLm1hcChhcnJheSA9PiBbYXJyYXlbMF0sIGFycmF5WzFdICsgMV0pO1xuICAgICAgICAgICAgICAgIHRoaXMucG9zaXRpb24ubWlkZGxlID0gdGhpcy5wb3NpdGlvbi5taWRkbGUubWFwKGFycmF5ID0+IFthcnJheVswXSwgYXJyYXlbMV0gKyAxXSk7XG4gICAgICAgICAgICAgICAgdGhpcy5wb3NpdGlvbi5ib3R0b20gPSB0aGlzLnBvc2l0aW9uLmJvdHRvbS5tYXAoYXJyYXkgPT4gW2FycmF5WzBdLCBhcnJheVsxXSArIDFdKTtcbiAgICAgICAgICAgICAgICB0aGlzLnR1cm5pbmdQb2ludCA9IFt0aGlzLnR1cm5pbmdQb2ludFswXSwgdGhpcy50dXJuaW5nUG9pbnRbMV0gKyAxXTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgXCJkb3duXCI6XG4gICAgICAgICAgICAgICAgdGhpcy5wb3NpdGlvbi50b3AgPSB0aGlzLnBvc2l0aW9uLnRvcC5tYXAoYXJyYXkgPT4gW2FycmF5WzBdICsgMSwgYXJyYXlbMV1dKTtcbiAgICAgICAgICAgICAgICB0aGlzLnBvc2l0aW9uLm1pZGRsZSA9IHRoaXMucG9zaXRpb24ubWlkZGxlLm1hcChhcnJheSA9PiBbYXJyYXlbMF0gKyAxLCBhcnJheVsxXV0pO1xuICAgICAgICAgICAgICAgIHRoaXMucG9zaXRpb24uYm90dG9tID0gdGhpcy5wb3NpdGlvbi5ib3R0b20ubWFwKGFycmF5ID0+IFthcnJheVswXSArIDEsIGFycmF5WzFdXSk7XG4gICAgICAgICAgICAgICAgdGhpcy50dXJuaW5nUG9pbnQgPSBbdGhpcy50dXJuaW5nUG9pbnRbMF0gKyAxLCB0aGlzLnR1cm5pbmdQb2ludFsxXV07XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIFwidXBcIjpcbiAgICAgICAgICAgICAgICB0aGlzLnBvc2l0aW9uLnRvcCA9IHRoaXMucG9zaXRpb24udG9wLm1hcChhcnJheSA9PiBbYXJyYXlbMF0gLSAxLCBhcnJheVsxXV0pO1xuICAgICAgICAgICAgICAgIHRoaXMucG9zaXRpb24ubWlkZGxlID0gdGhpcy5wb3NpdGlvbi5taWRkbGUubWFwKGFycmF5ID0+IFthcnJheVswXSAtIDEsIGFycmF5WzFdXSk7XG4gICAgICAgICAgICAgICAgdGhpcy5wb3NpdGlvbi5ib3R0b20gPSB0aGlzLnBvc2l0aW9uLmJvdHRvbS5tYXAoYXJyYXkgPT4gW2FycmF5WzBdIC0gMSwgYXJyYXlbMV1dKTtcbiAgICAgICAgICAgICAgICB0aGlzLnR1cm5pbmdQb2ludCA9IFt0aGlzLnR1cm5pbmdQb2ludFswXSAtIDEsIHRoaXMudHVybmluZ1BvaW50WzFdXTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgXCJ0dXJuTGVmdFwiOlxuICAgICAgICAgICAgICAgIHRoaXMudHVybkxlZnQoZmllbGQsIG9sZFBvc2l0aW9uKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnNldE91dGVyU3F1YXJlcygpO1xuICAgICAgICB0aGlzLnNldFJlbW92ZVNxdWFyZXMob2xkUG9zaXRpb24sIGZpZWxkKTtcbiAgICAgICAgcmV0dXJuIHRTcGluO1xuICAgIH1cblxuICAgIHR1cm5SaWdodChmaWVsZCwgb2xkUG9zaXRpb24pIHtcbiAgICAgICAgLy8gY2xlYXIgZnJvbSBmaWVsZCBmaXJzdCBzbyB0aGF0IHRoZSBwaWVjZSBkb2Vzbid0IHNlZSBpdHNlbGYgYXMgYSBjb25mbGljdGluZyBwaWVjZVxuICAgICAgICB0aGlzLmNsZWFyU2VsZkZyb21Cb2FyZChmaWVsZCk7XG4gICAgICAgIGxldCBzcXVhcmVzID0gW107XG4gICAgICAgIE9iamVjdC52YWx1ZXModGhpcy5wb3NpdGlvbikuZm9yRWFjaChjb29yZGluYXRlc0FycmF5ID0+IHNxdWFyZXMucHVzaCguLi5jb29yZGluYXRlc0FycmF5KSk7XG4gICAgICAgIHRoaXMucG9zaXRpb24udG9wID0gW107XG4gICAgICAgIHRoaXMucG9zaXRpb24ubWlkZGxlID0gW107XG4gICAgICAgIHRoaXMucG9zaXRpb24uYm90dG9tID0gW107XG4gICAgICAgIHNxdWFyZXMuZm9yRWFjaChzcXVhcmUgPT4ge1xuICAgICAgICAgICAgbGV0IGNvbHVtbiA9IHNxdWFyZVsxXTtcbiAgICAgICAgICAgIGxldCBoZWlnaHREaWZmZXJlbmNlID0gdGhpcy50dXJuaW5nUG9pbnRbMF0gLSBzcXVhcmVbMF07XG4gICAgICAgICAgICBsZXQgd2lkdGhEaWZmZXJlbmNlID0gdGhpcy50dXJuaW5nUG9pbnRbMV0gLSBzcXVhcmVbMV07XG4gICAgICAgICAgICBsZXQgbmV3Q29sID0gdGhpcy50dXJuaW5nUG9pbnRbMV0gKyBoZWlnaHREaWZmZXJlbmNlO1xuICAgICAgICAgICAgbGV0IG5ld1JvdyA9IHRoaXMudHVybmluZ1BvaW50WzBdICsgKHdpZHRoRGlmZmVyZW5jZSAqIC0xKTtcbiAgICAgICAgICAgIHN3aXRjaCAoY29sdW1uKSB7XG4gICAgICAgICAgICAgICAgY2FzZSBjb2x1bW4gPSB0aGlzLnJpZ2h0TW9zdFsxXTpcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wb3NpdGlvbi5ib3R0b20ucHVzaChbbmV3Um93LCBuZXdDb2xdKTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSBjb2x1bW4gPSB0aGlzLmxlZnRNb3N0WzFdOlxuICAgICAgICAgICAgICAgICAgICB0aGlzLnBvc2l0aW9uLnRvcC5wdXNoKFtuZXdSb3csIG5ld0NvbF0pO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgICAgICB0aGlzLnBvc2l0aW9uLm1pZGRsZS5wdXNoKFtuZXdSb3csIG5ld0NvbF0pO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMuc2V0UmVtb3ZlU3F1YXJlcyhvbGRQb3NpdGlvbik7XG5cbiAgICAgICAgLy8gZmluZCBvdXRlci1tb3N0IHNxdWFyZXMgdG8gc2VlIGlmIHBpZWNlIGlzIG9ic3RydWN0ZWRcbiAgICAgICAgLy8gaWYgc28sIHB1c2ggcGllY2UgYmFjayBpbnRvIGZpZWxkXG4gICAgICAgIHRoaXMuc2V0T3V0ZXJTcXVhcmVzKCk7XG5cbiAgICAgICAgLy8gcmVzZXQgcm90YXRpb24gc3RhdGUsIHdoaWNoIGlzIHRyYWNrZWQgZm9yIGltcGxlbWVudGluZyBzdXBlciByb3RhdGlvbiBzeXN0ZW1cbiAgICAgICAgdGhpcy5yb3RhdGlvblN0YXRlID0gdGhpcy5yb3RhdGlvblN0YXRlID09PSAzID8gMCA6IHRoaXMucm90YXRpb25TdGF0ZSArIDE7XG5cbiAgICAgICAgbGV0IG5ld1NxdWFyZXMgPSBbLi4udGhpcy5wb3NpdGlvbi50b3AsIC4uLnRoaXMucG9zaXRpb24ubWlkZGxlLCAuLi50aGlzLnBvc2l0aW9uLmJvdHRvbV07XG4gICAgICAgIGZvciAobGV0IGkgaW4gbmV3U3F1YXJlcykge1xuICAgICAgICAgICAgbGV0IFtyb3csIGNvbF0gPSBbbmV3U3F1YXJlc1tpXVswXSwgbmV3U3F1YXJlc1tpXVsxXV07XG4gICAgICAgICAgICBpZiAoZmllbGRbcm93XSA9PT0gdW5kZWZpbmVkIHx8IGZpZWxkW3Jvd11bY29sXSA9PT0gdW5kZWZpbmVkIHx8IGZpZWxkW3Jvd11bY29sXSkge1xuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLndhbGxLaWNrKGZpZWxkLCBcInR1cm5SaWdodFwiLCBvbGRQb3NpdGlvbik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICB0dXJuTGVmdChmaWVsZCwgb2xkUG9zaXRpb24pIHtcbiAgICAgICAgdGhpcy5jbGVhclNlbGZGcm9tQm9hcmQoZmllbGQpO1xuICAgICAgICBsZXQgc3F1YXJlcyA9IFtdO1xuICAgICAgICBPYmplY3QudmFsdWVzKHRoaXMucG9zaXRpb24pLmZvckVhY2goY29vcmRpbmF0ZXNBcnJheSA9PiBzcXVhcmVzLnB1c2goLi4uY29vcmRpbmF0ZXNBcnJheSkpO1xuICAgICAgICB0aGlzLnBvc2l0aW9uLnRvcCA9IFtdO1xuICAgICAgICB0aGlzLnBvc2l0aW9uLm1pZGRsZSA9IFtdO1xuICAgICAgICB0aGlzLnBvc2l0aW9uLmJvdHRvbSA9IFtdO1xuICAgICAgICBzcXVhcmVzLmZvckVhY2goc3F1YXJlID0+IHtcbiAgICAgICAgICAgIGxldCBjb2x1bW4gPSBzcXVhcmVbMV07XG4gICAgICAgICAgICBsZXQgaGVpZ2h0RGlmZmVyZW5jZSA9IHRoaXMudHVybmluZ1BvaW50WzBdIC0gc3F1YXJlWzBdO1xuICAgICAgICAgICAgbGV0IHdpZHRoRGlmZmVyZW5jZSA9IHRoaXMudHVybmluZ1BvaW50WzFdIC0gc3F1YXJlWzFdO1xuICAgICAgICAgICAgbGV0IG5ld0NvbCA9IHRoaXMudHVybmluZ1BvaW50WzFdIC0gaGVpZ2h0RGlmZmVyZW5jZTtcbiAgICAgICAgICAgIGxldCBuZXdSb3cgPSB0aGlzLnR1cm5pbmdQb2ludFswXSAtICh3aWR0aERpZmZlcmVuY2UgKiAtMSk7XG4gICAgICAgICAgICBzd2l0Y2ggKGNvbHVtbikge1xuICAgICAgICAgICAgICAgIGNhc2UgY29sdW1uID0gdGhpcy5yaWdodE1vc3RbMV06XG4gICAgICAgICAgICAgICAgICAgIHRoaXMucG9zaXRpb24udG9wLnB1c2goW25ld1JvdywgbmV3Q29sXSk7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgY29sdW1uID0gdGhpcy5sZWZ0TW9zdFsxXTpcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wb3NpdGlvbi5ib3R0b20ucHVzaChbbmV3Um93LCBuZXdDb2xdKTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wb3NpdGlvbi5taWRkbGUucHVzaChbbmV3Um93LCBuZXdDb2xdKTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgICAgIHRoaXMuc2V0UmVtb3ZlU3F1YXJlcyhvbGRQb3NpdGlvbik7XG5cbiAgICAgICAgLy8gZmluZCBsZWZ0IGFuZCByaWdodCBtb3N0IHNxdWFyZXMgdG8gc2VlIGlmIHBpZWNlIHRocm91Z2ggd2FsbFxuICAgICAgICAvLyBpZiB0aHJvdWdoIHdhbGwsIHB1c2ggcGllY2UgYmFjayBpbnRvIGZpZWxkXG4gICAgICAgIHRoaXMuc2V0T3V0ZXJTcXVhcmVzKCk7XG5cbiAgICAgICAgLy8gcmVzZXQgcm90YXRpb24gc3RhdGUsIHdoaWNoIGlzIHRyYWNrZWQgZm9yIGltcGxlbWVudGluZyBzdXBlciByb3RhdGlvbiBzeXN0ZW1cbiAgICAgICAgdGhpcy5yb3RhdGlvblN0YXRlID0gdGhpcy5yb3RhdGlvblN0YXRlID09PSAwID8gMyA6IHRoaXMucm90YXRpb25TdGF0ZSAtIDE7XG5cbiAgICAgICAgbGV0IG5ld1NxdWFyZXMgPSBbLi4udGhpcy5wb3NpdGlvbi50b3AsIC4uLnRoaXMucG9zaXRpb24ubWlkZGxlLCAuLi50aGlzLnBvc2l0aW9uLmJvdHRvbV07XG4gICAgICAgIGZvciAobGV0IGkgaW4gbmV3U3F1YXJlcykge1xuICAgICAgICAgICAgbGV0IFtyb3csIGNvbF0gPSBbbmV3U3F1YXJlc1tpXVswXSwgbmV3U3F1YXJlc1tpXVsxXV07XG4gICAgICAgICAgICBpZiAoZmllbGRbcm93XSA9PT0gdW5kZWZpbmVkIHx8IGZpZWxkW3Jvd11bY29sXSA9PT0gdW5kZWZpbmVkIHx8IGZpZWxkW3Jvd11bY29sXSkge1xuICAgICAgICAgICAgICAgIHRoaXMud2FsbEtpY2soZmllbGQsIFwidHVybkxlZnRcIiwgb2xkUG9zaXRpb24pO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICB9XG5cbiAgICAvLyBjb21wYXJlIG9sZCBwb3NpdGlvbiBvZiBwaWVjZSB3aXRoIG5ldyBwb3NpdGlvbiBcbiAgICBzZXRSZW1vdmVTcXVhcmVzKG9sZFBvc2l0aW9uLCBmaWVsZCkge1xuICAgICAgICBsZXQgb2xkU3F1YXJlcyA9IFtdO1xuICAgICAgICBsZXQgbmV3U3F1YXJlcyA9IFtdO1xuICAgICAgICBPYmplY3QudmFsdWVzKG9sZFBvc2l0aW9uKS5mb3JFYWNoKGNvb3JkaW5hdGVzQXJyYXkgPT4gb2xkU3F1YXJlcy5wdXNoKC4uLmNvb3JkaW5hdGVzQXJyYXkpKTtcbiAgICAgICAgT2JqZWN0LnZhbHVlcyh0aGlzLnBvc2l0aW9uKS5mb3JFYWNoKGNvb3JkaW5hdGVzQXJyYXkgPT4gbmV3U3F1YXJlcy5wdXNoKC4uLmNvb3JkaW5hdGVzQXJyYXkpKTtcbiAgICAgICAgLy8ga2VlcCB0cmFjayBvZiBzcXVhcmVzIHRoYXQgdGhlIHBvc2l0aW9ucyBkbyBub3QgaGF2ZSBpbiBjb21tb24gKHNxdWFyZXMgdG8gcmVtb3ZlIGNvbG9yIGZyb20pXG4gICAgICAgIHRoaXMucmVtb3ZlU3F1YXJlcyA9IG9sZFNxdWFyZXMuZmlsdGVyKG9sZFNxdWFyZSA9PiB7XG4gICAgICAgICAgICBpZiAoIWZpZWxkKSB7XG4gICAgICAgICAgICAgICAgaWYgKCF0aGlzLl9pbmNsdWRlcyhvbGRTcXVhcmUsIG5ld1NxdWFyZXMpKSByZXR1cm4gb2xkU3F1YXJlO1xuICAgICAgICAgICAgLy8gaWYgZmllbGQgYXJndW1lbnQgaXMgcGFzc2VkLCBjaGVjayB0aGUgZmllbGQgdG8gbWFrZSBzdXJlIHRvIG5vdCBjbGVhciBzcXVhcmVzIG9mIG90aGVyIHBpZWNlc1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBpZiAoIXRoaXMuX2luY2x1ZGVzKG9sZFNxdWFyZSwgbmV3U3F1YXJlcykgJiYgIWZpZWxkW29sZFNxdWFyZVswXV1bb2xkU3F1YXJlWzFdXSkgcmV0dXJuIG9sZFNxdWFyZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIFxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBoYW5naW5nU3F1YXJlcyhwb3NpdGlvbikge1xuICAgICAgICBsZXQgc3F1YXJlcyA9IFtdO1xuICAgICAgICBsZXQgaGFuZ2luZ1NxdWFyZXMgPSBbXTtcbiAgICAgICAgT2JqZWN0LnZhbHVlcyhwb3NpdGlvbikuZm9yRWFjaChjb29yZGluYXRlQXJyYXkgPT4gc3F1YXJlcy5wdXNoKC4uLmNvb3JkaW5hdGVBcnJheSkpXG4gICAgICAgIHNxdWFyZXMuZm9yRWFjaChzcXVhcmUgPT4ge1xuICAgICAgICAgICAgbGV0IGJlbG93U3F1YXJlID0gW3NxdWFyZVswXSArIDEsIHNxdWFyZVsxXV07XG4gICAgICAgICAgICBpZiAoIXRoaXMuX2luY2x1ZGVzKGJlbG93U3F1YXJlLCBzcXVhcmVzKSkgaGFuZ2luZ1NxdWFyZXMucHVzaChzcXVhcmUpO1xuICAgICAgICB9KVxuICAgICAgICByZXR1cm4gaGFuZ2luZ1NxdWFyZXM7XG4gICAgfVxuXG4gICAgc2lkZVNxdWFyZXMoKSB7XG4gICAgICAgIGxldCBzcXVhcmVzID0gW107XG4gICAgICAgIGxldCBzaWRlU3F1YXJlcyA9IHtcbiAgICAgICAgICAgIGxlZnQ6IFtdLFxuICAgICAgICAgICAgcmlnaHQ6IFtdXG4gICAgICAgIH07XG4gICAgICAgIE9iamVjdC52YWx1ZXModGhpcy5wb3NpdGlvbikuZm9yRWFjaChjb29yZGluYXRlQXJyYXkgPT4gc3F1YXJlcy5wdXNoKC4uLmNvb3JkaW5hdGVBcnJheSkpO1xuICAgICAgICBzcXVhcmVzLmZvckVhY2goc3F1YXJlID0+IHtcbiAgICAgICAgICAgIGxldCBhZGphY2VudExlZnQgPSBbc3F1YXJlWzBdLCBzcXVhcmVbMV0gLSAxXTtcbiAgICAgICAgICAgIGxldCBhZGphY2VudFJpZ2h0ID0gW3NxdWFyZVswXSwgc3F1YXJlWzFdICsgMV07XG4gICAgICAgICAgICBpZiAoIXRoaXMuX2luY2x1ZGVzKGFkamFjZW50TGVmdCwgc3F1YXJlcykpIHNpZGVTcXVhcmVzLmxlZnQucHVzaChzcXVhcmUpO1xuICAgICAgICAgICAgaWYgKCF0aGlzLl9pbmNsdWRlcyhhZGphY2VudFJpZ2h0LCBzcXVhcmVzKSkgc2lkZVNxdWFyZXMucmlnaHQucHVzaChzcXVhcmUpO1xuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIHNpZGVTcXVhcmVzO1xuICAgIH1cblxuICAgIGlzRmFsbGluZyhmaWVsZCkge1xuICAgICAgICBsZXQgcmVzdWx0ID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5oYW5naW5nU3F1YXJlcyh0aGlzLnBvc2l0aW9uKS5mb3JFYWNoKGNvb3JkaW5hdGVQYWlyID0+IHtcbiAgICAgICAgICAgIGxldCBbcm93LCBjb2xdID0gW2Nvb3JkaW5hdGVQYWlyWzBdLCBjb29yZGluYXRlUGFpclsxXV07XG4gICAgICAgICAgICAvLyBpZiB0aGUgcGllY2UncyBjdXJyZW50IHBvc2l0aW9uIGlzIGFib3ZlIHRoZSBmaWVsZCBmbG9vciBvciBhIGFub3RoZXIgcGllY2UgKG5vdCBpbmNsdWRlIGdob3N0IHBpZWNlKVxuICAgICAgICAgICAgaWYgKCFmaWVsZFtyb3cgKyAxXSB8fCAoZmllbGRbcm93ICsgMV1bY29sXSAmJiBmaWVsZFtyb3cgKyAxXVtjb2xdICE9PSBcInhcIikpIHtcbiAgICAgICAgICAgICAgICByZXN1bHQgPSBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxuXG4gICAgcmlnaHRTaWRlQmxvY2tlZChmaWVsZCkge1xuICAgICAgICAvLyBpZiAodGhpcy5wb3NpdGlvbi50b3BbMF1bMF0gPCAwKSByZXR1cm4gZmFsc2U7XG4gICAgICAgIGxldCByZXN1bHQgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5zaWRlU3F1YXJlcygpLnJpZ2h0LmZvckVhY2goY29vcmRpbmF0ZVBhaXIgPT4ge1xuICAgICAgICAgICAgbGV0IFtyb3csIGNvbF0gPSBbY29vcmRpbmF0ZVBhaXJbMF0sIGNvb3JkaW5hdGVQYWlyWzFdXTtcbiAgICAgICAgICAgIC8vIGlmIGFueSByaWdodCBmYWNpbmcgc3F1YXJlIGhpdHMgdGhlIHdhbGwgb3IgYW5vdGhlciBwaWVjZSwgbm90IGluY2x1ZGluZyB0aGUgZ2hvc3QgcGllY2VcbiAgICAgICAgICAgIGlmIChjb2wgPT09IDkgfHwgKGZpZWxkW3Jvd10gJiYgZmllbGRbcm93XVtjb2wgKyAxXSAmJiBmaWVsZFtyb3cgKyAxXVtjb2xdICE9PSBcInhcIikpIHtcbiAgICAgICAgICAgICAgICByZXN1bHQgPSB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG5cbiAgICBsZWZ0U2lkZUJsb2NrZWQoZmllbGQpIHtcbiAgICAgICAgLy8gaWYgKHRoaXMucG9zaXRpb24udG9wWzBdWzBdIDwgMCkgcmV0dXJuIGZhbHNlO1xuICAgICAgICBsZXQgcmVzdWx0ID0gZmFsc2U7XG4gICAgICAgIHRoaXMuc2lkZVNxdWFyZXMoKS5sZWZ0LmZvckVhY2goY29vcmRpbmF0ZVBhaXIgPT4ge1xuICAgICAgICAgICAgbGV0IFtyb3csIGNvbF0gPSBbY29vcmRpbmF0ZVBhaXJbMF0sIGNvb3JkaW5hdGVQYWlyWzFdXTtcbiAgICAgICAgICAgIC8vIGlmIGFueSBsZWZ0IGZhY2luZyBzcXVhcmUgaGl0cyB0aGUgd2FsbCBvciBhbm90aGVyIHBpZWNlLCBub3QgaW5jbHVkaW5nIHRoZSBnaG9zdCBwaWVjZVxuICAgICAgICAgICAgaWYgKGNvbCA9PT0gMCB8fCAoZmllbGRbcm93XSAmJiBmaWVsZFtyb3ddW2NvbCAtIDFdICYmIGZpZWxkW3Jvd11bY29sIC0gMV0gIT09IFwieFwiKSkge1xuICAgICAgICAgICAgICAgIHJlc3VsdCA9IHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cblxuICAgIHdhbGxLaWNrKGZpZWxkLCBhY3Rpb24sIG9sZFBvc2l0aW9uKSB7XG4gICAgICAgIGxldCB2YWxpZFNwb3QsIHN0YXJ0aW5nT2Zmc2V0O1xuICAgICAgICBpZiAoYWN0aW9uID09PSBcInR1cm5SaWdodFwiKSB7XG4gICAgICAgICAgICBzdGFydGluZ09mZnNldCA9IHRoaXMucm90YXRpb25TdGF0ZSA9PT0gMCA/IHRoaXMub2Zmc2V0R3VpZGVbM10gOiB0aGlzLm9mZnNldEd1aWRlW3RoaXMucm90YXRpb25TdGF0ZSAtIDFdO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgc3RhcnRpbmdPZmZzZXQgPSB0aGlzLnJvdGF0aW9uU3RhdGUgPT09IDMgPyB0aGlzLm9mZnNldEd1aWRlWzBdIDogdGhpcy5vZmZzZXRHdWlkZVt0aGlzLnJvdGF0aW9uU3RhdGUgKyAxXTtcbiAgICAgICAgfVxuICAgICAgICBsZXQgbmV4dE9mZnNldCA9IHRoaXMub2Zmc2V0R3VpZGVbdGhpcy5yb3RhdGlvblN0YXRlXTtcbiAgICAgICAgLy8gZm9yIChsZXQgaSA9IDA7IGkgPCA1OyBpKyspIHtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCA2OyBpKyspIHtcbiAgICAgICAgICAgIC8vIGlmIGkgPT09IDUsIHRoZXJlIGFyZSBubyBtb3JlIHBvdGVudGlhbCBwb3NpdGlvbnMgdG8gY2hlY2sgYW5kIHRoZSBwaWVjZSdzIHBvc2l0aW9uIGlzIHRoZSBpbml0aWFsIHBvc2l0aW9uIGZyb20gYmVmb3JlIHR1cm5pbmdcbiAgICAgICAgICAgIGlmIChpID09PSA1KSB7XG4gICAgICAgICAgICAgICAgdGhpcy5wb3NpdGlvbiA9IG9sZFBvc2l0aW9uO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHZhbGlkU3BvdCA9IHRydWU7XG4gICAgICAgICAgICBsZXQgYmFzZVBvc2l0aW9uID0ge1xuICAgICAgICAgICAgICAgIHRvcDogdGhpcy5wb3NpdGlvbi50b3AubWFwKGFycmF5ID0+IGFycmF5LnNsaWNlKCkpLFxuICAgICAgICAgICAgICAgIG1pZGRsZTogdGhpcy5wb3NpdGlvbi5taWRkbGUubWFwKGFycmF5ID0+IGFycmF5LnNsaWNlKCkpLFxuICAgICAgICAgICAgICAgIGJvdHRvbTogdGhpcy5wb3NpdGlvbi5ib3R0b20ubWFwKGFycmF5ID0+IGFycmF5LnNsaWNlKCkpLFxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgbGV0IGJhc2VUdXJuaW5nUG9pbnQgPSB0aGlzLnR1cm5pbmdQb2ludC5zbGljZSgpO1xuXG4gICAgICAgICAgICBsZXQgc3RhcnRpbmdUcmFuc2xhdGlvbiA9IHN0YXJ0aW5nT2Zmc2V0W2ldO1xuICAgICAgICAgICAgbGV0IHBvdGVudGlhbFRyYW5zbGF0aW9uID0gbmV4dE9mZnNldFtpXTtcbiAgICAgICAgICAgIGxldCByb3dTaGlmdCA9IHN0YXJ0aW5nVHJhbnNsYXRpb25bMF0gLSBwb3RlbnRpYWxUcmFuc2xhdGlvblswXTtcbiAgICAgICAgICAgIGxldCBjb2xTaGlmdCA9IHN0YXJ0aW5nVHJhbnNsYXRpb25bMV0gLSBwb3RlbnRpYWxUcmFuc2xhdGlvblsxXTtcbiAgICAgICAgICAgIGxldCB0cmFuc2xhdGVWZXJ0aWNhbCA9IHJvd1NoaWZ0ID4gMCA/ICgpID0+IHRoaXMubW92ZShcInVwXCIpIDogKCkgPT4gdGhpcy5tb3ZlKFwiZG93blwiKTtcbiAgICAgICAgICAgIGxldCB0cmFuc2xhdGVIb3Jpem9udGFsID0gY29sU2hpZnQgPiAwID8gKCkgPT4gdGhpcy5tb3ZlKFwicmlnaHRcIikgOiAoKSA9PiB0aGlzLm1vdmUoXCJsZWZ0XCIpO1xuICAgICAgICAgICAgZm9yIChsZXQgbnVtVGltZXNSb3dTaGlmdGVkID0gMDsgbnVtVGltZXNSb3dTaGlmdGVkIDwgTWF0aC5hYnMocm93U2hpZnQpOyBudW1UaW1lc1Jvd1NoaWZ0ZWQrKykge1xuICAgICAgICAgICAgICAgIHRyYW5zbGF0ZVZlcnRpY2FsKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBmb3IgKGxldCBudW1UaW1lc0NvbFNoaWZ0ZWQgPSAwOyBudW1UaW1lc0NvbFNoaWZ0ZWQgPCBNYXRoLmFicyhjb2xTaGlmdCk7IG51bVRpbWVzQ29sU2hpZnRlZCsrKSB7XG4gICAgICAgICAgICAgICAgdHJhbnNsYXRlSG9yaXpvbnRhbCgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgbGV0IG5ld1Bvc2l0aW9uID0gWy4uLnRoaXMucG9zaXRpb24udG9wLCAuLi50aGlzLnBvc2l0aW9uLm1pZGRsZSwgLi4udGhpcy5wb3NpdGlvbi5ib3R0b21dO1xuICAgICAgICAgICAgZm9yIChsZXQgaSBpbiBuZXdQb3NpdGlvbikge1xuICAgICAgICAgICAgICAgIGxldCBbcm93LCBjb2xdID0gW25ld1Bvc2l0aW9uW2ldWzBdLCBuZXdQb3NpdGlvbltpXVsxXV07XG4gICAgICAgICAgICAgICAgaWYgKGZpZWxkW3Jvd10gPT09IHVuZGVmaW5lZCB8fCBmaWVsZFtyb3ddW2NvbF0gPT09IHVuZGVmaW5lZCB8fCBmaWVsZFtyb3ddW2NvbF0gPiAwKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhbGlkU3BvdCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnBvc2l0aW9uID0gYmFzZVBvc2l0aW9uO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnR1cm5pbmdQb2ludCA9IGJhc2VUdXJuaW5nUG9pbnQ7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIGFsbG93cyB0U3BpbiB2YXJpYWJsZSB0byBiZSB0cnV0aHlcbiAgICAgICAgICAgIGlmICh2YWxpZFNwb3QpIHtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5uYW1lID09PSBcIlRQaWVjZVwiKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59IiwiaW1wb3J0IFBpZWNlIGZyb20gJy4vcGllY2UnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTUGllY2UgZXh0ZW5kcyBQaWVjZSB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIHRoaXMubmFtZSA9IFwiU1BpZWNlXCI7XG4gICAgICAgIHRoaXMucG9zaXRpb24gPSB7XG4gICAgICAgICAgICB0b3A6IFtbMCwgNF0sIFswLCA1XV0sXG4gICAgICAgICAgICBtaWRkbGU6IFtdLFxuICAgICAgICAgICAgYm90dG9tOiBbWzEsIDNdLCBbMSwgNF1dXG4gICAgICAgIH07XG4gICAgICAgIHRoaXMuY29sb3JDb2RlID0gNDtcblxuICAgICAgICB0aGlzLnR1cm5pbmdQb2ludCA9IFsxLCA0XTtcblxuICAgICAgICB0aGlzLmRpc3BsYXlTcXVhcmVzID0gW1szLCAxXSwgWzIsIDFdLCBbMiwgMl0sIFsxLCAyXV07XG5cbiAgICAgICAgdGhpcy5yZW1vdmVTcXVhcmVzID0gW107XG4gICAgfVxufSIsImltcG9ydCBQaWVjZSBmcm9tICcuL3BpZWNlJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVFBpZWNlIGV4dGVuZHMgUGllY2Uge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICB0aGlzLm5hbWUgPSBcIlRQaWVjZVwiO1xuICAgICAgICB0aGlzLnBvc2l0aW9uID0ge1xuICAgICAgICAgICAgdG9wOiBbWzAsIDRdXSxcbiAgICAgICAgICAgIG1pZGRsZTogW10sXG4gICAgICAgICAgICBib3R0b206IFtbMSwgM10sIFsxLCA0XSwgWzEsIDVdXSxcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmNvbG9yQ29kZSA9IDM7XG5cbiAgICAgICAgdGhpcy50dXJuaW5nUG9pbnQgPSBbMSwgNF07XG5cbiAgICAgICAgdGhpcy5kaXNwbGF5U3F1YXJlcyA9IFtbMSwgMl0sIFsyLCAyXSwgWzMsIDJdLCBbMiwgMV1dO1xuXG4gICAgICAgIHRoaXMucmVtb3ZlU3F1YXJlcyA9IFtdO1xuICAgIH1cbn0iLCJpbXBvcnQgUGllY2UgZnJvbSAnLi9waWVjZSc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFpQaWVjZSBleHRlbmRzIFBpZWNlIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgdGhpcy5uYW1lID0gXCJaUGllY2VcIjtcbiAgICAgICAgdGhpcy5wb3NpdGlvbiA9IHtcbiAgICAgICAgICAgIHRvcDogW1swLCAzXSwgWzAsIDRdXSxcbiAgICAgICAgICAgIG1pZGRsZTogW10sXG4gICAgICAgICAgICBib3R0b206IFtbMSwgNF0sIFsxLCA1XV1cbiAgICAgICAgfTtcbiAgICAgICAgdGhpcy5jb2xvckNvZGUgPSA1O1xuXG4gICAgICAgIHRoaXMudHVybmluZ1BvaW50ID0gWzEsIDRdO1xuXG4gICAgICAgIHRoaXMuZGlzcGxheVNxdWFyZXMgPSBbWzEsIDFdLCBbMiwgMV0sIFsyLCAyXSwgWzMsIDJdXTtcblxuICAgICAgICB0aGlzLnJlbW92ZVNxdWFyZXMgPSBbXTtcbiAgICB9XG59Il0sInNvdXJjZVJvb3QiOiIifQ==