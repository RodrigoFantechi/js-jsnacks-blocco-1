/* L’utente inserisce due numeri in successione, con due prompt.
Il software stampa il maggiore. */

const numberOne = Number(prompt('Inserisci il primo numero:'));
const numberTwo = Number(prompt('Inserisci il secondo numero:'));


if (numberOne > numberTwo){
    console.log(numberOne);
}else{
    console.log(numberTwo);
}