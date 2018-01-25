import html from './pet-list.html';
import './pet-list.css';
import Template from '../../Template';
import Pet from './Pet';
import { db } from '../../../services/firebase';

const template = new Template(html);
const pets = db.ref('pets');

export default class PetList {
  constructor() {
    this.map = new Map();
  }

  render() {
    const dom = template.clone();
    
    //data.val(), () => this.handleRemove(data.key)
    const ul = dom.querySelector('ul');

    this.childAdded = pets.on('child_added', data => {
      const pet = new Pet(data.key, data.val());
      const petDom = pet.render();
      this.map.set(data.key, [...petDom.childNodes]);
      ul.appendChild(petDom);
    });

    this.childRemoved = pets.on('child_removed', data => {
      this.map.get(data.key).forEach(node => node.remove());
    });

    this.childChange = pets.on('child_changed', data => {
      this.map.get(data.key).update(data.val());
    });

    return dom;
  }

  unrender() {
    pets.on('child_added', this.childAdded);
    pets.on('child_removed', this.childRemoved);
    pets.on('child_changed', this.childChange);
  }
}