//jsnack 6 

//richiedo numero dall'utente

var arrNumeri = [];

var sum = 0;
for(var i = 1; i <= 5; i++){
  var numUtente = prompt("inserisci un numer.");
  arrNumeri.push(numUtente);
  var numCubo = numUtente**3;
  sum += numCubo;
}
console.log(sum);


// calcolo il cubo del numero


//stampo il risultato
document.getElementById("potenza-3").innerHTML = "Il risultato é " + sum + ".";