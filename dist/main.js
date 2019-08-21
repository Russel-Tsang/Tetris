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
    };
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
        _this8.currentPiece.setOuterSquares();

        console.log(_this8); // this.clearGhostPosition();

        switch (event.which) {
          // up key
          case _this8.controls.turnRight:
            // pass field so piece can check field wall before turning
            _this8.clearGhostPosition();

            _this8.tSpin = _this8.currentPiece.move("turnRight", _this8.field);
            console.log(_this8);

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
            debugger;
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
      cancelAnimationFrame(this.handleClear.drop);
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
        hold: 190,
        turnLeft: 75,
        hardDrop: 16
      }
    };
    this.game1 = new _game_game__WEBPACK_IMPORTED_MODULE_0__["default"](this.optionsPlayer1);
    this.game2 = new _game_game__WEBPACK_IMPORTED_MODULE_0__["default"](this.optionsPlayer2);
    this.field1 = new _field_field__WEBPACK_IMPORTED_MODULE_1__["default"](1);
    this.field2 = new _field_field__WEBPACK_IMPORTED_MODULE_1__["default"](2);
    this.multiplayerMode = new _multiplayer_multiplayer__WEBPACK_IMPORTED_MODULE_2__["default"](this.game1, this.game2);
    this.fieldContainer1 = document.getElementById("field-container-1");
    this.fieldContainer2 = document.getElementById("field-container-2");
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
      this.field1.createCompleteField(this.fieldContainer1);
      this.fieldContainer1.style.position = 'relative';
      this.fieldContainer1.style.left = '14vw';
      this.game1.keyListener();
      this.game1.play();
    }
  }, {
    key: "renderMultiplayer",
    value: function renderMultiplayer() {
      document.body.removeChild(this.menu);
      this.field1.createCompleteField(this.fieldContainer1);
      this.game1.keyListener();
      this.field2.createCompleteField(this.fieldContainer2);
      this.game2.keyListener();
      this.multiplayerMode.startMultiplayer();
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
  }]);

  return Menu;
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
/* harmony import */ var _game_game__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../game/game */ "./src/game/game.js");
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


        if (this.name === "TPiece" && validSpot) {
          return true;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2ZpZWxkL2ZpZWxkLmpzIiwid2VicGFjazovLy8uL3NyYy9maWVsZC9ob2xkYm94LmpzIiwid2VicGFjazovLy8uL3NyYy9maWVsZC9uZXh0Qm94LmpzIiwid2VicGFjazovLy8uL3NyYy9maWVsZC9xdWV1ZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvZ2FtZS9nYW1lLmpzIiwid2VicGFjazovLy8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvbWVudS9tZW51LmpzIiwid2VicGFjazovLy8uL3NyYy9tdWx0aXBsYXllci9tdWx0aXBsYXllci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcGllY2VzL2lQaWVjZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcGllY2VzL2pQaWVjZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcGllY2VzL2xQaWVjZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcGllY2VzL29QaWVjZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcGllY2VzL3BpZWNlLmpzIiwid2VicGFjazovLy8uL3NyYy9waWVjZXMvc1BpZWNlLmpzIiwid2VicGFjazovLy8uL3NyYy9waWVjZXMvdFBpZWNlLmpzIiwid2VicGFjazovLy8uL3NyYy9waWVjZXMvelBpZWNlLmpzIl0sIm5hbWVzIjpbIkZpZWxkIiwiZmllbGROdW0iLCJmaWVsZCIsImkiLCJyb3ciLCJwdXNoIiwiY29sdW1uIiwiZG9jdW1lbnQiLCJjcmVhdGVFbGVtZW50IiwiY2xhc3NMaXN0IiwiYWRkIiwiYXBwZW5kIiwiYXBwZW5kQ2hpbGQiLCJfY3JlYXRlQ29sdW1uIiwiY29udGFpbmVyIiwicXVldWUiLCJRdWV1ZSIsIm5leHRCb3giLCJOZXh0Qm94IiwiaG9sZEJveCIsIkhvbGRCb3giLCJfY3JlYXRlRmllbGQiLCJjcmVhdGVRdWV1ZSIsImNyZWF0ZU5leHRCb3hlcyIsInByZXBlbmQiLCJjcmVhdGVCb3giLCJib3hXcmFwcGVyIiwiYm94IiwiaGVhZGluZyIsImlubmVySFRNTCIsIl9jcmVhdGVCb3hDb2x1bW4iLCJfY3JlYXRlTmV4dEJveENvbHVtbiIsImJveGVzIiwiX2NyZWF0ZU5leHRCb3giLCJxdWV1ZU1ldGVyIiwiYWRqdXN0UXVldWVIZWlnaHQiLCJwZXJjZW50YWdlIiwicXVlcnlTZWxlY3RvciIsInN0eWxlIiwiaGVpZ2h0IiwiR2FtZSIsIm9wdGlvbnMiLCJzZXRGaWVsZCIsImNvbG9ycyIsImdhbWVOdW0iLCJjdXJyZW50QmFnIiwic2h1ZmZsZUJhZyIsImdlbmVyYXRlQmFnIiwiY3VycmVudFBpZWNlIiwiaG9sZFBpZWNlIiwiZ2hvc3RQb3NpdGlvbiIsIm5leHRCYWciLCJjYW5Ib2xkIiwiaGFuZGxlQ2xlYXIiLCJkcm9wIiwicmlnaHQiLCJsZWZ0IiwiZG93biIsImRyb3BTcGVlZCIsIm1vdmVTcGVlZCIsImRyb3BQaWVjZSIsImJpbmQiLCJtb3ZlIiwibW92ZVBpZWNlIiwiYW5pbWF0ZSIsImZwc0ludGVydmFsIiwic3RhcnRUaW1lIiwibm93IiwidGhlbiIsImlzUGF1c2VkIiwia2V5SGVsZCIsIm9wcG9uZW50IiwiY29udHJvbHMiLCJ1cGNvbWluZ0xpbmVzIiwiY29tYm8iLCJ0U3BpbiIsInRTcGluU3RyZWFrIiwiY29tYm9HdWlkZSIsIm9QaWVjZSIsIk9QaWVjZSIsImlQaWVjZSIsIklQaWVjZSIsInRQaWVjZSIsIlRQaWVjZSIsInNQaWVjZSIsIlNQaWVjZSIsInpQaWVjZSIsIlpQaWVjZSIsImxQaWVjZSIsIkxQaWVjZSIsImpQaWVjZSIsIkpQaWVjZSIsIl9nZW5lcmF0ZUZpZWxkIiwic2hpZnQiLCJjb29yZGluYXRlQXJyYXlzIiwiT2JqZWN0IiwidmFsdWVzIiwiZm9yRWFjaCIsImFycmF5IiwiY29vcmRpbmF0ZSIsImNvbCIsImZpZWxkQ29sdW1ucyIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJjaGlsZHJlbiIsImNvbG9yQ29kZSIsInRvcCIsInBvc2l0aW9uIiwibWFwIiwic2xpY2UiLCJtaWRkbGUiLCJib3R0b20iLCJzdG9wcGVkIiwiaGFuZ2luZ1NxdWFyZXMiLCJfcG9wdWxhdGVHaG9zdFBvc2l0aW9uIiwicmVuZGVyIiwiY2xlYXJTZWxmRnJvbUJvYXJkIiwiX2dlbmVyYXRlUGllY2UiLCJuYW1lIiwic2V0Q3VycmVudFBpZWNlIiwic2hvd0N1cnJlbnRCYWciLCJfcG9wdWxhdGVIb2xkQm94IiwiY29sdW1ucyIsImoiLCJjbGFzc05hbWUiLCJkaXNwbGF5U3F1YXJlcyIsInNxdWFyZSIsInBpZWNlTmFtZSIsImdldEVsZW1lbnRzQnlDbGFzc05hbWUiLCJfcG9wdWxhdGVOZXh0Qm94IiwicGllY2UiLCJiYWciLCJjdXJyZW50SW5kZXgiLCJsZW5ndGgiLCJ0ZW1wb3JhcnlWYWx1ZSIsInJhbmRvbUluZGV4IiwiTWF0aCIsImZsb29yIiwicmFuZG9tIiwicm93SWR4IiwiY29sSWR4Iiwic3F1YXJlVmFsdWUiLCJyZW1vdmUiLCJib2R5IiwiYWRkRXZlbnRMaXN0ZW5lciIsImV2ZW50Iiwic2V0T3V0ZXJTcXVhcmVzIiwiY29uc29sZSIsImxvZyIsIndoaWNoIiwidHVyblJpZ2h0IiwiY2xlYXJHaG9zdFBvc2l0aW9uIiwicG9wdWxhdGVGaWVsZCIsInNldEdob3N0UG9zaXRpb24iLCJ0dXJuTGVmdCIsImxlZnRTaWRlQmxvY2tlZCIsInJpZ2h0U2lkZUJsb2NrZWQiLCJzb2Z0RHJvcCIsImhvbGQiLCJoYXJkRHJvcCIsImhhbmRsZVBpZWNlU3RvcCIsImNhbmNlbEFuaW1hdGlvbkZyYW1lIiwibG93ZXN0IiwiaGlnaGVzdCIsIm51bUxpbmVzQ2xlYXJlZCIsImluY2x1ZGVzIiwiX2JyaW5nRG93bkZpZWxkIiwiY2xlYXJMaW5lcyIsInN0YXJ0aW5nUm93IiwibGVmdE1vc3QiLCJyaWdodE1vc3QiLCJsZWZ0TW9zdFJvdyIsInJpZ2h0TW9zdFJvdyIsImxlZnRNb3N0Q29sIiwicmlnaHRNb3N0Q29sIiwibnVtTGluZXMiLCJhZGRMaW5lc1RvUXVldWUiLCJhYnMiLCJyZWNlaXZlVXBjb21pbmdMaW5lcyIsImNsZWFyR2hvc3RDbGFzcyIsInBsYXkiLCJmcHMiLCJEYXRlIiwicmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwiZWxhcHNlZCIsImlzRmFsbGluZyIsImJvdHRvbU1vc3QiLCJkaXJlY3Rpb24iLCJhdFRvcCIsImdhbWVPdmVyIiwiaGFuZGxlVG9wUGllY2UiLCJhZGRUb0N1cnJlbnRCYWciLCJyZWZpbGxOZXh0QmFnIiwid2lubmVyIiwiZ2FtZU92ZXJTY3JlZW4iLCJnYW1lT3ZlckhlYWRpbmciLCJ3aW5uZXJIZWFkaW5nIiwicGxheWVyIiwiZ2FyYmFnZUxpbmVzIiwicmFuZG9tSG9sZSIsImdhcmJhZ2VSb3ciLCJjb25jYXQiLCJtZW51IiwiTWVudSIsInJlbmRlck1lbnUiLCJnZXRFbGVtZW50QnlJZCIsIm9wdGlvbnNQbGF5ZXIxIiwib3B0aW9uc1BsYXllcjIiLCJnYW1lMSIsImdhbWUyIiwiZmllbGQxIiwiZmllbGQyIiwibXVsdGlwbGF5ZXJNb2RlIiwiTXVsdGlwbGF5ZXIiLCJmaWVsZENvbnRhaW5lcjEiLCJmaWVsZENvbnRhaW5lcjIiLCJzaW5nbGVQbGF5ZXJCdXR0b24iLCJtdWx0aXBsYXllckJ1dHRvbiIsImFkZEV2ZW50TGlzdGVuZXJzIiwicmVuZGVyU2luZ2xlUGxheWVyIiwicmVuZGVyTXVsdGlwbGF5ZXIiLCJyZW1vdmVDaGlsZCIsImp1c3RpZnlDb250ZW50IiwiY3JlYXRlQ29tcGxldGVGaWVsZCIsImtleUxpc3RlbmVyIiwic3RhcnRNdWx0aXBsYXllciIsImJ1dHRvbkNvbnRhaW5lciIsInJlbmRlckJ1dHRvbnMiLCJidXR0b24iLCJwbGF5ZXIxIiwicGxheWVyMiIsInNldE9wcG9uZW50IiwidHVybmluZ1BvaW50IiwicmVtb3ZlU3F1YXJlcyIsIm9mZnNldEd1aWRlIiwiUGllY2UiLCJ0b3BNb3N0Iiwicm90YXRpb25TdGF0ZSIsImNvb3JkaW5hdGVzQXJyYXkiLCJjb2x1bW5WYWx1ZSIsInJvd1ZhbHVlIiwicG9zaXRpb25BcnJheSIsIm9sZFNxdWFyZSIsIm5ld1NxdWFyZSIsInJlc3VsdCIsIl9zcXVhcmVzQXJlRXF1YWwiLCJvbGRQb3NpdGlvbiIsInNldFJlbW92ZVNxdWFyZXMiLCJzcXVhcmVzIiwiaGVpZ2h0RGlmZmVyZW5jZSIsIndpZHRoRGlmZmVyZW5jZSIsIm5ld0NvbCIsIm5ld1JvdyIsIm5ld1NxdWFyZXMiLCJ1bmRlZmluZWQiLCJ3YWxsS2ljayIsIm9sZFNxdWFyZXMiLCJmaWx0ZXIiLCJfaW5jbHVkZXMiLCJjb29yZGluYXRlQXJyYXkiLCJiZWxvd1NxdWFyZSIsInNpZGVTcXVhcmVzIiwiYWRqYWNlbnRMZWZ0IiwiYWRqYWNlbnRSaWdodCIsImNvb3JkaW5hdGVQYWlyIiwiYWN0aW9uIiwidmFsaWRTcG90Iiwic3RhcnRpbmdPZmZzZXQiLCJuZXh0T2Zmc2V0IiwiYmFzZVBvc2l0aW9uIiwiYmFzZVR1cm5pbmdQb2ludCIsInN0YXJ0aW5nVHJhbnNsYXRpb24iLCJwb3RlbnRpYWxUcmFuc2xhdGlvbiIsInJvd1NoaWZ0IiwiY29sU2hpZnQiLCJ0cmFuc2xhdGVWZXJ0aWNhbCIsInRyYW5zbGF0ZUhvcml6b250YWwiLCJudW1UaW1lc1Jvd1NoaWZ0ZWQiLCJudW1UaW1lc0NvbFNoaWZ0ZWQiLCJuZXdQb3NpdGlvbiJdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFp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LCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIi9kaXN0L1wiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9pbmRleC5qc1wiKTtcbiIsImltcG9ydCBIb2xkQm94IGZyb20gJy4vaG9sZGJveCc7XG5pbXBvcnQgTmV4dEJveCBmcm9tICcuL25leHRCb3gnO1xuaW1wb3J0IFF1ZXVlIGZyb20gJy4vcXVldWUnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBGaWVsZCB7ICBcbiAgICBjb25zdHJ1Y3RvcihmaWVsZE51bSkge1xuICAgICAgICB0aGlzLmZpZWxkTnVtID0gZmllbGROdW07XG4gICAgfVxuICAgIFxuICAgIF9nZW5lcmF0ZUZpZWxkKCkge1xuICAgICAgICBsZXQgZmllbGQgPSBbXTtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCAyMDsgaSsrKSB7XG4gICAgICAgICAgICBsZXQgcm93ID0gWzAsMCwwLDAsMCwwLDAsMCwwLDBdO1xuICAgICAgICAgICAgZmllbGQucHVzaChyb3cpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBmaWVsZDtcbiAgICB9XG5cbiAgICBfY3JlYXRlQ29sdW1uKCkge1xuICAgICAgICBsZXQgY29sdW1uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInVsXCIpO1xuICAgICAgICBjb2x1bW4uY2xhc3NMaXN0LmFkZChgZmllbGQtY29sdW1uYCwgYGZpZWxkLSR7dGhpcy5maWVsZE51bX1gKTtcblxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IDIwOyBpKyspIHtcbiAgICAgICAgICAgIGNvbHVtbi5hcHBlbmQoZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpXCIpKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gY29sdW1uO1xuICAgIH1cblxuICAgIF9jcmVhdGVGaWVsZCgpIHtcbiAgICAgICAgbGV0IGZpZWxkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgZmllbGQuY2xhc3NMaXN0LmFkZChgZmllbGQtYm94YCwgYGZpZWxkLSR7dGhpcy5maWVsZE51bX1gKTtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCAxMDsgaSsrKSB7XG4gICAgICAgICAgICBmaWVsZC5hcHBlbmRDaGlsZCh0aGlzLl9jcmVhdGVDb2x1bW4oKSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGZpZWxkO1xuICAgIH1cblxuICAgIGNyZWF0ZUNvbXBsZXRlRmllbGQoY29udGFpbmVyKSB7XG4gICAgICAgIGxldCBxdWV1ZSA9IG5ldyBRdWV1ZSh0aGlzLmZpZWxkTnVtKTtcbiAgICAgICAgbGV0IG5leHRCb3ggPSBuZXcgTmV4dEJveCh0aGlzLmZpZWxkTnVtKTtcbiAgICAgICAgbGV0IGhvbGRCb3ggPSBuZXcgSG9sZEJveCh0aGlzLmZpZWxkTnVtKTtcbiAgICAgICAgY29udGFpbmVyLmFwcGVuZCh0aGlzLl9jcmVhdGVGaWVsZCgpKTtcbiAgICAgICAgY29udGFpbmVyLmFwcGVuZChxdWV1ZS5jcmVhdGVRdWV1ZSgpKTtcbiAgICAgICAgY29udGFpbmVyLmFwcGVuZChuZXh0Qm94LmNyZWF0ZU5leHRCb3hlcygpKTtcbiAgICAgICAgY29udGFpbmVyLnByZXBlbmQoaG9sZEJveC5jcmVhdGVCb3goKSk7XG4gICAgICAgIHJldHVybiBjb250YWluZXI7XG4gICAgfVxuXG59IiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgSG9sZEJveCB7XG4gICAgY29uc3RydWN0b3IoZmllbGROdW0pIHtcbiAgICAgICAgdGhpcy5maWVsZE51bSA9IGZpZWxkTnVtO1xuICAgIH1cblxuICAgIF9jcmVhdGVCb3hDb2x1bW4oKSB7XG4gICAgICAgIGxldCBjb2x1bW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidWxcIik7XG4gICAgICAgIGNvbHVtbi5jbGFzc0xpc3QuYWRkKGBob2xkLWNvbHVtbmAsIGBmaWVsZC0ke3RoaXMuZmllbGROdW19YCk7XG5cbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCA0OyBpKyspIHtcbiAgICAgICAgICAgIGNvbHVtbi5hcHBlbmQoZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpXCIpKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gY29sdW1uO1xuICAgIH1cblxuICAgIGNyZWF0ZUJveCgpIHtcbiAgICAgICAgbGV0IGJveFdyYXBwZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICBib3hXcmFwcGVyLmNsYXNzTGlzdC5hZGQoYGhvbGQtYm94LXdyYXBwZXJgLCBgZmllbGQtJHt0aGlzLmZpZWxkTnVtfWApO1xuICAgICAgICBsZXQgYm94ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgYm94LmNsYXNzTGlzdC5hZGQoYGhvbGQtYm94YCwgYGZpZWxkLSR7dGhpcy5maWVsZE51bX1gKTtcbiAgICAgICAgbGV0IGhlYWRpbmcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDJcIik7XG4gICAgICAgIGhlYWRpbmcuaW5uZXJIVE1MID0gXCJIT0xEXCI7XG4gICAgICAgIGJveFdyYXBwZXIuYXBwZW5kQ2hpbGQoaGVhZGluZyk7XG4gICAgICAgIGJveFdyYXBwZXIuYXBwZW5kQ2hpbGQoYm94KTtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCA1OyBpKyspIHtcbiAgICAgICAgICAgIGJveC5hcHBlbmRDaGlsZCh0aGlzLl9jcmVhdGVCb3hDb2x1bW4oKSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGJveFdyYXBwZXI7XG4gICAgfVxufSIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIE5leHRCb3gge1xuICAgIGNvbnN0cnVjdG9yKGZpZWxkTnVtKSB7XG4gICAgICAgIHRoaXMuZmllbGROdW0gPSBmaWVsZE51bTtcbiAgICB9XG5cbiAgICBfY3JlYXRlTmV4dEJveENvbHVtbigpIHtcbiAgICAgICAgbGV0IGNvbHVtbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ1bFwiKTtcbiAgICAgICAgY29sdW1uLmNsYXNzTGlzdC5hZGQoYG5leHQtY29sdW1uYCwgYGZpZWxkLSR7dGhpcy5maWVsZE51bX1gKTtcblxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IDQ7IGkrKykge1xuICAgICAgICAgICAgY29sdW1uLmFwcGVuZChkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIikpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBjb2x1bW47XG4gICAgfVxuXG4gICAgX2NyZWF0ZU5leHRCb3goKSB7XG4gICAgICAgIGxldCBib3ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICBib3guY2xhc3NMaXN0LmFkZChgbmV4dC1ib3hgLCBgZmllbGQtJHt0aGlzLmZpZWxkTnVtfWApO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IDU7IGkrKykge1xuICAgICAgICAgICAgYm94LmFwcGVuZENoaWxkKHRoaXMuX2NyZWF0ZU5leHRCb3hDb2x1bW4oKSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGJveDtcbiAgICB9XG5cbiAgICBjcmVhdGVOZXh0Qm94ZXMoKSB7XG4gICAgICAgIGxldCBib3hlcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIGxldCBoZWFkaW5nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgyXCIpO1xuICAgICAgICBoZWFkaW5nLmlubmVySFRNTCA9IFwiTkVYVFwiO1xuICAgICAgICBib3hlcy5jbGFzc0xpc3QuYWRkKGBuZXh0LWJveGVzYCwgYGZpZWxkLSR7dGhpcy5maWVsZE51bX1gKTtcbiAgICAgICAgYm94ZXMuYXBwZW5kQ2hpbGQoaGVhZGluZyk7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgNTsgaSsrKSB7XG4gICAgICAgICAgICBib3hlcy5hcHBlbmRDaGlsZCh0aGlzLl9jcmVhdGVOZXh0Qm94KCkpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBib3hlcztcbiAgICB9XG59IiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgUXVldWUge1xuICAgIGNvbnN0cnVjdG9yKGZpZWxkTnVtKSB7XG4gICAgICAgIHRoaXMuZmllbGROdW0gPSBmaWVsZE51bTtcbiAgICB9XG5cbiAgICBjcmVhdGVRdWV1ZSgpIHtcbiAgICAgICAgbGV0IHF1ZXVlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgcXVldWUuY2xhc3NMaXN0LmFkZChgcXVldWVgLCBgZmllbGQtJHt0aGlzLmZpZWxkTnVtfWApO1xuICAgICAgICBsZXQgcXVldWVNZXRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIHF1ZXVlTWV0ZXIuY2xhc3NMaXN0LmFkZChgcXVldWUtbWV0ZXJgLCBgZmllbGQtJHt0aGlzLmZpZWxkTnVtfWApO1xuICAgICAgICBxdWV1ZS5hcHBlbmRDaGlsZChxdWV1ZU1ldGVyKTtcbiAgICAgICAgcmV0dXJuIHF1ZXVlO1xuICAgIH1cbn1cblxuZXhwb3J0IGNvbnN0IGFkanVzdFF1ZXVlSGVpZ2h0ID0gKGZpZWxkTnVtLCBwZXJjZW50YWdlKSA9PiB7XG4gICAgbGV0IHF1ZXVlTWV0ZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAucXVldWUtbWV0ZXIuZmllbGQtJHtmaWVsZE51bX1gKTtcbiAgICBpZiAocGVyY2VudGFnZSA+IDEwMCkgcGVyY2VudGFnZSA9IDEwMDtcbiAgICBxdWV1ZU1ldGVyLnN0eWxlLmhlaWdodCA9IGAke3BlcmNlbnRhZ2V9JWBcbn0iLCJpbXBvcnQgRmllbGQgZnJvbSAnLi4vZmllbGQvZmllbGQnO1xuaW1wb3J0IE9QaWVjZSBmcm9tICcuLi9waWVjZXMvb1BpZWNlJztcbmltcG9ydCBJUGllY2UgZnJvbSAnLi4vcGllY2VzL2lQaWVjZSc7XG5pbXBvcnQgVFBpZWNlIGZyb20gJy4uL3BpZWNlcy90UGllY2UnO1xuaW1wb3J0IFNQaWVjZSBmcm9tICcuLi9waWVjZXMvc1BpZWNlJztcbmltcG9ydCBaUGllY2UgZnJvbSAnLi4vcGllY2VzL3pQaWVjZSc7XG5pbXBvcnQgTFBpZWNlIGZyb20gJy4uL3BpZWNlcy9sUGllY2UnO1xuaW1wb3J0IEpQaWVjZSBmcm9tICcuLi9waWVjZXMvalBpZWNlJztcbmltcG9ydCB7IGFkanVzdFF1ZXVlSGVpZ2h0IH0gZnJvbSAnLi4vZmllbGQvcXVldWUnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBHYW1lIHtcbiAgICBjb25zdHJ1Y3RvcihvcHRpb25zKSB7XG4gICAgICAgIHRoaXMuZmllbGQgPSB0aGlzLnNldEZpZWxkKClcblxuICAgICAgICB0aGlzLmNvbG9ycyA9IHtcbiAgICAgICAgICAgIDE6IFwieWVsbG93XCIsXG4gICAgICAgICAgICAyOiBcImJsdWVcIixcbiAgICAgICAgICAgIDM6IFwicHVycGxlXCIsXG4gICAgICAgICAgICA0OiBcImdyZWVuXCIsXG4gICAgICAgICAgICA1OiBcInJlZFwiLFxuICAgICAgICAgICAgNjogXCJvcmFuZ2VcIixcbiAgICAgICAgICAgIDc6IFwiZGFyay1ibHVlXCIsXG4gICAgICAgICAgICA4OiBcImdyZXlcIlxuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5nYW1lTnVtID0gb3B0aW9ucy5nYW1lTnVtO1xuXG4gICAgICAgIHRoaXMuY3VycmVudEJhZyA9IHRoaXMuc2h1ZmZsZUJhZyh0aGlzLmdlbmVyYXRlQmFnKCkpO1xuICAgICAgICB0aGlzLmN1cnJlbnRQaWVjZSA9ICcnO1xuICAgICAgICB0aGlzLmhvbGRQaWVjZSA9ICcnO1xuICAgICAgICB0aGlzLmdob3N0UG9zaXRpb24gPSAnJztcbiAgICAgICAgdGhpcy5uZXh0QmFnID0gdGhpcy5zaHVmZmxlQmFnKHRoaXMuZ2VuZXJhdGVCYWcoKSk7XG5cbiAgICAgICAgLy8gcHJldmVudHMgcGxheWVyIGZyb20gaG9sZGluZyBwaWVjZSBtdWx0aXBsZSB0aW1lc1xuICAgICAgICB0aGlzLmNhbkhvbGQgPSB0cnVlO1xuXG4gICAgICAgIHRoaXMuaGFuZGxlQ2xlYXIgPSB7XG4gICAgICAgICAgICBkcm9wOiAnJyxcbiAgICAgICAgICAgIHJpZ2h0OiAnJyxcbiAgICAgICAgICAgIGxlZnQ6ICcnLFxuICAgICAgICAgICAgZG93bjogJydcbiAgICAgICAgfTtcblxuICAgICAgICAvLyBmb3IgYW5pbWF0aW9uc1xuICAgICAgICB0aGlzLmRyb3BTcGVlZCA9IDE7XG4gICAgICAgIHRoaXMubW92ZVNwZWVkID0gb3B0aW9ucy5tb3ZlU3BlZWQ7XG4gICAgICAgIHRoaXMuZHJvcFBpZWNlID0gdGhpcy5kcm9wUGllY2UuYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5kcm9wID0gdGhpcy5kcm9wLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMubW92ZSA9IHRoaXMubW92ZS5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLm1vdmVQaWVjZSA9IHRoaXMubW92ZVBpZWNlLmJpbmQodGhpcyk7XG5cbiAgICAgICAgLy8ga2VlcCB0cmFjayBvZiB0aGUgZm9sbG93aW5nIHZhcmlhYmxlcyBmb3IgcmVxdWVzdEFuaW1hdGlvbkZyYW1lIHRocm90dGxpbmdcbiAgICAgICAgdGhpcy5hbmltYXRlID0ge1xuICAgICAgICAgICAgZHJvcDoge1xuICAgICAgICAgICAgICAgIGZwc0ludGVydmFsOiAnJyxcbiAgICAgICAgICAgICAgICBzdGFydFRpbWU6ICcnLFxuICAgICAgICAgICAgICAgIG5vdzogJycsXG4gICAgICAgICAgICAgICAgdGhlbjogJydcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICByaWdodDoge1xuICAgICAgICAgICAgICAgIGZwc0ludGVydmFsOiAnJyxcbiAgICAgICAgICAgICAgICBzdGFydFRpbWU6ICcnLFxuICAgICAgICAgICAgICAgIG5vdzogJycsXG4gICAgICAgICAgICAgICAgdGhlbjogJydcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBsZWZ0OiB7XG4gICAgICAgICAgICAgICAgZnBzSW50ZXJ2YWw6ICcnLFxuICAgICAgICAgICAgICAgIHN0YXJ0VGltZTogJycsXG4gICAgICAgICAgICAgICAgbm93OiAnJyxcbiAgICAgICAgICAgICAgICB0aGVuOiAnJ1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGRvd246IHtcbiAgICAgICAgICAgICAgICBmcHNJbnRlcnZhbDogJycsXG4gICAgICAgICAgICAgICAgc3RhcnRUaW1lOiAnJyxcbiAgICAgICAgICAgICAgICBub3c6ICcnLFxuICAgICAgICAgICAgICAgIHRoZW46ICcnXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAvLyBwYXVzaW5nIHRoZSBnYW1lXG4gICAgICAgIHRoaXMuaXNQYXVzZWQgPSBmYWxzZTtcblxuICAgICAgICB0aGlzLmtleUhlbGQgPSB7XG4gICAgICAgICAgICBkb3duOiBmYWxzZSxcbiAgICAgICAgICAgIHJpZ2h0OiBmYWxzZSxcbiAgICAgICAgICAgIGxlZnQ6IGZhbHNlXG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLm9wcG9uZW50ID0gXCJcIjtcbiAgICAgICAgdGhpcy5jb250cm9scyA9IG9wdGlvbnMuY29udHJvbHM7XG4gICAgICAgIHRoaXMudXBjb21pbmdMaW5lcyA9IDA7XG4gICAgICAgIHRoaXMuY29tYm8gPSAtMTtcbiAgICAgICAgdGhpcy50U3BpbiA9IGZhbHNlO1xuICAgICAgICB0aGlzLnRTcGluU3RyZWFrID0gZmFsc2U7XG4gICAgICAgIHRoaXMuY29tYm9HdWlkZSA9IHtcbiAgICAgICAgICAgIDA6IDAsXG4gICAgICAgICAgICAxOiAwLCBcbiAgICAgICAgICAgIDI6IDEsXG4gICAgICAgICAgICAzOiAxLFxuICAgICAgICAgICAgNDogMSxcbiAgICAgICAgICAgIDU6IDIsXG4gICAgICAgICAgICA2OiAyLFxuICAgICAgICAgICAgNzogMyxcbiAgICAgICAgICAgIDg6IDMsXG4gICAgICAgICAgICA5OiA0LFxuICAgICAgICAgICAgMTA6IDQsXG4gICAgICAgICAgICAxMTogNCxcbiAgICAgICAgICAgIDEyOiA1XG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgZ2VuZXJhdGVCYWcoKSB7XG4gICAgICAgIGxldCBvUGllY2UgPSBuZXcgT1BpZWNlKCk7XG4gICAgICAgIGxldCBpUGllY2UgPSBuZXcgSVBpZWNlKCk7XG4gICAgICAgIGxldCB0UGllY2UgPSBuZXcgVFBpZWNlKCk7XG4gICAgICAgIGxldCBzUGllY2UgPSBuZXcgU1BpZWNlKCk7XG4gICAgICAgIGxldCB6UGllY2UgPSBuZXcgWlBpZWNlKCk7XG4gICAgICAgIGxldCBsUGllY2UgPSBuZXcgTFBpZWNlKCk7XG4gICAgICAgIGxldCBqUGllY2UgPSBuZXcgSlBpZWNlKCk7XG5cbiAgICAgICAgcmV0dXJuIFtvUGllY2UsIGlQaWVjZSwgdFBpZWNlLCBzUGllY2UsIHpQaWVjZSwgbFBpZWNlLCBqUGllY2VdO1xuICAgIH1cblxuICAgIHNldEZpZWxkKCkge1xuICAgICAgICBsZXQgZmllbGQgPSBuZXcgRmllbGQoKTtcbiAgICAgICAgcmV0dXJuIGZpZWxkLl9nZW5lcmF0ZUZpZWxkKCk7XG4gICAgfVxuXG4gICAgLy8gdGFrZSBwaWVjZSBmcm9tIGN1cnJlbnRCYWcgYW5kIHNldCBpdCBhcyB0aGUgY3VycmVudCBwaWVjZVxuICAgIHNldEN1cnJlbnRQaWVjZSgpIHtcbiAgICAgICAgdGhpcy5jdXJyZW50UGllY2UgPSB0aGlzLmN1cnJlbnRCYWcuc2hpZnQoKTtcbiAgICB9XG5cbiAgICAvLyByZW1vdmVzIG9sZCBnaG9zdCBwb3NpdGlvbiBmcm9tIHRoaXMuZmllbGQgYmVmb3JlIGNoYW5naW5nIHBpZWNlIHBvc2l0aW9uXG4gICAgY2xlYXJHaG9zdFBvc2l0aW9uKCkge1xuICAgICAgICBsZXQgY29vcmRpbmF0ZUFycmF5cyA9IE9iamVjdC52YWx1ZXModGhpcy5naG9zdFBvc2l0aW9uKTtcbiAgICAgICAgY29vcmRpbmF0ZUFycmF5cy5mb3JFYWNoKGFycmF5ID0+IHtcbiAgICAgICAgICAgIGFycmF5LmZvckVhY2goY29vcmRpbmF0ZSA9PiB7XG4gICAgICAgICAgICAgICAgbGV0IFtyb3csIGNvbF0gPSBbY29vcmRpbmF0ZVswXSwgY29vcmRpbmF0ZVsxXV07XG4gICAgICAgICAgICAgICAgLy8gcHJldmVudCBtZXRob2QgZnJvbSBjbGVhcmluZyBwaWVjZSBpZiBpdCBoYXBwZW5zIHRvIGJlIHdoZXJlIHRoZSBnaG9zdCBwb3NpdGlvbiBzaG91bGQgYmVcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5maWVsZFtyb3ddICYmIHRoaXMuZmllbGRbcm93XVtjb2xdID09PSBcInhcIiAmJiByb3cgPj0gMCkgdGhpcy5maWVsZFtyb3ddW2NvbF0gPSAwO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgLy8gY2xlYXJzIHRoZSBjb2xvciBjbGFzc2VzIGZyb20gdGhlIGJyb3dzZXIgZmllbGRcbiAgICBjbGVhckdob3N0Q2xhc3MoKSB7XG4gICAgICAgIGxldCBmaWVsZENvbHVtbnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKGAuZmllbGQtY29sdW1uLmZpZWxkLSR7dGhpcy5nYW1lTnVtfWApO1xuICAgICAgICBcbiAgICAgICAgT2JqZWN0LnZhbHVlcyh0aGlzLmdob3N0UG9zaXRpb24pLmZvckVhY2goYXJyYXkgPT4ge1xuICAgICAgICAgICAgYXJyYXkuZm9yRWFjaChjb29yZGluYXRlID0+IHtcbiAgICAgICAgICAgICAgICBsZXQgW3JvdywgY29sXSA9IFtjb29yZGluYXRlWzBdLCBjb29yZGluYXRlWzFdXTtcbiAgICAgICAgICAgICAgICBmaWVsZENvbHVtbnNbY29sXS5jaGlsZHJlbltyb3ddLmNsYXNzTGlzdCA9IHRoaXMuY29sb3JzW3RoaXMuY3VycmVudFBpZWNlLmNvbG9yQ29kZV07XG4gICAgICAgICAgICB9KVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICAvLyBmaW5kIGFwcHJvcHJpYXRlIGdob3N0IHBvc2l0aW9uIGFzIHBpZWNlIHBvc2l0aW9uIGNoYW5nZXNcbiAgICBzZXRHaG9zdFBvc2l0aW9uKCkge1xuICAgICAgICBsZXQgZ2hvc3RQb3NpdGlvbiA9IHtcbiAgICAgICAgICAgIHRvcDogdGhpcy5jdXJyZW50UGllY2UucG9zaXRpb24udG9wLm1hcChjb29yZGluYXRlID0+IGNvb3JkaW5hdGUuc2xpY2UoKSksXG4gICAgICAgICAgICBtaWRkbGU6IHRoaXMuY3VycmVudFBpZWNlLnBvc2l0aW9uLm1pZGRsZS5tYXAoY29vcmRpbmF0ZSA9PiBjb29yZGluYXRlLnNsaWNlKCkpLFxuICAgICAgICAgICAgYm90dG9tOiB0aGlzLmN1cnJlbnRQaWVjZS5wb3NpdGlvbi5ib3R0b20ubWFwKGNvb3JkaW5hdGUgPT4gY29vcmRpbmF0ZS5zbGljZSgpKVxuICAgICAgICB9XG4gICAgICAgIGxldCBzdG9wcGVkID0gZmFsc2U7XG4gICAgICAgIHdoaWxlICghc3RvcHBlZCkge1xuICAgICAgICAgICAgbGV0IGhhbmdpbmdTcXVhcmVzID0gdGhpcy5jdXJyZW50UGllY2UuaGFuZ2luZ1NxdWFyZXMoZ2hvc3RQb3NpdGlvbik7XG4gICAgICAgICAgICBoYW5naW5nU3F1YXJlcy5mb3JFYWNoKGNvb3JkaW5hdGUgPT4ge1xuICAgICAgICAgICAgICAgIGxldCBbcm93LCBjb2xdID0gW2Nvb3JkaW5hdGVbMF0sIGNvb3JkaW5hdGVbMV1dO1xuICAgICAgICAgICAgICAgIGlmIChyb3cgPCAwIHx8IHJvdyArIDEgPT09IDIwIHx8IHRoaXMuZmllbGRbcm93ICsgMV1bY29sXSkgc3RvcHBlZCA9IHRydWU7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGlmIChzdG9wcGVkKSBicmVhaztcbiAgICAgICAgICAgIGdob3N0UG9zaXRpb24udG9wID0gZ2hvc3RQb3NpdGlvbi50b3AubWFwKGFycmF5ID0+IFthcnJheVswXSArIDEsIGFycmF5WzFdXSk7XG4gICAgICAgICAgICBnaG9zdFBvc2l0aW9uLm1pZGRsZSA9IGdob3N0UG9zaXRpb24ubWlkZGxlLm1hcChhcnJheSA9PiBbYXJyYXlbMF0gKyAxLCBhcnJheVsxXV0pO1xuICAgICAgICAgICAgZ2hvc3RQb3NpdGlvbi5ib3R0b20gPSBnaG9zdFBvc2l0aW9uLmJvdHRvbS5tYXAoYXJyYXkgPT4gW2FycmF5WzBdICsgMSwgYXJyYXlbMV1dKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmdob3N0UG9zaXRpb24gPSBnaG9zdFBvc2l0aW9uO1xuICAgICAgICB0aGlzLl9wb3B1bGF0ZUdob3N0UG9zaXRpb24oKTtcbiAgICB9XG5cbiAgICAvLyBwb3B1bGF0ZSB0aGlzLmZpZWxkIHdpdGggJ3gnIHdoZXJldmVyIHRoZSBnaG9zdCBwb3NpdGlvbiBpcyBjYWxjdWxhdGVkIHRvIGJlXG4gICAgX3BvcHVsYXRlR2hvc3RQb3NpdGlvbigpIHtcbiAgICAgICAgbGV0IGNvb3JkaW5hdGVBcnJheXMgPSBPYmplY3QudmFsdWVzKHRoaXMuZ2hvc3RQb3NpdGlvbik7XG4gICAgICAgIGNvb3JkaW5hdGVBcnJheXMuZm9yRWFjaChhcnJheSA9PiB7XG4gICAgICAgICAgICBhcnJheS5mb3JFYWNoKGNvb3JkaW5hdGUgPT4ge1xuICAgICAgICAgICAgICAgIGxldCBbcm93LCBjb2xdID0gW2Nvb3JkaW5hdGVbMF0sIGNvb3JkaW5hdGVbMV1dO1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLmZpZWxkW3Jvd10gJiYgdGhpcy5maWVsZFtyb3ddW2NvbF0gIT09IHRoaXMuY3VycmVudFBpZWNlLmNvbG9yQ29kZSkgdGhpcy5maWVsZFtyb3ddW2NvbF0gPSBcInhcIjtcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLnJlbmRlcigpO1xuICAgIH1cblxuICAgIC8vIGhvbGQgcGllY2UgZm9yIGxhdGVyIHVzZSBcbiAgICBob2xkKCkge1xuICAgICAgICBpZiAoIXRoaXMuY2FuSG9sZCkgcmV0dXJuO1xuICAgICAgICB0aGlzLmN1cnJlbnRQaWVjZS5jbGVhclNlbGZGcm9tQm9hcmQodGhpcy5maWVsZCk7IFxuICAgICAgICB0aGlzLnJlbmRlcigpO1xuXG4gICAgICAgIGlmICghdGhpcy5ob2xkUGllY2UpIHtcbiAgICAgICAgICAgIC8vIHBhc3MgY3VycmVudCBwaWVjZSBuYW1lIGludG8gZ2VuZXJhdGUgcGllY2UgaW4gb3JkZXIgdG8gZ2VuZXJhdGUgYSBuZXcgcGllY2UgaW5zdGFuY2VcbiAgICAgICAgICAgIHRoaXMuaG9sZFBpZWNlID0gdGhpcy5fZ2VuZXJhdGVQaWVjZSh0aGlzLmN1cnJlbnRQaWVjZS5uYW1lKTtcbiAgICAgICAgICAgIHRoaXMuc2V0Q3VycmVudFBpZWNlKCk7XG4gICAgICAgICAgICAvLyByZS1yZW5kZXIgbmV4dCBib3hlcyB0byBhcHByb3ByaWF0ZWx5IHNob3cgY3VycmVudCBiYWdcbiAgICAgICAgICAgIHRoaXMuc2hvd0N1cnJlbnRCYWcoKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuY3VycmVudFBpZWNlID0gdGhpcy5fZ2VuZXJhdGVQaWVjZSh0aGlzLmN1cnJlbnRQaWVjZS5uYW1lKTtcbiAgICAgICAgICAgIFt0aGlzLmN1cnJlbnRQaWVjZSwgdGhpcy5ob2xkUGllY2VdID0gW3RoaXMuaG9sZFBpZWNlLCB0aGlzLmN1cnJlbnRQaWVjZV07XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIC8vIGRpc2FibGUgaG9sZC1waWVjZSByaWdodCBhZnRlciBwbGF5ZXIgaG9sZHMgYSBwaWVjZVxuICAgICAgICB0aGlzLmNhbkhvbGQgPSBmYWxzZTtcblxuICAgICAgICB0aGlzLl9wb3B1bGF0ZUhvbGRCb3goKTtcbiAgICB9XG5cbiAgICBfcG9wdWxhdGVIb2xkQm94KCkge1xuICAgICAgICBsZXQgY29sdW1ucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC5ob2xkLWJveC5maWVsZC0ke3RoaXMuZ2FtZU51bX1gKS5jaGlsZHJlbjtcblxuICAgICAgICAvLyByZW1vdmUgY29sb3JzIGZyb20gcHJldmlvdXMgcGllY2VzXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgNTsgaSsrKSB7XG4gICAgICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IDQ7IGorKykge1xuICAgICAgICAgICAgICAgIC8vIGNvbHVtbnMuY2hpbGRyZW4gaXMgbm9kZWxpc3Qgb2YgPGxpcz5cbiAgICAgICAgICAgICAgICBjb2x1bW5zW2ldLmNoaWxkcmVuW2pdLmNsYXNzTmFtZSA9IFwiXCI7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmhvbGRQaWVjZS5kaXNwbGF5U3F1YXJlcy5mb3JFYWNoKHNxdWFyZSA9PiB7XG4gICAgICAgICAgICBsZXQgW2NvbCwgcm93XSA9IFtzcXVhcmVbMF0sIHNxdWFyZVsxXV07XG4gICAgICAgICAgICBjb2x1bW5zW2NvbF0uY2hpbGRyZW5bcm93XS5jbGFzc0xpc3QuYWRkKHRoaXMuY29sb3JzW3RoaXMuaG9sZFBpZWNlLmNvbG9yQ29kZV0pO1xuICAgICAgICB9KVxuXG4gICAgfVxuXG4gICAgLy8gdXNlZCBmb3IgdGhpcy5ob2xkKCk6IGdlbmVyYXRlIGEgbmV3IHBpZWNlIHNvIHRoYXQgYSBob2xkcGllY2UgdGhhdCBpcyByZS1yZW5kZXJlZCBvbiB0aGUgYm9hcmQgd2lsbCBub3Qgc3RhcnQgZnJvbSB0aGUgb2xkIHBvc2l0aW9uXG4gICAgX2dlbmVyYXRlUGllY2UocGllY2VOYW1lKSB7XG4gICAgICAgIHN3aXRjaChwaWVjZU5hbWUpIHtcbiAgICAgICAgICAgIGNhc2UgXCJUUGllY2VcIjpcbiAgICAgICAgICAgICAgICByZXR1cm4gbmV3IFRQaWVjZTtcbiAgICAgICAgICAgIGNhc2UgXCJPUGllY2VcIjpcbiAgICAgICAgICAgICAgICByZXR1cm4gbmV3IE9QaWVjZTtcbiAgICAgICAgICAgIGNhc2UgXCJJUGllY2VcIjpcbiAgICAgICAgICAgICAgICByZXR1cm4gbmV3IElQaWVjZTtcbiAgICAgICAgICAgIGNhc2UgXCJMUGllY2VcIjpcbiAgICAgICAgICAgICAgICByZXR1cm4gbmV3IExQaWVjZTtcbiAgICAgICAgICAgIGNhc2UgXCJKUGllY2VcIjpcbiAgICAgICAgICAgICAgICByZXR1cm4gbmV3IEpQaWVjZTtcbiAgICAgICAgICAgIGNhc2UgXCJTUGllY2VcIjpcbiAgICAgICAgICAgICAgICByZXR1cm4gbmV3IFNQaWVjZTtcbiAgICAgICAgICAgIGNhc2UgXCJaUGllY2VcIjpcbiAgICAgICAgICAgICAgICByZXR1cm4gbmV3IFpQaWVjZTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8vIHRha2Ugb25lIHBpZWNlIGZyb20gbmV4dEJhZyBhbmQgYWRkIHRvIGN1cnJlbnRCYWdcbiAgICBhZGRUb0N1cnJlbnRCYWcoKSB7XG4gICAgICAgIHRoaXMuY3VycmVudEJhZy5wdXNoKHRoaXMubmV4dEJhZy5zaGlmdCgpKTtcbiAgICB9XG5cbiAgICBzaG93Q3VycmVudEJhZygpIHtcbiAgICAgICAgbGV0IGJveGVzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShgbmV4dC1ib3ggZmllbGQtJHt0aGlzLmdhbWVOdW19YCk7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgNTsgaSsrKSB7XG4gICAgICAgICAgICB0aGlzLl9wb3B1bGF0ZU5leHRCb3goYm94ZXNbaV0sIHRoaXMuY3VycmVudEJhZ1tpXSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBfcG9wdWxhdGVOZXh0Qm94KGJveCwgcGllY2UpIHtcbiAgICAgICAgLy8gY29sdW1ucyBpcyBub2RlbGlzdCBvZiA8dWxzPlxuICAgICAgICBsZXQgY29sdW1ucyA9IGJveC5jaGlsZHJlbjtcblxuICAgICAgICAvLyByZW1vdmUgY29sb3JzIGZyb20gcHJldmlvdXMgcGllY2VcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCA1OyBpKyspIHtcbiAgICAgICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgNDsgaisrKSB7XG4gICAgICAgICAgICAgICAgLy8gY29sdW1ucy5jaGlsZHJlbiBpcyBub2RlbGlzdCBvZiA8bGlzPlxuICAgICAgICAgICAgICAgIGNvbHVtbnNbaV0uY2hpbGRyZW5bal0uY2xhc3NOYW1lID0gXCJcIjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC8vIHBvcHVsYXRlIGJveCB3aXRoIG5ldyBwaWVjZVxuICAgICAgICBwaWVjZS5kaXNwbGF5U3F1YXJlcy5mb3JFYWNoKHNxdWFyZSA9PiB7XG4gICAgICAgICAgICBsZXQgW2NvbCwgcm93XSA9IFtzcXVhcmVbMF0sIHNxdWFyZVsxXV07XG4gICAgICAgICAgICBjb2x1bW5zW2NvbF0uY2hpbGRyZW5bcm93XS5jbGFzc0xpc3QuYWRkKHRoaXMuY29sb3JzW3BpZWNlLmNvbG9yQ29kZV0pO1xuICAgICAgICB9KVxuICAgIH1cblxuICAgIC8vIHJlZmlsbCBuZXh0IGJhZywgd2lsbCBvbmx5IGJlIGNhbGxlZCBvbmNlIG5leHRCYWcgYmVjb21lcyBlbXB0eVxuICAgIHJlZmlsbE5leHRCYWcoKSB7XG4gICAgICAgIHRoaXMubmV4dEJhZyA9IHRoaXMuZ2VuZXJhdGVCYWcoKTtcbiAgICB9XG5cbiAgICAvLyBpbXBsZW1lbnRhdGlvbiBvZiBzaHVmZmxlIGZvdW5kIG9uIGh0dHBzOi8vc3RhY2tvdmVyZmxvdy5jb20vcXVlc3Rpb25zLzI0NTA5NTQvaG93LXRvLXJhbmRvbWl6ZS1zaHVmZmxlLWEtamF2YXNjcmlwdC1hcnJheSMyNDUwOTc2XG4gICAgc2h1ZmZsZUJhZyhiYWcpIHtcbiAgICAgICAgdmFyIGN1cnJlbnRJbmRleCA9IGJhZy5sZW5ndGgsIHRlbXBvcmFyeVZhbHVlLCByYW5kb21JbmRleDtcblxuICAgICAgICAvLyBXaGlsZSB0aGVyZSByZW1haW4gZWxlbWVudHMgdG8gc2h1ZmZsZS4uLlxuICAgICAgICB3aGlsZSAoMCAhPT0gY3VycmVudEluZGV4KSB7XG5cbiAgICAgICAgICAgIC8vIFBpY2sgYSByZW1haW5pbmcgZWxlbWVudC4uLlxuICAgICAgICAgICAgcmFuZG9tSW5kZXggPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBjdXJyZW50SW5kZXgpO1xuICAgICAgICAgICAgY3VycmVudEluZGV4IC09IDE7XG5cbiAgICAgICAgICAgIC8vIEFuZCBzd2FwIGl0IHdpdGggdGhlIGN1cnJlbnQgZWxlbWVudC5cbiAgICAgICAgICAgIHRlbXBvcmFyeVZhbHVlID0gYmFnW2N1cnJlbnRJbmRleF07XG4gICAgICAgICAgICBiYWdbY3VycmVudEluZGV4XSA9IGJhZ1tyYW5kb21JbmRleF07XG4gICAgICAgICAgICBiYWdbcmFuZG9tSW5kZXhdID0gdGVtcG9yYXJ5VmFsdWU7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGJhZztcbiAgICB9XG4gICAgLy8gaW1wbGVtZW50YXRpb24gb2Ygc2h1ZmZsZSBmb3VuZCBvbiBodHRwczovL3N0YWNrb3ZlcmZsb3cuY29tL3F1ZXN0aW9ucy8yNDUwOTU0L2hvdy10by1yYW5kb21pemUtc2h1ZmZsZS1hLWphdmFzY3JpcHQtYXJyYXkjMjQ1MDk3NlxuXG4gICAgLy8gbG9vayB0aHJvdWdoIGZpZWxkLCBpZiBmaWVsZFtyb3ddW2NvbF0gY29udGFpbnMgYSBudW1iZXIgPiAwLCBmaWxsIHRoYXQgc3BvdCB3aXRoIHRoZSByZXNwZWN0aXZlIGNvbG9yLiBcbiAgICAvLyBpZiBjb250YWlucyBhbiAneCcsIHBvcHVsYXRlIHdpdGggZ2hvc3QgcGllY2Ugc3R5bGVzLlxuICAgIC8vIGVsc2UsIHJlbW92ZSBjb2xvclxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgLy8gaWYgKHRoaXMuY3VycmVudFBpZWNlLnJpZ2h0TW9zdFsxXSA+IDkgfHwgdGhpcy5jdXJyZW50UGllY2UubGVmdE1vc3RbMV0gPCAwKSByZXR1cm47XG4gICAgICAgIGxldCBmaWVsZENvbHVtbnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKGAuZmllbGQtY29sdW1uLmZpZWxkLSR7dGhpcy5nYW1lTnVtfWApO1xuICAgICAgICB0aGlzLmZpZWxkLmZvckVhY2goKHJvdywgcm93SWR4KSA9PiB7XG4gICAgICAgICAgICByb3cuZm9yRWFjaCgoY29sLCBjb2xJZHgpID0+IHtcbiAgICAgICAgICAgICAgICBsZXQgc3F1YXJlVmFsdWUgPSB0aGlzLmZpZWxkW3Jvd0lkeF1bY29sSWR4XTtcbiAgICAgICAgICAgICAgICBpZiAoc3F1YXJlVmFsdWUgPT09ICd4Jykge1xuICAgICAgICAgICAgICAgICAgICBmaWVsZENvbHVtbnNbY29sSWR4XS5jaGlsZHJlbltyb3dJZHhdLmNsYXNzTGlzdC5hZGQoYHgtJHt0aGlzLmNvbG9yc1t0aGlzLmN1cnJlbnRQaWVjZS5jb2xvckNvZGVdfWApO1xuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoc3F1YXJlVmFsdWUpIHtcbiAgICAgICAgICAgICAgICAgICAgZmllbGRDb2x1bW5zW2NvbElkeF0uY2hpbGRyZW5bcm93SWR4XS5jbGFzc0xpc3QuYWRkKHRoaXMuY29sb3JzW3NxdWFyZVZhbHVlXSk7XG4gICAgICAgICAgICAgICAgICAgIGZpZWxkQ29sdW1uc1tjb2xJZHhdLmNoaWxkcmVuW3Jvd0lkeF0uY2xhc3NMaXN0LnJlbW92ZShgeC0ke3RoaXMuY29sb3JzW3RoaXMuY3VycmVudFBpZWNlLmNvbG9yQ29kZV19YCk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgZmllbGRDb2x1bW5zW2NvbElkeF0uY2hpbGRyZW5bcm93SWR4XS5jbGFzc0xpc3QgPSBcIlwiO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBrZXlMaXN0ZW5lcigpIHtcbiAgICAgICAgZG9jdW1lbnQuYm9keS5hZGRFdmVudExpc3RlbmVyKFwia2V5ZG93blwiLCBldmVudCA9PiB7XG4gICAgICAgICAgICB0aGlzLmN1cnJlbnRQaWVjZS5zZXRPdXRlclNxdWFyZXMoKTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHRoaXMpO1xuICAgICAgICAgICAgLy8gdGhpcy5jbGVhckdob3N0UG9zaXRpb24oKTtcbiAgICAgICAgICAgIHN3aXRjaChldmVudC53aGljaCkge1xuICAgICAgICAgICAgICAgIC8vIHVwIGtleVxuICAgICAgICAgICAgICAgIGNhc2UgdGhpcy5jb250cm9scy50dXJuUmlnaHQ6XG4gICAgICAgICAgICAgICAgICAgIC8vIHBhc3MgZmllbGQgc28gcGllY2UgY2FuIGNoZWNrIGZpZWxkIHdhbGwgYmVmb3JlIHR1cm5pbmdcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jbGVhckdob3N0UG9zaXRpb24oKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy50U3BpbiA9IHRoaXMuY3VycmVudFBpZWNlLm1vdmUoXCJ0dXJuUmlnaHRcIiwgdGhpcy5maWVsZCk7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHRoaXMpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmN1cnJlbnRQaWVjZS5wb3B1bGF0ZUZpZWxkKHRoaXMuZmllbGQpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnNldEdob3N0UG9zaXRpb24oKTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgLy8gQyBrZXlcbiAgICAgICAgICAgICAgICBjYXNlIHRoaXMuY29udHJvbHMudHVybkxlZnQ6XG4gICAgICAgICAgICAgICAgICAgIC8vIHBhc3MgZmllbGQgc28gcGllY2UgY2FuIGNoZWNrIGZpZWxkIHdhbGwgYmVmb3JlIHR1cm5pbmdcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jbGVhckdob3N0UG9zaXRpb24oKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jdXJyZW50UGllY2UubW92ZShcInR1cm5MZWZ0XCIsIHRoaXMuZmllbGQpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmN1cnJlbnRQaWVjZS5wb3B1bGF0ZUZpZWxkKHRoaXMuZmllbGQpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnNldEdob3N0UG9zaXRpb24oKTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgLy8gbGVmdCBrZXlcbiAgICAgICAgICAgICAgICBjYXNlIHRoaXMuY29udHJvbHMubGVmdDpcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5rZXlIZWxkLmxlZnQgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5jdXJyZW50UGllY2UubGVmdFNpZGVCbG9ja2VkKHRoaXMuZmllbGQpKSBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5tb3ZlUGllY2UoXCJsZWZ0XCIpO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAvLyByaWdodCBrZXlcbiAgICAgICAgICAgICAgICBjYXNlIHRoaXMuY29udHJvbHMucmlnaHQ6XG4gICAgICAgICAgICAgICAgICAgIHRoaXMua2V5SGVsZC5yaWdodCA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLmN1cnJlbnRQaWVjZS5yaWdodFNpZGVCbG9ja2VkKHRoaXMuZmllbGQpKSBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5tb3ZlUGllY2UoXCJyaWdodFwiKTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgLy8gZG93biBrZXlcbiAgICAgICAgICAgICAgICBjYXNlIHRoaXMuY29udHJvbHMuc29mdERyb3A6XG4gICAgICAgICAgICAgICAgICAgIHRoaXMua2V5SGVsZC5kb3duID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5tb3ZlUGllY2UoXCJkb3duXCIpO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAvLyBzaGlmdCBrZXlcbiAgICAgICAgICAgICAgICBjYXNlIHRoaXMuY29udHJvbHMuaG9sZDogXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY2xlYXJHaG9zdFBvc2l0aW9uKCk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuaG9sZCgpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmN1cnJlbnRQaWVjZS5wb3B1bGF0ZUZpZWxkKHRoaXMuZmllbGQpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnNldEdob3N0UG9zaXRpb24oKTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgLy8gc3BhY2UgYmFyXG4gICAgICAgICAgICAgICAgY2FzZSB0aGlzLmNvbnRyb2xzLmhhcmREcm9wOlxuICAgICAgICAgICAgICAgICAgICAvLyB0aGlzLnJlbmRlcigpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmNsZWFyR2hvc3RQb3NpdGlvbigpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmN1cnJlbnRQaWVjZS5oYXJkRHJvcCh0aGlzLmZpZWxkKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5yZW5kZXIoKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jdXJyZW50UGllY2UucG9wdWxhdGVGaWVsZCh0aGlzLmZpZWxkKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5oYW5kbGVQaWVjZVN0b3AodGhpcy5oYW5kbGVDbGVhci5kcm9wKTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgLy8gUCBrZXlcbiAgICAgICAgICAgICAgICBjYXNlIDgwOlxuICAgICAgICAgICAgICAgICAgICB0aGlzLmlzUGF1c2VkID8gdGhpcy5kcm9wUGllY2UodGhpcy5kcm9wU3BlZWQpIDogY2FuY2VsQW5pbWF0aW9uRnJhbWUodGhpcy5oYW5kbGVDbGVhci5kcm9wKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5pc1BhdXNlZCA9ICF0aGlzLmlzUGF1c2VkO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMuY3VycmVudFBpZWNlLnNldE91dGVyU3F1YXJlcygpO1xuICAgICAgICAgICAgdGhpcy5yZW5kZXIoKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgZG9jdW1lbnQuYm9keS5hZGRFdmVudExpc3RlbmVyKFwia2V5dXBcIiwgZXZlbnQgPT4ge1xuICAgICAgICAgICAgc3dpdGNoIChldmVudC53aGljaCkge1xuICAgICAgICAgICAgICAgIGNhc2UgdGhpcy5jb250cm9scy5yaWdodDogXG4gICAgICAgICAgICAgICAgICAgIHRoaXMua2V5SGVsZC5yaWdodCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlIHRoaXMuY29udHJvbHMubGVmdDogXG4gICAgICAgICAgICAgICAgICAgIHRoaXMua2V5SGVsZC5sZWZ0ID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgdGhpcy5jb250cm9scy5zb2Z0RHJvcDogXG4gICAgICAgICAgICAgICAgICAgIHRoaXMua2V5SGVsZC5kb3duID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrOyAgXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGNsZWFyTGluZXMobG93ZXN0LCBoaWdoZXN0LCBudW1MaW5lc0NsZWFyZWQpIHtcbiAgICAgICAgaWYgKGxvd2VzdCA8IDApIHJldHVybjtcbiAgICAgICAgLy8gYmFzZSBjYXNlOiBpZiB3ZSByZWFjaCBhIHJvdyB0aGF0IGlzIGhpZ2hlciB0aGFuIHRoZSBoaWdoZXN0LCB0aGVuIHJldHVybiBudW1iZXIgb2YgbGluZXMgdGhhdCB3ZXJlIGNsZWFyZWRcbiAgICAgICAgaWYgKGxvd2VzdCA8IGhpZ2hlc3QpIHtcbiAgICAgICAgICAgIHJldHVybiBudW1MaW5lc0NsZWFyZWQ7XG4gICAgICAgIH07XG4gICAgICAgIC8vIHJlY3Vyc2l2ZSBjYXNlOiBcbiAgICAgICAgLy8gaWYgbG93ZXN0IHJvdyBkb2VzIG5vdCBjb250YWluIGEgMCwgYnJpbmcgYWxsIGFib3ZlIHJvd3MgZG93biBvbmUgbGV2ZWxcbiAgICAgICAgaWYgKCF0aGlzLmZpZWxkW2xvd2VzdF0uaW5jbHVkZXMoMCkpIHtcbiAgICAgICAgICAgIHRoaXMuX2JyaW5nRG93bkZpZWxkKGxvd2VzdCk7XG4gICAgICAgICAgICAvLyBjYWxsIHJlY3Vyc2l2ZUNsZWFyKGxvd2VzdCwgaGlnaGVzdCArIDEpO1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuY2xlYXJMaW5lcyhsb3dlc3QsIGhpZ2hlc3QgKyAxLCBudW1MaW5lc0NsZWFyZWQgKyAxKVxuICAgICAgICAvLyBpZiByb3cgY29udGFpbnMgYSAwIFxuICAgICAgICAvLyBjYWxsIENsZWFyTGluZXMobG93ZXN0IC0gMSwgaGlnaGVzdClcbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLmZpZWxkW2xvd2VzdF0uaW5jbHVkZXMoMCkpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmNsZWFyTGluZXMobG93ZXN0IC0gMSwgaGlnaGVzdCwgbnVtTGluZXNDbGVhcmVkKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIF9icmluZ0Rvd25GaWVsZChzdGFydGluZ1Jvdykge1xuICAgICAgICBmb3IgKGxldCBpID0gc3RhcnRpbmdSb3c7IGkgPiAwOyBpLS0pIHtcbiAgICAgICAgICAgIHRoaXMuZmllbGRbaV0gPSB0aGlzLmZpZWxkW2kgLSAxXTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmZpZWxkWzBdID0gWzAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDBdO1xuICAgIH1cblxuICAgIGhhbmRsZVBpZWNlU3RvcCgpIHsgIFxuICAgICAgICAvLyBhbGxvdyBwbGF5ZXIgdG8gaG9sZCBwaWVjZSBhZ2FpblxuICAgICAgICB0aGlzLmNhbkhvbGQgPSB0cnVlO1xuICAgICAgICBsZXQgbG93ZXN0ID0gdGhpcy5jdXJyZW50UGllY2UucG9zaXRpb24uYm90dG9tWzBdWzBdO1xuICAgICAgICAvLyBpbiBjYXNlIG9mIGxpbmUgcGllY2UsIHdoaWNoIG1heSBub3QgaGF2ZSB0aGlzLnBvc2l0aW9uLnRvcFxuICAgICAgICBsZXQgaGlnaGVzdCA9ICF0aGlzLmN1cnJlbnRQaWVjZS5wb3NpdGlvbi50b3AubGVuZ3RoID8gbG93ZXN0IDogdGhpcy5jdXJyZW50UGllY2UucG9zaXRpb24udG9wWzBdWzBdO1xuICAgICAgICAvLyBjaGVjayBpZiBhIFRQaWVjZSB3YXMgc3B1biBpbiBwbGFjZVxuICAgICAgICBpZiAodGhpcy5jdXJyZW50UGllY2UubmFtZSA9PT0gXCJUUGllY2VcIikge1xuICAgICAgICAgICAgbGV0IFtsZWZ0TW9zdFJvdywgcmlnaHRNb3N0Um93XSA9IFt0aGlzLmN1cnJlbnRQaWVjZS5sZWZ0TW9zdFswXSwgdGhpcy5jdXJyZW50UGllY2UucmlnaHRNb3N0WzBdXTtcbiAgICAgICAgICAgIGxldCBbbGVmdE1vc3RDb2wsIHJpZ2h0TW9zdENvbF0gPSBbdGhpcy5jdXJyZW50UGllY2UubGVmdE1vc3RbMV0sIHRoaXMuY3VycmVudFBpZWNlLnJpZ2h0TW9zdFsxXV07XG4gICAgICAgICAgICBpZiAodGhpcy5maWVsZFtsZWZ0TW9zdFJvdyAtIDFdICYmIHRoaXMuZmllbGRbcmlnaHRNb3N0Um93IC0gMV0pIHtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5maWVsZFtsZWZ0TW9zdFJvdyAtIDFdW2xlZnRNb3N0Q29sXSB8fCB0aGlzLmZpZWxkW3JpZ2h0TW9zdFJvdyAtIDFdW3JpZ2h0TW9zdENvbF0pIHRoaXMudFNwaW4gPSB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGxldCBudW1MaW5lc0NsZWFyZWQgPSB0aGlzLmNsZWFyTGluZXMobG93ZXN0LCBoaWdoZXN0LCAwKTtcblxuICAgICAgICAvLyBpbiB0aGUgY2FzZSBvZiBtdWx0aXBsYXllciwgc2VuZCBjbGVhcmVkIGxpbmVzIHRvIG9wcG9uZW50IGFuZCByZWNlaXZlIHBvdGVudGlhbCBsaW5lc1xuICAgICAgICBpZiAodGhpcy5vcHBvbmVudCkge1xuICAgICAgICAgICAgaWYgKHRoaXMudFNwaW5TdHJlYWsgPT09IHRydWUpIGRlYnVnZ2VyXG4gICAgICAgICAgICBpZiAobnVtTGluZXNDbGVhcmVkID4gMCkge1xuICAgICAgICAgICAgICAgIHRoaXMuY29tYm8gKz0gMTtcbiAgICAgICAgICAgICAgICBsZXQgbnVtTGluZXNcbiAgICAgICAgICAgICAgICBpZiAobnVtTGluZXNDbGVhcmVkIDwgNCkge1xuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5jdXJyZW50UGllY2UubmFtZSA9PT0gXCJUUGllY2VcIiAmJiB0aGlzLnRTcGluKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBudW1MaW5lcyA9IG51bUxpbmVzQ2xlYXJlZCA9PT0gMyA/IDYgOiA0O1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgbnVtTGluZXMgPSBudW1MaW5lc0NsZWFyZWQgLSAxO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy50U3BpblN0cmVhayA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgbnVtTGluZXMgPSA0O1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIG51bUxpbmVzICs9IHRoaXMuY29tYm9HdWlkZVt0aGlzLmNvbWJvXTtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy50U3BpblN0cmVhaykgbnVtTGluZXMgKz0gMjtcblxuICAgICAgICAgICAgICAgIGlmICh0aGlzLnVwY29taW5nTGluZXMgPiAwKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMudXBjb21pbmdMaW5lcyAtPSBudW1MaW5lcztcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMudXBjb21pbmdMaW5lcyA8IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMub3Bwb25lbnQuYWRkTGluZXNUb1F1ZXVlKE1hdGguYWJzKHRoaXMudXBjb21pbmdMaW5lcykpO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy51cGNvbWluZ0xpbmVzID0gMDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGFkanVzdFF1ZXVlSGVpZ2h0KHRoaXMuZ2FtZU51bSwgMCk7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBhZGp1c3RRdWV1ZUhlaWdodCh0aGlzLmdhbWVOdW0sIHRoaXMudXBjb21pbmdMaW5lcyAqIDUpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5vcHBvbmVudC5hZGRMaW5lc1RvUXVldWUobnVtTGluZXMpO1xuICAgICAgICAgICAgICAgICAgICBkZWJ1Z2dlclxuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy50U3BpbiA9PT0gdHJ1ZSkgdGhpcy50U3BpblN0cmVhayA9IHRydWU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLmNvbWJvID0gLTE7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMudXBjb21pbmdMaW5lcyA+IDApIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5yZWNlaXZlVXBjb21pbmdMaW5lcyh0aGlzLnVwY29taW5nTGluZXMpO1xuICAgICAgICAgICAgICAgICAgICBhZGp1c3RRdWV1ZUhlaWdodCh0aGlzLmdhbWVOdW0sIDApO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gXG4gICAgICAgIH1cbiAgICAgICAgLy8gcmVzZXQgdFNwaW4gdHJhY2tlclxuICAgICAgICB0aGlzLnRTcGluID0gZmFsc2VcbiAgICAgICAgdGhpcy5jbGVhckdob3N0Q2xhc3MoKTtcbiAgICAgICAgY2FuY2VsQW5pbWF0aW9uRnJhbWUodGhpcy5oYW5kbGVDbGVhci5kcm9wKTtcbiAgICAgICAgdGhpcy5wbGF5KCk7XG4gICAgfVxuXG4gICAgZHJvcFBpZWNlKGZwcykge1xuICAgICAgICAvLyBEbyB3aGF0ZXZlclxuICAgICAgICB0aGlzLmFuaW1hdGUuZHJvcC5mcHNJbnRlcnZhbCA9IDEwMDAgLyBmcHM7XG4gICAgICAgIHRoaXMuYW5pbWF0ZS5kcm9wLnRoZW4gPSBEYXRlLm5vdygpO1xuICAgICAgICB0aGlzLmFuaW1hdGUuZHJvcC5zdGFydFRpbWUgPSB0aGlzLnRoZW47XG4gICAgICAgIHRoaXMuZHJvcCh0aGlzLmZpZWxkKTtcbiAgICB9XG5cbiAgICAvLyBpbnNwaXJhdGlvbiBmb3IgdGhyb3R0bGluZyByZXF1ZXN0QW5pbWF0aW9uRnJhbWUgZnJvbSBodHRwczovL3N0YWNrb3ZlcmZsb3cuY29tL3F1ZXN0aW9ucy8xOTc2NDAxOC9jb250cm9sbGluZy1mcHMtd2l0aC1yZXF1ZXN0YW5pbWF0aW9uZnJhbWVcbiAgICBkcm9wKCkge1xuICAgICAgICB0aGlzLmhhbmRsZUNsZWFyLmRyb3AgPSByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoKCkgPT4gdGhpcy5kcm9wKHRoaXMuZmllbGQpKTtcbiAgICAgICAgdGhpcy5hbmltYXRlLmRyb3Aubm93ID0gRGF0ZS5ub3coKTtcbiAgICAgICAgbGV0IGVsYXBzZWQgPSB0aGlzLmFuaW1hdGUuZHJvcC5ub3cgLSB0aGlzLmFuaW1hdGUuZHJvcC50aGVuO1xuICAgICAgICBpZiAoZWxhcHNlZCA+IHRoaXMuYW5pbWF0ZS5kcm9wLmZwc0ludGVydmFsKSB7XG4gICAgICAgICAgICAvLyBHZXQgcmVhZHkgZm9yIG5leHQgZnJhbWUgYnkgc2V0dGluZyB0aGVuPW5vdywgYWRqdXN0aW5nIGZvciBzcGVjaWZpZWQgZnBzSW50ZXJ2YWwgbm90IGJlaW5nIGEgbXVsdGlwbGUgb2YgUkFGJ3MgaW50ZXJ2YWwgKDE2LjdtcylcbiAgICAgICAgICAgIHRoaXMuYW5pbWF0ZS5kcm9wLnRoZW4gPSB0aGlzLmFuaW1hdGUuZHJvcC5ub3cgLSAoZWxhcHNlZCAlIHRoaXMuYW5pbWF0ZS5kcm9wLmZwc0ludGVydmFsKTtcbiAgICAgICAgICAgIHRoaXMuY3VycmVudFBpZWNlLnBvcHVsYXRlRmllbGQodGhpcy5maWVsZCk7XG4gICAgICAgICAgICB0aGlzLnJlbmRlcigpO1xuICAgICAgICAgICAgaWYgKCF0aGlzLmN1cnJlbnRQaWVjZS5pc0ZhbGxpbmcodGhpcy5maWVsZCkpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmhhbmRsZVBpZWNlU3RvcCh0aGlzLmhhbmRsZUNsZWFyLmRyb3ApO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHRoaXMuY3VycmVudFBpZWNlLmJvdHRvbU1vc3RbMF0gIT0gMCkgdGhpcy5jdXJyZW50UGllY2UuZHJvcCh0aGlzLmZpZWxkKTtcbiAgICAgICAgICAgIC8vIHRoaXMuc2V0R2hvc3RQb3NpdGlvbigpO1xuICAgICAgICAgICAgdGhpcy5jdXJyZW50UGllY2UucG9wdWxhdGVGaWVsZCh0aGlzLmZpZWxkKTsgLy8ga2VlcCBvbmx5IG9uZSBwb3B1bGF0ZSBmaWVsZD9cbiAgICAgICAgICAgIHRoaXMucmVuZGVyKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBtb3ZlUGllY2UoZGlyZWN0aW9uKSB7XG4gICAgICAgIC8vIERvIHdoYXRldmVyXG4gICAgICAgIHRoaXMuYW5pbWF0ZVtkaXJlY3Rpb25dLmZwc0ludGVydmFsID0gMTAwMCAvIHRoaXMubW92ZVNwZWVkO1xuICAgICAgICB0aGlzLmFuaW1hdGVbZGlyZWN0aW9uXS50aGVuID0gRGF0ZS5ub3coKTtcbiAgICAgICAgdGhpcy5hbmltYXRlW2RpcmVjdGlvbl0uc3RhcnRUaW1lID0gdGhpcy5hbmltYXRlW2RpcmVjdGlvbl0udGhlbjtcbiAgICAgICAgdGhpcy5tb3ZlKGRpcmVjdGlvbik7XG4gICAgfVxuXG4gICAgLy8gaW5zcGlyYXRpb24gZm9yIHRocm90dGxpbmcgcmVxdWVzdEFuaW1hdGlvbkZyYW1lIGZyb20gaHR0cHM6Ly9zdGFja292ZXJmbG93LmNvbS9xdWVzdGlvbnMvMTk3NjQwMTgvY29udHJvbGxpbmctZnBzLXdpdGgtcmVxdWVzdGFuaW1hdGlvbmZyYW1lXG4gICAgbW92ZShkaXJlY3Rpb24pIHtcbiAgICAgICAgdGhpcy5oYW5kbGVDbGVhcltkaXJlY3Rpb25dID0gcmVxdWVzdEFuaW1hdGlvbkZyYW1lKCgpID0+IHRoaXMubW92ZShkaXJlY3Rpb24pKTtcbiAgICAgICAgaWYgKCF0aGlzLmtleUhlbGRbZGlyZWN0aW9uXSkgY2FuY2VsQW5pbWF0aW9uRnJhbWUodGhpcy5oYW5kbGVDbGVhcltkaXJlY3Rpb25dKTtcbiAgICAgICAgdGhpcy5hbmltYXRlW2RpcmVjdGlvbl0ubm93ID0gRGF0ZS5ub3coKTtcbiAgICAgICAgbGV0IGVsYXBzZWQgPSB0aGlzLmFuaW1hdGVbZGlyZWN0aW9uXS5ub3cgLSB0aGlzLmFuaW1hdGVbZGlyZWN0aW9uXS50aGVuO1xuICAgICAgICBpZiAoZWxhcHNlZCA+IHRoaXMuYW5pbWF0ZVtkaXJlY3Rpb25dLmZwc0ludGVydmFsKSB7XG4gICAgICAgICAgICAvLyBHZXQgcmVhZHkgZm9yIG5leHQgZnJhbWUgYnkgc2V0dGluZyB0aGVuPW5vdywgYWRqdXN0aW5nIGZvciBzcGVjaWZpZWQgZnBzSW50ZXJ2YWwgbm90IGJlaW5nIGEgbXVsdGlwbGUgb2YgUkFGJ3MgaW50ZXJ2YWwgKDE2LjdtcylcbiAgICAgICAgICAgIHRoaXMuYW5pbWF0ZVtkaXJlY3Rpb25dLnRoZW4gPSB0aGlzLmFuaW1hdGVbZGlyZWN0aW9uXS5ub3cgLSAoZWxhcHNlZCAlIHRoaXMuYW5pbWF0ZVtkaXJlY3Rpb25dLmZwc0ludGVydmFsKTtcblxuICAgICAgICAgICAgLy8gcHJldmVudCBwaWVjZSBmcm9tIG1vdmluZyBpZiBpdCBpcyBibG9ja2VkIG9yIGlmIGJvdGggbGVmdCBhbmQgcmlnaHQgYXJyb3cga2V5cyBhcmUgaGVsZCBkb3duXG4gICAgICAgICAgICBpZiAoXG4gICAgICAgICAgICAgICAgZGlyZWN0aW9uID09PSBcInJpZ2h0XCIgJiYgdGhpcy5jdXJyZW50UGllY2UucmlnaHRTaWRlQmxvY2tlZCh0aGlzLmZpZWxkKSBcbiAgICAgICAgICAgICAgICB8fCBcbiAgICAgICAgICAgICAgICBkaXJlY3Rpb24gPT09IFwibGVmdFwiICYmIHRoaXMuY3VycmVudFBpZWNlLmxlZnRTaWRlQmxvY2tlZCh0aGlzLmZpZWxkKSBcbiAgICAgICAgICAgICAgICB8fCBcbiAgICAgICAgICAgICAgICBkaXJlY3Rpb24gPT09IFwiZG93blwiICYmICF0aGlzLmN1cnJlbnRQaWVjZS5pc0ZhbGxpbmcodGhpcy5maWVsZClcbiAgICAgICAgICAgICAgICB8fCBcbiAgICAgICAgICAgICAgICB0aGlzLmtleUhlbGQucmlnaHQgJiYgdGhpcy5rZXlIZWxkLmxlZnRcbiAgICAgICAgICAgICkgcmV0dXJuOyBcblxuICAgICAgICAgICAgdGhpcy5jdXJyZW50UGllY2UubW92ZShkaXJlY3Rpb24pO1xuICAgICAgICAgICAgdGhpcy5jdXJyZW50UGllY2UucG9wdWxhdGVGaWVsZCh0aGlzLmZpZWxkKTtcblxuICAgICAgICAgICAgLy8gZG9uJ3QgbmVlZCB0byByZS1wb3B1bGF0ZSBnaG9zdCBwb3NpdGlvbiBpZiB0aGUgcGllY2UgaXMgc29mdC1kcm9wcGluZ1xuICAgICAgICAgICAgaWYgKGRpcmVjdGlvbiAhPT0gXCJkb3duXCIpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmNsZWFyR2hvc3RQb3NpdGlvbigpO1xuICAgICAgICAgICAgICAgIHRoaXMuc2V0R2hvc3RQb3NpdGlvbigpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB0aGlzLnJlbmRlcigpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgaGFuZGxlVG9wUGllY2UoKSB7XG4gICAgICAgIGxldCBhdFRvcCA9IGZhbHNlO1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgd2hpbGUgKHRoaXMuZmllbGRbdGhpcy5jdXJyZW50UGllY2UucG9zaXRpb24uYm90dG9tWzBdWzBdXVszXSB8fCB0aGlzLmZpZWxkW3RoaXMuY3VycmVudFBpZWNlLnBvc2l0aW9uLmJvdHRvbVswXVswXV1bNF0gfHwgdGhpcy5maWVsZFt0aGlzLmN1cnJlbnRQaWVjZS5wb3NpdGlvbi5ib3R0b21bMF1bMF1dWzVdIHx8IHRoaXMuZmllbGRbdGhpcy5jdXJyZW50UGllY2UucG9zaXRpb24uYm90dG9tWzBdWzBdXVs2XSkge1xuICAgICAgICAgICAgICAgIHRoaXMuY3VycmVudFBpZWNlLm1vdmUoXCJ1cFwiLCB0aGlzLmZpZWxkKTtcbiAgICAgICAgICAgICAgICBhdFRvcCA9IHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gY2F0Y2gge1xuICAgICAgICAgICAgdGhpcy5nYW1lT3Zlcih0aGlzLm9wcG9uZW50LmdhbWVOdW0pO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBhdFRvcDtcbiAgICB9XG4gICAgXG4gICAgcGxheSgpIHtcbiAgICAgICAgdGhpcy5zZXRDdXJyZW50UGllY2UoKTtcbiAgICAgICAgaWYgKHRoaXMuaGFuZGxlVG9wUGllY2UoKSA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgdGhpcy5jdXJyZW50UGllY2UucG9wdWxhdGVGaWVsZCh0aGlzLmZpZWxkLCBcImF0VG9wXCIpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5jdXJyZW50UGllY2UucG9wdWxhdGVGaWVsZCh0aGlzLmZpZWxkKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmFkZFRvQ3VycmVudEJhZygpO1xuICAgICAgICB0aGlzLnNob3dDdXJyZW50QmFnKCk7XG4gICAgICAgIGlmICghdGhpcy5uZXh0QmFnLmxlbmd0aCkgdGhpcy5yZWZpbGxOZXh0QmFnKCk7XG4gICAgICAgIHRoaXMuc2V0R2hvc3RQb3NpdGlvbigpO1xuICAgICAgICAvLyBkcm9wIHBpZWNlIGF0IGdpdmVuIGZwc1xuICAgICAgICB0aGlzLmRyb3BQaWVjZSh0aGlzLmRyb3BTcGVlZCk7ICAgIFxuICAgIH1cblxuICAgIGdhbWVPdmVyKHdpbm5lcikge1xuICAgICAgICB0aGlzLmRyb3BTcGVlZCA9IDA7XG4gICAgICAgIGxldCBnYW1lT3ZlclNjcmVlbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIGdhbWVPdmVyU2NyZWVuLmNsYXNzTGlzdC5hZGQoXCJnYW1lLW92ZXItZGl2XCIpO1xuICAgICAgICBcbiAgICAgICAgbGV0IGdhbWVPdmVySGVhZGluZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMlwiKTtcbiAgICAgICAgZ2FtZU92ZXJIZWFkaW5nLmNsYXNzTGlzdC5hZGQoXCJnYW1lLW92ZXItaGVhZGluZ1wiKTtcblxuICAgICAgICBnYW1lT3ZlckhlYWRpbmcuaW5uZXJIVE1MID0gXCJHQU1FIE9WRVJcIjtcbiAgICAgICAgZ2FtZU92ZXJTY3JlZW4uYXBwZW5kKGdhbWVPdmVySGVhZGluZyk7XG5cbiAgICAgICAgbGV0IHdpbm5lckhlYWRpbmc7XG4gICAgICAgIGlmICh3aW5uZXIpICB7XG4gICAgICAgICAgICB3aW5uZXJIZWFkaW5nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgyXCIpO1xuICAgICAgICAgICAgd2lubmVySGVhZGluZy5jbGFzc0xpc3QuYWRkKFwiZ2FtZS1vdmVyLWhlYWRpbmdcIik7XG4gICAgICAgICAgICB3aW5uZXJIZWFkaW5nLmlubmVySFRNTCA9IGBQTEFZRVIgJHt3aW5uZXJ9IFdJTlNgO1xuICAgICAgICAgICAgZ2FtZU92ZXJTY3JlZW4uYXBwZW5kKHdpbm5lckhlYWRpbmcpXG4gICAgICAgIH0gICBcblxuICAgICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGdhbWVPdmVyU2NyZWVuKTtcbiAgICB9XG5cbiAgICAvLyBtdWx0aXBsYXllciBcbiAgICBzZXRPcHBvbmVudChwbGF5ZXIpIHtcbiAgICAgICAgdGhpcy5vcHBvbmVudCA9IHBsYXllcjtcbiAgICB9XG5cbiAgICBhZGRMaW5lc1RvUXVldWUobnVtTGluZXMpIHtcbiAgICAgICAgdGhpcy51cGNvbWluZ0xpbmVzICs9IG51bUxpbmVzO1xuICAgICAgICBsZXQgcGVyY2VudGFnZSA9IHRoaXMudXBjb21pbmdMaW5lcyAqIDU7XG4gICAgICAgIGFkanVzdFF1ZXVlSGVpZ2h0KHRoaXMuZ2FtZU51bSwgcGVyY2VudGFnZSk7XG4gICAgfVxuXG4gICAgcmVjZWl2ZVVwY29taW5nTGluZXMoKSB7XG4gICAgICAgIGxldCBnYXJiYWdlTGluZXMgPSBbXTtcbiAgICAgICAgbGV0IG51bUxpbmVzID0gdGhpcy51cGNvbWluZ0xpbmVzO1xuICAgICAgICBsZXQgcmFuZG9tSG9sZTtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBudW1MaW5lczsgaSsrKSB7XG4gICAgICAgICAgICBpZiAoaSAlIDIgPT09IDApIHJhbmRvbUhvbGUgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiA5KTtcbiAgICAgICAgICAgIGxldCBnYXJiYWdlUm93ID0gWzgsIDgsIDgsIDgsIDgsIDgsIDgsIDgsIDgsIDhdO1xuICAgICAgICAgICAgZ2FyYmFnZVJvd1tyYW5kb21Ib2xlXSA9IDA7XG4gICAgICAgICAgICBnYXJiYWdlTGluZXMucHVzaChnYXJiYWdlUm93KTtcbiAgICAgICAgfVxuICAgICAgICAvLyBpZiBwbGF5ZXIgcmVhY2hlcyB0aGUgdG9wLCBwbGF5ZXIgbG9zZXNcbiAgICAgICAgLy8gc2xpY2UgYWxsb3dzIHBsYXllciB0byBjb250aW51ZSBwbGF5aW5nIGlmIHRvcCBtaWRkbGUgaXMgY2xlYXJcbiAgICAgICAgaWYgKCF0aGlzLmZpZWxkW251bUxpbmVzIC0gMV0uc2xpY2UoMiw3KS5pbmNsdWRlcygwKSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuZmllbGQgPSB0aGlzLmZpZWxkLnNsaWNlKG51bUxpbmVzLCAyMCkuY29uY2F0KGdhcmJhZ2VMaW5lcyk7XG4gICAgICAgIHRoaXMudXBjb21pbmdMaW5lcyA9IDA7XG4gICAgICAgIHRoaXMucmVuZGVyKCk7XG4gICAgfVxufSIsImltcG9ydCBNZW51IGZyb20gJy4vbWVudS9tZW51J1xuXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCAoKSA9PiB7XG4gICAgY29uc3QgbWVudSA9IG5ldyBNZW51O1xuICAgIG1lbnUucmVuZGVyTWVudSgpO1xufSk7IiwiaW1wb3J0IEdhbWUgZnJvbSAnLi4vZ2FtZS9nYW1lJztcbmltcG9ydCBGaWVsZCBmcm9tICcuLi9maWVsZC9maWVsZCc7XG5pbXBvcnQgTXVsdGlwbGF5ZXIgZnJvbSAnLi4vbXVsdGlwbGF5ZXIvbXVsdGlwbGF5ZXInO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNZW51IHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5tZW51ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJtZW51XCIpO1xuXG4gICAgICAgIHRoaXMub3B0aW9uc1BsYXllcjEgPSB7IGdhbWVOdW06IDEsIG1vdmVTcGVlZDogMjUsIGNvbnRyb2xzOiB7IGxlZnQ6IDY1LCByaWdodDogNjgsIHR1cm5SaWdodDogODcsIHNvZnREcm9wOiA4MywgaG9sZDogODEsIHR1cm5MZWZ0OiAxOTIsIGhhcmREcm9wOiA0OSB9IH1cbiAgICAgICAgdGhpcy5vcHRpb25zUGxheWVyMiA9IHsgZ2FtZU51bTogMiwgbW92ZVNwZWVkOiAxNSwgY29udHJvbHM6IHsgbGVmdDogMzcsIHJpZ2h0OiAzOSwgdHVyblJpZ2h0OiAzOCwgc29mdERyb3A6IDQwLCBob2xkOiAxOTAsIHR1cm5MZWZ0OiA3NSwgaGFyZERyb3A6IDE2IH0gfVxuICAgICAgICAgICAgXG5cbiAgICAgICAgdGhpcy5nYW1lMSA9IG5ldyBHYW1lKHRoaXMub3B0aW9uc1BsYXllcjEpO1xuICAgICAgICB0aGlzLmdhbWUyID0gbmV3IEdhbWUodGhpcy5vcHRpb25zUGxheWVyMik7XG5cbiAgICAgICAgdGhpcy5maWVsZDEgPSBuZXcgRmllbGQoMSk7XG4gICAgICAgIHRoaXMuZmllbGQyID0gbmV3IEZpZWxkKDIpO1xuXG4gICAgICAgIHRoaXMubXVsdGlwbGF5ZXJNb2RlID0gbmV3IE11bHRpcGxheWVyKHRoaXMuZ2FtZTEsIHRoaXMuZ2FtZTIpO1xuXG4gICAgICAgIHRoaXMuZmllbGRDb250YWluZXIxID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJmaWVsZC1jb250YWluZXItMVwiKTtcbiAgICAgICAgdGhpcy5maWVsZENvbnRhaW5lcjIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImZpZWxkLWNvbnRhaW5lci0yXCIpO1xuICAgIH1cblxuICAgIHJlbmRlckJ1dHRvbnMoKSB7XG4gICAgICAgIGxldCBzaW5nbGVQbGF5ZXJCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICBsZXQgbXVsdGlwbGF5ZXJCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuXG4gICAgICAgIHNpbmdsZVBsYXllckJ1dHRvbi5jbGFzc0xpc3QuYWRkKFwic2luZ2xlLXBsYXllci1idXR0b25cIik7XG4gICAgICAgIG11bHRpcGxheWVyQnV0dG9uLmNsYXNzTGlzdC5hZGQoXCJtdWx0aXBsYXllci1idXR0b25cIik7XG5cbiAgICAgICAgc2luZ2xlUGxheWVyQnV0dG9uLmlubmVySFRNTCA9IFwiU2luZ2xlIFBsYXllclwiO1xuICAgICAgICBtdWx0aXBsYXllckJ1dHRvbi5pbm5lckhUTUwgPSBcIk11bHRpcGxheWVyXCI7XG5cbiAgICAgICAgdGhpcy5hZGRFdmVudExpc3RlbmVycyhzaW5nbGVQbGF5ZXJCdXR0b24sIG11bHRpcGxheWVyQnV0dG9uKTtcblxuICAgICAgICByZXR1cm4gW3NpbmdsZVBsYXllckJ1dHRvbiwgbXVsdGlwbGF5ZXJCdXR0b25dO1xuICAgIH1cblxuICAgIGFkZEV2ZW50TGlzdGVuZXJzKHNpbmdsZVBsYXllckJ1dHRvbiwgbXVsdGlwbGF5ZXJCdXR0b24pIHtcbiAgICAgICAgc2luZ2xlUGxheWVyQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5yZW5kZXJTaW5nbGVQbGF5ZXIoKTtcbiAgICAgICAgfSk7XG4gICAgICAgIG11bHRpcGxheWVyQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5yZW5kZXJNdWx0aXBsYXllcigpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICByZW5kZXJTaW5nbGVQbGF5ZXIoKSB7XG4gICAgICAgIGRvY3VtZW50LmJvZHkucmVtb3ZlQ2hpbGQodGhpcy5tZW51KTtcbiAgICAgICAgZG9jdW1lbnQuYm9keS5zdHlsZS5qdXN0aWZ5Q29udGVudCA9ICdub25lJztcbiAgICAgICAgdGhpcy5maWVsZDEuY3JlYXRlQ29tcGxldGVGaWVsZCh0aGlzLmZpZWxkQ29udGFpbmVyMSk7XG4gICAgICAgIHRoaXMuZmllbGRDb250YWluZXIxLnN0eWxlLnBvc2l0aW9uID0gJ3JlbGF0aXZlJztcbiAgICAgICAgdGhpcy5maWVsZENvbnRhaW5lcjEuc3R5bGUubGVmdCA9ICcxNHZ3JztcbiAgICAgICAgdGhpcy5nYW1lMS5rZXlMaXN0ZW5lcigpO1xuICAgICAgICB0aGlzLmdhbWUxLnBsYXkoKTtcbiAgICB9XG5cbiAgICByZW5kZXJNdWx0aXBsYXllcigpIHtcbiAgICAgICAgZG9jdW1lbnQuYm9keS5yZW1vdmVDaGlsZCh0aGlzLm1lbnUpO1xuICAgICAgICB0aGlzLmZpZWxkMS5jcmVhdGVDb21wbGV0ZUZpZWxkKHRoaXMuZmllbGRDb250YWluZXIxKTtcbiAgICAgICAgdGhpcy5nYW1lMS5rZXlMaXN0ZW5lcigpO1xuXG4gICAgICAgIHRoaXMuZmllbGQyLmNyZWF0ZUNvbXBsZXRlRmllbGQodGhpcy5maWVsZENvbnRhaW5lcjIpO1xuICAgICAgICB0aGlzLmdhbWUyLmtleUxpc3RlbmVyKCk7XG5cbiAgICAgICAgdGhpcy5tdWx0aXBsYXllck1vZGUuc3RhcnRNdWx0aXBsYXllcigpO1xuICAgIH1cblxuICAgIHJlbmRlck1lbnUoKSB7XG4gICAgICAgIGxldCBidXR0b25Db250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICBidXR0b25Db250YWluZXIuY2xhc3NMaXN0LmFkZChcImJ1dHRvbi1jb250YWluZXJcIik7XG4gICAgICAgIHRoaXMucmVuZGVyQnV0dG9ucygpLmZvckVhY2goYnV0dG9uID0+IHtcbiAgICAgICAgICAgIGJ1dHRvbkNvbnRhaW5lci5hcHBlbmRDaGlsZChidXR0b24pO1xuICAgICAgICB9KVxuICAgICAgICB0aGlzLm1lbnUuYXBwZW5kQ2hpbGQoYnV0dG9uQ29udGFpbmVyKTtcbiAgICB9XG59IiwiaW1wb3J0IEdhbWUgZnJvbSAnLi4vZ2FtZS9nYW1lJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTXVsdGlwbGF5ZXIge1xuICAgIGNvbnN0cnVjdG9yKHBsYXllcjEsIHBsYXllcjIpIHtcbiAgICAgICAgdGhpcy5wbGF5ZXIxID0gcGxheWVyMTtcbiAgICAgICAgdGhpcy5wbGF5ZXIyID0gcGxheWVyMjtcbiAgICB9XG5cbiAgICBzdGFydE11bHRpcGxheWVyKCkge1xuICAgICAgICB0aGlzLnBsYXllcjEuc2V0T3Bwb25lbnQodGhpcy5wbGF5ZXIyKTtcbiAgICAgICAgdGhpcy5wbGF5ZXIyLnNldE9wcG9uZW50KHRoaXMucGxheWVyMSk7XG4gICAgICAgIHRoaXMucGxheWVyMS5wbGF5KCk7XG4gICAgICAgIHRoaXMucGxheWVyMi5wbGF5KCk7XG4gICAgfVxufVxuIiwiaW1wb3J0IFBpZWNlIGZyb20gJy4vcGllY2UnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBJUGllY2UgZXh0ZW5kcyBQaWVjZSB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIHRoaXMubmFtZSA9IFwiSVBpZWNlXCI7XG4gICAgICAgIHRoaXMucG9zaXRpb24gPSB7XG4gICAgICAgICAgICB0b3A6IFtdLFxuICAgICAgICAgICAgbWlkZGxlOiBbXSxcbiAgICAgICAgICAgIGJvdHRvbTogW1sxLCAzXSwgWzEsIDRdLCBbMSwgNV0sIFsxLCA2XV1cbiAgICAgICAgfTtcbiAgICAgICAgdGhpcy5jb2xvckNvZGUgPSAyO1xuICAgICAgICB0aGlzLnR1cm5pbmdQb2ludCA9IFsxLCA0XTtcbiAgICAgICAgdGhpcy5kaXNwbGF5U3F1YXJlcyA9IFtbMCwgMl0sIFsxLCAyXSwgWzIsIDJdLCBbMywgMl1dO1xuXG4gICAgICAgIHRoaXMucmVtb3ZlU3F1YXJlcyA9IFtdO1xuXG4gICAgICAgIHRoaXMub2Zmc2V0R3VpZGUgPSB7XG4gICAgICAgICAgICAwOiBbWzAsIDBdLCBbMCwgLTFdLCBbMCwgMl0sIFswLCAtMV0sIFswLCAyXV0sXG4gICAgICAgICAgICAxOiBbWzAsIC0xXSwgWzAsIDBdLCBbMCwgMF0sIFsxLCAwXSwgWy0yLCAwXV0sXG4gICAgICAgICAgICAyOiBbWzEsIC0xXSwgWzEsIDFdLCBbMSwgLTJdLCBbMCwgMV0sIFswLCAtMl1dLFxuICAgICAgICAgICAgMzogW1sxLCAwXSwgWzEsIDBdLCBbMSwgMF0sIFstMSwgMF0sIFsyLCAwXV1cbiAgICAgICAgfVxuICAgIH1cblxuXG59XG5cblxuIiwiaW1wb3J0IFBpZWNlIGZyb20gJy4vcGllY2UnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBqUGllY2UgZXh0ZW5kcyBQaWVjZSB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIHRoaXMubmFtZSA9IFwiSlBpZWNlXCI7XG4gICAgICAgIHRoaXMucG9zaXRpb24gPSB7XG4gICAgICAgICAgICB0b3A6IFtbMCwgM11dLFxuICAgICAgICAgICAgbWlkZGxlOiBbXSxcbiAgICAgICAgICAgIGJvdHRvbTogW1sxLCAzXSwgWzEsIDRdLCBbMSwgNV1dXG4gICAgICAgIH07XG4gICAgICAgIHRoaXMuY29sb3JDb2RlID0gNztcblxuICAgICAgICB0aGlzLnR1cm5pbmdQb2ludCA9IFsxLCA0XTtcblxuICAgICAgICB0aGlzLmRpc3BsYXlTcXVhcmVzID0gW1sxLCAxXSwgWzEsIDJdLCBbMiwgMl0sIFszLCAyXV07XG4gXG4gICAgICAgIHRoaXMucmVtb3ZlU3F1YXJlcyA9IFtdO1xuICAgIH1cbn0iLCJpbXBvcnQgUGllY2UgZnJvbSAnLi9waWVjZSc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIGxQaWVjZSBleHRlbmRzIFBpZWNlIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgdGhpcy5uYW1lID0gXCJMUGllY2VcIjtcbiAgICAgICAgdGhpcy5wb3NpdGlvbiA9IHtcbiAgICAgICAgICAgIHRvcDogW1swLCA1XV0sXG4gICAgICAgICAgICBtaWRkbGU6IFtdLFxuICAgICAgICAgICAgYm90dG9tOiBbWzEsIDNdLCBbMSwgNF0sIFsxLCA1XV1cbiAgICAgICAgfTtcbiAgICAgICAgdGhpcy5jb2xvckNvZGUgPSA2O1xuXG4gICAgICAgIHRoaXMudHVybmluZ1BvaW50ID0gWzEsIDRdO1xuXG4gICAgICAgIHRoaXMuZGlzcGxheVNxdWFyZXMgPSBbWzEsIDJdLCBbMiwgMl0sIFszLCAyXSwgWzMsIDFdXTtcblxuICAgICAgICB0aGlzLnJlbW92ZVNxdWFyZXMgPSBbXTtcbiAgICB9XG59IiwiaW1wb3J0IFBpZWNlIGZyb20gJy4vcGllY2UnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBPUGllY2UgZXh0ZW5kcyBQaWVjZSB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIHRoaXMubmFtZSA9IFwiT1BpZWNlXCI7XG4gICAgICAgIHRoaXMucG9zaXRpb24gPSB7XG4gICAgICAgICAgICB0b3A6IFtbMCwgNF0sIFswLCA1XV0sXG4gICAgICAgICAgICBtaWRkbGU6IFtdLFxuICAgICAgICAgICAgYm90dG9tOiBbWzEsIDRdLFsxLCA1XV1cbiAgICAgICAgfTtcbiAgICAgICAgdGhpcy5jb2xvckNvZGUgPSAxO1xuICAgICAgICB0aGlzLnR1cm5pbmdQb2ludCA9IFsxLCA0XTtcbiAgICAgICAgdGhpcy5kaXNwbGF5U3F1YXJlcyA9IFtbMSwgMV0sIFsyLCAxXSwgWzEsIDJdLCBbMiwgMl1dO1xuXG4gICAgICAgIHRoaXMucmVtb3ZlU3F1YXJlcyA9IFtdO1xuICAgIH1cblxuICAgIC8vIE9QaWVjZSBkb2VzIG5vdCB0dXJuXG4gICAgdHVyblJpZ2h0KCkge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIFxuICAgIHR1cm5MZWZ0KCkge1xuICAgICAgICByZXR1cm47XG4gICAgfVxufSAiLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBQaWVjZSB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMubGVmdE1vc3QgPSAnJztcbiAgICAgICAgdGhpcy5yaWdodE1vc3QgPSAnJztcbiAgICAgICAgdGhpcy5ib3R0b21Nb3N0ID0gJyc7XG4gICAgICAgIHRoaXMudG9wTW9zdCA9ICcnO1xuXG4gICAgICAgIHRoaXMucm90YXRpb25TdGF0ZSA9IDA7XG5cbiAgICAgICAgdGhpcy5vZmZzZXRHdWlkZSA9IHtcbiAgICAgICAgICAgIDA6IFtbMCwgMF0sIFswLCAwXSwgWzAsIDBdLCBbMCwgMF0sIFswLCAwXV0sXG4gICAgICAgICAgICAxOiBbWzAsIDBdLCBbMCwgMV0sIFstMSwgMV0sIFsyLCAwXSwgWzIsIDFdXSxcbiAgICAgICAgICAgIDI6IFtbMCwgMF0sIFswLCAwXSwgWzAsIDBdLCBbMCwgMF0sIFswLCAwXV0sXG4gICAgICAgICAgICAzOiBbWzAsIDBdLCBbMCwgLTFdLCBbLTEsIC0xXSwgWzIsIDBdLCBbMiwgLTFdXVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgc2V0T3V0ZXJTcXVhcmVzKCkge1xuICAgICAgICBsZXQgbGVmdE1vc3QsIHJpZ2h0TW9zdCwgdG9wTW9zdCwgYm90dG9tTW9zdDtcbiAgICAgICAgT2JqZWN0LnZhbHVlcyh0aGlzLnBvc2l0aW9uKS5mb3JFYWNoKGNvb3JkaW5hdGVzQXJyYXkgPT4gY29vcmRpbmF0ZXNBcnJheS5mb3JFYWNoKGFycmF5ID0+IHtcbiAgICAgICAgICAgIGxldCBjb2x1bW5WYWx1ZSA9IGFycmF5WzFdO1xuICAgICAgICAgICAgbGV0IHJvd1ZhbHVlID0gYXJyYXlbMF07XG4gICAgICAgICAgICBpZiAoIWxlZnRNb3N0IHx8IGNvbHVtblZhbHVlIDwgbGVmdE1vc3RbMV0pIGxlZnRNb3N0ID0gW3Jvd1ZhbHVlLCBjb2x1bW5WYWx1ZV07XG4gICAgICAgICAgICBpZiAoIXJpZ2h0TW9zdCB8fCBjb2x1bW5WYWx1ZSA+IHJpZ2h0TW9zdFsxXSkgcmlnaHRNb3N0ID0gW3Jvd1ZhbHVlLCBjb2x1bW5WYWx1ZV07XG4gICAgICAgICAgICBpZiAoIWJvdHRvbU1vc3QgfHwgcm93VmFsdWUgPiBib3R0b21Nb3N0WzBdKSBib3R0b21Nb3N0ID0gW3Jvd1ZhbHVlLCBjb2x1bW5WYWx1ZV07XG4gICAgICAgICAgICBpZiAoIXRvcE1vc3QgfHwgcm93VmFsdWUgPCB0b3BNb3N0WzBdKSB0b3BNb3N0ID0gW3Jvd1ZhbHVlLCBjb2x1bW5WYWx1ZV07XG4gICAgICAgIH0pKTtcbiAgICAgICAgdGhpcy5sZWZ0TW9zdCA9IGxlZnRNb3N0O1xuICAgICAgICB0aGlzLnJpZ2h0TW9zdCA9IHJpZ2h0TW9zdDtcbiAgICAgICAgdGhpcy50b3BNb3N0ID0gdG9wTW9zdDtcbiAgICAgICAgdGhpcy5ib3R0b21Nb3N0ID0gYm90dG9tTW9zdDtcbiAgICB9XG5cbiAgICBwb3B1bGF0ZUZpZWxkKGZpZWxkKSB7XG4gICAgICAgIGxldCBjb29yZGluYXRlQXJyYXlzID0gT2JqZWN0LnZhbHVlcyh0aGlzLnBvc2l0aW9uKTtcblxuICAgICAgICBjb29yZGluYXRlQXJyYXlzLmZvckVhY2goYXJyYXkgPT4ge1xuICAgICAgICAgICAgYXJyYXkuZm9yRWFjaChjb29yZGluYXRlID0+IHtcbiAgICAgICAgICAgICAgICBsZXQgW3JvdywgY29sXSA9IFtjb29yZGluYXRlWzBdLCBjb29yZGluYXRlWzFdXTtcbiAgICAgICAgICAgICAgICBpZiAoKGNvbCA+PSAwICYmIGNvbCA8PSAxOSkgJiYgKHJvdyA+PSAwICYmIHJvdyA8PSAxOSkpIGZpZWxkW3Jvd11bY29sXSA9IHRoaXMuY29sb3JDb2RlO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgfSk7XG5cbiAgICAgICAgdGhpcy5yZW1vdmVTcXVhcmVzLmZvckVhY2gocG9zaXRpb25BcnJheSA9PiB7XG4gICAgICAgICAgICBsZXQgW3JvdywgY29sXSA9IFtwb3NpdGlvbkFycmF5WzBdLCBwb3NpdGlvbkFycmF5WzFdXTtcbiAgICAgICAgICAgIGlmICgoY29sID49IDAgJiYgY29sIDw9IDE5KSAmJiAocm93ID49IDAgJiYgcm93IDw9IDE5KSkgZmllbGRbcm93XVtjb2xdID0gMDtcbiAgICAgICAgfSk7XG5cbiAgICB9XG5cbiAgICAvLyBjb21wYXJlcyB0d28gYXJyYXlzIG9mIGNvb3JkaW5hdGVzIGFuZCBjaGVjayBpZiB0aGV5IGhhdmUgdGhlIHNhbWUgY29udGVudCBpbiB0aGUgc2FtZSBvcmRlclxuICAgIF9zcXVhcmVzQXJlRXF1YWwob2xkU3F1YXJlLCBuZXdTcXVhcmUpIHtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBvbGRTcXVhcmUubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGlmIChvbGRTcXVhcmVbaV0gIT09IG5ld1NxdWFyZVtpXSkgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cblxuICAgIF9pbmNsdWRlcyhzcXVhcmUsIGNvb3JkaW5hdGVBcnJheXMpIHtcbiAgICAgICAgbGV0IHJlc3VsdCA9IGZhbHNlO1xuICAgICAgICBjb29yZGluYXRlQXJyYXlzLmZvckVhY2goYXJyYXkgPT4ge1xuICAgICAgICAgICAgaWYgKHRoaXMuX3NxdWFyZXNBcmVFcXVhbChzcXVhcmUsIGFycmF5KSkge1xuICAgICAgICAgICAgICAgIHJlc3VsdCA9IHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cblxuICAgIGRyb3AoKSB7XG4gICAgICAgIGxldCBvbGRQb3NpdGlvbiA9IHtcbiAgICAgICAgICAgIHRvcDogdGhpcy5wb3NpdGlvbi50b3AubWFwKGFycmF5ID0+IGFycmF5LnNsaWNlKCkpLFxuICAgICAgICAgICAgbWlkZGxlOiB0aGlzLnBvc2l0aW9uLm1pZGRsZS5tYXAoYXJyYXkgPT4gYXJyYXkuc2xpY2UoKSksXG4gICAgICAgICAgICBib3R0b206IHRoaXMucG9zaXRpb24uYm90dG9tLm1hcChhcnJheSA9PiBhcnJheS5zbGljZSgpKSxcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMucG9zaXRpb24udG9wID0gdGhpcy5wb3NpdGlvbi50b3AubWFwKGFycmF5ID0+IFthcnJheVswXSArIDEsIGFycmF5WzFdXSk7XG4gICAgICAgIHRoaXMucG9zaXRpb24ubWlkZGxlID0gdGhpcy5wb3NpdGlvbi5taWRkbGUubWFwKGFycmF5ID0+IFthcnJheVswXSArIDEsIGFycmF5WzFdXSk7XG4gICAgICAgIHRoaXMucG9zaXRpb24uYm90dG9tID0gdGhpcy5wb3NpdGlvbi5ib3R0b20ubWFwKGFycmF5ID0+IFthcnJheVswXSArIDEsIGFycmF5WzFdXSk7XG4gICAgICAgIHRoaXMudHVybmluZ1BvaW50ID0gW3RoaXMudHVybmluZ1BvaW50WzBdICsgMSwgdGhpcy50dXJuaW5nUG9pbnRbMV1dO1xuXG4gICAgICAgIHRoaXMuc2V0UmVtb3ZlU3F1YXJlcyhvbGRQb3NpdGlvbik7XG4gICAgfVxuXG4gICAgLy8gZmluZCBoaWdoZXN0IHBvc3NpYmxlIGdyb3VuZC1wb3NpdGlvbiBmb3IgcGllY2VcbiAgICBoYXJkRHJvcChmaWVsZCkge1xuICAgICAgICB0aGlzLmNsZWFyU2VsZkZyb21Cb2FyZChmaWVsZCk7XG4gICAgICAgIGxldCBzdG9wcGVkID0gZmFsc2U7XG4gICAgICAgIHdoaWxlICghc3RvcHBlZCkge1xuICAgICAgICAgICAgbGV0IGhhbmdpbmdTcXVhcmVzID0gdGhpcy5oYW5naW5nU3F1YXJlcyh0aGlzLnBvc2l0aW9uKTtcbiAgICAgICAgICAgIGhhbmdpbmdTcXVhcmVzLmZvckVhY2goY29vcmRpbmF0ZSA9PiB7XG4gICAgICAgICAgICAgICAgbGV0IFtyb3csIGNvbF0gPSBbY29vcmRpbmF0ZVswXSwgY29vcmRpbmF0ZVsxXV07XG4gICAgICAgICAgICAgICAgaWYgKChyb3cgKyAxID09PSAyMCB8fCBmaWVsZFtyb3cgKyAxXVtjb2xdKSkgc3RvcHBlZCA9IHRydWU7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGlmIChzdG9wcGVkKSBicmVhaztcbiAgICAgICAgICAgIHRoaXMucG9zaXRpb24udG9wID0gdGhpcy5wb3NpdGlvbi50b3AubWFwKGFycmF5ID0+IFthcnJheVswXSArIDEsIGFycmF5WzFdXSk7XG4gICAgICAgICAgICB0aGlzLnBvc2l0aW9uLm1pZGRsZSA9IHRoaXMucG9zaXRpb24ubWlkZGxlLm1hcChhcnJheSA9PiBbYXJyYXlbMF0gKyAxLCBhcnJheVsxXV0pO1xuICAgICAgICAgICAgdGhpcy5wb3NpdGlvbi5ib3R0b20gPSB0aGlzLnBvc2l0aW9uLmJvdHRvbS5tYXAoYXJyYXkgPT4gW2FycmF5WzBdICsgMSwgYXJyYXlbMV1dKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNsZWFyU2VsZkZyb21Cb2FyZChmaWVsZCkge1xuICAgICAgICBPYmplY3QudmFsdWVzKHRoaXMucG9zaXRpb24pLmZvckVhY2goY29vcmRpbmF0ZUFycmF5cyA9PiBjb29yZGluYXRlQXJyYXlzLmZvckVhY2goY29vcmRpbmF0ZSA9PiB7XG4gICAgICAgICAgICBsZXQgcm93ID0gY29vcmRpbmF0ZVswXTtcbiAgICAgICAgICAgIGxldCBjb2wgPSBjb29yZGluYXRlWzFdO1xuICAgICAgICAgICAgaWYgKHJvdyA8IDIwICYmIHJvdyA+PSAwICYmIGNvbCA+PSAwICYmIGNvbCA8IDEwKSBmaWVsZFtyb3ddW2NvbF0gPSAwO1xuICAgICAgICB9KSk7XG4gICAgfVxuXG4gICAgbW92ZShkaXJlY3Rpb24sIGZpZWxkKSB7XG4gICAgICAgIGxldCB0U3BpbiA9IGZhbHNlO1xuICAgICAgICBsZXQgb2xkUG9zaXRpb24gPSB7XG4gICAgICAgICAgICB0b3A6IHRoaXMucG9zaXRpb24udG9wLm1hcChhcnJheSA9PiBhcnJheS5zbGljZSgpKSxcbiAgICAgICAgICAgIG1pZGRsZTogdGhpcy5wb3NpdGlvbi5taWRkbGUubWFwKGFycmF5ID0+IGFycmF5LnNsaWNlKCkpLFxuICAgICAgICAgICAgYm90dG9tOiB0aGlzLnBvc2l0aW9uLmJvdHRvbS5tYXAoYXJyYXkgPT4gYXJyYXkuc2xpY2UoKSksXG4gICAgICAgIH1cbiAgICAgICAgc3dpdGNoIChkaXJlY3Rpb24pIHtcbiAgICAgICAgICAgIGNhc2UgXCJsZWZ0XCI6XG4gICAgICAgICAgICAgICAgdGhpcy5wb3NpdGlvbi50b3AgPSB0aGlzLnBvc2l0aW9uLnRvcC5tYXAoYXJyYXkgPT4gW2FycmF5WzBdLCBhcnJheVsxXSAtIDFdKTtcbiAgICAgICAgICAgICAgICB0aGlzLnBvc2l0aW9uLm1pZGRsZSA9IHRoaXMucG9zaXRpb24ubWlkZGxlLm1hcChhcnJheSA9PiBbYXJyYXlbMF0sIGFycmF5WzFdIC0gMV0pO1xuICAgICAgICAgICAgICAgIHRoaXMucG9zaXRpb24uYm90dG9tID0gdGhpcy5wb3NpdGlvbi5ib3R0b20ubWFwKGFycmF5ID0+IFthcnJheVswXSwgYXJyYXlbMV0gLSAxXSk7XG4gICAgICAgICAgICAgICAgdGhpcy50dXJuaW5nUG9pbnQgPSBbdGhpcy50dXJuaW5nUG9pbnRbMF0sIHRoaXMudHVybmluZ1BvaW50WzFdIC0gMV07XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIFwidHVyblJpZ2h0XCI6XG4gICAgICAgICAgICAgICAgLy8gZGVmZXIgdG8gXCJ0dXJuXCIgbWV0aG9kXG4gICAgICAgICAgICAgICAgLy8gdFNwaW4gd2lsbCBlaXRoZXIgYmUgdHJ1dGh5IG9yIGZhbHN5LCB0cmFja2VkIGZvciBzZW5kaW5nIG1vcmUgbGluZXMgZHVyaW5nIG11bHRpcGxheWVyXG4gICAgICAgICAgICAgICAgdFNwaW4gPSB0aGlzLnR1cm5SaWdodChmaWVsZCwgb2xkUG9zaXRpb24pO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBcInJpZ2h0XCI6XG4gICAgICAgICAgICAgICAgdGhpcy5wb3NpdGlvbi50b3AgPSB0aGlzLnBvc2l0aW9uLnRvcC5tYXAoYXJyYXkgPT4gW2FycmF5WzBdLCBhcnJheVsxXSArIDFdKTtcbiAgICAgICAgICAgICAgICB0aGlzLnBvc2l0aW9uLm1pZGRsZSA9IHRoaXMucG9zaXRpb24ubWlkZGxlLm1hcChhcnJheSA9PiBbYXJyYXlbMF0sIGFycmF5WzFdICsgMV0pO1xuICAgICAgICAgICAgICAgIHRoaXMucG9zaXRpb24uYm90dG9tID0gdGhpcy5wb3NpdGlvbi5ib3R0b20ubWFwKGFycmF5ID0+IFthcnJheVswXSwgYXJyYXlbMV0gKyAxXSk7XG4gICAgICAgICAgICAgICAgdGhpcy50dXJuaW5nUG9pbnQgPSBbdGhpcy50dXJuaW5nUG9pbnRbMF0sIHRoaXMudHVybmluZ1BvaW50WzFdICsgMV07XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIFwiZG93blwiOlxuICAgICAgICAgICAgICAgIHRoaXMucG9zaXRpb24udG9wID0gdGhpcy5wb3NpdGlvbi50b3AubWFwKGFycmF5ID0+IFthcnJheVswXSArIDEsIGFycmF5WzFdXSk7XG4gICAgICAgICAgICAgICAgdGhpcy5wb3NpdGlvbi5taWRkbGUgPSB0aGlzLnBvc2l0aW9uLm1pZGRsZS5tYXAoYXJyYXkgPT4gW2FycmF5WzBdICsgMSwgYXJyYXlbMV1dKTtcbiAgICAgICAgICAgICAgICB0aGlzLnBvc2l0aW9uLmJvdHRvbSA9IHRoaXMucG9zaXRpb24uYm90dG9tLm1hcChhcnJheSA9PiBbYXJyYXlbMF0gKyAxLCBhcnJheVsxXV0pO1xuICAgICAgICAgICAgICAgIHRoaXMudHVybmluZ1BvaW50ID0gW3RoaXMudHVybmluZ1BvaW50WzBdICsgMSwgdGhpcy50dXJuaW5nUG9pbnRbMV1dO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBcInVwXCI6XG4gICAgICAgICAgICAgICAgdGhpcy5wb3NpdGlvbi50b3AgPSB0aGlzLnBvc2l0aW9uLnRvcC5tYXAoYXJyYXkgPT4gW2FycmF5WzBdIC0gMSwgYXJyYXlbMV1dKTtcbiAgICAgICAgICAgICAgICB0aGlzLnBvc2l0aW9uLm1pZGRsZSA9IHRoaXMucG9zaXRpb24ubWlkZGxlLm1hcChhcnJheSA9PiBbYXJyYXlbMF0gLSAxLCBhcnJheVsxXV0pO1xuICAgICAgICAgICAgICAgIHRoaXMucG9zaXRpb24uYm90dG9tID0gdGhpcy5wb3NpdGlvbi5ib3R0b20ubWFwKGFycmF5ID0+IFthcnJheVswXSAtIDEsIGFycmF5WzFdXSk7XG4gICAgICAgICAgICAgICAgdGhpcy50dXJuaW5nUG9pbnQgPSBbdGhpcy50dXJuaW5nUG9pbnRbMF0gLSAxLCB0aGlzLnR1cm5pbmdQb2ludFsxXV07XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIFwidHVybkxlZnRcIjpcbiAgICAgICAgICAgICAgICB0aGlzLnR1cm5MZWZ0KGZpZWxkLCBvbGRQb3NpdGlvbik7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5zZXRPdXRlclNxdWFyZXMoKTtcbiAgICAgICAgdGhpcy5zZXRSZW1vdmVTcXVhcmVzKG9sZFBvc2l0aW9uLCBmaWVsZCk7XG4gICAgICAgIHJldHVybiB0U3BpbjtcbiAgICB9XG5cbiAgICB0dXJuUmlnaHQoZmllbGQsIG9sZFBvc2l0aW9uKSB7XG4gICAgICAgIC8vIGNsZWFyIGZyb20gZmllbGQgZmlyc3Qgc28gdGhhdCB0aGUgcGllY2UgZG9lc24ndCBzZWUgaXRzZWxmIGFzIGEgY29uZmxpY3RpbmcgcGllY2VcbiAgICAgICAgdGhpcy5jbGVhclNlbGZGcm9tQm9hcmQoZmllbGQpO1xuICAgICAgICBsZXQgc3F1YXJlcyA9IFtdO1xuICAgICAgICBPYmplY3QudmFsdWVzKHRoaXMucG9zaXRpb24pLmZvckVhY2goY29vcmRpbmF0ZXNBcnJheSA9PiBzcXVhcmVzLnB1c2goLi4uY29vcmRpbmF0ZXNBcnJheSkpO1xuICAgICAgICB0aGlzLnBvc2l0aW9uLnRvcCA9IFtdO1xuICAgICAgICB0aGlzLnBvc2l0aW9uLm1pZGRsZSA9IFtdO1xuICAgICAgICB0aGlzLnBvc2l0aW9uLmJvdHRvbSA9IFtdO1xuICAgICAgICBzcXVhcmVzLmZvckVhY2goc3F1YXJlID0+IHtcbiAgICAgICAgICAgIGxldCBjb2x1bW4gPSBzcXVhcmVbMV07XG4gICAgICAgICAgICBsZXQgaGVpZ2h0RGlmZmVyZW5jZSA9IHRoaXMudHVybmluZ1BvaW50WzBdIC0gc3F1YXJlWzBdO1xuICAgICAgICAgICAgbGV0IHdpZHRoRGlmZmVyZW5jZSA9IHRoaXMudHVybmluZ1BvaW50WzFdIC0gc3F1YXJlWzFdO1xuICAgICAgICAgICAgbGV0IG5ld0NvbCA9IHRoaXMudHVybmluZ1BvaW50WzFdICsgaGVpZ2h0RGlmZmVyZW5jZTtcbiAgICAgICAgICAgIGxldCBuZXdSb3cgPSB0aGlzLnR1cm5pbmdQb2ludFswXSArICh3aWR0aERpZmZlcmVuY2UgKiAtMSk7XG4gICAgICAgICAgICBzd2l0Y2ggKGNvbHVtbikge1xuICAgICAgICAgICAgICAgIGNhc2UgY29sdW1uID0gdGhpcy5yaWdodE1vc3RbMV06XG4gICAgICAgICAgICAgICAgICAgIHRoaXMucG9zaXRpb24uYm90dG9tLnB1c2goW25ld1JvdywgbmV3Q29sXSk7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgY29sdW1uID0gdGhpcy5sZWZ0TW9zdFsxXTpcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wb3NpdGlvbi50b3AucHVzaChbbmV3Um93LCBuZXdDb2xdKTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wb3NpdGlvbi5taWRkbGUucHVzaChbbmV3Um93LCBuZXdDb2xdKTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLnNldFJlbW92ZVNxdWFyZXMob2xkUG9zaXRpb24pO1xuXG4gICAgICAgIC8vIGZpbmQgb3V0ZXItbW9zdCBzcXVhcmVzIHRvIHNlZSBpZiBwaWVjZSBpcyBvYnN0cnVjdGVkXG4gICAgICAgIC8vIGlmIHNvLCBwdXNoIHBpZWNlIGJhY2sgaW50byBmaWVsZFxuICAgICAgICB0aGlzLnNldE91dGVyU3F1YXJlcygpO1xuXG4gICAgICAgIC8vIHJlc2V0IHJvdGF0aW9uIHN0YXRlLCB3aGljaCBpcyB0cmFja2VkIGZvciBpbXBsZW1lbnRpbmcgc3VwZXIgcm90YXRpb24gc3lzdGVtXG4gICAgICAgIHRoaXMucm90YXRpb25TdGF0ZSA9IHRoaXMucm90YXRpb25TdGF0ZSA9PT0gMyA/IDAgOiB0aGlzLnJvdGF0aW9uU3RhdGUgKyAxO1xuXG4gICAgICAgIGxldCBuZXdTcXVhcmVzID0gWy4uLnRoaXMucG9zaXRpb24udG9wLCAuLi50aGlzLnBvc2l0aW9uLm1pZGRsZSwgLi4udGhpcy5wb3NpdGlvbi5ib3R0b21dO1xuICAgICAgICBmb3IgKGxldCBpIGluIG5ld1NxdWFyZXMpIHtcbiAgICAgICAgICAgIGxldCBbcm93LCBjb2xdID0gW25ld1NxdWFyZXNbaV1bMF0sIG5ld1NxdWFyZXNbaV1bMV1dO1xuICAgICAgICAgICAgaWYgKGZpZWxkW3Jvd10gPT09IHVuZGVmaW5lZCB8fCBmaWVsZFtyb3ddW2NvbF0gPT09IHVuZGVmaW5lZCB8fCBmaWVsZFtyb3ddW2NvbF0pIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy53YWxsS2ljayhmaWVsZCwgXCJ0dXJuUmlnaHRcIik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICB0dXJuTGVmdChmaWVsZCwgb2xkUG9zaXRpb24pIHtcbiAgICAgICAgdGhpcy5jbGVhclNlbGZGcm9tQm9hcmQoZmllbGQpO1xuICAgICAgICBsZXQgc3F1YXJlcyA9IFtdO1xuICAgICAgICBPYmplY3QudmFsdWVzKHRoaXMucG9zaXRpb24pLmZvckVhY2goY29vcmRpbmF0ZXNBcnJheSA9PiBzcXVhcmVzLnB1c2goLi4uY29vcmRpbmF0ZXNBcnJheSkpO1xuICAgICAgICB0aGlzLnBvc2l0aW9uLnRvcCA9IFtdO1xuICAgICAgICB0aGlzLnBvc2l0aW9uLm1pZGRsZSA9IFtdO1xuICAgICAgICB0aGlzLnBvc2l0aW9uLmJvdHRvbSA9IFtdO1xuICAgICAgICBzcXVhcmVzLmZvckVhY2goc3F1YXJlID0+IHtcbiAgICAgICAgICAgIGxldCBjb2x1bW4gPSBzcXVhcmVbMV07XG4gICAgICAgICAgICBsZXQgaGVpZ2h0RGlmZmVyZW5jZSA9IHRoaXMudHVybmluZ1BvaW50WzBdIC0gc3F1YXJlWzBdO1xuICAgICAgICAgICAgbGV0IHdpZHRoRGlmZmVyZW5jZSA9IHRoaXMudHVybmluZ1BvaW50WzFdIC0gc3F1YXJlWzFdO1xuICAgICAgICAgICAgbGV0IG5ld0NvbCA9IHRoaXMudHVybmluZ1BvaW50WzFdIC0gaGVpZ2h0RGlmZmVyZW5jZTtcbiAgICAgICAgICAgIGxldCBuZXdSb3cgPSB0aGlzLnR1cm5pbmdQb2ludFswXSAtICh3aWR0aERpZmZlcmVuY2UgKiAtMSk7XG4gICAgICAgICAgICBzd2l0Y2ggKGNvbHVtbikge1xuICAgICAgICAgICAgICAgIGNhc2UgY29sdW1uID0gdGhpcy5yaWdodE1vc3RbMV06XG4gICAgICAgICAgICAgICAgICAgIHRoaXMucG9zaXRpb24udG9wLnB1c2goW25ld1JvdywgbmV3Q29sXSk7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgY29sdW1uID0gdGhpcy5sZWZ0TW9zdFsxXTpcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wb3NpdGlvbi5ib3R0b20ucHVzaChbbmV3Um93LCBuZXdDb2xdKTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wb3NpdGlvbi5taWRkbGUucHVzaChbbmV3Um93LCBuZXdDb2xdKTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgICAgIHRoaXMuc2V0UmVtb3ZlU3F1YXJlcyhvbGRQb3NpdGlvbik7XG5cbiAgICAgICAgLy8gZmluZCBsZWZ0IGFuZCByaWdodCBtb3N0IHNxdWFyZXMgdG8gc2VlIGlmIHBpZWNlIHRocm91Z2ggd2FsbFxuICAgICAgICAvLyBpZiB0aHJvdWdoIHdhbGwsIHB1c2ggcGllY2UgYmFjayBpbnRvIGZpZWxkXG4gICAgICAgIHRoaXMuc2V0T3V0ZXJTcXVhcmVzKCk7XG5cbiAgICAgICAgLy8gcmVzZXQgcm90YXRpb24gc3RhdGUsIHdoaWNoIGlzIHRyYWNrZWQgZm9yIGltcGxlbWVudGluZyBzdXBlciByb3RhdGlvbiBzeXN0ZW1cbiAgICAgICAgdGhpcy5yb3RhdGlvblN0YXRlID0gdGhpcy5yb3RhdGlvblN0YXRlID09PSAwID8gMyA6IHRoaXMucm90YXRpb25TdGF0ZSAtIDE7XG5cbiAgICAgICAgbGV0IG5ld1NxdWFyZXMgPSBbLi4udGhpcy5wb3NpdGlvbi50b3AsIC4uLnRoaXMucG9zaXRpb24ubWlkZGxlLCAuLi50aGlzLnBvc2l0aW9uLmJvdHRvbV07XG4gICAgICAgIGZvciAobGV0IGkgaW4gbmV3U3F1YXJlcykge1xuICAgICAgICAgICAgbGV0IFtyb3csIGNvbF0gPSBbbmV3U3F1YXJlc1tpXVswXSwgbmV3U3F1YXJlc1tpXVsxXV07XG4gICAgICAgICAgICBpZiAoZmllbGRbcm93XSA9PT0gdW5kZWZpbmVkIHx8IGZpZWxkW3Jvd11bY29sXSA9PT0gdW5kZWZpbmVkIHx8IGZpZWxkW3Jvd11bY29sXSkge1xuICAgICAgICAgICAgICAgIHRoaXMud2FsbEtpY2soZmllbGQsIFwidHVybkxlZnRcIik7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgIH1cblxuICAgIC8vIGNvbXBhcmUgb2xkIHBvc2l0aW9uIG9mIHBpZWNlIHdpdGggbmV3IHBvc2l0aW9uIFxuICAgIHNldFJlbW92ZVNxdWFyZXMob2xkUG9zaXRpb24sIGZpZWxkKSB7XG4gICAgICAgIGxldCBvbGRTcXVhcmVzID0gW107XG4gICAgICAgIGxldCBuZXdTcXVhcmVzID0gW107XG4gICAgICAgIE9iamVjdC52YWx1ZXMob2xkUG9zaXRpb24pLmZvckVhY2goY29vcmRpbmF0ZXNBcnJheSA9PiBvbGRTcXVhcmVzLnB1c2goLi4uY29vcmRpbmF0ZXNBcnJheSkpO1xuICAgICAgICBPYmplY3QudmFsdWVzKHRoaXMucG9zaXRpb24pLmZvckVhY2goY29vcmRpbmF0ZXNBcnJheSA9PiBuZXdTcXVhcmVzLnB1c2goLi4uY29vcmRpbmF0ZXNBcnJheSkpO1xuICAgICAgICAvLyBrZWVwIHRyYWNrIG9mIHNxdWFyZXMgdGhhdCB0aGUgcG9zaXRpb25zIGRvIG5vdCBoYXZlIGluIGNvbW1vbiAoc3F1YXJlcyB0byByZW1vdmUgY29sb3IgZnJvbSlcbiAgICAgICAgdGhpcy5yZW1vdmVTcXVhcmVzID0gb2xkU3F1YXJlcy5maWx0ZXIob2xkU3F1YXJlID0+IHtcbiAgICAgICAgICAgIGlmICghZmllbGQpIHtcbiAgICAgICAgICAgICAgICBpZiAoIXRoaXMuX2luY2x1ZGVzKG9sZFNxdWFyZSwgbmV3U3F1YXJlcykpIHJldHVybiBvbGRTcXVhcmU7XG4gICAgICAgICAgICAvLyBpZiBmaWVsZCBhcmd1bWVudCBpcyBwYXNzZWQsIGNoZWNrIHRoZSBmaWVsZCB0byBtYWtlIHN1cmUgdG8gbm90IGNsZWFyIHNxdWFyZXMgb2Ygb3RoZXIgcGllY2VzXG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGlmICghdGhpcy5faW5jbHVkZXMob2xkU3F1YXJlLCBuZXdTcXVhcmVzKSAmJiAhZmllbGRbb2xkU3F1YXJlWzBdXVtvbGRTcXVhcmVbMV1dKSByZXR1cm4gb2xkU3F1YXJlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgXG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGhhbmdpbmdTcXVhcmVzKHBvc2l0aW9uKSB7XG4gICAgICAgIGxldCBzcXVhcmVzID0gW107XG4gICAgICAgIGxldCBoYW5naW5nU3F1YXJlcyA9IFtdO1xuICAgICAgICBPYmplY3QudmFsdWVzKHBvc2l0aW9uKS5mb3JFYWNoKGNvb3JkaW5hdGVBcnJheSA9PiBzcXVhcmVzLnB1c2goLi4uY29vcmRpbmF0ZUFycmF5KSlcbiAgICAgICAgc3F1YXJlcy5mb3JFYWNoKHNxdWFyZSA9PiB7XG4gICAgICAgICAgICBsZXQgYmVsb3dTcXVhcmUgPSBbc3F1YXJlWzBdICsgMSwgc3F1YXJlWzFdXTtcbiAgICAgICAgICAgIGlmICghdGhpcy5faW5jbHVkZXMoYmVsb3dTcXVhcmUsIHNxdWFyZXMpKSBoYW5naW5nU3F1YXJlcy5wdXNoKHNxdWFyZSk7XG4gICAgICAgIH0pXG4gICAgICAgIHJldHVybiBoYW5naW5nU3F1YXJlcztcbiAgICB9XG5cbiAgICBzaWRlU3F1YXJlcygpIHtcbiAgICAgICAgbGV0IHNxdWFyZXMgPSBbXTtcbiAgICAgICAgbGV0IHNpZGVTcXVhcmVzID0ge1xuICAgICAgICAgICAgbGVmdDogW10sXG4gICAgICAgICAgICByaWdodDogW11cbiAgICAgICAgfTtcbiAgICAgICAgT2JqZWN0LnZhbHVlcyh0aGlzLnBvc2l0aW9uKS5mb3JFYWNoKGNvb3JkaW5hdGVBcnJheSA9PiBzcXVhcmVzLnB1c2goLi4uY29vcmRpbmF0ZUFycmF5KSk7XG4gICAgICAgIHNxdWFyZXMuZm9yRWFjaChzcXVhcmUgPT4ge1xuICAgICAgICAgICAgbGV0IGFkamFjZW50TGVmdCA9IFtzcXVhcmVbMF0sIHNxdWFyZVsxXSAtIDFdO1xuICAgICAgICAgICAgbGV0IGFkamFjZW50UmlnaHQgPSBbc3F1YXJlWzBdLCBzcXVhcmVbMV0gKyAxXTtcbiAgICAgICAgICAgIGlmICghdGhpcy5faW5jbHVkZXMoYWRqYWNlbnRMZWZ0LCBzcXVhcmVzKSkgc2lkZVNxdWFyZXMubGVmdC5wdXNoKHNxdWFyZSk7XG4gICAgICAgICAgICBpZiAoIXRoaXMuX2luY2x1ZGVzKGFkamFjZW50UmlnaHQsIHNxdWFyZXMpKSBzaWRlU3F1YXJlcy5yaWdodC5wdXNoKHNxdWFyZSk7XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gc2lkZVNxdWFyZXM7XG4gICAgfVxuXG4gICAgaXNGYWxsaW5nKGZpZWxkKSB7XG4gICAgICAgIGxldCByZXN1bHQgPSB0cnVlO1xuICAgICAgICB0aGlzLmhhbmdpbmdTcXVhcmVzKHRoaXMucG9zaXRpb24pLmZvckVhY2goY29vcmRpbmF0ZVBhaXIgPT4ge1xuICAgICAgICAgICAgbGV0IFtyb3csIGNvbF0gPSBbY29vcmRpbmF0ZVBhaXJbMF0sIGNvb3JkaW5hdGVQYWlyWzFdXTtcbiAgICAgICAgICAgIC8vIGlmIHRoZSBwaWVjZSdzIGN1cnJlbnQgcG9zaXRpb24gaXMgYWJvdmUgdGhlIGZpZWxkIGZsb29yIG9yIGEgYW5vdGhlciBwaWVjZSAobm90IGluY2x1ZGUgZ2hvc3QgcGllY2UpXG4gICAgICAgICAgICBpZiAoIWZpZWxkW3JvdyArIDFdIHx8IChmaWVsZFtyb3cgKyAxXVtjb2xdICYmIGZpZWxkW3JvdyArIDFdW2NvbF0gIT09IFwieFwiKSkge1xuICAgICAgICAgICAgICAgIHJlc3VsdCA9IGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG5cbiAgICByaWdodFNpZGVCbG9ja2VkKGZpZWxkKSB7XG4gICAgICAgIC8vIGlmICh0aGlzLnBvc2l0aW9uLnRvcFswXVswXSA8IDApIHJldHVybiBmYWxzZTtcbiAgICAgICAgbGV0IHJlc3VsdCA9IGZhbHNlO1xuICAgICAgICB0aGlzLnNpZGVTcXVhcmVzKCkucmlnaHQuZm9yRWFjaChjb29yZGluYXRlUGFpciA9PiB7XG4gICAgICAgICAgICBsZXQgW3JvdywgY29sXSA9IFtjb29yZGluYXRlUGFpclswXSwgY29vcmRpbmF0ZVBhaXJbMV1dO1xuICAgICAgICAgICAgLy8gaWYgYW55IHJpZ2h0IGZhY2luZyBzcXVhcmUgaGl0cyB0aGUgd2FsbCBvciBhbm90aGVyIHBpZWNlLCBub3QgaW5jbHVkaW5nIHRoZSBnaG9zdCBwaWVjZVxuICAgICAgICAgICAgaWYgKGNvbCA9PT0gOSB8fCAoZmllbGRbcm93XSAmJiBmaWVsZFtyb3ddW2NvbCArIDFdICYmIGZpZWxkW3JvdyArIDFdW2NvbF0gIT09IFwieFwiKSkge1xuICAgICAgICAgICAgICAgIHJlc3VsdCA9IHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cblxuICAgIGxlZnRTaWRlQmxvY2tlZChmaWVsZCkge1xuICAgICAgICAvLyBpZiAodGhpcy5wb3NpdGlvbi50b3BbMF1bMF0gPCAwKSByZXR1cm4gZmFsc2U7XG4gICAgICAgIGxldCByZXN1bHQgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5zaWRlU3F1YXJlcygpLmxlZnQuZm9yRWFjaChjb29yZGluYXRlUGFpciA9PiB7XG4gICAgICAgICAgICBsZXQgW3JvdywgY29sXSA9IFtjb29yZGluYXRlUGFpclswXSwgY29vcmRpbmF0ZVBhaXJbMV1dO1xuICAgICAgICAgICAgLy8gaWYgYW55IGxlZnQgZmFjaW5nIHNxdWFyZSBoaXRzIHRoZSB3YWxsIG9yIGFub3RoZXIgcGllY2UsIG5vdCBpbmNsdWRpbmcgdGhlIGdob3N0IHBpZWNlXG4gICAgICAgICAgICBpZiAoY29sID09PSAwIHx8IChmaWVsZFtyb3ddICYmIGZpZWxkW3Jvd11bY29sIC0gMV0gJiYgZmllbGRbcm93XVtjb2wgLSAxXSAhPT0gXCJ4XCIpKSB7XG4gICAgICAgICAgICAgICAgcmVzdWx0ID0gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxuXG4gICAgd2FsbEtpY2soZmllbGQsIGFjdGlvbikge1xuICAgICAgICBsZXQgdmFsaWRTcG90LCBzdGFydGluZ09mZnNldDtcbiAgICAgICAgaWYgKGFjdGlvbiA9PT0gXCJ0dXJuUmlnaHRcIikge1xuICAgICAgICAgICAgc3RhcnRpbmdPZmZzZXQgPSB0aGlzLnJvdGF0aW9uU3RhdGUgPT09IDAgPyB0aGlzLm9mZnNldEd1aWRlWzNdIDogdGhpcy5vZmZzZXRHdWlkZVt0aGlzLnJvdGF0aW9uU3RhdGUgLSAxXTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHN0YXJ0aW5nT2Zmc2V0ID0gdGhpcy5yb3RhdGlvblN0YXRlID09PSAzID8gdGhpcy5vZmZzZXRHdWlkZVswXSA6IHRoaXMub2Zmc2V0R3VpZGVbdGhpcy5yb3RhdGlvblN0YXRlICsgMV07XG4gICAgICAgIH1cbiAgICAgICAgbGV0IG5leHRPZmZzZXQgPSB0aGlzLm9mZnNldEd1aWRlW3RoaXMucm90YXRpb25TdGF0ZV07XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgNTsgaSsrKSB7XG4gICAgICAgICAgICB2YWxpZFNwb3QgPSB0cnVlO1xuICAgICAgICAgICAgbGV0IGJhc2VQb3NpdGlvbiA9IHtcbiAgICAgICAgICAgICAgICB0b3A6IHRoaXMucG9zaXRpb24udG9wLm1hcChhcnJheSA9PiBhcnJheS5zbGljZSgpKSxcbiAgICAgICAgICAgICAgICBtaWRkbGU6IHRoaXMucG9zaXRpb24ubWlkZGxlLm1hcChhcnJheSA9PiBhcnJheS5zbGljZSgpKSxcbiAgICAgICAgICAgICAgICBib3R0b206IHRoaXMucG9zaXRpb24uYm90dG9tLm1hcChhcnJheSA9PiBhcnJheS5zbGljZSgpKSxcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGxldCBiYXNlVHVybmluZ1BvaW50ID0gdGhpcy50dXJuaW5nUG9pbnQuc2xpY2UoKTtcblxuICAgICAgICAgICAgbGV0IHN0YXJ0aW5nVHJhbnNsYXRpb24gPSBzdGFydGluZ09mZnNldFtpXTtcbiAgICAgICAgICAgIGxldCBwb3RlbnRpYWxUcmFuc2xhdGlvbiA9IG5leHRPZmZzZXRbaV07XG4gICAgICAgICAgICBsZXQgcm93U2hpZnQgPSBzdGFydGluZ1RyYW5zbGF0aW9uWzBdIC0gcG90ZW50aWFsVHJhbnNsYXRpb25bMF07XG4gICAgICAgICAgICBsZXQgY29sU2hpZnQgPSBzdGFydGluZ1RyYW5zbGF0aW9uWzFdIC0gcG90ZW50aWFsVHJhbnNsYXRpb25bMV07XG4gICAgICAgICAgICBsZXQgdHJhbnNsYXRlVmVydGljYWwgPSByb3dTaGlmdCA+IDAgPyAoKSA9PiB0aGlzLm1vdmUoXCJ1cFwiKSA6ICgpID0+IHRoaXMubW92ZShcImRvd25cIik7XG4gICAgICAgICAgICBsZXQgdHJhbnNsYXRlSG9yaXpvbnRhbCA9IGNvbFNoaWZ0ID4gMCA/ICgpID0+IHRoaXMubW92ZShcInJpZ2h0XCIpIDogKCkgPT4gdGhpcy5tb3ZlKFwibGVmdFwiKTtcbiAgICAgICAgICAgIGZvciAobGV0IG51bVRpbWVzUm93U2hpZnRlZCA9IDA7IG51bVRpbWVzUm93U2hpZnRlZCA8IE1hdGguYWJzKHJvd1NoaWZ0KTsgbnVtVGltZXNSb3dTaGlmdGVkKyspIHtcbiAgICAgICAgICAgICAgICB0cmFuc2xhdGVWZXJ0aWNhbCgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZm9yIChsZXQgbnVtVGltZXNDb2xTaGlmdGVkID0gMDsgbnVtVGltZXNDb2xTaGlmdGVkIDwgTWF0aC5hYnMoY29sU2hpZnQpOyBudW1UaW1lc0NvbFNoaWZ0ZWQrKykge1xuICAgICAgICAgICAgICAgIHRyYW5zbGF0ZUhvcml6b250YWwoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGxldCBuZXdQb3NpdGlvbiA9IFsuLi50aGlzLnBvc2l0aW9uLnRvcCwgLi4udGhpcy5wb3NpdGlvbi5taWRkbGUsIC4uLnRoaXMucG9zaXRpb24uYm90dG9tXTtcbiAgICAgICAgICAgIGZvciAobGV0IGkgaW4gbmV3UG9zaXRpb24pIHtcbiAgICAgICAgICAgICAgICBsZXQgW3JvdywgY29sXSA9IFtuZXdQb3NpdGlvbltpXVswXSwgbmV3UG9zaXRpb25baV1bMV1dO1xuICAgICAgICAgICAgICAgIGlmIChmaWVsZFtyb3ddID09PSB1bmRlZmluZWQgfHwgZmllbGRbcm93XVtjb2xdID09PSB1bmRlZmluZWQgfHwgZmllbGRbcm93XVtjb2xdID4gMCkge1xuICAgICAgICAgICAgICAgICAgICB2YWxpZFNwb3QgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wb3NpdGlvbiA9IGJhc2VQb3NpdGlvbjtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy50dXJuaW5nUG9pbnQgPSBiYXNlVHVybmluZ1BvaW50O1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBhbGxvd3MgdFNwaW4gdmFyaWFibGUgdG8gYmUgdHJ1dGh5XG4gICAgICAgICAgICBpZiAodGhpcy5uYW1lID09PSBcIlRQaWVjZVwiICYmIHZhbGlkU3BvdCkge1xuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufSIsImltcG9ydCBQaWVjZSBmcm9tICcuL3BpZWNlJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU1BpZWNlIGV4dGVuZHMgUGllY2Uge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICB0aGlzLm5hbWUgPSBcIlNQaWVjZVwiO1xuICAgICAgICB0aGlzLnBvc2l0aW9uID0ge1xuICAgICAgICAgICAgdG9wOiBbWzAsIDRdLCBbMCwgNV1dLFxuICAgICAgICAgICAgbWlkZGxlOiBbXSxcbiAgICAgICAgICAgIGJvdHRvbTogW1sxLCAzXSwgWzEsIDRdXVxuICAgICAgICB9O1xuICAgICAgICB0aGlzLmNvbG9yQ29kZSA9IDQ7XG5cbiAgICAgICAgdGhpcy50dXJuaW5nUG9pbnQgPSBbMSwgNF07XG5cbiAgICAgICAgdGhpcy5kaXNwbGF5U3F1YXJlcyA9IFtbMywgMV0sIFsyLCAxXSwgWzIsIDJdLCBbMSwgMl1dO1xuXG4gICAgICAgIHRoaXMucmVtb3ZlU3F1YXJlcyA9IFtdO1xuICAgIH1cbn0iLCJpbXBvcnQgUGllY2UgZnJvbSAnLi9waWVjZSc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRQaWVjZSBleHRlbmRzIFBpZWNlIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgdGhpcy5uYW1lID0gXCJUUGllY2VcIjtcbiAgICAgICAgdGhpcy5wb3NpdGlvbiA9IHtcbiAgICAgICAgICAgIHRvcDogW1swLCA0XV0sXG4gICAgICAgICAgICBtaWRkbGU6IFtdLFxuICAgICAgICAgICAgYm90dG9tOiBbWzEsIDNdLCBbMSwgNF0sIFsxLCA1XV0sXG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5jb2xvckNvZGUgPSAzO1xuXG4gICAgICAgIHRoaXMudHVybmluZ1BvaW50ID0gWzEsIDRdO1xuXG4gICAgICAgIHRoaXMuZGlzcGxheVNxdWFyZXMgPSBbWzEsIDJdLCBbMiwgMl0sIFszLCAyXSwgWzIsIDFdXTtcblxuICAgICAgICB0aGlzLnJlbW92ZVNxdWFyZXMgPSBbXTtcbiAgICB9XG59IiwiaW1wb3J0IFBpZWNlIGZyb20gJy4vcGllY2UnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBaUGllY2UgZXh0ZW5kcyBQaWVjZSB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIHRoaXMubmFtZSA9IFwiWlBpZWNlXCI7XG4gICAgICAgIHRoaXMucG9zaXRpb24gPSB7XG4gICAgICAgICAgICB0b3A6IFtbMCwgM10sIFswLCA0XV0sXG4gICAgICAgICAgICBtaWRkbGU6IFtdLFxuICAgICAgICAgICAgYm90dG9tOiBbWzEsIDRdLCBbMSwgNV1dXG4gICAgICAgIH07XG4gICAgICAgIHRoaXMuY29sb3JDb2RlID0gNTtcblxuICAgICAgICB0aGlzLnR1cm5pbmdQb2ludCA9IFsxLCA0XTtcblxuICAgICAgICB0aGlzLmRpc3BsYXlTcXVhcmVzID0gW1sxLCAxXSwgWzIsIDFdLCBbMiwgMl0sIFszLCAyXV07XG5cbiAgICAgICAgdGhpcy5yZW1vdmVTcXVhcmVzID0gW107XG4gICAgfVxufSJdLCJzb3VyY2VSb290IjoiIn0=