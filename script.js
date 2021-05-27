'use strict';
let secretNumber = Math.trunc(Math.random() * 20) + 1;
document.querySelector('.number').textContent = secretNumber;
let message = document.querySelector('.message');
let score = 20;
let highScore = document.querySelector('.score');
document.querySelector('.number').textContent = '?';
document.querySelector('.check').addEventListener('click', function () {
  const guess = document.querySelector('.guess').value;
  if (guess == secretNumber) {
    message.textContent = 'Correct';
    document.querySelector('.number').textContent = secretNumber;
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('body').style.transition = '0.5s';
  } else if (!guess) {
    alert('not a number');
    message.textContent = 'Please enter number';
  } else if (guess < secretNumber && score > 1) {
    message.textContent = 'Too Low';
    score--;
    highScore.textContent = score;
    document.querySelector('.guess').value = '';
  } else if (guess > secretNumber && score > 1) {
    message.textContent = 'Too High';
    score--;
    highScore.textContent = score;
    document.querySelector('.guess').value = '';
  } else {
    document.querySelector('.main').textContent = 'You Lost';
    highScore.textContent = 0;
    document.querySelector('body').style.backgroundColor = '#ce3b3b';
    document.querySelector('.number').textContent = secretNumber;
  }
});

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  highScore.textContent = score;
  message.textContent = 'Start guessing...';
  document.querySelector('body').style.backgroundColor = '#222222';
  document.querySelector('.guess').value = '';
  document.querySelector('.number').textContent = '?';
});
