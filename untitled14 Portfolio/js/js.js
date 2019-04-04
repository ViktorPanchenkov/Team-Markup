 let slide1 = document.getElementById('slide1');

slide1.addEventListener('click', playinPztnahki);

 let iframe = document.getElementById('iframe1');
 let iframe2 = document.getElementById('tic_tac');
 let iframe3 = document.getElementById('marcap');
function playinPztnahki() {
    let h1 = document.getElementById('ConteinerH1');
    let p = document.getElementById('container_p');
    h1.innerHTML = 'Пятнашки';
    p.innerHTML = 'Перемещая костяшки по коробке, добиться упорядочивания их по номерам, желательно сделав как можно меньше перемещений.';
    iframe.style.display = 'block';
    iframe2.style.display = 'none';
    iframe3.style.display = 'none';

}

let slide2 = document.getElementById('slide2');
slide2.addEventListener('click', playinTic_Tac);

function playinTic_Tac() {
    let h1 = document.getElementById('ConteinerH1');
    let p =document.getElementById('container_p');
    h1.innerHTML = 'Крестики Нолики';
    p.innerHTML = 'Игроки по очереди ставят на свободные клетки поля 3х3 знаки Первый, выстроивш' +
        'ий в ряд 3 своих фигуры по вертикали, горизонтали или диагонали, выигрывает.';
    iframe2.style.display = 'block';
    iframe.style.display = 'none';
    iframe3.style.display = 'none';


}
let slide3 = document.getElementById('slide3');
slide3.addEventListener('click',marcap );

function marcap() {
    let h1 = document.getElementById('ConteinerH1');
    let p = document.getElementById('container_p');

    h1.innerHTML = 'Первое задание.';
    p.innerHTML = 'Первое задание, игры нет, но достаточно просто  восхищатся';
    iframe3.style.display = 'block';
    iframe.style.display = 'none';
    iframe2.style.display = 'none';

}
