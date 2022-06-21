function printToConsole(constructor: Function) {
    console.log(new constructor('Pikachu'))
}

@printToConsole
export class Pokemon {

    public publicApi: string = 'https://pokeapi.co/';

    constructor(
        public name: string
    ){}
}