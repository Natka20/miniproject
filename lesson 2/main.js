let name = ['Natalya','Andriy','Kristina','Borys','Victor','Igor','Olya','Oryslava','Ira','Vasya'];
console.log(name);
console.log(name[0]);
console.log(name[1]);
console.log(name[2]);
console.log(name[3]);
console.log(name[4]);
console.log(name[5]);
console.log(name[6]);
console.log(name[7]);
console.log(name[8]);
console.log(name[9]);

let book1 = { title:'The Great Gatsby',
    pageCount: 384,
    genre:'business',
};
console.log(book1);
let book2 ={
    title:'The Great Gatsby',
    pageCount: 174,
    genre:'Tragedy',
};
console.log(book2);
let book3 = {
    title: 'Under The Dome',
    pageCount: 1106,
    genre: 'Horror',
};
console.log(book3);

let book4 = {
    title: '"The Intelligent Investor"',
    pageCount: 384,
    genre: 'business',
    authors: [
        {name:'Benjamin Graham',age:40}],

};
console.log(book4);
console.log(book4['authors']);

let book5 = {
    title: 'The Great Gatsby',
    pageCount: 174,
    genre: 'Tragedy',
    authors: [{name:'F. Scott Fitzgerald',age:50}],
};
console.log(book5);
console.log(book5['authors']);

let book6 = {
    title: 'Under The Dome',
    pageCount: 1106,
    genre: 'Horror',
    authors:[{name:'Stephen Edwin King',age:74}],

};
console.log(book6);
console.log(book6['authors']);

let users = [
    {name:'Anna', username:'Anafjfkf',password:'hhfghf'},
{name:'Oleg',username:'Olegho',password:'huhuhkh'},
{name:'Mark',username:'Markhhop',password:'hhjhjlj'},
{name:'Maryna',username:'Marynakjj',password:'jhioi'},
{name:'Dima',username:'Dimauhjhhj',password:'kjljkl'},
{name:'Andriy',username:'Andriy',password:'jhuhuj'},
{name:'Bodya',username:'Bodyajjj',password:'hjuui'},
{name:'Marta',username:'Marta',password:'yiohuh'},
{name:'Natalya',username:'Natalyajoiu',password:'kigkgofg'},
{name:'Namik',username:'Namik',password:'fjfjgkk'},];
// console.table(users,['password']);
console.log(users)
console.log(users[0].password);
console.log(users[1].password);
console.log(users[2].password);
console.log(users[3].password);
console.log(users[4].password);
console.log(users[5].password);
console.log(users[6].password);
console.log(users[7].password);
console.log(users[8].password);
console.log(users[9].password);