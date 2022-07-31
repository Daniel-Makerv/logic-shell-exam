
const btn = document.querySelector("button.mobile-menu-button");
const menu = document.querySelector(".mobile-menu");

//mode night
const moonIcon = document.querySelector(".moon");
const sunIcon = document.querySelector(".sun");

const userTheme = localStorage.getItem("theme");
const systemTheme = window.matchMedia("(prefers-color-scheme: light)").matches;

const iconToggle = () => {
  moonIcon.classList.toggle("display-none");
  sunIcon.classList.toggle("display-none");

};

const themeCheck = () => {
  if (userTheme === "dark" || (!userTheme && systemTheme)) {
    document.documentElement.classList.add("dark");
    moonIcon.classList.add("display-none");
    return;
  }
  sunIcon.classList.add("display-none");
};
const themeSwitch = () => {
  if (document.documentElement.classList.contains("dark")) {
    document.documentElement.classList.remove("dark");
    localStorage.setItem("theme", "light");
    iconToggle();
    return;
  }
  document.documentElement.classList.add("dark");
  localStorage.setItem("theme", "dark");
  iconToggle();
};

sunIcon.addEventListener("click", () => {
  themeSwitch();
});
moonIcon.addEventListener("click", () => {
  themeSwitch();

});
themeCheck();
//cambiar a version movil
btn.addEventListener("click", () => {
  menu.classList.toggle("hidden");

});

const moonIcon2 = document.querySelector(".moon2");
const sunIcon2 = document.querySelector(".sun2");

const iconToggle2 = () => {
  moonIcon2.classList.toggle("display-none");
  sunIcon2.classList.toggle("display-none");

};

const themeCheck2 = () => {
  if (userTheme === "dark" || (!userTheme && systemTheme)) {
    document.documentElement.classList.add("dark");
    moonIcon2.classList.add("display-none");
    return;
  }
  sunIcon2.classList.add("display-none");
};

const themeSwitch2 = () => {
  if (document.documentElement.classList.contains("dark")) {
    document.documentElement.classList.remove("dark");
    localStorage.setItem("theme", "light");
    iconToggle2();
    return;
  }
  document.documentElement.classList.add("dark");
  localStorage.setItem("theme", "dark");
  iconToggle2();
};

sunIcon2.addEventListener("click", () => {
  themeSwitch2();
});
moonIcon2.addEventListener("click", () => {
  themeSwitch2();
});
themeCheck2();

//apartado tecnologias
const accordionHeader = document.querySelectorAll(".accordion-header");
accordionHeader.forEach((header) => {
  header.addEventListener("click", function () {
    const accordionContent =
      header.parentElement.querySelector(".accordion-content");
    let accordionMaxHeight = accordionContent.style.maxHeight;

    // Condition handling
    if (accordionMaxHeight == "0px" || accordionMaxHeight.length == 0) {
      accordionContent.style.maxHeight = `${
        accordionContent.scrollHeight + 32
      }px`;
      header.querySelector(".fas").classList.remove("fa-plus");
      header.querySelector(".fas").classList.add("fa-minus");
      header.parentElement.classList.add("bg-indigo-50");
    } else {
      accordionContent.style.maxHeight = `0px`;
      header.querySelector(".fas").classList.add("fa-plus");
      header.querySelector(".fas").classList.remove("fa-minus");
      header.parentElement.classList.remove("bg-indigo-50");
    }
  });
});

//carrusel images
document.addEventListener("alpine:init", () => {
  Alpine.data("slider", () => ({
    currentIndex: 1,
    images: [
      "../images/alojamiento.jpg",
      "../images/alojamiento.jpg",
      "../images/alojamiento.jpg",
      "../images/alojamiento.jpg",
      "../images/alojamiento.jpg",
    ],
    back() {
      if (this.currentIndex > 1) {
        this.currentIndex = this.currentIndex - 1;
      }
    },
    next() {
      if (this.currentIndex < this.images.length) {
        this.currentIndex = this.currentIndex + 1;
      } else if (this.currentIndex <= this.images.length) {
        this.currentIndex = this.images.length - this.currentIndex + 1;
      }
    },
  }));
});
