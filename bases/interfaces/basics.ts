(() => {
    //A diferencia de Type, las interfaces pueden ser extendibles y los types no
    //Type no pueden expanderse más pero en escencia son lo mismo
    interface Hero {
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


})();