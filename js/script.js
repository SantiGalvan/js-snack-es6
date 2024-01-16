console.log('JS OK');

//? SNACK 1

// Array degli invitati
const guests = [
    'Brad Pitt',
    'Johnny Depp',
    'Lady Gaga',
    'Cristiano Ronaldo',
    'Georgina Rodriguez',
    'Chiara Ferragni',
    'Fedez',
    'George Clooney',
    'Amal Clooney',
    'Maneskin'
];

// Nome del tavolo
const tableName = 'Tavolo Vip';

// Creo l'array vuoto
guestsList = [];

// Creo un forEach
guests.forEach((guest, i) => {

    // Creo i miei oggetti
    const newList = {
        tableName: tableName,
        name: guest,
        place: i + 1,
    };

    // Pusho gli oggetti creati
    guestsList.push(newList);
});

// Stampo in console
console.log(guestsList);

