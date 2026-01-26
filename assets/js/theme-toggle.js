const sections = document.querySelectorAll("section");

const observer = new IntersectionObserver(
  entries => {
    entries.forEach((entry, index) => {
      if (entry.isIntersecting) {
        entry.target.style.transitionDelay = `${index * 0.15}s`;
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.2 }
);

sections.forEach(section => observer.observe(section));

const toggleBtn = document.getElementById("theme-toggle");
const body = document.body;

// Cargar preferencia guardada
if (localStorage.getItem("theme") === "light") {
  body.classList.add("light");
}

// Función para cambiar tema
function toggleTheme() {
  body.classList.toggle("light");
  localStorage.setItem(
    "theme",
    body.classList.contains("light") ? "light" : "dark"
  );
}

// Click con mouse
toggleBtn.addEventListener("click", toggleTheme);

// Navegación con teclado (Enter y Espacio)
toggleBtn.addEventListener("keydown", (e) => {
  if (e.key === "Enter" || e.key === " ") {
    e.preventDefault(); // Evita scroll con Espacio
    toggleTheme();
  }
});