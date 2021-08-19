const names = ["Google", "Facebook", "Instagram", "Amazon"]

for (const n of names){
    console.log(n);
}

const symbols = {
    yt: "Youtube",
    ig: "Instagram",
    fb: "Facebook",
    lco: "LearnCodeOnline"
}

for (const n in symbols){
    console.log(n);
    console.log(`${symbols[n]}`);
}

// for of is used for array and for in is used for object 
// for in loop gives the key back

