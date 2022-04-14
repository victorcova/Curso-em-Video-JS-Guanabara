function gerarTabuada() {

    //limpar select
    limparSelect();

    // pegar o número
    let numero = Number(document.getElementById('num').value);
    let select = document.getElementById('tabuada');

    if(numero == ''){
        alert("Por favor, digite um númnero!");
        resetTabuada();
        return;
    }

    //gerar a tabuada inputando os dados no select
    let tabMin = 1;
    let tabMax = 10;

    for (let a = 1; a <= tabMax; a++) {
        let calc = numero*a;
        let option = document.createElement('option');
        option.setAttribute('id',`tab-${numero}`);
        option.innerText = `${numero} x ${a} = ${calc}`;
        select.appendChild(option);
    }
}

function limparSelect(){
    // vamos obter o elemento select
    var elem = document.getElementById("tabuada");    

    // vamos excluir todas as opções
    elem.options.length = 0;    

    // vamos obter a quantidade de opções no select
    var quant = elem.options.length;    
  }  
function resetTabuada() {
    document.getElementById('num').value = "";
    document.getElementById('num').focus();
    $("#tabuada option").remove();
    
    let optionReset = document.createElement('option');
    let newSelect = document.getElementById('tabuada');
    optionReset.setAttribute('value','0');
    optionReset.innerText = 'Digite um número acima';
    newSelect.appendChild(optionReset);
    
}  