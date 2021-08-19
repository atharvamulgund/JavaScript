var isEven =  (a) => { // => is defined as arrow function
    // if (a % 0) {
    //     return true
    // }else{
    //     return false
    // }
    return a%2 === 0
}

// console.log(isEven(2));

var result = [2 ,4, 6, 8].every(isEven)
// console.log(result);
//What does the 'every' method do it will check the given array to the function entered in it. for example in the above case it is comparing array [2,4,6,8] with the isEven function so output will be ture since all of it is even numbers.But if anyone element is false then the output will me false. 

var result1 = [3,5,7,9].every((e) => {
     e%2 === 0
})
console.log(result1);
