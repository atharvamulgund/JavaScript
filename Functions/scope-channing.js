// Scope Chain:
/*
Consider a circle having two inner circle the big one have purple color adn second inner circle have orange color and the last inner circle have a color of cyan 

so consider cyan does'nt have a beer and he wants one so he can ask the orange circle to provide him a beer and if orange does'nt have the beer he can ask the purple one but the purple can't ask anything to the orange and cyan and prange can't ask anything to cyan. So scope chainnning means the bigger can't ask smaller one but the smaller one can ask the bigger ones.

*/ 

var name = "Atharva" //blue guy

console.log("Line 10", name)

function sayName() {
    var name = "Senapi" //orange guy
    console.log("Line 12", name);
    sayNameTwo()
    function sayNameTwo() {
        console.log("Line 18", name); //cyan guy
    }
}
sayName()