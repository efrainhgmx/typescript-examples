namespace Validations {
    //Los namespace son pequeños programas
    //que solo exporta lo que quiere que sea de acceso de afuera
    export const validateText = (text: string):boolean => {
       return (text.length > 3) 
       ? true
        : false ;
    }

    const validateDate = (myDate: Date): boolean => {
        return (isNaN(myDate.valueOf())) ? false : true;
    }
}

//console.log(Validations.validateText('Hola'))