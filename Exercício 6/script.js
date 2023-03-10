// Menu interativo contendo a lista de pacientes em ordem mostrando a posição ao lado do nome, utilizando alert e prompt. Opção de adicionar um novo paciente e remover um paciente existente com o nome de "consultar"

// Lista de pacientes
let pacientes = [
  "João",
  "Maria",
  "José",
  "Marcos",
  "Ana",
  "Paulo",
  "Juliana",
  "Rafael",
  "Mariana",
  "Fernanda",
  "Pedro",
  "Warley",
];

// Função para mostrar a lista de pacientes
function mostrarPacientes() {
  let lista = "";
  for (let i = 0; i < pacientes.length; i++) {
    lista += i + 1 + " - " + pacientes[i] + "\n";
  }
  alert(lista);
}

// Função para adicionar um novo paciente e mostra qual o nome e a posição
function adicionarPaciente() {
  let pacienteAdicionar = prompt("Digite o nome do paciente a ser adicionado:");
  if (pacientes.includes(pacienteAdicionar)) {
    alert("Paciente já cadastrado, insira um sobrenome!");
    return;
  } else {
    pacientes.push(pacienteAdicionar);
  }
  let indice = pacientes.indexOf(pacienteAdicionar);
  alert(`Paciente ${pacienteAdicionar} adicionado com sucesso na posição ${indice + 1}!`);
}

// Função para remover um paciente
function removerPaciente() {
  let pacienteRemover = prompt("Digite o nome do paciente a ser removido:");
  let indice = pacientes.indexOf(pacienteRemover);
  if (indice >= 0) {
    pacientes.splice(indice, 1);
    alert(`Paciente ${pacienteRemover} removido com sucesso!`);
  } else {
    alert("Paciente não encontrado, digite outro nome!");
  }
}

// Função para consultar um paciente
function consultarPaciente() {
  let pacienteConsultar = prompt("Digite o nome do paciente a ser consultado:");
  let indice = pacientes.indexOf(pacienteConsultar);
  if (pacientes.includes(pacienteConsultar)) {
    alert("Paciente encontrado na posição " + (indice + 1));
  } else {
    alert("Paciente não encontrado, digite outro nome!");
  }
}

// Função sair e fecha o sistema
function sair() {
  alert("Fechando o sistema");
}

// Menu interativo
let opcao = 0;
while (opcao != 5) {
  opcao = prompt(
    "Escolha uma opção:\n1 - Mostrar pacientes\n2 - Adicionar paciente\n3 - Remover paciente\n4 - Consultar paciente \n5 - Sair"
  );
  switch (opcao) {
    case "1":
      mostrarPacientes();
      break;
    case "2":
      adicionarPaciente();
      break;
    case "3":
      removerPaciente();
      break;
    case "4":
      consultarPaciente();
      break;
    case "5":
      sair();
      break;
    default:
      alert("Opção inválida, digite outra opção!");
  }
}

// Como resolver o erro que ao digitar o nome do paciente para pesquisar, aparece a mensagem "Opção inválida!"

// Exercício 7

// Path: Exercício 7\script.js
