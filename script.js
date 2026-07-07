// Smooth reveal animations
const observer = new IntersectionObserver((entries)=>{
    entries.forEach(entry=>{
        if(entry.isIntersecting){
            entry.target.classList.add("show");
        }
    });
},{
    threshold:0.15
});

document.querySelectorAll(".card, section h2, section p").forEach((el)=>{
    observer.observe(el);
});

// Navbar background on scroll
window.addEventListener("scroll",()=>{
    const nav=document.querySelector(".navbar");

    if(window.scrollY>80){
        nav.style.background="rgba(14,35,66,.98)";
    }else{
        nav.style.background="rgba(14,35,66,.92)";
    }
});
