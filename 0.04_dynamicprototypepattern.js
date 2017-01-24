var peopleDynamicProto = function(name, age, state){	

	this.age = age;
	this.name = name;
	this.state = state;

	if( typeof this.printPerson !== 'function') {

		peopleDynamicProto.prototype.printPerson = function(){/*this is saying if this.printPerson is undefined */
			console.log(this.name + ", " + this.age + ", " + this.state);/*then create this function within the prototype space*/
		};
	}
};


var person1 = new peopleDynamicProto('john',23,'CA');

person1.printPerson();
/*console.log('name' in person1); this would be true instead of person1.prinPersongi
console.log(person1.hasOwnProperty('name')); this would be true
*/