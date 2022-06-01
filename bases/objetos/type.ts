(() => {

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
})()