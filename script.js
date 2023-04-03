// Play round function

function playRound(player, computer) {
 
    if (player === "rock" && computer === "scissors") {
        const win1 = document.getElementById('overallResult');
        win1.textContent = "You win! Rock crushes scissors!";

        let playerwin = "playerwin";
        return playerwin;
    }
    else if (player === "rock" && computer === "rock") {
        const win2 = document.getElementById('overallResult');
        win2.textContent = "Tie! You both selected rock.";

        let tie = "tie";
        return tie;
    }
    else if (player === "rock" && computer === "paper") {
        const win3 = document.getElementById('overallResult');
        win3.textContent = "You lose! Paper covers rock.";

        let computerwin = "computerwin";        
        return computerwin;
    }
    else if (player === "paper" && computer === "scissors") {
        const win4 = document.getElementById('overallResult');
        win4.textContent = "You lose! Scissors cuts paper.";

        let computerwin = "computerwin";
        return computerwin;
    }
    else if (player === "paper" && computer === "rock") {
        const win5 = document.getElementById('overallResult');
        win5.textContent = "You win! Paper covers rock.";
        
        let playerwin = "playerwin"
        return playerwin;
    }
    else if (player === "paper" && computer === "paper") {
        const win6 = document.getElementById('overallResult');
        win6.textContent = "Tie! You both selected paper.";

        let tie = "tie";
        return tie;
    }
    else if (player === "scissors" && computer === "scissors") {
        const win7 = document.getElementById('overallResult');
        win7.textContent = "Tie! You both selected scissors.";
        
        let tie = "tie";
        return tie;
    }
    else if (player === "scissors" && computer === "rock") {
        const win8 = document.getElementById('overallResult');
        win8.textContent = "You lose! rock crushes scissors.";

        let computerwin = 'computerwin';
        return computerwin;
    }
    else if (player === "scissors" && computer === "paper") {
        const win9 = document.getElementById('overallResult');
        win9.textContent = "You win! Scissors cuts paper!";
        
        let playerwin = "playerwin";
        return playerwin;
    }
}

// Play 5 rounds all in the eventlistener click

function game () {
    // counters for wins, ties and total games
    let playerwin = 0; 
    let computerwin = 0;
    let tie = 0;
    let totalgames = 0;

    // initiate on clicks
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

            //Display computer choice on the screen
            const computerContent = document.getElementById("computerChose");
            computerContent.textContent = "The computer chose: " + computerChoice;

            // Player choice
            let playerChoice = button.id;

            //Display player choice on the screen
            const playerContent = document.getElementById("playerChose");
            playerContent.textContent = "The player chose: " + playerChoice;

            // run each round
            let result = playRound(playerChoice, computerChoice);

            // count wins and ties
            if (result === "playerwin") {
                playerwin++;
                totalgames++;
            }
            else if (result === "computerwin") {
                computerwin++;
                totalgames++;
            }
            else if (result === "tie") {
                tie++;
                totalgames++;
            }
            console.log("The player has won " + playerwin + " times");
            console.log("The computer has won " + computerwin + " times");
            console.log("There were " + tie + " ties");

        if (totalgames === 5 && playerwin > computerwin) {
            console.log("Player wins!");
        }
        else if (totalgames === 5 && computerwin > playerwin) {
            console.log("Computer wins!");
        }
        else if (totalgames ===5 && computerwin === playerwin) {
            console.log("Tie, no one wins. How boring...");
        }
        })
    })
}

game();