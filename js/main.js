const open = document.querySelector(".open");
const close = document.querySelector(".close");
const navbar = document.querySelector(".navbar");
const navaction = document.querySelector(".navaction");

open.onclick = () =>{
    console.log("haider");
    open.style.display = "none";
    close.style.display = "block";
    navbar.classList.add("navbar1");
    navaction.classList.add("navaction1");
    navaction.classList.remove("navaction2");
}
close.onclick = () =>{
    open.style.display = "block";
    close.style.display = "none";
    navbar.classList.remove("navbar1");
    navaction.classList.remove("navaction1");
    navaction.classList.add("navaction2");
}