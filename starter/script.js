'use strict';
/*
document.querySelector(`.message`).textContent = 'Correct Number !';
*/

let randomNumber = Math.floor(Math.random() * 21);
let score = 20;
let highScore = 0;

const docFunc = function (message) {
  document.querySelector(`.message`).textContent = message;
};

document.querySelector(`.check`).addEventListener(`click`, function () {
  const guessNumber = Number(document.querySelector(`.guess`).value);
  let highScore = Number(document.querySelector(`.highscore`).textContent);
  let score = Number(document.querySelector(`.score`).textContent);
  if (!guessNumber) {
    docFunc('Please Enter Value Between 0 and 20 ');
  }
  if (guessNumber == randomNumber) {
    document.querySelector(`.number`).textContent = randomNumber;
    docFunc('Congratilations. Its True !');
    if (highScore < score) {
      highScore = score;
    }
    document.querySelector(`body`).style.backgroundColor = `#008000`;
    document.querySelector(`.number`).style.width = `50rem`;
  }
  if (guessNumber != randomNumber) {
    score--;
    if (score < 0) {
      docFunc('You eliminated. Number changed. Try Again !');
      document.querySelector(`body`).style.backgroundColor = `red`;
      score = 20;
    }
    docFunc(guessNumber > randomNumber ? 'Too High !' : 'Too Low');
  }
  document.querySelector(`.score`).textContent = score;
  document.querySelector(`.highscore`).textContent = highScore;
});

document.querySelector(`.again`).addEventListener(`click`, function () {
  score = 20;
  randomNumber = Math.floor(Math.random() * 21);
  docFunc('Start guessing...');
  document.querySelector(`body`).style.backgroundColor = `#222`;
  document.querySelector(`.number`).style.width = `15rem`;
  document.querySelector(`.number`).textContent = `?`;
  document.querySelector(`.score`).textContent = score;
  document.querySelector(`.guess`).value = ``;
});
