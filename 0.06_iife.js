//Immediately Invoked Functional Expression
//

//create a greeting function - take a name parameter
//and it should print Hello + name

var greeting = function(name){
	console.log("Hello " + name);
}("big butt");

(function( value){
	console.log(value)
})(15)

var myIIFE = (function(){
	var privateVar = "secrets";

	return {
		reveal; function() {
			console.log( privateVar );

		}
	}
})();
console.log(myIIFE.privateVar);
myIIFE.reveal();