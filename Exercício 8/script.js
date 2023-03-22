// Um programa que funciona como um cadastro de imóveis, onde o usuário pode cadastrar um imóvel, consultar um imóvel, listar todos os imóveis cadastrados e sair do programa.
// Para cadastrar um imóvel, o programa deve pedir o endereço, o valor do aluguel e o número de quartos.


// constiáveis
const imoveis = [];
const opcao = 0;

// Funções
function cadastrarImovel() {
    const endereco = prompt("Digite o endereço do imóvel");
    const valorAluguel = prompt("Digite o valor do aluguel");
    const numeroQuartos = prompt("Digite o número de quartos");
    const imovel = {
        endereco: endereco,
        valorAluguel: valorAluguel,
        numeroQuartos: numeroQuartos
    };
    imoveis.push(imovel);
}

function consultarImovel() {
    const endereco = prompt("Digite o endereço do imóvel");
    const imovel = imoveis.find(function(imovel) {
        return imovel.endereco == endereco;
    });
    if (imovel) {
        alert("Endereço: " + imovel.endereco + "\nValor do aluguel: " + imovel.valorAluguel + "\nNúmero de quartos: " + imovel.numeroQuartos);
    } else {
        alert("Imóvel não encontrado");
    }
}

function listarImoveis() {
    const lista = "";
    imoveis.forEach(function(imovel) {
        lista += "Endereço: " + imovel.endereco + "\nValor do aluguel: " + imovel.valorAluguel + "\nNúmero de quartos: " + imovel.numeroQuartos + "\n\n";
    });
    alert(lista);
}

function sair() {
    alert("Obrigado por utilizar nosso programa");
}

// Loop principal
while (opcao != 4) {
    opcao = prompt("Digite a opção desejada:\n1 - Cadastrar imóvel\n2 - Consultar imóvel\n3 - Listar imóveis\n4 - Sair");
    switch (opcao) {
        case "1":
            cadastrarImovel();
            break;
        case "2":
            consultarImovel();
            break;
        case "3":
            listarImoveis();
            break;
        case "4":
            sair();
            break;
        default:
            alert("Opção inválida");
    }
}

