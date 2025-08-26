import { Guerreiro } from "./guerreiro";
import { Mago } from "./mago";
import { Personagem } from "./personagem";
import { Sacerdote } from "./sacerdote";


let mago: Personagem = new Mago('Ganadalf o Mago');
let guerreiro: Personagem = new Guerreiro('Aragon guerreiro');
let sacerdorte: Personagem = new Sacerdote('Bilbo sacerdote');
//let personagem: Personagem = new Personagem('Personagem');

console.log(mago.status());
console.log('===================');
console.log(guerreiro.status());
console.log('===================');
console.log(sacerdorte.status());
console.log('==================');