const alunos = ["Mayke", "Ana", "Jonei", "Renan Medeiros",
                "Igor", "Matheus", "Erian", "Lucas Alexandre", 
                "Renan Carvalho", "Vinicius", "Nickolas", "Diego Ceccon",
                "Priscila", "Raul", "Deivid", "Rafael",
                "Jose", "Diego Minelli", "Ingrid", "Karol",
                "Caio", "Lucas Victor"];
function linha(){
    document.write("</br>");
}
function print(texto){
    document.write(texto)
    linha();
}

function listaAlunos(){
    for(i = 0; i < alunos.length; i++){
        print(alunos[i])
    }  
}