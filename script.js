const playGame = document.getElementById("playGame");
const goBack = document.getElementById("goBack");
const proceed = document.getElementById("proceed");
const home = document.getElementById("home");

const humanScoreBoard = document.getElementById("humanScore");
const computerScoreBoard = document.getElementById("computerScore");

const humanPlayArea = document.querySelector(".humanPlayArea");
const computerPlayArea = document.querySelector(".computerPlayArea");

function computerChoices(min,max){
    const lowerBound = Math.ceil(min);
    const upperBound = Math.floor(max);
    return Math.floor(Math.random() * (upperBound - lowerBound) + lowerBound);
}

if (playGame) {
  playGame.addEventListener("click", () => {
    window.location.href = "instructions.html";
  });
}

if (goBack) {
  goBack.addEventListener("click", () => {
    window.location.href = "index.html";
  });
}

if (proceed) {
    proceed.addEventListener("click",() => {
        window.location.href = "game.html";
    })
}

if (home) {
    home.addEventListener("click",() => {
        window.location.href = "index.html";
    })
}
var humanScore = 0;
var computerScore = 0;

document.addEventListener("keydown",(event)=>{
    event.preventDefault();

    const computerChoice = computerChoices(1,4);

    if(computerChoice === 1){
        computerPlayArea.className = "stone";
    }else if(computerChoice === 2){
        computerPlayArea.className = "paper";
    }else if(computerChoice === 3){
        computerPlayArea.className = "scissors";
    }

    if(event.key === "a"){
        humanPlayArea.className = "stone";
        humanPlayArea.textContent = "STONE";

        if(computerPlayArea.className === "stone"){
            computerPlayArea.textContent = "STONE";

        }else if(computerPlayArea.className === "paper"){
            computerPlayArea.textContent = "PAPER";
            computerScore += 1;
            computerScoreBoard.textContent = `${computerScore}`;

        }else if(computerPlayArea.className === "scissors"){
            computerPlayArea.textContent = "SCISSORS";
            humanScore += 1;
            humanScoreBoard.textContent = `${humanScore}`;
        }
    }else if(event.key === "w"){
        humanPlayArea.className = "paper";
        humanPlayArea.textContent = "PAPER";
        if(computerPlayArea.className === "stone"){
            computerPlayArea.textContent = "STONE";
            humanScore += 1;
            humanScoreBoard.textContent = `${humanScore}`;
        }else if(computerPlayArea.className === "paper"){
            computerPlayArea.textContent = "PAPER";
        }else if(computerPlayArea.className === "scissors"){
            computerPlayArea.textContent = "SCISSORS";
            computerScore += 1;
            computerScoreBoard.textContent = `${computerScore}`;
        }
    }else if(event.key === "d"){
        humanPlayArea.className = "scissors";
        humanPlayArea.textContent = "SCISSORS";
        if(computerPlayArea.className === "stone"){
            computerPlayArea.textContent = "STONE";
            computerScore += 1;
            computerScoreBoard.textContent = `${computerScore}`;
        }else if(computerPlayArea.className === "paper"){
            computerPlayArea.textContent = "PAPER";
            humanScore += 1;
            humanScoreBoard.textContent = `${humanScore}`;
        }else if(computerPlayArea.className === "scissors"){
            computerPlayArea.textContent = "SCISSORS";
        }
    }else if(event.key === "q"){
        alert("Real Players don't quit without a fight");
    }

    if (humanScore === 5) {
        setTimeout(() => {
            window.location.href = "won.html";
        }, 1100);
    } else if (computerScore === 5) {
        setTimeout(() => {
            window.location.href = "lost.html";
        }, 1100);
    }
})
