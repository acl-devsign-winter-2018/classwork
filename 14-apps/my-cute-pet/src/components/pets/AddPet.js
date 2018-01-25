import html from './add-pet.html';
import './add-pet.css';
import Template from '../Template';

const template = new Template(html);

export default class Pet {
  constructor(onAdd) {
    this.onAdd = onAdd;
  }

  handleSubmit(form) {
    this.error.textContent = '';

    const data = new FormData(form);
    const obj = {};
    data.forEach((value, key) => obj[key] = value);    
    this.onAdd(obj)
      .then(() => this.form.reset())
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

    return dom;
  }
}