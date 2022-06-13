let computerScore = 0;
let playerScore = 0;
const buttons = document.querySelectorAll('.buttons button');

const disableButton = () => {
    buttons.forEach(btn => {
        btn.disabled = true;;
})
};

const computerPlay = () => {
    const arr = ['rock', 'paper', 'scissors'];
    return arr[Math.floor(Math.random() * arr.length)];
}

const playRound = (player) => {
    let computer = computerPlay();
    let result = '';

    if ((player == 'rock' && computer == 'scissors') ||
        (player == 'paper' && computer == 'rock') ||
        (player == 'scissors' && computer == 'paper')) {

        playerScore += 1;
        result = `<br>You won this round! ${player} beats ${computer}<br><br>Player score: ${playerScore}<br>Computer score: ${computerScore}`;

        if (playerScore == 5) {
            result += '<br><br>Victory!!<br>Refresh your page to play again';
            disableButton();
        }
    }
    else if (player == computer) {
        result = `<br>It\'s a tie! ${player} and ${computer}<br><br>Player score: ${playerScore}<br>Computer score: ${computerScore}`;
    }
    else {
        computerScore += 1;
        result = `<br>Computer wons this round. ${computer} beats ${player}<br><br>Player score: ${playerScore}<br>Computer score: ${computerScore}`

        if (computerScore == 5) {
            result += '<br><br>..Oof!...The computers wons the game!<br>Refresh your page to play again.';
            disableButton();
        }
    }

    document.getElementById('result').innerHTML = result;
    
    return;
}

buttons.forEach(btn => {
    btn.addEventListener('click', () => {
        playRound(btn.value);
        
    });
});


