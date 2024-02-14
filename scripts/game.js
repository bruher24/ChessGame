// //////////////////// массив для поля
// let field = [
//     [0, 1, 2, 3, 4, 5, 6, 7],
//     [8, 9, 10, 11, 12, 13, 14, 15],
//     [16, 17, 18, 19, 20, 21, 22, 23],
//     [24, 25, 26, 27, 28, 29, 30, 31],
//     [32, 33, 34, 35, 36, 37, 38, 39],
//     [40, 41, 42, 43, 44, 45, 46, 47],
//     [48, 49, 50, 51, 52, 53, 54, 55],
//     [56, 57, 58, 59, 60, 61, 62, 63]
// ];

// ////////////////////

// function checkField(id) {
//     for (let i = 0; i < field.length; i++) {
//         if (field[i]) {
//             for (let j = 0; j < field[i].length; j++) {
//                 if (field[i][j] == id) var result = true;
//             }
//         }
//     }
//     return result;
// }

// function setFigures() {  //расстановка изначальных фигур
//     for (let i = 0; i < 64; i++) {
//         var cell = document.getElementById(i);
//         if (cell) {
//             switch (i) {
//                 case 3:
//                     var img = document.createElement('img');
//                     img.src = './src/bishopW.png';
//                     img.classList.add('mine');
//                     img.classList.add('bishop');
//                     img.classList.add('lowered');
//                     cell.appendChild(img);
//                     break;

//                 case 16: case 25:
//                     var img = document.createElement('img');
//                     img.src = './src/pawnB.png';
//                     img.classList.add('pawn');
//                     img.classList.add('lowered');
//                     cell.appendChild(img);
//                     break;

//                 case 17:
//                     var img = document.createElement('img');
//                     img.src = './src/bishopB.png';
//                     img.classList.add('bishop');
//                     img.classList.add('lowered');
//                     cell.appendChild(img);
//                     break;

//                 case 24:
//                     var img = document.createElement('img');
//                     img.src = './src/kingB.png';
//                     img.classList.add('king');
//                     img.classList.add('lowered');
//                     cell.appendChild(img);
//                     break;

//                 case 40: case 49:
//                     var img = document.createElement('img');
//                     img.src = './src/pawnW.png';
//                     img.classList.add('mine');
//                     img.classList.add('pawn');
//                     img.classList.add('lowered');
//                     cell.appendChild(img);
//                     break;

//                 case 41:
//                     var img = document.createElement('img');
//                     img.src = './src/kingW.png';
//                     img.classList.add('mine');
//                     img.classList.add('king');
//                     img.classList.add('lowered');
//                     cell.appendChild(img);
//                     break;

//                 case 58:
//                     var img = document.createElement('img');
//                     img.src = './src/rook.png';
//                     img.classList.add('mine');
//                     img.classList.add('rook');
//                     img.classList.add('lowered');
//                     cell.appendChild(img);
//                     break;
//             }
//         }
//     }
// }

// window.moves = 0;

// function makeMove() {
//     let result = "lose";
//     if (moves == 1) {
//         if (document.getElementById(10).children[0]
//             && document.getElementById(10).children[0].classList.contains('bishop')) {
//             document.getElementById(10).removeChild(document.getElementById(10).lastChild);
//             document.getElementById(10).append(document.getElementById(17).children[0]);
//         }
//         if (document.getElementById(12).children[0] || document.getElementById(21).children[0]
//             || document.getElementById(30).children[0] || document.getElementById(39).children[0]) {
//             document.getElementById(10).append(document.getElementById(17).children[0]);
//         }
//         if (document.getElementById(10).children[0]
//             && document.getElementById(10).children[0].classList.contains('rook')) {
//             document.getElementById(8).append(document.getElementById(17).children[0]);
//         }
//         if (document.getElementById(3).children[0] && !document.getElementById(10).children[0]) {
//             document.getElementById(3).removeChild(document.getElementById(3).lastChild);
//             document.getElementById(3).append(document.getElementById(17).children[0]);
//         }
//         if (document.getElementById(17).children[0]
//             && document.getElementById(17).children[0].classList.contains('bishop') && document.getElementById(17).children[0].classList.contains('mine')) {
//             document.getElementById(17).removeChild(document.getElementById(17).lastChild);
//             document.getElementById(17).append(document.getElementById(24).children[0]);
//         }
//     }
//     if (moves == 2) {
//         if (document.getElementById(8).children[0]
//             && document.getElementById(8).children[0].classList.contains('rook')) {
//             result = "win";
//         }
//         if (document.getElementById(10).children[0]
//             && document.getElementById(10).children[0].classList.contains('bishop')) {
//             document.getElementById(17).append(document.getElementById(10).children[0]);
//         }
//         if (document.getElementById(8).children[0]
//             && document.getElementById(8).children[0].classList.contains('bishop')) {
//             document.getElementById(17).append(document.getElementById(8).children[0]);
//         }
//         if (document.getElementById(3).children[0] && document.getElementById(3).children[0].classList.contains('bishop')
//             && !document.getElementById(3).children[0].classList.contains('mine')) {
//             if (document.getElementById(10).children[0] && document.getElementById(10).children[0].classList.contains('rook')) {
//                 document.getElementById(10).removeChild(document.getElementById(10).lastChild);
//                 document.getElementById(10).append(document.getElementById(3).children[0]);
//             } else {
//                 if (document.getElementById(17).children[0])
//                     document.getElementById(17).removeChild(document.getElementById(17).lastChild);
//                 document.getElementById(17).append(document.getElementById(3).children[0]);
//             }
//         }
//         sleep(3000).then( () => {gameOver(result)});
//     }
// }

