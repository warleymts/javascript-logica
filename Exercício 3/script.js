const touristName = prompt("Qual é o seu nome?");
let quantityCity = [];
let answer = prompt("Você já visitou alguma cidade? (sim/não)");
let ask = "Qual cidade você visitou?";

while (answer === "sim") {
  let city = prompt(ask);
  quantityCity.push(city);
  ask = "Qual outra cidade você visitou?";
  answer = prompt("Você visitou mais alguma cidade? (sim/não)");
}

if (quantityCity.length === 0) {
  alert(`${touristName}, você não visitou nenhuma cidade :(`);
} else {
  alert(
    `${touristName}, você visitou ${quantityCity.length} cidade(s): ${quantityCity.join(", ")}.`);
}
