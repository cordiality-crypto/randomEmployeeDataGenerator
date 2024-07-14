const Name = [
    'Vhagar',
    'Vermithor',
    'Vermax',
    'Tyraxes',
    'Syrax',
    'Sunfyre',
    'Silverwing',
    'Seasmoke',
    'Moondancer',
    'Meleys',
    'Dreamfyre',
    'Caraxes',
    'Arrax',
    'Balerion'
];

const Salary = [3900000, 1300000, 8900000, 10300000, 98700000];

const Language = [
    'Python',
    'Java',
    'Javascript',
    'Assembly',
    'C++',
    'C',
    'Ruby',
    'R',
    'Rust',
    'Zig',
    'Go'
];

const City = [
    'Moscow',
    'Vladivostok',
    'Volgograd',  // corrected spelling from Volvograd
    'St. Petersburg',
    'Warsaw',
    'Helsinki',
    'Tallinn',  // corrected spelling from Talinn
    'Stockholm',
    'Oslo',
    'Bergen',  // corrected spelling from Berg
    'Copenhagen',
    'Hamburg',
    'Berlin',
    'Cologne',
    'Frankfurt',
    'Munich',
    'Bern',
    'Zurich',
    'Geneva',
    'Milan',
    'Venice',
    'Rome',
    'Naples',
    'Istanbul',
    'Ankara',
    'Athens',
    'Sarajevo',
    'Vienna',
    'Budapest',
    'Amsterdam',
    'Rotterdam',
    'The Hague', 
    'Paris',
    'Marseille', 
    'Bonn',
    'Lyon',
    'Nice',
    'Madrid',
    'Barcelona',
    'Lisbon',
    'London',
    'Manchester',
    'Oxford',
    'Cambridge',
    'Dublin',
    'Kaliningrad'
];

const IsManager = [true, false];

const a = Name.length;
const b = Salary.length;
const c = Language.length;
const d = City.length;
const e = IsManager.length;


document.addEventListener('DOMContentLoaded', () => {
    const generator = document.getElementById('generate');
    const degenerator = document.getElementById('degenerate');

    generator.addEventListener('click', () => {
        const rand = Math.floor(Math.random() * Math.random() * 100);
        const employee = {
            name: Name[rand % a],
            salary: Salary[rand % b],
            language: Language[rand % c],
            city: City[rand % d],
            isManager: IsManager[Math.floor(Math.random() * 2)]
        };
        console.log('Generatig random data...');
        fetch('/saveEmployee', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(employee)
        });
    });

    degenerator.addEventListener('click', async () => {
        console.log('Data deleted.');
        await fetch('/clearEmployees', {
            method: 'DELETE'
        });
    });
});
