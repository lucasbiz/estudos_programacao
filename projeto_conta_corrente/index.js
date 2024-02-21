import {Cliente} from "./Cliente.js"
import {ContaCorrente} from "./ContaCorrente.js"


const cliente1 = new Cliente("Ricardo", 11122233345)


const cliente2 = new Cliente("Alice", 22233344456)



const contaCorrenteRicardo = new ContaCorrente(1001, cliente1)
contaCorrenteRicardo.depositar(1000)

const contaCorrenteAlice = new ContaCorrente(1001, cliente2)
contaCorrenteAlice.depositar(1000)


// const valorSacado = contaCorrenteRicardo.sacar(50)
// console.log(valorSacado)

console.log(contaCorrenteRicardo)
console.log(contaCorrenteAlice)
console.log(contaCorrenteRicardo.getSaldo())

contaCorrenteRicardo.transferir(100, contaCorrenteAlice)

console.log("=======TRANSFERENCIA=======")

console.log(contaCorrenteRicardo)
console.log(contaCorrenteAlice)


// Chamada do atributo de classe 
console.log(ContaCorrente.numeroDeContas)