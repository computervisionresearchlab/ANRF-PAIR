/* =========================================================
   MOBILE NAVIGATION
   ========================================================= */

const menuToggle = document.querySelector(".menu-toggle");
const nav = document.querySelector(".nav");


menuToggle?.addEventListener("click", () => {
    nav?.classList.toggle("open");
});


/* Close mobile menu when a navigation link is clicked */

document.querySelectorAll(".nav a").forEach((link) => {

    link.addEventListener("click", () => {

        nav?.classList.remove("open");

    });

});


/* =========================================================
   EVENT COUNTDOWN
   Event Date:
   15 October 2026
   09:00 AM IST
   ========================================================= */

const eventDate = new Date(
    "2026-10-15T09:00:00+05:30"
).getTime();


function countdown() {

    const now = Date.now();

    const distance = eventDate - now;


    /* -----------------------------------------------------
       If the event has started
       ----------------------------------------------------- */

    if (distance <= 0) {

        const countdownElements = {
            days: document.getElementById("days"),
            hours: document.getElementById("hours"),
            minutes: document.getElementById("minutes"),
            seconds: document.getElementById("seconds")
        };


        Object.values(countdownElements).forEach((element) => {

            if (element) {
                element.textContent = "00";
            }

        });

        return;
    }


    /* -----------------------------------------------------
       Calculate remaining time
       ----------------------------------------------------- */

    const days = Math.floor(
        distance / (1000 * 60 * 60 * 24)
    );

    const hours = Math.floor(
        (distance / (1000 * 60 * 60)) % 24
    );

    const minutes = Math.floor(
        (distance / (1000 * 60)) % 60
    );

    const seconds = Math.floor(
        (distance / 1000) % 60
    );


    /* -----------------------------------------------------
       Update countdown elements
       ----------------------------------------------------- */

    const values = {
        days,
        hours,
        minutes,
        seconds
    };


    Object.entries(values).forEach(([key, value]) => {

        const element = document.getElementById(key);

        if (element) {

            element.textContent = String(value).padStart(
                2,
                "0"
            );

        }

    });

}


/* Initial countdown */

countdown();


/* Update countdown every second */

setInterval(countdown, 1000);


/* =========================================================
   PROGRAMME DAY TABS
   ========================================================= */

const programmeTabs = document.querySelectorAll(
    ".programme-tab"
);

const programmeDays = document.querySelectorAll(
    ".programme-day"
);


programmeTabs.forEach((tab) => {

    tab.addEventListener("click", () => {

        /* -------------------------------------------------
           Remove active state from all tabs
           ------------------------------------------------- */

        programmeTabs.forEach((item) => {

            item.classList.remove("active");

        });


        /* -------------------------------------------------
           Hide all programme days
           ------------------------------------------------- */

        programmeDays.forEach((day) => {

            day.classList.remove("active");

        });


        /* -------------------------------------------------
           Activate clicked tab
           ------------------------------------------------- */

        tab.classList.add("active");


        /* -------------------------------------------------
           Get corresponding programme day
           ------------------------------------------------- */

        const targetDay = document.getElementById(
            tab.dataset.day
        );


        /* -------------------------------------------------
           Display corresponding day
           ------------------------------------------------- */

        if (targetDay) {

            targetDay.classList.add("active");

        }

    });

});


/* =========================================================
   PROGRAMME TAB ACCESSIBILITY
   ========================================================= */

programmeTabs.forEach((tab) => {

    tab.addEventListener("keydown", (event) => {

        /*
         * Allow keyboard users to activate the tab
         * using Enter or Space.
         */

        if (
            event.key === "Enter" ||
            event.key === " "
        ) {

            event.preventDefault();

            tab.click();

        }

    });

});


/* =========================================================
   CLOSE MOBILE MENU WHEN CLICKING OUTSIDE
   ========================================================= */

document.addEventListener("click", (event) => {

    if (!nav || !menuToggle) {
        return;
    }


    const clickedInsideNav =
        nav.contains(event.target);

    const clickedMenuButton =
        menuToggle.contains(event.target);


    if (
        nav.classList.contains("open") &&
        !clickedInsideNav &&
        !clickedMenuButton
    ) {

        nav.classList.remove("open");

    }

});


/* =========================================================
   ESCAPE KEY — CLOSE MOBILE MENU
   ========================================================= */

document.addEventListener("keydown", (event) => {

    if (event.key === "Escape") {

        nav?.classList.remove("open");

    }

});
/* =========================================================
   STICKY HEADER ON SCROLL
   ========================================================= */

const header = document.querySelector(".header");

window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
        header?.classList.add("scrolled");
    } else {
        header?.classList.remove("scrolled");
    }
});

/* =========================================================
   MAP LOCATIONS TOGGLE
   ========================================================= */

const mapIframe = document.getElementById('venue-map-iframe');
const mapBtns = document.querySelectorAll('.map-btn');

if (mapIframe && mapBtns) {
    mapBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            mapBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            
            const query = encodeURIComponent(btn.getAttribute('data-q'));
            mapIframe.src = `https://www.google.com/maps?q=${query}&output=embed`;
        });
    });
}
