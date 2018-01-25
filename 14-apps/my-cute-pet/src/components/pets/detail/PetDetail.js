import Template from '../../Template';
import html from './pet-detail.html';
import './pet-detail.css';
import Images from './Images';
import { db } from '../../../services/firebase';

const template = new Template(html);
const pets = db.ref('pets');

export default class PetDetail {
  constructor(key) {
    this.key = key;
    this.pet = pets.child(key);
  }

  render() {
    const dom = template.clone();

    const header = dom.querySelector('h2');

    this.onValue = this.pet.on('value', data => {
      const pet = data.val();
      header.textContent = `${pet.name} the ${pet.type}`;
    });

    this.images = new Images(this.key);
    dom.querySelector('section.images').append(this.images.render());

    return dom;
  }

  unrender() {
    pets.child(this.key).off('value', this.onValue);
    this.images.unrender();
  }
}