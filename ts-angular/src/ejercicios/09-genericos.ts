
//Genericos
function queTipoSoy<T>(argumento: T): T {
    return argumento;
}

let soyString = queTipoSoy('Hola mundo');
let soyNumero = queTipoSoy(100);
let soyArreglo = queTipoSoy([1,2,3,4]);