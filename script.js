const playGame = document.getElementById("playGame");
const goBack = document.getElementById("goBack");

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

