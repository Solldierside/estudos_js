// Contrato:
// id: identificador único do motorista
// name: nome do motorista
// type: tipo do motorista (casa ou terceirizado)
// status: status do motorista, pode ser "viajando", "carregando", "aguardando" ou "férias"
// cargoValue: valor da carga
// hasAssitent: booleano indicando se o motorista tem assistente ou não

const motoristas = [
  {id: 1, name: "Ernesto", type: "casa", status: "viajando", cargoValue: 100.0, hasAssitent: false},
  {id: 2, name: "Costa", type: "casa", status: "carregando", cargoValue: 200.0, hasAssitent: true},
  {id: 3, name: "Ladislau", type: "casa", status: "aguardando", cargoValue: 0.0, hasAssitent: false},
  {id: 4, name: "Queiroz", type: "casa", status: "viajando", cargoValue: 300.0, hasAssitent: true},
  {id: 5, name: "Soldado", type: "casa", status: "carregando", cargoValue: 250.0, hasAssitent: false},
  {id: 6, name: "Eliezio", type: "casa", status: "férias", cargoValue: 0.0, hasAssitent: true},
  {id: 7, name: "Rodrigo", type: "casa", status: "viajando", cargoValue: 220.0, hasAssitent: false},
  {id: 8, name: "Micael", type: "terceirizado", status: "viajando", cargoValue: 120.0, hasAssitent: true},
  {id: 9, name: "Lucas", type: "terceirizado", status: "carregando", cargoValue: 280.0, hasAssitent: false},
  {id: 10, name: "James", type: "terceirizado", status: "aguardando", cargoValue: 0.0, hasAssitent: true},
  {id: 11, name: "Alex", type: "terceirizado", status: "viajando", cargoValue: 310.0, hasAssitent: false},
  {id: 12, name: "Venicio", type: "terceirizado", status: "carregando", cargoValue: 230.0, hasAssitent: true},
  {id: 13, name: "Edelson", type: "terceirizado", status: "aguardando", cargoValue: 0.0, hasAssitent: false},
  {id: 14, name: "Jocielton", type: "terceirizado", status: "viajando", cargoValue: 270.0, hasAssitent: true}
]

// Forma de exportar os dados do motorista, para serem acessados em outros arquivos.
module.exports = motoristas;