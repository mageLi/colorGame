

var colors = [];
var pickedColor;
var numberSquares = 6;
var squares = document.querySelectorAll(".square");
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var modeButtons = document.querySelectorAll(".mode");


init();

function init(){
		setModeButtons();
		setupSquares();
		reset();
}
function setModeButtons(){
		for (var i = 0; i < modeButtons.length; i++) {
		modeButtons[i].addEventListener("click", function(){
		modeButtons[0].classList.remove("selected");
		modeButtons[1].classList.remove("selected");
		this.classList.add("selected");
		this.textContent === "Easy" ? numberSquares = 3 : numberSquares = 6;
		// if(this.textContent === "Easy"){
		// 	numberSquares = 3;
		// }else{
		// 	numberSquares = 6;
		// }
		reset();
	});
}
}

function setupSquares(){
	for(var i = 0; i < squares.length; i++){
	squares[i].addEventListener("click", function(){
		var clickColor = this.style.backgroundColor;
		if(clickColor === pickedColor){
			messageDisplay.textContent = "Correct~!";
			resetButton.textContent = "Play Again?";
			changeColors(clickColor);
			h1.style.backgroundColor = clickColor;
			}else{
			this.style.backgroundColor = "#232323";
			messageDisplay.textContent = "Try Again";
		}
	});
}
}



function reset(){
	//generate all new colors
	colors = generateRandomColors(numberSquares);
	//pick a new random color from array
	pickedColor = pickColor();
	// change colorDisplay to match picked color
	colorDisplay.textContent = pickedColor;

	messageDisplay.textContent = "";
	resetButton.textContent = "NEW COLORS";
	//change colors of squares
	for(var i = 0; i < squares.length; i++){
		if(colors[i]){
			squares[i].style.display = "block";
			squares[i].style.backgroundColor = colors[i];
		}else{
			squares[i].style.display = "none";
		}
	}
	h1.style.backgroundColor = "steelbule";
}

// easyBtn.addEventListener("click", function(){
// 	hardBtn.classList.remove("selected");
// 	easyBtn.classList.add("selected");
// 	numberSquares = 3;
// 	colors = generateRandomColors(numberSquares);
// 	pickedColor = pickColor();
// 	colorDisplay.textContent = pickedColor;
// 	for (var i = squares.length - 1; i >= 0; i--) {
// 		if(colors[i]){
// 		squares[i].style.backgroundColor = colors[i];
// 		}
// 	else{
// 		squares[i].style.display = "none";
// 	}
// 	}
// })
// hardBtn.addEventListener("click",function(){
// 	easyBtn.classList.remove("selected");
// 	hardBtn.classList.add("selected");
// 	numberSquares = 6;
// 	colors = generateRandomColors(numberSquares);
// 	pickedColor = pickColor();
// 	colorDisplay.textContent = pickedColor;
// 	for (var i = squares.length - 1; i >= 0; i--) {
// 		squares[i].style.backgroundColor = colors[i];
// 		squares[i].style.display = "block";
// 	}
// })

resetButton.addEventListener("click", function(){
	reset();
})

colorDisplay.textContent = pickedColor;


function generateRandomColors(num){
	//make an array	
	var arr = []
	//add num random colors to array
	for(var i = 0; i < num; i++){
		// get random color and push into arr
		arr.push(randomColor());
	}
	//return that array
	return arr;
}
function randomColor(){
	// pick a "red" from 0 - 255
	var r = Math.floor(Math.random() * 256);
	var g = Math.floor(Math.random() * 256);
	var b = Math.floor(Math.random() * 256);
	return "rgb(" + r + ", " + g + ", " + b +")";
}
function pickColor(){
	var random = Math.floor(Math.random() * colors.length);
		return colors[random];
}
function changeColors(color){
	for(var i = 0; i < squares.length; i++){
		squares[i].style.backgroundColor = color;
	}
}