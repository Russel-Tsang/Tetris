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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2ZpZWxkL2ZpZWxkLmpzIiwid2VicGFjazovLy8uL3NyYy9maWVsZC9ob2xkYm94LmpzIiwid2VicGFjazovLy8uL3NyYy9maWVsZC9uZXh0Qm94LmpzIiwid2VicGFjazovLy8uL3NyYy9maWVsZC9xdWV1ZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvZ2FtZS9nYW1lLmpzIiwid2VicGFjazovLy8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvbWVudS9tZW51LmpzIiwid2VicGFjazovLy8uL3NyYy9tb2RhbC9tb2RhbC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvbW9kYWwvbXVsdGlwbGF5ZXJDb250ZW50LmpzIiwid2VicGFjazovLy8uL3NyYy9tb2RhbC9zaW5nbGVQbGF5ZXJDb250ZW50LmpzIiwid2VicGFjazovLy8uL3NyYy9tdWx0aXBsYXllci9tdWx0aXBsYXllci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcGllY2VzL2lQaWVjZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcGllY2VzL2pQaWVjZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcGllY2VzL2xQaWVjZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcGllY2VzL29QaWVjZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcGllY2VzL3BpZWNlLmpzIiwid2VicGFjazovLy8uL3NyYy9waWVjZXMvc1BpZWNlLmpzIiwid2VicGFjazovLy8uL3NyYy9waWVjZXMvdFBpZWNlLmpzIiwid2VicGFjazovLy8uL3NyYy9waWVjZXMvelBpZWNlLmpzIl0sIm5hbWVzIjpbIkZpZWxkIiwiZmllbGROdW0iLCJmaWVsZCIsImkiLCJyb3ciLCJwdXNoIiwiY29sdW1uIiwiZG9jdW1lbnQiLCJjcmVhdGVFbGVtZW50IiwiY2xhc3NMaXN0IiwiYWRkIiwiYXBwZW5kIiwiYXBwZW5kQ2hpbGQiLCJfY3JlYXRlQ29sdW1uIiwiY29udGFpbmVyIiwicXVldWUiLCJRdWV1ZSIsIm5leHRCb3giLCJOZXh0Qm94IiwiaG9sZEJveCIsIkhvbGRCb3giLCJfY3JlYXRlRmllbGQiLCJjcmVhdGVRdWV1ZSIsImNyZWF0ZU5leHRCb3hlcyIsInByZXBlbmQiLCJjcmVhdGVCb3giLCJib3hXcmFwcGVyIiwiYm94IiwiaGVhZGluZyIsImlubmVySFRNTCIsIl9jcmVhdGVCb3hDb2x1bW4iLCJfY3JlYXRlTmV4dEJveENvbHVtbiIsImJveGVzIiwiX2NyZWF0ZU5leHRCb3giLCJxdWV1ZU1ldGVyIiwiYWRqdXN0UXVldWVIZWlnaHQiLCJwZXJjZW50YWdlIiwicXVlcnlTZWxlY3RvciIsInN0eWxlIiwiaGVpZ2h0IiwiR2FtZSIsIm9wdGlvbnMiLCJzZXRGaWVsZCIsImNvbG9ycyIsImdhbWVOdW0iLCJjdXJyZW50QmFnIiwic2h1ZmZsZUJhZyIsImdlbmVyYXRlQmFnIiwiY3VycmVudFBpZWNlIiwiaG9sZFBpZWNlIiwiZ2hvc3RQb3NpdGlvbiIsIm5leHRCYWciLCJjYW5Ib2xkIiwiaGFuZGxlQ2xlYXIiLCJkcm9wIiwicmlnaHQiLCJsZWZ0IiwiZG93biIsImRyb3BTcGVlZCIsIm1vdmVTcGVlZCIsImRyb3BQaWVjZSIsImJpbmQiLCJtb3ZlIiwibW92ZVBpZWNlIiwiYW5pbWF0ZSIsImZwc0ludGVydmFsIiwic3RhcnRUaW1lIiwibm93IiwidGhlbiIsImlzUGF1c2VkIiwia2V5SGVsZCIsIm9wcG9uZW50IiwiY29udHJvbHMiLCJ1cGNvbWluZ0xpbmVzIiwiY29tYm8iLCJ0U3BpbiIsInRTcGluU3RyZWFrIiwiY29tYm9HdWlkZSIsInN0YXJ0RWxldmF0aW5nIiwiY2xlYXJFbGV2YXRlSW50ZXJ2YWwiLCJlbGV2YXRlRGVsYXkiLCJjbGVhclRpbWVyIiwib1BpZWNlIiwiT1BpZWNlIiwiaVBpZWNlIiwiSVBpZWNlIiwidFBpZWNlIiwiVFBpZWNlIiwic1BpZWNlIiwiU1BpZWNlIiwielBpZWNlIiwiWlBpZWNlIiwibFBpZWNlIiwiTFBpZWNlIiwialBpZWNlIiwiSlBpZWNlIiwiX2dlbmVyYXRlRmllbGQiLCJzaGlmdCIsImNvb3JkaW5hdGVBcnJheXMiLCJPYmplY3QiLCJ2YWx1ZXMiLCJmb3JFYWNoIiwiYXJyYXkiLCJjb29yZGluYXRlIiwiY29sIiwiZmllbGRDb2x1bW5zIiwicXVlcnlTZWxlY3RvckFsbCIsImZpZWxkU3F1YXJlIiwiY2hpbGRyZW4iLCJjb2xvckNvZGUiLCJ0b3AiLCJwb3NpdGlvbiIsIm1hcCIsInNsaWNlIiwibWlkZGxlIiwiYm90dG9tIiwic3RvcHBlZCIsImhhbmdpbmdTcXVhcmVzIiwiX3BvcHVsYXRlR2hvc3RQb3NpdGlvbiIsInJlbmRlciIsImNsZWFyU2VsZkZyb21Cb2FyZCIsIl9nZW5lcmF0ZVBpZWNlIiwibmFtZSIsInNldEN1cnJlbnRQaWVjZSIsInNob3dDdXJyZW50QmFnIiwiX3BvcHVsYXRlSG9sZEJveCIsImNvbHVtbnMiLCJqIiwiY2xhc3NOYW1lIiwiZGlzcGxheVNxdWFyZXMiLCJzcXVhcmUiLCJwaWVjZU5hbWUiLCJnZXRFbGVtZW50c0J5Q2xhc3NOYW1lIiwiX3BvcHVsYXRlTmV4dEJveCIsInBpZWNlIiwiYmFnIiwiY3VycmVudEluZGV4IiwibGVuZ3RoIiwidGVtcG9yYXJ5VmFsdWUiLCJyYW5kb21JbmRleCIsIk1hdGgiLCJmbG9vciIsInJhbmRvbSIsInJvd0lkeCIsImNvbElkeCIsInNxdWFyZVZhbHVlIiwicmVtb3ZlIiwiYm9keSIsImFkZEV2ZW50TGlzdGVuZXIiLCJldmVudCIsImdhbWVJc092ZXIiLCJzZXRPdXRlclNxdWFyZXMiLCJ3aGljaCIsInR1cm5SaWdodCIsImNsZWFyR2hvc3RQb3NpdGlvbiIsInBvcHVsYXRlRmllbGQiLCJzZXRHaG9zdFBvc2l0aW9uIiwidHVybkxlZnQiLCJsZWZ0U2lkZUJsb2NrZWQiLCJyaWdodFNpZGVCbG9ja2VkIiwic29mdERyb3AiLCJob2xkIiwiaGFyZERyb3AiLCJoYW5kbGVQaWVjZVN0b3AiLCJjYW5jZWxBbmltYXRpb25GcmFtZSIsImxvd2VzdCIsImhpZ2hlc3QiLCJudW1MaW5lc0NsZWFyZWQiLCJpbmNsdWRlcyIsIl9icmluZ0Rvd25GaWVsZCIsImNsZWFyTGluZXMiLCJzdGFydGluZ1JvdyIsImxlZnRNb3N0IiwicmlnaHRNb3N0IiwibGVmdE1vc3RSb3ciLCJyaWdodE1vc3RSb3ciLCJsZWZ0TW9zdENvbCIsInJpZ2h0TW9zdENvbCIsIm51bUxpbmVzIiwiYWRkTGluZXNUb1F1ZXVlIiwiYWJzIiwicmVjZWl2ZVVwY29taW5nTGluZXMiLCJjbGVhckdob3N0Q2xhc3MiLCJwbGF5IiwiZnBzIiwiRGF0ZSIsInJlcXVlc3RBbmltYXRpb25GcmFtZSIsImVsYXBzZWQiLCJpc0ZhbGxpbmciLCJib3R0b21Nb3N0IiwiZGlyZWN0aW9uIiwiYXRUb3AiLCJnYW1lT3ZlciIsImhhbmRsZVRvcFBpZWNlIiwiYWRkVG9DdXJyZW50QmFnIiwicmVmaWxsTmV4dEJhZyIsIndpbm5lciIsImdhbWVPdmVyU2NyZWVuIiwiZ2FtZU92ZXJIZWFkaW5nIiwid2lubmVySGVhZGluZyIsInN0b3BUaW1lciIsInBsYXllciIsImdhcmJhZ2VMaW5lcyIsInJhbmRvbUhvbGUiLCJnYXJiYWdlUm93IiwiY29uY2F0Iiwic2V0SW50ZXJ2YWwiLCJjb25zb2xlIiwibG9nIiwiY2xlYXJJbnRlcnZhbCIsIm1pbnV0ZXMiLCJzZWNvbmRzIiwib2xkU2Vjb25kIiwiTnVtYmVyIiwib2xkTWludXRlIiwibmV3U2Vjb25kcyIsIm1lbnUiLCJNZW51IiwicmVuZGVyTWVudSIsImdldEVsZW1lbnRCeUlkIiwib3B0aW9uc1BsYXllcjEiLCJvcHRpb25zUGxheWVyMiIsImdhbWUxIiwiZ2FtZTIiLCJmaWVsZDEiLCJmaWVsZDIiLCJtdWx0aXBsYXllck1vZGUiLCJNdWx0aXBsYXllciIsImZpZWxkQ29udGFpbmVyMSIsImZpZWxkQ29udGFpbmVyMiIsInNpbmdsZVBsYXllckNvbnRlbnQiLCJTaW5nbGVQbGF5ZXJDb250ZW50IiwibXVsdGlwbGF5ZXJDb250ZW50IiwiTXVsdGlwbGF5ZXJDb250ZW50IiwibW9kYWwiLCJNb2RhbCIsInNpbmdsZVBsYXllckJ1dHRvbiIsIm11bHRpcGxheWVyQnV0dG9uIiwiYWRkRXZlbnRMaXN0ZW5lcnMiLCJyZW5kZXJTaW5nbGVQbGF5ZXIiLCJyZW5kZXJNdWx0aXBsYXllciIsInJlbW92ZUNoaWxkIiwianVzdGlmeUNvbnRlbnQiLCJjcmVhdGVUaW1lckFuZENvbnRyb2xzIiwiY3JlYXRlQ29tcGxldGVGaWVsZCIsImtleUxpc3RlbmVyIiwiY2hhbmdlQ29udHJvbHMiLCJhZGp1c3RFbGV2YXRlIiwiY3JlYXRlVGltZXIiLCJzdGFydFRpbWVyIiwiY29udHJvbHNDb250YWluZXIiLCJjcmVhdGVDb250cm9sc0NvbnRlbnQiLCJjcmVhdGUiLCJfY3JlYXRlQ2xvc2VNb2RhbExpbmsiLCJidXR0b25Db250YWluZXIiLCJyZW5kZXJCdXR0b25zIiwiYnV0dG9uIiwiY2xvc2VMaW5rIiwic3RhcnRNdWx0aXBsYXllciIsImNvbnRlbnQiLCJwcm9wcyIsImtleXMiLCJwbGF5ZXIxIiwicGxheWVyMiIsImNvbnRyb2xzRGl2IiwiaW1hZ2VzIiwiZGVzY3JpcHRpb25zIiwic3BhbnMiLCJkaXZzIiwibGFiZWwiLCJwIiwiaW1nIiwic2V0QXR0cmlidXRlIiwidGltZXJBbmRDb250cm9scyIsImNvbnRlbnREaXYiLCJ0aW1lciIsImNvbG9uIiwiZWxlIiwic2V0T3Bwb25lbnQiLCJ0dXJuaW5nUG9pbnQiLCJyZW1vdmVTcXVhcmVzIiwib2Zmc2V0R3VpZGUiLCJQaWVjZSIsInRvcE1vc3QiLCJyb3RhdGlvblN0YXRlIiwiY29vcmRpbmF0ZXNBcnJheSIsImNvbHVtblZhbHVlIiwicm93VmFsdWUiLCJwb3NpdGlvbkFycmF5Iiwib2xkU3F1YXJlIiwibmV3U3F1YXJlIiwicmVzdWx0IiwiX3NxdWFyZXNBcmVFcXVhbCIsIm9sZFBvc2l0aW9uIiwic2V0UmVtb3ZlU3F1YXJlcyIsIm9sZFR1cm5pbmdQb2ludCIsInNxdWFyZXMiLCJoZWlnaHREaWZmZXJlbmNlIiwid2lkdGhEaWZmZXJlbmNlIiwibmV3Q29sIiwibmV3Um93IiwibmV3U3F1YXJlcyIsInVuZGVmaW5lZCIsIndhbGxLaWNrIiwib2xkU3F1YXJlcyIsImZpbHRlciIsIl9pbmNsdWRlcyIsImNvb3JkaW5hdGVBcnJheSIsImJlbG93U3F1YXJlIiwic2lkZVNxdWFyZXMiLCJhZGphY2VudExlZnQiLCJhZGphY2VudFJpZ2h0IiwiY29vcmRpbmF0ZVBhaXIiLCJhY3Rpb24iLCJ2YWxpZFNwb3QiLCJzdGFydGluZ09mZnNldCIsIm5leHRPZmZzZXQiLCJiYXNlUG9zaXRpb24iLCJiYXNlVHVybmluZ1BvaW50Iiwic3RhcnRpbmdUcmFuc2xhdGlvbiIsInBvdGVudGlhbFRyYW5zbGF0aW9uIiwicm93U2hpZnQiLCJjb2xTaGlmdCIsInRyYW5zbGF0ZVZlcnRpY2FsIiwidHJhbnNsYXRlSG9yaXpvbnRhbCIsIm51bVRpbWVzUm93U2hpZnRlZCIsIm51bVRpbWVzQ29sU2hpZnRlZCIsIm5ld1Bvc2l0aW9uIl0sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FB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QUVaSSxZQUFNLEVBQUUsRUFGSTtBQUdaQyxZQUFNLEVBQUUsQ0FBQyxDQUFDLENBQUQsRUFBSSxDQUFKLENBQUQsRUFBUyxDQUFDLENBQUQsRUFBSSxDQUFKLENBQVQ7QUFISSxLQUFoQjtBQUtBLFVBQUtOLFNBQUwsR0FBaUIsQ0FBakI7QUFFQSxVQUFLMEssWUFBTCxHQUFvQixDQUFDLENBQUQsRUFBSSxDQUFKLENBQXBCO0FBRUEsVUFBS3RKLGNBQUwsR0FBc0IsQ0FBQyxDQUFDLENBQUQsRUFBSSxDQUFKLENBQUQsRUFBUyxDQUFDLENBQUQsRUFBSSxDQUFKLENBQVQsRUFBaUIsQ0FBQyxDQUFELEVBQUksQ0FBSixDQUFqQixFQUF5QixDQUFDLENBQUQsRUFBSSxDQUFKLENBQXpCLENBQXRCO0FBRUEsVUFBS3VKLGFBQUwsR0FBcUIsRUFBckI7QUFkVTtBQWViOzs7RUFoQitCRSw4QyIsImZpbGUiOiJtYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCIvZGlzdC9cIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvaW5kZXguanNcIik7XG4iLCJpbXBvcnQgSG9sZEJveCBmcm9tICcuL2hvbGRib3gnO1xuaW1wb3J0IE5leHRCb3ggZnJvbSAnLi9uZXh0Qm94JztcbmltcG9ydCBRdWV1ZSBmcm9tICcuL3F1ZXVlJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRmllbGQgeyAgXG4gICAgY29uc3RydWN0b3IoZmllbGROdW0pIHtcbiAgICAgICAgdGhpcy5maWVsZE51bSA9IGZpZWxkTnVtO1xuICAgIH1cbiAgICBcbiAgICBfZ2VuZXJhdGVGaWVsZCgpIHtcbiAgICAgICAgbGV0IGZpZWxkID0gW107XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMjA7IGkrKykge1xuICAgICAgICAgICAgbGV0IHJvdyA9IFswLDAsMCwwLDAsMCwwLDAsMCwwXTtcbiAgICAgICAgICAgIGZpZWxkLnB1c2gocm93KTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZmllbGQ7XG4gICAgfVxuXG4gICAgX2NyZWF0ZUNvbHVtbigpIHtcbiAgICAgICAgbGV0IGNvbHVtbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ1bFwiKTtcbiAgICAgICAgY29sdW1uLmNsYXNzTGlzdC5hZGQoYGZpZWxkLWNvbHVtbmAsIGBmaWVsZC0ke3RoaXMuZmllbGROdW19YCk7XG5cbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCAyMDsgaSsrKSB7XG4gICAgICAgICAgICBjb2x1bW4uYXBwZW5kKGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaVwiKSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGNvbHVtbjtcbiAgICB9XG5cbiAgICBfY3JlYXRlRmllbGQoKSB7XG4gICAgICAgIGxldCBmaWVsZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIGZpZWxkLmNsYXNzTGlzdC5hZGQoYGZpZWxkLWJveGAsIGBmaWVsZC0ke3RoaXMuZmllbGROdW19YCk7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMTA7IGkrKykge1xuICAgICAgICAgICAgZmllbGQuYXBwZW5kQ2hpbGQodGhpcy5fY3JlYXRlQ29sdW1uKCkpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBmaWVsZDtcbiAgICB9XG5cbiAgICBjcmVhdGVDb21wbGV0ZUZpZWxkKGNvbnRhaW5lcikge1xuICAgICAgICBsZXQgcXVldWUgPSBuZXcgUXVldWUodGhpcy5maWVsZE51bSk7XG4gICAgICAgIGxldCBuZXh0Qm94ID0gbmV3IE5leHRCb3godGhpcy5maWVsZE51bSk7XG4gICAgICAgIGxldCBob2xkQm94ID0gbmV3IEhvbGRCb3godGhpcy5maWVsZE51bSk7XG4gICAgICAgIGNvbnRhaW5lci5hcHBlbmQodGhpcy5fY3JlYXRlRmllbGQoKSk7XG4gICAgICAgIGNvbnRhaW5lci5hcHBlbmQocXVldWUuY3JlYXRlUXVldWUoKSk7XG4gICAgICAgIGNvbnRhaW5lci5hcHBlbmQobmV4dEJveC5jcmVhdGVOZXh0Qm94ZXMoKSk7XG4gICAgICAgIGNvbnRhaW5lci5wcmVwZW5kKGhvbGRCb3guY3JlYXRlQm94KCkpO1xuICAgICAgICByZXR1cm4gY29udGFpbmVyO1xuICAgIH1cblxufSIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIEhvbGRCb3gge1xuICAgIGNvbnN0cnVjdG9yKGZpZWxkTnVtKSB7XG4gICAgICAgIHRoaXMuZmllbGROdW0gPSBmaWVsZE51bTtcbiAgICB9XG5cbiAgICBfY3JlYXRlQm94Q29sdW1uKCkge1xuICAgICAgICBsZXQgY29sdW1uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInVsXCIpO1xuICAgICAgICBjb2x1bW4uY2xhc3NMaXN0LmFkZChgaG9sZC1jb2x1bW5gLCBgZmllbGQtJHt0aGlzLmZpZWxkTnVtfWApO1xuXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgNDsgaSsrKSB7XG4gICAgICAgICAgICBjb2x1bW4uYXBwZW5kKGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaVwiKSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGNvbHVtbjtcbiAgICB9XG5cbiAgICBjcmVhdGVCb3goKSB7XG4gICAgICAgIGxldCBib3hXcmFwcGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgYm94V3JhcHBlci5jbGFzc0xpc3QuYWRkKGBob2xkLWJveC13cmFwcGVyYCwgYGZpZWxkLSR7dGhpcy5maWVsZE51bX1gKTtcbiAgICAgICAgbGV0IGJveCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIGJveC5jbGFzc0xpc3QuYWRkKGBob2xkLWJveGAsIGBmaWVsZC0ke3RoaXMuZmllbGROdW19YCk7XG4gICAgICAgIGxldCBoZWFkaW5nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgyXCIpO1xuICAgICAgICBoZWFkaW5nLmlubmVySFRNTCA9IFwiSE9MRFwiO1xuICAgICAgICBib3hXcmFwcGVyLmFwcGVuZENoaWxkKGhlYWRpbmcpO1xuICAgICAgICBib3hXcmFwcGVyLmFwcGVuZENoaWxkKGJveCk7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgNTsgaSsrKSB7XG4gICAgICAgICAgICBib3guYXBwZW5kQ2hpbGQodGhpcy5fY3JlYXRlQm94Q29sdW1uKCkpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBib3hXcmFwcGVyO1xuICAgIH1cbn0iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBOZXh0Qm94IHtcbiAgICBjb25zdHJ1Y3RvcihmaWVsZE51bSkge1xuICAgICAgICB0aGlzLmZpZWxkTnVtID0gZmllbGROdW07XG4gICAgfVxuXG4gICAgX2NyZWF0ZU5leHRCb3hDb2x1bW4oKSB7XG4gICAgICAgIGxldCBjb2x1bW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidWxcIik7XG4gICAgICAgIGNvbHVtbi5jbGFzc0xpc3QuYWRkKGBuZXh0LWNvbHVtbmAsIGBmaWVsZC0ke3RoaXMuZmllbGROdW19YCk7XG5cbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCA0OyBpKyspIHtcbiAgICAgICAgICAgIGNvbHVtbi5hcHBlbmQoZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpXCIpKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gY29sdW1uO1xuICAgIH1cblxuICAgIF9jcmVhdGVOZXh0Qm94KCkge1xuICAgICAgICBsZXQgYm94ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgYm94LmNsYXNzTGlzdC5hZGQoYG5leHQtYm94YCwgYGZpZWxkLSR7dGhpcy5maWVsZE51bX1gKTtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCA1OyBpKyspIHtcbiAgICAgICAgICAgIGJveC5hcHBlbmRDaGlsZCh0aGlzLl9jcmVhdGVOZXh0Qm94Q29sdW1uKCkpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBib3g7XG4gICAgfVxuXG4gICAgY3JlYXRlTmV4dEJveGVzKCkge1xuICAgICAgICBsZXQgYm94ZXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICBsZXQgaGVhZGluZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMlwiKTtcbiAgICAgICAgaGVhZGluZy5pbm5lckhUTUwgPSBcIk5FWFRcIjtcbiAgICAgICAgYm94ZXMuY2xhc3NMaXN0LmFkZChgbmV4dC1ib3hlc2AsIGBmaWVsZC0ke3RoaXMuZmllbGROdW19YCk7XG4gICAgICAgIGJveGVzLmFwcGVuZENoaWxkKGhlYWRpbmcpO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IDU7IGkrKykge1xuICAgICAgICAgICAgYm94ZXMuYXBwZW5kQ2hpbGQodGhpcy5fY3JlYXRlTmV4dEJveCgpKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gYm94ZXM7XG4gICAgfVxufSIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIFF1ZXVlIHtcbiAgICBjb25zdHJ1Y3RvcihmaWVsZE51bSkge1xuICAgICAgICB0aGlzLmZpZWxkTnVtID0gZmllbGROdW07XG4gICAgfVxuXG4gICAgY3JlYXRlUXVldWUoKSB7XG4gICAgICAgIGxldCBxdWV1ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIHF1ZXVlLmNsYXNzTGlzdC5hZGQoYHF1ZXVlYCwgYGZpZWxkLSR7dGhpcy5maWVsZE51bX1gKTtcbiAgICAgICAgbGV0IHF1ZXVlTWV0ZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICBxdWV1ZU1ldGVyLmNsYXNzTGlzdC5hZGQoYHF1ZXVlLW1ldGVyYCwgYGZpZWxkLSR7dGhpcy5maWVsZE51bX1gKTtcbiAgICAgICAgcXVldWUuYXBwZW5kQ2hpbGQocXVldWVNZXRlcik7XG4gICAgICAgIHJldHVybiBxdWV1ZTtcbiAgICB9XG59XG5cbmV4cG9ydCBjb25zdCBhZGp1c3RRdWV1ZUhlaWdodCA9IChmaWVsZE51bSwgcGVyY2VudGFnZSkgPT4ge1xuICAgIGxldCBxdWV1ZU1ldGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLnF1ZXVlLW1ldGVyLmZpZWxkLSR7ZmllbGROdW19YCk7XG4gICAgaWYgKHBlcmNlbnRhZ2UgPiAxMDApIHBlcmNlbnRhZ2UgPSAxMDA7XG4gICAgcXVldWVNZXRlci5zdHlsZS5oZWlnaHQgPSBgJHtwZXJjZW50YWdlfSVgXG59IiwiaW1wb3J0IEZpZWxkIGZyb20gJy4uL2ZpZWxkL2ZpZWxkJztcbmltcG9ydCBPUGllY2UgZnJvbSAnLi4vcGllY2VzL29QaWVjZSc7XG5pbXBvcnQgSVBpZWNlIGZyb20gJy4uL3BpZWNlcy9pUGllY2UnO1xuaW1wb3J0IFRQaWVjZSBmcm9tICcuLi9waWVjZXMvdFBpZWNlJztcbmltcG9ydCBTUGllY2UgZnJvbSAnLi4vcGllY2VzL3NQaWVjZSc7XG5pbXBvcnQgWlBpZWNlIGZyb20gJy4uL3BpZWNlcy96UGllY2UnO1xuaW1wb3J0IExQaWVjZSBmcm9tICcuLi9waWVjZXMvbFBpZWNlJztcbmltcG9ydCBKUGllY2UgZnJvbSAnLi4vcGllY2VzL2pQaWVjZSc7XG5pbXBvcnQgeyBhZGp1c3RRdWV1ZUhlaWdodCB9IGZyb20gJy4uL2ZpZWxkL3F1ZXVlJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgR2FtZSB7XG4gICAgY29uc3RydWN0b3Iob3B0aW9ucykge1xuICAgICAgICB0aGlzLmZpZWxkID0gdGhpcy5zZXRGaWVsZCgpXG5cbiAgICAgICAgdGhpcy5jb2xvcnMgPSB7XG4gICAgICAgICAgICAxOiBcInllbGxvd1wiLFxuICAgICAgICAgICAgMjogXCJibHVlXCIsXG4gICAgICAgICAgICAzOiBcInB1cnBsZVwiLFxuICAgICAgICAgICAgNDogXCJncmVlblwiLFxuICAgICAgICAgICAgNTogXCJyZWRcIixcbiAgICAgICAgICAgIDY6IFwib3JhbmdlXCIsXG4gICAgICAgICAgICA3OiBcImRhcmstYmx1ZVwiLFxuICAgICAgICAgICAgODogXCJncmV5XCJcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuZ2FtZU51bSA9IG9wdGlvbnMuZ2FtZU51bTtcblxuICAgICAgICB0aGlzLmN1cnJlbnRCYWcgPSB0aGlzLnNodWZmbGVCYWcodGhpcy5nZW5lcmF0ZUJhZygpKTtcbiAgICAgICAgdGhpcy5jdXJyZW50UGllY2UgPSAnJztcbiAgICAgICAgdGhpcy5ob2xkUGllY2UgPSAnJztcbiAgICAgICAgdGhpcy5naG9zdFBvc2l0aW9uID0gJyc7XG4gICAgICAgIHRoaXMubmV4dEJhZyA9IHRoaXMuc2h1ZmZsZUJhZyh0aGlzLmdlbmVyYXRlQmFnKCkpO1xuXG4gICAgICAgIC8vIHByZXZlbnRzIHBsYXllciBmcm9tIGhvbGRpbmcgcGllY2UgbXVsdGlwbGUgdGltZXNcbiAgICAgICAgdGhpcy5jYW5Ib2xkID0gdHJ1ZTtcblxuICAgICAgICB0aGlzLmhhbmRsZUNsZWFyID0ge1xuICAgICAgICAgICAgZHJvcDogJycsXG4gICAgICAgICAgICByaWdodDogJycsXG4gICAgICAgICAgICBsZWZ0OiAnJyxcbiAgICAgICAgICAgIGRvd246ICcnXG4gICAgICAgIH07XG5cbiAgICAgICAgLy8gZm9yIGFuaW1hdGlvbnNcbiAgICAgICAgdGhpcy5kcm9wU3BlZWQgPSAxO1xuICAgICAgICB0aGlzLm1vdmVTcGVlZCA9IG9wdGlvbnMubW92ZVNwZWVkO1xuICAgICAgICB0aGlzLmRyb3BQaWVjZSA9IHRoaXMuZHJvcFBpZWNlLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMuZHJvcCA9IHRoaXMuZHJvcC5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLm1vdmUgPSB0aGlzLm1vdmUuYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5tb3ZlUGllY2UgPSB0aGlzLm1vdmVQaWVjZS5iaW5kKHRoaXMpO1xuXG4gICAgICAgIC8vIGtlZXAgdHJhY2sgb2YgdGhlIGZvbGxvd2luZyB2YXJpYWJsZXMgZm9yIHJlcXVlc3RBbmltYXRpb25GcmFtZSB0aHJvdHRsaW5nXG4gICAgICAgIHRoaXMuYW5pbWF0ZSA9IHtcbiAgICAgICAgICAgIGRyb3A6IHtcbiAgICAgICAgICAgICAgICBmcHNJbnRlcnZhbDogJycsXG4gICAgICAgICAgICAgICAgc3RhcnRUaW1lOiAnJyxcbiAgICAgICAgICAgICAgICBub3c6ICcnLFxuICAgICAgICAgICAgICAgIHRoZW46ICcnXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgcmlnaHQ6IHtcbiAgICAgICAgICAgICAgICBmcHNJbnRlcnZhbDogJycsXG4gICAgICAgICAgICAgICAgc3RhcnRUaW1lOiAnJyxcbiAgICAgICAgICAgICAgICBub3c6ICcnLFxuICAgICAgICAgICAgICAgIHRoZW46ICcnXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgbGVmdDoge1xuICAgICAgICAgICAgICAgIGZwc0ludGVydmFsOiAnJyxcbiAgICAgICAgICAgICAgICBzdGFydFRpbWU6ICcnLFxuICAgICAgICAgICAgICAgIG5vdzogJycsXG4gICAgICAgICAgICAgICAgdGhlbjogJydcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBkb3duOiB7XG4gICAgICAgICAgICAgICAgZnBzSW50ZXJ2YWw6ICcnLFxuICAgICAgICAgICAgICAgIHN0YXJ0VGltZTogJycsXG4gICAgICAgICAgICAgICAgbm93OiAnJyxcbiAgICAgICAgICAgICAgICB0aGVuOiAnJ1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLy8gcGF1c2luZyB0aGUgZ2FtZVxuICAgICAgICB0aGlzLmlzUGF1c2VkID0gZmFsc2U7XG5cbiAgICAgICAgdGhpcy5rZXlIZWxkID0ge1xuICAgICAgICAgICAgZG93bjogZmFsc2UsXG4gICAgICAgICAgICByaWdodDogZmFsc2UsXG4gICAgICAgICAgICBsZWZ0OiBmYWxzZVxuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5vcHBvbmVudCA9IFwiXCI7XG4gICAgICAgIHRoaXMuY29udHJvbHMgPSBvcHRpb25zLmNvbnRyb2xzO1xuICAgICAgICB0aGlzLnVwY29taW5nTGluZXMgPSAwO1xuICAgICAgICB0aGlzLmNvbWJvID0gLTE7XG4gICAgICAgIHRoaXMudFNwaW4gPSBmYWxzZTtcbiAgICAgICAgdGhpcy50U3BpblN0cmVhayA9IGZhbHNlO1xuICAgICAgICB0aGlzLmNvbWJvR3VpZGUgPSB7XG4gICAgICAgICAgICAwOiAwLFxuICAgICAgICAgICAgMTogMCwgXG4gICAgICAgICAgICAyOiAxLFxuICAgICAgICAgICAgMzogMSxcbiAgICAgICAgICAgIDQ6IDEsXG4gICAgICAgICAgICA1OiAyLFxuICAgICAgICAgICAgNjogMixcbiAgICAgICAgICAgIDc6IDMsXG4gICAgICAgICAgICA4OiAzLFxuICAgICAgICAgICAgOTogNCxcbiAgICAgICAgICAgIDEwOiA0LFxuICAgICAgICAgICAgMTE6IDQsXG4gICAgICAgICAgICAxMjogNVxuICAgICAgICB9O1xuXG4gICAgICAgIC8vIHNpbmdsZSBwbGF5ZXJcbiAgICAgICAgdGhpcy5zdGFydEVsZXZhdGluZyA9IHRoaXMuc3RhcnRFbGV2YXRpbmcuYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5jbGVhckVsZXZhdGVJbnRlcnZhbCA9ICcnO1xuICAgICAgICB0aGlzLmVsZXZhdGVEZWxheSA9IDUwMDA7XG4gICAgICAgIHRoaXMuY2xlYXJUaW1lciA9ICcnO1xuICAgIH1cblxuICAgIGdlbmVyYXRlQmFnKCkge1xuICAgICAgICBsZXQgb1BpZWNlID0gbmV3IE9QaWVjZSgpO1xuICAgICAgICBsZXQgaVBpZWNlID0gbmV3IElQaWVjZSgpO1xuICAgICAgICBsZXQgdFBpZWNlID0gbmV3IFRQaWVjZSgpO1xuICAgICAgICBsZXQgc1BpZWNlID0gbmV3IFNQaWVjZSgpO1xuICAgICAgICBsZXQgelBpZWNlID0gbmV3IFpQaWVjZSgpO1xuICAgICAgICBsZXQgbFBpZWNlID0gbmV3IExQaWVjZSgpO1xuICAgICAgICBsZXQgalBpZWNlID0gbmV3IEpQaWVjZSgpO1xuXG4gICAgICAgIHJldHVybiBbb1BpZWNlLCBpUGllY2UsIHRQaWVjZSwgc1BpZWNlLCB6UGllY2UsIGxQaWVjZSwgalBpZWNlXTtcbiAgICB9XG5cbiAgICBzZXRGaWVsZCgpIHtcbiAgICAgICAgbGV0IGZpZWxkID0gbmV3IEZpZWxkKCk7XG4gICAgICAgIHJldHVybiBmaWVsZC5fZ2VuZXJhdGVGaWVsZCgpO1xuICAgIH1cblxuICAgIC8vIHRha2UgcGllY2UgZnJvbSBjdXJyZW50QmFnIGFuZCBzZXQgaXQgYXMgdGhlIGN1cnJlbnQgcGllY2VcbiAgICBzZXRDdXJyZW50UGllY2UoKSB7XG4gICAgICAgIHRoaXMuY3VycmVudFBpZWNlID0gdGhpcy5jdXJyZW50QmFnLnNoaWZ0KCk7XG4gICAgfVxuXG4gICAgLy8gcmVtb3ZlcyBvbGQgZ2hvc3QgcG9zaXRpb24gZnJvbSB0aGlzLmZpZWxkIGJlZm9yZSBjaGFuZ2luZyBwaWVjZSBwb3NpdGlvblxuICAgIGNsZWFyR2hvc3RQb3NpdGlvbigpIHtcbiAgICAgICAgbGV0IGNvb3JkaW5hdGVBcnJheXMgPSBPYmplY3QudmFsdWVzKHRoaXMuZ2hvc3RQb3NpdGlvbik7XG4gICAgICAgIGNvb3JkaW5hdGVBcnJheXMuZm9yRWFjaChhcnJheSA9PiB7XG4gICAgICAgICAgICBhcnJheS5mb3JFYWNoKGNvb3JkaW5hdGUgPT4ge1xuICAgICAgICAgICAgICAgIGxldCBbcm93LCBjb2xdID0gW2Nvb3JkaW5hdGVbMF0sIGNvb3JkaW5hdGVbMV1dO1xuICAgICAgICAgICAgICAgIC8vIHByZXZlbnQgbWV0aG9kIGZyb20gY2xlYXJpbmcgcGllY2UgaWYgaXQgaGFwcGVucyB0byBiZSB3aGVyZSB0aGUgZ2hvc3QgcG9zaXRpb24gc2hvdWxkIGJlXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuZmllbGRbcm93XSAmJiB0aGlzLmZpZWxkW3Jvd11bY29sXSA9PT0gXCJ4XCIgJiYgcm93ID49IDApIHRoaXMuZmllbGRbcm93XVtjb2xdID0gMDtcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIC8vIGNsZWFycyB0aGUgY29sb3IgY2xhc3NlcyBmcm9tIHRoZSBicm93c2VyIGZpZWxkXG4gICAgY2xlYXJHaG9zdENsYXNzKCkge1xuICAgICAgICBsZXQgZmllbGRDb2x1bW5zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChgLmZpZWxkLWNvbHVtbi5maWVsZC0ke3RoaXMuZ2FtZU51bX1gKTtcbiAgICAgICAgT2JqZWN0LnZhbHVlcyh0aGlzLmdob3N0UG9zaXRpb24pLmZvckVhY2goYXJyYXkgPT4ge1xuICAgICAgICAgICAgYXJyYXkuZm9yRWFjaChjb29yZGluYXRlID0+IHtcbiAgICAgICAgICAgICAgICBsZXQgW3JvdywgY29sXSA9IFtjb29yZGluYXRlWzBdLCBjb29yZGluYXRlWzFdXTtcbiAgICAgICAgICAgICAgICBsZXQgZmllbGRTcXVhcmUgPSBmaWVsZENvbHVtbnNbY29sXS5jaGlsZHJlbltyb3ddO1xuICAgICAgICAgICAgICAgIGlmIChmaWVsZFNxdWFyZSkge1xuICAgICAgICAgICAgICAgICAgICBmaWVsZFNxdWFyZS5jbGFzc0xpc3QgPSB0aGlzLmNvbG9yc1t0aGlzLmN1cnJlbnRQaWVjZS5jb2xvckNvZGVdO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pXG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIC8vIGZpbmQgYXBwcm9wcmlhdGUgZ2hvc3QgcG9zaXRpb24gYXMgcGllY2UgcG9zaXRpb24gY2hhbmdlc1xuICAgIHNldEdob3N0UG9zaXRpb24oKSB7XG4gICAgICAgIGxldCBnaG9zdFBvc2l0aW9uID0ge1xuICAgICAgICAgICAgdG9wOiB0aGlzLmN1cnJlbnRQaWVjZS5wb3NpdGlvbi50b3AubWFwKGNvb3JkaW5hdGUgPT4gY29vcmRpbmF0ZS5zbGljZSgpKSxcbiAgICAgICAgICAgIG1pZGRsZTogdGhpcy5jdXJyZW50UGllY2UucG9zaXRpb24ubWlkZGxlLm1hcChjb29yZGluYXRlID0+IGNvb3JkaW5hdGUuc2xpY2UoKSksXG4gICAgICAgICAgICBib3R0b206IHRoaXMuY3VycmVudFBpZWNlLnBvc2l0aW9uLmJvdHRvbS5tYXAoY29vcmRpbmF0ZSA9PiBjb29yZGluYXRlLnNsaWNlKCkpXG4gICAgICAgIH1cbiAgICAgICAgbGV0IHN0b3BwZWQgPSBmYWxzZTtcbiAgICAgICAgd2hpbGUgKCFzdG9wcGVkKSB7XG4gICAgICAgICAgICBsZXQgaGFuZ2luZ1NxdWFyZXMgPSB0aGlzLmN1cnJlbnRQaWVjZS5oYW5naW5nU3F1YXJlcyhnaG9zdFBvc2l0aW9uKTtcbiAgICAgICAgICAgIGhhbmdpbmdTcXVhcmVzLmZvckVhY2goY29vcmRpbmF0ZSA9PiB7XG4gICAgICAgICAgICAgICAgbGV0IFtyb3csIGNvbF0gPSBbY29vcmRpbmF0ZVswXSwgY29vcmRpbmF0ZVsxXV07XG4gICAgICAgICAgICAgICAgaWYgKHJvdyA8IDAgfHwgcm93ICsgMSA9PT0gMjAgfHwgdGhpcy5maWVsZFtyb3cgKyAxXVtjb2xdKSBzdG9wcGVkID0gdHJ1ZTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgaWYgKHN0b3BwZWQpIGJyZWFrO1xuICAgICAgICAgICAgZ2hvc3RQb3NpdGlvbi50b3AgPSBnaG9zdFBvc2l0aW9uLnRvcC5tYXAoYXJyYXkgPT4gW2FycmF5WzBdICsgMSwgYXJyYXlbMV1dKTtcbiAgICAgICAgICAgIGdob3N0UG9zaXRpb24ubWlkZGxlID0gZ2hvc3RQb3NpdGlvbi5taWRkbGUubWFwKGFycmF5ID0+IFthcnJheVswXSArIDEsIGFycmF5WzFdXSk7XG4gICAgICAgICAgICBnaG9zdFBvc2l0aW9uLmJvdHRvbSA9IGdob3N0UG9zaXRpb24uYm90dG9tLm1hcChhcnJheSA9PiBbYXJyYXlbMF0gKyAxLCBhcnJheVsxXV0pO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuZ2hvc3RQb3NpdGlvbiA9IGdob3N0UG9zaXRpb247XG4gICAgICAgIHRoaXMuX3BvcHVsYXRlR2hvc3RQb3NpdGlvbigpO1xuICAgIH1cblxuICAgIC8vIHBvcHVsYXRlIHRoaXMuZmllbGQgd2l0aCAneCcgd2hlcmV2ZXIgdGhlIGdob3N0IHBvc2l0aW9uIGlzIGNhbGN1bGF0ZWQgdG8gYmVcbiAgICBfcG9wdWxhdGVHaG9zdFBvc2l0aW9uKCkge1xuICAgICAgICBsZXQgY29vcmRpbmF0ZUFycmF5cyA9IE9iamVjdC52YWx1ZXModGhpcy5naG9zdFBvc2l0aW9uKTtcbiAgICAgICAgY29vcmRpbmF0ZUFycmF5cy5mb3JFYWNoKGFycmF5ID0+IHtcbiAgICAgICAgICAgIGFycmF5LmZvckVhY2goY29vcmRpbmF0ZSA9PiB7XG4gICAgICAgICAgICAgICAgbGV0IFtyb3csIGNvbF0gPSBbY29vcmRpbmF0ZVswXSwgY29vcmRpbmF0ZVsxXV07XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuZmllbGRbcm93XSAmJiB0aGlzLmZpZWxkW3Jvd11bY29sXSAhPT0gdGhpcy5jdXJyZW50UGllY2UuY29sb3JDb2RlKSB0aGlzLmZpZWxkW3Jvd11bY29sXSA9IFwieFwiO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMucmVuZGVyKCk7XG4gICAgfVxuXG4gICAgLy8gaG9sZCBwaWVjZSBmb3IgbGF0ZXIgdXNlIFxuICAgIGhvbGQoKSB7XG4gICAgICAgIGlmICghdGhpcy5jYW5Ib2xkKSByZXR1cm47XG4gICAgICAgIHRoaXMuY3VycmVudFBpZWNlLmNsZWFyU2VsZkZyb21Cb2FyZCh0aGlzLmZpZWxkKTsgXG4gICAgICAgIHRoaXMucmVuZGVyKCk7XG5cbiAgICAgICAgaWYgKCF0aGlzLmhvbGRQaWVjZSkge1xuICAgICAgICAgICAgLy8gcGFzcyBjdXJyZW50IHBpZWNlIG5hbWUgaW50byBnZW5lcmF0ZSBwaWVjZSBpbiBvcmRlciB0byBnZW5lcmF0ZSBhIG5ldyBwaWVjZSBpbnN0YW5jZVxuICAgICAgICAgICAgdGhpcy5ob2xkUGllY2UgPSB0aGlzLl9nZW5lcmF0ZVBpZWNlKHRoaXMuY3VycmVudFBpZWNlLm5hbWUpO1xuICAgICAgICAgICAgdGhpcy5zZXRDdXJyZW50UGllY2UoKTtcbiAgICAgICAgICAgIC8vIHJlLXJlbmRlciBuZXh0IGJveGVzIHRvIGFwcHJvcHJpYXRlbHkgc2hvdyBjdXJyZW50IGJhZ1xuICAgICAgICAgICAgdGhpcy5zaG93Q3VycmVudEJhZygpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5jdXJyZW50UGllY2UgPSB0aGlzLl9nZW5lcmF0ZVBpZWNlKHRoaXMuY3VycmVudFBpZWNlLm5hbWUpO1xuICAgICAgICAgICAgW3RoaXMuY3VycmVudFBpZWNlLCB0aGlzLmhvbGRQaWVjZV0gPSBbdGhpcy5ob2xkUGllY2UsIHRoaXMuY3VycmVudFBpZWNlXTtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgLy8gZGlzYWJsZSBob2xkLXBpZWNlIHJpZ2h0IGFmdGVyIHBsYXllciBob2xkcyBhIHBpZWNlXG4gICAgICAgIHRoaXMuY2FuSG9sZCA9IGZhbHNlO1xuXG4gICAgICAgIHRoaXMuX3BvcHVsYXRlSG9sZEJveCgpO1xuICAgIH1cblxuICAgIF9wb3B1bGF0ZUhvbGRCb3goKSB7XG4gICAgICAgIGxldCBjb2x1bW5zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLmhvbGQtYm94LmZpZWxkLSR7dGhpcy5nYW1lTnVtfWApLmNoaWxkcmVuO1xuXG4gICAgICAgIC8vIHJlbW92ZSBjb2xvcnMgZnJvbSBwcmV2aW91cyBwaWVjZXNcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCA1OyBpKyspIHtcbiAgICAgICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgNDsgaisrKSB7XG4gICAgICAgICAgICAgICAgLy8gY29sdW1ucy5jaGlsZHJlbiBpcyBub2RlbGlzdCBvZiA8bGlzPlxuICAgICAgICAgICAgICAgIGNvbHVtbnNbaV0uY2hpbGRyZW5bal0uY2xhc3NOYW1lID0gXCJcIjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuaG9sZFBpZWNlLmRpc3BsYXlTcXVhcmVzLmZvckVhY2goc3F1YXJlID0+IHtcbiAgICAgICAgICAgIGxldCBbY29sLCByb3ddID0gW3NxdWFyZVswXSwgc3F1YXJlWzFdXTtcbiAgICAgICAgICAgIGNvbHVtbnNbY29sXS5jaGlsZHJlbltyb3ddLmNsYXNzTGlzdC5hZGQodGhpcy5jb2xvcnNbdGhpcy5ob2xkUGllY2UuY29sb3JDb2RlXSk7XG4gICAgICAgIH0pXG5cbiAgICB9XG5cbiAgICAvLyB1c2VkIGZvciB0aGlzLmhvbGQoKTogZ2VuZXJhdGUgYSBuZXcgcGllY2Ugc28gdGhhdCBhIGhvbGRwaWVjZSB0aGF0IGlzIHJlLXJlbmRlcmVkIG9uIHRoZSBib2FyZCB3aWxsIG5vdCBzdGFydCBmcm9tIHRoZSBvbGQgcG9zaXRpb25cbiAgICBfZ2VuZXJhdGVQaWVjZShwaWVjZU5hbWUpIHtcbiAgICAgICAgc3dpdGNoKHBpZWNlTmFtZSkge1xuICAgICAgICAgICAgY2FzZSBcIlRQaWVjZVwiOlxuICAgICAgICAgICAgICAgIHJldHVybiBuZXcgVFBpZWNlO1xuICAgICAgICAgICAgY2FzZSBcIk9QaWVjZVwiOlxuICAgICAgICAgICAgICAgIHJldHVybiBuZXcgT1BpZWNlO1xuICAgICAgICAgICAgY2FzZSBcIklQaWVjZVwiOlxuICAgICAgICAgICAgICAgIHJldHVybiBuZXcgSVBpZWNlO1xuICAgICAgICAgICAgY2FzZSBcIkxQaWVjZVwiOlxuICAgICAgICAgICAgICAgIHJldHVybiBuZXcgTFBpZWNlO1xuICAgICAgICAgICAgY2FzZSBcIkpQaWVjZVwiOlxuICAgICAgICAgICAgICAgIHJldHVybiBuZXcgSlBpZWNlO1xuICAgICAgICAgICAgY2FzZSBcIlNQaWVjZVwiOlxuICAgICAgICAgICAgICAgIHJldHVybiBuZXcgU1BpZWNlO1xuICAgICAgICAgICAgY2FzZSBcIlpQaWVjZVwiOlxuICAgICAgICAgICAgICAgIHJldHVybiBuZXcgWlBpZWNlO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLy8gdGFrZSBvbmUgcGllY2UgZnJvbSBuZXh0QmFnIGFuZCBhZGQgdG8gY3VycmVudEJhZ1xuICAgIGFkZFRvQ3VycmVudEJhZygpIHtcbiAgICAgICAgdGhpcy5jdXJyZW50QmFnLnB1c2godGhpcy5uZXh0QmFnLnNoaWZ0KCkpO1xuICAgIH1cblxuICAgIHNob3dDdXJyZW50QmFnKCkge1xuICAgICAgICBsZXQgYm94ZXMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKGBuZXh0LWJveCBmaWVsZC0ke3RoaXMuZ2FtZU51bX1gKTtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCA1OyBpKyspIHtcbiAgICAgICAgICAgIHRoaXMuX3BvcHVsYXRlTmV4dEJveChib3hlc1tpXSwgdGhpcy5jdXJyZW50QmFnW2ldKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIF9wb3B1bGF0ZU5leHRCb3goYm94LCBwaWVjZSkge1xuICAgICAgICAvLyBjb2x1bW5zIGlzIG5vZGVsaXN0IG9mIDx1bHM+XG4gICAgICAgIGxldCBjb2x1bW5zID0gYm94LmNoaWxkcmVuO1xuXG4gICAgICAgIC8vIHJlbW92ZSBjb2xvcnMgZnJvbSBwcmV2aW91cyBwaWVjZVxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IDU7IGkrKykge1xuICAgICAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCA0OyBqKyspIHtcbiAgICAgICAgICAgICAgICAvLyBjb2x1bW5zLmNoaWxkcmVuIGlzIG5vZGVsaXN0IG9mIDxsaXM+XG4gICAgICAgICAgICAgICAgY29sdW1uc1tpXS5jaGlsZHJlbltqXS5jbGFzc05hbWUgPSBcIlwiO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLy8gcG9wdWxhdGUgYm94IHdpdGggbmV3IHBpZWNlXG4gICAgICAgIHBpZWNlLmRpc3BsYXlTcXVhcmVzLmZvckVhY2goc3F1YXJlID0+IHtcbiAgICAgICAgICAgIGxldCBbY29sLCByb3ddID0gW3NxdWFyZVswXSwgc3F1YXJlWzFdXTtcbiAgICAgICAgICAgIGNvbHVtbnNbY29sXS5jaGlsZHJlbltyb3ddLmNsYXNzTGlzdC5hZGQodGhpcy5jb2xvcnNbcGllY2UuY29sb3JDb2RlXSk7XG4gICAgICAgIH0pXG4gICAgfVxuXG4gICAgLy8gcmVmaWxsIG5leHQgYmFnLCB3aWxsIG9ubHkgYmUgY2FsbGVkIG9uY2UgbmV4dEJhZyBiZWNvbWVzIGVtcHR5XG4gICAgcmVmaWxsTmV4dEJhZygpIHtcbiAgICAgICAgdGhpcy5uZXh0QmFnID0gdGhpcy5nZW5lcmF0ZUJhZygpO1xuICAgIH1cblxuICAgIC8vIGltcGxlbWVudGF0aW9uIG9mIHNodWZmbGUgZm91bmQgb24gaHR0cHM6Ly9zdGFja292ZXJmbG93LmNvbS9xdWVzdGlvbnMvMjQ1MDk1NC9ob3ctdG8tcmFuZG9taXplLXNodWZmbGUtYS1qYXZhc2NyaXB0LWFycmF5IzI0NTA5NzZcbiAgICBzaHVmZmxlQmFnKGJhZykge1xuICAgICAgICB2YXIgY3VycmVudEluZGV4ID0gYmFnLmxlbmd0aCwgdGVtcG9yYXJ5VmFsdWUsIHJhbmRvbUluZGV4O1xuXG4gICAgICAgIC8vIFdoaWxlIHRoZXJlIHJlbWFpbiBlbGVtZW50cyB0byBzaHVmZmxlLi4uXG4gICAgICAgIHdoaWxlICgwICE9PSBjdXJyZW50SW5kZXgpIHtcblxuICAgICAgICAgICAgLy8gUGljayBhIHJlbWFpbmluZyBlbGVtZW50Li4uXG4gICAgICAgICAgICByYW5kb21JbmRleCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIGN1cnJlbnRJbmRleCk7XG4gICAgICAgICAgICBjdXJyZW50SW5kZXggLT0gMTtcblxuICAgICAgICAgICAgLy8gQW5kIHN3YXAgaXQgd2l0aCB0aGUgY3VycmVudCBlbGVtZW50LlxuICAgICAgICAgICAgdGVtcG9yYXJ5VmFsdWUgPSBiYWdbY3VycmVudEluZGV4XTtcbiAgICAgICAgICAgIGJhZ1tjdXJyZW50SW5kZXhdID0gYmFnW3JhbmRvbUluZGV4XTtcbiAgICAgICAgICAgIGJhZ1tyYW5kb21JbmRleF0gPSB0ZW1wb3JhcnlWYWx1ZTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gYmFnO1xuICAgIH1cbiAgICAvLyBpbXBsZW1lbnRhdGlvbiBvZiBzaHVmZmxlIGZvdW5kIG9uIGh0dHBzOi8vc3RhY2tvdmVyZmxvdy5jb20vcXVlc3Rpb25zLzI0NTA5NTQvaG93LXRvLXJhbmRvbWl6ZS1zaHVmZmxlLWEtamF2YXNjcmlwdC1hcnJheSMyNDUwOTc2XG5cbiAgICAvLyBsb29rIHRocm91Z2ggZmllbGQsIGlmIGZpZWxkW3Jvd11bY29sXSBjb250YWlucyBhIG51bWJlciA+IDAsIGZpbGwgdGhhdCBzcG90IHdpdGggdGhlIHJlc3BlY3RpdmUgY29sb3IuIFxuICAgIC8vIGlmIGNvbnRhaW5zIGFuICd4JywgcG9wdWxhdGUgd2l0aCBnaG9zdCBwaWVjZSBzdHlsZXMuXG4gICAgLy8gZWxzZSwgcmVtb3ZlIGNvbG9yXG4gICAgcmVuZGVyKCkge1xuICAgICAgICAvLyBpZiAodGhpcy5jdXJyZW50UGllY2UucmlnaHRNb3N0WzFdID4gOSB8fCB0aGlzLmN1cnJlbnRQaWVjZS5sZWZ0TW9zdFsxXSA8IDApIHJldHVybjtcbiAgICAgICAgbGV0IGZpZWxkQ29sdW1ucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoYC5maWVsZC1jb2x1bW4uZmllbGQtJHt0aGlzLmdhbWVOdW19YCk7XG4gICAgICAgIHRoaXMuZmllbGQuZm9yRWFjaCgocm93LCByb3dJZHgpID0+IHtcbiAgICAgICAgICAgIHJvdy5mb3JFYWNoKChjb2wsIGNvbElkeCkgPT4ge1xuICAgICAgICAgICAgICAgIGxldCBzcXVhcmVWYWx1ZSA9IHRoaXMuZmllbGRbcm93SWR4XVtjb2xJZHhdO1xuICAgICAgICAgICAgICAgIGlmIChzcXVhcmVWYWx1ZSA9PT0gJ3gnKSB7XG4gICAgICAgICAgICAgICAgICAgIGZpZWxkQ29sdW1uc1tjb2xJZHhdLmNoaWxkcmVuW3Jvd0lkeF0uY2xhc3NMaXN0LmFkZChgeC0ke3RoaXMuY29sb3JzW3RoaXMuY3VycmVudFBpZWNlLmNvbG9yQ29kZV19YCk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmIChzcXVhcmVWYWx1ZSkge1xuICAgICAgICAgICAgICAgICAgICBmaWVsZENvbHVtbnNbY29sSWR4XS5jaGlsZHJlbltyb3dJZHhdLmNsYXNzTGlzdC5hZGQodGhpcy5jb2xvcnNbc3F1YXJlVmFsdWVdKTtcbiAgICAgICAgICAgICAgICAgICAgZmllbGRDb2x1bW5zW2NvbElkeF0uY2hpbGRyZW5bcm93SWR4XS5jbGFzc0xpc3QucmVtb3ZlKGB4LSR7dGhpcy5jb2xvcnNbdGhpcy5jdXJyZW50UGllY2UuY29sb3JDb2RlXX1gKTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBmaWVsZENvbHVtbnNbY29sSWR4XS5jaGlsZHJlbltyb3dJZHhdLmNsYXNzTGlzdCA9IFwiXCI7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGtleUxpc3RlbmVyKCkge1xuICAgICAgICBkb2N1bWVudC5ib2R5LmFkZEV2ZW50TGlzdGVuZXIoXCJrZXlkb3duXCIsIGV2ZW50ID0+IHtcbiAgICAgICAgICAgIGlmICh0aGlzLmdhbWVJc092ZXIpIHJldHVybjtcbiAgICAgICAgICAgIHRoaXMuY3VycmVudFBpZWNlLnNldE91dGVyU3F1YXJlcygpO1xuICAgICAgICAgICAgLy8gdGhpcy5jbGVhckdob3N0UG9zaXRpb24oKTtcbiAgICAgICAgICAgIHN3aXRjaChldmVudC53aGljaCkge1xuICAgICAgICAgICAgICAgIC8vIHVwIGtleVxuICAgICAgICAgICAgICAgIGNhc2UgdGhpcy5jb250cm9scy50dXJuUmlnaHQ6XG4gICAgICAgICAgICAgICAgICAgIC8vIHBhc3MgZmllbGQgc28gcGllY2UgY2FuIGNoZWNrIGZpZWxkIHdhbGwgYmVmb3JlIHR1cm5pbmdcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jbGVhckdob3N0UG9zaXRpb24oKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy50U3BpbiA9IHRoaXMuY3VycmVudFBpZWNlLm1vdmUoXCJ0dXJuUmlnaHRcIiwgdGhpcy5maWVsZCk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY3VycmVudFBpZWNlLnBvcHVsYXRlRmllbGQodGhpcy5maWVsZCk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0R2hvc3RQb3NpdGlvbigpO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAvLyBDIGtleVxuICAgICAgICAgICAgICAgIGNhc2UgdGhpcy5jb250cm9scy50dXJuTGVmdDpcbiAgICAgICAgICAgICAgICAgICAgLy8gcGFzcyBmaWVsZCBzbyBwaWVjZSBjYW4gY2hlY2sgZmllbGQgd2FsbCBiZWZvcmUgdHVybmluZ1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmNsZWFyR2hvc3RQb3NpdGlvbigpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmN1cnJlbnRQaWVjZS5tb3ZlKFwidHVybkxlZnRcIiwgdGhpcy5maWVsZCk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY3VycmVudFBpZWNlLnBvcHVsYXRlRmllbGQodGhpcy5maWVsZCk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0R2hvc3RQb3NpdGlvbigpO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAvLyBsZWZ0IGtleVxuICAgICAgICAgICAgICAgIGNhc2UgdGhpcy5jb250cm9scy5sZWZ0OlxuICAgICAgICAgICAgICAgICAgICB0aGlzLmtleUhlbGQubGVmdCA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLmN1cnJlbnRQaWVjZS5sZWZ0U2lkZUJsb2NrZWQodGhpcy5maWVsZCkpIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLm1vdmVQaWVjZShcImxlZnRcIik7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIC8vIHJpZ2h0IGtleVxuICAgICAgICAgICAgICAgIGNhc2UgdGhpcy5jb250cm9scy5yaWdodDpcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5rZXlIZWxkLnJpZ2h0ID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuY3VycmVudFBpZWNlLnJpZ2h0U2lkZUJsb2NrZWQodGhpcy5maWVsZCkpIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLm1vdmVQaWVjZShcInJpZ2h0XCIpO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAvLyBkb3duIGtleVxuICAgICAgICAgICAgICAgIGNhc2UgdGhpcy5jb250cm9scy5zb2Z0RHJvcDpcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5rZXlIZWxkLmRvd24gPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLm1vdmVQaWVjZShcImRvd25cIik7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIC8vIHNoaWZ0IGtleVxuICAgICAgICAgICAgICAgIGNhc2UgdGhpcy5jb250cm9scy5ob2xkOiBcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jbGVhckdob3N0UG9zaXRpb24oKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5ob2xkKCk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY3VycmVudFBpZWNlLnBvcHVsYXRlRmllbGQodGhpcy5maWVsZCk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0R2hvc3RQb3NpdGlvbigpO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAvLyBzcGFjZSBiYXJcbiAgICAgICAgICAgICAgICBjYXNlIHRoaXMuY29udHJvbHMuaGFyZERyb3A6XG4gICAgICAgICAgICAgICAgICAgIC8vIHRoaXMucmVuZGVyKCk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY2xlYXJHaG9zdFBvc2l0aW9uKCk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY3VycmVudFBpZWNlLmhhcmREcm9wKHRoaXMuZmllbGQpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnJlbmRlcigpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmN1cnJlbnRQaWVjZS5wb3B1bGF0ZUZpZWxkKHRoaXMuZmllbGQpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmhhbmRsZVBpZWNlU3RvcCh0aGlzLmhhbmRsZUNsZWFyLmRyb3ApO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAvLyBQIGtleVxuICAgICAgICAgICAgICAgIGNhc2UgODA6XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuaXNQYXVzZWQgPyB0aGlzLmRyb3BQaWVjZSh0aGlzLmRyb3BTcGVlZCkgOiBjYW5jZWxBbmltYXRpb25GcmFtZSh0aGlzLmhhbmRsZUNsZWFyLmRyb3ApO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmlzUGF1c2VkID0gIXRoaXMuaXNQYXVzZWQ7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5jdXJyZW50UGllY2Uuc2V0T3V0ZXJTcXVhcmVzKCk7XG4gICAgICAgICAgICB0aGlzLnJlbmRlcigpO1xuICAgICAgICB9KTtcblxuICAgICAgICBkb2N1bWVudC5ib2R5LmFkZEV2ZW50TGlzdGVuZXIoXCJrZXl1cFwiLCBldmVudCA9PiB7XG4gICAgICAgICAgICBzd2l0Y2ggKGV2ZW50LndoaWNoKSB7XG4gICAgICAgICAgICAgICAgY2FzZSB0aGlzLmNvbnRyb2xzLnJpZ2h0OiBcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5rZXlIZWxkLnJpZ2h0ID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgdGhpcy5jb250cm9scy5sZWZ0OiBcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5rZXlIZWxkLmxlZnQgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSB0aGlzLmNvbnRyb2xzLnNvZnREcm9wOiBcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5rZXlIZWxkLmRvd24gPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7ICBcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgY2xlYXJMaW5lcyhsb3dlc3QsIGhpZ2hlc3QsIG51bUxpbmVzQ2xlYXJlZCkge1xuICAgICAgICBpZiAobG93ZXN0IDwgMCkgcmV0dXJuO1xuICAgICAgICAvLyBiYXNlIGNhc2U6IGlmIHdlIHJlYWNoIGEgcm93IHRoYXQgaXMgaGlnaGVyIHRoYW4gdGhlIGhpZ2hlc3QsIHRoZW4gcmV0dXJuIG51bWJlciBvZiBsaW5lcyB0aGF0IHdlcmUgY2xlYXJlZFxuICAgICAgICBpZiAobG93ZXN0IDwgaGlnaGVzdCkge1xuICAgICAgICAgICAgcmV0dXJuIG51bUxpbmVzQ2xlYXJlZDtcbiAgICAgICAgfTtcbiAgICAgICAgLy8gcmVjdXJzaXZlIGNhc2U6IFxuICAgICAgICAvLyBpZiBsb3dlc3Qgcm93IGRvZXMgbm90IGNvbnRhaW4gYSAwLCBicmluZyBhbGwgYWJvdmUgcm93cyBkb3duIG9uZSBsZXZlbFxuICAgICAgICBpZiAoIXRoaXMuZmllbGRbbG93ZXN0XS5pbmNsdWRlcygwKSkge1xuICAgICAgICAgICAgdGhpcy5fYnJpbmdEb3duRmllbGQobG93ZXN0KTtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmNsZWFyTGluZXMobG93ZXN0LCBoaWdoZXN0ICsgMSwgbnVtTGluZXNDbGVhcmVkICsgMSlcbiAgICAgICAgLy8gaWYgcm93IGNvbnRhaW5zIGEgMCwgcm93IGlzIG5vdCBjbGVhcmVkIHlldCBcbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLmZpZWxkW2xvd2VzdF0uaW5jbHVkZXMoMCkpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmNsZWFyTGluZXMobG93ZXN0IC0gMSwgaGlnaGVzdCwgbnVtTGluZXNDbGVhcmVkKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIF9icmluZ0Rvd25GaWVsZChzdGFydGluZ1Jvdykge1xuICAgICAgICBmb3IgKGxldCBpID0gc3RhcnRpbmdSb3c7IGkgPiAwOyBpLS0pIHtcbiAgICAgICAgICAgIHRoaXMuZmllbGRbaV0gPSB0aGlzLmZpZWxkW2kgLSAxXTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmZpZWxkWzBdID0gWzAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDBdO1xuICAgIH1cblxuICAgIGhhbmRsZVBpZWNlU3RvcCgpIHsgIFxuICAgICAgICAvLyBhbGxvdyBwbGF5ZXIgdG8gaG9sZCBwaWVjZSBhZ2FpblxuICAgICAgICB0aGlzLmNhbkhvbGQgPSB0cnVlO1xuICAgICAgICBsZXQgbG93ZXN0ID0gdGhpcy5jdXJyZW50UGllY2UucG9zaXRpb24uYm90dG9tWzBdWzBdO1xuICAgICAgICAvLyBpbiBjYXNlIG9mIGxpbmUgcGllY2UsIHdoaWNoIG1heSBub3QgaGF2ZSB0aGlzLnBvc2l0aW9uLnRvcFxuICAgICAgICBsZXQgaGlnaGVzdCA9ICF0aGlzLmN1cnJlbnRQaWVjZS5wb3NpdGlvbi50b3AubGVuZ3RoID8gbG93ZXN0IDogdGhpcy5jdXJyZW50UGllY2UucG9zaXRpb24udG9wWzBdWzBdO1xuICAgICAgICAvLyBjaGVjayBpZiBhIFRQaWVjZSB3YXMgc3B1biBpbiBwbGFjZVxuICAgICAgICBpZiAodGhpcy5jdXJyZW50UGllY2UubmFtZSA9PT0gXCJUUGllY2VcIikge1xuICAgICAgICAgICAgbGV0IFtsZWZ0TW9zdFJvdywgcmlnaHRNb3N0Um93XSA9IFt0aGlzLmN1cnJlbnRQaWVjZS5sZWZ0TW9zdFswXSwgdGhpcy5jdXJyZW50UGllY2UucmlnaHRNb3N0WzBdXTtcbiAgICAgICAgICAgIGxldCBbbGVmdE1vc3RDb2wsIHJpZ2h0TW9zdENvbF0gPSBbdGhpcy5jdXJyZW50UGllY2UubGVmdE1vc3RbMV0sIHRoaXMuY3VycmVudFBpZWNlLnJpZ2h0TW9zdFsxXV07XG4gICAgICAgICAgICBpZiAodGhpcy5maWVsZFtsZWZ0TW9zdFJvdyAtIDFdICYmIHRoaXMuZmllbGRbcmlnaHRNb3N0Um93IC0gMV0pIHtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5maWVsZFtsZWZ0TW9zdFJvdyAtIDFdW2xlZnRNb3N0Q29sXSB8fCB0aGlzLmZpZWxkW3JpZ2h0TW9zdFJvdyAtIDFdW3JpZ2h0TW9zdENvbF0pIHRoaXMudFNwaW4gPSB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGxldCBudW1MaW5lc0NsZWFyZWQgPSB0aGlzLmNsZWFyTGluZXMobG93ZXN0LCBoaWdoZXN0LCAwKTtcblxuICAgICAgICAvLyBpbiB0aGUgY2FzZSBvZiBtdWx0aXBsYXllciwgc2VuZCBjbGVhcmVkIGxpbmVzIHRvIG9wcG9uZW50IGFuZCByZWNlaXZlIHBvdGVudGlhbCBsaW5lc1xuICAgICAgICBpZiAodGhpcy5vcHBvbmVudCkge1xuICAgICAgICAgICAgaWYgKHRoaXMudFNwaW5TdHJlYWsgPT09IHRydWUpIGRlYnVnZ2VyXG4gICAgICAgICAgICBpZiAobnVtTGluZXNDbGVhcmVkID4gMCkge1xuICAgICAgICAgICAgICAgIHRoaXMuY29tYm8gKz0gMTtcbiAgICAgICAgICAgICAgICBsZXQgbnVtTGluZXNcbiAgICAgICAgICAgICAgICBpZiAobnVtTGluZXNDbGVhcmVkIDwgNCkge1xuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5jdXJyZW50UGllY2UubmFtZSA9PT0gXCJUUGllY2VcIiAmJiB0aGlzLnRTcGluKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBudW1MaW5lcyA9IG51bUxpbmVzQ2xlYXJlZCA9PT0gMyA/IDYgOiA0O1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgbnVtTGluZXMgPSBudW1MaW5lc0NsZWFyZWQgLSAxO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy50U3BpblN0cmVhayA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgbnVtTGluZXMgPSA0O1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIG51bUxpbmVzICs9IHRoaXMuY29tYm9HdWlkZVt0aGlzLmNvbWJvXTtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy50U3BpblN0cmVhaykgbnVtTGluZXMgKz0gMjtcblxuICAgICAgICAgICAgICAgIGlmICh0aGlzLnVwY29taW5nTGluZXMgPiAwKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMudXBjb21pbmdMaW5lcyAtPSBudW1MaW5lcztcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMudXBjb21pbmdMaW5lcyA8IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMub3Bwb25lbnQuYWRkTGluZXNUb1F1ZXVlKE1hdGguYWJzKHRoaXMudXBjb21pbmdMaW5lcykpO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy51cGNvbWluZ0xpbmVzID0gMDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGFkanVzdFF1ZXVlSGVpZ2h0KHRoaXMuZ2FtZU51bSwgMCk7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBhZGp1c3RRdWV1ZUhlaWdodCh0aGlzLmdhbWVOdW0sIHRoaXMudXBjb21pbmdMaW5lcyAqIDUpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5vcHBvbmVudC5hZGRMaW5lc1RvUXVldWUobnVtTGluZXMpO1xuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy50U3BpbiA9PT0gdHJ1ZSkgdGhpcy50U3BpblN0cmVhayA9IHRydWU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLmNvbWJvID0gLTE7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMudXBjb21pbmdMaW5lcyA+IDApIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5yZWNlaXZlVXBjb21pbmdMaW5lcyh0aGlzLnVwY29taW5nTGluZXMpO1xuICAgICAgICAgICAgICAgICAgICBhZGp1c3RRdWV1ZUhlaWdodCh0aGlzLmdhbWVOdW0sIDApO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gXG4gICAgICAgIH1cbiAgICAgICAgLy8gcmVzZXQgdFNwaW4gdHJhY2tlclxuICAgICAgICB0aGlzLnRTcGluID0gZmFsc2VcbiAgICAgICAgdGhpcy5jbGVhckdob3N0Q2xhc3MoKTtcbiAgICAgICAgY2FuY2VsQW5pbWF0aW9uRnJhbWUodGhpcy5oYW5kbGVDbGVhci5kcm9wKTtcbiAgICAgICAgLy8gdGhpcy5zdGFydEVsZXZhdGluZygpO1xuICAgICAgICB0aGlzLnBsYXkoKTtcbiAgICB9XG5cbiAgICBkcm9wUGllY2UoZnBzKSB7XG4gICAgICAgIC8vIERvIHdoYXRldmVyXG4gICAgICAgIHRoaXMuYW5pbWF0ZS5kcm9wLmZwc0ludGVydmFsID0gMTAwMCAvIGZwcztcbiAgICAgICAgdGhpcy5hbmltYXRlLmRyb3AudGhlbiA9IERhdGUubm93KCk7XG4gICAgICAgIHRoaXMuYW5pbWF0ZS5kcm9wLnN0YXJ0VGltZSA9IHRoaXMudGhlbjtcbiAgICAgICAgdGhpcy5kcm9wKHRoaXMuZmllbGQpO1xuICAgIH1cblxuICAgIC8vIGluc3BpcmF0aW9uIGZvciB0aHJvdHRsaW5nIHJlcXVlc3RBbmltYXRpb25GcmFtZSBmcm9tIGh0dHBzOi8vc3RhY2tvdmVyZmxvdy5jb20vcXVlc3Rpb25zLzE5NzY0MDE4L2NvbnRyb2xsaW5nLWZwcy13aXRoLXJlcXVlc3RhbmltYXRpb25mcmFtZVxuICAgIGRyb3AoKSB7XG4gICAgICAgIHRoaXMuaGFuZGxlQ2xlYXIuZHJvcCA9IHJlcXVlc3RBbmltYXRpb25GcmFtZSgoKSA9PiB0aGlzLmRyb3AodGhpcy5maWVsZCkpO1xuICAgICAgICB0aGlzLmFuaW1hdGUuZHJvcC5ub3cgPSBEYXRlLm5vdygpO1xuICAgICAgICBsZXQgZWxhcHNlZCA9IHRoaXMuYW5pbWF0ZS5kcm9wLm5vdyAtIHRoaXMuYW5pbWF0ZS5kcm9wLnRoZW47XG4gICAgICAgIGlmIChlbGFwc2VkID4gdGhpcy5hbmltYXRlLmRyb3AuZnBzSW50ZXJ2YWwpIHtcbiAgICAgICAgICAgIC8vIEdldCByZWFkeSBmb3IgbmV4dCBmcmFtZSBieSBzZXR0aW5nIHRoZW49bm93LCBhZGp1c3RpbmcgZm9yIHNwZWNpZmllZCBmcHNJbnRlcnZhbCBub3QgYmVpbmcgYSBtdWx0aXBsZSBvZiBSQUYncyBpbnRlcnZhbCAoMTYuN21zKVxuICAgICAgICAgICAgdGhpcy5hbmltYXRlLmRyb3AudGhlbiA9IHRoaXMuYW5pbWF0ZS5kcm9wLm5vdyAtIChlbGFwc2VkICUgdGhpcy5hbmltYXRlLmRyb3AuZnBzSW50ZXJ2YWwpO1xuICAgICAgICAgICAgdGhpcy5jdXJyZW50UGllY2UucG9wdWxhdGVGaWVsZCh0aGlzLmZpZWxkKTtcbiAgICAgICAgICAgIHRoaXMucmVuZGVyKCk7XG4gICAgICAgICAgICBpZiAoIXRoaXMuY3VycmVudFBpZWNlLmlzRmFsbGluZyh0aGlzLmZpZWxkKSkge1xuICAgICAgICAgICAgICAgIHRoaXMuaGFuZGxlUGllY2VTdG9wKHRoaXMuaGFuZGxlQ2xlYXIuZHJvcCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAodGhpcy5jdXJyZW50UGllY2UuYm90dG9tTW9zdFswXSAhPSAwKSB0aGlzLmN1cnJlbnRQaWVjZS5kcm9wKHRoaXMuZmllbGQpO1xuICAgICAgICAgICAgLy8gdGhpcy5zZXRHaG9zdFBvc2l0aW9uKCk7XG4gICAgICAgICAgICB0aGlzLmN1cnJlbnRQaWVjZS5wb3B1bGF0ZUZpZWxkKHRoaXMuZmllbGQpOyAvLyBrZWVwIG9ubHkgb25lIHBvcHVsYXRlIGZpZWxkP1xuICAgICAgICAgICAgdGhpcy5yZW5kZXIoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIG1vdmVQaWVjZShkaXJlY3Rpb24pIHtcbiAgICAgICAgLy8gRG8gd2hhdGV2ZXJcbiAgICAgICAgdGhpcy5hbmltYXRlW2RpcmVjdGlvbl0uZnBzSW50ZXJ2YWwgPSAxMDAwIC8gdGhpcy5tb3ZlU3BlZWQ7XG4gICAgICAgIHRoaXMuYW5pbWF0ZVtkaXJlY3Rpb25dLnRoZW4gPSBEYXRlLm5vdygpO1xuICAgICAgICB0aGlzLmFuaW1hdGVbZGlyZWN0aW9uXS5zdGFydFRpbWUgPSB0aGlzLmFuaW1hdGVbZGlyZWN0aW9uXS50aGVuO1xuICAgICAgICB0aGlzLm1vdmUoZGlyZWN0aW9uKTtcbiAgICB9XG5cbiAgICAvLyBpbnNwaXJhdGlvbiBmb3IgdGhyb3R0bGluZyByZXF1ZXN0QW5pbWF0aW9uRnJhbWUgZnJvbSBodHRwczovL3N0YWNrb3ZlcmZsb3cuY29tL3F1ZXN0aW9ucy8xOTc2NDAxOC9jb250cm9sbGluZy1mcHMtd2l0aC1yZXF1ZXN0YW5pbWF0aW9uZnJhbWVcbiAgICBtb3ZlKGRpcmVjdGlvbikge1xuICAgICAgICB0aGlzLmhhbmRsZUNsZWFyW2RpcmVjdGlvbl0gPSByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoKCkgPT4gdGhpcy5tb3ZlKGRpcmVjdGlvbikpO1xuICAgICAgICBpZiAoIXRoaXMua2V5SGVsZFtkaXJlY3Rpb25dKSBjYW5jZWxBbmltYXRpb25GcmFtZSh0aGlzLmhhbmRsZUNsZWFyW2RpcmVjdGlvbl0pO1xuICAgICAgICB0aGlzLmFuaW1hdGVbZGlyZWN0aW9uXS5ub3cgPSBEYXRlLm5vdygpO1xuICAgICAgICBsZXQgZWxhcHNlZCA9IHRoaXMuYW5pbWF0ZVtkaXJlY3Rpb25dLm5vdyAtIHRoaXMuYW5pbWF0ZVtkaXJlY3Rpb25dLnRoZW47XG4gICAgICAgIGlmIChlbGFwc2VkID4gdGhpcy5hbmltYXRlW2RpcmVjdGlvbl0uZnBzSW50ZXJ2YWwpIHtcbiAgICAgICAgICAgIC8vIEdldCByZWFkeSBmb3IgbmV4dCBmcmFtZSBieSBzZXR0aW5nIHRoZW49bm93LCBhZGp1c3RpbmcgZm9yIHNwZWNpZmllZCBmcHNJbnRlcnZhbCBub3QgYmVpbmcgYSBtdWx0aXBsZSBvZiBSQUYncyBpbnRlcnZhbCAoMTYuN21zKVxuICAgICAgICAgICAgdGhpcy5hbmltYXRlW2RpcmVjdGlvbl0udGhlbiA9IHRoaXMuYW5pbWF0ZVtkaXJlY3Rpb25dLm5vdyAtIChlbGFwc2VkICUgdGhpcy5hbmltYXRlW2RpcmVjdGlvbl0uZnBzSW50ZXJ2YWwpO1xuXG4gICAgICAgICAgICAvLyBwcmV2ZW50IHBpZWNlIGZyb20gbW92aW5nIGlmIGl0IGlzIGJsb2NrZWQgb3IgaWYgYm90aCBsZWZ0IGFuZCByaWdodCBhcnJvdyBrZXlzIGFyZSBoZWxkIGRvd25cbiAgICAgICAgICAgIGlmIChcbiAgICAgICAgICAgICAgICBkaXJlY3Rpb24gPT09IFwicmlnaHRcIiAmJiB0aGlzLmN1cnJlbnRQaWVjZS5yaWdodFNpZGVCbG9ja2VkKHRoaXMuZmllbGQpIFxuICAgICAgICAgICAgICAgIHx8IFxuICAgICAgICAgICAgICAgIGRpcmVjdGlvbiA9PT0gXCJsZWZ0XCIgJiYgdGhpcy5jdXJyZW50UGllY2UubGVmdFNpZGVCbG9ja2VkKHRoaXMuZmllbGQpIFxuICAgICAgICAgICAgICAgIHx8IFxuICAgICAgICAgICAgICAgIGRpcmVjdGlvbiA9PT0gXCJkb3duXCIgJiYgIXRoaXMuY3VycmVudFBpZWNlLmlzRmFsbGluZyh0aGlzLmZpZWxkKVxuICAgICAgICAgICAgICAgIHx8IFxuICAgICAgICAgICAgICAgIHRoaXMua2V5SGVsZC5yaWdodCAmJiB0aGlzLmtleUhlbGQubGVmdFxuICAgICAgICAgICAgKSByZXR1cm47IFxuXG4gICAgICAgICAgICB0aGlzLmN1cnJlbnRQaWVjZS5tb3ZlKGRpcmVjdGlvbik7XG5cbiAgICAgICAgICAgIHRoaXMuY3VycmVudFBpZWNlLnBvcHVsYXRlRmllbGQodGhpcy5maWVsZCk7XG5cbiAgICAgICAgICAgIC8vIGRvbid0IG5lZWQgdG8gcmUtcG9wdWxhdGUgZ2hvc3QgcG9zaXRpb24gaWYgdGhlIHBpZWNlIGlzIHNvZnQtZHJvcHBpbmdcbiAgICAgICAgICAgIGlmIChkaXJlY3Rpb24gIT09IFwiZG93blwiKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5jbGVhckdob3N0UG9zaXRpb24oKTtcbiAgICAgICAgICAgICAgICB0aGlzLnNldEdob3N0UG9zaXRpb24oKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdGhpcy5yZW5kZXIoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGhhbmRsZVRvcFBpZWNlKCkge1xuICAgICAgICBsZXQgYXRUb3AgPSBmYWxzZTtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIHdoaWxlICh0aGlzLmZpZWxkW3RoaXMuY3VycmVudFBpZWNlLnBvc2l0aW9uLmJvdHRvbVswXVswXV1bM10gfHwgdGhpcy5maWVsZFt0aGlzLmN1cnJlbnRQaWVjZS5wb3NpdGlvbi5ib3R0b21bMF1bMF1dWzRdIHx8IHRoaXMuZmllbGRbdGhpcy5jdXJyZW50UGllY2UucG9zaXRpb24uYm90dG9tWzBdWzBdXVs1XSB8fCB0aGlzLmZpZWxkW3RoaXMuY3VycmVudFBpZWNlLnBvc2l0aW9uLmJvdHRvbVswXVswXV1bNl0pIHtcbiAgICAgICAgICAgICAgICB0aGlzLmN1cnJlbnRQaWVjZS5tb3ZlKFwidXBcIiwgdGhpcy5maWVsZCk7XG4gICAgICAgICAgICAgICAgYXRUb3AgPSB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGNhdGNoIHtcbiAgICAgICAgICAgIHRoaXMuZ2FtZU92ZXIodGhpcy5vcHBvbmVudC5nYW1lTnVtKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gYXRUb3A7XG4gICAgfVxuICAgIFxuICAgIHBsYXkoKSB7XG4gICAgICAgIHRoaXMuc2V0Q3VycmVudFBpZWNlKCk7XG4gICAgICAgIHRoaXMuaGFuZGxlVG9wUGllY2UoKTtcbiAgICAgICAgdGhpcy5jdXJyZW50UGllY2UucG9wdWxhdGVGaWVsZCh0aGlzLmZpZWxkKTtcbiAgICAgICAgdGhpcy5hZGRUb0N1cnJlbnRCYWcoKTtcbiAgICAgICAgdGhpcy5zaG93Q3VycmVudEJhZygpO1xuICAgICAgICBpZiAoIXRoaXMubmV4dEJhZy5sZW5ndGgpIHRoaXMucmVmaWxsTmV4dEJhZygpO1xuICAgICAgICB0aGlzLnNldEdob3N0UG9zaXRpb24oKTtcbiAgICAgICAgLy8gZHJvcCBwaWVjZSBhdCBnaXZlbiBmcHNcbiAgICAgICAgdGhpcy5kcm9wUGllY2UodGhpcy5kcm9wU3BlZWQpOyAgICBcbiAgICB9XG5cbiAgICBnYW1lT3Zlcih3aW5uZXIpIHtcbiAgICAgICAgdGhpcy5kcm9wU3BlZWQgPSAwO1xuICAgICAgICBsZXQgZ2FtZU92ZXJTY3JlZW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICBnYW1lT3ZlclNjcmVlbi5jbGFzc0xpc3QuYWRkKFwiZ2FtZS1vdmVyLWRpdlwiKTtcbiAgICAgICAgXG4gICAgICAgIGxldCBnYW1lT3ZlckhlYWRpbmcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDJcIik7XG4gICAgICAgIGdhbWVPdmVySGVhZGluZy5jbGFzc0xpc3QuYWRkKFwiZ2FtZS1vdmVyLWhlYWRpbmdcIik7XG5cbiAgICAgICAgZ2FtZU92ZXJIZWFkaW5nLmlubmVySFRNTCA9IFwiR0FNRSBPVkVSXCI7XG4gICAgICAgIGdhbWVPdmVyU2NyZWVuLmFwcGVuZChnYW1lT3ZlckhlYWRpbmcpO1xuXG4gICAgICAgIGxldCB3aW5uZXJIZWFkaW5nO1xuICAgICAgICBpZiAod2lubmVyKSAge1xuICAgICAgICAgICAgd2lubmVySGVhZGluZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMlwiKTtcbiAgICAgICAgICAgIHdpbm5lckhlYWRpbmcuY2xhc3NMaXN0LmFkZChcImdhbWUtb3Zlci1oZWFkaW5nXCIpO1xuICAgICAgICAgICAgd2lubmVySGVhZGluZy5pbm5lckhUTUwgPSBgUExBWUVSICR7d2lubmVyfSBXSU5TYDtcbiAgICAgICAgICAgIGdhbWVPdmVyU2NyZWVuLmFwcGVuZCh3aW5uZXJIZWFkaW5nKVxuICAgICAgICB9ICAgXG5cbiAgICAgICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChnYW1lT3ZlclNjcmVlbik7XG4gICAgICAgIHRoaXMuc3RvcFRpbWVyKCk7XG4gICAgICAgIHRoaXMuZ2FtZUlzT3ZlciA9IHRydWU7XG4gICAgfVxuXG4gICAgLy8gbXVsdGlwbGF5ZXIgXG4gICAgc2V0T3Bwb25lbnQocGxheWVyKSB7XG4gICAgICAgIHRoaXMub3Bwb25lbnQgPSBwbGF5ZXI7XG4gICAgfVxuXG4gICAgYWRkTGluZXNUb1F1ZXVlKG51bUxpbmVzKSB7XG4gICAgICAgIHRoaXMudXBjb21pbmdMaW5lcyArPSBudW1MaW5lcztcbiAgICAgICAgbGV0IHBlcmNlbnRhZ2UgPSB0aGlzLnVwY29taW5nTGluZXMgKiA1O1xuICAgICAgICBhZGp1c3RRdWV1ZUhlaWdodCh0aGlzLmdhbWVOdW0sIHBlcmNlbnRhZ2UpO1xuICAgIH1cblxuICAgIHJlY2VpdmVVcGNvbWluZ0xpbmVzKCkge1xuICAgICAgICBsZXQgZ2FyYmFnZUxpbmVzID0gW107XG4gICAgICAgIGxldCBudW1MaW5lcyA9IHRoaXMudXBjb21pbmdMaW5lcztcbiAgICAgICAgbGV0IHJhbmRvbUhvbGU7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbnVtTGluZXM7IGkrKykge1xuICAgICAgICAgICAgaWYgKGkgJSAyID09PSAwKSByYW5kb21Ib2xlID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogOSk7XG4gICAgICAgICAgICBsZXQgZ2FyYmFnZVJvdyA9IFs4LCA4LCA4LCA4LCA4LCA4LCA4LCA4LCA4LCA4XTtcbiAgICAgICAgICAgIGdhcmJhZ2VSb3dbcmFuZG9tSG9sZV0gPSAwO1xuICAgICAgICAgICAgZ2FyYmFnZUxpbmVzLnB1c2goZ2FyYmFnZVJvdyk7XG4gICAgICAgIH1cbiAgICAgICAgLy8gaWYgcGxheWVyIHJlYWNoZXMgdGhlIHRvcCwgcGxheWVyIGxvc2VzXG4gICAgICAgIC8vIHNsaWNlIGFsbG93cyBwbGF5ZXIgdG8gY29udGludWUgcGxheWluZyBpZiB0b3AgbWlkZGxlIGlzIGNsZWFyXG4gICAgICAgIGlmICghdGhpcy5maWVsZFtudW1MaW5lcyAtIDFdLnNsaWNlKDIsNykuaW5jbHVkZXMoMCkpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmZpZWxkID0gdGhpcy5maWVsZC5zbGljZShudW1MaW5lcywgMjApLmNvbmNhdChnYXJiYWdlTGluZXMpO1xuICAgICAgICB0aGlzLnVwY29taW5nTGluZXMgPSAwO1xuICAgICAgICB0aGlzLnJlbmRlcigpO1xuICAgIH1cblxuICAgIC8vIHNpbmdsZSBwbGF5ZXJcbiAgICBzdGFydEVsZXZhdGluZyhlbGV2YXRlRGVsYXkpIHtcbiAgICAgICAgdGhpcy5jbGVhckVsZXZhdGVJbnRlcnZhbCA9IHNldEludGVydmFsKCgpID0+IHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHRoaXMuY3VycmVudFBpZWNlKTtcbiAgICAgICAgICAgIHRoaXMuY2xlYXJHaG9zdFBvc2l0aW9uKCk7XG4gICAgICAgICAgICB0aGlzLmN1cnJlbnRQaWVjZS5jbGVhclNlbGZGcm9tQm9hcmQodGhpcy5maWVsZCk7XG4gICAgICAgICAgICB0aGlzLnVwY29taW5nTGluZXMgKz0gMTtcbiAgICAgICAgICAgIHRoaXMucmVjZWl2ZVVwY29taW5nTGluZXMoKTtcbiAgICAgICAgICAgIHRoaXMuc2V0R2hvc3RQb3NpdGlvbigpO1xuICAgICAgICAgICAgdGhpcy5jdXJyZW50UGllY2UucG9wdWxhdGVGaWVsZCh0aGlzLmZpZWxkKTtcbiAgICAgICAgICAgIHRoaXMucmVuZGVyKCk7XG4gICAgICAgIH0sIGVsZXZhdGVEZWxheSlcbiAgICB9XG5cbiAgICBhZGp1c3RFbGV2YXRlKCkge1xuICAgICAgICBzZXRJbnRlcnZhbCgoKSA9PiB7XG4gICAgICAgICAgICBpZiAodGhpcy5jbGVhckVsZXZhdGVJbnRlcnZhbCkgY2xlYXJJbnRlcnZhbCh0aGlzLmNsZWFyRWxldmF0ZUludGVydmFsKTtcbiAgICAgICAgICAgIGlmICh0aGlzLmVsZXZhdGVEZWxheSA+IDIwMDApIHRoaXMuZWxldmF0ZURlbGF5IC09IDIwMDtcbiAgICAgICAgICAgIHRoaXMuc3RhcnRFbGV2YXRpbmcodGhpcy5lbGV2YXRlRGVsYXkpO1xuICAgICAgICB9LCAxMDAwMCk7XG4gICAgfVxuXG4gICAgc3RhcnRUaW1lcigpIHtcbiAgICAgICAgbGV0IG1pbnV0ZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWludXRlcycpO1xuICAgICAgICBsZXQgc2Vjb25kcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zZWNvbmRzJyk7XG4gICAgICAgIHRoaXMuY2xlYXJUaW1lciA9IHNldEludGVydmFsKCgpID0+IHtcbiAgICAgICAgICAgIGxldCBvbGRTZWNvbmQgPSBOdW1iZXIoc2Vjb25kcy5pbm5lckhUTUwpO1xuICAgICAgICAgICAgbGV0IG9sZE1pbnV0ZSA9IE51bWJlcihtaW51dGVzLmlubmVySFRNTCk7XG4gICAgICAgICAgICBpZiAob2xkU2Vjb25kICsgMSA9PT0gNjApIHtcbiAgICAgICAgICAgICAgICBzZWNvbmRzLmlubmVySFRNTCA9IDA7XG4gICAgICAgICAgICAgICAgbWludXRlcy5pbm5lckhUTUwgPSBvbGRNaW51dGUgKyAxO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBsZXQgbmV3U2Vjb25kcyA9IE51bWJlcihzZWNvbmRzLmlubmVySFRNTCkgKyAxIDwgMTAgPyBgMCR7TnVtYmVyKHNlY29uZHMuaW5uZXJIVE1MKSArIDF9YCA6IE51bWJlcihzZWNvbmRzLmlubmVySFRNTCkgKyAxO1xuICAgICAgICAgICAgICAgIHNlY29uZHMuaW5uZXJIVE1MID0gbmV3U2Vjb25kcztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSwgMTAwMClcbiAgICB9XG5cbiAgICBzdG9wVGltZXIoKSB7XG4gICAgICAgIGNsZWFySW50ZXJ2YWwodGhpcy5jbGVhclRpbWVyKTtcbiAgICB9XG5cbiAgICBjaGFuZ2VDb250cm9scygpIHtcbiAgICAgICAgdGhpcy5jb250cm9scyA9IHsgbGVmdDogMzcsIHJpZ2h0OiAzOSwgdHVyblJpZ2h0OiAzOCwgc29mdERyb3A6IDQwLCBob2xkOiAxNiwgdHVybkxlZnQ6IDY3LCBoYXJkRHJvcDogMzIgfVxuICAgIH1cbn0iLCJpbXBvcnQgTWVudSBmcm9tICcuL21lbnUvbWVudSdcblxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIiwgKCkgPT4ge1xuICAgIGNvbnN0IG1lbnUgPSBuZXcgTWVudTtcbiAgICBtZW51LnJlbmRlck1lbnUoKTtcbn0pOyIsImltcG9ydCBHYW1lIGZyb20gJy4uL2dhbWUvZ2FtZSc7XG5pbXBvcnQgRmllbGQgZnJvbSAnLi4vZmllbGQvZmllbGQnO1xuaW1wb3J0IE11bHRpcGxheWVyIGZyb20gJy4uL211bHRpcGxheWVyL211bHRpcGxheWVyJztcbmltcG9ydCBNb2RhbCBmcm9tICcuLi9tb2RhbC9tb2RhbCc7XG5pbXBvcnQgU2luZ2xlUGxheWVyQ29udGVudCBmcm9tICcuLi9tb2RhbC9zaW5nbGVQbGF5ZXJDb250ZW50JztcbmltcG9ydCBNdWx0aXBsYXllckNvbnRlbnQgZnJvbSAnLi4vbW9kYWwvbXVsdGlwbGF5ZXJDb250ZW50JztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTWVudSB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMubWVudSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibWVudVwiKTtcblxuICAgICAgICB0aGlzLm9wdGlvbnNQbGF5ZXIxID0geyBnYW1lTnVtOiAxLCBtb3ZlU3BlZWQ6IDIwLCBjb250cm9sczogeyBsZWZ0OiA2NSwgcmlnaHQ6IDY4LCB0dXJuUmlnaHQ6IDg3LCBzb2Z0RHJvcDogODMsIGhvbGQ6IDgxLCB0dXJuTGVmdDogMTkyLCBoYXJkRHJvcDogNDkgfSB9XG4gICAgICAgIHRoaXMub3B0aW9uc1BsYXllcjIgPSB7IGdhbWVOdW06IDIsIG1vdmVTcGVlZDogMjAsIGNvbnRyb2xzOiB7IGxlZnQ6IDM3LCByaWdodDogMzksIHR1cm5SaWdodDogMzgsIHNvZnREcm9wOiA0MCwgaG9sZDogMTYsIHR1cm5MZWZ0OiA3NSwgaGFyZERyb3A6IDE5MCB9IH1cbiAgICAgICAgICAgIFxuXG4gICAgICAgIHRoaXMuZ2FtZTEgPSBuZXcgR2FtZSh0aGlzLm9wdGlvbnNQbGF5ZXIxKTtcbiAgICAgICAgdGhpcy5nYW1lMiA9IG5ldyBHYW1lKHRoaXMub3B0aW9uc1BsYXllcjIpO1xuXG4gICAgICAgIHRoaXMuZmllbGQxID0gbmV3IEZpZWxkKDEpO1xuICAgICAgICB0aGlzLmZpZWxkMiA9IG5ldyBGaWVsZCgyKTtcblxuICAgICAgICB0aGlzLm11bHRpcGxheWVyTW9kZSA9IG5ldyBNdWx0aXBsYXllcih0aGlzLmdhbWUxLCB0aGlzLmdhbWUyKTtcblxuICAgICAgICB0aGlzLmZpZWxkQ29udGFpbmVyMSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZmllbGQtY29udGFpbmVyLTFcIik7XG4gICAgICAgIHRoaXMuZmllbGRDb250YWluZXIyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJmaWVsZC1jb250YWluZXItMlwiKTtcblxuICAgICAgICB0aGlzLnNpbmdsZVBsYXllckNvbnRlbnQgPSBuZXcgU2luZ2xlUGxheWVyQ29udGVudCgpO1xuICAgICAgICB0aGlzLm11bHRpcGxheWVyQ29udGVudCA9IG5ldyBNdWx0aXBsYXllckNvbnRlbnQoKTtcbiAgICAgICAgdGhpcy5tb2RhbCA9IG5ldyBNb2RhbCgpO1xuICAgIH1cblxuICAgIHJlbmRlckJ1dHRvbnMoKSB7XG4gICAgICAgIGxldCBzaW5nbGVQbGF5ZXJCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICBsZXQgbXVsdGlwbGF5ZXJCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuXG4gICAgICAgIHNpbmdsZVBsYXllckJ1dHRvbi5jbGFzc0xpc3QuYWRkKFwic2luZ2xlLXBsYXllci1idXR0b25cIik7XG4gICAgICAgIG11bHRpcGxheWVyQnV0dG9uLmNsYXNzTGlzdC5hZGQoXCJtdWx0aXBsYXllci1idXR0b25cIik7XG5cbiAgICAgICAgc2luZ2xlUGxheWVyQnV0dG9uLmlubmVySFRNTCA9IFwiU2luZ2xlIFBsYXllclwiO1xuICAgICAgICBtdWx0aXBsYXllckJ1dHRvbi5pbm5lckhUTUwgPSBcIk11bHRpcGxheWVyXCI7XG5cbiAgICAgICAgdGhpcy5hZGRFdmVudExpc3RlbmVycyhzaW5nbGVQbGF5ZXJCdXR0b24sIG11bHRpcGxheWVyQnV0dG9uKTtcblxuICAgICAgICByZXR1cm4gW3NpbmdsZVBsYXllckJ1dHRvbiwgbXVsdGlwbGF5ZXJCdXR0b25dO1xuICAgIH1cblxuICAgIGFkZEV2ZW50TGlzdGVuZXJzKHNpbmdsZVBsYXllckJ1dHRvbiwgbXVsdGlwbGF5ZXJCdXR0b24pIHtcbiAgICAgICAgc2luZ2xlUGxheWVyQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5yZW5kZXJTaW5nbGVQbGF5ZXIoKTtcbiAgICAgICAgfSk7XG4gICAgICAgIG11bHRpcGxheWVyQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5yZW5kZXJNdWx0aXBsYXllcigpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICByZW5kZXJTaW5nbGVQbGF5ZXIoKSB7XG4gICAgICAgIGRvY3VtZW50LmJvZHkucmVtb3ZlQ2hpbGQodGhpcy5tZW51KTtcbiAgICAgICAgZG9jdW1lbnQuYm9keS5zdHlsZS5qdXN0aWZ5Q29udGVudCA9ICdub25lJztcbiAgICAgICAgdGhpcy5zaW5nbGVQbGF5ZXJDb250ZW50LmNyZWF0ZVRpbWVyQW5kQ29udHJvbHMoKTtcbiAgICAgICAgdGhpcy5maWVsZDEuY3JlYXRlQ29tcGxldGVGaWVsZCh0aGlzLmZpZWxkQ29udGFpbmVyMSk7XG4gICAgICAgIHRoaXMuZmllbGRDb250YWluZXIxLnN0eWxlLnBvc2l0aW9uID0gJ3JlbGF0aXZlJztcbiAgICAgICAgdGhpcy5maWVsZENvbnRhaW5lcjEuc3R5bGUubGVmdCA9ICcxNHZ3JztcbiAgICAgICAgdGhpcy5nYW1lMS5rZXlMaXN0ZW5lcigpO1xuICAgICAgICB0aGlzLmdhbWUxLmNoYW5nZUNvbnRyb2xzKCk7XG4gICAgICAgIHRoaXMuZ2FtZTEucGxheSgpO1xuICAgICAgICB0aGlzLmdhbWUxLnN0YXJ0RWxldmF0aW5nKDUwMDApO1xuICAgICAgICB0aGlzLmdhbWUxLmFkanVzdEVsZXZhdGUoKTtcbiAgICAgICAgdGhpcy5zaW5nbGVQbGF5ZXJDb250ZW50LmNyZWF0ZVRpbWVyKCk7XG4gICAgICAgIHRoaXMuZ2FtZTEuc3RhcnRUaW1lcigpO1xuICAgIH1cblxuICAgIHJlbmRlck11bHRpcGxheWVyKCkge1xuICAgICAgICBkb2N1bWVudC5ib2R5LnJlbW92ZUNoaWxkKHRoaXMubWVudSk7XG4gICAgICAgIHRoaXMuZmllbGQxLmNyZWF0ZUNvbXBsZXRlRmllbGQodGhpcy5maWVsZENvbnRhaW5lcjEpO1xuICAgICAgICB0aGlzLmdhbWUxLmtleUxpc3RlbmVyKCk7XG5cbiAgICAgICAgdGhpcy5maWVsZDIuY3JlYXRlQ29tcGxldGVGaWVsZCh0aGlzLmZpZWxkQ29udGFpbmVyMik7XG4gICAgICAgIHRoaXMuZ2FtZTIua2V5TGlzdGVuZXIoKTtcblxuICAgICAgICBsZXQgY29udHJvbHNDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgY29udHJvbHNDb250YWluZXIuY2xhc3NMaXN0LmFkZCgnY29udHJvbHMtY29udGFpbmVyJylcbiAgICAgICAgY29udHJvbHNDb250YWluZXIuYXBwZW5kQ2hpbGQodGhpcy5tdWx0aXBsYXllckNvbnRlbnQuY3JlYXRlQ29udHJvbHNDb250ZW50KCdwbGF5ZXIxJykpO1xuICAgICAgICBjb250cm9sc0NvbnRhaW5lci5hcHBlbmRDaGlsZCh0aGlzLm11bHRpcGxheWVyQ29udGVudC5jcmVhdGVDb250cm9sc0NvbnRlbnQoJ3BsYXllcjInKSk7XG4gICAgICAgIHRoaXMubW9kYWwuY3JlYXRlKCk7XG4gICAgICAgIHRoaXMubW9kYWwuYXBwZW5kQ2hpbGQoY29udHJvbHNDb250YWluZXIpO1xuICAgICAgICB0aGlzLm1vZGFsLmFwcGVuZENoaWxkKHRoaXMuX2NyZWF0ZUNsb3NlTW9kYWxMaW5rKCkpO1xuICAgIH1cblxuICAgIHJlbmRlck1lbnUoKSB7XG4gICAgICAgIGxldCBidXR0b25Db250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICBidXR0b25Db250YWluZXIuY2xhc3NMaXN0LmFkZChcImJ1dHRvbi1jb250YWluZXJcIik7XG4gICAgICAgIHRoaXMucmVuZGVyQnV0dG9ucygpLmZvckVhY2goYnV0dG9uID0+IHtcbiAgICAgICAgICAgIGJ1dHRvbkNvbnRhaW5lci5hcHBlbmRDaGlsZChidXR0b24pO1xuICAgICAgICB9KVxuICAgICAgICB0aGlzLm1lbnUuYXBwZW5kQ2hpbGQoYnV0dG9uQ29udGFpbmVyKTtcbiAgICB9XG5cbiAgICBfY3JlYXRlQ2xvc2VNb2RhbExpbmsoKSB7XG4gICAgICAgIGxldCBjbG9zZUxpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgY2xvc2VMaW5rLmNsYXNzTGlzdC5hZGQoJ2Nsb3NlLW1vZGFsLWxpbmsnKTtcbiAgICAgICAgY2xvc2VMaW5rLmlubmVySFRNTCA9IFwiTGV0J3MgZ2V0IHN0YXJ0ZWQuXCI7XG5cbiAgICAgICAgY2xvc2VMaW5rLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5tb2RhbC5yZW1vdmUoKTtcbiAgICAgICAgICAgIHRoaXMubXVsdGlwbGF5ZXJNb2RlLnN0YXJ0TXVsdGlwbGF5ZXIoKTtcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiBjbG9zZUxpbms7XG4gICAgfVxufSIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIE1vZGFsIHtcbiAgICBjcmVhdGUoKSB7XG4gICAgICAgIGxldCBtb2RhbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBtb2RhbC5jbGFzc0xpc3QuYWRkKCdjb250cm9scy1tb2RhbCcpO1xuICAgICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKG1vZGFsKTtcbiAgICB9XG4gICAgXG4gICAgYXBwZW5kQ2hpbGQoY29udGVudCkge1xuICAgICAgICBsZXQgbW9kYWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29udHJvbHMtbW9kYWwnKTtcbiAgICAgICAgbW9kYWwuYXBwZW5kQ2hpbGQoY29udGVudCk7XG4gICAgfVxuXG4gICAgcmVtb3ZlKCkge1xuICAgICAgICBsZXQgbW9kYWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29udHJvbHMtbW9kYWwnKTtcbiAgICAgICAgbW9kYWwucmVtb3ZlKCk7XG4gICAgfVxufSIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIE11bHRpcGxheWVyQ29udGVudCB7XG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICAgICAgdGhpcy5rZXlzID0ge1xuICAgICAgICAgICAgcGxheWVyMToge1xuICAgICAgICAgICAgICAgICd3X2tleSc6ICdUVVJOIFJJR0hUJyxcbiAgICAgICAgICAgICAgICAnYV9rZXknOiAnTEVGVCcsXG4gICAgICAgICAgICAgICAgJ3Nfa2V5JzogJ1NPRlQgRFJPUCcsXG4gICAgICAgICAgICAgICAgJ2Rfa2V5JzogJ1JJR0hUJyxcbiAgICAgICAgICAgICAgICAnYF9rZXknOiAnVFVSTiBMRUZUJyxcbiAgICAgICAgICAgICAgICAncV9rZXknOiAnSE9MRCcsXG4gICAgICAgICAgICAgICAgJzFfa2V5JzogJ0hBUkREUk9QJ1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHBsYXllcjI6IHtcbiAgICAgICAgICAgICAgICAndXBfa2V5JzogJ1RVUk4gUklHSFQnLFxuICAgICAgICAgICAgICAgICdsZWZ0X2tleSc6ICdMRUZUJyxcbiAgICAgICAgICAgICAgICAnZG93bl9rZXknOiAnU09GVCBEUk9QJyxcbiAgICAgICAgICAgICAgICAncmlnaHRfa2V5JzogJ1JJR0hUJyxcbiAgICAgICAgICAgICAgICAna19rZXknOiAnVFVSTiBMRUZUJyxcbiAgICAgICAgICAgICAgICAnc2hpZnRfa2V5JzogJ0hPTEQnLFxuICAgICAgICAgICAgICAgICdwZXJpb2Rfa2V5JzogJ0hBUkREUk9QJ1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuXG4gICAgfVxuXG4gICAgY3JlYXRlQ29udHJvbHNDb250ZW50KHBsYXllcikge1xuICAgICAgICBsZXQgY29udHJvbHNEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgY29udHJvbHNEaXYuY2xhc3NMaXN0LmFkZCgnY29udHJvbHMnKTtcbiAgICAgICAgbGV0IGltYWdlcyA9IE9iamVjdC5rZXlzKHRoaXMua2V5c1twbGF5ZXJdKTtcbiAgICAgICAgbGV0IGRlc2NyaXB0aW9ucyA9IE9iamVjdC52YWx1ZXModGhpcy5rZXlzW3BsYXllcl0pO1xuXG4gICAgICAgIC8vIGluaXRpYWxpemUgYXJyYXlzIG9mIHNwYW5zIGFuZCBkaXZzXG4gICAgICAgIGxldCBzcGFucyA9IFtdO1xuICAgICAgICBsZXQgZGl2cyA9IFtdO1xuXG4gICAgICAgIGxldCBsYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2hlYWRlcicpO1xuICAgICAgICBsYWJlbC5pbm5lckhUTUwgPSBgUExBWUVSICR7cGxheWVyLnNsaWNlKDYpfWBcbiAgICAgICAgY29udHJvbHNEaXYuYXBwZW5kQ2hpbGQobGFiZWwpO1xuXG4gICAgICAgIC8vIGNyZWF0ZSBlbGVtZW50cyBhbmQgc3RvcmUgaW50byBhcnJheSBpbmRpY2VzIGZvciBsYXRlciByZWZlcmVuY2VcbiAgICAgICAgZm9yIChsZXQgaSA9IDE7IGkgPD0gNzsgaSsrKSB7XG4gICAgICAgICAgICBzcGFuc1tpXSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgICAgICAgICAgIGlmIChpIDw9IDMpIGRpdnNbaV0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgaW1hZ2VzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBsZXQgcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICAgICAgICAgIGxldCBpbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgICAgICAgICAgIGltZy5jbGFzc0xpc3QuYWRkKCdrZXlib2FyZC1rZXknKTtcbiAgICAgICAgICAgIGlmIChpID09PSA1ICYmIHBsYXllciA9PT0gXCJwbGF5ZXIyXCIpIGltZy5jbGFzc0xpc3QuYWRkKCdzaGlmdC1rZXknKTtcblxuICAgICAgICAgICAgcC5pbm5lckhUTUwgPSBkZXNjcmlwdGlvbnNbaV07XG4gICAgICAgICAgICBpbWcuc2V0QXR0cmlidXRlKCdzcmMnLCBgLi9hc3NldHMvaW1hZ2VzLyR7aW1hZ2VzW2ldfS5wbmdgKTtcblxuICAgICAgICAgICAgc3BhbnNbaSArIDFdLmFwcGVuZChpbWcpO1xuICAgICAgICAgICAgc3BhbnNbaSArIDFdLmFwcGVuZChwKTtcblxuICAgICAgICAgICAgaWYgKGkgPCAxKSB7XG4gICAgICAgICAgICAgICAgZGl2c1sxXS5hcHBlbmQoc3BhbnNbaSArIDFdKTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoaSA8IDQpIHtcbiAgICAgICAgICAgICAgICBkaXZzWzJdLmFwcGVuZChzcGFuc1tpICsgMV0pO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChpIDwgNykge1xuICAgICAgICAgICAgICAgIGRpdnNbM10uYXBwZW5kKHNwYW5zW2kgKyAxXSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBmb3IgKGxldCBpID0gMTsgaSA8PSAzOyBpKyspIHtcbiAgICAgICAgICAgIGNvbnRyb2xzRGl2LmFwcGVuZChkaXZzW2ldKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBjb250cm9sc0RpdjtcbiAgICB9XG59IiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2luZ2xlUGxheWVyQ29udGVudCB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMua2V5cyA9IHtcbiAgICAgICAgICAgICdsZWZ0X2tleSc6ICdMRUZUJyxcbiAgICAgICAgICAgICdyaWdodF9rZXknOiAnUklHSFQnLFxuICAgICAgICAgICAgJ2Rvd25fa2V5JzogJ1NPRlQgRFJPUCcsXG4gICAgICAgICAgICAndXBfa2V5JzogJ1RVUk4gUklHSFQnLFxuICAgICAgICAgICAgJ2Nfa2V5JzogJ1RVUk4gTEVGVCcsXG4gICAgICAgICAgICAnc2hpZnRfa2V5JzogJ0hPTEQnLFxuICAgICAgICAgICAgJ3NwYWNlX2tleSc6ICdIQVJERFJPUCcsXG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgY3JlYXRlVGltZXJBbmRDb250cm9scygpIHtcbiAgICAgICAgbGV0IHRpbWVyQW5kQ29udHJvbHMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgdGltZXJBbmRDb250cm9scy5hcHBlbmRDaGlsZCh0aGlzLmNyZWF0ZVRpbWVyKCkpO1xuICAgICAgICB0aW1lckFuZENvbnRyb2xzLmFwcGVuZENoaWxkKHRoaXMuY3JlYXRlQ29udHJvbHNDb250ZW50KCkpO1xuICAgICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZCh0aW1lckFuZENvbnRyb2xzKTtcbiAgICB9XG5cbiAgICBjcmVhdGVDb250cm9sc0NvbnRlbnQoKSB7XG4gICAgICAgIGxldCBjb250ZW50RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGNvbnRlbnREaXYuY2xhc3NMaXN0LmFkZCgnY29udHJvbHMnKTtcbiAgICAgICAgbGV0IGltYWdlcyA9IE9iamVjdC5rZXlzKHRoaXMua2V5cyk7XG4gICAgICAgIGxldCBkZXNjcmlwdGlvbnMgPSBPYmplY3QudmFsdWVzKHRoaXMua2V5cyk7XG5cbiAgICAgICAgLy8gaW5pdGlhbGl6ZSBhcnJheXMgb2Ygc3BhbnMgYW5kIGRpdnNcbiAgICAgICAgbGV0IHNwYW5zID0gW107XG4gICAgICAgIGxldCBkaXZzID0gW107XG5cbiAgICAgICAgLy8gY3JlYXRlIGVsZW1lbnRzIGFuZCBzdG9yZSBpbnRvIGFycmF5IGluZGljZXMgZm9yIGxhdGVyIHJlZmVyZW5jZVxuICAgICAgICBmb3IgKGxldCBpID0gMTsgaSA8PSA3OyBpKyspIHtcbiAgICAgICAgICAgIHNwYW5zW2ldID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICAgICAgICAgICAgaWYgKGkgPD0gNCkgZGl2c1tpXSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICB9XG5cbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBpbWFnZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGxldCBwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgICAgICAgICAgbGV0IGltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICAgICAgICAgICAgaW1nLmNsYXNzTGlzdC5hZGQoJ2tleWJvYXJkLWtleScpO1xuICAgICAgICAgICAgaWYgKGkgPT09IDUpIGltZy5jbGFzc0xpc3QuYWRkKCdzaGlmdC1rZXknKTtcbiAgICAgICAgICAgIGlmIChpID09PSA2KSBpbWcuY2xhc3NMaXN0LmFkZCgnc3BhY2Uta2V5Jyk7XG5cbiAgICAgICAgICAgIHAuaW5uZXJIVE1MID0gZGVzY3JpcHRpb25zW2ldO1xuICAgICAgICAgICAgaW1nLnNldEF0dHJpYnV0ZSgnc3JjJywgYC4vYXNzZXRzL2ltYWdlcy8ke2ltYWdlc1tpXX0ucG5nYCk7XG5cbiAgICAgICAgICAgIHNwYW5zW2kgKyAxXS5hcHBlbmQoaW1nKTtcbiAgICAgICAgICAgIHNwYW5zW2kgKyAxXS5hcHBlbmQocCk7XG5cbiAgICAgICAgICAgIGlmIChpIDwgMikge1xuICAgICAgICAgICAgICAgIGRpdnNbMV0uYXBwZW5kKHNwYW5zW2kgKyAxXSk7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKGkgPCA0KSB7XG4gICAgICAgICAgICAgICAgZGl2c1syXS5hcHBlbmQoc3BhbnNbaSArIDFdKTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoaSA8IDYpIHtcbiAgICAgICAgICAgICAgICBkaXZzWzNdLmFwcGVuZChzcGFuc1tpICsgMV0pO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBkaXZzWzRdLmFwcGVuZChzcGFuc1tpICsgMV0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgZm9yIChsZXQgaSA9IDE7IGkgPD0gNDsgaSsrKSB7XG4gICAgICAgICAgICBjb250ZW50RGl2LmFwcGVuZChkaXZzW2ldKTtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgcmV0dXJuIGNvbnRlbnREaXY7XG4gICAgfVxuXG4gICAgY3JlYXRlVGltZXIoKSB7XG4gICAgICAgIGxldCB0aW1lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBsZXQgbWludXRlcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICAgICAgbGV0IHNlY29uZHMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgICAgIGxldCBjb2xvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICAgICAgdGltZXIuY2xhc3NMaXN0LmFkZCgndGltZXInKTtcbiAgICAgICAgbWludXRlcy5jbGFzc0xpc3QuYWRkKCdtaW51dGVzJyk7XG4gICAgICAgIHNlY29uZHMuY2xhc3NMaXN0LmFkZCgnc2Vjb25kcycpO1xuICAgICAgICBjb2xvbi5jbGFzc0xpc3QuYWRkKCdjb2xvbicpO1xuICAgICAgICBtaW51dGVzLmlubmVySFRNTCA9ICcwJztcbiAgICAgICAgc2Vjb25kcy5pbm5lckhUTUwgPSAnMDAnO1xuICAgICAgICBjb2xvbi5pbm5lckhUTUwgPSAnOic7XG4gICAgICAgIFttaW51dGVzLCBjb2xvbiwgc2Vjb25kc10uZm9yRWFjaChlbGUgPT4gdGltZXIuYXBwZW5kQ2hpbGQoZWxlKSk7XG4gICAgICAgIHJldHVybiB0aW1lcjtcbiAgICB9XG5cbiAgICBcbn0iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBNdWx0aXBsYXllciB7XG4gICAgY29uc3RydWN0b3IocGxheWVyMSwgcGxheWVyMikge1xuICAgICAgICB0aGlzLnBsYXllcjEgPSBwbGF5ZXIxO1xuICAgICAgICB0aGlzLnBsYXllcjIgPSBwbGF5ZXIyO1xuICAgIH1cblxuICAgIHN0YXJ0TXVsdGlwbGF5ZXIoKSB7XG4gICAgICAgIHRoaXMucGxheWVyMS5zZXRPcHBvbmVudCh0aGlzLnBsYXllcjIpO1xuICAgICAgICB0aGlzLnBsYXllcjIuc2V0T3Bwb25lbnQodGhpcy5wbGF5ZXIxKTtcbiAgICAgICAgdGhpcy5wbGF5ZXIxLnBsYXkoKTtcbiAgICAgICAgdGhpcy5wbGF5ZXIyLnBsYXkoKTtcbiAgICB9XG59XG4iLCJpbXBvcnQgUGllY2UgZnJvbSAnLi9waWVjZSc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIElQaWVjZSBleHRlbmRzIFBpZWNlIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgdGhpcy5uYW1lID0gXCJJUGllY2VcIjtcbiAgICAgICAgdGhpcy5wb3NpdGlvbiA9IHtcbiAgICAgICAgICAgIHRvcDogW10sXG4gICAgICAgICAgICBtaWRkbGU6IFtdLFxuICAgICAgICAgICAgYm90dG9tOiBbWzEsIDNdLCBbMSwgNF0sIFsxLCA1XSwgWzEsIDZdXVxuICAgICAgICB9O1xuICAgICAgICB0aGlzLmNvbG9yQ29kZSA9IDI7XG4gICAgICAgIHRoaXMudHVybmluZ1BvaW50ID0gWzEsIDRdO1xuICAgICAgICB0aGlzLmRpc3BsYXlTcXVhcmVzID0gW1swLCAyXSwgWzEsIDJdLCBbMiwgMl0sIFszLCAyXV07XG5cbiAgICAgICAgdGhpcy5yZW1vdmVTcXVhcmVzID0gW107XG5cbiAgICAgICAgdGhpcy5vZmZzZXRHdWlkZSA9IHtcbiAgICAgICAgICAgIDA6IFtbMCwgMF0sIFswLCAtMV0sIFswLCAyXSwgWzAsIC0xXSwgWzAsIDJdXSxcbiAgICAgICAgICAgIDE6IFtbMCwgLTFdLCBbMCwgMF0sIFswLCAwXSwgWzEsIDBdLCBbLTIsIDBdXSxcbiAgICAgICAgICAgIDI6IFtbMSwgLTFdLCBbMSwgMV0sIFsxLCAtMl0sIFswLCAxXSwgWzAsIC0yXV0sXG4gICAgICAgICAgICAzOiBbWzEsIDBdLCBbMSwgMF0sIFsxLCAwXSwgWy0xLCAwXSwgWzIsIDBdXVxuICAgICAgICB9XG4gICAgfVxuXG5cbn1cblxuXG4iLCJpbXBvcnQgUGllY2UgZnJvbSAnLi9waWVjZSc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIGpQaWVjZSBleHRlbmRzIFBpZWNlIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgdGhpcy5uYW1lID0gXCJKUGllY2VcIjtcbiAgICAgICAgdGhpcy5wb3NpdGlvbiA9IHtcbiAgICAgICAgICAgIHRvcDogW1swLCAzXV0sXG4gICAgICAgICAgICBtaWRkbGU6IFtdLFxuICAgICAgICAgICAgYm90dG9tOiBbWzEsIDNdLCBbMSwgNF0sIFsxLCA1XV1cbiAgICAgICAgfTtcbiAgICAgICAgdGhpcy5jb2xvckNvZGUgPSA3O1xuXG4gICAgICAgIHRoaXMudHVybmluZ1BvaW50ID0gWzEsIDRdO1xuXG4gICAgICAgIHRoaXMuZGlzcGxheVNxdWFyZXMgPSBbWzEsIDFdLCBbMSwgMl0sIFsyLCAyXSwgWzMsIDJdXTtcbiBcbiAgICAgICAgdGhpcy5yZW1vdmVTcXVhcmVzID0gW107XG4gICAgfVxufSIsImltcG9ydCBQaWVjZSBmcm9tICcuL3BpZWNlJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgbFBpZWNlIGV4dGVuZHMgUGllY2Uge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICB0aGlzLm5hbWUgPSBcIkxQaWVjZVwiO1xuICAgICAgICB0aGlzLnBvc2l0aW9uID0ge1xuICAgICAgICAgICAgdG9wOiBbWzAsIDVdXSxcbiAgICAgICAgICAgIG1pZGRsZTogW10sXG4gICAgICAgICAgICBib3R0b206IFtbMSwgM10sIFsxLCA0XSwgWzEsIDVdXVxuICAgICAgICB9O1xuICAgICAgICB0aGlzLmNvbG9yQ29kZSA9IDY7XG5cbiAgICAgICAgdGhpcy50dXJuaW5nUG9pbnQgPSBbMSwgNF07XG5cbiAgICAgICAgdGhpcy5kaXNwbGF5U3F1YXJlcyA9IFtbMSwgMl0sIFsyLCAyXSwgWzMsIDJdLCBbMywgMV1dO1xuXG4gICAgICAgIHRoaXMucmVtb3ZlU3F1YXJlcyA9IFtdO1xuICAgIH1cbn0iLCJpbXBvcnQgUGllY2UgZnJvbSAnLi9waWVjZSc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE9QaWVjZSBleHRlbmRzIFBpZWNlIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgdGhpcy5uYW1lID0gXCJPUGllY2VcIjtcbiAgICAgICAgdGhpcy5wb3NpdGlvbiA9IHtcbiAgICAgICAgICAgIHRvcDogW1swLCA0XSwgWzAsIDVdXSxcbiAgICAgICAgICAgIG1pZGRsZTogW10sXG4gICAgICAgICAgICBib3R0b206IFtbMSwgNF0sWzEsIDVdXVxuICAgICAgICB9O1xuICAgICAgICB0aGlzLmNvbG9yQ29kZSA9IDE7XG4gICAgICAgIHRoaXMudHVybmluZ1BvaW50ID0gWzEsIDRdO1xuICAgICAgICB0aGlzLmRpc3BsYXlTcXVhcmVzID0gW1sxLCAxXSwgWzIsIDFdLCBbMSwgMl0sIFsyLCAyXV07XG5cbiAgICAgICAgdGhpcy5yZW1vdmVTcXVhcmVzID0gW107XG4gICAgfVxuXG4gICAgLy8gT1BpZWNlIGRvZXMgbm90IHR1cm5cbiAgICB0dXJuUmlnaHQoKSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgXG4gICAgdHVybkxlZnQoKSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG59ICIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIFBpZWNlIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5sZWZ0TW9zdCA9ICcnO1xuICAgICAgICB0aGlzLnJpZ2h0TW9zdCA9ICcnO1xuICAgICAgICB0aGlzLmJvdHRvbU1vc3QgPSAnJztcbiAgICAgICAgdGhpcy50b3BNb3N0ID0gJyc7XG5cbiAgICAgICAgdGhpcy5yb3RhdGlvblN0YXRlID0gMDtcblxuICAgICAgICB0aGlzLm9mZnNldEd1aWRlID0ge1xuICAgICAgICAgICAgMDogW1swLCAwXSwgWzAsIDBdLCBbMCwgMF0sIFswLCAwXSwgWzAsIDBdXSxcbiAgICAgICAgICAgIDE6IFtbMCwgMF0sIFswLCAxXSwgWy0xLCAxXSwgWzIsIDBdLCBbMiwgMV1dLFxuICAgICAgICAgICAgMjogW1swLCAwXSwgWzAsIDBdLCBbMCwgMF0sIFswLCAwXSwgWzAsIDBdXSxcbiAgICAgICAgICAgIDM6IFtbMCwgMF0sIFswLCAtMV0sIFstMSwgLTFdLCBbMiwgMF0sIFsyLCAtMV1dXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBzZXRPdXRlclNxdWFyZXMoKSB7XG4gICAgICAgIGxldCBsZWZ0TW9zdCwgcmlnaHRNb3N0LCB0b3BNb3N0LCBib3R0b21Nb3N0O1xuICAgICAgICBPYmplY3QudmFsdWVzKHRoaXMucG9zaXRpb24pLmZvckVhY2goY29vcmRpbmF0ZXNBcnJheSA9PiBjb29yZGluYXRlc0FycmF5LmZvckVhY2goYXJyYXkgPT4ge1xuICAgICAgICAgICAgbGV0IGNvbHVtblZhbHVlID0gYXJyYXlbMV07XG4gICAgICAgICAgICBsZXQgcm93VmFsdWUgPSBhcnJheVswXTtcbiAgICAgICAgICAgIGlmICghbGVmdE1vc3QgfHwgY29sdW1uVmFsdWUgPCBsZWZ0TW9zdFsxXSkgbGVmdE1vc3QgPSBbcm93VmFsdWUsIGNvbHVtblZhbHVlXTtcbiAgICAgICAgICAgIGlmICghcmlnaHRNb3N0IHx8IGNvbHVtblZhbHVlID4gcmlnaHRNb3N0WzFdKSByaWdodE1vc3QgPSBbcm93VmFsdWUsIGNvbHVtblZhbHVlXTtcbiAgICAgICAgICAgIGlmICghYm90dG9tTW9zdCB8fCByb3dWYWx1ZSA+IGJvdHRvbU1vc3RbMF0pIGJvdHRvbU1vc3QgPSBbcm93VmFsdWUsIGNvbHVtblZhbHVlXTtcbiAgICAgICAgICAgIGlmICghdG9wTW9zdCB8fCByb3dWYWx1ZSA8IHRvcE1vc3RbMF0pIHRvcE1vc3QgPSBbcm93VmFsdWUsIGNvbHVtblZhbHVlXTtcbiAgICAgICAgfSkpO1xuICAgICAgICB0aGlzLmxlZnRNb3N0ID0gbGVmdE1vc3Q7XG4gICAgICAgIHRoaXMucmlnaHRNb3N0ID0gcmlnaHRNb3N0O1xuICAgICAgICB0aGlzLnRvcE1vc3QgPSB0b3BNb3N0O1xuICAgICAgICB0aGlzLmJvdHRvbU1vc3QgPSBib3R0b21Nb3N0O1xuICAgIH1cblxuICAgIHBvcHVsYXRlRmllbGQoZmllbGQpIHtcbiAgICAgICAgbGV0IGNvb3JkaW5hdGVBcnJheXMgPSBPYmplY3QudmFsdWVzKHRoaXMucG9zaXRpb24pO1xuXG4gICAgICAgIGNvb3JkaW5hdGVBcnJheXMuZm9yRWFjaChhcnJheSA9PiB7XG4gICAgICAgICAgICBhcnJheS5mb3JFYWNoKGNvb3JkaW5hdGUgPT4ge1xuICAgICAgICAgICAgICAgIGxldCBbcm93LCBjb2xdID0gW2Nvb3JkaW5hdGVbMF0sIGNvb3JkaW5hdGVbMV1dO1xuICAgICAgICAgICAgICAgIGlmICgoY29sID49IDAgJiYgY29sIDw9IDE5KSAmJiAocm93ID49IDAgJiYgcm93IDw9IDE5KSkgZmllbGRbcm93XVtjb2xdID0gdGhpcy5jb2xvckNvZGU7XG4gICAgICAgICAgICB9KVxuICAgICAgICB9KTtcblxuICAgICAgICB0aGlzLnJlbW92ZVNxdWFyZXMuZm9yRWFjaChwb3NpdGlvbkFycmF5ID0+IHtcbiAgICAgICAgICAgIGxldCBbcm93LCBjb2xdID0gW3Bvc2l0aW9uQXJyYXlbMF0sIHBvc2l0aW9uQXJyYXlbMV1dO1xuICAgICAgICAgICAgaWYgKChjb2wgPj0gMCAmJiBjb2wgPD0gMTkpICYmIChyb3cgPj0gMCAmJiByb3cgPD0gMTkpKSBmaWVsZFtyb3ddW2NvbF0gPSAwO1xuICAgICAgICB9KTtcblxuICAgIH1cblxuICAgIC8vIGNvbXBhcmVzIHR3byBhcnJheXMgb2YgY29vcmRpbmF0ZXMgYW5kIGNoZWNrIGlmIHRoZXkgaGF2ZSB0aGUgc2FtZSBjb250ZW50IGluIHRoZSBzYW1lIG9yZGVyXG4gICAgX3NxdWFyZXNBcmVFcXVhbChvbGRTcXVhcmUsIG5ld1NxdWFyZSkge1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IG9sZFNxdWFyZS5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgaWYgKG9sZFNxdWFyZVtpXSAhPT0gbmV3U3F1YXJlW2ldKSByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuXG4gICAgX2luY2x1ZGVzKHNxdWFyZSwgY29vcmRpbmF0ZUFycmF5cykge1xuICAgICAgICBsZXQgcmVzdWx0ID0gZmFsc2U7XG4gICAgICAgIGNvb3JkaW5hdGVBcnJheXMuZm9yRWFjaChhcnJheSA9PiB7XG4gICAgICAgICAgICBpZiAodGhpcy5fc3F1YXJlc0FyZUVxdWFsKHNxdWFyZSwgYXJyYXkpKSB7XG4gICAgICAgICAgICAgICAgcmVzdWx0ID0gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxuXG4gICAgZHJvcCgpIHtcbiAgICAgICAgbGV0IG9sZFBvc2l0aW9uID0ge1xuICAgICAgICAgICAgdG9wOiB0aGlzLnBvc2l0aW9uLnRvcC5tYXAoYXJyYXkgPT4gYXJyYXkuc2xpY2UoKSksXG4gICAgICAgICAgICBtaWRkbGU6IHRoaXMucG9zaXRpb24ubWlkZGxlLm1hcChhcnJheSA9PiBhcnJheS5zbGljZSgpKSxcbiAgICAgICAgICAgIGJvdHRvbTogdGhpcy5wb3NpdGlvbi5ib3R0b20ubWFwKGFycmF5ID0+IGFycmF5LnNsaWNlKCkpLFxuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5wb3NpdGlvbi50b3AgPSB0aGlzLnBvc2l0aW9uLnRvcC5tYXAoYXJyYXkgPT4gW2FycmF5WzBdICsgMSwgYXJyYXlbMV1dKTtcbiAgICAgICAgdGhpcy5wb3NpdGlvbi5taWRkbGUgPSB0aGlzLnBvc2l0aW9uLm1pZGRsZS5tYXAoYXJyYXkgPT4gW2FycmF5WzBdICsgMSwgYXJyYXlbMV1dKTtcbiAgICAgICAgdGhpcy5wb3NpdGlvbi5ib3R0b20gPSB0aGlzLnBvc2l0aW9uLmJvdHRvbS5tYXAoYXJyYXkgPT4gW2FycmF5WzBdICsgMSwgYXJyYXlbMV1dKTtcbiAgICAgICAgdGhpcy50dXJuaW5nUG9pbnQgPSBbdGhpcy50dXJuaW5nUG9pbnRbMF0gKyAxLCB0aGlzLnR1cm5pbmdQb2ludFsxXV07XG5cbiAgICAgICAgdGhpcy5zZXRSZW1vdmVTcXVhcmVzKG9sZFBvc2l0aW9uKTtcbiAgICB9XG5cbiAgICAvLyBmaW5kIGhpZ2hlc3QgcG9zc2libGUgZ3JvdW5kLXBvc2l0aW9uIGZvciBwaWVjZVxuICAgIGhhcmREcm9wKGZpZWxkKSB7XG4gICAgICAgIHRoaXMuY2xlYXJTZWxmRnJvbUJvYXJkKGZpZWxkKTtcbiAgICAgICAgbGV0IHN0b3BwZWQgPSBmYWxzZTtcbiAgICAgICAgd2hpbGUgKCFzdG9wcGVkKSB7XG4gICAgICAgICAgICBsZXQgaGFuZ2luZ1NxdWFyZXMgPSB0aGlzLmhhbmdpbmdTcXVhcmVzKHRoaXMucG9zaXRpb24pO1xuICAgICAgICAgICAgaGFuZ2luZ1NxdWFyZXMuZm9yRWFjaChjb29yZGluYXRlID0+IHtcbiAgICAgICAgICAgICAgICBsZXQgW3JvdywgY29sXSA9IFtjb29yZGluYXRlWzBdLCBjb29yZGluYXRlWzFdXTtcbiAgICAgICAgICAgICAgICBpZiAoKHJvdyArIDEgPT09IDIwIHx8IGZpZWxkW3JvdyArIDFdW2NvbF0pKSBzdG9wcGVkID0gdHJ1ZTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgaWYgKHN0b3BwZWQpIGJyZWFrO1xuICAgICAgICAgICAgdGhpcy5wb3NpdGlvbi50b3AgPSB0aGlzLnBvc2l0aW9uLnRvcC5tYXAoYXJyYXkgPT4gW2FycmF5WzBdICsgMSwgYXJyYXlbMV1dKTtcbiAgICAgICAgICAgIHRoaXMucG9zaXRpb24ubWlkZGxlID0gdGhpcy5wb3NpdGlvbi5taWRkbGUubWFwKGFycmF5ID0+IFthcnJheVswXSArIDEsIGFycmF5WzFdXSk7XG4gICAgICAgICAgICB0aGlzLnBvc2l0aW9uLmJvdHRvbSA9IHRoaXMucG9zaXRpb24uYm90dG9tLm1hcChhcnJheSA9PiBbYXJyYXlbMF0gKyAxLCBhcnJheVsxXV0pO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgY2xlYXJTZWxmRnJvbUJvYXJkKGZpZWxkKSB7XG4gICAgICAgIE9iamVjdC52YWx1ZXModGhpcy5wb3NpdGlvbikuZm9yRWFjaChjb29yZGluYXRlQXJyYXlzID0+IGNvb3JkaW5hdGVBcnJheXMuZm9yRWFjaChjb29yZGluYXRlID0+IHtcbiAgICAgICAgICAgIGxldCByb3cgPSBjb29yZGluYXRlWzBdO1xuICAgICAgICAgICAgbGV0IGNvbCA9IGNvb3JkaW5hdGVbMV07XG4gICAgICAgICAgICBpZiAocm93IDwgMjAgJiYgcm93ID49IDAgJiYgY29sID49IDAgJiYgY29sIDwgMTApIGZpZWxkW3Jvd11bY29sXSA9IDA7XG4gICAgICAgIH0pKTtcbiAgICB9XG5cbiAgICBtb3ZlKGRpcmVjdGlvbiwgZmllbGQpIHtcbiAgICAgICAgbGV0IHRTcGluID0gZmFsc2U7XG4gICAgICAgIGxldCBvbGRQb3NpdGlvbiA9IHtcbiAgICAgICAgICAgIHRvcDogdGhpcy5wb3NpdGlvbi50b3AubWFwKGFycmF5ID0+IGFycmF5LnNsaWNlKCkpLFxuICAgICAgICAgICAgbWlkZGxlOiB0aGlzLnBvc2l0aW9uLm1pZGRsZS5tYXAoYXJyYXkgPT4gYXJyYXkuc2xpY2UoKSksXG4gICAgICAgICAgICBib3R0b206IHRoaXMucG9zaXRpb24uYm90dG9tLm1hcChhcnJheSA9PiBhcnJheS5zbGljZSgpKSxcbiAgICAgICAgfVxuICAgICAgICB0aGlzLm9sZFR1cm5pbmdQb2ludCA9IHRoaXMudHVybmluZ1BvaW50LnNsaWNlKCk7XG4gICAgICAgIHN3aXRjaCAoZGlyZWN0aW9uKSB7XG4gICAgICAgICAgICBjYXNlIFwibGVmdFwiOlxuICAgICAgICAgICAgICAgIHRoaXMucG9zaXRpb24udG9wID0gdGhpcy5wb3NpdGlvbi50b3AubWFwKGFycmF5ID0+IFthcnJheVswXSwgYXJyYXlbMV0gLSAxXSk7XG4gICAgICAgICAgICAgICAgdGhpcy5wb3NpdGlvbi5taWRkbGUgPSB0aGlzLnBvc2l0aW9uLm1pZGRsZS5tYXAoYXJyYXkgPT4gW2FycmF5WzBdLCBhcnJheVsxXSAtIDFdKTtcbiAgICAgICAgICAgICAgICB0aGlzLnBvc2l0aW9uLmJvdHRvbSA9IHRoaXMucG9zaXRpb24uYm90dG9tLm1hcChhcnJheSA9PiBbYXJyYXlbMF0sIGFycmF5WzFdIC0gMV0pO1xuICAgICAgICAgICAgICAgIHRoaXMudHVybmluZ1BvaW50ID0gW3RoaXMudHVybmluZ1BvaW50WzBdLCB0aGlzLnR1cm5pbmdQb2ludFsxXSAtIDFdO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBcInR1cm5SaWdodFwiOlxuICAgICAgICAgICAgICAgIC8vIGRlZmVyIHRvIFwidHVyblwiIG1ldGhvZFxuICAgICAgICAgICAgICAgIC8vIHRTcGluIHdpbGwgZWl0aGVyIGJlIHRydXRoeSBvciBmYWxzeSwgdHJhY2tlZCBmb3Igc2VuZGluZyBtb3JlIGxpbmVzIGR1cmluZyBtdWx0aXBsYXllclxuICAgICAgICAgICAgICAgIHRTcGluID0gdGhpcy50dXJuUmlnaHQoZmllbGQsIG9sZFBvc2l0aW9uKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgXCJyaWdodFwiOlxuICAgICAgICAgICAgICAgIHRoaXMucG9zaXRpb24udG9wID0gdGhpcy5wb3NpdGlvbi50b3AubWFwKGFycmF5ID0+IFthcnJheVswXSwgYXJyYXlbMV0gKyAxXSk7XG4gICAgICAgICAgICAgICAgdGhpcy5wb3NpdGlvbi5taWRkbGUgPSB0aGlzLnBvc2l0aW9uLm1pZGRsZS5tYXAoYXJyYXkgPT4gW2FycmF5WzBdLCBhcnJheVsxXSArIDFdKTtcbiAgICAgICAgICAgICAgICB0aGlzLnBvc2l0aW9uLmJvdHRvbSA9IHRoaXMucG9zaXRpb24uYm90dG9tLm1hcChhcnJheSA9PiBbYXJyYXlbMF0sIGFycmF5WzFdICsgMV0pO1xuICAgICAgICAgICAgICAgIHRoaXMudHVybmluZ1BvaW50ID0gW3RoaXMudHVybmluZ1BvaW50WzBdLCB0aGlzLnR1cm5pbmdQb2ludFsxXSArIDFdO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBcImRvd25cIjpcbiAgICAgICAgICAgICAgICB0aGlzLnBvc2l0aW9uLnRvcCA9IHRoaXMucG9zaXRpb24udG9wLm1hcChhcnJheSA9PiBbYXJyYXlbMF0gKyAxLCBhcnJheVsxXV0pO1xuICAgICAgICAgICAgICAgIHRoaXMucG9zaXRpb24ubWlkZGxlID0gdGhpcy5wb3NpdGlvbi5taWRkbGUubWFwKGFycmF5ID0+IFthcnJheVswXSArIDEsIGFycmF5WzFdXSk7XG4gICAgICAgICAgICAgICAgdGhpcy5wb3NpdGlvbi5ib3R0b20gPSB0aGlzLnBvc2l0aW9uLmJvdHRvbS5tYXAoYXJyYXkgPT4gW2FycmF5WzBdICsgMSwgYXJyYXlbMV1dKTtcbiAgICAgICAgICAgICAgICB0aGlzLnR1cm5pbmdQb2ludCA9IFt0aGlzLnR1cm5pbmdQb2ludFswXSArIDEsIHRoaXMudHVybmluZ1BvaW50WzFdXTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgXCJ1cFwiOlxuICAgICAgICAgICAgICAgIHRoaXMucG9zaXRpb24udG9wID0gdGhpcy5wb3NpdGlvbi50b3AubWFwKGFycmF5ID0+IFthcnJheVswXSAtIDEsIGFycmF5WzFdXSk7XG4gICAgICAgICAgICAgICAgdGhpcy5wb3NpdGlvbi5taWRkbGUgPSB0aGlzLnBvc2l0aW9uLm1pZGRsZS5tYXAoYXJyYXkgPT4gW2FycmF5WzBdIC0gMSwgYXJyYXlbMV1dKTtcbiAgICAgICAgICAgICAgICB0aGlzLnBvc2l0aW9uLmJvdHRvbSA9IHRoaXMucG9zaXRpb24uYm90dG9tLm1hcChhcnJheSA9PiBbYXJyYXlbMF0gLSAxLCBhcnJheVsxXV0pO1xuICAgICAgICAgICAgICAgIHRoaXMudHVybmluZ1BvaW50ID0gW3RoaXMudHVybmluZ1BvaW50WzBdIC0gMSwgdGhpcy50dXJuaW5nUG9pbnRbMV1dO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBcInR1cm5MZWZ0XCI6XG4gICAgICAgICAgICAgICAgdGhpcy50dXJuTGVmdChmaWVsZCwgb2xkUG9zaXRpb24pO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuc2V0T3V0ZXJTcXVhcmVzKCk7XG4gICAgICAgIHRoaXMuc2V0UmVtb3ZlU3F1YXJlcyhvbGRQb3NpdGlvbiwgZmllbGQpO1xuICAgICAgICByZXR1cm4gdFNwaW47XG4gICAgfVxuXG4gICAgdHVyblJpZ2h0KGZpZWxkLCBvbGRQb3NpdGlvbikge1xuICAgICAgICAvLyBjbGVhciBmcm9tIGZpZWxkIGZpcnN0IHNvIHRoYXQgdGhlIHBpZWNlIGRvZXNuJ3Qgc2VlIGl0c2VsZiBhcyBhIGNvbmZsaWN0aW5nIHBpZWNlXG4gICAgICAgIHRoaXMuY2xlYXJTZWxmRnJvbUJvYXJkKGZpZWxkKTtcbiAgICAgICAgbGV0IHNxdWFyZXMgPSBbXTtcbiAgICAgICAgT2JqZWN0LnZhbHVlcyh0aGlzLnBvc2l0aW9uKS5mb3JFYWNoKGNvb3JkaW5hdGVzQXJyYXkgPT4gc3F1YXJlcy5wdXNoKC4uLmNvb3JkaW5hdGVzQXJyYXkpKTtcbiAgICAgICAgdGhpcy5wb3NpdGlvbi50b3AgPSBbXTtcbiAgICAgICAgdGhpcy5wb3NpdGlvbi5taWRkbGUgPSBbXTtcbiAgICAgICAgdGhpcy5wb3NpdGlvbi5ib3R0b20gPSBbXTtcbiAgICAgICAgc3F1YXJlcy5mb3JFYWNoKHNxdWFyZSA9PiB7XG4gICAgICAgICAgICBsZXQgY29sdW1uID0gc3F1YXJlWzFdO1xuICAgICAgICAgICAgbGV0IGhlaWdodERpZmZlcmVuY2UgPSB0aGlzLnR1cm5pbmdQb2ludFswXSAtIHNxdWFyZVswXTtcbiAgICAgICAgICAgIGxldCB3aWR0aERpZmZlcmVuY2UgPSB0aGlzLnR1cm5pbmdQb2ludFsxXSAtIHNxdWFyZVsxXTtcbiAgICAgICAgICAgIGxldCBuZXdDb2wgPSB0aGlzLnR1cm5pbmdQb2ludFsxXSArIGhlaWdodERpZmZlcmVuY2U7XG4gICAgICAgICAgICBsZXQgbmV3Um93ID0gdGhpcy50dXJuaW5nUG9pbnRbMF0gKyAod2lkdGhEaWZmZXJlbmNlICogLTEpO1xuICAgICAgICAgICAgc3dpdGNoIChjb2x1bW4pIHtcbiAgICAgICAgICAgICAgICBjYXNlIGNvbHVtbiA9IHRoaXMucmlnaHRNb3N0WzFdOlxuICAgICAgICAgICAgICAgICAgICB0aGlzLnBvc2l0aW9uLmJvdHRvbS5wdXNoKFtuZXdSb3csIG5ld0NvbF0pO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlIGNvbHVtbiA9IHRoaXMubGVmdE1vc3RbMV06XG4gICAgICAgICAgICAgICAgICAgIHRoaXMucG9zaXRpb24udG9wLnB1c2goW25ld1JvdywgbmV3Q29sXSk7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgICAgIHRoaXMucG9zaXRpb24ubWlkZGxlLnB1c2goW25ld1JvdywgbmV3Q29sXSk7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5zZXRSZW1vdmVTcXVhcmVzKG9sZFBvc2l0aW9uKTtcblxuICAgICAgICAvLyBmaW5kIG91dGVyLW1vc3Qgc3F1YXJlcyB0byBzZWUgaWYgcGllY2UgaXMgb2JzdHJ1Y3RlZFxuICAgICAgICAvLyBpZiBzbywgcHVzaCBwaWVjZSBiYWNrIGludG8gZmllbGRcbiAgICAgICAgdGhpcy5zZXRPdXRlclNxdWFyZXMoKTtcblxuICAgICAgICAvLyByZXNldCByb3RhdGlvbiBzdGF0ZSwgd2hpY2ggaXMgdHJhY2tlZCBmb3IgaW1wbGVtZW50aW5nIHN1cGVyIHJvdGF0aW9uIHN5c3RlbVxuICAgICAgICB0aGlzLnJvdGF0aW9uU3RhdGUgPSB0aGlzLnJvdGF0aW9uU3RhdGUgPT09IDMgPyAwIDogdGhpcy5yb3RhdGlvblN0YXRlICsgMTtcblxuICAgICAgICBsZXQgbmV3U3F1YXJlcyA9IFsuLi50aGlzLnBvc2l0aW9uLnRvcCwgLi4udGhpcy5wb3NpdGlvbi5taWRkbGUsIC4uLnRoaXMucG9zaXRpb24uYm90dG9tXTtcbiAgICAgICAgZm9yIChsZXQgaSBpbiBuZXdTcXVhcmVzKSB7XG4gICAgICAgICAgICBsZXQgW3JvdywgY29sXSA9IFtuZXdTcXVhcmVzW2ldWzBdLCBuZXdTcXVhcmVzW2ldWzFdXTtcbiAgICAgICAgICAgIGlmIChmaWVsZFtyb3ddID09PSB1bmRlZmluZWQgfHwgZmllbGRbcm93XVtjb2xdID09PSB1bmRlZmluZWQgfHwgZmllbGRbcm93XVtjb2xdKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMud2FsbEtpY2soZmllbGQsIFwidHVyblJpZ2h0XCIsIG9sZFBvc2l0aW9uKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIHR1cm5MZWZ0KGZpZWxkLCBvbGRQb3NpdGlvbikge1xuICAgICAgICB0aGlzLmNsZWFyU2VsZkZyb21Cb2FyZChmaWVsZCk7XG4gICAgICAgIGxldCBzcXVhcmVzID0gW107XG4gICAgICAgIE9iamVjdC52YWx1ZXModGhpcy5wb3NpdGlvbikuZm9yRWFjaChjb29yZGluYXRlc0FycmF5ID0+IHNxdWFyZXMucHVzaCguLi5jb29yZGluYXRlc0FycmF5KSk7XG4gICAgICAgIHRoaXMucG9zaXRpb24udG9wID0gW107XG4gICAgICAgIHRoaXMucG9zaXRpb24ubWlkZGxlID0gW107XG4gICAgICAgIHRoaXMucG9zaXRpb24uYm90dG9tID0gW107XG4gICAgICAgIHNxdWFyZXMuZm9yRWFjaChzcXVhcmUgPT4ge1xuICAgICAgICAgICAgbGV0IGNvbHVtbiA9IHNxdWFyZVsxXTtcbiAgICAgICAgICAgIGxldCBoZWlnaHREaWZmZXJlbmNlID0gdGhpcy50dXJuaW5nUG9pbnRbMF0gLSBzcXVhcmVbMF07XG4gICAgICAgICAgICBsZXQgd2lkdGhEaWZmZXJlbmNlID0gdGhpcy50dXJuaW5nUG9pbnRbMV0gLSBzcXVhcmVbMV07XG4gICAgICAgICAgICBsZXQgbmV3Q29sID0gdGhpcy50dXJuaW5nUG9pbnRbMV0gLSBoZWlnaHREaWZmZXJlbmNlO1xuICAgICAgICAgICAgbGV0IG5ld1JvdyA9IHRoaXMudHVybmluZ1BvaW50WzBdIC0gKHdpZHRoRGlmZmVyZW5jZSAqIC0xKTtcbiAgICAgICAgICAgIHN3aXRjaCAoY29sdW1uKSB7XG4gICAgICAgICAgICAgICAgY2FzZSBjb2x1bW4gPSB0aGlzLnJpZ2h0TW9zdFsxXTpcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wb3NpdGlvbi50b3AucHVzaChbbmV3Um93LCBuZXdDb2xdKTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSBjb2x1bW4gPSB0aGlzLmxlZnRNb3N0WzFdOlxuICAgICAgICAgICAgICAgICAgICB0aGlzLnBvc2l0aW9uLmJvdHRvbS5wdXNoKFtuZXdSb3csIG5ld0NvbF0pO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgICAgICB0aGlzLnBvc2l0aW9uLm1pZGRsZS5wdXNoKFtuZXdSb3csIG5ld0NvbF0pO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICAgICAgdGhpcy5zZXRSZW1vdmVTcXVhcmVzKG9sZFBvc2l0aW9uKTtcblxuICAgICAgICAvLyBmaW5kIGxlZnQgYW5kIHJpZ2h0IG1vc3Qgc3F1YXJlcyB0byBzZWUgaWYgcGllY2UgdGhyb3VnaCB3YWxsXG4gICAgICAgIC8vIGlmIHRocm91Z2ggd2FsbCwgcHVzaCBwaWVjZSBiYWNrIGludG8gZmllbGRcbiAgICAgICAgdGhpcy5zZXRPdXRlclNxdWFyZXMoKTtcblxuICAgICAgICAvLyByZXNldCByb3RhdGlvbiBzdGF0ZSwgd2hpY2ggaXMgdHJhY2tlZCBmb3IgaW1wbGVtZW50aW5nIHN1cGVyIHJvdGF0aW9uIHN5c3RlbVxuICAgICAgICB0aGlzLnJvdGF0aW9uU3RhdGUgPSB0aGlzLnJvdGF0aW9uU3RhdGUgPT09IDAgPyAzIDogdGhpcy5yb3RhdGlvblN0YXRlIC0gMTtcblxuICAgICAgICBsZXQgbmV3U3F1YXJlcyA9IFsuLi50aGlzLnBvc2l0aW9uLnRvcCwgLi4udGhpcy5wb3NpdGlvbi5taWRkbGUsIC4uLnRoaXMucG9zaXRpb24uYm90dG9tXTtcbiAgICAgICAgZm9yIChsZXQgaSBpbiBuZXdTcXVhcmVzKSB7XG4gICAgICAgICAgICBsZXQgW3JvdywgY29sXSA9IFtuZXdTcXVhcmVzW2ldWzBdLCBuZXdTcXVhcmVzW2ldWzFdXTtcbiAgICAgICAgICAgIGlmIChmaWVsZFtyb3ddID09PSB1bmRlZmluZWQgfHwgZmllbGRbcm93XVtjb2xdID09PSB1bmRlZmluZWQgfHwgZmllbGRbcm93XVtjb2xdKSB7XG4gICAgICAgICAgICAgICAgdGhpcy53YWxsS2ljayhmaWVsZCwgXCJ0dXJuTGVmdFwiLCBvbGRQb3NpdGlvbik7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgIH1cblxuICAgIC8vIGNvbXBhcmUgb2xkIHBvc2l0aW9uIG9mIHBpZWNlIHdpdGggbmV3IHBvc2l0aW9uIFxuICAgIHNldFJlbW92ZVNxdWFyZXMob2xkUG9zaXRpb24sIGZpZWxkKSB7XG4gICAgICAgIGxldCBvbGRTcXVhcmVzID0gW107XG4gICAgICAgIGxldCBuZXdTcXVhcmVzID0gW107XG4gICAgICAgIE9iamVjdC52YWx1ZXMob2xkUG9zaXRpb24pLmZvckVhY2goY29vcmRpbmF0ZXNBcnJheSA9PiBvbGRTcXVhcmVzLnB1c2goLi4uY29vcmRpbmF0ZXNBcnJheSkpO1xuICAgICAgICBPYmplY3QudmFsdWVzKHRoaXMucG9zaXRpb24pLmZvckVhY2goY29vcmRpbmF0ZXNBcnJheSA9PiBuZXdTcXVhcmVzLnB1c2goLi4uY29vcmRpbmF0ZXNBcnJheSkpO1xuICAgICAgICAvLyBrZWVwIHRyYWNrIG9mIHNxdWFyZXMgdGhhdCB0aGUgcG9zaXRpb25zIGRvIG5vdCBoYXZlIGluIGNvbW1vbiAoc3F1YXJlcyB0byByZW1vdmUgY29sb3IgZnJvbSlcbiAgICAgICAgdGhpcy5yZW1vdmVTcXVhcmVzID0gb2xkU3F1YXJlcy5maWx0ZXIob2xkU3F1YXJlID0+IHtcbiAgICAgICAgICAgIGlmICghZmllbGQpIHtcbiAgICAgICAgICAgICAgICBpZiAoIXRoaXMuX2luY2x1ZGVzKG9sZFNxdWFyZSwgbmV3U3F1YXJlcykpIHJldHVybiBvbGRTcXVhcmU7XG4gICAgICAgICAgICAvLyBpZiBmaWVsZCBhcmd1bWVudCBpcyBwYXNzZWQsIGNoZWNrIHRoZSBmaWVsZCB0byBtYWtlIHN1cmUgdG8gbm90IGNsZWFyIHNxdWFyZXMgb2Ygb3RoZXIgcGllY2VzXG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGlmICghdGhpcy5faW5jbHVkZXMob2xkU3F1YXJlLCBuZXdTcXVhcmVzKSAmJiAhZmllbGRbb2xkU3F1YXJlWzBdXVtvbGRTcXVhcmVbMV1dKSByZXR1cm4gb2xkU3F1YXJlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgXG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGhhbmdpbmdTcXVhcmVzKHBvc2l0aW9uKSB7XG4gICAgICAgIGxldCBzcXVhcmVzID0gW107XG4gICAgICAgIGxldCBoYW5naW5nU3F1YXJlcyA9IFtdO1xuICAgICAgICBPYmplY3QudmFsdWVzKHBvc2l0aW9uKS5mb3JFYWNoKGNvb3JkaW5hdGVBcnJheSA9PiBzcXVhcmVzLnB1c2goLi4uY29vcmRpbmF0ZUFycmF5KSlcbiAgICAgICAgc3F1YXJlcy5mb3JFYWNoKHNxdWFyZSA9PiB7XG4gICAgICAgICAgICBsZXQgYmVsb3dTcXVhcmUgPSBbc3F1YXJlWzBdICsgMSwgc3F1YXJlWzFdXTtcbiAgICAgICAgICAgIGlmICghdGhpcy5faW5jbHVkZXMoYmVsb3dTcXVhcmUsIHNxdWFyZXMpKSBoYW5naW5nU3F1YXJlcy5wdXNoKHNxdWFyZSk7XG4gICAgICAgIH0pXG4gICAgICAgIHJldHVybiBoYW5naW5nU3F1YXJlcztcbiAgICB9XG5cbiAgICBzaWRlU3F1YXJlcygpIHtcbiAgICAgICAgbGV0IHNxdWFyZXMgPSBbXTtcbiAgICAgICAgbGV0IHNpZGVTcXVhcmVzID0ge1xuICAgICAgICAgICAgbGVmdDogW10sXG4gICAgICAgICAgICByaWdodDogW11cbiAgICAgICAgfTtcbiAgICAgICAgT2JqZWN0LnZhbHVlcyh0aGlzLnBvc2l0aW9uKS5mb3JFYWNoKGNvb3JkaW5hdGVBcnJheSA9PiBzcXVhcmVzLnB1c2goLi4uY29vcmRpbmF0ZUFycmF5KSk7XG4gICAgICAgIHNxdWFyZXMuZm9yRWFjaChzcXVhcmUgPT4ge1xuICAgICAgICAgICAgbGV0IGFkamFjZW50TGVmdCA9IFtzcXVhcmVbMF0sIHNxdWFyZVsxXSAtIDFdO1xuICAgICAgICAgICAgbGV0IGFkamFjZW50UmlnaHQgPSBbc3F1YXJlWzBdLCBzcXVhcmVbMV0gKyAxXTtcbiAgICAgICAgICAgIGlmICghdGhpcy5faW5jbHVkZXMoYWRqYWNlbnRMZWZ0LCBzcXVhcmVzKSkgc2lkZVNxdWFyZXMubGVmdC5wdXNoKHNxdWFyZSk7XG4gICAgICAgICAgICBpZiAoIXRoaXMuX2luY2x1ZGVzKGFkamFjZW50UmlnaHQsIHNxdWFyZXMpKSBzaWRlU3F1YXJlcy5yaWdodC5wdXNoKHNxdWFyZSk7XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gc2lkZVNxdWFyZXM7XG4gICAgfVxuXG4gICAgaXNGYWxsaW5nKGZpZWxkKSB7XG4gICAgICAgIGxldCByZXN1bHQgPSB0cnVlO1xuICAgICAgICB0aGlzLmhhbmdpbmdTcXVhcmVzKHRoaXMucG9zaXRpb24pLmZvckVhY2goY29vcmRpbmF0ZVBhaXIgPT4ge1xuICAgICAgICAgICAgbGV0IFtyb3csIGNvbF0gPSBbY29vcmRpbmF0ZVBhaXJbMF0sIGNvb3JkaW5hdGVQYWlyWzFdXTtcbiAgICAgICAgICAgIC8vIGlmIHRoZSBwaWVjZSdzIGN1cnJlbnQgcG9zaXRpb24gaXMgYWJvdmUgdGhlIGZpZWxkIGZsb29yIG9yIGEgYW5vdGhlciBwaWVjZSAobm90IGluY2x1ZGUgZ2hvc3QgcGllY2UpXG4gICAgICAgICAgICBpZiAoIWZpZWxkW3JvdyArIDFdIHx8IChmaWVsZFtyb3cgKyAxXVtjb2xdICYmIGZpZWxkW3JvdyArIDFdW2NvbF0gIT09IFwieFwiKSkge1xuICAgICAgICAgICAgICAgIHJlc3VsdCA9IGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG5cbiAgICByaWdodFNpZGVCbG9ja2VkKGZpZWxkKSB7XG4gICAgICAgIC8vIGlmICh0aGlzLnBvc2l0aW9uLnRvcFswXVswXSA8IDApIHJldHVybiBmYWxzZTtcbiAgICAgICAgbGV0IHJlc3VsdCA9IGZhbHNlO1xuICAgICAgICB0aGlzLnNpZGVTcXVhcmVzKCkucmlnaHQuZm9yRWFjaChjb29yZGluYXRlUGFpciA9PiB7XG4gICAgICAgICAgICBsZXQgW3JvdywgY29sXSA9IFtjb29yZGluYXRlUGFpclswXSwgY29vcmRpbmF0ZVBhaXJbMV1dO1xuICAgICAgICAgICAgLy8gaWYgYW55IHJpZ2h0IGZhY2luZyBzcXVhcmUgaGl0cyB0aGUgd2FsbCBvciBhbm90aGVyIHBpZWNlLCBub3QgaW5jbHVkaW5nIHRoZSBnaG9zdCBwaWVjZVxuICAgICAgICAgICAgaWYgKGNvbCA9PT0gOSB8fCAoZmllbGRbcm93XSAmJiBmaWVsZFtyb3ddW2NvbCArIDFdICYmIGZpZWxkW3JvdyArIDFdW2NvbF0gIT09IFwieFwiKSkge1xuICAgICAgICAgICAgICAgIHJlc3VsdCA9IHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cblxuICAgIGxlZnRTaWRlQmxvY2tlZChmaWVsZCkge1xuICAgICAgICAvLyBpZiAodGhpcy5wb3NpdGlvbi50b3BbMF1bMF0gPCAwKSByZXR1cm4gZmFsc2U7XG4gICAgICAgIGxldCByZXN1bHQgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5zaWRlU3F1YXJlcygpLmxlZnQuZm9yRWFjaChjb29yZGluYXRlUGFpciA9PiB7XG4gICAgICAgICAgICBsZXQgW3JvdywgY29sXSA9IFtjb29yZGluYXRlUGFpclswXSwgY29vcmRpbmF0ZVBhaXJbMV1dO1xuICAgICAgICAgICAgLy8gaWYgYW55IGxlZnQgZmFjaW5nIHNxdWFyZSBoaXRzIHRoZSB3YWxsIG9yIGFub3RoZXIgcGllY2UsIG5vdCBpbmNsdWRpbmcgdGhlIGdob3N0IHBpZWNlXG4gICAgICAgICAgICBpZiAoY29sID09PSAwIHx8IChmaWVsZFtyb3ddICYmIGZpZWxkW3Jvd11bY29sIC0gMV0gJiYgZmllbGRbcm93XVtjb2wgLSAxXSAhPT0gXCJ4XCIpKSB7XG4gICAgICAgICAgICAgICAgcmVzdWx0ID0gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxuXG4gICAgd2FsbEtpY2soZmllbGQsIGFjdGlvbiwgb2xkUG9zaXRpb24pIHtcbiAgICAgICAgbGV0IHZhbGlkU3BvdCwgc3RhcnRpbmdPZmZzZXQ7XG4gICAgICAgIGlmIChhY3Rpb24gPT09IFwidHVyblJpZ2h0XCIpIHtcbiAgICAgICAgICAgIHN0YXJ0aW5nT2Zmc2V0ID0gdGhpcy5yb3RhdGlvblN0YXRlID09PSAwID8gdGhpcy5vZmZzZXRHdWlkZVszXSA6IHRoaXMub2Zmc2V0R3VpZGVbdGhpcy5yb3RhdGlvblN0YXRlIC0gMV07XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBzdGFydGluZ09mZnNldCA9IHRoaXMucm90YXRpb25TdGF0ZSA9PT0gMyA/IHRoaXMub2Zmc2V0R3VpZGVbMF0gOiB0aGlzLm9mZnNldEd1aWRlW3RoaXMucm90YXRpb25TdGF0ZSArIDFdO1xuICAgICAgICB9XG4gICAgICAgIGxldCBuZXh0T2Zmc2V0ID0gdGhpcy5vZmZzZXRHdWlkZVt0aGlzLnJvdGF0aW9uU3RhdGVdO1xuICAgICAgICAvLyBmb3IgKGxldCBpID0gMDsgaSA8IDU7IGkrKykge1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IDY7IGkrKykge1xuICAgICAgICAgICAgLy8gaWYgaSA9PT0gNSwgdGhlcmUgYXJlIG5vIG1vcmUgcG90ZW50aWFsIHBvc2l0aW9ucyB0byBjaGVjayBhbmQgdGhlIHBpZWNlJ3MgcG9zaXRpb24gaXMgdGhlIGluaXRpYWwgcG9zaXRpb24gZnJvbSBiZWZvcmUgdHVybmluZ1xuICAgICAgICAgICAgaWYgKGkgPT09IDUpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnBvc2l0aW9uID0gb2xkUG9zaXRpb247XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdmFsaWRTcG90ID0gdHJ1ZTtcbiAgICAgICAgICAgIGxldCBiYXNlUG9zaXRpb24gPSB7XG4gICAgICAgICAgICAgICAgdG9wOiB0aGlzLnBvc2l0aW9uLnRvcC5tYXAoYXJyYXkgPT4gYXJyYXkuc2xpY2UoKSksXG4gICAgICAgICAgICAgICAgbWlkZGxlOiB0aGlzLnBvc2l0aW9uLm1pZGRsZS5tYXAoYXJyYXkgPT4gYXJyYXkuc2xpY2UoKSksXG4gICAgICAgICAgICAgICAgYm90dG9tOiB0aGlzLnBvc2l0aW9uLmJvdHRvbS5tYXAoYXJyYXkgPT4gYXJyYXkuc2xpY2UoKSksXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBsZXQgYmFzZVR1cm5pbmdQb2ludCA9IHRoaXMudHVybmluZ1BvaW50LnNsaWNlKCk7XG5cbiAgICAgICAgICAgIGxldCBzdGFydGluZ1RyYW5zbGF0aW9uID0gc3RhcnRpbmdPZmZzZXRbaV07XG4gICAgICAgICAgICBsZXQgcG90ZW50aWFsVHJhbnNsYXRpb24gPSBuZXh0T2Zmc2V0W2ldO1xuICAgICAgICAgICAgbGV0IHJvd1NoaWZ0ID0gc3RhcnRpbmdUcmFuc2xhdGlvblswXSAtIHBvdGVudGlhbFRyYW5zbGF0aW9uWzBdO1xuICAgICAgICAgICAgbGV0IGNvbFNoaWZ0ID0gc3RhcnRpbmdUcmFuc2xhdGlvblsxXSAtIHBvdGVudGlhbFRyYW5zbGF0aW9uWzFdO1xuICAgICAgICAgICAgbGV0IHRyYW5zbGF0ZVZlcnRpY2FsID0gcm93U2hpZnQgPiAwID8gKCkgPT4gdGhpcy5tb3ZlKFwidXBcIikgOiAoKSA9PiB0aGlzLm1vdmUoXCJkb3duXCIpO1xuICAgICAgICAgICAgbGV0IHRyYW5zbGF0ZUhvcml6b250YWwgPSBjb2xTaGlmdCA+IDAgPyAoKSA9PiB0aGlzLm1vdmUoXCJyaWdodFwiKSA6ICgpID0+IHRoaXMubW92ZShcImxlZnRcIik7XG4gICAgICAgICAgICBmb3IgKGxldCBudW1UaW1lc1Jvd1NoaWZ0ZWQgPSAwOyBudW1UaW1lc1Jvd1NoaWZ0ZWQgPCBNYXRoLmFicyhyb3dTaGlmdCk7IG51bVRpbWVzUm93U2hpZnRlZCsrKSB7XG4gICAgICAgICAgICAgICAgdHJhbnNsYXRlVmVydGljYWwoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGZvciAobGV0IG51bVRpbWVzQ29sU2hpZnRlZCA9IDA7IG51bVRpbWVzQ29sU2hpZnRlZCA8IE1hdGguYWJzKGNvbFNoaWZ0KTsgbnVtVGltZXNDb2xTaGlmdGVkKyspIHtcbiAgICAgICAgICAgICAgICB0cmFuc2xhdGVIb3Jpem9udGFsKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBsZXQgbmV3UG9zaXRpb24gPSBbLi4udGhpcy5wb3NpdGlvbi50b3AsIC4uLnRoaXMucG9zaXRpb24ubWlkZGxlLCAuLi50aGlzLnBvc2l0aW9uLmJvdHRvbV07XG4gICAgICAgICAgICBmb3IgKGxldCBpIGluIG5ld1Bvc2l0aW9uKSB7XG4gICAgICAgICAgICAgICAgbGV0IFtyb3csIGNvbF0gPSBbbmV3UG9zaXRpb25baV1bMF0sIG5ld1Bvc2l0aW9uW2ldWzFdXTtcbiAgICAgICAgICAgICAgICBpZiAoZmllbGRbcm93XSA9PT0gdW5kZWZpbmVkIHx8IGZpZWxkW3Jvd11bY29sXSA9PT0gdW5kZWZpbmVkIHx8IGZpZWxkW3Jvd11bY29sXSA+IDApIHtcbiAgICAgICAgICAgICAgICAgICAgdmFsaWRTcG90ID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMucG9zaXRpb24gPSBiYXNlUG9zaXRpb247XG4gICAgICAgICAgICAgICAgICAgIHRoaXMudHVybmluZ1BvaW50ID0gYmFzZVR1cm5pbmdQb2ludDtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gYWxsb3dzIHRTcGluIHZhcmlhYmxlIHRvIGJlIHRydXRoeVxuICAgICAgICAgICAgaWYgKHZhbGlkU3BvdCkge1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLm5hbWUgPT09IFwiVFBpZWNlXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn0iLCJpbXBvcnQgUGllY2UgZnJvbSAnLi9waWVjZSc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNQaWVjZSBleHRlbmRzIFBpZWNlIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgdGhpcy5uYW1lID0gXCJTUGllY2VcIjtcbiAgICAgICAgdGhpcy5wb3NpdGlvbiA9IHtcbiAgICAgICAgICAgIHRvcDogW1swLCA0XSwgWzAsIDVdXSxcbiAgICAgICAgICAgIG1pZGRsZTogW10sXG4gICAgICAgICAgICBib3R0b206IFtbMSwgM10sIFsxLCA0XV1cbiAgICAgICAgfTtcbiAgICAgICAgdGhpcy5jb2xvckNvZGUgPSA0O1xuXG4gICAgICAgIHRoaXMudHVybmluZ1BvaW50ID0gWzEsIDRdO1xuXG4gICAgICAgIHRoaXMuZGlzcGxheVNxdWFyZXMgPSBbWzMsIDFdLCBbMiwgMV0sIFsyLCAyXSwgWzEsIDJdXTtcblxuICAgICAgICB0aGlzLnJlbW92ZVNxdWFyZXMgPSBbXTtcbiAgICB9XG59IiwiaW1wb3J0IFBpZWNlIGZyb20gJy4vcGllY2UnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUUGllY2UgZXh0ZW5kcyBQaWVjZSB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIHRoaXMubmFtZSA9IFwiVFBpZWNlXCI7XG4gICAgICAgIHRoaXMucG9zaXRpb24gPSB7XG4gICAgICAgICAgICB0b3A6IFtbMCwgNF1dLFxuICAgICAgICAgICAgbWlkZGxlOiBbXSxcbiAgICAgICAgICAgIGJvdHRvbTogW1sxLCAzXSwgWzEsIDRdLCBbMSwgNV1dLFxuICAgICAgICB9XG4gICAgICAgIHRoaXMuY29sb3JDb2RlID0gMztcblxuICAgICAgICB0aGlzLnR1cm5pbmdQb2ludCA9IFsxLCA0XTtcblxuICAgICAgICB0aGlzLmRpc3BsYXlTcXVhcmVzID0gW1sxLCAyXSwgWzIsIDJdLCBbMywgMl0sIFsyLCAxXV07XG5cbiAgICAgICAgdGhpcy5yZW1vdmVTcXVhcmVzID0gW107XG4gICAgfVxufSIsImltcG9ydCBQaWVjZSBmcm9tICcuL3BpZWNlJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgWlBpZWNlIGV4dGVuZHMgUGllY2Uge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICB0aGlzLm5hbWUgPSBcIlpQaWVjZVwiO1xuICAgICAgICB0aGlzLnBvc2l0aW9uID0ge1xuICAgICAgICAgICAgdG9wOiBbWzAsIDNdLCBbMCwgNF1dLFxuICAgICAgICAgICAgbWlkZGxlOiBbXSxcbiAgICAgICAgICAgIGJvdHRvbTogW1sxLCA0XSwgWzEsIDVdXVxuICAgICAgICB9O1xuICAgICAgICB0aGlzLmNvbG9yQ29kZSA9IDU7XG5cbiAgICAgICAgdGhpcy50dXJuaW5nUG9pbnQgPSBbMSwgNF07XG5cbiAgICAgICAgdGhpcy5kaXNwbGF5U3F1YXJlcyA9IFtbMSwgMV0sIFsyLCAxXSwgWzIsIDJdLCBbMywgMl1dO1xuXG4gICAgICAgIHRoaXMucmVtb3ZlU3F1YXJlcyA9IFtdO1xuICAgIH1cbn0iXSwic291cmNlUm9vdCI6IiJ9