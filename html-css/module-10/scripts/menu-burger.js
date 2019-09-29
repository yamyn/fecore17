menuBurger.onclick = function myFunction(argument) {
	var x =document.getElementById('siteNav');

	if (x.className === "list site-navigation") {
		x.className += " mobille-menu";
	} else {
		x.className = "list site-navigation"
	}
}