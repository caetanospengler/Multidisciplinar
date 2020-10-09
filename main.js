function pesquisar(string) {
    var x = string.value;
    const url = 'http://www.transparencia.gov.br/api-de-dados/auxilio-emergencial-por-municipio?mesAno=202004&codigoIbge='+x+'&pagina=1';

    var xhr = new XMLHttpRequest();
    
    xhr.open("GET","https://cors-anywhere.herokuapp.com/"+url);
    xhr.setRequestHeader("chave-api-dados", "841ae6c076331d1535becdcce757fd2c");
    xhr.setRequestHeader("Accept", "*/*");
    xhr.send(null);
    
    xhr.onreadystatechange = function() {
        if(xhr.readyState === 4){
           console.log(JSON.parse(xhr.responseText));
           document.getElementById('nome').innerHTML = JSON.parse(xhr.responseText)['0']['municipio'].nomeIBGE;
           document.getElementById('valor').innerHTML = JSON.parse(xhr.responseText)['0'].valor;
            }
        }
}



    







