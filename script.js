// choose the computer's play for the round
const computerPlay = () => {
    const arr = ["rock", "paper", "scissors"];
    const generator = Math.floor(Math.random() * arr.length);
    const play = arr[generator];

    return play;
}

// function to play one round and add points to the winner
const playRound = (player, computer) => {
    if (player === computer) {
        result = "It's a tie!";
    } else if (player == "rock") {
        if (computer == "paper") {
            result = "You lost! Paper beats rock.";
            computerScore++;
        } else {
            result = "You won! Rock beats scissors.";
            playerScore++;
        }
    } else if (player == "paper") {
        if (computer == "scissors") {
            result = "You lost! Scissors beats paper.";
            computerScore++;
        } else {
            result = "You won! Paper beats rock.";
            playerScore++;
        }
    } else if (player == "scissors") {
        if (computer == "rock") {
            result = "You lost! Rock beats scissors.";
            computerScore++;
        } else {
            result = "You won! Scissors beats paper.";
            playerScore++;
        }
    }

    return result;

}

// function that shows the scoreboard and the final result of the game
const board = (player, computer) => {
    console.log(`SCOREBOARD:\nPLAYER = ${player} - CPU = ${computer}`);

    if (player === computer) {
        console.log("Well, it's a tie! Let's try again");
    } else if (player < computer) {
        console.log("You lost. Good luck next time!");
    } else {
        console.log("You won! Yay");
    }

}

// function that starts the game and does the loop of the rounds
const game = () => {
    for (i = 0; i < turns.length; i++) {
        const playerSelection = (prompt("Rock, paper or scissors?")).toLowerCase();
        const computerSelection = computerPlay();
        console.log(`ROUND [${i + 1}]`);
        console.log(playRound(playerSelection, computerSelection));
        console.log(`CPU chooses ${computerSelection.toUpperCase()}`);
    }

    board(playerScore, computerScore);

}

// variables that stores the scoreboard
let computerScore = 0;
let playerScore = 0;

// calls the function that starts the game
game();

