// let i=11;
// let j= i++ +  ++i ;

// console.log(i);//13
// console.log(j);//24

// let a =11, b=22;
// let c= a+b + a++ + b++  + ++a + ++b;
// //11+22 +11+22+13+24                     =
// console.log("a=" +a);//13
// console.log("b=" +b);//24
// console.log("c=" +c);//103

// let i = 0;
// let j = i++ - --i + ++i - i--;
// console.log(i);//0
// console.log(j);//0


// let i=19, j=29,k=9;
// let m = i-- -j-- -k--;
// console.log("i=" +1);//18
// console.log("j=" +j);//20
// console.log("k=" +k);//-9
// console.log("m=" +m);//-19

// let i=11;
// let j = --(i++);//error
// console.log(++11); //error

let m=0 , n=0;
let p= --m* --n * n-- * m--;
console.log(p);
console.log(m);
console.log(n);

//console.log(++true);

let a= 10n;
console.log(++a); //11n

let d=1.5, D=2.5;
console.log(d++ + ++d); 1.5+3.5 //5.0
console.log(d);
console.log(D);







