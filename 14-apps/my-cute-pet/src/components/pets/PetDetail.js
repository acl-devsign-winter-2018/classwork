import html from './pet-detail.html';
import './pet-detail.css';
import Template from '../Template';
import { db } from '../../services/firebase';

const template = new Template(html);
const pets = db.ref('pets');

export default class PetDetail {
  constructor(key) {
    this.key = key;
  }

  render() {
    const dom = template.clone();

    const header = dom.querySelector('h2');

    this.onValue = pets.child(this.key).on('value', data => {
      const pet = data.val();
      header.textContent = `${pet.name} the ${pet.type}`;
    });

    return dom;
  }

  unrender() {
    pets.child(this.key).off('value', this.onValue);
  }
}