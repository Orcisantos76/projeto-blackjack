let usuario=[]
let bot=[]

if(confirm(`Bem vindo ao jogo Blackjack\nQuer iniciar nova partida`)){
   let sortearCartas = false
   while (sortearCartas === false){
      usuario.push(comprarCarta())
      usuario.push(comprarCarta())
      bot.push(comprarCarta())
      bot.push(comprarCarta())
      if((usuario[0].valor === 11 && usuario[1].valor ===11)||(bot[0].valor === 11 && bot[1].valor ===11)){
         usuario=[...usuario]
         bot = [...bot]
      }else{
         sortearCartas = true
      }
   }
   alert(`Usuario:\n ${usuario[0].texto}, ${usuario[1].texto}\n Bot:\n${bot[0].texto}`)

   let pontosUsuario=0
   let pontosBot = 0
   for(let i=0;i<usuario.length;i++){
      pontosUsuario += usuario[i].valor
      pontosBot+=bot[i].valor
   }
   console.log(pontosUsuario,pontosBot)
   
   if (pontosUsuario < 21){
      let comprarMais = confirm(`Seus pontos são ${pontosUsuario}\nDeseja comprar mais cartas`)
      if (comprarMais === true){
         usuario.push(comprarCarta())
      }
      if(comprarMais === true){
         if (pontosBot > 17){
            bot.push(comprarCarta())
         }
      }      
   }
   let totalPontosUsuario = 0
   let totalPontosbot = 0
   for (let i = 0; i<usuario.length;i++){
      totalPontosUsuario += usuario[i].valor
      totalPontosbot += bot[i].valor
   }

   let pontuacao =''
   if (totalPontosUsuario > totalPontosbot && totalPontosUsuario <= 21){
      pontuacao = "O usuário ganhou!"
   } else if (totalPontosbot > totalPontosUsuario && totalPontosbot <= 21){
      pontuacao = "O computador ganhou!"
   } else if (totalPontosbot > 21 && totalPontosUsuario <= 21){
      pontuacao = "O usuário ganhou!"
   } else if (totalPontosUsuario > 21 && totalPontosbot <= 21){
      pontuacao = "O computador ganhou!"
   } else {
      pontuacao = "Empate!"
   }
   alert(pontuacao)
   let cartasUsuario = ''
   let cartasBot = ''
   for (let i=0; i<usuario.length;i++){
      cartasUsuario += usuario[i].texto
      cartasBot += bot[i].texto
   }
   alert(`Cartas Usuário ${cartasUsuario}\nCartas Bot ${cartasBot}`)
}else{
   alert(`Jogo encerrado`)
}