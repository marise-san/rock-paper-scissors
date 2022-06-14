let computerScore = 0;
let playerScore = 0;
const buttons = document.querySelectorAll(".buttons input");
const round = document.querySelector("#round-result");
const result = document.querySelector("#result");
const pScore = document.querySelector(".scoreboard #player #player-score");
const cScore = document.querySelector(".scoreboard #cpu #cpu-score");

const disableButton = () => {
    buttons.forEach(btn => {
        btn.disabled = true;
    });
};

const computerPlay = () => {
    const arr = ["rock", "paper", "scissors"];
    return arr[Math.floor(Math.random() * arr.length)];
}

const playRound = (player) => {
    let computer = computerPlay();

    if ((player == "rock" && computer == "scissors") ||
        (player == "paper" && computer == "rock") ||
        (player == "scissors" && computer == "paper")) {

        playerScore += 1;
        pScore.textContent = playerScore;
        round.textContent = "YOU WIN!";

        if (playerScore == 5) {
            result.textContent = "YOU WIN THE GAME!!";
            disableButton();
        }
    }
    else if (player == computer) {
        round.textContent = "TIE!";
    }
    else {
        computerScore += 1;
        cScore.textContent = computerScore;
        round.textContent = "YOU LOSE!";

        if (computerScore == 5) {
            result.textContent = "COMPUTER WIN!";
            disableButton();
        }
    }

}

buttons.forEach(btn => {
    btn.addEventListener("click", () => {
        playRound(btn.value);
    });
});


