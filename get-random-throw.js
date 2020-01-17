//creating a function that generates a random number. The parameters are initially undefined.
function getRandomThrow(){


    //use the function math.floor(math.random() * 3) - which generates a radom integer between 0-2 and set it equal to a variable called randomNumber.
        const randomNumber = Math.floor(Math.random() * 3);
    
    //the function getRandomThrow should return a new function called getRPSThrow which passes the parameter randomNumber (i.e. Math.floor(Math.random function) )
        
        return getRPSThrow(randomNumber);
    
    }
    // use the function getRPSThrow to pass the parameter numberGuess. When getRPSThrow runs it should take a random number and determine if it is equal to 0, 1, 2, accordingly and return the appropriate string (i.e. rock, paper, or scissors.)
    function getRPSThrow(numberGuess){
    
        if (numberGuess === 0) return 'rock';
        if (numberGuess === 1) return 'paper';
        if (numberGuess === 2) return 'scissors';
       
    }
    //Create a new function called resultsOfThrow that passes to values player and computer.
    function resultsOfThrow(player, computer){
        if (player === computer) return 'draw';
        if (player === 'rock' && computer === 'scissors') return 'win';
        else if (player === 'scissors' && computer === 'paper') return 'win'; 
        else if (player === 'paper' && computer === 'rock') return 'win';
        else return 'loss';
    }
    
    export {
        getRandomThrow,
        resultsOfThrow,
    };