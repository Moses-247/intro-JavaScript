// console.log("Good Morning you filth animal");

// // variables
// name = "Mose Asuga"
// console.log(name)
// sentence = "lorem  ipsum c owcnwion weuno   "
// console.log(sentence)

// a = 4
// b = 5
// c = a + b
// console.log(c)

// //operators
// food = 50
// tip = 0.20
// tipAmount = food * tip

// console.log(tipAmount)

// // user input

// // window.alert(`this is an alert`);
// // var minion=prompt("Enter your prompt");

// // document.getElementById("myH1").textContent=`Hello`;
// // document.getElementById("myP").textContent=`I like cartoons`


// let x;
// let y;
// x = 1003;
// console.log(`Your value is ${x}`)


//Accept user input

// let username;
// username= window.prompt("Enter your username");

// console.log(username)


// document.getElementById("MySubmit").onclick = function(){
//     username = document.getElementById("MyText").value;
//     document.getElementById("myP").textContent = `Hello ${username}`
// }


//COnversion

// let age = window.prompt("How Young are You?");
// age= Number(age) 
// age +=1;

// console.log(age, typeof age);

//Constants

const PI = 3.14;
let radius;
let circum

//radius = window.prompt("Enter radius of the circle");
// radius = Number(radius);

// circum = 2 * PI * radius;

// document.getElementById("Submit".onclick) => {
//     radius = document.getElementById('myText').value;
//     radius = Number(radius);
//     circum = 2 * PI * radius;
//     document.getElementById('myH3').textContent = circum + "cm";
// }


// Counter Program

const increasebtn = document.getElementById("increasebtn");
const decreasebtn = document.getElementById("decreasebtn");
const resetbtn = document.getElementById("resetbtn");
const countlbl = document.getElementById("countlbl");
let count = 0;

increasebtn.onclick= function() {
    count++;
    countlbl.textContent = count;
}
decreasebtn.onclick = function(){
    count--;
    countlbl.textContent = count;
}
resetbtn.onclick = function(){
    count = 0;
    countlbl.textContent = count;
}