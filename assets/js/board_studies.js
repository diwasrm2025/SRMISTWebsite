const headers = document.querySelectorAll(".accordion-header");

headers.forEach(header => {
    header.addEventListener("click", (e) => {
        e.stopPropagation(); // prevent document click

        const body = header.nextElementSibling;

        headers.forEach(h => {
            if (h !== header) {
                h.classList.remove("active");
                h.nextElementSibling.classList.remove("open");
            }
        });

        header.classList.toggle("active");
        body.classList.toggle("open");
    });
});

// Click anywhere outside accordion → close all
document.addEventListener("click", () => {
    headers.forEach(h => {
        h.classList.remove("active");
        h.nextElementSibling.classList.remove("open");
    });
});
