function getComputerChoice() {
    let num = Math.random() * 3;

    if (num <= 1) {
        return "rock";
    } else if (num > 1 && num <= 2) {
        return "paper";
    } else {
        return "scissors";
    }
}

function getHumanChoice() {
    let choice = prompt("Rock, Paper or Scissors?").toLowerCase();
    if (choice != "rock" && choice != "paper" && choice != "scissors") {
        console.log("Not a valid option");
        getHumanChoice();
    }
    return choice;
}

function playRound(humanChoice, computerChoice) {
    if (humanChoice == computerChoice) {
        console.log("It's a draw!");
    } else if (humanChoice == "rock" && computerChoice == "paper") {
        console.log("You lost!");
        computerScore += 1;
    } else if (humanChoice == "paper" && computerChoice == "scissors") {
        console.log("You lost!");
        computerScore += 1;
    } else if (humanChoice == "scissors" && computerChoice == "rock") {
        console.log("You lost!");
        computerScore += 1;
    } else {
        console.log("You won!");
        humanScore += 1;
    }
}

let humanScore = 0;
let computerScore = 0;

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);
