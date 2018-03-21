let cleanRoom=function(){
	return new Promise(function(resolve,reject){
	resolve('Cleaned the room');
	});
};

let removeGarbage=function(message){
	return new Promise(function(resolve, reject){
		resolve(message+' remove Garbage');
	});
};

let winIceCream=function(message){
	return new Promise(function(resolve,reject){
		resolve(message+' won icecream');
	});
};

Promise.race([cleanRoom(), removeGarbage(), winIceCream()]).then(function(){
	console.log('one finished')
});
