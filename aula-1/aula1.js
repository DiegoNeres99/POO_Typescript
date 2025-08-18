var Personagem = /** @class */ (function () {
    function Personagem() {
        this.nome = '';
        this.energia = 0;
        this.ataque = 0;
        this.vida = 0;
        this.defesa = 0;
    }
    return Personagem;
}());
var person;
person = new Personagem();
person.nome = 'Goku';
person.energia = 300;
person.ataque = 300;
person.vida = 2;
person.defesa = 50;
console.log("Personagem:\n Nome:\uD83D\uDC7D  ".concat(person.nome, " \n Energia:\uD83D\uDC7E ").concat(person.energia));
// Forma 2
// class Personagem {
//          nome: string = '';
//          energia: number = 0;
//          ataque: number = 0;
//          vida: number = 0;
//          defesa: number = 0;
//       constructor(nome: string){
//         this.nome = nome;
//         this.energia = 200;
//         this.ataque = 100;
//       }
// }
// let person: Personagem;
// person = new Personagem('Vegetta' );
// person.energia = 300;
// console.log("Personagem:" , person);