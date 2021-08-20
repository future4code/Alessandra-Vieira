console.log('Exercicio de Funções de Array da aluna: Alessandra Ferreira')

//------------------------Exercicio de Interpretação de Código-------------------

//1.
//a) No console foi impresso o array de cada objeto, no caso: Objectapelido: "Mandi"nome: "Amanda Rangel"[[Prototype]]:
//Object 0 Array(3) Objectapelido: "Laura"nome: "Laís Petra"
//Object 1 Array(3) Objectapelido: "Chijo"nome: "Letícia Chijo"
//Object 2 Array(3)0: Objectapelido: "Chijo"nome: "Letícia Chijo

//2.
//a) Tá pedindo apenas os usuarios do objeto. ["Amanda Rangel", "Laís Petra", "Letícia Chijo"]

//3.
// Essa questão tá pedindo para o console apenas os usuarios diferente do apelido Chijo, ou seja, a Mandi e a Laura.

//---------------------------Exercicios de Escrita de código---------------------

//1.
/*
const pets = [
  { nome: 'Lupin', raca: 'Salsicha' },
  { nome: 'Polly', raca: 'Lhasa Apso' },
  { nome: 'Madame', raca: 'Poodle' },
  { nome: 'Quentinho', raca: 'Salsicha' },
  { nome: 'Fluffy', raca: 'Poodle' },
  { nome: 'Caramelo', raca: 'Vira-lata' }
]
//a)
//const nomeDosDoguinhos = pets.map((intem, index, array) => {
//return intem.nome
//})
//console.log(nomeDosDoguinhos)

//b)
function extrairNome(obj) {
  return obj.raca
}
const primeiroNome = extrairNome(pets[0])
console.log(primeiroNome)

const segundoNome = extrairNome(pets[3])
console.log(segundoNome)

/*
c)
let cupomDeDesconto = pets.filter(poodle => {
  return poodle.raca === 'poodle'
})
const mensagem = pets.map(fofinho => {
  return `Parabéns! Você acaba de ganhar um cupom com 10% de desconto para um banho super relaxante para seu Poodle" ${pets.nome}`
})
console.log(mensagem)
*/
//2.
/*
const produtos = [
  { nome: 'Alface Lavada', categoria: 'Hortifruti', preco: 2.5 },
  { nome: 'Guaraná 2l', categoria: 'Bebidas', preco: 7.8 },
  { nome: 'Veja Multiuso', categoria: 'Limpeza', preco: 12.6 },
  { nome: 'Dúzia de Banana', categoria: 'Hortifruti', preco: 5.7 },
  { nome: 'Leite', categoria: 'Bebidas', preco: 2.99 },
  { nome: 'Cândida', categoria: 'Limpeza', preco: 3.3 },
  { nome: 'Detergente Ypê', categoria: 'Limpeza', preco: 2.2 },
  { nome: 'Vinho Tinto', categoria: 'Bebidas', preco: 55 },
  { nome: 'Berinjela kg', categoria: 'Hortifruti', preco: 8.99 },
  { nome: 'Sabão em Pó Ypê', categoria: 'Limpeza', preco: 10.8 }
]
/*
a)
const nomeCompras = produtos.map(compras => {
  return compras.nome
})
console.log(nomeCompras)
*/
