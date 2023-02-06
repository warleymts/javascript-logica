let num = prompt("Digite o número para calcular a tabuada:");
let result = "";

for (let i = 1; i <= 20; i++) {
  result += `${num} x ${i} = ${num * i}\n`;
}

alert(`O resultado da tabuada é: \n${result}`);
