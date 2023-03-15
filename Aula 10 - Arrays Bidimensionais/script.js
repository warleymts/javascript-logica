const matriz = [
    ["l1, c1", "l1, c2", "l1, c3"],
    ["l2, c1", "l2, c2", "l2, c3"],
    ["l3, c1", "l3, c2", "l3, c3"]
];

matriz.push(["l4, c1", "l4, c2", "l4, c3"]);

// console.table(matriz);

for (let i = 0; i < matriz.length; i++) {
    for (let j = 0; j < matriz[i].length; j++) {
        const element = matriz[i][j];
        console.log(element);
    }
}