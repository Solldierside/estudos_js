// Vamos criar uma função que retorna o valor total das cargas em transito.
const listaDeMotoristas = require("../data/motoristas")

function getAmountCargoValue() {
  const motoristasEmViagem = listaDeMotoristas.filter(motorista => motorista.status === "viajando")
  // Uma forma de inicar um variável com valor 0
  let somaDasCargas = 0

  motoristasEmViagem.forEach(motorista => somaDasCargas += motorista.cargoValue)
  return console.log(somaDasCargas)
}

getAmountCargoValue()

// => Arrow Function
// Ativiação da função.
// forEach não retorna nada.

