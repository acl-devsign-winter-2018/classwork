/* eslint no-unused-vars: "off" */

const person1 = {
  name: 'brumhilda'
};

// new object property value:
const person2 = {
  ...person1,
  name: 'Broomhilda'
};

// lists of things (arrays)

const toys1 = ['broom stick', 'cauldron'];

// adding (pushing)

const toys2 = [
  ...toys1,
  'flame thrower'
];

// delete (typically have id)
const toys3 = toys2.filter(t => t !== 'cauldron');

// insert in the middle:
const index = toys3.indexOf('broom stick');
const toys4 = [
  ...toys3.slice(0, index),
  'gold cauldron',
  ...toys3.slice(index + 1)
];

// complex example, adding to array of object:
const complex1 = {
  name: 'BroomHilda',
  toys: ['cauldron', 'broomstick']
};

const complex2 = {
  ...complex1,
  toys: [
    ...complex1.toys,
    'flame thrower'
  ]
};

// complex array with objects:
const complex4 = [
  { name: 'bob', color: 'blue' },
  { name: 'sally', color: 'yellow' },
  { name: 'tammy', color: 'red' },
];

const indexOfSally = complex4.findIndex(p => p.name === 'sally');
const sally = complex4[indexOfSally];

const complex5 = [
  ...complex4.slice(0, indexOfSally - 1),
  {
    ...sally,
    color: 'puce'
  },
  ...complex4.slice(indexOfSally + 1)
];