// Crear interfaces

// Cree una interfaz para validar el auto (el valor enviado por parametro)

interface carFunctions {
  encender: boolean;
  velocidadMaxima: number;
  acelerar(): void;
}

const conducirBatimovil = ( auto: carFunctions ):void => {
  auto.encender = true;
  auto.velocidadMaxima = 100;
  auto.acelerar();
}

const batimovil: carFunctions = {
  encender:false,
  velocidadMaxima:0,
  acelerar(){
    console.log("...... gogogo!!!");
  }
}

// Cree una interfaz con que permita utilzar el siguiente objeto
// utilizando propiedades opcionales

interface VillianInfoType {
  reir?: boolean;
  comer?: boolean;
  llorar?: boolean;
}

const guason: VillianInfoType = {
  reir: true,
  comer:true,
  llorar:false
}

const reir = ( guason: VillianInfoType ):void => {
  if( guason.reir ){
    console.log("JAJAJAJA");
  }
}


// Cree una interfaz para la siguiente funcion

interface GetCityInfo {
  (ciudadanos: string[]): number
}

const ciudadGotica: GetCityInfo = ( ciudadanos:string[] ):number => {
  return ciudadanos.length;
}

// Cree una interfaz que obligue crear una clase
// con las siguientes propiedades y metodos

/*
  propiedades:
    - nombre
    - edad
    - sexo
    - estadoCivil
    - imprimirBio(): void // en consola una breve descripcion.
*/

interface Person {
  nombre: string;
  edad: number;
  sexo: string;
  estadoCivil: string;
  imprimirBio(): void;
}
class Persona implements Person{
  constructor(
    public nombre: string,
    public edad: number,
    public sexo: string,
    public estadoCivil: string
  ){}

  imprimirBio(): void {
      console.log(`${this.nombre} tiene ${this.edad} es ${this.sexo} y esta ${this.estadoCivil}`);
  }


}