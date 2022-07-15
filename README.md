# TypeScript Guía
Guía para el uso correcto y avanzado de TypeScript

### Comandos más utilizados
Instalar TypeScript:
Normalmente muchos proyectos ya vienen con configuracion de TS. 
Para instalar verifica la siguiente liga: https://www.typescriptlang.org/download

Instalar en un proyecto: 
`$ npm install typescript --save-dev`

Instalar de manera global:
`$ npm install -g typescript.`

Para transpilar un código **ts** a **js**. Se utiliza el siguiente comando:

`$ tsc file.ts` // Transpila JS

Iniciar un archivo básico de configuración **tsconfig.json**.

`$ tsc --init` // crea el archivo **tsconfig.json**

Compilar todos los archivos: 
Una vez generado el archivo **tsconfig.json** con el siguiente comando traspilamos a JS todos los archivos con extensión de TypeScript.

`$ tsc ` //Transpila todos los archivos de TS a JS usando el archivo **tsconfig.json**

Modo watch: Transpila en tiempo real los archivos modificados;

`$ tsc -w`


## Configuraciones de tsconfig.json
La presencia de *tsconfig.json* indica la raíz del proyecto y la compilación de ciertos archivos, nombre de archivo de salida y ficheros a excluir.

**NOTA: Usalmente, el archivo tsconfig.json no requiere de una configuración especial, ya que usar herramientas como React, Angular, etc... ya tienen esa configuración**

#### ¿Cómo hacer debug de los archivos ts en lugar de js?
Basta con habilitar el siguiente parametro dentro del archivo de configuración:

`"sourceMap": true, `

#### Remover los comentarios en el archivo de salida
Basta con habilitar el siguiente parametro dentro del archivo de configuración:

`"removeComments": true, `

#### Definir un solo archivo de salida js
Basta con habilitar el siguiente parametro dentro del archivo de configuración con la ruta y nombre del archivo de salida:

`"outFile": "./main.js" `

Usualmente hay que hacer un cambio de `"module"` de **commonjs** a **amd**:

`"module": "amd",`


####Incluir o excluir archivos para traspilacion:

Tenemos las opciones include y exclude que nos permite crear esto.
Siempre va al final de las llaves de configuracion:

`"exclude": [
    "ignoredFiles/*.ts"
  ], "include": [
  "src"
  ]`

  ## Tipos de Datos en TS
  TypeScript, nos permite tipar y dar super poderes a JavaScript, nos permite crear una mejor documentación y un mejor manejo de errores a la hora de escribir código.

  **Existen varías maneras de tipar en TS y aquí te muestro algunas:**

  ### - String

Al tipar cualquier tipo de dato, hay que ponerlo antes de inicializar una variable seguido de **:** y luego el tipo de dato.

  ```typescript
const batman :string = 'Batman';
let joker:string;

joker = 'Joker';

```
### - Numbers

```typescript
const age: number = 45;
```

### - Boolean

```typescript
const isLoading: boolean = false;
```

### - Null - Unefined

No es muy común el uso de tipar **null** o **undefined** pero es un tipo de dato que podemos controlar tambien en TS.

```typescript
let isActive: null =  null;
const isOn: undefined = undefined;

```

### - Any

Any nos permite tener el control total del dato pero perdemos la ayuda y el sentido de TS.

Básicamente **any** permite asignar cualquier tipo de dato sin ninguna restricción

**NOTA: No se recomienda usar nunca any a menos que sepamos lo que hacemos, el uso desmedido de any puede crear que perdamos el control del código y si algo falla sea muy dificil de capturar. SOLO SE DEBE USAR EN CASOS EXTRAORDINARIOS PERO ES MEJOR EVITARLO**
```typescript
  let item : any;
  item = 'Hola';
  item = 123;
  item = { a: 'A' }
  item = ['🚀', '📲', '📈'];
  item = () => console.log('Hola');

```

### - Arrays

Podemos definir tipos de datos para los arrays y tener un mejor control de los mismos.

```typescript
const users : string[] = ['Lalo', 'Marian', 'Carla'];
const ids: number[] = [1,2,2];
const listItems: (string | number | boolean)[] = [1, true, 'A', false, 3.1416];

```
### - Tuplas o Tuples

Las tuplas son una regla que nos permite definir la estructura presisa de un arreglo:

