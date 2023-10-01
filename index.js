let displayId = document.getElementById('displayId');
let dataId = document.getElementById('dataId');


setInterval(function(){
    let dataCompleta = new Date();
    let dia = dataCompleta.getDate();
    let diaFormatado = dia.toString().padStart('2',0);
    let mes = dataCompleta.getMonth()+1;
    let mesFormatado = mes.toString().padStart('2',0);
    let ano = dataCompleta.getFullYear();
    let hora = null;
    let minuto = null;
    let segundos = null;

    let diaDaSemana = dataCompleta.getDay();

    if (diaDaSemana==0){
        var diaDaSemanaNome = 'Domingo';
    }

    if(diaDaSemana==1){
        var diaDaSemanaNome = 'Segunda-feira';
    }

    if(diaDaSemana==2){
        var diaDaSemanaNome = 'Terça-feira';
    }

    if(diaDaSemana==3){
        var diaDaSemanaNome = 'Quarta-feira';
    }

    if(diaDaSemana==4){
        var diaDaSemanaNome = 'Quinta-feira';
    }

    if(diaDaSemana==5){
        var diaDaSemanaNome = 'Sexta-feira';
    }

    if(diaDaSemana==6){
        var diaDaSemanaNome = 'Sábado';
    }

    

    
    hora = dataCompleta.getHours();    
    let horaFormatada = hora.toString().padStart('2',0);

    minuto = dataCompleta.getMinutes();
    let minutoFormatado = minuto.toString().padStart('2',0);

    segundos = dataCompleta.getSeconds();
    let segundosFormatado = segundos.toString().padStart('2',0);
    let horaCompleta = `${horaFormatada}:${minutoFormatado}:${segundosFormatado}`;

    displayId.innerHTML = horaCompleta;   

    

    let dataHoje = `Hoje é ${diaFormatado}/${mesFormatado}/${ano} - ${diaDaSemanaNome}`;
    dataId.innerHTML = dataHoje;
},1000)


var btnHideShowHour = document.getElementById('btnHideShowHour');
btnHideShowHour.addEventListener('click',function(){
    // se display tem a aclasse visible, tira e poe invisible. Muda o txto botao para mostrar hora
    if(displayId.classList.contains('setDisplayVisible')){
        displayId.classList.remove('setDisplayVisible');
        displayId.classList.add('setDisplayInvisible');
        btnHideShowHour.innerHTML = 'Mostrar Hora';        

        return;
    }   

    if(displayId.classList.contains('setDisplayInvisible')){
        displayId.classList.remove('setDisplayInvisible');
        displayId.classList.add('setDisplayVisible');
        btnHideShowHour.innerHTML = 'Esconder Hora';
        return;
    }
    

    // se display tem a classe invisible, tira e poe visible. muda o texto texto botao para esconder hora.
})

var btnHideShowDate = document.getElementById('btnHideShowDate');
btnHideShowDate.addEventListener('click',function(){
    if(dataId.classList.contains('setDataVisible')){
        dataId.classList.remove('setDataVisible');
        dataId.classList.add('setDataInvisible');
        btnHideShowDate.innerHTML = 'Mostrar Data';
        return;
    }

    if(dataId.classList.contains('setDataInvisible')){
        dataId.classList.remove('setDataInvisible');
        dataId.classList.add('setDataVisible');
        btnHideShowDate.innerHTML = 'Esconder Data';
        return;
    }
})




