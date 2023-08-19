//tipos primitivos

//bolean
var vOuF = false;
console.log(vOuF);//imprimir imagem no console
console.log(typeof(vOuF));//ver o tipo do dado no console

//number
var numeroQualquer = 1;
console.log(numeroQualquer);
console.log(typeof(numeroQualquer));

//string
var nome = 'diana';
console.log(nome);
console.log(typeof(nome));

//como declarar
var variavel = 'diana'; // variavel global e pode ser alterada
variavel = 'leo';
console.log(variavel);

let variavel2 = 'diana'; //variavel em escopo local, mas pode usar como estilo global, e pode ser alterada
variavel2 = 'leo';
console.log(variavel2);

const contante = 'diana'; //variavel constante e que não pode ser alterada
console.log(contante);

//escopo global
var escopoGLobal = 'global';
console.log(escopoGLobal);

//escopo local
function escopolocal() {
    let escopolocalInterno = 'local';
    console.log(escopolocalInterno)
}

escopolocal()

//atribuição
var atribuição = 'diana';

//comparação
//verifica se os valores são iguais
var comparacao = '0' == 0;
console.log(comparacao);

//comparação identica
//verifica se o valor e o tipo são iguais
var compIdentica = '0' === 0;
console.log(compIdentica);

//adição
var adição = 1 + 2;
console.log(adição);

//subtração
var subtração = 2 - 1;
console.log(subtração);

//multiplicação
var multiplicação = 2 * 9;
console.log(multiplicação);

//divisão Real
var divisãoReal = 6 / 2;
console.log(divisãoReal)

//divisão inteira(resto)
var divisãoInteira = 5 % 2
console.log(divisãoInteira)

//potenciação
var potenciação = 5 ** 2;
console.log(potenciação);

//maior que
var maiorQue = 5 > 2;
console.log(maiorQue);

//menor que
var menorQue = 5 < 2;
console.log(menorQue);

//maior ou igual
var maiorOuIgual = 5 >= 2;
console.log(maiorOuIgual);

//menor ou igual
var menorOuIgual = 5 <= 2;
console.log(menorOuIgual);

// operadores lógicos
var e = true && false;
console.log(e);

var ou = false || true;
console.log(ou);

var nao = !true;
console.log(nao)