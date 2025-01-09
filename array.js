let city=["london",'tokyo','paris','new york']
// we can access second e


// if we want to copy of array value in a variable but if we want some changes in original array then it sholud not reflect on the duplicate array this is called hard copy 
// and this is achive by [... ] this methode this methode is called spread operator
// example lement using indexes ans the index start from 0

// console.log(city[1]);

// we can add element in the Array with the help of index
// let cities =['mumbai','sydney']
// cities[2]='berlin';
// console.log(cities);

// // but we dont know the length of that array then we use push methode 
 let cities1 =['mumbai','sydney']
cities1.push("berlin");
console.log(cities1);

// if we want to remove a element in the last in aray then we use pop methode 
let cities2 =['mumbai','sydney']
cities2.push("berlin");
cities2.pop();
console.log(cities2);
// pop methode aslso return the pop value 
let cities3=['mumbai','sydney']
const popcity=cities3.pop()
console.log(popcity);
// ek array ko jb hum kisi variable me copy krte h toh vo reference pass krdeta h us variable ko 
// but ek variable ki kisi dusre variable me value copy krte h toh vo only value hi copy hoti h refernce nhi 
// example
let var1=["ansh","goel","sagar","goel"]
let var2=var1;
var2.pop();
// this is called soft copy 
// / in dono ka output same hoga
console.log(var2)
console.log(var1) 




// let ar1=['ansh','goel','sagar','goel']
// let copy=[...ar1];
// ar1.pop();
// // ab in dono ka output same nhi hoga 
// console.log(ar1);
// console.log(copy);


// if we want to merge two array then we use concat methode 
let arr1=['ansh','goel']
let arr2=['ankit','ankur','goel']
// if we want add in these array then we get a string 
// if we add these array im this type 
let res1=[arr1,arr2]//this makes a 2-d array
// console.log(res1);
let res=arr1+arr2;
console.log(res);
let finalres=arr1.concat(arr2)// so we use concat methode//   firstarray name.concat(jo array bad me merge krna h )
console.log(finalres);



let teaMenu=['masala chai','oolong tea','green tea','earl grey']
let menuLeangth=teaMenu.length;
console.log(menuLeangth);

let cityBucketList=['kyoto','london','cape town','vancouver']
// is array me agr koi value ka name dhundhna h vo is array me present h yanhi then we will use .inludes('variable name') 
let isLondonInList=cityBucketList.includes('london')// ye methode result true or false deta h only
console.log(isLondonInList);

// there are many methode which applies on array 
// shift -ye methode array me se shuru ke element hta deta h 
// unshift-ye methode array ke shuru me add kr deta h element 
