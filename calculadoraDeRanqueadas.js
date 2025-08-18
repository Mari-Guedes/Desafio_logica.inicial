let saldo_deRanqueadas = 0; // Variável para armazenar o saldo de ranqueadas
let ranque_doJogador = ["Ferro", "Bronze", "Prata", "Ouro", "Diamante", "Lendário", "Imortal"];
let ranque_atual = ""; // Variável para armazenar o ranque atual do jogador

function calcularRanque(saldo_deRanqueadas) {
    if (saldo_deRanqueadas < 10) {
        ranque_atual = ranque_doJogador[0]; // ferro
    } else if (saldo_deRanqueadas >= 11 && saldo_deRanqueadas < 20) {
        ranque_atual = ranque_doJogador[1]; // bronze
    } else if (saldo_deRanqueadas >= 21 && saldo_deRanqueadas < 50) {
        ranque_atual = ranque_doJogador[2]; // prata
    } else if (saldo_deRanqueadas >= 51 && saldo_deRanqueadas < 80) {
        ranque_atual = ranque_doJogador[3]; // ouro
    } else if (saldo_deRanqueadas >= 81 && saldo_deRanqueadas < 90) {
        ranque_atual = ranque_doJogador[4]; // diamante
    } else if (saldo_deRanqueadas >= 91 && saldo_deRanqueadas < 100) {
        ranque_atual = ranque_doJogador[5]; // lendário
    } else if (saldo_deRanqueadas >= 101) {
        ranque_atual = ranque_doJogador[6]; // imortal
    }
}

// Exemplo de uso da função
calcularRanque(saldo_deRanqueadas);
console.log(`O Herói tem de saldo de ${saldo_deRanqueadas} está no nível de ${ranque_atual}`);