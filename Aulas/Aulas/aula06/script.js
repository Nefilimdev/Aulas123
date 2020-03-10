var alunos =  ["Mayke", "Jonei", "Renan", "Igor", "Ingrid", "Erian", "Nickolas", "Raul", 
  "Lucas V", "Deivid", "Lucas A", "Priscila", "Matheus", "Renan C",
  "Ana Carolina", "Diego", "Vinicius", "Karol", "Rafael"]

alunos.splice(2, 0, "Diego C")
alunos.splice(16, 1 , "Diego Minelli")
alunos.splice(alunos.indexOf("Nickolas") + 1, 0, "Caio")
alunos.splice(alunos.indexOf("Caio"), 1) , alunos.splice(alunos.indexOf("Ingrid"),1, "Caio")



alunos.map(function (item, indice, array) {
  return document.write(`Alunos ${indice + 1}: ${alunos[indice]} com qtd de letras: ${item.replace(" ", "").length} </br>`)
  
})

document.write(`</br>`)
alunos.map(function(item, indice, array){
  return document.write(`${item[0]} </br>`) 
});

document.write(`</br>`)
var sinuca = "Sinuca ou snooker é um esporte de mesa, taco e bolas praticado no Brasil, e constitui uma variante do pool, um jogo de mesa inventado em 1875 na Grã-Bretanha. Neste jogo dois adversários tentam colocar num dos seis buracos da mesa as bolas coloridas na sequência definida pelas regras. Wikipédia"
console.log(sinuca.split(" ").length)

document.write(`</br>`)
var sinuca1 = ["Sinuca ou snooker é um esporte de mesa, taco e bolas praticado no Brasil, e constitui uma variante do pool, um jogo de mesa inventado em 1875 na Grã-Bretanha. Neste jogo dois adversários tentam colocar num dos seis buracos da mesa as bolas coloridas na sequência definida pelas regras. Wikipédia"] 
sinuca1.map(function(item, indice, array){
  return document.write(`Quantidade de palavras: ${item.split(" ").length}`)
})

//  alunos.sort()
//  console.log(alunos)


document.write(`</br>`)
document.write(`</br>`)
 alunos.forEach(function(item, indice) {
 document.write(`Alunos ${indice + 1}: ${alunos[indice]} </br>`)

  })


/* for (var aluno in alunos) {
  document.write(`Aluno  +  aluno + 1 + `)
}  */

document.write(`</br>`)
for (i = 0; i < alunos.length; i++) {
  
  document.write(`Aluno ${i + 1}: ${alunos[i]} </br>`)

}




/* var alunos = New Array()
var alunos = []
var alunos_1_fila = [4] */
