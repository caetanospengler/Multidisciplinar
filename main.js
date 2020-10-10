function pesquisar(string) {
    var x = string.value;
    const url = 'http://www.transparencia.gov.br/api-de-dados/auxilio-emergencial-por-municipio?mesAno=202004&codigoIbge=' + x + '&pagina=1';
    var xhr = new XMLHttpRequest();

    xhr.open("GET", "https://cors-anywhere.herokuapp.com/" + url);
    xhr.setRequestHeader("chave-api-dados", "841ae6c076331d1535becdcce757fd2c");
    xhr.setRequestHeader("Accept", "*/*");
    xhr.send(null);

    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4) {
            console.log(JSON.parse(xhr.responseText));
            document.getElementById('nome').innerHTML = JSON.parse(xhr.responseText)['0']['municipio'].nomeIBGE;
            document.getElementById('valor').innerHTML = "R$" + JSON.parse(xhr.responseText)['0'].valor;
            document.getElementById('beneficiado1').innerHTML = JSON.parse(xhr.responseText)['0'].quantidadeBeneficiados;
        }

    }
    var x = string.value;
    const url2 = 'http://www.transparencia.gov.br/api-de-dados/auxilio-emergencial-por-municipio?mesAno=202005&codigoIbge=' + x + '&pagina=1';
    var xhr2 = new XMLHttpRequest();

    xhr2.open("GET", "https://cors-anywhere.herokuapp.com/" + url2);
    xhr2.setRequestHeader("chave-api-dados", "841ae6c076331d1535becdcce757fd2c");
    xhr2.setRequestHeader("Accept", "*/*");
    xhr2.send(null);

    xhr2.onreadystatechange = function () {
        if (xhr2.readyState === 4) {
            console.log(JSON.parse(xhr2.responseText));
            document.getElementById('valor2').innerHTML = "R$" + JSON.parse(xhr2.responseText)['0'].valor;
            document.getElementById('beneficiado2').innerHTML = JSON.parse(xhr2.responseText)['0'].quantidadeBeneficiados;
        }

    }

    var x = string.value;
    const url3 = 'http://www.transparencia.gov.br/api-de-dados/auxilio-emergencial-por-municipio?mesAno=202006&codigoIbge=' + x + '&pagina=1';
    var xhr3 = new XMLHttpRequest();

    xhr3.open("GET", "https://cors-anywhere.herokuapp.com/" + url3);
    xhr3.setRequestHeader("chave-api-dados", "841ae6c076331d1535becdcce757fd2c");
    xhr3.setRequestHeader("Accept", "*/*");
    xhr3.send(null);

    xhr3.onreadystatechange = function () {
        if (xhr3.readyState === 4) {
            console.log(JSON.parse(xhr3.responseText));
            document.getElementById('valor3').innerHTML = "R$" +JSON.parse(xhr3.responseText)['0'].valor;
            document.getElementById('beneficiado3').innerHTML = JSON.parse(xhr3.responseText)['0'].quantidadeBeneficiados;
        }

    }

    var x = string.value;
    const url4 = 'http://www.transparencia.gov.br/api-de-dados/auxilio-emergencial-por-municipio?mesAno=202007&codigoIbge=' + x + '&pagina=1';
    var xhr4 = new XMLHttpRequest();

    xhr4.open("GET", "https://cors-anywhere.herokuapp.com/" + url4);
    xhr4.setRequestHeader("chave-api-dados", "841ae6c076331d1535becdcce757fd2c");
    xhr4.setRequestHeader("Accept", "*/*");
    xhr4.send(null);

    xhr4.onreadystatechange = function () {
        if (xhr4.readyState === 4) {
            console.log(JSON.parse(xhr4.responseText));
            document.getElementById('valor4').innerHTML = "R$" +JSON.parse(xhr4.responseText)['0'].valor;
            document.getElementById('beneficiado4').innerHTML = JSON.parse(xhr4.responseText)['0'].quantidadeBeneficiados;
        }

    }

    var x = string.value;
    const url5 = 'http://www.transparencia.gov.br/api-de-dados/auxilio-emergencial-por-municipio?mesAno=202008&codigoIbge=' + x + '&pagina=1';
    var xhr5 = new XMLHttpRequest();

    xhr5.open("GET", "https://cors-anywhere.herokuapp.com/" + url5);
    xhr5.setRequestHeader("chave-api-dados", "841ae6c076331d1535becdcce757fd2c");
    xhr5.setRequestHeader("Accept", "*/*");
    xhr5.send(null);

    xhr5.onreadystatechange = function () {
        if (xhr5.readyState === 4) {
            console.log(JSON.parse(xhr5.responseText));
            document.getElementById('valor5').innerHTML = "R$" +JSON.parse(xhr5.responseText)['0'].valor;
            document.getElementById('beneficiado5').innerHTML = JSON.parse(xhr5.responseText)['0'].quantidadeBeneficiados;
        }

    }
}


    







