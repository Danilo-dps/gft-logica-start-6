class Heroi {
    constructor(nome, idade, tipoEscolhido, generoEscolhido) {
        const tiposValidos = {
            1: 'guerreiro',
            2: 'mago',
            3: 'ninja',
            4: 'monge'
        };

        const generosValidos = {
            1: 'trans',
            2: 'cisgênero',
            3: 'prefiro não responder'
        };
        
        // Validação do tipo de herói com base no número escolhido
        if (!tiposValidos[tipoEscolhido]) {
            throw new Error(`Tipo de herói inválido: ${tipoEscolhido}. Escolha entre: [1] guerreiro(a), [2] mago, [3] ninja, [4] monge`);
        }

        // Validação do gênero com base no número escolhido
        if (!generosValidos[generoEscolhido]) {
            throw new Error(`Gênero inválido: ${generoEscolhido}. Escolha entre: [1] trans, [2] cisgênero, [3] prefiro não responder`);
        }

        this.nome = nome;
        this.idade = idade;
        this.tipo = tiposValidos[tipoEscolhido];
        this.genero = generosValidos[generoEscolhido];
    }

    atacar() {
        let ataque;
        switch (this.tipo.toLowerCase()) {
            case 'mago':
                ataque = 'magia';
                break;
            case 'guerreiro':
                ataque = 'uma espada';
                break;
            case 'monge':
                ataque = 'artes marciais';
                break;
            case 'ninja':
                ataque = 'uma shuriken';
                break;
            default:
                ataque = 'um ataque desconhecido';
        }
        console.log(`${this.nome}, o ${this.tipo} (${this.genero}), atacou usando ${ataque}!`);
    }
}

module.exports = Heroi;
