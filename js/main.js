//toggle menu

const toggleBtn = document.querySelector(".btn-toggle");
const menu = document.querySelector(".menu-toggle");

toggleBtn.addEventListener("click", toggleMenu);

function toggleMenu(){
  //check if toggle menu is active
  if(menu.classList.contains("active")){
    menu.classList.remove("active");
    this.classList.remove("open");
  }
  else{
    menu.classList.add("active");
    this.classList.add("open");
  }
}
