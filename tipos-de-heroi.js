const readlineSync = require('readline-sync');

// Classe Heroi
class Heroi {
    constructor(nome, idade, tipo) {
        this.nome = nome;
        this.idade = idade;
        this.tipo = tipo;
    }

    atacar() {
        let ataque;
        switch (this.tipo) {
            case 'mago':
                ataque = ' magia';
                break;
            case 'guerreiro':
                ataque = 'uma espada';
                break;
            case 'monge':
                ataque = ' artes marciais';
                break;
            case 'ninja':
                ataque = 'uma shuriken';
                break;
            default:
                ataque = ' um ataque desconhecido';
        }
        console.log(`O ${this.tipo} atacou usando ${ataque}`);
    }
}

// Função para ler dados do usuário
function criarHeroi() {
    let nome = readlineSync.question("Digite o nome do herói: ");
    let idade = parseInt(readlineSync.question("Digite a idade do herói: "));
    let tipo = readlineSync.question("Digite o tipo do herói (guerreiro, mago, monge, ninja): ");

    return new Heroi(nome, idade, tipo);
}

// Estrutura de repetição para criar vários heróis
let continuar = true;
while (continuar) {
    let heroi = criarHeroi();
    heroi.atacar();
    continuar = readlineSync.keyInYN("Deseja criar outro herói? ");
}

console.log("Obrigado por jogar!");
