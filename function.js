// function function-name(perameter){
//     block of code---------
//     --------------
//     ------------
// }
// functuion ko agr hum return kra rhe h toh uski value us variable me jayegi jha se vo call hua hai 
function maketea(typeoftea){
    return `making ${typeoftea}`;
}

let teaorder=maketea("lemon tea")//yha call hua h function toh return bhi yhi krega ye isliye iski value ek variale me store krayenge
console.log(teaorder);



function A(value){
    function b(){
        return `hello b`
    }
   return b()
}
let final=A();
console.log(final);


//arrow function 
()=>{}//this is syntax of arrow function
const a=()=>{}

//write a arrow functuion named calculatetotal that takes two perameters price and quantity the funvtuon should return the total cost by multyplying the pricve and quantity
const calculatetoal=(price,quantity)=>{
    return price*quantity;
}
let answer=calculatetoal(10,20)
console.log(answer);