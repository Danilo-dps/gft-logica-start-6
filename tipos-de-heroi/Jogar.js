const LeitorEntrada = require('./LeitorEntrada');

class Jogo {
    static iniciar() {
        let continuar = true;
        while (continuar) {
            let heroi = LeitorEntrada.lerHeroi();
            heroi.atacar();
            continuar = require('readline-sync').keyInYN("Deseja criar outro herói? ");
        }
        console.log("Obrigado por jogar!");
    }
}

// Iniciar o jogo
Jogo.iniciar();
