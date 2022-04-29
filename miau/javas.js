// VARIABLES

let resultado = document.querySelector('.resultado');
let numberValue = document.querySelector('.input-number');
let inputValue = document.querySelector('.input-text');
let text = document.querySelector('.div');
const btn = document.querySelector('.botao');
const limpar = document.querySelector('.cleaner');

// EVENTS

btn.addEventListener('click', () => {

    let encontrar = guests.find(function (e) {
        return e.nome == inputValue.value
    });

    let encontrar2 = guests.find( (a) => {
        return a.id == numberValue.value
    });

    let final = JSON.stringify(encontrar2, encontrar)
    let finalFinal = final

// IFS

    if ( encontrar2 !== encontrar ) {
        resultado.innerHTML = ''
        text.innerHTML = 'You are not on the list'
    } else {
        resultado.innerHTML = finalFinal
        text.innerHTML = 'You are on the list'
    } 

    if (resultado.innerHTML == 'undefined') {
        resultado.innerHTML = '';
    }

    if ( resultado.innerHTML == '' ) {
        text.innerHTML = 'You are not on the list'
    }
    
    if ( inputValue.value == '') {
        text.innerHTML = 'Fill in the blanks'
    }

    if ( numberValue.value == '') {
        text.innerHTML = 'Fill in the blanks'
    }

});

// FUNCTIONS

function cleaner() {
    resultado.innerHTML = '';
    numberValue.value = '';
    inputValue.value = '';
    text.innerHTML = '';
}

// MENU OPENER

let Menu = document.querySelector('#menu')

function menu() {
    if ( Menu.classList.contains('menu') == true ) {
        Menu.classList.remove('menu')
    } else {
        Menu.classList.add('menu')
    }
}