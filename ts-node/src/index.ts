import { getPokemon } from "./generics/get-pokemon";

getPokemon(1)
    .then(pokemon => console.log(pokemon.name))
    .catch(console.warn);