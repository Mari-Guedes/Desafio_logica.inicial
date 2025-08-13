
let numeroDeProdutos = parseInt(gets());

let produtos = []

for (let i = 0; i < numeroDeProdutos; i++) {
  let nomeProduto = gets();
  produtos.push(nomeProduto);
}

console.log("Carrinho final: " + produtos.join(", "));
