//Variáveis 

//São espaços na memória do computador que armazenam valores que podem ser alterados durante a execução do programa.

//var, let e const

//Sintaxe: Tipo(var, let e const) Nome = Valor e ;

//String: Textos, '' ou ""

var nome = "João";

console.log(nome);

//Let -> substitui o var
let idade = 25;

//A diferença entre var e let é o escopo, { }

nome = "João";
idade = 25;

console.log(nome,idade);

//Tanto var quanto let podem ser alterados 

const pi = 3.14;

//Padrão americanos para números decimais é o ponto, não a vírgula

console.log(pi);

//Tipos de dados

let numero = 41;
let numero2 = 41.5;

console.log(numero,numero2);

//JS não diferencia inteiros e números com casas decimais

let umTexto = "Meu nome é João Vitor Rosera"

console.log(umTexto);

//Avaliar o tipo de dado
//Typeof -> função que retorna o tipo de dado

console.log(typeof numero);
console.log(typeof numero2);
console.log(typeof umTexto);

//Boolean -> true ou false
let estaChovendo = false;

console.log(estaChovendo);

console.log(typeof estaChovendo)

console.log(10>5);

let semValor = null;

console.log(semValor);

//Tudo é objeto em JS

//Varios tipos de dados são originados como objetos em JS
console.log(typeof semValor);

let indefinido;

console.log(indefinido);

console.log(typeof indefinido);

//Null é um objeto nulo
//Undefinied é quando escrevemos uma variável e não atribuímos valor a ela

//Arrays e Objetos

//Tipagem dinâmica
let variavel = 100;

console.log(typeof variavel);

variavel = "texto";

console.log(typeof variavel);

//Operações básicas

//Concatenar textos = Unir
let primeiroNome = "João";
let sobrenome = "Rosera";

//Nome + Sobrenome
let nomeCompleto = primeiroNome + " " + sobrenome;

console.log(nomeCompleto);

console.log("Olá, " + nomeCompleto + ", tudo bem?");