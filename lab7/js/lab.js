/**
 * Author:    Bryan
 * Created:   10.28.2024
 * 
 * (c) Copyright by Blub Corp.
 **/
//sortUserName - a function that takes user input and sorts the letters
// of their name
function sortUserName() {
    var userName = window.prompt("Hi player, what is your username.");
    console.log("userName =", userName);
    //split string to array
    var nameArray = userName.split('');
    console.log("nameArray =", nameArray);
    //sort the array
    var nameArraySort = nameArray.sort();
    console.log("nameArraySort =", nameArraySort);
    //join array back to a string
    var nameSorted = nameArraySort.join('');
    console.log("nameSorted =", nameSorted);
    //note that u could have done the above lines as a single lin:
    //  userName.toLower().split('').sort().join("")
    return nameSorted;
}

//output
document.writeln("Unfortunately your username is taken but here's one that's not: ",
    sortUserName(), "</br>");