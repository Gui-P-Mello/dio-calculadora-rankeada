let partidas = ["v", "d", "v", "d", "v"]
let contagemVitorias = 0
let contagemDerrotas = 0
let nivel
let saldo
partidas.forEach(partida => {
    if(partida === "v"){
        contagemVitorias += 12
    }
})

contagemDerrotas = (partidas.length * 12) - contagemVitorias

function calculaRank(vitorias, derrotas){

    let nivel

    saldo = vitorias - derrotas

    if(saldo < 10){
        nivel = "Ferro"
    } else if(saldo > 11 && saldo < 20){
        nivel = "Bronze"
    } else if(saldo > 21 && saldo < 50){
        nivel = "Prata"
    } else if(saldo > 51 && saldo < 80){
        nivel = "Ouro"
    } else if(saldo > 81 && saldo < 90){
        nivel = "Diamante"
    } else if(saldo > 91 && saldo < 100){
        nivel = "Lendário"
    }  else if(saldo >= 101){
        nivel = "Imortal"
    }

//Eu sei que há números no intervalo de 0 a 100 que que podem gerar erros aqui por não estar verificando com <= na maioria das condicionais, 
//mas estou seguindo à risca a lógica expressa no enunciado
//Acredito que seja erro de lógica no enunciado, mas vou o seguir a risca.
//Uma última nota, acho os exercícios de desafios até aqui ambíguos, confusos, mal esclarecidos e pouco proveitosos. 
//Acredito que sejam muito mais complicado do que deveriam para iniciantes. Não culpo os instrutores, pois eles parecem trabalhar até demais.
//Suspeito que a má qualidade dos exercícios e desafios se deva à uma exploração abusiva dos funcionários da DIO. Há possíveis sinais de exaustão aqui.
//Recomendo que os instrutores sejam apenas instrutores, que tenham uma carga horária de trabalho objetivamente (não só nos papéis) menor.
    
    return nivel
}

nivel = calculaRank(contagemVitorias, contagemDerrotas)

console.log(`O Herói tem de saldo de ${saldo} está no nível de ${nivel}`)

