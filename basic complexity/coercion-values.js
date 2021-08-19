// coercion and true and falsy values
// undefined null ' ' NaN are the falsy values which means when a var value is any of this then the output is gonna show for example check the below code

var noob = null 

if (noob) {
    console.log("uninstall your game");
}

// When you use '==' js asumes that you want compare independent if datatype  but when you use '===' it will check the datatype and it will have a strick check ofr example check below codes

var noob = "1"
if (1 == noob) {
    console.log("uninstall your game");
}

var pro = "0"
if (0 === pro) {
    console.log("Sorry you are not");
}
// The above condition will not excute since the value of pro is string and in condition the datatype is numeric


// this is called corecion