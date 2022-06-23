function printToConsole(constructor: Function) {
    console.log(constructor)
}

const printToConsoleConditional = (print: boolean = false):Function => {
    if(print) {
        return printToConsole
    } else {
        return () => {}
    }
}

@printToConsoleConditional(true)
export class Pokemon {

    public publicApi: string = 'https://pokeapi.co/';

    constructor(
        public name: string
    ){}
}