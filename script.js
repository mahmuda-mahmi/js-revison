/*
console.log("Hello, World!");

let day;
let date = new Date().getDay();
switch(date) {
  case 0:
    day = "Sunday";
    break;
  case 1:
    day = "Monday";
    break;
  case 2:
     day = "Tuesday";
    break;
  case 3:
    day = "Wednesday";
    break;
  case 4:
    day = "Thursday";
    break;
  case 5:
    day = "Friday";
    break;
  case 6:
    day = "Saturday";
}

console.log("Today is " + day);

let text;
let date2 = new Date().getDay();
switch (date2) {
  case 6:
    text = "Today is Saturday";
    break;
  case 0:
    text = "Today is Sunday";
    break;
  default:
    text = "Looking forward to the Weekend";
}

console.log(text);

let text2 = "";
let i = 0;
while (i < 10) {
  text2 += "The number is " + i + "\n";
  i++;
}console.log(text2);


let text3 = "";
do {
  text3 += "The number is " + i + "\n";
  i++;
}
while (i < 10);
console.log(text3);


const cars = ["BMW", "Volvo", "Saab", "Ford"];

let i = 0;
let text4 = "";
for (;cars[i];) {
  text4 += cars[i] + "<br>";
  i++;
}
document.getElementById("demo").innerHTML = text4;


let text = " ";

loop1: for(let j = 1; j < 5; j++) {
    loop2: for (let i = 1; i < 5; i++){
        if(i=== 3) { break loop1;}
        text += i + "<br>";
    }
}
console.log(text);

let text = " ";

loop1: for (let j = 1; j < 5; j++) {
    loop2: for(let i = 1; i < 5; i++) {
        if(i=== 3) { continue loop2;}
        text += i + "<br>";
    }
}

document.getElementById("demo").innerHTML = text;


let x, y, z;

function  sum(x, y) {
    z = x + y;
    return z;
}

console.log(sum(4, 6));


let text = "Please locate where 'locate' occurs!";
let index = text.lastIndexOf("locate");
document.getElementById("demo").innerHTML = index;

let text = "I love cats. Cats are very easy to love. Cats are very popular."
const iterator = text.matchAll(/Cats/gi);

document.getElementById("demo").innerHTML = Array.from(iterator);

*/

function isPangram(string){
  //...
  string = string.toLowerCase();
  let alphabet = "abcdefghijklmnopqrstuvwxyz";
  for (let letter of alphabet) {
    if (!string.includes(letter)){
      return false;
    }
  }
  return true;
}

console.log(isPangram("The quick brown fox jumps over the lazy dog"));

