(() => {

    //Las clases abstractas sirven para crear otras clases

    abstract class Mutant {
        constructor(
            public name: string,
            public realName: string
        ) {}
    }

    class Xmen extends Mutant {
        salvarMundo() {
            return `Mundo salvado`;
        }
    }
    class Viilian extends Mutant {
        conquistarMundo() {
            return `Mundo conquistado !!!`
        }
    }

    const wolverine: Xmen = new Xmen('Wolverine', 'Logan');
    const magneto : Viilian = new Viilian('Magneto', 'Magnus')

   // console.log(wolverine.salvarMundo())
    //console.log(magneto.conquistarMundo())

    const printName = (character: Mutant) => {
        console.log(character.realName);
    }

    //printName(wolverine)
})()