function info(){
    console.log("oi, estou no console log")
}
info()

function nome(nome){
console.log(nome)
}
nome("Isabella")

function infos(nome,idade,estiloMusical){
    console.log(nome, idade, estiloMusical)
}
infos("Isabella,", 20, ",Rap melodico")

function estilos(filme, musica){
console.log(filme, musica)
}
estilos("como eu era antes de você",",Vê se não demoora")



function triplo(dinheiro){
let triple = dinheiro*3
console.log(triple)
}
triplo(4)

let temRacao = false
let isTrue = "nao compre racao"
let isFalse = "compre racao"

function racao(){
    if (temRacao == false){
    console.log(isFalse)
}
    else {
        console.log(isTrue)
    }
}
racao()