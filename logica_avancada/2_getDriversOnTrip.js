// Vamos criar uma função que retorna todos os motoristas que estão viajando
const motoristas = require('../data/motoristas.js')

function getDriversOnTrip() {
  const motoristasEmViagem = motoristas.filter(motorista => motorista.status === "viajando");
  if (motoristasEmViagem.length === 0) {
    return console.log("Nenhum motorista está viajando no momento.");
  }
  return console.log(motoristasEmViagem)
}

getDriversOnTrip(); // Exemplo de uso, deve retornar todos os motoristas com status "viajando"


// Observações:
// O método filter() retorna um array vazio se nenhum elemento satisfaz a condição.
// Portanto, é importante verificar se o array resultante está vazio antes de tentar exibir os motoristas.
// O método .length é usado para verificar o "tamanho" do array. Ou seja, a quantidade de elementos que ele possui.