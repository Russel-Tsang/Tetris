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
    } //_isValidMove

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
              col = _ref[1];
          _this.field[row][col] = 0;
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
          if (row + 1 === 20 || _this3.field[row + 1][col]) stopped = true;
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
          _this4.field[row][col] = "x";
        });
      });
      this.render();
    } // populates this.field with the appropriate current piece colorCode, while setting previous piece positions to 0

  }, {
    key: "populateField",
    value: function populateField(piece) {
      var _this5 = this;

      var coordinateArrays = Object.values(piece.position);
      coordinateArrays.forEach(function (array) {
        array.forEach(function (coordinate) {
          var _ref5 = [coordinate[0], coordinate[1]],
              row = _ref5[0],
              col = _ref5[1];
          _this5.field[row][col] = piece.colorCode;
        });
      });
      piece.removeSquares.forEach(function (positionArray) {
        var _ref6 = [positionArray[0], positionArray[1]],
            row = _ref6[0],
            col = _ref6[1];
        _this5.field[row][col] = 0;
      });
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
        var _ref7 = [this.holdPiece, this.currentPiece];
        this.currentPiece = _ref7[0];
        this.holdPiece = _ref7[1];
      }

      this.canHold = false;

      this._populateHoldBox();
    }
  }, {
    key: "_populateHoldBox",
    value: function _populateHoldBox() {
      var _this6 = this;

      var columns = document.querySelector(".hold-box.field-".concat(this.gameNum)).children; // remove colors from previous pieces

      for (var i = 0; i < 5; i++) {
        for (var j = 0; j < 4; j++) {
          // columns.children is nodelist of <lis>
          columns[i].children[j].className = "";
        }
      }

      this.holdPiece.displaySquares.forEach(function (square) {
        var _ref8 = [square[0], square[1]],
            col = _ref8[0],
            row = _ref8[1];
        columns[col].children[row].classList.add(_this6.colors[_this6.holdPiece.colorCode]);
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
      var _this7 = this;

      // columns is nodelist of <uls>
      var columns = box.children; // remove colors from previous pieces

      for (var i = 0; i < 5; i++) {
        for (var j = 0; j < 4; j++) {
          // columns.children is nodelist of <lis>
          columns[i].children[j].className = "";
        }
      }

      piece.displaySquares.forEach(function (square) {
        var _ref9 = [square[0], square[1]],
            col = _ref9[0],
            row = _ref9[1];
        columns[col].children[row].classList.add(_this7.colors[piece.colorCode]);
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

  }, {
    key: "_gameOver",
    value: function _gameOver() {
      return false;
    } // look through field, if field[row][col] contains a number > 0, fill that spot with the respective color. Else, remove color

  }, {
    key: "render",
    value: function render() {
      var _this8 = this;

      var fieldColumns = document.querySelectorAll(".field-column.field-".concat(this.gameNum));
      this.field.forEach(function (row, rowIdx) {
        row.forEach(function (col, colIdx) {
          var squareValue = _this8.field[rowIdx][colIdx];

          if (squareValue === 'x') {
            fieldColumns[colIdx].children[rowIdx].classList.add("x-".concat(_this8.colors[_this8.currentPiece.colorCode]));
          } else if (squareValue) {
            fieldColumns[colIdx].children[rowIdx].classList.add(_this8.colors[squareValue]);
          } else {
            Object.values(_this8.colors).forEach(function (color) {
              fieldColumns[colIdx].children[rowIdx].classList.remove(color);
              fieldColumns[colIdx].children[rowIdx].classList.remove("x-".concat(color));
            });
          }
        });
      });
    }
  }, {
    key: "keyListener",
    value: function keyListener() {
      var _this9 = this;

      document.body.addEventListener("keydown", function (event) {
        _this9.currentPiece.setLeftMostAndRightMost(); // this.clearGhostPosition();


        switch (event.which) {
          // up key
          case _this9.controls.turnRight:
            // pass field so piece can check field wall before turning
            _this9.clearGhostPosition();

            _this9.currentPiece.move("up", _this9.field);

            _this9.populateField(_this9.currentPiece);

            _this9.setGhostPosition();

            break;
          // C key

          case _this9.controls.turnLeft:
            // pass field so piece can check field wall before turning
            _this9.clearGhostPosition();

            _this9.currentPiece.move("C", _this9.field);

            _this9.populateField(_this9.currentPiece);

            _this9.setGhostPosition();

            break;
          // left key

          case _this9.controls.left:
            _this9.keyHeld.left = true;

            if (_this9.currentPiece.leftSideBlocked(_this9.field)) {
              _this9.clearGhostPosition();

              _this9.setGhostPosition();

              break;
            }

            _this9.movePiece(_this9.moveSpeed, "left");

            break;
          // right key

          case _this9.controls.right:
            _this9.keyHeld.right = true;

            if (_this9.currentPiece.rightSideBlocked(_this9.field)) {
              _this9.clearGhostPosition();

              _this9.setGhostPosition();

              break;
            }

            _this9.movePiece(_this9.moveSpeed, "right");

            break;
          // down key

          case _this9.controls.softDrop:
            // if (!this.currentPiece.isFalling(this.field)) break;
            _this9.keyHeld.down = true;

            _this9.movePiece(_this9.moveSpeed, "down");

            break;
          // shift key

          case _this9.controls.hold:
            _this9.clearGhostPosition();

            _this9.hold();

            _this9.populateField(_this9.currentPiece);

            _this9.setGhostPosition();

            break;
          // space bar

          case _this9.controls.hardDrop:
            // this.render();
            _this9.clearGhostPosition();

            _this9.currentPiece.hardDrop(_this9.field);

            _this9.render();

            _this9.populateField(_this9.currentPiece);

            _this9.handlePieceStop(_this9.handleClear.drop);

            break;
          // P key

          case 80:
            // this.render();
            _this9.isPaused ? _this9.dropPiece(_this9.dropSpeed) : cancelAnimationFrame(_this9.handleClear.drop);
            _this9.isPaused = !_this9.isPaused;

            _this9.clearGhostPosition();

            _this9.setGhostPosition();

            break;

          default:
            // this.setGhostPosition();
            break;
        }

        _this9.currentPiece.setLeftMostAndRightMost(); // messes up with piece color
        // this.populateField(this.currentPiece);


        _this9.render();
      });
      document.body.addEventListener("keyup", function (event) {
        switch (event.which) {
          case _this9.controls.right:
            _this9.keyHeld.right = false;
            break;

          case _this9.controls.left:
            _this9.keyHeld.left = false;
            break;

          case _this9.controls.softDrop:
            _this9.keyHeld.down = false;
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
      debugger; // allow player to hold piece again

      this.canHold = true;
      var lowest = this.currentPiece.position.bottom[0][0]; // in case of line piece, which may not have this.position.top

      var highest = !this.currentPiece.position.top.length ? lowest : this.currentPiece.position.top[0][0];
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
        this.populateField(this.currentPiece);
        this.render();

        if (!this.currentPiece.isFalling(this.field)) {
          this.handlePieceStop(this.handleClear.drop);
        }

        this.currentPiece.drop();
        this.populateField(this.currentPiece); // keep only one populate field?

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

        if (direction === "right" && this.currentPiece.rightSideBlocked(this.field) || direction === "left" && this.currentPiece.leftSideBlocked(this.field) || direction === "down" && !this.currentPiece.isFalling(this.field) || this.keyHeld.right && this.keyHeld.left) {
          this.clearGhostPosition();
          this.setGhostPosition();
          return;
        }

        this.currentPiece.move(direction);
        this.populateField(this.currentPiece);
        this.clearGhostPosition();
        this.setGhostPosition();
        this.render(); // break;
      }
    }
  }, {
    key: "play",
    value: function play() {
      this.setCurrentPiece();
      this.populateField(this.currentPiece);

      this._addToCurrentBag();

      this._showCurrentBag();

      if (!this.nextBag.length) this._refillNextBag();
      this.setGhostPosition(); // drop piece at given fps

      this.dropPiece(1);
    } // multiplayer 

  }, {
    key: "setOpponent",
    value: function setOpponent(player) {
      this.opponent = player;
    }
  }, {
    key: "addLinesToQueue",
    value: function addLinesToQueue(numLines) {
      debugger;
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
        console.log("lost");
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
/* harmony import */ var _game_game__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./game/game */ "./src/game/game.js");
/* harmony import */ var _field_field__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./field/field */ "./src/field/field.js");
/* harmony import */ var _multiplayer_multiplayer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./multiplayer/multiplayer */ "./src/multiplayer/multiplayer.js");



document.addEventListener("DOMContentLoaded", function () {
  var fieldContainer = document.getElementById("field-container");
  var fieldContainer2 = document.getElementById("field-container-2");
  var field = new _field_field__WEBPACK_IMPORTED_MODULE_1__["default"](1);
  var field2 = new _field_field__WEBPACK_IMPORTED_MODULE_1__["default"](2);
  field.createCompleteField(fieldContainer);
  field2.createCompleteField(fieldContainer2); // let optionsPlayer1 = { gameNum: 1, moveSpeed: 20, controls: { left: 37, right: 39, turnRight: 38, softDrop: 40, hold: 191, turnLeft: 76, hardDrop: 18 } }

  var optionsPlayer1 = {
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
  var optionsPlayer2 = {
    gameNum: 2,
    moveSpeed: 20,
    controls: {
      left: 188,
      right: 191,
      turnRight: 76,
      softDrop: 190,
      hold: 75,
      turnLeft: 87,
      hardDrop: 18
    }
  };
  var game1 = new _game_game__WEBPACK_IMPORTED_MODULE_0__["default"](optionsPlayer1);
  game1.keyListener(); // game1.play(fieldContainer);

  var game2 = new _game_game__WEBPACK_IMPORTED_MODULE_0__["default"](optionsPlayer2);
  game2.keyListener(); // game2.play(fieldContainer);

  var multiplayerMode = new _multiplayer_multiplayer__WEBPACK_IMPORTED_MODULE_2__["default"](game1, game2);
  multiplayerMode.startMultiplayer();
});

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
}(); // multiplayer.js(game1, game2) {
//     if game1.sentLines ?
//         game2.addLines
// 	if game2.sentLines ?
//             game1.addLines
// 	game1 {
//         this.opponent = ‘’;
//         this.multiplayer = “”;
//     }
//     game1 = newGame(params)
//     game2 = newGame(params)
//     game1.set(game2) {
//         will set multiplayer to true and opponent to other game
//     }




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
  }

  _createClass(Piece, [{
    key: "setLeftMostAndRightMost",
    value: function setLeftMostAndRightMost() {
      var leftMost;
      var rightMost;
      Object.values(this.position).forEach(function (coordinatesArray) {
        return coordinatesArray.forEach(function (array) {
          var columnValue = array[1];
          if (!leftMost) leftMost = columnValue;
          if (!rightMost) rightMost = columnValue;
          if (columnValue < leftMost) leftMost = columnValue;
          if (columnValue > rightMost) rightMost = columnValue;
        });
      });
      this.leftMost = leftMost;
      this.rightMost = rightMost;
    }
  }, {
    key: "_populateField",
    value: function _populateField(field) {
      var _this = this;

      var coordinateArrays = Object.values(this.position);
      coordinateArrays.forEach(function (array) {
        array.forEach(function (coordinate) {
          var _ref = [coordinate[0], coordinate[1]],
              row = _ref[0],
              col = _ref[1];
          field[row][col] = _this.colorCode;
        });
      });
      this.removeSquares.forEach(function (positionArray) {
        var _ref2 = [positionArray[0], positionArray[1]],
            row = _ref2[0],
            col = _ref2[1];
        field[row][col] = 0;
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
          field[row][col] = 0;
        });
      });
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

        case "up":
          // defer to subclass "turn" method
          this.turnRight(field);
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

        case "C":
          this.turnLeft(field);
          break;
      }

      this.setRemoveSquares(oldPosition);
    }
  }, {
    key: "turnRight",
    value: function turnRight(field) {
      var _this3 = this;

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
          case column = _this3.rightMost:
            _this3.position.bottom.push([newRow, newCol]);

            break;

          case column = _this3.leftMost:
            _this3.position.top.push([newRow, newCol]);

            break;

          default:
            _this3.position.middle.push([newRow, newCol]);

            break;
        }
      }); // find left and right most squares to see if piece through wall
      // if through wall, push piece back into field

      this.setLeftMostAndRightMost();

      while (this.rightMost > 9 || this.leftMost < 0) {
        this.rightMost > 9 ? this.move('left') : this.move('right');
        this.setLeftMostAndRightMost();
      } // in the case that the IPiece is turned through the field ceiling


      if (this.position.top.length) {
        while (this.position.top[0][0] < 0) {
          this.move('down');
        }
      }
    }
  }, {
    key: "turnLeft",
    value: function turnLeft(field) {
      var _this4 = this;

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
          case column = _this4.rightMost:
            _this4.position.top.push([newRow, newCol]);

            break;

          case column = _this4.leftMost:
            _this4.position.bottom.push([newRow, newCol]);

            break;

          default:
            _this4.position.middle.push([newRow, newCol]);

            break;
        }
      }); // find left and right most squares to see if piece through wall
      // if through wall, push piece back into field

      this.setLeftMostAndRightMost();

      while (this.rightMost > 9 || this.leftMost < 0) {
        this.rightMost > 9 ? this.move('left') : this.move('right');
        this.setLeftMostAndRightMost();
      } // in the case that the IPiece is turned through the field ceiling


      if (this.position.top.length) {
        while (this.position.top[0][0] < 0) {
          this.move('down');
        }
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
      var result = false;
      this.sideSquares().right.forEach(function (coordinatePair) {
        var _ref5 = [coordinatePair[0], coordinatePair[1]],
            row = _ref5[0],
            col = _ref5[1]; // if any right facing square hits the wall or another piece

        if (col === 9 || field[row][col + 1]) {
          result = true;
        }
      });
      return result;
    }
  }, {
    key: "leftSideBlocked",
    value: function leftSideBlocked(field) {
      var result = false;
      this.sideSquares().left.forEach(function (coordinatePair) {
        var _ref6 = [coordinatePair[0], coordinatePair[1]],
            row = _ref6[0],
            col = _ref6[1]; // if any left facing square hits the wall or another piece

        if (col === 0 || field[row][col - 1]) {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2ZpZWxkL2ZpZWxkLmpzIiwid2VicGFjazovLy8uL3NyYy9maWVsZC9ob2xkYm94LmpzIiwid2VicGFjazovLy8uL3NyYy9maWVsZC9uZXh0Qm94LmpzIiwid2VicGFjazovLy8uL3NyYy9maWVsZC9xdWV1ZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvZ2FtZS9nYW1lLmpzIiwid2VicGFjazovLy8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvbXVsdGlwbGF5ZXIvbXVsdGlwbGF5ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3BpZWNlcy9pUGllY2UuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3BpZWNlcy9qUGllY2UuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3BpZWNlcy9sUGllY2UuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3BpZWNlcy9vUGllY2UuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3BpZWNlcy9waWVjZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcGllY2VzL3NQaWVjZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcGllY2VzL3RQaWVjZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcGllY2VzL3pQaWVjZS5qcyJdLCJuYW1lcyI6WyJGaWVsZCIsImZpZWxkTnVtIiwiZmllbGQiLCJpIiwicm93IiwicHVzaCIsImNvbHVtbiIsImRvY3VtZW50IiwiY3JlYXRlRWxlbWVudCIsImNsYXNzTGlzdCIsImFkZCIsImFwcGVuZCIsImFwcGVuZENoaWxkIiwiX2NyZWF0ZUNvbHVtbiIsImNvbnRhaW5lciIsInF1ZXVlIiwiUXVldWUiLCJuZXh0Qm94IiwiTmV4dEJveCIsImhvbGRCb3giLCJIb2xkQm94IiwiX2NyZWF0ZUZpZWxkIiwiY3JlYXRlUXVldWUiLCJjcmVhdGVOZXh0Qm94ZXMiLCJwcmVwZW5kIiwiY3JlYXRlQm94IiwiYm94V3JhcHBlciIsImJveCIsImhlYWRpbmciLCJpbm5lckhUTUwiLCJfY3JlYXRlQm94Q29sdW1uIiwiX2NyZWF0ZU5leHRCb3hDb2x1bW4iLCJib3hlcyIsIl9jcmVhdGVOZXh0Qm94IiwicXVldWVNZXRlciIsImFkanVzdFF1ZXVlSGVpZ2h0IiwicGVyY2VudGFnZSIsInF1ZXJ5U2VsZWN0b3IiLCJzdHlsZSIsImhlaWdodCIsIkdhbWUiLCJvcHRpb25zIiwic2V0RmllbGQiLCJjb2xvcnMiLCJnYW1lTnVtIiwiY3VycmVudEJhZyIsIl9zaHVmZmxlQmFnIiwiZ2VuZXJhdGVCYWciLCJjdXJyZW50UGllY2UiLCJob2xkUGllY2UiLCJnaG9zdFBvc2l0aW9uIiwibmV4dEJhZyIsImNhbkhvbGQiLCJoYW5kbGVDbGVhciIsImRyb3AiLCJyaWdodCIsImxlZnQiLCJkb3duIiwiZHJvcFNwZWVkIiwibW92ZVNwZWVkIiwiZHJvcFBpZWNlIiwiYmluZCIsIm1vdmUiLCJtb3ZlUGllY2UiLCJhbmltYXRlIiwiZnBzSW50ZXJ2YWwiLCJzdGFydFRpbWUiLCJub3ciLCJ0aGVuIiwiaXNQYXVzZWQiLCJrZXlIZWxkIiwib3Bwb25lbnQiLCJjb250cm9scyIsInVwY29taW5nTGluZXMiLCJjb21ibyIsImNvbWJvR3VpZGUiLCJvUGllY2UiLCJPUGllY2UiLCJpUGllY2UiLCJJUGllY2UiLCJ0UGllY2UiLCJUUGllY2UiLCJzUGllY2UiLCJTUGllY2UiLCJ6UGllY2UiLCJaUGllY2UiLCJsUGllY2UiLCJMUGllY2UiLCJqUGllY2UiLCJKUGllY2UiLCJfZ2VuZXJhdGVGaWVsZCIsInNoaWZ0IiwiY29vcmRpbmF0ZUFycmF5cyIsIk9iamVjdCIsInZhbHVlcyIsImZvckVhY2giLCJhcnJheSIsImNvb3JkaW5hdGUiLCJjb2wiLCJmaWVsZENvbHVtbnMiLCJxdWVyeVNlbGVjdG9yQWxsIiwiY2hpbGRyZW4iLCJjb2xvckNvZGUiLCJ0b3AiLCJwb3NpdGlvbiIsIm1hcCIsInNsaWNlIiwibWlkZGxlIiwiYm90dG9tIiwic3RvcHBlZCIsImhhbmdpbmdTcXVhcmVzIiwiX3BvcHVsYXRlR2hvc3RQb3NpdGlvbiIsInJlbmRlciIsInBpZWNlIiwicmVtb3ZlU3F1YXJlcyIsInBvc2l0aW9uQXJyYXkiLCJjbGVhclNlbGZGcm9tQm9hcmQiLCJfZ2VuZXJhdGVQaWVjZSIsIm5hbWUiLCJzZXRDdXJyZW50UGllY2UiLCJfc2hvd0N1cnJlbnRCYWciLCJfcG9wdWxhdGVIb2xkQm94IiwiY29sdW1ucyIsImoiLCJjbGFzc05hbWUiLCJkaXNwbGF5U3F1YXJlcyIsInNxdWFyZSIsInBpZWNlTmFtZSIsImdldEVsZW1lbnRzQnlDbGFzc05hbWUiLCJfcG9wdWxhdGVOZXh0Qm94IiwiYmFnIiwiY3VycmVudEluZGV4IiwibGVuZ3RoIiwidGVtcG9yYXJ5VmFsdWUiLCJyYW5kb21JbmRleCIsIk1hdGgiLCJmbG9vciIsInJhbmRvbSIsInJvd0lkeCIsImNvbElkeCIsInNxdWFyZVZhbHVlIiwiY29sb3IiLCJyZW1vdmUiLCJib2R5IiwiYWRkRXZlbnRMaXN0ZW5lciIsImV2ZW50Iiwic2V0TGVmdE1vc3RBbmRSaWdodE1vc3QiLCJ3aGljaCIsInR1cm5SaWdodCIsImNsZWFyR2hvc3RQb3NpdGlvbiIsInBvcHVsYXRlRmllbGQiLCJzZXRHaG9zdFBvc2l0aW9uIiwidHVybkxlZnQiLCJsZWZ0U2lkZUJsb2NrZWQiLCJyaWdodFNpZGVCbG9ja2VkIiwic29mdERyb3AiLCJob2xkIiwiaGFyZERyb3AiLCJoYW5kbGVQaWVjZVN0b3AiLCJjYW5jZWxBbmltYXRpb25GcmFtZSIsImxvd2VzdCIsImhpZ2hlc3QiLCJudW1MaW5lc0NsZWFyZWQiLCJpbmNsdWRlcyIsIl9icmluZ0Rvd25GaWVsZCIsImNsZWFyTGluZXMiLCJzdGFydGluZ1JvdyIsIm51bUxpbmVzIiwiYWRkTGluZXNUb1F1ZXVlIiwiYWJzIiwicmVjZWl2ZVVwY29taW5nTGluZXMiLCJjbGVhckdob3N0Q2xhc3MiLCJwbGF5IiwiZnBzIiwiRGF0ZSIsInJlcXVlc3RBbmltYXRpb25GcmFtZSIsImVsYXBzZWQiLCJpc0ZhbGxpbmciLCJkaXJlY3Rpb24iLCJfYWRkVG9DdXJyZW50QmFnIiwiX3JlZmlsbE5leHRCYWciLCJwbGF5ZXIiLCJnYXJiYWdlTGluZXMiLCJyYW5kb21Ib2xlIiwiZ2FyYmFnZVJvdyIsImNvbnNvbGUiLCJsb2ciLCJjb25jYXQiLCJmaWVsZENvbnRhaW5lciIsImdldEVsZW1lbnRCeUlkIiwiZmllbGRDb250YWluZXIyIiwiZmllbGQyIiwiY3JlYXRlQ29tcGxldGVGaWVsZCIsIm9wdGlvbnNQbGF5ZXIxIiwib3B0aW9uc1BsYXllcjIiLCJnYW1lMSIsImtleUxpc3RlbmVyIiwiZ2FtZTIiLCJtdWx0aXBsYXllck1vZGUiLCJNdWx0aXBsYXllciIsInN0YXJ0TXVsdGlwbGF5ZXIiLCJwbGF5ZXIxIiwicGxheWVyMiIsInNldE9wcG9uZW50IiwidHVybmluZ1BvaW50IiwiUGllY2UiLCJsZWZ0TW9zdCIsInJpZ2h0TW9zdCIsImNvb3JkaW5hdGVzQXJyYXkiLCJjb2x1bW5WYWx1ZSIsIm9sZFNxdWFyZSIsIm5ld1NxdWFyZSIsInJlc3VsdCIsIl9zcXVhcmVzQXJlRXF1YWwiLCJvbGRQb3NpdGlvbiIsInNldFJlbW92ZVNxdWFyZXMiLCJzcXVhcmVzIiwiaGVpZ2h0RGlmZmVyZW5jZSIsIndpZHRoRGlmZmVyZW5jZSIsIm5ld0NvbCIsIm5ld1JvdyIsIm9sZFNxdWFyZXMiLCJuZXdTcXVhcmVzIiwiZmlsdGVyIiwiX2luY2x1ZGVzIiwiY29vcmRpbmF0ZUFycmF5IiwiYmVsb3dTcXVhcmUiLCJzaWRlU3F1YXJlcyIsImFkamFjZW50TGVmdCIsImFkamFjZW50UmlnaHQiLCJjb29yZGluYXRlUGFpciJdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Es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QUQsRUFBSSxDQUFKLENBQXpCLENBQXRCO0FBRUEsVUFBS1gsYUFBTCxHQUFxQixFQUFyQjtBQWRVO0FBZWI7OztFQWhCK0IyRiw4Qzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0ZwQzs7SUFFcUJ4SCxNOzs7OztBQUNqQixvQkFBYztBQUFBOztBQUFBOztBQUNWO0FBQ0EsVUFBS2lDLElBQUwsR0FBWSxRQUFaO0FBQ0EsVUFBS2QsUUFBTCxHQUFnQjtBQUNaRCxTQUFHLEVBQUUsQ0FBQyxDQUFDLENBQUQsRUFBSSxDQUFKLENBQUQsRUFBUyxDQUFDLENBQUQsRUFBSSxDQUFKLENBQVQsQ0FETztBQUVaSSxZQUFNLEVBQUUsRUFGSTtBQUdaQyxZQUFNLEVBQUUsQ0FBQyxDQUFDLENBQUQsRUFBSSxDQUFKLENBQUQsRUFBUyxDQUFDLENBQUQsRUFBSSxDQUFKLENBQVQ7QUFISSxLQUFoQjtBQUtBLFVBQUtOLFNBQUwsR0FBaUIsQ0FBakI7QUFFQSxVQUFLc0csWUFBTCxHQUFvQixDQUFDLENBQUQsRUFBSSxDQUFKLENBQXBCO0FBRUEsVUFBSy9FLGNBQUwsR0FBc0IsQ0FBQyxDQUFDLENBQUQsRUFBSSxDQUFKLENBQUQsRUFBUyxDQUFDLENBQUQsRUFBSSxDQUFKLENBQVQsRUFBaUIsQ0FBQyxDQUFELEVBQUksQ0FBSixDQUFqQixFQUF5QixDQUFDLENBQUQsRUFBSSxDQUFKLENBQXpCLENBQXRCO0FBRUEsVUFBS1gsYUFBTCxHQUFxQixFQUFyQjtBQWRVO0FBZWI7OztFQWhCK0IyRiw4QyIsImZpbGUiOiJtYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCIvZGlzdC9cIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvaW5kZXguanNcIik7XG4iLCJpbXBvcnQgSG9sZEJveCBmcm9tICcuL2hvbGRib3gnO1xuaW1wb3J0IE5leHRCb3ggZnJvbSAnLi9uZXh0Qm94JztcbmltcG9ydCBRdWV1ZSBmcm9tICcuL3F1ZXVlJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRmllbGQgeyAgXG4gICAgY29uc3RydWN0b3IoZmllbGROdW0pIHtcbiAgICAgICAgdGhpcy5maWVsZE51bSA9IGZpZWxkTnVtO1xuICAgIH1cbiAgICBcbiAgICBfZ2VuZXJhdGVGaWVsZCgpIHtcbiAgICAgICAgbGV0IGZpZWxkID0gW107XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMjA7IGkrKykge1xuICAgICAgICAgICAgbGV0IHJvdyA9IFswLDAsMCwwLDAsMCwwLDAsMCwwXTtcbiAgICAgICAgICAgIGZpZWxkLnB1c2gocm93KTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZmllbGQ7XG4gICAgfVxuXG4gICAgLy9faXNWYWxpZE1vdmVcblxuICAgIF9jcmVhdGVDb2x1bW4oKSB7XG4gICAgICAgIGxldCBjb2x1bW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidWxcIik7XG4gICAgICAgIGNvbHVtbi5jbGFzc0xpc3QuYWRkKGBmaWVsZC1jb2x1bW5gLCBgZmllbGQtJHt0aGlzLmZpZWxkTnVtfWApO1xuXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMjA7IGkrKykge1xuICAgICAgICAgICAgY29sdW1uLmFwcGVuZChkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIikpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBjb2x1bW47XG4gICAgfVxuXG4gICAgX2NyZWF0ZUZpZWxkKCkge1xuICAgICAgICBsZXQgZmllbGQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICBmaWVsZC5jbGFzc0xpc3QuYWRkKGBmaWVsZC1ib3hgLCBgZmllbGQtJHt0aGlzLmZpZWxkTnVtfWApO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IDEwOyBpKyspIHtcbiAgICAgICAgICAgIGZpZWxkLmFwcGVuZENoaWxkKHRoaXMuX2NyZWF0ZUNvbHVtbigpKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZmllbGQ7XG4gICAgfVxuXG4gICAgY3JlYXRlQ29tcGxldGVGaWVsZCAoY29udGFpbmVyKSB7XG4gICAgICAgIGxldCBxdWV1ZSA9IG5ldyBRdWV1ZSh0aGlzLmZpZWxkTnVtKTtcbiAgICAgICAgbGV0IG5leHRCb3ggPSBuZXcgTmV4dEJveCh0aGlzLmZpZWxkTnVtKTtcbiAgICAgICAgbGV0IGhvbGRCb3ggPSBuZXcgSG9sZEJveCh0aGlzLmZpZWxkTnVtKTtcbiAgICAgICAgY29udGFpbmVyLmFwcGVuZCh0aGlzLl9jcmVhdGVGaWVsZCgpKTtcbiAgICAgICAgY29udGFpbmVyLmFwcGVuZChxdWV1ZS5jcmVhdGVRdWV1ZSgpKTtcbiAgICAgICAgY29udGFpbmVyLmFwcGVuZChuZXh0Qm94LmNyZWF0ZU5leHRCb3hlcygpKTtcbiAgICAgICAgY29udGFpbmVyLnByZXBlbmQoaG9sZEJveC5jcmVhdGVCb3goKSk7XG4gICAgICAgIHJldHVybiBjb250YWluZXI7XG4gICAgfVxuXG59IiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgSG9sZEJveCB7XG4gICAgY29uc3RydWN0b3IoZmllbGROdW0pIHtcbiAgICAgICAgdGhpcy5maWVsZE51bSA9IGZpZWxkTnVtO1xuICAgIH1cblxuICAgIF9jcmVhdGVCb3hDb2x1bW4oKSB7XG4gICAgICAgIGxldCBjb2x1bW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidWxcIik7XG4gICAgICAgIGNvbHVtbi5jbGFzc0xpc3QuYWRkKGBob2xkLWNvbHVtbmAsIGBmaWVsZC0ke3RoaXMuZmllbGROdW19YCk7XG5cbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCA0OyBpKyspIHtcbiAgICAgICAgICAgIGNvbHVtbi5hcHBlbmQoZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpXCIpKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gY29sdW1uO1xuICAgIH1cblxuICAgIGNyZWF0ZUJveCgpIHtcbiAgICAgICAgbGV0IGJveFdyYXBwZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICBib3hXcmFwcGVyLmNsYXNzTGlzdC5hZGQoYGhvbGQtYm94LXdyYXBwZXJgLCBgZmllbGQtJHt0aGlzLmZpZWxkTnVtfWApO1xuICAgICAgICBsZXQgYm94ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgYm94LmNsYXNzTGlzdC5hZGQoYGhvbGQtYm94YCwgYGZpZWxkLSR7dGhpcy5maWVsZE51bX1gKTtcbiAgICAgICAgbGV0IGhlYWRpbmcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDJcIik7XG4gICAgICAgIGhlYWRpbmcuaW5uZXJIVE1MID0gXCJIT0xEXCI7XG4gICAgICAgIGJveFdyYXBwZXIuYXBwZW5kQ2hpbGQoaGVhZGluZyk7XG4gICAgICAgIGJveFdyYXBwZXIuYXBwZW5kQ2hpbGQoYm94KTtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCA1OyBpKyspIHtcbiAgICAgICAgICAgIGJveC5hcHBlbmRDaGlsZCh0aGlzLl9jcmVhdGVCb3hDb2x1bW4oKSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGJveFdyYXBwZXI7XG4gICAgfVxufSIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIE5leHRCb3gge1xuICAgIGNvbnN0cnVjdG9yKGZpZWxkTnVtKSB7XG4gICAgICAgIHRoaXMuZmllbGROdW0gPSBmaWVsZE51bTtcbiAgICB9XG5cbiAgICBfY3JlYXRlTmV4dEJveENvbHVtbigpIHtcbiAgICAgICAgbGV0IGNvbHVtbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ1bFwiKTtcbiAgICAgICAgY29sdW1uLmNsYXNzTGlzdC5hZGQoYG5leHQtY29sdW1uYCwgYGZpZWxkLSR7dGhpcy5maWVsZE51bX1gKTtcblxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IDQ7IGkrKykge1xuICAgICAgICAgICAgY29sdW1uLmFwcGVuZChkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIikpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBjb2x1bW47XG4gICAgfVxuXG4gICAgX2NyZWF0ZU5leHRCb3goKSB7XG4gICAgICAgIGxldCBib3ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICBib3guY2xhc3NMaXN0LmFkZChgbmV4dC1ib3hgLCBgZmllbGQtJHt0aGlzLmZpZWxkTnVtfWApO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IDU7IGkrKykge1xuICAgICAgICAgICAgYm94LmFwcGVuZENoaWxkKHRoaXMuX2NyZWF0ZU5leHRCb3hDb2x1bW4oKSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGJveDtcbiAgICB9XG5cbiAgICBjcmVhdGVOZXh0Qm94ZXMoKSB7XG4gICAgICAgIGxldCBib3hlcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIGxldCBoZWFkaW5nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgyXCIpO1xuICAgICAgICBoZWFkaW5nLmlubmVySFRNTCA9IFwiTkVYVFwiO1xuICAgICAgICBib3hlcy5jbGFzc0xpc3QuYWRkKGBuZXh0LWJveGVzYCwgYGZpZWxkLSR7dGhpcy5maWVsZE51bX1gKTtcbiAgICAgICAgYm94ZXMuYXBwZW5kQ2hpbGQoaGVhZGluZyk7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgNTsgaSsrKSB7XG4gICAgICAgICAgICBib3hlcy5hcHBlbmRDaGlsZCh0aGlzLl9jcmVhdGVOZXh0Qm94KCkpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBib3hlcztcbiAgICB9XG59IiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgUXVldWUge1xuICAgIGNvbnN0cnVjdG9yKGZpZWxkTnVtKSB7XG4gICAgICAgIHRoaXMuZmllbGROdW0gPSBmaWVsZE51bTtcbiAgICB9XG5cbiAgICBjcmVhdGVRdWV1ZSgpIHtcbiAgICAgICAgbGV0IHF1ZXVlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgcXVldWUuY2xhc3NMaXN0LmFkZChgcXVldWVgLCBgZmllbGQtJHt0aGlzLmZpZWxkTnVtfWApO1xuICAgICAgICBsZXQgcXVldWVNZXRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIHF1ZXVlTWV0ZXIuY2xhc3NMaXN0LmFkZChgcXVldWUtbWV0ZXJgLCBgZmllbGQtJHt0aGlzLmZpZWxkTnVtfWApO1xuICAgICAgICBxdWV1ZS5hcHBlbmRDaGlsZChxdWV1ZU1ldGVyKTtcbiAgICAgICAgcmV0dXJuIHF1ZXVlO1xuICAgIH1cbn1cblxuZXhwb3J0IGNvbnN0IGFkanVzdFF1ZXVlSGVpZ2h0ID0gKGZpZWxkTnVtLCBwZXJjZW50YWdlKSA9PiB7XG4gICAgbGV0IHF1ZXVlTWV0ZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAucXVldWUtbWV0ZXIuZmllbGQtJHtmaWVsZE51bX1gKTtcbiAgICBxdWV1ZU1ldGVyLnN0eWxlLmhlaWdodCA9IGAke3BlcmNlbnRhZ2V9JWBcbn0iLCJpbXBvcnQgRmllbGQgZnJvbSAnLi4vZmllbGQvZmllbGQnO1xuaW1wb3J0IE9QaWVjZSBmcm9tICcuLi9waWVjZXMvb1BpZWNlJztcbmltcG9ydCBJUGllY2UgZnJvbSAnLi4vcGllY2VzL2lQaWVjZSc7XG5pbXBvcnQgVFBpZWNlIGZyb20gJy4uL3BpZWNlcy90UGllY2UnO1xuaW1wb3J0IFNQaWVjZSBmcm9tICcuLi9waWVjZXMvc1BpZWNlJztcbmltcG9ydCBaUGllY2UgZnJvbSAnLi4vcGllY2VzL3pQaWVjZSc7XG5pbXBvcnQgTFBpZWNlIGZyb20gJy4uL3BpZWNlcy9sUGllY2UnO1xuaW1wb3J0IEpQaWVjZSBmcm9tICcuLi9waWVjZXMvalBpZWNlJztcbmltcG9ydCB7IGFkanVzdFF1ZXVlSGVpZ2h0IH0gZnJvbSAnLi4vZmllbGQvcXVldWUnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBHYW1lIHtcbiAgICBjb25zdHJ1Y3RvcihvcHRpb25zKSB7XG4gICAgICAgIHRoaXMuZmllbGQgPSB0aGlzLnNldEZpZWxkKClcblxuICAgICAgICB0aGlzLmNvbG9ycyA9IHtcbiAgICAgICAgICAgIDE6IFwieWVsbG93XCIsXG4gICAgICAgICAgICAyOiBcImJsdWVcIixcbiAgICAgICAgICAgIDM6IFwicHVycGxlXCIsXG4gICAgICAgICAgICA0OiBcImdyZWVuXCIsXG4gICAgICAgICAgICA1OiBcInJlZFwiLFxuICAgICAgICAgICAgNjogXCJvcmFuZ2VcIixcbiAgICAgICAgICAgIDc6IFwiZGFyay1ibHVlXCIsXG4gICAgICAgICAgICA4OiBcImdyZXlcIlxuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5nYW1lTnVtID0gb3B0aW9ucy5nYW1lTnVtO1xuXG4gICAgICAgIHRoaXMuY3VycmVudEJhZyA9IHRoaXMuX3NodWZmbGVCYWcodGhpcy5nZW5lcmF0ZUJhZygpKTtcbiAgICAgICAgdGhpcy5jdXJyZW50UGllY2UgPSAnJztcbiAgICAgICAgdGhpcy5ob2xkUGllY2UgPSAnJztcbiAgICAgICAgdGhpcy5naG9zdFBvc2l0aW9uID0gJyc7XG4gICAgICAgIHRoaXMubmV4dEJhZyA9IHRoaXMuX3NodWZmbGVCYWcodGhpcy5nZW5lcmF0ZUJhZygpKTtcblxuICAgICAgICAvLyBwcmV2ZW50cyBwbGF5ZXIgZnJvbSBob2xkaW5nIHBpZWNlIG11bHRpcGxlIHRpbWVzXG4gICAgICAgIHRoaXMuY2FuSG9sZCA9IHRydWU7XG5cbiAgICAgICAgdGhpcy5oYW5kbGVDbGVhciA9IHtcbiAgICAgICAgICAgIGRyb3A6ICcnLFxuICAgICAgICAgICAgcmlnaHQ6ICcnLFxuICAgICAgICAgICAgbGVmdDogJycsXG4gICAgICAgICAgICBkb3duOiAnJ1xuICAgICAgICB9O1xuXG4gICAgICAgIC8vIGZvciBhbmltYXRpb25zXG4gICAgICAgIHRoaXMuZHJvcFNwZWVkID0gMS41O1xuICAgICAgICB0aGlzLm1vdmVTcGVlZCA9IG9wdGlvbnMubW92ZVNwZWVkO1xuICAgICAgICB0aGlzLmRyb3BQaWVjZSA9IHRoaXMuZHJvcFBpZWNlLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMuZHJvcCA9IHRoaXMuZHJvcC5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLm1vdmUgPSB0aGlzLm1vdmUuYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5tb3ZlUGllY2UgPSB0aGlzLm1vdmVQaWVjZS5iaW5kKHRoaXMpO1xuXG4gICAgICAgIC8vIGtlZXAgdHJhY2sgb2YgdGhlIGZvbGxvd2luZyB2YXJpYWJsZXMgZm9yIHJlcXVlc3RBbmltYXRpb25GcmFtZSB0aHJvdHRsaW5nXG4gICAgICAgIHRoaXMuYW5pbWF0ZSA9IHtcbiAgICAgICAgICAgIGRyb3A6IHtcbiAgICAgICAgICAgICAgICBmcHNJbnRlcnZhbDogJycsXG4gICAgICAgICAgICAgICAgc3RhcnRUaW1lOiAnJyxcbiAgICAgICAgICAgICAgICBub3c6ICcnLFxuICAgICAgICAgICAgICAgIHRoZW46ICcnXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgcmlnaHQ6IHtcbiAgICAgICAgICAgICAgICBmcHNJbnRlcnZhbDogJycsXG4gICAgICAgICAgICAgICAgc3RhcnRUaW1lOiAnJyxcbiAgICAgICAgICAgICAgICBub3c6ICcnLFxuICAgICAgICAgICAgICAgIHRoZW46ICcnXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgbGVmdDoge1xuICAgICAgICAgICAgICAgIGZwc0ludGVydmFsOiAnJyxcbiAgICAgICAgICAgICAgICBzdGFydFRpbWU6ICcnLFxuICAgICAgICAgICAgICAgIG5vdzogJycsXG4gICAgICAgICAgICAgICAgdGhlbjogJydcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBkb3duOiB7XG4gICAgICAgICAgICAgICAgZnBzSW50ZXJ2YWw6ICcnLFxuICAgICAgICAgICAgICAgIHN0YXJ0VGltZTogJycsXG4gICAgICAgICAgICAgICAgbm93OiAnJyxcbiAgICAgICAgICAgICAgICB0aGVuOiAnJ1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLy8gcGF1c2luZyB0aGUgZ2FtZVxuICAgICAgICB0aGlzLmlzUGF1c2VkID0gZmFsc2U7XG5cbiAgICAgICAgdGhpcy5rZXlIZWxkID0ge1xuICAgICAgICAgICAgZG93bjogZmFsc2UsXG4gICAgICAgICAgICByaWdodDogZmFsc2UsXG4gICAgICAgICAgICBsZWZ0OiBmYWxzZVxuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5vcHBvbmVudCA9IFwiXCI7XG4gICAgICAgIHRoaXMuY29udHJvbHMgPSBvcHRpb25zLmNvbnRyb2xzO1xuICAgICAgICB0aGlzLnVwY29taW5nTGluZXMgPSAwO1xuICAgICAgICB0aGlzLmNvbWJvID0gLTE7XG4gICAgICAgIHRoaXMuY29tYm9HdWlkZSA9IHtcbiAgICAgICAgICAgIDA6IDAsXG4gICAgICAgICAgICAxOiAwLCBcbiAgICAgICAgICAgIDI6IDEsXG4gICAgICAgICAgICAzOiAxLFxuICAgICAgICAgICAgNDogMSxcbiAgICAgICAgICAgIDU6IDIsXG4gICAgICAgICAgICA2OiAyLFxuICAgICAgICAgICAgNzogMyxcbiAgICAgICAgICAgIDg6IDMsXG4gICAgICAgICAgICA5OiA0LFxuICAgICAgICAgICAgMTA6IDQsXG4gICAgICAgICAgICAxMTogNCxcbiAgICAgICAgICAgIDEyOiA1XG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgZ2VuZXJhdGVCYWcoKSB7XG4gICAgICAgIGxldCBvUGllY2UgPSBuZXcgT1BpZWNlKCk7XG4gICAgICAgIGxldCBpUGllY2UgPSBuZXcgSVBpZWNlKCk7XG4gICAgICAgIGxldCB0UGllY2UgPSBuZXcgVFBpZWNlKCk7XG4gICAgICAgIGxldCBzUGllY2UgPSBuZXcgU1BpZWNlKCk7XG4gICAgICAgIGxldCB6UGllY2UgPSBuZXcgWlBpZWNlKCk7XG4gICAgICAgIGxldCBsUGllY2UgPSBuZXcgTFBpZWNlKCk7XG4gICAgICAgIGxldCBqUGllY2UgPSBuZXcgSlBpZWNlKCk7XG5cbiAgICAgICAgcmV0dXJuIFtvUGllY2UsIGlQaWVjZSwgdFBpZWNlLCBzUGllY2UsIHpQaWVjZSwgbFBpZWNlLCBqUGllY2VdO1xuICAgIH1cblxuICAgIHNldEZpZWxkKCkge1xuICAgICAgICBsZXQgZmllbGQgPSBuZXcgRmllbGQoKTtcbiAgICAgICAgcmV0dXJuIGZpZWxkLl9nZW5lcmF0ZUZpZWxkKCk7XG4gICAgfVxuXG4gICAgLy8gdGFrZSBwaWVjZSBmcm9tIGN1cnJlbnRCYWcgYW5kIHNldCBpdCBhcyB0aGUgY3VycmVudCBwaWVjZVxuICAgIHNldEN1cnJlbnRQaWVjZSgpIHtcbiAgICAgICAgdGhpcy5jdXJyZW50UGllY2UgPSB0aGlzLmN1cnJlbnRCYWcuc2hpZnQoKTtcbiAgICB9XG5cbiAgICAvLyByZW1vdmVzIG9sZCBnaG9zdCBwb3NpdGlvbiBmcm9tIHRoaXMuZmllbGQgYmVmb3JlIGNoYW5naW5nIHBpZWNlIHBvc2l0aW9uXG4gICAgY2xlYXJHaG9zdFBvc2l0aW9uKCkge1xuICAgICAgICBsZXQgY29vcmRpbmF0ZUFycmF5cyA9IE9iamVjdC52YWx1ZXModGhpcy5naG9zdFBvc2l0aW9uKTtcblxuICAgICAgICBjb29yZGluYXRlQXJyYXlzLmZvckVhY2goYXJyYXkgPT4ge1xuICAgICAgICAgICAgYXJyYXkuZm9yRWFjaChjb29yZGluYXRlID0+IHtcbiAgICAgICAgICAgICAgICBsZXQgW3JvdywgY29sXSA9IFtjb29yZGluYXRlWzBdLCBjb29yZGluYXRlWzFdXTtcbiAgICAgICAgICAgICAgICB0aGlzLmZpZWxkW3Jvd11bY29sXSA9IDA7XG4gICAgICAgICAgICB9KVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICAvLyBjbGVhcnMgdGhlIGNvbG9yIGNsYXNzZXMgZnJvbSB0aGUgYnJvd3NlciBmaWVsZFxuICAgIGNsZWFyR2hvc3RDbGFzcygpIHtcbiAgICAgICAgbGV0IGZpZWxkQ29sdW1ucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoYC5maWVsZC1jb2x1bW4uZmllbGQtJHt0aGlzLmdhbWVOdW19YCk7XG4gICAgICAgIGxldCBjb29yZGluYXRlQXJyYXlzID0gT2JqZWN0LnZhbHVlcyh0aGlzLmdob3N0UG9zaXRpb24pO1xuXG4gICAgICAgIGNvb3JkaW5hdGVBcnJheXMuZm9yRWFjaChhcnJheSA9PiB7XG4gICAgICAgICAgICBhcnJheS5mb3JFYWNoKGNvb3JkaW5hdGUgPT4ge1xuICAgICAgICAgICAgICAgIGxldCBbcm93LCBjb2xdID0gW2Nvb3JkaW5hdGVbMF0sIGNvb3JkaW5hdGVbMV1dO1xuICAgICAgICAgICAgICAgIGZpZWxkQ29sdW1uc1tjb2xdLmNoaWxkcmVuW3Jvd10uY2xhc3NMaXN0ID0gdGhpcy5jb2xvcnNbdGhpcy5jdXJyZW50UGllY2UuY29sb3JDb2RlXTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIC8vIGZpbmQgYXBwcm9wcmlhdGUgZ2hvc3QgcG9zaXRpb24gYXMgcGllY2UgcG9zaXRpb24gY2hhbmdlc1xuICAgIHNldEdob3N0UG9zaXRpb24oKSB7XG4gICAgICAgIGxldCBnaG9zdFBvc2l0aW9uID0ge1xuICAgICAgICAgICAgdG9wOiB0aGlzLmN1cnJlbnRQaWVjZS5wb3NpdGlvbi50b3AubWFwKGNvb3JkaW5hdGUgPT4gY29vcmRpbmF0ZS5zbGljZSgpKSxcbiAgICAgICAgICAgIG1pZGRsZTogdGhpcy5jdXJyZW50UGllY2UucG9zaXRpb24ubWlkZGxlLm1hcChjb29yZGluYXRlID0+IGNvb3JkaW5hdGUuc2xpY2UoKSksXG4gICAgICAgICAgICBib3R0b206IHRoaXMuY3VycmVudFBpZWNlLnBvc2l0aW9uLmJvdHRvbS5tYXAoY29vcmRpbmF0ZSA9PiBjb29yZGluYXRlLnNsaWNlKCkpXG4gICAgICAgIH1cblxuICAgICAgICBsZXQgc3RvcHBlZCA9IGZhbHNlO1xuICAgICAgICB3aGlsZSAoIXN0b3BwZWQpIHtcbiAgICAgICAgICAgIGxldCBoYW5naW5nU3F1YXJlcyA9IHRoaXMuY3VycmVudFBpZWNlLmhhbmdpbmdTcXVhcmVzKGdob3N0UG9zaXRpb24pO1xuICAgICAgICAgICAgaGFuZ2luZ1NxdWFyZXMuZm9yRWFjaChjb29yZGluYXRlID0+IHtcbiAgICAgICAgICAgICAgICBsZXQgW3JvdywgY29sXSA9IFtjb29yZGluYXRlWzBdLCBjb29yZGluYXRlWzFdXTtcbiAgICAgICAgICAgICAgICBpZiAocm93ICsgMSA9PT0gMjAgfHwgdGhpcy5maWVsZFtyb3cgKyAxXVtjb2xdKSBzdG9wcGVkID0gdHJ1ZTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgaWYgKHN0b3BwZWQpIGJyZWFrO1xuICAgICAgICAgICAgZ2hvc3RQb3NpdGlvbi50b3AgPSBnaG9zdFBvc2l0aW9uLnRvcC5tYXAoYXJyYXkgPT4gW2FycmF5WzBdICsgMSwgYXJyYXlbMV1dKTtcbiAgICAgICAgICAgIGdob3N0UG9zaXRpb24ubWlkZGxlID0gZ2hvc3RQb3NpdGlvbi5taWRkbGUubWFwKGFycmF5ID0+IFthcnJheVswXSArIDEsIGFycmF5WzFdXSk7XG4gICAgICAgICAgICBnaG9zdFBvc2l0aW9uLmJvdHRvbSA9IGdob3N0UG9zaXRpb24uYm90dG9tLm1hcChhcnJheSA9PiBbYXJyYXlbMF0gKyAxLCBhcnJheVsxXV0pO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuZ2hvc3RQb3NpdGlvbiA9IGdob3N0UG9zaXRpb247XG4gICAgICAgIHRoaXMuX3BvcHVsYXRlR2hvc3RQb3NpdGlvbigpO1xuICAgIH1cblxuICAgIC8vIHBvcHVsYXRlIHRoaXMuZmllbGQgd2l0aCAneCcgd2hlcmV2ZXIgdGhlIGdob3N0IHBvc2l0aW9uIGlzIGNhbGN1bGF0ZWQgdG8gYmVcbiAgICBfcG9wdWxhdGVHaG9zdFBvc2l0aW9uKCkge1xuICAgICAgICBsZXQgY29vcmRpbmF0ZUFycmF5cyA9IE9iamVjdC52YWx1ZXModGhpcy5naG9zdFBvc2l0aW9uKTtcblxuICAgICAgICBjb29yZGluYXRlQXJyYXlzLmZvckVhY2goYXJyYXkgPT4ge1xuICAgICAgICAgICAgYXJyYXkuZm9yRWFjaChjb29yZGluYXRlID0+IHtcbiAgICAgICAgICAgICAgICBsZXQgW3JvdywgY29sXSA9IFtjb29yZGluYXRlWzBdLCBjb29yZGluYXRlWzFdXTtcbiAgICAgICAgICAgICAgICB0aGlzLmZpZWxkW3Jvd11bY29sXSA9IFwieFwiO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMucmVuZGVyKCk7XG4gICAgfVxuXG4gICAgLy8gcG9wdWxhdGVzIHRoaXMuZmllbGQgd2l0aCB0aGUgYXBwcm9wcmlhdGUgY3VycmVudCBwaWVjZSBjb2xvckNvZGUsIHdoaWxlIHNldHRpbmcgcHJldmlvdXMgcGllY2UgcG9zaXRpb25zIHRvIDBcbiAgICBwb3B1bGF0ZUZpZWxkKHBpZWNlKSB7XG4gICAgICAgIGxldCBjb29yZGluYXRlQXJyYXlzID0gT2JqZWN0LnZhbHVlcyhwaWVjZS5wb3NpdGlvbik7XG4gICAgICAgIGNvb3JkaW5hdGVBcnJheXMuZm9yRWFjaChhcnJheSA9PiB7XG4gICAgICAgICAgICBhcnJheS5mb3JFYWNoKGNvb3JkaW5hdGUgPT4ge1xuICAgICAgICAgICAgICAgIGxldCBbcm93LCBjb2xdID0gW2Nvb3JkaW5hdGVbMF0sIGNvb3JkaW5hdGVbMV1dO1xuICAgICAgICAgICAgICAgIHRoaXMuZmllbGRbcm93XVtjb2xdID0gcGllY2UuY29sb3JDb2RlO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgfSk7XG5cbiAgICAgICAgcGllY2UucmVtb3ZlU3F1YXJlcy5mb3JFYWNoKHBvc2l0aW9uQXJyYXkgPT4ge1xuICAgICAgICAgICAgbGV0IFtyb3csIGNvbF0gPSBbcG9zaXRpb25BcnJheVswXSwgcG9zaXRpb25BcnJheVsxXV07XG4gICAgICAgICAgICB0aGlzLmZpZWxkW3Jvd11bY29sXSA9IDA7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIC8vIGhvbGQgcGllY2UgZm9yIGxhdGVyIHVzZSBcbiAgICBob2xkKCkge1xuICAgICAgICBpZiAoIXRoaXMuY2FuSG9sZCkgcmV0dXJuO1xuICAgICAgICB0aGlzLmN1cnJlbnRQaWVjZS5jbGVhclNlbGZGcm9tQm9hcmQodGhpcy5maWVsZCk7IFxuICAgICAgICB0aGlzLnJlbmRlcigpO1xuXG4gICAgICAgIGlmICh0aGlzLmhvbGRQaWVjZSA9PT0gJycpIHtcbiAgICAgICAgICAgIC8vIHBhc3MgY3VycmVudCBwaWVjZSBuYW1lIGludG8gZ2VuZXJhdGUgcGllY2UgaW4gb3JkZXIgdG8gZ2VuZXJhdGUgYSBuZXcgcGllY2UgaW5zdGFuY2VcbiAgICAgICAgICAgIHRoaXMuaG9sZFBpZWNlID0gdGhpcy5fZ2VuZXJhdGVQaWVjZSh0aGlzLmN1cnJlbnRQaWVjZS5uYW1lKTtcbiAgICAgICAgICAgIHRoaXMuc2V0Q3VycmVudFBpZWNlKCk7XG4gICAgICAgICAgICAvLyByZS1yZW5kZXIgbmV4dCBib3hlcyB0byBhcHByb3ByaWF0ZWx5IHNob3cgY3VycmVudCBiYWdcbiAgICAgICAgICAgIHRoaXMuX3Nob3dDdXJyZW50QmFnKCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmN1cnJlbnRQaWVjZSA9IHRoaXMuX2dlbmVyYXRlUGllY2UodGhpcy5jdXJyZW50UGllY2UubmFtZSk7XG4gICAgICAgICAgICBbdGhpcy5jdXJyZW50UGllY2UsIHRoaXMuaG9sZFBpZWNlXSA9IFt0aGlzLmhvbGRQaWVjZSwgdGhpcy5jdXJyZW50UGllY2VdO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuY2FuSG9sZCA9IGZhbHNlO1xuXG4gICAgICAgIHRoaXMuX3BvcHVsYXRlSG9sZEJveCgpO1xuICAgIH1cblxuICAgIF9wb3B1bGF0ZUhvbGRCb3goKSB7XG4gICAgICAgIGxldCBjb2x1bW5zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLmhvbGQtYm94LmZpZWxkLSR7dGhpcy5nYW1lTnVtfWApLmNoaWxkcmVuO1xuXG4gICAgICAgIC8vIHJlbW92ZSBjb2xvcnMgZnJvbSBwcmV2aW91cyBwaWVjZXNcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCA1OyBpKyspIHtcbiAgICAgICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgNDsgaisrKSB7XG4gICAgICAgICAgICAgICAgLy8gY29sdW1ucy5jaGlsZHJlbiBpcyBub2RlbGlzdCBvZiA8bGlzPlxuICAgICAgICAgICAgICAgIGNvbHVtbnNbaV0uY2hpbGRyZW5bal0uY2xhc3NOYW1lID0gXCJcIjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuaG9sZFBpZWNlLmRpc3BsYXlTcXVhcmVzLmZvckVhY2goc3F1YXJlID0+IHtcbiAgICAgICAgICAgIGxldCBbY29sLCByb3ddID0gW3NxdWFyZVswXSwgc3F1YXJlWzFdXTtcbiAgICAgICAgICAgIGNvbHVtbnNbY29sXS5jaGlsZHJlbltyb3ddLmNsYXNzTGlzdC5hZGQodGhpcy5jb2xvcnNbdGhpcy5ob2xkUGllY2UuY29sb3JDb2RlXSk7XG4gICAgICAgIH0pXG5cbiAgICB9XG5cbiAgICAvLyB1c2VkIGZvciB0aGlzLmhvbGQoKTogZ2VuZXJhdGUgYSBuZXcgcGllY2Ugc28gdGhhdCBhIGhvbGRwaWVjZSB0aGF0IGlzIHJlLXJlbmRlcmVkIG9uIHRoZSBib2FyZCB3aWxsIG5vdCBzdGFydCBmcm9tIHRoZSBvbGQgcG9zaXRpb25cbiAgICBfZ2VuZXJhdGVQaWVjZShwaWVjZU5hbWUpIHtcbiAgICAgICAgc3dpdGNoKHBpZWNlTmFtZSkge1xuICAgICAgICAgICAgY2FzZSBcIlRQaWVjZVwiOlxuICAgICAgICAgICAgICAgIHJldHVybiBuZXcgVFBpZWNlO1xuICAgICAgICAgICAgY2FzZSBcIk9QaWVjZVwiOlxuICAgICAgICAgICAgICAgIHJldHVybiBuZXcgT1BpZWNlO1xuICAgICAgICAgICAgY2FzZSBcIklQaWVjZVwiOlxuICAgICAgICAgICAgICAgIHJldHVybiBuZXcgSVBpZWNlO1xuICAgICAgICAgICAgY2FzZSBcIkxQaWVjZVwiOlxuICAgICAgICAgICAgICAgIHJldHVybiBuZXcgTFBpZWNlO1xuICAgICAgICAgICAgY2FzZSBcIkpQaWVjZVwiOlxuICAgICAgICAgICAgICAgIHJldHVybiBuZXcgSlBpZWNlO1xuICAgICAgICAgICAgY2FzZSBcIlNQaWVjZVwiOlxuICAgICAgICAgICAgICAgIHJldHVybiBuZXcgU1BpZWNlO1xuICAgICAgICAgICAgY2FzZSBcIlpQaWVjZVwiOlxuICAgICAgICAgICAgICAgIHJldHVybiBuZXcgWlBpZWNlO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLy8gdGFrZSBvbmUgcGllY2UgZnJvbSBuZXh0QmFnIGFuZCBhZGQgdG8gY3VycmVudEJhZ1xuICAgIF9hZGRUb0N1cnJlbnRCYWcoKSB7XG4gICAgICAgIHRoaXMuY3VycmVudEJhZy5wdXNoKHRoaXMubmV4dEJhZy5zaGlmdCgpKTtcbiAgICB9XG5cbiAgICBfc2hvd0N1cnJlbnRCYWcoKSB7XG4gICAgICAgIGxldCBib3hlcyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoYG5leHQtYm94IGZpZWxkLSR7dGhpcy5nYW1lTnVtfWApO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IDU7IGkrKykge1xuICAgICAgICAgICAgdGhpcy5fcG9wdWxhdGVOZXh0Qm94KGJveGVzW2ldLCB0aGlzLmN1cnJlbnRCYWdbaV0pO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgX3BvcHVsYXRlTmV4dEJveChib3gsIHBpZWNlKSB7XG4gICAgICAgIC8vIGNvbHVtbnMgaXMgbm9kZWxpc3Qgb2YgPHVscz5cbiAgICAgICAgbGV0IGNvbHVtbnMgPSBib3guY2hpbGRyZW47XG5cbiAgICAgICAgLy8gcmVtb3ZlIGNvbG9ycyBmcm9tIHByZXZpb3VzIHBpZWNlc1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IDU7IGkrKykge1xuICAgICAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCA0OyBqKyspIHtcbiAgICAgICAgICAgICAgICAvLyBjb2x1bW5zLmNoaWxkcmVuIGlzIG5vZGVsaXN0IG9mIDxsaXM+XG4gICAgICAgICAgICAgICAgY29sdW1uc1tpXS5jaGlsZHJlbltqXS5jbGFzc05hbWUgPSBcIlwiO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcGllY2UuZGlzcGxheVNxdWFyZXMuZm9yRWFjaChzcXVhcmUgPT4ge1xuICAgICAgICAgICAgbGV0IFtjb2wsIHJvd10gPSBbc3F1YXJlWzBdLCBzcXVhcmVbMV1dO1xuICAgICAgICAgICAgY29sdW1uc1tjb2xdLmNoaWxkcmVuW3Jvd10uY2xhc3NMaXN0LmFkZCh0aGlzLmNvbG9yc1twaWVjZS5jb2xvckNvZGVdKTtcbiAgICAgICAgfSlcbiAgICB9XG5cbiAgICAvLyByZWZpbGwgbmV4dCBiYWcsIHdpbGwgb25seSBiZSBjYWxsZWQgb25jZSBuZXh0QmFnIGJlY29tZXMgZW1wdHlcbiAgICBfcmVmaWxsTmV4dEJhZygpIHtcbiAgICAgICAgdGhpcy5uZXh0QmFnID0gdGhpcy5nZW5lcmF0ZUJhZygpO1xuICAgIH1cblxuICAgIC8vIGltcGxlbWVudGF0aW9uIG9mIHNodWZmbGUgZm91bmQgb24gaHR0cHM6Ly9zdGFja292ZXJmbG93LmNvbS9xdWVzdGlvbnMvMjQ1MDk1NC9ob3ctdG8tcmFuZG9taXplLXNodWZmbGUtYS1qYXZhc2NyaXB0LWFycmF5IzI0NTA5NzZcbiAgICBfc2h1ZmZsZUJhZyhiYWcpIHtcbiAgICAgICAgdmFyIGN1cnJlbnRJbmRleCA9IGJhZy5sZW5ndGgsIHRlbXBvcmFyeVZhbHVlLCByYW5kb21JbmRleDtcblxuICAgICAgICAvLyBXaGlsZSB0aGVyZSByZW1haW4gZWxlbWVudHMgdG8gc2h1ZmZsZS4uLlxuICAgICAgICB3aGlsZSAoMCAhPT0gY3VycmVudEluZGV4KSB7XG5cbiAgICAgICAgICAgIC8vIFBpY2sgYSByZW1haW5pbmcgZWxlbWVudC4uLlxuICAgICAgICAgICAgcmFuZG9tSW5kZXggPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBjdXJyZW50SW5kZXgpO1xuICAgICAgICAgICAgY3VycmVudEluZGV4IC09IDE7XG5cbiAgICAgICAgICAgIC8vIEFuZCBzd2FwIGl0IHdpdGggdGhlIGN1cnJlbnQgZWxlbWVudC5cbiAgICAgICAgICAgIHRlbXBvcmFyeVZhbHVlID0gYmFnW2N1cnJlbnRJbmRleF07XG4gICAgICAgICAgICBiYWdbY3VycmVudEluZGV4XSA9IGJhZ1tyYW5kb21JbmRleF07XG4gICAgICAgICAgICBiYWdbcmFuZG9tSW5kZXhdID0gdGVtcG9yYXJ5VmFsdWU7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGJhZztcbiAgICB9XG4gICAgLy8gaW1wbGVtZW50YXRpb24gb2Ygc2h1ZmZsZSBmb3VuZCBvbiBodHRwczovL3N0YWNrb3ZlcmZsb3cuY29tL3F1ZXN0aW9ucy8yNDUwOTU0L2hvdy10by1yYW5kb21pemUtc2h1ZmZsZS1hLWphdmFzY3JpcHQtYXJyYXkjMjQ1MDk3NlxuXG4gICAgX2dhbWVPdmVyKCkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgLy8gbG9vayB0aHJvdWdoIGZpZWxkLCBpZiBmaWVsZFtyb3ddW2NvbF0gY29udGFpbnMgYSBudW1iZXIgPiAwLCBmaWxsIHRoYXQgc3BvdCB3aXRoIHRoZSByZXNwZWN0aXZlIGNvbG9yLiBFbHNlLCByZW1vdmUgY29sb3JcbiAgICByZW5kZXIoKSB7XG4gICAgICAgIGxldCBmaWVsZENvbHVtbnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKGAuZmllbGQtY29sdW1uLmZpZWxkLSR7dGhpcy5nYW1lTnVtfWApO1xuICAgICAgICB0aGlzLmZpZWxkLmZvckVhY2goKHJvdywgcm93SWR4KSA9PiB7XG4gICAgICAgICAgICByb3cuZm9yRWFjaCgoY29sLCBjb2xJZHgpID0+IHtcbiAgICAgICAgICAgICAgICBsZXQgc3F1YXJlVmFsdWUgPSB0aGlzLmZpZWxkW3Jvd0lkeF1bY29sSWR4XTtcbiAgICAgICAgICAgICAgICBpZiAoc3F1YXJlVmFsdWUgPT09ICd4Jykge1xuICAgICAgICAgICAgICAgICAgICBmaWVsZENvbHVtbnNbY29sSWR4XS5jaGlsZHJlbltyb3dJZHhdLmNsYXNzTGlzdC5hZGQoYHgtJHt0aGlzLmNvbG9yc1t0aGlzLmN1cnJlbnRQaWVjZS5jb2xvckNvZGVdfWApO1xuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoc3F1YXJlVmFsdWUpIHtcbiAgICAgICAgICAgICAgICAgICAgZmllbGRDb2x1bW5zW2NvbElkeF0uY2hpbGRyZW5bcm93SWR4XS5jbGFzc0xpc3QuYWRkKHRoaXMuY29sb3JzW3NxdWFyZVZhbHVlXSk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgT2JqZWN0LnZhbHVlcyh0aGlzLmNvbG9ycykuZm9yRWFjaChjb2xvciA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBmaWVsZENvbHVtbnNbY29sSWR4XS5jaGlsZHJlbltyb3dJZHhdLmNsYXNzTGlzdC5yZW1vdmUoY29sb3IpO1xuICAgICAgICAgICAgICAgICAgICAgICAgZmllbGRDb2x1bW5zW2NvbElkeF0uY2hpbGRyZW5bcm93SWR4XS5jbGFzc0xpc3QucmVtb3ZlKGB4LSR7Y29sb3J9YCk7XG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGtleUxpc3RlbmVyKCkge1xuICAgICAgICBkb2N1bWVudC5ib2R5LmFkZEV2ZW50TGlzdGVuZXIoXCJrZXlkb3duXCIsIGV2ZW50ID0+IHtcbiAgICAgICAgICAgIHRoaXMuY3VycmVudFBpZWNlLnNldExlZnRNb3N0QW5kUmlnaHRNb3N0KCk7XG4gICAgICAgICAgICAvLyB0aGlzLmNsZWFyR2hvc3RQb3NpdGlvbigpO1xuICAgICAgICAgICAgc3dpdGNoKGV2ZW50LndoaWNoKSB7XG4gICAgICAgICAgICAgICAgLy8gdXAga2V5XG4gICAgICAgICAgICAgICAgY2FzZSB0aGlzLmNvbnRyb2xzLnR1cm5SaWdodDpcbiAgICAgICAgICAgICAgICAgICAgLy8gcGFzcyBmaWVsZCBzbyBwaWVjZSBjYW4gY2hlY2sgZmllbGQgd2FsbCBiZWZvcmUgdHVybmluZ1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmNsZWFyR2hvc3RQb3NpdGlvbigpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmN1cnJlbnRQaWVjZS5tb3ZlKFwidXBcIiwgdGhpcy5maWVsZCk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMucG9wdWxhdGVGaWVsZCh0aGlzLmN1cnJlbnRQaWVjZSk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0R2hvc3RQb3NpdGlvbigpO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAvLyBDIGtleVxuICAgICAgICAgICAgICAgIGNhc2UgdGhpcy5jb250cm9scy50dXJuTGVmdDpcbiAgICAgICAgICAgICAgICAgICAgLy8gcGFzcyBmaWVsZCBzbyBwaWVjZSBjYW4gY2hlY2sgZmllbGQgd2FsbCBiZWZvcmUgdHVybmluZ1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmNsZWFyR2hvc3RQb3NpdGlvbigpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmN1cnJlbnRQaWVjZS5tb3ZlKFwiQ1wiLCB0aGlzLmZpZWxkKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wb3B1bGF0ZUZpZWxkKHRoaXMuY3VycmVudFBpZWNlKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRHaG9zdFBvc2l0aW9uKCk7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIC8vIGxlZnQga2V5XG4gICAgICAgICAgICAgICAgY2FzZSB0aGlzLmNvbnRyb2xzLmxlZnQ6XG4gICAgICAgICAgICAgICAgICAgIHRoaXMua2V5SGVsZC5sZWZ0ID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuY3VycmVudFBpZWNlLmxlZnRTaWRlQmxvY2tlZCh0aGlzLmZpZWxkKSl7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmNsZWFyR2hvc3RQb3NpdGlvbigpO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRHaG9zdFBvc2l0aW9uKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgfSBcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5tb3ZlUGllY2UodGhpcy5tb3ZlU3BlZWQsIFwibGVmdFwiKTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgLy8gcmlnaHQga2V5XG4gICAgICAgICAgICAgICAgY2FzZSB0aGlzLmNvbnRyb2xzLnJpZ2h0OlxuICAgICAgICAgICAgICAgICAgICB0aGlzLmtleUhlbGQucmlnaHQgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5jdXJyZW50UGllY2UucmlnaHRTaWRlQmxvY2tlZCh0aGlzLmZpZWxkKSl7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmNsZWFyR2hvc3RQb3NpdGlvbigpO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRHaG9zdFBvc2l0aW9uKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB0aGlzLm1vdmVQaWVjZSh0aGlzLm1vdmVTcGVlZCwgXCJyaWdodFwiKTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgLy8gZG93biBrZXlcbiAgICAgICAgICAgICAgICBjYXNlIHRoaXMuY29udHJvbHMuc29mdERyb3A6XG4gICAgICAgICAgICAgICAgICAgIC8vIGlmICghdGhpcy5jdXJyZW50UGllY2UuaXNGYWxsaW5nKHRoaXMuZmllbGQpKSBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5rZXlIZWxkLmRvd24gPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLm1vdmVQaWVjZSh0aGlzLm1vdmVTcGVlZCwgXCJkb3duXCIpO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAvLyBzaGlmdCBrZXlcbiAgICAgICAgICAgICAgICBjYXNlIHRoaXMuY29udHJvbHMuaG9sZDogXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY2xlYXJHaG9zdFBvc2l0aW9uKCk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuaG9sZCgpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnBvcHVsYXRlRmllbGQodGhpcy5jdXJyZW50UGllY2UpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnNldEdob3N0UG9zaXRpb24oKTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgLy8gc3BhY2UgYmFyXG4gICAgICAgICAgICAgICAgY2FzZSB0aGlzLmNvbnRyb2xzLmhhcmREcm9wOlxuICAgICAgICAgICAgICAgICAgICAvLyB0aGlzLnJlbmRlcigpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmNsZWFyR2hvc3RQb3NpdGlvbigpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmN1cnJlbnRQaWVjZS5oYXJkRHJvcCh0aGlzLmZpZWxkKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5yZW5kZXIoKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wb3B1bGF0ZUZpZWxkKHRoaXMuY3VycmVudFBpZWNlKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5oYW5kbGVQaWVjZVN0b3AodGhpcy5oYW5kbGVDbGVhci5kcm9wKTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgLy8gUCBrZXlcbiAgICAgICAgICAgICAgICBjYXNlIDgwOlxuICAgICAgICAgICAgICAgICAgICAvLyB0aGlzLnJlbmRlcigpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmlzUGF1c2VkID8gdGhpcy5kcm9wUGllY2UodGhpcy5kcm9wU3BlZWQpIDogY2FuY2VsQW5pbWF0aW9uRnJhbWUodGhpcy5oYW5kbGVDbGVhci5kcm9wKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5pc1BhdXNlZCA9ICF0aGlzLmlzUGF1c2VkO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmNsZWFyR2hvc3RQb3NpdGlvbigpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnNldEdob3N0UG9zaXRpb24oKTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICAgICAgLy8gdGhpcy5zZXRHaG9zdFBvc2l0aW9uKCk7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5jdXJyZW50UGllY2Uuc2V0TGVmdE1vc3RBbmRSaWdodE1vc3QoKTtcbiAgICAgICAgICAgIC8vIG1lc3NlcyB1cCB3aXRoIHBpZWNlIGNvbG9yXG4gICAgICAgICAgICAvLyB0aGlzLnBvcHVsYXRlRmllbGQodGhpcy5jdXJyZW50UGllY2UpO1xuICAgICAgICAgICAgdGhpcy5yZW5kZXIoKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgZG9jdW1lbnQuYm9keS5hZGRFdmVudExpc3RlbmVyKFwia2V5dXBcIiwgZXZlbnQgPT4ge1xuICAgICAgICAgICAgc3dpdGNoIChldmVudC53aGljaCkge1xuICAgICAgICAgICAgICAgIGNhc2UgdGhpcy5jb250cm9scy5yaWdodDogXG4gICAgICAgICAgICAgICAgICAgIHRoaXMua2V5SGVsZC5yaWdodCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlIHRoaXMuY29udHJvbHMubGVmdDogXG4gICAgICAgICAgICAgICAgICAgIHRoaXMua2V5SGVsZC5sZWZ0ID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgdGhpcy5jb250cm9scy5zb2Z0RHJvcDogXG4gICAgICAgICAgICAgICAgICAgIHRoaXMua2V5SGVsZC5kb3duID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrOyAgXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGNsZWFyTGluZXMobG93ZXN0LCBoaWdoZXN0LCBudW1MaW5lc0NsZWFyZWQpIHtcbiAgICAgICAgLy8gYmFzZSBjYXNlOiBpZiB3ZSByZWFjaCBhIHJvdyB0aGF0IGlzIGhpZ2hlciB0aGFuIHRoZSBoaWdoZXN0LCB0aGVuIHJldHVybiBudW1iZXIgb2YgbGluZXMgdGhhdCB3ZXJlIGNsZWFyZWRcbiAgICAgICAgaWYgKGxvd2VzdCA8IGhpZ2hlc3QpIHtcbiAgICAgICAgICAgIHJldHVybiBudW1MaW5lc0NsZWFyZWQ7XG4gICAgICAgIH07XG4gICAgICAgIC8vIHJlY3Vyc2l2ZSBjYXNlOiBcbiAgICAgICAgLy8gaWYgbG93ZXN0IHJvdyBkb2VzIG5vdCBjb250YWluIGEgMCwgYnJpbmcgYWxsIGFib3ZlIHJvd3MgZG93biBvbmUgbGV2ZWxcbiAgICAgICAgaWYgKCF0aGlzLmZpZWxkW2xvd2VzdF0uaW5jbHVkZXMoMCkpIHtcbiAgICAgICAgICAgIHRoaXMuX2JyaW5nRG93bkZpZWxkKGxvd2VzdCk7XG4gICAgICAgICAgICAvLyBjYWxsIHJlY3Vyc2l2ZUNsZWFyKGxvd2VzdCwgaGlnaGVzdCArIDEpO1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuY2xlYXJMaW5lcyhsb3dlc3QsIGhpZ2hlc3QgKyAxLCBudW1MaW5lc0NsZWFyZWQgKyAxKVxuICAgICAgICAvLyBpZiByb3cgY29udGFpbnMgYSAwIFxuICAgICAgICAvLyBjYWxsIENsZWFyTGluZXMobG93ZXN0IC0gMSwgaGlnaGVzdClcbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLmZpZWxkW2xvd2VzdF0uaW5jbHVkZXMoMCkpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmNsZWFyTGluZXMobG93ZXN0IC0gMSwgaGlnaGVzdCwgbnVtTGluZXNDbGVhcmVkKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIF9icmluZ0Rvd25GaWVsZChzdGFydGluZ1Jvdykge1xuICAgICAgICBmb3IgKGxldCBpID0gc3RhcnRpbmdSb3c7IGkgPiAwOyBpLS0pIHtcbiAgICAgICAgICAgIHRoaXMuZmllbGRbaV0gPSB0aGlzLmZpZWxkW2kgLSAxXTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmZpZWxkWzBdID0gWzAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDBdO1xuICAgIH1cblxuICAgIGhhbmRsZVBpZWNlU3RvcCgpIHsgIFxuICAgICAgICBkZWJ1Z2dlciAgIFxuICAgICAgICAvLyBhbGxvdyBwbGF5ZXIgdG8gaG9sZCBwaWVjZSBhZ2FpblxuICAgICAgICB0aGlzLmNhbkhvbGQgPSB0cnVlO1xuICAgICAgICBsZXQgbG93ZXN0ID0gdGhpcy5jdXJyZW50UGllY2UucG9zaXRpb24uYm90dG9tWzBdWzBdO1xuICAgICAgICAvLyBpbiBjYXNlIG9mIGxpbmUgcGllY2UsIHdoaWNoIG1heSBub3QgaGF2ZSB0aGlzLnBvc2l0aW9uLnRvcFxuICAgICAgICBsZXQgaGlnaGVzdCA9ICF0aGlzLmN1cnJlbnRQaWVjZS5wb3NpdGlvbi50b3AubGVuZ3RoID8gbG93ZXN0IDogdGhpcy5jdXJyZW50UGllY2UucG9zaXRpb24udG9wWzBdWzBdO1xuICAgICAgICBsZXQgbnVtTGluZXNDbGVhcmVkID0gdGhpcy5jbGVhckxpbmVzKGxvd2VzdCwgaGlnaGVzdCwgMCk7XG5cbiAgICAgICAgLy8gaW4gdGhlIGNhc2Ugb2YgbXVsdGlwbGF5ZXIsIHNlbmQgY2xlYXJlZCBsaW5lcyB0byBvcHBvbmVudCBhbmQgcmVjZWl2ZSBwb3RlbnRpYWwgbGluZXNcbiAgICAgICAgaWYgKHRoaXMub3Bwb25lbnQpIHtcbiAgICAgICAgICAgIGlmIChudW1MaW5lc0NsZWFyZWQgPiAwKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5jb21ibyArPSAxO1xuICAgICAgICAgICAgICAgIGxldCBudW1MaW5lcyA9IG51bUxpbmVzQ2xlYXJlZCA9PT0gNCA/IDQgOiBudW1MaW5lc0NsZWFyZWQgLSAxO1xuICAgICAgICAgICAgICAgIG51bUxpbmVzICs9IHRoaXMuY29tYm9HdWlkZVt0aGlzLmNvbWJvXTtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy51cGNvbWluZ0xpbmVzID4gMCkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnVwY29taW5nTGluZXMgLT0gbnVtTGluZXM7XG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLnVwY29taW5nTGluZXMgPCAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm9wcG9uZW50LmFkZExpbmVzVG9RdWV1ZShNYXRoLmFicyh0aGlzLnVwY29taW5nTGluZXMpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMudXBjb21pbmdMaW5lcyA9IDA7XG4gICAgICAgICAgICAgICAgICAgICAgICBhZGp1c3RRdWV1ZUhlaWdodCh0aGlzLmdhbWVOdW0sIDApO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgYWRqdXN0UXVldWVIZWlnaHQodGhpcy5nYW1lTnVtLCB0aGlzLnVwY29taW5nTGluZXMgKiA1KTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMub3Bwb25lbnQuYWRkTGluZXNUb1F1ZXVlKG51bUxpbmVzKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMuY29tYm8gPSAtMTtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy51cGNvbWluZ0xpbmVzID4gMCkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnJlY2VpdmVVcGNvbWluZ0xpbmVzKHRoaXMudXBjb21pbmdMaW5lcyk7XG4gICAgICAgICAgICAgICAgICAgIGFkanVzdFF1ZXVlSGVpZ2h0KHRoaXMuZ2FtZU51bSwgMCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuY2xlYXJHaG9zdENsYXNzKCk7XG4gICAgICAgIGNhbmNlbEFuaW1hdGlvbkZyYW1lKHRoaXMuaGFuZGxlQ2xlYXIuZHJvcCk7XG4gICAgICAgIHRoaXMucGxheSgpO1xuICAgIH1cblxuICAgIGRyb3BQaWVjZShmcHMpIHtcbiAgICAgICAgLy8gRG8gd2hhdGV2ZXJcbiAgICAgICAgdGhpcy5hbmltYXRlLmRyb3AuZnBzSW50ZXJ2YWwgPSAxMDAwIC8gZnBzO1xuICAgICAgICB0aGlzLmFuaW1hdGUuZHJvcC50aGVuID0gRGF0ZS5ub3coKTtcbiAgICAgICAgdGhpcy5hbmltYXRlLmRyb3Auc3RhcnRUaW1lID0gdGhpcy50aGVuO1xuICAgICAgICB0aGlzLmRyb3AoKTtcbiAgICB9XG5cbiAgICAvLyBpbnNwaXJhdGlvbiBmb3IgdGhyb3R0bGluZyByZXF1ZXN0QW5pbWF0aW9uRnJhbWUgZnJvbSBodHRwczovL3N0YWNrb3ZlcmZsb3cuY29tL3F1ZXN0aW9ucy8xOTc2NDAxOC9jb250cm9sbGluZy1mcHMtd2l0aC1yZXF1ZXN0YW5pbWF0aW9uZnJhbWVcbiAgICBkcm9wKCkge1xuICAgICAgICB0aGlzLmhhbmRsZUNsZWFyLmRyb3AgPSByZXF1ZXN0QW5pbWF0aW9uRnJhbWUodGhpcy5kcm9wKTtcbiAgICAgICAgdGhpcy5hbmltYXRlLmRyb3Aubm93ID0gRGF0ZS5ub3coKTtcbiAgICAgICAgbGV0IGVsYXBzZWQgPSB0aGlzLmFuaW1hdGUuZHJvcC5ub3cgLSB0aGlzLmFuaW1hdGUuZHJvcC50aGVuO1xuICAgICAgICBpZiAoZWxhcHNlZCA+IHRoaXMuYW5pbWF0ZS5kcm9wLmZwc0ludGVydmFsKSB7XG4gICAgICAgICAgICAvLyBHZXQgcmVhZHkgZm9yIG5leHQgZnJhbWUgYnkgc2V0dGluZyB0aGVuPW5vdywgYWRqdXN0aW5nIGZvciBzcGVjaWZpZWQgZnBzSW50ZXJ2YWwgbm90IGJlaW5nIGEgbXVsdGlwbGUgb2YgUkFGJ3MgaW50ZXJ2YWwgKDE2LjdtcylcbiAgICAgICAgICAgIHRoaXMuYW5pbWF0ZS5kcm9wLnRoZW4gPSB0aGlzLmFuaW1hdGUuZHJvcC5ub3cgLSAoZWxhcHNlZCAlIHRoaXMuYW5pbWF0ZS5kcm9wLmZwc0ludGVydmFsKTtcbiAgICAgICAgICAgIHRoaXMucG9wdWxhdGVGaWVsZCh0aGlzLmN1cnJlbnRQaWVjZSk7XG4gICAgICAgICAgICB0aGlzLnJlbmRlcigpO1xuICAgICAgICAgICAgaWYgKCF0aGlzLmN1cnJlbnRQaWVjZS5pc0ZhbGxpbmcodGhpcy5maWVsZCkpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmhhbmRsZVBpZWNlU3RvcCh0aGlzLmhhbmRsZUNsZWFyLmRyb3ApO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5jdXJyZW50UGllY2UuZHJvcCgpO1xuICAgICAgICAgICAgdGhpcy5wb3B1bGF0ZUZpZWxkKHRoaXMuY3VycmVudFBpZWNlKTsgLy8ga2VlcCBvbmx5IG9uZSBwb3B1bGF0ZSBmaWVsZD9cbiAgICAgICAgICAgIHRoaXMucmVuZGVyKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBtb3ZlUGllY2UoZnBzLCBkaXJlY3Rpb24pIHtcbiAgICAgICAgLy8gRG8gd2hhdGV2ZXJcbiAgICAgICAgdGhpcy5hbmltYXRlW2RpcmVjdGlvbl0uZnBzSW50ZXJ2YWwgPSAxMDAwIC8gZnBzO1xuICAgICAgICB0aGlzLmFuaW1hdGVbZGlyZWN0aW9uXS50aGVuID0gRGF0ZS5ub3coKTtcbiAgICAgICAgdGhpcy5hbmltYXRlW2RpcmVjdGlvbl0uc3RhcnRUaW1lID0gdGhpcy5hbmltYXRlW2RpcmVjdGlvbl0udGhlbjtcbiAgICAgICAgdGhpcy5tb3ZlKGRpcmVjdGlvbik7XG4gICAgfVxuXG4gICAgLy8gaW5zcGlyYXRpb24gZm9yIHRocm90dGxpbmcgcmVxdWVzdEFuaW1hdGlvbkZyYW1lIGZyb20gaHR0cHM6Ly9zdGFja292ZXJmbG93LmNvbS9xdWVzdGlvbnMvMTk3NjQwMTgvY29udHJvbGxpbmctZnBzLXdpdGgtcmVxdWVzdGFuaW1hdGlvbmZyYW1lXG4gICAgbW92ZShkaXJlY3Rpb24pIHtcbiAgICAgICAgdGhpcy5oYW5kbGVDbGVhcltkaXJlY3Rpb25dID0gcmVxdWVzdEFuaW1hdGlvbkZyYW1lKCgpID0+IHRoaXMubW92ZShkaXJlY3Rpb24pKTtcbiAgICAgICAgaWYgKCF0aGlzLmtleUhlbGRbZGlyZWN0aW9uXSkgY2FuY2VsQW5pbWF0aW9uRnJhbWUodGhpcy5oYW5kbGVDbGVhcltkaXJlY3Rpb25dKTtcbiAgICAgICAgdGhpcy5hbmltYXRlW2RpcmVjdGlvbl0ubm93ID0gRGF0ZS5ub3coKTtcbiAgICAgICAgbGV0IGVsYXBzZWQgPSB0aGlzLmFuaW1hdGVbZGlyZWN0aW9uXS5ub3cgLSB0aGlzLmFuaW1hdGVbZGlyZWN0aW9uXS50aGVuO1xuICAgICAgICBpZiAoZWxhcHNlZCA+IHRoaXMuYW5pbWF0ZVtkaXJlY3Rpb25dLmZwc0ludGVydmFsKSB7XG4gICAgICAgICAgICAvLyBHZXQgcmVhZHkgZm9yIG5leHQgZnJhbWUgYnkgc2V0dGluZyB0aGVuPW5vdywgYWRqdXN0aW5nIGZvciBzcGVjaWZpZWQgZnBzSW50ZXJ2YWwgbm90IGJlaW5nIGEgbXVsdGlwbGUgb2YgUkFGJ3MgaW50ZXJ2YWwgKDE2LjdtcylcbiAgICAgICAgICAgIHRoaXMuYW5pbWF0ZVtkaXJlY3Rpb25dLnRoZW4gPSB0aGlzLmFuaW1hdGVbZGlyZWN0aW9uXS5ub3cgLSAoZWxhcHNlZCAlIHRoaXMuYW5pbWF0ZVtkaXJlY3Rpb25dLmZwc0ludGVydmFsKTtcblxuICAgICAgICAgICAgXG4gICAgICAgICAgICAvLyBwcmV2ZW50IHBpZWNlIGZyb20gbW92aW5nIGlmIGl0IGlzIGJsb2NrZWQgb3IgaWYgYm90aCBsZWZ0IGFuZCByaWdodCBhcnJvdyBrZXlzIGFyZSBoZWxkIGRvd25cbiAgICAgICAgICAgIGlmIChcbiAgICAgICAgICAgICAgICBkaXJlY3Rpb24gPT09IFwicmlnaHRcIiAmJiB0aGlzLmN1cnJlbnRQaWVjZS5yaWdodFNpZGVCbG9ja2VkKHRoaXMuZmllbGQpIFxuICAgICAgICAgICAgICAgIHx8IFxuICAgICAgICAgICAgICAgIGRpcmVjdGlvbiA9PT0gXCJsZWZ0XCIgJiYgdGhpcy5jdXJyZW50UGllY2UubGVmdFNpZGVCbG9ja2VkKHRoaXMuZmllbGQpIFxuICAgICAgICAgICAgICAgIHx8IFxuICAgICAgICAgICAgICAgIGRpcmVjdGlvbiA9PT0gXCJkb3duXCIgJiYgIXRoaXMuY3VycmVudFBpZWNlLmlzRmFsbGluZyh0aGlzLmZpZWxkKVxuICAgICAgICAgICAgICAgIHx8IFxuICAgICAgICAgICAgICAgIHRoaXMua2V5SGVsZC5yaWdodCAmJiB0aGlzLmtleUhlbGQubGVmdFxuICAgICAgICAgICAgKSB7IFxuICAgICAgICAgICAgICAgIHRoaXMuY2xlYXJHaG9zdFBvc2l0aW9uKCk7XG4gICAgICAgICAgICAgICAgdGhpcy5zZXRHaG9zdFBvc2l0aW9uKCk7XG4gICAgICAgICAgICAgICAgcmV0dXJuOyBcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMuY3VycmVudFBpZWNlLm1vdmUoZGlyZWN0aW9uKTtcbiAgICAgICAgICAgIHRoaXMucG9wdWxhdGVGaWVsZCh0aGlzLmN1cnJlbnRQaWVjZSk7XG4gICAgICAgICAgICB0aGlzLmNsZWFyR2hvc3RQb3NpdGlvbigpO1xuICAgICAgICAgICAgdGhpcy5zZXRHaG9zdFBvc2l0aW9uKCk7XG4gICAgICAgICAgICB0aGlzLnJlbmRlcigpO1xuICAgICAgICAgICAgLy8gYnJlYWs7XG4gICAgICAgIH1cbiAgICB9XG4gICAgXG4gICAgcGxheSgpIHtcbiAgICAgICAgdGhpcy5zZXRDdXJyZW50UGllY2UoKTtcbiAgICAgICAgdGhpcy5wb3B1bGF0ZUZpZWxkKHRoaXMuY3VycmVudFBpZWNlKTtcbiAgICAgICAgdGhpcy5fYWRkVG9DdXJyZW50QmFnKCk7XG4gICAgICAgIHRoaXMuX3Nob3dDdXJyZW50QmFnKCk7XG4gICAgICAgIGlmICghdGhpcy5uZXh0QmFnLmxlbmd0aCkgdGhpcy5fcmVmaWxsTmV4dEJhZygpO1xuICAgICAgICB0aGlzLnNldEdob3N0UG9zaXRpb24oKTtcbiAgICAgICAgLy8gZHJvcCBwaWVjZSBhdCBnaXZlbiBmcHNcbiAgICAgICAgdGhpcy5kcm9wUGllY2UoMSk7XG4gICAgfVxuXG5cblxuICAgIC8vIG11bHRpcGxheWVyIFxuICAgIHNldE9wcG9uZW50KHBsYXllcikge1xuICAgICAgICB0aGlzLm9wcG9uZW50ID0gcGxheWVyO1xuICAgIH1cblxuICAgIGFkZExpbmVzVG9RdWV1ZShudW1MaW5lcykge1xuICAgICAgICBkZWJ1Z2dlclxuICAgICAgICB0aGlzLnVwY29taW5nTGluZXMgKz0gbnVtTGluZXM7XG4gICAgICAgIGxldCBwZXJjZW50YWdlID0gdGhpcy51cGNvbWluZ0xpbmVzICogNTtcbiAgICAgICAgYWRqdXN0UXVldWVIZWlnaHQodGhpcy5nYW1lTnVtLCBwZXJjZW50YWdlKTtcbiAgICB9XG5cbiAgICByZWNlaXZlVXBjb21pbmdMaW5lcygpIHtcbiAgICAgICAgbGV0IGdhcmJhZ2VMaW5lcyA9IFtdO1xuICAgICAgICBsZXQgbnVtTGluZXMgPSB0aGlzLnVwY29taW5nTGluZXM7XG4gICAgICAgIGxldCByYW5kb21Ib2xlO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IG51bUxpbmVzOyBpKyspIHtcbiAgICAgICAgICAgIGlmIChpICUgMiA9PT0gMCkgcmFuZG9tSG9sZSA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDkpO1xuICAgICAgICAgICAgbGV0IGdhcmJhZ2VSb3cgPSBbOCwgOCwgOCwgOCwgOCwgOCwgOCwgOCwgOCwgOF07XG4gICAgICAgICAgICBnYXJiYWdlUm93W3JhbmRvbUhvbGVdID0gMDtcbiAgICAgICAgICAgIGdhcmJhZ2VMaW5lcy5wdXNoKGdhcmJhZ2VSb3cpO1xuICAgICAgICB9XG4gICAgICAgIC8vIGlmIHBsYXllciByZWFjaGVzIHRoZSB0b3AsIHBsYXllciBsb3Nlc1xuICAgICAgICAvLyBzbGljZSBhbGxvd3MgcGxheWVyIHRvIGNvbnRpbnVlIHBsYXlpbmcgaWYgdG9wIG1pZGRsZSBpcyBjbGVhclxuICAgICAgICBpZiAoIXRoaXMuZmllbGRbbnVtTGluZXMgLSAxXS5zbGljZSgyLDcpLmluY2x1ZGVzKDApKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcImxvc3RcIik7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5maWVsZCA9IHRoaXMuZmllbGQuc2xpY2UobnVtTGluZXMsIDIwKS5jb25jYXQoZ2FyYmFnZUxpbmVzKTtcbiAgICAgICAgdGhpcy51cGNvbWluZ0xpbmVzID0gMDtcbiAgICAgICAgdGhpcy5yZW5kZXIoKTtcbiAgICB9XG5cbn0iLCJpbXBvcnQgR2FtZSBmcm9tICcuL2dhbWUvZ2FtZSc7XG5pbXBvcnQgRmllbGQgZnJvbSAnLi9maWVsZC9maWVsZCc7XG5pbXBvcnQgTXVsdGlwbGF5ZXIgZnJvbSAnLi9tdWx0aXBsYXllci9tdWx0aXBsYXllcic7XG5cbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsICgpID0+IHtcbiAgICBjb25zdCBmaWVsZENvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZmllbGQtY29udGFpbmVyXCIpO1xuICAgIGNvbnN0IGZpZWxkQ29udGFpbmVyMiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZmllbGQtY29udGFpbmVyLTJcIik7XG5cbiAgICBsZXQgZmllbGQgPSBuZXcgRmllbGQoMSk7XG4gICAgbGV0IGZpZWxkMiA9IG5ldyBGaWVsZCgyKTtcbiAgICBmaWVsZC5jcmVhdGVDb21wbGV0ZUZpZWxkKGZpZWxkQ29udGFpbmVyKTtcbiAgICBmaWVsZDIuY3JlYXRlQ29tcGxldGVGaWVsZChmaWVsZENvbnRhaW5lcjIpO1xuXG4gICAgLy8gbGV0IG9wdGlvbnNQbGF5ZXIxID0geyBnYW1lTnVtOiAxLCBtb3ZlU3BlZWQ6IDIwLCBjb250cm9sczogeyBsZWZ0OiAzNywgcmlnaHQ6IDM5LCB0dXJuUmlnaHQ6IDM4LCBzb2Z0RHJvcDogNDAsIGhvbGQ6IDE5MSwgdHVybkxlZnQ6IDc2LCBoYXJkRHJvcDogMTggfSB9XG4gICAgbGV0IG9wdGlvbnNQbGF5ZXIxID0geyBnYW1lTnVtOiAxLCBtb3ZlU3BlZWQ6IDIwLCBjb250cm9sczogeyBsZWZ0OiAzNywgcmlnaHQ6IDM5LCB0dXJuUmlnaHQ6IDM4LCBzb2Z0RHJvcDogNDAsIGhvbGQ6IDE2LCB0dXJuTGVmdDogNjcsIGhhcmREcm9wOiAzMiB9IH1cbiAgICBsZXQgb3B0aW9uc1BsYXllcjIgPSB7IGdhbWVOdW06IDIsIG1vdmVTcGVlZDogMjAsIGNvbnRyb2xzOiB7IGxlZnQ6IDE4OCwgcmlnaHQ6IDE5MSwgdHVyblJpZ2h0OiA3Niwgc29mdERyb3A6IDE5MCwgaG9sZDogNzUsIHR1cm5MZWZ0OiA4NywgaGFyZERyb3A6IDE4IH0gfVxuXG4gICAgbGV0IGdhbWUxID0gbmV3IEdhbWUob3B0aW9uc1BsYXllcjEpO1xuICAgIGdhbWUxLmtleUxpc3RlbmVyKCk7XG4gICAgLy8gZ2FtZTEucGxheShmaWVsZENvbnRhaW5lcik7XG5cbiAgICBsZXQgZ2FtZTIgPSBuZXcgR2FtZShvcHRpb25zUGxheWVyMik7XG4gICAgZ2FtZTIua2V5TGlzdGVuZXIoKTtcbiAgICAvLyBnYW1lMi5wbGF5KGZpZWxkQ29udGFpbmVyKTtcblxuICAgIGxldCBtdWx0aXBsYXllck1vZGUgPSBuZXcgTXVsdGlwbGF5ZXIoZ2FtZTEsIGdhbWUyKTtcbiAgICBtdWx0aXBsYXllck1vZGUuc3RhcnRNdWx0aXBsYXllcigpO1xuXG59KTsiLCJpbXBvcnQgR2FtZSBmcm9tICcuLi9nYW1lL2dhbWUnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNdWx0aXBsYXllciB7XG4gICAgY29uc3RydWN0b3IocGxheWVyMSwgcGxheWVyMikge1xuICAgICAgICB0aGlzLnBsYXllcjEgPSBwbGF5ZXIxO1xuICAgICAgICB0aGlzLnBsYXllcjIgPSBwbGF5ZXIyO1xuICAgIH1cblxuICAgIHN0YXJ0TXVsdGlwbGF5ZXIoKSB7XG4gICAgICAgIHRoaXMucGxheWVyMS5zZXRPcHBvbmVudCh0aGlzLnBsYXllcjIpO1xuICAgICAgICB0aGlzLnBsYXllcjIuc2V0T3Bwb25lbnQodGhpcy5wbGF5ZXIxKTtcbiAgICAgICAgdGhpcy5wbGF5ZXIxLnBsYXkoKTtcbiAgICAgICAgdGhpcy5wbGF5ZXIyLnBsYXkoKTtcbiAgICB9XG59XG5cbi8vIG11bHRpcGxheWVyLmpzKGdhbWUxLCBnYW1lMikge1xuLy8gICAgIGlmIGdhbWUxLnNlbnRMaW5lcyA/XG4vLyAgICAgICAgIGdhbWUyLmFkZExpbmVzXG4vLyBcdGlmIGdhbWUyLnNlbnRMaW5lcyA/XG4vLyAgICAgICAgICAgICBnYW1lMS5hZGRMaW5lc1xuXG4vLyBcdGdhbWUxIHtcbi8vICAgICAgICAgdGhpcy5vcHBvbmVudCA9IOKAmOKAmTtcbi8vICAgICAgICAgdGhpcy5tdWx0aXBsYXllciA9IOKAnOKAnTtcbi8vICAgICB9XG5cbi8vICAgICBnYW1lMSA9IG5ld0dhbWUocGFyYW1zKVxuLy8gICAgIGdhbWUyID0gbmV3R2FtZShwYXJhbXMpXG5cbi8vICAgICBnYW1lMS5zZXQoZ2FtZTIpIHtcbi8vICAgICAgICAgd2lsbCBzZXQgbXVsdGlwbGF5ZXIgdG8gdHJ1ZSBhbmQgb3Bwb25lbnQgdG8gb3RoZXIgZ2FtZVxuLy8gICAgIH0iLCJpbXBvcnQgUGllY2UgZnJvbSAnLi9waWVjZSc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIElQaWVjZSBleHRlbmRzIFBpZWNlIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgdGhpcy5uYW1lID0gXCJJUGllY2VcIjtcbiAgICAgICAgdGhpcy5wb3NpdGlvbiA9IHtcbiAgICAgICAgICAgIHRvcDogW10sXG4gICAgICAgICAgICBtaWRkbGU6IFtdLFxuICAgICAgICAgICAgYm90dG9tOiBbWzEsIDNdLCBbMSwgNF0sIFsxLCA1XSwgWzEsIDZdXVxuICAgICAgICB9O1xuICAgICAgICB0aGlzLmNvbG9yQ29kZSA9IDI7XG4gICAgICAgIHRoaXMudHVybmluZ1BvaW50ID0gWzEsIDVdO1xuICAgICAgICB0aGlzLmRpc3BsYXlTcXVhcmVzID0gW1swLCAyXSwgWzEsIDJdLCBbMiwgMl0sIFszLCAyXV07XG5cbiAgICAgICAgdGhpcy5yZW1vdmVTcXVhcmVzID0gW107XG4gICAgfVxuXG5cbn1cblxuXG4iLCJpbXBvcnQgUGllY2UgZnJvbSAnLi9waWVjZSc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIGpQaWVjZSBleHRlbmRzIFBpZWNlIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgdGhpcy5uYW1lID0gXCJKUGllY2VcIjtcbiAgICAgICAgdGhpcy5wb3NpdGlvbiA9IHtcbiAgICAgICAgICAgIHRvcDogW1swLCAzXV0sXG4gICAgICAgICAgICBtaWRkbGU6IFtdLFxuICAgICAgICAgICAgYm90dG9tOiBbWzEsIDNdLCBbMSwgNF0sIFsxLCA1XV1cbiAgICAgICAgfTtcbiAgICAgICAgdGhpcy5jb2xvckNvZGUgPSA3O1xuXG4gICAgICAgIHRoaXMudHVybmluZ1BvaW50ID0gWzEsIDRdO1xuXG4gICAgICAgIHRoaXMuZGlzcGxheVNxdWFyZXMgPSBbWzEsIDFdLCBbMSwgMl0sIFsyLCAyXSwgWzMsIDJdXTtcbiBcbiAgICAgICAgdGhpcy5yZW1vdmVTcXVhcmVzID0gW107XG4gICAgfVxufSIsImltcG9ydCBQaWVjZSBmcm9tICcuL3BpZWNlJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgbFBpZWNlIGV4dGVuZHMgUGllY2Uge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICB0aGlzLm5hbWUgPSBcIkxQaWVjZVwiO1xuICAgICAgICB0aGlzLnBvc2l0aW9uID0ge1xuICAgICAgICAgICAgdG9wOiBbWzAsIDVdXSxcbiAgICAgICAgICAgIG1pZGRsZTogW10sXG4gICAgICAgICAgICBib3R0b206IFtbMSwgM10sIFsxLCA0XSwgWzEsIDVdXVxuICAgICAgICB9O1xuICAgICAgICB0aGlzLmNvbG9yQ29kZSA9IDY7XG5cbiAgICAgICAgdGhpcy50dXJuaW5nUG9pbnQgPSBbMSwgNF07XG5cbiAgICAgICAgdGhpcy5kaXNwbGF5U3F1YXJlcyA9IFtbMSwgMl0sIFsyLCAyXSwgWzMsIDJdLCBbMywgMV1dO1xuXG4gICAgICAgIHRoaXMucmVtb3ZlU3F1YXJlcyA9IFtdO1xuICAgIH1cbn0iLCJpbXBvcnQgUGllY2UgZnJvbSAnLi9waWVjZSc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE9QaWVjZSBleHRlbmRzIFBpZWNlIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgdGhpcy5uYW1lID0gXCJPUGllY2VcIjtcbiAgICAgICAgdGhpcy5wb3NpdGlvbiA9IHtcbiAgICAgICAgICAgIHRvcDogW1swLCA0XSwgWzAsIDVdXSxcbiAgICAgICAgICAgIG1pZGRsZTogW10sXG4gICAgICAgICAgICBib3R0b206IFtbMSwgNF0sWzEsIDVdXVxuICAgICAgICB9O1xuICAgICAgICB0aGlzLmNvbG9yQ29kZSA9IDE7XG4gICAgICAgIHRoaXMudHVybmluZ1BvaW50ID0gWzEsIDRdO1xuICAgICAgICB0aGlzLmRpc3BsYXlTcXVhcmVzID0gW1sxLCAxXSwgWzIsIDFdLCBbMSwgMl0sIFsyLCAyXV07XG5cbiAgICAgICAgdGhpcy5yZW1vdmVTcXVhcmVzID0gW107XG4gICAgfVxuXG4gICAgLy8gT1BpZWNlIGRvZXMgbm90IHR1cm5cbiAgICB0dXJuUmlnaHQoKSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG59ICIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIFBpZWNlIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5sZWZ0TW9zdCA9ICcnO1xuICAgICAgICB0aGlzLnJpZ2h0TW9zdCA9ICcnO1xuICAgIH1cblxuICAgIHNldExlZnRNb3N0QW5kUmlnaHRNb3N0KCkge1xuICAgICAgICBsZXQgbGVmdE1vc3Q7XG4gICAgICAgIGxldCByaWdodE1vc3Q7XG4gICAgICAgIE9iamVjdC52YWx1ZXModGhpcy5wb3NpdGlvbikuZm9yRWFjaChjb29yZGluYXRlc0FycmF5ID0+IGNvb3JkaW5hdGVzQXJyYXkuZm9yRWFjaChhcnJheSA9PiB7XG4gICAgICAgICAgICBsZXQgY29sdW1uVmFsdWUgPSBhcnJheVsxXTtcbiAgICAgICAgICAgIGlmICghbGVmdE1vc3QpIGxlZnRNb3N0ID0gY29sdW1uVmFsdWU7XG4gICAgICAgICAgICBpZiAoIXJpZ2h0TW9zdCkgcmlnaHRNb3N0ID0gY29sdW1uVmFsdWU7XG4gICAgICAgICAgICBpZiAoY29sdW1uVmFsdWUgPCBsZWZ0TW9zdCkgbGVmdE1vc3QgPSBjb2x1bW5WYWx1ZTtcbiAgICAgICAgICAgIGlmIChjb2x1bW5WYWx1ZSA+IHJpZ2h0TW9zdCkgcmlnaHRNb3N0ID0gY29sdW1uVmFsdWU7XG4gICAgICAgIH0pKTtcbiAgICAgICAgdGhpcy5sZWZ0TW9zdCA9IGxlZnRNb3N0O1xuICAgICAgICB0aGlzLnJpZ2h0TW9zdCA9IHJpZ2h0TW9zdDtcbiAgICB9XG5cbiAgICBfcG9wdWxhdGVGaWVsZChmaWVsZCkge1xuICAgICAgICBcbiAgICAgICAgbGV0IGNvb3JkaW5hdGVBcnJheXMgPSBPYmplY3QudmFsdWVzKHRoaXMucG9zaXRpb24pO1xuXG4gICAgICAgIGNvb3JkaW5hdGVBcnJheXMuZm9yRWFjaChhcnJheSA9PiB7XG4gICAgICAgICAgICBhcnJheS5mb3JFYWNoKGNvb3JkaW5hdGUgPT4ge1xuICAgICAgICAgICAgICAgIGxldCBbcm93LCBjb2xdID0gW2Nvb3JkaW5hdGVbMF0sIGNvb3JkaW5hdGVbMV1dO1xuICAgICAgICAgICAgICAgIGZpZWxkW3Jvd11bY29sXSA9IHRoaXMuY29sb3JDb2RlO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgfSk7XG5cbiAgICAgICAgdGhpcy5yZW1vdmVTcXVhcmVzLmZvckVhY2gocG9zaXRpb25BcnJheSA9PiB7XG4gICAgICAgICAgICBsZXQgW3JvdywgY29sXSA9IFtwb3NpdGlvbkFycmF5WzBdLCBwb3NpdGlvbkFycmF5WzFdXTtcbiAgICAgICAgICAgIGZpZWxkW3Jvd11bY29sXSA9IDA7XG4gICAgICAgIH0pO1xuICAgICAgICBcbiAgICB9XG5cbiAgICAvLyBjb21wYXJlcyB0d28gYXJyYXlzIG9mIGNvb3JkaW5hdGVzIGFuZCBjaGVjayBpZiB0aGV5IGhhdmUgdGhlIHNhbWUgY29udGVudCBpbiB0aGUgc2FtZSBvcmRlclxuICAgIF9zcXVhcmVzQXJlRXF1YWwob2xkU3F1YXJlLCBuZXdTcXVhcmUpIHtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBvbGRTcXVhcmUubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGlmIChvbGRTcXVhcmVbaV0gIT09IG5ld1NxdWFyZVtpXSkgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cblxuICAgIF9pbmNsdWRlcyhzcXVhcmUsIGNvb3JkaW5hdGVBcnJheXMpIHtcbiAgICAgICAgbGV0IHJlc3VsdCA9IGZhbHNlO1xuICAgICAgICBjb29yZGluYXRlQXJyYXlzLmZvckVhY2goYXJyYXkgPT4ge1xuICAgICAgICAgICAgaWYgKHRoaXMuX3NxdWFyZXNBcmVFcXVhbChzcXVhcmUsIGFycmF5KSkge1xuICAgICAgICAgICAgICAgIHJlc3VsdCA9IHRydWU7IFxuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG5cbiAgICBkcm9wKCkge1xuICAgICAgICBsZXQgb2xkUG9zaXRpb24gPSB7XG4gICAgICAgICAgICB0b3A6IHRoaXMucG9zaXRpb24udG9wLm1hcChhcnJheSA9PiBhcnJheS5zbGljZSgpKSxcbiAgICAgICAgICAgIG1pZGRsZTogdGhpcy5wb3NpdGlvbi5taWRkbGUubWFwKGFycmF5ID0+IGFycmF5LnNsaWNlKCkpLFxuICAgICAgICAgICAgYm90dG9tOiB0aGlzLnBvc2l0aW9uLmJvdHRvbS5tYXAoYXJyYXkgPT4gYXJyYXkuc2xpY2UoKSksXG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLnBvc2l0aW9uLnRvcCA9IHRoaXMucG9zaXRpb24udG9wLm1hcChhcnJheSA9PiBbYXJyYXlbMF0gKyAxLCBhcnJheVsxXV0pO1xuICAgICAgICB0aGlzLnBvc2l0aW9uLm1pZGRsZSA9IHRoaXMucG9zaXRpb24ubWlkZGxlLm1hcChhcnJheSA9PiBbYXJyYXlbMF0gKyAxLCBhcnJheVsxXV0pO1xuICAgICAgICB0aGlzLnBvc2l0aW9uLmJvdHRvbSA9IHRoaXMucG9zaXRpb24uYm90dG9tLm1hcChhcnJheSA9PiBbYXJyYXlbMF0gKyAxLCBhcnJheVsxXV0pO1xuICAgICAgICB0aGlzLnR1cm5pbmdQb2ludCA9IFt0aGlzLnR1cm5pbmdQb2ludFswXSArIDEsIHRoaXMudHVybmluZ1BvaW50WzFdXTtcblxuICAgICAgICB0aGlzLnNldFJlbW92ZVNxdWFyZXMob2xkUG9zaXRpb24pO1xuICAgIH1cblxuICAgIC8vIGZpbmQgaGlnaGVzdCBwb3NzaWJsZSBncm91bmQtcG9zaXRpb24gZm9yIHBpZWNlXG4gICAgaGFyZERyb3AoZmllbGQpIHtcbiAgICAgICAgdGhpcy5jbGVhclNlbGZGcm9tQm9hcmQoZmllbGQpO1xuICAgICAgICBsZXQgc3RvcHBlZCA9IGZhbHNlO1xuICAgICAgICB3aGlsZSghc3RvcHBlZCkge1xuICAgICAgICAgICAgbGV0IGhhbmdpbmdTcXVhcmVzID0gdGhpcy5oYW5naW5nU3F1YXJlcyh0aGlzLnBvc2l0aW9uKTtcbiAgICAgICAgICAgIGhhbmdpbmdTcXVhcmVzLmZvckVhY2goY29vcmRpbmF0ZSA9PiB7XG4gICAgICAgICAgICAgICAgbGV0IFtyb3csIGNvbF0gPSBbY29vcmRpbmF0ZVswXSwgY29vcmRpbmF0ZVsxXV07XG4gICAgICAgICAgICAgICAgaWYgKChyb3cgKyAxID09PSAyMCB8fCBmaWVsZFtyb3cgKyAxXVtjb2xdKSkgc3RvcHBlZCA9IHRydWU7XG4gICAgICAgICAgICB9KTsgXG4gICAgICAgICAgICBpZiAoc3RvcHBlZCkgYnJlYWs7XG4gICAgICAgICAgICB0aGlzLnBvc2l0aW9uLnRvcCA9IHRoaXMucG9zaXRpb24udG9wLm1hcChhcnJheSA9PiBbYXJyYXlbMF0gKyAxLCBhcnJheVsxXV0pO1xuICAgICAgICAgICAgdGhpcy5wb3NpdGlvbi5taWRkbGUgPSB0aGlzLnBvc2l0aW9uLm1pZGRsZS5tYXAoYXJyYXkgPT4gW2FycmF5WzBdICsgMSwgYXJyYXlbMV1dKTtcbiAgICAgICAgICAgIHRoaXMucG9zaXRpb24uYm90dG9tID0gdGhpcy5wb3NpdGlvbi5ib3R0b20ubWFwKGFycmF5ID0+IFthcnJheVswXSArIDEsIGFycmF5WzFdXSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjbGVhclNlbGZGcm9tQm9hcmQoZmllbGQpIHtcbiAgICAgICAgT2JqZWN0LnZhbHVlcyh0aGlzLnBvc2l0aW9uKS5mb3JFYWNoKGNvb3JkaW5hdGVBcnJheXMgPT4gY29vcmRpbmF0ZUFycmF5cy5mb3JFYWNoKGNvb3JkaW5hdGUgPT4ge1xuICAgICAgICAgICAgbGV0IHJvdyA9IGNvb3JkaW5hdGVbMF07XG4gICAgICAgICAgICBsZXQgY29sID0gY29vcmRpbmF0ZVsxXTtcbiAgICAgICAgICAgIGZpZWxkW3Jvd11bY29sXSA9IDA7XG4gICAgICAgIH0pKTtcbiAgICB9XG5cbiAgICBtb3ZlKGRpcmVjdGlvbiwgZmllbGQpIHtcbiAgICAgICAgbGV0IG9sZFBvc2l0aW9uID0ge1xuICAgICAgICAgICAgdG9wOiB0aGlzLnBvc2l0aW9uLnRvcC5tYXAoYXJyYXkgPT4gYXJyYXkuc2xpY2UoKSksXG4gICAgICAgICAgICBtaWRkbGU6IHRoaXMucG9zaXRpb24ubWlkZGxlLm1hcChhcnJheSA9PiBhcnJheS5zbGljZSgpKSxcbiAgICAgICAgICAgIGJvdHRvbTogdGhpcy5wb3NpdGlvbi5ib3R0b20ubWFwKGFycmF5ID0+IGFycmF5LnNsaWNlKCkpLFxuICAgICAgICB9XG4gICAgICAgIHN3aXRjaChkaXJlY3Rpb24pIHtcbiAgICAgICAgICAgIGNhc2UgXCJsZWZ0XCI6ICBcbiAgICAgICAgICAgICAgICB0aGlzLnBvc2l0aW9uLnRvcCA9IHRoaXMucG9zaXRpb24udG9wLm1hcChhcnJheSA9PiBbYXJyYXlbMF0sIGFycmF5WzFdIC0gMV0pO1xuICAgICAgICAgICAgICAgIHRoaXMucG9zaXRpb24ubWlkZGxlID0gdGhpcy5wb3NpdGlvbi5taWRkbGUubWFwKGFycmF5ID0+IFthcnJheVswXSwgYXJyYXlbMV0gLSAxXSk7XG4gICAgICAgICAgICAgICAgdGhpcy5wb3NpdGlvbi5ib3R0b20gPSB0aGlzLnBvc2l0aW9uLmJvdHRvbS5tYXAoYXJyYXkgPT4gW2FycmF5WzBdLCBhcnJheVsxXSAtIDFdKTtcbiAgICAgICAgICAgICAgICB0aGlzLnR1cm5pbmdQb2ludCA9IFt0aGlzLnR1cm5pbmdQb2ludFswXSwgdGhpcy50dXJuaW5nUG9pbnRbMV0gLSAxXTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgXCJ1cFwiOlxuICAgICAgICAgICAgICAgIC8vIGRlZmVyIHRvIHN1YmNsYXNzIFwidHVyblwiIG1ldGhvZFxuICAgICAgICAgICAgICAgIHRoaXMudHVyblJpZ2h0KGZpZWxkKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgXCJyaWdodFwiOlxuICAgICAgICAgICAgICAgIHRoaXMucG9zaXRpb24udG9wID0gdGhpcy5wb3NpdGlvbi50b3AubWFwKGFycmF5ID0+IFthcnJheVswXSwgYXJyYXlbMV0gKyAxXSk7XG4gICAgICAgICAgICAgICAgdGhpcy5wb3NpdGlvbi5taWRkbGUgPSB0aGlzLnBvc2l0aW9uLm1pZGRsZS5tYXAoYXJyYXkgPT4gW2FycmF5WzBdLCBhcnJheVsxXSArIDFdKTtcbiAgICAgICAgICAgICAgICB0aGlzLnBvc2l0aW9uLmJvdHRvbSA9IHRoaXMucG9zaXRpb24uYm90dG9tLm1hcChhcnJheSA9PiBbYXJyYXlbMF0sIGFycmF5WzFdICsgMV0pO1xuICAgICAgICAgICAgICAgIHRoaXMudHVybmluZ1BvaW50ID0gW3RoaXMudHVybmluZ1BvaW50WzBdLCB0aGlzLnR1cm5pbmdQb2ludFsxXSArIDFdO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBcImRvd25cIjpcbiAgICAgICAgICAgICAgICB0aGlzLnBvc2l0aW9uLnRvcCA9IHRoaXMucG9zaXRpb24udG9wLm1hcChhcnJheSA9PiBbYXJyYXlbMF0gKyAxLCBhcnJheVsxXV0pO1xuICAgICAgICAgICAgICAgIHRoaXMucG9zaXRpb24ubWlkZGxlID0gdGhpcy5wb3NpdGlvbi5taWRkbGUubWFwKGFycmF5ID0+IFthcnJheVswXSArIDEsIGFycmF5WzFdXSk7XG4gICAgICAgICAgICAgICAgdGhpcy5wb3NpdGlvbi5ib3R0b20gPSB0aGlzLnBvc2l0aW9uLmJvdHRvbS5tYXAoYXJyYXkgPT4gW2FycmF5WzBdICsgMSwgYXJyYXlbMV1dKTtcbiAgICAgICAgICAgICAgICB0aGlzLnR1cm5pbmdQb2ludCA9IFt0aGlzLnR1cm5pbmdQb2ludFswXSArIDEsIHRoaXMudHVybmluZ1BvaW50WzFdXTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgXCJDXCI6XG4gICAgICAgICAgICAgICAgdGhpcy50dXJuTGVmdChmaWVsZCk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5zZXRSZW1vdmVTcXVhcmVzKG9sZFBvc2l0aW9uKTtcbiAgICB9XG5cbiAgICB0dXJuUmlnaHQoZmllbGQpIHtcbiAgICAgICAgbGV0IHNxdWFyZXMgPSBbXTtcbiAgICAgICAgT2JqZWN0LnZhbHVlcyh0aGlzLnBvc2l0aW9uKS5mb3JFYWNoKGNvb3JkaW5hdGVzQXJyYXkgPT4gc3F1YXJlcy5wdXNoKC4uLmNvb3JkaW5hdGVzQXJyYXkpKTtcbiAgICAgICAgdGhpcy5wb3NpdGlvbi50b3AgPSBbXTtcbiAgICAgICAgdGhpcy5wb3NpdGlvbi5taWRkbGUgPSBbXTtcbiAgICAgICAgdGhpcy5wb3NpdGlvbi5ib3R0b20gPSBbXTtcbiAgICAgICAgc3F1YXJlcy5mb3JFYWNoKHNxdWFyZSA9PiB7XG4gICAgICAgICAgICBsZXQgY29sdW1uID0gc3F1YXJlWzFdO1xuICAgICAgICAgICAgbGV0IGhlaWdodERpZmZlcmVuY2UgPSB0aGlzLnR1cm5pbmdQb2ludFswXSAtIHNxdWFyZVswXTtcbiAgICAgICAgICAgIGxldCB3aWR0aERpZmZlcmVuY2UgPSB0aGlzLnR1cm5pbmdQb2ludFsxXSAtIHNxdWFyZVsxXTtcbiAgICAgICAgICAgIGxldCBuZXdDb2wgPSB0aGlzLnR1cm5pbmdQb2ludFsxXSArIGhlaWdodERpZmZlcmVuY2U7XG4gICAgICAgICAgICBsZXQgbmV3Um93ID0gdGhpcy50dXJuaW5nUG9pbnRbMF0gKyAod2lkdGhEaWZmZXJlbmNlICogLTEpO1xuICAgICAgICAgICAgc3dpdGNoIChjb2x1bW4pIHtcbiAgICAgICAgICAgICAgICBjYXNlIGNvbHVtbiA9IHRoaXMucmlnaHRNb3N0OlxuICAgICAgICAgICAgICAgICAgICB0aGlzLnBvc2l0aW9uLmJvdHRvbS5wdXNoKFtuZXdSb3csIG5ld0NvbF0pO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlIGNvbHVtbiA9IHRoaXMubGVmdE1vc3Q6XG4gICAgICAgICAgICAgICAgICAgIHRoaXMucG9zaXRpb24udG9wLnB1c2goW25ld1JvdywgbmV3Q29sXSk7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgICAgIHRoaXMucG9zaXRpb24ubWlkZGxlLnB1c2goW25ld1JvdywgbmV3Q29sXSk7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KVxuICAgICAgICAvLyBmaW5kIGxlZnQgYW5kIHJpZ2h0IG1vc3Qgc3F1YXJlcyB0byBzZWUgaWYgcGllY2UgdGhyb3VnaCB3YWxsXG4gICAgICAgIC8vIGlmIHRocm91Z2ggd2FsbCwgcHVzaCBwaWVjZSBiYWNrIGludG8gZmllbGRcbiAgICAgICAgdGhpcy5zZXRMZWZ0TW9zdEFuZFJpZ2h0TW9zdCgpO1xuICAgICAgICBcbiAgICAgICAgd2hpbGUgKHRoaXMucmlnaHRNb3N0ID4gOSB8fCB0aGlzLmxlZnRNb3N0IDwgMCkge1xuICAgICAgICAgICAgdGhpcy5yaWdodE1vc3QgPiA5ID8gdGhpcy5tb3ZlKCdsZWZ0JykgOiB0aGlzLm1vdmUoJ3JpZ2h0Jyk7XG4gICAgICAgICAgICB0aGlzLnNldExlZnRNb3N0QW5kUmlnaHRNb3N0KCk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBpbiB0aGUgY2FzZSB0aGF0IHRoZSBJUGllY2UgaXMgdHVybmVkIHRocm91Z2ggdGhlIGZpZWxkIGNlaWxpbmdcbiAgICAgICAgaWYgKHRoaXMucG9zaXRpb24udG9wLmxlbmd0aCkge1xuICAgICAgICAgICAgd2hpbGUgKHRoaXMucG9zaXRpb24udG9wWzBdWzBdIDwgMCkgdGhpcy5tb3ZlKCdkb3duJyk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICB0dXJuTGVmdChmaWVsZCkge1xuICAgICAgICBsZXQgc3F1YXJlcyA9IFtdO1xuICAgICAgICBPYmplY3QudmFsdWVzKHRoaXMucG9zaXRpb24pLmZvckVhY2goY29vcmRpbmF0ZXNBcnJheSA9PiBzcXVhcmVzLnB1c2goLi4uY29vcmRpbmF0ZXNBcnJheSkpO1xuICAgICAgICB0aGlzLnBvc2l0aW9uLnRvcCA9IFtdO1xuICAgICAgICB0aGlzLnBvc2l0aW9uLm1pZGRsZSA9IFtdO1xuICAgICAgICB0aGlzLnBvc2l0aW9uLmJvdHRvbSA9IFtdO1xuICAgICAgICBzcXVhcmVzLmZvckVhY2goc3F1YXJlID0+IHtcbiAgICAgICAgICAgIGxldCBjb2x1bW4gPSBzcXVhcmVbMV07XG4gICAgICAgICAgICBsZXQgaGVpZ2h0RGlmZmVyZW5jZSA9IHRoaXMudHVybmluZ1BvaW50WzBdIC0gc3F1YXJlWzBdO1xuICAgICAgICAgICAgbGV0IHdpZHRoRGlmZmVyZW5jZSA9IHRoaXMudHVybmluZ1BvaW50WzFdIC0gc3F1YXJlWzFdO1xuICAgICAgICAgICAgbGV0IG5ld0NvbCA9IHRoaXMudHVybmluZ1BvaW50WzFdIC0gaGVpZ2h0RGlmZmVyZW5jZTtcbiAgICAgICAgICAgIGxldCBuZXdSb3cgPSB0aGlzLnR1cm5pbmdQb2ludFswXSAtICh3aWR0aERpZmZlcmVuY2UgKiAtMSk7XG4gICAgICAgICAgICBzd2l0Y2ggKGNvbHVtbikge1xuICAgICAgICAgICAgICAgIGNhc2UgY29sdW1uID0gdGhpcy5yaWdodE1vc3Q6XG4gICAgICAgICAgICAgICAgICAgIHRoaXMucG9zaXRpb24udG9wLnB1c2goW25ld1JvdywgbmV3Q29sXSk7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgY29sdW1uID0gdGhpcy5sZWZ0TW9zdDpcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wb3NpdGlvbi5ib3R0b20ucHVzaChbbmV3Um93LCBuZXdDb2xdKTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wb3NpdGlvbi5taWRkbGUucHVzaChbbmV3Um93LCBuZXdDb2xdKTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgICAgIC8vIGZpbmQgbGVmdCBhbmQgcmlnaHQgbW9zdCBzcXVhcmVzIHRvIHNlZSBpZiBwaWVjZSB0aHJvdWdoIHdhbGxcbiAgICAgICAgLy8gaWYgdGhyb3VnaCB3YWxsLCBwdXNoIHBpZWNlIGJhY2sgaW50byBmaWVsZFxuICAgICAgICB0aGlzLnNldExlZnRNb3N0QW5kUmlnaHRNb3N0KCk7XG4gICAgICAgIFxuICAgICAgICB3aGlsZSAodGhpcy5yaWdodE1vc3QgPiA5IHx8IHRoaXMubGVmdE1vc3QgPCAwKSB7XG4gICAgICAgICAgICB0aGlzLnJpZ2h0TW9zdCA+IDkgPyB0aGlzLm1vdmUoJ2xlZnQnKSA6IHRoaXMubW92ZSgncmlnaHQnKTtcbiAgICAgICAgICAgIHRoaXMuc2V0TGVmdE1vc3RBbmRSaWdodE1vc3QoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIGluIHRoZSBjYXNlIHRoYXQgdGhlIElQaWVjZSBpcyB0dXJuZWQgdGhyb3VnaCB0aGUgZmllbGQgY2VpbGluZ1xuICAgICAgICBpZiAodGhpcy5wb3NpdGlvbi50b3AubGVuZ3RoKSB7XG4gICAgICAgICAgICB3aGlsZSAodGhpcy5wb3NpdGlvbi50b3BbMF1bMF0gPCAwKSB0aGlzLm1vdmUoJ2Rvd24nKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8vIGNvbXBhcmUgb2xkIHBvc2l0aW9uIG9mIHBpZWNlIHdpdGggbmV3IHBvc2l0aW9uIFxuICAgIHNldFJlbW92ZVNxdWFyZXMob2xkUG9zaXRpb24pIHtcbiAgICAgICAgbGV0IG9sZFNxdWFyZXMgPSBbXTtcbiAgICAgICAgbGV0IG5ld1NxdWFyZXMgPSBbXTtcbiAgICAgICAgT2JqZWN0LnZhbHVlcyhvbGRQb3NpdGlvbikuZm9yRWFjaChjb29yZGluYXRlc0FycmF5ID0+IG9sZFNxdWFyZXMucHVzaCguLi5jb29yZGluYXRlc0FycmF5KSk7XG4gICAgICAgIE9iamVjdC52YWx1ZXModGhpcy5wb3NpdGlvbikuZm9yRWFjaChjb29yZGluYXRlc0FycmF5ID0+IG5ld1NxdWFyZXMucHVzaCguLi5jb29yZGluYXRlc0FycmF5KSk7XG4gICAgICAgIC8vIGtlZXAgdHJhY2sgb2Ygc3F1YXJlcyB0aGF0IHRoZSBwb3NpdGlvbnMgZG8gbm90IGhhdmUgaW4gY29tbW9uIChzcXVhcmVzIHRvIHJlbW92ZSBjb2xvciBmcm9tKVxuICAgICAgICB0aGlzLnJlbW92ZVNxdWFyZXMgPSBvbGRTcXVhcmVzLmZpbHRlcihvbGRTcXVhcmUgPT4ge1xuICAgICAgICAgICAgaWYgKCF0aGlzLl9pbmNsdWRlcyhvbGRTcXVhcmUsIG5ld1NxdWFyZXMpKSByZXR1cm4gb2xkU3F1YXJlO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBoYW5naW5nU3F1YXJlcyhwb3NpdGlvbikge1xuICAgICAgICBsZXQgc3F1YXJlcyA9IFtdO1xuICAgICAgICBsZXQgaGFuZ2luZ1NxdWFyZXMgPSBbXTtcbiAgICAgICAgT2JqZWN0LnZhbHVlcyhwb3NpdGlvbikuZm9yRWFjaChjb29yZGluYXRlQXJyYXkgPT4gc3F1YXJlcy5wdXNoKC4uLmNvb3JkaW5hdGVBcnJheSkpXG4gICAgICAgIHNxdWFyZXMuZm9yRWFjaChzcXVhcmUgPT4ge1xuICAgICAgICAgICAgbGV0IGJlbG93U3F1YXJlID0gW3NxdWFyZVswXSArIDEsIHNxdWFyZVsxXV07XG4gICAgICAgICAgICBpZiAoIXRoaXMuX2luY2x1ZGVzKGJlbG93U3F1YXJlLCBzcXVhcmVzKSkgaGFuZ2luZ1NxdWFyZXMucHVzaChzcXVhcmUpO1xuICAgICAgICB9KVxuICAgICAgICByZXR1cm4gaGFuZ2luZ1NxdWFyZXM7XG4gICAgfSBcblxuICAgIHNpZGVTcXVhcmVzKCkge1xuICAgICAgICBsZXQgc3F1YXJlcyA9IFtdO1xuICAgICAgICBsZXQgc2lkZVNxdWFyZXMgPSB7XG4gICAgICAgICAgICBsZWZ0OiBbXSxcbiAgICAgICAgICAgIHJpZ2h0OiBbXVxuICAgICAgICB9O1xuICAgICAgICBPYmplY3QudmFsdWVzKHRoaXMucG9zaXRpb24pLmZvckVhY2goY29vcmRpbmF0ZUFycmF5ID0+IHNxdWFyZXMucHVzaCguLi5jb29yZGluYXRlQXJyYXkpKTtcbiAgICAgICAgc3F1YXJlcy5mb3JFYWNoKHNxdWFyZSA9PiB7XG4gICAgICAgICAgICBsZXQgYWRqYWNlbnRMZWZ0ID0gW3NxdWFyZVswXSwgc3F1YXJlWzFdIC0gMV07XG4gICAgICAgICAgICBsZXQgYWRqYWNlbnRSaWdodCA9IFtzcXVhcmVbMF0sIHNxdWFyZVsxXSArIDFdO1xuICAgICAgICAgICAgaWYgKCF0aGlzLl9pbmNsdWRlcyhhZGphY2VudExlZnQsIHNxdWFyZXMpKSBzaWRlU3F1YXJlcy5sZWZ0LnB1c2goc3F1YXJlKTtcbiAgICAgICAgICAgIGlmICghdGhpcy5faW5jbHVkZXMoYWRqYWNlbnRSaWdodCwgc3F1YXJlcykpIHNpZGVTcXVhcmVzLnJpZ2h0LnB1c2goc3F1YXJlKTtcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiBzaWRlU3F1YXJlcztcbiAgICB9XG5cbiAgICBpc0ZhbGxpbmcoZmllbGQpIHtcbiAgICAgICAgbGV0IHJlc3VsdCA9IHRydWU7XG4gICAgICAgIHRoaXMuaGFuZ2luZ1NxdWFyZXModGhpcy5wb3NpdGlvbikuZm9yRWFjaChjb29yZGluYXRlUGFpciA9PiB7XG4gICAgICAgICAgICBsZXQgW3JvdywgY29sXSA9IFtjb29yZGluYXRlUGFpclswXSwgY29vcmRpbmF0ZVBhaXJbMV1dO1xuICAgICAgICAgICAgLy8gaWYgdGhlIHBpZWNlJ3MgY3VycmVudCBwb3NpdGlvbiBpcyBhYm92ZSB0aGUgZmllbGQgZmxvb3Igb3IgYSBhbm90aGVyIHBpZWNlIChub3QgaW5jbHVkZSBnaG9zdCBwaWVjZSlcbiAgICAgICAgICAgIGlmICghZmllbGRbcm93ICsgMV0gfHwgKGZpZWxkW3JvdyArIDFdW2NvbF0gJiYgZmllbGRbcm93ICsgMV1bY29sXSAhPT0gXCJ4XCIpKSB7XG4gICAgICAgICAgICAgICAgcmVzdWx0ID0gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cblxuICAgIHJpZ2h0U2lkZUJsb2NrZWQoZmllbGQpIHtcbiAgICAgICAgbGV0IHJlc3VsdCA9IGZhbHNlO1xuICAgICAgICB0aGlzLnNpZGVTcXVhcmVzKCkucmlnaHQuZm9yRWFjaChjb29yZGluYXRlUGFpciA9PiB7XG4gICAgICAgICAgICBsZXQgW3JvdywgY29sXSA9IFtjb29yZGluYXRlUGFpclswXSwgY29vcmRpbmF0ZVBhaXJbMV1dO1xuICAgICAgICAgICAgLy8gaWYgYW55IHJpZ2h0IGZhY2luZyBzcXVhcmUgaGl0cyB0aGUgd2FsbCBvciBhbm90aGVyIHBpZWNlXG4gICAgICAgICAgICBpZiAoY29sID09PSA5IHx8IGZpZWxkW3Jvd11bY29sICsgMV0pIHtcbiAgICAgICAgICAgICAgICByZXN1bHQgPSB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG5cbiAgICBsZWZ0U2lkZUJsb2NrZWQoZmllbGQpIHtcbiAgICAgICAgbGV0IHJlc3VsdCA9IGZhbHNlO1xuICAgICAgICB0aGlzLnNpZGVTcXVhcmVzKCkubGVmdC5mb3JFYWNoKGNvb3JkaW5hdGVQYWlyID0+IHtcbiAgICAgICAgICAgIGxldCBbcm93LCBjb2xdID0gW2Nvb3JkaW5hdGVQYWlyWzBdLCBjb29yZGluYXRlUGFpclsxXV07XG4gICAgICAgICAgICAvLyBpZiBhbnkgbGVmdCBmYWNpbmcgc3F1YXJlIGhpdHMgdGhlIHdhbGwgb3IgYW5vdGhlciBwaWVjZVxuICAgICAgICAgICAgaWYgKGNvbCA9PT0gMCB8fCBmaWVsZFtyb3ddW2NvbCAtIDFdKSB7XG4gICAgICAgICAgICAgICAgcmVzdWx0ID0gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxufSIsImltcG9ydCBQaWVjZSBmcm9tICcuL3BpZWNlJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU1BpZWNlIGV4dGVuZHMgUGllY2Uge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICB0aGlzLm5hbWUgPSBcIlNQaWVjZVwiO1xuICAgICAgICB0aGlzLnBvc2l0aW9uID0ge1xuICAgICAgICAgICAgdG9wOiBbWzAsIDRdLCBbMCwgNV1dLFxuICAgICAgICAgICAgbWlkZGxlOiBbXSxcbiAgICAgICAgICAgIGJvdHRvbTogW1sxLCAzXSwgWzEsIDRdXVxuICAgICAgICB9O1xuICAgICAgICB0aGlzLmNvbG9yQ29kZSA9IDQ7XG5cbiAgICAgICAgdGhpcy50dXJuaW5nUG9pbnQgPSBbMSwgNF07XG5cbiAgICAgICAgdGhpcy5kaXNwbGF5U3F1YXJlcyA9IFtbMywgMV0sIFsyLCAxXSwgWzIsIDJdLCBbMSwgMl1dO1xuXG4gICAgICAgIHRoaXMucmVtb3ZlU3F1YXJlcyA9IFtdO1xuICAgIH1cbn0iLCJpbXBvcnQgUGllY2UgZnJvbSAnLi9waWVjZSc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRQaWVjZSBleHRlbmRzIFBpZWNlIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgdGhpcy5uYW1lID0gXCJUUGllY2VcIjtcbiAgICAgICAgdGhpcy5wb3NpdGlvbiA9IHtcbiAgICAgICAgICAgIHRvcDogW1swLCA0XV0sXG4gICAgICAgICAgICBtaWRkbGU6IFtdLFxuICAgICAgICAgICAgYm90dG9tOiBbWzEsIDNdLCBbMSwgNF0sIFsxLCA1XV0sXG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5jb2xvckNvZGUgPSAzO1xuXG4gICAgICAgIHRoaXMudHVybmluZ1BvaW50ID0gWzEsIDRdO1xuXG4gICAgICAgIHRoaXMuZGlzcGxheVNxdWFyZXMgPSBbWzEsIDJdLCBbMiwgMl0sIFszLCAyXSwgWzIsIDFdXTtcblxuICAgICAgICB0aGlzLnJlbW92ZVNxdWFyZXMgPSBbXTtcbiAgICB9XG59IiwiaW1wb3J0IFBpZWNlIGZyb20gJy4vcGllY2UnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBaUGllY2UgZXh0ZW5kcyBQaWVjZSB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIHRoaXMubmFtZSA9IFwiWlBpZWNlXCI7XG4gICAgICAgIHRoaXMucG9zaXRpb24gPSB7XG4gICAgICAgICAgICB0b3A6IFtbMCwgM10sIFswLCA0XV0sXG4gICAgICAgICAgICBtaWRkbGU6IFtdLFxuICAgICAgICAgICAgYm90dG9tOiBbWzEsIDRdLCBbMSwgNV1dXG4gICAgICAgIH07XG4gICAgICAgIHRoaXMuY29sb3JDb2RlID0gNTtcblxuICAgICAgICB0aGlzLnR1cm5pbmdQb2ludCA9IFsxLCA0XTtcblxuICAgICAgICB0aGlzLmRpc3BsYXlTcXVhcmVzID0gW1sxLCAxXSwgWzIsIDFdLCBbMiwgMl0sIFszLCAyXV07XG5cbiAgICAgICAgdGhpcy5yZW1vdmVTcXVhcmVzID0gW107XG4gICAgfVxufSJdLCJzb3VyY2VSb290IjoiIn0=