window.addEventListener("load", () => {
    document.querySelector(".hero").style.opacity = "1";
});

document.querySelectorAll("nav a").forEach(link => {
    link.addEventListener("click", function(e) {
        e.preventDefault();

        const target = document.querySelector(this.getAttribute("href"));

        target.scrollIntoView({
            behavior: "smooth"
        });
    });
});
