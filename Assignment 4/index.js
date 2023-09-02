"use strict";
// ASSIGNMENT 4
// TASK 1
// develope a program that calculates and prints the sum of the first n even numbers using for loop
var num1 = 0;
for (let i = 0; i < 16; i++) {
    if (i % 2 == 0) {
        num1 = num1 + i;
    }
}
console.log("sum of even number is :", num);
// TASK 2
/* implement a program that uses a for loop to iterate through an array of numbers and print only the
even numbers*/
var evenNum = [1, 3, 4, 6, 8, 9, 2];
for (let i = 0; i <= evenNum.length; i++) {
    if (evenNum[i] % 2 == 0) {
        console.log(evenNum[i]);
    }
}
//TASK 3
/* Implement a program that uses a loop to iterate through an array of numbera and remove all the even
Numbers from them and just leave the odd ones.*/
var evenOdd = [7, 12, 15, 16, 17, 5, 18];
for (let x = 0; x <= evenOdd.length; x++) {
    if (evenOdd[x] % 2 == 0) {
        evenOdd.splice(x, 1);
    }
}
console.log(evenOdd);
// TASK 4
/* Write a program that defines a function to calculate the area of a circle. the function should take
the radius as input and return the calculated area.*/
function calculateArea(radius) {
    var pi = 3.1416;
    var findArea = pi * Math.pow(radius, 2);
    return findArea;
}
var areaOfCircle = calculateArea(5);
console.log("area of a circle:", areaOfCircle);
// TASK 5
/* Develope a program that reads a list of grades and uses the splice method to remove failing
grades (below 50) from the array*/
var arrayOfGrades = [56, 45, 89, 35, 62, 75, 49];
for (let i = arrayOfGrades.length - 1; i >= 0; i--) {
    if (arrayOfGrades[i] <= 50) {
        arrayOfGrades.splice(i, 1);
    }
}
console.log("pass students", arrayOfGrades);
//TASK 6
// Write a program that uses a function to find the largest element in an array of numbers.
function findLargest(num) {
    let largest = num[0];
    for (let i = 0; i <= num.length; i++) {
        if (num[i] > largest) {
            largest = num[i];
        }
    }
    return largest;
}
let numb1 = [10, 55, 20, 15, 25];
let returnArray = findLargest(numb1);
console.log("the largest element in an array is:", returnArray);
