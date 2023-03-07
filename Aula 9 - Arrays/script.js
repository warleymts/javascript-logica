const arr = [
  "Frodo",
  "Sam",
  "Merry",
  "Pippin",
  "Gandalf",
  "Aragorn",
  "Legolas",
  "Gimli",
];

// Adicionar elementos
// Push
arr.push("Boromir");
console.log(arr);

// Unshift
arr.unshift("Gandalf");
console.log(arr);


// Remover elementos
// Pop
arr.pop();
console.log(arr);

// Shift
arr.shift();
console.log(arr);


// Pesquisar elementos
// Includes
const inclui = arr.includes("Aragorn");
console.log(inclui);

// IndexOf
const index = arr.indexOf("Aragorn");
console.log(index);


// Cortar e concatenar
// Slice
const arr2 = arr.slice(0, 3);
console.log(arr2);