let userValue = 0;
function rockSelection() {
  userValue = "Rock";
  document.querySelector("#playerSelection").innerHTML =
    '<img src="./images/Rock.jpg">';
  valueGenerator();
}
function paperSelection() {
  userValue = "Paper";
  document.querySelector("#playerSelection").innerHTML =
    '<img src="./images/Paper.jpg">';
  valueGenerator();
}
function scissorSelection() {
  userValue = "Scissor";
  document.querySelector("#playerSelection").innerHTML =
    '<img src="./images/Scissorjpg.jpg" height="100px">';
  valueGenerator();
}

//to calculate the score, it will take a new scoreCard or one coming from the localStorage.
let scoreStr = localStorage.getItem("scoreCard");
let scoreCard = JSON.parse(scoreStr) || {
  user: 0,
  computer: 0,
  tie: 0,
  totalGame: 0,
};
//if we don't take the value from the localStorage then our new score card will be store in the localStorage.

//calling our scoreCardDisplay everytime when our page gets loaded
scoreCardDisplay();

//value generator for computer side
function valueGenerator() {
  let randomValue = Math.random() * 3;
  let computerValue = 0;
  if (randomValue <= 1) {
    document.querySelector("#computerSelection").innerHTML =
      '<img src="./images/Rock.jpg" height="100px">';
    computerValue = "Rock";
  } else if (randomValue <= 2) {
    document.querySelector("#computerSelection").innerHTML =
      '<img src="./images/Paper.jpg" height="100px">';
    computerValue = "Paper";
  } else if (randomValue <= 3) {
    document.querySelector("#computerSelection").innerHTML =
      '<img src="./images/Scissorjpg.jpg" height="100px">';
    computerValue = "Scissor";
  }
  setTimeout(function ifElse() {
    let popupMessage;
    if (userValue == "Rock" && computerValue == "Scissor") {
      popupMessage = "Congratulations! You Win";
      scoreCard.user++;
    } else if (userValue == "Paper" && computerValue == "Rock") {
      popupMessage = "Congratulations! You Win";
      scoreCard.user++;
    } else if (userValue == "Scissor" && computerValue == "Paper") {
      popupMessage = "Congratulations! You Win";
      scoreCard.user++;
    } else if (userValue == "Scissor" && computerValue == "Rock") {
      popupMessage = "Oops! Computer Wins";
      scoreCard.computer++;
    } else if (userValue == "Rock" && computerValue == "Paper") {
      popupMessage = "Oops! Computer Wins";
      scoreCard.computer++;
    } else if (userValue == "Paper" && computerValue == "Scissor") {
      popupMessage = "Oops! Computer Wins";
      scoreCard.computer++;
    } else {
      popupMessage = "It's a tie";
      scoreCard.tie++;
    }
    if (popupMessage) {
      document.querySelector("#displayResultDiv").style.display = "block";
      document.querySelector("#displayResult").innerHTML = popupMessage;
    }
    scoreCard.totalGame++;

    //clearing our image section for the new one, storing the data in the localStorage and calling the scoreCardDisplay fn in the end.
    document.querySelector("#computerSelection").innerHTML = " ";
    document.querySelector("#playerSelection").innerHTML = " ";
    localStorage.setItem("scoreCard", JSON.stringify(scoreCard));
    scoreCardDisplay();
  }, 2000);
}

function scoreCardDisplay() {
  let scoreCardObj = JSON.parse(localStorage.getItem("scoreCard"));
  document.querySelector("#userScore").innerHTML =
    scoreCardObj !== null ? scoreCardObj.user : 0;
  document.querySelector("#computerScore").innerHTML =
    scoreCardObj !== null ? scoreCardObj.computer : 0;
  document.querySelector("#tieScore").innerHTML =
    scoreCardObj !== null ? scoreCardObj.tie : 0;
  document.querySelector("#totalGames").innerHTML =
    scoreCardObj !== null ? scoreCardObj.totalGame : 0;
}
