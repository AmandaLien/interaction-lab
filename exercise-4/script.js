
let verbs = ["dance", "kick", "push", "kiss", "follow", "bake", "scream"];
let nouns = ["candy", "angel", "flower", "ocean", "cats", "grass", "grapes"];
let adjectives = ["sweet", "tiny", "shiny", "crazy", "golden", "soft"];

 

let verb1 = document.getElementById("verb1");
let verb2 = document.getElementById("verb2");
let verb3 = document.getElementById("verb3");

let noun1 = document.getElementById("noun1");
let noun2 = document.getElementById("noun2");
let noun3 = document.getElementById("noun3");

let adj1 = document.getElementById("adj1");


verb1.innerHTML = verbs[Math.floor(Math.random() * verbs.length)];
verb2.innerHTML = verbs[Math.floor(Math.random() * verbs.length)];
verb3.innerHTML = verbs[Math.floor(Math.random() * verbs.length)];

noun1.innerHTML = nouns[Math.floor(Math.random() * nouns.length)];
noun2.innerHTML = nouns[Math.floor(Math.random() * nouns.length)];
noun3.innerHTML = nouns[Math.floor(Math.random() * nouns.length)];

adj1.innerHTML = adjectives[Math.floor(Math.random() * adjectives.length)];
