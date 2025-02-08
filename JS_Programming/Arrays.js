let superHeroes = [
    { name: 'Superman', power: 100, universe: 'DC' },
    { name: 'CaptainAmerica', power: 93, universe: 'Marvel' },
    { name: 'Batman', power: 75, universe: 'DC' },
    { name: 'BlackWidow', power: 78, universe: 'Marvel' },
    { name: 'DrStrange', power: 91, universe: 'Marvel' },
    { name: 'Spiderman', power: 90, universe: 'Marvel' },
    { name: 'Ironman', power: 88, universe: 'Marvel' },
    { name: 'WonderWoman', power: 92, universe: 'DC' },
    { name: 'BlackPanther', power: 87, universe: 'Marvel' },
    { name: 'Flash', power: 80, universe: 'DC' },
    { name: 'Hulk', power: 83, universe: 'Marvel' },
    { name: 'Thor', power: 95, universe: 'Marvel' }
];

//Add the team property using forEach
superHeroes.forEach(hero => {
    if (hero.universe === 'DC') {
        hero.team = 'Justice League';
    } else if (hero.universe === 'Marvel') {
        hero.team = 'Avengers';
    }
});

//Output the list of superheroes after adding the team property
console.log('\nSuperheroes with Team Property:');
superHeroes.forEach(hero => console.log(hero));

//Create rankedSuperheroes using map and conditional operator
let rankedSuperheroes = superHeroes.map(hero => ({
    ...hero,
    rank: hero.power > 90 ? 'Top Tier' : 'Second Tier'
}));

//Output the list of ranked superheroes
console.log('\nSuperheros with the rank property:');
rankedSuperheroes.forEach(hero => console.log(hero));

//Filter the Marvel superheroes
let marvelHeroes = rankedSuperheroes.filter(hero => hero.universe === 'Marvel');

//Output the list of Marvel heroes
console.log('\nMarvel Heroes:');
marvelHeroes.forEach(hero => console.log(hero));

//Sort rankedSuperheroes by power in descending order
let sortedHeroes = rankedSuperheroes.slice().sort((a, b) => b.power - a.power);

//Output the sorted list of superheroes
console.log('\nSorted Superheroes by Power:');
sortedHeroes.forEach(hero => console.log(hero));
