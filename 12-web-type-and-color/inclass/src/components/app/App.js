import Template from '../Template';
import html from './app.html';
import './app.css';
import Header from '../header/Header';
import '../header/header.css';
import Content from '../content/Content';
import '../content/content.css';
import Footer from '../footer/Footer';
import '../footer/footer.css';

const template = new Template(html);

export default class App {

  updateStyle(evtTarget, domWrapper) {
    const evtTargetValue = evtTarget.options[evtTarget.selectedIndex].value;
    domWrapper.className = evtTargetValue;
  }

  render() {
    const dom = template.clone();
    dom.querySelector('header').appendChild(new Header().render());
    dom.querySelector('main').appendChild(new Content().render());
    dom.querySelector('footer').appendChild(new Footer().render());

    this.typeScale = dom.getElementById('type-scale');
    this.fontPair = dom.getElementById('font-pair');

    dom.getElementById('type-scale-select').onchange = event => {
      this.updateStyle(event.target, this.typeScale);
    };
    dom.getElementById('font-pair-select').onchange = event => {
      this.updateStyle(event.target, this.fontPair);
    };
    
    return dom;
  }
}