let randomNum = parseInt(Math.random() * 100) + 1;
const guessSlot = document.getElementById('prev-guesses');
const remaining = document.getElementById('remaining-guesses');
const searchBox = document.getElementById('searchBox');
const btn = document.getElementById('btn');
const result = document.getElementById('result');
const container = document.querySelector('#container');

const p = document.createElement('p');

let prevGuess = [];
let numGuess = 0;
let playGame = true;

if (playGame) {
  btn.addEventListener('click', (e) => {
    e.preventDefault();
    const guess = parseInt(searchBox.value);
    validateGuess(guess);
  });
}

function validateGuess(guess) {
  if (isNaN(guess)) {
    alert('Please enter a valid number');
  } else if (guess > 100 || guess < 1) {
    alert('Please enter a number between 1 and 100');
  } else {
    prevGuess.push(guess);
    if (numGuess === 9) {
      displayGuess(guess);
      displayMsg(`Game Over!! Random number was ${randomNum}`);
      endGame();
    } else {
      displayGuess(guess);
      checkGuess(guess);
    }
  }
}

function checkGuess(guess) {
  if (guess === randomNum) {
    displayMsg(`Congrats! You guessed it right!`);
    endGame();
  } else if (guess < randomNum) {
    displayMsg('Too low');
  } else if (guess > randomNum) {
    displayMsg('Too high');
  }
}

function displayGuess(guess) {
  searchBox.value = '';
  guessSlot.innerHTML += `${guess}; `;
  numGuess++;
  remaining.innerHTML = `${10 - numGuess}`;
}

function displayMsg(msg) {
  result.innerHTML = `<h2>${msg}</h2>`;
}

function endGame() {
  searchBox.value = '';
  searchBox.setAttribute('disabled', '');
  p.classList.add('button');
  p.innerHTML = `<button id="restartBtn"><h2 id="newGame">Start New Game</h2></button>`;
  container.appendChild(p);
  playGame = false;
  document.getElementById('newGame').addEventListener('click', newGame);
}

function newGame() {
  randomNum = parseInt(Math.random() * 100) + 1;
  prevGuess = [];
  numGuess = 1;
  remaining.innerHTML = `${10 - numGuess}`;
  searchBox.removeAttribute('disabled');
  result.innerHTML = '';
  guessSlot.innerHTML = '';
  container.removeChild(p);
  playGame = true;
}
