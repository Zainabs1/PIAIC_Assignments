               // ASSIGNMENT OF CLASS 5
// TASK 1
/* Create a function that takes an array, an index, and a value as parameters. Inside the function, use
the splice method to insert the value at the specified index in the array. return the modified array.*/

function createArray(arr:number[], index1:number,value:number){
    arr.splice(index1,0,value)
    return arr
}
let insertValue:number[] = [1,2,3,4,5,6,7,8,9]
let modifyArray = createArray(insertValue,1,6) 
console.log(modifyArray)

// TASK 2
/* Implement a simple shopping cart program using an array. Create function to add items,remove items,
and update quantities using the splice method.print the cart's contents after each operation.*/
const mycart:any[] = ["Apple", "Orange", "Blueberry", "Grapes", "Mango"];

function addItems(array:any[], index:number, toAdd:any[]) :any[]{
    array.splice(index,0,...toAdd);
    return array;
};

const myIndex2 : number = 2;
const addItems2 : string[] = ["Guava", "Cucumber"];
const addedToCart : any[] = addItems(mycart, myIndex2, addItems2);
console.log(addedToCart);

function removeItems(array:any[], index:number, toRemove:number):any[]{
    array.splice(index, toRemove);
    return array;
};

const myIndex3 : number = 2;
const removeItems3 : number = 2;
const removedItems = removeItems(mycart, myIndex3, removeItems3);
console.log(removedItems);

const myCartWithQuantities:any[] = ["Apple 3/kg", "Orange 10/kg", "Blueberry 90/kg", "Grapes 78/kg", "Mango 60/kg"];
function updateQuantity(array:any[], index:number, toDelete:number, toUpdate:any[]): any[]{
    array.splice(index,0,...toUpdate);
    return array;
};

const index5:number = 0;
const toDelete:number = 0
const toUpdate5 :any[] = ["Apple 10/kg", "Orange 15/kg"]; 
const result6 = updateQuantity(myCartWithQuantities, index5, toDelete, toUpdate5);
console.log(result6);

// Write a program that uses while loop to print first 25 integers
let a : number = 1;
while(a <= 25){
    console.log(a);
    a++;
};

// TASK 3
// Write a program that uses a while loop to print the first 25 integrs.
var integer:number = 1
while(integer <= 25){
    console.log(integer )
    integer = integer + 1

}
// TASK 4
// write a program that uses a while loop to print the 1st ten even numbers
let number = 2
while(number <= 20) {
    if(number % 2 == 0)
    console.log(number)
    number = number + 2
}

// TASK 5
/* Create a function that take a positive integer as parameter and uses a while loop to calculate and
return the factorial of that number */

function factorial(fact:number){
    var result1 = 1
    while(fact > 1){  result1 = result1 * fact 
    fact = fact - 1
    }
    return result1
}

var returnFact:number = factorial(6)
console.log("factorial is",returnFact)

//TASK 6
/* Write a program having an array of numbers if the number is negative it should remove the negative 
number from the array*/

var num:number[] = [2,3,-4,-5,6,-7,8,-9]
var value = 0
while(value < num.length){ 
    if(num[value] < 0){
    num.splice(value,1)  
}
else{
    value++
}

}
console.log(num)
 
//TASK 7
/*CREATE a function that takes an array of numbers as parameter. use a while loop to calculate and 
return the sum of all the numbers in the array*/
function arrayOfNumbers (numb:number[]):number{
    var index = 0
    var total = 0
    while(index< numb.length){
        total = total + numb[index] 
        index++
    
    }
    return total

}
var array:number[] = [10,20,30,4,6]
var sum = arrayOfNumbers(array)
console.log(sum)

// TASK 8
/* implement a program that takes a list of temperature in celcius as input from the user. convert
each temperature to farhenheit using the formula F = ( C*9/5) + 32 and store the converted
temperatures in an array. use a while loop to perform the conversion for each temperature*/
var celciusArray:number[] = [1,20,42,18,6]
var far:number[]= []
var index:number = 1

while(index<celciusArray.length){
    var farhenhiet:number = (celciusArray[index] * 9/5) + 32
     far.push(farhenhiet)
     index++
}
console.log(far)

