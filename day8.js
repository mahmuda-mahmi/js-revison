if ("0") {
  alert( 'Hello' );
}
// alert will be shown because "0" is a truthy value whereas 0 is a falsy value.

let value = prompt("what is the official name of JavaScript?");
(value === "ECMAScript") ? alert("Right!") : alert("You don't know? ECMAScript!");