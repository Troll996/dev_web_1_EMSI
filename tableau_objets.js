// Exercice1
const etudiant={prenom:"Sara", nom:"Benali", age:22, ville: "Casablanca",
    parler(){
        console.log(`Bonjour je m'appelle ${this.prenom} ${this.nom}.`)
    }
};

const voiture={marque:"Tesla", modele:"Model 3", annee:"2020", proprietaire:{nom:"Hassan",age:25}};

// Exercice2
console.log("age" in etudiant);
etudiant["note"]=15;

