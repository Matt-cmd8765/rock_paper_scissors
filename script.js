// Put both the computer and player choice functions inside the eventListener
// First gets computer choice, then player choice, then runs playRound function

const buttons = document.querySelectorAll('button');
buttons.forEach((button) => {
    button.addEventListener('click', () => {
        // computer choice
        let randomNumber = Math.floor(Math.random() * 3) + 1;

        let computerChoice = null;
    
        if (randomNumber === 1) {
            computerChoice = "scissors";
        }
        else if (randomNumber === 2) {
            computerChoice = "paper";
        }
        else if (randomNumber === 3) {
            computerChoice = "rock";
        }

        const computerContent = document.getElementById("computerChose");
        computerContent.textContent = "The computer chose: " + computerChoice;

        console.log("The computer chose: " + computerChoice);

        // Player choice
        let playerChoice = button.id;
        console.log("The player chose: " + playerChoice);

        const playerContent = document.getElementById("playerChose");
        playerContent.textContent = "The player chose: " + playerChoice;

        playRound(playerChoice, computerChoice);
    })
})

// Play round function

function playRound(player, computer) {
 
 const result = document.querySelector('#result');

    if (player === "rock" && computer === "scissors") {
        const win1 = document.getElementById('overallResult');
        win1.textContent = "You win! Rock crushes scissors!";

        console.log("You win! Rock crushes scissors!");
        let playerwin = "playerwin";
        return playerwin;
    }
    else if (player === "rock" && computer === "rock") {
        const win2 = document.getElementById('overallResult');
        win2.textContent = "Tie! You both selected rock.";

        console.log("Tie! You both selected rock.");
        let tie = "tie";
        return tie;
    }
    else if (player === "rock" && computer === "paper") {
        const win3 = document.getElementById('overallResult');
        win3.textContent = "You lose! Paper covers rock.";

        console.log("You lose! Paper covers rock.");
        let computerwin = "computerwin";        
        return computerwin;
    }
    else if (player === "paper" && computer === "scissors") {
        const win4 = document.getElementById('overallResult');
        win4.textContent = "You lose! Scissors cuts paper.";

        console.log("You lose! Scissors cuts paper.");
        let computerwin = "computerwin";
        return computerwin;
    }
    else if (player === "paper" && computer === "rock") {
        const win5 = document.getElementById('overallResult');
        win5.textContent = "You win! Paper covers rock.";
        
        console.log("You win! Paper covers rock.");
        let playerwin = "playerwin"
        return playerwin;
    }
    else if (player === "paper" && computer === "paper") {
        const win6 = document.getElementById('overallResult');
        win6.textContent = "Tie! You both selected paper.";

        console.log("Tie! You both selected paper.");
        let tie = "tie";
        return tie;
    }
    else if (player === "scissors" && computer === "scissors") {
        const win7 = document.getElementById('overallResult');
        win7.textContent = "Tie! You both selected scissors.";
        
        console.log("Tie! You both selected scissors.");
        let tie = "tie";
        return tie;
    }
    else if (player === "scissors" && computer === "rock") {
        const win8 = document.getElementById('overallResult');
        win8.textContent = "You lose! rock crushes scissors.";

        console.log("You lose! rock crushes scissors.");
        let computerwin = 'computerwin';
        return computerwin;
    }
    else if (player === "scissors" && computer === "paper") {
        const win9 = document.getElementById('overallResult');
        win9.textContent = "You win! Scissors cuts paper!";
        
        console.log("You win! Scissors cuts paper!");
        let playerwin = "playerwin";
        return playerwin;
    }
}



// Play 5 rounds

/*function game () {
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

game();*/