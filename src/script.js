"use strict";

// CLICKING OF MOVES

/*we have a total moves of 10
    for every time button is clicked reduced button by 1
*/

/*so for each move you click, the computer also generates 
its own move using math.random() so 
// if clicked Scissors
    if(your move is Scissors and computer move is paper)
    then increase player score by 1

    else (if your move is Scissors and computer move is rock)
    then increase the computer move by 1

    else (if your move is Scissors and computer move is Scissors )
    then you both tied don't increase any score

    and update the result paragraph
    
    // if clicked rock
    if(your move is Rock and computer move is paper)
    then increase computer score by 1, paper beat rock

    else (if your move is rock and computer move is scissors)
    then increase the player move by 1, rock beat scissors

    else (if your move is rock and computer move is rock )
    then you both tied don't increase any score

    and update the result paragraph
    
// if clicked paper

     if(your move is Paper and computer move is Rock)
    then increase player score by 1, paper beat rock

    else (if your move is Paper and computer move is Scissors)
    then increase the computer move by 1, scissors beat rock

    else (if your move is Paper and computer move is Paper )
    then you both tied don't increase any score

    and update the result paragraph

*/

/* RESET BUTTON
    when clicked reset the Player and computer score, to 0,
    and reset the moves-left to 0
    and also remove the 'the reselt text (you tied, you win, you lose)'
*/

const buttonParent = document.querySelector(".buttons-section");
const computerScore = document.querySelector(".computer");
const playerScore = document.querySelector(".player");
const movesLeft = document.querySelector(".moves-left");
const computerMove = document.querySelector(".computer-move");
const restartBtn = document.querySelector(".restart-btn");

let moves = 10;
let player = 0;
let computer = 0;

const computerSelection = function () {
  const choices = ["Rock", "Paper", "Scissors"];
  const randomNumber = Math.floor(Math.random() * choices.length);
  const computerChoice = choices[randomNumber];
  return computerChoice;
};

console.log(computerSelection());

const funct = function () {};

buttonParent.addEventListener("click", (e) => {
  let compSelection;

  //   if rock selected

  if (e.target.classList.contains("rock-btn") && moves > 0) {
    compSelection = computerSelection();
    moves--;
    if (e.target.textContent === "Rock" && compSelection === "Paper") {
      ++computer;
    } else if (
      e.target.textContent === "Rock" &&
      compSelection === "Scissors"
    ) {
      ++player;
    } else if (e.target.textContent === "Rock" && compSelection === "Rock") {
      player;
      computer;
    }
  }

  //   if Scissors selected
  if (e.target.classList.contains("scissors-btn") && moves > 0) {
    compSelection = computerSelection();
    moves--;
    if (e.target.textContent === "Scissors" && compSelection === "Paper") {
      ++player;
    } else if (
      e.target.textContent === "Scissors" &&
      compSelection === "Rock"
    ) {
      ++computer;
    } else if (
      e.target.textContent === "Scissors" &&
      compSelection === "Scissors"
    ) {
      player;
      computer;
    }
  }

  //   if paper selected
  if (e.target.classList.contains("paper-btn") && moves > 0) {
    compSelection = computerSelection();
    moves--;
    if (e.target.textContent === "Paper" && compSelection === "Scissors") {
      ++computer;
    } else if (e.target.textContent === "Paper" && compSelection === "Rock") {
      ++player;
    } else if (e.target.textContent === "Paper" && compSelection === "paper") {
      player;
      computer;
    }
  }

  // when moves equat to zero the display the Game over board
  if (moves === 0) {
    // display the winner either you or the computer won or tied the game
    if (player > computer) {
      document.querySelector(".who-won").textContent = "You won the game!";
    } else if (computer > player) {
      document.querySelector(".who-won").textContent = "Computer Won the game!";
    } else {
      document.querySelector(".who-won").textContent = "You tied the game!";
    }

    // display the winner and the game over board  2minutes after moves are 0
    setTimeout(function () {
      buttonParent
        .closest(".gaming-section")
        .firstElementChild.classList.add("hidden");
      buttonParent
        .closest(".gaming-section")
        .lastElementChild.classList.remove("hidden");
    }, 2000);
  }

  movesLeft.textContent = moves;
  playerScore.textContent = player;
  computerScore.textContent = computer;
  computerMove.textContent = compSelection;
});

// when clicking restart
restartBtn.addEventListener("click", (e) => {
  moves = 10;
  player = 0;
  computer = 0;
  movesLeft.textContent = moves;
  playerScore.textContent = player;
  computerScore.textContent = computer;
  computerMove.textContent = "";

  restartBtn
    .closest(".gaming-section")
    .firstElementChild.classList.remove("hidden");
  restartBtn
    .closest(".gaming-section")
    .lastElementChild.classList.add("hidden");
});
