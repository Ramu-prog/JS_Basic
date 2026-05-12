
//Addition +
console.log(1+1);//2
console.log("1"+1);//11
console.log("1" + "1");//11
console.log(1+"1");//11

//substraction -
console.log(1-"1");//1-1=0  (In case of - string 1 is converted into number: 1 )
console.log("5"-2);//5-2
console.log("5"-"2");//3 bith coverted in number
console.log(5-"Hello");//5-hello =NaN not a number
console.log('hello'-'10');//hello-10 =Nan
console.log('hello'-'hi');//hello-hi =NaN

//Multiplication *
console.log(1* "1"); //1*1=1
console.log(-1+ "1"*1);//-1+1*1 =0
console.log(1+ "1" -2);//"11"-2= 11-2=0

//division
console.log(10/"2");//10/2=5
console.log("10"/"2");//5
console.log(10+ "10"/"2");//10+5=15
console.log(10+"10"+10);//"1010"+10=101010
console.log(10-"10"-10);//10-10-10=-10
console.log(10+"10"-10);//"1010"-10=1000

//unary plus:+
console.log("50"+5);//before string added +sign it will convert to a number
console.log(+"50"+5);//55

let billAmount= "1000";
console.log(+billAmount + 100);


//unary negation:- applied string number
console.log(-"42"+5);//-42+5=-37
console.log(-billAmount +200);//-1000+200=-800

console.log(Number.parseInt(billAmount)+100);

let bmi="17.88";
console.log(Number.parseFloat(bmi)+100);

console.log(-1+"1");//-11
console.log("1"-1);//1-1=0

console.log(-"42"+"5");//-42+ "5" ==>-425
console.log(+"42"+"5");//42+"5"=425
console.log(+"42"+ +"5");//42
console.log(+"42"- "5");//42-5=37

console.log(-1+"1"*1);//-1+1*1=-1+1=0
console.log(4+ -2);//2
console.log(4- -2);

console.log(+"2"- -"2");//2 - (-2)=4

//DMSA
console.log(-1+"1"*1);//-1+1*1=-1+1=0
console.log(4- -2);//4- (-2)=6
console.log(+"2" - -"2");//2- -2=4


