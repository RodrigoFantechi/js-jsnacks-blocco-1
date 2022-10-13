/* In un array sono contenuti i nomi degli invitati alla festa del grande Gatsby, chiedi all’utente il suo nome e comunicagli se può partecipare o no alla festa. */

const ospiti =[
    'Giovanni',
    'Giorgio',
    'Genoveffo',
    'Ugo'
];

const userName = prompt('inserire nome');
let valid = 'non può entrare';

for (let i = 0; i < ospiti.length; i++) {
    const element = ospiti[i];
    if (element===userName){
        valid = 'lei è il benvenuto';
    }
} 

// OPPURE 
    let i = 0;
    while ( i < ospiti.length) {
        const element = ospiti[i];
        if (element===userName){
            valid = 'lei è il benvenuto';
        }
        i++
}

//OPPURE 
do {
    const element = ospiti[i];
        if (element===userName){
            valid = 'lei è il benvenuto';
        }
        i++
} while (i < ospiti.length);



alert(valid);
