// Definindo as vitórias e derrotas ANTES de chamar a função
let vitorias = 90;
let derrotas = 10;

function calcularRanque(v, d) {
    console.log("Vitórias recebidas:", v);
    console.log("Derrotas recebidas:", d);

    let saldoDoHeroi = v - d;
    console.log("Saldo calculado dentro da função:", saldoDoHeroi);

    let nivel = "";

    if (v < 10) {
        nivel = "Ferro";
    } else if (v >= 11 && v <= 20) {
        nivel = "Bronze";
    } else if (v >= 21 && v <= 50) {
        nivel = "Prata";
    } else if (v >= 51 && v <= 80) {
        nivel = "Ouro";
    } else if (v >= 81 && v <= 90) {
        nivel = "Diamante";
    } else if (v >= 91 && v <= 100) {
        nivel = "Lendário";
    } else {
        nivel = "Imortal";
    }

    return { saldoDoHeroi, nivel };
}

// Chamando a função com as variáveis DEFINIDAS
const resultado = calcularRanque(vitorias, derrotas);

console.log(`O Herói tem saldo de ${resultado.saldoDoHeroi} e está no nível de ${resultado.nivel}`);