const readline = require('readline');

// Cria uma interface para ler a entrada do usuário
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Função para calcular o rank
function calcularRank(vitorias, derrotas) {
    let saldoVitorias = vitorias - derrotas;
    let nivel = '';

    if (vitorias < 10) {
        nivel = 'Ferro';
    } else if (vitorias >= 11 && vitorias <= 20) {
        nivel = 'Bronze';
    } else if (vitorias >= 21 && vitorias <= 50) {
        nivel = 'Prata';
    } else if (vitorias >= 51 && vitorias <= 80) {
        nivel = 'Ouro';
    } else if (vitorias >= 81 && vitorias <= 90) {
        nivel = 'Diamante';
    } else if (vitorias >= 91 && vitorias <= 100) {
        nivel = 'Lendário';
    } else if (vitorias >= 101) {
        nivel = 'Imortal';
    }

    return `O Herói tem de saldo de ${saldoVitorias} está no nível de ${nivel}`;
}

// Solicita a entrada do número de vitórias e derrotas
rl.question("Digite o número de vitórias: ", function(vitorias) {
    rl.question("Digite o número de derrotas: ", function(derrotas) {
        vitorias = parseInt(vitorias);
        derrotas = parseInt(derrotas);

        // Calcula e exibe o rank
        console.log(calcularRank(vitorias, derrotas));

        // Fecha a interface de leitura
        rl.close();
    });
});
