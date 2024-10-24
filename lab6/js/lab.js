// index.js - purpose and description here
// Author: Your Name
// Date:

// Constants

// Functions

// this is an example function and this comment tells what it doees and what parameters are passed to it.
function myFunction(param1, param2) {
  // some code here
  // return results;
}

function main() {
  console.log("Main function started.");
  // the code that makes everything happen
}

// let's get this party started
main();


//define Variables
myTransport = ["Walking", "Bus", "Car"];


//create an object for my main ride
myMainRide = {
  make: "Ford",
  model: "Taurus",
  color: "Rusty",
  year: 1995,
  age: function(){
    return 2022 - this.year;
  }
}

//output
document.writeln("Getting around: " + myTransport + "<br>");

document.writeln("My Main Ride: <pre>", 
  JSON.stringify(myMainRide, null, '\t'), "</pre>");

