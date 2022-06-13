(() => {

    class Avenger {
        constructor(
            public name: string,
            public realName: string
        ) {
            console.log('Constructor Avenger llamado!')
        }

        //Permite acceder a metodos y funciones incluso si extiende de otra clase
        // private solo se puede acceder dentro de la misma clase.
        protected getFullName () {
            return `${ this.name } ${ this.realName }`
        }
    };

    class Xmen extends Avenger {
        constructor(
            name: string,
            realName: string,
            public isMutan: boolean
        ) {
            super(name, realName)
            console.log('Constructor Xmen llamado')
        }

        get fullName() {
            return `${this.name} - ${this.realName}`
        }

        set fullName(name: string) {
            if( name.length < 3) {
                throw new Error('El nombre debe ser minimo de 4 caracteres')
            }
            this.name = name;
        }

        getFullNamefromXmen() {
            console.log(super.getFullName())
        }
        
    }

    //const wolverine = new Xmen('Wolverine', 'Logan', true)

    //wolverine.fullName = 'Fe';
    //console.log(wolverine.fullName)
    //wolverine.getFullNamefromXmen()
})()