import Template from '../Template';
import html from './app.html';
import './app.css';
import Header from './Header';
import './header.css';
import './style.css';
import Content from '../content/Content.js';

const template = new Template(html);

export default class App {
  render() {
    const dom = template.clone();
    dom.querySelector('header').appendChild(new Header().render());
    dom.querySelector('main').appendChild(new Content().render());
    
    this.typeScale = dom.getElementById('type-scale');
    
    dom.getElementById('type-scale-select').onchange = event => {
      const elem = event.target;
      const elemValue = elem.options[elem.selectedIndex].value;
      
      this.typeScale.className = elemValue;
    };

    this.fontPair = dom.getElementById('font-pair');
    
    dom.getElementById('font-pair-select').onchange = () => {
      const elem = window.event.srcElement;
      const elemValue = elem.options[elem.selectedIndex].value;
      
      this.fontPair.className = elemValue;
    };
    
    return dom;
  }
}