const positions = [
  '3B4/8/pb6/kp6/8/PK6/1P6/2R5 w - - 0 1',
  '2k5/8/2K5/8/3R1B2/8/8/8 w - - 0 1',
  '4K3/3Q4/8/p3k2N/r7/R2B4/5P2/7b w - - 0 1',
  '4B3/8/6b1/3Q2pk/8/7P/6K1/8 w - - 0 1',
  'kbK5/pp6/8/8/8/8/8/R7 w - - 0 1'
];
var setup = positions[localStorage.getItem("position")-1];
var board = null;
var game = new Chess();
var moves = 0;
var start = new Date;

let nickname = localStorage.getItem('nickname');
document.getElementById('nickname').innerText = `${nickname}`;

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

function gameOver(result) {
  var end = new Date;
  var time = end - start;
  if (result != 'exit') {
    localStorage.setItem("time", time - 1500);
    localStorage.setItem("result", result);
  }
  else {
    localStorage.setItem("time", time);
    localStorage.setItem("result", result);
  }
  window.location.href = 'gameOver.html';
}

function onDragStart(source, piece, position, orientation) {
  // do not pick up pieces if the game is over
  if (game.game_over()) {
    console.log('over');
    return false
  }

  // only pick up pieces for White
  if (piece.search(/^b/) !== -1) return false
}

function makeRandomMove() {
  var possibleMoves = game.moves()

  // game over
  if (possibleMoves.length === 0) {
    if(game.in_draw()) sleep(1500).then(() => { gameOver('draw') });
    else sleep(1500).then(() => { gameOver('win') });
  } else {
    var randomIdx = Math.floor(Math.random() * possibleMoves.length)
    game.move(possibleMoves[randomIdx])
    board.position(game.fen())
    if (moves >= 2) {
      sleep(1500).then(() => { gameOver('lose') });
    }
  }



}

function onDrop(source, target) {
  // see if the move is legal
  var move = game.move({
    from: source,
    to: target,
    promotion: 'q' // NOTE: always promote to a queen for example simplicity
  })

  // illegal move
  if (move === null) {
    console.log('illegal');
    console.log(game.fen())
    return 'snapback'
  } else {
    moves++;
  }

  document.getElementById('info').innerText = `Ходов: ${moves}`;
  // make random legal move for black
  window.setTimeout(makeRandomMove, 250);
}

function onSnapEnd() {
  board.position(game.fen())
}

var config = {
  draggable: true,
  position: setup,
  onDragStart: onDragStart,
  onDrop: onDrop,
  onSnapEnd: onSnapEnd
}
board = Chessboard('board', config);
game.load(setup);

$(window).resize(board.resize);

$('#finish-button').on('click', function () {
  gameOver('exit');
});

