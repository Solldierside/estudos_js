// Vamos criar uma função que retorna todos os motoristas que são da Casa E tem assitente (entregador)
const motoristas = require('../data/motoristas.js')

function getDriversHomeAndAssitent() {
  const motoristasDaCasaComAjudante = motoristas.filter(m => m.type === "casa" && m.hasAssitent === true)
  if (motoristasDaCasaComAjudante.length === 0) {
    return console.log("Menhum motorista da casa tem assistente no momento")
  }
  return console.log(motoristasDaCasaComAjudante)
}

getDriversHomeAndAssitent()

// Observações:
// Usamos o && como AND, ou seja, a compração deve satisfazer as duas condições.