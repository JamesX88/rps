function computerPlay(){
    let choice = ["rock", "paper", "scissors"][Math.floor(Math.random()*3)];
    return choice;
}

function rpsRound(playerSelection, computerSelection){
    
}

function game(){
    let playerWins = 0;
    let computerWins = 0;

    const ps = document.querySelector('.playerScore');
    const cs = document.querySelector('.computerScore');
    let rockBtn = document.querySelector('#rock');
    let paperBtn = document.querySelector('#paper');
    let scissorsBtn = document.querySelector('#scissors');
            
            rockBtn.addEventListener('click', () => {
                console.log("clicked Rock")
            });
            paperBtn.addEventListener('click', () => {
                console.log("clicked Paper")
            });
            scissorsBtn.addEventListener('click', () => {
                console.log("clicked Scissors")
            })


}


game();