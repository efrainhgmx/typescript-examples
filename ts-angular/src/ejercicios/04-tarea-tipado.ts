interface DireccionSuper {
    calle: string;
    pais: string;
    ciudad: string;
}

interface SuperHeroe {
    nombre: string;
    edad: number;
    direccion: DireccionSuper;
    mostrarDireccion: () => string;
}

const superHeroe: SuperHeroe = {
    nombre: 'SpiderMan',
    edad: 30,
    direccion: {
        calle: 'Main St',
        pais: 'USA',
        ciudad: 'NY'
    },
    mostrarDireccion() {
        return this.nombre + ' ' + this.direccion.ciudad + ' ' + this.direccion.calle + ' ' + this.direccion.pais;
    }
}

const direccion = superHeroe.mostrarDireccion();

console.log(direccion);