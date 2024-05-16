/*slider */

document.addEventListener("DOMContentLoaded", () => {
  const width = window.innerWidth;
  if (width < 768) {
   	const swiper = new Swiper(".swiper", {
      direction: "horizontal",
      slidesPerView: "auto",
      spaceBetween: 16,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
    });
  }
});

/*open all*/
let moreCardsTablet = document.querySelectorAll(".swiper-slide__wrapper--hide-tablet");
let moreCardsDesctop = document.querySelectorAll(".swiper-slide__wrapper--hide-desctop");

let btnText = document.querySelector(".cards-open");

if (window.innerWidth >= 768 && window.innerWidth < 1120) {
  btnText.addEventListener("click", () => {
    moreCardsTablet.forEach((item) => {
		item.classList.toggle("swiper-slide__wrapper--hide-tablet");
      if (item.classList.contains("swiper-slide__wrapper--hide-tablet")) {
        btnText.innerHTML = "Показать все";
		  btnText.classList.remove("clicked");
      } else {
        btnText.innerHTML = "Скрыть";
		  btnText.classList.add("clicked");
      }
    });
  });
}


if (window.innerWidth >= 1120) {
  btnText.addEventListener("click", () => {
    moreCardsDesctop.forEach((item) => {
		item.classList.toggle("swiper-slide__wrapper--hide-desctop");
      if (item.classList.contains("swiper-slide__wrapper--hide-desctop")) {
			btnText.innerHTML = "Показать все";
			btnText.classList.remove("clicked");
      } else {
      	btnText.innerHTML = "Скрыть";
			btnText.classList.add("clicked");
      }
    });
  });
}


