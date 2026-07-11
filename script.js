// ===============================
// DIVYANSSA SURYAM PRIVATE LIMITED
// Premium Corporate Script
// ===============================

// Mobile Menu

const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");

menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("active");
});

document.querySelectorAll(".nav-links a").forEach(link => {
    link.addEventListener("click", () => {
        navLinks.classList.remove("active");
    });
});

// ===============================
// Header Scroll Effect
// ===============================

const header = document.querySelector(".header");

window.addEventListener("scroll", () => {

    if(window.scrollY > 60){

        header.style.background = "rgba(3,27,78,0.98)";
        header.style.boxShadow = "0 8px 25px rgba(0,0,0,.18)";

    }else{

        header.style.background = "rgba(8,28,70,.92)";
        header.style.boxShadow = "none";

    }

});

// ===============================
// Scroll Reveal Animation
// ===============================

const observer = new IntersectionObserver((entries)=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            entry.target.style.opacity="1";
            entry.target.style.transform="translateY(0)";

        }

    });

},{
    threshold:.15
});

document.querySelectorAll(
".business-card,.box,.why-card,.stat-card,.leader-card,.contact-box,.sustain-grid div"
).forEach(el=>{

    el.style.opacity="0";
    el.style.transform="translateY(50px)";
    el.style.transition=".8s ease";

    observer.observe(el);

});

// ===============================
// Active Navigation
// ===============================

const sections = document.querySelectorAll("section");
const navItems = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll",()=>{

    let current = "";

    sections.forEach(section=>{

        const top = section.offsetTop - 150;

        if(window.scrollY >= top){

            current = section.getAttribute("id");

        }

    });

    navItems.forEach(link=>{

        link.classList.remove("active");

        if(link.getAttribute("href")==="#" + current){

            link.classList.add("active");

        }

    });

});

// ===============================
// Smooth Button Hover
// ===============================

document.querySelectorAll(".btn").forEach(btn=>{

    btn.addEventListener("mouseenter",()=>{

        btn.style.transform="translateY(-4px)";

    });

    btn.addEventListener("mouseleave",()=>{

        btn.style.transform="translateY(0)";

    });

});

// ===============================
// Loading Animation
// ===============================

window.addEventListener("load",()=>{

    document.body.style.opacity="0";

    setTimeout(()=>{

        document.body.style.transition="opacity .7s ease";
        document.body.style.opacity="1";

    },100);

});
