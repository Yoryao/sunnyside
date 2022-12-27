// console.log("app.js connected");


let contactBtn = document.getElementById("contactButton");

contactBtn.addEventListener("mouseenter", verde);
contactBtn.addEventListener("mouseleave", transparente);

function verde (){
    contactBtn.style.backgroundColor = "green";
    contactBtn.style.color = "white";
    contactBtn.style.fontWeight= "bold";

    
}
function transparente(){
    contactBtn.style.backgroundColor = "transparent";
    contactBtn.style.color = "initial";
    contactBtn.style.fontWeight= "initial";
}























// let mainTitle = document.getElementById("mainTitle");



// mainTitle.addEventListener("mouseover", rojo);
// mainTitle.addEventListener("mouseout", verde);




// function verde() {
//   mainTitle.style.color = "green";
// }
// function rojo() {
//   mainTitle.style.color = "red";
// }
