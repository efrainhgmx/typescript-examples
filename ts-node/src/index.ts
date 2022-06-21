import { printObject, genericFunction } from './generics/generics';
printObject(123);
printObject(new Date());
printObject([1,2,3]);
printObject({a: 'a'})

console.log(genericFunction(3.14).toFixed(2));
console.log(genericFunction('Hola mundo').length);






