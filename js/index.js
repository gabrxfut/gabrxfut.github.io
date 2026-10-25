const botonMenu = document.querySelector(".boton-menu");
const menu = document.querySelector(".menu");

botonMenu.addEventListener("click", () => {
  const menuAbierto = menu.classList.toggle("menu-abierto");
  botonMenu.setAttribute("aria-expanded", menuAbierto);
  const texto = menuAbierto ? "Cerrar menú" : "Abrir menú";
  botonMenu.setAttribute("aria-label", texto);
});

const cierraMenu = document.querySelectorAll(".menu a");
cierraMenu.forEach((cierra) => {
  cierra.addEventListener("click", () => {
    menu.classList.remove("menu-abierto");
    botonMenu.setAttribute("aria-expanded", "false");
    botonMenu.setAttribute("aria-label", "Abrir menú");
  });
});
