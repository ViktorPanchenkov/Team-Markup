










let slide1 = document.getElementById('slide1');
let slide2 = document.getElementById('slide2');
let slide3 = document.getElementById('slide3');
let slide4= document.getElementById('slideCalculator');
let slide5 = document.getElementById('nextWork');

slide1.addEventListener('click', playinPztnahki);

 let iframe = document.getElementById('iframe1');
 let iframe2 = document.getElementById('ticTac');
 let iframe3 = document.getElementById('marcap');
 let iframe4 = document.getElementById('Calc');
 let someWords = document.getElementById('someWords');

function playinPztnahki() {
    let h1 = document.getElementById('ConteinerH1');
    let p = document.getElementById('containerP');
     let tagGameH1 = document.getElementById('tagGameH1');
    let tagGameP = document.getElementById('tagGameP');
     h1.innerHTML= tagGameH1.innerHTML;
     p.innerHTML = tagGameP.innerHTML;


    iframe.style.display = 'block';
    iframe2.style.display = 'none';
    iframe3.style.display = 'none';
    iframe4.style.display = 'none';

}


slide2.addEventListener('click', playinTic_Tac);

function playinTic_Tac() {
    let h1 = document.getElementById('ConteinerH1');
    let p =document.getElementById('containerP');
    let TicTacGameH1 = document.getElementById('TicTacGameH1');
    let ticTacGameP = document.getElementById('ticTacGameP');
    h1.innerHTML = TicTacGameH1.innerHTML;
    p.innerHTML = ticTacGameP.innerHTML;
    iframe2.style.display = 'block';
    iframe.style.display = 'none';
    iframe3.style.display = 'none';
    iframe4.style.display = 'none';
    someWords.style.display = 'none';


}

slide3.addEventListener('click',marcap );

function marcap() {
    let h1 = document.getElementById('ConteinerH1');
    let p = document.getElementById('containerP');
    let MarcapCiteH1 = document.getElementById('MarcapCiteH1');
    let MarcapCiteP = document.getElementById('MarcapCiteP');
    h1.innerHTML = MarcapCiteH1.innerHTML;
    p.innerHTML = MarcapCiteP.innerHTML;
    iframe3.style.display = 'block';
    iframe.style.display = 'none';
    iframe2.style.display = 'none';
    iframe4.style.display = 'none';
    someWords.style.display = 'none';

};



slide4.addEventListener('click', calc);

function calc() {
    let h1 = document.getElementById('ConteinerH1');
    let p = document.getElementById('containerP');
    let calculateGameH1 = document.getElementById("calculateGameH1");
    let calculateGameP = document.getElementById("calculateGameP");
    h1.innerHTML = calculateGameH1.innerHTML;
    p.innerHTML = calculateGameP.innerHTML;
    iframe.style.display = 'none';
    iframe3.style.display = 'none';
    iframe2.style.display = 'none';
    iframe4.style.display ='block';
    someWords.style.display = 'none'

}


slide5.addEventListener('click', nextWork);

function nextWork(){
    let h1 = document.getElementById('ConteinerH1');
    let p = document.getElementById('containerP');
    let NextWorkH1 = document.getElementById('NextWorkH1');
    h1.innerHTML = NextWorkH1.innerHTML;
    let NextWorkP = document.getElementById('NextWorkP');
    p.innerHTML = NextWorkP.innerHTML;

    let someWords = document.getElementById('someWords');
    iframe.style.display = 'none';
    iframe3.style.display = 'none';
    iframe2.style.display = 'none';
    iframe4.style.display ='none';
    someWords.style.display = 'block';



}

let buttonNext= document.getElementById('inp2');
buttonNext.addEventListener('click', nextSlide);

function nextSlide() {
    slide1.style.display = 'none';
    slide2.style.display = 'none';
    slide3.style.display = 'block';
    slide4.style.display = 'none';
    slide5.style.display = 'block';


}
let buttonReturn = document.getElementById('inp1');

buttonReturn.addEventListener('click', returnSlide);
function returnSlide() {
    slide1.style.display = 'block';
    slide2.style.display = 'block';
    slide3.style.display = 'none';
    slide4.style.display = 'block';
    slide5.style.display = 'none';
}
