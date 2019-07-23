const Magic = function (trigger, position, activeClass, reverse) {
  return {
    animate: function () {
      const el = document.getElementById(trigger);
      let elPos = el.offsetTop - window.scrollY;
      let windowHeight = window.innerHeight;
      if (elPos <= windowHeight * position / 100) {
        el.classList.add(activeClass);
      }
      if (elPos > windowHeight && reverse) {
        el.classList.remove(activeClass);
      }
    }
  }
};