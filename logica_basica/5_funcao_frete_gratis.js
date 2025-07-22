// Vamos criar uma função que calcula se o cliente tem direito a frete grátis
// Regras: A compra deve ser acima de R$ 150,00 
// A função deve receber dois parâmetros: um poduto e o valor total da compra
// E o produto deve ser um produto da promoção

let produtosDaPromocao = ["Camiseta", "Calça", "Tênis", "Jaqueta", "Boné"]
let valorMinimo = 150

function calcularFreteGratis(protudo, valorTotalDaCompra) {
  let produtoValido = produtosDaPromocao.includes(protudo)
  let valorSuficiente = valorTotalDaCompra >= valorMinimo

  if (produtoValido && valorSuficiente) {
    return console.log("Parabéns! Você conseguiu frete grátis!")
  } else {
    return console.log("Infelizmente, você não tem direito a frete grátis")
  }
}


// calcularFreteGratis("Baton", 150)

// A mensagem deve informar quanto falta para atingir o valor mínimo
function calcularFreteGratis2(produto, valorTotal) {
  let produtoValido = produtosDaPromocao.includes(produto)
  let valorSuficiente = valorTotal >= valorMinimo

  if (produtoValido && valorSuficiente) {
    return console.log("Parabéns! Você conseguiu frete grátis!")
  } else if (produtoValido && !valorSuficiente) {
    let valorNecessario = valorMinimo - valorTotal
    return console.log("Você precisa gastar mais R$", valorNecessario.toFixed(2), "para ter direito ao frete grátis")
  } else {
    return console.log("Infelizmente, você não tem direito a frete grátis")
  }
}

calcularFreteGratis2("Camiseta", 150)