let num = [547,823,13,45,998];
tamanhoArray = num.length;

//percurso para exibição do vetor
// for (let a = 0; a < num.length; a++) {
//     console.log('Valor '+a+' --> '+num[a]);    
// }

//modo mais fácil de exibir vetor (for-in). só funciona para arrays e objetos.
for (let pos in num) { // tradução: para cada posição('pos') no vetor('num') faça...
    console.log('Valor '+pos+' --> '+num[pos]);
}

num.sort();
console.log('-----------------');

for (let pos in num) { // tradução: para cada posição('pos') no vetor('num') faça...
    console.log('Valor '+pos+' --> '+num[pos]);
}

console.log('-----------------');
// Buscar um valor dentro do vetor
ondeEncontro45 = num.indexOf(45);
console.log("O número 45 está no índice: "+ondeEncontro45);

let ondeEncontroX = 999;
console.log("O número "+ondeEncontroX+" existe?");
let resposta = num.indexOf(ondeEncontroX) == -1 ? 'Não existe no vetor' : `Existe! Está na posição: ${num.indexOf(ondeEncontroX)}`;// Ternário: condição ? true : false
// Se a resposta do indexOf() for -1 quer dizer que não existe tal valor no vetor
console.log(`Resposta: ${resposta}`);