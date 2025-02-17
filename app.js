
let choices = document.querySelectorAll('.choice');
let msg = document.querySelector('#msg');

let userScore = 0;
let compScore = 0;
let userScorePara = document.querySelector('#user-score');
let compScorePara = document.querySelector('#comp-score');


//players move
choices.forEach((choice) => {
  choice.addEventListener("click", () => {
    const userChoice = choice.getAttribute("id");
    checkWinner(userChoice);
  })
})

//Checking winner

//computers move
const compMove = () => {
  const move = ['rock', 'paper', 'scissors'];
  let i = Math.floor(Math.random() * move.length);
  return move[i];
}

//showing winner msg
const showWinner = (userWin, userChoice, compChoice) => {
  if(userWin){
    userScore++;
    userScorePara.innerText = userScore;
    msg.innerText = `You win! Your ${userChoice.toUpperCase()} beats ${compChoice.toUpperCase()}`;
    msg.style.backgroundColor = "green";
  }else{
    compScore++;
    compScorePara.innerText = compScore;
    msg.innerText = `You lost. ${compChoice.toUpperCase()} beats your ${userChoice.toUpperCase()}`;
    msg.style.backgroundColor = "rgb(214, 26, 26)";
  }
}

const checkWinner = (userChoice) => {
  const compChoice = compMove();

  if(userChoice === compChoice) { 
    msg.innerText = `Game was Draw. Play again.`;
    msg.style.backgroundColor = "#081b31";
  }else{
    let userWin = true;
    if (userChoice === "rock") {
      //scissors, paper
      userWin = compChoice === "paper" ? false : true;
    } else if (userChoice === "paper") {
      //rock, scissors
      userWin = compChoice === "scissors" ? false : true;
    } else {
      //rock, paper
      userWin = compChoice === "rock" ? false : true;
    }
    showWinner(userWin, userChoice, compChoice);
  }
}





