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
function checkWin(results, scores)
{
    if(humanScore >= 5)
    {
        scores.textContent = ``;
        results.textContent = `Human wins the five rounds!!!`
        humanScore =0;
        computerScore = 0;
    }
    else if(computerScore >= 5)
    {
        scores.textContent = ``;
        results.textContent = `Computer wins the five rounds!!!`;
        humanScore =0;
        computerScore = 0;
    }
    return;
}

//prompt user for input using promp 
//assume correct format entered
// function getHumanChoice()
// {
//     let n= prompt("Choose Rock Paper or Scissor");
//     n.toLowerCase();
//     return n
// }
//compare to see if win or loss has happened and update scores
function playRound(humanChoice, computerChoice)
{
    const result = document.querySelector("#results")
    const scores = document.querySelector("#scores")
    if(humanChoice == computerChoice)
    {
        // console.log("It's a tie, you both chose "+humanChoice +".")
        result.textContent = "It's a tie, you both chose "+humanChoice +".";
    }
    else if((humanChoice == "paper" && computerChoice == "rock") ||
        (humanChoice == "rock" && computerChoice== "scissors") ||
            (humanChoice == "scissors" && computerChoice == "paper"))
    {
        // console.log(`You win, ${humanChoice.charAt(0).toUpperCase() + humanChoice.slice(1)} beats ${computerChoice}.`);
        result.textContent = `You win, ${humanChoice.charAt(0).toUpperCase() + humanChoice.slice(1)} beats ${computerChoice}.`;
        humanScore++;
    }
    else
    {
        // console.log(`You lose, ${computerChoice.charAt(0).toUpperCase() + computerChoice.slice(1)} beats ${humanChoice}.`);
        result.textContent = `You lose, ${computerChoice.charAt(0).toUpperCase() + computerChoice.slice(1)} beats ${humanChoice}.`;
        computerScore++;
    }
    scores.innerHTML = `Computer Score: ${computerScore}<br>Human Score: ${humanScore}`;
    //check if there is a winner
    checkWin(result, scores);
}

const btn = document.querySelector(".buttons");
btn.addEventListener("click",function (e){
    let humChoice = e.target.id;
    playRound(humChoice, getComputerChoice());
});


