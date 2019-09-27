menu.onclick = function myFunction(argument) {
	var x =document.getElementById('siteNav');

	if (x.className === "row list site-navigation") {
		x.className += " mobille-menu";
	} else {
		x.className = "row list site-navigation"
	}
}