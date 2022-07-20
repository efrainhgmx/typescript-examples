//DECORADORES

function reportableClassDecorator<T extends { new (...args: any[]): {} }>(constructor: T) {
    return class extends constructor {
      reportingURL = "http://www...";
    };
}
   
@reportableClassDecorator
class MiSuperClase {
    public miPropiedad: string = 'ABC123';

    imprimir() {
        console.log('Hola Mundo');
    }
};

const miClase = new MiSuperClase();
console.log(MiSuperClase);
console.log(miClase);