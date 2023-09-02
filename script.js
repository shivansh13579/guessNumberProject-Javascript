const randomNumber = parseInt(Math.random()*100 +1);

const submit = document.querySelector('#subt')
const userInput = document.querySelector('#guessField');
const gessSlot = document.querySelector('.guesses');
const remaning = document.querySelector('.lastResult');
const lowOrHi = document.querySelector('.lowOrHi');
const startOver = document.querySelector('.resultParas');

const p = document.createElement('p');

let prevGuess = [];
let numGuess = 1;

let playGames = true;

if(playGames){
    submit.addEventListener('click',function(e){
      e.preventDefault();
      const guess = parseInt(userInput.value);
      validateGuess(guess);
    })
}

function validateGuess(guess){
    if(isNaN(guess)){
      alert('please enter a valid number')
    }else if (guess<1){
        alert('please enter a number more than 1');
    }else if (guess>100){
        alert('please enter a number less than 100');
    }else{
        prevGuess.push(guess)
        if(numGuess === 11){
           displayGuess(guess);
           displayMessage(`Game Over.Random number was ${randomNumber}`)
           endGame()
        }else{
            displayGuess(guess)
            checkGuess(guess)
        }
    }

}

function checkGuess(guess){
     if(guess === randomNumber){
        displayMessage('You guessed it right')
        endGame()
     }else if(guess<randomNumber){
        displayMessage('Number is Tooo Low')
     }else if(guess>randomNumber){
        displayMessage('Number is Tooo High')
     }
}

function displayGuess(guess){
    userInput.value= ''
    gessSlot.innerHTML += `${guess}, `
    numGuess++;
    remaning.innerHTML = `${11-numGuess}`

}

function displayMessage(message){
    lowOrHi.innerHTML = `<h2>${message}</h2>`

}

function endGame(){
      userInput.value = ''
      userInput.setAttribute('disabled','');
      p.classList.add('button')
      p.innerHTML = `<h2 id='newgame'>Start New Game</h2>`;
      startOver.appendChild(p)
      playGames = false;
      newGame();
}

function newGame(){

}



