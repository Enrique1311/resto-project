// Nabvar **************************************************
const hamburguerMenu = document.querySelector(".hamburguer-menu");
const mobileLinks = document.querySelector(".mobile-navbar-links");
// const closeMenuIcon = document.querySelector(".close-menu-icon");

hamburguerMenu.addEventListener("click", toggleMenu);
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
const $beersBtn = document.querySelector(".beers-btn");
const $burgersBtn = document.querySelector(".burgers-btn");
const $plattersBtn = document.querySelector(".platters-btn");
const $pizzasBtn = document.querySelector(".pizzas-btn");
const $gourmetBtn = document.querySelector(".gourmet-btn");
const $dessertsBtn = document.querySelector(".desserts-btn");
const $drinksBtn = document.querySelector(".drinks-btn");
const $withoutAlcoholBtn = document.querySelector(".without-alcohol-btn");

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
				`<h5><b>U$ ${el.price}</b></h5>`
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
				`<h5><b>U$ ${el.price}</b></h5>`
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
				`<h5><b>U$ ${el.price}</b></h5>`
			);
		});

		data.pizzas.forEach((el) => {
			$pizzasItems.insertAdjacentHTML("beforeend", `<h4>${el.name}</h4>`);
			$pizzasItems.insertAdjacentHTML("beforeend", `<p> ${el.description}</p>`);
			$pizzasItems.insertAdjacentHTML(
				"beforeend",
				`<h5><b>U$ ${el.price}</b></h5>`
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
				`<h5><b>U$ ${el.price}</b></h5>`
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
				`<h5><b>U$ ${el.price}</b></h5>`
			);
		});

		data.drinks.forEach((el) => {
			$drinksItems.insertAdjacentHTML("beforeend", `<h4>${el.name}</h4>`);
			$drinksItems.insertAdjacentHTML("beforeend", `<p> ${el.description}</p>`);
			$drinksItems.insertAdjacentHTML(
				"beforeend",
				`<h5><b>U$ ${el.price}</b></h5>`
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
				`<h5><b>U$ ${el.price}</b></h5>`
			);
		});
	} catch (err) {
		let message = err.statusText || "Not Found";
		$title.insertAdjacentHTML("afterend", `<p><b>Error: ${message}</b></p>`);
	}
};

document.addEventListener("DOMContentLoaded", getMenu);

$beersBtn.addEventListener("click", () =>
	$beersItems.classList.toggle("closed")
);

$burgersBtn.addEventListener("click", () =>
	$burgersItems.classList.toggle("closed")
);

$plattersBtn.addEventListener("click", () =>
	$plattersItems.classList.toggle("closed")
);

$pizzasBtn.addEventListener("click", () =>
	$pizzasItems.classList.toggle("closed")
);

$gourmetBtn.addEventListener("click", () =>
	$gourmetItems.classList.toggle("closed")
);

$dessertsBtn.addEventListener("click", () =>
	$dessertsItems.classList.toggle("closed")
);

$drinksBtn.addEventListener("click", () =>
	$drinksItems.classList.toggle("closed")
);

$withoutAlcoholBtn.addEventListener("click", () =>
	$withoutAlcoholItems.classList.toggle("closed")
);
