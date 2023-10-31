async function playRockPaperScissors() {
  const playerAnswer = await getPlayerAnswer();
  if (!playerAnswer) {
    return console.log("Please provide an answer!");
  }

  const computerAnswer = getComputerAnswer();
  const result = getWinner(playerAnswer, computerAnswer);

  console.log(`You chose: ${playerAnswer}`);
  console.log(`Computer chose: ${computerAnswer}`);
  console.log(`The winner is...: ${result}`);
}

function getPlayerAnswer() {
  const answer = prompt("Enter your answer: Rock, Paper, or Scissors");

  // console.log(answer.toLowerCase());

  return answer.toLowerCase();
}
function getComputerAnswer() {
  const answers = ["rock", "paper", "scissors"];
  const randomAnswer = answers[Math.floor(Math.random() * 3)];
  // console.log(Math.floor(Math.random() * 3));

  // console.log(randomAnswer);

  return randomAnswer;
}
function getWinner(playerAnswer, computerAnswer) {
  if (playerAnswer === computerAnswer) {
    return "You tied";
  } else if (
    (playerAnswer === "rock" && computerAnswer === "scissors") ||
    (playerAnswer === "paper" && computerAnswer === "rock") ||
    (playerAnswer === "scissors" && computerAnswer === "paper")
  ) {
    return "You win";
  } else {
    return "Computer wins";
  }
}
