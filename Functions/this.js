// line number 2 is empty code in node

// console.log(this);

/*
this is keyword which gives access to the gobal context
And gobal context differs in different situation
$ In case of node it gives a empty scope
$ In case of browser it gives access to window object.
*/ 

var game = "basketball"

function sayName() {
    var name = "Atharva"
    console.log("Line number? ",this);
}

sayName()
