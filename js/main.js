/**
 * Script para establecer tema, espera a que cargue el DOM para obtener el botón,
 * Comprueba el tema guardado si no existe usa 'dark'.
 * Aplica el tema inicial al cargar la página según el valor de la clave 'theme'.
 * Cambia el tema entre claro y oscuro.
 * Cambia el icono y guarda la preferencia del tema.
 * Usa localStorage para recordar el tema y aplicarlo al cargar la página.
 * @const themeToggleBtn Botón para cambiar tema
 * @const currentTheme Tema actual
 * @var isLight Booleano si es tema claro
 * @see {@link ../css/base.css} para ver los estilos del tema asociados
 */

// Esperar a que el DOM este completamente cargado para aplicar el tema
document.addEventListener("DOMContentLoaded", () => {
  const themeToggleBtn = document.getElementById("theme-toggle"); // Obtiene la referencia del botón

  // Comprueba si existe y el valor de la clave 'theme'si no, usa 'dark'
  const currentTheme = localStorage.getItem("theme") ?? "dark";

  // Aplicar el estado inicial al cargar la página
  if (currentTheme === "light") {
    document.body.classList.add("light-theme");

    //Si el tema es claro, cambiar icono
    if (themeToggleBtn) themeToggleBtn.textContent = "🌙";
  }

  //   Manejar la iteracción del botón al hacer click
  themeToggleBtn?.addEventListener("click", () => {
    // Si la clase ya esta en el body, se quita al hacer toggle, si no esta, la añade
    document.body.classList.toggle("light-theme");

    // Devuelve verdadero si es tema claro
    const isLight = document.body.classList.contains("light-theme");

    // Evalua el booleano y cambia icono segun tema
    themeToggleBtn.textContent = isLight ? "🌙" : "☀️";

    // Guardar la preferencia del tema actual utilizado para futuras visitas
    localStorage.setItem("theme", isLight ? "light" : "dark");
  });
});
