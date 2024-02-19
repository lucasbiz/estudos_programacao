
export class ContaCorrente {
    // Atributos
    agencia;
    cliente;
    
    _saldo;
    
    constructor(){
        this._saldo = 0
    }

    // Métodos
    sacar(valor) {
        if (this._saldo >= valor){
            this._saldo -= valor
            return valor
        }
    }

    depositar(valor) {
        if(valor <= 0) {
            return
        }
        this._saldo += valor
    }

    transferir (valor, conta) {
        const valorSacado = this.sacar(valor)
        conta.depositar(valorSacado)
    }

    getSaldo() {
        return this._saldo
    }
}