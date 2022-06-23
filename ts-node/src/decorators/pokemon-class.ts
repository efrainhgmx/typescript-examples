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


const blockPrototype = function (constructor: Function) {
    Object.seal( constructor );
    Object.seal( constructor.prototype );
}

//Los decoradores se ejeutan de manera secuencial
@blockPrototype
@printToConsoleConditional(true)
export class Pokemon {

    public publicApi: string = 'https://pokeapi.co/';

    constructor(
        public name: string
    ){}
}