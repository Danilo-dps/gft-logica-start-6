# gft-logica-start-6

# Hero Level Determiner & Hero Game

Este projeto contém dois scripts em Node.js que determinam o nível de um herói com base na quantidade de experiência (XP) ou no número de vitórias e derrotas fornecidas pelo usuário, além de um jogo onde os usuários podem criar heróis com diferentes tipos e gêneros, e realizar ataques baseados no tipo de herói escolhido.

## Descrição

### Primeiro Script: Determinação de Nível por XP

O script solicita ao usuário o nome do herói e a quantidade de XP. Com base na XP fornecida, o script classifica o herói em diferentes níveis, que variam de "Ferro" a "Radiante".

### Segundo Script: Determinação de Nível por Vitórias

O script solicita ao usuário o número de vitórias e derrotas. Com base no saldo de vitórias, o script classifica o herói em diferentes níveis, que variam de "Ferro" a "Imortal".

### Terceiro Script: Jogo de Heróis

O jogo permite que os usuários criem heróis fornecendo o nome, idade, tipo e gênero. Com base no tipo de herói, o herói realizará um ataque específico. O jogo continua até que o usuário decida parar.

## Como Usar

1. Certifique-se de ter o Node.js instalado em sua máquina.
2. Clone este repositório ou copie os códigos para arquivos em seu computador.
3. Execute o script desejado usando o comando `node nome_do_arquivo.js`.
4. Siga as instruções no terminal para inserir os dados necessários.

### Exemplo de Uso de cada Script

```bash
### Exemplo de Uso do Primeiro Script

$ node heroi-dio-xp.js
Digite o nome do herói: Thor
Digite a quantidade de XP do herói: 4500
O Herói de nome Thor está no nível de Prata

### Exemplo de Uso do Segundo Script

$ node partidas-rankeadas.js
Digite o número de vitórias: 30
Digite o número de derrotas: 10
O Herói tem de saldo de 20 está no nível de Prata

### Exemplo de Uso do Terceiro Script

$ node jogar.js
Digite o nome do herói: Thor
Digite a idade do herói: 1500
Digite o tipo do herói ([1] guerreiro(a), [2] mago, [3] ninja, [4] monge): 1
Digite o gênero do herói ([1] trans, [2] cisgênero, [3] prefiro não responder): 2
Thor, o guerreiro (cisgênero), atacou usando uma espada!
Deseja criar outro herói? (y/n): n
Obrigado por jogar!

