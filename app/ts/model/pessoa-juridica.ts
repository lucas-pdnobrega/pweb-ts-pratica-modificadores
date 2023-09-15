class PessoaJuridica extends Pessoa {

    readonly _cnpj:string

    constructor(nome:string, idade:number, dataNascimento:Date, cnpj:string) {
        super(`${nome}-Juridica`, idade, dataNascimento);
        this._cnpj = cnpj;
    }

    get cnpj():string {
        return this._cnpj;
    }

    toString():string {
        return `Pessoa Jurídica de CNPJ ${this._cnpj} | Nome ${super.nome} | Idade ${super.idade} | Data Nascimento ${super.dataNascimento}`
    }
}