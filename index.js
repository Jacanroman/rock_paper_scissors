console.log("Welcome to Rock, Paper Scissors")
// Obtain a choice from the user
    //Validate the user's choice and tell them if they make a mistake
    // Strip capitalisation/ignore capitalisation of words

// Make a random selection for the computer
    //A random choice of Rock, paper,Scissors

// compare the two choices
//Report on who won



// Make a random choice for the computer

function getComputerChoice() {
    switch(Math.floor(Math.random()*3)) {
      case 0:
        return 'rock';
        break;
      case 1:
        return 'scissors';
        break;
      case 2:
        return 'paper';
        break;
        };
  }

var cpu_random = getComputerChoice()




// Play the game

var compare = function(choice1,choice2){
    
    if(choice1 ===choice2){
        return "It is a tie!";
    }
    if(choice1==="rock"){
        if(choice2==="scissors"){
            return "You Win! rock versus scissors";
        }else{
            return "You lose!!!! rock versus paper Try again.";
        }    
    }
    if (choice1 === "paper") {
        if (choice2 === "rock") {
            // paper wins
            return "You win!";
        } else {
            // scissors wins
            return "You lose! Try again.";
        }
    }
    if (choice1 === "scissors") {
        if (choice2 === "rock") {
            // rock wins
            return "You lose! Try again.";
        } else {
            // scissors wins
            return "You win!";
        }
    }
};



const readLine = require("readline").createInterface({
    input: process.stdin,
    output: process.stdin
});

function handleUserResponse (response){
    response.toLowerCase() // Capitalisation
    // Validate the user's choice
    if (response === 'rock' || response ==='paper' || response==='scissors'){
       
        console.log("User Value: ",response);
        console.log("CPU value: ",cpu_random)
        console.log(compare(response,cpu_random))
    readLine.close();
    }else{
        readLine.question("Please insert a correct value choose either rock, paper or scissors!\n", handleUserResponse )
    }
    
//readLine.close();

}


readLine.question("Please choose either rock, paper or scissors!\n", handleUserResponse )