// Nabvar **************************************************
const hamburguerMenu = document.querySelector(".hamburguer-menu");
const mobileLinks = document.querySelector(".mobile-navbar-links");
// const closeMenuIcon = document.querySelector(".close-menu-icon");

hamburguerMenu.addEventListener("click", toggleMenu);
// closeMenuIcon.addEventListener("click", toggleMenu);
mobileLinks.addEventListener("click", toggleMenu);

function toggleMenu() {
	mobileLinks.classList.toggle("opened-menu");
}

// Food menu *************************************************
const $beersItems = document.querySelector(".beers-items");
const $burgersItems = document.querySelector(".burgers-items");
const $plattersItems = document.querySelector(".platters-items");
const $pizzasItems = document.querySelector(".pizzas-items");
const $gourmetItems = document.querySelector(".gourmet-items");
const $dessertsItems = document.querySelector(".desserts-items");
const $drinksItems = document.querySelector(".drinks-items");
const $withoutAlcoholItems = document.querySelector(".without-alcohol-items");

const getMenu = async () => {
	try {
		let res = await fetch("../assets/menu.json");
		let data = await res.json();

		if (!res.ok) throw { statusText: res.statusText };

		data.beers.forEach((el) => {
			$beersItems.insertAdjacentHTML("beforeend", `<h4>${el.name}</h4>`);
			$beersItems.insertAdjacentHTML("beforeend", `<p>${el.description}</p>`);
			$beersItems.insertAdjacentHTML(
				"beforeend",
				`<p><b>U$ ${el.price}</b></p>`
			);
		});

		data.hamburgers.forEach((el) => {
			$burgersItems.insertAdjacentHTML("beforeend", `<h4>${el.name}</h4>`);
			$burgersItems.insertAdjacentHTML(
				"beforeend",
				`<p> ${el.description}</p>`
			);
			$burgersItems.insertAdjacentHTML(
				"beforeend",
				`<p><b>U$ ${el.price}</b></p>`
			);
		});

		data.platters.forEach((el) => {
			$plattersItems.insertAdjacentHTML("beforeend", `<h4>${el.name}</h4>`);
			$plattersItems.insertAdjacentHTML(
				"beforeend",
				`<p> ${el.description}</p>`
			);
			$plattersItems.insertAdjacentHTML(
				"beforeend",
				`<p><b>U$ ${el.price}</b></p>`
			);
		});

		data.pizzas.forEach((el) => {
			$pizzasItems.insertAdjacentHTML("beforeend", `<h4>${el.name}</h4>`);
			$pizzasItems.insertAdjacentHTML("beforeend", `<p> ${el.description}</p>`);
			$pizzasItems.insertAdjacentHTML(
				"beforeend",
				`<p><b>U$ ${el.price}</b></p>`
			);
		});

		data.gourmet.forEach((el) => {
			$gourmetItems.insertAdjacentHTML("beforeend", `<h4>${el.name}</h4>`);
			$gourmetItems.insertAdjacentHTML(
				"beforeend",
				`<p> ${el.description}</p>`
			);
			$gourmetItems.insertAdjacentHTML(
				"beforeend",
				`<p><b>U$ ${el.price}</b></p>`
			);
		});

		data.desserts.forEach((el) => {
			$dessertsItems.insertAdjacentHTML("beforeend", `<h4>${el.name}</h4>`);
			$dessertsItems.insertAdjacentHTML(
				"beforeend",
				`<p> ${el.description}</p>`
			);
			$dessertsItems.insertAdjacentHTML(
				"beforeend",
				`<p><b>U$ ${el.price}</b></p>`
			);
		});

		data.drinks.forEach((el) => {
			$drinksItems.insertAdjacentHTML("beforeend", `<h4>${el.name}</h4>`);
			$drinksItems.insertAdjacentHTML("beforeend", `<p> ${el.description}</p>`);
			$drinksItems.insertAdjacentHTML(
				"beforeend",
				`<p><b>U$ ${el.price}</b></p>`
			);
		});

		data.withoutAlcohol.forEach((el) => {
			$withoutAlcoholItems.insertAdjacentHTML(
				"beforeend",
				`<h4>${el.name}</h4>`
			);
			$withoutAlcoholItems.insertAdjacentHTML(
				"beforeend",
				`<p> ${el.description}</p>`
			);
			$withoutAlcoholItems.insertAdjacentHTML(
				"beforeend",
				`<p><b>U$ ${el.price}</b></p>`
			);
		});
	} catch (err) {
		let message = err.statusText || "Not Found";
		$title.insertAdjacentHTML("afterend", `<p><b>Error: ${message}</b></p>`);
	}
};

document.addEventListener("DOMContentLoaded", getMenu);
