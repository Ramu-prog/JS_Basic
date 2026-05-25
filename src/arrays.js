//1.Arraye means:collection of different or similar type of data is called array  in JS
//2.Array:[]
//range of given array:0 to3;
//lenght is 4 but index is 0 t0 3
//In js array is a object and it is dynamic in nasture 
//In java array is a object but it is static & dynamic in nature.



let num = [10, 20, 30, 40];
console.log(num);
console.log(num[-1]);//undefined
console.log(num[0]);
console.log(num[1]);
console.log(num[2]);
console.log(num[4]);//undefined

//lowestindex =0;
//highestindex =length-1;
//length= hi+1;

console.log(num.length);
console.log("lowestIndex =" + 0);
console.log("highestIndex =" + (num.length - 1));

num[4] = 50;
console.log(num);

console.log(num.length);

num[10] = 100;
console.log(num);
console.log(num[8]);
console.log(num[9]);
console.log(num[10]);

num[8] = 90;
console.log(num);


console.log('____________________');

let stname = ["tom", "jerry"];
console.log(stname);
stname[0] = "mickey";
console.log(stname);
stname[5] = "donald";
console.log(stname);

console.log('____________________');

let empData = ['tom', 101, 'SDET', 'IBM', true, 12.5];
console.log(empData);

console.log(typeof empData);//object are non primitive data type.




