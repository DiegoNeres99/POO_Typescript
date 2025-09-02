import { Util } from "./util";

export class Personagem {
    protected _nome: string;
    protected _armadura: number;
    protected _vidaMaxima: number;
    protected _vidaAtual: number;

    constructor(nome: string){
        this._nome = nome;
        this._armadura = +Util.randomizar(100, 1_000);
        this._vidaMaxima = +Util.randomizar(100, 1_000);
        this._vidaAtual = +Util.randomizar(40, this._vidaMaxima);
        
    }

    public get nome(): string {
        return this._nome;
     }

    public set nome(nome: string) {
         this._nome = nome;
     }

    
     status(): string {
        return (
            "Guerreiro: \n" +
            "\nNome: " +
            this._nome +
            ("\nArmadura:" + this._armadura) + 
            ("\nVidaMáxima:" + this._vidaMaxima) +
            ("\nVidaAtual:" + this._vidaAtual) 
            
        );

    }
}