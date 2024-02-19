import {Cliente} from "./Cliente.js"
import {ContaCorrente} from "./ContaCorrente.js"


const cliente1 = new Cliente()

cliente1.nome = "Ricardo"
cliente1.cpf = 11122233309
// cliente1.agencia = 1001
// cliente1.saldo = 0


const cliente2 = new Cliente()

cliente2.nome = "Alice"
cliente2.cpf = 88822233309
// cliente2.agencia = 2002
// cliente2.saldo = 0


const contaCorrenteRicardo = new ContaCorrente()
contaCorrenteRicardo.depositar(1000)
contaCorrenteRicardo.agencia = 1001
contaCorrenteRicardo.cliente = cliente1

const contaCorrenteAlice = new ContaCorrente()
contaCorrenteAlice.depositar(1000)
contaCorrenteAlice.agencia = 1001
contaCorrenteAlice.cliente = cliente2

// const valorSacado = contaCorrenteRicardo.sacar(50)
// console.log(valorSacado)

console.log(contaCorrenteRicardo)
console.log(contaCorrenteAlice)
console.log(contaCorrenteRicardo.getSaldo())

contaCorrenteRicardo.transferir(100, contaCorrenteAlice)

console.log(contaCorrenteAlice)