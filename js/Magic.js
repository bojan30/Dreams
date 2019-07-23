const Magic = function (trigger, position, activeClass, reverse) {
  return {
    animate: function () {
      const el = document.getElementById(trigger);
      let offsetTop = function (element) {
        var top = 0;
        do {
          top += element.offsetTop || 0;
          element = element.offsetParent;
        } while (element);

        return {
          top: top,
        };
      };
      let elPos = offsetTop(el).top - window.scrollY;
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