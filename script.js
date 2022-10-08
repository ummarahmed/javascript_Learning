// alert("Hello, Your script is working...")
// let a = prompt("Write a number");
// document.write(a)

let a = prompt("Enter a number: ", "1234") // second argument will be a default value
let write = confirm("Do you want to write on the page?")
if (write) {
  document.write(a);
} else {
  document.write("Please allow me to write on the page.")
}
