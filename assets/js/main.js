/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById("nav-menu"),
    navToggle = document.getElementById("nav-toggle"),
    navClose = document.getElementById("nav-close");
/*=============== SHOW MENU ===============*/
// Validate if constant existes
if (navToggle) {
    navToggle.addEventListener("click", () => {
        navMenu.classList.add("show-menu");
    });
}
/*=============== MENU HIDDEN ===============*/
// Validate if constant existes
if (navClose) {
    navClose.addEventListener("click", () => {
        navMenu.classList.remove("show-menu");
    });
}
/*=============== REMOVE MENU MOBILE ===============*/

const navlink = document.querySelectorAll(".nav__link");
const linkAction = () => {
    const navMenu = document.getElementById("nav-menu");
    // When we click on each nav__link, remove the show-menu class and hide the menu
    navMenu.classList.remove("show-menu");
};
navlink.forEach((n) => n.addEventListener("click", linkAction));

/*=============== ADD BLUR TO HEADER ===============*/
const bluerlHeader = () => {
    const header = document.getElementById("header");

    //When the scroll is greater than 50 viewport heigth add the bluer-header class to

    this.scrollY >= 50
        ? header.classList.add("bluer-header")
        : header.classList.remove("bluer-header");
};
window.addEventListener("scroll", bluerlHeader);

/*=============== EMAIL JS ===============*/
const contactForm = document.getElementById("contact-form"),
    contactMessage = document.getElementById("contact-message");
const sendEmail = (e) => {
    e.preventDefault();
    // serviceID - templateID - #form - publicKey
    emailjs
        .sendForm(
            "service_dl3gytq",
            "template_fcyjwht",
            "#contact-form",
            "fSdFVtN2ouoriw5Za"
        )
        .then(
            () => {
                // Show sent message
                contactMessage.textContent = "Message sent successfully ✅";
                // Remove message after five seconds
                setTimeout(() => {
                    contactMessage.textContent = "";
                }, 3000);
                // Clear input fields
                contactForm.reset();
            },
            () => {
                // Show error message
                contactMessage.textContent =
                    "Message not sent (service error) ❌";
            }
        );
};
contactForm.addEventListener("submit", sendEmail);

/*=============== SHOW SCROLL UP ===============*/
const scrollUp = () => {
    const scrollUp = document.getElementById("scroll-up");
    //when the social is heigth than 350 viewport  heigth add the show-scroll class to
    this.scrollY >= 300
        ? scrollUp.classList.add("show-scroll")
        : scrollUp.classList.remove("show-scroll");
};
window.addEventListener("scroll", scrollUp);

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections = document.querySelectorAll("section[id]");
const scrollActive = () => {
    const scrollY = window.pageYOffset;
    sections.forEach((current) => {
        const sectionHeigth = current.offsetHeigth,
            sectionTop = current.offsetTop - 58,
            sectionId = current.getAttribute("id"),
            sectionsClass = document.querySelector(
                ".nav__menu  a[href*=' + sectionId +' ]"
            );
        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeigth) {
            sectionsClass.classList.add("active-link");
        } else {
            sectionsClass.classList.remove("active-link");
        }
    });
};
window.addEventListener("scroll", scrollActive);

/*=============== SCROLL REVEAL ANIMATION ===============*/
const sr = ScrollReveal({
    origin: "top",
    distance: "60px",
    duration: 2500,
    daly: 400,
    reset: true, // Animations repeat
});
sr.reveal(
    `.home__data, .home__social, .contact__container, .footer__container`
);
sr.reveal(`.home__image`, { origem: "right" });

sr.reveal(`.about__data, .skills__data`, { origem: "bottom" });
sr.reveal(`.about__image, .skills__content `, { origem: "right" });

sr.reveal(`.projects__card`, { interval: 100 });

sr.reveal(`.home__image`, { origem: "right" });
sr.reveal(`.home__image`, { origem: "right" });
sr.reveal(`.home__image`, { origem: "right" });
