
const botoes = document.querySelectorAll(".botao");
const personagens = document.querySelectorAll(".personagem");

botoes.forEach((botao, indice) => {
    botao.addEventListener("click",() =>{
        
        const botoaSelecionado = document.querySelector(".botao.selecionado");
        botoaSelecionado.classList.remove("selecionado");
        
        botao.classList.add("selecionado");
        
        const personagemSelecionado = document.querySelector(".personagem.selecionado");
        personagemSelecionado.classList.remove("selecionado");

        personagens[indice].classList.add("selecionado")
        
    });
    
});

