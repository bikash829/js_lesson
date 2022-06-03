let welcome = "Hello, World";

// const welcomeArray = ['orange', 'Mango', 'papaya','Banana'];

// let updated = welcome.slice(0,5 );

// let welcomeArray2 = welcomeArray.slice(',');

// console.log(`${updated}`);

// console.log(welcomeArray2);

console.log(welcome);



/*
let x = NaN;
let y = "5";
let z = x + y;

console.log(z);


console.log(typeof NaN);
*/

// let myNumber = 2; 
// let txt = "";
// while (myNumber != Infinity) {
//    myNumber = myNumber * myNumber;
//    txt = txt + myNumber ;
//    console.log(txt + '\n');
// } 

// const fruits = ["Banana", "Orange", "Apple", "Mango"];

// let value = fruits.unshift();

// console.log(value);


// const myArray = ["Emil", "Tobias", "Linus"];
// const myChildren = myArray.concat("Peter"); 

// myArray.push('something');


// console.log(myChildren);
// console.log(myArray);


// ===================Slice and splice ==============
/*
const myArray = ['Bikash','Akash','Rishob'];

let heppen = myArray.splice(0,3,'Blah','Bleh');  //It returns deleted item 
myArray.splice(0,3);
console.log(heppen);
console.log(myArray);
*/


// const fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
// const citrus = fruits.slice(2,3);

// console.log(citrus);
// console.log(fruits);


// =========array sort ==========

// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// const numberList = [1,4,5,2,3];
// console.log(fruits.sort().reverse());
// console.log(numberList.sort().reverse());

// const points = [40, 100, 1, 5, 25, 10];
// console.log(points.sort());
// console.log(points.sort(function(a, b){return a - b}));


// ================ loop ==================
const numbers = [1,2,5,4,7,8];

// ======for loop =======
/*
text = "";
for( i = 0; i < numbers.length; i++){
    text += 'index is ' + i + ` and calculation of ${numbers[i]} * 2 = ${numbers[i]*2}` + '\n';
}

console.log(text);
*/


// function myFunction(value,index){
//     console.log(`value is ${value} and the index of the value is ${index}`);
// }

// for (i = 0; i < numbers.length; i++){
//     myFunction(numbers[i], i);
// }

// ============foreach method =================
// numbers.forEach((value,index) => {
//     console.log(`The value is ${value} and the index of the value is ${index}`);
// });


// ================== Map() function ==========
// map function returns an array but doesn't print value
let text = '';
 const test = numbers.forEach(value => text += `value is ${value}.`); //foreach return undefine value it mean it returns nothing.

const newArray = numbers.map((value,index)=> value + ` : ${index}`);// map return new array.

// console.log(newArray);
// console.log(test);



// ------------filter funciton ========
// return an array by filterning values from an array 
const filterdValues =  numbers.filter(value => value % 2 != 0);
// console.log(filterdValues);

// -------for in loop 
// for (x in numbers){
//     console.log(numbers[x]);
// }
// const person = {fname:"John", lname:"Doe", age:25};
// for (value in person){
//     console.log( `${value} : ` + person[value]);
// }
// const numbers = [1,2,5,4,7,8];



// =============reduce method---------------
// sum of the array number ******** reduce retunr summitoin of an array

const  sum =  numbers.reduce((accumulator , currentValue, 0) => accumulator + currentValue);



console.log(sum);

