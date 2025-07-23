// Vamos criar uma função que receba um ID de um motorista e retorne os dados desse motorista

// Primeiro temos que importar os dados (Data) dos motoristas
const motoristas = require('../data/motoristas.js')

function getDriverByID(id) {
  const driver = motoristas.find(motorista => motorista.id === id);

  if (driver) {
    return console.log(
      "Motorista encontrado:" + "\n",
      "Nome: " + driver.name + "\n",
      "Tipo: " + driver.type + "\n",
      "Status: " + driver.status + "\n",
      "Cargo Value: " + driver.cargoValue + "\n",
      "Tem Assistente: " + driver.hasAssitent
    );
  } else {
    return console.log("Motorista não encontrado.");
  }
}

getDriverByID(10); // Exemplo de uso, deve retornar o motorista com id 10


// Observações:
// O uso de "\n" é para criar quebras de linha na string exibida no console. Só serve para o console.log()

// O método find() retorna o primeiro elemento que satisfaz a condição fornecida na função de callback.
// Se nenhum elemento satisfaz a condição, ele retorna undefined.
// Portanto, é importante verificar se o motorista foi encontrado antes de tentar acessar suas propriedades.