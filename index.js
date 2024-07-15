const cars = ["BMW", "Volvo", "Mini"];

for(car of cars){
	console.log(car);
}








const counter = document.getElementById("counter");

const increaseButton = document.getElementById("increase");

const decreaseButton = document.getElementById("decrease");

const resetButton = document.getElementById("reset");


const buttons = document.getElementById("buttons");


increaseButton.addEventListener("click",function(){
	counter.innerText = parseInt(counter.innerText) + 1;
});


decreaseButton.addEventListener("click",function(){
	counter.innerText = parseInt(counter.innerText) - 1;
});


resetButton.addEventListener("click" , function(){
	counter.innerText = 0;
	counter.remove();
})