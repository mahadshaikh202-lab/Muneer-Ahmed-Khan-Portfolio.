// =============================
// Smooth Scroll (Optional)
// =============================

document.querySelectorAll("a[href^='#']").forEach(anchor => {
    anchor.addEventListener("click", function (e) {
        if (this.getAttribute("href") !== "#") return;

        e.preventDefault();
        const target = document.querySelector(this.getAttribute("href"));
        if (target) {
            target.scrollIntoView({ behavior: "smooth" });
        }
    });
});

// =============================
// Simple Contact Form Alert
// =============================

const form = document.querySelector("form");

if (form) {
    form.addEventListener("submit", function (e) {
        e.preventDefault();
        alert("Your message has been received! (Front-end only)");
        form.reset();
    });
}

// =============================
// Navbar Highlight Logic (Optional)
// =============================

const currentPage = window.location.pathname.split("/").pop();
const navLinks = document.querySelectorAll(".nav-links a");

navLinks.forEach(link => {
    if (link.getAttribute("href") === currentPage) {
        link.style.color = "#7dc7ff";
        link.style.fontWeight = "600";
    }
});