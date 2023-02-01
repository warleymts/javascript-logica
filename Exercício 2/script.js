// Carro 1
let carOne = prompt("Insira o nome do carro 1: ");
let veloOne = prompt("Defina a velocidade do carro 1:");

// Carro 2
let carTwo = prompt("Insira o nome do carro 2: ");
let veloTwo = prompt("Insira a velocidade do carro 2: ");


// Cálculos
if (veloOne > veloTwo) {
  alert("O " + carOne + " é mais rápido do que o " + carTwo + ".");
} else if (veloTwo > veloOne) {
  alert("O " + carTwo + " é mais rápido do que o " + carOne + ".");
} else {
  alert("A velocidade de " + carOne + " e " + carTwo + " são iguais.");
}
