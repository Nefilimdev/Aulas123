var turma = ["Mayke", "Joaney", "Renan M",
    "Igor", "Ingrid", "Erian", "Nickolas",
    "Raul", "Lucas V", "Deivid", "Lucas A",
    "Priscila", "Matheus", "Renan C", "Ana",
    "Diego M", "Vinicius", "Karol", "Rafael"]

function linha(){
    print("<br><br>")
}
function print(texto){
    print(texto)
}

console.log(turma.length);
console.log(turma[7]);
turma.splice(2, 0, "Diego C");
console.log(turma[2]);

print(`Nossa Turma tem: ${turma.length} alunos`);
linha();
print(`Na posição 7 está o ${turma[7]}`);
turma.splice(16, 1, "Diego Minelli");
console.log(turma[15]);

turma.splice(turma.indexOf("Nickolas") + 1, 0, "Caio");

// for(aluno in turma){
//     print(`Aluno ${aluno}: ${turma[aluno]} </br>`)
// }

// turma.forEach(function mapeiaAlunos(item, aluno){
//     print(`Aluno ${aluno + 1}: ${turma[aluno]} </br>`);
// })

turma.splice(turma.indexOf("Caio"), 1)
turma.splice(turma.indexOf("Ingrid"), 1, "Caio");
turma.map(function (item, indice, alunos) {
    return print(`Aluno ${indice + 1} : ${item} - </br>`);
})
// tem: ${item.length} letras

var txtSpc = "Sinuca ou snooker é um esporte de mesa, taco e bolas praticado no Brasil, e constitui uma variante do pool, um jogo de mesa inventado em 1875 na Grã-Bretanha. Neste jogo dois adversários tentam colocar num dos seis buracos da mesa as bolas coloridas na sequência definida pelas regras"
console.log(txtSpc.split(" ").length)

// for(let i=0;i < 10;i++){
//     console.log(turma[i]);
// }

// for(let aluno in turma){
//     console.log(turma[aluno]);
// }

for(aluno in turma){
    print(turma[aluno]);
    for (let i = 0; i < turma.length; i++) {
        if(aluno != i){
            if(turma[aluno].split(" ")[0] == turma[i].split(" ")[0]){
                print(`Existe outro aluno ${turma[aluno].split(" ")[0]}`);
                linha();
            }
        }
    }
    // for (let i = 0; i < turma.length; i++) {
    //     if((turma[aluno].split(" ")[0] == turma[i].split(" ")[0]) && (aluno != i)){
    //         print(`Existe outro aluno ${turma[aluno].split(" ")[0]}<br>`);
    //         }
    //     }
    // }

}   
// console.log(turma.push("Lucas V"));
// for(i =0; i < turma.length; i++){
//     print(` Aluno ${i+1}:  ${turma[i]} </br>`);
//     // if(turma[i].charAt(0) == "E"){
//     //     console.log(turma[i])
//     // }else{
//     //     console.log("entrou no Else");
//     // }
// })