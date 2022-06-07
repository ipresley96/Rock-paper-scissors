// Global Varables 
const playerSelection = prompt("Play rock, paper or scissors")
const throws = ['paper', 'rock', 'scissors'];
const computerSelection = computerPlay();


// Computer play function //
function computerPlay(){
    let cpu = "Computer played: "
    // generate random computer play
    let play = Math.floor(Math.random() * 3)
    // logic that compares throws array to computer play
    if(play === 0 ) {
        console.log(cpu + throws[0])
        return throws[0]
    } else if (play === 1){
        console.log(cpu + throws[1])
        return  throws[1]
    } else if (play === 2){
        console.log(cpu + throws[2])
        return throws[2]
    }
}

// Function that controls the game rounds
function playRound(playerSelection, computerSelection){
   
    // Round comparison logic, toLowerCase changes the user input to all lower case making this case-insensitve
    // This logic may be able to be refactored .. will update.
    if(playerSelection.toLowerCase() === 'rock' && computerSelection === throws[2]){
        console.log('You win rock beat scissors')
    } else if (playerSelection.toLowerCase() === 'paper' && computerSelection === throws[1]){
        console.log("You win paper beats rock")
    } else if (playerSelection.toLowerCase() === 'scissor' && computerSelection === throws[0]){
        console.log('You win scissors beat paper')
    } else if (playerSelection.toLowerCase() === 'paper' && computerSelection === throws[2]){
        console.log('Computer wins')
    } else if(playerSelection.toLowerCase() === 'scissors' && computerSelection === throws[1]){
        console.log('Computer wins')
    } else if (playerSelection.toLowerCase() === 'rock' && computerSelection === throws[0]){
        console.log('Computer wins')
    } else {
        console.log("Tie")
    }

}

function game(){
    for(let i = 1; i <= 5; i++){
        console.log("Round " + i + " " + playRound(playerSelection, computerSelection))
    }
}

game()

