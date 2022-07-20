function sumar(a: number, b: number): number {
    return a + b;
}

const sumarFlecha = (a: number, b: number): number => a + b;

function multiplicar (numero: number, base: number, otroNumero?: number) {
    return (otroNumero) ? numero * base * otroNumero : numero *  base;
}


interface PersonajeLOR {
    nombre: string;
    pv: number;
    mostrarPv: () => void;
}

function curar(personaje: PersonajeLOR, curarX: number): void {
    personaje.pv += curarX;

    console.log(personaje);
}

const nuevoPersonaje: PersonajeLOR = {
    nombre: 'Strider',
    pv: 50,
    mostrarPv() {
        console.log('puntos de vida', this.pv);
    }
}

curar(nuevoPersonaje, 25);
nuevoPersonaje.mostrarPv();