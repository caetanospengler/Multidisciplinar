document.addEventListener("DOMContentLoaded", function(event) {
const url = "http://www.portaltransparencia.gov.br/api-de-dados/cartoes?pagina=1/";  


var  header = new Headers({
    'chave-api-dados': '841ae6c076331d1535becdcce757fd2c', 
    'Accept': '*/*'
});
var config = {method: 'GET', headers: header };

    fetch(url, config)

    /*.then(Response => Response.json())
    .then(dados => {
        console.log(dados);

    });*/
    .then(function(response) {

        console.log(response)
    })
});