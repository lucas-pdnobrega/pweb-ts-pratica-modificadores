let contaController = new ContaController();

contaController.listar();

const c1 = new Conta('1', 100);
const p1 = new Poupanca('2', 100);
const cb1 = new ContaBonificada('3', 0);

console.log('Conta: ' + c1.saldo);

p1.atualizarSaldoAniversario();
console.log('Poupanca: ' + p1.saldo);

cb1.creditar(100);
console.log('Conta Bonificada: ' + cb1.saldo);


const pe1 = new Pessoa("Lucas", 18, new Date("10/23/2004"));
const pf1 = new PessoaFisica("Renato", 34, new Date("09/23/1989"), "123456789");
const pj1 = new PessoaJuridica("Nintendo", 133, new Date("10/23/1889"), "321098765");

console.log(pe1);
console.log(pf1);
console.log(pj1);