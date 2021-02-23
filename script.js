var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var button = document.querySelector(".button");
var colorArr = [];	

function setRandomColor() {
	var letters = '0123456789ABCDEF';
  	var color = '#';

  	for(var y = 0;  y < 2; y++){ 
  		for (var i = 0; i < 6; i++) {
	    	color += letters[Math.floor(Math.random() * 16)];
	  	}
	 	colorArr.push(color);
        color = "#";
  	}
	console.log(colorArr);
    color1.value = colorArr[0];
    color2.value = colorArr[1];
    body.style.background = "linear-gradient(to right, "+color1.value+", " + color2.value+")";
    colorArr = [];

}

/*
function setRandomGradient(col1, col2){
	col1 = colorArr[0];
    col2 = colorArr[1];
 */   

function setGradient () {
	body.style.background = 
	"linear-gradient(to right, "
	+ color1.value 
	+ ", " 
	+ color2.value 
	+ ")";

	css.textContent = body.style.background + ";";
}
setGradient ();

//window.addEventListener("load", setGradient);

button.addEventListener("click", setRandomColor);

color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);