(() => {
	// "use strict";
	console.log("fired");

	let menuToggle = document.querySelector("#menuToggle"),
      burgerCon = document.querySelector("#mainNav");
			heartCon = document.querySelector(".heartIcon")

	function hamburgerMenu() {
    burgerCon.classList.toggle("slideToggle");
    menuToggle.classList.toggle("expanded");

	}

	function heartSelect() {
    heartCon.classList.toggle("liked");

	}

	menuToggle.addEventListener("click", hamburgerMenu);
	heartCon.addEventListener("click", heartSelect);
})();
