/* 
This JavaScript Document
will enable the slide n hide 
vector menu. 

- it will detect if the user clicks on the button class="btn-menu"
- each click will toggle ON and OFF the class="show", between these two states:
   <nav class="show">
	OR
   <nav>
- css style will take care of what to do with class="show"

More on JavaScript in a future lesson
*/


const $mainNav = $('#main-nav');
const hamburgerMenu = document.getElementById('hamburger-menu');

$mainNav.hide();
if (window.innerWidth > 700) {
	$mainNav.show();
}

hamburgerMenu.addEventListener('click', function () {
	$mainNav.slideToggle();
})