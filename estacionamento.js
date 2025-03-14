
const obterElemento = (id) => { 
    return document.getElementById(id);
}

const limpar = () =>{
    document.getElementById("paragrafo").innerHTML = "";
    return;
}

const CalculoValor = (valor) => {

    let tempo = 0;
    let troco = 0;

    if(valor === 1.00 || valor < 1.75){
        tempo = 30;
        troco = valor - 1.00;

    }
    else if(valor === 1.75 || valor< 3.00){
        tempo = 60;
        troco = valor - 1.75;

    }
    else if(valor >= 3.00){
        tempo = 120;
        troco = valor - 3.00;

    }
    
    return { tempo, troco};

}

const calculoEST = () =>{
    const checagem = obterElemento("valor");
    let valor = checagem.value;
    valor = valor.replace(",",".");
    valor = Number(valor);

    console.log("CHECOU CERTO AMIGAO");
    
    if(valor <= 0 ){
        alert("O VALOR INSERIDO NAO PODE SER MENOR/IGUAL A ZERO, TENTE NOVAMENTE:")
        console.log("DEU CERTO");
        checagem.value = "";
        return true;
    }
    else if(isNaN(valor)){
        alert("O VALOR INSERIDO É INVÁLIDO, COLOQUE APENAS NÚMEROS:")
        console.log("DEU CERTO 2");
        checagem.value = "";
        return true;
    }

    checagem.value=""
    const{tempo, troco} = CalculoValor(valor);

    let trocoCerto = troco.toFixed(2).replace(".", ",");

    document.getElementById("paragrafo").innerHTML = `Seu tempo disponível para estacionar é de: ${tempo} minutos. <br> `;

    if(troco > 0){
        document.getElementById("paragrafo").innerHTML += ` Seu troco foi de: R$${trocoCerto}. `;
    }
    
}


