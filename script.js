window.promises = [];

// Do not change the code above this
// add your promises to the array `promises`
const promise1 = new Promise((resolve,reject)=>{
	setTimeout(resolve,2000){
		mydiv
			.innerText = "hello";
	}
	});
const promise2 = new Promise((resolve,reject)=>{
	setTimeout(resolve,3000){
		mydiv.innerText = "hello";
	}
	});
const promise3 = new Promise((resolve,reject)=>{
	setTimeout(resolve,4000){
		mydiv.innerText = "hello";
	}
	});
const promise4 = new Promise((resolve,reject)=>{
	setTimeout(resolve,5000){
		mydiv.innerText = "hello";
	}
	});
const promise5 = new Promise((resolve,reject)=>{
	setTimeout(resolve,1000){
		mydiv.innerText = "hello";
	}
	});
window.promises = [promise1,promise2,promise3,promise4,promise5];
Promise.any(promises).then((value) =>{
	document.getElementById("output").innerText = value;
};

