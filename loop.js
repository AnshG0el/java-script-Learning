// while 
// do while
// for 
// for in
// for of 
// for Each
//sum of 1 to 5
let i=1;
let sum=0;
while(i<=5){
    
    sum=sum+i;
    i++;
}
let Sum=sum;
console.log(sum);


//push in array countdown 5 to 1 value using while loop
let j=5;
let countdown=[];
while(j>=1){
    // console.log(j);
    countdown.push(j)
    j--;
}
console.log(countdown);

//we take input from prompt and then that input push in a array using a loop and
// let teaCollection=[]
// let uservalue
// do {
//     uservalue= prompt(`enter the favorite tea (to stop type "stop") `);
//     if(uservalue!=stop){
//         teaCollection.push(uservalue);
//     }
// } while (uservalue!='stop');
// console.log(teaCollection);


//multiplicates each element in the array 
// let multy=1;
arr=[2,4,6]
let multipliedNumber=[]
for(let i=0;i<arr.length;i++){
    multy=arr[i]*2;
    multipliedNumber.push(multy);
}
console.log(multipliedNumber);



let cities=['paris','new york','tokyo','london'];
let citylist=[]
for(let i=0;i<cities.length;i++){
citylist[i]=cities[i]
}
console.log(citylist);

