document.addEventListener("DOMContentLoaded", function(event) {
const url = 'http://www.portaltransparencia.gov.br/api-de-dados/cartoes?mesExtratoInicio=11%2F2019&mesExtratoFim=10%2F2020&pagina=1';

var xhr = new XMLHttpRequest();

xhr.open("GET","https://cors-anywhere.herokuapp.com/"+url);
xhr.setRequestHeader("chave-api-dados", "841ae6c076331d1535becdcce757fd2c");
xhr.setRequestHeader("Accept", "*/*");
xhr.send(null);

xhr.onreadystatechange = function() {
    if(xhr.readyState === 4){
       var json = JSON(xhr.responseText);
        console.log(json);
        }
    }

});