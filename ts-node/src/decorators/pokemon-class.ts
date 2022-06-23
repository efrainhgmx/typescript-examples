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
        //console.log({target, propertyKey, descriptor});

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


function readOnly(isWritable: boolean = true): Function {
    //El propery descriptor solo se recibe en los métodos, cuando se decora una propiedad este es undefined
    return function(target: any, propertyKey: string) {
        //console.log({target, propertyKey });

        const descriptor: PropertyDescriptor = {
            get() {
                return 'Fernando'
            }, 
            set(this, value) {
                //console.log("value", this, value);
                Object.defineProperty( this, propertyKey, {
                    value,
                    writable: !isWritable,
                    enumerable: false
                })
            }
        }

        return descriptor;
    }
}
//Los decoradores se ejeutan de manera secuencial
@blockPrototype
@printToConsoleConditional(true)
export class Pokemon {

    @readOnly()
    public publicApi: string = 'https://pokeapi.co/';

    constructor(
        public name: string
    ){}

    @CheckValidPokemonId()
    savePokemonToDB(id: number) {
        console.log('Pokemon guardado en BD' + ' ' + id);
    }
}