const navToggle = document.querySelector(".nav-toggle");
const nav = document.querySelector(".nav");
const header = document.querySelector(".header");
const title = document.querySelector(".title");
navToggle.addEventListener("click", ()=>{
    console.log("clicked");
    const expanded = navToggle.getAttribute("aria-expanded") === "true" || false;
    navToggle.setAttribute("aria-expanded", !expanded);
    const navVisible = nav.getAttribute("data-visible") === "true" || false;
    nav.setAttribute("data-visible", !navVisible);
    const titleVisible = title.getAttribute("data-visible") === "true" || false;
    title.setAttribute("data-visible", !titleVisible);
    const transparent = header.getAttribute("data-transparent") === "true" || false;
    header.setAttribute("data-transparent", !transparent);
});

//# sourceMappingURL=index.bf112b81.js.map
