//CLASES
class PersonaNormal {
    constructor(
        public nombre:string,
        public direccion:string
    ){}
}

class Heroe{
    private alterEgo: string;
    public edad: number;
    static nombreReal: string = 'Heroe';

    constructor(alterEgo: string) {
        this.alterEgo = alterEgo;
    }
}

class Hero2  extends PersonaNormal{
    constructor(
        public alterEgo,
        public edad,
    ) {
        super(alterEgo, 'NY USA');
    }
}

const ironman = new Heroe('Iron Man');
const wolverine = new Hero2('Wolverine', 45);

console.log(ironman);
console.log(wolverine);
