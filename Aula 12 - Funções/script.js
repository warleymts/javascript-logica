
// Parâmentros

// function dobro (x) {
// alert(`O dobro de ${x} é ${x*2}`);
// }

// dobro();


// function dizerOi(nome) {
// alert(`Olá, ${nome}`);
// }

// dizerOi('João');


// Aprendendo sobre Return

// function calcularMedia(a, b) {
//     const media = (a + b) / 2;
//     return media;
// }

// const media1 = calcularMedia(10, 6);
// console.log(media1);



// function criarProduto(nome, preco) {
//     const produto = {
//         nome,
//         preco,
//         estoque: 1
//     }
    
//     return produto;
// }

// const notebook = criarProduto('Notebook', 2199);
// console.log(notebook);


function areaRetangulo(largura, altura) {
    const area = largura * altura;
    return area;
}

function areaQuadrado(lado) {
    return areaRetangulo(lado, lado);
}


function hello() {
    let text = 'Hello';    
    text2 = ' World!';
    return text + text2;
}

console.log(hello());
