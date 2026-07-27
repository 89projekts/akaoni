/* ==========================================================
   AKAONI
   89 Projekts
   SCRIPT.JS
========================================================== */

/* -------------------------
   Boot Screen
------------------------- */

window.addEventListener("load", function () {

    setTimeout(function () {

        const boot = document.getElementById("boot");

        if (boot) {

            boot.style.display = "none";

        }

    }, 3000);

});


/* -------------------------
   Popup öffnen
------------------------- */

function openPopup(id) {

    const popup = document.getElementById(id);

    if (popup) {

        popup.style.display = "flex";

        document.body.style.overflow = "hidden";

    }

}


/* -------------------------
   Popup schliessen
------------------------- */

function closePopup(id) {

    const popup = document.getElementById(id);

    if (popup) {

        popup.style.display = "none";

        document.body.style.overflow = "auto";

    }

}


/* -------------------------
   Klick ausserhalb schliesst Popup
------------------------- */

window.addEventListener("click", function (event) {

    const popups = document.querySelectorAll(".popup");

    popups.forEach(function (popup) {

        if (event.target === popup) {

            popup.style.display = "none";

            document.body.style.overflow = "auto";

        }

    });

});


/* -------------------------
   ESC schliesst Popup
------------------------- */

document.addEventListener("keydown", function (event) {

    if (event.key === "Escape") {

        const popups = document.querySelectorAll(".popup");

        popups.forEach(function (popup) {

            popup.style.display = "none";

        });

        document.body.style.overflow = "auto";

    }

});


/* -------------------------
   Button Hover Glow
------------------------- */

const buttons = document.querySelectorAll("nav button");

buttons.forEach(function (button) {

    button.addEventListener("mouseenter", function () {

        button.style.boxShadow = "0 0 25px red";

    });

    button.addEventListener("mouseleave", function () {

        button.style.boxShadow = "none";

    });

});


/* -------------------------
   AKAONI Console Message
------------------------- */

console.log("");

console.log("================================");

console.log(" AKAONI PROJECT");

console.log(" UNIT 89");

console.log(" Toyota GR Yaris Gen2");

console.log(" SYSTEM ONLINE");

console.log("================================");

console.log("");
