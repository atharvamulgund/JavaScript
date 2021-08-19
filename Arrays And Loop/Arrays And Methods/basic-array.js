var countries = ["India", "USA", "Japan"]

var states = new Array("Maharastra", "Punjab", "Delhi", "Assam")//Mordern way to declare an array

// console.log(countries[0]);

// console.log(states[2]);

// console.log(states.length);  //"." after array name gives access to the different methods

// Methods in array

states[0] = "Punjab" //to replace an element in an array just write in name of the array and then mentioned its postion and then assignment operatror and the name you want replace with.

var user = ["Atharva", "atharva.mulgund@gmail.com", "19","true"]

user.pop() //pop basically removes an element of the array from the last
// console.log(user);

user.unshift("New Value") //unshift basically ads the element in the front of the array by shift the existing ones
// console.log(user);

user.shift() // shift removes the element added byt the unshift method
// console.log(user);

console.log(user.indexOf("Atharva")); //it gives the postion of the element 

console.log(user.from("Atharva")); //from method converts the string into array