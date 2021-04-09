//snack 5

//array vuot
var dispariN = [];

//ciclo prompt
for(i = 0; i < 5; i++){
  var insertNumber = parseInt(prompt("inserisci un numero."));
  if(insertNumber%2){
    dispariN.push(insertNumber)
  }
}

//if dispari inserire nell'array
console.log(dispariN)