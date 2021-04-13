//snak 8

var utenteNumero = prompt("Inserisci un numero di 4 cifre.");
while(utenteNumero.length !=4){
  if(utenteNumero.length > 4){
    alert("Hai inserito troppe cifre. Inserisci 4 cifre.");
    utenteNumero = prompt("Inserisci un numero di 4 cifre.");
  }else if(utenteNumero.length < 4){
    alert("Hai inserito poche. Inserisci 4 cifre.");
    utenteNumero = prompt("Inserisci un numero di 4 cifre.");
  }
}

var split = utenteNumero.toString().split('');
somma = 0;
for(var i = 0; i < split.length ; i++){
  var numUnita = parseInt(split[i]);
  somma += numUnita;
}

document.getElementById("text").innerHTML = somma;