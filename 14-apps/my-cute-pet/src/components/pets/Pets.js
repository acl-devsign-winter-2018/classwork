import Template from '../Template';
import html from './pets.html';
import './pets.css';
import AddPet from './add/AddPet';
import PetDetail from './detail/PetDetail.js';
import PetList from './list/PetList';
import { removeChildren } from '../dom';

const template = new Template(html);

export default class Pets {
  constructor() {
    this.hashChange = () => this.setChildPage();
    window.addEventListener('hashchange', this.hashChange);
  }

  setChildPage() {
    const routes = window.location.hash.split('/');
    // force the comparison against undefined
    // to fail by using an empty string
    const childPage = routes[1] || '';
    if(this.childPage === childPage) return;

    this.childPage = childPage;
    if(this.childComponent) this.childComponent.unrender();
    removeChildren(this.section);

    let childComponent;
    if(childPage === 'add') childComponent = new AddPet();
    else if(childPage) childComponent = new PetDetail(childPage);
    else childComponent = new PetList();

    this.childComponent = childComponent;
    this.section.appendChild(childComponent.render());
  }

  render() {
    const dom = template.clone();
    this.section = dom.querySelector('section');
    this.setChildPage();
    return dom;
  }

  unrender() {
    window.removeEventListener('hashchange', this.hashChange);
  }
}
