const readlineSync = require('readline-sync');
const Heroi = require('./Heroi');

class LeitorEntrada {
    static lerHeroi() {
        let nome = readlineSync.question("Digite o nome do herói: ");
        let idade = parseInt(readlineSync.question("Digite a idade do herói: "));
        let tipo = readlineSync.question("Digite o tipo do herói ([1] guerreiro(a), [2] mago, [3] ninja, [4] monge): ");
        let genero = readlineSync.question("Digite o gênero do herói ([1] trans, [2] cisgênero, [3] prefiro não responder): ");

        return new Heroi(nome, idade, tipo, genero);
    }
}

module.exports = LeitorEntrada;