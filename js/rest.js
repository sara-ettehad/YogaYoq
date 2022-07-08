const menu = document.querySelector(".menu");
const menuItems = document.querySelectorAll(".menuItem");
const hamburger= document.querySelector(".hamburger");
const closeIcon= document.querySelector(".fa-xmark");
const menuIcon = document.querySelector(".fa-bars");
const mybutton = document.getElementById("myBtn");

function toggleMenu() {
  if (menu.classList.contains("showMenu")) {
    menu.classList.remove("showMenu");
    closeIcon.style.display = "none";
    menuIcon.style.display = "block";
  } else {
    menu.classList.add("showMenu");
    closeIcon.style.display = "block";
    menuIcon.style.display = "none";
  }
};

hamburger.addEventListener("click", toggleMenu)

menuItems.forEach( 
    function(menuItem) { 
      menuItem.addEventListener("click", toggleMenu);
    }
)



function topFunction() {
    document.body.scrollTop = 0; 
    document.documentElement.scrollTop = 0;
  }
  
  mybutton.addEventListener("click", topFunction);