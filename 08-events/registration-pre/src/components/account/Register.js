import html from './register.html';
import css from './register.css';
import Template from '../Template';

const template = new Template(html);

export default class Home {
  render() {
    return template.clone();
  }
}