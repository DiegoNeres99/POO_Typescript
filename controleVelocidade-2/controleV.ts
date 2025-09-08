export class ControleV {
    constructor (
        private _velocidadeatual: number,
        private _velocidadepermitida: number
     ) {  }
    public get velocidadeatual(): number {
        return this._velocidadeatual;
     }

    public set velocidadeatual(velocidade: number) {
        this._velocidadeatual = velocidade;
     }
    public get velocidadepermitida(): number {
        return this._velocidadepermitida;
     }
    public set velocidadepermitida(velocpermitida: number) {
        this._velocidadepermitida = velocpermitida;
     }

     permitida(valor: number){
        this.velocidadepermitida = valor;
     }

     turbo(): void {
        this.velocidadeatual += Math.random() * 20;
        console.log('Velocidade atual: ',this.velocidadeatual.toFixed(2));
        if(this.velocidadeatual > this.velocidadepermitida){
            console.log("Voce levou uma multa!");
        } 
     }

     printpermitida(): string {
        return (
            "Controle de Velocidade: \n" +
            ("\nVelocidade Permitida: " + this.velocidadepermitida.toFixed(1))
        );
     }

}
