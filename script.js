
var criptografar = document.querySelector('.butonCrip');
var  descriptografar = document.querySelector('.butondescrip');

var resultado = document.querySelector('.exibicao');
var copiarTexto = document.querySelector('.butonCopi');

criptografar.onclick = encriptar;
descriptografar.onclick = desencriptar;
copiarTexto.onclick = copiar;


function encriptar(){    
    ocultarImagem();
    resultado.textContent =  criptoGrafarTexto(recuperartexto ());
}

function desencriptar (){
    ocultarImagem();
    resultado.textContent =  descriptografarTexto(recuperartexto ());
}

function recuperartexto (){
    var texto = document.querySelector('.textodigitado');
    return texto.value;
}
function copiar(){    
    navigator.clipboard.writeText(resultado.textContent);
}

function ocultarImagem(){
    var imagem = document.getElementById('imagemOculta').hidden =true;
}


function criptoGrafarTexto (mensagem){
    var texto = mensagem;
    var textoFinal = '';

    for (var i = 0; i < texto.length; i++){
        if(texto[i]== 'a'){
            textoFinal = textoFinal + 'ai'
        }
        else if(texto[i]== 'e'){
            textoFinal = textoFinal + 'enter'
        }    
        else if(texto[i]== 'i'){
            textoFinal = textoFinal + 'imes'
        }
        else if(texto[i]== 'o'){
        textoFinal = textoFinal + 'ober'
        }
         else if(texto[i]== 'u'){
            textoFinal = textoFinal + 'ufat'
        }
        else{
            textoFinal = textoFinal + texto[i];
        }
    }
     return textoFinal;
}

function descriptografarTexto (mensagem){
    var texto = mensagem;
    var textoFinal = '';

    for (var i = 0; i < texto.length; i++){
        if(texto[i]== 'a'){
            textoFinal = textoFinal + 'a'
            i = i + 1 ;
        }
        else if(texto[i]== 'e'){
            textoFinal = textoFinal + 'e'
            i = i + 4;
        }    
        else if(texto[i]== 'i'){
            textoFinal = textoFinal + 'i'
            i = i + 3;
        }
        else if(texto[i]== 'o'){
        textoFinal = textoFinal + 'o'
        i = i + 3;
        }
         else if(texto[i]== 'u'){
            textoFinal = textoFinal + 'u'
            i = i + 3;
        }
        else{
            textoFinal = textoFinal + texto[i];
        }
    }
     return textoFinal;
}
