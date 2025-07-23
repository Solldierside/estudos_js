// Vamos criar uma função que retorna todos os motoristas que estão com a carga 
// com valor entre 200 e 300
const motoristas = require('../data/motoristas.js')


function getDriversBetween() {
  const motoristasCargoValor = motoristas.filter(m => m.cargoValue >= 200 && m.cargoValue <= 300)
  if (motoristasCargoValor.length === 0) {
    return console.log("Menhum motorista tem cargo com esse valor")
  }
  return console.log(motoristasCargoValor)
}
  // Filtrar motoristas com cargoValue entre 200 e 300
  // Retornar os motoristas filtrados
getDriversBetween()

