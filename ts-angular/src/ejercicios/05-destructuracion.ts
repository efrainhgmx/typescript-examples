//OBJETOS
interface Reproductor {
    volumen: number;
    segundo: number;
    cancion:  string;
    detalle: Detalle

}

interface Detalle {
    autor: string;
    anio: number;
}

const reproductor: Reproductor = {
    volumen: 90,
    segundo: 36,
    cancion: 'Mess',
    detalle: {
        autor: 'Ed Sheeran',
        anio: 2015
    }
}

const { volumen, segundo, cancion, detalle } = reproductor;
const { autor, anio } = detalle;



//ARREGLOS

const dbz: string[] = ['Goku', 'Vegeta', 'Trunks'];
const [p1, p2, p3] = dbz

console.log('Personaje 1', p1);
console.log('Personaje 1', p2);
console.log('Personaje 1', p3);