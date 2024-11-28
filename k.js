const navlist = document.getElementById('navlist');
const hamburger = document.getElementById("hamburger");

// click
hamburger.addEventListener("click", ()=>{
    navlist.classList.toggle("navlist");
})