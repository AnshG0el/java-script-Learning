// primitive data types 

// in js there are many premitive datatypes like number string boolean symbol etc but inko hum var or let ki help se store kar sakte hain .....
var a=10;
// this a is a variale which stores the value 10
let b=20;
console.log(a);
console.log(b);
// var or let me difference ...let is a function scope but var is a global scope and let is came in es6 2015
let string="my name is ansh";
console.log(string);

// agr hum kisi string ko number me convert krne ka try karte hai toh vo NAN deta h example-
var str="abc";
console.log(Number(str));
// type of NAN is a number 
// jab hum undefined ko number me convert krne ka try karte hai toh vo bhi NAN output deta h....and jb jb null ko number me convert krne ka try karte hai toh vo 0 output deta hai

//  non primitives data types 
// array ,function,oject are the non premitive data types 
// in one array we can store the multi data types value like string number array and also object and function 

let arr=["ansh",23,["ansh","goel"],{name:"ansh",lastname:"goel"}] 
// now we access the value of this array with index 
console.log(arr[0])
console.log(arr.length);
// agr hum array ki sari value access krna chahte h toh toh hum usko foreach loop ki help se access kr skte h 
arr.forEach(function(val){
console.log(val);
}
);


