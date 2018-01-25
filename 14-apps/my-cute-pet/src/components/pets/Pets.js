import Template from '../Template';
import html from './pets.html';
import './pets.css';
import PetList from './PetList';
// import { removeChildren } from '../dom';

const template = new Template(html);

export default class Pets {
  constructor() {
    // const { hash } = window.location;
  }

  render() {
    const dom = template.clone();

    this.section = dom.querySelector('section');
    const petList = new PetList();
    this.section.appendChild(petList.render());

    return dom;
  }
}
