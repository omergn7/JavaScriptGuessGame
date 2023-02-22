'use strict';
/*
document.querySelector(`.message`).textContent = 'Correct Number !';
*/

let randomNumber = Math.floor(Math.random() * 21);
let score = 20;
let highScore = 0;

document.querySelector(`.check`).addEventListener(`click`, function () {
  const guessNumber = Number(document.querySelector(`.guess`).value);
  let highScore = Number(document.querySelector(`.highscore`).textContent);
  let score = Number(document.querySelector(`.score`).textContent);
  if (!guessNumber) {
    document.querySelector(`.message`).textContent =
      'Please Enter Value Between 0 and 20 ';
  }
  if (guessNumber == randomNumber) {
    document.querySelector(`.number`).textContent = randomNumber;
    document.querySelector(`.message`).textContent =
      'Congratilations. Its True !';
    if (highScore < score) {
      highScore = score;
    }
    document.querySelector(`body`).style.backgroundColor = `#008000`;
    document.querySelector(`.number`).style.width = `50rem`;
  }
  if (guessNumber != randomNumber) {
    score--;
    if (score < 0) {
      document.querySelector(`.message`).textContent =
        'You eliminated. Number changed. Try Again !';
      document.querySelector(`body`).style.backgroundColor = `red`;
      score = 20;
    }
    if (guessNumber > randomNumber) {
      document.querySelector(`.message`).textContent = 'Too High !';
    }
    if (guessNumber < randomNumber) {
      document.querySelector(`.message`).textContent = 'Too Low !';
    }
  }
  document.querySelector(`.score`).textContent = score;
  document.querySelector(`.highscore`).textContent = highScore;
});

document.querySelector(`.again`).addEventListener(`click`, function () {
  score = 20;
  randomNumber = Math.floor(Math.random() * 21);
  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector(`body`).style.backgroundColor = `#222`;
  document.querySelector(`.number`).style.width = `15rem`;
  document.querySelector(`.number`).textContent = `?`;
  document.querySelector(`.score`).textContent = score;
  document.querySelector(`.guess`).value = ``;
});
