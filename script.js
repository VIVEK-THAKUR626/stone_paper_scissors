const playGame = document.getElementById("playGame");
const goBack = document.getElementById("goBack");
const proceed = document.getElementById("proceed");

let humanScore = document.getElementById("humanScore");
let computerScore = document.getElementById("computerScore");

let humanPlayArea = document.getElementById("humanPlayArea");
let computerPlayArea = document.getElementById("computerPlayArea");

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

humanPlayArea.addEventListener("keydown",(event)=>{
    event.preventDefault();
    if(event.key === "a"){
        
    }
})
