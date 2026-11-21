
//PRIMEIRO CODIGO DE JAVASCRIPT 

let buttomProximo = document.querySelector(".proximo")
let buttomAnterior = document.querySelector(".anterior")
let listaImagems = document.querySelectorAll([".slider img"])
let cont = 0 
console.log(document.querySelector("img.ativo"))


buttomProximo.onclick = function passarSlide(){

    document.querySelector("img.ativo").classList.remove("ativo")

    if(cont < 2){
        cont = cont + 1   
    }else{
        cont = 0
    }

    listaImagems[cont].classList.add("ativo")
}

buttomAnterior.onclick = function voltarSlide(){
    document.querySelector("img.ativo").classList.remove("ativo")
    
    if(cont > 0){
        cont = cont - 1 
    }else{
        cont = 2
    }


    listaImagems[cont].classList.add("ativo")

}

//SEGUNDO CODIGO DE JAVASCRIPT

let mudarimg = document.querySelector(".mudar")
let imagem = document.querySelector(".mudarlocal img")

mudarimg.onclick = function almentarimg(){
    if(imagem.classList.contains("local")){
        imagem.classList.remove("local")
    }else{
        imagem.classList.add("local")
    }
    console.log(mudarimg)
}


mudarimg.onclick = function() {

    if (imagem.classList.contains("local")) {
        imagem.classList.remove("local");
    } else {
        imagem.classList.add("local");
    }

}//TERCEIRO CODIGO DE JAVASCRIPT

