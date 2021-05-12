// EXO1
// Créer une fonction qui prend deux paramètres, et les additionne, et fait un console.log du résultat.(Additionner)
// let var1 = (nbr1, nbr2) => {
//    console.log(nb1+nb2);
// }
// console.log(var1(1,9));





// EXO2
// Créez une fonction qui prend deux paramètres, et soustrait le deuxième au premier, et faites un console.log du résultat.(Soustraction)
// let var2 = (ch1, ch2) => {
//     return ch1 - ch2
// }
// console.log(var2(10,9));






// EXO3
// Créez une fonction qui prend deux paramètres, et les multiplie, et faites un console.log du résultat.(Multiplication)
// let var3 = (ch1, ch2) => {
//     return ch1 * ch2
// }
// console.log(var3(5,5));






// EXO4 
// Créez une fonction qui prend deux paramètres, et divise le premier par le deuxième, et faites un console.log du résultat.(Division)
// let var4 = (ch1, ch2) => {
//     return ch1 / ch2
// }
// console.log(var4(10,2));






// EXO5
// Créez une fonction qui prend deux paramètres, et retourne le reste de la division du premier par le deuxième, et faites un console.log du résultat.(Modulo)
// let var5 = (ch1, ch2) => {
//     return ch1 % ch2
// }
// console.log(var5(100,20));








// EXO6
// Créez une fonction qui prend un paramètre, et retourne le carré de ce nombre, et faites un console.log du résultat.(Racine carrée)
// let var6 = (ch1) => {
//         return Math.sqrt(ch1)
//     }
//     console.log(var6(4));







// EXO7
// Créez une fonction qui prend deux paramètres, et retourne le premier nombre à l'exposant du deuxième, et faites un console.log du résultat.(Exposant)
// let var7 = (ch1, ch2) => {
//     return  Math.pow(ch1, ch2)
// }
// console.log(var7(10,2));








// EXO8
// Créer une function [capitalize] qui transforme n'importe quelle chaine de caractères avec la première lettre en majuscule et le reste en minuscule;
// let capitalize = (ph1) => {
//     return ph1.charAt(0).toUpperCase()+ph1.substr(1).toLowerCase();
// }
// console.log(capitalize("agim"));








// EXO9
// Créer une function [calcul] ayant 3 paramètres
// nbr1 , operator , nbr2
// Je dois pouvoir mettre un nombre choisir entre + - * ou / et un second nombre et obtenir une réponse (Utilisez un switch)
// let calcul = (nbr1 , operator , nbr2) => {
//     switch (operator) {
//         case "+":
//             return nbr1+nbr2;
//         case "-":
//             return nbr1-nbr2;
//         case "*":
//             return nbr1*nbr2;
//         case "/":
//             return nbr1/nbr2;
//         default:
//             return "veuillez entré un operateur valide!"
//     }
// }
// nbr1 = prompt("chiffre 1");
// operateur = prompt("choisi l'operateur");
// nbr2 = prompt("chiffre 2");






// 2ieme partie 
// EXO1
// Créer une function [reverseNumber] qui retourne une série de nombre à l'envers (exemple si j'entre 851 elle me retourne 158)
// let reverseNumber = (a) =>{
    // a = a.toString().split("").reverse().join("").toString()   // UNE LIGNE
    // return a


    // a = a.split("")     \
    // a.reverse()          |
    // a = a.join("")       | > SEPAREMENT
    // a = a.toString()     |
    // parseInt(a)          |
    // return a            /
// }           
// console.log(reverseNumber(987));








// EXO2
// Créer une function [divPar2] contenant un switch qui vérifie si un nombre est divisible par 2
// Qui répond "Le num x est divisible par 2 x:2 = z"
// Dans le cas ou ce n'est pas divisible il répond : "Ce nombre n'est pas divisible par 2"
// let z = nbr % 2;
let div;

let divPar2 = (nb) => {
    div = nb % 2; // contient soit 0 soit 1
    switch (div) {
        case 1:
            return (`le num ${nb} est divisible par 2 ${nb}:2 = ${div}`);
            break
        case 0:
            return (`Ce nombre n'est pas divisible par 2`);
            break
        default:
            alert('Veuillez rentre une valeur correct');
            break
    }
}
divPar2(prompt('le nombre ?'));