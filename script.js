const data = [
  {
    status: "Latest project",
    title: "Modern Industrial Loft",
    date: "Year Completed 2022",
    location: "New York, USA",
    price: "$1.000",
    style: "Industrial",
    architect: "William Stone",
  },
  {
    status: "Latest project2",
    title: "Modern Industrial Loft",
    date: "Year Completed 2022",
    location: "New York, USA",
    price: "$2.000",
    style: "Industrial",
    architect: "William Stone",
  },
  {
    status: "Latest project3",
    title: "Modern Industrial Loft",
    date: "Year Completed 2022",
    location: "New York, USA",
    price: "$3.000",
    style: "Industrial",
    architect: "William Stone",
  },
];

const status = document.querySelector(".info-status");
const title = document.querySelector(".info-title");
const date = document.querySelector(".info-date");
const place = document.getElementById("location");
const prices = document.getElementById("prices");
const style = document.getElementById("style");
const architect = document.getElementById("architect");

const swiper = new Swiper(".swiper-section", {
  speed: 400,
  slidesPerView: 1,
  keyboard: true,
  pagination: {
    el: ".swiper-pagination",
    type: "fraction",
    renderFraction: (currClass, totalClass) => {
      return `<span class='${currClass}'></span>
          <span class='separator-pagination'></span>
          <span class='${totalClass}'></span>`;
    },
    formatFractionCurrent: function (number) {
      return ("0" + number).slice(-2);
    },
    formatFractionTotal: function (number) {
      return ("0" + number).slice(-2);
    },
  },
  navigation: {
    nextEl: ".swiper-buttons-next",
    prevEl: ".swiper-buttons-prev",
  },
  on: {
    init: () => {
      status.textContent = data[0].status;
      title.textContent = data[0].title;
      date.textContent = data[0].date;
      place.textContent = data[0].location;
      prices.textContent = data[0].price;
      style.textContent = data[0].style;
      architect.textContent = data[0].architect;
    },
    slideChange: () => {
      status.textContent = data[swiper.realIndex].status;
      title.textContent = data[swiper.realIndex].title;
      date.textContent = data[swiper.realIndex].date;
      place.textContent = data[swiper.realIndex].location;
      prices.textContent = data[swiper.realIndex].price;
      style.textContent = data[swiper.realIndex].style;
      architect.textContent = data[swiper.realIndex].architect;
    },
  },
});
