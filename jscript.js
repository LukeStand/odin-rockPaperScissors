// set total scores to 0
let humanScore = 0, computerScore = 0;

//get computers function by choosing random int between 1 and 3
function getComputerChoice()
{
    let rand = Math.floor(Math.random() * 3) + 1;
    if(rand ==1)
    {
        return "rock"
    }
    else if(rand == 2)
    {
        return "paper";
    }
    else
    {
        return "scissors";
    }
}

//prompt user for input using promp 
//assume correct format entered
function getHumanChoice()
{
    let n= prompt("Choose Rock Paper or Scissor");
    n.toLowerCase();
    return n
}
//compare to see if win or loss has happened and update scores
function playRound(humanChoice, computerChoice)
{
    if(humanChoice == computerChoice)
    {
        console.log("It's a tie, you both chose "+humanChoice +".")
    }
    else if((humanChoice == "paper" && computerChoice == "rock") ||
        (humanChoice == "rock" && computerChoice== "scissors") ||
            (humanChoice == "scissors" && computerChoice == "paper"))
    {
        console.log(`You win, ${humanChoice.charAt(0).toUpperCase() + humanChoice.slice(1)} beats ${computerChoice}.`);
        humanScore++;
    }
    else
    {
        console.log(`You lose, ${computerChoice.charAt(0).toUpperCase() + computerChoice.slice(1)} beats ${humanChoice}.`);
        computerScore++;
    }
}

function playGame()
{
    for(let i = 0; i < 5; i++)
    {
        playRound(getHumanChoice(), getComputerChoice());
    }
    if(humanScore > computerScore)
    {
        console.log("You won the game!")
    }
    if(humanScore ==  computerScore)
    {
         console.log("It's a draw")
    }
    else
    {
        console.log("You lost the game!")
    }
}
playGame();


