var time = localStorage.getItem('time');
var msg = document.getElementById('message');
var result = localStorage.getItem("result");
var nickname = localStorage.getItem("nickname");

function msToMinSec(millis) {
    var minutes = Math.floor(millis / 60000);
    var seconds = ((millis % 60000) / 1000).toFixed(0);
    return minutes + ":" + (seconds < 10 ? '0' : '') + seconds;
}

timeToShow = msToMinSec(time);

switch (result) {
    case "win":
        msg.innerText = "Вы победили!";
        break;
    case "lose":
        msg.innerText = "Вы проиграли.";
        break;
    case "draw":
        msg.innerText = "Патовая ситуация.";
        break;
    case "exit":
        msg.innerText = "Партия не была завершена.";
        break;
}

document.getElementById('info').innerText = 'Время: ' + timeToShow + ' мин/сек.';

var results;

let res = localStorage.getItem("results") ?? false;
if (res) results = JSON.parse(res);
else {
    results = {
        '1': {},
        '2': {},
        '3': {},
        '4': {},
        '5': {},
    };
}


console.log('results:');
console.log(results)
var position = localStorage.getItem("position");
console.log('position:')
console.log(position)
var arr = results[position];
console.log('arr:')
console.log(arr)



if (result == "win") {
    arr[nickname] = time;
    // arr['vital'] = '8564';
    // arr['akjd'] = '7655';
    // arr['dima'] = '9021';
    // arr['mitya'] = '9832';

    //sort
    keysSorted = Object.keys(arr).sort(function (a, b) { return arr[a] - arr[b] })
    console.log(keysSorted);

    let arrSorted = {};
    keysSorted.forEach(function (item) {
        arrSorted[item] = arr[item];
    });
    console.log(arrSorted)

    results[position] = arrSorted;
    localStorage.setItem("results", JSON.stringify(results));
}



document.getElementById('restart-button').onclick = function () { window.location.href = 'game.html'; };
document.getElementById('back-button').onclick = function () { localStorage.setItem("position", '1'); window.location.href = 'index.html'; };