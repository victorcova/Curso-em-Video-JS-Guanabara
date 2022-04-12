// console.log('start'); // testando js.

// Criando a função
function contar() {
    console.clear();
    //Pegando parâmetros para a function:
    var ini = Number(document.getElementById('ini').value);    
    var fim = Number(document.getElementById('fim').value);
    var passo = Number(document.getElementById('passo').value);
    var res = document.querySelector('div#res');

    if(ini == '' || fim == ''){
        res.innerHTML = `<i class="fa-solid fa-circle-exclamation"></i> O <strong>início</strong> ou o <strong>fim</strong> não foram definidos`;     
        res.style.color = 'red';
    }else if(passo == 0){
        res.innerHTML = `<i class="fa-solid fa-circle-exclamation"></i> A quantidade de <strong>passos</strong> não definida!`;
        res.style.color = 'red';
    }else{    
        //o sistema vai contar do valor inicial até o final pulando no valor de passo:         
        let a = ini;
        let b = ini;    
        res.innerHTML = `<strong>Contando:</strong><br>`;
        while(ini <= fim){
            if (a == ini) {            
                res.innerHTML += `${a} <i class="fa-solid fa-person-walking"></i> `;
                //console.log('valor de ini = '+ini+' / ini: ',a);
                a = false;
            }else if(b+passo <= fim){
                res.innerHTML += `${b+passo} <i class="fa-solid fa-person-walking"></i> `;
                //console.log('valor de ini = '+ini+' / result: ', (b+passo));
                b = b+passo;            
            }
            ini++;        
        }
        res.innerHTML += `<i class="fa-solid fa-flag-checkered"></i>`;
        res.style.color = '#003641';
    }
}