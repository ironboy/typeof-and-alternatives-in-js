class Dog { };

let someValues = [
    undefined,
    null,
    true,
    false,
    'I am a string',
    50,
    123120931290831290382183901280933890120n,
    Symbol('foo'),
    function () { return 3; },
    () => 3,
    async function () { return 4; },
    async () => 4,
    { what: 'I am the property in an object' },
    ['I am an element in an array'],
    new Date(),
    new Promise(resolve => 1),
    new Dog()
];

function betterTypeOf(value) {
    if (value === undefined) { return 'undefined' };
    if (value === null) { return 'null'; }
    return value.constructor.name;
}

for (let value of someValues) {
    console.log('value', value, 'betterTypeOf', betterTypeOf(value));
}