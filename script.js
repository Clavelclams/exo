/* 
alert ('alerte ceci est une chaine de caractere');
console.log('ceci est un message');
var message = prompt('message');
confirm('confirme moi ');
var nom =  prompt('saisissez votre nom');
alert('bonjour ' + nom + ' voici votre message ' + '"' + message + '"' );
*/

// exercice1.js 
/*
alert('Coucou !');
console.log('Ah que Coucou !');
document.write('Coucou beuh !');
*/
/*
// exercice2.js part 1
var nom = prompt('Saisissez votre nom');
var prénom = prompt('Saisissez votre prénom');
alert('bonjour ' + nom + ' ' + prénom);
// exercice2 part 2
var A = parseInt (prompt('Saisissez la somme du premier produit'));
var B = parseInt (prompt('Saisissez la somme du deuxieme produit'));
// var resultat = (nombre1 + nombre2);
// alert(resultat) 
window.alert('votre résultat est :' + (B+A));
// exercice2 part 3 
var C = parseInt (prompt('Quel température en degrés Celsius fait-il'));
if (!isNaN(C)) {
    var F = (C*9/5)+32;
    window.alert('Il fait '+F+' en degrés Fahrenheit');
} else {
    window.alert('veuillez entrer une valeur numerique correct')
}
*/
// exercice 3
var a = '100';
var b = 100 ;
var c = 1.00;
var d = true ;
window.alert('Ceci est une chaîne de caractères : ' + a );
b--;
window.alert(b);
c = c + parseFloat(a);
window.alert(c);
d = !d;
window.alert(d);