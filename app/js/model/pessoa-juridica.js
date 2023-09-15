class PessoaJuridica extends Pessoa {
    constructor(nome, idade, dataNascimento, cnpj) {
        super(`${nome}-Juridica`, idade, dataNascimento);
        this._cnpj = cnpj;
    }
    get cnpj() {
        return this._cnpj;
    }
    toString() {
        return `Pessoa Jurídica de CNPJ ${this._cnpj} | Nome ${super.nome} | Idade ${super.idade} | Data Nascimento ${super.dataNascimento}`;
    }
}
