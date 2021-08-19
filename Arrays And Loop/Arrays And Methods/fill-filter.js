var testArray = [2,4,6,9,3,4,8,1]
// console.log(testArray.fill(3)); //fill method basically replaces all the values of array with value provided to it, so in the above example it has provided value of 3 so it will replace all the element of the array with 3, it also works with string data type. 

// console.log(testArray.fill("A", 2)); // so 2 here is the position of the array, from where it should start replacing

// console.log(testArray.fill("M", 4, 6));// so 6 here is the ending position of the array, so basically it will replace value from poistion 4 to 6 by M

const myNumbers = [1,5,3,7,90,2,6,9,12]

const result = myNumbers.filter((num)=>
    num!=90
)
//NOTE Whenever you dont have any value to return dont use '{}' this brackets

console.log(result);
// So basically what filter does is it applies the conditions mentioned to it and then it will remove it from the array For eg:
const result1 = myNumbers.filter((a)=>(
    a < 10
))

console.log(result1);
//so in the above example filter will removes those elements from the array which are greater than 10



// Whenever you are passing a range the first value which is the start point is always inclusive i.e. it is included and the last value or the end range is always exculsive i.e. it is exculded