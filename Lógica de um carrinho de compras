
let operacao_doUsuario = parseInt(gets()); // 1 para inserir, 2 pra retirar
let quantidade_produtos = parseInt(gets()); 

let estoque_daLoja = 5;

if (operacao_doUsuario === 1) {
  estoque_daLoja += quantidade_produtos;
  console.log(estoque_daLoja);
} else if (operacao_doUsuario === 2) { 
  if (quantidade_produtos <= estoque_daLoja) {
    estoque_daLoja -= quantidade_produtos;
    console.log(estoque_daLoja);
  } else {
    console.log("Estoque insuficiente");
  }
} else {
  console.log("Operação inválida"); 
}
