var botao = document.getElementById(".4308102");


document.addEventListener("DOMContentLoaded", function(event) {
const url = 'http://www.transparencia.gov.br/api-de-dados/auxilio-emergencial-por-municipio?mesAno=202004&codigoIbge=4308102&pagina=1';

var xhr = new XMLHttpRequest();

xhr.open("GET","https://cors-anywhere.herokuapp.com/"+url);
xhr.setRequestHeader("chave-api-dados", "841ae6c076331d1535becdcce757fd2c");
xhr.setRequestHeader("Accept", "*/*");
xhr.send(null);

xhr.onreadystatechange = function() {
    if(xhr.readyState === 4){
       console.log(JSON.parse(xhr.responseText));
        }
    }

});