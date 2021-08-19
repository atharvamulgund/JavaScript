var user = ["Hashirama", "Tobirama", "Hiruzen", "Minato", "Tsunade", "Kakashi", "Naruto"]

console.log(user.slice(1, 4)); //So what slice does is it basically cut the array in the range it has been provided, so in the above example whatever element of the array are in the range of postion 1 to 4 will be the output and the rest will be removed.
// NOTE in the above example the range is 1 to 4 so whatever is the element in the 1 position it will be inculded but whatever element is there in 4th position will exculded 
console.log(user.slice(1));// whemever there is only one position mentioned the element before that postion will be removed

user.splice(1,3,"Madara","Izuna") 
console.log(user);
// In the above eg 1 is the start positon but 5 is the not the end position, it is the count value in this case. So count 3 from the postion number 1 then just delete them off and instead add the value which is provided(Madara in this case)
// Confusing Af 
// Inshort it will remove all the element from 1 to 3 and then it will replace it by the given value