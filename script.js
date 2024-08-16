// Chap# 03 : Variable for number

// Q 01 : Declare a variable called age & assign to it your age. Show
// your age in an alert box.


var age = 15;
alert("I am " + (age) + " years old ");

// Q 02 : Declare & initialize a variable to keep track of how many
// times a visitor has visited a web page. Show his/her
// number of visits on your web page. For example: “You
// have visited this site N times”.

var N = 14;
alert("You have visited this site " + (N) + " times ");

// Q 03 : Declare a variable called birthYear & assign to it your
// birth year. Show the following message in your browser:

var birthyear = 1997;
document.write(" My birth year is ");
document.write(birthyear + "<br/>");

document.write('Data type of my declared variable is number' + "<br/>");

// Q 04: A visitor visits an online clothing store
// www.xyzClothing.com . Write a script to store in variables
// the following information:
// a. Visitor’s name
// b. Product title
// c. Quantity i.e. how many products a visitor wants to
// order
// Show the following message in your browser: “John
// Doe ordered 5 T-shirt(s) on XYZ Clothing store”.

var visitorsName = " <b> John Deo </b>";
var productTitle = "<b>T-shirt </b>";
var quantity = "<b> 5 </b>";
var clothingstore = "<b>XYZ</b>";

document.write((visitorsName) + " ordered " + (quantity) + " " + (productTitle) + "(s) on " + (clothingstore) + " Clothing store ")