'use strict';

/*console.log(document.querySelector('.message').textContent);
document.querySelector('.message').textContent = '🎉 Correct Number!';

document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 10;

document.querySelector('.guess').value = 13;
console.log(document.querySelector('.guess').value); */

var slk = Number(document.querySelector('.score').textContent);
var secretNumber = Math.trunc(Math.random() * slk) + 1;
var highscore = 0;
var stg = 0;
var stg1 = 0;
var dd = 0;
document.querySelector('.check').addEventListener('click', function () {
  if (dd === 1) {
    secretNumber = Math.trunc(Math.random() * slk) + 1;
    dd = 0;
  }
  // console.log(secretNumber);
  stg = Number(document.querySelector('.score').textContent);
  const guess = Number(document.querySelector('.guess').value);
  // console.log(guess);
  if (!guess) {
    document.querySelector('.message').textContent = '⛔ No Number!';
  } else if (guess === secretNumber) {
    document.querySelector('.number').textContent = secretNumber;
    document.querySelector('.message').textContent = '🎉 Correct Number!';
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    if (stg1 !== stg) {
      // console.log(stg1);
      // console.log(typeof stg1, typeof stg);
      stg1 = stg;
      console.log(stg1, stg);
      highscore += stg;
      dd = 1;
      // console.log(highscore);
      document.querySelector('.highscore').textContent = highscore;
    }
  } else if (stg > 0) {
    if (guess > secretNumber) {
      document.querySelector('.message').textContent = '📈 Too hight!';
      --stg;
      if (stg === 0) {
        document.querySelector('.message').textContent = '💣You lost the game!';
        document.querySelector('body').style.backgroundColor = '#222';
        document.querySelector('.number').textContent = '?';
        document.querySelector('.number').style.width = '15rem';
        // document.querySelector('.message').textContent = 'Start guessing...';
      }
      document.querySelector('body').style.backgroundColor = '#222';
      document.querySelector('.number').textContent = '?';
      document.querySelector('.number').style.width = '15rem';
      // document.querySelector('.message').textContent = 'Start guessing...';
      document.querySelector('.score').textContent = stg;
    } else {
      document.querySelector('.message').textContent = '📉 Too low!';
      --stg;

      if (stg === 0) {
        document.querySelector('.message').textContent =
          '💣 You lost the game!';
        document.querySelector('body').style.backgroundColor = '#222';
        document.querySelector('.number').textContent = '?';
        document.querySelector('.number').style.width = '15rem';
        // document.querySelector('.message').textContent = 'Start guessing...';
      }
      document.querySelector('body').style.backgroundColor = '#222';
      document.querySelector('.number').textContent = '?';
      document.querySelector('.number').style.width = '15rem';
      // document.querySelector('.message').textContent = 'Start guessing...';
      document.querySelector('.score').textContent = stg;
    }
  }
});
document.querySelector('.again').addEventListener('click', function () {
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').textContent = '?';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('.guess').value = '';
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('.score').textContent = slk;
  document.querySelector('.highscore').textContent = 0;
});
