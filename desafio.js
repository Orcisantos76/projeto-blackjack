function mostra(txt){
   console.log(txt)
}
/**
 * EXEMPLO DE UTILIZAÇÃO DA 'comprarCarta'

    const carta = comprarCarta(); // Sorteia uma carta. Por exemplo, o rei de ouros
    console.log(carta.texto) // imprime o texto da carta. Exemplo: "K♦️" (indica "K" de ouros)
    console.log(carta.valor) // imprime o valor da carta (um número). Exemplo: 10 (dado que "K" vale 10) 
 */


confirm(`Bem-vindo(a) ao jogo de BlackJack`)

if(confirm('Quer iniciar uma nova rodada')){
   alert('Nova rodada')

   console.log('Inicio de rodada')
   let carta1Jogador = comprarCarta()
   let carta2Jogador = comprarCarta()

   while (carta1Jogador.valor === 11 && carta2Jogador.valor === 11){
      carta1Jogador = comprarCarta()   
      carta2Jogador = comprarCarta()   
   }

   let carta1Cpu = comprarCarta()
   let carta2Cpu = comprarCarta()

   while (carta1Cpu.valor === 11 && carta2Cpu.valor === 11){
      carta1Cpu = comprarCarta()
      carta2Cpu = comprarCarta()
   }
   let pontosCpu =Number(carta1Cpu.valor)+Number(carta2Cpu.valor)
   mostra(pontosCpu)

   let valorCarta1Jogador =Number(carta1Jogador.valor)
   let valorCarta2Jogador =Number(carta2Jogador.valor)
   let pontosJogador =(valorCarta1Jogador+valorCarta2Jogador)   

   alert(`"Usuários - cartas: ${carta1Jogador.texto} ${carta2Jogador.texto} - pontuação ${pontosJogador}"\n Cpu - carta 1: ${carta1Cpu.texto} - pontuação ${carta1Cpu.valor}`)

   let maisCarta = confirm('Deseja comprar mais uma carta?')
   if (maisCarta === true){
      let carta3Jogador = comprarCarta()
      let valorCarta3Jogador =Number(carta3Jogador.valor)
         pontosJogador += valorCarta3Jogador
         if (pontosJogador > 21){
            alert('Jogador perdeu, pontuação maior que 21 \n Cpu Ganhou')
         }
         
         alert(`"Usuários - cartas: ${carta1Jogador.texto} ${carta2Jogador.texto} ${carta3Jogador.texto} - pontuação ${pontosJogador}"\n 
         
         Cpu - carta 1: ${carta1Cpu.texto} - pontuação ${carta1Cpu.valor}`)
      }
   // total de pontos
   if (pontosJogador > pontosCpu && pontosJogador <= 21) {
      alert("Jogador Ganhou.....")

      }else if (pontosJogador === pontosCpu){
      alert('Jogo empatado.')

      }else if(pontosCpu > pontosJogador && pontosCpu <= 21){
      alert('Cpu ganhou')
   }
}else{
   alert('Fim de jogo')
   
}
mostra("fim")
