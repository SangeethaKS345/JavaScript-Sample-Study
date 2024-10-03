var heading = document.getElementById("head");
var btn = document.getElementById("btn");

heading.addEventListener("click",ChangeColor);


function ChangeColor(){
    heading.style.color = "red";
}