// function sleep(ms) {
//     return new Promise(resolve => setTimeout(resolve, ms));
// }

// function raiseUp(id) {

//     if (document.getElementById(id).style.backgroundColor == 'rgb(255, 0, 0)') {
//         if (document.getElementById(id).children[0]) {
//             document.getElementById(id).removeChild(document.getElementById(id).lastChild);
//         }
//         document.getElementById(id).append(img);
//         img.classList.remove('raised');
//         img.classList.add('lowered');
//         offFields();
//         moves++;
//         document.getElementById('info').innerText = "Ходов: " + moves;
//         makeMove();
//     } else {
//         window.divId = id;
//         window.img = document.getElementById(id).children[0] ?? null;

//         if (img && img.classList.contains('mine')) {

//             for (let i = 0; i < 64; i++) {
//                 check = document.getElementById(i).children[0];
//                 if (check && check.classList.contains('raised') && i != divId) {
//                     check.classList.remove('raised');
//                     check.classList.add('lowered');
//                     offFields();
//                 }
//             }

//             if (img.classList.contains('lowered')) {
//                 img.classList.remove('lowered');
//                 img.classList.add('raised');
//                 lightFields(id, img.classList.item(1));
//             } else {
//                 img.classList.remove('raised');
//                 img.classList.add('lowered');
//                 offFields();
//             }
//         } else {
//             stopAll();
//             offFields();
//         }
//     }
// }

// function stopAll(id) {
//     for (let i = 0; i < 64; i++) {
//         var item = document.getElementById(i);
//         var img = item.children[0];
//         if (img && img.classList.contains('raised')) {
//             img.classList.remove('raised');
//             img.classList.add('lowered');
//         }
//     }
// }

// function lightFields(id, type) {
//     id = Number(id);
//     for (let i = 0; i < field.length; i++) {
//         if (field[i].indexOf(id) >= 0) {
//             var a = Number(field[i].indexOf(id));
//             var row = Number(i);
//         }
//     }
//     switch (type) {
//         case 'bishop':

//             let Rshift = 1;
//             let Lshift = 1;
//             for (let i = row + 1; i <= field.length; i++) {
//                 if (field[i] && [a + Rshift] && document.getElementById(field[i][a + Rshift]) && document.getElementById(field[i][a + Rshift]).children[0]) {
//                     document.getElementById(field[i][a + Rshift]).style.backgroundColor = '#FF0000';
//                     Rshift = 100;
//                 }
//                 if (a + Rshift <= 7) document.getElementById(field[i][a + Rshift]).style.backgroundColor = '#FF0000';

//                 if (field[i] && [a - Lshift] && document.getElementById(field[i][a - Lshift]) && document.getElementById(field[i][a - Lshift]).children[0]) {
//                     document.getElementById(field[i][a - Lshift]).style.backgroundColor = '#FF0000';
//                     Lshift = 100;
//                 }
//                 if (a - Lshift >= 0) document.getElementById(field[i][a - Lshift]).style.backgroundColor = '#FF0000';
//                 Rshift++;
//                 Lshift++;
//             }

