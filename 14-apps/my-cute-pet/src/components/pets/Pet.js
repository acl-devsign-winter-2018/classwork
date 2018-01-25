import html from './pet.html';
import './pet.css';
import Template from '../Template';

const template = new Template(html);

export default class Pet {
  constructor(key, pet) {
    this.key = key;
    this.pet = pet;
  }

  update(pet) {
    this.header.textContent = `${pet.name} the ${pet.type}`;
  }

  render() {
    const dom = template.clone();
    this.header = dom.querySelector('article');
    dom.querySelector('a').href = `#pets/${this.key}`;
    this.update(this.pet);
    return dom;
  }
}