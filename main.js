var isOn = 0;
function toggleSign(){
	console.log("toggleSign called")
	var sign = document.getElementById("sign");
 	if(isOn == 0){
		console.log("isOn detected to be false");
		sign.classList.remove("off");
		sign.classList.add("on");
		isOn = 1;
	} else {
		console.log("isOn detected to be true");
		sign.classList.remove("on");
		sign.classList.add("off");
		isOn = 0;
	}
}

