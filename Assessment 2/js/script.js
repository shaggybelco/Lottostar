var computerBagHolder = document.getElementById("computerBag");
var playerBagHolder = document.getElementById("playerBag");
var result = document.getElementById("result");
var selectBag = document.getElementById("selectBag");
var keepBag = document.getElementById("keepBag");
var switchBag = document.getElementById("switchBag");
var replayGame = document.getElementById("replay");

const bagValues = [500, 1000, 2000, 5000, 10000, 25000, 50000, 100000, 250000];
let playerBag;
let computerBag;

function initializeGame() {
  computerBag = getRandomBag();
}

function selectPlayerBag() {
  playerBag = getRandomBag();
  playerBagHolder.textContent = `Your Bag: R ${playerBag}`;

  switchBag.disabled = false;
  keepBag.disabled = false;
  selectBag.disabled = true;
}

function switchPlayerBag() {
  playerBag = getRandomBag();
  playerBagHolder.textContent = `Your Bag: R ${playerBag}`;
}

function revealResults() {
  switchBag.disabled = true;
  keepBag.disabled = true;
  selectBag.disabled = true;
  replayGame.disabled = false;

  computerBagHolder.textContent = `Computer's Bag: R ${computerBag}`;
  if (playerBag === computerBag) {
    result.textContent = "Congratulations! You Won!";
    result.style.color = "green";
  } else {
    result.textContent = "Sorry, You Lost!";
    result.style.color = "orangered";
  }
}

function replayTheGame() {
  playerBag = null;
  computerBag = null;
  initializeGame();
  playerBagHolder.textContent = "";
  computerBagHolder.textContent = "";
  result.textContent = "";
  switchBag.disabled = true;
  keepBag.disabled = true;
  selectBag.disabled = false;
  replayGame.disabled = true;
}

selectBag.addEventListener("click", () => {
  selectPlayerBag();
  animateSliding();
});
switchBag.addEventListener("click", () => {
  switchPlayerBag();
  animateSliding();
});
keepBag.addEventListener("click", () => {
  revealResults();
  animateSliding();
});
replayGame.addEventListener("click", () => {
  replayTheGame();
  animateSliding();
});

function getRandomBag() {
  const randomIndex = Math.floor(Math.random() * bagValues.length);
  return bagValues[randomIndex];
}

function animateSliding() {
  const dResult = document.querySelector(".d-result");
  dResult.style.transform = "translateX(-100%)";

  setTimeout(function () {
    dResult.style.transform = "translateX(0)";
  }, 300);
}

initializeGame();
