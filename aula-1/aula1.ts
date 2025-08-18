
class Personagem {
         nome: string = '';
         energia: number = 0;
         ataque: number = 0;
         vida: number = 0;
         defesa: number = 0;
}
let person: Personagem;
person = new Personagem ();
person.nome ='Goku';
person.energia = 300;
person.ataque = 300;
person.vida = 2;
person.defesa = 50;


console.log(`Personagem:\n Nome:👽  ${person.nome} \n Energia:👾 ${person.energia}` );





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

