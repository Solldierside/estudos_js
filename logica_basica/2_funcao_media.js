// Vamos criar uma função, que recebe uma lista de 3 notas, e retorna a média do aluno.

let joao = [8, 8, 10]
let carlos = [3, 5, 9]

function medeiaDoAluno(listaDeNotas) {
  let somaDasNotas = listaDeNotas[0] + listaDeNotas[1] + listaDeNotas[2]
  let media = somaDasNotas / 3
  return console.log("A média do aluno é", media)
}

// medeiaDoAluno(carlos)

// Melhorar: Não calcular a média, mas dizer se o aluno foi aprovado ou não
function medeiaDoAluno2(listaDeNotas) {
  let mediaExigida = 7
  let somaDasNotas = listaDeNotas[0] + listaDeNotas[1] + listaDeNotas[2]
  let media = somaDasNotas / 3

  if (media >= mediaExigida) {
    return console.log("Aprovado, sua média foi:", media.toFixed(2))
  } else {
    return console.log("Reprovado, sua média foi:", media.toFixed(2))
  }
}

medeiaDoAluno2(joao)