// 1. É necessário declarar a variável e abrir o array com [
const herois = [
    { nome: "Penina", xp: 950 },
    { nome: "Diana", xp: 1500 },
    { nome: "Uther", xp: 4500 },
    { nome: "Shiva", xp: 6200 },
    { nome: "Frloa", xp: 7800 },
    { nome: "Nicke", xp: 8300 },
    { nome: "Natura", xp: 9200 },
    { nome: "Jordan", xp: 10500 }
];

// 2. Laço de repetição para percorrer a lista
for (let heroi of herois) {
    let nome = heroi.nome;
    let xp = heroi.xp;
    let nivel = "";

    // 3. Estrutura de decisão para classificar o nível
    if (xp <= 1000) {
        nivel = "Ferro";
    } else if (xp >= 1001 && xp <= 2000) {
        nivel = "Bronze";
    } else if (xp >= 2001 && xp <= 5000) {
        nivel = "Prata";
    } else if (xp >= 5001 && xp <= 7000) {
        nivel = "Ouro";
    } else if (xp >= 7001 && xp <= 8000) {
        nivel = "Platina";
    } else if (xp >= 8001 && xp <= 9000) {
        nivel = "Ascendente";
    } else if (xp >= 9001 && xp <= 10000) {
        nivel = "Imortal";
    } else {
        nivel = "Radiante";
    }

    // 4. Saída formatada no terminal
    console.log(`O Herói de nome **${nome}** está no nível de **${nivel}**`);
}