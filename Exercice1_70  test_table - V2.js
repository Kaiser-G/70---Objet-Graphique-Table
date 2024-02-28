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
      let tab = document.createElement("table");
      tab.className = this.class_table;
      let tblbody = document.createElement("tbody");

      if (this.data != "") {
        this.data.forEach((value) => {
          let option = document.createElement("tr");
          option.innerHTML = value[1];
          option.value = value[0];
          tab.appendChild(option);
        });
      }

      document.getElementById(this.id_zone).appendChild(tblbody);
    } else {
      throw new Error(
        "Pour générer une table, il faut préciser la proprieté id_zone"
      );
    }
  }
}
