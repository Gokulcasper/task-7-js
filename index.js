// 1. =========== INCLUDES METHOD ===========

// Concept
// let inputValue = [3,4,5];
// let result = inputValue.includes(4);
// console.log(result)

// User Input Value
// function checkIfInclude(array,value){
// return array.includes(value);
// }
// let inputArray = ["Banana","Apple","Orange"];
// let checkValue = "Apple";
// console.log(checkIfInclude(inputArray,checkValue));

// Dynamic function 
// function checkIfInclude(array,value){
// return array.includes(value);
// }
// let inputArray = prompt("Enter an array (e.g., ['apple', 5 , 10]) ");
// let checkValue = prompt("Enter a value to check (e.g, 'banana' , 10) ");
// console.log(checkIfInclude(inputArray,checkValue));


// 2. =========== INDEXOF METHOD ==========

// Concept
// let inputValue=['z','a','b','c','a','e'];
// let result = inputValue.indexOf('a');
// console.log(result);

// User Input Value
// function checkIndexValue(array,value){
//     return array.indexOf(value);
// }
// let inputArray=[1,33,5,77,1,33,5];
// let indexValue=5;
// console.log(checkIndexValue(inputArray,indexValue));

// Dynamic function
// let inputArray=prompt("enter array Of Value (eg, 123421)");
// let indexValue=prompt("enter find index of Value (eg, 2)");
// let result = inputArray.indexOf(indexValue);
// console.log(result);


// 3. ============ FIND METHOD ============

//Concept
// let inputValue = [23,4.5,"Asia",7,"Europe"];
// let result = inputValue.find((value)=>{
//   return typeof value === 'string';
// })
// console.log(result);

// [1, true, 'apple', 42, 'banana']

// Dynamic function
let inputValue = JSON.parse(prompt("enter the array of finding value"));// [1, true, "apple", 42, "banana"]
// console.log(inputValue);
let result = inputValue.find((value)=>{
return typeof value === 'string';
// if(typeof value === 'string')
// {
//     console.log("String", value)
// }
// else if(typeof value === "boolean")
// {
//     console.log("Boolean", value)
// }
// else if(typeof value === "number") 
// {
//     console.log("Number", value)
// }
})
console.log(result)





