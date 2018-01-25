import Template from '../Template';
import html from './app.html';
import './app.css';
import Header from './Header';
import Pets from '../pets/Pets.js';
// import Home from '../home/Home.js';
import { removeChildren } from '../dom';

const template = new Template(html);

const map = new Map();
map.set('#books', Pets);

export default class App {

  constructor() {
    window.onhashchange = () => {
      this.setPage();
    };
  }

  setPage() {
    // Way to access value by key with an object
    // const Component = map[window.location.hash] || Home;
    const Component = map.get(window.location.hash) || Pets;
    const component = new Component();
    removeChildren(this.main);
    this.main.appendChild(component.render());
  }

  render() {
    const dom = template.clone();
    
    dom.querySelector('header').appendChild(new Header().render());
    this.main = dom.querySelector('main');
    this.setPage();
    
    return dom;
  }
}
