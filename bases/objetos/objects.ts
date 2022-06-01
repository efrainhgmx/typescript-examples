(() => {

    let flash:{ name: string, age?: number, powers: string[], getName?: () => string } = {
        name: 'Barry Allen',
        age: 24,
        powers: ['Super Velocidad', 'Viajar en el tiempo']
    }

    flash = {
        name: 'Otro nombre',
        //age: 25,
        powers: ['Volar', 'Cantar'],
        getName() {
            return this.name;
        }
    }

    console.log(flash.getName())
})();