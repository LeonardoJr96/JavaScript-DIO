//o que são vetores ou arrays

//declaração de array
let array = ['string', 1, true];
console.log(array);

//pode guardar vários tipos de dados
let array1 = ['string', 1, true, ['array2'], ['array3'], ['array4'], ['array5']];
console.log(array1);

console.log(array[1]); // mostra a imagem do index selecionado do array

//forEach - intera as arrays, precisa de uma função para ajudar
array.forEach(function(item, indice){console.log(item, indice)});

//push - adiciona um item no array, no final
array.push('novo array');
console.log(array);

//pop - remove o último array
array.pop();
console.log(array);

//shift - remove o primeiro array
array.shift();
console.log(array);

//unshift - adiciona um item no ínicio do array
array.unshift('novo item');
console.log(array);

//indexOf - retorna o índice de um valor
console.log(array.indexOf(true));

//splice - remove ou substitui um item com o número do índice
array.splice(0, 3);
console.log(array);

//slice - retorna uma parte de um array existente
let novoArray = array1.slice(0, 3);
console.log(novoArray);

//objeto
let object = {String: 'string', Number: 1, boolean: true, array:['array'], objectinterno: {objectinterno: 'objeto interno'}};

console.log(object);

console.log(object.boolean); // mostra o objeto dentro do boolean

//desestruturaçção
var string = object.String;
console.log(string);

var arrayInterno = object.array;
console.log(arrayInterno);

var {String, boolean, objectinterno} = object;
console.log(String, boolean, object);