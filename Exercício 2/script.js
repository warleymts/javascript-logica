// Carro 1
const carOne = {
  name: prompt("Insira o nome do carro 1: "),
  velo: prompt("Defina a velocidade do carro 1:"),
};

// Carro 2
const carTwo = {
  name: prompt("Insira o nome do carro 2: "),
  velo: prompt("Insira a velocidade do carro 2: "),
};

// Cálculos
if (carOne.velo > carTwo.velo) {
  alert(`O(a) ${carOne.name} é mais rápido(a) do que o(a) ${carTwo.name}.`);
} else if (carTwo.velo > carOne.velo) {
  alert(`O(a) ${carTwo.name} é mais rápido(a) do que o(a) ${carOne.name}.`);
} else {
  alert(`A velocidade de ${carOne.name} e ${carTwo.name} são iguais.`);
}
