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
          fieldColumns[col].children[row].classList = _this2.colors[_this2.currentPiece.colorCode];
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
        this._bringDownField(lowest); // call recursiveClear(lowest, highest + 1);


        return this.clearLines(lowest, highest + 1, numLinesCleared + 1); // if row contains a 0 
        // call ClearLines(lowest - 1, highest)
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

      if (this.handleTopPiece() === true) {
        this.currentPiece.populateField(this.field, "atTop");
      } else {
        this.currentPiece.populateField(this.field);
      }

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

        _this11.currentPiece.populateField();

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
      moveSpeed: 25,
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
      moveSpeed: 15,
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
          return this.wallKick(field, "turnRight");
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
          this.wallKick(field, "turnLeft");
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
    value: function wallKick(field, action) {
      var _this8 = this;

      var validSpot, startingOffset;

      if (action === "turnRight") {
        startingOffset = this.rotationState === 0 ? this.offsetGuide[3] : this.offsetGuide[this.rotationState - 1];
      } else {
        startingOffset = this.rotationState === 3 ? this.offsetGuide[0] : this.offsetGuide[this.rotationState + 1];
      }

      var nextOffset = this.offsetGuide[this.rotationState];

      for (var i = 0; i < 5; i++) {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2ZpZWxkL2ZpZWxkLmpzIiwid2VicGFjazovLy8uL3NyYy9maWVsZC9ob2xkYm94LmpzIiwid2VicGFjazovLy8uL3NyYy9maWVsZC9uZXh0Qm94LmpzIiwid2VicGFjazovLy8uL3NyYy9maWVsZC9xdWV1ZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvZ2FtZS9nYW1lLmpzIiwid2VicGFjazovLy8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvbWVudS9tZW51LmpzIiwid2VicGFjazovLy8uL3NyYy9tb2RhbC9tb2RhbC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvbW9kYWwvbXVsdGlwbGF5ZXJDb250ZW50LmpzIiwid2VicGFjazovLy8uL3NyYy9tb2RhbC9zaW5nbGVQbGF5ZXJDb250ZW50LmpzIiwid2VicGFjazovLy8uL3NyYy9tdWx0aXBsYXllci9tdWx0aXBsYXllci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcGllY2VzL2lQaWVjZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcGllY2VzL2pQaWVjZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcGllY2VzL2xQaWVjZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcGllY2VzL29QaWVjZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcGllY2VzL3BpZWNlLmpzIiwid2VicGFjazovLy8uL3NyYy9waWVjZXMvc1BpZWNlLmpzIiwid2VicGFjazovLy8uL3NyYy9waWVjZXMvdFBpZWNlLmpzIiwid2VicGFjazovLy8uL3NyYy9waWVjZXMvelBpZWNlLmpzIl0sIm5hbWVzIjpbIkZpZWxkIiwiZmllbGROdW0iLCJmaWVsZCIsImkiLCJyb3ciLCJwdXNoIiwiY29sdW1uIiwiZG9jdW1lbnQiLCJjcmVhdGVFbGVtZW50IiwiY2xhc3NMaXN0IiwiYWRkIiwiYXBwZW5kIiwiYXBwZW5kQ2hpbGQiLCJfY3JlYXRlQ29sdW1uIiwiY29udGFpbmVyIiwicXVldWUiLCJRdWV1ZSIsIm5leHRCb3giLCJOZXh0Qm94IiwiaG9sZEJveCIsIkhvbGRCb3giLCJfY3JlYXRlRmllbGQiLCJjcmVhdGVRdWV1ZSIsImNyZWF0ZU5leHRCb3hlcyIsInByZXBlbmQiLCJjcmVhdGVCb3giLCJib3hXcmFwcGVyIiwiYm94IiwiaGVhZGluZyIsImlubmVySFRNTCIsIl9jcmVhdGVCb3hDb2x1bW4iLCJfY3JlYXRlTmV4dEJveENvbHVtbiIsImJveGVzIiwiX2NyZWF0ZU5leHRCb3giLCJxdWV1ZU1ldGVyIiwiYWRqdXN0UXVldWVIZWlnaHQiLCJwZXJjZW50YWdlIiwicXVlcnlTZWxlY3RvciIsInN0eWxlIiwiaGVpZ2h0IiwiR2FtZSIsIm9wdGlvbnMiLCJzZXRGaWVsZCIsImNvbG9ycyIsImdhbWVOdW0iLCJjdXJyZW50QmFnIiwic2h1ZmZsZUJhZyIsImdlbmVyYXRlQmFnIiwiY3VycmVudFBpZWNlIiwiaG9sZFBpZWNlIiwiZ2hvc3RQb3NpdGlvbiIsIm5leHRCYWciLCJjYW5Ib2xkIiwiaGFuZGxlQ2xlYXIiLCJkcm9wIiwicmlnaHQiLCJsZWZ0IiwiZG93biIsImRyb3BTcGVlZCIsIm1vdmVTcGVlZCIsImRyb3BQaWVjZSIsImJpbmQiLCJtb3ZlIiwibW92ZVBpZWNlIiwiYW5pbWF0ZSIsImZwc0ludGVydmFsIiwic3RhcnRUaW1lIiwibm93IiwidGhlbiIsImlzUGF1c2VkIiwia2V5SGVsZCIsIm9wcG9uZW50IiwiY29udHJvbHMiLCJ1cGNvbWluZ0xpbmVzIiwiY29tYm8iLCJ0U3BpbiIsInRTcGluU3RyZWFrIiwiY29tYm9HdWlkZSIsInN0YXJ0RWxldmF0aW5nIiwiY2xlYXJFbGV2YXRlSW50ZXJ2YWwiLCJlbGV2YXRlRGVsYXkiLCJjbGVhclRpbWVyIiwib1BpZWNlIiwiT1BpZWNlIiwiaVBpZWNlIiwiSVBpZWNlIiwidFBpZWNlIiwiVFBpZWNlIiwic1BpZWNlIiwiU1BpZWNlIiwielBpZWNlIiwiWlBpZWNlIiwibFBpZWNlIiwiTFBpZWNlIiwialBpZWNlIiwiSlBpZWNlIiwiX2dlbmVyYXRlRmllbGQiLCJzaGlmdCIsImNvb3JkaW5hdGVBcnJheXMiLCJPYmplY3QiLCJ2YWx1ZXMiLCJmb3JFYWNoIiwiYXJyYXkiLCJjb29yZGluYXRlIiwiY29sIiwiZmllbGRDb2x1bW5zIiwicXVlcnlTZWxlY3RvckFsbCIsImNoaWxkcmVuIiwiY29sb3JDb2RlIiwidG9wIiwicG9zaXRpb24iLCJtYXAiLCJzbGljZSIsIm1pZGRsZSIsImJvdHRvbSIsInN0b3BwZWQiLCJoYW5naW5nU3F1YXJlcyIsIl9wb3B1bGF0ZUdob3N0UG9zaXRpb24iLCJyZW5kZXIiLCJjbGVhclNlbGZGcm9tQm9hcmQiLCJfZ2VuZXJhdGVQaWVjZSIsIm5hbWUiLCJzZXRDdXJyZW50UGllY2UiLCJzaG93Q3VycmVudEJhZyIsIl9wb3B1bGF0ZUhvbGRCb3giLCJjb2x1bW5zIiwiaiIsImNsYXNzTmFtZSIsImRpc3BsYXlTcXVhcmVzIiwic3F1YXJlIiwicGllY2VOYW1lIiwiZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSIsIl9wb3B1bGF0ZU5leHRCb3giLCJwaWVjZSIsImJhZyIsImN1cnJlbnRJbmRleCIsImxlbmd0aCIsInRlbXBvcmFyeVZhbHVlIiwicmFuZG9tSW5kZXgiLCJNYXRoIiwiZmxvb3IiLCJyYW5kb20iLCJyb3dJZHgiLCJjb2xJZHgiLCJzcXVhcmVWYWx1ZSIsInJlbW92ZSIsImJvZHkiLCJhZGRFdmVudExpc3RlbmVyIiwiZXZlbnQiLCJzZXRPdXRlclNxdWFyZXMiLCJ3aGljaCIsInR1cm5SaWdodCIsImNsZWFyR2hvc3RQb3NpdGlvbiIsInBvcHVsYXRlRmllbGQiLCJzZXRHaG9zdFBvc2l0aW9uIiwidHVybkxlZnQiLCJsZWZ0U2lkZUJsb2NrZWQiLCJyaWdodFNpZGVCbG9ja2VkIiwic29mdERyb3AiLCJob2xkIiwiaGFyZERyb3AiLCJoYW5kbGVQaWVjZVN0b3AiLCJjYW5jZWxBbmltYXRpb25GcmFtZSIsImxvd2VzdCIsImhpZ2hlc3QiLCJudW1MaW5lc0NsZWFyZWQiLCJpbmNsdWRlcyIsIl9icmluZ0Rvd25GaWVsZCIsImNsZWFyTGluZXMiLCJzdGFydGluZ1JvdyIsImxlZnRNb3N0IiwicmlnaHRNb3N0IiwibGVmdE1vc3RSb3ciLCJyaWdodE1vc3RSb3ciLCJsZWZ0TW9zdENvbCIsInJpZ2h0TW9zdENvbCIsIm51bUxpbmVzIiwiYWRkTGluZXNUb1F1ZXVlIiwiYWJzIiwicmVjZWl2ZVVwY29taW5nTGluZXMiLCJjbGVhckdob3N0Q2xhc3MiLCJwbGF5IiwiZnBzIiwiRGF0ZSIsInJlcXVlc3RBbmltYXRpb25GcmFtZSIsImVsYXBzZWQiLCJpc0ZhbGxpbmciLCJib3R0b21Nb3N0IiwiZGlyZWN0aW9uIiwiYXRUb3AiLCJnYW1lT3ZlciIsImhhbmRsZVRvcFBpZWNlIiwiYWRkVG9DdXJyZW50QmFnIiwicmVmaWxsTmV4dEJhZyIsIndpbm5lciIsImdhbWVPdmVyU2NyZWVuIiwiZ2FtZU92ZXJIZWFkaW5nIiwid2lubmVySGVhZGluZyIsInN0b3BUaW1lciIsInBsYXllciIsImdhcmJhZ2VMaW5lcyIsInJhbmRvbUhvbGUiLCJnYXJiYWdlUm93IiwiY29uY2F0Iiwic2V0SW50ZXJ2YWwiLCJjb25zb2xlIiwibG9nIiwiY2xlYXJJbnRlcnZhbCIsIm1pbnV0ZXMiLCJzZWNvbmRzIiwib2xkU2Vjb25kIiwiTnVtYmVyIiwib2xkTWludXRlIiwibmV3U2Vjb25kcyIsIm1lbnUiLCJNZW51IiwicmVuZGVyTWVudSIsImdldEVsZW1lbnRCeUlkIiwib3B0aW9uc1BsYXllcjEiLCJvcHRpb25zUGxheWVyMiIsImdhbWUxIiwiZ2FtZTIiLCJmaWVsZDEiLCJmaWVsZDIiLCJtdWx0aXBsYXllck1vZGUiLCJNdWx0aXBsYXllciIsImZpZWxkQ29udGFpbmVyMSIsImZpZWxkQ29udGFpbmVyMiIsInNpbmdsZVBsYXllckNvbnRlbnQiLCJTaW5nbGVQbGF5ZXJDb250ZW50IiwibXVsdGlwbGF5ZXJDb250ZW50IiwiTXVsdGlwbGF5ZXJDb250ZW50IiwibW9kYWwiLCJNb2RhbCIsInNpbmdsZVBsYXllckJ1dHRvbiIsIm11bHRpcGxheWVyQnV0dG9uIiwiYWRkRXZlbnRMaXN0ZW5lcnMiLCJyZW5kZXJTaW5nbGVQbGF5ZXIiLCJyZW5kZXJNdWx0aXBsYXllciIsInJlbW92ZUNoaWxkIiwianVzdGlmeUNvbnRlbnQiLCJjcmVhdGVUaW1lckFuZENvbnRyb2xzIiwiY3JlYXRlQ29tcGxldGVGaWVsZCIsImtleUxpc3RlbmVyIiwiY2hhbmdlQ29udHJvbHMiLCJhZGp1c3RFbGV2YXRlIiwiY3JlYXRlVGltZXIiLCJzdGFydFRpbWVyIiwiY29udHJvbHNDb250YWluZXIiLCJjcmVhdGVDb250cm9sc0NvbnRlbnQiLCJjcmVhdGUiLCJfY3JlYXRlQ2xvc2VNb2RhbExpbmsiLCJidXR0b25Db250YWluZXIiLCJyZW5kZXJCdXR0b25zIiwiYnV0dG9uIiwiY2xvc2VMaW5rIiwic3RhcnRNdWx0aXBsYXllciIsImNvbnRlbnQiLCJwcm9wcyIsImtleXMiLCJwbGF5ZXIxIiwicGxheWVyMiIsImNvbnRyb2xzRGl2IiwiaW1hZ2VzIiwiZGVzY3JpcHRpb25zIiwic3BhbnMiLCJkaXZzIiwibGFiZWwiLCJwIiwiaW1nIiwic2V0QXR0cmlidXRlIiwidGltZXJBbmRDb250cm9scyIsImNvbnRlbnREaXYiLCJ0aW1lciIsImNvbG9uIiwiZWxlIiwic2V0T3Bwb25lbnQiLCJ0dXJuaW5nUG9pbnQiLCJyZW1vdmVTcXVhcmVzIiwib2Zmc2V0R3VpZGUiLCJQaWVjZSIsInRvcE1vc3QiLCJyb3RhdGlvblN0YXRlIiwiY29vcmRpbmF0ZXNBcnJheSIsImNvbHVtblZhbHVlIiwicm93VmFsdWUiLCJwb3NpdGlvbkFycmF5Iiwib2xkU3F1YXJlIiwibmV3U3F1YXJlIiwicmVzdWx0IiwiX3NxdWFyZXNBcmVFcXVhbCIsIm9sZFBvc2l0aW9uIiwic2V0UmVtb3ZlU3F1YXJlcyIsInNxdWFyZXMiLCJoZWlnaHREaWZmZXJlbmNlIiwid2lkdGhEaWZmZXJlbmNlIiwibmV3Q29sIiwibmV3Um93IiwibmV3U3F1YXJlcyIsInVuZGVmaW5lZCIsIndhbGxLaWNrIiwib2xkU3F1YXJlcyIsImZpbHRlciIsIl9pbmNsdWRlcyIsImNvb3JkaW5hdGVBcnJheSIsImJlbG93U3F1YXJlIiwic2lkZVNxdWFyZXMiLCJhZGphY2VudExlZnQiLCJhZGphY2VudFJpZ2h0IiwiY29vcmRpbmF0ZVBhaXIiLCJhY3Rpb24iLCJ2YWxpZFNwb3QiLCJzdGFydGluZ09mZnNldCIsIm5leHRPZmZzZXQiLCJiYXNlUG9zaXRpb24iLCJiYXNlVHVybmluZ1BvaW50Iiwic3RhcnRpbmdUcmFuc2xhdGlvbiIsInBvdGVudGlhbFRyYW5zbGF0aW9uIiwicm93U2hpZnQiLCJjb2xTaGlmdCIsInRyYW5zbGF0ZVZlcnRpY2FsIiwidHJhbnNsYXRlSG9yaXpvbnRhbCIsIm51bVRpbWVzUm93U2hpZnRlZCIsIm51bVRpbWVzQ29sU2hpZnRlZCIsIm5ld1Bvc2l0aW9uIl0sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7UUFH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R0FBcUIsRUFBckI7QUFkVTtBQWViOzs7RUFoQitCRSw4QyIsImZpbGUiOiJtYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCIvZGlzdC9cIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvaW5kZXguanNcIik7XG4iLCJpbXBvcnQgSG9sZEJveCBmcm9tICcuL2hvbGRib3gnO1xuaW1wb3J0IE5leHRCb3ggZnJvbSAnLi9uZXh0Qm94JztcbmltcG9ydCBRdWV1ZSBmcm9tICcuL3F1ZXVlJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRmllbGQgeyAgXG4gICAgY29uc3RydWN0b3IoZmllbGROdW0pIHtcbiAgICAgICAgdGhpcy5maWVsZE51bSA9IGZpZWxkTnVtO1xuICAgIH1cbiAgICBcbiAgICBfZ2VuZXJhdGVGaWVsZCgpIHtcbiAgICAgICAgbGV0IGZpZWxkID0gW107XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMjA7IGkrKykge1xuICAgICAgICAgICAgbGV0IHJvdyA9IFswLDAsMCwwLDAsMCwwLDAsMCwwXTtcbiAgICAgICAgICAgIGZpZWxkLnB1c2gocm93KTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZmllbGQ7XG4gICAgfVxuXG4gICAgX2NyZWF0ZUNvbHVtbigpIHtcbiAgICAgICAgbGV0IGNvbHVtbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ1bFwiKTtcbiAgICAgICAgY29sdW1uLmNsYXNzTGlzdC5hZGQoYGZpZWxkLWNvbHVtbmAsIGBmaWVsZC0ke3RoaXMuZmllbGROdW19YCk7XG5cbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCAyMDsgaSsrKSB7XG4gICAgICAgICAgICBjb2x1bW4uYXBwZW5kKGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaVwiKSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGNvbHVtbjtcbiAgICB9XG5cbiAgICBfY3JlYXRlRmllbGQoKSB7XG4gICAgICAgIGxldCBmaWVsZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIGZpZWxkLmNsYXNzTGlzdC5hZGQoYGZpZWxkLWJveGAsIGBmaWVsZC0ke3RoaXMuZmllbGROdW19YCk7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMTA7IGkrKykge1xuICAgICAgICAgICAgZmllbGQuYXBwZW5kQ2hpbGQodGhpcy5fY3JlYXRlQ29sdW1uKCkpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBmaWVsZDtcbiAgICB9XG5cbiAgICBjcmVhdGVDb21wbGV0ZUZpZWxkKGNvbnRhaW5lcikge1xuICAgICAgICBsZXQgcXVldWUgPSBuZXcgUXVldWUodGhpcy5maWVsZE51bSk7XG4gICAgICAgIGxldCBuZXh0Qm94ID0gbmV3IE5leHRCb3godGhpcy5maWVsZE51bSk7XG4gICAgICAgIGxldCBob2xkQm94ID0gbmV3IEhvbGRCb3godGhpcy5maWVsZE51bSk7XG4gICAgICAgIGNvbnRhaW5lci5hcHBlbmQodGhpcy5fY3JlYXRlRmllbGQoKSk7XG4gICAgICAgIGNvbnRhaW5lci5hcHBlbmQocXVldWUuY3JlYXRlUXVldWUoKSk7XG4gICAgICAgIGNvbnRhaW5lci5hcHBlbmQobmV4dEJveC5jcmVhdGVOZXh0Qm94ZXMoKSk7XG4gICAgICAgIGNvbnRhaW5lci5wcmVwZW5kKGhvbGRCb3guY3JlYXRlQm94KCkpO1xuICAgICAgICByZXR1cm4gY29udGFpbmVyO1xuICAgIH1cblxufSIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIEhvbGRCb3gge1xuICAgIGNvbnN0cnVjdG9yKGZpZWxkTnVtKSB7XG4gICAgICAgIHRoaXMuZmllbGROdW0gPSBmaWVsZE51bTtcbiAgICB9XG5cbiAgICBfY3JlYXRlQm94Q29sdW1uKCkge1xuICAgICAgICBsZXQgY29sdW1uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInVsXCIpO1xuICAgICAgICBjb2x1bW4uY2xhc3NMaXN0LmFkZChgaG9sZC1jb2x1bW5gLCBgZmllbGQtJHt0aGlzLmZpZWxkTnVtfWApO1xuXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgNDsgaSsrKSB7XG4gICAgICAgICAgICBjb2x1bW4uYXBwZW5kKGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaVwiKSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGNvbHVtbjtcbiAgICB9XG5cbiAgICBjcmVhdGVCb3goKSB7XG4gICAgICAgIGxldCBib3hXcmFwcGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgYm94V3JhcHBlci5jbGFzc0xpc3QuYWRkKGBob2xkLWJveC13cmFwcGVyYCwgYGZpZWxkLSR7dGhpcy5maWVsZE51bX1gKTtcbiAgICAgICAgbGV0IGJveCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIGJveC5jbGFzc0xpc3QuYWRkKGBob2xkLWJveGAsIGBmaWVsZC0ke3RoaXMuZmllbGROdW19YCk7XG4gICAgICAgIGxldCBoZWFkaW5nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgyXCIpO1xuICAgICAgICBoZWFkaW5nLmlubmVySFRNTCA9IFwiSE9MRFwiO1xuICAgICAgICBib3hXcmFwcGVyLmFwcGVuZENoaWxkKGhlYWRpbmcpO1xuICAgICAgICBib3hXcmFwcGVyLmFwcGVuZENoaWxkKGJveCk7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgNTsgaSsrKSB7XG4gICAgICAgICAgICBib3guYXBwZW5kQ2hpbGQodGhpcy5fY3JlYXRlQm94Q29sdW1uKCkpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBib3hXcmFwcGVyO1xuICAgIH1cbn0iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBOZXh0Qm94IHtcbiAgICBjb25zdHJ1Y3RvcihmaWVsZE51bSkge1xuICAgICAgICB0aGlzLmZpZWxkTnVtID0gZmllbGROdW07XG4gICAgfVxuXG4gICAgX2NyZWF0ZU5leHRCb3hDb2x1bW4oKSB7XG4gICAgICAgIGxldCBjb2x1bW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidWxcIik7XG4gICAgICAgIGNvbHVtbi5jbGFzc0xpc3QuYWRkKGBuZXh0LWNvbHVtbmAsIGBmaWVsZC0ke3RoaXMuZmllbGROdW19YCk7XG5cbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCA0OyBpKyspIHtcbiAgICAgICAgICAgIGNvbHVtbi5hcHBlbmQoZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpXCIpKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gY29sdW1uO1xuICAgIH1cblxuICAgIF9jcmVhdGVOZXh0Qm94KCkge1xuICAgICAgICBsZXQgYm94ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgYm94LmNsYXNzTGlzdC5hZGQoYG5leHQtYm94YCwgYGZpZWxkLSR7dGhpcy5maWVsZE51bX1gKTtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCA1OyBpKyspIHtcbiAgICAgICAgICAgIGJveC5hcHBlbmRDaGlsZCh0aGlzLl9jcmVhdGVOZXh0Qm94Q29sdW1uKCkpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBib3g7XG4gICAgfVxuXG4gICAgY3JlYXRlTmV4dEJveGVzKCkge1xuICAgICAgICBsZXQgYm94ZXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICBsZXQgaGVhZGluZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMlwiKTtcbiAgICAgICAgaGVhZGluZy5pbm5lckhUTUwgPSBcIk5FWFRcIjtcbiAgICAgICAgYm94ZXMuY2xhc3NMaXN0LmFkZChgbmV4dC1ib3hlc2AsIGBmaWVsZC0ke3RoaXMuZmllbGROdW19YCk7XG4gICAgICAgIGJveGVzLmFwcGVuZENoaWxkKGhlYWRpbmcpO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IDU7IGkrKykge1xuICAgICAgICAgICAgYm94ZXMuYXBwZW5kQ2hpbGQodGhpcy5fY3JlYXRlTmV4dEJveCgpKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gYm94ZXM7XG4gICAgfVxufSIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIFF1ZXVlIHtcbiAgICBjb25zdHJ1Y3RvcihmaWVsZE51bSkge1xuICAgICAgICB0aGlzLmZpZWxkTnVtID0gZmllbGROdW07XG4gICAgfVxuXG4gICAgY3JlYXRlUXVldWUoKSB7XG4gICAgICAgIGxldCBxdWV1ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIHF1ZXVlLmNsYXNzTGlzdC5hZGQoYHF1ZXVlYCwgYGZpZWxkLSR7dGhpcy5maWVsZE51bX1gKTtcbiAgICAgICAgbGV0IHF1ZXVlTWV0ZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICBxdWV1ZU1ldGVyLmNsYXNzTGlzdC5hZGQoYHF1ZXVlLW1ldGVyYCwgYGZpZWxkLSR7dGhpcy5maWVsZE51bX1gKTtcbiAgICAgICAgcXVldWUuYXBwZW5kQ2hpbGQocXVldWVNZXRlcik7XG4gICAgICAgIHJldHVybiBxdWV1ZTtcbiAgICB9XG59XG5cbmV4cG9ydCBjb25zdCBhZGp1c3RRdWV1ZUhlaWdodCA9IChmaWVsZE51bSwgcGVyY2VudGFnZSkgPT4ge1xuICAgIGxldCBxdWV1ZU1ldGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLnF1ZXVlLW1ldGVyLmZpZWxkLSR7ZmllbGROdW19YCk7XG4gICAgaWYgKHBlcmNlbnRhZ2UgPiAxMDApIHBlcmNlbnRhZ2UgPSAxMDA7XG4gICAgcXVldWVNZXRlci5zdHlsZS5oZWlnaHQgPSBgJHtwZXJjZW50YWdlfSVgXG59IiwiaW1wb3J0IEZpZWxkIGZyb20gJy4uL2ZpZWxkL2ZpZWxkJztcbmltcG9ydCBPUGllY2UgZnJvbSAnLi4vcGllY2VzL29QaWVjZSc7XG5pbXBvcnQgSVBpZWNlIGZyb20gJy4uL3BpZWNlcy9pUGllY2UnO1xuaW1wb3J0IFRQaWVjZSBmcm9tICcuLi9waWVjZXMvdFBpZWNlJztcbmltcG9ydCBTUGllY2UgZnJvbSAnLi4vcGllY2VzL3NQaWVjZSc7XG5pbXBvcnQgWlBpZWNlIGZyb20gJy4uL3BpZWNlcy96UGllY2UnO1xuaW1wb3J0IExQaWVjZSBmcm9tICcuLi9waWVjZXMvbFBpZWNlJztcbmltcG9ydCBKUGllY2UgZnJvbSAnLi4vcGllY2VzL2pQaWVjZSc7XG5pbXBvcnQgeyBhZGp1c3RRdWV1ZUhlaWdodCB9IGZyb20gJy4uL2ZpZWxkL3F1ZXVlJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgR2FtZSB7XG4gICAgY29uc3RydWN0b3Iob3B0aW9ucykge1xuICAgICAgICB0aGlzLmZpZWxkID0gdGhpcy5zZXRGaWVsZCgpXG5cbiAgICAgICAgdGhpcy5jb2xvcnMgPSB7XG4gICAgICAgICAgICAxOiBcInllbGxvd1wiLFxuICAgICAgICAgICAgMjogXCJibHVlXCIsXG4gICAgICAgICAgICAzOiBcInB1cnBsZVwiLFxuICAgICAgICAgICAgNDogXCJncmVlblwiLFxuICAgICAgICAgICAgNTogXCJyZWRcIixcbiAgICAgICAgICAgIDY6IFwib3JhbmdlXCIsXG4gICAgICAgICAgICA3OiBcImRhcmstYmx1ZVwiLFxuICAgICAgICAgICAgODogXCJncmV5XCJcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuZ2FtZU51bSA9IG9wdGlvbnMuZ2FtZU51bTtcblxuICAgICAgICB0aGlzLmN1cnJlbnRCYWcgPSB0aGlzLnNodWZmbGVCYWcodGhpcy5nZW5lcmF0ZUJhZygpKTtcbiAgICAgICAgdGhpcy5jdXJyZW50UGllY2UgPSAnJztcbiAgICAgICAgdGhpcy5ob2xkUGllY2UgPSAnJztcbiAgICAgICAgdGhpcy5naG9zdFBvc2l0aW9uID0gJyc7XG4gICAgICAgIHRoaXMubmV4dEJhZyA9IHRoaXMuc2h1ZmZsZUJhZyh0aGlzLmdlbmVyYXRlQmFnKCkpO1xuXG4gICAgICAgIC8vIHByZXZlbnRzIHBsYXllciBmcm9tIGhvbGRpbmcgcGllY2UgbXVsdGlwbGUgdGltZXNcbiAgICAgICAgdGhpcy5jYW5Ib2xkID0gdHJ1ZTtcblxuICAgICAgICB0aGlzLmhhbmRsZUNsZWFyID0ge1xuICAgICAgICAgICAgZHJvcDogJycsXG4gICAgICAgICAgICByaWdodDogJycsXG4gICAgICAgICAgICBsZWZ0OiAnJyxcbiAgICAgICAgICAgIGRvd246ICcnXG4gICAgICAgIH07XG5cbiAgICAgICAgLy8gZm9yIGFuaW1hdGlvbnNcbiAgICAgICAgdGhpcy5kcm9wU3BlZWQgPSAxO1xuICAgICAgICB0aGlzLm1vdmVTcGVlZCA9IG9wdGlvbnMubW92ZVNwZWVkO1xuICAgICAgICB0aGlzLmRyb3BQaWVjZSA9IHRoaXMuZHJvcFBpZWNlLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMuZHJvcCA9IHRoaXMuZHJvcC5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLm1vdmUgPSB0aGlzLm1vdmUuYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5tb3ZlUGllY2UgPSB0aGlzLm1vdmVQaWVjZS5iaW5kKHRoaXMpO1xuXG4gICAgICAgIC8vIGtlZXAgdHJhY2sgb2YgdGhlIGZvbGxvd2luZyB2YXJpYWJsZXMgZm9yIHJlcXVlc3RBbmltYXRpb25GcmFtZSB0aHJvdHRsaW5nXG4gICAgICAgIHRoaXMuYW5pbWF0ZSA9IHtcbiAgICAgICAgICAgIGRyb3A6IHtcbiAgICAgICAgICAgICAgICBmcHNJbnRlcnZhbDogJycsXG4gICAgICAgICAgICAgICAgc3RhcnRUaW1lOiAnJyxcbiAgICAgICAgICAgICAgICBub3c6ICcnLFxuICAgICAgICAgICAgICAgIHRoZW46ICcnXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgcmlnaHQ6IHtcbiAgICAgICAgICAgICAgICBmcHNJbnRlcnZhbDogJycsXG4gICAgICAgICAgICAgICAgc3RhcnRUaW1lOiAnJyxcbiAgICAgICAgICAgICAgICBub3c6ICcnLFxuICAgICAgICAgICAgICAgIHRoZW46ICcnXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgbGVmdDoge1xuICAgICAgICAgICAgICAgIGZwc0ludGVydmFsOiAnJyxcbiAgICAgICAgICAgICAgICBzdGFydFRpbWU6ICcnLFxuICAgICAgICAgICAgICAgIG5vdzogJycsXG4gICAgICAgICAgICAgICAgdGhlbjogJydcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBkb3duOiB7XG4gICAgICAgICAgICAgICAgZnBzSW50ZXJ2YWw6ICcnLFxuICAgICAgICAgICAgICAgIHN0YXJ0VGltZTogJycsXG4gICAgICAgICAgICAgICAgbm93OiAnJyxcbiAgICAgICAgICAgICAgICB0aGVuOiAnJ1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLy8gcGF1c2luZyB0aGUgZ2FtZVxuICAgICAgICB0aGlzLmlzUGF1c2VkID0gZmFsc2U7XG5cbiAgICAgICAgdGhpcy5rZXlIZWxkID0ge1xuICAgICAgICAgICAgZG93bjogZmFsc2UsXG4gICAgICAgICAgICByaWdodDogZmFsc2UsXG4gICAgICAgICAgICBsZWZ0OiBmYWxzZVxuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5vcHBvbmVudCA9IFwiXCI7XG4gICAgICAgIHRoaXMuY29udHJvbHMgPSBvcHRpb25zLmNvbnRyb2xzO1xuICAgICAgICB0aGlzLnVwY29taW5nTGluZXMgPSAwO1xuICAgICAgICB0aGlzLmNvbWJvID0gLTE7XG4gICAgICAgIHRoaXMudFNwaW4gPSBmYWxzZTtcbiAgICAgICAgdGhpcy50U3BpblN0cmVhayA9IGZhbHNlO1xuICAgICAgICB0aGlzLmNvbWJvR3VpZGUgPSB7XG4gICAgICAgICAgICAwOiAwLFxuICAgICAgICAgICAgMTogMCwgXG4gICAgICAgICAgICAyOiAxLFxuICAgICAgICAgICAgMzogMSxcbiAgICAgICAgICAgIDQ6IDEsXG4gICAgICAgICAgICA1OiAyLFxuICAgICAgICAgICAgNjogMixcbiAgICAgICAgICAgIDc6IDMsXG4gICAgICAgICAgICA4OiAzLFxuICAgICAgICAgICAgOTogNCxcbiAgICAgICAgICAgIDEwOiA0LFxuICAgICAgICAgICAgMTE6IDQsXG4gICAgICAgICAgICAxMjogNVxuICAgICAgICB9O1xuXG4gICAgICAgIC8vIHNpbmdsZSBwbGF5ZXJcbiAgICAgICAgdGhpcy5zdGFydEVsZXZhdGluZyA9IHRoaXMuc3RhcnRFbGV2YXRpbmcuYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5jbGVhckVsZXZhdGVJbnRlcnZhbCA9ICcnO1xuICAgICAgICB0aGlzLmVsZXZhdGVEZWxheSA9IDUwMDA7XG4gICAgICAgIHRoaXMuY2xlYXJUaW1lciA9ICcnO1xuICAgIH1cblxuICAgIGdlbmVyYXRlQmFnKCkge1xuICAgICAgICBsZXQgb1BpZWNlID0gbmV3IE9QaWVjZSgpO1xuICAgICAgICBsZXQgaVBpZWNlID0gbmV3IElQaWVjZSgpO1xuICAgICAgICBsZXQgdFBpZWNlID0gbmV3IFRQaWVjZSgpO1xuICAgICAgICBsZXQgc1BpZWNlID0gbmV3IFNQaWVjZSgpO1xuICAgICAgICBsZXQgelBpZWNlID0gbmV3IFpQaWVjZSgpO1xuICAgICAgICBsZXQgbFBpZWNlID0gbmV3IExQaWVjZSgpO1xuICAgICAgICBsZXQgalBpZWNlID0gbmV3IEpQaWVjZSgpO1xuXG4gICAgICAgIHJldHVybiBbb1BpZWNlLCBpUGllY2UsIHRQaWVjZSwgc1BpZWNlLCB6UGllY2UsIGxQaWVjZSwgalBpZWNlXTtcbiAgICB9XG5cbiAgICBzZXRGaWVsZCgpIHtcbiAgICAgICAgbGV0IGZpZWxkID0gbmV3IEZpZWxkKCk7XG4gICAgICAgIHJldHVybiBmaWVsZC5fZ2VuZXJhdGVGaWVsZCgpO1xuICAgIH1cblxuICAgIC8vIHRha2UgcGllY2UgZnJvbSBjdXJyZW50QmFnIGFuZCBzZXQgaXQgYXMgdGhlIGN1cnJlbnQgcGllY2VcbiAgICBzZXRDdXJyZW50UGllY2UoKSB7XG4gICAgICAgIHRoaXMuY3VycmVudFBpZWNlID0gdGhpcy5jdXJyZW50QmFnLnNoaWZ0KCk7XG4gICAgfVxuXG4gICAgLy8gcmVtb3ZlcyBvbGQgZ2hvc3QgcG9zaXRpb24gZnJvbSB0aGlzLmZpZWxkIGJlZm9yZSBjaGFuZ2luZyBwaWVjZSBwb3NpdGlvblxuICAgIGNsZWFyR2hvc3RQb3NpdGlvbigpIHtcbiAgICAgICAgbGV0IGNvb3JkaW5hdGVBcnJheXMgPSBPYmplY3QudmFsdWVzKHRoaXMuZ2hvc3RQb3NpdGlvbik7XG4gICAgICAgIGNvb3JkaW5hdGVBcnJheXMuZm9yRWFjaChhcnJheSA9PiB7XG4gICAgICAgICAgICBhcnJheS5mb3JFYWNoKGNvb3JkaW5hdGUgPT4ge1xuICAgICAgICAgICAgICAgIGxldCBbcm93LCBjb2xdID0gW2Nvb3JkaW5hdGVbMF0sIGNvb3JkaW5hdGVbMV1dO1xuICAgICAgICAgICAgICAgIC8vIHByZXZlbnQgbWV0aG9kIGZyb20gY2xlYXJpbmcgcGllY2UgaWYgaXQgaGFwcGVucyB0byBiZSB3aGVyZSB0aGUgZ2hvc3QgcG9zaXRpb24gc2hvdWxkIGJlXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuZmllbGRbcm93XSAmJiB0aGlzLmZpZWxkW3Jvd11bY29sXSA9PT0gXCJ4XCIgJiYgcm93ID49IDApIHRoaXMuZmllbGRbcm93XVtjb2xdID0gMDtcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIC8vIGNsZWFycyB0aGUgY29sb3IgY2xhc3NlcyBmcm9tIHRoZSBicm93c2VyIGZpZWxkXG4gICAgY2xlYXJHaG9zdENsYXNzKCkge1xuICAgICAgICBsZXQgZmllbGRDb2x1bW5zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChgLmZpZWxkLWNvbHVtbi5maWVsZC0ke3RoaXMuZ2FtZU51bX1gKTtcbiAgICAgICAgXG4gICAgICAgIE9iamVjdC52YWx1ZXModGhpcy5naG9zdFBvc2l0aW9uKS5mb3JFYWNoKGFycmF5ID0+IHtcbiAgICAgICAgICAgIGFycmF5LmZvckVhY2goY29vcmRpbmF0ZSA9PiB7XG4gICAgICAgICAgICAgICAgbGV0IFtyb3csIGNvbF0gPSBbY29vcmRpbmF0ZVswXSwgY29vcmRpbmF0ZVsxXV07XG4gICAgICAgICAgICAgICAgZmllbGRDb2x1bW5zW2NvbF0uY2hpbGRyZW5bcm93XS5jbGFzc0xpc3QgPSB0aGlzLmNvbG9yc1t0aGlzLmN1cnJlbnRQaWVjZS5jb2xvckNvZGVdO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgLy8gZmluZCBhcHByb3ByaWF0ZSBnaG9zdCBwb3NpdGlvbiBhcyBwaWVjZSBwb3NpdGlvbiBjaGFuZ2VzXG4gICAgc2V0R2hvc3RQb3NpdGlvbigpIHtcbiAgICAgICAgbGV0IGdob3N0UG9zaXRpb24gPSB7XG4gICAgICAgICAgICB0b3A6IHRoaXMuY3VycmVudFBpZWNlLnBvc2l0aW9uLnRvcC5tYXAoY29vcmRpbmF0ZSA9PiBjb29yZGluYXRlLnNsaWNlKCkpLFxuICAgICAgICAgICAgbWlkZGxlOiB0aGlzLmN1cnJlbnRQaWVjZS5wb3NpdGlvbi5taWRkbGUubWFwKGNvb3JkaW5hdGUgPT4gY29vcmRpbmF0ZS5zbGljZSgpKSxcbiAgICAgICAgICAgIGJvdHRvbTogdGhpcy5jdXJyZW50UGllY2UucG9zaXRpb24uYm90dG9tLm1hcChjb29yZGluYXRlID0+IGNvb3JkaW5hdGUuc2xpY2UoKSlcbiAgICAgICAgfVxuICAgICAgICBsZXQgc3RvcHBlZCA9IGZhbHNlO1xuICAgICAgICB3aGlsZSAoIXN0b3BwZWQpIHtcbiAgICAgICAgICAgIGxldCBoYW5naW5nU3F1YXJlcyA9IHRoaXMuY3VycmVudFBpZWNlLmhhbmdpbmdTcXVhcmVzKGdob3N0UG9zaXRpb24pO1xuICAgICAgICAgICAgaGFuZ2luZ1NxdWFyZXMuZm9yRWFjaChjb29yZGluYXRlID0+IHtcbiAgICAgICAgICAgICAgICBsZXQgW3JvdywgY29sXSA9IFtjb29yZGluYXRlWzBdLCBjb29yZGluYXRlWzFdXTtcbiAgICAgICAgICAgICAgICBpZiAocm93IDwgMCB8fCByb3cgKyAxID09PSAyMCB8fCB0aGlzLmZpZWxkW3JvdyArIDFdW2NvbF0pIHN0b3BwZWQgPSB0cnVlO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBpZiAoc3RvcHBlZCkgYnJlYWs7XG4gICAgICAgICAgICBnaG9zdFBvc2l0aW9uLnRvcCA9IGdob3N0UG9zaXRpb24udG9wLm1hcChhcnJheSA9PiBbYXJyYXlbMF0gKyAxLCBhcnJheVsxXV0pO1xuICAgICAgICAgICAgZ2hvc3RQb3NpdGlvbi5taWRkbGUgPSBnaG9zdFBvc2l0aW9uLm1pZGRsZS5tYXAoYXJyYXkgPT4gW2FycmF5WzBdICsgMSwgYXJyYXlbMV1dKTtcbiAgICAgICAgICAgIGdob3N0UG9zaXRpb24uYm90dG9tID0gZ2hvc3RQb3NpdGlvbi5ib3R0b20ubWFwKGFycmF5ID0+IFthcnJheVswXSArIDEsIGFycmF5WzFdXSk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5naG9zdFBvc2l0aW9uID0gZ2hvc3RQb3NpdGlvbjtcbiAgICAgICAgdGhpcy5fcG9wdWxhdGVHaG9zdFBvc2l0aW9uKCk7XG4gICAgfVxuXG4gICAgLy8gcG9wdWxhdGUgdGhpcy5maWVsZCB3aXRoICd4JyB3aGVyZXZlciB0aGUgZ2hvc3QgcG9zaXRpb24gaXMgY2FsY3VsYXRlZCB0byBiZVxuICAgIF9wb3B1bGF0ZUdob3N0UG9zaXRpb24oKSB7XG4gICAgICAgIGxldCBjb29yZGluYXRlQXJyYXlzID0gT2JqZWN0LnZhbHVlcyh0aGlzLmdob3N0UG9zaXRpb24pO1xuICAgICAgICBjb29yZGluYXRlQXJyYXlzLmZvckVhY2goYXJyYXkgPT4ge1xuICAgICAgICAgICAgYXJyYXkuZm9yRWFjaChjb29yZGluYXRlID0+IHtcbiAgICAgICAgICAgICAgICBsZXQgW3JvdywgY29sXSA9IFtjb29yZGluYXRlWzBdLCBjb29yZGluYXRlWzFdXTtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5maWVsZFtyb3ddICYmIHRoaXMuZmllbGRbcm93XVtjb2xdICE9PSB0aGlzLmN1cnJlbnRQaWVjZS5jb2xvckNvZGUpIHRoaXMuZmllbGRbcm93XVtjb2xdID0gXCJ4XCI7XG4gICAgICAgICAgICB9KVxuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5yZW5kZXIoKTtcbiAgICB9XG5cbiAgICAvLyBob2xkIHBpZWNlIGZvciBsYXRlciB1c2UgXG4gICAgaG9sZCgpIHtcbiAgICAgICAgaWYgKCF0aGlzLmNhbkhvbGQpIHJldHVybjtcbiAgICAgICAgdGhpcy5jdXJyZW50UGllY2UuY2xlYXJTZWxmRnJvbUJvYXJkKHRoaXMuZmllbGQpOyBcbiAgICAgICAgdGhpcy5yZW5kZXIoKTtcblxuICAgICAgICBpZiAoIXRoaXMuaG9sZFBpZWNlKSB7XG4gICAgICAgICAgICAvLyBwYXNzIGN1cnJlbnQgcGllY2UgbmFtZSBpbnRvIGdlbmVyYXRlIHBpZWNlIGluIG9yZGVyIHRvIGdlbmVyYXRlIGEgbmV3IHBpZWNlIGluc3RhbmNlXG4gICAgICAgICAgICB0aGlzLmhvbGRQaWVjZSA9IHRoaXMuX2dlbmVyYXRlUGllY2UodGhpcy5jdXJyZW50UGllY2UubmFtZSk7XG4gICAgICAgICAgICB0aGlzLnNldEN1cnJlbnRQaWVjZSgpO1xuICAgICAgICAgICAgLy8gcmUtcmVuZGVyIG5leHQgYm94ZXMgdG8gYXBwcm9wcmlhdGVseSBzaG93IGN1cnJlbnQgYmFnXG4gICAgICAgICAgICB0aGlzLnNob3dDdXJyZW50QmFnKCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmN1cnJlbnRQaWVjZSA9IHRoaXMuX2dlbmVyYXRlUGllY2UodGhpcy5jdXJyZW50UGllY2UubmFtZSk7XG4gICAgICAgICAgICBbdGhpcy5jdXJyZW50UGllY2UsIHRoaXMuaG9sZFBpZWNlXSA9IFt0aGlzLmhvbGRQaWVjZSwgdGhpcy5jdXJyZW50UGllY2VdO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICAvLyBkaXNhYmxlIGhvbGQtcGllY2UgcmlnaHQgYWZ0ZXIgcGxheWVyIGhvbGRzIGEgcGllY2VcbiAgICAgICAgdGhpcy5jYW5Ib2xkID0gZmFsc2U7XG5cbiAgICAgICAgdGhpcy5fcG9wdWxhdGVIb2xkQm94KCk7XG4gICAgfVxuXG4gICAgX3BvcHVsYXRlSG9sZEJveCgpIHtcbiAgICAgICAgbGV0IGNvbHVtbnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAuaG9sZC1ib3guZmllbGQtJHt0aGlzLmdhbWVOdW19YCkuY2hpbGRyZW47XG5cbiAgICAgICAgLy8gcmVtb3ZlIGNvbG9ycyBmcm9tIHByZXZpb3VzIHBpZWNlc1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IDU7IGkrKykge1xuICAgICAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCA0OyBqKyspIHtcbiAgICAgICAgICAgICAgICAvLyBjb2x1bW5zLmNoaWxkcmVuIGlzIG5vZGVsaXN0IG9mIDxsaXM+XG4gICAgICAgICAgICAgICAgY29sdW1uc1tpXS5jaGlsZHJlbltqXS5jbGFzc05hbWUgPSBcIlwiO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5ob2xkUGllY2UuZGlzcGxheVNxdWFyZXMuZm9yRWFjaChzcXVhcmUgPT4ge1xuICAgICAgICAgICAgbGV0IFtjb2wsIHJvd10gPSBbc3F1YXJlWzBdLCBzcXVhcmVbMV1dO1xuICAgICAgICAgICAgY29sdW1uc1tjb2xdLmNoaWxkcmVuW3Jvd10uY2xhc3NMaXN0LmFkZCh0aGlzLmNvbG9yc1t0aGlzLmhvbGRQaWVjZS5jb2xvckNvZGVdKTtcbiAgICAgICAgfSlcblxuICAgIH1cblxuICAgIC8vIHVzZWQgZm9yIHRoaXMuaG9sZCgpOiBnZW5lcmF0ZSBhIG5ldyBwaWVjZSBzbyB0aGF0IGEgaG9sZHBpZWNlIHRoYXQgaXMgcmUtcmVuZGVyZWQgb24gdGhlIGJvYXJkIHdpbGwgbm90IHN0YXJ0IGZyb20gdGhlIG9sZCBwb3NpdGlvblxuICAgIF9nZW5lcmF0ZVBpZWNlKHBpZWNlTmFtZSkge1xuICAgICAgICBzd2l0Y2gocGllY2VOYW1lKSB7XG4gICAgICAgICAgICBjYXNlIFwiVFBpZWNlXCI6XG4gICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBUUGllY2U7XG4gICAgICAgICAgICBjYXNlIFwiT1BpZWNlXCI6XG4gICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBPUGllY2U7XG4gICAgICAgICAgICBjYXNlIFwiSVBpZWNlXCI6XG4gICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBJUGllY2U7XG4gICAgICAgICAgICBjYXNlIFwiTFBpZWNlXCI6XG4gICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBMUGllY2U7XG4gICAgICAgICAgICBjYXNlIFwiSlBpZWNlXCI6XG4gICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBKUGllY2U7XG4gICAgICAgICAgICBjYXNlIFwiU1BpZWNlXCI6XG4gICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBTUGllY2U7XG4gICAgICAgICAgICBjYXNlIFwiWlBpZWNlXCI6XG4gICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBaUGllY2U7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvLyB0YWtlIG9uZSBwaWVjZSBmcm9tIG5leHRCYWcgYW5kIGFkZCB0byBjdXJyZW50QmFnXG4gICAgYWRkVG9DdXJyZW50QmFnKCkge1xuICAgICAgICB0aGlzLmN1cnJlbnRCYWcucHVzaCh0aGlzLm5leHRCYWcuc2hpZnQoKSk7XG4gICAgfVxuXG4gICAgc2hvd0N1cnJlbnRCYWcoKSB7XG4gICAgICAgIGxldCBib3hlcyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoYG5leHQtYm94IGZpZWxkLSR7dGhpcy5nYW1lTnVtfWApO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IDU7IGkrKykge1xuICAgICAgICAgICAgdGhpcy5fcG9wdWxhdGVOZXh0Qm94KGJveGVzW2ldLCB0aGlzLmN1cnJlbnRCYWdbaV0pO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgX3BvcHVsYXRlTmV4dEJveChib3gsIHBpZWNlKSB7XG4gICAgICAgIC8vIGNvbHVtbnMgaXMgbm9kZWxpc3Qgb2YgPHVscz5cbiAgICAgICAgbGV0IGNvbHVtbnMgPSBib3guY2hpbGRyZW47XG5cbiAgICAgICAgLy8gcmVtb3ZlIGNvbG9ycyBmcm9tIHByZXZpb3VzIHBpZWNlXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgNTsgaSsrKSB7XG4gICAgICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IDQ7IGorKykge1xuICAgICAgICAgICAgICAgIC8vIGNvbHVtbnMuY2hpbGRyZW4gaXMgbm9kZWxpc3Qgb2YgPGxpcz5cbiAgICAgICAgICAgICAgICBjb2x1bW5zW2ldLmNoaWxkcmVuW2pdLmNsYXNzTmFtZSA9IFwiXCI7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAvLyBwb3B1bGF0ZSBib3ggd2l0aCBuZXcgcGllY2VcbiAgICAgICAgcGllY2UuZGlzcGxheVNxdWFyZXMuZm9yRWFjaChzcXVhcmUgPT4ge1xuICAgICAgICAgICAgbGV0IFtjb2wsIHJvd10gPSBbc3F1YXJlWzBdLCBzcXVhcmVbMV1dO1xuICAgICAgICAgICAgY29sdW1uc1tjb2xdLmNoaWxkcmVuW3Jvd10uY2xhc3NMaXN0LmFkZCh0aGlzLmNvbG9yc1twaWVjZS5jb2xvckNvZGVdKTtcbiAgICAgICAgfSlcbiAgICB9XG5cbiAgICAvLyByZWZpbGwgbmV4dCBiYWcsIHdpbGwgb25seSBiZSBjYWxsZWQgb25jZSBuZXh0QmFnIGJlY29tZXMgZW1wdHlcbiAgICByZWZpbGxOZXh0QmFnKCkge1xuICAgICAgICB0aGlzLm5leHRCYWcgPSB0aGlzLmdlbmVyYXRlQmFnKCk7XG4gICAgfVxuXG4gICAgLy8gaW1wbGVtZW50YXRpb24gb2Ygc2h1ZmZsZSBmb3VuZCBvbiBodHRwczovL3N0YWNrb3ZlcmZsb3cuY29tL3F1ZXN0aW9ucy8yNDUwOTU0L2hvdy10by1yYW5kb21pemUtc2h1ZmZsZS1hLWphdmFzY3JpcHQtYXJyYXkjMjQ1MDk3NlxuICAgIHNodWZmbGVCYWcoYmFnKSB7XG4gICAgICAgIHZhciBjdXJyZW50SW5kZXggPSBiYWcubGVuZ3RoLCB0ZW1wb3JhcnlWYWx1ZSwgcmFuZG9tSW5kZXg7XG5cbiAgICAgICAgLy8gV2hpbGUgdGhlcmUgcmVtYWluIGVsZW1lbnRzIHRvIHNodWZmbGUuLi5cbiAgICAgICAgd2hpbGUgKDAgIT09IGN1cnJlbnRJbmRleCkge1xuXG4gICAgICAgICAgICAvLyBQaWNrIGEgcmVtYWluaW5nIGVsZW1lbnQuLi5cbiAgICAgICAgICAgIHJhbmRvbUluZGV4ID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogY3VycmVudEluZGV4KTtcbiAgICAgICAgICAgIGN1cnJlbnRJbmRleCAtPSAxO1xuXG4gICAgICAgICAgICAvLyBBbmQgc3dhcCBpdCB3aXRoIHRoZSBjdXJyZW50IGVsZW1lbnQuXG4gICAgICAgICAgICB0ZW1wb3JhcnlWYWx1ZSA9IGJhZ1tjdXJyZW50SW5kZXhdO1xuICAgICAgICAgICAgYmFnW2N1cnJlbnRJbmRleF0gPSBiYWdbcmFuZG9tSW5kZXhdO1xuICAgICAgICAgICAgYmFnW3JhbmRvbUluZGV4XSA9IHRlbXBvcmFyeVZhbHVlO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBiYWc7XG4gICAgfVxuICAgIC8vIGltcGxlbWVudGF0aW9uIG9mIHNodWZmbGUgZm91bmQgb24gaHR0cHM6Ly9zdGFja292ZXJmbG93LmNvbS9xdWVzdGlvbnMvMjQ1MDk1NC9ob3ctdG8tcmFuZG9taXplLXNodWZmbGUtYS1qYXZhc2NyaXB0LWFycmF5IzI0NTA5NzZcblxuICAgIC8vIGxvb2sgdGhyb3VnaCBmaWVsZCwgaWYgZmllbGRbcm93XVtjb2xdIGNvbnRhaW5zIGEgbnVtYmVyID4gMCwgZmlsbCB0aGF0IHNwb3Qgd2l0aCB0aGUgcmVzcGVjdGl2ZSBjb2xvci4gXG4gICAgLy8gaWYgY29udGFpbnMgYW4gJ3gnLCBwb3B1bGF0ZSB3aXRoIGdob3N0IHBpZWNlIHN0eWxlcy5cbiAgICAvLyBlbHNlLCByZW1vdmUgY29sb3JcbiAgICByZW5kZXIoKSB7XG4gICAgICAgIC8vIGlmICh0aGlzLmN1cnJlbnRQaWVjZS5yaWdodE1vc3RbMV0gPiA5IHx8IHRoaXMuY3VycmVudFBpZWNlLmxlZnRNb3N0WzFdIDwgMCkgcmV0dXJuO1xuICAgICAgICBsZXQgZmllbGRDb2x1bW5zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChgLmZpZWxkLWNvbHVtbi5maWVsZC0ke3RoaXMuZ2FtZU51bX1gKTtcbiAgICAgICAgdGhpcy5maWVsZC5mb3JFYWNoKChyb3csIHJvd0lkeCkgPT4ge1xuICAgICAgICAgICAgcm93LmZvckVhY2goKGNvbCwgY29sSWR4KSA9PiB7XG4gICAgICAgICAgICAgICAgbGV0IHNxdWFyZVZhbHVlID0gdGhpcy5maWVsZFtyb3dJZHhdW2NvbElkeF07XG4gICAgICAgICAgICAgICAgaWYgKHNxdWFyZVZhbHVlID09PSAneCcpIHtcbiAgICAgICAgICAgICAgICAgICAgZmllbGRDb2x1bW5zW2NvbElkeF0uY2hpbGRyZW5bcm93SWR4XS5jbGFzc0xpc3QuYWRkKGB4LSR7dGhpcy5jb2xvcnNbdGhpcy5jdXJyZW50UGllY2UuY29sb3JDb2RlXX1gKTtcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHNxdWFyZVZhbHVlKSB7XG4gICAgICAgICAgICAgICAgICAgIGZpZWxkQ29sdW1uc1tjb2xJZHhdLmNoaWxkcmVuW3Jvd0lkeF0uY2xhc3NMaXN0LmFkZCh0aGlzLmNvbG9yc1tzcXVhcmVWYWx1ZV0pO1xuICAgICAgICAgICAgICAgICAgICBmaWVsZENvbHVtbnNbY29sSWR4XS5jaGlsZHJlbltyb3dJZHhdLmNsYXNzTGlzdC5yZW1vdmUoYHgtJHt0aGlzLmNvbG9yc1t0aGlzLmN1cnJlbnRQaWVjZS5jb2xvckNvZGVdfWApO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGZpZWxkQ29sdW1uc1tjb2xJZHhdLmNoaWxkcmVuW3Jvd0lkeF0uY2xhc3NMaXN0ID0gXCJcIjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAga2V5TGlzdGVuZXIoKSB7XG4gICAgICAgIGRvY3VtZW50LmJvZHkuYWRkRXZlbnRMaXN0ZW5lcihcImtleWRvd25cIiwgZXZlbnQgPT4ge1xuICAgICAgICAgICAgdGhpcy5jdXJyZW50UGllY2Uuc2V0T3V0ZXJTcXVhcmVzKCk7XG4gICAgICAgICAgICAvLyB0aGlzLmNsZWFyR2hvc3RQb3NpdGlvbigpO1xuICAgICAgICAgICAgc3dpdGNoKGV2ZW50LndoaWNoKSB7XG4gICAgICAgICAgICAgICAgLy8gdXAga2V5XG4gICAgICAgICAgICAgICAgY2FzZSB0aGlzLmNvbnRyb2xzLnR1cm5SaWdodDpcbiAgICAgICAgICAgICAgICAgICAgLy8gcGFzcyBmaWVsZCBzbyBwaWVjZSBjYW4gY2hlY2sgZmllbGQgd2FsbCBiZWZvcmUgdHVybmluZ1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmNsZWFyR2hvc3RQb3NpdGlvbigpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnRTcGluID0gdGhpcy5jdXJyZW50UGllY2UubW92ZShcInR1cm5SaWdodFwiLCB0aGlzLmZpZWxkKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jdXJyZW50UGllY2UucG9wdWxhdGVGaWVsZCh0aGlzLmZpZWxkKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRHaG9zdFBvc2l0aW9uKCk7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIC8vIEMga2V5XG4gICAgICAgICAgICAgICAgY2FzZSB0aGlzLmNvbnRyb2xzLnR1cm5MZWZ0OlxuICAgICAgICAgICAgICAgICAgICAvLyBwYXNzIGZpZWxkIHNvIHBpZWNlIGNhbiBjaGVjayBmaWVsZCB3YWxsIGJlZm9yZSB0dXJuaW5nXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY2xlYXJHaG9zdFBvc2l0aW9uKCk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY3VycmVudFBpZWNlLm1vdmUoXCJ0dXJuTGVmdFwiLCB0aGlzLmZpZWxkKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jdXJyZW50UGllY2UucG9wdWxhdGVGaWVsZCh0aGlzLmZpZWxkKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRHaG9zdFBvc2l0aW9uKCk7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIC8vIGxlZnQga2V5XG4gICAgICAgICAgICAgICAgY2FzZSB0aGlzLmNvbnRyb2xzLmxlZnQ6XG4gICAgICAgICAgICAgICAgICAgIHRoaXMua2V5SGVsZC5sZWZ0ID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuY3VycmVudFBpZWNlLmxlZnRTaWRlQmxvY2tlZCh0aGlzLmZpZWxkKSkgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMubW92ZVBpZWNlKFwibGVmdFwiKTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgLy8gcmlnaHQga2V5XG4gICAgICAgICAgICAgICAgY2FzZSB0aGlzLmNvbnRyb2xzLnJpZ2h0OlxuICAgICAgICAgICAgICAgICAgICB0aGlzLmtleUhlbGQucmlnaHQgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5jdXJyZW50UGllY2UucmlnaHRTaWRlQmxvY2tlZCh0aGlzLmZpZWxkKSkgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMubW92ZVBpZWNlKFwicmlnaHRcIik7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIC8vIGRvd24ga2V5XG4gICAgICAgICAgICAgICAgY2FzZSB0aGlzLmNvbnRyb2xzLnNvZnREcm9wOlxuICAgICAgICAgICAgICAgICAgICB0aGlzLmtleUhlbGQuZG93biA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMubW92ZVBpZWNlKFwiZG93blwiKTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgLy8gc2hpZnQga2V5XG4gICAgICAgICAgICAgICAgY2FzZSB0aGlzLmNvbnRyb2xzLmhvbGQ6IFxuICAgICAgICAgICAgICAgICAgICB0aGlzLmNsZWFyR2hvc3RQb3NpdGlvbigpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmhvbGQoKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jdXJyZW50UGllY2UucG9wdWxhdGVGaWVsZCh0aGlzLmZpZWxkKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRHaG9zdFBvc2l0aW9uKCk7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIC8vIHNwYWNlIGJhclxuICAgICAgICAgICAgICAgIGNhc2UgdGhpcy5jb250cm9scy5oYXJkRHJvcDpcbiAgICAgICAgICAgICAgICAgICAgLy8gdGhpcy5yZW5kZXIoKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jbGVhckdob3N0UG9zaXRpb24oKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jdXJyZW50UGllY2UuaGFyZERyb3AodGhpcy5maWVsZCk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMucmVuZGVyKCk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY3VycmVudFBpZWNlLnBvcHVsYXRlRmllbGQodGhpcy5maWVsZCk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuaGFuZGxlUGllY2VTdG9wKHRoaXMuaGFuZGxlQ2xlYXIuZHJvcCk7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIC8vIFAga2V5XG4gICAgICAgICAgICAgICAgY2FzZSA4MDpcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5pc1BhdXNlZCA/IHRoaXMuZHJvcFBpZWNlKHRoaXMuZHJvcFNwZWVkKSA6IGNhbmNlbEFuaW1hdGlvbkZyYW1lKHRoaXMuaGFuZGxlQ2xlYXIuZHJvcCk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuaXNQYXVzZWQgPSAhdGhpcy5pc1BhdXNlZDtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLmN1cnJlbnRQaWVjZS5zZXRPdXRlclNxdWFyZXMoKTtcbiAgICAgICAgICAgIHRoaXMucmVuZGVyKCk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGRvY3VtZW50LmJvZHkuYWRkRXZlbnRMaXN0ZW5lcihcImtleXVwXCIsIGV2ZW50ID0+IHtcbiAgICAgICAgICAgIHN3aXRjaCAoZXZlbnQud2hpY2gpIHtcbiAgICAgICAgICAgICAgICBjYXNlIHRoaXMuY29udHJvbHMucmlnaHQ6IFxuICAgICAgICAgICAgICAgICAgICB0aGlzLmtleUhlbGQucmlnaHQgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSB0aGlzLmNvbnRyb2xzLmxlZnQ6IFxuICAgICAgICAgICAgICAgICAgICB0aGlzLmtleUhlbGQubGVmdCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlIHRoaXMuY29udHJvbHMuc29mdERyb3A6IFxuICAgICAgICAgICAgICAgICAgICB0aGlzLmtleUhlbGQuZG93biA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICBicmVhazsgIFxuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBjbGVhckxpbmVzKGxvd2VzdCwgaGlnaGVzdCwgbnVtTGluZXNDbGVhcmVkKSB7XG4gICAgICAgIGlmIChsb3dlc3QgPCAwKSByZXR1cm47XG4gICAgICAgIC8vIGJhc2UgY2FzZTogaWYgd2UgcmVhY2ggYSByb3cgdGhhdCBpcyBoaWdoZXIgdGhhbiB0aGUgaGlnaGVzdCwgdGhlbiByZXR1cm4gbnVtYmVyIG9mIGxpbmVzIHRoYXQgd2VyZSBjbGVhcmVkXG4gICAgICAgIGlmIChsb3dlc3QgPCBoaWdoZXN0KSB7XG4gICAgICAgICAgICByZXR1cm4gbnVtTGluZXNDbGVhcmVkO1xuICAgICAgICB9O1xuICAgICAgICAvLyByZWN1cnNpdmUgY2FzZTogXG4gICAgICAgIC8vIGlmIGxvd2VzdCByb3cgZG9lcyBub3QgY29udGFpbiBhIDAsIGJyaW5nIGFsbCBhYm92ZSByb3dzIGRvd24gb25lIGxldmVsXG4gICAgICAgIGlmICghdGhpcy5maWVsZFtsb3dlc3RdLmluY2x1ZGVzKDApKSB7XG4gICAgICAgICAgICB0aGlzLl9icmluZ0Rvd25GaWVsZChsb3dlc3QpO1xuICAgICAgICAgICAgLy8gY2FsbCByZWN1cnNpdmVDbGVhcihsb3dlc3QsIGhpZ2hlc3QgKyAxKTtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmNsZWFyTGluZXMobG93ZXN0LCBoaWdoZXN0ICsgMSwgbnVtTGluZXNDbGVhcmVkICsgMSlcbiAgICAgICAgLy8gaWYgcm93IGNvbnRhaW5zIGEgMCBcbiAgICAgICAgLy8gY2FsbCBDbGVhckxpbmVzKGxvd2VzdCAtIDEsIGhpZ2hlc3QpXG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy5maWVsZFtsb3dlc3RdLmluY2x1ZGVzKDApKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5jbGVhckxpbmVzKGxvd2VzdCAtIDEsIGhpZ2hlc3QsIG51bUxpbmVzQ2xlYXJlZCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBfYnJpbmdEb3duRmllbGQoc3RhcnRpbmdSb3cpIHtcbiAgICAgICAgZm9yIChsZXQgaSA9IHN0YXJ0aW5nUm93OyBpID4gMDsgaS0tKSB7XG4gICAgICAgICAgICB0aGlzLmZpZWxkW2ldID0gdGhpcy5maWVsZFtpIC0gMV07XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5maWVsZFswXSA9IFswLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwXTtcbiAgICB9XG5cbiAgICBoYW5kbGVQaWVjZVN0b3AoKSB7ICBcbiAgICAgICAgLy8gYWxsb3cgcGxheWVyIHRvIGhvbGQgcGllY2UgYWdhaW5cbiAgICAgICAgdGhpcy5jYW5Ib2xkID0gdHJ1ZTtcbiAgICAgICAgbGV0IGxvd2VzdCA9IHRoaXMuY3VycmVudFBpZWNlLnBvc2l0aW9uLmJvdHRvbVswXVswXTtcbiAgICAgICAgLy8gaW4gY2FzZSBvZiBsaW5lIHBpZWNlLCB3aGljaCBtYXkgbm90IGhhdmUgdGhpcy5wb3NpdGlvbi50b3BcbiAgICAgICAgbGV0IGhpZ2hlc3QgPSAhdGhpcy5jdXJyZW50UGllY2UucG9zaXRpb24udG9wLmxlbmd0aCA/IGxvd2VzdCA6IHRoaXMuY3VycmVudFBpZWNlLnBvc2l0aW9uLnRvcFswXVswXTtcbiAgICAgICAgLy8gY2hlY2sgaWYgYSBUUGllY2Ugd2FzIHNwdW4gaW4gcGxhY2VcbiAgICAgICAgaWYgKHRoaXMuY3VycmVudFBpZWNlLm5hbWUgPT09IFwiVFBpZWNlXCIpIHtcbiAgICAgICAgICAgIGxldCBbbGVmdE1vc3RSb3csIHJpZ2h0TW9zdFJvd10gPSBbdGhpcy5jdXJyZW50UGllY2UubGVmdE1vc3RbMF0sIHRoaXMuY3VycmVudFBpZWNlLnJpZ2h0TW9zdFswXV07XG4gICAgICAgICAgICBsZXQgW2xlZnRNb3N0Q29sLCByaWdodE1vc3RDb2xdID0gW3RoaXMuY3VycmVudFBpZWNlLmxlZnRNb3N0WzFdLCB0aGlzLmN1cnJlbnRQaWVjZS5yaWdodE1vc3RbMV1dO1xuICAgICAgICAgICAgaWYgKHRoaXMuZmllbGRbbGVmdE1vc3RSb3cgLSAxXSAmJiB0aGlzLmZpZWxkW3JpZ2h0TW9zdFJvdyAtIDFdKSB7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuZmllbGRbbGVmdE1vc3RSb3cgLSAxXVtsZWZ0TW9zdENvbF0gfHwgdGhpcy5maWVsZFtyaWdodE1vc3RSb3cgLSAxXVtyaWdodE1vc3RDb2xdKSB0aGlzLnRTcGluID0gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBsZXQgbnVtTGluZXNDbGVhcmVkID0gdGhpcy5jbGVhckxpbmVzKGxvd2VzdCwgaGlnaGVzdCwgMCk7XG5cbiAgICAgICAgLy8gaW4gdGhlIGNhc2Ugb2YgbXVsdGlwbGF5ZXIsIHNlbmQgY2xlYXJlZCBsaW5lcyB0byBvcHBvbmVudCBhbmQgcmVjZWl2ZSBwb3RlbnRpYWwgbGluZXNcbiAgICAgICAgaWYgKHRoaXMub3Bwb25lbnQpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLnRTcGluU3RyZWFrID09PSB0cnVlKSBkZWJ1Z2dlclxuICAgICAgICAgICAgaWYgKG51bUxpbmVzQ2xlYXJlZCA+IDApIHtcbiAgICAgICAgICAgICAgICB0aGlzLmNvbWJvICs9IDE7XG4gICAgICAgICAgICAgICAgbGV0IG51bUxpbmVzXG4gICAgICAgICAgICAgICAgaWYgKG51bUxpbmVzQ2xlYXJlZCA8IDQpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuY3VycmVudFBpZWNlLm5hbWUgPT09IFwiVFBpZWNlXCIgJiYgdGhpcy50U3Bpbikge1xuICAgICAgICAgICAgICAgICAgICAgICAgbnVtTGluZXMgPSBudW1MaW5lc0NsZWFyZWQgPT09IDMgPyA2IDogNDtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG51bUxpbmVzID0gbnVtTGluZXNDbGVhcmVkIC0gMTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMudFNwaW5TdHJlYWsgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIG51bUxpbmVzID0gNDtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBudW1MaW5lcyArPSB0aGlzLmNvbWJvR3VpZGVbdGhpcy5jb21ib107XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMudFNwaW5TdHJlYWspIG51bUxpbmVzICs9IDI7XG5cbiAgICAgICAgICAgICAgICBpZiAodGhpcy51cGNvbWluZ0xpbmVzID4gMCkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnVwY29taW5nTGluZXMgLT0gbnVtTGluZXM7XG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLnVwY29taW5nTGluZXMgPCAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm9wcG9uZW50LmFkZExpbmVzVG9RdWV1ZShNYXRoLmFicyh0aGlzLnVwY29taW5nTGluZXMpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMudXBjb21pbmdMaW5lcyA9IDA7XG4gICAgICAgICAgICAgICAgICAgICAgICBhZGp1c3RRdWV1ZUhlaWdodCh0aGlzLmdhbWVOdW0sIDApO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgYWRqdXN0UXVldWVIZWlnaHQodGhpcy5nYW1lTnVtLCB0aGlzLnVwY29taW5nTGluZXMgKiA1KTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMub3Bwb25lbnQuYWRkTGluZXNUb1F1ZXVlKG51bUxpbmVzKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMudFNwaW4gPT09IHRydWUpIHRoaXMudFNwaW5TdHJlYWsgPSB0cnVlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy5jb21ibyA9IC0xO1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLnVwY29taW5nTGluZXMgPiAwKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMucmVjZWl2ZVVwY29taW5nTGluZXModGhpcy51cGNvbWluZ0xpbmVzKTtcbiAgICAgICAgICAgICAgICAgICAgYWRqdXN0UXVldWVIZWlnaHQodGhpcy5nYW1lTnVtLCAwKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IFxuICAgICAgICB9XG4gICAgICAgIC8vIHJlc2V0IHRTcGluIHRyYWNrZXJcbiAgICAgICAgdGhpcy50U3BpbiA9IGZhbHNlXG4gICAgICAgIHRoaXMuY2xlYXJHaG9zdENsYXNzKCk7XG4gICAgICAgIGNhbmNlbEFuaW1hdGlvbkZyYW1lKHRoaXMuaGFuZGxlQ2xlYXIuZHJvcCk7XG4gICAgICAgIC8vIHRoaXMuc3RhcnRFbGV2YXRpbmcoKTtcbiAgICAgICAgdGhpcy5wbGF5KCk7XG4gICAgfVxuXG4gICAgZHJvcFBpZWNlKGZwcykge1xuICAgICAgICAvLyBEbyB3aGF0ZXZlclxuICAgICAgICB0aGlzLmFuaW1hdGUuZHJvcC5mcHNJbnRlcnZhbCA9IDEwMDAgLyBmcHM7XG4gICAgICAgIHRoaXMuYW5pbWF0ZS5kcm9wLnRoZW4gPSBEYXRlLm5vdygpO1xuICAgICAgICB0aGlzLmFuaW1hdGUuZHJvcC5zdGFydFRpbWUgPSB0aGlzLnRoZW47XG4gICAgICAgIHRoaXMuZHJvcCh0aGlzLmZpZWxkKTtcbiAgICB9XG5cbiAgICAvLyBpbnNwaXJhdGlvbiBmb3IgdGhyb3R0bGluZyByZXF1ZXN0QW5pbWF0aW9uRnJhbWUgZnJvbSBodHRwczovL3N0YWNrb3ZlcmZsb3cuY29tL3F1ZXN0aW9ucy8xOTc2NDAxOC9jb250cm9sbGluZy1mcHMtd2l0aC1yZXF1ZXN0YW5pbWF0aW9uZnJhbWVcbiAgICBkcm9wKCkge1xuICAgICAgICB0aGlzLmhhbmRsZUNsZWFyLmRyb3AgPSByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoKCkgPT4gdGhpcy5kcm9wKHRoaXMuZmllbGQpKTtcbiAgICAgICAgdGhpcy5hbmltYXRlLmRyb3Aubm93ID0gRGF0ZS5ub3coKTtcbiAgICAgICAgbGV0IGVsYXBzZWQgPSB0aGlzLmFuaW1hdGUuZHJvcC5ub3cgLSB0aGlzLmFuaW1hdGUuZHJvcC50aGVuO1xuICAgICAgICBpZiAoZWxhcHNlZCA+IHRoaXMuYW5pbWF0ZS5kcm9wLmZwc0ludGVydmFsKSB7XG4gICAgICAgICAgICAvLyBHZXQgcmVhZHkgZm9yIG5leHQgZnJhbWUgYnkgc2V0dGluZyB0aGVuPW5vdywgYWRqdXN0aW5nIGZvciBzcGVjaWZpZWQgZnBzSW50ZXJ2YWwgbm90IGJlaW5nIGEgbXVsdGlwbGUgb2YgUkFGJ3MgaW50ZXJ2YWwgKDE2LjdtcylcbiAgICAgICAgICAgIHRoaXMuYW5pbWF0ZS5kcm9wLnRoZW4gPSB0aGlzLmFuaW1hdGUuZHJvcC5ub3cgLSAoZWxhcHNlZCAlIHRoaXMuYW5pbWF0ZS5kcm9wLmZwc0ludGVydmFsKTtcbiAgICAgICAgICAgIHRoaXMuY3VycmVudFBpZWNlLnBvcHVsYXRlRmllbGQodGhpcy5maWVsZCk7XG4gICAgICAgICAgICB0aGlzLnJlbmRlcigpO1xuICAgICAgICAgICAgaWYgKCF0aGlzLmN1cnJlbnRQaWVjZS5pc0ZhbGxpbmcodGhpcy5maWVsZCkpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmhhbmRsZVBpZWNlU3RvcCh0aGlzLmhhbmRsZUNsZWFyLmRyb3ApO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHRoaXMuY3VycmVudFBpZWNlLmJvdHRvbU1vc3RbMF0gIT0gMCkgdGhpcy5jdXJyZW50UGllY2UuZHJvcCh0aGlzLmZpZWxkKTtcbiAgICAgICAgICAgIC8vIHRoaXMuc2V0R2hvc3RQb3NpdGlvbigpO1xuICAgICAgICAgICAgdGhpcy5jdXJyZW50UGllY2UucG9wdWxhdGVGaWVsZCh0aGlzLmZpZWxkKTsgLy8ga2VlcCBvbmx5IG9uZSBwb3B1bGF0ZSBmaWVsZD9cbiAgICAgICAgICAgIHRoaXMucmVuZGVyKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBtb3ZlUGllY2UoZGlyZWN0aW9uKSB7XG4gICAgICAgIC8vIERvIHdoYXRldmVyXG4gICAgICAgIHRoaXMuYW5pbWF0ZVtkaXJlY3Rpb25dLmZwc0ludGVydmFsID0gMTAwMCAvIHRoaXMubW92ZVNwZWVkO1xuICAgICAgICB0aGlzLmFuaW1hdGVbZGlyZWN0aW9uXS50aGVuID0gRGF0ZS5ub3coKTtcbiAgICAgICAgdGhpcy5hbmltYXRlW2RpcmVjdGlvbl0uc3RhcnRUaW1lID0gdGhpcy5hbmltYXRlW2RpcmVjdGlvbl0udGhlbjtcbiAgICAgICAgdGhpcy5tb3ZlKGRpcmVjdGlvbik7XG4gICAgfVxuXG4gICAgLy8gaW5zcGlyYXRpb24gZm9yIHRocm90dGxpbmcgcmVxdWVzdEFuaW1hdGlvbkZyYW1lIGZyb20gaHR0cHM6Ly9zdGFja292ZXJmbG93LmNvbS9xdWVzdGlvbnMvMTk3NjQwMTgvY29udHJvbGxpbmctZnBzLXdpdGgtcmVxdWVzdGFuaW1hdGlvbmZyYW1lXG4gICAgbW92ZShkaXJlY3Rpb24pIHtcbiAgICAgICAgdGhpcy5oYW5kbGVDbGVhcltkaXJlY3Rpb25dID0gcmVxdWVzdEFuaW1hdGlvbkZyYW1lKCgpID0+IHRoaXMubW92ZShkaXJlY3Rpb24pKTtcbiAgICAgICAgaWYgKCF0aGlzLmtleUhlbGRbZGlyZWN0aW9uXSkgY2FuY2VsQW5pbWF0aW9uRnJhbWUodGhpcy5oYW5kbGVDbGVhcltkaXJlY3Rpb25dKTtcbiAgICAgICAgdGhpcy5hbmltYXRlW2RpcmVjdGlvbl0ubm93ID0gRGF0ZS5ub3coKTtcbiAgICAgICAgbGV0IGVsYXBzZWQgPSB0aGlzLmFuaW1hdGVbZGlyZWN0aW9uXS5ub3cgLSB0aGlzLmFuaW1hdGVbZGlyZWN0aW9uXS50aGVuO1xuICAgICAgICBpZiAoZWxhcHNlZCA+IHRoaXMuYW5pbWF0ZVtkaXJlY3Rpb25dLmZwc0ludGVydmFsKSB7XG4gICAgICAgICAgICAvLyBHZXQgcmVhZHkgZm9yIG5leHQgZnJhbWUgYnkgc2V0dGluZyB0aGVuPW5vdywgYWRqdXN0aW5nIGZvciBzcGVjaWZpZWQgZnBzSW50ZXJ2YWwgbm90IGJlaW5nIGEgbXVsdGlwbGUgb2YgUkFGJ3MgaW50ZXJ2YWwgKDE2LjdtcylcbiAgICAgICAgICAgIHRoaXMuYW5pbWF0ZVtkaXJlY3Rpb25dLnRoZW4gPSB0aGlzLmFuaW1hdGVbZGlyZWN0aW9uXS5ub3cgLSAoZWxhcHNlZCAlIHRoaXMuYW5pbWF0ZVtkaXJlY3Rpb25dLmZwc0ludGVydmFsKTtcblxuICAgICAgICAgICAgLy8gcHJldmVudCBwaWVjZSBmcm9tIG1vdmluZyBpZiBpdCBpcyBibG9ja2VkIG9yIGlmIGJvdGggbGVmdCBhbmQgcmlnaHQgYXJyb3cga2V5cyBhcmUgaGVsZCBkb3duXG4gICAgICAgICAgICBpZiAoXG4gICAgICAgICAgICAgICAgZGlyZWN0aW9uID09PSBcInJpZ2h0XCIgJiYgdGhpcy5jdXJyZW50UGllY2UucmlnaHRTaWRlQmxvY2tlZCh0aGlzLmZpZWxkKSBcbiAgICAgICAgICAgICAgICB8fCBcbiAgICAgICAgICAgICAgICBkaXJlY3Rpb24gPT09IFwibGVmdFwiICYmIHRoaXMuY3VycmVudFBpZWNlLmxlZnRTaWRlQmxvY2tlZCh0aGlzLmZpZWxkKSBcbiAgICAgICAgICAgICAgICB8fCBcbiAgICAgICAgICAgICAgICBkaXJlY3Rpb24gPT09IFwiZG93blwiICYmICF0aGlzLmN1cnJlbnRQaWVjZS5pc0ZhbGxpbmcodGhpcy5maWVsZClcbiAgICAgICAgICAgICAgICB8fCBcbiAgICAgICAgICAgICAgICB0aGlzLmtleUhlbGQucmlnaHQgJiYgdGhpcy5rZXlIZWxkLmxlZnRcbiAgICAgICAgICAgICkgcmV0dXJuOyBcblxuICAgICAgICAgICAgdGhpcy5jdXJyZW50UGllY2UubW92ZShkaXJlY3Rpb24pO1xuXG4gICAgICAgICAgICB0aGlzLmN1cnJlbnRQaWVjZS5wb3B1bGF0ZUZpZWxkKHRoaXMuZmllbGQpO1xuXG4gICAgICAgICAgICAvLyBkb24ndCBuZWVkIHRvIHJlLXBvcHVsYXRlIGdob3N0IHBvc2l0aW9uIGlmIHRoZSBwaWVjZSBpcyBzb2Z0LWRyb3BwaW5nXG4gICAgICAgICAgICBpZiAoZGlyZWN0aW9uICE9PSBcImRvd25cIikge1xuICAgICAgICAgICAgICAgIHRoaXMuY2xlYXJHaG9zdFBvc2l0aW9uKCk7XG4gICAgICAgICAgICAgICAgdGhpcy5zZXRHaG9zdFBvc2l0aW9uKCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHRoaXMucmVuZGVyKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBoYW5kbGVUb3BQaWVjZSgpIHtcbiAgICAgICAgbGV0IGF0VG9wID0gZmFsc2U7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICB3aGlsZSAodGhpcy5maWVsZFt0aGlzLmN1cnJlbnRQaWVjZS5wb3NpdGlvbi5ib3R0b21bMF1bMF1dWzNdIHx8IHRoaXMuZmllbGRbdGhpcy5jdXJyZW50UGllY2UucG9zaXRpb24uYm90dG9tWzBdWzBdXVs0XSB8fCB0aGlzLmZpZWxkW3RoaXMuY3VycmVudFBpZWNlLnBvc2l0aW9uLmJvdHRvbVswXVswXV1bNV0gfHwgdGhpcy5maWVsZFt0aGlzLmN1cnJlbnRQaWVjZS5wb3NpdGlvbi5ib3R0b21bMF1bMF1dWzZdKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5jdXJyZW50UGllY2UubW92ZShcInVwXCIsIHRoaXMuZmllbGQpO1xuICAgICAgICAgICAgICAgIGF0VG9wID0gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBjYXRjaCB7XG4gICAgICAgICAgICB0aGlzLmdhbWVPdmVyKHRoaXMub3Bwb25lbnQuZ2FtZU51bSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGF0VG9wO1xuICAgIH1cbiAgICBcbiAgICBwbGF5KCkge1xuICAgICAgICB0aGlzLnNldEN1cnJlbnRQaWVjZSgpO1xuICAgICAgICBpZiAodGhpcy5oYW5kbGVUb3BQaWVjZSgpID09PSB0cnVlKSB7XG4gICAgICAgICAgICB0aGlzLmN1cnJlbnRQaWVjZS5wb3B1bGF0ZUZpZWxkKHRoaXMuZmllbGQsIFwiYXRUb3BcIik7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmN1cnJlbnRQaWVjZS5wb3B1bGF0ZUZpZWxkKHRoaXMuZmllbGQpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuYWRkVG9DdXJyZW50QmFnKCk7XG4gICAgICAgIHRoaXMuc2hvd0N1cnJlbnRCYWcoKTtcbiAgICAgICAgaWYgKCF0aGlzLm5leHRCYWcubGVuZ3RoKSB0aGlzLnJlZmlsbE5leHRCYWcoKTtcbiAgICAgICAgdGhpcy5zZXRHaG9zdFBvc2l0aW9uKCk7XG4gICAgICAgIC8vIGRyb3AgcGllY2UgYXQgZ2l2ZW4gZnBzXG4gICAgICAgIHRoaXMuZHJvcFBpZWNlKHRoaXMuZHJvcFNwZWVkKTsgICAgXG4gICAgfVxuXG4gICAgZ2FtZU92ZXIod2lubmVyKSB7XG4gICAgICAgIHRoaXMuZHJvcFNwZWVkID0gMDtcbiAgICAgICAgbGV0IGdhbWVPdmVyU2NyZWVuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgZ2FtZU92ZXJTY3JlZW4uY2xhc3NMaXN0LmFkZChcImdhbWUtb3Zlci1kaXZcIik7XG4gICAgICAgIFxuICAgICAgICBsZXQgZ2FtZU92ZXJIZWFkaW5nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgyXCIpO1xuICAgICAgICBnYW1lT3ZlckhlYWRpbmcuY2xhc3NMaXN0LmFkZChcImdhbWUtb3Zlci1oZWFkaW5nXCIpO1xuXG4gICAgICAgIGdhbWVPdmVySGVhZGluZy5pbm5lckhUTUwgPSBcIkdBTUUgT1ZFUlwiO1xuICAgICAgICBnYW1lT3ZlclNjcmVlbi5hcHBlbmQoZ2FtZU92ZXJIZWFkaW5nKTtcblxuICAgICAgICBsZXQgd2lubmVySGVhZGluZztcbiAgICAgICAgaWYgKHdpbm5lcikgIHtcbiAgICAgICAgICAgIHdpbm5lckhlYWRpbmcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDJcIik7XG4gICAgICAgICAgICB3aW5uZXJIZWFkaW5nLmNsYXNzTGlzdC5hZGQoXCJnYW1lLW92ZXItaGVhZGluZ1wiKTtcbiAgICAgICAgICAgIHdpbm5lckhlYWRpbmcuaW5uZXJIVE1MID0gYFBMQVlFUiAke3dpbm5lcn0gV0lOU2A7XG4gICAgICAgICAgICBnYW1lT3ZlclNjcmVlbi5hcHBlbmQod2lubmVySGVhZGluZylcbiAgICAgICAgfSAgIFxuXG4gICAgICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoZ2FtZU92ZXJTY3JlZW4pO1xuICAgICAgICB0aGlzLnN0b3BUaW1lcigpO1xuICAgIH1cblxuICAgIC8vIG11bHRpcGxheWVyIFxuICAgIHNldE9wcG9uZW50KHBsYXllcikge1xuICAgICAgICB0aGlzLm9wcG9uZW50ID0gcGxheWVyO1xuICAgIH1cblxuICAgIGFkZExpbmVzVG9RdWV1ZShudW1MaW5lcykge1xuICAgICAgICB0aGlzLnVwY29taW5nTGluZXMgKz0gbnVtTGluZXM7XG4gICAgICAgIGxldCBwZXJjZW50YWdlID0gdGhpcy51cGNvbWluZ0xpbmVzICogNTtcbiAgICAgICAgYWRqdXN0UXVldWVIZWlnaHQodGhpcy5nYW1lTnVtLCBwZXJjZW50YWdlKTtcbiAgICB9XG5cbiAgICByZWNlaXZlVXBjb21pbmdMaW5lcygpIHtcbiAgICAgICAgbGV0IGdhcmJhZ2VMaW5lcyA9IFtdO1xuICAgICAgICBsZXQgbnVtTGluZXMgPSB0aGlzLnVwY29taW5nTGluZXM7XG4gICAgICAgIGxldCByYW5kb21Ib2xlO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IG51bUxpbmVzOyBpKyspIHtcbiAgICAgICAgICAgIGlmIChpICUgMiA9PT0gMCkgcmFuZG9tSG9sZSA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDkpO1xuICAgICAgICAgICAgbGV0IGdhcmJhZ2VSb3cgPSBbOCwgOCwgOCwgOCwgOCwgOCwgOCwgOCwgOCwgOF07XG4gICAgICAgICAgICBnYXJiYWdlUm93W3JhbmRvbUhvbGVdID0gMDtcbiAgICAgICAgICAgIGdhcmJhZ2VMaW5lcy5wdXNoKGdhcmJhZ2VSb3cpO1xuICAgICAgICB9XG4gICAgICAgIC8vIGlmIHBsYXllciByZWFjaGVzIHRoZSB0b3AsIHBsYXllciBsb3Nlc1xuICAgICAgICAvLyBzbGljZSBhbGxvd3MgcGxheWVyIHRvIGNvbnRpbnVlIHBsYXlpbmcgaWYgdG9wIG1pZGRsZSBpcyBjbGVhclxuICAgICAgICBpZiAoIXRoaXMuZmllbGRbbnVtTGluZXMgLSAxXS5zbGljZSgyLDcpLmluY2x1ZGVzKDApKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5maWVsZCA9IHRoaXMuZmllbGQuc2xpY2UobnVtTGluZXMsIDIwKS5jb25jYXQoZ2FyYmFnZUxpbmVzKTtcbiAgICAgICAgdGhpcy51cGNvbWluZ0xpbmVzID0gMDtcbiAgICAgICAgdGhpcy5yZW5kZXIoKTtcbiAgICB9XG5cbiAgICAvLyBzaW5nbGUgcGxheWVyXG4gICAgc3RhcnRFbGV2YXRpbmcoZWxldmF0ZURlbGF5KSB7XG4gICAgICAgIHRoaXMuY2xlYXJFbGV2YXRlSW50ZXJ2YWwgPSBzZXRJbnRlcnZhbCgoKSA9PiB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyh0aGlzLmN1cnJlbnRQaWVjZSk7XG4gICAgICAgICAgICB0aGlzLmNsZWFyR2hvc3RQb3NpdGlvbigpO1xuICAgICAgICAgICAgdGhpcy5jdXJyZW50UGllY2UuY2xlYXJTZWxmRnJvbUJvYXJkKHRoaXMuZmllbGQpO1xuICAgICAgICAgICAgdGhpcy51cGNvbWluZ0xpbmVzICs9IDE7XG4gICAgICAgICAgICB0aGlzLnJlY2VpdmVVcGNvbWluZ0xpbmVzKCk7XG4gICAgICAgICAgICB0aGlzLnNldEdob3N0UG9zaXRpb24oKTtcbiAgICAgICAgICAgIHRoaXMuY3VycmVudFBpZWNlLnBvcHVsYXRlRmllbGQoKTtcbiAgICAgICAgICAgIHRoaXMucmVuZGVyKCk7XG4gICAgICAgIH0sIGVsZXZhdGVEZWxheSlcbiAgICB9XG5cbiAgICBhZGp1c3RFbGV2YXRlKCkge1xuICAgICAgICBzZXRJbnRlcnZhbCgoKSA9PiB7XG4gICAgICAgICAgICBpZiAodGhpcy5jbGVhckVsZXZhdGVJbnRlcnZhbCkgY2xlYXJJbnRlcnZhbCh0aGlzLmNsZWFyRWxldmF0ZUludGVydmFsKTtcbiAgICAgICAgICAgIGlmICh0aGlzLmVsZXZhdGVEZWxheSA+IDIwMDApIHRoaXMuZWxldmF0ZURlbGF5IC09IDIwMDtcbiAgICAgICAgICAgIHRoaXMuc3RhcnRFbGV2YXRpbmcodGhpcy5lbGV2YXRlRGVsYXkpO1xuICAgICAgICB9LCAxMDAwMCk7XG4gICAgfVxuXG4gICAgc3RhcnRUaW1lcigpIHtcbiAgICAgICAgbGV0IG1pbnV0ZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWludXRlcycpO1xuICAgICAgICBsZXQgc2Vjb25kcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zZWNvbmRzJyk7XG4gICAgICAgIHRoaXMuY2xlYXJUaW1lciA9IHNldEludGVydmFsKCgpID0+IHtcbiAgICAgICAgICAgIGxldCBvbGRTZWNvbmQgPSBOdW1iZXIoc2Vjb25kcy5pbm5lckhUTUwpO1xuICAgICAgICAgICAgbGV0IG9sZE1pbnV0ZSA9IE51bWJlcihtaW51dGVzLmlubmVySFRNTCk7XG4gICAgICAgICAgICBpZiAob2xkU2Vjb25kICsgMSA9PT0gNjApIHtcbiAgICAgICAgICAgICAgICBzZWNvbmRzLmlubmVySFRNTCA9IDA7XG4gICAgICAgICAgICAgICAgbWludXRlcy5pbm5lckhUTUwgPSBvbGRNaW51dGUgKyAxO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBsZXQgbmV3U2Vjb25kcyA9IE51bWJlcihzZWNvbmRzLmlubmVySFRNTCkgKyAxIDwgMTAgPyBgMCR7TnVtYmVyKHNlY29uZHMuaW5uZXJIVE1MKSArIDF9YCA6IE51bWJlcihzZWNvbmRzLmlubmVySFRNTCkgKyAxO1xuICAgICAgICAgICAgICAgIHNlY29uZHMuaW5uZXJIVE1MID0gbmV3U2Vjb25kcztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSwgMTAwMClcbiAgICB9XG5cbiAgICBzdG9wVGltZXIoKSB7XG4gICAgICAgIGNsZWFySW50ZXJ2YWwodGhpcy5jbGVhclRpbWVyKTtcbiAgICB9XG5cbiAgICBjaGFuZ2VDb250cm9scygpIHtcbiAgICAgICAgdGhpcy5jb250cm9scyA9IHsgbGVmdDogMzcsIHJpZ2h0OiAzOSwgdHVyblJpZ2h0OiAzOCwgc29mdERyb3A6IDQwLCBob2xkOiAxNiwgdHVybkxlZnQ6IDY3LCBoYXJkRHJvcDogMzIgfVxuICAgIH1cbn0iLCJpbXBvcnQgTWVudSBmcm9tICcuL21lbnUvbWVudSdcblxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIiwgKCkgPT4ge1xuICAgIGNvbnN0IG1lbnUgPSBuZXcgTWVudTtcbiAgICBtZW51LnJlbmRlck1lbnUoKTtcbn0pOyIsImltcG9ydCBHYW1lIGZyb20gJy4uL2dhbWUvZ2FtZSc7XG5pbXBvcnQgRmllbGQgZnJvbSAnLi4vZmllbGQvZmllbGQnO1xuaW1wb3J0IE11bHRpcGxheWVyIGZyb20gJy4uL211bHRpcGxheWVyL211bHRpcGxheWVyJztcbmltcG9ydCBNb2RhbCBmcm9tICcuLi9tb2RhbC9tb2RhbCc7XG5pbXBvcnQgU2luZ2xlUGxheWVyQ29udGVudCBmcm9tICcuLi9tb2RhbC9zaW5nbGVQbGF5ZXJDb250ZW50JztcbmltcG9ydCBNdWx0aXBsYXllckNvbnRlbnQgZnJvbSAnLi4vbW9kYWwvbXVsdGlwbGF5ZXJDb250ZW50JztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTWVudSB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMubWVudSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibWVudVwiKTtcblxuICAgICAgICB0aGlzLm9wdGlvbnNQbGF5ZXIxID0geyBnYW1lTnVtOiAxLCBtb3ZlU3BlZWQ6IDI1LCBjb250cm9sczogeyBsZWZ0OiA2NSwgcmlnaHQ6IDY4LCB0dXJuUmlnaHQ6IDg3LCBzb2Z0RHJvcDogODMsIGhvbGQ6IDgxLCB0dXJuTGVmdDogMTkyLCBoYXJkRHJvcDogNDkgfSB9XG4gICAgICAgIHRoaXMub3B0aW9uc1BsYXllcjIgPSB7IGdhbWVOdW06IDIsIG1vdmVTcGVlZDogMTUsIGNvbnRyb2xzOiB7IGxlZnQ6IDM3LCByaWdodDogMzksIHR1cm5SaWdodDogMzgsIHNvZnREcm9wOiA0MCwgaG9sZDogMTYsIHR1cm5MZWZ0OiA3NSwgaGFyZERyb3A6IDE5MCB9IH1cbiAgICAgICAgICAgIFxuXG4gICAgICAgIHRoaXMuZ2FtZTEgPSBuZXcgR2FtZSh0aGlzLm9wdGlvbnNQbGF5ZXIxKTtcbiAgICAgICAgdGhpcy5nYW1lMiA9IG5ldyBHYW1lKHRoaXMub3B0aW9uc1BsYXllcjIpO1xuXG4gICAgICAgIHRoaXMuZmllbGQxID0gbmV3IEZpZWxkKDEpO1xuICAgICAgICB0aGlzLmZpZWxkMiA9IG5ldyBGaWVsZCgyKTtcblxuICAgICAgICB0aGlzLm11bHRpcGxheWVyTW9kZSA9IG5ldyBNdWx0aXBsYXllcih0aGlzLmdhbWUxLCB0aGlzLmdhbWUyKTtcblxuICAgICAgICB0aGlzLmZpZWxkQ29udGFpbmVyMSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZmllbGQtY29udGFpbmVyLTFcIik7XG4gICAgICAgIHRoaXMuZmllbGRDb250YWluZXIyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJmaWVsZC1jb250YWluZXItMlwiKTtcblxuICAgICAgICB0aGlzLnNpbmdsZVBsYXllckNvbnRlbnQgPSBuZXcgU2luZ2xlUGxheWVyQ29udGVudCgpO1xuICAgICAgICB0aGlzLm11bHRpcGxheWVyQ29udGVudCA9IG5ldyBNdWx0aXBsYXllckNvbnRlbnQoKTtcbiAgICAgICAgdGhpcy5tb2RhbCA9IG5ldyBNb2RhbCgpO1xuICAgIH1cblxuICAgIHJlbmRlckJ1dHRvbnMoKSB7XG4gICAgICAgIGxldCBzaW5nbGVQbGF5ZXJCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICBsZXQgbXVsdGlwbGF5ZXJCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuXG4gICAgICAgIHNpbmdsZVBsYXllckJ1dHRvbi5jbGFzc0xpc3QuYWRkKFwic2luZ2xlLXBsYXllci1idXR0b25cIik7XG4gICAgICAgIG11bHRpcGxheWVyQnV0dG9uLmNsYXNzTGlzdC5hZGQoXCJtdWx0aXBsYXllci1idXR0b25cIik7XG5cbiAgICAgICAgc2luZ2xlUGxheWVyQnV0dG9uLmlubmVySFRNTCA9IFwiU2luZ2xlIFBsYXllclwiO1xuICAgICAgICBtdWx0aXBsYXllckJ1dHRvbi5pbm5lckhUTUwgPSBcIk11bHRpcGxheWVyXCI7XG5cbiAgICAgICAgdGhpcy5hZGRFdmVudExpc3RlbmVycyhzaW5nbGVQbGF5ZXJCdXR0b24sIG11bHRpcGxheWVyQnV0dG9uKTtcblxuICAgICAgICByZXR1cm4gW3NpbmdsZVBsYXllckJ1dHRvbiwgbXVsdGlwbGF5ZXJCdXR0b25dO1xuICAgIH1cblxuICAgIGFkZEV2ZW50TGlzdGVuZXJzKHNpbmdsZVBsYXllckJ1dHRvbiwgbXVsdGlwbGF5ZXJCdXR0b24pIHtcbiAgICAgICAgc2luZ2xlUGxheWVyQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5yZW5kZXJTaW5nbGVQbGF5ZXIoKTtcbiAgICAgICAgfSk7XG4gICAgICAgIG11bHRpcGxheWVyQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5yZW5kZXJNdWx0aXBsYXllcigpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICByZW5kZXJTaW5nbGVQbGF5ZXIoKSB7XG4gICAgICAgIGRvY3VtZW50LmJvZHkucmVtb3ZlQ2hpbGQodGhpcy5tZW51KTtcbiAgICAgICAgZG9jdW1lbnQuYm9keS5zdHlsZS5qdXN0aWZ5Q29udGVudCA9ICdub25lJztcbiAgICAgICAgdGhpcy5zaW5nbGVQbGF5ZXJDb250ZW50LmNyZWF0ZVRpbWVyQW5kQ29udHJvbHMoKTtcbiAgICAgICAgdGhpcy5maWVsZDEuY3JlYXRlQ29tcGxldGVGaWVsZCh0aGlzLmZpZWxkQ29udGFpbmVyMSk7XG4gICAgICAgIHRoaXMuZmllbGRDb250YWluZXIxLnN0eWxlLnBvc2l0aW9uID0gJ3JlbGF0aXZlJztcbiAgICAgICAgdGhpcy5maWVsZENvbnRhaW5lcjEuc3R5bGUubGVmdCA9ICcxNHZ3JztcbiAgICAgICAgdGhpcy5nYW1lMS5rZXlMaXN0ZW5lcigpO1xuICAgICAgICB0aGlzLmdhbWUxLmNoYW5nZUNvbnRyb2xzKCk7XG4gICAgICAgIHRoaXMuZ2FtZTEucGxheSgpO1xuICAgICAgICB0aGlzLmdhbWUxLnN0YXJ0RWxldmF0aW5nKDUwMDApO1xuICAgICAgICB0aGlzLmdhbWUxLmFkanVzdEVsZXZhdGUoKTtcbiAgICAgICAgdGhpcy5zaW5nbGVQbGF5ZXJDb250ZW50LmNyZWF0ZVRpbWVyKCk7XG4gICAgICAgIHRoaXMuZ2FtZTEuc3RhcnRUaW1lcigpO1xuICAgIH1cblxuICAgIHJlbmRlck11bHRpcGxheWVyKCkge1xuICAgICAgICBkb2N1bWVudC5ib2R5LnJlbW92ZUNoaWxkKHRoaXMubWVudSk7XG4gICAgICAgIHRoaXMuZmllbGQxLmNyZWF0ZUNvbXBsZXRlRmllbGQodGhpcy5maWVsZENvbnRhaW5lcjEpO1xuICAgICAgICB0aGlzLmdhbWUxLmtleUxpc3RlbmVyKCk7XG5cbiAgICAgICAgdGhpcy5maWVsZDIuY3JlYXRlQ29tcGxldGVGaWVsZCh0aGlzLmZpZWxkQ29udGFpbmVyMik7XG4gICAgICAgIHRoaXMuZ2FtZTIua2V5TGlzdGVuZXIoKTtcblxuICAgICAgICBsZXQgY29udHJvbHNDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgY29udHJvbHNDb250YWluZXIuY2xhc3NMaXN0LmFkZCgnY29udHJvbHMtY29udGFpbmVyJylcbiAgICAgICAgY29udHJvbHNDb250YWluZXIuYXBwZW5kQ2hpbGQodGhpcy5tdWx0aXBsYXllckNvbnRlbnQuY3JlYXRlQ29udHJvbHNDb250ZW50KCdwbGF5ZXIxJykpO1xuICAgICAgICBjb250cm9sc0NvbnRhaW5lci5hcHBlbmRDaGlsZCh0aGlzLm11bHRpcGxheWVyQ29udGVudC5jcmVhdGVDb250cm9sc0NvbnRlbnQoJ3BsYXllcjInKSk7XG4gICAgICAgIHRoaXMubW9kYWwuY3JlYXRlKCk7XG4gICAgICAgIHRoaXMubW9kYWwuYXBwZW5kQ2hpbGQoY29udHJvbHNDb250YWluZXIpO1xuICAgICAgICB0aGlzLm1vZGFsLmFwcGVuZENoaWxkKHRoaXMuX2NyZWF0ZUNsb3NlTW9kYWxMaW5rKCkpO1xuICAgIH1cblxuICAgIHJlbmRlck1lbnUoKSB7XG4gICAgICAgIGxldCBidXR0b25Db250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICBidXR0b25Db250YWluZXIuY2xhc3NMaXN0LmFkZChcImJ1dHRvbi1jb250YWluZXJcIik7XG4gICAgICAgIHRoaXMucmVuZGVyQnV0dG9ucygpLmZvckVhY2goYnV0dG9uID0+IHtcbiAgICAgICAgICAgIGJ1dHRvbkNvbnRhaW5lci5hcHBlbmRDaGlsZChidXR0b24pO1xuICAgICAgICB9KVxuICAgICAgICB0aGlzLm1lbnUuYXBwZW5kQ2hpbGQoYnV0dG9uQ29udGFpbmVyKTtcbiAgICB9XG5cbiAgICBfY3JlYXRlQ2xvc2VNb2RhbExpbmsoKSB7XG4gICAgICAgIGxldCBjbG9zZUxpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgY2xvc2VMaW5rLmNsYXNzTGlzdC5hZGQoJ2Nsb3NlLW1vZGFsLWxpbmsnKTtcbiAgICAgICAgY2xvc2VMaW5rLmlubmVySFRNTCA9IFwiTGV0J3MgZ2V0IHN0YXJ0ZWQuXCI7XG5cbiAgICAgICAgY2xvc2VMaW5rLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5tb2RhbC5yZW1vdmUoKTtcbiAgICAgICAgICAgIHRoaXMubXVsdGlwbGF5ZXJNb2RlLnN0YXJ0TXVsdGlwbGF5ZXIoKTtcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiBjbG9zZUxpbms7XG4gICAgfVxufSIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIE1vZGFsIHtcbiAgICBjcmVhdGUoKSB7XG4gICAgICAgIGxldCBtb2RhbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBtb2RhbC5jbGFzc0xpc3QuYWRkKCdjb250cm9scy1tb2RhbCcpO1xuICAgICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKG1vZGFsKTtcbiAgICB9XG4gICAgXG4gICAgYXBwZW5kQ2hpbGQoY29udGVudCkge1xuICAgICAgICBsZXQgbW9kYWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29udHJvbHMtbW9kYWwnKTtcbiAgICAgICAgbW9kYWwuYXBwZW5kQ2hpbGQoY29udGVudCk7XG4gICAgfVxuXG4gICAgcmVtb3ZlKCkge1xuICAgICAgICBsZXQgbW9kYWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29udHJvbHMtbW9kYWwnKTtcbiAgICAgICAgbW9kYWwucmVtb3ZlKCk7XG4gICAgfVxufSIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIE11bHRpcGxheWVyQ29udGVudCB7XG4gICAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICAgICAgdGhpcy5rZXlzID0ge1xuICAgICAgICAgICAgcGxheWVyMToge1xuICAgICAgICAgICAgICAgICd3X2tleSc6ICdUVVJOIFJJR0hUJyxcbiAgICAgICAgICAgICAgICAnYV9rZXknOiAnTEVGVCcsXG4gICAgICAgICAgICAgICAgJ3Nfa2V5JzogJ1NPRlQgRFJPUCcsXG4gICAgICAgICAgICAgICAgJ2Rfa2V5JzogJ1JJR0hUJyxcbiAgICAgICAgICAgICAgICAnYF9rZXknOiAnVFVSTiBMRUZUJyxcbiAgICAgICAgICAgICAgICAncV9rZXknOiAnSE9MRCcsXG4gICAgICAgICAgICAgICAgJzFfa2V5JzogJ0hBUkREUk9QJ1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHBsYXllcjI6IHtcbiAgICAgICAgICAgICAgICAndXBfa2V5JzogJ1RVUk4gUklHSFQnLFxuICAgICAgICAgICAgICAgICdsZWZ0X2tleSc6ICdMRUZUJyxcbiAgICAgICAgICAgICAgICAnZG93bl9rZXknOiAnU09GVCBEUk9QJyxcbiAgICAgICAgICAgICAgICAncmlnaHRfa2V5JzogJ1JJR0hUJyxcbiAgICAgICAgICAgICAgICAna19rZXknOiAnVFVSTiBMRUZUJyxcbiAgICAgICAgICAgICAgICAnc2hpZnRfa2V5JzogJ0hPTEQnLFxuICAgICAgICAgICAgICAgICdwZXJpb2Rfa2V5JzogJ0hBUkREUk9QJ1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuXG4gICAgfVxuXG4gICAgY3JlYXRlQ29udHJvbHNDb250ZW50KHBsYXllcikge1xuICAgICAgICBsZXQgY29udHJvbHNEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgY29udHJvbHNEaXYuY2xhc3NMaXN0LmFkZCgnY29udHJvbHMnKTtcbiAgICAgICAgbGV0IGltYWdlcyA9IE9iamVjdC5rZXlzKHRoaXMua2V5c1twbGF5ZXJdKTtcbiAgICAgICAgbGV0IGRlc2NyaXB0aW9ucyA9IE9iamVjdC52YWx1ZXModGhpcy5rZXlzW3BsYXllcl0pO1xuXG4gICAgICAgIC8vIGluaXRpYWxpemUgYXJyYXlzIG9mIHNwYW5zIGFuZCBkaXZzXG4gICAgICAgIGxldCBzcGFucyA9IFtdO1xuICAgICAgICBsZXQgZGl2cyA9IFtdO1xuXG4gICAgICAgIGxldCBsYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2hlYWRlcicpO1xuICAgICAgICBsYWJlbC5pbm5lckhUTUwgPSBgUExBWUVSICR7cGxheWVyLnNsaWNlKDYpfWBcbiAgICAgICAgY29udHJvbHNEaXYuYXBwZW5kQ2hpbGQobGFiZWwpO1xuXG4gICAgICAgIC8vIGNyZWF0ZSBlbGVtZW50cyBhbmQgc3RvcmUgaW50byBhcnJheSBpbmRpY2VzIGZvciBsYXRlciByZWZlcmVuY2VcbiAgICAgICAgZm9yIChsZXQgaSA9IDE7IGkgPD0gNzsgaSsrKSB7XG4gICAgICAgICAgICBzcGFuc1tpXSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgICAgICAgICAgIGlmIChpIDw9IDMpIGRpdnNbaV0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgaW1hZ2VzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBsZXQgcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICAgICAgICAgIGxldCBpbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgICAgICAgICAgIGltZy5jbGFzc0xpc3QuYWRkKCdrZXlib2FyZC1rZXknKTtcblxuICAgICAgICAgICAgcC5pbm5lckhUTUwgPSBkZXNjcmlwdGlvbnNbaV07XG4gICAgICAgICAgICBpbWcuc2V0QXR0cmlidXRlKCdzcmMnLCBgLi9hc3NldHMvaW1hZ2VzLyR7aW1hZ2VzW2ldfS5wbmdgKTtcblxuICAgICAgICAgICAgc3BhbnNbaSArIDFdLmFwcGVuZChpbWcpO1xuICAgICAgICAgICAgc3BhbnNbaSArIDFdLmFwcGVuZChwKTtcblxuICAgICAgICAgICAgaWYgKGkgPCAxKSB7XG4gICAgICAgICAgICAgICAgZGl2c1sxXS5hcHBlbmQoc3BhbnNbaSArIDFdKTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoaSA8IDQpIHtcbiAgICAgICAgICAgICAgICBkaXZzWzJdLmFwcGVuZChzcGFuc1tpICsgMV0pO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChpIDwgNykge1xuICAgICAgICAgICAgICAgIGRpdnNbM10uYXBwZW5kKHNwYW5zW2kgKyAxXSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBmb3IgKGxldCBpID0gMTsgaSA8PSAzOyBpKyspIHtcbiAgICAgICAgICAgIGNvbnRyb2xzRGl2LmFwcGVuZChkaXZzW2ldKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBjb250cm9sc0RpdjtcbiAgICB9XG59IiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2luZ2xlUGxheWVyQ29udGVudCB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMua2V5cyA9IHtcbiAgICAgICAgICAgICdsZWZ0X2tleSc6ICdMRUZUJyxcbiAgICAgICAgICAgICdyaWdodF9rZXknOiAnUklHSFQnLFxuICAgICAgICAgICAgJ2Rvd25fa2V5JzogJ1NPRlQgRFJPUCcsXG4gICAgICAgICAgICAndXBfa2V5JzogJ1RVUk4gUklHSFQnLFxuICAgICAgICAgICAgJ2Nfa2V5JzogJ1RVUk4gTEVGVCcsXG4gICAgICAgICAgICAnc2hpZnRfa2V5JzogJ0hPTEQnLFxuICAgICAgICAgICAgJ3NwYWNlX2tleSc6ICdIQVJERFJPUCcsXG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgY3JlYXRlVGltZXJBbmRDb250cm9scygpIHtcbiAgICAgICAgbGV0IHRpbWVyQW5kQ29udHJvbHMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgdGltZXJBbmRDb250cm9scy5hcHBlbmRDaGlsZCh0aGlzLmNyZWF0ZVRpbWVyKCkpO1xuICAgICAgICB0aW1lckFuZENvbnRyb2xzLmFwcGVuZENoaWxkKHRoaXMuY3JlYXRlQ29udHJvbHNDb250ZW50KCkpO1xuICAgICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZCh0aW1lckFuZENvbnRyb2xzKTtcbiAgICB9XG5cbiAgICBjcmVhdGVDb250cm9sc0NvbnRlbnQoKSB7XG4gICAgICAgIGxldCBjb250ZW50RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGNvbnRlbnREaXYuY2xhc3NMaXN0LmFkZCgnY29udHJvbHMnKTtcbiAgICAgICAgbGV0IGltYWdlcyA9IE9iamVjdC5rZXlzKHRoaXMua2V5cyk7XG4gICAgICAgIGxldCBkZXNjcmlwdGlvbnMgPSBPYmplY3QudmFsdWVzKHRoaXMua2V5cyk7XG5cbiAgICAgICAgLy8gaW5pdGlhbGl6ZSBhcnJheXMgb2Ygc3BhbnMgYW5kIGRpdnNcbiAgICAgICAgbGV0IHNwYW5zID0gW107XG4gICAgICAgIGxldCBkaXZzID0gW107XG5cbiAgICAgICAgLy8gY3JlYXRlIGVsZW1lbnRzIGFuZCBzdG9yZSBpbnRvIGFycmF5IGluZGljZXMgZm9yIGxhdGVyIHJlZmVyZW5jZVxuICAgICAgICBmb3IgKGxldCBpID0gMTsgaSA8PSA3OyBpKyspIHtcbiAgICAgICAgICAgIHNwYW5zW2ldID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICAgICAgICAgICAgaWYgKGkgPD0gNCkgZGl2c1tpXSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICB9XG5cbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBpbWFnZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGxldCBwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgICAgICAgICAgbGV0IGltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICAgICAgICAgICAgaW1nLmNsYXNzTGlzdC5hZGQoJ2tleWJvYXJkLWtleScpO1xuICAgICAgICAgICAgaWYgKGkgPT09IDUpIGltZy5jbGFzc0xpc3QuYWRkKCdzaGlmdC1rZXknKTtcbiAgICAgICAgICAgIGlmIChpID09PSA2KSBpbWcuY2xhc3NMaXN0LmFkZCgnc3BhY2Uta2V5Jyk7XG5cbiAgICAgICAgICAgIHAuaW5uZXJIVE1MID0gZGVzY3JpcHRpb25zW2ldO1xuICAgICAgICAgICAgaW1nLnNldEF0dHJpYnV0ZSgnc3JjJywgYC4vYXNzZXRzL2ltYWdlcy8ke2ltYWdlc1tpXX0ucG5nYCk7XG5cbiAgICAgICAgICAgIHNwYW5zW2kgKyAxXS5hcHBlbmQoaW1nKTtcbiAgICAgICAgICAgIHNwYW5zW2kgKyAxXS5hcHBlbmQocCk7XG5cbiAgICAgICAgICAgIGlmIChpIDwgMikge1xuICAgICAgICAgICAgICAgIGRpdnNbMV0uYXBwZW5kKHNwYW5zW2kgKyAxXSk7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKGkgPCA0KSB7XG4gICAgICAgICAgICAgICAgZGl2c1syXS5hcHBlbmQoc3BhbnNbaSArIDFdKTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoaSA8IDYpIHtcbiAgICAgICAgICAgICAgICBkaXZzWzNdLmFwcGVuZChzcGFuc1tpICsgMV0pO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBkaXZzWzRdLmFwcGVuZChzcGFuc1tpICsgMV0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgZm9yIChsZXQgaSA9IDE7IGkgPD0gNDsgaSsrKSB7XG4gICAgICAgICAgICBjb250ZW50RGl2LmFwcGVuZChkaXZzW2ldKTtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgcmV0dXJuIGNvbnRlbnREaXY7XG4gICAgfVxuXG4gICAgY3JlYXRlVGltZXIoKSB7XG4gICAgICAgIGxldCB0aW1lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBsZXQgbWludXRlcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICAgICAgbGV0IHNlY29uZHMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgICAgIGxldCBjb2xvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICAgICAgdGltZXIuY2xhc3NMaXN0LmFkZCgndGltZXInKTtcbiAgICAgICAgbWludXRlcy5jbGFzc0xpc3QuYWRkKCdtaW51dGVzJyk7XG4gICAgICAgIHNlY29uZHMuY2xhc3NMaXN0LmFkZCgnc2Vjb25kcycpO1xuICAgICAgICBjb2xvbi5jbGFzc0xpc3QuYWRkKCdjb2xvbicpO1xuICAgICAgICBtaW51dGVzLmlubmVySFRNTCA9ICcwJztcbiAgICAgICAgc2Vjb25kcy5pbm5lckhUTUwgPSAnMDAnO1xuICAgICAgICBjb2xvbi5pbm5lckhUTUwgPSAnOic7XG4gICAgICAgIFttaW51dGVzLCBjb2xvbiwgc2Vjb25kc10uZm9yRWFjaChlbGUgPT4gdGltZXIuYXBwZW5kQ2hpbGQoZWxlKSk7XG4gICAgICAgIHJldHVybiB0aW1lcjtcbiAgICB9XG5cbiAgICBcbn0iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBNdWx0aXBsYXllciB7XG4gICAgY29uc3RydWN0b3IocGxheWVyMSwgcGxheWVyMikge1xuICAgICAgICB0aGlzLnBsYXllcjEgPSBwbGF5ZXIxO1xuICAgICAgICB0aGlzLnBsYXllcjIgPSBwbGF5ZXIyO1xuICAgIH1cblxuICAgIHN0YXJ0TXVsdGlwbGF5ZXIoKSB7XG4gICAgICAgIHRoaXMucGxheWVyMS5zZXRPcHBvbmVudCh0aGlzLnBsYXllcjIpO1xuICAgICAgICB0aGlzLnBsYXllcjIuc2V0T3Bwb25lbnQodGhpcy5wbGF5ZXIxKTtcbiAgICAgICAgdGhpcy5wbGF5ZXIxLnBsYXkoKTtcbiAgICAgICAgdGhpcy5wbGF5ZXIyLnBsYXkoKTtcbiAgICB9XG59XG4iLCJpbXBvcnQgUGllY2UgZnJvbSAnLi9waWVjZSc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIElQaWVjZSBleHRlbmRzIFBpZWNlIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgdGhpcy5uYW1lID0gXCJJUGllY2VcIjtcbiAgICAgICAgdGhpcy5wb3NpdGlvbiA9IHtcbiAgICAgICAgICAgIHRvcDogW10sXG4gICAgICAgICAgICBtaWRkbGU6IFtdLFxuICAgICAgICAgICAgYm90dG9tOiBbWzEsIDNdLCBbMSwgNF0sIFsxLCA1XSwgWzEsIDZdXVxuICAgICAgICB9O1xuICAgICAgICB0aGlzLmNvbG9yQ29kZSA9IDI7XG4gICAgICAgIHRoaXMudHVybmluZ1BvaW50ID0gWzEsIDRdO1xuICAgICAgICB0aGlzLmRpc3BsYXlTcXVhcmVzID0gW1swLCAyXSwgWzEsIDJdLCBbMiwgMl0sIFszLCAyXV07XG5cbiAgICAgICAgdGhpcy5yZW1vdmVTcXVhcmVzID0gW107XG5cbiAgICAgICAgdGhpcy5vZmZzZXRHdWlkZSA9IHtcbiAgICAgICAgICAgIDA6IFtbMCwgMF0sIFswLCAtMV0sIFswLCAyXSwgWzAsIC0xXSwgWzAsIDJdXSxcbiAgICAgICAgICAgIDE6IFtbMCwgLTFdLCBbMCwgMF0sIFswLCAwXSwgWzEsIDBdLCBbLTIsIDBdXSxcbiAgICAgICAgICAgIDI6IFtbMSwgLTFdLCBbMSwgMV0sIFsxLCAtMl0sIFswLCAxXSwgWzAsIC0yXV0sXG4gICAgICAgICAgICAzOiBbWzEsIDBdLCBbMSwgMF0sIFsxLCAwXSwgWy0xLCAwXSwgWzIsIDBdXVxuICAgICAgICB9XG4gICAgfVxuXG5cbn1cblxuXG4iLCJpbXBvcnQgUGllY2UgZnJvbSAnLi9waWVjZSc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIGpQaWVjZSBleHRlbmRzIFBpZWNlIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgdGhpcy5uYW1lID0gXCJKUGllY2VcIjtcbiAgICAgICAgdGhpcy5wb3NpdGlvbiA9IHtcbiAgICAgICAgICAgIHRvcDogW1swLCAzXV0sXG4gICAgICAgICAgICBtaWRkbGU6IFtdLFxuICAgICAgICAgICAgYm90dG9tOiBbWzEsIDNdLCBbMSwgNF0sIFsxLCA1XV1cbiAgICAgICAgfTtcbiAgICAgICAgdGhpcy5jb2xvckNvZGUgPSA3O1xuXG4gICAgICAgIHRoaXMudHVybmluZ1BvaW50ID0gWzEsIDRdO1xuXG4gICAgICAgIHRoaXMuZGlzcGxheVNxdWFyZXMgPSBbWzEsIDFdLCBbMSwgMl0sIFsyLCAyXSwgWzMsIDJdXTtcbiBcbiAgICAgICAgdGhpcy5yZW1vdmVTcXVhcmVzID0gW107XG4gICAgfVxufSIsImltcG9ydCBQaWVjZSBmcm9tICcuL3BpZWNlJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgbFBpZWNlIGV4dGVuZHMgUGllY2Uge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICB0aGlzLm5hbWUgPSBcIkxQaWVjZVwiO1xuICAgICAgICB0aGlzLnBvc2l0aW9uID0ge1xuICAgICAgICAgICAgdG9wOiBbWzAsIDVdXSxcbiAgICAgICAgICAgIG1pZGRsZTogW10sXG4gICAgICAgICAgICBib3R0b206IFtbMSwgM10sIFsxLCA0XSwgWzEsIDVdXVxuICAgICAgICB9O1xuICAgICAgICB0aGlzLmNvbG9yQ29kZSA9IDY7XG5cbiAgICAgICAgdGhpcy50dXJuaW5nUG9pbnQgPSBbMSwgNF07XG5cbiAgICAgICAgdGhpcy5kaXNwbGF5U3F1YXJlcyA9IFtbMSwgMl0sIFsyLCAyXSwgWzMsIDJdLCBbMywgMV1dO1xuXG4gICAgICAgIHRoaXMucmVtb3ZlU3F1YXJlcyA9IFtdO1xuICAgIH1cbn0iLCJpbXBvcnQgUGllY2UgZnJvbSAnLi9waWVjZSc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE9QaWVjZSBleHRlbmRzIFBpZWNlIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgdGhpcy5uYW1lID0gXCJPUGllY2VcIjtcbiAgICAgICAgdGhpcy5wb3NpdGlvbiA9IHtcbiAgICAgICAgICAgIHRvcDogW1swLCA0XSwgWzAsIDVdXSxcbiAgICAgICAgICAgIG1pZGRsZTogW10sXG4gICAgICAgICAgICBib3R0b206IFtbMSwgNF0sWzEsIDVdXVxuICAgICAgICB9O1xuICAgICAgICB0aGlzLmNvbG9yQ29kZSA9IDE7XG4gICAgICAgIHRoaXMudHVybmluZ1BvaW50ID0gWzEsIDRdO1xuICAgICAgICB0aGlzLmRpc3BsYXlTcXVhcmVzID0gW1sxLCAxXSwgWzIsIDFdLCBbMSwgMl0sIFsyLCAyXV07XG5cbiAgICAgICAgdGhpcy5yZW1vdmVTcXVhcmVzID0gW107XG4gICAgfVxuXG4gICAgLy8gT1BpZWNlIGRvZXMgbm90IHR1cm5cbiAgICB0dXJuUmlnaHQoKSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgXG4gICAgdHVybkxlZnQoKSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG59ICIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIFBpZWNlIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5sZWZ0TW9zdCA9ICcnO1xuICAgICAgICB0aGlzLnJpZ2h0TW9zdCA9ICcnO1xuICAgICAgICB0aGlzLmJvdHRvbU1vc3QgPSAnJztcbiAgICAgICAgdGhpcy50b3BNb3N0ID0gJyc7XG5cbiAgICAgICAgdGhpcy5yb3RhdGlvblN0YXRlID0gMDtcblxuICAgICAgICB0aGlzLm9mZnNldEd1aWRlID0ge1xuICAgICAgICAgICAgMDogW1swLCAwXSwgWzAsIDBdLCBbMCwgMF0sIFswLCAwXSwgWzAsIDBdXSxcbiAgICAgICAgICAgIDE6IFtbMCwgMF0sIFswLCAxXSwgWy0xLCAxXSwgWzIsIDBdLCBbMiwgMV1dLFxuICAgICAgICAgICAgMjogW1swLCAwXSwgWzAsIDBdLCBbMCwgMF0sIFswLCAwXSwgWzAsIDBdXSxcbiAgICAgICAgICAgIDM6IFtbMCwgMF0sIFswLCAtMV0sIFstMSwgLTFdLCBbMiwgMF0sIFsyLCAtMV1dXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBzZXRPdXRlclNxdWFyZXMoKSB7XG4gICAgICAgIGxldCBsZWZ0TW9zdCwgcmlnaHRNb3N0LCB0b3BNb3N0LCBib3R0b21Nb3N0O1xuICAgICAgICBPYmplY3QudmFsdWVzKHRoaXMucG9zaXRpb24pLmZvckVhY2goY29vcmRpbmF0ZXNBcnJheSA9PiBjb29yZGluYXRlc0FycmF5LmZvckVhY2goYXJyYXkgPT4ge1xuICAgICAgICAgICAgbGV0IGNvbHVtblZhbHVlID0gYXJyYXlbMV07XG4gICAgICAgICAgICBsZXQgcm93VmFsdWUgPSBhcnJheVswXTtcbiAgICAgICAgICAgIGlmICghbGVmdE1vc3QgfHwgY29sdW1uVmFsdWUgPCBsZWZ0TW9zdFsxXSkgbGVmdE1vc3QgPSBbcm93VmFsdWUsIGNvbHVtblZhbHVlXTtcbiAgICAgICAgICAgIGlmICghcmlnaHRNb3N0IHx8IGNvbHVtblZhbHVlID4gcmlnaHRNb3N0WzFdKSByaWdodE1vc3QgPSBbcm93VmFsdWUsIGNvbHVtblZhbHVlXTtcbiAgICAgICAgICAgIGlmICghYm90dG9tTW9zdCB8fCByb3dWYWx1ZSA+IGJvdHRvbU1vc3RbMF0pIGJvdHRvbU1vc3QgPSBbcm93VmFsdWUsIGNvbHVtblZhbHVlXTtcbiAgICAgICAgICAgIGlmICghdG9wTW9zdCB8fCByb3dWYWx1ZSA8IHRvcE1vc3RbMF0pIHRvcE1vc3QgPSBbcm93VmFsdWUsIGNvbHVtblZhbHVlXTtcbiAgICAgICAgfSkpO1xuICAgICAgICB0aGlzLmxlZnRNb3N0ID0gbGVmdE1vc3Q7XG4gICAgICAgIHRoaXMucmlnaHRNb3N0ID0gcmlnaHRNb3N0O1xuICAgICAgICB0aGlzLnRvcE1vc3QgPSB0b3BNb3N0O1xuICAgICAgICB0aGlzLmJvdHRvbU1vc3QgPSBib3R0b21Nb3N0O1xuICAgIH1cblxuICAgIHBvcHVsYXRlRmllbGQoZmllbGQpIHtcbiAgICAgICAgbGV0IGNvb3JkaW5hdGVBcnJheXMgPSBPYmplY3QudmFsdWVzKHRoaXMucG9zaXRpb24pO1xuXG4gICAgICAgIGNvb3JkaW5hdGVBcnJheXMuZm9yRWFjaChhcnJheSA9PiB7XG4gICAgICAgICAgICBhcnJheS5mb3JFYWNoKGNvb3JkaW5hdGUgPT4ge1xuICAgICAgICAgICAgICAgIGxldCBbcm93LCBjb2xdID0gW2Nvb3JkaW5hdGVbMF0sIGNvb3JkaW5hdGVbMV1dO1xuICAgICAgICAgICAgICAgIGlmICgoY29sID49IDAgJiYgY29sIDw9IDE5KSAmJiAocm93ID49IDAgJiYgcm93IDw9IDE5KSkgZmllbGRbcm93XVtjb2xdID0gdGhpcy5jb2xvckNvZGU7XG4gICAgICAgICAgICB9KVxuICAgICAgICB9KTtcblxuICAgICAgICB0aGlzLnJlbW92ZVNxdWFyZXMuZm9yRWFjaChwb3NpdGlvbkFycmF5ID0+IHtcbiAgICAgICAgICAgIGxldCBbcm93LCBjb2xdID0gW3Bvc2l0aW9uQXJyYXlbMF0sIHBvc2l0aW9uQXJyYXlbMV1dO1xuICAgICAgICAgICAgaWYgKChjb2wgPj0gMCAmJiBjb2wgPD0gMTkpICYmIChyb3cgPj0gMCAmJiByb3cgPD0gMTkpKSBmaWVsZFtyb3ddW2NvbF0gPSAwO1xuICAgICAgICB9KTtcblxuICAgIH1cblxuICAgIC8vIGNvbXBhcmVzIHR3byBhcnJheXMgb2YgY29vcmRpbmF0ZXMgYW5kIGNoZWNrIGlmIHRoZXkgaGF2ZSB0aGUgc2FtZSBjb250ZW50IGluIHRoZSBzYW1lIG9yZGVyXG4gICAgX3NxdWFyZXNBcmVFcXVhbChvbGRTcXVhcmUsIG5ld1NxdWFyZSkge1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IG9sZFNxdWFyZS5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgaWYgKG9sZFNxdWFyZVtpXSAhPT0gbmV3U3F1YXJlW2ldKSByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuXG4gICAgX2luY2x1ZGVzKHNxdWFyZSwgY29vcmRpbmF0ZUFycmF5cykge1xuICAgICAgICBsZXQgcmVzdWx0ID0gZmFsc2U7XG4gICAgICAgIGNvb3JkaW5hdGVBcnJheXMuZm9yRWFjaChhcnJheSA9PiB7XG4gICAgICAgICAgICBpZiAodGhpcy5fc3F1YXJlc0FyZUVxdWFsKHNxdWFyZSwgYXJyYXkpKSB7XG4gICAgICAgICAgICAgICAgcmVzdWx0ID0gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxuXG4gICAgZHJvcCgpIHtcbiAgICAgICAgbGV0IG9sZFBvc2l0aW9uID0ge1xuICAgICAgICAgICAgdG9wOiB0aGlzLnBvc2l0aW9uLnRvcC5tYXAoYXJyYXkgPT4gYXJyYXkuc2xpY2UoKSksXG4gICAgICAgICAgICBtaWRkbGU6IHRoaXMucG9zaXRpb24ubWlkZGxlLm1hcChhcnJheSA9PiBhcnJheS5zbGljZSgpKSxcbiAgICAgICAgICAgIGJvdHRvbTogdGhpcy5wb3NpdGlvbi5ib3R0b20ubWFwKGFycmF5ID0+IGFycmF5LnNsaWNlKCkpLFxuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5wb3NpdGlvbi50b3AgPSB0aGlzLnBvc2l0aW9uLnRvcC5tYXAoYXJyYXkgPT4gW2FycmF5WzBdICsgMSwgYXJyYXlbMV1dKTtcbiAgICAgICAgdGhpcy5wb3NpdGlvbi5taWRkbGUgPSB0aGlzLnBvc2l0aW9uLm1pZGRsZS5tYXAoYXJyYXkgPT4gW2FycmF5WzBdICsgMSwgYXJyYXlbMV1dKTtcbiAgICAgICAgdGhpcy5wb3NpdGlvbi5ib3R0b20gPSB0aGlzLnBvc2l0aW9uLmJvdHRvbS5tYXAoYXJyYXkgPT4gW2FycmF5WzBdICsgMSwgYXJyYXlbMV1dKTtcbiAgICAgICAgdGhpcy50dXJuaW5nUG9pbnQgPSBbdGhpcy50dXJuaW5nUG9pbnRbMF0gKyAxLCB0aGlzLnR1cm5pbmdQb2ludFsxXV07XG5cbiAgICAgICAgdGhpcy5zZXRSZW1vdmVTcXVhcmVzKG9sZFBvc2l0aW9uKTtcbiAgICB9XG5cbiAgICAvLyBmaW5kIGhpZ2hlc3QgcG9zc2libGUgZ3JvdW5kLXBvc2l0aW9uIGZvciBwaWVjZVxuICAgIGhhcmREcm9wKGZpZWxkKSB7XG4gICAgICAgIHRoaXMuY2xlYXJTZWxmRnJvbUJvYXJkKGZpZWxkKTtcbiAgICAgICAgbGV0IHN0b3BwZWQgPSBmYWxzZTtcbiAgICAgICAgd2hpbGUgKCFzdG9wcGVkKSB7XG4gICAgICAgICAgICBsZXQgaGFuZ2luZ1NxdWFyZXMgPSB0aGlzLmhhbmdpbmdTcXVhcmVzKHRoaXMucG9zaXRpb24pO1xuICAgICAgICAgICAgaGFuZ2luZ1NxdWFyZXMuZm9yRWFjaChjb29yZGluYXRlID0+IHtcbiAgICAgICAgICAgICAgICBsZXQgW3JvdywgY29sXSA9IFtjb29yZGluYXRlWzBdLCBjb29yZGluYXRlWzFdXTtcbiAgICAgICAgICAgICAgICBpZiAoKHJvdyArIDEgPT09IDIwIHx8IGZpZWxkW3JvdyArIDFdW2NvbF0pKSBzdG9wcGVkID0gdHJ1ZTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgaWYgKHN0b3BwZWQpIGJyZWFrO1xuICAgICAgICAgICAgdGhpcy5wb3NpdGlvbi50b3AgPSB0aGlzLnBvc2l0aW9uLnRvcC5tYXAoYXJyYXkgPT4gW2FycmF5WzBdICsgMSwgYXJyYXlbMV1dKTtcbiAgICAgICAgICAgIHRoaXMucG9zaXRpb24ubWlkZGxlID0gdGhpcy5wb3NpdGlvbi5taWRkbGUubWFwKGFycmF5ID0+IFthcnJheVswXSArIDEsIGFycmF5WzFdXSk7XG4gICAgICAgICAgICB0aGlzLnBvc2l0aW9uLmJvdHRvbSA9IHRoaXMucG9zaXRpb24uYm90dG9tLm1hcChhcnJheSA9PiBbYXJyYXlbMF0gKyAxLCBhcnJheVsxXV0pO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgY2xlYXJTZWxmRnJvbUJvYXJkKGZpZWxkKSB7XG4gICAgICAgIE9iamVjdC52YWx1ZXModGhpcy5wb3NpdGlvbikuZm9yRWFjaChjb29yZGluYXRlQXJyYXlzID0+IGNvb3JkaW5hdGVBcnJheXMuZm9yRWFjaChjb29yZGluYXRlID0+IHtcbiAgICAgICAgICAgIGxldCByb3cgPSBjb29yZGluYXRlWzBdO1xuICAgICAgICAgICAgbGV0IGNvbCA9IGNvb3JkaW5hdGVbMV07XG4gICAgICAgICAgICBpZiAocm93IDwgMjAgJiYgcm93ID49IDAgJiYgY29sID49IDAgJiYgY29sIDwgMTApIGZpZWxkW3Jvd11bY29sXSA9IDA7XG4gICAgICAgIH0pKTtcbiAgICB9XG5cbiAgICBtb3ZlKGRpcmVjdGlvbiwgZmllbGQpIHtcbiAgICAgICAgbGV0IHRTcGluID0gZmFsc2U7XG4gICAgICAgIGxldCBvbGRQb3NpdGlvbiA9IHtcbiAgICAgICAgICAgIHRvcDogdGhpcy5wb3NpdGlvbi50b3AubWFwKGFycmF5ID0+IGFycmF5LnNsaWNlKCkpLFxuICAgICAgICAgICAgbWlkZGxlOiB0aGlzLnBvc2l0aW9uLm1pZGRsZS5tYXAoYXJyYXkgPT4gYXJyYXkuc2xpY2UoKSksXG4gICAgICAgICAgICBib3R0b206IHRoaXMucG9zaXRpb24uYm90dG9tLm1hcChhcnJheSA9PiBhcnJheS5zbGljZSgpKSxcbiAgICAgICAgfVxuICAgICAgICBzd2l0Y2ggKGRpcmVjdGlvbikge1xuICAgICAgICAgICAgY2FzZSBcImxlZnRcIjpcbiAgICAgICAgICAgICAgICB0aGlzLnBvc2l0aW9uLnRvcCA9IHRoaXMucG9zaXRpb24udG9wLm1hcChhcnJheSA9PiBbYXJyYXlbMF0sIGFycmF5WzFdIC0gMV0pO1xuICAgICAgICAgICAgICAgIHRoaXMucG9zaXRpb24ubWlkZGxlID0gdGhpcy5wb3NpdGlvbi5taWRkbGUubWFwKGFycmF5ID0+IFthcnJheVswXSwgYXJyYXlbMV0gLSAxXSk7XG4gICAgICAgICAgICAgICAgdGhpcy5wb3NpdGlvbi5ib3R0b20gPSB0aGlzLnBvc2l0aW9uLmJvdHRvbS5tYXAoYXJyYXkgPT4gW2FycmF5WzBdLCBhcnJheVsxXSAtIDFdKTtcbiAgICAgICAgICAgICAgICB0aGlzLnR1cm5pbmdQb2ludCA9IFt0aGlzLnR1cm5pbmdQb2ludFswXSwgdGhpcy50dXJuaW5nUG9pbnRbMV0gLSAxXTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgXCJ0dXJuUmlnaHRcIjpcbiAgICAgICAgICAgICAgICAvLyBkZWZlciB0byBcInR1cm5cIiBtZXRob2RcbiAgICAgICAgICAgICAgICAvLyB0U3BpbiB3aWxsIGVpdGhlciBiZSB0cnV0aHkgb3IgZmFsc3ksIHRyYWNrZWQgZm9yIHNlbmRpbmcgbW9yZSBsaW5lcyBkdXJpbmcgbXVsdGlwbGF5ZXJcbiAgICAgICAgICAgICAgICB0U3BpbiA9IHRoaXMudHVyblJpZ2h0KGZpZWxkLCBvbGRQb3NpdGlvbik7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIFwicmlnaHRcIjpcbiAgICAgICAgICAgICAgICB0aGlzLnBvc2l0aW9uLnRvcCA9IHRoaXMucG9zaXRpb24udG9wLm1hcChhcnJheSA9PiBbYXJyYXlbMF0sIGFycmF5WzFdICsgMV0pO1xuICAgICAgICAgICAgICAgIHRoaXMucG9zaXRpb24ubWlkZGxlID0gdGhpcy5wb3NpdGlvbi5taWRkbGUubWFwKGFycmF5ID0+IFthcnJheVswXSwgYXJyYXlbMV0gKyAxXSk7XG4gICAgICAgICAgICAgICAgdGhpcy5wb3NpdGlvbi5ib3R0b20gPSB0aGlzLnBvc2l0aW9uLmJvdHRvbS5tYXAoYXJyYXkgPT4gW2FycmF5WzBdLCBhcnJheVsxXSArIDFdKTtcbiAgICAgICAgICAgICAgICB0aGlzLnR1cm5pbmdQb2ludCA9IFt0aGlzLnR1cm5pbmdQb2ludFswXSwgdGhpcy50dXJuaW5nUG9pbnRbMV0gKyAxXTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgXCJkb3duXCI6XG4gICAgICAgICAgICAgICAgdGhpcy5wb3NpdGlvbi50b3AgPSB0aGlzLnBvc2l0aW9uLnRvcC5tYXAoYXJyYXkgPT4gW2FycmF5WzBdICsgMSwgYXJyYXlbMV1dKTtcbiAgICAgICAgICAgICAgICB0aGlzLnBvc2l0aW9uLm1pZGRsZSA9IHRoaXMucG9zaXRpb24ubWlkZGxlLm1hcChhcnJheSA9PiBbYXJyYXlbMF0gKyAxLCBhcnJheVsxXV0pO1xuICAgICAgICAgICAgICAgIHRoaXMucG9zaXRpb24uYm90dG9tID0gdGhpcy5wb3NpdGlvbi5ib3R0b20ubWFwKGFycmF5ID0+IFthcnJheVswXSArIDEsIGFycmF5WzFdXSk7XG4gICAgICAgICAgICAgICAgdGhpcy50dXJuaW5nUG9pbnQgPSBbdGhpcy50dXJuaW5nUG9pbnRbMF0gKyAxLCB0aGlzLnR1cm5pbmdQb2ludFsxXV07XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIFwidXBcIjpcbiAgICAgICAgICAgICAgICB0aGlzLnBvc2l0aW9uLnRvcCA9IHRoaXMucG9zaXRpb24udG9wLm1hcChhcnJheSA9PiBbYXJyYXlbMF0gLSAxLCBhcnJheVsxXV0pO1xuICAgICAgICAgICAgICAgIHRoaXMucG9zaXRpb24ubWlkZGxlID0gdGhpcy5wb3NpdGlvbi5taWRkbGUubWFwKGFycmF5ID0+IFthcnJheVswXSAtIDEsIGFycmF5WzFdXSk7XG4gICAgICAgICAgICAgICAgdGhpcy5wb3NpdGlvbi5ib3R0b20gPSB0aGlzLnBvc2l0aW9uLmJvdHRvbS5tYXAoYXJyYXkgPT4gW2FycmF5WzBdIC0gMSwgYXJyYXlbMV1dKTtcbiAgICAgICAgICAgICAgICB0aGlzLnR1cm5pbmdQb2ludCA9IFt0aGlzLnR1cm5pbmdQb2ludFswXSAtIDEsIHRoaXMudHVybmluZ1BvaW50WzFdXTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgXCJ0dXJuTGVmdFwiOlxuICAgICAgICAgICAgICAgIHRoaXMudHVybkxlZnQoZmllbGQsIG9sZFBvc2l0aW9uKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnNldE91dGVyU3F1YXJlcygpO1xuICAgICAgICB0aGlzLnNldFJlbW92ZVNxdWFyZXMob2xkUG9zaXRpb24sIGZpZWxkKTtcbiAgICAgICAgcmV0dXJuIHRTcGluO1xuICAgIH1cblxuICAgIHR1cm5SaWdodChmaWVsZCwgb2xkUG9zaXRpb24pIHtcbiAgICAgICAgLy8gY2xlYXIgZnJvbSBmaWVsZCBmaXJzdCBzbyB0aGF0IHRoZSBwaWVjZSBkb2Vzbid0IHNlZSBpdHNlbGYgYXMgYSBjb25mbGljdGluZyBwaWVjZVxuICAgICAgICB0aGlzLmNsZWFyU2VsZkZyb21Cb2FyZChmaWVsZCk7XG4gICAgICAgIGxldCBzcXVhcmVzID0gW107XG4gICAgICAgIE9iamVjdC52YWx1ZXModGhpcy5wb3NpdGlvbikuZm9yRWFjaChjb29yZGluYXRlc0FycmF5ID0+IHNxdWFyZXMucHVzaCguLi5jb29yZGluYXRlc0FycmF5KSk7XG4gICAgICAgIHRoaXMucG9zaXRpb24udG9wID0gW107XG4gICAgICAgIHRoaXMucG9zaXRpb24ubWlkZGxlID0gW107XG4gICAgICAgIHRoaXMucG9zaXRpb24uYm90dG9tID0gW107XG4gICAgICAgIHNxdWFyZXMuZm9yRWFjaChzcXVhcmUgPT4ge1xuICAgICAgICAgICAgbGV0IGNvbHVtbiA9IHNxdWFyZVsxXTtcbiAgICAgICAgICAgIGxldCBoZWlnaHREaWZmZXJlbmNlID0gdGhpcy50dXJuaW5nUG9pbnRbMF0gLSBzcXVhcmVbMF07XG4gICAgICAgICAgICBsZXQgd2lkdGhEaWZmZXJlbmNlID0gdGhpcy50dXJuaW5nUG9pbnRbMV0gLSBzcXVhcmVbMV07XG4gICAgICAgICAgICBsZXQgbmV3Q29sID0gdGhpcy50dXJuaW5nUG9pbnRbMV0gKyBoZWlnaHREaWZmZXJlbmNlO1xuICAgICAgICAgICAgbGV0IG5ld1JvdyA9IHRoaXMudHVybmluZ1BvaW50WzBdICsgKHdpZHRoRGlmZmVyZW5jZSAqIC0xKTtcbiAgICAgICAgICAgIHN3aXRjaCAoY29sdW1uKSB7XG4gICAgICAgICAgICAgICAgY2FzZSBjb2x1bW4gPSB0aGlzLnJpZ2h0TW9zdFsxXTpcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wb3NpdGlvbi5ib3R0b20ucHVzaChbbmV3Um93LCBuZXdDb2xdKTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSBjb2x1bW4gPSB0aGlzLmxlZnRNb3N0WzFdOlxuICAgICAgICAgICAgICAgICAgICB0aGlzLnBvc2l0aW9uLnRvcC5wdXNoKFtuZXdSb3csIG5ld0NvbF0pO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgICAgICB0aGlzLnBvc2l0aW9uLm1pZGRsZS5wdXNoKFtuZXdSb3csIG5ld0NvbF0pO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMuc2V0UmVtb3ZlU3F1YXJlcyhvbGRQb3NpdGlvbik7XG5cbiAgICAgICAgLy8gZmluZCBvdXRlci1tb3N0IHNxdWFyZXMgdG8gc2VlIGlmIHBpZWNlIGlzIG9ic3RydWN0ZWRcbiAgICAgICAgLy8gaWYgc28sIHB1c2ggcGllY2UgYmFjayBpbnRvIGZpZWxkXG4gICAgICAgIHRoaXMuc2V0T3V0ZXJTcXVhcmVzKCk7XG5cbiAgICAgICAgLy8gcmVzZXQgcm90YXRpb24gc3RhdGUsIHdoaWNoIGlzIHRyYWNrZWQgZm9yIGltcGxlbWVudGluZyBzdXBlciByb3RhdGlvbiBzeXN0ZW1cbiAgICAgICAgdGhpcy5yb3RhdGlvblN0YXRlID0gdGhpcy5yb3RhdGlvblN0YXRlID09PSAzID8gMCA6IHRoaXMucm90YXRpb25TdGF0ZSArIDE7XG5cbiAgICAgICAgbGV0IG5ld1NxdWFyZXMgPSBbLi4udGhpcy5wb3NpdGlvbi50b3AsIC4uLnRoaXMucG9zaXRpb24ubWlkZGxlLCAuLi50aGlzLnBvc2l0aW9uLmJvdHRvbV07XG4gICAgICAgIGZvciAobGV0IGkgaW4gbmV3U3F1YXJlcykge1xuICAgICAgICAgICAgbGV0IFtyb3csIGNvbF0gPSBbbmV3U3F1YXJlc1tpXVswXSwgbmV3U3F1YXJlc1tpXVsxXV07XG4gICAgICAgICAgICBpZiAoZmllbGRbcm93XSA9PT0gdW5kZWZpbmVkIHx8IGZpZWxkW3Jvd11bY29sXSA9PT0gdW5kZWZpbmVkIHx8IGZpZWxkW3Jvd11bY29sXSkge1xuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLndhbGxLaWNrKGZpZWxkLCBcInR1cm5SaWdodFwiKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIHR1cm5MZWZ0KGZpZWxkLCBvbGRQb3NpdGlvbikge1xuICAgICAgICB0aGlzLmNsZWFyU2VsZkZyb21Cb2FyZChmaWVsZCk7XG4gICAgICAgIGxldCBzcXVhcmVzID0gW107XG4gICAgICAgIE9iamVjdC52YWx1ZXModGhpcy5wb3NpdGlvbikuZm9yRWFjaChjb29yZGluYXRlc0FycmF5ID0+IHNxdWFyZXMucHVzaCguLi5jb29yZGluYXRlc0FycmF5KSk7XG4gICAgICAgIHRoaXMucG9zaXRpb24udG9wID0gW107XG4gICAgICAgIHRoaXMucG9zaXRpb24ubWlkZGxlID0gW107XG4gICAgICAgIHRoaXMucG9zaXRpb24uYm90dG9tID0gW107XG4gICAgICAgIHNxdWFyZXMuZm9yRWFjaChzcXVhcmUgPT4ge1xuICAgICAgICAgICAgbGV0IGNvbHVtbiA9IHNxdWFyZVsxXTtcbiAgICAgICAgICAgIGxldCBoZWlnaHREaWZmZXJlbmNlID0gdGhpcy50dXJuaW5nUG9pbnRbMF0gLSBzcXVhcmVbMF07XG4gICAgICAgICAgICBsZXQgd2lkdGhEaWZmZXJlbmNlID0gdGhpcy50dXJuaW5nUG9pbnRbMV0gLSBzcXVhcmVbMV07XG4gICAgICAgICAgICBsZXQgbmV3Q29sID0gdGhpcy50dXJuaW5nUG9pbnRbMV0gLSBoZWlnaHREaWZmZXJlbmNlO1xuICAgICAgICAgICAgbGV0IG5ld1JvdyA9IHRoaXMudHVybmluZ1BvaW50WzBdIC0gKHdpZHRoRGlmZmVyZW5jZSAqIC0xKTtcbiAgICAgICAgICAgIHN3aXRjaCAoY29sdW1uKSB7XG4gICAgICAgICAgICAgICAgY2FzZSBjb2x1bW4gPSB0aGlzLnJpZ2h0TW9zdFsxXTpcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wb3NpdGlvbi50b3AucHVzaChbbmV3Um93LCBuZXdDb2xdKTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSBjb2x1bW4gPSB0aGlzLmxlZnRNb3N0WzFdOlxuICAgICAgICAgICAgICAgICAgICB0aGlzLnBvc2l0aW9uLmJvdHRvbS5wdXNoKFtuZXdSb3csIG5ld0NvbF0pO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgICAgICB0aGlzLnBvc2l0aW9uLm1pZGRsZS5wdXNoKFtuZXdSb3csIG5ld0NvbF0pO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICAgICAgdGhpcy5zZXRSZW1vdmVTcXVhcmVzKG9sZFBvc2l0aW9uKTtcblxuICAgICAgICAvLyBmaW5kIGxlZnQgYW5kIHJpZ2h0IG1vc3Qgc3F1YXJlcyB0byBzZWUgaWYgcGllY2UgdGhyb3VnaCB3YWxsXG4gICAgICAgIC8vIGlmIHRocm91Z2ggd2FsbCwgcHVzaCBwaWVjZSBiYWNrIGludG8gZmllbGRcbiAgICAgICAgdGhpcy5zZXRPdXRlclNxdWFyZXMoKTtcblxuICAgICAgICAvLyByZXNldCByb3RhdGlvbiBzdGF0ZSwgd2hpY2ggaXMgdHJhY2tlZCBmb3IgaW1wbGVtZW50aW5nIHN1cGVyIHJvdGF0aW9uIHN5c3RlbVxuICAgICAgICB0aGlzLnJvdGF0aW9uU3RhdGUgPSB0aGlzLnJvdGF0aW9uU3RhdGUgPT09IDAgPyAzIDogdGhpcy5yb3RhdGlvblN0YXRlIC0gMTtcblxuICAgICAgICBsZXQgbmV3U3F1YXJlcyA9IFsuLi50aGlzLnBvc2l0aW9uLnRvcCwgLi4udGhpcy5wb3NpdGlvbi5taWRkbGUsIC4uLnRoaXMucG9zaXRpb24uYm90dG9tXTtcbiAgICAgICAgZm9yIChsZXQgaSBpbiBuZXdTcXVhcmVzKSB7XG4gICAgICAgICAgICBsZXQgW3JvdywgY29sXSA9IFtuZXdTcXVhcmVzW2ldWzBdLCBuZXdTcXVhcmVzW2ldWzFdXTtcbiAgICAgICAgICAgIGlmIChmaWVsZFtyb3ddID09PSB1bmRlZmluZWQgfHwgZmllbGRbcm93XVtjb2xdID09PSB1bmRlZmluZWQgfHwgZmllbGRbcm93XVtjb2xdKSB7XG4gICAgICAgICAgICAgICAgdGhpcy53YWxsS2ljayhmaWVsZCwgXCJ0dXJuTGVmdFwiKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgfVxuXG4gICAgLy8gY29tcGFyZSBvbGQgcG9zaXRpb24gb2YgcGllY2Ugd2l0aCBuZXcgcG9zaXRpb24gXG4gICAgc2V0UmVtb3ZlU3F1YXJlcyhvbGRQb3NpdGlvbiwgZmllbGQpIHtcbiAgICAgICAgbGV0IG9sZFNxdWFyZXMgPSBbXTtcbiAgICAgICAgbGV0IG5ld1NxdWFyZXMgPSBbXTtcbiAgICAgICAgT2JqZWN0LnZhbHVlcyhvbGRQb3NpdGlvbikuZm9yRWFjaChjb29yZGluYXRlc0FycmF5ID0+IG9sZFNxdWFyZXMucHVzaCguLi5jb29yZGluYXRlc0FycmF5KSk7XG4gICAgICAgIE9iamVjdC52YWx1ZXModGhpcy5wb3NpdGlvbikuZm9yRWFjaChjb29yZGluYXRlc0FycmF5ID0+IG5ld1NxdWFyZXMucHVzaCguLi5jb29yZGluYXRlc0FycmF5KSk7XG4gICAgICAgIC8vIGtlZXAgdHJhY2sgb2Ygc3F1YXJlcyB0aGF0IHRoZSBwb3NpdGlvbnMgZG8gbm90IGhhdmUgaW4gY29tbW9uIChzcXVhcmVzIHRvIHJlbW92ZSBjb2xvciBmcm9tKVxuICAgICAgICB0aGlzLnJlbW92ZVNxdWFyZXMgPSBvbGRTcXVhcmVzLmZpbHRlcihvbGRTcXVhcmUgPT4ge1xuICAgICAgICAgICAgaWYgKCFmaWVsZCkge1xuICAgICAgICAgICAgICAgIGlmICghdGhpcy5faW5jbHVkZXMob2xkU3F1YXJlLCBuZXdTcXVhcmVzKSkgcmV0dXJuIG9sZFNxdWFyZTtcbiAgICAgICAgICAgIC8vIGlmIGZpZWxkIGFyZ3VtZW50IGlzIHBhc3NlZCwgY2hlY2sgdGhlIGZpZWxkIHRvIG1ha2Ugc3VyZSB0byBub3QgY2xlYXIgc3F1YXJlcyBvZiBvdGhlciBwaWVjZXNcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgaWYgKCF0aGlzLl9pbmNsdWRlcyhvbGRTcXVhcmUsIG5ld1NxdWFyZXMpICYmICFmaWVsZFtvbGRTcXVhcmVbMF1dW29sZFNxdWFyZVsxXV0pIHJldHVybiBvbGRTcXVhcmU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgaGFuZ2luZ1NxdWFyZXMocG9zaXRpb24pIHtcbiAgICAgICAgbGV0IHNxdWFyZXMgPSBbXTtcbiAgICAgICAgbGV0IGhhbmdpbmdTcXVhcmVzID0gW107XG4gICAgICAgIE9iamVjdC52YWx1ZXMocG9zaXRpb24pLmZvckVhY2goY29vcmRpbmF0ZUFycmF5ID0+IHNxdWFyZXMucHVzaCguLi5jb29yZGluYXRlQXJyYXkpKVxuICAgICAgICBzcXVhcmVzLmZvckVhY2goc3F1YXJlID0+IHtcbiAgICAgICAgICAgIGxldCBiZWxvd1NxdWFyZSA9IFtzcXVhcmVbMF0gKyAxLCBzcXVhcmVbMV1dO1xuICAgICAgICAgICAgaWYgKCF0aGlzLl9pbmNsdWRlcyhiZWxvd1NxdWFyZSwgc3F1YXJlcykpIGhhbmdpbmdTcXVhcmVzLnB1c2goc3F1YXJlKTtcbiAgICAgICAgfSlcbiAgICAgICAgcmV0dXJuIGhhbmdpbmdTcXVhcmVzO1xuICAgIH1cblxuICAgIHNpZGVTcXVhcmVzKCkge1xuICAgICAgICBsZXQgc3F1YXJlcyA9IFtdO1xuICAgICAgICBsZXQgc2lkZVNxdWFyZXMgPSB7XG4gICAgICAgICAgICBsZWZ0OiBbXSxcbiAgICAgICAgICAgIHJpZ2h0OiBbXVxuICAgICAgICB9O1xuICAgICAgICBPYmplY3QudmFsdWVzKHRoaXMucG9zaXRpb24pLmZvckVhY2goY29vcmRpbmF0ZUFycmF5ID0+IHNxdWFyZXMucHVzaCguLi5jb29yZGluYXRlQXJyYXkpKTtcbiAgICAgICAgc3F1YXJlcy5mb3JFYWNoKHNxdWFyZSA9PiB7XG4gICAgICAgICAgICBsZXQgYWRqYWNlbnRMZWZ0ID0gW3NxdWFyZVswXSwgc3F1YXJlWzFdIC0gMV07XG4gICAgICAgICAgICBsZXQgYWRqYWNlbnRSaWdodCA9IFtzcXVhcmVbMF0sIHNxdWFyZVsxXSArIDFdO1xuICAgICAgICAgICAgaWYgKCF0aGlzLl9pbmNsdWRlcyhhZGphY2VudExlZnQsIHNxdWFyZXMpKSBzaWRlU3F1YXJlcy5sZWZ0LnB1c2goc3F1YXJlKTtcbiAgICAgICAgICAgIGlmICghdGhpcy5faW5jbHVkZXMoYWRqYWNlbnRSaWdodCwgc3F1YXJlcykpIHNpZGVTcXVhcmVzLnJpZ2h0LnB1c2goc3F1YXJlKTtcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiBzaWRlU3F1YXJlcztcbiAgICB9XG5cbiAgICBpc0ZhbGxpbmcoZmllbGQpIHtcbiAgICAgICAgbGV0IHJlc3VsdCA9IHRydWU7XG4gICAgICAgIHRoaXMuaGFuZ2luZ1NxdWFyZXModGhpcy5wb3NpdGlvbikuZm9yRWFjaChjb29yZGluYXRlUGFpciA9PiB7XG4gICAgICAgICAgICBsZXQgW3JvdywgY29sXSA9IFtjb29yZGluYXRlUGFpclswXSwgY29vcmRpbmF0ZVBhaXJbMV1dO1xuICAgICAgICAgICAgLy8gaWYgdGhlIHBpZWNlJ3MgY3VycmVudCBwb3NpdGlvbiBpcyBhYm92ZSB0aGUgZmllbGQgZmxvb3Igb3IgYSBhbm90aGVyIHBpZWNlIChub3QgaW5jbHVkZSBnaG9zdCBwaWVjZSlcbiAgICAgICAgICAgIGlmICghZmllbGRbcm93ICsgMV0gfHwgKGZpZWxkW3JvdyArIDFdW2NvbF0gJiYgZmllbGRbcm93ICsgMV1bY29sXSAhPT0gXCJ4XCIpKSB7XG4gICAgICAgICAgICAgICAgcmVzdWx0ID0gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cblxuICAgIHJpZ2h0U2lkZUJsb2NrZWQoZmllbGQpIHtcbiAgICAgICAgLy8gaWYgKHRoaXMucG9zaXRpb24udG9wWzBdWzBdIDwgMCkgcmV0dXJuIGZhbHNlO1xuICAgICAgICBsZXQgcmVzdWx0ID0gZmFsc2U7XG4gICAgICAgIHRoaXMuc2lkZVNxdWFyZXMoKS5yaWdodC5mb3JFYWNoKGNvb3JkaW5hdGVQYWlyID0+IHtcbiAgICAgICAgICAgIGxldCBbcm93LCBjb2xdID0gW2Nvb3JkaW5hdGVQYWlyWzBdLCBjb29yZGluYXRlUGFpclsxXV07XG4gICAgICAgICAgICAvLyBpZiBhbnkgcmlnaHQgZmFjaW5nIHNxdWFyZSBoaXRzIHRoZSB3YWxsIG9yIGFub3RoZXIgcGllY2UsIG5vdCBpbmNsdWRpbmcgdGhlIGdob3N0IHBpZWNlXG4gICAgICAgICAgICBpZiAoY29sID09PSA5IHx8IChmaWVsZFtyb3ddICYmIGZpZWxkW3Jvd11bY29sICsgMV0gJiYgZmllbGRbcm93ICsgMV1bY29sXSAhPT0gXCJ4XCIpKSB7XG4gICAgICAgICAgICAgICAgcmVzdWx0ID0gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxuXG4gICAgbGVmdFNpZGVCbG9ja2VkKGZpZWxkKSB7XG4gICAgICAgIC8vIGlmICh0aGlzLnBvc2l0aW9uLnRvcFswXVswXSA8IDApIHJldHVybiBmYWxzZTtcbiAgICAgICAgbGV0IHJlc3VsdCA9IGZhbHNlO1xuICAgICAgICB0aGlzLnNpZGVTcXVhcmVzKCkubGVmdC5mb3JFYWNoKGNvb3JkaW5hdGVQYWlyID0+IHtcbiAgICAgICAgICAgIGxldCBbcm93LCBjb2xdID0gW2Nvb3JkaW5hdGVQYWlyWzBdLCBjb29yZGluYXRlUGFpclsxXV07XG4gICAgICAgICAgICAvLyBpZiBhbnkgbGVmdCBmYWNpbmcgc3F1YXJlIGhpdHMgdGhlIHdhbGwgb3IgYW5vdGhlciBwaWVjZSwgbm90IGluY2x1ZGluZyB0aGUgZ2hvc3QgcGllY2VcbiAgICAgICAgICAgIGlmIChjb2wgPT09IDAgfHwgKGZpZWxkW3Jvd10gJiYgZmllbGRbcm93XVtjb2wgLSAxXSAmJiBmaWVsZFtyb3ddW2NvbCAtIDFdICE9PSBcInhcIikpIHtcbiAgICAgICAgICAgICAgICByZXN1bHQgPSB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG5cbiAgICB3YWxsS2ljayhmaWVsZCwgYWN0aW9uKSB7XG4gICAgICAgIGxldCB2YWxpZFNwb3QsIHN0YXJ0aW5nT2Zmc2V0O1xuICAgICAgICBpZiAoYWN0aW9uID09PSBcInR1cm5SaWdodFwiKSB7XG4gICAgICAgICAgICBzdGFydGluZ09mZnNldCA9IHRoaXMucm90YXRpb25TdGF0ZSA9PT0gMCA/IHRoaXMub2Zmc2V0R3VpZGVbM10gOiB0aGlzLm9mZnNldEd1aWRlW3RoaXMucm90YXRpb25TdGF0ZSAtIDFdO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgc3RhcnRpbmdPZmZzZXQgPSB0aGlzLnJvdGF0aW9uU3RhdGUgPT09IDMgPyB0aGlzLm9mZnNldEd1aWRlWzBdIDogdGhpcy5vZmZzZXRHdWlkZVt0aGlzLnJvdGF0aW9uU3RhdGUgKyAxXTtcbiAgICAgICAgfVxuICAgICAgICBsZXQgbmV4dE9mZnNldCA9IHRoaXMub2Zmc2V0R3VpZGVbdGhpcy5yb3RhdGlvblN0YXRlXTtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCA1OyBpKyspIHtcbiAgICAgICAgICAgIHZhbGlkU3BvdCA9IHRydWU7XG4gICAgICAgICAgICBsZXQgYmFzZVBvc2l0aW9uID0ge1xuICAgICAgICAgICAgICAgIHRvcDogdGhpcy5wb3NpdGlvbi50b3AubWFwKGFycmF5ID0+IGFycmF5LnNsaWNlKCkpLFxuICAgICAgICAgICAgICAgIG1pZGRsZTogdGhpcy5wb3NpdGlvbi5taWRkbGUubWFwKGFycmF5ID0+IGFycmF5LnNsaWNlKCkpLFxuICAgICAgICAgICAgICAgIGJvdHRvbTogdGhpcy5wb3NpdGlvbi5ib3R0b20ubWFwKGFycmF5ID0+IGFycmF5LnNsaWNlKCkpLFxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgbGV0IGJhc2VUdXJuaW5nUG9pbnQgPSB0aGlzLnR1cm5pbmdQb2ludC5zbGljZSgpO1xuXG4gICAgICAgICAgICBsZXQgc3RhcnRpbmdUcmFuc2xhdGlvbiA9IHN0YXJ0aW5nT2Zmc2V0W2ldO1xuICAgICAgICAgICAgbGV0IHBvdGVudGlhbFRyYW5zbGF0aW9uID0gbmV4dE9mZnNldFtpXTtcbiAgICAgICAgICAgIGxldCByb3dTaGlmdCA9IHN0YXJ0aW5nVHJhbnNsYXRpb25bMF0gLSBwb3RlbnRpYWxUcmFuc2xhdGlvblswXTtcbiAgICAgICAgICAgIGxldCBjb2xTaGlmdCA9IHN0YXJ0aW5nVHJhbnNsYXRpb25bMV0gLSBwb3RlbnRpYWxUcmFuc2xhdGlvblsxXTtcbiAgICAgICAgICAgIGxldCB0cmFuc2xhdGVWZXJ0aWNhbCA9IHJvd1NoaWZ0ID4gMCA/ICgpID0+IHRoaXMubW92ZShcInVwXCIpIDogKCkgPT4gdGhpcy5tb3ZlKFwiZG93blwiKTtcbiAgICAgICAgICAgIGxldCB0cmFuc2xhdGVIb3Jpem9udGFsID0gY29sU2hpZnQgPiAwID8gKCkgPT4gdGhpcy5tb3ZlKFwicmlnaHRcIikgOiAoKSA9PiB0aGlzLm1vdmUoXCJsZWZ0XCIpO1xuICAgICAgICAgICAgZm9yIChsZXQgbnVtVGltZXNSb3dTaGlmdGVkID0gMDsgbnVtVGltZXNSb3dTaGlmdGVkIDwgTWF0aC5hYnMocm93U2hpZnQpOyBudW1UaW1lc1Jvd1NoaWZ0ZWQrKykge1xuICAgICAgICAgICAgICAgIHRyYW5zbGF0ZVZlcnRpY2FsKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBmb3IgKGxldCBudW1UaW1lc0NvbFNoaWZ0ZWQgPSAwOyBudW1UaW1lc0NvbFNoaWZ0ZWQgPCBNYXRoLmFicyhjb2xTaGlmdCk7IG51bVRpbWVzQ29sU2hpZnRlZCsrKSB7XG4gICAgICAgICAgICAgICAgdHJhbnNsYXRlSG9yaXpvbnRhbCgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgbGV0IG5ld1Bvc2l0aW9uID0gWy4uLnRoaXMucG9zaXRpb24udG9wLCAuLi50aGlzLnBvc2l0aW9uLm1pZGRsZSwgLi4udGhpcy5wb3NpdGlvbi5ib3R0b21dO1xuICAgICAgICAgICAgZm9yIChsZXQgaSBpbiBuZXdQb3NpdGlvbikge1xuICAgICAgICAgICAgICAgIGxldCBbcm93LCBjb2xdID0gW25ld1Bvc2l0aW9uW2ldWzBdLCBuZXdQb3NpdGlvbltpXVsxXV07XG4gICAgICAgICAgICAgICAgaWYgKGZpZWxkW3Jvd10gPT09IHVuZGVmaW5lZCB8fCBmaWVsZFtyb3ddW2NvbF0gPT09IHVuZGVmaW5lZCB8fCBmaWVsZFtyb3ddW2NvbF0gPiAwKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhbGlkU3BvdCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnBvc2l0aW9uID0gYmFzZVBvc2l0aW9uO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnR1cm5pbmdQb2ludCA9IGJhc2VUdXJuaW5nUG9pbnQ7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIGFsbG93cyB0U3BpbiB2YXJpYWJsZSB0byBiZSB0cnV0aHlcbiAgICAgICAgICAgIGlmICh2YWxpZFNwb3QpIHtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5uYW1lID09PSBcIlRQaWVjZVwiKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59IiwiaW1wb3J0IFBpZWNlIGZyb20gJy4vcGllY2UnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTUGllY2UgZXh0ZW5kcyBQaWVjZSB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIHRoaXMubmFtZSA9IFwiU1BpZWNlXCI7XG4gICAgICAgIHRoaXMucG9zaXRpb24gPSB7XG4gICAgICAgICAgICB0b3A6IFtbMCwgNF0sIFswLCA1XV0sXG4gICAgICAgICAgICBtaWRkbGU6IFtdLFxuICAgICAgICAgICAgYm90dG9tOiBbWzEsIDNdLCBbMSwgNF1dXG4gICAgICAgIH07XG4gICAgICAgIHRoaXMuY29sb3JDb2RlID0gNDtcblxuICAgICAgICB0aGlzLnR1cm5pbmdQb2ludCA9IFsxLCA0XTtcblxuICAgICAgICB0aGlzLmRpc3BsYXlTcXVhcmVzID0gW1szLCAxXSwgWzIsIDFdLCBbMiwgMl0sIFsxLCAyXV07XG5cbiAgICAgICAgdGhpcy5yZW1vdmVTcXVhcmVzID0gW107XG4gICAgfVxufSIsImltcG9ydCBQaWVjZSBmcm9tICcuL3BpZWNlJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVFBpZWNlIGV4dGVuZHMgUGllY2Uge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICB0aGlzLm5hbWUgPSBcIlRQaWVjZVwiO1xuICAgICAgICB0aGlzLnBvc2l0aW9uID0ge1xuICAgICAgICAgICAgdG9wOiBbWzAsIDRdXSxcbiAgICAgICAgICAgIG1pZGRsZTogW10sXG4gICAgICAgICAgICBib3R0b206IFtbMSwgM10sIFsxLCA0XSwgWzEsIDVdXSxcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmNvbG9yQ29kZSA9IDM7XG5cbiAgICAgICAgdGhpcy50dXJuaW5nUG9pbnQgPSBbMSwgNF07XG5cbiAgICAgICAgdGhpcy5kaXNwbGF5U3F1YXJlcyA9IFtbMSwgMl0sIFsyLCAyXSwgWzMsIDJdLCBbMiwgMV1dO1xuXG4gICAgICAgIHRoaXMucmVtb3ZlU3F1YXJlcyA9IFtdO1xuICAgIH1cbn0iLCJpbXBvcnQgUGllY2UgZnJvbSAnLi9waWVjZSc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFpQaWVjZSBleHRlbmRzIFBpZWNlIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgdGhpcy5uYW1lID0gXCJaUGllY2VcIjtcbiAgICAgICAgdGhpcy5wb3NpdGlvbiA9IHtcbiAgICAgICAgICAgIHRvcDogW1swLCAzXSwgWzAsIDRdXSxcbiAgICAgICAgICAgIG1pZGRsZTogW10sXG4gICAgICAgICAgICBib3R0b206IFtbMSwgNF0sIFsxLCA1XV1cbiAgICAgICAgfTtcbiAgICAgICAgdGhpcy5jb2xvckNvZGUgPSA1O1xuXG4gICAgICAgIHRoaXMudHVybmluZ1BvaW50ID0gWzEsIDRdO1xuXG4gICAgICAgIHRoaXMuZGlzcGxheVNxdWFyZXMgPSBbWzEsIDFdLCBbMiwgMV0sIFsyLCAyXSwgWzMsIDJdXTtcblxuICAgICAgICB0aGlzLnJlbW92ZVNxdWFyZXMgPSBbXTtcbiAgICB9XG59Il0sInNvdXJjZVJvb3QiOiIifQ==