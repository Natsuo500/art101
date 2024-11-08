/**
 * Author:    Bryan Galvan
 * Created:   11.04.2024
 * 
 * (c) Copyright by Blub Corp.
 **/

// add button to challenge section
$("#challenge").append("<button id='button-challenge'>Ok what happened</button>");

// add a click listener to the challenge button
$("#button-challenge").click(function(){
    // now add (or subtract) the "special" class to the section
    $("#challenge").toggleClass("special");
});


// add button to Problems section
$("#Problems").append("<button id='button-Problems'>let's not stick here and find out </button>");

// add a click listener to the Problems button
$("#button-Problems").click(function(){
    // now add (or subtract) the "special" class to the section
    $("#Problems").toggleClass("special");
});


// add button to Results section
$("#Results").append("<button id='button-Results'>Type shit</button>");

// add a click listener to the Results button
$("#button-Results").click(function(){
    // now add (or subtract) the "special" class to the section
    $("#Results").toggleClass("special");
});
