
function getComputerChoice() {
 let cpuChoice = Math.random()
 if (cpuChoice >= .66) {
    cpuChoice = "Rock"
 }
 else if ((cpuChoice > .33) && (cpuChoice < .66)) {
    cpuChoice = "Paper"
 }
 else {
    cpuChoice = "Scissors"
 }
 return cpuChoice

}

function getHumanChoice() {
    let humanChoice = prompt('enter choice: rock paper or scissors?')
    return humanChoice
    console.log(humanChoice)
}


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