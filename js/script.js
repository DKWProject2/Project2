/* for side nav that pops out */
function openNav() {
  document.getElementById("sidenav").style.width = "200px";
}

function closeNav() {
  document.getElementById("sidenav").style.width = "0";
}

// Get the elements with class="column"
var elements = document.getElementsByClassName("column");

function validateForm() {
  var x = document.forms["form"]["address"].value;
  if (x=="") {
	alert("Please enter an address.");
	return false;
  }
  if (x!="") {
	  alert("Thank you! Your order has been placed.");
  }
}
