export class Radar {
  constructor(
    private _placa: string,
    private _limite: number,
    private _medida: number
  ) {}

  public get placa(): string {
    return this._placa;
  }
  public set placa(placa: string) {
    this._placa = placa;
  }

  public get limite(): number {
    return this._limite;
  }
  public set limite(limite: number) {
    this._limite = limite;
  }

  public get medida(): number {
    return this._medida;
  }
  public set medida(medida: number) {
    this._medida = medida;
  }

  public verificarVelocidade(): void {
    const excesso = this._medida - this._limite;
    let classificacao = "";
    
    if (excesso <= 0) {
      classificacao = "Sem infração ✅";
    } else if (excesso <= this._limite * 0.2) {
      classificacao = "Infração leve ⚠️";
    } else if (excesso <= this._limite * 0.5) {
      classificacao = "Infração grave ❗";
    } else {
      classificacao = "Infração gravíssima 🚫";
    }

    console.log(
      `Placa: ${this._placa} | Limite da via: ${this._limite} km/h | Velocidade: ${this._medida} km/h | ${classificacao}`
    );
  }
}
