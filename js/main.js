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

//slide in animation effects

window.addEventListener("scroll",debounce(()=>{
  new Magic("text-one", 80, "fade-in", true).animate();
  new Magic("text-two", 80, "fade-in", true).animate();
  new Magic("text-three", 80, "fade-in", true).animate();
  new Magic("text-four", 80, "fade-in", true).animate();
  new Magic("service-one", 50, "fade-in", true).animate();
  new Magic("service-two", 50, "fade-in", true).animate();
  new Magic("service-three", 50, "fade-in", true).animate();
  new Magic("team-member-one", 50, "fade-in", true).animate();
  new Magic("team-member-two", 50, "fade-in", true).animate();
  new Magic("team-member-three", 50, "fade-in", true).animate();
},16,true));

//parallax effect

function parallax(target, amount){
  let scroll = window.pageYOffset;
  let el = document.querySelector(target);
  el.style.backgroundPositionY = (amount-1) * scroll + "px";
}

window.addEventListener("scroll", ()=>{
  parallax("#home",0.7);
});