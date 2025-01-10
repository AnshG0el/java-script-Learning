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


// write a loop that loop through the array and stop the array when its finds 'chai' store all teas before 'chai' in a new array named 'selectedteas'
let teas=['green tea','black tea','chai','oolong tea']
let selectedTeas=[]
for(let i=0;i<teas.length;i++){
if(teas[i]!='chai'){
    selectedTeas.push(teas[i]);

}
else break;
}
console.log(selectedTeas);

///loops through the array and skips 'paris' store the other cities in a new array named visitedcities
let citiys=['london','new york','paris','berlin']
let visitedCities=[]
for(let i=0;i<citiys.length;i++){
    if(citiys[i]=='paris'){
        continue;
    }
    else{
        visitedCities.push(citiys[i])
    }
}
console.log(visitedCities);

//for of loop
// for(const element of object)
// use a for-of loop to iterate through the aray and stop when the number 4 is found store the number before 4 in an array named smallnumbers
let numbers=[1,2,3,4,5]
let smallNumbers=[]
for(const val of numbers ){
    if(val==4){
        break;

    }
    else{
        smallNumbers.push(val);
    }
}
console.log(smallNumbers);


// for-in loop this loop is used for objects
let citiespopulation={
    'london':8900000,
    'new york':8400000,
    'paris':2200000,
    'berlin':3500000
}
//agr humko keys nikalni hoti h toh kisi object ki toh...           object.keys(object ka nam)
// or agr humko kisi object ki values niaklni hoti h toh hum .....    object.values(object ka naam)
let citypopulations={}
for(const variable in citiespopulation){
    // console.log(variable);
    // is variable me only cities ke name aaye h isme inki values nhi ayi 
    // inki value access krne ke liye humko object ka name or square bracket me variable ka name likhna pdta hai
    // citiespopulation[variable]
    console.log(citiespopulation[variable]);
    //humare pass ek object ki value dusre object me dalne ke liye push methode nhi hota hum aise hi ek object ki value duse object me edalte h
    citypopulations[variable]=citiespopulation[variable]
    console.log(citypopulations[variable]);

}
console.log(citypopulations);
console.log(citiespopulation.berlin)


//.

//forEach loop ..arrayname.forEach(callbackfunction)
// loop se bahar niklne ke liye break likhte h function se bhar aane ke liye return likhte hai 
let teacollection=['earl grey','green tea','chai','oolongtea']
let availableteas=[]
teacollection.forEach(function(tea) {
            if(tea=='chai'){
                        return //yha break nhi likh skte qki ye function h isliye return likhte h 

            }
            availableteas.push(tea);
});
console.log(availableteas);

