//In js everything is a number data type not like as Java byte short int float double
console.log(9 / 2); //4.5 but in java 4 
console.log(9.0 / 2);//4.54

console.log(0 / 9);//0
console.log(0 / 9.2); //0

console.log(9 / 0);//Infinity but in java AE
console.log(9.2 / 0);//Infinity

console.log(0 / 0);//NaN
console.log(0.0 / 0);//NaN
console.log(0 / 0.0);//NaN
console.log(0.0 / 0.0);//NaN

console.log("9" / 2);// converted in number 9/2 then =4.5
console.log("9" / "2");//9/2=4.5

//moduls operator  gave remainder value
console.log(9 % 2); //1
console.log(8 % 2);// 0
console.log(100 % 3);//1
console.log(-9 / 2);//4.5

let flag = true;
console.log(typeof (flag));

//cant mix big integer to other number
let x = 10n;
console.log(x + 1);//error
console.log(x + 1n);//11n
//1:33