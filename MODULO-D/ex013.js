var agora = new Date();
var diaSem = agora.getDay(); //0-dom,1-seg,2-ter,3-qua,4-qui,5-sex,6-sab

switch (diaSem) {
    case 0:
    console.log('HOJE É DOMINGO');
    break;

    case 1:
    console.log('HOJE É SEGUNDA');
    break;

    case 2:
    console.log('HOJE É TERÇA');
    break;

    case 3:
    console.log('HOJE É QUARTA');
    break;

    case 4:
    console.log('HOJE É QUINTA');
    break;

    case 5:
    console.log('HOJE É SEXTA');
    break;

    case 6:
        console.log('HOJE É SÁBADO');
        break;
                                            
    default:
        console.log('FORMATO DE DATA INVÁLIDO');
        break;
}