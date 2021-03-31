var itemPrice = 52;
var moneyInWallet = 60;
var numberOfFriends = 3;
var ageInYears = 25;
var firstName = "Morgan";
var lastName = "Plagenz";
var middleInitial = "N";

console.log("The item is " + "$" + itemPrice)

console.log("I have " + "$" + moneyInWallet + " in my wallet")

console.log("I'm poor, but thankfully my " + numberOfFriends + " friends support me financially")

console.log("I'm " + ageInYears + " years old")


var moneyLeftOver = (moneyInWallet - itemPrice);
console.log("After I buy the item, I realize that I only have " + "$" + moneyLeftOver + " left it my wallet.");

var friendsPerYear = (numberOfFriends/ageInYears);
console.log("I made " + friendsPerYear + " friends per year.");

var fullName = ("My Name is " + firstName + " " + middleInitial + " " + lastName);
console.log(fullName);

