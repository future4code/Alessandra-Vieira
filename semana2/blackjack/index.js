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
  console.log('Parabén, você ganhou!')
} else if (pontosDoComputador > pontosDoUsuario) {
  console.log('Não foi dessa vez, o computador ganhou!')
} else if (pontosDoUsuario === pontosDoComputador) {
  console.log('Os dois são vencedores!')
} else {
  console.log('Fim de jogo')
}
