// task 1
let admin = "John";
let name = "admin";
admin = name;

// alert(admin);

// task 2
const ourPlanetName = "Earth";
const currentUserName = "John";

// task 3
const birthday = '18.04.1982'; // birthday can be named uppercase as date don't change

// const age = someCode(birthday); // age can change with time so it can be named lowercase as age is not constant

let nameF = "mahmi";
/*
alert(`hello ${1}` ); // alerts, hello 1
alert(`hello ${"nameF"}` ); // alerts, hello nameF
alert(`hello ${nameF}` ); // alerts, hello mahmi
*/ 

/*
let nameInput = prompt("Whats your name?", "");
alert(`Hello, ${nameInput}!`);


let a = 1, b = 1;

let c = ++a; // answer = 2;
let d = b++; // answer = 1;


let a = 2;

let x = 1 + (a *= 2); // answer, x = 5;

*/ 
"" + 1 + 0 // "10", because the "" in the front converts 1 to string, so "1" + 0 = "10"
"" - 1 + 0 // -1, because the "" in the front converts empty string to 0, so 0 - 1 + 0 = -1
true + false // 1, because true is converted to 1 and false is converted to 0, so 1 + 0 = 1
6 / "3" // 2, because "3" is converted to number 3.
"2" * "3" //6
4 + 5 + "px" // "9px", because 4 + 5 = 9, and then 9 + "px" = "9px"
"$" + 4 + 5 // "$45", because "$" + 4 = "$4", and then "$4" + 5 = "$45"
"4" - 2 // 2
"4px" - 2 //NaN, because "4px" cannot be converted to a number.
"  -9  " + 5 // "  -9  5", because the + operator concatenates strings.
"  -9  " - 5 // -14, because the - operator converts the string to a number, so -9 - 5 = -14
null + 1 // 1, because null is converted to 0, so 0 + 1 = 1
undefined + 1 // NaN, because undefined cannot be converted to a number.
" \t \n" - 2 // -2, because the - operator converts the string to a number, so 0 - 2 = -2


/*
let a = prompt("First number?", 1);
let b = prompt("Second number?", 2);

alert(a + b); // 12 
*/ 



/*
// solve 1
let a = +prompt("First number?", 1);
let b = +prompt("Second number?", 2);

alert(a + b); // 12
*/ 

// solve 2
let a = prompt("First number?", 1);
let b = prompt("Second number?", 2);    

alert(+a + +b); // 3


/*
dvjdfghdfigh
*/ 