//             Rshift = 1;
//             Lshift = 1;
//             for (let i = row - 1; i >= 0; i--) {
//                 if (field[i] && [a + Rshift] && document.getElementById(field[i][a + Rshift]) && document.getElementById(field[i][a + Rshift]).children[0]) {
//                     document.getElementById(field[i][a + Rshift]).style.backgroundColor = '#FF0000';
//                     Rshift = 100;
//                 }
//                 if (a + Rshift <= 7) document.getElementById(field[i][a + Rshift]).style.backgroundColor = '#FF0000';

//                 if (field[i] && [a - Lshift] && document.getElementById(field[i][a - Lshift]) && document.getElementById(field[i][a - Lshift]).children[0]) {
//                     document.getElementById(field[i][a - Lshift]).style.backgroundColor = '#FF0000';
//                     Lshift = 100;
//                 }
//                 if (a - Lshift >= 0) document.getElementById(field[i][a - Lshift]).style.backgroundColor = '#FF0000';
//                 Rshift++;
//                 Lshift++;
//             }

//             break;

//         case 'rook':
//             let Vshift = 1;
//             let Hshift = 1;
//             for (let i = row + 1; i <= field.length; i += Vshift) {
//                 if (field[i]) {
//                     if (!document.getElementById(field[i][a]).children[0]) {
//                         document.getElementById(field[i][a]).style.backgroundColor = '#FF0000';
//                     } else {
//                         if (!document.getElementById(field[i][a]).children[0].classList.contains('mine')) {
//                             document.getElementById(field[i][a]).style.backgroundColor = '#FF0000';
//                         }
//                         Vshift = 100;
//                     }
//                 }
//             }
//             for (let i = row - 1; i >= 0; i -= Vshift) {
//                 if (field[i]) {
//                     if (!document.getElementById(field[i][a]).children[0]) {
//                         document.getElementById(field[i][a]).style.backgroundColor = '#FF0000';
//                     } else {
//                         if (!document.getElementById(field[i][a]).children[0].classList.contains('mine')) {
//                             document.getElementById(field[i][a]).style.backgroundColor = '#FF0000';
//                         }
//                         Vshift = 100;
//                     }
//                 }
//             }

//             for (let j = a + 1; j <= 7; j += Hshift) {
//                 if (!document.getElementById(field[row][j]).children[0]) {
//                     document.getElementById(field[row][j]).style.backgroundColor = '#FF0000';
//                 } else {
//                     if (!document.getElementById(field[row][j]).children[0].classList.contains('mine')) {
//                         document.getElementById(field[row][j]).style.backgroundColor = '#FF0000';
//                     }
//                     Hshift = 100;
//                 }
//             }
//             for (let j = a - 1; j >= 0; j -= Hshift) {
//                 if (!document.getElementById(field[row][j]).children[0]) {
//                     document.getElementById(field[row][j]).style.backgroundColor = '#FF0000';
//                 } else {
//                     if (!document.getElementById(field[row][j]).children[0].classList.contains('mine')) {
//                         document.getElementById(field[row][j]).style.backgroundColor = '#FF0000';
//                     }
//                     Hshift = 100;
//                 }
//             }
//             break;

//         case 'pawn':
//             if (field[row - 1] && !document.getElementById(field[row - 1][a]).children[0])
//                 document.getElementById(field[row - 1][a]).style.backgroundColor = '#FF0000';
//             if (row == 6 && !document.getElementById(field[row - 2][a]).children[0] && !document.getElementById(field[row - 1][a]).children[0])
//                 document.getElementById(field[row - 2][a]).style.backgroundColor = '#FF0000';
//             if (field[row - 1] && document.getElementById(field[row - 1][a + 1]).children[0] && !document.getElementById(field[row - 1][a + 1]).children[0].classList.contains('mine'))
//                 document.getElementById(field[row - 1][a + 1]).style.backgroundColor = '#FF0000';
//             if (field[row - 1] && document.getElementById(field[row - 1][a - 1]) && document.getElementById(field[row - 1][a - 1]).children[0] && !document.getElementById(field[row - 1][a - 1]).children[0].classList.contains('mine'))
//                 document.getElementById(field[row - 1][a - 1]).style.backgroundColor = '#FF0000';
//             break;

