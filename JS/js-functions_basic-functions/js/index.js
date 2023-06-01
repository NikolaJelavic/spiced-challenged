console.clear();

/*
1: Create the data for a book in an online store. Create variables for the following data:
  - the book title
  - the author
  - the rating
  - the number of sales
*/

// --v-- write your code here --v--
const title = "E bas vam hvala";
const author = "Marko Vidojkovic";
const rating = 7.8;
const numberOfSales = 161;
// --^-- write your code here --^--

/*
2: Log all variables to the console, for example:

Title: The Lord of the Javascript
Author: Mario
Rating: 4.2
Sales: 120

Increase the number of sales and change the rating of the book afterwards.
Then log all variables to the console again.
*/

// --v-- write your code here --v--
console.log(`Title of the book : ${title} \nAuthor: ${author} \nRathing: ${rating}\nNumber of sales: ${numberOfSales}`);
console.log("-----------------------------------");
console.log(`Title of the book : ${title} \nAuthor: ${author} \nRathing: ${rating+2}\nNumber of sales: ${numberOfSales+3}`);
// --^-- write your code here --^--

/*
3: This code is quite repetitive and hard to read.
 - Write a function called logBookData which console logs all
   variables when it is called.
 - Then replace the console logs above with this function.
 - Now increase the number of sales 2 more times and log the data after each increase.
*/

// --v-- write your code here --v--
console.log("-------------------");
function logBookData() {
console.log(`Title of the book : ${title} \nAuthor: ${author} \nRathing: ${rating}\nNumber of sales: ${numberOfSales}`);
  
}
logBookData();
// --^-- write your code here --^--

function logBookData2(numberOfSales) {
  numberOfSales=numberOfSales+2;
  console.log(`Title of the book : ${title} \nAuthor: ${author} \nRathing: ${rating}\nNumber of sales: ${numberOfSales}`);
  

}
logBookData2(numberOfSales);
