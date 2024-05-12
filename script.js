'use strict';
let score = 20;
let highscore = 0;
let num = Math.trunc(Math.random() * 20) + 1;
document.querySelector('.again').addEventListener('click', function () {
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.number').textContent = '?';
  document.querySelector('.message').textContent = 'Start guessing.....';
  document.querySelector('.guess').value = '';
  score = 20;
  document.querySelector('.label-score').textContent = `💯 Score:${score}`;
  num = Math.trunc(Math.random() * 20) + 1;
});
console.log(num);
document.querySelector('.check').addEventListener('click', function () {
  const guess = document.querySelector('.guess').value;

  if (!guess) {
    document.querySelector('.message').textContent = '⛔No Number!';
  } else if (guess > num) {
    if (score > 0) {
      score = score - 1;
      document.querySelector('.message').textContent = 'Try Lower!';
      document.querySelector('.label-score').textContent = `💯 Score:${score}`;
    } else {
      document.querySelector('.message').textContent = 'You Lost the game';
    }
  } else if (guess < num) {
    if (score > 0) {
      score = score - 1;
      document.querySelector('.message').textContent = 'Try Higher!';
      document.querySelector('.label-score').textContent = `💯 Score:${score}`;
    } else {
      document.querySelector('.message').textContent = 'You Lost the game';
    }
  } else {
    document.querySelector('.message').textContent = '🎯 BullsEye!';
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').textContent = num;
    document.querySelector('.number').style.width = '30rem';
    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
  }
});
