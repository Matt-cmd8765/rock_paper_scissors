// computer choice function which return either rock paper or scissors

function getComputerChoice(min, max) {
    let randomnumber = Math.floor(Math.random() * (max - min)) + min;
    console.log(randomnumber);

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

getComputerChoice(1, 4);