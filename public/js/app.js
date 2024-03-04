
//localStorage.removeItem('results');
//Добавить кнопку для очистки топа

var results = JSON.parse(localStorage.getItem("results")) ?? {};

var names0 = Object.keys(results['1'] ?? {});
var names1 = Object.keys(results['2'] ?? {});
var names2 = Object.keys(results['3'] ?? {});
var names3 = Object.keys(results['4'] ?? {});
var names4 = Object.keys(results['5'] ?? {});

createTableBody("1");
tableFill("1");

function createTableBody(pos) {
    let rows = 11;
    let cells = 3;

    let table = document.getElementById('results');
    table.innerHTML = `<caption>Таблица результатов ${pos}-й позиции</caption>`;
    table.innerHTML += ("<tr>" + "<td></td>".repeat(cells) + "</tr>").repeat(rows);
};

function msToMinSec(millis) {
    var minutes = Math.floor(millis / 60000);
    var seconds = ((millis % 60000) / 1000).toFixed(0);
    return minutes + ":" + (seconds < 10 ? '0' : '') + seconds;
}

function tableFill(pos) {
    var names = [];
    var list = results[pos];
    switch (pos) {
        case "1":
            names = names0;
            break;
        case "2":
            names = names1;
            break;
        case "3":
            names = names2;
            break;
        case "4":
            names = names3;
            break;
        case "5":
            names = names4;
            break;
    }
    let fillFrom = 1;
    let td = document.querySelectorAll('#results td');
    td[0].textContent = 'Место';
    td[1].textContent = 'Имя';
    td[2].textContent = 'Время';

    for (let i = 3; i < td.length; i += 3) {
        td[i].textContent = fillFrom++;
        if (fillFrom > 10) break;
    }
    if (names && list) {
        let j = 0;
        for (let i = 4; i < td.length; i += 3) {
            td[i].textContent = names[j];
            j++;
            if (!names[j]) break;
        }
        j = 0;
        for (let i = 5; i < td.length; i += 3) {
            td[i].textContent = msToMinSec(list[names[j]]);
            j++;
            if(!list[names[j]]) break;

        }
    }
}

$('input[type=radio][name=position]').on('change', function () {
    var val = $(this).val();
    createTableBody(val);
    tableFill(val);
    localStorage.setItem("position", $(this).val());
});

var startBtn = document.getElementById('start-game');
startBtn.addEventListener('click', function () {
    let nickname = document.getElementById('nickname').value;
    nickname = nickname != "" ? nickname : 'Unnamed player';
    localStorage.setItem("nickname", nickname);
    window.location.href = 'game.html';
});
