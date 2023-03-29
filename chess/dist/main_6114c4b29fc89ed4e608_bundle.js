/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ 75:
/***/ (function(__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) {


// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(294);
// EXTERNAL MODULE: ./node_modules/react-dom/client.js
var client = __webpack_require__(745);
// EXTERNAL MODULE: ./node_modules/chess.js/chess.js
var chess = __webpack_require__(941);
;// CONCATENATED MODULE: ./src/EndGameModal.jsx


class EndGameModal extends react.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  gameEndsWith() {
    let result = '';
    let by = '';
    if (this.props.isCheckmate) {
      result = this.props.turn == 'b' ? 'White won' : 'Black won';
      by = 'by Checkmate';
    } else if (this.props.isDraw) {
      result = 'Draw';
    }
    if (this.props.isStaleMate) {
      by = 'by Stalemate';
    } else if (this.props.isInsufficient_material) {
      by = 'by Insufficient material';
    } else if (this.props.isIn_threefold_repetition) {
      by = 'by Threefold repetition';
    }
    return /*#__PURE__*/react.createElement("div", null, /*#__PURE__*/react.createElement("h1", null, result), /*#__PURE__*/react.createElement("h2", null, by));
  }
  render() {
    return /*#__PURE__*/react.createElement("div", {
      className: "EndGameModalContainer"
    }, /*#__PURE__*/react.createElement("div", {
      className: "EndGameModalContent"
    }, this.gameEndsWith()));
  }
}
;// CONCATENATED MODULE: ./src/Board.jsx



class Board extends react.Component {
  constructor(props) {
    super(props);
    this.state = {
      chess: new chess/* Chess */.qQ(),
      board: [],
      pieces: [],
      files: ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'],
      selectedPiece: '',
      from: '',
      availableMoves: []
    };
  }
  fillBoard() {
    const {
      files,
      chess
    } = this.state;
    let tempBoard = [];
    let row = [];
    for (let i = 0; i < 8; i++) {
      row = [];
      for (let j = 0; j < 8; j++) {
        row.push({
          color: (i + j) % 2,
          file: files[i],
          rank: 8 - j
        });
      }
      tempBoard.push(row);
    }
    this.setState({
      board: tempBoard
    });
    this.setState({
      pieces: chess.board()
    });
  }
  getPiece(piece) {
    return piece != null ? /*#__PURE__*/react.createElement("img", {
      src: `./Icons/${piece?.color + piece?.type}.svg`,
      alt: `${piece?.type}`,
      className: piece?.color + "Piece"
    }) : null;
  }
  getAvailableMoves(from) {
    const {
      files,
      chess
    } = this.state;
    let availableMovesTemp = [];
    let currentMove;
    for (let i = 0; i < 8; i++) {
      for (let j = 0; j < 8; j++) {
        currentMove = chess.move({
          from: from,
          to: files[i].concat(j + 1)
        });
        if (currentMove != null) {
          availableMovesTemp.push({
            f: i,
            r: 7 - j
          });
          chess.undo();
        }
      }
    }
    console.log(availableMovesTemp);
    this.setState({
      availableMoves: availableMovesTemp
    });
  }
  componentDidMount() {
    this.fillBoard();
  }
  componentDidUpdate() {
    console.log(this.state);
    console.log(this.state.chess.fen());
  }
  engineMove() {
    const {
      chess
    } = this.state;
    if (chess.turn() === 'b') {
      fetch('https://chess.apurn.com/nextmove', {
        method: "POST",
        body: this.state.chess.fen()
      }).then(res => res.text()).then(res => chess.move({
        from: res[0] + res[1],
        to: res[2] + res[3],
        promotion: res[4]
      })).then(() => this.setState({
        pieces: chess.board()
      }));
      // .then(()=>{setTimeout(()=>this.engineMove())})
    }
  }

  onDragStartHandler(e, cell, rindex, cindex) {
    e.target.style.cursor = 'grabbing';

    // console.log("drag", cell, rindex, cindex)
    let piece = this.state.chess.board()[cindex][rindex];
    this.setState({
      selectedPiece: piece.type
    });
    this.setState({
      from: piece.square
    });
    this.getAvailableMoves(piece.square);
  }
  onDragEnterHandler(e) {
    // console.log('enter')
    // e.target.style = "filter:invert(50%)"
  }
  onDragLeaveHandler(e) {
    // console.log('leave')
    // e.target.style = "filter:invert(-50%)"
  }
  onDragEndHandler(e) {

    // e.target.style = "filter:invert(-50%)"
    // console.log('end')
  }
  onDragOverHandler(e) {
    // console.log('over')
    e.preventDefault();
  }
  onDropHandler(e, cell) {
    e.preventDefault();
    const {
      from
    } = this.state;
    let to = cell.file.concat(cell.rank);
    e.target.style.cursor = 'grab';
    // console.log('drop', to)

    console.log('move', this.state.chess.move({
      from: from,
      to: to,
      promotion: 'q'
    }));
    this.setState({
      pieces: this.state.chess.board(),
      availableMoves: []
    });
    this.engineMove();
    // console.log("drop", cell)
  }

  render() {
    const {
      board,
      files,
      pieces,
      chess
    } = this.state;
    if (board.length === 0) {
      return /*#__PURE__*/react.createElement("div", null, /*#__PURE__*/react.createElement("p", null, "Board Loading..."));
    }
    return /*#__PURE__*/react.createElement("div", {
      className: "Board"
    }, chess.turn() === 'w' ? /*#__PURE__*/react.createElement("div", {
      className: "whiteCell Turn"
    }, "turn") : /*#__PURE__*/react.createElement("div", {
      className: "blackCell Turn"
    }, "turn"), chess.game_over() ? /*#__PURE__*/react.createElement(EndGameModal, {
      isCheckmate: chess.in_checkmate(),
      isDraw: chess.in_draw(),
      isStaleMate: chess.in_stalemate(),
      isInsufficient_material: chess.insufficient_material(),
      isIn_threefold_repetition: chess.in_threefold_repetition(),
      turn: chess.turn()
    }) : null, /*#__PURE__*/react.createElement("div", {
      className: "Coordinates"
    }, /*#__PURE__*/react.createElement("div", {
      className: "Ranks"
    }, [...Array(8).keys()].reverse().map(rankNumber => /*#__PURE__*/react.createElement("p", {
      className: "Rank",
      key: rankNumber + 1
    }, rankNumber + 1))), /*#__PURE__*/react.createElement("div", {
      className: "Files"
    }, files.map(fileLetter => /*#__PURE__*/react.createElement("p", {
      className: "File",
      key: fileLetter
    }, fileLetter)))), board.map((row, fileindex) => /*#__PURE__*/react.createElement("div", {
      key: row[0].file
    }, row.map((cell, rankindex) => {
      return /*#__PURE__*/react.createElement("div", {
        className: cell.color === 0 ? "whiteCell" : "blackCell",
        key: cell.file + cell.rank,
        onDragStart: e => this.onDragStartHandler(e, cell, fileindex, rankindex),
        onDragEnter: e => this.onDragEnterHandler(e),
        onDragLeave: e => this.onDragLeaveHandler(e),
        onDragEnd: e => this.onDragEndHandler(e),
        onDragOver: e => this.onDragOverHandler(e),
        onDrop: e => this.onDropHandler(e, cell)
      }, this.state.availableMoves.some(element => element.f === fileindex && element.r === rankindex) ? /*#__PURE__*/react.createElement("div", {
        className: "availableMove"
      }) : null, this.getPiece(pieces[rankindex][fileindex]));
    }))));
  }
}
;// CONCATENATED MODULE: ./src/App.js


function App() {
  return /*#__PURE__*/React.createElement("div", {
    className: "App"
  }, /*#__PURE__*/React.createElement(Board, null));
}
/* harmony default export */ var src_App = (App);
;// CONCATENATED MODULE: ./src/index.js




var root = client.createRoot(document.getElementById('root'));
root.render( /*#__PURE__*/react.createElement(src_App, null));

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	!function() {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = function(result, chunkIds, fn, priority) {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var chunkIds = deferred[i][0];
/******/ 				var fn = deferred[i][1];
/******/ 				var priority = deferred[i][2];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every(function(key) { return __webpack_require__.O[key](chunkIds[j]); })) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	!function() {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			179: 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = function(chunkId) { return installedChunks[chunkId] === 0; };
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = function(parentChunkLoadingFunction, data) {
/******/ 			var chunkIds = data[0];
/******/ 			var moreModules = data[1];
/******/ 			var runtime = data[2];
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some(function(id) { return installedChunks[id] !== 0; })) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunkchess"] = self["webpackChunkchess"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	}();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, [854], function() { return __webpack_require__(75); })
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;