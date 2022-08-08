// - створити функцію яка повертає найменьше число з масиву

function funMin(array) {
    let min = array[0];
    for (let item of array) {
        if (min > item){
            min=item
        }
    return min;

}
};
const funMinReturn = funMin([2,3,4,5,6,10,4,3,6]);
 console.log(funMinReturn);

// - створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад [1,2,10]->13

function funPlus(array) {
    let i = 0
    for (const arrayElement of array) {
        i+=arrayElement;

    }
    return i;
}
const sum = funPlus([1,2,10])
console.log(sum)

// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.

let USERS =  [{

    "id": 1,
    "name": "Maryna",
    "age": 20
},
    {
        "id": 2,
        "name": "Katya",
        "age": 22
    },
    {
        "id": 3,
        "name": "Oleg",
        "age": 24
    }
]
function showObject(array){
        for (let i=0;i<array.length;i++){
           let compArray = JSON.stringify(array[i]);
           document.write(`<div><ul>${compArray}</ul></div>`);
        }
     }
     showObject(USERS)

// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список
let mass = [1,2,5,false,'cool','hi'];
function objectArray(array)
{
    for (const arrayElements of array)
    {
        console.log(arrayElements);
    }
return mass
}
console.log(objectArray(mass))

// - створити функцію яка створює параграф з текстом. Текст задати через аргумент

function paragraphText(text){
    document.write(`<div><p>${text}</p></div>`)
}
paragraphText('Hello')

// - створити функцію яка приймає масив та виводить кожен його елемент
let a = [{name: 'Andriy', age:23 }];
function user (){
    for (const item in a) {
           console.log(a[item]);
        }
    }

user();

// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r
function sides (pi,r,h){
    let area = 2 * pi * r*(h+r);
    return area;
}
let b = sides (3.14,20,10);
console.log(Math.round(b));

// - створити функцію яка обчислює та повертає площу кола з радіусом r
// S = π · R²

function radius (pi,r,r){
    let s = 3.14* r * r *r;
    return s;

}
let x = radius(3.14,10,10)
console.log(x)

// - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б
// S = a×b
function rectangle (a,b) {
    let i = a*b;
    return i
}
let v = rectangle(10,5)
console.log(v)
// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий

function writeObject(text) {
    document.write(`<ul>`)
    for (let i = 0; i < 3; i++) {
        document.write(`<li>${text}</li>`);
    }
    document.write(`</ul>`)

}
writeObject('okten')


// створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)
function liObject (text,argument){
    document.write(`<ul>`)
    for(let i=0;i<argument;i++){
        document.write(`<li>${text}</li>`)
    }
  document.write(`</ul>`)
}

liObject('hello',5)