/*=========================================
 AKAONI V2
 script.js
=========================================*/

// Navigation Hintergrund beim Scrollen

const header = document.querySelector("header");

window.addEventListener("scroll", () => {

    if (window.scrollY > 60) {
        header.style.background = "rgba(5,5,5,.95)";
        header.style.boxShadow = "0 5px 20px rgba(0,0,0,.35)";
    } else {
        header.style.background = "rgba(5,5,5,.75)";
        header.style.boxShadow = "none";
    }

});

// Fade-In Animation

const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.classList.add("show");

        }

    });

}, {

    threshold: .15

});

document.querySelectorAll(
".car-section,.card,.gallery-item,.timeline-item,.cta"
).forEach(el => {

    el.classList.add("hidden");

    observer.observe(el);

});

// Smooth Hover Glow

document.querySelectorAll(
".btn-primary,.btn-secondary,.spec,.card"
).forEach(item => {

    item.addEventListener("mouseenter", () => {

        item.style.transition = ".3s";

    });

});

// Galerie Zoom

const galleryImages = document.querySelectorAll(".gallery-item img");

galleryImages.forEach(img => {

    img.addEventListener("click", () => {

        const overlay = document.createElement("div");

        overlay.className = "lightbox";

        overlay.innerHTML = `
            <img src="${img.src}" alt="">
        `;

        document.body.appendChild(overlay);

        overlay.addEventListener("click", () => {

            overlay.remove();

        });

    });

});

// Aktiver Menüpunkt

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const top = section.offsetTop - 120;

        const height = section.offsetHeight;

        if (window.scrollY >= top) {

            current = section.getAttribute("id");

        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {

            link.classList.add("active");

        }

    });

});

// Hero Parallax

const heroBg = document.querySelector(".hero-bg");

window.addEventListener("scroll", () => {

    const offset = window.scrollY * 0.35;

    heroBg.style.transform = `translateY(${offset}px)`;

});

// Ladeanimation

window.addEventListener("load", () => {

    document.body.classList.add("loaded");

});

// Scroll-to-Top Button

const topBtn = document.createElement("button");

topBtn.innerHTML = "▲";

topBtn.className = "top-btn";

document.body.appendChild(topBtn);

window.addEventListener("scroll", () => {

    if (window.scrollY > 500) {

        topBtn.classList.add("visible");

    } else {

        topBtn.classList.remove("visible");

    }

});

topBtn.addEventListener("click", () => {

    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });

});

// Konsolenmeldung

console.log(
"AKAONI V2 successfully loaded."
);
