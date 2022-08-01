let x = 100;
console.log(x);
if (x === 0) {
    console.log(true);
}
else {
    console.log(false);
}
let time = prompt('min')
if (time >=1 && time <= 14) {
    console.log('first');
}
else if ( time >=15 && time <=30) {
    console.log('second');
}
else if (time >=31 && time <=45) {
    console.log('third');
}
else if ( time >=46 && time <=59) {
    console.log('quarter');
}
else {
    console.log('ffjvjfnv')
}
let day = prompt('what day is it today');
if (day >=1 && day <= 10) {
    console.log('first decade');
}
else if ( day >=11 && day <=20) {
    console.log('second decade');
}
else if ( day >=21 && day <=31) {
    console.log('third decade');
}
else {
    console.log('fjfjvdnv');
}

let schedule = prompt('what day of the week')
switch (schedule) {
    case "1":
        console.log('monday');
        break;
    case "2":
        console.log('Tuesday');
        break;
    case "3":
        console.log('Wednesday');
        break;
    case "4":
        console.log('Thursday');
        break;
    case "5":
        console.log('Friday');
        break;
    case "6":
        console.log('Saturday');
        break;
    case "7":
        console.log('Sunday');
        break;
    default:
        console.log('???????');
}

let a = 13;
let b = 20;

if (a===b) {
    console.log('a');
}

else if (a > b){
    console.log('a');
}
else  {
    console.log('b > a');
}

let x = undefined;
if ( '' || 'default') {
    console.log('x')
}
