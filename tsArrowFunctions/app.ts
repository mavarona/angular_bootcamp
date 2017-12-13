
let miFunction = function ( a ) {

    return a;

}

let miFunctionF = a => a;

console.log(miFunction('uno'));
console.log(miFunctionF('arrow one'));

let miFunctionSum = function ( a:number, b:number ) {
    
        return a + b;
    
    }
    
let miFunctionSumF = (a:number, b:number) => a + b;

console.log(miFunctionSum(7, 9));
console.log(miFunctionSum(11, 67));

let miFunctionMesUpper = function ( message:string ):string {
    
        let result = message.toUpperCase();
        return result
    
    }
    
let miFunctionMesUpperF = (message:string ) : string => {
    let result = message.toUpperCase();
    return result
}

console.log(miFunctionMesUpper('uno'));
console.log(miFunctionMesUpperF('arrow one'));

// Differ
let name:string = 'Troll';

let user = {
    name: 'lucas',
    greet(){
        setTimeout(function() {
            console.log(this.name);
        }, 1000);
    }
} 

let userF = {
    name: 'lucas',
    greet(){
        setTimeout(() => {
            console.log(this.name);
        }, 1000);
    }
} 

user.greet();
userF.greet();