import Template from '../Template';
import html from './app.html';
import './app.css';

import Home from '../home/Home.js';

const template = new Template(html);


export default class App {

  render() {
    const dom = template.clone();

    dom.querySelector('main').appendChild(new Home().render());

    return dom;
  }

}
