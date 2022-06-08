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
        
        private bio() {
            return `${ this.name } ${ this.team }`
        }

        public getAvenger() {
            return this.bio()
        }
    }

    const antman : Avenger = new Avenger('Antman', 'Avengers', 'Scott Lang');
    //console.log(Avenger.getAverage())
    //console.log(antman.getAvenger())
    
})();