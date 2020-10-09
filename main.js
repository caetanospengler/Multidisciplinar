function pesquisar(string) {
    var x = string.value;
    const url = 'http://www.transparencia.gov.br/api-de-dados/auxilio-emergencial-por-municipio?mesAno=202004&codigoIbge='+x+'&pagina=1';
    const url2 = 'http://www.transparencia.gov.br/api-de-dados/auxilio-emergencial-por-municipio?mesAno=202005&codigoIbge='+x+'&pagina=1';
    const url3 = 'http://www.transparencia.gov.br/api-de-dados/auxilio-emergencial-por-municipio?mesAno=202006&codigoIbge='+x+'&pagina=1';
    const url4 = 'http://www.transparencia.gov.br/api-de-dados/auxilio-emergencial-por-municipio?mesAno=202007&codigoIbge='+x+'&pagina=1';
    const url5 = 'http://www.transparencia.gov.br/api-de-dados/auxilio-emergencial-por-municipio?mesAno=202008&codigoIbge='+x+'&pagina=1';
    const url6 = 'http://www.transparencia.gov.br/api-de-dados/auxilio-emergencial-por-municipio?mesAno=202009&codigoIbge='+x+'&pagina=1';

    var xhr = new XMLHttpRequest();
    
    xhr.open("GET","https://cors-anywhere.herokuapp.com/"+url);
    xhr.open("GET","https://cors-anywhere.herokuapp.com/"+url2);
    xhr.open("GET","https://cors-anywhere.herokuapp.com/"+url3);
    xhr.open("GET","https://cors-anywhere.herokuapp.com/"+url4);
    xhr.open("GET","https://cors-anywhere.herokuapp.com/"+url5);
    xhr.open("GET","https://cors-anywhere.herokuapp.com/"+url6);
    xhr.setRequestHeader("chave-api-dados", "841ae6c076331d1535becdcce757fd2c");
    xhr.setRequestHeader("Accept", "*/*");
    xhr.send(null);
    
    xhr.onreadystatechange = function() {
        if(xhr.readyState === 4){
           console.log(JSON.parse(xhr.responseText));
           document.getElementById('nome').innerHTML = JSON.parse(xhr.responseText)['0']['municipio'].nomeIBGE;
           document.getElementById('valor').innerHTML = JSON.parse(xhr.responseText)['0'].valor;
           document.getElementById('valor2').innerHTML = JSON.parse(xhr.responseText)['0'].valor;
           document.getElementById('valor3').innerHTML = JSON.parse(xhr.responseText)['0'].valor;
           document.getElementById('valor4').innerHTML = JSON.parse(xhr.responseText)['0'].valor;
           document.getElementById('valor5').innerHTML = JSON.parse(xhr.responseText)['0'].valor;
           document.getElementById('valor6').innerHTML = JSON.parse(xhr.responseText)['0'].valor;
            }
        }
}



    







