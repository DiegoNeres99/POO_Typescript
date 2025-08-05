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
person.nome = "Naruto";
person.energia = 500;
person.ataque = 420;
person.vida = 2;
person.defesa = 300;
console.log("\uD83C\uDFAE Personagem:\n\uD83E\uDDCD Nome: ".concat(person.nome, "\n\u26A1 Energia: ").concat(person.energia, "\n\uD83D\uDDE1\uFE0F Ataque: ").concat(person.ataque, "\n\u2764\uFE0F Vida: ").concat(person.vida, "\n\uD83D\uDEE1\uFE0F Defesa: ").concat(person.defesa));
