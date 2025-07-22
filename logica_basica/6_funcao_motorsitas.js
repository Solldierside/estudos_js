
let casa = ["Ernesto", "Costa", "Ladislau", "Queiroz", "Soldado", "Eliezio", "Rodrigo"]
let terceirizado = ["Micael", "Lucas", "James","Alex", "Venicio", "Edelson", "jocielton"]

//Função para retornar tipo de motorista 
function retornaMotorista(motorista) {
  if (casa.includes(motorista)) {
    return console.log("O Motorista é da casa")
  } else if (terceirizado.includes(motorista)) {
    return console.log("O Motorista é Terceirizado")
  } else {
    return console.log ("O Motorista não trabalha na Empresa")
  }
}

  retornaMotorista("Lucas")