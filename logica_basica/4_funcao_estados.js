let nordeste = ["Maranhão", "Piauí", "Ceará", "Rio Grande do Norte", "Paraíba", "Pernambuco", "Alagoas", "Sergipe", "Bahia"]
let sudeste = ["São Paulo", "Rio de Janeiro", "Minas Gerais", "Espírito Santo"]
let sul = ["Paraná", "Santa Catarina", "Rio Grande do Sul"]
let centroOeste = ["Mato Grosso", "Mato Grosso do Sul", "Goiás", "Distrito Federal"]
let norte = ["Acre", "Amapá", "Amazonas", "Pará", "Rondônia", "Roraima", "Tocantins"]

// Vamos criar uma função que recebe como parâmetro um estado, e retorna a região que ele pertence.

function retornaRegiao(estado) {
  if (nordeste.includes(estado)) {
    return console.log("O estado pertence à região Nordeste")
  } else if (sudeste.includes(estado)) {
    return console.log("O estado pertence à região Sudestes")
  } else if (sul.includes(estado)) {
    return console.log("O estado pertence à região Sul")
  } else if (centroOeste.includes(estado)) {
    return console.log("O estado pertence à região Centro Oeste")
  } else if (norte.includes(estado)) {
    return console.log("O estado pertence à região Norte")
  } else {
    return console.log("Estado não existe no Brasil")
  }
}

// retornaRegiao("Paraná")

// Aqui temos um exemplo de Array de Objetos
let estadosBrasileiros = [
  {nome: "Acre", regiao: "Norte"},
  {nome: "Alagoas", regiao: "Nordeste"},
  {nome: "Amapá", regiao: "Norte"},
  {nome: "Amazonas", regiao: "Norte"},
  {nome: "Bahia", regiao: "Nordeste"},
  {nome: "Ceará", regiao: "Nordeste"},
  {nome: "Distrito Federal", regiao: "Centro-Oeste"},
  {nome: "Espírito Santo", regiao: "Sudeste"},
  {nome: "Goiás", regiao: "Centro-Oeste"},
  {nome: "Maranhão", regiao: "Nordeste"},
  {nome: "Mato Grosso", regiao: "Centro-Oeste"},
  {nome: "Mato Grosso do Sul", regiao: "Centro-Oeste"},
  {nome: "Minas Gerais", regiao: "Sudeste"},
  {nome: "Pará", regiao: "Norte"},
  {nome: "Paraíba", regiao: "Nordeste"},
  {nome: "Paraná", regiao: "Sul"},
  {nome: "Pernambuco", regiao: "Nordeste"},
  {nome: "Piauí", regiao: "Nordeste"},
  {nome: "Rio de Janeiro", regiao: "Sudeste"},
  {nome: "Rio Grande do Norte", regiao: "Nordeste"},
  {nome: "Rio Grande do Sul", regiao: "Sul"},
  {nome: "Rondônia", regiao: "Norte"},
  {nome: "Roraima", regiao: "Norte"},
  {nome: "Santa Catarina", regiao: "Sul"},
  {nome: "São Paulo", regiao: "Sudeste"},
  {nome: "Sergipe", regiao: "Nordeste"},
  {nome: "Tocantins", regiao: "Norte"}    
]

function retornaRegiao2(estado) {
  let estadoEncontrado = estadosBrasileiros.find((item) => item.nome === estado )

  if (estadoEncontrado) {
    return console.log("O estado", estado, "Pertence à região", estadoEncontrado.regiao)
  } else {
    return console.log("Estado não encontrado no Brasil")
  }
}

retornaRegiao2("Ceará")