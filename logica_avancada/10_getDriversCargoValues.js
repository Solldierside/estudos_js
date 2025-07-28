// Vamos criar uma função que retorna uma lista com o Nome de todos os Motorista ao lado do VALOR da carga
const motoristas = require("../data/motoristas.js");

const getDriversCargoValues = () => {
  // MAP. Retorna o mesmo Array com as modificações pedidas
  const resultado = motoristas.map(motorista => motorista.name + ": valor da carga R$" + motorista.cargoValue)

  return console.log(resultado)
};

getDriversCargoValues()