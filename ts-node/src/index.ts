import { printObject, genericFunction } from './generics/generics';
import { Hero } from './interfaces/hero';
import { Villian } from './interfaces/villian';
/* printObject(123);
printObject(new Date());
printObject([1,2,3]);
printObject({a: 'a'})

console.log(genericFunction(3.14).toFixed(2));
console.log(genericFunction('Hola mundo').length); */


const deadpool = {
    name: 'Deadpool',
    realName: 'Wade Wilson',
    dangerLevel: 130
}

//Generic function
console.log(genericFunction<Villian>(deadpool).dangerLevel)