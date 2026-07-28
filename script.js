/*=========================================
 AKAONI // Vehicle Profile
=========================================*/

// Bootscreen

window.addEventListener("load", () => {

    const boot = document.getElementById("boot");

    setTimeout(() => {

        boot.classList.add("hide");

    }, 2500);

});

// Fade-In beim Scrollen

const elements = document.querySelectorAll(

".vehicle,.quote,.build,.gallery,.links"

);

const observer = new IntersectionObserver(entries => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.classList.add("show");

        }

    });

}, {

    threshold:0.15

});

elements.forEach(el => {

    el.classList.add("fade");

    observer.observe(el);

});

// Galerie Lightbox

const images = document.querySelectorAll(".gallery-grid img");

images.forEach(image => {

    image.addEventListener("click", () => {

        const lightbox = document.createElement("div");

        lightbox.className = "lightbox";

        lightbox.innerHTML =

        `<img src="${image.src}" alt="">`;

        document.body.appendChild(lightbox);

        lightbox.addEventListener("click", () => {

            lightbox.remove();

        });

    });

});
