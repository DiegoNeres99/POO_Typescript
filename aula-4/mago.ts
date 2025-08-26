import { Personagem } from "./personagem";
import { Util } from "./util";

export class Mago extends Personagem {
    private _intelecto: number;
    private _velocidade: number;

    constructor(nome: string){
       super(nome);
       this._intelecto = +Util.randomizar(100, 1_000);
      this._velocidade = +Util.randomizar(100, 1_000);
    }

     status(): string {
        return (
            "Mago: \n" +
            "\nNome: " +
            this._nome +
            ("\nArmadura:" + this._armadura) +
            ("\nVidaMáxima:" + this._vidaMaxima) +
            ("\nVidaAtual:" + this._vidaAtual) +
            ("\nIntelecto:" + this._intelecto) +
            ("\nVelocidade:" + this._velocidade)
    
        );
    }
}