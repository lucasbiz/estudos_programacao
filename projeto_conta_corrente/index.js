class Cliente {
    // Atributos
    nome;
    cpf;

}


class ContaCorrente {
    // Atributos
    agencia;
    saldo;

    // Métodos
    sacar(valor) {
        if (this.saldo >= valor){
            this.saldo -= valor
            return valor
        }
    }

    depositar(valor) {
        if(valor <= 0) {
            return
        }
        this.saldo += valor
    }
}


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

console.log(cliente1)
console.log(cliente2)

const contaCorrenteRicardo = new ContaCorrente()
contaCorrenteRicardo.saldo = 1000
contaCorrenteRicardo.agencia = 1001

const contaCorrenteAlice = new ContaCorrente()
contaCorrenteAlice.saldo = 0
contaCorrenteAlice.agencia = 1001

const valorSacado = contaCorrenteRicardo.sacar(50)
console.log(valorSacado)