```typescript
const hero: [string, number, boolean] = ['Dr Strange', 100, true];

    hero[0] = 'Iron Man';
    hero[1] = 50;
    hero[2] = false;

const villian : [string, number, boolean, number[]] = ['Dormamu', 150, false, [1,2,3]];
```

### - Enums o Enumeraciones

Los enums nos permite escojer una opción entre varias en los tipos de datos. Permite trabajar con un valor "semantico" a la hora de leer código.

```typescript

enum AudioLevel {
        min,  //0
        medium, //1
        max  //2
}

enum AudioLevel {
        min = 1,
        medium, //2
        mediumMin, // 3
        max= 10
  }

```

Las enumeraciones crean un valor semantico como el de las posiciones de un array.  
CUANDO EL VALOR NO SE PONE DE MANERA IMPLICITA, SE COLOCA EL VALOR QUE LE SEDE EN SU POSICION.

### - Fuction y Void

Tanto function y void son para referenciar o tipar funciones en TS. Pero **void** en especifico, hace refencia a una función que no retorna nada:

```typescript
//Void signfica "vacio", es decir hace referencia a una funcion que...

//...no retorna nada o undefined, es buena práctica documentar de esta manera.

    function callBatman():void {
        return;
    }

    const callSuperman: Function = ():void => {
        return;
    }

    const a = callBatman()
    console.log(a)

    //Aquí especificamos el tipo de salida diferente a void
    const returnHello: Function = () :string => {
      return 'Hola mundo!!';
    }

```
### - Never

Never es un tipo de dato, que hace referencia a las funciones que NO DEBEN TERMINAR EXITOSAMENTE, es decir, siempre deben arrojar un error y podemos usarlo de esta manera:

```typescript
const failFunction = ():never => {
  throw new Error('La función falló o genero un fallo');
};

failFunction();

//O usar never para controlar un fallo mejor tipado;

function showMessage(message: string):( never | string ) {
  if(message.lenght < 5) {
    throw new Error('Mensaje muy corto');
  } else {
    return message;
  }
}

showMessage('Hola mundo!!!');

```


### - Parametros opcionales y requeridos en Funciones.

En TS podemos pedir argumentos lo cuales decidir cuales son obligatorios u opcionales

**NOTA: un argumento opcional NO puede ir antes de un argumento requerido a menos que este este inicializado.**

```typescript
const fullName = (
  firstName: string, 
  lastName: string, 
  age?: number
): string => {
        return (age) 
          ? `${firstName} ${lastName} ${age}` 
          : `${firstName} ${lastName} `;
    };

```

### - Parametros REST o rest arguments en funciones.

Los rest arguments es la manera de mandar más argumentos que no esten definidos en una función.

En JavaScript es posible hacerlo con el operador rest que se el siguiente: **...** seguido del nombre de la variable, es muy común encontrarlo como **...args**
pero puede tener otra valor como: **...rest**, **...data**, etc:

```typescript
const fullName = (firstName: string, ...args: string[]):string => {

        return `${firstName} ${args.join(' ')}`;

    }

    const superman =  fullName('Clark', 'Joseph', 'Ken');
    console.log(superman)

```
### - Objetos

Existe una manera muy facil de tipar la estructura de un objeto literal y es de la siguiente manera:

```typescript

let flash:{ name: string, age?: number, powers: string[], getName?: () => string } = {
        name: 'Barry Allen',
        age: 24,
        powers: ['Super Velocidad', 'Viajar en el tiempo']
    }

flash = {
    name: 'Otro nombre',
    age: 25,
    powers: ['Volar', 'Cantar'],
    getName() {
        return this.name;
    }
}

console.log(flash.getName())
```
### - Type
 
 Son una regla en TS que nos permite crear un conjunto de tipos para que sea mucho más fácil el tipado de datos:

```typescript
 type Hero = {
      name: string;
      age?: number;
      powers: string[];
      getName: () => string;
  }

  let flash:Hero = {
      name: 'Barry Allen',
      age: 24,
      powers: ['Super Velocidad', 'Viajar en el tiempo'],
      getName() {
          return this.name;
      }
  }

  let superman:Hero = {
      name: 'Clark Ken',
      age: 32,
      powers: ['Super velocidad', 'Super Fuerza'],
      getName() {
          return this.name;
      }
  }

```
Los **Type** se usan usualmente en objetos y los type representan 0 ineas de código en JavaScript.


