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

  }, {
    key: "_gameOver",
    value: function _gameOver() {
      return false;
    } // look through field, if field[row][col] contains a number > 0, fill that spot with the respective color. Else, remove color

  }, {
    key: "render",
    value: function render() {
      var _this7 = this;

      var fieldColumns = document.querySelectorAll(".field-column.field-".concat(this.gameNum));
      this.field.forEach(function (row, rowIdx) {
        row.forEach(function (col, colIdx) {
          var squareValue = _this7.field[rowIdx][colIdx];

          if (squareValue === 'x') {
            fieldColumns[colIdx].children[rowIdx].classList.add("x-".concat(_this7.colors[_this7.currentPiece.colorCode]));
          } else if (squareValue) {
            debugger;
            fieldColumns[colIdx].children[rowIdx].classList.add(_this7.colors[squareValue]);
          } else {
            Object.values(_this7.colors).forEach(function (color) {
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
      var _this8 = this;

      document.body.addEventListener("keydown", function (event) {
        _this8.currentPiece.setLeftMostAndRightMost(); // this.clearGhostPosition();


        switch (event.which) {
          // up key
          case _this8.controls.turnRight:
            // pass field so piece can check field wall before turning
            _this8.clearGhostPosition();

            _this8.currentPiece.move("turnRight", _this8.field);

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

            if (_this8.currentPiece.leftSideBlocked(_this8.field)) {
              _this8.clearGhostPosition();

              _this8.setGhostPosition();

              break;
            }

            _this8.movePiece(_this8.moveSpeed, "left");

            break;
          // right key

          case _this8.controls.right:
            _this8.keyHeld.right = true;

            if (_this8.currentPiece.rightSideBlocked(_this8.field)) {
              _this8.clearGhostPosition();

              _this8.setGhostPosition();

              break;
            }

            _this8.movePiece(_this8.moveSpeed, "right");

            break;
          // down key

          case _this8.controls.softDrop:
            // if (!this.currentPiece.isFalling(this.field)) break;
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
            // this.render();
            _this8.isPaused ? _this8.dropPiece(_this8.dropSpeed) : cancelAnimationFrame(_this8.handleClear.drop);
            _this8.isPaused = !_this8.isPaused;

            _this8.clearGhostPosition();

            _this8.setGhostPosition();

            break;

          default:
            // this.setGhostPosition();
            break;
        }

        _this8.currentPiece.setLeftMostAndRightMost(); // messes up with piece color
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
        this.currentPiece.populateField(this.field);
        this.render();

        if (!this.currentPiece.isFalling(this.field)) {
          this.handlePieceStop(this.handleClear.drop);
        }

        this.currentPiece.drop();
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
          this.clearGhostPosition();
          this.setGhostPosition();
          return;
        }

        this.currentPiece.move(direction);
        this.currentPiece.populateField(this.field);
        this.clearGhostPosition();
        this.setGhostPosition();
        this.render(); // break;
      }
    }
  }, {
    key: "play",
    value: function play() {
      this.setCurrentPiece();
      this.currentPiece.populateField(this.field);

      this._addToCurrentBag();

      this._showCurrentBag();

      if (!this.nextBag.length) this._refillNextBag();
      this.setGhostPosition(); // drop piece at given fps
      // this.dropPiece(1);
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
          this.turnLeft(field);
          break;
      }

      this.setRemoveSquares(oldPosition);
    }
  }, {
    key: "turnRight",
    value: function turnRight(field, oldPosition) {
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
      });
      this.setRemoveSquares(oldPosition); // causing issues with turning into the field???:
      // this.populateField(field);
      // find left and right most squares to see if piece through wall
      // if through wall, push piece back into field

      this.setLeftMostAndRightMost();
      debugger;

      while (this.rightMost > 9 || this.leftMost < 0) {
        this.rightMost > 9 ? this.move('left') : this.move('right');
        this.setLeftMostAndRightMost();
      } // in the case that the IPiece is turned through the field ceiling


      if (this.position.top.length) {
        while (this.position.top[0][0] < 0) {
          this.move('down');
        }
      } // in the case that piece is turned through floor


      debugger;

      while (this.position.bottom[0][0] > 19) {
        debugger;
        this.move('up');
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
      debugger;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2ZpZWxkL2ZpZWxkLmpzIiwid2VicGFjazovLy8uL3NyYy9maWVsZC9ob2xkYm94LmpzIiwid2VicGFjazovLy8uL3NyYy9maWVsZC9uZXh0Qm94LmpzIiwid2VicGFjazovLy8uL3NyYy9maWVsZC9xdWV1ZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvZ2FtZS9nYW1lLmpzIiwid2VicGFjazovLy8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvbXVsdGlwbGF5ZXIvbXVsdGlwbGF5ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3BpZWNlcy9pUGllY2UuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3BpZWNlcy9qUGllY2UuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3BpZWNlcy9sUGllY2UuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3BpZWNlcy9vUGllY2UuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3BpZWNlcy9waWVjZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcGllY2VzL3NQaWVjZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcGllY2VzL3RQaWVjZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcGllY2VzL3pQaWVjZS5qcyJdLCJuYW1lcyI6WyJGaWVsZCIsImZpZWxkTnVtIiwiZmllbGQiLCJpIiwicm93IiwicHVzaCIsImNvbHVtbiIsImRvY3VtZW50IiwiY3JlYXRlRWxlbWVudCIsImNsYXNzTGlzdCIsImFkZCIsImFwcGVuZCIsImFwcGVuZENoaWxkIiwiX2NyZWF0ZUNvbHVtbiIsImNvbnRhaW5lciIsInF1ZXVlIiwiUXVldWUiLCJuZXh0Qm94IiwiTmV4dEJveCIsImhvbGRCb3giLCJIb2xkQm94IiwiX2NyZWF0ZUZpZWxkIiwiY3JlYXRlUXVldWUiLCJjcmVhdGVOZXh0Qm94ZXMiLCJwcmVwZW5kIiwiY3JlYXRlQm94IiwiYm94V3JhcHBlciIsImJveCIsImhlYWRpbmciLCJpbm5lckhUTUwiLCJfY3JlYXRlQm94Q29sdW1uIiwiX2NyZWF0ZU5leHRCb3hDb2x1bW4iLCJib3hlcyIsIl9jcmVhdGVOZXh0Qm94IiwicXVldWVNZXRlciIsImFkanVzdFF1ZXVlSGVpZ2h0IiwicGVyY2VudGFnZSIsInF1ZXJ5U2VsZWN0b3IiLCJzdHlsZSIsImhlaWdodCIsIkdhbWUiLCJvcHRpb25zIiwic2V0RmllbGQiLCJjb2xvcnMiLCJnYW1lTnVtIiwiY3VycmVudEJhZyIsIl9zaHVmZmxlQmFnIiwiZ2VuZXJhdGVCYWciLCJjdXJyZW50UGllY2UiLCJob2xkUGllY2UiLCJnaG9zdFBvc2l0aW9uIiwibmV4dEJhZyIsImNhbkhvbGQiLCJoYW5kbGVDbGVhciIsImRyb3AiLCJyaWdodCIsImxlZnQiLCJkb3duIiwiZHJvcFNwZWVkIiwibW92ZVNwZWVkIiwiZHJvcFBpZWNlIiwiYmluZCIsIm1vdmUiLCJtb3ZlUGllY2UiLCJhbmltYXRlIiwiZnBzSW50ZXJ2YWwiLCJzdGFydFRpbWUiLCJub3ciLCJ0aGVuIiwiaXNQYXVzZWQiLCJrZXlIZWxkIiwib3Bwb25lbnQiLCJjb250cm9scyIsInVwY29taW5nTGluZXMiLCJjb21ibyIsImNvbWJvR3VpZGUiLCJvUGllY2UiLCJPUGllY2UiLCJpUGllY2UiLCJJUGllY2UiLCJ0UGllY2UiLCJUUGllY2UiLCJzUGllY2UiLCJTUGllY2UiLCJ6UGllY2UiLCJaUGllY2UiLCJsUGllY2UiLCJMUGllY2UiLCJqUGllY2UiLCJKUGllY2UiLCJfZ2VuZXJhdGVGaWVsZCIsInNoaWZ0IiwiY29vcmRpbmF0ZUFycmF5cyIsIk9iamVjdCIsInZhbHVlcyIsImZvckVhY2giLCJhcnJheSIsImNvb3JkaW5hdGUiLCJjb2wiLCJmaWVsZENvbHVtbnMiLCJxdWVyeVNlbGVjdG9yQWxsIiwiY2hpbGRyZW4iLCJjb2xvckNvZGUiLCJ0b3AiLCJwb3NpdGlvbiIsIm1hcCIsInNsaWNlIiwibWlkZGxlIiwiYm90dG9tIiwic3RvcHBlZCIsImhhbmdpbmdTcXVhcmVzIiwiX3BvcHVsYXRlR2hvc3RQb3NpdGlvbiIsInJlbmRlciIsImNsZWFyU2VsZkZyb21Cb2FyZCIsIl9nZW5lcmF0ZVBpZWNlIiwibmFtZSIsInNldEN1cnJlbnRQaWVjZSIsIl9zaG93Q3VycmVudEJhZyIsIl9wb3B1bGF0ZUhvbGRCb3giLCJjb2x1bW5zIiwiaiIsImNsYXNzTmFtZSIsImRpc3BsYXlTcXVhcmVzIiwic3F1YXJlIiwicGllY2VOYW1lIiwiZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSIsIl9wb3B1bGF0ZU5leHRCb3giLCJwaWVjZSIsImJhZyIsImN1cnJlbnRJbmRleCIsImxlbmd0aCIsInRlbXBvcmFyeVZhbHVlIiwicmFuZG9tSW5kZXgiLCJNYXRoIiwiZmxvb3IiLCJyYW5kb20iLCJyb3dJZHgiLCJjb2xJZHgiLCJzcXVhcmVWYWx1ZSIsImNvbG9yIiwicmVtb3ZlIiwiYm9keSIsImFkZEV2ZW50TGlzdGVuZXIiLCJldmVudCIsInNldExlZnRNb3N0QW5kUmlnaHRNb3N0Iiwid2hpY2giLCJ0dXJuUmlnaHQiLCJjbGVhckdob3N0UG9zaXRpb24iLCJwb3B1bGF0ZUZpZWxkIiwic2V0R2hvc3RQb3NpdGlvbiIsInR1cm5MZWZ0IiwibGVmdFNpZGVCbG9ja2VkIiwicmlnaHRTaWRlQmxvY2tlZCIsInNvZnREcm9wIiwiaG9sZCIsImhhcmREcm9wIiwiaGFuZGxlUGllY2VTdG9wIiwiY2FuY2VsQW5pbWF0aW9uRnJhbWUiLCJsb3dlc3QiLCJoaWdoZXN0IiwibnVtTGluZXNDbGVhcmVkIiwiaW5jbHVkZXMiLCJfYnJpbmdEb3duRmllbGQiLCJjbGVhckxpbmVzIiwic3RhcnRpbmdSb3ciLCJudW1MaW5lcyIsImFkZExpbmVzVG9RdWV1ZSIsImFicyIsInJlY2VpdmVVcGNvbWluZ0xpbmVzIiwiY2xlYXJHaG9zdENsYXNzIiwicGxheSIsImZwcyIsIkRhdGUiLCJyZXF1ZXN0QW5pbWF0aW9uRnJhbWUiLCJlbGFwc2VkIiwiaXNGYWxsaW5nIiwiZGlyZWN0aW9uIiwiX2FkZFRvQ3VycmVudEJhZyIsIl9yZWZpbGxOZXh0QmFnIiwicGxheWVyIiwiZ2FyYmFnZUxpbmVzIiwicmFuZG9tSG9sZSIsImdhcmJhZ2VSb3ciLCJjb25zb2xlIiwibG9nIiwiY29uY2F0IiwiZmllbGRDb250YWluZXIiLCJnZXRFbGVtZW50QnlJZCIsImZpZWxkQ29udGFpbmVyMiIsImZpZWxkMiIsImNyZWF0ZUNvbXBsZXRlRmllbGQiLCJvcHRpb25zUGxheWVyMSIsIm9wdGlvbnNQbGF5ZXIyIiwiZ2FtZTEiLCJrZXlMaXN0ZW5lciIsImdhbWUyIiwibXVsdGlwbGF5ZXJNb2RlIiwiTXVsdGlwbGF5ZXIiLCJzdGFydE11bHRpcGxheWVyIiwicGxheWVyMSIsInBsYXllcjIiLCJzZXRPcHBvbmVudCIsInR1cm5pbmdQb2ludCIsInJlbW92ZVNxdWFyZXMiLCJQaWVjZSIsImxlZnRNb3N0IiwicmlnaHRNb3N0IiwiY29vcmRpbmF0ZXNBcnJheSIsImNvbHVtblZhbHVlIiwicG9zaXRpb25BcnJheSIsIm9sZFNxdWFyZSIsIm5ld1NxdWFyZSIsInJlc3VsdCIsIl9zcXVhcmVzQXJlRXF1YWwiLCJvbGRQb3NpdGlvbiIsInNldFJlbW92ZVNxdWFyZXMiLCJzcXVhcmVzIiwiaGVpZ2h0RGlmZmVyZW5jZSIsIndpZHRoRGlmZmVyZW5jZSIsIm5ld0NvbCIsIm5ld1JvdyIsIm9sZFNxdWFyZXMiLCJuZXdTcXVhcmVzIiwiZmlsdGVyIiwiX2luY2x1ZGVzIiwiY29vcmRpbmF0ZUFycmF5IiwiYmVsb3dTcXVhcmUiLCJzaWRlU3F1YXJlcyIsImFkamFjZW50TGVmdCIsImFkamFjZW50UmlnaHQiLCJjb29yZGluYXRlUGFpciJdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Es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Q0FBRCxFQUFJLENBQUosQ0FBVDtBQUhJLEtBQWhCO0FBS0EsVUFBS04sU0FBTCxHQUFpQixDQUFqQjtBQUVBLFVBQUtvRyxZQUFMLEdBQW9CLENBQUMsQ0FBRCxFQUFJLENBQUosQ0FBcEI7QUFFQSxVQUFLaEYsY0FBTCxHQUFzQixDQUFDLENBQUMsQ0FBRCxFQUFJLENBQUosQ0FBRCxFQUFTLENBQUMsQ0FBRCxFQUFJLENBQUosQ0FBVCxFQUFpQixDQUFDLENBQUQsRUFBSSxDQUFKLENBQWpCLEVBQXlCLENBQUMsQ0FBRCxFQUFJLENBQUosQ0FBekIsQ0FBdEI7QUFFQSxVQUFLaUYsYUFBTCxHQUFxQixFQUFyQjtBQWRVO0FBZWI7OztFQWhCK0JDLDhDIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIi9kaXN0L1wiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9pbmRleC5qc1wiKTtcbiIsImltcG9ydCBIb2xkQm94IGZyb20gJy4vaG9sZGJveCc7XG5pbXBvcnQgTmV4dEJveCBmcm9tICcuL25leHRCb3gnO1xuaW1wb3J0IFF1ZXVlIGZyb20gJy4vcXVldWUnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBGaWVsZCB7ICBcbiAgICBjb25zdHJ1Y3RvcihmaWVsZE51bSkge1xuICAgICAgICB0aGlzLmZpZWxkTnVtID0gZmllbGROdW07XG4gICAgfVxuICAgIFxuICAgIF9nZW5lcmF0ZUZpZWxkKCkge1xuICAgICAgICBsZXQgZmllbGQgPSBbXTtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCAyMDsgaSsrKSB7XG4gICAgICAgICAgICBsZXQgcm93ID0gWzAsMCwwLDAsMCwwLDAsMCwwLDBdO1xuICAgICAgICAgICAgZmllbGQucHVzaChyb3cpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBmaWVsZDtcbiAgICB9XG5cbiAgICAvL19pc1ZhbGlkTW92ZVxuXG4gICAgX2NyZWF0ZUNvbHVtbigpIHtcbiAgICAgICAgbGV0IGNvbHVtbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ1bFwiKTtcbiAgICAgICAgY29sdW1uLmNsYXNzTGlzdC5hZGQoYGZpZWxkLWNvbHVtbmAsIGBmaWVsZC0ke3RoaXMuZmllbGROdW19YCk7XG5cbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCAyMDsgaSsrKSB7XG4gICAgICAgICAgICBjb2x1bW4uYXBwZW5kKGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaVwiKSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGNvbHVtbjtcbiAgICB9XG5cbiAgICBfY3JlYXRlRmllbGQoKSB7XG4gICAgICAgIGxldCBmaWVsZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIGZpZWxkLmNsYXNzTGlzdC5hZGQoYGZpZWxkLWJveGAsIGBmaWVsZC0ke3RoaXMuZmllbGROdW19YCk7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMTA7IGkrKykge1xuICAgICAgICAgICAgZmllbGQuYXBwZW5kQ2hpbGQodGhpcy5fY3JlYXRlQ29sdW1uKCkpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBmaWVsZDtcbiAgICB9XG5cbiAgICBjcmVhdGVDb21wbGV0ZUZpZWxkIChjb250YWluZXIpIHtcbiAgICAgICAgbGV0IHF1ZXVlID0gbmV3IFF1ZXVlKHRoaXMuZmllbGROdW0pO1xuICAgICAgICBsZXQgbmV4dEJveCA9IG5ldyBOZXh0Qm94KHRoaXMuZmllbGROdW0pO1xuICAgICAgICBsZXQgaG9sZEJveCA9IG5ldyBIb2xkQm94KHRoaXMuZmllbGROdW0pO1xuICAgICAgICBjb250YWluZXIuYXBwZW5kKHRoaXMuX2NyZWF0ZUZpZWxkKCkpO1xuICAgICAgICBjb250YWluZXIuYXBwZW5kKHF1ZXVlLmNyZWF0ZVF1ZXVlKCkpO1xuICAgICAgICBjb250YWluZXIuYXBwZW5kKG5leHRCb3guY3JlYXRlTmV4dEJveGVzKCkpO1xuICAgICAgICBjb250YWluZXIucHJlcGVuZChob2xkQm94LmNyZWF0ZUJveCgpKTtcbiAgICAgICAgcmV0dXJuIGNvbnRhaW5lcjtcbiAgICB9XG5cbn0iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBIb2xkQm94IHtcbiAgICBjb25zdHJ1Y3RvcihmaWVsZE51bSkge1xuICAgICAgICB0aGlzLmZpZWxkTnVtID0gZmllbGROdW07XG4gICAgfVxuXG4gICAgX2NyZWF0ZUJveENvbHVtbigpIHtcbiAgICAgICAgbGV0IGNvbHVtbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ1bFwiKTtcbiAgICAgICAgY29sdW1uLmNsYXNzTGlzdC5hZGQoYGhvbGQtY29sdW1uYCwgYGZpZWxkLSR7dGhpcy5maWVsZE51bX1gKTtcblxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IDQ7IGkrKykge1xuICAgICAgICAgICAgY29sdW1uLmFwcGVuZChkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIikpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBjb2x1bW47XG4gICAgfVxuXG4gICAgY3JlYXRlQm94KCkge1xuICAgICAgICBsZXQgYm94V3JhcHBlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIGJveFdyYXBwZXIuY2xhc3NMaXN0LmFkZChgaG9sZC1ib3gtd3JhcHBlcmAsIGBmaWVsZC0ke3RoaXMuZmllbGROdW19YCk7XG4gICAgICAgIGxldCBib3ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICBib3guY2xhc3NMaXN0LmFkZChgaG9sZC1ib3hgLCBgZmllbGQtJHt0aGlzLmZpZWxkTnVtfWApO1xuICAgICAgICBsZXQgaGVhZGluZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMlwiKTtcbiAgICAgICAgaGVhZGluZy5pbm5lckhUTUwgPSBcIkhPTERcIjtcbiAgICAgICAgYm94V3JhcHBlci5hcHBlbmRDaGlsZChoZWFkaW5nKTtcbiAgICAgICAgYm94V3JhcHBlci5hcHBlbmRDaGlsZChib3gpO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IDU7IGkrKykge1xuICAgICAgICAgICAgYm94LmFwcGVuZENoaWxkKHRoaXMuX2NyZWF0ZUJveENvbHVtbigpKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gYm94V3JhcHBlcjtcbiAgICB9XG59IiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgTmV4dEJveCB7XG4gICAgY29uc3RydWN0b3IoZmllbGROdW0pIHtcbiAgICAgICAgdGhpcy5maWVsZE51bSA9IGZpZWxkTnVtO1xuICAgIH1cblxuICAgIF9jcmVhdGVOZXh0Qm94Q29sdW1uKCkge1xuICAgICAgICBsZXQgY29sdW1uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInVsXCIpO1xuICAgICAgICBjb2x1bW4uY2xhc3NMaXN0LmFkZChgbmV4dC1jb2x1bW5gLCBgZmllbGQtJHt0aGlzLmZpZWxkTnVtfWApO1xuXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgNDsgaSsrKSB7XG4gICAgICAgICAgICBjb2x1bW4uYXBwZW5kKGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaVwiKSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGNvbHVtbjtcbiAgICB9XG5cbiAgICBfY3JlYXRlTmV4dEJveCgpIHtcbiAgICAgICAgbGV0IGJveCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIGJveC5jbGFzc0xpc3QuYWRkKGBuZXh0LWJveGAsIGBmaWVsZC0ke3RoaXMuZmllbGROdW19YCk7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgNTsgaSsrKSB7XG4gICAgICAgICAgICBib3guYXBwZW5kQ2hpbGQodGhpcy5fY3JlYXRlTmV4dEJveENvbHVtbigpKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gYm94O1xuICAgIH1cblxuICAgIGNyZWF0ZU5leHRCb3hlcygpIHtcbiAgICAgICAgbGV0IGJveGVzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgbGV0IGhlYWRpbmcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDJcIik7XG4gICAgICAgIGhlYWRpbmcuaW5uZXJIVE1MID0gXCJORVhUXCI7XG4gICAgICAgIGJveGVzLmNsYXNzTGlzdC5hZGQoYG5leHQtYm94ZXNgLCBgZmllbGQtJHt0aGlzLmZpZWxkTnVtfWApO1xuICAgICAgICBib3hlcy5hcHBlbmRDaGlsZChoZWFkaW5nKTtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCA1OyBpKyspIHtcbiAgICAgICAgICAgIGJveGVzLmFwcGVuZENoaWxkKHRoaXMuX2NyZWF0ZU5leHRCb3goKSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGJveGVzO1xuICAgIH1cbn0iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBRdWV1ZSB7XG4gICAgY29uc3RydWN0b3IoZmllbGROdW0pIHtcbiAgICAgICAgdGhpcy5maWVsZE51bSA9IGZpZWxkTnVtO1xuICAgIH1cblxuICAgIGNyZWF0ZVF1ZXVlKCkge1xuICAgICAgICBsZXQgcXVldWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICBxdWV1ZS5jbGFzc0xpc3QuYWRkKGBxdWV1ZWAsIGBmaWVsZC0ke3RoaXMuZmllbGROdW19YCk7XG4gICAgICAgIGxldCBxdWV1ZU1ldGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgcXVldWVNZXRlci5jbGFzc0xpc3QuYWRkKGBxdWV1ZS1tZXRlcmAsIGBmaWVsZC0ke3RoaXMuZmllbGROdW19YCk7XG4gICAgICAgIHF1ZXVlLmFwcGVuZENoaWxkKHF1ZXVlTWV0ZXIpO1xuICAgICAgICByZXR1cm4gcXVldWU7XG4gICAgfVxufVxuXG5leHBvcnQgY29uc3QgYWRqdXN0UXVldWVIZWlnaHQgPSAoZmllbGROdW0sIHBlcmNlbnRhZ2UpID0+IHtcbiAgICBsZXQgcXVldWVNZXRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC5xdWV1ZS1tZXRlci5maWVsZC0ke2ZpZWxkTnVtfWApO1xuICAgIHF1ZXVlTWV0ZXIuc3R5bGUuaGVpZ2h0ID0gYCR7cGVyY2VudGFnZX0lYFxufSIsImltcG9ydCBGaWVsZCBmcm9tICcuLi9maWVsZC9maWVsZCc7XG5pbXBvcnQgT1BpZWNlIGZyb20gJy4uL3BpZWNlcy9vUGllY2UnO1xuaW1wb3J0IElQaWVjZSBmcm9tICcuLi9waWVjZXMvaVBpZWNlJztcbmltcG9ydCBUUGllY2UgZnJvbSAnLi4vcGllY2VzL3RQaWVjZSc7XG5pbXBvcnQgU1BpZWNlIGZyb20gJy4uL3BpZWNlcy9zUGllY2UnO1xuaW1wb3J0IFpQaWVjZSBmcm9tICcuLi9waWVjZXMvelBpZWNlJztcbmltcG9ydCBMUGllY2UgZnJvbSAnLi4vcGllY2VzL2xQaWVjZSc7XG5pbXBvcnQgSlBpZWNlIGZyb20gJy4uL3BpZWNlcy9qUGllY2UnO1xuaW1wb3J0IHsgYWRqdXN0UXVldWVIZWlnaHQgfSBmcm9tICcuLi9maWVsZC9xdWV1ZSc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEdhbWUge1xuICAgIGNvbnN0cnVjdG9yKG9wdGlvbnMpIHtcbiAgICAgICAgdGhpcy5maWVsZCA9IHRoaXMuc2V0RmllbGQoKVxuXG4gICAgICAgIHRoaXMuY29sb3JzID0ge1xuICAgICAgICAgICAgMTogXCJ5ZWxsb3dcIixcbiAgICAgICAgICAgIDI6IFwiYmx1ZVwiLFxuICAgICAgICAgICAgMzogXCJwdXJwbGVcIixcbiAgICAgICAgICAgIDQ6IFwiZ3JlZW5cIixcbiAgICAgICAgICAgIDU6IFwicmVkXCIsXG4gICAgICAgICAgICA2OiBcIm9yYW5nZVwiLFxuICAgICAgICAgICAgNzogXCJkYXJrLWJsdWVcIixcbiAgICAgICAgICAgIDg6IFwiZ3JleVwiXG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmdhbWVOdW0gPSBvcHRpb25zLmdhbWVOdW07XG5cbiAgICAgICAgdGhpcy5jdXJyZW50QmFnID0gdGhpcy5fc2h1ZmZsZUJhZyh0aGlzLmdlbmVyYXRlQmFnKCkpO1xuICAgICAgICB0aGlzLmN1cnJlbnRQaWVjZSA9ICcnO1xuICAgICAgICB0aGlzLmhvbGRQaWVjZSA9ICcnO1xuICAgICAgICB0aGlzLmdob3N0UG9zaXRpb24gPSAnJztcbiAgICAgICAgdGhpcy5uZXh0QmFnID0gdGhpcy5fc2h1ZmZsZUJhZyh0aGlzLmdlbmVyYXRlQmFnKCkpO1xuXG4gICAgICAgIC8vIHByZXZlbnRzIHBsYXllciBmcm9tIGhvbGRpbmcgcGllY2UgbXVsdGlwbGUgdGltZXNcbiAgICAgICAgdGhpcy5jYW5Ib2xkID0gdHJ1ZTtcblxuICAgICAgICB0aGlzLmhhbmRsZUNsZWFyID0ge1xuICAgICAgICAgICAgZHJvcDogJycsXG4gICAgICAgICAgICByaWdodDogJycsXG4gICAgICAgICAgICBsZWZ0OiAnJyxcbiAgICAgICAgICAgIGRvd246ICcnXG4gICAgICAgIH07XG5cbiAgICAgICAgLy8gZm9yIGFuaW1hdGlvbnNcbiAgICAgICAgdGhpcy5kcm9wU3BlZWQgPSAxLjU7XG4gICAgICAgIHRoaXMubW92ZVNwZWVkID0gb3B0aW9ucy5tb3ZlU3BlZWQ7XG4gICAgICAgIHRoaXMuZHJvcFBpZWNlID0gdGhpcy5kcm9wUGllY2UuYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5kcm9wID0gdGhpcy5kcm9wLmJpbmQodGhpcyk7XG4gICAgICAgIHRoaXMubW92ZSA9IHRoaXMubW92ZS5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLm1vdmVQaWVjZSA9IHRoaXMubW92ZVBpZWNlLmJpbmQodGhpcyk7XG5cbiAgICAgICAgLy8ga2VlcCB0cmFjayBvZiB0aGUgZm9sbG93aW5nIHZhcmlhYmxlcyBmb3IgcmVxdWVzdEFuaW1hdGlvbkZyYW1lIHRocm90dGxpbmdcbiAgICAgICAgdGhpcy5hbmltYXRlID0ge1xuICAgICAgICAgICAgZHJvcDoge1xuICAgICAgICAgICAgICAgIGZwc0ludGVydmFsOiAnJyxcbiAgICAgICAgICAgICAgICBzdGFydFRpbWU6ICcnLFxuICAgICAgICAgICAgICAgIG5vdzogJycsXG4gICAgICAgICAgICAgICAgdGhlbjogJydcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICByaWdodDoge1xuICAgICAgICAgICAgICAgIGZwc0ludGVydmFsOiAnJyxcbiAgICAgICAgICAgICAgICBzdGFydFRpbWU6ICcnLFxuICAgICAgICAgICAgICAgIG5vdzogJycsXG4gICAgICAgICAgICAgICAgdGhlbjogJydcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBsZWZ0OiB7XG4gICAgICAgICAgICAgICAgZnBzSW50ZXJ2YWw6ICcnLFxuICAgICAgICAgICAgICAgIHN0YXJ0VGltZTogJycsXG4gICAgICAgICAgICAgICAgbm93OiAnJyxcbiAgICAgICAgICAgICAgICB0aGVuOiAnJ1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGRvd246IHtcbiAgICAgICAgICAgICAgICBmcHNJbnRlcnZhbDogJycsXG4gICAgICAgICAgICAgICAgc3RhcnRUaW1lOiAnJyxcbiAgICAgICAgICAgICAgICBub3c6ICcnLFxuICAgICAgICAgICAgICAgIHRoZW46ICcnXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAvLyBwYXVzaW5nIHRoZSBnYW1lXG4gICAgICAgIHRoaXMuaXNQYXVzZWQgPSBmYWxzZTtcblxuICAgICAgICB0aGlzLmtleUhlbGQgPSB7XG4gICAgICAgICAgICBkb3duOiBmYWxzZSxcbiAgICAgICAgICAgIHJpZ2h0OiBmYWxzZSxcbiAgICAgICAgICAgIGxlZnQ6IGZhbHNlXG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLm9wcG9uZW50ID0gXCJcIjtcbiAgICAgICAgdGhpcy5jb250cm9scyA9IG9wdGlvbnMuY29udHJvbHM7XG4gICAgICAgIHRoaXMudXBjb21pbmdMaW5lcyA9IDA7XG4gICAgICAgIHRoaXMuY29tYm8gPSAtMTtcbiAgICAgICAgdGhpcy5jb21ib0d1aWRlID0ge1xuICAgICAgICAgICAgMDogMCxcbiAgICAgICAgICAgIDE6IDAsIFxuICAgICAgICAgICAgMjogMSxcbiAgICAgICAgICAgIDM6IDEsXG4gICAgICAgICAgICA0OiAxLFxuICAgICAgICAgICAgNTogMixcbiAgICAgICAgICAgIDY6IDIsXG4gICAgICAgICAgICA3OiAzLFxuICAgICAgICAgICAgODogMyxcbiAgICAgICAgICAgIDk6IDQsXG4gICAgICAgICAgICAxMDogNCxcbiAgICAgICAgICAgIDExOiA0LFxuICAgICAgICAgICAgMTI6IDVcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICBnZW5lcmF0ZUJhZygpIHtcbiAgICAgICAgbGV0IG9QaWVjZSA9IG5ldyBPUGllY2UoKTtcbiAgICAgICAgbGV0IGlQaWVjZSA9IG5ldyBJUGllY2UoKTtcbiAgICAgICAgbGV0IHRQaWVjZSA9IG5ldyBUUGllY2UoKTtcbiAgICAgICAgbGV0IHNQaWVjZSA9IG5ldyBTUGllY2UoKTtcbiAgICAgICAgbGV0IHpQaWVjZSA9IG5ldyBaUGllY2UoKTtcbiAgICAgICAgbGV0IGxQaWVjZSA9IG5ldyBMUGllY2UoKTtcbiAgICAgICAgbGV0IGpQaWVjZSA9IG5ldyBKUGllY2UoKTtcblxuICAgICAgICByZXR1cm4gW29QaWVjZSwgaVBpZWNlLCB0UGllY2UsIHNQaWVjZSwgelBpZWNlLCBsUGllY2UsIGpQaWVjZV07XG4gICAgfVxuXG4gICAgc2V0RmllbGQoKSB7XG4gICAgICAgIGxldCBmaWVsZCA9IG5ldyBGaWVsZCgpO1xuICAgICAgICByZXR1cm4gZmllbGQuX2dlbmVyYXRlRmllbGQoKTtcbiAgICB9XG5cbiAgICAvLyB0YWtlIHBpZWNlIGZyb20gY3VycmVudEJhZyBhbmQgc2V0IGl0IGFzIHRoZSBjdXJyZW50IHBpZWNlXG4gICAgc2V0Q3VycmVudFBpZWNlKCkge1xuICAgICAgICB0aGlzLmN1cnJlbnRQaWVjZSA9IHRoaXMuY3VycmVudEJhZy5zaGlmdCgpO1xuICAgIH1cblxuICAgIC8vIHJlbW92ZXMgb2xkIGdob3N0IHBvc2l0aW9uIGZyb20gdGhpcy5maWVsZCBiZWZvcmUgY2hhbmdpbmcgcGllY2UgcG9zaXRpb25cbiAgICBjbGVhckdob3N0UG9zaXRpb24oKSB7XG4gICAgICAgIGxldCBjb29yZGluYXRlQXJyYXlzID0gT2JqZWN0LnZhbHVlcyh0aGlzLmdob3N0UG9zaXRpb24pO1xuXG4gICAgICAgIGNvb3JkaW5hdGVBcnJheXMuZm9yRWFjaChhcnJheSA9PiB7XG4gICAgICAgICAgICBhcnJheS5mb3JFYWNoKGNvb3JkaW5hdGUgPT4ge1xuICAgICAgICAgICAgICAgIGxldCBbcm93LCBjb2xdID0gW2Nvb3JkaW5hdGVbMF0sIGNvb3JkaW5hdGVbMV1dO1xuICAgICAgICAgICAgICAgIHRoaXMuZmllbGRbcm93XVtjb2xdID0gMDtcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIC8vIGNsZWFycyB0aGUgY29sb3IgY2xhc3NlcyBmcm9tIHRoZSBicm93c2VyIGZpZWxkXG4gICAgY2xlYXJHaG9zdENsYXNzKCkge1xuICAgICAgICBsZXQgZmllbGRDb2x1bW5zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChgLmZpZWxkLWNvbHVtbi5maWVsZC0ke3RoaXMuZ2FtZU51bX1gKTtcbiAgICAgICAgbGV0IGNvb3JkaW5hdGVBcnJheXMgPSBPYmplY3QudmFsdWVzKHRoaXMuZ2hvc3RQb3NpdGlvbik7XG5cbiAgICAgICAgY29vcmRpbmF0ZUFycmF5cy5mb3JFYWNoKGFycmF5ID0+IHtcbiAgICAgICAgICAgIGFycmF5LmZvckVhY2goY29vcmRpbmF0ZSA9PiB7XG4gICAgICAgICAgICAgICAgbGV0IFtyb3csIGNvbF0gPSBbY29vcmRpbmF0ZVswXSwgY29vcmRpbmF0ZVsxXV07XG4gICAgICAgICAgICAgICAgZmllbGRDb2x1bW5zW2NvbF0uY2hpbGRyZW5bcm93XS5jbGFzc0xpc3QgPSB0aGlzLmNvbG9yc1t0aGlzLmN1cnJlbnRQaWVjZS5jb2xvckNvZGVdO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgLy8gZmluZCBhcHByb3ByaWF0ZSBnaG9zdCBwb3NpdGlvbiBhcyBwaWVjZSBwb3NpdGlvbiBjaGFuZ2VzXG4gICAgc2V0R2hvc3RQb3NpdGlvbigpIHtcbiAgICAgICAgbGV0IGdob3N0UG9zaXRpb24gPSB7XG4gICAgICAgICAgICB0b3A6IHRoaXMuY3VycmVudFBpZWNlLnBvc2l0aW9uLnRvcC5tYXAoY29vcmRpbmF0ZSA9PiBjb29yZGluYXRlLnNsaWNlKCkpLFxuICAgICAgICAgICAgbWlkZGxlOiB0aGlzLmN1cnJlbnRQaWVjZS5wb3NpdGlvbi5taWRkbGUubWFwKGNvb3JkaW5hdGUgPT4gY29vcmRpbmF0ZS5zbGljZSgpKSxcbiAgICAgICAgICAgIGJvdHRvbTogdGhpcy5jdXJyZW50UGllY2UucG9zaXRpb24uYm90dG9tLm1hcChjb29yZGluYXRlID0+IGNvb3JkaW5hdGUuc2xpY2UoKSlcbiAgICAgICAgfVxuXG4gICAgICAgIGxldCBzdG9wcGVkID0gZmFsc2U7XG4gICAgICAgIHdoaWxlICghc3RvcHBlZCkge1xuICAgICAgICAgICAgbGV0IGhhbmdpbmdTcXVhcmVzID0gdGhpcy5jdXJyZW50UGllY2UuaGFuZ2luZ1NxdWFyZXMoZ2hvc3RQb3NpdGlvbik7XG4gICAgICAgICAgICBoYW5naW5nU3F1YXJlcy5mb3JFYWNoKGNvb3JkaW5hdGUgPT4ge1xuICAgICAgICAgICAgICAgIGxldCBbcm93LCBjb2xdID0gW2Nvb3JkaW5hdGVbMF0sIGNvb3JkaW5hdGVbMV1dO1xuICAgICAgICAgICAgICAgIGlmIChyb3cgKyAxID09PSAyMCB8fCB0aGlzLmZpZWxkW3JvdyArIDFdW2NvbF0pIHN0b3BwZWQgPSB0cnVlO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBpZiAoc3RvcHBlZCkgYnJlYWs7XG4gICAgICAgICAgICBnaG9zdFBvc2l0aW9uLnRvcCA9IGdob3N0UG9zaXRpb24udG9wLm1hcChhcnJheSA9PiBbYXJyYXlbMF0gKyAxLCBhcnJheVsxXV0pO1xuICAgICAgICAgICAgZ2hvc3RQb3NpdGlvbi5taWRkbGUgPSBnaG9zdFBvc2l0aW9uLm1pZGRsZS5tYXAoYXJyYXkgPT4gW2FycmF5WzBdICsgMSwgYXJyYXlbMV1dKTtcbiAgICAgICAgICAgIGdob3N0UG9zaXRpb24uYm90dG9tID0gZ2hvc3RQb3NpdGlvbi5ib3R0b20ubWFwKGFycmF5ID0+IFthcnJheVswXSArIDEsIGFycmF5WzFdXSk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5naG9zdFBvc2l0aW9uID0gZ2hvc3RQb3NpdGlvbjtcbiAgICAgICAgdGhpcy5fcG9wdWxhdGVHaG9zdFBvc2l0aW9uKCk7XG4gICAgfVxuXG4gICAgLy8gcG9wdWxhdGUgdGhpcy5maWVsZCB3aXRoICd4JyB3aGVyZXZlciB0aGUgZ2hvc3QgcG9zaXRpb24gaXMgY2FsY3VsYXRlZCB0byBiZVxuICAgIF9wb3B1bGF0ZUdob3N0UG9zaXRpb24oKSB7XG4gICAgICAgIGxldCBjb29yZGluYXRlQXJyYXlzID0gT2JqZWN0LnZhbHVlcyh0aGlzLmdob3N0UG9zaXRpb24pO1xuXG4gICAgICAgIGNvb3JkaW5hdGVBcnJheXMuZm9yRWFjaChhcnJheSA9PiB7XG4gICAgICAgICAgICBhcnJheS5mb3JFYWNoKGNvb3JkaW5hdGUgPT4ge1xuICAgICAgICAgICAgICAgIGxldCBbcm93LCBjb2xdID0gW2Nvb3JkaW5hdGVbMF0sIGNvb3JkaW5hdGVbMV1dO1xuICAgICAgICAgICAgICAgIHRoaXMuZmllbGRbcm93XVtjb2xdID0gXCJ4XCI7XG4gICAgICAgICAgICB9KVxuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5yZW5kZXIoKTtcbiAgICB9XG5cbiAgICAvLyBob2xkIHBpZWNlIGZvciBsYXRlciB1c2UgXG4gICAgaG9sZCgpIHtcbiAgICAgICAgaWYgKCF0aGlzLmNhbkhvbGQpIHJldHVybjtcbiAgICAgICAgdGhpcy5jdXJyZW50UGllY2UuY2xlYXJTZWxmRnJvbUJvYXJkKHRoaXMuZmllbGQpOyBcbiAgICAgICAgdGhpcy5yZW5kZXIoKTtcblxuICAgICAgICBpZiAodGhpcy5ob2xkUGllY2UgPT09ICcnKSB7XG4gICAgICAgICAgICAvLyBwYXNzIGN1cnJlbnQgcGllY2UgbmFtZSBpbnRvIGdlbmVyYXRlIHBpZWNlIGluIG9yZGVyIHRvIGdlbmVyYXRlIGEgbmV3IHBpZWNlIGluc3RhbmNlXG4gICAgICAgICAgICB0aGlzLmhvbGRQaWVjZSA9IHRoaXMuX2dlbmVyYXRlUGllY2UodGhpcy5jdXJyZW50UGllY2UubmFtZSk7XG4gICAgICAgICAgICB0aGlzLnNldEN1cnJlbnRQaWVjZSgpO1xuICAgICAgICAgICAgLy8gcmUtcmVuZGVyIG5leHQgYm94ZXMgdG8gYXBwcm9wcmlhdGVseSBzaG93IGN1cnJlbnQgYmFnXG4gICAgICAgICAgICB0aGlzLl9zaG93Q3VycmVudEJhZygpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5jdXJyZW50UGllY2UgPSB0aGlzLl9nZW5lcmF0ZVBpZWNlKHRoaXMuY3VycmVudFBpZWNlLm5hbWUpO1xuICAgICAgICAgICAgW3RoaXMuY3VycmVudFBpZWNlLCB0aGlzLmhvbGRQaWVjZV0gPSBbdGhpcy5ob2xkUGllY2UsIHRoaXMuY3VycmVudFBpZWNlXTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmNhbkhvbGQgPSBmYWxzZTtcblxuICAgICAgICB0aGlzLl9wb3B1bGF0ZUhvbGRCb3goKTtcbiAgICB9XG5cbiAgICBfcG9wdWxhdGVIb2xkQm94KCkge1xuICAgICAgICBsZXQgY29sdW1ucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC5ob2xkLWJveC5maWVsZC0ke3RoaXMuZ2FtZU51bX1gKS5jaGlsZHJlbjtcblxuICAgICAgICAvLyByZW1vdmUgY29sb3JzIGZyb20gcHJldmlvdXMgcGllY2VzXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgNTsgaSsrKSB7XG4gICAgICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IDQ7IGorKykge1xuICAgICAgICAgICAgICAgIC8vIGNvbHVtbnMuY2hpbGRyZW4gaXMgbm9kZWxpc3Qgb2YgPGxpcz5cbiAgICAgICAgICAgICAgICBjb2x1bW5zW2ldLmNoaWxkcmVuW2pdLmNsYXNzTmFtZSA9IFwiXCI7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmhvbGRQaWVjZS5kaXNwbGF5U3F1YXJlcy5mb3JFYWNoKHNxdWFyZSA9PiB7XG4gICAgICAgICAgICBsZXQgW2NvbCwgcm93XSA9IFtzcXVhcmVbMF0sIHNxdWFyZVsxXV07XG4gICAgICAgICAgICBjb2x1bW5zW2NvbF0uY2hpbGRyZW5bcm93XS5jbGFzc0xpc3QuYWRkKHRoaXMuY29sb3JzW3RoaXMuaG9sZFBpZWNlLmNvbG9yQ29kZV0pO1xuICAgICAgICB9KVxuXG4gICAgfVxuXG4gICAgLy8gdXNlZCBmb3IgdGhpcy5ob2xkKCk6IGdlbmVyYXRlIGEgbmV3IHBpZWNlIHNvIHRoYXQgYSBob2xkcGllY2UgdGhhdCBpcyByZS1yZW5kZXJlZCBvbiB0aGUgYm9hcmQgd2lsbCBub3Qgc3RhcnQgZnJvbSB0aGUgb2xkIHBvc2l0aW9uXG4gICAgX2dlbmVyYXRlUGllY2UocGllY2VOYW1lKSB7XG4gICAgICAgIHN3aXRjaChwaWVjZU5hbWUpIHtcbiAgICAgICAgICAgIGNhc2UgXCJUUGllY2VcIjpcbiAgICAgICAgICAgICAgICByZXR1cm4gbmV3IFRQaWVjZTtcbiAgICAgICAgICAgIGNhc2UgXCJPUGllY2VcIjpcbiAgICAgICAgICAgICAgICByZXR1cm4gbmV3IE9QaWVjZTtcbiAgICAgICAgICAgIGNhc2UgXCJJUGllY2VcIjpcbiAgICAgICAgICAgICAgICByZXR1cm4gbmV3IElQaWVjZTtcbiAgICAgICAgICAgIGNhc2UgXCJMUGllY2VcIjpcbiAgICAgICAgICAgICAgICByZXR1cm4gbmV3IExQaWVjZTtcbiAgICAgICAgICAgIGNhc2UgXCJKUGllY2VcIjpcbiAgICAgICAgICAgICAgICByZXR1cm4gbmV3IEpQaWVjZTtcbiAgICAgICAgICAgIGNhc2UgXCJTUGllY2VcIjpcbiAgICAgICAgICAgICAgICByZXR1cm4gbmV3IFNQaWVjZTtcbiAgICAgICAgICAgIGNhc2UgXCJaUGllY2VcIjpcbiAgICAgICAgICAgICAgICByZXR1cm4gbmV3IFpQaWVjZTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8vIHRha2Ugb25lIHBpZWNlIGZyb20gbmV4dEJhZyBhbmQgYWRkIHRvIGN1cnJlbnRCYWdcbiAgICBfYWRkVG9DdXJyZW50QmFnKCkge1xuICAgICAgICB0aGlzLmN1cnJlbnRCYWcucHVzaCh0aGlzLm5leHRCYWcuc2hpZnQoKSk7XG4gICAgfVxuXG4gICAgX3Nob3dDdXJyZW50QmFnKCkge1xuICAgICAgICBsZXQgYm94ZXMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKGBuZXh0LWJveCBmaWVsZC0ke3RoaXMuZ2FtZU51bX1gKTtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCA1OyBpKyspIHtcbiAgICAgICAgICAgIHRoaXMuX3BvcHVsYXRlTmV4dEJveChib3hlc1tpXSwgdGhpcy5jdXJyZW50QmFnW2ldKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIF9wb3B1bGF0ZU5leHRCb3goYm94LCBwaWVjZSkge1xuICAgICAgICAvLyBjb2x1bW5zIGlzIG5vZGVsaXN0IG9mIDx1bHM+XG4gICAgICAgIGxldCBjb2x1bW5zID0gYm94LmNoaWxkcmVuO1xuXG4gICAgICAgIC8vIHJlbW92ZSBjb2xvcnMgZnJvbSBwcmV2aW91cyBwaWVjZXNcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCA1OyBpKyspIHtcbiAgICAgICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgNDsgaisrKSB7XG4gICAgICAgICAgICAgICAgLy8gY29sdW1ucy5jaGlsZHJlbiBpcyBub2RlbGlzdCBvZiA8bGlzPlxuICAgICAgICAgICAgICAgIGNvbHVtbnNbaV0uY2hpbGRyZW5bal0uY2xhc3NOYW1lID0gXCJcIjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHBpZWNlLmRpc3BsYXlTcXVhcmVzLmZvckVhY2goc3F1YXJlID0+IHtcbiAgICAgICAgICAgIGxldCBbY29sLCByb3ddID0gW3NxdWFyZVswXSwgc3F1YXJlWzFdXTtcbiAgICAgICAgICAgIGNvbHVtbnNbY29sXS5jaGlsZHJlbltyb3ddLmNsYXNzTGlzdC5hZGQodGhpcy5jb2xvcnNbcGllY2UuY29sb3JDb2RlXSk7XG4gICAgICAgIH0pXG4gICAgfVxuXG4gICAgLy8gcmVmaWxsIG5leHQgYmFnLCB3aWxsIG9ubHkgYmUgY2FsbGVkIG9uY2UgbmV4dEJhZyBiZWNvbWVzIGVtcHR5XG4gICAgX3JlZmlsbE5leHRCYWcoKSB7XG4gICAgICAgIHRoaXMubmV4dEJhZyA9IHRoaXMuZ2VuZXJhdGVCYWcoKTtcbiAgICB9XG5cbiAgICAvLyBpbXBsZW1lbnRhdGlvbiBvZiBzaHVmZmxlIGZvdW5kIG9uIGh0dHBzOi8vc3RhY2tvdmVyZmxvdy5jb20vcXVlc3Rpb25zLzI0NTA5NTQvaG93LXRvLXJhbmRvbWl6ZS1zaHVmZmxlLWEtamF2YXNjcmlwdC1hcnJheSMyNDUwOTc2XG4gICAgX3NodWZmbGVCYWcoYmFnKSB7XG4gICAgICAgIHZhciBjdXJyZW50SW5kZXggPSBiYWcubGVuZ3RoLCB0ZW1wb3JhcnlWYWx1ZSwgcmFuZG9tSW5kZXg7XG5cbiAgICAgICAgLy8gV2hpbGUgdGhlcmUgcmVtYWluIGVsZW1lbnRzIHRvIHNodWZmbGUuLi5cbiAgICAgICAgd2hpbGUgKDAgIT09IGN1cnJlbnRJbmRleCkge1xuXG4gICAgICAgICAgICAvLyBQaWNrIGEgcmVtYWluaW5nIGVsZW1lbnQuLi5cbiAgICAgICAgICAgIHJhbmRvbUluZGV4ID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogY3VycmVudEluZGV4KTtcbiAgICAgICAgICAgIGN1cnJlbnRJbmRleCAtPSAxO1xuXG4gICAgICAgICAgICAvLyBBbmQgc3dhcCBpdCB3aXRoIHRoZSBjdXJyZW50IGVsZW1lbnQuXG4gICAgICAgICAgICB0ZW1wb3JhcnlWYWx1ZSA9IGJhZ1tjdXJyZW50SW5kZXhdO1xuICAgICAgICAgICAgYmFnW2N1cnJlbnRJbmRleF0gPSBiYWdbcmFuZG9tSW5kZXhdO1xuICAgICAgICAgICAgYmFnW3JhbmRvbUluZGV4XSA9IHRlbXBvcmFyeVZhbHVlO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBiYWc7XG4gICAgfVxuICAgIC8vIGltcGxlbWVudGF0aW9uIG9mIHNodWZmbGUgZm91bmQgb24gaHR0cHM6Ly9zdGFja292ZXJmbG93LmNvbS9xdWVzdGlvbnMvMjQ1MDk1NC9ob3ctdG8tcmFuZG9taXplLXNodWZmbGUtYS1qYXZhc2NyaXB0LWFycmF5IzI0NTA5NzZcblxuICAgIF9nYW1lT3ZlcigpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIC8vIGxvb2sgdGhyb3VnaCBmaWVsZCwgaWYgZmllbGRbcm93XVtjb2xdIGNvbnRhaW5zIGEgbnVtYmVyID4gMCwgZmlsbCB0aGF0IHNwb3Qgd2l0aCB0aGUgcmVzcGVjdGl2ZSBjb2xvci4gRWxzZSwgcmVtb3ZlIGNvbG9yXG4gICAgcmVuZGVyKCkge1xuICAgICAgICBsZXQgZmllbGRDb2x1bW5zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChgLmZpZWxkLWNvbHVtbi5maWVsZC0ke3RoaXMuZ2FtZU51bX1gKTtcbiAgICAgICAgdGhpcy5maWVsZC5mb3JFYWNoKChyb3csIHJvd0lkeCkgPT4ge1xuICAgICAgICAgICAgcm93LmZvckVhY2goKGNvbCwgY29sSWR4KSA9PiB7XG4gICAgICAgICAgICAgICAgbGV0IHNxdWFyZVZhbHVlID0gdGhpcy5maWVsZFtyb3dJZHhdW2NvbElkeF07XG4gICAgICAgICAgICAgICAgaWYgKHNxdWFyZVZhbHVlID09PSAneCcpIHtcbiAgICAgICAgICAgICAgICAgICAgZmllbGRDb2x1bW5zW2NvbElkeF0uY2hpbGRyZW5bcm93SWR4XS5jbGFzc0xpc3QuYWRkKGB4LSR7dGhpcy5jb2xvcnNbdGhpcy5jdXJyZW50UGllY2UuY29sb3JDb2RlXX1gKTtcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHNxdWFyZVZhbHVlKSB7XG4gICAgICAgICAgICAgICAgICAgIGRlYnVnZ2VyXG4gICAgICAgICAgICAgICAgICAgIGZpZWxkQ29sdW1uc1tjb2xJZHhdLmNoaWxkcmVuW3Jvd0lkeF0uY2xhc3NMaXN0LmFkZCh0aGlzLmNvbG9yc1tzcXVhcmVWYWx1ZV0pO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIE9iamVjdC52YWx1ZXModGhpcy5jb2xvcnMpLmZvckVhY2goY29sb3IgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgZmllbGRDb2x1bW5zW2NvbElkeF0uY2hpbGRyZW5bcm93SWR4XS5jbGFzc0xpc3QucmVtb3ZlKGNvbG9yKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZpZWxkQ29sdW1uc1tjb2xJZHhdLmNoaWxkcmVuW3Jvd0lkeF0uY2xhc3NMaXN0LnJlbW92ZShgeC0ke2NvbG9yfWApO1xuICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBrZXlMaXN0ZW5lcigpIHtcbiAgICAgICAgZG9jdW1lbnQuYm9keS5hZGRFdmVudExpc3RlbmVyKFwia2V5ZG93blwiLCBldmVudCA9PiB7XG4gICAgICAgICAgICB0aGlzLmN1cnJlbnRQaWVjZS5zZXRMZWZ0TW9zdEFuZFJpZ2h0TW9zdCgpO1xuICAgICAgICAgICAgLy8gdGhpcy5jbGVhckdob3N0UG9zaXRpb24oKTtcbiAgICAgICAgICAgIHN3aXRjaChldmVudC53aGljaCkge1xuICAgICAgICAgICAgICAgIC8vIHVwIGtleVxuICAgICAgICAgICAgICAgIGNhc2UgdGhpcy5jb250cm9scy50dXJuUmlnaHQ6XG4gICAgICAgICAgICAgICAgICAgIC8vIHBhc3MgZmllbGQgc28gcGllY2UgY2FuIGNoZWNrIGZpZWxkIHdhbGwgYmVmb3JlIHR1cm5pbmdcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jbGVhckdob3N0UG9zaXRpb24oKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jdXJyZW50UGllY2UubW92ZShcInR1cm5SaWdodFwiLCB0aGlzLmZpZWxkKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jdXJyZW50UGllY2UucG9wdWxhdGVGaWVsZCh0aGlzLmZpZWxkKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRHaG9zdFBvc2l0aW9uKCk7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIC8vIEMga2V5XG4gICAgICAgICAgICAgICAgY2FzZSB0aGlzLmNvbnRyb2xzLnR1cm5MZWZ0OlxuICAgICAgICAgICAgICAgICAgICAvLyBwYXNzIGZpZWxkIHNvIHBpZWNlIGNhbiBjaGVjayBmaWVsZCB3YWxsIGJlZm9yZSB0dXJuaW5nXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY2xlYXJHaG9zdFBvc2l0aW9uKCk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY3VycmVudFBpZWNlLm1vdmUoXCJ0dXJuTGVmdFwiLCB0aGlzLmZpZWxkKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jdXJyZW50UGllY2UucG9wdWxhdGVGaWVsZCh0aGlzLmZpZWxkKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRHaG9zdFBvc2l0aW9uKCk7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIC8vIGxlZnQga2V5XG4gICAgICAgICAgICAgICAgY2FzZSB0aGlzLmNvbnRyb2xzLmxlZnQ6XG4gICAgICAgICAgICAgICAgICAgIHRoaXMua2V5SGVsZC5sZWZ0ID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuY3VycmVudFBpZWNlLmxlZnRTaWRlQmxvY2tlZCh0aGlzLmZpZWxkKSl7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmNsZWFyR2hvc3RQb3NpdGlvbigpO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRHaG9zdFBvc2l0aW9uKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgfSBcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5tb3ZlUGllY2UodGhpcy5tb3ZlU3BlZWQsIFwibGVmdFwiKTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgLy8gcmlnaHQga2V5XG4gICAgICAgICAgICAgICAgY2FzZSB0aGlzLmNvbnRyb2xzLnJpZ2h0OlxuICAgICAgICAgICAgICAgICAgICB0aGlzLmtleUhlbGQucmlnaHQgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5jdXJyZW50UGllY2UucmlnaHRTaWRlQmxvY2tlZCh0aGlzLmZpZWxkKSl7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmNsZWFyR2hvc3RQb3NpdGlvbigpO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRHaG9zdFBvc2l0aW9uKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB0aGlzLm1vdmVQaWVjZSh0aGlzLm1vdmVTcGVlZCwgXCJyaWdodFwiKTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgLy8gZG93biBrZXlcbiAgICAgICAgICAgICAgICBjYXNlIHRoaXMuY29udHJvbHMuc29mdERyb3A6XG4gICAgICAgICAgICAgICAgICAgIC8vIGlmICghdGhpcy5jdXJyZW50UGllY2UuaXNGYWxsaW5nKHRoaXMuZmllbGQpKSBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5rZXlIZWxkLmRvd24gPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLm1vdmVQaWVjZSh0aGlzLm1vdmVTcGVlZCwgXCJkb3duXCIpO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAvLyBzaGlmdCBrZXlcbiAgICAgICAgICAgICAgICBjYXNlIHRoaXMuY29udHJvbHMuaG9sZDogXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY2xlYXJHaG9zdFBvc2l0aW9uKCk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuaG9sZCgpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmN1cnJlbnRQaWVjZS5wb3B1bGF0ZUZpZWxkKHRoaXMuZmllbGQpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnNldEdob3N0UG9zaXRpb24oKTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgLy8gc3BhY2UgYmFyXG4gICAgICAgICAgICAgICAgY2FzZSB0aGlzLmNvbnRyb2xzLmhhcmREcm9wOlxuICAgICAgICAgICAgICAgICAgICAvLyB0aGlzLnJlbmRlcigpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmNsZWFyR2hvc3RQb3NpdGlvbigpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmN1cnJlbnRQaWVjZS5oYXJkRHJvcCh0aGlzLmZpZWxkKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5yZW5kZXIoKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jdXJyZW50UGllY2UucG9wdWxhdGVGaWVsZCh0aGlzLmZpZWxkKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5oYW5kbGVQaWVjZVN0b3AodGhpcy5oYW5kbGVDbGVhci5kcm9wKTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgLy8gUCBrZXlcbiAgICAgICAgICAgICAgICBjYXNlIDgwOlxuICAgICAgICAgICAgICAgICAgICAvLyB0aGlzLnJlbmRlcigpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmlzUGF1c2VkID8gdGhpcy5kcm9wUGllY2UodGhpcy5kcm9wU3BlZWQpIDogY2FuY2VsQW5pbWF0aW9uRnJhbWUodGhpcy5oYW5kbGVDbGVhci5kcm9wKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5pc1BhdXNlZCA9ICF0aGlzLmlzUGF1c2VkO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmNsZWFyR2hvc3RQb3NpdGlvbigpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnNldEdob3N0UG9zaXRpb24oKTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICAgICAgLy8gdGhpcy5zZXRHaG9zdFBvc2l0aW9uKCk7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5jdXJyZW50UGllY2Uuc2V0TGVmdE1vc3RBbmRSaWdodE1vc3QoKTtcbiAgICAgICAgICAgIC8vIG1lc3NlcyB1cCB3aXRoIHBpZWNlIGNvbG9yXG4gICAgICAgICAgICAvLyB0aGlzLmN1cnJlbnRQaWVjZS5wb3B1bGF0ZUZpZWxkKHRoaXMuZmllbGQpO1xuICAgICAgICAgICAgdGhpcy5yZW5kZXIoKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgZG9jdW1lbnQuYm9keS5hZGRFdmVudExpc3RlbmVyKFwia2V5dXBcIiwgZXZlbnQgPT4ge1xuICAgICAgICAgICAgc3dpdGNoIChldmVudC53aGljaCkge1xuICAgICAgICAgICAgICAgIGNhc2UgdGhpcy5jb250cm9scy5yaWdodDogXG4gICAgICAgICAgICAgICAgICAgIHRoaXMua2V5SGVsZC5yaWdodCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlIHRoaXMuY29udHJvbHMubGVmdDogXG4gICAgICAgICAgICAgICAgICAgIHRoaXMua2V5SGVsZC5sZWZ0ID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgdGhpcy5jb250cm9scy5zb2Z0RHJvcDogXG4gICAgICAgICAgICAgICAgICAgIHRoaXMua2V5SGVsZC5kb3duID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrOyAgXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGNsZWFyTGluZXMobG93ZXN0LCBoaWdoZXN0LCBudW1MaW5lc0NsZWFyZWQpIHtcbiAgICAgICAgLy8gYmFzZSBjYXNlOiBpZiB3ZSByZWFjaCBhIHJvdyB0aGF0IGlzIGhpZ2hlciB0aGFuIHRoZSBoaWdoZXN0LCB0aGVuIHJldHVybiBudW1iZXIgb2YgbGluZXMgdGhhdCB3ZXJlIGNsZWFyZWRcbiAgICAgICAgaWYgKGxvd2VzdCA8IGhpZ2hlc3QpIHtcbiAgICAgICAgICAgIHJldHVybiBudW1MaW5lc0NsZWFyZWQ7XG4gICAgICAgIH07XG4gICAgICAgIC8vIHJlY3Vyc2l2ZSBjYXNlOiBcbiAgICAgICAgLy8gaWYgbG93ZXN0IHJvdyBkb2VzIG5vdCBjb250YWluIGEgMCwgYnJpbmcgYWxsIGFib3ZlIHJvd3MgZG93biBvbmUgbGV2ZWxcbiAgICAgICAgaWYgKCF0aGlzLmZpZWxkW2xvd2VzdF0uaW5jbHVkZXMoMCkpIHtcbiAgICAgICAgICAgIHRoaXMuX2JyaW5nRG93bkZpZWxkKGxvd2VzdCk7XG4gICAgICAgICAgICAvLyBjYWxsIHJlY3Vyc2l2ZUNsZWFyKGxvd2VzdCwgaGlnaGVzdCArIDEpO1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuY2xlYXJMaW5lcyhsb3dlc3QsIGhpZ2hlc3QgKyAxLCBudW1MaW5lc0NsZWFyZWQgKyAxKVxuICAgICAgICAvLyBpZiByb3cgY29udGFpbnMgYSAwIFxuICAgICAgICAvLyBjYWxsIENsZWFyTGluZXMobG93ZXN0IC0gMSwgaGlnaGVzdClcbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLmZpZWxkW2xvd2VzdF0uaW5jbHVkZXMoMCkpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmNsZWFyTGluZXMobG93ZXN0IC0gMSwgaGlnaGVzdCwgbnVtTGluZXNDbGVhcmVkKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIF9icmluZ0Rvd25GaWVsZChzdGFydGluZ1Jvdykge1xuICAgICAgICBmb3IgKGxldCBpID0gc3RhcnRpbmdSb3c7IGkgPiAwOyBpLS0pIHtcbiAgICAgICAgICAgIHRoaXMuZmllbGRbaV0gPSB0aGlzLmZpZWxkW2kgLSAxXTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmZpZWxkWzBdID0gWzAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDBdO1xuICAgIH1cblxuICAgIGhhbmRsZVBpZWNlU3RvcCgpIHsgIFxuICAgICAgICBkZWJ1Z2dlciAgIFxuICAgICAgICAvLyBhbGxvdyBwbGF5ZXIgdG8gaG9sZCBwaWVjZSBhZ2FpblxuICAgICAgICB0aGlzLmNhbkhvbGQgPSB0cnVlO1xuICAgICAgICBsZXQgbG93ZXN0ID0gdGhpcy5jdXJyZW50UGllY2UucG9zaXRpb24uYm90dG9tWzBdWzBdO1xuICAgICAgICAvLyBpbiBjYXNlIG9mIGxpbmUgcGllY2UsIHdoaWNoIG1heSBub3QgaGF2ZSB0aGlzLnBvc2l0aW9uLnRvcFxuICAgICAgICBsZXQgaGlnaGVzdCA9ICF0aGlzLmN1cnJlbnRQaWVjZS5wb3NpdGlvbi50b3AubGVuZ3RoID8gbG93ZXN0IDogdGhpcy5jdXJyZW50UGllY2UucG9zaXRpb24udG9wWzBdWzBdO1xuICAgICAgICBsZXQgbnVtTGluZXNDbGVhcmVkID0gdGhpcy5jbGVhckxpbmVzKGxvd2VzdCwgaGlnaGVzdCwgMCk7XG5cbiAgICAgICAgLy8gaW4gdGhlIGNhc2Ugb2YgbXVsdGlwbGF5ZXIsIHNlbmQgY2xlYXJlZCBsaW5lcyB0byBvcHBvbmVudCBhbmQgcmVjZWl2ZSBwb3RlbnRpYWwgbGluZXNcbiAgICAgICAgaWYgKHRoaXMub3Bwb25lbnQpIHtcbiAgICAgICAgICAgIGlmIChudW1MaW5lc0NsZWFyZWQgPiAwKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5jb21ibyArPSAxO1xuICAgICAgICAgICAgICAgIGxldCBudW1MaW5lcyA9IG51bUxpbmVzQ2xlYXJlZCA9PT0gNCA/IDQgOiBudW1MaW5lc0NsZWFyZWQgLSAxO1xuICAgICAgICAgICAgICAgIG51bUxpbmVzICs9IHRoaXMuY29tYm9HdWlkZVt0aGlzLmNvbWJvXTtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy51cGNvbWluZ0xpbmVzID4gMCkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnVwY29taW5nTGluZXMgLT0gbnVtTGluZXM7XG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLnVwY29taW5nTGluZXMgPCAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm9wcG9uZW50LmFkZExpbmVzVG9RdWV1ZShNYXRoLmFicyh0aGlzLnVwY29taW5nTGluZXMpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMudXBjb21pbmdMaW5lcyA9IDA7XG4gICAgICAgICAgICAgICAgICAgICAgICBhZGp1c3RRdWV1ZUhlaWdodCh0aGlzLmdhbWVOdW0sIDApO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgYWRqdXN0UXVldWVIZWlnaHQodGhpcy5nYW1lTnVtLCB0aGlzLnVwY29taW5nTGluZXMgKiA1KTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMub3Bwb25lbnQuYWRkTGluZXNUb1F1ZXVlKG51bUxpbmVzKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMuY29tYm8gPSAtMTtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy51cGNvbWluZ0xpbmVzID4gMCkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnJlY2VpdmVVcGNvbWluZ0xpbmVzKHRoaXMudXBjb21pbmdMaW5lcyk7XG4gICAgICAgICAgICAgICAgICAgIGFkanVzdFF1ZXVlSGVpZ2h0KHRoaXMuZ2FtZU51bSwgMCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuY2xlYXJHaG9zdENsYXNzKCk7XG4gICAgICAgIGNhbmNlbEFuaW1hdGlvbkZyYW1lKHRoaXMuaGFuZGxlQ2xlYXIuZHJvcCk7XG4gICAgICAgIHRoaXMucGxheSgpO1xuICAgIH1cblxuICAgIGRyb3BQaWVjZShmcHMpIHtcbiAgICAgICAgLy8gRG8gd2hhdGV2ZXJcbiAgICAgICAgdGhpcy5hbmltYXRlLmRyb3AuZnBzSW50ZXJ2YWwgPSAxMDAwIC8gZnBzO1xuICAgICAgICB0aGlzLmFuaW1hdGUuZHJvcC50aGVuID0gRGF0ZS5ub3coKTtcbiAgICAgICAgdGhpcy5hbmltYXRlLmRyb3Auc3RhcnRUaW1lID0gdGhpcy50aGVuO1xuICAgICAgICB0aGlzLmRyb3AoKTtcbiAgICB9XG5cbiAgICAvLyBpbnNwaXJhdGlvbiBmb3IgdGhyb3R0bGluZyByZXF1ZXN0QW5pbWF0aW9uRnJhbWUgZnJvbSBodHRwczovL3N0YWNrb3ZlcmZsb3cuY29tL3F1ZXN0aW9ucy8xOTc2NDAxOC9jb250cm9sbGluZy1mcHMtd2l0aC1yZXF1ZXN0YW5pbWF0aW9uZnJhbWVcbiAgICBkcm9wKCkge1xuICAgICAgICB0aGlzLmhhbmRsZUNsZWFyLmRyb3AgPSByZXF1ZXN0QW5pbWF0aW9uRnJhbWUodGhpcy5kcm9wKTtcbiAgICAgICAgdGhpcy5hbmltYXRlLmRyb3Aubm93ID0gRGF0ZS5ub3coKTtcbiAgICAgICAgbGV0IGVsYXBzZWQgPSB0aGlzLmFuaW1hdGUuZHJvcC5ub3cgLSB0aGlzLmFuaW1hdGUuZHJvcC50aGVuO1xuICAgICAgICBpZiAoZWxhcHNlZCA+IHRoaXMuYW5pbWF0ZS5kcm9wLmZwc0ludGVydmFsKSB7XG4gICAgICAgICAgICAvLyBHZXQgcmVhZHkgZm9yIG5leHQgZnJhbWUgYnkgc2V0dGluZyB0aGVuPW5vdywgYWRqdXN0aW5nIGZvciBzcGVjaWZpZWQgZnBzSW50ZXJ2YWwgbm90IGJlaW5nIGEgbXVsdGlwbGUgb2YgUkFGJ3MgaW50ZXJ2YWwgKDE2LjdtcylcbiAgICAgICAgICAgIHRoaXMuYW5pbWF0ZS5kcm9wLnRoZW4gPSB0aGlzLmFuaW1hdGUuZHJvcC5ub3cgLSAoZWxhcHNlZCAlIHRoaXMuYW5pbWF0ZS5kcm9wLmZwc0ludGVydmFsKTtcbiAgICAgICAgICAgIHRoaXMuY3VycmVudFBpZWNlLnBvcHVsYXRlRmllbGQodGhpcy5maWVsZCk7XG4gICAgICAgICAgICB0aGlzLnJlbmRlcigpO1xuICAgICAgICAgICAgaWYgKCF0aGlzLmN1cnJlbnRQaWVjZS5pc0ZhbGxpbmcodGhpcy5maWVsZCkpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmhhbmRsZVBpZWNlU3RvcCh0aGlzLmhhbmRsZUNsZWFyLmRyb3ApO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5jdXJyZW50UGllY2UuZHJvcCgpO1xuICAgICAgICAgICAgdGhpcy5jdXJyZW50UGllY2UucG9wdWxhdGVGaWVsZCh0aGlzLmZpZWxkKTsgLy8ga2VlcCBvbmx5IG9uZSBwb3B1bGF0ZSBmaWVsZD9cbiAgICAgICAgICAgIHRoaXMucmVuZGVyKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBtb3ZlUGllY2UoZnBzLCBkaXJlY3Rpb24pIHtcbiAgICAgICAgLy8gRG8gd2hhdGV2ZXJcbiAgICAgICAgdGhpcy5hbmltYXRlW2RpcmVjdGlvbl0uZnBzSW50ZXJ2YWwgPSAxMDAwIC8gZnBzO1xuICAgICAgICB0aGlzLmFuaW1hdGVbZGlyZWN0aW9uXS50aGVuID0gRGF0ZS5ub3coKTtcbiAgICAgICAgdGhpcy5hbmltYXRlW2RpcmVjdGlvbl0uc3RhcnRUaW1lID0gdGhpcy5hbmltYXRlW2RpcmVjdGlvbl0udGhlbjtcbiAgICAgICAgdGhpcy5tb3ZlKGRpcmVjdGlvbik7XG4gICAgfVxuXG4gICAgLy8gaW5zcGlyYXRpb24gZm9yIHRocm90dGxpbmcgcmVxdWVzdEFuaW1hdGlvbkZyYW1lIGZyb20gaHR0cHM6Ly9zdGFja292ZXJmbG93LmNvbS9xdWVzdGlvbnMvMTk3NjQwMTgvY29udHJvbGxpbmctZnBzLXdpdGgtcmVxdWVzdGFuaW1hdGlvbmZyYW1lXG4gICAgbW92ZShkaXJlY3Rpb24pIHtcbiAgICAgICAgdGhpcy5oYW5kbGVDbGVhcltkaXJlY3Rpb25dID0gcmVxdWVzdEFuaW1hdGlvbkZyYW1lKCgpID0+IHRoaXMubW92ZShkaXJlY3Rpb24pKTtcbiAgICAgICAgaWYgKCF0aGlzLmtleUhlbGRbZGlyZWN0aW9uXSkgY2FuY2VsQW5pbWF0aW9uRnJhbWUodGhpcy5oYW5kbGVDbGVhcltkaXJlY3Rpb25dKTtcbiAgICAgICAgdGhpcy5hbmltYXRlW2RpcmVjdGlvbl0ubm93ID0gRGF0ZS5ub3coKTtcbiAgICAgICAgbGV0IGVsYXBzZWQgPSB0aGlzLmFuaW1hdGVbZGlyZWN0aW9uXS5ub3cgLSB0aGlzLmFuaW1hdGVbZGlyZWN0aW9uXS50aGVuO1xuICAgICAgICBpZiAoZWxhcHNlZCA+IHRoaXMuYW5pbWF0ZVtkaXJlY3Rpb25dLmZwc0ludGVydmFsKSB7XG4gICAgICAgICAgICAvLyBHZXQgcmVhZHkgZm9yIG5leHQgZnJhbWUgYnkgc2V0dGluZyB0aGVuPW5vdywgYWRqdXN0aW5nIGZvciBzcGVjaWZpZWQgZnBzSW50ZXJ2YWwgbm90IGJlaW5nIGEgbXVsdGlwbGUgb2YgUkFGJ3MgaW50ZXJ2YWwgKDE2LjdtcylcbiAgICAgICAgICAgIHRoaXMuYW5pbWF0ZVtkaXJlY3Rpb25dLnRoZW4gPSB0aGlzLmFuaW1hdGVbZGlyZWN0aW9uXS5ub3cgLSAoZWxhcHNlZCAlIHRoaXMuYW5pbWF0ZVtkaXJlY3Rpb25dLmZwc0ludGVydmFsKTtcblxuICAgICAgICAgICAgXG4gICAgICAgICAgICAvLyBwcmV2ZW50IHBpZWNlIGZyb20gbW92aW5nIGlmIGl0IGlzIGJsb2NrZWQgb3IgaWYgYm90aCBsZWZ0IGFuZCByaWdodCBhcnJvdyBrZXlzIGFyZSBoZWxkIGRvd25cbiAgICAgICAgICAgIGlmIChcbiAgICAgICAgICAgICAgICBkaXJlY3Rpb24gPT09IFwicmlnaHRcIiAmJiB0aGlzLmN1cnJlbnRQaWVjZS5yaWdodFNpZGVCbG9ja2VkKHRoaXMuZmllbGQpIFxuICAgICAgICAgICAgICAgIHx8IFxuICAgICAgICAgICAgICAgIGRpcmVjdGlvbiA9PT0gXCJsZWZ0XCIgJiYgdGhpcy5jdXJyZW50UGllY2UubGVmdFNpZGVCbG9ja2VkKHRoaXMuZmllbGQpIFxuICAgICAgICAgICAgICAgIHx8IFxuICAgICAgICAgICAgICAgIGRpcmVjdGlvbiA9PT0gXCJkb3duXCIgJiYgIXRoaXMuY3VycmVudFBpZWNlLmlzRmFsbGluZyh0aGlzLmZpZWxkKVxuICAgICAgICAgICAgICAgIHx8IFxuICAgICAgICAgICAgICAgIHRoaXMua2V5SGVsZC5yaWdodCAmJiB0aGlzLmtleUhlbGQubGVmdFxuICAgICAgICAgICAgKSB7IFxuICAgICAgICAgICAgICAgIHRoaXMuY2xlYXJHaG9zdFBvc2l0aW9uKCk7XG4gICAgICAgICAgICAgICAgdGhpcy5zZXRHaG9zdFBvc2l0aW9uKCk7XG4gICAgICAgICAgICAgICAgcmV0dXJuOyBcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMuY3VycmVudFBpZWNlLm1vdmUoZGlyZWN0aW9uKTtcbiAgICAgICAgICAgIHRoaXMuY3VycmVudFBpZWNlLnBvcHVsYXRlRmllbGQodGhpcy5maWVsZCk7XG4gICAgICAgICAgICB0aGlzLmNsZWFyR2hvc3RQb3NpdGlvbigpO1xuICAgICAgICAgICAgdGhpcy5zZXRHaG9zdFBvc2l0aW9uKCk7XG4gICAgICAgICAgICB0aGlzLnJlbmRlcigpO1xuICAgICAgICAgICAgLy8gYnJlYWs7XG4gICAgICAgIH1cbiAgICB9XG4gICAgXG4gICAgcGxheSgpIHtcbiAgICAgICAgdGhpcy5zZXRDdXJyZW50UGllY2UoKTtcbiAgICAgICAgdGhpcy5jdXJyZW50UGllY2UucG9wdWxhdGVGaWVsZCh0aGlzLmZpZWxkKTtcbiAgICAgICAgdGhpcy5fYWRkVG9DdXJyZW50QmFnKCk7XG4gICAgICAgIHRoaXMuX3Nob3dDdXJyZW50QmFnKCk7XG4gICAgICAgIGlmICghdGhpcy5uZXh0QmFnLmxlbmd0aCkgdGhpcy5fcmVmaWxsTmV4dEJhZygpO1xuICAgICAgICB0aGlzLnNldEdob3N0UG9zaXRpb24oKTtcbiAgICAgICAgLy8gZHJvcCBwaWVjZSBhdCBnaXZlbiBmcHNcbiAgICAgICAgLy8gdGhpcy5kcm9wUGllY2UoMSk7XG4gICAgfVxuXG5cblxuICAgIC8vIG11bHRpcGxheWVyIFxuICAgIHNldE9wcG9uZW50KHBsYXllcikge1xuICAgICAgICB0aGlzLm9wcG9uZW50ID0gcGxheWVyO1xuICAgIH1cblxuICAgIGFkZExpbmVzVG9RdWV1ZShudW1MaW5lcykge1xuICAgICAgICBkZWJ1Z2dlclxuICAgICAgICB0aGlzLnVwY29taW5nTGluZXMgKz0gbnVtTGluZXM7XG4gICAgICAgIGxldCBwZXJjZW50YWdlID0gdGhpcy51cGNvbWluZ0xpbmVzICogNTtcbiAgICAgICAgYWRqdXN0UXVldWVIZWlnaHQodGhpcy5nYW1lTnVtLCBwZXJjZW50YWdlKTtcbiAgICB9XG5cbiAgICByZWNlaXZlVXBjb21pbmdMaW5lcygpIHtcbiAgICAgICAgbGV0IGdhcmJhZ2VMaW5lcyA9IFtdO1xuICAgICAgICBsZXQgbnVtTGluZXMgPSB0aGlzLnVwY29taW5nTGluZXM7XG4gICAgICAgIGxldCByYW5kb21Ib2xlO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IG51bUxpbmVzOyBpKyspIHtcbiAgICAgICAgICAgIGlmIChpICUgMiA9PT0gMCkgcmFuZG9tSG9sZSA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDkpO1xuICAgICAgICAgICAgbGV0IGdhcmJhZ2VSb3cgPSBbOCwgOCwgOCwgOCwgOCwgOCwgOCwgOCwgOCwgOF07XG4gICAgICAgICAgICBnYXJiYWdlUm93W3JhbmRvbUhvbGVdID0gMDtcbiAgICAgICAgICAgIGdhcmJhZ2VMaW5lcy5wdXNoKGdhcmJhZ2VSb3cpO1xuICAgICAgICB9XG4gICAgICAgIC8vIGlmIHBsYXllciByZWFjaGVzIHRoZSB0b3AsIHBsYXllciBsb3Nlc1xuICAgICAgICAvLyBzbGljZSBhbGxvd3MgcGxheWVyIHRvIGNvbnRpbnVlIHBsYXlpbmcgaWYgdG9wIG1pZGRsZSBpcyBjbGVhclxuICAgICAgICBpZiAoIXRoaXMuZmllbGRbbnVtTGluZXMgLSAxXS5zbGljZSgyLDcpLmluY2x1ZGVzKDApKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcImxvc3RcIik7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5maWVsZCA9IHRoaXMuZmllbGQuc2xpY2UobnVtTGluZXMsIDIwKS5jb25jYXQoZ2FyYmFnZUxpbmVzKTtcbiAgICAgICAgdGhpcy51cGNvbWluZ0xpbmVzID0gMDtcbiAgICAgICAgdGhpcy5yZW5kZXIoKTtcbiAgICB9XG5cbn0iLCJpbXBvcnQgR2FtZSBmcm9tICcuL2dhbWUvZ2FtZSc7XG5pbXBvcnQgRmllbGQgZnJvbSAnLi9maWVsZC9maWVsZCc7XG5pbXBvcnQgTXVsdGlwbGF5ZXIgZnJvbSAnLi9tdWx0aXBsYXllci9tdWx0aXBsYXllcic7XG5cbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsICgpID0+IHtcbiAgICBjb25zdCBmaWVsZENvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZmllbGQtY29udGFpbmVyXCIpO1xuICAgIGNvbnN0IGZpZWxkQ29udGFpbmVyMiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZmllbGQtY29udGFpbmVyLTJcIik7XG5cbiAgICBsZXQgZmllbGQgPSBuZXcgRmllbGQoMSk7XG4gICAgbGV0IGZpZWxkMiA9IG5ldyBGaWVsZCgyKTtcbiAgICBmaWVsZC5jcmVhdGVDb21wbGV0ZUZpZWxkKGZpZWxkQ29udGFpbmVyKTtcbiAgICBmaWVsZDIuY3JlYXRlQ29tcGxldGVGaWVsZChmaWVsZENvbnRhaW5lcjIpO1xuXG4gICAgLy8gbGV0IG9wdGlvbnNQbGF5ZXIxID0geyBnYW1lTnVtOiAxLCBtb3ZlU3BlZWQ6IDIwLCBjb250cm9sczogeyBsZWZ0OiAzNywgcmlnaHQ6IDM5LCB0dXJuUmlnaHQ6IDM4LCBzb2Z0RHJvcDogNDAsIGhvbGQ6IDE5MSwgdHVybkxlZnQ6IDc2LCBoYXJkRHJvcDogMTggfSB9XG4gICAgbGV0IG9wdGlvbnNQbGF5ZXIxID0geyBnYW1lTnVtOiAxLCBtb3ZlU3BlZWQ6IDIwLCBjb250cm9sczogeyBsZWZ0OiAzNywgcmlnaHQ6IDM5LCB0dXJuUmlnaHQ6IDM4LCBzb2Z0RHJvcDogNDAsIGhvbGQ6IDE2LCB0dXJuTGVmdDogNjcsIGhhcmREcm9wOiAzMiB9IH1cbiAgICBsZXQgb3B0aW9uc1BsYXllcjIgPSB7IGdhbWVOdW06IDIsIG1vdmVTcGVlZDogMjAsIGNvbnRyb2xzOiB7IGxlZnQ6IDE4OCwgcmlnaHQ6IDE5MSwgdHVyblJpZ2h0OiA3Niwgc29mdERyb3A6IDE5MCwgaG9sZDogNzUsIHR1cm5MZWZ0OiA4NywgaGFyZERyb3A6IDE4IH0gfVxuXG4gICAgbGV0IGdhbWUxID0gbmV3IEdhbWUob3B0aW9uc1BsYXllcjEpO1xuICAgIGdhbWUxLmtleUxpc3RlbmVyKCk7XG4gICAgLy8gZ2FtZTEucGxheShmaWVsZENvbnRhaW5lcik7XG5cbiAgICBsZXQgZ2FtZTIgPSBuZXcgR2FtZShvcHRpb25zUGxheWVyMik7XG4gICAgZ2FtZTIua2V5TGlzdGVuZXIoKTtcbiAgICAvLyBnYW1lMi5wbGF5KGZpZWxkQ29udGFpbmVyKTtcblxuICAgIGxldCBtdWx0aXBsYXllck1vZGUgPSBuZXcgTXVsdGlwbGF5ZXIoZ2FtZTEsIGdhbWUyKTtcbiAgICBtdWx0aXBsYXllck1vZGUuc3RhcnRNdWx0aXBsYXllcigpO1xuXG59KTsiLCJpbXBvcnQgR2FtZSBmcm9tICcuLi9nYW1lL2dhbWUnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNdWx0aXBsYXllciB7XG4gICAgY29uc3RydWN0b3IocGxheWVyMSwgcGxheWVyMikge1xuICAgICAgICB0aGlzLnBsYXllcjEgPSBwbGF5ZXIxO1xuICAgICAgICB0aGlzLnBsYXllcjIgPSBwbGF5ZXIyO1xuICAgIH1cblxuICAgIHN0YXJ0TXVsdGlwbGF5ZXIoKSB7XG4gICAgICAgIHRoaXMucGxheWVyMS5zZXRPcHBvbmVudCh0aGlzLnBsYXllcjIpO1xuICAgICAgICB0aGlzLnBsYXllcjIuc2V0T3Bwb25lbnQodGhpcy5wbGF5ZXIxKTtcbiAgICAgICAgdGhpcy5wbGF5ZXIxLnBsYXkoKTtcbiAgICAgICAgdGhpcy5wbGF5ZXIyLnBsYXkoKTtcbiAgICB9XG59XG5cbi8vIG11bHRpcGxheWVyLmpzKGdhbWUxLCBnYW1lMikge1xuLy8gICAgIGlmIGdhbWUxLnNlbnRMaW5lcyA/XG4vLyAgICAgICAgIGdhbWUyLmFkZExpbmVzXG4vLyBcdGlmIGdhbWUyLnNlbnRMaW5lcyA/XG4vLyAgICAgICAgICAgICBnYW1lMS5hZGRMaW5lc1xuXG4vLyBcdGdhbWUxIHtcbi8vICAgICAgICAgdGhpcy5vcHBvbmVudCA9IOKAmOKAmTtcbi8vICAgICAgICAgdGhpcy5tdWx0aXBsYXllciA9IOKAnOKAnTtcbi8vICAgICB9XG5cbi8vICAgICBnYW1lMSA9IG5ld0dhbWUocGFyYW1zKVxuLy8gICAgIGdhbWUyID0gbmV3R2FtZShwYXJhbXMpXG5cbi8vICAgICBnYW1lMS5zZXQoZ2FtZTIpIHtcbi8vICAgICAgICAgd2lsbCBzZXQgbXVsdGlwbGF5ZXIgdG8gdHJ1ZSBhbmQgb3Bwb25lbnQgdG8gb3RoZXIgZ2FtZVxuLy8gICAgIH0iLCJpbXBvcnQgUGllY2UgZnJvbSAnLi9waWVjZSc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIElQaWVjZSBleHRlbmRzIFBpZWNlIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgdGhpcy5uYW1lID0gXCJJUGllY2VcIjtcbiAgICAgICAgdGhpcy5wb3NpdGlvbiA9IHtcbiAgICAgICAgICAgIHRvcDogW10sXG4gICAgICAgICAgICBtaWRkbGU6IFtdLFxuICAgICAgICAgICAgYm90dG9tOiBbWzEsIDNdLCBbMSwgNF0sIFsxLCA1XSwgWzEsIDZdXVxuICAgICAgICB9O1xuICAgICAgICB0aGlzLmNvbG9yQ29kZSA9IDI7XG4gICAgICAgIHRoaXMudHVybmluZ1BvaW50ID0gWzEsIDVdO1xuICAgICAgICB0aGlzLmRpc3BsYXlTcXVhcmVzID0gW1swLCAyXSwgWzEsIDJdLCBbMiwgMl0sIFszLCAyXV07XG5cbiAgICAgICAgdGhpcy5yZW1vdmVTcXVhcmVzID0gW107XG4gICAgfVxuXG5cbn1cblxuXG4iLCJpbXBvcnQgUGllY2UgZnJvbSAnLi9waWVjZSc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIGpQaWVjZSBleHRlbmRzIFBpZWNlIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgdGhpcy5uYW1lID0gXCJKUGllY2VcIjtcbiAgICAgICAgdGhpcy5wb3NpdGlvbiA9IHtcbiAgICAgICAgICAgIHRvcDogW1swLCAzXV0sXG4gICAgICAgICAgICBtaWRkbGU6IFtdLFxuICAgICAgICAgICAgYm90dG9tOiBbWzEsIDNdLCBbMSwgNF0sIFsxLCA1XV1cbiAgICAgICAgfTtcbiAgICAgICAgdGhpcy5jb2xvckNvZGUgPSA3O1xuXG4gICAgICAgIHRoaXMudHVybmluZ1BvaW50ID0gWzEsIDRdO1xuXG4gICAgICAgIHRoaXMuZGlzcGxheVNxdWFyZXMgPSBbWzEsIDFdLCBbMSwgMl0sIFsyLCAyXSwgWzMsIDJdXTtcbiBcbiAgICAgICAgdGhpcy5yZW1vdmVTcXVhcmVzID0gW107XG4gICAgfVxufSIsImltcG9ydCBQaWVjZSBmcm9tICcuL3BpZWNlJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgbFBpZWNlIGV4dGVuZHMgUGllY2Uge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICB0aGlzLm5hbWUgPSBcIkxQaWVjZVwiO1xuICAgICAgICB0aGlzLnBvc2l0aW9uID0ge1xuICAgICAgICAgICAgdG9wOiBbWzAsIDVdXSxcbiAgICAgICAgICAgIG1pZGRsZTogW10sXG4gICAgICAgICAgICBib3R0b206IFtbMSwgM10sIFsxLCA0XSwgWzEsIDVdXVxuICAgICAgICB9O1xuICAgICAgICB0aGlzLmNvbG9yQ29kZSA9IDY7XG5cbiAgICAgICAgdGhpcy50dXJuaW5nUG9pbnQgPSBbMSwgNF07XG5cbiAgICAgICAgdGhpcy5kaXNwbGF5U3F1YXJlcyA9IFtbMSwgMl0sIFsyLCAyXSwgWzMsIDJdLCBbMywgMV1dO1xuXG4gICAgICAgIHRoaXMucmVtb3ZlU3F1YXJlcyA9IFtdO1xuICAgIH1cbn0iLCJpbXBvcnQgUGllY2UgZnJvbSAnLi9waWVjZSc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE9QaWVjZSBleHRlbmRzIFBpZWNlIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgdGhpcy5uYW1lID0gXCJPUGllY2VcIjtcbiAgICAgICAgdGhpcy5wb3NpdGlvbiA9IHtcbiAgICAgICAgICAgIHRvcDogW1swLCA0XSwgWzAsIDVdXSxcbiAgICAgICAgICAgIG1pZGRsZTogW10sXG4gICAgICAgICAgICBib3R0b206IFtbMSwgNF0sWzEsIDVdXVxuICAgICAgICB9O1xuICAgICAgICB0aGlzLmNvbG9yQ29kZSA9IDE7XG4gICAgICAgIHRoaXMudHVybmluZ1BvaW50ID0gWzEsIDRdO1xuICAgICAgICB0aGlzLmRpc3BsYXlTcXVhcmVzID0gW1sxLCAxXSwgWzIsIDFdLCBbMSwgMl0sIFsyLCAyXV07XG5cbiAgICAgICAgdGhpcy5yZW1vdmVTcXVhcmVzID0gW107XG4gICAgfVxuXG4gICAgLy8gT1BpZWNlIGRvZXMgbm90IHR1cm5cbiAgICB0dXJuUmlnaHQoKSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG59ICIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIFBpZWNlIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5sZWZ0TW9zdCA9ICcnO1xuICAgICAgICB0aGlzLnJpZ2h0TW9zdCA9ICcnO1xuICAgIH1cblxuICAgIHNldExlZnRNb3N0QW5kUmlnaHRNb3N0KCkge1xuICAgICAgICBsZXQgbGVmdE1vc3Q7XG4gICAgICAgIGxldCByaWdodE1vc3Q7XG4gICAgICAgIE9iamVjdC52YWx1ZXModGhpcy5wb3NpdGlvbikuZm9yRWFjaChjb29yZGluYXRlc0FycmF5ID0+IGNvb3JkaW5hdGVzQXJyYXkuZm9yRWFjaChhcnJheSA9PiB7XG4gICAgICAgICAgICBsZXQgY29sdW1uVmFsdWUgPSBhcnJheVsxXTtcbiAgICAgICAgICAgIGlmICghbGVmdE1vc3QpIGxlZnRNb3N0ID0gY29sdW1uVmFsdWU7XG4gICAgICAgICAgICBpZiAoIXJpZ2h0TW9zdCkgcmlnaHRNb3N0ID0gY29sdW1uVmFsdWU7XG4gICAgICAgICAgICBpZiAoY29sdW1uVmFsdWUgPCBsZWZ0TW9zdCkgbGVmdE1vc3QgPSBjb2x1bW5WYWx1ZTtcbiAgICAgICAgICAgIGlmIChjb2x1bW5WYWx1ZSA+IHJpZ2h0TW9zdCkgcmlnaHRNb3N0ID0gY29sdW1uVmFsdWU7XG4gICAgICAgIH0pKTtcbiAgICAgICAgdGhpcy5sZWZ0TW9zdCA9IGxlZnRNb3N0O1xuICAgICAgICB0aGlzLnJpZ2h0TW9zdCA9IHJpZ2h0TW9zdDtcbiAgICB9XG5cbiAgICBwb3B1bGF0ZUZpZWxkKGZpZWxkKSB7XG5cbiAgICAgICAgbGV0IGNvb3JkaW5hdGVBcnJheXMgPSBPYmplY3QudmFsdWVzKHRoaXMucG9zaXRpb24pO1xuXG4gICAgICAgIGNvb3JkaW5hdGVBcnJheXMuZm9yRWFjaChhcnJheSA9PiB7XG4gICAgICAgICAgICBhcnJheS5mb3JFYWNoKGNvb3JkaW5hdGUgPT4ge1xuICAgICAgICAgICAgICAgIGxldCBbcm93LCBjb2xdID0gW2Nvb3JkaW5hdGVbMF0sIGNvb3JkaW5hdGVbMV1dO1xuICAgICAgICAgICAgICAgIGlmICgoY29sID49IDAgJiYgY29sIDw9IDE5KSAmJiAocm93ID49IDAgJiYgcm93IDw9IDE5KSkgZmllbGRbcm93XVtjb2xdID0gdGhpcy5jb2xvckNvZGU7XG4gICAgICAgICAgICB9KVxuICAgICAgICB9KTtcblxuICAgICAgICB0aGlzLnJlbW92ZVNxdWFyZXMuZm9yRWFjaChwb3NpdGlvbkFycmF5ID0+IHtcbiAgICAgICAgICAgIGxldCBbcm93LCBjb2xdID0gW3Bvc2l0aW9uQXJyYXlbMF0sIHBvc2l0aW9uQXJyYXlbMV1dO1xuICAgICAgICAgICAgaWYgKChjb2wgPj0gMCAmJiBjb2wgPD0gMTkpICYmIChyb3cgPj0gMCAmJiByb3cgPD0gMTkpKSBmaWVsZFtyb3ddW2NvbF0gPSAwO1xuICAgICAgICB9KTtcblxuICAgIH1cblxuICAgIC8vIGNvbXBhcmVzIHR3byBhcnJheXMgb2YgY29vcmRpbmF0ZXMgYW5kIGNoZWNrIGlmIHRoZXkgaGF2ZSB0aGUgc2FtZSBjb250ZW50IGluIHRoZSBzYW1lIG9yZGVyXG4gICAgX3NxdWFyZXNBcmVFcXVhbChvbGRTcXVhcmUsIG5ld1NxdWFyZSkge1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IG9sZFNxdWFyZS5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgaWYgKG9sZFNxdWFyZVtpXSAhPT0gbmV3U3F1YXJlW2ldKSByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuXG4gICAgX2luY2x1ZGVzKHNxdWFyZSwgY29vcmRpbmF0ZUFycmF5cykge1xuICAgICAgICBsZXQgcmVzdWx0ID0gZmFsc2U7XG4gICAgICAgIGNvb3JkaW5hdGVBcnJheXMuZm9yRWFjaChhcnJheSA9PiB7XG4gICAgICAgICAgICBpZiAodGhpcy5fc3F1YXJlc0FyZUVxdWFsKHNxdWFyZSwgYXJyYXkpKSB7XG4gICAgICAgICAgICAgICAgcmVzdWx0ID0gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxuXG4gICAgZHJvcCgpIHtcbiAgICAgICAgbGV0IG9sZFBvc2l0aW9uID0ge1xuICAgICAgICAgICAgdG9wOiB0aGlzLnBvc2l0aW9uLnRvcC5tYXAoYXJyYXkgPT4gYXJyYXkuc2xpY2UoKSksXG4gICAgICAgICAgICBtaWRkbGU6IHRoaXMucG9zaXRpb24ubWlkZGxlLm1hcChhcnJheSA9PiBhcnJheS5zbGljZSgpKSxcbiAgICAgICAgICAgIGJvdHRvbTogdGhpcy5wb3NpdGlvbi5ib3R0b20ubWFwKGFycmF5ID0+IGFycmF5LnNsaWNlKCkpLFxuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5wb3NpdGlvbi50b3AgPSB0aGlzLnBvc2l0aW9uLnRvcC5tYXAoYXJyYXkgPT4gW2FycmF5WzBdICsgMSwgYXJyYXlbMV1dKTtcbiAgICAgICAgdGhpcy5wb3NpdGlvbi5taWRkbGUgPSB0aGlzLnBvc2l0aW9uLm1pZGRsZS5tYXAoYXJyYXkgPT4gW2FycmF5WzBdICsgMSwgYXJyYXlbMV1dKTtcbiAgICAgICAgdGhpcy5wb3NpdGlvbi5ib3R0b20gPSB0aGlzLnBvc2l0aW9uLmJvdHRvbS5tYXAoYXJyYXkgPT4gW2FycmF5WzBdICsgMSwgYXJyYXlbMV1dKTtcbiAgICAgICAgdGhpcy50dXJuaW5nUG9pbnQgPSBbdGhpcy50dXJuaW5nUG9pbnRbMF0gKyAxLCB0aGlzLnR1cm5pbmdQb2ludFsxXV07XG5cbiAgICAgICAgdGhpcy5zZXRSZW1vdmVTcXVhcmVzKG9sZFBvc2l0aW9uKTtcbiAgICB9XG5cbiAgICAvLyBmaW5kIGhpZ2hlc3QgcG9zc2libGUgZ3JvdW5kLXBvc2l0aW9uIGZvciBwaWVjZVxuICAgIGhhcmREcm9wKGZpZWxkKSB7XG4gICAgICAgIHRoaXMuY2xlYXJTZWxmRnJvbUJvYXJkKGZpZWxkKTtcbiAgICAgICAgbGV0IHN0b3BwZWQgPSBmYWxzZTtcbiAgICAgICAgd2hpbGUgKCFzdG9wcGVkKSB7XG4gICAgICAgICAgICBsZXQgaGFuZ2luZ1NxdWFyZXMgPSB0aGlzLmhhbmdpbmdTcXVhcmVzKHRoaXMucG9zaXRpb24pO1xuICAgICAgICAgICAgaGFuZ2luZ1NxdWFyZXMuZm9yRWFjaChjb29yZGluYXRlID0+IHtcbiAgICAgICAgICAgICAgICBsZXQgW3JvdywgY29sXSA9IFtjb29yZGluYXRlWzBdLCBjb29yZGluYXRlWzFdXTtcbiAgICAgICAgICAgICAgICBpZiAoKHJvdyArIDEgPT09IDIwIHx8IGZpZWxkW3JvdyArIDFdW2NvbF0pKSBzdG9wcGVkID0gdHJ1ZTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgaWYgKHN0b3BwZWQpIGJyZWFrO1xuICAgICAgICAgICAgdGhpcy5wb3NpdGlvbi50b3AgPSB0aGlzLnBvc2l0aW9uLnRvcC5tYXAoYXJyYXkgPT4gW2FycmF5WzBdICsgMSwgYXJyYXlbMV1dKTtcbiAgICAgICAgICAgIHRoaXMucG9zaXRpb24ubWlkZGxlID0gdGhpcy5wb3NpdGlvbi5taWRkbGUubWFwKGFycmF5ID0+IFthcnJheVswXSArIDEsIGFycmF5WzFdXSk7XG4gICAgICAgICAgICB0aGlzLnBvc2l0aW9uLmJvdHRvbSA9IHRoaXMucG9zaXRpb24uYm90dG9tLm1hcChhcnJheSA9PiBbYXJyYXlbMF0gKyAxLCBhcnJheVsxXV0pO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgY2xlYXJTZWxmRnJvbUJvYXJkKGZpZWxkKSB7XG4gICAgICAgIE9iamVjdC52YWx1ZXModGhpcy5wb3NpdGlvbikuZm9yRWFjaChjb29yZGluYXRlQXJyYXlzID0+IGNvb3JkaW5hdGVBcnJheXMuZm9yRWFjaChjb29yZGluYXRlID0+IHtcbiAgICAgICAgICAgIGxldCByb3cgPSBjb29yZGluYXRlWzBdO1xuICAgICAgICAgICAgbGV0IGNvbCA9IGNvb3JkaW5hdGVbMV07XG4gICAgICAgICAgICBmaWVsZFtyb3ddW2NvbF0gPSAwO1xuICAgICAgICB9KSk7XG4gICAgfVxuXG4gICAgbW92ZShkaXJlY3Rpb24sIGZpZWxkKSB7XG4gICAgICAgIGxldCBvbGRQb3NpdGlvbiA9IHtcbiAgICAgICAgICAgIHRvcDogdGhpcy5wb3NpdGlvbi50b3AubWFwKGFycmF5ID0+IGFycmF5LnNsaWNlKCkpLFxuICAgICAgICAgICAgbWlkZGxlOiB0aGlzLnBvc2l0aW9uLm1pZGRsZS5tYXAoYXJyYXkgPT4gYXJyYXkuc2xpY2UoKSksXG4gICAgICAgICAgICBib3R0b206IHRoaXMucG9zaXRpb24uYm90dG9tLm1hcChhcnJheSA9PiBhcnJheS5zbGljZSgpKSxcbiAgICAgICAgfVxuICAgICAgICBzd2l0Y2ggKGRpcmVjdGlvbikge1xuICAgICAgICAgICAgY2FzZSBcImxlZnRcIjpcbiAgICAgICAgICAgICAgICB0aGlzLnBvc2l0aW9uLnRvcCA9IHRoaXMucG9zaXRpb24udG9wLm1hcChhcnJheSA9PiBbYXJyYXlbMF0sIGFycmF5WzFdIC0gMV0pO1xuICAgICAgICAgICAgICAgIHRoaXMucG9zaXRpb24ubWlkZGxlID0gdGhpcy5wb3NpdGlvbi5taWRkbGUubWFwKGFycmF5ID0+IFthcnJheVswXSwgYXJyYXlbMV0gLSAxXSk7XG4gICAgICAgICAgICAgICAgdGhpcy5wb3NpdGlvbi5ib3R0b20gPSB0aGlzLnBvc2l0aW9uLmJvdHRvbS5tYXAoYXJyYXkgPT4gW2FycmF5WzBdLCBhcnJheVsxXSAtIDFdKTtcbiAgICAgICAgICAgICAgICB0aGlzLnR1cm5pbmdQb2ludCA9IFt0aGlzLnR1cm5pbmdQb2ludFswXSwgdGhpcy50dXJuaW5nUG9pbnRbMV0gLSAxXTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgXCJ0dXJuUmlnaHRcIjpcbiAgICAgICAgICAgICAgICAvLyBkZWZlciB0byBzdWJjbGFzcyBcInR1cm5cIiBtZXRob2RcbiAgICAgICAgICAgICAgICB0aGlzLnR1cm5SaWdodChmaWVsZCwgb2xkUG9zaXRpb24pO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBcInJpZ2h0XCI6XG4gICAgICAgICAgICAgICAgdGhpcy5wb3NpdGlvbi50b3AgPSB0aGlzLnBvc2l0aW9uLnRvcC5tYXAoYXJyYXkgPT4gW2FycmF5WzBdLCBhcnJheVsxXSArIDFdKTtcbiAgICAgICAgICAgICAgICB0aGlzLnBvc2l0aW9uLm1pZGRsZSA9IHRoaXMucG9zaXRpb24ubWlkZGxlLm1hcChhcnJheSA9PiBbYXJyYXlbMF0sIGFycmF5WzFdICsgMV0pO1xuICAgICAgICAgICAgICAgIHRoaXMucG9zaXRpb24uYm90dG9tID0gdGhpcy5wb3NpdGlvbi5ib3R0b20ubWFwKGFycmF5ID0+IFthcnJheVswXSwgYXJyYXlbMV0gKyAxXSk7XG4gICAgICAgICAgICAgICAgdGhpcy50dXJuaW5nUG9pbnQgPSBbdGhpcy50dXJuaW5nUG9pbnRbMF0sIHRoaXMudHVybmluZ1BvaW50WzFdICsgMV07XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIFwiZG93blwiOlxuICAgICAgICAgICAgICAgIHRoaXMucG9zaXRpb24udG9wID0gdGhpcy5wb3NpdGlvbi50b3AubWFwKGFycmF5ID0+IFthcnJheVswXSArIDEsIGFycmF5WzFdXSk7XG4gICAgICAgICAgICAgICAgdGhpcy5wb3NpdGlvbi5taWRkbGUgPSB0aGlzLnBvc2l0aW9uLm1pZGRsZS5tYXAoYXJyYXkgPT4gW2FycmF5WzBdICsgMSwgYXJyYXlbMV1dKTtcbiAgICAgICAgICAgICAgICB0aGlzLnBvc2l0aW9uLmJvdHRvbSA9IHRoaXMucG9zaXRpb24uYm90dG9tLm1hcChhcnJheSA9PiBbYXJyYXlbMF0gKyAxLCBhcnJheVsxXV0pO1xuICAgICAgICAgICAgICAgIHRoaXMudHVybmluZ1BvaW50ID0gW3RoaXMudHVybmluZ1BvaW50WzBdICsgMSwgdGhpcy50dXJuaW5nUG9pbnRbMV1dO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBcInVwXCI6XG4gICAgICAgICAgICAgICAgdGhpcy5wb3NpdGlvbi50b3AgPSB0aGlzLnBvc2l0aW9uLnRvcC5tYXAoYXJyYXkgPT4gW2FycmF5WzBdIC0gMSwgYXJyYXlbMV1dKTtcbiAgICAgICAgICAgICAgICB0aGlzLnBvc2l0aW9uLm1pZGRsZSA9IHRoaXMucG9zaXRpb24ubWlkZGxlLm1hcChhcnJheSA9PiBbYXJyYXlbMF0gLSAxLCBhcnJheVsxXV0pO1xuICAgICAgICAgICAgICAgIHRoaXMucG9zaXRpb24uYm90dG9tID0gdGhpcy5wb3NpdGlvbi5ib3R0b20ubWFwKGFycmF5ID0+IFthcnJheVswXSAtIDEsIGFycmF5WzFdXSk7XG4gICAgICAgICAgICAgICAgdGhpcy50dXJuaW5nUG9pbnQgPSBbdGhpcy50dXJuaW5nUG9pbnRbMF0gLSAxLCB0aGlzLnR1cm5pbmdQb2ludFsxXV07XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIFwidHVybkxlZnRcIjpcbiAgICAgICAgICAgICAgICB0aGlzLnR1cm5MZWZ0KGZpZWxkKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnNldFJlbW92ZVNxdWFyZXMob2xkUG9zaXRpb24pO1xuICAgIH1cblxuICAgIHR1cm5SaWdodChmaWVsZCwgb2xkUG9zaXRpb24pIHtcbiAgICAgICAgbGV0IHNxdWFyZXMgPSBbXTtcbiAgICAgICAgT2JqZWN0LnZhbHVlcyh0aGlzLnBvc2l0aW9uKS5mb3JFYWNoKGNvb3JkaW5hdGVzQXJyYXkgPT4gc3F1YXJlcy5wdXNoKC4uLmNvb3JkaW5hdGVzQXJyYXkpKTtcbiAgICAgICAgdGhpcy5wb3NpdGlvbi50b3AgPSBbXTtcbiAgICAgICAgdGhpcy5wb3NpdGlvbi5taWRkbGUgPSBbXTtcbiAgICAgICAgdGhpcy5wb3NpdGlvbi5ib3R0b20gPSBbXTtcbiAgICAgICAgc3F1YXJlcy5mb3JFYWNoKHNxdWFyZSA9PiB7XG4gICAgICAgICAgICBsZXQgY29sdW1uID0gc3F1YXJlWzFdO1xuICAgICAgICAgICAgbGV0IGhlaWdodERpZmZlcmVuY2UgPSB0aGlzLnR1cm5pbmdQb2ludFswXSAtIHNxdWFyZVswXTtcbiAgICAgICAgICAgIGxldCB3aWR0aERpZmZlcmVuY2UgPSB0aGlzLnR1cm5pbmdQb2ludFsxXSAtIHNxdWFyZVsxXTtcbiAgICAgICAgICAgIGxldCBuZXdDb2wgPSB0aGlzLnR1cm5pbmdQb2ludFsxXSArIGhlaWdodERpZmZlcmVuY2U7XG4gICAgICAgICAgICBsZXQgbmV3Um93ID0gdGhpcy50dXJuaW5nUG9pbnRbMF0gKyAod2lkdGhEaWZmZXJlbmNlICogLTEpO1xuICAgICAgICAgICAgc3dpdGNoIChjb2x1bW4pIHtcbiAgICAgICAgICAgICAgICBjYXNlIGNvbHVtbiA9IHRoaXMucmlnaHRNb3N0OlxuICAgICAgICAgICAgICAgICAgICB0aGlzLnBvc2l0aW9uLmJvdHRvbS5wdXNoKFtuZXdSb3csIG5ld0NvbF0pO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlIGNvbHVtbiA9IHRoaXMubGVmdE1vc3Q6XG4gICAgICAgICAgICAgICAgICAgIHRoaXMucG9zaXRpb24udG9wLnB1c2goW25ld1JvdywgbmV3Q29sXSk7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgICAgIHRoaXMucG9zaXRpb24ubWlkZGxlLnB1c2goW25ld1JvdywgbmV3Q29sXSk7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5zZXRSZW1vdmVTcXVhcmVzKG9sZFBvc2l0aW9uKTtcbiAgICAgICAgLy8gY2F1c2luZyBpc3N1ZXMgd2l0aCB0dXJuaW5nIGludG8gdGhlIGZpZWxkPz8/OlxuICAgICAgICAvLyB0aGlzLnBvcHVsYXRlRmllbGQoZmllbGQpO1xuXG4gICAgICAgIC8vIGZpbmQgbGVmdCBhbmQgcmlnaHQgbW9zdCBzcXVhcmVzIHRvIHNlZSBpZiBwaWVjZSB0aHJvdWdoIHdhbGxcbiAgICAgICAgLy8gaWYgdGhyb3VnaCB3YWxsLCBwdXNoIHBpZWNlIGJhY2sgaW50byBmaWVsZFxuICAgICAgICB0aGlzLnNldExlZnRNb3N0QW5kUmlnaHRNb3N0KCk7XG5cbiAgICAgICAgZGVidWdnZXJcbiAgICAgICAgd2hpbGUgKHRoaXMucmlnaHRNb3N0ID4gOSB8fCB0aGlzLmxlZnRNb3N0IDwgMCkge1xuICAgICAgICAgICAgdGhpcy5yaWdodE1vc3QgPiA5ID8gdGhpcy5tb3ZlKCdsZWZ0JykgOiB0aGlzLm1vdmUoJ3JpZ2h0Jyk7XG4gICAgICAgICAgICB0aGlzLnNldExlZnRNb3N0QW5kUmlnaHRNb3N0KCk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBpbiB0aGUgY2FzZSB0aGF0IHRoZSBJUGllY2UgaXMgdHVybmVkIHRocm91Z2ggdGhlIGZpZWxkIGNlaWxpbmdcbiAgICAgICAgaWYgKHRoaXMucG9zaXRpb24udG9wLmxlbmd0aCkge1xuICAgICAgICAgICAgd2hpbGUgKHRoaXMucG9zaXRpb24udG9wWzBdWzBdIDwgMCkgdGhpcy5tb3ZlKCdkb3duJyk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBpbiB0aGUgY2FzZSB0aGF0IHBpZWNlIGlzIHR1cm5lZCB0aHJvdWdoIGZsb29yXG4gICAgICAgIGRlYnVnZ2VyXG4gICAgICAgIHdoaWxlICh0aGlzLnBvc2l0aW9uLmJvdHRvbVswXVswXSA+IDE5KSB7XG4gICAgICAgICAgICBkZWJ1Z2dlclxuICAgICAgICAgICAgdGhpcy5tb3ZlKCd1cCcpO1xuICAgICAgICB9XG5cbiAgICB9XG5cbiAgICB0dXJuTGVmdChmaWVsZCkge1xuICAgICAgICBsZXQgc3F1YXJlcyA9IFtdO1xuICAgICAgICBPYmplY3QudmFsdWVzKHRoaXMucG9zaXRpb24pLmZvckVhY2goY29vcmRpbmF0ZXNBcnJheSA9PiBzcXVhcmVzLnB1c2goLi4uY29vcmRpbmF0ZXNBcnJheSkpO1xuICAgICAgICB0aGlzLnBvc2l0aW9uLnRvcCA9IFtdO1xuICAgICAgICB0aGlzLnBvc2l0aW9uLm1pZGRsZSA9IFtdO1xuICAgICAgICB0aGlzLnBvc2l0aW9uLmJvdHRvbSA9IFtdO1xuICAgICAgICBzcXVhcmVzLmZvckVhY2goc3F1YXJlID0+IHtcbiAgICAgICAgICAgIGxldCBjb2x1bW4gPSBzcXVhcmVbMV07XG4gICAgICAgICAgICBsZXQgaGVpZ2h0RGlmZmVyZW5jZSA9IHRoaXMudHVybmluZ1BvaW50WzBdIC0gc3F1YXJlWzBdO1xuICAgICAgICAgICAgbGV0IHdpZHRoRGlmZmVyZW5jZSA9IHRoaXMudHVybmluZ1BvaW50WzFdIC0gc3F1YXJlWzFdO1xuICAgICAgICAgICAgbGV0IG5ld0NvbCA9IHRoaXMudHVybmluZ1BvaW50WzFdIC0gaGVpZ2h0RGlmZmVyZW5jZTtcbiAgICAgICAgICAgIGxldCBuZXdSb3cgPSB0aGlzLnR1cm5pbmdQb2ludFswXSAtICh3aWR0aERpZmZlcmVuY2UgKiAtMSk7XG4gICAgICAgICAgICBzd2l0Y2ggKGNvbHVtbikge1xuICAgICAgICAgICAgICAgIGNhc2UgY29sdW1uID0gdGhpcy5yaWdodE1vc3Q6XG4gICAgICAgICAgICAgICAgICAgIHRoaXMucG9zaXRpb24udG9wLnB1c2goW25ld1JvdywgbmV3Q29sXSk7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgY29sdW1uID0gdGhpcy5sZWZ0TW9zdDpcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wb3NpdGlvbi5ib3R0b20ucHVzaChbbmV3Um93LCBuZXdDb2xdKTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wb3NpdGlvbi5taWRkbGUucHVzaChbbmV3Um93LCBuZXdDb2xdKTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgICAgIC8vIGZpbmQgbGVmdCBhbmQgcmlnaHQgbW9zdCBzcXVhcmVzIHRvIHNlZSBpZiBwaWVjZSB0aHJvdWdoIHdhbGxcbiAgICAgICAgLy8gaWYgdGhyb3VnaCB3YWxsLCBwdXNoIHBpZWNlIGJhY2sgaW50byBmaWVsZFxuICAgICAgICB0aGlzLnNldExlZnRNb3N0QW5kUmlnaHRNb3N0KCk7XG5cbiAgICAgICAgZGVidWdnZXJcbiAgICAgICAgd2hpbGUgKHRoaXMucmlnaHRNb3N0ID4gOSB8fCB0aGlzLmxlZnRNb3N0IDwgMCkge1xuICAgICAgICAgICAgdGhpcy5yaWdodE1vc3QgPiA5ID8gdGhpcy5tb3ZlKCdsZWZ0JykgOiB0aGlzLm1vdmUoJ3JpZ2h0Jyk7XG4gICAgICAgICAgICB0aGlzLnNldExlZnRNb3N0QW5kUmlnaHRNb3N0KCk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBpbiB0aGUgY2FzZSB0aGF0IHRoZSBJUGllY2UgaXMgdHVybmVkIHRocm91Z2ggdGhlIGZpZWxkIGNlaWxpbmdcbiAgICAgICAgaWYgKHRoaXMucG9zaXRpb24udG9wLmxlbmd0aCkge1xuICAgICAgICAgICAgd2hpbGUgKHRoaXMucG9zaXRpb24udG9wWzBdWzBdIDwgMCkgdGhpcy5tb3ZlKCdkb3duJyk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBjb21wYXJlIG9sZCBwb3NpdGlvbiBvZiBwaWVjZSB3aXRoIG5ldyBwb3NpdGlvbiBcbiAgICBzZXRSZW1vdmVTcXVhcmVzKG9sZFBvc2l0aW9uKSB7XG4gICAgICAgIGxldCBvbGRTcXVhcmVzID0gW107XG4gICAgICAgIGxldCBuZXdTcXVhcmVzID0gW107XG4gICAgICAgIE9iamVjdC52YWx1ZXMob2xkUG9zaXRpb24pLmZvckVhY2goY29vcmRpbmF0ZXNBcnJheSA9PiBvbGRTcXVhcmVzLnB1c2goLi4uY29vcmRpbmF0ZXNBcnJheSkpO1xuICAgICAgICBPYmplY3QudmFsdWVzKHRoaXMucG9zaXRpb24pLmZvckVhY2goY29vcmRpbmF0ZXNBcnJheSA9PiBuZXdTcXVhcmVzLnB1c2goLi4uY29vcmRpbmF0ZXNBcnJheSkpO1xuICAgICAgICAvLyBrZWVwIHRyYWNrIG9mIHNxdWFyZXMgdGhhdCB0aGUgcG9zaXRpb25zIGRvIG5vdCBoYXZlIGluIGNvbW1vbiAoc3F1YXJlcyB0byByZW1vdmUgY29sb3IgZnJvbSlcbiAgICAgICAgdGhpcy5yZW1vdmVTcXVhcmVzID0gb2xkU3F1YXJlcy5maWx0ZXIob2xkU3F1YXJlID0+IHtcbiAgICAgICAgICAgIGlmICghdGhpcy5faW5jbHVkZXMob2xkU3F1YXJlLCBuZXdTcXVhcmVzKSkgcmV0dXJuIG9sZFNxdWFyZTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgaGFuZ2luZ1NxdWFyZXMocG9zaXRpb24pIHtcbiAgICAgICAgbGV0IHNxdWFyZXMgPSBbXTtcbiAgICAgICAgbGV0IGhhbmdpbmdTcXVhcmVzID0gW107XG4gICAgICAgIE9iamVjdC52YWx1ZXMocG9zaXRpb24pLmZvckVhY2goY29vcmRpbmF0ZUFycmF5ID0+IHNxdWFyZXMucHVzaCguLi5jb29yZGluYXRlQXJyYXkpKVxuICAgICAgICBzcXVhcmVzLmZvckVhY2goc3F1YXJlID0+IHtcbiAgICAgICAgICAgIGxldCBiZWxvd1NxdWFyZSA9IFtzcXVhcmVbMF0gKyAxLCBzcXVhcmVbMV1dO1xuICAgICAgICAgICAgaWYgKCF0aGlzLl9pbmNsdWRlcyhiZWxvd1NxdWFyZSwgc3F1YXJlcykpIGhhbmdpbmdTcXVhcmVzLnB1c2goc3F1YXJlKTtcbiAgICAgICAgfSlcbiAgICAgICAgcmV0dXJuIGhhbmdpbmdTcXVhcmVzO1xuICAgIH1cblxuICAgIHNpZGVTcXVhcmVzKCkge1xuICAgICAgICBsZXQgc3F1YXJlcyA9IFtdO1xuICAgICAgICBsZXQgc2lkZVNxdWFyZXMgPSB7XG4gICAgICAgICAgICBsZWZ0OiBbXSxcbiAgICAgICAgICAgIHJpZ2h0OiBbXVxuICAgICAgICB9O1xuICAgICAgICBPYmplY3QudmFsdWVzKHRoaXMucG9zaXRpb24pLmZvckVhY2goY29vcmRpbmF0ZUFycmF5ID0+IHNxdWFyZXMucHVzaCguLi5jb29yZGluYXRlQXJyYXkpKTtcbiAgICAgICAgc3F1YXJlcy5mb3JFYWNoKHNxdWFyZSA9PiB7XG4gICAgICAgICAgICBsZXQgYWRqYWNlbnRMZWZ0ID0gW3NxdWFyZVswXSwgc3F1YXJlWzFdIC0gMV07XG4gICAgICAgICAgICBsZXQgYWRqYWNlbnRSaWdodCA9IFtzcXVhcmVbMF0sIHNxdWFyZVsxXSArIDFdO1xuICAgICAgICAgICAgaWYgKCF0aGlzLl9pbmNsdWRlcyhhZGphY2VudExlZnQsIHNxdWFyZXMpKSBzaWRlU3F1YXJlcy5sZWZ0LnB1c2goc3F1YXJlKTtcbiAgICAgICAgICAgIGlmICghdGhpcy5faW5jbHVkZXMoYWRqYWNlbnRSaWdodCwgc3F1YXJlcykpIHNpZGVTcXVhcmVzLnJpZ2h0LnB1c2goc3F1YXJlKTtcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiBzaWRlU3F1YXJlcztcbiAgICB9XG5cbiAgICBpc0ZhbGxpbmcoZmllbGQpIHtcbiAgICAgICAgbGV0IHJlc3VsdCA9IHRydWU7XG4gICAgICAgIHRoaXMuaGFuZ2luZ1NxdWFyZXModGhpcy5wb3NpdGlvbikuZm9yRWFjaChjb29yZGluYXRlUGFpciA9PiB7XG4gICAgICAgICAgICBsZXQgW3JvdywgY29sXSA9IFtjb29yZGluYXRlUGFpclswXSwgY29vcmRpbmF0ZVBhaXJbMV1dO1xuICAgICAgICAgICAgLy8gaWYgdGhlIHBpZWNlJ3MgY3VycmVudCBwb3NpdGlvbiBpcyBhYm92ZSB0aGUgZmllbGQgZmxvb3Igb3IgYSBhbm90aGVyIHBpZWNlIChub3QgaW5jbHVkZSBnaG9zdCBwaWVjZSlcbiAgICAgICAgICAgIGlmICghZmllbGRbcm93ICsgMV0gfHwgKGZpZWxkW3JvdyArIDFdW2NvbF0gJiYgZmllbGRbcm93ICsgMV1bY29sXSAhPT0gXCJ4XCIpKSB7XG4gICAgICAgICAgICAgICAgcmVzdWx0ID0gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cblxuICAgIHJpZ2h0U2lkZUJsb2NrZWQoZmllbGQpIHtcbiAgICAgICAgbGV0IHJlc3VsdCA9IGZhbHNlO1xuICAgICAgICB0aGlzLnNpZGVTcXVhcmVzKCkucmlnaHQuZm9yRWFjaChjb29yZGluYXRlUGFpciA9PiB7XG4gICAgICAgICAgICBsZXQgW3JvdywgY29sXSA9IFtjb29yZGluYXRlUGFpclswXSwgY29vcmRpbmF0ZVBhaXJbMV1dO1xuICAgICAgICAgICAgLy8gaWYgYW55IHJpZ2h0IGZhY2luZyBzcXVhcmUgaGl0cyB0aGUgd2FsbCBvciBhbm90aGVyIHBpZWNlXG4gICAgICAgICAgICBpZiAoY29sID09PSA5IHx8IGZpZWxkW3Jvd11bY29sICsgMV0pIHtcbiAgICAgICAgICAgICAgICByZXN1bHQgPSB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG5cbiAgICBsZWZ0U2lkZUJsb2NrZWQoZmllbGQpIHtcbiAgICAgICAgbGV0IHJlc3VsdCA9IGZhbHNlO1xuICAgICAgICB0aGlzLnNpZGVTcXVhcmVzKCkubGVmdC5mb3JFYWNoKGNvb3JkaW5hdGVQYWlyID0+IHtcbiAgICAgICAgICAgIGxldCBbcm93LCBjb2xdID0gW2Nvb3JkaW5hdGVQYWlyWzBdLCBjb29yZGluYXRlUGFpclsxXV07XG4gICAgICAgICAgICAvLyBpZiBhbnkgbGVmdCBmYWNpbmcgc3F1YXJlIGhpdHMgdGhlIHdhbGwgb3IgYW5vdGhlciBwaWVjZVxuICAgICAgICAgICAgaWYgKGNvbCA9PT0gMCB8fCBmaWVsZFtyb3ddW2NvbCAtIDFdKSB7XG4gICAgICAgICAgICAgICAgcmVzdWx0ID0gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxufSIsImltcG9ydCBQaWVjZSBmcm9tICcuL3BpZWNlJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU1BpZWNlIGV4dGVuZHMgUGllY2Uge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICB0aGlzLm5hbWUgPSBcIlNQaWVjZVwiO1xuICAgICAgICB0aGlzLnBvc2l0aW9uID0ge1xuICAgICAgICAgICAgdG9wOiBbWzAsIDRdLCBbMCwgNV1dLFxuICAgICAgICAgICAgbWlkZGxlOiBbXSxcbiAgICAgICAgICAgIGJvdHRvbTogW1sxLCAzXSwgWzEsIDRdXVxuICAgICAgICB9O1xuICAgICAgICB0aGlzLmNvbG9yQ29kZSA9IDQ7XG5cbiAgICAgICAgdGhpcy50dXJuaW5nUG9pbnQgPSBbMSwgNF07XG5cbiAgICAgICAgdGhpcy5kaXNwbGF5U3F1YXJlcyA9IFtbMywgMV0sIFsyLCAxXSwgWzIsIDJdLCBbMSwgMl1dO1xuXG4gICAgICAgIHRoaXMucmVtb3ZlU3F1YXJlcyA9IFtdO1xuICAgIH1cbn0iLCJpbXBvcnQgUGllY2UgZnJvbSAnLi9waWVjZSc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRQaWVjZSBleHRlbmRzIFBpZWNlIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgdGhpcy5uYW1lID0gXCJUUGllY2VcIjtcbiAgICAgICAgdGhpcy5wb3NpdGlvbiA9IHtcbiAgICAgICAgICAgIHRvcDogW1swLCA0XV0sXG4gICAgICAgICAgICBtaWRkbGU6IFtdLFxuICAgICAgICAgICAgYm90dG9tOiBbWzEsIDNdLCBbMSwgNF0sIFsxLCA1XV0sXG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5jb2xvckNvZGUgPSAzO1xuXG4gICAgICAgIHRoaXMudHVybmluZ1BvaW50ID0gWzEsIDRdO1xuXG4gICAgICAgIHRoaXMuZGlzcGxheVNxdWFyZXMgPSBbWzEsIDJdLCBbMiwgMl0sIFszLCAyXSwgWzIsIDFdXTtcblxuICAgICAgICB0aGlzLnJlbW92ZVNxdWFyZXMgPSBbXTtcbiAgICB9XG59IiwiaW1wb3J0IFBpZWNlIGZyb20gJy4vcGllY2UnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBaUGllY2UgZXh0ZW5kcyBQaWVjZSB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIHRoaXMubmFtZSA9IFwiWlBpZWNlXCI7XG4gICAgICAgIHRoaXMucG9zaXRpb24gPSB7XG4gICAgICAgICAgICB0b3A6IFtbMCwgM10sIFswLCA0XV0sXG4gICAgICAgICAgICBtaWRkbGU6IFtdLFxuICAgICAgICAgICAgYm90dG9tOiBbWzEsIDRdLCBbMSwgNV1dXG4gICAgICAgIH07XG4gICAgICAgIHRoaXMuY29sb3JDb2RlID0gNTtcblxuICAgICAgICB0aGlzLnR1cm5pbmdQb2ludCA9IFsxLCA0XTtcblxuICAgICAgICB0aGlzLmRpc3BsYXlTcXVhcmVzID0gW1sxLCAxXSwgWzIsIDFdLCBbMiwgMl0sIFszLCAyXV07XG5cbiAgICAgICAgdGhpcy5yZW1vdmVTcXVhcmVzID0gW107XG4gICAgfVxufSJdLCJzb3VyY2VSb290IjoiIn0=