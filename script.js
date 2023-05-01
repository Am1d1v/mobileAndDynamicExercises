
//touchstart
//touchmove
//touchend
//touchenter
//touchleave
//touchcancel

/*
window.addEventListener('DOMContentLoaded',() => {
    let box = document.querySelector('.box');

    box.addEventListener('touchstart', (event) =>{
        event.preventDefault();

        console.log('start');
        console.log(event.targetTouches);
    });

    

    box.addEventListener('touchmove', (event) =>{
        event.preventDefault();

        console.log(event.targetTouches[0].pageX);
    });




    box.addEventListener('touchend', (event) =>{
        event.preventDefault();

        console.log('End');
    });


});

*/


//touches
// targerTouches
//changedTouches

//------------------------------------------------------------------------------------------------------------------------------------------------------------

//defer

let p = document.querySelectorAll('p');
console.log(p);

// Динамически загружаемый скрипт

/*

let script = document.createElement('script');
script.src = "greetings.js";
script.async = false;
document.body.append(script);

*/

function loadScript (src) {
    let script = document.createElement('script');
    script.src = src;
    script.async = false;
    document.body.append(script);
}

loadScript('greetings.js');
loadScript('something.js');