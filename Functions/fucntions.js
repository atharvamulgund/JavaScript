//When you want to reuse a block of code again and again we use function

function hello(name) {
    console.log("I am function");
    console.log("I am function", name);
}

//hello("Arthur"); //When you want to call a function
//hello("senapi");//when you refer a fucntion

// in the above case when you wrote name in () then it becomes a variable an when you call the fucntion and in () you give some values then that value is assigned to the variable

function attempt() {
    return "I have thrown by return"
}

var returnfunction = attempt()
console.log(returnfunction);

// use return attribute and consoling is different things.