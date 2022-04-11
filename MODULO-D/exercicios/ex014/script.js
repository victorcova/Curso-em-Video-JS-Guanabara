function carregar(){
    var msg = window.document.getElementById('msg');
    var img = window.document.getElementById('imagem');
    var data = new Date();
    var hora = data.getHours();
    
    //var hora = 19;
    
    msg.innerHTML = `Agora são ${hora} horas.`;

    if (hora < 12) {
        img.src = 'manha.png';
        document.body.style.background = "#d3d2b7";
    }else if (hora < 18){
        img.src = 'tarde.png';
        document.body.style.background = "#a9776f";
    }else{
        img.src = 'noite.png';
        document.body.style.background = "#2f2523";
    }
}