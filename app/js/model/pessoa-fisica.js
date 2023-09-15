class PessoaFisica extends Pessoa {
    constructor(nome, idade, dataNascimento, cpf) {
        super(`${nome}-Fisica`, idade, dataNascimento);
        this._cpf = cpf;
    }
    get cpf() {
        return this._cpf;
    }
    toString() {
        return `Pessoa Física de CPF ${this._cpf} | Nome ${super.nome} | Idade ${super.idade} | Data Nascimento ${super.dataNascimento}`;
    }
}
