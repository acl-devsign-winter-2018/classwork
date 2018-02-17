/* eslint no-console: off */
import faker from 'faker';
import cowsay from 'cowsay-browser';

const words = number => faker.random.words(number);

let cowSaid = cowsay.say({ text: words(4), f: 'cow' });

console.log(cowSaid);