
function getComputerChoice() {
 let cpuChoice = Math.random()
 if (cpuChoice >= .66) {
    cpuChoice = "rock"
 }
 else if ((cpuChoice > .33) && (cpuChoice < .66)) {
    cpuChoice = "paper"
 }
 else {
    cpuChoice = "scissors"
 }
 return cpuChoice;

}



function getHumanChoice() {
    let humanChoice = prompt('enter choice: rock paper or scissors?')

    return humanChoice;
    console.log(input)
}



function playGame () {
    let humanScore = 0;
    let cpuScore = 0;
    function playRound (humanChoice, cpuChoice) {
        humanChoice = humanChoice.toLowerCase();

        if (( humanChoice === 'rock' && cpuChoice === 'paper')) {
            console.log("Winner is computer")
            cpuScore++; 
        } else if (( humanChoice === 'rock' && cpuChoice === 'scissors')) {
            console.log("Winner is human!")
            humanScore++;
        } else if (( humanChoice === 'rock' && cpuChoice === 'rock')) {
            console.log("Draw! Shoot again!")
        } else if (( humanChoice === 'paper' && cpuChoice ==='rock')) {
            console.log("Winner is Human!")
            humanScore++;
        } else if (( humanChoice === 'paper' && cpuChoice === 'scissors')) {
            console.log("Winner is computer")
            cpuScore++;
        } else if (( humanChoice === 'paper' && cpuChoice === "paper")) {
            console.log("Draw! Shoot again!")
        } else if (( humanChoice === 'scissors' && cpuChoice === 'rock')) {
            console.log("Winner is computer")
            cpuScore++;
        } else if (( humanChoice === 'scissors' && cpuChoice === 'paper')) {
            console.log("Winner is human!")
            humanScore++;
        } else if (( humanChoice === 'scissors' && cpuChoice === 'scissors'))
            console.log("Draw! Shoot again!")
        }
        
        let humanSelection = getHumanChoice();
        let computerSelection = getComputerChoice();
        
        playRound(humanSelection, computerSelection);
    console.log(humanScore)
    console.log(cpuScore)
    
//     for (let round = 0; round < 5; round++) {
//        let cpuChoice = getComputerChoice();
//         let humanChoice = getHumanChoice();
//         round = playRound(humanSelection, computerSelection);

// }

// if (humanScore > cpuScore) {
//     console.log("Human wins the game");
// } else if (cpuScore > humanScore)
//     console.log("Computer wins the game");


playRound(humanSelection, computerSelection);

humanSelection = getHumanChoice();
computerSelection = getComputerChoice();
playRound(humanSelection, computerSelection);

humanSelection = getHumanChoice();
computerSelection = getComputerChoice();
playRound(humanSelection, computerSelection);

humanSelection = getHumanChoice();
computerSelection = getComputerChoice();
playRound(humanSelection, computerSelection);

humanSelection = getHumanChoice();
computerSelection = getComputerChoice();
playRound(humanSelection, computerSelection);

if (humanScore > cpuScore){
    console.log(`You win!\nYour score: ${humanScore}\nComputer score: ${cpuScore}`)
} else if(humanScore < cpuScore){
    console.log(`You lose!\nYour score: ${humanScore}\nComputer score: ${cpuScore}`)
} else{
    console.log(`You tied!\nYour score: ${humanScore}\nComputer score: ${cpuScore}`);
}
}


playGame();


// psuedocode for entiregame
// 1 create functin playGame that calls playRound 
// 2 have function run 5 times keep track of score and declare winner
// 3 move playround function and score cariables so theyre declared in the playGame function
// 4 
// 5
// 6
// 7

// Psuedocode for computer choice 
// 1 write function with Math.random to return number
// 2 use if statements to give choice based off result
// 3 return choice
// 4

// // Psuedo code for human choice
// 1 create function for choice
// 2 function logic provide prompt for user asking for choices
// 3 return user choice
// 4

// Psuedocode for Declare the players score variables
// 1 declare variables for human and cpu score in global scope
// 2 initialize the variables with value of 0
// 3
// 4

// Psuedocode for playRound function
// 1 create function for playRound
// 2 input variables containing the return results of the choice functions as parameters of playround function
// 3 make humanChoice paramter case insensitive
// 4 write logic code to compare the choices using if statements to decide a winner and log a message declaring the winner
// 5 increment the score variable based off the winner


