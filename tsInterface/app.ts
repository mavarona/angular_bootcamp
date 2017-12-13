
interface Xmen {
    name: string,
    power: string
}

let wolverine: Xmen = {
    name: 'Wolverine',
    power: 'regeneration'
}

function sendMission ( xmen: Xmen ): void {
    console.log('%c send to mission to ' + xmen.name , 'background:salmon; color: white')
}

sendMission(wolverine);