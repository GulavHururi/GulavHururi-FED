// JavaScript Document
var deButton = document.querySelector("nav button");

deButton.onclick = toggleMenu;

function toggleMenu() {
	var deNav = 
	document.querySelector("nav");

	deNav.classList.toggle("toonMenu");
}

const TopButton = document.querySelector ("button.top")

TopButton.addEventListener('click', () => {
  window.scrollTo({ top: 0 });
});
