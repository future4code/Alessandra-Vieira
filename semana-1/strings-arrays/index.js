console.log("Exercicios de Strings e Arryas da aluna: Alessandra Ferreira")


//---------------------------Exercícios de interpretação de código--------------------------------


//----Exercicio 1

// No Primeiro Exercicio, e eu tive que colocar no vs code para ver o resultado, deu a seguinte resposta:

//a.  undefined
//b.  null
//c.  11
//d.  3
//e.  (11) [3, 19, 5, 6, 7, 8, 9, 10, 11, 12, 13]
//f.  9

//----Exercicio 2

//Qual será o valor impresso no console se a entrada do usuário for: `"Subi num ônibus em Marrocos"`?
//"SUBA NUM ÔNABUS EM MIRROCOS" 27


//--------------------------Exercícios de escrita de código----------------------------------


//----Exercicio 1

const nomeDoUsuario = prompt("Qual seu nome?")
const emailDoUsuario = prompt("Qual é o seu email?")

console.log("O email " + emailDoUsuario + " foi cadastrado com sucesso. Seja bem-vindo(a)," + nomeDoUsuario + "!")

//


//----Exercicio 2

const comidasPreferidas = ["lasanha", "panqueca", "salada", "churrasco", "macarrão"]

//a. 
console.log(comidasPreferidas)
//b.
console.log("Essas são as minhas comidas favoritas:")
console.log("comidasPreferidas"[0])
console.log("comidasPreferidas"[1])
console.log("comidasPreferidas"[2])
console.log("comidasPreferidas"[3])
console.log("comidasPreferidas"[4])

//c. 
const novaComida = prompt("Diga uma comida que você gosta?")
comidasPreferidas[1] = novaComida
console.log(comidasPreferidas)

//


//----Exercicio 3

const listaDeTarefas = []
const primeiraTarefa = prompt("Digite a primeira tarefa:")
const segundaTarefa = prompt("Digite a segunda tarefa:")
const terceiraTarefa = prompt("Digite a terceira tarefa:")

listaDeTarefas.push(primeiraTarefa)
listaDeTarefas.push(segundaTarefa)
listaDeTarefas.push(terceiraTarefa)

console.log(listaDeTarefas)

const tarefaRealizada = prompt("Digite o indice de uma tarefa que já realizou: 0, 1 ou 2")

listaDeTarefas.splice(Number(tarefaRealizada), 1)

console.log(listaDeTarefas)


//---------------------------------------------Desafios--------------------------------------------


//1.
const minhaFrase = "Eu gosto de laranja!"
const minhaFraseArray = minhaFrase.split(" ")

console.log(minhaFraseArray)


//2.
const frutas = ["Banana", "Morango", "Abacaxi", "Laranja", "Ameixa"];
const indexAbacaxi = frutas.indexOf("Abacaxi");

const tamanhoArray = frutas.length;
console.log("index Abacaxi", indexAbacaxi, "tamanho do Array:", tamanhoArray)

