console.log(10 == 10);

//Realtime Comparision
//if else block /logic 
//if if if else
// if elseif else
//nested if
//switch case

let x = 15;
if (x >= 10) { //(in bracket make condition should be boolean)
    console.log('hi');
}
else {
    console.log('bye');
}
console.log('________');

//--- direct boolean pass it is dead code
if (false) {
    console.log(object);
}
else {
    console.log('bye');
}
console.log('_______');


let isEleExist = false; //Pw--web-- element - true
if (isEleExist) {
    console.log('click on the element');
}
else {
    console.log('throw error');
}
console.log('_____nested if_____');

let marks = 99;
if (marks >= 90) {
    console.log('A grade');
    if (marks >= 95) {
        console.log('A++ grade');
        if (marks === 100) {
            console.log('eligible for scholarship');
        }
        else {
            console.log('not eligible for scholarship');
        }
    }
}
else {
    if (marks <= 80) {
        console.log('Grade B');
    }
    else {
        console.log('Grade B++');
    }
}

console.log('-----prallel if if if else condition------');

let browser = 'chrome';

if (browser === 'chrome') {
    console.log('launch chrome');
}
if (browser === 'firefox') {
    console.log('launch firefox');
}
if (browser === 'edge') {
    console.log('launch edge');
}
if (browser === 'safari') {
    console.log('launch safari');
}

else {
    console.log('plz pass the right browser:' + browser);
}