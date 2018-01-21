import Template from '../Template';
import html from './app.html';
import './app.css';
import Header from './Header';
import './header.css';
import One from '../content/one/One.js';
import Two from '../content/two/Two.js';
import Three from '../content/three/Three.js';
import '../content/content.css';
import { removeChildren } from '../dom';

const map = new Map();
map.set('#two', Two);
map.set('#three', Three);

const template = new Template(html);

export default class App {

  constructor() {
    window.onhashchange = () => {
      this.setPage();
    };
  }

  setPage() {
    const Component = map.get(window.location.hash) || One;
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