/*jslint browser: true, devel: true*/
/*global $, jQuery, alert*/

// Projects List
// Loading data from Google Sheet using JSON link
// Creating html for the handlebars template
var requestProjects = new XMLHttpRequest();
requestProjects.open('GET', 'https://script.google.com/macros/s/AKfycbygukdW3tt8sCPcFDlkMnMuNu9bH5fpt7bKV50p2bM/exec?id=1-tcWjpx1W0v5nOmj_VGN2ng0PUyJeLPlA3V4z9rOWVg&sheet=Projects', true);
requestProjects.onload = function(){
    var data = JSON.parse(requestProjects.responseText);
    createProjectList(data);
};
requestProjects.onerror = function() {
  console.log("Connection error..");
};
requestProjects.send();
function createProjectList(projectData){
  var rawTemplate = document.getElementById("projectTemplate").innerHTML;
  var compiledTemplate = Handlebars.compile(rawTemplate);
  var generatedHTML = compiledTemplate(projectData);
  var project_list = document.getElementById("projectList");
  project_list.innerHTML = generatedHTML;
}
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
var projects = $('.cell div');

//$(window).scroll(function (event) {
//    var scroll = $(window).scrollTop();
//    console.log(scroll);
//});

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
function closeNav(x) {
	changeMenu(x);
  document.getElementById("mySidenav").style.width = "0%";
}
//-----------------

/* Smooth Scrolling
function smoothScroll() {
		console.log("smooth");
    $("a").on('click', function (event) {
        if (this.hash !== "") {
            event.preventDefault();
            var hash = this.hash;

						$('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 500, function () {
							window.location.hash = hash;
            });
        } // End if
    });
}
function fromProjects() {
	console.log("fromProjects");
	window.location = "index.html";
}*/

// Page Opener
//$('#Home').fadeIn(10000);
