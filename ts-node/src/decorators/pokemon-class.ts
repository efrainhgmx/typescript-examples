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

//Los factory decorators no son más que una función
// que retorna otra funcion:
function CheckValidPokemonId() {
    return function(target: any, propertyKey: string, descriptor: PropertyDecorator) {
        console.log({target, propertyKey, descriptor});

        const orginialMethod = descriptor.value;

        descriptor.value = (id: number) => {
            if(id < 1 || id > 800) {
                return console.info('El id debe ser mayor a 0 y menor a 800');
            } else {
                orginialMethod(id);
            }
        }
    }
}

//Los decoradores se ejeutan de manera secuencial
@blockPrototype
@printToConsoleConditional(true)
export class Pokemon {

    public publicApi: string = 'https://pokeapi.co/';

    constructor(
        public name: string
    ){}

    @CheckValidPokemonId()
    savePokemonToDB(id: number) {
        console.log('Pokemon guardado en BD' + ' ' + id);
    }
}