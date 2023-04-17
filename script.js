const btn1 = document.getElementById("rock");
const btn2 = document.getElementById("paper");
const btn3 = document.getElementById("scissors");

function getComputerChoice() {
	const choices = ["rock", "paper", "scissors"];
	return choices[Math.floor(Math.random() * choices.length)];
}

let playerWins = 0;
let computerWins = 0;
let totalRounds = 0;

function playRound(playerSelection, computerSelection) {
	totalRounds++;
	if (playerWins < 5 && computerWins < 5) {
		if (playerSelection === "rock") {
			if (computerSelection == "scissors") {
				playerWins++;
				return `player : ${playerWins}/${totalRounds}`;
			} else if (computerSelection == "paper") {
				computerWins++;
				return `computer : ${computerWins}/${totalRounds}`;
			} else {
				return "draw";
			}
		} else if (playerSelection === "paper") {
			if (computerSelection == "scissors") {
				computerWins++;
				return `computer : ${computerWins}/${totalRounds}`;
			} else if (computerSelection == "rock") {
				playerWins++;
				return `player : ${playerWins}/${totalRounds}`;
			} else {
				return "draw";
			}
		} else if (playerSelection === "scissors") {
			if (computerSelection == "rock") {
				computerWins++;
				return `computer : ${computerWins}/${totalRounds}`;
			} else if (computerSelection == "paper") {
				playerWins++;
				return `player : ${playerWins}/${totalRounds}`;
			} else {
				return "draw";
			}
		}
	} else {
		btn1.setAttribute("disabled", "");
		btn2.setAttribute("disabled", "");
		btn3.setAttribute("disabled", "");

		return `${
			playerWins < computerWins
				? "computer wins : " + computerWins + "/" + totalRounds
				: "player wins : " + playerWins + "/" + totalRounds
		}`;
	}
}

document.getElementById("rock").addEventListener("click", () => {
	const playerSelection = "rock";
	const computerSelection = getComputerChoice();

	document.getElementById("result").innerText = playRound(playerSelection, computerSelection);
});

document.getElementById("paper").addEventListener("click", () => {
	const playerSelection = "paper";
	const computerSelection = getComputerChoice();

	document.getElementById("result").innerText = playRound(playerSelection, computerSelection);
});

document.getElementById("scissors").addEventListener("click", () => {
	const playerSelection = "scissors";
	const computerSelection = getComputerChoice();

	document.getElementById("result").innerText = playRound(playerSelection, computerSelection);
});
