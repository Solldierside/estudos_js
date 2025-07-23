// Vamos criar uma função que retorna a QUANTIDADE de motoristas que estão viajando
const motoristas = require('../data/motoristas.js')

function getTravelingDrivers() {
  // Filtrar motoristas com status "viajando"
  const motoristasEmViagem = motoristas.filter(motorista => motorista.status === "viajando");
  
  // Verificar se há motoristas viajando
  if (motoristasEmViagem.length === 0) {
    return console.log("Nenhum motorista está viajando no momento.");
  }
  // Quantidade de motoristas viajando
  const quantidade = motoristasEmViagem.length
  
  // Retornar a quantidade de motoristas viajando
  return console.log("Quantidade de motoristas viajando:", quantidade);
}

getTravelingDrivers()