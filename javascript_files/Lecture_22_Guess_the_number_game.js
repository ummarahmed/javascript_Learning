console.log("Lecture - 22. Exercise");

/**
 * CHALENGE QUESTION
 * Generate a random number and take the input from user to guess it. number should be between 1-100. mprepver tell the user if his number is greater or smaller than the actual number. once the guess becomes true, end the game show result (100 - number of chances in which number is guessed.
 */

let random_number =  Math.floor((Math.random() * 100) + 1);
// console.log("Random Number is: "+random_number);
let chances = 0;
let user_num = 0;
do{
    user_num = Number.parseInt(prompt("Guess number: "));
    if(user_num != random_number){
        console.log(user_num < random_number ? "Actual number is greater than "+user_num : "Actual number is less than "+user_num);
        chances++;
    }
}while(user_num != random_number)
console.log("Congrats! You win.");
console.log("You Score: "+(100-chances));






