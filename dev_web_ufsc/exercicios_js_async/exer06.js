
// É criado uma nova promessa, que tem como parametros originalmente o "resolve" e "reject", nesse caso usamos apenas o "resolve". 
const resolverEm1s = new Promise(resolve => setTimeout(resolve, 1000));
// Depois de 1s, ele muda o estado da promise para resolve e segue adiante

for (let i = 0; i < 10; i++) {
    resolverEm1s.then(() => console.log("oi"))            
}

// Depois de resolver a promisse, executa 10x o console.log("oi")
