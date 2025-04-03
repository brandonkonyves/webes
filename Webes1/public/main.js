let playerScore = 0;
let computerScore = 0;

function playGame(playerChoice)
{
    const choices = ['Rock', 'Paper', 'Scissors'];
    const computerChoice = choices[Math.floor(Math.random() * 3)]; //random choice for the computer
    let result;
    if (!playerChoice)  //When loading into the page the "computerChoice" still gets a variable even if you didn't choose anything.
        result = "Rock, Paper, Scissors";
    else if (playerChoice === computerChoice) //strict equality for all the choices
        result = "Draw!";
    else if ((playerChoice === "Rock" && computerChoice === "Scissors") || (playerChoice === "Paper" && computerChoice === "Rock") || (playerChoice === "Scissors" && computerChoice === "Paper"))
    {
        result = "You win!";
        playerScore++;
    }
    else
    {
        result = "You lose!";
        computerScore++;
    }
    document.getElementById("result").innerHTML = result; //printing the first msg (Draw, Win, Lose)
    document.getElementById("computerChoice").innerHTML = `The computer choose:  ${computerChoice}`; //printing the random "computerChoice" (2nd msg)
    document.getElementById("score").innerHTML = `Player: ${playerScore} - Computer: ${computerScore}`; //printing the overall score (draw didn't included cuz we don't count it) (3rd msg)
}