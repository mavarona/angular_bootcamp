
/*var message = 'Hello!';

if (true) {

   var message = 'Good bye!'

}

console.log( message )
*/


let message = 'Hello!';

/* Error compile 
    let message = 123;
*/

if (true) {

   let message = 'Good bye!'

}

console.log( '%c let value ' + message, 'color: orange'  )


const OPTIONS = 'Title Options';

/* Error compile 
    OPTIONS = 123;
*/

if (true) {
    
    const OPTIONS = 'Title Options 2';
    
}

console.log('%c const value ' + OPTIONS, 'color: green' );