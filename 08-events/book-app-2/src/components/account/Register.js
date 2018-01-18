import html from './register.html';
import './register.css';
import Template from '../Template';
import { register } from '../../services/authApi';

const template = new Template(html);

export default class Register {

  handleSubmit(form) {
    const data = new FormData(form);
    const obj = {};
    data.forEach((value, key) => obj[key] = value);

    this.registrationError.textContent = '';
    
    register(obj)
      .then(() => {
        window.location.hash = '#books';
      })
      .catch(error => {
        this.registrationError.textContent = error;
      });
  }

  render() {
    const dom = template.clone();

    const form = dom.querySelector('form');
    
    form.addEventListener('submit', event => {
      event.preventDefault();
      this.handleSubmit(event.target);
    });

    this.registrationError = dom.querySelector('registration-error');

    return dom;
  }
}