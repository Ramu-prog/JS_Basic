//Whileloop 
// In while loop we have to write the condition and initialization and increment separateely
// it is used when we dont know how many times the loop will excute
// Blank condition is not  possible in while loop.
//1 to 10

let i = 1;

while (i <= 100) {
  console.log(i); //1 2 3 4 5 6 7 8 9 10
  i++;//11

  //++i;
  //i=i+2;
}

console.log('--------------');

while (true) {
  console.log('welcome to while loop');
  break;
}

console.log('----------------');

let j = 1;

while (j <= 50) {
  console.log(j);

  if (j % 5 == 0) {
    break;
  }

  j++;
}
console.log(j);//5

console.log('-----------');

//For loop

//1+10
for (let p = 1; p <= 10; p++) {
  console.log(p);
}

//10 to 1
for (let m = 10; m >= 1; m--) {
  console.log(m);
}

// 1 to 10 it is for loop but it looks looks like while loop
let n = 1;
for (; n <= 10;) {
  console.log('hello JS');
  n++;
}

console.log('________________');

// By default it will take zero'for loop will work based on the condtion.
// It will everthing is blank not mandatory to write intitialization and increment and condition
for (; true;) {
  console.log('welcome to hotel Taj');
  break;

}

// usecase of for loop:when number of iteration is fixed
//1. when we want to excute the loop for specific number of times : 1 to 10,
//2. dropdown handling of monthes,years, days.we know the number of iteration is fixed.


console.log('________________');

// 3thrd loop
//dowhilelooop


// it will excute at least once even the comdition is false
// it is useed when we want to excute the loop at least once 

//1 to 10
let k = 1;
do {
  k++;
  console.log(k);
  break;
}
while (k <= 10);

//no of itenation is not fixed in dowhile loop.
//use case of teh while loop:when number of iteration is are not fixed
//1.wait for element on the page:0 2 5 10 15 20
//2. wait for page loading:0 2 5 10
//3. wait for api response:0 2 5 10 15
//4. calenars handling
//5.webtable pagionation handling
//6. infinite scrolling handling, inata, linkedin,zomato,amazon, flipcart


// upcoming concept :foreach loop, for in loop, for of loop,
