var wolverine = {
    name: 'Wolverine',
    power: 'regeneration'
};
function sendMission(xmen) {
    console.log('%c send to mission to ' + xmen.name, 'background:salmon; color: white');
}
sendMission(wolverine);
