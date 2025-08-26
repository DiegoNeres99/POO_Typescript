import { Personagem } from "./personagem";
import { Util } from "./util";

export class Guerreiro extends Personagem {
    private _forca: number;
    private _agilidade: number;

    constructor(nome: string){
       super(nome);
       this._forca = Number(Util.randomizar(100, 1_000));
      this._agilidade = Number(Util.randomizar(100, 1_000));
    }

     status(): string {
        return (
            "Guerreiro: \n" +
            "\nNome: " +
            this._nome +
            ("\nArmadura:" + this._armadura) +
            ("\nVidaMáxima:" + this._vidaMaxima) +
            ("\nVidaAtual:" + this._vidaAtual) +
            ("\nForça:" + this._forca) +
            ("\nAgilidade:" + this._agilidade)
    
        );
    }
}