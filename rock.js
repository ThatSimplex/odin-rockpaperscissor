function getComputerChoice() {
    let num = Math.random() * 3;

    if (num <= 1) {
        return "Rock";
    } else if (num > 1 && num <= 2) {
        return "Paper";
    } else {
        return "Scissors";
    }
}


