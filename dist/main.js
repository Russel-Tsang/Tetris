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
    this.currentBag = this._shuffleBag(this.generateBag());
    this.currentPiece = '';
    this.holdPiece = '';
    this.ghostPosition = '';
    this.nextBag = this._shuffleBag(this.generateBag()); // prevents player from holding piece multiple times

    this.canHold = true;
    this.handleClear = {
      drop: '',
      right: '',
      left: '',
      down: ''
    }; // for animations

    this.dropSpeed = 1.5;
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
      var coordinateArrays = Object.values(this.ghostPosition);
      coordinateArrays.forEach(function (array) {
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
          if (_this4.currentPiece.bottomMost[0] >= 18) console.log(_this4.field);
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

      if (this.holdPiece === '') {
        // pass current piece name into generate piece in order to generate a new piece instance
        this.holdPiece = this._generatePiece(this.currentPiece.name);
        this.setCurrentPiece(); // re-render next boxes to appropriately show current bag

        this._showCurrentBag();
      } else {
        this.currentPiece = this._generatePiece(this.currentPiece.name);
        var _ref5 = [this.holdPiece, this.currentPiece];
        this.currentPiece = _ref5[0];
        this.holdPiece = _ref5[1];
      }

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
    key: "_addToCurrentBag",
    value: function _addToCurrentBag() {
      this.currentBag.push(this.nextBag.shift());
    }
  }, {
    key: "_showCurrentBag",
    value: function _showCurrentBag() {
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
      var columns = box.children; // remove colors from previous pieces

      for (var i = 0; i < 5; i++) {
        for (var j = 0; j < 4; j++) {
          // columns.children is nodelist of <lis>
          columns[i].children[j].className = "";
        }
      }

      piece.displaySquares.forEach(function (square) {
        var _ref7 = [square[0], square[1]],
            col = _ref7[0],
            row = _ref7[1];
        columns[col].children[row].classList.add(_this6.colors[piece.colorCode]);
      });
    } // refill next bag, will only be called once nextBag becomes empty

  }, {
    key: "_refillNextBag",
    value: function _refillNextBag() {
      this.nextBag = this.generateBag();
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
    // look through field, if field[row][col] contains a number > 0, fill that spot with the respective color. Else, remove color

  }, {
    key: "render",
    value: function render() {
      var _this7 = this;

      if (this.currentPiece.rightMost[1] > 9 || this.currentPiece.leftMost[1] < 0) return;
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
            Object.values(_this7.colors).forEach(function (color) {
              if (fieldColumns[colIdx]) {
                fieldColumns[colIdx].children[rowIdx].classList.remove(color);
                fieldColumns[colIdx].children[rowIdx].classList.remove("x-".concat(color));
              }
            });
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

            _this8.currentPiece.move("turnRight", _this8.field);

            if (_this8.currentPiece.rightMost[1] < 10) {
              _this8.currentPiece.populateField(_this8.field);
            }

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

            _this8.movePiece(_this8.moveSpeed, "left");

            break;
          // right key

          case _this8.controls.right:
            _this8.keyHeld.right = true;
            if (_this8.currentPiece.rightSideBlocked(_this8.field)) break;

            _this8.movePiece(_this8.moveSpeed, "right");

            break;
          // down key

          case _this8.controls.softDrop:
            _this8.keyHeld.down = true;

            _this8.movePiece(_this8.moveSpeed, "down");

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

        _this8.currentPiece.setOuterSquares(); // messes up with piece color
        // this.currentPiece.populateField(this.field);


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
      // base case: if we reach a row that is higher than the highest, then return number of lines that were cleared
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

      var highest = !this.currentPiece.position.top.length ? lowest : this.currentPiece.position.top[0][0];
      if (!this.field[lowest]) console.log("dasd");
      var numLinesCleared = this.clearLines(lowest, highest, 0); // in the case of multiplayer, send cleared lines to opponent and receive potential lines

      if (this.opponent) {
        if (numLinesCleared > 0) {
          this.combo += 1;
          var numLines = numLinesCleared === 4 ? 4 : numLinesCleared - 1;
          numLines += this.comboGuide[this.combo];

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
          }
        } else {
          this.combo = -1;

          if (this.upcomingLines > 0) {
            this.receiveUpcomingLines(this.upcomingLines);
            Object(_field_queue__WEBPACK_IMPORTED_MODULE_8__["adjustQueueHeight"])(this.gameNum, 0);
          }
        }
      }

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
      this.drop();
    } // inspiration for throttling requestAnimationFrame from https://stackoverflow.com/questions/19764018/controlling-fps-with-requestanimationframe

  }, {
    key: "drop",
    value: function drop() {
      this.handleClear.drop = requestAnimationFrame(this.drop);
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

        if (this.currentPiece.bottomMost[0] != 0) this.currentPiece.drop(); // this.setGhostPosition();

        this.currentPiece.populateField(this.field); // keep only one populate field?

        this.render();
      }
    }
  }, {
    key: "movePiece",
    value: function movePiece(fps, direction) {
      // Do whatever
      this.animate[direction].fpsInterval = 1000 / fps;
      this.animate[direction].then = Date.now();
      this.animate[direction].startTime = this.animate[direction].then;
      this.move(direction);
    } // inspiration for throttling requestAnimationFrame from https://stackoverflow.com/questions/19764018/controlling-fps-with-requestanimationframe

  }, {
    key: "move",
    value: function move(direction) {
      var _this9 = this;

      this.handleClear[direction] = requestAnimationFrame(function () {
        return _this9.move(direction);
      });
      if (!this.keyHeld[direction]) cancelAnimationFrame(this.handleClear[direction]);
      this.animate[direction].now = Date.now();
      var elapsed = this.animate[direction].now - this.animate[direction].then;

      if (elapsed > this.animate[direction].fpsInterval) {
        // Get ready for next frame by setting then=now, adjusting for specified fpsInterval not being a multiple of RAF's interval (16.7ms)
        this.animate[direction].then = this.animate[direction].now - elapsed % this.animate[direction].fpsInterval; // prevent piece from moving if it is blocked or if both left and right arrow keys are held down

        if (direction === "right" && this.currentPiece.rightSideBlocked(this.field) || direction === "left" && this.currentPiece.leftSideBlocked(this.field) || direction === "down" && !this.currentPiece.isFalling(this.field) || this.keyHeld.right && this.keyHeld.left) {
          // this.clearGhostPosition();
          // this.setGhostPosition();
          return;
        }

        this.currentPiece.move(direction); // this.clearGhostPosition();

        this.currentPiece.populateField(this.field); // causing ghost position lag

        this.clearGhostPosition();
        this.setGhostPosition();
        this.render(); // break;
      }
    }
  }, {
    key: "handleTopPiece",
    value: function handleTopPiece() {
      var atTop = false;

      try {
        while (this.field[this.currentPiece.position.bottom[0][0]][3] || this.field[this.currentPiece.position.bottom[0][0]][4] || this.field[this.currentPiece.position.bottom[0][0]][5] || this.field[this.currentPiece.position.bottom[0][0]][6]) {
          this.currentPiece.move("up");
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
      debugger;

      if (this.handleTopPiece() === true) {
        this.currentPiece.populateField(this.field, "atTop");
      } else {
        this.currentPiece.populateField(this.field);
      }

      this._addToCurrentBag();

      this._showCurrentBag();

      if (!this.nextBag.length) this._refillNextBag();
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
        winnerHeading.innerHTML = "PLAYER ".concat(winner, " WON");
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
      moveSpeed: 20,
      controls: {
        left: 37,
        right: 39,
        turnRight: 38,
        softDrop: 40,
        hold: 16,
        turnLeft: 67,
        hardDrop: 32
      }
    };
    this.optionsPlayer2 = {
      gameNum: 2,
      moveSpeed: 20,
      controls: {
        left: 188,
        right: 191,
        turnRight: 76,
        softDrop: 190,
        hold: 75,
        turnLeft: 86,
        hardDrop: 18
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
    value: function populateField(field, atTop) {
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
      debugger;
      Object.values(this.position).forEach(function (coordinateArrays) {
        return coordinateArrays.forEach(function (coordinate) {
          var row = coordinate[0];
          var col = coordinate[1];
          if (row < 20 && row >= 0 && col >= 0 && col < 10) field[row][col] = 0;
        });
      });
      debugger;
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

        case "turnRight":
          // defer to subclass "turn" method
          this.turnRight(field, oldPosition);
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
      this.setRemoveSquares(oldPosition);
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
      this.setRemoveSquares(oldPosition); // causing issues with turning into the field???:
      // this.populateField(field);
      // find outer-most squares to see if piece is obstructed
      // if so, push piece back into field

      this.setOuterSquares(); // in the case that piece is turned through floor

      while (this.bottomMost[0] > 19 || field[this.bottomMost[0]][this.bottomMost[1]]) {
        this.move('up');
        this.setOuterSquares();
      } // in the case that the IPiece is turned through the field ceiling


      while (this.topMost[0] < 0 || field[this.topMost[0]][this.topMost[1]]) {
        this.move('down');
        this.setOuterSquares();
      }

      while (this.rightMost[1] > 9 || field[this.rightMost[0]][this.rightMost[1]]) {
        // this.rightMost > 9 ? this.move('left') : this.move('right');
        this.move('left');
        this.setOuterSquares();
      }

      while (this.leftMost[1] < 0 || field[this.leftMost[0]][this.leftMost[1]]) {
        // this.rightMost > 9 ? this.move('left') : this.move('right');
        if (field[this.rightMost[0]][this.rightMost[1] + 1]) {
          this.move('up');
        } else {
          this.move('right');
        }

        this.setOuterSquares();
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

      this.setOuterSquares(); // in the case that piece is turned through floor

      while (this.bottomMost[0] > 19 || field[this.bottomMost[0]][this.bottomMost[1]]) {
        this.move('up');
        this.setOuterSquares();
      } // in the case that the IPiece is turned through the field ceiling


      while (this.topMost[0] < 0 || field[this.topMost[0]][this.topMost[1]]) {
        this.move('down');
        this.setOuterSquares();
      }

      while (this.rightMost[1] > 9 || field[this.rightMost[0]][this.rightMost[1]]) {
        // this.rightMost > 9 ? this.move('left') : this.move('right');
        this.move('left');
        this.setOuterSquares();
      }

      while (this.leftMost[1] < 0 || field[this.leftMost[0]][this.leftMost[1]]) {
        // this.rightMost > 9 ? this.move('left') : this.move('right');
        if (field[this.rightMost[0]][this.rightMost[1] + 1]) {
          this.move('up');
        } else {
          this.move('right');
        }

        this.setOuterSquares();
      }
    } // compare old position of piece with new position 

  }, {
    key: "setRemoveSquares",
    value: function setRemoveSquares(oldPosition) {
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
        if (!_this5._includes(oldSquare, newSquares)) return oldSquare;
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
      // if (this.position.top[0][0] < 0) return false;
      var result = false;
      this.sideSquares().right.forEach(function (coordinatePair) {
        var _ref5 = [coordinatePair[0], coordinatePair[1]],
            row = _ref5[0],
            col = _ref5[1]; // if any right facing square hits the wall or another piece

        if (col === 9 || field[row] && field[row][col + 1] !== "x") {
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
        var _ref6 = [coordinatePair[0], coordinatePair[1]],
            row = _ref6[0],
            col = _ref6[1]; // if any left facing square hits the wall or another piece

        if (col === 0 || field[row] && field[row][col - 1] !== "x") {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2ZpZWxkL2ZpZWxkLmpzIiwid2VicGFjazovLy8uL3NyYy9maWVsZC9ob2xkYm94LmpzIiwid2VicGFjazovLy8uL3NyYy9maWVsZC9uZXh0Qm94LmpzIiwid2VicGFjazovLy8uL3NyYy9maWVsZC9xdWV1ZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvZ2FtZS9nYW1lLmpzIiwid2VicGFjazovLy8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvbWVudS9tZW51LmpzIiwid2VicGFjazovLy8uL3NyYy9tdWx0aXBsYXllci9tdWx0aXBsYXllci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcGllY2VzL2lQaWVjZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcGllY2VzL2pQaWVjZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcGllY2VzL2xQaWVjZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcGllY2VzL29QaWVjZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcGllY2VzL3BpZWNlLmpzIiwid2VicGFjazovLy8uL3NyYy9waWVjZXMvc1BpZWNlLmpzIiwid2VicGFjazovLy8uL3NyYy9waWVjZXMvdFBpZWNlLmpzIiwid2VicGFjazovLy8uL3NyYy9waWVjZXMvelBpZWNlLmpzIl0sIm5hbWVzIjpbIkZpZWxkIiwiZmllbGROdW0iLCJmaWVsZCIsImkiLCJyb3ciLCJwdXNoIiwiY29sdW1uIiwiZG9jdW1lbnQiLCJjcmVhdGVFbGVtZW50IiwiY2xhc3NMaXN0IiwiYWRkIiwiYXBwZW5kIiwiYXBwZW5kQ2hpbGQiLCJfY3JlYXRlQ29sdW1uIiwiY29udGFpbmVyIiwicXVldWUiLCJRdWV1ZSIsIm5leHRCb3giLCJOZXh0Qm94IiwiaG9sZEJveCIsIkhvbGRCb3giLCJfY3JlYXRlRmllbGQiLCJjcmVhdGVRdWV1ZSIsImNyZWF0ZU5leHRCb3hlcyIsInByZXBlbmQiLCJjcmVhdGVCb3giLCJib3hXcmFwcGVyIiwiYm94IiwiaGVhZGluZyIsImlubmVySFRNTCIsIl9jcmVhdGVCb3hDb2x1bW4iLCJfY3JlYXRlTmV4dEJveENvbHVtbiIsImJveGVzIiwiX2NyZWF0ZU5leHRCb3giLCJxdWV1ZU1ldGVyIiwiYWRqdXN0UXVldWVIZWlnaHQiLCJwZXJjZW50YWdlIiwicXVlcnlTZWxlY3RvciIsInN0eWxlIiwiaGVpZ2h0IiwiR2FtZSIsIm9wdGlvbnMiLCJzZXRGaWVsZCIsImNvbG9ycyIsImdhbWVOdW0iLCJjdXJyZW50QmFnIiwiX3NodWZmbGVCYWciLCJnZW5lcmF0ZUJhZyIsImN1cnJlbnRQaWVjZSIsImhvbGRQaWVjZSIsImdob3N0UG9zaXRpb24iLCJuZXh0QmFnIiwiY2FuSG9sZCIsImhhbmRsZUNsZWFyIiwiZHJvcCIsInJpZ2h0IiwibGVmdCIsImRvd24iLCJkcm9wU3BlZWQiLCJtb3ZlU3BlZWQiLCJkcm9wUGllY2UiLCJiaW5kIiwibW92ZSIsIm1vdmVQaWVjZSIsImFuaW1hdGUiLCJmcHNJbnRlcnZhbCIsInN0YXJ0VGltZSIsIm5vdyIsInRoZW4iLCJpc1BhdXNlZCIsImtleUhlbGQiLCJvcHBvbmVudCIsImNvbnRyb2xzIiwidXBjb21pbmdMaW5lcyIsImNvbWJvIiwiY29tYm9HdWlkZSIsIm9QaWVjZSIsIk9QaWVjZSIsImlQaWVjZSIsIklQaWVjZSIsInRQaWVjZSIsIlRQaWVjZSIsInNQaWVjZSIsIlNQaWVjZSIsInpQaWVjZSIsIlpQaWVjZSIsImxQaWVjZSIsIkxQaWVjZSIsImpQaWVjZSIsIkpQaWVjZSIsIl9nZW5lcmF0ZUZpZWxkIiwic2hpZnQiLCJjb29yZGluYXRlQXJyYXlzIiwiT2JqZWN0IiwidmFsdWVzIiwiZm9yRWFjaCIsImFycmF5IiwiY29vcmRpbmF0ZSIsImNvbCIsImZpZWxkQ29sdW1ucyIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJjaGlsZHJlbiIsImNvbG9yQ29kZSIsInRvcCIsInBvc2l0aW9uIiwibWFwIiwic2xpY2UiLCJtaWRkbGUiLCJib3R0b20iLCJzdG9wcGVkIiwiaGFuZ2luZ1NxdWFyZXMiLCJfcG9wdWxhdGVHaG9zdFBvc2l0aW9uIiwiYm90dG9tTW9zdCIsImNvbnNvbGUiLCJsb2ciLCJyZW5kZXIiLCJjbGVhclNlbGZGcm9tQm9hcmQiLCJfZ2VuZXJhdGVQaWVjZSIsIm5hbWUiLCJzZXRDdXJyZW50UGllY2UiLCJfc2hvd0N1cnJlbnRCYWciLCJfcG9wdWxhdGVIb2xkQm94IiwiY29sdW1ucyIsImoiLCJjbGFzc05hbWUiLCJkaXNwbGF5U3F1YXJlcyIsInNxdWFyZSIsInBpZWNlTmFtZSIsImdldEVsZW1lbnRzQnlDbGFzc05hbWUiLCJfcG9wdWxhdGVOZXh0Qm94IiwicGllY2UiLCJiYWciLCJjdXJyZW50SW5kZXgiLCJsZW5ndGgiLCJ0ZW1wb3JhcnlWYWx1ZSIsInJhbmRvbUluZGV4IiwiTWF0aCIsImZsb29yIiwicmFuZG9tIiwicmlnaHRNb3N0IiwibGVmdE1vc3QiLCJyb3dJZHgiLCJjb2xJZHgiLCJzcXVhcmVWYWx1ZSIsInJlbW92ZSIsImNvbG9yIiwiYm9keSIsImFkZEV2ZW50TGlzdGVuZXIiLCJldmVudCIsInNldE91dGVyU3F1YXJlcyIsIndoaWNoIiwidHVyblJpZ2h0IiwiY2xlYXJHaG9zdFBvc2l0aW9uIiwicG9wdWxhdGVGaWVsZCIsInNldEdob3N0UG9zaXRpb24iLCJ0dXJuTGVmdCIsImxlZnRTaWRlQmxvY2tlZCIsInJpZ2h0U2lkZUJsb2NrZWQiLCJzb2Z0RHJvcCIsImhvbGQiLCJoYXJkRHJvcCIsImhhbmRsZVBpZWNlU3RvcCIsImNhbmNlbEFuaW1hdGlvbkZyYW1lIiwibG93ZXN0IiwiaGlnaGVzdCIsIm51bUxpbmVzQ2xlYXJlZCIsImluY2x1ZGVzIiwiX2JyaW5nRG93bkZpZWxkIiwiY2xlYXJMaW5lcyIsInN0YXJ0aW5nUm93IiwibnVtTGluZXMiLCJhZGRMaW5lc1RvUXVldWUiLCJhYnMiLCJyZWNlaXZlVXBjb21pbmdMaW5lcyIsImNsZWFyR2hvc3RDbGFzcyIsInBsYXkiLCJmcHMiLCJEYXRlIiwicmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwiZWxhcHNlZCIsImlzRmFsbGluZyIsImRpcmVjdGlvbiIsImF0VG9wIiwiZ2FtZU92ZXIiLCJoYW5kbGVUb3BQaWVjZSIsIl9hZGRUb0N1cnJlbnRCYWciLCJfcmVmaWxsTmV4dEJhZyIsIndpbm5lciIsImdhbWVPdmVyU2NyZWVuIiwiZ2FtZU92ZXJIZWFkaW5nIiwid2lubmVySGVhZGluZyIsInBsYXllciIsImdhcmJhZ2VMaW5lcyIsInJhbmRvbUhvbGUiLCJnYXJiYWdlUm93IiwiY29uY2F0IiwibWVudSIsIk1lbnUiLCJyZW5kZXJNZW51IiwiZ2V0RWxlbWVudEJ5SWQiLCJvcHRpb25zUGxheWVyMSIsIm9wdGlvbnNQbGF5ZXIyIiwiZ2FtZTEiLCJnYW1lMiIsImZpZWxkMSIsImZpZWxkMiIsIm11bHRpcGxheWVyTW9kZSIsIk11bHRpcGxheWVyIiwiZmllbGRDb250YWluZXIxIiwiZmllbGRDb250YWluZXIyIiwic2luZ2xlUGxheWVyQnV0dG9uIiwibXVsdGlwbGF5ZXJCdXR0b24iLCJhZGRFdmVudExpc3RlbmVycyIsInJlbmRlclNpbmdsZVBsYXllciIsInJlbmRlck11bHRpcGxheWVyIiwicmVtb3ZlQ2hpbGQiLCJqdXN0aWZ5Q29udGVudCIsImNyZWF0ZUNvbXBsZXRlRmllbGQiLCJrZXlMaXN0ZW5lciIsInN0YXJ0TXVsdGlwbGF5ZXIiLCJidXR0b25Db250YWluZXIiLCJyZW5kZXJCdXR0b25zIiwiYnV0dG9uIiwicGxheWVyMSIsInBsYXllcjIiLCJzZXRPcHBvbmVudCIsInR1cm5pbmdQb2ludCIsInJlbW92ZVNxdWFyZXMiLCJQaWVjZSIsInRvcE1vc3QiLCJjb29yZGluYXRlc0FycmF5IiwiY29sdW1uVmFsdWUiLCJyb3dWYWx1ZSIsInBvc2l0aW9uQXJyYXkiLCJvbGRTcXVhcmUiLCJuZXdTcXVhcmUiLCJyZXN1bHQiLCJfc3F1YXJlc0FyZUVxdWFsIiwib2xkUG9zaXRpb24iLCJzZXRSZW1vdmVTcXVhcmVzIiwic3F1YXJlcyIsImhlaWdodERpZmZlcmVuY2UiLCJ3aWR0aERpZmZlcmVuY2UiLCJuZXdDb2wiLCJuZXdSb3ciLCJvbGRTcXVhcmVzIiwibmV3U3F1YXJlcyIsImZpbHRlciIsIl9pbmNsdWRlcyIsImNvb3JkaW5hdGVBcnJheSIsImJlbG93U3F1YXJlIiwic2lkZVNxdWFyZXMiLCJhZGphY2VudExlZnQiLCJhZGphY2VudFJpZ2h0IiwiY29vcmRpbmF0ZVBhaXIiXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2xGQTtBQUNBO0FBQ0E7O0lBRXFCQSxLOzs7QUFDakIsaUJBQVlDLFFBQVosRUFBc0I7QUFBQTs7QUFDbEIsU0FBS0EsUUFBTCxHQUFnQkEsUUFBaEI7QUFDSDs7OztxQ0FFZ0I7QUFDYixVQUFJQyxLQUFLLEdBQUcsRUFBWjs7QUFDQSxXQUFLLElBQUlDLENBQUMsR0FBRyxDQUFiLEVBQWdCQSxDQUFDLEdBQUcsRUFBcEIsRUFB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VCxFQUFpQixDQUFDLENBQUQsRUFBSSxDQUFKLENBQWpCLEVBQXlCLENBQUMsQ0FBRCxFQUFJLENBQUosQ0FBekIsQ0FBdEI7QUFFQSxVQUFLc0csYUFBTCxHQUFxQixFQUFyQjtBQWRVO0FBZWI7OztFQWhCK0JDLDhDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDRnBDOztJQUVxQi9JLE07Ozs7O0FBQ2pCLG9CQUFjO0FBQUE7O0FBQUE7O0FBQ1Y7QUFDQSxVQUFLaUMsSUFBTCxHQUFZLFFBQVo7QUFDQSxVQUFLZCxRQUFMLEdBQWdCO0FBQ1pELFNBQUcsRUFBRSxDQUFDLENBQUMsQ0FBRCxFQUFJLENBQUosQ0FBRCxFQUFTLENBQUMsQ0FBRCxFQUFJLENBQUosQ0FBVCxDQURPO0FBRVpJLFlBQU0sRUFBRSxFQUZJO0FBR1pDLFlBQU0sRUFBRSxDQUFDLENBQUMsQ0FBRCxFQUFJLENBQUosQ0FBRCxFQUFTLENBQUMsQ0FBRCxFQUFJLENBQUosQ0FBVDtBQUhJLEtBQWhCO0FBS0EsVUFBS04sU0FBTCxHQUFpQixDQUFqQjtBQUVBLFVBQUs0SCxZQUFMLEdBQW9CLENBQUMsQ0FBRCxFQUFJLENBQUosQ0FBcEI7QUFFQSxVQUFLckcsY0FBTCxHQUFzQixDQUFDLENBQUMsQ0FBRCxFQUFJLENBQUosQ0FBRCxFQUFTLENBQUMsQ0FBRCxFQUFJLENBQUosQ0FBVCxFQUFpQixDQUFDLENBQUQsRUFBSSxDQUFKLENBQWpCLEVBQXlCLENBQUMsQ0FBRCxFQUFJLENBQUosQ0FBekIsQ0FBdEI7QUFFQSxVQUFLc0csYUFBTCxHQUFxQixFQUFyQjtBQWRVO0FBZWI7OztFQWhCK0JDLDhDIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIi9kaXN0L1wiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9pbmRleC5qc1wiKTtcbiIsImltcG9ydCBIb2xkQm94IGZyb20gJy4vaG9sZGJveCc7XG5pbXBvcnQgTmV4dEJveCBmcm9tICcuL25leHRCb3gnO1xuaW1wb3J0IFF1ZXVlIGZyb20gJy4vcXVldWUnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBGaWVsZCB7ICBcbiAgICBjb25zdHJ1Y3RvcihmaWVsZE51bSkge1xuICAgICAgICB0aGlzLmZpZWxkTnVtID0gZmllbGROdW07XG4gICAgfVxuICAgIFxuICAgIF9nZW5lcmF0ZUZpZWxkKCkge1xuICAgICAgICBsZXQgZmllbGQgPSBbXTtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCAyMDsgaSsrKSB7XG4gICAgICAgICAgICBsZXQgcm93ID0gWzAsMCwwLDAsMCwwLDAsMCwwLDBdO1xuICAgICAgICAgICAgZmllbGQucHVzaChyb3cpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBmaWVsZDtcbiAgICB9XG5cbiAgICBfY3JlYXRlQ29sdW1uKCkge1xuICAgICAgICBsZXQgY29sdW1uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInVsXCIpO1xuICAgICAgICBjb2x1bW4uY2xhc3NMaXN0LmFkZChgZmllbGQtY29sdW1uYCwgYGZpZWxkLSR7dGhpcy5maWVsZE51bX1gKTtcblxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IDIwOyBpKyspIHtcbiAgICAgICAgICAgIGNvbHVtbi5hcHBlbmQoZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpXCIpKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gY29sdW1uO1xuICAgIH1cblxuICAgIF9jcmVhdGVGaWVsZCgpIHtcbiAgICAgICAgbGV0IGZpZWxkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgZmllbGQuY2xhc3NMaXN0LmFkZChgZmllbGQtYm94YCwgYGZpZWxkLSR7dGhpcy5maWVsZE51bX1gKTtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCAxMDsgaSsrKSB7XG4gICAgICAgICAgICBmaWVsZC5hcHBlbmRDaGlsZCh0aGlzLl9jcmVhdGVDb2x1bW4oKSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGZpZWxkO1xuICAgIH1cblxuICAgIGNyZWF0ZUNvbXBsZXRlRmllbGQoY29udGFpbmVyKSB7XG4gICAgICAgIGxldCBxdWV1ZSA9IG5ldyBRdWV1ZSh0aGlzLmZpZWxkTnVtKTtcbiAgICAgICAgbGV0IG5leHRCb3ggPSBuZXcgTmV4dEJveCh0aGlzLmZpZWxkTnVtKTtcbiAgICAgICAgbGV0IGhvbGRCb3ggPSBuZXcgSG9sZEJveCh0aGlzLmZpZWxkTnVtKTtcbiAgICAgICAgY29udGFpbmVyLmFwcGVuZCh0aGlzLl9jcmVhdGVGaWVsZCgpKTtcbiAgICAgICAgY29udGFpbmVyLmFwcGVuZChxdWV1ZS5jcmVhdGVRdWV1ZSgpKTtcbiAgICAgICAgY29udGFpbmVyLmFwcGVuZChuZXh0Qm94LmNyZWF0ZU5leHRCb3hlcygpKTtcbiAgICAgICAgY29udGFpbmVyLnByZXBlbmQoaG9sZEJveC5jcmVhdGVCb3goKSk7XG4gICAgICAgIHJldHVybiBjb250YWluZXI7XG4gICAgfVxuXG59IiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgSG9sZEJveCB7XG4gICAgY29uc3RydWN0b3IoZmllbGROdW0pIHtcbiAgICAgICAgdGhpcy5maWVsZE51bSA9IGZpZWxkTnVtO1xuICAgIH1cblxuICAgIF9jcmVhdGVCb3hDb2x1bW4oKSB7XG4gICAgICAgIGxldCBjb2x1bW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidWxcIik7XG4gICAgICAgIGNvbHVtbi5jbGFzc0xpc3QuYWRkKGBob2xkLWNvbHVtbmAsIGBmaWVsZC0ke3RoaXMuZmllbGROdW19YCk7XG5cbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCA0OyBpKyspIHtcbiAgICAgICAgICAgIGNvbHVtbi5hcHBlbmQoZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpXCIpKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gY29sdW1uO1xuICAgIH1cblxuICAgIGNyZWF0ZUJveCgpIHtcbiAgICAgICAgbGV0IGJveFdyYXBwZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICBib3hXcmFwcGVyLmNsYXNzTGlzdC5hZGQoYGhvbGQtYm94LXdyYXBwZXJgLCBgZmllbGQtJHt0aGlzLmZpZWxkTnVtfWApO1xuICAgICAgICBsZXQgYm94ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgYm94LmNsYXNzTGlzdC5hZGQoYGhvbGQtYm94YCwgYGZpZWxkLSR7dGhpcy5maWVsZE51bX1gKTtcbiAgICAgICAgbGV0IGhlYWRpbmcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDJcIik7XG4gICAgICAgIGhlYWRpbmcuaW5uZXJIVE1MID0gXCJIT0xEXCI7XG4gICAgICAgIGJveFdyYXBwZXIuYXBwZW5kQ2hpbGQoaGVhZGluZyk7XG4gICAgICAgIGJveFdyYXBwZXIuYXBwZW5kQ2hpbGQoYm94KTtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCA1OyBpKyspIHtcbiAgICAgICAgICAgIGJveC5hcHBlbmRDaGlsZCh0aGlzLl9jcmVhdGVCb3hDb2x1bW4oKSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGJveFdyYXBwZXI7XG4gICAgfVxufSIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIE5leHRCb3gge1xuICAgIGNvbnN0cnVjdG9yKGZpZWxkTnVtKSB7XG4gICAgICAgIHRoaXMuZmllbGROdW0gPSBmaWVsZE51bTtcbiAgICB9XG5cbiAgICBfY3JlYXRlTmV4dEJveENvbHVtbigpIHtcbiAgICAgICAgbGV0IGNvbHVtbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ1bFwiKTtcbiAgICAgICAgY29sdW1uLmNsYXNzTGlzdC5hZGQoYG5leHQtY29sdW1uYCwgYGZpZWxkLSR7dGhpcy5maWVsZE51bX1gKTtcblxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IDQ7IGkrKykge1xuICAgICAgICAgICAgY29sdW1uLmFwcGVuZChkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIikpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBjb2x1bW47XG4gICAgfVxuXG4gICAgX2NyZWF0ZU5leHRCb3goKSB7XG4gICAgICAgIGxldCBib3ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICBib3guY2xhc3NMaXN0LmFkZChgbmV4dC1ib3hgLCBgZmllbGQtJHt0aGlzLmZpZWxkTnVtfWApO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IDU7IGkrKykge1xuICAgICAgICAgICAgYm94LmFwcGVuZENoaWxkKHRoaXMuX2NyZWF0ZU5leHRCb3hDb2x1bW4oKSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGJveDtcbiAgICB9XG5cbiAgICBjcmVhdGVOZXh0Qm94ZXMoKSB7XG4gICAgICAgIGxldCBib3hlcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIGxldCBoZWFkaW5nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgyXCIpO1xuICAgICAgICBoZWFkaW5nLmlubmVySFRNTCA9IFwiTkVYVFwiO1xuICAgICAgICBib3hlcy5jbGFzc0xpc3QuYWRkKGBuZXh0LWJveGVzYCwgYGZpZWxkLSR7dGhpcy5maWVsZE51bX1gKTtcbiAgICAgICAgYm94ZXMuYXBwZW5kQ2hpbGQoaGVhZGluZyk7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgNTsgaSsrKSB7XG4gICAgICAgICAgICBib3hlcy5hcHBlbmRDaGlsZCh0aGlzLl9jcmVhdGVOZXh0Qm94KCkpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBib3hlcztcbiAgICB9XG59IiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgUXVldWUge1xuICAgIGNvbnN0cnVjdG9yKGZpZWxkTnVtKSB7XG4gICAgICAgIHRoaXMuZmllbGROdW0gPSBmaWVsZE51bTtcbiAgICB9XG5cbiAgICBjcmVhdGVRdWV1ZSgpIHtcbiAgICAgICAgbGV0IHF1ZXVlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgcXVldWUuY2xhc3NMaXN0LmFkZChgcXVldWVgLCBgZmllbGQtJHt0aGlzLmZpZWxkTnVtfWApO1xuICAgICAgICBsZXQgcXVldWVNZXRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIHF1ZXVlTWV0ZXIuY2xhc3NMaXN0LmFkZChgcXVldWUtbWV0ZXJgLCBgZmllbGQtJHt0aGlzLmZpZWxkTnVtfWApO1xuICAgICAgICBxdWV1ZS5hcHBlbmRDaGlsZChxdWV1ZU1ldGVyKTtcbiAgICAgICAgcmV0dXJuIHF1ZXVlO1xuICAgIH1cbn1cblxuZXhwb3J0IGNvbnN0IGFkanVzdFF1ZXVlSGVpZ2h0ID0gKGZpZWxkTnVtLCBwZXJjZW50YWdlKSA9PiB7XG4gICAgbGV0IHF1ZXVlTWV0ZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAucXVldWUtbWV0ZXIuZmllbGQtJHtmaWVsZE51bX1gKTtcbiAgICBpZiAocGVyY2VudGFnZSA+IDEwMCkgcGVyY2VudGFnZSA9IDEwMDtcbiAgICBxdWV1ZU1ldGVyLnN0eWxlLmhlaWdodCA9IGAke3BlcmNlbnRhZ2V9JWBcbn0iLCJpbXBvcnQgRmllbGQgZnJvbSAnLi4vZmllbGQvZmllbGQnO1xuaW1wb3J0IE9QaWVjZSBmcm9tICcuLi9waWVjZXMvb1BpZWNlJztcbmltcG9ydCBJUGllY2UgZnJvbSAnLi4vcGllY2VzL2lQaWVjZSc7XG5pbXBvcnQgVFBpZWNlIGZyb20gJy4uL3BpZWNlcy90UGllY2UnO1xuaW1wb3J0IFNQaWVjZSBmcm9tICcuLi9waWVjZXMvc1BpZWNlJztcbmltcG9ydCBaUGllY2UgZnJvbSAnLi4vcGllY2VzL3pQaWVjZSc7XG5pbXBvcnQgTFBpZWNlIGZyb20gJy4uL3BpZWNlcy9sUGllY2UnO1xuaW1wb3J0IEpQaWVjZSBmcm9tICcuLi9waWVjZXMvalBpZWNlJztcbmltcG9ydCB7IGFkanVzdFF1ZXVlSGVpZ2h0IH0gZnJvbSAnLi4vZmllbGQvcXVldWUnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBHYW1lIHtcbiAgICBjb25zdHJ1Y3RvcihvcHRpb25zKSB7XG4gICAgICAgIHRoaXMuZmllbGQgPSB0aGlzLnNldEZpZWxkKClcblxuICAgICAgICB0aGlzLmNvbG9ycyA9IHtcbiAgICAgICAgICAgIDE6IFwieWVsbG93XCIsXG4gICAgICAgICAgICAyOiBcImJsdWVcIixcbiAgICAgICAgICAgIDM6IFwicHVycGxlXCIsXG4gICAgICAgICAgICA0OiBcImdyZWVuXCIsXG4gICAgICAgICAgICA1OiBcInJlZFwiLFxuICAgICAgICAgICAgNjogXCJvcmFuZ2VcIixcbiAgICAgICAgICAgIDc6IFwiZGFyay1ibHVlXCIsXG4gICAgICAgICAgICA4OiBcImdyZXlcIlxuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5nYW1lTnVtID0gb3B0aW9ucy5nYW1lTnVtO1xuXG4gICAgICAgIHRoaXMuY3VycmVudEJhZyA9IHRoaXMuX3NodWZmbGVCYWcodGhpcy5nZW5lcmF0ZUJhZygpKTtcbiAgICAgICAgdGhpcy5jdXJyZW50UGllY2UgPSAnJztcbiAgICAgICAgdGhpcy5ob2xkUGllY2UgPSAnJztcbiAgICAgICAgdGhpcy5naG9zdFBvc2l0aW9uID0gJyc7XG4gICAgICAgIHRoaXMubmV4dEJhZyA9IHRoaXMuX3NodWZmbGVCYWcodGhpcy5nZW5lcmF0ZUJhZygpKTtcblxuICAgICAgICAvLyBwcmV2ZW50cyBwbGF5ZXIgZnJvbSBob2xkaW5nIHBpZWNlIG11bHRpcGxlIHRpbWVzXG4gICAgICAgIHRoaXMuY2FuSG9sZCA9IHRydWU7XG5cbiAgICAgICAgdGhpcy5oYW5kbGVDbGVhciA9IHtcbiAgICAgICAgICAgIGRyb3A6ICcnLFxuICAgICAgICAgICAgcmlnaHQ6ICcnLFxuICAgICAgICAgICAgbGVmdDogJycsXG4gICAgICAgICAgICBkb3duOiAnJ1xuICAgICAgICB9O1xuXG4gICAgICAgIC8vIGZvciBhbmltYXRpb25zXG4gICAgICAgIHRoaXMuZHJvcFNwZWVkID0gMS41O1xuICAgICAgICB0aGlzLm1vdmVTcGVlZCA9IG9wdGlvbnMubW92ZVNwZWVkO1xuICAgICAgICB0aGlzLmRyb3BQaWVjZSA9IHRoaXMuZHJvcFBpZWNlLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMuZHJvcCA9IHRoaXMuZHJvcC5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLm1vdmUgPSB0aGlzLm1vdmUuYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5tb3ZlUGllY2UgPSB0aGlzLm1vdmVQaWVjZS5iaW5kKHRoaXMpO1xuXG4gICAgICAgIC8vIGtlZXAgdHJhY2sgb2YgdGhlIGZvbGxvd2luZyB2YXJpYWJsZXMgZm9yIHJlcXVlc3RBbmltYXRpb25GcmFtZSB0aHJvdHRsaW5nXG4gICAgICAgIHRoaXMuYW5pbWF0ZSA9IHtcbiAgICAgICAgICAgIGRyb3A6IHtcbiAgICAgICAgICAgICAgICBmcHNJbnRlcnZhbDogJycsXG4gICAgICAgICAgICAgICAgc3RhcnRUaW1lOiAnJyxcbiAgICAgICAgICAgICAgICBub3c6ICcnLFxuICAgICAgICAgICAgICAgIHRoZW46ICcnXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgcmlnaHQ6IHtcbiAgICAgICAgICAgICAgICBmcHNJbnRlcnZhbDogJycsXG4gICAgICAgICAgICAgICAgc3RhcnRUaW1lOiAnJyxcbiAgICAgICAgICAgICAgICBub3c6ICcnLFxuICAgICAgICAgICAgICAgIHRoZW46ICcnXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgbGVmdDoge1xuICAgICAgICAgICAgICAgIGZwc0ludGVydmFsOiAnJyxcbiAgICAgICAgICAgICAgICBzdGFydFRpbWU6ICcnLFxuICAgICAgICAgICAgICAgIG5vdzogJycsXG4gICAgICAgICAgICAgICAgdGhlbjogJydcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBkb3duOiB7XG4gICAgICAgICAgICAgICAgZnBzSW50ZXJ2YWw6ICcnLFxuICAgICAgICAgICAgICAgIHN0YXJ0VGltZTogJycsXG4gICAgICAgICAgICAgICAgbm93OiAnJyxcbiAgICAgICAgICAgICAgICB0aGVuOiAnJ1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLy8gcGF1c2luZyB0aGUgZ2FtZVxuICAgICAgICB0aGlzLmlzUGF1c2VkID0gZmFsc2U7XG5cbiAgICAgICAgdGhpcy5rZXlIZWxkID0ge1xuICAgICAgICAgICAgZG93bjogZmFsc2UsXG4gICAgICAgICAgICByaWdodDogZmFsc2UsXG4gICAgICAgICAgICBsZWZ0OiBmYWxzZVxuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5vcHBvbmVudCA9IFwiXCI7XG4gICAgICAgIHRoaXMuY29udHJvbHMgPSBvcHRpb25zLmNvbnRyb2xzO1xuICAgICAgICB0aGlzLnVwY29taW5nTGluZXMgPSAwO1xuICAgICAgICB0aGlzLmNvbWJvID0gLTE7XG4gICAgICAgIHRoaXMuY29tYm9HdWlkZSA9IHtcbiAgICAgICAgICAgIDA6IDAsXG4gICAgICAgICAgICAxOiAwLCBcbiAgICAgICAgICAgIDI6IDEsXG4gICAgICAgICAgICAzOiAxLFxuICAgICAgICAgICAgNDogMSxcbiAgICAgICAgICAgIDU6IDIsXG4gICAgICAgICAgICA2OiAyLFxuICAgICAgICAgICAgNzogMyxcbiAgICAgICAgICAgIDg6IDMsXG4gICAgICAgICAgICA5OiA0LFxuICAgICAgICAgICAgMTA6IDQsXG4gICAgICAgICAgICAxMTogNCxcbiAgICAgICAgICAgIDEyOiA1XG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgZ2VuZXJhdGVCYWcoKSB7XG4gICAgICAgIGxldCBvUGllY2UgPSBuZXcgT1BpZWNlKCk7XG4gICAgICAgIGxldCBpUGllY2UgPSBuZXcgSVBpZWNlKCk7XG4gICAgICAgIGxldCB0UGllY2UgPSBuZXcgVFBpZWNlKCk7XG4gICAgICAgIGxldCBzUGllY2UgPSBuZXcgU1BpZWNlKCk7XG4gICAgICAgIGxldCB6UGllY2UgPSBuZXcgWlBpZWNlKCk7XG4gICAgICAgIGxldCBsUGllY2UgPSBuZXcgTFBpZWNlKCk7XG4gICAgICAgIGxldCBqUGllY2UgPSBuZXcgSlBpZWNlKCk7XG5cbiAgICAgICAgcmV0dXJuIFtvUGllY2UsIGlQaWVjZSwgdFBpZWNlLCBzUGllY2UsIHpQaWVjZSwgbFBpZWNlLCBqUGllY2VdO1xuICAgIH1cblxuICAgIHNldEZpZWxkKCkge1xuICAgICAgICBsZXQgZmllbGQgPSBuZXcgRmllbGQoKTtcbiAgICAgICAgcmV0dXJuIGZpZWxkLl9nZW5lcmF0ZUZpZWxkKCk7XG4gICAgfVxuXG4gICAgLy8gdGFrZSBwaWVjZSBmcm9tIGN1cnJlbnRCYWcgYW5kIHNldCBpdCBhcyB0aGUgY3VycmVudCBwaWVjZVxuICAgIHNldEN1cnJlbnRQaWVjZSgpIHtcbiAgICAgICAgdGhpcy5jdXJyZW50UGllY2UgPSB0aGlzLmN1cnJlbnRCYWcuc2hpZnQoKTtcbiAgICB9XG5cbiAgICAvLyByZW1vdmVzIG9sZCBnaG9zdCBwb3NpdGlvbiBmcm9tIHRoaXMuZmllbGQgYmVmb3JlIGNoYW5naW5nIHBpZWNlIHBvc2l0aW9uXG4gICAgY2xlYXJHaG9zdFBvc2l0aW9uKCkge1xuICAgICAgICBsZXQgY29vcmRpbmF0ZUFycmF5cyA9IE9iamVjdC52YWx1ZXModGhpcy5naG9zdFBvc2l0aW9uKTtcbiAgICAgICAgY29vcmRpbmF0ZUFycmF5cy5mb3JFYWNoKGFycmF5ID0+IHtcbiAgICAgICAgICAgIGFycmF5LmZvckVhY2goY29vcmRpbmF0ZSA9PiB7XG4gICAgICAgICAgICAgICAgbGV0IFtyb3csIGNvbF0gPSBbY29vcmRpbmF0ZVswXSwgY29vcmRpbmF0ZVsxXV07XG4gICAgICAgICAgICAgICAgLy8gcHJldmVudCBtZXRob2QgZnJvbSBjbGVhcmluZyBwaWVjZSBpZiBpdCBoYXBwZW5zIHRvIGJlIHdoZXJlIHRoZSBnaG9zdCBwb3NpdGlvbiBzaG91bGQgYmVcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5maWVsZFtyb3ddICYmIHRoaXMuZmllbGRbcm93XVtjb2xdID09PSBcInhcIiAmJiByb3cgPj0gMCkgdGhpcy5maWVsZFtyb3ddW2NvbF0gPSAwO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgLy8gY2xlYXJzIHRoZSBjb2xvciBjbGFzc2VzIGZyb20gdGhlIGJyb3dzZXIgZmllbGRcbiAgICBjbGVhckdob3N0Q2xhc3MoKSB7XG4gICAgICAgIGxldCBmaWVsZENvbHVtbnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKGAuZmllbGQtY29sdW1uLmZpZWxkLSR7dGhpcy5nYW1lTnVtfWApO1xuICAgICAgICBsZXQgY29vcmRpbmF0ZUFycmF5cyA9IE9iamVjdC52YWx1ZXModGhpcy5naG9zdFBvc2l0aW9uKTtcblxuICAgICAgICBjb29yZGluYXRlQXJyYXlzLmZvckVhY2goYXJyYXkgPT4ge1xuICAgICAgICAgICAgYXJyYXkuZm9yRWFjaChjb29yZGluYXRlID0+IHtcbiAgICAgICAgICAgICAgICBsZXQgW3JvdywgY29sXSA9IFtjb29yZGluYXRlWzBdLCBjb29yZGluYXRlWzFdXTtcbiAgICAgICAgICAgICAgICBmaWVsZENvbHVtbnNbY29sXS5jaGlsZHJlbltyb3ddLmNsYXNzTGlzdCA9IHRoaXMuY29sb3JzW3RoaXMuY3VycmVudFBpZWNlLmNvbG9yQ29kZV07XG4gICAgICAgICAgICB9KVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICAvLyBmaW5kIGFwcHJvcHJpYXRlIGdob3N0IHBvc2l0aW9uIGFzIHBpZWNlIHBvc2l0aW9uIGNoYW5nZXNcbiAgICBzZXRHaG9zdFBvc2l0aW9uKCkge1xuICAgICAgICBsZXQgZ2hvc3RQb3NpdGlvbiA9IHtcbiAgICAgICAgICAgIHRvcDogdGhpcy5jdXJyZW50UGllY2UucG9zaXRpb24udG9wLm1hcChjb29yZGluYXRlID0+IGNvb3JkaW5hdGUuc2xpY2UoKSksXG4gICAgICAgICAgICBtaWRkbGU6IHRoaXMuY3VycmVudFBpZWNlLnBvc2l0aW9uLm1pZGRsZS5tYXAoY29vcmRpbmF0ZSA9PiBjb29yZGluYXRlLnNsaWNlKCkpLFxuICAgICAgICAgICAgYm90dG9tOiB0aGlzLmN1cnJlbnRQaWVjZS5wb3NpdGlvbi5ib3R0b20ubWFwKGNvb3JkaW5hdGUgPT4gY29vcmRpbmF0ZS5zbGljZSgpKVxuICAgICAgICB9XG4gICAgICAgIGxldCBzdG9wcGVkID0gZmFsc2U7XG4gICAgICAgIHdoaWxlICghc3RvcHBlZCkge1xuICAgICAgICAgICAgbGV0IGhhbmdpbmdTcXVhcmVzID0gdGhpcy5jdXJyZW50UGllY2UuaGFuZ2luZ1NxdWFyZXMoZ2hvc3RQb3NpdGlvbik7XG4gICAgICAgICAgICBoYW5naW5nU3F1YXJlcy5mb3JFYWNoKGNvb3JkaW5hdGUgPT4ge1xuICAgICAgICAgICAgICAgIGxldCBbcm93LCBjb2xdID0gW2Nvb3JkaW5hdGVbMF0sIGNvb3JkaW5hdGVbMV1dO1xuICAgICAgICAgICAgICAgIGlmIChyb3cgPCAwIHx8IHJvdyArIDEgPT09IDIwIHx8IHRoaXMuZmllbGRbcm93ICsgMV1bY29sXSkgc3RvcHBlZCA9IHRydWU7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGlmIChzdG9wcGVkKSBicmVhaztcbiAgICAgICAgICAgIGdob3N0UG9zaXRpb24udG9wID0gZ2hvc3RQb3NpdGlvbi50b3AubWFwKGFycmF5ID0+IFthcnJheVswXSArIDEsIGFycmF5WzFdXSk7XG4gICAgICAgICAgICBnaG9zdFBvc2l0aW9uLm1pZGRsZSA9IGdob3N0UG9zaXRpb24ubWlkZGxlLm1hcChhcnJheSA9PiBbYXJyYXlbMF0gKyAxLCBhcnJheVsxXV0pO1xuICAgICAgICAgICAgZ2hvc3RQb3NpdGlvbi5ib3R0b20gPSBnaG9zdFBvc2l0aW9uLmJvdHRvbS5tYXAoYXJyYXkgPT4gW2FycmF5WzBdICsgMSwgYXJyYXlbMV1dKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmdob3N0UG9zaXRpb24gPSBnaG9zdFBvc2l0aW9uO1xuICAgICAgICB0aGlzLl9wb3B1bGF0ZUdob3N0UG9zaXRpb24oKTtcbiAgICB9XG5cbiAgICAvLyBwb3B1bGF0ZSB0aGlzLmZpZWxkIHdpdGggJ3gnIHdoZXJldmVyIHRoZSBnaG9zdCBwb3NpdGlvbiBpcyBjYWxjdWxhdGVkIHRvIGJlXG4gICAgX3BvcHVsYXRlR2hvc3RQb3NpdGlvbigpIHtcbiAgICAgICAgbGV0IGNvb3JkaW5hdGVBcnJheXMgPSBPYmplY3QudmFsdWVzKHRoaXMuZ2hvc3RQb3NpdGlvbik7XG4gICAgICAgIGNvb3JkaW5hdGVBcnJheXMuZm9yRWFjaChhcnJheSA9PiB7XG4gICAgICAgICAgICBhcnJheS5mb3JFYWNoKGNvb3JkaW5hdGUgPT4ge1xuICAgICAgICAgICAgICAgIGxldCBbcm93LCBjb2xdID0gW2Nvb3JkaW5hdGVbMF0sIGNvb3JkaW5hdGVbMV1dO1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLmN1cnJlbnRQaWVjZS5ib3R0b21Nb3N0WzBdID49IDE4KSBjb25zb2xlLmxvZyh0aGlzLmZpZWxkKTtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5maWVsZFtyb3ddICYmIHRoaXMuZmllbGRbcm93XVtjb2xdICE9PSB0aGlzLmN1cnJlbnRQaWVjZS5jb2xvckNvZGUpIHRoaXMuZmllbGRbcm93XVtjb2xdID0gXCJ4XCI7XG4gICAgICAgICAgICB9KVxuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5yZW5kZXIoKTtcbiAgICB9XG5cbiAgICAvLyBob2xkIHBpZWNlIGZvciBsYXRlciB1c2UgXG4gICAgaG9sZCgpIHtcbiAgICAgICAgaWYgKCF0aGlzLmNhbkhvbGQpIHJldHVybjtcbiAgICAgICAgdGhpcy5jdXJyZW50UGllY2UuY2xlYXJTZWxmRnJvbUJvYXJkKHRoaXMuZmllbGQpOyBcbiAgICAgICAgdGhpcy5yZW5kZXIoKTtcblxuICAgICAgICBpZiAodGhpcy5ob2xkUGllY2UgPT09ICcnKSB7XG4gICAgICAgICAgICAvLyBwYXNzIGN1cnJlbnQgcGllY2UgbmFtZSBpbnRvIGdlbmVyYXRlIHBpZWNlIGluIG9yZGVyIHRvIGdlbmVyYXRlIGEgbmV3IHBpZWNlIGluc3RhbmNlXG4gICAgICAgICAgICB0aGlzLmhvbGRQaWVjZSA9IHRoaXMuX2dlbmVyYXRlUGllY2UodGhpcy5jdXJyZW50UGllY2UubmFtZSk7XG4gICAgICAgICAgICB0aGlzLnNldEN1cnJlbnRQaWVjZSgpO1xuICAgICAgICAgICAgLy8gcmUtcmVuZGVyIG5leHQgYm94ZXMgdG8gYXBwcm9wcmlhdGVseSBzaG93IGN1cnJlbnQgYmFnXG4gICAgICAgICAgICB0aGlzLl9zaG93Q3VycmVudEJhZygpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5jdXJyZW50UGllY2UgPSB0aGlzLl9nZW5lcmF0ZVBpZWNlKHRoaXMuY3VycmVudFBpZWNlLm5hbWUpO1xuICAgICAgICAgICAgW3RoaXMuY3VycmVudFBpZWNlLCB0aGlzLmhvbGRQaWVjZV0gPSBbdGhpcy5ob2xkUGllY2UsIHRoaXMuY3VycmVudFBpZWNlXTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmNhbkhvbGQgPSBmYWxzZTtcblxuICAgICAgICB0aGlzLl9wb3B1bGF0ZUhvbGRCb3goKTtcbiAgICB9XG5cbiAgICBfcG9wdWxhdGVIb2xkQm94KCkge1xuICAgICAgICBsZXQgY29sdW1ucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC5ob2xkLWJveC5maWVsZC0ke3RoaXMuZ2FtZU51bX1gKS5jaGlsZHJlbjtcblxuICAgICAgICAvLyByZW1vdmUgY29sb3JzIGZyb20gcHJldmlvdXMgcGllY2VzXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgNTsgaSsrKSB7XG4gICAgICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IDQ7IGorKykge1xuICAgICAgICAgICAgICAgIC8vIGNvbHVtbnMuY2hpbGRyZW4gaXMgbm9kZWxpc3Qgb2YgPGxpcz5cbiAgICAgICAgICAgICAgICBjb2x1bW5zW2ldLmNoaWxkcmVuW2pdLmNsYXNzTmFtZSA9IFwiXCI7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmhvbGRQaWVjZS5kaXNwbGF5U3F1YXJlcy5mb3JFYWNoKHNxdWFyZSA9PiB7XG4gICAgICAgICAgICBsZXQgW2NvbCwgcm93XSA9IFtzcXVhcmVbMF0sIHNxdWFyZVsxXV07XG4gICAgICAgICAgICBjb2x1bW5zW2NvbF0uY2hpbGRyZW5bcm93XS5jbGFzc0xpc3QuYWRkKHRoaXMuY29sb3JzW3RoaXMuaG9sZFBpZWNlLmNvbG9yQ29kZV0pO1xuICAgICAgICB9KVxuXG4gICAgfVxuXG4gICAgLy8gdXNlZCBmb3IgdGhpcy5ob2xkKCk6IGdlbmVyYXRlIGEgbmV3IHBpZWNlIHNvIHRoYXQgYSBob2xkcGllY2UgdGhhdCBpcyByZS1yZW5kZXJlZCBvbiB0aGUgYm9hcmQgd2lsbCBub3Qgc3RhcnQgZnJvbSB0aGUgb2xkIHBvc2l0aW9uXG4gICAgX2dlbmVyYXRlUGllY2UocGllY2VOYW1lKSB7XG4gICAgICAgIHN3aXRjaChwaWVjZU5hbWUpIHtcbiAgICAgICAgICAgIGNhc2UgXCJUUGllY2VcIjpcbiAgICAgICAgICAgICAgICByZXR1cm4gbmV3IFRQaWVjZTtcbiAgICAgICAgICAgIGNhc2UgXCJPUGllY2VcIjpcbiAgICAgICAgICAgICAgICByZXR1cm4gbmV3IE9QaWVjZTtcbiAgICAgICAgICAgIGNhc2UgXCJJUGllY2VcIjpcbiAgICAgICAgICAgICAgICByZXR1cm4gbmV3IElQaWVjZTtcbiAgICAgICAgICAgIGNhc2UgXCJMUGllY2VcIjpcbiAgICAgICAgICAgICAgICByZXR1cm4gbmV3IExQaWVjZTtcbiAgICAgICAgICAgIGNhc2UgXCJKUGllY2VcIjpcbiAgICAgICAgICAgICAgICByZXR1cm4gbmV3IEpQaWVjZTtcbiAgICAgICAgICAgIGNhc2UgXCJTUGllY2VcIjpcbiAgICAgICAgICAgICAgICByZXR1cm4gbmV3IFNQaWVjZTtcbiAgICAgICAgICAgIGNhc2UgXCJaUGllY2VcIjpcbiAgICAgICAgICAgICAgICByZXR1cm4gbmV3IFpQaWVjZTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8vIHRha2Ugb25lIHBpZWNlIGZyb20gbmV4dEJhZyBhbmQgYWRkIHRvIGN1cnJlbnRCYWdcbiAgICBfYWRkVG9DdXJyZW50QmFnKCkge1xuICAgICAgICB0aGlzLmN1cnJlbnRCYWcucHVzaCh0aGlzLm5leHRCYWcuc2hpZnQoKSk7XG4gICAgfVxuXG4gICAgX3Nob3dDdXJyZW50QmFnKCkge1xuICAgICAgICBsZXQgYm94ZXMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKGBuZXh0LWJveCBmaWVsZC0ke3RoaXMuZ2FtZU51bX1gKTtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCA1OyBpKyspIHtcbiAgICAgICAgICAgIHRoaXMuX3BvcHVsYXRlTmV4dEJveChib3hlc1tpXSwgdGhpcy5jdXJyZW50QmFnW2ldKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIF9wb3B1bGF0ZU5leHRCb3goYm94LCBwaWVjZSkge1xuICAgICAgICAvLyBjb2x1bW5zIGlzIG5vZGVsaXN0IG9mIDx1bHM+XG4gICAgICAgIGxldCBjb2x1bW5zID0gYm94LmNoaWxkcmVuO1xuXG4gICAgICAgIC8vIHJlbW92ZSBjb2xvcnMgZnJvbSBwcmV2aW91cyBwaWVjZXNcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCA1OyBpKyspIHtcbiAgICAgICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgNDsgaisrKSB7XG4gICAgICAgICAgICAgICAgLy8gY29sdW1ucy5jaGlsZHJlbiBpcyBub2RlbGlzdCBvZiA8bGlzPlxuICAgICAgICAgICAgICAgIGNvbHVtbnNbaV0uY2hpbGRyZW5bal0uY2xhc3NOYW1lID0gXCJcIjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHBpZWNlLmRpc3BsYXlTcXVhcmVzLmZvckVhY2goc3F1YXJlID0+IHtcbiAgICAgICAgICAgIGxldCBbY29sLCByb3ddID0gW3NxdWFyZVswXSwgc3F1YXJlWzFdXTtcbiAgICAgICAgICAgIGNvbHVtbnNbY29sXS5jaGlsZHJlbltyb3ddLmNsYXNzTGlzdC5hZGQodGhpcy5jb2xvcnNbcGllY2UuY29sb3JDb2RlXSk7XG4gICAgICAgIH0pXG4gICAgfVxuXG4gICAgLy8gcmVmaWxsIG5leHQgYmFnLCB3aWxsIG9ubHkgYmUgY2FsbGVkIG9uY2UgbmV4dEJhZyBiZWNvbWVzIGVtcHR5XG4gICAgX3JlZmlsbE5leHRCYWcoKSB7XG4gICAgICAgIHRoaXMubmV4dEJhZyA9IHRoaXMuZ2VuZXJhdGVCYWcoKTtcbiAgICB9XG5cbiAgICAvLyBpbXBsZW1lbnRhdGlvbiBvZiBzaHVmZmxlIGZvdW5kIG9uIGh0dHBzOi8vc3RhY2tvdmVyZmxvdy5jb20vcXVlc3Rpb25zLzI0NTA5NTQvaG93LXRvLXJhbmRvbWl6ZS1zaHVmZmxlLWEtamF2YXNjcmlwdC1hcnJheSMyNDUwOTc2XG4gICAgX3NodWZmbGVCYWcoYmFnKSB7XG4gICAgICAgIHZhciBjdXJyZW50SW5kZXggPSBiYWcubGVuZ3RoLCB0ZW1wb3JhcnlWYWx1ZSwgcmFuZG9tSW5kZXg7XG5cbiAgICAgICAgLy8gV2hpbGUgdGhlcmUgcmVtYWluIGVsZW1lbnRzIHRvIHNodWZmbGUuLi5cbiAgICAgICAgd2hpbGUgKDAgIT09IGN1cnJlbnRJbmRleCkge1xuXG4gICAgICAgICAgICAvLyBQaWNrIGEgcmVtYWluaW5nIGVsZW1lbnQuLi5cbiAgICAgICAgICAgIHJhbmRvbUluZGV4ID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogY3VycmVudEluZGV4KTtcbiAgICAgICAgICAgIGN1cnJlbnRJbmRleCAtPSAxO1xuXG4gICAgICAgICAgICAvLyBBbmQgc3dhcCBpdCB3aXRoIHRoZSBjdXJyZW50IGVsZW1lbnQuXG4gICAgICAgICAgICB0ZW1wb3JhcnlWYWx1ZSA9IGJhZ1tjdXJyZW50SW5kZXhdO1xuICAgICAgICAgICAgYmFnW2N1cnJlbnRJbmRleF0gPSBiYWdbcmFuZG9tSW5kZXhdO1xuICAgICAgICAgICAgYmFnW3JhbmRvbUluZGV4XSA9IHRlbXBvcmFyeVZhbHVlO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBiYWc7XG4gICAgfVxuICAgIC8vIGltcGxlbWVudGF0aW9uIG9mIHNodWZmbGUgZm91bmQgb24gaHR0cHM6Ly9zdGFja292ZXJmbG93LmNvbS9xdWVzdGlvbnMvMjQ1MDk1NC9ob3ctdG8tcmFuZG9taXplLXNodWZmbGUtYS1qYXZhc2NyaXB0LWFycmF5IzI0NTA5NzZcblxuICAgIC8vIGxvb2sgdGhyb3VnaCBmaWVsZCwgaWYgZmllbGRbcm93XVtjb2xdIGNvbnRhaW5zIGEgbnVtYmVyID4gMCwgZmlsbCB0aGF0IHNwb3Qgd2l0aCB0aGUgcmVzcGVjdGl2ZSBjb2xvci4gRWxzZSwgcmVtb3ZlIGNvbG9yXG4gICAgcmVuZGVyKCkge1xuICAgICAgICBpZiAodGhpcy5jdXJyZW50UGllY2UucmlnaHRNb3N0WzFdID4gOSB8fCB0aGlzLmN1cnJlbnRQaWVjZS5sZWZ0TW9zdFsxXSA8IDApIHJldHVybjtcbiAgICAgICAgbGV0IGZpZWxkQ29sdW1ucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoYC5maWVsZC1jb2x1bW4uZmllbGQtJHt0aGlzLmdhbWVOdW19YCk7XG4gICAgICAgIHRoaXMuZmllbGQuZm9yRWFjaCgocm93LCByb3dJZHgpID0+IHtcbiAgICAgICAgICAgIHJvdy5mb3JFYWNoKChjb2wsIGNvbElkeCkgPT4ge1xuICAgICAgICAgICAgICAgIGxldCBzcXVhcmVWYWx1ZSA9IHRoaXMuZmllbGRbcm93SWR4XVtjb2xJZHhdO1xuICAgICAgICAgICAgICAgIGlmIChzcXVhcmVWYWx1ZSA9PT0gJ3gnKSB7XG4gICAgICAgICAgICAgICAgICAgIGZpZWxkQ29sdW1uc1tjb2xJZHhdLmNoaWxkcmVuW3Jvd0lkeF0uY2xhc3NMaXN0LmFkZChgeC0ke3RoaXMuY29sb3JzW3RoaXMuY3VycmVudFBpZWNlLmNvbG9yQ29kZV19YCk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmIChzcXVhcmVWYWx1ZSkge1xuICAgICAgICAgICAgICAgICAgICBmaWVsZENvbHVtbnNbY29sSWR4XS5jaGlsZHJlbltyb3dJZHhdLmNsYXNzTGlzdC5hZGQodGhpcy5jb2xvcnNbc3F1YXJlVmFsdWVdKTtcbiAgICAgICAgICAgICAgICAgICAgZmllbGRDb2x1bW5zW2NvbElkeF0uY2hpbGRyZW5bcm93SWR4XS5jbGFzc0xpc3QucmVtb3ZlKGB4LSR7dGhpcy5jb2xvcnNbdGhpcy5jdXJyZW50UGllY2UuY29sb3JDb2RlXX1gKTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBPYmplY3QudmFsdWVzKHRoaXMuY29sb3JzKS5mb3JFYWNoKGNvbG9yID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChmaWVsZENvbHVtbnNbY29sSWR4XSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpZWxkQ29sdW1uc1tjb2xJZHhdLmNoaWxkcmVuW3Jvd0lkeF0uY2xhc3NMaXN0LnJlbW92ZShjb2xvcik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZmllbGRDb2x1bW5zW2NvbElkeF0uY2hpbGRyZW5bcm93SWR4XS5jbGFzc0xpc3QucmVtb3ZlKGB4LSR7Y29sb3J9YCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGtleUxpc3RlbmVyKCkge1xuICAgICAgICBkb2N1bWVudC5ib2R5LmFkZEV2ZW50TGlzdGVuZXIoXCJrZXlkb3duXCIsIGV2ZW50ID0+IHtcbiAgICAgICAgICAgIHRoaXMuY3VycmVudFBpZWNlLnNldE91dGVyU3F1YXJlcygpO1xuICAgICAgICAgICAgLy8gdGhpcy5jbGVhckdob3N0UG9zaXRpb24oKTtcbiAgICAgICAgICAgIHN3aXRjaChldmVudC53aGljaCkge1xuICAgICAgICAgICAgICAgIC8vIHVwIGtleVxuICAgICAgICAgICAgICAgIGNhc2UgdGhpcy5jb250cm9scy50dXJuUmlnaHQ6XG4gICAgICAgICAgICAgICAgICAgIC8vIHBhc3MgZmllbGQgc28gcGllY2UgY2FuIGNoZWNrIGZpZWxkIHdhbGwgYmVmb3JlIHR1cm5pbmdcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jbGVhckdob3N0UG9zaXRpb24oKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jdXJyZW50UGllY2UubW92ZShcInR1cm5SaWdodFwiLCB0aGlzLmZpZWxkKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuY3VycmVudFBpZWNlLnJpZ2h0TW9zdFsxXSA8IDEwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmN1cnJlbnRQaWVjZS5wb3B1bGF0ZUZpZWxkKHRoaXMuZmllbGQpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0R2hvc3RQb3NpdGlvbigpO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAvLyBDIGtleVxuICAgICAgICAgICAgICAgIGNhc2UgdGhpcy5jb250cm9scy50dXJuTGVmdDpcbiAgICAgICAgICAgICAgICAgICAgLy8gcGFzcyBmaWVsZCBzbyBwaWVjZSBjYW4gY2hlY2sgZmllbGQgd2FsbCBiZWZvcmUgdHVybmluZ1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmNsZWFyR2hvc3RQb3NpdGlvbigpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmN1cnJlbnRQaWVjZS5tb3ZlKFwidHVybkxlZnRcIiwgdGhpcy5maWVsZCk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY3VycmVudFBpZWNlLnBvcHVsYXRlRmllbGQodGhpcy5maWVsZCk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0R2hvc3RQb3NpdGlvbigpO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAvLyBsZWZ0IGtleVxuICAgICAgICAgICAgICAgIGNhc2UgdGhpcy5jb250cm9scy5sZWZ0OlxuICAgICAgICAgICAgICAgICAgICB0aGlzLmtleUhlbGQubGVmdCA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLmN1cnJlbnRQaWVjZS5sZWZ0U2lkZUJsb2NrZWQodGhpcy5maWVsZCkpIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLm1vdmVQaWVjZSh0aGlzLm1vdmVTcGVlZCwgXCJsZWZ0XCIpO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAvLyByaWdodCBrZXlcbiAgICAgICAgICAgICAgICBjYXNlIHRoaXMuY29udHJvbHMucmlnaHQ6XG4gICAgICAgICAgICAgICAgICAgIHRoaXMua2V5SGVsZC5yaWdodCA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLmN1cnJlbnRQaWVjZS5yaWdodFNpZGVCbG9ja2VkKHRoaXMuZmllbGQpKSBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5tb3ZlUGllY2UodGhpcy5tb3ZlU3BlZWQsIFwicmlnaHRcIik7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIC8vIGRvd24ga2V5XG4gICAgICAgICAgICAgICAgY2FzZSB0aGlzLmNvbnRyb2xzLnNvZnREcm9wOlxuICAgICAgICAgICAgICAgICAgICB0aGlzLmtleUhlbGQuZG93biA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMubW92ZVBpZWNlKHRoaXMubW92ZVNwZWVkLCBcImRvd25cIik7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIC8vIHNoaWZ0IGtleVxuICAgICAgICAgICAgICAgIGNhc2UgdGhpcy5jb250cm9scy5ob2xkOiBcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jbGVhckdob3N0UG9zaXRpb24oKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5ob2xkKCk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY3VycmVudFBpZWNlLnBvcHVsYXRlRmllbGQodGhpcy5maWVsZCk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0R2hvc3RQb3NpdGlvbigpO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAvLyBzcGFjZSBiYXJcbiAgICAgICAgICAgICAgICBjYXNlIHRoaXMuY29udHJvbHMuaGFyZERyb3A6XG4gICAgICAgICAgICAgICAgICAgIC8vIHRoaXMucmVuZGVyKCk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY2xlYXJHaG9zdFBvc2l0aW9uKCk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY3VycmVudFBpZWNlLmhhcmREcm9wKHRoaXMuZmllbGQpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnJlbmRlcigpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmN1cnJlbnRQaWVjZS5wb3B1bGF0ZUZpZWxkKHRoaXMuZmllbGQpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmhhbmRsZVBpZWNlU3RvcCh0aGlzLmhhbmRsZUNsZWFyLmRyb3ApO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAvLyBQIGtleVxuICAgICAgICAgICAgICAgIGNhc2UgODA6XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuaXNQYXVzZWQgPyB0aGlzLmRyb3BQaWVjZSh0aGlzLmRyb3BTcGVlZCkgOiBjYW5jZWxBbmltYXRpb25GcmFtZSh0aGlzLmhhbmRsZUNsZWFyLmRyb3ApO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmlzUGF1c2VkID0gIXRoaXMuaXNQYXVzZWQ7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5jdXJyZW50UGllY2Uuc2V0T3V0ZXJTcXVhcmVzKCk7XG4gICAgICAgICAgICAvLyBtZXNzZXMgdXAgd2l0aCBwaWVjZSBjb2xvclxuICAgICAgICAgICAgLy8gdGhpcy5jdXJyZW50UGllY2UucG9wdWxhdGVGaWVsZCh0aGlzLmZpZWxkKTtcbiAgICAgICAgICAgIHRoaXMucmVuZGVyKCk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGRvY3VtZW50LmJvZHkuYWRkRXZlbnRMaXN0ZW5lcihcImtleXVwXCIsIGV2ZW50ID0+IHtcbiAgICAgICAgICAgIHN3aXRjaCAoZXZlbnQud2hpY2gpIHtcbiAgICAgICAgICAgICAgICBjYXNlIHRoaXMuY29udHJvbHMucmlnaHQ6IFxuICAgICAgICAgICAgICAgICAgICB0aGlzLmtleUhlbGQucmlnaHQgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSB0aGlzLmNvbnRyb2xzLmxlZnQ6IFxuICAgICAgICAgICAgICAgICAgICB0aGlzLmtleUhlbGQubGVmdCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlIHRoaXMuY29udHJvbHMuc29mdERyb3A6IFxuICAgICAgICAgICAgICAgICAgICB0aGlzLmtleUhlbGQuZG93biA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICBicmVhazsgIFxuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBjbGVhckxpbmVzKGxvd2VzdCwgaGlnaGVzdCwgbnVtTGluZXNDbGVhcmVkKSB7XG4gICAgICAgIC8vIGJhc2UgY2FzZTogaWYgd2UgcmVhY2ggYSByb3cgdGhhdCBpcyBoaWdoZXIgdGhhbiB0aGUgaGlnaGVzdCwgdGhlbiByZXR1cm4gbnVtYmVyIG9mIGxpbmVzIHRoYXQgd2VyZSBjbGVhcmVkXG4gICAgICAgIGlmIChsb3dlc3QgPCBoaWdoZXN0KSB7XG4gICAgICAgICAgICByZXR1cm4gbnVtTGluZXNDbGVhcmVkO1xuICAgICAgICB9O1xuICAgICAgICAvLyByZWN1cnNpdmUgY2FzZTogXG4gICAgICAgIC8vIGlmIGxvd2VzdCByb3cgZG9lcyBub3QgY29udGFpbiBhIDAsIGJyaW5nIGFsbCBhYm92ZSByb3dzIGRvd24gb25lIGxldmVsXG4gICAgICAgIGlmICghdGhpcy5maWVsZFtsb3dlc3RdLmluY2x1ZGVzKDApKSB7XG4gICAgICAgICAgICB0aGlzLl9icmluZ0Rvd25GaWVsZChsb3dlc3QpO1xuICAgICAgICAgICAgLy8gY2FsbCByZWN1cnNpdmVDbGVhcihsb3dlc3QsIGhpZ2hlc3QgKyAxKTtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmNsZWFyTGluZXMobG93ZXN0LCBoaWdoZXN0ICsgMSwgbnVtTGluZXNDbGVhcmVkICsgMSlcbiAgICAgICAgLy8gaWYgcm93IGNvbnRhaW5zIGEgMCBcbiAgICAgICAgLy8gY2FsbCBDbGVhckxpbmVzKGxvd2VzdCAtIDEsIGhpZ2hlc3QpXG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy5maWVsZFtsb3dlc3RdLmluY2x1ZGVzKDApKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5jbGVhckxpbmVzKGxvd2VzdCAtIDEsIGhpZ2hlc3QsIG51bUxpbmVzQ2xlYXJlZCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBfYnJpbmdEb3duRmllbGQoc3RhcnRpbmdSb3cpIHtcbiAgICAgICAgZm9yIChsZXQgaSA9IHN0YXJ0aW5nUm93OyBpID4gMDsgaS0tKSB7XG4gICAgICAgICAgICB0aGlzLmZpZWxkW2ldID0gdGhpcy5maWVsZFtpIC0gMV07XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5maWVsZFswXSA9IFswLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwXTtcbiAgICB9XG5cbiAgICBoYW5kbGVQaWVjZVN0b3AoKSB7ICBcbiAgICAgICAgLy8gYWxsb3cgcGxheWVyIHRvIGhvbGQgcGllY2UgYWdhaW5cbiAgICAgICAgdGhpcy5jYW5Ib2xkID0gdHJ1ZTtcbiAgICAgICAgbGV0IGxvd2VzdCA9IHRoaXMuY3VycmVudFBpZWNlLnBvc2l0aW9uLmJvdHRvbVswXVswXTtcbiAgICAgICAgLy8gaW4gY2FzZSBvZiBsaW5lIHBpZWNlLCB3aGljaCBtYXkgbm90IGhhdmUgdGhpcy5wb3NpdGlvbi50b3BcbiAgICAgICAgbGV0IGhpZ2hlc3QgPSAhdGhpcy5jdXJyZW50UGllY2UucG9zaXRpb24udG9wLmxlbmd0aCA/IGxvd2VzdCA6IHRoaXMuY3VycmVudFBpZWNlLnBvc2l0aW9uLnRvcFswXVswXTtcbiAgICAgICAgaWYgKCF0aGlzLmZpZWxkW2xvd2VzdF0pIGNvbnNvbGUubG9nKFwiZGFzZFwiKTtcbiAgICAgICAgbGV0IG51bUxpbmVzQ2xlYXJlZCA9IHRoaXMuY2xlYXJMaW5lcyhsb3dlc3QsIGhpZ2hlc3QsIDApO1xuXG4gICAgICAgIC8vIGluIHRoZSBjYXNlIG9mIG11bHRpcGxheWVyLCBzZW5kIGNsZWFyZWQgbGluZXMgdG8gb3Bwb25lbnQgYW5kIHJlY2VpdmUgcG90ZW50aWFsIGxpbmVzXG4gICAgICAgIGlmICh0aGlzLm9wcG9uZW50KSB7XG4gICAgICAgICAgICBpZiAobnVtTGluZXNDbGVhcmVkID4gMCkge1xuICAgICAgICAgICAgICAgIHRoaXMuY29tYm8gKz0gMTtcbiAgICAgICAgICAgICAgICBsZXQgbnVtTGluZXMgPSBudW1MaW5lc0NsZWFyZWQgPT09IDQgPyA0IDogbnVtTGluZXNDbGVhcmVkIC0gMTtcbiAgICAgICAgICAgICAgICBudW1MaW5lcyArPSB0aGlzLmNvbWJvR3VpZGVbdGhpcy5jb21ib107XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMudXBjb21pbmdMaW5lcyA+IDApIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy51cGNvbWluZ0xpbmVzIC09IG51bUxpbmVzO1xuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy51cGNvbWluZ0xpbmVzIDwgMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5vcHBvbmVudC5hZGRMaW5lc1RvUXVldWUoTWF0aC5hYnModGhpcy51cGNvbWluZ0xpbmVzKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnVwY29taW5nTGluZXMgPSAwO1xuICAgICAgICAgICAgICAgICAgICAgICAgYWRqdXN0UXVldWVIZWlnaHQodGhpcy5nYW1lTnVtLCAwKTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGFkanVzdFF1ZXVlSGVpZ2h0KHRoaXMuZ2FtZU51bSwgdGhpcy51cGNvbWluZ0xpbmVzICogNSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLm9wcG9uZW50LmFkZExpbmVzVG9RdWV1ZShudW1MaW5lcyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLmNvbWJvID0gLTE7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMudXBjb21pbmdMaW5lcyA+IDApIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5yZWNlaXZlVXBjb21pbmdMaW5lcyh0aGlzLnVwY29taW5nTGluZXMpO1xuICAgICAgICAgICAgICAgICAgICBhZGp1c3RRdWV1ZUhlaWdodCh0aGlzLmdhbWVOdW0sIDApO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gXG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmNsZWFyR2hvc3RDbGFzcygpO1xuICAgICAgICBjYW5jZWxBbmltYXRpb25GcmFtZSh0aGlzLmhhbmRsZUNsZWFyLmRyb3ApO1xuICAgICAgICB0aGlzLnBsYXkoKTtcbiAgICB9XG5cbiAgICBkcm9wUGllY2UoZnBzKSB7XG4gICAgICAgIC8vIERvIHdoYXRldmVyXG4gICAgICAgIHRoaXMuYW5pbWF0ZS5kcm9wLmZwc0ludGVydmFsID0gMTAwMCAvIGZwcztcbiAgICAgICAgdGhpcy5hbmltYXRlLmRyb3AudGhlbiA9IERhdGUubm93KCk7XG4gICAgICAgIHRoaXMuYW5pbWF0ZS5kcm9wLnN0YXJ0VGltZSA9IHRoaXMudGhlbjtcbiAgICAgICAgdGhpcy5kcm9wKCk7XG4gICAgfVxuXG4gICAgLy8gaW5zcGlyYXRpb24gZm9yIHRocm90dGxpbmcgcmVxdWVzdEFuaW1hdGlvbkZyYW1lIGZyb20gaHR0cHM6Ly9zdGFja292ZXJmbG93LmNvbS9xdWVzdGlvbnMvMTk3NjQwMTgvY29udHJvbGxpbmctZnBzLXdpdGgtcmVxdWVzdGFuaW1hdGlvbmZyYW1lXG4gICAgZHJvcCgpIHtcbiAgICAgICAgdGhpcy5oYW5kbGVDbGVhci5kcm9wID0gcmVxdWVzdEFuaW1hdGlvbkZyYW1lKHRoaXMuZHJvcCk7XG4gICAgICAgIHRoaXMuYW5pbWF0ZS5kcm9wLm5vdyA9IERhdGUubm93KCk7XG4gICAgICAgIGxldCBlbGFwc2VkID0gdGhpcy5hbmltYXRlLmRyb3Aubm93IC0gdGhpcy5hbmltYXRlLmRyb3AudGhlbjtcbiAgICAgICAgaWYgKGVsYXBzZWQgPiB0aGlzLmFuaW1hdGUuZHJvcC5mcHNJbnRlcnZhbCkge1xuICAgICAgICAgICAgLy8gR2V0IHJlYWR5IGZvciBuZXh0IGZyYW1lIGJ5IHNldHRpbmcgdGhlbj1ub3csIGFkanVzdGluZyBmb3Igc3BlY2lmaWVkIGZwc0ludGVydmFsIG5vdCBiZWluZyBhIG11bHRpcGxlIG9mIFJBRidzIGludGVydmFsICgxNi43bXMpXG4gICAgICAgICAgICB0aGlzLmFuaW1hdGUuZHJvcC50aGVuID0gdGhpcy5hbmltYXRlLmRyb3Aubm93IC0gKGVsYXBzZWQgJSB0aGlzLmFuaW1hdGUuZHJvcC5mcHNJbnRlcnZhbCk7XG4gICAgICAgICAgICB0aGlzLmN1cnJlbnRQaWVjZS5wb3B1bGF0ZUZpZWxkKHRoaXMuZmllbGQpO1xuICAgICAgICAgICAgdGhpcy5yZW5kZXIoKTtcbiAgICAgICAgICAgIGlmICghdGhpcy5jdXJyZW50UGllY2UuaXNGYWxsaW5nKHRoaXMuZmllbGQpKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5oYW5kbGVQaWVjZVN0b3AodGhpcy5oYW5kbGVDbGVhci5kcm9wKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICh0aGlzLmN1cnJlbnRQaWVjZS5ib3R0b21Nb3N0WzBdICE9IDApIHRoaXMuY3VycmVudFBpZWNlLmRyb3AoKTtcbiAgICAgICAgICAgIC8vIHRoaXMuc2V0R2hvc3RQb3NpdGlvbigpO1xuICAgICAgICAgICAgdGhpcy5jdXJyZW50UGllY2UucG9wdWxhdGVGaWVsZCh0aGlzLmZpZWxkKTsgLy8ga2VlcCBvbmx5IG9uZSBwb3B1bGF0ZSBmaWVsZD9cbiAgICAgICAgICAgIHRoaXMucmVuZGVyKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBtb3ZlUGllY2UoZnBzLCBkaXJlY3Rpb24pIHtcbiAgICAgICAgLy8gRG8gd2hhdGV2ZXJcbiAgICAgICAgdGhpcy5hbmltYXRlW2RpcmVjdGlvbl0uZnBzSW50ZXJ2YWwgPSAxMDAwIC8gZnBzO1xuICAgICAgICB0aGlzLmFuaW1hdGVbZGlyZWN0aW9uXS50aGVuID0gRGF0ZS5ub3coKTtcbiAgICAgICAgdGhpcy5hbmltYXRlW2RpcmVjdGlvbl0uc3RhcnRUaW1lID0gdGhpcy5hbmltYXRlW2RpcmVjdGlvbl0udGhlbjtcbiAgICAgICAgdGhpcy5tb3ZlKGRpcmVjdGlvbik7XG4gICAgfVxuXG4gICAgLy8gaW5zcGlyYXRpb24gZm9yIHRocm90dGxpbmcgcmVxdWVzdEFuaW1hdGlvbkZyYW1lIGZyb20gaHR0cHM6Ly9zdGFja292ZXJmbG93LmNvbS9xdWVzdGlvbnMvMTk3NjQwMTgvY29udHJvbGxpbmctZnBzLXdpdGgtcmVxdWVzdGFuaW1hdGlvbmZyYW1lXG4gICAgbW92ZShkaXJlY3Rpb24pIHtcbiAgICAgICAgdGhpcy5oYW5kbGVDbGVhcltkaXJlY3Rpb25dID0gcmVxdWVzdEFuaW1hdGlvbkZyYW1lKCgpID0+IHRoaXMubW92ZShkaXJlY3Rpb24pKTtcbiAgICAgICAgaWYgKCF0aGlzLmtleUhlbGRbZGlyZWN0aW9uXSkgY2FuY2VsQW5pbWF0aW9uRnJhbWUodGhpcy5oYW5kbGVDbGVhcltkaXJlY3Rpb25dKTtcbiAgICAgICAgdGhpcy5hbmltYXRlW2RpcmVjdGlvbl0ubm93ID0gRGF0ZS5ub3coKTtcbiAgICAgICAgbGV0IGVsYXBzZWQgPSB0aGlzLmFuaW1hdGVbZGlyZWN0aW9uXS5ub3cgLSB0aGlzLmFuaW1hdGVbZGlyZWN0aW9uXS50aGVuO1xuICAgICAgICBpZiAoZWxhcHNlZCA+IHRoaXMuYW5pbWF0ZVtkaXJlY3Rpb25dLmZwc0ludGVydmFsKSB7XG4gICAgICAgICAgICAvLyBHZXQgcmVhZHkgZm9yIG5leHQgZnJhbWUgYnkgc2V0dGluZyB0aGVuPW5vdywgYWRqdXN0aW5nIGZvciBzcGVjaWZpZWQgZnBzSW50ZXJ2YWwgbm90IGJlaW5nIGEgbXVsdGlwbGUgb2YgUkFGJ3MgaW50ZXJ2YWwgKDE2LjdtcylcbiAgICAgICAgICAgIHRoaXMuYW5pbWF0ZVtkaXJlY3Rpb25dLnRoZW4gPSB0aGlzLmFuaW1hdGVbZGlyZWN0aW9uXS5ub3cgLSAoZWxhcHNlZCAlIHRoaXMuYW5pbWF0ZVtkaXJlY3Rpb25dLmZwc0ludGVydmFsKTtcblxuICAgICAgICAgICAgLy8gcHJldmVudCBwaWVjZSBmcm9tIG1vdmluZyBpZiBpdCBpcyBibG9ja2VkIG9yIGlmIGJvdGggbGVmdCBhbmQgcmlnaHQgYXJyb3cga2V5cyBhcmUgaGVsZCBkb3duXG4gICAgICAgICAgICBpZiAoXG4gICAgICAgICAgICAgICAgZGlyZWN0aW9uID09PSBcInJpZ2h0XCIgJiYgdGhpcy5jdXJyZW50UGllY2UucmlnaHRTaWRlQmxvY2tlZCh0aGlzLmZpZWxkKSBcbiAgICAgICAgICAgICAgICB8fCBcbiAgICAgICAgICAgICAgICBkaXJlY3Rpb24gPT09IFwibGVmdFwiICYmIHRoaXMuY3VycmVudFBpZWNlLmxlZnRTaWRlQmxvY2tlZCh0aGlzLmZpZWxkKSBcbiAgICAgICAgICAgICAgICB8fCBcbiAgICAgICAgICAgICAgICBkaXJlY3Rpb24gPT09IFwiZG93blwiICYmICF0aGlzLmN1cnJlbnRQaWVjZS5pc0ZhbGxpbmcodGhpcy5maWVsZClcbiAgICAgICAgICAgICAgICB8fCBcbiAgICAgICAgICAgICAgICB0aGlzLmtleUhlbGQucmlnaHQgJiYgdGhpcy5rZXlIZWxkLmxlZnRcbiAgICAgICAgICAgICkgeyBcbiAgICAgICAgICAgICAgICAvLyB0aGlzLmNsZWFyR2hvc3RQb3NpdGlvbigpO1xuICAgICAgICAgICAgICAgIC8vIHRoaXMuc2V0R2hvc3RQb3NpdGlvbigpO1xuICAgICAgICAgICAgICAgIHJldHVybjsgXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLmN1cnJlbnRQaWVjZS5tb3ZlKGRpcmVjdGlvbik7XG4gICAgICAgICAgICAvLyB0aGlzLmNsZWFyR2hvc3RQb3NpdGlvbigpO1xuICAgICAgICAgICAgdGhpcy5jdXJyZW50UGllY2UucG9wdWxhdGVGaWVsZCh0aGlzLmZpZWxkKTtcbiAgICAgICAgICAgIC8vIGNhdXNpbmcgZ2hvc3QgcG9zaXRpb24gbGFnXG4gICAgICAgICAgICB0aGlzLmNsZWFyR2hvc3RQb3NpdGlvbigpO1xuICAgICAgICAgICAgdGhpcy5zZXRHaG9zdFBvc2l0aW9uKCk7XG4gICAgICAgICAgICB0aGlzLnJlbmRlcigpO1xuICAgICAgICAgICAgLy8gYnJlYWs7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBoYW5kbGVUb3BQaWVjZSgpIHtcbiAgICAgICAgbGV0IGF0VG9wID0gZmFsc2U7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICB3aGlsZSAodGhpcy5maWVsZFt0aGlzLmN1cnJlbnRQaWVjZS5wb3NpdGlvbi5ib3R0b21bMF1bMF1dWzNdIHx8IHRoaXMuZmllbGRbdGhpcy5jdXJyZW50UGllY2UucG9zaXRpb24uYm90dG9tWzBdWzBdXVs0XSB8fCB0aGlzLmZpZWxkW3RoaXMuY3VycmVudFBpZWNlLnBvc2l0aW9uLmJvdHRvbVswXVswXV1bNV0gfHwgdGhpcy5maWVsZFt0aGlzLmN1cnJlbnRQaWVjZS5wb3NpdGlvbi5ib3R0b21bMF1bMF1dWzZdKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5jdXJyZW50UGllY2UubW92ZShcInVwXCIpO1xuICAgICAgICAgICAgICAgIGF0VG9wID0gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBjYXRjaCB7XG4gICAgICAgICAgICB0aGlzLmdhbWVPdmVyKHRoaXMub3Bwb25lbnQuZ2FtZU51bSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGF0VG9wO1xuICAgIH1cbiAgICBcbiAgICBwbGF5KCkge1xuICAgICAgICB0aGlzLnNldEN1cnJlbnRQaWVjZSgpO1xuICAgICAgICBkZWJ1Z2dlclxuICAgICAgICBpZiAodGhpcy5oYW5kbGVUb3BQaWVjZSgpID09PSB0cnVlKSB7XG4gICAgICAgICAgICB0aGlzLmN1cnJlbnRQaWVjZS5wb3B1bGF0ZUZpZWxkKHRoaXMuZmllbGQsIFwiYXRUb3BcIik7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmN1cnJlbnRQaWVjZS5wb3B1bGF0ZUZpZWxkKHRoaXMuZmllbGQpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuX2FkZFRvQ3VycmVudEJhZygpO1xuICAgICAgICB0aGlzLl9zaG93Q3VycmVudEJhZygpO1xuICAgICAgICBpZiAoIXRoaXMubmV4dEJhZy5sZW5ndGgpIHRoaXMuX3JlZmlsbE5leHRCYWcoKTtcbiAgICAgICAgdGhpcy5zZXRHaG9zdFBvc2l0aW9uKCk7XG4gICAgICAgIC8vIGRyb3AgcGllY2UgYXQgZ2l2ZW4gZnBzXG4gICAgICAgIHRoaXMuZHJvcFBpZWNlKHRoaXMuZHJvcFNwZWVkKTtcbiAgICB9XG5cbiAgICBnYW1lT3Zlcih3aW5uZXIpIHtcbiAgICAgICAgdGhpcy5kcm9wU3BlZWQgPSAwO1xuICAgICAgICBsZXQgZ2FtZU92ZXJTY3JlZW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICBnYW1lT3ZlclNjcmVlbi5jbGFzc0xpc3QuYWRkKFwiZ2FtZS1vdmVyLWRpdlwiKTtcbiAgICAgICAgXG4gICAgICAgIGxldCBnYW1lT3ZlckhlYWRpbmcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDJcIik7XG4gICAgICAgIGdhbWVPdmVySGVhZGluZy5jbGFzc0xpc3QuYWRkKFwiZ2FtZS1vdmVyLWhlYWRpbmdcIik7XG5cbiAgICAgICAgZ2FtZU92ZXJIZWFkaW5nLmlubmVySFRNTCA9IFwiR0FNRSBPVkVSXCI7XG4gICAgICAgIGdhbWVPdmVyU2NyZWVuLmFwcGVuZChnYW1lT3ZlckhlYWRpbmcpO1xuXG4gICAgICAgIGxldCB3aW5uZXJIZWFkaW5nO1xuICAgICAgICBpZiAod2lubmVyKSAge1xuICAgICAgICAgICAgd2lubmVySGVhZGluZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMlwiKTtcbiAgICAgICAgICAgIHdpbm5lckhlYWRpbmcuY2xhc3NMaXN0LmFkZChcImdhbWUtb3Zlci1oZWFkaW5nXCIpO1xuICAgICAgICAgICAgd2lubmVySGVhZGluZy5pbm5lckhUTUwgPSBgUExBWUVSICR7d2lubmVyfSBXT05gO1xuICAgICAgICAgICAgZ2FtZU92ZXJTY3JlZW4uYXBwZW5kKHdpbm5lckhlYWRpbmcpXG4gICAgICAgIH0gICBcblxuICAgICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGdhbWVPdmVyU2NyZWVuKTtcbiAgICB9XG5cbiAgICAvLyBtdWx0aXBsYXllciBcbiAgICBzZXRPcHBvbmVudChwbGF5ZXIpIHtcbiAgICAgICAgdGhpcy5vcHBvbmVudCA9IHBsYXllcjtcbiAgICB9XG5cbiAgICBhZGRMaW5lc1RvUXVldWUobnVtTGluZXMpIHtcbiAgICAgICAgdGhpcy51cGNvbWluZ0xpbmVzICs9IG51bUxpbmVzO1xuICAgICAgICBsZXQgcGVyY2VudGFnZSA9IHRoaXMudXBjb21pbmdMaW5lcyAqIDU7XG4gICAgICAgIGFkanVzdFF1ZXVlSGVpZ2h0KHRoaXMuZ2FtZU51bSwgcGVyY2VudGFnZSk7XG4gICAgfVxuXG4gICAgcmVjZWl2ZVVwY29taW5nTGluZXMoKSB7XG4gICAgICAgIGxldCBnYXJiYWdlTGluZXMgPSBbXTtcbiAgICAgICAgbGV0IG51bUxpbmVzID0gdGhpcy51cGNvbWluZ0xpbmVzO1xuICAgICAgICBsZXQgcmFuZG9tSG9sZTtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBudW1MaW5lczsgaSsrKSB7XG4gICAgICAgICAgICBpZiAoaSAlIDIgPT09IDApIHJhbmRvbUhvbGUgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiA5KTtcbiAgICAgICAgICAgIGxldCBnYXJiYWdlUm93ID0gWzgsIDgsIDgsIDgsIDgsIDgsIDgsIDgsIDgsIDhdO1xuICAgICAgICAgICAgZ2FyYmFnZVJvd1tyYW5kb21Ib2xlXSA9IDA7XG4gICAgICAgICAgICBnYXJiYWdlTGluZXMucHVzaChnYXJiYWdlUm93KTtcbiAgICAgICAgfVxuICAgICAgICAvLyBpZiBwbGF5ZXIgcmVhY2hlcyB0aGUgdG9wLCBwbGF5ZXIgbG9zZXNcbiAgICAgICAgLy8gc2xpY2UgYWxsb3dzIHBsYXllciB0byBjb250aW51ZSBwbGF5aW5nIGlmIHRvcCBtaWRkbGUgaXMgY2xlYXJcbiAgICAgICAgaWYgKCF0aGlzLmZpZWxkW251bUxpbmVzIC0gMV0uc2xpY2UoMiw3KS5pbmNsdWRlcygwKSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuZmllbGQgPSB0aGlzLmZpZWxkLnNsaWNlKG51bUxpbmVzLCAyMCkuY29uY2F0KGdhcmJhZ2VMaW5lcyk7XG4gICAgICAgIHRoaXMudXBjb21pbmdMaW5lcyA9IDA7XG4gICAgICAgIHRoaXMucmVuZGVyKCk7XG4gICAgfVxufSIsImltcG9ydCBNZW51IGZyb20gJy4vbWVudS9tZW51J1xuXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCAoKSA9PiB7XG4gICAgY29uc3QgbWVudSA9IG5ldyBNZW51O1xuICAgIG1lbnUucmVuZGVyTWVudSgpO1xufSk7IiwiaW1wb3J0IEdhbWUgZnJvbSAnLi4vZ2FtZS9nYW1lJztcbmltcG9ydCBGaWVsZCBmcm9tICcuLi9maWVsZC9maWVsZCc7XG5pbXBvcnQgTXVsdGlwbGF5ZXIgZnJvbSAnLi4vbXVsdGlwbGF5ZXIvbXVsdGlwbGF5ZXInO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNZW51IHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5tZW51ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJtZW51XCIpO1xuXG4gICAgICAgIHRoaXMub3B0aW9uc1BsYXllcjEgPSB7IGdhbWVOdW06IDEsIG1vdmVTcGVlZDogMjAsIGNvbnRyb2xzOiB7IGxlZnQ6IDM3LCByaWdodDogMzksIHR1cm5SaWdodDogMzgsIHNvZnREcm9wOiA0MCwgaG9sZDogMTYsIHR1cm5MZWZ0OiA2NywgaGFyZERyb3A6IDMyIH0gfVxuICAgICAgICB0aGlzLm9wdGlvbnNQbGF5ZXIyID0geyBnYW1lTnVtOiAyLCBtb3ZlU3BlZWQ6IDIwLCBjb250cm9sczogeyBsZWZ0OiAxODgsIHJpZ2h0OiAxOTEsIHR1cm5SaWdodDogNzYsIHNvZnREcm9wOiAxOTAsIGhvbGQ6IDc1LCB0dXJuTGVmdDogODYsIGhhcmREcm9wOiAxOCB9IH1cblxuICAgICAgICB0aGlzLmdhbWUxID0gbmV3IEdhbWUodGhpcy5vcHRpb25zUGxheWVyMSk7XG4gICAgICAgIHRoaXMuZ2FtZTIgPSBuZXcgR2FtZSh0aGlzLm9wdGlvbnNQbGF5ZXIyKTtcblxuICAgICAgICB0aGlzLmZpZWxkMSA9IG5ldyBGaWVsZCgxKTtcbiAgICAgICAgdGhpcy5maWVsZDIgPSBuZXcgRmllbGQoMik7XG5cbiAgICAgICAgdGhpcy5tdWx0aXBsYXllck1vZGUgPSBuZXcgTXVsdGlwbGF5ZXIodGhpcy5nYW1lMSwgdGhpcy5nYW1lMik7XG5cbiAgICAgICAgdGhpcy5maWVsZENvbnRhaW5lcjEgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImZpZWxkLWNvbnRhaW5lci0xXCIpO1xuICAgICAgICB0aGlzLmZpZWxkQ29udGFpbmVyMiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZmllbGQtY29udGFpbmVyLTJcIik7XG4gICAgfVxuXG4gICAgcmVuZGVyQnV0dG9ucygpIHtcbiAgICAgICAgbGV0IHNpbmdsZVBsYXllckJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIGxldCBtdWx0aXBsYXllckJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5cbiAgICAgICAgc2luZ2xlUGxheWVyQnV0dG9uLmNsYXNzTGlzdC5hZGQoXCJzaW5nbGUtcGxheWVyLWJ1dHRvblwiKTtcbiAgICAgICAgbXVsdGlwbGF5ZXJCdXR0b24uY2xhc3NMaXN0LmFkZChcIm11bHRpcGxheWVyLWJ1dHRvblwiKTtcblxuICAgICAgICBzaW5nbGVQbGF5ZXJCdXR0b24uaW5uZXJIVE1MID0gXCJTaW5nbGUgUGxheWVyXCI7XG4gICAgICAgIG11bHRpcGxheWVyQnV0dG9uLmlubmVySFRNTCA9IFwiTXVsdGlwbGF5ZXJcIjtcblxuICAgICAgICB0aGlzLmFkZEV2ZW50TGlzdGVuZXJzKHNpbmdsZVBsYXllckJ1dHRvbiwgbXVsdGlwbGF5ZXJCdXR0b24pO1xuXG4gICAgICAgIHJldHVybiBbc2luZ2xlUGxheWVyQnV0dG9uLCBtdWx0aXBsYXllckJ1dHRvbl07XG4gICAgfVxuXG4gICAgYWRkRXZlbnRMaXN0ZW5lcnMoc2luZ2xlUGxheWVyQnV0dG9uLCBtdWx0aXBsYXllckJ1dHRvbikge1xuICAgICAgICBzaW5nbGVQbGF5ZXJCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLnJlbmRlclNpbmdsZVBsYXllcigpO1xuICAgICAgICB9KTtcbiAgICAgICAgbXVsdGlwbGF5ZXJCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLnJlbmRlck11bHRpcGxheWVyKCk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHJlbmRlclNpbmdsZVBsYXllcigpIHtcbiAgICAgICAgZG9jdW1lbnQuYm9keS5yZW1vdmVDaGlsZCh0aGlzLm1lbnUpO1xuICAgICAgICBkb2N1bWVudC5ib2R5LnN0eWxlLmp1c3RpZnlDb250ZW50ID0gJ25vbmUnO1xuICAgICAgICB0aGlzLmZpZWxkMS5jcmVhdGVDb21wbGV0ZUZpZWxkKHRoaXMuZmllbGRDb250YWluZXIxKTtcbiAgICAgICAgdGhpcy5maWVsZENvbnRhaW5lcjEuc3R5bGUucG9zaXRpb24gPSAncmVsYXRpdmUnO1xuICAgICAgICB0aGlzLmZpZWxkQ29udGFpbmVyMS5zdHlsZS5sZWZ0ID0gJzE0dncnO1xuICAgICAgICB0aGlzLmdhbWUxLmtleUxpc3RlbmVyKCk7XG4gICAgICAgIHRoaXMuZ2FtZTEucGxheSgpO1xuICAgIH1cblxuICAgIHJlbmRlck11bHRpcGxheWVyKCkge1xuICAgICAgICBkb2N1bWVudC5ib2R5LnJlbW92ZUNoaWxkKHRoaXMubWVudSk7XG4gICAgICAgIHRoaXMuZmllbGQxLmNyZWF0ZUNvbXBsZXRlRmllbGQodGhpcy5maWVsZENvbnRhaW5lcjEpO1xuICAgICAgICB0aGlzLmdhbWUxLmtleUxpc3RlbmVyKCk7XG5cbiAgICAgICAgdGhpcy5maWVsZDIuY3JlYXRlQ29tcGxldGVGaWVsZCh0aGlzLmZpZWxkQ29udGFpbmVyMik7XG4gICAgICAgIHRoaXMuZ2FtZTIua2V5TGlzdGVuZXIoKTtcblxuICAgICAgICB0aGlzLm11bHRpcGxheWVyTW9kZS5zdGFydE11bHRpcGxheWVyKCk7XG4gICAgfVxuXG4gICAgcmVuZGVyTWVudSgpIHtcbiAgICAgICAgbGV0IGJ1dHRvbkNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIGJ1dHRvbkNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwiYnV0dG9uLWNvbnRhaW5lclwiKTtcbiAgICAgICAgdGhpcy5yZW5kZXJCdXR0b25zKCkuZm9yRWFjaChidXR0b24gPT4ge1xuICAgICAgICAgICAgYnV0dG9uQ29udGFpbmVyLmFwcGVuZENoaWxkKGJ1dHRvbik7XG4gICAgICAgIH0pXG4gICAgICAgIHRoaXMubWVudS5hcHBlbmRDaGlsZChidXR0b25Db250YWluZXIpO1xuICAgIH1cbn0iLCJpbXBvcnQgR2FtZSBmcm9tICcuLi9nYW1lL2dhbWUnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNdWx0aXBsYXllciB7XG4gICAgY29uc3RydWN0b3IocGxheWVyMSwgcGxheWVyMikge1xuICAgICAgICB0aGlzLnBsYXllcjEgPSBwbGF5ZXIxO1xuICAgICAgICB0aGlzLnBsYXllcjIgPSBwbGF5ZXIyO1xuICAgIH1cblxuICAgIHN0YXJ0TXVsdGlwbGF5ZXIoKSB7XG4gICAgICAgIHRoaXMucGxheWVyMS5zZXRPcHBvbmVudCh0aGlzLnBsYXllcjIpO1xuICAgICAgICB0aGlzLnBsYXllcjIuc2V0T3Bwb25lbnQodGhpcy5wbGF5ZXIxKTtcbiAgICAgICAgdGhpcy5wbGF5ZXIxLnBsYXkoKTtcbiAgICAgICAgdGhpcy5wbGF5ZXIyLnBsYXkoKTtcbiAgICB9XG59XG4iLCJpbXBvcnQgUGllY2UgZnJvbSAnLi9waWVjZSc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIElQaWVjZSBleHRlbmRzIFBpZWNlIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgdGhpcy5uYW1lID0gXCJJUGllY2VcIjtcbiAgICAgICAgdGhpcy5wb3NpdGlvbiA9IHtcbiAgICAgICAgICAgIHRvcDogW10sXG4gICAgICAgICAgICBtaWRkbGU6IFtdLFxuICAgICAgICAgICAgYm90dG9tOiBbWzEsIDNdLCBbMSwgNF0sIFsxLCA1XSwgWzEsIDZdXVxuICAgICAgICB9O1xuICAgICAgICB0aGlzLmNvbG9yQ29kZSA9IDI7XG4gICAgICAgIHRoaXMudHVybmluZ1BvaW50ID0gWzEsIDVdO1xuICAgICAgICB0aGlzLmRpc3BsYXlTcXVhcmVzID0gW1swLCAyXSwgWzEsIDJdLCBbMiwgMl0sIFszLCAyXV07XG5cbiAgICAgICAgdGhpcy5yZW1vdmVTcXVhcmVzID0gW107XG4gICAgfVxuXG5cbn1cblxuXG4iLCJpbXBvcnQgUGllY2UgZnJvbSAnLi9waWVjZSc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIGpQaWVjZSBleHRlbmRzIFBpZWNlIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgdGhpcy5uYW1lID0gXCJKUGllY2VcIjtcbiAgICAgICAgdGhpcy5wb3NpdGlvbiA9IHtcbiAgICAgICAgICAgIHRvcDogW1swLCAzXV0sXG4gICAgICAgICAgICBtaWRkbGU6IFtdLFxuICAgICAgICAgICAgYm90dG9tOiBbWzEsIDNdLCBbMSwgNF0sIFsxLCA1XV1cbiAgICAgICAgfTtcbiAgICAgICAgdGhpcy5jb2xvckNvZGUgPSA3O1xuXG4gICAgICAgIHRoaXMudHVybmluZ1BvaW50ID0gWzEsIDRdO1xuXG4gICAgICAgIHRoaXMuZGlzcGxheVNxdWFyZXMgPSBbWzEsIDFdLCBbMSwgMl0sIFsyLCAyXSwgWzMsIDJdXTtcbiBcbiAgICAgICAgdGhpcy5yZW1vdmVTcXVhcmVzID0gW107XG4gICAgfVxufSIsImltcG9ydCBQaWVjZSBmcm9tICcuL3BpZWNlJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgbFBpZWNlIGV4dGVuZHMgUGllY2Uge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICB0aGlzLm5hbWUgPSBcIkxQaWVjZVwiO1xuICAgICAgICB0aGlzLnBvc2l0aW9uID0ge1xuICAgICAgICAgICAgdG9wOiBbWzAsIDVdXSxcbiAgICAgICAgICAgIG1pZGRsZTogW10sXG4gICAgICAgICAgICBib3R0b206IFtbMSwgM10sIFsxLCA0XSwgWzEsIDVdXVxuICAgICAgICB9O1xuICAgICAgICB0aGlzLmNvbG9yQ29kZSA9IDY7XG5cbiAgICAgICAgdGhpcy50dXJuaW5nUG9pbnQgPSBbMSwgNF07XG5cbiAgICAgICAgdGhpcy5kaXNwbGF5U3F1YXJlcyA9IFtbMSwgMl0sIFsyLCAyXSwgWzMsIDJdLCBbMywgMV1dO1xuXG4gICAgICAgIHRoaXMucmVtb3ZlU3F1YXJlcyA9IFtdO1xuICAgIH1cbn0iLCJpbXBvcnQgUGllY2UgZnJvbSAnLi9waWVjZSc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE9QaWVjZSBleHRlbmRzIFBpZWNlIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgdGhpcy5uYW1lID0gXCJPUGllY2VcIjtcbiAgICAgICAgdGhpcy5wb3NpdGlvbiA9IHtcbiAgICAgICAgICAgIHRvcDogW1swLCA0XSwgWzAsIDVdXSxcbiAgICAgICAgICAgIG1pZGRsZTogW10sXG4gICAgICAgICAgICBib3R0b206IFtbMSwgNF0sWzEsIDVdXVxuICAgICAgICB9O1xuICAgICAgICB0aGlzLmNvbG9yQ29kZSA9IDE7XG4gICAgICAgIHRoaXMudHVybmluZ1BvaW50ID0gWzEsIDRdO1xuICAgICAgICB0aGlzLmRpc3BsYXlTcXVhcmVzID0gW1sxLCAxXSwgWzIsIDFdLCBbMSwgMl0sIFsyLCAyXV07XG5cbiAgICAgICAgdGhpcy5yZW1vdmVTcXVhcmVzID0gW107XG4gICAgfVxuXG4gICAgLy8gT1BpZWNlIGRvZXMgbm90IHR1cm5cbiAgICB0dXJuUmlnaHQoKSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgXG4gICAgdHVybkxlZnQoKSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG59ICIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIFBpZWNlIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5sZWZ0TW9zdCA9ICcnO1xuICAgICAgICB0aGlzLnJpZ2h0TW9zdCA9ICcnO1xuICAgICAgICB0aGlzLmJvdHRvbU1vc3QgPSAnJztcbiAgICAgICAgdGhpcy50b3BNb3N0ID0gJyc7XG4gICAgfVxuXG4gICAgc2V0T3V0ZXJTcXVhcmVzKCkge1xuICAgICAgICBsZXQgbGVmdE1vc3QsIHJpZ2h0TW9zdCwgdG9wTW9zdCwgYm90dG9tTW9zdDtcbiAgICAgICAgT2JqZWN0LnZhbHVlcyh0aGlzLnBvc2l0aW9uKS5mb3JFYWNoKGNvb3JkaW5hdGVzQXJyYXkgPT4gY29vcmRpbmF0ZXNBcnJheS5mb3JFYWNoKGFycmF5ID0+IHtcbiAgICAgICAgICAgIGxldCBjb2x1bW5WYWx1ZSA9IGFycmF5WzFdO1xuICAgICAgICAgICAgbGV0IHJvd1ZhbHVlID0gYXJyYXlbMF07XG4gICAgICAgICAgICBpZiAoIWxlZnRNb3N0IHx8IGNvbHVtblZhbHVlIDwgbGVmdE1vc3RbMV0pIGxlZnRNb3N0ID0gW3Jvd1ZhbHVlLCBjb2x1bW5WYWx1ZV07XG4gICAgICAgICAgICBpZiAoIXJpZ2h0TW9zdCB8fCBjb2x1bW5WYWx1ZSA+IHJpZ2h0TW9zdFsxXSkgcmlnaHRNb3N0ID0gW3Jvd1ZhbHVlLCBjb2x1bW5WYWx1ZV07XG4gICAgICAgICAgICBpZiAoIWJvdHRvbU1vc3QgfHwgcm93VmFsdWUgPiBib3R0b21Nb3N0WzBdKSBib3R0b21Nb3N0ID0gW3Jvd1ZhbHVlLCBjb2x1bW5WYWx1ZV07XG4gICAgICAgICAgICBpZiAoIXRvcE1vc3QgfHwgcm93VmFsdWUgPCB0b3BNb3N0WzBdKSB0b3BNb3N0ID0gW3Jvd1ZhbHVlLCBjb2x1bW5WYWx1ZV07XG4gICAgICAgIH0pKTtcbiAgICAgICAgdGhpcy5sZWZ0TW9zdCA9IGxlZnRNb3N0O1xuICAgICAgICB0aGlzLnJpZ2h0TW9zdCA9IHJpZ2h0TW9zdDtcbiAgICAgICAgdGhpcy50b3BNb3N0ID0gdG9wTW9zdDtcbiAgICAgICAgdGhpcy5ib3R0b21Nb3N0ID0gYm90dG9tTW9zdDtcbiAgICB9XG5cbiAgICBwb3B1bGF0ZUZpZWxkKGZpZWxkLCBhdFRvcCkge1xuICAgICAgICBsZXQgY29vcmRpbmF0ZUFycmF5cyA9IE9iamVjdC52YWx1ZXModGhpcy5wb3NpdGlvbik7XG5cbiAgICAgICAgY29vcmRpbmF0ZUFycmF5cy5mb3JFYWNoKGFycmF5ID0+IHtcbiAgICAgICAgICAgIGFycmF5LmZvckVhY2goY29vcmRpbmF0ZSA9PiB7XG4gICAgICAgICAgICAgICAgbGV0IFtyb3csIGNvbF0gPSBbY29vcmRpbmF0ZVswXSwgY29vcmRpbmF0ZVsxXV07XG4gICAgICAgICAgICAgICAgaWYgKChjb2wgPj0gMCAmJiBjb2wgPD0gMTkpICYmIChyb3cgPj0gMCAmJiByb3cgPD0gMTkpKSBmaWVsZFtyb3ddW2NvbF0gPSB0aGlzLmNvbG9yQ29kZTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH0pO1xuXG4gICAgICAgIHRoaXMucmVtb3ZlU3F1YXJlcy5mb3JFYWNoKHBvc2l0aW9uQXJyYXkgPT4ge1xuICAgICAgICAgICAgbGV0IFtyb3csIGNvbF0gPSBbcG9zaXRpb25BcnJheVswXSwgcG9zaXRpb25BcnJheVsxXV07XG4gICAgICAgICAgICBpZiAoKGNvbCA+PSAwICYmIGNvbCA8PSAxOSkgJiYgKHJvdyA+PSAwICYmIHJvdyA8PSAxOSkpIGZpZWxkW3Jvd11bY29sXSA9IDA7XG4gICAgICAgIH0pO1xuXG4gICAgfVxuXG4gICAgLy8gY29tcGFyZXMgdHdvIGFycmF5cyBvZiBjb29yZGluYXRlcyBhbmQgY2hlY2sgaWYgdGhleSBoYXZlIHRoZSBzYW1lIGNvbnRlbnQgaW4gdGhlIHNhbWUgb3JkZXJcbiAgICBfc3F1YXJlc0FyZUVxdWFsKG9sZFNxdWFyZSwgbmV3U3F1YXJlKSB7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgb2xkU3F1YXJlLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBpZiAob2xkU3F1YXJlW2ldICE9PSBuZXdTcXVhcmVbaV0pIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG5cbiAgICBfaW5jbHVkZXMoc3F1YXJlLCBjb29yZGluYXRlQXJyYXlzKSB7XG4gICAgICAgIGxldCByZXN1bHQgPSBmYWxzZTtcbiAgICAgICAgY29vcmRpbmF0ZUFycmF5cy5mb3JFYWNoKGFycmF5ID0+IHtcbiAgICAgICAgICAgIGlmICh0aGlzLl9zcXVhcmVzQXJlRXF1YWwoc3F1YXJlLCBhcnJheSkpIHtcbiAgICAgICAgICAgICAgICByZXN1bHQgPSB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG5cbiAgICBkcm9wKCkge1xuICAgICAgICBsZXQgb2xkUG9zaXRpb24gPSB7XG4gICAgICAgICAgICB0b3A6IHRoaXMucG9zaXRpb24udG9wLm1hcChhcnJheSA9PiBhcnJheS5zbGljZSgpKSxcbiAgICAgICAgICAgIG1pZGRsZTogdGhpcy5wb3NpdGlvbi5taWRkbGUubWFwKGFycmF5ID0+IGFycmF5LnNsaWNlKCkpLFxuICAgICAgICAgICAgYm90dG9tOiB0aGlzLnBvc2l0aW9uLmJvdHRvbS5tYXAoYXJyYXkgPT4gYXJyYXkuc2xpY2UoKSksXG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLnBvc2l0aW9uLnRvcCA9IHRoaXMucG9zaXRpb24udG9wLm1hcChhcnJheSA9PiBbYXJyYXlbMF0gKyAxLCBhcnJheVsxXV0pO1xuICAgICAgICB0aGlzLnBvc2l0aW9uLm1pZGRsZSA9IHRoaXMucG9zaXRpb24ubWlkZGxlLm1hcChhcnJheSA9PiBbYXJyYXlbMF0gKyAxLCBhcnJheVsxXV0pO1xuICAgICAgICB0aGlzLnBvc2l0aW9uLmJvdHRvbSA9IHRoaXMucG9zaXRpb24uYm90dG9tLm1hcChhcnJheSA9PiBbYXJyYXlbMF0gKyAxLCBhcnJheVsxXV0pO1xuICAgICAgICB0aGlzLnR1cm5pbmdQb2ludCA9IFt0aGlzLnR1cm5pbmdQb2ludFswXSArIDEsIHRoaXMudHVybmluZ1BvaW50WzFdXTtcblxuICAgICAgICB0aGlzLnNldFJlbW92ZVNxdWFyZXMob2xkUG9zaXRpb24pO1xuICAgIH1cblxuICAgIC8vIGZpbmQgaGlnaGVzdCBwb3NzaWJsZSBncm91bmQtcG9zaXRpb24gZm9yIHBpZWNlXG4gICAgaGFyZERyb3AoZmllbGQpIHtcbiAgICAgICAgdGhpcy5jbGVhclNlbGZGcm9tQm9hcmQoZmllbGQpO1xuICAgICAgICBsZXQgc3RvcHBlZCA9IGZhbHNlO1xuICAgICAgICB3aGlsZSAoIXN0b3BwZWQpIHtcbiAgICAgICAgICAgIGxldCBoYW5naW5nU3F1YXJlcyA9IHRoaXMuaGFuZ2luZ1NxdWFyZXModGhpcy5wb3NpdGlvbik7XG4gICAgICAgICAgICBoYW5naW5nU3F1YXJlcy5mb3JFYWNoKGNvb3JkaW5hdGUgPT4ge1xuICAgICAgICAgICAgICAgIGxldCBbcm93LCBjb2xdID0gW2Nvb3JkaW5hdGVbMF0sIGNvb3JkaW5hdGVbMV1dO1xuICAgICAgICAgICAgICAgIGlmICgocm93ICsgMSA9PT0gMjAgfHwgZmllbGRbcm93ICsgMV1bY29sXSkpIHN0b3BwZWQgPSB0cnVlO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBpZiAoc3RvcHBlZCkgYnJlYWs7XG4gICAgICAgICAgICB0aGlzLnBvc2l0aW9uLnRvcCA9IHRoaXMucG9zaXRpb24udG9wLm1hcChhcnJheSA9PiBbYXJyYXlbMF0gKyAxLCBhcnJheVsxXV0pO1xuICAgICAgICAgICAgdGhpcy5wb3NpdGlvbi5taWRkbGUgPSB0aGlzLnBvc2l0aW9uLm1pZGRsZS5tYXAoYXJyYXkgPT4gW2FycmF5WzBdICsgMSwgYXJyYXlbMV1dKTtcbiAgICAgICAgICAgIHRoaXMucG9zaXRpb24uYm90dG9tID0gdGhpcy5wb3NpdGlvbi5ib3R0b20ubWFwKGFycmF5ID0+IFthcnJheVswXSArIDEsIGFycmF5WzFdXSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjbGVhclNlbGZGcm9tQm9hcmQoZmllbGQpIHtcbiAgICAgICAgZGVidWdnZXJcbiAgICAgICAgT2JqZWN0LnZhbHVlcyh0aGlzLnBvc2l0aW9uKS5mb3JFYWNoKGNvb3JkaW5hdGVBcnJheXMgPT4gY29vcmRpbmF0ZUFycmF5cy5mb3JFYWNoKGNvb3JkaW5hdGUgPT4ge1xuICAgICAgICAgICAgbGV0IHJvdyA9IGNvb3JkaW5hdGVbMF07XG4gICAgICAgICAgICBsZXQgY29sID0gY29vcmRpbmF0ZVsxXTtcbiAgICAgICAgICAgIGlmIChyb3cgPCAyMCAmJiByb3cgPj0gMCAmJiBjb2wgPj0gMCAmJiBjb2wgPCAxMCkgZmllbGRbcm93XVtjb2xdID0gMDtcbiAgICAgICAgfSkpO1xuICAgICAgICBkZWJ1Z2dlclxuICAgIH1cblxuICAgIG1vdmUoZGlyZWN0aW9uLCBmaWVsZCkge1xuICAgICAgICBsZXQgb2xkUG9zaXRpb24gPSB7XG4gICAgICAgICAgICB0b3A6IHRoaXMucG9zaXRpb24udG9wLm1hcChhcnJheSA9PiBhcnJheS5zbGljZSgpKSxcbiAgICAgICAgICAgIG1pZGRsZTogdGhpcy5wb3NpdGlvbi5taWRkbGUubWFwKGFycmF5ID0+IGFycmF5LnNsaWNlKCkpLFxuICAgICAgICAgICAgYm90dG9tOiB0aGlzLnBvc2l0aW9uLmJvdHRvbS5tYXAoYXJyYXkgPT4gYXJyYXkuc2xpY2UoKSksXG4gICAgICAgIH1cbiAgICAgICAgc3dpdGNoIChkaXJlY3Rpb24pIHtcbiAgICAgICAgICAgIGNhc2UgXCJsZWZ0XCI6XG4gICAgICAgICAgICAgICAgdGhpcy5wb3NpdGlvbi50b3AgPSB0aGlzLnBvc2l0aW9uLnRvcC5tYXAoYXJyYXkgPT4gW2FycmF5WzBdLCBhcnJheVsxXSAtIDFdKTtcbiAgICAgICAgICAgICAgICB0aGlzLnBvc2l0aW9uLm1pZGRsZSA9IHRoaXMucG9zaXRpb24ubWlkZGxlLm1hcChhcnJheSA9PiBbYXJyYXlbMF0sIGFycmF5WzFdIC0gMV0pO1xuICAgICAgICAgICAgICAgIHRoaXMucG9zaXRpb24uYm90dG9tID0gdGhpcy5wb3NpdGlvbi5ib3R0b20ubWFwKGFycmF5ID0+IFthcnJheVswXSwgYXJyYXlbMV0gLSAxXSk7XG4gICAgICAgICAgICAgICAgdGhpcy50dXJuaW5nUG9pbnQgPSBbdGhpcy50dXJuaW5nUG9pbnRbMF0sIHRoaXMudHVybmluZ1BvaW50WzFdIC0gMV07XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIFwidHVyblJpZ2h0XCI6XG4gICAgICAgICAgICAgICAgLy8gZGVmZXIgdG8gc3ViY2xhc3MgXCJ0dXJuXCIgbWV0aG9kXG4gICAgICAgICAgICAgICAgdGhpcy50dXJuUmlnaHQoZmllbGQsIG9sZFBvc2l0aW9uKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgXCJyaWdodFwiOlxuICAgICAgICAgICAgICAgIHRoaXMucG9zaXRpb24udG9wID0gdGhpcy5wb3NpdGlvbi50b3AubWFwKGFycmF5ID0+IFthcnJheVswXSwgYXJyYXlbMV0gKyAxXSk7XG4gICAgICAgICAgICAgICAgdGhpcy5wb3NpdGlvbi5taWRkbGUgPSB0aGlzLnBvc2l0aW9uLm1pZGRsZS5tYXAoYXJyYXkgPT4gW2FycmF5WzBdLCBhcnJheVsxXSArIDFdKTtcbiAgICAgICAgICAgICAgICB0aGlzLnBvc2l0aW9uLmJvdHRvbSA9IHRoaXMucG9zaXRpb24uYm90dG9tLm1hcChhcnJheSA9PiBbYXJyYXlbMF0sIGFycmF5WzFdICsgMV0pO1xuICAgICAgICAgICAgICAgIHRoaXMudHVybmluZ1BvaW50ID0gW3RoaXMudHVybmluZ1BvaW50WzBdLCB0aGlzLnR1cm5pbmdQb2ludFsxXSArIDFdO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBcImRvd25cIjpcbiAgICAgICAgICAgICAgICB0aGlzLnBvc2l0aW9uLnRvcCA9IHRoaXMucG9zaXRpb24udG9wLm1hcChhcnJheSA9PiBbYXJyYXlbMF0gKyAxLCBhcnJheVsxXV0pO1xuICAgICAgICAgICAgICAgIHRoaXMucG9zaXRpb24ubWlkZGxlID0gdGhpcy5wb3NpdGlvbi5taWRkbGUubWFwKGFycmF5ID0+IFthcnJheVswXSArIDEsIGFycmF5WzFdXSk7XG4gICAgICAgICAgICAgICAgdGhpcy5wb3NpdGlvbi5ib3R0b20gPSB0aGlzLnBvc2l0aW9uLmJvdHRvbS5tYXAoYXJyYXkgPT4gW2FycmF5WzBdICsgMSwgYXJyYXlbMV1dKTtcbiAgICAgICAgICAgICAgICB0aGlzLnR1cm5pbmdQb2ludCA9IFt0aGlzLnR1cm5pbmdQb2ludFswXSArIDEsIHRoaXMudHVybmluZ1BvaW50WzFdXTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgXCJ1cFwiOlxuICAgICAgICAgICAgICAgIHRoaXMucG9zaXRpb24udG9wID0gdGhpcy5wb3NpdGlvbi50b3AubWFwKGFycmF5ID0+IFthcnJheVswXSAtIDEsIGFycmF5WzFdXSk7XG4gICAgICAgICAgICAgICAgdGhpcy5wb3NpdGlvbi5taWRkbGUgPSB0aGlzLnBvc2l0aW9uLm1pZGRsZS5tYXAoYXJyYXkgPT4gW2FycmF5WzBdIC0gMSwgYXJyYXlbMV1dKTtcbiAgICAgICAgICAgICAgICB0aGlzLnBvc2l0aW9uLmJvdHRvbSA9IHRoaXMucG9zaXRpb24uYm90dG9tLm1hcChhcnJheSA9PiBbYXJyYXlbMF0gLSAxLCBhcnJheVsxXV0pO1xuICAgICAgICAgICAgICAgIHRoaXMudHVybmluZ1BvaW50ID0gW3RoaXMudHVybmluZ1BvaW50WzBdIC0gMSwgdGhpcy50dXJuaW5nUG9pbnRbMV1dO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBcInR1cm5MZWZ0XCI6XG4gICAgICAgICAgICAgICAgdGhpcy50dXJuTGVmdChmaWVsZCwgb2xkUG9zaXRpb24pO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuc2V0T3V0ZXJTcXVhcmVzKCk7XG4gICAgICAgIHRoaXMuc2V0UmVtb3ZlU3F1YXJlcyhvbGRQb3NpdGlvbik7XG4gICAgfVxuXG4gICAgdHVyblJpZ2h0KGZpZWxkLCBvbGRQb3NpdGlvbikge1xuICAgICAgICAvLyBjbGVhciBmcm9tIGZpZWxkIGZpcnN0IHNvIHRoYXQgdGhlIHBpZWNlIGRvZXNuJ3Qgc2VlIGl0c2VsZiBhcyBhIGNvbmZsaWN0aW5nIHBpZWNlXG4gICAgICAgIHRoaXMuY2xlYXJTZWxmRnJvbUJvYXJkKGZpZWxkKTtcbiAgICAgICAgbGV0IHNxdWFyZXMgPSBbXTtcbiAgICAgICAgT2JqZWN0LnZhbHVlcyh0aGlzLnBvc2l0aW9uKS5mb3JFYWNoKGNvb3JkaW5hdGVzQXJyYXkgPT4gc3F1YXJlcy5wdXNoKC4uLmNvb3JkaW5hdGVzQXJyYXkpKTtcbiAgICAgICAgdGhpcy5wb3NpdGlvbi50b3AgPSBbXTtcbiAgICAgICAgdGhpcy5wb3NpdGlvbi5taWRkbGUgPSBbXTtcbiAgICAgICAgdGhpcy5wb3NpdGlvbi5ib3R0b20gPSBbXTtcbiAgICAgICAgc3F1YXJlcy5mb3JFYWNoKHNxdWFyZSA9PiB7XG4gICAgICAgICAgICBsZXQgY29sdW1uID0gc3F1YXJlWzFdO1xuICAgICAgICAgICAgbGV0IGhlaWdodERpZmZlcmVuY2UgPSB0aGlzLnR1cm5pbmdQb2ludFswXSAtIHNxdWFyZVswXTtcbiAgICAgICAgICAgIGxldCB3aWR0aERpZmZlcmVuY2UgPSB0aGlzLnR1cm5pbmdQb2ludFsxXSAtIHNxdWFyZVsxXTtcbiAgICAgICAgICAgIGxldCBuZXdDb2wgPSB0aGlzLnR1cm5pbmdQb2ludFsxXSArIGhlaWdodERpZmZlcmVuY2U7XG4gICAgICAgICAgICBsZXQgbmV3Um93ID0gdGhpcy50dXJuaW5nUG9pbnRbMF0gKyAod2lkdGhEaWZmZXJlbmNlICogLTEpO1xuICAgICAgICAgICAgc3dpdGNoIChjb2x1bW4pIHtcbiAgICAgICAgICAgICAgICBjYXNlIGNvbHVtbiA9IHRoaXMucmlnaHRNb3N0WzFdOlxuICAgICAgICAgICAgICAgICAgICB0aGlzLnBvc2l0aW9uLmJvdHRvbS5wdXNoKFtuZXdSb3csIG5ld0NvbF0pO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlIGNvbHVtbiA9IHRoaXMubGVmdE1vc3RbMV06XG4gICAgICAgICAgICAgICAgICAgIHRoaXMucG9zaXRpb24udG9wLnB1c2goW25ld1JvdywgbmV3Q29sXSk7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgICAgIHRoaXMucG9zaXRpb24ubWlkZGxlLnB1c2goW25ld1JvdywgbmV3Q29sXSk7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5zZXRSZW1vdmVTcXVhcmVzKG9sZFBvc2l0aW9uKTtcbiAgICAgICAgLy8gY2F1c2luZyBpc3N1ZXMgd2l0aCB0dXJuaW5nIGludG8gdGhlIGZpZWxkPz8/OlxuICAgICAgICAvLyB0aGlzLnBvcHVsYXRlRmllbGQoZmllbGQpO1xuXG4gICAgICAgIC8vIGZpbmQgb3V0ZXItbW9zdCBzcXVhcmVzIHRvIHNlZSBpZiBwaWVjZSBpcyBvYnN0cnVjdGVkXG4gICAgICAgIC8vIGlmIHNvLCBwdXNoIHBpZWNlIGJhY2sgaW50byBmaWVsZFxuICAgICAgICB0aGlzLnNldE91dGVyU3F1YXJlcygpO1xuXG4gICAgICAgIC8vIGluIHRoZSBjYXNlIHRoYXQgcGllY2UgaXMgdHVybmVkIHRocm91Z2ggZmxvb3JcbiAgICAgICAgd2hpbGUgKCh0aGlzLmJvdHRvbU1vc3RbMF0gPiAxOSB8fCBmaWVsZFt0aGlzLmJvdHRvbU1vc3RbMF1dW3RoaXMuYm90dG9tTW9zdFsxXV0pKSB7XG4gICAgICAgICAgICB0aGlzLm1vdmUoJ3VwJyk7XG4gICAgICAgICAgICB0aGlzLnNldE91dGVyU3F1YXJlcygpO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gaW4gdGhlIGNhc2UgdGhhdCB0aGUgSVBpZWNlIGlzIHR1cm5lZCB0aHJvdWdoIHRoZSBmaWVsZCBjZWlsaW5nXG4gICAgICAgIHdoaWxlICh0aGlzLnRvcE1vc3RbMF0gPCAwIHx8IGZpZWxkW3RoaXMudG9wTW9zdFswXV1bdGhpcy50b3BNb3N0WzFdXSkge1xuICAgICAgICAgICAgdGhpcy5tb3ZlKCdkb3duJyk7XG4gICAgICAgICAgICB0aGlzLnNldE91dGVyU3F1YXJlcygpO1xuICAgICAgICB9XG5cbiAgICAgICAgd2hpbGUgKHRoaXMucmlnaHRNb3N0WzFdID4gOSB8fCBmaWVsZFt0aGlzLnJpZ2h0TW9zdFswXV1bdGhpcy5yaWdodE1vc3RbMV1dKSB7XG4gICAgICAgICAgICAvLyB0aGlzLnJpZ2h0TW9zdCA+IDkgPyB0aGlzLm1vdmUoJ2xlZnQnKSA6IHRoaXMubW92ZSgncmlnaHQnKTtcbiAgICAgICAgICAgIHRoaXMubW92ZSgnbGVmdCcpO1xuICAgICAgICAgICAgdGhpcy5zZXRPdXRlclNxdWFyZXMoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHdoaWxlICh0aGlzLmxlZnRNb3N0WzFdIDwgMCB8fCBmaWVsZFt0aGlzLmxlZnRNb3N0WzBdXVt0aGlzLmxlZnRNb3N0WzFdXSkge1xuICAgICAgICAgICAgLy8gdGhpcy5yaWdodE1vc3QgPiA5ID8gdGhpcy5tb3ZlKCdsZWZ0JykgOiB0aGlzLm1vdmUoJ3JpZ2h0Jyk7XG4gICAgICAgICAgICBpZiAoZmllbGRbdGhpcy5yaWdodE1vc3RbMF1dW3RoaXMucmlnaHRNb3N0WzFdICsgMV0pIHtcbiAgICAgICAgICAgICAgICB0aGlzLm1vdmUoJ3VwJyk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMubW92ZSgncmlnaHQnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMuc2V0T3V0ZXJTcXVhcmVzKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICB0dXJuTGVmdChmaWVsZCwgb2xkUG9zaXRpb24pIHtcbiAgICAgICAgdGhpcy5jbGVhclNlbGZGcm9tQm9hcmQoZmllbGQpO1xuICAgICAgICBsZXQgc3F1YXJlcyA9IFtdO1xuICAgICAgICBPYmplY3QudmFsdWVzKHRoaXMucG9zaXRpb24pLmZvckVhY2goY29vcmRpbmF0ZXNBcnJheSA9PiBzcXVhcmVzLnB1c2goLi4uY29vcmRpbmF0ZXNBcnJheSkpO1xuICAgICAgICB0aGlzLnBvc2l0aW9uLnRvcCA9IFtdO1xuICAgICAgICB0aGlzLnBvc2l0aW9uLm1pZGRsZSA9IFtdO1xuICAgICAgICB0aGlzLnBvc2l0aW9uLmJvdHRvbSA9IFtdO1xuICAgICAgICBzcXVhcmVzLmZvckVhY2goc3F1YXJlID0+IHtcbiAgICAgICAgICAgIGxldCBjb2x1bW4gPSBzcXVhcmVbMV07XG4gICAgICAgICAgICBsZXQgaGVpZ2h0RGlmZmVyZW5jZSA9IHRoaXMudHVybmluZ1BvaW50WzBdIC0gc3F1YXJlWzBdO1xuICAgICAgICAgICAgbGV0IHdpZHRoRGlmZmVyZW5jZSA9IHRoaXMudHVybmluZ1BvaW50WzFdIC0gc3F1YXJlWzFdO1xuICAgICAgICAgICAgbGV0IG5ld0NvbCA9IHRoaXMudHVybmluZ1BvaW50WzFdIC0gaGVpZ2h0RGlmZmVyZW5jZTtcbiAgICAgICAgICAgIGxldCBuZXdSb3cgPSB0aGlzLnR1cm5pbmdQb2ludFswXSAtICh3aWR0aERpZmZlcmVuY2UgKiAtMSk7XG4gICAgICAgICAgICBzd2l0Y2ggKGNvbHVtbikge1xuICAgICAgICAgICAgICAgIGNhc2UgY29sdW1uID0gdGhpcy5yaWdodE1vc3RbMV06XG4gICAgICAgICAgICAgICAgICAgIHRoaXMucG9zaXRpb24udG9wLnB1c2goW25ld1JvdywgbmV3Q29sXSk7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgY29sdW1uID0gdGhpcy5sZWZ0TW9zdFsxXTpcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wb3NpdGlvbi5ib3R0b20ucHVzaChbbmV3Um93LCBuZXdDb2xdKTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wb3NpdGlvbi5taWRkbGUucHVzaChbbmV3Um93LCBuZXdDb2xdKTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgICAgIHRoaXMuc2V0UmVtb3ZlU3F1YXJlcyhvbGRQb3NpdGlvbik7XG5cbiAgICAgICAgLy8gZmluZCBsZWZ0IGFuZCByaWdodCBtb3N0IHNxdWFyZXMgdG8gc2VlIGlmIHBpZWNlIHRocm91Z2ggd2FsbFxuICAgICAgICAvLyBpZiB0aHJvdWdoIHdhbGwsIHB1c2ggcGllY2UgYmFjayBpbnRvIGZpZWxkXG4gICAgICAgIHRoaXMuc2V0T3V0ZXJTcXVhcmVzKCk7XG5cbiAgICAgICAgLy8gaW4gdGhlIGNhc2UgdGhhdCBwaWVjZSBpcyB0dXJuZWQgdGhyb3VnaCBmbG9vclxuICAgICAgICB3aGlsZSAoKHRoaXMuYm90dG9tTW9zdFswXSA+IDE5IHx8IGZpZWxkW3RoaXMuYm90dG9tTW9zdFswXV1bdGhpcy5ib3R0b21Nb3N0WzFdXSkpIHtcbiAgICAgICAgICAgIHRoaXMubW92ZSgndXAnKTtcbiAgICAgICAgICAgIHRoaXMuc2V0T3V0ZXJTcXVhcmVzKCk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBpbiB0aGUgY2FzZSB0aGF0IHRoZSBJUGllY2UgaXMgdHVybmVkIHRocm91Z2ggdGhlIGZpZWxkIGNlaWxpbmdcbiAgICAgICAgd2hpbGUgKHRoaXMudG9wTW9zdFswXSA8IDAgfHwgZmllbGRbdGhpcy50b3BNb3N0WzBdXVt0aGlzLnRvcE1vc3RbMV1dKSB7XG4gICAgICAgICAgICB0aGlzLm1vdmUoJ2Rvd24nKTtcbiAgICAgICAgICAgIHRoaXMuc2V0T3V0ZXJTcXVhcmVzKCk7XG4gICAgICAgIH1cblxuICAgICAgICB3aGlsZSAodGhpcy5yaWdodE1vc3RbMV0gPiA5IHx8IGZpZWxkW3RoaXMucmlnaHRNb3N0WzBdXVt0aGlzLnJpZ2h0TW9zdFsxXV0pIHtcbiAgICAgICAgICAgIC8vIHRoaXMucmlnaHRNb3N0ID4gOSA/IHRoaXMubW92ZSgnbGVmdCcpIDogdGhpcy5tb3ZlKCdyaWdodCcpO1xuICAgICAgICAgICAgdGhpcy5tb3ZlKCdsZWZ0Jyk7XG4gICAgICAgICAgICB0aGlzLnNldE91dGVyU3F1YXJlcygpO1xuICAgICAgICB9XG5cbiAgICAgICAgd2hpbGUgKHRoaXMubGVmdE1vc3RbMV0gPCAwIHx8IGZpZWxkW3RoaXMubGVmdE1vc3RbMF1dW3RoaXMubGVmdE1vc3RbMV1dKSB7XG4gICAgICAgICAgICAvLyB0aGlzLnJpZ2h0TW9zdCA+IDkgPyB0aGlzLm1vdmUoJ2xlZnQnKSA6IHRoaXMubW92ZSgncmlnaHQnKTtcbiAgICAgICAgICAgIGlmIChmaWVsZFt0aGlzLnJpZ2h0TW9zdFswXV1bdGhpcy5yaWdodE1vc3RbMV0gKyAxXSkge1xuICAgICAgICAgICAgICAgIHRoaXMubW92ZSgndXAnKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy5tb3ZlKCdyaWdodCcpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5zZXRPdXRlclNxdWFyZXMoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8vIGNvbXBhcmUgb2xkIHBvc2l0aW9uIG9mIHBpZWNlIHdpdGggbmV3IHBvc2l0aW9uIFxuICAgIHNldFJlbW92ZVNxdWFyZXMob2xkUG9zaXRpb24pIHtcbiAgICAgICAgbGV0IG9sZFNxdWFyZXMgPSBbXTtcbiAgICAgICAgbGV0IG5ld1NxdWFyZXMgPSBbXTtcbiAgICAgICAgT2JqZWN0LnZhbHVlcyhvbGRQb3NpdGlvbikuZm9yRWFjaChjb29yZGluYXRlc0FycmF5ID0+IG9sZFNxdWFyZXMucHVzaCguLi5jb29yZGluYXRlc0FycmF5KSk7XG4gICAgICAgIE9iamVjdC52YWx1ZXModGhpcy5wb3NpdGlvbikuZm9yRWFjaChjb29yZGluYXRlc0FycmF5ID0+IG5ld1NxdWFyZXMucHVzaCguLi5jb29yZGluYXRlc0FycmF5KSk7XG4gICAgICAgIC8vIGtlZXAgdHJhY2sgb2Ygc3F1YXJlcyB0aGF0IHRoZSBwb3NpdGlvbnMgZG8gbm90IGhhdmUgaW4gY29tbW9uIChzcXVhcmVzIHRvIHJlbW92ZSBjb2xvciBmcm9tKVxuICAgICAgICB0aGlzLnJlbW92ZVNxdWFyZXMgPSBvbGRTcXVhcmVzLmZpbHRlcihvbGRTcXVhcmUgPT4ge1xuICAgICAgICAgICAgaWYgKCF0aGlzLl9pbmNsdWRlcyhvbGRTcXVhcmUsIG5ld1NxdWFyZXMpKSByZXR1cm4gb2xkU3F1YXJlO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBoYW5naW5nU3F1YXJlcyhwb3NpdGlvbikge1xuICAgICAgICBsZXQgc3F1YXJlcyA9IFtdO1xuICAgICAgICBsZXQgaGFuZ2luZ1NxdWFyZXMgPSBbXTtcbiAgICAgICAgT2JqZWN0LnZhbHVlcyhwb3NpdGlvbikuZm9yRWFjaChjb29yZGluYXRlQXJyYXkgPT4gc3F1YXJlcy5wdXNoKC4uLmNvb3JkaW5hdGVBcnJheSkpXG4gICAgICAgIHNxdWFyZXMuZm9yRWFjaChzcXVhcmUgPT4ge1xuICAgICAgICAgICAgbGV0IGJlbG93U3F1YXJlID0gW3NxdWFyZVswXSArIDEsIHNxdWFyZVsxXV07XG4gICAgICAgICAgICBpZiAoIXRoaXMuX2luY2x1ZGVzKGJlbG93U3F1YXJlLCBzcXVhcmVzKSkgaGFuZ2luZ1NxdWFyZXMucHVzaChzcXVhcmUpO1xuICAgICAgICB9KVxuICAgICAgICByZXR1cm4gaGFuZ2luZ1NxdWFyZXM7XG4gICAgfVxuXG4gICAgc2lkZVNxdWFyZXMoKSB7XG4gICAgICAgIGxldCBzcXVhcmVzID0gW107XG4gICAgICAgIGxldCBzaWRlU3F1YXJlcyA9IHtcbiAgICAgICAgICAgIGxlZnQ6IFtdLFxuICAgICAgICAgICAgcmlnaHQ6IFtdXG4gICAgICAgIH07XG4gICAgICAgIE9iamVjdC52YWx1ZXModGhpcy5wb3NpdGlvbikuZm9yRWFjaChjb29yZGluYXRlQXJyYXkgPT4gc3F1YXJlcy5wdXNoKC4uLmNvb3JkaW5hdGVBcnJheSkpO1xuICAgICAgICBzcXVhcmVzLmZvckVhY2goc3F1YXJlID0+IHtcbiAgICAgICAgICAgIGxldCBhZGphY2VudExlZnQgPSBbc3F1YXJlWzBdLCBzcXVhcmVbMV0gLSAxXTtcbiAgICAgICAgICAgIGxldCBhZGphY2VudFJpZ2h0ID0gW3NxdWFyZVswXSwgc3F1YXJlWzFdICsgMV07XG4gICAgICAgICAgICBpZiAoIXRoaXMuX2luY2x1ZGVzKGFkamFjZW50TGVmdCwgc3F1YXJlcykpIHNpZGVTcXVhcmVzLmxlZnQucHVzaChzcXVhcmUpO1xuICAgICAgICAgICAgaWYgKCF0aGlzLl9pbmNsdWRlcyhhZGphY2VudFJpZ2h0LCBzcXVhcmVzKSkgc2lkZVNxdWFyZXMucmlnaHQucHVzaChzcXVhcmUpO1xuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIHNpZGVTcXVhcmVzO1xuICAgIH1cblxuICAgIGlzRmFsbGluZyhmaWVsZCkge1xuICAgICAgICBsZXQgcmVzdWx0ID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5oYW5naW5nU3F1YXJlcyh0aGlzLnBvc2l0aW9uKS5mb3JFYWNoKGNvb3JkaW5hdGVQYWlyID0+IHtcbiAgICAgICAgICAgIGxldCBbcm93LCBjb2xdID0gW2Nvb3JkaW5hdGVQYWlyWzBdLCBjb29yZGluYXRlUGFpclsxXV07XG4gICAgICAgICAgICAvLyBpZiB0aGUgcGllY2UncyBjdXJyZW50IHBvc2l0aW9uIGlzIGFib3ZlIHRoZSBmaWVsZCBmbG9vciBvciBhIGFub3RoZXIgcGllY2UgKG5vdCBpbmNsdWRlIGdob3N0IHBpZWNlKVxuICAgICAgICAgICAgaWYgKCFmaWVsZFtyb3cgKyAxXSB8fCAoZmllbGRbcm93ICsgMV1bY29sXSAmJiBmaWVsZFtyb3cgKyAxXVtjb2xdICE9PSBcInhcIikpIHtcbiAgICAgICAgICAgICAgICByZXN1bHQgPSBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxuXG4gICAgcmlnaHRTaWRlQmxvY2tlZChmaWVsZCkge1xuICAgICAgICAvLyBpZiAodGhpcy5wb3NpdGlvbi50b3BbMF1bMF0gPCAwKSByZXR1cm4gZmFsc2U7XG4gICAgICAgIGxldCByZXN1bHQgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5zaWRlU3F1YXJlcygpLnJpZ2h0LmZvckVhY2goY29vcmRpbmF0ZVBhaXIgPT4ge1xuICAgICAgICAgICAgbGV0IFtyb3csIGNvbF0gPSBbY29vcmRpbmF0ZVBhaXJbMF0sIGNvb3JkaW5hdGVQYWlyWzFdXTtcbiAgICAgICAgICAgIC8vIGlmIGFueSByaWdodCBmYWNpbmcgc3F1YXJlIGhpdHMgdGhlIHdhbGwgb3IgYW5vdGhlciBwaWVjZVxuICAgICAgICAgICAgaWYgKGNvbCA9PT0gOSB8fCAoZmllbGRbcm93XSAmJiBmaWVsZFtyb3ddW2NvbCArIDFdICE9PSBcInhcIikpIHtcbiAgICAgICAgICAgICAgICByZXN1bHQgPSB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG5cbiAgICBsZWZ0U2lkZUJsb2NrZWQoZmllbGQpIHtcbiAgICAgICAgLy8gaWYgKHRoaXMucG9zaXRpb24udG9wWzBdWzBdIDwgMCkgcmV0dXJuIGZhbHNlO1xuICAgICAgICBsZXQgcmVzdWx0ID0gZmFsc2U7XG4gICAgICAgIHRoaXMuc2lkZVNxdWFyZXMoKS5sZWZ0LmZvckVhY2goY29vcmRpbmF0ZVBhaXIgPT4ge1xuICAgICAgICAgICAgbGV0IFtyb3csIGNvbF0gPSBbY29vcmRpbmF0ZVBhaXJbMF0sIGNvb3JkaW5hdGVQYWlyWzFdXTtcbiAgICAgICAgICAgIC8vIGlmIGFueSBsZWZ0IGZhY2luZyBzcXVhcmUgaGl0cyB0aGUgd2FsbCBvciBhbm90aGVyIHBpZWNlXG4gICAgICAgICAgICBpZiAoY29sID09PSAwIHx8IChmaWVsZFtyb3ddICYmIGZpZWxkW3Jvd11bY29sIC0gMV0gIT09IFwieFwiKSkge1xuICAgICAgICAgICAgICAgIHJlc3VsdCA9IHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cbn0iLCJpbXBvcnQgUGllY2UgZnJvbSAnLi9waWVjZSc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNQaWVjZSBleHRlbmRzIFBpZWNlIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgdGhpcy5uYW1lID0gXCJTUGllY2VcIjtcbiAgICAgICAgdGhpcy5wb3NpdGlvbiA9IHtcbiAgICAgICAgICAgIHRvcDogW1swLCA0XSwgWzAsIDVdXSxcbiAgICAgICAgICAgIG1pZGRsZTogW10sXG4gICAgICAgICAgICBib3R0b206IFtbMSwgM10sIFsxLCA0XV1cbiAgICAgICAgfTtcbiAgICAgICAgdGhpcy5jb2xvckNvZGUgPSA0O1xuXG4gICAgICAgIHRoaXMudHVybmluZ1BvaW50ID0gWzEsIDRdO1xuXG4gICAgICAgIHRoaXMuZGlzcGxheVNxdWFyZXMgPSBbWzMsIDFdLCBbMiwgMV0sIFsyLCAyXSwgWzEsIDJdXTtcblxuICAgICAgICB0aGlzLnJlbW92ZVNxdWFyZXMgPSBbXTtcbiAgICB9XG59IiwiaW1wb3J0IFBpZWNlIGZyb20gJy4vcGllY2UnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUUGllY2UgZXh0ZW5kcyBQaWVjZSB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIHRoaXMubmFtZSA9IFwiVFBpZWNlXCI7XG4gICAgICAgIHRoaXMucG9zaXRpb24gPSB7XG4gICAgICAgICAgICB0b3A6IFtbMCwgNF1dLFxuICAgICAgICAgICAgbWlkZGxlOiBbXSxcbiAgICAgICAgICAgIGJvdHRvbTogW1sxLCAzXSwgWzEsIDRdLCBbMSwgNV1dLFxuICAgICAgICB9XG4gICAgICAgIHRoaXMuY29sb3JDb2RlID0gMztcblxuICAgICAgICB0aGlzLnR1cm5pbmdQb2ludCA9IFsxLCA0XTtcblxuICAgICAgICB0aGlzLmRpc3BsYXlTcXVhcmVzID0gW1sxLCAyXSwgWzIsIDJdLCBbMywgMl0sIFsyLCAxXV07XG5cbiAgICAgICAgdGhpcy5yZW1vdmVTcXVhcmVzID0gW107XG4gICAgfVxufSIsImltcG9ydCBQaWVjZSBmcm9tICcuL3BpZWNlJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgWlBpZWNlIGV4dGVuZHMgUGllY2Uge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICB0aGlzLm5hbWUgPSBcIlpQaWVjZVwiO1xuICAgICAgICB0aGlzLnBvc2l0aW9uID0ge1xuICAgICAgICAgICAgdG9wOiBbWzAsIDNdLCBbMCwgNF1dLFxuICAgICAgICAgICAgbWlkZGxlOiBbXSxcbiAgICAgICAgICAgIGJvdHRvbTogW1sxLCA0XSwgWzEsIDVdXVxuICAgICAgICB9O1xuICAgICAgICB0aGlzLmNvbG9yQ29kZSA9IDU7XG5cbiAgICAgICAgdGhpcy50dXJuaW5nUG9pbnQgPSBbMSwgNF07XG5cbiAgICAgICAgdGhpcy5kaXNwbGF5U3F1YXJlcyA9IFtbMSwgMV0sIFsyLCAxXSwgWzIsIDJdLCBbMywgMl1dO1xuXG4gICAgICAgIHRoaXMucmVtb3ZlU3F1YXJlcyA9IFtdO1xuICAgIH1cbn0iXSwic291cmNlUm9vdCI6IiJ9