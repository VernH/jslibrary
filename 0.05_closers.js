// A closer gives you access to the variables set in a function
//after the function has completed and returned,

//Helps keep variables from getting pushed into global scope
//Degree of protection. Variables cant't be overwritten.

var friend = {};

var setAge= function(myAge) {
return{
	getAge : function
	var birthday = "7/13/1986";
		return myAge;
	},
	getBirthday : function(){
		return birthday;
		}
	}
}

friend.age = setAge(36);
console.log(friend.age);
console.log(friend.age.getAge());
console.log(friend.age.birthday);
console.log(friend.age.getBirthday());
aurora.age = setAge(36);
aurora.age.setBirthday("4/12/1980");
console.log(aurora.age.getBirthday());