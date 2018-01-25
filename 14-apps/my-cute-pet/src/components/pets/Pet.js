import html from './pet.html';
import './pet.css';
import Template from '../Template';

const template = new Template(html);

export default class Pet {
  constructor(pet) {
    this.pet = pet;
  }

  render() {
    const dom = template.clone();
    const { pet } = this;

    this.li = 
    dom.querySelector('p').textContent = `${pet.name} the ${pet.type}`;

    return dom;
  }
}