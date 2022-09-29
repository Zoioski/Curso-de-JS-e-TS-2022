/*
Gustavo de Assis tem 27 anos, pesa 90kg
Tem 1,74 de altura e seu IMC é de ......
Gustavo de Assis nasceu em 1995
*/

const nome = 'Gustavo';
const sobrenome = 'de Assis';
const idade = 27;
const peso = 90;
const alturaEmM = 1.74;
let imc;
let anoNascimento;
imc = peso / (alturaEmM * alturaEmM);
anoNascimento = 2022 - idade;

console.log(`${nome} ${sobrenome} tem ${idade} anos e pesa ${peso}kg.`);
console.log(`Tem ${alturaEmM} de altura e seu IMC é de ${imc}.`);
console.log(`${nome} ${sobrenome} nasceu em ${anoNascimento}.`);