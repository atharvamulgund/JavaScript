var user = {
    firstname : "Atharva",
    lastname : "Mulgund",
    role : "Admin",
    logincount: 32,
    signedIn : true
}
// left side its the key and right side its the value For eg (firstname is key and "Atharva" is value)

console.log(user.firstname);
// How to access the content of the object? its simple just log and type the objectname and put a "." and enter the name element name you want to access.

// Another way to access
console.log(user["lastname"]);

// manuplating the object
user.logincount = 44
console.log(user.logincount);
console.warn(user)