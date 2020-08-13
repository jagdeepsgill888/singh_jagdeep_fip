(() => {
	// "use strict";
	console.log("fired");

	let menuToggle = document.querySelector("#menuToggle"),
      burgerCon = document.querySelector("#mainNav");
			heartCon = document.querySelector(".heartIcon");
			lightBox = document.querySelector(".lightbox");
			newsLetter = document.querySelectorAll("#joinNow");

	function hamburgerMenu() {
    burgerCon.classList.toggle("slideToggle");
    menuToggle.classList.toggle("expanded");

	}

	function heartSelect() {
    heartCon.classList.toggle("liked");

	}

   function showLightbox (){
	lightBox.classList.toggle('show-lightbox');
   }

		function hideLightbox() {
			lightBox.classList.remove('show-lightbox');

		}

	menuToggle.addEventListener("click", hamburgerMenu);
	heartCon.addEventListener("click", heartSelect);
	newsLetter.forEach(newsLetter => newsLetter.addEventListener("click", showLightbox));
})();
