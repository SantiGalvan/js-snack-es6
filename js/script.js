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


//? SNACK 2
// Array degli studenti
const students = [
    {
        id: 213,
        name: 'Marco della Rovere',
        grades: 78,
    },
    {
        id: 110,
        name: 'Paola Cortellessa',
        grades: 96,
    },
    {
        id: 250,
        name: 'Andrea Mantegna',
        grades: 48,
    },
    {
        id: 145,
        name: 'Gaia Borromini',
        grades: 74,
    },
    {
        id: 196,
        name: 'Luigi Grimaldello',
        grades: 68,
    },
    {
        id: 102,
        name: 'Piero della Francesca',
        grades: 50,
    },
    {
        id: 120,
        name: 'Francesca da Polenta',
        grades: 84,
    },
];

const list = document.getElementById('list');

// - 1 Creo la lista con gli studenti che hanno un voto superiore al 70
const topStudents = students.filter(({ grades }) => grades >= 70);
console.log(topStudents);

// - 2 Creo la lista con gli studenti che hanno un voto superiore al 70 e un id superiore a 120
const bestStudents = students.filter(({ grades, id }) => grades >= 70 && id > 120);
console.log(bestStudents);

// - 3 Creo una lista con i nomi degli studenti tutto in maiuscolo
const nameStudents = students.map(({ name }) => name.toUpperCase());
console.log(nameStudents);

const items = nameStudents.reduce((result, nameStudent) => result + `<li>${nameStudent}</li>`, '');
list.innerHTML = items;
