document.addEventListener("DOMContentLoaded", () => {

    // Simple fade-in animation on scroll
    const revealElements = document.querySelectorAll(
        ".facility-card, .safety-card, .rules-list li"
    );

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = 1;
                entry.target.style.transform = "translateY(0)";
            }
        });
    }, { threshold: 0.2 });

    revealElements.forEach(el => {
        el.style.opacity = 0;
        el.style.transform = "translateY(30px)";
        el.style.transition = "0.6s ease";
        observer.observe(el);
    });

});
