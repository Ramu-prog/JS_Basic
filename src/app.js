let x = 10;
let y = 20;
let z = x+y;
console.log(z);

function add(a,b){
    return a+b;
}
for (let i=0;i<1000000; i++){
add(2,3);
}