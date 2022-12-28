 console.log("app.js connected");


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




let mobileMenuBtn = document.getElementById("menuImage");

mobileMenuBtn.addEventListener("click", showMenu);





function showMenu() {
    let mobileMenu = document.getElementById("navbarLinks");
    mobileMenu.classList.toggle("oculto");
    console.log("deja de procastinar!")
  }











