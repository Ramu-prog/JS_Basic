//data types:type of data
//number boolean string
//hoisting is never used in playwright
//var ,let, const

//1.var :used in old js--never use it in modern js/tool/pw
//duplicate allowed in var
//Decleration
var x=10;
var x=20;
var x=30;
console.log(x);

//Reassignment

var y = 200;
y = 300;
y = 400;

console.log(y);

//Hoisting
console.log(t)//undefined
var t=10;  //js bug
console.log(t);

//2.let:
//Declaration:Re-decleration not allowed with let
//Pw we can use always let
let e=50;
console.log(e);

let a;
console.log(a);//undefined

//Reassignment:
let total=900;
total=970;
total=1000;
console.log.apply(total);

//Hoisting is allowed but with error at RT
console.log(h);// can not access 'h' before initialization
let h=25;//Error


//3.constant// final in java

const PI = 3.14;
//PI=90.00; //TypeError:Assigmnent to constant variable.
//Assigmnet is not allowed in const
const LOGIN_TITLE='LoginPage';
const DAYS_IN_Week=7;

//Title, Url, days,month week,pi hr,Logo,base url

const days=7;
//days=10;
let salary =100*days;
console.log(salary);

//duplicate not allowed
//const tr=100;
//const tr=200;

//const pi; //Error
//const is always decelered

console.log(pi);// Cannot acces 'pi' before initialization
const pi=3.14;










