               // ASSIGNMENT # 2
// TASK 1
// program that convert temperature from celsius to farhenheit and vice versa
var celsius:number = 30;
var tempCTF:number = (celsius * (9/5)) + 32;
console.log("Temperature from celsius to fahrenheit:",tempCTF);

var fahrenheit:number = 50;
var tempFTC:number = (fahrenheit - 32) * 5/9;
console.log("Temperature from fahrenheit to celsius:" ,tempFTC);

// TASK 2
// program that calculate sthe percentage
var total:number = 1100;
var obtain:number = 959;
var percentage:number = obtain/total * 100;
console.log("percentage:",percentage);

// TASK 3
//program that convert given number of days into week and days such as 17 days = 2 weeks and 3 days
var givenNumber:number = 28;
var daysInWeek:number = 7;
var daysToWeek:number = givenNumber/daysInWeek;
console.log("convert days into week:",daysToWeek);

//TASK 4
/* program taht calculates the discount for the products base on its price.if the price is above 
$100,apply a 10% discount otherwise, apply 5% discount.*/

var price:number = 1000;
if(price >= 100){
    var discount:number = price * 10/100;   
    var final_Price:number = price - discount ;
    console.log("there is a 10 % discount on it", final_Price)
}
else{
    var discount2:number = price * 5/100;
    var final_Price2:number = price - discount2;
    console.log("Apply a 5 % discount on it",final_Price2)
}

//TASK 5
/* program that determine the category of user-provided age. if the age is between 0 and 12
,print "child". if its between 13 and 19, print "teenager". otherwise print "adult".*/

var userAge:number = 18;
if(userAge < 12 && userAge >= 0){
    console.log("child")
}
else if(userAge < 19 && userAge >= 13){
    console.log("Tenager")
}
else{
    console.log("Adult")
}

// TASK 6
/* program that takes temperature and check it. if it is cold then suggest the user to 
wear warm clothes and so on according to the wheather.8*/

var temperature:number = 15
if(temperature <= 10 ){
    console.log("you have to wear warm clothes")
}
else if(temperature <= 25 && temperature >=10){
    console.log("you have to wear lightweight fleece clothes")
}
else{
    console.log("you have to wear cotton clothes")
}
    

// TASK 7
/* program that checks if a number is divisible by 3 or 5 or both or not 
divisible by anyone show output accordingly */

var numbers:number = 30
if(numbers% 3 == 0 && numbers% 5 == 0){
    console.log("number is divisble by both 3 or 5")
}
else if(numbers % 3==0){
    console.log("number is divisible by 3")
} 
else if(numbers% 5 == 0){
    console.log("number is divisible by 5")
}
else{
    console.log("number is not divisible by anyone")
}


//TASK 8
// program that checks if a given year is leap year or not
var year:number = 1600      
if(year%4==0 && (year%100 != 0 || year % 400 == 0)){
    console.log("it is a leap year")
}
else{
    console.log("it is not a leap year")
}


// TASK 9
/* develope a program that determine days of the week.Ask the user for a number(1-7)
and use nested if statment to print the corresponding days name */
var day:number = 6
switch(day){    
    case 1:
        console.log("Today is Monday")
        break;
    case 2:
        console.log("Today is Tuesday")
        break;
    case 3:
        console.log("Today is Wednesday")
        break;
    case 4:
        console.log("Today is Thursday")
    case 5:
        console.log("Today is Friday")
        break;
    case 6:
        console.log("Today is Saturday")
        break;
    case 7:
        console.log("Today is Sunday")
        break;
    default:
        break;
}


//TASK 10
/* program that takes that the number of units consumed by a user if it is greater 
than 100 then add 10 % tax, if greater than 200 then add 15 % tax so on upto if greater 
than 500 then add 25 % of tax*/

var consumedUnits:number = 280;
var unitsPrice = 20;
var applyTax;
if(consumedUnits > 100 && consumedUnits < 200 ){
    applyTax = consumedUnits * 0.1  // 10/100
    var totalBill:number = (consumedUnits + applyTax) * unitsPrice
    console.log("total bill with 10% tax is :",totalBill)
}
    else if(consumedUnits> 200 && consumedUnits < 500){
        applyTax = consumedUnits * 0.15  //15/100
    var totalBill2:number = (consumedUnits + applyTax) * unitsPrice
    console.log("total bill with 15% tax is :",totalBill2)
}
else if(consumedUnits >= 500){
    applyTax = consumedUnits * 0.25 // 25/100
    var totalBill3:number = (consumedUnits + applyTax) * unitsPrice 
    console.log("total bill with 25% tax is :",totalBill3)
}
else{
    console.log("not valid")
}

