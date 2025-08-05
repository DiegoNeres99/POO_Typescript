class Personagem {
    nome: string = '';
    energia: number = 0
    ataque: number = 0
    vida: number = 0
    defesa: number = 0

}

let person: Personagem;
person = new Personagem();
person.nome = "Naruto";
person.energia = 500;
person.ataque = 420;
person.vida = 2;
person.defesa = 300;


console.log(`🎮 Personagem:
🧍 Nome: ${person.nome}
⚡ Energia: ${person.energia}
🗡️ Ataque: ${person.ataque}
❤️ Vida: ${person.vida}
🛡️ Defesa: ${person.defesa}`);

