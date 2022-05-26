function computerPlay(){
    let choice = ["rock", "paper", "scissors"][Math.floor(Math.random()*3)];
    return choice;
}

function rpsRound(computerSelection){

    let playerSelection = prompt("Time to choose! Rock, Paper, or Scissors?");
    if(playerSelection.toLowerCase() === 'rock'){
        if(computerSelection === 'rock'){
            console.log("The player chose "+playerSelection+ " and the computer chose " + computerSelection +" - The match is a draw.");
            return "draw";
        } else if(computerSelection === 'paper'){
            console.log("The player chose "+playerSelection+ " and the computer chose " + computerSelection +" - The computer wins.");
            return "computer";
        } else if(computerSelection === 'scissors'){
            console.log("The player chose "+playerSelection+ " and the computer chose " + computerSelection +" - The player wins.");
            return "player";
        }
    }

    else if(playerSelection.toLowerCase() === 'paper'){
        if(computerSelection === 'paper'){
            console.log("The player chose "+playerSelection+ " and the computer chose " + computerSelection +" - The match is a draw.");
            return "draw";
        } else if(computerSelection === 'rock'){
            console.log("The player chose "+playerSelection+ " and the computer chose " + computerSelection +" - The player wins.");
            return "player";
        } else if(computerSelection === 'scissors'){
            console.log("The player chose "+playerSelection+ " and the computer chose " + computerSelection +" - The computer wins.");
            return "computer";
        }
    }
    else if(playerSelection.toLowerCase() === 'scissors'){
        if(computerSelection === 'scissors'){
            console.log("The player chose "+playerSelection+ " and the computer chose " + computerSelection +" - The match is a draw.");
            return "draw";
        } else if(computerSelection === 'rock'){
            console.log("The player chose "+playerSelection+ " and the computer chose " + computerSelection +" - The computer wins.");
            return "computer";
        } else if(computerSelection === 'paper'){
            console.log("The player chose "+playerSelection+ " and the computer chose " + computerSelection +" - The player wins.");
            return "player";
        }
    }
}

function game(){
    let playerWins = 0;
    let computerWins = 0;
    for(i = 0; i < 5; i++){
        let winner = rpsRound(computerPlay());
        if (winner === 'player'){
            playerWins++;
            console.log("The score is player: "+playerWins+", computer: "+computerWins);
        }else if (winner === 'computer'){
            computerWins++;
            console.log("The score is player: "+playerWins+", computer: "+computerWins);
        } else{
            console.log("The match was a draw. The score is player: "+playerWins+", computer: "+computerWins);
        }
    }
    if(playerWins > computerWins){
        console.log("Player Wins with a score of "+playerWins+"!");
    }else if (computerWins > playerWins){
        console.log("Computer Wins with a score of "+computerWins+"!");
    } else{
        console.log("It was a draw, the score was player: "+playerWins+", computer: "+computerWins);
    }
}

game();