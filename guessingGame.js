const btn2 = document.querySelector(".reset")
let randomNumber = Math.floor(Math.random() * 5) + 1;
const guesses = document.querySelector('.guesses');
const lastResult = document.querySelector('.lastResult');
const guessSubmit = document.querySelector('.guessSubmit');
const guessField = document.querySelector('.guessField');
function checkGuess() {
    let userGuess = Number(guessField.value);
    if (userGuess === randomNumber) {
        lastResult.textContent = 'Congratulations! You got it right!';
        lastResult.style.color = 'green';

    } else {
        lastResult.textContent = 'Wrong!';
        lastResult.style.color = 'red';
    }
    guessField.value = '';
}
function resetGame() {
    const resetParas = document.querySelectorAll('.resultParas p');
    for (let i = 0; i < resetParas.length; i++) {
        resetParas[i].textContent = '';
    }
}
guessSubmit.addEventListener('click', checkGuess);
btn2.addEventListener('click', resetGame);


