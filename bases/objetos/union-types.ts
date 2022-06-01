(() => {
    type Hero = {
        name: string;
        age?: number;
        powers: string[];
        getName: () => string;
    }

    let myCustomVariable: (string | number | Hero) = 'Efrain';
    console.log(typeof myCustomVariable);
    
    myCustomVariable = 25;
    console.log(typeof myCustomVariable);

    myCustomVariable = {
        name: 'Bruce Banner',
        age: 42,
        powers: ['Smash'],
        getName() {
            return this.name;
        }
    }
    console.log(typeof myCustomVariable);

    

})()
