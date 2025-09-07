import prompt from "prompt-sync";
import { Radar } from "./controle";

const teclado = prompt();
let option: number = 0;
const listaVeiculos: Radar[] = [];

while (option !== 9) {
  console.log("=========== 🚨 MENU RADAR 🚨 ===========");
  console.log("1. Registrar Veículo    🚗");
  console.log("2. Verificar Velocidade ⚡"); 
  console.log("9. Sair                 👉");
  console.log("========================================");

  option = +teclado("Escolha uma opção: ");

  switch (option) {
    case 1:
      const placa: string = teclado("Digite a placa do veículo: ");
      const limite: number = +teclado("Digite o limite da via (km/h): ");
      const medida: number = +teclado("Digite a velocidade medida (km/h): ");
      const radar = new Radar(placa, limite, medida);
      listaVeiculos.push(radar);
      console.log("✅ Veículo registrado com sucesso!\n");
      break;

    case 2:
      if (listaVeiculos.length === 0) {
        console.log("⚠️ Nenhum veículo registrado ainda.\n");
      } else {
        console.log("\n🚦 Resultado da verificação de todos os veículos:");
        listaVeiculos.forEach((v, i) => {
          console.log(`\nVeículo ${i + 1}:`);
          v.verificarVelocidade();
        });
        console.log(""); // linha em branco
      }
      break;

    case 9:
      console.log("👋 Saindo...");
      break;

    default:
      console.log("❌ Opção inválida!\n");
  }
}
