/* Add functionality to the website */

/* Change the background color of the header when the user scrolls */
window.addEventListener('scroll', function() {
	var header = document.querySelector('header');
	if (window.scrollY > 0) {
		header.style.backgroundColor = '#fff';
		header.style.color = '#333';
	} else {
		header.style.backgroundColor = '#333';
		header.style.color = '#fff';
	}
});

/* Display a message when the user clicks the button */
var button = document.querySelector('button');
button.addEventListener('click', function() {
	alert('Hello, world!');
});
