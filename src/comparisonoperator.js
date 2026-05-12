//10 is equal to 10
//name is equal to name

//== :Loose equality :comapre to value only
//=== :Strict equality :comapre both value and type

console.log(10 == 10);// true
console.log(10 == '10');// true
console.log(10 == "10");// true

console.log(10 === 10); //true
console.log(10 === "10");//flase
console.log(10 === '10');//flase
console.log('10' === 10);//false

let bill = "10000";
console.log(bill == 10000);//true
console.log(bill === 10000);//false bcz one is string type another one is number type 

console.log('10' === "10");//true becz both are string

//;true=1
//In js true is also represented by 1, 
//,false=0
// and fasle alsways represented by  0 
//There is not .equals method in js string can also compare with == & ===.
console.log(true == 1);//true
console.log(1 == true);//true

console.log(true === 1);//false true is boolean and 1 is number
console.log(false == 0); //true

console.log('somika' == 'Somika');//false casesensitive
console.log('somika' === 'Somika');//fasle

console.log('A' == 'a');//false
