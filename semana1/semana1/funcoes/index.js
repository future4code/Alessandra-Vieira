console.log("Exercicios Funções da aluna: Alessandra Ferreira")


//---------------------------------Exercicios de Interpretação de Código----------------------------------------

//1.
//a) O que vai ser impresso no console?
//10 50

//b) O que aconteceria se retirasse os dois console.log e simplesmente invocasse a função minhaFuncao(2) 
//e minhaFuncao(10)? O que apareceria no console?
//Não apareceria nada no console, pois a função desse comando é imprimir a variavél na tela.

//
//2.
//a. Explique o que essa função faz e qual é sua utilidade
//É é um bloco de código que
//pode ser chamado (ou invocado) a
//partir de um nome, no caso dessa, uma forma diferente de declarar funções, tá pedindo para determinar se o conjunto de caracteres 
//pode ser encontrado dentro de outra string, retornando true e false, também pede para retorna o texto para minusculo.

//b. Determine qual será a saída no console para cada uma das 3 entradas do usuário:
//Eu gosto de cenoura = True 
//CENOURA é bom pra vista = True
//Cenouras crescem na terra = True

//------------------------------------Exercicios de Escrita de Código-----------------------------------

//1.
//a.
function imprimeInformacoes() {
    console.log("Me chamo Alessandra, tenho 27 anos, sou de Brasilia e sou estudante da Labenu")
}

imprimeInformacoes()

//

//b.
const dadosPessoais = function (nome, idade, cidade, profissao){
const dadosUsuario = ( `Eu sou ${nome}, tenho ${idade} anos, moro em ${cidade} e sou ${profissao}`)    
console.log(dadosUsuario)
}

dadosPessoais("Alessandra", 27, "Brasilia", "Estudante Labenu")

//2.
//a.
  function somaDoisNumeros(primeiroNum, segundoNum) {
     const soma = primeiroNum + segundoNum
      return soma}

  console.log(somaDoisNumeros(5,8))

  //OBS: Só vou entregar agora para não levar falta porque vou ter que sair, mais irei continuar fazendo mais tarde.