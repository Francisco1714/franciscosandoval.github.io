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

// cargar preferencia guardada
if (localStorage.getItem("theme") === "light") {
        body.classList.add("light");
        toggleBtn.textContent = "☀️ Modo claro";
    }

    toggleBtn.addEventListener("click", () => {
        body.classList.toggle("light");

        const isLight = body.classList.contains("light");
        toggleBtn.textContent = isLight ? "☀️ Modo claro" : "🌙 Modo oscuro";
        localStorage.setItem("theme", isLight ? "light" : "dark");
});