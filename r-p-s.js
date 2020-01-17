import { getRandomThrow, resultsOfThrow } from './get-random-throw.js';

const attackButton = document.getElementById('attackButton');
const winsDisplay = document.getElementById('win');
const lossesDisplay = document.getElementById('losses');
const drawsDisplay = document.getElementById('draws');
const resultsDisplay = document.getElementById('attackResults');


let win = 0;
let losses = 0;
let draws = 0;

attackButton.addEventListener('click', () => {

    const usersChoice = document.querySelector('input:checked').value;

    const computerChoice = getRandomThrow();

    const gameResults = resultsOfThrow(usersChoice, computerChoice);


    if (gameResults === 'win') {
        win ++;
        winsDisplay.textContent = win;
        resultsDisplay.textContent = 'YOU WIN!';
        console.log('win');
    } 

    else if (gameResults === 'loss'){
        losses++;
        lossesDisplay.textContent = losses;
        resultsDisplay.textContent = 'YOU LOSE!';
        console.log('loss');

    } else {
        draws++;
        drawsDisplay.textContent = draws; 
        resultsDisplay.textContent = 'DRAW!';
        console.log('draw');
        
    }

});