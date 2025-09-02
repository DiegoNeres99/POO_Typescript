import { Personagem } from "./personagem";
import { Util } from "./util";

export class Sacerdote extends Personagem {
    private _espirito: number;
    private _fe: number;

    constructor(nome: string){
       super(nome);
       this._espirito = +Util.randomizar(100, 1_000);
      this._fe = +Util.randomizar(100, 1_000);
    }

     status(): string {
        return (
            "Sacerdote: \n" +
            "\nNome: " +
            this._nome +
            ("\nArmadura:" + this._armadura) +
            ("\nVidaMáxima:" + this._vidaMaxima) +
            ("\nVidaAtual:" + this._vidaAtual) +
            ("\nEspirito:" + this._espirito) +
            ("\nFé:" + this._fe)
    
        );
    }
}