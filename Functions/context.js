// Types of context
/*
1. Gobal Context: The code which cannot be excuted in node since it only works browser. It's motive is to collect he information.

2. Varitey Context:
 $ When you call a function it is called execution context
 $ types of execution context : 1. Variable Object 2. Scope Chain 3. this (its a keyword)

 Rules : Functions declarations are scanned and made available,
 Variable Declarations are scanned and made undefined.
*/ 

function tipper(a) {
    var bill = parseInt(a); //parseInt will convert the value of a into integer NOTE: only numerical value can be converted
    console.log(bill + 5);
}

tipper("10")

function bigtripper(a) {
    var bill = parseInt(a)
    console.log(bill + 15);
}

bigtripper(200)

/*
bigtripper(200)

var bigtripper = function (a) {
    var bill = parseInt(a)
    console.log(bill + 15);
}

The above code will an error because of the second rule since bigtripper is function in variable now and it is called even before it is declared so it will show an error as it is undefined.

var bigtripper = function (a) {
    var bill = parseInt(a)
    console.log(bill + 15);
}
bigtripper(200)

Now the above code will give an output since the function in variable is called after it is declared.
*/ 


console.log(name);
var name = "Atharva"

//Hence the gobal context know that we have declared

function sayName() {
    var name = "Atharva"
    console.log(name);
}

console.log(name);