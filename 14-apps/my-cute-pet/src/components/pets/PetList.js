import html from './pet-list.html';
import './pet-list.css';
import Template from '../Template';
import AddPet from './AddPet';
import Pet from './Pet';
import { db } from '../../services/firebase';

const pets = db.ref('pets');

const template = new Template(html);

export default class PetList {
  constructor() {
    this.map = new Map();
  }

  handleAdd(pet) {
    return pets.push().set(pet);
  }

  handleRemove(key) {
    pets.child(key).remove();
  }

  render() {
    const dom = template.clone();
    
    const addPet = new AddPet(pet => this.handleAdd(pet));
    dom.querySelector('section').appendChild(addPet.render());

    const ul = dom.querySelector('ul');
    pets.on('child_added', data => {
      const pet = new Pet(data.val(), () => this.handleRemove(data.key));
      ul.appendChild(pet.render());
    });

    return dom;
  }
}