### - Interface 

Las interfaces, son un una regla que nos permite tipar objetos

```typescript
//A diferencia de Type, las interfaces pueden ser extendibles y los types no
    //Type no pueden expanderse más pero en escencia son lo mismo
    interface Hero {
        name: string;
        age?: number;
        powers: string[];
        getName: () => string;
    }

    let flash:Hero = {
        name: 'Barry Allen',
        age: 24,
        powers: ['Super Velocidad', 'Viajar en el tiempo'],
        getName() {
            return this.name;
        }
    }

    let superman:Hero = {
        name: 'Clark Ken',
        age: 32,
        powers: ['Super velocidad', 'Super Fuerza'],
        getName() {
            return this.name;
        }
    }
```

#### DIFERENCIA ENTRE TYPE E INTERFACE

Los **Type** y las **Interface** en TS son practicamente lo mismo, no hay una diferencia sustancial, por lo que depende del desarrollador el uso de uno u otro.

**LA DIFERENCIA NOTABLE** es que los tipos no pueden tener "herencia" o extender de uno ya definido, en cambio las interfaces pueden heredar de otra:

```typescript
  interface Animal {
    name: string;
    age: number;
  }

  interface Bird extends Animal {
    canFly: boolean;
  }

  const tucan: Bird = {
    name: 'Tucan',
    age: 7,
    canFly: true
  }
```

### - namespaces

Los **namespaces** son pequeños programas que nos permiten exportar el bloque de código que queremos sea accesible desde otros archivos. Lo cual nos permite tener un mejor control y manejo de los mismos.

```typescript

//AHORA TODO EL SIGUIENTE BLOQUE PUEDE SER IMPORTADO O SE PUEDE TENER ACCESO
namespace Validations {
    //Los namespace son pequeños programas
    //que solo exporta lo que quiere que sea de acceso de afuera
    export const validateText = (text: string):boolean => {
       return (text.length > 3) 
       ? true
        : false ;
    }

    const validateDate = (myDate: Date): boolean => {
        return (isNaN(myDate.valueOf())) ? false : true;
    }
}

```

### - Clases

