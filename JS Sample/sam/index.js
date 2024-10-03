let age = 23;
let Name = "Sangeetha";
let Student = true;


console.log("Hello" + Name);
console.log("You are" + age +"year old");
console.log("You are entrolled " + Student);

document.getElementById("p1").innerHTML = "Hello " + Name;
document.getElementById("p2").innerHTML = "You are " + age +" year old"
document.getElementById("p3").innerHTML = "You are entrolled " + Student;


//ACCEPTING USER INPUT

//Method One

//let username = window.prompt("What's your name?");
//console.log(username);

//Method Two

let username;

document.getElementById("mybutton").onclick = function(){

    username = document.getElementById("myname").value;
    console.log(username);
    document.getElementById("mylabel").innerHTML = username; 
}

// var a=20;
// var b=10;

// document.write(a+b);


// var a=20;
// var b=10;

// document.write(a-b);

// var a=20;
// var b=10;

// document.write(a*b);

// 

// var a=20;
// var b=3;

// document.write(a%b);


// var a=20;
// a++

// document.write(a);


// var a=20;
// a--;

// document.write(a);


//  Assign Operator
// var x=10;
// document.write(x);


// var x=10;
// var result = x += 4;
// document.write(x);

// var x=10;
// var result = x -= 4;
// document.write(x);

// var x=10;
// var result = x = 4;
// document.write(x);

// var x=10;
// var result = x /= 4;
// document.write(x);

// var x=10;
// var result = x %= 4;
// document.write(x);

// var a=10;
// var b=20;
// document.write(a==b);

// var a="10";
// var b=10;
// document.write(a===b)

// var a=10;
// var b=20;
// document.write(a!=b)

// var a=10;
// var b=20;
// document.write(a<b)

// var a=10;
// var b=20;
// document.write(a>b)

// var a=20;
// var b=20;
// document.write(a<=b)

// var a=10;
// var b=20;
// document.write(a>=b)



////LOGICAL OPERATORES

// var a=10;
// var b = 20;
// document.write(a==10 && b==20);


// var a=10;
// var b = 20;
// document.write(a==10 || b==20);

// var a=50;
// var b = 20;
// document.write(!(b==200));
// document.write(!(b==20));


/////CONDITIONAL STATEMENT
// var a=10;
// if (a>0){
//     document.write("Positive Number");
// }
// if (a<0){
//     document.write("Positive Number");
// }


// var a=-10;
// if (a>0){
//     document.write("Positive Number");
// }
// else {
//     document.write("Negative Number");
// }
    

// var a=0;
// if (a>0){
//     document.write("Positive Number");
// }else if (a<0) {
//     document.write("Negative Number");
// }else{
//     document.write("zero");
// }


////////// SWITHCH STATEMENT

// var a = "1";

// switch (a) {
//     case "A" :
//         document.write("Apple");
//         break;
    
//     case "B" :
//         document.write("Bat");
//         break;

//     case "C" :
//         document.write("C");
//         break;

//     default :
//             document.write("Invalid Character");
//             break;
//            }




////LOOPS

//For Loop
// for (var i=10; i<=15; i++){
//     document.write(i + "<br>");
// }


//While Loop
   
// var i=1;
// while (i<=5){
//     document.write(i+"<br>")
//     i++;
// } 

//Do While Loop
// var i=1;
// do{
//     document.write("Hello" + "<br>");
//     i++;
// }while (i<=5)


/////FUNCTIONS

//User Defined Functions

function greetings(){
    document.write("Good Morning" + "<br>");
}

greetings();


/////ARRAYS

//Accessing by indext number
var animal= ["Lion" , "Tiger" , "Cat" , "Dog" , "Fox"];
document.write(animal[1] + "<br>");
document.write(animal + "<br>");

//Replace Element
animal[0] = "Elephent";
document.write(animal + "<br>"  + "<br>");

//Finding length Array Element
var x = animal.length;
document.write(x + "<br>"  + "<br>");   

//For Loop
for (var i=0; i<x; i++){
    document.write(
        animal[i] +"<br>"
    )
}

//push
animal.push("fox" , "Elephent" , "Cheetah");
document.write(animal +"<br>" +"<br>");

//pop
animal.pop();
document.write(animal +"<br>" +"<br>");

//slice

// var animal_= ["Lion" , "Tiger" , "Cat" , "Dog" , "Fox"];
// animal_.splice(2,1 );
// document.write(animal_ +"<br>" +"<br>");

//Sort

animal.sort();
document.write(animal + "<br>" + "<br>");

var num = [12, 1, 23,45,63,18,39,0,13]
num.sort();
document.write(num + "<br>" + "<br>")
document.write(num[1] + num[2]  + "<br>" + "<br>");



/////STRINGS

//charAt
var text = "Java Script";
var text1 = "Learn ";
document.write(text.charAt(7)  + "<br>" + "<br>");

//concat
document.write(text1.concat(text)  + "<br>" + "<br>");

//toLowerCase

var text2= "HELLO";
document.write(text2.toLocaleLowerCase()  + "<br>" + "<br>");

//toUpperCase
var text3= "Hello";
document.write(text3.toUpperCase() + "<br>" + "<br>");

//Slice
var text4 = "Learn Java Script";
document.write(text4.slice(6, 10) + "<br>" + "<br>")




/////////MATH OBJECTS

//Sqrt
var a=9;
document.write(Math.sqrt(a)  + "<br>" + "<br>");

//abs
var b = -15;
document.write(Math.abs(b)  + "<br>" + "<br>")

//min
document.write(Math.min(10,2,37,45,6)  + "<br>" + "<br>");

//max
document.write(Math.max(10,2,37,45,6)  + "<br>" + "<br>");

//pow
document.write(Math.pow(2,3) + "<br>" + "<br>")

//floor
var c=6.8;
document.write(Math.floor(c) + "<br>" + "<br>");

//ceil
document.write(Math.ceil(c)  + "<br>" + "<br>");

//round
var d=6.3;
document.write(Math.round(c)  + "<br>" );
document.write(Math.round(d) + "<br>" + "<br>");

//random
var e=Math.random();
var rounded = Math.round (e*10);
document.write(rounded);







////DOM

///Get Element By Id

//  var i= document.getElementById("Head1");
// console.log(i);


//Inner HTML
var i= document.getElementById("Head1");
i.innerHTML = "Learn JavaScript";
i.style.color = "blue";


//Get Element By Class Name
var z = document.getElementsByClassName ("id1");
console.log(z);
z[1].innerHTML="Good Morning";
z[2].style.color= "red";


//Get Element By Tag Name
var f = document.getElementsByTagName("h1");
console.log(f);
f[1].innerHTML = "Changed Heading";
f[1].style.color = "green";


//Get Elemenet By Name
var g = document.getElementsByName("text")[0];
// console.log(g);
var h = document.getElementById("head3");

function message(){
    h.innerHTML = "Hello " + g.value +"<br>" + "<br>";
}



//Get Element By CSS Selectors

//Tag Name
var i = document.querySelectorAll("h1");
console.log(i);

i[4].innerHTML = "Learn JAVA";
i[4].style.color = "Red";

//Class name
var j = document.querySelectorAll(".hclass");
console.log(j);
j[2].innerHTML = "Laern Python";
j[2].style.color = "Green";


//Id name
var k = document.querySelector("#h1id");
console.log (k);
k[0].innerHTML = "Learn HTML";
k[0].style.color = "blue";

















