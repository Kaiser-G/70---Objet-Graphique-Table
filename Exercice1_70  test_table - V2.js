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

      //generation colonne du head tr et ensuite th
      let tr_head = document.createElement("tr");
      thead.appendChild(tr_head);
      this.header.forEach((th_text) => {
        let th = document.createElement("th");
        th.innerText = th_text;
        tr_head.appendChild(th);
      });

      //générer la colonne ACTION
      if (this.fonction_modif || this.fonction_suppr || this.fonction_vue) {
        let th = document.createElement("th");
        th.innerText = "Action";
        tr_head.appendChild(th);
      }

      //création du body
      let tblbody = document.createElement("tbody");
      tab.appendChild(tblbody);

      // création des tr avec des td a l'intérieur
      this.data.forEach((ligne) => {
        let tr_body = document.createElement("tr");
        tblbody.appendChild(tr_body);

        ligne.forEach((colonne) => {
          let td = document.createElement("td");
          td.innerText = colonne;
          tr_body.appendChild(td);
        });
      });

      // ici sa bug !!
      // if (this.data != "") {
      //   this.data.forEach((value) => {
      //     let option = document.createElement("tr");
      //     tblbody.appendChild(tr);
      //     let th = document.createElement("td");
      //     option.innerHTML = value[1];
      //     option.value = value[0];
      //     tab.appendChild(option);
      //   });
      // }

      zone.appendChild(tab);
    } else {
      throw new Error(
        "Pour générer une table, il faut préciser la proprieté id_zone"
      );
    }
  }
}
