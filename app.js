const rulesBtn = document.querySelector(".btn-rules");
const rulesModal = document.querySelector(".rules-modal");
const closeBtn = document.querySelector(".btn-close");
const gameDiv = document.querySelector(".game");
const resultsDiv = document.querySelector(".results");
const paper = document.querySelector(".paper");
const rock = document.querySelector(".rock");
const scissors = document.querySelector(".scissors");
const playerChoice = document.querySelector(".player-choice");

rulesBtn.addEventListener("click", (event) => {
  event.preventDefault();
  rulesModal.classList.remove("hide");
})

closeBtn.addEventListener("click", (event) => {
  event.preventDefault();
  rulesModal.classList.add("hide");
})

paper.addEventListener("click", (event) => {
  event.preventDefault();
  gameDiv.classList.add("hide");
  resultsDiv.classList.remove("hide");
  playerChoice.insertAdjacentElement("beforeend", paper);
})
