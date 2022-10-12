/* L’utente inserisce due numeri in successione, con due prompt.
Il software stampa il maggiore. */

const numberOne = Number(prompt('Inserisci il primo numero:'));
const numberTwo = Number(prompt('Inserisci il secondo numero:'));
const body = document.querySelector('body')

if (numberOne > numberTwo){
    console.log(numberOne);
    body.innerHTML = numberOne;
}else if(numberOne < numberTwo) {
    console.log(numberTwo);
    body.innerHTML = numberTwo;
} else {
    console.log('i numeri sono uguali');
    body.innerHTML = 'i numeri sono uguali';
}