import html from './register.html';
import './register.css';
import Template from '../Template';

const template = new Template(html);

export default class Register {

  handleSubmit(form) {
    const data = new FormData(form);
    const obj = {};
    data.forEach((value, key) => obj[key] = value);
    console.log(obj);
  }

  handleToggleShowPassword() {
    const type = this.password.type;
    this.password.type = type === 'password' ? 'text' : 'password';
    this.showPassword.textContent = type === 'password' ? 'Hide' : 'Show';
  }

  render() {
    const dom = template.clone();

    const form = dom.querySelector('form');
    
    form.addEventListener('submit', event => {
      event.preventDefault();
      this.handleSubmit(event.target);
    });

    // form.addEventListener('blur', event => {
    //   const element = event.srcElement;
    //   if(element.checkValidity()) return;
    //   setTimeout(() => {
    //     form.reportValidity();
    //   }, 10);
    // }, true);

    form.addEventListener('blur', event => {
      const element = event.srcElement;
      element.setAttribute('data-dirty', '');
      element.nextElementSibling.textContent = element.validationMessage;
    }, true);

    this.password = dom.querySelector('input[name=password]'); 
    
    const handler = ({ target }) => {
      target.setCustomValidity('');
      if(!target.checkValidity()) return;
      
      const valid = checkPassword(target.value);
      if(!valid) {
        target.setCustomValidity('Password must contain at least one uppercase character');
      }
    };
    
    this.password.addEventListener('keyup', handler);
    this.password.addEventListener('paste', handler);
    
    this.showPassword = dom.querySelector('button.show-password');
    this.showPassword.addEventListener('click', () => this.handleToggleShowPassword());

    return dom;
  }
}

const checkPassword = password => {
  return password.toLowerCase() !== password;
};