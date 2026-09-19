/* =========================================================
   ANRF–NIT ROURKELA PAIR WEBSITE
   Main JavaScript
========================================================= */


/* ================= MOBILE NAVIGATION ================= */

const menuToggle = document.getElementById("menuToggle");
const mainNav = document.getElementById("mainNav");

if (menuToggle && mainNav) {

    menuToggle.addEventListener("click", () => {

        const isOpen = mainNav.classList.toggle("open");

        menuToggle.setAttribute("aria-expanded", String(isOpen));

        menuToggle.innerHTML = isOpen
            ? '<i class="fa-solid fa-xmark"></i>'
            : '<i class="fa-solid fa-bars"></i>';

    });


    // Close mobile menu after clicking a navigation link

    document.querySelectorAll(".main-nav a").forEach(link => {

        link.addEventListener("click", () => {

            mainNav.classList.remove("open");

            menuToggle.setAttribute("aria-expanded", "false");

            menuToggle.innerHTML =
                '<i class="fa-solid fa-bars"></i>';

        });

    });

}


/* ================= ACTIVE NAVIGATION ================= */

const sections = document.querySelectorAll("section[id]");
const navLinks = document.querySelectorAll(".nav-link");

function updateActiveNav() {

    let currentSection = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 140;
        const sectionBottom =
            sectionTop + section.offsetHeight;

        if (
            window.scrollY >= sectionTop &&
            window.scrollY < sectionBottom
        ) {
            currentSection = section.getAttribute("id");
        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        const href = link.getAttribute("href");

        if (href === `#${currentSection}`) {
            link.classList.add("active");
        }

    });

}

window.addEventListener("scroll", updateActiveNav);

window.addEventListener("load", updateActiveNav);


/* ================= SCROLL REVEAL ================= */

const revealElements = document.querySelectorAll(".reveal");

if ("IntersectionObserver" in window) {

    const revealObserver = new IntersectionObserver(

        (entries, observer) => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    entry.target.classList.add("active");

                    observer.unobserve(entry.target);

                }

            });

        },

        {
            threshold: 0.12
        }

    );

    revealElements.forEach(element => {
        revealObserver.observe(element);
    });

} else {

    // Fallback for older browsers

    revealElements.forEach(element => {
        element.classList.add("active");
    });

}


/* ================= BACK TO TOP ================= */

const backToTop = document.getElementById("backToTop");

if (backToTop) {

    window.addEventListener("scroll", () => {

        if (window.scrollY > 500) {
            backToTop.classList.add("visible");
        } else {
            backToTop.classList.remove("visible");
        }

    });

    backToTop.addEventListener("click", () => {

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

    });

}


/* ================= HEADER SHADOW ================= */

const siteHeader = document.querySelector(".site-header");

if (siteHeader) {

    function updateHeaderShadow() {

        if (window.scrollY > 10) {

            siteHeader.style.boxShadow =
                "0 4px 20px rgba(0, 0, 0, 0.08)";

        } else {

            siteHeader.style.boxShadow =
                "0 2px 15px rgba(0, 0, 0, 0.04)";

        }

    }

    window.addEventListener("scroll", updateHeaderShadow);

    window.addEventListener("load", updateHeaderShadow);

}


/* ================= SPOKE LOGO FALLBACK ================= */

/*
   If a logo path is incorrect or an image is missing,
   this prevents a broken-image appearance.
*/

document.querySelectorAll(".spoke-card img, .hub-card img")
    .forEach(image => {

        image.addEventListener("error", () => {

            image.style.display = "none";

            const logoContainer = image.closest(".institution-logo");

            if (logoContainer) {
                logoContainer.classList.add("logo-missing");
            }

        });

    });