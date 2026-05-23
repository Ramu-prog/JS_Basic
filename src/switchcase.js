
let browser = 'safari';
switch (browser.trim().toLowerCase()) {
    case 'chrome':
        console.log('launch chrome');
        break;

    case 'firefox':
        console.log('launch firefox');
        break;

    case 'edge':
        console.log('launch edge');
        break;

    case 'safari':
        console.log('launch safari');
        break;

    case 'opera':
        console.log('launch safari');
        break;

    default:
        console.log('invalid browser... plz pass right browser');
        break;

}
console.log('BYE');


console.log('==========================');

// 1to 100 marks --grades
//These kind of sutation we cant write switch case.
let marks = 4;
switch (marks) {
    case 1:
        console.log('marks=1');
        break;
    case 2:
        console.log('marks=2');
        break;

    case 3:
        console.log('marks=3');
        break;

    case 4:
        console.log('marks=4');
        break;

    default:
        console.log('invalid marks');
        break;
}

console.log('=====================');
let isElementActive = true;
switch (isElementActive) {
    case true:
        console.log('element is active');
        break;
    case false:
        console.log('element is not active');
        break;
    default:
        break;
}
console.log('=====================');
//use case:
//cross browser
//multiple environement :Qa, Dev, Stage,
//multiple role:Admin, student, teacher,
//in Api:get,post,put, delete
//Month- jan to dec
//week-sunday to monday


//nested switch case
let env = 'qa';
let username = 'admin';

switch (env) {
    case 'qa':
        console.log('run tcs on qa');
        switch (username) {
            case 'admin':
                console.log('login with admin');
                break;

            default:
                break;
        }
        break;
    default:
        break;
}





