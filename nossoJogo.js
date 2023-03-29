/**
 * EXEMPLO DE UTILIZAÇÃO DA 'comprarCarta'
 * 
 * 
    const carta = comprarCarta(); // Sorteia uma carta. Por exemplo, o rei de ouros
   
    console.log(carta.texto) // imprime o texto da carta. Exemplo: "K♦️" (indica "K" de ouros)
    console.log(carta.valor) // imprime o valor da carta (um número). Exemplo: 10 (dado que "K" vale 10)
 * 
 * 
 * 
 */

console.log(`Bem-vindo(a) ao jogo de BlackJack`)

if (confirm('Quer iniciar uma nova rodada')){
   console.log('Inicio de rodada')
   const carta1 = comprarCarta()
   const carta2 = comprarCarta()
   let valorCarta1 =Number(carta1.valor)
   let valorCarta2 =Number(carta2.valor)
   let pontosJogador =(valorCarta1+valorCarta2)   
   console.log(`"Usuários - cartas: ${carta1.texto} ${carta2.texto} - pontuação ${pontosJogador}"`)
      
   console.log('-=-'.repeat(15))

   const carta3 = comprarCarta()
   const carta4 = comprarCarta()
   let valorCarta3 =Number(carta3.valor)
   let valorCarta4 =Number(carta4.valor)
   let pontosCpu =(valorCarta3+valorCarta4)   
   console.log(`"Computador - cartas: ${carta3.texto} - ${carta4.texto} - pontuação ${pontosCpu}"`)
   console.log('-=-'.repeat(15))

   if (pontosJogador > pontosCpu && pontosJogador <= 21){
      console.log('Parabens jogador ganhou')
      if (pontosJogador>21){
         console.log("perdeu")
      }
   }else if(pontosJogador === pontosCpu){
      console.log('Jogo empatado')
   }else if (pontosCpu > pontosJogador && pontosCpu <= 21){
      console.log('O computador ganhou')
   }else if(pontosCpu >21){
      console.log('Computador perdeu')
   }

}else{
   console.log(`O jogo acabou`)
}

