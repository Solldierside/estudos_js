// Objetos são dados estruturados em CHAVE e VALOR, separados por vírgula
// Exemplo:
let pessoa = { nome: "Ricardo" }

let joao = {nome: "João", notas: [3, 9, 7], disciplina: "Programação"}
let carlos = {
  nome: "Carlos José",
  disciplina: "Eduacação Física",
  notas: [8, 2, 5]
}
let maria = {
  notas: [8, 9, 7],
  nome: "Maria",
  disciplina: "Química"
}

function mostrarAvaliacao(dadosDoAluno) {
  let mediaExigida = 7
  let somaDasNotas = dadosDoAluno.notas[0] + dadosDoAluno.notas[1] + dadosDoAluno.notas[2]
  let media = somaDasNotas / 3

  if (media >= mediaExigida) {
    return console.log("Aluno", dadosDoAluno.nome, "Aprovado em", dadosDoAluno.disciplina, "Com média de:", media.toFixed(2))
  } else {
    return console.log("Aluno", dadosDoAluno.nome, "Reprovado em", dadosDoAluno.disciplina, "Com média de:", media.toFixed(2))
  }
}

mostrarAvaliacao(joao)



