let min = 1,
    max = 10,
    winningNum = getRandomNumber(min, max),
    guessLeft = 3;

const UIgame = document.querySelector('#game'),
    UIminNUm = document.querySelector('.min-num'),
    UImaxNUm = document.querySelector('.max-num'),
    UIguessBtn = document.querySelector('#guess-btn'),
    UIguessInput = document.querySelector('#guess-input'),
    UImassage = document.querySelector('.massage');


UIminNUm.textContent = min;
UImaxNUm.textContent = max;


UIgame.addEventListener('mousedown', (e) => {
    if (e.target.className === 'play-Again') {
        window.location.reload();
    }
})


UIguessBtn.addEventListener('click', () => {
    let guess = parseInt(UIguessInput.value);

    if (isNaN(guess) || guess < min || guess > max) {
        setMessage(`please enter the number between ${min} and ${max}`, 'red');
    }

    if (guess === winningNum) {
        gameOver(true, `${winningNum} is correct,YOU WIN`);
    } else {
        guessLeft -= 1;
        if (guessLeft === 0) {
            gameOver(false, `Game Over! YOU LOST. the correct number is ${winningNum}`)
        } else {
            UIguessInput.style.borderColor = 'red';
            UIguessInput.value = '';
            setMessage(`${guess} is not correct,you have ${guessLeft} guesses left`, 'red');

        }
    }
});


function gameOver(won, msg) {
    let color;
    won === true ? color = 'green' : color = 'red';
    UIguessInput.disabled = true;
    UIguessInput.style.borderColor = color;
    setMessage(msg, color);
    UIguessBtn.value = 'play Again';
    UIguessBtn.className += 'play-Again';


}

function setMessage(msg, color) {
    UImassage.style.color = color;
    UImassage.textContent = msg;
}


function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)

}