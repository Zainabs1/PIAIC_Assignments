        // ASSIGNMENT # 5
//TASK 1
// Write a program that uses filter  to remove all negative numbers from an array of numbers.
var array:number[] = [2,-5,6,17,20,-4,3,15,-1,-6]
let removeNegativeNo = array.filter((digit)=>{
    if(digit > 0){
        return true
    }
});
console.log(removeNegativeNo)

//TASK 2
//Given an array of numbers[1,2,3,4,5], use the map method to create a new array where each number is
//multiplied by 2.
var givenArray:number[] = [1,2,3,4,5]
let multiplication = givenArray.map((no)=> no * 2)
console.log("no multiplied by 2:",multiplication)


//TASK 3
/*Given an array of strings["apple","banana","cherry","date","grape"],use the filter method to create
a new array containing only the fruits with more than 5 characters*/
var stringArr:string[] = ["apple","banana","cherry","date","grape"]
let count = stringArr.filter((fruit)=>{
    if(fruit.length > 5){
        return fruit
    }
});
console.log("fruit having more than five characters:",count)


//TASK 4
/*Given an array of numbers[1,2,3,4,5,6,7,8,9,10],use the map and filter methods together to create a
new array containing the squares of even numbers*/
var arrayOfNumber:number[] = [1,2,3,4,5,6,7,8,9,10]
let evenNumb = arrayOfNumber.filter((num)=>{
    if(num % 2 == 0){
        return num
    }
})
console.log("even numbers are ",evenNumb)
let square = evenNumb.map((evenNum)=>{
    return evenNum * evenNum
})
console.log("sqaure of even numbers",square)

//TASK 5
/* Given an array of temperature in celcius[0,10,20,30,40],use the map method to create a new array
where each temperature is converted to farhenheit using the formula(celcius * 9/5) + 32*/
var tempArray:number[]= [0,10,20,30,40]
let tempToFrhenheit = tempArray.map((celcius)=>{
    return celcius * 9/5 + 32
})
console.log("conversion of temperature to farhenheit",tempToFrhenheit)

//TASK 6 
/*Given an array of numbers[3,6,9,12,15,18], use the map and filter methods together to create a new 
array containing the doubled values of odd numbers*/
var numbers1:number[] = [3,6,8,12,15,18]
let oddNum = numbers1.filter((no1)=>{
    if(no1 % 2 != 0){
        return true
    }
})
console.log(oddNum)
let doubleNumbers = oddNum.map((double)=>{
    return double * double
})
console.log(doubleNumbers)

//TASK 7
/* Given an array of names["Alice","Bob","Charlie","David","Emily"],use the forEach method to log each
name with an exclamation mark ata the end, e.g.."Alice!".*/
var nameArray:string[] = ["Alice","Bob","Charlie","David","Emily"]
let neWArray = nameArray.forEach((name1)=>{
    console.log(`"${name1}!"`)
    return name1
})