//Criando o array
const arrayNums = [];

function addNumeros() {
    //resetando res
    res.innerHTML = `<i class="fa-solid fa-ellipsis"></i>`;

    //captação do valor digitado e conversão para Numero
    let numUser = Number(document.getElementById('txtNum').value);
    let select = document.getElementById('selectArray');

    //validação de entrada
    if(numUser < 1 || numUser > 100){
        alert('Número fora do contexto!');
    }else if(arrayNums.indexOf(numUser) != -1){
        alert('Este número foi adicionado anteriormente. Adicione um novo número!');
    }else{
        //Adicionar novos valores ao array
        arrayNums.push(numUser);
        //Incrementando o select
        let option = document.createElement('option');
        option.setAttribute('id',`numAdd-${numUser}`);
        option.innerHTML = `Valor ${numUser} adicionado.`;
        select.appendChild(option);        
    }   
    document.getElementById('txtNum').value = "";
    document.getElementById('txtNum').focus();
}

function analisarNums() {

    if(arrayNums.length != 0){

        //captação de elementos
        let res = document.getElementById('res');

        //quantidade de numeros cadastrados
        let qtdNumsArray = arrayNums.length;

        //localizar o maior e o menor valor informado do array    
        arrayNums.sort();//organizado o menor é o primeiro e o maior é o ultimo    
        let maiorNumArray = arrayNums[arrayNums.length - 1];
        let menorNumArray = arrayNums[0];


        //somar os valores do array    
        let somaAllArray = 0;
        for(var i = 0; i < qtdNumsArray; i++) {        
            somaAllArray += arrayNums[i];
        }

        //média do array
        mediaArray = (somaAllArray / qtdNumsArray).toFixed(2);

        // Mostrar resultados
        res.innerText = "";
        res.innerHTML += `<p>Ao todo, temos ${qtdNumsArray} números cadastrados.</p>`;
        res.innerHTML += `<p>O maior valor informado foi ${maiorNumArray}.</p>`;
        res.innerHTML += `<p>O menor valor informado foi ${menorNumArray}.</p>`;
        res.innerHTML += `<p>Somando todos os valores temos ${somaAllArray}.</p>`;
        res.innerHTML += `<p>A média dos valores digitados é ${mediaArray}.</p>`  ;
    }else{
        alert('Adicione valores antes de finalizar!');
    }
    
}