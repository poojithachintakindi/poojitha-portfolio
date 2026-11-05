
document.addEventListener("DOMContentLoaded", function () {

    // 1. Common Page Animation
    const animatedPages = document.querySelectorAll(
        ".profile-page, .about-page, .skills-page, .projects-page, .certifications-page, .education-page, .experience-page, .achievements-page, .contact-page"
    );

    animatedPages.forEach(function (page) {
        page.style.opacity = "0";
        page.style.transform = "translateY(20px)";

        setTimeout(function () {
            page.style.transition = "opacity 0.8s ease, transform 0.8s ease";
            page.style.opacity = "1";
            page.style.transform = "translateY(0)";
        }, 100);
    });


    // 2. Skills Accordion
    const skillButtons = document.querySelectorAll(".skill-title");

    skillButtons.forEach(function (button) {
        button.addEventListener("click", function () {
            const card = button.closest(".skill-card");

            if (card) {
                card.classList.toggle("active");
            }
        });
    });


    // 3. Certification Click Animation
    const certificationItems = document.querySelectorAll(".certification-item");

    certificationItems.forEach(function (item) {
        item.addEventListener("click", function () {
            item.classList.add("clicked");

            setTimeout(function () {
                item.classList.remove("clicked");
            }, 200);
        });
    });


    // 4. Project Card Animation
    const projectCards = document.querySelectorAll(".project-card");

    projectCards.forEach(function (card) {
        card.addEventListener("mouseenter", function () {
            card.classList.add("active");
        });

        card.addEventListener("mouseleave", function () {
            card.classList.remove("active");
        });
    });


    // 5. Education Card Animation
    const educationCards = document.querySelectorAll(".education-card");

    educationCards.forEach(function (card) {
        card.addEventListener("mouseenter", function () {
            card.classList.add("active");
        });

        card.addEventListener("mouseleave", function () {
            card.classList.remove("active");
        });
    });


    // 6. Internship Card Animation
    const internshipCards = document.querySelectorAll(".experience-card");

    internshipCards.forEach(function (card) {
        card.addEventListener("mouseenter", function () {
            card.classList.add("active");
        });

        card.addEventListener("mouseleave", function () {
            card.classList.remove("active");
        });
    });


    // 7. Achievement Card Animation
    const achievementCards = document.querySelectorAll(".achievement-card");

    achievementCards.forEach(function (card) {
        card.addEventListener("click", function () {
            card.classList.toggle("active");
        });
    });


    // 8. Contact Form Validation
    const contactForm = document.querySelector(".contact-form");

    if (contactForm) {
        contactForm.addEventListener("submit", function (event) {

            const name = contactForm.querySelector('input[name="name"]');
            const email = contactForm.querySelector('input[name="email"]');
            const message = contactForm.querySelector('textarea[name="message"]');

            if (!name || !email || !message) {
                event.preventDefault();
                alert("Please check your contact form fields.");
                return;
            }

            if (
                name.value.trim() === "" ||
                email.value.trim() === "" ||
                message.value.trim() === ""
            ) {
                event.preventDefault();
                alert("Please fill in all required fields.");
                return;
            }

            const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

            if (!emailPattern.test(email.value.trim())) {
                event.preventDefault();
                alert("Please enter a valid email address.");
            }
        });
    }


    // 9. Automatically Update Footer Year
    const yearElement = document.querySelector(".current-year");

    if (yearElement) {
        yearElement.textContent = new Date().getFullYear();
    }


    // 10. Back to Top Button
    const backToTop = document.querySelector(".back-to-top");

    if (backToTop) {

        window.addEventListener("scroll", function () {
            if (window.scrollY > 300) {
                backToTop.classList.add("show");
            } else {
                backToTop.classList.remove("show");
            }
        });

        backToTop.addEventListener("click", function () {
            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });
        });
    }

});
