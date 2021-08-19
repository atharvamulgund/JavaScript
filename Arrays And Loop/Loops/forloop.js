// for(let i =0; i <= 10; i++ ){ 
//     console.log(i);
// }
//i is index to ittarate
const myStates = ["Maharastra", "Punjab", "Kerla",1947, "Karnataka", "Goa"]

for (let i = 0; i < myStates.length; i++) {
    if (typeof myStates[i] !== 'string') continue
    console.log(myStates[i]);
}

// if we put "=" in i < myStatest.length then in the output its gonna give a undefined