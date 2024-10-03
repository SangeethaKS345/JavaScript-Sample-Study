///CREATE AND REMOVE ELEMENT (DOM)

var l = document.createElement("h1");

function create(){
    l.innerHTML = "Hello World";
    document.body.appendChild(l);

}

function remove(){
    l.remove();
}
