let pedraPapelTesoura = {
    valoresPossiveis: [1,2,3],
    valoresReais: ["Papel","Pedra", "Tesoura"],
    pontuacao: 0,
    perdeu: false,
    numAleat: function () {
        const min = Math.ceil(1);
        const max = Math.floor(3);
        return Math.floor(Math.random() * (max - min + 1)) + min;
    },
    rodada: function () {
        let rodando = true;

        while(rodando){
            
            
            let jogadaPlayer = parseInt(prompt("Escolha sua jogada\n1\t-\tPapel\n2\t-\tPedra\n3\t-\tTesoura"));
            
            let jogadaComp = this.numAleat();
            console.log("O computador jogou "+this.valoresReais[jogadaComp-1]);
            
            if(!this.valoresPossiveis.includes(jogadaPlayer)){
                console.log(`Você perdeu! sua pontuação foi de ${this.pontuacao}`);
                rodando = false;
            }
            else{
                if(jogadaComp == jogadaPlayer){
                    console.log("A rodada empatou!");
                }
                else{
                    if((jogadaPlayer == 1 && jogadaComp == 2 )
                    || (jogadaPlayer == 2 && jogadaComp == 3)
                    || (jogadaPlayer == 3 && jogadaComp == 1)){
                        this.pontuacao +=1;
                        console.log("Você ganhou!");
                    }
                    else{
                        console.log(`Você perdeu! A sua pontuação foi de ${this.pontuacao}`);
                        rodando = false;
                    }
                }
            }
        }
        return 0;
        
    }
}