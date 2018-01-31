import html from './header.html';
import './header.css';
import Template from '../../Template';

const template = new Template(html);

export default class Header {

  render() {
    const dom = template.clone();

    return dom;
  }
}