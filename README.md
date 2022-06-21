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

```typescript


```