/*

// 1
if ("0") {
  alert( 'Hello' );
}
// alert will be shown because "0" is a truthy value whereas 0 is a falsy value.

// 2
let value = prompt("what is the official name of JavaScript?");
(value === "ECMAScript") ? alert("Right!") : alert("You don't know? ECMAScript!");
 
// 3
let value = prompt("Enter a number");

if(value > 0)
  alert(1);
else if(value < 0)
  alert(-1);
else
  alert(0);

// 4
let message =(login == 'Employee') ? 'Hello' :
(login == 'Director') ? 'Greetings' :
(login == '') ? 'No login' : '';

// alert( null || 2 || undefined ); // 2 because it is the first truthy value in the OR operation.

// alert( alert(1) || 2 || alert(3) ); // alert(1) will be executed first and it will return undefined, then 2 is the first truthy value so it will be alerted.



let login = prompt("Who are you?");

if(login === 'Admin') {
  let password = prompt("Enter your password");
  if(password == 'TheMaster') {
    alert("Welcome!");
  }
  else if(password == '' || password == null) {
    alert("Canceled");
  } 
  else {
    alert("Wrong password");
  }
}
else if(login === '' || login === null) {
  alert("Canceled");
}
else {
  alert("I don't know you");
}



*/


let height = prompt("Enter the height:");
let width = prompt("Enter the width:");

// important: use parentheses
let area = (height ?? 100) * (width ?? 50);

alert(area); // 5000
