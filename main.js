document.addEventListener("DOMContentLoaded", function(event) {
const url = 'http://www.portaltransparencia.gov.br/api-de-dados/cartoes?mesExtratoInicio=11%2F2019&mesExtratoFim=10%2F2020&pagina=1'




var  header = new Headers({
    'chave-api-dados': '841ae6c076331d1535becdcce757fd2c', 
    'Accept': '*/*',
    'Access-Control-Allow-Origin': '*'
});
var config = {method: 'GET', headers: header, mode: "no-cors" };

    fetch(url, config)

    /*.then(Response => Response.json())
    .then(dados => {
        console.log(dados);

    });*/
    .then(function(response) {

        console.log(response)
    })
});