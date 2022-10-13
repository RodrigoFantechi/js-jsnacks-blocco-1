/* In un array sono contenuti i nomi degli invitati alla festa del grande Gatsby, chiedi all’utente il suo nome e comunicagli se può partecipare o no alla festa. */

const name =[
    'Giovanni',
    'Giorgio',
    'Genoveffo',
    'Ugo'
];

const userName = prompt('mi fornisca gentilmente il suo nome Bonuomo');

let valid = 'non posso entrare villano';

for (let i = 0; i < name.length; i++) {
    const element = name[i];
    if (element===userName){
        valid = 'lei è il benvenuto Messere';
    }
}
alert(valid);