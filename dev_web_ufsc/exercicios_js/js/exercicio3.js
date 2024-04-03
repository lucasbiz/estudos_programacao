function removeCaractere(){
    let stringRecebida = window.prompt("Informe uma String: ");

    stringTratada = stringRecebida.slice(1, (stringRecebida.length)-1);


    window.alert(stringTratada);
}