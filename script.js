
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


// Psuedocode for computer choice
// 1 write function with Math.random to return number
// 2 use if statements to give choice based off result
// 3 return choice
// 4
// 5
// 6
// 7
// 8
// 9