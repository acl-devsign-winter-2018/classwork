import Template from '../Template';
import html from './app.html';
import './app.css';

const template = new Template(html);

export default class App {
  render() {
    const dom = template.clone();

    return dom;
  }
}