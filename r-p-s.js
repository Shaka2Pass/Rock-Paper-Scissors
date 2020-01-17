import getRandomThrow, { resultsOfThrow } from './get-random-throw.js';

const attackButton = document.getElementById('attackButton');
const winsDisplay = document.getElementById('wins');
const lossesDisplay = document.getElementById('losses');
const drawsDisplay = document.getElementById('draws');
const resultsDisplay = document.getElementById('attackResults');


let wins = 0;
let losses = 0;
let draws = 0;

attackButton.addEventListener('click', () => {

    const usersChoice = document.querySelector('input:checked').value;

    const computerChoice = getRandomThrow();

    const gameResults = resultsOfThrow(usersChoice, computerChoice);

    if (usersChoice === computerChoice) return 'draw';
    if (usersChoice === 'rock' && computerChoice === 'scissors') return 'win';
    if (usersChoice === 'scissors' && computerChoice === 'paper') return 'win';
    if (usersChoice === 'paper' && computerChoice === 'rock') return 'win';
   


    if (gameResults === 'win')
    {
        wins ++;
        winsDisplay.textContent = wins;
        resultsDisplay.textContent = 'YOU WIN!';

    } 

    else if (gameResults === 'loss'){
        losses++;
        lossesDisplay.textContent = losses;
        resultsDisplay.textContent = 'YOU LOSE SUCKA!';

    } else {
        draws++;
        drawsDisplay.textContent = draws; 
        resultsDisplay.textContent = 'DRAW!';
    
    }
});


