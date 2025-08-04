let xp_Heroi = [ 1000, 1001, 2000, 2001, 5000, 5001, 7000, 7001, 8000, 8001, 9000, 9001, 10000, 10001 ]  // Variável para armazenar a experiência do herói
let nome_Heroi = "Nome do Herói" // Variável para armazenar o nome do herói
let classe_Heroi = [ "Ferro", "Bronze", "Prata", "Ouro", "Platina", "Ascendente", "Imortal", "Radiante"]

if (xp_Heroi <= 1000) {
    console.log(`O Herói de nome ${nome_Heroi} está no nível de ${classe_Heroi[1]}`)
} else if (xp_Heroi >= 1001 && xp_Heroi <= 2000) {
    console.log(`O Herói de nome ${nome_Heroi} está no nível de ${classe_Heroi[2]}`)
}else if (xp_Heroi >= 2001 && xp_Heroi <= 5000) {
    console.log(`O Herói de nome ${nome_Heroi} está no nível de ${classe_Heroi[3]}`)
}else if (xp_Heroi >= 5001 && xp_Heroi <= 7000) {       
    console.log(`O Herói de nome ${nome_Heroi} está no nível de ${classe_Heroi[4]}`)
}else if (xp_Heroi >= 7001 && xp_Heroi <= 8000) {       
    console.log(`O Herói de nome ${nome_Heroi} está no nível de ${classe_Heroi[5]}`)
}else if (xp_Heroi >= 8001 && xp_Heroi <= 9000) {       
    console.log(`O Herói de nome ${nome_Heroi} está no nível de ${classe_Heroi[6]}`)
}else if (xp_Heroi >= 9001 && xp_Heroi <= 10000) {       
    console.log(`O Herói de nome ${nome_Heroi} está no nível de ${classe_Heroi[7]}`)
}else if (xp_Heroi >= 10001) {       
    console.log(`O Herói de nome ${nome_Heroi} está no nível de ${classe_Heroi[8]}`)
}

