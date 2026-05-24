// There are 8 falsy values in javascript:fasle,0,-0,on,nan,undefined,null,"".
//1.false
if (false) {
    console.log('hi');
}
else {
    console.log('hello'); //hello.
}


//2.0
if (0) {
    console.log('hi');
}
else {
    console.log('hello'); //hello
}

//3.-0
if (-0) {
    console.log('hi');
}
else {
    console.log('hell0')//hello
}
//4.NaN
if (NaN) {
    console.log('hi');
}
else {
    console.log('hello')//hello
}


//5.undefined 
if (undefined) {
    console.log('hi');
}
else {
    console.log('hello');//hello
}
//6.null
if (null) {
    console.log('hi');
}
else {
    console.log('hello');
}

//7.""
if ("") {
    console.log('hi');
}
else {
    console.log('hello');//hello
}

//8.''
if ('') {
    console.log('hi');
}

else {
    console.log('hello');//hello
}

//There are 7 truthy vlues in the javascript: true,1,-1,"0","flase"," ",[],{}, new data(),infinity,-infinity.
//1.true
if ({}) {
    console.log('hi');//hi
}
else {
    console.log('hello')
}
