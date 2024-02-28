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
      let thead = document.createElement("thead"); // un seul par tableau
      thead = this.header;
      let tr = document.createElement("tr"); //que pour les lignes
      let colonne = this.header;
      for (let i = 1; i <= colonne; i++) {
        let th = document.createElement("th"); //ligne 1 pour les titres en gras, colonne
        th = this.data.value[0];
        th.innerText = "" + i;
        tr.appendChild(th);
        thead.appendChild(tr);
      }
      let th = document.createElement("th");
      th.innerText = "";
      tr.appendChild(th);
      // tab.appendChild(thead);

      //création du body
      let body = document.createElement("tbody"); //un seul par tableau qui contient :tr > td
      tab.appendChild(body);
      let ligne = this.data;
      for (let index = 1; index <= ligne; index++) {
        let tr = document.createElement("tr"); //que pour les lignes
        tr = this.data.value[1];

        for (let j = 1; j <= colonne; j++) {
          let td = document.createElement("td"); //pour les lignes suivantes dans un tr, colonne
          td.innerText = "L " + index + " C " + j;
          tr.appendChild(td);
        }
      }
      zone.appendChild(tab);
    }
  }
}
