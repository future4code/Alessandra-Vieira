//----------------------------Projeto---------------------------------------
console.log('Bem vindo ao jogo de Blackjack!')

const jogar = confirm('Quer iniciar uma nova rodada?')

if (jogar) {
  const sortearCartaUsuario1 = comprarCarta()
  const sortearCartaUsuario2 = comprarCarta()
  const sortearCartaComputador1 = comprarCarta()
  const sortearCartaComputador2 = comprarCarta()
}
const pontosDoUsuario = sortearCartaUsuario1.valor + sortearCartaUsuario2.valor
const pontosDoComputador =
  sortearCartaComputador1.valor + sortearCartaComputador2.valor

console.log(
  `Usuário - cartas: ${sortearCartaUsuario1.texto} ${sortearCartaUsuario2.texto} - ${pontosDoUsuario} `
)
console.log(
  `Computador - cartas: ${sortearCartaComputador1.texto} ${sortearCartaComputador2.texto} - ${pontosDoComputador}`
)

if (pontosDoUsuario > pontosDoComputador) {
  console.log('O usuário ganhou!')
} else if (pontosDoComputador > pontosDoUsuario) {
  console.log('O computador ganhou!')
} else if (pontosDoUsuario === pontosDoComputador) {
  console.log('Empate!')
} else {
  console.log('O jogo acabou')
}
