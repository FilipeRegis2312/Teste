const produto = [
    { nome: 'Notebook', preco: 2499, fragil: true },
    { nome: 'iPad Pro', preco: 4199, fragil: true },
    { nome: 'Copo de vidro', preco: 12.49, fragil: true },
    { nome: 'Copo de plastico', preco: 18.99, fragil: false }
]

function retornaFragil(p, b) {
    if (p.nome === b) {
        return true;
    }
}

console.log(produto.filter(retornaFragil))
