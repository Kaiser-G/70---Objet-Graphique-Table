class Table {
  id_zone = "";
  class_table = "";
  data = [];
  header = "";
  class_modif = "";
  class_supp = "";
  class_vue = "";
  icone_modif = "";
  icone_vue = "";
  icone_supp = "";
  separateur = "";

  // Les méthodes
  fonction_modif = ""; // doit contenir la fonction qui sera appelée lors du
  // click sur le bouton MODIF
  fonction_suppr = ""; // doit contenir la fonction qui sera appelée lors du
  // click sur le bouton SUPPR
  fonction_vue = ""; // doit contenir la fonction qui sera appelée lors du
  // click sur le bouton VUE

  separateur = "*"; // Par défaut les valeurs seront séparées par une *

  //générer
  generer() {
    if (this.id_zone != "") {
      let tbody = document.querySelector(this.id_zone).querySelector("tbody");

      for (let i = 0; i < this.data.length; i++) {
        let ligne = tbody.insertRow();

        let cellData = ligne.insertCell();
        cellData.innerHtml = data[0].value;
        cellData.innerHtml = data[1].value;
      }
    }
  }
}
