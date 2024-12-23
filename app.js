let userScore = 0;
let compScore = 0;

const msg = document.querySelector("#msg");
const msgContainer = document.querySelector(".msg-container");
const choices = document.querySelectorAll(".choice");

const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");

const genCompChoice = () => {
  const options = ["rock", "paper", "scissors"];
  const randIdx = Math.floor(Math.random() * 3);
  return options[randIdx];
};
const drawGme = () => {
  console.log("game was draw");
  msg.innerText = "Match was draw";
  msg.style.backgroundColor = "#081b31";
};
const showWinner = (userWin, userChoice, compChoice) => {
  if (userWin) {
    userScore++;
    userScorePara.innerText = userScore;
    console.log("you win");
    msg.innerText = `You win ${userChoice} beats ${compChoice}`;
    msg.style.backgroundColor = "green";
  } else {
    compScore++;
    compScorePara.innerText = compScore;

    msg.innerText = `You win ${compChoice} beats ${userChoice}`;
    msg.style.backgroundColor = "red";
  }
};

const playGame = (userChoice) => {
  console.log("userChoice=", userChoice);
  //Generate computer choice-> modular
  const compChoice = genCompChoice();
  console.log("comp choice=", compChoice);

  if (userChoice === compChoice) {
    drawGme();
  } else {
    let userWin = true;
    if (userChoice === "rock") {
      //scissor,paper
      userWin = compChoice === "paper" ? false : true;
    } else if (userChoice === "paper") {
      //rock,scissor
      userWin = compChoice == "rock" ? false : true;
    } else {
      //rock,paper
      userWin = compChoice === "rock" ? false : true;
    }
    showWinner(userWin, userChoice, compChoice);
  }
};

choices.forEach((choice) => {
  choice.addEventListener("click", () => {
    const userChoice = choice.getAttribute("id");
    console.log("choie was clicked", userChoice);
    playGame(userChoice);
  });
});
