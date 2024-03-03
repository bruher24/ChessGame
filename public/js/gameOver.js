var time = (localStorage.getItem('time') / 1000).toFixed(1);
var msg = document.getElementById('message');
var res = localStorage.getItem("result");

if (time / 60 >= 1) time = Math.round(time / 60) + ' мин ' + time % 60;

switch (res) {
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
document.getElementById('info').innerText = 'Время: ' + time + ' сек.';

document.getElementById('restart-button').onclick = function () { window.location.href = 'game.html'; };
document.getElementById('back-button').onclick = function () { window.location.href = 'index.html'; };