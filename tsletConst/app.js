/*var message = 'Hello!';

if (true) {

   var message = 'Good bye!'

}

console.log( message )
*/
var message = 'Hello!';
/* Error compile
    let message = 123;
*/
if (true) {
    var message_1 = 'Good bye!';
}
console.log('%c let value ' + message, 'color: orange');
var OPTIONS = 'Title Options';
/* Error compile
    OPTIONS = 123;
*/
if (true) {
    var OPTIONS_1 = 'Title Options 2';
}
console.log('%c const value ' + OPTIONS, 'color: green');
