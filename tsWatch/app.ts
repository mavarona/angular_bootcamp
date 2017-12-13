
var user = {
    name: 'Anonymous'
}

function greet ( name: string ) {

    console.log('%c Hello ' + name.toLowerCase(), 'background: #222; color: #bada55');

}

greet ( user.name );