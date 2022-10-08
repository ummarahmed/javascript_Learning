// Alert to confirm the functionality of page

// alert("Lecture 29 is here.");



/*
Q1,2,3: Write a program which take input from user and you tell either he can drive or not.
*/
/*
const canDriveOrNot = () => {
  let age = Number.parseInt(prompt("Your age: "));
  if (age <= 0) {
    console.error("Age can not be negative.")
  } else {
    alert(age > 18 ? "You can drive." : "You are under 18. Don't drive.");
  }

  let again = confirm("Do you want see the prompt again?")
  if (again) {
    canDriveOrNot()
  }
}
canDriveOrNot()
*/


/*
Q: Change the URL to google.com if user enters number greater than 4.
*/
/*
let num = Number.parseInt(prompt("Enter Number: "));
location.href = num > 4 ? "https://www.google.com.pk/" : "https://www.google.com.pk/fsfdfsfsf"
*/

/*Q: change background color according to user demand*/
let color = prompt("What should be background color: ");
document.body.style.background = color;
