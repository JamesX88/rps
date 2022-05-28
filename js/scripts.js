function computerPlay(){
    let choice = ["rock", "paper", "scissors"][Math.floor(Math.random()*3)];
    return choice;
}

function rpsRound(playerSelection, computerSelection){
    if(playerSelection === 'rock' && computerSelection === 'rock' || playerSelection === 'paper' && computerSelection === 'paper' || playerSelection === 'scissors' && computerSelection === 'scissors'){
        console.log("TIE! No points.")
        return "It's a tie! Try again."
    }
    switch(playerSelection){
        case 'rock':
            switch(computerSelection){
                case 'paper':
                    return 'cpuWins';
                    break;
                case 'scissors':
                    return 'playerWins';
                    break;
            }
            break;
        case 'paper':
            switch(computerSelection){
                case 'rock':
                    return 'playerWins';
                    break;
                case 'scissors':
                    return 'cpuWins';
                    break;
            }
            break;
        case 'scissors':
            switch(computerSelection){
                case 'rock':
                    return 'cpuWins';
                    break;
                case 'paper':
                    return 'playerWins';
                    break;
            }
            break;
    }
}

function game(){
    let playerWins = 0;
    let computerWins = 0;

    const ps = document.querySelector('.playerScore');
    const cs = document.querySelector('.computerScore');
    const msg = document.querySelector('.gameMessage');

    let rockBtn = document.querySelector('#rock');
    let paperBtn = document.querySelector('#paper');
    let scissorsBtn = document.querySelector('#scissors');
            
    rockBtn.addEventListener('click', () => {
        console.log("clicked Rock");

        let computerPick = computerPlay();
        let gameResult = rpsRound("rock", computerPick);
        if(gameResult === 'playerWins'){
            playerWins++;
            ps.innerHTML = playerWins;
            if(playerWins < 5){
                msg.innerHTML = "The player threw a rock. <br/> The computer threw a "+computerPick+ "!<br/>  Player Wins!"
            } else {
                msg.innerHTML = "The player has 5 wins!<br/> The game is over. <br/> Player Wins! <br/> Click any button below to play again."
                computerWins = 0;
                playerWins = 0;
                ps.innerHTML = 0;
                cs.innerHTML = 0;
            }
        } else if(gameResult === 'cpuWins'){
            computerWins++;
            cs.innerHTML = computerWins;
            if(computerWins < 5){
                msg.innerHTML = "The player threw a rock. <br/> The computer threw a "+computerPick+ "! <br/> Computer Wins!"
            } else{
                msg.innerHTML = "The computer has 5 wins!<br/> The game is over. <br/> Computer Wins! <br/> Click any button below to play again."
                computerWins = 0;
                playerWins = 0;
                ps.innerHTML = 0;
                cs.innerHTML = 0;
            
            }
        } else {
            msg.innerHTML = "The player threw a rock. <br/> The computer threw a "+computerPick+ "!<br/> It's a tie! <br/>Try again."
        }
    });
    paperBtn.addEventListener('click', () => {
        console.log("clicked Paper");
        let computerPick = computerPlay();
        let gameResult = rpsRound("paper", computerPick);
        if(gameResult === 'playerWins'){
            playerWins++;
            ps.innerHTML = playerWins;
            if(playerWins < 5){
                msg.innerHTML = "The player threw paper. <br/> The computer threw a "+computerPick+ "! <br/> Player Wins!"
            } else {
                msg.innerHTML = "The player has 5 wins!<br/> The game is over. <br/> Player Wins! <br/> Click any button below to play again."
                computerWins = 0;
                playerWins = 0;
                ps.innerHTML = 0;
                cs.innerHTML = 0;
            }
        
            
        } else if(gameResult === 'cpuWins'){
            computerWins++;
            cs.innerHTML = computerWins;
            if(computerWins < 5){
                msg.innerHTML = "The player threw paper. <br/> The computer threw a "+computerPick+ "! <br/> Computer Wins!"
            }else{
                msg.innerHTML = "The computer has 5 wins!<br/> The game is over. <br/> Computer Wins! <br/> Click any button below to play again."
                computerWins = 0;
                playerWins = 0;
                ps.innerHTML = 0;
                cs.innerHTML = 0;
            
            }
        } else{
            msg.innerHTML = "The player threw paper. <br/> The computer threw a "+computerPick+ "!<br/> It's a tie! <br/>  Try again."
        }
    });
    scissorsBtn.addEventListener('click', () => {
        console.log("clicked Scissors");
        let computerPick = computerPlay();
        let gameResult = rpsRound("scissors", computerPick);
        if(gameResult === 'playerWins'){
            playerWins++;
            ps.innerHTML = playerWins;
            if(playerWins < 5){
                msg.innerHTML = "The player threw scissors. <br/>The computer threw a "+computerPick+ "! <br/> Player Wins!"
            } else {
                msg.innerHTML = "The player has 5 wins!<br/> The game is over. <br/> Player Wins! <br/> Click any button below to play again."
                computerWins = 0;
                playerWins = 0;
                ps.innerHTML = 0;
                cs.innerHTML = 0;
            
            }
            
        } else if(gameResult === 'cpuWins'){
            computerWins++;
            cs.innerHTML = computerWins;
            if(computerWins < 5){
                msg.innerHTML = "The player threw scissors. <br/> The computer threw a "+computerPick+ "! <br/> Computer Wins!"
            }else{
                msg.innerHTML = "The computer has 5 wins!<br/> The game is over. <br/> Computer Wins! <br/> Click any button below to play again."
                computerWins = 0;
                playerWins = 0;
                ps.innerHTML = 0;
                cs.innerHTML = 0;
            }
        
        } else{
            msg.innerHTML = "The player threw scissors.  <br/> The computer threw a "+computerPick+ "!<br/> It's a tie! <br/>Try again."
        }
    })


}

game();