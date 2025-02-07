let superHeroes = 
[
    { name: 'Superman', power: 100, universe: 'DC' },
    { name: 'CaptainAmerica', power: 93, universe: 'Marvel' },
    { name: 'Batman', power: 75, universe: 'DC' },
    { name: 'BlackWidow', power: 78 , universe: 'Marvel' },
    { name: 'DrStrange', power: 91 , universe: 'Marvel' },
    { name: 'Spiderman', power: 90, universe: 'Marvel' },
    { name: 'Ironman', power: 88, universe: 'Marvel' },
    { name: 'WonderWoman', power: 92, universe: 'DC' },
    { name: 'BlackPanther', power: 87 , universe: 'Marvel' },
    { name: 'Flash', power: 80, universe: 'DC' },
    { name: 'Hulk', power: 83, universe: 'Marvel' },
    { name: 'Thor', power: 95, universe: 'Marvel' }
]

superHeroes.forEach(hero => {
    if (hero.universe === 'DC') {
        hero.team = 'Justice League';
    } else if (hero.universe === 'Marvel') {
        hero.team = 'Avengers';
    }
});

let rankedSuperheroes = superHeroes.map(hero => ({...hero,rank: hero.power > 90 ? 'Top Tier' : 'Second Tier'}));

rankedSuperheroes.forEach(hero => console.log(hero));










