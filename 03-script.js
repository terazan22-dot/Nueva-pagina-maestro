console.log("Página cargada correctamente");

// BOTON WHATSAPP REAL
const boton = document.querySelector(".boton");

boton.addEventListener("click", function(){

    window.open("https://wa.me/573126398971","_blank");

});

// Seleccionamos el botón hamburguesa y el menú
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('nav-links');

// Escuchamos el clic
hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('active'); // muestra/oculta el menú
});
