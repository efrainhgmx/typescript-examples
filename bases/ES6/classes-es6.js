(() => {

    class Avenger {
        name;
        power;

        constructor(name = 'No name', power = 0) {
            this.name = name;
            this.power = power;
        }
    }

    const hulk = new Avenger('Hulk', 9001);
    console.log(hulk)
})()