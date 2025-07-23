// Vamos criar uma função que retorna todos os motoristas que estão de férias ou aguardando
const motoristas = require('../data/motoristas.js')

function getVacationOrWaitingDriver() {
  let motoristasEmFeriasOuAguardando = motoristas.filter(motorista => motorista.status === "férias" || motorista.status === "aguardando");
  
  if (motoristasEmFeriasOuAguardando.length === 0) {
    return console.log("Nenhum motorista está de férias ou aguardando no momento.");
  }
  
  return console.log(motoristasEmFeriasOuAguardando);
}

getVacationOrWaitingDriver(); // Exemplo de uso, deve retornar todos os motoristas com status "férias" ou "aguardando"

// Observações:
// O operador || é usado como OR, ou seja, a condição será verdadeira se pelo menos uma das comparações for verdadeira.
