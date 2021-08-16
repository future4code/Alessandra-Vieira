console.log("Exercicios de Objetos da aluna: Alessandra Ferreira")

//------------------------------------------Exercicios de interpretação de Códigos--------------------------------------

//1.
//a.O que vai ser impresso no console?
//Matheus Nachtergaele
//Virginia Cavendish
//{canal: "Globo", horario: "14h"}

//2
//a) O que vai ser impresso no console?
//nome: "Juca", idade: 3, raca: "SRD"}
//{nome: "Juba", idade: 3, raca: "SRD"}
//{nome: "Jubo", idade: 3, raca: "SRD"}

//b) O que faz a sintaxe dos três pontos antes do nome de um objeto?

//3.
//a) O que vai ser impresso no console?
//false
//undefine


//const pessoa = {
//	nome: "Alessandra" , 
//	apelido: ["Le", "Lele", "Ale"]

//}
//function meusApelidos(pessoa) {
//const frase = `Eu sou ${pessoa.nome}, mas pode me chamar de: ${pessoa.apelido[0]},
//${pessoa.apelido[1]} ou ${pessoa.apelido[2]}.`
//return frase
//}
//console.log(meusApelidos(pessoa))

const dado = {
    nome: "Alessandra",
    idade: 28 ,
    profissao:"Futura Programadora"

}

const dado1 = {
    nome: "Valeria" ,
    idade: 25 ,
    profissao: "Advogada"

}
const minhaFuncao = (dado) => {
    return (dado.nome, dado.nome.length, dado.idade, dado.profissao, dado.profissao.length)

}
console.log(minhaFuncao[dado])
console.log(minhaFuncao[dado1])