/*jslint browser: true, devel: true*/
/*global $, jQuery, alert*/

// Mobile button menu
window.onresize = function(){location.reload();}

// Parallax
$(window).scroll(function () {
	"use strict";

	// How far I have scrolled
	var wScroll = $(this).scrollTop();

	$('#name').css({
		'transform' : 'translate(0px ,  ' + wScroll / 8 + '%)'

	});
});
// Burger menu animated
function animateMenu(x) {
   "use strict";
		if ($(window).width()>1080){
			return;
		}
		if (document.getElementById("mySidenav").style.width == "40%") {
			closeNav(x);
		}
		else{
			openNav(x);
		}
}
function fromContent(x){
	if(document.getElementById("mySidenav").style.width == "40%"){
		animateMenu(x);
	}
	else {
		return;
	}
}
function changeMenu(x){
	x.classList.toggle("change");
}
// Side menu for Mobile
function openNav(x) {
		changeMenu(x);
   document.getElementById("mySidenav").style.width = "40%";
}
/* Set the width of the side navigation to 0 */
function closeNav(x) {
		changeMenu(x);
   document.getElementById("mySidenav").style.width = "0px";
}
//-----------------
// Smooth Scrolling
$(document).ready(function () {
  // Add smooth scrolling to all links
    "use strict";
    $("a").on('click', function (event) {

    // Make sure this.hash has a value before overriding default behavior
        if (this.hash !== "") {
      // Prevent default anchor click behavior
            event.preventDefault();

      // Store hash
            var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 800, function () {

        // Add hash (#) to URL when done scrolling (default click behavior)
                window.location.hash = hash;
            });
        } // End if
    });
});
