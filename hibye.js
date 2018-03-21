function sayHi(){
	console.log("Hi");
}
sayHi();
var by=function(){
	console.log("Bye");
}
function callfun(fun){
	fun();
}

callfun(by);
