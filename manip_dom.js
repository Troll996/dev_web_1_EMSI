// EX2
console.log(document.title);
console.log(document.URL);
console.log(document.domain);
console.log(document.characterSet);
// EX3
console.log(document.documentElement);
console.log(document.head);
console.log(document.body);

// EX4
const introPar= document.getElementById("intro");
console.log(introPar.nodeType);
console.log(introPar.textContent);

// EX5
const premierNoeud= introPar.firstChild;
console.log(premierNoeud.nodeType);
console.log(premierNoeud.nodeName);

// EX6
const lien = document.getElementById("ressource")
