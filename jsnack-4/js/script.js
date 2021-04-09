//snack 4

var gatsbyParticipants = ["Frank", "Bob", "Tim", "Steve"];

var nameG = prompt("Pleas give your name.");

var invitation = false;
for(i = 0; i < gatsbyParticipants.length; i++){
  var nameParticipant = gatsbyParticipants[i];
  if(nameParticipant === nameG){
    invitation = true;
    break;
  }
}

var msg =""
if(invitation){
  msg = "Welcome!";
}else{
  msg = "You were not invited.";
}
console.log(msg);
