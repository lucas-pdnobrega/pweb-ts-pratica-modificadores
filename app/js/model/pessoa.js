class Pessoa {
    constructor(nome, idade, dataNascimento) {
        this._nome = nome;
        this._idade = idade;
        this._dataNascimento = dataNascimento;
    }
    get nome() {
        return this._nome;
    }
    set nome(nome) {
        this._nome = nome;
    }
    get idade() {
        return this._idade;
    }
    set idade(idade) {
        this._idade = idade;
    }
    get dataNascimento() {
        return this._dataNascimento;
    }
    set dataNascimento(dataNascimento) {
        this._dataNascimento = dataNascimento;
    }
    toString() {
        return `Pessoa ${this._nome} | Idade ${this._idade} | Data Nascimento ${this._dataNascimento}`;
    }
}
