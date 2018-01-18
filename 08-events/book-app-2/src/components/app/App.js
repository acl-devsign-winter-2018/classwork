import Template from '../Template';
import html from './app.html';
import './app.css';
import Header from './Header';
import Books from '../books/Books.js';
import Home from '../home/Home.js';
import Register from '../account/Register';
import { removeChildren } from '../dom';

const template = new Template(html);

export default class App {

  setPage() {

  }

  render() {
    const dom = template.clone();
    
    dom.querySelector('header').appendChild(new Header().render());

    this.main = dom.querySelector('main');
    
    this.setPage();
    
    return dom;
  }
}
