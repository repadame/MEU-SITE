Algoritmo "Summer Viagens"

// Cadastro e consulta de clientes e destinos da Summer Viagens.


Var

 cliente, destino: vetor [1..3] de caractere
 busca: caractere
 opcao, x: inteiro
 achou: logico


Inicio

procedimento cadastrarCliente
inicio
      escreval("Cadastrar 3 clientes ")
      para x de 1 ate 3 passo 1 faca
   	      limpatela
		escreval("Cadastre o cliente N ", x)
		leia(cliente[x])
		escreval("")
      fimpara
fimprocedimento

procedimento cadastrarDestino
inicio
      escreval("Cadastrar 3 destinos ")
      para x de 1 ate 3 passo 1 faca
            limpatela
		escreval("Cadastre o destino N ", x)
		leia(destino[x])
		escreval("")
      fimpara
fimprocedimento

procedimento consultarCliente
inicio
      limpatela
      achou <- falso
      escreval("Qual cliente deseja consultar? ")
      leia(busca)
      para x de 1 ate 3 passo 1 faca
           se busca = cliente[x] entao
                      achou <- verdadeiro
           fimse
      fimpara

      se achou = verdadeiro entao
           escreval("O cliente ", busca, " foi encontrado")
           escreval("")
      senao
           escreval("O cliente ", busca, " n�o est� cadastrado")
           escreval("")
      fimse
fimprocedimento

procedimento consultarDestino
inicio
      limpatela
      achou <- falso
      escreval("Qual destino deseja pesquisar? ")
      leia(busca)
      para x de 1 ate 3 passo 1 faca
           se busca = destino[x] entao
               achou <- verdadeiro
           fimse
      fimpara

      se achou = verdadeiro entao
           escreval("O destino ", busca, " foi encontrado")
           escreval("")
      senao
           escreval("Infelizmente n�o viajamos para ", busca)
           escreval("")
      fimse
fimprocedimento



repita
      escreval("O que voc� deseja fazer?")
		escreval("1 - Cadastrar Cliente")
		escreval("2 - Cadastrar Destino")
		escreval("3 - Consultar Cliente")
		escreval("4 - Consultar Destino")
		escreval("0 - Sair")
      leia(opcao)
      escolha opcao
              caso 1
                   cadastrarCliente
              caso 2
                   cadastrarDestino
              caso 3
                   consultarCliente
              caso 4
                   consultarDestino
              caso 0
                   escreval("Encerrando programa")
              outrocaso
                   escreval("Digite uma op��o valida")
      fimescolha
ate opcao = 0



Fimalgoritmo