//         case 'king':
//             if (field[row - 1]) {
//                 if (field[row + 1][a - 1]) document.getElementById(field[row - 1][a - 1]).style.backgroundColor = '#FF0000';
//                 if (field[row + 1][a]) document.getElementById(field[row - 1][a]).style.backgroundColor = '#FF0000';
//                 if (field[row + 1][a + 1]) document.getElementById(field[row - 1][a + 1]).style.backgroundColor = '#FF0000';
//             }
//             if (field[row]) {
//                 if (field[row][a - 1]) document.getElementById(field[row][a - 1]).style.backgroundColor = '#FF0000';
//                 if (field[row][a + 1]) document.getElementById(field[row][a + 1]).style.backgroundColor = '#FF0000';
//             }
//             if (field[row + 1]) {
//                 if (field[row + 1][a - 1]) document.getElementById(field[row + 1][a - 1]).style.backgroundColor = '#FF0000';
//                 if (field[row + 1][a]) document.getElementById(field[row + 1][a]).style.backgroundColor = '#FF0000';
//                 if (field[row + 1][a + 1]) document.getElementById(field[row + 1][a + 1]).style.backgroundColor = '#FF0000';
//             }
//             for (let i = 32; i <= 34; i++) {
//                 document.getElementById(i).style.backgroundColor = i % 2 == 0 ? 'rgb(255, 255, 255)' : '#75381c';
//             }
//             break;
//     }
//     for (let i = 0; i < 64; i++) {
//         let block = document.getElementById(i);
//         if (block.style.backgroundColor == 'rgb(255, 0, 0)' && block.children[0] && block.children[0].classList.contains('mine')) {
//             if (block.classList.contains('ch-black')) block.style.backgroundColor = '#75381c';
//             else block.style.backgroundColor = 'rgb(255, 255, 255)';
//         }
//     }
// }

// function offFields() {
//     for (let i = 0; i < 64; i++) {
//         let block = document.getElementById(i);
//         if (block.style.backgroundColor == 'rgb(255, 0, 0)') {
//             if (block.classList.contains('ch-black')) block.style.backgroundColor = '#75381c';
//             else block.style.backgroundColor = 'rgb(255, 255, 255)';
//         }
//     }
// }

// function gameOver(result = null) {
//     if (result) {
//         localStorage.setItem("time", performance.now() - 3000);
//         localStorage.setItem("result", result);
//     }
//     else {
//         localStorage.setItem("time", performance.now());
//         localStorage.setItem("result", "exit");
//     }
//     window.location.href = 'gameOver.html';
// }

// var chessWrap = document.querySelector('.ch-wrap');

// var i = 0, count = 0;

// while (count < 8 * 8) {
//     var item = document.createElement('div');
//     chessWrap.appendChild(item);

//     item.classList.add('ch-item');
//     item.id = count;
//     item.onclick = function () {
//         const id = this.id;
//         raiseUp(id);
//     };
//     if (i && i % 2) item.classList.add('ch-black');

//     i += ((i + 2) % 9) ? 1 : 2;
//     count++;
// }

// setFigures();

// document.getElementById('finish-button').onclick = function () { gameOver(); };


const letters = 'abcdefgh';
const numbers = '12345678';
window.moves = 0;

var $status = $('#status');

function onDragStart(source, piece, position, orientation) {
    if ((orientation === 'white' && piece.search(/^w/) === -1) ||
        (orientation === 'black' && piece.search(/^b/) === -1)) {
        return false
    }
}

function mayMove(source, target, piece) {
    switch (piece) {
        case 'wP':
            if (moves == 0 && target == source[0] + (parseInt(source[1]) + 2)) {
                return true;
            }
            if (target == source[0] + (parseInt(source[1]) + 1)) {
                return true;
            }
            if (target)
            break;
    }
}


function onDrop(source, target, piece) {
    var move = mayMove(source, target, piece);

    // illegal move
    if (!move) return 'snapback'
}


var positions = [
    'start',
    '3B4/8/pb6/kp6/8/PK6/1P6/2R5',
    '2k5/8/2K5/8/3R1B2/8/8/8',
    '4K3/3Q4/8/p3k2N/r7/R2B4/5P2/7b',
    '4B3/8/6b1/3Q2pk/8/7P/6K1/8',
    'kbK5/pp6/8/8/8/8/8/R7'
];
var config = {
    draggable: true,
    position: 'start',
    onDragStart: onDragStart,
    onDrop: onDrop,

}

var board = new Chessboard('board', config);



$(window).resize(board.resize);

$('#start-pos').on('click', function () {
    board.position(positions[0])
});
$('#first-pos').on('click', function () {
    board.position(positions[1])
});
$('#second-pos').on('click', function () {
    board.position(positions[2])
});
$('#third-pos').on('click', function () {
    board.position(positions[3])
});
$('#fourth-pos').on('click', function () {
    board.position(positions[4])
});
$('#fifth-pos').on('click', function () {
    board.position(positions[5])
});