La forma de tipar clases en TS es muy sencilla. 
Para saber más sobre Clases en JavaScript mira aqui: [Clases en JavaScript](https://github.com/efrainhgmx/classes-in-javascript)

Podemos definir atributos publicos y privados, los cuales los públicos pueden ser accedidos desde fuera de la clase y los privados solo dentro de la misma.

```typescript
class Avenger {
  public name: string;
  public age: number;
  private realName: string;
}

// el no definir el tipo se intuye que es publico

class Avenger {
  //Atributo publico
  name: string;
  //Atributo privado
  private age: number;
}

```

#### -Extends en Clases

La palabra reservada **extends** permite extender o aplicar herencia en otra clase, lo que permite añadir métodos o atributos en clases nuevas:

**NOTA: Es importante usar la función super() para poder crear nuevas clases que hereden**

```typescript
class Avenger {
        constructor(
            public name: string,
            public realName: string
        ) {
            console.log('Constructor Avenger llamado!')
        }

        //Permite acceder a metodos y funciones incluso si extiende de otra clase
        // private solo se puede acceder dentro de la misma clase.
        protected getFullName () {
            return `${ this.name } ${ this.realName }`
        }
    };

    class Xmen extends Avenger {
        constructor(
            name: string,
            realName: string,
            public isMutan: boolean
        ) {
            super(name, realName)
            console.log('Constructor Xmen llamado')
        }

        get fullName() {
            return `${this.name} - ${this.realName}`
        }

        set fullName(name: string) {
            if( name.length < 3) {
                throw new Error('El nombre debe ser minimo de 4 caracteres')
            }
            this.name = name;
        }

        getFullNamefromXmen() {
            console.log(super.getFullName())
        }
        
    }

```

#### - Constructores privados
Es posible crear contructores privados usando TS. 
Los constructores privados se utilizan para controlar la manera de que las instancias son ejecutadas.

```typescript
class Apocalipsis {
        static instance: Apocalipsis;

        private constructor( public name: string) {

        }

    //Se basa en el principio Singleton
        static callApocalipsis(): Apocalipsis {
            if(!Apocalipsis.instance) {
                Apocalipsis.instance = new Apocalipsis("Soy apocalipsis")
            }

            return Apocalipsis.instance;
        }

        changeName( newName: string):void {
            this.name = newName;
        }

    }

    const apocalipsis = Apocalipsis.callApocalipsis()
    apocalipsis.changeName('Xavier');

    //console.log(apocalipsis)

    //EL CONSTRUIR EL CONSTRUCTOR PRIVADO, TODAS LAS INSTANCIAS SON EL MISMO
    //si uno cambia todos cambian


```

#### - Clases Abstractas

Las clases abstractas sirven para crear otras clases (Como si fuera un cascaron) y que realmente ejecuten instancias que se esperan.
No es posible crear instancias de una clase abstracta, esto solo aplica para nuevas clases.

```typescript
 abstract class Mutant {
        constructor(
            public name: string,
            public realName: string
        ) {}
    }

    class Xmen extends Mutant {
        salvarMundo() {
            return `Mundo salvado`;
        }
    }
    class Viilian extends Mutant {
        conquistarMundo() {
            return `Mundo conquistado !!!`
        }
    }

    const storm: Mutan = new Mutan('Storm', 'Storm'); //Error no se puede crear una instancia de una clase abstracta.
    const wolverine: Xmen = new Xmen('Wolverine', 'Logan');
    const magneto : Viilian = new Viilian('Magneto', 'Magnus');

```

### - Funciones Genericas en TS

La funciones genericas en TS, no es más que una funcion que recibe un tipo de dato y regresa el mismo tipo de dato.
Es muy útil cuando se tipan APIs o ciertas funciones en particular. Normalmente se usa la expresion **<T>** pero realmente puede tener cualquier nombre:

Mira la carpeta [ts-node](https://github.com/efrainhgmx/typescript-examples/tree/main/ts-node) para ver ejemplos.

```typescript
function genericFunction<T>(argunment: T):T {
    return argunment;
}


const genereFucntionArrow = <T>(argument: T): T => {
    return argument;
}

```

## - DECORADORES
Un decorador no es más que una función que se ejecuta en tiempo de compilación o momento de traspilación.
Básicamente es una función que se utiliza para expandir o añadir funcionalidades a objetos.

Para saber más sobre los deocradores, visita la documentación oficial de [decoradores en TypeScript](https://www.typescriptlang.org/docs/handbook/decorators.html)

**NOTA: No es muy común que te toque crear decoradores, normalmente toca implementarlos y no crearlos. Es común usarlos en frameworks como Angular o en ciertas librerias que los implementan.**

### - Decorador de Clases

La forma "estandar" de crear decoradores, es atraves de funciones tradicionales, pero queda mucho a discreción de usar arrow functions si lo desea.

**NOTA: Los decoradores son considerados alg "experimental" por lo que es posible necesitar habilitar lo siguiente en el ts.config: "experimentalDecorators: true,"**


```typescript
    //Definicion del decorador:
    function printToConsole( contructor: Function) {
        console.log(contructor); //Imprime toda la clase incluso sin crear una instancia
    }

    //Decorador se ejecuta en el momento que se defina la clase Pokemon
    @printToConsole
    class Pokemon {
        public publiApi:string =  'https://pokeapi.co';

        constructor(
            public name: string
        ){}
    }

```


### - Factory Decorators
Una fábrica de decoradores es simplemente una función que devuelve la expresión que llamará el decorador en tiempo de ejecución.

**NOTA: Los Factory Decorators, son funciones que retornan otra función. Estas pueden controlar algo dentro o hacer algo al momento de la traspilacion. Los decoradores SOLO SE EJECUTAN AL MOMENTO DE TRASPILACIÓN O COMPILACIÓN.**

Podemos escribir una fábrica de decoradores de la siguiente manera:

```typescript

function printToConsole( contructor: Function) {
        console.log(contructor); //Imprime toda la clase incluso sin crear una instancia
}

//Definición del decorador
const printToConsoleConditional = (print?: boolean = false): Function => {
    if(print) {
        return printToConsole;
    } else {
        return () => {};
    }
} 

 @printToConsoleConditional(true)
    class Pokemon {
        public publiApi:string =  'https://pokeapi.co';

        constructor(
            public name: string
        ){}
    }

```
```typescript


```

```typescript


```