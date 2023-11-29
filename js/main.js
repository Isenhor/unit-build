document.addEventListener("DOMContentLoaded", function () {
  // Burger
  const burger = document.querySelector(".burger");
  const menu = document.querySelector("#menu");
  const bodyEl = document.body;
  const navBtn = document.querySelector(".nav-btn");

  burger.addEventListener("click", function () {
    if (this.classList.contains("burger--active")) {
      this.classList.remove("burger--active");
      navBtn.classList.remove("nav-btn--active")
      bodyEl.classList.remove("lock");
      menu.classList.remove("nav--active");
    } else {
      this.classList.add("burger--active");
      navBtn.classList.add("nav-btn--active")
      bodyEl.classList.add("lock");
      menu.classList.add("nav--active");
    }
  });

  menu.addEventListener("click", () => {
    burger.classList.remove("burger--active");
    bodyEl.classList.remove("lock");
    menu.classList.remove("nav--active");
  });
});
