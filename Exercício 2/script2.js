const player1 = {
    name: prompt("Insira o nome do personagem de ataque:"),
    power: parseInt(prompt("Insira um valor de ataque de 1 a 100:"), 10),
  };
  
  const player2 = {
    name: prompt("Insira o nome do personagem de defesa:"),
    life: parseInt(prompt("Insira um valor de vida de 1 a 100:"), 10),
    defense: parseInt(prompt("Insira um valor de defesa de 1 a 100:"), 10),
    shield: prompt("Seu personagem possui escudo? Responda S ou N:").toUpperCase(),
  };
  
  const calculateDamage = () => {
    if (player1.power > player2.defense && player2.shield === "N") {
      return player1.power - player2.defense;
    } else if (player1.power > player2.defense && player2.shield === "S") {
      return (player1.power - player2.defense) / 2;
    }
    return 0;
  };
  
  const damage = calculateDamage();
  player2.life -= damage;
  
  alert(`O dano que ${player1.name} causou à ${player2.name} é igual a: ${damage}.`);