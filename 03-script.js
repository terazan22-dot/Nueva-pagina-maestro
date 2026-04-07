document.addEventListener("DOMContentLoaded", function(){

console.log("Página cargada correctamente");

// BOTÓN WHATSAPP
const boton = document.querySelector(".boton");

if (boton) {
  boton.addEventListener("click", function(){
    window.open("https://wa.me/573126398971","_blank");
  });
}

// MENÚ HAMBURGUESA
const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("nav-links");

if (hamburger && navLinks) {
  hamburger.addEventListener("click", function(){
    navLinks.classList.toggle("active");
  });
}

});
