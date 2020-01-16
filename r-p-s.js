import getRandomThrow from './get-random-throw.js'

const rps = document.getElementById('rps')
const attackButton = document.getElementById('attackButton')
const rock = document.getElementById('rock')
const yourAttack = document.getElementById('yourAttack')
const wins = document.getElementById('wins')
const losses = document.getElementBy('losses')
const draws = document.getElementBy('draws')

let tries = 1
const correctGuessRock = 1;
;attackButton.addEventListener('click',() => 


    if (getRandomThrow(Number(rock.value), correctGuessRock) === -1)
    (attackResults.textContent = 'PAPER BEATS ROCK SUCKA';
}
    

console.log(getRandomThrow());

