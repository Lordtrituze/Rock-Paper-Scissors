  
// set the initial stored scores to zero
var userScore = 0;
var compScore = 0;
// available options
let options = ['ROCK', 'PAPER', 'SCISSORS'];
// getting documents and assigning them to variables for easy usage
const rock = document.getElementById('ROCK');
const paper = document.getElementById('PAPER');
const scissors = document.getElementById('SCISSORS');
var message = document.getElementById('result');
const user_score = document.getElementById('userscore');
const comp_score = document.getElementById('compscore');
const user = document.getElementById('user').innerHTML;
const comp = document.getElementById('computer').innerHTML;

// computer's choice/selection
function computer(){
    computer_choice = options[Math.floor(Math.random() * 3)];
    console.log('The Computer chose', computer_choice);
    return computer_choice;
} 

//the actual game function
function play(user_choice){
    var computer_choice = computer();
    //concatinating the user selection with the computer's selection so it can be easily compared to given cases
    var result1 = computer_choice + user_choice;
    var result2 = user_choice + computer_choice;
    //if Draw
    if (user_choice === computer_choice){
        message.innerHTML = user_choice + user.sup() +"  Draws  " + computer_choice + comp.sup();
        console.log("IT IS A DRAW");
    } 
    //the case where thr user wins
    else if ((result2) === "ROCKSCISSORS" || (result2) === "SCISSORSPAPER" || (result2) === "PAPERROCK"){
        message.innerHTML = user_choice + user.sup() +"  Wins  " + computer_choice + comp.sup();
        //change the user's score
        userScore ++;
        user_score.innerHTML = userScore;
        console.log("You Won!");
    } 
    //the case where the computer wins
    else if ((result1) === "ROCKSCISSORS" || (result1) === "SCISSORSPAPER" || (result1) === "PAPERROCK"){
        message.innerHTML = user_choice + user.sup() +"  Losses to  " + computer_choice + comp.sup();
        //change the computer's score
        compScore ++;
        comp_score.innerHTML = compScore;
        console.log("You Lost!");

    }
}

//the main function contains the event listeners which will call the game function with the passed parameters when activated
function main() {
  rock.addEventListener("click", () => play('ROCK'));
  paper.addEventListener("click", () => play('PAPER'));
  scissors.addEventListener("click", () => play('SCISSORS'));
}

main();