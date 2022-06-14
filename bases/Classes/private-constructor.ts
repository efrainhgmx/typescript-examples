(() => {

//Los constructores privados se utilizan para controlar la manera de que las instancias son ejecutadas.
    class Apocalipsis {
        static instance: Apocalipsis;

        private constructor( public name: string) {

        }

    //Se basa en el principio Singleton
        static callApocalipsis(): Apocalipsis {
            if(!Apocalipsis.instance) {
                Apocalipsis.instance = new Apocalipsis("Soy apocalipsis")
            }

            return Apocalipsis.instance;
        }

        changeName( newName: string):void {
            this.name = newName;
        }

    }

    const apocalipsis = Apocalipsis.callApocalipsis()
    apocalipsis.changeName('Xavier');

    //console.log(apocalipsis)

    //EL CONSTRUIR EL CONSTRUCTOR PRIVADO, TODAS LAS INSTANCIAS SON EL MISMO
    //si uno cambia todos cambian

})();