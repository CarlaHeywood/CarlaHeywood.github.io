/*jslint browser: true, devel: true*/
/*global $, jQuery, alert*/

// Loader
$(window).load(function(){
	$(".Loader").animate({
		opacity: 0
	}, 3000);
	setTimeout(function() {
		$(".Loader").css('display', 'none');
	}, 3000);
	setTimeout(function() {
		$(".Page-Content").css('display', 'block');
	}, 3000);
	$(".bar").animate({
		top: 0,
		opacity: 1
	}, 2500);
	$(".Page-Content").animate({
		opacity: 1
	}, 4500);
});
//-----------------------------

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
		if (document.getElementById("mySidenav").style.width == "100%") {
			closeNav(x);
		}
		else{
			openNav(x);
		}
}
function fromContent(x){
	if(document.getElementById("mySidenav").style.width == "100%"){
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
   document.getElementById("mySidenav").style.width = "100%";
}
/* Set the width of the side navigation to 0 */
function closeNav(x) {
	changeMenu(x);
  document.getElementById("mySidenav").style.width = "0%";
}
//-----------------
function goToHomePage() {
	//animateMenu(getElementById('burgermenu'));
	window.location.pathname = "../index.html";
	smoothScroll();
}
// Smooth Scrolling
$(document).ready( function() {
	$("#Contact-projects").click(function(e){
		goToHomePage();
	});
});
function smoothScroll() {
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
}
// Page Opener
//$('#Home').fadeIn(10000);
