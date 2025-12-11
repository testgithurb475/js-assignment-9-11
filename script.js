// Question 1
var city = prompt("Your City") 

if (city == "karachi"){
    console.log("Welcome to city of lights")

}

// Question 2

var gender = prompt("Your Gender")

if (gender == "male"){
    console.log("Good Morsing Sir!")
} else if(gender == "female"){
    console.log("Good Mornig Maam!")
}

// Question 3

var color = prompt("Enter traffic signal color (Red, Yellow, Green):");

if (color === "red") {
    console.log("Must Stop");
} 
else if (color === "yellow") {
    console.log("Ready to move");
} 
else if (color === "green") {
    console.log("Move now");
} 
else {
    console.log("Invalid color");
}


// Question 4

var sub1 = +prompt("Enter marks of Subject 1:");
var sub2 = +prompt("Enter marks of Subject 2:");
var sub3 = +prompt("Enter marks of Subject 3:");
var totalMarks = +prompt("Enter Total Marks:");


var obtainedMarks = sub1 + sub2 + sub3;
var percentage = (obtainedMarks / totalMarks) * 100;


var grade;

if (percentage >= 80) {
    grade = "A-one";
} else if (percentage >= 70) {
    grade = "A";
} else if (percentage >= 60) {
    grade = "B";
} else if (percentage >= 50) {
    grade = "C";
} else {
    grade = "Fail";
}


document.write("<h2>Marks Sheet</h2>");
document.write("Total Marks: " + totalMarks + "<br>");
document.write("Marks Obtained: " + obtainedMarks + "<br>");
document.write("Percentage: " + percentage.toFixed(2) + "%<br>");
document.write("Grade: " + grade);

// Question 5

var num = 6;
var screteNumber = prompt("Guess Secrete Number")

if (num === screteNubmer){
    alert("Bingo! Corect Answer")

} else if (screteNumber + 1 === num){
    alert("Close enough to get the correct answer");

} else {
    alert("Try agian !")
}


// Question 6

let number = +prompt("Enter a number:");

if (number % 2 === 0) {
    alert(number + " is an EVEN number.");
} else {
    alert(number + " is an ODD number.");
}

// Question 7

let temperature = +prompt("Enter the temperature:");

if (temperature > 40) {
    alert("It is too hot outside.");
}
else if (temperature > 30) {
    alert("The Weather today is Normal.");
}
else if (temperature > 20) {
    alert("Today’s Weather is cool.");
}
else if (temperature > 10) {
    alert("OMG! Today’s weather is so Cool.");
}
else {
    alert("It's very cold today!");
}


// Question 8

let num1 = +prompt("Enter first number:");
let num2 = +prompt("Enter second number:");
let operation = prompt("Enter operation (+, -, *, /, %):");

let result;

if (operation === "+") {
    result = num1 + num2;
}
else if (operation === "-") {
    result = num1 - num2;
}
else if (operation === "*") {
    result = num1 * num2;
}
else if (operation === "/") {
    result = num1 / num2;
}
else if (operation === "%") {
    result = num1 % num2;
}
else {
    result = "Invalid operation!";
}

alert("Result: " + result);
 
