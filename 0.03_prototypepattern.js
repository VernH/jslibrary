var peopleProto = function(){	

};

peopleProto.prototype.age = 0;			/*<<<<this is the prototype*/
peopleProto.prototype.name = "no name";
peopleProto.prototype.city = "no city";

peopleProto.prototype.printPerson = function(){
	console.log(this.name + ", " + this.age + ", " + this.city);
};
var person1 = new peopleProto();/*<<<<<this is the objoect*/


person1.name = 'john';
person1.age = 23;
person1.city = 'CA';

console.log('name' in person1); /*it has property in object*/
/*peron1.printPerson();
*/
console.log(person1.hasOwnProperty('name'));



/*
Pizza.getCrust = function(){
	return this.crust;
};

or	Pizza.prototype.getCrust = function(){
			return this.crust;
}*/

/* the disadvantage of prototype pattern is if you have a property as object it creates confusion*/