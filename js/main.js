// ═══════════════════════════════════════
// INIT
// ═══════════════════════════════════════
document.addEventListener("DOMContentLoaded", () => {

  console.log("Sistema inicializado 🚀");

  // ═══════════════════════════════════════
  // MODO OSCURO / CLARO (toggle básico)
  // ═══════════════════════════════════════
  const botonTema = document.createElement("button");
  botonTema.textContent = "🌙 / ☀️";
  botonTema.style.margin = "1rem 0";

  document.querySelector(".contenedor").prepend(botonTema);

  botonTema.addEventListener("click", () => {
    document.body.classList.toggle("light-mode");
  });

  // ═══════════════════════════════════════
  // SALUDO DINÁMICO
  // ═══════════════════════════════════════
  const hora = new Date().getHours();
  let saludo = "Hola";

  if (hora < 12) saludo = "Buenos días";
  else if (hora < 18) saludo = "Buenas tardes";
  else saludo = "Buenas noches";

  const titulo = document.querySelector("h1");
  if (titulo) {
    titulo.textContent = `${saludo}, soy dbarrientos-dev ⌬ħ`;
  }

  // ═══════════════════════════════════════
  // CONFIRMACIÓN DE FORMULARIO
  // ═══════════════════════════════════════
  const form = document.querySelector("form");

  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();

      alert("Formulario enviado (simulación). Buen trabajo 👍");
      form.reset();
    });
  }

  // ═══════════════════════════════════════
  // EFECTO HOVER EN PROYECTOS
  // ═══════════════════════════════════════
  const filas = document.querySelectorAll("tbody tr");

  filas.forEach(fila => {
    fila.addEventListener("mouseenter", () => {
      fila.style.transform = "scale(1.02)";
      fila.style.transition = "0.2s";
    });

    fila.addEventListener("mouseleave", () => {
      fila.style.transform = "scale(1)";
    });
  });

});