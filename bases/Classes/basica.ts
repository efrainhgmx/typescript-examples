(() => {

    class Avenger {
        /* private name: string;
        public team: string;
        public realName: string; */
        static averageAge: number = 35;
        static getAverage() {
            return this.name;
        }

        constructor(
                private name: string,
                public team: string, 
                public realName: string,
            ) {}
        
        public bio() {
            return `${ this.name } ${ this.team }`
        }
    }

    const antman : Avenger = new Avenger('Antman', 'Avengers', 'Scott Lang');
    //console.log(Avenger.getAverage())
    
})();