(function(){

function tempo_minimo_miojo(){

    var tempoMiojo = parseInt(document.getElementById("tempoMiojo").value);
    var ampulheta1 = parseInt(document.getElementById("ampulheta1").value);
    var ampulheta2 = parseInt(document.getElementById("ampulheta2").value);
    var output = document.getElementById("output");

    output.innerHTML = "";

    if (ampulheta1 === ampulheta2) {
        console.log("aqui 1");
        output.innerHTML += "<p> Impossível marcar o tempo do miojo </p>";
    }

    if ((ampulheta1 <= tempoMiojo) || (ampulheta2 <= tempoMiojo) ) {
        console.log("aqui 2");
        output.innerHTML += "<p> O tempo das ampulhetas deve ser maior que o do miojo </p>";
    }

    var maiorAmpulheta = Math.max(ampulheta1, ampulheta2);
    var menorAmpulheta = Math.min(ampulheta1, ampulheta2);
    var diferençaDasAmpulhetas = maiorAmpulheta - menorAmpulheta;

    var marco1 = menorAmpulheta - diferençaDasAmpulhetas;
    var marco2 = maiorAmpulheta - (menorAmpulheta - diferençaDasAmpulhetas);

    if (marco1 === tempoMiojo) {
        var tempoMinimo = tempoMiojo + maiorAmpulheta;
        output.innerHTML += "<p> Gira as duas ampulhetas... </p>";
        output.innerHTML += "<p> ampulheta de "+ menorAmpulheta +" minutos acaba, gira ela novamente... </p>";
        output.innerHTML += "<p> ampulheta de "+ maiorAmpulheta +" minutos acaba, menor ampulheta está faltando "+ (menorAmpulheta - diferençaDasAmpulhetas) + ", prepara o miojo </p>";
        output.innerHTML += "<p> O tempo minimo é: " + tempoMinimo +" </p>";
    }

    else if (marco2 === tempoMiojo) {
        var tempoMinimo = tempoMiojo + maiorAmpulheta + (maiorAmpulheta - marco2);
        
        output.innerHTML += "<p> Gira as duas ampulhetas... </p>";
        output.innerHTML += "<p> ampulheta de "+ menorAmpulheta +" minutos acaba, gira ela novamente... </p>";
        output.innerHTML += "<p> ampulheta de "+ maiorAmpulheta +" minutos acaba, menor ampulheta está faltando " + (menorAmpulheta - diferençaDasAmpulhetas) + ", gira a maior ampulheta de novo... </p>"; 
        output.innerHTML += "<p> menor ampulheta acaba, maior está faltando "+ (maiorAmpulheta - marco1) +", prepara o miojo </p>";
        output.innerHTML += "<p> O tempo minimo é: " + tempoMinimo +" </p>";
    }
    else{
        output.innerHTML += "<p> Impossível marcar o tempo do miojo </p>";
    }

}

var calculo = document.getElementById('calc');
calculo.addEventListener("click", tempo_minimo_miojo , false);

})();