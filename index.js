/*slider */

const swiper = new Swiper(".swiper", {
	direction: "horizontal",
	slidesPerView: "auto",
	spaceBetween: 16,
	pagination: {
		el: ".swiper-pagination",
		clickable: true,
	},
});

/*open all*/
let moreCardsTablet = document.querySelectorAll(".cards__wrapper_hide-tablet");
let moreCardsDesctop = document.querySelectorAll(".cards__wrapper_hide-desctop");

let btnText = document.querySelector(".cards-open");

if (window.innerWidth >= 768 && window.innerWidth < 1120) {
  btnText.addEventListener("click", () => {
    moreCardsTablet.forEach((item) => {
		item.classList.toggle("cards__wrapper_hide-tablet");
      if (item.classList.contains("cards__wrapper_hide-tablet")) {
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
		item.classList.toggle("cards__wrapper_hide-desctop");
      if (item.classList.contains("cards__wrapper_hide-desctop")) {
			btnText.innerHTML = "Показать все";
			btnText.classList.remove("clicked");
      } else {
      	btnText.innerHTML = "Скрыть";
			btnText.classList.add("clicked");
      }
    });
  });
}


