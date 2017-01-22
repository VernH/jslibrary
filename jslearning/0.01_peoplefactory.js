var peopleFactory = function(name, age, state){

	var temp ={};       /*this is the same as var temp = new Object*/

	temp.age = age;
	temp.name = name;
	temp.state = state;

	temp.printPerson = function(){

		console.log(this.name + ", " + this.age + ", " + this.state);
	};

	return temp;
};

var person1 = peopleFactory( 'john', 23, 'CA');
var person2 = peopleFactory( 'kim', 27, 'SC');

person1.printPerson();
person2.printPerson();

/*We created a factory function...(name,age,state)... within it we created an object....var temp ={};....*/
/*We attatched the properties to it wich are repassed as peramiters....so person1 is the temp that has been created */

