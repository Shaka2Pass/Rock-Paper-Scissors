export default function getRandomThrow(){

    const randomNumber = Math.floor(Math.random() * 3);
    return getRPSThrow(randomNumber);

}

function getRPSThrow(numberGuess){

    if (numberGuess === 0) return 'rock';
    if (numberGuess === 1) return 'paper';
    if (numberGuess === 2) return 'scissors';
   
}

export function resultsOfThrow(player, computer){
    if (player === computer) return 'draw';
    if (player === 'rock' && computer === 'scissors') return 'win';
    else if (player === 'scissors' && computer === 'paper') return 'win'; 
    else if (player === 'paper' && computer === 'rock') return 'win';
    else return 'loss';
}

