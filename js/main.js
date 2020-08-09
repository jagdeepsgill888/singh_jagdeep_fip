(() => {
	// "use strict";
	console.log("fired");

	let menuToggle = document.querySelector("#menuToggle"),
      burgerCon = document.querySelector("#mainNav");
			prmoImages = document.querySelector("#prmoImages");
      houseName = document.querySelector(".house-name");

	function hamburgerMenu() {
    burgerCon.classList.toggle("slideToggle");
    menuToggle.classList.toggle("expanded");

	}

	function animateBanner () {


          //Move the banner to the right using the data-offset attribute
          //we get from the shields

          //600
          prmoImages.style.right = `${this.dataset.offset * 600}px`;


          houseName.textContent =`House ${houseInfo[this.dataset.offset][0]}`;

      }

  sigils.forEach(sigil => sigil.addEventListener("click", animateBanner));
	menuToggle.addEventListener("click", hamburgerMenu);
})();
