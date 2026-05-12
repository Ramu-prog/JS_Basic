//template literals or template string literals
// it will written with help of back tick:``;
// with help of template literals print multiple line and single also

let msg=`this rn here`;
console.log(msg);
let para=`hi this is my js code
             i want learn tyscript
             with pw and 
             i have exp in selenium`;

             console.log(para);

 //expected o/p:I love 'javascript' coding
 //use back tics
 console.log('I love \'javascript\' coding');
 console.log("I love \"javascript\" coding");

 console.log(`I love "javascript" coding`);
 console.log(`I love 'javascript' coding`);
 console.log(`hi it's my javascript code`);
 console.log(`the product name is'macbook' and price is 12.33$`);

 //3rd purpose of backtick
//dynamic values:-
let username= 'seller';
console.log('welcome'+ username);
console.log(`welcome ${username}`);

let ProductName ='Apple imac';
let price=1002.33;
console.log(`the search product name is ${ProductName} and price is ${price}`);

//advantage of template literals

let playerName='joe root';
//button[text()='Vratkohli']


console.log(`//button[text()='${playerName}']`);
console.log(`//button[text()="${playerName}"]`);

let n1=100;
let n2=200;
console.log(`the sum of n1 and n2 is${n1+n2}`);

let emailId='Automation';
let password='testing@123';

console.log(`the user credentials :
    username: ${emailId} and
    password: ${password}`);


    let str=`hi this Rn here`;
    console.log(typeof str);

console.log(emailId,password, 'Admin');
console.log('tetsing');
console.log('price:',10);

//'' or "" --normal string --static string
//dynamic string--> ``
//${} -->placeholder only applicabale for template literals















