class PessoaFisica extends Pessoa {

    readonly _cpf:string

    constructor(nome:string, idade:number, dataNascimento:Date, cpf:string) {
        super(`${nome}-Fisica`, idade, dataNascimento);
        this._cpf = cpf;
    }

    get cpf():string {
        return this._cpf;
    }

    toString():string {
        return `Pessoa Física de CPF ${this._cpf} | Nome ${super.nome} | Idade ${super.idade} | Data Nascimento ${super.dataNascimento}`
    }
}