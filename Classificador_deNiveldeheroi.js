
let xp_Heroi = [1000, 1001, 2000, 2001, 5000, 5001, 7000, 7001, 8000, 8001, 9000, 9001, 10000, 10001]; // Variável para armazenar a experiência do herói
let nome_Heroi = "Asgore"; // Variável para armazenar o nome do herói
let classe_Heroi = ["Ferro", "Bronze", "Prata", "Ouro", "Platina", "Ascendente", "Imortal", "Radiante"];
let nivel_Heroi = [];

for (let xp of xp_Heroi) {
    let nivel = "";
    if (xp <= 1000) {
        nivel = classe_Heroi[0];
    } else if (xp >= 1001 && xp <= 2000) {
        nivel = classe_Heroi[1];
    } else if (xp >= 2001 && xp <= 5000) {
        nivel = classe_Heroi[2];
    } else if (xp >= 5001 && xp <= 7000) {
        nivel = classe_Heroi[3];
    } else if (xp >= 7001 && xp <= 8000) {
        nivel = classe_Heroi[4];
    } else if (xp >= 8001 && xp <= 9000) {
        nivel = classe_Heroi[5];
    } else if (xp >= 9001 && xp <= 10000) {
        nivel = classe_Heroi[6];
    } else if (xp >= 10001) {
        nivel = classe_Heroi[7];
    }
    if (!nivel_Heroi.includes(nivel)) {
        console.log(`O Herói de nome ${nome_Heroi} está no nível de ${nivel}`);
        nivel_Heroi.push(nivel);
    }
}
