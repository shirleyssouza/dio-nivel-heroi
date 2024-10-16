function calcularNivel() {

const nome = document.getElementById("nome").value;
const xp = parseInt(document.getElementById("xp").value);    
let nivel = "";

if (xp <= 1000) {
    nivel = "Ferro";
} else if (xp > 1000 && xp <= 2000) {
    nivel = "Bronze";
} else if (xp > 2000 && xp <= 5000) {
    nivel = "Prata";
} else if (xp > 5000 && xp <= 7000) {
    nivel = "Ouro";
} else if (xp > 7000 && xp <= 8000) {
    nivel = "Platina";
} else if (xp > 8000 && xp <= 9000) {
    nivel = "Ascendente";
} else if (xp > 9000 && xp <= 10000) {
    nivel = "Imortal";
} else {
    nivel = "Radiante";
}

 const resultado = `<h2>O herói ${nome} está no nível: ${nivel}</h2>`;
 document.getElementById("resultado").innerHTML = resultado;

}

function rankearPartidas() {
    const vitorias = document.getElementById("vitorias").value;
    const derrotas = document.getElementById("derrotas").value;

    let saldoVitorias = vitorias-derrotas
    let nivelRanking = "";

    if (saldoVitorias <= 10) {
        nivelRanking = "Ferro";
    } else if (saldoVitorias > 10 && saldoVitorias <= 20) {
        nivelRanking = "Bronze";
    } else if (saldoVitorias > 20 && saldoVitorias <= 50) {
        nivelRanking = "Prata";
    } else if (saldoVitorias > 50 && saldoVitorias <= 80) {
        nivelRanking = "Ouro";
    } else if (saldoVitorias > 80 && saldoVitorias <= 90) {
        nivelRanking = "Diamante";
    } else if (saldoVitorias > 90 && saldoVitorias <= 100) {
        nivelRanking = "Lendário";
    } else if (saldoVitorias >= 101) {
        nivelRanking = "Imortal";
    }

    const ranking = `<h2>O Herói tem saldo de ${saldoVitorias} vitórias e está no nível: ${nivelRanking}</h2>`;
    document.getElementById("ranking").innerHTML = ranking;
}
