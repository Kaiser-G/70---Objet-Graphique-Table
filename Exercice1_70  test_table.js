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

      //création du thead
      let thead = document.createElement("thead");
      tab.appendChild(thead);

      //génération des colonnes du head
      let tr_head = document.createElement("tr"); // pour les lignes
      thead.appendChild(tr_head);
      this.header.forEach((th_text) => {
        let th = document.createElement("th");
        th.innerText = th_text;
        tr_head.appendChild(th);
      });

      // si on reçu des fonctions pour MODIF ou SUPPR permet d'ajouter la colonne ACTIONS
      if (this.fonction_modif || this.fonction_suppr || this.fonction_vue) {
        let th = document.createElement("th");
        th.innerText = "Actions";
        tr_head.appendChild(th);
      }

      //création du body
      let tbody = document.createElement("tbody");
      tab.appendChild(tbody);

      //création des lignes dans body
      this.data.forEach((item) => {
        let tr_body = document.createElement("tr");
        tbody.appendChild(tr_body);
        //généré des cellules de la ligne
        item.forEach((cellule) => {
          let td = document.createElement("td");
          td.innerText = cellule;
          tr_body.appendChild(td);
        });
      });

      zone.appendChild(tab);
    } else {
      throw new Error(
        "Pour générer une table, il faut préciser la proprieté id_zone"
      );
    }
  }
}
