/**
 * Author:    Bryan G.
 * Created:   10.30.2002
 * 
 * (c) Copyright by Blub Corp.
 **/


function SaraiMath(x){
    var results = ( x % 2 == 0 )
    return results;
}

// Test function
console.log("Is 2 even? ", SaraiMath(2));
console.log("Is 3 even? ", SaraiMath(3));


array = [100, 81, 4, 16, 42, 144, 10000]
console.log("My array", array);


var result = array.map(SaraiMath);
console.log("Test of evenness of array:", result);

var result = array.map(function(x){
    return x ** 0.5;
})

console.log("Squareroot of array:", result);