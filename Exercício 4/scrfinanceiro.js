let ask;
let add;
let remove;
let message;

let money = parseFloat(prompt("Qual a quantidade inicial de dinheiro?"));

do {
  ask = parseInt(
    prompt(
      `A sua quantidade de dinheiro é: ${money}.\n1. Adicionar? \n2. Remover? \n3. Sair?`
    )
  );

  switch (ask) {
    case 1:
      add = parseInt(
        prompt(`Qual a quantidade de dinheiro você deseja adicionar?`)
      );
      message = alert(`A sua quantidade de dinheiro atual é: ${money + add}`);
      money += add;
      break;

    case 2:
      remove = parseInt(
        prompt(`Qual a quantidade de dinheiro você deseja remover?`)
      );
      message = alert(
        `A sua quantidade de dinheiro atual é: ${money - remove}`
      );
      money -= remove;
      break;

    case 3:
      alert("Encerrando o sistema...");
      break;

    default:
      alert("Opção inválida! Tente novamente.");
  }
} while (ask !== 3);
