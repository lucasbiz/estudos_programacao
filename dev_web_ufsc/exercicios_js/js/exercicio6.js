function inverteString(){
    stringNormal = window.prompt("Informe uma String: ");

    let stringInvertida = ""

    for (i = stringNormal.length; i > 0; i--){
        stringInvertida = stringInvertida + stringNormal[i-1];
    }

    console.log(stringInvertida);
}