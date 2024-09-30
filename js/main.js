const d = document,
	w = window;

// Nabvar **************************************************
const hamburguerMenu = d.querySelector(".hamburguer-menu");
const mobileLinks = d.querySelector(".mobile-navbar-links");

hamburguerMenu.addEventListener("click", toggleMenu);
mobileLinks.addEventListener("click", toggleMenu);

function toggleMenu() {
	mobileLinks.classList.toggle("opened-menu");
}

// Scroll Spy ***********************************************
function scrollSpy() {
	const $sections = d.querySelectorAll("section");
	const $navLinks = d.querySelectorAll(".link-item");

	w.onscroll = () => {
		$sections.forEach((sec) => {
			let top = w.scrollY,
				offset = sec.offsetTop - 500,
				height = sec.offsetHeight,
				id = sec.getAttribute("id");

			if (top >= offset && top < offset + height) {
				$navLinks.forEach((link) => {
					link.classList.remove("active");
					d.querySelector(`.navbar-links a[href*="${id}"]`).classList.add(
						"active"
					);
				});
			}
		});
	};
}

// Our menu *************************************************
const $burgersItems = d.querySelector(".burgers-items");
const $plattersItems = d.querySelector(".platters-items");
const $beersItems = d.querySelector(".beers-items");
const $pizzasItems = d.querySelector(".pizzas-items");
const $gourmetItems = d.querySelector(".gourmet-items");
const $dessertsItems = d.querySelector(".desserts-items");
const $drinksItems = d.querySelector(".drinks-items");
const $withoutAlcoholItems = d.querySelector(".without-alcohol-items");
const $beersBtn = d.querySelector(".beers-btn");
const $burgersBtn = d.querySelector(".burgers-btn");
const $plattersBtn = d.querySelector(".platters-btn");
const $pizzasBtn = d.querySelector(".pizzas-btn");
const $gourmetBtn = d.querySelector(".gourmet-btn");
const $dessertsBtn = d.querySelector(".desserts-btn");
const $drinksBtn = d.querySelector(".drinks-btn");
const $withoutAlcoholBtn = d.querySelector(".without-alcohol-btn");

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

// Top Button ************************************************
function topBtn() {
	const $topBtn = d.querySelector(".top-btn");

	w.addEventListener("scroll", () => {
		let scrollTop = d.documentElement.scrollTop;

		if (scrollTop > 100) {
			$topBtn.classList.remove("hidden-btn");
		} else {
			$topBtn.classList.add("hidden-btn");
		}
	});

	d.addEventListener("click", (e) => {
		if (e.target.matches(".top-btn") || e.target.matches(".top-btn i")) {
			w.scrollTo({ top: 0 });
		}
	});
}

d.addEventListener("DOMContentLoaded", getMenu(), topBtn(), scrollSpy());
