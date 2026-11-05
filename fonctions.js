// Fonction anonyme
function direBonjour(nom="Etudiant"){
    console.log(`Bonjour ${nom}`);
}
direBonjour()

// Ex1
function calculerMoyenne(notes){
    let s=0;
    for(i=0; i<notes.length;i++){
        s+=notes[i];
    }
    let m=s/notes.length;
    console.log(`La moyenne est: ${m}`);
}

let tab=[23, 45, 67];
calculerMoyenne(tab);

// Fonction anonymes


// Fonction fléchées
// Ex2
const bievenue=nom =>{
    return "Bienvenue, "+ nom + "!";
}

const estPair=n =>{
    if (n%2==0){
        return "Le nombre est paire. "
    }
    else{
        return "Le"
    }
}

// DOM 
