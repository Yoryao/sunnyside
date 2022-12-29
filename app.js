 console.log("app.js connected");


let contactBtn = document.getElementById("contactButton");

contactBtn.addEventListener("mouseenter", verde);
contactBtn.addEventListener("mouseleave", transparente);

function verde (){
    contactBtn.style.backgroundColor = "hsl(51, 100%, 49%)";
    contactBtn.style.color = "hsl(212, 27%, 19%)";
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











