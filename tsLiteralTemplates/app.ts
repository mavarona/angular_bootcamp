let name: string = 'NecAdmin';
let role: string = 'system';
let age: number = 12;

let message: string = 'Hello, ' + name + ' ' + role + ' ' + '(' + age + ')';


//  back-tick ``

let message2: string = `Hello, 
                        ${ name } 
                        ${ role } 
                        (${ age })`;

console.log(message2);

let a: number = 3;
let b: number = 5;

let result: number = `${ a + b  }`
console.log(result);