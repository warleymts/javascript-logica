// Um programa para calcular a área de diferentes formas geométricas. O programa deve iniciar com um menu contendo as diferntes opções de cálculos:
// Área do triângulo: base * altura / 2
// Área do retângulo: base * altura
// Área do círculo: PI * raio² (PI = 3.14)
// Área do trapézio: (base maior + base menor) * altura / 2

// O programa deve ler a opção desejada, ler os dados necessários para o cálculo e mostrar o resultado na tela.
// O programa também deve conter uma opção para sair do programa.

// Dica: use a função prompt() para ler as entradas do usuário.
// Dica: use a função parseFloat() para converter a entrada do usuário para número decimal.
// Dica: use a função alert para mostrar o resultado na tela.

// Código do programa
// Variáveis
let opcao = 0;
let base = 0;
let altura = 0;
let raio = 0;
let baseMaior = 0;
let baseMenor = 0;
let area = 0;
let pi = 3.14;

// Menu
opcao = parseInt(
  prompt(
    "Escolha uma opção: \n1 - Área do triângulo \n2 - Área do retângulo \n3 - Área do círculo \n4 - Área do trapézio \n5 - Sair"
  )
);

// Funções
function areaTriangulo(base, altura) {
  base = parseFloat(prompt(`Digite o valor da base: `));
  altura = parseFloat(prompt(`Digite o valor da altura: `));
  area = (base * altura) / 2;
  alert(`A área do triângulo é: ${area}`);
}

function areaRetangulo(base, altura) {
  base = parseFloat(prompt(`Digite o valor da base: `));
  altura = parseFloat(prompt(`Digite o valor da altura: `));
  area = base * altura;
  alert(`A área do retângulo é: ${area}`);
}

function areaCirculo(raio) {
  raio = parseFloat(prompt(`Digite o valor do raio: `));
  area = pi * (raio * raio);
  alert(`A área do círculo é: ${area}`);
}

function areaTrapezio(baseMaior, baseMenor, altura) {
  baseMaior = parseFloat(prompt(`Digite o valor da base maior: `));
  baseMenor = parseFloat(prompt(`Digite o valor da base menor: `));
  altura = parseFloat(prompt(`Digite o valor da altura: `));
  area = ((baseMaior + baseMenor) * altura) / 2;
  alert(`A área do trapézio é: ${area}`);
}


// Condição com switch
switch (opcao) {
  case 1:
    areaTriangulo(base, altura);
    break;
  case 2:
    areaRetangulo(base, altura);
    break;
  case 3:
    areaCirculo(raio);
    break;
  case 4:
    areaTrapezio(baseMaior, baseMenor, altura);
    break;
  case 5:
    alert(`Obrigado por utilizar nosso programa!`);
    break;
  default:
    alert(`Opção inválida!`);
    break;
}
