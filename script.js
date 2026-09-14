// =========================
// MOBILE MENU
// =========================

const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");

menuBtn.addEventListener("click", () => {
    navLinks.classList.toggle("active");

    if (navLinks.classList.contains("active")) {
        menuBtn.innerHTML = "✕";
    } else {
        menuBtn.innerHTML = "☰";
    }
});


// Close menu after clicking a link

document.querySelectorAll(".nav-links a").forEach(link => {

    link.addEventListener("click", () => {

        navLinks.classList.remove("active");
        menuBtn.innerHTML = "☰";

    });

});


// =========================
// CONTACT FORM
// =========================

const contactForm = document.getElementById("contactForm");

contactForm.addEventListener("submit", function (event) {

    event.preventDefault();

    alert("Thank you! Your message has been received.");

    contactForm.reset();

});