
// destructuring object typscript

let user = {
    name: 'Antuan',
    key: 'dsfsdf766',
    alias: 'rip'
}

let { key, alias, name } = user;

console.log(name, key, alias);


// Is sequential
let userArr = ['Antuan','Marcial','Folledo'];

let [ user1, user2, user3 ] = userArr;

console.log(user1, user2, user3);