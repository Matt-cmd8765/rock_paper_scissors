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

    console.log("The computer chose: " + choice);
    return choice;
}


// Player selection

function getPlayerChoice() {
    let choice;
    // Do while loop will force the use to select either rock, paper or scissors. 
    do {
      choice = prompt("Choose Rock, Paper or Scissors").toLowerCase();
    }
    while (choice != "rock" && choice != "paper" && choice != "scissors");
    console.log("The player chose: " + choice);
    return choice;
}

// Play a round

function playRound(player, computer) {

    if (player === "rock" && computer === "scissors") {
        console.log("You win! Rock crushes scissors!");
        let playerwin = "playerwin";
        return playerwin;
    }
    else if (player === "rock" && computer === "rock") {
        console.log("Tie! You both selected rock.");
        let tie = "tie";
        return tie;
    }
    else if (player === "rock" && computer === "paper") {
        console.log("You lose! Paper covers rock.");
        let computerwin = "computerwin";        
        return computerwin;
    }
    else if (player === "paper" && computer === "scissors") {
        console.log("You lose! Scissors cuts paper.");
        let computerwin = "computerwin";
        return computerwin;
    }
    else if (player === "paper" && computer === "rock") {
        console.log("You win! Paper covers rock.");
        let playerwin = "playerwin"
        return playerwin;
    }
    else if (player === "paper" && computer === "paper") {
        console.log("Tie! You both selected paper.");
        let tie = "tie";
        return tie;
    }
    else if (player === "scissors" && computer === "scissors") {
        console.log("Tie! You both selected scissors.");
        let tie = "tie";
        return tie;
    }
    else if (player === "scissors" && computer === "rock") {
        console.log("You lose! rock crushes scissors.");
        let computerwin = 'computerwin';
        return computerwin;
    }
    else if (player === "scissors" && computer === "paper") {
        console.log("You win! Scissors cuts paper!");
        let playerwin = "playerwin";
        return playerwin;
    }
}

// Play 5 rounds

function game () {
    let playerwin = 0; 
    let computerwin = 0;
    let tie = 0;
    
    // Loop through 5 games and count player and computer wins. 

    for (let i = 0; i < 5; i++)
    {
        let result = playRound(getPlayerChoice(), getComputerChoice(1, 4));
        if (result === "playerwin") {
            playerwin++;
        }
        else if (result === "computerwin") {
            computerwin++;
        }
        else if (result === "tie") {
            tie++;
        }
    }
    console.log("The player has won " + playerwin + " times");
    console.log("The computer has won " + computerwin + " times");
    console.log("There were " + tie + " ties");

    // detemine winner based on games won

    if (playerwin > computerwin) {
        console.log("Player wins!");
    }
    else if (computerwin > playerwin) {
        console.log("Computer wins!");
    }
    else {
        console.log("Tie, no one wins. How boring...");
    }
}

game();