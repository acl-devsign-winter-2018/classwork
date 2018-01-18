import html from './register.html';
import './register.css';
import Template from '../Template';

const template = new Template(html);

export default class Register {

  constructor() {
    this.showPassword = false;
  }

  handleSubmit(form) {
    const data = new FormData(form);
    const obj = {};
    data.forEach((value, key) => obj[key] = value);
    console.log(obj);
  }

  handleShowPassword(show) {
    this.showPassword = show;
    this.password.type = show ? 'text' : 'password';
  }

  render() {
    const dom = template.clone();

    dom.querySelector('form').addEventListener('submit', event => {
      event.preventDefault();
      this.handleSubmit(event.target);
    });

    this.password = dom.querySelector('input[name=password]');
    this.handleShowPassword(false);

    return dom;
  }
}