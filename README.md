# typescript-examples
Guía para el uso correcto y avanzado de TypeScript

### Comandos más utilizados
Para transpilar un código **ts** a **js**. Se utiliza el siguiente comando:

`$ tsc file.ts` // Transpila JS

Iniciar un archivo básico de configuración **tsconfig.json**.

`$ tsc --init` // crea el archivo **tsconfig.json**

Compilar todos los archivos: 
Una vez generado el archivo **tsconfig.json** con el siguiente comando traspilamos a JS todos los archivos con extensión de TypeScript.

`$ tsc ` //Transpila todos los archivos de TS a JS usando el archivo **tsconfig.json**

Modo watch: Transpila en tiempo real los archivos modificados;

`$ tsc -w`