import Template from '../../Template';
import html from './add-pet.html';
import './add-pet.css';
import { db } from '../../../services/firebase';

const template = new Template(html);
const pets = db.ref('pets');

export default class AddPet {
  constructor(onAdd) {
    this.onAdd = onAdd;
  }

  handleSubmit(form) {
    this.error.textContent = '';

    const data = new FormData(form);
    const obj = {};
    data.forEach((value, key) => obj[key] = value);    
    
    const ref = pets.push();
    ref.set(obj)
      .then(() => window.location.hash = `#pets/${ref.key}`)
      .catch(err => this.error.textContent = err);
  }

  render() {
    const dom = template.clone();
    this.error = dom.querySelector('.error');

    this.form = dom.querySelector('form');
    this.form.addEventListener('submit', event => {
      event.preventDefault();
      this.handleSubmit(event.target);
    });

    dom.querySelector('button[type=button]').addEventListener('click', event => {
      event.preventDefault();
      window.location.hash = '#pets';
    });

    return dom;
  }

  unrender() {
    // no-op
  }
}