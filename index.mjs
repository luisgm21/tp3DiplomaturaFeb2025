import { leerSuperHeroes, agregarSuperHeroes } from "./util.mjs";

const archivoOriginal = './superheroes.txt';
const archivoNuevos ='./agregarsuperHeroes.txt'

agregarSuperHeroes(archivoOriginal,archivoNuevos)

const superheroes= leerSuperHeroes('./heroesFull.txt');
console.log('Superhéroes ordenados');
console.log(superheroes);
