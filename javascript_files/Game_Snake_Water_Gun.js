console.log("Snake Water Gun - Game");

window.onload = () => {
    document.body.style.background = "green"
}
let things = ["Snake", "Water", "Gun"]
/* we will consider 
1 for snake, 
2 for water 
3 for gun
*/
let userSelection = Number.parseInt(prompt("Choose a number: \n1. Snake\n2. Water\n3. Gun"));
let systemSelection = Number.parseInt((Math.random() * 3) + 1);
console.log(systemSelection);

/** user system
 * 1.1 - no 
 * 1.2 - 1 winner
 * 1.3 - 3 winner
 * 
 * 2.1 - 1 winner
 * 2.2 - no
 * 2.3 - 2 winner
 * 
 * 3.1 - 3 winner
 * 3.2 - 2 winner
 * 3.3 - no 
 */
let result = "Your selection: "+things[userSelection-1]+"\nSystem Selection: "+things[systemSelection-1]+"\n Result: ";
if(userSelection == 1){
    if(systemSelection == 1){
        result += "No winner";
    } else if (systemSelection == 2){
        result += "You are winner";
    } else if (systemSelection == 3){
        result += "You Lose";
    }
} else if(userSelection == 2){
    if(systemSelection == 1){
        result += "You Lose";
    } else if(systemSelection == 2){
        result += "No winner";
    } else if(systemSelection == 3){
        result += "You are winner";
    }
} else if(userSelection == 3){
    if(systemSelection == 1){
        result += "You are winner";
    } else if(systemSelection == 2){
        resul += "You Lose";
    } else if(systemSelection == 3){
        result += "You are winner";
    }
}
alert(result);