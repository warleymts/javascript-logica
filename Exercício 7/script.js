// Simular um baralho de cartas com as seguintes características: 
// - O baralho deve ser um array de objetos, onde cada objeto representa uma carta.
// - Cada carta deve ter um naipe e um valor.
// - Os naipes são copas, ouros, espadas e paus.
// - Os valores são as letras A, 2, 3, 4, 5, 6, 7, 8, 9, 10, J, Q e K.
// - O baralho deve ser embaralhado assim que criado.
// - O baralho deve ser possível de ser distribuído, ou seja, deve ser possível retirar uma carta do baralho.
// - O baralho deve ser possível de ser embaralhado novamente.
// - O jogo deve ser possível de ser jogado com 2 jogadores.
// - Cada jogador deve receber 2 cartas.
// - O jogador que tiver a soma de valores das cartas mais próxima de 21, ganha.
// - Caso a soma de valores das cartas de um jogador seja maior que 21, ele perde.
// - Caso a soma de valores das cartas de um jogador seja igual a 21, ele ganha.
// - Caso a soma de valores das cartas de um jogador seja menor que 21, ele pode pedir mais uma carta.
// Jogar no 

// Path: Exercício 7\script.js  

// Criação do baralho
let baralho = [];
let naipes = ["copas", "ouros", "espadas", "paus"];
let valores = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];

for (let naipe of naipes) {
    for (let valor of valores) {
        baralho.push({ naipe, valor });
    }
    }

// Embaralhamento do baralho
function embaralhar() {
    for (let i = baralho.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [baralho[i], baralho[j]] = [baralho[j], baralho[i]];
    }
}

// Distribuição de cartas
function distribuir() {
    let carta1 = baralho.pop();
    let carta2 = baralho.pop();
    return [carta1, carta2];
}

// Criação dos jogadores
let jogador1 = {
    nome: "Jogador 1",
    cartas: [],
    pontuacao: 0
};

let jogador2 = {
    nome: "Jogador 2",
    cartas: [],
    pontuacao: 0
};

// Início do jogo
embaralhar();
jogador1.cartas = distribuir();
jogador2.cartas = distribuir();

// Cálculo da pontuação
function calcularPontuacao(cartas) {
    let pontuacao = 0;
    for (let carta of cartas) {
        switch (carta.valor) {
            case "A":
                pontuacao += 1;
                break;
            case "J":
            case "Q":
            case "K":
                pontuacao += 10;
                break;
            default:
                pontuacao += Number(carta.valor);
        }
    }
    return pontuacao;
}

jogador1.pontuacao = calcularPontuacao(jogador1.cartas);
jogador2.pontuacao = calcularPontuacao(jogador2.cartas);

// Verificação do vencedor
function verificarVencedor(jogador1, jogador2) {
    if (jogador1.pontuacao > 21 && jogador2.pontuacao > 21) {
        return "Ninguém ganhou";
    } else if (jogador1.pontuacao > 21) {
        return jogador2.nome;
    } else if (jogador2.pontuacao > 21) {
        return jogador1.nome;
    } else if (jogador1.pontuacao === 21) {
        return jogador1.nome;
    } else if (jogador2.pontuacao === 21) {
        return jogador2.nome;
    } else if (jogador1.pontuacao > jogador2.pontuacao) {
        return jogador1.nome;
    } else if (jogador2.pontuacao > jogador1.pontuacao) {
        return jogador2.nome;
    } else {
        return "Empate";
    }
}

console.log(verificarVencedor(jogador1, jogador2));


