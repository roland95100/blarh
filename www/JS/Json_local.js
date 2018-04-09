function ajouter(){
  var produit = document.getElementById("prod").value;
  var quantite = document.getElementById("qnt").value;
  //console.log(produit);
  //console.log(quantite);

  //le stocage de donner en localStorage
  localStorage.setItem(produit,quantite);

  document.getElementById("prod").value="";
  document.getElementById("qnt").value="";
  afficher();
}

function modifier(){
  var produit = document.getElementById("prod").value;

  //la recuperation de donner en localStorage avec getItem
  document.getElementById("qnt").value=localStorage.getItem(produit);
  afficher();
}

function Supprimer(){
  var produit = document.getElementById("prod").value;

  //la recuperation de donner en localStorage avec removeItem et Supprimer
  localStorage.removeItem(produit);
  document.getElementById("prod").value="";
  afficher();
}

function effacer(){
  //tous effacer
  localStorage.clear();
  afficher();
}
function afficher(){
  var key = "";
  var resulta = "<tr><td><b>Produit:</b></td><td><b>Quantité:</b></td></tr> \n ";
  var i = 0;
  for(i=0;i<=localStorage.length-1;i++){
    key = localStorage.key(i);
    resulta += "<td><td>"+ key +"</td>\n<td>"+ localStorage.getItem(key) +"</td></tr>\n";
  }
  if(resulta == "<tr><td><b>Produit:</b></td><td><b>Quantité:</b></td></tr>\n"){
    resulta += "<tr><td><i>Vide</i></td><td><i>Vide</i></td></tr>\n";
  }
  document.getElementById("resulta").innerHTML = resulta;
}
