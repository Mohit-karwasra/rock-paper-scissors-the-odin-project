function getComputerChoice() {
	const choices = ["rock", "paper", "scissors"];
	return choices[Math.floor(Math.random() * choices.length)];
}

function playRound(playerSelection, computerSelection) {
	if (playerSelection === "rock") {
		if (computerSelection == "scissors") {
			return "player";
		} else if (computerSelection == "paper") {
			return "computer";
		} else {
			return "draw";
		}
	} else if (playerSelection === "paper") {
		if (computerSelection == "scissors") {
			return "computer";
		} else if (computerSelection == "rock") {
			return "player";
		} else {
			return "draw";
		}
	} else if (playerSelection === "scissors") {
		if (computerSelection == "rock") {
			return "computer";
		} else if (computerSelection == "paper") {
			return "player";
		} else {
			return "draw";
		}
	}
}

let numberOfRounds = prompt("Give number of rounds to play");

for (let i = 0; i < numberOfRounds; i++) {
	let playerSelection = prompt("Enter the choice - rock , paper or scissors").toLowerCase();
	// playerSelection = playerSelection.toLowerCase();
	const computerSelection = getComputerChoice();
	console.log(playerSelection, computerSelection);
	console.log(playRound(playerSelection, computerSelection));
}
