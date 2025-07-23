const motoristas = require("../data/motoristas.js");
// FS é uma biblioteca do Node.js que permite interagir com o sistema de arquivos
const fs = require("fs");
// Path é uma biblioteca do Node.js que fornece utilitários para trabalhar com caminhos de arquivos
const path = require("path");

function saveNewDriver(name, type)  {
  // Verifica se o nome do motorista já existe na lista
  const motoristaExistente = motoristas.find(m => m.name === name);
  
  if (motoristaExistente) {
    return console.log("Motorista já existe na lista.");
  }

  // Cria um novo motorista com os dados fornecidos
  const novoMotorista = {
    id: motoristas.length + 1,
    name: name,
    type: type,
    status: "aguardando",
    cargoValue: 0.0,
    hasAssitent: false
  };

  // O método PUSH adiciona o novo motorista à lista
  motoristas.push(novoMotorista);

  // Não precisa se preocupar em entender o código abaixo,
  // apenas entenda que ele salva os motoristas atualizados em um arquivo
  // Na prática não é função do frontend salvar arquivos, mas sim do backend
  // Aqui estamos simulando isso para fins de estudo
  const filePath = path.join(__dirname, `../data/motoristas.js`);
  const conteudo = `const motoristas = ${JSON.stringify(motoristas, null, 2)};\n\nmodule.exports = motoristas`;
  fs.writeFileSync(filePath, conteudo, "utf-8");

  return console.log("Novo motorista adicionado:", novoMotorista);
}

// Exemplo de uso da função
saveNewDriver("Ricardo", "casa");
