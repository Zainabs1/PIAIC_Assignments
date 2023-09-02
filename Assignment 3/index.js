// ASSIGNMENT OF CLASS 5
// TASK 1
/* Create a function that takes an array, an index, and a value as parameters. Inside the function, use
the splice method to insert the value at the specified index in the array. return the modified array.*/
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
function createArray(array, index, value) {
    array.splice(index, 0, value);
    return array;
}
var insertValue = [1, 2, 3, 4, 5, 6, 7, 8, 9];
var modifyArray = createArray(insertValue, 1, 6);
console.log(modifyArray);
// TASK 2
/* Implement a simple shopping cart program using an array. Create function to add items,remove items,
and update quantities using the splice method.print the cart's contents after each operation.*/
var mycart = ["Apple", "Orange", "Blueberry", "Grapes", "Mango"];
function addItems(array, index, toAdd) {
    array.splice.apply(array, __spreadArray([index, 0], toAdd, false));
    return array;
}
;
var myIndex2 = 2;
var addItems2 = ["Guava", "Cucumber"];
var addedToCart = addItems(mycart, myIndex2, addItems2);
console.log(addedToCart);
function removeItems(array, index, toRemove) {
    array.splice(index, toRemove);
    return array;
}
;
var myIndex3 = 2;
var removeItems3 = 2;
var removedItems = removeItems(mycart, myIndex3, removeItems3);
console.log(removedItems);
var myCartWithQuantities = ["Apple 3/kg", "Orange 10/kg", "Blueberry 90/kg", "Grapes 78/kg", "Mango 60/kg"];
function updateQuantity(array, index, toDelete, toUpdate) {
    array.splice.apply(array, __spreadArray([index, 0], toUpdate, false));
    return array;
}
;
var index5 = 0;
var toDelete = 0;
var toUpdate5 = ["Apple 10/kg", "Orange 15/kg"];
var result6 = updateQuantity(myCartWithQuantities, index5, toDelete, toUpdate5);
console.log(result6);
// Write a program that uses while loop to print first 25 integers
var i = 1;
while (i <= 25) {
    console.log(i);
    i++;
}
;
// TASK 3
// Write a program that uses a while loop to print the first 25 integrs.
var integer = 1;
while (integer <= 25) {
    console.log(integer);
    integer = integer + 1;
}
// TASK 4
// write a program that uses a while loop to print the 1st ten even numbers
var number = 2;
while (number <= 20) {
    if (number % 2 == 0)
        console.log(number);
    number = number + 2;
}
// TASK 5
/* Create a function that take a positive integer as parameter and uses a while loop to calculate and
return the factorial of that number */
function factorial(fact) {
    var result1 = 1;
    while (fact > 1) { //factorial 1 sy bara isliye likha condition mei ku k 0 or 1 ka factorial nae hota
        //factorial agr 5 ka lena to aisy laity 5*4*3*2*1
        result1 = result1 * fact; /*isline ka mtlb hy ky pehly agr result 1 hy to fact 6 hy to 1*6 hoga
        to result mei 6 add ho jay ga or fact mei aik decrement ho kr 5 ho jay ga phr 5 fact ka or result
         mi jo 6 hy to 5*6 hoga or result mei 30 hoga or fact ka decrement ho kr 4 ho jay ga phr 4 *
         result wala 30 to 4* 30 to result mei 120 ho jay ga or fact ka decrement ho kr 3 ho jata to
         3 * 120 ho jata to result mei 360 hoga or fact ka 3 decrement ho kr 2 ho jata or phr fact ka 2
         or result ka 360 multiply ho kr 360 * 2 ho kr result mei 720 ho jata or jb fact ka decrement ho
         kr 1 ho jata to loop stop ho jata ku k condition mei likha hy ky 1 sy zyada jb tk hoga tb tk
         loop chly gi*/
        fact = fact - 1;
    }
    return result1;
}
var returnFact = factorial(6);
console.log("factorial is", returnFact);
//TASK 6
/* Write a program having an array of numbers if the number is negative it should remove the negative
number from the array*/
var num = [2, 3, -4, -5, 6, -7, 8, -9];
var value = 0;
while (value < num.length) { //is ka mtlb hy ky value array ki length sy jb tk choti hy to loop chlta rhyga
    if (num[value] < 0) {
        num.splice(value, 1); // value , 1 ka mtlb hy ky 1 value delete krni hy
    }
    else {
        value++;
    }
}
console.log(num);
//TASK 7
/*CREATE a function that takes an array of numbers as parameter. use a while loop to calculate and
return the sum of all the numbers in the array*/
function arrayOfNumbers(numb) {
    var index = 0;
    var total = 0;
    while (index < numb.length) {
        total = total + numb[index]; // [index] ye index btata hy ky konsi value kis index pr hy
        index++;
    }
    return total;
}
var array = [10, 20, 30, 4, 6];
var sum = arrayOfNumbers(array);
console.log(sum);
// TASK 8
/* implement a program that takes a list of temperature in celcius as input from the user. convert
each temperature to farhenheit using the formula F = ( C*9/5) + 32 and store the converted
temperatures in an array. use a while loop to perform the conversion for each temperature*/
var celciusArray = [1, 20, 42, 18, 6];
var far = [];
var index = 1;
while (i < celciusArray.length) {
    var farhenhiet = (celciusArray[i] * 9 / 5) + 32;
    far.push(farhenhiet);
    index++;
}
console.log(far);
