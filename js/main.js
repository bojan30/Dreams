//toggle menu

const hamburger = document.querySelector(".hamburger");
const menu = document.querySelector(".menu-toggle");

hamburger.addEventListener("click", toggleMenu);

function toggleMenu(){
  //check if toggle menu is active
  if(menu.classList.contains("active")){
    menu.classList.remove("active");
    this.classList.remove("active");
    this.classList.add("inactive");
  }
  else{
    menu.classList.add("active");
    this.classList.add("active");
    this.classList.remove("inactive")
  }
}
