
let playerWins = 0;
let computerWins = 0;
let draws = 0;

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function handleRockClick() {
    playRound("rock");
}

function handlePaperClick() {
    playRound("paper");
}

function handleScissorsClick() {
    playRound("scissors");
}

function playRound(playerResponse) {
    const randomInt = getRandomInt(1, 3);
    const result = determineWinner(randomInt, playerResponse);
    updateScores(result);
    displayResult(result);
}


function determineWinner(randomInt, playerResponse) {

    let computerResponse = "";
    let draw = "Draw";
    let computerWin = "Computer Wins!";
    let playerWin = "You Win!";

    if (randomInt === 1) {
        computerResponse = "rock";
    }
    else if (randomInt === 2) {
        computerResponse = "paper";
    }
    else if (randomInt === 3) {
        computerResponse = "scissors";
    }

    console.log("Computer chose: " + computerResponse);
    console.log("player chose: " + playerResponse);

    //Draw logic
    if (computerResponse === "rock" && playerResponse === "rock") {
        return draw;
    }
    if (computerResponse === "paper" && playerResponse === "paper") {
        return draw;
    }
    if (computerResponse === "scissors" && playerResponse === "scissors") {
        return draw;
    }

    //scissors paper
    if (computerResponse === "paper" && playerResponse === "scissors") {
        return playerWin;
    }
    if (computerResponse === "scissors" && playerResponse === "paper") {
        return computerWin;
    }

    //scissors rock
    if (computerResponse === "rock" && playerResponse === "scissors") {
        return computerWin;
    }
    if (computerResponse === "scissors" && playerResponse === "rock") {
        return playerWin;
    }

    //rock paper
    if (computerResponse === "paper" && playerResponse === "rock") {
        return computerWin;
    }
    if (computerResponse === "rock" && playerResponse === "paper") {
        return playerWin;
    }

}

function displayResult(result) {
    const resultDisplay = document.getElementById('resultDisplay');
    resultDisplay.textContent = result; // Display the result of the round
}

function updateScores(result) {
    const playerScoreDisplay = document.getElementById('playerScore');
    const computerScoreDisplay = document.getElementById('computerScore');
    const drawsDisplay = document.getElementById('drawsScore');

    if (result === "You Win!") {
        playerWins++;
    } else if (result === "Computer Wins!") {
        computerWins++;
    }
    else if (result === "Draw") {
        draws++;
    }

    playerScoreDisplay.textContent = `Player Wins: ${playerWins}`;
    computerScoreDisplay.textContent = `Computer Wins: ${computerWins}`;
    drawsDisplay.textContent = `Draws: ${draws}`; // Update draws display
}


// Select buttons
const rockButton = document.querySelector('.buttonchoice-rock');
const paperButton = document.querySelector('.buttonchoice-paper');
const scissorsButton = document.querySelector('.buttonchoice-scizzors');

// Add event listeners
rockButton.addEventListener('click', handleRockClick);
paperButton.addEventListener('click', handlePaperClick);
scissorsButton.addEventListener('click', handleScissorsClick);
