function verificar() {    
    var data = new Date();
    var ano = data.getFullYear();
    var f_ano = document.getElementById('txtano');    
    var res = document.querySelector('div#res');
        
    if (f_ano.value.length == 0 || Number(f_ano.value) > ano) {
        window.alert('[ERRO] Verifique os dados e tente novamente!');
    }else{
        var fsex = document.getElementsByName('radsex');
        var idade = ano - Number(f_ano.value);
        var img = document.createElement('img');
        img.setAttribute('id','foto');

        // res.innerHTML = `Idade calculada: ${idade}`;
        var genero = '';
        if (fsex[0].checked) {//masculino
            genero = "Homem";           
            if(idade < 10){
                //Criança
                img.setAttribute('src','imgs/homem-idade-baixa.png');
            }else if(idade < 21){
                //Jovem
                img.setAttribute('src','imgs/homem-idade-jovem.png');
            }else if(idade < 50){
                //Adulto
                img.setAttribute('src','imgs/homem-idade-media.png');
            }else{
                //Idoso
                img.setAttribute('src','imgs/homem-idade-alta.png');
            }
        }else if(fsex[1].checked){
            genero = "Mulher";
            if(idade < 10){
                //Criança
                img.setAttribute('src','imgs/mulher-idade-baixa.png');
            }else if(idade < 21){
                //Jovem
                img.setAttribute('src','imgs/mulher-idade-jovem.png');
            }else if(idade < 50){
                //Adulta
                img.setAttribute('src','imgs/mulher-idade-media.png');
            }else{
                //Idosa
                img.setAttribute('src','imgs/mulher-idade-alta.png');
            }
        }
        res.style.textAlign = "center";
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`;
        res.appendChild(img);
    }
}