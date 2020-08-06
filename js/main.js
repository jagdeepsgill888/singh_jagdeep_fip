(() => {
	// "use strict";
	console.log("fired");

	let menuToggle = document.querySelector("#menuToggle"),
      burgerCon = document.querySelector("#mainNav");

	function hamburgerMenu() {
    burgerCon.classList.toggle("slideToggle");
    menuToggle.classList.toggle("expanded");

	}

	menuToggle.addEventListener("click", hamburgerMenu);
})();
