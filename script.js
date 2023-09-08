function calcular() {
    //pegando os valores dos campos através do DOM com o método value
    let a = parseFloat(document.getElementById('a').value);
    let b = parseFloat(document.getElementById('b').value);
    let c = parseFloat(document.getElementById('c').value);

    //fazendo a validação dos dados caso o usuário clique para calcular e não haja valores nos campos, o que pode ocasionar mensagens inesperadas de NaN
    if(isNaN(a) || isNaN(b) || isNaN(c)) {
        alert('Preencha todos os campos para calcular.')
        return
    }

    //fazendo o calculo do delta
    let delta = (b*b) - (4*a*c);

    //condicional informando ao usuário que não tem como realizar a raiz de um delta negativo e informando o resultado do delta
    if(delta < 0 ) {
        alert(`Não é possível processar a raíz de delta negativo. Delta = ${delta}`)
        return  
    }

    //realizando as contas das raízes. Para a realização da raiz quadrada de delta, foi utilizado o método Math.sqrt
    let x1 = ((-1*b) + (Math.sqrt(delta))) / (2*a);
    let x2 = ((-1*b) - (Math.sqrt(delta))) / (2*a);

    //utilizando o DOM para selecionar os elementos HTML e imprimir através do método innerHTML as mensagens com os respectivos resultados. Foi utilizado o toFixed para limitar os valores em duas casas decimais
    document.getElementById('resultadoX1').innerHTML = `X = ${x1.toFixed(2)}`
    document.getElementById('resultadoX2').innerHTML = `X2 = ${x2.toFixed(2)}`   
}

function limparDados() {
    document.getElementById('a').value = ''
    document.getElementById('b').value = ''
    document.getElementById('c').value = ''

    document.getElementById('resultadoX1').innerHTML = ''
    document.getElementById('resultadoX2').innerHTML = ''
}