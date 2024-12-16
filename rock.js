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
    if (choice != "rock" || choice != "paper" || choice != "scissors") {
        console.log("Not a valid option");
        getHumanChoice();
    }
    return choice;
}
