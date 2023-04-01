// computer choice function which return either rock paper or scissors

function getComputerChoice(min, max) {
    let randomnumber = Math.floor(Math.random() * (max - min)) + min;

    let choice = null;

    if (randomnumber === 1) {
        choice = "scissors";
    }
    else if (randomnumber === 2) {
        choice = "paper";
    }
    else if (randomnumber === 3) {
        choice = "rock";
    }

    console.log(choice);
    return choice;
}


// Player selection

function getPlayerChoice() {
    let playerchoice = prompt("Choose Rock, Paper or Scissors");
    let choice = playerchoice.toLowerCase();
    console.log(choice);
    return choice;
}

// Play a round

function playRound(player, computer) {
    if (player === "rock" && computer === "scissors") {
        console.log("You win! Rock crushes scissors!");
    }
    else if (player === "rock" && computer === "rock") {
        console.log("Tie! You both selected rock.");
    }
    else if (player === "rock" && computer === "paper") {
        console.log("You lose! Paper covers rock.");
    }
    else if (player === "paper" && computer === "scissors") {
        console.log("You lose! Scissors cuts paper.");
    }
    else if (player === "paper" && computer === "rock") {
        console.log("You win! Paper covers rock.");
    }
    else if (player === "paper" && computer === "paper") {
        console.log("Tie! You both selected paper.");
    }
    else if (player === "scissors" && computer === "scissors") {
        console.log("Tie! You both selected scissors.");
    }
    else if (player === "scissors" && computer === "rock") {
        console.log("You lose! rock crushes scissors.");
    }
    else if (player === "scissors" && computer === "paper") {
        console.log("You win! Scissors cuts paper!");
    }
}

playRound (getPlayerChoice(), getComputerChoice(1, 4));