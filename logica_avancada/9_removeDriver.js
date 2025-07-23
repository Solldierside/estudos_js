// Agora vamos criar uma função que remove um motorista
const motoristas = require("../data/motoristas.js");
const fs = require("fs");
const path = require("path");

function removeDriver(id) {
  // Verifica se o motorista com o ID fornecido existe
  const motoristaExistente = motoristas.find(m => m.id === id);

  if (motoristaExistente === undefined) {
    return console.log("Motorista não encontrado.");
  }

  // Remove o motorista da lista
  // O método splice remove o motorista da lista e retorna o motorista removido
  // O ID do motorista é usado para encontrar o índice correto na lista
  // O ID é subtraído por 1 porque os índices de arrays começam em 0
  // Por exemplo, se o ID for 3, o índice será 2
  // O método splice também retorna o motorista removido, que podemos usar para confirmar a remoção
  // O motorista removido é armazenado na variável motoristaRemovido
  const motoristaRemovido = motoristas.splice(motoristaExistente.id - 1, 1)[0];

  // Salva a lista atualizada de motoristas no arquivo
  const filePath = path.join(__dirname, "../data/motoristas.js");
  const conteudo = `const motoristas = ${JSON.stringify(motoristas, null, 2)};\n\nmodule.exports = motoristas`;
  // Não precisa se preocupar em entender o código abaixo,
  // apenas entenda que ele salva os motoristas atualizados em um arquivo
  // Na prática não é função do frontend salvar arquivos, mas sim do backend
  // Aqui estamos simulando isso para fins de estudo
  fs.writeFileSync(filePath, conteudo, "utf-8");

  return console.log("Motorista removido:", motoristaRemovido);
}

// Exemplo de uso da função
removeDriver(3); // Remove o motorista com ID 3