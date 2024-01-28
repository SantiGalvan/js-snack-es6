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

//? SNACK 3

// Creo l'array di oggetti
const cycles = [
    {
        name: 'Atala',
        weight: 40,
    },
    {
        name: 'De Rosa',
        weight: 50,
    },
    {
        name: 'Garelli',
        weight: 35,
    },
    {
        name: 'Colnago',
        weight: 45,
    },
    {
        name: 'Lombardo',
        weight: 55,
    },
    {
        name: 'Fantic',
        weight: 20,
    },
    {
        name: 'Bianchi',
        weight: 25,
    },
];


// Creo un una variabile con il primo oggetto dell'array
let lightestCycle = cycles[0];

// Creo un ciclo forEach
cycles.forEach(cycle => {

    // Faccio il destructuring
    const { weight } = cycle;

    // Controllo quale bicicletta è la mesno pesante
    if (weight < lightestCycle.weight) lightestCycle = cycle;
});

// Stampo in console
console.log(lightestCycle);

//? SNACK 4

// Creo l'array di ogetti
const teams = [
    {
        name: 'Inter',
        points: 0,
        fouls: 0,
    },
    {
        name: 'Milan',
        points: 0,
        fouls: 0,
    },
    {
        name: 'Fiorentina',
        points: 0,
        fouls: 0,
    },
    {
        name: 'Palermo',
        points: 0,
        fouls: 0,
    },
    {
        name: 'Juventus',
        points: 0,
        fouls: 0,
    },
    {
        name: 'Roma',
        points: 0,
        fouls: 0,
    },
];

// Creo una funzione per generare i numeri random
const getRandomNumber = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);

// Creo un ciclo forEach
teams.forEach((team) => {
    // Aggiungo i numeri random all'array di oggetti
    team.points = getRandomNumber(1, 100);
    team.fouls = getRandomNumber(1, 100);
});

const teamStatistics = teams.map(({ name, fouls }) => ({ name, fouls }));

console.log(teamStatistics);