(() => {

    class Avenger {
        /* private name: string;
        public team: string;
        public realName: string; */
        static averageAge: number = 35;

        constructor(
                private name: string,
                public team: string, 
                public realName: string,
            ) {
                
            
        }
    }

    const antman : Avenger = new Avenger('Antman', 'Avengers', 'Scott Lang');
    console.log(antman)
    
})();