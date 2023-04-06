/**
-Na regra do nosso jogo nao pede opcao de comprar carta, e imprime tudo no console, nao pede para mostrar alerte de pontos da carta.

3. O jogo inicia com cada jogador (Usuário e computador) 
recebendo 2 cartas. 
A pontuação de cada jogador é a soma do valor das suas cartas 
(por exemplo, se você receber as cartas 8♥️ e Q♠️, sua pontuação 
totalé 8 + 10 = 18).

4. Vence o jogador que:  
1. tiver a maior pontuação
2. regra: a pontuação não pode ultrapassar o valor de 21 ou o 
jogador perde.

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

   const carta3 = comprarCarta()
   const carta4 = comprarCarta()
   let valorCarta3 =Number(carta3.valor)
   let valorCarta4 =Number(carta4.valor)
   let pontosCpu =(valorCarta3+valorCarta4)   
   console.log(`"Computador - cartas: ${carta3.texto} - ${carta4.texto} - pontuação ${pontosCpu}"`)

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

