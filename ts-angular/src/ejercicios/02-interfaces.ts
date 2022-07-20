//Arreglos 
let habilidades: (boolean | number | string)[] = ['Bash', 'Hell', 'Counter', 100, true];

interface Personaje {
    nombre: string;
    hp: number;
    habilidades: string[];
    puebloNatal?: string;
}

// Objetos
const personaje: Personaje = {
    nombre: 'Strider',
    hp: 100,
    habilidades: ['Counter', 'Bash', 'Healing']
}

personaje.puebloNatal = 'Pueblo Paleta';

console.table(personaje);