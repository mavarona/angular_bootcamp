var user = {
    name: 'Anonymous'
};
function greet(name) {
    console.log('%c' + name, 'background: #222; color: #bada55');
}
greet(user.name);
