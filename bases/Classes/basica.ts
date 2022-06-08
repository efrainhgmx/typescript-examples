(() => {

    class Avenger {
        private name: string;
        public team: string;
        public realName: string;
        static averageAge: number = 35;

        constructor(name: string, team: string, realName: string) {
            this.name = name;
            this.team = team;
            this.realName = realName;
        }
    }

    const antman : Avenger = new Avenger('Antman', 'Avengers', 'Scott Lang');
    console.log(antman)
    
})();