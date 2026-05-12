//data types:type of data

//1. primitive data type: simple| stack memory|not part of object reference|fixed mermory|no Gc method
//2.non primitive data type:Object/references/Class/Arrays/Function/Interfaces/daynamic memory|heap

//primitive data types:
//1.number:
//size:
//range:-
console.log(Number.MAX_SAFE_INTEGER);
console.log(Number.MIN_SAFE_INTEGER);

let i = 10;
console.log(i);
console.log(typeof (i));

let j = 12.33;
console.log(j);
console.log(typeof (j));

const PI = 3.14;
console.log(typeof PI);

//1 byte=8bits
//size:8 bytes=64 bits

//2.string:
let name = 'Rn';
let FirstName = "Automation";

let gender = 'm';
let isExe = '$';
let ph = '989754278';


let ProductName = 'MacBook Pro';
console.log(ProductName);
//size: 2byte per charater
let e = 'abc';//3*2=6byte
console.log('my frist name is:' + FirstName);



console.log("------------------");





//3.boolean
const flag = true;
console.log(flag);
let isEmpActive = false;
//console.log(isEmActive);
console.log(typeof flag);

const rest = 'true';
console.log(typeof rest);
//size:~1 byte =8 bits

console.log("______________");
//range:-9007199254740991 to 9007199254740991
let num = 9007199254740993;
let num1 = num + 1;
console.log(num1);//


console.log("------------------");

//4.BigInt:used to log value /large values
let amt = 90071992547409934666858;
console.log(typeof amt);//bigint

let te = 10n;//consider as Bigint
console.log(typeof te);
//1:14 mint

let x = 10n;
let y = 20n;
console.log(x + y);//Cannot mix BigInt and other types
//BigInt+BigInt is possible to add

let pop = BigInt(100);//Another way writing the big int
console.log(pop);//100n--bigint
console.log(typeof pop);//bigint

console.log(pop / 2n);

console.log("------------------");

//5.null:nothing /no value
//size: 0 to 8 bytes-depends on the (v8)engine
let nyName = null;
let data = null;
console.log(data);
console.log(typeof data);//object --js bug

console.log("------------------");
//undefined:
let v;
console.log(v);//undefined
//size:0 to 8 bytes--depends on the engine

var c;
console.log(c);
console.log(typeof c);//undefined

let sd = "undefined";
console.log(typeof sd);//string

let qa = undefined;
console.log(qa);












