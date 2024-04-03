function tratadorDeCliqueExercicio2() {
    let dataAtual = new Date();


    let hora = dataAtual.getHours();
    let minutos = dataAtual.getMinutes();
    let segundos = dataAtual.getSeconds();

    if (hora >= 12) {
        hora = hora - 12 + "PM";
    } else {
        hora = hora + "AM";
    }
    // atualize esta função para
    // exibir um alerta com a hora 
    // atual no seguinte formato:
    // Horário: 8 PM : 40m : 28s
    console.log("Horário: " + hora + " : " + minutos + "m : " + segundos + "s");
}